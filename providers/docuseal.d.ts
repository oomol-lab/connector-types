import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a DocuSeal signature request from an existing template and return the created submitters. */
    "docuseal.create_submission": {
      input: {
        /**
         * The DocuSeal numeric identifier.
         * @exclusiveMinimum 0
         */
        template_id: number;
        /**
         * The submitters for the signature request.
         * @minItems 1
         */
        submitters: Array<{
          /**
           * The name of the submitter.
           * @minLength 1
           */
          name?: string;
          /**
           * The role name or title of the submitter.
           * @minLength 1
           */
          role?: string;
          /**
           * The email address of the submitter.
           * @format email
           */
          email?: string;
          /**
           * The E.164 phone number of the submitter.
           * @minLength 1
           */
          phone?: string;
          /** Pre-filled values keyed by template field name. */
          values?: Record<string, unknown>;
          /**
           * Your application-specific submitter identifier.
           * @minLength 1
           */
          external_id?: string;
          /** Whether to mark the submitter as completed and auto-signed via API. */
          completed?: boolean;
          /** Metadata object with additional submitter information. */
          metadata?: Record<string, unknown>;
          /** Whether DocuSeal should email this submitter. */
          send_email?: boolean;
          /** Whether DocuSeal should send this request via SMS. */
          send_sms?: boolean;
          /**
           * Reply-To address for this submitter's notification emails.
           * @format email
           */
          reply_to?: string;
          /**
           * Submitter-specific URL to redirect to after completion.
           * @format uri
           */
          completed_redirect_url?: string;
          /** The order of the submitter in the workflow. */
          order?: number;
          /** Whether to require phone 2FA for this submitter. */
          require_phone_2fa?: boolean;
          /** Whether to require email 2FA for this submitter. */
          require_email_2fa?: boolean;
          /** Custom signature request email message settings. */
          message?: {
            /**
             * Custom signature request email subject.
             * @minLength 1
             */
            subject?: string;
            /**
             * Custom signature request email body.
             * @minLength 1
             */
            body?: string;
          };
          /** Field configurations for this submitter. */
          fields?: Array<{
            /**
             * Document template field name.
             * @minLength 1
             */
            name: string;
            /** Default field value. */
            default_value?: string | number | boolean | Array<string | number | boolean>;
            /** Whether the submitter can edit the predefined field value. */
            readonly?: boolean;
            /** Whether the field is required. */
            required?: boolean;
            /**
             * Field title displayed on the signing form.
             * @minLength 1
             */
            title?: string;
            /**
             * Field description displayed on the signing form.
             * @minLength 1
             */
            description?: string;
            /** Validation rules for a DocuSeal submitter field. */
            validation?: {
              /**
               * HTML field validation pattern string.
               * @minLength 1
               */
              pattern?: string;
              /**
               * A custom error message to display on validation failure.
               * @minLength 1
               */
              message?: string;
              /** The minimum value constraint. */
              min?: number | string;
              /** The maximum value constraint. */
              max?: number | string;
              /** Increment step for a number field. */
              step?: number;
            };
            /** Display and formatting preferences for a DocuSeal field value. */
            preferences?: {
              /** Font size of the field value in pixels. */
              font_size?: number;
              /** Font type of the field value. */
              font_type?: "bold" | "italic" | "bold_italic";
              /** Font family of the field value. */
              font?: "Times" | "Helvetica" | "Courier";
              /** Font color of the field value. */
              color?: "black" | "white" | "blue";
              /** Field box background color. */
              background?: "black" | "white" | "blue";
              /** Horizontal alignment of the field text value. */
              align?: "left" | "center" | "right";
              /** Vertical alignment of the field text value. */
              valign?: "top" | "center" | "bottom";
              /**
               * Data format for different field types.
               * @minLength 1
               */
              format?: string;
              /** Price value of the payment field. */
              price?: number;
              /** Currency value of the payment field. */
              currency?: "USD" | "EUR" | "GBP" | "CAD" | "AUD";
              /** Mask setting for the field. */
              mask?: number | boolean;
              /** An array of signature reasons to choose from. */
              reasons?: Array<string>;
            };
          }>;
          /** Role names to merge into this submitter. */
          roles?: Array<string>;
        }>;
        /** Whether to send signature request emails. */
        send_email?: boolean;
        /** Whether to send signature requests via SMS. */
        send_sms?: boolean;
        /** Submission delivery order. */
        order?: "preserved" | "random";
        /**
         * URL to redirect to after submission completion.
         * @format uri
         */
        completed_redirect_url?: string;
        /**
         * BCC address for signed documents after completion.
         * @format email
         */
        bcc_completed?: string;
        /**
         * Reply-To address for notification emails.
         * @format email
         */
        reply_to?: string;
        /**
         * Expiration date and time for the submission.
         * @minLength 1
         */
        expire_at?: string;
        /** Dynamic content variables for the template. */
        variables?: Record<string, unknown>;
        /** Custom signature request email message settings. */
        message?: {
          /**
           * Custom signature request email subject.
           * @minLength 1
           */
          subject?: string;
          /**
           * Custom signature request email body.
           * @minLength 1
           */
          body?: string;
        };
      };
      output: {
        /** The submitters returned by DocuSeal. */
        submitters: Array<{
          /**
           * The DocuSeal numeric identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The DocuSeal numeric identifier.
           * @exclusiveMinimum 0
           */
          submissionId: number;
          /** The submitter UUID. */
          uuid: string;
          /** The string value returned by DocuSeal. */
          email: string | null;
          /** The string value returned by DocuSeal. */
          phone: string | null;
          /** The string value returned by DocuSeal. */
          name: string | null;
          /** The string value returned by DocuSeal. */
          role: string | null;
          /** The string value returned by DocuSeal. */
          status: string | null;
          /** The string value returned by DocuSeal. */
          slug: string | null;
          /** The string value returned by DocuSeal. */
          externalId: string | null;
          /** The string value returned by DocuSeal. */
          embedSrc: string | null;
          /** The string value returned by DocuSeal. */
          sentAt: string | null;
          /** The string value returned by DocuSeal. */
          openedAt: string | null;
          /** The string value returned by DocuSeal. */
          completedAt: string | null;
          /** The string value returned by DocuSeal. */
          declinedAt: string | null;
          /** The string value returned by DocuSeal. */
          createdAt: string | null;
          /** The string value returned by DocuSeal. */
          updatedAt: string | null;
          /** The raw DocuSeal object payload. */
          raw: Record<string, unknown>;
        }>;
        /** The raw submitter objects returned by DocuSeal. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve one DocuSeal template by ID and return compact metadata with the raw template payload. */
    "docuseal.get_template": {
      input: {
        /**
         * The DocuSeal numeric identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /**
         * The DocuSeal numeric identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The unique template slug. */
        slug: string;
        /** The template name. */
        name: string;
        /** The string value returned by DocuSeal. */
        source: string | null;
        /** The string value returned by DocuSeal. */
        externalId: string | null;
        /** The string value returned by DocuSeal. */
        folderName: string | null;
        /** The string value returned by DocuSeal. */
        archivedAt: string | null;
        /** The date and time when the template was created. */
        createdAt: string;
        /** The date and time when the template was last updated. */
        updatedAt: string;
        /** The raw DocuSeal object payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List DocuSeal document templates with optional filters and ID-based pagination. */
    "docuseal.list_templates": {
      input: {
        /**
         * Filter templates by partial name match.
         * @minLength 1
         */
        q?: string;
        /**
         * Filter templates by unique slug.
         * @minLength 1
         */
        slug?: string;
        /**
         * Filter templates by external ID.
         * @minLength 1
         */
        external_id?: string;
        /**
         * Filter templates by folder name.
         * @minLength 1
         */
        folder?: string;
        /** Whether to return archived templates instead of active ones. */
        archived?: boolean;
        /**
         * The number of templates to return. The documented maximum is 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Return templates with IDs greater than this value. */
        after?: number;
        /** Return templates with IDs less than this value. */
        before?: number;
      };
      output: {
        /** The templates returned by DocuSeal. */
        data: Array<{
          /**
           * The DocuSeal numeric identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The unique template slug. */
          slug: string;
          /** The template name. */
          name: string;
          /** The string value returned by DocuSeal. */
          source: string | null;
          /** The string value returned by DocuSeal. */
          externalId: string | null;
          /** The string value returned by DocuSeal. */
          folderName: string | null;
          /** The string value returned by DocuSeal. */
          archivedAt: string | null;
          /** The date and time when the template was created. */
          createdAt: string;
          /** The date and time when the template was last updated. */
          updatedAt: string;
          /** The raw DocuSeal object payload. */
          raw: Record<string, unknown>;
        }>;
        /** DocuSeal pagination metadata. */
        pagination: {
          /** The number of records returned in this page. */
          count: number;
          /** The ID cursor for loading the next page. */
          next: number | null;
          /** The ID cursor for loading the previous page. */
          prev: number | null;
        };
        /** The raw DocuSeal object payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
