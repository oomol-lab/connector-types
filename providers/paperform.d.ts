import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a Paperform form by slug, custom slug, or ID. */
    "paperform.get_form": {
      input: {
        /**
         * The Paperform form slug, custom slug, or ID.
         * @minLength 1
         */
        slug_or_id: string;
      };
      output: {
        /** A Paperform form. */
        form: {
          /** The unique identifier of the form. */
          id: string | null;
          /** The default generated slug for the form. */
          slug: string | null;
          /** The custom slug for the form if one is set. */
          custom_slug: string | null;
          /** The title of the form. */
          title: string | null;
          /** The description of the form. */
          description: string | null;
          /** The main sharing URL for the form. */
          url: string | null;
          /** Whether the form is currently accepting submissions. */
          live: boolean | null;
          /** The number of submissions the form has received. */
          submission_count: number | null;
          /** The UTC datetime when the form was created. */
          created_at_utc: string | null;
          /** The UTC datetime when the form was updated. */
          updated_at_utc: string | null;
          /** The raw Paperform API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Paperform coupon by form and coupon code. */
    "paperform.get_form_coupon": {
      input: {
        /**
         * The Paperform form slug, custom slug, or ID.
         * @minLength 1
         */
        slug_or_id: string;
        /**
         * The Paperform coupon code.
         * @minLength 1
         */
        code: string;
      };
      output: {
        /** A Paperform coupon. */
        coupon: {
          /** The coupon code. */
          code: string | null;
          /** Whether the coupon is enabled. */
          enabled: boolean | null;
          /** The target of the coupon. */
          target: string | null;
          /** The discount as an amount. */
          discountAmount: number | null;
          /** The discount as a percentage. */
          discountPercentage: number | null;
          /** The datetime when the coupon expires. */
          expiresAt: string | null;
          /** The raw Paperform API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Paperform form field by field key. */
    "paperform.get_form_field": {
      input: {
        /**
         * The Paperform form slug, custom slug, or ID.
         * @minLength 1
         */
        slug_or_id: string;
        /**
         * The Paperform field key.
         * @minLength 1
         */
        field_key: string;
      };
      output: {
        /** A Paperform form field. */
        field: {
          /** The unique key for this field. */
          key: string | null;
          /** The title of this field. */
          title: string | null;
          /** The description of this field. */
          description: string | null;
          /** The Paperform field type. */
          type: string | null;
          /** Whether this field is required. */
          required: boolean | null;
          /** The custom key of this field. */
          custom_key: string | null;
          /** The placeholder for this field. */
          placeholder: string | null;
          /** The raw Paperform API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Paperform partial submission by form and partial submission ID. */
    "paperform.get_form_partial_submission": {
      input: {
        /**
         * The Paperform form slug, custom slug, or ID.
         * @minLength 1
         */
        slug_or_id: string;
        /**
         * The Paperform partial submission ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Paperform partial submission. */
        partial_submission: {
          /** The unique identifier of the partial submission. */
          id: string | null;
          /** The ID of the Paperform form for this partial submission. */
          form_id: string | null;
          /** Submission answers keyed by Paperform field key. */
          data: Record<string, unknown>;
          /** The last answered field key when returned by Paperform. */
          last_answered: string | null;
          /** The account-timezone datetime when the partial submission was submitted. */
          submitted_at: string | null;
          /** The account-timezone datetime when the partial submission was updated. */
          updated_at: string | null;
          /** The account-timezone datetime when the partial submission was created. */
          created_at: string | null;
          /** The UTC datetime when the partial submission was submitted. */
          submitted_at_utc: string | null;
          /** The UTC datetime when the partial submission was created. */
          created_at_utc: string | null;
          /** The UTC datetime when the partial submission was updated. */
          updated_at_utc: string | null;
          /** The Paperform account timezone for this partial submission. */
          account_timezone: string | null;
          /** The raw Paperform API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Paperform product by form and SKU. */
    "paperform.get_form_product": {
      input: {
        /**
         * The Paperform form slug, custom slug, or ID.
         * @minLength 1
         */
        slug_or_id: string;
        /**
         * The Paperform product SKU.
         * @minLength 1
         */
        product_sku: string;
      };
      output: {
        /** A Paperform product. */
        product: {
          /** The Paperform product SKU. */
          SKU: string | null;
          /** The product name. */
          name: string | null;
          /** The available product quantity. */
          quantity: number | null;
          /** The product price. */
          price: number | null;
          /** The minimum number of products to be selected. */
          minimum: number | null;
          /** The maximum number of products to be selected. */
          maximum: number | null;
          /** Whether the product can be discounted. */
          discountable: boolean | null;
          /** The raw Paperform API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Paperform submission by form and submission ID. */
    "paperform.get_form_submission": {
      input: {
        /**
         * The Paperform form slug, custom slug, or ID.
         * @minLength 1
         */
        slug_or_id: string;
        /**
         * The Paperform submission ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Paperform submission. */
        submission: {
          /** The unique identifier of the submission. */
          id: string | null;
          /** The ID of the Paperform form for this submission. */
          form_id: string | null;
          /** Submission answers keyed by Paperform field key. */
          data: Record<string, unknown>;
          /** The account-timezone datetime when the submission was created. */
          created_at: string | null;
          /** The UTC datetime when the submission was created. */
          created_at_utc: string | null;
          /** The Paperform account timezone for this submission. */
          account_timezone: string | null;
          /** The raw Paperform API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Paperform partial submission by partial submission ID. */
    "paperform.get_partial_submission": {
      input: {
        /**
         * The Paperform partial submission ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Paperform partial submission. */
        partial_submission: {
          /** The unique identifier of the partial submission. */
          id: string | null;
          /** The ID of the Paperform form for this partial submission. */
          form_id: string | null;
          /** Submission answers keyed by Paperform field key. */
          data: Record<string, unknown>;
          /** The last answered field key when returned by Paperform. */
          last_answered: string | null;
          /** The account-timezone datetime when the partial submission was submitted. */
          submitted_at: string | null;
          /** The account-timezone datetime when the partial submission was updated. */
          updated_at: string | null;
          /** The account-timezone datetime when the partial submission was created. */
          created_at: string | null;
          /** The UTC datetime when the partial submission was submitted. */
          submitted_at_utc: string | null;
          /** The UTC datetime when the partial submission was created. */
          created_at_utc: string | null;
          /** The UTC datetime when the partial submission was updated. */
          updated_at_utc: string | null;
          /** The Paperform account timezone for this partial submission. */
          account_timezone: string | null;
          /** The raw Paperform API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Paperform submission by submission ID. */
    "paperform.get_submission": {
      input: {
        /**
         * The Paperform submission ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Paperform submission. */
        submission: {
          /** The unique identifier of the submission. */
          id: string | null;
          /** The ID of the Paperform form for this submission. */
          form_id: string | null;
          /** Submission answers keyed by Paperform field key. */
          data: Record<string, unknown>;
          /** The account-timezone datetime when the submission was created. */
          created_at: string | null;
          /** The UTC datetime when the submission was created. */
          created_at_utc: string | null;
          /** The Paperform account timezone for this submission. */
          account_timezone: string | null;
          /** The raw Paperform API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List coupons for a Paperform form. */
    "paperform.list_form_coupons": {
      input: {
        /**
         * The Paperform form slug, custom slug, or ID.
         * @minLength 1
         */
        slug_or_id: string;
      };
      output: {
        /** The coupons returned for this form. */
        coupons: Array<{
          /** The coupon code. */
          code: string | null;
          /** Whether the coupon is enabled. */
          enabled: boolean | null;
          /** The target of the coupon. */
          target: string | null;
          /** The discount as an amount. */
          discountAmount: number | null;
          /** The discount as a percentage. */
          discountPercentage: number | null;
          /** The datetime when the coupon expires. */
          expiresAt: string | null;
          /** The raw Paperform API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw Paperform API object for advanced fields. */
        raw: Record<string, unknown>;
      };
    };
    /** List fields for a Paperform form. */
    "paperform.list_form_fields": {
      input: {
        /**
         * The Paperform form slug, custom slug, or ID.
         * @minLength 1
         */
        slug_or_id: string;
        /**
         * Search fields by title.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** The fields returned for this form. */
        fields: Array<{
          /** The unique key for this field. */
          key: string | null;
          /** The title of this field. */
          title: string | null;
          /** The description of this field. */
          description: string | null;
          /** The Paperform field type. */
          type: string | null;
          /** Whether this field is required. */
          required: boolean | null;
          /** The custom key of this field. */
          custom_key: string | null;
          /** The placeholder for this field. */
          placeholder: string | null;
          /** The raw Paperform API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw Paperform API object for advanced fields. */
        raw: Record<string, unknown>;
      };
    };
    /** List partial submissions for a Paperform form. */
    "paperform.list_form_partial_submissions": {
      input: {
        /**
         * The Paperform form slug, custom slug, or ID.
         * @minLength 1
         */
        slug_or_id: string;
        /**
         * The number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of results to skip in the result set.
         * @minimum 0
         */
        skip?: number;
        /**
         * Return results after this Paperform object ID.
         * @minLength 1
         */
        after_id?: string;
        /**
         * Return results before this Paperform object ID.
         * @minLength 1
         */
        before_id?: string;
        /**
         * Return results created on or after this UTC datetime. Paperform ignores this when before_id is provided.
         * @format date-time
         */
        before_date?: string;
        /**
         * Return results created before this UTC datetime. Paperform ignores this when after_id is provided.
         * @format date-time
         */
        after_date?: string;
        /** The direction used by Paperform to sort by created_at. */
        sort?: "ASC" | "DESC";
      };
      output: {
        /** The partial submissions returned for this page. */
        partial_submissions: Array<{
          /** The unique identifier of the partial submission. */
          id: string | null;
          /** The ID of the Paperform form for this partial submission. */
          form_id: string | null;
          /** Submission answers keyed by Paperform field key. */
          data: Record<string, unknown>;
          /** The last answered field key when returned by Paperform. */
          last_answered: string | null;
          /** The account-timezone datetime when the partial submission was submitted. */
          submitted_at: string | null;
          /** The account-timezone datetime when the partial submission was updated. */
          updated_at: string | null;
          /** The account-timezone datetime when the partial submission was created. */
          created_at: string | null;
          /** The UTC datetime when the partial submission was submitted. */
          submitted_at_utc: string | null;
          /** The UTC datetime when the partial submission was created. */
          created_at_utc: string | null;
          /** The UTC datetime when the partial submission was updated. */
          updated_at_utc: string | null;
          /** The Paperform account timezone for this partial submission. */
          account_timezone: string | null;
          /** The raw Paperform API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Paperform. */
        page: {
          /** The total number of matching items when returned. */
          total: number | null;
          /** Whether Paperform has more matching items. */
          has_more: boolean | null;
          /** The result limit Paperform applied. */
          limit: number | null;
          /** The result offset Paperform applied. */
          skip: number | null;
        };
        /** The raw Paperform API object for advanced fields. */
        raw: Record<string, unknown>;
      };
    };
    /** List products for a Paperform form. */
    "paperform.list_form_products": {
      input: {
        /**
         * The Paperform form slug, custom slug, or ID.
         * @minLength 1
         */
        slug_or_id: string;
        /**
         * Search products by name.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** The products returned for this form. */
        products: Array<{
          /** The Paperform product SKU. */
          SKU: string | null;
          /** The product name. */
          name: string | null;
          /** The available product quantity. */
          quantity: number | null;
          /** The product price. */
          price: number | null;
          /** The minimum number of products to be selected. */
          minimum: number | null;
          /** The maximum number of products to be selected. */
          maximum: number | null;
          /** Whether the product can be discounted. */
          discountable: boolean | null;
          /** The raw Paperform API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw Paperform API object for advanced fields. */
        raw: Record<string, unknown>;
      };
    };
    /** List submissions for a Paperform form. */
    "paperform.list_form_submissions": {
      input: {
        /**
         * The Paperform form slug, custom slug, or ID.
         * @minLength 1
         */
        slug_or_id: string;
        /**
         * The number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of results to skip in the result set.
         * @minimum 0
         */
        skip?: number;
        /**
         * Return results after this Paperform object ID.
         * @minLength 1
         */
        after_id?: string;
        /**
         * Return results before this Paperform object ID.
         * @minLength 1
         */
        before_id?: string;
        /**
         * Return results created on or after this UTC datetime. Paperform ignores this when before_id is provided.
         * @format date-time
         */
        before_date?: string;
        /**
         * Return results created before this UTC datetime. Paperform ignores this when after_id is provided.
         * @format date-time
         */
        after_date?: string;
        /** The direction used by Paperform to sort by created_at. */
        sort?: "ASC" | "DESC";
      };
      output: {
        /** The submissions returned for this page. */
        submissions: Array<{
          /** The unique identifier of the submission. */
          id: string | null;
          /** The ID of the Paperform form for this submission. */
          form_id: string | null;
          /** Submission answers keyed by Paperform field key. */
          data: Record<string, unknown>;
          /** The account-timezone datetime when the submission was created. */
          created_at: string | null;
          /** The UTC datetime when the submission was created. */
          created_at_utc: string | null;
          /** The Paperform account timezone for this submission. */
          account_timezone: string | null;
          /** The raw Paperform API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Paperform. */
        page: {
          /** The total number of matching items when returned. */
          total: number | null;
          /** Whether Paperform has more matching items. */
          has_more: boolean | null;
          /** The result limit Paperform applied. */
          limit: number | null;
          /** The result offset Paperform applied. */
          skip: number | null;
        };
        /** The raw Paperform API object for advanced fields. */
        raw: Record<string, unknown>;
      };
    };
    /** List Paperform forms accessible to the authorized user. */
    "paperform.list_forms": {
      input: {
        /**
         * Search forms by title.
         * @minLength 1
         */
        search?: string;
        /**
         * The number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of results to skip in the result set.
         * @minimum 0
         */
        skip?: number;
        /**
         * Return results after this Paperform object ID.
         * @minLength 1
         */
        after_id?: string;
        /**
         * Return results before this Paperform object ID.
         * @minLength 1
         */
        before_id?: string;
        /**
         * Return results created on or after this UTC datetime. Paperform ignores this when before_id is provided.
         * @format date-time
         */
        before_date?: string;
        /**
         * Return results created before this UTC datetime. Paperform ignores this when after_id is provided.
         * @format date-time
         */
        after_date?: string;
        /** The direction used by Paperform to sort by created_at. */
        sort?: "ASC" | "DESC";
      };
      output: {
        /** The forms returned for this page. */
        forms: Array<{
          /** The unique identifier of the form. */
          id: string | null;
          /** The default generated slug for the form. */
          slug: string | null;
          /** The custom slug for the form if one is set. */
          custom_slug: string | null;
          /** The title of the form. */
          title: string | null;
          /** The description of the form. */
          description: string | null;
          /** The main sharing URL for the form. */
          url: string | null;
          /** Whether the form is currently accepting submissions. */
          live: boolean | null;
          /** The number of submissions the form has received. */
          submission_count: number | null;
          /** The UTC datetime when the form was created. */
          created_at_utc: string | null;
          /** The UTC datetime when the form was updated. */
          updated_at_utc: string | null;
          /** The raw Paperform API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Paperform. */
        page: {
          /** The total number of matching items when returned. */
          total: number | null;
          /** Whether Paperform has more matching items. */
          has_more: boolean | null;
          /** The result limit Paperform applied. */
          limit: number | null;
          /** The result offset Paperform applied. */
          skip: number | null;
        };
        /** The raw Paperform API object for advanced fields. */
        raw: Record<string, unknown>;
      };
    };
  }
}
