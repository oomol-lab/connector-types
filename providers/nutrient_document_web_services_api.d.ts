import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Estimate Nutrient DWS Processor Build API credit usage and required features without executing the workflow. */
    "nutrient_document_web_services_api.analyze_build": {
      input: {
        /** The BuildInstructions JSON object accepted by Nutrient DWS /analyze_build. */
        instructions: Record<string, unknown>;
      };
      output: {
        /** The total estimated credit cost if the request is executed. */
        cost: number | null;
        /** The required features grouped by Nutrient DWS feature key. */
        requiredFeatures: Record<string, Array<{
            /** The credit cost per feature unit. */
            unitCost: number | null;
            /** The billing unit type reported by Nutrient DWS. */
            unitType: string | null;
            /** The number of units used by the feature. */
            units: number | null;
            /** The estimated feature cost in credits. */
            cost: number | null;
            /** The JSON paths in the instructions that triggered the feature. */
            usage: Array<string>;
            /** The raw Nutrient DWS API object. */
            raw: Record<string, unknown>;
          }>>;
        /** The raw Nutrient DWS API object. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Nutrient DWS JWT with optional operation, origin, and expiration restrictions. */
    "nutrient_document_web_services_api.create_auth_token": {
      input: {
        /**
         * The Nutrient DWS operations the token may access. Omit to allow all operations.
         * @minItems 1
         */
        allowedOperations?: Array<"annotations_api" | "compression_api" | "data_extraction_api" | "digital_signatures_api" | "document_editor_api" | "html_conversion_api" | "image_conversion_api" | "image_rendering_api" | "email_conversion_api" | "linearization_api" | "ocr_api" | "office_conversion_api" | "pdfa_api" | "pdf_to_office_conversion_api" | "redaction_api">;
        /**
         * The origins the token may be used from. Omit to allow all origins.
         * @minItems 1
         */
        allowedOrigins?: Array<string>;
        /**
         * The token lifetime in seconds. Nutrient DWS defaults to one hour when omitted.
         * @minimum 1
         */
        expirationTime?: number;
      };
      output: {
        /** The Nutrient DWS token ID. */
        id: string;
        /** The generated Nutrient DWS JWT. */
        accessToken: string;
      };
    };
    /** Revoke a Nutrient DWS JWT by token ID. */
    "nutrient_document_web_services_api.delete_auth_token": {
      input: {
        /**
         * The Nutrient DWS token ID to revoke.
         * @minLength 1
         */
        tokenId: string;
      };
      output: {
        /** Whether the token deletion request completed successfully. */
        success: boolean;
      };
    };
    /** Retrieve sanitized account information for the connected Nutrient DWS API key. */
    "nutrient_document_web_services_api.get_account_info": {
      input: Record<string, never>;
      output: {
        /** Nutrient DWS account information. */
        account: {
          /** Whether the API key maps to a signed-in account. */
          signedIn: boolean | null;
          /** The subscription type reported by Nutrient DWS. */
          subscriptionType: "free" | "paid" | "enterprise" | null;
          /** Nutrient DWS credit usage values returned for the connected account. */
          usage: {
            /** The total credits available to the account. */
            totalCredits: number | null;
            /** The credits already used by the account. */
            usedCredits: number | null;
          };
        };
      };
    };
  }
}
