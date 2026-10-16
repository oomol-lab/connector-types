import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Look up an IPv4 address in the GreyNoise Community dataset. Returns whether the IP is internet background noise, whether it is a known-benign service, and its classification. The Community endpoint is free, needs no API key, and is throttled per source IP. */
    "greynoise.lookup_ip": {
      input: {
        /**
         * The IPv4 address to look up, such as 8.8.8.8.
         * @minLength 1
         */
        ip: string;
      };
      output: {
        /** The IPv4 address that was looked up. */
        ip: string;
        /** Whether the IP was observed scanning the internet in the last 90 days. */
        noise: boolean;
        /** Whether the IP is a known-benign service, such as a public DNS resolver or CDN. */
        riot: boolean;
        /** GreyNoise classification of the IP. */
        classification?: "benign" | "malicious" | "unknown";
        /** Actor or service name, when GreyNoise attributes the IP. */
        name?: string | null;
        /** Link to the GreyNoise Visualizer page for this IP. */
        link?: string | null;
        /** Date the IP was last observed, in YYYY-MM-DD format. */
        last_seen?: string | null;
        /** Status message, for example why an IP was not observed. */
        message: string;
        [key: string]: unknown;
      };
    };
  }
}
