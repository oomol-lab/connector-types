import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a component on a Statuspage page. */
    "statuspage.create_component": {
      input: {
        /**
         * The Statuspage page identifier.
         * @minLength 1
         */
        pageId: string;
        /** The component fields sent to Statuspage when creating a component. */
        component: {
          /**
           * The component name.
           * @minLength 1
           */
          name: string;
          /** The Statuspage component status. */
          status?: "operational" | "under_maintenance" | "degraded_performance" | "partial_outage" | "major_outage";
          /**
           * The component description.
           * @minLength 1
           */
          description?: string;
          /**
           * The Statuspage component group identifier.
           * @minLength 1
           */
          groupId?: string;
          /** Whether Statuspage should show the component only when degraded. */
          onlyShowIfDegraded?: boolean;
          /** Whether Statuspage should showcase the component. */
          showcase?: boolean;
          /**
           * The component start date.
           * @format date
           */
          startDate?: string;
        };
      };
      output: {
        /** A Statuspage component object. */
        component: {
          /** The component id. */
          id?: string;
          /** The component name. */
          name?: string;
          /** The component status returned by Statuspage. */
          status?: string;
          /** The component group id when the component belongs to a group. */
          groupId?: string | null;
          /** The raw Statuspage component object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw component object returned by Statuspage. */
        raw: Record<string, unknown>;
      };
    };
    /** Create an incident on a Statuspage page. */
    "statuspage.create_incident": {
      input: {
        /**
         * The Statuspage page identifier.
         * @minLength 1
         */
        pageId: string;
        /** The incident fields sent to Statuspage when creating an incident. */
        incident: {
          /**
           * The incident name.
           * @minLength 1
           */
          name: string;
          /** The Statuspage incident status. */
          status?: "investigating" | "identified" | "monitoring" | "resolved" | "postmortem";
          /**
           * The incident update body.
           * @minLength 1
           */
          body?: string;
          /** The Statuspage incident impact override. */
          impactOverride?: "none" | "minor" | "major" | "critical" | "maintenance";
          /**
           * Component status changes for this incident.
           * @minItems 1
           */
          components?: Array<{
            /**
             * The Statuspage component identifier.
             * @minLength 1
             */
            componentId: string;
            /** The Statuspage component status. */
            status: "operational" | "under_maintenance" | "degraded_performance" | "partial_outage" | "major_outage";
          }>;
          /** Whether Statuspage should deliver incident notifications. */
          deliverNotifications?: boolean;
          /** Whether Statuspage should automatically transition components into maintenance. */
          autoTransitionToMaintenanceState?: boolean;
          /** Whether Statuspage should automatically transition components back to operational. */
          autoTransitionToOperationalState?: boolean;
          /** Whether Statuspage should deliver notifications when an automatic transition ends. */
          autoTransitionDeliverNotificationsAtEnd?: boolean;
          /** Whether Statuspage should tweet at the start. */
          autoTweetAtBeginning?: boolean;
          /** Whether Statuspage should tweet on completion. */
          autoTweetOnCompletion?: boolean;
          /** Whether Statuspage should tweet on incident creation. */
          autoTweetOnCreation?: boolean;
          /** Whether Statuspage should tweet one hour before scheduled maintenance. */
          autoTweetOneHourBefore?: boolean;
          /**
           * The date used by Statuspage for a backfilled incident.
           * @format date
           */
          backfillDate?: string;
          /** Whether the incident is backfilled. */
          backfilled?: boolean;
          /**
           * The scheduled start time for a scheduled incident.
           * @format date-time
           */
          scheduledFor?: string;
          /**
           * The scheduled end time for a scheduled incident.
           * @format date-time
           */
          scheduledUntil?: string;
          /** Whether Statuspage should send a scheduled reminder. */
          scheduledRemindPrior?: boolean;
          /** Whether Statuspage should automatically move scheduled maintenance in progress. */
          scheduledAutoInProgress?: boolean;
          /** Whether Statuspage should automatically complete scheduled maintenance. */
          scheduledAutoCompleted?: boolean;
          /** Additional provider-defined metadata returned by Statuspage. */
          metadata?: Record<string, unknown>;
        };
      };
      output: {
        /** A Statuspage incident object. */
        incident: {
          /** The incident id. */
          id?: string;
          /** The incident name. */
          name?: string;
          /** The incident status returned by Statuspage. */
          status?: string;
          /** The incident impact returned by Statuspage. */
          impact?: string | null;
          /**
           * The Statuspage incident shortlink when present.
           * @format uri
           */
          shortlink?: string | null;
          /** The raw Statuspage incident object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw incident object returned by Statuspage. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a Statuspage component. */
    "statuspage.delete_component": {
      input: {
        /**
         * The Statuspage page identifier.
         * @minLength 1
         */
        pageId: string;
        /**
         * The Statuspage component identifier.
         * @minLength 1
         */
        componentId: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /** The raw delete response returned by Statuspage. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a Statuspage incident. */
    "statuspage.delete_incident": {
      input: {
        /**
         * The Statuspage page identifier.
         * @minLength 1
         */
        pageId: string;
        /**
         * The Statuspage incident identifier.
         * @minLength 1
         */
        incidentId: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /** The raw delete response returned by Statuspage. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the inbound automation email address for a Statuspage page. */
    "statuspage.get_automation_email": {
      input: {
        /**
         * The Statuspage page identifier.
         * @minLength 1
         */
        pageId: string;
      };
      output: {
        /**
         * The automation email address used by Statuspage for email automation.
         * @format email
         */
        automationEmail: string;
        /** The raw automation email response returned by Statuspage. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Statuspage incident by id. */
    "statuspage.get_incident": {
      input: {
        /**
         * The Statuspage page identifier.
         * @minLength 1
         */
        pageId: string;
        /**
         * The Statuspage incident identifier.
         * @minLength 1
         */
        incidentId: string;
      };
      output: {
        /** A Statuspage incident object. */
        incident: {
          /** The incident id. */
          id?: string;
          /** The incident name. */
          name?: string;
          /** The incident status returned by Statuspage. */
          status?: string;
          /** The incident impact returned by Statuspage. */
          impact?: string | null;
          /**
           * The Statuspage incident shortlink when present.
           * @format uri
           */
          shortlink?: string | null;
          /** The raw Statuspage incident object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw incident object returned by Statuspage. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Statuspage page by id. */
    "statuspage.get_page": {
      input: {
        /**
         * The Statuspage page identifier.
         * @minLength 1
         */
        pageId: string;
      };
      output: {
        /** A Statuspage page object. */
        page: {
          /** The page id. */
          id?: string;
          /** The page name. */
          name?: string;
          /** The page subdomain when present. */
          subdomain?: string | null;
          /**
           * The public page URL when Statuspage returns one.
           * @format uri
           */
          url?: string | null;
          /** The raw Statuspage page object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw page object returned by Statuspage. */
        raw: Record<string, unknown>;
      };
    };
    /** List components for a Statuspage page. */
    "statuspage.list_components": {
      input: {
        /**
         * The Statuspage page identifier.
         * @minLength 1
         */
        pageId: string;
      };
      output: {
        /** The components returned by Statuspage. */
        components: Array<{
          /** The component id. */
          id?: string;
          /** The component name. */
          name?: string;
          /** The component status returned by Statuspage. */
          status?: string;
          /** The component group id when the component belongs to a group. */
          groupId?: string | null;
          /** The raw Statuspage component object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw component objects returned by Statuspage. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List activity events for a Statuspage page. */
    "statuspage.list_events": {
      input: {
        /**
         * The Statuspage page identifier.
         * @minLength 1
         */
        pageId: string;
        /**
         * Maximum number of events to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The Statuspage pagination page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Search query used by Statuspage to filter events.
         * @minLength 1
         */
        q?: string;
      };
      output: {
        /** The events returned by Statuspage. */
        events: Array<{
          /** The event id when present. */
          id?: string | null;
          /** The event type when present. */
          type?: string | null;
          /** The timestamp when Statuspage created the event. */
          createdAt?: string | null;
          /** The raw Statuspage event object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw event objects returned by Statuspage. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List incidents for a Statuspage page. */
    "statuspage.list_incidents": {
      input: {
        /**
         * The Statuspage page identifier.
         * @minLength 1
         */
        pageId: string;
        /**
         * Maximum number of incidents to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The Statuspage pagination page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Search query used by Statuspage to filter incidents.
         * @minLength 1
         */
        q?: string;
      };
      output: {
        /** The incidents returned by Statuspage. */
        incidents: Array<{
          /** The incident id. */
          id?: string;
          /** The incident name. */
          name?: string;
          /** The incident status returned by Statuspage. */
          status?: string;
          /** The incident impact returned by Statuspage. */
          impact?: string | null;
          /**
           * The Statuspage incident shortlink when present.
           * @format uri
           */
          shortlink?: string | null;
          /** The raw Statuspage incident object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw incident objects returned by Statuspage. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List Statuspage pages available to the API token. */
    "statuspage.list_pages": {
      input: Record<string, never>;
      output: {
        /** The pages returned by Statuspage. */
        pages: Array<{
          /** The page id. */
          id?: string;
          /** The page name. */
          name?: string;
          /** The page subdomain when present. */
          subdomain?: string | null;
          /**
           * The public page URL when Statuspage returns one.
           * @format uri
           */
          url?: string | null;
          /** The raw Statuspage page object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw page objects returned by Statuspage. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Update a Statuspage component. */
    "statuspage.update_component": {
      input: {
        /**
         * The Statuspage page identifier.
         * @minLength 1
         */
        pageId: string;
        /**
         * The Statuspage component identifier.
         * @minLength 1
         */
        componentId: string;
        /** The component fields sent to Statuspage when updating a component. */
        component: {
          /**
           * The component name.
           * @minLength 1
           */
          name?: string;
          /** The Statuspage component status. */
          status?: "operational" | "under_maintenance" | "degraded_performance" | "partial_outage" | "major_outage";
          /**
           * The component description.
           * @minLength 1
           */
          description?: string;
          /**
           * The Statuspage component group identifier.
           * @minLength 1
           */
          groupId?: string;
          /** Whether Statuspage should show the component only when degraded. */
          onlyShowIfDegraded?: boolean;
          /** Whether Statuspage should showcase the component. */
          showcase?: boolean;
          /**
           * The component start date.
           * @format date
           */
          startDate?: string;
        };
      };
      output: {
        /** A Statuspage component object. */
        component: {
          /** The component id. */
          id?: string;
          /** The component name. */
          name?: string;
          /** The component status returned by Statuspage. */
          status?: string;
          /** The component group id when the component belongs to a group. */
          groupId?: string | null;
          /** The raw Statuspage component object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw component object returned by Statuspage. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Statuspage incident. */
    "statuspage.update_incident": {
      input: {
        /**
         * The Statuspage page identifier.
         * @minLength 1
         */
        pageId: string;
        /**
         * The Statuspage incident identifier.
         * @minLength 1
         */
        incidentId: string;
        /** The incident fields sent to Statuspage when updating an incident. */
        incident: {
          /**
           * The incident name.
           * @minLength 1
           */
          name?: string;
          /** The Statuspage incident status. */
          status?: "investigating" | "identified" | "monitoring" | "resolved" | "postmortem";
          /**
           * The incident update body.
           * @minLength 1
           */
          body?: string;
          /** The Statuspage incident impact override. */
          impactOverride?: "none" | "minor" | "major" | "critical" | "maintenance";
          /**
           * Component status changes for this incident.
           * @minItems 1
           */
          components?: Array<{
            /**
             * The Statuspage component identifier.
             * @minLength 1
             */
            componentId: string;
            /** The Statuspage component status. */
            status: "operational" | "under_maintenance" | "degraded_performance" | "partial_outage" | "major_outage";
          }>;
          /** Whether Statuspage should deliver incident notifications. */
          deliverNotifications?: boolean;
          /** Additional provider-defined metadata returned by Statuspage. */
          metadata?: Record<string, unknown>;
        };
      };
      output: {
        /** A Statuspage incident object. */
        incident: {
          /** The incident id. */
          id?: string;
          /** The incident name. */
          name?: string;
          /** The incident status returned by Statuspage. */
          status?: string;
          /** The incident impact returned by Statuspage. */
          impact?: string | null;
          /**
           * The Statuspage incident shortlink when present.
           * @format uri
           */
          shortlink?: string | null;
          /** The raw Statuspage incident object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw incident object returned by Statuspage. */
        raw: Record<string, unknown>;
      };
    };
  }
}
