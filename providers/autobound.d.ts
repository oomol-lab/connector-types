import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Enrich one company with Autobound company-level signals. */
    "autobound.enrich_company": {
      input: {
        /**
         * The company domain to enrich, for example stripe.com.
         * @minLength 1
         * @pattern \S
         */
        domain?: string;
        /**
         * The company name to enrich when the domain is unavailable.
         * @minLength 1
         * @pattern \S
         */
        companyName?: string;
        /**
         * The company LinkedIn URL to enrich when other identifiers are unavailable.
         * @format uri
         */
        linkedinUrl?: string;
        /**
         * The signal types Autobound should include in the enrichment response.
         * @minItems 1
         */
        signalTypes?: Array<string>;
        /**
         * Only return signals detected on or after this timestamp.
         * @format date-time
         */
        detectedAfter?: string;
        /**
         * The maximum number of signals to return.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
      };
      output: {
        /** A normalized company object returned by Autobound. */
        company: {
          /**
           * The company name returned by Autobound.
           * @minLength 1
           * @pattern \S
           */
          name?: string;
          /**
           * The company domain returned by Autobound.
           * @minLength 1
           * @pattern \S
           */
          domain?: string;
          /**
           * The company LinkedIn URL returned by Autobound.
           * @minLength 1
           * @pattern \S
           */
          linkedinUrl?: string;
          /** The raw JSON object returned by Autobound. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The normalized signals returned for the company. */
        signals: Array<{
          /**
           * The Autobound signal identifier.
           * @minLength 1
           * @pattern \S
           */
          signalId?: string;
          /**
           * The canonical Autobound signal type slug or an accepted legacy alias.
           * @minLength 1
           * @pattern \S
           */
          signalType?: string;
          /**
           * The Autobound signal subtype.
           * @minLength 1
           * @pattern \S
           */
          signalSubtype?: string;
          /** The human-readable Autobound signal title. */
          signalName?: string;
          /**
           * When Autobound detected the signal.
           * @format date-time
           */
          detectedAt?: string;
          /** The Autobound signal association for filtering or classification. */
          association?: "company" | "contact";
          /** A normalized company object returned by Autobound. */
          company?: {
            /**
             * The company name returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            name?: string;
            /**
             * The company domain returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            domain?: string;
            /**
             * The company LinkedIn URL returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            linkedinUrl?: string;
            /** The raw JSON object returned by Autobound. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          } | null;
          /** A normalized contact object returned by Autobound. */
          contact?: {
            /**
             * The contact email returned by Autobound.
             * @format email
             */
            email?: string;
            /**
             * The contact LinkedIn URL returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            linkedinUrl?: string;
            /**
             * The contact name returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            name?: string;
            /**
             * The contact title returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            title?: string;
            /** A normalized company object returned by Autobound. */
            company?: {
              /**
               * The company name returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              name?: string;
              /**
               * The company domain returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              domain?: string;
              /**
               * The company LinkedIn URL returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              linkedinUrl?: string;
              /** The raw JSON object returned by Autobound. */
              raw?: Record<string, unknown>;
              [key: string]: unknown;
            };
            /** The raw JSON object returned by Autobound. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          } | null;
          /** The raw JSON object returned by Autobound. */
          data?: Record<string, unknown>;
          /** The raw JSON object returned by Autobound. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Summary counts for the returned Autobound signals. */
        signalSummary: {
          /**
           * The total number of signals returned in this response.
           * @minimum 0
           */
          total?: number;
          /** The count of returned signals grouped by signal type. */
          byType?: Record<string, number>;
          [key: string]: unknown;
        } | null;
        /** The Autobound coverage metadata for this enrichment. */
        coverage: Record<string, unknown> | null;
      };
    };
    /** Enrich one contact with Autobound contact-level signals and employer context. */
    "autobound.enrich_contact": {
      input: {
        /**
         * The contact email address to enrich.
         * @format email
         */
        contactEmail?: string;
        /**
         * The contact LinkedIn URL to enrich when the email is unavailable.
         * @format uri
         */
        contactLinkedinUrl?: string;
        /**
         * The signal types Autobound should include in the enrichment response.
         * @minItems 1
         */
        signalTypes?: Array<string>;
        /**
         * Only return signals detected on or after this timestamp.
         * @format date-time
         */
        detectedAfter?: string;
        /**
         * The maximum number of signals to return.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
      };
      output: {
        /** A normalized contact object returned by Autobound. */
        contact: {
          /**
           * The contact email returned by Autobound.
           * @format email
           */
          email?: string;
          /**
           * The contact LinkedIn URL returned by Autobound.
           * @minLength 1
           * @pattern \S
           */
          linkedinUrl?: string;
          /**
           * The contact name returned by Autobound.
           * @minLength 1
           * @pattern \S
           */
          name?: string;
          /**
           * The contact title returned by Autobound.
           * @minLength 1
           * @pattern \S
           */
          title?: string;
          /** A normalized company object returned by Autobound. */
          company?: {
            /**
             * The company name returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            name?: string;
            /**
             * The company domain returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            domain?: string;
            /**
             * The company LinkedIn URL returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            linkedinUrl?: string;
            /** The raw JSON object returned by Autobound. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** The raw JSON object returned by Autobound. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        } | null;
        /** A normalized company object returned by Autobound. */
        company: {
          /**
           * The company name returned by Autobound.
           * @minLength 1
           * @pattern \S
           */
          name?: string;
          /**
           * The company domain returned by Autobound.
           * @minLength 1
           * @pattern \S
           */
          domain?: string;
          /**
           * The company LinkedIn URL returned by Autobound.
           * @minLength 1
           * @pattern \S
           */
          linkedinUrl?: string;
          /** The raw JSON object returned by Autobound. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        } | null;
        /** The normalized signals returned for the contact. */
        contactSignals: Array<{
          /**
           * The Autobound signal identifier.
           * @minLength 1
           * @pattern \S
           */
          signalId?: string;
          /**
           * The canonical Autobound signal type slug or an accepted legacy alias.
           * @minLength 1
           * @pattern \S
           */
          signalType?: string;
          /**
           * The Autobound signal subtype.
           * @minLength 1
           * @pattern \S
           */
          signalSubtype?: string;
          /** The human-readable Autobound signal title. */
          signalName?: string;
          /**
           * When Autobound detected the signal.
           * @format date-time
           */
          detectedAt?: string;
          /** The Autobound signal association for filtering or classification. */
          association?: "company" | "contact";
          /** A normalized company object returned by Autobound. */
          company?: {
            /**
             * The company name returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            name?: string;
            /**
             * The company domain returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            domain?: string;
            /**
             * The company LinkedIn URL returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            linkedinUrl?: string;
            /** The raw JSON object returned by Autobound. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          } | null;
          /** A normalized contact object returned by Autobound. */
          contact?: {
            /**
             * The contact email returned by Autobound.
             * @format email
             */
            email?: string;
            /**
             * The contact LinkedIn URL returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            linkedinUrl?: string;
            /**
             * The contact name returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            name?: string;
            /**
             * The contact title returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            title?: string;
            /** A normalized company object returned by Autobound. */
            company?: {
              /**
               * The company name returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              name?: string;
              /**
               * The company domain returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              domain?: string;
              /**
               * The company LinkedIn URL returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              linkedinUrl?: string;
              /** The raw JSON object returned by Autobound. */
              raw?: Record<string, unknown>;
              [key: string]: unknown;
            };
            /** The raw JSON object returned by Autobound. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          } | null;
          /** The raw JSON object returned by Autobound. */
          data?: Record<string, unknown>;
          /** The raw JSON object returned by Autobound. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Summary counts for the returned Autobound signals. */
        signalSummary: {
          /**
           * The total number of signals returned in this response.
           * @minimum 0
           */
          total?: number;
          /** The count of returned signals grouped by signal type. */
          byType?: Record<string, number>;
          [key: string]: unknown;
        } | null;
        /**
         * The total number of returned contact-level signals.
         * @minimum 0
         */
        total: number | null;
        /** The Autobound coverage metadata for this enrichment. */
        coverage: Record<string, unknown> | null;
      };
    };
    /** Get the authenticated Autobound Signals account details and current credit balance. */
    "autobound.get_account": {
      input: Record<string, never>;
      output: {
        /** The normalized Autobound account details. */
        account: {
          /**
           * The Autobound customer identifier.
           * @minLength 1
           * @pattern \S
           */
          customerId?: string;
          /**
           * The Autobound customer name.
           * @minLength 1
           * @pattern \S
           */
          customerName?: string;
          /**
           * The Autobound requests-per-minute rate limit.
           * @minimum 0
           */
          rateLimit?: number;
          /**
           * The remaining Autobound signal credits.
           * @minimum 0
           */
          creditBalance?: number;
          /** The raw JSON object returned by Autobound. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List Autobound signal types and optionally include live counts and refresh cadence metadata. */
    "autobound.list_signal_types": {
      input: {
        /** Whether Autobound should include per-type counts and cadence metadata. */
        includeCounts?: boolean;
        /** The Autobound signal association for filtering or classification. */
        association?: "company" | "contact";
        /**
         * Only include type counts for signals detected on or after this timestamp.
         * @format date-time
         */
        since?: string;
      };
      output: {
        /** The normalized Autobound signal type entries. */
        signalTypes: Array<{
          /**
           * The canonical Autobound signal type slug or an accepted legacy alias.
           * @minLength 1
           * @pattern \S
           */
          type: string;
          /** The Autobound signal association for filtering or classification. */
          association?: "company" | "contact";
          /** The description for this Autobound signal type. */
          description?: string;
          /**
           * The number of available signals for this type.
           * @minimum 0
           */
          count?: number;
          /** The refresh cadence reported by Autobound. */
          refreshCadence?: "twice_daily" | "daily" | "weekly" | "biweekly" | "monthly" | "quarterly";
          /**
           * The nominal refresh period in hours.
           * @minimum 0
           */
          refreshHours?: number;
        }>;
        /**
         * The total live signal count across returned types.
         * @minimum 0
         */
        totalSignals?: number;
        /**
         * When Autobound counted the live signal totals.
         * @format date-time
         */
        countedAt?: string;
      };
    };
    /** Search companies that match Autobound company-level signal filters. */
    "autobound.search_companies": {
      input: {
        /**
         * The Autobound signal types that companies must match.
         * @minItems 1
         */
        signalTypes: Array<string>;
        /**
         * The Autobound signal subtype filter.
         * @minLength 1
         * @pattern \S
         */
        signalSubtype?: string;
        /**
         * Only include companies with matching signals detected on or after this timestamp.
         * @format date-time
         */
        detectedAfter?: string;
        /**
         * Only include companies with matching signals detected before this timestamp.
         * @format date-time
         */
        detectedBefore?: string;
        /**
         * The maximum number of companies to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         * @maximum 10000
         */
        offset?: number;
        /**
         * How many of each company's most recent signals to attach.
         * @minimum 1
         * @maximum 100
         */
        signalsPerEntity?: number;
      };
      output: {
        /** The companies returned by Autobound search. */
        companies: Array<{
          /**
           * The company name returned by Autobound.
           * @minLength 1
           * @pattern \S
           */
          name?: string;
          /**
           * The company domain returned by Autobound.
           * @minLength 1
           * @pattern \S
           */
          domain?: string;
          /**
           * The company LinkedIn URL returned by Autobound.
           * @minLength 1
           * @pattern \S
           */
          linkedinUrl?: string;
          /**
           * The number of matching signals for this company.
           * @minimum 0
           */
          signalCount?: number;
          /**
           * When the most recent matching signal was detected for this company.
           * @format date-time
           */
          mostRecentSignalAt?: string;
          /** The attached most recent signals for this company. */
          signals?: Array<{
            /**
             * The Autobound signal identifier.
             * @minLength 1
             * @pattern \S
             */
            signalId?: string;
            /**
             * The canonical Autobound signal type slug or an accepted legacy alias.
             * @minLength 1
             * @pattern \S
             */
            signalType?: string;
            /**
             * The Autobound signal subtype.
             * @minLength 1
             * @pattern \S
             */
            signalSubtype?: string;
            /** The human-readable Autobound signal title. */
            signalName?: string;
            /**
             * When Autobound detected the signal.
             * @format date-time
             */
            detectedAt?: string;
            /** The Autobound signal association for filtering or classification. */
            association?: "company" | "contact";
            /** A normalized company object returned by Autobound. */
            company?: {
              /**
               * The company name returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              name?: string;
              /**
               * The company domain returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              domain?: string;
              /**
               * The company LinkedIn URL returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              linkedinUrl?: string;
              /** The raw JSON object returned by Autobound. */
              raw?: Record<string, unknown>;
              [key: string]: unknown;
            } | null;
            /** A normalized contact object returned by Autobound. */
            contact?: {
              /**
               * The contact email returned by Autobound.
               * @format email
               */
              email?: string;
              /**
               * The contact LinkedIn URL returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              linkedinUrl?: string;
              /**
               * The contact name returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              name?: string;
              /**
               * The contact title returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              title?: string;
              /** A normalized company object returned by Autobound. */
              company?: {
                /**
                 * The company name returned by Autobound.
                 * @minLength 1
                 * @pattern \S
                 */
                name?: string;
                /**
                 * The company domain returned by Autobound.
                 * @minLength 1
                 * @pattern \S
                 */
                domain?: string;
                /**
                 * The company LinkedIn URL returned by Autobound.
                 * @minLength 1
                 * @pattern \S
                 */
                linkedinUrl?: string;
                /** The raw JSON object returned by Autobound. */
                raw?: Record<string, unknown>;
                [key: string]: unknown;
              };
              /** The raw JSON object returned by Autobound. */
              raw?: Record<string, unknown>;
              [key: string]: unknown;
            } | null;
            /** The raw JSON object returned by Autobound. */
            data?: Record<string, unknown>;
            /** The raw JSON object returned by Autobound. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The raw JSON object returned by Autobound. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /**
         * The result offset returned by Autobound.
         * @minimum 0
         */
        offset: number;
        /**
         * The result limit returned by Autobound.
         * @minimum 0
         */
        limit: number;
        /** Whether Autobound has another page of company results. */
        hasMore: boolean;
      };
    };
    /** Search contacts that match Autobound contact-level signal filters. */
    "autobound.search_contacts": {
      input: {
        /**
         * The Autobound signal types that contacts must match.
         * @minItems 1
         */
        signalTypes: Array<string>;
        /**
         * The Autobound signal subtype filter.
         * @minLength 1
         * @pattern \S
         */
        signalSubtype?: string;
        /**
         * Only include contacts with matching signals detected on or after this timestamp.
         * @format date-time
         */
        detectedAfter?: string;
        /**
         * Only include contacts with matching signals detected before this timestamp.
         * @format date-time
         */
        detectedBefore?: string;
        /**
         * The maximum number of contacts to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         * @maximum 10000
         */
        offset?: number;
        /**
         * How many of each contact's most recent signals to attach.
         * @minimum 1
         * @maximum 100
         */
        signalsPerEntity?: number;
      };
      output: {
        /** The contacts returned by Autobound search. */
        contacts: Array<{
          /**
           * The contact email returned by Autobound.
           * @format email
           */
          email?: string;
          /**
           * The contact LinkedIn URL returned by Autobound.
           * @minLength 1
           * @pattern \S
           */
          linkedinUrl?: string;
          /**
           * The contact name returned by Autobound.
           * @minLength 1
           * @pattern \S
           */
          name?: string;
          /**
           * The contact title returned by Autobound.
           * @minLength 1
           * @pattern \S
           */
          title?: string;
          /** A normalized company object returned by Autobound. */
          company?: {
            /**
             * The company name returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            name?: string;
            /**
             * The company domain returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            domain?: string;
            /**
             * The company LinkedIn URL returned by Autobound.
             * @minLength 1
             * @pattern \S
             */
            linkedinUrl?: string;
            /** The raw JSON object returned by Autobound. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /**
           * The number of matching signals for this contact.
           * @minimum 0
           */
          signalCount?: number;
          /**
           * When the most recent matching signal was detected for this contact.
           * @format date-time
           */
          mostRecentSignalAt?: string;
          /** The attached most recent signals for this contact. */
          signals?: Array<{
            /**
             * The Autobound signal identifier.
             * @minLength 1
             * @pattern \S
             */
            signalId?: string;
            /**
             * The canonical Autobound signal type slug or an accepted legacy alias.
             * @minLength 1
             * @pattern \S
             */
            signalType?: string;
            /**
             * The Autobound signal subtype.
             * @minLength 1
             * @pattern \S
             */
            signalSubtype?: string;
            /** The human-readable Autobound signal title. */
            signalName?: string;
            /**
             * When Autobound detected the signal.
             * @format date-time
             */
            detectedAt?: string;
            /** The Autobound signal association for filtering or classification. */
            association?: "company" | "contact";
            /** A normalized company object returned by Autobound. */
            company?: {
              /**
               * The company name returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              name?: string;
              /**
               * The company domain returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              domain?: string;
              /**
               * The company LinkedIn URL returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              linkedinUrl?: string;
              /** The raw JSON object returned by Autobound. */
              raw?: Record<string, unknown>;
              [key: string]: unknown;
            } | null;
            /** A normalized contact object returned by Autobound. */
            contact?: {
              /**
               * The contact email returned by Autobound.
               * @format email
               */
              email?: string;
              /**
               * The contact LinkedIn URL returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              linkedinUrl?: string;
              /**
               * The contact name returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              name?: string;
              /**
               * The contact title returned by Autobound.
               * @minLength 1
               * @pattern \S
               */
              title?: string;
              /** A normalized company object returned by Autobound. */
              company?: {
                /**
                 * The company name returned by Autobound.
                 * @minLength 1
                 * @pattern \S
                 */
                name?: string;
                /**
                 * The company domain returned by Autobound.
                 * @minLength 1
                 * @pattern \S
                 */
                domain?: string;
                /**
                 * The company LinkedIn URL returned by Autobound.
                 * @minLength 1
                 * @pattern \S
                 */
                linkedinUrl?: string;
                /** The raw JSON object returned by Autobound. */
                raw?: Record<string, unknown>;
                [key: string]: unknown;
              };
              /** The raw JSON object returned by Autobound. */
              raw?: Record<string, unknown>;
              [key: string]: unknown;
            } | null;
            /** The raw JSON object returned by Autobound. */
            data?: Record<string, unknown>;
            /** The raw JSON object returned by Autobound. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The raw JSON object returned by Autobound. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /**
         * The result offset returned by Autobound.
         * @minimum 0
         */
        offset: number;
        /**
         * The result limit returned by Autobound.
         * @minimum 0
         */
        limit: number;
        /** Whether Autobound has another page of contact results. */
        hasMore: boolean;
      };
    };
  }
}
