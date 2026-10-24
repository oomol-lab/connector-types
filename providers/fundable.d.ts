import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve all alert configurations for the authenticated user (identified by API key). Returns configuration metadata including filters, frequency, and descriptions. Requires Pro+ or Enterprise; consumes no credits. */
    "fundable.get_alert_configurations": {
      input: Record<string, never>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** Array of alert configurations for this email */
          configurations?: Array<{
            /**
             * Unique identifier for the alert configuration
             * @format uuid
             */
            configuration_id?: string;
            /** User-defined name for the alert */
            configuration_name?: string;
            /** How often the alert runs */
            frequency?: "DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY";
            /** Alert description combining custom, alert, and semantic descriptions */
            description?: string;
            /** Alert filter criteria */
            filters?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve saved alert data including all deals that matched the alert criteria within the specified date range. Results include a flattened array of deals sorted by date (newest first) with duplicates removed. Requires Pro+ or Enterprise; consumes no credits. */
    "fundable.get_alerts": {
      input: {
        /**
         * Comma-separated list of alert UUIDs (up to 10 alerts per request).
         * All alerts must be associated with your API key's account.
         * Example: "uuid1,uuid2,uuid3"
         * @minLength 1
         */
        alert_ids: string;
        /**
         * Start date for the alert data range (ISO 8601 format).
         * Results will include deals from this date onwards.
         * @minLength 1
         * @format date-time
         */
        start_date: string;
        /**
         * End date for the alert data range (ISO 8601 format).
         * Results will include deals up to and including this date.
         *
         * **Note:** All dates are processed in UTC timezone. Deals are grouped into time periods based on UTC date boundaries.
         * @minLength 1
         * @format date-time
         */
        end_date: string;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** Array of alert configurations with their timeline data */
          alerts?: Array<{
            /**
             * Unique identifier for the alert configuration
             * @format uuid
             */
            alertId?: string;
            /** Name of the alert configuration */
            alertName?: string;
            /** Frequency setting of the alert */
            alertFrequency?: "DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY";
            /** Total number of deals for this alert */
            totalDealCount?: number;
            /** Array of deals that matched the alert criteria (flattened from all time periods, sorted by date DESC) */
            deals?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint when one company is already identified and its full profile and latest funding round are required. Prefer a domain or LinkedIn URL when available; they can be passed directly here without calling `/company/search` first. */
    "fundable.get_company": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** Full company details returned by the /company endpoint */
          company?: {
            /**
             * Unique identifier for the company
             * @format uuid
             */
            id?: string;
            /** Company name */
            name?: string | null;
            /** Legal name of the company */
            legal_name?: string | null;
            /** Fundable permalink for the company */
            guru_permalink?: string | null;
            /** Company website domain */
            domain?: string | null;
            /** Company region */
            region?: string | null;
            /** Current operating status of the company */
            operating_status?: string | null;
            /**
             * Date and time the company was founded
             * @format date-time
             */
            founded_date?: string | null;
            /** Whether the company has been acquired */
            acquired?: boolean | null;
            /** Brief description of the company */
            short_description?: string | null;
            /** Full description of the company. Available on /company endpoint; may be null on /companies list endpoint. */
            long_description?: string | null;
            /** Number of employees range */
            num_employees?: string | null;
            /**
             * LinkedIn profile URL
             * @format uri
             */
            linkedin?: string | null;
            /**
             * Twitter profile URL
             * @format uri
             */
            twitter?: string | null;
            /**
             * Facebook profile URL
             * @format uri
             */
            facebook?: string | null;
            /**
             * PitchBook profile URL
             * @format uri
             */
            pitchbook?: string | null;
            /**
             * Crunchbase profile URL
             * @format uri
             */
            crunchbase?: string | null;
            /** Company address */
            address?: string | null;
            /** IPO status of the company */
            ipo_status?: "public" | "private" | null;
            /** Number of funding rounds */
            num_funding_rounds?: number | null;
            /** Number of investors */
            num_investors?: number | null;
            /** Total amount raised (USD) */
            total_raised?: number | null;
            /** Latest valuation (USD) */
            latest_valuation_usd?: number | null;
            /**
             * Date of latest valuation
             * @format date-time
             */
            latest_valuation_date?: string | null;
            /** Industries the company operates in */
            industries?: Array<Record<string, unknown>>;
            /** Company location hierarchy */
            location?: Record<string, unknown>;
            /** Details of the company's most recent funding round */
            latest_deal?: {
              /**
               * Unique identifier for the deal
               * @format uuid
               */
              id?: string | null;
              /** Type of funding round */
              type?: string | null;
              /** Total amount raised in the round (USD) */
              total_round_raised?: number | null;
              /**
               * Date of the funding round
               * @format date-time
               */
              date?: string | null;
              /** Whether this is an extension round */
              extension?: boolean | null;
              /** Whether this is a pre-round (e.g., Pre-Series A) */
              pre?: boolean | null;
              /** Intermediate round designation */
              intermediate?: string | null;
              /** Descriptions of the latest funding round. */
              description?: {
                /** Brief description of the deal */
                short_description?: string | null;
                /** Detailed description of the deal */
                long_description?: string | null;
                [key: string]: unknown;
              } | null;
              /** UUIDs of firm investors participating in this deal. Angels are surfaced separately in `angel_investor_ids`. */
              investors?: Array<string>;
              /** UUIDs of angel investors (people) on this latest deal. Resolve via `/people/{id}`. Empty array when no angels. */
              angel_investor_ids?: Array<string>;
              /** Individual financing tranches in this deal */
              financings?: Array<{
                /**
                 * Unique identifier for the financing
                 * @format uuid
                 */
                id?: string;
                /** Type of financing */
                type?: string;
                /** Financing amount in USD */
                size_usd?: number | null;
                /** Financing amount in native currency */
                size_native?: number | null;
                /** Currency code for size_native */
                currency?: string | null;
                [key: string]: unknown;
              }>;
              /** Related articles/sources for the latest deal. Always included; empty when no sources exist. */
              articles?: Array<Record<string, unknown>>;
              [key: string]: unknown;
            } | null;
            /** UUIDs of all parent investors across all funding rounds for this company */
            all_investor_ids?: Array<string> | null;
            /** Semantic similarity score (0-1). Only present when using search_query parameter. */
            similarity?: number | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint when a company is already identified and its complete funding history is required. Prefer a domain or LinkedIn URL when available; it can be passed directly without first calling `/company/search`. */
    "fundable.get_company_deals": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** Deals values. */
          deals?: Array<{
            /**
             * Unique Fundable record identifier.
             * @format uuid
             */
            id?: string;
            /** Round type. */
            round_type?: string | null;
            /** Whether to filter for extension rounds. */
            extension?: boolean | null;
            /** Intermediate. */
            intermediate?: string | null;
            /** Whether to filter for pre-round financing. */
            pre?: boolean | null;
            /**
             * Date.
             * @format date-time
             */
            date?: string | null;
            /**
             * Created at.
             * @format date-time
             */
            created_at?: string | null;
            /** Total round raised. */
            total_round_raised?: number | null;
            /** deal descriptions details. */
            deal_descriptions?: Record<string, unknown> | null;
            /**
             * Company id.
             * @format uuid
             */
            company_id?: string;
            /** UUIDs of firm investors participating in this deal. Angels are surfaced separately in `angel_investor_ids`. */
            investor_ids?: Array<string>;
            /** UUIDs of angel investors (people) on this deal. Resolve via `/people/{id}`. Empty array when no angels. */
            angel_investor_ids?: Array<string>;
            /** Financings values. */
            financings?: Array<Record<string, unknown>>;
            /** valuation details. */
            valuation?: Record<string, unknown> | null;
            /** Related articles/sources for this deal. Always included; empty when no sources exist. */
            articles?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint when a deal UUID is already known and full details for that one funding round are required. The response identifies related entities by ID rather than embedding their full profiles. Use `GET /company?id=...` for company metadata and `GET /deals/{id}/investors` for the complete investor lineup. */
    "fundable.get_deal_by_id": {
      input: {
        /**
         * Unique identifier for the deal (UUID format)
         * @minLength 1
         * @format uuid
         */
        id: string;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** Deal details. */
          deal?: {
            /**
             * Unique identifier for the deal
             * @format uuid
             */
            id?: string;
            /** Type of funding round */
            round_type?: "SERIES_A" | "SERIES_B" | "SERIES_C" | "SERIES_D" | "SERIES_E" | "SERIES_F" | "SERIES_G" | "SERIES_H" | "SERIES_I" | "SERIES_J" | "SERIES_K" | "SERIES_L" | "SERIES_M" | "SEED" | "SAFE" | "CONVERTIBLE_NOTE" | "EQUITY" | "PREFERRED" | "SECONDARY_MARKET" | "DEBT_FINANCING" | "GRANT" | "NON_EQUITY_ASSISTANCE" | "CROWDFUNDING" | "INITIAL_COIN_OFFERING" | "FUNDING_ROUND" | null;
            /** Whether this is an extension round */
            extension?: boolean | null;
            /** Intermediate round designation */
            intermediate?: "PLUS" | "NONE" | "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE" | "SIX" | "SEVEN" | "EIGHT" | null;
            /** Whether this is a pre-round (e.g., Pre-Series A) */
            pre?: boolean | null;
            /**
             * Announcement date of the funding round
             * @format date-time
             */
            date?: string | null;
            /**
             * Date the deal was added to the system
             * @format date-time
             */
            created_at?: string | null;
            /** Total amount raised in the round (USD) */
            total_round_raised?: number | null;
            /** deal descriptions details. */
            deal_descriptions?: Record<string, unknown> | null;
            /**
             * Unique identifier for the company
             * @format uuid
             */
            company_id?: string;
            /** UUIDs of firm investors participating in this deal. Angels are surfaced separately in `angel_investor_ids`. */
            investor_ids?: Array<string>;
            /** UUIDs of angel investors (people) who participated in this deal. Resolve via `/people/{id}`. Empty array when no angels. */
            angel_investor_ids?: Array<string>;
            /** Detailed financing information for deals that have multiple financing types */
            financings?: Array<Record<string, unknown>>;
            /** Valuation information for this deal */
            valuation?: Record<string, unknown> | null;
            /**
             * Related articles/sources for this deal.
             * Always included for every API tier. Empty when the deal has no related sources.
             */
            articles?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint after identifying a deal when investor IDs in the deal record need to be resolved into the complete investor lineup. It returns firm investors, associated people, angel investors, lead status, and profile links for one deal. */
    "fundable.get_deal_investors": {
      input: {
        /**
         * Unique identifier for the deal (UUID format)
         * @minLength 1
         * @format uuid
         */
        id: string;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** Firm investors on this deal. Angels are surfaced separately in `angel_investors`. */
          investors?: Array<{
            /**
             * Unique identifier for the firm investor (parent_investor UUID)
             * @format uuid
             */
            id?: string;
            /** Investor name */
            name?: string;
            /** Whether this investor led the round */
            lead_investor?: boolean | null;
            /** Key personnel (partners) at this firm involved in this deal. Each entry is a person record joinable to /people/{id}. */
            personnel?: Array<Record<string, unknown>>;
            /** The financing type this investor participated in */
            financing_type?: string | null;
            /** Investor's website domain */
            domain?: string | null;
            /** Investor's LinkedIn URL */
            linkedin?: string | null;
            /** Investor's Crunchbase URL */
            crunchbase?: string | null;
            [key: string]: unknown;
          }>;
          /** Angel investors (individuals) on this deal. Empty array when no angels. */
          angel_investors?: Array<{
            /**
             * Person UUID for the angel. Resolves via /people/{id}.
             * @format uuid
             */
            id?: string;
            /** Display name of the record. */
            name?: string | null;
            /** The financing type this angel participated in. */
            financing_type?: string | null;
            /** Linkedin. */
            linkedin?: string | null;
            /** Crunchbase. */
            crunchbase?: string | null;
            /** Twitter. */
            twitter?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint when one investor firm is already identified and its full profile, statistics, and portfolio summary are required. Prefer a domain or LinkedIn URL when available; it can be passed directly without calling `/investor/search` first. */
    "fundable.get_investor_by_identifier": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** Full investor profile */
          investor?: {
            /**
             * Unique identifier for the investor
             * @format uuid
             */
            id?: string;
            /** Investor name */
            name?: string;
            /** Total number of deals */
            total_deal_count?: number;
            /** Number of deals where investor was lead */
            lead_deal_count?: number;
            /** Deals in the last 12 months */
            deal_count_last_12_months?: number;
            /** Lead deals in the last 12 months */
            lead_deal_count_last_12_months?: number;
            /**
             * Date of the most recent deal
             * @format date-time
             */
            most_recent_deal_date?: string | null;
            /** Fundable permalink for the investor */
            guru_permalink?: string;
            /** Investor domain */
            domain?: string | null;
            /**
             * Investor website URL
             * @format uri
             */
            website?: string | null;
            /**
             * Investor LinkedIn URL
             * @format uri
             */
            linkedin?: string | null;
            /**
             * Investor PitchBook URL
             * @format uri
             */
            pitchbook?: string | null;
            /**
             * Investor Crunchbase URL
             * @format uri
             */
            crunchbase?: string | null;
            /** Description of the investor */
            description?: string | null;
            /** Legal name of the investor */
            legal_name?: string | null;
            /** Employee count range */
            num_employees?: string | null;
            /** Investment stage focus */
            investment_stage?: string | null;
            /**
             * Contact email (when available)
             * @format email
             */
            contact_email?: string | null;
            /** Contact phone number (when available) */
            contact_phone?: string | null;
            /** location details. */
            location?: Record<string, unknown>;
            /** Top industries invested in */
            top_industries?: Array<Record<string, unknown>>;
            /** Top portfolio company locations */
            top_locations?: Array<Record<string, unknown>>;
            /** Most common round types */
            top_round_types?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint when an investor firm is already identified and its complete deal history is required. Prefer a domain or LinkedIn URL when available; it can be passed directly without calling `/investor/search` first. */
    "fundable.get_investor_deals": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** Deals values. */
          deals?: Array<{
            /**
             * Unique Fundable record identifier.
             * @format uuid
             */
            id?: string;
            /** Round type. */
            round_type?: string | null;
            /** Whether to filter for extension rounds. */
            extension?: boolean | null;
            /** Intermediate. */
            intermediate?: string | null;
            /** Whether to filter for pre-round financing. */
            pre?: boolean | null;
            /**
             * Date.
             * @format date-time
             */
            date?: string | null;
            /**
             * Created at.
             * @format date-time
             */
            created_at?: string | null;
            /** Total round raised. */
            total_round_raised?: number | null;
            /** deal descriptions details. */
            deal_descriptions?: Record<string, unknown> | null;
            /**
             * Company id.
             * @format uuid
             */
            company_id?: string;
            /** UUIDs of firm investors participating in this deal. Angels are surfaced separately in `angel_investor_ids`. */
            investor_ids?: Array<string>;
            /** UUIDs of angel investors (people) on this deal. Resolve via `/people/{id}`. Empty array when no angels. */
            angel_investor_ids?: Array<string>;
            /** Financings values. */
            financings?: Array<Record<string, unknown>>;
            /** valuation details. */
            valuation?: Record<string, unknown> | null;
            /** Related articles/sources for this deal. Always included; empty when no sources exist. */
            articles?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint when one person is already identified and their full profile is required. Prefer a LinkedIn URL when available; it can be passed directly without calling `/person/search` first. */
    "fundable.get_person": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** PersonDetail details. */
          person?: {
            /**
             * Unique Fundable record identifier.
             * @format uuid
             */
            id?: string;
            /** Display name of the record. */
            name?: string | null;
            /** Current job title */
            title?: string | null;
            /**
             * Canonical LinkedIn person URL
             * @format uri
             */
            linkedin_url?: string | null;
            /**
             * Canonical Crunchbase person URL
             * @format uri
             */
            crunchbase_url?: string | null;
            /**
             * Canonical Twitter/X profile URL
             * @format uri
             */
            twitter_url?: string | null;
            /** Location. */
            location?: string | null;
            /** City. */
            city?: string | null;
            /** Country code. */
            country_code?: string | null;
            /** LinkedIn bio/about section */
            about?: string | null;
            /** Is founder. */
            is_founder?: boolean;
            /** Current employer summary. Null when the person has no current employer. */
            current_company?: {
              /**
               * Fundable company UUID.
               * @format uuid
               */
              id?: string;
              /** Current employer name. */
              name?: string | null;
              /** Fundable permalink for the company */
              permalink?: string | null;
              /** Current employer domain. */
              domain?: string | null;
              [key: string]: unknown;
            } | null;
            /** Full employment history (no item cap) */
            employment_history?: Array<Record<string, unknown>>;
            /** Full education history (no item cap) */
            education_history?: Array<Record<string, unknown>>;
            /** Whether the person has any tracked investment activity */
            is_investor?: boolean;
            /** Whether the person makes angel investments */
            is_angel?: boolean;
            /** Whether the person has ever led a deal */
            has_led_deal?: boolean;
            /** Firms the person invests under (empty for pure angels) */
            investment_firms?: Array<Record<string, unknown>>;
            /** Aggregated investor activity. Null when `is_investor` is false. */
            investor_highlights?: Record<string, unknown> | null;
            /** Count of deals matching the `investor.deals.*` filters. Populated only when any `investor.deals.*` filter is present; otherwise null. */
            filtered_deal_count?: number | null;
            /** Of the matching deals, how many the person/firm led. Populated only when any `investor.deals.*` filter is present. */
            filtered_lead_count?: number | null;
            /**
             * Most recent matching-deal date. Populated only when any `investor.deals.*` filter is present.
             * @format date
             */
            filtered_most_recent_date?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint when a person is already identified and their investment history is required. It returns deals the person joined as an angel plus lead or firm deals. Prefer a LinkedIn URL when available; it can be passed directly without first calling `/person/search`. */
    "fundable.get_person_deals": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** Deals values. */
          deals?: Array<{
            /**
             * Unique Fundable record identifier.
             * @format uuid
             */
            id?: string;
            /** Round type. */
            round_type?: string | null;
            /** Whether to filter for extension rounds. */
            extension?: boolean | null;
            /** Intermediate. */
            intermediate?: string | null;
            /** Whether to filter for pre-round financing. */
            pre?: boolean | null;
            /**
             * Date.
             * @format date-time
             */
            date?: string | null;
            /**
             * Created at.
             * @format date-time
             */
            created_at?: string | null;
            /** Total round raised. */
            total_round_raised?: number | null;
            /** deal descriptions details. */
            deal_descriptions?: Record<string, unknown> | null;
            /**
             * Company id.
             * @format uuid
             */
            company_id?: string;
            /** UUIDs of firm investors participating in this deal. Angels are surfaced separately in `angel_investor_ids`. */
            investor_ids?: Array<string>;
            /** UUIDs of angel investors (people) on this deal. Resolve via `/people/{id}`. Empty array when no angels. */
            angel_investor_ids?: Array<string>;
            /** Financings values. */
            financings?: Array<Record<string, unknown>>;
            /** valuation details. */
            valuation?: Record<string, unknown> | null;
            /** Related articles/sources for this deal. Always included; empty when no sources exist. */
            articles?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint only when a verified email is explicitly required for an identified person. Return a verified email for a person identified by UUID, LinkedIn, Crunchbase, or Twitter/X. Provide one identifier. If multiple identifiers are supplied, the endpoint uses the first non-empty value in this order: `id`, `linkedin`, `crunchbase`, `twitter`. Unlocks contact information for the account; new unlocks cost 5 credits and repeats cost 0. Requires non-trial Pro+, Enterprise, or API plan. */
    "fundable.get_person_email": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /**
           * Fundable person UUID.
           * @format uuid
           */
          person_id?: string;
          /**
           * Verified email address.
           * @format email
           */
          email?: string;
          /** True when this user previously unlocked the same email. */
          already_unlocked?: boolean;
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint only when a verified phone number is explicitly required for an identified person. Return a verified phone number for a person identified by UUID, LinkedIn, Crunchbase, or Twitter/X. Provide one identifier. If multiple identifiers are supplied, the endpoint uses the first non-empty value in this order: `id`, `linkedin`, `crunchbase`, `twitter`. Unlocks contact information for the account; new unlocks cost 5 credits and repeats cost 0. Requires non-trial Pro+, Enterprise, or API plan. */
    "fundable.get_person_phone": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /**
           * Fundable person UUID.
           * @format uuid
           */
          person_id?: string;
          /** Phone number in E.164 format. */
          phone?: string;
          /** True when this account previously unlocked the same phone number. */
          already_unlocked?: boolean;
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint when the requested result is a list of investor firms. Filters under `company_investments` identify qualifying portfolio companies and deals, then return the firms that participated in those deals. For example, use this route to find San Francisco-based investors that participated in a Seed round during the last year. */
    "fundable.list_investors": {
      input: {
        /** Investor lookup filters (OR'd together) */
        identifiers?: {
          /** Investor UUIDs */
          ids?: Array<string>;
          /**
           * Investor domains (max 100)
           * @maxItems 100
           */
          domains?: Array<string>;
          /**
           * Investor LinkedIn URLs (max 100)
           * @maxItems 100
           */
          linkedin_urls?: Array<string>;
          /**
           * Investor Crunchbase URLs (max 100)
           * @maxItems 100
           */
          crunchbase_urls?: Array<string>;
        };
        /** Investor entity-level filters */
        investor?: {
          /** Investor HQ location permalinks. Use /location/search to find permalinks. A value that is not an exact permalink is silently ignored (returns zero results, no error). */
          locations?: Array<string>;
          /** Investor firm employee count ranges */
          employee_count?: Array<"1-10" | "11-50" | "51-100" | "101-250" | "251-500" | "501-1000" | "1001-5000" | "5001-10000" | "10001+">;
        };
        /** Portfolio filters (filter by companies the investor has invested in) */
        company_investments?: {
          /** Portfolio company UUIDs */
          company_ids?: Array<string>;
          /**
           * AI-powered semantic search matched against each investor's
           * portfolio companies — a flexible replacement for an industry tag.
           * First use /industry/search and apply an `industries` or
           * `super_categories` filter when the taxonomy contains the intended
           * category. Use semantic search only for a niche industry or specific
           * product type the taxonomy cannot express, describing what those
           * companies do — their product, technology, or business model (e.g.
           * "climate-focused carbon capture hardware"). Do NOT use it for other
           * attributes like stage, location, or funding — apply those with the
           * dedicated `company_investments` and `investor` filter fields instead.
           * Results are ranked by portfolio relevance and capped at 150 semantic
           * matches.
           * @minLength 1
           */
          search_query?: string;
          /**
           * Minimum relevance score threshold (0–1) for the portfolio-based
           * semantic search. Only applies when `search_query` is provided.
           * Investors whose portfolio match score falls below this threshold
           * are excluded. Defaults to 0 (return all results).
           * @minimum 0
           * @maximum 1
           */
          min_relevance?: number;
          /** Portfolio company location permalinks. Use /location/search to find permalinks. A value that is not an exact permalink is silently ignored (returns zero results, no error). */
          locations?: Array<string>;
          /** Portfolio company industry permalinks. Use /industry/search to find permalinks. A value that is not an exact permalink is silently ignored (returns zero results, no error). */
          industries?: Array<string>;
          /** Broad industry super-category permalinks. Use /industry/search to find permalinks. A value that is not an exact permalink is silently ignored (returns zero results, no error). */
          super_categories?: Array<string>;
          /** Portfolio company employee count ranges */
          employee_count?: Array<"1-10" | "11-50" | "51-100" | "101-250" | "251-500" | "501-1000" | "1001-5000" | "5001-10000" | "10001+">;
          /** Portfolio company IPO status */
          ipo_status?: Array<"public" | "private">;
          /**
           * Minimum total raised by portfolio companies (USD)
           * @minimum 0
           */
          total_raised_min?: number;
          /**
           * Maximum total raised by portfolio companies (USD)
           * @minimum 0
           */
          total_raised_max?: number;
          /** Financing types with optional modifiers (pre, extension) */
          financing_types?: Array<{
            /** Financing type. */
            type: "SERIES_A" | "SERIES_B" | "SERIES_C" | "SERIES_D" | "SERIES_E" | "SERIES_F" | "SERIES_G" | "SERIES_H" | "SERIES_I" | "SERIES_J" | "SERIES_K" | "SERIES_L" | "SERIES_M" | "SEED" | "SAFE" | "CONVERTIBLE_NOTE" | "EQUITY" | "PREFERRED" | "SECONDARY_MARKET" | "DEBT_FINANCING" | "GRANT" | "NON_EQUITY_ASSISTANCE" | "CROWDFUNDING" | "INITIAL_COIN_OFFERING" | "FUNDING_ROUND";
            /**
             * Pre-round modifier (e.g., Pre-Seed, Pre-Series A)
             * @default false
             */
            pre?: boolean;
            /**
             * Extension round modifier
             * @default false
             */
            extension?: boolean;
          }>;
          /**
           * Minimum deal size (USD)
           * @minimum 0
           */
          deal_size_min?: number;
          /**
           * Maximum deal size (USD)
           * @minimum 0
           */
          deal_size_max?: number;
          /**
           * Filter deals on or after this date (ISO 8601)
           * @minLength 1
           * @format date
           */
          deal_start_date?: string;
          /**
           * Filter deals on or before this date (ISO 8601)
           * @minLength 1
           * @format date
           */
          deal_end_date?: string;
          /**
           * When true, only count deals where investor was lead
           * @default false
           */
          only_lead_deals?: boolean;
          /**
           * Minimum number of deals matching the portfolio filters
           * @minimum 1
           */
          min_matching_deals?: number;
        };
        /**
         * Page number (0-based)
         * @minimum 0
         * @default 0
         */
        page?: number;
        /**
         * Number of results per page (max 500)
         * @minimum 1
         * @maximum 500
         * @default 10
         */
        page_size?: number;
        /**
         * Sort order for results.
         * - **most_recent_deal** — Date of most recent investment (newest first)
         * - **recent_deals** — Deals in last 12 months (highest first)
         * - **deals_led_ltm** — Lead deals in last 12 months (highest first)
         * - **total_deals** — All-time deal count (highest first)
         * - **matching_deals** — Deals matching portfolio filters (highest first)
         * @default "most_recent_deal"
         */
        sort_by?: "most_recent_deal" | "recent_deals" | "deals_led_ltm" | "total_deals" | "matching_deals";
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** Investors values. */
          investors?: Array<{
            /**
             * Unique identifier for the investor
             * @format uuid
             */
            id?: string;
            /** Investor name */
            name?: string;
            /** Total number of deals */
            total_deal_count?: number;
            /** Number of deals where investor was lead */
            lead_deal_count?: number;
            /** Deals in the last 12 months */
            deal_count_last_12_months?: number;
            /** Lead deals in the last 12 months */
            lead_deal_count_last_12_months?: number;
            /**
             * Date of the most recent deal
             * @format date-time
             */
            most_recent_deal_date?: string | null;
            /** Fundable permalink for the investor */
            guru_permalink?: string;
            /** Investor domain */
            domain?: string | null;
            /**
             * Investor website URL
             * @format uri
             */
            website?: string | null;
            /**
             * Investor LinkedIn URL
             * @format uri
             */
            linkedin?: string | null;
            /**
             * Investor PitchBook URL
             * @format uri
             */
            pitchbook?: string | null;
            /**
             * Investor Crunchbase URL
             * @format uri
             */
            crunchbase?: string | null;
            /** Description of the investor */
            description?: string | null;
            /** Legal name of the investor */
            legal_name?: string | null;
            /** Employee count range */
            num_employees?: string | null;
            /** Investment stage focus */
            investment_stage?: string | null;
            /**
             * Contact email (when available)
             * @format email
             */
            contact_email?: string | null;
            /** Contact phone number (when available) */
            contact_phone?: string | null;
            /** location details. */
            location?: Record<string, unknown>;
            /** Top industries invested in */
            top_industries?: Array<Record<string, unknown>>;
            /** Top portfolio company locations */
            top_locations?: Array<Record<string, unknown>>;
            /** Most common round types */
            top_round_types?: Array<Record<string, unknown>>;
            /** Number of deals matching the active `company_investments` filters */
            filtered_deal_count?: number | null;
            /** Of the deals matching the active `company_investments` filters, how many the investor led */
            filtered_lead_count?: number | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint by default for company sourcing and discovery. It returns company metadata such as name and domain together with the full details of each company's latest funding round. */
    "fundable.search_companies": {
      input: {
        /** Look up specific companies by identifier */
        identifiers?: {
          /** Company UUIDs */
          ids?: Array<string>;
          /**
           * Company domains (max 100)
           * @maxItems 100
           */
          domains?: Array<string>;
          /**
           * LinkedIn company URLs (max 100)
           * @maxItems 100
           */
          linkedin_urls?: Array<string>;
          /**
           * Crunchbase organization URLs (max 100)
           * @maxItems 100
           */
          crunchbase_urls?: Array<string>;
        };
        /** Company attribute filters */
        company?: {
          /**
           * AI-powered semantic search — a flexible replacement for an industry tag. First use /industry/search and apply an `industries` or `super_categories` filter when the taxonomy contains the intended category. Use semantic search only for a niche industry or specific product type the taxonomy cannot express, describing what the company does — its product, technology, or business model (e.g. "AI-powered medical imaging diagnostics" or "vertical SaaS for dental practices"). Do NOT use it for other attributes like stage, location, funding, or employee count — apply those with the dedicated filter fields instead. Results include a similarity score, are sorted by relevance, and are capped at 150 semantic matches.
           * @minLength 1
           */
          search_query?: string;
          /**
           * Minimum similarity threshold (0-1). Only applies with search_query.
           * @minimum 0
           * @maximum 1
           */
          min_relevance?: number;
          /** Location permalinks. Use /location/search to find permalinks. A value that is not an exact permalink is silently ignored (returns zero results, no error). */
          locations?: Array<string>;
          /** Industry permalinks. Use /industry/search to find permalinks. A value that is not an exact permalink is silently ignored (returns zero results, no error). */
          industries?: Array<string>;
          /** Super category permalinks (automatically includes related industries). Use /industry/search to find permalinks. A value that is not an exact permalink is silently ignored (returns zero results, no error). */
          super_categories?: Array<string>;
          /** Employee count ranges. Valid: 1-10, 11-50, 51-100, 101-250, 251-500, 501-1000, 1001-5000, 5001-10000, 10001+ */
          employee_count?: Array<"1-10" | "11-50" | "51-100" | "101-250" | "251-500" | "501-1000" | "1001-5000" | "5001-10000" | "10001+">;
          /** IPO status filter. Valid: public, private */
          ipo_status?: Array<"public" | "private">;
          /**
           * Minimum total raised (USD)
           * @minimum 0
           */
          total_raised_min?: number;
          /**
           * Maximum total raised (USD)
           * @minimum 0
           */
          total_raised_max?: number;
        };
        /** Latest funding round filters */
        latest_deal?: {
          /** Financing types with optional modifiers (pre, extension) */
          financing_types?: Array<{
            /** Financing type. */
            type: "SERIES_A" | "SERIES_B" | "SERIES_C" | "SERIES_D" | "SERIES_E" | "SERIES_F" | "SERIES_G" | "SERIES_H" | "SERIES_I" | "SERIES_J" | "SERIES_K" | "SERIES_L" | "SERIES_M" | "SEED" | "SAFE" | "CONVERTIBLE_NOTE" | "EQUITY" | "PREFERRED" | "SECONDARY_MARKET" | "DEBT_FINANCING" | "GRANT" | "NON_EQUITY_ASSISTANCE" | "CROWDFUNDING" | "INITIAL_COIN_OFFERING" | "FUNDING_ROUND";
            /**
             * Pre-round modifier (e.g., Pre-Seed, Pre-Series A)
             * @default false
             */
            pre?: boolean;
            /**
             * Extension round modifier
             * @default false
             */
            extension?: boolean;
          }>;
          /**
           * Minimum deal size (USD)
           * @minimum 0
           */
          size_min?: number;
          /**
           * Maximum deal size (USD)
           * @minimum 0
           */
          size_max?: number;
          /**
           * Latest deal after this date (ISO 8601)
           * @minLength 1
           * @format date
           */
          date_start?: string;
          /**
           * Latest deal before this date (ISO 8601)
           * @minLength 1
           * @format date
           */
          date_end?: string;
          /**
           * Latest deal record added to the system on or after this date (ISO 8601). Filters by ingestion date (`created_at`), not the announcement date — useful for finding rounds newly added to Fundable.
           * @minLength 1
           * @format date
           */
          created_start?: string;
          /**
           * Latest deal record added to the system on or before this date (ISO 8601). Filters by ingestion date (`created_at`), not the announcement date.
           * @minLength 1
           * @format date
           */
          created_end?: string;
          /** Filter by investors who participated in the latest deal only */
          investor_ids?: Array<string>;
        };
        /** Filter by investors (firms or people) across all funding rounds */
        investors?: {
          /** Investor UUIDs — matches companies where these investors participated in any round ever */
          investor_ids?: Array<string>;
          /**
           * Person UUIDs — matches companies where any of these people participated in any round
           * as an **angel investor** OR as a **lead partner** of an investing firm.
           * Resolve via `/people/{id}`.
           */
          people_ids?: Array<string>;
        };
        /**
         * Page number (0-based)
         * @minimum 0
         * @default 0
         */
        page?: number;
        /**
         * Number of results per page
         * @minimum 1
         * @maximum 500
         * @default 10
         */
        page_size?: number;
        /**
         * Sort order. Ignored when search_query is provided (sorted by relevance).
         * @default "most_recent_raise"
         */
        sort_by?: "most_recent_raise" | "oldest_raise" | "most_recent_founded" | "oldest_founded" | "largest_valuation" | "smallest_valuation" | "largest_total_raise" | "smallest_total_raise" | "most_funding_rounds" | "most_investors";
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** Companies values. */
          companies?: Array<{
            /**
             * Unique identifier for the company
             * @format uuid
             */
            id?: string;
            /** Company name */
            name?: string | null;
            /** Legal name of the company */
            legal_name?: string | null;
            /** Fundable permalink for the company */
            guru_permalink?: string | null;
            /** Company website domain */
            domain?: string | null;
            /** Company region */
            region?: string | null;
            /** Current operating status of the company */
            operating_status?: string | null;
            /**
             * Date and time the company was founded
             * @format date-time
             */
            founded_date?: string | null;
            /** Whether the company has been acquired */
            acquired?: boolean | null;
            /** Brief description of the company */
            short_description?: string | null;
            /** Full description of the company. Available on /company endpoint; may be null on /companies list endpoint. */
            long_description?: string | null;
            /** Number of employees range */
            num_employees?: string | null;
            /**
             * LinkedIn profile URL
             * @format uri
             */
            linkedin?: string | null;
            /**
             * Twitter profile URL
             * @format uri
             */
            twitter?: string | null;
            /**
             * Facebook profile URL
             * @format uri
             */
            facebook?: string | null;
            /**
             * PitchBook profile URL
             * @format uri
             */
            pitchbook?: string | null;
            /**
             * Crunchbase profile URL
             * @format uri
             */
            crunchbase?: string | null;
            /** Company address */
            address?: string | null;
            /** IPO status of the company */
            ipo_status?: "public" | "private" | null;
            /** Number of funding rounds */
            num_funding_rounds?: number | null;
            /** Number of investors */
            num_investors?: number | null;
            /** Total amount raised (USD) */
            total_raised?: number | null;
            /** Latest valuation (USD) */
            latest_valuation_usd?: number | null;
            /**
             * Date of latest valuation
             * @format date-time
             */
            latest_valuation_date?: string | null;
            /** Industries the company operates in */
            industries?: Array<Record<string, unknown>>;
            /** Company location hierarchy */
            location?: Record<string, unknown>;
            /** Details of the company's most recent funding round */
            latest_deal?: {
              /**
               * Unique identifier for the deal
               * @format uuid
               */
              id?: string | null;
              /** Type of funding round */
              type?: string | null;
              /** Total amount raised in the round (USD) */
              total_round_raised?: number | null;
              /**
               * Date of the funding round
               * @format date-time
               */
              date?: string | null;
              /** Whether this is an extension round */
              extension?: boolean | null;
              /** Whether this is a pre-round (e.g., Pre-Series A) */
              pre?: boolean | null;
              /** Intermediate round designation */
              intermediate?: string | null;
              /** Descriptions of the latest funding round. */
              description?: {
                /** Brief description of the deal */
                short_description?: string | null;
                /** Detailed description of the deal */
                long_description?: string | null;
                [key: string]: unknown;
              } | null;
              /** UUIDs of firm investors participating in this deal. Angels are surfaced separately in `angel_investor_ids`. */
              investors?: Array<string>;
              /** UUIDs of angel investors (people) on this latest deal. Resolve via `/people/{id}`. Empty array when no angels. */
              angel_investor_ids?: Array<string>;
              /** Individual financing tranches in this deal */
              financings?: Array<{
                /**
                 * Unique identifier for the financing
                 * @format uuid
                 */
                id?: string;
                /** Type of financing */
                type?: string;
                /** Financing amount in USD */
                size_usd?: number | null;
                /** Financing amount in native currency */
                size_native?: number | null;
                /** Currency code for size_native */
                currency?: string | null;
                [key: string]: unknown;
              }>;
              /** Related articles/sources for the latest deal. Always included; empty when no sources exist. */
              articles?: Array<Record<string, unknown>>;
              [key: string]: unknown;
            } | null;
            /** UUIDs of all parent investors across all funding rounds for this company */
            all_investor_ids?: Array<string> | null;
            /** Semantic similarity score (0-1). Only present when using search_query parameter. */
            similarity?: number | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint primarily to resolve a fuzzy company name or an uncertain identifier into matching company records. If a reliable domain or LinkedIn URL is already available, skip this search and pass it directly to `GET /company` for one full profile or to `POST /companies` for a batch lookup. */
    "fundable.search_company": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** Companies values. */
          companies?: Array<{
            /**
             * Unique identifier for the company
             * @format uuid
             */
            id?: string;
            /** Fundable permalink for the company */
            guru_permalink?: string | null;
            /** Company name */
            name?: string;
            /** Brief description of the company */
            short_description?: string | null;
            /** Search relevance score (0-1) */
            relevance_score?: number;
            /** Company website domain */
            domain?: string | null;
            /** LinkedIn profile URL */
            linkedin?: string | null;
            /** Crunchbase profile URL */
            crunchbase?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint when the requested result is a set of funding rounds, or when deal criteria must match any historical round rather than only each company's latest round. It supports round-level analysis across the full deal history. */
    "fundable.search_deals": {
      input: {
        /** Look up specific deals by identifier */
        identifiers?: {
          /** Deal UUIDs */
          deal_ids?: Array<string>;
        };
        /** Deal attribute filters */
        deal?: {
          /** Financing types with optional modifiers (pre, extension) */
          financing_types?: Array<{
            /** Financing type. */
            type: "SERIES_A" | "SERIES_B" | "SERIES_C" | "SERIES_D" | "SERIES_E" | "SERIES_F" | "SERIES_G" | "SERIES_H" | "SERIES_I" | "SERIES_J" | "SERIES_K" | "SERIES_L" | "SERIES_M" | "SEED" | "SAFE" | "CONVERTIBLE_NOTE" | "EQUITY" | "PREFERRED" | "SECONDARY_MARKET" | "DEBT_FINANCING" | "GRANT" | "NON_EQUITY_ASSISTANCE" | "CROWDFUNDING" | "INITIAL_COIN_OFFERING" | "FUNDING_ROUND";
            /**
             * Pre-round modifier (e.g., Pre-Seed, Pre-Series A)
             * @default false
             */
            pre?: boolean;
            /**
             * Extension round modifier
             * @default false
             */
            extension?: boolean;
          }>;
          /**
           * Minimum deal size (USD)
           * @minimum 0
           */
          size_min?: number;
          /**
           * Maximum deal size (USD)
           * @minimum 0
           */
          size_max?: number;
          /**
           * Filter deals announced after this date (ISO 8601)
           * @minLength 1
           * @format date
           */
          date_start?: string;
          /**
           * Filter deals announced before this date (ISO 8601)
           * @minLength 1
           * @format date
           */
          date_end?: string;
          /**
           * Filter deals added to the system after this date (ISO 8601)
           * @minLength 1
           * @format date
           */
          created_start?: string;
          /**
           * Filter deals added to the system before this date (ISO 8601)
           * @minLength 1
           * @format date
           */
          created_end?: string;
        };
        /** Company attribute filters */
        company?: {
          /** Company UUIDs - filter deals by specific companies */
          company_ids?: Array<string>;
          /** Location permalinks. Use /location/search to find permalinks. A value that is not an exact permalink is silently ignored (returns zero results, no error). */
          locations?: Array<string>;
          /** Industry permalinks. Use /industry/search to find permalinks. A value that is not an exact permalink is silently ignored (returns zero results, no error). */
          industries?: Array<string>;
          /** Super category permalinks (automatically includes related industries). Use /industry/search to find permalinks. A value that is not an exact permalink is silently ignored (returns zero results, no error). */
          super_categories?: Array<string>;
          /** Employee count ranges. Valid: 1-10, 11-50, 51-100, 101-250, 251-500, 501-1000, 1001-5000, 5001-10000, 10001+ */
          employee_count?: Array<"1-10" | "11-50" | "51-100" | "101-250" | "251-500" | "501-1000" | "1001-5000" | "5001-10000" | "10001+">;
          /** IPO status filter. Valid: public, private */
          ipo_status?: Array<"public" | "private">;
          /**
           * Minimum total raised (USD)
           * @minimum 0
           */
          total_raised_min?: number;
          /**
           * Maximum total raised (USD)
           * @minimum 0
           */
          total_raised_max?: number;
        };
        /** Filter by investor participation (firms or people) */
        investors?: {
          /** Investor UUIDs (firms) */
          investor_ids?: Array<string>;
          /**
           * Person UUIDs — matches deals where any of these people participated as an
           * **angel investor** OR as a **lead partner** of an investing firm.
           * Resolve via `/people/{id}`.
           */
          people_ids?: Array<string>;
        };
        /**
         * Page number (0-based)
         * @minimum 0
         * @default 0
         */
        page?: number;
        /**
         * Number of results per page
         * @minimum 1
         * @maximum 500
         * @default 10
         */
        page_size?: number;
        /**
         * Sort order for results
         * @default "most_recent_deal"
         */
        sort_by?: "most_recent_deal" | "oldest_deal" | "largest_raise" | "smallest_raise";
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** Deals values. */
          deals?: Array<{
            /**
             * Unique identifier for the deal
             * @format uuid
             */
            id?: string;
            /** Type of funding round */
            round_type?: "SERIES_A" | "SERIES_B" | "SERIES_C" | "SERIES_D" | "SERIES_E" | "SERIES_F" | "SERIES_G" | "SERIES_H" | "SERIES_I" | "SERIES_J" | "SERIES_K" | "SERIES_L" | "SERIES_M" | "SEED" | "SAFE" | "CONVERTIBLE_NOTE" | "EQUITY" | "PREFERRED" | "SECONDARY_MARKET" | "DEBT_FINANCING" | "GRANT" | "NON_EQUITY_ASSISTANCE" | "CROWDFUNDING" | "INITIAL_COIN_OFFERING" | "FUNDING_ROUND" | null;
            /** Whether this is an extension round */
            extension?: boolean | null;
            /** Intermediate round designation */
            intermediate?: "PLUS" | "NONE" | "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE" | "SIX" | "SEVEN" | "EIGHT" | null;
            /** Whether this is a pre-round (e.g., Pre-Series A) */
            pre?: boolean | null;
            /**
             * Announcement date of the funding round
             * @format date-time
             */
            date?: string | null;
            /**
             * Date the deal was added to the system
             * @format date-time
             */
            created_at?: string | null;
            /** Total amount raised in the round (USD) */
            total_round_raised?: number | null;
            /** deal descriptions details. */
            deal_descriptions?: Record<string, unknown> | null;
            /**
             * Unique identifier for the company
             * @format uuid
             */
            company_id?: string;
            /** UUIDs of firm investors participating in this deal. Angels are surfaced separately in `angel_investor_ids`. */
            investor_ids?: Array<string>;
            /** UUIDs of angel investors (people) who participated in this deal. Resolve via `/people/{id}`. Empty array when no angels. */
            angel_investor_ids?: Array<string>;
            /** Detailed financing information for deals that have multiple financing types */
            financings?: Array<Record<string, unknown>>;
            /** Valuation information for this deal */
            valuation?: Record<string, unknown> | null;
            /**
             * Related articles/sources for this deal.
             * Always included for every API tier. Empty when the deal has no related sources.
             */
            articles?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint before semantic search to resolve a human-readable category into an exact `INDUSTRY` or `SUPER_CATEGORY` permalink. Agents should not guess permalinks. If the taxonomy has an appropriate result, use its permalink in the structured industry filter. Use `search_query` only when the requested niche is not represented by the taxonomy. */
    "fundable.search_industries": {
      input: {
        /**
         * Industry name to search for
         * @minLength 1
         */
        name: string;
        /** Filter by specific industry type */
        type?: "INDUSTRY" | "SUPER_CATEGORY";
        /** Alias for 'type' parameter */
        industry_type?: "INDUSTRY" | "SUPER_CATEGORY";
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** Industries values. */
          industries?: Array<{
            /** Industry or super category permalink identifier */
            permalink?: string;
            /** Industry or super category name */
            name?: string;
            /** Type of result */
            industry_type?: "INDUSTRY" | "SUPER_CATEGORY";
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint primarily to resolve a fuzzy investor-firm name or an uncertain identifier. If a reliable domain or LinkedIn URL is already available, skip this search and pass it directly to `GET /investor` for one full profile or to `POST /investors` for a batch lookup. */
    "fundable.search_investors": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** Investors values. */
          investors?: Array<{
            /**
             * Unique identifier for the investor
             * @format uuid
             */
            id?: string;
            /** Fundable permalink for the investor */
            guru_permalink?: string | null;
            /** Investor name */
            name?: string;
            /** Brief description of the investor */
            description?: string | null;
            /** Search relevance score (0-1) */
            relevance_score?: number;
            /** Investor website domain */
            domain?: string | null;
            /**
             * Investor website URL
             * @format uri
             */
            website?: string | null;
            /** LinkedIn profile URL */
            linkedin?: string | null;
            /** Crunchbase profile URL */
            crunchbase?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint to resolve a human-readable city, state, country, or region into the exact permalink required by location filters on discovery endpoints. Agents should not guess permalinks. Select the result that matches the user's intended geography, then pass its permalink to the relevant filter. */
    "fundable.search_locations": {
      input: {
        /**
         * Location name to search for
         * @minLength 1
         */
        name: string;
        /** Filter by specific location type */
        type?: "CITY" | "STATE" | "REGION" | "COUNTRY";
        /** Alias for 'type' parameter */
        location_type?: "CITY" | "STATE" | "REGION" | "COUNTRY";
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** Locations values. */
          locations?: Array<{
            /** Location permalink identifier */
            permalink?: string;
            /** Location name */
            name?: string;
            /** Type of location */
            location_type?: "REGION" | "COUNTRY" | "STATE" | "CITY";
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint when the requested result is a list of people. */
    "fundable.search_people": {
      input: {
        /**
         * Restrict results to one population. `company` returns only people with a
         * current employer (founders, executives, employees). `investor` returns only
         * people who invest. `any` (default) returns the union — anyone matching the
         * other filter blocks regardless of population.
         * @default "any"
         */
        person_type?: "company" | "investor" | "any";
        /** Look up specific people by identifier */
        identifiers?: {
          /** Person UUIDs */
          ids?: Array<string>;
          /**
           * LinkedIn person URLs (max 100)
           * @maxItems 100
           */
          linkedin_urls?: Array<string>;
          /**
           * Crunchbase person URLs (max 100)
           * @maxItems 100
           */
          crunchbase_urls?: Array<string>;
          /**
           * Twitter/X URLs (max 100)
           * @maxItems 100
           */
          twitter_urls?: Array<string>;
        };
        /** Person attribute filters */
        person?: {
          /** Person's role at their current employer */
          roles?: Array<"founder" | "ceo" | "key_person">;
          /** Available contact info on the person */
          contact_types?: Array<"linkedin" | "email" | "phone" | "twitter">;
          /** Normalized job-title keys */
          job_titles?: Array<string>;
          /** Education institution IDs */
          education_schools?: Array<string>;
          /** Filter by previous/current employer LinkedIn company IDs */
          linkedin_companies?: Array<string>;
        };
        /** Current-employer attribute filters. Setting any field implicitly requires the person to have a current employer. */
        company?: {
          /**
           * AI-powered semantic search against the person's current employer — a flexible replacement for an industry tag. First use /industry/search and apply an `industries` or `super_categories` filter when the taxonomy contains the intended category. Use semantic search only for a niche industry or product type the taxonomy cannot express, describing what that company does — its product, technology, or business model (e.g. "climate tech carbon accounting software"). Do NOT use it for stage, location, or funding — apply dedicated filters instead. Results are ordered by relevance and capped at 150 semantic matches.
           * @minLength 1
           */
          search_query?: string;
          /**
           * Minimum similarity threshold (0-1). Only applies with search_query.
           * @minimum 0
           * @maximum 1
           */
          min_relevance?: number;
          /** Filter by current-employer UUIDs */
          ids?: Array<string>;
          /** Location permalinks. Use /location/search to find permalinks. A value that is not an exact permalink is silently ignored (returns zero results, no error). */
          locations?: Array<string>;
          /** Industry permalinks. Use /industry/search to find permalinks. A value that is not an exact permalink is silently ignored (returns zero results, no error). */
          industries?: Array<string>;
          /** Super category permalinks (auto-includes related industries). Use /industry/search to find permalinks. A value that is not an exact permalink is silently ignored (returns zero results, no error). */
          super_categories?: Array<string>;
          /** Current-employer headcount ranges */
          employee_count?: Array<"1-10" | "11-50" | "51-100" | "101-250" | "251-500" | "501-1000" | "1001-5000" | "5001-10000" | "10001+">;
          /** Current-employer IPO status */
          ipo_status?: Array<"public" | "private" | "acquired" | "delisted">;
          /**
           * Minimum total raised by current employer (USD)
           * @minimum 0
           */
          total_raised_min?: number;
          /**
           * Maximum total raised by current employer (USD)
           * @minimum 0
           */
          total_raised_max?: number;
          /**
           * Person UUIDs — filter to people whose current employer has ever raised
           * from any of these people as an **angel investor** OR as a **lead partner**
           * of an investing firm. Resolve via `/people/{id}`.
           */
          investor_people_ids?: Array<string>;
          /** Nested. Filters on the current employer's most recent funding round. */
          latest_deal?: {
            /** Financing types with optional modifiers (pre, extension) */
            financing_types?: Array<{
              /** Financing type. */
              type: "SERIES_A" | "SERIES_B" | "SERIES_C" | "SERIES_D" | "SERIES_E" | "SERIES_F" | "SERIES_G" | "SERIES_H" | "SERIES_I" | "SERIES_J" | "SERIES_K" | "SERIES_L" | "SERIES_M" | "SEED" | "SAFE" | "CONVERTIBLE_NOTE" | "EQUITY" | "PREFERRED" | "SECONDARY_MARKET" | "DEBT_FINANCING" | "GRANT" | "NON_EQUITY_ASSISTANCE" | "CROWDFUNDING" | "INITIAL_COIN_OFFERING" | "FUNDING_ROUND";
              /**
               * Whether to filter for pre-round financing.
               * @default false
               */
              pre?: boolean;
              /**
               * Whether to filter for extension rounds.
               * @default false
               */
              extension?: boolean;
            }>;
            /**
             * Minimum latest-deal size (USD)
             * @minimum 0
             */
            size_min?: number;
            /**
             * Maximum latest-deal size (USD)
             * @minimum 0
             */
            size_max?: number;
            /**
             * Earliest announcement date (ISO 8601).
             * @minLength 1
             * @format date
             */
            date_start?: string;
            /**
             * Latest announcement date (ISO 8601).
             * @minLength 1
             * @format date
             */
            date_end?: string;
            /** Filter to deals where these investor UUIDs participated */
            investor_ids?: Array<string>;
            /** Filter to deals with investors HQ'd in these locations */
            investor_locations?: Array<string>;
          };
        };
        /**
         * Filters on the investor entity (firm) and on the person's deal activity.
         * Setting any field (including any nested `deals.*` field) implicitly requires
         * the person to be an investor.
         */
        investor?: {
          /** Firm (parent investor) UUIDs */
          ids?: Array<string>;
          /**
           * Firm domains (max 100)
           * @maxItems 100
           */
          domains?: Array<string>;
          /**
           * Firm LinkedIn URLs (max 100)
           * @maxItems 100
           */
          linkedin_urls?: Array<string>;
          /**
           * Firm Crunchbase URLs (max 100)
           * @maxItems 100
           */
          crunchbase_urls?: Array<string>;
          /**
           * Fundable firm permalinks (max 100)
           * @maxItems 100
           */
          permalinks?: Array<string>;
          /** Firm HQ location permalinks */
          locations?: Array<string>;
          /** Firm headcount ranges */
          employee_count?: Array<"1-10" | "11-50" | "51-100" | "101-250" | "251-500" | "501-1000" | "1001-5000" | "5001-10000" | "10001+">;
          /**
           * Nested. Combined deal-activity and portfolio-company filters. Includes:
           * deal-level controls (`investment_type`, `min_matching_deals`, `only_lead_deals`),
           * round-level filters (`financing_types`, `size_min/max`, `date_start/end`), and
           * portfolio-company attributes (`industries`, `super_categories`,
           * `portfolio_locations`, `portfolio_employee_count`, `ipo_status`,
           * `total_raised_min/max`, plus semantic `search_query` / `min_relevance`).
           */
          deals?: {
            /**
             * AI-powered semantic search against the person's portfolio companies — a flexible replacement for an industry tag. First use /industry/search and apply an `industries` or `super_categories` filter when the taxonomy contains the intended category. Use semantic search only for a niche industry or product type the taxonomy cannot express, describing what those companies do (e.g. "AI infrastructure for model training"). Do NOT use it for stage, location, or funding — apply dedicated filters instead. Results are ordered by relevance and capped at 150 semantic matches.
             * @minLength 1
             */
            search_query?: string;
            /**
             * Minimum similarity threshold (0-1). Only applies with search_query.
             * @minimum 0
             * @maximum 1
             */
            min_relevance?: number;
            /**
             * Filter by whether the person invests as an angel, under a firm, or both
             * @default "all"
             */
            investment_type?: "all" | "angel" | "institutional";
            /**
             * Only count deals where the person/firm was a lead investor
             * @default false
             */
            only_lead_deals?: boolean;
            /**
             * Require at least this many deals to match the deal filters
             * @minimum 1
             */
            min_matching_deals?: number;
            /** Financing types for the person's investment activity */
            financing_types?: Array<{
              /** Financing type. */
              type: "SERIES_A" | "SERIES_B" | "SERIES_C" | "SERIES_D" | "SERIES_E" | "SERIES_F" | "SERIES_G" | "SERIES_H" | "SERIES_I" | "SERIES_J" | "SERIES_K" | "SERIES_L" | "SERIES_M" | "SEED" | "SAFE" | "CONVERTIBLE_NOTE" | "EQUITY" | "PREFERRED" | "SECONDARY_MARKET" | "DEBT_FINANCING" | "GRANT" | "NON_EQUITY_ASSISTANCE" | "CROWDFUNDING" | "INITIAL_COIN_OFFERING" | "FUNDING_ROUND";
              /**
               * Whether to filter for pre-round financing.
               * @default false
               */
              pre?: boolean;
              /**
               * Whether to filter for extension rounds.
               * @default false
               */
              extension?: boolean;
            }>;
            /**
             * Minimum deal size (USD) for the person's deal activity
             * @minimum 0
             */
            size_min?: number;
            /**
             * Maximum deal size (USD) for the person's deal activity
             * @minimum 0
             */
            size_max?: number;
            /**
             * Earliest announcement date (ISO 8601).
             * @minLength 1
             * @format date
             */
            date_start?: string;
            /**
             * Latest announcement date (ISO 8601).
             * @minLength 1
             * @format date
             */
            date_end?: string;
            /** Portfolio company industry permalinks */
            industries?: Array<string>;
            /** Portfolio company super-category permalinks */
            super_categories?: Array<string>;
            /** Portfolio company location permalinks */
            portfolio_locations?: Array<string>;
            /** Portfolio company headcount ranges */
            portfolio_employee_count?: Array<"1-10" | "11-50" | "51-100" | "101-250" | "251-500" | "501-1000" | "1001-5000" | "5001-10000" | "10001+">;
            /** Portfolio company IPO status */
            ipo_status?: Array<"public" | "private">;
            /**
             * Minimum total raised by the portfolio company (USD)
             * @minimum 0
             */
            total_raised_min?: number;
            /**
             * Maximum total raised by the portfolio company (USD)
             * @minimum 0
             */
            total_raised_max?: number;
          };
        };
        /**
         * Page number (0-based)
         * @minimum 0
         * @default 0
         */
        page?: number;
        /**
         * Number of results per page (max 500)
         * @minimum 1
         * @maximum 500
         * @default 10
         */
        page_size?: number;
        /**
         * Sort order. All values are universally accepted — non-applicable values (e.g. `lead_deal_count`
         * when no investor filter is set) resolve to 0 / null via COALESCE and naturally sort to the bottom (DESC).
         * Ignored when `company.search_query` or `investor.deals.search_query` is set (results are then
         * ordered by semantic relevance).
         * @default "most_recent_deal_date"
         */
        sort_by?: "most_recent_deal_date" | "total_raised" | "latest_deal_size" | "name" | "total_deal_count" | "deal_count_last_12_months" | "lead_deal_count" | "lead_deal_count_last_12_months" | "filtered_deal_count";
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** People values. */
          people?: Array<{
            /**
             * Unique Fundable record identifier.
             * @format uuid
             */
            id?: string;
            /** Display name of the record. */
            name?: string | null;
            /** Current job title */
            title?: string | null;
            /**
             * Canonical LinkedIn person URL
             * @format uri
             */
            linkedin_url?: string | null;
            /**
             * Canonical Crunchbase person URL
             * @format uri
             */
            crunchbase_url?: string | null;
            /**
             * Canonical Twitter/X profile URL
             * @format uri
             */
            twitter_url?: string | null;
            /** Location. */
            location?: string | null;
            /** City. */
            city?: string | null;
            /** Country code. */
            country_code?: string | null;
            /** LinkedIn bio/about section */
            about?: string | null;
            /** Is founder. */
            is_founder?: boolean;
            /** Current employer summary. Null when the person has no current employer. */
            current_company?: {
              /**
               * Fundable company UUID.
               * @format uuid
               */
              id?: string;
              /** Current employer name. */
              name?: string | null;
              /** Fundable permalink for the company */
              permalink?: string | null;
              /** Current employer domain. */
              domain?: string | null;
              [key: string]: unknown;
            } | null;
            /**
             * Recent employment (max 3 items in search; full list on detail endpoint)
             * @maxItems 3
             */
            employment_history?: Array<Record<string, unknown>>;
            /**
             * Education records (max 3 items in search; full list on detail endpoint)
             * @maxItems 3
             */
            education_history?: Array<Record<string, unknown>>;
            /** Whether the person has any tracked investment activity */
            is_investor?: boolean;
            /** Whether the person makes angel investments */
            is_angel?: boolean;
            /** Whether the person has ever led a deal */
            has_led_deal?: boolean;
            /** Firms the person invests under (empty for pure angels) */
            investment_firms?: Array<Record<string, unknown>>;
            /** Aggregated investor activity. Null when `is_investor` is false. */
            investor_highlights?: Record<string, unknown> | null;
            /** Count of deals matching the `investor.deals.*` filters. Populated only when any `investor.deals.*` filter is present; otherwise null. */
            filtered_deal_count?: number | null;
            /** Of the matching deals, how many the person/firm led. Populated only when any `investor.deals.*` filter is present. */
            filtered_lead_count?: number | null;
            /**
             * Most recent matching-deal date. Populated only when any `investor.deals.*` filter is present.
             * @format date
             */
            filtered_most_recent_date?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Use this endpoint primarily to resolve a fuzzy person name or uncertain identifier. If a reliable LinkedIn URL is already available, skip this search and pass it directly to `GET /person` for one full profile or to `POST /people` for a batch lookup. */
    "fundable.search_person": {
      input: Record<string, unknown>;
      output: {
        /** Whether the request succeeded. */
        success: boolean;
        /** Requested Fundable records. */
        data: {
          /** People values. */
          people?: Array<{
            /**
             * Unique Fundable record identifier.
             * @format uuid
             */
            id?: string;
            /** Display name of the record. */
            name?: string;
            /**
             * LinkedIn profile URL.
             * @format uri
             */
            linkedin_url?: string | null;
            /**
             * Crunchbase profile URL.
             * @format uri
             */
            crunchbase_url?: string | null;
            /**
             * Twitter/X profile URL.
             * @format uri
             */
            twitter_url?: string | null;
            /** Which pool the result came from. Mirrors the request-body discriminator on POST /people. */
            person_type?: "investor" | "company";
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Pagination and credit usage reported by Fundable. */
        meta?: {
          /** Total number of matching records. */
          total_count?: number;
          /** Zero-based page number. */
          page?: number;
          /** Number of results per page. */
          page_size?: number;
          /** Credits consumed by this request. */
          credits_used?: number;
          /** Source of consumed credits. */
          credit_source?: string | null;
          /** Remaining monthly credits. */
          monthly_credits_remaining?: number | null;
          /** Remaining purchased credits. */
          purchased_credits_remaining?: number | null;
          [key: string]: unknown;
        };
        /** Optional explanatory message. */
        message?: string;
        [key: string]: unknown;
      };
    };
  }
}
