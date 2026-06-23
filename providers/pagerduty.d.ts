import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Acknowledge a PagerDuty incident as the specified user. */
    "pagerduty.acknowledge_incident": {
      input: {
        /**
         * PagerDuty resource ID.
         * @minLength 1
         */
        incident_id: string;
        /**
         * Email address of the PagerDuty user acknowledging the incident. PagerDuty requires this header for write operations.
         * @format email
         */
        from: string;
      };
      output: {
        /** PagerDuty incident record. */
        incident: {
          /**
           * PagerDuty resource ID.
           * @minLength 1
           */
          id?: string;
          /** PagerDuty incident object type. */
          type?: string;
          /** Incident summary. */
          summary?: string;
          /**
           * API URL for the incident.
           * @format uri
           */
          self?: string;
          /**
           * Web URL for the incident.
           * @format uri
           */
          html_url?: string;
          /** PagerDuty incident number. */
          incident_number?: number;
          /** Incident title. */
          title?: string;
          /** Incident description. */
          description?: string;
          /** Incident status. */
          status?: "triggered" | "acknowledged" | "resolved";
          /** Incident urgency. */
          urgency?: "high" | "low";
          /** Timestamp in ISO 8601 format. */
          created_at?: string;
          /** Timestamp in ISO 8601 format. */
          updated_at?: string;
          /** PagerDuty service reference. */
          service?: {
            /**
             * PagerDuty resource ID.
             * @minLength 1
             */
            id?: string;
            /** PagerDuty service reference type. */
            type?: string;
            /** Service display summary. */
            summary?: string;
            /**
             * API URL for the service.
             * @format uri
             */
            self?: string;
            /**
             * Web URL for the service.
             * @format uri
             */
            html_url?: string;
            [key: string]: unknown;
          };
          /** Current incident assignments. */
          assignments?: Array<{
            /** Timestamp in ISO 8601 format. */
            at?: string;
            /** PagerDuty user reference. */
            assignee?: {
              /**
               * PagerDuty resource ID.
               * @minLength 1
               */
              id?: string;
              /** PagerDuty user reference type. */
              type?: string;
              /** User display summary. */
              summary?: string;
              /**
               * API URL for the user.
               * @format uri
               */
              self?: string;
              /**
               * Web URL for the user.
               * @format uri
               */
              html_url?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** PagerDuty escalation policy reference. */
          escalation_policy?: {
            /**
             * PagerDuty resource ID.
             * @minLength 1
             */
            id?: string;
            /** PagerDuty escalation policy reference type. */
            type?: string;
            /** Escalation policy display summary. */
            summary?: string;
            /**
             * API URL for the escalation policy.
             * @format uri
             */
            self?: string;
            /**
             * Web URL for the escalation policy.
             * @format uri
             */
            html_url?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get the PagerDuty user associated with the API token. */
    "pagerduty.get_current_user": {
      input: Record<string, never>;
      output: {
        /** PagerDuty user reference. */
        user: {
          /**
           * PagerDuty resource ID.
           * @minLength 1
           */
          id?: string;
          /** PagerDuty user reference type. */
          type?: string;
          /** User display summary. */
          summary?: string;
          /**
           * API URL for the user.
           * @format uri
           */
          self?: string;
          /**
           * Web URL for the user.
           * @format uri
           */
          html_url?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a PagerDuty incident by ID. */
    "pagerduty.get_incident": {
      input: {
        /**
         * PagerDuty resource ID.
         * @minLength 1
         */
        incident_id: string;
        /** Related incident records to include. */
        include?: Array<"services" | "assignees" | "first_trigger_log_entries" | "escalation_policies" | "teams" | "priority">;
      };
      output: {
        /** PagerDuty incident record. */
        incident: {
          /**
           * PagerDuty resource ID.
           * @minLength 1
           */
          id?: string;
          /** PagerDuty incident object type. */
          type?: string;
          /** Incident summary. */
          summary?: string;
          /**
           * API URL for the incident.
           * @format uri
           */
          self?: string;
          /**
           * Web URL for the incident.
           * @format uri
           */
          html_url?: string;
          /** PagerDuty incident number. */
          incident_number?: number;
          /** Incident title. */
          title?: string;
          /** Incident description. */
          description?: string;
          /** Incident status. */
          status?: "triggered" | "acknowledged" | "resolved";
          /** Incident urgency. */
          urgency?: "high" | "low";
          /** Timestamp in ISO 8601 format. */
          created_at?: string;
          /** Timestamp in ISO 8601 format. */
          updated_at?: string;
          /** PagerDuty service reference. */
          service?: {
            /**
             * PagerDuty resource ID.
             * @minLength 1
             */
            id?: string;
            /** PagerDuty service reference type. */
            type?: string;
            /** Service display summary. */
            summary?: string;
            /**
             * API URL for the service.
             * @format uri
             */
            self?: string;
            /**
             * Web URL for the service.
             * @format uri
             */
            html_url?: string;
            [key: string]: unknown;
          };
          /** Current incident assignments. */
          assignments?: Array<{
            /** Timestamp in ISO 8601 format. */
            at?: string;
            /** PagerDuty user reference. */
            assignee?: {
              /**
               * PagerDuty resource ID.
               * @minLength 1
               */
              id?: string;
              /** PagerDuty user reference type. */
              type?: string;
              /** User display summary. */
              summary?: string;
              /**
               * API URL for the user.
               * @format uri
               */
              self?: string;
              /**
               * Web URL for the user.
               * @format uri
               */
              html_url?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** PagerDuty escalation policy reference. */
          escalation_policy?: {
            /**
             * PagerDuty resource ID.
             * @minLength 1
             */
            id?: string;
            /** PagerDuty escalation policy reference type. */
            type?: string;
            /** Escalation policy display summary. */
            summary?: string;
            /**
             * API URL for the escalation policy.
             * @format uri
             */
            self?: string;
            /**
             * Web URL for the escalation policy.
             * @format uri
             */
            html_url?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List PagerDuty incidents with status, service, assignment, and paging filters. */
    "pagerduty.list_incidents": {
      input: {
        /** Only return incidents with these statuses. */
        statuses?: Array<"triggered" | "acknowledged" | "resolved">;
        /** Start of the incident time range in ISO 8601 format. */
        since?: string;
        /** End of the incident time range in ISO 8601 format. */
        until?: string;
        /** Only return incidents for these service IDs. */
        service_ids?: Array<string>;
        /** Only return results for these team IDs. */
        team_ids?: Array<string>;
        /** Only return results for these user IDs. */
        user_ids?: Array<string>;
        /** Only return incidents with these urgencies. */
        urgencies?: Array<"high" | "low">;
        /** PagerDuty incident sort order. */
        sort_by?: "incident_number:asc" | "incident_number:desc" | "created_at:asc" | "created_at:desc" | "resolved_at:asc" | "resolved_at:desc" | "urgency:asc" | "urgency:desc";
        /** Related incident records to include. */
        include?: Array<"services" | "assignees" | "first_trigger_log_entries" | "escalation_policies" | "teams" | "priority">;
        /** Whether PagerDuty should include total matching record count. */
        total?: boolean;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Zero-based offset for paginated results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** PagerDuty incidents returned by the query. */
        incidents: Array<{
          /**
           * PagerDuty resource ID.
           * @minLength 1
           */
          id?: string;
          /** PagerDuty incident object type. */
          type?: string;
          /** Incident summary. */
          summary?: string;
          /**
           * API URL for the incident.
           * @format uri
           */
          self?: string;
          /**
           * Web URL for the incident.
           * @format uri
           */
          html_url?: string;
          /** PagerDuty incident number. */
          incident_number?: number;
          /** Incident title. */
          title?: string;
          /** Incident description. */
          description?: string;
          /** Incident status. */
          status?: "triggered" | "acknowledged" | "resolved";
          /** Incident urgency. */
          urgency?: "high" | "low";
          /** Timestamp in ISO 8601 format. */
          created_at?: string;
          /** Timestamp in ISO 8601 format. */
          updated_at?: string;
          /** PagerDuty service reference. */
          service?: {
            /**
             * PagerDuty resource ID.
             * @minLength 1
             */
            id?: string;
            /** PagerDuty service reference type. */
            type?: string;
            /** Service display summary. */
            summary?: string;
            /**
             * API URL for the service.
             * @format uri
             */
            self?: string;
            /**
             * Web URL for the service.
             * @format uri
             */
            html_url?: string;
            [key: string]: unknown;
          };
          /** Current incident assignments. */
          assignments?: Array<{
            /** Timestamp in ISO 8601 format. */
            at?: string;
            /** PagerDuty user reference. */
            assignee?: {
              /**
               * PagerDuty resource ID.
               * @minLength 1
               */
              id?: string;
              /** PagerDuty user reference type. */
              type?: string;
              /** User display summary. */
              summary?: string;
              /**
               * API URL for the user.
               * @format uri
               */
              self?: string;
              /**
               * Web URL for the user.
               * @format uri
               */
              html_url?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** PagerDuty escalation policy reference. */
          escalation_policy?: {
            /**
             * PagerDuty resource ID.
             * @minLength 1
             */
            id?: string;
            /** PagerDuty escalation policy reference type. */
            type?: string;
            /** Escalation policy display summary. */
            summary?: string;
            /**
             * API URL for the escalation policy.
             * @format uri
             */
            self?: string;
            /**
             * Web URL for the escalation policy.
             * @format uri
             */
            html_url?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** PagerDuty pagination metadata. */
        pagination: {
          /** Maximum number of records requested. */
          limit: number;
          /** Offset used for this page. */
          offset: number;
          /** Whether PagerDuty has another page after this response. */
          more: boolean;
          /** Total matching records when PagerDuty includes it. */
          total?: number;
        };
      };
    };
    /** List PagerDuty on-call assignments by user, schedule, or escalation policy. */
    "pagerduty.list_on_calls": {
      input: {
        /** Only return results for these user IDs. */
        user_ids?: Array<string>;
        /** Only return results for these escalation policy IDs. */
        escalation_policy_ids?: Array<string>;
        /** Only return results for these schedule IDs. */
        schedule_ids?: Array<string>;
        /** Start of the on-call time range in ISO 8601 format. */
        since?: string;
        /** End of the on-call time range in ISO 8601 format. */
        until?: string;
        /** Only return the earliest on-call assignment per escalation policy. */
        earliest?: boolean;
        /** Related on-call records to include. */
        include?: Array<"users" | "schedules" | "escalation_policies">;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Zero-based offset for paginated results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** PagerDuty on-call entries returned by the query. */
        onCalls: Array<{
          /** Escalation level for this on-call assignment. */
          escalation_level?: number;
          /** Timestamp in ISO 8601 format. */
          start?: string;
          /** Timestamp in ISO 8601 format. */
          end?: string;
          /** PagerDuty user reference. */
          user?: {
            /**
             * PagerDuty resource ID.
             * @minLength 1
             */
            id?: string;
            /** PagerDuty user reference type. */
            type?: string;
            /** User display summary. */
            summary?: string;
            /**
             * API URL for the user.
             * @format uri
             */
            self?: string;
            /**
             * Web URL for the user.
             * @format uri
             */
            html_url?: string;
            [key: string]: unknown;
          };
          /** PagerDuty escalation policy reference. */
          escalation_policy?: {
            /**
             * PagerDuty resource ID.
             * @minLength 1
             */
            id?: string;
            /** PagerDuty escalation policy reference type. */
            type?: string;
            /** Escalation policy display summary. */
            summary?: string;
            /**
             * API URL for the escalation policy.
             * @format uri
             */
            self?: string;
            /**
             * Web URL for the escalation policy.
             * @format uri
             */
            html_url?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** PagerDuty pagination metadata. */
        pagination: {
          /** Maximum number of records requested. */
          limit: number;
          /** Offset used for this page. */
          offset: number;
          /** Whether PagerDuty has another page after this response. */
          more: boolean;
          /** Total matching records when PagerDuty includes it. */
          total?: number;
        };
      };
    };
    /** Resolve a PagerDuty incident as the specified user. */
    "pagerduty.resolve_incident": {
      input: {
        /**
         * PagerDuty resource ID.
         * @minLength 1
         */
        incident_id: string;
        /**
         * Email address of the PagerDuty user resolving the incident. PagerDuty requires this header for write operations.
         * @format email
         */
        from: string;
        /**
         * Optional resolution note for the incident.
         * @minLength 1
         */
        resolution?: string;
      };
      output: {
        /** PagerDuty incident record. */
        incident: {
          /**
           * PagerDuty resource ID.
           * @minLength 1
           */
          id?: string;
          /** PagerDuty incident object type. */
          type?: string;
          /** Incident summary. */
          summary?: string;
          /**
           * API URL for the incident.
           * @format uri
           */
          self?: string;
          /**
           * Web URL for the incident.
           * @format uri
           */
          html_url?: string;
          /** PagerDuty incident number. */
          incident_number?: number;
          /** Incident title. */
          title?: string;
          /** Incident description. */
          description?: string;
          /** Incident status. */
          status?: "triggered" | "acknowledged" | "resolved";
          /** Incident urgency. */
          urgency?: "high" | "low";
          /** Timestamp in ISO 8601 format. */
          created_at?: string;
          /** Timestamp in ISO 8601 format. */
          updated_at?: string;
          /** PagerDuty service reference. */
          service?: {
            /**
             * PagerDuty resource ID.
             * @minLength 1
             */
            id?: string;
            /** PagerDuty service reference type. */
            type?: string;
            /** Service display summary. */
            summary?: string;
            /**
             * API URL for the service.
             * @format uri
             */
            self?: string;
            /**
             * Web URL for the service.
             * @format uri
             */
            html_url?: string;
            [key: string]: unknown;
          };
          /** Current incident assignments. */
          assignments?: Array<{
            /** Timestamp in ISO 8601 format. */
            at?: string;
            /** PagerDuty user reference. */
            assignee?: {
              /**
               * PagerDuty resource ID.
               * @minLength 1
               */
              id?: string;
              /** PagerDuty user reference type. */
              type?: string;
              /** User display summary. */
              summary?: string;
              /**
               * API URL for the user.
               * @format uri
               */
              self?: string;
              /**
               * Web URL for the user.
               * @format uri
               */
              html_url?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** PagerDuty escalation policy reference. */
          escalation_policy?: {
            /**
             * PagerDuty resource ID.
             * @minLength 1
             */
            id?: string;
            /** PagerDuty escalation policy reference type. */
            type?: string;
            /** Escalation policy display summary. */
            summary?: string;
            /**
             * API URL for the escalation policy.
             * @format uri
             */
            self?: string;
            /**
             * Web URL for the escalation policy.
             * @format uri
             */
            html_url?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Update mutable PagerDuty incident fields such as title, urgency, or status. */
    "pagerduty.update_incident": {
      input: {
        /**
         * PagerDuty resource ID.
         * @minLength 1
         */
        incident_id: string;
        /**
         * Email address of the PagerDuty user performing the incident mutation. PagerDuty requires this header for write operations.
         * @format email
         */
        from: string;
        /** Incident mutation fields. */
        incident: {
          /**
           * PagerDuty incident object type.
           * @minLength 1
           */
          type?: string;
          /** Incident status. */
          status?: "triggered" | "acknowledged" | "resolved";
          /**
           * New incident title.
           * @minLength 1
           */
          title?: string;
          /** Incident urgency. */
          urgency?: "high" | "low";
          /**
           * Escalation level for the incident.
           * @minimum 1
           */
          escalation_level?: number;
          /**
           * PagerDuty resource ID.
           * @minLength 1
           */
          priority_id?: string;
          /**
           * Resolution note for the incident.
           * @minLength 1
           */
          resolution?: string;
        };
      };
      output: {
        /** PagerDuty incident record. */
        incident: {
          /**
           * PagerDuty resource ID.
           * @minLength 1
           */
          id?: string;
          /** PagerDuty incident object type. */
          type?: string;
          /** Incident summary. */
          summary?: string;
          /**
           * API URL for the incident.
           * @format uri
           */
          self?: string;
          /**
           * Web URL for the incident.
           * @format uri
           */
          html_url?: string;
          /** PagerDuty incident number. */
          incident_number?: number;
          /** Incident title. */
          title?: string;
          /** Incident description. */
          description?: string;
          /** Incident status. */
          status?: "triggered" | "acknowledged" | "resolved";
          /** Incident urgency. */
          urgency?: "high" | "low";
          /** Timestamp in ISO 8601 format. */
          created_at?: string;
          /** Timestamp in ISO 8601 format. */
          updated_at?: string;
          /** PagerDuty service reference. */
          service?: {
            /**
             * PagerDuty resource ID.
             * @minLength 1
             */
            id?: string;
            /** PagerDuty service reference type. */
            type?: string;
            /** Service display summary. */
            summary?: string;
            /**
             * API URL for the service.
             * @format uri
             */
            self?: string;
            /**
             * Web URL for the service.
             * @format uri
             */
            html_url?: string;
            [key: string]: unknown;
          };
          /** Current incident assignments. */
          assignments?: Array<{
            /** Timestamp in ISO 8601 format. */
            at?: string;
            /** PagerDuty user reference. */
            assignee?: {
              /**
               * PagerDuty resource ID.
               * @minLength 1
               */
              id?: string;
              /** PagerDuty user reference type. */
              type?: string;
              /** User display summary. */
              summary?: string;
              /**
               * API URL for the user.
               * @format uri
               */
              self?: string;
              /**
               * Web URL for the user.
               * @format uri
               */
              html_url?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** PagerDuty escalation policy reference. */
          escalation_policy?: {
            /**
             * PagerDuty resource ID.
             * @minLength 1
             */
            id?: string;
            /** PagerDuty escalation policy reference type. */
            type?: string;
            /** Escalation policy display summary. */
            summary?: string;
            /**
             * API URL for the escalation policy.
             * @format uri
             */
            self?: string;
            /**
             * Web URL for the escalation policy.
             * @format uri
             */
            html_url?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
  }
}
