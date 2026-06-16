import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the best current OpenSea listing for a single NFT. */
    "opensea.get_best_nft_listing": {
      input: {
        /**
         * The unique OpenSea collection slug.
         * @minLength 1
         */
        slug: string;
        /**
         * The NFT token identifier.
         * @minLength 1
         */
        identifier: string;
        /** Whether OpenSea should include private listings. */
        includePrivateListings?: boolean;
      };
      output: {
        /** A normalized OpenSea marketplace order. */
        listing: {
          /** The OpenSea order hash. */
          orderHash: string | null;
          /** The order type returned by OpenSea. */
          type: string | null;
          /** The current order price when returned by OpenSea. */
          price: string | null;
          /** The order currency symbol when returned by OpenSea. */
          currency: string | null;
          /** The maker address when returned by OpenSea. */
          maker: string | null;
          /** The taker address when returned by OpenSea. */
          taker: string | null;
          /** The raw object returned by OpenSea. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the best current OpenSea offer for a single NFT. */
    "opensea.get_best_nft_offer": {
      input: {
        /**
         * The unique OpenSea collection slug.
         * @minLength 1
         */
        slug: string;
        /**
         * The NFT token identifier.
         * @minLength 1
         */
        identifier: string;
      };
      output: {
        /** A normalized OpenSea marketplace order. */
        offer: {
          /** The OpenSea order hash. */
          orderHash: string | null;
          /** The order type returned by OpenSea. */
          type: string | null;
          /** The current order price when returned by OpenSea. */
          price: string | null;
          /** The order currency symbol when returned by OpenSea. */
          currency: string | null;
          /** The maker address when returned by OpenSea. */
          maker: string | null;
          /** The taker address when returned by OpenSea. */
          taker: string | null;
          /** The raw object returned by OpenSea. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one OpenSea collection including details, links, fees, and traits. */
    "opensea.get_collection": {
      input: {
        /**
         * The unique OpenSea collection slug.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** A normalized OpenSea collection summary. */
        collection: {
          /** The OpenSea collection slug. */
          slug: string | null;
          /** The collection display name. */
          name: string | null;
          /** The collection description. */
          description: string | null;
          /** The collection image URL. */
          imageUrl: string | null;
          /** The collection banner image URL. */
          bannerImageUrl: string | null;
          /** The collection owner address when returned by OpenSea. */
          owner: string | null;
          /** The raw object returned by OpenSea. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get comprehensive OpenSea statistics for one collection. */
    "opensea.get_collection_stats": {
      input: {
        /**
         * The unique OpenSea collection slug.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** Collection statistics returned by OpenSea. */
        stats: {
          /** Total collection statistics returned by OpenSea. */
          total: {
            /** Total trading volume. */
            volume?: number;
            /** Total sales count. */
            sales?: number;
            /** Total number of owners. */
            num_owners?: number;
            /** Current floor price. */
            floor_price?: number;
            /** Symbol for the floor price currency. */
            floor_price_symbol?: string;
            [key: string]: unknown;
          };
          /** Interval statistics for the collection. */
          intervals: Array<{
            /** The interval label returned by OpenSea. */
            interval: string;
            /** The trading volume for the interval. */
            volume: number;
            /** The sales count for the interval. */
            sales: number;
          }>;
        };
      };
    };
    /** Get metadata, traits, ownership, and rarity for a single OpenSea NFT. */
    "opensea.get_nft": {
      input: {
        /**
         * The blockchain identifier used by OpenSea, such as ethereum, polygon, or base.
         * @minLength 1
         */
        chain: string;
        /**
         * The NFT contract address.
         * @minLength 1
         */
        address: string;
        /**
         * The NFT token identifier.
         * @minLength 1
         */
        identifier: string;
      };
      output: {
        /** A normalized OpenSea NFT summary. */
        nft: {
          /** The NFT token identifier. */
          identifier: string | null;
          /** The NFT display name. */
          name: string | null;
          /** The NFT description. */
          description: string | null;
          /** The NFT image URL. */
          imageUrl: string | null;
          /** The collection slug associated with the NFT. */
          collection: string | null;
          /** The NFT contract address. */
          contract: string | null;
          /** The blockchain identifier associated with the NFT. */
          chain: string | null;
          /** The raw object returned by OpenSea. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List NFTs in one OpenSea collection with optional trait filtering. */
    "opensea.list_collection_nfts": {
      input: {
        /**
         * The unique OpenSea collection slug.
         * @minLength 1
         */
        slug: string;
        /**
         * Trait filters to AND-combine for returned NFTs.
         * @minItems 1
         */
        traits?: Array<{
          /**
           * The trait category name.
           * @minLength 1
           */
          traitType: string;
          /**
           * The trait value to match.
           * @minLength 1
           */
          value: string;
        }>;
        /** Filter to NFTs that have an ERC-8217 agent binding. */
        hasAgentBinding?: boolean;
        /**
         * Number of items to return per page.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * The OpenSea pagination cursor from the previous response.
         * @minLength 1
         */
        next?: string;
      };
      output: {
        /** Normalized OpenSea NFT summaries. */
        nfts: Array<{
          /** The NFT token identifier. */
          identifier: string | null;
          /** The NFT display name. */
          name: string | null;
          /** The NFT description. */
          description: string | null;
          /** The NFT image URL. */
          imageUrl: string | null;
          /** The collection slug associated with the NFT. */
          collection: string | null;
          /** The NFT contract address. */
          contract: string | null;
          /** The blockchain identifier associated with the NFT. */
          chain: string | null;
          /** The raw object returned by OpenSea. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination cursors returned by OpenSea. */
        pagination: {
          /** The cursor for the next page when one is available. */
          next: string | null;
          /** The cursor for the previous page when one is available. */
          previous: string | null;
        };
        /** The raw object returned by OpenSea. */
        raw: Record<string, unknown>;
      };
    };
    /** List collection-level offers for an OpenSea collection. */
    "opensea.list_collection_offers": {
      input: {
        /**
         * The unique OpenSea collection slug.
         * @minLength 1
         */
        slug: string;
        /**
         * Number of items to return per page.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * The OpenSea pagination cursor from the previous response.
         * @minLength 1
         */
        next?: string;
      };
      output: {
        /** Normalized OpenSea offers. */
        offers: Array<{
          /** The OpenSea order hash. */
          orderHash: string | null;
          /** The order type returned by OpenSea. */
          type: string | null;
          /** The current order price when returned by OpenSea. */
          price: string | null;
          /** The order currency symbol when returned by OpenSea. */
          currency: string | null;
          /** The maker address when returned by OpenSea. */
          maker: string | null;
          /** The taker address when returned by OpenSea. */
          taker: string | null;
          /** The raw object returned by OpenSea. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination cursors returned by OpenSea. */
        pagination: {
          /** The cursor for the next page when one is available. */
          next: string | null;
          /** The cursor for the previous page when one is available. */
          previous: string | null;
        };
        /** The raw object returned by OpenSea. */
        raw: Record<string, unknown>;
      };
    };
    /** List all available traits for an OpenSea collection. */
    "opensea.list_collection_traits": {
      input: {
        /**
         * The unique OpenSea collection slug.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** Collection trait metadata returned by OpenSea. */
        traits: {
          /** Trait category names mapped to their OpenSea data type. */
          categories: Record<string, string>;
          /** Trait category names mapped to value counts or numeric range metadata. */
          counts: Record<string, Record<string, unknown>>;
        };
      };
    };
    /** Search OpenSea collections, tokens, NFTs, and accounts by relevance. */
    "opensea.search": {
      input: {
        /**
         * Search query text.
         * @minLength 1
         */
        query: string;
        /**
         * Blockchain identifiers used to filter search results.
         * @minItems 1
         */
        chains?: Array<string>;
        /**
         * Asset type filters. OpenSea defaults to collection and token when omitted.
         * @minItems 1
         */
        assetTypes?: Array<"collection" | "nft" | "token" | "account">;
        /**
         * Number of search results to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
      };
      output: {
        /** Raw ranked search results returned by OpenSea. */
        results: Array<Record<string, unknown>>;
        /** The raw object returned by OpenSea. */
        raw: Record<string, unknown>;
      };
    };
  }
}
