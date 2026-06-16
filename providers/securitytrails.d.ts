import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Find domains associated with one hostname in SecurityTrails. */
    "securitytrails.find_associated_domains": {
      input: {
        /**
         * The bare domain or subdomain to query without protocol or path.
         * @minLength 1
         */
        hostname: string;
        /**
         * The 1-based results page to fetch from the associated-domain listing.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /**
         * The hostname used for the associated-domain lookup.
         * @minLength 1
         */
        hostname: string;
        /** Associated-domain records returned by SecurityTrails. */
        records: Array<Record<string, unknown>>;
      };
    };
    /** Get current DNS and domain details for one hostname from SecurityTrails. */
    "securitytrails.get_domain": {
      input: {
        /**
         * The bare domain or subdomain to query without protocol or path.
         * @minLength 1
         */
        hostname: string;
      };
      output: {
        /** Raw domain details returned by SecurityTrails. */
        domain: Record<string, unknown>;
      };
    };
    /** Get SSL certificate details for one hostname from SecurityTrails. */
    "securitytrails.get_domain_ssl": {
      input: {
        /**
         * The bare domain or subdomain to query without protocol or path.
         * @minLength 1
         */
        hostname: string;
      };
      output: {
        /**
         * The hostname used for the SSL lookup.
         * @minLength 1
         */
        hostname: string;
        /** Raw SSL details returned by SecurityTrails. */
        ssl: Record<string, unknown>;
      };
    };
    /** List known subdomains for one hostname from SecurityTrails. */
    "securitytrails.get_subdomains": {
      input: {
        /**
         * The bare domain or subdomain to query without protocol or path.
         * @minLength 1
         */
        hostname: string;
      };
      output: {
        /**
         * The hostname used for the subdomain lookup.
         * @minLength 1
         */
        hostname: string;
        /** Known subdomain labels for the requested hostname. */
        subdomains: Array<string>;
        /** Mapping of DNS record type to the number of matching subdomains. */
        recordTypeCounts: Record<string, number>;
      };
    };
  }
}
