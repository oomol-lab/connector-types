import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a German company profile by name, register number, search query, or exact entity identifier, with optional paid enrichment features. */
    "handelsregister_ai.fetch_organization": {
      input: {
        /**
         * A company name, register number, search query, or entity_id from search_organizations.
         * @minLength 1
         * @pattern \S
         */
        q: string;
        /**
         * Optional enrichment features to request; each feature may consume additional credits.
         * @minItems 1
         */
        features?: Array<"financial_kpi" | "balance_sheet_accounts" | "profit_and_loss_account" | "related_persons" | "publications" | "news" | "insolvency_publications" | "annual_financial_statements" | "annual_financial_statements__html" | "shareholders" | "ubos" | "shareholdings" | "mergers_and_acquisitions" | "website_content">;
        /** Enable AI enrichment and fuzzy entity resolution at the provider's documented additional credit cost. */
        ai_search?: "on-default";
        /** Refresh live commercial-register data at the provider's documented additional credit cost. */
        realtime_mode?: "handelsregister-default";
      };
      output: {
        /** The stable Handelsregister AI organization identifier. */
        entity_id: string;
        /** The registered organization name. */
        name: string;
        /** Request billing metadata returned by Handelsregister AI. */
        meta: {
          /** The number of credits charged for the request. */
          request_credit_cost?: number;
          /** The remaining credit balance, returned as a number or numeric string. */
          credits_remaining?: number | string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search German commercial-register organizations by free text or structured filters and return a paginated result set. */
    "handelsregister_ai.search_organizations": {
      input: Record<string, unknown>;
      output: {
        /** The organizations matching the current query and filters. */
        results: Array<{
          /** The stable Handelsregister AI organization identifier. */
          entity_id?: string;
          /** The registered organization name. */
          name?: string;
          /** The organization's commercial-register details. */
          registration?: Record<string, unknown>;
          /** The organization's registered address. */
          address?: Record<string, unknown>;
          /** The organization registration date or timestamp in ISO 8601 format. */
          registration_date?: string | null;
          /** The registered business purpose. */
          purpose?: string | null;
          [key: string]: unknown;
        }>;
        /** The total number of matching organizations. */
        total: number;
        /** Request billing metadata returned by Handelsregister AI. */
        meta: {
          /** The number of credits charged for the request. */
          request_credit_cost?: number;
          /** The remaining credit balance, returned as a number or numeric string. */
          credits_remaining?: number | string;
          [key: string]: unknown;
        };
      };
    };
  }
}
