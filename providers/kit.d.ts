import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Kit subscriber, or update the existing subscriber with the same email address. */
    "kit.create_subscriber": {
      input: {
        /**
         * Subscriber email address.
         * @format email
         */
        email_address: string;
        /** Subscriber first name. */
        first_name?: string | null;
        /** Subscriber status used by Kit. */
        state?: "active" | "inactive" | "bounced" | "complained" | "cancelled" | "all";
        /** Custom field values keyed by custom field label. Kit ignores fields that do not exist. */
        fields?: Record<string, string | null>;
      };
      output: {
        /** A Kit subscriber. */
        subscriber: {
          /** Kit subscriber ID. */
          id: number;
          /** Subscriber first name. */
          first_name: string | null;
          /**
           * Subscriber email address.
           * @format email
           */
          email_address: string;
          /** Subscriber state returned by Kit. */
          state: string;
          /** Timestamp when the subscriber was created. */
          created_at: string;
          /** Custom field values keyed by custom field label. Kit ignores fields that do not exist. */
          fields: Record<string, string | null>;
          /** Timestamp when the subscriber cancelled, when returned. */
          canceled_at: string | null;
          /** Subscriber attribution metadata returned by Kit. */
          attribution: {
            /** Referrer URL or source. */
            referrer: string | null;
            /** UTM source value. */
            utm_source: string | null;
            /** UTM medium value. */
            utm_medium: string | null;
            /** UTM campaign value. */
            utm_campaign: string | null;
            /** UTM term value. */
            utm_term: string | null;
            /** UTM content value. */
            utm_content: string | null;
            /** Kit source type value. */
            source_type: string | null;
            /** Kit source name value. */
            source_name: string | null;
            /** Kit source mechanism value. */
            source_mechanism: string | null;
          } | null;
          /** Tags included on the subscriber when requested. */
          tags: Array<{
            /** Kit tag ID. */
            id: number;
            /** Kit tag name. */
            name: string;
            /** Timestamp when the tag was created. */
            created_at: string | null;
          }>;
          /** Subscriber location metadata returned by Kit. */
          location: {
            /** Subscriber city. */
            city: string | null;
            /** Subscriber state or region. */
            state: string | null;
            /** Subscriber country. */
            country: string | null;
            /** Subscriber latitude. */
            latitude: number | null;
            /** Subscriber longitude. */
            longitude: number | null;
          } | null;
          /** Timestamp when the subscriber was added to a form. */
          added_at: string | null;
          /** Timestamp when the subscriber was tagged. */
          tagged_at: string | null;
          /** Referrer returned for a form subscriber. */
          referrer: string | null;
          /** UTM parameters returned for a form subscriber. */
          referrer_utm_parameters: {
            /** UTM source value. */
            source: string | null;
            /** UTM medium value. */
            medium: string | null;
            /** UTM campaign value. */
            campaign: string | null;
            /** UTM term value. */
            term: string | null;
            /** UTM content value. */
            content: string | null;
          } | null;
        };
      };
    };
    /** Get the current Kit account and authenticated user details. */
    "kit.get_current_account": {
      input: Record<string, never>;
      output: {
        /** Authenticated Kit user details. */
        user: {
          /** Kit user ID when returned by Kit. */
          id: number | null;
          /**
           * Authenticated Kit user email address.
           * @format email
           */
          email: string;
        };
        /** Kit account details. */
        account: {
          /** Kit account ID. */
          id: number;
          /** Kit account name. */
          name: string;
          /** Kit plan type for the account. */
          plan_type: string;
          /**
           * Primary email address for the account.
           * @format email
           */
          primary_email_address: string;
          /** Timestamp when the account was created. */
          created_at: string;
          /** Kit account timezone metadata. */
          timezone: {
            /** IANA timezone name configured for the Kit account. */
            name: string;
            /** Human-readable timezone name returned by Kit. */
            friendly_name: string;
            /** UTC offset returned by Kit. */
            utc_offset: string;
          };
          /** Sending addresses configured for the account. */
          sending_addresses: Array<{
            /**
             * Sending email address.
             * @format email
             */
            email_address: string;
            /** Display name used for the sending address. */
            from_name: string;
            /** Verification status of the sending address. */
            status: string;
            /** Whether this is the default sending address. */
            is_default: boolean;
            /** Whether Kit has verified this sending address. */
            is_verified: boolean;
            /** Whether DMARC is configured for the sending domain. */
            is_dmarc_configured: boolean;
          }>;
        };
      };
    };
    /** Get one Kit subscriber by ID. */
    "kit.get_subscriber": {
      input: {
        /**
         * Kit subscriber ID.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** A Kit subscriber. */
        subscriber: {
          /** Kit subscriber ID. */
          id: number;
          /** Subscriber first name. */
          first_name: string | null;
          /**
           * Subscriber email address.
           * @format email
           */
          email_address: string;
          /** Subscriber state returned by Kit. */
          state: string;
          /** Timestamp when the subscriber was created. */
          created_at: string;
          /** Custom field values keyed by custom field label. Kit ignores fields that do not exist. */
          fields: Record<string, string | null>;
          /** Timestamp when the subscriber cancelled, when returned. */
          canceled_at: string | null;
          /** Subscriber attribution metadata returned by Kit. */
          attribution: {
            /** Referrer URL or source. */
            referrer: string | null;
            /** UTM source value. */
            utm_source: string | null;
            /** UTM medium value. */
            utm_medium: string | null;
            /** UTM campaign value. */
            utm_campaign: string | null;
            /** UTM term value. */
            utm_term: string | null;
            /** UTM content value. */
            utm_content: string | null;
            /** Kit source type value. */
            source_type: string | null;
            /** Kit source name value. */
            source_name: string | null;
            /** Kit source mechanism value. */
            source_mechanism: string | null;
          } | null;
          /** Tags included on the subscriber when requested. */
          tags: Array<{
            /** Kit tag ID. */
            id: number;
            /** Kit tag name. */
            name: string;
            /** Timestamp when the tag was created. */
            created_at: string | null;
          }>;
          /** Subscriber location metadata returned by Kit. */
          location: {
            /** Subscriber city. */
            city: string | null;
            /** Subscriber state or region. */
            state: string | null;
            /** Subscriber country. */
            country: string | null;
            /** Subscriber latitude. */
            latitude: number | null;
            /** Subscriber longitude. */
            longitude: number | null;
          } | null;
          /** Timestamp when the subscriber was added to a form. */
          added_at: string | null;
          /** Timestamp when the subscriber was tagged. */
          tagged_at: string | null;
          /** Referrer returned for a form subscriber. */
          referrer: string | null;
          /** UTM parameters returned for a form subscriber. */
          referrer_utm_parameters: {
            /** UTM source value. */
            source: string | null;
            /** UTM medium value. */
            medium: string | null;
            /** UTM campaign value. */
            campaign: string | null;
            /** UTM term value. */
            term: string | null;
            /** UTM content value. */
            content: string | null;
          } | null;
        };
      };
    };
    /** List Kit subscribers who joined through a specific form. */
    "kit.list_form_subscribers": {
      input: {
        /**
         * Kit form ID.
         * @minimum 1
         */
        form_id: number;
        /**
         * Cursor returned by Kit pagination.
         * @minLength 1
         */
        after?: string;
        /**
         * Cursor returned by Kit pagination.
         * @minLength 1
         */
        before?: string;
        /**
         * Number of records to return per page. Kit defaults to 500.
         * @minimum 1
         * @maximum 1000
         */
        per_page?: number;
        /** Whether Kit should include the total_count value in pagination metadata. */
        include_total_count?: boolean;
        /**
         * Date or timestamp used by Kit filter parameters.
         * @minLength 1
         */
        added_after?: string;
        /**
         * Date or timestamp used by Kit filter parameters.
         * @minLength 1
         */
        added_before?: string;
        /**
         * Date or timestamp used by Kit filter parameters.
         * @minLength 1
         */
        created_after?: string;
        /**
         * Date or timestamp used by Kit filter parameters.
         * @minLength 1
         */
        created_before?: string;
        /** Subscriber status used by Kit. */
        status?: "active" | "inactive" | "bounced" | "complained" | "cancelled" | "all";
      };
      output: {
        /** Kit subscribers returned by the request. */
        subscribers: Array<{
          /** Kit subscriber ID. */
          id: number;
          /** Subscriber first name. */
          first_name: string | null;
          /**
           * Subscriber email address.
           * @format email
           */
          email_address: string;
          /** Subscriber state returned by Kit. */
          state: string;
          /** Timestamp when the subscriber was created. */
          created_at: string;
          /** Custom field values keyed by custom field label. Kit ignores fields that do not exist. */
          fields: Record<string, string | null>;
          /** Timestamp when the subscriber cancelled, when returned. */
          canceled_at: string | null;
          /** Subscriber attribution metadata returned by Kit. */
          attribution: {
            /** Referrer URL or source. */
            referrer: string | null;
            /** UTM source value. */
            utm_source: string | null;
            /** UTM medium value. */
            utm_medium: string | null;
            /** UTM campaign value. */
            utm_campaign: string | null;
            /** UTM term value. */
            utm_term: string | null;
            /** UTM content value. */
            utm_content: string | null;
            /** Kit source type value. */
            source_type: string | null;
            /** Kit source name value. */
            source_name: string | null;
            /** Kit source mechanism value. */
            source_mechanism: string | null;
          } | null;
          /** Tags included on the subscriber when requested. */
          tags: Array<{
            /** Kit tag ID. */
            id: number;
            /** Kit tag name. */
            name: string;
            /** Timestamp when the tag was created. */
            created_at: string | null;
          }>;
          /** Subscriber location metadata returned by Kit. */
          location: {
            /** Subscriber city. */
            city: string | null;
            /** Subscriber state or region. */
            state: string | null;
            /** Subscriber country. */
            country: string | null;
            /** Subscriber latitude. */
            latitude: number | null;
            /** Subscriber longitude. */
            longitude: number | null;
          } | null;
          /** Timestamp when the subscriber was added to a form. */
          added_at: string | null;
          /** Timestamp when the subscriber was tagged. */
          tagged_at: string | null;
          /** Referrer returned for a form subscriber. */
          referrer: string | null;
          /** UTM parameters returned for a form subscriber. */
          referrer_utm_parameters: {
            /** UTM source value. */
            source: string | null;
            /** UTM medium value. */
            medium: string | null;
            /** UTM campaign value. */
            campaign: string | null;
            /** UTM term value. */
            term: string | null;
            /** UTM content value. */
            content: string | null;
          } | null;
        }>;
        /** Kit pagination metadata. */
        pagination: {
          /** Whether a previous page exists. */
          has_previous_page: boolean;
          /** Whether a next page exists. */
          has_next_page: boolean;
          /** Cursor for the first item on the current page. */
          start_cursor: string | null;
          /** Cursor for the last item on the current page. */
          end_cursor: string | null;
          /** Number of records returned per page. */
          per_page: number;
          /** Total count when requested and returned by Kit. */
          total_count: number | null;
        };
      };
    };
    /** List Kit forms and landing pages with optional filters and pagination. */
    "kit.list_forms": {
      input: {
        /**
         * Cursor returned by Kit pagination.
         * @minLength 1
         */
        after?: string;
        /**
         * Cursor returned by Kit pagination.
         * @minLength 1
         */
        before?: string;
        /**
         * Number of records to return per page. Kit defaults to 500.
         * @minimum 1
         * @maximum 1000
         */
        per_page?: number;
        /** Whether Kit should include the total_count value in pagination metadata. */
        include_total_count?: boolean;
        /** Form status used by Kit. */
        status?: "active" | "archived" | "trashed" | "all";
        /** Kit form type. */
        type?: "embed" | "hosted";
      };
      output: {
        /** Kit forms returned by the request. */
        forms: Array<{
          /** Kit form ID. */
          id: number;
          /** Kit form name. */
          name: string;
          /** Timestamp when the form was created. */
          created_at: string;
          /** Form type returned by Kit. */
          type: string;
          /** Form format returned by Kit. */
          format: string | null;
          /** URL for the form embed JavaScript. */
          embed_js: string;
          /**
           * URL for the hosted form.
           * @format uri
           */
          embed_url: string;
          /** Whether the form is archived. */
          archived: boolean;
          /** Kit form UID. */
          uid: string;
        }>;
        /** Kit pagination metadata. */
        pagination: {
          /** Whether a previous page exists. */
          has_previous_page: boolean;
          /** Whether a next page exists. */
          has_next_page: boolean;
          /** Cursor for the first item on the current page. */
          start_cursor: string | null;
          /** Cursor for the last item on the current page. */
          end_cursor: string | null;
          /** Number of records returned per page. */
          per_page: number;
          /** Total count when requested and returned by Kit. */
          total_count: number | null;
        };
      };
    };
    /** List Kit subscribers with optional filtering, sorting, and pagination. */
    "kit.list_subscribers": {
      input: {
        /**
         * Cursor returned by Kit pagination.
         * @minLength 1
         */
        after?: string;
        /**
         * Cursor returned by Kit pagination.
         * @minLength 1
         */
        before?: string;
        /**
         * Number of records to return per page. Kit defaults to 500.
         * @minimum 1
         * @maximum 1000
         */
        per_page?: number;
        /** Whether Kit should include the total_count value in pagination metadata. */
        include_total_count?: boolean;
        /**
         * Date or timestamp used by Kit filter parameters.
         * @minLength 1
         */
        created_after?: string;
        /**
         * Date or timestamp used by Kit filter parameters.
         * @minLength 1
         */
        created_before?: string;
        /**
         * Date or timestamp used by Kit filter parameters.
         * @minLength 1
         */
        updated_after?: string;
        /**
         * Date or timestamp used by Kit filter parameters.
         * @minLength 1
         */
        updated_before?: string;
        /** Exact subscriber email address or comma-separated emails. */
        email_address?: string;
        /**
         * Additional subscriber fields to include in Kit list responses.
         * @minItems 1
         */
        include?: Array<"attribution" | "tags" | "location" | "canceled_at">;
        /** Subscriber field used for sorting. */
        sort_field?: "id" | "cancelled_at" | "updated_at";
        /** Sort direction used by Kit. */
        sort_order?: "asc" | "desc";
        /** Subscriber status used by Kit. */
        status?: "active" | "inactive" | "bounced" | "complained" | "cancelled" | "all";
      };
      output: {
        /** Kit subscribers returned by the request. */
        subscribers: Array<{
          /** Kit subscriber ID. */
          id: number;
          /** Subscriber first name. */
          first_name: string | null;
          /**
           * Subscriber email address.
           * @format email
           */
          email_address: string;
          /** Subscriber state returned by Kit. */
          state: string;
          /** Timestamp when the subscriber was created. */
          created_at: string;
          /** Custom field values keyed by custom field label. Kit ignores fields that do not exist. */
          fields: Record<string, string | null>;
          /** Timestamp when the subscriber cancelled, when returned. */
          canceled_at: string | null;
          /** Subscriber attribution metadata returned by Kit. */
          attribution: {
            /** Referrer URL or source. */
            referrer: string | null;
            /** UTM source value. */
            utm_source: string | null;
            /** UTM medium value. */
            utm_medium: string | null;
            /** UTM campaign value. */
            utm_campaign: string | null;
            /** UTM term value. */
            utm_term: string | null;
            /** UTM content value. */
            utm_content: string | null;
            /** Kit source type value. */
            source_type: string | null;
            /** Kit source name value. */
            source_name: string | null;
            /** Kit source mechanism value. */
            source_mechanism: string | null;
          } | null;
          /** Tags included on the subscriber when requested. */
          tags: Array<{
            /** Kit tag ID. */
            id: number;
            /** Kit tag name. */
            name: string;
            /** Timestamp when the tag was created. */
            created_at: string | null;
          }>;
          /** Subscriber location metadata returned by Kit. */
          location: {
            /** Subscriber city. */
            city: string | null;
            /** Subscriber state or region. */
            state: string | null;
            /** Subscriber country. */
            country: string | null;
            /** Subscriber latitude. */
            latitude: number | null;
            /** Subscriber longitude. */
            longitude: number | null;
          } | null;
          /** Timestamp when the subscriber was added to a form. */
          added_at: string | null;
          /** Timestamp when the subscriber was tagged. */
          tagged_at: string | null;
          /** Referrer returned for a form subscriber. */
          referrer: string | null;
          /** UTM parameters returned for a form subscriber. */
          referrer_utm_parameters: {
            /** UTM source value. */
            source: string | null;
            /** UTM medium value. */
            medium: string | null;
            /** UTM campaign value. */
            campaign: string | null;
            /** UTM term value. */
            term: string | null;
            /** UTM content value. */
            content: string | null;
          } | null;
        }>;
        /** Kit pagination metadata. */
        pagination: {
          /** Whether a previous page exists. */
          has_previous_page: boolean;
          /** Whether a next page exists. */
          has_next_page: boolean;
          /** Cursor for the first item on the current page. */
          start_cursor: string | null;
          /** Cursor for the last item on the current page. */
          end_cursor: string | null;
          /** Number of records returned per page. */
          per_page: number;
          /** Total count when requested and returned by Kit. */
          total_count: number | null;
        };
      };
    };
    /** List Kit subscribers who have a specific tag. */
    "kit.list_tag_subscribers": {
      input: {
        /**
         * Kit tag ID.
         * @minimum 1
         */
        tag_id: number;
        /**
         * Cursor returned by Kit pagination.
         * @minLength 1
         */
        after?: string;
        /**
         * Cursor returned by Kit pagination.
         * @minLength 1
         */
        before?: string;
        /**
         * Number of records to return per page. Kit defaults to 500.
         * @minimum 1
         * @maximum 1000
         */
        per_page?: number;
        /** Whether Kit should include the total_count value in pagination metadata. */
        include_total_count?: boolean;
        /**
         * Date or timestamp used by Kit filter parameters.
         * @minLength 1
         */
        created_after?: string;
        /**
         * Date or timestamp used by Kit filter parameters.
         * @minLength 1
         */
        created_before?: string;
        /**
         * Date or timestamp used by Kit filter parameters.
         * @minLength 1
         */
        tagged_after?: string;
        /**
         * Date or timestamp used by Kit filter parameters.
         * @minLength 1
         */
        tagged_before?: string;
        /** Subscriber status used by Kit. */
        status?: "active" | "inactive" | "bounced" | "complained" | "cancelled" | "all";
      };
      output: {
        /** Kit subscribers returned by the request. */
        subscribers: Array<{
          /** Kit subscriber ID. */
          id: number;
          /** Subscriber first name. */
          first_name: string | null;
          /**
           * Subscriber email address.
           * @format email
           */
          email_address: string;
          /** Subscriber state returned by Kit. */
          state: string;
          /** Timestamp when the subscriber was created. */
          created_at: string;
          /** Custom field values keyed by custom field label. Kit ignores fields that do not exist. */
          fields: Record<string, string | null>;
          /** Timestamp when the subscriber cancelled, when returned. */
          canceled_at: string | null;
          /** Subscriber attribution metadata returned by Kit. */
          attribution: {
            /** Referrer URL or source. */
            referrer: string | null;
            /** UTM source value. */
            utm_source: string | null;
            /** UTM medium value. */
            utm_medium: string | null;
            /** UTM campaign value. */
            utm_campaign: string | null;
            /** UTM term value. */
            utm_term: string | null;
            /** UTM content value. */
            utm_content: string | null;
            /** Kit source type value. */
            source_type: string | null;
            /** Kit source name value. */
            source_name: string | null;
            /** Kit source mechanism value. */
            source_mechanism: string | null;
          } | null;
          /** Tags included on the subscriber when requested. */
          tags: Array<{
            /** Kit tag ID. */
            id: number;
            /** Kit tag name. */
            name: string;
            /** Timestamp when the tag was created. */
            created_at: string | null;
          }>;
          /** Subscriber location metadata returned by Kit. */
          location: {
            /** Subscriber city. */
            city: string | null;
            /** Subscriber state or region. */
            state: string | null;
            /** Subscriber country. */
            country: string | null;
            /** Subscriber latitude. */
            latitude: number | null;
            /** Subscriber longitude. */
            longitude: number | null;
          } | null;
          /** Timestamp when the subscriber was added to a form. */
          added_at: string | null;
          /** Timestamp when the subscriber was tagged. */
          tagged_at: string | null;
          /** Referrer returned for a form subscriber. */
          referrer: string | null;
          /** UTM parameters returned for a form subscriber. */
          referrer_utm_parameters: {
            /** UTM source value. */
            source: string | null;
            /** UTM medium value. */
            medium: string | null;
            /** UTM campaign value. */
            campaign: string | null;
            /** UTM term value. */
            term: string | null;
            /** UTM content value. */
            content: string | null;
          } | null;
        }>;
        /** Kit pagination metadata. */
        pagination: {
          /** Whether a previous page exists. */
          has_previous_page: boolean;
          /** Whether a next page exists. */
          has_next_page: boolean;
          /** Cursor for the first item on the current page. */
          start_cursor: string | null;
          /** Cursor for the last item on the current page. */
          end_cursor: string | null;
          /** Number of records returned per page. */
          per_page: number;
          /** Total count when requested and returned by Kit. */
          total_count: number | null;
        };
      };
    };
    /** List Kit tags with optional pagination. */
    "kit.list_tags": {
      input: {
        /**
         * Cursor returned by Kit pagination.
         * @minLength 1
         */
        after?: string;
        /**
         * Cursor returned by Kit pagination.
         * @minLength 1
         */
        before?: string;
        /**
         * Number of records to return per page. Kit defaults to 500.
         * @minimum 1
         * @maximum 1000
         */
        per_page?: number;
        /** Whether Kit should include the total_count value in pagination metadata. */
        include_total_count?: boolean;
      };
      output: {
        /** Kit tags returned by the request. */
        tags: Array<{
          /** Kit tag ID. */
          id: number;
          /** Kit tag name. */
          name: string;
          /** Timestamp when the tag was created. */
          created_at: string | null;
        }>;
        /** Kit pagination metadata. */
        pagination: {
          /** Whether a previous page exists. */
          has_previous_page: boolean;
          /** Whether a next page exists. */
          has_next_page: boolean;
          /** Cursor for the first item on the current page. */
          start_cursor: string | null;
          /** Cursor for the last item on the current page. */
          end_cursor: string | null;
          /** Number of records returned per page. */
          per_page: number;
          /** Total count when requested and returned by Kit. */
          total_count: number | null;
        };
      };
    };
    /** Update a Kit subscriber's email address, first name, and custom fields. */
    "kit.update_subscriber": {
      input: {
        /**
         * Kit subscriber ID.
         * @minimum 1
         */
        id: number;
        /**
         * Subscriber email address.
         * @format email
         */
        email_address: string;
        /** Subscriber first name. */
        first_name?: string | null;
        /** Custom field values keyed by custom field label. Kit ignores fields that do not exist. */
        fields?: Record<string, string | null>;
      };
      output: {
        /** A Kit subscriber. */
        subscriber: {
          /** Kit subscriber ID. */
          id: number;
          /** Subscriber first name. */
          first_name: string | null;
          /**
           * Subscriber email address.
           * @format email
           */
          email_address: string;
          /** Subscriber state returned by Kit. */
          state: string;
          /** Timestamp when the subscriber was created. */
          created_at: string;
          /** Custom field values keyed by custom field label. Kit ignores fields that do not exist. */
          fields: Record<string, string | null>;
          /** Timestamp when the subscriber cancelled, when returned. */
          canceled_at: string | null;
          /** Subscriber attribution metadata returned by Kit. */
          attribution: {
            /** Referrer URL or source. */
            referrer: string | null;
            /** UTM source value. */
            utm_source: string | null;
            /** UTM medium value. */
            utm_medium: string | null;
            /** UTM campaign value. */
            utm_campaign: string | null;
            /** UTM term value. */
            utm_term: string | null;
            /** UTM content value. */
            utm_content: string | null;
            /** Kit source type value. */
            source_type: string | null;
            /** Kit source name value. */
            source_name: string | null;
            /** Kit source mechanism value. */
            source_mechanism: string | null;
          } | null;
          /** Tags included on the subscriber when requested. */
          tags: Array<{
            /** Kit tag ID. */
            id: number;
            /** Kit tag name. */
            name: string;
            /** Timestamp when the tag was created. */
            created_at: string | null;
          }>;
          /** Subscriber location metadata returned by Kit. */
          location: {
            /** Subscriber city. */
            city: string | null;
            /** Subscriber state or region. */
            state: string | null;
            /** Subscriber country. */
            country: string | null;
            /** Subscriber latitude. */
            latitude: number | null;
            /** Subscriber longitude. */
            longitude: number | null;
          } | null;
          /** Timestamp when the subscriber was added to a form. */
          added_at: string | null;
          /** Timestamp when the subscriber was tagged. */
          tagged_at: string | null;
          /** Referrer returned for a form subscriber. */
          referrer: string | null;
          /** UTM parameters returned for a form subscriber. */
          referrer_utm_parameters: {
            /** UTM source value. */
            source: string | null;
            /** UTM medium value. */
            medium: string | null;
            /** UTM campaign value. */
            campaign: string | null;
            /** UTM term value. */
            term: string | null;
            /** UTM content value. */
            content: string | null;
          } | null;
        };
      };
    };
  }
}
