import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve BuiltWith technology recommendations for one or more root domains. */
    "builtwith.get_domain_recommendations": {
      input: {
        /**
         * The root domain or comma-separated list of root domains for recommendations.
         * @minLength 1
         */
        lookup: string;
      };
      output: {
        /** The recommendation result sets returned by BuiltWith. */
        results: Array<{
          /** The domain used to build the recommendation set. */
          domain: string;
          /** The raw compilation timestamp string returned by BuiltWith. */
          compiled?: string;
          /** The technology recommendations returned by BuiltWith. */
          recommendations: Array<{
            /** The recommended technology name. */
            name: string;
            /** The URL for the recommended technology. */
            link: string;
            /** The BuiltWith top-level tag for the recommendation. */
            tag: string;
            /** The BuiltWith categories assigned to the recommendation. */
            categories: Array<string>;
            /** The BuiltWith star rating for the recommendation. */
            stars: number;
            /** The BuiltWith relevance score for the recommendation. */
            match: number;
          }>;
        }>;
      };
    };
    /** Retrieve a BuiltWith technology profile for a domain while excluding personally identifiable information by default. */
    "builtwith.lookup_domain_profile": {
      input: {
        /**
         * The domain or URL to inspect with BuiltWith.
         * @minLength 1
         */
        lookup: string;
        /** Whether to restrict the response to live technologies only. */
        includeLiveOnly?: boolean;
        /** Whether to include the sanitized BuiltWith metadata block. */
        includeMeta?: boolean;
      };
      output: {
        /** The normalized domain profile results returned by BuiltWith. */
        results: Array<{
          /** The lookup value resolved by BuiltWith. */
          lookup: string;
          /** The epoch timestamp in milliseconds when the lookup was first indexed. */
          firstIndexed: number;
          /** The epoch timestamp in milliseconds when the lookup was last indexed. */
          lastIndexed: number;
          /** The sales revenue estimate returned by BuiltWith. */
          salesRevenue?: number;
          /** The BuiltWith record source indicator, such as `True` or `False`. */
          isDb?: string;
          /** The technology spend estimate returned by BuiltWith. */
          spend?: number;
          /** The BuiltWith spend history timeline for the lookup. */
          spendHistory?: Array<{
            /** The epoch timestamp in milliseconds for the spend history point. */
            date: number;
            /** The spend value returned for the history point. */
            spend: number;
          }>;
          /** The indexed paths returned by BuiltWith. */
          paths: Array<{
            /** The root domain for the indexed path. */
            domain: string;
            /** The path or aggregate URL label returned by BuiltWith. */
            url: string;
            /** The subdomain label for the indexed path. */
            subdomain?: string;
            /** The epoch timestamp in milliseconds when this path was first indexed. */
            firstIndexed?: number;
            /** The epoch timestamp in milliseconds when this path was last indexed. */
            lastIndexed?: number;
            /** The technologies detected for this path. */
            technologies: Array<{
              /** The technology name detected by BuiltWith. */
              name: string;
              /** The BuiltWith description for the detected technology. */
              description?: string;
              /** The reference URL for the detected technology. */
              link?: string;
              /** The parent technology name when BuiltWith provides one. */
              parent?: string;
              /** The BuiltWith top-level technology tag. */
              tag?: string;
              /** The BuiltWith categories assigned to the technology. */
              categories?: Array<string>;
              /** The epoch timestamp in milliseconds when the technology was first detected. */
              firstDetected?: number;
              /** The epoch timestamp in milliseconds when the technology was last detected. */
              lastDetected?: number;
              /** Whether BuiltWith marks the technology as premium coverage. */
              isPremium?: string;
            }>;
          }>;
          /** The sanitized metadata block returned by BuiltWith. */
          meta?: {
            /** The company name returned by BuiltWith. */
            companyName?: string;
            /** The ISO country code returned by BuiltWith. */
            country?: string;
            /** The state or region returned by BuiltWith. */
            state?: string;
            /** The city returned by BuiltWith. */
            city?: string;
            /** The postcode returned by BuiltWith. */
            postcode?: string;
            /** The BuiltWith vertical classification. */
            vertical?: string;
            /** The Majestic rank returned by BuiltWith. */
            majestic?: number;
            /** The Alexa rank returned by BuiltWith. */
            aRank?: number;
            /** The Quantcast rank returned by BuiltWith. */
            qRank?: number;
            /** The Umbrella rank returned by BuiltWith. */
            umbrella?: number;
            /** The social profile URLs returned by BuiltWith. */
            social?: Array<string>;
          };
          /** The numeric attribute counters returned by BuiltWith. */
          attributes?: Record<string, number>;
        }>;
        /** The BuiltWith errors returned with the response. */
        errors: Array<{
          /** The error message returned by BuiltWith. */
          message: string;
          /** The numeric error code returned by BuiltWith. */
          code?: number;
        }>;
      };
    };
    /** Retrieve the BuiltWith Free API technology group summary for a root domain. */
    "builtwith.lookup_domain_summary": {
      input: {
        /**
         * The root domain to summarize with the BuiltWith Free API.
         * @minLength 1
         */
        lookup: string;
      };
      output: {
        /** The root domain returned by BuiltWith. */
        domain: string;
        /** The epoch timestamp in milliseconds when the domain was first indexed. */
        firstIndexed: number;
        /** The epoch timestamp in milliseconds when the domain was last indexed. */
        lastIndexed: number;
        /** The technology groups returned by BuiltWith. */
        groups: Array<{
          /** The BuiltWith technology group name. */
          name: string;
          /** The count of live technologies in the group. */
          live: number;
          /** The count of historical technologies in the group. */
          dead: number;
          /** The epoch timestamp in milliseconds of the latest technology detection. */
          latest: number;
          /** The epoch timestamp in milliseconds of the earliest technology detection. */
          oldest: number;
          /** The categories contained in the group. */
          categories: Array<{
            /** The BuiltWith category name. */
            name: string;
            /** The count of live technologies in the category. */
            live: number;
            /** The count of historical technologies in the category. */
            dead: number;
            /** The epoch timestamp in milliseconds of the latest technology detection. */
            latest: number;
            /** The epoch timestamp in milliseconds of the earliest technology detection. */
            oldest: number;
          }>;
        }>;
      };
    };
    /** Retrieve the inbound and outbound redirect history for a root domain from BuiltWith. */
    "builtwith.lookup_redirect_history": {
      input: {
        /**
         * The root domain to inspect for redirect history.
         * @minLength 1
         */
        lookup: string;
      };
      output: {
        /** The root domain returned by BuiltWith. */
        lookup: string;
        /** The domains redirecting to the lookup domain. */
        inbound: Array<{
          /** The redirect source or destination domain. */
          domain: string;
          /** The ISO timestamp when the redirect was first detected. */
          firstDetected: string;
          /** The ISO timestamp when the redirect was last detected. */
          lastDetected: string;
        }>;
        /** The domains the lookup domain redirects to. */
        outbound: Array<{
          /** The redirect source or destination domain. */
          domain: string;
          /** The ISO timestamp when the redirect was first detected. */
          firstDetected: string;
          /** The ISO timestamp when the redirect was last detected. */
          lastDetected: string;
        }>;
      };
    };
    /** Map one or more social profile URLs to BuiltWith root domain matches. */
    "builtwith.lookup_social_profiles": {
      input: {
        /**
         * The social profile URL or comma-separated BuiltWith social lookup string.
         * @minLength 1
         */
        lookup: string;
      };
      output: {
        /** The BuiltWith social lookup entries returned for the request. */
        socials: Array<{
          /** The BuiltWith social lookup name. */
          name: string;
          /** The social results returned for the lookup. */
          results: Array<{
            /** The social profile URL matched by BuiltWith. */
            socialUrl: string;
            /** The domains mapped to the social profile. */
            domains: Array<{
              /** The root domain associated with the social profile. */
              root: string;
              /** The BuiltWith rank for the matched domain. */
              builtWithRank: number;
            }>;
          }>;
        }>;
      };
    };
  }
}
