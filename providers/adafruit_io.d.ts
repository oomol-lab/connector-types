import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new data point on an Adafruit IO feed. */
    "adafruit_io.create_feed_data": {
      input: {
        /**
         * The Adafruit IO username. Defaults to the connected account username.
         * @minLength 1
         * @pattern \S
         */
        username?: string;
        /**
         * The Adafruit IO feed key.
         * @minLength 1
         * @pattern \S
         */
        feedKey: string;
        /** The data value to send to the feed. */
        value: string | number | boolean;
        /**
         * The creation timestamp to attach to the data point.
         * @format date-time
         */
        createdAt?: string;
        /** The latitude value to attach to the data point. */
        lat?: number;
        /** The longitude value to attach to the data point. */
        lon?: number;
        /** The elevation value to attach to the data point. */
        ele?: number;
        /** The epoch timestamp to attach to the data point. */
        epoch?: number;
      };
      output: {
        /** A normalized Adafruit IO feed data point. */
        data: {
          /** The Adafruit IO data point id. */
          id: string | null;
          /** The feed data value. */
          value: string | null;
          /** The feed id associated with this data point. */
          feedId: number | null;
          /** The group id associated with this data point. */
          groupId: number | null;
          /** The data point expiration value when returned. */
          expiration: string | null;
          /** The latitude value when returned. */
          lat: number | null;
          /** The longitude value when returned. */
          lon: number | null;
          /** The elevation value when returned. */
          ele: number | null;
          /** The completion timestamp when returned. */
          completedAt: string | null;
          /** The creation timestamp when returned. */
          createdAt: string | null;
          /** The update timestamp when returned. */
          updatedAt: string | null;
          /** The creation timestamp as an epoch value. */
          createdEpoch: number | null;
          /** The raw data point object returned by Adafruit IO. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the current Adafruit IO user for the connected API key. */
    "adafruit_io.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A normalized Adafruit IO user. */
        user: {
          /** The Adafruit IO user id. */
          id: number | null;
          /** The Adafruit IO username. */
          username: string;
          /** The display name for the Adafruit IO user. */
          name: string | null;
          /** The Adafruit IO profile color. */
          color: string | null;
          /** The user's configured time zone. */
          timeZone: string | null;
          /** The user creation timestamp. */
          createdAt: string | null;
          /** The user update timestamp. */
          updatedAt: string | null;
          /** The raw user object returned by Adafruit IO. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Adafruit IO feed by feed key. */
    "adafruit_io.get_feed": {
      input: {
        /**
         * The Adafruit IO username. Defaults to the connected account username.
         * @minLength 1
         * @pattern \S
         */
        username?: string;
        /**
         * The Adafruit IO feed key.
         * @minLength 1
         * @pattern \S
         */
        feedKey: string;
      };
      output: {
        /** A normalized Adafruit IO feed. */
        feed: {
          /** The Adafruit IO feed id. */
          id: number | null;
          /** The Adafruit IO feed key. */
          key: string;
          /** The feed name. */
          name: string | null;
          /** The feed description. */
          description: string | null;
          /** The feed unit type. */
          unitType: string | null;
          /** The feed unit symbol. */
          unitSymbol: string | null;
          /** The feed visibility value. */
          visibility: string | null;
          /** The latest feed value when returned. */
          lastValue: string | null;
          /** The feed status when returned. */
          status: string | null;
          /** Whether feed history is enabled. */
          history: boolean | null;
          /** Whether the feed is enabled. */
          enabled: boolean | null;
          /** The feed creation timestamp. */
          createdAt: string | null;
          /** The feed update timestamp. */
          updatedAt: string | null;
          /** The raw feed object returned by Adafruit IO. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List data points for an Adafruit IO feed. */
    "adafruit_io.list_feed_data": {
      input: {
        /**
         * The Adafruit IO username. Defaults to the connected account username.
         * @minLength 1
         * @pattern \S
         */
        username?: string;
        /**
         * The Adafruit IO feed key.
         * @minLength 1
         * @pattern \S
         */
        feedKey: string;
        /**
         * Return records created after this timestamp.
         * @format date-time
         */
        startTime?: string;
        /**
         * Return records created before this timestamp.
         * @format date-time
         */
        endTime?: string;
        /**
         * The maximum number of data records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The data fields to include in each returned record.
         * @minItems 1
         */
        include?: Array<"value" | "lat" | "lon" | "ele" | "id" | "created_at">;
      };
      output: {
        /** The data points returned by Adafruit IO. */
        data: Array<{
          /** The Adafruit IO data point id. */
          id: string | null;
          /** The feed data value. */
          value: string | null;
          /** The feed id associated with this data point. */
          feedId: number | null;
          /** The group id associated with this data point. */
          groupId: number | null;
          /** The data point expiration value when returned. */
          expiration: string | null;
          /** The latitude value when returned. */
          lat: number | null;
          /** The longitude value when returned. */
          lon: number | null;
          /** The elevation value when returned. */
          ele: number | null;
          /** The completion timestamp when returned. */
          completedAt: string | null;
          /** The creation timestamp when returned. */
          createdAt: string | null;
          /** The update timestamp when returned. */
          updatedAt: string | null;
          /** The creation timestamp as an epoch value. */
          createdEpoch: number | null;
          /** The raw data point object returned by Adafruit IO. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Adafruit IO feeds for a username. */
    "adafruit_io.list_feeds": {
      input: {
        /**
         * The Adafruit IO username. Defaults to the connected account username.
         * @minLength 1
         * @pattern \S
         */
        username?: string;
      };
      output: {
        /** The feeds returned by Adafruit IO. */
        feeds: Array<{
          /** The Adafruit IO feed id. */
          id: number | null;
          /** The Adafruit IO feed key. */
          key: string;
          /** The feed name. */
          name: string | null;
          /** The feed description. */
          description: string | null;
          /** The feed unit type. */
          unitType: string | null;
          /** The feed unit symbol. */
          unitSymbol: string | null;
          /** The feed visibility value. */
          visibility: string | null;
          /** The latest feed value when returned. */
          lastValue: string | null;
          /** The feed status when returned. */
          status: string | null;
          /** Whether feed history is enabled. */
          history: boolean | null;
          /** Whether the feed is enabled. */
          enabled: boolean | null;
          /** The feed creation timestamp. */
          createdAt: string | null;
          /** The feed update timestamp. */
          updatedAt: string | null;
          /** The raw feed object returned by Adafruit IO. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
