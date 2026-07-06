import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a TimeCamp time entry. */
    "timecamp.create_time_entry": {
      input: {
        /**
         * The date for the time entry in YYYY-MM-DD format.
         * @format date
         */
        date: string;
        /**
         * The entry start time accepted by TimeCamp, such as HH:mm:ss or a full timestamp.
         * @minLength 1
         */
        startTime?: string;
        /**
         * The entry end time accepted by TimeCamp, such as HH:mm:ss or a full timestamp.
         * @minLength 1
         */
        endTime?: string;
        /**
         * The entry duration in seconds.
         * @minimum 1
         */
        duration?: number;
        /** The user ID for which TimeCamp should create the entry */
        userId?: string | number;
        /**
         * The task ID associated with the new entry.
         * @minimum 1
         */
        taskId?: number;
        /**
         * Tag IDs to attach to the new entry.
         * @minItems 1
         */
        tags?: Array<number>;
        /**
         * The note to attach to the new time entry.
         * @minLength 1
         */
        note?: string;
        /**
         * The description to attach to the new time entry.
         * @minLength 1
         */
        description?: string;
        /** Whether TimeCamp should mark the entry as billable. */
        billable?: boolean;
      };
      output: {
        /** The ID of the created TimeCamp time entry. */
        entryId: string | null;
        /** The raw TimeCamp response payload for this item. */
        raw: unknown;
      };
    };
    /** Get the TimeCamp user associated with the current API token. */
    "timecamp.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A normalized TimeCamp user. */
        user: {
          /** The TimeCamp user ID. */
          userId: string | null;
          /** The user's email address. */
          email: string | null;
          /** The user's display name. */
          displayName: string | null;
          /** The group ID associated with the user when returned. */
          groupId: string | null;
          /** The user's root group ID when returned. */
          rootGroupId: string | null;
          /** The user registration timestamp returned by TimeCamp. */
          registerTime: string | null;
          /** The user's last login timestamp when returned. */
          loginTime: string | null;
          /** The user's last desktop sync timestamp when returned. */
          syncTime: string | null;
          /** The permission flags returned by TimeCamp for this user. */
          permissions: Record<string, unknown>;
          /** The raw TimeCamp response payload for this item. */
          raw: unknown;
        };
      };
    };
    /** Get the current TimeCamp timer status. */
    "timecamp.get_timer_status": {
      input: Record<string, never>;
      output: {
        /** A normalized TimeCamp timer response. */
        timer: {
          /** Whether TimeCamp reports an active timer. */
          isTimerRunning: boolean | null;
          /** Elapsed timer seconds when TimeCamp returns them. */
          elapsed: number | null;
          /** The entry ID associated with the timer response. */
          entryId: string | null;
          /** The active timer ID when returned. */
          timerId: string | null;
          /** The new timer ID returned after starting a timer. */
          newTimerId: string | null;
          /** The timer start timestamp when returned. */
          startTime: string | null;
          /** The saved entry duration after stopping a timer. */
          entryTime: number | null;
          /** The raw TimeCamp response payload for this item. */
          raw: unknown;
        };
      };
    };
    /** List TimeCamp tasks or projects with optional task and status filters. */
    "timecamp.list_tasks": {
      input: {
        /**
         * Specific TimeCamp task IDs to request. Multiple values are sent as a comma-separated task_id query.
         * @minItems 1
         */
        taskIds?: Array<string | number>;
        /**
         * A TimeCamp external task ID to request.
         * @minLength 1
         */
        externalTaskId?: string;
        /**
         * Permission names used by TimeCamp to filter tasks.
         * @minItems 1
         */
        permissions?: Array<"create_subtask" | "edit_task_settings" | "track_time" | "view_detailed_data">;
        /** The TimeCamp task status filter. */
        status?: "active" | "archived" | "all";
        /** Whether TimeCamp should return minimal task information. */
        minimal?: boolean;
        /** Whether TimeCamp should ignore admin rights while filtering accessible tasks. */
        ignoreAdminRights?: boolean;
      };
      output: {
        /** The TimeCamp tasks returned by the API. */
        tasks: Array<{
          /** The TimeCamp task ID. */
          taskId: string | null;
          /** The parent task ID, or null for root-level projects. */
          parentId: string | null;
          /** The user ID that assigned this task when returned. */
          assignedBy: string | null;
          /** The task or project name. */
          name: string | null;
          /** The external task ID when configured. */
          externalTaskId: string | null;
          /** The external parent task ID when configured. */
          externalParentId: string | null;
          /** The task tree level when returned. */
          level: number | null;
          /** Whether TimeCamp marks the task as archived. */
          archived: boolean | null;
          /** Whether TimeCamp marks the task as billable. */
          billable: boolean | null;
          /** The task color returned by TimeCamp. */
          color: string | null;
          /** The task note returned by TimeCamp. */
          note: string | null;
          /** The task creation timestamp returned by TimeCamp. */
          addDate: string | null;
          /** The task modification timestamp returned by TimeCamp. */
          modifyTime: string | null;
          /** The TimeCamp users assigned to this task keyed by user ID. */
          users: Record<string, unknown>;
          /** The raw TimeCamp response payload for this item. */
          raw: unknown;
        }>;
        /** The raw TimeCamp tasks response. */
        raw: unknown;
      };
    };
    /** List TimeCamp time entries for a date or modification range. */
    "timecamp.list_time_entries": {
      input: {
        /**
         * The start date in YYYY-MM-DD format.
         * @format date
         */
        from?: string;
        /**
         * The end date in YYYY-MM-DD format.
         * @format date
         */
        to?: string;
        /** Whether TimeCamp should return only billable entries. */
        billable?: boolean;
        /**
         * The minimal latest modification date in YYYY-MM-DD format.
         * @format date
         */
        modifyFrom?: string;
        /**
         * The maximal latest modification date in YYYY-MM-DD format.
         * @format date
         */
        modifyTo?: string;
        /**
         * Tag IDs used to filter entries. TimeCamp receives one repeated tags_filter item per tag.
         * @minItems 1
         */
        tagIds?: Array<string | number>;
        /** Whether TimeCamp should apply approval-mode permissions. */
        approvalMode?: boolean;
        /** Extra fields TimeCamp should include in the response. */
        optionalFields?: "tags" | "breadcrumps";
        /** Whether TimeCamp should include project or task information. */
        includeProject?: boolean;
        /** Whether TimeCamp should include rate information. */
        includeRates?: boolean;
        /** Whether TimeCamp should include subtasks. */
        withSubtasks?: boolean;
        /** Whether TimeCamp should ignore invoiced entries. */
        ignoreInvoiced?: boolean;
        /** Whether TimeCamp should round entry durations. */
        roundDuration?: boolean;
        /** Whether TimeCamp should return only active entries. */
        activeOnly?: boolean;
        /**
         * User IDs to include. Use me for entries owned by the current user.
         * @minItems 1
         */
        userIds?: Array<string>;
      };
      output: {
        /** The TimeCamp time entries returned by the API. */
        timeEntries: Array<{
          /** The TimeCamp time entry ID. */
          entryId: string | null;
          /** The time entry duration in seconds. */
          duration: number | null;
          /** The TimeCamp user ID associated with the entry. */
          userId: string | null;
          /** The TimeCamp user name associated with the entry. */
          userName: string | null;
          /** The task ID associated with the entry. */
          taskId: string | null;
          /** The task name associated with the entry. */
          taskName: string | null;
          /** The time entry date. */
          date: string | null;
          /** The time entry start time. */
          startTime: string | null;
          /** The time entry end time. */
          endTime: string | null;
          /** The TimeCamp modification timestamp. */
          lastModify: string | null;
          /** Whether TimeCamp marks the entry as locked. */
          locked: boolean | null;
          /** Whether TimeCamp marks the entry as billable. */
          billable: boolean | null;
          /** The invoice ID associated with the entry when returned. */
          invoiceId: string | null;
          /** The time entry note or description. */
          note: string | null;
          /** The time entry color when returned. */
          color: string | null;
          /** The tags attached to the time entry. */
          tags: Array<{
            /** The TimeCamp tag list name. */
            tagListName: string | null;
            /** The TimeCamp tag list ID. */
            tagListId: string | null;
            /** The TimeCamp tag ID. */
            tagId: string | null;
            /** The tag name. */
            name: string | null;
            /** Whether TimeCamp marks the tag as mandatory. */
            mandatory: boolean | null;
            /** The raw TimeCamp response payload for this item. */
            raw: unknown;
          }>;
          /** Whether TimeCamp reports location history for this entry. */
          hasEntryLocationHistory: boolean | null;
          /** The raw TimeCamp response payload for this item. */
          raw: unknown;
        }>;
        /** The raw TimeCamp time entries response. */
        raw: unknown;
      };
    };
    /** List users in the connected TimeCamp account. */
    "timecamp.list_users": {
      input: {
        /** Whether TimeCamp should return only active users. */
        activeOnly?: boolean;
      };
      output: {
        /** The TimeCamp users returned by the API. */
        users: Array<{
          /** The TimeCamp user ID. */
          userId: string | null;
          /** The user's email address. */
          email: string | null;
          /** The user's display name. */
          displayName: string | null;
          /** The group ID associated with the user when returned. */
          groupId: string | null;
          /** The user's root group ID when returned. */
          rootGroupId: string | null;
          /** The user registration timestamp returned by TimeCamp. */
          registerTime: string | null;
          /** The user's last login timestamp when returned. */
          loginTime: string | null;
          /** The user's last desktop sync timestamp when returned. */
          syncTime: string | null;
          /** The permission flags returned by TimeCamp for this user. */
          permissions: Record<string, unknown>;
          /** The raw TimeCamp response payload for this item. */
          raw: unknown;
        }>;
      };
    };
    /** Start a TimeCamp timer, optionally attached to a task. */
    "timecamp.start_timer": {
      input: {
        /**
         * The task ID to track time against.
         * @minimum 1
         */
        taskId?: number;
        /**
         * The timestamp from which TimeCamp should start the timer.
         * @minLength 1
         */
        startedAt?: string;
      };
      output: {
        /** A normalized TimeCamp timer response. */
        timer: {
          /** Whether TimeCamp reports an active timer. */
          isTimerRunning: boolean | null;
          /** Elapsed timer seconds when TimeCamp returns them. */
          elapsed: number | null;
          /** The entry ID associated with the timer response. */
          entryId: string | null;
          /** The active timer ID when returned. */
          timerId: string | null;
          /** The new timer ID returned after starting a timer. */
          newTimerId: string | null;
          /** The timer start timestamp when returned. */
          startTime: string | null;
          /** The saved entry duration after stopping a timer. */
          entryTime: number | null;
          /** The raw TimeCamp response payload for this item. */
          raw: unknown;
        };
      };
    };
    /** Stop the current TimeCamp timer and save the tracked time. */
    "timecamp.stop_timer": {
      input: {
        /**
         * The timestamp at which TimeCamp should stop the timer.
         * @minLength 1
         */
        stoppedAt?: string;
      };
      output: {
        /** A normalized TimeCamp timer response. */
        timer: {
          /** Whether TimeCamp reports an active timer. */
          isTimerRunning: boolean | null;
          /** Elapsed timer seconds when TimeCamp returns them. */
          elapsed: number | null;
          /** The entry ID associated with the timer response. */
          entryId: string | null;
          /** The active timer ID when returned. */
          timerId: string | null;
          /** The new timer ID returned after starting a timer. */
          newTimerId: string | null;
          /** The timer start timestamp when returned. */
          startTime: string | null;
          /** The saved entry duration after stopping a timer. */
          entryTime: number | null;
          /** The raw TimeCamp response payload for this item. */
          raw: unknown;
        };
      };
    };
    /** Update an existing TimeCamp time entry. */
    "timecamp.update_time_entry": {
      input: {
        /**
         * The TimeCamp time entry ID to update.
         * @minimum 1
         */
        entryId: number;
        /**
         * The updated entry start time accepted by TimeCamp.
         * @minLength 1
         */
        startTime?: string;
        /**
         * The updated entry end time accepted by TimeCamp.
         * @minLength 1
         */
        endTime?: string;
        /**
         * The updated entry duration in seconds.
         * @minimum 1
         */
        duration?: number;
        /**
         * The updated entry date in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
        /**
         * The updated note for the time entry.
         * @minLength 1
         */
        note?: string;
        /**
         * The updated description for the time entry.
         * @minLength 1
         */
        description?: string;
        /**
         * The updated invoice ID associated with the entry.
         * @minimum 1
         */
        invoiceId?: number;
        /**
         * The updated task ID associated with the entry.
         * @minimum 1
         */
        taskId?: number;
        /** Whether TimeCamp should mark the entry as billable. */
        billable?: boolean;
      };
      output: {
        /** A normalized TimeCamp time entry. */
        timeEntry: {
          /** The TimeCamp time entry ID. */
          entryId: string | null;
          /** The time entry duration in seconds. */
          duration: number | null;
          /** The TimeCamp user ID associated with the entry. */
          userId: string | null;
          /** The TimeCamp user name associated with the entry. */
          userName: string | null;
          /** The task ID associated with the entry. */
          taskId: string | null;
          /** The task name associated with the entry. */
          taskName: string | null;
          /** The time entry date. */
          date: string | null;
          /** The time entry start time. */
          startTime: string | null;
          /** The time entry end time. */
          endTime: string | null;
          /** The TimeCamp modification timestamp. */
          lastModify: string | null;
          /** Whether TimeCamp marks the entry as locked. */
          locked: boolean | null;
          /** Whether TimeCamp marks the entry as billable. */
          billable: boolean | null;
          /** The invoice ID associated with the entry when returned. */
          invoiceId: string | null;
          /** The time entry note or description. */
          note: string | null;
          /** The time entry color when returned. */
          color: string | null;
          /** The tags attached to the time entry. */
          tags: Array<{
            /** The TimeCamp tag list name. */
            tagListName: string | null;
            /** The TimeCamp tag list ID. */
            tagListId: string | null;
            /** The TimeCamp tag ID. */
            tagId: string | null;
            /** The tag name. */
            name: string | null;
            /** Whether TimeCamp marks the tag as mandatory. */
            mandatory: boolean | null;
            /** The raw TimeCamp response payload for this item. */
            raw: unknown;
          }>;
          /** Whether TimeCamp reports location history for this entry. */
          hasEntryLocationHistory: boolean | null;
          /** The raw TimeCamp response payload for this item. */
          raw: unknown;
        };
      };
    };
  }
}
