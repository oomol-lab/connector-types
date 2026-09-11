import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a single-use URL for a Coupontools coupon campaign. */
    "coupontools.create_single_use_url": {
      input: {
        /**
         * The coupon campaign ID, such as cam_123456.
         * @minLength 1
         */
        campaign: string;
        /**
         * The recipient's first name.
         * @minLength 1
         */
        firstname?: string;
        /**
         * The recipient's last name.
         * @minLength 1
         */
        lastname?: string;
        /**
         * The recipient's email address.
         * @minLength 1
         * @format email
         */
        email?: string;
        /**
         * The recipient's phone number.
         * @minLength 1
         */
        phone?: string;
        /**
         * A custom recipient ID of at most 50 characters.
         * @minLength 1
         * @maxLength 50
         */
        customid?: string;
        /**
         * A custom validation code of at most 100 characters.
         * @minLength 1
         * @maxLength 100
         */
        customvalcode?: string;
        /**
         * Custom recipient field 1, with at most 50 characters.
         * @minLength 1
         * @maxLength 50
         */
        customfield1?: string;
        /**
         * Custom recipient field 2, with at most 50 characters.
         * @minLength 1
         * @maxLength 50
         */
        customfield2?: string;
        /**
         * Custom recipient field 3, with at most 50 characters.
         * @minLength 1
         * @maxLength 50
         */
        customfield3?: string;
        /**
         * Custom recipient field 4, with at most 50 characters.
         * @minLength 1
         * @maxLength 50
         */
        customfield4?: string;
        /**
         * Custom recipient field 5, with at most 50 characters.
         * @minLength 1
         * @maxLength 50
         */
        customfield5?: string;
        /**
         * Custom recipient field 6, with at most 50 characters.
         * @minLength 1
         * @maxLength 50
         */
        customfield6?: string;
        /**
         * Custom recipient field 7, with at most 50 characters.
         * @minLength 1
         * @maxLength 50
         */
        customfield7?: string;
        /** The length of an automatically generated validation code. */
        autovalcode?: "6digits" | "8digits" | "10digits";
        /** The recipient field used to detect an existing single-use URL. */
        duplicate_check?: "email" | "phone" | "customid";
        /**
         * The expiry datetime in yyyy-MM-dd HH:mm:ss format, using the campaign timezone.
         * @minLength 1
         */
        expiry_date?: string;
        /**
         * The Google Analytics campaign tag.
         * @minLength 1
         */
        utm_campaign?: string;
        /**
         * The Google Analytics source tag.
         * @minLength 1
         */
        utm_source?: string;
        /**
         * The Google Analytics medium tag.
         * @minLength 1
         */
        utm_medium?: string;
        /**
         * The Google Analytics term tag.
         * @minLength 1
         */
        utm_term?: string;
        /**
         * The Google Analytics content tag.
         * @minLength 1
         */
        utm_content?: string;
      };
      output: {
        /**
         * The generated single-use coupon URL.
         * @minLength 1
         */
        single_use_url: string;
        /**
         * The generated single-use coupon code.
         * @minLength 1
         */
        single_use_code: string;
        /** The raw Coupontools API object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Coupontools coupon campaign by ID. */
    "coupontools.get_coupon": {
      input: {
        /**
         * The coupon campaign ID, such as cam_123456.
         * @minLength 1
         */
        campaign: string;
        /** Whether to include coupon usage statistics. */
        show_usage_stats?: boolean;
      };
      output: {
        /** The raw Coupontools API object. */
        coupon: Record<string, unknown>;
        /** The raw Coupontools API object. */
        raw: Record<string, unknown>;
      };
    };
    /** List coupon campaigns available to the authenticated Coupontools account. */
    "coupontools.list_coupons": {
      input: {
        /** Whether to return only active coupon campaigns. */
        only_active?: boolean;
        /**
         * The Coupontools folder ID to match.
         * @minLength 1
         */
        folder?: string;
        /**
         * A comma-separated list of coupon tags to match.
         * @minLength 1
         */
        tags?: string;
        /**
         * The Coupontools category ID to match.
         * @minLength 1
         */
        category?: string;
      };
      output: {
        /** The matching coupon campaigns. */
        coupons: Array<Record<string, unknown>>;
        /** The raw Coupontools API object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
