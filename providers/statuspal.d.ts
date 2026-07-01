import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one StatusPal incident by ID. */
    "statuspal.get_incident": {
      input: {
        /**
         * The StatusPal status page subdomain.
         * @minLength 1
         */
        subdomain: string;
        /** The StatusPal incident ID. */
        incidentId: number;
      };
      output: {
        /** A StatusPal incident. */
        incident: {
          /** The StatusPal incident ID. */
          id?: number;
          /** The incident title. */
          title?: string;
          /** The incident type key. */
          type?: string;
          /**
           * When the incident or maintenance starts.
           * @format date-time
           */
          starts_at?: string;
          /**
           * When the incident or maintenance ends.
           * @format date-time
           */
          ends_at?: string | null;
          /** The affected service IDs. */
          service_ids?: Array<number>;
          /** The public URL for the incident. */
          url?: string;
          [key: string]: unknown;
        };
        /** The raw StatusPal incident response. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one StatusPal service by ID. */
    "statuspal.get_service": {
      input: {
        /**
         * The StatusPal status page subdomain.
         * @minLength 1
         */
        subdomain: string;
        /** The StatusPal service ID. */
        serviceId: number;
      };
      output: {
        /** A StatusPal status service. */
        service: {
          /** The StatusPal service ID. */
          id?: number;
          /** The service name. */
          name?: string;
          /** The current incident type key for the service. */
          current_incident_type?: string | null;
          /** Nested child services returned by StatusPal. */
          children?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** The raw StatusPal service response. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the current status reported on a public StatusPal status page. */
    "statuspal.get_status_page_status": {
      input: {
        /**
         * The StatusPal status page subdomain.
         * @minLength 1
         */
        subdomain: string;
      };
      output: {
        /** A StatusPal status page summary object. */
        statusPage: {
          /** The URL of the website the status page is about. */
          url?: string;
          /** The primary timezone the status page uses to display incidents. */
          time_zone?: string;
          /** The subdomain that identifies the status page. */
          subdomain?: string;
          /** The name of the company or service the status page is about. */
          name?: string;
          /** The current incident type key for the status page. */
          current_incident_type?: string | null;
          [key: string]: unknown;
        };
        /** The raw StatusPal status response. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a StatusPal page summary including services and active incidents. */
    "statuspal.get_status_page_summary": {
      input: {
        /**
         * The StatusPal status page subdomain.
         * @minLength 1
         */
        subdomain: string;
      };
      output: {
        /** A StatusPal status page summary object. */
        statusPage: {
          /** The URL of the website the status page is about. */
          url?: string;
          /** The primary timezone the status page uses to display incidents. */
          time_zone?: string;
          /** The subdomain that identifies the status page. */
          subdomain?: string;
          /** The name of the company or service the status page is about. */
          name?: string;
          /** The current incident type key for the status page. */
          current_incident_type?: string | null;
          [key: string]: unknown;
        };
        /** The services returned in the summary. */
        services: Array<{
          /** The StatusPal service ID. */
          id?: number;
          /** The service name. */
          name?: string;
          /** The current incident type key for the service. */
          current_incident_type?: string | null;
          /** Nested child services returned by StatusPal. */
          children?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Active incidents returned in the summary. */
        incidents: Array<{
          /** The StatusPal incident ID. */
          id?: number;
          /** The incident title. */
          title?: string;
          /** The incident type key. */
          type?: string;
          /**
           * When the incident or maintenance starts.
           * @format date-time
           */
          starts_at?: string;
          /**
           * When the incident or maintenance ends.
           * @format date-time
           */
          ends_at?: string | null;
          /** The affected service IDs. */
          service_ids?: Array<number>;
          /** The public URL for the incident. */
          url?: string;
          [key: string]: unknown;
        }>;
        /** Active maintenances returned in the summary. */
        maintenances: Array<{
          /** The StatusPal incident ID. */
          id?: number;
          /** The incident title. */
          title?: string;
          /** The incident type key. */
          type?: string;
          /**
           * When the incident or maintenance starts.
           * @format date-time
           */
          starts_at?: string;
          /**
           * When the incident or maintenance ends.
           * @format date-time
           */
          ends_at?: string | null;
          /** The affected service IDs. */
          service_ids?: Array<number>;
          /** The public URL for the incident. */
          url?: string;
          [key: string]: unknown;
        }>;
        /** Upcoming maintenances returned in the summary. */
        upcomingMaintenances: Array<{
          /** The StatusPal incident ID. */
          id?: number;
          /** The incident title. */
          title?: string;
          /** The incident type key. */
          type?: string;
          /**
           * When the incident or maintenance starts.
           * @format date-time
           */
          starts_at?: string;
          /**
           * When the incident or maintenance ends.
           * @format date-time
           */
          ends_at?: string | null;
          /** The affected service IDs. */
          service_ids?: Array<number>;
          /** The public URL for the incident. */
          url?: string;
          [key: string]: unknown;
        }>;
        /** Featured information notices returned in the summary. */
        infoNotices: Array<Record<string, unknown>>;
        /** The current status type for the status page summary. */
        currentStatusType: string | null;
        /** The raw StatusPal summary response. */
        raw: Record<string, unknown>;
      };
    };
    /** List StatusPal incidents with cursor, limit, and type filters. */
    "statuspal.list_incidents": {
      input: {
        /**
         * The StatusPal status page subdomain.
         * @minLength 1
         */
        subdomain: string;
        /**
         * Pagination cursor for items before this position.
         * @minLength 1
         */
        before?: string;
        /**
         * Pagination cursor for items after this position.
         * @minLength 1
         */
        after?: string;
        /**
         * The number of incidents to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Filter incidents by incident type key.
         * @minLength 1
         */
        type?: string;
      };
      output: {
        /** The incidents returned by StatusPal. */
        incidents: Array<{
          /** The StatusPal incident ID. */
          id?: number;
          /** The incident title. */
          title?: string;
          /** The incident type key. */
          type?: string;
          /**
           * When the incident or maintenance starts.
           * @format date-time
           */
          starts_at?: string;
          /**
           * When the incident or maintenance ends.
           * @format date-time
           */
          ends_at?: string | null;
          /** The affected service IDs. */
          service_ids?: Array<number>;
          /** The public URL for the incident. */
          url?: string;
          [key: string]: unknown;
        }>;
        /** The raw StatusPal incidents response. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List services configured on a StatusPal status page. */
    "statuspal.list_services": {
      input: {
        /**
         * The StatusPal status page subdomain.
         * @minLength 1
         */
        subdomain: string;
      };
      output: {
        /** The services returned by StatusPal. */
        services: Array<{
          /** The StatusPal service ID. */
          id?: number;
          /** The service name. */
          name?: string;
          /** The current incident type key for the service. */
          current_incident_type?: string | null;
          /** Nested child services returned by StatusPal. */
          children?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** The raw StatusPal services response. */
        raw: Array<Record<string, unknown>>;
      };
    };
  }
}
