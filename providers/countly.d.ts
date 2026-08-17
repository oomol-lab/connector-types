import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve Countly application metadata and its user access lists. */
    "countly.get_app_details": {
      input: {
        /**
         * The Countly application ID.
         * @minLength 1
         */
        appId: string;
      };
      output: {
        /** Application metadata and user access lists returned by Countly. */
        details: {
          /** Countly application metadata. */
          app?: Record<string, unknown>;
          /** Global administrators returned by Countly. */
          global_admin?: Array<Record<string, unknown>>;
          /** Application administrators returned by Countly. */
          admin?: Array<Record<string, unknown>>;
          /** Application users returned by Countly. */
          user?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the Countly user associated with the connected API key. */
    "countly.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The Countly user associated with the API key. */
        user: {
          /** The Countly user ID. */
          _id?: string;
          /** The Countly user name. */
          username?: string;
          /** The Countly user's full name. */
          full_name?: string;
          /** The Countly user's email address. */
          email?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve Countly dashboard analytics for an application. */
    "countly.get_dashboard_analytics": {
      input: {
        /**
         * The Countly application ID.
         * @minLength 1
         */
        appId: string;
      };
      output: {
        /** Dashboard analytics returned by Countly. */
        analytics: Record<string, unknown>;
      };
    };
    /** List Countly applications owned by the connected user. */
    "countly.list_apps": {
      input: Record<string, never>;
      output: {
        /** Applications administered by the connected user, keyed by app ID. */
        adminOf: Record<string, {
            /**
             * The Countly application ID.
             * @minLength 1
             */
            _id?: string;
            /** The application name. */
            name?: string;
            /** The application type. */
            type?: string;
            /** The application's configured timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
        /** Applications accessible to the connected user, keyed by app ID. */
        userOf: Record<string, {
            /**
             * The Countly application ID.
             * @minLength 1
             */
            _id?: string;
            /** The application name. */
            name?: string;
            /** The application type. */
            type?: string;
            /** The application's configured timezone. */
            timezone?: string;
            [key: string]: unknown;
          }>;
      };
    };
    /** Retrieve event analytics for one or more Countly event keys. */
    "countly.list_event_analytics": {
      input: {
        /**
         * The Countly application ID.
         * @minLength 1
         */
        appId: string;
        /**
         * A single Countly event key to query.
         * @minLength 1
         */
        event?: string;
        /** Multiple Countly event keys to query. */
        events?: Array<string>;
        /**
         * The event segmentation key to break results down by.
         * @minLength 1
         */
        segmentation?: string;
        /** The Countly period, such as month, 30days, 7days, yesterday, hour, or a JSON array of start and end timestamps. */
        period?: string;
      };
      output: {
        /** Event analytics data points returned by Countly. */
        events: Array<{
          /** The date, time, or segmentation bucket identifier. */
          _id?: string;
          /** The total event count in the bucket. */
          c?: number;
          /** The total event sum in the bucket. */
          s?: number;
          /** The total event duration in the bucket. */
          dur?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve session analytics data points for a Countly application and period. */
    "countly.list_session_analytics": {
      input: {
        /**
         * The Countly application ID.
         * @minLength 1
         */
        appId: string;
        /** The Countly period, such as month, 30days, 7days, yesterday, hour, or a JSON array of start and end timestamps. */
        period?: string;
      };
      output: {
        /** Session analytics data points returned by Countly. */
        sessions: Array<{
          /** The date or time bucket identifier. */
          _id?: string;
          /** The total unique users in the bucket. */
          u?: number;
          /** The total sessions in the bucket. */
          t?: number;
          /** The new users in the bucket. */
          n?: number;
          /** The total session duration in seconds. */
          d?: number;
          /** The total write API requests in the bucket. */
          e?: number;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
