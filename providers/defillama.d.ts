import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get summary of bridge volume and volume breakdown by chain.  Requires an API plan key. */
    "defillama.get_bridges_bridge_by_id": {
      input: {
        /** bridge ID, you can get these from /bridges */
        id: number;
      };
      output: {
        /** Bridge ID */
        id?: number;
        /** Bridge name */
        name?: string;
        /** Bridge display name */
        displayName?: string;
        /** Last hourly volume */
        lastHourlyVolume?: number;
        /** Current day volume */
        currentDayVolume?: number;
        /** Last daily volume */
        lastDailyVolume?: number;
        /** Day before last volume */
        dayBeforeLastVolume?: number;
        /** Weekly volume */
        weeklyVolume?: number;
        /** Monthly volume */
        monthlyVolume?: number;
        /** Last hourly transactions */
        lastHourlyTxs?: {
          /** Number of deposits */
          deposits?: number;
          /** Number of withdrawals */
          withdrawals?: number;
          [key: string]: unknown;
        };
        /** Current day transactions */
        currentDayTxs?: {
          /** Number of deposits */
          deposits?: number;
          /** Number of withdrawals */
          withdrawals?: number;
          [key: string]: unknown;
        };
        /** Previous day transactions */
        prevDayTxs?: {
          /** Number of deposits */
          deposits?: number;
          /** Number of withdrawals */
          withdrawals?: number;
          [key: string]: unknown;
        };
        /** Day before last transactions */
        dayBeforeLastTxs?: {
          /** Number of deposits */
          deposits?: number;
          /** Number of withdrawals */
          withdrawals?: number;
          [key: string]: unknown;
        };
        /** Weekly transactions */
        weeklyTxs?: {
          /** Number of deposits */
          deposits?: number;
          /** Number of withdrawals */
          withdrawals?: number;
          [key: string]: unknown;
        };
        /** Monthly transactions */
        monthlyTxs?: {
          /** Number of deposits */
          deposits?: number;
          /** Number of withdrawals */
          withdrawals?: number;
          [key: string]: unknown;
        };
        /** Volume breakdown by chain */
        chainBreakdown?: Record<string, unknown>;
        /** Destination chain */
        destinationChain?: string;
        [key: string]: unknown;
      };
    };
    /** Get a 24hr token and address volume breakdown for a bridge.  Requires an API plan key. */
    "defillama.get_bridges_bridgedaystats_by_timestamp_by_chain": {
      input: {
        /** Unix timestamp. Data returned will be for the 24hr period starting at 00:00 UTC that the timestamp lands in. */
        timestamp: number;
        /**
         * chain slug, you can get these from /chains.
         * @minLength 1
         */
        chain: string;
        /** bridge ID, you can get these from /bridges */
        id?: number;
      };
      output: {
        /** Date timestamp */
        date?: number;
        /** Total tokens deposited with their details */
        totalTokensDeposited?: Record<string, {
            /** USD value of the token */
            usdValue?: number;
            /** Token amount as string */
            amount?: string;
            /** Token symbol */
            symbol?: string;
            /** Token decimals */
            decimals?: number;
            [key: string]: unknown;
          }>;
        /** Total tokens withdrawn with their details */
        totalTokensWithdrawn?: Record<string, {
            /** USD value of the token */
            usdValue?: number;
            /** Token amount as string */
            amount?: string;
            /** Token symbol */
            symbol?: string;
            /** Token decimals */
            decimals?: number;
            [key: string]: unknown;
          }>;
        /** Total addresses that deposited with their details */
        totalAddressDeposited?: Record<string, {
            /** Total USD value deposited by this address */
            usdValue?: number;
            /** Number of transactions from this address */
            txs?: number;
            [key: string]: unknown;
          }>;
        /** Total addresses that withdrew with their details */
        totalAddressWithdrawn?: Record<string, {
            /** Total USD value withdrawn by this address */
            usdValue?: number;
            /** Number of transactions from this address */
            txs?: number;
            [key: string]: unknown;
          }>;
        [key: string]: unknown;
      };
    };
    /** List all bridges along with summaries of recent bridge volumes..  Requires an API plan key. */
    "defillama.get_bridges_bridges": {
      input: {
        /** set whether to include current previous day volume breakdown by chain */
        includeChains?: boolean;
      };
      output: {
        /** List of bridges */
        bridges?: Array<{
          /** Bridge ID */
          id?: number;
          /** Bridge name */
          name?: string;
          /** Bridge display name */
          displayName?: string;
          /** Bridge icon */
          icon?: string;
          /** Previous day volume */
          volumePrevDay?: number;
          /** Previous 2 days volume */
          volumePrev2Day?: number;
          /** Last hourly volume */
          lastHourlyVolume?: number;
          /** Last 24 hours volume */
          last24hVolume?: number;
          /** Last daily volume */
          lastDailyVolume?: number;
          /** Day before last volume */
          dayBeforeLastVolume?: number;
          /** Weekly volume */
          weeklyVolume?: number;
          /** Monthly volume */
          monthlyVolume?: number;
          /** Supported chains */
          chains?: Array<string>;
          /** Destination chain */
          destinationChain?: string;
          /** Bridge URL */
          url?: string;
          /** Bridge slug */
          slug?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get historical volumes for a bridge, chain, or bridge on a particular chain.  Requires an API plan key. */
    "defillama.get_bridges_bridgevolume_by_chain": {
      input: {
        /**
         * chain slug, you can get these from /chains. Call also use 'all' for volume on all chains.
         * @minLength 1
         */
        chain: string;
        /** bridge ID, you can get these from /bridges */
        id?: number;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** Date timestamp */
          date?: string;
          /** Deposit volume in USD */
          depositUSD?: number;
          /** Withdrawal volume in USD */
          withdrawUSD?: number;
          /** Number of deposit transactions */
          depositTxs?: number;
          /** Number of withdrawal transactions */
          withdrawTxs?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get all transactions for a bridge within a date range.  Requires an API plan key. */
    "defillama.get_bridges_transactions_by_id": {
      input: {
        /** bridge ID, you can get these from /bridges */
        id: number;
        /** start timestamp (Unix Timestamp) for date range */
        starttimestamp?: number;
        /** end timestamp (Unix timestamp) for date range */
        endtimestamp?: number;
        /** Returns only transactions that are bridging from the specified source chain. */
        sourcechain?: string;
        /** Returns only transactions with specified address as "from" or "to". Addresses are quried in the form {chain}:{address}, where chain is an identifier such as ethereum, bsc, polygon, avax... . */
        address?: string;
        /**
         * limit to number of transactions returned, maximum is 6000
         * @minimum 1
         * @maximum 6000
         */
        limit?: number;
      };
      output: {
        /** DeFiLlama response. */
        data: {
          /** Bridge ID */
          id?: number;
          /** Bridge name */
          name?: string;
          /** Bridge display name */
          displayName?: string;
          /** Last hourly volume */
          lastHourlyVolume?: number;
          /** Current day volume */
          currentDayVolume?: number;
          /** Last daily volume */
          lastDailyVolume?: number;
          /** Day before last volume */
          dayBeforeLastVolume?: number;
          /** Weekly volume */
          weeklyVolume?: number;
          /** Monthly volume */
          monthlyVolume?: number;
          /** lastHourlyTxs returned by DeFiLlama. */
          lastHourlyTxs?: {
            /** Number of deposit transactions */
            deposits?: number;
            /** Number of withdrawal transactions */
            withdrawals?: number;
            [key: string]: unknown;
          };
          /** currentDayTxs returned by DeFiLlama. */
          currentDayTxs?: {
            /** Number of deposit transactions */
            deposits?: number;
            /** Number of withdrawal transactions */
            withdrawals?: number;
            [key: string]: unknown;
          };
          /** prevDayTxs returned by DeFiLlama. */
          prevDayTxs?: {
            /** Number of deposit transactions */
            deposits?: number;
            /** Number of withdrawal transactions */
            withdrawals?: number;
            [key: string]: unknown;
          };
          /** dayBeforeLastTxs returned by DeFiLlama. */
          dayBeforeLastTxs?: {
            /** Number of deposit transactions */
            deposits?: number;
            /** Number of withdrawal transactions */
            withdrawals?: number;
            [key: string]: unknown;
          };
          /** weeklyTxs returned by DeFiLlama. */
          weeklyTxs?: {
            /** Number of deposit transactions */
            deposits?: number;
            /** Number of withdrawal transactions */
            withdrawals?: number;
            [key: string]: unknown;
          };
          /** monthlyTxs returned by DeFiLlama. */
          monthlyTxs?: {
            /** Number of deposit transactions */
            deposits?: number;
            /** Number of withdrawal transactions */
            withdrawals?: number;
            [key: string]: unknown;
          };
          /** chainBreakdown returned by DeFiLlama. */
          chainBreakdown?: Record<string, {
              /** Last hourly volume */
              lastHourlyVolume?: number;
              /** Current day volume */
              currentDayVolume?: number;
              /** Last daily volume */
              lastDailyVolume?: number;
              /** Day before last volume */
              dayBeforeLastVolume?: number;
              /** Weekly volume */
              weeklyVolume?: number;
              /** Monthly volume */
              monthlyVolume?: number;
              /** Last 24 hour volume */
              last24hVolume?: number;
              /** lastHourlyTxs returned by DeFiLlama. */
              lastHourlyTxs?: {
                /** Number of deposit transactions */
                deposits?: number;
                /** Number of withdrawal transactions */
                withdrawals?: number;
                [key: string]: unknown;
              };
              /** currentDayTxs returned by DeFiLlama. */
              currentDayTxs?: {
                /** Number of deposit transactions */
                deposits?: number;
                /** Number of withdrawal transactions */
                withdrawals?: number;
                [key: string]: unknown;
              };
              /** prevDayTxs returned by DeFiLlama. */
              prevDayTxs?: {
                /** Number of deposit transactions */
                deposits?: number;
                /** Number of withdrawal transactions */
                withdrawals?: number;
                [key: string]: unknown;
              };
              /** dayBeforeLastTxs returned by DeFiLlama. */
              dayBeforeLastTxs?: {
                /** Number of deposit transactions */
                deposits?: number;
                /** Number of withdrawal transactions */
                withdrawals?: number;
                [key: string]: unknown;
              };
              /** weeklyTxs returned by DeFiLlama. */
              weeklyTxs?: {
                /** Number of deposit transactions */
                deposits?: number;
                /** Number of withdrawal transactions */
                withdrawals?: number;
                [key: string]: unknown;
              };
              /** monthlyTxs returned by DeFiLlama. */
              monthlyTxs?: {
                /** Number of deposit transactions */
                deposits?: number;
                /** Number of withdrawal transactions */
                withdrawals?: number;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            }>;
          /** Destination chain */
          destinationChain?: string;
          [key: string]: unknown;
        } | Array<{
          /** Transaction hash */
          tx_hash?: string;
          /** Timestamp in ISO format */
          ts?: string;
          /** Block number */
          tx_block?: number;
          /** From address */
          tx_from?: string;
          /** To address */
          tx_to?: string;
          /** Token contract address */
          token?: string;
          /** Transaction amount */
          amount?: string;
          /** Blockchain name */
          chain?: string;
          /** Bridge name */
          bridge_name?: string;
          /** USD value of transaction */
          usd_value?: number | null;
          /** Source chain name */
          sourceChain?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Overview of all categories accross all protocols.  Requires an API plan key. */
    "defillama.get_categories": {
      input: Record<string, never>;
      output: {
        /** chart returned by DeFiLlama. */
        chart?: Record<string, Record<string, {
              /** tvl returned by DeFiLlama. */
              tvl?: number;
              /** staking returned by DeFiLlama. */
              staking?: number;
              /** pool2 returned by DeFiLlama. */
              pool2?: number;
              /** doublecounted returned by DeFiLlama. */
              doublecounted?: number;
              /** borrowed returned by DeFiLlama. */
              borrowed?: number;
              /** offers returned by DeFiLlama. */
              offers?: number;
              /** vesting returned by DeFiLlama. */
              vesting?: number;
              /** treasury returned by DeFiLlama. */
              treasury?: number;
              /** liquidstaking returned by DeFiLlama. */
              liquidstaking?: number;
              /** dcAndLsOverlap returned by DeFiLlama. */
              dcAndLsOverlap?: number;
              [key: string]: unknown;
            }>>;
        /** categories returned by DeFiLlama. */
        categories?: Record<string, Array<string>>;
        [key: string]: unknown;
      };
    };
    /** Get assets of all chains.  Requires an API plan key. */
    "defillama.get_chain_assets": {
      input: Record<string, never>;
      output: {
        /** chain returned by DeFiLlama. */
        chain?: {
          /** canonical returned by DeFiLlama. */
          canonical?: {
            /** total returned by DeFiLlama. */
            total?: string;
            /** breakdown returned by DeFiLlama. */
            breakdown?: Record<string, string>;
            [key: string]: unknown;
          };
          /** native returned by DeFiLlama. */
          native?: {
            /** total returned by DeFiLlama. */
            total?: string;
            /** breakdown returned by DeFiLlama. */
            breakdown?: Record<string, string>;
            [key: string]: unknown;
          };
          /** thirdParty returned by DeFiLlama. */
          thirdParty?: {
            /** total returned by DeFiLlama. */
            total?: string;
            /** breakdown returned by DeFiLlama. */
            breakdown?: Record<string, string>;
            [key: string]: unknown;
          };
          /** total returned by DeFiLlama. */
          total?: {
            /** total returned by DeFiLlama. */
            total?: string;
            /** breakdown returned by DeFiLlama. */
            breakdown?: Record<string, string>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** timestamp returned by DeFiLlama. */
        timestamp?: number;
        [key: string]: unknown;
      };
    };
    /** Get historical prices for multiple tokens at multiple different timestamps.  Available with no_auth or api_key. */
    "defillama.get_coins_batch_historical": {
      input: {
        /** object where keys are coins in the form {chain}:{address}, and values are arrays of requested timestamps */
        coins: Record<string, Array<number>>;
      };
      output: {
        /** coins returned by DeFiLlama. */
        coins?: Record<string, {
            /** symbol returned by DeFiLlama. */
            symbol?: string;
            /** prices returned by DeFiLlama. */
            prices?: Array<{
              /** timestamp returned by DeFiLlama. */
              timestamp?: number;
              /** price returned by DeFiLlama. */
              price?: number;
              /** confidence returned by DeFiLlama. */
              confidence?: number;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
        [key: string]: unknown;
      };
    };
    /** Get the closest block to a timestamp. Runs binary search over a blockchain's blocks to get the closest one to a timestamp.
Every time this is run we add new data to our database, so each query permanently speeds up future queries.
 Available with no_auth or api_key. */
    "defillama.get_coins_block_by_chain_by_timestamp": {
      input: {
        /**
         * Chain which you want to get the block from
         * @minLength 1
         */
        chain: string;
        /** UNIX timestamp of the block you are searching for */
        timestamp: number;
      };
      output: {
        /**
         * height returned by DeFiLlama.
         * @minimum 0
         */
        height?: number;
        /**
         * timestamp returned by DeFiLlama.
         * @minimum 0
         */
        timestamp?: number;
        [key: string]: unknown;
      };
    };
    /** Get token prices at regular time intervals. Strings accepted by period:
Can use regular chart candle notion like '4h' etc where:
W = week, D = day, H = hour, M = minute (not case sensitive)
 Available with no_auth or api_key. */
    "defillama.get_coins_chart_by_coins": {
      input: {
        /**
         * set of comma-separated tokens defined as {chain}:{address}
         * @minLength 1
         */
        coins: string;
        /** unix timestamp of earliest data point requested */
        start?: number;
        /** unix timestamp of latest data point requested */
        end?: number;
        /** number of data points returned, defaults to 0 */
        span?: number;
        /** duration between data points, defaults to 24 hours */
        period?: string;
      };
      output: {
        /** coins returned by DeFiLlama. */
        coins?: Record<string, {
            /** Token decimals. Omitted for coingecko-native assets (e.g. coingecko:ethereum). */
            decimals?: number;
            /** Confidence score between 0 and 1 indicating the reliability of the price. */
            confidence: number;
            /** prices returned by DeFiLlama. */
            prices: Array<{
              /** timestamp returned by DeFiLlama. */
              timestamp?: number;
              /** price returned by DeFiLlama. */
              price?: number;
              [key: string]: unknown;
            }>;
            /** symbol returned by DeFiLlama. */
            symbol: string;
            [key: string]: unknown;
          }>;
        [key: string]: unknown;
      };
    };
    /** Get percentage change in price over time. Strings accepted by period:
Can use regular chart candle notion like '4h' etc where:
W = week, D = day, H = hour, M = minute (not case sensitive)
 Available with no_auth or api_key. */
    "defillama.get_coins_percentage_by_coins": {
      input: {
        /**
         * set of comma-separated tokens defined as {chain}:{address}
         * @minLength 1
         */
        coins: string;
        /** timestamp of data point requested, defaults to time now */
        timestamp?: number;
        /** whether you want the duration after your given timestamp or not, defaults to false (looking back) */
        lookForward?: boolean;
        /** duration between data points, defaults to 24 hours */
        period?: string;
      };
      output: {
        /** coins returned by DeFiLlama. */
        coins?: Record<string, number>;
        [key: string]: unknown;
      };
    };
    /** Get current prices of tokens by contract address. The goal of this API is to price as many tokens as possible, including exotic ones that never get traded, which makes them impossible to price by looking at markets.

The base of our data are prices pulled from coingecko, which is then extended through multiple means:
- We price all bridged tokens by using the price of the token in it's original chain, so we fetch all bridged versions of USDC on arbitrum, fantom, avax... and price all them using the price for the token on Ethereum, which we know. Right now we support 10 different bridging protocols.
- We have multiple adapters to price specialized sets of tokens by running custom code:
  - We price yearn's yToken LPs by checking how much underlying token can be withdrawn for each LP
  - Aave, compound and euler LP tokens are also priced based on their relationship against underlying tokens
  - Uniswap, curve, balancer and stargate LPs are priced using the underlying tokens in each pair
  - GMX's GLP token is priced based on the value of tokens given on withdrawal (which includes calculations based on trader's PnL)
  
  - Synthetix tokens are priced using forex prices of the coin they are pegged to
- For tokens that we haven't been able to price in any other way, we find the pool with most liquidity for each on uniswap, curve and serum and then use the prices provided on those exchanges.
  
  Unlike all the other tokens, we can't confirm that these prices are correct, so we only ingest the ones that have sufficient liquidity and, even in that case, we attach a `confidence` value to them that is related to the depth of liquidity and which represents our confidence in the quality of each price. API consumers can choose to filter out prices with low confidence values.
  
 Our API server is fully open source and we are constantly adding more pricing adapters, extending the amount of tokens we support.
  
Tokens are queried using {chain}:{address}, where chain is an identifier such as ethereum, bsc, polygon, avax... You can also get tokens by coingecko id by setting `coingecko` as the chain, eg: coingecko:ethereum, coingecko:bitcoin. Examples:
  - ethereum:0xdF574c24545E5FfEcb9a659c229253D4111d87e1
  - bsc:0x762539b45a1dcce3d36d080f74d1aed37844b878
  - coingecko:ethereum
  - arbitrum:0x4277f8f2c384827b5273592ff7cebd9f2c1ac258
 Available with no_auth or api_key. */
    "defillama.get_coins_prices_current_by_coins": {
      input: {
        /**
         * set of comma-separated tokens defined as {chain}:{address}
         * @minLength 1
         */
        coins: string;
      };
      output: {
        /** coins returned by DeFiLlama. */
        coins?: Record<string, {
            /** Token decimals. Omitted for coingecko-native assets (e.g. coingecko:ethereum). */
            decimals?: number;
            /** price returned by DeFiLlama. */
            price: number;
            /** symbol returned by DeFiLlama. */
            symbol: string;
            /** timestamp returned by DeFiLlama. */
            timestamp: number;
            /** Confidence score between 0 and 1 indicating the reliability of the price. */
            confidence?: number;
            [key: string]: unknown;
          }>;
        [key: string]: unknown;
      };
    };
    /** Get earliest timestamp price record for coins.  Available with no_auth or api_key. */
    "defillama.get_coins_prices_first_by_coins": {
      input: {
        /**
         * set of comma-separated tokens defined as {chain}:{address}
         * @minLength 1
         */
        coins: string;
      };
      output: {
        /** coins returned by DeFiLlama. */
        coins?: Record<string, {
            /** price returned by DeFiLlama. */
            price?: number;
            /** symbol returned by DeFiLlama. */
            symbol?: string;
            /** timestamp returned by DeFiLlama. */
            timestamp?: number;
            [key: string]: unknown;
          }>;
        [key: string]: unknown;
      };
    };
    /** Get historical prices of tokens by contract address. See /prices/current for explanation on how prices are sourced. Available with no_auth or api_key. */
    "defillama.get_coins_prices_historical_by_timestamp_by_coins": {
      input: {
        /**
         * set of comma-separated tokens defined as {chain}:{address}
         * @minLength 1
         */
        coins: string;
        /** UNIX timestamp of time when you want historical prices */
        timestamp: number;
      };
      output: {
        /** coins returned by DeFiLlama. */
        coins?: Record<string, {
            /** Token decimals. Omitted for coingecko-native assets (e.g. coingecko:ethereum). */
            decimals?: number;
            /** price returned by DeFiLlama. */
            price: number;
            /** symbol returned by DeFiLlama. */
            symbol: string;
            /** timestamp returned by DeFiLlama. */
            timestamp: number;
            /** Confidence score between 0 and 1 indicating the reliability of the price. */
            confidence?: number;
            [key: string]: unknown;
          }>;
        [key: string]: unknown;
      };
    };
    /** Get list of all institutions with Digital Asset Treasury data. Returns comprehensive data about institutions holding digital assets, including mNAV calculations (realized, realistic, maximum) as described in the [DAT Methodology](https://docs.llama.fi/analysts/dat-methodology) Requires an API plan key. */
    "defillama.get_dat_institutions": {
      input: Record<string, never>;
      output: {
        /** institutionMetadata returned by DeFiLlama. */
        institutionMetadata?: Record<string, {
            /** Unique institution identifier */
            institutionId?: number;
            /** Institution ticker symbol */
            ticker?: string;
            /** Institution name */
            name?: string;
            /** Institution type */
            type?: string;
            /** Current share price */
            price?: number;
            /** 24h price change percentage */
            priceChange24h?: number;
            /** 24h trading volume */
            volume24h?: number;
            /** Market cap using current outstanding shares */
            mcapRealized?: number;
            /** Market cap accounting for unavoidable dilution */
            mcapRealistic?: number;
            /** Market cap under maximum dilution scenario */
            mcapMax?: number;
            /** Ratio of marketcap to crypto treasury using current shares */
            realized_mNAV?: number;
            /** Ratio accounting for unavoidable dilution */
            realistic_mNAV?: number;
            /** Ratio under maximum dilution scenario */
            max_mNAV?: number;
            /** Total USD value of crypto holdings */
            totalUsdValue?: number;
            /** Total cost basis of crypto holdings */
            totalCost?: number;
            /** holdings returned by DeFiLlama. */
            holdings?: Record<string, {
                /** Amount of asset held */
                amount?: number;
                /** Average purchase price */
                avgPrice?: number;
                /** Current USD value */
                usdValue?: number;
                /** Total cost basis */
                cost?: number;
                /** Number of transactions */
                transactionCount?: number;
                /**
                 * Date of first announcement
                 * @format date
                 */
                firstAnnouncementDate?: string;
                /**
                 * Date of last announcement
                 * @format date
                 */
                lastAnnouncementDate?: string;
                /** Percentage of total supply held */
                supplyPercentage?: number;
                [key: string]: unknown;
              }>;
            [key: string]: unknown;
          }>;
        /** assetMetadata returned by DeFiLlama. */
        assetMetadata?: Record<string, {
            /** Asset name */
            name?: string;
            /** Asset ticker */
            ticker?: string;
            /** CoinGecko ID */
            geckoId?: string;
            /** Number of companies holding this asset */
            companies?: number;
            /** Total amount held across all institutions */
            totalAmount?: number;
            /** Total USD value across all institutions */
            totalUsdValue?: number;
            /** Percentage of circulating supply held */
            circSupplyPerc?: number;
            [key: string]: unknown;
          }>;
        /** institutions returned by DeFiLlama. */
        institutions?: Array<{
          /** Institution ID */
          institutionId?: number;
          /** Total USD value of holdings */
          totalUsdValue?: number;
          /** Total cost basis */
          totalCost?: number;
          [key: string]: unknown;
        }>;
        /** assets returned by DeFiLlama. */
        assets?: Record<string, Array<{
            /** Institution ID */
            institutionId?: number;
            /** USD value of holding */
            usdValue?: number;
            /** Amount held */
            amount?: number;
            [key: string]: unknown;
          }>>;
        /** Total number of companies tracked */
        totalCompanies?: number;
        /** flows returned by DeFiLlama. */
        flows?: Record<string, Array<Array<number>>>;
        /** mNAV returned by DeFiLlama. */
        mNAV?: Record<string, Record<string, Array<Array<number>>>>;
        /**
         * Last update timestamp
         * @format date-time
         */
        lastUpdated?: string;
        [key: string]: unknown;
      };
    };
    /** Get individual institution Digital Asset Treasury details. Returns detailed data for a specific institution, including mNAV calculations (realized, realistic, maximum) as described in the [DAT Methodology](https://docs.llama.fi/analysts/dat-methodology) Requires an API plan key. */
    "defillama.get_dat_institutions_by_symbol": {
      input: {
        /**
         * Institution ticker symbol (e.g., MSTR for MicroStrategy)
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** Unique institution identifier */
        institutionId?: number;
        /** Institution ticker symbol */
        ticker?: string;
        /** Institution name */
        name?: string;
        /** Institution type */
        type?: string;
        /** Institution rank */
        rank?: number;
        /** Current share price */
        price?: number;
        /** 24h price change percentage */
        priceChange24h?: number;
        /** 24h trading volume */
        volume24h?: number;
        /** Fully diluted shares - realized count */
        fd_realized?: string;
        /** Fully diluted shares - realistic count */
        fd_realistic?: string;
        /** Fully diluted shares - maximum count */
        fd_max?: string;
        /** Market cap using realized share count */
        mcap_realized?: number;
        /** Market cap using realistic share count */
        mcap_realistic?: number;
        /** Market cap using maximum share count */
        mcap_max?: number;
        /** Realized mNAV ratio */
        realized_mNAV?: number;
        /** Realistic mNAV ratio */
        realistic_mNAV?: number;
        /** Maximum mNAV ratio */
        max_mNAV?: number;
        /** Total cost basis of crypto holdings */
        totalCost?: number;
        /** Total USD value of crypto holdings */
        totalUsdValue?: number;
        /** Asset holdings by asset type */
        assets?: Record<string, {
            /** Amount of asset held */
            amount?: number;
            /** Average purchase price */
            avgPrice?: number;
            /** Current USD value */
            usdValue?: number;
            /** Total cost basis */
            cost?: number;
            [key: string]: unknown;
          }>;
        /** Metadata for assets held */
        assetsMeta?: Record<string, {
            /** Asset name */
            name?: string;
            /** Asset ticker */
            ticker?: string;
            [key: string]: unknown;
          }>;
        /** Historical OHLCV data */
        ohlcv?: Array<Array<number>>;
        /** Historical asset value data */
        assetValue?: Array<Array<number>>;
        /** Compact historical stats: [timestamp, fd_realized, fd_realistic, fd_maximum, mcap_realized, mcap_realistic, mcap_max, mnav_realized, mnav_realistic, mnav_max] */
        stats?: Array<Array<number>>;
        /** Transaction history */
        transactions?: Array<{
          /** Transaction ID */
          id?: number;
          /** Asset type */
          asset?: string;
          /** Amount transacted */
          amount?: string;
          /** Average price per unit */
          avg_price?: string;
          /** Total USD value */
          usd_value?: string;
          /**
           * Transaction start date
           * @format date
           */
          start_date?: string;
          /**
           * Transaction end date
           * @format date
           */
          end_date?: string;
          /**
           * Report date
           * @format date
           */
          report_date?: string;
          /** Transaction type */
          type?: string;
          /** Source type */
          source_type?: string;
          /** Source URL */
          source_url?: string;
          /** Source note with transaction details */
          source_note?: string;
          /** Whether transaction is approved */
          is_approved?: boolean;
          /** Rejection reason if not approved */
          reject_reason?: string | null;
          /**
           * Last update timestamp
           * @format date-time
           */
          last_updated?: string;
          /** Institution ticker */
          ticker?: string;
          /** Asset name */
          assetName?: string;
          /** Asset ticker */
          assetTicker?: string;
          [key: string]: unknown;
        }>;
        /**
         * Last update timestamp
         * @format date-time
         */
        lastUpdated?: string;
        [key: string]: unknown;
      };
    };
    /** Unlocks data for a given token/protocol. You can find a list of available slugs to query by querying /emissions and then extracting the key `gecko_id`.  Requires an API plan key. */
    "defillama.get_emission_by_protocol": {
      input: {
        /**
         * protocol slug
         * @minLength 1
         */
        protocol: string;
      };
      output: {
        /** body returned by DeFiLlama. */
        body?: {
          /** documentedData returned by DeFiLlama. */
          documentedData?: {
            /** data returned by DeFiLlama. */
            data?: Array<{
              /** label returned by DeFiLlama. */
              label?: string;
              /** data returned by DeFiLlama. */
              data?: Array<{
                /** timestamp returned by DeFiLlama. */
                timestamp?: number;
                /** unlocked returned by DeFiLlama. */
                unlocked?: number;
                /** rawEmission returned by DeFiLlama. */
                rawEmission?: number;
                /** burned returned by DeFiLlama. */
                burned?: number;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            }>;
            /** tokenAllocation returned by DeFiLlama. */
            tokenAllocation?: {
              /** current returned by DeFiLlama. */
              current?: {
                /** insiders returned by DeFiLlama. */
                insiders?: number;
                /** noncirculating returned by DeFiLlama. */
                noncirculating?: number;
                /** publicSale returned by DeFiLlama. */
                publicSale?: number;
                /** airdrop returned by DeFiLlama. */
                airdrop?: number;
                /** farming returned by DeFiLlama. */
                farming?: number;
                [key: string]: unknown;
              };
              /** final returned by DeFiLlama. */
              final?: {
                /** insiders returned by DeFiLlama. */
                insiders?: number;
                /** noncirculating returned by DeFiLlama. */
                noncirculating?: number;
                /** publicSale returned by DeFiLlama. */
                publicSale?: number;
                /** airdrop returned by DeFiLlama. */
                airdrop?: number;
                /** farming returned by DeFiLlama. */
                farming?: number;
                [key: string]: unknown;
              };
              /** progress returned by DeFiLlama. */
              progress?: {
                /** insiders returned by DeFiLlama. */
                insiders?: number;
                /** noncirculating returned by DeFiLlama. */
                noncirculating?: number;
                /** publicSale returned by DeFiLlama. */
                publicSale?: number;
                /** airdrop returned by DeFiLlama. */
                airdrop?: number;
                /** farming returned by DeFiLlama. */
                farming?: number;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** metadata returned by DeFiLlama. */
          metadata?: {
            /** notes returned by DeFiLlama. */
            notes?: Array<string>;
            /** token returned by DeFiLlama. */
            token?: string;
            /** sources returned by DeFiLlama. */
            sources?: Array<string>;
            /** protocolIds returned by DeFiLlama. */
            protocolIds?: Array<string>;
            /** total returned by DeFiLlama. */
            total?: number;
            /** chain returned by DeFiLlama. */
            chain?: string;
            /** name returned by DeFiLlama. */
            name?: string;
            /** gecko_id returned by DeFiLlama. */
            gecko_id?: string;
            /** defillamaIds returned by DeFiLlama. */
            defillamaIds?: Array<string>;
            /** categories returned by DeFiLlama. */
            categories?: {
              /** insiders returned by DeFiLlama. */
              insiders?: Array<string>;
              /** noncirculating returned by DeFiLlama. */
              noncirculating?: Array<string>;
              /** publicSale returned by DeFiLlama. */
              publicSale?: Array<string>;
              /** airdrop returned by DeFiLlama. */
              airdrop?: Array<string>;
              /** farming returned by DeFiLlama. */
              farming?: Array<string>;
              [key: string]: unknown;
            };
            /** protocolCategory returned by DeFiLlama. */
            protocolCategory?: string;
            /** chainName returned by DeFiLlama. */
            chainName?: string;
            /** pId returned by DeFiLlama. */
            pId?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** lastModified returned by DeFiLlama. */
        lastModified?: string;
        [key: string]: unknown;
      };
    };
    /** List of all tokens along with basic info for each.  Requires an API plan key. */
    "defillama.get_emissions": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** token returned by DeFiLlama. */
          token?: string;
          /** sources returned by DeFiLlama. */
          sources?: Array<string>;
          /** protocolId returned by DeFiLlama. */
          protocolId?: string;
          /** name returned by DeFiLlama. */
          name?: string;
          /** circSupply returned by DeFiLlama. */
          circSupply?: number;
          /** circSupply30d returned by DeFiLlama. */
          circSupply30d?: number;
          /** totalLocked returned by DeFiLlama. */
          totalLocked?: number;
          /** maxSupply returned by DeFiLlama. */
          maxSupply?: number;
          /** gecko_id returned by DeFiLlama. */
          gecko_id?: string;
          /** events returned by DeFiLlama. */
          events?: Array<{
            /** description returned by DeFiLlama. */
            description?: string;
            /** timestamp returned by DeFiLlama. */
            timestamp?: number;
            /** noOfTokens returned by DeFiLlama. */
            noOfTokens?: Array<number>;
            /** category returned by DeFiLlama. */
            category?: string;
            /** unlockType returned by DeFiLlama. */
            unlockType?: string;
            [key: string]: unknown;
          }>;
          /** nextEvent returned by DeFiLlama. */
          nextEvent?: {
            /** date returned by DeFiLlama. */
            date?: number;
            /** toUnlock returned by DeFiLlama. */
            toUnlock?: number;
            [key: string]: unknown;
          };
          /** unlocksPerDay returned by DeFiLlama. */
          unlocksPerDay?: number;
          /** mcap returned by DeFiLlama. */
          mcap?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List all entities.  Requires an API plan key. */
    "defillama.get_entities": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** id returned by DeFiLlama. */
          id?: string;
          /** name returned by DeFiLlama. */
          name?: string;
          /** url returned by DeFiLlama. */
          url?: string;
          /** description returned by DeFiLlama. */
          description?: string;
          /** logo returned by DeFiLlama. */
          logo?: string;
          /** category returned by DeFiLlama. */
          category?: string;
          /** module returned by DeFiLlama. */
          module?: string;
          /** twitter returned by DeFiLlama. */
          twitter?: string;
          /** symbol returned by DeFiLlama. */
          symbol?: string;
          /** chain returned by DeFiLlama. */
          chain?: string;
          /** gecko_id returned by DeFiLlama. */
          gecko_id?: string | null;
          /** cmcId returned by DeFiLlama. */
          cmcId?: string | null;
          /** chains returned by DeFiLlama. */
          chains?: Array<string>;
          /** slug returned by DeFiLlama. */
          slug?: string;
          /** tvl returned by DeFiLlama. */
          tvl?: number;
          /** chainTvls returned by DeFiLlama. */
          chainTvls?: Record<string, number>;
          /** change_1h returned by DeFiLlama. */
          change_1h?: number;
          /** change_1d returned by DeFiLlama. */
          change_1d?: number;
          /** change_7d returned by DeFiLlama. */
          change_7d?: number;
          /** tokenBreakdowns returned by DeFiLlama. */
          tokenBreakdowns?: {
            /** ownTokens returned by DeFiLlama. */
            ownTokens?: number;
            /** stablecoins returned by DeFiLlama. */
            stablecoins?: number;
            /** majors returned by DeFiLlama. */
            majors?: number;
            /** others returned by DeFiLlama. */
            others?: number;
            [key: string]: unknown;
          };
          /** mcap returned by DeFiLlama. */
          mcap?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get list of all tracked public companies. Returns the tracked US-listed companies with their identity and sector and industry slugs, sorted by market cap (largest first). Use this to discover valid `ticker` + `country` pairs for the other equities endpoints. Requires an API plan key. Beta API; upstream fields may change. */
    "defillama.get_equities_v1_companies_list": {
      input: {
        /** Only return companies in this sector, as a slug (`technology`, `financial-services`) or as its label in any case (`Financial Services`). Valid values are the `sectorSlug`s returned by `GET /equities/v1/sectors`. An unknown value returns an empty list. */
        sector?: string;
        /** Only return companies in this industry, as a slug (`semiconductors`) or as its label in any case. Valid values are the `industrySlug`s returned by `GET /equities/v1/industries`. An unknown value returns an empty list. */
        industry?: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** ticker returned by DeFiLlama. */
          ticker?: string;
          /** companyName returned by DeFiLlama. */
          companyName?: string;
          /** country returned by DeFiLlama. */
          country?: string;
          /** countryName returned by DeFiLlama. */
          countryName?: string;
          /** Sector id, the same value `GET /equities/v1/sectors` returns. `unknown` when the vendor left the company unclassified. */
          sectorSlug?: string;
          /** Industry id, the same value `GET /equities/v1/industries` returns. */
          industrySlug?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get financial dimensions for a company. Returns time-series financial dimension metrics (revenue, holders revenue, earnings, and basic shares outstanding) for the given ticker, each broken down into annual and quarterly series. Every data point is a two-element array: ISO 8601 period-ending date, then the numeric value. Series are sorted by date descending (newest first). Requires an API plan key. Beta API; upstream fields may change. */
    "defillama.get_equities_v1_dimensions": {
      input: {
        /** Stock ticker symbol (case-insensitive) */
        ticker: string;
        /** Two-letter country code (ISO 3166-1 alpha-2) for the company, as returned by `GET /equities/v1/companies-list` (case-insensitive). */
        country: string;
      };
      output: Record<string, {
          /** Annual data points, newest first. Each item is `[periodEnding, value]`. */
          annual?: Array<Array<string | number>>;
          /** Quarterly data points, newest first. Each item is `[periodEnding, value]`. */
          quarterly?: Array<Array<string | number>>;
          [key: string]: unknown;
        }>;
    };
    /** Get earnings calendar. Returns earnings report dates built from SEC EDGAR filings: past reports, plus the next four expected dates projected from each company's own filing history. Covers US-listed companies.

The same path serves two shapes:

- **With `ticker`**: that company's full history plus its upcoming estimates.
- **Without `ticker`**: the market-wide calendar over a rolling window from about 1 month back to about 13 months ahead. Use the `ticker` form for older history.

Rows are sorted by `report_date`, oldest first, so `limit` keeps the earliest matches. `?ticker=AAPL&status=estimated&limit=1` is Apple's next report.

Every row says what kind of date it is in `date_status`. A future date is `estimated`, with a `max_drift_days` range, and is not a confirmed schedule.

Company names are not included. Join on `ticker` against `GET /equities/v1/companies-list`. Requires an API plan key. Beta API; upstream fields may change. */
    "defillama.get_equities_v1_earnings_calendar": {
      input: {
        /** Stock ticker symbol (case-insensitive). When set, returns that company's full calendar. */
        ticker?: string;
        /**
         * Earliest `report_date` to include, as `YYYY-MM-DD` (inclusive).
         * @format date
         */
        from?: string;
        /**
         * Latest `report_date` to include, as `YYYY-MM-DD` (inclusive).
         * @format date
         */
        to?: string;
        /** Only return rows with this `date_status` (case-insensitive). `confirmed` is accepted but nothing produces it yet, so it returns an empty list. */
        status?: "reported" | "inferred" | "confirmed" | "estimated";
        /**
         * Maximum rows to return, taken from the earliest `report_date`. Positive integer; values above 20000 are capped at 20000.
         * @minimum 1
         * @maximum 20000
         * @default 20000
         */
        limit?: number;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** ticker returned by DeFiLlama. */
          ticker?: string;
          /** iso2_country_code returned by DeFiLlama. */
          iso2_country_code?: string;
          /** SEC CIK of the registrant that filed the row. Differs from the company's current CIK for rows inherited from a predecessor after a reorganisation. */
          cik?: string;
          /** `<fiscal_year>-<fiscal_period>`, the row's identity. When the report arrives, its row replaces the estimate with the same key. */
          event_key?: string;
          /** `reported`: an earnings release (8-K Item 2.02) was filed. `inferred`: no release that quarter, so the date comes from the 10-Q or 10-K (filing-backed, but weaker). `estimated`: projected from the company's past cadence. `confirmed`: announced by the company; not produced yet. */
          date_status?: "reported" | "inferred" | "confirmed" | "estimated";
          /**
           * US Eastern date of the report, from the SEC acceptance timestamp rather than EDGAR's filing date.
           * @format date
           */
          report_date?: string;
          /** `bmo`: before 09:30 ET. `dmt`: during market hours. `amc`: after 16:00 ET. `unknown`: no timestamp, as on estimates. Taken from the SEC acceptance time, not the newswire. */
          report_time?: "bmo" | "dmt" | "amc" | "unknown";
          /** Raw SEC acceptance timestamp, in UTC. Empty on estimates. */
          accepted_at?: string;
          /** Fiscal year the quarter belongs to, named for the calendar year it ends in. */
          fiscal_year?: number;
          /** fiscal_period returned by DeFiLlama. */
          fiscal_period?: "Q1" | "Q2" | "Q3" | "Q4";
          /** Last day of the fiscal period the report covers. Empty for a release whose 10-Q has not been filed yet, and for estimates projected from one. */
          period_end?: string;
          /** `8k_item_202`: an earnings release. `periodic_filing`: a 10-Q or 10-K, used when there was no release. `cadence_model`: an estimate. */
          source?: "8k_item_202" | "periodic_filing" | "cadence_model";
          /** SEC form the date comes from, such as `8-K`, `10-Q` or `10-K`. Empty on estimates. */
          source_form?: string;
          /** SEC accession number of that filing. Empty on estimates. */
          accession_number?: string;
          /** On estimates, how many days either side of `report_date` the real date may land. 96% of real dates fell inside this range when tested against past reports. Wider for small caps and short histories. `null` on filing-backed rows. */
          max_drift_days?: number | null;
          /** When this `event_key` was first published (`YYYY-MM-DD HH:MM:SS.sss`). */
          first_published_at?: string;
          /** How many times the filing-backed date has moved since it was first published. */
          revision_count?: number;
          /** The `report_date` before the most recent move. Empty if it never moved. */
          previous_report_date?: string;
          /** When this row was last written (`YYYY-MM-DD HH:MM:SS.sss`). */
          inserted_at?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get filings for a company. Returns a list of company filings (such as annual reports, quarterly reports, and other important filings) for the given ticker, sorted by filing date descending (newest first). Requires an API plan key. Beta API; upstream fields may change. */
    "defillama.get_equities_v1_filings": {
      input: {
        /** Stock ticker symbol (case-insensitive) */
        ticker: string;
        /** Two-letter country code (ISO 3166-1 alpha-2) for the company, as returned by `GET /equities/v1/companies-list` (case-insensitive). */
        country: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /**
           * filingDate returned by DeFiLlama.
           * @format date
           */
          filingDate?: string;
          /**
           * reportDate returned by DeFiLlama.
           * @format date
           */
          reportDate?: string;
          /** form returned by DeFiLlama. */
          form?: string;
          /**
           * primaryDocumentUrl returned by DeFiLlama.
           * @format uri
           */
          primaryDocumentUrl?: string;
          /** documentDescription returned by DeFiLlama. */
          documentDescription?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get industries. Returns one row per industry, sorted by market cap (largest first), with the same metrics as a `GET /equities/v1/sectors` row plus the parent sector. Filter to one sector with `sector`, or to one industry with `industry`.

Each row carries two weights: `weight` is the share of all tracked US equity, and `sectorWeight` is the share of the parent sector. For Technology's industries, `sectorWeight` sums to 100 while `weight` sums to Technology's own weight in the market.

`rank` counts within the selected sector when `sector` is set, and across all industries otherwise. Filtering by `industry` alone keeps each row's market-wide rank.

The same industry name can exist under two sectors, so `industry` alone can return more than one row.

Covers US-listed companies. All monetary values are in USD. Requires an API plan key. Beta API; upstream fields may change. */
    "defillama.get_equities_v1_industries": {
      input: {
        /** Only return industries in this sector, as a slug (`technology`, `financial-services`) or as its label in any case (`Financial Services`). Valid values are the `sectorSlug`s returned by `GET /equities/v1/sectors`. An unknown value returns an empty list. */
        sector?: string;
        /** Only return this industry, as a slug (`semiconductors`) or as its label in any case (`Semiconductors`). An unknown value returns an empty list. */
        industry?: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** Industry name as the data vendor labels it. */
          industry?: string;
          /** URL-safe industry id. Pass it as `industry` to filter. */
          industrySlug?: string;
          /** Sector name as the data vendor labels it (not GICS). Companies the vendor left unclassified roll up into `Unknown`. */
          sector?: string;
          /** URL-safe sector id. Pass it as `sector` to the other equities endpoints. */
          sectorSlug?: string;
          /** Position by market cap, starting at 1. See the note on ranking above. */
          rank?: number;
          /** Share of all tracked US equity market cap, in percent. */
          weight?: number | null;
          /** Share of the parent sector's market cap, in percent. */
          sectorWeight?: number | null;
          /** Share of all tracked US value traded in the latest session, in percent. */
          dollarVolumeShare24h?: number | null;
          /** Total market cap of the constituents, in USD. */
          marketCap?: number | null;
          /** Change in total market cap over the latest session, in USD. Reconciles exactly with `priceChangePercentage1d`. */
          marketCapChange1d?: number | null;
          /** Value traded in the latest session (shares traded × price, summed), in USD. Reads low while a session is still open; `volumeAsOf` says when it was taken. */
          dollarVolume24h?: number | null;
          /** Total trailing twelve month revenue, in USD. */
          revenueTTM?: number | null;
          /** Total trailing twelve month earnings, in USD. */
          earningsTTM?: number | null;
          /** Total trailing twelve month EBITDA, in USD. */
          ebitdaTTM?: number | null;
          /** Total enterprise value, in USD. */
          enterpriseValue?: number | null;
          /** Total employees across the constituents that report a headcount. `null` when none do. */
          employeeCount?: number | null;
          /** Aggregate price to earnings: total market cap / total TTM earnings. `null` when total earnings are zero or negative; use `earningsYield` then. */
          trailingPE?: number | null;
          /** 100 × total TTM earnings / total market cap, in percent. Signed, so it stays defined when `trailingPE` is `null` for a loss-making group. */
          earningsYield?: number | null;
          /** Aggregate price to sales: total market cap / total TTM revenue. */
          priceToRevenue?: number | null;
          /** Aggregate price to book: total market cap / total shareholders' equity. */
          priceToBook?: number | null;
          /** Aggregate EV/EBITDA: total enterprise value / total TTM EBITDA. */
          enterpriseValueToEbitda?: number | null;
          /** 100 × total TTM dividends / total market cap, in percent. */
          dividendYield?: number | null;
          /** 100 × total TTM holders' revenue (dividends plus buybacks, net of share issuance) / total market cap, in percent. */
          holdersYield?: number | null;
          /** Total TTM operating income / total TTM revenue, in percent. Weighted by revenue, not market cap. */
          operatingProfitMarginTTM?: number | null;
          /** Cap-weighted price change over the latest session, in percent (`0.86` is +0.86%). */
          priceChangePercentage1d?: number | null;
          /** Cap-weighted price change over the last 7 days, in percent. */
          priceChangePercentage7d?: number | null;
          /** Cap-weighted price change over the last 30 days, in percent. */
          priceChangePercentage1m?: number | null;
          /** Cap-weighted price change over the last 3 calendar months, in percent. */
          priceChangePercentage3m?: number | null;
          /** Cap-weighted price change over the last 6 calendar months, in percent. */
          priceChangePercentage6m?: number | null;
          /** Cap-weighted price change since January 1, in percent. */
          priceChangePercentageYtd?: number | null;
          /** Cap-weighted price change over the last year, in percent. */
          priceChangePercentage1y?: number | null;
          /** Number of constituents. */
          companyCount?: number;
          /** Share of the constituents' market cap that supplied each metric's inputs, from 0 to 1, keyed by metric name. A ratio is served as `null` when its coverage is below 0.6, rather than as a figure computed over the wrong subset. */
          coverage?: Record<string, number>;
          /**
           * Most recent quote time across the constituents.
           * @format date-time
           */
          updatedAt?: string | null;
          /**
           * When `dollarVolume24h` was taken.
           * @format date-time
           */
          volumeAsOf?: string | null;
          /** The three largest constituents by market cap. */
          topHoldings?: Array<{
            /** ticker returned by DeFiLlama. */
            ticker?: string;
            /** name returned by DeFiLlama. */
            name?: string;
            /** Market cap, in USD. */
            marketCap?: number | null;
            /** Share of this industry's market cap, in percent. The name matches the sector holdings. */
            sectorWeight?: number | null;
            /** Price change over the latest session, in percent. */
            priceChangePercentage1d?: number | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get OHLCV candle data for a company. Returns OHLCV bars as six-number arrays: Unix timestamp in seconds (UTC), open, high, low, close, volume. Sorted by time descending (newest first). Optional `timeframe` controls both how far back data goes and the bar resolution: `1D`, `7D` and `1W` return 5-minute bars, `1M` and longer return daily bars. Omit or empty for full history (`MAX`). Requires an API plan key. Beta API; upstream fields may change. */
    "defillama.get_equities_v1_ohlcv": {
      input: {
        /** Stock ticker symbol (case-insensitive) */
        ticker: string;
        /** Two-letter country code (ISO 3166-1 alpha-2) for the company, as returned by `GET /equities/v1/companies-list` (case-insensitive). */
        country: string;
        /**
         * Optional lookback window (case-insensitive), same values as price history. `1D` returns the most recent trading session and `7D`/`1W` (aliases) the last 7 days, both as 5-minute bars; `1M` and longer are daily bars. `YTD` runs from January 1 of the current year. Omit or empty for full history (`MAX`). Intraday coverage is best-effort — a ticker without intraday data falls back to daily bars.
         * @default "MAX"
         */
        timeframe?: "1D" | "7D" | "1W" | "1M" | "3M" | "6M" | "YTD" | "1Y" | "5Y" | "MAX";
      };
      output: {
        /** Each item is `[timestamp, open, high, low, close, volume]`. `timestamp` is Unix epoch seconds (UTC). */
        data: Array<Array<number>>;
        [key: string]: unknown;
      };
    };
    /** Get on-chain tradeable markets for a company. Returns where the stock can be traded on-chain: `perps` are perpetual futures markets across exchanges, and `tokens` are tokenised-equity issuers. This is a live snapshot refreshed hourly and no history is kept. On-chain data is only collected for US-listed tickers, so a ticker in another market comes back with empty `perps` and `tokens` arrays rather than an error. Requires an API plan key. Beta API; upstream fields may change. */
    "defillama.get_equities_v1_onchain": {
      input: {
        /** Stock ticker symbol (case-insensitive) */
        ticker: string;
        /** Two-letter country code (ISO 3166-1 alpha-2) for the company, as returned by `GET /equities/v1/companies-list` (case-insensitive). */
        country: string;
      };
      output: {
        /** Perpetual futures markets tracking the stock. */
        perps?: Array<{
          /** Market pair as the venue names it. */
          pair?: string;
          /** Last traded price of the contract, in USD. */
          price?: number | null;
          /** 24 hour volume, in USD. */
          volume24h?: number | null;
          /** Open interest, in USD. */
          openInterest?: number | null;
          /** Annualised funding rate, in percent, so `-70.13` is -70.13% a year. Negative means shorts pay longs. */
          annualizedFundingRate?: number | null;
          /** Direct link to the market on the venue. */
          tradeUrl?: string;
          /** DefiLlama market identifier, `{venue}:{symbol}`. */
          contractSlug?: string;
          /** DefiLlama protocol slug for the exchange, when it has one. */
          exchangeProtocolSlug?: string;
          /** DefiLlama RWA platform slug for the venue, when it has one. */
          rwaPlatformSlug?: string;
          /** Whether the venue is a centralised or an on-chain exchange. */
          exchangeType?: "CEX" | "DEX";
          /**
           * When this market was last refreshed.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Tokenised equity products tracking the stock. */
        tokens?: Array<{
          /** Legal entity issuing the tokenised share, not the listed company. */
          issuer?: string;
          /** DefiLlama RWA platform slug for the issuer. */
          issuerRwaPlatformSlug?: string;
          /** Token price, in USD. */
          price?: number | null;
          /** Token symbol as the issuer lists it. */
          assetSlug?: string;
          /** Market cap of the token across active markets, in USD. `null` when no market reports one. */
          activeMarketcap?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get historical price data for a company. Returns closing prices as two-element arrays: ISO 8601 date-time string, then numeric price. Sorted by date descending (newest first). Resolution follows `timeframe`: `1D`, `7D` and `1W` are 5-minute intraday bars whose date-time carries a real time of day, while `1M` and longer are daily closes stamped `T00:00:00Z`. Requires an API plan key. Beta API; upstream fields may change. */
    "defillama.get_equities_v1_price_history": {
      input: {
        /** Stock ticker symbol (case-insensitive) */
        ticker: string;
        /** Two-letter country code (ISO 3166-1 alpha-2) for the company, as returned by `GET /equities/v1/companies-list` (case-insensitive). */
        country: string;
        /**
         * Optional lookback window (case-insensitive). `1D` returns the most recent trading session and `7D`/`1W` (aliases) the last 7 days, both at 5-minute resolution; `1M` and longer are daily. `YTD` runs from January 1 of the current year. Omit or empty for full history (`MAX`). Intraday coverage is best-effort — a ticker without intraday data falls back to daily bars, and `1D` then returns the single most recent daily bar.
         * @default "MAX"
         */
        timeframe?: "1D" | "7D" | "1W" | "1M" | "3M" | "6M" | "YTD" | "1Y" | "5Y" | "MAX";
      };
      output: {
        /** Each item is `[timestamp, price]`: ISO 8601 string, then closing price. */
        data: Array<Array<string | number>>;
        [key: string]: unknown;
      };
    };
    /** Get details for one sector. Returns one sector in full: everything its `GET /equities/v1/sectors` row has, plus a short description, the ten largest holdings, aggregate and median valuation ratios side by side, and how concentrated the sector is.

Covers US-listed companies. All monetary values are in USD. Requires an API plan key. Beta API; upstream fields may change. */
    "defillama.get_equities_v1_sector": {
      input: {
        /** Sector to return, as a slug (`technology`, `financial-services`) or as its label in any case (`Financial Services`). Valid values are the `sectorSlug`s returned by `GET /equities/v1/sectors`. */
        sector: string;
      };
      output: {
        /** Sector name as the data vendor labels it (not GICS). Companies the vendor left unclassified roll up into `Unknown`. */
        sector?: string;
        /** URL-safe sector id. Pass it as `sector` to the other equities endpoints. */
        sectorSlug?: string;
        /** Position by market cap, starting at 1. */
        rank?: number;
        /** Share of all tracked US equity market cap, in percent. Sums to 100 across sectors, `Unknown` included. */
        weight?: number | null;
        /** Share of all tracked US value traded in the latest session, in percent. */
        dollarVolumeShare24h?: number | null;
        /** Number of distinct industries in the sector. */
        industryCount?: number;
        /** Total market cap of the constituents, in USD. */
        marketCap?: number | null;
        /** Change in total market cap over the latest session, in USD. Reconciles exactly with `priceChangePercentage1d`. */
        marketCapChange1d?: number | null;
        /** Value traded in the latest session (shares traded × price, summed), in USD. Reads low while a session is still open; `volumeAsOf` says when it was taken. */
        dollarVolume24h?: number | null;
        /** Total trailing twelve month revenue, in USD. */
        revenueTTM?: number | null;
        /** Total trailing twelve month earnings, in USD. */
        earningsTTM?: number | null;
        /** Total trailing twelve month EBITDA, in USD. */
        ebitdaTTM?: number | null;
        /** Total enterprise value, in USD. */
        enterpriseValue?: number | null;
        /** Total employees across the constituents that report a headcount. `null` when none do. */
        employeeCount?: number | null;
        /** Aggregate price to earnings: total market cap / total TTM earnings. `null` when total earnings are zero or negative; use `earningsYield` then. */
        trailingPE?: number | null;
        /** 100 × total TTM earnings / total market cap, in percent. Signed, so it stays defined when `trailingPE` is `null` for a loss-making group. */
        earningsYield?: number | null;
        /** Aggregate price to sales: total market cap / total TTM revenue. */
        priceToRevenue?: number | null;
        /** Aggregate price to book: total market cap / total shareholders' equity. */
        priceToBook?: number | null;
        /** Aggregate EV/EBITDA: total enterprise value / total TTM EBITDA. */
        enterpriseValueToEbitda?: number | null;
        /** 100 × total TTM dividends / total market cap, in percent. */
        dividendYield?: number | null;
        /** 100 × total TTM holders' revenue (dividends plus buybacks, net of share issuance) / total market cap, in percent. */
        holdersYield?: number | null;
        /** Total TTM operating income / total TTM revenue, in percent. Weighted by revenue, not market cap. */
        operatingProfitMarginTTM?: number | null;
        /** Cap-weighted price change over the latest session, in percent (`0.86` is +0.86%). */
        priceChangePercentage1d?: number | null;
        /** Cap-weighted price change over the last 7 days, in percent. */
        priceChangePercentage7d?: number | null;
        /** Cap-weighted price change over the last 30 days, in percent. */
        priceChangePercentage1m?: number | null;
        /** Cap-weighted price change over the last 3 calendar months, in percent. */
        priceChangePercentage3m?: number | null;
        /** Cap-weighted price change over the last 6 calendar months, in percent. */
        priceChangePercentage6m?: number | null;
        /** Cap-weighted price change since January 1, in percent. */
        priceChangePercentageYtd?: number | null;
        /** Cap-weighted price change over the last year, in percent. */
        priceChangePercentage1y?: number | null;
        /** Number of constituents. */
        companyCount?: number;
        /** Share of the constituents' market cap that supplied each metric's inputs, from 0 to 1, keyed by metric name. A ratio is served as `null` when its coverage is below 0.6, rather than as a figure computed over the wrong subset. */
        coverage?: Record<string, number>;
        /**
         * Most recent quote time across the constituents.
         * @format date-time
         */
        updatedAt?: string | null;
        /**
         * When `dollarVolume24h` was taken.
         * @format date-time
         */
        volumeAsOf?: string | null;
        /** The ten largest constituents by market cap. */
        topHoldings?: Array<{
          /** ticker returned by DeFiLlama. */
          ticker?: string;
          /** name returned by DeFiLlama. */
          name?: string;
          /** Market cap, in USD. */
          marketCap?: number | null;
          /** Share of this sector's market cap, in percent. */
          sectorWeight?: number | null;
          /** Price change over the latest session, in percent. */
          priceChangePercentage1d?: number | null;
          [key: string]: unknown;
        }>;
        /** Short description of what the sector covers. */
        description?: string;
        /** The sector's aggregate ratios (same values as the top-level fields) next to the median of its constituents' own ratios. Compare aggregate with aggregate and median with median, for example against `GET /equities/v1/sectors-overview`. */
        valuation?: {
          /** Aggregate P/E. */
          trailingPE?: number | null;
          /** Aggregate earnings yield, in percent. */
          earningsYield?: number | null;
          /** Aggregate price to sales. */
          priceToRevenue?: number | null;
          /** Aggregate price to book. */
          priceToBook?: number | null;
          /** Aggregate EV/EBITDA. */
          enterpriseValueToEbitda?: number | null;
          /** Revenue-weighted TTM operating margin, in percent. */
          operatingProfitMarginTTM?: number | null;
          /** Aggregate dividend yield, in percent. */
          dividendYield?: number | null;
          /** Median of the constituents' own P/E, over those with a positive one. */
          medianTrailingPE?: number | null;
          /** Median of the constituents' own price to sales, over those with a positive one. */
          medianPriceToRevenue?: number | null;
          /** Median of the constituents' own price to book, over those with a positive one. */
          medianPriceToBook?: number | null;
          /** Median of the constituents' own EV/EBITDA, over those with a positive one. */
          medianEnterpriseValueToEbitda?: number | null;
          /** Median of the constituents' own TTM operating margin, in percent. */
          medianOperatingProfitMarginTTM?: number | null;
          /** Median of the constituents' own dividend yield, in percent. */
          medianDividendYield?: number | null;
          [key: string]: unknown;
        };
        /** How much of the sector's market cap sits in its largest constituents. */
        concentration?: {
          /** Share of the sector's market cap held by its ten largest constituents, in percent. */
          top10MarketCapShare?: number | null;
          /** Herfindahl-Hirschman index over the constituents' percentage shares of sector market cap, from 0 to 10,000. A single-company sector is 10,000 and ten equal constituents are 1,000. */
          hhi?: number | null;
          /** Number of constituents with a market cap of at least `megaCapThreshold`. */
          megaCapCount?: number;
          /** Market cap, in USD, from which a company counts as mega cap. */
          megaCapThreshold?: number;
          /** Median constituent market cap, in USD. */
          medianMarketCap?: number | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get all sectors. Returns one row per sector, sorted by market cap (largest first): market cap and weight, traded value, valuation ratios, price changes over seven windows, and the three largest holdings.

Covers US-listed companies. All monetary values are in USD.

Sector and industry names come from the data vendor (a Morningstar-style list of 11 sectors and about 140 industries), not GICS. Companies with no sector are grouped as `Unknown` rather than dropped, so sector market caps add up to the market total.

Ratios such as `trailingPE` are aggregates (total market cap / total earnings), so the group is valued as one company rather than averaging its constituents' ratios. Price changes are weighted by market cap at the start of each window. Percentages are in percent, not fractions: `1.82` means +1.82%. Requires an API plan key. Beta API; upstream fields may change. */
    "defillama.get_equities_v1_sectors": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** Sector name as the data vendor labels it (not GICS). Companies the vendor left unclassified roll up into `Unknown`. */
          sector?: string;
          /** URL-safe sector id. Pass it as `sector` to the other equities endpoints. */
          sectorSlug?: string;
          /** Position by market cap, starting at 1. */
          rank?: number;
          /** Share of all tracked US equity market cap, in percent. Sums to 100 across sectors, `Unknown` included. */
          weight?: number | null;
          /** Share of all tracked US value traded in the latest session, in percent. */
          dollarVolumeShare24h?: number | null;
          /** Number of distinct industries in the sector. */
          industryCount?: number;
          /** Total market cap of the constituents, in USD. */
          marketCap?: number | null;
          /** Change in total market cap over the latest session, in USD. Reconciles exactly with `priceChangePercentage1d`. */
          marketCapChange1d?: number | null;
          /** Value traded in the latest session (shares traded × price, summed), in USD. Reads low while a session is still open; `volumeAsOf` says when it was taken. */
          dollarVolume24h?: number | null;
          /** Total trailing twelve month revenue, in USD. */
          revenueTTM?: number | null;
          /** Total trailing twelve month earnings, in USD. */
          earningsTTM?: number | null;
          /** Total trailing twelve month EBITDA, in USD. */
          ebitdaTTM?: number | null;
          /** Total enterprise value, in USD. */
          enterpriseValue?: number | null;
          /** Total employees across the constituents that report a headcount. `null` when none do. */
          employeeCount?: number | null;
          /** Aggregate price to earnings: total market cap / total TTM earnings. `null` when total earnings are zero or negative; use `earningsYield` then. */
          trailingPE?: number | null;
          /** 100 × total TTM earnings / total market cap, in percent. Signed, so it stays defined when `trailingPE` is `null` for a loss-making group. */
          earningsYield?: number | null;
          /** Aggregate price to sales: total market cap / total TTM revenue. */
          priceToRevenue?: number | null;
          /** Aggregate price to book: total market cap / total shareholders' equity. */
          priceToBook?: number | null;
          /** Aggregate EV/EBITDA: total enterprise value / total TTM EBITDA. */
          enterpriseValueToEbitda?: number | null;
          /** 100 × total TTM dividends / total market cap, in percent. */
          dividendYield?: number | null;
          /** 100 × total TTM holders' revenue (dividends plus buybacks, net of share issuance) / total market cap, in percent. */
          holdersYield?: number | null;
          /** Total TTM operating income / total TTM revenue, in percent. Weighted by revenue, not market cap. */
          operatingProfitMarginTTM?: number | null;
          /** Cap-weighted price change over the latest session, in percent (`0.86` is +0.86%). */
          priceChangePercentage1d?: number | null;
          /** Cap-weighted price change over the last 7 days, in percent. */
          priceChangePercentage7d?: number | null;
          /** Cap-weighted price change over the last 30 days, in percent. */
          priceChangePercentage1m?: number | null;
          /** Cap-weighted price change over the last 3 calendar months, in percent. */
          priceChangePercentage3m?: number | null;
          /** Cap-weighted price change over the last 6 calendar months, in percent. */
          priceChangePercentage6m?: number | null;
          /** Cap-weighted price change since January 1, in percent. */
          priceChangePercentageYtd?: number | null;
          /** Cap-weighted price change over the last year, in percent. */
          priceChangePercentage1y?: number | null;
          /** Number of constituents. */
          companyCount?: number;
          /** Share of the constituents' market cap that supplied each metric's inputs, from 0 to 1, keyed by metric name. A ratio is served as `null` when its coverage is below 0.6, rather than as a figure computed over the wrong subset. */
          coverage?: Record<string, number>;
          /**
           * Most recent quote time across the constituents.
           * @format date-time
           */
          updatedAt?: string | null;
          /**
           * When `dollarVolume24h` was taken.
           * @format date-time
           */
          volumeAsOf?: string | null;
          /** The three largest constituents by market cap. `GET /equities/v1/sector` returns ten. */
          topHoldings?: Array<{
            /** ticker returned by DeFiLlama. */
            ticker?: string;
            /** name returned by DeFiLlama. */
            name?: string;
            /** Market cap, in USD. */
            marketCap?: number | null;
            /** Share of this sector's market cap, in percent. */
            sectorWeight?: number | null;
            /** Price change over the latest session, in percent. */
            priceChangePercentage1d?: number | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get market-wide sector overview. Returns totals across all tracked US companies, which the per-sector rows cannot carry: the market cap every sector `weight` is measured against, aggregate and median valuation ratios for the whole market, and the best, worst, and largest sector.

The constituents here are every tracked US company. Fields shared with `GET /equities/v1/sectors` mean the same thing.

Covers US-listed companies. All monetary values are in USD. Requires an API plan key. Beta API; upstream fields may change. */
    "defillama.get_equities_v1_sectors_overview": {
      input: Record<string, never>;
      output: {
        /** Total market cap of the constituents, in USD. */
        marketCap?: number | null;
        /** Change in total market cap over the latest session, in USD. Reconciles exactly with `priceChangePercentage1d`. */
        marketCapChange1d?: number | null;
        /** Value traded in the latest session (shares traded × price, summed), in USD. Reads low while a session is still open; `volumeAsOf` says when it was taken. */
        dollarVolume24h?: number | null;
        /** Total trailing twelve month revenue, in USD. */
        revenueTTM?: number | null;
        /** Total trailing twelve month earnings, in USD. */
        earningsTTM?: number | null;
        /** Total trailing twelve month EBITDA, in USD. */
        ebitdaTTM?: number | null;
        /** Total enterprise value, in USD. */
        enterpriseValue?: number | null;
        /** Total employees across the constituents that report a headcount. `null` when none do. */
        employeeCount?: number | null;
        /** Aggregate price to earnings: total market cap / total TTM earnings. `null` when total earnings are zero or negative; use `earningsYield` then. */
        trailingPE?: number | null;
        /** 100 × total TTM earnings / total market cap, in percent. Signed, so it stays defined when `trailingPE` is `null` for a loss-making group. */
        earningsYield?: number | null;
        /** Aggregate price to sales: total market cap / total TTM revenue. */
        priceToRevenue?: number | null;
        /** Aggregate price to book: total market cap / total shareholders' equity. */
        priceToBook?: number | null;
        /** Aggregate EV/EBITDA: total enterprise value / total TTM EBITDA. */
        enterpriseValueToEbitda?: number | null;
        /** 100 × total TTM dividends / total market cap, in percent. */
        dividendYield?: number | null;
        /** 100 × total TTM holders' revenue (dividends plus buybacks, net of share issuance) / total market cap, in percent. */
        holdersYield?: number | null;
        /** Total TTM operating income / total TTM revenue, in percent. Weighted by revenue, not market cap. */
        operatingProfitMarginTTM?: number | null;
        /** Cap-weighted price change over the latest session, in percent (`0.86` is +0.86%). */
        priceChangePercentage1d?: number | null;
        /** Cap-weighted price change over the last 7 days, in percent. */
        priceChangePercentage7d?: number | null;
        /** Cap-weighted price change over the last 30 days, in percent. */
        priceChangePercentage1m?: number | null;
        /** Cap-weighted price change over the last 3 calendar months, in percent. */
        priceChangePercentage3m?: number | null;
        /** Cap-weighted price change over the last 6 calendar months, in percent. */
        priceChangePercentage6m?: number | null;
        /** Cap-weighted price change since January 1, in percent. */
        priceChangePercentageYtd?: number | null;
        /** Cap-weighted price change over the last year, in percent. */
        priceChangePercentage1y?: number | null;
        /** Number of constituents. */
        companyCount?: number;
        /** Share of the constituents' market cap that supplied each metric's inputs, from 0 to 1, keyed by metric name. A ratio is served as `null` when its coverage is below 0.6, rather than as a figure computed over the wrong subset. */
        coverage?: Record<string, number>;
        /**
         * Most recent quote time across the constituents.
         * @format date-time
         */
        updatedAt?: string | null;
        /**
         * When `dollarVolume24h` was taken.
         * @format date-time
         */
        volumeAsOf?: string | null;
        /** Median of the constituents' own P/E, over those with a positive one. */
        medianTrailingPE?: number | null;
        /** Median of the constituents' own price to sales, over those with a positive one. */
        medianPriceToRevenue?: number | null;
        /** Median of the constituents' own price to book, over those with a positive one. */
        medianPriceToBook?: number | null;
        /** Median of the constituents' own EV/EBITDA, over those with a positive one. */
        medianEnterpriseValueToEbitda?: number | null;
        /** Median of the constituents' own TTM operating margin, in percent. */
        medianOperatingProfitMarginTTM?: number | null;
        /** Median of the constituents' own dividend yield, in percent. */
        medianDividendYield?: number | null;
        /** Median constituent market cap, in USD. */
        medianMarketCap?: number | null;
        /** Number of sectors, not counting `Unknown`. */
        sectorCount?: number;
        /** Number of distinct industries. */
        industryCount?: number;
        /** Sector with the highest `priceChangePercentage1d`. Never `Unknown`. */
        bestSector1d?: {
          /** Sector name as the data vendor labels it (not GICS). Companies the vendor left unclassified roll up into `Unknown`. */
          sector?: string;
          /** URL-safe sector id. Pass it as `sector` to the other equities endpoints. */
          sectorSlug?: string;
          /** Cap-weighted price change over the latest session, in percent. */
          priceChangePercentage1d?: number | null;
          /** Share of all tracked US equity market cap, in percent. */
          weight?: number | null;
          [key: string]: unknown;
        } | null;
        /** Sector with the lowest `priceChangePercentage1d`. Never `Unknown`. */
        worstSector1d?: {
          /** Sector name as the data vendor labels it (not GICS). Companies the vendor left unclassified roll up into `Unknown`. */
          sector?: string;
          /** URL-safe sector id. Pass it as `sector` to the other equities endpoints. */
          sectorSlug?: string;
          /** Cap-weighted price change over the latest session, in percent. */
          priceChangePercentage1d?: number | null;
          /** Share of all tracked US equity market cap, in percent. */
          weight?: number | null;
          [key: string]: unknown;
        } | null;
        /** Sector with the largest market cap. Never `Unknown`. */
        largestSector?: {
          /** Sector name as the data vendor labels it (not GICS). Companies the vendor left unclassified roll up into `Unknown`. */
          sector?: string;
          /** URL-safe sector id. Pass it as `sector` to the other equities endpoints. */
          sectorSlug?: string;
          /** Cap-weighted price change over the latest session, in percent. */
          priceChangePercentage1d?: number | null;
          /** Share of all tracked US equity market cap, in percent. */
          weight?: number | null;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Get financial statements for a company. Returns income statement, balance sheet, and cash flow statement for the given ticker, broken down by quarterly and annual periods. Requires an API plan key. Beta API; upstream fields may change. */
    "defillama.get_equities_v1_statements": {
      input: {
        /** Stock ticker symbol (case-insensitive) */
        ticker: string;
        /** Two-letter country code (ISO 3166-1 alpha-2) for the company, as returned by `GET /equities/v1/companies-list` (case-insensitive). */
        country: string;
      };
      output: {
        /** Income statement data. The `labels` array defines the rows; `values` is a parallel array of arrays where each inner array holds one row's values across all periods. */
        incomeStatement?: {
          /** Ordered list of income statement line items. Each index corresponds to an inner array in `quarterly.values` and `annual.values`. */
          labels?: Array<string>;
          /** Metadata describing which top-level labels have child breakdowns and what those child labels are, separately for quarterly and annual periods. */
          children?: {
            /** Child label definitions for quarterly data. Keys are parent label names from `labels`. */
            quarterly?: Record<string, {
                /** Child line item names for this parent. Each index corresponds to an inner array in `quarterly.children[label].values`. */
                labels?: Array<string>;
                [key: string]: unknown;
              }>;
            /** Child label definitions for annual data. Keys are parent label names from `labels`. */
            annual?: Record<string, {
                /** labels returned by DeFiLlama. */
                labels?: Array<string>;
                [key: string]: unknown;
              }>;
            [key: string]: unknown;
          };
          /** Quarterly period data for the income statement. */
          quarterly?: {
            /** ISO 8601 date each quarter ended. */
            periodEnding?: Array<string>;
            /** Parallel to `labels`. Each inner array contains the values for that row across all `periodEnding` entries. Values may be `null` when not reported. */
            values?: Array<Array<number | null>>;
            /** Breakdown data for parent labels that have sub-components. Keys match parent label names. Child labels are defined in `children.quarterly[label].labels`. */
            children?: Record<string, {
                /** One inner array per child label, each containing values across all periods. Values may be `null`. */
                values?: Array<Array<number | null>>;
                [key: string]: unknown;
              }>;
            [key: string]: unknown;
          };
          /** Annual period data for the income statement. */
          annual?: {
            /** ISO 8601 date each fiscal year ended. */
            periodEnding?: Array<string>;
            /** Parallel to `labels`. Each inner array contains the values for that row across all `periodEnding` entries. Values may be `null`. */
            values?: Array<Array<number | null>>;
            /** Breakdown data for parent labels that have sub-components. Child labels are defined in `children.annual[label].labels`. */
            children?: Record<string, {
                /** values returned by DeFiLlama. */
                values?: Array<Array<number | null>>;
                [key: string]: unknown;
              }>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Balance sheet data. Follows the same structure as `incomeStatement`: top-level `labels`, `children` metadata, and `quarterly`/`annual` period objects each containing `periodEnding`, `values`, and `children`. */
        balanceSheet?: {
          /** Ordered list of balance sheet line items. */
          labels?: Array<string>;
          /** children returned by DeFiLlama. */
          children?: {
            /** quarterly returned by DeFiLlama. */
            quarterly?: Record<string, {
                /** labels returned by DeFiLlama. */
                labels?: Array<string>;
                [key: string]: unknown;
              }>;
            /** annual returned by DeFiLlama. */
            annual?: Record<string, {
                /** labels returned by DeFiLlama. */
                labels?: Array<string>;
                [key: string]: unknown;
              }>;
            [key: string]: unknown;
          };
          /** quarterly returned by DeFiLlama. */
          quarterly?: {
            /** periodEnding returned by DeFiLlama. */
            periodEnding?: Array<string>;
            /** values returned by DeFiLlama. */
            values?: Array<Array<number | null>>;
            /** children returned by DeFiLlama. */
            children?: Record<string, {
                /** values returned by DeFiLlama. */
                values?: Array<Array<number | null>>;
                [key: string]: unknown;
              }>;
            [key: string]: unknown;
          };
          /** annual returned by DeFiLlama. */
          annual?: {
            /** periodEnding returned by DeFiLlama. */
            periodEnding?: Array<string>;
            /** values returned by DeFiLlama. */
            values?: Array<Array<number | null>>;
            /** children returned by DeFiLlama. */
            children?: Record<string, {
                /** values returned by DeFiLlama. */
                values?: Array<Array<number | null>>;
                [key: string]: unknown;
              }>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Cash flow statement data. Follows the same structure as `incomeStatement`: top-level `labels`, `children` metadata, and `quarterly`/`annual` period objects each containing `periodEnding`, `values`, and `children`. */
        cashflow?: {
          /** Ordered list of cash flow line items. */
          labels?: Array<string>;
          /** children returned by DeFiLlama. */
          children?: {
            /** quarterly returned by DeFiLlama. */
            quarterly?: Record<string, {
                /** labels returned by DeFiLlama. */
                labels?: Array<string>;
                [key: string]: unknown;
              }>;
            /** annual returned by DeFiLlama. */
            annual?: Record<string, {
                /** labels returned by DeFiLlama. */
                labels?: Array<string>;
                [key: string]: unknown;
              }>;
            [key: string]: unknown;
          };
          /** quarterly returned by DeFiLlama. */
          quarterly?: {
            /** periodEnding returned by DeFiLlama. */
            periodEnding?: Array<string>;
            /** values returned by DeFiLlama. */
            values?: Array<Array<number | null>>;
            /** children returned by DeFiLlama. */
            children?: Record<string, {
                /** values returned by DeFiLlama. */
                values?: Array<Array<number | null>>;
                [key: string]: unknown;
              }>;
            [key: string]: unknown;
          };
          /** annual returned by DeFiLlama. */
          annual?: {
            /** periodEnding returned by DeFiLlama. */
            periodEnding?: Array<string>;
            /** values returned by DeFiLlama. */
            values?: Array<Array<number | null>>;
            /** children returned by DeFiLlama. */
            children?: Record<string, {
                /** values returned by DeFiLlama. */
                values?: Array<Array<number | null>>;
                [key: string]: unknown;
              }>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get live market summary for a company. Returns current market data for a single ticker. This is a compact snapshot (no `ticker` / `name` fields); use `GET /equities/v1/companies-list` for the list of tracked companies with their identity details. Requires an API plan key. Beta API; upstream fields may change. */
    "defillama.get_equities_v1_summary": {
      input: {
        /** Stock ticker symbol (case-insensitive) */
        ticker: string;
        /** Two-letter country code (ISO 3166-1 alpha-2) for the company, as returned by `GET /equities/v1/companies-list` (case-insensitive). */
        country: string;
      };
      output: {
        /** currentPrice returned by DeFiLlama. */
        currentPrice?: number;
        /** volume returned by DeFiLlama. */
        volume?: number;
        /** marketCap returned by DeFiLlama. */
        marketCap?: number;
        /** circulatingMarketCap returned by DeFiLlama. */
        circulatingMarketCap?: number | null;
        /** enterpriseValue returned by DeFiLlama. */
        enterpriseValue?: number | null;
        /** fiftyTwoWeekHigh returned by DeFiLlama. */
        fiftyTwoWeekHigh?: number;
        /** fiftyTwoWeekLow returned by DeFiLlama. */
        fiftyTwoWeekLow?: number;
        /** dividendYield returned by DeFiLlama. */
        dividendYield?: number | null;
        /** trailingPE returned by DeFiLlama. */
        trailingPE?: number | null;
        /** priceToRevenue returned by DeFiLlama. */
        priceToRevenue?: number | null;
        /** priceChangePercentage1d returned by DeFiLlama. */
        priceChangePercentage1d?: number;
        /** priceChangePercentage7d returned by DeFiLlama. */
        priceChangePercentage7d?: number;
        /** priceChangePercentage1m returned by DeFiLlama. */
        priceChangePercentage1m?: number;
        /** priceChange1d returned by DeFiLlama. */
        priceChange1d?: number;
        /** marketCapChange1d returned by DeFiLlama. */
        marketCapChange1d?: number;
        /** priceToBook returned by DeFiLlama. */
        priceToBook?: number | null;
        /** enterpriseValueToEbitda returned by DeFiLlama. */
        enterpriseValueToEbitda?: number | null;
        /** holdersYield returned by DeFiLlama. */
        holdersYield?: number | null;
        /**
         * updatedAt returned by DeFiLlama.
         * @format date-time
         */
        updatedAt?: string;
        /** revenueTTM returned by DeFiLlama. */
        revenueTTM?: number | null;
        /** grossProfitTTM returned by DeFiLlama. */
        grossProfitTTM?: number | null;
        /** earningsTTM returned by DeFiLlama. */
        earningsTTM?: number | null;
        /** ebitdaTTM returned by DeFiLlama. */
        ebitdaTTM?: number | null;
        /** operatingProfitMarginTTM returned by DeFiLlama. */
        operatingProfitMarginTTM?: number | null;
        /** holdersRevenueTTM returned by DeFiLlama. */
        holdersRevenueTTM?: number | null;
        /** holderEarningsTTM returned by DeFiLlama. */
        holderEarningsTTM?: number | null;
        /** dividendsTTM returned by DeFiLlama. */
        dividendsTTM?: number | null;
        /** stockRepurchaseTTM returned by DeFiLlama. */
        stockRepurchaseTTM?: number | null;
        /** stockIssuanceTTM returned by DeFiLlama. */
        stockIssuanceTTM?: number | null;
        /** stockBasedCompensationTTM returned by DeFiLlama. */
        stockBasedCompensationTTM?: number | null;
        /** cashAndCashEquivalents returned by DeFiLlama. */
        cashAndCashEquivalents?: number | null;
        /** totalAssets returned by DeFiLlama. */
        totalAssets?: number | null;
        /** totalLiabilities returned by DeFiLlama. */
        totalLiabilities?: number | null;
        /** totalShareholdersEquity returned by DeFiLlama. */
        totalShareholdersEquity?: number | null;
        /** totalDebt returned by DeFiLlama. */
        totalDebt?: number | null;
        /** circulatingSupply returned by DeFiLlama. */
        circulatingSupply?: number | null;
        /** totalSupply returned by DeFiLlama. */
        totalSupply?: number | null;
        /** employeeCount returned by DeFiLlama. */
        employeeCount?: number | null;
        [key: string]: unknown;
      };
    };
    /** Historical Flows at the Asset Level.  Requires an API plan key. */
    "defillama.get_etfs_flows": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** CoinGecko ID */
          gecko_id?: string;
          /** Day */
          day?: string;
          /** Sum of all USD flows per asset */
          total_flow_usd?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get ETFs and their metrics (aum, flows, fees...).  Requires an API plan key. */
    "defillama.get_etfs_snapshot": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** ETF ticker symbol */
          ticker?: string;
          /** Current timestamp */
          timestamp?: number;
          /** Asset name */
          asset?: string;
          /** ETF issuer name */
          issuer?: string;
          /** Full ETF name */
          etf_name?: string;
          /** Custodian name */
          custodian?: string;
          /** Percentage fee */
          pct_fee?: number;
          /** ETF URL */
          url?: string;
          /** Net flows */
          flows?: number;
          /** Assets under management */
          aum?: number;
          /** Trading volume */
          volume?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get chart of narratives based on category performance (with individual coins weighted by mcap).  Requires an API plan key. */
    "defillama.get_fdv_performance_by_period": {
      input: {
        /**
         * One of ['7', '30', 'ytd', '365']
         * @minLength 1
         */
        period: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** Date timestamp */
          date?: number;
          /** Analytics category performance */
          Analytics?: number;
          /** AI category performance */
          "Artificial Intelligence (AI)"?: number;
          /** Bitcoin category performance */
          Bitcoin?: number;
          /** Bridge governance tokens category performance */
          "Bridge Governance Tokens"?: number;
          /** CEX token category performance */
          "Centralized Exchange (CEX) Token"?: number;
          /** Data availability category performance */
          "Data Availability"?: number;
          /** DeFi category performance */
          "Decentralized Finance (DeFi)"?: number;
          /** DID category performance */
          "Decentralized Identifier (DID)"?: number;
          /** DePIN category performance */
          DePIN?: number;
          /** Ethereum category performance */
          Ethereum?: number;
          /** Gaming category performance */
          "Gaming (GameFi)"?: number;
          /** Liquid staking governance tokens category performance */
          "Liquid Staking Governance Tokens"?: number;
          /** Meme category performance */
          Meme?: number;
          /** NFT marketplace category performance */
          "NFT Marketplace"?: number;
          /** Oracle category performance */
          Oracle?: number;
          /** PolitiFi category performance */
          PolitiFi?: number;
          /** Prediction markets category performance */
          "Prediction Markets"?: number;
          /** RWA category performance */
          "Real World Assets (RWA)"?: number;
          /** Rollup category performance */
          Rollup?: number;
          /** Smart contract platform category performance */
          "Smart Contract Platform"?: number;
          /** SocialFi category performance */
          SocialFi?: number;
          /** Solana category performance */
          Solana?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Overview of all forks accross all protocols.  Requires an API plan key. */
    "defillama.get_forks": {
      input: Record<string, never>;
      output: {
        /** chart returned by DeFiLlama. */
        chart?: Record<string, Record<string, {
              /** staking returned by DeFiLlama. */
              staking?: number;
              /** tvl returned by DeFiLlama. */
              tvl?: number;
              /** pool2 returned by DeFiLlama. */
              pool2?: number;
              /** doublecounted returned by DeFiLlama. */
              doublecounted?: number;
              /** borrowed returned by DeFiLlama. */
              borrowed?: number;
              /** vesting returned by DeFiLlama. */
              vesting?: number;
              /** liquidstaking returned by DeFiLlama. */
              liquidstaking?: number;
              /** dcAndLsOverlap returned by DeFiLlama. */
              dcAndLsOverlap?: number;
              [key: string]: unknown;
            }>>;
        /** forks returned by DeFiLlama. */
        forks?: Record<string, Array<string>>;
        [key: string]: unknown;
      };
    };
    /** Overview of all hacks on our Hacks dashboard.  Requires an API plan key. */
    "defillama.get_hacks": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** date returned by DeFiLlama. */
          date?: number;
          /** name returned by DeFiLlama. */
          name?: string;
          /** classification returned by DeFiLlama. */
          classification?: string;
          /** technique returned by DeFiLlama. */
          technique?: string;
          /** amount returned by DeFiLlama. */
          amount?: number;
          /** chain returned by DeFiLlama. */
          chain?: Array<string>;
          /** bridgeHack returned by DeFiLlama. */
          bridgeHack?: boolean;
          /** targetType returned by DeFiLlama. */
          targetType?: string;
          /** source returned by DeFiLlama. */
          source?: string;
          /** returnedFunds returned by DeFiLlama. */
          returnedFunds?: number | null;
          /** defillamaId returned by DeFiLlama. */
          defillamaId?: number | null;
          /** language returned by DeFiLlama. */
          language?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Read historical token liquidity. Requires an API plan key. */
    "defillama.get_historical_liquidity_by_token": {
      input: {
        /**
         * token slug
         * @minLength 1
         */
        token: string;
      };
      output: {
        /** DeFiLlama response. */
        data: unknown;
        [key: string]: unknown;
      };
    };
    /** Lists the amount of inflows and outflows for a protocol at a given date.  Requires an API plan key. */
    "defillama.get_inflows_by_protocol_by_timestamp": {
      input: {
        /**
         * protocol slug
         * @minLength 1
         */
        protocol: string;
        /** unix timestamp */
        timestamp: number;
      };
      output: {
        /** outflows returned by DeFiLlama. */
        outflows?: number;
        /** oldTokens returned by DeFiLlama. */
        oldTokens?: {
          /** date returned by DeFiLlama. */
          date?: number;
          /** tvl returned by DeFiLlama. */
          tvl?: Record<string, number>;
          [key: string]: unknown;
        };
        /** currentTokens returned by DeFiLlama. */
        currentTokens?: {
          /** date returned by DeFiLlama. */
          date?: number;
          /** tvl returned by DeFiLlama. */
          tvl?: Record<string, number>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Exchange rates and ETH peg of liquid staking tokens. Latest expected (contract) redemption rate, executable market rate and resulting ETH peg for major LSTs. Requires an API plan key. */
    "defillama.get_lst_rates": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** The name of the protocol issuing the LST */
          name?: string;
          /** The symbol of the LST */
          symbol?: string | null;
          /** The contract address of the LST */
          address?: string;
          /** The type of the LST (rebase or accruing) */
          type?: string | null;
          /** ETH per token owed by the protocol, read from its contract */
          expectedRate?: number | null;
          /** Executable market rate in ETH per token; null when no credible market quote exists */
          marketRate?: number | null;
          /** Percent deviation of the market rate from the expected rate */
          ethPeg?: number | null;
          /** The protocol fee percentage */
          fee?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Overview of all oracles accross all protocols.  Requires an API plan key. */
    "defillama.get_oracles": {
      input: Record<string, never>;
      output: {
        /** chart returned by DeFiLlama. */
        chart?: Record<string, Record<string, {
              /** tvl returned by DeFiLlama. */
              tvl?: number;
              /** staking returned by DeFiLlama. */
              staking?: number;
              /** pool2 returned by DeFiLlama. */
              pool2?: number;
              /** borrowed returned by DeFiLlama. */
              borrowed?: number;
              /** treasury returned by DeFiLlama. */
              treasury?: number;
              /** vesting returned by DeFiLlama. */
              vesting?: number;
              [key: string]: unknown;
            }>>;
        /** oracles returned by DeFiLlama. */
        oracles?: Record<string, Array<string>>;
        /** chainsByOracle returned by DeFiLlama. */
        chainsByOracle?: Record<string, Array<string>>;
        [key: string]: unknown;
      };
    };
    /** Lists all derivatives along summaries of their volumes filtering by chain.  Requires an API plan key. */
    "defillama.get_overview_derivatives": {
      input: {
        /**
         * true to exclude aggregated chart from response
         * @default false
         */
        excludeTotalDataChart?: boolean;
        /**
         * true to exclude broken down chart from response
         * @default false
         */
        excludeTotalDataChartBreakdown?: boolean;
      };
      output: {
        /** Total data chart with timestamps and volumes */
        totalDataChart?: Array<Array<number>>;
        /** Total data chart breakdown by protocol */
        totalDataChartBreakdown?: Array<Array<number | Record<string, unknown>>>;
        /** 24 hour breakdown */
        breakdown24h?: Record<string, unknown> | null;
        /** 30 day breakdown */
        breakdown30d?: Record<string, unknown> | null;
        /** Chain filter */
        chain?: string | null;
        /** All available chains */
        allChains?: Array<string>;
        /** Total 24 hour volume */
        total24h?: number;
        /** Total 48h to 24h volume */
        total48hto24h?: number;
        /** Total 7 day volume */
        total7d?: number;
        /** Total 14d to 7d volume */
        total14dto7d?: number;
        /** Total 60d to 30d volume */
        total60dto30d?: number;
        /** Total 30 day volume */
        total30d?: number;
        /** Total 1 year volume */
        total1y?: number;
        /** 1 day change percentage */
        change_1d?: number;
        /** 7 day change percentage */
        change_7d?: number;
        /** 1 month change percentage */
        change_1m?: number;
        /** 7d over 7d change percentage */
        change_7dover7d?: number;
        /** 30d over 30d change percentage */
        change_30dover30d?: number;
        /** Total volume 7 days ago */
        total7DaysAgo?: number;
        /** Total volume 30 days ago */
        total30DaysAgo?: number;
        /** Total all time volume */
        totalAllTime?: number;
        /** List of protocols */
        protocols?: Array<{
          /** Protocol 24 hour volume */
          total24h?: number;
          /** Protocol 48h to 24h volume */
          total48hto24h?: number;
          /** Protocol 7 day volume */
          total7d?: number;
          /** Protocol 14d to 7d volume */
          total14dto7d?: number;
          /** Protocol 60d to 30d volume */
          total60dto30d?: number;
          /** Protocol 30 day volume */
          total30d?: number;
          /** Protocol 1 year volume */
          total1y?: number;
          /** Protocol all time volume */
          totalAllTime?: number;
          /** Protocol average 1 year volume */
          average1y?: number;
          /** Protocol 1 day change percentage */
          change_1d?: number;
          /** Protocol 7 day change percentage */
          change_7d?: number;
          /** Protocol 1 month change percentage */
          change_1m?: number;
          /** Protocol 7d over 7d change percentage */
          change_7dover7d?: number;
          /** Protocol 30d over 30d change percentage */
          change_30dover30d?: number;
          /** Protocol 24 hour breakdown */
          breakdown24h?: Record<string, unknown>;
          /** Protocol 30 day breakdown */
          breakdown30d?: Record<string, unknown>;
          /** Protocol volume 7 days ago */
          total7DaysAgo?: number;
          /** Protocol volume 30 days ago */
          total30DaysAgo?: number;
          /** DefiLlama protocol ID */
          defillamaId?: string;
          /** Protocol name */
          name?: string;
          /** Protocol display name */
          displayName?: string;
          /** Protocol module */
          module?: string;
          /** Protocol category */
          category?: string;
          /** Protocol logo URL */
          logo?: string;
          /** Protocol chains */
          chains?: Array<string>;
          /** Protocol type */
          protocolType?: string;
          /** Methodology URL */
          methodologyURL?: string;
          /** Methodology details */
          methodology?: Record<string, unknown>;
          /** Latest fetch status */
          latestFetchIsOk?: boolean;
          /** Parent protocol */
          parentProtocol?: string;
          /** Protocol slug */
          slug?: string;
          /** Linked protocols */
          linkedProtocols?: Array<string>;
          /** Protocol ID */
          id?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List all dexs along with summaries of their volumes and dataType history data.  Available with no_auth or api_key. */
    "defillama.get_overview_dexs": {
      input: {
        /**
         * true to exclude aggregated chart from response
         * @default false
         */
        excludeTotalDataChart?: boolean;
        /**
         * true to exclude broken down chart from response
         * @default false
         */
        excludeTotalDataChartBreakdown?: boolean;
      };
      output: {
        /** protocols returned by DeFiLlama. */
        protocols?: Array<{
          /** name returned by DeFiLlama. */
          name?: string;
          /** displayName returned by DeFiLlama. */
          displayName?: string;
          /** total24h returned by DeFiLlama. */
          total24h?: number;
          /** total7d returned by DeFiLlama. */
          total7d?: number;
          /** change_1d returned by DeFiLlama. */
          change_1d?: number;
          /** change_7d returned by DeFiLlama. */
          change_7d?: number;
          /** chains returned by DeFiLlama. */
          chains?: Array<string>;
          [key: string]: unknown;
        }>;
        /** totalDataChart returned by DeFiLlama. */
        totalDataChart?: Array<Array<number | Record<string, unknown>>>;
        /** allChains returned by DeFiLlama. */
        allChains?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** List all dexs along with summaries of their volumes and dataType history data filtering by chain.  Available with no_auth or api_key. */
    "defillama.get_overview_dexs_by_chain": {
      input: {
        /**
         * chain name, list of all supported chains can be found under allChains attribute in /overview/dexs response
         * @minLength 1
         */
        chain: string;
        /**
         * true to exclude aggregated chart from response
         * @default false
         */
        excludeTotalDataChart?: boolean;
        /**
         * true to exclude broken down chart from response
         * @default false
         */
        excludeTotalDataChartBreakdown?: boolean;
      };
      output: {
        /** protocols returned by DeFiLlama. */
        protocols?: Array<{
          /** name returned by DeFiLlama. */
          name?: string;
          /** total24h returned by DeFiLlama. */
          total24h?: number;
          /** change_1d returned by DeFiLlama. */
          change_1d?: number;
          [key: string]: unknown;
        }>;
        /** totalDataChart returned by DeFiLlama. */
        totalDataChart?: Array<Array<unknown>>;
        [key: string]: unknown;
      };
    };
    /** List all protocols along with summaries of their fees and revenue and dataType history data.  Available with no_auth or api_key. */
    "defillama.get_overview_fees": {
      input: {
        /**
         * true to exclude aggregated chart from response
         * @default false
         */
        excludeTotalDataChart?: boolean;
        /**
         * true to exclude broken down chart from response
         * @default false
         */
        excludeTotalDataChartBreakdown?: boolean;
        /** Desired data type, dailyFees by default. */
        dataType?: "dailyFees" | "dailyRevenue" | "dailyHoldersRevenue";
      };
      output: {
        /** protocols returned by DeFiLlama. */
        protocols?: Array<{
          /** name returned by DeFiLlama. */
          name?: string;
          /** total24h returned by DeFiLlama. */
          total24h?: number;
          /** revenue24h returned by DeFiLlama. */
          revenue24h?: number;
          /** change_1d returned by DeFiLlama. */
          change_1d?: number;
          /** chains returned by DeFiLlama. */
          chains?: Array<string>;
          [key: string]: unknown;
        }>;
        /** totalDataChart returned by DeFiLlama. */
        totalDataChart?: Array<Array<unknown>>;
        /** totalDataChartBreakdown returned by DeFiLlama. */
        totalDataChartBreakdown?: Array<Array<unknown>>;
        [key: string]: unknown;
      };
    };
    /** List all protocols along with summaries of their fees and revenue and dataType history data by chain.  Available with no_auth or api_key. */
    "defillama.get_overview_fees_by_chain": {
      input: {
        /**
         * chain name, list of all supported chains can be found under allChains attribute in /overview/fees response
         * @minLength 1
         */
        chain: string;
        /**
         * true to exclude aggregated chart from response
         * @default false
         */
        excludeTotalDataChart?: boolean;
        /**
         * true to exclude broken down chart from response
         * @default false
         */
        excludeTotalDataChartBreakdown?: boolean;
        /** Desired data type, dailyFees by default. */
        dataType?: "dailyFees" | "dailyRevenue" | "dailyHoldersRevenue";
      };
      output: {
        /** protocols returned by DeFiLlama. */
        protocols?: Array<{
          /** name returned by DeFiLlama. */
          name?: string;
          /** total24h returned by DeFiLlama. */
          total24h?: number;
          /** revenue24h returned by DeFiLlama. */
          revenue24h?: number;
          /** change_1d returned by DeFiLlama. */
          change_1d?: number;
          /** chains returned by DeFiLlama. */
          chains?: Array<string>;
          [key: string]: unknown;
        }>;
        /** totalDataChart returned by DeFiLlama. */
        totalDataChart?: Array<Array<unknown>>;
        /** totalDataChartBreakdown returned by DeFiLlama. */
        totalDataChartBreakdown?: Array<Array<unknown>>;
        [key: string]: unknown;
      };
    };
    /** List all open interest dex exchanges along with summaries of their open interest.  Available with no_auth or api_key. */
    "defillama.get_overview_open_interest": {
      input: {
        /**
         * true to exclude aggregated chart from response
         * @default false
         */
        excludeTotalDataChart?: boolean;
        /**
         * true to exclude broken down chart from response
         * @default false
         */
        excludeTotalDataChartBreakdown?: boolean;
      };
      output: {
        /** protocols returned by DeFiLlama. */
        protocols?: Array<{
          /** name returned by DeFiLlama. */
          name?: string;
          /** displayName returned by DeFiLlama. */
          displayName?: string;
          /** total24h returned by DeFiLlama. */
          total24h?: number;
          /** total7d returned by DeFiLlama. */
          total7d?: number;
          /** change_1d returned by DeFiLlama. */
          change_1d?: number;
          /** change_7d returned by DeFiLlama. */
          change_7d?: number;
          /** chains returned by DeFiLlama. */
          chains?: Array<string>;
          [key: string]: unknown;
        }>;
        /** totalDataChart returned by DeFiLlama. */
        totalDataChart?: Array<Array<number | Record<string, unknown>>>;
        /** allChains returned by DeFiLlama. */
        allChains?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** List all options dexs along with summaries of their volumes and dataType history data.  Available with no_auth or api_key. */
    "defillama.get_overview_options": {
      input: {
        /**
         * true to exclude aggregated chart from response
         * @default false
         */
        excludeTotalDataChart?: boolean;
        /**
         * true to exclude broken down chart from response
         * @default false
         */
        excludeTotalDataChartBreakdown?: boolean;
        /** Desired data type, dailyNotionalVolume by default. */
        dataType?: "dailyPremiumVolume" | "dailyNotionalVolume";
      };
      output: {
        /** protocols returned by DeFiLlama. */
        protocols?: Array<{
          /** name returned by DeFiLlama. */
          name?: string;
          /** total24h returned by DeFiLlama. */
          total24h?: number;
          /** change_1d returned by DeFiLlama. */
          change_1d?: number;
          [key: string]: unknown;
        }>;
        /** totalDataChart returned by DeFiLlama. */
        totalDataChart?: Array<Array<unknown>>;
        [key: string]: unknown;
      };
    };
    /** List all options dexs along with summaries of their volumes and dataType history data filtering by chain.  Available with no_auth or api_key. */
    "defillama.get_overview_options_by_chain": {
      input: {
        /**
         * chain name, list of all supported chains can be found under allChains attribute in /overview/options response
         * @minLength 1
         */
        chain: string;
        /**
         * true to exclude aggregated chart from response
         * @default false
         */
        excludeTotalDataChart?: boolean;
        /**
         * true to exclude broken down chart from response
         * @default false
         */
        excludeTotalDataChartBreakdown?: boolean;
        /** Desired data type, dailyNotionalVolume by default. */
        dataType?: "dailyPremiumVolume" | "dailyNotionalVolume";
      };
      output: {
        /** Historical chart data with timestamps and total volumes */
        totalDataChart?: Array<Array<number>>;
        /** Historical chart data broken down by protocol */
        totalDataChartBreakdown?: Array<Array<number | Record<string, number>>>;
        /** 24-hour breakdown data */
        breakdown24h?: Record<string, unknown> | null;
        /** 30-day breakdown data */
        breakdown30d?: Record<string, unknown> | null;
        /** Chain name */
        chain?: string;
        /** List of all supported chains */
        allChains?: Array<string>;
        /** Total 24-hour volume */
        total24h?: number;
        /** Total 48-hour to 24-hour volume */
        total48hto24h?: number;
        /** Total 7-day volume */
        total7d?: number;
        /** Total 14-day to 7-day volume */
        total14dto7d?: number;
        /** Total 60-day to 30-day volume */
        total60dto30d?: number;
        /** Total 30-day volume */
        total30d?: number;
        /** Total 1-year volume */
        total1y?: number;
        /** 1-day change percentage */
        change_1d?: number;
        /** 7-day change percentage */
        change_7d?: number;
        /** 1-month change percentage */
        change_1m?: number;
        /** 7-day over 7-day change percentage */
        change_7dover7d?: number;
        /** 30-day over 30-day change percentage */
        change_30dover30d?: number;
        /** Total volume 7 days ago */
        total7DaysAgo?: number;
        /** Total volume 30 days ago */
        total30DaysAgo?: number;
        /** Total all-time volume */
        totalAllTime?: number;
        /** List of protocols with their volume data */
        protocols?: Array<{
          /** 24-hour volume */
          total24h?: number;
          /** 48-hour to 24-hour volume */
          total48hto24h?: number;
          /** 7-day volume */
          total7d?: number;
          /** 14-day to 7-day volume */
          total14dto7d?: number;
          /** 60-day to 30-day volume */
          total60dto30d?: number;
          /** 30-day volume */
          total30d?: number;
          /** 1-year volume */
          total1y?: number;
          /** All-time volume */
          totalAllTime?: number;
          /** Volume 7 days ago */
          total7DaysAgo?: number;
          /** Volume 30 days ago */
          total30DaysAgo?: number;
          /** Average 1-year volume */
          average1y?: number;
          /** 1-day change percentage */
          change_1d?: number;
          /** 7-day change percentage */
          change_7d?: number;
          /** 1-month change percentage */
          change_1m?: number;
          /** 7-day over 7-day change percentage */
          change_7dover7d?: number;
          /** 30-day over 30-day change percentage */
          change_30dover30d?: number;
          /** DefiLlama protocol ID */
          defillamaId?: string;
          /** Protocol name */
          name?: string;
          /** Protocol display name */
          displayName?: string;
          /** Protocol module name */
          module?: string;
          /** Protocol category */
          category?: string;
          /** Protocol logo URL */
          logo?: string;
          /** Supported chains */
          chains?: Array<string>;
          /** Protocol type */
          protocolType?: string;
          /** Methodology documentation URL */
          methodologyURL?: string;
          /** Protocol methodology details */
          methodology?: Record<string, string>;
          /** Whether the latest data fetch was successful */
          latestFetchIsOk?: boolean;
          /** Parent protocol identifier */
          parentProtocol?: string;
          /** Protocol slug */
          slug?: string;
          /** Linked protocol names */
          linkedProtocols?: Array<string>;
          /** Protocol ID */
          id?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Funding rates and open interest of perpetual futures. Latest funding rate, open interest and index price for Binance and OKX perpetual markets, with the 7d and 30d average and sum of settled funding rates. Requires an API plan key. */
    "defillama.get_perp_funding_rates": {
      input: Record<string, never>;
      output: {
        /** status returned by DeFiLlama. */
        status?: string;
        /** data returned by DeFiLlama. */
        data?: Array<{
          /** perp_id returned by DeFiLlama. */
          perp_id?: string;
          /** timestamp returned by DeFiLlama. */
          timestamp?: string;
          /** marketplace returned by DeFiLlama. */
          marketplace?: string;
          /** market returned by DeFiLlama. */
          market?: string;
          /** baseAsset returned by DeFiLlama. */
          baseAsset?: string;
          /** fundingRate returned by DeFiLlama. */
          fundingRate?: number;
          /** fundingRatePrevious returned by DeFiLlama. */
          fundingRatePrevious?: number;
          /** fundingTimePrevious returned by DeFiLlama. */
          fundingTimePrevious?: number;
          /** openInterest returned by DeFiLlama. */
          openInterest?: number;
          /** indexPrice returned by DeFiLlama. */
          indexPrice?: number;
          /** fundingRate7dAverage returned by DeFiLlama. */
          fundingRate7dAverage?: number | null;
          /** fundingRate7dSum returned by DeFiLlama. */
          fundingRate7dSum?: number | null;
          /** fundingRate30dAverage returned by DeFiLlama. */
          fundingRate30dAverage?: number | null;
          /** fundingRate30dSum returned by DeFiLlama. */
          fundingRate30dSum?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get list of all tracked pre-IPO companies. Returns every private company in the pre-IPO registry with its latest estimated valuation and derived funding metrics. Use this to discover valid `company` ids for the other pre-IPO endpoints. Companies come back in registry order, so the list is not sorted by valuation. Requires an API plan key. */
    "defillama.get_pre_ipo_v1_companies_list": {
      input: Record<string, never>;
      output: {
        /**
         * When this snapshot was generated.
         * @format date-time
         */
        updatedAt?: string;
        /** data returned by DeFiLlama. */
        data?: Array<{
          /** Company id. Pass this as the `company` query parameter on the other pre-IPO endpoints. */
          id?: string;
          /** name returned by DeFiLlama. */
          name?: string;
          /** description returned by DeFiLlama. */
          description?: string;
          /** website returned by DeFiLlama. */
          website?: string;
          /** sector returned by DeFiLlama. */
          sector?: string;
          /** Most recent monthly secondary-market estimate, in USD. Falls back to the latest funding round post-money valuation when no marketplace lists the company. */
          latestEstimatedValuation?: number | null;
          /** Amount raised in the most recent funding round, in USD. */
          latestRaise?: number | null;
          /** Post-money valuation of the most recent funding round, in USD. */
          latestFundingValuation?: number | null;
          /**
           * latestFundingDate returned by DeFiLlama.
           * @format date
           */
          latestFundingDate?: string | null;
          /**
           * Date of the most recent secondary mark behind `latestEstimatedValuation`.
           * @format date
           */
          lastValuationDate?: string | null;
          /** Sum of all disclosed funding rounds, in USD. */
          totalRaised?: number | null;
          /** Change in the secondary estimate against the same month a year earlier, in percent. `null` when the company has no secondary marks. */
          valuationChange1YPercentage?: number | null;
          /** Premium of the secondary estimate over the latest round post-money valuation, in percent. `null` when the company has no secondary marks. */
          premiumVsLatestFundingPercentage?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get tradeable markets for a pre-IPO company. Returns where the company can actually be traded right now: perpetual futures venues and tokenised-share issuers. A pre-IPO perp settles in stablecoins against the venue's reference price, so no shares change hands and the same company can trade at a slightly different price on every venue. This is a live snapshot refreshed hourly and no history is kept. Every company in the registry gets a response: one with no listings returns empty `perps` and `tokenIssuers` arrays rather than a miss. Requires an API plan key. */
    "defillama.get_pre_ipo_v1_integrations": {
      input: {
        /** Company id from `GET /pre-ipo/v1/companies-list` (case-insensitive). The display `name` is not accepted. */
        company: string;
      };
      output: {
        /**
         * When this snapshot was generated.
         * @format date-time
         */
        updatedAt?: string;
        /** data returned by DeFiLlama. */
        data?: {
          /** Perpetual futures markets tracking the company. */
          perps?: Array<{
            /** exchangeName returned by DeFiLlama. */
            exchangeName?: string;
            /** DefiLlama slug for the venue. */
            platformSlug?: string;
            /** DefiLlama market identifier, `{venue}:{pair}`. */
            defillamaContract?: string;
            /** Whether the venue is a centralised or an on-chain exchange. */
            exchangeType?: "CEX" | "DEX";
            /** Open interest, in USD. */
            openInterest?: number | null;
            /** 24 hour volume, in USD. */
            volume?: number | null;
            /** Last traded price of the contract, in USD. */
            price?: number;
            /** Annualised funding rate, in percent, so `5.2` is 5.2% a year. Negative means shorts pay longs. */
            annualizedFundingRate?: number | null;
            /** tradeUrl returned by DeFiLlama. */
            tradeUrl?: string;
            /** Company valuation implied by this venue's price, in USD. */
            estimatedValuation?: number | null;
            [key: string]: unknown;
          }>;
          /** Tokenised exposure to the company's private shares. */
          tokenIssuers?: Array<{
            /** The token issuer, not the private company. */
            issuerName?: string;
            /** DefiLlama RWA platform slug for the issuer, when it has one. */
            slug?: string | null;
            /** What the token is a claim on, ordered from the most direct claim on the underlying shares to the least. `Direct shares` and `Trust-held SPV` are asset-backed and bankruptcy-remote, `SPV interest` is asset-backed but held one layer removed through a vehicle, and `Unsecured note` and `Synthetic` are not asset-backed at all. */
            backing?: "Direct shares" | "Trust-held SPV" | "SPV interest" | "Unsecured note" | "Synthetic";
            /** productUrl returned by DeFiLlama. */
            productUrl?: string;
            /** Token price, in USD. */
            price?: number;
            /** Market cap of the token, in USD. Only populated for issuers that publish one. */
            marketCap?: number | null;
            /** Company valuation implied by the token price, in USD. */
            estimatedValuation?: number | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get funding rounds for a pre-IPO company. Returns disclosed funding rounds, oldest first. The same round is usually reported by several sources with different dates and amounts, so rounds are reconciled before being served: each cluster collapses to one canonical raise taking the earliest date, the median amount, the median valuation, and the highest-ranked series label. Requires an API plan key. */
    "defillama.get_pre_ipo_v1_raises": {
      input: {
        /** Company id from `GET /pre-ipo/v1/companies-list` (case-insensitive). The display `name` is not accepted. */
        company: string;
      };
      output: {
        /**
         * When this snapshot was generated.
         * @format date-time
         */
        updatedAt?: string;
        /** data returned by DeFiLlama. */
        data?: Array<{
          /**
           * Date the round was announced.
           * @format date
           */
          date?: string;
          /** Amount raised in the round, in USD. */
          amountRaised?: number;
          /** Post-money valuation of the round, in USD. `null` when no source disclosed one. */
          valuation?: number | null;
          /** Round label, for example `Series C` or `Series H-4`. */
          series?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get profile and latest valuation for a pre-IPO company. Returns the company profile together with its latest estimated valuation and its most recent funding round. Requires an API plan key. */
    "defillama.get_pre_ipo_v1_summary": {
      input: {
        /** Company id from `GET /pre-ipo/v1/companies-list` (case-insensitive). The display `name` is not accepted. */
        company: string;
      };
      output: {
        /**
         * When this snapshot was generated.
         * @format date-time
         */
        updatedAt?: string;
        /** data returned by DeFiLlama. */
        data?: {
          /** id returned by DeFiLlama. */
          id?: string;
          /** name returned by DeFiLlama. */
          name?: string;
          /** description returned by DeFiLlama. */
          description?: string;
          /** Short-form company summary. Currently identical to `description`. */
          summary?: string;
          /** website returned by DeFiLlama. */
          website?: string;
          /** sector returned by DeFiLlama. */
          sector?: string;
          /** Most recent monthly secondary-market estimate, in USD. Falls back to the latest funding round post-money valuation when no marketplace lists the company. */
          latestEstimatedValuation?: number | null;
          /**
           * lastValuationDate returned by DeFiLlama.
           * @format date
           */
          lastValuationDate?: string | null;
          /** Most recent funding round, or `null` when no round is on record. */
          latestRaise?: {
            /**
             * Date the round was announced.
             * @format date
             */
            date?: string;
            /** Amount raised in the round, in USD. */
            amountRaised?: number;
            /** Post-money valuation of the round, in USD. `null` when no source disclosed one. */
            valuation?: number | null;
            /** Round label, for example `Series C` or `Series H-4`. */
            series?: string;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get valuation history for a pre-IPO company. Returns one aggregated valuation point per calendar month, oldest first. Within a month every source's marks are averaged and then the source averages are averaged, so a source that reports daily does not outvote one that reports monthly. Points are rounded to the nearest 100 and dated `YYYY-MM-01`; months with no data are skipped, and the current month is month-to-date. Requires an API plan key. */
    "defillama.get_pre_ipo_v1_valuations": {
      input: {
        /** Company id from `GET /pre-ipo/v1/companies-list` (case-insensitive). The display `name` is not accepted. */
        company: string;
      };
      output: {
        /**
         * When this snapshot was generated.
         * @format date-time
         */
        updatedAt?: string;
        /** data returned by DeFiLlama. */
        data?: Array<{
          /**
           * First day of the month the point covers.
           * @format date
           */
          date?: string;
          /** Aggregated valuation estimate for that month, in USD. */
          estimatedValuation?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get historical TVL of a protocol and breakdowns by token and chain.  Available with no_auth or api_key. */
    "defillama.get_protocol_by_protocol": {
      input: {
        /**
         * protocol slug
         * @minLength 1
         */
        protocol: string;
      };
      output: {
        /** id returned by DeFiLlama. */
        id?: string;
        /** name returned by DeFiLlama. */
        name?: string;
        /** symbol returned by DeFiLlama. */
        symbol?: string;
        /** category returned by DeFiLlama. */
        category?: string;
        /** chains returned by DeFiLlama. */
        chains?: Array<string>;
        /** currentChainTvls returned by DeFiLlama. */
        currentChainTvls?: Record<string, number>;
        /** chainTvls returned by DeFiLlama. */
        chainTvls?: Record<string, {
            /** tvl returned by DeFiLlama. */
            tvl?: Array<{
              /** date returned by DeFiLlama. */
              date?: number;
              /** totalLiquidityUSD returned by DeFiLlama. */
              totalLiquidityUSD?: number;
              [key: string]: unknown;
            }>;
            /** tokens returned by DeFiLlama. */
            tokens?: Array<{
              /** date returned by DeFiLlama. */
              date?: number;
              /** tokens returned by DeFiLlama. */
              tokens?: Record<string, number>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
        [key: string]: unknown;
      };
    };
    /** List all protocols on defillama along with their tvl.  Available with no_auth or api_key. */
    "defillama.get_protocols": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** id returned by DeFiLlama. */
          id?: string;
          /** name returned by DeFiLlama. */
          name?: string;
          /** symbol returned by DeFiLlama. */
          symbol?: string;
          /** category returned by DeFiLlama. */
          category?: string;
          /** chains returned by DeFiLlama. */
          chains?: Array<string>;
          /** tvl returned by DeFiLlama. */
          tvl?: number;
          /** chainTvls returned by DeFiLlama. */
          chainTvls?: Record<string, number>;
          /** change_1d returned by DeFiLlama. */
          change_1d?: number;
          /** change_7d returned by DeFiLlama. */
          change_7d?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Overview of all raises on our Raises dashboard.  Requires an API plan key. */
    "defillama.get_raises": {
      input: Record<string, never>;
      output: {
        /** raises returned by DeFiLlama. */
        raises?: Array<{
          /** date returned by DeFiLlama. */
          date?: number;
          /** name returned by DeFiLlama. */
          name?: string;
          /** round returned by DeFiLlama. */
          round?: string;
          /** amount returned by DeFiLlama. */
          amount?: number;
          /** chains returned by DeFiLlama. */
          chains?: Array<string>;
          /** sector returned by DeFiLlama. */
          sector?: string;
          /** category returned by DeFiLlama. */
          category?: string;
          /** categoryGroup returned by DeFiLlama. */
          categoryGroup?: string;
          /** source returned by DeFiLlama. */
          source?: string;
          /** leadInvestors returned by DeFiLlama. */
          leadInvestors?: Array<string>;
          /** otherInvestors returned by DeFiLlama. */
          otherInvestors?: Array<string>;
          /** valuation returned by DeFiLlama. */
          valuation?: number | null;
          /** defillamaId returned by DeFiLlama. */
          defillamaId?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List current RWA assets on a chain. Returns current RWA assets that have onchain market cap, active market cap, or DeFi active TVL on the requested chain. Requires an API plan key. */
    "defillama.get_rwa_chain_by_chain": {
      input: {
        /**
         * Chain display name, case-insensitive.
         * @minLength 1
         */
        chain: string;
      };
      output: {
        /** data returned by DeFiLlama. */
        data?: Array<{
          /** id returned by DeFiLlama. */
          id?: string;
          /** canonicalMarketId returned by DeFiLlama. */
          canonicalMarketId?: string | null;
          /** ticker returned by DeFiLlama. */
          ticker?: string;
          /** assetName returned by DeFiLlama. */
          assetName?: string | null;
          /** assetGroup returned by DeFiLlama. */
          assetGroup?: string | null;
          /** primaryChain returned by DeFiLlama. */
          primaryChain?: string | null;
          /** chain returned by DeFiLlama. */
          chain?: Array<string> | null;
          /** category returned by DeFiLlama. */
          category?: Array<string> | null;
          /** assetClass returned by DeFiLlama. */
          assetClass?: Array<string> | null;
          /** type returned by DeFiLlama. */
          type?: string | null;
          /** rwaClassification returned by DeFiLlama. */
          rwaClassification?: string | null;
          /** accessModel returned by DeFiLlama. */
          accessModel?: string | null;
          /** issuer returned by DeFiLlama. */
          issuer?: string | null;
          /** parentPlatform returned by DeFiLlama. */
          parentPlatform?: string | null;
          /** stablecoin returned by DeFiLlama. */
          stablecoin?: boolean | null;
          /** governance returned by DeFiLlama. */
          governance?: boolean | null;
          /** Current onchain market cap by chain. */
          onChainMcap?: Record<string, number>;
          /** Current active market cap by chain. */
          activeMcap?: Record<string, number>;
          /** Current DeFi active TVL by chain and tracked protocol. */
          defiActiveTvl?: Record<string, Record<string, number>>;
          /** price returned by DeFiLlama. */
          price?: number | null;
          /** activeMcapData returned by DeFiLlama. */
          activeMcapData?: boolean;
          /** coingeckoId returned by DeFiLlama. */
          coingeckoId?: string | null;
          /** logo returned by DeFiLlama. */
          logo?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get historical RWA metric breakdown by chain. Returns time series rows with one column per chain for the selected RWA metric. Requires an API plan key. */
    "defillama.get_rwa_chart_chain_breakdown": {
      input: {
        /** Metric to break down by chain. Defaults to onChainMcap. */
        key?: "onChainMcap" | "activeMcap" | "defiActiveTvl";
        /** Include stablecoin-token assets in the chart totals. */
        includeStablecoin?: boolean;
        /** Include governance-token assets in the chart totals. */
        includeGovernance?: boolean;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** timestamp returned by DeFiLlama. */
          timestamp: number;
          [key: string]: number;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get historical RWA chart data for a chain. Returns historical onchain market cap, active market cap, and DeFi active TVL totals for a chain. Requires an API plan key. */
    "defillama.get_rwa_chart_chain_by_chain": {
      input: {
        /**
         * Chain display name. The API normalizes it to the internal RWA slug.
         * @minLength 1
         */
        chain: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** timestamp returned by DeFiLlama. */
          timestamp?: number;
          /** onChainMcap returned by DeFiLlama. */
          onChainMcap?: number | null;
          /** activeMcap returned by DeFiLlama. */
          activeMcap?: number | null;
          /** defiActiveTvl returned by DeFiLlama. */
          defiActiveTvl?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List all current RWA assets. Returns current Real World Asset rows with per-chain onchain market cap, active market cap, and DeFi active TVL maps. Requires an API plan key. */
    "defillama.get_rwa_current": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** id returned by DeFiLlama. */
          id?: string;
          /** canonicalMarketId returned by DeFiLlama. */
          canonicalMarketId?: string | null;
          /** ticker returned by DeFiLlama. */
          ticker?: string;
          /** assetName returned by DeFiLlama. */
          assetName?: string | null;
          /** assetGroup returned by DeFiLlama. */
          assetGroup?: string | null;
          /** primaryChain returned by DeFiLlama. */
          primaryChain?: string | null;
          /** chain returned by DeFiLlama. */
          chain?: Array<string> | null;
          /** category returned by DeFiLlama. */
          category?: Array<string> | null;
          /** assetClass returned by DeFiLlama. */
          assetClass?: Array<string> | null;
          /** type returned by DeFiLlama. */
          type?: string | null;
          /** rwaClassification returned by DeFiLlama. */
          rwaClassification?: string | null;
          /** accessModel returned by DeFiLlama. */
          accessModel?: string | null;
          /** issuer returned by DeFiLlama. */
          issuer?: string | null;
          /** parentPlatform returned by DeFiLlama. */
          parentPlatform?: string | null;
          /** stablecoin returned by DeFiLlama. */
          stablecoin?: boolean | null;
          /** governance returned by DeFiLlama. */
          governance?: boolean | null;
          /** Current onchain market cap by chain. */
          onChainMcap?: Record<string, number>;
          /** Current active market cap by chain. */
          activeMcap?: Record<string, number>;
          /** Current DeFi active TVL by chain and tracked protocol. */
          defiActiveTvl?: Record<string, Record<string, number>>;
          /** price returned by DeFiLlama. */
          price?: number | null;
          /** activeMcapData returned by DeFiLlama. */
          activeMcapData?: boolean;
          /** coingeckoId returned by DeFiLlama. */
          coingeckoId?: string | null;
          /** logo returned by DeFiLlama. */
          logo?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List RWA ids and filter values. Returns lightweight RWA lists used for discovery, search, and filters. Requires an API plan key. */
    "defillama.get_rwa_list": {
      input: Record<string, never>;
      output: {
        /** canonicalMarketIds returned by DeFiLlama. */
        canonicalMarketIds?: Array<string>;
        /** platforms returned by DeFiLlama. */
        platforms?: Array<string>;
        /** chains returned by DeFiLlama. */
        chains?: Array<string>;
        /** categories returned by DeFiLlama. */
        categories?: Array<string>;
        /** assetGroups returned by DeFiLlama. */
        assetGroups?: Array<string>;
        /** idMap returned by DeFiLlama. */
        idMap?: Record<string, string>;
        [key: string]: unknown;
      };
    };
    /** Get aggregate RWA stats by chain, category, platform, and asset group. Returns RWA aggregates. For the default per-chain table, read byChain[chain].base: assetIssuers.length, assetCount, activeMcap, onChainMcap, and defiActiveTvl. Add stablecoinsOnly, governanceOnly, and stablecoinsAndGovernance when those buckets should be included. Requires an API plan key. */
    "defillama.get_rwa_stats": {
      input: Record<string, never>;
      output: {
        /** totalOnChainMcap returned by DeFiLlama. */
        totalOnChainMcap?: number;
        /** totalActiveMcap returned by DeFiLlama. */
        totalActiveMcap?: number;
        /** totalDefiActiveTvl returned by DeFiLlama. */
        totalDefiActiveTvl?: number;
        /** assetCount returned by DeFiLlama. */
        assetCount?: number;
        /** assetIssuers returned by DeFiLlama. */
        assetIssuers?: number;
        /** byChain returned by DeFiLlama. */
        byChain?: Record<string, {
            /** Default RWA bucket. The chain table uses this bucket unless stablecoins or governance assets are explicitly included. */
            base?: {
              /** onChainMcap returned by DeFiLlama. */
              onChainMcap?: number;
              /** activeMcap returned by DeFiLlama. */
              activeMcap?: number;
              /** defiActiveTvl returned by DeFiLlama. */
              defiActiveTvl?: number;
              /** assetCount returned by DeFiLlama. */
              assetCount?: number;
              /** assetIssuers returned by DeFiLlama. */
              assetIssuers?: Array<string>;
              [key: string]: unknown;
            };
            /** stablecoinsOnly returned by DeFiLlama. */
            stablecoinsOnly?: {
              /** onChainMcap returned by DeFiLlama. */
              onChainMcap?: number;
              /** activeMcap returned by DeFiLlama. */
              activeMcap?: number;
              /** defiActiveTvl returned by DeFiLlama. */
              defiActiveTvl?: number;
              /** assetCount returned by DeFiLlama. */
              assetCount?: number;
              /** assetIssuers returned by DeFiLlama. */
              assetIssuers?: Array<string>;
              [key: string]: unknown;
            };
            /** governanceOnly returned by DeFiLlama. */
            governanceOnly?: {
              /** onChainMcap returned by DeFiLlama. */
              onChainMcap?: number;
              /** activeMcap returned by DeFiLlama. */
              activeMcap?: number;
              /** defiActiveTvl returned by DeFiLlama. */
              defiActiveTvl?: number;
              /** assetCount returned by DeFiLlama. */
              assetCount?: number;
              /** assetIssuers returned by DeFiLlama. */
              assetIssuers?: Array<string>;
              [key: string]: unknown;
            };
            /** stablecoinsAndGovernance returned by DeFiLlama. */
            stablecoinsAndGovernance?: {
              /** onChainMcap returned by DeFiLlama. */
              onChainMcap?: number;
              /** activeMcap returned by DeFiLlama. */
              activeMcap?: number;
              /** defiActiveTvl returned by DeFiLlama. */
              defiActiveTvl?: number;
              /** assetCount returned by DeFiLlama. */
              assetCount?: number;
              /** assetIssuers returned by DeFiLlama. */
              assetIssuers?: Array<string>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
        /** byCategory returned by DeFiLlama. */
        byCategory?: Record<string, {
            /** Default RWA bucket. The chain table uses this bucket unless stablecoins or governance assets are explicitly included. */
            base?: {
              /** onChainMcap returned by DeFiLlama. */
              onChainMcap?: number;
              /** activeMcap returned by DeFiLlama. */
              activeMcap?: number;
              /** defiActiveTvl returned by DeFiLlama. */
              defiActiveTvl?: number;
              /** assetCount returned by DeFiLlama. */
              assetCount?: number;
              /** assetIssuers returned by DeFiLlama. */
              assetIssuers?: Array<string>;
              [key: string]: unknown;
            };
            /** stablecoinsOnly returned by DeFiLlama. */
            stablecoinsOnly?: {
              /** onChainMcap returned by DeFiLlama. */
              onChainMcap?: number;
              /** activeMcap returned by DeFiLlama. */
              activeMcap?: number;
              /** defiActiveTvl returned by DeFiLlama. */
              defiActiveTvl?: number;
              /** assetCount returned by DeFiLlama. */
              assetCount?: number;
              /** assetIssuers returned by DeFiLlama. */
              assetIssuers?: Array<string>;
              [key: string]: unknown;
            };
            /** governanceOnly returned by DeFiLlama. */
            governanceOnly?: {
              /** onChainMcap returned by DeFiLlama. */
              onChainMcap?: number;
              /** activeMcap returned by DeFiLlama. */
              activeMcap?: number;
              /** defiActiveTvl returned by DeFiLlama. */
              defiActiveTvl?: number;
              /** assetCount returned by DeFiLlama. */
              assetCount?: number;
              /** assetIssuers returned by DeFiLlama. */
              assetIssuers?: Array<string>;
              [key: string]: unknown;
            };
            /** stablecoinsAndGovernance returned by DeFiLlama. */
            stablecoinsAndGovernance?: {
              /** onChainMcap returned by DeFiLlama. */
              onChainMcap?: number;
              /** activeMcap returned by DeFiLlama. */
              activeMcap?: number;
              /** defiActiveTvl returned by DeFiLlama. */
              defiActiveTvl?: number;
              /** assetCount returned by DeFiLlama. */
              assetCount?: number;
              /** assetIssuers returned by DeFiLlama. */
              assetIssuers?: Array<string>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
        /** byPlatform returned by DeFiLlama. */
        byPlatform?: Record<string, {
            /** Default RWA bucket. The chain table uses this bucket unless stablecoins or governance assets are explicitly included. */
            base?: {
              /** onChainMcap returned by DeFiLlama. */
              onChainMcap?: number;
              /** activeMcap returned by DeFiLlama. */
              activeMcap?: number;
              /** defiActiveTvl returned by DeFiLlama. */
              defiActiveTvl?: number;
              /** assetCount returned by DeFiLlama. */
              assetCount?: number;
              /** assetIssuers returned by DeFiLlama. */
              assetIssuers?: Array<string>;
              [key: string]: unknown;
            };
            /** stablecoinsOnly returned by DeFiLlama. */
            stablecoinsOnly?: {
              /** onChainMcap returned by DeFiLlama. */
              onChainMcap?: number;
              /** activeMcap returned by DeFiLlama. */
              activeMcap?: number;
              /** defiActiveTvl returned by DeFiLlama. */
              defiActiveTvl?: number;
              /** assetCount returned by DeFiLlama. */
              assetCount?: number;
              /** assetIssuers returned by DeFiLlama. */
              assetIssuers?: Array<string>;
              [key: string]: unknown;
            };
            /** governanceOnly returned by DeFiLlama. */
            governanceOnly?: {
              /** onChainMcap returned by DeFiLlama. */
              onChainMcap?: number;
              /** activeMcap returned by DeFiLlama. */
              activeMcap?: number;
              /** defiActiveTvl returned by DeFiLlama. */
              defiActiveTvl?: number;
              /** assetCount returned by DeFiLlama. */
              assetCount?: number;
              /** assetIssuers returned by DeFiLlama. */
              assetIssuers?: Array<string>;
              [key: string]: unknown;
            };
            /** stablecoinsAndGovernance returned by DeFiLlama. */
            stablecoinsAndGovernance?: {
              /** onChainMcap returned by DeFiLlama. */
              onChainMcap?: number;
              /** activeMcap returned by DeFiLlama. */
              activeMcap?: number;
              /** defiActiveTvl returned by DeFiLlama. */
              defiActiveTvl?: number;
              /** assetCount returned by DeFiLlama. */
              assetCount?: number;
              /** assetIssuers returned by DeFiLlama. */
              assetIssuers?: Array<string>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
        /** byAssetGroup returned by DeFiLlama. */
        byAssetGroup?: Record<string, {
            /** Default RWA bucket. The chain table uses this bucket unless stablecoins or governance assets are explicitly included. */
            base?: {
              /** onChainMcap returned by DeFiLlama. */
              onChainMcap?: number;
              /** activeMcap returned by DeFiLlama. */
              activeMcap?: number;
              /** defiActiveTvl returned by DeFiLlama. */
              defiActiveTvl?: number;
              /** assetCount returned by DeFiLlama. */
              assetCount?: number;
              /** assetIssuers returned by DeFiLlama. */
              assetIssuers?: Array<string>;
              [key: string]: unknown;
            };
            /** stablecoinsOnly returned by DeFiLlama. */
            stablecoinsOnly?: {
              /** onChainMcap returned by DeFiLlama. */
              onChainMcap?: number;
              /** activeMcap returned by DeFiLlama. */
              activeMcap?: number;
              /** defiActiveTvl returned by DeFiLlama. */
              defiActiveTvl?: number;
              /** assetCount returned by DeFiLlama. */
              assetCount?: number;
              /** assetIssuers returned by DeFiLlama. */
              assetIssuers?: Array<string>;
              [key: string]: unknown;
            };
            /** governanceOnly returned by DeFiLlama. */
            governanceOnly?: {
              /** onChainMcap returned by DeFiLlama. */
              onChainMcap?: number;
              /** activeMcap returned by DeFiLlama. */
              activeMcap?: number;
              /** defiActiveTvl returned by DeFiLlama. */
              defiActiveTvl?: number;
              /** assetCount returned by DeFiLlama. */
              assetCount?: number;
              /** assetIssuers returned by DeFiLlama. */
              assetIssuers?: Array<string>;
              [key: string]: unknown;
            };
            /** stablecoinsAndGovernance returned by DeFiLlama. */
            stablecoinsAndGovernance?: {
              /** onChainMcap returned by DeFiLlama. */
              onChainMcap?: number;
              /** activeMcap returned by DeFiLlama. */
              activeMcap?: number;
              /** defiActiveTvl returned by DeFiLlama. */
              defiActiveTvl?: number;
              /** assetCount returned by DeFiLlama. */
              assetCount?: number;
              /** assetIssuers returned by DeFiLlama. */
              assetIssuers?: Array<string>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
        [key: string]: unknown;
      };
    };
    /** Get historical mcap and historical chain distribution of a stablecoin.  Available with no_auth or api_key. */
    "defillama.get_stablecoins_stablecoin_by_asset": {
      input: {
        /** stablecoin ID, you can get these from /stablecoins */
        asset: number;
      };
      output: {
        /** id returned by DeFiLlama. */
        id?: string;
        /** name returned by DeFiLlama. */
        name?: string;
        /** symbol returned by DeFiLlama. */
        symbol?: string;
        /** totalCirculating returned by DeFiLlama. */
        totalCirculating?: Array<{
          /** date returned by DeFiLlama. */
          date?: number;
          /** totalCirculating returned by DeFiLlama. */
          totalCirculating?: number;
          [key: string]: unknown;
        }>;
        /** chainCirculating returned by DeFiLlama. */
        chainCirculating?: Record<string, Array<{
            /** date returned by DeFiLlama. */
            date?: number;
            /** circulating returned by DeFiLlama. */
            circulating?: number;
            [key: string]: unknown;
          }>>;
        [key: string]: unknown;
      };
    };
    /** Get current mcap sum of all stablecoins on each chain.  Available with no_auth or api_key. */
    "defillama.get_stablecoins_stablecoinchains": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** name returned by DeFiLlama. */
          name?: string;
          /** totalCirculating returned by DeFiLlama. */
          totalCirculating?: {
            /** peggedUSD returned by DeFiLlama. */
            peggedUSD?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get historical mcap sum of all stablecoins.  Available with no_auth or api_key. */
    "defillama.get_stablecoins_stablecoincharts_all": {
      input: {
        /** stablecoin ID, you can get these from /stablecoins */
        stablecoin?: number;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** date returned by DeFiLlama. */
          date?: number;
          /** totalCirculating returned by DeFiLlama. */
          totalCirculating?: {
            /** peggedUSD returned by DeFiLlama. */
            peggedUSD?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get historical mcap sum of all stablecoins in a chain.  Available with no_auth or api_key. */
    "defillama.get_stablecoins_stablecoincharts_by_chain": {
      input: {
        /**
         * chain slug, you can get these from /chains or the chains property on /protocols
         * @minLength 1
         */
        chain: string;
        /** stablecoin ID, you can get these from /stablecoins */
        stablecoin?: number;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** date returned by DeFiLlama. */
          date?: number;
          /** totalCirculating returned by DeFiLlama. */
          totalCirculating?: {
            /** peggedUSD returned by DeFiLlama. */
            peggedUSD?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get stablecoin dominance per chain along with the info about the larges coin in a chain.  Requires an API plan key. */
    "defillama.get_stablecoins_stablecoindominance_by_chain": {
      input: {
        /**
         * chain slug, you can get these from /chains or the chains property on /protocols
         * @minLength 1
         */
        chain: string;
        /** stablecoin ID, you can get these from /stablecoins */
        stablecoin?: number;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** date returned by DeFiLlama. */
          date?: string;
          /** totalCirculatingUSD returned by DeFiLlama. */
          totalCirculatingUSD?: {
            /** peggedUSD returned by DeFiLlama. */
            peggedUSD?: number;
            /** peggedVAR returned by DeFiLlama. */
            peggedVAR?: number;
            /** peggedEUR returned by DeFiLlama. */
            peggedEUR?: number;
            [key: string]: unknown;
          };
          /** greatestMcap returned by DeFiLlama. */
          greatestMcap?: {
            /** gecko_id returned by DeFiLlama. */
            gecko_id?: string;
            /** symbol returned by DeFiLlama. */
            symbol?: string;
            /** mcap returned by DeFiLlama. */
            mcap?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get historical prices of all stablecoins.  Available with no_auth or api_key. */
    "defillama.get_stablecoins_stablecoinprices": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** date returned by DeFiLlama. */
          date?: number;
          /** prices returned by DeFiLlama. */
          prices?: Record<string, number>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List all stablecoins along with their circulating amounts.  Available with no_auth or api_key. */
    "defillama.get_stablecoins_stablecoins": {
      input: {
        /** set whether to include current stablecoin prices */
        includePrices?: boolean;
      };
      output: {
        /** peggedAssets returned by DeFiLlama. */
        peggedAssets?: Array<{
          /** id returned by DeFiLlama. */
          id?: string;
          /** name returned by DeFiLlama. */
          name?: string;
          /** symbol returned by DeFiLlama. */
          symbol?: string;
          /** pegType returned by DeFiLlama. */
          pegType?: string;
          /** pegMechanism returned by DeFiLlama. */
          pegMechanism?: string;
          /** circulating returned by DeFiLlama. */
          circulating?: {
            /** peggedUSD returned by DeFiLlama. */
            peggedUSD?: number;
            [key: string]: unknown;
          };
          /** chains returned by DeFiLlama. */
          chains?: Array<string>;
          /** chainCirculating returned by DeFiLlama. */
          chainCirculating?: Record<string, {
              /** current returned by DeFiLlama. */
              current?: {
                /** peggedUSD returned by DeFiLlama. */
                peggedUSD?: number;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            }>;
          /** price returned by DeFiLlama. */
          price?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Volume Details about a specific perp protocol.  Requires an API plan key. */
    "defillama.get_summary_derivatives_by_protocol": {
      input: {
        /**
         * protocol slug
         * @minLength 1
         */
        protocol: string;
        /**
         * true to exclude aggregated chart from response
         * @default false
         */
        excludeTotalDataChart?: boolean;
        /**
         * true to exclude broken down chart from response
         * @default false
         */
        excludeTotalDataChartBreakdown?: boolean;
      };
      output: {
        /** Protocol ID */
        id?: string;
        /** Protocol name */
        name?: string;
        /** Protocol URL */
        url?: string;
        /** Referral URL */
        referralUrl?: string;
        /** Protocol description */
        description?: string;
        /** Protocol logo URL */
        logo?: string;
        /** CoinGecko ID */
        gecko_id?: string;
        /** CoinMarketCap ID */
        cmcId?: string;
        /** Supported chains */
        chains?: Array<string>;
        /** Twitter handle */
        twitter?: string;
        /** GitHub repositories */
        github?: Array<string>;
        /** Token symbol */
        symbol?: string;
        /** Protocol address */
        address?: string;
        /** Child protocols */
        childProtocols?: Array<Record<string, unknown>>;
        /** Linked protocols */
        linkedProtocols?: Array<string>;
        /** DefiLlama protocol ID */
        defillamaId?: string;
        /** Whether protocol is disabled */
        disabled?: boolean | null;
        /** Display name */
        displayName?: string;
        /** Module name */
        module?: string | null;
        /** Protocol category */
        category?: string | null;
        /** Methodology URL */
        methodologyURL?: string | null;
        /** Methodology details */
        methodology?: Record<string, unknown> | null;
        /** Forked from protocol */
        forkedFrom?: string | null;
        /** Audit information */
        audits?: Array<unknown> | null;
        /** Audit links */
        audit_links?: Array<unknown> | null;
        /** Version key */
        versionKey?: string | null;
        /** Governance ID */
        governanceID?: string | null;
        /** Treasury address */
        treasury?: string | null;
        /** Parent protocol */
        parentProtocol?: string | null;
        /** Previous names */
        previousNames?: Array<unknown> | null;
        /** Latest fetch status */
        latestFetchIsOk?: boolean;
        /** Protocol slug */
        slug?: string;
        /** Protocol type */
        protocolType?: string;
        /** 24 hour volume */
        total24h?: number;
        /** 48h to 24h volume */
        total48hto24h?: number;
        /** 7 day volume */
        total7d?: number;
        /** All time volume */
        totalAllTime?: number;
        /** Total data chart with timestamps and volumes */
        totalDataChart?: Array<Array<number>>;
        /** Total data chart breakdown by chain and protocol */
        totalDataChartBreakdown?: Array<Array<number | Record<string, unknown>>>;
        /** 1 day change percentage */
        change_1d?: number;
        [key: string]: unknown;
      };
    };
    /** Get summary of dex volume with historical data.  Available with no_auth or api_key. */
    "defillama.get_summary_dexs_by_protocol": {
      input: {
        /**
         * protocol slug
         * @minLength 1
         */
        protocol: string;
        /**
         * true to exclude aggregated chart from response
         * @default false
         */
        excludeTotalDataChart?: boolean;
        /**
         * true to exclude broken down chart from response
         * @default false
         */
        excludeTotalDataChartBreakdown?: boolean;
      };
      output: {
        /** name returned by DeFiLlama. */
        name?: string;
        /** total24h returned by DeFiLlama. */
        total24h?: number;
        /** totalAllTime returned by DeFiLlama. */
        totalAllTime?: number;
        /** totalDataChart returned by DeFiLlama. */
        totalDataChart?: Array<Array<unknown>>;
        /** totalDataChartBreakdown returned by DeFiLlama. */
        totalDataChartBreakdown?: Array<Array<unknown>>;
        /** chains returned by DeFiLlama. */
        chains?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get summary of protocol fees and revenue with historical data.  Available with no_auth or api_key. */
    "defillama.get_summary_fees_by_protocol": {
      input: {
        /**
         * protocol slug
         * @minLength 1
         */
        protocol: string;
        /** Desired data type, dailyFees by default. */
        dataType?: "dailyFees" | "dailyRevenue" | "dailyHoldersRevenue";
      };
      output: {
        /** Protocol ID */
        id?: string;
        /** Protocol name */
        name?: string;
        /** Protocol URL */
        url?: string;
        /** Referral URL */
        referralUrl?: string;
        /** Protocol description */
        description?: string;
        /** Protocol logo URL */
        logo?: string;
        /** CoinGecko ID */
        gecko_id?: string;
        /** CoinMarketCap ID */
        cmcId?: string;
        /** Supported chains */
        chains?: Array<string>;
        /** Twitter handle */
        twitter?: string;
        /** GitHub repositories */
        github?: Array<string>;
        /** Token symbol */
        symbol?: string;
        /** Protocol address */
        address?: string;
        /** Child protocols */
        childProtocols?: Array<Record<string, unknown>>;
        /** Linked protocols */
        linkedProtocols?: Array<string>;
        /** DefiLlama protocol ID */
        defillamaId?: string;
        /** Whether protocol is disabled */
        disabled?: boolean | null;
        /** Display name */
        displayName?: string;
        /** Module name */
        module?: string | null;
        /** Protocol category */
        category?: string | null;
        /** Methodology URL */
        methodologyURL?: string | null;
        /** Methodology details */
        methodology?: Record<string, unknown> | null;
        /** Forked from protocol */
        forkedFrom?: string | null;
        /** Audit information */
        audits?: Array<unknown> | null;
        /** Audit links */
        audit_links?: Array<unknown> | null;
        /** Version key */
        versionKey?: string | null;
        /** Governance ID */
        governanceID?: string | null;
        /** Treasury address */
        treasury?: string | null;
        /** Parent protocol */
        parentProtocol?: string | null;
        /** Previous names */
        previousNames?: Array<unknown> | null;
        /** Latest fetch status */
        latestFetchIsOk?: boolean;
        /** Protocol slug */
        slug?: string;
        /** Protocol type */
        protocolType?: string;
        /** 24 hour fees */
        total24h?: number;
        /** 48h to 24h fees */
        total48hto24h?: number;
        /** 7 day fees */
        total7d?: number;
        /** All time fees */
        totalAllTime?: number;
        /** 1 day change percentage */
        change_1d?: number;
        /** Total data chart with timestamps and fees */
        totalDataChart?: Array<Array<number>>;
        /** Total data chart breakdown by chain and protocol */
        totalDataChartBreakdown?: Array<Array<number | Record<string, unknown>>>;
        [key: string]: unknown;
      };
    };
    /** Get summary of options dex volume with historical data.  Available with no_auth or api_key. */
    "defillama.get_summary_options_by_protocol": {
      input: {
        /**
         * protocol slug
         * @minLength 1
         */
        protocol: string;
        /** Desired data type, dailyNotionalVolume by default. */
        dataType?: "dailyPremiumVolume" | "dailyNotionalVolume";
      };
      output: {
        /** Protocol ID */
        id?: string;
        /** Protocol name */
        name?: string;
        /** Protocol website URL */
        url?: string;
        /** Protocol description */
        description?: string;
        /** Protocol logo URL */
        logo?: string;
        /** CoinGecko ID */
        gecko_id?: string;
        /** CoinMarketCap ID */
        cmcId?: string;
        /** Supported chains */
        chains?: Array<string>;
        /** Twitter handle */
        twitter?: string;
        /** Governance identifiers */
        governanceID?: Array<string>;
        /** GitHub repositories */
        github?: Array<string>;
        /** Treasury information */
        treasury?: string;
        /** Token symbol */
        symbol?: string;
        /** Token contract address */
        address?: string;
        /** Child protocols */
        childProtocols?: Array<Record<string, unknown>>;
        /** Linked protocol names */
        linkedProtocols?: Array<string>;
        /** DefiLlama protocol ID */
        defillamaId?: string;
        /** Disabled status */
        disabled?: Record<string, unknown> | null;
        /** Protocol display name */
        displayName?: string;
        /** Protocol module */
        module?: Record<string, unknown> | null;
        /** Protocol category */
        category?: Record<string, unknown> | null;
        /** Methodology documentation URL */
        methodologyURL?: Record<string, unknown> | null;
        /** Protocol methodology details */
        methodology?: Record<string, unknown> | null;
        /** Forked from protocol */
        forkedFrom?: Record<string, unknown> | null;
        /** Audit information */
        audits?: Record<string, unknown> | null;
        /** Audit links */
        audit_links?: Record<string, unknown> | null;
        /** Version key */
        versionKey?: Record<string, unknown> | null;
        /** Parent protocol */
        parentProtocol?: Record<string, unknown> | null;
        /** Previous protocol names */
        previousNames?: Record<string, unknown> | null;
        /** Whether the latest data fetch was successful */
        latestFetchIsOk?: boolean;
        /** Protocol slug */
        slug?: string;
        /** Protocol type */
        protocolType?: string;
        /** 24-hour volume */
        total24h?: number;
        /** 48-hour to 24-hour volume */
        total48hto24h?: number;
        /** 7-day volume */
        total7d?: number;
        /** All-time volume */
        totalAllTime?: number;
        /** Historical chart data with timestamps and volumes */
        totalDataChart?: Array<Array<number>>;
        /** Historical chart data broken down by chain and protocol */
        totalDataChartBreakdown?: Array<Array<number | Record<string, Record<string, number>>>>;
        /** 1-day change percentage */
        change_1d?: number;
        [key: string]: unknown;
      };
    };
    /** Lists the amount of a certain token within all protocols. Data for the Token Usage page.  Requires an API plan key. */
    "defillama.get_token_protocols_by_symbol": {
      input: {
        /**
         * token slug
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** name returned by DeFiLlama. */
          name?: string;
          /** category returned by DeFiLlama. */
          category?: string;
          /** amountUsd returned by DeFiLlama. */
          amountUsd?: Record<string, number>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List all protocols on our Treasuries dashboard.  Requires an API plan key. */
    "defillama.get_treasuries": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** id returned by DeFiLlama. */
          id?: string;
          /** name returned by DeFiLlama. */
          name?: string;
          /** address returned by DeFiLlama. */
          address?: string | null;
          /** symbol returned by DeFiLlama. */
          symbol?: string;
          /** url returned by DeFiLlama. */
          url?: string;
          /** description returned by DeFiLlama. */
          description?: string;
          /** chain returned by DeFiLlama. */
          chain?: string;
          /** logo returned by DeFiLlama. */
          logo?: string;
          /** audits returned by DeFiLlama. */
          audits?: string;
          /** audit_note returned by DeFiLlama. */
          audit_note?: string | null;
          /** gecko_id returned by DeFiLlama. */
          gecko_id?: string | null;
          /** cmcId returned by DeFiLlama. */
          cmcId?: string | null;
          /** category returned by DeFiLlama. */
          category?: string;
          /** chains returned by DeFiLlama. */
          chains?: Array<string>;
          /** module returned by DeFiLlama. */
          module?: string;
          /** treasury returned by DeFiLlama. */
          treasury?: string;
          /** forkedFromIds returned by DeFiLlama. */
          forkedFromIds?: Array<string>;
          /** twitter returned by DeFiLlama. */
          twitter?: string;
          /** slug returned by DeFiLlama. */
          slug?: string;
          /** tvl returned by DeFiLlama. */
          tvl?: number;
          /** chainTvls returned by DeFiLlama. */
          chainTvls?: Record<string, number>;
          /** change_1h returned by DeFiLlama. */
          change_1h?: number;
          /** change_1d returned by DeFiLlama. */
          change_1d?: number;
          /** change_7d returned by DeFiLlama. */
          change_7d?: number;
          /** tokenBreakdowns returned by DeFiLlama. */
          tokenBreakdowns?: {
            /** ownTokens returned by DeFiLlama. */
            ownTokens?: number;
            /** stablecoins returned by DeFiLlama. */
            stablecoins?: number;
            /** majors returned by DeFiLlama. */
            majors?: number;
            /** others returned by DeFiLlama. */
            others?: number;
            [key: string]: unknown;
          };
          /** mcap returned by DeFiLlama. */
          mcap?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Simplified endpoint to get current TVL of a protocol. Simplified endpoint that only returns a number, the current TVL of a protocol Available with no_auth or api_key. */
    "defillama.get_tvl_by_protocol": {
      input: {
        /**
         * protocol slug
         * @minLength 1
         */
        protocol: string;
      };
      output: {
        /** Total Value Locked in USD */
        data: number;
        [key: string]: unknown;
      };
    };
    /** Get amount of credits left in the api key, these reset on the 1st of each month.  Requires an API plan key. */
    "defillama.get_usage": {
      input: Record<string, never>;
      output: {
        /** Credits remaining in the current month. */
        creditsLeft: number;
        [key: string]: unknown;
      };
    };
    /** Get current TVL of all chains.  Available with no_auth or api_key. */
    "defillama.get_v2_chains": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** CoinGecko ID for the chain's native token */
          gecko_id?: string | null;
          /** Total Value Locked in USD */
          tvl?: number;
          /** Native token symbol */
          tokenSymbol?: string | null;
          /** CoinMarketCap ID */
          cmcId?: string | null;
          /** Chain name */
          name?: string;
          /** Chain ID number */
          chainId?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get historical timeseries chart data. Returns an array of [timestamp, value] pairs representing the total metric value over time. Requires an API plan key. */
    "defillama.get_v2_chart_by_metric": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume" | "active-users";
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         * - **active-users**: dailyActiveUsers (default), dailyTransactionCount, dailyGasUsed
         */
        dataType?: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<Array<number>>;
        [key: string]: unknown;
      };
    };
    /** Get category historical timeseries chart data. Returns an array of [timestamp, value] pairs for the metric filtered by a specific category. Requires an API plan key. */
    "defillama.get_v2_chart_by_metric_category_by_category": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume";
        /**
         * category slug (slugified category name, e.g. 'dexs', 'prediction-market', 'options')
         * @minLength 1
         */
        category: string;
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         */
        dataType?: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<Array<number>>;
        [key: string]: unknown;
      };
    };
    /** Get category timeseries chart data breakdown by chain. Returns an array of [timestamp, {chain: value}] pairs showing the metric for a specific category broken down by chain. Requires an API plan key. */
    "defillama.get_v2_chart_by_metric_category_by_category_chain_breakdown": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume";
        /**
         * category slug (slugified category name, e.g. 'dexs', 'prediction-market', 'options')
         * @minLength 1
         */
        category: string;
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         */
        dataType?: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Get category chain historical timeseries chart data. Returns an array of [timestamp, value] pairs for the metric filtered by both category and chain. Requires an API plan key. */
    "defillama.get_v2_chart_by_metric_category_by_category_chain_by_chain": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume";
        /**
         * category slug (slugified category name, e.g. 'dexs', 'prediction-market', 'options')
         * @minLength 1
         */
        category: string;
        /**
         * chain name
         * @minLength 1
         */
        chain: string;
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         */
        dataType?: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<Array<number>>;
        [key: string]: unknown;
      };
    };
    /** Get category chain timeseries chart data breakdown by protocol. Returns an array of [timestamp, {protocol: value}] pairs showing the metric filtered by both category and chain, broken down by protocol. Requires an API plan key. */
    "defillama.get_v2_chart_by_metric_category_by_category_chain_by_chain_protocol_breakdown": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume";
        /**
         * category slug (slugified category name, e.g. 'dexs', 'prediction-market', 'options')
         * @minLength 1
         */
        category: string;
        /**
         * chain name
         * @minLength 1
         */
        chain: string;
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         */
        dataType?: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Get category timeseries chart data breakdown by protocol. Returns an array of [timestamp, {protocol: value}] pairs showing the metric for a specific category broken down by protocol. Requires an API plan key. */
    "defillama.get_v2_chart_by_metric_category_by_category_protocol_breakdown": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume";
        /**
         * category slug (slugified category name, e.g. 'dexs', 'prediction-market', 'options')
         * @minLength 1
         */
        category: string;
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         */
        dataType?: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Get historical timeseries chart data breakdown by chain. Returns an array of [timestamp, {chain: value}] pairs showing the metric broken down by chain over time. Requires an API plan key. */
    "defillama.get_v2_chart_by_metric_chain_breakdown": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume" | "active-users";
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         * - **active-users**: dailyActiveUsers (default), dailyTransactionCount, dailyGasUsed
         */
        dataType?: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Get chain historical timeseries chart data. Returns an array of [timestamp, value] pairs for the metric filtered by a specific chain. Requires an API plan key. */
    "defillama.get_v2_chart_by_metric_chain_by_chain": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume";
        /**
         * chain name
         * @minLength 1
         */
        chain: string;
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         */
        dataType?: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<Array<number>>;
        [key: string]: unknown;
      };
    };
    /** Get chain timeseries chart data breakdown by protocol. Returns an array of [timestamp, {protocol: value}] pairs showing the metric on a specific chain broken down by protocol. Requires an API plan key. */
    "defillama.get_v2_chart_by_metric_chain_by_chain_protocol_breakdown": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume";
        /**
         * chain name
         * @minLength 1
         */
        chain: string;
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         */
        dataType?: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Get historical timeseries chart data breakdown by protocol. Returns an array of [timestamp, {protocol: value}] pairs showing the metric broken down by protocol over time. Requires an API plan key. */
    "defillama.get_v2_chart_by_metric_protocol_breakdown": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume";
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         */
        dataType?: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Get protocol historical timeseries chart data. Returns an array of [timestamp, value] pairs for the metric of a specific protocol. Requires an API plan key. */
    "defillama.get_v2_chart_by_metric_protocol_by_protocol": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume";
        /**
         * protocol slug (slugified protocol name)
         * @minLength 1
         */
        protocol: string;
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         */
        dataType?: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<Array<number>>;
        [key: string]: unknown;
      };
    };
    /** Get protocol timeseries chart data breakdown by chain. Returns an array of [timestamp, {chain: value}] pairs showing the metric for a specific protocol broken down by chain. Requires an API plan key. */
    "defillama.get_v2_chart_by_metric_protocol_by_protocol_chain_breakdown": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume";
        /**
         * protocol slug (slugified protocol name)
         * @minLength 1
         */
        protocol: string;
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         */
        dataType?: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Get protocol timeseries chart data breakdown by label. Returns an array of [timestamp, {label: value}] pairs showing the metric for a specific protocol broken down by label (e.g. Borrow Interest, Flash Loans). Currently only supported for metric=fees. Requires an API plan key. */
    "defillama.get_v2_chart_by_metric_protocol_by_protocol_label_breakdown": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume";
        /**
         * protocol slug (slugified protocol name)
         * @minLength 1
         */
        protocol: string;
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         */
        dataType?: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Get protocol timeseries chart data breakdown by version. Returns an array of [timestamp, {version: value}] pairs showing the metric for a specific protocol broken down by version (e.g. Aave V2, Aave V3). Requires an API plan key. */
    "defillama.get_v2_chart_by_metric_protocol_by_protocol_version_breakdown": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume";
        /**
         * protocol slug (slugified protocol name)
         * @minLength 1
         */
        protocol: string;
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         */
        dataType?: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Get timeseries chart data breakdown by protocol. Returns an array of objects with a timestamp and TVL values broken down by fork protocol. Requires an API plan key. */
    "defillama.get_v2_chart_fork_protocol_breakdown": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** Unix timestamp */
          timestamp?: number;
          [key: string]: number | undefined;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get timeseries chart data by protocol. Returns an array of [timestamp, value] pairs representing TVL over time for all forks of a specific protocol. Requires an API plan key. */
    "defillama.get_v2_chart_fork_protocol_by_protocol": {
      input: {
        /**
         * protocol slug
         * @minLength 1
         */
        protocol: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<Array<number>>;
        [key: string]: unknown;
      };
    };
    /** Get timeseries chart data for all oracles. Returns an array of [timestamp, value] pairs representing total TVL across all oracles over time. Requires an API plan key. */
    "defillama.get_v2_chart_oracle": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<Array<number>>;
        [key: string]: unknown;
      };
    };
    /** Get timeseries chart data breakdown by chain. Returns an array of objects with a timestamp and TVL values broken down by chain. Requires an API plan key. */
    "defillama.get_v2_chart_oracle_chain_breakdown": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** Unix timestamp */
          timestamp?: number;
          [key: string]: number | undefined;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get timeseries chart data by chain. Returns an array of [timestamp, value] pairs representing oracle TVL over time for a specific chain. Requires an API plan key. */
    "defillama.get_v2_chart_oracle_chain_by_chain": {
      input: {
        /**
         * chain name
         * @minLength 1
         */
        chain: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<Array<number>>;
        [key: string]: unknown;
      };
    };
    /** Get protocol breakdown timeseries chart data by chain. Returns an array of objects with a timestamp and TVL values broken down by oracle/protocol for a specific chain. Requires an API plan key. */
    "defillama.get_v2_chart_oracle_chain_by_chain_protocol_breakdown": {
      input: {
        /**
         * chain name
         * @minLength 1
         */
        chain: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** Unix timestamp */
          timestamp?: number;
          [key: string]: number | undefined;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get timeseries chart data breakdown by protocol. Returns an array of objects with a timestamp and TVL values broken down by oracle/protocol. Requires an API plan key. */
    "defillama.get_v2_chart_oracle_protocol_breakdown": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** Unix timestamp */
          timestamp?: number;
          [key: string]: number | undefined;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get timeseries chart data by protocol/oracle. Returns an array of [timestamp, value] pairs representing TVL over time for a specific oracle/protocol. Requires an API plan key. */
    "defillama.get_v2_chart_oracle_protocol_by_protocol": {
      input: {
        /**
         * oracle/protocol name
         * @minLength 1
         */
        protocol: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<Array<number>>;
        [key: string]: unknown;
      };
    };
    /** Get chain breakdown timeseries chart data by protocol/oracle. Returns an array of objects with a timestamp and TVL values broken down by chain for a specific oracle/protocol. Requires an API plan key. */
    "defillama.get_v2_chart_oracle_protocol_by_protocol_chain_breakdown": {
      input: {
        /**
         * oracle/protocol name
         * @minLength 1
         */
        protocol: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** Unix timestamp */
          timestamp?: number;
          [key: string]: number | undefined;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get historical treasury chart for a protocol. Returns an array of [timestamp, value] pairs representing the protocol's treasury value over time. By default excludes the protocol's own tokens (OwnTokens). Requires an API plan key. */
    "defillama.get_v2_chart_treasury_protocol_by_protocol": {
      input: {
        /**
         * protocol slug
         * @minLength 1
         */
        protocol: string;
        /** Token filter. Omit to exclude OwnTokens (default). Use "OwnTokens" to return only the protocol's own tokens, or "all" for the sum of all tokens including OwnTokens. */
        key?: "OwnTokens" | "all";
      };
      output: {
        /** DeFiLlama response. */
        data: Array<Array<number>>;
        [key: string]: unknown;
      };
    };
    /** Get historical treasury chart for a protocol broken down by chain. Returns an array of [timestamp, { chain: value }] pairs showing treasury value per chain over time. By default excludes the protocol's own tokens. Requires an API plan key. */
    "defillama.get_v2_chart_treasury_protocol_by_protocol_chain_breakdown": {
      input: {
        /**
         * protocol slug
         * @minLength 1
         */
        protocol: string;
        /** Token filter. Omit to exclude OwnTokens (default). Use "OwnTokens" to return only the protocol's own tokens, or "all" for the sum of all tokens including OwnTokens. */
        key?: "OwnTokens" | "all";
      };
      output: {
        /** DeFiLlama response. */
        data: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Get historical treasury chart for a protocol broken down by token. Returns an array of [timestamp, { token: value }] pairs showing treasury value per token over time. By default excludes OwnTokens and values are in USD. Use key and currency params to customize. Requires an API plan key. */
    "defillama.get_v2_chart_treasury_protocol_by_protocol_token_breakdown": {
      input: {
        /**
         * protocol slug
         * @minLength 1
         */
        protocol: string;
        /** Token filter. Omit to exclude OwnTokens (default). Use "OwnTokens" to return only the protocol's own tokens, or "all" for the sum of all tokens including OwnTokens. */
        key?: "OwnTokens" | "all";
        /** Currency denomination: usd, token or raw. */
        currency?: "usd" | "token" | "raw";
      };
      output: {
        /** DeFiLlama response. */
        data: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Get historical TVL chart for a protocol. Returns an array of [timestamp, value] pairs representing the protocol's TVL over time. By default returns the base TVL metric. Use the `key` parameter to select a different metric or aggregate all metrics. Requires an API plan key. */
    "defillama.get_v2_chart_tvl_protocol_by_protocol": {
      input: {
        /**
         * protocol slug
         * @minLength 1
         */
        protocol: string;
        /** Metric to return. Omit for default TVL. Use "all" for the sum of tvl+borrowed+staking+pool2+vesting, or a specific metric like "staking", "borrowed", "vesting", "pool2". */
        key?: "all" | "staking" | "borrowed" | "vesting" | "pool2";
      };
      output: {
        /** DeFiLlama response. */
        data: Array<Array<number>>;
        [key: string]: unknown;
      };
    };
    /** Get historical TVL chart for a protocol broken down by chain. Returns an array of [timestamp, { chain: value }] pairs showing the selected metric per chain over time. Requires an API plan key. */
    "defillama.get_v2_chart_tvl_protocol_by_protocol_chain_breakdown": {
      input: {
        /**
         * protocol slug
         * @minLength 1
         */
        protocol: string;
        /** Metric to return. Omit for default TVL. Use "all" for the sum of tvl+borrowed+staking+pool2+vesting, or a specific metric like "staking", "borrowed", "vesting", "pool2". */
        key?: "all" | "staking" | "borrowed" | "vesting" | "pool2";
      };
      output: {
        /** DeFiLlama response. */
        data: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Get historical TVL chart for a protocol broken down by token. Returns an array of [timestamp, { token: value }] pairs showing TVL per token over time. Values are in USD by default; use the currency selector for other denominations. Requires an API plan key. */
    "defillama.get_v2_chart_tvl_protocol_by_protocol_token_breakdown": {
      input: {
        /**
         * protocol slug
         * @minLength 1
         */
        protocol: string;
        /** Metric to return. Omit for default TVL. Use "all" for the sum of tvl+borrowed+staking+pool2+vesting, or a specific metric like "staking", "borrowed", "vesting", "pool2". */
        key?: "all" | "staking" | "borrowed" | "vesting" | "pool2";
        /** Currency denomination: usd, token or raw. */
        currency?: "usd" | "token" | "raw";
      };
      output: {
        /** DeFiLlama response. */
        data: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Get historical TVL (excludes liquid staking and double counted tvl) of DeFi on all chains.  Available with no_auth or api_key. */
    "defillama.get_v2_historical_chain_tvl": {
      input: Record<string, never>;
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** Unix timestamp */
          date?: number;
          /** Total Value Locked in USD across all chains */
          tvl?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get historical TVL (excludes liquid staking and double counted tvl) of a chain.  Available with no_auth or api_key. */
    "defillama.get_v2_historical_chain_tvl_by_chain": {
      input: {
        /**
         * chain slug, you can get these from /chains or the chains property on /protocols
         * @minLength 1
         */
        chain: string;
      };
      output: {
        /** DeFiLlama response. */
        data: Array<{
          /** Unix timestamp */
          date?: number;
          /** Total Value Locked in USD for this chain */
          tvl?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get dimension data overview. Returns aggregate metrics for the specified dimension including totals and percentage changes across different time periods. Requires an API plan key. */
    "defillama.get_v2_metrics_by_metric": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume" | "active-users";
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         * - **active-users**: dailyActiveUsers (default), dailyTransactionCount, dailyGasUsed
         */
        dataType?: string;
      };
      output: {
        /** allChains returned by DeFiLlama. */
        allChains?: Array<string>;
        /** total24h returned by DeFiLlama. */
        total24h?: number;
        /** total48hto24h returned by DeFiLlama. */
        total48hto24h?: number;
        /** total7d returned by DeFiLlama. */
        total7d?: number;
        /** total14dto7d returned by DeFiLlama. */
        total14dto7d?: number;
        /** total60dto30d returned by DeFiLlama. */
        total60dto30d?: number;
        /** total30d returned by DeFiLlama. */
        total30d?: number;
        /** total1y returned by DeFiLlama. */
        total1y?: number;
        /** change_1d returned by DeFiLlama. */
        change_1d?: number;
        /** change_7d returned by DeFiLlama. */
        change_7d?: number;
        /** change_1m returned by DeFiLlama. */
        change_1m?: number;
        /** change_7dover7d returned by DeFiLlama. */
        change_7dover7d?: number;
        /** change_30dover30d returned by DeFiLlama. */
        change_30dover30d?: number;
        [key: string]: unknown;
      };
    };
    /** Get category dimension data overview. Returns aggregate metrics for the specified dimension filtered by a specific category. Requires an API plan key. */
    "defillama.get_v2_metrics_by_metric_category_by_category": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume";
        /**
         * category slug (slugified category name, e.g. 'dexs', 'prediction-market', 'options')
         * @minLength 1
         */
        category: string;
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         */
        dataType?: string;
      };
      output: {
        /** allChains returned by DeFiLlama. */
        allChains?: Array<string>;
        /** total24h returned by DeFiLlama. */
        total24h?: number;
        /** total48hto24h returned by DeFiLlama. */
        total48hto24h?: number;
        /** total7d returned by DeFiLlama. */
        total7d?: number;
        /** total14dto7d returned by DeFiLlama. */
        total14dto7d?: number;
        /** total60dto30d returned by DeFiLlama. */
        total60dto30d?: number;
        /** total30d returned by DeFiLlama. */
        total30d?: number;
        /** total1y returned by DeFiLlama. */
        total1y?: number;
        /** change_1d returned by DeFiLlama. */
        change_1d?: number;
        /** change_7d returned by DeFiLlama. */
        change_7d?: number;
        /** change_1m returned by DeFiLlama. */
        change_1m?: number;
        /** change_7dover7d returned by DeFiLlama. */
        change_7dover7d?: number;
        /** change_30dover30d returned by DeFiLlama. */
        change_30dover30d?: number;
        /** category returned by DeFiLlama. */
        category?: string;
        /** allCategories returned by DeFiLlama. */
        allCategories?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get category chain dimension data overview. Returns aggregate metrics for the specified dimension filtered by both category and chain. Requires an API plan key. */
    "defillama.get_v2_metrics_by_metric_category_by_category_chain_by_chain": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume";
        /**
         * category slug (slugified category name, e.g. 'dexs', 'prediction-market', 'options')
         * @minLength 1
         */
        category: string;
        /**
         * chain name
         * @minLength 1
         */
        chain: string;
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         */
        dataType?: string;
      };
      output: {
        /** allChains returned by DeFiLlama. */
        allChains?: Array<string>;
        /** total24h returned by DeFiLlama. */
        total24h?: number;
        /** total48hto24h returned by DeFiLlama. */
        total48hto24h?: number;
        /** total7d returned by DeFiLlama. */
        total7d?: number;
        /** total14dto7d returned by DeFiLlama. */
        total14dto7d?: number;
        /** total60dto30d returned by DeFiLlama. */
        total60dto30d?: number;
        /** total30d returned by DeFiLlama. */
        total30d?: number;
        /** total1y returned by DeFiLlama. */
        total1y?: number;
        /** change_1d returned by DeFiLlama. */
        change_1d?: number;
        /** change_7d returned by DeFiLlama. */
        change_7d?: number;
        /** change_1m returned by DeFiLlama. */
        change_1m?: number;
        /** change_7dover7d returned by DeFiLlama. */
        change_7dover7d?: number;
        /** change_30dover30d returned by DeFiLlama. */
        change_30dover30d?: number;
        /** category returned by DeFiLlama. */
        category?: string;
        /** allCategories returned by DeFiLlama. */
        allCategories?: Array<string>;
        /** chain returned by DeFiLlama. */
        chain?: string;
        [key: string]: unknown;
      };
    };
    /** Get chain dimension data overview. Returns aggregate metrics for the specified dimension filtered by a specific chain. Requires an API plan key. */
    "defillama.get_v2_metrics_by_metric_chain_by_chain": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume";
        /**
         * chain name
         * @minLength 1
         */
        chain: string;
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         */
        dataType?: string;
      };
      output: {
        /** allChains returned by DeFiLlama. */
        allChains?: Array<string>;
        /** total24h returned by DeFiLlama. */
        total24h?: number;
        /** total48hto24h returned by DeFiLlama. */
        total48hto24h?: number;
        /** total7d returned by DeFiLlama. */
        total7d?: number;
        /** total14dto7d returned by DeFiLlama. */
        total14dto7d?: number;
        /** total60dto30d returned by DeFiLlama. */
        total60dto30d?: number;
        /** total30d returned by DeFiLlama. */
        total30d?: number;
        /** total1y returned by DeFiLlama. */
        total1y?: number;
        /** change_1d returned by DeFiLlama. */
        change_1d?: number;
        /** change_7d returned by DeFiLlama. */
        change_7d?: number;
        /** change_1m returned by DeFiLlama. */
        change_1m?: number;
        /** change_7dover7d returned by DeFiLlama. */
        change_7dover7d?: number;
        /** change_30dover30d returned by DeFiLlama. */
        change_30dover30d?: number;
        /** chain returned by DeFiLlama. */
        chain?: string;
        [key: string]: unknown;
      };
    };
    /** Get protocol dimension data overview. Returns protocol metadata along with aggregate metrics for the specified dimension. Requires an API plan key. */
    "defillama.get_v2_metrics_by_metric_protocol_by_protocol": {
      input: {
        /**
         * The dimension metric type
         * @minLength 1
         */
        metric: "fees" | "liquidations" | "dexs" | "derivatives" | "options" | "aggregators" | "bridge-aggregators" | "open-interest" | "normalized-volume";
        /**
         * protocol slug (slugified protocol name)
         * @minLength 1
         */
        protocol: string;
        /**
         * Metric-specific data type to return. Supported values per metric:
         * - **fees**: dailyFees (default), dailyRevenue, dailySupplySideRevenue, dailyHoldersRevenue, dailyProtocolRevenue
         * - **liquidations**: dailyLiquidationsVolume (default), dailyCollateralLiquidated
         * - **dexs**: dailyVolume (default), dailyNotionalVolume
         * - **derivatives**: dailyVolume (default), dailyNotionalVolume
         * - **options**: dailyNotionalVolume (default), dailyPremiumVolume
         * - **aggregators**: dailyVolume (default)
         * - **bridge-aggregators**: dailyBridgeVolume (default)
         * - **open-interest**: openInterestAtEnd (default), shortOpenInterestAtEnd, longOpenInterestAtEnd
         * - **normalized-volume**: dailyNormalizedVolume (default), dailyActiveLiquidity
         */
        dataType?: string;
      };
      output: {
        /** id returned by DeFiLlama. */
        id?: string;
        /** name returned by DeFiLlama. */
        name?: string;
        /** url returned by DeFiLlama. */
        url?: string;
        /** description returned by DeFiLlama. */
        description?: string;
        /** logo returned by DeFiLlama. */
        logo?: string;
        /** chains returned by DeFiLlama. */
        chains?: Array<string>;
        /** gecko_id returned by DeFiLlama. */
        gecko_id?: string | null;
        /** cmcId returned by DeFiLlama. */
        cmcId?: string | null;
        /** symbol returned by DeFiLlama. */
        symbol?: string | null;
        /** twitter returned by DeFiLlama. */
        twitter?: string | null;
        /** github returned by DeFiLlama. */
        github?: Array<string> | null;
        /** treasury returned by DeFiLlama. */
        treasury?: string | null;
        /** governanceID returned by DeFiLlama. */
        governanceID?: Array<string> | null;
        /** wrongLiquidity returned by DeFiLlama. */
        wrongLiquidity?: boolean | null;
        /** stablecoins returned by DeFiLlama. */
        stablecoins?: Array<string> | null;
        /** total24h returned by DeFiLlama. */
        total24h?: number;
        /** total48hto24h returned by DeFiLlama. */
        total48hto24h?: number;
        /** total7d returned by DeFiLlama. */
        total7d?: number;
        /** total30d returned by DeFiLlama. */
        total30d?: number;
        /** total1y returned by DeFiLlama. */
        total1y?: number;
        /** change_1d returned by DeFiLlama. */
        change_1d?: number;
        /** change_7d returned by DeFiLlama. */
        change_7d?: number;
        /** change_1m returned by DeFiLlama. */
        change_1m?: number;
        [key: string]: unknown;
      };
    };
    /** Get protocol income statement report. Returns protocol metadata, methodology details, and aggregated financial statement data (yearly, quarterly, monthly). Each period contains line items such as Gross Protocol Revenue, Cost Of Revenue, Gross Profit, Token Holder Net Income, Incentives, and Earnings, with values and optional label breakdowns.

When querying a parent protocol (e.g. `aave`), the response includes a `childProtocols` array with per-version methodology. When querying a child protocol (e.g. `aave-v3`), methodology and breakdownMethodology are at the top level. Requires an API plan key. Beta API; upstream fields may change. */
    "defillama.get_v2_metrics_financial_statement_protocol_by_protocol": {
      input: {
        /**
         * protocol slug (e.g. aave-v3, hyperliquid)
         * @minLength 1
         */
        protocol: string;
      };
      output: {
        /** Protocol ID. Parent protocols use 'parent#slug' format. */
        id?: string;
        /** name returned by DeFiLlama. */
        name?: string;
        /** address returned by DeFiLlama. */
        address?: string | null;
        /** symbol returned by DeFiLlama. */
        symbol?: string | null;
        /** url returned by DeFiLlama. */
        url?: string;
        /** description returned by DeFiLlama. */
        description?: string;
        /** Primary chain (present for child protocols) */
        chain?: string | null;
        /** logo returned by DeFiLlama. */
        logo?: string;
        /** audits returned by DeFiLlama. */
        audits?: string | null;
        /** audit_links returned by DeFiLlama. */
        audit_links?: Array<string> | null;
        /** Protocol category (present for child protocols) */
        category?: string | null;
        /** chains returned by DeFiLlama. */
        chains?: Array<string>;
        /** Oracles used by the protocol */
        oraclesBreakdown?: Array<{
          /** name returned by DeFiLlama. */
          name?: string;
          /** type returned by DeFiLlama. */
          type?: string;
          /** proof returned by DeFiLlama. */
          proof?: Array<string>;
          [key: string]: unknown;
        }> | null;
        /** module returned by DeFiLlama. */
        module?: string | null;
        /** twitter returned by DeFiLlama. */
        twitter?: string | null;
        /** github returned by DeFiLlama. */
        github?: Array<string> | null;
        /** Unix timestamp when protocol was listed */
        listedAt?: number | null;
        /** Parent protocol ID (present for child protocols) */
        parentProtocol?: string | null;
        /** Available dimension adapters for this protocol */
        dimensions?: Record<string, string | {
            adapter?: string;
            genuineSpikes?: Array<unknown>;
            [key: string]: unknown;
          }> | null;
        /** Maps line item names to descriptions. Present at top level for child protocols, inside childProtocols for parent protocols. */
        methodology?: Record<string, string> | null;
        /** Maps line item names to objects mapping label names to descriptions. Present at top level for child protocols, inside childProtocols for parent protocols. */
        breakdownMethodology?: Record<string, Record<string, string>> | null;
        /** methodologyURL returned by DeFiLlama. */
        methodologyURL?: string | null;
        /** tvlCodePath returned by DeFiLlama. */
        tvlCodePath?: string | null;
        /** Notable events as [timestamp, description] pairs */
        hallmarks?: Array<Array<unknown>> | null;
        /** linkedProtocols returned by DeFiLlama. */
        linkedProtocols?: Array<string>;
        /** Child protocol versions with their methodology details. Only present for parent protocols. */
        childProtocols?: Array<{
          /** name returned by DeFiLlama. */
          name?: string;
          /** defillamaId returned by DeFiLlama. */
          defillamaId?: string;
          /** displayName returned by DeFiLlama. */
          displayName?: string;
          /** methodologyURL returned by DeFiLlama. */
          methodologyURL?: string | null;
          /** methodology returned by DeFiLlama. */
          methodology?: Record<string, string>;
          /** breakdownMethodology returned by DeFiLlama. */
          breakdownMethodology?: Record<string, Record<string, string>>;
          [key: string]: unknown;
        }> | null;
        /** hasLabelBreakdown returned by DeFiLlama. */
        hasLabelBreakdown?: boolean;
        /** defillamaId returned by DeFiLlama. */
        defillamaId?: string;
        /** displayName returned by DeFiLlama. */
        displayName?: string;
        /** slug returned by DeFiLlama. */
        slug?: string;
        /** protocolType returned by DeFiLlama. */
        protocolType?: string;
        /** Financial data aggregated by time period */
        aggregates?: {
          /** Keyed by year (e.g. '2024'). Each value is an object of line items. */
          yearly?: Record<string, Record<string, {
                /** Total USD value for this line item in the period */
                value?: number;
                /** Breakdown by label (e.g. Borrow Interest, Liquidation Fees, Flash Loans). Not present for all line items. */
                "by-label"?: Record<string, number> | null;
                [key: string]: unknown;
              }>>;
          /** Keyed by quarter (e.g. '2024-Q1'). Each value is an object of line items. */
          quarterly?: Record<string, Record<string, {
                /** Total USD value for this line item in the period */
                value?: number;
                /** Breakdown by label. Not present for all line items. */
                "by-label"?: Record<string, number> | null;
                [key: string]: unknown;
              }>>;
          /** Keyed by month (e.g. '2024-01'). Each value is an object of line items. */
          monthly?: Record<string, Record<string, {
                /** Total USD value for this line item in the period */
                value?: number;
                /** Breakdown by label. Not present for all line items. */
                "by-label"?: Record<string, number> | null;
                [key: string]: unknown;
              }>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get fork data overview. Returns an object mapping fork names to arrays of protocol names that are forks of each protocol. Requires an API plan key. */
    "defillama.get_v2_metrics_fork": {
      input: Record<string, never>;
      output: Record<string, Array<string>>;
    };
    /** Get oracle data overview. Returns an object mapping oracle names to arrays of protocol names that use each oracle. Requires an API plan key. */
    "defillama.get_v2_metrics_oracle": {
      input: Record<string, never>;
      output: {
        /** Mapping of oracle names to arrays of protocol names using that oracle */
        oracles?: Record<string, Array<string>>;
        [key: string]: unknown;
      };
    };
    /** Get aggregate treasury metrics for a protocol. Returns protocol metadata along with current treasury figures and chain breakdowns. Requires an API plan key. */
    "defillama.get_v2_metrics_treasury_protocol_by_protocol": {
      input: {
        /**
         * protocol slug
         * @minLength 1
         */
        protocol: string;
      };
      output: {
        /** id returned by DeFiLlama. */
        id?: string;
        /** name returned by DeFiLlama. */
        name?: string;
        /** address returned by DeFiLlama. */
        address?: string | null;
        /** symbol returned by DeFiLlama. */
        symbol?: string | null;
        /** url returned by DeFiLlama. */
        url?: string;
        /** referralUrl returned by DeFiLlama. */
        referralUrl?: string | null;
        /** description returned by DeFiLlama. */
        description?: string;
        /** chain returned by DeFiLlama. */
        chain?: string;
        /** logo returned by DeFiLlama. */
        logo?: string;
        /** audits returned by DeFiLlama. */
        audits?: string | null;
        /** audit_note returned by DeFiLlama. */
        audit_note?: string | null;
        /** gecko_id returned by DeFiLlama. */
        gecko_id?: string | null;
        /** cmcId returned by DeFiLlama. */
        cmcId?: string | null;
        /** category returned by DeFiLlama. */
        category?: string;
        /** tags returned by DeFiLlama. */
        tags?: Array<string> | null;
        /** chains returned by DeFiLlama. */
        chains?: Array<string>;
        /** module returned by DeFiLlama. */
        module?: string | null;
        /** treasury returned by DeFiLlama. */
        treasury?: string | null;
        /** twitter returned by DeFiLlama. */
        twitter?: string;
        /** audit_links returned by DeFiLlama. */
        audit_links?: Array<string>;
        /** openSource returned by DeFiLlama. */
        openSource?: boolean;
        /** forkedFrom returned by DeFiLlama. */
        forkedFrom?: Array<string>;
        /** oraclesByChain returned by DeFiLlama. */
        oraclesByChain?: Record<string, Array<string>>;
        /** parentProtocol returned by DeFiLlama. */
        parentProtocol?: string;
        /** governanceID returned by DeFiLlama. */
        governanceID?: Array<string>;
        /** github returned by DeFiLlama. */
        github?: Array<string>;
        /** currentChainTvls returned by DeFiLlama. */
        currentChainTvls?: Record<string, number>;
        /** isParentProtocol returned by DeFiLlama. */
        isParentProtocol?: boolean;
        /** mcap returned by DeFiLlama. */
        mcap?: number | null;
        /** methodology returned by DeFiLlama. */
        methodology?: string | null;
        /** raises returned by DeFiLlama. */
        raises?: Array<{
          /** round returned by DeFiLlama. */
          round?: string;
          /** amount returned by DeFiLlama. */
          amount?: number;
          /** valuation returned by DeFiLlama. */
          valuation?: string;
          /** source returned by DeFiLlama. */
          source?: string;
          /** date returned by DeFiLlama. */
          date?: number;
          /** defillamaId returned by DeFiLlama. */
          defillamaId?: string;
          /** leadInvestors returned by DeFiLlama. */
          leadInvestors?: Array<string>;
          /** otherInvestors returned by DeFiLlama. */
          otherInvestors?: Array<string>;
          /** investors returned by DeFiLlama. */
          investors?: Array<string>;
          [key: string]: unknown;
        }>;
        /** otherProtocols returned by DeFiLlama. */
        otherProtocols?: Array<string>;
        /** Notable events in the protocol's history as [timestamp, description] pairs */
        hallmarks?: Array<Array<unknown>>;
        /** stablecoins returned by DeFiLlama. */
        stablecoins?: Array<string>;
        /** misrepresentedTokens returned by DeFiLlama. */
        misrepresentedTokens?: boolean;
        /** deprecated returned by DeFiLlama. */
        deprecated?: boolean;
        /** rugged returned by DeFiLlama. */
        rugged?: boolean;
        /** deadUrl returned by DeFiLlama. */
        deadUrl?: boolean;
        /** warningBanners returned by DeFiLlama. */
        warningBanners?: Array<{
          /** message returned by DeFiLlama. */
          message?: string;
          /** until returned by DeFiLlama. */
          until?: string | null;
          /** level returned by DeFiLlama. */
          level?: "low" | "alert" | "rug";
          [key: string]: unknown;
        }>;
        /** Token governance and value accrual rights */
        tokenRights?: Record<string, unknown>;
        /** wrongLiquidity returned by DeFiLlama. */
        wrongLiquidity?: boolean;
        /** Path to the TVL adapter source code */
        tvlCodePath?: string;
        [key: string]: unknown;
      };
    };
    /** Get aggregate TVL metrics for a protocol. Returns protocol metadata along with current TVL figures, chain breakdowns, and other aggregate metrics. Requires an API plan key. */
    "defillama.get_v2_metrics_tvl_protocol_by_protocol": {
      input: {
        /**
         * protocol slug
         * @minLength 1
         */
        protocol: string;
      };
      output: {
        /** id returned by DeFiLlama. */
        id?: string;
        /** name returned by DeFiLlama. */
        name?: string;
        /** address returned by DeFiLlama. */
        address?: string | null;
        /** symbol returned by DeFiLlama. */
        symbol?: string | null;
        /** url returned by DeFiLlama. */
        url?: string;
        /** referralUrl returned by DeFiLlama. */
        referralUrl?: string | null;
        /** description returned by DeFiLlama. */
        description?: string;
        /** chain returned by DeFiLlama. */
        chain?: string;
        /** logo returned by DeFiLlama. */
        logo?: string;
        /** audits returned by DeFiLlama. */
        audits?: string | null;
        /** audit_note returned by DeFiLlama. */
        audit_note?: string | null;
        /** gecko_id returned by DeFiLlama. */
        gecko_id?: string | null;
        /** cmcId returned by DeFiLlama. */
        cmcId?: string | null;
        /** category returned by DeFiLlama. */
        category?: string;
        /** tags returned by DeFiLlama. */
        tags?: Array<string> | null;
        /** chains returned by DeFiLlama. */
        chains?: Array<string>;
        /** module returned by DeFiLlama. */
        module?: string | null;
        /** treasury returned by DeFiLlama. */
        treasury?: string | null;
        /** twitter returned by DeFiLlama. */
        twitter?: string;
        /** audit_links returned by DeFiLlama. */
        audit_links?: Array<string>;
        /** openSource returned by DeFiLlama. */
        openSource?: boolean;
        /** forkedFrom returned by DeFiLlama. */
        forkedFrom?: Array<string>;
        /** oraclesByChain returned by DeFiLlama. */
        oraclesByChain?: Record<string, Array<string>>;
        /** parentProtocol returned by DeFiLlama. */
        parentProtocol?: string;
        /** governanceID returned by DeFiLlama. */
        governanceID?: Array<string>;
        /** github returned by DeFiLlama. */
        github?: Array<string>;
        /** currentChainTvls returned by DeFiLlama. */
        currentChainTvls?: Record<string, number>;
        /** isParentProtocol returned by DeFiLlama. */
        isParentProtocol?: boolean;
        /** mcap returned by DeFiLlama. */
        mcap?: number | null;
        /** methodology returned by DeFiLlama. */
        methodology?: string | null;
        /** raises returned by DeFiLlama. */
        raises?: Array<{
          /** round returned by DeFiLlama. */
          round?: string;
          /** amount returned by DeFiLlama. */
          amount?: number;
          /** valuation returned by DeFiLlama. */
          valuation?: string;
          /** source returned by DeFiLlama. */
          source?: string;
          /** date returned by DeFiLlama. */
          date?: number;
          /** defillamaId returned by DeFiLlama. */
          defillamaId?: string;
          /** leadInvestors returned by DeFiLlama. */
          leadInvestors?: Array<string>;
          /** otherInvestors returned by DeFiLlama. */
          otherInvestors?: Array<string>;
          /** investors returned by DeFiLlama. */
          investors?: Array<string>;
          [key: string]: unknown;
        }>;
        /** otherProtocols returned by DeFiLlama. */
        otherProtocols?: Array<string>;
        /** Notable events in the protocol's history as [timestamp, description] pairs */
        hallmarks?: Array<Array<unknown>>;
        /** stablecoins returned by DeFiLlama. */
        stablecoins?: Array<string>;
        /** misrepresentedTokens returned by DeFiLlama. */
        misrepresentedTokens?: boolean;
        /** deprecated returned by DeFiLlama. */
        deprecated?: boolean;
        /** rugged returned by DeFiLlama. */
        rugged?: boolean;
        /** deadUrl returned by DeFiLlama. */
        deadUrl?: boolean;
        /** warningBanners returned by DeFiLlama. */
        warningBanners?: Array<{
          /** message returned by DeFiLlama. */
          message?: string;
          /** until returned by DeFiLlama. */
          until?: string | null;
          /** level returned by DeFiLlama. */
          level?: "low" | "alert" | "rug";
          [key: string]: unknown;
        }>;
        /** Token governance and value accrual rights */
        tokenRights?: Record<string, unknown>;
        /** wrongLiquidity returned by DeFiLlama. */
        wrongLiquidity?: boolean;
        /** Path to the TVL adapter source code */
        tvlCodePath?: string;
        [key: string]: unknown;
      };
    };
    /** Get historical APY and TVL of a pool in the legacy v1 response format. Daily history in the legacy v1 format. Every value is the day's last observation. Unknown pool ids return an empty `data` array. Available with no_auth or api_key. Free access ends on November 13, 2026; API-key access uses the legacy v1 format. */
    "defillama.get_yields_v1_chart_by_pool": {
      input: {
        /**
         * pool id (UUID), from /yields/v1/pools (property is called pool)
         * @minLength 1
         */
        pool: string;
      };
      output: {
        /** status returned by DeFiLlama. */
        status?: string;
        /** data returned by DeFiLlama. */
        data?: Array<{
          /** timestamp returned by DeFiLlama. */
          timestamp?: string;
          /** The day's last observation. */
          tvlUsd?: number | null;
          /** The day's last observation. */
          apy?: number | null;
          /** apyBase returned by DeFiLlama. */
          apyBase?: number | null;
          /** apyReward returned by DeFiLlama. */
          apyReward?: number | null;
          /** Always null; no longer computed. */
          il7d?: number | null;
          /** Always null; no longer computed. */
          apyBase7d?: number | null;
          /** The day's last observation. */
          pricePerShare?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Historical borrow cost APY from a pool on a lending market in the legacy v1 response format. Daily borrow-market history in the legacy v1 format. Every value is the day's last observation. Unknown pool ids return an empty `data` array. Requires an API plan key. */
    "defillama.get_yields_v1_chart_lend_borrow_by_pool": {
      input: {
        /**
         * pool id (UUID), from /yields/v1/poolsBorrow (property is called pool)
         * @minLength 1
         */
        pool: string;
      };
      output: {
        /** status returned by DeFiLlama. */
        status?: string;
        /** data returned by DeFiLlama. */
        data?: Array<{
          /** timestamp returned by DeFiLlama. */
          timestamp?: string;
          /** The day's last observation. */
          totalSupplyUsd?: number | null;
          /** The day's last observation. */
          totalBorrowUsd?: number | null;
          /** debtCeilingUsd returned by DeFiLlama. */
          debtCeilingUsd?: number | null;
          /** The day's last observation. */
          apyBase?: number | null;
          /** apyReward returned by DeFiLlama. */
          apyReward?: number | null;
          /** The day's last observation. */
          apyBaseBorrow?: number | null;
          /** apyRewardBorrow returned by DeFiLlama. */
          apyRewardBorrow?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve the latest data for all pools in the legacy v1 response format. Serves the former `/yields/pools` response format, including the extra fields from `/yields/poolsOld`. Frozen for compatibility: the shape will not change and no new fields will be added - use `/yields/v2/earn` for new integrations. Available with no_auth or api_key. Free access ends on November 13, 2026; API-key access uses the legacy v1 format. */
    "defillama.get_yields_v1_pools": {
      input: Record<string, never>;
      output: {
        /** status returned by DeFiLlama. */
        status?: string;
        /** data returned by DeFiLlama. */
        data?: Array<{
          /** Pool id (UUID). Same id space as the v2 yields API. */
          pool?: string;
          /** Timestamp of the latest data point. */
          timestamp?: string;
          /** project returned by DeFiLlama. */
          project?: string;
          /** chain returned by DeFiLlama. */
          chain?: string;
          /** Uppercase symbol. */
          symbol?: string;
          /** poolMeta returned by DeFiLlama. */
          poolMeta?: string | null;
          /** Underlying token addresses, lowercase. */
          underlyingTokens?: Array<string> | null;
          /** Reward token addresses, lowercase; null when no rewards are currently flowing. */
          rewardTokens?: Array<string> | null;
          /** Receipt/pool token address, lowercase. */
          poolTokenAddress?: string | null;
          /** TVL in USD; for lending markets this is available liquidity, not total supplied. */
          tvlUsd?: number;
          /** apy returned by DeFiLlama. */
          apy?: number;
          /** apyBase returned by DeFiLlama. */
          apyBase?: number | null;
          /** apyReward returned by DeFiLlama. */
          apyReward?: number | null;
          /** Always null; no longer computed. */
          il7d?: number | null;
          /** Always null; no longer computed. */
          apyBase7d?: number | null;
          /** volumeUsd1d returned by DeFiLlama. */
          volumeUsd1d?: number | null;
          /** 7-day volume in USD. */
          volumeUsd7d?: number | null;
          /** Always null; no longer computed. */
          apyBaseInception?: number | null;
          /** url returned by DeFiLlama. */
          url?: string;
          /** Absolute APY change vs 1 day ago, in percentage points. */
          apyPct1D?: number | null;
          /** apyPct7D returned by DeFiLlama. */
          apyPct7D?: number | null;
          /** apyPct30D returned by DeFiLlama. */
          apyPct30D?: number | null;
          /** 30-day mean APY. */
          apyMean30d?: number | null;
          /** Whether every underlying asset is a stablecoin. */
          stablecoin?: boolean;
          /** ilRisk returned by DeFiLlama. */
          ilRisk?: string;
          /** exposure returned by DeFiLlama. */
          exposure?: string;
          /** Always null; no longer computed. */
          return?: number | null;
          /** Always null; no longer computed. */
          count?: number | null;
          /** Always null; no longer computed. */
          apyMeanExpanding?: number | null;
          /** Always null; no longer computed. */
          apyStdExpanding?: number | null;
          /** Always null; no longer computed. */
          mu?: number | null;
          /** Always null; no longer computed. */
          sigma?: number | null;
          /** Always null; no longer computed. */
          outlier?: boolean | null;
          /** Always null; no longer computed. */
          project_factorized?: number | null;
          /** Always null; no longer computed. */
          chain_factorized?: number | null;
          /** Always null; no longer computed. */
          predictions?: {
            /** predictedClass returned by DeFiLlama. */
            predictedClass?: string | null;
            /** predictedProbability returned by DeFiLlama. */
            predictedProbability?: number | null;
            /** binnedConfidence returned by DeFiLlama. */
            binnedConfidence?: number | null;
            [key: string]: unknown;
          };
          /** The original pool key (usually contains a pool address). */
          pool_old?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Borrow costs APY of assets from lending markets in the legacy v1 response format. Serves the former `/yields/poolsBorrow` response format. Markets that cannot currently be borrowed from are not listed. Frozen for compatibility: the shape will not change and no new fields will be added - use `/yields/v2/borrow/markets` for new integrations. Requires an API plan key. */
    "defillama.get_yields_v1_pools_borrow": {
      input: Record<string, never>;
      output: {
        /** status returned by DeFiLlama. */
        status?: string;
        /** data returned by DeFiLlama. */
        data?: Array<{
          /** chain returned by DeFiLlama. */
          chain?: string;
          /** project returned by DeFiLlama. */
          project?: string;
          /** Uppercase symbol. */
          symbol?: string;
          /** TVL in USD; for lending markets this is available liquidity, not total supplied. */
          tvlUsd?: number | null;
          /** apyBase returned by DeFiLlama. */
          apyBase?: number | null;
          /** apyReward returned by DeFiLlama. */
          apyReward?: number | null;
          /** apy returned by DeFiLlama. */
          apy?: number | null;
          /** Reward token addresses, lowercase; null when no rewards are currently flowing. */
          rewardTokens?: Array<string> | null;
          /** Pool id (UUID). Same id space as the v2 yields API. */
          pool?: string;
          /** Absolute APY change vs 1 day ago, in percentage points. */
          apyPct1D?: number | null;
          /** apyPct7D returned by DeFiLlama. */
          apyPct7D?: number | null;
          /** apyPct30D returned by DeFiLlama. */
          apyPct30D?: number | null;
          /** Whether every underlying asset is a stablecoin. */
          stablecoin?: boolean;
          /** ilRisk returned by DeFiLlama. */
          ilRisk?: string;
          /** exposure returned by DeFiLlama. */
          exposure?: string;
          /** Always null; no longer computed. */
          predictions?: {
            /** predictedClass returned by DeFiLlama. */
            predictedClass?: string | null;
            /** predictedProbability returned by DeFiLlama. */
            predictedProbability?: number | null;
            /** binnedConfidence returned by DeFiLlama. */
            binnedConfidence?: number | null;
            [key: string]: unknown;
          };
          /** poolMeta returned by DeFiLlama. */
          poolMeta?: string | null;
          /** Always null; no longer computed. */
          mu?: number | null;
          /** Always null; no longer computed. */
          sigma?: number | null;
          /** Always null; no longer computed. */
          count?: number | null;
          /** Always null; no longer computed. */
          outlier?: boolean | null;
          /** Underlying token addresses, lowercase. */
          underlyingTokens?: Array<string> | null;
          /** Always null; no longer computed. */
          il7d?: number | null;
          /** Always null; no longer computed. */
          apyBase7d?: number | null;
          /** 30-day mean APY. */
          apyMean30d?: number | null;
          /** volumeUsd1d returned by DeFiLlama. */
          volumeUsd1d?: number | null;
          /** 7-day volume in USD. */
          volumeUsd7d?: number | null;
          /** Always null; no longer computed. */
          apyBaseInception?: number | null;
          /** apyBaseBorrow returned by DeFiLlama. */
          apyBaseBorrow?: number | null;
          /** apyRewardBorrow returned by DeFiLlama. */
          apyRewardBorrow?: number | null;
          /** totalSupplyUsd returned by DeFiLlama. */
          totalSupplyUsd?: number | null;
          /** totalBorrowUsd returned by DeFiLlama. */
          totalBorrowUsd?: number | null;
          /** debtCeilingUsd returned by DeFiLlama. */
          debtCeilingUsd?: number | null;
          /** ltv returned by DeFiLlama. */
          ltv?: number | null;
          /** borrowable returned by DeFiLlama. */
          borrowable?: boolean | null;
          /** The borrowed token's symbol when it differs from the deposited asset (CDP-style markets). */
          mintedCoin?: string | null;
          /** Always null; no longer computed. */
          borrowFactor?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve the latest data for all borrow markets. One row per borrow market: collateral and debt token, maximum loan-to-value, USD supply/borrow totals and attributed APY for both sides over `current`, `avg_7d` and `avg_30d` windows. Reward emissions offset borrowing costs, so `borrow_cost_apy` totals can be negative (the borrower is net paid). Requires an API plan key. */
    "defillama.get_yields_v2_borrow_markets": {
      input: Record<string, never>;
      output: {
        /** data returned by DeFiLlama. */
        data?: Array<{
          /** Market id (UUID) */
          id?: string;
          /** Stable market key. */
          pool_key?: string;
          /** Receipt / vault token representing the position; null when the market has no transferable pool token */
          pool_token?: {
            /** address returned by DeFiLlama. */
            address?: string;
            /** symbol returned by DeFiLlama. */
            symbol?: string | null;
            /** name returned by DeFiLlama. */
            name?: string | null;
            [key: string]: unknown;
          } | null;
          /** Display strings for listings */
          display?: {
            /** Collateral symbol, or "COLLATERAL / DEBT" for isolated pairs */
            label?: string | null;
            /** detail returned by DeFiLlama. */
            detail?: string | null;
            [key: string]: unknown;
          };
          /** Market page on the protocol app */
          url?: string | null;
          /** Protocol display name */
          protocol?: string;
          /** Chain display name */
          chain?: string;
          /** Token supplied as collateral; null when unknown */
          collateral_token?: {
            /** address returned by DeFiLlama. */
            address?: string;
            /** symbol returned by DeFiLlama. */
            symbol?: string | null;
            /** decimals returned by DeFiLlama. */
            decimals?: number | null;
            [key: string]: unknown;
          };
          /** Token borrowed from the market; null when unknown */
          borrow_token?: {
            /** address returned by DeFiLlama. */
            address?: string;
            /** symbol returned by DeFiLlama. */
            symbol?: string | null;
            /** decimals returned by DeFiLlama. */
            decimals?: number | null;
            [key: string]: unknown;
          };
          /** Incentive tokens currently emitted to the market; empty when there are none */
          reward_tokens?: Array<{
            /** address returned by DeFiLlama. */
            address?: string;
            /** symbol returned by DeFiLlama. */
            symbol?: string | null;
            /** decimals returned by DeFiLlama. */
            decimals?: number | null;
            [key: string]: unknown;
          }>;
          /** Maximum loan-to-value as a fraction (0.805 = 80.5%) */
          loan_to_value?: number | null;
          /** Total supplied to the market, in USD */
          total_supply_usd?: number | null;
          /** Total borrowed from the market, in USD */
          total_borrow_usd?: number | null;
          /** Liquidity still available to borrow, in USD */
          available_borrow_usd?: number | null;
          /** APY in percent earned by suppliers */
          supply_apy?: {
            /** Latest observed values */
            current?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base plus reward, in percent */
              total?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 7-day average */
            avg_7d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base plus reward, in percent */
              total?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 30-day average */
            avg_30d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base plus reward, in percent */
              total?: number | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** APY in percent paid by borrowers. Reward emissions reduce the cost, so total = base - reward and can be negative */
          borrow_cost_apy?: {
            /** Latest observed values */
            current?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base minus reward, in percent; negative means the borrower is net paid */
              total?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 7-day average */
            avg_7d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base minus reward, in percent; negative means the borrower is net paid */
              total?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 30-day average */
            avg_30d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base minus reward, in percent; negative means the borrower is net paid */
              total?: number | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Intrinsic yield of yield-bearing tokens on either side of the market */
          intrinsic?: {
            /** Intrinsic yield of the supply-side token. Intrinsic yield is reported separately and is NOT included in the base/reward/total APY. Null when there is no intrinsic yield source. */
            supply?: {
              /** Intrinsic APY in percent */
              apy?: {
                /** Latest observed value */
                current?: {
                  /** base returned by DeFiLlama. */
                  base?: number | null;
                  [key: string]: unknown;
                };
                /** Trailing 7-day average */
                avg_7d?: {
                  /** base returned by DeFiLlama. */
                  base?: number | null;
                  [key: string]: unknown;
                };
                /** Trailing 30-day average */
                avg_30d?: {
                  /** base returned by DeFiLlama. */
                  base?: number | null;
                  [key: string]: unknown;
                };
                [key: string]: unknown;
              };
              /** source_pool returned by DeFiLlama. */
              source_pool?: {
                /** Earn pool the intrinsic yield is sourced from */
                id?: string;
                /** Address of the yield-bearing token */
                pool_token?: string;
                /** symbol returned by DeFiLlama. */
                symbol?: string | null;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            } | null;
            /** Intrinsic yield of the borrowed token. Borrowing a yield-bearing token adds this rate to the effective borrow cost, since the debt appreciates by it. Intrinsic yield is reported separately and is NOT included in the base/reward/total APY. Null when there is no intrinsic yield source. */
            borrow?: {
              /** Intrinsic APY in percent */
              apy?: {
                /** Latest observed value */
                current?: {
                  /** base returned by DeFiLlama. */
                  base?: number | null;
                  [key: string]: unknown;
                };
                /** Trailing 7-day average */
                avg_7d?: {
                  /** base returned by DeFiLlama. */
                  base?: number | null;
                  [key: string]: unknown;
                };
                /** Trailing 30-day average */
                avg_30d?: {
                  /** base returned by DeFiLlama. */
                  base?: number | null;
                  [key: string]: unknown;
                };
                [key: string]: unknown;
              };
              /** source_pool returned by DeFiLlama. */
              source_pool?: {
                /** Earn pool the intrinsic yield is sourced from */
                id?: string;
                /** Address of the yield-bearing token */
                pool_token?: string;
                /** symbol returned by DeFiLlama. */
                symbol?: string | null;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve daily borrow-side history for a borrow market. Daily borrow totals and borrow-cost APY for one market, oldest first. APY carries `avg_1d` (that day), `avg_7d` and `avg_30d` (trailing averages ending that day) windows, each attributed into base/reward/total. Supply-side history for the same id lives at `/yields/v2/earn/{id}/history`. Requires an API plan key. */
    "defillama.get_yields_v2_borrow_markets_by_id_history": {
      input: {
        /**
         * Borrow market id (UUID)
         * @minLength 1
         */
        id: string;
        /** History window; defaults to max (the full series) */
        range?: "30d" | "90d" | "max";
      };
      output: {
        /** data returned by DeFiLlama. */
        data?: Array<{
          /** Day (UTC) */
          date?: string;
          /** Total borrowed from the market, in USD */
          total_borrow_usd?: number | null;
          /** Liquidity still available to borrow, in USD */
          available_borrow_usd?: number | null;
          /** APY in percent paid by borrowers. Reward emissions reduce the cost, so total = base - reward and can be negative */
          borrow_cost_apy?: {
            /** Average over that day */
            avg_1d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base minus reward, in percent; negative means the borrower is net paid */
              total?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 7-day average */
            avg_7d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base minus reward, in percent; negative means the borrower is net paid */
              total?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 30-day average */
            avg_30d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base minus reward, in percent; negative means the borrower is net paid */
              total?: number | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Intrinsic yield of the borrowed token. Borrowing a yield-bearing token adds this rate to the effective borrow cost, since the debt appreciates by it. Intrinsic yield is reported separately and is NOT included in the base/reward/total APY. Null when there is no intrinsic yield source. */
          intrinsic?: {
            /** Intrinsic APY in percent */
            apy?: {
              /** Average over that day */
              avg_1d?: {
                /** base returned by DeFiLlama. */
                base?: number | null;
                [key: string]: unknown;
              };
              /** Trailing 7-day average */
              avg_7d?: {
                /** base returned by DeFiLlama. */
                base?: number | null;
                [key: string]: unknown;
              };
              /** Trailing 30-day average */
              avg_30d?: {
                /** base returned by DeFiLlama. */
                base?: number | null;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve the latest data for all borrow routes. Every supported borrowing route: a collateral position paired with a debt market on the same protocol and chain. Each row reports the collateral side (supply APY earned on the collateral), the borrow side (cost APY of the debt token) and `net_apy` (collateral yield minus borrow cost). Negative net APY means the position costs more than the collateral earns. Requires an API plan key. */
    "defillama.get_yields_v2_borrow_routes": {
      input: Record<string, never>;
      output: {
        /** data returned by DeFiLlama. */
        data?: Array<{
          /** Display strings for listings */
          display?: {
            /** Market variant label; null when there is only one market */
            detail?: string | null;
            [key: string]: unknown;
          };
          /** Protocol display name */
          protocol?: string;
          /** Chain display name */
          chain?: string;
          /** The supplied collateral position */
          collateral?: {
            /** Collateral pool id (UUID) */
            id?: string;
            /** Stable pool key of the collateral pool */
            pool_key?: string;
            /** url returned by DeFiLlama. */
            url?: string | null;
            /** Token supplied as collateral */
            token?: {
              /** address returned by DeFiLlama. */
              address?: string;
              /** symbol returned by DeFiLlama. */
              symbol?: string | null;
              /** decimals returned by DeFiLlama. */
              decimals?: number | null;
              [key: string]: unknown;
            };
            /** Maximum loan-to-value as a fraction (0.84 = 84%) */
            loan_to_value?: number | null;
            /** Total supplied to the collateral pool, in USD */
            total_supply_usd?: number | null;
            /** Supply APY in percent earned on the collateral */
            apy?: {
              /** Latest observed values */
              current?: {
                /** Organic APY in percent, excluding incentive rewards */
                base?: number | null;
                /** APY in percent from incentive token emissions; null when there are none */
                reward?: number | null;
                /** base plus reward, in percent */
                total?: number | null;
                [key: string]: unknown;
              };
              /** Trailing 7-day average */
              avg_7d?: {
                /** Organic APY in percent, excluding incentive rewards */
                base?: number | null;
                /** APY in percent from incentive token emissions; null when there are none */
                reward?: number | null;
                /** base plus reward, in percent */
                total?: number | null;
                [key: string]: unknown;
              };
              /** Trailing 30-day average */
              avg_30d?: {
                /** Organic APY in percent, excluding incentive rewards */
                base?: number | null;
                /** APY in percent from incentive token emissions; null when there are none */
                reward?: number | null;
                /** base plus reward, in percent */
                total?: number | null;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            /** Intrinsic yield of the collateral token. Intrinsic yield is reported separately and is NOT included in the base/reward/total APY. Null when there is no intrinsic yield source. */
            intrinsic?: {
              /** Intrinsic APY in percent */
              apy?: {
                /** Latest observed value */
                current?: {
                  /** base returned by DeFiLlama. */
                  base?: number | null;
                  [key: string]: unknown;
                };
                /** Trailing 7-day average */
                avg_7d?: {
                  /** base returned by DeFiLlama. */
                  base?: number | null;
                  [key: string]: unknown;
                };
                /** Trailing 30-day average */
                avg_30d?: {
                  /** base returned by DeFiLlama. */
                  base?: number | null;
                  [key: string]: unknown;
                };
                [key: string]: unknown;
              };
              /** source_pool returned by DeFiLlama. */
              source_pool?: {
                /** Earn pool the intrinsic yield is sourced from */
                id?: string;
                /** Address of the yield-bearing token */
                pool_token?: string;
                /** symbol returned by DeFiLlama. */
                symbol?: string | null;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            } | null;
            /** Incentive tokens emitted to the collateral side; empty when there are none */
            reward_tokens?: Array<{
              /** address returned by DeFiLlama. */
              address?: string;
              /** symbol returned by DeFiLlama. */
              symbol?: string | null;
              /** decimals returned by DeFiLlama. */
              decimals?: number | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** The borrowed debt position */
          borrow?: {
            /** Debt market id (UUID) */
            id?: string;
            /** Stable pool key of the debt market */
            pool_key?: string;
            /** url returned by DeFiLlama. */
            url?: string | null;
            /** Token borrowed */
            token?: {
              /** address returned by DeFiLlama. */
              address?: string;
              /** symbol returned by DeFiLlama. */
              symbol?: string | null;
              /** decimals returned by DeFiLlama. */
              decimals?: number | null;
              [key: string]: unknown;
            };
            /** Total borrowed from the market, in USD */
            total_borrow_usd?: number | null;
            /** Liquidity still available to borrow, in USD */
            available_borrow_usd?: number | null;
            /** Borrow cost APY in percent. Reward emissions reduce the cost, so total = base - reward and can be negative */
            cost_apy?: {
              /** Latest observed values */
              current?: {
                /** Organic APY in percent, excluding incentive rewards */
                base?: number | null;
                /** APY in percent from incentive token emissions; null when there are none */
                reward?: number | null;
                /** base minus reward, in percent; negative means the borrower is net paid */
                total?: number | null;
                [key: string]: unknown;
              };
              /** Trailing 7-day average */
              avg_7d?: {
                /** Organic APY in percent, excluding incentive rewards */
                base?: number | null;
                /** APY in percent from incentive token emissions; null when there are none */
                reward?: number | null;
                /** base minus reward, in percent; negative means the borrower is net paid */
                total?: number | null;
                [key: string]: unknown;
              };
              /** Trailing 30-day average */
              avg_30d?: {
                /** Organic APY in percent, excluding incentive rewards */
                base?: number | null;
                /** APY in percent from incentive token emissions; null when there are none */
                reward?: number | null;
                /** base minus reward, in percent; negative means the borrower is net paid */
                total?: number | null;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            /** Intrinsic yield of the borrowed token. Borrowing a yield-bearing token adds this rate to the effective borrow cost, since the debt appreciates by it. Intrinsic yield is reported separately and is NOT included in the base/reward/total APY. Null when there is no intrinsic yield source. */
            intrinsic?: {
              /** Intrinsic APY in percent */
              apy?: {
                /** Latest observed value */
                current?: {
                  /** base returned by DeFiLlama. */
                  base?: number | null;
                  [key: string]: unknown;
                };
                /** Trailing 7-day average */
                avg_7d?: {
                  /** base returned by DeFiLlama. */
                  base?: number | null;
                  [key: string]: unknown;
                };
                /** Trailing 30-day average */
                avg_30d?: {
                  /** base returned by DeFiLlama. */
                  base?: number | null;
                  [key: string]: unknown;
                };
                [key: string]: unknown;
              };
              /** source_pool returned by DeFiLlama. */
              source_pool?: {
                /** Earn pool the intrinsic yield is sourced from */
                id?: string;
                /** Address of the yield-bearing token */
                pool_token?: string;
                /** symbol returned by DeFiLlama. */
                symbol?: string | null;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            } | null;
            /** Incentive tokens emitted to the borrow side; empty when there are none */
            reward_tokens?: Array<{
              /** address returned by DeFiLlama. */
              address?: string;
              /** symbol returned by DeFiLlama. */
              symbol?: string | null;
              /** decimals returned by DeFiLlama. */
              decimals?: number | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Net APY in percent: collateral supply APY minus borrow cost. Keyed by APY composition: read the leaf matching the APY components you consume (base, base + reward, base + intrinsic, base + reward + intrinsic). */
          net_apy?: {
            /** Latest observed values */
            current?: {
              /** base returned by DeFiLlama. */
              base?: number | null;
              /** base_reward returned by DeFiLlama. */
              base_reward?: number | null;
              /** base_intrinsic returned by DeFiLlama. */
              base_intrinsic?: number | null;
              /** base_reward_intrinsic returned by DeFiLlama. */
              base_reward_intrinsic?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 7-day average */
            avg_7d?: {
              /** base returned by DeFiLlama. */
              base?: number | null;
              /** base_reward returned by DeFiLlama. */
              base_reward?: number | null;
              /** base_intrinsic returned by DeFiLlama. */
              base_intrinsic?: number | null;
              /** base_reward_intrinsic returned by DeFiLlama. */
              base_reward_intrinsic?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 30-day average */
            avg_30d?: {
              /** base returned by DeFiLlama. */
              base?: number | null;
              /** base_reward returned by DeFiLlama. */
              base_reward?: number | null;
              /** base_intrinsic returned by DeFiLlama. */
              base_intrinsic?: number | null;
              /** base_reward_intrinsic returned by DeFiLlama. */
              base_reward_intrinsic?: number | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve the latest data for all earn pools. Returns every tracked earn pool (supply-side yield), sorted by TVL descending. APY values are percentages, attributed into `base` (organic), `reward` (incentive emissions) and `total` (base + reward) over `current`, `avg_7d` and `avg_30d` windows. Pools whose underlying token is itself yield-bearing additionally report that yield under `intrinsic`; it is not included in the pool APY. For a filtered, paginated variant of the same rows use `/yields/v2/earn/query`. Requires an API plan key. */
    "defillama.get_yields_v2_earn": {
      input: Record<string, never>;
      output: {
        /** data returned by DeFiLlama. */
        data?: Array<{
          /** Pool id (UUID). Same id space as the v1 yields API pool field. */
          id?: string;
          /** Stable pool key. */
          pool_key?: string;
          /** Receipt / vault token representing the position; null when the pool has no transferable pool token */
          pool_token?: {
            /** address returned by DeFiLlama. */
            address?: string;
            /** symbol returned by DeFiLlama. */
            symbol?: string | null;
            /** name returned by DeFiLlama. */
            name?: string | null;
            [key: string]: unknown;
          } | null;
          /** Display strings for listings */
          display?: {
            /** label returned by DeFiLlama. */
            label?: string | null;
            /** detail returned by DeFiLlama. */
            detail?: string | null;
            [key: string]: unknown;
          };
          /** The asset you provide to enter the pool (e.g. ETH, USDC, BTC) */
          reference_asset_symbol?: string | null;
          /** Pool page on the protocol app */
          url?: string | null;
          /** Protocol display name */
          protocol?: string;
          /** Chain display name */
          chain?: string;
          /** Tokens deposited into the pool */
          underlying_tokens?: Array<{
            /** address returned by DeFiLlama. */
            address?: string;
            /** symbol returned by DeFiLlama. */
            symbol?: string | null;
            /** decimals returned by DeFiLlama. */
            decimals?: number | null;
            [key: string]: unknown;
          }>;
          /** Incentive tokens currently emitted to the pool; empty when there are none */
          reward_tokens?: Array<{
            /** address returned by DeFiLlama. */
            address?: string;
            /** symbol returned by DeFiLlama. */
            symbol?: string | null;
            /** decimals returned by DeFiLlama. */
            decimals?: number | null;
            [key: string]: unknown;
          }>;
          /** Total value locked in USD */
          tvl_usd?: number | null;
          /** Supply APY in percent, attributed into base (organic) and reward (incentive emissions) components */
          apy?: {
            /** Latest observed values */
            current?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base plus reward, in percent */
              total?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 7-day average */
            avg_7d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base plus reward, in percent */
              total?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 30-day average */
            avg_30d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base plus reward, in percent */
              total?: number | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Yield accruing inside a yield-bearing underlying token, e.g. the stETH staking yield inside a wstETH pool. Intrinsic yield is reported separately and is NOT included in the base/reward/total APY. Null when there is no intrinsic yield source. */
          intrinsic?: {
            /** Intrinsic APY in percent */
            apy?: {
              /** Latest observed value */
              current?: {
                /** base returned by DeFiLlama. */
                base?: number | null;
                [key: string]: unknown;
              };
              /** Trailing 7-day average */
              avg_7d?: {
                /** base returned by DeFiLlama. */
                base?: number | null;
                [key: string]: unknown;
              };
              /** Trailing 30-day average */
              avg_30d?: {
                /** base returned by DeFiLlama. */
                base?: number | null;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            /** source_pool returned by DeFiLlama. */
            source_pool?: {
              /** Earn pool the intrinsic yield is sourced from */
              id?: string;
              /** Address of the yield-bearing token */
              pool_token?: string;
              /** symbol returned by DeFiLlama. */
              symbol?: string | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | null;
          /** Stability score (0 to 1) of the trailing 30-day APY series, computed as 1 / (1 + coefficient of variation); higher is steadier. Keyed by APY composition: read the leaf matching the APY components you consume (base, base + reward, base + intrinsic, base + reward + intrinsic). */
          stability_30d?: {
            /** base returned by DeFiLlama. */
            base?: number | null;
            /** base_reward returned by DeFiLlama. */
            base_reward?: number | null;
            /** base_intrinsic returned by DeFiLlama. */
            base_intrinsic?: number | null;
            /** base_reward_intrinsic returned by DeFiLlama. */
            base_reward_intrinsic?: number | null;
            [key: string]: unknown;
          };
          /** Pool token price per share for vault-style pools; null otherwise */
          price_per_share?: number | null;
          /** Trailing 24h trading volume in USD for DEX pools; null otherwise */
          volume_1d_usd?: number | null;
          /** Boolean attributes, also available as filters on /yields/v2/earn/query */
          attributes?: {
            /** All pool assets are stablecoins */
            stablecoin_only?: boolean;
            /** Position is exposed to a single asset */
            single_asset_exposure?: boolean;
            /** Position can suffer impermanent loss */
            impermanent_loss_risk?: boolean;
            [key: string]: unknown;
          };
          /** Pool token holder statistics; values are null where holder data is not tracked */
          holders?: {
            /** Number of pool token holders */
            count?: number | null;
            /** Average position size in USD */
            avg_position_usd?: number | null;
            /** Share of supply held by the top 10 holders, in percent */
            top_10_share_pct?: number | null;
            [key: string]: unknown;
          };
          /** Remaining deposit capacity in USD for lending pools with a supply cap (cap minus TVL, floored at 0); null when the pool has no cap */
          available_supply_usd?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve daily history for an earn pool. Daily TVL, attributed APY and price per share for one earn pool, oldest first. APY carries `avg_1d` (that day), `avg_7d` and `avg_30d` (trailing averages ending that day) windows, each attributed into base/reward/total. Requires an API plan key. */
    "defillama.get_yields_v2_earn_by_id_history": {
      input: {
        /**
         * Earn pool id (UUID)
         * @minLength 1
         */
        id: string;
        /** History window; defaults to max (the full series) */
        range?: "30d" | "90d" | "max";
      };
      output: {
        /** data returned by DeFiLlama. */
        data?: Array<{
          /** Day (UTC) */
          date?: string;
          /** Total value locked in USD at that day */
          tvl_usd?: number | null;
          /** Supply APY in percent, attributed into base (organic) and reward (incentive emissions) components */
          apy?: {
            /** Average over that day */
            avg_1d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base plus reward, in percent */
              total?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 7-day average */
            avg_7d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base plus reward, in percent */
              total?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 30-day average */
            avg_30d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base plus reward, in percent */
              total?: number | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Intrinsic yield of a yield-bearing underlying token. Intrinsic yield is reported separately and is NOT included in the base/reward/total APY. Null when there is no intrinsic yield source. */
          intrinsic?: {
            /** Intrinsic APY in percent */
            apy?: {
              /** Average over that day */
              avg_1d?: {
                /** base returned by DeFiLlama. */
                base?: number | null;
                [key: string]: unknown;
              };
              /** Trailing 7-day average */
              avg_7d?: {
                /** base returned by DeFiLlama. */
                base?: number | null;
                [key: string]: unknown;
              };
              /** Trailing 30-day average */
              avg_30d?: {
                /** base returned by DeFiLlama. */
                base?: number | null;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | null;
          /** Pool token price per share for vault-style pools; null otherwise */
          price_per_share?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve a filtered, paginated page of earn pools. Same rows as `/yields/v2/earn`, filtered and paginated server-side while keeping the TVL-descending order. All filters combine with AND; `chain` and `protocol` may be repeated to match any of up to 20 values. Unknown query parameters and out-of-range values are rejected with `400 INVALID_QUERY_PARAM`. Without parameters the top 100 pools by TVL are returned. Requires an API plan key. */
    "defillama.get_yields_v2_earn_query": {
      input: {
        /**
         * Chain slug (lowercase). Repeat the parameter to match any of several chains, e.g. chain=ethereum&chain=arbitrum (at most 20 values)
         * @minItems 1
         * @maxItems 20
         */
        chain?: Array<string>;
        /**
         * Protocol slug (lowercase, e.g. aave-v3). Repeat the parameter to match any of several protocols (at most 20 values)
         * @minItems 1
         * @maxItems 20
         */
        protocol?: Array<string>;
        /** true keeps only pools whose assets are all stablecoins, false only the rest */
        stablecoin?: boolean;
        /** true keeps only pools exposed to a single asset, false only the rest */
        single_asset_exposure?: boolean;
        /** true keeps only pools with impermanent loss risk, false only the rest */
        impermanent_loss_risk?: boolean;
        /** Minimum pool TVL in USD (inclusive) */
        min_tvl?: number;
        /**
         * 1-based page number; default 1
         * @minimum 1
         */
        page?: number;
        /**
         * Page size between 1 and 300; default 100. Values above 300 are rejected, not clamped
         * @minimum 1
         * @maximum 300
         */
        limit?: number;
      };
      output: {
        /** data returned by DeFiLlama. */
        data?: Array<{
          /** Pool id (UUID). Same id space as the v1 yields API pool field. */
          id?: string;
          /** Stable pool key. */
          pool_key?: string;
          /** Receipt / vault token representing the position; null when the pool has no transferable pool token */
          pool_token?: {
            /** address returned by DeFiLlama. */
            address?: string;
            /** symbol returned by DeFiLlama. */
            symbol?: string | null;
            /** name returned by DeFiLlama. */
            name?: string | null;
            [key: string]: unknown;
          } | null;
          /** Display strings for listings */
          display?: {
            /** label returned by DeFiLlama. */
            label?: string | null;
            /** detail returned by DeFiLlama. */
            detail?: string | null;
            [key: string]: unknown;
          };
          /** The asset you provide to enter the pool (e.g. ETH, USDC, BTC) */
          reference_asset_symbol?: string | null;
          /** Pool page on the protocol app */
          url?: string | null;
          /** Protocol display name */
          protocol?: string;
          /** Chain display name */
          chain?: string;
          /** Tokens deposited into the pool */
          underlying_tokens?: Array<{
            /** address returned by DeFiLlama. */
            address?: string;
            /** symbol returned by DeFiLlama. */
            symbol?: string | null;
            /** decimals returned by DeFiLlama. */
            decimals?: number | null;
            [key: string]: unknown;
          }>;
          /** Incentive tokens currently emitted to the pool; empty when there are none */
          reward_tokens?: Array<{
            /** address returned by DeFiLlama. */
            address?: string;
            /** symbol returned by DeFiLlama. */
            symbol?: string | null;
            /** decimals returned by DeFiLlama. */
            decimals?: number | null;
            [key: string]: unknown;
          }>;
          /** Total value locked in USD */
          tvl_usd?: number | null;
          /** Supply APY in percent, attributed into base (organic) and reward (incentive emissions) components */
          apy?: {
            /** Latest observed values */
            current?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base plus reward, in percent */
              total?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 7-day average */
            avg_7d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base plus reward, in percent */
              total?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 30-day average */
            avg_30d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base plus reward, in percent */
              total?: number | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Yield accruing inside a yield-bearing underlying token, e.g. the stETH staking yield inside a wstETH pool. Intrinsic yield is reported separately and is NOT included in the base/reward/total APY. Null when there is no intrinsic yield source. */
          intrinsic?: {
            /** Intrinsic APY in percent */
            apy?: {
              /** Latest observed value */
              current?: {
                /** base returned by DeFiLlama. */
                base?: number | null;
                [key: string]: unknown;
              };
              /** Trailing 7-day average */
              avg_7d?: {
                /** base returned by DeFiLlama. */
                base?: number | null;
                [key: string]: unknown;
              };
              /** Trailing 30-day average */
              avg_30d?: {
                /** base returned by DeFiLlama. */
                base?: number | null;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            /** source_pool returned by DeFiLlama. */
            source_pool?: {
              /** Earn pool the intrinsic yield is sourced from */
              id?: string;
              /** Address of the yield-bearing token */
              pool_token?: string;
              /** symbol returned by DeFiLlama. */
              symbol?: string | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | null;
          /** Stability score (0 to 1) of the trailing 30-day APY series, computed as 1 / (1 + coefficient of variation); higher is steadier. Keyed by APY composition: read the leaf matching the APY components you consume (base, base + reward, base + intrinsic, base + reward + intrinsic). */
          stability_30d?: {
            /** base returned by DeFiLlama. */
            base?: number | null;
            /** base_reward returned by DeFiLlama. */
            base_reward?: number | null;
            /** base_intrinsic returned by DeFiLlama. */
            base_intrinsic?: number | null;
            /** base_reward_intrinsic returned by DeFiLlama. */
            base_reward_intrinsic?: number | null;
            [key: string]: unknown;
          };
          /** Pool token price per share for vault-style pools; null otherwise */
          price_per_share?: number | null;
          /** Trailing 24h trading volume in USD for DEX pools; null otherwise */
          volume_1d_usd?: number | null;
          /** Boolean attributes, also available as filters on /yields/v2/earn/query */
          attributes?: {
            /** All pool assets are stablecoins */
            stablecoin_only?: boolean;
            /** Position is exposed to a single asset */
            single_asset_exposure?: boolean;
            /** Position can suffer impermanent loss */
            impermanent_loss_risk?: boolean;
            [key: string]: unknown;
          };
          /** Pool token holder statistics; values are null where holder data is not tracked */
          holders?: {
            /** Number of pool token holders */
            count?: number | null;
            /** Average position size in USD */
            avg_position_usd?: number | null;
            /** Share of supply held by the top 10 holders, in percent */
            top_10_share_pct?: number | null;
            [key: string]: unknown;
          };
          /** Remaining deposit capacity in USD for lending pools with a supply cap (cap minus TVL, floored at 0); null when the pool has no cap */
          available_supply_usd?: number | null;
          [key: string]: unknown;
        }>;
        /** pagination returned by DeFiLlama. */
        pagination?: {
          /** Total number of rows matching the filters, across all pages */
          total?: number;
          /** page returned by DeFiLlama. */
          page?: number;
          /** limit returned by DeFiLlama. */
          limit?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve the latest verified data for all measured earn pools. Measured yield for the `/yields/v2/earn` pools we simulate, sorted by verified TVL descending. Each figure is replayed from a real holder's withdrawal against archive state, so it shows what an exit would have paid rather than what the protocol reports; the two can disagree without either being wrong. APY is always the base leg, since a withdrawal cannot see reward emissions, and is unclamped, so it can be negative. A pool appears here only while it is listed on `/yields/v2/earn`, is not withheld for review, and has at least one measured day; join on `id`. Requires an API plan key. */
    "defillama.get_yields_v2_earn_verified": {
      input: Record<string, never>;
      output: {
        /** data returned by DeFiLlama. */
        data?: Array<{
          /** Pool id (UUID); joins to `/yields/v2/earn` */
          id?: string;
          /** Measured base APY in percent. Base only, since a withdrawal cannot see reward emissions, and unclamped, so it can be negative. All three windows end at `apy_as_of`. */
          apy?: {
            /** Trailing 1-day average */
            avg_1d?: number | null;
            /** Trailing 7-day average */
            avg_7d?: number | null;
            /** Trailing 30-day average */
            avg_30d?: number | null;
            [key: string]: unknown;
          };
          /** Timestamp the APY windows end at */
          apy_as_of?: string | null;
          /** Why the APY is absent or qualified. Show it wherever the APY renders blank; null for most pools. */
          apy_note?: string | null;
          /** How closely independent holders agreed on the redemption rate. Grades the measurement, not the pool. */
          apy_confidence?: "high" | "medium" | "low" | "conflict" | null;
          /** Exit health from the most recent simulated withdrawal. */
          exit?: {
            /** What a withdrawal would do today: `instant` all of it leaves now, `queued` accepted but paid later, `partial` bounded by `exit_liquidity`, `depleted` the lane is dust (under 0.1% of TVL and under $10k), `unavailable` nothing was accepted, `blocked` reverted as paused or unrecognized. Null when unclassified. */
            status?: "instant" | "queued" | "partial" | "depleted" | "unavailable" | "blocked" | null;
            /** Wait before a queued withdrawal can be claimed. Only set while `status` is `queued`. */
            eta_seconds?: number | null;
            /** Hidden exit fee: median discount against the reported rate over the last 30 discount observations. Null when never observed, never a claimed zero. */
            fee_bps?: number | null;
            /** Timestamp of the exit observation */
            as_of?: string | null;
            [key: string]: unknown;
          };
          /** Funded exit capacity, not backing inventory; for queued pools this is the on-chain funding buffer, not instant liquidity. Null means no on-chain capacity is exposed, not zero. */
          exit_liquidity?: {
            /** Raw base units of `denomination`, as a decimal string; parse with BigInt, not Number. */
            amount?: string | null;
            /** Capacity in USD. Null when `denomination` is, since the conversion needs its decimals. */
            usd?: number | null;
            /** Price impact of the simulated exit, in basis points */
            slippage_bps?: number | null;
            /** Day (UTC) the capacity was measured */
            as_of?: string | null;
            [key: string]: unknown;
          };
          /** Receipt supply priced at the rate an exit actually paid, not the reported figure. */
          tvl?: {
            /** Receipt supply at the executed redemption rate. Raw base units of `denomination`, as a decimal string; parse with BigInt, not Number. */
            amount?: string | null;
            /** Verified TVL in USD. Null when `denomination` is. */
            usd?: number | null;
            /** Day (UTC) the TVL was measured */
            as_of?: string | null;
            [key: string]: unknown;
          };
          /** Underlying assets per position token, in human units. For rebasing tokens (aTokens, stETH) this is per internal share, so read it as a series normalized to its first point, not as an absolute. */
          price_per_share?: number | null;
          /** Asset an exit pays out, and the decimals its raw amounts use. Null when it could not be pinned; the USD fields go null with it, and you must not assume 18. */
          denomination?: {
            /** Payout token address */
            address?: string;
            /** Decimals of the payout token */
            decimals?: number | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve the latest verified data for one earn pool. The same row `/yields/v2/earn/verified` serves for this pool, plus `methods`: the on-chain calls the simulation executes, in order. Requires an API plan key. */
    "defillama.get_yields_v2_earn_verified_by_id": {
      input: {
        /**
         * Earn pool id (UUID)
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** data returned by DeFiLlama. */
        data?: {
          /** Pool id (UUID); joins to `/yields/v2/earn` */
          id?: string;
          /** Measured base APY in percent. Base only, since a withdrawal cannot see reward emissions, and unclamped, so it can be negative. All three windows end at `apy_as_of`. */
          apy?: {
            /** Trailing 1-day average */
            avg_1d?: number | null;
            /** Trailing 7-day average */
            avg_7d?: number | null;
            /** Trailing 30-day average */
            avg_30d?: number | null;
            [key: string]: unknown;
          };
          /** Timestamp the APY windows end at */
          apy_as_of?: string | null;
          /** Why the APY is absent or qualified. Show it wherever the APY renders blank; null for most pools. */
          apy_note?: string | null;
          /** How closely independent holders agreed on the redemption rate. Grades the measurement, not the pool. */
          apy_confidence?: "high" | "medium" | "low" | "conflict" | null;
          /** Exit health from the most recent simulated withdrawal. */
          exit?: {
            /** What a withdrawal would do today: `instant` all of it leaves now, `queued` accepted but paid later, `partial` bounded by `exit_liquidity`, `depleted` the lane is dust (under 0.1% of TVL and under $10k), `unavailable` nothing was accepted, `blocked` reverted as paused or unrecognized. Null when unclassified. */
            status?: "instant" | "queued" | "partial" | "depleted" | "unavailable" | "blocked" | null;
            /** Wait before a queued withdrawal can be claimed. Only set while `status` is `queued`. */
            eta_seconds?: number | null;
            /** Hidden exit fee: median discount against the reported rate over the last 30 discount observations. Null when never observed, never a claimed zero. */
            fee_bps?: number | null;
            /** Timestamp of the exit observation */
            as_of?: string | null;
            [key: string]: unknown;
          };
          /** Funded exit capacity, not backing inventory; for queued pools this is the on-chain funding buffer, not instant liquidity. Null means no on-chain capacity is exposed, not zero. */
          exit_liquidity?: {
            /** Raw base units of `denomination`, as a decimal string; parse with BigInt, not Number. */
            amount?: string | null;
            /** Capacity in USD. Null when `denomination` is, since the conversion needs its decimals. */
            usd?: number | null;
            /** Price impact of the simulated exit, in basis points */
            slippage_bps?: number | null;
            /** Day (UTC) the capacity was measured */
            as_of?: string | null;
            [key: string]: unknown;
          };
          /** Receipt supply priced at the rate an exit actually paid, not the reported figure. */
          tvl?: {
            /** Receipt supply at the executed redemption rate. Raw base units of `denomination`, as a decimal string; parse with BigInt, not Number. */
            amount?: string | null;
            /** Verified TVL in USD. Null when `denomination` is. */
            usd?: number | null;
            /** Day (UTC) the TVL was measured */
            as_of?: string | null;
            [key: string]: unknown;
          };
          /** Underlying assets per position token, in human units. For rebasing tokens (aTokens, stETH) this is per internal share, so read it as a series normalized to its first point, not as an absolute. */
          price_per_share?: number | null;
          /** Asset an exit pays out, and the decimals its raw amounts use. Null when it could not be pinned; the USD fields go null with it, and you must not assume 18. */
          denomination?: {
            /** Payout token address */
            address?: string;
            /** Decimals of the payout token */
            decimals?: number | null;
            [key: string]: unknown;
          } | null;
          /** On-chain calls the simulation executes, in order. Null when not recorded. */
          methods?: Array<string> | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve daily verified history for an earn pool. Daily measured APY, share price, verified TVL and exit health for one pool, oldest first. APY carries `avg_1d` (that day), `avg_7d` and `avg_30d` (trailing averages ending that day). Days the pool was not measured are omitted, so the dates are not contiguous. Every `range` is sliced from the same cached series. Requires an API plan key. */
    "defillama.get_yields_v2_earn_verified_by_id_history": {
      input: {
        /**
         * Earn pool id (UUID)
         * @minLength 1
         */
        id: string;
        /** History window; defaults to max (the full series) */
        range?: "30d" | "90d" | "max";
      };
      output: {
        /** data returned by DeFiLlama. */
        data?: Array<{
          /** Day (UTC) */
          date?: string;
          /** Raw measurement outcome for that day, the uninterpreted form of `exit.status`. The `reverted_*` values are days a real withdrawal would have failed. */
          outcome?: "ok_full" | "ok_partial" | "delayed" | "no_exit_primary" | "reverted_liquidity" | "reverted_paused" | "reverted_unknown" | "error_rpc" | null;
          /** Wait before that day's queued withdrawal could be claimed. Only set when `outcome` is `delayed`. */
          eta_seconds?: number | null;
          /** Holder-consensus confidence in that day's measurement */
          confidence?: "high" | "medium" | "low" | "conflict" | null;
          /** Measured base APY in percent. Base only, since a withdrawal cannot see reward emissions, and unclamped, so it can be negative. */
          apy?: {
            /** Average over that day */
            avg_1d?: number | null;
            /** Trailing 7-day average ending that day */
            avg_7d?: number | null;
            /** Trailing 30-day average ending that day */
            avg_30d?: number | null;
            [key: string]: unknown;
          };
          /** Underlying assets per position token, in human units. For rebasing tokens (aTokens, stETH) this is per internal share, so read it as a series normalized to its first point, not as an absolute. */
          price_per_share?: number | null;
          /** The pool's reported price, for days the executed exit could not price one. A quote, not a measurement, so mark it differently in a chart. Null unless corroborated. */
          price_per_share_quoted?: number | null;
          /** Why `price_per_share` is null on a day that was otherwise measured; null when it is present. */
          reason?: "rate_quality_floor" | "nav_quote_no_exit_path" | "no_executed_exit_path" | null;
          /** Funded exit capacity, not backing inventory; for queued pools this is the on-chain funding buffer, not instant liquidity. Null means no on-chain capacity is exposed, not zero. */
          exit_liquidity?: {
            /** Raw base units of `denomination`, as a decimal string; parse with BigInt, not Number. */
            amount?: string | null;
            /** Capacity in USD. Null when `denomination` is, since the conversion needs its decimals. */
            usd?: number | null;
            /** Price impact of the simulated exit, in basis points */
            slippage_bps?: number | null;
            [key: string]: unknown;
          };
          /** Receipt supply priced at the rate an exit actually paid, not the reported figure. */
          tvl?: {
            /** Receipt supply at the executed redemption rate. Raw base units of `denomination`, as a decimal string; parse with BigInt, not Number. */
            amount?: string | null;
            /** Verified TVL in USD. Null when `denomination` is. */
            usd?: number | null;
            [key: string]: unknown;
          };
          /** Supply valued at the reported rate, for the days `tvl` is null. A valuation, not an exit measure. */
          tvl_quoted?: {
            /** Raw base units of `denomination`, as a decimal string; parse with BigInt, not Number. */
            amount?: string | null;
            /** Quoted valuation in USD */
            usd?: number | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve the latest data for all loop strategies. Leveraged looping opportunities: supply a token, borrow against it and re-supply, repeated `loop_count` times at the market maximum loan-to-value. `loop_apy.total` is the resulting net APY at that leverage; `leverage` reports the accumulated supply and borrow multipliers relative to the initial capital. Borrow reward emissions offset the borrowing cost, so looped APY can exceed the plain supply APY substantially. Requires an API plan key. */
    "defillama.get_yields_v2_loops": {
      input: Record<string, never>;
      output: {
        /** data returned by DeFiLlama. */
        data?: Array<{
          /** Collateral pool id (UUID) */
          id?: string;
          /** Display strings for listings */
          display?: {
            /** Market variant label; null when there is only one market */
            detail?: string | null;
            [key: string]: unknown;
          };
          /** Protocol display name */
          protocol?: string;
          /** Chain display name */
          chain?: string;
          /** Token being looped (supplied and borrowed) */
          token?: {
            /** address returned by DeFiLlama. */
            address?: string;
            /** symbol returned by DeFiLlama. */
            symbol?: string | null;
            /** decimals returned by DeFiLlama. */
            decimals?: number | null;
            [key: string]: unknown;
          };
          /** Market page on the protocol app */
          url?: string | null;
          /** Maximum loan-to-value as a fraction (0.7 = 70%) */
          loan_to_value?: number | null;
          /** Total supplied to the market, in USD */
          total_supply_usd?: number | null;
          /** Total borrowed from the market, in USD */
          total_borrow_usd?: number | null;
          /** Liquidity still available to borrow, in USD */
          available_borrow_usd?: number | null;
          /** Unlevered supply APY in percent */
          supply_apy?: {
            /** Latest observed values */
            current?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base plus reward, in percent */
              total?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 7-day average */
            avg_7d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base plus reward, in percent */
              total?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 30-day average */
            avg_30d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base plus reward, in percent */
              total?: number | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Borrow cost APY in percent. Reward emissions reduce the cost, so total = base - reward and can be negative */
          borrow_cost_apy?: {
            /** Latest observed values */
            current?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base minus reward, in percent; negative means the borrower is net paid */
              total?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 7-day average */
            avg_7d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base minus reward, in percent; negative means the borrower is net paid */
              total?: number | null;
              [key: string]: unknown;
            };
            /** Trailing 30-day average */
            avg_30d?: {
              /** Organic APY in percent, excluding incentive rewards */
              base?: number | null;
              /** APY in percent from incentive token emissions; null when there are none */
              reward?: number | null;
              /** base minus reward, in percent; negative means the borrower is net paid */
              total?: number | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Looped position APY */
          loop_apy?: {
            /** Number of borrow/re-supply iterations */
            loop_count?: number | null;
            /** Net APY in percent of the looped position at loop_count iterations */
            total?: number | null;
            [key: string]: unknown;
          };
          /** Accumulated leverage after loop_count iterations */
          leverage?: {
            /** Total supplied relative to initial capital */
            supply_multiplier?: number | null;
            /** Total borrowed relative to initial capital */
            borrow_multiplier?: number | null;
            [key: string]: unknown;
          };
          /** Intrinsic yield of the looped token. Intrinsic yield is reported separately and is NOT included in the base/reward/total APY. Null when there is no intrinsic yield source. */
          intrinsic?: {
            /** Intrinsic APY in percent */
            apy?: {
              /** Latest observed value */
              current?: {
                /** base returned by DeFiLlama. */
                base?: number | null;
                [key: string]: unknown;
              };
              /** Trailing 7-day average */
              avg_7d?: {
                /** base returned by DeFiLlama. */
                base?: number | null;
                [key: string]: unknown;
              };
              /** Trailing 30-day average */
              avg_30d?: {
                /** base returned by DeFiLlama. */
                base?: number | null;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            /** source_pool returned by DeFiLlama. */
            source_pool?: {
              /** Earn pool the intrinsic yield is sourced from */
              id?: string;
              /** Address of the yield-bearing token */
              pool_token?: string;
              /** symbol returned by DeFiLlama. */
              symbol?: string | null;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | null;
          /** Incentive tokens per market side; empty arrays when there are none */
          reward_tokens?: {
            /** Incentive tokens emitted to the supply side */
            supply?: Array<{
              /** address returned by DeFiLlama. */
              address?: string;
              /** symbol returned by DeFiLlama. */
              symbol?: string | null;
              /** decimals returned by DeFiLlama. */
              decimals?: number | null;
              [key: string]: unknown;
            }>;
            /** Incentive tokens emitted to the borrow side */
            borrow?: Array<{
              /** address returned by DeFiLlama. */
              address?: string;
              /** symbol returned by DeFiLlama. */
              symbol?: string | null;
              /** decimals returned by DeFiLlama. */
              decimals?: number | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
