import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an eSignatures.com contract from an existing template and signer list, sending it unless saved as a draft. */
    "esignatures_io.create_contract": {
      input: {
        /**
         * The template ID eSignatures.com should use for the contract.
         * @minLength 1
         */
        templateId: string;
        /**
         * People required to sign the contract.
         * @minItems 1
         */
        signers: Array<{
          /**
           * The signer name.
           * @minLength 1
           */
          name: string;
          /**
           * The signer email address.
           * @format email
           */
          email?: string;
          /**
           * The signer mobile number, including country code when needed.
           * @minLength 1
           */
          mobile?: string;
          /**
           * The signer company name.
           * @minLength 1
           */
          companyName?: string;
          /**
           * The sequence number for signing. Signers with the same number are notified together.
           * @minimum 1
           */
          signingOrder?: number;
          /** Whether eSignatures.com should automatically sign for this signer. */
          autoSign?: boolean;
          /** Delivery methods for the signature request. Use an empty array to skip sending. */
          signatureRequestDeliveryMethods?: Array<"email" | "sms">;
          /** How eSignatures.com should deliver the final signed document to the signer. */
          signedDocumentDeliveryMethod?: "email" | "sms" | "";
          /** Multi-factor authentication methods required for this signer. */
          multiFactorAuthentications?: Array<"sms_verification_code" | "email_verification_code" | "photo_id">;
          /**
           * The URL eSignatures.com redirects the signer to after signing.
           * @format uri
           */
          redirectUrl?: string;
        }>;
        /**
         * The contract title. Defaults to the template title when omitted.
         * @minLength 1
         */
        title?: string;
        /**
         * The language setting for signer pages and emails.
         * @minLength 1
         */
        locale?: string;
        /**
         * Custom metadata to attach to the contract.
         * @minLength 1
         */
        metadata?: string;
        /**
         * The number of hours before the contract expires.
         * @minimum 1
         */
        expiresInHours?: number;
        /**
         * A webhook URL eSignatures.com should notify for this contract.
         * @format uri
         */
        customWebhookUrl?: string;
        /**
         * The eSignatures.com user email assigned to manage the contract.
         * @format email
         */
        assignedUserEmail?: string;
        /** Labels to assign to the contract. */
        labels?: Array<string>;
        /** Whether eSignatures.com should mark the contract as a test. */
        test?: boolean;
        /** Whether eSignatures.com should save the contract as a draft instead of sending it. */
        saveAsDraft?: boolean;
        /** Placeholder replacements to apply when creating the contract. */
        placeholderFields?: Array<{
          /**
           * The template placeholder key without surrounding braces.
           * @minLength 1
           */
          placeholderKey: string;
          /**
           * Plain text to replace the placeholder.
           * @minLength 1
           */
          replaceWithText?: string;
          /**
           * Markdown content to replace the placeholder.
           * @minLength 1
           */
          replaceWithMarkdown?: string;
          /**
           * Template ID whose full content should replace the placeholder.
           * @minLength 1
           */
          replaceWithTemplate?: string;
        }>;
        /** Signer field default values to pre-fill on the contract. */
        signerFields?: Array<{
          /**
           * The signer field ID configured in the template editor.
           * @minLength 1
           */
          signerFieldId: string;
          /**
           * The default value eSignatures.com should pre-fill.
           * @minLength 1
           */
          defaultValue: string;
        }>;
        /** Custom email copy for eSignatures.com contract notifications. */
        emails?: {
          /**
           * The email subject used to request a signature.
           * @minLength 1
           */
          signatureRequestSubject?: string;
          /**
           * The email body used to request a signature.
           * @minLength 1
           */
          signatureRequestText?: string;
          /**
           * The email subject used to send the signed contract.
           * @minLength 1
           */
          finalContractSubject?: string;
          /**
           * The email body used to send the signed contract.
           * @minLength 1
           */
          finalContractText?: string;
          /** Email addresses to CC when eSignatures.com sends the signed PDF. */
          ccEmailAddresses?: Array<string>;
          /**
           * The reply-to email address for contract emails.
           * @format email
           */
          replyTo?: string;
        };
        /** Custom branding values for the eSignatures.com signing flow. */
        customBranding?: {
          /**
           * The company name eSignatures.com should display as sender.
           * @minLength 1
           */
          companyName?: string;
          /**
           * The URL of the custom logo image.
           * @format uri
           */
          logoUrl?: string;
        };
      };
      output: {
        /** The operation status returned by eSignatures.com. */
        status: string | null;
        /** A normalized eSignatures.com contract. */
        contract: {
          /** The eSignatures.com contract ID. */
          id: string | null;
          /** The contract status returned by eSignatures.com. */
          status: string | null;
          /** The contract title. */
          title: string | null;
          /** The custom metadata attached to the contract. */
          metadata: string | null;
          /** The source that created the contract, such as api or ui. */
          source: string | null;
          /** The yes or no flag returned by eSignatures.com. */
          test: "yes" | "no" | null;
          /**
           * The temporary URL for the finalized signed PDF when eSignatures.com returns one.
           * @format uri
           */
          contractPdfUrl: string | null;
          /** Labels assigned to the contract. */
          labels: Array<string>;
          /** Signers attached to the contract. */
          signers: Array<{
            /** The eSignatures.com signer ID. */
            id: string | null;
            /** The signer name. */
            name: string | null;
            /** The signer email address. */
            email: string | null;
            /** The signer mobile number. */
            mobile: string | null;
            /** The signer company name. */
            companyName: string | null;
            /** The URL where this signer can review and sign. */
            signPageUrl: string | null;
            /** Values entered by the signer for template signer fields. */
            signerFieldValues: Record<string, unknown> | null;
            /** The raw eSignatures.com API object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw eSignatures.com API object. */
          raw: Record<string, unknown>;
        };
        /** The raw eSignatures.com API object. */
        raw: Record<string, unknown>;
      };
    };
    /** Create an eSignatures.com template from a title, Markdown document content, and optional labels. */
    "esignatures_io.create_template": {
      input: {
        /**
         * The title of the new template.
         * @minLength 1
         */
        title: string;
        /**
         * The Markdown document content for the template.
         * @minLength 1
         */
        markdown: string;
        /** Labels to assign to the template. */
        labels?: Array<string>;
      };
      output: {
        /** Created template records returned by eSignatures.com. */
        templates: Array<{
          /** The eSignatures.com template ID. */
          templateId: string | null;
          /** The template title. */
          title: string | null;
          /** The template creation timestamp returned by eSignatures.com. */
          createdAt: string | null;
          /** Placeholder field keys configured in the template. */
          placeholderFields: Array<string>;
          /** Signer field IDs configured in the template. */
          signerFields: Array<string>;
          /** The raw eSignatures.com API object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw eSignatures.com API object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one eSignatures.com contract by ID. */
    "esignatures_io.get_contract": {
      input: {
        /**
         * The eSignatures.com contract ID.
         * @minLength 1
         */
        contractId: string;
      };
      output: {
        /** A normalized eSignatures.com contract. */
        contract: {
          /** The eSignatures.com contract ID. */
          id: string | null;
          /** The contract status returned by eSignatures.com. */
          status: string | null;
          /** The contract title. */
          title: string | null;
          /** The custom metadata attached to the contract. */
          metadata: string | null;
          /** The source that created the contract, such as api or ui. */
          source: string | null;
          /** The yes or no flag returned by eSignatures.com. */
          test: "yes" | "no" | null;
          /**
           * The temporary URL for the finalized signed PDF when eSignatures.com returns one.
           * @format uri
           */
          contractPdfUrl: string | null;
          /** Labels assigned to the contract. */
          labels: Array<string>;
          /** Signers attached to the contract. */
          signers: Array<{
            /** The eSignatures.com signer ID. */
            id: string | null;
            /** The signer name. */
            name: string | null;
            /** The signer email address. */
            email: string | null;
            /** The signer mobile number. */
            mobile: string | null;
            /** The signer company name. */
            companyName: string | null;
            /** The URL where this signer can review and sign. */
            signPageUrl: string | null;
            /** Values entered by the signer for template signer fields. */
            signerFieldValues: Record<string, unknown> | null;
            /** The raw eSignatures.com API object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw eSignatures.com API object. */
          raw: Record<string, unknown>;
        };
        /** The raw eSignatures.com API object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve the Markdown content for one eSignatures.com contract. */
    "esignatures_io.get_contract_content": {
      input: {
        /**
         * The eSignatures.com contract ID.
         * @minLength 1
         */
        contractId: string;
      };
      output: {
        /** The eSignatures.com contract ID. */
        contractId: string | null;
        /** The contract Markdown content. */
        markdown: string | null;
        /** The raw eSignatures.com API object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one eSignatures.com template by ID. */
    "esignatures_io.get_template": {
      input: {
        /**
         * The eSignatures.com template ID.
         * @minLength 1
         */
        templateId: string;
      };
      output: {
        /** A normalized eSignatures.com template. */
        template: {
          /** The eSignatures.com template ID. */
          templateId: string | null;
          /** The template title. */
          title: string | null;
          /** The template creation timestamp returned by eSignatures.com. */
          createdAt: string | null;
          /** Placeholder field keys configured in the template. */
          placeholderFields: Array<string>;
          /** Signer field IDs configured in the template. */
          signerFields: Array<string>;
          /** The raw eSignatures.com API object. */
          raw: Record<string, unknown>;
        };
        /** The raw eSignatures.com API object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve the Markdown content for one eSignatures.com template. */
    "esignatures_io.get_template_content": {
      input: {
        /**
         * The eSignatures.com template ID.
         * @minLength 1
         */
        templateId: string;
      };
      output: {
        /** The eSignatures.com template ID. */
        templateId: string | null;
        /** The template Markdown content. */
        markdown: string | null;
        /** The raw eSignatures.com API object. */
        raw: Record<string, unknown>;
      };
    };
    /** List eSignatures.com templates available to the connected account. */
    "esignatures_io.list_templates": {
      input: Record<string, never>;
      output: {
        /** Templates returned by eSignatures.com. */
        templates: Array<{
          /** The eSignatures.com template ID. */
          templateId: string | null;
          /** The template title. */
          title: string | null;
          /** The template creation timestamp returned by eSignatures.com. */
          createdAt: string | null;
          /** Placeholder field keys configured in the template. */
          placeholderFields: Array<string>;
          /** Signer field IDs configured in the template. */
          signerFields: Array<string>;
          /** The raw eSignatures.com API object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw eSignatures.com API object. */
        raw: Record<string, unknown>;
      };
    };
    /** Withdraw an eSignatures.com contract so it can no longer be signed while preserving query access. */
    "esignatures_io.withdraw_contract": {
      input: {
        /**
         * The eSignatures.com contract ID.
         * @minLength 1
         */
        contractId: string;
      };
      output: {
        /** The operation status returned by eSignatures.com. */
        status: string | null;
        /** The raw eSignatures.com API object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
