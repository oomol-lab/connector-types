import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Acknowledge an Opsgenie alert and return the asynchronous request ID. */
    "opsgenie.acknowledge_alert": {
      input: {
        /**
         * Opsgenie alert identifier.
         * @minLength 1
         */
        identifier: string;
        /** Type of Opsgenie alert identifier. */
        identifierType?: "id" | "tiny" | "alias";
        /**
         * Display name of the request owner.
         * @minLength 1
         * @maxLength 100
         */
        user?: string;
        /**
         * Display name of the request source.
         * @minLength 1
         * @maxLength 100
         */
        source?: string;
        /**
         * Additional alert note.
         * @minLength 1
         * @maxLength 25000
         */
        note?: string;
      };
      output: {
        /** Opsgenie request acceptance message. */
        result: string;
        /** Time Opsgenie spent accepting the request. */
        took: number;
        /** Opsgenie request ID for polling request status. */
        requestId: string;
      };
    };
    /** Close an Opsgenie alert and return the asynchronous request ID. */
    "opsgenie.close_alert": {
      input: {
        /**
         * Opsgenie alert identifier.
         * @minLength 1
         */
        identifier: string;
        /** Type of Opsgenie alert identifier. */
        identifierType?: "id" | "tiny" | "alias";
        /**
         * Display name of the request owner.
         * @minLength 1
         * @maxLength 100
         */
        user?: string;
        /**
         * Display name of the request source.
         * @minLength 1
         * @maxLength 100
         */
        source?: string;
        /**
         * Additional alert note.
         * @minLength 1
         * @maxLength 25000
         */
        note?: string;
      };
      output: {
        /** Opsgenie request acceptance message. */
        result: string;
        /** Time Opsgenie spent accepting the request. */
        took: number;
        /** Opsgenie request ID for polling request status. */
        requestId: string;
      };
    };
    /** Create an Opsgenie alert and return the asynchronous request ID. */
    "opsgenie.create_alert": {
      input: {
        /**
         * Message of the alert.
         * @minLength 1
         * @maxLength 130
         */
        message: string;
        /**
         * Client-defined identifier for alert de-duplication.
         * @minLength 1
         * @maxLength 512
         */
        alias?: string;
        /**
         * Detailed alert description.
         * @minLength 1
         * @maxLength 15000
         */
        description?: string;
        /**
         * Teams, users, escalations, or schedules to notify.
         * @minItems 1
         * @maxItems 50
         */
        responders?: Array<{
          /** Opsgenie responder type. */
          type: "team" | "user" | "escalation" | "schedule";
          /**
           * Opsgenie responder ID.
           * @minLength 1
           */
          id?: string;
          /**
           * Opsgenie responder name.
           * @minLength 1
           */
          name?: string;
          /**
           * Opsgenie user responder username.
           * @minLength 1
           */
          username?: string;
          [key: string]: unknown;
        }>;
        /**
         * Teams or users that can view the alert.
         * @minItems 1
         * @maxItems 50
         */
        visibleTo?: Array<{
          /** Opsgenie visibility target type. */
          type: "team" | "user";
          /**
           * Opsgenie visibility target ID.
           * @minLength 1
           */
          id?: string;
          /**
           * Opsgenie team name.
           * @minLength 1
           */
          name?: string;
          /**
           * Opsgenie user username.
           * @minLength 1
           */
          username?: string;
          [key: string]: unknown;
        }>;
        /**
         * Custom actions available for the alert.
         * @minItems 1
         * @maxItems 10
         */
        actions?: Array<string>;
        /**
         * Tags to add to the alert.
         * @minItems 1
         * @maxItems 20
         */
        tags?: Array<string>;
        /** Opsgenie alert details as key-value string properties. */
        details?: Record<string, string>;
        /**
         * Entity related to the alert.
         * @minLength 1
         * @maxLength 512
         */
        entity?: string;
        /**
         * Alert source.
         * @minLength 1
         * @maxLength 100
         */
        source?: string;
        /** Opsgenie alert priority. */
        priority?: "P1" | "P2" | "P3" | "P4" | "P5";
        /**
         * Display name of the request owner.
         * @minLength 1
         * @maxLength 100
         */
        user?: string;
        /**
         * Additional note added while creating the alert.
         * @minLength 1
         * @maxLength 25000
         */
        note?: string;
      };
      output: {
        /** Opsgenie request acceptance message. */
        result: string;
        /** Time Opsgenie spent accepting the request. */
        took: number;
        /** Opsgenie request ID for polling request status. */
        requestId: string;
      };
    };
    /** Get one Opsgenie alert by ID, tiny ID, or alias. */
    "opsgenie.get_alert": {
      input: {
        /**
         * Opsgenie alert identifier.
         * @minLength 1
         */
        identifier: string;
        /** Type of Opsgenie alert identifier. */
        identifierType?: "id" | "tiny" | "alias";
      };
      output: {
        /** Opsgenie alert record. */
        alert: {
          /** Opsgenie alert ID. */
          id?: string;
          /** Opsgenie tiny alert ID. */
          tinyId?: string;
          /** Opsgenie alert alias. */
          alias?: string;
          /** Opsgenie alert message. */
          message?: string;
          /** Opsgenie alert status. */
          status?: string;
          /** Whether the alert has been acknowledged. */
          acknowledged?: boolean;
          /** Whether the alert has been seen. */
          isSeen?: boolean;
          /** Alert tags. */
          tags?: Array<string>;
          /** Whether the alert is snoozed. */
          snoozed?: boolean;
          /** Date and time when the alert snooze ends. */
          snoozedUntil?: string;
          /** Alert occurrence count. */
          count?: number;
          /** Date and time when the alert last occurred. */
          lastOccurredAt?: string;
          /** Date and time when the alert was created. */
          createdAt?: string;
          /** Date and time when the alert was last updated. */
          updatedAt?: string;
          /** Alert source. */
          source?: string;
          /** Alert owner. */
          owner?: string;
          /** Opsgenie alert priority. */
          priority?: "P1" | "P2" | "P3" | "P4" | "P5";
          /** Alert responders. */
          responders?: Array<{
            /** Opsgenie responder type. */
            type: "team" | "user" | "escalation" | "schedule";
            /**
             * Opsgenie responder ID.
             * @minLength 1
             */
            id?: string;
            /**
             * Opsgenie responder name.
             * @minLength 1
             */
            name?: string;
            /**
             * Opsgenie user responder username.
             * @minLength 1
             */
            username?: string;
            [key: string]: unknown;
          }>;
          /** Opsgenie integration that created the alert. */
          integration?: {
            /** Opsgenie integration ID. */
            id?: string;
            /** Opsgenie integration name. */
            name?: string;
            /** Opsgenie integration type. */
            type?: string;
            [key: string]: unknown;
          };
          /** Opsgenie alert report metrics. */
          report?: {
            /** Alert acknowledgement time in milliseconds. */
            ackTime?: number;
            /** Alert close time in milliseconds. */
            closeTime?: number;
            /** User who acknowledged the alert. */
            acknowledgedBy?: string;
            /** User who closed the alert. */
            closedBy?: string;
            [key: string]: unknown;
          };
          /** Custom actions available on the alert. */
          actions?: Array<string>;
          /** Entity related to the alert. */
          entity?: string;
          /** Detailed alert description. */
          description?: string;
          /** Opsgenie alert details as key-value string properties. */
          details?: Record<string, string>;
          [key: string]: unknown;
        };
        /** Opsgenie request ID. */
        requestId: string;
      };
    };
    /** Validate the Opsgenie API key and return account information for the key. */
    "opsgenie.get_current_account": {
      input: Record<string, never>;
      output: {
        /** Opsgenie account information. */
        account: {
          /** Opsgenie account name. */
          name?: string;
          /** Opsgenie account plan. */
          plan?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get processing status for an Opsgenie asynchronous alert request. */
    "opsgenie.get_request_status": {
      input: {
        /**
         * Opsgenie asynchronous request ID.
         * @minLength 1
         */
        requestId: string;
      };
      output: {
        /** Opsgenie request status data. */
        data: {
          /** Whether the asynchronous request status call succeeded. */
          success?: boolean;
          /** Opsgenie asynchronous action name. */
          action?: string;
          /** Date and time when Opsgenie processed the request. */
          processedAt?: string;
          /** Opsgenie integration ID. */
          integrationId?: string;
          /** Whether the original asynchronous request succeeded. */
          isSuccess?: boolean;
          /** Human-readable processing status. */
          status?: string;
          /** Alert ID affected by the request, when available. */
          alertId?: string;
          /** Alert alias affected by the request, when available. */
          alias?: string;
          [key: string]: unknown;
        };
        /** Time Opsgenie spent returning the request status. */
        took: number;
        /** Opsgenie request ID for this status lookup. */
        requestId: string;
      };
    };
    /** List Opsgenie alerts with query, saved-search, sorting, and paging filters. */
    "opsgenie.list_alerts": {
      input: {
        /**
         * Opsgenie alert search query.
         * @minLength 1
         */
        query?: string;
        /**
         * Opsgenie saved-search identifier.
         * @minLength 1
         */
        searchIdentifier?: string;
        /** Type of Opsgenie saved-search identifier. */
        searchIdentifierType?: "id" | "name";
        /**
         * Start index of the result set.
         * @minimum 0
         */
        offset?: number;
        /**
         * Maximum number of alerts to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Alert field to sort by.
         * @minLength 1
         */
        sort?: string;
        /** Sort direction for the Opsgenie result set. */
        order?: "asc" | "desc";
      };
      output: {
        /** Opsgenie alerts returned by the query. */
        alerts: Array<{
          /** Opsgenie alert ID. */
          id?: string;
          /** Opsgenie tiny alert ID. */
          tinyId?: string;
          /** Opsgenie alert alias. */
          alias?: string;
          /** Opsgenie alert message. */
          message?: string;
          /** Opsgenie alert status. */
          status?: string;
          /** Whether the alert has been acknowledged. */
          acknowledged?: boolean;
          /** Whether the alert has been seen. */
          isSeen?: boolean;
          /** Alert tags. */
          tags?: Array<string>;
          /** Whether the alert is snoozed. */
          snoozed?: boolean;
          /** Date and time when the alert snooze ends. */
          snoozedUntil?: string;
          /** Alert occurrence count. */
          count?: number;
          /** Date and time when the alert last occurred. */
          lastOccurredAt?: string;
          /** Date and time when the alert was created. */
          createdAt?: string;
          /** Date and time when the alert was last updated. */
          updatedAt?: string;
          /** Alert source. */
          source?: string;
          /** Alert owner. */
          owner?: string;
          /** Opsgenie alert priority. */
          priority?: "P1" | "P2" | "P3" | "P4" | "P5";
          /** Alert responders. */
          responders?: Array<{
            /** Opsgenie responder type. */
            type: "team" | "user" | "escalation" | "schedule";
            /**
             * Opsgenie responder ID.
             * @minLength 1
             */
            id?: string;
            /**
             * Opsgenie responder name.
             * @minLength 1
             */
            name?: string;
            /**
             * Opsgenie user responder username.
             * @minLength 1
             */
            username?: string;
            [key: string]: unknown;
          }>;
          /** Opsgenie integration that created the alert. */
          integration?: {
            /** Opsgenie integration ID. */
            id?: string;
            /** Opsgenie integration name. */
            name?: string;
            /** Opsgenie integration type. */
            type?: string;
            [key: string]: unknown;
          };
          /** Opsgenie alert report metrics. */
          report?: {
            /** Alert acknowledgement time in milliseconds. */
            ackTime?: number;
            /** Alert close time in milliseconds. */
            closeTime?: number;
            /** User who acknowledged the alert. */
            acknowledgedBy?: string;
            /** User who closed the alert. */
            closedBy?: string;
            [key: string]: unknown;
          };
          /** Custom actions available on the alert. */
          actions?: Array<string>;
          /** Entity related to the alert. */
          entity?: string;
          /** Detailed alert description. */
          description?: string;
          /** Opsgenie alert details as key-value string properties. */
          details?: Record<string, string>;
          [key: string]: unknown;
        }>;
        /** Opsgenie pagination metadata. */
        pagination: {
          /** Start index of this result page. */
          offset: number;
          /** Maximum number of records requested. */
          limit: number;
          /** Number of records returned in this page. */
          count: number;
        };
        /** Opsgenie request ID. */
        requestId: string;
      };
    };
  }
}
