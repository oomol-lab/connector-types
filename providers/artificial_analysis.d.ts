import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one language model's evaluations, pricing and performance. Requires Pro or Commercial. */
    "artificial_analysis.get_model": {
      input: {
        /**
         * Model or API provider slug from the corresponding list action.
         * @minLength 1
         */
        slug: string;
        /** Benchmark preset. Defaults to long (10,000 input tokens, one query). */
        prompt_type?: "medium" | "long" | "100k" | "vision_single_image" | "medium_parallel";
      };
      output: {
        /** Subscription tier serving this response. */
        tier: string;
        /** Model metadata, evaluations, pricing and performance. Unmeasured values remain null. */
        data: {
          /** Stable model ID. */
          id?: string;
          /** Model display name. */
          name?: string;
          /** Model URL slug; it may change over time. */
          slug?: string;
          /** Model creator identity. */
          model_creator?: Record<string, unknown> | null;
          /** Benchmark scores and capability indices. */
          evaluations?: Record<string, unknown>;
          /** Model pricing reported by Artificial Analysis. */
          pricing?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Major.minor version of the Intelligence Index. */
        intelligence_index_version: number;
        [key: string]: unknown;
      };
    };
    /** Get language model performance over time, grouped by API provider. Requires Commercial. */
    "artificial_analysis.get_model_performance": {
      input: {
        /**
         * Model or API provider slug from the corresponding list action.
         * @minLength 1
         */
        slug: string;
        /** Lookback period. Defaults to 90d. */
        window?: "7d" | "30d" | "90d";
        /** Aggregation interval. Defaults to daily for 7d/30d, weekly for 90d. */
        interval?: "daily" | "weekly" | "monthly";
        /** Benchmark preset. Defaults to long (10,000 input tokens, one query). */
        prompt_type?: "medium" | "long" | "100k" | "vision_single_image" | "medium_parallel";
      };
      output: {
        /** Subscription tier serving this response. */
        tier: string;
        /** Identity and performance series grouped by model or API provider, preserving endpoint labels. */
        data: {
          /** Stable model or API provider ID. */
          id?: string;
          /** Model or API provider display name. */
          name?: string;
          /** Model or API provider URL slug. */
          slug?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get an API provider and its language model pricing and performance. Requires Commercial. */
    "artificial_analysis.get_provider": {
      input: {
        /**
         * Model or API provider slug from the corresponding list action.
         * @minLength 1
         */
        slug: string;
        /** Benchmark preset. Defaults to long (10,000 input tokens, one query). */
        prompt_type?: "medium" | "long" | "100k" | "vision_single_image" | "medium_parallel";
      };
      output: {
        /** Subscription tier serving this response. */
        tier: string;
        /** API provider identity and available model data. */
        data: {
          /** Stable API provider ID. */
          id?: string;
          /** API provider display name. */
          name?: string;
          /** API provider URL slug. */
          slug?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get raw model measurements for an API provider. Requires Commercial and an explicit provider grant. Dates earlier than one month ago are clamped by the API. */
    "artificial_analysis.get_provider_measurements": {
      input: {
        /**
         * Model or API provider slug from the corresponding list action.
         * @minLength 1
         */
        slug: string;
        /** Benchmark preset. Defaults to long (10,000 input tokens, one query). */
        prompt_type?: "medium" | "long" | "100k" | "vision_single_image" | "medium_parallel";
        /**
         * Earliest measurement date (YYYY-MM-DD). Defaults to one month ago.
         * @format date
         */
        start_date?: string;
      };
      output: {
        /** Subscription tier serving this response. */
        tier: string;
        /** API provider identity and raw measurements grouped by model. */
        data: {
          /** Stable API provider ID. */
          id?: string;
          /** API provider display name. */
          name?: string;
          /** API provider URL slug. */
          slug?: string;
          /** Models and their raw measurement data. */
          models?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get an API provider's performance over time, grouped by model. Requires Commercial. */
    "artificial_analysis.get_provider_performance": {
      input: {
        /**
         * Model or API provider slug from the corresponding list action.
         * @minLength 1
         */
        slug: string;
        /** Lookback period. Defaults to 90d. */
        window?: "7d" | "30d" | "90d";
        /** Aggregation interval. Defaults to daily for 7d/30d, weekly for 90d. */
        interval?: "daily" | "weekly" | "monthly";
        /** Benchmark preset. Defaults to long (10,000 input tokens, one query). */
        prompt_type?: "medium" | "long" | "100k" | "vision_single_image" | "medium_parallel";
      };
      output: {
        /** Subscription tier serving this response. */
        tier: string;
        /** Identity and performance series grouped by model or API provider, preserving endpoint labels. */
        data: {
          /** Stable model or API provider ID. */
          id?: string;
          /** Model or API provider display name. */
          name?: string;
          /** Model or API provider URL slug. */
          slug?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List public language model benchmarks, median performance and input/output prices. Available to every API tier; returns the Free field set even with a paid key. */
    "artificial_analysis.list_free_models": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         * @maximum 10000
         */
        page?: number;
      };
      output: {
        /** Subscription tier serving this response. */
        tier: string;
        /** Language models on this page. */
        data: Array<{
          /** Stable model ID. */
          id?: string;
          /** Model display name. */
          name?: string;
          /** Model URL slug; it may change over time. */
          slug?: string;
          /** Model creator identity. */
          model_creator?: Record<string, unknown> | null;
          /** Benchmark scores and capability indices. */
          evaluations?: Record<string, unknown>;
          /** Model pricing reported by Artificial Analysis. */
          pricing?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata; request the next page while has_more is true. */
        pagination: {
          /** Current page number. */
          page: number;
          /** Number of items per page. */
          page_size: number;
          /** Total number of pages. */
          total_pages: number;
          /** Whether more pages are available. */
          has_more: boolean;
          [key: string]: unknown;
        };
        /** Major.minor version of the Intelligence Index. */
        intelligence_index_version: number;
        [key: string]: unknown;
      };
    };
    /** List language model evaluations, pricing and performance with the full paid field set. Requires Pro or Commercial; use list_free_models with a Free key. */
    "artificial_analysis.list_models": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         * @maximum 10000
         */
        page?: number;
        /** Benchmark preset. Defaults to long (10,000 input tokens, one query). */
        prompt_type?: "medium" | "long" | "100k" | "vision_single_image" | "medium_parallel";
      };
      output: {
        /** Subscription tier serving this response. */
        tier: string;
        /** Language models on this page. */
        data: Array<{
          /** Stable model ID. */
          id?: string;
          /** Model display name. */
          name?: string;
          /** Model URL slug; it may change over time. */
          slug?: string;
          /** Model creator identity. */
          model_creator?: Record<string, unknown> | null;
          /** Benchmark scores and capability indices. */
          evaluations?: Record<string, unknown>;
          /** Model pricing reported by Artificial Analysis. */
          pricing?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata; request the next page while has_more is true. */
        pagination: {
          /** Current page number. */
          page: number;
          /** Number of items per page. */
          page_size: number;
          /** Total number of pages. */
          total_pages: number;
          /** Whether more pages are available. */
          has_more: boolean;
          [key: string]: unknown;
        };
        /** Major.minor version of the Intelligence Index. */
        intelligence_index_version: number;
        [key: string]: unknown;
      };
    };
    /** List language model API providers. Requires Commercial. */
    "artificial_analysis.list_providers": {
      input: {
        /**
         * Page number, starting at 1. Defaults to 1.
         * @minimum 1
         * @maximum 10000
         */
        page?: number;
      };
      output: {
        /** Subscription tier serving this response. */
        tier: string;
        /** API providers on this page. */
        data: Array<{
          /** Stable API provider ID. */
          id?: string;
          /** API provider display name. */
          name?: string;
          /** API provider URL slug. */
          slug?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata; request the next page while has_more is true. */
        pagination: {
          /** Current page number. */
          page: number;
          /** Number of items per page. */
          page_size: number;
          /** Total number of pages. */
          total_pages: number;
          /** Whether more pages are available. */
          has_more: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
