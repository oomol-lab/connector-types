import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete one monitored domain configuration from the connected Cert Spotter account. */
    "sslmate_cert_spotter_api.delete_monitored_domain": {
      input: {
        /**
         * The monitored domain name. Prefix with a leading dot to cover the entire subdomain tree.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Whether the monitored domain was deleted. */
        deleted: boolean;
      };
    };
    /** Get one monitored domain configuration from the connected Cert Spotter account. */
    "sslmate_cert_spotter_api.get_monitored_domain": {
      input: {
        /**
         * The monitored domain name. Prefix with a leading dot to cover the entire subdomain tree.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The monitored domain returned by Cert Spotter. */
        domain: {
          /**
           * The monitored domain key returned by Cert Spotter.
           * @minLength 1
           */
          name: string;
          /** Whether Cert Spotter monitoring is enabled for this domain. */
          enabled: boolean;
        };
      };
    };
    /** List certificate issuances for one domain from the Cert Spotter CT Search API. */
    "sslmate_cert_spotter_api.list_certificate_issuances": {
      input: {
        /**
         * The registered domain or subdomain to search in the CT Search API.
         * @minLength 1
         */
        domain: string;
        /**
         * Return issuances discovered after the issuance with this Cert Spotter ID.
         * @minLength 1
         */
        after?: string;
        /** Whether to include issuances for subdomains of the requested domain. */
        include_subdomains?: boolean;
        /** Whether to include wildcard certificates that match the requested domain. */
        match_wildcards?: boolean;
        /**
         * Repeatable Cert Spotter expand fields to include in the response.
         * @minItems 1
         */
        expand?: Array<string>;
      };
      output: {
        /** Certificate issuances returned by the Cert Spotter CT Search API. */
        issuances: Array<{
          /**
           * The opaque Cert Spotter issuance identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The SHA-256 digest of the CT TBSCertificate.
           * @minLength 1
           */
          tbs_sha256: string;
          /**
           * The SHA-256 digest of the certificate or precertificate.
           * @minLength 1
           */
          cert_sha256: string;
          /** Expanded DNS names covered by the certificate issuance. */
          dns_names?: Array<string>;
          /**
           * The SHA-256 digest of the certificate public key.
           * @minLength 1
           */
          pubkey_sha256: string;
          /**
           * The base64 DER-encoded certificate public key when expanded.
           * @minLength 1
           */
          pubkey_der?: string;
          /** Expanded metadata about the certificate public key. */
          pubkey?: {
            /** The public key type returned by Cert Spotter, such as rsa or ecdsa. */
            type?: string;
            /** The RSA key size in bits when the public key type is rsa. */
            bit_length?: number;
            /** The elliptic curve name when the public key type is ecdsa. */
            curve?: string;
            [key: string]: unknown;
          };
          /** Expanded metadata about the issuer. */
          issuer?: {
            /**
             * The curated issuer display name returned by Cert Spotter.
             * @minLength 1
             */
            friendly_name: string;
            /** The issuer website URL, or null when unavailable. */
            website?: string | null;
            /** Expanded issuer CAA domains, or null when Cert Spotter has no data. */
            caa_domains?: Array<string> | null;
            /** Expanded issuer operator metadata, or null when unavailable. */
            operator?: {
              /**
               * The organization name for the issuer operator.
               * @minLength 1
               */
              name: string;
              /** The issuer operator website URL, or null when unavailable. */
              website?: string | null;
              [key: string]: unknown;
            } | null;
            /**
             * The SHA-256 digest of the issuer public key.
             * @minLength 1
             */
            pubkey_sha256: string;
            /**
             * The base64 DER-encoded issuer public key when expanded.
             * @minLength 1
             */
            pubkey_der?: string;
            /**
             * The RFC 2253 issuer distinguished name.
             * @minLength 1
             */
            name: string;
            /**
             * The base64 DER-encoded issuer distinguished name when expanded.
             * @minLength 1
             */
            name_der?: string;
            [key: string]: unknown;
          };
          /**
           * The certificate not-before timestamp in RFC 3339 format.
           * @format date-time
           */
          not_before: string;
          /**
           * The certificate not-after timestamp in RFC 3339 format.
           * @format date-time
           */
          not_after: string;
          /** Whether the certificate is revoked, or null when revocation status is unknown. */
          revoked?: boolean | null;
          /** Expanded revocation metadata for this issuance. */
          revocation?: {
            /** The RFC 3339 revocation time, or null when not revoked. */
            time?: string | null;
            /** The RFC 5280 revocation reason code, or null when unavailable. */
            reason?: number | null;
            /** The RFC 3339 timestamp when Cert Spotter last checked revocation status. */
            checked_at?: string | null;
            [key: string]: unknown;
          };
          /** Instructions for reporting certificate problems, or null when unavailable. */
          problem_reporting?: string | null;
          /**
           * The base64 DER-encoded certificate or precertificate when expanded.
           * @minLength 1
           */
          cert_der?: string;
          [key: string]: unknown;
        }>;
        /**
         * The Retry-After header in seconds when Cert Spotter suggests how long to wait before polling again.
         * @minimum 0
         */
        retryAfterSeconds?: number;
      };
    };
    /** List monitored domains configured in the connected Cert Spotter account. */
    "sslmate_cert_spotter_api.list_monitored_domains": {
      input: Record<string, never>;
      output: {
        /** Monitored domains returned by the Cert Spotter monitoring API. */
        domains: Array<{
          /**
           * The monitored domain key returned by Cert Spotter.
           * @minLength 1
           */
          name: string;
          /** Whether Cert Spotter monitoring is enabled for this domain. */
          enabled: boolean;
        }>;
      };
    };
    /** Create or update one monitored domain configuration in the connected Cert Spotter account. */
    "sslmate_cert_spotter_api.upsert_monitored_domain": {
      input: {
        /**
         * The monitored domain name. Prefix with a leading dot to cover the entire subdomain tree.
         * @minLength 1
         */
        name: string;
        /** Whether monitoring should be enabled for this domain. */
        enabled?: boolean;
      };
      output: {
        /** The monitored domain returned by Cert Spotter. */
        domain: {
          /**
           * The monitored domain key returned by Cert Spotter.
           * @minLength 1
           */
          name: string;
          /** Whether Cert Spotter monitoring is enabled for this domain. */
          enabled: boolean;
        };
      };
    };
  }
}
