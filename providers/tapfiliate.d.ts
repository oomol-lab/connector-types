import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Tapfiliate affiliate with contact, company, address, and custom field data. */
    "tapfiliate.create_affiliate": {
      input: {
        /**
         * The affiliate's first name.
         * @minLength 1
         */
        firstname: string;
        /**
         * The affiliate's last name.
         * @minLength 1
         */
        lastname: string;
        /**
         * The affiliate's email address.
         * @format email
         */
        email: string;
        /**
         * The password for the new affiliate account.
         * @minLength 1
         */
        password?: string;
        /** The affiliate's company data. */
        company?: {
          /**
           * The affiliate company's name.
           * @minLength 1
           */
          name?: string;
          /**
           * The affiliate company's description.
           * @minLength 1
           */
          description?: string;
          [key: string]: unknown;
        };
        /** The affiliate's address data. */
        address?: {
          /**
           * The street address.
           * @minLength 1
           */
          address: string;
          /**
           * The second address line.
           * @minLength 1
           */
          address_two?: string;
          /**
           * The postal code.
           * @minLength 1
           */
          postal_code: string;
          /**
           * The city.
           * @minLength 1
           */
          city: string;
          /**
           * The state or region.
           * @minLength 1
           */
          state?: string;
          /** The affiliate address country. */
          country: {
            /**
             * The ISO 3166-1 country code.
             * @minLength 1
             */
            code: string;
          };
        };
        /** Provider-defined affiliate custom fields to send to Tapfiliate. */
        custom_fields?: Record<string, unknown>;
      };
      output: {
        /** A normalized Tapfiliate affiliate. */
        affiliate: {
          /** The Tapfiliate affiliate id. */
          id: string;
          /** The affiliate's first name when returned by Tapfiliate. */
          firstname: string | null;
          /** The affiliate's last name when returned by Tapfiliate. */
          lastname: string | null;
          /** The affiliate's email address when returned by Tapfiliate. */
          email: string | null;
          /** The affiliate company object returned by Tapfiliate. */
          company: Record<string, unknown> | null;
          /** The affiliate address object returned by Tapfiliate. */
          address: Record<string, unknown> | null;
          /** The affiliate metadata object returned by Tapfiliate. */
          meta_data: Record<string, unknown> | null;
          /** The parent affiliate id when returned by Tapfiliate. */
          parent_id: string | null;
          /** The affiliate group id when returned by Tapfiliate. */
          affiliate_group_id: string | null;
          /** The affiliate creation timestamp returned by Tapfiliate. */
          created_at: string | null;
          /** The affiliate promotion timestamp returned by Tapfiliate. */
          promoted_at: string | null;
          /** The affiliate promotion method returned by Tapfiliate. */
          promotion_method: string | null;
          /** The affiliate custom fields returned by Tapfiliate. */
          custom_fields: Record<string, unknown> | null;
          /** The raw affiliate object returned by Tapfiliate. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a Tapfiliate affiliate group. */
    "tapfiliate.create_affiliate_group": {
      input: {
        /**
         * The affiliate group title.
         * @minLength 1
         */
        title: string;
      };
      output: {
        /** A normalized Tapfiliate affiliate group. */
        affiliate_group: {
          /** The Tapfiliate affiliate group id. */
          id: string;
          /** The affiliate group title. */
          title: string | null;
          /** The number of affiliates in the group when returned. */
          affiliate_count: number | null;
          /** The raw affiliate group object returned by Tapfiliate. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a Tapfiliate REST-only tracking click and return its click id for later conversion creation. */
    "tapfiliate.create_click": {
      input: {
        /**
         * The affiliate referral code obtained from the referral URL.
         * @minLength 1
         */
        referral_code: string;
        /**
         * The source id used by the affiliate when present.
         * @minLength 1
         */
        source_id?: string;
        /** Provider-defined metadata key-value pairs to send to Tapfiliate. */
        meta_data?: Record<string, unknown>;
        /**
         * The HTTP referrer used in Tapfiliate reporting.
         * @format uri
         */
        referrer?: string;
        /**
         * The current landing page used in Tapfiliate reporting.
         * @format uri
         */
        landing_page?: string;
        /**
         * The full client user agent string.
         * @minLength 1
         */
        user_agent?: string;
        /**
         * The client IP address.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The Tapfiliate click creation result. */
        click: {
          /** The Tapfiliate click id. */
          id: string;
          /** The raw create click response returned by Tapfiliate. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a Tapfiliate conversion using a documented referral, customer, click, coupon, tracking, or asset-source matcher. */
    "tapfiliate.create_conversion": {
      input: {
        /** Whether to override Tapfiliate's maximum cookie time for this conversion. */
        override_max_cookie_time?: boolean;
        /**
         * An affiliate referral code.
         * @minLength 1
         */
        referral_code?: string;
        /**
         * The tracking id retrieved from the Tapfiliate JavaScript library.
         * @minLength 1
         */
        tracking_id?: string;
        /**
         * The Tapfiliate click id used to add reporting information.
         * @minLength 1
         */
        click_id?: string;
        /**
         * A coupon code used to track the conversion.
         * @minLength 1
         */
        coupon?: string;
        /**
         * The three-letter ISO currency code for the conversion.
         * @minLength 3
         * @maxLength 3
         */
        currency?: string;
        /**
         * The Tapfiliate asset id.
         * @minLength 1
         */
        asset_id?: string;
        /**
         * The Tapfiliate source id.
         * @minLength 1
         */
        source_id?: string;
        /**
         * A unique conversion id from the caller's system.
         * @minLength 1
         */
        external_id?: string;
        /** The conversion amount. */
        amount?: number;
        /**
         * The customer id from the caller's system.
         * @minLength 1
         */
        customer_id?: string;
        /**
         * The Tapfiliate commission type.
         * @minLength 1
         */
        commission_type?: string;
        /**
         * Commission overrides to send to Tapfiliate.
         * @minItems 1
         */
        commissions?: Array<Record<string, unknown>>;
        /** Provider-defined metadata key-value pairs to send to Tapfiliate. */
        meta_data?: Record<string, unknown>;
        /**
         * The Tapfiliate program group id.
         * @minLength 1
         */
        program_group?: string;
        /**
         * The client's user agent string.
         * @minLength 1
         */
        user_agent?: string;
        /**
         * The client's IP address.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** A normalized Tapfiliate conversion. */
        conversion: {
          /** The numeric Tapfiliate conversion id when returned. */
          id: number | null;
          /** The external conversion id supplied by the merchant. */
          external_id: string | null;
          /** The conversion amount when returned by Tapfiliate. */
          amount: number | null;
          /** The click object associated with this conversion. */
          click: Record<string, unknown> | null;
          /** The commission objects returned with this conversion. */
          commissions: Array<Record<string, unknown>>;
          /** The program object associated with this conversion. */
          program: Record<string, unknown> | null;
          /** The affiliate object associated with this conversion. */
          affiliate: Record<string, unknown> | null;
          /** The customer object associated with this conversion. */
          customer: Record<string, unknown> | null;
          /** The conversion metadata returned by Tapfiliate. */
          meta_data: Record<string, unknown> | null;
          /** Affiliate metadata returned with the conversion. */
          affiliate_meta_data: unknown;
          /** The conversion creation timestamp returned by Tapfiliate. */
          created_at: string | null;
          /** Warnings returned by Tapfiliate for this conversion. */
          warnings: unknown;
          /** The raw conversion object returned by Tapfiliate. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve a single Tapfiliate affiliate by affiliate id. */
    "tapfiliate.get_affiliate": {
      input: {
        /**
         * The Tapfiliate affiliate id.
         * @minLength 1
         */
        affiliate_id: string;
      };
      output: {
        /** A normalized Tapfiliate affiliate. */
        affiliate: {
          /** The Tapfiliate affiliate id. */
          id: string;
          /** The affiliate's first name when returned by Tapfiliate. */
          firstname: string | null;
          /** The affiliate's last name when returned by Tapfiliate. */
          lastname: string | null;
          /** The affiliate's email address when returned by Tapfiliate. */
          email: string | null;
          /** The affiliate company object returned by Tapfiliate. */
          company: Record<string, unknown> | null;
          /** The affiliate address object returned by Tapfiliate. */
          address: Record<string, unknown> | null;
          /** The affiliate metadata object returned by Tapfiliate. */
          meta_data: Record<string, unknown> | null;
          /** The parent affiliate id when returned by Tapfiliate. */
          parent_id: string | null;
          /** The affiliate group id when returned by Tapfiliate. */
          affiliate_group_id: string | null;
          /** The affiliate creation timestamp returned by Tapfiliate. */
          created_at: string | null;
          /** The affiliate promotion timestamp returned by Tapfiliate. */
          promoted_at: string | null;
          /** The affiliate promotion method returned by Tapfiliate. */
          promotion_method: string | null;
          /** The affiliate custom fields returned by Tapfiliate. */
          custom_fields: Record<string, unknown> | null;
          /** The raw affiliate object returned by Tapfiliate. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Tapfiliate affiliate groups. */
    "tapfiliate.list_affiliate_groups": {
      input: {
        /**
         * The 1-based Tapfiliate result page to request. Omit this field to request the first page.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The affiliate groups returned by Tapfiliate. */
        affiliate_groups: Array<{
          /** The Tapfiliate affiliate group id. */
          id: string;
          /** The affiliate group title. */
          title: string | null;
          /** The number of affiliates in the group when returned. */
          affiliate_count: number | null;
          /** The raw affiliate group object returned by Tapfiliate. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination details parsed from Tapfiliate's Link header. */
        pagination: {
          /**
           * The page requested for this list operation.
           * @exclusiveMinimum 0
           */
          current_page: number;
          /**
           * The next page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          next_page: number | null;
          /**
           * The previous page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          previous_page: number | null;
          /**
           * The first page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          first_page: number | null;
          /**
           * The last page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          last_page: number | null;
          /** The raw Tapfiliate Link header value when present. */
          link_header: string | null;
        };
      };
    };
    /** List Tapfiliate affiliates with optional id, email, referral, and group filters. */
    "tapfiliate.list_affiliates": {
      input: {
        /**
         * The 1-based Tapfiliate result page to request. Omit this field to request the first page.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * A click id used to filter affiliates.
         * @minLength 1
         */
        click_id?: string;
        /**
         * A source id used to filter affiliates.
         * @minLength 1
         */
        source_id?: string;
        /**
         * An email address used to filter affiliates.
         * @format email
         */
        email?: string;
        /**
         * An affiliate referral code used to filter affiliates.
         * @minLength 1
         */
        referral_code?: string;
        /**
         * A parent affiliate id used to list child affiliates.
         * @minLength 1
         */
        parent_id?: string;
        /**
         * An affiliate group id used to filter affiliates.
         * @minLength 1
         */
        affiliate_group_id?: string;
      };
      output: {
        /** The affiliates returned by Tapfiliate. */
        affiliates: Array<{
          /** The Tapfiliate affiliate id. */
          id: string;
          /** The affiliate's first name when returned by Tapfiliate. */
          firstname: string | null;
          /** The affiliate's last name when returned by Tapfiliate. */
          lastname: string | null;
          /** The affiliate's email address when returned by Tapfiliate. */
          email: string | null;
          /** The affiliate company object returned by Tapfiliate. */
          company: Record<string, unknown> | null;
          /** The affiliate address object returned by Tapfiliate. */
          address: Record<string, unknown> | null;
          /** The affiliate metadata object returned by Tapfiliate. */
          meta_data: Record<string, unknown> | null;
          /** The parent affiliate id when returned by Tapfiliate. */
          parent_id: string | null;
          /** The affiliate group id when returned by Tapfiliate. */
          affiliate_group_id: string | null;
          /** The affiliate creation timestamp returned by Tapfiliate. */
          created_at: string | null;
          /** The affiliate promotion timestamp returned by Tapfiliate. */
          promoted_at: string | null;
          /** The affiliate promotion method returned by Tapfiliate. */
          promotion_method: string | null;
          /** The affiliate custom fields returned by Tapfiliate. */
          custom_fields: Record<string, unknown> | null;
          /** The raw affiliate object returned by Tapfiliate. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination details parsed from Tapfiliate's Link header. */
        pagination: {
          /**
           * The page requested for this list operation.
           * @exclusiveMinimum 0
           */
          current_page: number;
          /**
           * The next page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          next_page: number | null;
          /**
           * The previous page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          previous_page: number | null;
          /**
           * The first page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          first_page: number | null;
          /**
           * The last page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          last_page: number | null;
          /** The raw Tapfiliate Link header value when present. */
          link_header: string | null;
        };
      };
    };
    /** List Tapfiliate Enterprise click records with optional program, affiliate, and date filters. */
    "tapfiliate.list_clicks": {
      input: {
        /**
         * The 1-based Tapfiliate result page to request. Omit this field to request the first page.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The program id used to filter clicks.
         * @minLength 1
         */
        program_id?: string;
        /**
         * The affiliate id used to filter clicks.
         * @minLength 1
         */
        affiliate_id?: string;
        /**
         * The start date for click filtering.
         * @format date
         */
        date_from?: string;
        /**
         * The end date for click filtering.
         * @format date
         */
        date_to?: string;
      };
      output: {
        /** The clicks returned by Tapfiliate. */
        clicks: Array<{
          /** The Tapfiliate click id. */
          id: string;
          /** The click creation timestamp returned by Tapfiliate. */
          created_at: string | null;
          /** The click metadata returned by Tapfiliate. */
          meta_data: unknown;
          /** The click details object returned by Tapfiliate. */
          details: Record<string, unknown> | null;
          /** The click geolocation object returned by Tapfiliate. */
          geolocation: Record<string, unknown> | null;
          /** The raw click object returned by Tapfiliate. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination details parsed from Tapfiliate's Link header. */
        pagination: {
          /**
           * The page requested for this list operation.
           * @exclusiveMinimum 0
           */
          current_page: number;
          /**
           * The next page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          next_page: number | null;
          /**
           * The previous page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          previous_page: number | null;
          /**
           * The first page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          first_page: number | null;
          /**
           * The last page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          last_page: number | null;
          /** The raw Tapfiliate Link header value when present. */
          link_header: string | null;
        };
      };
    };
    /** List Tapfiliate commissions with optional affiliate, approval status, and paid filters. */
    "tapfiliate.list_commissions": {
      input: {
        /**
         * The 1-based Tapfiliate result page to request. Omit this field to request the first page.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The affiliate id used to filter commissions.
         * @minLength 1
         */
        affiliate_id?: string;
        /** The Tapfiliate commission approval status. */
        status?: "approved" | "disapproved" | "pending";
        /** Whether to include only paid commissions. */
        paid?: boolean;
      };
      output: {
        /** The commissions returned by Tapfiliate. */
        commissions: Array<{
          /** The numeric Tapfiliate commission id when returned. */
          id: number | null;
          /** The commission amount. */
          amount: number | null;
          /** Whether the commission is approved. */
          approved: boolean | null;
          /** The commission creation timestamp returned by Tapfiliate. */
          created_at: string | null;
          /** The Tapfiliate commission type identifier. */
          commission_type: string | null;
          /** The Tapfiliate commission display name. */
          commission_name: string | null;
          /** The Tapfiliate commission kind. */
          kind: string | null;
          /** The commission currency. */
          currency: string | null;
          /** The conversion object associated with this commission. */
          conversion: Record<string, unknown> | null;
          /** The affiliate object associated with this commission. */
          affiliate: Record<string, unknown> | null;
          /** The payout value returned by Tapfiliate. */
          payout: unknown;
          /** The commission comment when returned by Tapfiliate. */
          comment: string | null;
          /** The finalization state returned by Tapfiliate. */
          final: unknown;
          /** The finalization date returned by Tapfiliate. */
          finalization_date: string | null;
          /** The raw commission object returned by Tapfiliate. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination details parsed from Tapfiliate's Link header. */
        pagination: {
          /**
           * The page requested for this list operation.
           * @exclusiveMinimum 0
           */
          current_page: number;
          /**
           * The next page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          next_page: number | null;
          /**
           * The previous page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          previous_page: number | null;
          /**
           * The first page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          first_page: number | null;
          /**
           * The last page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          last_page: number | null;
          /** The raw Tapfiliate Link header value when present. */
          link_header: string | null;
        };
      };
    };
    /** List Tapfiliate conversions with optional program, external id, affiliate, date, and status filters. */
    "tapfiliate.list_conversions": {
      input: {
        /**
         * The 1-based Tapfiliate result page to request. Omit this field to request the first page.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The program id used to filter conversions.
         * @minLength 1
         */
        program_id?: string;
        /**
         * The external conversion id used to filter conversions.
         * @minLength 1
         */
        external_id?: string;
        /**
         * The affiliate id used to filter conversions.
         * @minLength 1
         */
        affiliate_id?: string;
        /** Only include conversions that have pending commissions. */
        pending?: boolean;
        /**
         * The start date for conversion filtering.
         * @format date
         */
        date_from?: string;
        /**
         * The end date for conversion filtering.
         * @format date
         */
        date_to?: string;
        /** Whether Tapfiliate should use the profile time zone. */
        use_profile_timezone?: boolean;
      };
      output: {
        /** The conversions returned by Tapfiliate. */
        conversions: Array<{
          /** The numeric Tapfiliate conversion id when returned. */
          id: number | null;
          /** The external conversion id supplied by the merchant. */
          external_id: string | null;
          /** The conversion amount when returned by Tapfiliate. */
          amount: number | null;
          /** The click object associated with this conversion. */
          click: Record<string, unknown> | null;
          /** The commission objects returned with this conversion. */
          commissions: Array<Record<string, unknown>>;
          /** The program object associated with this conversion. */
          program: Record<string, unknown> | null;
          /** The affiliate object associated with this conversion. */
          affiliate: Record<string, unknown> | null;
          /** The customer object associated with this conversion. */
          customer: Record<string, unknown> | null;
          /** The conversion metadata returned by Tapfiliate. */
          meta_data: Record<string, unknown> | null;
          /** Affiliate metadata returned with the conversion. */
          affiliate_meta_data: unknown;
          /** The conversion creation timestamp returned by Tapfiliate. */
          created_at: string | null;
          /** Warnings returned by Tapfiliate for this conversion. */
          warnings: unknown;
          /** The raw conversion object returned by Tapfiliate. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination details parsed from Tapfiliate's Link header. */
        pagination: {
          /**
           * The page requested for this list operation.
           * @exclusiveMinimum 0
           */
          current_page: number;
          /**
           * The next page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          next_page: number | null;
          /**
           * The previous page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          previous_page: number | null;
          /**
           * The first page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          first_page: number | null;
          /**
           * The last page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          last_page: number | null;
          /** The raw Tapfiliate Link header value when present. */
          link_header: string | null;
        };
      };
    };
    /** List Tapfiliate programs with an optional asset filter. */
    "tapfiliate.list_programs": {
      input: {
        /**
         * The 1-based Tapfiliate result page to request. Omit this field to request the first page.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * An asset id used to filter programs.
         * @minLength 1
         */
        asset_id?: string;
      };
      output: {
        /** The programs returned by Tapfiliate. */
        programs: Array<{
          /** The Tapfiliate program id. */
          id: string;
          /** The program title. */
          title: string | null;
          /** The program currency. */
          currency: string | null;
          /** The program cookie time in days when returned. */
          cookie_time: number | null;
          /** The default landing page URL for this program. */
          default_landing_page_url: string | null;
          /** Whether the program is recurring. */
          recurring: boolean | null;
          /** The recurring cap when returned by Tapfiliate. */
          recurring_cap: number | null;
          /** The recurring period in days when returned. */
          recurring_period_days: number | null;
          /** The program category object returned by Tapfiliate. */
          program_category: Record<string, unknown> | null;
          /** The program currency symbol. */
          currency_symbol: string | null;
          /** The raw program object returned by Tapfiliate. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination details parsed from Tapfiliate's Link header. */
        pagination: {
          /**
           * The page requested for this list operation.
           * @exclusiveMinimum 0
           */
          current_page: number;
          /**
           * The next page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          next_page: number | null;
          /**
           * The previous page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          previous_page: number | null;
          /**
           * The first page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          first_page: number | null;
          /**
           * The last page number when Tapfiliate provides one.
           * @exclusiveMinimum 0
           */
          last_page: number | null;
          /** The raw Tapfiliate Link header value when present. */
          link_header: string | null;
        };
      };
    };
  }
}
