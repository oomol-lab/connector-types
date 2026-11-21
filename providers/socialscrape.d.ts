import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the credits left on the SocialScrape team the connected API key belongs to. Free to call. */
    "socialscrape.get_credits": {
      input: Record<string, never>;
      output: {
        /**
         * The credits the team can still spend.
         * @minimum 0
         */
        creditsRemaining?: number;
        /**
         * The identifier of the team the API key belongs to.
         * @minLength 1
         */
        teamId?: string;
        /** Request details SocialScrape returns with every answer. */
        meta?: {
          /**
           * The request identifier to quote when asking SocialScrape for support.
           * @minLength 1
           */
          requestId?: string;
          /**
           * The credits this request cost. A failed request costs none.
           * @minimum 0
           */
          creditsCharged?: number;
          /** The credits left on the team after this request, when reported. */
          creditsRemaining?: number | null;
          /** Whether the answer came from SocialScrape's cache instead of a fresh read. */
          cached?: boolean;
        };
      };
    };
    /** Get a profile by handle: name, biography, links, verification and follower counts. */
    "socialscrape.get_profile": {
      input: {
        /** The platform the profile is on. */
        platform: "instagram" | "tiktok" | "twitter" | "threads" | "bluesky" | "snapchat" | "twitch" | "truthsocial";
        /**
         * The account handle, with or without a leading at sign.
         * @minLength 1
         * @maxLength 253
         * @pattern \S
         */
        handle: string;
      };
      output: {
        /** A profile in SocialScrape's shared shape. Fields a platform does not publish are null. */
        profile?: {
          /**
           * The platform the profile is on.
           * @minLength 1
           */
          platform: string;
          /** The platform's own identifier for the account. */
          id?: string | null;
          /** The account handle without a leading at sign. */
          handle?: string | null;
          /** The display name. */
          name?: string | null;
          /** The address of the profile. */
          url?: string | null;
          /** The profile's biography text. */
          bio?: string | null;
          /** The address of the profile picture. */
          avatar_url?: string | null;
          /** Whether the platform marks the account as verified. */
          verified?: boolean | null;
          /** Whether the account restricts its posts to approved followers. */
          is_private?: boolean | null;
          /** The website link shown on the profile. */
          external_url?: string | null;
          /** Counts the platform publishes for the profile. A count it hides is null. */
          stats?: {
            /** The number of followers or subscribers. */
            followers?: number | null;
            /** The number of accounts the profile follows. */
            following?: number | null;
            /** The number of posts or videos published. */
            posts?: number | null;
            /** The total likes across the profile's posts, where the platform reports it. */
            likes?: number | null;
            /** The total views across the profile's posts, where the platform reports it. */
            views?: number | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Request details SocialScrape returns with every answer. */
        meta?: {
          /**
           * The request identifier to quote when asking SocialScrape for support.
           * @minLength 1
           */
          requestId?: string;
          /**
           * The credits this request cost. A failed request costs none.
           * @minimum 0
           */
          creditsCharged?: number;
          /** The credits left on the team after this request, when reported. */
          creditsRemaining?: number | null;
          /** Whether the answer came from SocialScrape's cache instead of a fresh read. */
          cached?: boolean;
        };
      };
    };
    /** Get the transcript of a video from its link. The platform is detected from the link: YouTube, TikTok, Instagram, X, Facebook, LinkedIn, Reddit, Twitch clips, Kick clips and Rumble. */
    "socialscrape.get_transcript": {
      input: {
        /**
         * The address of the video.
         * @format uri
         */
        url: string;
        /** Allow AI transcription beyond 2 minutes. Defaults to false; enabling it costs 5 credits per started minute of the whole video. */
        allow_long_transcription?: boolean;
        /**
         * The preferred transcript language as a language code such as en or es. Omit it for the video's default.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** The transcript in SocialScrape's shared shape. */
        transcript?: {
          /**
           * The platform the video is on.
           * @minLength 1
           */
          platform: string;
          /** The platform's own identifier for the video. */
          video_id?: string | null;
          /** The address of the video. */
          url?: string | null;
          /** The language code of the transcript. */
          language?: string | null;
          /** Where the text came from, such as captions or speech recognition. */
          source: string;
          /** The length of the video in seconds. */
          duration_seconds?: number | null;
          /** The whole transcript as one string. */
          text: string;
          /** The transcript split into timed lines. */
          segments?: Array<{
            /** Where the line starts, in seconds from the beginning. */
            start: number;
            /** Where the line ends, in seconds from the beginning. */
            end?: number | null;
            /** The words spoken in this line. */
            text: string;
            [key: string]: unknown;
          }> | null;
          /** The language codes the video has transcripts in. */
          available_languages?: Array<string> | null;
          [key: string]: unknown;
        };
        /** Request details SocialScrape returns with every answer. */
        meta?: {
          /**
           * The request identifier to quote when asking SocialScrape for support.
           * @minLength 1
           */
          requestId?: string;
          /**
           * The credits this request cost. A failed request costs none.
           * @minimum 0
           */
          creditsCharged?: number;
          /** The credits left on the team after this request, when reported. */
          creditsRemaining?: number | null;
          /** Whether the answer came from SocialScrape's cache instead of a fresh read. */
          cached?: boolean;
        };
      };
    };
    /** List the newest posts or videos a profile has published, one page at a time. Pass the returned cursor to read the next page. */
    "socialscrape.list_profile_posts": {
      input: {
        /** The platform the profile is on. */
        platform: "instagram" | "tiktok" | "threads" | "bluesky" | "truthsocial";
        /**
         * The account handle, with or without a leading at sign.
         * @minLength 1
         * @maxLength 253
         * @pattern \S
         */
        handle: string;
        /**
         * The cursor returned by the previous page. Omit it for the first page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The posts on this page, newest first. */
        posts?: Array<{
          /**
           * The platform the post is on.
           * @minLength 1
           */
          platform: string;
          /**
           * The platform's own identifier for the post.
           * @minLength 1
           */
          id: string;
          /** The address of the post. */
          url?: string | null;
          /** The kind of post, such as video, image, carousel or text. */
          type?: string;
          /** The title, on platforms that have one. */
          title?: string | null;
          /** The caption or body text. */
          text?: string | null;
          /** When the post was published, as an ISO 8601 timestamp. */
          published_at?: string | null;
          /** The length of a video in seconds. */
          duration_seconds?: number | null;
          /** Engagement counts such as views, likes, comments and shares. */
          stats?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page, or null when there is none. */
        cursor?: string | null;
        /** Whether another page can be read with the cursor. */
        hasMore?: boolean;
        /** Request details SocialScrape returns with every answer. */
        meta?: {
          /**
           * The request identifier to quote when asking SocialScrape for support.
           * @minLength 1
           */
          requestId?: string;
          /**
           * The credits this request cost. A failed request costs none.
           * @minimum 0
           */
          creditsCharged?: number;
          /** The credits left on the team after this request, when reported. */
          creditsRemaining?: number | null;
          /** Whether the answer came from SocialScrape's cache instead of a fresh read. */
          cached?: boolean;
        };
      };
    };
  }
}
