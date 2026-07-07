import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Extract basic receipt or invoice data from a public HTTPS file URL with Taggun. */
    "taggun.extract_receipt_simple_url": {
      input: {
        /**
         * Public HTTPS URL containing the receipt or invoice file.
         * @minLength 1
         * @format uri
         */
        url: string;
        /** Optional headers Taggun should forward while downloading the receipt URL. */
        headers?: Record<string, string>;
        /** Whether Taggun should return the receipt time when it is found instead of defaulting to noon. */
        extractTime?: boolean;
        /**
         * The end user's IP address associated with this receipt request.
         * @minLength 1
         */
        ipAddress?: string;
        /**
         * A geographic hint such as city, state, or country to help merchant search.
         * @minLength 1
         */
        near?: string;
        /** Optional language hint for Taggun OCR. Leave unset for automatic detection. */
        language?: "en" | "es" | "fr" | "jp" | "he" | "iw" | "et" | "lv" | "lt" | "fi" | "el" | "zh" | "th";
        /**
         * Merchant name Taggun should ignore if detected on the receipt.
         * @minLength 1
         */
        ignoreMerchantName?: string;
        /** Whether Taggun should reprocess a receipt that is already stored. */
        refresh?: boolean;
        /** Whether Taggun should avoid saving the receipt in storage. */
        incognito?: boolean;
        /**
         * Sub-account ID used by Taggun for billing or reporting segmentation.
         * @minLength 1
         * @maxLength 100
         */
        subAccountId?: string;
        /**
         * Unique reference ID used by Taggun for feedback or training.
         * @minLength 1
         * @maxLength 50
         */
        referenceId?: string;
      };
      output: {
        /** The full receipt OCR payload returned by Taggun. */
        receipt: Record<string, unknown>;
        /** Taggun tracking ID when returned. */
        trackingId: string | null;
        /** Overall Taggun confidence level when returned. */
        confidenceLevel: number | null;
        /** Extracted receipt total amount when returned. */
        totalAmount: number | null;
        /** Extracted receipt tax amount when returned. */
        taxAmount: number | null;
        /** Extracted merchant name when returned. */
        merchantName: string | null;
        /** Extracted merchant country code when returned. */
        merchantCountryCode: string | null;
        /** Extracted receipt transaction date when returned. */
        date: string | null;
        /** Raw OCR text when returned. */
        rawText: string | null;
      };
    };
    /** Extract detailed receipt or invoice OCR data from a public HTTPS file URL with Taggun. */
    "taggun.extract_receipt_verbose_url": {
      input: {
        /**
         * Public HTTPS URL containing the receipt or invoice file.
         * @minLength 1
         * @format uri
         */
        url: string;
        /** Whether Taggun should return product line items when found on the receipt. */
        extractLineItems?: boolean;
        /** Optional headers Taggun should forward while downloading the receipt URL. */
        headers?: Record<string, string>;
        /** Whether Taggun should return the receipt time when it is found instead of defaulting to noon. */
        extractTime?: boolean;
        /**
         * The end user's IP address associated with this receipt request.
         * @minLength 1
         */
        ipAddress?: string;
        /**
         * A geographic hint such as city, state, or country to help merchant search.
         * @minLength 1
         */
        near?: string;
        /** Optional language hint for Taggun OCR. Leave unset for automatic detection. */
        language?: "en" | "es" | "fr" | "jp" | "he" | "iw" | "et" | "lv" | "lt" | "fi" | "el" | "zh" | "th";
        /**
         * Merchant name Taggun should ignore if detected on the receipt.
         * @minLength 1
         */
        ignoreMerchantName?: string;
        /** Whether Taggun should reprocess a receipt that is already stored. */
        refresh?: boolean;
        /** Whether Taggun should avoid saving the receipt in storage. */
        incognito?: boolean;
        /**
         * Sub-account ID used by Taggun for billing or reporting segmentation.
         * @minLength 1
         * @maxLength 100
         */
        subAccountId?: string;
        /**
         * Unique reference ID used by Taggun for feedback or training.
         * @minLength 1
         * @maxLength 50
         */
        referenceId?: string;
      };
      output: {
        /** The full receipt OCR payload returned by Taggun. */
        receipt: Record<string, unknown>;
        /** Taggun tracking ID when returned. */
        trackingId: string | null;
        /** Overall Taggun confidence level when returned. */
        confidenceLevel: number | null;
        /** Extracted receipt total amount when returned. */
        totalAmount: number | null;
        /** Extracted receipt tax amount when returned. */
        taxAmount: number | null;
        /** Extracted merchant name when returned. */
        merchantName: string | null;
        /** Extracted merchant country code when returned. */
        merchantCountryCode: string | null;
        /** Extracted receipt transaction date when returned. */
        date: string | null;
        /** Raw OCR text when returned. */
        rawText: string | null;
      };
    };
    /** Get Taggun validation settings for an existing campaign ID. */
    "taggun.get_campaign_settings": {
      input: {
        /**
         * The Taggun campaign ID.
         * @minLength 1
         * @maxLength 50
         */
        campaignId: string;
      };
      output: {
        /** The Taggun campaign ID that was requested. */
        campaignId: string;
        /** The Taggun campaign settings object. */
        settings: Record<string, unknown>;
      };
    };
    /** List Taggun campaign IDs linked to the connected account. */
    "taggun.list_campaign_ids": {
      input: Record<string, never>;
      output: {
        /** Campaign IDs linked to the connected Taggun account. */
        campaignIds: Array<string>;
      };
    };
    /** Validate a public HTTPS receipt or invoice URL against existing Taggun campaign settings. */
    "taggun.validate_receipt_url": {
      input: {
        /**
         * Public HTTPS URL containing the receipt or invoice file.
         * @minLength 1
         * @format uri
         */
        url: string;
        /**
         * The Taggun campaign ID.
         * @minLength 1
         * @maxLength 50
         */
        campaignId: string;
        /** Optional headers Taggun should forward while downloading the receipt URL. */
        headers?: Record<string, string>;
        /**
         * Receipt reference ID for duplicate handling and tracking.
         * @minLength 1
         * @maxLength 50
         */
        referenceId?: string;
        /**
         * End-user identifier used by Taggun fraud checks.
         * @minLength 1
         * @maxLength 50
         */
        userId?: string;
        /**
         * Sub-account ID used by Taggun for reporting or billing segmentation.
         * @minLength 1
         * @maxLength 100
         */
        subAccountId?: string;
        /** Whether Taggun should avoid saving the receipt in storage. */
        incognito?: boolean;
        /**
         * The end user's IP address associated with this validation request.
         * @minLength 1
         */
        ipAddress?: string;
        /**
         * A geographic hint such as city, state, or country to help merchant search.
         * @minLength 1
         */
        near?: string;
        /** Optional language hint for Taggun OCR. Leave unset for automatic detection. */
        language?: "en" | "es" | "fr" | "jp" | "he" | "iw" | "et" | "lv" | "lt" | "fi" | "el" | "zh" | "th";
      };
      output: {
        /** The full validation payload returned by Taggun. */
        validation: Record<string, unknown>;
        /** Whether all enabled campaign validation checks passed. */
        successful: boolean | null;
        /** Validation keys that failed. */
        failedValidations: Array<string>;
        /** Validation keys that passed. */
        passedValidations: Array<string>;
        /** Taggun tracking ID for this validation request. */
        trackingId: string | null;
      };
    };
  }
}
