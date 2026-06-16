import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read the connected Owl Protocol project's summary information. */
    "owl_protocol.get_project_info": {
      input: Record<string, never>;
      output: {
        /** The Owl Protocol project summary returned by the API. */
        project: {
          /**
           * The unique slug for the Owl Protocol project.
           * @minLength 1
           */
          slug: string;
          /**
           * The Owl Protocol team identifier that owns the project.
           * @minLength 1
           */
          teamId: string;
          /**
           * The human-readable Owl Protocol project name.
           * @minLength 1
           */
          name: string;
          /**
           * The EVM chain identifier for the Owl Protocol project.
           * @exclusiveMinimum 0
           */
          defaultChainId: number;
          /** The optional Owl Protocol project description. */
          description?: string;
          /** The optional domains authorized for the Owl Protocol project. */
          authorizedDomains?: Array<string>;
          /** The optional cover image URL for the Owl Protocol project. */
          coverImage?: string;
          /** The optional Owl Protocol project type string. */
          projectType?: string;
          /** Whether the Owl Protocol project is archived. */
          isArchived?: boolean;
          /** Whether the Owl Protocol project allows public users. */
          hasPublicUsers?: boolean;
        };
      };
    };
    /** Read one Owl Protocol token metadata record by chain, contract address, and token id. */
    "owl_protocol.get_project_token": {
      input: {
        /**
         * The EVM chain identifier for the Owl Protocol project.
         * @exclusiveMinimum 0
         */
        chainId: number;
        /**
         * The contract address managed by the Owl Protocol project.
         * @minLength 42
         * @maxLength 42
         * @pattern ^0x[a-fA-F0-9]{40}$
         */
        address: string;
        /**
         * The token identifier within the target contract.
         * @minLength 1
         */
        tokenId: string;
      };
      output: {
        /** The Owl Protocol token record returned by the API. */
        token: {
          /**
           * The EVM chain identifier for the Owl Protocol project.
           * @exclusiveMinimum 0
           */
          chainId: number;
          /**
           * The contract address managed by the Owl Protocol project.
           * @minLength 42
           * @maxLength 42
           * @pattern ^0x[a-fA-F0-9]{40}$
           */
          address: string;
          /**
           * The token identifier within the target contract.
           * @minLength 1
           */
          tokenId: string;
          /** The NFT metadata object stored for the token in Owl Protocol. */
          metadata?: {
            /** The NFT name. */
            name?: string;
            /** The NFT description. */
            description?: string;
            /** The image URL stored for the NFT. */
            image?: string;
            /** The raw image data string stored for the NFT. */
            image_data?: string;
            /** The NFT background color string. */
            background_color?: string;
            /** The animation URL stored for the NFT. */
            animation_url?: string;
            /** The YouTube URL stored for the NFT. */
            youtube_url?: string;
            /** The external URL stored for the NFT. */
            external_url?: string;
            /** The decimals value stored for the NFT. */
            decimals?: number;
            /** The NFT attributes array stored for the token. */
            attributes?: Array<{
              /** The trait name for the attribute. */
              trait_type?: string;
              /** The optional attribute description. */
              description?: string;
              /** The attribute value. */
              value?: unknown;
              /** The maximum numeric value for the attribute when present. */
              max_value?: number;
              /** The NFT display type for the attribute. */
              display_type?: string;
              /** The rendered attribute value string. */
              display_value?: string;
              [key: string]: unknown;
            }>;
            /** The NFT properties map stored for the token. */
            properties?: Record<string, {
                /** The property display name. */
                name?: string;
                /** The property description. */
                description?: string;
                /** The property value. */
                value?: unknown;
                /** The maximum numeric property value when present. */
                max_value?: number;
                /** The NFT display type for the property. */
                display_type?: string;
                /** The rendered property value string. */
                display_value?: string;
                [key: string]: unknown;
              }>;
            /** The localization object stored in Owl Protocol metadata. */
            localization?: {
              /** The localization URI template. */
              uri?: string;
              /** The default locale code. */
              default?: string;
              /** The locale codes available for this token. */
              locales?: Array<string>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
        };
      };
    };
    /** Patch one Owl Protocol token metadata record with a JSON metadata object only. */
    "owl_protocol.patch_project_token": {
      input: {
        /**
         * The EVM chain identifier for the Owl Protocol project.
         * @exclusiveMinimum 0
         */
        chainId: number;
        /**
         * The contract address managed by the Owl Protocol project.
         * @minLength 42
         * @maxLength 42
         * @pattern ^0x[a-fA-F0-9]{40}$
         */
        address: string;
        /**
         * The token identifier within the target contract.
         * @minLength 1
         */
        tokenId: string;
        /** The NFT metadata object stored for the token in Owl Protocol. */
        metadata: {
          /** The NFT name. */
          name?: string;
          /** The NFT description. */
          description?: string;
          /** The image URL stored for the NFT. */
          image?: string;
          /** The raw image data string stored for the NFT. */
          image_data?: string;
          /** The NFT background color string. */
          background_color?: string;
          /** The animation URL stored for the NFT. */
          animation_url?: string;
          /** The YouTube URL stored for the NFT. */
          youtube_url?: string;
          /** The external URL stored for the NFT. */
          external_url?: string;
          /** The decimals value stored for the NFT. */
          decimals?: number;
          /** The NFT attributes array stored for the token. */
          attributes?: Array<{
            /** The trait name for the attribute. */
            trait_type?: string;
            /** The optional attribute description. */
            description?: string;
            /** The attribute value. */
            value?: unknown;
            /** The maximum numeric value for the attribute when present. */
            max_value?: number;
            /** The NFT display type for the attribute. */
            display_type?: string;
            /** The rendered attribute value string. */
            display_value?: string;
            [key: string]: unknown;
          }>;
          /** The NFT properties map stored for the token. */
          properties?: Record<string, {
              /** The property display name. */
              name?: string;
              /** The property description. */
              description?: string;
              /** The property value. */
              value?: unknown;
              /** The maximum numeric property value when present. */
              max_value?: number;
              /** The NFT display type for the property. */
              display_type?: string;
              /** The rendered property value string. */
              display_value?: string;
              [key: string]: unknown;
            }>;
          /** The localization object stored in Owl Protocol metadata. */
          localization?: {
            /** The localization URI template. */
            uri?: string;
            /** The default locale code. */
            default?: string;
            /** The locale codes available for this token. */
            locales?: Array<string>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
      output: {
        /** The Owl Protocol token record returned by the API. */
        token: {
          /**
           * The EVM chain identifier for the Owl Protocol project.
           * @exclusiveMinimum 0
           */
          chainId: number;
          /**
           * The contract address managed by the Owl Protocol project.
           * @minLength 42
           * @maxLength 42
           * @pattern ^0x[a-fA-F0-9]{40}$
           */
          address: string;
          /**
           * The token identifier within the target contract.
           * @minLength 1
           */
          tokenId: string;
          /** The NFT metadata object stored for the token in Owl Protocol. */
          metadata?: {
            /** The NFT name. */
            name?: string;
            /** The NFT description. */
            description?: string;
            /** The image URL stored for the NFT. */
            image?: string;
            /** The raw image data string stored for the NFT. */
            image_data?: string;
            /** The NFT background color string. */
            background_color?: string;
            /** The animation URL stored for the NFT. */
            animation_url?: string;
            /** The YouTube URL stored for the NFT. */
            youtube_url?: string;
            /** The external URL stored for the NFT. */
            external_url?: string;
            /** The decimals value stored for the NFT. */
            decimals?: number;
            /** The NFT attributes array stored for the token. */
            attributes?: Array<{
              /** The trait name for the attribute. */
              trait_type?: string;
              /** The optional attribute description. */
              description?: string;
              /** The attribute value. */
              value?: unknown;
              /** The maximum numeric value for the attribute when present. */
              max_value?: number;
              /** The NFT display type for the attribute. */
              display_type?: string;
              /** The rendered attribute value string. */
              display_value?: string;
              [key: string]: unknown;
            }>;
            /** The NFT properties map stored for the token. */
            properties?: Record<string, {
                /** The property display name. */
                name?: string;
                /** The property description. */
                description?: string;
                /** The property value. */
                value?: unknown;
                /** The maximum numeric property value when present. */
                max_value?: number;
                /** The NFT display type for the property. */
                display_type?: string;
                /** The rendered property value string. */
                display_value?: string;
                [key: string]: unknown;
              }>;
            /** The localization object stored in Owl Protocol metadata. */
            localization?: {
              /** The localization URI template. */
              uri?: string;
              /** The default locale code. */
              default?: string;
              /** The locale codes available for this token. */
              locales?: Array<string>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
        };
      };
    };
  }
}
