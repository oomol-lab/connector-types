import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check whether an email address is disposable or from a free email provider. */
    "ninjapear.check_disposable_email": {
      input: {
        /**
         * The email address to check.
         * @format email
         */
        email: string;
      };
      output: {
        /**
         * The email address that was checked.
         * @format email
         */
        email?: string;
        /** Whether the email domain is a known disposable provider. */
        is_disposable_email?: boolean;
        /** Whether the email domain is a free email provider. */
        is_free_email?: boolean;
        [key: string]: unknown;
      };
    };
    /** Retrieve detailed company information such as description, industry, leadership, and addresses. */
    "ninjapear.get_company_details": {
      input: {
        /**
         * The website URL or company name of the target company. A website URL is recommended for precision.
         * @minLength 1
         */
        website: string;
        /** Whether to include fresh employee count data. */
        include_employee_count?: boolean;
        /** Whether to include X follower and following counts. */
        follower_count?: "include";
        /** Address detail mode. */
        addresses?: "hq-only" | "best-effort-exhaustive";
        /** How NinjaPear should use cached enrichment data. */
        use_cache?: "if-recent" | "if-present" | "if-present-only" | "never";
      };
      output: {
        /** List of all company website URLs. */
        websites?: Array<string> | null;
        /** A brief description of the company. */
        description?: string | null;
        /** GICS 8-digit industry code. */
        industry?: number | null;
        /** The company type. */
        company_type?: string | null;
        /** Year the company was founded. */
        founded_year?: number | null;
        /** List of company specialties. */
        specialties?: Array<string> | null;
        /** Company name. */
        name?: string | null;
        /** Company tagline or slogan. */
        tagline?: string | null;
        /** URL to the company logo endpoint. */
        logo_url?: string | null;
        /** URL to the company's cover image. */
        cover_pic_url?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get the current NinjaPear credit balance for the authenticated account. */
    "ninjapear.get_credit_balance": {
      input: Record<string, never>;
      output: {
        /** The current credit balance. */
        credit_balance?: number;
        [key: string]: unknown;
      };
    };
    /** Get the estimated employee count for a company. */
    "ninjapear.get_employee_count": {
      input: {
        /**
         * The website URL or company name of the target company. A website URL is recommended for precision.
         * @minLength 1
         */
        website: string;
        /** How NinjaPear should use cached enrichment data. */
        use_cache?: "if-recent" | "if-present" | "if-present-only" | "never";
      };
      output: {
        /** Estimated employee count. */
        employee_count?: number;
        [key: string]: unknown;
      };
    };
    /** Discover direct business competitors of a target company. */
    "ninjapear.list_competitors": {
      input: {
        /**
         * The website URL or company name of the target company. A website URL is recommended for precision.
         * @minLength 1
         */
        website: string;
        /** How NinjaPear should use cached enrichment data. */
        use_cache?: "if-recent" | "if-present" | "if-present-only" | "never";
      };
      output: {
        /** Competitors for the target company. */
        competitors?: Array<{
          /** URL to the NinjaPear Company Details API for this competitor. */
          company_details_url?: string;
          /** Company website URL. */
          website?: string;
          /** Why this company is considered a competitor. */
          competition_reason?: "organic_keyword_overlap" | "product_overlap";
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List likely customers, investors, and partner platforms for a target company. */
    "ninjapear.list_customers": {
      input: {
        /**
         * The website URL or company name of the target company. A website URL is recommended for precision.
         * @minLength 1
         */
        website: string;
        /**
         * Pagination cursor returned by NinjaPear.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Number of results per page, from 1 to 200.
         * @minimum 1
         * @maximum 200
         */
        page_size?: number;
        /** Whether to filter out low-quality results. */
        quality_filter?: boolean;
        /** How NinjaPear should use cached enrichment data. */
        use_cache?: "if-recent" | "if-present" | "if-present-only" | "never";
      };
      output: {
        /** Companies that are probable customers of the target company. */
        customers?: Array<{
          /** Company name. */
          name?: string;
          /** A brief description of the company. */
          description?: string | null;
          /** Company tagline or slogan. */
          tagline?: string | null;
          /** Company website URL. */
          website?: string | null;
          /** URL to the NinjaPear Company Logo API for this company. */
          company_logo_url?: string | null;
          /** Unique company identifier. */
          id?: string;
          /** GICS 8-digit industry code. */
          industry?: number | null;
          /** List of company specialties. */
          specialties?: Array<string> | null;
          /** X profile URL. */
          x_profile?: string | null;
          [key: string]: unknown;
        }>;
        /** Investors that have invested in the target company. */
        investors?: Array<{
          /** Company name. */
          name?: string;
          /** A brief description of the company. */
          description?: string | null;
          /** Company tagline or slogan. */
          tagline?: string | null;
          /** Company website URL. */
          website?: string | null;
          /** URL to the NinjaPear Company Logo API for this company. */
          company_logo_url?: string | null;
          /** Unique company identifier. */
          id?: string;
          /** GICS 8-digit industry code. */
          industry?: number | null;
          /** List of company specialties. */
          specialties?: Array<string> | null;
          /** X profile URL. */
          x_profile?: string | null;
          [key: string]: unknown;
        }>;
        /** Partners, platforms, or service providers used by the target company. */
        partner_platforms?: Array<{
          /** Company name. */
          name?: string;
          /** A brief description of the company. */
          description?: string | null;
          /** Company tagline or slogan. */
          tagline?: string | null;
          /** Company website URL. */
          website?: string | null;
          /** URL to the NinjaPear Company Logo API for this company. */
          company_logo_url?: string | null;
          /** Unique company identifier. */
          id?: string;
          /** GICS 8-digit industry code. */
          industry?: number | null;
          /** List of company specialties. */
          specialties?: Array<string> | null;
          /** X profile URL. */
          x_profile?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination URL for the next page of results. */
        next_page?: string | null;
        [key: string]: unknown;
      };
    };
    /** List products and services offered by a target company. */
    "ninjapear.list_products": {
      input: {
        /**
         * The website URL or company name of the target company. A website URL is recommended for precision.
         * @minLength 1
         */
        website: string;
        /** How NinjaPear should use cached enrichment data. */
        use_cache?: "if-recent" | "if-present" | "if-present-only" | "never";
      };
      output: {
        /** The normalized website requested. */
        website?: string;
        /** Products and services offered by the target company. */
        products?: Array<{
          /** Full product or service name. */
          name?: string;
          /** One-line product tagline when available. */
          tagline?: string | null;
          /** One to three sentences describing what the product does. */
          description?: string | null;
          /** Product categories, industries, or use cases. */
          categories?: Array<string>;
          /** Short product attributes, deployment styles, or technology labels. */
          tags?: Array<string>;
          /** Feature map using canonical feature keys and boolean, string, or numeric values. */
          structured_features?: Record<string, boolean | string | number>;
          /** Feature phrases that do not fit a canonical key. */
          freeform_features?: Array<string>;
          /** Pricing model, starting price, and tiers when available. */
          pricing?: Record<string, unknown> | null;
          /** Product, platform, or service names this product integrates with. */
          integrations?: Array<string>;
          /** Platforms where the product is available. */
          platforms?: Array<string>;
          /** URLs where product data was found. */
          source_urls?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Total credits charged for this call. */
        credit_cost?: number;
        /** Error message when a streamed live response could not return products. */
        error?: string | null;
        [key: string]: unknown;
      };
    };
    /** Resolve a company name to its canonical website URL. */
    "ninjapear.lookup_company_website": {
      input: {
        /**
         * The company name to look up.
         * @minLength 1
         */
        company_name: string;
        /**
         * Optional ISO 3166-1 alpha-2 country code used to bias the search.
         * @minLength 2
         * @maxLength 2
         */
        country_code?: string;
        /**
         * Hint used to differentiate similarly named companies.
         * @minLength 1
         */
        hint?: string;
      };
      output: {
        /** The resolved canonical website URL. */
        website?: string;
        [key: string]: unknown;
      };
    };
  }
}
