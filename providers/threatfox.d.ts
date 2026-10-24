import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check whether an indicator of compromise (IP address, domain, URL, or MD5/SHA256 file hash) is known to ThreatFox. Uses an exact-match IOC search or a file-hash search and returns the matching IOC entries with threat type, malware family, and confidence level when known, or a not-found result otherwise. Requires a free abuse.ch Auth-Key. */
    "threatfox.lookup_ioc": {
      input: {
        /** The indicator of compromise to look up: an IP address, domain, URL, or MD5/SHA256 file hash, e.g. 1.2.3.4 or 44d88612fea8a8f36de82e1278abb02f. */
        ioc: string;
      };
      output: {
        /** Whether ThreatFox knows this IOC. */
        found: boolean;
        /** ThreatFox query status: ok, or no_result when the IOC is unknown. */
        query_status: string;
        /** Matching IOC entries, present when the IOC is known. */
        entries?: Array<{
          /** ThreatFox database entry ID. */
          id: string;
          /** The indicator of compromise as recorded by ThreatFox. */
          ioc: string;
          /** Threat type, e.g. botnet_cc or payload. */
          threat_type: string;
          /** Human-readable threat type description. */
          threat_type_desc: string;
          /** IOC type, e.g. ip:port, domain, url, or sha256_hash. */
          ioc_type: string;
          /** Human-readable IOC type description. */
          ioc_type_desc: string;
          /** Malware family identifier, e.g. win.vidar. */
          malware: string;
          /** Printable malware family name, e.g. Vidar. */
          malware_printable: string;
          /** ThreatFox confidence level, 0-100. */
          confidence_level: number;
          /** When the IOC was first seen, in UTC. */
          first_seen: string;
          /** When the IOC was last seen, in UTC; null if unknown. */
          last_seen: string | null;
          /** Handle of the reporter. */
          reporter: string;
          /** Reference URL for the IOC, if any. */
          reference: string | null;
          /** Tags associated with the IOC. */
          tags: Array<string>;
          /** Malware samples associated with the IOC. */
          malware_samples: Array<{
            /** When the sample was associated with the IOC, in UTC. */
            time_stamp: string;
            /** MD5 hash of the sample. */
            md5_hash: string;
            /** SHA256 hash of the sample. */
            sha256_hash: string;
            /** MalwareBazaar link for the sample. */
            malware_bazaar: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
