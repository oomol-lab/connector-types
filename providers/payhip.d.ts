import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Payhip coupon for a fixed amount or percentage discount. */
    "payhip.create_coupon": {
      input: {
        /**
         * The coupon code customers enter at checkout.
         * @minLength 1
         * @pattern \S
         */
        code: string;
        /** How Payhip applies the coupon. */
        couponType: "single" | "multi" | "collection";
        /** Administrative notes for the coupon. These notes are not visible to customers. */
        notes?: string;
        /**
         * The fixed discount amount in cents.
         * @exclusiveMinimum 0
         */
        amountOff?: number;
        /**
         * The percentage discount to apply.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        percentOff?: number;
        /**
         * The unique Payhip product key for a single-product coupon.
         * @minLength 1
         * @pattern \S
         */
        productKey?: string;
        /**
         * The unique Payhip collection ID.
         * @minLength 1
         * @pattern \S
         */
        collectionId?: string;
        /**
         * The maximum number of times the coupon can be redeemed.
         * @exclusiveMinimum 0
         */
        usageLimit?: number;
      };
      output: {
        /** A Payhip coupon object. */
        coupon: {
          /**
           * The unique Payhip coupon ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The coupon code customers enter at checkout.
           * @minLength 1
           * @pattern \S
           */
          code: string;
          /** How Payhip applies the coupon. */
          couponType: "single" | "multi" | "collection";
          /** Administrative notes returned by Payhip. */
          notes: string | null;
          /** The fixed discount amount in cents when present. */
          amountOff: number | null;
          /** The percentage discount when present. */
          percentOff: number | null;
          /** The product key when the coupon targets one product. */
          productKey: string | null;
          /** The collection ID when the coupon targets one collection. */
          collectionId: string | null;
          /** The maximum redemption count when present. */
          usageLimit: number | null;
          /** The date or datetime when the coupon becomes valid. */
          startDate: string | null;
          /** The date or datetime when the coupon expires. */
          endDate: string | null;
          /** The minimum purchase amount in cents when configured. */
          minimumPurchaseAmount: number | null;
          /** The raw Payhip coupon object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Decrease the available uses for a Payhip license key. */
    "payhip.decrease_license_uses": {
      input: {
        /**
         * The Payhip product secret key used to authenticate license key requests.
         * @minLength 1
         * @pattern \S
         */
        productSecretKey: string;
        /**
         * The Payhip license key value to operate on.
         * @minLength 1
         * @pattern \S
         */
        licenseKey: string;
      };
      output: {
        /** A normalized Payhip license response. */
        license: {
          /** Whether Payhip reported the license key as valid. */
          valid: boolean;
          /** The message returned by Payhip when present. */
          message: string | null;
          /** The Payhip license check object. */
          check: {
            /** The number of license uses reported by Payhip. */
            uses: number | null;
            /** Whether the license key is enabled. */
            enabled: boolean | null;
            /** The raw Payhip license check object. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Payhip license response payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete a Payhip coupon by ID. */
    "payhip.delete_coupon": {
      input: {
        /**
         * The unique Payhip coupon ID.
         * @exclusiveMinimum 0
         */
        couponId: number;
      };
      output: {
        /** Whether the coupon delete request completed successfully. */
        deleted: boolean;
        /**
         * The unique Payhip coupon ID.
         * @exclusiveMinimum 0
         */
        couponId: number;
        /** The raw Payhip delete response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Disable a Payhip license key using the product secret key. */
    "payhip.disable_license": {
      input: {
        /**
         * The Payhip product secret key used to authenticate license key requests.
         * @minLength 1
         * @pattern \S
         */
        productSecretKey: string;
        /**
         * The Payhip license key value to operate on.
         * @minLength 1
         * @pattern \S
         */
        licenseKey: string;
      };
      output: {
        /** A normalized Payhip license response. */
        license: {
          /** Whether Payhip reported the license key as valid. */
          valid: boolean;
          /** The message returned by Payhip when present. */
          message: string | null;
          /** The Payhip license check object. */
          check: {
            /** The number of license uses reported by Payhip. */
            uses: number | null;
            /** Whether the license key is enabled. */
            enabled: boolean | null;
            /** The raw Payhip license check object. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Payhip license response payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Enable a Payhip license key using the product secret key. */
    "payhip.enable_license": {
      input: {
        /**
         * The Payhip product secret key used to authenticate license key requests.
         * @minLength 1
         * @pattern \S
         */
        productSecretKey: string;
        /**
         * The Payhip license key value to operate on.
         * @minLength 1
         * @pattern \S
         */
        licenseKey: string;
      };
      output: {
        /** A normalized Payhip license response. */
        license: {
          /** Whether Payhip reported the license key as valid. */
          valid: boolean;
          /** The message returned by Payhip when present. */
          message: string | null;
          /** The Payhip license check object. */
          check: {
            /** The number of license uses reported by Payhip. */
            uses: number | null;
            /** Whether the license key is enabled. */
            enabled: boolean | null;
            /** The raw Payhip license check object. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Payhip license response payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve a Payhip coupon by ID. */
    "payhip.get_coupon": {
      input: {
        /**
         * The unique Payhip coupon ID.
         * @exclusiveMinimum 0
         */
        couponId: number;
      };
      output: {
        /** A Payhip coupon object. */
        coupon: {
          /**
           * The unique Payhip coupon ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The coupon code customers enter at checkout.
           * @minLength 1
           * @pattern \S
           */
          code: string;
          /** How Payhip applies the coupon. */
          couponType: "single" | "multi" | "collection";
          /** Administrative notes returned by Payhip. */
          notes: string | null;
          /** The fixed discount amount in cents when present. */
          amountOff: number | null;
          /** The percentage discount when present. */
          percentOff: number | null;
          /** The product key when the coupon targets one product. */
          productKey: string | null;
          /** The collection ID when the coupon targets one collection. */
          collectionId: string | null;
          /** The maximum redemption count when present. */
          usageLimit: number | null;
          /** The date or datetime when the coupon becomes valid. */
          startDate: string | null;
          /** The date or datetime when the coupon expires. */
          endDate: string | null;
          /** The minimum purchase amount in cents when configured. */
          minimumPurchaseAmount: number | null;
          /** The raw Payhip coupon object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Payhip coupons, optionally starting from a specific results page. */
    "payhip.list_coupons": {
      input: {
        /**
         * The Payhip results page to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The Payhip coupons returned for the requested page. */
        coupons: Array<{
          /**
           * The unique Payhip coupon ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The coupon code customers enter at checkout.
           * @minLength 1
           * @pattern \S
           */
          code: string;
          /** How Payhip applies the coupon. */
          couponType: "single" | "multi" | "collection";
          /** Administrative notes returned by Payhip. */
          notes: string | null;
          /** The fixed discount amount in cents when present. */
          amountOff: number | null;
          /** The percentage discount when present. */
          percentOff: number | null;
          /** The product key when the coupon targets one product. */
          productKey: string | null;
          /** The collection ID when the coupon targets one collection. */
          collectionId: string | null;
          /** The maximum redemption count when present. */
          usageLimit: number | null;
          /** The date or datetime when the coupon becomes valid. */
          startDate: string | null;
          /** The date or datetime when the coupon expires. */
          endDate: string | null;
          /** The minimum purchase amount in cents when configured. */
          minimumPurchaseAmount: number | null;
          /** The raw Payhip coupon object. */
          raw: Record<string, unknown>;
        }>;
        /** The current Payhip results page when present. */
        page: number | null;
        /** The Payhip page size when present. */
        perPage: number | null;
        /** The total coupon count when present. */
        total: number | null;
        /** The raw Payhip list response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Payhip coupon using the same fields accepted by coupon creation. */
    "payhip.update_coupon": {
      input: {
        /**
         * The unique Payhip coupon ID.
         * @exclusiveMinimum 0
         */
        couponId: number;
        /**
         * The coupon code customers enter at checkout.
         * @minLength 1
         * @pattern \S
         */
        code: string;
        /** How Payhip applies the coupon. */
        couponType: "single" | "multi" | "collection";
        /** Administrative notes for the coupon. These notes are not visible to customers. */
        notes?: string;
        /**
         * The fixed discount amount in cents.
         * @exclusiveMinimum 0
         */
        amountOff?: number;
        /**
         * The percentage discount to apply.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        percentOff?: number;
        /**
         * The unique Payhip product key for a single-product coupon.
         * @minLength 1
         * @pattern \S
         */
        productKey?: string;
        /**
         * The unique Payhip collection ID.
         * @minLength 1
         * @pattern \S
         */
        collectionId?: string;
        /**
         * The maximum number of times the coupon can be redeemed.
         * @exclusiveMinimum 0
         */
        usageLimit?: number;
      };
      output: {
        /** A Payhip coupon object. */
        coupon: {
          /**
           * The unique Payhip coupon ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The coupon code customers enter at checkout.
           * @minLength 1
           * @pattern \S
           */
          code: string;
          /** How Payhip applies the coupon. */
          couponType: "single" | "multi" | "collection";
          /** Administrative notes returned by Payhip. */
          notes: string | null;
          /** The fixed discount amount in cents when present. */
          amountOff: number | null;
          /** The percentage discount when present. */
          percentOff: number | null;
          /** The product key when the coupon targets one product. */
          productKey: string | null;
          /** The collection ID when the coupon targets one collection. */
          collectionId: string | null;
          /** The maximum redemption count when present. */
          usageLimit: number | null;
          /** The date or datetime when the coupon becomes valid. */
          startDate: string | null;
          /** The date or datetime when the coupon expires. */
          endDate: string | null;
          /** The minimum purchase amount in cents when configured. */
          minimumPurchaseAmount: number | null;
          /** The raw Payhip coupon object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Verify a Payhip license key using the product secret key. */
    "payhip.verify_license": {
      input: {
        /**
         * The Payhip product secret key used to authenticate license key requests.
         * @minLength 1
         * @pattern \S
         */
        productSecretKey: string;
        /**
         * The Payhip license key value to operate on.
         * @minLength 1
         * @pattern \S
         */
        licenseKey: string;
      };
      output: {
        /** A normalized Payhip license response. */
        license: {
          /** Whether Payhip reported the license key as valid. */
          valid: boolean;
          /** The message returned by Payhip when present. */
          message: string | null;
          /** The Payhip license check object. */
          check: {
            /** The number of license uses reported by Payhip. */
            uses: number | null;
            /** Whether the license key is enabled. */
            enabled: boolean | null;
            /** The raw Payhip license check object. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Payhip license response payload. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
