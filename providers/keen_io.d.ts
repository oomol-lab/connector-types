import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Publish one JSON event to a Keen event collection. */
    "keen_io.add_event": {
      input: {
        /**
         * The Keen event collection that receives the event.
         * @minLength 1
         */
        eventCollection: string;
        /** The JSON event object published to Keen. */
        event: Record<string, unknown>;
      };
      output: {
        /** Whether Keen created the event. */
        created: boolean;
        /** The raw Keen event publishing response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Count Keen events that match a required timeframe and optional filters. */
    "keen_io.query_count": {
      input: {
        /**
         * The Keen event collection to analyze.
         * @minLength 1
         */
        eventCollection: string;
        /** The required analysis timeframe accepted by Keen. */
        timeframe: string | {
          /**
           * The inclusive ISO-8601 timestamp for the analysis timeframe.
           * @minLength 1
           */
          start: string;
          /**
           * The exclusive ISO-8601 timestamp for the analysis timeframe.
           * @minLength 1
           */
          end: string;
        };
        /** The optional event-property filters applied by Keen. */
        filters?: Array<{
          /**
           * The event property name to filter.
           * @minLength 1
           */
          propertyName: string;
          /**
           * The Keen filter operator, such as eq or in.
           * @minLength 1
           */
          operator: string;
          /** The value compared against the event property. */
          propertyValue: unknown;
        }>;
        /** One or more event properties used to group Keen results. */
        groupBy?: string | Array<string>;
        /**
         * The interval used to group Keen results over time.
         * @minLength 1
         */
        interval?: string;
        /**
         * The timezone assigned to relative Keen timeframes.
         * @minLength 1
         */
        timezone?: string;
        /** Whether Keen should include execution metadata in the response. */
        includeMetadata?: boolean;
      };
      output: {
        /** The analysis result returned by Keen. */
        result: unknown;
        /** The raw Keen analysis response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Sum a numeric property across Keen events in a required timeframe. */
    "keen_io.query_sum": {
      input: {
        /**
         * The Keen event collection to analyze.
         * @minLength 1
         */
        eventCollection: string;
        /** The required analysis timeframe accepted by Keen. */
        timeframe: string | {
          /**
           * The inclusive ISO-8601 timestamp for the analysis timeframe.
           * @minLength 1
           */
          start: string;
          /**
           * The exclusive ISO-8601 timestamp for the analysis timeframe.
           * @minLength 1
           */
          end: string;
        };
        /** The optional event-property filters applied by Keen. */
        filters?: Array<{
          /**
           * The event property name to filter.
           * @minLength 1
           */
          propertyName: string;
          /**
           * The Keen filter operator, such as eq or in.
           * @minLength 1
           */
          operator: string;
          /** The value compared against the event property. */
          propertyValue: unknown;
        }>;
        /** One or more event properties used to group Keen results. */
        groupBy?: string | Array<string>;
        /**
         * The interval used to group Keen results over time.
         * @minLength 1
         */
        interval?: string;
        /**
         * The timezone assigned to relative Keen timeframes.
         * @minLength 1
         */
        timezone?: string;
        /** Whether Keen should include execution metadata in the response. */
        includeMetadata?: boolean;
        /**
         * The numeric event property that Keen sums.
         * @minLength 1
         */
        targetProperty: string;
      };
      output: {
        /** The analysis result returned by Keen. */
        result: unknown;
        /** The raw Keen analysis response object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
