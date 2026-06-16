import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Klaviyo event for a profile using a metric name and JSON event properties. */
    "klaviyo.create_event": {
      input: {
        /**
         * The metric name to track, such as Viewed Product.
         * @minLength 1
         */
        metricName: string;
        /** Profile identifiers for finding or creating the event profile. */
        profile: {
          /**
           * The Klaviyo profile ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The profile email address.
           * @format email
           */
          email?: string;
          /**
           * The profile phone number in E.164 format when available.
           * @minLength 1
           */
          phoneNumber?: string;
          /**
           * An external identifier associated with the profile.
           * @minLength 1
           */
          externalId?: string;
          /**
           * The anonymous profile identifier.
           * @minLength 1
           */
          anonymousId?: string;
        };
        /** Arbitrary event or profile properties forwarded to Klaviyo. */
        properties?: Record<string, unknown>;
        /**
         * The event time as an ISO 8601 timestamp.
         * @format date-time
         */
        time?: string;
        /** The monetary value associated with the event. */
        value?: number;
        /**
         * A unique event ID used by Klaviyo for de-duplication.
         * @minLength 1
         */
        uniqueId?: string;
      };
      output: {
        /** Whether Klaviyo accepted the event creation request. */
        accepted: boolean;
      };
    };
    /** Get one Klaviyo campaign by campaign ID. */
    "klaviyo.get_campaign": {
      input: {
        /**
         * The Klaviyo campaign ID.
         * @minLength 1
         */
        campaignId: string;
      };
      output: {
        /** A raw Klaviyo JSON:API resource object. */
        campaign: Record<string, unknown> | null;
        /** The raw Klaviyo JSON:API response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Get one Klaviyo profile by profile ID. */
    "klaviyo.get_profile": {
      input: {
        /**
         * The Klaviyo profile ID.
         * @minLength 1
         */
        profileId: string;
      };
      output: {
        /** A raw Klaviyo JSON:API resource object. */
        profile: Record<string, unknown> | null;
        /** The raw Klaviyo JSON:API response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** List Klaviyo campaigns with the required channel filter plus optional sorting and cursor pagination. */
    "klaviyo.list_campaigns": {
      input: {
        /** The campaign message channel to list. */
        channel: "email" | "sms" | "mobile_push";
        /**
         * Additional Klaviyo campaign filter expression appended to the required channel filter.
         * @minLength 1
         */
        filter?: string;
        /**
         * A Klaviyo sort expression for campaigns.
         * @minLength 1
         */
        sort?: string;
        /**
         * The maximum number of campaigns to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The Klaviyo page cursor from a previous campaign response.
         * @minLength 1
         */
        pageCursor?: string;
      };
      output: {
        /** Klaviyo campaign resources. */
        data: Array<Record<string, unknown>>;
        /** Raw Klaviyo pagination or resource links. */
        links?: Record<string, unknown> | null;
        /** Raw Klaviyo response metadata. */
        meta?: Record<string, unknown> | null;
        /** The raw Klaviyo JSON:API response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** List Klaviyo events with optional filtering, sorting, and cursor pagination. */
    "klaviyo.list_events": {
      input: {
        /**
         * A Klaviyo filter expression, such as equals(email,"ada@example.com").
         * @minLength 1
         */
        filter?: string;
        /**
         * A Klaviyo sort expression, such as -created or updated.
         * @minLength 1
         */
        sort?: string;
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The Klaviyo page cursor from a previous response.
         * @minLength 1
         */
        pageCursor?: string;
      };
      output: {
        /** Klaviyo event resources. */
        data: Array<Record<string, unknown>>;
        /** Raw Klaviyo pagination or resource links. */
        links?: Record<string, unknown> | null;
        /** Raw Klaviyo response metadata. */
        meta?: Record<string, unknown> | null;
        /** The raw Klaviyo JSON:API response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** List Klaviyo profiles with optional filtering, sorting, and cursor pagination. */
    "klaviyo.list_profiles": {
      input: {
        /**
         * A Klaviyo filter expression, such as equals(email,"ada@example.com").
         * @minLength 1
         */
        filter?: string;
        /**
         * A Klaviyo sort expression, such as -created or updated.
         * @minLength 1
         */
        sort?: string;
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The Klaviyo page cursor from a previous response.
         * @minLength 1
         */
        pageCursor?: string;
      };
      output: {
        /** Klaviyo profile resources. */
        data: Array<Record<string, unknown>>;
        /** Raw Klaviyo pagination or resource links. */
        links?: Record<string, unknown> | null;
        /** Raw Klaviyo response metadata. */
        meta?: Record<string, unknown> | null;
        /** The raw Klaviyo JSON:API response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Validate a Klaviyo private API key by reading account metadata. */
    "klaviyo.validate_account": {
      input: Record<string, never>;
      output: {
        /** A raw Klaviyo JSON:API resource object. */
        account: Record<string, unknown> | null;
        /** The raw Klaviyo JSON:API response payload. */
        raw?: Record<string, unknown>;
      };
    };
  }
}
