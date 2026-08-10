import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a timeBuzzer activity for a user and an ordered set of tiles. */
    "timebuzzer.create_activity": {
      input: {
        /**
         * The tile IDs to assign in layer order, with at most one tile per layer.
         * @minItems 1
         * @maxItems 3
         */
        tiles: Array<number>;
        /**
         * The activity start time in UTC.
         * @format date-time
         */
        startDate: string;
        /**
         * The activity end time in UTC.
         * @format date-time
         */
        endDate: string;
        /**
         * The UTC offset at the activity start, such as +02:00.
         * @pattern ^[+-][0-9]{2}:[0-9]{2}$
         */
        startUtcOffset: string;
        /**
         * The UTC offset at the activity end, such as +02:00.
         * @pattern ^[+-][0-9]{2}:[0-9]{2}$
         */
        endUtcOffset: string;
        /** The activity note. */
        note: string;
        /**
         * The ID of the user who owns the activity.
         * @minimum 1
         */
        userId: number;
        /** Whether the activity is billed. */
        billed?: boolean;
        /** Optional provider-defined custom data for the activity. */
        customData?: string | null;
      };
      output: {
        /**
         * The activity ID.
         * @minimum 1
         */
        id: number;
        /**
         * The tile IDs assigned in layer order.
         * @maxItems 3
         */
        tiles: Array<number>;
        /**
         * The activity start time in UTC.
         * @format date-time
         */
        startDate: string;
        /**
         * The activity end time in UTC.
         * @format date-time
         */
        endDate: string;
        /**
         * The UTC offset at the activity start.
         * @pattern ^[+-][0-9]{2}:[0-9]{2}$
         */
        startUtcOffset: string;
        /**
         * The UTC offset at the activity end.
         * @pattern ^[+-][0-9]{2}:[0-9]{2}$
         */
        endUtcOffset: string;
        /** The activity note. */
        note: string;
        /**
         * The ID of the user who owns the activity.
         * @minimum 1
         */
        userId: number;
        /** Whether the activity is billed. */
        billed?: boolean;
        /** Provider-defined custom data attached to the activity. */
        customData?: string | null;
        [key: string]: unknown;
      };
    };
    /** Delete a timeBuzzer activity by ID. */
    "timebuzzer.delete_activity": {
      input: {
        /**
         * The activity ID to delete.
         * @minimum 1
         */
        activityId: number;
      };
      output: {
        /** Whether timeBuzzer accepted the mutation. */
        success: boolean;
      };
    };
    /** Get one timeBuzzer activity by ID. */
    "timebuzzer.get_activity": {
      input: {
        /**
         * The activity ID to retrieve.
         * @minimum 1
         */
        activityId: number;
      };
      output: {
        /**
         * The activity ID.
         * @minimum 1
         */
        id: number;
        /**
         * The tile IDs assigned in layer order.
         * @maxItems 3
         */
        tiles: Array<number>;
        /**
         * The activity start time in UTC.
         * @format date-time
         */
        startDate: string;
        /**
         * The activity end time in UTC.
         * @format date-time
         */
        endDate: string;
        /**
         * The UTC offset at the activity start.
         * @pattern ^[+-][0-9]{2}:[0-9]{2}$
         */
        startUtcOffset: string;
        /**
         * The UTC offset at the activity end.
         * @pattern ^[+-][0-9]{2}:[0-9]{2}$
         */
        endUtcOffset: string;
        /** The activity note. */
        note: string;
        /**
         * The ID of the user who owns the activity.
         * @minimum 1
         */
        userId: number;
        /** Whether the activity is billed. */
        billed?: boolean;
        /** Provider-defined custom data attached to the activity. */
        customData?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get the timeBuzzer user associated with the connected API key. */
    "timebuzzer.get_current_user": {
      input: Record<string, never>;
      output: {
        /**
         * The current user ID.
         * @minimum 1
         */
        id: number;
        /**
         * The current user's email address.
         * @format email
         */
        email?: string;
        /** The current user's first name. */
        firstName?: string;
        /** The current user's last name. */
        lastName?: string;
        /**
         * The timeBuzzer account ID.
         * @minimum 1
         */
        accountId: number;
        /** The permissions granted to the current user. */
        permissions?: Array<string>;
        /** The current user state. */
        state?: string;
        [key: string]: unknown;
      };
    };
    /** List timeBuzzer activities with offset-based pagination. */
    "timebuzzer.list_activities": {
      input: {
        /**
         * The maximum number of activities to return.
         * @minimum 1
         */
        count: number;
        /**
         * The number of activities to skip.
         * @minimum 0
         */
        offset?: number;
        /** Whether each activity should include embedded tile details. */
        embedTiles?: boolean;
      };
      output: {
        /** The returned activities. */
        activities: Array<{
          /**
           * The activity ID.
           * @minimum 1
           */
          id: number;
          /**
           * The tile IDs assigned in layer order.
           * @maxItems 3
           */
          tiles: Array<number>;
          /**
           * The activity start time in UTC.
           * @format date-time
           */
          startDate: string;
          /**
           * The activity end time in UTC.
           * @format date-time
           */
          endDate: string;
          /**
           * The UTC offset at the activity start.
           * @pattern ^[+-][0-9]{2}:[0-9]{2}$
           */
          startUtcOffset: string;
          /**
           * The UTC offset at the activity end.
           * @pattern ^[+-][0-9]{2}:[0-9]{2}$
           */
          endUtcOffset: string;
          /** The activity note. */
          note: string;
          /**
           * The ID of the user who owns the activity.
           * @minimum 1
           */
          userId: number;
          /** Whether the activity is billed. */
          billed?: boolean;
          /** Provider-defined custom data attached to the activity. */
          customData?: string | null;
          [key: string]: unknown;
        }>;
        /**
         * The total number of matching activities.
         * @minimum 0
         */
        totalCount: number;
        /**
         * The total duration of matching activities in milliseconds.
         * @minimum 0
         */
        totalDuration: number;
      };
    };
    /** List the timeBuzzer layers that organize tiles in hierarchy order. */
    "timebuzzer.list_layers": {
      input: Record<string, never>;
      output: {
        /** The returned layers. */
        layers: Array<{
          /**
           * The layer ID.
           * @minimum 1
           */
          id?: number;
          /** The layer name. */
          name: string;
          /** Whether the layer is visible. */
          visible: boolean;
          /** The layer's hierarchy index. */
          index?: number | null;
          /**
           * The parent layer ID.
           * @minimum 1
           */
          parent?: number | null;
          /**
           * The child layer ID.
           * @minimum 1
           */
          child?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List timeBuzzer tiles available to the connected user. */
    "timebuzzer.list_tiles": {
      input: {
        /** Which archived state to include. */
        archived?: "true" | "false" | "all";
      };
      output: {
        /** The returned tiles. */
        tiles: Array<{
          /**
           * The tile ID.
           * @minimum 1
           */
          id?: number;
          /** The tile name. */
          name: string;
          /**
           * The layer ID containing the tile.
           * @minimum 1
           */
          layer: number;
          /** Whether the tile is archived. */
          archived?: boolean;
          /** The parent tile IDs. */
          parents?: Array<number> | null;
          /** The child tile IDs. */
          children?: Array<number> | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Replace the editable fields of an existing timeBuzzer activity. */
    "timebuzzer.update_activity": {
      input: {
        /**
         * The activity ID to update.
         * @minimum 1
         */
        activityId: number;
        /**
         * The tile IDs to assign in layer order, with at most one tile per layer.
         * @minItems 1
         * @maxItems 3
         */
        tiles: Array<number>;
        /**
         * The activity start time in UTC.
         * @format date-time
         */
        startDate: string;
        /**
         * The activity end time in UTC.
         * @format date-time
         */
        endDate: string;
        /**
         * The UTC offset at the activity start, such as +02:00.
         * @pattern ^[+-][0-9]{2}:[0-9]{2}$
         */
        startUtcOffset: string;
        /**
         * The UTC offset at the activity end, such as +02:00.
         * @pattern ^[+-][0-9]{2}:[0-9]{2}$
         */
        endUtcOffset: string;
        /** The activity note. */
        note: string;
        /**
         * The ID of the user who owns the activity.
         * @minimum 1
         */
        userId: number;
        /** Whether the activity is billed. */
        billed?: boolean;
        /** Optional provider-defined custom data for the activity. */
        customData?: string | null;
      };
      output: {
        /** Whether timeBuzzer accepted the mutation. */
        success: boolean;
      };
    };
  }
}
