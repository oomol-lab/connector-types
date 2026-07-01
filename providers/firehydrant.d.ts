import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a FireHydrant incident using a JSON-friendly request body. */
    "firehydrant.create_incident": {
      input: {
        /**
         * The incident name.
         * @minLength 1
         */
        name: string;
        /** The incident summary. */
        summary?: string;
        /** The customer impact summary. */
        customerImpactSummary?: string;
        /** The incident description. */
        description?: string;
        /** The incident priority. */
        priority?: string;
        /** The incident severity. */
        severity?: string;
        /**
         * The severity condition ID.
         * @minLength 1
         */
        severityConditionId?: string;
        /**
         * The severity impact ID.
         * @minLength 1
         */
        severityImpactId?: string;
        /** FireHydrant labels keyed by label name. */
        labels?: Record<string, unknown>;
        /** Tags to attach to the incident. */
        tagList?: Array<string>;
        /** Impacted infrastructure to attach to the incident. */
        impacts?: Array<{
          /** The impacted infrastructure type. */
          type: "environment" | "functionality" | "service";
          /**
           * The impacted infrastructure ID.
           * @minLength 1
           */
          id: string;
          /**
           * The severity matrix condition ID for the impact.
           * @minLength 1
           */
          conditionId: string;
        }>;
        /** Team IDs to assign to the incident. */
        teamIds?: Array<string>;
        /** Whether the incident should be restricted. */
        restricted?: boolean;
        /**
         * The incident type ID.
         * @minLength 1
         */
        incidentTypeId?: string;
        /** Whether to skip values copied from the incident type. */
        skipIncidentTypeValues?: boolean;
      };
      output: {
        /** A normalized FireHydrant incident. */
        incident: {
          /** The incident UUID. */
          id: string | null;
          /** The incident name. */
          name: string | null;
          /** The incident number. */
          number: number | null;
          /** The incident summary. */
          summary: string | null;
          /** The incident description. */
          description: string | null;
          /** The customer impact summary. */
          customerImpactSummary: string | null;
          /** The current incident milestone slug. */
          currentMilestone: string | null;
          /** The incident severity. */
          severity: string | null;
          /** The incident priority. */
          priority: string | null;
          /** When the incident was created. */
          createdAt: string | null;
          /** When the incident started. */
          startedAt: string | null;
          /** When the incident was last updated. */
          updatedAt: string | null;
          /** The FireHydrant incident URL. */
          incidentUrl: string | null;
          /** Whether the incident is active. */
          active: boolean | null;
          /** Whether the incident is restricted. */
          restricted: boolean | null;
          /** Services impacted by the incident. */
          services: Array<{
            /** The related entity identifier. */
            id: string | null;
            /** The related entity name. */
            name: string | null;
            /** The related entity slug. */
            slug: string | null;
            /** The raw related entity object returned by FireHydrant. */
            raw: Record<string, unknown>;
          }>;
          /** Environments impacted by the incident. */
          environments: Array<{
            /** The related entity identifier. */
            id: string | null;
            /** The related entity name. */
            name: string | null;
            /** The related entity slug. */
            slug: string | null;
            /** The raw related entity object returned by FireHydrant. */
            raw: Record<string, unknown>;
          }>;
          /** Tags attached to the incident. */
          tags: Array<string>;
          /** FireHydrant labels keyed by label name. */
          labels: Record<string, unknown> | null;
          /** The raw incident object returned by FireHydrant. */
          raw: Record<string, unknown>;
        };
        /** The raw incident response returned by FireHydrant. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a single FireHydrant environment by UUID or slug. */
    "firehydrant.get_environment": {
      input: {
        /**
         * The environment UUID or slug to load.
         * @minLength 1
         */
        environmentId: string;
      };
      output: {
        /** A normalized FireHydrant catalog entry. */
        environment: {
          /** The catalog entry UUID. */
          id: string | null;
          /** The catalog entry name. */
          name: string | null;
          /** The catalog entry slug. */
          slug: string | null;
          /** The catalog entry description. */
          description: string | null;
          /** The service tier when FireHydrant provides one. */
          serviceTier: number | null;
          /** When the catalog entry was created. */
          createdAt: string | null;
          /** When the catalog entry was last updated. */
          updatedAt: string | null;
          /** Active incident identifiers associated with this catalog entry. */
          activeIncidents: Array<string>;
          /** FireHydrant labels keyed by label name. */
          labels: Record<string, unknown> | null;
          /** A compact FireHydrant related entity. */
          owner: {
            /** The related entity identifier. */
            id: string | null;
            /** The related entity name. */
            name: string | null;
            /** The related entity slug. */
            slug: string | null;
            /** The raw related entity object returned by FireHydrant. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw catalog entry object returned by FireHydrant. */
          raw: Record<string, unknown>;
        };
        /** The raw environment response returned by FireHydrant. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a single FireHydrant incident by ID. */
    "firehydrant.get_incident": {
      input: {
        /**
         * The incident ID to load.
         * @minLength 1
         */
        incidentId: string;
      };
      output: {
        /** A normalized FireHydrant incident. */
        incident: {
          /** The incident UUID. */
          id: string | null;
          /** The incident name. */
          name: string | null;
          /** The incident number. */
          number: number | null;
          /** The incident summary. */
          summary: string | null;
          /** The incident description. */
          description: string | null;
          /** The customer impact summary. */
          customerImpactSummary: string | null;
          /** The current incident milestone slug. */
          currentMilestone: string | null;
          /** The incident severity. */
          severity: string | null;
          /** The incident priority. */
          priority: string | null;
          /** When the incident was created. */
          createdAt: string | null;
          /** When the incident started. */
          startedAt: string | null;
          /** When the incident was last updated. */
          updatedAt: string | null;
          /** The FireHydrant incident URL. */
          incidentUrl: string | null;
          /** Whether the incident is active. */
          active: boolean | null;
          /** Whether the incident is restricted. */
          restricted: boolean | null;
          /** Services impacted by the incident. */
          services: Array<{
            /** The related entity identifier. */
            id: string | null;
            /** The related entity name. */
            name: string | null;
            /** The related entity slug. */
            slug: string | null;
            /** The raw related entity object returned by FireHydrant. */
            raw: Record<string, unknown>;
          }>;
          /** Environments impacted by the incident. */
          environments: Array<{
            /** The related entity identifier. */
            id: string | null;
            /** The related entity name. */
            name: string | null;
            /** The related entity slug. */
            slug: string | null;
            /** The raw related entity object returned by FireHydrant. */
            raw: Record<string, unknown>;
          }>;
          /** Tags attached to the incident. */
          tags: Array<string>;
          /** FireHydrant labels keyed by label name. */
          labels: Record<string, unknown> | null;
          /** The raw incident object returned by FireHydrant. */
          raw: Record<string, unknown>;
        };
        /** The raw incident response returned by FireHydrant. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a single FireHydrant service by UUID or slug. */
    "firehydrant.get_service": {
      input: {
        /**
         * The service UUID or slug to load.
         * @minLength 1
         */
        serviceId: string;
      };
      output: {
        /** A normalized FireHydrant catalog entry. */
        service: {
          /** The catalog entry UUID. */
          id: string | null;
          /** The catalog entry name. */
          name: string | null;
          /** The catalog entry slug. */
          slug: string | null;
          /** The catalog entry description. */
          description: string | null;
          /** The service tier when FireHydrant provides one. */
          serviceTier: number | null;
          /** When the catalog entry was created. */
          createdAt: string | null;
          /** When the catalog entry was last updated. */
          updatedAt: string | null;
          /** Active incident identifiers associated with this catalog entry. */
          activeIncidents: Array<string>;
          /** FireHydrant labels keyed by label name. */
          labels: Record<string, unknown> | null;
          /** A compact FireHydrant related entity. */
          owner: {
            /** The related entity identifier. */
            id: string | null;
            /** The related entity name. */
            name: string | null;
            /** The related entity slug. */
            slug: string | null;
            /** The raw related entity object returned by FireHydrant. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw catalog entry object returned by FireHydrant. */
          raw: Record<string, unknown>;
        };
        /** The raw service response returned by FireHydrant. */
        raw: Record<string, unknown>;
      };
    };
    /** List FireHydrant environments with pagination and search filters. */
    "firehydrant.list_environments": {
      input: {
        /**
         * The page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to request per page. FireHydrant allows up to 200.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /** A free-text query to search matching records. */
        query?: string;
        /** A name query to search matching records. */
        name?: string;
      };
      output: {
        /** The environments returned by FireHydrant. */
        environments: Array<{
          /** The catalog entry UUID. */
          id: string | null;
          /** The catalog entry name. */
          name: string | null;
          /** The catalog entry slug. */
          slug: string | null;
          /** The catalog entry description. */
          description: string | null;
          /** The service tier when FireHydrant provides one. */
          serviceTier: number | null;
          /** When the catalog entry was created. */
          createdAt: string | null;
          /** When the catalog entry was last updated. */
          updatedAt: string | null;
          /** Active incident identifiers associated with this catalog entry. */
          activeIncidents: Array<string>;
          /** FireHydrant labels keyed by label name. */
          labels: Record<string, unknown> | null;
          /** A compact FireHydrant related entity. */
          owner: {
            /** The related entity identifier. */
            id: string | null;
            /** The related entity name. */
            name: string | null;
            /** The related entity slug. */
            slug: string | null;
            /** The raw related entity object returned by FireHydrant. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw catalog entry object returned by FireHydrant. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by FireHydrant. */
        pagination: {
          /** The total number of matching records. */
          count: number | null;
          /** The current page number. */
          page: number | null;
          /** The number of records returned on this page. */
          items: number | null;
          /** The total number of available pages. */
          pages: number | null;
          /** The last page number. */
          last: number | null;
          /** The previous page number. */
          prev: number | null;
          /** The next page number. */
          next: number | null;
          /** The raw pagination object returned by FireHydrant. */
          raw: Record<string, unknown>;
        } | null;
        /** The raw list response returned by FireHydrant. */
        raw: Record<string, unknown>;
      };
    };
    /** List FireHydrant incidents with stable pagination and common filters. */
    "firehydrant.list_incidents": {
      input: {
        /**
         * The page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to request per page. FireHydrant allows up to 200.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /** A text query that searches incident name, summary, and description. */
        query?: string;
        /** A query to search incidents by name. */
        name?: string;
        /** The incident status to filter by. */
        status?: string;
        /** A comma-separated list of service IDs, or is_empty for incidents with no impacted services. */
        services?: string;
        /** A comma-separated list of environment IDs, or is_empty for incidents with no impacted environments. */
        environments?: string;
        /** A comma-separated list of tags. */
        tags?: string;
        /** The tag matching strategy. */
        tagMatchStrategy?: "any" | "match_all" | "exclude";
        /** Whether to return archived incidents. */
        archived?: boolean;
        /**
         * Only return incidents created at or after this time.
         * @format date-time
         */
        createdAtOrAfter?: string;
        /**
         * Only return incidents created at or before this time.
         * @format date-time
         */
        createdAtOrBefore?: string;
        /**
         * Only return incidents updated after this time.
         * @format date-time
         */
        updatedAfter?: string;
        /**
         * Only return incidents updated before this time.
         * @format date-time
         */
        updatedBefore?: string;
      };
      output: {
        /** The incidents returned by FireHydrant. */
        incidents: Array<{
          /** The incident UUID. */
          id: string | null;
          /** The incident name. */
          name: string | null;
          /** The incident number. */
          number: number | null;
          /** The incident summary. */
          summary: string | null;
          /** The incident description. */
          description: string | null;
          /** The customer impact summary. */
          customerImpactSummary: string | null;
          /** The current incident milestone slug. */
          currentMilestone: string | null;
          /** The incident severity. */
          severity: string | null;
          /** The incident priority. */
          priority: string | null;
          /** When the incident was created. */
          createdAt: string | null;
          /** When the incident started. */
          startedAt: string | null;
          /** When the incident was last updated. */
          updatedAt: string | null;
          /** The FireHydrant incident URL. */
          incidentUrl: string | null;
          /** Whether the incident is active. */
          active: boolean | null;
          /** Whether the incident is restricted. */
          restricted: boolean | null;
          /** Services impacted by the incident. */
          services: Array<{
            /** The related entity identifier. */
            id: string | null;
            /** The related entity name. */
            name: string | null;
            /** The related entity slug. */
            slug: string | null;
            /** The raw related entity object returned by FireHydrant. */
            raw: Record<string, unknown>;
          }>;
          /** Environments impacted by the incident. */
          environments: Array<{
            /** The related entity identifier. */
            id: string | null;
            /** The related entity name. */
            name: string | null;
            /** The related entity slug. */
            slug: string | null;
            /** The raw related entity object returned by FireHydrant. */
            raw: Record<string, unknown>;
          }>;
          /** Tags attached to the incident. */
          tags: Array<string>;
          /** FireHydrant labels keyed by label name. */
          labels: Record<string, unknown> | null;
          /** The raw incident object returned by FireHydrant. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by FireHydrant. */
        pagination: {
          /** The total number of matching records. */
          count: number | null;
          /** The current page number. */
          page: number | null;
          /** The number of records returned on this page. */
          items: number | null;
          /** The total number of available pages. */
          pages: number | null;
          /** The last page number. */
          last: number | null;
          /** The previous page number. */
          prev: number | null;
          /** The next page number. */
          next: number | null;
          /** The raw pagination object returned by FireHydrant. */
          raw: Record<string, unknown>;
        } | null;
        /** The raw list response returned by FireHydrant. */
        raw: Record<string, unknown>;
      };
    };
    /** List FireHydrant services with pagination and search filters. */
    "firehydrant.list_services": {
      input: {
        /**
         * The page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to request per page. FireHydrant allows up to 200.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /** A free-text query to search matching records. */
        query?: string;
        /** A name query to search matching records. */
        name?: string;
      };
      output: {
        /** The services returned by FireHydrant. */
        services: Array<{
          /** The catalog entry UUID. */
          id: string | null;
          /** The catalog entry name. */
          name: string | null;
          /** The catalog entry slug. */
          slug: string | null;
          /** The catalog entry description. */
          description: string | null;
          /** The service tier when FireHydrant provides one. */
          serviceTier: number | null;
          /** When the catalog entry was created. */
          createdAt: string | null;
          /** When the catalog entry was last updated. */
          updatedAt: string | null;
          /** Active incident identifiers associated with this catalog entry. */
          activeIncidents: Array<string>;
          /** FireHydrant labels keyed by label name. */
          labels: Record<string, unknown> | null;
          /** A compact FireHydrant related entity. */
          owner: {
            /** The related entity identifier. */
            id: string | null;
            /** The related entity name. */
            name: string | null;
            /** The related entity slug. */
            slug: string | null;
            /** The raw related entity object returned by FireHydrant. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw catalog entry object returned by FireHydrant. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by FireHydrant. */
        pagination: {
          /** The total number of matching records. */
          count: number | null;
          /** The current page number. */
          page: number | null;
          /** The number of records returned on this page. */
          items: number | null;
          /** The total number of available pages. */
          pages: number | null;
          /** The last page number. */
          last: number | null;
          /** The previous page number. */
          prev: number | null;
          /** The next page number. */
          next: number | null;
          /** The raw pagination object returned by FireHydrant. */
          raw: Record<string, unknown>;
        } | null;
        /** The raw list response returned by FireHydrant. */
        raw: Record<string, unknown>;
      };
    };
  }
}
