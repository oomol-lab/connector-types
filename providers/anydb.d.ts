import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a structured record in an AnyDB database. */
    "anydb.create_record": {
      input: {
        /**
         * The AnyDB team identifier.
         * @minLength 1
         */
        teamid: string;
        /**
         * The AnyDB database identifier.
         * @minLength 1
         */
        adbid: string;
        /**
         * The display name of the new record.
         * @minLength 1
         */
        name: string;
        /**
         * An optional parent record identifier to attach the new record to.
         * @minLength 1
         */
        attach?: string;
        /**
         * An optional AnyDB template identifier.
         * @minLength 1
         */
        template?: string;
        /** The record cells keyed by their AnyDB cell positions. */
        content?: Record<string, unknown>;
      };
      output: {
        /** An AnyDB record returned by the API. */
        record: {
          /** The stable metadata fields that identify the AnyDB record. */
          meta: {
            /**
             * The AnyDB record identifier.
             * @minLength 1
             */
            adoid: string;
            /**
             * The identifier of the database containing the record.
             * @minLength 1
             */
            adbid: string;
            /**
             * The identifier of the team containing the record.
             * @minLength 1
             */
            teamid: string;
            /** The display name of the record. */
            name: string;
            [key: string]: unknown;
          };
          /** The record cells keyed by their AnyDB cell positions. */
          content?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one AnyDB record with its metadata and cell content. */
    "anydb.get_record": {
      input: {
        /**
         * The AnyDB team identifier.
         * @minLength 1
         */
        teamid: string;
        /**
         * The AnyDB database identifier.
         * @minLength 1
         */
        adbid: string;
        /**
         * The AnyDB record identifier.
         * @minLength 1
         */
        adoid: string;
      };
      output: {
        /** An AnyDB record returned by the API. */
        record: {
          /** The stable metadata fields that identify the AnyDB record. */
          meta: {
            /**
             * The AnyDB record identifier.
             * @minLength 1
             */
            adoid: string;
            /**
             * The identifier of the database containing the record.
             * @minLength 1
             */
            adbid: string;
            /**
             * The identifier of the team containing the record.
             * @minLength 1
             */
            teamid: string;
            /** The display name of the record. */
            name: string;
            [key: string]: unknown;
          };
          /** The record cells keyed by their AnyDB cell positions. */
          content?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List the AnyDB databases in a team. */
    "anydb.list_databases": {
      input: {
        /**
         * The AnyDB team identifier.
         * @minLength 1
         */
        teamid: string;
      };
      output: {
        /** The databases in the selected team. */
        databases: Array<{
          /**
           * The AnyDB database identifier.
           * @minLength 1
           */
          adbid: string;
          /**
           * The identifier of the team that owns the database.
           * @minLength 1
           */
          teamid: string;
          /** The display name of the AnyDB database. */
          name: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List records in an AnyDB database with cursor pagination and optional hierarchy filters. */
    "anydb.list_records": {
      input: {
        /**
         * The AnyDB team identifier.
         * @minLength 1
         */
        teamid: string;
        /**
         * The AnyDB database identifier.
         * @minLength 1
         */
        adbid: string;
        /**
         * An optional parent record identifier used to list children.
         * @minLength 1
         */
        parentid?: string;
        /**
         * An optional template identifier used to filter records.
         * @minLength 1
         */
        templateid?: string;
        /**
         * An optional template name used to filter records.
         * @minLength 1
         */
        templatename?: string;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        pagesize?: number;
        /**
         * The pagination marker returned by the previous page.
         * @minLength 1
         */
        lastmarker?: string;
      };
      output: {
        /** The records in this page. */
        items: Array<Record<string, unknown>>;
        /** The marker to pass when requesting the next page. */
        lastmarker?: string;
        /** Whether another page is available. */
        hasmore?: boolean;
        /**
         * The total number of matching records when provided.
         * @minimum 0
         */
        total?: number;
      };
    };
    /** List the AnyDB teams accessible to the connected account. */
    "anydb.list_teams": {
      input: Record<string, never>;
      output: {
        /** The accessible AnyDB teams. */
        teams: Array<{
          /**
           * The AnyDB team identifier.
           * @minLength 1
           */
          teamid: string;
          /** The display name of the AnyDB team. */
          name: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search records in an AnyDB database by keyword. */
    "anydb.search_records": {
      input: {
        /**
         * The AnyDB team identifier.
         * @minLength 1
         */
        teamid: string;
        /**
         * The AnyDB database identifier.
         * @minLength 1
         */
        adbid: string;
        /**
         * The keyword to search for.
         * @minLength 1
         */
        search: string;
        /**
         * The maximum number of matching records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The matching AnyDB records. */
        records: Array<{
          /** The stable metadata fields that identify the AnyDB record. */
          meta: {
            /**
             * The AnyDB record identifier.
             * @minLength 1
             */
            adoid: string;
            /**
             * The identifier of the database containing the record.
             * @minLength 1
             */
            adbid: string;
            /**
             * The identifier of the team containing the record.
             * @minLength 1
             */
            teamid: string;
            /** The display name of the record. */
            name: string;
            [key: string]: unknown;
          };
          /** The record cells keyed by their AnyDB cell positions. */
          content?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update the metadata or cell content of an AnyDB record. */
    "anydb.update_record": {
      input: {
        /** The record identity and metadata fields to update. */
        meta: {
          /**
           * The AnyDB record identifier.
           * @minLength 1
           */
          adoid: string;
          /**
           * The AnyDB database identifier.
           * @minLength 1
           */
          adbid: string;
          /**
           * The AnyDB team identifier.
           * @minLength 1
           */
          teamid: string;
          [key: string]: unknown;
        };
        /** The record cells to update, keyed by AnyDB cell position. */
        content?: Record<string, unknown>;
      };
      output: {
        /** An AnyDB record returned by the API. */
        record: {
          /** The stable metadata fields that identify the AnyDB record. */
          meta: {
            /**
             * The AnyDB record identifier.
             * @minLength 1
             */
            adoid: string;
            /**
             * The identifier of the database containing the record.
             * @minLength 1
             */
            adbid: string;
            /**
             * The identifier of the team containing the record.
             * @minLength 1
             */
            teamid: string;
            /** The display name of the record. */
            name: string;
            [key: string]: unknown;
          };
          /** The record cells keyed by their AnyDB cell positions. */
          content?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
