import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Workiz job by its unique identifier. */
    "workiz.get_job": {
      input: {
        /**
         * The unique Workiz job UUID.
         * @minLength 1
         */
        uuid: string;
      };
      output: {
        /** The Workiz job record. */
        job: Record<string, unknown>;
      };
    };
    /** Get one Workiz lead by its unique identifier. */
    "workiz.get_lead": {
      input: {
        /**
         * The unique Workiz lead UUID.
         * @minLength 1
         */
        uuid: string;
      };
      output: {
        /** The Workiz lead record. */
        lead: Record<string, unknown>;
      };
    };
    /** List Workiz jobs with date, offset, open-state, and status filters. */
    "workiz.list_jobs": {
      input: {
        /**
         * Return records from this date through today.
         * @format date
         */
        startDate?: string;
        /**
         * The zero-based record offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        records?: number;
        /** Whether to exclude completed and canceled records. */
        onlyOpen?: boolean;
        /**
         * The Workiz statuses to include.
         * @minItems 1
         */
        statuses?: Array<string>;
      };
      output: {
        /** The jobs returned by Workiz. */
        jobs: Array<Record<string, unknown>>;
      };
    };
    /** List Workiz leads with date, offset, open-state, and status filters. */
    "workiz.list_leads": {
      input: {
        /**
         * Return records from this date through today.
         * @format date
         */
        startDate?: string;
        /**
         * The zero-based record offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        records?: number;
        /** Whether to exclude completed and canceled records. */
        onlyOpen?: boolean;
        /**
         * The Workiz statuses to include.
         * @minItems 1
         */
        statuses?: Array<string>;
      };
      output: {
        /** The leads returned by Workiz. */
        leads: Array<Record<string, unknown>>;
      };
    };
    /** List active team members in the connected Workiz account. */
    "workiz.list_team_members": {
      input: Record<string, never>;
      output: {
        /** The active team members returned by Workiz. */
        teamMembers: Array<Record<string, unknown>>;
      };
    };
  }
}
