import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one marketplace program by company key through the PartnerStack Partner API. */
    "partner_stack_partner.get_marketplace_program": {
      input: {
        /**
         * The PartnerStack company key of the marketplace program.
         * @minLength 1
         */
        company_key: string;
      };
      output: {
        /** A PartnerStack marketplace program. */
        program: {
          /** The numeric PartnerStack program identifier. */
          id?: number;
          /** The PartnerStack company or program key. */
          key: string;
          /** The marketplace program name. */
          name: string;
          /** The marketplace program website URL. */
          website?: string | null;
          /** The marketplace categories assigned to the program. */
          category?: Array<string> | null;
          /** The origin country of the marketplace program. */
          country?: string | null;
          /** The marketplace program description. */
          description?: string | null;
          /** The program creation time as an epoch millisecond timestamp. */
          created_at?: number;
          /** Whether the program uses sub IDs. */
          has_sub_id?: boolean;
          /** The PartnerStack file key for the program logo. */
          logo?: string | null;
          /** The raw PartnerStack Partner API object. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The PartnerStack response message. */
        message?: string;
        /** The PartnerStack response status code. */
        status?: number;
      };
    };
    /** List active marketplace programs available through the PartnerStack Partner API. */
    "partner_stack_partner.list_marketplace_programs": {
      input: {
        /** Only return programs created at or after this epoch millisecond timestamp. */
        min_created?: number;
        /** Only return programs created at or before this epoch millisecond timestamp. */
        max_created?: number;
        /**
         * Only return programs in this marketplace category.
         * @minLength 1
         */
        category?: string;
        /**
         * The number of items to request. PartnerStack allows 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * A cursor item key used to return the following page of list results.
         * @minLength 1
         */
        starting_after?: string;
        /**
         * A cursor item key used to return the previous page of list results.
         * @minLength 1
         */
        ending_before?: string;
      };
      output: {
        /** The marketplace programs returned for this page. */
        programs: Array<{
          /** The numeric PartnerStack program identifier. */
          id?: number;
          /** The PartnerStack company or program key. */
          key: string;
          /** The marketplace program name. */
          name: string;
          /** The marketplace program website URL. */
          website?: string | null;
          /** The marketplace categories assigned to the program. */
          category?: Array<string> | null;
          /** The origin country of the marketplace program. */
          country?: string | null;
          /** The marketplace program description. */
          description?: string | null;
          /** The program creation time as an epoch millisecond timestamp. */
          created_at?: number;
          /** Whether the program uses sub IDs. */
          has_sub_id?: boolean;
          /** The PartnerStack file key for the program logo. */
          logo?: string | null;
          /** The raw PartnerStack Partner API object. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** PartnerStack cursor pagination metadata. */
        page: {
          /** Whether more items are available after this result page. */
          has_more: boolean;
        };
        /** The PartnerStack response message. */
        message?: string;
        /** The PartnerStack response status code. */
        status?: number;
      };
    };
    /** List partnerships managed by or owned by the connected PartnerStack partner account. */
    "partner_stack_partner.list_partnerships": {
      input: {
        /** The partnership ordering expression. */
        order_by?: "-created_at" | "created_at" | "-updated_at" | "updated_at";
        /** Whether the program uses sub IDs. */
        has_sub_id?: "true" | "false" | "null";
        /** Whether to include offers in each partnership response. */
        include_offers?: boolean;
        /** Whether to include archived partnerships. */
        include_archived?: boolean;
        /**
         * The number of items to request. PartnerStack allows 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * A cursor item key used to return the following page of list results.
         * @minLength 1
         */
        starting_after?: string;
        /**
         * A cursor item key used to return the previous page of list results.
         * @minLength 1
         */
        ending_before?: string;
      };
      output: {
        /** The partnerships returned for this page. */
        partnerships: Array<{
          /** The PartnerStack partnership key. */
          key: string;
          /** The partnership creation time as an epoch millisecond timestamp. */
          created_at?: number;
          /** The partnership update time as an epoch millisecond timestamp. */
          updated_at?: number;
          /** Whether the partnership has been claimed. */
          claimed?: boolean;
          /** A PartnerStack company summary. */
          company?: {
            /** The numeric PartnerStack company identifier. */
            id?: number;
            /** The PartnerStack company key. */
            key?: string;
            /** The company name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Whether the program uses sub IDs. */
          has_sub_id?: boolean | null;
          /** The raw PartnerStack Partner API object. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** PartnerStack cursor pagination metadata. */
        page: {
          /** Whether more items are available after this result page. */
          has_more: boolean;
        };
        /** The PartnerStack response message. */
        message?: string;
        /** The PartnerStack response status code. */
        status?: number;
      };
    };
    /** List payouts for the connected PartnerStack partner account. */
    "partner_stack_partner.list_payouts": {
      input: {
        /** Only return payouts created at or after this epoch millisecond timestamp. */
        min_created?: number;
        /** Only return payouts created at or before this epoch millisecond timestamp. */
        max_created?: number;
        /** The payout ordering expression. */
        order_by?: "-created_at" | "created_at";
        /**
         * The number of items to request. PartnerStack allows 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * A cursor item key used to return the following page of list results.
         * @minLength 1
         */
        starting_after?: string;
        /**
         * A cursor item key used to return the previous page of list results.
         * @minLength 1
         */
        ending_before?: string;
      };
      output: {
        /** The payouts returned for this page. */
        payouts: Array<{
          /** The PartnerStack payout key. */
          key: string;
          /** The payout creation time as an epoch millisecond timestamp. */
          created_at?: number;
          /** The payout update time as an epoch millisecond timestamp. */
          updated_at?: number;
          /** The payout amount in cents. */
          amount?: number | null;
          /** The payout amount converted to USD cents. */
          amount_usd?: number | null;
          /** The payout currency code. */
          currency?: string | null;
          /** The payout lifecycle status. */
          status?: string | null;
          /** The PartnerStack payout payment provider details. */
          provider?: {
            /** The PartnerStack payment provider key. */
            key?: string;
            /** The external key assigned by the payment provider. */
            external_key?: string;
            /** The raw PartnerStack Partner API object. */
            meta?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** The raw PartnerStack Partner API object. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** PartnerStack cursor pagination metadata. */
        page: {
          /** Whether more items are available after this result page. */
          has_more: boolean;
        };
        /** The PartnerStack response message. */
        message?: string;
        /** The PartnerStack response status code. */
        status?: number;
      };
    };
    /** List rewards for the connected PartnerStack partner account. */
    "partner_stack_partner.list_rewards": {
      input: {
        /**
         * Only return rewards for this PartnerStack company key.
         * @minLength 1
         */
        company_key?: string;
        /** The reward payment status. */
        payment_status?: "in_transit" | "withdrawn" | "available" | "paid_externally" | "expired" | "failed" | "merging";
        /** Only return rewards created at or before this epoch millisecond timestamp. */
        max_created?: number;
        /** Only return rewards created at or after this epoch millisecond timestamp. */
        min_created?: number;
        /** The reward ordering expression. */
        order_by?: "-created_at" | "created_at" | "-amount" | "amount" | "-ready_at" | "ready_at";
        /**
         * Only return rewards for this PartnerStack group key.
         * @minLength 1
         */
        group_key?: string;
        /**
         * Only return rewards for this PartnerStack customer key.
         * @minLength 1
         */
        customer_key?: string;
        /**
         * Only return rewards for this PartnerStack invoice key.
         * @minLength 1
         */
        invoice_key?: string;
        /**
         * Only return rewards with this reward status.
         * @minLength 1
         */
        status?: string;
        /** Whether drip rewards should be excluded. */
        exclude_drip_rewards?: "true" | "false";
        /** Whether archived rewards should be hidden. */
        hide_archived_rewards?: boolean;
        /** Whether returned drip rewards must have an empty line ID. */
        empty_line_id?: boolean;
        /**
         * Free-text keywords used by PartnerStack to filter rewards.
         * @minLength 1
         */
        keywords?: string;
        /**
         * Only return rewards whose description contains this text.
         * @minLength 1
         */
        description?: string;
        /** Whether reward descriptions should be distinct. */
        distinct_description?: boolean;
        /** Whether reward decline reasons should be distinct. */
        distinct_decline_reason?: boolean;
        /**
         * The number of items to request. PartnerStack allows 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * A cursor item key used to return the following page of list results.
         * @minLength 1
         */
        starting_after?: string;
        /**
         * A cursor item key used to return the previous page of list results.
         * @minLength 1
         */
        ending_before?: string;
      };
      output: {
        /** The rewards returned for this page. */
        rewards: Array<{
          /** The PartnerStack reward key. */
          key: string;
          /** The reward creation time as an epoch millisecond timestamp. */
          created_at?: number;
          /** The reward update time as an epoch millisecond timestamp. */
          updated_at?: number;
          /** The reward amount in cents when returned by PartnerStack. */
          amount?: number | null;
          /** The reward amount converted to USD cents. */
          amount_usd?: number | null;
          /** The reward currency code. */
          currency?: string | null;
          /** The reward lifecycle status. */
          status?: string | null;
          /** The reward payment status. */
          payment_status?: string | null;
          /** The reward description. */
          description?: string | null;
          /** The raw PartnerStack Partner API object. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** PartnerStack cursor pagination metadata. */
        page: {
          /** Whether more items are available after this result page. */
          has_more: boolean;
        };
        /** The PartnerStack response message. */
        message?: string;
        /** The PartnerStack response status code. */
        status?: number;
      };
    };
  }
}
