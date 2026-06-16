import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current Blocknative gas-price distribution for Ethereum mainnet. */
    "blocknative.get_gas_price_distribution": {
      input: {
        /** The supported chain ID for gas distribution. Only Ethereum mainnet (`1`) works. */
        chainId?: 1;
      };
      output: {
        /**
         * The chain ecosystem returned by Blocknative.
         * @minLength 1
         */
        system: string;
        /**
         * The network name returned by Blocknative.
         * @minLength 1
         */
        network: string;
        /**
         * The gas-price unit returned by Blocknative.
         * @minLength 1
         */
        unit: string;
        /** The highest priced transaction returned by Blocknative. */
        maxPrice: number;
        /** The current block number used for the distribution snapshot. */
        currentBlockNumber: number;
        /** Milliseconds since the last block at the distribution snapshot. */
        msSinceLastBlock: number;
        /** The normalized top-N gas-price distribution returned by Blocknative. */
        topNDistribution: {
          /** The ordered gas-price distribution buckets returned by Blocknative. */
          distribution: Array<[number, number]>;
          /** The top-N pending transactions covered by the distribution. */
          n: number;
        };
      };
    };
    /** Get Blocknative gas-price estimates for the default chain or a selected network. */
    "blocknative.get_gas_prices": {
      input: {
        /**
         * The chain ID to query. Use `0` for Bitcoin when querying the Gas Price API.
         * @minimum 0
         */
        chainId?: number;
        /**
         * The chain ecosystem used by Blocknative, for example `ethereum` or `story`.
         * @minLength 1
         */
        system?: string;
        /**
         * The network name used by Blocknative, for example `main` or `mainnet`.
         * @minLength 1
         */
        network?: string;
        /**
         * Up to five confidence levels used to override the default prediction buckets.
         * @minItems 1
         * @maxItems 5
         */
        confidenceLevels?: Array<number>;
      };
      output: {
        /**
         * The chain ecosystem returned by Blocknative.
         * @minLength 1
         */
        system: string;
        /**
         * The network name returned by Blocknative.
         * @minLength 1
         */
        network: string;
        /**
         * The gas-price unit returned by Blocknative.
         * @minLength 1
         */
        unit: string;
        /** The highest priced transaction returned by Blocknative. */
        maxPrice: number;
        /** The current block number used for the prediction snapshot. */
        currentBlockNumber: number;
        /** Milliseconds since the last block at the prediction snapshot. */
        msSinceLastBlock: number;
        /** The predicted block-price payloads returned by Blocknative. */
        blockPrices: Array<{
          /** The block number this prediction targets. */
          blockNumber: number;
          /** The estimated number of transactions in the predicted block. */
          estimatedTransactionCount: number;
          /** The base fee per gas returned by Blocknative. */
          baseFeePerGas: number;
          /** The blob base fee per gas returned by Blocknative when present. */
          blobBaseFeePerGas?: number;
          /** The ordered gas-price estimates returned for the block. */
          estimatedPrices: Array<{
            /** The inclusion confidence for this gas-price bucket. */
            confidence: number;
            /** The gas price returned for this confidence bucket. */
            price: number;
            /** The max priority fee per gas returned for this confidence bucket. */
            maxPriorityFeePerGas?: number;
            /** The max fee per gas returned for this confidence bucket. */
            maxFeePerGas?: number;
          }>;
        }>;
      };
    };
    /** List the gas-oracle metadata exposed by Blocknative across supported chains. */
    "blocknative.list_gas_oracles": {
      input: Record<string, never>;
      output: {
        /** The gas oracles returned by Blocknative. */
        oracles: Array<{
          /**
           * The blockchain architecture returned by Blocknative.
           * @minLength 1
           */
          arch: string;
          /** The unique chain ID returned by Blocknative. */
          chainId: number;
          /**
           * The human-readable chain label returned by Blocknative.
           * @minLength 1
           */
          label: string;
          /**
           * The internal chain name returned by Blocknative.
           * @minLength 1
           */
          name: string;
          /**
           * The network name returned by Blocknative.
           * @minLength 1
           */
          network: string;
          /** The chain ecosystem returned by Blocknative. */
          system?: string;
          /** The gas-oracle contract addresses keyed by Blocknative oracle version. */
          addressByVersion: Record<string, string>;
          /**
           * The public RPC URL returned by Blocknative.
           * @minLength 1
           */
          rpcUrl: string;
          /**
           * The public block-explorer URL returned by Blocknative.
           * @minLength 1
           */
          blockExplorerUrl: string;
          /** The chain icon URL returned by Blocknative. */
          icon?: string;
          /** Whether the returned oracle belongs to a testnet. */
          testnet: boolean;
        }>;
      };
    };
    /** List the chains currently supported by the Blocknative Gas Platform. */
    "blocknative.list_supported_chains": {
      input: Record<string, never>;
      output: {
        /** The supported chains returned by Blocknative. */
        chains: Array<{
          /**
           * The blockchain architecture returned by Blocknative.
           * @minLength 1
           */
          arch: string;
          /** The unique chain ID returned by Blocknative. */
          chainId: number;
          /**
           * The human-readable chain label returned by Blocknative.
           * @minLength 1
           */
          label: string;
          /** The Blocknative features supported for the returned chain. */
          features: Array<string>;
          /** The chain icon URL returned by Blocknative. */
          icon?: string;
          /**
           * The chain ecosystem returned by Blocknative.
           * @minLength 1
           */
          system: string;
          /**
           * The network name returned by Blocknative.
           * @minLength 1
           */
          network: string;
        }>;
      };
    };
  }
}
