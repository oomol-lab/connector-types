import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Move an email to Trash or Deleted Items with PortEden delete_email permission. This is a recoverable soft delete. */
    "porteden.delete_email": {
      input: {
        /**
         * Provider-prefixed email ID, such as google:abc123 or m365:xyz789.
         * @minLength 1
         */
        emailId: string;
      };
      output: {
        /** Whether the operation succeeded. */
        success: boolean;
      };
    };
    /** Forward an email to recipients with PortEden forward_email permission. */
    "porteden.forward_email": {
      input: {
        /**
         * Provider-prefixed email ID, such as google:abc123 or m365:xyz789.
         * @minLength 1
         */
        emailId: string;
        /**
         * Recipient addresses and optional display names.
         * @minItems 1
         */
        to: Array<{
          /**
           * Email address.
           * @minLength 1
           */
          email: string;
          /** Display name. */
          name?: string;
        }>;
        /** Recipient addresses and optional display names. */
        cc?: Array<{
          /**
           * Email address.
           * @minLength 1
           */
          email: string;
          /** Display name. */
          name?: string;
        }>;
        /** Optional message to prepend. */
        body?: string;
        /** Body content type; defaults to html. */
        bodyType?: "html" | "text";
      };
      output: {
        /** Whether the operation succeeded. */
        success?: boolean;
        /** Provider-prefixed sent email ID, when available. */
        emailId?: string | null;
        /** Provider-prefixed thread ID, when available. */
        threadId?: string | null;
        /** Upstream failure details, when available. */
        errorMessage?: string | null;
        [key: string]: unknown;
      };
    };
    /** Read a provider-prefixed email, including its body by default, subject to PortEden view_email permissions. */
    "porteden.get_email": {
      input: {
        /**
         * Provider-prefixed email ID, such as google:abc123 or m365:xyz789.
         * @minLength 1
         */
        emailId: string;
        /** Include full body; defaults to true. */
        includeBody?: boolean;
      };
      output: {
        /** Provider-prefixed email ID. */
        id?: string;
        /** Provider-prefixed thread ID. */
        threadId?: string | null;
        /** Email subject. */
        subject?: string | null;
        /** Sender details. */
        from?: Record<string, unknown> | null;
        /** Recipients. */
        to?: Array<Record<string, unknown>> | null;
        /** Email body when requested and permitted. */
        body?: string | null;
        /** Short body preview. */
        bodyPreview?: string | null;
        /** Body content type. */
        bodyType?: string | null;
        /** Receipt timestamp in UTC. */
        receivedAt?: string | null;
        /** Whether the email is read. */
        isRead?: boolean;
        /** Whether attachments exist. */
        hasAttachments?: boolean;
        /** Attachment metadata; no file content is downloaded. */
        attachments?: Array<Record<string, unknown>> | null;
        /** Labels or categories. */
        labels?: Array<string> | null;
        /** Source provider, such as GOOGLE or M365. */
        provider?: string;
        /** Mailbox owner address. */
        emailAccountOwner?: string | null;
        [key: string]: unknown;
      };
    };
    /** Read a complete email thread in chronological order with body content, subject to PortEden view_thread permissions. */
    "porteden.get_thread": {
      input: {
        /**
         * Provider-prefixed thread ID, such as google:abc123 or m365:xyz789.
         * @minLength 1
         */
        threadId: string;
      };
      output: {
        /** Provider-prefixed thread ID. */
        id?: string;
        /** Thread subject. */
        subject?: string | null;
        /** Messages in chronological order. */
        messages?: Array<{
          /** Provider-prefixed email ID. */
          id?: string;
          /** Provider-prefixed thread ID. */
          threadId?: string | null;
          /** Email subject. */
          subject?: string | null;
          /** Sender details. */
          from?: Record<string, unknown> | null;
          /** Recipients. */
          to?: Array<Record<string, unknown>> | null;
          /** Email body when requested and permitted. */
          body?: string | null;
          /** Short body preview. */
          bodyPreview?: string | null;
          /** Body content type. */
          bodyType?: string | null;
          /** Receipt timestamp in UTC. */
          receivedAt?: string | null;
          /** Whether the email is read. */
          isRead?: boolean;
          /** Whether attachments exist. */
          hasAttachments?: boolean;
          /** Attachment metadata; no file content is downloaded. */
          attachments?: Array<Record<string, unknown>> | null;
          /** Labels or categories. */
          labels?: Array<string> | null;
          /** Source provider, such as GOOGLE or M365. */
          provider?: string;
          /** Mailbox owner address. */
          emailAccountOwner?: string | null;
          [key: string]: unknown;
        }>;
        /** Message count. */
        messageCount?: number;
        /** Thread participants. */
        participants?: Array<Record<string, unknown>>;
        /** Most recent message timestamp. */
        lastMessageAt?: string | null;
        /** Source provider. */
        provider?: string;
        [key: string]: unknown;
      };
    };
    /** Change read status or labels/categories. PortEden requires mark_as_read and/or apply_labels permission for the requested changes. */
    "porteden.modify_email": {
      input: Record<string, unknown>;
      output: {
        /** Whether the operation succeeded. */
        success: boolean;
      };
    };
    /** Reply to an email, preserving its thread, with PortEden reply_to_email permission. */
    "porteden.reply_email": {
      input: {
        /**
         * Provider-prefixed email ID, such as google:abc123 or m365:xyz789.
         * @minLength 1
         */
        emailId: string;
        /** Reply body content. */
        body: string;
        /** Body content type; defaults to html. */
        bodyType?: "html" | "text";
        /** Reply to all original recipients except the sending account; defaults to false. */
        replyAll?: boolean;
      };
      output: {
        /** Whether the operation succeeded. */
        success?: boolean;
        /** Provider-prefixed sent email ID, when available. */
        emailId?: string | null;
        /** Provider-prefixed thread ID, when available. */
        threadId?: string | null;
        /** Upstream failure details, when available. */
        errorMessage?: string | null;
        [key: string]: unknown;
      };
    };
    /** Search emails across connected Gmail and Microsoft 365 accounts. Email access and search_emails permission must be enabled in PortEden; pass nextPageToken as pageToken to continue. */
    "porteden.search_emails": {
      input: {
        /** Free-text search query. */
        q?: string;
        /** Filter by sender email address. */
        from?: string;
        /** Filter by recipient email address. */
        to?: string;
        /** Partial subject filter. */
        subject?: string;
        /** Label or category filter. */
        label?: string;
        /** Filter by read status; true selects unread emails. */
        unread?: boolean;
        /**
         * Emails received after this UTC timestamp.
         * @format date-time
         */
        after?: string;
        /**
         * Emails received before this UTC timestamp.
         * @format date-time
         */
        before?: string;
        /** Filter by attachment presence. */
        hasAttachment?: boolean;
        /**
         * Maximum results; defaults to 20, at most 50.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /** Include full bodies; defaults to false. */
        includeBody?: boolean;
        /** Opaque nextPageToken from the previous result. */
        pageToken?: string;
      };
      output: {
        /** Matching emails. */
        emails?: Array<{
          /** Provider-prefixed email ID. */
          id?: string;
          /** Provider-prefixed thread ID. */
          threadId?: string | null;
          /** Email subject. */
          subject?: string | null;
          /** Sender details. */
          from?: Record<string, unknown> | null;
          /** Recipients. */
          to?: Array<Record<string, unknown>> | null;
          /** Email body when requested and permitted. */
          body?: string | null;
          /** Short body preview. */
          bodyPreview?: string | null;
          /** Body content type. */
          bodyType?: string | null;
          /** Receipt timestamp in UTC. */
          receivedAt?: string | null;
          /** Whether the email is read. */
          isRead?: boolean;
          /** Whether attachments exist. */
          hasAttachments?: boolean;
          /** Attachment metadata; no file content is downloaded. */
          attachments?: Array<Record<string, unknown>> | null;
          /** Labels or categories. */
          labels?: Array<string> | null;
          /** Source provider, such as GOOGLE or M365. */
          provider?: string;
          /** Mailbox owner address. */
          emailAccountOwner?: string | null;
          [key: string]: unknown;
        }>;
        /** Total matching count reported by PortEden. */
        totalCount?: number;
        /** Whether more results are available. */
        hasMore?: boolean;
        /** Opaque continuation token. */
        nextPageToken?: string | null;
        /** Active access restrictions, if present. */
        accessInfo?: unknown;
        /** Upstream account authentication warnings, if present. */
        authWarnings?: unknown;
        [key: string]: unknown;
      };
    };
    /** Send an email through a connected account with PortEden send_email permission. Choose sendFrom or connectionId when needed; the default account is otherwise used. */
    "porteden.send_email": {
      input: {
        /**
         * Recipient addresses and optional display names.
         * @minItems 1
         */
        to: Array<{
          /**
           * Email address.
           * @minLength 1
           */
          email: string;
          /** Display name. */
          name?: string;
        }>;
        /** Recipient addresses and optional display names. */
        cc?: Array<{
          /**
           * Email address.
           * @minLength 1
           */
          email: string;
          /** Display name. */
          name?: string;
        }>;
        /** Recipient addresses and optional display names. */
        bcc?: Array<{
          /**
           * Email address.
           * @minLength 1
           */
          email: string;
          /** Display name. */
          name?: string;
        }>;
        /** Email subject. */
        subject: string;
        /** Email body content. */
        body: string;
        /** Body content type; defaults to html. */
        bodyType?: "html" | "text";
        /** Priority; defaults to normal. */
        importance?: "low" | "normal" | "high";
        /**
         * Connected account email address to send from.
         * @minLength 1
         */
        sendFrom?: string;
        /** Provider connection ID to send from. */
        connectionId?: number;
      };
      output: {
        /** Whether the operation succeeded. */
        success?: boolean;
        /** Provider-prefixed sent email ID, when available. */
        emailId?: string | null;
        /** Provider-prefixed thread ID, when available. */
        threadId?: string | null;
        /** Upstream failure details, when available. */
        errorMessage?: string | null;
        [key: string]: unknown;
      };
    };
  }
}
