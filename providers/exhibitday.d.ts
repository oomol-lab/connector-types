import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an event in ExhibitDay. */
    "exhibitday.create_event": {
      input: {
        /**
         * The event name.
         * @maxLength 500
         */
        name: string;
        /**
         * The event start date in YYYY-MM-DD format.
         * @format date
         */
        startDate: string;
        /**
         * The event end date in YYYY-MM-DD format.
         * @format date
         */
        endDate: string;
        /**
         * The event format: 1 for in-person, 2 for virtual, or 3 for hybrid.
         * @minimum 1
         * @maximum 3
         */
        formatId?: number;
        /**
         * The workspace event participation type ID.
         * @minimum 1
         */
        participationTypeId?: number;
        /** Integration-specific metadata stored on the event. */
        integrationMetadata1?: string;
        /** A second integration-specific metadata value. */
        integrationMetadata2?: string;
      };
      output: {
        /** The parsed JSON value returned by ExhibitDay. */
        data: unknown;
      };
    };
    /** Create an event-specific or general task in ExhibitDay. */
    "exhibitday.create_task": {
      input: {
        /** The task name. */
        name: string;
        /**
         * The associated event ID; omit for a general task.
         * @minimum 1
         */
        eventId?: number;
        /**
         * The event task section ID.
         * @minimum 1
         */
        taskSectionId?: number;
        /** Whether the task is completed. */
        completed?: boolean;
        /**
         * The task due date in YYYY-MM-DD format.
         * @format date
         */
        dueDate?: string;
        /**
         * The user or resource ID assigned to the task.
         * @minimum 1
         */
        assigneeUserId?: number;
        /** Plain-text task details. */
        details?: string;
        /** Integration-specific metadata stored on the task. */
        integrationMetadata1?: string;
        /** A second integration-specific metadata value. */
        integrationMetadata2?: string;
      };
      output: {
        /** The parsed JSON value returned by ExhibitDay. */
        data: unknown;
      };
    };
    /** Permanently delete an ExhibitDay event. */
    "exhibitday.delete_event": {
      input: {
        /**
         * The event ID.
         * @minimum 1
         */
        eventId: number;
      };
      output: {
        /** The parsed JSON value returned by ExhibitDay. */
        data: unknown;
      };
    };
    /** Permanently delete an ExhibitDay task. */
    "exhibitday.delete_task": {
      input: {
        /**
         * The task ID.
         * @minimum 1
         */
        taskId: number;
      };
      output: {
        /** The parsed JSON value returned by ExhibitDay. */
        data: unknown;
      };
    };
    /** Retrieve one ExhibitDay event by ID. */
    "exhibitday.get_event": {
      input: {
        /**
         * The event ID.
         * @minimum 1
         */
        eventId: number;
      };
      output: {
        /** The parsed JSON value returned by ExhibitDay. */
        data: unknown;
      };
    };
    /** Retrieve one ExhibitDay task by ID. */
    "exhibitday.get_task": {
      input: {
        /**
         * The task ID.
         * @minimum 1
         */
        taskId: number;
      };
      output: {
        /** The parsed JSON value returned by ExhibitDay. */
        data: unknown;
      };
    };
    /** List ExhibitDay events using workspace, date, format, or tag filters. */
    "exhibitday.list_events": {
      input: {
        /** Return events whose names contain this case-insensitive text. */
        nameContains?: string;
        /**
         * Return events starting on or after this date.
         * @format date
         */
        startDateFrom?: string;
        /**
         * Return events starting on or before this date.
         * @format date
         */
        startDateTo?: string;
        /**
         * Return events ending on or after this date.
         * @format date
         */
        endDateFrom?: string;
        /**
         * Return events ending on or before this date.
         * @format date
         */
        endDateTo?: string;
        /**
         * Return events with this participation type ID.
         * @minimum 1
         */
        participationTypeId?: number;
        /**
         * Return events with this format ID from 1 through 3.
         * @minimum 1
         * @maximum 3
         */
        formatId?: number;
        /**
         * Return events with this star rating from 0 through 3.
         * @minimum 0
         * @maximum 3
         */
        starRating?: number;
        /** Return events with this tag. */
        tag?: string;
        /** Match the first integration metadata field exactly. */
        integrationMetadata1?: string;
        /** Whether to include each event's task collection. */
        includeTasks?: boolean;
        /** Whether to include each event's task sections. */
        includeTaskSections?: boolean;
        /** Whether to include custom event field values. */
        includeCustomFields?: boolean;
      };
      output: {
        /** The parsed JSON value returned by ExhibitDay. */
        data: unknown;
      };
    };
    /** List ExhibitDay tasks using event, completion, due-date, or assignee filters. */
    "exhibitday.list_tasks": {
      input: {
        /**
         * Return tasks associated with this event ID.
         * @minimum 1
         */
        eventId?: number;
        /** Whether to return only general tasks not associated with an event. */
        generalOnly?: boolean;
        /** Whether to return only incomplete tasks. */
        incompleteOnly?: boolean;
        /** Whether to return only completed tasks. */
        completedOnly?: boolean;
        /** Whether to return only tasks without a due date. */
        noDueDate?: boolean;
        /**
         * Return tasks due on or after this date.
         * @format date
         */
        dueDateFrom?: string;
        /**
         * Return tasks due on or before this date.
         * @format date
         */
        dueDateTo?: string;
        /** Filter tasks by whether they have an assignee. */
        hasAssignee?: boolean;
        /**
         * Return tasks assigned to this user or resource ID.
         * @minimum 1
         */
        assigneeUserId?: number;
        /** Return tasks whose names contain this case-insensitive text. */
        nameContains?: string;
        /** Match the first integration metadata field exactly. */
        integrationMetadata1?: string;
        /** Whether to include each task's comments. */
        includeComments?: boolean;
      };
      output: {
        /** The parsed JSON value returned by ExhibitDay. */
        data: unknown;
      };
    };
    /** Update fields on an existing ExhibitDay event. */
    "exhibitday.update_event": {
      input: {
        /**
         * The event ID.
         * @minimum 1
         */
        eventId: number;
        /**
         * The event name.
         * @maxLength 500
         */
        name?: string;
        /**
         * The event start date in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * The event end date in YYYY-MM-DD format.
         * @format date
         */
        endDate?: string;
        /**
         * The event format: 1 for in-person, 2 for virtual, or 3 for hybrid.
         * @minimum 1
         * @maximum 3
         */
        formatId?: number;
        /**
         * The workspace event participation type ID.
         * @minimum 1
         */
        participationTypeId?: number;
        /** Integration-specific metadata stored on the event. */
        integrationMetadata1?: string;
        /** A second integration-specific metadata value. */
        integrationMetadata2?: string;
        /**
         * The replacement star rating from 0 through 3.
         * @minimum 0
         * @maximum 3
         */
        starRating?: number;
        /** The replacement event tags. */
        tags?: Array<string>;
        /**
         * The replacement event website URL.
         * @format uri
         */
        websiteUrl?: string;
        /** The replacement venue name. */
        venueName?: string;
        /** The replacement venue address. */
        venueAddress?: string;
        /** Replacement event notes. */
        eventNotes?: string;
      };
      output: {
        /** The parsed JSON value returned by ExhibitDay. */
        data: unknown;
      };
    };
    /** Update fields on an existing ExhibitDay task. */
    "exhibitday.update_task": {
      input: {
        /**
         * The task ID.
         * @minimum 1
         */
        taskId: number;
        /** The task name. */
        name?: string;
        /**
         * The replacement task section ID, or null to remove it.
         * @minimum 1
         */
        taskSectionId?: number | null;
        /** Whether the task is completed. */
        completed?: boolean;
        /**
         * The replacement due date in YYYY-MM-DD format, or null to remove it.
         * @format date
         */
        dueDate?: string | null;
        /**
         * The replacement assignee ID, or null to leave the task unassigned.
         * @minimum 1
         */
        assigneeUserId?: number | null;
        /** Plain-text task details. */
        details?: string;
        /** Integration-specific metadata stored on the task. */
        integrationMetadata1?: string;
        /** A second integration-specific metadata value. */
        integrationMetadata2?: string;
      };
      output: {
        /** The parsed JSON value returned by ExhibitDay. */
        data: unknown;
      };
    };
  }
}
