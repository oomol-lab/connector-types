import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Bunny Pull Zone by ID. */
    "bunnycdn.get_pull_zone": {
      input: {
        /**
         * The ID of the Pull Zone.
         * @exclusiveMinimum 0
         */
        pullZoneId: number;
        /** Determines if the result hostnames should contain the SSL certificate. */
        includeCertificate?: boolean;
      };
      output: {
        /** A Bunny Pull Zone payload. */
        pullZone: {
          /** The unique ID of the pull zone. */
          Id?: number;
          /** The name of the pull zone. */
          Name?: string;
          /** The origin URL of the pull zone where the files are fetched from. */
          OriginUrl?: string;
          /** True unless the pull zone reached resource limits or the owning account ran out of funds. */
          Enabled?: boolean;
          /** Whether the pull zone is suspended. */
          Suspended?: boolean;
          /** The hostnames linked to this pull zone. */
          Hostnames?: Array<{
            /** The unique ID of the hostname. */
            Id?: number;
            /** The hostname value for the domain name. */
            Value?: string;
            /** Determines if the Force SSL feature is enabled. */
            ForceSSL?: boolean;
            /** Determines if this is a system hostname controlled by bunny.net. */
            IsSystemHostname?: boolean;
            /** Determines if this is a managed hostname controlled by bunny.net. */
            IsManagedHostname?: boolean;
            /** Determines if the hostname has an SSL certificate configured. */
            HasCertificate?: boolean;
            /** Contains the Base64Url encoded certificate for the hostname. */
            Certificate?: string;
            /** The provisioned certificate type. */
            CertificateProvisionType?: number;
            [key: string]: unknown;
          }>;
          /** The ID of the storage zone that the pull zone is linked to. */
          StorageZoneId?: number;
          /** The ID of the edge script that the pull zone is linked to. */
          EdgeScriptId?: number;
          /** The referrer hostnames that are allowed to access the pull zone. */
          AllowedReferrers?: Array<string>;
          /** The referrer hostnames that are blocked from accessing the pull zone. */
          BlockedReferrers?: Array<string>;
          /** The IP addresses that are blocked from accessing the pull zone. */
          BlockedIps?: Array<string>;
          /** True if the URL secure token authentication security is enabled. */
          ZoneSecurityEnabled?: boolean;
          /** True if the pull zone ignores query strings when serving cached objects. */
          IgnoreQueryStrings?: boolean;
          /** The monthly bandwidth limit in bytes that the pull zone is allowed to use. */
          MonthlyBandwidthLimit?: number;
          /** The amount of bandwidth in bytes that the pull zone used this month. */
          MonthlyBandwidthUsed?: number;
          /** The total monthly charges accumulated by the pull zone so far. */
          MonthlyCharges?: number;
          /** Determines if the pull zone should forward the current hostname to the origin. */
          AddHostHeader?: boolean;
          /** The host header that will be sent to the origin. */
          OriginHostHeader?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Bunny Pull Zones with optional pagination, search, and certificate expansion. */
    "bunnycdn.list_pull_zones": {
      input: {
        /**
         * The page number to return. When omitted, Bunny returns all pull zones as a plain array.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of pull zones to return when page is provided.
         * @minimum 5
         * @maximum 1000
         */
        perPage?: number;
        /**
         * The search term used to filter pull zones by name or related text.
         * @minLength 1
         */
        search?: string;
        /** Determines if the result hostnames should contain the SSL certificate. */
        includeCertificate?: boolean;
      };
      output: {
        /** The pull zones returned by Bunny. */
        pullZones: Array<{
          /** The unique ID of the pull zone. */
          Id?: number;
          /** The name of the pull zone. */
          Name?: string;
          /** The origin URL of the pull zone where the files are fetched from. */
          OriginUrl?: string;
          /** True unless the pull zone reached resource limits or the owning account ran out of funds. */
          Enabled?: boolean;
          /** Whether the pull zone is suspended. */
          Suspended?: boolean;
          /** The hostnames linked to this pull zone. */
          Hostnames?: Array<{
            /** The unique ID of the hostname. */
            Id?: number;
            /** The hostname value for the domain name. */
            Value?: string;
            /** Determines if the Force SSL feature is enabled. */
            ForceSSL?: boolean;
            /** Determines if this is a system hostname controlled by bunny.net. */
            IsSystemHostname?: boolean;
            /** Determines if this is a managed hostname controlled by bunny.net. */
            IsManagedHostname?: boolean;
            /** Determines if the hostname has an SSL certificate configured. */
            HasCertificate?: boolean;
            /** Contains the Base64Url encoded certificate for the hostname. */
            Certificate?: string;
            /** The provisioned certificate type. */
            CertificateProvisionType?: number;
            [key: string]: unknown;
          }>;
          /** The ID of the storage zone that the pull zone is linked to. */
          StorageZoneId?: number;
          /** The ID of the edge script that the pull zone is linked to. */
          EdgeScriptId?: number;
          /** The referrer hostnames that are allowed to access the pull zone. */
          AllowedReferrers?: Array<string>;
          /** The referrer hostnames that are blocked from accessing the pull zone. */
          BlockedReferrers?: Array<string>;
          /** The IP addresses that are blocked from accessing the pull zone. */
          BlockedIps?: Array<string>;
          /** True if the URL secure token authentication security is enabled. */
          ZoneSecurityEnabled?: boolean;
          /** True if the pull zone ignores query strings when serving cached objects. */
          IgnoreQueryStrings?: boolean;
          /** The monthly bandwidth limit in bytes that the pull zone is allowed to use. */
          MonthlyBandwidthLimit?: number;
          /** The amount of bandwidth in bytes that the pull zone used this month. */
          MonthlyBandwidthUsed?: number;
          /** The total monthly charges accumulated by the pull zone so far. */
          MonthlyCharges?: number;
          /** Determines if the pull zone should forward the current hostname to the origin. */
          AddHostHeader?: boolean;
          /** The host header that will be sent to the origin. */
          OriginHostHeader?: string;
          [key: string]: unknown;
        }>;
        /** The current page number when Bunny returns a paginated response. */
        currentPage?: number;
        /** The total number of pull zones available for the current query. */
        totalItems?: number;
        /** Whether another page of pull zones is available. */
        hasMoreItems?: boolean;
      };
    };
    /** Purge the cache for a Bunny Pull Zone, optionally restricted to one cache tag. */
    "bunnycdn.purge_pull_zone_cache": {
      input: {
        /**
         * The ID of the Pull Zone.
         * @exclusiveMinimum 0
         */
        pullZoneId: number;
        /**
         * Optional cache tag used to purge only the matching cached objects.
         * @minLength 1
         */
        cacheTag?: string;
      };
      output: {
        /**
         * The ID of the Pull Zone.
         * @exclusiveMinimum 0
         */
        pullZoneId: number;
        /** Whether the purge request completed successfully. */
        purged: boolean;
        /** The cache tag that was passed to Bunny when the purge was requested. */
        cacheTag?: string;
      };
    };
  }
}
