import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Acknowledge a Better Stack incident to stop further escalations. */
    "better_stack.acknowledge_incident": {
      input: {
        /**
         * The Better Stack incident ID.
         * @minLength 1
         */
        incident_id: string;
        /**
         * User email or custom identifier acknowledging the incident.
         * @minLength 1
         */
        acknowledged_by?: string;
      };
      output: {
        /** Incident returned by Better Stack. */
        incident: {
          /** Better Stack incident identifier. */
          id: string;
          /** Resource type returned by Better Stack, usually incident. */
          type: string;
          /** Attributes returned for a Better Stack incident. */
          attributes: {
            /** Incident name returned by Better Stack. */
            name: string;
            /** Affected URL when present. */
            url?: string | null;
            /** HTTP method of the affected check when present. */
            http_method?: string | null;
            /** Incident cause summary. */
            cause: string;
            /** Incident group ID when the incident belongs to a grouped alert. */
            incident_group_id?: string | number | null;
            /** Timestamp when the incident started. */
            started_at: string;
            /** Timestamp when the incident was acknowledged. */
            acknowledged_at?: string | null;
            /** Actor that acknowledged the incident. */
            acknowledged_by?: string | null;
            /** Timestamp when the incident was resolved. */
            resolved_at?: string | null;
            /** Actor that resolved the incident. */
            resolved_by?: string | null;
            /** Incident status reported by Better Stack. */
            status?: string;
            /** Owning Better Stack team name. */
            team_name?: string;
            /** Captured response content when Better Stack includes it. */
            response_content?: string | null;
            /** Serialized response options returned by Better Stack. */
            response_options?: string | null;
            /** Monitoring regions attached to the incident. */
            regions?: Array<string> | null;
            /** Response URL captured for the incident, when present. */
            response_url?: string | null;
            /** Screenshot URL captured for the incident, when present. */
            screenshot_url?: string | null;
            /** Origin URL returned by Better Stack, when present. */
            origin_url?: string | null;
            /** Escalation policy ID currently attached to the incident. */
            escalation_policy_id?: string | number | null;
            /** Whether calls are enabled for this incident. */
            call?: boolean;
            /** Whether SMS notifications are enabled for this incident. */
            sms?: boolean;
            /** Whether email notifications are enabled for this incident. */
            email?: boolean;
            /** Whether push notifications are enabled for this incident. */
            push?: boolean;
            /** Whether critical push notifications are enabled for this incident. */
            critical_alert?: boolean;
            /** Slack channels attached to the incident. */
            slack_channels?: Array<string>;
            /** Incident metadata grouped by metadata key. */
            metadata?: Record<string, Array<{
                /** Metadata value type returned by Better Stack. */
                type?: "String" | "User" | "Team" | "Policy" | "Schedule" | "SlackIntegration" | "LinearIntegration" | "JiraIntegration" | "MicrosoftTeamsWebhook" | "ZapierWebhook" | "NativeWebhook" | "PagerDutyWebhook";
                /** String value used when the metadata entry type is String. */
                value?: string;
                /** Referenced Better Stack item identifier for non-String metadata values. */
                item_id?: string | number;
                /** Referenced item name returned by Better Stack or accepted when creating metadata. */
                name?: string;
                /**
                 * Referenced user email accepted by Better Stack for User metadata values.
                 * @format email
                 */
                email?: string;
              }>>;
            [key: string]: unknown;
          };
          /** Relationships returned for the incident resource. */
          relationships?: {
            /** Monitor relationship returned for the incident. */
            monitor?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Heartbeat relationship returned for the incident. */
            heartbeat?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Webhook integration relationship returned for the incident. */
            webhook_integration?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Email integration relationship returned for the incident. */
            email_integration?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Incoming webhook relationship returned for the incident. */
            incoming_webhook?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Call routing relationship returned for the incident. */
            call_routing?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            [key: string]: unknown;
          };
        };
      };
    };
    /** Create a Better Stack incident and alert the current on-call responder. */
    "better_stack.create_incident": {
      input: {
        /**
         * Team name used when a global Better Stack API token needs explicit team scoping.
         * @minLength 1
         */
        team_name?: string;
        /**
         * Email address of the requester that opened the incident.
         * @format email
         */
        requester_email?: string;
        /**
         * Short incident name.
         * @minLength 1
         */
        name?: string;
        /**
         * Brief summary of the incident.
         * @minLength 1
         */
        summary: string;
        /**
         * Full description of the incident.
         * @minLength 1
         */
        description?: string;
        /** Whether Better Stack should call the current on-call responder. */
        call?: boolean;
        /** Whether Better Stack should send an SMS to the on-call responder. */
        sms?: boolean;
        /** Whether Better Stack should send an email to the on-call responder. */
        email?: boolean;
        /** Whether Better Stack should send a critical push notification. */
        critical_alert?: boolean;
        /**
         * Seconds to wait before escalating to the whole team.
         * @exclusiveMinimum 0
         */
        team_wait?: number;
        /** Escalation policy ID to attach when creating the incident. */
        policy_id?: string | number;
        /** Metadata object to attach to the incident when it is created. */
        metadata?: Record<string, Array<{
            /** Metadata value type to send to Better Stack. */
            type?: "String" | "User" | "Team" | "Policy" | "Schedule" | "SlackIntegration" | "LinearIntegration" | "JiraIntegration" | "MicrosoftTeamsWebhook" | "ZapierWebhook" | "NativeWebhook" | "PagerDutyWebhook";
            /** String value to send when the metadata entry type is String. */
            value?: string;
            /** Referenced Better Stack item identifier for non-String metadata values. */
            item_id?: string | number;
            /** Referenced item name for non-String metadata values. */
            name?: string;
            /**
             * Referenced user email for User metadata values.
             * @format email
             */
            email?: string;
          }>>;
      };
      output: {
        /** Incident returned by Better Stack. */
        incident: {
          /** Better Stack incident identifier. */
          id: string;
          /** Resource type returned by Better Stack, usually incident. */
          type: string;
          /** Attributes returned for a Better Stack incident. */
          attributes: {
            /** Incident name returned by Better Stack. */
            name: string;
            /** Affected URL when present. */
            url?: string | null;
            /** HTTP method of the affected check when present. */
            http_method?: string | null;
            /** Incident cause summary. */
            cause: string;
            /** Incident group ID when the incident belongs to a grouped alert. */
            incident_group_id?: string | number | null;
            /** Timestamp when the incident started. */
            started_at: string;
            /** Timestamp when the incident was acknowledged. */
            acknowledged_at?: string | null;
            /** Actor that acknowledged the incident. */
            acknowledged_by?: string | null;
            /** Timestamp when the incident was resolved. */
            resolved_at?: string | null;
            /** Actor that resolved the incident. */
            resolved_by?: string | null;
            /** Incident status reported by Better Stack. */
            status?: string;
            /** Owning Better Stack team name. */
            team_name?: string;
            /** Captured response content when Better Stack includes it. */
            response_content?: string | null;
            /** Serialized response options returned by Better Stack. */
            response_options?: string | null;
            /** Monitoring regions attached to the incident. */
            regions?: Array<string> | null;
            /** Response URL captured for the incident, when present. */
            response_url?: string | null;
            /** Screenshot URL captured for the incident, when present. */
            screenshot_url?: string | null;
            /** Origin URL returned by Better Stack, when present. */
            origin_url?: string | null;
            /** Escalation policy ID currently attached to the incident. */
            escalation_policy_id?: string | number | null;
            /** Whether calls are enabled for this incident. */
            call?: boolean;
            /** Whether SMS notifications are enabled for this incident. */
            sms?: boolean;
            /** Whether email notifications are enabled for this incident. */
            email?: boolean;
            /** Whether push notifications are enabled for this incident. */
            push?: boolean;
            /** Whether critical push notifications are enabled for this incident. */
            critical_alert?: boolean;
            /** Slack channels attached to the incident. */
            slack_channels?: Array<string>;
            /** Incident metadata grouped by metadata key. */
            metadata?: Record<string, Array<{
                /** Metadata value type returned by Better Stack. */
                type?: "String" | "User" | "Team" | "Policy" | "Schedule" | "SlackIntegration" | "LinearIntegration" | "JiraIntegration" | "MicrosoftTeamsWebhook" | "ZapierWebhook" | "NativeWebhook" | "PagerDutyWebhook";
                /** String value used when the metadata entry type is String. */
                value?: string;
                /** Referenced Better Stack item identifier for non-String metadata values. */
                item_id?: string | number;
                /** Referenced item name returned by Better Stack or accepted when creating metadata. */
                name?: string;
                /**
                 * Referenced user email accepted by Better Stack for User metadata values.
                 * @format email
                 */
                email?: string;
              }>>;
            [key: string]: unknown;
          };
          /** Relationships returned for the incident resource. */
          relationships?: {
            /** Monitor relationship returned for the incident. */
            monitor?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Heartbeat relationship returned for the incident. */
            heartbeat?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Webhook integration relationship returned for the incident. */
            webhook_integration?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Email integration relationship returned for the incident. */
            email_integration?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Incoming webhook relationship returned for the incident. */
            incoming_webhook?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Call routing relationship returned for the incident. */
            call_routing?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            [key: string]: unknown;
          };
        };
      };
    };
    /** Escalate a Better Stack incident to a user, team, schedule, policy, or organization. */
    "better_stack.escalate_incident": {
      input: {
        /**
         * The Better Stack incident ID.
         * @minLength 1
         */
        incident_id: string;
        /** Escalation target type accepted by Better Stack. */
        escalation_type: "User" | "Team" | "Schedule" | "Policy" | "Organization";
        /**
         * User email to escalate the incident to.
         * @format email
         */
        user_email?: string;
        /**
         * User ID to escalate the incident to.
         * @exclusiveMinimum 0
         */
        user_id?: number;
        /**
         * Team name to escalate the incident to.
         * @minLength 1
         */
        team_name?: string;
        /**
         * Team ID to escalate the incident to.
         * @exclusiveMinimum 0
         */
        team_id?: number;
        /**
         * On-call schedule ID to escalate the incident to.
         * @exclusiveMinimum 0
         */
        schedule_id?: number;
        /**
         * Escalation policy ID to escalate the incident to.
         * @exclusiveMinimum 0
         */
        policy_id?: number;
        /** Whether the escalation should trigger phone calls. */
        call?: boolean;
        /** Whether the escalation should trigger SMS notifications. */
        sms?: boolean;
        /** Whether the escalation should trigger email notifications. */
        email?: boolean;
        /** Whether the escalation should trigger push notifications. */
        push?: boolean;
        /** Whether the escalation should trigger critical push notifications. */
        critical_alert?: boolean;
        /** Metadata object to attach while escalating the incident. */
        metadata?: Record<string, Array<{
            /** Metadata value type to send to Better Stack. */
            type?: "String" | "User" | "Team" | "Policy" | "Schedule" | "SlackIntegration" | "LinearIntegration" | "JiraIntegration" | "MicrosoftTeamsWebhook" | "ZapierWebhook" | "NativeWebhook" | "PagerDutyWebhook";
            /** String value to send when the metadata entry type is String. */
            value?: string;
            /** Referenced Better Stack item identifier for non-String metadata values. */
            item_id?: string | number;
            /** Referenced item name for non-String metadata values. */
            name?: string;
            /**
             * Referenced user email for User metadata values.
             * @format email
             */
            email?: string;
          }>>;
      };
      output: {
        /** Incident returned by Better Stack. */
        incident: {
          /** Better Stack incident identifier. */
          id: string;
          /** Resource type returned by Better Stack, usually incident. */
          type: string;
          /** Attributes returned for a Better Stack incident. */
          attributes: {
            /** Incident name returned by Better Stack. */
            name: string;
            /** Affected URL when present. */
            url?: string | null;
            /** HTTP method of the affected check when present. */
            http_method?: string | null;
            /** Incident cause summary. */
            cause: string;
            /** Incident group ID when the incident belongs to a grouped alert. */
            incident_group_id?: string | number | null;
            /** Timestamp when the incident started. */
            started_at: string;
            /** Timestamp when the incident was acknowledged. */
            acknowledged_at?: string | null;
            /** Actor that acknowledged the incident. */
            acknowledged_by?: string | null;
            /** Timestamp when the incident was resolved. */
            resolved_at?: string | null;
            /** Actor that resolved the incident. */
            resolved_by?: string | null;
            /** Incident status reported by Better Stack. */
            status?: string;
            /** Owning Better Stack team name. */
            team_name?: string;
            /** Captured response content when Better Stack includes it. */
            response_content?: string | null;
            /** Serialized response options returned by Better Stack. */
            response_options?: string | null;
            /** Monitoring regions attached to the incident. */
            regions?: Array<string> | null;
            /** Response URL captured for the incident, when present. */
            response_url?: string | null;
            /** Screenshot URL captured for the incident, when present. */
            screenshot_url?: string | null;
            /** Origin URL returned by Better Stack, when present. */
            origin_url?: string | null;
            /** Escalation policy ID currently attached to the incident. */
            escalation_policy_id?: string | number | null;
            /** Whether calls are enabled for this incident. */
            call?: boolean;
            /** Whether SMS notifications are enabled for this incident. */
            sms?: boolean;
            /** Whether email notifications are enabled for this incident. */
            email?: boolean;
            /** Whether push notifications are enabled for this incident. */
            push?: boolean;
            /** Whether critical push notifications are enabled for this incident. */
            critical_alert?: boolean;
            /** Slack channels attached to the incident. */
            slack_channels?: Array<string>;
            /** Incident metadata grouped by metadata key. */
            metadata?: Record<string, Array<{
                /** Metadata value type returned by Better Stack. */
                type?: "String" | "User" | "Team" | "Policy" | "Schedule" | "SlackIntegration" | "LinearIntegration" | "JiraIntegration" | "MicrosoftTeamsWebhook" | "ZapierWebhook" | "NativeWebhook" | "PagerDutyWebhook";
                /** String value used when the metadata entry type is String. */
                value?: string;
                /** Referenced Better Stack item identifier for non-String metadata values. */
                item_id?: string | number;
                /** Referenced item name returned by Better Stack or accepted when creating metadata. */
                name?: string;
                /**
                 * Referenced user email accepted by Better Stack for User metadata values.
                 * @format email
                 */
                email?: string;
              }>>;
            [key: string]: unknown;
          };
          /** Relationships returned for the incident resource. */
          relationships?: {
            /** Monitor relationship returned for the incident. */
            monitor?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Heartbeat relationship returned for the incident. */
            heartbeat?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Webhook integration relationship returned for the incident. */
            webhook_integration?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Email integration relationship returned for the incident. */
            email_integration?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Incoming webhook relationship returned for the incident. */
            incoming_webhook?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Call routing relationship returned for the incident. */
            call_routing?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            [key: string]: unknown;
          };
        };
      };
    };
    /** Get a Better Stack incident by ID with included resource context when available. */
    "better_stack.get_incident": {
      input: {
        /**
         * The Better Stack incident ID.
         * @minLength 1
         */
        incident_id: string;
      };
      output: {
        /** Incident returned by Better Stack. */
        incident: {
          /** Better Stack incident identifier. */
          id: string;
          /** Resource type returned by Better Stack, usually incident. */
          type: string;
          /** Attributes returned for a Better Stack incident. */
          attributes: {
            /** Incident name returned by Better Stack. */
            name: string;
            /** Affected URL when present. */
            url?: string | null;
            /** HTTP method of the affected check when present. */
            http_method?: string | null;
            /** Incident cause summary. */
            cause: string;
            /** Incident group ID when the incident belongs to a grouped alert. */
            incident_group_id?: string | number | null;
            /** Timestamp when the incident started. */
            started_at: string;
            /** Timestamp when the incident was acknowledged. */
            acknowledged_at?: string | null;
            /** Actor that acknowledged the incident. */
            acknowledged_by?: string | null;
            /** Timestamp when the incident was resolved. */
            resolved_at?: string | null;
            /** Actor that resolved the incident. */
            resolved_by?: string | null;
            /** Incident status reported by Better Stack. */
            status?: string;
            /** Owning Better Stack team name. */
            team_name?: string;
            /** Captured response content when Better Stack includes it. */
            response_content?: string | null;
            /** Serialized response options returned by Better Stack. */
            response_options?: string | null;
            /** Monitoring regions attached to the incident. */
            regions?: Array<string> | null;
            /** Response URL captured for the incident, when present. */
            response_url?: string | null;
            /** Screenshot URL captured for the incident, when present. */
            screenshot_url?: string | null;
            /** Origin URL returned by Better Stack, when present. */
            origin_url?: string | null;
            /** Escalation policy ID currently attached to the incident. */
            escalation_policy_id?: string | number | null;
            /** Whether calls are enabled for this incident. */
            call?: boolean;
            /** Whether SMS notifications are enabled for this incident. */
            sms?: boolean;
            /** Whether email notifications are enabled for this incident. */
            email?: boolean;
            /** Whether push notifications are enabled for this incident. */
            push?: boolean;
            /** Whether critical push notifications are enabled for this incident. */
            critical_alert?: boolean;
            /** Slack channels attached to the incident. */
            slack_channels?: Array<string>;
            /** Incident metadata grouped by metadata key. */
            metadata?: Record<string, Array<{
                /** Metadata value type returned by Better Stack. */
                type?: "String" | "User" | "Team" | "Policy" | "Schedule" | "SlackIntegration" | "LinearIntegration" | "JiraIntegration" | "MicrosoftTeamsWebhook" | "ZapierWebhook" | "NativeWebhook" | "PagerDutyWebhook";
                /** String value used when the metadata entry type is String. */
                value?: string;
                /** Referenced Better Stack item identifier for non-String metadata values. */
                item_id?: string | number;
                /** Referenced item name returned by Better Stack or accepted when creating metadata. */
                name?: string;
                /**
                 * Referenced user email accepted by Better Stack for User metadata values.
                 * @format email
                 */
                email?: string;
              }>>;
            [key: string]: unknown;
          };
          /** Relationships returned for the incident resource. */
          relationships?: {
            /** Monitor relationship returned for the incident. */
            monitor?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Heartbeat relationship returned for the incident. */
            heartbeat?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Webhook integration relationship returned for the incident. */
            webhook_integration?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Email integration relationship returned for the incident. */
            email_integration?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Incoming webhook relationship returned for the incident. */
            incoming_webhook?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Call routing relationship returned for the incident. */
            call_routing?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            [key: string]: unknown;
          };
        };
        /** Related resource included by Better Stack, or null when not present. */
        included: {
          /** Identifier of the included Better Stack resource. */
          id: string;
          /** Type of the included Better Stack resource. */
          type: string;
          /** Selected attributes returned for the included resource. */
          attributes: {
            /** URL of the included resource, when present. */
            url?: string | null;
            /** Human-readable name of the included resource, when present. */
            pronounceable_name?: string;
            /** Status of the included resource, when present. */
            status?: string;
            [key: string]: unknown;
          };
          /** Relationships returned for the included resource, when present. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List all comments attached to a Better Stack incident. */
    "better_stack.list_incident_comments": {
      input: {
        /**
         * The Better Stack incident ID.
         * @minLength 1
         */
        incident_id: string;
      };
      output: {
        /** Comments returned for the Better Stack incident. */
        comments: Array<{
          /** Incident comment identifier. */
          id: string;
          /** Resource type returned by Better Stack, usually incident_comment. */
          type: string;
          /** Incident comment attributes. */
          attributes: {
            /** Numeric incident comment identifier. */
            id: number;
            /** Comment content. */
            content: string;
            /** Author user ID when Better Stack returns it. */
            user_id?: number;
            /**
             * Author email when Better Stack returns it.
             * @format email
             */
            user_email?: string;
            /** Timestamp when the comment was created. */
            created_at: string;
            /** Timestamp when the comment was last updated. */
            updated_at: string;
          };
        }>;
      };
    };
    /** List Better Stack incidents with optional date and status filters. */
    "better_stack.list_incidents": {
      input: {
        /**
         * Team name used when a global Better Stack API token needs explicit team scoping.
         * @minLength 1
         */
        team_name?: string;
        /**
         * Only return incidents on or after this date.
         * @format date
         */
        from?: string;
        /**
         * Only return incidents on or before this date.
         * @format date
         */
        to?: string;
        /**
         * Only return incidents for this monitor ID.
         * @exclusiveMinimum 0
         */
        monitor_id?: number;
        /**
         * Only return incidents for this heartbeat ID.
         * @exclusiveMinimum 0
         */
        heartbeat_id?: number;
        /** Whether to return resolved incidents only or unresolved incidents only. */
        resolved?: boolean;
        /** Whether to return acknowledged incidents only or unacknowledged incidents only. */
        acknowledged?: boolean;
        /**
         * Page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of incidents to return per page. Better Stack incident lists allow up to 50.
         * @minimum 1
         * @maximum 50
         */
        per_page?: number;
      };
      output: {
        /** Incidents returned by Better Stack. */
        incidents: Array<{
          /** Better Stack incident identifier. */
          id: string;
          /** Resource type returned by Better Stack, usually incident. */
          type: string;
          /** Attributes returned for a Better Stack incident. */
          attributes: {
            /** Incident name returned by Better Stack. */
            name: string;
            /** Affected URL when present. */
            url?: string | null;
            /** HTTP method of the affected check when present. */
            http_method?: string | null;
            /** Incident cause summary. */
            cause: string;
            /** Incident group ID when the incident belongs to a grouped alert. */
            incident_group_id?: string | number | null;
            /** Timestamp when the incident started. */
            started_at: string;
            /** Timestamp when the incident was acknowledged. */
            acknowledged_at?: string | null;
            /** Actor that acknowledged the incident. */
            acknowledged_by?: string | null;
            /** Timestamp when the incident was resolved. */
            resolved_at?: string | null;
            /** Actor that resolved the incident. */
            resolved_by?: string | null;
            /** Incident status reported by Better Stack. */
            status?: string;
            /** Owning Better Stack team name. */
            team_name?: string;
            /** Captured response content when Better Stack includes it. */
            response_content?: string | null;
            /** Serialized response options returned by Better Stack. */
            response_options?: string | null;
            /** Monitoring regions attached to the incident. */
            regions?: Array<string> | null;
            /** Response URL captured for the incident, when present. */
            response_url?: string | null;
            /** Screenshot URL captured for the incident, when present. */
            screenshot_url?: string | null;
            /** Origin URL returned by Better Stack, when present. */
            origin_url?: string | null;
            /** Escalation policy ID currently attached to the incident. */
            escalation_policy_id?: string | number | null;
            /** Whether calls are enabled for this incident. */
            call?: boolean;
            /** Whether SMS notifications are enabled for this incident. */
            sms?: boolean;
            /** Whether email notifications are enabled for this incident. */
            email?: boolean;
            /** Whether push notifications are enabled for this incident. */
            push?: boolean;
            /** Whether critical push notifications are enabled for this incident. */
            critical_alert?: boolean;
            /** Slack channels attached to the incident. */
            slack_channels?: Array<string>;
            /** Incident metadata grouped by metadata key. */
            metadata?: Record<string, Array<{
                /** Metadata value type returned by Better Stack. */
                type?: "String" | "User" | "Team" | "Policy" | "Schedule" | "SlackIntegration" | "LinearIntegration" | "JiraIntegration" | "MicrosoftTeamsWebhook" | "ZapierWebhook" | "NativeWebhook" | "PagerDutyWebhook";
                /** String value used when the metadata entry type is String. */
                value?: string;
                /** Referenced Better Stack item identifier for non-String metadata values. */
                item_id?: string | number;
                /** Referenced item name returned by Better Stack or accepted when creating metadata. */
                name?: string;
                /**
                 * Referenced user email accepted by Better Stack for User metadata values.
                 * @format email
                 */
                email?: string;
              }>>;
            [key: string]: unknown;
          };
          /** Relationships returned for the incident resource. */
          relationships?: {
            /** Monitor relationship returned for the incident. */
            monitor?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Heartbeat relationship returned for the incident. */
            heartbeat?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Webhook integration relationship returned for the incident. */
            webhook_integration?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Email integration relationship returned for the incident. */
            email_integration?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Incoming webhook relationship returned for the incident. */
            incoming_webhook?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            /** Call routing relationship returned for the incident. */
            call_routing?: {
              /** Related resource reference, or null when no related resource is linked. */
              data: {
                /** Identifier of the related Better Stack resource. */
                id: string;
                /** Type of the related Better Stack resource. */
                type: string;
              } | null;
            };
            [key: string]: unknown;
          };
        }>;
        /** Pagination links for the incident list. */
        pagination: {
          /** URL of the first page, or null when not available. */
          first: string | null;
          /** URL of the last page, or null when not available. */
          last: string | null;
          /** URL of the previous page, or null when not available. */
          prev: string | null;
          /** URL of the next page, or null when not available. */
          next: string | null;
        };
      };
    };
    /** List Better Stack metadata records for incidents or other supported owner types. */
    "better_stack.list_metadata": {
      input: {
        /**
         * Team name used when a global Better Stack API token needs explicit team scoping.
         * @minLength 1
         */
        team_name?: string;
        /**
         * Only return metadata records for this owner ID.
         * @minLength 1
         */
        owner_id?: string;
        /** Only return metadata records for this owner type. */
        owner_type?: "Monitor" | "Heartbeat" | "Incident" | "WebhookIntegration" | "EmailIntegration" | "IncomingWebhook" | "CallRouting";
        /**
         * Page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of metadata records to return per page.
         * @minimum 1
         * @maximum 250
         */
        per_page?: number;
      };
      output: {
        /** Metadata records returned by Better Stack. */
        metadata: Array<{
          /** Metadata record identifier. */
          id: string;
          /** Resource type returned by Better Stack, usually metadata. */
          type: string;
          /** Metadata record attributes. */
          attributes: {
            /** Metadata key. */
            key: string;
            /** Metadata values stored under the key. */
            values: Array<{
              /** Metadata value type returned by Better Stack. */
              type?: "String" | "User" | "Team" | "Policy" | "Schedule" | "SlackIntegration" | "LinearIntegration" | "JiraIntegration" | "MicrosoftTeamsWebhook" | "ZapierWebhook" | "NativeWebhook" | "PagerDutyWebhook";
              /** String value used when the metadata entry type is String. */
              value?: string;
              /** Referenced Better Stack item identifier for non-String metadata values. */
              item_id?: string | number;
              /** Referenced item name returned by Better Stack or accepted when creating metadata. */
              name?: string;
              /**
               * Referenced user email accepted by Better Stack for User metadata values.
               * @format email
               */
              email?: string;
            }>;
            /** Team that owns the metadata record. */
            team_name: string;
            /** Owner ID for the metadata record. */
            owner_id: string;
            /** Owner type for the metadata record. */
            owner_type: "Monitor" | "Heartbeat" | "Incident" | "WebhookIntegration" | "EmailIntegration" | "IncomingWebhook" | "CallRouting";
          };
        }>;
        /** Pagination links for the metadata list. */
        pagination: {
          /** URL of the first page, or null when not available. */
          first: string | null;
          /** URL of the last page, or null when not available. */
          last: string | null;
          /** URL of the previous page, or null when not available. */
          prev: string | null;
          /** URL of the next page, or null when not available. */
          next: string | null;
        };
      };
    };
  }
}
