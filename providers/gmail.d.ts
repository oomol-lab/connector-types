import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add and/or remove labels on a single Gmail message. Provide at least one label mutation and use label IDs from `list_labels`. */
    "gmail.add_label_to_email": {
      input: {
        /** Gmail message ID. */
        messageId: string;
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
        /** Label IDs to add. */
        addLabelIds?: Array<string>;
        /** Label IDs to remove. */
        removeLabelIds?: Array<string>;
      };
      output: {
        /** Gmail message ID. */
        messageId: string;
        /** Gmail thread ID. */
        threadId: string;
        /** Label IDs applied to the message. */
        labelIds: Array<string>;
        /** Normalized message subject line. */
        subject: string;
        /** Normalized sender value. */
        sender: string;
        /** Normalized To header value. */
        to: string;
        /** Short preview of the message subject and body. */
        preview: {
          /** Preview subject extracted from the message. */
          subject: string;
          /** Preview body text extracted from the message. */
          body: string;
        };
        /** Raw Gmail payload object, or null when it was not included. */
        payload: Record<string, unknown> | null;
        /** Best-effort plain-text representation of the message body. */
        messageText: string;
        /** Normalized attachment summaries. */
        attachmentList: Array<{
          /** Attachment ID, or null when Gmail inlines the body. */
          attachmentId: string | null;
          /** Attachment filename. */
          filename: string;
          /** Attachment MIME type. */
          mimeType: string;
          /** Attachment size in bytes. */
          size: number;
        }>;
        /** Message timestamp returned by Gmail. */
        messageTimestamp: string;
        /** Raw RFC 2822 message content when Gmail returns it. */
        raw?: string;
      };
    };
    /** Add and/or remove labels on up to 1,000 Gmail messages in one request. Use this for bulk archive, mark-as-read, or custom label workflows. */
    "gmail.batch_modify_messages": {
      input: {
        /**
         * Message IDs to modify in bulk.
         * @minItems 1
         * @maxItems 1000
         */
        messageIds: Array<string>;
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
        /** Label IDs to add. */
        addLabelIds?: Array<string>;
        /** Label IDs to remove. */
        removeLabelIds?: Array<string>;
      };
      output: {
        /** Whether the Gmail operation completed successfully. */
        success: boolean;
      };
    };
    /** Create a Gmail draft with a simplified input and output shape. This compatibility action returns only the created `draftId`. */
    "gmail.create_draft": {
      input: {
        /** Primary recipient email address. */
        to: string;
        /** Email subject line. */
        subject: string;
        /** Email body content. */
        body: string;
        /** Cc recipient email address. */
        cc?: string;
      };
      output: {
        /** Gmail draft ID. */
        draftId: string;
      };
    };
    /** Create a Gmail draft with recipients, subject, body, and optional threading. Use `threadId` to draft a reply in an existing conversation. */
    "gmail.create_email_draft": {
      input: {
        /** Primary recipient email address. */
        recipientEmail?: string;
        /** Additional To recipients. */
        extraRecipients?: Array<string>;
        /** Cc recipients. */
        cc?: string | Array<string>;
        /** Bcc recipients. */
        bcc?: string | Array<string>;
        /** Email subject line. */
        subject?: string;
        /** Email body content. */
        body?: string;
        /** Reply or draft body content. */
        messageBody?: string;
        /** Set to true when the body content is already HTML. */
        isHtml?: boolean;
        /** Gmail thread ID. */
        threadId?: string;
        /** Verified Gmail send-as alias to use in the From header. */
        fromEmail?: string;
      };
      output: {
        /** Gmail draft ID. */
        draftId: string;
        /** Gmail message ID. */
        messageId: string;
        /** Gmail thread ID. */
        threadId: string;
      };
    };
    /** Create a Gmail filter with matching criteria and resulting actions. Use this to automatically organize incoming mail. */
    "gmail.create_filter": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
        /** Gmail filter criteria payload. */
        criteria: Record<string, unknown>;
        /** Actions to apply when the filter matches. */
        action: {
          /** Label IDs to add. */
          addLabelIds?: Array<string>;
          /** Label IDs to remove. */
          removeLabelIds?: Array<string>;
          /** Email address to forward matching messages to. */
          forward?: string;
        };
      };
      output: {
        /** Gmail filter ID. */
        id: string;
        /** Gmail filter criteria payload. */
        criteria?: Record<string, unknown>;
        /** Actions applied when the filter matches. */
        action?: {
          /** Label IDs to add. */
          addLabelIds?: Array<string>;
          /** Label IDs to remove. */
          removeLabelIds?: Array<string>;
          /** Email address to forward matching messages to. */
          forward?: string;
        };
      };
    };
    /** Create a new Gmail label and return its internal label ID. Use the returned ID in downstream label modification actions. */
    "gmail.create_label": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
        /** Display name for the new Gmail label. */
        name: string;
        /** Whether the label appears in the label list. */
        labelListVisibility?: "labelShow" | "labelShowIfUnread" | "labelHide";
        /** Whether messages with this label appear in the message list. */
        messageListVisibility?: "show" | "hide";
        /** Label colors to apply. */
        color?: {
          /** Hex color used for the label text. */
          textColor: string;
          /** Hex color used for the label background. */
          backgroundColor: string;
        };
      };
      output: {
        /** Gmail label ID. */
        id: string;
        /** Label display name. */
        name: string;
        /** Gmail label type, such as system or user. */
        type: string;
        /** Whether messages with this label appear in the message list. */
        messageListVisibility?: "show" | "hide";
        /** Whether the label appears in the label list. */
        labelListVisibility?: "labelShow" | "labelShowIfUnread" | "labelHide";
        /** Total number of messages with this label. */
        messagesTotal?: number;
        /** Unread message count for this label. */
        messagesUnread?: number;
        /** Total number of threads with this label. */
        threadsTotal?: number;
        /** Unread thread count for this label. */
        threadsUnread?: number;
        /** Configured label colors. */
        color?: {
          /** Hex color used for the label text. */
          textColor: string;
          /** Hex color used for the label background. */
          backgroundColor: string;
        };
      };
    };
    /** Permanently delete a Gmail draft by draft ID instead of sending it. */
    "gmail.delete_draft": {
      input: {
        /** Gmail draft ID. */
        draftId: string;
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Whether the Gmail operation completed successfully. */
        success: boolean;
      };
    };
    /** Permanently delete a Gmail filter by filter ID. */
    "gmail.delete_filter": {
      input: {
        /** Gmail filter ID. */
        filterId: string;
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Whether the Gmail operation completed successfully. */
        success: boolean;
      };
    };
    /** Permanently delete a user-created Gmail label from the mailbox. This removes the label definition itself rather than just detaching it from one message. */
    "gmail.delete_label": {
      input: {
        /** Gmail label ID. */
        labelId: string;
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Whether the Gmail operation completed successfully. */
        success: boolean;
      };
    };
    /** List Gmail messages with optional query, label, and pagination filters. Use `detail` to choose between identifiers only, lightweight summaries, or full normalized messages. */
    "gmail.fetch_emails": {
      input: {
        /** Gmail search query. */
        query?: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 500
         * @default 20
         */
        maxResults?: number;
        /** Label IDs that messages must match. */
        labelIds?: Array<string>;
        /** Opaque pagination token returned by a previous Gmail response. */
        pageToken?: string;
        /** Whether to include messages from Spam and Trash. */
        includeSpamTrash?: boolean;
        /**
         * How much message detail to return: identifiers only, lightweight summaries, or full normalized messages.
         * @default "summary"
         */
        detail?: "ids" | "summary" | "full";
      };
      output: {
        /** Messages returned by Gmail as lightweight references, lightweight summaries, or full normalized payloads. */
        messages: Array<{
          /** Gmail message ID. */
          messageId: string;
          /** Gmail thread ID. */
          threadId: string;
        } | {
          /** Gmail message ID. */
          messageId: string;
          /** Gmail thread ID. */
          threadId: string;
          /** Label IDs applied to the message. */
          labelIds: Array<string>;
          /** Normalized message subject line. */
          subject: string;
          /** Normalized sender value. */
          sender: string;
          /** Normalized To header value. */
          to: string;
          /** Message timestamp returned by Gmail. */
          messageTimestamp: string;
        } | {
          /** Gmail message ID. */
          messageId: string;
          /** Gmail thread ID. */
          threadId: string;
          /** Label IDs applied to the message. */
          labelIds: Array<string>;
          /** Normalized message subject line. */
          subject: string;
          /** Normalized sender value. */
          sender: string;
          /** Normalized To header value. */
          to: string;
          /** Short preview of the message subject and body. */
          preview: {
            /** Preview subject extracted from the message. */
            subject: string;
            /** Preview body text extracted from the message. */
            body: string;
          };
          /** Raw Gmail payload object, or null when it was not included. */
          payload: Record<string, unknown> | null;
          /** Best-effort plain-text representation of the message body. */
          messageText: string;
          /** Normalized attachment summaries. */
          attachmentList: Array<{
            /** Attachment ID, or null when Gmail inlines the body. */
            attachmentId: string | null;
            /** Attachment filename. */
            filename: string;
            /** Attachment MIME type. */
            mimeType: string;
            /** Attachment size in bytes. */
            size: number;
          }>;
          /** Message timestamp returned by Gmail. */
          messageTimestamp: string;
          /** Raw RFC 2822 message content when Gmail returns it. */
          raw?: string;
        }>;
        /** Opaque token for the next page, or null when there are no more results. */
        nextPageToken: string | null;
        /** Approximate number of matching results reported by Gmail. */
        resultSizeEstimate: number;
      };
    };
    /** Fetch a Gmail message by message ID with a controllable response format. Use this when you need the normalized full message payload instead of the simplified `get_message` output. */
    "gmail.fetch_message_by_message_id": {
      input: {
        /** Gmail message ID. */
        messageId: string;
        /** Gmail response format to request. */
        format?: "minimal" | "full" | "raw" | "metadata";
      };
      output: {
        /** Gmail message ID. */
        messageId: string;
        /** Gmail thread ID. */
        threadId: string;
        /** Label IDs applied to the message. */
        labelIds: Array<string>;
        /** Normalized message subject line. */
        subject: string;
        /** Normalized sender value. */
        sender: string;
        /** Normalized To header value. */
        to: string;
        /** Short preview of the message subject and body. */
        preview: {
          /** Preview subject extracted from the message. */
          subject: string;
          /** Preview body text extracted from the message. */
          body: string;
        };
        /** Raw Gmail payload object, or null when it was not included. */
        payload: Record<string, unknown> | null;
        /** Best-effort plain-text representation of the message body. */
        messageText: string;
        /** Normalized attachment summaries. */
        attachmentList: Array<{
          /** Attachment ID, or null when Gmail inlines the body. */
          attachmentId: string | null;
          /** Attachment filename. */
          filename: string;
          /** Attachment MIME type. */
          mimeType: string;
          /** Attachment size in bytes. */
          size: number;
        }>;
        /** Message timestamp returned by Gmail. */
        messageTimestamp: string;
        /** Raw RFC 2822 message content when Gmail returns it. */
        raw?: string;
      };
    };
    /** Fetch all messages in a Gmail thread. Use this to inspect the full conversation payload for a known `threadId`. */
    "gmail.fetch_message_by_thread_id": {
      input: {
        /** Gmail thread ID. */
        threadId: string;
      };
      output: {
        /** Gmail thread ID. */
        threadId: string;
        /** Mailbox history checkpoint ID, or null when Gmail does not return one. */
        historyId: string | null;
        /** Messages contained in the thread. */
        messages: Array<{
          /** Gmail message ID. */
          messageId: string;
          /** Gmail thread ID. */
          threadId: string;
          /** Label IDs applied to the message. */
          labelIds: Array<string>;
          /** Normalized message subject line. */
          subject: string;
          /** Normalized sender value. */
          sender: string;
          /** Normalized To header value. */
          to: string;
          /** Short preview of the message subject and body. */
          preview: {
            /** Preview subject extracted from the message. */
            subject: string;
            /** Preview body text extracted from the message. */
            body: string;
          };
          /** Raw Gmail payload object, or null when it was not included. */
          payload: Record<string, unknown> | null;
          /** Best-effort plain-text representation of the message body. */
          messageText: string;
          /** Normalized attachment summaries. */
          attachmentList: Array<{
            /** Attachment ID, or null when Gmail inlines the body. */
            attachmentId: string | null;
            /** Attachment filename. */
            filename: string;
            /** Attachment MIME type. */
            mimeType: string;
            /** Attachment size in bytes. */
            size: number;
          }>;
          /** Message timestamp returned by Gmail. */
          messageTimestamp: string;
          /** Raw RFC 2822 message content when Gmail returns it. */
          raw?: string;
        }>;
      };
    };
    /** Get the current Gmail auto-forwarding configuration, including enabled status, forwarding address, and disposition. */
    "gmail.get_auto_forwarding": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Whether this Gmail setting is enabled. */
        enabled?: boolean;
        /** Gmail disposition behavior for forwarded or POP messages. */
        disposition?: string;
        /** Email address currently used by this Gmail setting. */
        emailAddress?: string;
      };
    };
    /** Get a Gmail draft by draft ID. Use the `format` parameter to control how much message detail is returned. */
    "gmail.get_draft": {
      input: {
        /** Gmail draft ID. */
        draftId: string;
        /** Gmail response format to request. */
        format?: "minimal" | "full" | "raw" | "metadata";
      };
      output: {
        /** Gmail draft ID. */
        id: string;
        /** Normalized Gmail message payload stored in the draft. */
        message: {
          /** Gmail message ID. */
          messageId: string;
          /** Gmail thread ID. */
          threadId: string;
          /** Label IDs applied to the message. */
          labelIds: Array<string>;
          /** Normalized message subject line. */
          subject: string;
          /** Normalized sender value. */
          sender: string;
          /** Normalized To header value. */
          to: string;
          /** Short preview of the message subject and body. */
          preview: {
            /** Preview subject extracted from the message. */
            subject: string;
            /** Preview body text extracted from the message. */
            body: string;
          };
          /** Raw Gmail payload object, or null when it was not included. */
          payload: Record<string, unknown> | null;
          /** Best-effort plain-text representation of the message body. */
          messageText: string;
          /** Normalized attachment summaries. */
          attachmentList: Array<{
            /** Attachment ID, or null when Gmail inlines the body. */
            attachmentId: string | null;
            /** Attachment filename. */
            filename: string;
            /** Attachment MIME type. */
            mimeType: string;
            /** Attachment size in bytes. */
            size: number;
          }>;
          /** Message timestamp returned by Gmail. */
          messageTimestamp: string;
          /** Raw RFC 2822 message content when Gmail returns it. */
          raw?: string;
        };
      };
    };
    /** Get a Gmail filter by filter ID so you can inspect its criteria and actions. */
    "gmail.get_filter": {
      input: {
        /** Gmail filter ID. */
        filterId: string;
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Gmail filter ID. */
        id: string;
        /** Gmail filter criteria payload. */
        criteria?: Record<string, unknown>;
        /** Actions applied when the filter matches. */
        action?: {
          /** Label IDs to add. */
          addLabelIds?: Array<string>;
          /** Label IDs to remove. */
          removeLabelIds?: Array<string>;
          /** Email address to forward matching messages to. */
          forward?: string;
        };
      };
    };
    /** Get details for a Gmail label, including its name, type, visibility settings, counts, and optional color. */
    "gmail.get_label": {
      input: {
        /** Gmail label ID. */
        labelId: string;
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Gmail label ID. */
        id: string;
        /** Label display name. */
        name: string;
        /** Gmail label type, such as system or user. */
        type: string;
        /** Whether messages with this label appear in the message list. */
        messageListVisibility?: "show" | "hide";
        /** Whether the label appears in the label list. */
        labelListVisibility?: "labelShow" | "labelShowIfUnread" | "labelHide";
        /** Total number of messages with this label. */
        messagesTotal?: number;
        /** Unread message count for this label. */
        messagesUnread?: number;
        /** Total number of threads with this label. */
        threadsTotal?: number;
        /** Unread thread count for this label. */
        threadsUnread?: number;
        /** Configured label colors. */
        color?: {
          /** Hex color used for the label text. */
          textColor: string;
          /** Hex color used for the label background. */
          backgroundColor: string;
        };
      };
    };
    /** Get the Gmail display language settings for the connected account. */
    "gmail.get_language_settings": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Language code used for the Gmail interface. */
        displayLanguage: string;
      };
    };
    /** Get a Gmail message by message ID with a simplified normalized output. Use this when you only need subject, from, to, date, and body. */
    "gmail.get_message": {
      input: {
        /** Gmail message ID. */
        messageId: string;
      };
      output: {
        /** Gmail message ID. */
        messageId: string;
        /** Gmail thread ID. */
        threadId: string;
        /** Normalized message subject line. */
        subject: string;
        /** Normalized From header value. */
        from: string;
        /** Normalized To header value. */
        to: string;
        /** Message date string returned by Gmail. */
        date: string;
        /** Best-effort plain-text message body. */
        body: string;
      };
    };
    /** Get the connected Gmail profile, including mailbox totals and the current `historyId`. Use the returned `historyId` as the checkpoint for incremental sync via `list_history`. */
    "gmail.get_profile": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Email address for the connected Gmail account. */
        emailAddress: string;
        /** Total number of messages in the mailbox. */
        messagesTotal: number;
        /** Total number of threads in the mailbox. */
        threadsTotal: number;
        /** Mailbox history checkpoint ID. */
        historyId: string;
      };
    };
    /** Get the Gmail vacation responder settings, including whether auto-replies are enabled and their current content. */
    "gmail.get_vacation_settings": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Whether Gmail auto-replies are enabled. */
        enableAutoReply?: boolean;
        /** Subject line used in vacation auto-replies. */
        responseSubject?: string;
        /** Plain-text body used in vacation auto-replies. */
        responseBodyPlainText?: string;
        /** HTML body used in vacation auto-replies. */
        responseBodyHtml?: string;
        /** Whether auto-replies are limited to contacts. */
        restrictToContacts?: boolean;
        /** Whether auto-replies are limited to the user's domain. */
        restrictToDomain?: boolean;
        /** Start time for the vacation responder. */
        startTime?: string;
        /** End time for the vacation responder. */
        endTime?: string;
      };
    };
    /** List Gmail drafts with pagination, and optionally hydrate each draft into full message details when `verbose` is true. */
    "gmail.list_drafts": {
      input: {
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 500
         */
        maxResults?: number;
        /** Opaque pagination token returned by a previous Gmail response. */
        pageToken?: string;
        /** When true, hydrate each draft into full message details. */
        verbose?: boolean;
      };
      output: {
        /** Drafts returned by Gmail, optionally hydrated with message details. */
        drafts: Array<{
          /** Gmail draft ID. */
          id: string;
          /** Identifiers of the message stored in the draft. */
          message: {
            /** Gmail message ID. */
            messageId: string;
            /** Gmail thread ID. */
            threadId: string;
          };
        } | {
          /** Gmail draft ID. */
          id: string;
          /** Normalized Gmail message payload stored in the draft. */
          message: {
            /** Gmail message ID. */
            messageId: string;
            /** Gmail thread ID. */
            threadId: string;
            /** Label IDs applied to the message. */
            labelIds: Array<string>;
            /** Normalized message subject line. */
            subject: string;
            /** Normalized sender value. */
            sender: string;
            /** Normalized To header value. */
            to: string;
            /** Short preview of the message subject and body. */
            preview: {
              /** Preview subject extracted from the message. */
              subject: string;
              /** Preview body text extracted from the message. */
              body: string;
            };
            /** Raw Gmail payload object, or null when it was not included. */
            payload: Record<string, unknown> | null;
            /** Best-effort plain-text representation of the message body. */
            messageText: string;
            /** Normalized attachment summaries. */
            attachmentList: Array<{
              /** Attachment ID, or null when Gmail inlines the body. */
              attachmentId: string | null;
              /** Attachment filename. */
              filename: string;
              /** Attachment MIME type. */
              mimeType: string;
              /** Attachment size in bytes. */
              size: number;
            }>;
            /** Message timestamp returned by Gmail. */
            messageTimestamp: string;
            /** Raw RFC 2822 message content when Gmail returns it. */
            raw?: string;
          };
        }>;
        /** Opaque token for the next page, or null when there are no more results. */
        nextPageToken: string | null;
      };
    };
    /** List Gmail filters for the mailbox. Use this to audit existing rules or avoid creating duplicates. */
    "gmail.list_filters": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Filters configured on the mailbox. */
        filters: Array<{
          /** Gmail filter ID. */
          id: string;
          /** Gmail filter criteria payload. */
          criteria?: Record<string, unknown>;
          /** Actions applied when the filter matches. */
          action?: {
            /** Label IDs to add. */
            addLabelIds?: Array<string>;
            /** Label IDs to remove. */
            removeLabelIds?: Array<string>;
            /** Email address to forward matching messages to. */
            forward?: string;
          };
        }>;
      };
    };
    /** List the forwarding addresses that are registered on the Gmail account. */
    "gmail.list_forwarding_addresses": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Forwarding addresses registered on the mailbox. */
        forwardingAddresses: Array<{
          /** Forwarding email address. */
          forwardingEmail: string;
          /** Verification status of the forwarding address. */
          verificationStatus?: string;
        }>;
      };
    };
    /** List Gmail mailbox change history after a known `startHistoryId`. Use this for incremental sync and checkpoint the latest returned `historyId`. */
    "gmail.list_history": {
      input: {
        /** History checkpoint to start listing changes after. */
        startHistoryId: string;
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
        /** Opaque pagination token returned by a previous Gmail response. */
        pageToken?: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 500
         */
        maxResults?: number;
        /** Optional label ID used to filter history results. */
        labelId?: string;
        /** History event types to include. */
        historyTypes?: Array<string>;
      };
      output: {
        /** Mailbox history records returned by Gmail. */
        history: Array<Record<string, unknown>>;
        /** Mailbox history checkpoint ID. */
        historyId: string;
        /** Opaque token for the next page, or null when there are no more results. */
        nextPageToken: string | null;
      };
    };
    /** List all system and user-created Gmail labels. Use this to discover the internal label IDs required by label mutation actions. */
    "gmail.list_labels": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Labels available in the mailbox. */
        labels: Array<{
          /** Gmail label ID. */
          id: string;
          /** Label display name. */
          name: string;
          /** Gmail label type, such as system or user. */
          type: string;
          /** Whether messages with this label appear in the message list. */
          messageListVisibility?: "show" | "hide";
          /** Whether the label appears in the label list. */
          labelListVisibility?: "labelShow" | "labelShowIfUnread" | "labelHide";
          /** Total number of messages with this label. */
          messagesTotal?: number;
          /** Unread message count for this label. */
          messagesUnread?: number;
          /** Total number of threads with this label. */
          threadsTotal?: number;
          /** Unread thread count for this label. */
          threadsUnread?: number;
          /** Configured label colors. */
          color?: {
            /** Hex color used for the label text. */
            textColor: string;
            /** Hex color used for the label background. */
            backgroundColor: string;
          };
        }>;
      };
    };
    /** List Gmail threads with optional query filtering and pagination. Spam and trash stay excluded unless you explicitly target them in the query. */
    "gmail.list_threads": {
      input: {
        /** Gmail search query. */
        query?: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 500
         */
        maxResults?: number;
        /** Opaque pagination token returned by a previous Gmail response. */
        pageToken?: string;
        /** When true, expand each thread with full message details. */
        verbose?: boolean;
      };
      output: {
        /** Threads returned by Gmail. */
        threads: Array<{
          /** Gmail thread ID. */
          threadId: string;
          /** Snippet returned by Gmail for the thread. */
          snippet: string;
          /** Mailbox history checkpoint ID, or null when Gmail does not return one. */
          historyId: string | null;
          /** Expanded messages in the thread when verbose output is requested. */
          messages?: Array<{
            /** Gmail message ID. */
            messageId: string;
            /** Gmail thread ID. */
            threadId: string;
            /** Label IDs applied to the message. */
            labelIds: Array<string>;
            /** Normalized message subject line. */
            subject: string;
            /** Normalized sender value. */
            sender: string;
            /** Normalized To header value. */
            to: string;
            /** Short preview of the message subject and body. */
            preview: {
              /** Preview subject extracted from the message. */
              subject: string;
              /** Preview body text extracted from the message. */
              body: string;
            };
            /** Raw Gmail payload object, or null when it was not included. */
            payload: Record<string, unknown> | null;
            /** Best-effort plain-text representation of the message body. */
            messageText: string;
            /** Normalized attachment summaries. */
            attachmentList: Array<{
              /** Attachment ID, or null when Gmail inlines the body. */
              attachmentId: string | null;
              /** Attachment filename. */
              filename: string;
              /** Attachment MIME type. */
              mimeType: string;
              /** Attachment size in bytes. */
              size: number;
            }>;
            /** Message timestamp returned by Gmail. */
            messageTimestamp: string;
            /** Raw RFC 2822 message content when Gmail returns it. */
            raw?: string;
          }>;
        }>;
        /** Opaque token for the next page, or null when there are no more results. */
        nextPageToken: string | null;
        /** Approximate number of matching results reported by Gmail. */
        resultSizeEstimate: number;
      };
    };
    /** Add and/or remove labels on every message in a Gmail thread. Use this when the label change should apply to the whole conversation. */
    "gmail.modify_thread_labels": {
      input: {
        /** Gmail thread ID. */
        threadId: string;
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
        /** Label IDs to add. */
        addLabelIds?: Array<string>;
        /** Label IDs to remove. */
        removeLabelIds?: Array<string>;
      };
      output: {
        /** Gmail thread ID. */
        threadId: string;
        /** Mailbox history checkpoint ID, or null when Gmail does not return one. */
        historyId: string | null;
        /** Messages in the updated thread. */
        messages: Array<{
          /** Gmail message ID. */
          messageId: string;
          /** Gmail thread ID. */
          threadId: string;
          /** Label IDs applied to the message. */
          labelIds: Array<string>;
          /** Normalized message subject line. */
          subject: string;
          /** Normalized sender value. */
          sender: string;
          /** Normalized To header value. */
          to: string;
          /** Short preview of the message subject and body. */
          preview: {
            /** Preview subject extracted from the message. */
            subject: string;
            /** Preview body text extracted from the message. */
            body: string;
          };
          /** Raw Gmail payload object, or null when it was not included. */
          payload: Record<string, unknown> | null;
          /** Best-effort plain-text representation of the message body. */
          messageText: string;
          /** Normalized attachment summaries. */
          attachmentList: Array<{
            /** Attachment ID, or null when Gmail inlines the body. */
            attachmentId: string | null;
            /** Attachment filename. */
            filename: string;
            /** Attachment MIME type. */
            mimeType: string;
            /** Attachment size in bytes. */
            size: number;
          }>;
          /** Message timestamp returned by Gmail. */
          messageTimestamp: string;
          /** Raw RFC 2822 message content when Gmail returns it. */
          raw?: string;
        }>;
      };
    };
    /** Move an entire Gmail thread to trash, including all messages in that conversation. */
    "gmail.move_thread_to_trash": {
      input: {
        /** Gmail thread ID. */
        threadId: string;
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Gmail thread ID. */
        threadId: string;
        /** Mailbox history checkpoint ID, or null when Gmail does not return one. */
        historyId: string | null;
        /** Messages in the trashed thread. */
        messages: Array<{
          /** Gmail message ID. */
          messageId: string;
          /** Gmail thread ID. */
          threadId: string;
          /** Label IDs applied to the message. */
          labelIds: Array<string>;
          /** Normalized message subject line. */
          subject: string;
          /** Normalized sender value. */
          sender: string;
          /** Normalized To header value. */
          to: string;
          /** Short preview of the message subject and body. */
          preview: {
            /** Preview subject extracted from the message. */
            subject: string;
            /** Preview body text extracted from the message. */
            body: string;
          };
          /** Raw Gmail payload object, or null when it was not included. */
          payload: Record<string, unknown> | null;
          /** Best-effort plain-text representation of the message body. */
          messageText: string;
          /** Normalized attachment summaries. */
          attachmentList: Array<{
            /** Attachment ID, or null when Gmail inlines the body. */
            attachmentId: string | null;
            /** Attachment filename. */
            filename: string;
            /** Attachment MIME type. */
            mimeType: string;
            /** Attachment size in bytes. */
            size: number;
          }>;
          /** Message timestamp returned by Gmail. */
          messageTimestamp: string;
          /** Raw RFC 2822 message content when Gmail returns it. */
          raw?: string;
        }>;
      };
    };
    /** Move a Gmail message to trash. The message remains recoverable until it is permanently deleted by Gmail. */
    "gmail.move_to_trash": {
      input: {
        /** Gmail message ID. */
        messageId: string;
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Gmail message ID. */
        messageId: string;
        /** Gmail thread ID. */
        threadId: string;
        /** Label IDs applied to the message. */
        labelIds: Array<string>;
        /** Normalized message subject line. */
        subject: string;
        /** Normalized sender value. */
        sender: string;
        /** Normalized To header value. */
        to: string;
        /** Short preview of the message subject and body. */
        preview: {
          /** Preview subject extracted from the message. */
          subject: string;
          /** Preview body text extracted from the message. */
          body: string;
        };
        /** Raw Gmail payload object, or null when it was not included. */
        payload: Record<string, unknown> | null;
        /** Best-effort plain-text representation of the message body. */
        messageText: string;
        /** Normalized attachment summaries. */
        attachmentList: Array<{
          /** Attachment ID, or null when Gmail inlines the body. */
          attachmentId: string | null;
          /** Attachment filename. */
          filename: string;
          /** Attachment MIME type. */
          mimeType: string;
          /** Attachment size in bytes. */
          size: number;
        }>;
        /** Message timestamp returned by Gmail. */
        messageTimestamp: string;
        /** Raw RFC 2822 message content when Gmail returns it. */
        raw?: string;
      };
    };
    /** Patch a user-created Gmail label. Use this for partial updates to the label name, visibility settings, or color. */
    "gmail.patch_label": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
        /** Gmail label ID. */
        labelId: string;
        /** Updated display name for the label. */
        name?: string;
        /** Whether the label appears in the label list. */
        labelListVisibility?: "labelShow" | "labelShowIfUnread" | "labelHide";
        /** Whether messages with this label appear in the message list. */
        messageListVisibility?: "show" | "hide";
        /** Updated label colors. */
        color?: {
          /** Hex color used for the label text. */
          textColor: string;
          /** Hex color used for the label background. */
          backgroundColor: string;
        };
      };
      output: {
        /** Gmail label ID. */
        id: string;
        /** Label display name. */
        name: string;
        /** Gmail label type, such as system or user. */
        type: string;
        /** Whether messages with this label appear in the message list. */
        messageListVisibility?: "show" | "hide";
        /** Whether the label appears in the label list. */
        labelListVisibility?: "labelShow" | "labelShowIfUnread" | "labelHide";
        /** Total number of messages with this label. */
        messagesTotal?: number;
        /** Unread message count for this label. */
        messagesUnread?: number;
        /** Total number of threads with this label. */
        threadsTotal?: number;
        /** Unread thread count for this label. */
        threadsUnread?: number;
        /** Configured label colors. */
        color?: {
          /** Hex color used for the label text. */
          textColor: string;
          /** Hex color used for the label background. */
          backgroundColor: string;
        };
      };
    };
    /** Reply to an existing Gmail thread using the original message's reply headers. This compatibility action returns only the new `messageId`. */
    "gmail.reply_email": {
      input: {
        /** Gmail thread ID. */
        threadId: string;
        /** Gmail message ID. */
        messageId: string;
        /** Email body content. */
        body: string;
      };
      output: {
        /** Gmail message ID. */
        messageId: string;
      };
    };
    /** Reply to an existing Gmail thread while preserving Gmail threading. Use this when you want the reply to stay in the same conversation and optionally override recipients. */
    "gmail.reply_to_thread": {
      input: {
        /** Gmail thread ID. */
        threadId: string;
        /** Primary recipient email address. */
        recipientEmail?: string;
        /** Additional To recipients. */
        extraRecipients?: Array<string>;
        /** Cc recipients. */
        cc?: string | Array<string>;
        /** Bcc recipients. */
        bcc?: string | Array<string>;
        /** Reply or draft body content. */
        messageBody?: string;
        /** Email body content. */
        body?: string;
        /** Set to true when the body content is already HTML. */
        isHtml?: boolean;
      };
      output: {
        /** Gmail message ID. */
        messageId: string;
        /** Gmail thread ID. */
        threadId: string;
      };
    };
    /** Search Gmail threads by query and return lightweight thread summaries. Spam and trash stay excluded unless you explicitly target them in the query. */
    "gmail.search_threads": {
      input: {
        /** Gmail search query. */
        query: string;
        /**
         * Maximum number of thread summaries to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        maxResults?: number;
      };
      output: {
        /** Lightweight thread summaries that match the query. */
        threads: Array<{
          /** Gmail thread ID. */
          threadId: string;
          /** Snippet returned by Gmail for the thread. */
          snippet: string;
        }>;
      };
    };
    /** Send an existing Gmail draft as-is using the recipients already stored in the draft. Sending is immediate and cannot be scheduled by this action. */
    "gmail.send_draft": {
      input: {
        /** Gmail draft ID. */
        draftId: string;
      };
      output: {
        /** Gmail message ID. */
        messageId: string;
        /** Gmail thread ID, or null when Gmail does not return one. */
        threadId: string | null;
      };
    };
    /** Send an email from the connected Gmail account. At least one recipient and one of subject or body are required. */
    "gmail.send_email": {
      input: {
        /** Primary recipient email address. */
        to?: string;
        /** Additional To recipients. */
        extraRecipients?: Array<string>;
        /** Cc recipients. */
        cc?: string | Array<string>;
        /** Bcc recipients. */
        bcc?: string | Array<string>;
        /** Email subject line. */
        subject?: string;
        /** Email body content. */
        body?: string;
        /** Set to true when the body content is already HTML. */
        isHtml?: boolean;
        /** Verified Gmail send-as alias to use in the From header. */
        fromEmail?: string;
      };
      output: {
        /** Gmail message ID. */
        messageId: string;
      };
    };
    /** Get the Gmail IMAP settings, including whether IMAP is enabled and how expunge or folder size settings are configured. */
    "gmail.settings_get_imap": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Whether this Gmail setting is enabled. */
        enabled?: boolean;
        /** Whether Gmail expunges deleted IMAP messages automatically. */
        autoExpunge?: boolean;
        /** How Gmail handles expunge operations over IMAP. */
        expungeBehavior?: string;
        /** Maximum folder size exposed over IMAP. */
        maxFolderSize?: number;
      };
    };
    /** Get the Gmail POP settings, including access window and message disposition. */
    "gmail.settings_get_pop": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Which messages are exposed over POP. */
        accessWindow?: string;
        /** What Gmail does with messages after POP access. */
        disposition?: string;
      };
    };
    /** Stop Gmail push watch notifications for the mailbox. Use this to disable notifications that were previously created via the watch endpoint. */
    "gmail.stop_watch": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Whether the Gmail operation completed successfully. */
        success: boolean;
      };
    };
    /** Restore a previously trashed Gmail message back to the mailbox. */
    "gmail.untrash_message": {
      input: {
        /** Gmail message ID. */
        messageId: string;
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Gmail message ID. */
        messageId: string;
        /** Gmail thread ID. */
        threadId: string;
        /** Label IDs applied to the message. */
        labelIds: Array<string>;
        /** Normalized message subject line. */
        subject: string;
        /** Normalized sender value. */
        sender: string;
        /** Normalized To header value. */
        to: string;
        /** Short preview of the message subject and body. */
        preview: {
          /** Preview subject extracted from the message. */
          subject: string;
          /** Preview body text extracted from the message. */
          body: string;
        };
        /** Raw Gmail payload object, or null when it was not included. */
        payload: Record<string, unknown> | null;
        /** Best-effort plain-text representation of the message body. */
        messageText: string;
        /** Normalized attachment summaries. */
        attachmentList: Array<{
          /** Attachment ID, or null when Gmail inlines the body. */
          attachmentId: string | null;
          /** Attachment filename. */
          filename: string;
          /** Attachment MIME type. */
          mimeType: string;
          /** Attachment size in bytes. */
          size: number;
        }>;
        /** Message timestamp returned by Gmail. */
        messageTimestamp: string;
        /** Raw RFC 2822 message content when Gmail returns it. */
        raw?: string;
      };
    };
    /** Restore a previously trashed Gmail thread and its messages. */
    "gmail.untrash_thread": {
      input: {
        /** Gmail thread ID. */
        threadId: string;
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
      };
      output: {
        /** Gmail thread ID. */
        threadId: string;
        /** Mailbox history checkpoint ID, or null when Gmail does not return one. */
        historyId: string | null;
        /** Messages restored with the thread. */
        messages: Array<{
          /** Gmail message ID. */
          messageId: string;
          /** Gmail thread ID. */
          threadId: string;
          /** Label IDs applied to the message. */
          labelIds: Array<string>;
          /** Normalized message subject line. */
          subject: string;
          /** Normalized sender value. */
          sender: string;
          /** Normalized To header value. */
          to: string;
          /** Short preview of the message subject and body. */
          preview: {
            /** Preview subject extracted from the message. */
            subject: string;
            /** Preview body text extracted from the message. */
            body: string;
          };
          /** Raw Gmail payload object, or null when it was not included. */
          payload: Record<string, unknown> | null;
          /** Best-effort plain-text representation of the message body. */
          messageText: string;
          /** Normalized attachment summaries. */
          attachmentList: Array<{
            /** Attachment ID, or null when Gmail inlines the body. */
            attachmentId: string | null;
            /** Attachment filename. */
            filename: string;
            /** Attachment MIME type. */
            mimeType: string;
            /** Attachment size in bytes. */
            size: number;
          }>;
          /** Message timestamp returned by Gmail. */
          messageTimestamp: string;
          /** Raw RFC 2822 message content when Gmail returns it. */
          raw?: string;
        }>;
      };
    };
    /** Update an existing Gmail draft in place. Omitted fields fall back to the current draft content, so you can replace only the parts you want to change. */
    "gmail.update_draft": {
      input: {
        /** Gmail draft ID. */
        draftId: string;
        /** Primary recipient email address. */
        recipientEmail?: string;
        /** Additional To recipients. */
        extraRecipients?: Array<string>;
        /** Cc recipients. */
        cc?: string | Array<string>;
        /** Bcc recipients. */
        bcc?: string | Array<string>;
        /** Email subject line. */
        subject?: string;
        /** Email body content. */
        body?: string;
        /** Reply or draft body content. */
        messageBody?: string;
        /** Set to true when the body content is already HTML. */
        isHtml?: boolean;
        /** Gmail thread ID. */
        threadId?: string;
        /** Verified Gmail send-as alias to use in the From header. */
        fromEmail?: string;
      };
      output: {
        /** Gmail draft ID. */
        draftId: string;
        /** Gmail message ID. */
        messageId: string;
        /** Gmail thread ID. */
        threadId: string;
      };
    };
    /** Update the Gmail IMAP settings, including enablement, auto-expunge behavior, expunge behavior, or max folder size. */
    "gmail.update_imap_settings": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
        /** Whether this Gmail setting is enabled. */
        enabled?: boolean;
        /** Whether Gmail expunges deleted IMAP messages automatically. */
        autoExpunge?: boolean;
        /** How Gmail handles expunge operations over IMAP. */
        expungeBehavior?: string;
        /** Maximum folder size exposed over IMAP. */
        maxFolderSize?: number;
      };
      output: {
        /** Whether this Gmail setting is enabled. */
        enabled?: boolean;
        /** Whether Gmail expunges deleted IMAP messages automatically. */
        autoExpunge?: boolean;
        /** How Gmail handles expunge operations over IMAP. */
        expungeBehavior?: string;
        /** Maximum folder size exposed over IMAP. */
        maxFolderSize?: number;
      };
    };
    /** Update an existing Gmail label's properties, including name, visibility settings, or color. */
    "gmail.update_label": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
        /** Gmail label ID. */
        labelId: string;
        /** Updated display name for the label. */
        name?: string;
        /** Whether the label appears in the label list. */
        labelListVisibility?: "labelShow" | "labelShowIfUnread" | "labelHide";
        /** Whether messages with this label appear in the message list. */
        messageListVisibility?: "show" | "hide";
        /** Updated label colors. */
        color?: {
          /** Hex color used for the label text. */
          textColor: string;
          /** Hex color used for the label background. */
          backgroundColor: string;
        };
      };
      output: {
        /** Gmail label ID. */
        id: string;
        /** Label display name. */
        name: string;
        /** Gmail label type, such as system or user. */
        type: string;
        /** Whether messages with this label appear in the message list. */
        messageListVisibility?: "show" | "hide";
        /** Whether the label appears in the label list. */
        labelListVisibility?: "labelShow" | "labelShowIfUnread" | "labelHide";
        /** Total number of messages with this label. */
        messagesTotal?: number;
        /** Unread message count for this label. */
        messagesUnread?: number;
        /** Total number of threads with this label. */
        threadsTotal?: number;
        /** Unread thread count for this label. */
        threadsUnread?: number;
        /** Configured label colors. */
        color?: {
          /** Hex color used for the label text. */
          textColor: string;
          /** Hex color used for the label background. */
          backgroundColor: string;
        };
      };
    };
    /** Update the Gmail display language settings for the connected account. */
    "gmail.update_language_settings": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
        /** Language code used for the Gmail interface. */
        displayLanguage: string;
      };
      output: {
        /** Language code used for the Gmail interface. */
        displayLanguage: string;
      };
    };
    /** Update the Gmail POP settings, including access window and disposition behavior. */
    "gmail.update_pop_settings": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
        /** Which messages are exposed over POP. */
        accessWindow?: string;
        /** What Gmail does with messages after POP access. */
        disposition?: string;
      };
      output: {
        /** Which messages are exposed over POP. */
        accessWindow?: string;
        /** What Gmail does with messages after POP access. */
        disposition?: string;
      };
    };
    /** Update the Gmail vacation responder settings. Use this to configure out-of-office auto-replies and their active time window. */
    "gmail.update_vacation_settings": {
      input: {
        /** Gmail user ID. Omit to use the connected mailbox. */
        userId?: string;
        /** Whether Gmail auto-replies are enabled. */
        enableAutoReply?: boolean;
        /** Subject line used in vacation auto-replies. */
        responseSubject?: string;
        /** Plain-text body used in vacation auto-replies. */
        responseBodyPlainText?: string;
        /** HTML body used in vacation auto-replies. */
        responseBodyHtml?: string;
        /** Whether auto-replies are limited to contacts. */
        restrictToContacts?: boolean;
        /** Whether auto-replies are limited to the user's domain. */
        restrictToDomain?: boolean;
        /** Start time for the vacation responder. */
        startTime?: string;
        /** End time for the vacation responder. */
        endTime?: string;
      };
      output: {
        /** Whether Gmail auto-replies are enabled. */
        enableAutoReply?: boolean;
        /** Subject line used in vacation auto-replies. */
        responseSubject?: string;
        /** Plain-text body used in vacation auto-replies. */
        responseBodyPlainText?: string;
        /** HTML body used in vacation auto-replies. */
        responseBodyHtml?: string;
        /** Whether auto-replies are limited to contacts. */
        restrictToContacts?: boolean;
        /** Whether auto-replies are limited to the user's domain. */
        restrictToDomain?: boolean;
        /** Start time for the vacation responder. */
        startTime?: string;
        /** End time for the vacation responder. */
        endTime?: string;
      };
    };
  }
}
