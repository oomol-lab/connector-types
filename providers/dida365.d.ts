import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Mark a Dida365 (滴答清单) task as completed by project ID and task ID. */
    "dida365.complete_task": {
      input: {
        /**
         * The Dida365 project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Dida365 task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Whether the Dida365 task is completed. */
        completed: true;
        /** The Dida365 project ID. */
        projectId: string;
        /** The Dida365 task ID. */
        taskId: string;
      };
    };
    /** Create or update a Dida365 (滴答清单) habit check-in for a date stamp. */
    "dida365.create_or_update_habit_checkin": {
      input: {
        /**
         * The Dida365 habit ID.
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
        /** A Dida365 habit check-in group. */
        checkin: {
          /** The Dida365 habit ID. */
          habitId?: string;
          /** The check-in year. */
          year?: number;
          /** The habit check-in records. */
          checkins?: Array<{
            /** A date stamp in YYYYMMDD format. */
            stamp?: number;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
            time?: string;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
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
    /** Create a Dida365 (滴答清单) project with optional color, sort order, view mode, and kind. */
    "dida365.create_project": {
      input: {
        /**
         * The Dida365 project name.
         * @minLength 1
         */
        name: string;
        /** The Dida365 project color. */
        color?: string;
        /** The sort order value. */
        sortOrder?: number;
        /** The Dida365 project view mode. */
        viewMode?: "list" | "kanban" | "timeline";
        /** The Dida365 project kind. */
        kind?: "TASK" | "NOTE" | "task" | "note";
      };
      output: {
        /** A Dida365 project. */
        project: {
          /** The Dida365 project ID. */
          id?: string;
          /** The Dida365 project name. */
          name?: string;
          /** The Dida365 project color. */
          color?: string;
          /** The sort order value. */
          sortOrder?: number;
          /** Whether the Dida365 project is closed. */
          closed?: boolean;
          /** The Dida365 project group ID. */
          groupId?: string;
          /** The Dida365 project view mode. */
          viewMode?: string;
          /** The Dida365 project permission. */
          permission?: string;
          /** The Dida365 project kind. */
          kind?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Dida365 (滴答清单) task under a project with optional schedule, reminders, recurrence, and checklist items. */
    "dida365.create_task": {
      input: {
        /**
         * The Dida365 project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Dida365 task title.
         * @minLength 1
         */
        title: string;
        /** The Dida365 task content. */
        content?: string;
        /** The Dida365 task description. */
        desc?: string;
        /** Whether the Dida365 task is all day. */
        isAllDay?: boolean;
        /** The task start date-time string. */
        startDate?: string;
        /** The task due date-time string. */
        dueDate?: string;
        /** The Dida365 task time zone. */
        timeZone?: string;
        /** The reminder trigger strings attached to the task. */
        reminders?: Array<string>;
        /** The Dida365 tags attached to the task. */
        tags?: Array<string>;
        /** The Dida365 recurrence rule string. */
        repeatFlag?: string;
        /** The Dida365 priority value. Valid values are 0, 1, 3, and 5. */
        priority?: 0 | 1 | 3 | 5;
        /** The sort order value. */
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
          /** The sort order value. */
          sortOrder?: number;
          /** The checklist item start date-time string. */
          startDate?: string;
          /** The checklist item completion date-time string. */
          completedTime?: string;
        }>;
      };
      output: {
        /** A Dida365 task. */
        task: {
          /** The Dida365 task ID. */
          id?: string;
          /** The Dida365 project ID that owns the task. */
          projectId?: string;
          /** The Dida365 task title. */
          title?: string;
          /** The Dida365 task content. */
          content?: string;
          /** The Dida365 task description. */
          desc?: string;
          /** Whether the task is all day. */
          isAllDay?: boolean;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          startDate?: string;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          dueDate?: string;
          /** The Dida365 task time zone. */
          timeZone?: string;
          /** The Dida365 reminder trigger strings attached to the task. */
          reminders?: Array<string>;
          /** The Dida365 recurrence rule string. */
          repeatFlag?: string;
          /** The Dida365 priority value. */
          priority?: number;
          /** The Dida365 task status code. */
          status?: number;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          completedTime?: string;
          /** The sort order value. */
          sortOrder?: number;
          /** The checklist items under the task. */
          items?: Array<{
            /** The checklist item ID. */
            id?: string;
            /** The checklist item title. */
            title?: string;
            /** The checklist item status code. */
            status?: number;
            /** Whether the checklist item is all day. */
            isAllDay?: boolean;
            /** The time zone for the checklist item. */
            timeZone?: string;
            /** The sort order value. */
            sortOrder?: number;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
            startDate?: string;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
            completedTime?: string;
            [key: string]: unknown;
          }>;
          /** The Dida365 entity tag. */
          etag?: string;
          /** The Dida365 task kind. */
          kind?: string;
          /** The Dida365 tags attached to the task. */
          tags?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Dida365 (滴答清单) project by project ID. The connector treats a missing project as already deleted. */
    "dida365.delete_project": {
      input: {
        /**
         * The Dida365 project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** Whether the Dida365 project is deleted. */
        deleted: true;
        /** The Dida365 project ID. */
        projectId: string;
      };
    };
    /** Delete a Dida365 (滴答清单) task by project ID and task ID. The connector treats a missing task as already deleted. */
    "dida365.delete_task": {
      input: {
        /**
         * The Dida365 project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Dida365 task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Whether the Dida365 task is deleted. */
        deleted: true;
        /** The Dida365 project ID. */
        projectId: string;
        /** The Dida365 task ID. */
        taskId: string;
      };
    };
    /** Filter Dida365 (滴答清单) tasks by project, date range, priority, tags, and status by using the official filter endpoint. */
    "dida365.filter_tasks": {
      input: {
        /** An optional list of project IDs to filter by. */
        projectIds?: Array<string>;
        /** Only include tasks whose startDate is on or after this date-time string. */
        startDate?: string;
        /** Only include tasks whose startDate is on or before this date-time string. */
        endDate?: string;
        /** An optional list of Dida365 priority values. */
        priority?: Array<0 | 1 | 3 | 5>;
        /** An optional list of Dida365 tag values. */
        tag?: Array<string>;
        /** An optional list of Dida365 task status codes. */
        status?: Array<number>;
      };
      output: {
        /** The Dida365 tasks returned by the filter. */
        tasks: Array<{
          /** The Dida365 task ID. */
          id?: string;
          /** The Dida365 project ID that owns the task. */
          projectId?: string;
          /** The Dida365 task title. */
          title?: string;
          /** The Dida365 task content. */
          content?: string;
          /** The Dida365 task description. */
          desc?: string;
          /** Whether the task is all day. */
          isAllDay?: boolean;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          startDate?: string;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          dueDate?: string;
          /** The Dida365 task time zone. */
          timeZone?: string;
          /** The Dida365 reminder trigger strings attached to the task. */
          reminders?: Array<string>;
          /** The Dida365 recurrence rule string. */
          repeatFlag?: string;
          /** The Dida365 priority value. */
          priority?: number;
          /** The Dida365 task status code. */
          status?: number;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          completedTime?: string;
          /** The sort order value. */
          sortOrder?: number;
          /** The checklist items under the task. */
          items?: Array<{
            /** The checklist item ID. */
            id?: string;
            /** The checklist item title. */
            title?: string;
            /** The checklist item status code. */
            status?: number;
            /** Whether the checklist item is all day. */
            isAllDay?: boolean;
            /** The time zone for the checklist item. */
            timeZone?: string;
            /** The sort order value. */
            sortOrder?: number;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
            startDate?: string;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
            completedTime?: string;
            [key: string]: unknown;
          }>;
          /** The Dida365 entity tag. */
          etag?: string;
          /** The Dida365 task kind. */
          kind?: string;
          /** The Dida365 tags attached to the task. */
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get a Dida365 (滴答清单) habit by its habit ID. */
    "dida365.get_habit": {
      input: {
        /**
         * The Dida365 habit ID.
         * @minLength 1
         */
        habitId: string;
      };
      output: {
        /** A Dida365 habit. */
        habit: {
          /** The Dida365 habit ID. */
          id?: string;
          /** The Dida365 habit name. */
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
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          createdTime?: string;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          modifiedTime?: string;
          /** The habit type. */
          type?: string;
          /** The habit goal. */
          goal?: number;
          /** The habit step. */
          step?: number;
          /** The habit unit. */
          unit?: string;
          /** The Dida365 habit entity tag. */
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
    /** Get a Dida365 (滴答清单) project by its project ID. */
    "dida365.get_project_by_id": {
      input: {
        /**
         * The Dida365 project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** A Dida365 project. */
        project: {
          /** The Dida365 project ID. */
          id?: string;
          /** The Dida365 project name. */
          name?: string;
          /** The Dida365 project color. */
          color?: string;
          /** The sort order value. */
          sortOrder?: number;
          /** Whether the Dida365 project is closed. */
          closed?: boolean;
          /** The Dida365 project group ID. */
          groupId?: string;
          /** The Dida365 project view mode. */
          viewMode?: string;
          /** The Dida365 project permission. */
          permission?: string;
          /** The Dida365 project kind. */
          kind?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Dida365 (滴答清单) project together with its undone tasks and columns by project ID. */
    "dida365.get_project_with_data": {
      input: {
        /**
         * The Dida365 project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** A Dida365 project. */
        project: {
          /** The Dida365 project ID. */
          id?: string;
          /** The Dida365 project name. */
          name?: string;
          /** The Dida365 project color. */
          color?: string;
          /** The sort order value. */
          sortOrder?: number;
          /** Whether the Dida365 project is closed. */
          closed?: boolean;
          /** The Dida365 project group ID. */
          groupId?: string;
          /** The Dida365 project view mode. */
          viewMode?: string;
          /** The Dida365 project permission. */
          permission?: string;
          /** The Dida365 project kind. */
          kind?: string;
          [key: string]: unknown;
        };
        /** The undone tasks under the project. */
        tasks: Array<{
          /** The Dida365 task ID. */
          id?: string;
          /** The Dida365 project ID that owns the task. */
          projectId?: string;
          /** The Dida365 task title. */
          title?: string;
          /** The Dida365 task content. */
          content?: string;
          /** The Dida365 task description. */
          desc?: string;
          /** Whether the task is all day. */
          isAllDay?: boolean;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          startDate?: string;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          dueDate?: string;
          /** The Dida365 task time zone. */
          timeZone?: string;
          /** The Dida365 reminder trigger strings attached to the task. */
          reminders?: Array<string>;
          /** The Dida365 recurrence rule string. */
          repeatFlag?: string;
          /** The Dida365 priority value. */
          priority?: number;
          /** The Dida365 task status code. */
          status?: number;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          completedTime?: string;
          /** The sort order value. */
          sortOrder?: number;
          /** The checklist items under the task. */
          items?: Array<{
            /** The checklist item ID. */
            id?: string;
            /** The checklist item title. */
            title?: string;
            /** The checklist item status code. */
            status?: number;
            /** Whether the checklist item is all day. */
            isAllDay?: boolean;
            /** The time zone for the checklist item. */
            timeZone?: string;
            /** The sort order value. */
            sortOrder?: number;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
            startDate?: string;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
            completedTime?: string;
            [key: string]: unknown;
          }>;
          /** The Dida365 entity tag. */
          etag?: string;
          /** The Dida365 task kind. */
          kind?: string;
          /** The Dida365 tags attached to the task. */
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
        /** The columns under the project. */
        columns: Array<{
          /** The Dida365 column ID. */
          id?: string;
          /** The Dida365 project ID that owns the column. */
          projectId?: string;
          /** The Dida365 column name. */
          name?: string;
          /** The sort order value. */
          sortOrder?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get a Dida365 (滴答清单) task by project ID and task ID. */
    "dida365.get_task_by_project_and_id": {
      input: {
        /**
         * The Dida365 project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Dida365 task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** A Dida365 task. */
        task: {
          /** The Dida365 task ID. */
          id?: string;
          /** The Dida365 project ID that owns the task. */
          projectId?: string;
          /** The Dida365 task title. */
          title?: string;
          /** The Dida365 task content. */
          content?: string;
          /** The Dida365 task description. */
          desc?: string;
          /** Whether the task is all day. */
          isAllDay?: boolean;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          startDate?: string;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          dueDate?: string;
          /** The Dida365 task time zone. */
          timeZone?: string;
          /** The Dida365 reminder trigger strings attached to the task. */
          reminders?: Array<string>;
          /** The Dida365 recurrence rule string. */
          repeatFlag?: string;
          /** The Dida365 priority value. */
          priority?: number;
          /** The Dida365 task status code. */
          status?: number;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          completedTime?: string;
          /** The sort order value. */
          sortOrder?: number;
          /** The checklist items under the task. */
          items?: Array<{
            /** The checklist item ID. */
            id?: string;
            /** The checklist item title. */
            title?: string;
            /** The checklist item status code. */
            status?: number;
            /** Whether the checklist item is all day. */
            isAllDay?: boolean;
            /** The time zone for the checklist item. */
            timeZone?: string;
            /** The sort order value. */
            sortOrder?: number;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
            startDate?: string;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
            completedTime?: string;
            [key: string]: unknown;
          }>;
          /** The Dida365 entity tag. */
          etag?: string;
          /** The Dida365 task kind. */
          kind?: string;
          /** The Dida365 tags attached to the task. */
          tags?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** List the projects available to the connected Dida365 (滴答清单) account. */
    "dida365.get_user_project": {
      input: Record<string, never>;
      output: {
        /** The Dida365 projects. */
        projects: Array<{
          /** The Dida365 project ID. */
          id?: string;
          /** The Dida365 project name. */
          name?: string;
          /** The Dida365 project color. */
          color?: string;
          /** The sort order value. */
          sortOrder?: number;
          /** Whether the Dida365 project is closed. */
          closed?: boolean;
          /** The Dida365 project group ID. */
          groupId?: string;
          /** The Dida365 project view mode. */
          viewMode?: string;
          /** The Dida365 project permission. */
          permission?: string;
          /** The Dida365 project kind. */
          kind?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List undone Dida365 (滴答清单) tasks across projects. This is a connector-level aggregate helper over list-projects plus project-data fetches. */
    "dida365.list_all_tasks": {
      input: {
        /**
         * The maximum number of tasks to return after aggregation.
         * @exclusiveMinimum 0
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
          /** The Dida365 task ID. */
          id?: string;
          /** The Dida365 project ID that owns the task. */
          projectId?: string;
          /** The Dida365 task title. */
          title?: string;
          /** The Dida365 task content. */
          content?: string;
          /** The Dida365 task description. */
          desc?: string;
          /** Whether the task is all day. */
          isAllDay?: boolean;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          startDate?: string;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          dueDate?: string;
          /** The Dida365 task time zone. */
          timeZone?: string;
          /** The Dida365 reminder trigger strings attached to the task. */
          reminders?: Array<string>;
          /** The Dida365 recurrence rule string. */
          repeatFlag?: string;
          /** The Dida365 priority value. */
          priority?: number;
          /** The Dida365 task status code. */
          status?: number;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          completedTime?: string;
          /** The sort order value. */
          sortOrder?: number;
          /** The checklist items under the task. */
          items?: Array<{
            /** The checklist item ID. */
            id?: string;
            /** The checklist item title. */
            title?: string;
            /** The checklist item status code. */
            status?: number;
            /** Whether the checklist item is all day. */
            isAllDay?: boolean;
            /** The time zone for the checklist item. */
            timeZone?: string;
            /** The sort order value. */
            sortOrder?: number;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
            startDate?: string;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
            completedTime?: string;
            [key: string]: unknown;
          }>;
          /** The Dida365 entity tag. */
          etag?: string;
          /** The Dida365 task kind. */
          kind?: string;
          /** The Dida365 tags attached to the task. */
          tags?: Array<string>;
          /** The name of the project that owns the task. */
          projectName?: string;
          /** Whether the source project is closed. */
          projectClosed?: boolean;
          /** The kind of the source project. */
          projectKind?: string;
          [key: string]: unknown;
        }>;
        /** The number of tasks returned by the connector. */
        totalTasks: number;
        /** The number of projects scanned by the connector. */
        projectsScanned: number;
      };
    };
    /** List completed Dida365 (滴答清单) tasks within optional project and date filters by using the official completed-tasks endpoint. */
    "dida365.list_completed_tasks": {
      input: {
        /** An optional list of project IDs to filter by. */
        projectIds?: Array<string>;
        /** Only include tasks completed on or after this date-time string. */
        startDate?: string;
        /** Only include tasks completed on or before this date-time string. */
        endDate?: string;
      };
      output: {
        /** The completed Dida365 tasks. */
        tasks: Array<{
          /** The Dida365 task ID. */
          id?: string;
          /** The Dida365 project ID that owns the task. */
          projectId?: string;
          /** The Dida365 task title. */
          title?: string;
          /** The Dida365 task content. */
          content?: string;
          /** The Dida365 task description. */
          desc?: string;
          /** Whether the task is all day. */
          isAllDay?: boolean;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          startDate?: string;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          dueDate?: string;
          /** The Dida365 task time zone. */
          timeZone?: string;
          /** The Dida365 reminder trigger strings attached to the task. */
          reminders?: Array<string>;
          /** The Dida365 recurrence rule string. */
          repeatFlag?: string;
          /** The Dida365 priority value. */
          priority?: number;
          /** The Dida365 task status code. */
          status?: number;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          completedTime?: string;
          /** The sort order value. */
          sortOrder?: number;
          /** The checklist items under the task. */
          items?: Array<{
            /** The checklist item ID. */
            id?: string;
            /** The checklist item title. */
            title?: string;
            /** The checklist item status code. */
            status?: number;
            /** Whether the checklist item is all day. */
            isAllDay?: boolean;
            /** The time zone for the checklist item. */
            timeZone?: string;
            /** The sort order value. */
            sortOrder?: number;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
            startDate?: string;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
            completedTime?: string;
            [key: string]: unknown;
          }>;
          /** The Dida365 entity tag. */
          etag?: string;
          /** The Dida365 task kind. */
          kind?: string;
          /** The Dida365 tags attached to the task. */
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Dida365 (滴答清单) habit check-ins for one or more habits over a date stamp range. */
    "dida365.list_habit_checkins": {
      input: {
        /**
         * The Dida365 habit IDs to query.
         * @minItems 1
         */
        habitIds: Array<string>;
        /** A date stamp in YYYYMMDD format. */
        from: number;
        /** A date stamp in YYYYMMDD format. */
        to: number;
      };
      output: {
        /** The Dida365 habit check-in groups. */
        checkins: Array<{
          /** The Dida365 habit ID. */
          habitId?: string;
          /** The check-in year. */
          year?: number;
          /** The habit check-in records. */
          checkins?: Array<{
            /** A date stamp in YYYYMMDD format. */
            stamp?: number;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
            time?: string;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
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
    /** List habits available to the connected Dida365 (滴答清单) account. */
    "dida365.list_habits": {
      input: Record<string, never>;
      output: {
        /** The Dida365 habits. */
        habits: Array<{
          /** The Dida365 habit ID. */
          id?: string;
          /** The Dida365 habit name. */
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
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          createdTime?: string;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          modifiedTime?: string;
          /** The habit type. */
          type?: string;
          /** The habit goal. */
          goal?: number;
          /** The habit step. */
          step?: number;
          /** The habit unit. */
          unit?: string;
          /** The Dida365 habit entity tag. */
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
    /** Move one or more Dida365 (滴答清单) tasks between projects by using the official move endpoint. */
    "dida365.move_tasks": {
      input: {
        /**
         * The Dida365 task move operations to submit.
         * @minItems 1
         */
        moves: Array<{
          /**
           * The source Dida365 project ID.
           * @minLength 1
           */
          fromProjectId: string;
          /**
           * The destination Dida365 project ID.
           * @minLength 1
           */
          toProjectId: string;
          /**
           * The Dida365 task ID to move.
           * @minLength 1
           */
          taskId: string;
        }>;
      };
      output: {
        /** The Dida365 move results. */
        moves: Array<{
          /** The Dida365 task ID that was moved. */
          id?: string;
          /** The entity tag returned after the move. */
          etag?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update a Dida365 (滴答清单) project by project ID. */
    "dida365.update_project": {
      input: {
        /**
         * The Dida365 project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Dida365 project name.
         * @minLength 1
         */
        name?: string;
        /** The Dida365 project color. */
        color?: string;
        /** The sort order value. */
        sortOrder?: number;
        /** The Dida365 project view mode. */
        viewMode?: "list" | "kanban" | "timeline";
        /** The Dida365 project kind. */
        kind?: "TASK" | "NOTE" | "task" | "note";
      };
      output: {
        /** A Dida365 project. */
        project: {
          /** The Dida365 project ID. */
          id?: string;
          /** The Dida365 project name. */
          name?: string;
          /** The Dida365 project color. */
          color?: string;
          /** The sort order value. */
          sortOrder?: number;
          /** Whether the Dida365 project is closed. */
          closed?: boolean;
          /** The Dida365 project group ID. */
          groupId?: string;
          /** The Dida365 project view mode. */
          viewMode?: string;
          /** The Dida365 project permission. */
          permission?: string;
          /** The Dida365 project kind. */
          kind?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Dida365 (滴答清单) task by task ID and project ID, including checklist items and recurrence fields. */
    "dida365.update_task": {
      input: {
        /**
         * The Dida365 task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * Optional task ID repeated in the request body. When provided it must match taskId.
         * @minLength 1
         */
        id?: string;
        /**
         * The Dida365 project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Dida365 task title.
         * @minLength 1
         */
        title?: string;
        /** The Dida365 task content. */
        content?: string;
        /** The Dida365 task description. */
        desc?: string;
        /** Whether the Dida365 task is all day. */
        isAllDay?: boolean;
        /** The task start date-time string. */
        startDate?: string;
        /** The task due date-time string. */
        dueDate?: string;
        /** The Dida365 task time zone. */
        timeZone?: string;
        /** The reminder trigger strings attached to the task. */
        reminders?: Array<string>;
        /** The Dida365 tags attached to the task. */
        tags?: Array<string>;
        /** The Dida365 recurrence rule string. */
        repeatFlag?: string;
        /** The Dida365 priority value. Valid values are 0, 1, 3, and 5. */
        priority?: 0 | 1 | 3 | 5;
        /** The sort order value. */
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
          /** The sort order value. */
          sortOrder?: number;
          /** The checklist item start date-time string. */
          startDate?: string;
          /** The checklist item completion date-time string. */
          completedTime?: string;
        }>;
      };
      output: {
        /** A Dida365 task. */
        task: {
          /** The Dida365 task ID. */
          id?: string;
          /** The Dida365 project ID that owns the task. */
          projectId?: string;
          /** The Dida365 task title. */
          title?: string;
          /** The Dida365 task content. */
          content?: string;
          /** The Dida365 task description. */
          desc?: string;
          /** Whether the task is all day. */
          isAllDay?: boolean;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          startDate?: string;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          dueDate?: string;
          /** The Dida365 task time zone. */
          timeZone?: string;
          /** The Dida365 reminder trigger strings attached to the task. */
          reminders?: Array<string>;
          /** The Dida365 recurrence rule string. */
          repeatFlag?: string;
          /** The Dida365 priority value. */
          priority?: number;
          /** The Dida365 task status code. */
          status?: number;
          /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
          completedTime?: string;
          /** The sort order value. */
          sortOrder?: number;
          /** The checklist items under the task. */
          items?: Array<{
            /** The checklist item ID. */
            id?: string;
            /** The checklist item title. */
            title?: string;
            /** The checklist item status code. */
            status?: number;
            /** Whether the checklist item is all day. */
            isAllDay?: boolean;
            /** The time zone for the checklist item. */
            timeZone?: string;
            /** The sort order value. */
            sortOrder?: number;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
            startDate?: string;
            /** The Dida365 date-time string in yyyy-MM-dd'T'HH:mm:ssZ format. */
            completedTime?: string;
            [key: string]: unknown;
          }>;
          /** The Dida365 entity tag. */
          etag?: string;
          /** The Dida365 task kind. */
          kind?: string;
          /** The Dida365 tags attached to the task. */
          tags?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
  }
}
