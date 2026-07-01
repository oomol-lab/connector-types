import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a single Lumos access request by ID. */
    "lumos.get_access_request": {
      input: {
        /**
         * The ID of the access request to retrieve.
         * @minLength 1
         */
        id: string;
        /** Access request fields to expand. Lumos currently supports tasks and custom_fields. */
        expand?: Array<"tasks" | "custom_fields">;
      };
      output: {
        /** An access request returned by Lumos. */
        accessRequest: {
          /** The ID of the access request. */
          id?: string;
          /** The ID of the app the request is for. */
          app_id?: string;
          /** The name of the app the request is for. */
          app_name?: string;
          /** The current status of the request. */
          status?: string;
          /** When the access request expires, if it has an expiration. */
          expires_at?: string | null;
          /** The lifetime of time-based access after provisioning, in seconds. */
          expiration_in_seconds?: number | null;
          /** When the access request was created. */
          requested_at?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get a single AppStore app from Lumos by app ID. */
    "lumos.get_appstore_app": {
      input: {
        /**
         * The ID of the AppStore app to retrieve.
         * @minLength 1
         */
        app_id: string;
        /** App fields to expand. Lumos currently supports custom_attributes. */
        expand?: Array<"custom_attributes">;
      };
      output: {
        /** An AppStore app returned by Lumos. */
        app: {
          /** The ID of this app. */
          id?: string;
          /** The non-unique ID of the service associated with this requestable permission. */
          app_class_id?: string;
          /** The non-unique ID of the instance associated with this app. */
          instance_id?: string;
          /** The user-friendly label of this app. */
          user_friendly_label?: string;
          /** The status of this app. */
          status?: string;
          /** The URL of the logo of this app. */
          logo_url?: string | null;
          /** The URL of the website of this app. */
          website_url?: string | null;
          /** The user-facing description of the app. */
          description?: string | null;
          /** The category of the app, as shown in the AppStore. */
          category?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List access requests in Lumos with optional user and status filters. */
    "lumos.list_access_requests": {
      input: {
        /**
         * Filter requests by the ID of the target user.
         * @minLength 1
         */
        target_user_id?: string;
        /**
         * Filter requests by the ID of the requesting user.
         * @minLength 1
         */
        requester_user_id?: string;
        /**
         * Filter requests by the ID of the user.
         * @minLength 1
         */
        user_id?: string;
        /** Filter requests by their Lumos status values. */
        statuses?: Array<string>;
        /** Sort access requests by created date. */
        sort?: "ASC" | "DESC";
        /** Access request fields to expand. Lumos currently supports tasks and custom_fields. */
        expand?: Array<"tasks" | "custom_fields">;
        /**
         * The 1-based page number to request from Lumos.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items per page. Lumos caps this value at 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
      };
      output: {
        /** The access requests returned by Lumos. */
        accessRequests: Array<{
          /** The ID of the access request. */
          id?: string;
          /** The ID of the app the request is for. */
          app_id?: string;
          /** The name of the app the request is for. */
          app_name?: string;
          /** The current status of the request. */
          status?: string;
          /** When the access request expires, if it has an expiration. */
          expires_at?: string | null;
          /** The lifetime of time-based access after provisioning, in seconds. */
          expiration_in_seconds?: number | null;
          /** When the access request was created. */
          requested_at?: string | null;
          [key: string]: unknown;
        }>;
        /** The page number returned by Lumos. */
        page: number;
        /** The page size returned by Lumos. */
        size: number;
        /** The total number of items when Lumos returns it. */
        total: number | null;
        /** The raw Lumos response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List AppStore apps in Lumos with optional search and visibility filters. */
    "lumos.list_appstore_apps": {
      input: {
        /**
         * Filter apps by the ID of the app.
         * @minLength 1
         */
        app_id?: string;
        /**
         * Search against name, app instance identifier, and app class ID.
         * @minLength 1
         */
        name_search?: string;
        /** Whether the name_search filter should be an exact match. */
        exact_match?: boolean;
        /** Whether to include apps regardless of AppStore visibility. Only available to admins. */
        all_visibilities?: boolean;
        /** App fields to expand. Lumos currently supports custom_attributes. */
        expand?: Array<"custom_attributes">;
        /**
         * The 1-based page number to request from Lumos.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items per page. Lumos caps this value at 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
      };
      output: {
        /** The AppStore apps returned by Lumos. */
        apps: Array<{
          /** The ID of this app. */
          id?: string;
          /** The non-unique ID of the service associated with this requestable permission. */
          app_class_id?: string;
          /** The non-unique ID of the instance associated with this app. */
          instance_id?: string;
          /** The user-friendly label of this app. */
          user_friendly_label?: string;
          /** The status of this app. */
          status?: string;
          /** The URL of the logo of this app. */
          logo_url?: string | null;
          /** The URL of the website of this app. */
          website_url?: string | null;
          /** The user-facing description of the app. */
          description?: string | null;
          /** The category of the app, as shown in the AppStore. */
          category?: string | null;
          [key: string]: unknown;
        }>;
        /** The page number returned by Lumos. */
        page: number;
        /** The page size returned by Lumos. */
        size: number;
        /** The total number of items when Lumos returns it. */
        total: number | null;
        /** The raw Lumos response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
