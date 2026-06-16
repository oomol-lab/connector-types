import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a buyer token in Skyfire for one seller service or seller domain, including funded pay and identity-carrying KYA variants. */
    "skyfire.create_token": {
      input: {
        /** The Skyfire token type to create. */
        type: "kya" | "pay" | "kya-pay";
        /**
         * The buyer's internal identifier for the transaction or token.
         * @minLength 1
         */
        buyerTag?: string;
        /**
         * The token amount to fund on a pay or kya-pay token.
         * @minLength 1
         */
        tokenAmount?: string;
        /**
         * The seller service ID to authorize against.
         * @minLength 1
         */
        sellerServiceId?: string;
        /**
         * The seller domain or full URL when creating a domain-scoped token.
         * @minLength 1
         */
        sellerDomainOrUrl?: string;
        /** The Unix timestamp in seconds when the token should expire. */
        expiresAt?: number;
        /**
         * The additional identity fields to include when creating a KYA or KYA-pay token.
         * @minItems 1
         */
        identityPermissions?: Array<"name" | "email" | "phone" | "country" | "region" | "city" | "postalCode" | "walletAddress" | "organizationName" | "organizationWebsite">;
      };
      output: {
        /**
         * The signed Skyfire JWT token.
         * @minLength 1
         */
        token: string;
        /** The raw Skyfire token creation response. */
        raw?: unknown;
      };
    };
    /** List all approved and active services from the Skyfire marketplace directory. */
    "skyfire.get_all_services": {
      input: Record<string, never>;
      output: {
        /** The services returned by the Skyfire directory. */
        services: Array<{
          /**
           * The Skyfire service identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The human-readable service name.
           * @minLength 1
           */
          name: string;
          /** The service description published in the Skyfire marketplace. */
          description: string | null;
          /** The marketplace tags attached to the service. */
          tags: Array<string>;
          /**
           * The Skyfire service type.
           * @minLength 1
           */
          type: string;
          /** The service price as returned by Skyfire. */
          price: string | null;
          /** The service pricing model returned by Skyfire. */
          priceModel: string | null;
          /** The minimum token amount accepted by this service, when provided. */
          minimumTokenAmount: string | null;
          /** The maximum token lifetime in seconds allowed by this service. */
          maxTokenTTLSeconds: number | null;
          /** The human identity requirements declared by the service. */
          humanIdentityRequirement: {
            /** The identity levels accepted by the service. */
            identityLevels?: Array<string>;
            /** The organization identity fields accepted by the service. */
            organization?: Array<string>;
            /** The individual identity fields accepted by the service. */
            individual?: Array<string>;
            [key: string]: unknown;
          };
          /** The seller account that owns the service. */
          seller: {
            /**
             * The seller agent identifier.
             * @minLength 1
             */
            id: string;
            /**
             * The seller display name.
             * @minLength 1
             */
            name: string;
          };
          /** The OpenAPI specification URL published for the service. */
          openApiSpecUrl: string | null;
          /** The Skyfire token types accepted by the service. */
          acceptedTokens: Array<string>;
          /**
           * The ISO timestamp when the service was created.
           * @minLength 1
           */
          createdAt: string;
          /**
           * The ISO timestamp when the service was last updated.
           * @minLength 1
           */
          updatedAt: string;
        }>;
      };
    };
    /** Get one Skyfire marketplace service by its service ID. */
    "skyfire.get_service": {
      input: {
        /**
         * The Skyfire service ID to fetch.
         * @minLength 1
         */
        serviceId: string;
      };
      output: {
        /** A Skyfire marketplace service summary. */
        service: {
          /**
           * The Skyfire service identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The human-readable service name.
           * @minLength 1
           */
          name: string;
          /** The service description published in the Skyfire marketplace. */
          description: string | null;
          /** The marketplace tags attached to the service. */
          tags: Array<string>;
          /**
           * The Skyfire service type.
           * @minLength 1
           */
          type: string;
          /** The service price as returned by Skyfire. */
          price: string | null;
          /** The service pricing model returned by Skyfire. */
          priceModel: string | null;
          /** The minimum token amount accepted by this service, when provided. */
          minimumTokenAmount: string | null;
          /** The maximum token lifetime in seconds allowed by this service. */
          maxTokenTTLSeconds: number | null;
          /** The human identity requirements declared by the service. */
          humanIdentityRequirement: {
            /** The identity levels accepted by the service. */
            identityLevels?: Array<string>;
            /** The organization identity fields accepted by the service. */
            organization?: Array<string>;
            /** The individual identity fields accepted by the service. */
            individual?: Array<string>;
            [key: string]: unknown;
          };
          /** The seller account that owns the service. */
          seller: {
            /**
             * The seller agent identifier.
             * @minLength 1
             */
            id: string;
            /**
             * The seller display name.
             * @minLength 1
             */
            name: string;
          };
          /** The OpenAPI specification URL published for the service. */
          openApiSpecUrl: string | null;
          /** The Skyfire token types accepted by the service. */
          acceptedTokens: Array<string>;
          /**
           * The ISO timestamp when the service was created.
           * @minLength 1
           */
          createdAt: string;
          /**
           * The ISO timestamp when the service was last updated.
           * @minLength 1
           */
          updatedAt: string;
        };
      };
    };
    /** List all approved and active Skyfire marketplace services owned by one seller agent. */
    "skyfire.get_services_by_agent": {
      input: {
        /**
         * The seller agent ID whose services should be listed.
         * @minLength 1
         */
        agentId: string;
      };
      output: {
        /** The services returned for the seller agent. */
        services: Array<{
          /**
           * The Skyfire service identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The human-readable service name.
           * @minLength 1
           */
          name: string;
          /** The service description published in the Skyfire marketplace. */
          description: string | null;
          /** The marketplace tags attached to the service. */
          tags: Array<string>;
          /**
           * The Skyfire service type.
           * @minLength 1
           */
          type: string;
          /** The service price as returned by Skyfire. */
          price: string | null;
          /** The service pricing model returned by Skyfire. */
          priceModel: string | null;
          /** The minimum token amount accepted by this service, when provided. */
          minimumTokenAmount: string | null;
          /** The maximum token lifetime in seconds allowed by this service. */
          maxTokenTTLSeconds: number | null;
          /** The human identity requirements declared by the service. */
          humanIdentityRequirement: {
            /** The identity levels accepted by the service. */
            identityLevels?: Array<string>;
            /** The organization identity fields accepted by the service. */
            organization?: Array<string>;
            /** The individual identity fields accepted by the service. */
            individual?: Array<string>;
            [key: string]: unknown;
          };
          /** The seller account that owns the service. */
          seller: {
            /**
             * The seller agent identifier.
             * @minLength 1
             */
            id: string;
            /**
             * The seller display name.
             * @minLength 1
             */
            name: string;
          };
          /** The OpenAPI specification URL published for the service. */
          openApiSpecUrl: string | null;
          /** The Skyfire token types accepted by the service. */
          acceptedTokens: Array<string>;
          /**
           * The ISO timestamp when the service was created.
           * @minLength 1
           */
          createdAt: string;
          /**
           * The ISO timestamp when the service was last updated.
           * @minLength 1
           */
          updatedAt: string;
        }>;
      };
    };
  }
}
