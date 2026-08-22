import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a job monitor in the connected Cronly company. */
    "cronly.create_monitor": {
      input: {
        /**
         * The monitor name.
         * @minLength 1
         */
        name: string;
        /**
         * The timezone used to evaluate the cron schedule.
         * @minLength 1
         */
        timezone: string;
        /**
         * The cron schedule expression.
         * @minLength 1
         */
        schedule: string;
        /** The expected maximum job duration. */
        duration: number;
        /** The project ID used to group this monitor. */
        project_id?: number;
      };
      output: {
        /** A job monitor returned by Cronly. */
        monitor: {
          /** The numeric Cronly resource ID. */
          id: number;
          /**
           * The monitor name.
           * @minLength 1
           */
          name: string;
          /** The Cronly company ID that owns the monitor. */
          company_id: number;
          /**
           * The timezone used to evaluate the monitor schedule.
           * @minLength 1
           */
          timezone: string;
          /**
           * The cron schedule expression.
           * @minLength 1
           */
          schedule: string;
          /** The expected maximum job duration. */
          duration: number;
          [key: string]: unknown;
        };
      };
    };
    /** Create a project in the connected Cronly company. */
    "cronly.create_project": {
      input: {
        /**
         * The project name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A project returned by Cronly. */
        project: {
          /** The numeric Cronly resource ID. */
          id: number;
          /**
           * The project name.
           * @minLength 1
           */
          name: string;
          /** The Cronly company ID that owns the project. */
          company_id: number;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one Cronly job monitor by ID. */
    "cronly.delete_monitor": {
      input: {
        /** The numeric Cronly resource ID. */
        id: number;
      };
      output: {
        /** Whether Cronly accepted the delete request. */
        deleted: boolean;
        /** The numeric Cronly resource ID. */
        id: number;
      };
    };
    /** Delete one Cronly project by ID. */
    "cronly.delete_project": {
      input: {
        /** The numeric Cronly resource ID. */
        id: number;
      };
      output: {
        /** Whether Cronly accepted the delete request. */
        deleted: boolean;
        /** The numeric Cronly resource ID. */
        id: number;
      };
    };
    /** Get one Cronly job monitor by ID. */
    "cronly.get_monitor": {
      input: {
        /** The numeric Cronly resource ID. */
        id: number;
      };
      output: {
        /** A job monitor returned by Cronly. */
        monitor: {
          /** The numeric Cronly resource ID. */
          id: number;
          /**
           * The monitor name.
           * @minLength 1
           */
          name: string;
          /** The Cronly company ID that owns the monitor. */
          company_id: number;
          /**
           * The timezone used to evaluate the monitor schedule.
           * @minLength 1
           */
          timezone: string;
          /**
           * The cron schedule expression.
           * @minLength 1
           */
          schedule: string;
          /** The expected maximum job duration. */
          duration: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Cronly project by ID. */
    "cronly.get_project": {
      input: {
        /** The numeric Cronly resource ID. */
        id: number;
      };
      output: {
        /** A project returned by Cronly. */
        project: {
          /** The numeric Cronly resource ID. */
          id: number;
          /**
           * The project name.
           * @minLength 1
           */
          name: string;
          /** The Cronly company ID that owns the project. */
          company_id: number;
          [key: string]: unknown;
        };
      };
    };
    /** List job monitors in the connected Cronly company. */
    "cronly.list_monitors": {
      input: Record<string, never>;
      output: {
        /** The job monitors returned by Cronly. */
        monitors: Array<{
          /** The numeric Cronly resource ID. */
          id: number;
          /**
           * The monitor name.
           * @minLength 1
           */
          name: string;
          /** The Cronly company ID that owns the monitor. */
          company_id: number;
          /**
           * The timezone used to evaluate the monitor schedule.
           * @minLength 1
           */
          timezone: string;
          /**
           * The cron schedule expression.
           * @minLength 1
           */
          schedule: string;
          /** The expected maximum job duration. */
          duration: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List projects in the connected Cronly company. */
    "cronly.list_projects": {
      input: Record<string, never>;
      output: {
        /** The projects returned by Cronly. */
        projects: Array<{
          /** The numeric Cronly resource ID. */
          id: number;
          /**
           * The project name.
           * @minLength 1
           */
          name: string;
          /** The Cronly company ID that owns the project. */
          company_id: number;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
