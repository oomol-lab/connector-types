import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a scheduled Resend email before delivery. */
    "resend.cancel_scheduled_email": {
      input: {
        /**
         * The Resend email ID.
         * @minLength 1
         */
        emailId: string;
      };
      output: {
        /** The affected email ID. */
        emailId: string;
      };
    };
    /** Retrieve one received Resend email, including its content, headers, and attachment metadata. */
    "resend.get_received_email": {
      input: {
        /**
         * The Resend email ID.
         * @minLength 1
         */
        emailId: string;
      };
      output: {
        /** A received Resend email with message content. */
        email: {
          /** The email ID. */
          id: string;
          /** The provider message ID, or null when unavailable. */
          messageId: string | null;
          /**
           * Primary recipient email addresses.
           * @minItems 1
           */
          to: Array<string>;
          /** The sender address. */
          from: string;
          /** The email creation timestamp. */
          createdAt: string;
          /** The email subject. */
          subject: string;
          /** The HTML message body, or null when unavailable. */
          html: string | null;
          /** The plain-text message body, or null when unavailable. */
          text: string | null;
          /** Received email headers. */
          headers: Record<string, string> | null;
          /** Bcc recipient addresses, or null when omitted. */
          bcc: Array<string> | null;
          /** Cc recipient addresses, or null when omitted. */
          cc: Array<string> | null;
          /** Reply-to addresses, or null when omitted. */
          replyTo: Array<string> | null;
          /** Temporary raw email download information. */
          raw: {
            /**
             * The temporary signed URL for the original raw email.
             * @format uri
             */
            downloadUrl: string;
            /** The raw email download URL expiration timestamp. */
            expiresAt: string;
          } | null;
          /** Attachment metadata included with the email. */
          attachments: Array<{
            /** The attachment ID. */
            id: string;
            /** The attachment filename, or null when unavailable. */
            filename: string | null;
            /**
             * The attachment size in bytes, or null when unavailable.
             * @minimum 0
             */
            size: number | null;
            /** The attachment media type, or null when unavailable. */
            contentType: string | null;
            /** The attachment disposition, or null when unavailable. */
            contentDisposition: string | null;
            /** The inline content ID, or null when unavailable. */
            contentId: string | null;
          }>;
        };
      };
    };
    /** Retrieve one attachment from a received Resend email, including its temporary download URL. */
    "resend.get_received_email_attachment": {
      input: {
        /**
         * The Resend email ID.
         * @minLength 1
         */
        emailId: string;
        /**
         * The Resend attachment ID.
         * @minLength 1
         */
        attachmentId: string;
      };
      output: {
        /** A Resend attachment with a temporary download URL. */
        attachment: {
          /** The attachment ID. */
          id: string;
          /** The attachment filename, or null when unavailable. */
          filename: string | null;
          /**
           * The attachment size in bytes.
           * @minimum 0
           */
          size: number;
          /** The attachment media type. */
          contentType: string;
          /** The attachment disposition, or null when unavailable. */
          contentDisposition: string | null;
          /** The inline content ID, or null when unavailable. */
          contentId: string | null;
          /**
           * The temporary signed attachment download URL.
           * @format uri
           */
          downloadUrl: string;
          /** The download URL expiration timestamp. */
          expiresAt: string;
        };
      };
    };
    /** Retrieve one sent Resend email, including its message content and delivery state. */
    "resend.get_sent_email": {
      input: {
        /**
         * The Resend email ID.
         * @minLength 1
         */
        emailId: string;
      };
      output: {
        /** A sent Resend email with message content. */
        email: {
          /** The email ID. */
          id: string;
          /** The provider message ID, or null when unavailable. */
          messageId: string | null;
          /**
           * Primary recipient email addresses.
           * @minItems 1
           */
          to: Array<string>;
          /** The sender address. */
          from: string;
          /** The email creation timestamp. */
          createdAt: string;
          /** The email subject. */
          subject: string;
          /** The HTML message body, or null when unavailable. */
          html: string | null;
          /** The plain-text message body, or null when unavailable. */
          text: string | null;
          /** Bcc recipient addresses, or null when omitted. */
          bcc: Array<string> | null;
          /** Cc recipient addresses, or null when omitted. */
          cc: Array<string> | null;
          /** Reply-to addresses, or null when omitted. */
          replyTo: Array<string> | null;
          /** The latest delivery event, or null when unavailable. */
          lastEvent: string | null;
          /** The scheduled send timestamp, or null when not scheduled. */
          scheduledAt: string | null;
          /** Tags attached to the email. */
          tags: Array<{
            /** The tag name. */
            name: string;
            /** The tag value. */
            value: string;
          }>;
        };
      };
    };
    /** Retrieve one attachment from a sent Resend email, including its temporary download URL. */
    "resend.get_sent_email_attachment": {
      input: {
        /**
         * The Resend email ID.
         * @minLength 1
         */
        emailId: string;
        /**
         * The Resend attachment ID.
         * @minLength 1
         */
        attachmentId: string;
      };
      output: {
        /** A Resend attachment with a temporary download URL. */
        attachment: {
          /** The attachment ID. */
          id: string;
          /** The attachment filename, or null when unavailable. */
          filename: string | null;
          /**
           * The attachment size in bytes.
           * @minimum 0
           */
          size: number;
          /** The attachment media type. */
          contentType: string;
          /** The attachment disposition, or null when unavailable. */
          contentDisposition: string | null;
          /** The inline content ID, or null when unavailable. */
          contentId: string | null;
          /**
           * The temporary signed attachment download URL.
           * @format uri
           */
          downloadUrl: string;
          /** The download URL expiration timestamp. */
          expiresAt: string;
        };
      };
    };
    /** List attachments for a received Resend email. */
    "resend.list_received_email_attachments": {
      input: {
        /**
         * The Resend email ID.
         * @minLength 1
         */
        emailId: string;
        /**
         * The number of records to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Return records after this resource ID.
         * @minLength 1
         */
        after?: string;
        /**
         * Return records before this resource ID.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /** Whether another page of attachments is available. */
        hasMore: boolean;
        /** Attachments on the received email. */
        attachments: Array<{
          /** The attachment ID. */
          id: string;
          /** The attachment filename, or null when unavailable. */
          filename: string | null;
          /**
           * The attachment size in bytes.
           * @minimum 0
           */
          size: number;
          /** The attachment media type. */
          contentType: string;
          /** The attachment disposition, or null when unavailable. */
          contentDisposition: string | null;
          /** The inline content ID, or null when unavailable. */
          contentId: string | null;
          /**
           * The temporary signed attachment download URL.
           * @format uri
           */
          downloadUrl: string;
          /** The download URL expiration timestamp. */
          expiresAt: string;
        }>;
      };
    };
    /** List emails received by the authenticated Resend team. */
    "resend.list_received_emails": {
      input: {
        /**
         * The number of records to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Return records after this resource ID.
         * @minLength 1
         */
        after?: string;
        /**
         * Return records before this resource ID.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /** Whether another page of received emails is available. */
        hasMore: boolean;
        /** Received email summaries. */
        emails: Array<{
          /** The email ID. */
          id: string;
          /** The provider message ID, or null when unavailable. */
          messageId: string | null;
          /**
           * Primary recipient email addresses.
           * @minItems 1
           */
          to: Array<string>;
          /** The sender address. */
          from: string;
          /** The email creation timestamp. */
          createdAt: string;
          /** The email subject, or null when omitted. */
          subject: string | null;
          /** Bcc recipient addresses, or null when omitted. */
          bcc: Array<string> | null;
          /** Cc recipient addresses, or null when omitted. */
          cc: Array<string> | null;
          /** Reply-to addresses, or null when omitted. */
          replyTo: Array<string> | null;
          /** Attachment metadata included with the email. */
          attachments: Array<{
            /** The attachment ID. */
            id: string;
            /** The attachment filename, or null when unavailable. */
            filename: string | null;
            /**
             * The attachment size in bytes, or null when unavailable.
             * @minimum 0
             */
            size: number | null;
            /** The attachment media type, or null when unavailable. */
            contentType: string | null;
            /** The attachment disposition, or null when unavailable. */
            contentDisposition: string | null;
            /** The inline content ID, or null when unavailable. */
            contentId: string | null;
          }>;
        }>;
      };
    };
    /** List attachments for a sent Resend email. */
    "resend.list_sent_email_attachments": {
      input: {
        /**
         * The Resend email ID.
         * @minLength 1
         */
        emailId: string;
        /**
         * The number of records to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Return records after this resource ID.
         * @minLength 1
         */
        after?: string;
        /**
         * Return records before this resource ID.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /** Whether Resend reports more attachments. */
        hasMore: boolean;
        /** Attachments on the sent email. */
        attachments: Array<{
          /** The attachment ID. */
          id: string;
          /** The attachment filename, or null when unavailable. */
          filename: string | null;
          /**
           * The attachment size in bytes.
           * @minimum 0
           */
          size: number;
          /** The attachment media type. */
          contentType: string;
          /** The attachment disposition, or null when unavailable. */
          contentDisposition: string | null;
          /** The inline content ID, or null when unavailable. */
          contentId: string | null;
          /**
           * The temporary signed attachment download URL.
           * @format uri
           */
          downloadUrl: string;
          /** The download URL expiration timestamp. */
          expiresAt: string;
        }>;
      };
    };
    /** List emails sent by the authenticated Resend team. */
    "resend.list_sent_emails": {
      input: {
        /**
         * The number of records to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Return records after this resource ID.
         * @minLength 1
         */
        after?: string;
        /**
         * Return records before this resource ID.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /** Whether another page of sent emails is available. */
        hasMore: boolean;
        /** Sent email summaries. */
        emails: Array<{
          /** The email ID. */
          id: string;
          /** The provider message ID, or null when unavailable. */
          messageId: string | null;
          /**
           * Primary recipient email addresses.
           * @minItems 1
           */
          to: Array<string>;
          /** The sender address. */
          from: string;
          /** The email creation timestamp. */
          createdAt: string;
          /** The email subject. */
          subject: string;
          /** Bcc recipient addresses, or null when omitted. */
          bcc: Array<string> | null;
          /** Cc recipient addresses, or null when omitted. */
          cc: Array<string> | null;
          /** Reply-to addresses, or null when omitted. */
          replyTo: Array<string> | null;
          /** The latest delivery event, or null when unavailable. */
          lastEvent: string | null;
          /** The scheduled send timestamp, or null when not scheduled. */
          scheduledAt: string | null;
        }>;
      };
    };
    /** Send up to 100 emails in one Resend batch request. */
    "resend.send_batch_emails": {
      input: {
        /**
         * The emails to send in request order.
         * @minItems 1
         * @maxItems 100
         */
        emails: Array<Record<string, unknown>>;
        /**
         * A unique key that prevents duplicate sends for 24 hours.
         * @minLength 1
         * @maxLength 256
         */
        idempotencyKey?: string;
      };
      output: {
        /**
         * Created email IDs in the same order as the input emails.
         * @minItems 1
         * @maxItems 100
         */
        emailIds: Array<string>;
      };
    };
    /** Send an email with Resend. */
    "resend.send_email": {
      input: {
        /**
         * The sender email address.
         * @minLength 1
         */
        from: string;
        /**
         * The recipient email address.
         * @minLength 1
         */
        to: string;
        /**
         * The email subject line.
         * @minLength 1
         */
        subject: string;
        /** The HTML body of the email. */
        html?: string;
        /** The plain text body of the email. */
        text?: string;
      };
      output: {
        /** The unique identifier of the sent email. */
        emailId: string;
      };
    };
    /** Change the delivery time of a scheduled Resend email. */
    "resend.update_scheduled_email": {
      input: {
        /**
         * The Resend email ID.
         * @minLength 1
         */
        emailId: string;
        /**
         * The new ISO 8601 delivery timestamp.
         * @format date-time
         */
        scheduledAt: string;
      };
      output: {
        /** The affected email ID. */
        emailId: string;
      };
    };
  }
}
