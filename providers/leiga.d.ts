import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch one Leiga issue by its official issueNo identifier. */
    "leiga.get_issue_by_number": {
      input: {
        /**
         * The official Leiga issue number such as CORE-1.
         * @minLength 1
         * @pattern \S
         */
        issueNo: string;
      };
      output: {
        /** A normalized Leiga issue record. */
        issue: {
          /** The internal Leiga issue ID when available. */
          id: number | null;
          /** The internal Leiga issue ID from detail endpoints when available. */
          issueId: number | null;
          /** The issue number returned by Leiga. */
          issueNo: string | null;
          /** The issue summary returned by Leiga. */
          summary: string | null;
          /** The issue description returned by Leiga. */
          description: string | null;
          /** The issue status name returned by Leiga. */
          statusName: string | null;
          /** The project ID associated with the issue when available. */
          projectId: number | null;
          /** The raw issue object returned by Leiga. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Fetch the Leiga issue field schema for one project. */
    "leiga.get_issue_schema": {
      input: {
        /**
         * The official Leiga project ID.
         * @minimum 1
         */
        projectId: number;
      };
      output: {
        /** The normalized Leiga issue schema object. */
        schema: {
          /** The issue schema ID when Leiga returns it as a number. */
          id: number | null;
          /** The issue schema name. */
          name: string | null;
          /** The issue field definitions returned by Leiga. */
          fields: Array<{
            /**
             * The field identifier.
             * @minLength 1
             * @pattern \S
             */
            fieldId: string;
            /**
             * The field display name.
             * @minLength 1
             * @pattern \S
             */
            fieldName: string;
            /**
             * The field type returned by Leiga.
             * @minLength 1
             * @pattern \S
             */
            fieldType: string;
            /** Whether Leiga marks the field as required. */
            required: boolean;
            /** The optional field choices returned by Leiga. */
            options: Array<unknown> | null;
          }>;
          /** The raw issue schema object returned by Leiga. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Fetch one Leiga project by its official numeric projectId. */
    "leiga.get_project": {
      input: {
        /**
         * The official Leiga project ID.
         * @minimum 1
         */
        projectId: number;
      };
      output: {
        /** A normalized Leiga project record. */
        project: {
          /**
           * The Leiga project ID.
           * @minimum 1
           */
          id: number;
          /** The Leiga project name. */
          pname: string | null;
          /** The Leiga project key. */
          pkey: string | null;
          /** Whether the project is archived, where 1 means yes and 0 means no. */
          archived: number | null;
          /** The owner object returned by Leiga when available. */
          owner: Record<string, unknown> | null;
          /** The raw project object returned by Leiga. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Fetch one Leiga project by its official project key. */
    "leiga.get_project_by_key": {
      input: {
        /**
         * The official Leiga project key.
         * @minLength 1
         * @pattern \S
         */
        projectKey: string;
      };
      output: {
        /** A normalized Leiga project record. */
        project: {
          /**
           * The Leiga project ID.
           * @minimum 1
           */
          id: number;
          /** The Leiga project name. */
          pname: string | null;
          /** The Leiga project key. */
          pkey: string | null;
          /** Whether the project is archived, where 1 means yes and 0 means no. */
          archived: number | null;
          /** The owner object returned by Leiga when available. */
          owner: Record<string, unknown> | null;
          /** The raw project object returned by Leiga. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Leiga issues for one project using the official issue query body. */
    "leiga.list_issues": {
      input: {
        /**
         * The official Leiga project ID.
         * @minimum 1
         */
        projectId: number;
        /**
         * The page number to request from Leiga.
         * @minimum 1
         */
        pageNumber: number;
        /**
         * The number of issues to request from Leiga.
         * @minimum 1
         */
        pageSize: number;
        /**
         * An optional summary keyword filter.
         * @minLength 1
         * @pattern \S
         */
        summary?: string;
        /**
         * The field name used for sorting.
         * @minLength 1
         * @pattern \S
         */
        orderBy?: string;
        /** The sort direction returned by Leiga. */
        sort?: "ASC" | "DESC";
        /**
         * The optional list of issue status type IDs to filter by.
         * @minItems 1
         */
        statusTypes?: Array<number>;
        /**
         * The optional custom field codes that should be included in the response.
         * @minItems 1
         */
        showedCustomFieldCodes?: Array<string>;
      };
      output: {
        /** The total number of issues returned by Leiga for this query. */
        total: number;
        /** The normalized Leiga issues in the current page. */
        issues: Array<{
          /** The internal Leiga issue ID when available. */
          id: number | null;
          /** The internal Leiga issue ID from detail endpoints when available. */
          issueId: number | null;
          /** The issue number returned by Leiga. */
          issueNo: string | null;
          /** The issue summary returned by Leiga. */
          summary: string | null;
          /** The issue description returned by Leiga. */
          description: string | null;
          /** The issue status name returned by Leiga. */
          statusName: string | null;
          /** The project ID associated with the issue when available. */
          projectId: number | null;
          /** The raw issue object returned by Leiga. */
          raw: Record<string, unknown>;
        }>;
        /** The raw issue list response returned by Leiga. */
        raw: Record<string, unknown>;
      };
    };
    /** List Leiga projects using the official project list filters. */
    "leiga.list_projects": {
      input: {
        /**
         * Filter projects by one project ID.
         * @minimum 1
         */
        id?: number;
        /**
         * Filter projects by project name.
         * @minLength 1
         * @pattern \S
         */
        pname?: string;
        /**
         * Filter projects by project key.
         * @minLength 1
         * @pattern \S
         */
        pkey?: string;
        /**
         * Filter by archived status where 1 means archived and 0 means active.
         * @minimum 0
         * @maximum 1
         */
        archived?: number;
      };
      output: {
        /** The normalized Leiga projects that matched the filters. */
        projects: Array<{
          /**
           * The Leiga project ID.
           * @minimum 1
           */
          id: number;
          /** The Leiga project name. */
          pname: string | null;
          /** The Leiga project key. */
          pkey: string | null;
          /** Whether the project is archived, where 1 means yes and 0 means no. */
          archived: number | null;
          /** The owner object returned by Leiga when available. */
          owner: Record<string, unknown> | null;
          /** The raw project object returned by Leiga. */
          raw: Record<string, unknown>;
        }>;
        /** The total number of returned projects. */
        total: number;
        /** The raw project list response returned by Leiga. */
        raw: Record<string, unknown>;
      };
    };
  }
}
