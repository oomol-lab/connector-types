import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an Ably app in the connected account or supplied account ID. */
    "ably_control.create_app": {
      input: {
        /**
         * The Ably account ID.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The app name.
         * @minLength 1
         */
        name: string;
        /** The app status. */
        status?: "enabled" | "disabled";
        /** Whether to enforce TLS for all connections. */
        tlsOnly?: boolean;
        /** The Firebase Cloud Messaging key. */
        fcmKey?: string | null;
        /** The Firebase Cloud Messaging service account credentials. */
        fcmServiceAccount?: string | null;
        /** The Firebase Cloud Messaging project ID. */
        fcmProjectId?: string | null;
        /** The Apple Push Notification service certificate. */
        apnsCertificate?: string | null;
        /** The Apple Push Notification service private key. */
        apnsPrivateKey?: string | null;
        /** Whether APNs uses the sandbox endpoint for this app. */
        apnsUseSandboxEndpoint?: boolean | null;
      };
      output: {
        /** A normalized Ably app. */
        app: {
          /**
           * The Ably application ID.
           * @minLength 1
           */
          id: string;
          /** The Ably account ID that owns the app. */
          accountId?: string | null;
          /** The app name. */
          name?: string | null;
          /** The app status. */
          status?: string | null;
          /** Whether TLS is enforced for this app. */
          tlsOnly?: boolean | null;
          /** Whether APNs uses the sandbox endpoint for this app. */
          apnsUseSandboxEndpoint?: boolean | null;
          /** The raw app object returned by Ably. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create an API key for an Ably app. */
    "ably_control.create_key": {
      input: {
        /**
         * The Ably application ID.
         * @minLength 1
         */
        appId: string;
        /**
         * The key name.
         * @minLength 1
         */
        name: string;
        /** Ably channel capabilities keyed by channel or resource name. */
        capability: Record<string, Array<string>>;
      };
      output: {
        /** A normalized Ably API key. */
        key: {
          /**
           * The Ably API key ID.
           * @minLength 1
           */
          id: string;
          /** The Ably app ID that owns the key. */
          appId?: string | null;
          /** The key name. */
          name?: string | null;
          /** The Ably key status code. */
          status?: number | null;
          /** The complete API key returned by Ably when available. */
          key?: string | null;
          /** Ably channel capabilities keyed by channel or resource name. */
          capability?: Record<string, Array<string>> | null;
          /** A Unix timestamp in milliseconds. */
          created?: number | null;
          /** A Unix timestamp in milliseconds. */
          modified?: number | null;
          /** The raw key object returned by Ably. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a queue for an Ably app. */
    "ably_control.create_queue": {
      input: {
        /**
         * The Ably application ID.
         * @minLength 1
         */
        appId: string;
        /**
         * The queue name.
         * @minLength 1
         */
        name: string;
        /**
         * The queue region, such as eu-west-1-a.
         * @minLength 1
         */
        region: string;
        /**
         * The message TTL in seconds.
         * @minimum 0
         */
        ttl?: number;
        /**
         * The maximum queue length.
         * @minimum 0
         */
        maxLength?: number;
      };
      output: {
        /** A normalized Ably queue. */
        queue: {
          /**
           * The Ably queue ID.
           * @minLength 1
           */
          id: string;
          /** The Ably app ID that owns the queue. */
          appId?: string | null;
          /** The queue name. */
          name?: string | null;
          /** The Ably queue region. */
          region?: string | null;
          /** The queue state. */
          state?: string | null;
          /** The queue message TTL in seconds. */
          ttl?: number | null;
          /** The maximum queue length. */
          maxLength?: number | null;
          /** Whether this queue uses dead-letter handling. */
          deadletter?: boolean | null;
          /** The raw queue object returned by Ably. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete an Ably app by app ID. */
    "ably_control.delete_app": {
      input: {
        /**
         * The Ably application ID.
         * @minLength 1
         */
        appId: string;
      };
      output: {
        /** Whether Ably accepted the delete request. */
        success: boolean;
      };
    };
    /** Delete an Ably queue by queue ID. */
    "ably_control.delete_queue": {
      input: {
        /**
         * The Ably application ID.
         * @minLength 1
         */
        appId: string;
        /**
         * The Ably queue ID.
         * @minLength 1
         */
        queueId: string;
      };
      output: {
        /** Whether Ably accepted the delete request. */
        success: boolean;
      };
    };
    /** Retrieve account-level Ably statistics for the connected account or account ID. */
    "ably_control.get_account_stats": {
      input: {
        /**
         * The Ably account ID.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The Ably application ID.
         * @minLength 1
         */
        appId?: string;
        /** A Unix timestamp in milliseconds. */
        start?: number;
        /** A Unix timestamp in milliseconds. */
        end?: number;
        /**
         * The maximum number of statistics records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** The statistics aggregation unit. */
        unit?: "minute" | "hour" | "day" | "month";
        /** The pagination direction. */
        direction?: "backwards" | "forwards";
      };
      output: {
        /** Statistics records returned by Ably. */
        stats: Array<{
          /** The Ably statistics interval identifier. */
          intervalId?: string;
          /** The statistics aggregation unit. */
          unit?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve app-level Ably statistics for an Ably app. */
    "ably_control.get_app_stats": {
      input: {
        /**
         * The Ably account ID.
         * @minLength 1
         */
        accountId?: string;
        /**
         * The Ably application ID.
         * @minLength 1
         */
        appId?: string;
        /** A Unix timestamp in milliseconds. */
        start?: number;
        /** A Unix timestamp in milliseconds. */
        end?: number;
        /**
         * The maximum number of statistics records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** The statistics aggregation unit. */
        unit?: "minute" | "hour" | "day" | "month";
        /** The pagination direction. */
        direction?: "backwards" | "forwards";
      };
      output: {
        /** Statistics records returned by Ably. */
        stats: Array<{
          /** The Ably statistics interval identifier. */
          intervalId?: string;
          /** The statistics aggregation unit. */
          unit?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve the Ably Control API token, user, and account associated with the access token. */
    "ably_control.get_current_account": {
      input: Record<string, never>;
      output: {
        /** The normalized Ably Control API identity response. */
        me: {
          /** The Control API access token details. */
          token: {
            /** The token ID returned by Ably. */
            id?: string | number;
            /** The token friendly name. */
            name?: string;
            /** The token capabilities. */
            capabilities?: Array<string>;
            [key: string]: unknown;
          };
          /** The Ably user associated with the token. */
          user: {
            /** The user ID returned by Ably. */
            id?: string | number;
            /** The user email address. */
            email?: string;
            [key: string]: unknown;
          };
          /** The Ably account associated with the token. */
          account: {
            /**
             * The Ably account ID.
             * @minLength 1
             */
            id: string;
            /** The account name. */
            name: string;
          };
        };
      };
    };
    /** List Ably apps in the connected account or supplied account ID. */
    "ably_control.list_apps": {
      input: {
        /**
         * The Ably account ID.
         * @minLength 1
         */
        accountId?: string;
      };
      output: {
        /** Apps returned by Ably. */
        apps: Array<{
          /**
           * The Ably application ID.
           * @minLength 1
           */
          id: string;
          /** The Ably account ID that owns the app. */
          accountId?: string | null;
          /** The app name. */
          name?: string | null;
          /** The app status. */
          status?: string | null;
          /** Whether TLS is enforced for this app. */
          tlsOnly?: boolean | null;
          /** Whether APNs uses the sandbox endpoint for this app. */
          apnsUseSandboxEndpoint?: boolean | null;
          /** The raw app object returned by Ably. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List API keys for an Ably app. */
    "ably_control.list_keys": {
      input: {
        /**
         * The Ably application ID.
         * @minLength 1
         */
        appId: string;
      };
      output: {
        /** API keys returned by Ably. */
        keys: Array<{
          /**
           * The Ably API key ID.
           * @minLength 1
           */
          id: string;
          /** The Ably app ID that owns the key. */
          appId?: string | null;
          /** The key name. */
          name?: string | null;
          /** The Ably key status code. */
          status?: number | null;
          /** The complete API key returned by Ably when available. */
          key?: string | null;
          /** Ably channel capabilities keyed by channel or resource name. */
          capability?: Record<string, Array<string>> | null;
          /** A Unix timestamp in milliseconds. */
          created?: number | null;
          /** A Unix timestamp in milliseconds. */
          modified?: number | null;
          /** The raw key object returned by Ably. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List queues for an Ably app. */
    "ably_control.list_queues": {
      input: {
        /**
         * The Ably application ID.
         * @minLength 1
         */
        appId: string;
      };
      output: {
        /** Queues returned by Ably. */
        queues: Array<{
          /**
           * The Ably queue ID.
           * @minLength 1
           */
          id: string;
          /** The Ably app ID that owns the queue. */
          appId?: string | null;
          /** The queue name. */
          name?: string | null;
          /** The Ably queue region. */
          region?: string | null;
          /** The queue state. */
          state?: string | null;
          /** The queue message TTL in seconds. */
          ttl?: number | null;
          /** The maximum queue length. */
          maxLength?: number | null;
          /** Whether this queue uses dead-letter handling. */
          deadletter?: boolean | null;
          /** The raw queue object returned by Ably. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Revoke an Ably API key by key ID. */
    "ably_control.revoke_key": {
      input: {
        /**
         * The Ably application ID.
         * @minLength 1
         */
        appId: string;
        /**
         * The Ably API key ID.
         * @minLength 1
         */
        keyId: string;
      };
      output: {
        /** Whether Ably accepted the revoke request. */
        success: boolean;
      };
    };
    /** Update editable settings for an Ably app. */
    "ably_control.update_app": {
      input: {
        /**
         * The Ably application ID.
         * @minLength 1
         */
        appId: string;
        /**
         * The app name.
         * @minLength 1
         */
        name?: string;
        /** The app status. */
        status?: "enabled" | "disabled";
        /** Whether to enforce TLS for all connections. */
        tlsOnly?: boolean;
        /** The Firebase Cloud Messaging key. */
        fcmKey?: string | null;
        /** The Firebase Cloud Messaging service account credentials. */
        fcmServiceAccount?: string | null;
        /** The Firebase Cloud Messaging project ID. */
        fcmProjectId?: string | null;
        /** The Apple Push Notification service certificate. */
        apnsCertificate?: string | null;
        /** The Apple Push Notification service private key. */
        apnsPrivateKey?: string | null;
        /** Whether APNs uses the sandbox endpoint for this app. */
        apnsUseSandboxEndpoint?: boolean | null;
      };
      output: {
        /** A normalized Ably app. */
        app: {
          /**
           * The Ably application ID.
           * @minLength 1
           */
          id: string;
          /** The Ably account ID that owns the app. */
          accountId?: string | null;
          /** The app name. */
          name?: string | null;
          /** The app status. */
          status?: string | null;
          /** Whether TLS is enforced for this app. */
          tlsOnly?: boolean | null;
          /** Whether APNs uses the sandbox endpoint for this app. */
          apnsUseSandboxEndpoint?: boolean | null;
          /** The raw app object returned by Ably. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update an Ably API key name or capability. */
    "ably_control.update_key": {
      input: {
        /**
         * The Ably application ID.
         * @minLength 1
         */
        appId: string;
        /**
         * The Ably API key ID.
         * @minLength 1
         */
        keyId: string;
        /**
         * The key name.
         * @minLength 1
         */
        name?: string;
        /** Ably channel capabilities keyed by channel or resource name. */
        capability?: Record<string, Array<string>>;
      };
      output: {
        /** A normalized Ably API key. */
        key: {
          /**
           * The Ably API key ID.
           * @minLength 1
           */
          id: string;
          /** The Ably app ID that owns the key. */
          appId?: string | null;
          /** The key name. */
          name?: string | null;
          /** The Ably key status code. */
          status?: number | null;
          /** The complete API key returned by Ably when available. */
          key?: string | null;
          /** Ably channel capabilities keyed by channel or resource name. */
          capability?: Record<string, Array<string>> | null;
          /** A Unix timestamp in milliseconds. */
          created?: number | null;
          /** A Unix timestamp in milliseconds. */
          modified?: number | null;
          /** The raw key object returned by Ably. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
