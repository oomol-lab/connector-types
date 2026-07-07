import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a Whop authorized user by ID. */
    "whop.get_authorized_user": {
      input: {
        /**
         * The unique Whop authorized user identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * The unique Whop authorized user identifier.
         * @minLength 1
         */
        id?: string;
        /** Role assigned to a Whop authorized user. */
        role?: "owner" | "admin" | "sales_manager" | "moderator" | "advertiser" | "app_manager" | "support" | "manager" | "custom";
        /** Whop user summary. */
        user?: {
          /**
           * The unique Whop user identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The user's public username.
           * @minLength 1
           */
          username?: string;
          /** The user's display name. */
          name?: string | null;
          /** The user's email address when the credential has email access. */
          email?: string | null;
          [key: string]: unknown;
        };
        /** Company this user can administer. */
        company?: {
          /**
           * The unique Whop company identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The company display name.
           * @minLength 1
           */
          title?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve a Whop company by ID or route slug. */
    "whop.get_company": {
      input: {
        /**
         * The unique Whop company identifier or route slug.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * The unique Whop company identifier.
         * @minLength 1
         */
        id?: string;
        /**
         * The company display name.
         * @minLength 1
         */
        title?: string;
        /** The company promotional description. */
        description?: string | null;
        /** Whether Whop has verified this company. */
        verified?: boolean;
        /**
         * The datetime when this company was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * The datetime when this company was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** The number of active members across this company's products. */
        member_count?: number;
        /** Whop owner user summary. */
        owner_user?: {
          /**
           * The unique Whop user identifier.
           * @minLength 1
           */
          id?: string;
          /** The user's display name. */
          name?: string | null;
          /**
           * The user's public username.
           * @minLength 1
           */
          username?: string;
          [key: string]: unknown;
        };
        /**
         * The company store route slug.
         * @minLength 1
         */
        route?: string;
        /** Custom metadata stored on this company. */
        metadata?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve a Whop membership by membership ID or license key. */
    "whop.get_membership": {
      input: {
        /**
         * The unique Whop membership identifier or license key.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * The unique Whop membership identifier.
         * @minLength 1
         */
        id?: string;
        /** Whop membership lifecycle status. */
        status?: "trialing" | "active" | "past_due" | "completed" | "canceled" | "expired" | "unresolved" | "drafted" | "canceling";
        /**
         * The datetime when this membership was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * The datetime when the user joined the company.
         * @format date-time
         */
        joined_at?: string | null;
        /**
         * The datetime when this membership was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** URL where the customer can manage this membership. */
        manage_url?: string | null;
        /** Whop linked resource summary. */
        member?: {
          /**
           * The unique Whop resource identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        } | null;
        /** Whop user summary. */
        user?: {
          /**
           * The unique Whop user identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The user's public username.
           * @minLength 1
           */
          username?: string;
          /** The user's display name. */
          name?: string | null;
          /** The user's email address when the credential has email access. */
          email?: string | null;
          [key: string]: unknown;
        } | null;
        /** Whether this membership will cancel at period end. */
        cancel_at_period_end?: boolean;
        /** Whop membership cancellation reason. */
        cancel_option?: "too_expensive" | "switching" | "missing_features" | "technical_issues" | "bad_experience" | "other" | "testing" | null;
        /** Free-text cancellation reason. */
        cancellation_reason?: string | null;
        /**
         * The datetime when this membership was canceled.
         * @format date-time
         */
        canceled_at?: string | null;
        /** The membership billing currency. */
        currency?: string | null;
        /** Company linked to this membership. */
        company?: {
          /**
           * The unique Whop company identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The company display name.
           * @minLength 1
           */
          title?: string;
          [key: string]: unknown;
        };
        /** Plan linked to this membership. */
        plan?: {
          /**
           * The unique Whop plan identifier.
           * @minLength 1
           */
          id?: string;
          /** Custom metadata stored on the plan. */
          metadata?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
        /** Whop linked resource summary. */
        promo_code?: {
          /**
           * The unique Whop resource identifier.
           * @minLength 1
           */
          id?: string;
          [key: string]: unknown;
        } | null;
        /** Product linked to this membership. */
        product?: {
          /**
           * The unique Whop product identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The product display name.
           * @minLength 1
           */
          title?: string;
          /** Custom metadata stored on the product. */
          metadata?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
        /** Software license key linked to this membership. */
        license_key?: string | null;
        /** Custom metadata stored on this membership. */
        metadata?: Record<string, unknown> | null;
        /** Whether recurring payment collection is paused for this membership. */
        payment_collection_paused?: boolean;
        /** Checkout configuration identifier that produced this membership. */
        checkout_configuration_id?: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve a Whop product by ID. */
    "whop.get_product": {
      input: {
        /**
         * The unique Whop product identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * The unique Whop product identifier.
         * @minLength 1
         */
        id?: string;
        /**
         * The datetime when this product was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * The datetime when this product was last updated.
         * @format date-time
         */
        updated_at?: string;
        /** The product display name. */
        title?: string | null;
        /** The product visibility state. */
        visibility?: string | null;
        /** The product marketing headline. */
        headline?: string | null;
        /** Whether Whop has verified this product. */
        verified?: boolean;
        /** The active membership count for this product. */
        member_count?: number;
        /** The product public route slug. */
        route?: string | null;
        /** The number of published reviews for this product. */
        published_reviews_count?: number;
        /** External identifier stored on this product. */
        external_identifier?: string | null;
        /** Custom metadata stored on this product. */
        metadata?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** List authorized Whop team members with optional company, user, role, date, and cursor filters. */
    "whop.list_authorized_users": {
      input: {
        /**
         * Cursor for returning resources after this position.
         * @minLength 1
         */
        after?: string;
        /**
         * Cursor for returning resources before this position.
         * @minLength 1
         */
        before?: string;
        /**
         * Number of resources to return from the start of the list.
         * @minimum 1
         */
        first?: number;
        /**
         * Number of resources to return from the end of the list.
         * @minimum 1
         */
        last?: number;
        /**
         * The unique Whop company identifier.
         * @minLength 1
         */
        company_id?: string;
        /**
         * The unique Whop user identifier.
         * @minLength 1
         */
        user_id?: string;
        /** Role assigned to a Whop authorized user. */
        role?: "owner" | "admin" | "sales_manager" | "moderator" | "advertiser" | "app_manager" | "support" | "manager" | "custom";
        /**
         * Only return authorized users created before this timestamp.
         * @format date-time
         */
        created_before?: string;
        /**
         * Only return authorized users created after this timestamp.
         * @format date-time
         */
        created_after?: string;
      };
      output: {
        /** Authorized users returned by Whop. */
        data: Array<{
          /**
           * The unique Whop authorized user identifier.
           * @minLength 1
           */
          id?: string;
          /** Role assigned to a Whop authorized user. */
          role?: "owner" | "admin" | "sales_manager" | "moderator" | "advertiser" | "app_manager" | "support" | "manager" | "custom";
          /** Whop user summary. */
          user?: {
            /**
             * The unique Whop user identifier.
             * @minLength 1
             */
            id?: string;
            /**
             * The user's public username.
             * @minLength 1
             */
            username?: string;
            /** The user's display name. */
            name?: string | null;
            /** The user's email address when the credential has email access. */
            email?: string | null;
            [key: string]: unknown;
          };
          /** Company this user can administer. */
          company?: {
            /**
             * The unique Whop company identifier.
             * @minLength 1
             */
            id?: string;
            /**
             * The company display name.
             * @minLength 1
             */
            title?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Whop cursor pagination metadata. */
        page_info: {
          /** Cursor for the next page when paginating forward. */
          end_cursor: string | null;
          /** Cursor for the previous page when paginating backward. */
          start_cursor: string | null;
          /** Whether more resources are available after this page. */
          has_next_page: boolean;
          /** Whether more resources are available before this page. */
          has_previous_page: boolean;
        };
      };
    };
    /** List Whop companies accessible to the credential, optionally filtering connected accounts by parent company. */
    "whop.list_companies": {
      input: {
        /**
         * Cursor for returning resources after this position.
         * @minLength 1
         */
        after?: string;
        /**
         * Cursor for returning resources before this position.
         * @minLength 1
         */
        before?: string;
        /**
         * Number of resources to return from the start of the list.
         * @minimum 1
         */
        first?: number;
        /**
         * Number of resources to return from the end of the list.
         * @minimum 1
         */
        last?: number;
        /**
         * Parent platform company ID for listing connected accounts.
         * @minLength 1
         */
        parent_company_id?: string;
        /** Sort direction for returned Whop resources. */
        direction?: "asc" | "desc";
        /**
         * Only return companies created before this timestamp.
         * @format date-time
         */
        created_before?: string;
        /**
         * Only return companies created after this timestamp.
         * @format date-time
         */
        created_after?: string;
      };
      output: {
        /** Companies returned by Whop. */
        data: Array<{
          /**
           * The unique Whop company identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The company display name.
           * @minLength 1
           */
          title?: string;
          /** The company promotional description. */
          description?: string | null;
          /** Whether Whop has verified this company. */
          verified?: boolean;
          /**
           * The datetime when this company was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * The datetime when this company was last updated.
           * @format date-time
           */
          updated_at?: string;
          /** The number of active members across this company's products. */
          member_count?: number;
          /** Whop owner user summary. */
          owner_user?: {
            /**
             * The unique Whop user identifier.
             * @minLength 1
             */
            id?: string;
            /** The user's display name. */
            name?: string | null;
            /**
             * The user's public username.
             * @minLength 1
             */
            username?: string;
            [key: string]: unknown;
          };
          /**
           * The company store route slug.
           * @minLength 1
           */
          route?: string;
          /** Custom metadata stored on this company. */
          metadata?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Whop cursor pagination metadata. */
        page_info: {
          /** Cursor for the next page when paginating forward. */
          end_cursor: string | null;
          /** Cursor for the previous page when paginating backward. */
          start_cursor: string | null;
          /** Whether more resources are available after this page. */
          has_next_page: boolean;
          /** Whether more resources are available before this page. */
          has_previous_page: boolean;
        };
      };
    };
    /** List Whop memberships for a company with optional product, plan, user, status, and cursor filters. */
    "whop.list_memberships": {
      input: {
        /**
         * Cursor for returning resources after this position.
         * @minLength 1
         */
        after?: string;
        /**
         * Cursor for returning resources before this position.
         * @minLength 1
         */
        before?: string;
        /**
         * Number of resources to return from the start of the list.
         * @minimum 1
         */
        first?: number;
        /**
         * Number of resources to return from the end of the list.
         * @minimum 1
         */
        last?: number;
        /**
         * The Whop company identifier. Required when using an API key.
         * @minLength 1
         */
        company_id: string;
        /** Sort direction for returned Whop resources. */
        direction?: "asc" | "desc";
        /** Sortable Whop membership column. */
        order?: "id" | "created_at" | "status" | "canceled_at" | "date_joined" | "total_spend";
        /**
         * Product identifiers to filter memberships by.
         * @minItems 1
         */
        product_ids?: Array<string>;
        /**
         * Membership statuses to include.
         * @minItems 1
         */
        statuses?: Array<"trialing" | "active" | "past_due" | "completed" | "canceled" | "expired" | "unresolved" | "drafted" | "canceling">;
        /**
         * Cancellation reasons to filter memberships by.
         * @minItems 1
         */
        cancel_options?: Array<"too_expensive" | "switching" | "missing_features" | "technical_issues" | "bad_experience" | "other" | "testing">;
        /**
         * Plan identifiers to filter memberships by.
         * @minItems 1
         */
        plan_ids?: Array<string>;
        /**
         * User identifiers to filter memberships by.
         * @minItems 1
         */
        user_ids?: Array<string>;
        /**
         * Promo code identifiers to filter memberships by.
         * @minItems 1
         */
        promo_code_ids?: Array<string>;
        /**
         * Only return memberships created before this timestamp.
         * @format date-time
         */
        created_before?: string;
        /**
         * Only return memberships created after this timestamp.
         * @format date-time
         */
        created_after?: string;
      };
      output: {
        /** Memberships returned by Whop. */
        data: Array<{
          /**
           * The unique Whop membership identifier.
           * @minLength 1
           */
          id?: string;
          /** Whop membership lifecycle status. */
          status?: "trialing" | "active" | "past_due" | "completed" | "canceled" | "expired" | "unresolved" | "drafted" | "canceling";
          /**
           * The datetime when this membership was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * The datetime when the user joined the company.
           * @format date-time
           */
          joined_at?: string | null;
          /**
           * The datetime when this membership was last updated.
           * @format date-time
           */
          updated_at?: string;
          /** URL where the customer can manage this membership. */
          manage_url?: string | null;
          /** Whop linked resource summary. */
          member?: {
            /**
             * The unique Whop resource identifier.
             * @minLength 1
             */
            id?: string;
            [key: string]: unknown;
          } | null;
          /** Whop user summary. */
          user?: {
            /**
             * The unique Whop user identifier.
             * @minLength 1
             */
            id?: string;
            /**
             * The user's public username.
             * @minLength 1
             */
            username?: string;
            /** The user's display name. */
            name?: string | null;
            /** The user's email address when the credential has email access. */
            email?: string | null;
            [key: string]: unknown;
          } | null;
          /** Whether this membership will cancel at period end. */
          cancel_at_period_end?: boolean;
          /** Whop membership cancellation reason. */
          cancel_option?: "too_expensive" | "switching" | "missing_features" | "technical_issues" | "bad_experience" | "other" | "testing" | null;
          /** Free-text cancellation reason. */
          cancellation_reason?: string | null;
          /**
           * The datetime when this membership was canceled.
           * @format date-time
           */
          canceled_at?: string | null;
          /** The membership billing currency. */
          currency?: string | null;
          /** Company linked to this membership. */
          company?: {
            /**
             * The unique Whop company identifier.
             * @minLength 1
             */
            id?: string;
            /**
             * The company display name.
             * @minLength 1
             */
            title?: string;
            [key: string]: unknown;
          };
          /** Plan linked to this membership. */
          plan?: {
            /**
             * The unique Whop plan identifier.
             * @minLength 1
             */
            id?: string;
            /** Custom metadata stored on the plan. */
            metadata?: Record<string, unknown> | null;
            [key: string]: unknown;
          };
          /** Whop linked resource summary. */
          promo_code?: {
            /**
             * The unique Whop resource identifier.
             * @minLength 1
             */
            id?: string;
            [key: string]: unknown;
          } | null;
          /** Product linked to this membership. */
          product?: {
            /**
             * The unique Whop product identifier.
             * @minLength 1
             */
            id?: string;
            /**
             * The product display name.
             * @minLength 1
             */
            title?: string;
            /** Custom metadata stored on the product. */
            metadata?: Record<string, unknown> | null;
            [key: string]: unknown;
          };
          /** Software license key linked to this membership. */
          license_key?: string | null;
          /** Custom metadata stored on this membership. */
          metadata?: Record<string, unknown> | null;
          /** Whether recurring payment collection is paused for this membership. */
          payment_collection_paused?: boolean;
          /** Checkout configuration identifier that produced this membership. */
          checkout_configuration_id?: string | null;
          [key: string]: unknown;
        }>;
        /** Whop cursor pagination metadata. */
        page_info: {
          /** Cursor for the next page when paginating forward. */
          end_cursor: string | null;
          /** Cursor for the previous page when paginating backward. */
          start_cursor: string | null;
          /** Whether more resources are available after this page. */
          has_next_page: boolean;
          /** Whether more resources are available before this page. */
          has_previous_page: boolean;
        };
      };
    };
    /** List Whop products belonging to a company with optional visibility, type, sort, and cursor filters. */
    "whop.list_products": {
      input: {
        /**
         * The unique Whop company identifier.
         * @minLength 1
         */
        company_id: string;
        /**
         * Product visibility states to include.
         * @minItems 1
         */
        visibilities?: Array<string>;
        /**
         * Product access pass types to include.
         * @minItems 1
         */
        access_pass_types?: Array<string>;
        /** Sort direction for returned Whop resources. */
        direction?: "asc" | "desc";
        /**
         * Product field to sort by. Defaults to created_at.
         * @minLength 1
         */
        order?: string;
        /**
         * Number of products to return. Default and max is 100.
         * @minimum 1
         * @maximum 100
         */
        first?: number;
        /**
         * Cursor for returning products after this position.
         * @minLength 1
         */
        after?: string;
        /**
         * Number of products to return from the end of the range.
         * @minimum 1
         */
        last?: number;
        /**
         * Cursor for returning products before this position.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /** Products returned by Whop. */
        data: Array<{
          /**
           * The unique Whop product identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The datetime when this product was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * The datetime when this product was last updated.
           * @format date-time
           */
          updated_at?: string;
          /** The product display name. */
          title?: string | null;
          /** The product visibility state. */
          visibility?: string | null;
          /** The product marketing headline. */
          headline?: string | null;
          /** Whether Whop has verified this product. */
          verified?: boolean;
          /** The active membership count for this product. */
          member_count?: number;
          /** The product public route slug. */
          route?: string | null;
          /** The number of published reviews for this product. */
          published_reviews_count?: number;
          /** External identifier stored on this product. */
          external_identifier?: string | null;
          /** Custom metadata stored on this product. */
          metadata?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Whop cursor pagination metadata. */
        page_info: {
          /** Cursor for the next page when paginating forward. */
          end_cursor: string | null;
          /** Cursor for the previous page when paginating backward. */
          start_cursor: string | null;
          /** Whether more resources are available after this page. */
          has_next_page: boolean;
          /** Whether more resources are available before this page. */
          has_previous_page: boolean;
        };
      };
    };
  }
}
