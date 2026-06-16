import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Look up data for multiple Autonomous System Numbers with Ipregistry. */
    "ipregistry.batch_lookup_asns": {
      input: {
        /**
         * The Autonomous System Numbers to look up.
         * @minItems 1
         * @maxItems 16
         */
        asns: Array<string>;
        /**
         * Optional Ipregistry field selection expression used to limit the returned payload.
         * @minLength 1
         */
        fields?: string;
      };
      output: {
        /** The Ipregistry result payloads in request order. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Look up Ipregistry data for multiple IPv4 or IPv6 addresses in one request. */
    "ipregistry.batch_lookup_ips": {
      input: {
        /**
         * The IPv4 or IPv6 addresses to look up.
         * @minItems 1
         * @maxItems 1024
         */
        ipAddresses: Array<string>;
        /** Whether Ipregistry should resolve and include hostname data. */
        includeHostname?: boolean;
        /**
         * Optional Ipregistry field selection expression used to limit the returned payload.
         * @minLength 1
         */
        fields?: string;
      };
      output: {
        /** The Ipregistry result payloads in request order. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Look up data for one Autonomous System Number with Ipregistry. */
    "ipregistry.lookup_asn": {
      input: {
        /**
         * The Autonomous System Number to look up, such as `AS15169` or `15169`.
         * @minLength 1
         */
        asn: string;
        /**
         * Optional Ipregistry field selection expression used to limit the returned payload.
         * @minLength 1
         */
        fields?: string;
      };
      output: {
        /** The Ipregistry response payload. */
        data: Record<string, unknown>;
      };
    };
    /** Look up geolocation, connection, company, currency, time zone, and security data for one IP address. */
    "ipregistry.lookup_ip": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ipAddress: string;
        /** Whether Ipregistry should resolve and include hostname data. */
        includeHostname?: boolean;
        /**
         * Optional Ipregistry field selection expression used to limit the returned payload.
         * @minLength 1
         */
        fields?: string;
      };
      output: {
        /** The Ipregistry response payload. */
        data: Record<string, unknown>;
      };
    };
    /** Parse one or more user-agent strings with Ipregistry. */
    "ipregistry.parse_user_agents": {
      input: {
        /**
         * The user-agent strings to parse.
         * @minItems 1
         * @maxItems 256
         */
        userAgents: Array<string>;
        /**
         * Optional Ipregistry field selection expression used to limit the returned payload.
         * @minLength 1
         */
        fields?: string;
      };
      output: {
        /** The Ipregistry result payloads in request order. */
        results: Array<Record<string, unknown>>;
      };
    };
  }
}
