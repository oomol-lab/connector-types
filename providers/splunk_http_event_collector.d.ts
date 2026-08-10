import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send one structured event to the connected Splunk HTTP Event Collector. */
    "splunk_http_event_collector.send_event": {
      input: {
        /** The event payload as any JSON value accepted by Splunk HEC. */
        event: unknown;
        /** The optional event timestamp in Unix epoch format. */
        time?: number;
        /**
         * The optional host value assigned to the event.
         * @minLength 1
         */
        host?: string;
        /**
         * The optional source value assigned to the event.
         * @minLength 1
         */
        source?: string;
        /**
         * The optional source type assigned to the event.
         * @minLength 1
         */
        sourcetype?: string;
        /**
         * The optional destination Splunk index.
         * @minLength 1
         */
        index?: string;
        /** Optional flat indexed fields attached to the event. */
        fields?: Record<string, string | Array<string>>;
        /**
         * An optional request channel UUID, required when the HEC token has indexer acknowledgement enabled.
         * @format uuid
         */
        channel?: string;
      };
      output: {
        /** The Splunk HEC response message. */
        text: string;
        /** The Splunk HEC response code. */
        code: number;
        /**
         * The indexer acknowledgement identifier returned when acknowledgement is enabled.
         * @minimum 0
         */
        ackID?: number;
      };
    };
    /** Send one raw text event to the connected Splunk HTTP Event Collector. */
    "splunk_http_event_collector.send_raw_event": {
      input: {
        /** The raw text event payload. */
        event: string;
        /** The optional event timestamp in Unix epoch format. */
        time?: number;
        /**
         * The optional host value assigned to the event.
         * @minLength 1
         */
        host?: string;
        /**
         * The optional source value assigned to the event.
         * @minLength 1
         */
        source?: string;
        /**
         * The optional source type assigned to the event.
         * @minLength 1
         */
        sourcetype?: string;
        /**
         * The optional destination Splunk index.
         * @minLength 1
         */
        index?: string;
        /**
         * An optional request channel UUID. The connector generates a UUID v7 when omitted.
         * @format uuid
         */
        channel?: string;
      };
      output: {
        /** The Splunk HEC response message. */
        text: string;
        /** The Splunk HEC response code. */
        code: number;
        /**
         * The indexer acknowledgement identifier returned when acknowledgement is enabled.
         * @minimum 0
         */
        ackID?: number;
      };
    };
  }
}
