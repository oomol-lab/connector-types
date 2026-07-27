import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Cloudflare Email Routing rule in a zone. Forward actions require verified destination addresses. */
    "cloudflare_email_routing.create_routing_rule": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId?: string;
        /**
         * Actions applied to matching email.
         * @minItems 1
         */
        actions: Array<{
          /** The action type. */
          type: "drop" | "forward" | "worker";
          /**
           * Destination email addresses or Worker names used by the action.
           * @minItems 1
           */
          value?: Array<string>;
        }>;
        /**
         * Conditions matching incoming email.
         * @minItems 1
         */
        matchers: Array<{
          /** The matcher type. */
          type: "all" | "literal";
          /** The email field to match. */
          field?: "to";
          /**
           * The literal email address to match.
           * @maxLength 90
           */
          value?: string;
        }>;
        /** Whether the rule is enabled. */
        enabled?: boolean;
        /**
         * The rule name.
         * @maxLength 256
         */
        name?: string;
        /**
         * The rule priority.
         * @minimum 0
         */
        priority?: number;
        /** Who manages the rule. */
        source?: "api" | "wrangler";
        /**
         * The public script tag required when source is wrangler.
         * @maxLength 32
         */
        ownerWorkerTag?: string;
      };
      output: {
        /** A Cloudflare Email Routing rule. */
        rule: {
          /** The routing rule ID. */
          id: string;
          /** Actions applied to matching email. */
          actions?: Array<{
            /** The action type. */
            type: "drop" | "forward" | "worker";
            /**
             * Destination email addresses or Worker names used by the action.
             * @minItems 1
             */
            value?: Array<string>;
          }>;
          /** Whether the rule is enabled. */
          enabled?: boolean;
          /** Conditions matching incoming email. */
          matchers?: Array<{
            /** The matcher type. */
            type: "all" | "literal";
            /** The email field to match. */
            field?: "to";
            /**
             * The literal email address to match.
             * @maxLength 90
             */
            value?: string;
          }>;
          /** The rule name. */
          name?: string;
          /**
           * The rule priority.
           * @minimum 0
           */
          priority?: number;
          /** Who manages the rule. */
          source?: "api" | "wrangler";
          /**
           * The public script tag of the Worker that owns a Wrangler-managed rule.
           * @maxLength 32
           */
          ownerWorkerTag?: string;
          /** Zone information returned for account rule listings. */
          zone?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Cloudflare Email Routing rule from a zone. */
    "cloudflare_email_routing.delete_routing_rule": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId?: string;
        /**
         * The Cloudflare routing rule ID.
         * @minLength 1
         */
        ruleId: string;
      };
      output: {
        /**
         * The Cloudflare routing rule ID.
         * @minLength 1
         */
        id: string;
        /** Whether the rule was deleted. */
        deleted: true;
      };
    };
    /** List Cloudflare Email Routing destination addresses and their verification status. */
    "cloudflare_email_routing.list_destination_addresses": {
      input: {
        /**
         * The Cloudflare account ID.
         * @minLength 1
         */
        accountId?: string;
        /** The result sort direction. */
        direction?: "asc" | "desc";
        /** Filter by destination address verification status. */
        verified?: boolean;
        /**
         * The result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The page size.
         * @minimum 5
         * @maximum 50
         */
        perPage?: number;
      };
      output: {
        /** The returned destination addresses. */
        addresses: Array<{
          /** The destination address ID. */
          id: string;
          /**
           * The destination email address.
           * @format email
           */
          email: string;
          /**
           * When the address was created.
           * @format date-time
           */
          created?: string;
          /**
           * When the address was last modified.
           * @format date-time
           */
          modified?: string;
          /**
           * When the address was verified; null means not verified.
           * @format date-time
           */
          verified?: string | null;
          [key: string]: unknown;
        }>;
        /** Cloudflare pagination metadata. */
        resultInfo?: {
          /** The current page number. */
          page?: number;
          /** The page size. */
          perPage?: number;
          /** The number of items in the current page. */
          count?: number;
          /** The total number of matching items. */
          totalCount?: number;
          /** The total number of pages. */
          totalPages?: number;
        };
      };
    };
    /** List Cloudflare Email Routing rules for a zone or account. */
    "cloudflare_email_routing.list_routing_rules": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId?: string;
        /**
         * The Cloudflare account ID.
         * @minLength 1
         */
        accountId?: string;
        /** Filter by enabled routing rules. */
        enabled?: boolean;
        /**
         * The result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The page size.
         * @minimum 5
         * @maximum 50
         */
        perPage?: number;
      };
      output: {
        /** The returned routing rules. */
        rules: Array<{
          /** The routing rule ID. */
          id: string;
          /** Actions applied to matching email. */
          actions?: Array<{
            /** The action type. */
            type: "drop" | "forward" | "worker";
            /**
             * Destination email addresses or Worker names used by the action.
             * @minItems 1
             */
            value?: Array<string>;
          }>;
          /** Whether the rule is enabled. */
          enabled?: boolean;
          /** Conditions matching incoming email. */
          matchers?: Array<{
            /** The matcher type. */
            type: "all" | "literal";
            /** The email field to match. */
            field?: "to";
            /**
             * The literal email address to match.
             * @maxLength 90
             */
            value?: string;
          }>;
          /** The rule name. */
          name?: string;
          /**
           * The rule priority.
           * @minimum 0
           */
          priority?: number;
          /** Who manages the rule. */
          source?: "api" | "wrangler";
          /**
           * The public script tag of the Worker that owns a Wrangler-managed rule.
           * @maxLength 32
           */
          ownerWorkerTag?: string;
          /** Zone information returned for account rule listings. */
          zone?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Cloudflare pagination metadata. */
        resultInfo?: {
          /** The current page number. */
          page?: number;
          /** The page size. */
          perPage?: number;
          /** The number of items in the current page. */
          count?: number;
          /** The total number of matching items. */
          totalCount?: number;
          /** The total number of pages. */
          totalPages?: number;
        };
      };
    };
    /** Replace a Cloudflare Email Routing rule in a zone. */
    "cloudflare_email_routing.update_routing_rule": {
      input: {
        /**
         * The Cloudflare zone ID.
         * @minLength 1
         */
        zoneId?: string;
        /**
         * The Cloudflare routing rule ID.
         * @minLength 1
         */
        ruleId: string;
        /**
         * Actions applied to matching email.
         * @minItems 1
         */
        actions: Array<{
          /** The action type. */
          type: "drop" | "forward" | "worker";
          /**
           * Destination email addresses or Worker names used by the action.
           * @minItems 1
           */
          value?: Array<string>;
        }>;
        /**
         * Conditions matching incoming email.
         * @minItems 1
         */
        matchers: Array<{
          /** The matcher type. */
          type: "all" | "literal";
          /** The email field to match. */
          field?: "to";
          /**
           * The literal email address to match.
           * @maxLength 90
           */
          value?: string;
        }>;
        /** Whether the rule is enabled. */
        enabled?: boolean;
        /**
         * The rule name.
         * @maxLength 256
         */
        name?: string;
        /**
         * The rule priority.
         * @minimum 0
         */
        priority?: number;
        /** Who manages the rule. */
        source?: "api" | "wrangler";
        /**
         * The public script tag required when source is wrangler.
         * @maxLength 32
         */
        ownerWorkerTag?: string;
      };
      output: {
        /** A Cloudflare Email Routing rule. */
        rule: {
          /** The routing rule ID. */
          id: string;
          /** Actions applied to matching email. */
          actions?: Array<{
            /** The action type. */
            type: "drop" | "forward" | "worker";
            /**
             * Destination email addresses or Worker names used by the action.
             * @minItems 1
             */
            value?: Array<string>;
          }>;
          /** Whether the rule is enabled. */
          enabled?: boolean;
          /** Conditions matching incoming email. */
          matchers?: Array<{
            /** The matcher type. */
            type: "all" | "literal";
            /** The email field to match. */
            field?: "to";
            /**
             * The literal email address to match.
             * @maxLength 90
             */
            value?: string;
          }>;
          /** The rule name. */
          name?: string;
          /**
           * The rule priority.
           * @minimum 0
           */
          priority?: number;
          /** Who manages the rule. */
          source?: "api" | "wrangler";
          /**
           * The public script tag of the Worker that owns a Wrangler-managed rule.
           * @maxLength 32
           */
          ownerWorkerTag?: string;
          /** Zone information returned for account rule listings. */
          zone?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
