import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one breach by its stable HIBP Name value. */
    "haveibeenpwned.get_breach": {
      input: {
        /**
         * Stable breach Name value to retrieve from HIBP.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Full breach model returned by Have I Been Pwned. */
        breach: {
          /**
           * Stable breach name returned by HIBP.
           * @minLength 1
           */
          Name: string;
          /**
           * Display title of the breach returned by HIBP.
           * @minLength 1
           */
          Title: string;
          /**
           * Primary domain associated with the breach.
           * @minLength 1
           */
          Domain: string;
          /**
           * Date when the breach occurred in YYYY-MM-DD format.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
           * @format date
           */
          BreachDate: string;
          /**
           * Timestamp when the breach was added to HIBP.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          AddedDate: string;
          /**
           * Timestamp when the breach was last modified in HIBP.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          ModifiedDate: string;
          /**
           * Number of breached accounts loaded into HIBP.
           * @minimum 0
           */
          PwnCount: number;
          /**
           * HTML description of the breach returned by HIBP.
           * @minLength 1
           */
          Description: string;
          /** Alphabetically ordered list of compromised data classes. */
          DataClasses: Array<string>;
          /** Whether HIBP marks the breach as verified. */
          IsVerified: boolean;
          /** Whether HIBP marks the breach as fabricated. */
          IsFabricated: boolean;
          /** Whether HIBP marks the breach as sensitive. */
          IsSensitive: boolean;
          /** Whether HIBP marks the breach as retired. */
          IsRetired: boolean;
          /** Whether HIBP marks the breach as a spam list. */
          IsSpamList: boolean;
          /** Whether HIBP marks the breach as malware-sourced. */
          IsMalware: boolean;
          /** Whether HIBP marks the breach as subscription-free. */
          IsSubscriptionFree: boolean;
          /** Whether HIBP marks the breach as sourced from stealer logs. */
          IsStealerLog: boolean;
          /**
           * Logo URI or asset path returned by HIBP for the breached service.
           * @minLength 1
           */
          LogoPath: string;
          /** Optional attribution string returned by HIBP. */
          Attribution: string | null;
        };
      };
    };
    /** Get the most recently added breach in Have I Been Pwned. */
    "haveibeenpwned.get_latest_breach": {
      input: Record<string, never>;
      output: {
        /** Full breach model returned by Have I Been Pwned. */
        breach: {
          /**
           * Stable breach name returned by HIBP.
           * @minLength 1
           */
          Name: string;
          /**
           * Display title of the breach returned by HIBP.
           * @minLength 1
           */
          Title: string;
          /**
           * Primary domain associated with the breach.
           * @minLength 1
           */
          Domain: string;
          /**
           * Date when the breach occurred in YYYY-MM-DD format.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
           * @format date
           */
          BreachDate: string;
          /**
           * Timestamp when the breach was added to HIBP.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          AddedDate: string;
          /**
           * Timestamp when the breach was last modified in HIBP.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          ModifiedDate: string;
          /**
           * Number of breached accounts loaded into HIBP.
           * @minimum 0
           */
          PwnCount: number;
          /**
           * HTML description of the breach returned by HIBP.
           * @minLength 1
           */
          Description: string;
          /** Alphabetically ordered list of compromised data classes. */
          DataClasses: Array<string>;
          /** Whether HIBP marks the breach as verified. */
          IsVerified: boolean;
          /** Whether HIBP marks the breach as fabricated. */
          IsFabricated: boolean;
          /** Whether HIBP marks the breach as sensitive. */
          IsSensitive: boolean;
          /** Whether HIBP marks the breach as retired. */
          IsRetired: boolean;
          /** Whether HIBP marks the breach as a spam list. */
          IsSpamList: boolean;
          /** Whether HIBP marks the breach as malware-sourced. */
          IsMalware: boolean;
          /** Whether HIBP marks the breach as subscription-free. */
          IsSubscriptionFree: boolean;
          /** Whether HIBP marks the breach as sourced from stealer logs. */
          IsStealerLog: boolean;
          /**
           * Logo URI or asset path returned by HIBP for the breached service.
           * @minLength 1
           */
          LogoPath: string;
          /** Optional attribution string returned by HIBP. */
          Attribution: string | null;
        };
      };
    };
    /** Get the current subscription details for the connected HIBP API key. */
    "haveibeenpwned.get_subscription_status": {
      input: Record<string, never>;
      output: {
        /** Subscription status returned by Have I Been Pwned. */
        subscription: {
          /**
           * Current HIBP subscription name.
           * @minLength 1
           */
          SubscriptionName: string;
          /**
           * Human-readable description of the current subscription.
           * @minLength 1
           */
          Description: string;
          /**
           * Timestamp when the current subscription expires.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          SubscribedUntil: string;
          /**
           * Allowed requests per minute for breach search APIs.
           * @minimum 0
           */
          Rpm: number;
          /**
           * Largest domain search size supported by the current subscription.
           * @minimum 0
           */
          DomainSearchMaxBreachedAccounts: number;
          /** Maximum number of breached domains allowed, or null when unlimited. */
          MaxBreachedDomains: number | null;
          /** Whether the subscription includes stealer log APIs. */
          IncludesStealerLogs: boolean;
          /** Whether the subscription includes bulk domain add APIs. */
          IncludesBulkDomainAdd: boolean;
          /** Whether the subscription includes automatic subdomain verification. */
          IncludesAutoSubdomainVerification: boolean;
          /** Whether the subscription allows adding customer domains. */
          IncludesCustomerDomains: boolean;
          /** Whether the subscription includes the k-anonymity breach search API. */
          IncludesKAnon: boolean;
        };
      };
    };
    /** List breaches in Have I Been Pwned and optionally filter by domain or spam-list flag. */
    "haveibeenpwned.list_breaches": {
      input: {
        /**
         * Optional domain filter passed to the HIBP breaches endpoint.
         * @minLength 1
         */
        domain?: string;
        /** Optional spam-list filter passed to the HIBP breaches endpoint. */
        isSpamList?: boolean;
      };
      output: {
        /** Breaches returned by Have I Been Pwned. */
        breaches: Array<{
          /**
           * Stable breach name returned by HIBP.
           * @minLength 1
           */
          Name: string;
          /**
           * Display title of the breach returned by HIBP.
           * @minLength 1
           */
          Title: string;
          /**
           * Primary domain associated with the breach.
           * @minLength 1
           */
          Domain: string;
          /**
           * Date when the breach occurred in YYYY-MM-DD format.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
           * @format date
           */
          BreachDate: string;
          /**
           * Timestamp when the breach was added to HIBP.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          AddedDate: string;
          /**
           * Timestamp when the breach was last modified in HIBP.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          ModifiedDate: string;
          /**
           * Number of breached accounts loaded into HIBP.
           * @minimum 0
           */
          PwnCount: number;
          /**
           * HTML description of the breach returned by HIBP.
           * @minLength 1
           */
          Description: string;
          /** Alphabetically ordered list of compromised data classes. */
          DataClasses: Array<string>;
          /** Whether HIBP marks the breach as verified. */
          IsVerified: boolean;
          /** Whether HIBP marks the breach as fabricated. */
          IsFabricated: boolean;
          /** Whether HIBP marks the breach as sensitive. */
          IsSensitive: boolean;
          /** Whether HIBP marks the breach as retired. */
          IsRetired: boolean;
          /** Whether HIBP marks the breach as a spam list. */
          IsSpamList: boolean;
          /** Whether HIBP marks the breach as malware-sourced. */
          IsMalware: boolean;
          /** Whether HIBP marks the breach as subscription-free. */
          IsSubscriptionFree: boolean;
          /** Whether HIBP marks the breach as sourced from stealer logs. */
          IsStealerLog: boolean;
          /**
           * Logo URI or asset path returned by HIBP for the breached service.
           * @minLength 1
           */
          LogoPath: string;
          /** Optional attribution string returned by HIBP. */
          Attribution: string | null;
        }>;
      };
    };
    /** List all data classes currently used by breaches in Have I Been Pwned. */
    "haveibeenpwned.list_data_classes": {
      input: Record<string, never>;
      output: {
        /** Alphabetically ordered HIBP data classes. */
        dataClasses: Array<string>;
      };
    };
    /** List paste exposures for an email address from Have I Been Pwned. */
    "haveibeenpwned.list_pastes_for_account": {
      input: {
        /**
         * Email address to search for paste exposures in HIBP.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        emailAddress: string;
      };
      output: {
        /** Paste exposures returned by HIBP for the requested email address. */
        pastes: Array<{
          /**
           * Paste service name returned by HIBP.
           * @minLength 1
           */
          Source: string;
          /**
           * Paste identifier returned by the source service.
           * @minLength 1
           */
          Id: string;
          /** Paste title returned by HIBP when present. */
          Title: string | null;
          /** Paste timestamp returned by HIBP when present. */
          Date: string | null;
          /**
           * Number of emails found in the paste.
           * @minimum 0
           */
          EmailCount: number;
        }>;
      };
    };
    /** Search full HIBP breach models for an email address, with optional domain and unverified-breach filters. */
    "haveibeenpwned.search_breached_account": {
      input: {
        /**
         * Email address to search in Have I Been Pwned.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        emailAddress: string;
        /**
         * Optional domain filter applied to the breached account search.
         * @minLength 1
         */
        domain?: string;
        /** Whether to include breaches flagged as unverified in the HIBP account search. */
        includeUnverified?: boolean;
      };
      output: {
        /** Full breach models returned by HIBP for the requested email address. */
        breaches: Array<{
          /**
           * Stable breach name returned by HIBP.
           * @minLength 1
           */
          Name: string;
          /**
           * Display title of the breach returned by HIBP.
           * @minLength 1
           */
          Title: string;
          /**
           * Primary domain associated with the breach.
           * @minLength 1
           */
          Domain: string;
          /**
           * Date when the breach occurred in YYYY-MM-DD format.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
           * @format date
           */
          BreachDate: string;
          /**
           * Timestamp when the breach was added to HIBP.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          AddedDate: string;
          /**
           * Timestamp when the breach was last modified in HIBP.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          ModifiedDate: string;
          /**
           * Number of breached accounts loaded into HIBP.
           * @minimum 0
           */
          PwnCount: number;
          /**
           * HTML description of the breach returned by HIBP.
           * @minLength 1
           */
          Description: string;
          /** Alphabetically ordered list of compromised data classes. */
          DataClasses: Array<string>;
          /** Whether HIBP marks the breach as verified. */
          IsVerified: boolean;
          /** Whether HIBP marks the breach as fabricated. */
          IsFabricated: boolean;
          /** Whether HIBP marks the breach as sensitive. */
          IsSensitive: boolean;
          /** Whether HIBP marks the breach as retired. */
          IsRetired: boolean;
          /** Whether HIBP marks the breach as a spam list. */
          IsSpamList: boolean;
          /** Whether HIBP marks the breach as malware-sourced. */
          IsMalware: boolean;
          /** Whether HIBP marks the breach as subscription-free. */
          IsSubscriptionFree: boolean;
          /** Whether HIBP marks the breach as sourced from stealer logs. */
          IsStealerLog: boolean;
          /**
           * Logo URI or asset path returned by HIBP for the breached service.
           * @minLength 1
           */
          LogoPath: string;
          /** Optional attribution string returned by HIBP. */
          Attribution: string | null;
        }>;
      };
    };
  }
}
