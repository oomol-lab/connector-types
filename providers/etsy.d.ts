import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Record an Etsy shipment and notify the buyer by email on every successful call. Omit tracking and carrier to mark shipped only; both are required for US domestic orders over $10 and shipments to India. Use carrier 'other' for unsupported carriers. Regional partner restrictions may apply even with valid credentials and scopes. */
    "etsy.create_receipt_shipment": {
      input: {
        /**
         * The unique positive non-zero numeric ID for an Etsy Shop.
         * @minimum 1
         */
        shop_id: number;
        /**
         * The receipt to submit tracking for.
         * @minimum 1
         */
        receipt_id: number;
        /** Enable Etsy's processing-profile request and response behavior. */
        legacy?: boolean;
        /** The tracking code for this receipt. */
        tracking_code?: string;
        /** The carrier name for this receipt. */
        carrier_name?: string;
        /** If true, the shipping notification will be sent to the seller as well */
        send_bcc?: boolean;
        /** Message to include in notification to the buyer. */
        note_to_buyer?: string;
        /** The service level of postal or carrier service selected for the shipment (e.g., First-Class, Priority, Ground, Express). */
        mail_class?: string | null;
        /** The total weight of the package. */
        weight?: number | null;
        /** Unit of measurement used for package weight (oz, grams, etc.). */
        weight_units?: string | null;
        /** Longest side of the package. */
        length?: number | null;
        /** Second longest side of the package. */
        width?: number | null;
        /** Third longest side of the package. */
        height?: number | null;
        /** Unit of measurement used for package dimensions (in, cm...). */
        dimension_units?: string | null;
        /** The purchase price the seller paid for the shipping label. */
        shipping_label_cost?: number | null;
        /** The currency in which the shipping label was purchased. */
        shipping_label_currency?: string | null;
        /** A flag indicating if the shipment is tied to a revenue share agreement between Etsy and the vendor. */
        revenue_eligibility?: string | null;
        /** Where the package ships from. */
        ship_from_country?: string | null;
        /** Package destination. */
        ship_to_country?: string | null;
        /** The specific incoterm (e.g., DDU, DDP) designated for the shipment. */
        incoterm?: string | null;
        /** Contains custom data like country of origin, declared value and HS code. */
        customs_data?: Array<{
          /** The country in which the goods originate from. */
          country_of_origin: string | null;
          /** The commercial value of the goods. */
          declared_value: number | null;
          /** The standardized global system (Harmonized System) for classifying traded products. */
          HS_code: string | null;
        }> | null;
        /** The estimated or actual amount of import duties and taxes assessed by customs for the shipment. */
        duty_amount?: number | null;
        /** The currency in which the duty was paid. */
        duty_currency?: string | null;
        /** The date package was shipped. */
        ship_date?: string | null;
      };
      output: {
        /** The Etsy receipt ID. */
        receipt_id?: number;
        /** The seller's user ID. */
        seller_user_id?: number;
        /** The buyer's user ID. */
        buyer_user_id?: number;
        /** The receipt status. */
        status?: string;
        /** Whether payment has been received. */
        is_paid?: boolean;
        /** Whether the receipt is marked as shipped. */
        is_shipped?: boolean;
        /** An Etsy money amount; divide amount by divisor to obtain the currency value. */
        grandtotal?: {
          /** The amount in fractional currency units. */
          amount?: number;
          /** The divisor used to convert the amount. */
          divisor?: number;
          /** The currency code. */
          currency_code?: string;
          [key: string]: unknown;
        };
        /** The purchased items. */
        transactions?: Array<Record<string, unknown>>;
        /** The recorded shipments. */
        shipments?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get an Etsy listing with optional associations and translation. */
    "etsy.get_listing": {
      input: {
        /**
         * The numeric ID for the [listing](/documentation/reference#tag/ShopListing) associated to this transaction.
         * @minimum 1
         */
        listing_id: number;
        /** The associations to include in the response. */
        includes?: Array<"Images" | "Shop" | "User" | "Translations" | "Videos" | "Personalization" | "BuyerPrice">;
        /** The IETF language tag for the language of this translation. Ex: `de`, `en`, `es`, `fr`, `it`, `ja`, `nl`, `pl`, `pt`. */
        language?: string;
        /** This parameter will include in the response a suggested title for the listing, if one is available. Since suggestions are only available to the listing's owner, client must submit an oauth_access_token scoped to the owner of the listing. */
        allow_suggested_title?: boolean;
      };
      output: {
        /** The Etsy listing ID. */
        listing_id?: number;
        /** The Etsy shop ID. */
        shop_id?: number;
        /** The listing title. */
        title?: string;
        /** The listing description. */
        description?: string;
        /** The current listing state. */
        state?: string;
        /** The available listing quantity. */
        quantity?: number;
        /** The public listing URL. */
        url?: string;
        /** An Etsy money amount; divide amount by divisor to obtain the currency value. */
        price?: {
          /** The amount in fractional currency units. */
          amount?: number;
          /** The divisor used to convert the amount. */
          divisor?: number;
          /** The currency code. */
          currency_code?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read inventory for a listing you own. Listings without Etsy inventory records may have no inventory. */
    "etsy.get_listing_inventory": {
      input: {
        /**
         * The numeric ID for the [listing](/documentation/reference#tag/ShopListing) associated to this transaction.
         * @minimum 1
         */
        listing_id: number;
        /** A boolean value for inventory whether to include deleted products and their offerings. Default value is false. */
        show_deleted?: boolean;
        /** The associations to include in the response. */
        includes?: "Listing";
      };
      output: {
        /** The inventory products, SKUs, property values, and offerings. */
        products?: Array<Record<string, unknown>>;
        /** Property IDs that affect price. */
        price_on_property?: Array<number>;
        /** Property IDs that affect quantity. */
        quantity_on_property?: Array<number>;
        /** Property IDs that affect SKU. */
        sku_on_property?: Array<number>;
        [key: string]: unknown;
      };
    };
    /** Get the connected Etsy user ID and shop ID. */
    "etsy.get_me": {
      input: Record<string, never>;
      output: {
        /** The Etsy user ID. */
        user_id?: number;
        /** The Etsy shop ID. */
        shop_id?: number | null;
        [key: string]: unknown;
      };
    };
    /** Get an Etsy order receipt, including available shipping and payment details. Address availability depends on Etsy regional partner access. */
    "etsy.get_receipt": {
      input: {
        /**
         * The unique positive non-zero numeric ID for an Etsy Shop.
         * @minimum 1
         */
        shop_id: number;
        /**
         * The numeric ID for the [receipt](/documentation/reference#tag/Shop-Receipt) associated to this transaction.
         * @minimum 1
         */
        receipt_id: number;
        /** Enable Etsy's processing-profile request and response behavior. */
        legacy?: boolean;
      };
      output: {
        /** The Etsy receipt ID. */
        receipt_id?: number;
        /** The seller's user ID. */
        seller_user_id?: number;
        /** The buyer's user ID. */
        buyer_user_id?: number;
        /** The receipt status. */
        status?: string;
        /** Whether payment has been received. */
        is_paid?: boolean;
        /** Whether the receipt is marked as shipped. */
        is_shipped?: boolean;
        /** An Etsy money amount; divide amount by divisor to obtain the currency value. */
        grandtotal?: {
          /** The amount in fractional currency units. */
          amount?: number;
          /** The divisor used to convert the amount. */
          divisor?: number;
          /** The currency code. */
          currency_code?: string;
          [key: string]: unknown;
        };
        /** The purchased items. */
        transactions?: Array<Record<string, unknown>>;
        /** The recorded shipments. */
        shipments?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get an Etsy shop's public details. */
    "etsy.get_shop": {
      input: {
        /**
         * The unique positive non-zero numeric ID for an Etsy Shop.
         * @minimum 1
         */
        shop_id: number;
      };
      output: {
        /** The Etsy shop ID. */
        shop_id?: number;
        /** The shop owner's user ID. */
        user_id?: number;
        /** The shop name. */
        shop_name?: string;
        /** The shop title. */
        title?: string | null;
        /** The public shop URL. */
        url?: string;
        /** The number of active listings. */
        listing_active_count?: number;
        [key: string]: unknown;
      };
    };
    /** Get an Etsy shop by its owner's user ID. */
    "etsy.get_shop_by_owner": {
      input: {
        /**
         * The numeric user ID of the [user](/documentation/reference#tag/User) who owns this shop.
         * @minimum 1
         */
        user_id: number;
      };
      output: {
        /** The Etsy shop ID. */
        shop_id?: number;
        /** The shop owner's user ID. */
        user_id?: number;
        /** The shop name. */
        shop_name?: string;
        /** The shop title. */
        title?: string | null;
        /** The public shop URL. */
        url?: string;
        /** The number of active listings. */
        listing_active_count?: number;
        [key: string]: unknown;
      };
    };
    /** List the purchased items for an Etsy order receipt. */
    "etsy.list_receipt_transactions": {
      input: {
        /**
         * The unique positive non-zero numeric ID for an Etsy Shop.
         * @minimum 1
         */
        shop_id: number;
        /**
         * The numeric ID for the [receipt](/documentation/reference#tag/Shop-Receipt) associated to this transaction.
         * @minimum 1
         */
        receipt_id: number;
        /** Enable Etsy's processing-profile request and response behavior. */
        legacy?: boolean;
      };
      output: {
        /** The total number of matching records. */
        count?: number;
        /** The records returned by this request. */
        results?: Array<{
          /** The Etsy transaction ID. */
          transaction_id?: number;
          /** The Etsy receipt ID. */
          receipt_id?: number;
          /** The Etsy listing ID. */
          listing_id?: number;
          /** The purchased item's title. */
          title?: string;
          /** The purchased quantity. */
          quantity?: number;
          /** An Etsy money amount; divide amount by divisor to obtain the currency value. */
          price?: {
            /** The amount in fractional currency units. */
            amount?: number;
            /** The divisor used to convert the amount. */
            divisor?: number;
            /** The currency code. */
            currency_code?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Etsy order receipts by dates, payment, shipping, delivery, and cancellation status. Address availability depends on Etsy regional partner access. */
    "etsy.list_receipts": {
      input: {
        /**
         * The unique positive non-zero numeric ID for an Etsy Shop.
         * @minimum 1
         */
        shop_id: number;
        /**
         * The earliest unix timestamp for when a record was created.
         * @minimum 946684800
         */
        min_created?: number;
        /**
         * The latest unix timestamp for when a record was created.
         * @minimum 946684800
         */
        max_created?: number;
        /**
         * The earliest unix timestamp for when a record last changed.
         * @minimum 946684800
         */
        min_last_modified?: number;
        /**
         * The latest unix timestamp for when a record last changed.
         * @minimum 946684800
         */
        max_last_modified?: number;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of records to skip before selecting the first result.
         * @minimum 0
         */
        offset?: number;
        /** The field to sort by. Defaults to created. */
        sort_on?: "created" | "updated" | "receipt_id";
        /** The sort direction. Defaults to desc. */
        sort_order?: "asc" | "ascending" | "desc" | "descending" | "up" | "down";
        /** When `true`, returns receipts where the seller has received payment for the receipt. When `false`, returns receipts where payment has not been received. */
        was_paid?: boolean | null;
        /** When `true`, returns receipts where the seller shipped the product(s) in this receipt. When `false`, returns receipts where shipment has not been set. */
        was_shipped?: boolean | null;
        /** When `true`, returns receipts that have been marked as delivered. When `false`, returns receipts where shipment has not been marked as delivered. */
        was_delivered?: boolean | null;
        /** When `true`, the endpoint will only return the canceled receipts. When `false`, the endpoint will only return non-canceled receipts. */
        was_canceled?: boolean | null;
        /** Enable Etsy's processing-profile request and response behavior. */
        legacy?: boolean;
      };
      output: {
        /** The total number of matching records. */
        count?: number;
        /** The records returned by this request. */
        results?: Array<{
          /** The Etsy receipt ID. */
          receipt_id?: number;
          /** The seller's user ID. */
          seller_user_id?: number;
          /** The buyer's user ID. */
          buyer_user_id?: number;
          /** The receipt status. */
          status?: string;
          /** Whether payment has been received. */
          is_paid?: boolean;
          /** Whether the receipt is marked as shipped. */
          is_shipped?: boolean;
          /** An Etsy money amount; divide amount by divisor to obtain the currency value. */
          grandtotal?: {
            /** The amount in fractional currency units. */
            amount?: number;
            /** The divisor used to convert the amount. */
            divisor?: number;
            /** The currency code. */
            currency_code?: string;
            [key: string]: unknown;
          };
          /** The purchased items. */
          transactions?: Array<Record<string, unknown>>;
          /** The recorded shipments. */
          shipments?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List an Etsy shop's listings by state with limit/offset pagination. */
    "etsy.list_shop_listings": {
      input: {
        /**
         * The unique positive non-zero numeric ID for an Etsy Shop.
         * @minimum 1
         */
        shop_id: number;
        /** The listing state to retrieve. Defaults to active. */
        state?: "active" | "inactive" | "sold_out" | "draft" | "removed" | "expired";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of records to skip before selecting the first result.
         * @minimum 0
         */
        offset?: number;
        /** The field to sort by. Defaults to created. */
        sort_on?: "created" | "price" | "updated" | "score";
        /** The sort direction. Defaults to desc. */
        sort_order?: "asc" | "ascending" | "desc" | "descending" | "up" | "down";
        /** The associations to include in the response. */
        includes?: Array<"Shipping" | "Images" | "Shop" | "User" | "Translations" | "Inventory" | "Videos" | "Personalization" | "BuyerPrice">;
      };
      output: {
        /** The total number of matching records. */
        count?: number;
        /** The records returned by this request. */
        results?: Array<{
          /** The Etsy listing ID. */
          listing_id?: number;
          /** The Etsy shop ID. */
          shop_id?: number;
          /** The listing title. */
          title?: string;
          /** The listing description. */
          description?: string;
          /** The current listing state. */
          state?: string;
          /** The available listing quantity. */
          quantity?: number;
          /** The public listing URL. */
          url?: string;
          /** An Etsy money amount; divide amount by divisor to obtain the currency value. */
          price?: {
            /** The amount in fractional currency units. */
            amount?: number;
            /** The divisor used to convert the amount. */
            divisor?: number;
            /** The currency code. */
            currency_code?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the sections of an Etsy shop. */
    "etsy.list_shop_sections": {
      input: {
        /**
         * The unique positive non-zero numeric ID for an Etsy Shop.
         * @minimum 1
         */
        shop_id: number;
      };
      output: {
        /** The total number of matching records. */
        count?: number;
        /** The records returned by this request. */
        results?: Array<{
          /** The Etsy shop section ID. */
          shop_section_id?: number;
          /** The section title. */
          title?: string;
          /** The section display rank. */
          rank?: number;
          /** The number of active listings in the section. */
          active_listing_count?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
