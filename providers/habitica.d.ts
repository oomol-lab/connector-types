import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one new Habitica tag. */
    "habitica.create_tag": {
      input: {
        /**
         * The Habitica tag name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** One normalized Habitica tag. */
        tag: {
          /** The Habitica tag identifier. */
          id: string | null;
          /** The Habitica tag name. */
          name: string | null;
          /** The Habitica challenge identifier when this tag belongs to a challenge. */
          challenge: string | null;
          /** The raw Habitica tag object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create one new personal Habitica task from a single JSON task object. */
    "habitica.create_task": {
      input: {
        /**
         * The text displayed for the Habitica task.
         * @minLength 1
         */
        text: string;
        /** The Habitica task type. */
        type: "habit" | "daily" | "todo" | "reward";
        /** The Habitica tag IDs to attach to the task. */
        tags?: Array<string>;
        /**
         * An optional Habitica alias for the task.
         * @minLength 1
         */
        alias?: string;
        /** The Habitica stat associated with the task. */
        attribute?: "str" | "int" | "per" | "con";
        /** The checklist items to attach to the task. */
        checklist?: Array<{
          /**
           * The checklist item text.
           * @minLength 1
           */
          text: string;
          /** Whether the checklist item starts completed. */
          completed: boolean;
        }>;
        /** Whether Habitica should collapse the checklist. */
        collapseChecklist?: boolean;
        /** Additional Habitica task notes. */
        notes?: string;
        /**
         * The due date to send to Habitica for todo tasks.
         * @format date-time
         */
        date?: string;
        /** The Habitica task priority. */
        priority?: 0.1 | 1 | 1.5 | 2;
        /** The Habitica daily frequency. */
        frequency?: "daily" | "weekly" | "monthly" | "yearly";
        /** The Habitica repeat object for dailies, keyed by weekday abbreviations. */
        repeat?: Record<string, unknown>;
        /**
         * The Habitica everyX interval for dailies.
         * @minimum 1
         */
        everyX?: number;
        /**
         * The Habitica streak value for dailies.
         * @minimum 0
         */
        streak?: number;
        /** The Habitica daysOfMonth values for monthly dailies. */
        daysOfMonth?: Array<number>;
        /** The Habitica weeksOfMonth values for monthly dailies. */
        weeksOfMonth?: Array<number>;
        /**
         * The Habitica start date for dailies.
         * @format date-time
         */
        startDate?: string;
        /** Whether a habit can be scored up. */
        up?: boolean;
        /** Whether a habit can be scored down. */
        down?: boolean;
        /** The Habitica reward cost or task value. */
        value?: number;
        /** Whether the task is completed. */
        completed?: boolean;
      };
      output: {
        /** One normalized Habitica task. */
        task: {
          /** The Habitica task identifier. */
          id: string | null;
          /** The Habitica task text. */
          text: string | null;
          /** The Habitica task alias. */
          alias: string | null;
          /** The Habitica task type. */
          type: "habit" | "daily" | "todo" | "reward" | null;
          /** The Habitica task notes. */
          notes: string | null;
          /** Whether the Habitica task is completed. */
          completed: boolean | null;
          /** The Habitica task priority. */
          priority: number | null;
          /** The Habitica task value. */
          value: number | null;
          /** The Habitica stat associated with the task. */
          attribute: "str" | "int" | "per" | "con" | null;
          /** The Habitica due date string when returned. */
          date: string | null;
          /** The Habitica tag IDs attached to the task. */
          tags: Array<string>;
          /** The normalized Habitica checklist items. */
          checklist: Array<{
            /** The Habitica checklist item identifier. */
            id: string | null;
            /** The checklist item text. */
            text: string | null;
            /** Whether the checklist item is completed. */
            completed: boolean | null;
            /** The raw Habitica checklist item object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Habitica task object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete one Habitica tag by tag ID. */
    "habitica.delete_tag": {
      input: {
        /**
         * The Habitica tag ID.
         * @format uuid
         */
        tagId: string;
      };
      output: {
        /** Whether the Habitica tag deletion was accepted. */
        deleted: boolean;
        /**
         * The Habitica tag ID that was deleted.
         * @format uuid
         */
        tagId: string;
      };
    };
    /** Delete one Habitica task by task ID or alias. */
    "habitica.delete_task": {
      input: {
        /**
         * The Habitica task ID or alias.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Whether the Habitica task deletion was accepted. */
        deleted: boolean;
        /**
         * The Habitica task ID or alias that was deleted.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Get one Habitica task by task ID or alias. */
    "habitica.get_task": {
      input: {
        /**
         * The Habitica task ID or alias.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** One normalized Habitica task. */
        task: {
          /** The Habitica task identifier. */
          id: string | null;
          /** The Habitica task text. */
          text: string | null;
          /** The Habitica task alias. */
          alias: string | null;
          /** The Habitica task type. */
          type: "habit" | "daily" | "todo" | "reward" | null;
          /** The Habitica task notes. */
          notes: string | null;
          /** Whether the Habitica task is completed. */
          completed: boolean | null;
          /** The Habitica task priority. */
          priority: number | null;
          /** The Habitica task value. */
          value: number | null;
          /** The Habitica stat associated with the task. */
          attribute: "str" | "int" | "per" | "con" | null;
          /** The Habitica due date string when returned. */
          date: string | null;
          /** The Habitica tag IDs attached to the task. */
          tags: Array<string>;
          /** The normalized Habitica checklist items. */
          checklist: Array<{
            /** The Habitica checklist item identifier. */
            id: string | null;
            /** The checklist item text. */
            text: string | null;
            /** Whether the checklist item is completed. */
            completed: boolean | null;
            /** The raw Habitica checklist item object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Habitica task object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the authenticated Habitica user's profile with optional userFields filtering. */
    "habitica.get_user_profile": {
      input: {
        /**
         * A comma-separated Habitica userFields selection passed through to the /user endpoint.
         * @minLength 1
         */
        userFields?: string;
      };
      output: {
        /** The normalized authenticated Habitica user profile. */
        user: {
          /** The Habitica user identifier. */
          id: string | null;
          /** The Habitica profile display name. */
          profileName: string | null;
          /** The Habitica user level. */
          level: number | null;
          /** The Habitica user class. */
          class: string | null;
          /** The Habitica party identifier when the user has one. */
          partyId: string | null;
          /** The raw Habitica user object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List the authenticated Habitica user's tasks with optional type and dueDate filters. */
    "habitica.list_my_tasks": {
      input: {
        /** The task type filter supported by Habitica. */
        type?: "habits" | "dailys" | "todos" | "rewards" | "completedTodos";
        /**
         * The optional date used for Habitica nextDue computation.
         * @format date
         */
        dueDate?: string;
      };
      output: {
        /** The normalized Habitica tasks. */
        tasks: Array<{
          /** The Habitica task identifier. */
          id: string | null;
          /** The Habitica task text. */
          text: string | null;
          /** The Habitica task alias. */
          alias: string | null;
          /** The Habitica task type. */
          type: "habit" | "daily" | "todo" | "reward" | null;
          /** The Habitica task notes. */
          notes: string | null;
          /** Whether the Habitica task is completed. */
          completed: boolean | null;
          /** The Habitica task priority. */
          priority: number | null;
          /** The Habitica task value. */
          value: number | null;
          /** The Habitica stat associated with the task. */
          attribute: "str" | "int" | "per" | "con" | null;
          /** The Habitica due date string when returned. */
          date: string | null;
          /** The Habitica tag IDs attached to the task. */
          tags: Array<string>;
          /** The normalized Habitica checklist items. */
          checklist: Array<{
            /** The Habitica checklist item identifier. */
            id: string | null;
            /** The checklist item text. */
            text: string | null;
            /** Whether the checklist item is completed. */
            completed: boolean | null;
            /** The raw Habitica checklist item object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Habitica task object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List the authenticated Habitica user's tags. */
    "habitica.list_tags": {
      input: Record<string, never>;
      output: {
        /** The normalized Habitica tags. */
        tags: Array<{
          /** The Habitica tag identifier. */
          id: string | null;
          /** The Habitica tag name. */
          name: string | null;
          /** The Habitica challenge identifier when this tag belongs to a challenge. */
          challenge: string | null;
          /** The raw Habitica tag object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Score one Habitica task in the up or down direction. */
    "habitica.score_task": {
      input: {
        /**
         * The Habitica task ID or alias.
         * @minLength 1
         */
        taskId: string;
        /** The direction used to score a Habitica task. */
        direction: "up" | "down";
      };
      output: {
        /** The normalized Habitica task score result. */
        scoreResult: {
          /** The Habitica score delta. */
          delta: number | null;
          /** The user's HP after scoring. */
          hp: number | null;
          /** The user's MP after scoring. */
          mp: number | null;
          /** The user's EXP after scoring. */
          exp: number | null;
          /** The user's GP after scoring. */
          gp: number | null;
          /** The user's level after scoring. */
          lvl: number | null;
          /** The user's class after scoring. */
          class: string | null;
          /** The user's remaining stat points after scoring. */
          points: number | null;
          /** The user's STR after scoring. */
          str: number | null;
          /** The user's CON after scoring. */
          con: number | null;
          /** The user's INT after scoring. */
          int: number | null;
          /** The user's PER after scoring. */
          per: number | null;
          /** The temporary drop payload returned by Habitica. */
          tmp: Record<string, unknown>;
          /** The raw Habitica score response data. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update one Habitica tag by tag ID. */
    "habitica.update_tag": {
      input: {
        /**
         * The Habitica tag ID.
         * @format uuid
         */
        tagId: string;
        /**
         * The replacement Habitica tag name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** One normalized Habitica tag. */
        tag: {
          /** The Habitica tag identifier. */
          id: string | null;
          /** The Habitica tag name. */
          name: string | null;
          /** The Habitica challenge identifier when this tag belongs to a challenge. */
          challenge: string | null;
          /** The raw Habitica tag object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update one Habitica task by task ID or alias. */
    "habitica.update_task": {
      input: {
        /**
         * The Habitica task ID or alias.
         * @minLength 1
         */
        taskId: string;
        /**
         * The replacement Habitica task text.
         * @minLength 1
         */
        text?: string;
        /** The Habitica tag IDs to attach to the task. */
        tags?: Array<string>;
        /**
         * The replacement Habitica alias.
         * @minLength 1
         */
        alias?: string;
        /** The Habitica stat associated with the task. */
        attribute?: "str" | "int" | "per" | "con";
        /** The checklist items to replace on the task. */
        checklist?: Array<{
          /**
           * The checklist item text.
           * @minLength 1
           */
          text: string;
          /** Whether the checklist item starts completed. */
          completed: boolean;
        }>;
        /** Whether Habitica should collapse the checklist. */
        collapseChecklist?: boolean;
        /** Additional Habitica task notes. */
        notes?: string;
        /**
         * The due date to send to Habitica for todo tasks.
         * @format date-time
         */
        date?: string;
        /** The Habitica task priority. */
        priority?: 0.1 | 1 | 1.5 | 2;
        /** The Habitica daily frequency. */
        frequency?: "daily" | "weekly" | "monthly" | "yearly";
        /** The Habitica repeat object for dailies, keyed by weekday abbreviations. */
        repeat?: Record<string, unknown>;
        /**
         * The Habitica everyX interval for dailies.
         * @minimum 1
         */
        everyX?: number;
        /**
         * The Habitica streak value for dailies.
         * @minimum 0
         */
        streak?: number;
        /** The Habitica daysOfMonth values for monthly dailies. */
        daysOfMonth?: Array<number>;
        /** The Habitica weeksOfMonth values for monthly dailies. */
        weeksOfMonth?: Array<number>;
        /**
         * The Habitica start date for dailies.
         * @format date-time
         */
        startDate?: string;
        /** Whether a habit can be scored up. */
        up?: boolean;
        /** Whether a habit can be scored down. */
        down?: boolean;
        /** The Habitica reward cost or task value. */
        value?: number;
        /** Whether the task is completed. */
        completed?: boolean;
      };
      output: {
        /** One normalized Habitica task. */
        task: {
          /** The Habitica task identifier. */
          id: string | null;
          /** The Habitica task text. */
          text: string | null;
          /** The Habitica task alias. */
          alias: string | null;
          /** The Habitica task type. */
          type: "habit" | "daily" | "todo" | "reward" | null;
          /** The Habitica task notes. */
          notes: string | null;
          /** Whether the Habitica task is completed. */
          completed: boolean | null;
          /** The Habitica task priority. */
          priority: number | null;
          /** The Habitica task value. */
          value: number | null;
          /** The Habitica stat associated with the task. */
          attribute: "str" | "int" | "per" | "con" | null;
          /** The Habitica due date string when returned. */
          date: string | null;
          /** The Habitica tag IDs attached to the task. */
          tags: Array<string>;
          /** The normalized Habitica checklist items. */
          checklist: Array<{
            /** The Habitica checklist item identifier. */
            id: string | null;
            /** The checklist item text. */
            text: string | null;
            /** Whether the checklist item is completed. */
            completed: boolean | null;
            /** The raw Habitica checklist item object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Habitica task object. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
