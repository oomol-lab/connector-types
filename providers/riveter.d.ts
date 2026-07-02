import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the Riveter account and API key details for the connected API key. */
    "riveter.get_account": {
      input: Record<string, never>;
      output: {
        /** The Riveter account associated with the API key. */
        account: {
          /**
           * The unique identifier for the account.
           * @format uuid
           */
          uuid: string;
          /** The account name. */
          name: string;
          /** The current billing plan. */
          plan: "free" | "starter" | "advanced" | "pro" | "enterprise";
          /** The Riveter credit balance for the account. */
          credit: {
            /** The current credit count. */
            count: number;
            /** The maximum credits available. */
            max: number;
            /** The remaining credit balance. */
            balance: number;
          };
        };
        /** Details about the Riveter API key used for this request. */
        api_key_info: {
          /** The name of the API key. */
          name: string;
          /**
           * When the API key was last used.
           * @format date-time
           */
          last_used_at: string | null;
          /** The Riveter user who created the API key. */
          created_by: {
            /**
             * The user's unique identifier.
             * @format uuid
             */
            uuid: string;
            /** The user's full name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email: string;
          };
        };
      };
    };
    /** Scrape a public webpage with Riveter and return extracted text content. */
    "riveter.scrape": {
      input: {
        /**
         * The public webpage URL to scrape.
         * @format uri
         */
        url: string;
        /**
         * The two-character country code for proxy routing.
         * @pattern ^[a-z]{2}$
         */
        proxy_country_code?: string;
        /** Whether to bypass cached scrape results and fetch fresh content. */
        skip_cache?: boolean;
      };
      output: {
        /** The status of the scrape request. */
        request_status: "success" | "error";
        /** The human-readable response message. */
        message: string;
        /** The unique identifier for this scrape run. */
        run_key: string;
        /** The extracted webpage payload returned by Riveter. */
        data: {
          /**
           * The URL that was scraped.
           * @format uri
           */
          url: string;
          /** The extracted text content from the webpage. */
          text: string;
          /**
           * The base URL for resolving relative links.
           * @format uri
           */
          base_url_for_links: string;
          /** The HTTP status code returned by the webpage server. */
          status_code?: number;
          /** Whether Riveter detected that the page may be blocked by anti-scraping measures. */
          possibly_blocked?: boolean;
          /** The number of Riveter credits consumed by the scrape. */
          credit_used: number;
          /**
           * The direct link to view this scrape in the Riveter application.
           * @format uri
           */
          riveter_app_link: string;
          /** The raw scrape data object returned by Riveter. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
