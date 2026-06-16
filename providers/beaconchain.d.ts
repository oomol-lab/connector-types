import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get aggregated Beaconcha.in network performance metrics for a fixed evaluation window. */
    "beaconchain.get_network_performance": {
      input: {
        /** The Ethereum chain to query. */
        chain?: "mainnet" | "hoodi";
        /** The fixed evaluation window used for network performance aggregation. */
        evaluationWindow: "24h" | "7d" | "30d" | "90d" | "all_time";
      };
      output: {
        /** The normalized network performance payload. */
        performance: {
          /** The finality status returned for the requested range. */
          finality: string;
          /** The beacon score summary. */
          beaconScore: {
            /** The overall beacon score. */
            total: number;
            /** The attestation beacon score. */
            attestation: number;
            /** The proposal beacon score. */
            proposal: number;
            /** The sync committee beacon score. */
            syncCommittee: number;
          };
          /** The grouped duty metrics. */
          duties: {
            /** The attestation duty metrics. */
            attestation: {
              /** The number of included attestations. */
              included: number;
              /** The number of assigned attestations. */
              assigned: number;
              /** The number of correct head votes. */
              correctHead: number;
              /** The number of correct source votes. */
              correctSource: number;
              /** The number of correct target votes. */
              correctTarget: number;
              /** The number of valuable correct head votes. */
              valuableCorrectHead: number;
              /** The number of valuable correct source votes. */
              valuableCorrectSource: number;
              /** The number of valuable correct target votes. */
              valuableCorrectTarget: number;
              /** The average inclusion delay across all returned attestations. */
              avgInclusionDelay: number;
              /** The average inclusion delay excluding missed slots. */
              avgInclusionDelayExcludingMissedSlots: number;
              /** The number of missed attestations. */
              missed: number;
            };
            /** The sync committee duty metrics. */
            syncCommittee: {
              /** The number of successful sync committee duties. */
              successful: number;
              /** The number of assigned sync committee duties. */
              assigned: number;
              /** The number of missed sync committee duties. */
              missed: number;
              /** The number of scheduled sync committee duties. */
              scheduled: number;
            };
            /** The proposal duty metrics. */
            proposal: {
              /** The number of successful proposal duties. */
              successful: number;
              /** The number of assigned proposal duties. */
              assigned: number;
              /** The number of missed proposal duties. */
              missed: number;
              /** The number of slashings included by proposal duties. */
              includedSlashings: number;
            };
          };
        };
        /** The range covered by the requested performance summary. */
        range: {
          /** The covered slot range. */
          slot: {
            /** The inclusive start value of the covered range. */
            start: number;
            /** The inclusive end value of the covered range. */
            end: number;
          };
          /** The covered epoch range. */
          epoch: {
            /** The inclusive start value of the covered range. */
            start: number;
            /** The inclusive end value of the covered range. */
            end: number;
          };
          /** The covered Unix timestamp range. */
          timestamp: {
            /** The inclusive start value of the covered range. */
            start: number;
            /** The inclusive end value of the covered range. */
            end: number;
          };
        };
      };
    };
    /** Get the current staking queue metrics for the requested Beaconcha.in chain. */
    "beaconchain.get_staking_queues": {
      input: {
        /** The Ethereum chain to query. */
        chain?: "mainnet" | "hoodi";
      };
      output: {
        /** The normalized staking queue metrics. */
        queues: {
          /** The current finality status of the network. */
          finality: string;
          /** The deposit queue metrics. */
          depositQueue: {
            /** The activation churn limit in wei. */
            churnWei: string;
            /** The number of validators waiting for activation. */
            depositCount: number;
            /** The aggregate balance of the deposit queue in wei. */
            balanceWei: string;
            /** The estimated Unix timestamp when the deposit queue will be processed. */
            estimatedProcessedAt: number;
          };
          /** The exit queue metrics. */
          exitQueue: {
            /** The exit churn limit in wei. */
            churnWei: string;
            /** The number of validators waiting to exit. */
            count: number;
            /** The aggregate balance of the exit queue in wei. */
            balanceWei: string;
            /** The estimated Unix timestamp when the exit queue will be processed. */
            estimatedProcessedAt: number;
          };
          /** The withdrawal sweep metrics. */
          withdrawalSweep: {
            /** The last validator index that was swept for withdrawals. */
            lastSweptValidatorIndex: number;
            /** The estimated delay in seconds before a withdrawal sweep is completed. */
            estimatedSweepDelay: number;
          };
        };
      };
    };
    /** Get the current validator snapshot for a single validator identifier. */
    "beaconchain.get_validator": {
      input: {
        /** The Ethereum chain to query. */
        chain?: "mainnet" | "hoodi";
        /** A validator identifier accepted by Beaconcha.in. */
        validatorIdentifier: number | string;
      };
      output: {
        /** The normalized validator summary. */
        validator: {
          /** The validator index. */
          validatorIndex: number;
          /** The validator public key. */
          publicKey: string;
          /** Whether the validator has been slashed. */
          slashed: boolean;
          /** The current validator status. */
          status: string;
          /** Whether the validator is currently online. */
          online: boolean;
          /** The finality mode used by the returned validator snapshot. */
          finality: string;
          /** The normalized validator balances. */
          balances: {
            /** The current validator balance in gwei. */
            currentGwei: string;
            /** The effective validator balance in gwei. */
            effectiveGwei: string;
          };
          /** The normalized withdrawal credentials. */
          withdrawalCredentials: {
            /** The withdrawal credential type. */
            type: string;
            /** The withdrawal credential prefix. */
            prefix: string;
            /** The normalized withdrawal credential body. */
            credential: string;
            /** The resolved withdrawal address when present. */
            address: string | null;
          };
          /** The validator lifecycle epochs. */
          lifeCycleEpochs: {
            /** The activation eligibility epoch of the validator. */
            activationEligibility: number;
            /** The activation epoch of the validator. */
            activation: number;
            /** The exit epoch of the validator. */
            exit: number;
            /** The withdrawable epoch of the validator. */
            withdrawable: number;
          };
        };
        /** The range covered by the validator snapshot. */
        range: {
          /** The covered slot range. */
          slot: {
            /** The inclusive start value of the covered range. */
            start: number;
            /** The inclusive end value of the covered range. */
            end: number;
          };
          /** The covered epoch range. */
          epoch: {
            /** The inclusive start value of the covered range. */
            start: number;
            /** The inclusive end value of the covered range. */
            end: number;
          };
          /** The covered Unix timestamp range. */
          timestamp: {
            /** The inclusive start value of the covered range. */
            start: number;
            /** The inclusive end value of the covered range. */
            end: number;
          };
        };
      };
    };
    /** Get per-validator reward breakdowns for a finalized Beaconcha.in epoch. */
    "beaconchain.get_validator_consensus_rewards": {
      input: {
        /** The Ethereum chain to query. */
        chain?: "mainnet" | "hoodi";
        /**
         * Ordered list of validator identifiers used to filter the result.
         * @minItems 1
         * @maxItems 100
         */
        validatorIdentifiers: Array<number | string>;
        /**
         * The finalized epoch used for reward breakdown queries.
         * @minimum 0
         */
        epoch?: number;
        /**
         * The pagination cursor returned by a previous call.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to return per page.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The validator rewards returned for the requested epoch. */
        rewards: Array<{
          /** The validator index. */
          validatorIndex: number;
          /** The validator public key. */
          publicKey: string;
          /** The net reward total in gwei. */
          totalGwei: string;
          /** The gross reward total in gwei. */
          totalRewardGwei: string;
          /** The penalty total in gwei. */
          totalPenaltyGwei: string;
        }>;
        /** The range covered by the reward snapshot. */
        range: {
          /** The covered slot range. */
          slot: {
            /** The inclusive start value of the covered range. */
            start: number;
            /** The inclusive end value of the covered range. */
            end: number;
          };
          /** The covered epoch range. */
          epoch: {
            /** The inclusive start value of the covered range. */
            start: number;
            /** The inclusive end value of the covered range. */
            end: number;
          };
          /** The covered Unix timestamp range. */
          timestamp: {
            /** The inclusive start value of the covered range. */
            start: number;
            /** The inclusive end value of the covered range. */
            end: number;
          };
        };
        /** The pagination metadata returned by the reward query. */
        paging: {
          /** The cursor used to fetch the next page. */
          nextCursor: string | null;
          /** The cursor used to fetch the previous page. */
          previousCursor: string | null;
          /** The number of items returned per page. */
          pageSize: number;
        };
      };
    };
    /** List the current validator snapshots for one or more validator identifiers. */
    "beaconchain.list_validators": {
      input: {
        /** The Ethereum chain to query. */
        chain?: "mainnet" | "hoodi";
        /**
         * Ordered list of validator identifiers used to filter the result.
         * @minItems 1
         * @maxItems 100
         */
        validatorIdentifiers: Array<number | string>;
        /**
         * The pagination cursor returned by a previous call.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of items to return per page.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
      };
      output: {
        /** The ordered validators returned for the requested selector. */
        validators: Array<{
          /** The validator index. */
          validatorIndex: number;
          /** The validator public key. */
          publicKey: string;
          /** Whether the validator has been slashed. */
          slashed: boolean;
          /** The current validator status. */
          status: string;
          /** Whether the validator is currently online. */
          online: boolean;
          /** The finality mode used by the returned validator snapshot. */
          finality: string;
          /** The normalized validator balances. */
          balances: {
            /** The current validator balance in gwei. */
            currentGwei: string;
            /** The effective validator balance in gwei. */
            effectiveGwei: string;
          };
          /** The normalized withdrawal credentials. */
          withdrawalCredentials: {
            /** The withdrawal credential type. */
            type: string;
            /** The withdrawal credential prefix. */
            prefix: string;
            /** The normalized withdrawal credential body. */
            credential: string;
            /** The resolved withdrawal address when present. */
            address: string | null;
          };
          /** The validator lifecycle epochs. */
          lifeCycleEpochs: {
            /** The activation eligibility epoch of the validator. */
            activationEligibility: number;
            /** The activation epoch of the validator. */
            activation: number;
            /** The exit epoch of the validator. */
            exit: number;
            /** The withdrawable epoch of the validator. */
            withdrawable: number;
          };
        }>;
        /** The range covered by the validator snapshot. */
        range: {
          /** The covered slot range. */
          slot: {
            /** The inclusive start value of the covered range. */
            start: number;
            /** The inclusive end value of the covered range. */
            end: number;
          };
          /** The covered epoch range. */
          epoch: {
            /** The inclusive start value of the covered range. */
            start: number;
            /** The inclusive end value of the covered range. */
            end: number;
          };
          /** The covered Unix timestamp range. */
          timestamp: {
            /** The inclusive start value of the covered range. */
            start: number;
            /** The inclusive end value of the covered range. */
            end: number;
          };
        };
        /** The pagination metadata returned by the validator query. */
        paging: {
          /** The cursor used to fetch the next page. */
          nextCursor: string | null;
          /** The cursor used to fetch the previous page. */
          previousCursor: string | null;
          /** The number of items returned per page. */
          pageSize: number;
        };
      };
    };
  }
}
