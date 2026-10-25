import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read the connected Arcmira account, plan, credit usage and granted scopes. */
    "arcmira.get_account": {
      input: Record<string, never>;
      output: {
        /** Connected account details. */
        account?: {
          /** Account identifier. */
          id?: string;
          /** Account name. */
          name?: string | null;
          /** Account category. */
          kind?: string;
          /** Account plan name. */
          plan?: string;
          [key: string]: unknown;
        };
        /** Account access tier. */
        tier?: string;
        /** Granted permission scopes. */
        scopes?: Array<string>;
        /** Current credit usage. */
        usage?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve captions or a Premium transcript for a YouTube video. Premium can start a transcript job and return pending; call again later to check it. Paid reads use credits from your plan, then your on-demand budget. Premium does not fall back to captions. */
    "arcmira.get_transcript": {
      input: {
        /**
         * YouTube video ID.
         * @pattern ^[A-Za-z0-9_-]{11}$
         */
        video_id: string;
        /** Transcript quality lane. */
        quality: "captions" | "premium";
        /** Up to five comma-separated caption language preferences. */
        language?: string;
        /** Return timestamped lines rather than paragraphs. */
        timestamps?: boolean;
        /**
         * Window start in seconds; provide end too.
         * @minimum 0
         */
        start?: number;
        /**
         * Window end in seconds, greater than start. Premium still uses whole-video credits.
         * @minimum 0
         */
        end?: number;
        /** Retry a failed Premium job under the account budget. */
        retry?: boolean;
        /** Refetch captions for a video outside the indexed catalog. */
        refresh?: boolean;
      };
      output: {
        /** Transcript readiness state. */
        state: "ready" | "pending" | "failed";
        /** Transcript quality lane. */
        quality: "captions" | "premium";
        /** Video metadata when ready. */
        video?: Record<string, unknown>;
        /** YouTube video identifier. */
        video_id?: string;
        /** Timestamped transcript lines. */
        lines?: Array<Record<string, unknown>>;
        /** Transcript paragraphs. */
        paragraphs?: Array<Record<string, unknown>>;
        /** Transcript job with polling guidance. */
        job?: Record<string, unknown>;
        /** Failure details for a failed job. */
        last_attempt?: Record<string, unknown>;
        /** Additional upstream guidance. */
        note?: string;
        [key: string]: unknown;
      };
    };
    /** Find a person, organization, product, topic or YouTube channel by name. Use the returned identifiers to scope transcript searches; ambiguous names return candidates. */
    "arcmira.resolve_entity": {
      input: {
        /**
         * Name, handle or YouTube channel URL.
         * @minLength 2
         */
        q: string;
        /** Entity category to match. */
        type?: "person" | "organization" | "product" | "topic" | "channel";
        /**
         * Extra context to distinguish names.
         * @minLength 2
         * @maxLength 300
         */
        context?: string;
        /**
         * Maximum number of results.
         * @minimum 1
         * @maximum 15
         */
        limit?: number;
      };
      output: {
        /** The submitted search query. */
        query?: string;
        /** Entity resolution confidence. */
        confidence?: string;
        /** Entity candidate details. */
        best?: {
          /** Entity identifier. */
          id?: string;
          /** Display name. */
          name?: string;
          /** Entity category. */
          type?: string;
          /** Channel identifier, when applicable. */
          youtube_channel_id?: string | null;
          [key: string]: unknown;
        } | null;
        /** Entity candidate details. */
        suggested?: {
          /** Entity identifier. */
          id?: string;
          /** Display name. */
          name?: string;
          /** Entity category. */
          type?: string;
          /** Channel identifier, when applicable. */
          youtube_channel_id?: string | null;
          [key: string]: unknown;
        } | null;
        /** Possible matching entities. */
        candidates?: Array<{
          /** Entity identifier. */
          id?: string;
          /** Display name. */
          name?: string;
          /** Entity category. */
          type?: string;
          /** Channel identifier, when applicable. */
          youtube_channel_id?: string | null;
          [key: string]: unknown;
        } | null>;
        /** Clarification choices. */
        ask?: Record<string, unknown> | null;
        /** Additional upstream guidance. */
        note?: string;
        [key: string]: unknown;
      };
    };
    /** Search indexed YouTube transcripts for timestamped passages. Filter by channels, speakers, topics, sponsors or organic mentions. Results cover Arcmira's indexed catalog. */
    "arcmira.search_transcripts": {
      input: {
        /**
         * One topic or phrase.
         * @minLength 2
         */
        q: string;
        /** Comma-separated YouTube channel IDs, up to eight. Resolve names first. */
        channel_ids?: string;
        /** Comma-separated entity IDs, up to eight, to scope appearances. */
        entity_ids?: string;
        /** Comma-separated entity IDs discussed in the passages, up to eight. */
        about?: string;
        /** Comma-separated person IDs speaking the query words, up to eight. Speaker coverage varies. */
        by?: string;
        /** Comma-separated passage classes: sponsored, organic, mention. */
        kind?: string;
        /** Inclusive publication date or ISO date-time. */
        after?: string;
        /** Exclusive publication date or ISO date-time. */
        before?: string;
        /** Transcript source to include. */
        source?: "arcmira_premium" | "creator_captions" | "third_party_quick";
        /**
         * Maximum number of results.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
      };
      output: {
        /** The submitted search query. */
        query?: string;
        /** Maximum number of results. */
        limit?: number;
        /** Number of returned passages. */
        returned?: number;
        /** Timestamped matching passages. */
        chunks?: Array<{
          /** YouTube video identifier. */
          video_id?: string;
          /** Source title. */
          video_title?: string | null;
          /** Source channel. */
          channel_name?: string | null;
          /** Matching passage. */
          text?: string;
          /** Passage timestamp in seconds. */
          start_seconds?: number | null;
          /**
           * Source video at the passage timestamp.
           * @format uri
           */
          watch_url?: string;
          /** Identified speakers. */
          speakers?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Applied search filters. */
        filters?: Record<string, unknown>;
        /** Applied publication window. */
        window?: Record<string, unknown>;
        /** Result freshness. */
        as_of?: string | null;
        /** Additional upstream guidance. */
        note?: string;
        [key: string]: unknown;
      };
    };
  }
}
