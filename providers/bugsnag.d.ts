import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the latest event recorded on a Bugsnag error. */
    "bugsnag.get_latest_error_event": {
      input: {
        /**
         * The Bugsnag error identifier.
         * @minLength 1
         */
        errorId: string;
      };
      output: {
        /** The latest event returned for the Bugsnag error. */
        event: {
          /** The Bugsnag event identifier. */
          id: string;
          /** The Bugsnag event severity. */
          severity?: string;
          /** The application context associated with the event. */
          context?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Bugsnag organization by organization ID. */
    "bugsnag.get_organization": {
      input: {
        /**
         * The Bugsnag organization identifier to retrieve.
         * @minLength 1
         */
        organizationId: string;
      };
      output: {
        /** The requested Bugsnag organization. */
        organization: {
          /** The Bugsnag organization identifier. */
          id: string;
          /** The Bugsnag organization name. */
          name?: string;
          /** The Bugsnag organization slug. */
          slug?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List the events recorded on a Bugsnag error. */
    "bugsnag.list_error_events": {
      input: {
        /**
         * The Bugsnag project identifier.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Bugsnag error identifier.
         * @minLength 1
         */
        errorId: string;
        /**
         * The ISO 8601 timestamp used as the time anchor for the event list.
         * @format date-time
         */
        base?: string;
        /** The sort direction for the error events. */
        direction?: "asc" | "desc";
        /**
         * The number of events to return per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** The events returned for the Bugsnag error. */
        events: Array<{
          /** The Bugsnag event identifier. */
          id: string;
          /** The Bugsnag event severity. */
          severity?: string;
          /** The application context associated with the event. */
          context?: string;
          [key: string]: unknown;
        }>;
        /** The pagination metadata for the error event list. */
        pagination: {
          /** The absolute URL for the next page returned by the Bugsnag Link header. */
          nextUrl: string | null;
          /** The total result count returned by the Bugsnag X-Total-Count header. */
          totalCount: number | null;
        };
      };
    };
    /** List the projects that belong to a Bugsnag organization. */
    "bugsnag.list_organization_projects": {
      input: {
        /**
         * The Bugsnag organization identifier that owns the projects.
         * @minLength 1
         */
        organizationId: string;
        /**
         * The project-name search query.
         * @minLength 1
         */
        query?: string;
        /** The field used to sort Bugsnag organization projects. */
        sort?: "created_at" | "name" | "favorite";
        /** The sort direction for the project list. */
        direction?: "asc" | "desc";
        /**
         * The number of projects to return per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** The projects returned for the Bugsnag organization. */
        projects: Array<{
          /** The Bugsnag project identifier. */
          id: string;
          /** The Bugsnag project name. */
          name?: string;
          /** The Bugsnag project slug. */
          slug?: string;
          [key: string]: unknown;
        }>;
        /** The pagination metadata for the project list. */
        pagination: {
          /** The absolute URL for the next page returned by the Bugsnag Link header. */
          nextUrl: string | null;
          /** The total result count returned by the Bugsnag X-Total-Count header. */
          totalCount: number | null;
        };
      };
    };
    /** List the organizations accessible to the current Bugsnag user. */
    "bugsnag.list_organizations": {
      input: {
        /** Whether to return only organizations where the current user is an admin. */
        admin?: boolean;
        /**
         * The number of organizations to return per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** The organizations accessible to the current Bugsnag user. */
        organizations: Array<{
          /** The Bugsnag organization identifier. */
          id: string;
          /** The Bugsnag organization name. */
          name?: string;
          /** The Bugsnag organization slug. */
          slug?: string;
          [key: string]: unknown;
        }>;
        /** The pagination metadata for the organization list. */
        pagination: {
          /** The absolute URL for the next page returned by the Bugsnag Link header. */
          nextUrl: string | null;
          /** The total result count returned by the Bugsnag X-Total-Count header. */
          totalCount: number | null;
        };
      };
    };
    /** List the errors reported on a Bugsnag project. */
    "bugsnag.list_project_errors": {
      input: {
        /**
         * The Bugsnag project identifier.
         * @minLength 1
         */
        projectId: string;
        /**
         * The ISO 8601 timestamp used as the time anchor for the error list.
         * @format date-time
         */
        base?: string;
        /** The field used to sort the project errors. */
        sort?: "last_seen" | "first_seen" | "users" | "events" | "unsorted";
        /** The sort direction for the project errors. */
        direction?: "asc" | "desc";
        /**
         * The number of errors to return per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** The errors returned for the Bugsnag project. */
        errors: Array<{
          /** The Bugsnag error identifier. */
          id: string;
          /** The Bugsnag error class. */
          error_class?: string;
          /** The application context associated with the error. */
          context?: string;
          [key: string]: unknown;
        }>;
        /** The pagination metadata for the error list. */
        pagination: {
          /** The absolute URL for the next page returned by the Bugsnag Link header. */
          nextUrl: string | null;
          /** The total result count returned by the Bugsnag X-Total-Count header. */
          totalCount: number | null;
        };
      };
    };
    /** List the releases associated with a Bugsnag project. */
    "bugsnag.list_project_releases": {
      input: {
        /**
         * The Bugsnag project identifier.
         * @minLength 1
         */
        projectId: string;
        /**
         * The release stage used to filter the project releases.
         * @minLength 1
         */
        releaseStage?: string;
        /**
         * The ISO 8601 timestamp used as the upper time bound for the project releases.
         * @format date-time
         */
        base?: string;
        /** The field used to sort the project releases. */
        sort?: "timestamp" | "percent_of_sessions";
        /**
         * The numeric offset used to paginate project releases.
         * @minimum 0
         */
        offset?: number;
        /**
         * The number of releases to return per page.
         * @minimum 1
         * @maximum 10
         */
        perPage?: number;
      };
      output: {
        /** The releases returned for the Bugsnag project. */
        releases: Array<{
          /** The Bugsnag release identifier. */
          id: string;
          /** The release stage reported by Bugsnag. */
          release_stage?: string;
          /** The application version for the release. */
          version?: string;
          [key: string]: unknown;
        }>;
        /** The pagination metadata for the project releases. */
        pagination: {
          /** The absolute URL for the next page returned by the Bugsnag Link header. */
          nextUrl: string | null;
          /** The total result count returned by the Bugsnag X-Total-Count header. */
          totalCount: number | null;
        };
      };
    };
  }
}
