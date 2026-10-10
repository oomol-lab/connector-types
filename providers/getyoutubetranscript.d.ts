import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check the remaining GetYouTubeTranscript credits, plan, and rate limit. Free. */
    "getyoutubetranscript.get_credits": {
      input: Record<string, never>;
      output: {
        /** Credits left in the current plan period. */
        plan_credits_left: number;
        /** Credits left from one-time top-ups. */
        topup_credits_left?: number;
        /** The plan name. */
        plan?: string;
        /** Requests allowed per minute. */
        rate_limit_per_minute?: number;
      };
    };
    /** List the videos in a YouTube playlist, one page at a time. */
    "getyoutubetranscript.get_youtube_playlist": {
      input: Record<string, unknown>;
      output: {
        /** The playlist ID. */
        playlist_id?: string;
        /** The playlist title. */
        title?: string;
        /** The playlist's videos on this page. */
        videos?: Array<Record<string, unknown>>;
        /** Whether more pages exist. */
        has_more?: boolean;
        /** Opaque token for the next page, or null when there are no more pages. Pass it back unchanged. */
        continuation_token?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get the transcript of a YouTube video by URL or ID, with title and channel. Set timestamps to also get per-line timing. */
    "getyoutubetranscript.get_youtube_transcript": {
      input: {
        /**
         * YouTube video URL (watch, youtu.be, Shorts or live) or the 11-character video ID.
         * @minLength 1
         * @pattern \S
         */
        video: string;
        /**
         * Caption language code, for example en or es.
         * @minLength 1
         * @pattern \S
         */
        language?: string;
        /** Whether to also return one segment per caption line with start and duration. */
        timestamps?: boolean;
      };
      output: {
        /** The 11-character YouTube video ID. */
        video_id: string;
        /** Language code of the returned captions. */
        language_code: string;
        /** Video title. */
        title: string;
        /** Channel name. */
        author_name: string;
        /** Channel URL. */
        author_url: string;
        /** Video thumbnail URL. */
        thumbnail_url: string;
        /** The full transcript as plain text. */
        transcript: string;
        /** Number of words in the transcript. */
        word_count: number;
        /** One entry per caption line. Present only when timestamps is true. */
        segments?: Array<{
          /** Start time in seconds. */
          start: number;
          /** Duration in seconds. */
          duration: number;
          /** Caption text. */
          text: string;
        }>;
      };
    };
    /** List a YouTube channel's videos, newest first, one page at a time. */
    "getyoutubetranscript.list_youtube_channel_videos": {
      input: Record<string, unknown>;
      output: {
        /** The channel's videos on this page. */
        videos?: Array<Record<string, unknown>>;
        /** Whether more pages exist. */
        has_more?: boolean;
        /** Opaque token for the next page, or null when there are no more pages. Pass it back unchanged. */
        continuation_token?: string | null;
        [key: string]: unknown;
      };
    };
    /** Search YouTube for videos or channels, one page at a time. */
    "getyoutubetranscript.search_youtube": {
      input: Record<string, unknown>;
      output: {
        /** The search query. */
        query?: string;
        /** Video results when type is video. */
        video_results?: Array<Record<string, unknown>>;
        /** Channel results when type is channel. */
        channel_results?: Array<Record<string, unknown>>;
        /** Opaque token for the next page, or null when there are no more pages. Pass it back unchanged. */
        continuation_token?: string | null;
        [key: string]: unknown;
      };
    };
  }
}
