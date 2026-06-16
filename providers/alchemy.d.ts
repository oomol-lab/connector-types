import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve historical asset transfers for Ethereum mainnet addresses through Alchemy. */
    "alchemy.get_asset_transfers": {
      input: {
        /**
         * Starting block tag or hex block number.
         * @minLength 1
         */
        fromBlock?: string;
        /**
         * Ending block tag or hex block number.
         * @minLength 1
         */
        toBlock?: string;
        /**
         * Sender address filter.
         * @minLength 1
         */
        fromAddress?: string;
        /**
         * Recipient address filter.
         * @minLength 1
         */
        toAddress?: string;
        /** Whether zero-value transfers should be excluded. */
        excludeZeroValue?: boolean;
        /**
         * Transfer categories to include in the response.
         * @minItems 1
         */
        category: Array<"external" | "internal" | "erc20" | "erc721" | "erc1155" | "specialnft">;
        /**
         * Token or NFT contract addresses used to filter transfers.
         * @minItems 1
         */
        contractAddresses?: Array<string>;
        /** Transfer ordering returned by Alchemy. */
        order?: "asc" | "desc";
        /** Whether Alchemy should attach block metadata when available. */
        withMetadata?: boolean;
        /**
         * Hex-encoded maximum number of transfers to return.
         * @minLength 1
         */
        maxCount?: string;
        /**
         * Pagination key returned by a previous transfers call.
         * @minLength 1
         */
        pageKey?: string;
      };
      output: {
        /**
         * Alchemy result string returned when no transfer object payload is available.
         * @minLength 1
         */
        message?: string | null;
        /**
         * Pagination key for fetching the next transfer page.
         * @minLength 1
         */
        pageKey?: string | null;
        /** Transfer objects returned by Alchemy. */
        transfers: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve metadata for a specific NFT from Alchemy Ethereum mainnet. */
    "alchemy.get_nft_metadata": {
      input: {
        /**
         * NFT contract address.
         * @minLength 1
         */
        contractAddress: string;
        /**
         * NFT token identifier in decimal or hex form.
         * @minLength 1
         */
        tokenId: string;
        /** NFT token type forwarded to Alchemy. */
        tokenType?: "ERC721" | "ERC1155";
        /**
         * Timeout in milliseconds for live token URI fetches when metadata is requested.
         * @minimum 0
         */
        tokenUriTimeoutInMs?: number;
      };
      output: {
        /** NFT metadata object returned by Alchemy. */
        nft: Record<string, unknown>;
      };
    };
    /** Retrieve NFTs currently owned by an address from Alchemy Ethereum mainnet. */
    "alchemy.get_nfts_for_owner": {
      input: {
        /**
         * Owner address or ENS name accepted by Alchemy.
         * @minLength 1
         */
        owner: string;
        /**
         * NFT contract addresses used to filter the response.
         * @minItems 1
         * @maxItems 45
         */
        contractAddresses?: Array<string>;
        /** Whether NFT metadata should be returned. */
        withMetadata?: boolean;
        /** NFT ordering mode accepted by Alchemy. */
        orderBy?: "transferTime";
        /**
         * Timeout in milliseconds for live token URI fetches when metadata is requested.
         * @minimum 0
         */
        tokenUriTimeoutInMs?: number;
        /**
         * Pagination key returned by a previous NFTs-by-owner call.
         * @minLength 1
         */
        pageKey?: string;
        /**
         * Maximum number of NFTs to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** NFT objects returned by Alchemy. */
        ownedNfts: Array<Record<string, unknown>>;
        /** Total number of NFTs owned by the requested address. */
        totalCount: number;
        /**
         * Pagination key for the next NFTs-by-owner page.
         * @minLength 1
         */
        pageKey?: string | null;
        /** Block-validity metadata returned by Alchemy. */
        validAt?: Record<string, unknown> | null;
      };
    };
    /** Retrieve ERC-20 token balances for a wallet address from Alchemy Ethereum mainnet. */
    "alchemy.get_token_balances": {
      input: {
        /**
         * Wallet address whose token balances should be retrieved.
         * @minLength 1
         */
        address: string;
        /** Token selection forwarded to Alchemy Token API. */
        tokenSpec?: "erc20" | "DEFAULT_TOKENS" | "NATIVE_TOKEN" | Array<string>;
        /**
         * Pagination key returned by a previous Alchemy token-balance call.
         * @minLength 1
         */
        pageKey?: string;
        /**
         * Maximum number of balances to request per page.
         * @minimum 1
         * @maximum 100
         */
        maxCount?: number;
      };
      output: {
        /**
         * Wallet address used for the balance lookup.
         * @minLength 1
         */
        address: string;
        /**
         * Pagination key for fetching the next page of token balances.
         * @minLength 1
         */
        pageKey?: string | null;
        /** Token balance entries returned by Alchemy. */
        tokenBalances: Array<{
          /**
           * ERC-20 token contract address.
           * @minLength 1
           */
          contractAddress: string;
          /**
           * Hex-encoded token balance returned by Alchemy when available.
           * @minLength 1
           */
          tokenBalance: string | null;
          /**
           * Alchemy error string for this token balance when present.
           * @minLength 1
           */
          error: string | null;
        }>;
      };
    };
    /** Retrieve ERC-20 token metadata for one contract from Alchemy Ethereum mainnet. */
    "alchemy.get_token_metadata": {
      input: {
        /**
         * ERC-20 token contract address.
         * @minLength 1
         */
        contractAddress: string;
      };
      output: {
        /**
         * Token name returned by Alchemy when available.
         * @minLength 1
         */
        name: string | null;
        /**
         * Token symbol returned by Alchemy when available.
         * @minLength 1
         */
        symbol: string | null;
        /** Token decimals returned by Alchemy when available. */
        decimals: number | null;
        /**
         * Token logo URL returned by Alchemy when available.
         * @format uri
         */
        logo: string | null;
      };
    };
  }
}
