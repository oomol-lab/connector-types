import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a credential schema in Truvera and return the background job handle for polling blockchain completion. */
    "truvera.create_credential_schema": {
      input: {
        /** The JSON Schema body Truvera stores for a credential schema. */
        schema: {
          /**
           * The JSON Schema dialect URI.
           * @minLength 1
           */
          $schema?: string;
          /**
           * The schema name.
           * @minLength 1
           */
          name?: string;
          /**
           * The schema description.
           * @minLength 1
           */
          description?: string;
          /**
           * The JSON Schema type, typically `object`.
           * @minLength 1
           */
          type?: string;
          /** The credential subject properties defined by the schema. */
          properties?: Record<string, Record<string, unknown>>;
          /** The required credential subject property names. */
          required?: Array<string>;
          /** Whether additional properties are allowed by the schema. */
          additionalProperties?: boolean;
        };
      };
      output: {
        /**
         * The Truvera background job identifier.
         * @minLength 1
         */
        jobId: string;
        /** The immediate submit payload returned with the background job handle. */
        data: Record<string, unknown>;
      };
    };
    /** Create a new Truvera DID and return the background job handle for polling blockchain completion. */
    "truvera.create_did": {
      input: {
        /** The DID method to create or filter, as documented by Truvera. */
        type?: "cheqd" | "dock" | "key";
        /**
         * A fully qualified decentralized identifier.
         * @minLength 1
         */
        did?: string;
        /**
         * A fully qualified decentralized identifier.
         * @minLength 1
         */
        controller?: string;
        /** The public key type used for the DID. */
        keyType?: "ed25519" | "bjj" | "secp256k1" | "sr25519";
        /**
         * An optional DIDComm service URL to publish in the DID document.
         * @format uri
         */
        didcommServiceUrl?: string;
        /** Whether Truvera should include a DIDComm service endpoint in the DID document. */
        includeDidcommService?: boolean;
      };
      output: {
        /**
         * The Truvera background job identifier.
         * @minLength 1
         */
        jobId: string;
        /** The immediate submit payload returned with the background job handle. */
        data: Record<string, unknown>;
      };
    };
    /** Delete a Truvera credential schema and return the background job handle for polling completion. */
    "truvera.delete_credential_schema": {
      input: {
        /**
         * The credential schema identifier.
         * @minLength 1
         */
        schemaId: string;
      };
      output: {
        /**
         * The Truvera background job identifier.
         * @minLength 1
         */
        jobId: string;
        /** The immediate submit payload returned with the background job handle. */
        data: Record<string, unknown>;
      };
    };
    /** Delete a Truvera DID and return the background job handle for polling blockchain completion. */
    "truvera.delete_did": {
      input: {
        /**
         * A fully qualified decentralized identifier.
         * @minLength 1
         */
        did: string;
        /** Whether to delete the DID from the blockchain instead of only from the Truvera account. */
        fromBlockchain?: boolean;
      };
      output: {
        /**
         * The Truvera background job identifier.
         * @minLength 1
         */
        jobId: string;
        /** The immediate submit payload returned with the background job handle. */
        data: Record<string, unknown>;
      };
    };
    /** Get one Truvera credential schema by schema identifier. */
    "truvera.get_credential_schema": {
      input: {
        /**
         * The credential schema identifier.
         * @minLength 1
         */
        schemaId: string;
      };
      output: {
        /** One credential schema summary returned by Truvera. */
        schema: {
          /**
           * The schema identifier.
           * @minLength 1
           */
          id?: string;
          /** The JSON Schema body Truvera stores for a credential schema. */
          schema?: {
            /**
             * The JSON Schema dialect URI.
             * @minLength 1
             */
            $schema?: string;
            /**
             * The schema name.
             * @minLength 1
             */
            name?: string;
            /**
             * The schema description.
             * @minLength 1
             */
            description?: string;
            /**
             * The JSON Schema type, typically `object`.
             * @minLength 1
             */
            type?: string;
            /** The credential subject properties defined by the schema. */
            properties?: Record<string, Record<string, unknown>>;
            /** The required credential subject property names. */
            required?: Array<string>;
            /** Whether additional properties are allowed by the schema. */
            additionalProperties?: boolean;
          } | null;
          /**
           * The schema URI.
           * @minLength 1
           */
          uri?: string | null;
          /**
           * The ISO timestamp when the schema was created.
           * @format date-time
           */
          created?: string | null;
          /** Whether the authenticated user owns the schema. */
          isOwner?: boolean | null;
          /**
           * The schema owner display name.
           * @minLength 1
           */
          ownerName?: string | null;
          /**
           * The schema owner logo URL.
           * @minLength 1
           */
          ownerLogo?: string | null;
        };
      };
    };
    /** Get one DID document from Truvera by DID value. */
    "truvera.get_did": {
      input: {
        /**
         * A fully qualified decentralized identifier.
         * @minLength 1
         */
        did: string;
      };
      output: {
        /** A DID document returned by Truvera. */
        didDocument: {
          /** The JSON-LD context for the DID document. */
          "@context"?: string | Array<unknown>;
          /**
           * A fully qualified decentralized identifier.
           * @minLength 1
           */
          id?: string;
          /** The DID authentication verification methods. */
          authentication?: Array<string | Record<string, unknown>>;
          /** The DID assertion verification methods. */
          assertionMethod?: Array<string | Record<string, unknown>>;
          /** The DID capability invocation verification methods. */
          capabilityInvocation?: Array<string | Record<string, unknown>>;
          /** The public keys published in the DID document. */
          publicKey?: Array<{
            /**
             * The DID URL identifier for the public key.
             * @minLength 1
             */
            id: string;
            /**
             * The verification key type returned by Truvera.
             * @minLength 1
             */
            type: string;
            /**
             * The DID that controls the key.
             * @minLength 1
             */
            controller: string;
            /**
             * The Base58-encoded public key material.
             * @minLength 1
             */
            publicKeyBase58: string;
          }>;
        };
      };
    };
    /** Get the latest status and result payload for a Truvera background job. */
    "truvera.get_job": {
      input: {
        /**
         * The Truvera background job identifier.
         * @minLength 1
         */
        jobId: string;
      };
      output: {
        /**
         * The Truvera background job identifier.
         * @minLength 1
         */
        jobId: string;
        /** The Truvera job status. */
        status: "todo" | "finalized" | "in_progress" | "error";
        /** The blockchain or API result associated with the job. */
        result?: Record<string, unknown>;
      };
    };
    /** Get the authenticated Truvera account profile for the configured API key. */
    "truvera.get_profile": {
      input: Record<string, never>;
      output: {
        /** The authenticated Truvera account profile returned by the profile endpoint. */
        profile: {
          /**
           * The Truvera profile display name.
           * @minLength 1
           */
          name: string;
          /**
           * The Truvera profile image URL or asset path.
           * @minLength 1
           */
          image: string;
        };
      };
    };
    /** List credential schemas created by the authenticated Truvera account. */
    "truvera.list_credential_schemas": {
      input: {
        /**
         * How many schema results to skip before listing.
         * @minimum 0
         */
        offset?: number;
        /**
         * How many schema results to return, up to the Truvera maximum of 64.
         * @minimum 1
         * @maximum 64
         */
        limit?: number;
        /** Whether Truvera should include ecosystem metadata in schema results. */
        includeEcosystems?: boolean;
      };
      output: {
        /** The credential schema summaries returned by Truvera. */
        schemas: Array<{
          /**
           * The schema identifier.
           * @minLength 1
           */
          id?: string;
          /** The JSON Schema body Truvera stores for a credential schema. */
          schema?: {
            /**
             * The JSON Schema dialect URI.
             * @minLength 1
             */
            $schema?: string;
            /**
             * The schema name.
             * @minLength 1
             */
            name?: string;
            /**
             * The schema description.
             * @minLength 1
             */
            description?: string;
            /**
             * The JSON Schema type, typically `object`.
             * @minLength 1
             */
            type?: string;
            /** The credential subject properties defined by the schema. */
            properties?: Record<string, Record<string, unknown>>;
            /** The required credential subject property names. */
            required?: Array<string>;
            /** Whether additional properties are allowed by the schema. */
            additionalProperties?: boolean;
          } | null;
          /**
           * The schema URI.
           * @minLength 1
           */
          uri?: string | null;
          /**
           * The ISO timestamp when the schema was created.
           * @format date-time
           */
          created?: string | null;
          /** Whether the authenticated user owns the schema. */
          isOwner?: boolean | null;
          /**
           * The schema owner display name.
           * @minLength 1
           */
          ownerName?: string | null;
          /**
           * The schema owner logo URL.
           * @minLength 1
           */
          ownerLogo?: string | null;
        }>;
      };
    };
    /** List the DIDs controlled by the authenticated Truvera account. */
    "truvera.list_dids": {
      input: {
        /**
         * How many DID results to skip before listing.
         * @minimum 0
         */
        offset?: number;
        /**
         * How many DID results to return, up to the Truvera maximum of 64.
         * @minimum 1
         * @maximum 64
         */
        limit?: number;
        /** The DID method to create or filter, as documented by Truvera. */
        type?: "cheqd" | "dock" | "key";
      };
      output: {
        /** The DID summaries returned by Truvera. */
        dids: Array<{
          /**
           * The DID identifier.
           * @minLength 1
           */
          id?: string | null;
          /**
           * The DID value.
           * @minLength 1
           */
          did?: string | null;
          /** The DID method to create or filter, as documented by Truvera. */
          type?: "cheqd" | "dock" | "key" | null;
          /**
           * The DID controller.
           * @minLength 1
           */
          controller?: string | null;
          /**
           * The number of credentials issued by the DID as returned by Truvera.
           * @minLength 1
           */
          credentialCount?: string | null;
          /**
           * The ISO timestamp of the DID metadata update time.
           * @format date-time
           */
          updatedLast?: string | null;
          /** The optional public profile metadata associated with the DID. */
          profile?: {
            /**
             * The DID profile display name.
             * @minLength 1
             */
            name?: string;
            /**
             * The DID profile logo URL or empty string.
             * @minLength 0
             */
            logo?: string;
            /**
             * The DID profile description.
             * @minLength 1
             */
            description?: string;
          } | null;
          /**
           * The DID key identifier.
           * @minLength 1
           */
          keyId?: string | null;
          /**
           * The Truvera background job identifier for this DID.
           * @minLength 1
           */
          jobId?: string | null;
          /** The trust registries associated with the DID. */
          trustRegistries?: Array<{
            /**
             * The trust registry identifier.
             * @minLength 1
             */
            id?: string;
            /**
             * The trust registry display name.
             * @minLength 1
             */
            name?: string;
            /**
             * The trust registry logo URL.
             * @format uri
             */
            logoUrl?: string;
          }>;
        }>;
      };
    };
  }
}
