import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Svix application. */
    "svix.create_application": {
      input: {
        /**
         * Svix application name.
         * @minLength 1
         */
        name: string;
        /**
         * Optional Svix application UID.
         * @minLength 1
         */
        uid?: string;
        /** String metadata accepted by the official Svix API. */
        metadata?: Record<string, string>;
        /**
         * Maximum messages per second to send to this Svix application.
         * @minimum 0
         * @maximum 65535
         */
        throttleRate?: number;
      };
      output: {
        /** Svix application returned after creation. */
        application: {
          /**
           * The Svix application identifier.
           * @minLength 1
           */
          id: string;
          /** The Svix application UID when present. */
          uid?: string;
          /**
           * The Svix application name.
           * @minLength 1
           */
          name: string;
          /** String metadata attached to the Svix application. */
          metadata: Record<string, string>;
          /**
           * The throttle rate returned by Svix for the application.
           * @minimum 0
           */
          throttleRate?: number;
          /**
           * ISO 8601 timestamp when the application was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * ISO 8601 timestamp when the application was last updated.
           * @format date-time
           */
          updatedAt: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a new endpoint for a Svix application. */
    "svix.create_endpoint": {
      input: {
        /**
         * Svix application ID or UID.
         * @minLength 1
         */
        app_id_or_uid: string;
        /**
         * Public endpoint URL that should receive Svix webhooks.
         * @format uri
         */
        url: string;
        /**
         * Optional Svix endpoint UID.
         * @minLength 1
         */
        uid?: string;
        /** Human-readable Svix endpoint description. */
        description?: string;
        /** Whether to create the endpoint in disabled state. */
        disabled?: boolean;
        /**
         * Message channels this endpoint should subscribe to.
         * @minItems 1
         */
        channels?: Array<string>;
        /**
         * Event types this endpoint should subscribe to.
         * @minItems 1
         */
        filterTypes?: Array<string>;
        /** Custom headers accepted by the official Svix endpoint create endpoint. */
        headers?: Record<string, string>;
        /** String metadata accepted by the official Svix API. */
        metadata?: Record<string, string>;
        /**
         * Optional Svix endpoint signing secret to set during creation.
         * @minLength 1
         */
        secret?: string;
        /**
         * Maximum messages per second to send to this Svix endpoint.
         * @minimum 0
         * @maximum 65535
         */
        throttleRate?: number;
      };
      output: {
        /** Svix endpoint returned after creation. */
        endpoint: {
          /**
           * The Svix endpoint identifier.
           * @minLength 1
           */
          id: string;
          /** The Svix endpoint UID when present. */
          uid?: string;
          /**
           * The endpoint URL returned by Svix.
           * @minLength 1
           */
          url: string;
          /** The endpoint description returned by Svix. */
          description: string;
          /** Whether the endpoint is disabled. */
          disabled?: boolean;
          /** Endpoint channel filters returned by Svix. */
          channels?: Array<string>;
          /** Endpoint event-type filters returned by Svix. */
          filterTypes?: Array<string>;
          /** String metadata attached to the endpoint. */
          metadata: Record<string, string>;
          /**
           * The endpoint throttle rate returned by Svix.
           * @minimum 0
           */
          throttleRate?: number;
          /**
           * The endpoint version returned by Svix.
           * @minimum 1
           */
          version: number;
          /**
           * ISO 8601 timestamp when the endpoint was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * ISO 8601 timestamp when the endpoint was last updated.
           * @format date-time
           */
          updatedAt: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create or unarchive a Svix event type. */
    "svix.create_event_type": {
      input: {
        /**
         * Unique Svix event type identifier.
         * @minLength 1
         */
        name: string;
        /**
         * Human-readable Svix event type description.
         * @minLength 1
         */
        description: string;
        /** Whether to create or unarchive the Svix event type in archived state. */
        archived?: boolean;
        /**
         * Optional Svix event type group name.
         * @minLength 1
         */
        groupName?: string;
        /**
         * Deprecated single feature-flag field accepted by the official Svix API.
         * @minLength 1
         */
        featureFlag?: string;
        /**
         * Feature flags accepted by the official Svix event-type API.
         * @minItems 1
         */
        featureFlags?: Array<string>;
        /** Version-keyed JSON Schema definitions accepted by the official Svix event-type API. */
        schemas?: Record<string, Record<string, unknown>>;
      };
      output: {
        /** Svix event type returned after creation. */
        eventType: {
          /**
           * The Svix event type name.
           * @minLength 1
           */
          name: string;
          /**
           * The Svix event type description.
           * @minLength 1
           */
          description: string;
          /** Whether the Svix event type is archived. */
          archived?: boolean;
          /** Whether the Svix event type is deprecated. */
          deprecated: boolean;
          /** The Svix event type group name when present. */
          groupName?: string;
          /** The deprecated Svix feature flag field when present. */
          featureFlag?: string;
          /** Feature flags attached to the Svix event type when present. */
          featureFlags?: Array<string>;
          /** Version-keyed JSON Schema definitions returned by Svix when requested. */
          schemas?: Record<string, Record<string, unknown>>;
          /**
           * ISO 8601 timestamp when the event type was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * ISO 8601 timestamp when the event type was last updated.
           * @format date-time
           */
          updatedAt: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create and dispatch a Svix message to an application's endpoints. */
    "svix.create_message": {
      input: {
        /**
         * Svix application ID or UID.
         * @minLength 1
         */
        app_id_or_uid: string;
        /**
         * Svix event type name to dispatch.
         * @minLength 1
         */
        eventType: string;
        /** JSON payload to deliver with the Svix message. */
        payload: Record<string, unknown>;
        /**
         * Message channels accepted by the official Svix API.
         * @minItems 1
         */
        channels?: Array<string>;
        /**
         * Scheduled delivery timestamp accepted by the official Svix API.
         * @format date-time
         */
        deliverAt?: string;
        /**
         * Optional event ID used for Svix deduplication.
         * @minLength 1
         */
        eventId?: string;
        /**
         * Optional payload retention window in hours.
         * @minimum 1
         * @maximum 2160
         */
        payloadRetentionHours?: number;
        /**
         * Optional payload retention window in days.
         * @minimum 1
         * @maximum 90
         */
        payloadRetentionPeriod?: number;
        /**
         * Message tags accepted by the official Svix API.
         * @minItems 1
         */
        tags?: Array<string>;
        /** Whether to include the message payload in the Svix create response. */
        with_content?: boolean;
      };
      output: {
        /** Svix message returned after creation. */
        message: {
          /**
           * The Svix message identifier.
           * @minLength 1
           */
          id: string;
          /** The Svix message event ID when present. */
          eventId?: string;
          /**
           * The Svix message event type.
           * @minLength 1
           */
          eventType: string;
          /** The Svix message payload when content is included in the response. */
          payload?: Record<string, unknown>;
          /** Message channels returned by Svix. */
          channels?: Array<string>;
          /** Message tags returned by Svix. */
          tags?: Array<string>;
          /**
           * Scheduled delivery timestamp returned by Svix when present.
           * @format date-time
           */
          deliverAt?: string;
          /**
           * ISO 8601 timestamp when the message was created.
           * @format date-time
           */
          timestamp: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Svix application by ID or UID. */
    "svix.delete_application": {
      input: {
        /**
         * Svix application ID or UID.
         * @minLength 1
         */
        app_id_or_uid: string;
      };
      output: {
        /** Whether Svix accepted the application delete request. */
        success: boolean;
      };
    };
    /** Delete a Svix endpoint by application and endpoint identifier. */
    "svix.delete_endpoint": {
      input: {
        /**
         * Svix application ID or UID.
         * @minLength 1
         */
        app_id_or_uid: string;
        /**
         * Svix endpoint ID or UID.
         * @minLength 1
         */
        endpoint_id_or_uid: string;
      };
      output: {
        /** Whether Svix accepted the endpoint delete request. */
        success: boolean;
      };
    };
    /** Fetch one Svix application by ID or UID. */
    "svix.get_application": {
      input: {
        /**
         * Svix application ID or UID.
         * @minLength 1
         */
        app_id_or_uid: string;
      };
      output: {
        /** Svix application returned by the official API. */
        application: {
          /**
           * The Svix application identifier.
           * @minLength 1
           */
          id: string;
          /** The Svix application UID when present. */
          uid?: string;
          /**
           * The Svix application name.
           * @minLength 1
           */
          name: string;
          /** String metadata attached to the Svix application. */
          metadata: Record<string, string>;
          /**
           * The throttle rate returned by Svix for the application.
           * @minimum 0
           */
          throttleRate?: number;
          /**
           * ISO 8601 timestamp when the application was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * ISO 8601 timestamp when the application was last updated.
           * @format date-time
           */
          updatedAt: string;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch one Svix endpoint by application and endpoint identifier. */
    "svix.get_endpoint": {
      input: {
        /**
         * Svix application ID or UID.
         * @minLength 1
         */
        app_id_or_uid: string;
        /**
         * Svix endpoint ID or UID.
         * @minLength 1
         */
        endpoint_id_or_uid: string;
      };
      output: {
        /** Svix endpoint returned by the official API. */
        endpoint: {
          /**
           * The Svix endpoint identifier.
           * @minLength 1
           */
          id: string;
          /** The Svix endpoint UID when present. */
          uid?: string;
          /**
           * The endpoint URL returned by Svix.
           * @minLength 1
           */
          url: string;
          /** The endpoint description returned by Svix. */
          description: string;
          /** Whether the endpoint is disabled. */
          disabled?: boolean;
          /** Endpoint channel filters returned by Svix. */
          channels?: Array<string>;
          /** Endpoint event-type filters returned by Svix. */
          filterTypes?: Array<string>;
          /** String metadata attached to the endpoint. */
          metadata: Record<string, string>;
          /**
           * The endpoint throttle rate returned by Svix.
           * @minimum 0
           */
          throttleRate?: number;
          /**
           * The endpoint version returned by Svix.
           * @minimum 1
           */
          version: number;
          /**
           * ISO 8601 timestamp when the endpoint was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * ISO 8601 timestamp when the endpoint was last updated.
           * @format date-time
           */
          updatedAt: string;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch one Svix event type by name. */
    "svix.get_event_type": {
      input: {
        /**
         * Svix event type name.
         * @minLength 1
         */
        event_type_name: string;
        /** Whether to include full event-type schema content in the Svix response. */
        with_content?: boolean;
      };
      output: {
        /** Svix event type returned by the official API. */
        eventType: {
          /**
           * The Svix event type name.
           * @minLength 1
           */
          name: string;
          /**
           * The Svix event type description.
           * @minLength 1
           */
          description: string;
          /** Whether the Svix event type is archived. */
          archived?: boolean;
          /** Whether the Svix event type is deprecated. */
          deprecated: boolean;
          /** The Svix event type group name when present. */
          groupName?: string;
          /** The deprecated Svix feature flag field when present. */
          featureFlag?: string;
          /** Feature flags attached to the Svix event type when present. */
          featureFlags?: Array<string>;
          /** Version-keyed JSON Schema definitions returned by Svix when requested. */
          schemas?: Record<string, Record<string, unknown>>;
          /**
           * ISO 8601 timestamp when the event type was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * ISO 8601 timestamp when the event type was last updated.
           * @format date-time
           */
          updatedAt: string;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch one Svix message by application and message identifier. */
    "svix.get_message": {
      input: {
        /**
         * Svix application ID or UID.
         * @minLength 1
         */
        app_id_or_uid: string;
        /**
         * Svix message ID or event ID.
         * @minLength 1
         */
        message_id_or_uid: string;
        /** Whether to include the message payload in the Svix response. */
        with_content?: boolean;
      };
      output: {
        /** Svix message returned by the official API. */
        message: {
          /**
           * The Svix message identifier.
           * @minLength 1
           */
          id: string;
          /** The Svix message event ID when present. */
          eventId?: string;
          /**
           * The Svix message event type.
           * @minLength 1
           */
          eventType: string;
          /** The Svix message payload when content is included in the response. */
          payload?: Record<string, unknown>;
          /** Message channels returned by Svix. */
          channels?: Array<string>;
          /** Message tags returned by Svix. */
          tags?: Array<string>;
          /**
           * Scheduled delivery timestamp returned by Svix when present.
           * @format date-time
           */
          deliverAt?: string;
          /**
           * ISO 8601 timestamp when the message was created.
           * @format date-time
           */
          timestamp: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Svix applications for the current account. */
    "svix.list_applications": {
      input: {
        /** Whether to exclude applications without endpoints from the Svix response. */
        exclude_apps_with_no_endpoints?: boolean;
        /** Whether to exclude applications that only have disabled endpoints. */
        exclude_apps_with_disabled_endpoints?: boolean;
        /** Whether to exclude applications that only have Svix Play endpoints. */
        exclude_apps_with_svix_play_endpoints?: boolean;
        /**
         * Maximum number of Svix applications to return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * Iterator returned by a previous Svix application list response.
         * @minLength 1
         */
        iterator?: string;
        /** Sort order accepted by the official Svix list endpoints. */
        order?: "ascending" | "descending";
      };
      output: {
        /** Svix applications returned for the current page. */
        applications: Array<{
          /**
           * The Svix application identifier.
           * @minLength 1
           */
          id: string;
          /** The Svix application UID when present. */
          uid?: string;
          /**
           * The Svix application name.
           * @minLength 1
           */
          name: string;
          /** String metadata attached to the Svix application. */
          metadata: Record<string, string>;
          /**
           * The throttle rate returned by Svix for the application.
           * @minimum 0
           */
          throttleRate?: number;
          /**
           * ISO 8601 timestamp when the application was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * ISO 8601 timestamp when the application was last updated.
           * @format date-time
           */
          updatedAt: string;
          [key: string]: unknown;
        }>;
        /** Whether the current Svix list page is complete. */
        done: boolean;
        /** The iterator returned by Svix for the next page, or null when finished. */
        iterator: string | null;
        /** The iterator returned by Svix for the previous page when present. */
        prevIterator?: string | null;
      };
    };
    /** List endpoints attached to a Svix application. */
    "svix.list_endpoints": {
      input: {
        /**
         * Svix application ID or UID.
         * @minLength 1
         */
        app_id_or_uid: string;
        /**
         * Maximum number of Svix endpoints to return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * Iterator returned by a previous Svix endpoint list response.
         * @minLength 1
         */
        iterator?: string;
        /** Sort order accepted by the official Svix list endpoints. */
        order?: "ascending" | "descending";
      };
      output: {
        /** Svix endpoints returned for the current page. */
        endpoints: Array<{
          /**
           * The Svix endpoint identifier.
           * @minLength 1
           */
          id: string;
          /** The Svix endpoint UID when present. */
          uid?: string;
          /**
           * The endpoint URL returned by Svix.
           * @minLength 1
           */
          url: string;
          /** The endpoint description returned by Svix. */
          description: string;
          /** Whether the endpoint is disabled. */
          disabled?: boolean;
          /** Endpoint channel filters returned by Svix. */
          channels?: Array<string>;
          /** Endpoint event-type filters returned by Svix. */
          filterTypes?: Array<string>;
          /** String metadata attached to the endpoint. */
          metadata: Record<string, string>;
          /**
           * The endpoint throttle rate returned by Svix.
           * @minimum 0
           */
          throttleRate?: number;
          /**
           * The endpoint version returned by Svix.
           * @minimum 1
           */
          version: number;
          /**
           * ISO 8601 timestamp when the endpoint was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * ISO 8601 timestamp when the endpoint was last updated.
           * @format date-time
           */
          updatedAt: string;
          [key: string]: unknown;
        }>;
        /** Whether the current Svix list page is complete. */
        done: boolean;
        /** The iterator returned by Svix for the next page, or null when finished. */
        iterator: string | null;
        /** The iterator returned by Svix for the previous page when present. */
        prevIterator?: string | null;
      };
    };
    /** List event types available to the current Svix account. */
    "svix.list_event_types": {
      input: {
        /**
         * Maximum number of Svix event types to return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * Iterator returned by a previous Svix event-type list response.
         * @minLength 1
         */
        iterator?: string;
        /** Sort order accepted by the official Svix list endpoints. */
        order?: "ascending" | "descending";
        /** Whether to include archived event types in the Svix response. */
        include_archived?: boolean;
        /** Whether to include full event-type schema content in the Svix response. */
        with_content?: boolean;
      };
      output: {
        /** Svix event types returned for the current page. */
        eventTypes: Array<{
          /**
           * The Svix event type name.
           * @minLength 1
           */
          name: string;
          /**
           * The Svix event type description.
           * @minLength 1
           */
          description: string;
          /** Whether the Svix event type is archived. */
          archived?: boolean;
          /** Whether the Svix event type is deprecated. */
          deprecated: boolean;
          /** The Svix event type group name when present. */
          groupName?: string;
          /** The deprecated Svix feature flag field when present. */
          featureFlag?: string;
          /** Feature flags attached to the Svix event type when present. */
          featureFlags?: Array<string>;
          /** Version-keyed JSON Schema definitions returned by Svix when requested. */
          schemas?: Record<string, Record<string, unknown>>;
          /**
           * ISO 8601 timestamp when the event type was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * ISO 8601 timestamp when the event type was last updated.
           * @format date-time
           */
          updatedAt: string;
          [key: string]: unknown;
        }>;
        /** Whether the current Svix list page is complete. */
        done: boolean;
        /** The iterator returned by Svix for the next page, or null when finished. */
        iterator: string | null;
        /** The iterator returned by Svix for the previous page when present. */
        prevIterator?: string | null;
      };
    };
    /** List messages that belong to a Svix application. */
    "svix.list_messages": {
      input: {
        /**
         * Svix application ID or UID.
         * @minLength 1
         */
        app_id_or_uid: string;
        /**
         * Maximum number of Svix messages to return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * Iterator returned by a previous Svix message list response.
         * @minLength 1
         */
        iterator?: string;
        /**
         * Channel filter accepted by Svix.
         * @minLength 1
         */
        channel?: string;
        /**
         * Only include Svix messages created before this timestamp.
         * @format date-time
         */
        before?: string;
        /**
         * Only include Svix messages created after this timestamp.
         * @format date-time
         */
        after?: string;
        /** Whether to include message payloads in the Svix response. */
        with_content?: boolean;
        /**
         * Message tag filter accepted by Svix.
         * @minLength 1
         */
        tag?: string;
        /**
         * Event types accepted by the official Svix message list endpoint.
         * @minItems 1
         */
        event_types?: Array<string>;
      };
      output: {
        /** Svix messages returned for the current page. */
        messages: Array<{
          /**
           * The Svix message identifier.
           * @minLength 1
           */
          id: string;
          /** The Svix message event ID when present. */
          eventId?: string;
          /**
           * The Svix message event type.
           * @minLength 1
           */
          eventType: string;
          /** The Svix message payload when content is included in the response. */
          payload?: Record<string, unknown>;
          /** Message channels returned by Svix. */
          channels?: Array<string>;
          /** Message tags returned by Svix. */
          tags?: Array<string>;
          /**
           * Scheduled delivery timestamp returned by Svix when present.
           * @format date-time
           */
          deliverAt?: string;
          /**
           * ISO 8601 timestamp when the message was created.
           * @format date-time
           */
          timestamp: string;
          [key: string]: unknown;
        }>;
        /** Whether the current Svix list page is complete. */
        done: boolean;
        /** The iterator returned by Svix for the next page, or null when finished. */
        iterator: string | null;
        /** The iterator returned by Svix for the previous page when present. */
        prevIterator?: string | null;
      };
    };
    /** Partially update a Svix application by ID or UID. */
    "svix.update_application": {
      input: {
        /**
         * Svix application ID or UID.
         * @minLength 1
         */
        app_id_or_uid: string;
        /**
         * New Svix application name.
         * @minLength 1
         */
        name?: string;
        /**
         * New Svix application UID.
         * @minLength 1
         */
        uid?: string;
        /** String metadata accepted by the official Svix API. */
        metadata?: Record<string, string>;
        /**
         * New maximum messages per second to send to this Svix application.
         * @minimum 0
         * @maximum 65535
         */
        throttleRate?: number;
      };
      output: {
        /** Svix application returned after update. */
        application: {
          /**
           * The Svix application identifier.
           * @minLength 1
           */
          id: string;
          /** The Svix application UID when present. */
          uid?: string;
          /**
           * The Svix application name.
           * @minLength 1
           */
          name: string;
          /** String metadata attached to the Svix application. */
          metadata: Record<string, string>;
          /**
           * The throttle rate returned by Svix for the application.
           * @minimum 0
           */
          throttleRate?: number;
          /**
           * ISO 8601 timestamp when the application was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * ISO 8601 timestamp when the application was last updated.
           * @format date-time
           */
          updatedAt: string;
          [key: string]: unknown;
        };
      };
    };
    /** Partially update an existing Svix endpoint. */
    "svix.update_endpoint": {
      input: {
        /**
         * Svix application ID or UID.
         * @minLength 1
         */
        app_id_or_uid: string;
        /**
         * Svix endpoint ID or UID.
         * @minLength 1
         */
        endpoint_id_or_uid: string;
        /**
         * New endpoint URL.
         * @format uri
         */
        url?: string;
        /**
         * New Svix endpoint UID.
         * @minLength 1
         */
        uid?: string;
        /** New human-readable Svix endpoint description. */
        description?: string;
        /** Whether to disable the Svix endpoint. */
        disabled?: boolean;
        /**
         * Updated message channels for the Svix endpoint.
         * @minItems 1
         */
        channels?: Array<string>;
        /**
         * Updated event-type filters for the Svix endpoint.
         * @minItems 1
         */
        filterTypes?: Array<string>;
        /** String metadata accepted by the official Svix API. */
        metadata?: Record<string, string>;
        /**
         * New maximum messages per second to send to this Svix endpoint.
         * @minimum 0
         * @maximum 65535
         */
        throttleRate?: number;
      };
      output: {
        /** Svix endpoint returned after update. */
        endpoint: {
          /**
           * The Svix endpoint identifier.
           * @minLength 1
           */
          id: string;
          /** The Svix endpoint UID when present. */
          uid?: string;
          /**
           * The endpoint URL returned by Svix.
           * @minLength 1
           */
          url: string;
          /** The endpoint description returned by Svix. */
          description: string;
          /** Whether the endpoint is disabled. */
          disabled?: boolean;
          /** Endpoint channel filters returned by Svix. */
          channels?: Array<string>;
          /** Endpoint event-type filters returned by Svix. */
          filterTypes?: Array<string>;
          /** String metadata attached to the endpoint. */
          metadata: Record<string, string>;
          /**
           * The endpoint throttle rate returned by Svix.
           * @minimum 0
           */
          throttleRate?: number;
          /**
           * The endpoint version returned by Svix.
           * @minimum 1
           */
          version: number;
          /**
           * ISO 8601 timestamp when the endpoint was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * ISO 8601 timestamp when the endpoint was last updated.
           * @format date-time
           */
          updatedAt: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
