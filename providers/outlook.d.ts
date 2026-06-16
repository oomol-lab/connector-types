import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new Outlook draft message with subject, body, recipients, and other writable message properties. */
    "outlook.create_draft": {
      input: {
        /** Subject line for the draft message. */
        subject: string;
        /** Body content for the draft message. */
        body: string;
        /** Whether the draft body is already HTML content. */
        isHtml?: boolean;
        /** Primary recipients for the draft message. */
        toRecipients?: Array<string | {
          /**
           * Recipient email address.
           * @minLength 1
           */
          address: string;
          /** Recipient display name. */
          name?: string;
        }>;
        /** Cc recipients for the draft message. */
        ccRecipients?: Array<string | {
          /**
           * Recipient email address.
           * @minLength 1
           */
          address: string;
          /** Recipient display name. */
          name?: string;
        }>;
        /** Bcc recipients for the draft message. */
        bccRecipients?: Array<string | {
          /**
           * Recipient email address.
           * @minLength 1
           */
          address: string;
          /** Recipient display name. */
          name?: string;
        }>;
        /** Reply-to recipients for the draft message. */
        replyTo?: Array<string | {
          /**
           * Recipient email address.
           * @minLength 1
           */
          address: string;
          /** Recipient display name. */
          name?: string;
        }>;
        /** Message importance. */
        importance?: "low" | "normal" | "high";
        /** Categories to apply to the draft. */
        categories?: Array<string>;
      };
      output: {
        /** Entity tag for the message. */
        "@odata.etag"?: string;
        /** Message ID. */
        id: string;
        /** Timestamp when the message was created. */
        createdDateTime?: string;
        /** Timestamp when the message was last modified. */
        lastModifiedDateTime?: string;
        /** Change key for the message. */
        changeKey?: string;
        /** Categories applied to the message. */
        categories?: Array<string>;
        /** Timestamp when the message was received. */
        receivedDateTime?: string;
        /** Timestamp when the message was sent. */
        sentDateTime?: string;
        /** Whether the message has attachments. */
        hasAttachments?: boolean;
        /** Internet message identifier for the message. */
        internetMessageId?: string;
        /** Message subject. */
        subject?: string;
        /** Preview snippet of the message body. */
        bodyPreview?: string;
        /** Message importance. */
        importance?: string;
        /** Parent folder ID for the message. */
        parentFolderId?: string;
        /** Conversation ID for the message. */
        conversationId?: string;
        /** Conversation index for the message. */
        conversationIndex?: string;
        /** Whether delivery receipts are requested. */
        isDeliveryReceiptRequested?: boolean;
        /** Whether read receipts are requested. */
        isReadReceiptRequested?: boolean;
        /** Whether the message is marked as read. */
        isRead?: boolean;
        /** Whether the message is a draft. */
        isDraft?: boolean;
        /** Web URL for the message in Outlook. */
        webLink?: string;
        /** Outlook inference classification for the message. */
        inferenceClassification?: string;
        /** Message body. */
        body?: {
          /** Message body content type. */
          contentType: string;
          /** Message body content. */
          content: string;
        };
        /** Sender of the message. */
        sender?: {
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        };
        /** Mailbox owner and sender of the message. */
        from?: {
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        };
        /** Primary recipients. */
        toRecipients?: Array<{
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        }>;
        /** Cc recipients. */
        ccRecipients?: Array<{
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        }>;
        /** Bcc recipients. */
        bccRecipients?: Array<{
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        }>;
        /** Reply-to recipients. */
        replyTo?: Array<{
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        }>;
        /** Follow-up flag details. */
        flag?: {
          /** Follow-up flag status. */
          flagStatus?: string;
          /** Follow-up start date and time. */
          startDateTime?: {
            /** Date and time value. */
            dateTime: string;
            /** Time zone identifier for the date and time value. */
            timeZone: string;
          };
          /** Follow-up due date and time. */
          dueDateTime?: {
            /** Date and time value. */
            dateTime: string;
            /** Time zone identifier for the date and time value. */
            timeZone: string;
          };
          /** Follow-up completion date and time. */
          completedDateTime?: {
            /** Date and time value. */
            dateTime: string;
            /** Time zone identifier for the date and time value. */
            timeZone: string;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the current Outlook mailbox settings, including automatic replies, locale, time zone, and working hours. */
    "outlook.get_mailbox_settings": {
      input: Record<string, never>;
      output: {
        /** Automatic replies settings. */
        automaticRepliesSetting?: {
          /** Automatic replies status. */
          status?: string;
          /** External audience for automatic replies. */
          externalAudience?: string;
          /** Scheduled automatic-replies start time. */
          scheduledStartDateTime?: {
            /** Date and time value. */
            dateTime: string;
            /** Time zone identifier for the date and time value. */
            timeZone: string;
          };
          /** Scheduled automatic-replies end time. */
          scheduledEndDateTime?: {
            /** Date and time value. */
            dateTime: string;
            /** Time zone identifier for the date and time value. */
            timeZone: string;
          };
          /** Automatic reply message sent to internal recipients. */
          internalReplyMessage?: string;
          /** Automatic reply message sent to external recipients. */
          externalReplyMessage?: string;
          [key: string]: unknown;
        };
        /** Preferred mailbox time zone. */
        timeZone?: string;
        /** Preferred mailbox locale. */
        language?: {
          /** Locale code for the mailbox. */
          locale: string;
          /** Display name of the locale. */
          displayName?: string;
        };
        /** Working-hours settings. */
        workingHours?: {
          /** Working days of the week. */
          daysOfWeek?: Array<string>;
          /** Working-hours start time. */
          startTime?: string;
          /** Working-hours end time. */
          endTime?: string;
          /** Working-hours time zone information. */
          timeZone?: {
            /** Working-hours time zone name. */
            name?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Mailbox user-purpose metadata. */
        userPurpose?: unknown;
        /** Preferred date format. */
        dateFormat?: string;
        /** Preferred time format. */
        timeFormat?: string;
        /** Delegate meeting-message delivery behavior. */
        delegateMeetingMessageDeliveryOptions?: string;
        [key: string]: unknown;
      };
    };
    /** Get a single Outlook message by message ID, including message metadata and optional body formatting. */
    "outlook.get_message": {
      input: {
        /**
         * Outlook message ID.
         * @minLength 1
         */
        messageId: string;
        /** Message fields to request from Microsoft Graph. */
        select?: Array<string>;
        /** Preferred Outlook body content type for the response. */
        bodyContentType?: "text" | "html";
      };
      output: {
        /** Entity tag for the message. */
        "@odata.etag"?: string;
        /** Message ID. */
        id: string;
        /** Timestamp when the message was created. */
        createdDateTime?: string;
        /** Timestamp when the message was last modified. */
        lastModifiedDateTime?: string;
        /** Change key for the message. */
        changeKey?: string;
        /** Categories applied to the message. */
        categories?: Array<string>;
        /** Timestamp when the message was received. */
        receivedDateTime?: string;
        /** Timestamp when the message was sent. */
        sentDateTime?: string;
        /** Whether the message has attachments. */
        hasAttachments?: boolean;
        /** Internet message identifier for the message. */
        internetMessageId?: string;
        /** Message subject. */
        subject?: string;
        /** Preview snippet of the message body. */
        bodyPreview?: string;
        /** Message importance. */
        importance?: string;
        /** Parent folder ID for the message. */
        parentFolderId?: string;
        /** Conversation ID for the message. */
        conversationId?: string;
        /** Conversation index for the message. */
        conversationIndex?: string;
        /** Whether delivery receipts are requested. */
        isDeliveryReceiptRequested?: boolean;
        /** Whether read receipts are requested. */
        isReadReceiptRequested?: boolean;
        /** Whether the message is marked as read. */
        isRead?: boolean;
        /** Whether the message is a draft. */
        isDraft?: boolean;
        /** Web URL for the message in Outlook. */
        webLink?: string;
        /** Outlook inference classification for the message. */
        inferenceClassification?: string;
        /** Message body. */
        body?: {
          /** Message body content type. */
          contentType: string;
          /** Message body content. */
          content: string;
        };
        /** Sender of the message. */
        sender?: {
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        };
        /** Mailbox owner and sender of the message. */
        from?: {
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        };
        /** Primary recipients. */
        toRecipients?: Array<{
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        }>;
        /** Cc recipients. */
        ccRecipients?: Array<{
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        }>;
        /** Bcc recipients. */
        bccRecipients?: Array<{
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        }>;
        /** Reply-to recipients. */
        replyTo?: Array<{
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        }>;
        /** Follow-up flag details. */
        flag?: {
          /** Follow-up flag status. */
          flagStatus?: string;
          /** Follow-up start date and time. */
          startDateTime?: {
            /** Date and time value. */
            dateTime: string;
            /** Time zone identifier for the date and time value. */
            timeZone: string;
          };
          /** Follow-up due date and time. */
          dueDateTime?: {
            /** Date and time value. */
            dateTime: string;
            /** Time zone identifier for the date and time value. */
            timeZone: string;
          };
          /** Follow-up completion date and time. */
          completedDateTime?: {
            /** Date and time value. */
            dateTime: string;
            /** Time zone identifier for the date and time value. */
            timeZone: string;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the current Outlook account profile from Microsoft Graph so you can identify the connected mailbox. */
    "outlook.get_profile": {
      input: Record<string, never>;
      output: {
        /** Unique identifier for the current account. */
        id: string;
        /** Display name of the current account. */
        displayName?: string;
        /** Primary SMTP address for the current account. */
        mail?: string | null;
        /** User principal name for the current account. */
        userPrincipalName?: string;
        [key: string]: unknown;
      };
    };
    /** List the root-level Outlook mail folders for the connected mailbox, with optional hidden folders and field selection. */
    "outlook.list_mail_folders": {
      input: {
        /**
         * Opaque pagination URL returned by a previous Outlook mail folders response.
         * @format uri
         */
        nextLink?: string;
        /** Whether to include hidden mail folders. */
        includeHiddenFolders?: boolean;
        /**
         * Maximum number of mail folders to return.
         * @minimum 1
         * @maximum 1000
         */
        top?: number;
        /** Mail folder fields to request from Microsoft Graph. */
        select?: Array<string>;
      };
      output: {
        /** Root-level mail folders returned by Outlook. */
        mailFolders: Array<{
          /** OData type for the mail folder. */
          "@odata.type"?: string;
          /** Mail folder ID. */
          id: string;
          /** Display name for the mail folder. */
          displayName: string;
          /** Parent mail folder ID. */
          parentFolderId?: string;
          /** Number of child folders. */
          childFolderCount?: number;
          /** Unread item count. */
          unreadItemCount?: number;
          /** Total item count. */
          totalItemCount?: number;
          /** Whether the folder is hidden. */
          isHidden?: boolean;
          [key: string]: unknown;
        }>;
        /** Pagination URL for the next page, or null when there is no next page. */
        nextLink: string | null;
      };
    };
    /** List Outlook messages from the mailbox or from a specific mail folder, with support for OData filters, sorting, field selection, and pagination. */
    "outlook.list_messages": {
      input: {
        /**
         * Outlook mail folder ID.
         * @minLength 1
         */
        mailFolderId?: string;
        /**
         * Maximum number of messages to return.
         * @minimum 1
         * @maximum 1000
         */
        top?: number;
        /** OData filter expression for the messages query. */
        filter?: string;
        /** OData orderby expression for the messages query. */
        orderby?: string;
        /** Message fields to request from Microsoft Graph. */
        select?: Array<string>;
        /**
         * Opaque pagination URL returned by a previous Outlook messages response.
         * @format uri
         */
        nextLink?: string;
        /** Preferred Outlook body content type for the response. */
        bodyContentType?: "text" | "html";
      };
      output: {
        /** Messages returned by Outlook. */
        messages: Array<{
          /** Entity tag for the message. */
          "@odata.etag"?: string;
          /** Message ID. */
          id: string;
          /** Timestamp when the message was created. */
          createdDateTime?: string;
          /** Timestamp when the message was last modified. */
          lastModifiedDateTime?: string;
          /** Change key for the message. */
          changeKey?: string;
          /** Categories applied to the message. */
          categories?: Array<string>;
          /** Timestamp when the message was received. */
          receivedDateTime?: string;
          /** Timestamp when the message was sent. */
          sentDateTime?: string;
          /** Whether the message has attachments. */
          hasAttachments?: boolean;
          /** Internet message identifier for the message. */
          internetMessageId?: string;
          /** Message subject. */
          subject?: string;
          /** Preview snippet of the message body. */
          bodyPreview?: string;
          /** Message importance. */
          importance?: string;
          /** Parent folder ID for the message. */
          parentFolderId?: string;
          /** Conversation ID for the message. */
          conversationId?: string;
          /** Conversation index for the message. */
          conversationIndex?: string;
          /** Whether delivery receipts are requested. */
          isDeliveryReceiptRequested?: boolean;
          /** Whether read receipts are requested. */
          isReadReceiptRequested?: boolean;
          /** Whether the message is marked as read. */
          isRead?: boolean;
          /** Whether the message is a draft. */
          isDraft?: boolean;
          /** Web URL for the message in Outlook. */
          webLink?: string;
          /** Outlook inference classification for the message. */
          inferenceClassification?: string;
          /** Message body. */
          body?: {
            /** Message body content type. */
            contentType: string;
            /** Message body content. */
            content: string;
          };
          /** Sender of the message. */
          sender?: {
            /** Recipient email address. */
            emailAddress: {
              /** Display name for the email address. */
              name?: string;
              /** Email address value. */
              address: string;
            };
          };
          /** Mailbox owner and sender of the message. */
          from?: {
            /** Recipient email address. */
            emailAddress: {
              /** Display name for the email address. */
              name?: string;
              /** Email address value. */
              address: string;
            };
          };
          /** Primary recipients. */
          toRecipients?: Array<{
            /** Recipient email address. */
            emailAddress: {
              /** Display name for the email address. */
              name?: string;
              /** Email address value. */
              address: string;
            };
          }>;
          /** Cc recipients. */
          ccRecipients?: Array<{
            /** Recipient email address. */
            emailAddress: {
              /** Display name for the email address. */
              name?: string;
              /** Email address value. */
              address: string;
            };
          }>;
          /** Bcc recipients. */
          bccRecipients?: Array<{
            /** Recipient email address. */
            emailAddress: {
              /** Display name for the email address. */
              name?: string;
              /** Email address value. */
              address: string;
            };
          }>;
          /** Reply-to recipients. */
          replyTo?: Array<{
            /** Recipient email address. */
            emailAddress: {
              /** Display name for the email address. */
              name?: string;
              /** Email address value. */
              address: string;
            };
          }>;
          /** Follow-up flag details. */
          flag?: {
            /** Follow-up flag status. */
            flagStatus?: string;
            /** Follow-up start date and time. */
            startDateTime?: {
              /** Date and time value. */
              dateTime: string;
              /** Time zone identifier for the date and time value. */
              timeZone: string;
            };
            /** Follow-up due date and time. */
            dueDateTime?: {
              /** Date and time value. */
              dateTime: string;
              /** Time zone identifier for the date and time value. */
              timeZone: string;
            };
            /** Follow-up completion date and time. */
            completedDateTime?: {
              /** Date and time value. */
              dateTime: string;
              /** Time zone identifier for the date and time value. */
              timeZone: string;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination URL for the next page, or null when there is no next page. */
        nextLink: string | null;
      };
    };
    /** Reply to an existing Outlook message with either a comment or a replacement body, and optionally add more recipients to the reply. */
    "outlook.reply_email": {
      input: {
        /**
         * Outlook message ID.
         * @minLength 1
         */
        messageId: string;
        /** Comment to include with the reply. */
        comment?: string;
        /** Reply body content. */
        body?: string;
        /** Whether the reply body is already HTML content. */
        isHtml?: boolean;
        /** Additional primary recipients for the reply. */
        toRecipients?: Array<string | {
          /**
           * Recipient email address.
           * @minLength 1
           */
          address: string;
          /** Recipient display name. */
          name?: string;
        }>;
        /** Additional Cc recipients for the reply. */
        ccRecipients?: Array<string | {
          /**
           * Recipient email address.
           * @minLength 1
           */
          address: string;
          /** Recipient display name. */
          name?: string;
        }>;
        /** Additional Bcc recipients for the reply. */
        bccRecipients?: Array<string | {
          /**
           * Recipient email address.
           * @minLength 1
           */
          address: string;
          /** Recipient display name. */
          name?: string;
        }>;
      };
      output: {
        /** Whether the Outlook operation completed successfully. */
        success: true;
      };
    };
    /** Send an existing Outlook draft message by message ID. */
    "outlook.send_draft": {
      input: {
        /**
         * Outlook message ID.
         * @minLength 1
         */
        messageId: string;
      };
      output: {
        /** Whether the Outlook operation completed successfully. */
        success: true;
      };
    };
    /** Send a new Outlook email in a single operation, without creating a standalone draft first. */
    "outlook.send_email": {
      input: {
        /** Subject line for the message. */
        subject: string;
        /** Body content for the message. */
        body: string;
        /** Whether the message body is already HTML content. */
        isHtml?: boolean;
        /** Primary recipients for the message. */
        toRecipients?: Array<string | {
          /**
           * Recipient email address.
           * @minLength 1
           */
          address: string;
          /** Recipient display name. */
          name?: string;
        }>;
        /** Cc recipients for the message. */
        ccRecipients?: Array<string | {
          /**
           * Recipient email address.
           * @minLength 1
           */
          address: string;
          /** Recipient display name. */
          name?: string;
        }>;
        /** Bcc recipients for the message. */
        bccRecipients?: Array<string | {
          /**
           * Recipient email address.
           * @minLength 1
           */
          address: string;
          /** Recipient display name. */
          name?: string;
        }>;
        /** Reply-to recipients for the message. */
        replyTo?: Array<string | {
          /**
           * Recipient email address.
           * @minLength 1
           */
          address: string;
          /** Recipient display name. */
          name?: string;
        }>;
        /** Message importance. */
        importance?: "low" | "normal" | "high";
        /** Categories for the message. */
        categories?: Array<string>;
        /** Whether to save the sent message in Sent Items. */
        saveToSentItems?: boolean;
      };
      output: {
        /** Whether the Outlook operation completed successfully. */
        success: true;
      };
    };
    /** Update an existing Outlook draft message. Use this to revise the subject, body, recipients, or other draft-only properties before sending. */
    "outlook.update_draft": {
      input: {
        /**
         * Outlook message ID.
         * @minLength 1
         */
        messageId: string;
        /** Updated subject line for the draft message. */
        subject?: string;
        /** Updated body content for the draft message. */
        body?: string;
        /** Whether the updated draft body is already HTML content. */
        isHtml?: boolean;
        /** Updated primary recipients for the draft message. */
        toRecipients?: Array<string | {
          /**
           * Recipient email address.
           * @minLength 1
           */
          address: string;
          /** Recipient display name. */
          name?: string;
        }>;
        /** Updated Cc recipients for the draft message. */
        ccRecipients?: Array<string | {
          /**
           * Recipient email address.
           * @minLength 1
           */
          address: string;
          /** Recipient display name. */
          name?: string;
        }>;
        /** Updated Bcc recipients for the draft message. */
        bccRecipients?: Array<string | {
          /**
           * Recipient email address.
           * @minLength 1
           */
          address: string;
          /** Recipient display name. */
          name?: string;
        }>;
        /** Updated reply-to recipients for the draft message. */
        replyTo?: Array<string | {
          /**
           * Recipient email address.
           * @minLength 1
           */
          address: string;
          /** Recipient display name. */
          name?: string;
        }>;
        /** Message importance. */
        importance?: "low" | "normal" | "high";
        /** Updated categories for the draft message. */
        categories?: Array<string>;
      };
      output: {
        /** Entity tag for the message. */
        "@odata.etag"?: string;
        /** Message ID. */
        id: string;
        /** Timestamp when the message was created. */
        createdDateTime?: string;
        /** Timestamp when the message was last modified. */
        lastModifiedDateTime?: string;
        /** Change key for the message. */
        changeKey?: string;
        /** Categories applied to the message. */
        categories?: Array<string>;
        /** Timestamp when the message was received. */
        receivedDateTime?: string;
        /** Timestamp when the message was sent. */
        sentDateTime?: string;
        /** Whether the message has attachments. */
        hasAttachments?: boolean;
        /** Internet message identifier for the message. */
        internetMessageId?: string;
        /** Message subject. */
        subject?: string;
        /** Preview snippet of the message body. */
        bodyPreview?: string;
        /** Message importance. */
        importance?: string;
        /** Parent folder ID for the message. */
        parentFolderId?: string;
        /** Conversation ID for the message. */
        conversationId?: string;
        /** Conversation index for the message. */
        conversationIndex?: string;
        /** Whether delivery receipts are requested. */
        isDeliveryReceiptRequested?: boolean;
        /** Whether read receipts are requested. */
        isReadReceiptRequested?: boolean;
        /** Whether the message is marked as read. */
        isRead?: boolean;
        /** Whether the message is a draft. */
        isDraft?: boolean;
        /** Web URL for the message in Outlook. */
        webLink?: string;
        /** Outlook inference classification for the message. */
        inferenceClassification?: string;
        /** Message body. */
        body?: {
          /** Message body content type. */
          contentType: string;
          /** Message body content. */
          content: string;
        };
        /** Sender of the message. */
        sender?: {
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        };
        /** Mailbox owner and sender of the message. */
        from?: {
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        };
        /** Primary recipients. */
        toRecipients?: Array<{
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        }>;
        /** Cc recipients. */
        ccRecipients?: Array<{
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        }>;
        /** Bcc recipients. */
        bccRecipients?: Array<{
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        }>;
        /** Reply-to recipients. */
        replyTo?: Array<{
          /** Recipient email address. */
          emailAddress: {
            /** Display name for the email address. */
            name?: string;
            /** Email address value. */
            address: string;
          };
        }>;
        /** Follow-up flag details. */
        flag?: {
          /** Follow-up flag status. */
          flagStatus?: string;
          /** Follow-up start date and time. */
          startDateTime?: {
            /** Date and time value. */
            dateTime: string;
            /** Time zone identifier for the date and time value. */
            timeZone: string;
          };
          /** Follow-up due date and time. */
          dueDateTime?: {
            /** Date and time value. */
            dateTime: string;
            /** Time zone identifier for the date and time value. */
            timeZone: string;
          };
          /** Follow-up completion date and time. */
          completedDateTime?: {
            /** Date and time value. */
            dateTime: string;
            /** Time zone identifier for the date and time value. */
            timeZone: string;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update Outlook mailbox settings such as automatic replies, locale, time zone, working hours, and date or time formatting. */
    "outlook.update_mailbox_settings": {
      input: {
        /** Updated automatic replies settings. */
        automaticRepliesSetting?: {
          /** Automatic replies status. */
          status?: "disabled" | "alwaysEnabled" | "scheduled";
          /** External audience for automatic replies. */
          externalAudience?: "none" | "contactsOnly" | "all";
          /** Scheduled automatic-replies start time. */
          scheduledStartDateTime?: {
            /** Date and time value. */
            dateTime: string;
            /** Time zone identifier for the date and time value. */
            timeZone: string;
          };
          /** Scheduled automatic-replies end time. */
          scheduledEndDateTime?: {
            /** Date and time value. */
            dateTime: string;
            /** Time zone identifier for the date and time value. */
            timeZone: string;
          };
          /** Automatic reply message for internal recipients. */
          internalReplyMessage?: string;
          /** Automatic reply message for external recipients. */
          externalReplyMessage?: string;
        };
        /** Updated date format. */
        dateFormat?: string;
        /** Updated delegate meeting-message delivery behavior. */
        delegateMeetingMessageDeliveryOptions?: "sendToDelegateAndInformationToPrincipal" | "sendToDelegateAndPrincipal" | "sendToDelegateOnly";
        /** Updated locale information. */
        language?: {
          /**
           * Updated locale code.
           * @minLength 1
           */
          locale: string;
          /** Updated locale display name. */
          displayName?: string;
        };
        /** Updated time format. */
        timeFormat?: string;
        /** Updated mailbox time zone. */
        timeZone?: string;
        /** Updated working-hours settings. */
        workingHours?: {
          /** Working days of the week. */
          daysOfWeek?: Array<string>;
          /** Working-hours start time. */
          startTime?: string;
          /** Working-hours end time. */
          endTime?: string;
          /** Working-hours time zone name or time zone object. */
          timeZone?: string | {
            /**
             * Working-hours time zone name.
             * @minLength 1
             */
            name: string;
          };
        };
      };
      output: {
        /** Automatic replies settings. */
        automaticRepliesSetting?: {
          /** Automatic replies status. */
          status?: string;
          /** External audience for automatic replies. */
          externalAudience?: string;
          /** Scheduled automatic-replies start time. */
          scheduledStartDateTime?: {
            /** Date and time value. */
            dateTime: string;
            /** Time zone identifier for the date and time value. */
            timeZone: string;
          };
          /** Scheduled automatic-replies end time. */
          scheduledEndDateTime?: {
            /** Date and time value. */
            dateTime: string;
            /** Time zone identifier for the date and time value. */
            timeZone: string;
          };
          /** Automatic reply message sent to internal recipients. */
          internalReplyMessage?: string;
          /** Automatic reply message sent to external recipients. */
          externalReplyMessage?: string;
          [key: string]: unknown;
        };
        /** Preferred mailbox time zone. */
        timeZone?: string;
        /** Preferred mailbox locale. */
        language?: {
          /** Locale code for the mailbox. */
          locale: string;
          /** Display name of the locale. */
          displayName?: string;
        };
        /** Working-hours settings. */
        workingHours?: {
          /** Working days of the week. */
          daysOfWeek?: Array<string>;
          /** Working-hours start time. */
          startTime?: string;
          /** Working-hours end time. */
          endTime?: string;
          /** Working-hours time zone information. */
          timeZone?: {
            /** Working-hours time zone name. */
            name?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Mailbox user-purpose metadata. */
        userPurpose?: unknown;
        /** Preferred date format. */
        dateFormat?: string;
        /** Preferred time format. */
        timeFormat?: string;
        /** Delegate meeting-message delivery behavior. */
        delegateMeetingMessageDeliveryOptions?: string;
        [key: string]: unknown;
      };
    };
  }
}
