import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one component on an Instatus status page. */
    "instatus.create_component": {
      input: {
        /**
         * The ID of the Instatus status page.
         * @minLength 1
         */
        pageId: string;
        /**
         * The name of the component.
         * @minLength 1
         */
        name: string;
        /** The component description. */
        description?: string;
        /** The status of an Instatus component. */
        status?: "OPERATIONAL" | "UNDERMAINTENANCE" | "DEGRADEDPERFORMANCE" | "PARTIALOUTAGE" | "MAJOROUTAGE";
        /** The order of the component on the status page. */
        order?: number;
        /** Whether to show uptime for the component. */
        showUptime?: boolean;
        /** Whether the component is a parent or grouped component. */
        grouped?: boolean;
        /** The ID of the component to group under. */
        group?: string | null;
        /** Whether the component should be archived. */
        archived?: boolean;
        /** Translations keyed by field name and then language code. */
        translations?: Record<string, Record<string, string>>;
      };
      output: {
        /** An Instatus component. */
        component: {
          /** The ID of the component. */
          id?: string;
          /** The name of the component. */
          name?: string;
          /** The component description. */
          description?: string;
          /** The status of an Instatus component. */
          status?: "OPERATIONAL" | "UNDERMAINTENANCE" | "DEGRADEDPERFORMANCE" | "PARTIALOUTAGE" | "MAJOROUTAGE";
          /** The component order on the status page. */
          order?: number | null;
          /** Whether uptime is shown for the component. */
          showUptime?: boolean;
          /** The ID of the status page that owns the component. */
          siteId?: string;
          /** The ID of the parent component group. */
          groupId?: string | null;
          /**
           * The date and time when the component was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The date and time when the component was updated.
           * @format date-time
           */
          updatedAt?: string;
          /**
           * The date and time when the component was archived.
           * @format date-time
           */
          archivedAt?: string | null;
          /** Translations keyed by field name and then language code. */
          translations?: Record<string, Record<string, string>>;
          [key: string]: unknown;
        };
      };
    };
    /** Create one incident on an Instatus status page. */
    "instatus.create_incident": {
      input: {
        /**
         * The ID of the Instatus status page.
         * @minLength 1
         */
        pageId: string;
        /**
         * The name of the incident.
         * @minLength 1
         */
        name: string;
        /** The initial incident message. */
        message?: string;
        /** The IDs of components affected by the incident. */
        components?: Array<string>;
        /**
         * The date and time when the incident started.
         * @format date-time
         */
        started?: string;
        /** The status of an Instatus incident. */
        status: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
        /** Whether to notify subscribers of the incident. */
        notify?: boolean;
        /** Whether to publish the incident to the page. */
        shouldPublish?: boolean;
        /** The statuses to apply to affected components. */
        statuses?: Array<{
          /**
           * The ID of the Instatus component.
           * @minLength 1
           */
          id: string;
          /** The status of an Instatus component. */
          status: "OPERATIONAL" | "UNDERMAINTENANCE" | "DEGRADEDPERFORMANCE" | "PARTIALOUTAGE" | "MAJOROUTAGE";
        }>;
        /** Translations keyed by field name and then language code. */
        translations?: Record<string, Record<string, string>>;
      };
      output: {
        /** An Instatus incident. */
        incident: {
          /** The ID of the incident. */
          id?: string;
          /** The name of the incident. */
          name?: string;
          /** The status of an Instatus incident. */
          status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
          /**
           * The date and time when the incident started.
           * @format date-time
           */
          started?: string;
          /** The incident duration in minutes. */
          duration?: number | null;
          /**
           * The date and time when the incident resolved.
           * @format date-time
           */
          resolved?: string | null;
          /** The updates attached to the incident. */
          updates?: Array<{
            /** The ID of the incident update. */
            id?: string;
            /** The incident update message. */
            message?: string;
            /** The HTML form of the incident update message. */
            messageHtml?: string;
            /** The status of an Instatus incident. */
            status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
            /** Whether subscribers were notified for the incident update. */
            notify?: boolean;
            /**
             * The date and time when the incident update happened.
             * @format date-time
             */
            started?: string;
            /**
             * The date and time when the incident update resolved.
             * @format date-time
             */
            ended?: string | null;
            /** The duration of the incident update in minutes. */
            duration?: number | null;
            /**
             * The date and time when the incident update was created.
             * @format date-time
             */
            createdAt?: string;
            [key: string]: unknown;
          }>;
          /** The components affected by the incident. */
          components?: Array<{
            /** The ID of the affected component. */
            id?: string;
            /** The name of the affected component. */
            name?: string;
            /** The status reported for the affected component. */
            status?: "OPERATIONAL" | "UNDERMAINTENANCE" | "DEGRADEDPERFORMANCE" | "PARTIALOUTAGE" | "MAJOROUTAGE" | "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
            /** Whether uptime is shown for the affected component. */
            showUptime?: boolean;
            [key: string]: unknown;
          }>;
          /** Translations keyed by field name and then language code. */
          translations?: Record<string, Record<string, string>>;
          [key: string]: unknown;
        };
      };
    };
    /** Create one update on an Instatus incident. */
    "instatus.create_incident_update": {
      input: {
        /**
         * The ID of the Instatus status page.
         * @minLength 1
         */
        pageId: string;
        /**
         * The ID of the Instatus incident.
         * @minLength 1
         */
        incidentId: string;
        /** The incident update message. */
        message?: string;
        /** The IDs of components affected by the incident update. */
        components: Array<string>;
        /**
         * The date and time when the incident update happened.
         * @format date-time
         */
        started?: string;
        /** The status of an Instatus incident. */
        status: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
        /** Whether to notify subscribers of the incident update. */
        notify?: boolean;
        /** The statuses to apply to affected components. */
        statuses: Array<{
          /**
           * The ID of the Instatus component.
           * @minLength 1
           */
          id: string;
          /** The status of an Instatus component. */
          status: "OPERATIONAL" | "UNDERMAINTENANCE" | "DEGRADEDPERFORMANCE" | "PARTIALOUTAGE" | "MAJOROUTAGE";
        }>;
        /** Translations keyed by field name and then language code. */
        translations?: Record<string, Record<string, string>>;
      };
      output: {
        /** A detailed Instatus incident update. */
        incidentUpdate: {
          /** The ID of the incident update. */
          id?: string;
          /** The incident update message. */
          message?: string;
          /** The HTML form of the incident update message. */
          messageHtml?: string;
          /** The status of an Instatus incident. */
          status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
          /** Whether subscribers were notified for the incident update. */
          notify?: boolean;
          /**
           * The date and time when the incident update happened.
           * @format date-time
           */
          started?: string;
          /** An Instatus incident. */
          incident?: {
            /** The ID of the incident. */
            id?: string;
            /** The name of the incident. */
            name?: string;
            /** The status of an Instatus incident. */
            status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
            /**
             * The date and time when the incident started.
             * @format date-time
             */
            started?: string;
            /** The incident duration in minutes. */
            duration?: number | null;
            /**
             * The date and time when the incident resolved.
             * @format date-time
             */
            resolved?: string | null;
            /** The updates attached to the incident. */
            updates?: Array<{
              /** The ID of the incident update. */
              id?: string;
              /** The incident update message. */
              message?: string;
              /** The HTML form of the incident update message. */
              messageHtml?: string;
              /** The status of an Instatus incident. */
              status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
              /** Whether subscribers were notified for the incident update. */
              notify?: boolean;
              /**
               * The date and time when the incident update happened.
               * @format date-time
               */
              started?: string;
              /**
               * The date and time when the incident update resolved.
               * @format date-time
               */
              ended?: string | null;
              /** The duration of the incident update in minutes. */
              duration?: number | null;
              /**
               * The date and time when the incident update was created.
               * @format date-time
               */
              createdAt?: string;
              [key: string]: unknown;
            }>;
            /** The components affected by the incident. */
            components?: Array<{
              /** The ID of the affected component. */
              id?: string;
              /** The name of the affected component. */
              name?: string;
              /** The status reported for the affected component. */
              status?: "OPERATIONAL" | "UNDERMAINTENANCE" | "DEGRADEDPERFORMANCE" | "PARTIALOUTAGE" | "MAJOROUTAGE" | "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
              /** Whether uptime is shown for the affected component. */
              showUptime?: boolean;
              [key: string]: unknown;
            }>;
            /** Translations keyed by field name and then language code. */
            translations?: Record<string, Record<string, string>>;
            [key: string]: unknown;
          };
          /** Translations keyed by field name and then language code. */
          translations?: Record<string, Record<string, string>>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one Instatus component by ID. */
    "instatus.delete_component": {
      input: {
        /**
         * The ID of the Instatus status page.
         * @minLength 1
         */
        pageId: string;
        /**
         * The ID of the Instatus component.
         * @minLength 1
         */
        componentId: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /** The ID of the deleted component. */
        id: string;
      };
    };
    /** Delete one Instatus incident by ID. */
    "instatus.delete_incident": {
      input: {
        /**
         * The ID of the Instatus status page.
         * @minLength 1
         */
        pageId: string;
        /**
         * The ID of the Instatus incident.
         * @minLength 1
         */
        incidentId: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /** The ID of the deleted incident. */
        id: string;
      };
    };
    /** Delete one Instatus incident update by ID. */
    "instatus.delete_incident_update": {
      input: {
        /**
         * The ID of the Instatus status page.
         * @minLength 1
         */
        pageId: string;
        /**
         * The ID of the Instatus incident.
         * @minLength 1
         */
        incidentId: string;
        /**
         * The ID of the Instatus incident update.
         * @minLength 1
         */
        incidentUpdateId: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /** The ID of the deleted incident update. */
        id: string;
      };
    };
    /** Get one Instatus component by ID. */
    "instatus.get_component": {
      input: {
        /**
         * The ID of the Instatus status page.
         * @minLength 1
         */
        pageId: string;
        /**
         * The ID of the Instatus component.
         * @minLength 1
         */
        componentId: string;
      };
      output: {
        /** An Instatus component. */
        component: {
          /** The ID of the component. */
          id?: string;
          /** The name of the component. */
          name?: string;
          /** The component description. */
          description?: string;
          /** The status of an Instatus component. */
          status?: "OPERATIONAL" | "UNDERMAINTENANCE" | "DEGRADEDPERFORMANCE" | "PARTIALOUTAGE" | "MAJOROUTAGE";
          /** The component order on the status page. */
          order?: number | null;
          /** Whether uptime is shown for the component. */
          showUptime?: boolean;
          /** The ID of the status page that owns the component. */
          siteId?: string;
          /** The ID of the parent component group. */
          groupId?: string | null;
          /**
           * The date and time when the component was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The date and time when the component was updated.
           * @format date-time
           */
          updatedAt?: string;
          /**
           * The date and time when the component was archived.
           * @format date-time
           */
          archivedAt?: string | null;
          /** Translations keyed by field name and then language code. */
          translations?: Record<string, Record<string, string>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Instatus incident by ID. */
    "instatus.get_incident": {
      input: {
        /**
         * The ID of the Instatus status page.
         * @minLength 1
         */
        pageId: string;
        /**
         * The ID of the Instatus incident.
         * @minLength 1
         */
        incidentId: string;
      };
      output: {
        /** An Instatus incident. */
        incident: {
          /** The ID of the incident. */
          id?: string;
          /** The name of the incident. */
          name?: string;
          /** The status of an Instatus incident. */
          status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
          /**
           * The date and time when the incident started.
           * @format date-time
           */
          started?: string;
          /** The incident duration in minutes. */
          duration?: number | null;
          /**
           * The date and time when the incident resolved.
           * @format date-time
           */
          resolved?: string | null;
          /** The updates attached to the incident. */
          updates?: Array<{
            /** The ID of the incident update. */
            id?: string;
            /** The incident update message. */
            message?: string;
            /** The HTML form of the incident update message. */
            messageHtml?: string;
            /** The status of an Instatus incident. */
            status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
            /** Whether subscribers were notified for the incident update. */
            notify?: boolean;
            /**
             * The date and time when the incident update happened.
             * @format date-time
             */
            started?: string;
            /**
             * The date and time when the incident update resolved.
             * @format date-time
             */
            ended?: string | null;
            /** The duration of the incident update in minutes. */
            duration?: number | null;
            /**
             * The date and time when the incident update was created.
             * @format date-time
             */
            createdAt?: string;
            [key: string]: unknown;
          }>;
          /** The components affected by the incident. */
          components?: Array<{
            /** The ID of the affected component. */
            id?: string;
            /** The name of the affected component. */
            name?: string;
            /** The status reported for the affected component. */
            status?: "OPERATIONAL" | "UNDERMAINTENANCE" | "DEGRADEDPERFORMANCE" | "PARTIALOUTAGE" | "MAJOROUTAGE" | "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
            /** Whether uptime is shown for the affected component. */
            showUptime?: boolean;
            [key: string]: unknown;
          }>;
          /** Translations keyed by field name and then language code. */
          translations?: Record<string, Record<string, string>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Instatus incident update by ID. */
    "instatus.get_incident_update": {
      input: {
        /**
         * The ID of the Instatus status page.
         * @minLength 1
         */
        pageId: string;
        /**
         * The ID of the Instatus incident.
         * @minLength 1
         */
        incidentId: string;
        /**
         * The ID of the Instatus incident update.
         * @minLength 1
         */
        incidentUpdateId: string;
      };
      output: {
        /** A detailed Instatus incident update. */
        incidentUpdate: {
          /** The ID of the incident update. */
          id?: string;
          /** The incident update message. */
          message?: string;
          /** The HTML form of the incident update message. */
          messageHtml?: string;
          /** The status of an Instatus incident. */
          status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
          /** Whether subscribers were notified for the incident update. */
          notify?: boolean;
          /**
           * The date and time when the incident update happened.
           * @format date-time
           */
          started?: string;
          /** An Instatus incident. */
          incident?: {
            /** The ID of the incident. */
            id?: string;
            /** The name of the incident. */
            name?: string;
            /** The status of an Instatus incident. */
            status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
            /**
             * The date and time when the incident started.
             * @format date-time
             */
            started?: string;
            /** The incident duration in minutes. */
            duration?: number | null;
            /**
             * The date and time when the incident resolved.
             * @format date-time
             */
            resolved?: string | null;
            /** The updates attached to the incident. */
            updates?: Array<{
              /** The ID of the incident update. */
              id?: string;
              /** The incident update message. */
              message?: string;
              /** The HTML form of the incident update message. */
              messageHtml?: string;
              /** The status of an Instatus incident. */
              status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
              /** Whether subscribers were notified for the incident update. */
              notify?: boolean;
              /**
               * The date and time when the incident update happened.
               * @format date-time
               */
              started?: string;
              /**
               * The date and time when the incident update resolved.
               * @format date-time
               */
              ended?: string | null;
              /** The duration of the incident update in minutes. */
              duration?: number | null;
              /**
               * The date and time when the incident update was created.
               * @format date-time
               */
              createdAt?: string;
              [key: string]: unknown;
            }>;
            /** The components affected by the incident. */
            components?: Array<{
              /** The ID of the affected component. */
              id?: string;
              /** The name of the affected component. */
              name?: string;
              /** The status reported for the affected component. */
              status?: "OPERATIONAL" | "UNDERMAINTENANCE" | "DEGRADEDPERFORMANCE" | "PARTIALOUTAGE" | "MAJOROUTAGE" | "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
              /** Whether uptime is shown for the affected component. */
              showUptime?: boolean;
              [key: string]: unknown;
            }>;
            /** Translations keyed by field name and then language code. */
            translations?: Record<string, Record<string, string>>;
            [key: string]: unknown;
          };
          /** Translations keyed by field name and then language code. */
          translations?: Record<string, Record<string, string>>;
          [key: string]: unknown;
        };
      };
    };
    /** List components on an Instatus status page. */
    "instatus.list_components": {
      input: {
        /**
         * The ID of the Instatus status page.
         * @minLength 1
         */
        pageId: string;
        /**
         * The page number for pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items per page, up to 100.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** The components returned by Instatus. */
        components: Array<{
          /** The ID of the component. */
          id?: string;
          /** The name of the component. */
          name?: string;
          /** The component description. */
          description?: string;
          /** The status of an Instatus component. */
          status?: "OPERATIONAL" | "UNDERMAINTENANCE" | "DEGRADEDPERFORMANCE" | "PARTIALOUTAGE" | "MAJOROUTAGE";
          /** The component order on the status page. */
          order?: number | null;
          /** Whether uptime is shown for the component. */
          showUptime?: boolean;
          /** The ID of the status page that owns the component. */
          siteId?: string;
          /** The ID of the parent component group. */
          groupId?: string | null;
          /**
           * The date and time when the component was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The date and time when the component was updated.
           * @format date-time
           */
          updatedAt?: string;
          /**
           * The date and time when the component was archived.
           * @format date-time
           */
          archivedAt?: string | null;
          /** Translations keyed by field name and then language code. */
          translations?: Record<string, Record<string, string>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List incidents on an Instatus status page. */
    "instatus.list_incidents": {
      input: {
        /**
         * The ID of the Instatus status page.
         * @minLength 1
         */
        pageId: string;
        /**
         * The page number for pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items per page, up to 100.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** Incident statuses to include. */
        statuses?: Array<"INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED">;
        /** Incident statuses to exclude. */
        excludedStatuses?: Array<"INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED">;
      };
      output: {
        /** The incidents returned by Instatus. */
        incidents: Array<{
          /** The ID of the incident. */
          id?: string;
          /** The name of the incident. */
          name?: string;
          /** The status of an Instatus incident. */
          status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
          /**
           * The date and time when the incident started.
           * @format date-time
           */
          started?: string;
          /** The incident duration in minutes. */
          duration?: number | null;
          /**
           * The date and time when the incident resolved.
           * @format date-time
           */
          resolved?: string | null;
          /** The updates attached to the incident. */
          updates?: Array<{
            /** The ID of the incident update. */
            id?: string;
            /** The incident update message. */
            message?: string;
            /** The HTML form of the incident update message. */
            messageHtml?: string;
            /** The status of an Instatus incident. */
            status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
            /** Whether subscribers were notified for the incident update. */
            notify?: boolean;
            /**
             * The date and time when the incident update happened.
             * @format date-time
             */
            started?: string;
            /**
             * The date and time when the incident update resolved.
             * @format date-time
             */
            ended?: string | null;
            /** The duration of the incident update in minutes. */
            duration?: number | null;
            /**
             * The date and time when the incident update was created.
             * @format date-time
             */
            createdAt?: string;
            [key: string]: unknown;
          }>;
          /** The components affected by the incident. */
          components?: Array<{
            /** The ID of the affected component. */
            id?: string;
            /** The name of the affected component. */
            name?: string;
            /** The status reported for the affected component. */
            status?: "OPERATIONAL" | "UNDERMAINTENANCE" | "DEGRADEDPERFORMANCE" | "PARTIALOUTAGE" | "MAJOROUTAGE" | "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
            /** Whether uptime is shown for the affected component. */
            showUptime?: boolean;
            [key: string]: unknown;
          }>;
          /** Translations keyed by field name and then language code. */
          translations?: Record<string, Record<string, string>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Instatus status pages in the authenticated account. */
    "instatus.list_status_pages": {
      input: {
        /**
         * The page number for pagination.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items per page, up to 100.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** The status pages returned by Instatus. */
        statusPages: Array<{
          /** The ID of the status page. */
          id?: string;
          /** The subdomain of the status page. */
          subdomain?: string;
          /** The name of the status page. */
          name?: string;
          /** The computed status of an Instatus status page. */
          status?: "UP" | "HASISSUES" | "ALLUNDERMAINTENANCE" | "ALLDEGRADEDPERFORMANCE" | "ALLPARTIALOUTAGE" | "ALLMINOROUTAGE" | "ALLMAJOROUTAGE" | "SOMEUNDERMAINTENANCE" | "SOMEDEGRADEDPERFORMANCE" | "SOMEPARTIALOUTAGE" | "SOMEMINOROUTAGE" | "SOMEMAJOROUTAGE" | "ONEUNDERMAINTENANCE" | "ONEDEGRADEDPERFORMANCE" | "ONEPARTIALOUTAGE" | "ONEMINOROUTAGE" | "ONEMAJOROUTAGE";
          /** The logo URL of the status page. */
          logoUrl?: string | null;
          /** The favicon URL of the status page. */
          faviconUrl?: string | null;
          /** The website URL of the status page. */
          websiteUrl?: string | null;
          /** The custom domain of the status page. */
          customDomain?: string | null;
          /** The public email shown on the status page. */
          publicEmail?: string | null;
          /**
           * The secure link for a private status page.
           * @format uri
           */
          secureLink?: string | null;
          /**
           * The date and time when the status page was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The date and time when the status page was updated.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update one Instatus component by ID. */
    "instatus.update_component": {
      input: {
        /**
         * The ID of the Instatus status page.
         * @minLength 1
         */
        pageId: string;
        /**
         * The ID of the Instatus component.
         * @minLength 1
         */
        componentId: string;
        /**
         * The name of the component.
         * @minLength 1
         */
        name?: string;
        /** The component description. */
        description?: string;
        /** The status of an Instatus component. */
        status?: "OPERATIONAL" | "UNDERMAINTENANCE" | "DEGRADEDPERFORMANCE" | "PARTIALOUTAGE" | "MAJOROUTAGE";
        /** The order of the component on the status page. */
        order?: number;
        /** Whether to show uptime for the component. */
        showUptime?: boolean;
        /** Whether the component is a parent or grouped component. */
        grouped?: boolean;
        /** Whether the component should be archived. */
        archived?: boolean;
        /** Translations keyed by field name and then language code. */
        translations?: Record<string, Record<string, string>>;
      };
      output: {
        /** An Instatus component. */
        component: {
          /** The ID of the component. */
          id?: string;
          /** The name of the component. */
          name?: string;
          /** The component description. */
          description?: string;
          /** The status of an Instatus component. */
          status?: "OPERATIONAL" | "UNDERMAINTENANCE" | "DEGRADEDPERFORMANCE" | "PARTIALOUTAGE" | "MAJOROUTAGE";
          /** The component order on the status page. */
          order?: number | null;
          /** Whether uptime is shown for the component. */
          showUptime?: boolean;
          /** The ID of the status page that owns the component. */
          siteId?: string;
          /** The ID of the parent component group. */
          groupId?: string | null;
          /**
           * The date and time when the component was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The date and time when the component was updated.
           * @format date-time
           */
          updatedAt?: string;
          /**
           * The date and time when the component was archived.
           * @format date-time
           */
          archivedAt?: string | null;
          /** Translations keyed by field name and then language code. */
          translations?: Record<string, Record<string, string>>;
          [key: string]: unknown;
        };
      };
    };
    /** Update one Instatus incident by ID. */
    "instatus.update_incident": {
      input: {
        /**
         * The ID of the Instatus status page.
         * @minLength 1
         */
        pageId: string;
        /**
         * The ID of the Instatus incident.
         * @minLength 1
         */
        incidentId: string;
        /**
         * The name of the incident.
         * @minLength 1
         */
        name?: string;
        /** The IDs of components affected by the incident. */
        components?: Array<string>;
        /**
         * The date and time when the incident started.
         * @format date-time
         */
        started?: string;
        /** The status of an Instatus incident. */
        status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
        /** Whether to notify subscribers of the incident. */
        notify?: boolean;
        /** The statuses to apply to affected components. */
        statuses?: Array<{
          /**
           * The ID of the Instatus component.
           * @minLength 1
           */
          id: string;
          /** The status of an Instatus component. */
          status: "OPERATIONAL" | "UNDERMAINTENANCE" | "DEGRADEDPERFORMANCE" | "PARTIALOUTAGE" | "MAJOROUTAGE";
        }>;
        /** Translations keyed by field name and then language code. */
        translations?: Record<string, Record<string, string>>;
      };
      output: {
        /** An Instatus incident. */
        incident: {
          /** The ID of the incident. */
          id?: string;
          /** The name of the incident. */
          name?: string;
          /** The status of an Instatus incident. */
          status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
          /**
           * The date and time when the incident started.
           * @format date-time
           */
          started?: string;
          /** The incident duration in minutes. */
          duration?: number | null;
          /**
           * The date and time when the incident resolved.
           * @format date-time
           */
          resolved?: string | null;
          /** The updates attached to the incident. */
          updates?: Array<{
            /** The ID of the incident update. */
            id?: string;
            /** The incident update message. */
            message?: string;
            /** The HTML form of the incident update message. */
            messageHtml?: string;
            /** The status of an Instatus incident. */
            status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
            /** Whether subscribers were notified for the incident update. */
            notify?: boolean;
            /**
             * The date and time when the incident update happened.
             * @format date-time
             */
            started?: string;
            /**
             * The date and time when the incident update resolved.
             * @format date-time
             */
            ended?: string | null;
            /** The duration of the incident update in minutes. */
            duration?: number | null;
            /**
             * The date and time when the incident update was created.
             * @format date-time
             */
            createdAt?: string;
            [key: string]: unknown;
          }>;
          /** The components affected by the incident. */
          components?: Array<{
            /** The ID of the affected component. */
            id?: string;
            /** The name of the affected component. */
            name?: string;
            /** The status reported for the affected component. */
            status?: "OPERATIONAL" | "UNDERMAINTENANCE" | "DEGRADEDPERFORMANCE" | "PARTIALOUTAGE" | "MAJOROUTAGE" | "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
            /** Whether uptime is shown for the affected component. */
            showUptime?: boolean;
            [key: string]: unknown;
          }>;
          /** Translations keyed by field name and then language code. */
          translations?: Record<string, Record<string, string>>;
          [key: string]: unknown;
        };
      };
    };
    /** Update one Instatus incident update by ID. */
    "instatus.update_incident_update": {
      input: {
        /**
         * The ID of the Instatus status page.
         * @minLength 1
         */
        pageId: string;
        /**
         * The ID of the Instatus incident.
         * @minLength 1
         */
        incidentId: string;
        /**
         * The ID of the Instatus incident update.
         * @minLength 1
         */
        incidentUpdateId: string;
        /** The incident update message. */
        message?: string;
        /** The IDs of components affected by the incident update. */
        components?: Array<string>;
        /**
         * The date and time when the incident update happened.
         * @format date-time
         */
        started?: string;
        /** The status of an Instatus incident. */
        status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
        /** Whether to notify subscribers of the incident update. */
        notify?: boolean;
        /** The statuses to apply to affected components. */
        statuses?: Array<{
          /**
           * The ID of the Instatus component.
           * @minLength 1
           */
          id: string;
          /** The status of an Instatus component. */
          status: "OPERATIONAL" | "UNDERMAINTENANCE" | "DEGRADEDPERFORMANCE" | "PARTIALOUTAGE" | "MAJOROUTAGE";
        }>;
        /** Translations keyed by field name and then language code. */
        translations?: Record<string, Record<string, string>>;
      };
      output: {
        /** A detailed Instatus incident update. */
        incidentUpdate: {
          /** The ID of the incident update. */
          id?: string;
          /** The incident update message. */
          message?: string;
          /** The HTML form of the incident update message. */
          messageHtml?: string;
          /** The status of an Instatus incident. */
          status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
          /** Whether subscribers were notified for the incident update. */
          notify?: boolean;
          /**
           * The date and time when the incident update happened.
           * @format date-time
           */
          started?: string;
          /** An Instatus incident. */
          incident?: {
            /** The ID of the incident. */
            id?: string;
            /** The name of the incident. */
            name?: string;
            /** The status of an Instatus incident. */
            status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
            /**
             * The date and time when the incident started.
             * @format date-time
             */
            started?: string;
            /** The incident duration in minutes. */
            duration?: number | null;
            /**
             * The date and time when the incident resolved.
             * @format date-time
             */
            resolved?: string | null;
            /** The updates attached to the incident. */
            updates?: Array<{
              /** The ID of the incident update. */
              id?: string;
              /** The incident update message. */
              message?: string;
              /** The HTML form of the incident update message. */
              messageHtml?: string;
              /** The status of an Instatus incident. */
              status?: "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
              /** Whether subscribers were notified for the incident update. */
              notify?: boolean;
              /**
               * The date and time when the incident update happened.
               * @format date-time
               */
              started?: string;
              /**
               * The date and time when the incident update resolved.
               * @format date-time
               */
              ended?: string | null;
              /** The duration of the incident update in minutes. */
              duration?: number | null;
              /**
               * The date and time when the incident update was created.
               * @format date-time
               */
              createdAt?: string;
              [key: string]: unknown;
            }>;
            /** The components affected by the incident. */
            components?: Array<{
              /** The ID of the affected component. */
              id?: string;
              /** The name of the affected component. */
              name?: string;
              /** The status reported for the affected component. */
              status?: "OPERATIONAL" | "UNDERMAINTENANCE" | "DEGRADEDPERFORMANCE" | "PARTIALOUTAGE" | "MAJOROUTAGE" | "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";
              /** Whether uptime is shown for the affected component. */
              showUptime?: boolean;
              [key: string]: unknown;
            }>;
            /** Translations keyed by field name and then language code. */
            translations?: Record<string, Record<string, string>>;
            [key: string]: unknown;
          };
          /** Translations keyed by field name and then language code. */
          translations?: Record<string, Record<string, string>>;
          [key: string]: unknown;
        };
      };
    };
  }
}
