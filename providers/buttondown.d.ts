import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Buttondown subscriber. */
    "buttondown.create_subscriber": {
      input: {
        /**
         * The email address of the subscriber.
         * @maxLength 254
         * @format email
         */
        email_address: string;
        /** Any private notes to attach to the subscriber. */
        notes?: string;
        /** A structured key-value blob stored on the Buttondown object. */
        metadata?: Record<string, unknown>;
        /** Tag names to apply to the subscriber. Tags that do not already exist will be created. */
        tags?: Array<string>;
        /** The URL the subscriber was referred from. */
        referrer_url?: string;
        /**
         * The UTM campaign attributed to the subscriber at signup.
         * @maxLength 300
         */
        utm_campaign?: string;
        /**
         * The UTM medium attributed to the subscriber at signup.
         * @maxLength 300
         */
        utm_medium?: string;
        /**
         * The UTM source attributed to the subscriber at signup.
         * @maxLength 300
         */
        utm_source?: string;
        /** The subscriber lifecycle state returned by Buttondown. */
        type?: "regular" | "premium" | "unactivated" | "unsubscribed" | "removed" | null;
        /** The IP address of the subscriber. */
        ip_address?: string | null;
        /** The behavior to apply when a record with the same unique value already exists. */
        collision_behavior?: "add" | "overwrite";
        /** Whether to bypass Buttondown's firewall for this subscriber creation. */
        bypass_firewall?: boolean;
      };
      output: {
        /** A Buttondown subscriber. */
        subscriber: {
          /** A unique TypeID associated with the subscriber. */
          id: string;
          /**
           * The date and time at which the subscriber was first created.
           * @format date-time
           */
          creation_date: string;
          /**
           * The email address of the subscriber.
           * @format email
           */
          email_address: string;
          /** The subscriber lifecycle state returned by Buttondown. */
          type?: "regular" | "premium" | "unactivated" | "unsubscribed" | "removed" | null;
          /** Private notes attached to the subscriber. */
          notes?: string | null;
          /** A structured key-value blob stored on the Buttondown object. */
          metadata?: Record<string, unknown>;
          /** Tag names applied to the subscriber. */
          tags?: Array<string>;
          /** URL of the subscriber's avatar image, if available. */
          avatar_url?: string | null;
          /**
           * The date of the subscriber's most recent bounce event.
           * @format date-time
           */
          bounce_date?: string | null;
          /**
           * When the subscriber cancelled their paid subscription, if applicable.
           * @format date-time
           */
          churn_date?: string | null;
          /** The ISO 3166-1 alpha-2 country code inferred at signup, if available. */
          country?: string | null;
          /** The number of distinct emails delivered to this subscriber. */
          delivered_count?: number | null;
          /** The subscriber's open count. */
          open_count?: number | null;
          /** The subscriber's clicked count. */
          clicked_count?: number | null;
          /** The subscriber's open rate, or null when unavailable. */
          open_rate?: number | null;
          /** The subscriber's click rate, or null when unavailable. */
          click_rate?: number | null;
          /** The raw Buttondown API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Buttondown tag. */
    "buttondown.create_tag": {
      input: {
        /**
         * The name of the tag.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
        /**
         * The hex color code associated with the tag.
         * @minLength 4
         * @maxLength 7
         * @pattern ^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$
         */
        color: string;
        /** An internal description of the tag. */
        description?: string | null;
        /** A public-facing description of the tag. */
        public_description?: string | null;
        /** Whether subscribers can add or remove this tag from their own profile. */
        subscriber_editable?: boolean;
        /** Whether to overwrite an existing tag with the same name. */
        collision_behavior?: "overwrite";
      };
      output: {
        /** A Buttondown tag. */
        tag: {
          /** A unique TypeID associated with the tag. */
          id: string;
          /**
           * The date and time at which the tag was first created.
           * @format date-time
           */
          creation_date: string;
          /** The name of the tag. */
          name: string;
          /** The hex color code associated with the tag. */
          color: string;
          /** An internal description of the tag. */
          description?: string | null;
          /** A public-facing description of the tag. */
          public_description?: string | null;
          /** Whether subscribers can add or remove this tag from their own profile. */
          subscriber_editable: boolean;
          /** The secondary human-readable numeric identifier for the tag. */
          secondary_id: number;
          /** The raw Buttondown API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Buttondown subscriber by ID or email address. */
    "buttondown.delete_subscriber": {
      input: {
        /**
         * The Buttondown subscriber ID or email address.
         * @minLength 1
         */
        id_or_email: string;
      };
      output: {
        /** The Buttondown subscriber ID or email address that was deleted. */
        id_or_email: string;
        /** Whether the connector completed the delete request. */
        deleted: boolean;
      };
    };
    /** Delete a Buttondown tag by ID. */
    "buttondown.delete_tag": {
      input: {
        /**
         * The Buttondown tag ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Buttondown tag ID that was deleted. */
        id: string;
        /** Whether the connector completed the delete request. */
        deleted: boolean;
      };
    };
    /** Get the account associated with the Buttondown API key. */
    "buttondown.get_account": {
      input: Record<string, never>;
      output: {
        /** The username associated with the account. */
        username: string;
        /**
         * The email address associated with the account.
         * @format email
         */
        email_address: string;
      };
    };
    /** Retrieve one Buttondown subscriber by ID or email address. */
    "buttondown.get_subscriber": {
      input: {
        /**
         * The Buttondown subscriber ID or email address.
         * @minLength 1
         */
        id_or_email: string;
      };
      output: {
        /** A Buttondown subscriber. */
        subscriber: {
          /** A unique TypeID associated with the subscriber. */
          id: string;
          /**
           * The date and time at which the subscriber was first created.
           * @format date-time
           */
          creation_date: string;
          /**
           * The email address of the subscriber.
           * @format email
           */
          email_address: string;
          /** The subscriber lifecycle state returned by Buttondown. */
          type?: "regular" | "premium" | "unactivated" | "unsubscribed" | "removed" | null;
          /** Private notes attached to the subscriber. */
          notes?: string | null;
          /** A structured key-value blob stored on the Buttondown object. */
          metadata?: Record<string, unknown>;
          /** Tag names applied to the subscriber. */
          tags?: Array<string>;
          /** URL of the subscriber's avatar image, if available. */
          avatar_url?: string | null;
          /**
           * The date of the subscriber's most recent bounce event.
           * @format date-time
           */
          bounce_date?: string | null;
          /**
           * When the subscriber cancelled their paid subscription, if applicable.
           * @format date-time
           */
          churn_date?: string | null;
          /** The ISO 3166-1 alpha-2 country code inferred at signup, if available. */
          country?: string | null;
          /** The number of distinct emails delivered to this subscriber. */
          delivered_count?: number | null;
          /** The subscriber's open count. */
          open_count?: number | null;
          /** The subscriber's clicked count. */
          clicked_count?: number | null;
          /** The subscriber's open rate, or null when unavailable. */
          open_rate?: number | null;
          /** The subscriber's click rate, or null when unavailable. */
          click_rate?: number | null;
          /** The raw Buttondown API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Buttondown tag by ID. */
    "buttondown.get_tag": {
      input: {
        /**
         * The Buttondown tag ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Buttondown tag. */
        tag: {
          /** A unique TypeID associated with the tag. */
          id: string;
          /**
           * The date and time at which the tag was first created.
           * @format date-time
           */
          creation_date: string;
          /** The name of the tag. */
          name: string;
          /** The hex color code associated with the tag. */
          color: string;
          /** An internal description of the tag. */
          description?: string | null;
          /** A public-facing description of the tag. */
          public_description?: string | null;
          /** Whether subscribers can add or remove this tag from their own profile. */
          subscriber_editable: boolean;
          /** The secondary human-readable numeric identifier for the tag. */
          secondary_id: number;
          /** The raw Buttondown API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List newsletters available to the Buttondown API key. */
    "buttondown.list_newsletters": {
      input: {
        /**
         * The 1-based page number of the paginated response.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 1000
         */
        page_size?: number;
      };
      output: {
        /** The newsletters returned for this page. */
        newsletters: Array<{
          /** A unique TypeID associated with the newsletter. */
          id: string;
          /**
           * The date and time at which the newsletter was first created.
           * @format date-time
           */
          creation_date: string;
          /** The newsletter username, when returned by Buttondown. */
          username: string;
          /** The newsletter name, when returned by Buttondown. */
          name: string;
          /** The newsletter description, when returned by Buttondown. */
          description: string | null;
          /** The raw Buttondown API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Buttondown. */
        page: {
          /** The total number of results across all pages. */
          count: number;
          /** The URL to the next page of results, or null when there is no next page. */
          next?: string | null;
          /** The URL to the previous page of results, or null when there is no previous page. */
          previous?: string | null;
        };
      };
    };
    /** List Buttondown subscribers with common filters. */
    "buttondown.list_subscribers": {
      input: {
        /**
         * The 1-based page number of the paginated response.
         * @minimum 1
         */
        page?: number;
        /**
         * Only return subscribers whose email address contains this string.
         * @minLength 1
         */
        email_address?: string;
        /** The subscriber lifecycle state returned by Buttondown. */
        type?: "regular" | "premium" | "unactivated" | "unsubscribed" | "removed";
        /**
         * Only return subscribers matching the given tag names.
         * @minItems 1
         */
        tag?: Array<string>;
        /**
         * Only return subscribers created on or after the given date.
         * @format date
         */
        date__start?: string;
        /**
         * Only return subscribers created before the given date.
         * @format date
         */
        date__end?: string;
      };
      output: {
        /** The subscribers returned for this page. */
        subscribers: Array<{
          /** A unique TypeID associated with the subscriber. */
          id: string;
          /**
           * The date and time at which the subscriber was first created.
           * @format date-time
           */
          creation_date: string;
          /**
           * The email address of the subscriber.
           * @format email
           */
          email_address: string;
          /** The subscriber lifecycle state returned by Buttondown. */
          type?: "regular" | "premium" | "unactivated" | "unsubscribed" | "removed" | null;
          /** Private notes attached to the subscriber. */
          notes?: string | null;
          /** A structured key-value blob stored on the Buttondown object. */
          metadata?: Record<string, unknown>;
          /** Tag names applied to the subscriber. */
          tags?: Array<string>;
          /** URL of the subscriber's avatar image, if available. */
          avatar_url?: string | null;
          /**
           * The date of the subscriber's most recent bounce event.
           * @format date-time
           */
          bounce_date?: string | null;
          /**
           * When the subscriber cancelled their paid subscription, if applicable.
           * @format date-time
           */
          churn_date?: string | null;
          /** The ISO 3166-1 alpha-2 country code inferred at signup, if available. */
          country?: string | null;
          /** The number of distinct emails delivered to this subscriber. */
          delivered_count?: number | null;
          /** The subscriber's open count. */
          open_count?: number | null;
          /** The subscriber's clicked count. */
          clicked_count?: number | null;
          /** The subscriber's open rate, or null when unavailable. */
          open_rate?: number | null;
          /** The subscriber's click rate, or null when unavailable. */
          click_rate?: number | null;
          /** The raw Buttondown API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Buttondown. */
        page: {
          /** The total number of results across all pages. */
          count: number;
          /** The URL to the next page of results, or null when there is no next page. */
          next?: string | null;
          /** The URL to the previous page of results, or null when there is no previous page. */
          previous?: string | null;
        };
      };
    };
    /** List Buttondown tags. */
    "buttondown.list_tags": {
      input: {
        /**
         * The 1-based page number of the paginated response.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 1000
         */
        page_size?: number;
      };
      output: {
        /** The tags returned for this page. */
        tags: Array<{
          /** A unique TypeID associated with the tag. */
          id: string;
          /**
           * The date and time at which the tag was first created.
           * @format date-time
           */
          creation_date: string;
          /** The name of the tag. */
          name: string;
          /** The hex color code associated with the tag. */
          color: string;
          /** An internal description of the tag. */
          description?: string | null;
          /** A public-facing description of the tag. */
          public_description?: string | null;
          /** Whether subscribers can add or remove this tag from their own profile. */
          subscriber_editable: boolean;
          /** The secondary human-readable numeric identifier for the tag. */
          secondary_id: number;
          /** The raw Buttondown API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Buttondown. */
        page: {
          /** The total number of results across all pages. */
          count: number;
          /** The URL to the next page of results, or null when there is no next page. */
          next?: string | null;
          /** The URL to the previous page of results, or null when there is no previous page. */
          previous?: string | null;
        };
      };
    };
    /** Update a Buttondown subscriber by ID or email address. */
    "buttondown.update_subscriber": {
      input: {
        /**
         * The Buttondown subscriber ID or email address.
         * @minLength 1
         */
        id_or_email: string;
        /** Whether this subscriber is prevented from commenting. */
        commenting_disabled?: boolean | null;
        /**
         * The updated email address of the subscriber.
         * @format email
         */
        email_address?: string | null;
        /** Updated private notes to attach to the subscriber. */
        notes?: string | null;
        /** A structured key-value blob stored on the Buttondown object. */
        metadata?: Record<string, unknown> | null;
        /** Tag names to apply to the subscriber. */
        tags?: Array<string> | null;
        /** The URL the subscriber was referred from. */
        referrer_url?: string | null;
        /** The subscriber lifecycle state returned by Buttondown. */
        type?: "regular" | "premium" | "unactivated" | "unsubscribed" | "removed" | null;
        /** Free-text reason the subscriber unsubscribed. */
        unsubscription_reason?: string | null;
      };
      output: {
        /** A Buttondown subscriber. */
        subscriber: {
          /** A unique TypeID associated with the subscriber. */
          id: string;
          /**
           * The date and time at which the subscriber was first created.
           * @format date-time
           */
          creation_date: string;
          /**
           * The email address of the subscriber.
           * @format email
           */
          email_address: string;
          /** The subscriber lifecycle state returned by Buttondown. */
          type?: "regular" | "premium" | "unactivated" | "unsubscribed" | "removed" | null;
          /** Private notes attached to the subscriber. */
          notes?: string | null;
          /** A structured key-value blob stored on the Buttondown object. */
          metadata?: Record<string, unknown>;
          /** Tag names applied to the subscriber. */
          tags?: Array<string>;
          /** URL of the subscriber's avatar image, if available. */
          avatar_url?: string | null;
          /**
           * The date of the subscriber's most recent bounce event.
           * @format date-time
           */
          bounce_date?: string | null;
          /**
           * When the subscriber cancelled their paid subscription, if applicable.
           * @format date-time
           */
          churn_date?: string | null;
          /** The ISO 3166-1 alpha-2 country code inferred at signup, if available. */
          country?: string | null;
          /** The number of distinct emails delivered to this subscriber. */
          delivered_count?: number | null;
          /** The subscriber's open count. */
          open_count?: number | null;
          /** The subscriber's clicked count. */
          clicked_count?: number | null;
          /** The subscriber's open rate, or null when unavailable. */
          open_rate?: number | null;
          /** The subscriber's click rate, or null when unavailable. */
          click_rate?: number | null;
          /** The raw Buttondown API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Buttondown tag by ID. */
    "buttondown.update_tag": {
      input: {
        /**
         * The Buttondown tag ID.
         * @minLength 1
         */
        id: string;
        /** The updated name of the tag. */
        name?: string | null;
        /** The updated hex color code associated with the tag. */
        color?: string | null;
        /** The updated internal description of the tag. */
        description?: string | null;
        /** The updated public-facing description of the tag. */
        public_description?: string | null;
        /** The updated secondary human-readable numeric identifier. */
        secondary_id?: number | null;
        /** Whether subscribers can add or remove this tag from their own profile. */
        subscriber_editable?: boolean | null;
      };
      output: {
        /** A Buttondown tag. */
        tag: {
          /** A unique TypeID associated with the tag. */
          id: string;
          /**
           * The date and time at which the tag was first created.
           * @format date-time
           */
          creation_date: string;
          /** The name of the tag. */
          name: string;
          /** The hex color code associated with the tag. */
          color: string;
          /** An internal description of the tag. */
          description?: string | null;
          /** A public-facing description of the tag. */
          public_description?: string | null;
          /** Whether subscribers can add or remove this tag from their own profile. */
          subscriber_editable: boolean;
          /** The secondary human-readable numeric identifier for the tag. */
          secondary_id: number;
          /** The raw Buttondown API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
