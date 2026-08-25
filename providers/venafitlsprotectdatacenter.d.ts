import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check the effective certificate policy for a policy distinguished name. */
    "venafitlsprotectdatacenter.check_policy": {
      input: {
        /**
         * The distinguished name of the policy folder.
         * @minLength 1
         */
        policyDn: string;
      };
      output: {
        /** The effective certificate policy. */
        policy: Record<string, unknown>;
      };
    };
    /** Retrieve a certificate by GUID from Venafi TLS Protect Datacenter. */
    "venafitlsprotectdatacenter.get_certificate": {
      input: {
        /**
         * The certificate GUID.
         * @minLength 1
         */
        certificateId: string;
      };
      output: {
        /** A certificate returned by Venafi TLS Protect Datacenter. */
        certificate: Record<string, unknown>;
      };
    };
    /** List certificates visible to the Venafi TLS Protect Datacenter integration. */
    "venafitlsprotectdatacenter.list_certificates": {
      input: {
        /**
         * Maximum number of certificates to return.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * The next-page URL returned by a previous list_certificates call.
         * @minLength 1
         */
        next?: string;
      };
      output: {
        /** Certificates returned for this page. */
        certificates: Array<Record<string, unknown>>;
        /** Relative next-page URL returned by Venafi. */
        next: string | null;
      };
    };
  }
}
