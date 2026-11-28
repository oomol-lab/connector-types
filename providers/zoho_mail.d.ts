import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Download an email attachment to a temporary file URL. Requires configured file transit; connector limit is 20 MiB. */
    "zoho_mail.download_attachment": {
      input: {
        /**
         * The account ID returned by list_accounts, preserved as a decimal string.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        accountId: string;
        /**
         * The folder ID returned by list_folders.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        folderId: string;
        /**
         * The Zoho message ID, not the RFC Message-ID header.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        messageId: string;
        /**
         * The attachment ID returned by list_attachments.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        attachmentId: string;
        /**
         * The output file name returned by list_attachments.
         * @minLength 1
         */
        fileName: string;
      };
      output: {
        /** The temporary file-transit download URL. */
        fileUrl: string;
        /** The attachment file name. */
        fileName: string;
        /** The attachment MIME type. */
        mimeType: string;
        /** The attachment size in bytes. */
        sizeBytes: number;
      };
    };
    /** Get email metadata such as subject, recipients and received time. */
    "zoho_mail.get_message": {
      input: {
        /**
         * The account ID returned by list_accounts, preserved as a decimal string.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        accountId: string;
        /**
         * The folder ID returned by list_folders.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        folderId: string;
        /**
         * The Zoho message ID, not the RFC Message-ID header.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        messageId: string;
      };
      output: {
        /** The upstream result data, or null for operations without result data. */
        data: unknown;
      };
    };
    /** Read the email body, optionally including quoted block content. */
    "zoho_mail.get_message_content": {
      input: {
        /**
         * The account ID returned by list_accounts, preserved as a decimal string.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        accountId: string;
        /**
         * The folder ID returned by list_folders.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        folderId: string;
        /**
         * The Zoho message ID, not the RFC Message-ID header.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        messageId: string;
        /** Include quoted block content alongside the original body. */
        includeBlockContent?: boolean;
      };
      output: {
        /** The upstream result data, or null for operations without result data. */
        data: unknown;
      };
    };
    /** Retrieve email headers, including RFC Message-ID values needed for reply drafts. */
    "zoho_mail.get_message_headers": {
      input: {
        /**
         * The account ID returned by list_accounts, preserved as a decimal string.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        accountId: string;
        /**
         * The folder ID returned by list_folders.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        folderId: string;
        /**
         * The Zoho message ID, not the RFC Message-ID header.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        messageId: string;
      };
      output: {
        /** The upstream result data, or null for operations without result data. */
        data: unknown;
      };
    };
    /** List the authenticated user's Zoho Mail accounts and discover account IDs. */
    "zoho_mail.list_accounts": {
      input: Record<string, never>;
      output: {
        /** The resources returned by Zoho. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Get attachment metadata, optionally including inline images. */
    "zoho_mail.list_attachments": {
      input: {
        /**
         * The account ID returned by list_accounts, preserved as a decimal string.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        accountId: string;
        /**
         * The folder ID returned by list_folders.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        folderId: string;
        /**
         * The Zoho message ID, not the RFC Message-ID header.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        messageId: string;
        /** Include inline image metadata. */
        includeInline?: boolean;
      };
      output: {
        /** The upstream result data, or null for operations without result data. */
        data: unknown;
      };
    };
    /** List folders in a Zoho Mail account. */
    "zoho_mail.list_folders": {
      input: {
        /**
         * The account ID returned by list_accounts, preserved as a decimal string.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        accountId: string;
      };
      output: {
        /** The resources returned by Zoho. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List a page of emails with folder, status, label, thread and sorting filters. */
    "zoho_mail.list_messages": {
      input: {
        /**
         * The account ID returned by list_accounts, preserved as a decimal string.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        accountId: string;
        /**
         * The folder ID returned by list_folders.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        folderId?: string;
        /**
         * The one-based starting position; defaults to 1.
         * @minimum 1
         */
        start?: number;
        /**
         * The page size; defaults to 10.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** Filter by read state. */
        status?: "read" | "unread" | "all";
        /**
         * Flag: 0 unset, 1 info, 2 important, 3 followup.
         * @minimum 0
         * @maximum 3
         */
        flagid?: number;
        /**
         * Filter by label ID.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        labelid?: string;
        /**
         * Filter by thread ID.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        threadId?: string;
        /** The sort field. */
        sortBy?: "date" | "messageId" | "size";
        /** True for ascending order; false for descending order. */
        sortorder?: boolean;
        /** Include To recipient details. */
        includeto?: boolean;
        /** Include sent messages. */
        includesent?: boolean;
        /** Include archived messages. */
        includearchive?: boolean;
        /** Only messages with attachments. */
        attachedMails?: boolean;
        /** Only messages with inline images. */
        inlinedMails?: boolean;
        /** Only flagged messages. */
        flaggedMails?: boolean;
        /** Only messages with replies. */
        respondedMails?: boolean;
        /** Only messages belonging to conversations. */
        threadedMails?: boolean;
      };
      output: {
        /** The resources returned by Zoho. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Move messages or threads into another folder. */
    "zoho_mail.move_messages": {
      input: {
        /**
         * The account ID returned by list_accounts, preserved as a decimal string.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        accountId: string;
        /**
         * Message IDs to update.
         * @minItems 1
         */
        messageId?: Array<string>;
        /**
         * Thread IDs to update instead of individual messages.
         * @minItems 1
         */
        threadId?: Array<string>;
        /**
         * The destination folder ID.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        destfolderId: string;
        /**
         * The folder ID returned by list_folders.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        folderId?: string;
        /** Restrict the move to folderId; requires folderId when true. */
        isFolderSpecific?: boolean;
        /** Include archived messages in addition to non-archived messages. */
        isArchive?: boolean;
      };
      output: {
        /** The upstream result data, or null for operations without result data. */
        data: unknown;
      };
    };
    /** Reply to an existing email, optionally scheduling delivery and uploading URL attachments. */
    "zoho_mail.reply_message": {
      input: {
        /**
         * The account ID returned by list_accounts, preserved as a decimal string.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        accountId: string;
        /**
         * The sender address belonging to the authenticated account.
         * @minLength 1
         */
        fromAddress: string;
        /**
         * The recipient email addresses in Zoho's address-list format.
         * @minLength 1
         */
        toAddress: string;
        /** The Cc recipient addresses. */
        ccAddress?: string;
        /** The Bcc recipient addresses. */
        bccAddress?: string;
        /** The message subject. */
        subject?: string;
        /** The message body in the selected mail format. */
        content?: string;
        /** The body format; Zoho defaults to html. */
        mailFormat?: "html" | "plaintext";
        /** Whether to request a read receipt. */
        askReceipt?: "yes" | "no";
        /** The body character encoding; defaults to UTF-8. */
        encoding?: "Big5" | "EUC-JP" | "EUC-KR" | "GB2312" | "ISO-2022-JP" | "ISO-8859-1" | "KOI8-R" | "Shift_JIS" | "US-ASCII" | "UTF-8" | "WINDOWS-1251" | "X-WINDOWS-ISO2022JP";
        /** Attachments downloaded from public URLs and uploaded before sending. Each file is limited to 20 MiB by the connector. */
        attachments?: Array<{
          /**
           * A publicly accessible HTTP or HTTPS download URL.
           * @format uri
           */
          fileUrl: string;
          /**
           * The attachment file name without a directory path.
           * @minLength 1
           */
          fileName: string;
        }>;
        /** Whether to schedule delivery instead of sending immediately. */
        isSchedule?: boolean;
        /**
         * Schedule preset: 1 one hour, 2 two hours, 3 four hours, 4 tomorrow morning, 5 tomorrow afternoon, 6 custom time.
         * @minimum 1
         * @maximum 6
         */
        scheduleType?: number;
        /** The Zoho scheduling timezone, such as GMT 5:30; required for custom time. */
        timeZone?: string;
        /** Custom delivery date and time in MM/DD/YYYY HH:MM:SS format. */
        scheduleTime?: string;
        /**
         * The Zoho message ID, not the RFC Message-ID header.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        messageId: string;
      };
      output: {
        /** The upstream result data, or null for operations without result data. */
        data: unknown;
      };
    };
    /** Save an email as a draft or template, including optional reply-thread headers. */
    "zoho_mail.save_draft": {
      input: {
        /**
         * The account ID returned by list_accounts, preserved as a decimal string.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        accountId: string;
        /**
         * The sender address belonging to the authenticated account.
         * @minLength 1
         */
        fromAddress: string;
        /**
         * The recipient email addresses in Zoho's address-list format.
         * @minLength 1
         */
        toAddress: string;
        /** The Cc recipient addresses. */
        ccAddress?: string;
        /** The Bcc recipient addresses. */
        bccAddress?: string;
        /** The message subject. */
        subject?: string;
        /** The message body in the selected mail format. */
        content?: string;
        /** The body format; Zoho defaults to html. */
        mailFormat?: "html" | "plaintext";
        /** Whether to request a read receipt. */
        askReceipt?: "yes" | "no";
        /** The body character encoding; defaults to UTF-8. */
        encoding?: "Big5" | "EUC-JP" | "EUC-KR" | "GB2312" | "ISO-2022-JP" | "ISO-8859-1" | "KOI8-R" | "Shift_JIS" | "US-ASCII" | "UTF-8" | "WINDOWS-1251" | "X-WINDOWS-ISO2022JP";
        /** Attachments downloaded from public URLs and uploaded before sending. Each file is limited to 20 MiB by the connector. */
        attachments?: Array<{
          /**
           * A publicly accessible HTTP or HTTPS download URL.
           * @format uri
           */
          fileUrl: string;
          /**
           * The attachment file name without a directory path.
           * @minLength 1
           */
          fileName: string;
        }>;
        /** Save as a draft (default) or template. */
        mode?: "draft" | "template";
        /** The RFC Message-ID header of the email being replied to; required for reply drafts. */
        inReplyTo?: string;
        /** Space-separated RFC Message-ID headers in chronological order for an existing reply thread. */
        refHeader?: string;
      };
      output: {
        /** The upstream result data, or null for operations without result data. */
        data: unknown;
      };
    };
    /** Search emails using Zoho Mail search syntax and one-based pagination. */
    "zoho_mail.search_messages": {
      input: {
        /**
         * The account ID returned by list_accounts, preserved as a decimal string.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        accountId: string;
        /**
         * The one-based starting position; defaults to 1.
         * @minimum 1
         */
        start?: number;
        /**
         * The page size; defaults to 10.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Zoho Mail search expression, such as newMails or from:sender@example.com.
         * @minLength 1
         */
        searchKey: string;
        /** Only retrieve emails received before this Unix timestamp in milliseconds. Zoho defaults to two minutes before now. */
        receivedTime?: number;
        /** Include To recipient details. */
        includeto?: boolean;
      };
      output: {
        /** The resources returned by Zoho. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Send or schedule an email, uploading URL attachments automatically. */
    "zoho_mail.send_message": {
      input: {
        /**
         * The account ID returned by list_accounts, preserved as a decimal string.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        accountId: string;
        /**
         * The sender address belonging to the authenticated account.
         * @minLength 1
         */
        fromAddress: string;
        /**
         * The recipient email addresses in Zoho's address-list format.
         * @minLength 1
         */
        toAddress: string;
        /** The Cc recipient addresses. */
        ccAddress?: string;
        /** The Bcc recipient addresses. */
        bccAddress?: string;
        /** The message subject. */
        subject?: string;
        /** The message body in the selected mail format. */
        content?: string;
        /** The body format; Zoho defaults to html. */
        mailFormat?: "html" | "plaintext";
        /** Whether to request a read receipt. */
        askReceipt?: "yes" | "no";
        /** The body character encoding; defaults to UTF-8. */
        encoding?: "Big5" | "EUC-JP" | "EUC-KR" | "GB2312" | "ISO-2022-JP" | "ISO-8859-1" | "KOI8-R" | "Shift_JIS" | "US-ASCII" | "UTF-8" | "WINDOWS-1251" | "X-WINDOWS-ISO2022JP";
        /** Attachments downloaded from public URLs and uploaded before sending. Each file is limited to 20 MiB by the connector. */
        attachments?: Array<{
          /**
           * A publicly accessible HTTP or HTTPS download URL.
           * @format uri
           */
          fileUrl: string;
          /**
           * The attachment file name without a directory path.
           * @minLength 1
           */
          fileName: string;
        }>;
        /** Whether to schedule delivery instead of sending immediately. */
        isSchedule?: boolean;
        /**
         * Schedule preset: 1 one hour, 2 two hours, 3 four hours, 4 tomorrow morning, 5 tomorrow afternoon, 6 custom time.
         * @minimum 1
         * @maximum 6
         */
        scheduleType?: number;
        /** The Zoho scheduling timezone, such as GMT 5:30; required for custom time. */
        timeZone?: string;
        /** Custom delivery date and time in MM/DD/YYYY HH:MM:SS format. */
        scheduleTime?: string;
      };
      output: {
        /** The upstream result data, or null for operations without result data. */
        data: unknown;
      };
    };
    /** Mark messages or threads as read or unread. */
    "zoho_mail.set_read_state": {
      input: {
        /**
         * The account ID returned by list_accounts, preserved as a decimal string.
         * @pattern ^(0|[1-9][0-9]*)$
         */
        accountId: string;
        /**
         * Message IDs to update.
         * @minItems 1
         */
        messageId?: Array<string>;
        /**
         * Thread IDs to update instead of individual messages.
         * @minItems 1
         */
        threadId?: Array<string>;
        /** True marks read; false marks unread. */
        read: boolean;
      };
      output: {
        /** The upstream result data, or null for operations without result data. */
        data: unknown;
      };
    };
  }
}
