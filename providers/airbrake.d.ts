import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details for one Airbrake deploy. */
    "airbrake.get_deploy": {
      input: {
        /**
         * The Airbrake project integer identifier.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The Airbrake deploy integer identifier.
         * @exclusiveMinimum 0
         */
        deployId: number;
      };
      output: {
        /** A normalized Airbrake deploy. */
        deploy: {
          /** The Airbrake deploy identifier. */
          id: number | null;
          /** The deploy environment when returned by Airbrake. */
          environment: string | null;
          /** The deploy username when returned by Airbrake. */
          username: string | null;
          /** The deploy revision when returned by Airbrake. */
          revision: string | null;
          /** The deploy version when returned by Airbrake. */
          version: string | null;
          /** The raw Airbrake deploy object. */
          raw: Record<string, unknown>;
        };
        /** The raw Airbrake deploy response. */
        raw: Record<string, unknown>;
      };
    };
    /** Get details for one Airbrake error group. */
    "airbrake.get_group": {
      input: {
        /**
         * The Airbrake project integer identifier.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The Airbrake group integer identifier.
         * @exclusiveMinimum 0
         */
        groupId: number;
      };
      output: {
        /** A normalized Airbrake error group. */
        group: {
          /** The Airbrake group identifier. */
          id: number | null;
          /** The error class returned by Airbrake. */
          errorClass: string | null;
          /** The error message returned by Airbrake. */
          errorMessage: string | null;
          /** The number of notices in the group. */
          noticeCount: number | null;
          /** The last notice timestamp returned by Airbrake. */
          lastNoticeAt: string | null;
          /** The raw Airbrake group object. */
          raw: Record<string, unknown>;
        };
        /** The raw Airbrake group response. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Airbrake processing status for a notice UUID. */
    "airbrake.get_notice_status": {
      input: {
        /**
         * The Airbrake project integer identifier.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The Airbrake notice UUID returned by notice creation.
         * @minLength 1
         */
        noticeUuid: string;
      };
      output: {
        /** The Airbrake notice processing status. */
        status: string | null;
        /** The Airbrake group identifier when the notice was grouped. */
        groupId: number | null;
        /** The Airbrake notice status message when present. */
        message: string | null;
        /** The raw Airbrake notice status object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get details for one Airbrake project. */
    "airbrake.get_project": {
      input: {
        /**
         * The Airbrake project integer identifier.
         * @exclusiveMinimum 0
         */
        projectId: number;
      };
      output: {
        /** A normalized Airbrake project. */
        project: {
          /** The Airbrake project identifier. */
          id: number | null;
          /** The Airbrake project name. */
          name: string | null;
          /** The raw Airbrake project object. */
          raw: Record<string, unknown>;
        };
        /** The raw Airbrake project response. */
        raw: Record<string, unknown>;
      };
    };
    /** List deploys for one Airbrake project. */
    "airbrake.list_deploys": {
      input: {
        /**
         * The Airbrake project integer identifier.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The one-based Airbrake page number to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The deploys returned by Airbrake. */
        deploys: Array<{
          /** The Airbrake deploy identifier. */
          id: number | null;
          /** The deploy environment when returned by Airbrake. */
          environment: string | null;
          /** The deploy username when returned by Airbrake. */
          username: string | null;
          /** The deploy revision when returned by Airbrake. */
          revision: string | null;
          /** The deploy version when returned by Airbrake. */
          version: string | null;
          /** The raw Airbrake deploy object. */
          raw: Record<string, unknown>;
        }>;
        /** The total number of records reported by Airbrake. */
        count: number | null;
        /** The page number reported by Airbrake. */
        page: number | null;
        /** The raw Airbrake deploys response. */
        raw: Record<string, unknown>;
      };
    };
    /** List error groups for one Airbrake project with optional filters. */
    "airbrake.list_groups": {
      input: {
        /**
         * The Airbrake project integer identifier.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The one-based Airbrake page number to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The Airbrake deploy integer identifier.
         * @exclusiveMinimum 0
         */
        deployId?: number;
        /** Whether to return archived Airbrake groups. */
        archived?: boolean;
        /** Whether to return muted Airbrake groups. */
        muted?: boolean;
        /**
         * Return groups created after this Airbrake start_time value.
         * @minLength 1
         */
        startTime?: string;
        /**
         * Return groups created before this Airbrake end_time value.
         * @minLength 1
         */
        endTime?: string;
        /** The Airbrake group sort order. */
        order?: "last_notice" | "notice_count" | "weight" | "created";
      };
      output: {
        /** The groups returned by Airbrake. */
        groups: Array<{
          /** The Airbrake group identifier. */
          id: number | null;
          /** The error class returned by Airbrake. */
          errorClass: string | null;
          /** The error message returned by Airbrake. */
          errorMessage: string | null;
          /** The number of notices in the group. */
          noticeCount: number | null;
          /** The last notice timestamp returned by Airbrake. */
          lastNoticeAt: string | null;
          /** The raw Airbrake group object. */
          raw: Record<string, unknown>;
        }>;
        /** The total number of records reported by Airbrake. */
        count: number | null;
        /** The page number reported by Airbrake. */
        page: number | null;
        /** The raw Airbrake groups response. */
        raw: Record<string, unknown>;
      };
    };
    /** List notices for one Airbrake error group. */
    "airbrake.list_notices": {
      input: {
        /**
         * The Airbrake project integer identifier.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The Airbrake group integer identifier.
         * @exclusiveMinimum 0
         */
        groupId: number;
        /**
         * The one-based Airbrake page number to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Filter notices by Airbrake app version.
         * @minLength 1
         */
        version?: string;
      };
      output: {
        /** The notices returned by Airbrake. */
        notices: Array<{
          /** The Airbrake notice identifier. */
          id: string | null;
          /** The notice message returned by Airbrake. */
          message: string | null;
          /** The notice creation timestamp returned by Airbrake. */
          createdAt: string | null;
          /** The raw Airbrake notice object. */
          raw: Record<string, unknown>;
        }>;
        /** The total number of records reported by Airbrake. */
        count: number | null;
        /** The page number reported by Airbrake. */
        page: number | null;
        /** The raw Airbrake notices response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Airbrake projects visible to the User API key. */
    "airbrake.list_projects": {
      input: {
        /**
         * The one-based Airbrake page number to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The projects returned by Airbrake. */
        projects: Array<{
          /** The Airbrake project identifier. */
          id: number | null;
          /** The Airbrake project name. */
          name: string | null;
          /** The raw Airbrake project object. */
          raw: Record<string, unknown>;
        }>;
        /** The total number of records reported by Airbrake. */
        count: number | null;
        /** The page number reported by Airbrake. */
        page: number | null;
        /** The raw Airbrake projects response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
