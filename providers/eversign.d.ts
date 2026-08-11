import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Xodo Sign document from public file URLs or existing Xodo Sign file IDs. */
    "eversign.create_document": {
      input: {
        /**
         * The Xodo Sign business ID.
         * @minimum 1
         */
        businessId: number;
        /**
         * Files to include in the document.
         * @minItems 1
         */
        files: Array<{
          /**
           * The file name shown in Xodo Sign.
           * @minLength 1
           */
          name: string;
          /**
           * A publicly accessible file URL that Xodo Sign should fetch.
           * @format uri
           */
          fileUrl: string;
        } | {
          /**
           * The file name shown in Xodo Sign.
           * @minLength 1
           */
          name: string;
          /**
           * An existing Xodo Sign file ID.
           * @minLength 1
           */
          fileId: string;
        }>;
        /**
         * People required to sign the document.
         * @minItems 1
         */
        signers: Array<{
          /**
           * A unique signer ID within this document.
           * @minimum 1
           */
          id: number;
          /**
           * The signer's full name.
           * @minLength 1
           */
          name: string;
          /**
           * The signer's email address.
           * @format email
           */
          email: string;
          /**
           * The one-based signing order when signer ordering is enabled.
           * @minimum 1
           */
          order?: number;
          /**
           * An optional PIN the signer must enter.
           * @minLength 1
           */
          pin?: string;
          /**
           * A custom delivery message for this signer.
           * @minLength 1
           */
          message?: string;
          /**
           * The two-letter language code for signing emails and pages.
           * @minLength 1
           */
          language?: string;
        }>;
        /** Non-signing recipients who receive document notifications. */
        recipients?: Array<{
          /**
           * The recipient's full name.
           * @minLength 1
           */
          name: string;
          /**
           * The recipient's email address.
           * @format email
           */
          email: string;
          /**
           * The two-letter language code for recipient emails and status pages.
           * @minLength 1
           */
          language?: string;
        }>;
        /** Whether to save the document as a draft without sending it. */
        isDraft?: boolean;
        /** Whether signers must sign in the provided order. */
        useSignerOrder?: boolean;
        /** Whether Xodo Sign should send automatic reminders. */
        reminders?: boolean;
        /** Whether every signer must sign before the document is complete. */
        requireAllSigners?: boolean;
        /** Whether signers may place their own fields during signing. */
        flexibleSigning?: boolean;
        /** Whether Xodo Sign should parse hidden tags already present in the files. */
        useHiddenTags?: boolean;
        /** Whether to create a non-binding sandbox document. */
        sandbox?: boolean;
        /**
         * The document title.
         * @minLength 1
         */
        title?: string;
        /**
         * The general message sent with the document.
         * @minLength 1
         */
        message?: string;
        /**
         * A verified custom requester name shown in document communication.
         * @minLength 1
         */
        customRequesterName?: string;
        /**
         * A verified custom requester email shown in document communication.
         * @format email
         */
        customRequesterEmail?: string;
        /**
         * The URL used after a signer completes signing.
         * @format uri
         */
        redirectUrl?: string;
        /**
         * The URL used after a signer declines signing.
         * @format uri
         */
        declineRedirectUrl?: string;
        /**
         * An internal application reference for this document.
         * @minLength 1
         */
        client?: string;
        /**
         * The document expiration time as a Unix timestamp.
         * @minimum 1
         */
        expires?: number;
        /** Whether signing should be available through an embedded iframe. */
        embeddedSigningEnabled?: boolean;
      };
      output: {
        /** A normalized Xodo Sign document or template. */
        document: {
          /**
           * The Xodo Sign document or template hash.
           * @minLength 1
           */
          documentHash: string;
          /** The string value returned by Xodo Sign when available. */
          title: string | null;
          /** The string value returned by Xodo Sign when available. */
          message: string | null;
          /** The string value returned by Xodo Sign when available. */
          requesterEmail: string | null;
          /** The string value returned by Xodo Sign when available. */
          templateId: string | null;
          /** The integer value returned by Xodo Sign when available. */
          created: number | null;
          /** The integer value returned by Xodo Sign when available. */
          completed: number | null;
          /** The integer value returned by Xodo Sign when available. */
          expires: number | null;
          /** Whether the document is a draft. */
          isDraft: boolean;
          /** Whether the object is a template. */
          isTemplate: boolean;
          /** Whether all required signing is complete. */
          isCompleted: boolean;
          /** Whether the document is archived. */
          isArchived: boolean;
          /** Whether the document is deleted. */
          isDeleted: boolean;
          /** Whether the document is in trash. */
          isTrashed: boolean;
          /** Whether the document is cancelled. */
          isCancelled: boolean;
          /** The signers attached to the document. */
          signers: Array<{
            /** The signer ID within the document. */
            signerId: number;
            /** The string value returned by Xodo Sign when available. */
            name: string | null;
            /** The string value returned by Xodo Sign when available. */
            email: string | null;
            /** The string value returned by Xodo Sign when available. */
            role: string | null;
            /** The integer value returned by Xodo Sign when available. */
            order: number | null;
            /** Whether this signer has signed the document. */
            signed: boolean;
            /** The string value returned by Xodo Sign when available. */
            status: string | null;
            /** The raw object returned by the Xodo Sign API. */
            raw: Record<string, unknown>;
          }>;
          /** The raw object returned by the Xodo Sign API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a Xodo Sign document from an existing template, role assignments, and merge fields. */
    "eversign.create_document_from_template": {
      input: {
        /**
         * The Xodo Sign business ID.
         * @minimum 1
         */
        businessId: number;
        /**
         * The document hash of the Xodo Sign template to use.
         * @minLength 1
         */
        templateId: string;
        /**
         * Signer assignments for required template roles.
         * @minItems 1
         */
        signers: Array<{
          /**
           * The signer role name defined by the template.
           * @minLength 1
           */
          role: string;
          /**
           * The signer's full name when the template role does not prefill one.
           * @minLength 1
           */
          name?: string;
          /**
           * The signer's email address when the template role does not prefill one.
           * @format email
           */
          email?: string;
          /**
           * An optional PIN the signer must enter.
           * @minLength 1
           */
          pin?: string;
          /**
           * A custom delivery message for this signer.
           * @minLength 1
           */
          message?: string;
          /** Whether Xodo Sign should email this signer for an embedded document. */
          deliverEmail?: boolean;
          /**
           * The two-letter language code for signing emails and pages.
           * @minLength 1
           */
          language?: string;
        }>;
        /** Recipient assignments for template CC roles. */
        recipients?: Array<{
          /**
           * The recipient role name defined by the template.
           * @minLength 1
           */
          role: string;
          /**
           * The recipient's full name.
           * @minLength 1
           */
          name: string;
          /**
           * The recipient's email address.
           * @format email
           */
          email: string;
          /**
           * The two-letter language code for recipient emails and status pages.
           * @minLength 1
           */
          language?: string;
        }>;
        /** Values for merge fields defined by the template. */
        mergeFields?: Array<{
          /**
           * The merge field identifier defined by the template.
           * @minLength 1
           */
          identifier: string;
          /** The value Xodo Sign should place in the merge field. */
          value: string;
        }>;
        /** Whether to create a non-binding sandbox document. */
        sandbox?: boolean;
        /**
         * The document title.
         * @minLength 1
         */
        title?: string;
        /**
         * The general message sent with the document.
         * @minLength 1
         */
        message?: string;
        /**
         * A verified custom requester name shown in document communication.
         * @minLength 1
         */
        customRequesterName?: string;
        /**
         * A verified custom requester email shown in document communication.
         * @format email
         */
        customRequesterEmail?: string;
        /**
         * The URL used after a signer completes signing.
         * @format uri
         */
        redirectUrl?: string;
        /**
         * The URL used after a signer declines signing.
         * @format uri
         */
        declineRedirectUrl?: string;
        /**
         * An internal application reference for this document.
         * @minLength 1
         */
        client?: string;
        /**
         * The document expiration time as a Unix timestamp.
         * @minimum 1
         */
        expires?: number;
        /** Whether signing should be available through an embedded iframe. */
        embeddedSigningEnabled?: boolean;
      };
      output: {
        /** A normalized Xodo Sign document or template. */
        document: {
          /**
           * The Xodo Sign document or template hash.
           * @minLength 1
           */
          documentHash: string;
          /** The string value returned by Xodo Sign when available. */
          title: string | null;
          /** The string value returned by Xodo Sign when available. */
          message: string | null;
          /** The string value returned by Xodo Sign when available. */
          requesterEmail: string | null;
          /** The string value returned by Xodo Sign when available. */
          templateId: string | null;
          /** The integer value returned by Xodo Sign when available. */
          created: number | null;
          /** The integer value returned by Xodo Sign when available. */
          completed: number | null;
          /** The integer value returned by Xodo Sign when available. */
          expires: number | null;
          /** Whether the document is a draft. */
          isDraft: boolean;
          /** Whether the object is a template. */
          isTemplate: boolean;
          /** Whether all required signing is complete. */
          isCompleted: boolean;
          /** Whether the document is archived. */
          isArchived: boolean;
          /** Whether the document is deleted. */
          isDeleted: boolean;
          /** Whether the document is in trash. */
          isTrashed: boolean;
          /** Whether the document is cancelled. */
          isCancelled: boolean;
          /** The signers attached to the document. */
          signers: Array<{
            /** The signer ID within the document. */
            signerId: number;
            /** The string value returned by Xodo Sign when available. */
            name: string | null;
            /** The string value returned by Xodo Sign when available. */
            email: string | null;
            /** The string value returned by Xodo Sign when available. */
            role: string | null;
            /** The integer value returned by Xodo Sign when available. */
            order: number | null;
            /** Whether this signer has signed the document. */
            signed: boolean;
            /** The string value returned by Xodo Sign when available. */
            status: string | null;
            /** The raw object returned by the Xodo Sign API. */
            raw: Record<string, unknown>;
          }>;
          /** The raw object returned by the Xodo Sign API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve the complete audit event history for a Xodo Sign document. */
    "eversign.get_audit_log": {
      input: {
        /**
         * The Xodo Sign business ID.
         * @minimum 1
         */
        businessId: number;
        /**
         * The Xodo Sign document or template hash.
         * @minLength 1
         */
        documentHash: string;
      };
      output: {
        /** Audit events in the order returned by Xodo Sign. */
        events: Array<{
          /** The audit log entry ID. */
          entryId: number;
          /** The audit event type. */
          eventType: string;
          /** The integer value returned by Xodo Sign when available. */
          signerId: number | null;
          /** The string value returned by Xodo Sign when available. */
          signerName: string | null;
          /** The string value returned by Xodo Sign when available. */
          signerEmail: string | null;
          /** The event time as a Unix timestamp. */
          timestamp: number;
          /** The raw object returned by the Xodo Sign API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Retrieve a Xodo Sign document or template by its document hash. */
    "eversign.get_document": {
      input: {
        /**
         * The Xodo Sign business ID.
         * @minimum 1
         */
        businessId: number;
        /**
         * The Xodo Sign document or template hash.
         * @minLength 1
         */
        documentHash: string;
      };
      output: {
        /** A normalized Xodo Sign document or template. */
        document: {
          /**
           * The Xodo Sign document or template hash.
           * @minLength 1
           */
          documentHash: string;
          /** The string value returned by Xodo Sign when available. */
          title: string | null;
          /** The string value returned by Xodo Sign when available. */
          message: string | null;
          /** The string value returned by Xodo Sign when available. */
          requesterEmail: string | null;
          /** The string value returned by Xodo Sign when available. */
          templateId: string | null;
          /** The integer value returned by Xodo Sign when available. */
          created: number | null;
          /** The integer value returned by Xodo Sign when available. */
          completed: number | null;
          /** The integer value returned by Xodo Sign when available. */
          expires: number | null;
          /** Whether the document is a draft. */
          isDraft: boolean;
          /** Whether the object is a template. */
          isTemplate: boolean;
          /** Whether all required signing is complete. */
          isCompleted: boolean;
          /** Whether the document is archived. */
          isArchived: boolean;
          /** Whether the document is deleted. */
          isDeleted: boolean;
          /** Whether the document is in trash. */
          isTrashed: boolean;
          /** Whether the document is cancelled. */
          isCancelled: boolean;
          /** The signers attached to the document. */
          signers: Array<{
            /** The signer ID within the document. */
            signerId: number;
            /** The string value returned by Xodo Sign when available. */
            name: string | null;
            /** The string value returned by Xodo Sign when available. */
            email: string | null;
            /** The string value returned by Xodo Sign when available. */
            role: string | null;
            /** The integer value returned by Xodo Sign when available. */
            order: number | null;
            /** Whether this signer has signed the document. */
            signed: boolean;
            /** The string value returned by Xodo Sign when available. */
            status: string | null;
            /** The raw object returned by the Xodo Sign API. */
            raw: Record<string, unknown>;
          }>;
          /** The raw object returned by the Xodo Sign API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List businesses available to the connected Xodo Sign API key. */
    "eversign.list_businesses": {
      input: Record<string, never>;
      output: {
        /** The Xodo Sign businesses. */
        businesses: Array<{
          /**
           * The Xodo Sign business ID.
           * @minimum 1
           */
          businessId: number;
          /** The business status, where 1 is active and 2 is inactive or deleted. */
          businessStatus: number;
          /** The workspace URL subdomain for the business. */
          businessIdentifier: string;
          /** The display name of the business. */
          businessName: string;
          /** The business creation time as a Unix timestamp. */
          creationTimestamp: number;
          /** Whether this is the account's primary business. */
          isPrimary: boolean;
          /** The raw object returned by the Xodo Sign API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Xodo Sign documents for a business, optionally filtering by documented status. */
    "eversign.list_documents": {
      input: {
        /**
         * The Xodo Sign business ID.
         * @minimum 1
         */
        businessId: number;
        /** The document status filter. */
        type?: "all" | "my_action_required" | "waiting_for_others" | "completed" | "drafts" | "cancelled";
        /**
         * The maximum number of documents to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The Xodo Sign documents. */
        documents: Array<{
          /**
           * The Xodo Sign document or template hash.
           * @minLength 1
           */
          documentHash: string;
          /** The string value returned by Xodo Sign when available. */
          title: string | null;
          /** The string value returned by Xodo Sign when available. */
          message: string | null;
          /** The string value returned by Xodo Sign when available. */
          requesterEmail: string | null;
          /** The string value returned by Xodo Sign when available. */
          templateId: string | null;
          /** The integer value returned by Xodo Sign when available. */
          created: number | null;
          /** The integer value returned by Xodo Sign when available. */
          completed: number | null;
          /** The integer value returned by Xodo Sign when available. */
          expires: number | null;
          /** Whether the document is a draft. */
          isDraft: boolean;
          /** Whether the object is a template. */
          isTemplate: boolean;
          /** Whether all required signing is complete. */
          isCompleted: boolean;
          /** Whether the document is archived. */
          isArchived: boolean;
          /** Whether the document is deleted. */
          isDeleted: boolean;
          /** Whether the document is in trash. */
          isTrashed: boolean;
          /** Whether the document is cancelled. */
          isCancelled: boolean;
          /** The signers attached to the document. */
          signers: Array<{
            /** The signer ID within the document. */
            signerId: number;
            /** The string value returned by Xodo Sign when available. */
            name: string | null;
            /** The string value returned by Xodo Sign when available. */
            email: string | null;
            /** The string value returned by Xodo Sign when available. */
            role: string | null;
            /** The integer value returned by Xodo Sign when available. */
            order: number | null;
            /** Whether this signer has signed the document. */
            signed: boolean;
            /** The string value returned by Xodo Sign when available. */
            status: string | null;
            /** The raw object returned by the Xodo Sign API. */
            raw: Record<string, unknown>;
          }>;
          /** The raw object returned by the Xodo Sign API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List active, archived, or draft Xodo Sign templates for a business. */
    "eversign.list_templates": {
      input: {
        /**
         * The Xodo Sign business ID.
         * @minimum 1
         */
        businessId: number;
        /** The template status filter. */
        type?: "templates" | "templates_archived" | "template_drafts";
        /**
         * The maximum number of templates to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The Xodo Sign templates. */
        templates: Array<{
          /**
           * The Xodo Sign document or template hash.
           * @minLength 1
           */
          documentHash: string;
          /** The string value returned by Xodo Sign when available. */
          title: string | null;
          /** The string value returned by Xodo Sign when available. */
          message: string | null;
          /** The string value returned by Xodo Sign when available. */
          requesterEmail: string | null;
          /** The string value returned by Xodo Sign when available. */
          templateId: string | null;
          /** The integer value returned by Xodo Sign when available. */
          created: number | null;
          /** The integer value returned by Xodo Sign when available. */
          completed: number | null;
          /** The integer value returned by Xodo Sign when available. */
          expires: number | null;
          /** Whether the document is a draft. */
          isDraft: boolean;
          /** Whether the object is a template. */
          isTemplate: boolean;
          /** Whether all required signing is complete. */
          isCompleted: boolean;
          /** Whether the document is archived. */
          isArchived: boolean;
          /** Whether the document is deleted. */
          isDeleted: boolean;
          /** Whether the document is in trash. */
          isTrashed: boolean;
          /** Whether the document is cancelled. */
          isCancelled: boolean;
          /** The signers attached to the document. */
          signers: Array<{
            /** The signer ID within the document. */
            signerId: number;
            /** The string value returned by Xodo Sign when available. */
            name: string | null;
            /** The string value returned by Xodo Sign when available. */
            email: string | null;
            /** The string value returned by Xodo Sign when available. */
            role: string | null;
            /** The integer value returned by Xodo Sign when available. */
            order: number | null;
            /** Whether this signer has signed the document. */
            signed: boolean;
            /** The string value returned by Xodo Sign when available. */
            status: string | null;
            /** The raw object returned by the Xodo Sign API. */
            raw: Record<string, unknown>;
          }>;
          /** The raw object returned by the Xodo Sign API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Replace a signer on a Xodo Sign document and notify the affected participants. */
    "eversign.reassign_signer": {
      input: {
        /**
         * The Xodo Sign business ID.
         * @minimum 1
         */
        businessId: number;
        /**
         * The Xodo Sign document or template hash.
         * @minLength 1
         */
        documentHash: string;
        /**
         * The signer ID to replace.
         * @minimum 1
         */
        signerId: number;
        /**
         * The replacement signer's full name.
         * @minLength 1
         */
        newSignerName: string;
        /**
         * The replacement signer's email address.
         * @format email
         */
        newSignerEmail: string;
        /**
         * The reason for the signer reassignment.
         * @minLength 1
         */
        reason?: string;
      };
      output: {
        /** Whether Xodo Sign reassigned the signer successfully. */
        success: boolean;
        /** The raw object returned by the Xodo Sign API. */
        raw: Record<string, unknown>;
      };
    };
    /** Send a reminder to one signer of a Xodo Sign document. */
    "eversign.send_reminder": {
      input: {
        /**
         * The Xodo Sign business ID.
         * @minimum 1
         */
        businessId: number;
        /**
         * The Xodo Sign document or template hash.
         * @minLength 1
         */
        documentHash: string;
        /**
         * The signer ID to remind.
         * @minimum 1
         */
        signerId: number;
      };
      output: {
        /** Whether Xodo Sign sent the reminder successfully. */
        success: boolean;
        /** The raw object returned by the Xodo Sign API. */
        raw: Record<string, unknown>;
      };
    };
  }
}
