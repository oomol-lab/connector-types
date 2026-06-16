import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check whether one domain is available for registration and optionally request suggestions. */
    "whoisfreaks.check_domain_availability": {
      input: {
        /**
         * The domain name to query.
         * @minLength 1
         */
        domain: string;
        /** Whether WhoisFreaks should return suggested alternatives. */
        sug?: boolean;
        /**
         * The number of suggestions to return when suggestions are enabled.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
      };
      output: {
        /** The availability results returned by WhoisFreaks. */
        availability: Array<{
          /**
           * The domain name returned in one availability result.
           * @minLength 1
           */
          domain: string;
          /** Whether the returned domain is available for registration. */
          domainAvailability: boolean;
        }>;
      };
    };
    /** Retrieve the ASN WHOIS record for one autonomous system number. */
    "whoisfreaks.get_asn_whois": {
      input: {
        /**
         * The ASN identifier with or without the AS prefix.
         * @minLength 1
         */
        asn: string;
      };
      output: {
        /** A raw JSON object returned by WhoisFreaks. */
        asnWhois: Record<string, unknown>;
      };
    };
    /** Retrieve the live WHOIS record for one domain. */
    "whoisfreaks.get_domain_whois": {
      input: {
        /**
         * The domain name used for live WHOIS lookup.
         * @minLength 1
         */
        domainName: string;
      };
      output: {
        /** A raw JSON object returned by WhoisFreaks. */
        whois: Record<string, unknown>;
      };
    };
    /** Retrieve the IP WHOIS record for one IP address. */
    "whoisfreaks.get_ip_whois": {
      input: {
        /** The IPv4 or IPv6 address to query. */
        ip: string;
      };
      output: {
        /** A raw JSON object returned by WhoisFreaks. */
        ipWhois: Record<string, unknown>;
      };
    };
    /** List known subdomains for one domain with optional paging and status filters. */
    "whoisfreaks.list_subdomains": {
      input: {
        /**
         * The domain name to query.
         * @minLength 1
         */
        domain: string;
        /**
         * The 1-based page number to fetch.
         * @minimum 1
         */
        page?: number;
        /** The subdomain status filter returned by WhoisFreaks. */
        status?: "active" | "inactive";
        /**
         * Return subdomain records created after this YYYY-MM-DD date.
         * @format date
         */
        after?: string;
        /**
         * Return subdomain records created before this YYYY-MM-DD date.
         * @format date
         */
        before?: string;
      };
      output: {
        /**
         * The domain name to query.
         * @minLength 1
         */
        domain: string;
        /** The subdomain records returned by WhoisFreaks. */
        subdomains: Array<{
          /**
           * The fully qualified subdomain name.
           * @minLength 1
           */
          subdomain: string;
          /**
           * The first date when the subdomain was observed.
           * @minLength 1
           */
          first_seen: string;
          /**
           * The last date when the subdomain was observed.
           * @minLength 1
           */
          last_seen: string;
          /**
           * The date when the subdomain became inactive, or N/A.
           * @minLength 1
           */
          inactive_from: string;
        }>;
        /** Normalized pagination metadata for WhoisFreaks list results. */
        pagination: {
          /**
           * The current result page.
           * @minimum 1
           */
          currentPage: number;
          /**
           * The total number of available pages.
           * @minimum 1
           */
          totalPages: number;
          /**
           * The total number of available records.
           * @minimum 0
           */
          totalRecords: number;
        };
      };
    };
  }
}
