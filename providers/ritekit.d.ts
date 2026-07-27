import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add relevant hashtags to social post text with RiteKit. */
    "ritekit.auto_hashtag": {
      input: {
        /**
         * The social post text to enhance with relevant hashtags.
         * @minLength 1
         * @pattern \S
         */
        post: string;
        /**
         * The maximum number of hashtags RiteKit should add.
         * @minimum 1
         */
        maxHashtags?: number;
        /** Where RiteKit should place generated hashtags. */
        hashtagPosition?: "auto" | "end";
      };
      output: {
        /** The response code reported by RiteKit when it is present. */
        code: number | null;
        /** The response message reported by RiteKit when it is present. */
        message: string | null;
        /** The post text after RiteKit adds the selected hashtags. */
        post: string;
      };
    };
    /** Remove hashtags that RiteKit identifies as currently blocked by Instagram. */
    "ritekit.clean_banned_instagram_hashtags": {
      input: {
        /**
         * The Instagram post text whose hashtags should be checked.
         * @minLength 1
         * @pattern \S
         */
        post: string;
      };
      output: {
        /** The response message reported by RiteKit when it is present. */
        message: string | null;
        /** The post text after RiteKit removes blocked hashtags. */
        post: string;
        /** The blocked hashtags removed from the post. */
        bannedHashtags: Array<string>;
      };
    };
    /** Get current engagement statistics for one or more hashtags. */
    "ritekit.get_hashtag_stats": {
      input: {
        /**
         * The hashtag names to analyze.
         * @minItems 1
         * @maxItems 100
         */
        tags: Array<string>;
      };
      output: {
        /** The response code reported by RiteKit when it is present. */
        code: number | null;
        /** The response message reported by RiteKit when it is present. */
        message: string | null;
        /** The hashtag names acknowledged by RiteKit. */
        hashtags: Array<string>;
        /** The engagement statistics returned for the hashtags. */
        stats: Array<{
          /** The hashtag name returned by RiteKit. */
          hashtag: string;
          /** The normalized tag name returned by RiteKit. */
          tag: string;
          /** The weighted number of posts per hour using the hashtag. */
          tweets: number | null;
          /** The weighted number of hourly impressions associated with the hashtag. */
          exposure: number | null;
          /** The weighted number of reposts per hour associated with the hashtag. */
          retweets: number | null;
          /** The image share or image percentage reported for the hashtag. */
          images: number | null;
          /** The link share or link percentage reported for the hashtag. */
          links: number | null;
          /** The mention share or mention percentage reported for the hashtag. */
          mentions: number | null;
          /** The RiteKit engagement color code for the hashtag when available. */
          color: number | null;
          /** The social media count reported for image-derived hashtag suggestions. */
          mediaCount: number | null;
          /** The raw hashtag metric object returned by RiteKit. */
          raw: Record<string, unknown>;
        }>;
        /** The ordered labels for RiteKit hashtag color codes. */
        colorLabels: Array<string>;
      };
    };
    /** List hashtags that are currently trending according to RiteKit. */
    "ritekit.list_trending_hashtags": {
      input: {
        /** Whether to limit results to hashtags with RiteKit's green rating. */
        green?: boolean;
        /** Whether to limit results to hashtags written with Latin characters. */
        latin?: boolean;
      };
      output: {
        /** The response code reported by RiteKit when it is present. */
        code: number | null;
        /** The response message reported by RiteKit when it is present. */
        message: string | null;
        /** The currently trending hashtags. */
        hashtags: Array<{
          /** The trending hashtag name. */
          tag: string;
          /** The weighted number of posts using the trending hashtag. */
          tweets: number | null;
          /** The weighted number of impressions associated with the trending hashtag. */
          exposure: number | null;
          /** The weighted number of reposts associated with the trending hashtag. */
          retweets: number | null;
          /** The link share or link percentage reported for the trending hashtag. */
          links: number | null;
          /** The photo share or photo percentage reported for the trending hashtag. */
          photos: number | null;
          /** The mention share or mention percentage reported for the trending hashtag. */
          mentions: number | null;
          /** The RiteKit engagement color code for the trending hashtag. */
          color: number | null;
          /** The raw trending hashtag object returned by RiteKit. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Generate engagement-ranked hashtag suggestions from a public image URL. */
    "ritekit.suggest_hashtags_for_image": {
      input: {
        /**
         * The public image URL that RiteKit should inspect for hashtag suggestions.
         * @format uri
         */
        imageUrl: string;
      };
      output: {
        /** The response code reported by RiteKit when it is present. */
        code: number | null;
        /** The response message reported by RiteKit when it is present. */
        message: string | null;
        /** The hashtag suggestions returned by RiteKit. */
        hashtags: Array<{
          /** The hashtag name returned by RiteKit. */
          hashtag: string;
          /** The normalized tag name returned by RiteKit. */
          tag: string;
          /** The weighted number of posts per hour using the hashtag. */
          tweets: number | null;
          /** The weighted number of hourly impressions associated with the hashtag. */
          exposure: number | null;
          /** The weighted number of reposts per hour associated with the hashtag. */
          retweets: number | null;
          /** The image share or image percentage reported for the hashtag. */
          images: number | null;
          /** The link share or link percentage reported for the hashtag. */
          links: number | null;
          /** The mention share or mention percentage reported for the hashtag. */
          mentions: number | null;
          /** The RiteKit engagement color code for the hashtag when available. */
          color: number | null;
          /** The social media count reported for image-derived hashtag suggestions. */
          mediaCount: number | null;
          /** The raw hashtag metric object returned by RiteKit. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Generate engagement-ranked hashtag suggestions from text. */
    "ritekit.suggest_hashtags_for_text": {
      input: {
        /**
         * The topic or text used to generate hashtag suggestions.
         * @minLength 1
         * @maxLength 1000
         * @pattern \S
         */
        text: string;
      };
      output: {
        /** The response code reported by RiteKit when it is present. */
        code: number | null;
        /** The response message reported by RiteKit when it is present. */
        message: string | null;
        /** The hashtag suggestions returned by RiteKit. */
        hashtags: Array<{
          /** The hashtag name returned by RiteKit. */
          hashtag: string;
          /** The normalized tag name returned by RiteKit. */
          tag: string;
          /** The weighted number of posts per hour using the hashtag. */
          tweets: number | null;
          /** The weighted number of hourly impressions associated with the hashtag. */
          exposure: number | null;
          /** The weighted number of reposts per hour associated with the hashtag. */
          retweets: number | null;
          /** The image share or image percentage reported for the hashtag. */
          images: number | null;
          /** The link share or link percentage reported for the hashtag. */
          links: number | null;
          /** The mention share or mention percentage reported for the hashtag. */
          mentions: number | null;
          /** The RiteKit engagement color code for the hashtag when available. */
          color: number | null;
          /** The social media count reported for image-derived hashtag suggestions. */
          mediaCount: number | null;
          /** The raw hashtag metric object returned by RiteKit. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Generate engagement-ranked hashtag suggestions from a public webpage URL. */
    "ritekit.suggest_hashtags_for_url": {
      input: {
        /**
         * The public webpage URL that RiteKit should inspect for hashtag suggestions.
         * @format uri
         */
        pageUrl: string;
      };
      output: {
        /** The response code reported by RiteKit when it is present. */
        code: number | null;
        /** The response message reported by RiteKit when it is present. */
        message: string | null;
        /** The hashtag suggestions returned by RiteKit. */
        hashtags: Array<{
          /** The hashtag name returned by RiteKit. */
          hashtag: string;
          /** The normalized tag name returned by RiteKit. */
          tag: string;
          /** The weighted number of posts per hour using the hashtag. */
          tweets: number | null;
          /** The weighted number of hourly impressions associated with the hashtag. */
          exposure: number | null;
          /** The weighted number of reposts per hour associated with the hashtag. */
          retweets: number | null;
          /** The image share or image percentage reported for the hashtag. */
          images: number | null;
          /** The link share or link percentage reported for the hashtag. */
          links: number | null;
          /** The mention share or mention percentage reported for the hashtag. */
          mentions: number | null;
          /** The RiteKit engagement color code for the hashtag when available. */
          color: number | null;
          /** The social media count reported for image-derived hashtag suggestions. */
          mediaCount: number | null;
          /** The raw hashtag metric object returned by RiteKit. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
