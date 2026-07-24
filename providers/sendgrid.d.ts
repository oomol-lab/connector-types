import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current SendGrid account type and sender reputation. */
    "sendgrid.get_account_info": {
      input: Record<string, never>;
      output: {
        /** The SendGrid account type. */
        accountType: string;
        /** The sender reputation score returned by SendGrid. */
        reputation: number;
      };
    };
    /** Get the SendGrid API key scopes available to the current credential. */
    "sendgrid.get_user_scopes": {
      input: Record<string, never>;
      output: {
        /** The SendGrid scopes available to this API key. */
        scopes: Array<string>;
      };
    };
    /** List SendGrid transactional templates with pagination metadata. */
    "sendgrid.list_transactional_templates": {
      input: {
        /**
         * The number of templates to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * The opaque page token returned by a previous SendGrid templates response.
         * @minLength 1
         */
        pageToken?: string;
        /** The optional template generation filter accepted by SendGrid. */
        generations?: "legacy" | "dynamic" | "legacy,dynamic";
      };
      output: {
        /** The transactional templates returned by SendGrid. */
        templates: Array<{
          /** The transactional template ID. */
          id: string;
          /** The transactional template name. */
          name: string;
          /** The transactional template generation returned by SendGrid. */
          generation: "legacy" | "dynamic";
          /** The last update timestamp for this transactional template. */
          updatedAt: string;
          /** The transactional template versions returned by SendGrid. */
          versions: Array<{
            /** The transactional template version ID. */
            id: string;
            /** The transactional template version name. */
            name: string;
            /** Whether this template version is active as 1 or 0. */
            active: number;
            /** The editor mode used for this template version. */
            editor?: "code" | "design";
            /** The template version subject. */
            subject?: string;
            /** The dynamic template test data returned by SendGrid. */
            testData?: string;
            /** The last update timestamp for this version. */
            updatedAt?: string;
            /** The parent transactional template ID. */
            templateId?: string;
            /** The HTML content stored on this version. */
            htmlContent?: string;
            /** The plain-text content stored on this version. */
            plainContent?: string;
            /** The optional thumbnail preview URL returned by SendGrid. */
            thumbnailUrl?: string;
            /** Whether SendGrid generates plain text from the HTML content. */
            generatePlainContent?: boolean;
          }>;
        }>;
        /** The total template count returned by SendGrid, or null when absent. */
        count: number | null;
        /** The next page token extracted from SendGrid pagination metadata. */
        nextPageToken: string | null;
        /** The previous page token extracted from SendGrid pagination metadata. */
        previousPageToken: string | null;
      };
    };
    /** Send a transactional email with SendGrid Mail Send. */
    "sendgrid.send_email": {
      input: {
        /** The verified sender used for this email. */
        from: {
          /**
           * The sender email address.
           * @format email
           */
          email: string;
          /**
           * The optional sender display name.
           * @minLength 1
           */
          name?: string;
        };
        /**
         * The primary recipients for this email.
         * @minItems 1
         */
        to: Array<{
          /**
           * The recipient email address.
           * @format email
           */
          email: string;
          /**
           * The optional recipient display name.
           * @minLength 1
           */
          name?: string;
        }>;
        /**
         * The optional Cc recipients.
         * @minItems 1
         */
        cc?: Array<{
          /**
           * The recipient email address.
           * @format email
           */
          email: string;
          /**
           * The optional recipient display name.
           * @minLength 1
           */
          name?: string;
        }>;
        /**
         * The optional Bcc recipients.
         * @minItems 1
         */
        bcc?: Array<{
          /**
           * The recipient email address.
           * @format email
           */
          email: string;
          /**
           * The optional recipient display name.
           * @minLength 1
           */
          name?: string;
        }>;
        /** The optional Reply-To override. */
        replyTo?: {
          /**
           * The sender email address.
           * @format email
           */
          email: string;
          /**
           * The optional sender display name.
           * @minLength 1
           */
          name?: string;
        };
        /**
         * The email subject line.
         * @minLength 1
         */
        subject?: string;
        /** The optional HTML body content. */
        htmlContent?: string;
        /** The optional plain-text body content. */
        textContent?: string;
        /**
         * The optional SendGrid template ID.
         * @minLength 1
         */
        templateId?: string;
        /** The optional dynamic template data sent with the email. */
        dynamicTemplateData?: Record<string, unknown>;
        /**
         * The optional SendGrid categories attached to this email.
         * @maxItems 10
         */
        categories?: Array<string>;
        /** The optional custom arguments attached to this email. */
        customArgs?: Record<string, string>;
        /**
         * The optional Unix timestamp that schedules this email.
         * @exclusiveMinimum 0
         */
        sendAt?: number;
        /** The optional attachments included with this email. */
        attachments?: Array<{
          /**
           * The Base64-encoded attachment content.
           * @minLength 1
           */
          contentBase64: string;
          /**
           * The attachment file name.
           * @minLength 1
           */
          filename: string;
          /**
           * The optional attachment MIME type.
           * @minLength 1
           */
          type?: string;
          /** The optional attachment disposition. */
          disposition?: "attachment" | "inline";
          /**
           * The optional content ID used for inline attachments.
           * @minLength 1
           */
          contentId?: string;
        }>;
      };
      output: {
        /** Whether SendGrid accepted the email for delivery. */
        accepted: boolean;
        /** The optional SendGrid message ID response header. */
        messageId: string | null;
      };
    };
  }
}
