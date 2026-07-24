import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Run up to five independent general or vertical AnySearch queries in parallel and return agent-ready Markdown. */
    "anysearch.batch_search": {
      input: {
        /**
         * The search queries to execute in parallel.
         * @minItems 1
         * @maxItems 5
         */
        queries: Array<{
          /**
           * The search query with one intent.
           * @minLength 1
           */
          query: string;
          /** The vertical domain selected after calling get_sub_domains. */
          domain?: "general" | "resource" | "social_media" | "finance" | "academic" | "legal" | "health" | "business" | "security" | "ip" | "code" | "energy" | "environment" | "agriculture" | "travel" | "film" | "gaming";
          /**
           * The sub-domain routing key returned by get_sub_domains.
           * @minLength 1
           */
          sub_domain?: string;
          /** Structured parameters returned for the selected sub-domain. */
          sub_domain_params?: Record<string, unknown>;
          /**
           * The maximum number of results for this query.
           * @minimum 1
           * @maximum 10
           */
          max_results?: number;
        }>;
      };
      output: {
        /**
         * Markdown containing the result of every query in the batch.
         * @minLength 1
         */
        content: string;
        /**
         * The AnySearch request identifiers associated with the batch.
         * @minItems 1
         * @maxItems 5
         */
        request_ids: Array<string>;
      };
    };
    /** Fetch an HTML page through AnySearch and return its cleaned content as Markdown. */
    "anysearch.extract": {
      input: {
        /**
         * The HTTP or HTTPS page URL to fetch and convert to Markdown.
         * @format uri
         */
        url: string;
      };
      output: {
        /**
         * The extracted page content as Markdown.
         * @minLength 1
         */
        content: string;
        /**
         * The AnySearch request identifier used for tracing.
         * @minLength 1
         */
        request_id: string;
      };
    };
    /** Discover AnySearch vertical sub-domains and their required parameters before running a specialized search. */
    "anysearch.get_sub_domains": {
      input: {
        /** The domain whose sub-domains should be returned. */
        domain: "general" | "resource" | "social_media" | "finance" | "academic" | "legal" | "health" | "business" | "security" | "ip" | "code" | "energy" | "environment" | "agriculture" | "travel" | "film" | "gaming";
      } | {
        /**
         * The domains whose sub-domains should be returned.
         * @minItems 1
         * @maxItems 5
         */
        domains: Array<"general" | "resource" | "social_media" | "finance" | "academic" | "legal" | "health" | "business" | "security" | "ip" | "code" | "energy" | "environment" | "agriculture" | "travel" | "film" | "gaming">;
      };
      output: {
        /**
         * Markdown describing matching sub-domains and their parameters.
         * @minLength 1
         */
        content: string;
        /**
         * The AnySearch request identifier used for tracing.
         * @minLength 1
         */
        request_id: string;
      };
    };
    /** Search AnySearch's automatically routed data sources and return structured source results. */
    "anysearch.search": {
      input: {
        /**
         * The search query to execute.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of search results to return.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
        /** The top-level domain used to route the search. */
        domain?: "general" | "code" | "tech" | "fashion" | "travel" | "home" | "ecommerce" | "gaming" | "film" | "music" | "finance" | "academic" | "legal" | "business" | "ip" | "security" | "education" | "health" | "religion" | "geo" | "environment" | "energy";
        /**
         * A sub-domain capability tag, such as code.doc. Use a sub-domain returned by get_sub_domains when possible.
         * @minLength 1
         */
        tag?: string;
        /**
         * Content types to include, such as web, news, or doc.
         * @minItems 1
         */
        content_types?: Array<string>;
        /** The regional search zone used by AnySearch. */
        zone?: "cn" | "intl";
        /**
         * The preferred result language, such as zh-CN or en.
         * @minLength 1
         */
        language?: string;
        /** Parameters required by the selected tag. Use values returned by get_sub_domains when possible. */
        params?: Record<string, unknown>;
      };
      output: {
        /** The structured sources returned by AnySearch. */
        results: Array<{
          /** The source title. */
          title: string;
          /**
           * The original source URL.
           * @format uri
           */
          url: string;
          /** A short summary of the source. */
          snippet: string;
          /** The cleaned source content. */
          content: string;
          [key: string]: unknown;
        }>;
        /** Metadata describing the AnySearch request. */
        metadata: {
          /**
           * The number of results returned by AnySearch.
           * @minimum 0
           */
          total_results: number;
          /**
           * The end-to-end search latency reported by AnySearch in milliseconds.
           * @minimum 0
           */
          search_time_ms: number;
          [key: string]: unknown;
        };
        /**
         * The AnySearch request identifier used for tracing.
         * @minLength 1
         */
        request_id: string;
        [key: string]: unknown;
      };
    };
  }
}
