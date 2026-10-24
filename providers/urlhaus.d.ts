import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check whether a URL is known to URLhaus as a malware distribution site. Returns the database entry with threat, blacklist status, tags, and payload details when the URL is known, or a not-found result otherwise. Requires a free abuse.ch Auth-Key. */
    "urlhaus.lookup_url": {
      input: {
        /**
         * The absolute URL to look up, e.g. https://example.com/payload.exe.
         * @format uri
         */
        url: string;
      };
      output: {
        /** Whether URLhaus knows this URL. */
        found: boolean;
        /** URLhaus query status: ok or no_results. Invalid URLs produce an invalid_input error. */
        query_status: string;
        /** The URLhaus database entry, present when the URL is known. */
        entry?: {
          /** URLhaus database entry ID. */
          id: string;
          /** Link to the URLhaus entry page. */
          urlhaus_reference: string;
          /** The queried URL as recorded by URLhaus. */
          url: string;
          /** Whether the URL is currently online, offline, or unknown. */
          url_status: string;
          /** Host extracted from the URL. */
          host: string;
          /** When the URL was added to URLhaus, in UTC. */
          date_added: string;
          /** When an offline URL last served malware; null otherwise. */
          last_online: string | null;
          /** Threat type, e.g. malware_download. */
          threat: string;
          /** Blacklist status of the queried URL. */
          blacklists: {
            /** SURBL blacklist status. */
            surbl: string;
            /** Spamhaus DBL blacklist status. */
            spamhaus_dbl: string;
            [key: string]: unknown;
          };
          /** Handle of the reporter, or anonymous. */
          reporter: string;
          /** Whether the URL was reported to its hosting provider. */
          larted: string;
          /** Seconds until the site was taken down, if applicable. */
          takedown_time_seconds: number | null;
          /** Tags associated with the URL. */
          tags: Array<string>;
          /** Payloads served by the URL. */
          payloads: Array<{
            /** Date the payload was first seen. */
            firstseen: string;
            /** Filename reported by the remote server, if any. */
            filename: string | null;
            /** File type guessed by URLhaus, e.g. exe or doc. */
            file_type: string;
            /** Size of the HTTP response body in bytes, as reported by URLhaus. */
            response_size: string;
            /** MD5 hash of the payload. */
            response_md5: string;
            /** SHA256 hash of the payload. */
            response_sha256: string;
            /** Where to download a copy of the payload. */
            urlhaus_download: string;
            /** Malware family, if URLhaus identified one. */
            signature: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
