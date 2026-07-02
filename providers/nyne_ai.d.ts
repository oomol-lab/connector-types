import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Poll a Nyne.ai company enrichment request and return its status plus completed company result. */
    "nyne_ai.get_company_enrichment": {
      input: {
        /**
         * The Nyne.ai asynchronous request identifier.
         * @minLength 1
         */
        requestId: string;
      };
      output: {
        /**
         * The Nyne.ai asynchronous request identifier.
         * @minLength 1
         */
        requestId: string;
        /** The Nyne.ai request status. */
        status: string;
        /** Whether Nyne.ai marked the request complete. */
        completed: boolean | null;
        /** The raw object returned by Nyne.ai. */
        result: Record<string, unknown> | null;
        /** The raw object returned by Nyne.ai. */
        raw: Record<string, unknown>;
      };
    };
    /** Poll a Nyne.ai company search request and return its status plus completed result page. */
    "nyne_ai.get_company_search": {
      input: {
        /**
         * The Nyne.ai asynchronous request identifier.
         * @minLength 1
         */
        requestId: string;
      };
      output: {
        /**
         * The Nyne.ai asynchronous request identifier.
         * @minLength 1
         */
        requestId: string;
        /** The Nyne.ai request status. */
        status: string;
        /** Whether Nyne.ai marked the request complete. */
        completed: boolean | null;
        /** Raw objects returned by Nyne.ai. */
        results: Array<Record<string, unknown>>;
        /** The integer value returned by Nyne.ai. */
        returnedCount: number | null;
        /** The integer value returned by Nyne.ai. */
        totalResults: number | null;
        /** Whether Nyne.ai marked the request complete. */
        hasMore: boolean | null;
        /** The next cursor returned by Nyne.ai. */
        nextCursor: string | null;
        /** The integer value returned by Nyne.ai. */
        nextOffset: number | null;
        /** The raw object returned by Nyne.ai. */
        raw: Record<string, unknown>;
      };
    };
    /** Poll a Nyne.ai person enrichment request and return its status plus completed profile result. */
    "nyne_ai.get_person_enrichment": {
      input: {
        /**
         * The Nyne.ai asynchronous request identifier.
         * @minLength 1
         */
        requestId: string;
      };
      output: {
        /**
         * The Nyne.ai asynchronous request identifier.
         * @minLength 1
         */
        requestId: string;
        /** The Nyne.ai request status. */
        status: string;
        /** Whether Nyne.ai marked the request complete. */
        completed: boolean | null;
        /** The raw object returned by Nyne.ai. */
        result: Record<string, unknown> | null;
        /** The raw object returned by Nyne.ai. */
        raw: Record<string, unknown>;
      };
    };
    /** Poll a Nyne.ai person search request and return its status plus completed result page. */
    "nyne_ai.get_person_search": {
      input: {
        /**
         * The Nyne.ai asynchronous request identifier.
         * @minLength 1
         */
        requestId: string;
      };
      output: {
        /**
         * The Nyne.ai asynchronous request identifier.
         * @minLength 1
         */
        requestId: string;
        /** The Nyne.ai request status. */
        status: string;
        /** Whether Nyne.ai marked the request complete. */
        completed: boolean | null;
        /** Raw objects returned by Nyne.ai. */
        results: Array<Record<string, unknown>>;
        /** The integer value returned by Nyne.ai. */
        returnedCount: number | null;
        /** The integer value returned by Nyne.ai. */
        totalResults: number | null;
        /** Whether Nyne.ai marked the request complete. */
        hasMore: boolean | null;
        /** The next cursor returned by Nyne.ai. */
        nextCursor: string | null;
        /** The integer value returned by Nyne.ai. */
        nextOffset: number | null;
        /** The raw object returned by Nyne.ai. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Nyne.ai credit usage, monthly allocation, remaining balance, and per-API breakdown. */
    "nyne_ai.get_usage": {
      input: {
        /**
         * Month to retrieve usage for, from 1 through 12.
         * @minimum 1
         * @maximum 12
         */
        month?: number;
        /**
         * Year to retrieve usage for, from 2020 through 2030.
         * @minimum 2020
         * @maximum 2030
         */
        year?: number;
      };
      output: {
        /** The integer value returned by Nyne.ai. */
        month: number | null;
        /** The integer value returned by Nyne.ai. */
        year: number | null;
        /** The usage period returned by Nyne.ai. */
        period: string | null;
        /** Credit consumption totals returned by Nyne.ai. */
        creditsUsed: Record<string, unknown>;
        /** Request-count totals returned by Nyne.ai. */
        requestsCount: Record<string, unknown>;
        /** Credit allocation and remaining balance returned by Nyne.ai. */
        limits: Record<string, unknown>;
        /** Per-API usage breakdown returned by Nyne.ai. */
        breakdown: Record<string, unknown>;
        /** The raw object returned by Nyne.ai. */
        raw: Record<string, unknown>;
      };
    };
    /** Submit an asynchronous Nyne.ai company enrichment request from domain, email, phone, or social URL. */
    "nyne_ai.submit_company_enrichment": {
      input: {
        /**
         * The company website domain.
         * @minLength 1
         */
        domain?: string;
        /**
         * A company email address.
         * @format email
         */
        email?: string;
        /**
         * A company phone number.
         * @minLength 1
         */
        phone?: string;
        /**
         * The company social profile URL.
         * @format uri
         */
        socialMediaUrl?: string;
        /**
         * The HTTP or HTTPS callback URL Nyne.ai should call when the asynchronous request completes.
         * @format uri
         */
        callbackUrl?: string;
      };
      output: {
        /**
         * The Nyne.ai asynchronous request identifier.
         * @minLength 1
         */
        requestId: string;
        /** The Nyne.ai request status. */
        status: string;
        /** Whether Nyne.ai marked the request complete. */
        completed: boolean | null;
        /** The raw object returned by Nyne.ai. */
        raw: Record<string, unknown>;
      };
    };
    /** Submit an asynchronous Nyne.ai company search using a natural-language query. */
    "nyne_ai.submit_company_search": {
      input: {
        /**
         * The natural-language company search query.
         * @minLength 1
         * @maxLength 700
         */
        query: string;
        /**
         * Maximum companies to return. Nyne.ai supports 1 through 50.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Starting position for offset pagination.
         * @minimum 0
         */
        offset?: number;
        /** Whether Nyne.ai should return a query-fit score. */
        profileScoring?: boolean;
        /** Whether Nyne.ai should return query-fit evidence. */
        insights?: boolean;
        /**
         * The HTTP or HTTPS callback URL Nyne.ai should call when the asynchronous request completes.
         * @format uri
         */
        callbackUrl?: string;
      };
      output: {
        /**
         * The Nyne.ai asynchronous request identifier.
         * @minLength 1
         */
        requestId: string;
        /** The Nyne.ai request status. */
        status: string;
        /** Whether Nyne.ai marked the request complete. */
        completed: boolean | null;
        /** The raw object returned by Nyne.ai. */
        raw: Record<string, unknown>;
      };
    };
    /** Submit an asynchronous Nyne.ai person enrichment request from email, phone, social URL, or name. */
    "nyne_ai.submit_person_enrichment": {
      input: {
        /**
         * The person's email address.
         * @format email
         */
        email?: string;
        /** The person's phone number. */
        phone?: string;
        /**
         * The person's social profile URL.
         * @format uri
         */
        socialMediaUrl?: string;
        /**
         * The person's full name.
         * @minLength 1
         */
        name?: string;
        /**
         * The person's employer name used to improve matching.
         * @minLength 1
         */
        company?: string;
        /**
         * The city used to disambiguate name lookups.
         * @minLength 1
         * @maxLength 100
         */
        city?: string;
        /**
         * The HTTP or HTTPS callback URL Nyne.ai should call when the asynchronous request completes.
         * @format uri
         */
        callbackUrl?: string;
        /** Social sources to pull with enrichment. */
        newsfeed?: "all" | Array<string>;
        /** Whether Nyne.ai should use AI-assisted search expansion. */
        aiEnhancedSearch?: boolean;
        /** Whether Nyne.ai should require stricter email confirmation. */
        strictEmailCheck?: boolean;
        /** Whether Nyne.ai should use the lower-cost lite enrichment mode. */
        liteEnrich?: boolean;
        /** Whether Nyne.ai should return match probability when available. */
        probabilityScore?: boolean;
        /** Whether Nyne.ai should force a live organization data refresh. */
        forceOrganizationRefresh?: boolean;
        /**
         * Field names the Nyne.ai result must contain to count as a match.
         * @minItems 1
         */
        requiredFields?: Array<string>;
      };
      output: {
        /**
         * The Nyne.ai asynchronous request identifier.
         * @minLength 1
         */
        requestId: string;
        /** The Nyne.ai request status. */
        status: string;
        /** Whether Nyne.ai marked the request complete. */
        completed: boolean | null;
        /** The raw object returned by Nyne.ai. */
        raw: Record<string, unknown>;
      };
    };
    /** Submit an asynchronous Nyne.ai people search using a natural-language query or structured filters. */
    "nyne_ai.submit_person_search": {
      input: {
        /**
         * The natural-language search query sent to Nyne.ai.
         * @minLength 1
         */
        query?: string;
        /**
         * Results per page. Nyne.ai defaults to 10 and clamps values above 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Whether Nyne.ai should include verified email addresses. */
        showEmails?: boolean;
        /** Whether Nyne.ai should include phone numbers. */
        showPhoneNumbers?: boolean;
        /** Whether Nyne.ai should only return people with emails. */
        requireEmails?: boolean;
        /** Whether Nyne.ai should only return people with phones. */
        requirePhoneNumbers?: boolean;
        /** Whether Nyne.ai should only return people with at least one contact method. */
        requirePhonesOrEmails?: boolean;
        /** Whether Nyne.ai should attach AI-generated match insights. */
        insights?: boolean;
        /** Whether Nyne.ai should return a query-fit score. */
        profileScoring?: boolean;
        /** Structured Nyne.ai search filters. */
        customFilters?: Record<string, unknown>;
        /**
         * Opaque pagination cursor from a previous Nyne.ai response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Starting position for offset pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * The Nyne.ai asynchronous request identifier.
         * @minLength 1
         */
        requestId?: string;
        /**
         * The HTTP or HTTPS callback URL Nyne.ai should call when the asynchronous request completes.
         * @format uri
         */
        callbackUrl?: string;
      };
      output: {
        /**
         * The Nyne.ai asynchronous request identifier.
         * @minLength 1
         */
        requestId: string;
        /** The Nyne.ai request status. */
        status: string;
        /** Whether Nyne.ai marked the request complete. */
        completed: boolean | null;
        /** The raw object returned by Nyne.ai. */
        raw: Record<string, unknown>;
      };
    };
  }
}
