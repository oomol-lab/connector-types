import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Upload an attachment file to a draft PandaDoc document. */
    "pandadoc.create_document_attachment": {
      input: {
        /**
         * The unique identifier of the document.
         * @minLength 1
         */
        document_id: string;
        /** The transit file uploaded as the attachment. */
        file: {
          /**
           * The filename used for the uploaded file.
           * @minLength 1
           */
          name: string;
          /**
           * The MIME type of the uploaded file.
           * @minLength 1
           */
          mimetype: string;
          /**
           * The transit object key or absolute URL of the uploaded file content.
           * @minLength 1
           */
          s3key: string;
        };
      };
      output: {
        /** The unique identifier of the attachment. */
        uuid: string;
        /** The display name of the attachment. */
        name: string;
        /** The original file name of the attachment. */
        file_name: string;
        /** The size of the attachment in bytes. */
        size: number;
        /** Timestamp when the attachment was created. */
        created_date: string;
      };
    };
    /** Create a PandaDoc document from a public file URL, a transit file reference, or a local file upload. */
    "pandadoc.create_document_from_file": {
      input: {
        /**
         * Name of the document.
         * @minLength 1
         */
        name: string;
        /**
         * Public HTTPS URL of the source PDF, DOCX, or RTF file.
         * @format uri
         */
        url?: string;
        /** The transit file reference used to create the document. */
        file?: {
          /**
           * The filename used for the uploaded file.
           * @minLength 1
           */
          name: string;
          /**
           * The MIME type of the uploaded file.
           * @minLength 1
           */
          mimetype: string;
          /**
           * The transit object key or absolute URL of the uploaded file content.
           * @minLength 1
           */
          s3key: string;
        };
        /** Tags assigned to the document. */
        tags?: Array<string>;
        /** The PandaDoc workspace member who owns the document. */
        owner?: {
          /** Email of the document owner in the PandaDoc workspace. */
          email?: string;
          /** Membership ID of the document owner in the PandaDoc workspace. */
          membership_id?: string;
        };
        /**
         * Recipients attached to the document.
         * @minItems 1
         */
        recipients: Array<{
          /** Email address of the recipient. */
          email: string;
          /** Role of the recipient in the document, such as signer or approver. */
          role?: string;
          /** First name of the recipient. */
          first_name?: string;
          /** Last name of the recipient. */
          last_name?: string;
          /** Signing order assigned to the recipient. */
          signing_order?: number;
        }>;
        /** Whether PandaDoc should parse PDF form fields during import. */
        parse_form_fields?: boolean;
      };
      output: {
        /** The unique identifier of the created document. */
        id: string;
        /** The name of the created document. */
        name: string;
        /** Current status of the created document. */
        status: string;
        /** Timestamp when the document was created. */
        date_created: string;
        /** The UUID of the created document. */
        uuid?: string | null;
        /** Version of the created document. */
        version?: string | null;
        /** Timestamp when the document was last modified. */
        date_modified?: string | null;
        /** Expiration date configured for the document. */
        expiration_date?: string | null;
      };
    };
    /** Create a new document folder in PandaDoc. */
    "pandadoc.create_folder": {
      input: {
        /**
         * Name of the folder to create.
         * @minLength 1
         */
        name: string;
        /** Optional parent folder UUID used to create a nested folder. */
        parent_uuid?: string;
      };
      output: {
        /** The unique identifier of the folder. */
        uuid: string;
        /** The folder name. */
        name: string;
        /** Timestamp when the folder was created. */
        date_created: string;
      };
    };
    /** Create a PandaDoc contact, or update the existing contact that matches the provided email address. */
    "pandadoc.create_or_update_contact": {
      input: {
        /**
         * Email address of the contact.
         * @format email
         */
        email: string;
        /** First name of the contact. */
        first_name?: string;
        /** Last name of the contact. */
        last_name?: string;
        /** Company name of the contact. */
        company?: string;
        /** Phone number of the contact. */
        phone?: string;
        /** Job title of the contact. */
        job_title?: string;
        /** State of the contact. */
        state?: string;
        /** City of the contact. */
        city?: string;
        /** Country of the contact. */
        country?: string;
        /** Postal code of the contact. */
        postal_code?: string;
        /** Street address of the contact. */
        street_address?: string;
      };
      output: {
        /** The unique identifier of the contact. */
        id: string;
        /** Email address of the contact. */
        email: string;
        /** First name of the contact. */
        first_name?: string | null;
        /** Last name of the contact. */
        last_name?: string | null;
        /** Company name of the contact. */
        company?: string | null;
        /** Phone number of the contact. */
        phone?: string | null;
        /** Job title of the contact. */
        job_title?: string | null;
        /** State of the contact. */
        state?: string | null;
        /** City of the contact. */
        city?: string | null;
        /** Country of the contact. */
        country?: string | null;
        /** Postal code of the contact. */
        postal_code?: string | null;
        /** Street address of the contact. */
        street_address?: string | null;
        /** Whether the contact is shared in the workspace. */
        shared?: boolean;
        /** Timestamp when the contact was created. */
        create_time?: string | null;
      };
    };
    /** Create a PandaDoc template from structured content or from a local PDF upload. */
    "pandadoc.create_template": {
      input: {
        /**
         * Name of the template.
         * @minLength 1
         */
        name: string;
        /** Optional description of the template. */
        description?: string;
        /** Tags assigned to the template. */
        tags?: Array<string>;
        /** Structured content used to create a PandaDoc template from scratch. */
        content?: {
          /** The title of the template content. */
          title: string;
          /** Blocks that make up the template content. */
          blocks: Array<Record<string, unknown>>;
        };
        /**
         * Public HTTPS URL of the source PDF file used to create the template.
         * @format uri
         */
        url?: string;
        /** The transit file reference used to create the template. */
        file?: {
          /**
           * The filename used for the uploaded file.
           * @minLength 1
           */
          name: string;
          /**
           * The MIME type of the uploaded file.
           * @minLength 1
           */
          mimetype: string;
          /**
           * The transit object key or absolute URL of the uploaded file content.
           * @minLength 1
           */
          s3key: string;
        };
      };
      output: {
        /** The unique identifier of the created template. */
        id: string;
        /** The name of the created template. */
        name: string;
        /** Current status of the created template. */
        status: string;
        /** Current version of the created template. */
        version: string;
        /** Timestamp when the template was created. */
        date_created: string;
        /** Timestamp when the template was last modified. */
        date_modified: string;
      };
    };
    /** Create a PandaDoc webhook subscription for document lifecycle events. */
    "pandadoc.create_webhook": {
      input: {
        /**
         * A descriptive name for the webhook subscription.
         * @minLength 1
         */
        name: string;
        /**
         * The destination URL that receives webhook notifications.
         * @format uri
         */
        url: string;
        /** Whether the webhook subscription should be active. */
        active?: boolean;
        /** Additional entities to include in the webhook payload. */
        payload?: Array<string>;
        /**
         * Events that trigger the webhook.
         * @minItems 1
         */
        triggers: Array<string>;
      };
      output: {
        /** The unique identifier of the webhook. */
        uuid: string;
        /** The descriptive name of the webhook. */
        name: string;
        /** The destination URL of the webhook. */
        url: string;
        /** Current status of the webhook subscription. */
        status: string;
        /** Shared secret key returned for webhook verification. */
        shared_key?: string | null;
      };
    };
    /** Delete a contact from the connected PandaDoc workspace. */
    "pandadoc.delete_contact": {
      input: {
        /**
         * The unique identifier of the contact to delete.
         * @minLength 1
         */
        contact_id: string;
      };
      output: {
        /** Whether PandaDoc deleted the contact successfully. */
        success: boolean;
      };
    };
    /** Delete a template from the connected PandaDoc workspace. */
    "pandadoc.delete_template": {
      input: {
        /**
         * The unique identifier of the template.
         * @minLength 1
         */
        template_id: string;
      };
      output: {
        /** The status string returned by PandaDoc. */
        status: string;
        /** The message returned by PandaDoc. */
        message: string;
      };
    };
    /** Retrieve detailed metadata for a specific PandaDoc document. */
    "pandadoc.get_document_details": {
      input: {
        /**
         * The unique identifier of the document.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The unique identifier of the document. */
        id: string;
        /** The title of the document. */
        name: string;
        /** Current document state returned by PandaDoc. */
        status: string;
        /** Current document version. */
        version?: string | null;
        /** Tags assigned to the document. */
        tags?: Array<string>;
        /** Text block references in the document. */
        texts?: Array<{
          /** The content block identifier or name. */
          name?: string | null;
        }>;
        /** Image block references in the document. */
        images?: Array<{
          /** The content block identifier or name. */
          name?: string | null;
        }>;
        /** Table block references in the document. */
        tables?: Array<{
          /** The content block identifier or name. */
          name?: string | null;
        }>;
        /** Fields returned for the document. */
        fields?: Array<{
          /** The name of the document field. */
          name?: string | null;
          /** The field type returned by PandaDoc. */
          type?: string | null;
          /** The unique identifier of the field. */
          uuid?: string | null;
          /** The display title of the field. */
          title?: string | null;
          /** The current field value. */
          value?: unknown;
          /** The stable identifier of the field. */
          field_id?: string | null;
          /** The recipient assignment attached to the field. */
          assigned_to?: Record<string, unknown> | null;
          /** The merge field name associated with the field. */
          merge_field?: string | null;
          /** Placeholder text configured on the field. */
          placeholder?: string | null;
        }>;
        /** Tokens returned for the document. */
        tokens?: Array<Record<string, unknown>>;
        /** Pricing data attached to the document. */
        pricing?: Record<string, unknown> | null;
        /** The PandaDoc user who sent the document. */
        sent_by?: {
          /** The unique identifier of the user. */
          id: string;
          /** Email address of the user. */
          email?: string | null;
          /** First name of the user. */
          first_name?: string | null;
          /** Last name of the user. */
          last_name?: string | null;
          /** Avatar URL of the user. */
          avatar?: string | null;
          /** Workspace membership identifier of the user. */
          membership_id?: string | null;
        } | null;
        /** Custom metadata attached to the document. */
        metadata?: Record<string, unknown> | null;
        /** The template the document was created from. */
        template?: {
          /** The unique identifier of the template. */
          id?: string | null;
          /** The name of the template. */
          name?: string | null;
        } | null;
        /** The PandaDoc user who created the document. */
        created_by?: {
          /** The unique identifier of the user. */
          id: string;
          /** Email address of the user. */
          email?: string | null;
          /** First name of the user. */
          first_name?: string | null;
          /** Last name of the user. */
          last_name?: string | null;
          /** Avatar URL of the user. */
          avatar?: string | null;
          /** Workspace membership identifier of the user. */
          membership_id?: string | null;
        } | null;
        /** Recipients attached to the document. */
        recipients?: Array<{
          /** The unique identifier of the recipient. */
          id?: string | null;
          /** Email address of the recipient. */
          email?: string | null;
          /** Role of the recipient. */
          role?: string | null;
          /** Roles assigned to the recipient. */
          roles?: Array<string>;
          /** Phone number of the recipient. */
          phone?: string | null;
          /** First name of the recipient. */
          first_name?: string | null;
          /** Last name of the recipient. */
          last_name?: string | null;
          /** Linked contact identifier. */
          contact_id?: string | null;
          /** Shared signing URL of the document. */
          shared_link?: string | null;
          /** Whether the recipient has completed their step. */
          has_completed?: boolean | null;
          /** Signing order assigned to the recipient. */
          signing_order?: number | null;
          /** Recipient type returned by PandaDoc. */
          recipient_type?: string | null;
          /** Timestamp when the recipient signed the document. */
          signature_date?: string | null;
          /** Delivery methods configured for the recipient. */
          delivery_methods?: Record<string, unknown> | null;
          /** Verification settings configured for the recipient. */
          verification_settings?: Record<string, unknown> | null;
        }>;
        /** Reference number assigned to the document. */
        ref_number?: string | null;
        /** Grand total returned for the document pricing table. */
        grand_total?: {
          /** The numeric amount represented as a string. */
          amount: string;
          /** The ISO currency code. */
          currency: string;
        } | null;
        /** Timestamp when the document was created. */
        date_created: string;
        /** Timestamp when the document metadata was last modified. */
        date_modified?: string | null;
        /** Timestamp when the document was sent. */
        date_sent?: string | null;
        /** Timestamp when the document was completed. */
        date_completed?: string | null;
        /** Expiration date configured for the document. */
        expiration_date?: string | null;
        /** External linked objects returned for the document. */
        linked_objects?: Array<Record<string, unknown>>;
        /** Approval workflow details returned by PandaDoc. */
        approval_execution?: Record<string, unknown> | null;
        /** Timestamp when the document content was last modified. */
        content_date_modified?: string | null;
        /** Autonumbering sequence prefix returned by PandaDoc. */
        autonumbering_sequence_name_prefix?: string | null;
      };
    };
    /** Retrieve detailed metadata for a specific PandaDoc template. */
    "pandadoc.get_template_details": {
      input: {
        /**
         * The unique identifier of the template.
         * @minLength 1
         */
        template_id: string;
      };
      output: {
        /** The unique identifier of the template. */
        id: string;
        /** The name of the template. */
        name: string;
        /** Tags assigned to the template. */
        tags?: Array<string>;
        /** Roles defined on the template. */
        roles: Array<{
          /** The unique identifier of the role. */
          id: string;
          /** The human-readable name of the role. */
          name: string;
          /** Signing order configured for the role. */
          signing_order?: number | null;
          /** The preassigned person or contact group linked to the role. */
          preassigned_person?: Record<string, unknown> | null;
        }>;
        /** Fields defined on the template. */
        fields: Array<{
          /** The unique identifier of the field. */
          uuid: string;
          /** The name of the field. */
          name: string;
          /** The field type returned by PandaDoc. */
          type?: string | null;
          /** The display title of the field. */
          title?: string | null;
          /** The current value of the field. */
          value?: unknown;
          /** The stable field identifier. */
          field_id?: string | null;
          /** The role assignment attached to the field. */
          assigned_to?: Record<string, unknown> | null;
          /** The merge field name associated with the field. */
          merge_field?: string | null;
          /** Placeholder text configured on the field. */
          placeholder?: string | null;
        }>;
        /** Tokens defined on the template. */
        tokens: Array<{
          /** The token name. */
          name: string;
          /** The token value. */
          value?: string | null;
        }>;
        /** Pricing data returned for the template. */
        pricing?: Record<string, unknown> | null;
        /** Custom metadata attached to the template. */
        metadata?: Record<string, unknown> | null;
        /** The PandaDoc user who created the template. */
        created_by?: {
          /** The unique identifier of the user. */
          id: string;
          /** Email address of the user. */
          email?: string | null;
          /** First name of the user. */
          first_name?: string | null;
          /** Last name of the user. */
          last_name?: string | null;
          /** Avatar URL of the user. */
          avatar?: string | null;
          /** Workspace membership identifier of the user. */
          membership_id?: string | null;
        } | null;
        /** Current template version. */
        version: string;
        /** Timestamp when the template was created. */
        date_created: string;
        /** Timestamp when the template was last modified. */
        date_modified: string;
        /** Content placeholders returned by PandaDoc for the template. */
        content_placeholders?: Array<unknown>;
        /** Timestamp when the template content was last modified. */
        content_date_modified?: string | null;
      };
    };
    /** List contacts in the connected PandaDoc workspace, with optional exact email filtering. */
    "pandadoc.list_contacts": {
      input: {
        /** Filter contacts by exact email address after retrieving the workspace list. */
        email?: string;
      };
      output: {
        /** Contacts returned by PandaDoc. */
        results: Array<{
          /** The unique identifier of the contact. */
          id: string;
          /** Email address of the contact. */
          email: string;
          /** First name of the contact. */
          first_name?: string | null;
          /** Last name of the contact. */
          last_name?: string | null;
          /** Company name of the contact. */
          company?: string | null;
          /** Phone number of the contact. */
          phone?: string | null;
          /** Job title of the contact. */
          job_title?: string | null;
          /** State of the contact. */
          state?: string | null;
          /** City of the contact. */
          city?: string | null;
          /** Country of the contact. */
          country?: string | null;
          /** Postal code of the contact. */
          postal_code?: string | null;
          /** Street address of the contact. */
          street_address?: string | null;
          /** Whether the contact is shared in the workspace. */
          shared?: boolean;
          /** Timestamp when the contact was created. */
          create_time?: string | null;
        }>;
      };
    };
    /** List document folders in the connected PandaDoc workspace. */
    "pandadoc.list_document_folders": {
      input: {
        /**
         * Page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of folders to return.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /** Parent folder UUID. When omitted, PandaDoc returns root folders. */
        parent_uuid?: string;
      };
      output: {
        /** Folders returned by PandaDoc. */
        results: Array<{
          /** The unique identifier of the folder. */
          uuid: string;
          /** The folder name. */
          name: string;
          /** Timestamp when the folder was created. */
          date_created: string;
          /** Whether the folder contains child folders. */
          has_folders: boolean;
          /** Whether the folder contains documents or templates. */
          has_items: boolean;
          /** Whether the folder is shared. */
          shared?: boolean;
          /** The identifier of the folder creator. */
          created_by?: string | null;
          /** The unique identifier of the parent folder. */
          parent_uuid?: string | null;
        }>;
        /** Total number of results available when PandaDoc returns pagination metadata. */
        count?: number;
        /** URL for the next page of results, or null when there is no next page. */
        next?: string | null;
        /** URL for the previous page of results, or null when there is no previous page. */
        previous?: string | null;
      };
    };
    /** List templates available in the connected PandaDoc workspace. */
    "pandadoc.list_templates": {
      input: {
        /** Search query used to filter templates by name. */
        q?: string;
        /** Exact template identifier filter applied client-side. */
        id?: string;
        /** Tags used to filter templates. */
        tag?: Array<string>;
        /**
         * Page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of templates to return per page.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /** Additional fields to include in the response. */
        fields?: Array<string>;
        /** Whether to return only shared templates. */
        shared?: boolean;
        /** Whether to return deleted templates. */
        deleted?: boolean;
        /** Folder UUID used to scope the template list. */
        folder_uuid?: string;
      };
      output: {
        /** Templates returned by PandaDoc. */
        results: Array<{
          /** The unique identifier of the template. */
          id: string;
          /** The name of the template. */
          name: string;
          /** Current template version. */
          version: string;
          /** Timestamp when the template was created. */
          date_created: string;
          /** Timestamp when the template was last modified. */
          date_modified: string;
          /** Timestamp when the template content was last modified. */
          content_date_modified?: string | null;
        }>;
        /** Total number of results available when PandaDoc returns pagination metadata. */
        count?: number;
        /** URL for the next page of results, or null when there is no next page. */
        next?: string | null;
        /** URL for the previous page of results, or null when there is no previous page. */
        previous?: string | null;
      };
    };
  }
}
