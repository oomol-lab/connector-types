import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch one company profile by slug. Cost depends on depth: slim is 1 credit (identity fields), standard is 2 credits (all scalar fields, owners and subsidiaries), full is 3 credits (adds funding rounds with investors, valuations, technologies and app stack). Fetching the same company at the same depth again within 12 months is not charged. A 402 means credits are exhausted, which is a billing state and should not be retried. */
    "indexed.get_company": {
      input: {
        /**
         * The company slug.
         * @pattern ^[a-z0-9][a-z0-9-]*[a-z0-9]$
         */
        slug: string;
        /** How much of the profile to return and charge for. Defaults to standard. */
        depth?: "slim" | "standard" | "full";
      };
      output: {
        /** The company profile. slim returns identity fields. standard adds all scalar fields plus owners and subsidiaries. full adds valuationEvents (funding rounds with participating investors), technologies and appStack. Amounts are whole USD and a null amount means undisclosed. */
        data?: {
          /**
           * The Indexed company id.
           * @format uuid
           */
          id: string;
          /** The company name. */
          name: string;
          /** The company slug. */
          slug: string;
          /** The company website, or null. */
          website?: string | null;
          /** A one or two sentence description, or null. */
          short_description?: string | null;
          /** Canonical industry labels, or null. */
          industries?: Array<string> | null;
          /** Headquarters country, or null. */
          hq_country?: string | null;
          /** Total disclosed funding in whole USD, grants included, or null. */
          total_funding_raised?: number | null;
          /** One of active, acquired, ipo, closed, or null when unknown. */
          operating_status?: string | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Look up up to 100 website domains in one call. Domains are normalized and deduplicated in first-seen order, and results keep that order. Each hit costs 1 credit. Misses are free and are recorded for coverage review. If credits run out part way through, the remaining domains come back as insufficient_credits without a charge. summary gives the counts and total credits charged. */
    "indexed.lookup_companies_by_domains": {
      input: {
        /**
         * Website domains or URLs to look up, 1 to 100 items.
         * @minItems 1
         * @maxItems 100
         */
        domains: Array<string>;
      };
      output: {
        /** One result per unique domain, in first-seen order. */
        data?: Array<{
          /** The normalized domain this result belongs to. */
          domain: string;
          /** hit: a company was found and 1 credit was charged. miss: no company found, nothing charged, the domain is recorded for coverage review. insufficient_credits: the account ran out of credits before this domain, nothing charged. */
          status: "hit" | "miss" | "insufficient_credits";
          /** Credits charged for this domain: 1 for a hit, 0 otherwise. */
          credits_charged: number;
          /** The public company card. Fields not listed here may also be present. */
          data?: {
            /**
             * The Indexed company id.
             * @format uuid
             */
            id: string;
            /** The company name. */
            name: string;
            /** The company slug. Pass it to get_company for more detail. */
            slug: string;
            /** The company logo URL, or null. */
            logo_url?: string | null;
            /** The company website, or null. */
            website?: string | null;
            /** A one or two sentence description, or null. */
            short_description?: string | null;
            /** Canonical industry labels, or null. */
            industries?: Array<string> | null;
            /** Headquarters city, or null. */
            hq_city?: string | null;
            /** Headquarters country, or null. */
            hq_country?: string | null;
            /** Employee count bucket such as 51-200, or null. */
            employee_count_range?: string | null;
            /** Total disclosed funding in whole USD, grants included. Null when no round has a disclosed amount. */
            total_funding_raised?: number | null;
            /** One of active, acquired, ipo, closed, or null when unknown. */
            operating_status?: string | null;
            /** True when this account has already unlocked the company's detail within the last 12 months. */
            _revealed: boolean;
            /** Present on domain lookups. When matched_via is not canonical_domain, the company's current website differs from the domain that was queried. */
            domain_match?: {
              /** The domain as supplied by the caller, after normalization. */
              queried?: string;
              /** The current website host of the matched company. */
              canonical_domain?: string | null;
              /** Which stored domain matched the query. */
              matched_via?: "canonical_domain" | "alias_domain" | "former_website";
            };
            [key: string]: unknown;
          };
          /** Present on a miss. Whether the domain was recorded for coverage review. */
          coverage_requested?: boolean;
          /** Present when a domain lookup or name search returns no result. queued: recorded for coverage review. not_queued: recording failed, retry later. pending_enrichment: Indexed holds the company but the profile is not yet complete enough to serve. scope_review: Indexed holds it and its fit with coverage scope is under review. not_in_coverage_scope: Indexed holds it but it is outside coverage scope and will not be served. not_found: no match; name misses are reviewed as search demand. */
          coverage_status?: "queued" | "not_queued" | "pending_enrichment" | "scope_review" | "not_in_coverage_scope" | "not_found";
          /** Present on a miss. Currently null because manual review has no guaranteed completion date. */
          coverage_eta_days?: number | null;
          [key: string]: unknown;
        }>;
        /** Counts across the whole call. */
        summary?: {
          /** Unique domains looked up. */
          total_requested?: number;
          /** Domains that matched a company. */
          total_hits?: number;
          /** Domains with no match. */
          total_misses?: number;
          /** Domains skipped because credits ran out. */
          total_insufficient_credits?: number;
          /** Credits charged for this call. */
          total_credits_charged?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Find the company that owns one website domain. Accepts a bare domain or a full URL and matches the registrable domain exactly: stripe.com finds a company whose site is stripe.com or a subdomain of it, never a longer name such as bluestripe.com. A sub-host you send, like app.stripe.com, is not rewritten to its parent, so send the company's main domain. Alias and former domains match too, and domain_match says which. This counts as a standard search: free within the daily search quota, after which paid plans spend 1 credit per page that has results and free plans get a rate-limited error. A miss costs nothing and the domain is recorded for coverage review; coverage_status explains why nothing was returned. */
    "indexed.lookup_company_by_domain": {
      input: {
        /**
         * The website domain or URL, for example stripe.com.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** Matching company cards. Empty when nothing matched. */
        data: Array<{
          /**
           * The Indexed company id.
           * @format uuid
           */
          id: string;
          /** The company name. */
          name: string;
          /** The company slug. Pass it to get_company for more detail. */
          slug: string;
          /** The company logo URL, or null. */
          logo_url?: string | null;
          /** The company website, or null. */
          website?: string | null;
          /** A one or two sentence description, or null. */
          short_description?: string | null;
          /** Canonical industry labels, or null. */
          industries?: Array<string> | null;
          /** Headquarters city, or null. */
          hq_city?: string | null;
          /** Headquarters country, or null. */
          hq_country?: string | null;
          /** Employee count bucket such as 51-200, or null. */
          employee_count_range?: string | null;
          /** Total disclosed funding in whole USD, grants included. Null when no round has a disclosed amount. */
          total_funding_raised?: number | null;
          /** One of active, acquired, ipo, closed, or null when unknown. */
          operating_status?: string | null;
          /** True when this account has already unlocked the company's detail within the last 12 months. */
          _revealed: boolean;
          /** Present on domain lookups. When matched_via is not canonical_domain, the company's current website differs from the domain that was queried. */
          domain_match?: {
            /** The domain as supplied by the caller, after normalization. */
            queried?: string;
            /** The current website host of the matched company. */
            canonical_domain?: string | null;
            /** Which stored domain matched the query. */
            matched_via?: "canonical_domain" | "alias_domain" | "former_website";
          };
          [key: string]: unknown;
        }>;
        /** Pagination and reveal counts for the result set. */
        meta: {
          /** Total number of matches. */
          total: number;
          /** The page number returned. */
          page: number;
          /** The page size used. */
          limit: number;
          /** Whether another page exists. */
          hasMore: boolean;
          /** Count of matches this account has already unlocked. */
          revealed_count: number;
          /** Count of matches this account has not unlocked. */
          unrevealed_count: number;
          /** Present when reveal_status is unrevealed but every match is already unlocked. */
          all_revealed?: boolean;
          /** Echo of the resolved filter values, such as ai-ml resolved to AI/ML. Present when filters are applied. */
          resolved_filters?: Record<string, unknown>;
          /** Present on paid plans when more results exist. Pass it back as cursor for the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** Present on a zero-result domain lookup. True when the domain was recorded for coverage review, false when recording failed or the company is outside coverage scope. This is not a promise of coverage. */
        coverage_requested?: boolean;
        /** Present when a domain lookup or name search returns no result. queued: recorded for coverage review. not_queued: recording failed, retry later. pending_enrichment: Indexed holds the company but the profile is not yet complete enough to serve. scope_review: Indexed holds it and its fit with coverage scope is under review. not_in_coverage_scope: Indexed holds it but it is outside coverage scope and will not be served. not_found: no match; name misses are reviewed as search demand. */
        coverage_status?: "queued" | "not_queued" | "pending_enrichment" | "scope_review" | "not_in_coverage_scope" | "not_found";
        [key: string]: unknown;
      };
    };
    /** Search company cards by name text and filters such as industry, country, size, operating status and funding range. Standard search is free within the daily search quota. After the quota, paid plans spend 1 credit per page that has results and free plans get a rate-limited error. Results are cards, so use get_company for funding history and stacks. Technology-stack filters are not exposed here because they are billed as a separate premium search. */
    "indexed.search_companies": {
      input: {
        /**
         * Free text query, for example a company name.
         * @maxLength 200
         */
        q?: string;
        /**
         * Industry filters. Accepts display labels such as Fintech or slugs such as ai-ml. Multiple values match any of them.
         * @minItems 1
         */
        industries?: Array<string>;
        /**
         * Headquarters country names such as United States.
         * @minItems 1
         */
        countries?: Array<string>;
        /**
         * Employee count buckets to include.
         * @minItems 1
         */
        employees?: Array<"1-10" | "11-50" | "51-200" | "201-500" | "501-1000" | "1001-5000" | "5001-10000" | "10001+">;
        /**
         * Operating statuses to include.
         * @minItems 1
         */
        operatingStatus?: Array<"active" | "acquired" | "ipo" | "closed" | "merged">;
        /**
         * Minimum total funding in whole USD, grants included. Funding filters are paid-plan only.
         * @minimum 0
         */
        minFunding?: number;
        /**
         * Maximum total funding in whole USD, grants included. Funding filters are paid-plan only.
         * @minimum 0
         */
        maxFunding?: number;
        /**
         * Minimum data_completeness_score, to skip thin records.
         * @minimum 0
         * @maximum 64
         */
        minCompleteness?: number;
        /**
         * Incremental sync: only records modified at or after this ISO 8601 date or timestamp, such as 2026-09-01 or 2026-09-01T00:00:00Z. Combine with cursor for delta pulls.
         * @minLength 1
         */
        updatedSince?: string;
        /** Filter results by whether this account has unlocked them. Defaults to all. */
        revealStatus?: "all" | "revealed" | "unrevealed";
        /** Sort field. Sorting is part of the paid-plan listing surface. */
        sort?: "total_funding_raised" | "name" | "last_funding_date" | "last_funding_amount" | "founded_year" | "data_completeness_score";
        /** Sort direction. */
        order?: "asc" | "desc";
        /**
         * Page number, starting at 1. Free keys can read pages 1 through 3.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page. Defaults to 25. Free keys get 10 rows per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Paid plans only. The meta.next_cursor value from the previous page, for sequential bulk pulls. When set, page and sort are ignored.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Matching company cards. Empty when nothing matched. */
        data: Array<{
          /**
           * The Indexed company id.
           * @format uuid
           */
          id: string;
          /** The company name. */
          name: string;
          /** The company slug. Pass it to get_company for more detail. */
          slug: string;
          /** The company logo URL, or null. */
          logo_url?: string | null;
          /** The company website, or null. */
          website?: string | null;
          /** A one or two sentence description, or null. */
          short_description?: string | null;
          /** Canonical industry labels, or null. */
          industries?: Array<string> | null;
          /** Headquarters city, or null. */
          hq_city?: string | null;
          /** Headquarters country, or null. */
          hq_country?: string | null;
          /** Employee count bucket such as 51-200, or null. */
          employee_count_range?: string | null;
          /** Total disclosed funding in whole USD, grants included. Null when no round has a disclosed amount. */
          total_funding_raised?: number | null;
          /** One of active, acquired, ipo, closed, or null when unknown. */
          operating_status?: string | null;
          /** True when this account has already unlocked the company's detail within the last 12 months. */
          _revealed: boolean;
          /** Present on domain lookups. When matched_via is not canonical_domain, the company's current website differs from the domain that was queried. */
          domain_match?: {
            /** The domain as supplied by the caller, after normalization. */
            queried?: string;
            /** The current website host of the matched company. */
            canonical_domain?: string | null;
            /** Which stored domain matched the query. */
            matched_via?: "canonical_domain" | "alias_domain" | "former_website";
          };
          [key: string]: unknown;
        }>;
        /** Pagination and reveal counts for the result set. */
        meta: {
          /** Total number of matches. */
          total: number;
          /** The page number returned. */
          page: number;
          /** The page size used. */
          limit: number;
          /** Whether another page exists. */
          hasMore: boolean;
          /** Count of matches this account has already unlocked. */
          revealed_count: number;
          /** Count of matches this account has not unlocked. */
          unrevealed_count: number;
          /** Present when reveal_status is unrevealed but every match is already unlocked. */
          all_revealed?: boolean;
          /** Echo of the resolved filter values, such as ai-ml resolved to AI/ML. Present when filters are applied. */
          resolved_filters?: Record<string, unknown>;
          /** Present on paid plans when more results exist. Pass it back as cursor for the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** Present on a zero-result domain lookup. True when the domain was recorded for coverage review, false when recording failed or the company is outside coverage scope. This is not a promise of coverage. */
        coverage_requested?: boolean;
        /** Present when a domain lookup or name search returns no result. queued: recorded for coverage review. not_queued: recording failed, retry later. pending_enrichment: Indexed holds the company but the profile is not yet complete enough to serve. scope_review: Indexed holds it and its fit with coverage scope is under review. not_in_coverage_scope: Indexed holds it but it is outside coverage scope and will not be served. not_found: no match; name misses are reviewed as search demand. */
        coverage_status?: "queued" | "not_queued" | "pending_enrichment" | "scope_review" | "not_in_coverage_scope" | "not_found";
        [key: string]: unknown;
      };
    };
  }
}
