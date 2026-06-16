import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a category in Subvisory. */
    "subvisory.create_category": {
      input: {
        /**
         * Category name.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
        /**
         * Hex color code for UI display.
         * @pattern ^#[0-9a-fA-F]{6}$
         * @default "#6366f1"
         */
        color?: string;
        /**
         * Icon identifier.
         * @maxLength 50
         */
        icon?: string;
        /**
         * Whether this is a default category.
         * @default false
         */
        isDefault?: boolean;
        /**
         * Sort position for UI ordering.
         * @default 0
         */
        sortOrder?: number;
      };
      output: {
        /** Indicates the operation succeeded. */
        success: true;
        /** Category record returned by Subvisory. */
        data: {
          /**
           * Unique Subvisory resource ID.
           * @minLength 1
           */
          id: string;
          /** Category name. */
          name: string;
          /** Hex color code for UI display. */
          color: string | null;
          /** Icon identifier. */
          icon: string | null;
          /** Whether this is a system default category. */
          isDefault: boolean | null;
          /** Sort position for UI ordering. */
          sortOrder: number | null;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          createdAt: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a payment method in Subvisory. */
    "subvisory.create_payment_method": {
      input: {
        /**
         * Display label for the payment method.
         * @minLength 1
         * @maxLength 100
         */
        label: string;
        /**
         * Payment type such as credit_card or bank_transfer.
         * @maxLength 50
         */
        type?: string;
        /**
         * Icon identifier.
         * @maxLength 50
         */
        icon?: string;
        /**
         * Sort position for UI ordering.
         * @default 0
         */
        sortOrder?: number;
      };
      output: {
        /** Indicates the operation succeeded. */
        success: true;
        /** Payment method record returned by Subvisory. */
        data: {
          /**
           * Unique Subvisory resource ID.
           * @minLength 1
           */
          id: string;
          /** Payment method display label. */
          label: string;
          /** Payment method type. */
          type: string | null;
          /** Icon identifier. */
          icon: string | null;
          /** Sort position for UI ordering. */
          sortOrder: number | null;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          createdAt: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a subscription in Subvisory. */
    "subvisory.create_subscription": {
      input: {
        /**
         * Subscription name.
         * @minLength 1
         * @maxLength 200
         */
        name: string;
        /** Cost per billing cycle as a string or number. */
        cost: string | number;
        /**
         * ISO 4217 currency code.
         * @minLength 3
         * @maxLength 3
         * @default "USD"
         */
        currency?: string;
        /**
         * How often the subscription is billed.
         * @default "monthly"
         */
        billingCycle?: "weekly" | "monthly" | "quarterly" | "biannual" | "yearly" | "custom";
        /**
         * Required when billingCycle is custom. Number of days per cycle.
         * @exclusiveMinimum 0
         */
        customCycleDays?: number;
        /**
         * ISO 8601 date or timestamp accepted by Subvisory.
         * @minLength 1
         */
        startDate: string;
        /**
         * Current subscription status.
         * @default "active"
         */
        status?: "active" | "trial" | "paused" | "cancelled" | "lifetime";
        /**
         * Category ID to assign.
         * @minLength 1
         */
        categoryId?: string;
        /**
         * Payment method ID to assign.
         * @minLength 1
         */
        paymentMethodId?: string;
        /** Free-text notes. */
        notes?: string;
        /**
         * Reason for cancellation.
         * @maxLength 500
         */
        cancellationReason?: string;
        /** Custom logo URL, or an empty string to clear it. */
        logoUrl?: string | "";
        /** Service URL used for auto logo detection, or an empty string to clear it. */
        url?: string | "";
        /**
         * Whether the subscription auto-renews.
         * @default true
         */
        autoRenew?: boolean;
      };
      output: {
        /** Indicates the operation succeeded. */
        success: true;
        /** Subscription record returned by Subvisory. */
        data: {
          /**
           * Unique Subvisory resource ID.
           * @minLength 1
           */
          id: string;
          /** Subscription name. */
          name: string;
          /** Recurring cost per billing cycle. */
          cost: string;
          /** ISO 4217 currency code. */
          currency: string;
          /** How often the subscription is billed. */
          billingCycle: "weekly" | "monthly" | "quarterly" | "biannual" | "yearly" | "custom";
          /** Number of days per cycle when billingCycle is custom. */
          customCycleDays: number | null;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          startDate: string;
          /** Next payment date, auto-calculated by Subvisory. */
          nextPaymentDate: string | null;
          /** Current subscription status. */
          status: "active" | "trial" | "paused" | "cancelled" | "lifetime";
          /** Category ID, or null if uncategorized. */
          categoryId: string | null;
          /** Payment method ID, or null if not set. */
          paymentMethodId: string | null;
          /** Free-text notes about this subscription. */
          notes: string | null;
          /** Timestamp when the subscription was cancelled. */
          cancelledAt: string | null;
          /** Optional reason for cancellation. */
          cancellationReason: string | null;
          /** Custom logo URL, or null for auto-detected logo. */
          logoUrl: string | null;
          /** Subscription service URL used for auto logo detection. */
          url: string | null;
          /** Whether the subscription auto-renews. */
          autoRenew: boolean | null;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          createdAt: string;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          updatedAt: string;
          /** Category summary embedded in a subscription. */
          category?: {
            /**
             * Unique Subvisory resource ID.
             * @minLength 1
             */
            id: string;
            /** Category name. */
            name: string;
            /** Hex color code for UI display. */
            color: string | null;
            /** Icon identifier. */
            icon: string | null;
            [key: string]: unknown;
          } | null;
          /** Payment method summary embedded in a subscription. */
          paymentMethod?: {
            /**
             * Unique Subvisory resource ID.
             * @minLength 1
             */
            id: string;
            /** Payment method display label. */
            label: string;
            /** Payment method type. */
            type: string | null;
            /** Icon identifier. */
            icon: string | null;
            [key: string]: unknown;
          } | null;
          /** Free trial details for a subscription. */
          freeTrialInfo?: {
            /**
             * Unique Subvisory resource ID.
             * @minLength 1
             */
            id: string;
            /**
             * Unique Subvisory resource ID.
             * @minLength 1
             */
            subscriptionId: string;
            /**
             * ISO 8601 date or timestamp accepted by Subvisory.
             * @minLength 1
             */
            trialStartDate: string;
            /**
             * ISO 8601 date or timestamp accepted by Subvisory.
             * @minLength 1
             */
            trialEndDate: string;
            /** Whether the trial converts to a paid subscription. */
            convertsToPaid: boolean | null;
            /** Cost after trial conversion, if applicable. */
            convertedCost: string | null;
            /** Whether a trial expiry reminder has been sent. */
            reminderSent: boolean | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Delete a Subvisory category. */
    "subvisory.delete_category": {
      input: {
        /**
         * Unique Subvisory resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Indicates the operation succeeded. */
        success: true;
      };
    };
    /** Delete a Subvisory payment method. */
    "subvisory.delete_payment_method": {
      input: {
        /**
         * Unique Subvisory resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Indicates the operation succeeded. */
        success: true;
      };
    };
    /** Delete a Subvisory subscription. */
    "subvisory.delete_subscription": {
      input: {
        /**
         * Unique Subvisory resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Indicates the operation succeeded. */
        success: true;
      };
    };
    /** Retrieve a Subvisory category by ID. */
    "subvisory.get_category": {
      input: {
        /**
         * Unique Subvisory resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Indicates the operation succeeded. */
        success: true;
        /** Category record returned by Subvisory. */
        data: {
          /**
           * Unique Subvisory resource ID.
           * @minLength 1
           */
          id: string;
          /** Category name. */
          name: string;
          /** Hex color code for UI display. */
          color: string | null;
          /** Icon identifier. */
          icon: string | null;
          /** Whether this is a system default category. */
          isDefault: boolean | null;
          /** Sort position for UI ordering. */
          sortOrder: number | null;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          createdAt: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve a Subvisory payment method by ID. */
    "subvisory.get_payment_method": {
      input: {
        /**
         * Unique Subvisory resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Indicates the operation succeeded. */
        success: true;
        /** Payment method record returned by Subvisory. */
        data: {
          /**
           * Unique Subvisory resource ID.
           * @minLength 1
           */
          id: string;
          /** Payment method display label. */
          label: string;
          /** Payment method type. */
          type: string | null;
          /** Icon identifier. */
          icon: string | null;
          /** Sort position for UI ordering. */
          sortOrder: number | null;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          createdAt: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve a Subvisory subscription by ID. */
    "subvisory.get_subscription": {
      input: {
        /**
         * Unique Subvisory resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Indicates the operation succeeded. */
        success: true;
        /** Subscription record returned by Subvisory. */
        data: {
          /**
           * Unique Subvisory resource ID.
           * @minLength 1
           */
          id: string;
          /** Subscription name. */
          name: string;
          /** Recurring cost per billing cycle. */
          cost: string;
          /** ISO 4217 currency code. */
          currency: string;
          /** How often the subscription is billed. */
          billingCycle: "weekly" | "monthly" | "quarterly" | "biannual" | "yearly" | "custom";
          /** Number of days per cycle when billingCycle is custom. */
          customCycleDays: number | null;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          startDate: string;
          /** Next payment date, auto-calculated by Subvisory. */
          nextPaymentDate: string | null;
          /** Current subscription status. */
          status: "active" | "trial" | "paused" | "cancelled" | "lifetime";
          /** Category ID, or null if uncategorized. */
          categoryId: string | null;
          /** Payment method ID, or null if not set. */
          paymentMethodId: string | null;
          /** Free-text notes about this subscription. */
          notes: string | null;
          /** Timestamp when the subscription was cancelled. */
          cancelledAt: string | null;
          /** Optional reason for cancellation. */
          cancellationReason: string | null;
          /** Custom logo URL, or null for auto-detected logo. */
          logoUrl: string | null;
          /** Subscription service URL used for auto logo detection. */
          url: string | null;
          /** Whether the subscription auto-renews. */
          autoRenew: boolean | null;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          createdAt: string;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          updatedAt: string;
          /** Category summary embedded in a subscription. */
          category?: {
            /**
             * Unique Subvisory resource ID.
             * @minLength 1
             */
            id: string;
            /** Category name. */
            name: string;
            /** Hex color code for UI display. */
            color: string | null;
            /** Icon identifier. */
            icon: string | null;
            [key: string]: unknown;
          } | null;
          /** Payment method summary embedded in a subscription. */
          paymentMethod?: {
            /**
             * Unique Subvisory resource ID.
             * @minLength 1
             */
            id: string;
            /** Payment method display label. */
            label: string;
            /** Payment method type. */
            type: string | null;
            /** Icon identifier. */
            icon: string | null;
            [key: string]: unknown;
          } | null;
          /** Free trial details for a subscription. */
          freeTrialInfo?: {
            /**
             * Unique Subvisory resource ID.
             * @minLength 1
             */
            id: string;
            /**
             * Unique Subvisory resource ID.
             * @minLength 1
             */
            subscriptionId: string;
            /**
             * ISO 8601 date or timestamp accepted by Subvisory.
             * @minLength 1
             */
            trialStartDate: string;
            /**
             * ISO 8601 date or timestamp accepted by Subvisory.
             * @minLength 1
             */
            trialEndDate: string;
            /** Whether the trial converts to a paid subscription. */
            convertsToPaid: boolean | null;
            /** Cost after trial conversion, if applicable. */
            convertedCost: string | null;
            /** Whether a trial expiry reminder has been sent. */
            reminderSent: boolean | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List all Subvisory categories. */
    "subvisory.list_categories": {
      input: Record<string, never>;
      output: {
        /** Indicates the operation succeeded. */
        success: true;
        /** List of categories. */
        data: Array<{
          /**
           * Unique Subvisory resource ID.
           * @minLength 1
           */
          id: string;
          /** Category name. */
          name: string;
          /** Hex color code for UI display. */
          color: string | null;
          /** Icon identifier. */
          icon: string | null;
          /** Whether this is a system default category. */
          isDefault: boolean | null;
          /** Sort position for UI ordering. */
          sortOrder: number | null;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          createdAt: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List all Subvisory payment methods. */
    "subvisory.list_payment_methods": {
      input: Record<string, never>;
      output: {
        /** Indicates the operation succeeded. */
        success: true;
        /** List of payment methods. */
        data: Array<{
          /**
           * Unique Subvisory resource ID.
           * @minLength 1
           */
          id: string;
          /** Payment method display label. */
          label: string;
          /** Payment method type. */
          type: string | null;
          /** Icon identifier. */
          icon: string | null;
          /** Sort position for UI ordering. */
          sortOrder: number | null;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          createdAt: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List all subscriptions from Subvisory. */
    "subvisory.list_subscriptions": {
      input: Record<string, never>;
      output: {
        /** Indicates the operation succeeded. */
        success: true;
        /** List of subscriptions. */
        data: Array<{
          /**
           * Unique Subvisory resource ID.
           * @minLength 1
           */
          id: string;
          /** Subscription name. */
          name: string;
          /** Recurring cost per billing cycle. */
          cost: string;
          /** ISO 4217 currency code. */
          currency: string;
          /** How often the subscription is billed. */
          billingCycle: "weekly" | "monthly" | "quarterly" | "biannual" | "yearly" | "custom";
          /** Number of days per cycle when billingCycle is custom. */
          customCycleDays: number | null;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          startDate: string;
          /** Next payment date, auto-calculated by Subvisory. */
          nextPaymentDate: string | null;
          /** Current subscription status. */
          status: "active" | "trial" | "paused" | "cancelled" | "lifetime";
          /** Category ID, or null if uncategorized. */
          categoryId: string | null;
          /** Payment method ID, or null if not set. */
          paymentMethodId: string | null;
          /** Free-text notes about this subscription. */
          notes: string | null;
          /** Timestamp when the subscription was cancelled. */
          cancelledAt: string | null;
          /** Optional reason for cancellation. */
          cancellationReason: string | null;
          /** Custom logo URL, or null for auto-detected logo. */
          logoUrl: string | null;
          /** Subscription service URL used for auto logo detection. */
          url: string | null;
          /** Whether the subscription auto-renews. */
          autoRenew: boolean | null;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          createdAt: string;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          updatedAt: string;
          /** Category summary embedded in a subscription. */
          category?: {
            /**
             * Unique Subvisory resource ID.
             * @minLength 1
             */
            id: string;
            /** Category name. */
            name: string;
            /** Hex color code for UI display. */
            color: string | null;
            /** Icon identifier. */
            icon: string | null;
            [key: string]: unknown;
          } | null;
          /** Payment method summary embedded in a subscription. */
          paymentMethod?: {
            /**
             * Unique Subvisory resource ID.
             * @minLength 1
             */
            id: string;
            /** Payment method display label. */
            label: string;
            /** Payment method type. */
            type: string | null;
            /** Icon identifier. */
            icon: string | null;
            [key: string]: unknown;
          } | null;
          /** Free trial details for a subscription. */
          freeTrialInfo?: {
            /**
             * Unique Subvisory resource ID.
             * @minLength 1
             */
            id: string;
            /**
             * Unique Subvisory resource ID.
             * @minLength 1
             */
            subscriptionId: string;
            /**
             * ISO 8601 date or timestamp accepted by Subvisory.
             * @minLength 1
             */
            trialStartDate: string;
            /**
             * ISO 8601 date or timestamp accepted by Subvisory.
             * @minLength 1
             */
            trialEndDate: string;
            /** Whether the trial converts to a paid subscription. */
            convertsToPaid: boolean | null;
            /** Cost after trial conversion, if applicable. */
            convertedCost: string | null;
            /** Whether a trial expiry reminder has been sent. */
            reminderSent: boolean | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update a Subvisory category. */
    "subvisory.update_category": {
      input: {
        /**
         * Unique Subvisory resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * Updated category name.
         * @minLength 1
         * @maxLength 100
         */
        name?: string;
        /**
         * Updated hex color code.
         * @pattern ^#[0-9a-fA-F]{6}$
         */
        color?: string;
        /**
         * Updated icon identifier, or null to clear it.
         * @maxLength 50
         */
        icon?: string | null;
        /** Updated default flag. */
        isDefault?: boolean;
        /** Updated sort position. */
        sortOrder?: number;
      };
      output: {
        /** Indicates the operation succeeded. */
        success: true;
        /** Category record returned by Subvisory. */
        data: {
          /**
           * Unique Subvisory resource ID.
           * @minLength 1
           */
          id: string;
          /** Category name. */
          name: string;
          /** Hex color code for UI display. */
          color: string | null;
          /** Icon identifier. */
          icon: string | null;
          /** Whether this is a system default category. */
          isDefault: boolean | null;
          /** Sort position for UI ordering. */
          sortOrder: number | null;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          createdAt: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update a Subvisory payment method. */
    "subvisory.update_payment_method": {
      input: {
        /**
         * Unique Subvisory resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * Updated display label.
         * @minLength 1
         * @maxLength 100
         */
        label?: string;
        /**
         * Updated payment type, or null to clear it.
         * @maxLength 50
         */
        type?: string | null;
        /**
         * Updated icon identifier, or null to clear it.
         * @maxLength 50
         */
        icon?: string | null;
        /** Updated sort position. */
        sortOrder?: number;
      };
      output: {
        /** Indicates the operation succeeded. */
        success: true;
        /** Payment method record returned by Subvisory. */
        data: {
          /**
           * Unique Subvisory resource ID.
           * @minLength 1
           */
          id: string;
          /** Payment method display label. */
          label: string;
          /** Payment method type. */
          type: string | null;
          /** Icon identifier. */
          icon: string | null;
          /** Sort position for UI ordering. */
          sortOrder: number | null;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          createdAt: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update a Subvisory subscription. */
    "subvisory.update_subscription": {
      input: {
        /**
         * Unique Subvisory resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * Updated subscription name.
         * @minLength 1
         * @maxLength 200
         */
        name?: string;
        /** Cost per billing cycle as a string or number. */
        cost?: string | number;
        /**
         * Updated ISO 4217 currency code.
         * @minLength 3
         * @maxLength 3
         */
        currency?: string;
        /** How often the subscription is billed. */
        billingCycle?: "weekly" | "monthly" | "quarterly" | "biannual" | "yearly" | "custom";
        /**
         * Updated custom billing cycle days, or null to clear it.
         * @exclusiveMinimum 0
         */
        customCycleDays?: number | null;
        /**
         * ISO 8601 date or timestamp accepted by Subvisory.
         * @minLength 1
         */
        startDate?: string;
        /** Current subscription status. */
        status?: "active" | "trial" | "paused" | "cancelled" | "lifetime";
        /** Category ID, or null to unassign. */
        categoryId?: string | null;
        /** Payment method ID, or null to unassign. */
        paymentMethodId?: string | null;
        /** Updated notes, or null to clear them. */
        notes?: string | null;
        /**
         * Cancellation reason, or null to clear it.
         * @maxLength 500
         */
        cancellationReason?: string | null;
        /** Custom logo URL, an empty string, or null to clear it. */
        logoUrl?: string | "" | null;
        /** Service URL, an empty string, or null to clear it. */
        url?: string | "" | null;
        /** Updated auto-renew setting. */
        autoRenew?: boolean;
      };
      output: {
        /** Indicates the operation succeeded. */
        success: true;
        /** Subscription record returned by Subvisory. */
        data: {
          /**
           * Unique Subvisory resource ID.
           * @minLength 1
           */
          id: string;
          /** Subscription name. */
          name: string;
          /** Recurring cost per billing cycle. */
          cost: string;
          /** ISO 4217 currency code. */
          currency: string;
          /** How often the subscription is billed. */
          billingCycle: "weekly" | "monthly" | "quarterly" | "biannual" | "yearly" | "custom";
          /** Number of days per cycle when billingCycle is custom. */
          customCycleDays: number | null;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          startDate: string;
          /** Next payment date, auto-calculated by Subvisory. */
          nextPaymentDate: string | null;
          /** Current subscription status. */
          status: "active" | "trial" | "paused" | "cancelled" | "lifetime";
          /** Category ID, or null if uncategorized. */
          categoryId: string | null;
          /** Payment method ID, or null if not set. */
          paymentMethodId: string | null;
          /** Free-text notes about this subscription. */
          notes: string | null;
          /** Timestamp when the subscription was cancelled. */
          cancelledAt: string | null;
          /** Optional reason for cancellation. */
          cancellationReason: string | null;
          /** Custom logo URL, or null for auto-detected logo. */
          logoUrl: string | null;
          /** Subscription service URL used for auto logo detection. */
          url: string | null;
          /** Whether the subscription auto-renews. */
          autoRenew: boolean | null;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          createdAt: string;
          /**
           * ISO 8601 date or timestamp accepted by Subvisory.
           * @minLength 1
           */
          updatedAt: string;
          /** Category summary embedded in a subscription. */
          category?: {
            /**
             * Unique Subvisory resource ID.
             * @minLength 1
             */
            id: string;
            /** Category name. */
            name: string;
            /** Hex color code for UI display. */
            color: string | null;
            /** Icon identifier. */
            icon: string | null;
            [key: string]: unknown;
          } | null;
          /** Payment method summary embedded in a subscription. */
          paymentMethod?: {
            /**
             * Unique Subvisory resource ID.
             * @minLength 1
             */
            id: string;
            /** Payment method display label. */
            label: string;
            /** Payment method type. */
            type: string | null;
            /** Icon identifier. */
            icon: string | null;
            [key: string]: unknown;
          } | null;
          /** Free trial details for a subscription. */
          freeTrialInfo?: {
            /**
             * Unique Subvisory resource ID.
             * @minLength 1
             */
            id: string;
            /**
             * Unique Subvisory resource ID.
             * @minLength 1
             */
            subscriptionId: string;
            /**
             * ISO 8601 date or timestamp accepted by Subvisory.
             * @minLength 1
             */
            trialStartDate: string;
            /**
             * ISO 8601 date or timestamp accepted by Subvisory.
             * @minLength 1
             */
            trialEndDate: string;
            /** Whether the trial converts to a paid subscription. */
            convertsToPaid: boolean | null;
            /** Cost after trial conversion, if applicable. */
            convertedCost: string | null;
            /** Whether a trial expiry reminder has been sent. */
            reminderSent: boolean | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
