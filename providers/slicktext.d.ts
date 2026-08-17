import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a contact in the authenticated SlickText brand. */
    "slicktext.create_contact": {
      input: {
        /**
         * The contact's US mobile number; SlickText normalizes it to a plus-prefixed number.
         * @minLength 1
         */
        mobile_number: string;
        /** The contact's first name. */
        first_name?: string;
        /** The contact's last name. */
        last_name?: string;
        /**
         * The contact's email address.
         * @format email
         */
        email?: string;
        /**
         * The contact's birth date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        birthdate?: string;
        /** The contact's street address. */
        address?: string;
        /** The contact's city. */
        city?: string;
        /** The contact's state or region. */
        state?: string;
        /** The contact's postal code. */
        zip?: string;
        /** The contact's country code. */
        country?: string;
        /** The contact's SlickText timezone. */
        timezone?: "America/New_York" | "America/Chicago" | "America/Denver" | "America/Los_Angeles";
        /** The contact's primary language code. */
        language?: string;
        /** The contact's messaging opt-in status. */
        opt_in_status?: "not subscribed" | "subscribed" | "unsubscribed" | "blocked";
        /** Custom field values keyed by each field's SlickText internal name. */
        custom_fields?: Record<string, unknown>;
      };
      output: {
        /**
         * The numeric SlickText resource identifier.
         * @minimum 1
         */
        contact_id?: number;
        /**
         * The numeric SlickText resource identifier.
         * @minimum 1
         */
        _brand_id?: number;
        /** The contact's normalized mobile number. */
        mobile_number?: string | null;
        /** The contact's first name. */
        first_name?: string | null;
        /** The contact's last name. */
        last_name?: string | null;
        /**
         * The contact's email address.
         * @format email
         */
        email?: string | null;
        /** The contact's current messaging opt-in status. */
        opt_in_status?: string | null;
        /** Custom field values keyed by each field's SlickText internal name. */
        custom_fields?: Record<string, unknown> | null;
        /** The timestamp when SlickText created the contact. */
        created?: string | null;
        /** The timestamp when SlickText last updated the contact. */
        last_updated?: string | null;
        [key: string]: unknown;
      };
    };
    /** Delete a SlickText contact by contact ID. */
    "slicktext.delete_contact": {
      input: {
        /**
         * The numeric SlickText resource identifier.
         * @minimum 1
         */
        contact_id: number;
      };
      output: Array<unknown>;
    };
    /** Retrieve the SlickText brand associated with the connected API key. */
    "slicktext.get_brand": {
      input: Record<string, never>;
      output: {
        /**
         * The numeric SlickText resource identifier.
         * @minimum 1
         */
        brand_id?: number;
        /** The brand name. */
        name?: string;
        /** The brand website URL. */
        website?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve one SlickText contact by contact ID. */
    "slicktext.get_contact": {
      input: {
        /**
         * The numeric SlickText resource identifier.
         * @minimum 1
         */
        contact_id: number;
      };
      output: {
        /**
         * The numeric SlickText resource identifier.
         * @minimum 1
         */
        contact_id?: number;
        /**
         * The numeric SlickText resource identifier.
         * @minimum 1
         */
        _brand_id?: number;
        /** The contact's normalized mobile number. */
        mobile_number?: string | null;
        /** The contact's first name. */
        first_name?: string | null;
        /** The contact's last name. */
        last_name?: string | null;
        /**
         * The contact's email address.
         * @format email
         */
        email?: string | null;
        /** The contact's current messaging opt-in status. */
        opt_in_status?: string | null;
        /** Custom field values keyed by each field's SlickText internal name. */
        custom_fields?: Record<string, unknown> | null;
        /** The timestamp when SlickText created the contact. */
        created?: string | null;
        /** The timestamp when SlickText last updated the contact. */
        last_updated?: string | null;
        [key: string]: unknown;
      };
    };
    /** List contacts for the authenticated SlickText brand with optional pagination. */
    "slicktext.list_contacts": {
      input: {
        /**
         * The maximum number of contacts to return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The number of contacts to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * The zero-based page number to return.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of contacts to return per page.
         * @minimum 1
         * @maximum 250
         */
        pageSize?: number;
      };
      output: {
        /** The contacts returned by SlickText. */
        data?: Array<{
          /**
           * The numeric SlickText resource identifier.
           * @minimum 1
           */
          contact_id?: number;
          /**
           * The numeric SlickText resource identifier.
           * @minimum 1
           */
          _brand_id?: number;
          /** The contact's normalized mobile number. */
          mobile_number?: string | null;
          /** The contact's first name. */
          first_name?: string | null;
          /** The contact's last name. */
          last_name?: string | null;
          /**
           * The contact's email address.
           * @format email
           */
          email?: string | null;
          /** The contact's current messaging opt-in status. */
          opt_in_status?: string | null;
          /** Custom field values keyed by each field's SlickText internal name. */
          custom_fields?: Record<string, unknown> | null;
          /** The timestamp when SlickText created the contact. */
          created?: string | null;
          /** The timestamp when SlickText last updated the contact. */
          last_updated?: string | null;
          [key: string]: unknown;
        }>;
        /** SlickText pagination metadata. */
        pagingData?: {
          /** The previous zero-based page number. */
          prevPage?: number | null;
          /** The current zero-based page number. */
          currentPage?: number | null;
          /** The next zero-based page number. */
          nextPage?: number | null;
          /** The current page URL or page description. */
          currentPageString?: string | null;
          /** Whether more contacts are available. */
          hasMore?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update an existing SlickText contact by contact ID. */
    "slicktext.update_contact": {
      input: {
        /**
         * The numeric SlickText resource identifier.
         * @minimum 1
         */
        contact_id: number;
        /**
         * The contact's US mobile number; SlickText normalizes it to a plus-prefixed number.
         * @minLength 1
         */
        mobile_number?: string;
        /** The contact's first name. */
        first_name?: string;
        /** The contact's last name. */
        last_name?: string;
        /**
         * The contact's email address.
         * @format email
         */
        email?: string;
        /**
         * The contact's birth date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        birthdate?: string;
        /** The contact's street address. */
        address?: string;
        /** The contact's city. */
        city?: string;
        /** The contact's state or region. */
        state?: string;
        /** The contact's postal code. */
        zip?: string;
        /** The contact's country code. */
        country?: string;
        /** The contact's SlickText timezone. */
        timezone?: "America/New_York" | "America/Chicago" | "America/Denver" | "America/Los_Angeles";
        /** The contact's primary language code. */
        language?: string;
        /** The contact's messaging opt-in status. */
        opt_in_status?: "not subscribed" | "subscribed" | "unsubscribed" | "blocked";
        /** Custom field values keyed by each field's SlickText internal name. */
        custom_fields?: Record<string, unknown>;
      };
      output: {
        /**
         * The numeric SlickText resource identifier.
         * @minimum 1
         */
        contact_id?: number;
        /**
         * The numeric SlickText resource identifier.
         * @minimum 1
         */
        _brand_id?: number;
        /** The contact's normalized mobile number. */
        mobile_number?: string | null;
        /** The contact's first name. */
        first_name?: string | null;
        /** The contact's last name. */
        last_name?: string | null;
        /**
         * The contact's email address.
         * @format email
         */
        email?: string | null;
        /** The contact's current messaging opt-in status. */
        opt_in_status?: string | null;
        /** Custom field values keyed by each field's SlickText internal name. */
        custom_fields?: Record<string, unknown> | null;
        /** The timestamp when SlickText created the contact. */
        created?: string | null;
        /** The timestamp when SlickText last updated the contact. */
        last_updated?: string | null;
        [key: string]: unknown;
      };
    };
  }
}
