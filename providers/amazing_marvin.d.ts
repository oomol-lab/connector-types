import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Mark a Marvin task complete. This experimental API does not reproduce all client recurrence and reward behavior. */
    "amazing_marvin.complete_task": {
      input: {
        /**
         * ID of the task to complete.
         * @minLength 1
         */
        itemId: string;
        /** UTC offset in minutes, positive east of UTC; used for local dates. */
        timeZoneOffset?: number;
      };
      output: {
        /** Upstream JSON or text confirmation, or null for an empty response; an item ID is not guaranteed. */
        result: unknown;
      };
    };
    /** Create a Marvin project with scheduling, labels, notes, and priority. */
    "amazing_marvin.create_project": {
      input: {
        /**
         * Item title; Marvin processes supported task input shortcuts.
         * @minLength 1
         */
        title: string;
        /** Whether the new item is already complete. */
        done?: boolean;
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        day?: string | null;
        /**
         * Parent category or project ID; unassigned is the inbox.
         * @minLength 1
         */
        parentId?: string;
        /** Label IDs to attach. */
        labelIds?: Array<string>;
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        firstScheduled?: string;
        /** Sort rank within the parent. */
        rank?: number;
        /** Daily section name, such as Morning. */
        dailySection?: string;
        /** Essential or bonus section. */
        bonusSection?: "Essential" | "Bonus";
        /** Custom section ID from the user's settings. */
        customSection?: string;
        /** Time block ID. */
        timeBlockSection?: string;
        /** Item notes. */
        note?: string;
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        dueDate?: string;
        /** Estimated duration in milliseconds. */
        timeEstimate?: number;
        /** Whether the item is a reward. */
        isReward?: boolean;
        /** Frog difficulty level. */
        isFrogged?: number;
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        plannedWeek?: string;
        /** Planned month in YYYY-MM format. */
        plannedMonth?: string;
        /** Reward points for completing the item. */
        rewardPoints?: number;
        /** Whether to manually place the item on the backburner. */
        backburner?: boolean;
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        reviewDate?: string;
        /** UTC offset in minutes, positive east of UTC; used for local dates. */
        timeZoneOffset?: number;
        /** Project priority. */
        priority?: "high" | "mid" | "low";
        /** ID of the attached reward. */
        rewardId?: string;
        /** Snooze until this Unix timestamp in milliseconds. */
        itemSnoozeTime?: number;
        /** Daily snooze time in HH:mm format. */
        permaSnoozeTime?: string;
      };
      output: {
        /** Upstream JSON or text confirmation, or null for an empty response; an item ID is not guaranteed. */
        result: unknown;
      };
    };
    /** Create a Marvin task with scheduling, labels, notes, and optional title shortcuts. */
    "amazing_marvin.create_task": {
      input: {
        /**
         * Item title; Marvin processes supported task input shortcuts.
         * @minLength 1
         */
        title: string;
        /** Whether the new item is already complete. */
        done?: boolean;
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        day?: string | null;
        /**
         * Parent category or project ID; unassigned is the inbox.
         * @minLength 1
         */
        parentId?: string;
        /** Label IDs to attach. */
        labelIds?: Array<string>;
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        firstScheduled?: string;
        /** Sort rank within the parent. */
        rank?: number;
        /** Daily section name, such as Morning. */
        dailySection?: string;
        /** Essential or bonus section. */
        bonusSection?: "Essential" | "Bonus";
        /** Custom section ID from the user's settings. */
        customSection?: string;
        /** Time block ID. */
        timeBlockSection?: string;
        /** Item notes. */
        note?: string;
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        dueDate?: string;
        /** Estimated duration in milliseconds. */
        timeEstimate?: number;
        /** Whether the item is a reward. */
        isReward?: boolean;
        /** Frog difficulty level. */
        isFrogged?: number;
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        plannedWeek?: string;
        /** Planned month in YYYY-MM format. */
        plannedMonth?: string;
        /** Reward points for completing the item. */
        rewardPoints?: number;
        /** Whether to manually place the item on the backburner. */
        backburner?: boolean;
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        reviewDate?: string;
        /** UTC offset in minutes, positive east of UTC; used for local dates. */
        timeZoneOffset?: number;
        /** Task priority star level. */
        isStarred?: number;
        /** Process title shortcuts; defaults to Marvin's enabled behavior. Set false to keep the title literal. */
        autoComplete?: boolean;
      };
      output: {
        /** Upstream JSON or text confirmation, or null for an empty response; an item ID is not guaranteed. */
        result: unknown;
      };
    };
    /** List all Marvin categories for organizing tasks and projects. */
    "amazing_marvin.list_categories": {
      input: Record<string, never>;
      output: {
        /** Items returned by Marvin; these endpoints do not paginate. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List open direct child tasks and projects of a category or project; descendants are not expanded. */
    "amazing_marvin.list_children": {
      input: {
        /**
         * Parent category or project ID; use unassigned for the inbox.
         * @minLength 1
         */
        parentId: string;
      };
      output: {
        /** Items returned by Marvin; these endpoints do not paginate. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List tasks and projects completed on a day. Omitted date uses the server's UTC date. */
    "amazing_marvin.list_done_items": {
      input: {
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
      };
      output: {
        /** Items returned by Marvin; these endpoints do not paginate. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List open tasks and projects due on or before a date. Omitted by uses the server's UTC date. */
    "amazing_marvin.list_due_items": {
      input: {
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        by?: string;
      };
      output: {
        /** Items returned by Marvin; these endpoints do not paginate. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List all Marvin labels in their configured sort order. */
    "amazing_marvin.list_labels": {
      input: Record<string, never>;
      output: {
        /** Items returned by Marvin; these endpoints do not paginate. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List tasks and projects scheduled on a day, including enabled rollover and auto-scheduled due items. Omitted date uses the server's UTC date. */
    "amazing_marvin.list_today_items": {
      input: {
        /**
         * Calendar date in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
      };
      output: {
        /** Items returned by Marvin; these endpoints do not paginate. */
        items: Array<Record<string, unknown>>;
      };
    };
  }
}
