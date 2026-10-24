import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search Certificate Transparency logs via crt.sh for certificates matching a domain. Use % as a wildcard for subdomain enumeration, for example %.example.com. Free and needs no API key; results are capped by the limit parameter because popular domains can match a very large number of certificates. */
    "crtsh.search_certificates": {
      input: {
        /**
         * The domain to search, such as example.com. Use % as a wildcard, e.g. %.example.com enumerates subdomains.
         * @minLength 1
         */
        domain: string;
        /**
         * Maximum number of certificate records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** Matching certificate records, up to the requested limit. */
        certificates: Array<{
          /** crt.sh certificate ID. */
          id: number;
          /** ID of the issuing certificate authority. */
          issuer_ca_id: number;
          /** Distinguished name of the issuing certificate authority. */
          issuer_name: string;
          /** Common name of the certificate. */
          common_name: string;
          /** Subject Alternative Names covered by the certificate, one per line. */
          name_value: string;
          /** Certificate validity start timestamp. */
          not_before: string;
          /** Certificate validity end timestamp. */
          not_after: string;
          /** Certificate serial number. */
          serial_number: string;
          [key: string]: unknown;
        }>;
        /** Number of certificate records returned. */
        returned: number;
        /** Total number of matching certificate records returned by crt.sh, before the limit is applied. */
        total_matches: number;
        [key: string]: unknown;
      };
    };
  }
}
