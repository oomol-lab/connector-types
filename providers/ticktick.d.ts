import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Mark a TickTick task as completed by project ID and task ID. */
    "ticktick.complete_task": {
      input: {
        /**
         * The TickTick project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The TickTick task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Whether the TickTick task is completed. */
        completed: true;
        /** The TickTick project ID. */
        projectId: string;
        /** The TickTick task ID. */
        taskId: string;
      };
    };
    /** Create or update a TickTick habit check-in for a date stamp. */
    "ticktick.create_or_update_habit_checkin": {
      input: {
        /**
         * The TickTick habit ID.
         * @minLength 1
         */
        habitId: string;
        /** A date stamp in YYYYMMDD format. */
        stamp: number;
        /** The check-in time in yyyy-MM-dd'T'HH:mm:ssZ format. */
        time?: string;
        /** The operation time in yyyy-MM-dd'T'HH:mm:ssZ format. */
        opTime?: string;
        /** The check-in value. */
        value?: number;
        /** The check-in goal. */
        goal?: number;
        /** The check-in status. */
        status?: number;
      };
      output: {
        /** A TickTick habit check-in group. */
        checkin: {
          /** The habit check-in document ID. */
          id?: string;
          /** The TickTick habit ID. */
          habitId?: string;
          /** The check-in document creation time in yyyy-MM-dd'T'HH:mm:ssZ format. */
          createdTime?: string;
          /** The check-in document modification time in yyyy-MM-dd'T'HH:mm:ssZ format. */
          modifiedTime?: string;
          /** The habit check-in entity tag. */
          etag?: string;
          /** The check-in year. */
          year?: number;
          /** The habit check-in records. */
          checkins?: Array<{
            /** The habit check-in ID. */
            id?: string;
            /** A date stamp in YYYYMMDD format. */
            stamp?: number;
            /** The check-in time in yyyy-MM-dd'T'HH:mm:ssZ format. */
            time?: string;
            /** The operation time in yyyy-MM-dd'T'HH:mm:ssZ format. */
            opTime?: string;
            /** The habit check-in value. */
            value?: number;
            /** The habit check-in goal. */
            goal?: number;
            /** The habit check-in status. */
            status?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a TickTick project with optional color, sort order, view mode, and kind. */
    "ticktick.create_project": {
      input: {
        /**
         * The TickTick project name.
         * @minLength 1
         */
        name: string;
        /** The TickTick project color. */
        color?: string;
        /** The TickTick project sort order. */
        sortOrder?: number;
        /** The TickTick project view mode. */
        viewMode?: "list" | "kanban" | "timeline";
        /** The TickTick project kind. */
        kind?: "TASK" | "NOTE" | "task" | "note";
      };
      output: {
        /** The created TickTick project. */
        project: {
          /** The TickTick project ID. */
          id: string;
          /** The TickTick project name. */
          name: string;
          /** The TickTick project color. */
          color?: string;
          /** The TickTick project sort order. */
          sortOrder?: number;
          /** Whether the TickTick project is closed. */
          closed?: boolean;
          /** The TickTick project group ID. */
          groupId?: string;
          /** The TickTick project view mode. */
          viewMode?: string;
          /** The TickTick project permission. */
          permission?: string;
          /** The TickTick project kind. */
          kind?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a TickTick task under a project with optional schedule, reminders, recurrence, and checklist items. */
    "ticktick.create_task": {
      input: {
        /**
         * The TickTick project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The TickTick task title.
         * @minLength 1
         */
        title: string;
        /** The TickTick task content. */
        content?: string;
        /** The TickTick task description. */
        desc?: string;
        /** Whether the TickTick task is all day. */
        isAllDay?: boolean;
        /** The task start date-time string. */
        startDate?: string;
        /** The task due date-time string. */
        dueDate?: string;
        /** The TickTick task time zone. */
        timeZone?: string;
        /** The reminder trigger strings attached to the task. */
        reminders?: Array<string>;
        /** The TickTick recurrence rule string. */
        repeatFlag?: string;
        /** The TickTick priority value. Valid values are 0, 1, 3, and 5. */
        priority?: 0 | 1 | 3 | 5;
        /** The TickTick task sort order. */
        sortOrder?: number;
        /** The checklist items to create under the task. */
        items?: Array<{
          /** The checklist item ID. */
          id?: string;
          /**
           * The checklist item title.
           * @minLength 1
           */
          title: string;
          /** The checklist item status. Use 0 for normal and 1 for completed. */
          status?: number;
          /** Whether the checklist item is all day. */
          isAllDay?: boolean;
          /** The time zone for the checklist item. */
          timeZone?: string;
          /** The sort order of the checklist item. */
          sortOrder?: number;
          /** The checklist item start date-time string. */
          startDate?: string;
          /** The checklist item completion date-time string. */
          completedTime?: string;
        }>;
      };
      output: {
        /** The created TickTick task. */
        task: {
          /** The TickTick task ID. */
          id: string;
          /** The TickTick project ID that owns the task. */
          projectId: string;
          /** The TickTick task title. */
          title?: string;
          /** The TickTick task content. */
          content?: string;
          /** The TickTick task description. */
          desc?: string;
          /** Whether the task is all day. */
          isAllDay?: boolean;
          /** The task start date-time string. */
          startDate?: string;
          /** The task due date-time string. */
          dueDate?: string;
          /** The TickTick task time zone. */
          timeZone?: string;
          /** The TickTick reminder trigger strings attached to the task. */
          reminders?: Array<string>;
          /** The TickTick recurrence rule string. */
          repeatFlag?: string;
          /** The TickTick priority value. */
          priority?: number;
          /** The TickTick task status code. */
          status?: number;
          /** The task completion date-time string. */
          completedTime?: string;
          /** The TickTick task sort order. */
          sortOrder?: number;
          /** The checklist items under the task. */
          items?: Array<{
            /** The checklist item ID. */
            id: string;
            /** The checklist item title. */
            title?: string;
            /** The checklist item status code. */
            status?: number;
            /** Whether the checklist item is all day. */
            isAllDay?: boolean;
            /** The time zone for the checklist item. */
            timeZone?: string;
            /** The checklist item sort order. */
            sortOrder?: number;
            /** The checklist item start date-time string. */
            startDate?: string;
            /** The checklist item completion date-time string. */
            completedTime?: string;
            [key: string]: unknown;
          }>;
          /** The TickTick entity tag. */
          etag?: string;
          /** The TickTick task kind. */
          kind?: string;
          tags?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a TickTick task under a project. This deprecated compatibility alias maps to the same official create-task API as create_task. */
    "ticktick.create_task2": {
      input: {
        /**
         * The TickTick project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The TickTick task title.
         * @minLength 1
         */
        title: string;
        /** The TickTick task content. */
        content?: string;
        /** The TickTick task description. */
        desc?: string;
        /** Whether the TickTick task is all day. */
        isAllDay?: boolean;
        /** The task start date-time string. */
        startDate?: string;
        /** The task due date-time string. */
        dueDate?: string;
        /** The TickTick task time zone. */
        timeZone?: string;
        /** The reminder trigger strings attached to the task. */
        reminders?: Array<string>;
        /** The TickTick recurrence rule string. */
        repeatFlag?: string;
        /** The TickTick priority value. Valid values are 0, 1, 3, and 5. */
        priority?: 0 | 1 | 3 | 5;
        /** The TickTick task sort order. */
        sortOrder?: number;
        /** The checklist items to create under the task. */
        items?: Array<{
          /** The checklist item ID. */
          id?: string;
          /**
           * The checklist item title.
           * @minLength 1
           */
          title: string;
          /** The checklist item status. Use 0 for normal and 1 for completed. */
          status?: number;
          /** Whether the checklist item is all day. */
          isAllDay?: boolean;
          /** The time zone for the checklist item. */
          timeZone?: string;
          /** The sort order of the checklist item. */
          sortOrder?: number;
          /** The checklist item start date-time string. */
          startDate?: string;
          /** The checklist item completion date-time string. */
          completedTime?: string;
        }>;
      };
      output: {
        /** The created TickTick task. */
        task: {
          /** The TickTick task ID. */
          id: string;
          /** The TickTick project ID that owns the task. */
          projectId: string;
          /** The TickTick task title. */
          title?: string;
          /** The TickTick task content. */
          content?: string;
          /** The TickTick task description. */
          desc?: string;
          /** Whether the task is all day. */
          isAllDay?: boolean;
          /** The task start date-time string. */
          startDate?: string;
          /** The task due date-time string. */
          dueDate?: string;
          /** The TickTick task time zone. */
          timeZone?: string;
          /** The TickTick reminder trigger strings attached to the task. */
          reminders?: Array<string>;
          /** The TickTick recurrence rule string. */
          repeatFlag?: string;
          /** The TickTick priority value. */
          priority?: number;
          /** The TickTick task status code. */
          status?: number;
          /** The task completion date-time string. */
          completedTime?: string;
          /** The TickTick task sort order. */
          sortOrder?: number;
          /** The checklist items under the task. */
          items?: Array<{
            /** The checklist item ID. */
            id: string;
            /** The checklist item title. */
            title?: string;
            /** The checklist item status code. */
            status?: number;
            /** Whether the checklist item is all day. */
            isAllDay?: boolean;
            /** The time zone for the checklist item. */
            timeZone?: string;
            /** The checklist item sort order. */
            sortOrder?: number;
            /** The checklist item start date-time string. */
            startDate?: string;
            /** The checklist item completion date-time string. */
            completedTime?: string;
            [key: string]: unknown;
          }>;
          /** The TickTick entity tag. */
          etag?: string;
          /** The TickTick task kind. */
          kind?: string;
          tags?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a TickTick project by project ID. The connector treats a missing project as already deleted. */
    "ticktick.delete_project": {
      input: {
        /**
         * The TickTick project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** Whether the TickTick project is deleted. */
        deleted: true;
        /** The TickTick project ID. */
        projectId: string;
      };
    };
    /** Delete a TickTick task by project ID and task ID. The connector treats a missing task as already deleted. */
    "ticktick.delete_task": {
      input: {
        /**
         * The TickTick project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The TickTick task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Whether the TickTick task is deleted. */
        deleted: true;
        /** The TickTick project ID. */
        projectId: string;
        /** The TickTick task ID. */
        taskId: string;
      };
    };
    /** Filter TickTick tasks by project, date range, priority, tags, and status by using the official filter endpoint. */
    "ticktick.filter_tasks": {
      input: {
        /** An optional list of project IDs to filter by. */
        projectIds?: Array<string>;
        /** Only include tasks whose startDate is on or after this date-time string. */
        startDate?: string;
        /** Only include tasks whose startDate is on or before this date-time string. */
        endDate?: string;
        /** An optional list of TickTick priority values. */
        priority?: Array<0 | 1 | 3 | 5>;
        tag?: Array<string>;
        /** An optional list of TickTick task status codes. */
        status?: Array<number>;
      };
      output: {
        /** The TickTick tasks returned by the filter. */
        tasks: Array<{
          /** The TickTick task ID. */
          id: string;
          /** The TickTick project ID that owns the task. */
          projectId: string;
          /** The TickTick task title. */
          title?: string;
          /** The TickTick task content. */
          content?: string;
          /** The TickTick task description. */
          desc?: string;
          /** Whether the task is all day. */
          isAllDay?: boolean;
          /** The task start date-time string. */
          startDate?: string;
          /** The task due date-time string. */
          dueDate?: string;
          /** The TickTick task time zone. */
          timeZone?: string;
          /** The TickTick reminder trigger strings attached to the task. */
          reminders?: Array<string>;
          /** The TickTick recurrence rule string. */
          repeatFlag?: string;
          /** The TickTick priority value. */
          priority?: number;
          /** The TickTick task status code. */
          status?: number;
          /** The task completion date-time string. */
          completedTime?: string;
          /** The TickTick task sort order. */
          sortOrder?: number;
          /** The checklist items under the task. */
          items?: Array<{
            /** The checklist item ID. */
            id: string;
            /** The checklist item title. */
            title?: string;
            /** The checklist item status code. */
            status?: number;
            /** Whether the checklist item is all day. */
            isAllDay?: boolean;
            /** The time zone for the checklist item. */
            timeZone?: string;
            /** The checklist item sort order. */
            sortOrder?: number;
            /** The checklist item start date-time string. */
            startDate?: string;
            /** The checklist item completion date-time string. */
            completedTime?: string;
            [key: string]: unknown;
          }>;
          /** The TickTick entity tag. */
          etag?: string;
          /** The TickTick task kind. */
          kind?: string;
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get a TickTick habit by its habit ID. */
    "ticktick.get_habit": {
      input: {
        /**
         * The TickTick habit ID.
         * @minLength 1
         */
        habitId: string;
      };
      output: {
        /** A TickTick habit. */
        habit: {
          /** The TickTick habit ID. */
          id?: string;
          /** The TickTick habit name. */
          name?: string;
          /** The habit icon resource. */
          iconRes?: string;
          /** The habit color. */
          color?: string;
          /** The habit sort order. */
          sortOrder?: number;
          /** The habit status. */
          status?: number;
          /** The habit encouragement message. */
          encouragement?: string;
          /** The total check-in count for the habit. */
          totalCheckIns?: number;
          /** The TickTick date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          createdTime?: string;
          /** The TickTick date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          modifiedTime?: string;
          /** The TickTick date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          archivedTime?: string;
          /** The habit type. */
          type?: string;
          /** The habit goal. */
          goal?: number;
          /** The habit step. */
          step?: number;
          /** The habit unit. */
          unit?: string;
          /** The TickTick habit entity tag. */
          etag?: string;
          /** The habit recurrence rule. */
          repeatRule?: string;
          /** The habit reminder trigger strings. */
          reminders?: Array<string>;
          /** Whether record mode is enabled for the habit. */
          recordEnable?: boolean;
          /** The habit section ID. */
          sectionId?: string;
          /** The habit target days value. */
          targetDays?: number;
          /** A date stamp in YYYYMMDD format. */
          targetStartDate?: number;
          /** The number of completed habit cycles. */
          completedCycles?: number;
          /** The habit excluded dates. */
          exDates?: Array<string>;
          /** The habit style value. */
          style?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get a TickTick project by its project ID. */
    "ticktick.get_project_by_id": {
      input: {
        /**
         * The TickTick project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** The TickTick project. */
        project: {
          /** The TickTick project ID. */
          id: string;
          /** The TickTick project name. */
          name: string;
          /** The TickTick project color. */
          color?: string;
          /** The TickTick project sort order. */
          sortOrder?: number;
          /** Whether the TickTick project is closed. */
          closed?: boolean;
          /** The TickTick project group ID. */
          groupId?: string;
          /** The TickTick project view mode. */
          viewMode?: string;
          /** The TickTick project permission. */
          permission?: string;
          /** The TickTick project kind. */
          kind?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a TickTick project together with its undone tasks and columns by project ID. */
    "ticktick.get_project_with_data": {
      input: {
        /**
         * The TickTick project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** The TickTick project. */
        project: {
          /** The TickTick project ID. */
          id: string;
          /** The TickTick project name. */
          name: string;
          /** The TickTick project color. */
          color?: string;
          /** The TickTick project sort order. */
          sortOrder?: number;
          /** Whether the TickTick project is closed. */
          closed?: boolean;
          /** The TickTick project group ID. */
          groupId?: string;
          /** The TickTick project view mode. */
          viewMode?: string;
          /** The TickTick project permission. */
          permission?: string;
          /** The TickTick project kind. */
          kind?: string;
          [key: string]: unknown;
        };
        /** The undone tasks under the project. */
        tasks: Array<{
          /** The TickTick task ID. */
          id: string;
          /** The TickTick project ID that owns the task. */
          projectId: string;
          /** The TickTick task title. */
          title?: string;
          /** The TickTick task content. */
          content?: string;
          /** The TickTick task description. */
          desc?: string;
          /** Whether the task is all day. */
          isAllDay?: boolean;
          /** The task start date-time string. */
          startDate?: string;
          /** The task due date-time string. */
          dueDate?: string;
          /** The TickTick task time zone. */
          timeZone?: string;
          /** The TickTick reminder trigger strings attached to the task. */
          reminders?: Array<string>;
          /** The TickTick recurrence rule string. */
          repeatFlag?: string;
          /** The TickTick priority value. */
          priority?: number;
          /** The TickTick task status code. */
          status?: number;
          /** The task completion date-time string. */
          completedTime?: string;
          /** The TickTick task sort order. */
          sortOrder?: number;
          /** The checklist items under the task. */
          items?: Array<{
            /** The checklist item ID. */
            id: string;
            /** The checklist item title. */
            title?: string;
            /** The checklist item status code. */
            status?: number;
            /** Whether the checklist item is all day. */
            isAllDay?: boolean;
            /** The time zone for the checklist item. */
            timeZone?: string;
            /** The checklist item sort order. */
            sortOrder?: number;
            /** The checklist item start date-time string. */
            startDate?: string;
            /** The checklist item completion date-time string. */
            completedTime?: string;
            [key: string]: unknown;
          }>;
          /** The TickTick entity tag. */
          etag?: string;
          /** The TickTick task kind. */
          kind?: string;
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
        /** The columns under the project. */
        columns: Array<{
          /** The TickTick column ID. */
          id: string;
          /** The TickTick project ID that owns the column. */
          projectId: string;
          /** The TickTick column name. */
          name: string;
          /** The TickTick column sort order. */
          sortOrder?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get a TickTick task by project ID and task ID. */
    "ticktick.get_task_by_project_and_id": {
      input: {
        /**
         * The TickTick project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The TickTick task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The TickTick task. */
        task: {
          /** The TickTick task ID. */
          id: string;
          /** The TickTick project ID that owns the task. */
          projectId: string;
          /** The TickTick task title. */
          title?: string;
          /** The TickTick task content. */
          content?: string;
          /** The TickTick task description. */
          desc?: string;
          /** Whether the task is all day. */
          isAllDay?: boolean;
          /** The task start date-time string. */
          startDate?: string;
          /** The task due date-time string. */
          dueDate?: string;
          /** The TickTick task time zone. */
          timeZone?: string;
          /** The TickTick reminder trigger strings attached to the task. */
          reminders?: Array<string>;
          /** The TickTick recurrence rule string. */
          repeatFlag?: string;
          /** The TickTick priority value. */
          priority?: number;
          /** The TickTick task status code. */
          status?: number;
          /** The task completion date-time string. */
          completedTime?: string;
          /** The TickTick task sort order. */
          sortOrder?: number;
          /** The checklist items under the task. */
          items?: Array<{
            /** The checklist item ID. */
            id: string;
            /** The checklist item title. */
            title?: string;
            /** The checklist item status code. */
            status?: number;
            /** Whether the checklist item is all day. */
            isAllDay?: boolean;
            /** The time zone for the checklist item. */
            timeZone?: string;
            /** The checklist item sort order. */
            sortOrder?: number;
            /** The checklist item start date-time string. */
            startDate?: string;
            /** The checklist item completion date-time string. */
            completedTime?: string;
            [key: string]: unknown;
          }>;
          /** The TickTick entity tag. */
          etag?: string;
          /** The TickTick task kind. */
          kind?: string;
          tags?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** List the projects available to the connected TickTick account. */
    "ticktick.get_user_project": {
      input: Record<string, never>;
      output: {
        /** The TickTick projects. */
        projects: Array<{
          /** The TickTick project ID. */
          id: string;
          /** The TickTick project name. */
          name: string;
          /** The TickTick project color. */
          color?: string;
          /** The TickTick project sort order. */
          sortOrder?: number;
          /** Whether the TickTick project is closed. */
          closed?: boolean;
          /** The TickTick project group ID. */
          groupId?: string;
          /** The TickTick project view mode. */
          viewMode?: string;
          /** The TickTick project permission. */
          permission?: string;
          /** The TickTick project kind. */
          kind?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List undone TickTick tasks across projects. This is a connector-level aggregate helper over list-projects plus project-data fetches. */
    "ticktick.list_all_tasks": {
      input: {
        /**
         * The maximum number of tasks to return after aggregation.
         * @minimum 1
         */
        limit?: number;
        /** An optional list of project IDs to include. */
        projectIds?: Array<string>;
        /** Whether closed projects should be included in the aggregation. */
        includeClosedProjects?: boolean;
      };
      output: {
        /** The aggregated undone tasks across the scanned projects. */
        tasks: Array<{
          /** The TickTick task ID. */
          id: string;
          /** The TickTick project ID that owns the task. */
          projectId: string;
          /** The name of the project that owns the task. */
          projectName: string;
          /** Whether the source project is closed. */
          projectClosed?: boolean;
          /** The kind of the source project. */
          projectKind?: string;
          /** The TickTick task title. */
          title?: string;
          /** The TickTick task content. */
          content?: string;
          /** The TickTick task description. */
          desc?: string;
          /** Whether the task is all day. */
          isAllDay?: boolean;
          /** The task start date-time string. */
          startDate?: string;
          /** The task due date-time string. */
          dueDate?: string;
          /** The TickTick task time zone. */
          timeZone?: string;
          /** The TickTick reminder trigger strings attached to the task. */
          reminders?: Array<string>;
          /** The TickTick recurrence rule string. */
          repeatFlag?: string;
          /** The TickTick priority value. */
          priority?: number;
          /** The TickTick task status code. */
          status?: number;
          /** The task completion date-time string. */
          completedTime?: string;
          /** The TickTick task sort order. */
          sortOrder?: number;
          /** The checklist items under the task. */
          items?: Array<{
            /** The checklist item ID. */
            id: string;
            /** The checklist item title. */
            title?: string;
            /** The checklist item status code. */
            status?: number;
            /** Whether the checklist item is all day. */
            isAllDay?: boolean;
            /** The time zone for the checklist item. */
            timeZone?: string;
            /** The checklist item sort order. */
            sortOrder?: number;
            /** The checklist item start date-time string. */
            startDate?: string;
            /** The checklist item completion date-time string. */
            completedTime?: string;
            [key: string]: unknown;
          }>;
          /** The TickTick entity tag. */
          etag?: string;
          /** The TickTick task kind. */
          kind?: string;
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
        /** The number of tasks returned by the connector. */
        totalTasks: number;
        /** The number of projects scanned by the connector. */
        projectsScanned: number;
      };
    };
    /** List completed TickTick tasks within optional project and date filters by using the official completed-tasks endpoint. */
    "ticktick.list_completed_tasks": {
      input: {
        /** An optional list of project IDs to filter by. */
        projectIds?: Array<string>;
        /** Only include tasks completed on or after this date-time string. */
        startDate?: string;
        /** Only include tasks completed on or before this date-time string. */
        endDate?: string;
      };
      output: {
        /** The completed TickTick tasks. */
        tasks: Array<{
          /** The TickTick task ID. */
          id: string;
          /** The TickTick project ID that owns the task. */
          projectId: string;
          /** The TickTick task title. */
          title?: string;
          /** The TickTick task content. */
          content?: string;
          /** The TickTick task description. */
          desc?: string;
          /** Whether the task is all day. */
          isAllDay?: boolean;
          /** The task start date-time string. */
          startDate?: string;
          /** The task due date-time string. */
          dueDate?: string;
          /** The TickTick task time zone. */
          timeZone?: string;
          /** The TickTick reminder trigger strings attached to the task. */
          reminders?: Array<string>;
          /** The TickTick recurrence rule string. */
          repeatFlag?: string;
          /** The TickTick priority value. */
          priority?: number;
          /** The TickTick task status code. */
          status?: number;
          /** The task completion date-time string. */
          completedTime?: string;
          /** The TickTick task sort order. */
          sortOrder?: number;
          /** The checklist items under the task. */
          items?: Array<{
            /** The checklist item ID. */
            id: string;
            /** The checklist item title. */
            title?: string;
            /** The checklist item status code. */
            status?: number;
            /** Whether the checklist item is all day. */
            isAllDay?: boolean;
            /** The time zone for the checklist item. */
            timeZone?: string;
            /** The checklist item sort order. */
            sortOrder?: number;
            /** The checklist item start date-time string. */
            startDate?: string;
            /** The checklist item completion date-time string. */
            completedTime?: string;
            [key: string]: unknown;
          }>;
          /** The TickTick entity tag. */
          etag?: string;
          /** The TickTick task kind. */
          kind?: string;
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List TickTick habit check-ins for one or more habits over a date stamp range. */
    "ticktick.list_habit_checkins": {
      input: {
        /**
         * The TickTick habit IDs to query.
         * @minItems 1
         */
        habitIds: Array<string>;
        /** A date stamp in YYYYMMDD format. */
        from: number;
        /** A date stamp in YYYYMMDD format. */
        to: number;
      };
      output: {
        /** The TickTick habit check-in groups. */
        checkins: Array<{
          /** The habit check-in document ID. */
          id?: string;
          /** The TickTick habit ID. */
          habitId?: string;
          /** The check-in document creation time in yyyy-MM-dd'T'HH:mm:ssZ format. */
          createdTime?: string;
          /** The check-in document modification time in yyyy-MM-dd'T'HH:mm:ssZ format. */
          modifiedTime?: string;
          /** The habit check-in entity tag. */
          etag?: string;
          /** The check-in year. */
          year?: number;
          /** The habit check-in records. */
          checkins?: Array<{
            /** The habit check-in ID. */
            id?: string;
            /** A date stamp in YYYYMMDD format. */
            stamp?: number;
            /** The check-in time in yyyy-MM-dd'T'HH:mm:ssZ format. */
            time?: string;
            /** The operation time in yyyy-MM-dd'T'HH:mm:ssZ format. */
            opTime?: string;
            /** The habit check-in value. */
            value?: number;
            /** The habit check-in goal. */
            goal?: number;
            /** The habit check-in status. */
            status?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List habits available to the connected TickTick account. */
    "ticktick.list_habits": {
      input: Record<string, never>;
      output: {
        /** The TickTick habits. */
        habits: Array<{
          /** The TickTick habit ID. */
          id?: string;
          /** The TickTick habit name. */
          name?: string;
          /** The habit icon resource. */
          iconRes?: string;
          /** The habit color. */
          color?: string;
          /** The habit sort order. */
          sortOrder?: number;
          /** The habit status. */
          status?: number;
          /** The habit encouragement message. */
          encouragement?: string;
          /** The total check-in count for the habit. */
          totalCheckIns?: number;
          /** The TickTick date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          createdTime?: string;
          /** The TickTick date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          modifiedTime?: string;
          /** The TickTick date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          archivedTime?: string;
          /** The habit type. */
          type?: string;
          /** The habit goal. */
          goal?: number;
          /** The habit step. */
          step?: number;
          /** The habit unit. */
          unit?: string;
          /** The TickTick habit entity tag. */
          etag?: string;
          /** The habit recurrence rule. */
          repeatRule?: string;
          /** The habit reminder trigger strings. */
          reminders?: Array<string>;
          /** Whether record mode is enabled for the habit. */
          recordEnable?: boolean;
          /** The habit section ID. */
          sectionId?: string;
          /** The habit target days value. */
          targetDays?: number;
          /** A date stamp in YYYYMMDD format. */
          targetStartDate?: number;
          /** The number of completed habit cycles. */
          completedCycles?: number;
          /** The habit excluded dates. */
          exDates?: Array<string>;
          /** The habit style value. */
          style?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Move one or more TickTick tasks between projects by using the official move endpoint. */
    "ticktick.move_tasks": {
      input: {
        /**
         * The TickTick task move operations to submit.
         * @minItems 1
         */
        moves: Array<{
          /**
           * The source TickTick project ID.
           * @minLength 1
           */
          fromProjectId: string;
          /**
           * The destination TickTick project ID.
           * @minLength 1
           */
          toProjectId: string;
          /**
           * The TickTick task ID to move.
           * @minLength 1
           */
          taskId: string;
        }>;
      };
      output: {
        /** The TickTick move results. */
        moves: Array<{
          /** The TickTick task ID that was moved. */
          id: string;
          /** The entity tag returned after the move. */
          etag?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update a TickTick project by project ID. */
    "ticktick.update_project": {
      input: {
        /**
         * The TickTick project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The TickTick project name.
         * @minLength 1
         */
        name?: string;
        /** The TickTick project color. */
        color?: string;
        /** The TickTick project sort order. */
        sortOrder?: number;
        /** The TickTick project view mode. */
        viewMode?: "list" | "kanban" | "timeline";
        /** The TickTick project kind. */
        kind?: "TASK" | "NOTE" | "task" | "note";
      };
      output: {
        /** The updated TickTick project. */
        project: {
          /** The TickTick project ID. */
          id: string;
          /** The TickTick project name. */
          name: string;
          /** The TickTick project color. */
          color?: string;
          /** The TickTick project sort order. */
          sortOrder?: number;
          /** Whether the TickTick project is closed. */
          closed?: boolean;
          /** The TickTick project group ID. */
          groupId?: string;
          /** The TickTick project view mode. */
          viewMode?: string;
          /** The TickTick project permission. */
          permission?: string;
          /** The TickTick project kind. */
          kind?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a TickTick task by task ID and project ID, including checklist items and recurrence fields. */
    "ticktick.update_task": {
      input: {
        /**
         * The TickTick task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * Optional task ID repeated in the request body. When provided it must match taskId.
         * @minLength 1
         */
        id?: string;
        /**
         * The TickTick project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The TickTick task title.
         * @minLength 1
         */
        title?: string;
        /** The TickTick task content. */
        content?: string;
        /** The TickTick task description. */
        desc?: string;
        /** Whether the TickTick task is all day. */
        isAllDay?: boolean;
        /** The task start date-time string. */
        startDate?: string;
        /** The task due date-time string. */
        dueDate?: string;
        /** The TickTick task time zone. */
        timeZone?: string;
        /** The reminder trigger strings attached to the task. */
        reminders?: Array<string>;
        /** The TickTick recurrence rule string. */
        repeatFlag?: string;
        /** The TickTick priority value. Valid values are 0, 1, 3, and 5. */
        priority?: 0 | 1 | 3 | 5;
        /** The TickTick task sort order. */
        sortOrder?: number;
        /** The checklist items to send in the update payload. */
        items?: Array<{
          /** The checklist item ID. */
          id?: string;
          /**
           * The checklist item title.
           * @minLength 1
           */
          title: string;
          /** The checklist item status. Use 0 for normal and 1 for completed. */
          status?: number;
          /** Whether the checklist item is all day. */
          isAllDay?: boolean;
          /** The time zone for the checklist item. */
          timeZone?: string;
          /** The sort order of the checklist item. */
          sortOrder?: number;
          /** The checklist item start date-time string. */
          startDate?: string;
          /** The checklist item completion date-time string. */
          completedTime?: string;
        }>;
      };
      output: {
        /** The updated TickTick task. */
        task: {
          /** The TickTick task ID. */
          id: string;
          /** The TickTick project ID that owns the task. */
          projectId: string;
          /** The TickTick task title. */
          title?: string;
          /** The TickTick task content. */
          content?: string;
          /** The TickTick task description. */
          desc?: string;
          /** Whether the task is all day. */
          isAllDay?: boolean;
          /** The task start date-time string. */
          startDate?: string;
          /** The task due date-time string. */
          dueDate?: string;
          /** The TickTick task time zone. */
          timeZone?: string;
          /** The TickTick reminder trigger strings attached to the task. */
          reminders?: Array<string>;
          /** The TickTick recurrence rule string. */
          repeatFlag?: string;
          /** The TickTick priority value. */
          priority?: number;
          /** The TickTick task status code. */
          status?: number;
          /** The task completion date-time string. */
          completedTime?: string;
          /** The TickTick task sort order. */
          sortOrder?: number;
          /** The checklist items under the task. */
          items?: Array<{
            /** The checklist item ID. */
            id: string;
            /** The checklist item title. */
            title?: string;
            /** The checklist item status code. */
            status?: number;
            /** Whether the checklist item is all day. */
            isAllDay?: boolean;
            /** The time zone for the checklist item. */
            timeZone?: string;
            /** The checklist item sort order. */
            sortOrder?: number;
            /** The checklist item start date-time string. */
            startDate?: string;
            /** The checklist item completion date-time string. */
            completedTime?: string;
            [key: string]: unknown;
          }>;
          /** The TickTick entity tag. */
          etag?: string;
          /** The TickTick task kind. */
          kind?: string;
          tags?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
  }
}
