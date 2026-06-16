import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Look up the BIMI record for a domain and return the official MxToolbox response payload. */
    "mx_toolbox.lookup_bimi_record": {
      input: {
        /**
         * The bare domain whose BIMI record should be looked up, such as `example.com`.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        UID?: string | null;
        /** The type MxToolbox inferred for the lookup argument, such as domain or IP. */
        ArgumentType?: string;
        /** The command that MxToolbox executed. */
        Command?: string;
        /** The domain, IP address, host, or other target that MxToolbox queried. */
        CommandArgument?: string;
        /** The timestamp when MxToolbox recorded the lookup result. */
        TimeRecorded?: string;
        ReportingNameServer?: string | null;
        /** The lookup duration returned by MxToolbox, typically in milliseconds. */
        TimeToComplete?: string;
        RelatedIP?: string | null;
        /** The numeric DNS resource record type returned by MxToolbox. */
        ResourceRecordType?: number;
        /** Whether MxToolbox treated the lookup target as an empty subdomain. */
        IsEmptySubDomain?: boolean;
        /** Whether MxToolbox marked the lookup result as transitioned. */
        IsTransitioned?: boolean;
        /** The command-specific SPF subaction detail returned by MxToolbox. */
        SPF_Subaction_Detail?: unknown;
        /** The raw records payload returned by MxToolbox for some commands. */
        Records?: unknown;
        /** Whether MxToolbox treated the target as an endpoint. */
        IsEndpoint?: boolean;
        /** Whether the authenticated account has subscriptions for this target. */
        HasSubscriptions?: boolean;
        /** The alert group subscription identifier returned by MxToolbox. */
        AlertgroupSubscriptionId?: unknown;
        /** The failed checks returned by MxToolbox. */
        Failed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The warning checks returned by MxToolbox. */
        Warnings?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The passed checks returned by MxToolbox. */
        Passed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The timeout items returned by MxToolbox. */
        Timeouts?: Array<unknown>;
        /** The error items returned by MxToolbox. */
        Errors?: Array<unknown>;
        /** Whether MxToolbox marked the response as an error. */
        IsError?: boolean;
        /** The command-specific information returned by MxToolbox. */
        Information?: Array<Record<string, unknown>> | string;
        /** The multi-information entries returned by MxToolbox. */
        MultiInformation?: Array<Record<string, unknown>>;
        /** The transcript entries returned by MxToolbox. */
        Transcript?: Array<Record<string, unknown> | string>;
        /** The MX reputation score returned by MxToolbox. */
        MxRep?: number;
        EmailServiceProvider?: string | null;
        DnsServiceProvider?: string | null;
        DnsServiceProviderIdentifier?: string | null;
        /** Additional command-specific custom data returned by MxToolbox. */
        CustomData?: unknown;
        /** The related lookup suggestions returned by MxToolbox. */
        RelatedLookups?: Array<{
          /**
           * The human-readable name of the related lookup.
           * @minLength 1
           */
          Name?: string;
          /**
           * The related lookup URL returned by MxToolbox.
           * @minLength 1
           */
          URL?: string;
          /**
           * The related lookup command returned by MxToolbox.
           * @minLength 1
           */
          Command?: string;
          /**
           * The argument that MxToolbox suggests for the related lookup.
           * @minLength 1
           */
          CommandArgument?: string;
          [key: string]: unknown;
        }>;
        /** The queried domain returned by MxToolbox for HTTP lookups. */
        Domain?: string;
        /** The resolved IP address returned by MxToolbox for HTTP lookups. */
        IPAddress?: string;
        /** Whether MxToolbox marked the HTTP lookup as successful. */
        IsSuccess?: boolean;
        /** Whether the resolved host changed during the HTTP lookup. */
        HostChanged?: boolean;
        /** The detailed HTTP test results returned by MxToolbox. */
        ResultArray?: Array<{
          /**
           * The name of one HTTP test result returned by MxToolbox.
           * @minLength 1
           */
          Name?: string;
          /**
           * The outcome text for one HTTP test result.
           * @minLength 1
           */
          Result?: string;
          /** The TTL or timing detail returned by MxToolbox for one HTTP test result. */
          TTL?: string;
          [key: string]: unknown;
        }>;
        /** The HTTP error message returned by MxToolbox when available. */
        ErrorMessage?: string;
        /** The HTTP response time returned by MxToolbox. */
        ResponseTime?: string;
        [key: string]: unknown;
      };
    };
    /** Check whether a domain or IP is listed on blacklists and return the official MxToolbox response payload. */
    "mx_toolbox.lookup_blacklist": {
      input: {
        /**
         * The bare domain or IP address that should be checked against blacklists.
         * @minLength 1
         */
        domain_or_ip: string;
      };
      output: {
        UID?: string | null;
        /** The type MxToolbox inferred for the lookup argument, such as domain or IP. */
        ArgumentType?: string;
        /** The command that MxToolbox executed. */
        Command?: string;
        /** The domain, IP address, host, or other target that MxToolbox queried. */
        CommandArgument?: string;
        /** The timestamp when MxToolbox recorded the lookup result. */
        TimeRecorded?: string;
        ReportingNameServer?: string | null;
        /** The lookup duration returned by MxToolbox, typically in milliseconds. */
        TimeToComplete?: string;
        RelatedIP?: string | null;
        /** The numeric DNS resource record type returned by MxToolbox. */
        ResourceRecordType?: number;
        /** Whether MxToolbox treated the lookup target as an empty subdomain. */
        IsEmptySubDomain?: boolean;
        /** Whether MxToolbox marked the lookup result as transitioned. */
        IsTransitioned?: boolean;
        /** The command-specific SPF subaction detail returned by MxToolbox. */
        SPF_Subaction_Detail?: unknown;
        /** The raw records payload returned by MxToolbox for some commands. */
        Records?: unknown;
        /** Whether MxToolbox treated the target as an endpoint. */
        IsEndpoint?: boolean;
        /** Whether the authenticated account has subscriptions for this target. */
        HasSubscriptions?: boolean;
        /** The alert group subscription identifier returned by MxToolbox. */
        AlertgroupSubscriptionId?: unknown;
        /** The failed checks returned by MxToolbox. */
        Failed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The warning checks returned by MxToolbox. */
        Warnings?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The passed checks returned by MxToolbox. */
        Passed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The timeout items returned by MxToolbox. */
        Timeouts?: Array<unknown>;
        /** The error items returned by MxToolbox. */
        Errors?: Array<unknown>;
        /** Whether MxToolbox marked the response as an error. */
        IsError?: boolean;
        /** The command-specific information returned by MxToolbox. */
        Information?: Array<Record<string, unknown>> | string;
        /** The multi-information entries returned by MxToolbox. */
        MultiInformation?: Array<Record<string, unknown>>;
        /** The transcript entries returned by MxToolbox. */
        Transcript?: Array<Record<string, unknown> | string>;
        /** The MX reputation score returned by MxToolbox. */
        MxRep?: number;
        EmailServiceProvider?: string | null;
        DnsServiceProvider?: string | null;
        DnsServiceProviderIdentifier?: string | null;
        /** Additional command-specific custom data returned by MxToolbox. */
        CustomData?: unknown;
        /** The related lookup suggestions returned by MxToolbox. */
        RelatedLookups?: Array<{
          /**
           * The human-readable name of the related lookup.
           * @minLength 1
           */
          Name?: string;
          /**
           * The related lookup URL returned by MxToolbox.
           * @minLength 1
           */
          URL?: string;
          /**
           * The related lookup command returned by MxToolbox.
           * @minLength 1
           */
          Command?: string;
          /**
           * The argument that MxToolbox suggests for the related lookup.
           * @minLength 1
           */
          CommandArgument?: string;
          [key: string]: unknown;
        }>;
        /** The queried domain returned by MxToolbox for HTTP lookups. */
        Domain?: string;
        /** The resolved IP address returned by MxToolbox for HTTP lookups. */
        IPAddress?: string;
        /** Whether MxToolbox marked the HTTP lookup as successful. */
        IsSuccess?: boolean;
        /** Whether the resolved host changed during the HTTP lookup. */
        HostChanged?: boolean;
        /** The detailed HTTP test results returned by MxToolbox. */
        ResultArray?: Array<{
          /**
           * The name of one HTTP test result returned by MxToolbox.
           * @minLength 1
           */
          Name?: string;
          /**
           * The outcome text for one HTTP test result.
           * @minLength 1
           */
          Result?: string;
          /** The TTL or timing detail returned by MxToolbox for one HTTP test result. */
          TTL?: string;
          [key: string]: unknown;
        }>;
        /** The HTTP error message returned by MxToolbox when available. */
        ErrorMessage?: string;
        /** The HTTP response time returned by MxToolbox. */
        ResponseTime?: string;
        [key: string]: unknown;
      };
    };
    /** Look up one DKIM record and return the official MxToolbox response payload. */
    "mx_toolbox.lookup_dkim": {
      input: {
        /**
         * The full DKIM DNS hostname in the form `selector._domainkey.domain`, such as `default._domainkey.example.com`.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        UID?: string | null;
        /** The type MxToolbox inferred for the lookup argument, such as domain or IP. */
        ArgumentType?: string;
        /** The command that MxToolbox executed. */
        Command?: string;
        /** The domain, IP address, host, or other target that MxToolbox queried. */
        CommandArgument?: string;
        /** The timestamp when MxToolbox recorded the lookup result. */
        TimeRecorded?: string;
        ReportingNameServer?: string | null;
        /** The lookup duration returned by MxToolbox, typically in milliseconds. */
        TimeToComplete?: string;
        RelatedIP?: string | null;
        /** The numeric DNS resource record type returned by MxToolbox. */
        ResourceRecordType?: number;
        /** Whether MxToolbox treated the lookup target as an empty subdomain. */
        IsEmptySubDomain?: boolean;
        /** Whether MxToolbox marked the lookup result as transitioned. */
        IsTransitioned?: boolean;
        /** The command-specific SPF subaction detail returned by MxToolbox. */
        SPF_Subaction_Detail?: unknown;
        /** The raw records payload returned by MxToolbox for some commands. */
        Records?: unknown;
        /** Whether MxToolbox treated the target as an endpoint. */
        IsEndpoint?: boolean;
        /** Whether the authenticated account has subscriptions for this target. */
        HasSubscriptions?: boolean;
        /** The alert group subscription identifier returned by MxToolbox. */
        AlertgroupSubscriptionId?: unknown;
        /** The failed checks returned by MxToolbox. */
        Failed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The warning checks returned by MxToolbox. */
        Warnings?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The passed checks returned by MxToolbox. */
        Passed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The timeout items returned by MxToolbox. */
        Timeouts?: Array<unknown>;
        /** The error items returned by MxToolbox. */
        Errors?: Array<unknown>;
        /** Whether MxToolbox marked the response as an error. */
        IsError?: boolean;
        /** The command-specific information returned by MxToolbox. */
        Information?: Array<Record<string, unknown>> | string;
        /** The multi-information entries returned by MxToolbox. */
        MultiInformation?: Array<Record<string, unknown>>;
        /** The transcript entries returned by MxToolbox. */
        Transcript?: Array<Record<string, unknown> | string>;
        /** The MX reputation score returned by MxToolbox. */
        MxRep?: number;
        EmailServiceProvider?: string | null;
        DnsServiceProvider?: string | null;
        DnsServiceProviderIdentifier?: string | null;
        /** Additional command-specific custom data returned by MxToolbox. */
        CustomData?: unknown;
        /** The related lookup suggestions returned by MxToolbox. */
        RelatedLookups?: Array<{
          /**
           * The human-readable name of the related lookup.
           * @minLength 1
           */
          Name?: string;
          /**
           * The related lookup URL returned by MxToolbox.
           * @minLength 1
           */
          URL?: string;
          /**
           * The related lookup command returned by MxToolbox.
           * @minLength 1
           */
          Command?: string;
          /**
           * The argument that MxToolbox suggests for the related lookup.
           * @minLength 1
           */
          CommandArgument?: string;
          [key: string]: unknown;
        }>;
        /** The queried domain returned by MxToolbox for HTTP lookups. */
        Domain?: string;
        /** The resolved IP address returned by MxToolbox for HTTP lookups. */
        IPAddress?: string;
        /** Whether MxToolbox marked the HTTP lookup as successful. */
        IsSuccess?: boolean;
        /** Whether the resolved host changed during the HTTP lookup. */
        HostChanged?: boolean;
        /** The detailed HTTP test results returned by MxToolbox. */
        ResultArray?: Array<{
          /**
           * The name of one HTTP test result returned by MxToolbox.
           * @minLength 1
           */
          Name?: string;
          /**
           * The outcome text for one HTTP test result.
           * @minLength 1
           */
          Result?: string;
          /** The TTL or timing detail returned by MxToolbox for one HTTP test result. */
          TTL?: string;
          [key: string]: unknown;
        }>;
        /** The HTTP error message returned by MxToolbox when available. */
        ErrorMessage?: string;
        /** The HTTP response time returned by MxToolbox. */
        ResponseTime?: string;
        [key: string]: unknown;
      };
    };
    /** Look up the DMARC record for a domain and return the official MxToolbox response payload. */
    "mx_toolbox.lookup_dmarc": {
      input: {
        /**
         * The bare domain whose DMARC record should be looked up, such as `example.com`.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        UID?: string | null;
        /** The type MxToolbox inferred for the lookup argument, such as domain or IP. */
        ArgumentType?: string;
        /** The command that MxToolbox executed. */
        Command?: string;
        /** The domain, IP address, host, or other target that MxToolbox queried. */
        CommandArgument?: string;
        /** The timestamp when MxToolbox recorded the lookup result. */
        TimeRecorded?: string;
        ReportingNameServer?: string | null;
        /** The lookup duration returned by MxToolbox, typically in milliseconds. */
        TimeToComplete?: string;
        RelatedIP?: string | null;
        /** The numeric DNS resource record type returned by MxToolbox. */
        ResourceRecordType?: number;
        /** Whether MxToolbox treated the lookup target as an empty subdomain. */
        IsEmptySubDomain?: boolean;
        /** Whether MxToolbox marked the lookup result as transitioned. */
        IsTransitioned?: boolean;
        /** The command-specific SPF subaction detail returned by MxToolbox. */
        SPF_Subaction_Detail?: unknown;
        /** The raw records payload returned by MxToolbox for some commands. */
        Records?: unknown;
        /** Whether MxToolbox treated the target as an endpoint. */
        IsEndpoint?: boolean;
        /** Whether the authenticated account has subscriptions for this target. */
        HasSubscriptions?: boolean;
        /** The alert group subscription identifier returned by MxToolbox. */
        AlertgroupSubscriptionId?: unknown;
        /** The failed checks returned by MxToolbox. */
        Failed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The warning checks returned by MxToolbox. */
        Warnings?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The passed checks returned by MxToolbox. */
        Passed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The timeout items returned by MxToolbox. */
        Timeouts?: Array<unknown>;
        /** The error items returned by MxToolbox. */
        Errors?: Array<unknown>;
        /** Whether MxToolbox marked the response as an error. */
        IsError?: boolean;
        /** The command-specific information returned by MxToolbox. */
        Information?: Array<Record<string, unknown>> | string;
        /** The multi-information entries returned by MxToolbox. */
        MultiInformation?: Array<Record<string, unknown>>;
        /** The transcript entries returned by MxToolbox. */
        Transcript?: Array<Record<string, unknown> | string>;
        /** The MX reputation score returned by MxToolbox. */
        MxRep?: number;
        EmailServiceProvider?: string | null;
        DnsServiceProvider?: string | null;
        DnsServiceProviderIdentifier?: string | null;
        /** Additional command-specific custom data returned by MxToolbox. */
        CustomData?: unknown;
        /** The related lookup suggestions returned by MxToolbox. */
        RelatedLookups?: Array<{
          /**
           * The human-readable name of the related lookup.
           * @minLength 1
           */
          Name?: string;
          /**
           * The related lookup URL returned by MxToolbox.
           * @minLength 1
           */
          URL?: string;
          /**
           * The related lookup command returned by MxToolbox.
           * @minLength 1
           */
          Command?: string;
          /**
           * The argument that MxToolbox suggests for the related lookup.
           * @minLength 1
           */
          CommandArgument?: string;
          [key: string]: unknown;
        }>;
        /** The queried domain returned by MxToolbox for HTTP lookups. */
        Domain?: string;
        /** The resolved IP address returned by MxToolbox for HTTP lookups. */
        IPAddress?: string;
        /** Whether MxToolbox marked the HTTP lookup as successful. */
        IsSuccess?: boolean;
        /** Whether the resolved host changed during the HTTP lookup. */
        HostChanged?: boolean;
        /** The detailed HTTP test results returned by MxToolbox. */
        ResultArray?: Array<{
          /**
           * The name of one HTTP test result returned by MxToolbox.
           * @minLength 1
           */
          Name?: string;
          /**
           * The outcome text for one HTTP test result.
           * @minLength 1
           */
          Result?: string;
          /** The TTL or timing detail returned by MxToolbox for one HTTP test result. */
          TTL?: string;
          [key: string]: unknown;
        }>;
        /** The HTTP error message returned by MxToolbox when available. */
        ErrorMessage?: string;
        /** The HTTP response time returned by MxToolbox. */
        ResponseTime?: string;
        [key: string]: unknown;
      };
    };
    /** Perform a comprehensive DNS lookup for a domain and return the official MxToolbox response payload. */
    "mx_toolbox.lookup_dns": {
      input: {
        /**
         * The bare domain whose DNS records and health checks should be looked up, such as `google.com`.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        UID?: string | null;
        /** The type MxToolbox inferred for the lookup argument, such as domain or IP. */
        ArgumentType?: string;
        /** The command that MxToolbox executed. */
        Command?: string;
        /** The domain, IP address, host, or other target that MxToolbox queried. */
        CommandArgument?: string;
        /** The timestamp when MxToolbox recorded the lookup result. */
        TimeRecorded?: string;
        ReportingNameServer?: string | null;
        /** The lookup duration returned by MxToolbox, typically in milliseconds. */
        TimeToComplete?: string;
        RelatedIP?: string | null;
        /** The numeric DNS resource record type returned by MxToolbox. */
        ResourceRecordType?: number;
        /** Whether MxToolbox treated the lookup target as an empty subdomain. */
        IsEmptySubDomain?: boolean;
        /** Whether MxToolbox marked the lookup result as transitioned. */
        IsTransitioned?: boolean;
        /** The command-specific SPF subaction detail returned by MxToolbox. */
        SPF_Subaction_Detail?: unknown;
        /** The raw records payload returned by MxToolbox for some commands. */
        Records?: unknown;
        /** Whether MxToolbox treated the target as an endpoint. */
        IsEndpoint?: boolean;
        /** Whether the authenticated account has subscriptions for this target. */
        HasSubscriptions?: boolean;
        /** The alert group subscription identifier returned by MxToolbox. */
        AlertgroupSubscriptionId?: unknown;
        /** The failed checks returned by MxToolbox. */
        Failed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The warning checks returned by MxToolbox. */
        Warnings?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The passed checks returned by MxToolbox. */
        Passed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The timeout items returned by MxToolbox. */
        Timeouts?: Array<unknown>;
        /** The error items returned by MxToolbox. */
        Errors?: Array<unknown>;
        /** Whether MxToolbox marked the response as an error. */
        IsError?: boolean;
        /** The command-specific information returned by MxToolbox. */
        Information?: Array<Record<string, unknown>> | string;
        /** The multi-information entries returned by MxToolbox. */
        MultiInformation?: Array<Record<string, unknown>>;
        /** The transcript entries returned by MxToolbox. */
        Transcript?: Array<Record<string, unknown> | string>;
        /** The MX reputation score returned by MxToolbox. */
        MxRep?: number;
        EmailServiceProvider?: string | null;
        DnsServiceProvider?: string | null;
        DnsServiceProviderIdentifier?: string | null;
        /** Additional command-specific custom data returned by MxToolbox. */
        CustomData?: unknown;
        /** The related lookup suggestions returned by MxToolbox. */
        RelatedLookups?: Array<{
          /**
           * The human-readable name of the related lookup.
           * @minLength 1
           */
          Name?: string;
          /**
           * The related lookup URL returned by MxToolbox.
           * @minLength 1
           */
          URL?: string;
          /**
           * The related lookup command returned by MxToolbox.
           * @minLength 1
           */
          Command?: string;
          /**
           * The argument that MxToolbox suggests for the related lookup.
           * @minLength 1
           */
          CommandArgument?: string;
          [key: string]: unknown;
        }>;
        /** The queried domain returned by MxToolbox for HTTP lookups. */
        Domain?: string;
        /** The resolved IP address returned by MxToolbox for HTTP lookups. */
        IPAddress?: string;
        /** Whether MxToolbox marked the HTTP lookup as successful. */
        IsSuccess?: boolean;
        /** Whether the resolved host changed during the HTTP lookup. */
        HostChanged?: boolean;
        /** The detailed HTTP test results returned by MxToolbox. */
        ResultArray?: Array<{
          /**
           * The name of one HTTP test result returned by MxToolbox.
           * @minLength 1
           */
          Name?: string;
          /**
           * The outcome text for one HTTP test result.
           * @minLength 1
           */
          Result?: string;
          /** The TTL or timing detail returned by MxToolbox for one HTTP test result. */
          TTL?: string;
          [key: string]: unknown;
        }>;
        /** The HTTP error message returned by MxToolbox when available. */
        ErrorMessage?: string;
        /** The HTTP response time returned by MxToolbox. */
        ResponseTime?: string;
        [key: string]: unknown;
      };
    };
    /** Run an HTTP lookup for a domain and return the official MxToolbox response payload. */
    "mx_toolbox.lookup_http": {
      input: {
        /**
         * The bare domain whose HTTP diagnostics should be run, such as `example.com`.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        UID?: string | null;
        /** The type MxToolbox inferred for the lookup argument, such as domain or IP. */
        ArgumentType?: string;
        /** The command that MxToolbox executed. */
        Command?: string;
        /** The domain, IP address, host, or other target that MxToolbox queried. */
        CommandArgument?: string;
        /** The timestamp when MxToolbox recorded the lookup result. */
        TimeRecorded?: string;
        ReportingNameServer?: string | null;
        /** The lookup duration returned by MxToolbox, typically in milliseconds. */
        TimeToComplete?: string;
        RelatedIP?: string | null;
        /** The numeric DNS resource record type returned by MxToolbox. */
        ResourceRecordType?: number;
        /** Whether MxToolbox treated the lookup target as an empty subdomain. */
        IsEmptySubDomain?: boolean;
        /** Whether MxToolbox marked the lookup result as transitioned. */
        IsTransitioned?: boolean;
        /** The command-specific SPF subaction detail returned by MxToolbox. */
        SPF_Subaction_Detail?: unknown;
        /** The raw records payload returned by MxToolbox for some commands. */
        Records?: unknown;
        /** Whether MxToolbox treated the target as an endpoint. */
        IsEndpoint?: boolean;
        /** Whether the authenticated account has subscriptions for this target. */
        HasSubscriptions?: boolean;
        /** The alert group subscription identifier returned by MxToolbox. */
        AlertgroupSubscriptionId?: unknown;
        /** The failed checks returned by MxToolbox. */
        Failed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The warning checks returned by MxToolbox. */
        Warnings?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The passed checks returned by MxToolbox. */
        Passed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The timeout items returned by MxToolbox. */
        Timeouts?: Array<unknown>;
        /** The error items returned by MxToolbox. */
        Errors?: Array<unknown>;
        /** Whether MxToolbox marked the response as an error. */
        IsError?: boolean;
        /** The command-specific information returned by MxToolbox. */
        Information?: Array<Record<string, unknown>> | string;
        /** The multi-information entries returned by MxToolbox. */
        MultiInformation?: Array<Record<string, unknown>>;
        /** The transcript entries returned by MxToolbox. */
        Transcript?: Array<Record<string, unknown> | string>;
        /** The MX reputation score returned by MxToolbox. */
        MxRep?: number;
        EmailServiceProvider?: string | null;
        DnsServiceProvider?: string | null;
        DnsServiceProviderIdentifier?: string | null;
        /** Additional command-specific custom data returned by MxToolbox. */
        CustomData?: unknown;
        /** The related lookup suggestions returned by MxToolbox. */
        RelatedLookups?: Array<{
          /**
           * The human-readable name of the related lookup.
           * @minLength 1
           */
          Name?: string;
          /**
           * The related lookup URL returned by MxToolbox.
           * @minLength 1
           */
          URL?: string;
          /**
           * The related lookup command returned by MxToolbox.
           * @minLength 1
           */
          Command?: string;
          /**
           * The argument that MxToolbox suggests for the related lookup.
           * @minLength 1
           */
          CommandArgument?: string;
          [key: string]: unknown;
        }>;
        /** The queried domain returned by MxToolbox for HTTP lookups. */
        Domain?: string;
        /** The resolved IP address returned by MxToolbox for HTTP lookups. */
        IPAddress?: string;
        /** Whether MxToolbox marked the HTTP lookup as successful. */
        IsSuccess?: boolean;
        /** Whether the resolved host changed during the HTTP lookup. */
        HostChanged?: boolean;
        /** The detailed HTTP test results returned by MxToolbox. */
        ResultArray?: Array<{
          /**
           * The name of one HTTP test result returned by MxToolbox.
           * @minLength 1
           */
          Name?: string;
          /**
           * The outcome text for one HTTP test result.
           * @minLength 1
           */
          Result?: string;
          /** The TTL or timing detail returned by MxToolbox for one HTTP test result. */
          TTL?: string;
          [key: string]: unknown;
        }>;
        /** The HTTP error message returned by MxToolbox when available. */
        ErrorMessage?: string;
        /** The HTTP response time returned by MxToolbox. */
        ResponseTime?: string;
        [key: string]: unknown;
      };
    };
    /** Look up the MTA-STS record for a domain and return the official MxToolbox response payload. */
    "mx_toolbox.lookup_mta_sts_record": {
      input: {
        /**
         * The bare domain whose MTA-STS record should be looked up, such as `example.com`.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        UID?: string | null;
        /** The type MxToolbox inferred for the lookup argument, such as domain or IP. */
        ArgumentType?: string;
        /** The command that MxToolbox executed. */
        Command?: string;
        /** The domain, IP address, host, or other target that MxToolbox queried. */
        CommandArgument?: string;
        /** The timestamp when MxToolbox recorded the lookup result. */
        TimeRecorded?: string;
        ReportingNameServer?: string | null;
        /** The lookup duration returned by MxToolbox, typically in milliseconds. */
        TimeToComplete?: string;
        RelatedIP?: string | null;
        /** The numeric DNS resource record type returned by MxToolbox. */
        ResourceRecordType?: number;
        /** Whether MxToolbox treated the lookup target as an empty subdomain. */
        IsEmptySubDomain?: boolean;
        /** Whether MxToolbox marked the lookup result as transitioned. */
        IsTransitioned?: boolean;
        /** The command-specific SPF subaction detail returned by MxToolbox. */
        SPF_Subaction_Detail?: unknown;
        /** The raw records payload returned by MxToolbox for some commands. */
        Records?: unknown;
        /** Whether MxToolbox treated the target as an endpoint. */
        IsEndpoint?: boolean;
        /** Whether the authenticated account has subscriptions for this target. */
        HasSubscriptions?: boolean;
        /** The alert group subscription identifier returned by MxToolbox. */
        AlertgroupSubscriptionId?: unknown;
        /** The failed checks returned by MxToolbox. */
        Failed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The warning checks returned by MxToolbox. */
        Warnings?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The passed checks returned by MxToolbox. */
        Passed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The timeout items returned by MxToolbox. */
        Timeouts?: Array<unknown>;
        /** The error items returned by MxToolbox. */
        Errors?: Array<unknown>;
        /** Whether MxToolbox marked the response as an error. */
        IsError?: boolean;
        /** The command-specific information returned by MxToolbox. */
        Information?: Array<Record<string, unknown>> | string;
        /** The multi-information entries returned by MxToolbox. */
        MultiInformation?: Array<Record<string, unknown>>;
        /** The transcript entries returned by MxToolbox. */
        Transcript?: Array<Record<string, unknown> | string>;
        /** The MX reputation score returned by MxToolbox. */
        MxRep?: number;
        EmailServiceProvider?: string | null;
        DnsServiceProvider?: string | null;
        DnsServiceProviderIdentifier?: string | null;
        /** Additional command-specific custom data returned by MxToolbox. */
        CustomData?: unknown;
        /** The related lookup suggestions returned by MxToolbox. */
        RelatedLookups?: Array<{
          /**
           * The human-readable name of the related lookup.
           * @minLength 1
           */
          Name?: string;
          /**
           * The related lookup URL returned by MxToolbox.
           * @minLength 1
           */
          URL?: string;
          /**
           * The related lookup command returned by MxToolbox.
           * @minLength 1
           */
          Command?: string;
          /**
           * The argument that MxToolbox suggests for the related lookup.
           * @minLength 1
           */
          CommandArgument?: string;
          [key: string]: unknown;
        }>;
        /** The queried domain returned by MxToolbox for HTTP lookups. */
        Domain?: string;
        /** The resolved IP address returned by MxToolbox for HTTP lookups. */
        IPAddress?: string;
        /** Whether MxToolbox marked the HTTP lookup as successful. */
        IsSuccess?: boolean;
        /** Whether the resolved host changed during the HTTP lookup. */
        HostChanged?: boolean;
        /** The detailed HTTP test results returned by MxToolbox. */
        ResultArray?: Array<{
          /**
           * The name of one HTTP test result returned by MxToolbox.
           * @minLength 1
           */
          Name?: string;
          /**
           * The outcome text for one HTTP test result.
           * @minLength 1
           */
          Result?: string;
          /** The TTL or timing detail returned by MxToolbox for one HTTP test result. */
          TTL?: string;
          [key: string]: unknown;
        }>;
        /** The HTTP error message returned by MxToolbox when available. */
        ErrorMessage?: string;
        /** The HTTP response time returned by MxToolbox. */
        ResponseTime?: string;
        [key: string]: unknown;
      };
    };
    /** Look up MX records for a domain and return the official MxToolbox response payload. */
    "mx_toolbox.lookup_mx": {
      input: {
        /**
         * The bare domain whose MX records should be looked up, such as `example.com`.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        UID?: string | null;
        /** The type MxToolbox inferred for the lookup argument, such as domain or IP. */
        ArgumentType?: string;
        /** The command that MxToolbox executed. */
        Command?: string;
        /** The domain, IP address, host, or other target that MxToolbox queried. */
        CommandArgument?: string;
        /** The timestamp when MxToolbox recorded the lookup result. */
        TimeRecorded?: string;
        ReportingNameServer?: string | null;
        /** The lookup duration returned by MxToolbox, typically in milliseconds. */
        TimeToComplete?: string;
        RelatedIP?: string | null;
        /** The numeric DNS resource record type returned by MxToolbox. */
        ResourceRecordType?: number;
        /** Whether MxToolbox treated the lookup target as an empty subdomain. */
        IsEmptySubDomain?: boolean;
        /** Whether MxToolbox marked the lookup result as transitioned. */
        IsTransitioned?: boolean;
        /** The command-specific SPF subaction detail returned by MxToolbox. */
        SPF_Subaction_Detail?: unknown;
        /** The raw records payload returned by MxToolbox for some commands. */
        Records?: unknown;
        /** Whether MxToolbox treated the target as an endpoint. */
        IsEndpoint?: boolean;
        /** Whether the authenticated account has subscriptions for this target. */
        HasSubscriptions?: boolean;
        /** The alert group subscription identifier returned by MxToolbox. */
        AlertgroupSubscriptionId?: unknown;
        /** The failed checks returned by MxToolbox. */
        Failed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The warning checks returned by MxToolbox. */
        Warnings?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The passed checks returned by MxToolbox. */
        Passed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The timeout items returned by MxToolbox. */
        Timeouts?: Array<unknown>;
        /** The error items returned by MxToolbox. */
        Errors?: Array<unknown>;
        /** Whether MxToolbox marked the response as an error. */
        IsError?: boolean;
        /** The command-specific information returned by MxToolbox. */
        Information?: Array<Record<string, unknown>> | string;
        /** The multi-information entries returned by MxToolbox. */
        MultiInformation?: Array<Record<string, unknown>>;
        /** The transcript entries returned by MxToolbox. */
        Transcript?: Array<Record<string, unknown> | string>;
        /** The MX reputation score returned by MxToolbox. */
        MxRep?: number;
        EmailServiceProvider?: string | null;
        DnsServiceProvider?: string | null;
        DnsServiceProviderIdentifier?: string | null;
        /** Additional command-specific custom data returned by MxToolbox. */
        CustomData?: unknown;
        /** The related lookup suggestions returned by MxToolbox. */
        RelatedLookups?: Array<{
          /**
           * The human-readable name of the related lookup.
           * @minLength 1
           */
          Name?: string;
          /**
           * The related lookup URL returned by MxToolbox.
           * @minLength 1
           */
          URL?: string;
          /**
           * The related lookup command returned by MxToolbox.
           * @minLength 1
           */
          Command?: string;
          /**
           * The argument that MxToolbox suggests for the related lookup.
           * @minLength 1
           */
          CommandArgument?: string;
          [key: string]: unknown;
        }>;
        /** The queried domain returned by MxToolbox for HTTP lookups. */
        Domain?: string;
        /** The resolved IP address returned by MxToolbox for HTTP lookups. */
        IPAddress?: string;
        /** Whether MxToolbox marked the HTTP lookup as successful. */
        IsSuccess?: boolean;
        /** Whether the resolved host changed during the HTTP lookup. */
        HostChanged?: boolean;
        /** The detailed HTTP test results returned by MxToolbox. */
        ResultArray?: Array<{
          /**
           * The name of one HTTP test result returned by MxToolbox.
           * @minLength 1
           */
          Name?: string;
          /**
           * The outcome text for one HTTP test result.
           * @minLength 1
           */
          Result?: string;
          /** The TTL or timing detail returned by MxToolbox for one HTTP test result. */
          TTL?: string;
          [key: string]: unknown;
        }>;
        /** The HTTP error message returned by MxToolbox when available. */
        ErrorMessage?: string;
        /** The HTTP response time returned by MxToolbox. */
        ResponseTime?: string;
        [key: string]: unknown;
      };
    };
    /** Ping a domain or IP and return the official MxToolbox response payload. */
    "mx_toolbox.lookup_ping": {
      input: {
        /**
         * The bare domain or IP address that should be pinged, such as `google.com` or `8.8.8.8`.
         * @minLength 1
         */
        domain_or_ip: string;
      };
      output: {
        UID?: string | null;
        /** The type MxToolbox inferred for the lookup argument, such as domain or IP. */
        ArgumentType?: string;
        /** The command that MxToolbox executed. */
        Command?: string;
        /** The domain, IP address, host, or other target that MxToolbox queried. */
        CommandArgument?: string;
        /** The timestamp when MxToolbox recorded the lookup result. */
        TimeRecorded?: string;
        ReportingNameServer?: string | null;
        /** The lookup duration returned by MxToolbox, typically in milliseconds. */
        TimeToComplete?: string;
        RelatedIP?: string | null;
        /** The numeric DNS resource record type returned by MxToolbox. */
        ResourceRecordType?: number;
        /** Whether MxToolbox treated the lookup target as an empty subdomain. */
        IsEmptySubDomain?: boolean;
        /** Whether MxToolbox marked the lookup result as transitioned. */
        IsTransitioned?: boolean;
        /** The command-specific SPF subaction detail returned by MxToolbox. */
        SPF_Subaction_Detail?: unknown;
        /** The raw records payload returned by MxToolbox for some commands. */
        Records?: unknown;
        /** Whether MxToolbox treated the target as an endpoint. */
        IsEndpoint?: boolean;
        /** Whether the authenticated account has subscriptions for this target. */
        HasSubscriptions?: boolean;
        /** The alert group subscription identifier returned by MxToolbox. */
        AlertgroupSubscriptionId?: unknown;
        /** The failed checks returned by MxToolbox. */
        Failed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The warning checks returned by MxToolbox. */
        Warnings?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The passed checks returned by MxToolbox. */
        Passed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The timeout items returned by MxToolbox. */
        Timeouts?: Array<unknown>;
        /** The error items returned by MxToolbox. */
        Errors?: Array<unknown>;
        /** Whether MxToolbox marked the response as an error. */
        IsError?: boolean;
        /** The command-specific information returned by MxToolbox. */
        Information?: Array<Record<string, unknown>> | string;
        /** The multi-information entries returned by MxToolbox. */
        MultiInformation?: Array<Record<string, unknown>>;
        /** The transcript entries returned by MxToolbox. */
        Transcript?: Array<Record<string, unknown> | string>;
        /** The MX reputation score returned by MxToolbox. */
        MxRep?: number;
        EmailServiceProvider?: string | null;
        DnsServiceProvider?: string | null;
        DnsServiceProviderIdentifier?: string | null;
        /** Additional command-specific custom data returned by MxToolbox. */
        CustomData?: unknown;
        /** The related lookup suggestions returned by MxToolbox. */
        RelatedLookups?: Array<{
          /**
           * The human-readable name of the related lookup.
           * @minLength 1
           */
          Name?: string;
          /**
           * The related lookup URL returned by MxToolbox.
           * @minLength 1
           */
          URL?: string;
          /**
           * The related lookup command returned by MxToolbox.
           * @minLength 1
           */
          Command?: string;
          /**
           * The argument that MxToolbox suggests for the related lookup.
           * @minLength 1
           */
          CommandArgument?: string;
          [key: string]: unknown;
        }>;
        /** The queried domain returned by MxToolbox for HTTP lookups. */
        Domain?: string;
        /** The resolved IP address returned by MxToolbox for HTTP lookups. */
        IPAddress?: string;
        /** Whether MxToolbox marked the HTTP lookup as successful. */
        IsSuccess?: boolean;
        /** Whether the resolved host changed during the HTTP lookup. */
        HostChanged?: boolean;
        /** The detailed HTTP test results returned by MxToolbox. */
        ResultArray?: Array<{
          /**
           * The name of one HTTP test result returned by MxToolbox.
           * @minLength 1
           */
          Name?: string;
          /**
           * The outcome text for one HTTP test result.
           * @minLength 1
           */
          Result?: string;
          /** The TTL or timing detail returned by MxToolbox for one HTTP test result. */
          TTL?: string;
          [key: string]: unknown;
        }>;
        /** The HTTP error message returned by MxToolbox when available. */
        ErrorMessage?: string;
        /** The HTTP response time returned by MxToolbox. */
        ResponseTime?: string;
        [key: string]: unknown;
      };
    };
    /** Run an SMTP lookup for a domain and return the official MxToolbox response payload. */
    "mx_toolbox.lookup_smtp": {
      input: {
        /**
         * The bare domain whose SMTP diagnostics should be run, such as `example.com`.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        UID?: string | null;
        /** The type MxToolbox inferred for the lookup argument, such as domain or IP. */
        ArgumentType?: string;
        /** The command that MxToolbox executed. */
        Command?: string;
        /** The domain, IP address, host, or other target that MxToolbox queried. */
        CommandArgument?: string;
        /** The timestamp when MxToolbox recorded the lookup result. */
        TimeRecorded?: string;
        ReportingNameServer?: string | null;
        /** The lookup duration returned by MxToolbox, typically in milliseconds. */
        TimeToComplete?: string;
        RelatedIP?: string | null;
        /** The numeric DNS resource record type returned by MxToolbox. */
        ResourceRecordType?: number;
        /** Whether MxToolbox treated the lookup target as an empty subdomain. */
        IsEmptySubDomain?: boolean;
        /** Whether MxToolbox marked the lookup result as transitioned. */
        IsTransitioned?: boolean;
        /** The command-specific SPF subaction detail returned by MxToolbox. */
        SPF_Subaction_Detail?: unknown;
        /** The raw records payload returned by MxToolbox for some commands. */
        Records?: unknown;
        /** Whether MxToolbox treated the target as an endpoint. */
        IsEndpoint?: boolean;
        /** Whether the authenticated account has subscriptions for this target. */
        HasSubscriptions?: boolean;
        /** The alert group subscription identifier returned by MxToolbox. */
        AlertgroupSubscriptionId?: unknown;
        /** The failed checks returned by MxToolbox. */
        Failed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The warning checks returned by MxToolbox. */
        Warnings?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The passed checks returned by MxToolbox. */
        Passed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The timeout items returned by MxToolbox. */
        Timeouts?: Array<unknown>;
        /** The error items returned by MxToolbox. */
        Errors?: Array<unknown>;
        /** Whether MxToolbox marked the response as an error. */
        IsError?: boolean;
        /** The command-specific information returned by MxToolbox. */
        Information?: Array<Record<string, unknown>> | string;
        /** The multi-information entries returned by MxToolbox. */
        MultiInformation?: Array<Record<string, unknown>>;
        /** The transcript entries returned by MxToolbox. */
        Transcript?: Array<Record<string, unknown> | string>;
        /** The MX reputation score returned by MxToolbox. */
        MxRep?: number;
        EmailServiceProvider?: string | null;
        DnsServiceProvider?: string | null;
        DnsServiceProviderIdentifier?: string | null;
        /** Additional command-specific custom data returned by MxToolbox. */
        CustomData?: unknown;
        /** The related lookup suggestions returned by MxToolbox. */
        RelatedLookups?: Array<{
          /**
           * The human-readable name of the related lookup.
           * @minLength 1
           */
          Name?: string;
          /**
           * The related lookup URL returned by MxToolbox.
           * @minLength 1
           */
          URL?: string;
          /**
           * The related lookup command returned by MxToolbox.
           * @minLength 1
           */
          Command?: string;
          /**
           * The argument that MxToolbox suggests for the related lookup.
           * @minLength 1
           */
          CommandArgument?: string;
          [key: string]: unknown;
        }>;
        /** The queried domain returned by MxToolbox for HTTP lookups. */
        Domain?: string;
        /** The resolved IP address returned by MxToolbox for HTTP lookups. */
        IPAddress?: string;
        /** Whether MxToolbox marked the HTTP lookup as successful. */
        IsSuccess?: boolean;
        /** Whether the resolved host changed during the HTTP lookup. */
        HostChanged?: boolean;
        /** The detailed HTTP test results returned by MxToolbox. */
        ResultArray?: Array<{
          /**
           * The name of one HTTP test result returned by MxToolbox.
           * @minLength 1
           */
          Name?: string;
          /**
           * The outcome text for one HTTP test result.
           * @minLength 1
           */
          Result?: string;
          /** The TTL or timing detail returned by MxToolbox for one HTTP test result. */
          TTL?: string;
          [key: string]: unknown;
        }>;
        /** The HTTP error message returned by MxToolbox when available. */
        ErrorMessage?: string;
        /** The HTTP response time returned by MxToolbox. */
        ResponseTime?: string;
        [key: string]: unknown;
      };
    };
    /** Look up the SPF record for a domain and return the official MxToolbox response payload. */
    "mx_toolbox.lookup_spf": {
      input: {
        /**
         * The bare domain whose SPF record should be looked up, such as `example.com`.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        UID?: string | null;
        /** The type MxToolbox inferred for the lookup argument, such as domain or IP. */
        ArgumentType?: string;
        /** The command that MxToolbox executed. */
        Command?: string;
        /** The domain, IP address, host, or other target that MxToolbox queried. */
        CommandArgument?: string;
        /** The timestamp when MxToolbox recorded the lookup result. */
        TimeRecorded?: string;
        ReportingNameServer?: string | null;
        /** The lookup duration returned by MxToolbox, typically in milliseconds. */
        TimeToComplete?: string;
        RelatedIP?: string | null;
        /** The numeric DNS resource record type returned by MxToolbox. */
        ResourceRecordType?: number;
        /** Whether MxToolbox treated the lookup target as an empty subdomain. */
        IsEmptySubDomain?: boolean;
        /** Whether MxToolbox marked the lookup result as transitioned. */
        IsTransitioned?: boolean;
        /** The command-specific SPF subaction detail returned by MxToolbox. */
        SPF_Subaction_Detail?: unknown;
        /** The raw records payload returned by MxToolbox for some commands. */
        Records?: unknown;
        /** Whether MxToolbox treated the target as an endpoint. */
        IsEndpoint?: boolean;
        /** Whether the authenticated account has subscriptions for this target. */
        HasSubscriptions?: boolean;
        /** The alert group subscription identifier returned by MxToolbox. */
        AlertgroupSubscriptionId?: unknown;
        /** The failed checks returned by MxToolbox. */
        Failed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The warning checks returned by MxToolbox. */
        Warnings?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The passed checks returned by MxToolbox. */
        Passed?: Array<{
          /** The numeric identifier of the MxToolbox check item. */
          ID?: number;
          /**
           * The MxToolbox check name.
           * @minLength 1
           */
          Name?: string;
          /**
           * The summary text returned by MxToolbox for the check.
           * @minLength 1
           */
          Info?: string;
          /**
           * The MxToolbox documentation URL for this check item.
           * @minLength 1
           */
          Url?: string;
          PublicDescription?: string | null;
          /** Additional detail lines returned by MxToolbox for this check item. */
          AdditionalInfo?: Array<string>;
          /** Whether this check item is excluded in the MxToolbox account. */
          IsExcludedByUser?: boolean;
          /** The blacklist response time returned by MxToolbox when available. */
          BlacklistResponseTime?: string;
          [key: string]: unknown;
        }>;
        /** The timeout items returned by MxToolbox. */
        Timeouts?: Array<unknown>;
        /** The error items returned by MxToolbox. */
        Errors?: Array<unknown>;
        /** Whether MxToolbox marked the response as an error. */
        IsError?: boolean;
        /** The command-specific information returned by MxToolbox. */
        Information?: Array<Record<string, unknown>> | string;
        /** The multi-information entries returned by MxToolbox. */
        MultiInformation?: Array<Record<string, unknown>>;
        /** The transcript entries returned by MxToolbox. */
        Transcript?: Array<Record<string, unknown> | string>;
        /** The MX reputation score returned by MxToolbox. */
        MxRep?: number;
        EmailServiceProvider?: string | null;
        DnsServiceProvider?: string | null;
        DnsServiceProviderIdentifier?: string | null;
        /** Additional command-specific custom data returned by MxToolbox. */
        CustomData?: unknown;
        /** The related lookup suggestions returned by MxToolbox. */
        RelatedLookups?: Array<{
          /**
           * The human-readable name of the related lookup.
           * @minLength 1
           */
          Name?: string;
          /**
           * The related lookup URL returned by MxToolbox.
           * @minLength 1
           */
          URL?: string;
          /**
           * The related lookup command returned by MxToolbox.
           * @minLength 1
           */
          Command?: string;
          /**
           * The argument that MxToolbox suggests for the related lookup.
           * @minLength 1
           */
          CommandArgument?: string;
          [key: string]: unknown;
        }>;
        /** The queried domain returned by MxToolbox for HTTP lookups. */
        Domain?: string;
        /** The resolved IP address returned by MxToolbox for HTTP lookups. */
        IPAddress?: string;
        /** Whether MxToolbox marked the HTTP lookup as successful. */
        IsSuccess?: boolean;
        /** Whether the resolved host changed during the HTTP lookup. */
        HostChanged?: boolean;
        /** The detailed HTTP test results returned by MxToolbox. */
        ResultArray?: Array<{
          /**
           * The name of one HTTP test result returned by MxToolbox.
           * @minLength 1
           */
          Name?: string;
          /**
           * The outcome text for one HTTP test result.
           * @minLength 1
           */
          Result?: string;
          /** The TTL or timing detail returned by MxToolbox for one HTTP test result. */
          TTL?: string;
          [key: string]: unknown;
        }>;
        /** The HTTP error message returned by MxToolbox when available. */
        ErrorMessage?: string;
        /** The HTTP response time returned by MxToolbox. */
        ResponseTime?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve the current status of all monitors in the authenticated MxToolbox account. */
    "mx_toolbox.monitor_status": {
      input: Record<string, never>;
      output: {
        /** The monitor status data wrapper returned by MxToolbox. */
        data?: {
          /** The list of monitor status items returned by MxToolbox. */
          details?: Array<{
            /**
             * The unique identifier of the monitor.
             * @minLength 1
             */
            MonitorUID?: string;
            /**
             * The monitor type and target returned by MxToolbox.
             * @minLength 1
             */
            ActionString?: string;
            /** The timestamp when the monitor last changed state. */
            LastTransition?: string;
            /** The timestamp when the monitor was last checked. */
            LastChecked?: string;
            /** The MX reputation score returned by MxToolbox for the monitor. */
            MxRep?: string | number;
            /** The failing monitor details returned by MxToolbox. */
            Failing?: Array<unknown>;
            /** The warning details returned by MxToolbox. */
            Warnings?: Array<unknown>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        error?: string | null;
        /** Whether MxToolbox marked the monitor status request as successful. */
        successfull?: boolean;
        [key: string]: unknown;
      };
    };
    /** Retrieve API usage statistics for DNS and network lookups from MxToolbox. */
    "mx_toolbox.usage_check": {
      input: Record<string, never>;
      output: {
        /** The number of DNS lookup requests made in the current cycle. */
        DnsRequests?: number;
        /** The maximum number of DNS lookups allowed in the current cycle. */
        DnsMax?: number;
        /** The number of DNS overage errors returned by MxToolbox. */
        DnsOverageErrors?: number;
        /** The number of network requests made in the current cycle. */
        NetworkRequests?: number;
        /** The maximum number of network requests allowed in the current cycle. */
        NetworkMax?: number;
        /** The number of network overage errors returned by MxToolbox. */
        NetworkOverageErrors?: number;
        [key: string]: unknown;
      };
    };
  }
}
