import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Count Shodan hosts matching a query and optionally return facet aggregations. */
    "shodan.count_search_results": {
      input: {
        /**
         * Search query string passed to the Shodan host count endpoint.
         * @minLength 1
         */
        query: string;
        /**
         * Facet aggregation string such as org:5,country:3.
         * @minLength 1
         */
        facets?: string;
      };
      output: {
        /**
         * Total number of matching hosts.
         * @minimum 0
         */
        total: number;
        /** Raw JSON object returned by Shodan. */
        facets?: Record<string, unknown>;
      };
    };
    /** Get API account information and remaining credits from Shodan. */
    "shodan.get_api_info": {
      input: Record<string, never>;
      output: {
        /**
         * Subscription plan name returned by Shodan.
         * @minLength 1
         */
        plan: string;
        /** Whether HTTPS scanning access is enabled for the API key. */
        https?: boolean;
        /**
         * Number of monitored IP addresses currently tracked by the account.
         * @minimum 0
         */
        monitored_ips: number;
        /**
         * Remaining query credits available to the API key.
         * @minimum 0
         */
        query_credits: number;
        /**
         * Remaining scan credits available to the API key.
         * @minimum 0
         */
        scan_credits: number;
        /** Whether telnet access is enabled for the API key. */
        telnet?: boolean;
        /** Whether unlocked search filters are enabled for the API key. */
        unlocked?: boolean;
        /**
         * Remaining unlocked query credits available to the API key.
         * @minimum 0
         */
        unlocked_left?: number;
        /** Raw JSON object returned by Shodan. */
        usage_limits?: Record<string, unknown>;
      };
    };
    /** Get DNS domain information and known subdomains from Shodan. */
    "shodan.get_domain_info": {
      input: {
        /**
         * Domain name to inspect in the Shodan DNS endpoint.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /**
         * Domain name returned by Shodan.
         * @minLength 1
         */
        domain: string;
        /** Tags returned by Shodan for the requested domain. */
        tags: Array<string>;
        /** List of raw JSON objects returned by Shodan. */
        data: Array<Record<string, unknown>>;
        /** Known subdomain labels returned by Shodan. */
        subdomains: Array<string>;
        /** Whether Shodan has additional subdomain data beyond the current payload. */
        more: boolean;
      };
    };
    /** Get Shodan host details for one IP address. */
    "shodan.get_host": {
      input: {
        /**
         * IPv4 or IPv6 address to inspect in Shodan.
         * @minLength 1
         */
        ip: string;
        /** Whether to include historical banners for the host. */
        history?: boolean;
        /** Whether to request a minified host payload from Shodan. */
        minify?: boolean;
      };
      output: {
        /** Raw JSON object returned by Shodan. */
        host: Record<string, unknown>;
      };
    };
    /** Resolve hostnames to IP addresses with the Shodan DNS resolve endpoint. */
    "shodan.resolve_hostnames": {
      input: {
        /**
         * Hostnames to resolve with Shodan.
         * @minItems 1
         */
        hostnames: Array<string>;
      };
      output: {
        /** Mapping of hostname to resolved IP address returned by Shodan. */
        results: Record<string, string>;
      };
    };
    /** Reverse-resolve IP addresses to hostnames with the Shodan DNS reverse endpoint. */
    "shodan.reverse_dns_lookup": {
      input: {
        /**
         * IP addresses to reverse-resolve with Shodan.
         * @minItems 1
         */
        ips: Array<string>;
      };
      output: {
        /** Mapping of IP address to hostnames returned by Shodan. */
        results: Record<string, Array<string>>;
      };
    };
    /** Search Shodan hosts with a query string and optional facet aggregation. */
    "shodan.search_hosts": {
      input: {
        /**
         * Search query string passed to the Shodan host search endpoint.
         * @minLength 1
         */
        query: string;
        /**
         * Facet aggregation string such as org:5,country:3.
         * @minLength 1
         */
        facets?: string;
        /**
         * 1-based results page to request from Shodan.
         * @minimum 1
         */
        page?: number;
        /** Whether to request minified banner results from Shodan. */
        minify?: boolean;
      };
      output: {
        /** List of raw JSON objects returned by Shodan. */
        matches: Array<Record<string, unknown>>;
        /**
         * Total number of matching hosts.
         * @minimum 0
         */
        total: number;
        /** Raw JSON object returned by Shodan. */
        facets?: Record<string, unknown>;
      };
    };
  }
}
