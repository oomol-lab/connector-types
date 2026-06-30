import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Discover website-serving subdomains for one or more domains with Wappalyzer. */
    "wappalyzer.find_subdomains": {
      input: {
        /**
         * The domains to inspect.
         * @minItems 1
         * @maxItems 10
         */
        domains: Array<string>;
        /**
         * The maximum number of subdomains to return. Must be a multiple of 10.
         * @minimum 10
         */
        limit?: number;
        /**
         * The pagination cursor returned as moreAfter by a previous request.
         * @minLength 1
         */
        after?: string;
      };
      output: {
        /** The subdomain results returned by Wappalyzer. */
        results: Array<{
          /** The domain returned by Wappalyzer. */
          domain: string;
          /** The subdomain records keyed by subdomain name. */
          subdomains: Record<string, {
              /** The timestamp when Wappalyzer first observed the subdomain. */
              createdAt: number;
              /** The timestamp when Wappalyzer last updated the subdomain. */
              updatedAt: number;
            }>;
          /** The pagination cursor to pass as after when more subdomains are available. */
          moreAfter: string | null;
        }>;
        /** The Wappalyzer credit headers returned with the API response. */
        creditHeaders: {
          /** The number of credits spent by the request. */
          spent: number | null;
          /** The number of credits remaining after the request. */
          remaining: number | null;
        };
      };
    };
    /** Get the current Wappalyzer API credit balance for the connected account. */
    "wappalyzer.get_credits_balance": {
      input: Record<string, never>;
      output: {
        /** The current credit balance returned by Wappalyzer. */
        credits: number;
        /** The Wappalyzer credit headers returned with the API response. */
        creditHeaders: {
          /** The number of credits spent by the request. */
          spent: number | null;
          /** The number of credits remaining after the request. */
          remaining: number | null;
        };
      };
    };
    /** Look up website technologies and related intelligence with Wappalyzer. */
    "wappalyzer.lookup_technologies": {
      input: {
        /**
         * The website URLs to inspect.
         * @minItems 1
         * @maxItems 10
         */
        urls: Array<string>;
        /** Whether Wappalyzer should scan websites in real time instead of using cached results. */
        live?: boolean;
        /**
         * Additional result field sets to include. Use signals to request technologySpend and trafficLevel.
         * @minItems 1
         */
        sets?: Array<string>;
        /** Whether Wappalyzer should exclude low-confidence detections. */
        denoise?: boolean;
        /**
         * The result age in months used to filter Wappalyzer data.
         * @minimum 0
         */
        minAge?: number;
        /**
         * The maximum result age in months used to filter Wappalyzer data.
         * @minimum 1
         * @maximum 12
         */
        maxAge?: number;
        /** Whether Wappalyzer should merge monthly results. */
        squash?: boolean;
      };
      output: {
        /** The normalized lookup results returned by Wappalyzer. */
        results: Array<{
          /**
           * The website URL returned by Wappalyzer.
           * @format uri
           */
          url?: string;
          /** The technologies detected for the website. */
          technologies?: Array<{
            /** The technology slug returned by Wappalyzer. */
            slug?: string;
            /** The technology name returned by Wappalyzer. */
            name?: string;
            /** The CPE identifier returned by Wappalyzer when available. */
            cpe?: string;
            /** The technology versions detected by Wappalyzer when available. */
            versions?: Array<string>;
            /** The categories attached to the detected technology. */
            categories?: Array<{
              /** The category identifier returned by Wappalyzer. */
              id?: number;
              /** The category slug returned by Wappalyzer. */
              slug?: string;
              /** The category name returned by Wappalyzer. */
              name?: string;
              [key: string]: unknown;
            }>;
            /** The traffic rank returned by Wappalyzer when available. */
            trafficRank?: number;
            /** The timestamp when Wappalyzer confirmed the detection. */
            confirmedAt?: number;
            [key: string]: unknown;
          }>;
          /** The estimated technology spend level when requested and available. */
          technologySpend?: "Very low" | "Low" | "Medium" | "High" | "Very high";
          /** The relative monthly traffic level when requested and available. */
          trafficLevel?: "Very low" | "Low" | "Medium" | "High" | "Very high";
          /** The lookup errors returned by Wappalyzer for this website. */
          errors?: Array<string>;
          [key: string]: unknown;
        }>;
        /** The Wappalyzer credit headers returned with the API response. */
        creditHeaders: {
          /** The number of credits spent by the request. */
          spent: number | null;
          /** The number of credits remaining after the request. */
          remaining: number | null;
        };
      };
    };
    /** Verify an email address with Wappalyzer deliverability signals. */
    "wappalyzer.verify_email": {
      input: {
        /**
         * The email address to verify.
         * @format email
         */
        email: string;
      };
      output: {
        /** A Wappalyzer email verification result. */
        result: {
          /**
           * The email address returned by Wappalyzer.
           * @format email
           */
          email?: string;
          /** The email domain returned by Wappalyzer. */
          domain?: string;
          /** The reachability classification returned by Wappalyzer. */
          reachable?: "safe" | "risky" | "invalid" | "unknown";
          /** Whether the email address uses a disposable mailbox provider. */
          disposable?: boolean;
          /** Whether the email address appears to be a role account. */
          roleAccount?: boolean;
          /** Whether the email domain has valid MX records. */
          mxValid?: boolean;
          /** Whether Wappalyzer could connect to the mail server. */
          connection?: boolean;
          /** Whether the mailbox appears to be full. */
          inboxFull?: boolean;
          /** Whether the domain appears to accept catch-all email. */
          catchAll?: boolean;
          /** Whether Wappalyzer considers the email deliverable. */
          deliverable?: boolean;
          /** Whether the mailbox appears disabled. */
          disabled?: boolean;
          /** Whether the email syntax is valid. */
          syntaxValid?: boolean;
          [key: string]: unknown;
        };
        /** The Wappalyzer credit headers returned with the API response. */
        creditHeaders: {
          /** The number of credits spent by the request. */
          spent: number | null;
          /** The number of credits remaining after the request. */
          remaining: number | null;
        };
      };
    };
  }
}
