import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Productive task using JSON:API attributes and relationships. */
    "productive.create_task": {
      input: {
        /**
         * The Productive task title.
         * @minLength 1
         */
        title: string;
        /**
         * The optional Productive task description.
         * @minLength 1
         */
        description?: string;
        /**
         * The optional Productive task due date.
         * @format date
         */
        dueDate?: string;
        /** Productive relationship values keyed by relationship name. */
        relationships?: Record<string, {
            /**
             * The Productive relationship resource type.
             * @minLength 1
             */
            type: string;
            /**
             * The Productive relationship resource ID.
             * @minLength 1
             */
            id: string;
          }>;
        /** Additional Productive task attributes. */
        attributes?: {
          /**
           * The Productive task title.
           * @minLength 1
           */
          title?: string;
          /**
           * The Productive task description.
           * @minLength 1
           */
          description?: string;
          /**
           * The Productive task due date.
           * @format date
           */
          due_date?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** A normalized Productive task resource. */
        task?: {
          /**
           * The Productive task ID.
           * @minLength 1
           */
          id?: string;
          /** The Productive JSON:API resource type. */
          type?: string;
          /** The Productive task title. */
          title?: string;
          /** The Productive task description. */
          description?: string | null;
          /** The Productive task creation timestamp. */
          created_at?: string;
          /** The Productive task update timestamp. */
          updated_at?: string;
          /** The Productive task due date. */
          due_date?: string | null;
          /** The Productive task completion timestamp. */
          closed_at?: string | null;
          /** Flexible Productive JSON:API attributes. */
          attributes?: Record<string, unknown>;
          /** Flexible Productive JSON:API relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Included Productive JSON:API resources. */
        included?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Create a Productive time entry in minutes for a person and service. */
    "productive.create_time_entry": {
      input: {
        /**
         * The Productive time entry date.
         * @format date
         */
        date: string;
        /**
         * The Productive time entry duration in minutes.
         * @exclusiveMinimum 0
         */
        time: number;
        /**
         * The Productive person ID for the time entry.
         * @minLength 1
         */
        personId: string;
        /**
         * The Productive service ID for the time entry.
         * @minLength 1
         */
        serviceId: string;
        /**
         * The optional Productive time entry note.
         * @minLength 1
         */
        note?: string;
        /** Whether the Productive time entry is billable. */
        billable?: boolean;
        /** Productive relationship values keyed by relationship name. */
        relationships?: Record<string, {
            /**
             * The Productive relationship resource type.
             * @minLength 1
             */
            type: string;
            /**
             * The Productive relationship resource ID.
             * @minLength 1
             */
            id: string;
          }>;
        /** Additional Productive time entry attributes. */
        attributes?: {
          /**
           * The Productive time entry date.
           * @format date
           */
          date?: string;
          /**
           * The Productive time entry duration in minutes.
           * @exclusiveMinimum 0
           */
          time?: number;
          /**
           * The Productive time entry note.
           * @minLength 1
           */
          note?: string;
          /** Whether the Productive time entry is billable. */
          billable?: boolean;
          [key: string]: unknown;
        };
      };
      output: {
        /** A normalized Productive time entry resource. */
        timeEntry?: {
          /**
           * The Productive time entry ID.
           * @minLength 1
           */
          id?: string;
          /** The Productive JSON:API resource type. */
          type?: string;
          /**
           * The Productive time entry date.
           * @format date
           */
          date?: string;
          /**
           * The Productive time entry duration in minutes.
           * @exclusiveMinimum 0
           */
          time?: number;
          /** The Productive time entry note. */
          note?: string | null;
          /** Whether the Productive time entry is billable. */
          billable?: boolean;
          /** The Productive time entry creation timestamp. */
          created_at?: string;
          /** The Productive time entry update timestamp. */
          updated_at?: string;
          /** Flexible Productive JSON:API attributes. */
          attributes?: Record<string, unknown>;
          /** Flexible Productive JSON:API relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Included Productive JSON:API resources. */
        included?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Delete a Productive time entry by ID. */
    "productive.delete_time_entry": {
      input: {
        /**
         * The Productive time entry ID.
         * @minLength 1
         */
        timeEntryId: string;
      };
      output: {
        /** Whether the Productive operation succeeded. */
        success: boolean;
      };
    };
    /** Retrieve one Productive task by ID. */
    "productive.get_task": {
      input: {
        /**
         * The Productive task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * Comma-separated Productive relationship names to include.
         * @minLength 1
         */
        include?: string;
      };
      output: {
        /** A normalized Productive task resource. */
        task?: {
          /**
           * The Productive task ID.
           * @minLength 1
           */
          id?: string;
          /** The Productive JSON:API resource type. */
          type?: string;
          /** The Productive task title. */
          title?: string;
          /** The Productive task description. */
          description?: string | null;
          /** The Productive task creation timestamp. */
          created_at?: string;
          /** The Productive task update timestamp. */
          updated_at?: string;
          /** The Productive task due date. */
          due_date?: string | null;
          /** The Productive task completion timestamp. */
          closed_at?: string | null;
          /** Flexible Productive JSON:API attributes. */
          attributes?: Record<string, unknown>;
          /** Flexible Productive JSON:API relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Included Productive JSON:API resources. */
        included?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List Productive tasks with optional pagination, sorting, filters, and includes. */
    "productive.list_tasks": {
      input: {
        /**
         * The 1-based Productive page number.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * The number of Productive records per page. Productive allows up to 200.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
        /**
         * The Productive sort expression, such as title for ascending or -title for descending.
         * @minLength 1
         */
        sort?: string;
        /** Productive filter values keyed by the official filter field name. */
        filter?: Record<string, string | number | boolean>;
        /**
         * Comma-separated Productive relationship names to include.
         * @minLength 1
         */
        include?: string;
      };
      output: {
        /** The Productive tasks returned for this page. */
        tasks?: Array<{
          /**
           * The Productive task ID.
           * @minLength 1
           */
          id?: string;
          /** The Productive JSON:API resource type. */
          type?: string;
          /** The Productive task title. */
          title?: string;
          /** The Productive task description. */
          description?: string | null;
          /** The Productive task creation timestamp. */
          created_at?: string;
          /** The Productive task update timestamp. */
          updated_at?: string;
          /** The Productive task due date. */
          due_date?: string | null;
          /** The Productive task completion timestamp. */
          closed_at?: string | null;
          /** Flexible Productive JSON:API attributes. */
          attributes?: Record<string, unknown>;
          /** Flexible Productive JSON:API relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Included Productive JSON:API resources. */
        included?: Array<Record<string, unknown>>;
        /** Pagination links returned by Productive. */
        links?: {
          /** The current Productive page URL. */
          self?: string;
          /** The next Productive page URL, when present. */
          next?: string | null;
          /** The previous Productive page URL, when present. */
          prev?: string | null;
          /** The first Productive page URL, when present. */
          first?: string | null;
          /** The last Productive page URL, when present. */
          last?: string | null;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Productive. */
        meta?: {
          /** The current Productive page number. */
          current_page?: number;
          /** The total number of Productive pages. */
          total_pages?: number;
          /** The total number of matching Productive records. */
          total_count?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Productive time entries with optional pagination, sorting, filters, and includes. */
    "productive.list_time_entries": {
      input: {
        /**
         * The 1-based Productive page number.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * The number of Productive records per page. Productive allows up to 200.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
        /**
         * The Productive sort expression, such as title for ascending or -title for descending.
         * @minLength 1
         */
        sort?: string;
        /** Productive filter values keyed by the official filter field name. */
        filter?: Record<string, string | number | boolean>;
        /**
         * Comma-separated Productive relationship names to include.
         * @minLength 1
         */
        include?: string;
      };
      output: {
        /** The Productive time entries returned for this page. */
        timeEntries?: Array<{
          /**
           * The Productive time entry ID.
           * @minLength 1
           */
          id?: string;
          /** The Productive JSON:API resource type. */
          type?: string;
          /**
           * The Productive time entry date.
           * @format date
           */
          date?: string;
          /**
           * The Productive time entry duration in minutes.
           * @exclusiveMinimum 0
           */
          time?: number;
          /** The Productive time entry note. */
          note?: string | null;
          /** Whether the Productive time entry is billable. */
          billable?: boolean;
          /** The Productive time entry creation timestamp. */
          created_at?: string;
          /** The Productive time entry update timestamp. */
          updated_at?: string;
          /** Flexible Productive JSON:API attributes. */
          attributes?: Record<string, unknown>;
          /** Flexible Productive JSON:API relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Included Productive JSON:API resources. */
        included?: Array<Record<string, unknown>>;
        /** Pagination links returned by Productive. */
        links?: {
          /** The current Productive page URL. */
          self?: string;
          /** The next Productive page URL, when present. */
          next?: string | null;
          /** The previous Productive page URL, when present. */
          prev?: string | null;
          /** The first Productive page URL, when present. */
          first?: string | null;
          /** The last Productive page URL, when present. */
          last?: string | null;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Productive. */
        meta?: {
          /** The current Productive page number. */
          current_page?: number;
          /** The total number of Productive pages. */
          total_pages?: number;
          /** The total number of matching Productive records. */
          total_count?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update a Productive task by ID. */
    "productive.update_task": {
      input: {
        /**
         * The Productive task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * The optional Productive task title.
         * @minLength 1
         */
        title?: string;
        /** The optional Productive task description. */
        description?: string | null;
        /**
         * The optional Productive task due date.
         * @format date
         */
        dueDate?: string | null;
        /** Productive relationship values keyed by relationship name. */
        relationships?: Record<string, {
            /**
             * The Productive relationship resource type.
             * @minLength 1
             */
            type: string;
            /**
             * The Productive relationship resource ID.
             * @minLength 1
             */
            id: string;
          }>;
        /** Additional Productive task attributes. */
        attributes?: {
          /**
           * The Productive task title.
           * @minLength 1
           */
          title?: string;
          /**
           * The Productive task description.
           * @minLength 1
           */
          description?: string;
          /**
           * The Productive task due date.
           * @format date
           */
          due_date?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** A normalized Productive task resource. */
        task?: {
          /**
           * The Productive task ID.
           * @minLength 1
           */
          id?: string;
          /** The Productive JSON:API resource type. */
          type?: string;
          /** The Productive task title. */
          title?: string;
          /** The Productive task description. */
          description?: string | null;
          /** The Productive task creation timestamp. */
          created_at?: string;
          /** The Productive task update timestamp. */
          updated_at?: string;
          /** The Productive task due date. */
          due_date?: string | null;
          /** The Productive task completion timestamp. */
          closed_at?: string | null;
          /** Flexible Productive JSON:API attributes. */
          attributes?: Record<string, unknown>;
          /** Flexible Productive JSON:API relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Included Productive JSON:API resources. */
        included?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Update a Productive time entry by ID. */
    "productive.update_time_entry": {
      input: {
        /**
         * The Productive time entry ID.
         * @minLength 1
         */
        timeEntryId: string;
        /**
         * The optional Productive time entry date.
         * @format date
         */
        date?: string;
        /**
         * The optional Productive time entry duration in minutes.
         * @exclusiveMinimum 0
         */
        time?: number;
        /** The optional Productive time entry note. */
        note?: string | null;
        /** Whether the Productive time entry is billable. */
        billable?: boolean;
        /** Productive relationship values keyed by relationship name. */
        relationships?: Record<string, {
            /**
             * The Productive relationship resource type.
             * @minLength 1
             */
            type: string;
            /**
             * The Productive relationship resource ID.
             * @minLength 1
             */
            id: string;
          }>;
        /** Additional Productive time entry attributes. */
        attributes?: {
          /**
           * The Productive time entry date.
           * @format date
           */
          date?: string;
          /**
           * The Productive time entry duration in minutes.
           * @exclusiveMinimum 0
           */
          time?: number;
          /**
           * The Productive time entry note.
           * @minLength 1
           */
          note?: string;
          /** Whether the Productive time entry is billable. */
          billable?: boolean;
          [key: string]: unknown;
        };
      };
      output: {
        /** A normalized Productive time entry resource. */
        timeEntry?: {
          /**
           * The Productive time entry ID.
           * @minLength 1
           */
          id?: string;
          /** The Productive JSON:API resource type. */
          type?: string;
          /**
           * The Productive time entry date.
           * @format date
           */
          date?: string;
          /**
           * The Productive time entry duration in minutes.
           * @exclusiveMinimum 0
           */
          time?: number;
          /** The Productive time entry note. */
          note?: string | null;
          /** Whether the Productive time entry is billable. */
          billable?: boolean;
          /** The Productive time entry creation timestamp. */
          created_at?: string;
          /** The Productive time entry update timestamp. */
          updated_at?: string;
          /** Flexible Productive JSON:API attributes. */
          attributes?: Record<string, unknown>;
          /** Flexible Productive JSON:API relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Included Productive JSON:API resources. */
        included?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
  }
}
