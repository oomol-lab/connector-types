import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete one NetEase Mail message from a folder. */
    "netease_mail.delete_email": {
      input: {
        /**
         * The IMAP folder path returned by list_folders.
         * @minLength 1
         * @default "INBOX"
         */
        folder?: string;
        /**
         * The IMAP UID of the message.
         * @exclusiveMinimum 0
         */
        uid: number;
      };
      output: {
        /**
         * The IMAP folder path that contained the message.
         * @minLength 1
         */
        folder: string;
        /**
         * The IMAP UID of the message.
         * @exclusiveMinimum 0
         */
        uid: number;
        /** Whether the message was deleted. */
        deleted: true;
      };
    };
    /** Download one NetEase Mail attachment by IMAP body part identifier. */
    "netease_mail.download_attachment": {
      input: {
        /**
         * The IMAP folder path returned by list_folders.
         * @minLength 1
         * @default "INBOX"
         */
        folder?: string;
        /**
         * The IMAP UID of the message.
         * @exclusiveMinimum 0
         */
        uid: number;
        /**
         * The IMAP body part identifier returned in an attachment metadata item.
         * @minLength 1
         */
        attachmentId: string;
      };
      output: {
        /**
         * The IMAP folder path that contained the message.
         * @minLength 1
         */
        folder: string;
        /**
         * The IMAP UID of the message.
         * @exclusiveMinimum 0
         */
        uid: number;
        /**
         * The IMAP body part identifier returned in an attachment metadata item.
         * @minLength 1
         */
        attachmentId: string;
        /** The attachment size in bytes when available. */
        size: number | null;
        /** A file uploaded to connector transit storage. */
        file: {
          /**
           * The file name used in transit storage.
           * @minLength 1
           */
          name: string;
          /**
           * The file MIME type.
           * @minLength 1
           */
          mimetype: string;
          /**
           * The accessible transit URL for downloading the file.
           * @format uri
           */
          s3url: string;
          /** The file size in bytes when available. */
          size: number | null;
        };
      };
    };
    /** Forward one NetEase Mail email using SMTP with quoted original content. */
    "netease_mail.forward_email": {
      input: {
        /**
         * The IMAP folder path returned by list_folders.
         * @minLength 1
         * @default "INBOX"
         */
        folder?: string;
        /**
         * The IMAP UID of the message.
         * @exclusiveMinimum 0
         */
        uid: number;
        /**
         * The forwarding recipient email addresses.
         * @minItems 1
         */
        to: Array<string>;
        /**
         * The carbon-copy recipient email addresses.
         * @minItems 1
         */
        cc?: Array<string>;
        /**
         * The blind-carbon-copy recipient email addresses.
         * @minItems 1
         */
        bcc?: Array<string>;
        /** Override forward email subject. */
        subject?: string;
        /** Additional plain text content to prepend before the forwarded message. */
        text?: string;
        /** Additional HTML content to prepend before the forwarded message. */
        html?: string;
        /**
         * Attachments to fetch and include in the outgoing email.
         * @minItems 1
         * @maxItems 10
         */
        attachments?: Array<{
          /**
           * The filename to use for the outgoing attachment.
           * @minLength 1
           */
          filename: string;
          /**
           * The MIME content type of the attachment.
           * @minLength 1
           */
          contentType?: string;
          /**
           * The public HTTP or HTTPS URL to fetch attachment content from.
           * @format uri
           */
          contentUrl: string;
        }>;
      };
      output: {
        /** The SMTP Message-ID returned by the mail client. */
        messageId: string | null;
        /** Recipient addresses accepted by the SMTP server. */
        accepted: Array<string>;
        /** Recipient addresses rejected by the SMTP server. */
        rejected: Array<string>;
        /** The SMTP response text returned by the server. */
        response: string;
      };
    };
    /** Fetch and parse one NetEase Mail message without marking it as read. */
    "netease_mail.get_email": {
      input: {
        /**
         * The IMAP folder path returned by list_folders.
         * @minLength 1
         * @default "INBOX"
         */
        folder?: string;
        /**
         * The IMAP UID of the message.
         * @exclusiveMinimum 0
         */
        uid: number;
      };
      output: {
        /**
         * The IMAP folder path that contained the message.
         * @minLength 1
         */
        folder: string;
        /**
         * The IMAP UID of the message.
         * @exclusiveMinimum 0
         */
        uid: number;
        /** The Message-ID header when available. */
        messageId: string | null;
        /** The email subject when available. */
        subject: string | null;
        /** A normalized email address. */
        from: {
          /** The display name when one was provided. */
          name: string | null;
          /** The email address when one was provided. */
          email: string | null;
        } | null;
        /** The primary recipients parsed from the message. */
        to: Array<{
          /** The display name when one was provided. */
          name: string | null;
          /** The email address when one was provided. */
          email: string | null;
        }>;
        /** The carbon-copy recipients parsed from the message. */
        cc: Array<{
          /** The display name when one was provided. */
          name: string | null;
          /** The email address when one was provided. */
          email: string | null;
        }>;
        /**
         * The message date as an ISO 8601 timestamp.
         * @format date-time
         */
        date: string | null;
        /** The IMAP flags currently set on the message. */
        flags: Array<string>;
        /** Whether the message has the IMAP Seen flag. */
        seen: boolean;
        /** The parsed plain text body within the fetch budget. */
        text: string | null;
        /** The parsed HTML body within the fetch budget. */
        html: string | null;
        /** Whether returned body content was truncated or omitted by budget. */
        truncated: boolean;
        /** Attachment metadata parsed from the message. */
        attachments: Array<{
          /**
           * The IMAP body part identifier returned in an attachment metadata item.
           * @minLength 1
           */
          attachmentId: string;
          /** The attachment filename when available. */
          filename: string | null;
          /** The attachment MIME content type when available. */
          contentType: string | null;
          /** The attachment size in bytes when available. */
          size: number | null;
          /** The attachment Content-ID when available. */
          contentId: string | null;
        }>;
      };
    };
    /** Get lightweight message counters for one NetEase Mail folder. */
    "netease_mail.get_folder_status": {
      input: {
        /**
         * The IMAP folder path returned by list_folders.
         * @minLength 1
         * @default "INBOX"
         */
        folder?: string;
      };
      output: {
        /**
         * The IMAP folder path that was checked.
         * @minLength 1
         */
        folder: string;
        /** The total number of messages when available. */
        messages: number | null;
        /** The number of recent messages when available. */
        recent: number | null;
        /** The number of unread messages when available. */
        unseen: number | null;
        /** The next predicted IMAP UID when available. */
        uidNext: number | null;
        /** The mailbox UIDVALIDITY value when available. */
        uidValidity: string | null;
      };
    };
    /** List folders visible to the connected NetEase Mail account. */
    "netease_mail.list_folders": {
      input: Record<string, never>;
      output: {
        /** The folders returned by NetEase Mail IMAP. */
        folders: Array<{
          /**
           * The canonical IMAP mailbox path to pass back into folder inputs.
           * @minLength 1
           */
          path: string;
          /**
           * The decoded display name for the folder.
           * @minLength 1
           */
          name: string;
          /** The mailbox hierarchy delimiter when available. */
          delimiter: string | null;
          /** The IMAP flags attached to this mailbox. */
          flags: Array<string>;
          /** The special-use mailbox flag when available. */
          specialUse: string | null;
        }>;
      };
    };
    /** Mark one NetEase Mail message as read. */
    "netease_mail.mark_email_read": {
      input: {
        /**
         * The IMAP folder path returned by list_folders.
         * @minLength 1
         * @default "INBOX"
         */
        folder?: string;
        /**
         * The IMAP UID of the message.
         * @exclusiveMinimum 0
         */
        uid: number;
      };
      output: {
        /**
         * The IMAP folder path that contained the message.
         * @minLength 1
         */
        folder: string;
        /**
         * The IMAP UID of the message.
         * @exclusiveMinimum 0
         */
        uid: number;
        /** Whether the message is now marked as read. */
        read: true;
      };
    };
    /** Mark one NetEase Mail message as unread. */
    "netease_mail.mark_email_unread": {
      input: {
        /**
         * The IMAP folder path returned by list_folders.
         * @minLength 1
         * @default "INBOX"
         */
        folder?: string;
        /**
         * The IMAP UID of the message.
         * @exclusiveMinimum 0
         */
        uid: number;
      };
      output: {
        /**
         * The IMAP folder path that contained the message.
         * @minLength 1
         */
        folder: string;
        /**
         * The IMAP UID of the message.
         * @exclusiveMinimum 0
         */
        uid: number;
        /** Whether the message is now marked as read. */
        read: false;
      };
    };
    /** Move one NetEase Mail message to another folder. */
    "netease_mail.move_email": {
      input: {
        /**
         * The IMAP folder path returned by list_folders.
         * @minLength 1
         * @default "INBOX"
         */
        folder?: string;
        /**
         * The IMAP UID of the message.
         * @exclusiveMinimum 0
         */
        uid: number;
        /**
         * The destination IMAP folder path.
         * @minLength 1
         */
        targetFolder: string;
      };
      output: {
        /**
         * The source IMAP folder path.
         * @minLength 1
         */
        folder: string;
        /**
         * The destination IMAP folder path.
         * @minLength 1
         */
        targetFolder: string;
        /**
         * The IMAP UID of the message.
         * @exclusiveMinimum 0
         */
        uid: number;
        /** Whether the message was moved. */
        moved: true;
      };
    };
    /** Reply to one NetEase Mail email using SMTP reply headers and quoted content. */
    "netease_mail.reply_email": {
      input: Record<string, unknown>;
      output: {
        /** The SMTP Message-ID returned by the mail client. */
        messageId: string | null;
        /** Recipient addresses accepted by the SMTP server. */
        accepted: Array<string>;
        /** Recipient addresses rejected by the SMTP server. */
        rejected: Array<string>;
        /** The SMTP response text returned by the server. */
        response: string;
      };
    };
    /** Search one NetEase Mail folder and return lightweight email summaries. */
    "netease_mail.search_emails": {
      input: {
        /**
         * The IMAP folder path returned by list_folders.
         * @minLength 1
         * @default "INBOX"
         */
        folder?: string;
        /** Whether to return only unread messages. */
        unseen?: boolean;
        /**
         * A sender search term.
         * @minLength 1
         */
        from?: string;
        /**
         * A recipient search term.
         * @minLength 1
         */
        to?: string;
        /**
         * A subject search term.
         * @minLength 1
         */
        subject?: string;
        /**
         * A body text search term.
         * @minLength 1
         */
        text?: string;
        /**
         * Only include messages on or after this YYYY-MM-DD date.
         * @format date
         */
        since?: string;
        /**
         * Only include messages before this YYYY-MM-DD date.
         * @format date
         */
        before?: string;
        /**
         * The maximum number of email summaries to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit?: number;
        /**
         * Only include message UIDs lower than this cursor.
         * @exclusiveMinimum 0
         */
        beforeUid?: number;
      };
      output: {
        /**
         * The IMAP folder path that was searched.
         * @minLength 1
         */
        folder: string;
        /** The email summaries returned for this page. */
        emails: Array<{
          /**
           * The IMAP UID of the message.
           * @exclusiveMinimum 0
           */
          uid: number;
          /** The Message-ID header when available. */
          messageId: string | null;
          /** The email subject when available. */
          subject: string | null;
          /** A normalized email address. */
          from: {
            /** The display name when one was provided. */
            name: string | null;
            /** The email address when one was provided. */
            email: string | null;
          } | null;
          /** The primary recipients parsed from the message envelope. */
          to: Array<{
            /** The display name when one was provided. */
            name: string | null;
            /** The email address when one was provided. */
            email: string | null;
          }>;
          /**
           * The message date as an ISO 8601 timestamp.
           * @format date-time
           */
          date: string | null;
          /** The IMAP flags currently set on the message. */
          flags: Array<string>;
          /** Whether the message has the IMAP Seen flag. */
          seen: boolean;
          /** Whether the message has attachment parts. */
          hasAttachments: boolean;
          /** The message size in bytes when available. */
          size: number | null;
        }>;
        /**
         * The cursor to pass as beforeUid for the next page.
         * @exclusiveMinimum 0
         */
        nextBeforeUid: number | null;
      };
    };
    /** Send an email through NetEase Mail SMTP. */
    "netease_mail.send_email": {
      input: Record<string, unknown>;
      output: {
        /** The SMTP Message-ID returned by the mail client. */
        messageId: string | null;
        /** Recipient addresses accepted by the SMTP server. */
        accepted: Array<string>;
        /** Recipient addresses rejected by the SMTP server. */
        rejected: Array<string>;
        /** The SMTP response text returned by the server. */
        response: string;
      };
    };
  }
}
