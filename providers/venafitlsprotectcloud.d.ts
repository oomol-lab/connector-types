import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a certificate by its Venafi TLS Protect Cloud identifier. */
    "venafitlsprotectcloud.get_certificate": {
      input: {
        /**
         * The unique certificate identifier.
         * @minLength 1
         */
        certificateId: string;
      };
      output: {
        /** A certificate returned by Venafi TLS Protect Cloud. */
        certificate: Record<string, unknown>;
      };
    };
    /** Retrieve a certificate request by its Venafi TLS Protect Cloud identifier. */
    "venafitlsprotectcloud.get_certificate_request": {
      input: {
        /**
         * The unique certificate request identifier.
         * @minLength 1
         */
        certificateRequestId: string;
      };
      output: {
        /** A certificate request returned by Venafi TLS Protect Cloud. */
        certificateRequest: Record<string, unknown>;
      };
    };
    /** List certificates visible to the Venafi TLS Protect Cloud account. */
    "venafitlsprotectcloud.list_certificates": {
      input: {
        /**
         * Maximum number of certificates to return.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Zero-based result offset.
         * @minimum 0
         */
        offset?: number;
        /** Certificate subject text to filter by. */
        subject?: string;
      };
      output: {
        /** Certificates returned for this page. */
        certificates: Array<Record<string, unknown>>;
        /** Total matching certificates when reported by Venafi. */
        total: number | null;
      };
    };
  }
}
