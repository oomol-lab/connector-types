import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an Easy8 task. */
    "easy8.create_issue": {
      input: {
        /**
         * The task subject.
         * @minLength 1
         */
        subject: string;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        trackerId: number;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        statusId: number;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        priorityId: number;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        authorId: number;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        assigneeId: number;
        /** The task description. */
        description?: string;
        /** The estimated hours value accepted by Easy8. */
        estimatedHours?: string;
        /**
         * The task completion percentage in ten-point steps.
         * @minimum 0
         * @maximum 100
         */
        doneRatio?: number;
        /**
         * The task start date in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * The task due date in YYYY-MM-DD format.
         * @format date
         */
        dueDate?: string;
        /** Whether the task is private. */
        private?: boolean;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        parentIssueId?: number;
        /** A comment to add while updating the task. */
        notes?: string;
        /** Tags assigned to the task. */
        tags?: Array<string>;
      };
      output: {
        /** An Easy8 task object. */
        issue: {
          /**
           * The numeric Easy8 resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The task subject. */
          subject?: string;
          /** The task description. */
          description?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create an Easy8 project. */
    "easy8.create_project": {
      input: {
        /**
         * The project name.
         * @minLength 1
         */
        name: string;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        authorId: number;
        /** The project description. */
        description?: string;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        parentId?: number;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        managerId?: number;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /** Whether the project is planned. */
        planned?: boolean;
        /**
         * The project start date in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * The project due date in YYYY-MM-DD format.
         * @format date
         */
        dueDate?: string;
        /**
         * The three-letter project currency code.
         * @minLength 3
         * @maxLength 3
         */
        currencyCode?: string;
        /** Tags assigned to the project. */
        tags?: Array<string>;
      };
      output: {
        /** An Easy8 project object. */
        project: {
          /**
           * The numeric Easy8 resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The project name. */
          name?: string;
          /** The project identifier. */
          identifier?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Permanently delete an Easy8 task. */
    "easy8.delete_issue": {
      input: {
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        issueId: number;
      };
      output: {
        /** Whether Easy8 accepted the deletion. */
        deleted: boolean;
      };
    };
    /** Retrieve one Easy8 task by ID. */
    "easy8.get_issue": {
      input: {
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        issueId: number;
      };
      output: {
        /** An Easy8 task object. */
        issue: {
          /**
           * The numeric Easy8 resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The task subject. */
          subject?: string;
          /** The task description. */
          description?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Easy8 project by ID. */
    "easy8.get_project": {
      input: {
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
      };
      output: {
        /** An Easy8 project object. */
        project: {
          /**
           * The numeric Easy8 resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The project name. */
          name?: string;
          /** The project identifier. */
          identifier?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List tasks visible to the connected Easy8 user. */
    "easy8.list_issues": {
      input: {
        /** A free-text Easy8 query. */
        query?: string;
        /**
         * The maximum number of records to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Tasks returned by Easy8. */
        issues: Array<{
          /**
           * The numeric Easy8 resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The task subject. */
          subject?: string;
          /** The task description. */
          description?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        totalCount: number;
        /** The result offset returned by Easy8. */
        offset: number;
        /** The result limit returned by Easy8. */
        limit: number;
      };
    };
    /** List projects visible to the connected Easy8 user. */
    "easy8.list_projects": {
      input: {
        /** A free-text Easy8 query. */
        query?: string;
        /**
         * The maximum number of records to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Projects returned by Easy8. */
        projects: Array<{
          /**
           * The numeric Easy8 resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The project name. */
          name?: string;
          /** The project identifier. */
          identifier?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        totalCount: number;
        /** The result offset returned by Easy8. */
        offset: number;
        /** The result limit returned by Easy8. */
        limit: number;
      };
    };
    /** Update documented fields on an Easy8 task. */
    "easy8.update_issue": {
      input: {
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        issueId: number;
        /**
         * The task subject.
         * @minLength 1
         */
        subject?: string;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        projectId?: number;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        trackerId?: number;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        statusId?: number;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        priorityId?: number;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        authorId?: number;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        assigneeId?: number;
        /** The task description. */
        description?: string;
        /** The estimated hours value accepted by Easy8. */
        estimatedHours?: string;
        /**
         * The task completion percentage in ten-point steps.
         * @minimum 0
         * @maximum 100
         */
        doneRatio?: number;
        /**
         * The task start date in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * The task due date in YYYY-MM-DD format.
         * @format date
         */
        dueDate?: string;
        /** Whether the task is private. */
        private?: boolean;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        parentIssueId?: number;
        /** A comment to add while updating the task. */
        notes?: string;
        /** Tags assigned to the task. */
        tags?: Array<string>;
      };
      output: {
        /** An Easy8 task object. */
        issue: {
          /**
           * The numeric Easy8 resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The task subject. */
          subject?: string;
          /** The task description. */
          description?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update documented fields on an Easy8 project. */
    "easy8.update_project": {
      input: {
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The project name.
         * @minLength 1
         */
        name?: string;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        authorId?: number;
        /** The project description. */
        description?: string;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        parentId?: number;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        managerId?: number;
        /**
         * The numeric Easy8 resource ID.
         * @exclusiveMinimum 0
         */
        ownerId?: number;
        /** Whether the project is planned. */
        planned?: boolean;
        /**
         * The project start date in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * The project due date in YYYY-MM-DD format.
         * @format date
         */
        dueDate?: string;
        /**
         * The three-letter project currency code.
         * @minLength 3
         * @maxLength 3
         */
        currencyCode?: string;
        /** Tags assigned to the project. */
        tags?: Array<string>;
      };
      output: {
        /** An Easy8 project object. */
        project: {
          /**
           * The numeric Easy8 resource ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The project name. */
          name?: string;
          /** The project identifier. */
          identifier?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
