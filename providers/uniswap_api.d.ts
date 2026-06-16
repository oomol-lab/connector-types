import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check whether the swapper wallet needs an ERC-20 approval transaction before swapping. */
    "uniswap_api.check_approval": {
      input: {
        /**
         * The wallet address that would send the token.
         * @minLength 1
         * @pattern ^(0x)?[0-9a-fA-F]{40}$
         */
        walletAddress: string;
        /**
         * The token contract address to approve.
         * @minLength 1
         * @pattern ^(0x)?[0-9a-fA-F]{40}$
         */
        token: string;
        /**
         * The token amount that must be spendable.
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        amount: string;
        /** The blockchain chain ID supported by the Uniswap Trading API. */
        chainId: 1 | 10 | 56 | 130 | 137 | 143 | 196 | 324 | 480 | 1301 | 1868 | 4217 | 4326 | 8453 | 84532 | 10143 | 42161 | 42220 | 43114 | 59144 | 81457 | 7777777 | 11155111;
        /** The urgency mode used for approval or swap pricing. */
        urgency?: "normal" | "fast" | "urgent" | {
          /** The urgency level. */
          level: "normal" | "fast" | "urgent";
          /** Optional gas caps applied on top of the selected urgency tier. */
          overrides: {
            /**
             * The maximum priority fee per gas in wei.
             * @minLength 1
             * @pattern ^[0-9]+$
             */
            maxPriorityFeePerGas?: string;
            /**
             * The maximum total fee per gas in wei.
             * @minLength 1
             * @pattern ^[0-9]+$
             */
            maxFeePerGas?: string;
            /**
             * The replacement gas limit cap in gas units.
             * @minLength 1
             * @pattern ^[0-9]+$
             */
            gasLimit?: string;
          };
        };
        /** Whether the gas-fee fields should be requested from Uniswap. */
        includeGasInfo?: boolean;
        /**
         * The output token address when provided for routing context.
         * @minLength 1
         * @pattern ^(0x)?[0-9a-fA-F]{40}$
         */
        tokenOut?: string;
        /** The blockchain chain ID supported by the Uniswap Trading API. */
        tokenOutChainId?: 1 | 10 | 56 | 130 | 137 | 143 | 196 | 324 | 480 | 1301 | 1868 | 4217 | 4326 | 8453 | 84532 | 10143 | 42161 | 42220 | 43114 | 59144 | 81457 | 7777777 | 11155111;
        /** Whether Permit2 should stay enabled. Set false to send x-permit2-disabled: true. */
        enablePermit2?: boolean;
      };
      output: {
        /**
         * The upstream Uniswap request identifier.
         * @minLength 1
         */
        requestId: string;
        /** One transaction request returned by Uniswap. */
        approval: {
          /**
           * The transaction recipient address.
           * @minLength 1
           * @pattern ^(0x)?[0-9a-fA-F]{40}$
           */
          to: string;
          /**
           * The transaction sender address.
           * @minLength 1
           * @pattern ^(0x)?[0-9a-fA-F]{40}$
           */
          from: string;
          /**
           * The transaction calldata.
           * @minLength 1
           */
          data: string;
          /**
           * The transaction value in wei.
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          value: string;
          /** The blockchain chain ID supported by the Uniswap Trading API. */
          chainId: 1 | 10 | 56 | 130 | 137 | 143 | 196 | 324 | 480 | 1301 | 1868 | 4217 | 4326 | 8453 | 84532 | 10143 | 42161 | 42220 | 43114 | 59144 | 81457 | 7777777 | 11155111;
          /**
           * The gas limit returned by Uniswap when present.
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          gasLimit: string | null;
          /**
           * The max fee per gas returned by Uniswap when present.
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          maxFeePerGas: string | null;
          /**
           * The max priority fee per gas returned by Uniswap when present.
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          maxPriorityFeePerGas: string | null;
          /**
           * The gas price returned by Uniswap when present.
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          gasPrice: string | null;
        } | null;
        /** One transaction request returned by Uniswap. */
        cancel: {
          /**
           * The transaction recipient address.
           * @minLength 1
           * @pattern ^(0x)?[0-9a-fA-F]{40}$
           */
          to: string;
          /**
           * The transaction sender address.
           * @minLength 1
           * @pattern ^(0x)?[0-9a-fA-F]{40}$
           */
          from: string;
          /**
           * The transaction calldata.
           * @minLength 1
           */
          data: string;
          /**
           * The transaction value in wei.
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          value: string;
          /** The blockchain chain ID supported by the Uniswap Trading API. */
          chainId: 1 | 10 | 56 | 130 | 137 | 143 | 196 | 324 | 480 | 1301 | 1868 | 4217 | 4326 | 8453 | 84532 | 10143 | 42161 | 42220 | 43114 | 59144 | 81457 | 7777777 | 11155111;
          /**
           * The gas limit returned by Uniswap when present.
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          gasLimit: string | null;
          /**
           * The max fee per gas returned by Uniswap when present.
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          maxFeePerGas: string | null;
          /**
           * The max priority fee per gas returned by Uniswap when present.
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          maxPriorityFeePerGas: string | null;
          /**
           * The gas price returned by Uniswap when present.
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          gasPrice: string | null;
        } | null;
        /**
         * The estimated gas cost for the approval transaction.
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        gasFee: string | null;
        /**
         * The estimated gas cost for the approval-reset transaction.
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        cancelGasFee: string | null;
      };
    };
    /** Create the transaction calldata for a Uniswap swap from a prior quote and optional permit signature. */
    "uniswap_api.create_swap": {
      input: {
        /** The prior Uniswap quote object to convert into swap calldata. */
        quote: Record<string, unknown>;
        /**
         * The signed Permit2 signature when one is required.
         * @minLength 1
         */
        signature?: string;
        /** The Permit2 payload returned by Uniswap when applicable. */
        permitData?: {
          /** The EIP-712 domain object returned by Uniswap. */
          domain: Record<string, unknown>;
          /** The permit values object returned by Uniswap. */
          values: Record<string, unknown>;
          /** The permit type map returned by Uniswap. */
          types: Record<string, unknown>;
        };
        /** Whether Uniswap should refresh gas pricing. */
        refreshGasPrice?: boolean;
        /** Whether Uniswap should simulate the transaction. */
        simulateTransaction?: boolean;
        /** The swap safety mode accepted by the /swap endpoint. */
        safetyMode?: "SAFE" | "FAST";
        /**
         * The swap deadline timestamp in seconds.
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        deadline?: string;
        /** The urgency mode used for approval or swap pricing. */
        urgency?: "normal" | "fast" | "urgent" | {
          /** The urgency level. */
          level: "normal" | "fast" | "urgent";
          /** Optional gas caps applied on top of the selected urgency tier. */
          overrides: {
            /**
             * The maximum priority fee per gas in wei.
             * @minLength 1
             * @pattern ^[0-9]+$
             */
            maxPriorityFeePerGas?: string;
            /**
             * The maximum total fee per gas in wei.
             * @minLength 1
             * @pattern ^[0-9]+$
             */
            maxFeePerGas?: string;
            /**
             * The replacement gas limit cap in gas units.
             * @minLength 1
             * @pattern ^[0-9]+$
             */
            gasLimit?: string;
          };
        };
        /** Whether to send the public x-universal-router-version header as version 2.0. */
        enableUniversalRouter?: boolean;
        /** Whether Permit2 should stay enabled. Set false to send x-permit2-disabled: true. */
        enablePermit2?: boolean;
      };
      output: {
        /**
         * The upstream Uniswap request identifier.
         * @minLength 1
         */
        requestId: string;
        /** One transaction request returned by Uniswap. */
        swap: {
          /**
           * The transaction recipient address.
           * @minLength 1
           * @pattern ^(0x)?[0-9a-fA-F]{40}$
           */
          to: string;
          /**
           * The transaction sender address.
           * @minLength 1
           * @pattern ^(0x)?[0-9a-fA-F]{40}$
           */
          from: string;
          /**
           * The transaction calldata.
           * @minLength 1
           */
          data: string;
          /**
           * The transaction value in wei.
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          value: string;
          /** The blockchain chain ID supported by the Uniswap Trading API. */
          chainId: 1 | 10 | 56 | 130 | 137 | 143 | 196 | 324 | 480 | 1301 | 1868 | 4217 | 4326 | 8453 | 84532 | 10143 | 42161 | 42220 | 43114 | 59144 | 81457 | 7777777 | 11155111;
          /**
           * The gas limit returned by Uniswap when present.
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          gasLimit: string | null;
          /**
           * The max fee per gas returned by Uniswap when present.
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          maxFeePerGas: string | null;
          /**
           * The max priority fee per gas returned by Uniswap when present.
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          maxPriorityFeePerGas: string | null;
          /**
           * The gas price returned by Uniswap when present.
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          gasPrice: string | null;
        };
        /**
         * The estimated gas cost for the swap transaction.
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        gasFee?: string | null;
      };
    };
    /** Request a Uniswap trade quote for one wallet, token pair, and amount. */
    "uniswap_api.get_quote": {
      input: {
        /** How Uniswap interprets the requested amount. */
        type: "EXACT_INPUT" | "EXACT_OUTPUT";
        /**
         * The input or output amount in token base units.
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        amount: string;
        /** The blockchain chain ID supported by the Uniswap Trading API. */
        tokenInChainId: 1 | 10 | 56 | 130 | 137 | 143 | 196 | 324 | 480 | 1301 | 1868 | 4217 | 4326 | 8453 | 84532 | 10143 | 42161 | 42220 | 43114 | 59144 | 81457 | 7777777 | 11155111;
        /** The blockchain chain ID supported by the Uniswap Trading API. */
        tokenOutChainId: 1 | 10 | 56 | 130 | 137 | 143 | 196 | 324 | 480 | 1301 | 1868 | 4217 | 4326 | 8453 | 84532 | 10143 | 42161 | 42220 | 43114 | 59144 | 81457 | 7777777 | 11155111;
        /**
         * The input token contract address.
         * @minLength 1
         * @pattern ^(0x)?[0-9a-fA-F]{40}$
         */
        tokenIn: string;
        /**
         * The output token contract address.
         * @minLength 1
         * @pattern ^(0x)?[0-9a-fA-F]{40}$
         */
        tokenOut: string;
        /**
         * The wallet address that will submit the transaction.
         * @minLength 1
         * @pattern ^(0x)?[0-9a-fA-F]{40}$
         */
        swapper: string;
        /**
         * The wallet address that should receive the output token.
         * @minLength 1
         * @pattern ^(0x)?[0-9a-fA-F]{40}$
         */
        recipient?: string;
        /**
         * The manual slippage tolerance percentage.
         * @minimum 0
         */
        slippageTolerance?: number;
        /** The automatic slippage strategy supported by the public Uniswap API. */
        autoSlippage?: "DEFAULT";
        /** The quote routing preference for Uniswap route selection. */
        routingPreference?: "BEST_PRICE" | "FASTEST";
        /**
         * The protocols Uniswap may use for routing.
         * @minItems 1
         */
        protocols?: Array<"V2" | "V3" | "V4" | "UNISWAPX" | "UNISWAPX_V2" | "UNISWAPX_V3">;
        /** The urgency mode used for approval or swap pricing. */
        urgency?: "normal" | "fast" | "urgent" | {
          /** The urgency level. */
          level: "normal" | "fast" | "urgent";
          /** Optional gas caps applied on top of the selected urgency tier. */
          overrides: {
            /**
             * The maximum priority fee per gas in wei.
             * @minLength 1
             * @pattern ^[0-9]+$
             */
            maxPriorityFeePerGas?: string;
            /**
             * The maximum total fee per gas in wei.
             * @minLength 1
             * @pattern ^[0-9]+$
             */
            maxFeePerGas?: string;
            /**
             * The replacement gas limit cap in gas units.
             * @minLength 1
             * @pattern ^[0-9]+$
             */
            gasLimit?: string;
          };
        };
        /** The permit allowance mode included in a quote response when Permit2 is enabled. */
        permitAmount?: "FULL" | "EXACT";
        /** The UniswapX spread optimization strategy when applicable. */
        spreadOptimization?: "EXECUTION" | "PRICE";
        /** Whether Permit2 should be generated as an onchain transaction instead of a signature. */
        generatePermitAsTransaction?: boolean;
        /** Whether to send the public x-universal-router-version header as version 2.0. */
        enableUniversalRouter?: boolean;
        /** Whether Permit2 should stay enabled. Set false to send x-permit2-disabled: true. */
        enablePermit2?: boolean;
      };
      output: {
        /**
         * The upstream Uniswap request identifier.
         * @minLength 1
         */
        requestId: string;
        /**
         * The routing family returned by Uniswap.
         * @minLength 1
         */
        routing?: string;
        /**
         * The quote identifier returned by Uniswap.
         * @minLength 1
         */
        quoteId: string;
        /** The blockchain chain ID supported by the Uniswap Trading API. */
        chainId: 1 | 10 | 56 | 130 | 137 | 143 | 196 | 324 | 480 | 1301 | 1868 | 4217 | 4326 | 8453 | 84532 | 10143 | 42161 | 42220 | 43114 | 59144 | 81457 | 7777777 | 11155111;
        /**
         * The wallet address tied to this quote.
         * @minLength 1
         * @pattern ^(0x)?[0-9a-fA-F]{40}$
         */
        swapper: string;
        /** How Uniswap interprets the requested amount. */
        tradeType: "EXACT_INPUT" | "EXACT_OUTPUT";
        /**
         * The quoted input token address.
         * @minLength 1
         * @pattern ^(0x)?[0-9a-fA-F]{40}$
         */
        inputToken: string;
        /**
         * The quoted input amount in base units.
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        inputAmount: string;
        /**
         * The quoted output token address.
         * @minLength 1
         * @pattern ^(0x)?[0-9a-fA-F]{40}$
         */
        outputToken: string;
        /**
         * The quoted output amount in base units.
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        outputAmount: string;
        /**
         * The output recipient when Uniswap returns one.
         * @minLength 1
         * @pattern ^(0x)?[0-9a-fA-F]{40}$
         */
        recipient?: string | null;
        /** The quoted slippage tolerance percentage when returned. */
        slippage?: number | null;
        /**
         * The total estimated gas cost in wei when returned.
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        gasFee?: string | null;
        /**
         * The total estimated gas cost denominated in USDC.
         * @minLength 1
         */
        gasFeeUsd?: string | null;
        /**
         * The gas use estimate when returned.
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        gasUseEstimate?: string | null;
        /** Transaction simulation failure reasons returned by Uniswap. */
        txFailureReasons: Array<"SIMULATION_ERROR" | "UNSUPPORTED_SIMULATION" | "SIMULATION_UNAVAILABLE" | "SLIPPAGE_TOO_LOW" | "TRANSFER_FROM_FAILED">;
        /** The Permit2 payload returned by Uniswap when applicable. */
        permitData?: {
          /** The EIP-712 domain object returned by Uniswap. */
          domain: Record<string, unknown>;
          /** The permit values object returned by Uniswap. */
          values: Record<string, unknown>;
          /** The permit type map returned by Uniswap. */
          types: Record<string, unknown>;
        } | null;
        /** The route legs returned by Uniswap as a nested list of raw route segments. */
        route: Array<Array<Record<string, unknown>>>;
        /** The raw quote object returned by Uniswap. */
        rawQuote: Record<string, unknown>;
      };
    };
  }
}
