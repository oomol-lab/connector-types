import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the current Sling API session, including user and organization details. */
    "sling.get_current_session": {
      input: Record<string, never>;
      output: {
        /** The Sling session record returned by the API. */
        session: Record<string, unknown>;
      };
    };
    /** Retrieve the current shift for the connected Sling user. */
    "sling.get_current_shift": {
      input: Record<string, never>;
      output: {
        /** The Sling shift record returned by the API. */
        shift: Record<string, unknown>;
      };
    };
    /** Retrieve supplementary details for one Sling shift. */
    "sling.get_detailed_shift": {
      input: {
        /** The Sling shift identifier. */
        shiftId: number | string;
      };
      output: {
        /** The Sling shift record returned by the API. */
        shift: Record<string, unknown>;
      };
    };
    /** Retrieve one Sling group by id. */
    "sling.get_group": {
      input: {
        /**
         * The Sling group identifier.
         * @exclusiveMinimum 0
         */
        groupId: number;
      };
      output: {
        /** The Sling group record returned by the API. */
        group: Record<string, unknown>;
      };
    };
    /** Retrieve the next shift for the connected Sling user. */
    "sling.get_next_shift": {
      input: {
        /**
         * Only return the first shift after this ISO timestamp.
         * @minLength 1
         */
        referenceDate?: string;
      };
      output: {
        /** The Sling shift record returned by the API. */
        shift: Record<string, unknown>;
      };
    };
    /** Retrieve one Sling shift by id. */
    "sling.get_shift": {
      input: {
        /**
         * The Sling shift or event identifier.
         * @minLength 1
         */
        shiftId: string;
        /** How much timesheet data Sling should include. */
        includeTimesheets?: "true" | "full";
      };
      output: {
        /** The Sling shift record returned by the API. */
        shift: Record<string, unknown>;
      };
    };
    /** Retrieve one Sling task by id. */
    "sling.get_task": {
      input: {
        /**
         * The Sling task identifier.
         * @exclusiveMinimum 0
         */
        taskId: number;
      };
      output: {
        /** The Sling task record returned by the API. */
        task: Record<string, unknown>;
      };
    };
    /** Retrieve one Sling user by id. */
    "sling.get_user": {
      input: {
        /**
         * The Sling user identifier.
         * @exclusiveMinimum 0
         */
        userId: number;
      };
      output: {
        /** The Sling user record returned by the API. */
        user: Record<string, unknown>;
      };
    };
    /** List Sling calendar events for one user and organization within an ISO interval. */
    "sling.list_calendar_events": {
      input: {
        /**
         * The Sling organization identifier.
         * @exclusiveMinimum 0
         */
        orgId: number;
        /**
         * The Sling user identifier.
         * @exclusiveMinimum 0
         */
        userId: number;
        /**
         * The ISO 8601 interval to fetch, such as 2026-06-24/2026-06-30.
         * @minLength 1
         */
        dates: string;
        /**
         * Sling location ids used to filter calendar events.
         * @minItems 1
         */
        locationIds?: Array<number>;
        /**
         * Sling position ids used to filter calendar events.
         * @minItems 1
         */
        positionIds?: Array<number>;
        /**
         * Sling tag ids used to include calendar events.
         * @minItems 1
         */
        tagIds?: Array<number>;
        /**
         * Sling tag ids used to exclude calendar events.
         * @minItems 1
         */
        excludeTagIds?: Array<number>;
        /**
         * Sling user ids used to filter calendar events.
         * @minItems 1
         */
        userIds?: Array<number>;
        /**
         * Sling group ids used to include calendar events.
         * @minItems 1
         */
        groupIds?: Array<number>;
        /**
         * Sling group ids used to exclude calendar events.
         * @minItems 1
         */
        excludeGroupIds?: Array<number>;
        /**
         * Sling day part ids used to include calendar events.
         * @minItems 1
         */
        dayPartIds?: Array<number>;
        /**
         * Sling day part ids used to exclude calendar events.
         * @minItems 1
         */
        excludeDayPartIds?: Array<number>;
        /**
         * Sling event types to include.
         * @minItems 1
         */
        eventTypes?: Array<string>;
        /**
         * The Sling calendar grouping mode.
         * @minLength 1
         */
        groupBy?: string;
        /**
         * The number of calendar results to return.
         * @minimum 1
         */
        pageSize?: number;
        /**
         * The zero-based calendar result page to return.
         * @minimum 0
         */
        page?: number;
        /** Whether unscheduled shifts should be skipped. */
        skipUnscheduled?: boolean;
        /** Whether planning status events should be included. */
        showPlanningEvents?: boolean;
      };
      output: {
        /** The Sling calendar event records returned by the API. */
        events: Array<Record<string, unknown>>;
      };
    };
    /** List Sling groups in the current organization with optional filters. */
    "sling.list_groups": {
      input: {
        /**
         * Only return Sling groups whose ids are in this list.
         * @minItems 1
         */
        ids?: Array<number>;
        /**
         * Only return groups with this Sling group type.
         * @minLength 1
         */
        type?: string;
      };
      output: {
        /** The Sling group records returned by the API. */
        groups: Array<Record<string, unknown>>;
      };
    };
    /** List coworkers for one Sling shift. */
    "sling.list_shift_coworkers": {
      input: {
        /** The Sling shift identifier. */
        shiftId: number | string;
      };
      output: {
        /** The Sling coworker records returned by the API. */
        coworkers: Array<Record<string, unknown>>;
      };
    };
    /** List Sling tasks with optional type and cursor-like id filters. */
    "sling.list_tasks": {
      input: {
        /**
         * Only return tasks that belong to this Sling task type.
         * @minLength 1
         */
        filter?: string;
        /**
         * Only return tasks with an id greater than this value.
         * @exclusiveMinimum 0
         */
        since?: number;
        /**
         * Only return tasks with an id less than this value.
         * @exclusiveMinimum 0
         */
        before?: number;
        /**
         * The number of task results to return.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The Sling task records returned by the API. */
        tasks: Array<Record<string, unknown>>;
      };
    };
    /** List Sling users in the current organization with optional filters. */
    "sling.list_users": {
      input: {
        /**
         * Only return users with a matching prefix in name, lastname, or email.
         * @minLength 1
         */
        query?: string;
        /**
         * Only return Sling users whose ids are in this list.
         * @minItems 1
         */
        ids?: Array<number>;
        /** Whether deleted users should be included. */
        includeDeleted?: boolean;
      };
      output: {
        /** The Sling user records returned by the API. */
        users: Array<Record<string, unknown>>;
      };
    };
    /** List Sling users working on a specific date. */
    "sling.list_working_users": {
      input: {
        /**
         * The ISO date for the working-users query.
         * @minLength 1
         */
        date: string;
      };
      output: {
        /** The Sling user records returned by the API. */
        users: Array<Record<string, unknown>>;
      };
    };
  }
}
