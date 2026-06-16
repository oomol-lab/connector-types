import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Censys Global Data certificate asset by certificate ID. */
    "censys.get_certificate": {
      input: {
        /**
         * Censys certificate ID to retrieve.
         * @minLength 1
         */
        certificate_id: string;
      };
      output: {
        /** Raw certificate asset returned by Censys. */
        certificate: Record<string, unknown>;
      };
    };
    /** Get one Censys Global Data host asset by host ID. */
    "censys.get_host": {
      input: {
        /**
         * Censys host ID to retrieve.
         * @minLength 1
         */
        host_id: string;
        /**
         * RFC 3339 timestamp for retrieving a historical host view.
         * @format date-time
         */
        at_time?: string;
      };
      output: {
        /** Raw host asset returned by Censys. */
        host: Record<string, unknown>;
      };
    };
    /** Get one Censys Global Data web property asset by web property ID. */
    "censys.get_web_property": {
      input: {
        /**
         * Censys web property ID in hostname:port format, such as platform.censys.io:443.
         * @minLength 1
         */
        webproperty_id: string;
        /**
         * RFC 3339 timestamp for retrieving a historical web property view.
         * @format date-time
         */
        at_time?: string;
      };
      output: {
        /** Raw web property asset returned by Censys. */
        webProperty: Record<string, unknown>;
      };
    };
  }
}
