import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Look up WHOIS registration details for a domain. */
    "ip2whois.lookup_domain": {
      input: {
        /**
         * The bare domain name to query.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** The queried domain name. */
        domain: string;
        /** Domain registry identifier returned by IP2WHOIS. */
        domain_id?: string;
        /** Domain status returned by the WHOIS record. */
        status: string;
        /** Domain creation date in ISO 8601 format. */
        create_date: string;
        /** Domain update date in ISO 8601 format. */
        update_date: string;
        /** Domain expiration date in ISO 8601 format. */
        expire_date: string;
        /** Age of the domain in days. */
        domain_age: number;
        /** WHOIS server hostname for the domain. */
        whois_server?: string;
        /** Registrar information for the domain. */
        registrar: {
          /** Name of the registrar. */
          name: string;
          /** Registrar IANA identifier. */
          iana_id: string;
          /** Registrar website URL. */
          url: string;
        };
        /** Registrant contact details. */
        registrant: {
          /** Contact name from the WHOIS record. */
          name: string;
          /** Organization name from the WHOIS record. */
          organization: string;
          /** Street address from the WHOIS record. */
          street_address: string;
          /** City value from the WHOIS record. */
          city: string;
          /** Region, state, or province from the WHOIS record. */
          region: string;
          /** Postal code from the WHOIS record. */
          zip_code: string;
          /** Two-letter country code from the WHOIS record. */
          country: string;
          /** Phone number from the WHOIS record. */
          phone: string;
          /** Fax number from the WHOIS record. */
          fax: string;
          /** Email address from the WHOIS record. */
          email: string;
        };
        /** Administrative contact details. */
        admin: {
          /** Contact name from the WHOIS record. */
          name: string;
          /** Organization name from the WHOIS record. */
          organization: string;
          /** Street address from the WHOIS record. */
          street_address: string;
          /** City value from the WHOIS record. */
          city: string;
          /** Region, state, or province from the WHOIS record. */
          region: string;
          /** Postal code from the WHOIS record. */
          zip_code: string;
          /** Two-letter country code from the WHOIS record. */
          country: string;
          /** Phone number from the WHOIS record. */
          phone: string;
          /** Fax number from the WHOIS record. */
          fax: string;
          /** Email address from the WHOIS record. */
          email: string;
        };
        /** Technical contact details. */
        tech: {
          /** Contact name from the WHOIS record. */
          name: string;
          /** Organization name from the WHOIS record. */
          organization: string;
          /** Street address from the WHOIS record. */
          street_address: string;
          /** City value from the WHOIS record. */
          city: string;
          /** Region, state, or province from the WHOIS record. */
          region: string;
          /** Postal code from the WHOIS record. */
          zip_code: string;
          /** Two-letter country code from the WHOIS record. */
          country: string;
          /** Phone number from the WHOIS record. */
          phone: string;
          /** Fax number from the WHOIS record. */
          fax: string;
          /** Email address from the WHOIS record. */
          email: string;
        };
        /** Billing contact details. */
        billing: {
          /** Contact name from the WHOIS record. */
          name: string;
          /** Organization name from the WHOIS record. */
          organization: string;
          /** Street address from the WHOIS record. */
          street_address: string;
          /** City value from the WHOIS record. */
          city: string;
          /** Region, state, or province from the WHOIS record. */
          region: string;
          /** Postal code from the WHOIS record. */
          zip_code: string;
          /** Two-letter country code from the WHOIS record. */
          country: string;
          /** Phone number from the WHOIS record. */
          phone: string;
          /** Fax number from the WHOIS record. */
          fax: string;
          /** Email address from the WHOIS record. */
          email: string;
        };
        /** Authoritative nameservers for the domain. */
        nameservers: Array<string>;
      };
    };
    /** List hosted domains associated with an IP address. */
    "ip2whois.lookup_hosted_domains": {
      input: {
        /**
         * The IPv4 or IPv6 address to query.
         * @minLength 1
         */
        ip: string;
        /**
         * The result page to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The queried IP address. */
        ip: string;
        /** Current page number. */
        page: number;
        /** Number of domains returned per page. */
        per_page: number;
        /** Total number of available pages. */
        total_pages: number;
        /** Total number of domains hosted on the IP. */
        total_domains: number;
        /** Hosted domain names. */
        domains: Array<string>;
      };
    };
  }
}
