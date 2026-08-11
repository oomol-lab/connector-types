import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a checklist item to a Microsoft To Do task. */
    "microsoft_todo.create_checklist_item": {
      input: {
        /**
         * Microsoft To Do task list ID.
         * @minLength 1
         */
        listId: string;
        /**
         * Microsoft To Do task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * Display name for the checklist item.
         * @minLength 1
         */
        displayName: string;
      };
      output: {
        /**
         * Checklist item ID.
         * @minLength 1
         */
        id?: string;
        /**
         * Display name of the checklist item.
         * @minLength 1
         */
        displayName?: string;
        /** Whether the checklist item is checked. */
        isChecked?: boolean;
        /**
         * When the checklist item was created.
         * @format date-time
         */
        createdDateTime?: string;
        /**
         * When the checklist item was checked.
         * @format date-time
         */
        checkedDateTime?: string;
        [key: string]: unknown;
      };
    };
    /** Create a new task in a Microsoft To Do task list. */
    "microsoft_todo.create_task": {
      input: {
        /**
         * Microsoft To Do task list ID.
         * @minLength 1
         */
        listId: string;
        /**
         * Task title.
         * @minLength 1
         */
        title: string;
        /** The body content of a task. */
        body?: {
          /** Body content. */
          content: string;
          /** Body content type. */
          contentType?: "text" | "html";
        };
        /** State or progress of the task. */
        status?: "notStarted" | "inProgress" | "completed" | "waitingOnOthers" | "deferred";
        /** Importance of the task. */
        importance?: "low" | "normal" | "high";
        /** Categories to associate with the task. */
        categories?: Array<string>;
        /** Date and time the task is due. */
        dueDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** Date and time the task is scheduled to start. */
        startDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** Whether to alert the user with a reminder. Set reminderDateTime as well, otherwise no alert fires. */
        isReminderOn?: boolean;
        /** Date and time to alert the user with a reminder. */
        reminderDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** A recurrence pattern and range for a task. */
        recurrence?: {
          /** The frequency of a task recurrence. */
          pattern: {
            /** Recurrence pattern type. */
            type: "daily" | "weekly" | "absoluteMonthly" | "relativeMonthly" | "absoluteYearly" | "relativeYearly";
            /**
             * Number of units between occurrences.
             * @exclusiveMinimum 0
             */
            interval: number;
            /** Month of the year for yearly recurrences. */
            month?: number;
            /** Day of the month for monthly recurrences. */
            dayOfMonth?: number;
            /** Days of the week for weekly or monthly recurrences. */
            daysOfWeek?: Array<"sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday">;
            /** Day of the week. */
            firstDayOfWeek?: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
            /** Which week the recurrence falls on for relative monthly/yearly recurrences. */
            index?: "first" | "second" | "third" | "fourth" | "last";
          };
          /** The date range over which a task recurrence repeats. */
          range: {
            /** Recurrence range type. */
            type: "endDate" | "noEnd" | "numbered";
            /**
             * Start date of the recurrence range.
             * @format date
             */
            startDate: string;
            /**
             * End date of the recurrence range.
             * @format date
             */
            endDate?: string;
            /** Time zone for startDate and endDate. */
            recurrenceTimeZone?: string;
            /**
             * Number of occurrences for a numbered recurrence range.
             * @minimum 0
             */
            numberOfOccurrences?: number;
          };
        };
      };
      output: {
        /**
         * Task ID.
         * @minLength 1
         */
        id?: string;
        /**
         * Task title.
         * @minLength 1
         */
        title?: string;
        /** The body content of a task. */
        body?: {
          /** Body content. */
          content: string;
          /** Body content type. */
          contentType?: "text" | "html";
        };
        /**
         * When the task body was last modified.
         * @format date-time
         */
        bodyLastModifiedDateTime?: string;
        /** State or progress of the task. */
        status?: "notStarted" | "inProgress" | "completed" | "waitingOnOthers" | "deferred";
        /** Importance of the task. */
        importance?: "low" | "normal" | "high";
        /** Whether a reminder alert is set for the task. */
        isReminderOn?: boolean;
        /** A date and time with an explicit time zone. */
        reminderDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** A recurrence pattern and range for a task. */
        recurrence?: {
          /** The frequency of a task recurrence. */
          pattern: {
            /** Recurrence pattern type. */
            type: "daily" | "weekly" | "absoluteMonthly" | "relativeMonthly" | "absoluteYearly" | "relativeYearly";
            /**
             * Number of units between occurrences.
             * @exclusiveMinimum 0
             */
            interval: number;
            /** Month of the year for yearly recurrences. */
            month?: number;
            /** Day of the month for monthly recurrences. */
            dayOfMonth?: number;
            /** Days of the week for weekly or monthly recurrences. */
            daysOfWeek?: Array<"sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday">;
            /** Day of the week. */
            firstDayOfWeek?: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
            /** Which week the recurrence falls on for relative monthly/yearly recurrences. */
            index?: "first" | "second" | "third" | "fourth" | "last";
          };
          /** The date range over which a task recurrence repeats. */
          range: {
            /** Recurrence range type. */
            type: "endDate" | "noEnd" | "numbered";
            /**
             * Start date of the recurrence range.
             * @format date
             */
            startDate: string;
            /**
             * End date of the recurrence range.
             * @format date
             */
            endDate?: string;
            /** Time zone for startDate and endDate. */
            recurrenceTimeZone?: string;
            /**
             * Number of occurrences for a numbered recurrence range.
             * @minimum 0
             */
            numberOfOccurrences?: number;
          };
        };
        /** Categories associated with the task. */
        categories?: Array<string>;
        /**
         * When the task was created.
         * @format date-time
         */
        createdDateTime?: string;
        /**
         * When the task was last modified.
         * @format date-time
         */
        lastModifiedDateTime?: string;
        /** A date and time with an explicit time zone. */
        dueDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** A date and time with an explicit time zone. */
        startDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** A date and time with an explicit time zone. */
        completedDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** Whether the task has attachments. */
        hasAttachments?: boolean;
        /** Checklist items linked to the task. */
        checklistItems?: Array<{
          /**
           * Checklist item ID.
           * @minLength 1
           */
          id?: string;
          /**
           * Display name of the checklist item.
           * @minLength 1
           */
          displayName?: string;
          /** Whether the checklist item is checked. */
          isChecked?: boolean;
          /**
           * When the checklist item was created.
           * @format date-time
           */
          createdDateTime?: string;
          /**
           * When the checklist item was checked.
           * @format date-time
           */
          checkedDateTime?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a new Microsoft To Do task list. */
    "microsoft_todo.create_task_list": {
      input: {
        /**
         * Display name for the new task list.
         * @minLength 1
         */
        displayName: string;
      };
      output: {
        /**
         * Task list ID.
         * @minLength 1
         */
        id?: string;
        /**
         * Display name for the task list.
         * @minLength 1
         */
        displayName?: string;
        /** Whether the current user owns the task list. */
        isOwner?: boolean;
        /** Whether the task list is shared. */
        isShared?: boolean;
        /** Well-known list identifier when the list is a built-in list. */
        wellknownListName?: "none" | "defaultList" | "flaggedEmails" | "unknownFutureValue";
        [key: string]: unknown;
      };
    };
    /** Delete a checklist item from a Microsoft To Do task. */
    "microsoft_todo.delete_checklist_item": {
      input: {
        /**
         * Microsoft To Do task list ID.
         * @minLength 1
         */
        listId: string;
        /**
         * Microsoft To Do task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * Microsoft To Do checklist item ID.
         * @minLength 1
         */
        checklistItemId: string;
      };
      output: {
        /**
         * ID of the deleted resource.
         * @minLength 1
         */
        id: string;
        /** Always true when the deletion succeeded. */
        deleted: true;
      };
    };
    /** Delete a task from a Microsoft To Do task list. */
    "microsoft_todo.delete_task": {
      input: {
        /**
         * Microsoft To Do task list ID.
         * @minLength 1
         */
        listId: string;
        /**
         * Microsoft To Do task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * ID of the deleted resource.
         * @minLength 1
         */
        id: string;
        /** Always true when the deletion succeeded. */
        deleted: true;
      };
    };
    /** Delete a Microsoft To Do task list and all of its tasks. */
    "microsoft_todo.delete_task_list": {
      input: {
        /**
         * Microsoft To Do task list ID.
         * @minLength 1
         */
        listId: string;
      };
      output: {
        /**
         * ID of the deleted resource.
         * @minLength 1
         */
        id: string;
        /** Always true when the deletion succeeded. */
        deleted: true;
      };
    };
    /** Get one task from a Microsoft To Do task list. */
    "microsoft_todo.get_task": {
      input: {
        /**
         * Microsoft To Do task list ID.
         * @minLength 1
         */
        listId: string;
        /**
         * Microsoft To Do task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * Task ID.
         * @minLength 1
         */
        id?: string;
        /**
         * Task title.
         * @minLength 1
         */
        title?: string;
        /** The body content of a task. */
        body?: {
          /** Body content. */
          content: string;
          /** Body content type. */
          contentType?: "text" | "html";
        };
        /**
         * When the task body was last modified.
         * @format date-time
         */
        bodyLastModifiedDateTime?: string;
        /** State or progress of the task. */
        status?: "notStarted" | "inProgress" | "completed" | "waitingOnOthers" | "deferred";
        /** Importance of the task. */
        importance?: "low" | "normal" | "high";
        /** Whether a reminder alert is set for the task. */
        isReminderOn?: boolean;
        /** A date and time with an explicit time zone. */
        reminderDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** A recurrence pattern and range for a task. */
        recurrence?: {
          /** The frequency of a task recurrence. */
          pattern: {
            /** Recurrence pattern type. */
            type: "daily" | "weekly" | "absoluteMonthly" | "relativeMonthly" | "absoluteYearly" | "relativeYearly";
            /**
             * Number of units between occurrences.
             * @exclusiveMinimum 0
             */
            interval: number;
            /** Month of the year for yearly recurrences. */
            month?: number;
            /** Day of the month for monthly recurrences. */
            dayOfMonth?: number;
            /** Days of the week for weekly or monthly recurrences. */
            daysOfWeek?: Array<"sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday">;
            /** Day of the week. */
            firstDayOfWeek?: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
            /** Which week the recurrence falls on for relative monthly/yearly recurrences. */
            index?: "first" | "second" | "third" | "fourth" | "last";
          };
          /** The date range over which a task recurrence repeats. */
          range: {
            /** Recurrence range type. */
            type: "endDate" | "noEnd" | "numbered";
            /**
             * Start date of the recurrence range.
             * @format date
             */
            startDate: string;
            /**
             * End date of the recurrence range.
             * @format date
             */
            endDate?: string;
            /** Time zone for startDate and endDate. */
            recurrenceTimeZone?: string;
            /**
             * Number of occurrences for a numbered recurrence range.
             * @minimum 0
             */
            numberOfOccurrences?: number;
          };
        };
        /** Categories associated with the task. */
        categories?: Array<string>;
        /**
         * When the task was created.
         * @format date-time
         */
        createdDateTime?: string;
        /**
         * When the task was last modified.
         * @format date-time
         */
        lastModifiedDateTime?: string;
        /** A date and time with an explicit time zone. */
        dueDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** A date and time with an explicit time zone. */
        startDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** A date and time with an explicit time zone. */
        completedDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** Whether the task has attachments. */
        hasAttachments?: boolean;
        /** Checklist items linked to the task. */
        checklistItems?: Array<{
          /**
           * Checklist item ID.
           * @minLength 1
           */
          id?: string;
          /**
           * Display name of the checklist item.
           * @minLength 1
           */
          displayName?: string;
          /** Whether the checklist item is checked. */
          isChecked?: boolean;
          /**
           * When the checklist item was created.
           * @format date-time
           */
          createdDateTime?: string;
          /**
           * When the checklist item was checked.
           * @format date-time
           */
          checkedDateTime?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get one Microsoft To Do task list by ID. */
    "microsoft_todo.get_task_list": {
      input: {
        /**
         * Microsoft To Do task list ID.
         * @minLength 1
         */
        listId: string;
      };
      output: {
        /**
         * Task list ID.
         * @minLength 1
         */
        id?: string;
        /**
         * Display name for the task list.
         * @minLength 1
         */
        displayName?: string;
        /** Whether the current user owns the task list. */
        isOwner?: boolean;
        /** Whether the task list is shared. */
        isShared?: boolean;
        /** Well-known list identifier when the list is a built-in list. */
        wellknownListName?: "none" | "defaultList" | "flaggedEmails" | "unknownFutureValue";
        [key: string]: unknown;
      };
    };
    /** List checklist items on a Microsoft To Do task. */
    "microsoft_todo.list_checklist_items": {
      input: {
        /**
         * Microsoft To Do task list ID.
         * @minLength 1
         */
        listId: string;
        /**
         * Microsoft To Do task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * Opaque pagination URL returned by a previous Microsoft To Do response (@odata.nextLink).
         * @format uri
         */
        nextLink?: string;
      };
      output: {
        /** Checklist items in this page. */
        value: Array<{
          /**
           * Checklist item ID.
           * @minLength 1
           */
          id?: string;
          /**
           * Display name of the checklist item.
           * @minLength 1
           */
          displayName?: string;
          /** Whether the checklist item is checked. */
          isChecked?: boolean;
          /**
           * When the checklist item was created.
           * @format date-time
           */
          createdDateTime?: string;
          /**
           * When the checklist item was checked.
           * @format date-time
           */
          checkedDateTime?: string;
          [key: string]: unknown;
        }>;
        /**
         * Opaque pagination URL returned by a previous Microsoft To Do response (@odata.nextLink).
         * @format uri
         */
        nextLink?: string;
      };
    };
    /** List the current user's Microsoft To Do task lists. */
    "microsoft_todo.list_task_lists": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         */
        top?: number;
        /**
         * Number of items to skip.
         * @minimum 0
         */
        skip?: number;
        /** OData $filter expression. */
        filter?: string;
        /** OData $orderby expression. */
        orderby?: string;
        /**
         * Opaque pagination URL returned by a previous Microsoft To Do response (@odata.nextLink).
         * @format uri
         */
        nextLink?: string;
      };
      output: {
        /** Task lists in this page. */
        value: Array<{
          /**
           * Task list ID.
           * @minLength 1
           */
          id?: string;
          /**
           * Display name for the task list.
           * @minLength 1
           */
          displayName?: string;
          /** Whether the current user owns the task list. */
          isOwner?: boolean;
          /** Whether the task list is shared. */
          isShared?: boolean;
          /** Well-known list identifier when the list is a built-in list. */
          wellknownListName?: "none" | "defaultList" | "flaggedEmails" | "unknownFutureValue";
          [key: string]: unknown;
        }>;
        /**
         * Opaque pagination URL returned by a previous Microsoft To Do response (@odata.nextLink).
         * @format uri
         */
        nextLink?: string;
      };
    };
    /** List tasks in a Microsoft To Do task list. */
    "microsoft_todo.list_tasks": {
      input: {
        /**
         * Microsoft To Do task list ID.
         * @minLength 1
         */
        listId: string;
        /** Include checklist items for each task. */
        expandChecklistItems?: boolean;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         */
        top?: number;
        /**
         * Number of items to skip.
         * @minimum 0
         */
        skip?: number;
        /** OData $filter expression. */
        filter?: string;
        /** OData $orderby expression. */
        orderby?: string;
        /**
         * Opaque pagination URL returned by a previous Microsoft To Do response (@odata.nextLink).
         * @format uri
         */
        nextLink?: string;
      };
      output: {
        /** Tasks in this page. */
        value: Array<{
          /**
           * Task ID.
           * @minLength 1
           */
          id?: string;
          /**
           * Task title.
           * @minLength 1
           */
          title?: string;
          /** The body content of a task. */
          body?: {
            /** Body content. */
            content: string;
            /** Body content type. */
            contentType?: "text" | "html";
          };
          /**
           * When the task body was last modified.
           * @format date-time
           */
          bodyLastModifiedDateTime?: string;
          /** State or progress of the task. */
          status?: "notStarted" | "inProgress" | "completed" | "waitingOnOthers" | "deferred";
          /** Importance of the task. */
          importance?: "low" | "normal" | "high";
          /** Whether a reminder alert is set for the task. */
          isReminderOn?: boolean;
          /** A date and time with an explicit time zone. */
          reminderDateTime?: {
            /**
             * Date and time value, for example 2026-08-07T09:00:00.
             * @minLength 1
             */
            dateTime: string;
            /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
            timeZone?: string;
          };
          /** A recurrence pattern and range for a task. */
          recurrence?: {
            /** The frequency of a task recurrence. */
            pattern: {
              /** Recurrence pattern type. */
              type: "daily" | "weekly" | "absoluteMonthly" | "relativeMonthly" | "absoluteYearly" | "relativeYearly";
              /**
               * Number of units between occurrences.
               * @exclusiveMinimum 0
               */
              interval: number;
              /** Month of the year for yearly recurrences. */
              month?: number;
              /** Day of the month for monthly recurrences. */
              dayOfMonth?: number;
              /** Days of the week for weekly or monthly recurrences. */
              daysOfWeek?: Array<"sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday">;
              /** Day of the week. */
              firstDayOfWeek?: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
              /** Which week the recurrence falls on for relative monthly/yearly recurrences. */
              index?: "first" | "second" | "third" | "fourth" | "last";
            };
            /** The date range over which a task recurrence repeats. */
            range: {
              /** Recurrence range type. */
              type: "endDate" | "noEnd" | "numbered";
              /**
               * Start date of the recurrence range.
               * @format date
               */
              startDate: string;
              /**
               * End date of the recurrence range.
               * @format date
               */
              endDate?: string;
              /** Time zone for startDate and endDate. */
              recurrenceTimeZone?: string;
              /**
               * Number of occurrences for a numbered recurrence range.
               * @minimum 0
               */
              numberOfOccurrences?: number;
            };
          };
          /** Categories associated with the task. */
          categories?: Array<string>;
          /**
           * When the task was created.
           * @format date-time
           */
          createdDateTime?: string;
          /**
           * When the task was last modified.
           * @format date-time
           */
          lastModifiedDateTime?: string;
          /** A date and time with an explicit time zone. */
          dueDateTime?: {
            /**
             * Date and time value, for example 2026-08-07T09:00:00.
             * @minLength 1
             */
            dateTime: string;
            /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
            timeZone?: string;
          };
          /** A date and time with an explicit time zone. */
          startDateTime?: {
            /**
             * Date and time value, for example 2026-08-07T09:00:00.
             * @minLength 1
             */
            dateTime: string;
            /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
            timeZone?: string;
          };
          /** A date and time with an explicit time zone. */
          completedDateTime?: {
            /**
             * Date and time value, for example 2026-08-07T09:00:00.
             * @minLength 1
             */
            dateTime: string;
            /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
            timeZone?: string;
          };
          /** Whether the task has attachments. */
          hasAttachments?: boolean;
          /** Checklist items linked to the task. */
          checklistItems?: Array<{
            /**
             * Checklist item ID.
             * @minLength 1
             */
            id?: string;
            /**
             * Display name of the checklist item.
             * @minLength 1
             */
            displayName?: string;
            /** Whether the checklist item is checked. */
            isChecked?: boolean;
            /**
             * When the checklist item was created.
             * @format date-time
             */
            createdDateTime?: string;
            /**
             * When the checklist item was checked.
             * @format date-time
             */
            checkedDateTime?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /**
         * Opaque pagination URL returned by a previous Microsoft To Do response (@odata.nextLink).
         * @format uri
         */
        nextLink?: string;
      };
    };
    /** Update a checklist item on a Microsoft To Do task. */
    "microsoft_todo.update_checklist_item": {
      input: {
        /**
         * Microsoft To Do task list ID.
         * @minLength 1
         */
        listId: string;
        /**
         * Microsoft To Do task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * Microsoft To Do checklist item ID.
         * @minLength 1
         */
        checklistItemId: string;
        /**
         * Updated display name for the checklist item.
         * @minLength 1
         */
        displayName?: string;
        /** Whether the checklist item is checked. */
        isChecked?: boolean;
      };
      output: {
        /**
         * Checklist item ID.
         * @minLength 1
         */
        id?: string;
        /**
         * Display name of the checklist item.
         * @minLength 1
         */
        displayName?: string;
        /** Whether the checklist item is checked. */
        isChecked?: boolean;
        /**
         * When the checklist item was created.
         * @format date-time
         */
        createdDateTime?: string;
        /**
         * When the checklist item was checked.
         * @format date-time
         */
        checkedDateTime?: string;
        [key: string]: unknown;
      };
    };
    /** Update fields on an existing Microsoft To Do task. */
    "microsoft_todo.update_task": {
      input: {
        /**
         * Microsoft To Do task list ID.
         * @minLength 1
         */
        listId: string;
        /**
         * Microsoft To Do task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * Updated task title.
         * @minLength 1
         */
        title?: string;
        /** The body content of a task. */
        body?: {
          /** Body content. */
          content: string;
          /** Body content type. */
          contentType?: "text" | "html";
        };
        /** State or progress of the task. */
        status?: "notStarted" | "inProgress" | "completed" | "waitingOnOthers" | "deferred";
        /** Importance of the task. */
        importance?: "low" | "normal" | "high";
        /** Updated categories for the task. */
        categories?: Array<string>;
        /** Date and time the task is due. */
        dueDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** Date and time the task is scheduled to start. */
        startDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** A date and time with an explicit time zone. */
        completedDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** Whether to alert the user with a reminder. Set reminderDateTime as well, otherwise no alert fires. */
        isReminderOn?: boolean;
        /** Date and time to alert the user with a reminder. */
        reminderDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** A recurrence pattern and range for a task. */
        recurrence?: {
          /** The frequency of a task recurrence. */
          pattern: {
            /** Recurrence pattern type. */
            type: "daily" | "weekly" | "absoluteMonthly" | "relativeMonthly" | "absoluteYearly" | "relativeYearly";
            /**
             * Number of units between occurrences.
             * @exclusiveMinimum 0
             */
            interval: number;
            /** Month of the year for yearly recurrences. */
            month?: number;
            /** Day of the month for monthly recurrences. */
            dayOfMonth?: number;
            /** Days of the week for weekly or monthly recurrences. */
            daysOfWeek?: Array<"sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday">;
            /** Day of the week. */
            firstDayOfWeek?: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
            /** Which week the recurrence falls on for relative monthly/yearly recurrences. */
            index?: "first" | "second" | "third" | "fourth" | "last";
          };
          /** The date range over which a task recurrence repeats. */
          range: {
            /** Recurrence range type. */
            type: "endDate" | "noEnd" | "numbered";
            /**
             * Start date of the recurrence range.
             * @format date
             */
            startDate: string;
            /**
             * End date of the recurrence range.
             * @format date
             */
            endDate?: string;
            /** Time zone for startDate and endDate. */
            recurrenceTimeZone?: string;
            /**
             * Number of occurrences for a numbered recurrence range.
             * @minimum 0
             */
            numberOfOccurrences?: number;
          };
        };
      };
      output: {
        /**
         * Task ID.
         * @minLength 1
         */
        id?: string;
        /**
         * Task title.
         * @minLength 1
         */
        title?: string;
        /** The body content of a task. */
        body?: {
          /** Body content. */
          content: string;
          /** Body content type. */
          contentType?: "text" | "html";
        };
        /**
         * When the task body was last modified.
         * @format date-time
         */
        bodyLastModifiedDateTime?: string;
        /** State or progress of the task. */
        status?: "notStarted" | "inProgress" | "completed" | "waitingOnOthers" | "deferred";
        /** Importance of the task. */
        importance?: "low" | "normal" | "high";
        /** Whether a reminder alert is set for the task. */
        isReminderOn?: boolean;
        /** A date and time with an explicit time zone. */
        reminderDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** A recurrence pattern and range for a task. */
        recurrence?: {
          /** The frequency of a task recurrence. */
          pattern: {
            /** Recurrence pattern type. */
            type: "daily" | "weekly" | "absoluteMonthly" | "relativeMonthly" | "absoluteYearly" | "relativeYearly";
            /**
             * Number of units between occurrences.
             * @exclusiveMinimum 0
             */
            interval: number;
            /** Month of the year for yearly recurrences. */
            month?: number;
            /** Day of the month for monthly recurrences. */
            dayOfMonth?: number;
            /** Days of the week for weekly or monthly recurrences. */
            daysOfWeek?: Array<"sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday">;
            /** Day of the week. */
            firstDayOfWeek?: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";
            /** Which week the recurrence falls on for relative monthly/yearly recurrences. */
            index?: "first" | "second" | "third" | "fourth" | "last";
          };
          /** The date range over which a task recurrence repeats. */
          range: {
            /** Recurrence range type. */
            type: "endDate" | "noEnd" | "numbered";
            /**
             * Start date of the recurrence range.
             * @format date
             */
            startDate: string;
            /**
             * End date of the recurrence range.
             * @format date
             */
            endDate?: string;
            /** Time zone for startDate and endDate. */
            recurrenceTimeZone?: string;
            /**
             * Number of occurrences for a numbered recurrence range.
             * @minimum 0
             */
            numberOfOccurrences?: number;
          };
        };
        /** Categories associated with the task. */
        categories?: Array<string>;
        /**
         * When the task was created.
         * @format date-time
         */
        createdDateTime?: string;
        /**
         * When the task was last modified.
         * @format date-time
         */
        lastModifiedDateTime?: string;
        /** A date and time with an explicit time zone. */
        dueDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** A date and time with an explicit time zone. */
        startDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** A date and time with an explicit time zone. */
        completedDateTime?: {
          /**
           * Date and time value, for example 2026-08-07T09:00:00.
           * @minLength 1
           */
          dateTime: string;
          /** Time zone for dateTime, for example UTC. Defaults to UTC when omitted. */
          timeZone?: string;
        };
        /** Whether the task has attachments. */
        hasAttachments?: boolean;
        /** Checklist items linked to the task. */
        checklistItems?: Array<{
          /**
           * Checklist item ID.
           * @minLength 1
           */
          id?: string;
          /**
           * Display name of the checklist item.
           * @minLength 1
           */
          displayName?: string;
          /** Whether the checklist item is checked. */
          isChecked?: boolean;
          /**
           * When the checklist item was created.
           * @format date-time
           */
          createdDateTime?: string;
          /**
           * When the checklist item was checked.
           * @format date-time
           */
          checkedDateTime?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Rename a Microsoft To Do task list. */
    "microsoft_todo.update_task_list": {
      input: {
        /**
         * Microsoft To Do task list ID.
         * @minLength 1
         */
        listId: string;
        /**
         * Updated display name for the task list.
         * @minLength 1
         */
        displayName: string;
      };
      output: {
        /**
         * Task list ID.
         * @minLength 1
         */
        id?: string;
        /**
         * Display name for the task list.
         * @minLength 1
         */
        displayName?: string;
        /** Whether the current user owns the task list. */
        isOwner?: boolean;
        /** Whether the task list is shared. */
        isShared?: boolean;
        /** Well-known list identifier when the list is a built-in list. */
        wellknownListName?: "none" | "defaultList" | "flaggedEmails" | "unknownFutureValue";
        [key: string]: unknown;
      };
    };
  }
}
