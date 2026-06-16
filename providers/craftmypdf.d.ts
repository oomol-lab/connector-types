import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate a PDF from a CraftMyPDF template and return the hosted file URL plus transaction metadata. */
    "craftmypdf.create_pdf": {
      input: {
        /**
         * The CraftMyPDF template_id value. Comma-separated template IDs are passed through as documented by CraftMyPDF.
         * @minLength 1
         */
        templateId: string;
        /** The template data payload. CraftMyPDF accepts either a stringified JSON string or a JSON object. */
        data: string | Record<string, unknown>;
        /**
         * An optional external URL for loading template data. When set, CraftMyPDF uses it instead of data.
         * @minLength 1
         */
        loadDataFrom?: string;
        /**
         * The optional template version string. Omit it to use the latest version.
         * @minLength 1
         */
        version?: string;
        /**
         * The file URL expiration time in minutes.
         * @minimum 1
         * @maximum 10080
         */
        expiration?: number;
        /**
         * The output PDF filename.
         * @minLength 1
         */
        outputFile?: string;
        /**
         * An optional DPI value for CraftMyPDF image downsampling.
         * @minimum 1
         */
        imageResampleResolution?: number;
        /** Whether the generated PDF should be marked for direct download by CraftMyPDF. */
        directDownload?: boolean;
        /** Whether CraftMyPDF should keep the generated PDF in its CDN-backed storage. */
        cloudStorage?: boolean;
        /** The paging mode used when templateId contains multiple comma-separated template IDs. */
        paging?: "continuous" | "reset";
      };
      output: {
        /**
         * The hosted PDF URL returned by CraftMyPDF.
         * @minLength 1
         */
        fileUrl: string;
        /**
         * The CraftMyPDF transaction reference for this generation request.
         * @minLength 1
         */
        transactionRef: string;
        /** The anchor metadata returned by CraftMyPDF when available. */
        anchors: Array<{
          /** The 1-based page number of the anchor. */
          page?: number;
          /** The anchor text when present. */
          text?: string;
          /** The hierarchical level reported by CraftMyPDF. */
          level?: string;
          /** The optional anchor description. */
          description?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the current CraftMyPDF account details resolved by the provided API key. */
    "craftmypdf.get_account_info": {
      input: Record<string, never>;
      output: {
        /** Normalized CraftMyPDF account information. */
        account: {
          /**
           * The CraftMyPDF account username associated with the API key.
           * @minLength 1
           */
          username: string;
          /** The amount of quota already consumed by the account. */
          quotaCounter: number;
          /** The maximum quota allocated to the account. */
          quotaMax: number;
          /** The number of templates currently stored in the account. */
          templateCounter: number;
          /** The maximum number of templates allowed for the account. */
          templateMax: number;
          /**
           * The ISO 8601 timestamp when the account was created.
           * @minLength 1
           */
          createdAt: string;
        };
      };
    };
    /** Get the raw CraftMyPDF template body and sample JSON for one template ID. */
    "craftmypdf.get_template": {
      input: {
        /**
         * The template identifier to retrieve.
         * @minLength 1
         */
        templateId: string;
        /**
         * The optional template version string. Omit it to retrieve the latest version.
         * @minLength 1
         */
        version?: string;
      };
      output: {
        /** The template body returned by CraftMyPDF. */
        template: {
          /**
           * The template display name.
           * @minLength 1
           */
          name: string;
          /**
           * The raw CraftMyPDF template body string.
           * @minLength 1
           */
          body: string;
          /** The sample JSON string stored with the template. */
          sampleDataJson: string | null;
        };
      };
    };
    /** List CraftMyPDF templates with optional pagination and group-name filtering. */
    "craftmypdf.list_templates": {
      input: {
        /**
         * The maximum number of templates to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of templates to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * Filter templates by CraftMyPDF group_name.
         * @minLength 1
         */
        groupName?: string;
      };
      output: {
        /** The CraftMyPDF templates returned for the request. */
        templates: Array<{
          /**
           * The template identifier.
           * @minLength 1
           */
          templateId: string;
          /**
           * The template display name.
           * @minLength 1
           */
          name: string;
          /**
           * The current upstream template status.
           * @minLength 1
           */
          status: string;
          /**
           * The ISO 8601 timestamp when the template was created.
           * @minLength 1
           */
          createdAt: string;
          /** The ISO 8601 timestamp when the template was last updated. */
          updatedAt: string | null;
          /** The optional CraftMyPDF template group name. */
          groupName: string | null;
        }>;
      };
    };
  }
}
