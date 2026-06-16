import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Submit a fast SignPath hash-signing request using the REST API payload.json contract and return the signature result immediately. */
    "signpath.fast_sign_hash": {
      input: {
        /**
         * The project slug to submit the signing request to.
         * @minLength 1
         */
        projectSlug: string;
        /**
         * The signing policy slug to submit the request to.
         * @minLength 1
         */
        signingPolicySlug: string;
        /** The signature algorithm used by the SignPath signing policy. */
        signatureAlgorithm: "RsaPkcs1" | "RsaPss" | "Ecdsa";
        /**
         * The RSA hash algorithm OID used when the signing policy uses an RSA key.
         * @minLength 1
         */
        rsaHashAlgorithm?: string;
        /** The ECDSA signature format used when the signing policy uses an ECDSA key. */
        ecdsaSignatureFormat?: "Ieee" | "Asn1";
        /**
         * The base64-encoded hash digest that SignPath should sign.
         * @minLength 1
         */
        base64EncodedHash: string;
        /**
         * Optional description to attach to the signing request, such as a version label.
         * @minLength 1
         */
        description?: string;
        /** Raw JSON object returned by the SignPath API. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /**
         * The signing request identifier created by SignPath.
         * @format uuid
         */
        signingRequestId: string;
        /**
         * The SignPath web application link for the signing request.
         * @format uri
         */
        webLink: string;
        /**
         * The base64-encoded signature returned by SignPath.
         * @minLength 1
         */
        signature: string;
        /** The signature algorithm used by the SignPath signing policy. */
        signatureAlgorithm: "RsaPkcs1" | "RsaPss" | "Ecdsa";
        /**
         * The RSA hash algorithm OID used when the signing policy uses an RSA key.
         * @minLength 1
         */
        rsaHashAlgorithm?: string;
        /**
         * The base64-encoded hash digest that was signed.
         * @minLength 1
         */
        base64EncodedHash: string;
        /** Raw JSON object returned by the SignPath API. */
        metadata?: Record<string, unknown>;
      };
    };
    /** Get the current status and metadata for a SignPath signing request so callers can poll for completion. */
    "signpath.get_signing_request": {
      input: {
        /**
         * The signing request identifier returned by SignPath.
         * @format uuid
         */
        signingRequestId: string;
      };
      output: {
        /** A normalized SignPath signing request. */
        signingRequest: {
          /**
           * The signing request identifier.
           * @format uuid
           */
          id: string;
          /** The high-level SignPath request status. */
          status: "InProgress" | "WaitingForApproval" | "Completed" | "Failed" | "Denied" | "Canceled";
          /** Whether the signing request has reached a terminal status. */
          isFinalStatus: boolean;
          /**
           * The detailed workflow status reported by SignPath.
           * @minLength 1
           */
          workflowStatus: string;
          /**
           * The optional description attached to the signing request.
           * @minLength 1
           */
          description?: string;
          /**
           * The project identifier.
           * @format uuid
           */
          projectId?: string;
          /**
           * The project slug.
           * @minLength 1
           */
          projectSlug?: string;
          /**
           * The project display name.
           * @minLength 1
           */
          projectName?: string;
          /**
           * The artifact configuration identifier.
           * @format uuid
           */
          artifactConfigurationId?: string;
          /**
           * The artifact configuration slug.
           * @minLength 1
           */
          artifactConfigurationSlug?: string;
          /**
           * The artifact configuration display name.
           * @minLength 1
           */
          artifactConfigurationName?: string;
          /**
           * The signing policy identifier.
           * @format uuid
           */
          signingPolicyId?: string;
          /**
           * The signing policy slug.
           * @minLength 1
           */
          signingPolicySlug?: string;
          /**
           * The signing policy display name.
           * @minLength 1
           */
          signingPolicyName?: string;
          /**
           * The SignPath link for downloading the unsigned artifact.
           * @format uri
           */
          unsignedArtifactLink?: string;
          /**
           * The SignPath link for downloading the signed artifact.
           * @format uri
           */
          signedArtifactLink?: string;
          /** Raw JSON object returned by the SignPath API. */
          origin?: Record<string, unknown>;
          /** Raw JSON object returned by the SignPath API. */
          parameters?: Record<string, unknown>;
        };
      };
    };
    /** List SignPath signing policies visible to the API token, optionally filtered by project and policy slug. */
    "signpath.list_signing_policies": {
      input: {
        /**
         * Optional project slug to filter returned signing policies.
         * @minLength 1
         */
        projectSlug?: string;
        /**
         * Optional signing policy slug to filter returned signing policies.
         * @minLength 1
         */
        signingPolicySlug?: string;
      };
      output: {
        /** The signing policies returned by SignPath. */
        signingPolicies: Array<{
          /**
           * The unique identifier of the signing policy.
           * @format uuid
           */
          signingPolicyId: string;
          /**
           * The slug of the signing policy.
           * @minLength 1
           */
          signingPolicySlug: string;
          /**
           * The slug of the project that owns the signing policy.
           * @minLength 1
           */
          projectSlug: string;
          /**
           * The key type returned by SignPath, such as Rsa or Ecc.
           * @minLength 1
           */
          keyType: string;
          /**
           * The signing key size in bits when available.
           * @exclusiveMinimum 0
           */
          keySizeInBits?: number;
          /** The RSA public key parameters returned for RSA-backed signing policies. */
          rsaParameters?: {
            /**
             * The base64 public exponent returned by SignPath.
             * @minLength 1
             */
            publicExponent?: string;
            /**
             * The base64 modulus returned by SignPath.
             * @minLength 1
             */
            modulus?: string;
            [key: string]: unknown;
          };
          /**
           * The base64-encoded X.509 certificate bytes returned by SignPath.
           * @minLength 1
           */
          certificateBytes?: string;
          /**
           * The base64-encoded public key bytes returned by SignPath.
           * @minLength 1
           */
          publicKeyBytes?: string;
        }>;
      };
    };
  }
}
