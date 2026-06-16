import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete one Formsite webhook from a form by its destination URL. */
    "formsite.delete_webhook": {
      input: {
        /**
         * The form directory identifier whose webhook should be deleted.
         * @minLength 1
         */
        form_dir: string;
        /**
         * Optional Formsite user directory. When omitted, the connected default userDir is used.
         * @minLength 1
         */
        user_dir?: string;
        /**
         * The webhook URL to delete from the form.
         * @format uri
         */
        url: string;
      };
      output: {
        /** Whether the targeted webhook delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Get one Formsite form by its form directory identifier. */
    "formsite.get_form": {
      input: {
        /**
         * The form directory identifier to retrieve.
         * @minLength 1
         */
        form_dir: string;
        /**
         * Optional Formsite user directory. When omitted, the connected default userDir is used.
         * @minLength 1
         */
        user_dir?: string;
      };
      output: {
        /** The requested Formsite form. */
        form: {
          /** The internal form description. */
          description?: string;
          /**
           * The form directory identifier used in Formsite URLs.
           * @minLength 1
           */
          directory: string;
          /**
           * The form display name.
           * @minLength 1
           */
          name: string;
          /** The publish metadata for the form. */
          publish?: {
            /** The embeddable code returned by Formsite for the form. */
            embed_code?: string;
            /** The public link returned by Formsite for the form. */
            link?: string;
          };
          /** The form state returned by Formsite, such as open or a closed reason. */
          state?: string;
          /** The summary statistics for the form. */
          stats?: {
            /**
             * The total uploaded file size in bytes stored for the form.
             * @minimum 0
             */
            filesSize?: number;
            /**
             * The number of results currently stored for the form.
             * @minimum 0
             */
            resultsCount?: number;
          };
        };
      };
    };
    /** List the item definitions for one Formsite form. */
    "formsite.get_form_items": {
      input: {
        /**
         * The form directory identifier whose items should be listed.
         * @minLength 1
         */
        form_dir: string;
        /**
         * Optional Formsite user directory. When omitted, the connected default userDir is used.
         * @minLength 1
         */
        user_dir?: string;
        /**
         * Optional results labels ID to apply when reading item labels.
         * @minLength 1
         */
        results_labels?: string;
      };
      output: {
        /** The item definitions returned by Formsite. */
        items: Array<{
          /**
           * The unique Formsite item identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The sequential position of the item inside the form.
           * @minimum 0
           */
          position: number;
          /**
           * The visible question label for the item.
           * @minLength 1
           */
          label: string;
          /** The child item identifiers for compound items. */
          children?: Array<string>;
        }>;
      };
    };
    /** List results for one Formsite form with pagination, date windows, result ID windows, and upstream search filters. */
    "formsite.get_form_results": {
      input: {
        /**
         * Optional alias for the form directory identifier. form_id is preferred and wins when both are provided.
         * @minLength 1
         */
        form_dir?: string;
        /**
         * The form directory identifier whose results should be listed.
         * @minLength 1
         */
        form_id?: string;
        /**
         * Optional Formsite user directory. When omitted, the connected default userDir is used.
         * @minLength 1
         */
        user_dir?: string;
        /**
         * Maximum number of results to return, up to 500.
         * @minimum 1
         */
        limit?: number;
        /**
         * The page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * Only return results updated after this timestamp or local datetime string.
         * @minLength 1
         */
        after_date?: string;
        /**
         * Only return results updated before this timestamp or local datetime string.
         * @minLength 1
         */
        before_date?: string;
        /**
         * Only return results whose IDs are greater than this result ID.
         * @minLength 1
         */
        after_id?: string;
        /**
         * Only return results whose IDs are less than this result ID.
         * @minLength 1
         */
        before_id?: string;
        /**
         * Optional item or meta field identifier to use as the upstream sort key.
         * @minLength 1
         */
        sort_id?: string;
        /**
         * Optional results view identifier to apply.
         * @minLength 1
         */
        results_view?: string;
        /** The upstream result sort direction. */
        sort_direction?: "asc" | "desc";
        /** How multiple search clauses should be combined. */
        search_method?: "and" | "or";
        /** Equality search values keyed by Formsite item or meta field ID. */
        search_equals?: Record<string, string>;
        /** Contains search values keyed by Formsite text item ID. */
        search_contains?: Record<string, string>;
        /** Begins-with search values keyed by Formsite text item ID. */
        search_begins?: Record<string, string>;
        /** Ends-with search values keyed by Formsite text item ID. */
        search_ends?: Record<string, string>;
      };
      output: {
        /** The results returned by Formsite. */
        results: Array<{
          /**
           * The Formsite result identifier.
           * @minLength 1
           */
          id: string;
          /** The timestamp when the result was started, when available. */
          date_start?: string;
          /** The timestamp when the result was finished, when available. */
          date_finish?: string;
          /** The timestamp when the result was last updated. */
          date_update?: string;
          /** The Save & Return email associated with the result, when available. */
          login_email?: string;
          /** The Save & Return username associated with the result, when available. */
          login_username?: string;
          /** The payment amount associated with the result, when available. */
          payment_amount?: number;
          /** The payment status associated with the result, when available. */
          payment_status?: string;
          /** The result status returned by Formsite. */
          result_status?: string;
          /** The browser reported for the submitter. */
          user_browser?: string;
          /** The device type reported for the submitter. */
          user_device?: string;
          /** The IP address reported for the submitter. */
          user_ip?: string;
          /** The referring URL reported by Formsite, when available. */
          user_referrer?: string;
          /** The captured item values for the result. */
          items: Array<{
            /**
             * The Formsite item identifier.
             * @minLength 1
             */
            id: string;
            /**
             * The sequential position of the item in the form.
             * @minimum 0
             */
            position: number;
            /** The scalar text value returned for single-value items. */
            value?: string;
            /** The structured values returned for multi-value Formsite items. */
            values?: Array<Record<string, string | number | boolean | null>>;
          }>;
        }>;
      };
    };
    /** List all forms available in the connected Formsite account user directory. */
    "formsite.list_forms": {
      input: {
        /**
         * Optional Formsite user directory. When omitted, the connected default userDir is used.
         * @minLength 1
         */
        user_dir?: string;
      };
      output: {
        /** The forms returned by Formsite. */
        forms: Array<{
          /** The internal form description. */
          description?: string;
          /**
           * The form directory identifier used in Formsite URLs.
           * @minLength 1
           */
          directory: string;
          /**
           * The form display name.
           * @minLength 1
           */
          name: string;
          /** The publish metadata for the form. */
          publish?: {
            /** The embeddable code returned by Formsite for the form. */
            embed_code?: string;
            /** The public link returned by Formsite for the form. */
            link?: string;
          };
          /** The form state returned by Formsite, such as open or a closed reason. */
          state?: string;
          /** The summary statistics for the form. */
          stats?: {
            /**
             * The total uploaded file size in bytes stored for the form.
             * @minimum 0
             */
            filesSize?: number;
            /**
             * The number of results currently stored for the form.
             * @minimum 0
             */
            resultsCount?: number;
          };
        }>;
      };
    };
    /** List all webhooks configured for one Formsite form. */
    "formsite.list_webhooks": {
      input: {
        /**
         * The form directory identifier whose webhooks should be listed.
         * @minLength 1
         */
        form_dir: string;
        /**
         * Optional Formsite user directory. When omitted, the connected default userDir is used.
         * @minLength 1
         */
        user_dir?: string;
      };
      output: {
        /** The webhooks configured on the form. */
        webhooks: Array<{
          /**
           * The Formsite event subscribed by the webhook.
           * @minLength 1
           */
          event: string;
          /** The optional handshake key configured for the webhook. */
          handshake_key?: string;
          /**
           * The webhook delivery URL.
           * @format uri
           */
          url: string;
        }>;
      };
    };
    /** Create a new Formsite webhook, or update the existing webhook that matches the same URL. */
    "formsite.upsert_webhook": {
      input: {
        /**
         * The form directory identifier whose webhook should be created or updated.
         * @minLength 1
         */
        form_dir: string;
        /**
         * Optional Formsite user directory. When omitted, the connected default userDir is used.
         * @minLength 1
         */
        user_dir?: string;
        /**
         * The event name to subscribe, such as result_completed.
         * @minLength 1
         */
        event: string;
        /**
         * The webhook destination URL.
         * @format uri
         */
        url: string;
        /**
         * Optional handshake key to include in deliveries.
         * @minLength 1
         */
        handshake_key?: string;
      };
      output: {
        /** The created or updated Formsite webhook. */
        webhook: {
          /**
           * The Formsite event subscribed by the webhook.
           * @minLength 1
           */
          event: string;
          /** The optional handshake key configured for the webhook. */
          handshake_key?: string;
          /**
           * The webhook delivery URL.
           * @format uri
           */
          url: string;
        };
      };
    };
  }
}
