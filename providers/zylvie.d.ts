import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a coupon in Zylvie. */
    "zylvie.create_coupon": {
      input: {
        /**
         * The unique case-insensitive coupon code.
         * @minLength 2
         * @maxLength 100
         */
        code: string;
        /** The discount calculation type. */
        type: "percentage" | "fixed";
        /**
         * The discount amount.
         * @minimum 0.1
         * @maximum 999999.99
         */
        amount: number;
        /** Whether the coupon applies to every product. */
        isStorewide?: boolean;
        /**
         * The product IDs to which a non-storewide coupon applies.
         * @minItems 1
         */
        productIds?: Array<string>;
        /** Whether the coupon is active. */
        isLive?: boolean;
        /**
         * The maximum number of redemptions.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of subscription months discounted.
         * @minimum 1
         */
        durationInMonths?: number;
        /**
         * The coupon start time in ISO 8601 format.
         * @format date-time
         */
        start?: string;
        /**
         * The coupon expiration time in ISO 8601 format.
         * @format date-time
         */
        end?: string;
        /**
         * The affiliate ID associated with the coupon.
         * @minLength 1
         */
        affiliateId?: string;
        /**
         * The subscription product whose active subscribers may use the coupon.
         * @minLength 1
         */
        requiredSubscriptionProductId?: string;
      };
      output: Record<string, unknown>;
    };
    /** Create a product in Zylvie. */
    "zylvie.create_product": {
      input: {
        /**
         * The product title.
         * @minLength 1
         * @maxLength 500
         */
        title: string;
        /**
         * The unique vanity URL slug.
         * @minLength 1
         * @maxLength 100
         * @pattern ^[A-Za-z0-9_.-]+$
         */
        url: string;
        /**
         * The lowercase ISO 4217 currency code.
         * @minLength 3
         * @maxLength 3
         * @pattern ^[a-z]{3}$
         */
        currency: string;
        /**
         * The base product price.
         * @minimum 0
         */
        price: number;
        /** The product billing model. */
        pricingModel: "one-time" | "subscription" | "delayed";
        /** How the product appears in the storefront. */
        display: "featured" | "listed" | "unlisted" | "unpublished";
        /**
         * The product subtitle.
         * @maxLength 500
         */
        subtitle?: string;
        /** The product description in HTML. */
        description?: string;
        /** The product summary in HTML. */
        summary?: string;
        /** The recurring billing interval. */
        interval?: "day" | "week" | "month" | "year";
        /**
         * The number of billing intervals between charges.
         * @minimum 1
         */
        intervalCount?: number;
        /**
         * The number of free-trial days.
         * @minimum 0
         */
        trialPeriodDays?: number;
        /** Whether checkout collects the buyer address and phone number. */
        collectAddressAndPhone?: boolean;
        /**
         * The product shipping fee.
         * @minimum 0
         */
        shippingFee?: number;
        /** How shipping fees scale with quantity. */
        shippingType?: "flat" | "per_quantity";
        /** The categories assigned to the product. */
        categories?: Array<string>;
        /** The tags assigned to the product. */
        tags?: Array<string>;
        /** Public image URLs assigned to the product. */
        productImageUrls?: Array<string>;
        /** Public downloadable file URLs for the product. */
        productFileUrls?: Array<string>;
        /**
         * The subject of the product download email.
         * @maxLength 100
         */
        downloadEmailSubject?: string;
        /** The HTML body of the product download email. */
        downloadEmailBody?: string;
        /**
         * The post-purchase redirect URL or Zylvie-local path.
         * @maxLength 2500
         */
        successUrl?: string;
        /**
         * The subject of the post-purchase success email.
         * @maxLength 100
         */
        successEmailSubject?: string;
        /** The HTML body of the post-purchase success email. */
        successEmailBody?: string;
        /**
         * The unique slug for the gated product page.
         * @maxLength 100
         */
        gatedPageUrl?: string;
        /** The HTML body of the gated product page. */
        gatedPageBody?: string;
        /** Whether purchases receive unique license keys. */
        isLicensed?: boolean;
        /** The HTML instructions for redeeming a license key. */
        redemptionInstructions?: string;
        /** Whether Zylvie workflow automations should ignore this product. */
        excludeFromAutomations?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Delete a Zylvie coupon, or archive it when transaction history requires it. */
    "zylvie.delete_coupon": {
      input: {
        /**
         * The Zylvie object identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The operation status. */
        status: string;
        /** The deletion or archival result message. */
        message: string;
        [key: string]: unknown;
      };
    };
    /** Delete a Zylvie product, or archive it when transaction history requires it. */
    "zylvie.delete_product": {
      input: {
        /**
         * The Zylvie object identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The operation status. */
        status: string;
        /** The deletion or archival result message. */
        message: string;
        [key: string]: unknown;
      };
    };
    /** Get the Zylvie user and brand authenticated by the current API key. */
    "zylvie.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The account email address. */
        email: string;
        /** The account brand name. */
        brand: string;
        [key: string]: unknown;
      };
    };
    /** List active or archived coupons for the authenticated Zylvie brand. */
    "zylvie.list_coupons": {
      input: {
        /** Whether to return archived coupons instead of active coupons. */
        archived?: boolean;
      };
      output: {
        /** The number of returned coupons. */
        count: number;
        /** The coupons returned by Zylvie. */
        coupons: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Mark a Zylvie license key as redeemed. */
    "zylvie.redeem_license_key": {
      input: {
        /**
         * The license key issued by Zylvie.
         * @minLength 1
         */
        licenseKey: string;
      };
      output: Record<string, unknown>;
    };
    /** Mark a Zylvie license key as refunded. */
    "zylvie.refund_license_key": {
      input: {
        /**
         * The license key issued by Zylvie.
         * @minLength 1
         */
        licenseKey: string;
      };
      output: Record<string, unknown>;
    };
    /** Update selected fields on an existing Zylvie coupon. */
    "zylvie.update_coupon": {
      input: {
        /**
         * The Zylvie object identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The unique case-insensitive coupon code.
         * @minLength 2
         * @maxLength 100
         */
        code?: string;
        /** The discount calculation type. */
        type?: "percentage" | "fixed";
        /**
         * The discount amount.
         * @minimum 0.1
         * @maximum 999999.99
         */
        amount?: number;
        /** Whether the coupon applies to every product. */
        isStorewide?: boolean;
        /**
         * The product IDs to which a non-storewide coupon applies.
         * @minItems 1
         */
        productIds?: Array<string>;
        /** Whether the coupon is active. */
        isLive?: boolean;
        /**
         * The maximum number of redemptions.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of subscription months discounted.
         * @minimum 1
         */
        durationInMonths?: number;
        /**
         * The coupon start time in ISO 8601 format.
         * @format date-time
         */
        start?: string;
        /**
         * The coupon expiration time in ISO 8601 format.
         * @format date-time
         */
        end?: string;
        /**
         * The affiliate ID associated with the coupon.
         * @minLength 1
         */
        affiliateId?: string;
        /**
         * The subscription product whose active subscribers may use the coupon.
         * @minLength 1
         */
        requiredSubscriptionProductId?: string;
      };
      output: Record<string, unknown>;
    };
    /** Update selected fields on an existing Zylvie product. */
    "zylvie.update_product": {
      input: {
        /**
         * The Zylvie object identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The product title.
         * @minLength 1
         * @maxLength 500
         */
        title?: string;
        /**
         * The unique vanity URL slug.
         * @minLength 1
         * @maxLength 100
         * @pattern ^[A-Za-z0-9_.-]+$
         */
        url?: string;
        /**
         * The lowercase ISO 4217 currency code.
         * @minLength 3
         * @maxLength 3
         * @pattern ^[a-z]{3}$
         */
        currency?: string;
        /**
         * The base product price.
         * @minimum 0
         */
        price?: number;
        /** The product billing model. */
        pricingModel?: "one-time" | "subscription" | "delayed";
        /** How the product appears in the storefront. */
        display?: "featured" | "listed" | "unlisted" | "unpublished";
        /**
         * The product subtitle.
         * @maxLength 500
         */
        subtitle?: string;
        /** The product description in HTML. */
        description?: string;
        /** The product summary in HTML. */
        summary?: string;
        /** The recurring billing interval. */
        interval?: "day" | "week" | "month" | "year";
        /**
         * The number of billing intervals between charges.
         * @minimum 1
         */
        intervalCount?: number;
        /**
         * The number of free-trial days.
         * @minimum 0
         */
        trialPeriodDays?: number;
        /** Whether checkout collects the buyer address and phone number. */
        collectAddressAndPhone?: boolean;
        /**
         * The product shipping fee.
         * @minimum 0
         */
        shippingFee?: number;
        /** How shipping fees scale with quantity. */
        shippingType?: "flat" | "per_quantity";
        /** The categories assigned to the product. */
        categories?: Array<string>;
        /** The tags assigned to the product. */
        tags?: Array<string>;
        /** Public image URLs assigned to the product. */
        productImageUrls?: Array<string>;
        /** Public downloadable file URLs for the product. */
        productFileUrls?: Array<string>;
        /**
         * The subject of the product download email.
         * @maxLength 100
         */
        downloadEmailSubject?: string;
        /** The HTML body of the product download email. */
        downloadEmailBody?: string;
        /**
         * The post-purchase redirect URL or Zylvie-local path.
         * @maxLength 2500
         */
        successUrl?: string;
        /**
         * The subject of the post-purchase success email.
         * @maxLength 100
         */
        successEmailSubject?: string;
        /** The HTML body of the post-purchase success email. */
        successEmailBody?: string;
        /**
         * The unique slug for the gated product page.
         * @maxLength 100
         */
        gatedPageUrl?: string;
        /** The HTML body of the gated product page. */
        gatedPageBody?: string;
        /** Whether purchases receive unique license keys. */
        isLicensed?: boolean;
        /** The HTML instructions for redeeming a license key. */
        redemptionInstructions?: string;
        /** Whether Zylvie workflow automations should ignore this product. */
        excludeFromAutomations?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Verify that a Zylvie license key is valid for a product. */
    "zylvie.verify_license_key": {
      input: {
        /**
         * The Zylvie object identifier.
         * @minLength 1
         */
        productId: string;
        /**
         * The license key issued by Zylvie.
         * @minLength 1
         */
        licenseKey: string;
      };
      output: Record<string, unknown>;
    };
    /** List Zylvie subscriptions associated with a subscriber email address. */
    "zylvie.verify_subscriptions": {
      input: {
        /**
         * The subscriber email address.
         * @format email
         */
        email: string;
      };
      output: {
        /** The subscriptions returned by Zylvie. */
        subscriptions: Array<Record<string, unknown>>;
      };
    };
  }
}
