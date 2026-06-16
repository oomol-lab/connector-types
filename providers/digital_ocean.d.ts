import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the current DigitalOcean account profile and team context for the connected token. */
    "digital_ocean.get_account": {
      input: Record<string, never>;
      output: {
        /** DigitalOcean account. */
        account: {
          /** Unique identifier of the account. */
          uuid: string;
          /** Email address of the current account. */
          email: string;
          /** Display name of the current account, when present. */
          name?: string;
          /** Maximum number of active Droplets allowed. */
          droplet_limit: number;
          /** Maximum number of Floating IPs allowed. */
          floating_ip_limit: number;
          /** Whether the account email address is verified. */
          email_verified: boolean;
          /** Current account status. */
          status: "active" | "warning" | "locked";
          /** Human-readable status detail returned by DigitalOcean. */
          status_message: string;
          /** Current team context, when the token is scoped to a team. */
          team?: {
            /** Unique identifier of the team. */
            uuid?: string;
            /** Display name of the team. */
            name?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one DigitalOcean Droplet by numeric droplet ID. */
    "digital_ocean.get_droplet": {
      input: {
        /**
         * Numeric identifier of the Droplet.
         * @exclusiveMinimum 0
         */
        dropletId: number;
      };
      output: {
        /** DigitalOcean Droplet. */
        droplet: {
          /** Numeric identifier of the Droplet. */
          id: number;
          /** Droplet name. */
          name: string;
          /** Amount of RAM allocated to the Droplet in megabytes. */
          memory: number;
          /** Number of virtual CPUs assigned to the Droplet. */
          vcpus: number;
          /** Disk size of the Droplet in gigabytes. */
          disk: number;
          /** Whether the Droplet currently has a blocking action in progress. */
          locked: boolean;
          /** Current Droplet status. */
          status: string;
          /** Kernel information, when present. */
          kernel?: Record<string, unknown> | null;
          /**
           * Timestamp when the Droplet was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          created_at: string;
          /** Feature flags enabled on the Droplet. */
          features: Array<string>;
          /** Backup image identifiers for the Droplet. */
          backup_ids: Array<number>;
          /** Snapshot image identifiers for the Droplet. */
          snapshot_ids: Array<number>;
          /** Image information attached to the Droplet. */
          image: Record<string, unknown>;
          /** Volume identifiers attached to the Droplet. */
          volume_ids: Array<string>;
          /** Slug of the selected Droplet size. */
          size_slug: string;
          /** Network information returned for the Droplet. */
          networks?: Record<string, unknown>;
          /** Region information returned for the Droplet. */
          region: Record<string, unknown>;
          /** Tags assigned to the Droplet, when present. */
          tags?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** List DigitalOcean App Platform apps with pagination and optional project enrichment. */
    "digital_ocean.list_apps": {
      input: {
        /**
         * Page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of results to return per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /** Whether each app response should include its DigitalOcean project ID. */
        withProjects?: boolean;
      };
      output: {
        /** Apps returned for the current page. */
        apps: Array<Record<string, unknown>>;
        /** Pagination links returned by DigitalOcean, when present. */
        links?: {
          /** Pagination URLs returned by DigitalOcean, when present. */
          pages?: {
            /** URL for the first result page, when present. */
            first?: string;
            /** URL for the previous result page, when present. */
            prev?: string;
            /** URL for the next result page, when present. */
            next?: string;
            /** URL for the last result page, when present. */
            last?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Pagination metadata returned by DigitalOcean, when present. */
        meta?: {
          /** Total number of items available across all pages. */
          total?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List DigitalOcean managed database clusters, optionally filtered by tag. */
    "digital_ocean.list_databases": {
      input: {
        /**
         * Only return database clusters assigned to this exact tag.
         * @minLength 1
         */
        tagName?: string;
      };
      output: {
        /** Database clusters returned by DigitalOcean. */
        databases: Array<Record<string, unknown>>;
      };
    };
    /** List DNS records for one DigitalOcean domain, optionally filtered by record name or type. */
    "digital_ocean.list_domain_records": {
      input: {
        /**
         * Page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of results to return per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /**
         * The exact domain name whose DNS records should be listed.
         * @minLength 1
         */
        domainName: string;
        /**
         * Only return records whose fully qualified name exactly matches this value.
         * @minLength 1
         */
        name?: string;
        /** Only return DNS records of this record type. */
        type?: "A" | "AAAA" | "CAA" | "CNAME" | "MX" | "NS" | "TXT" | "SRV" | "SOA";
      };
      output: {
        /** Domain records returned for the current page. */
        domainRecords: Array<Record<string, unknown>>;
        /** Pagination links returned by DigitalOcean, when present. */
        links?: {
          /** Pagination URLs returned by DigitalOcean, when present. */
          pages?: {
            /** URL for the first result page, when present. */
            first?: string;
            /** URL for the previous result page, when present. */
            prev?: string;
            /** URL for the next result page, when present. */
            next?: string;
            /** URL for the last result page, when present. */
            last?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Pagination metadata returned by DigitalOcean, when present. */
        meta?: {
          /** Total number of items available across all pages. */
          total?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List DigitalOcean DNS domains with pagination. */
    "digital_ocean.list_domains": {
      input: {
        /**
         * Page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of results to return per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** Domains returned for the current page. */
        domains: Array<Record<string, unknown>>;
        /** Pagination links returned by DigitalOcean, when present. */
        links?: {
          /** Pagination URLs returned by DigitalOcean, when present. */
          pages?: {
            /** URL for the first result page, when present. */
            first?: string;
            /** URL for the previous result page, when present. */
            prev?: string;
            /** URL for the next result page, when present. */
            next?: string;
            /** URL for the last result page, when present. */
            last?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Pagination metadata returned by DigitalOcean, when present. */
        meta?: {
          /** Total number of items available across all pages. */
          total?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List DigitalOcean Droplets with pagination and optional filtering by tag, name, or droplet type. */
    "digital_ocean.list_droplets": {
      input: {
        /**
         * Page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of results to return per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /**
         * Only return Droplets assigned to this exact tag.
         * @minLength 1
         */
        tagName?: string;
        /**
         * Only return Droplets whose name exactly matches this value, case-insensitively.
         * @minLength 1
         */
        name?: string;
        /** Return standard Droplets or only GPU Droplets. */
        type?: "droplets" | "gpus";
      };
      output: {
        /** Droplets returned for the current page. */
        droplets: Array<{
          /** Numeric identifier of the Droplet. */
          id: number;
          /** Droplet name. */
          name: string;
          /** Amount of RAM allocated to the Droplet in megabytes. */
          memory: number;
          /** Number of virtual CPUs assigned to the Droplet. */
          vcpus: number;
          /** Disk size of the Droplet in gigabytes. */
          disk: number;
          /** Whether the Droplet currently has a blocking action in progress. */
          locked: boolean;
          /** Current Droplet status. */
          status: string;
          /** Kernel information, when present. */
          kernel?: Record<string, unknown> | null;
          /**
           * Timestamp when the Droplet was created.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          created_at: string;
          /** Feature flags enabled on the Droplet. */
          features: Array<string>;
          /** Backup image identifiers for the Droplet. */
          backup_ids: Array<number>;
          /** Snapshot image identifiers for the Droplet. */
          snapshot_ids: Array<number>;
          /** Image information attached to the Droplet. */
          image: Record<string, unknown>;
          /** Volume identifiers attached to the Droplet. */
          volume_ids: Array<string>;
          /** Slug of the selected Droplet size. */
          size_slug: string;
          /** Network information returned for the Droplet. */
          networks?: Record<string, unknown>;
          /** Region information returned for the Droplet. */
          region: Record<string, unknown>;
          /** Tags assigned to the Droplet, when present. */
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by DigitalOcean, when present. */
        links?: {
          /** Pagination URLs returned by DigitalOcean, when present. */
          pages?: {
            /** URL for the first result page, when present. */
            first?: string;
            /** URL for the previous result page, when present. */
            prev?: string;
            /** URL for the next result page, when present. */
            next?: string;
            /** URL for the last result page, when present. */
            last?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Pagination metadata returned by DigitalOcean, when present. */
        meta?: {
          /** Total number of items available across all pages. */
          total?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List DigitalOcean cloud firewalls with pagination. */
    "digital_ocean.list_firewalls": {
      input: {
        /**
         * Page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of results to return per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** Firewalls returned for the current page. */
        firewalls: Array<Record<string, unknown>>;
      };
    };
    /** List DigitalOcean load balancers with pagination. */
    "digital_ocean.list_load_balancers": {
      input: {
        /**
         * Page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of results to return per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** Load balancers returned for the current page. */
        loadBalancers: Array<Record<string, unknown>>;
      };
    };
    /** List DigitalOcean VPC networks with pagination. */
    "digital_ocean.list_vpcs": {
      input: {
        /**
         * Page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of results to return per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** VPC networks returned for the current page. */
        vpcs: Array<Record<string, unknown>>;
      };
    };
    /** Initiate a basic DigitalOcean Droplet lifecycle action such as reboot, shutdown, or power cycle. */
    "digital_ocean.manage_droplet_lifecycle": {
      input: {
        /**
         * Numeric identifier of the Droplet.
         * @exclusiveMinimum 0
         */
        dropletId: number;
        /** Lifecycle action to initiate for the Droplet. */
        type: "reboot" | "power_cycle" | "shutdown" | "power_on" | "power_off";
      };
      output: {
        /** DigitalOcean Droplet action. */
        action: {
          /** Numeric identifier of the Droplet action. */
          id: number;
          /** Current action status. */
          status: string;
          /** Action type accepted by the Droplet actions API. */
          type: string;
          /**
           * Timestamp when the action started, when present.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          started_at?: string;
          /** Timestamp when the action completed, or null when it is still running. */
          completed_at?: null | string;
          /** Identifier of the resource affected by the action. */
          resource_id?: number;
          /** Type of resource affected by the action. */
          resource_type?: string;
          /** Region information returned for the action, when present. */
          region?: {
            /** Whether the region currently accepts new Droplets. */
            available: boolean;
            /** Features available in the region. */
            features: Array<string>;
            /** Display name of the region. */
            name: string;
            /** Droplet size slugs available in the region. */
            sizes: Array<string>;
            /** Unique slug identifier of the region. */
            slug: string;
          } | null;
          /** Region slug returned for the action, when present. */
          region_slug?: string | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
