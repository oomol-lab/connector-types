import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete one Userflow group by ID. */
    "userflow.delete_group": {
      input: {
        /**
         * The Userflow group ID to delete.
         * @minLength 1
         */
        group_id: string;
      };
      output: {
        /** Whether the Userflow group was deleted. */
        deleted: boolean;
        /** The deleted Userflow group ID. */
        group_id: string;
        /** A raw object returned by Userflow. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete one Userflow user by ID. */
    "userflow.delete_user": {
      input: {
        /**
         * The Userflow user ID to delete.
         * @minLength 1
         */
        user_id: string;
      };
      output: {
        /** Whether the Userflow user was deleted. */
        deleted: boolean;
        /** The deleted Userflow user ID. */
        user_id: string;
        /** A raw object returned by Userflow. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch one Userflow group by ID. */
    "userflow.get_group": {
      input: {
        /**
         * The Userflow group ID to retrieve.
         * @minLength 1
         */
        group_id: string;
        /** Expandable Userflow fields to include in the response. */
        expand?: Array<string>;
      };
      output: {
        /** A Userflow group object. */
        group: {
          /** The Userflow group ID. */
          id?: string;
          /** The Userflow object type. */
          object?: string;
          /** The group's display name. */
          name?: string | null;
          /** Userflow custom attributes keyed by attribute name. */
          attributes?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch one Userflow user by ID. */
    "userflow.get_user": {
      input: {
        /**
         * The Userflow user ID to retrieve.
         * @minLength 1
         */
        user_id: string;
        /** Expandable Userflow fields to include in the response. */
        expand?: Array<string>;
      };
      output: {
        /** A Userflow user object. */
        user: {
          /** The Userflow user ID. */
          id?: string;
          /** The Userflow object type. */
          object?: string;
          /** The user's display name. */
          name?: string | null;
          /** The user's email address. */
          email?: string | null;
          /** Userflow custom attributes keyed by attribute name. */
          attributes?: Record<string, unknown>;
          /** Timestamp when the user signed up. */
          signed_up_at?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Userflow users with optional cursor pagination and filters. */
    "userflow.list_users": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Object ID after which the page should start.
         * @minLength 1
         */
        starting_after?: string;
        /**
         * Object ID before which the page should end.
         * @minLength 1
         */
        ending_before?: string;
        /** Filter users by email address. */
        email?: string;
        /**
         * Filter users by external user ID.
         * @minLength 1
         */
        user_id?: string;
        /** Expandable Userflow fields to include in the response. */
        expand?: Array<string>;
        /**
         * Sort order accepted by Userflow.
         * @minLength 1
         */
        order_by?: string;
      };
      output: {
        /** The Userflow list object type. */
        object: string;
        /** Users returned by Userflow. */
        data: Array<{
          /** The Userflow user ID. */
          id?: string;
          /** The Userflow object type. */
          object?: string;
          /** The user's display name. */
          name?: string | null;
          /** The user's email address. */
          email?: string | null;
          /** Userflow custom attributes keyed by attribute name. */
          attributes?: Record<string, unknown>;
          /** Timestamp when the user signed up. */
          signed_up_at?: string | null;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_more: boolean;
        /** The API path represented by the list. */
        url: string;
        [key: string]: unknown;
      };
    };
    /** Track one Userflow event for a user. */
    "userflow.track_event": {
      input: {
        /**
         * The event name to track.
         * @minLength 1
         */
        name: string;
        /**
         * The Userflow user ID associated with the event.
         * @minLength 1
         */
        user_id: string;
        /**
         * The Userflow group ID associated with the event.
         * @minLength 1
         */
        group_id?: string;
        /**
         * Timestamp when the event occurred.
         * @format date-time
         */
        occurred_at?: string;
        /** Userflow custom attributes keyed by attribute name. */
        attributes?: Record<string, unknown>;
      };
      output: {
        /** A Userflow API object. */
        event: {
          /** The Userflow object ID. */
          id?: string;
          /** The Userflow object type. */
          object?: string;
          /** Timestamp when the object was created. */
          created_at?: string | null;
          /** Timestamp when the object was last updated. */
          updated_at?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create or update one Userflow group. */
    "userflow.upsert_group": {
      input: {
        /**
         * The external group ID to create or update in Userflow.
         * @minLength 1
         */
        group_id: string;
        /** The group's display name. */
        name?: string;
        /** Userflow custom attributes keyed by attribute name. */
        attributes?: Record<string, unknown>;
      };
      output: {
        /** A Userflow group object. */
        group: {
          /** The Userflow group ID. */
          id?: string;
          /** The Userflow object type. */
          object?: string;
          /** The group's display name. */
          name?: string | null;
          /** Userflow custom attributes keyed by attribute name. */
          attributes?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create or update one Userflow user. */
    "userflow.upsert_user": {
      input: {
        /**
         * The external user ID to create or update in Userflow.
         * @minLength 1
         */
        user_id: string;
        /** The user's display name. */
        name?: string;
        /**
         * The user's email address.
         * @format email
         */
        email?: string;
        /**
         * Timestamp when the user signed up.
         * @format date-time
         */
        signed_up_at?: string;
        /** Userflow custom attributes keyed by attribute name. */
        attributes?: Record<string, unknown>;
        /** Group IDs the user belongs to. */
        groups?: Array<string>;
      };
      output: {
        /** A Userflow user object. */
        user: {
          /** The Userflow user ID. */
          id?: string;
          /** The Userflow object type. */
          object?: string;
          /** The user's display name. */
          name?: string | null;
          /** The user's email address. */
          email?: string | null;
          /** Userflow custom attributes keyed by attribute name. */
          attributes?: Record<string, unknown>;
          /** Timestamp when the user signed up. */
          signed_up_at?: string | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
