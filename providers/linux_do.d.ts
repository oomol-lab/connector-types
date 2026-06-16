import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List recent grants of a Linux DO badge. RSS endpoint: GET https://linux.do/badges/{id}.rss. Returns 404 when the target is private or not accessible anonymously; a 404 does not necessarily mean the resource does not exist. On a 429/rate-limit error, retry later or fetch the endpoint URL directly from a local network. */
    "linux_do.list_badge_grants": {
      input: {
        /**
         * The numeric badge ID.
         * @minimum 1
         */
        id: number;
        /**
         * The maximum number of items to return. The feed returns a fixed number of items; this truncates the parsed result locally.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RSS channel metadata. */
        feed: {
          /** The feed title, or null when Linux DO omits it. */
          title: string | null;
          /** The feed link, or null when Linux DO omits it. */
          link: string | null;
          /** The feed description, or null when Linux DO omits it. */
          description: string | null;
        };
        /** The badge grants. */
        grants: Array<{
          /** The display name/username granted the badge, or null. */
          grantee?: string | null;
          /** The username parsed from the grant guid, or null. */
          username?: string | null;
          /** When the badge was granted (RFC822 string), or null. */
          grantedAt?: string | null;
          /** Who granted the badge, or null. */
          grantedBy?: string | null;
          /** The grant URL, or null. */
          url?: string | null;
          /** The raw parsed RSS item. */
          raw: Record<string, unknown>;
        }>;
        /** The number of grants returned. */
        count: number;
      };
    };
    /** List topics with a tag inside a category. RSS endpoint: GET https://linux.do/tags/c/{slug}/{id}/{tag}.rss. Returns 404 when the target is private or not accessible anonymously; a 404 does not necessarily mean the resource does not exist. On a 429/rate-limit error, retry later or fetch the endpoint URL directly from a local network. */
    "linux_do.list_category_tag_topics": {
      input: {
        /** The category slug, e.g. "develop". */
        categorySlug: string;
        /**
         * The numeric category ID.
         * @minimum 1
         */
        categoryId: number;
        /** The tag name/slug, e.g. "chatgpt". */
        tag: string;
        /**
         * The maximum number of items to return. The feed returns a fixed number of items; this truncates the parsed result locally.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RSS channel metadata. */
        feed: {
          /** The feed title, or null when Linux DO omits it. */
          title: string | null;
          /** The feed link, or null when Linux DO omits it. */
          link: string | null;
          /** The feed description, or null when Linux DO omits it. */
          description: string | null;
        };
        /** The topic summaries. */
        topics: Array<{
          /** The numeric topic ID parsed from the link/guid, or null. */
          id?: number | null;
          /** The topic title, or null. */
          title?: string | null;
          /** The Linux DO web URL for the topic, or null. */
          url?: string | null;
          /** The topic author (dc:creator), or null. */
          author?: string | null;
          /** The category name, or null when absent in the feed. */
          category?: string | null;
          /** Plain-text excerpt of the first post, or null. */
          excerpt?: string | null;
          /** Rendered HTML description from the feed, or null. */
          descriptionHtml?: string | null;
          /**
           * Publication timestamp (ISO 8601), or null.
           * @format date-time
           */
          pubDate?: string | null;
          /** Whether the topic is pinned, or null when omitted. */
          pinned?: boolean | null;
          /** Whether the topic is closed, or null when omitted. */
          closed?: boolean | null;
          /** Whether the topic is archived, or null when omitted. */
          archived?: boolean | null;
          /** The raw parsed RSS item. */
          raw: Record<string, unknown>;
        }>;
        /** The number of topics returned. */
        count: number;
      };
    };
    /** List topics in a Linux DO category. RSS endpoint: GET https://linux.do/c/{slug}/{id}.rss. Returns 404 when the target is private or not accessible anonymously; a 404 does not necessarily mean the resource does not exist. On a 429/rate-limit error, retry later or fetch the endpoint URL directly from a local network. */
    "linux_do.list_category_topics": {
      input: {
        /** The category slug, e.g. "develop". */
        slug: string;
        /**
         * The numeric category ID.
         * @minimum 1
         */
        id: number;
        /**
         * The maximum number of items to return. The feed returns a fixed number of items; this truncates the parsed result locally.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RSS channel metadata. */
        feed: {
          /** The feed title, or null when Linux DO omits it. */
          title: string | null;
          /** The feed link, or null when Linux DO omits it. */
          link: string | null;
          /** The feed description, or null when Linux DO omits it. */
          description: string | null;
        };
        /** The topic summaries. */
        topics: Array<{
          /** The numeric topic ID parsed from the link/guid, or null. */
          id?: number | null;
          /** The topic title, or null. */
          title?: string | null;
          /** The Linux DO web URL for the topic, or null. */
          url?: string | null;
          /** The topic author (dc:creator), or null. */
          author?: string | null;
          /** The category name, or null when absent in the feed. */
          category?: string | null;
          /** Plain-text excerpt of the first post, or null. */
          excerpt?: string | null;
          /** Rendered HTML description from the feed, or null. */
          descriptionHtml?: string | null;
          /**
           * Publication timestamp (ISO 8601), or null.
           * @format date-time
           */
          pubDate?: string | null;
          /** Whether the topic is pinned, or null when omitted. */
          pinned?: boolean | null;
          /** Whether the topic is closed, or null when omitted. */
          closed?: boolean | null;
          /** Whether the topic is archived, or null when omitted. */
          archived?: boolean | null;
          /** The raw parsed RSS item. */
          raw: Record<string, unknown>;
        }>;
        /** The number of topics returned. */
        count: number;
      };
    };
    /** List posts mentioning a Linux DO group. RSS endpoint: GET https://linux.do/g/{name}/mentions.rss. Returns 404 when the target is private or not accessible anonymously; a 404 does not necessarily mean the resource does not exist. On a 429/rate-limit error, retry later or fetch the endpoint URL directly from a local network. */
    "linux_do.list_group_mentions": {
      input: {
        /** The Linux DO group name. */
        name: string;
        /**
         * The maximum number of items to return. The feed returns a fixed number of items; this truncates the parsed result locally.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RSS channel metadata. */
        feed: {
          /** The feed title, or null when Linux DO omits it. */
          title: string | null;
          /** The feed link, or null when Linux DO omits it. */
          link: string | null;
          /** The feed description, or null when Linux DO omits it. */
          description: string | null;
        };
        /** The post summaries. */
        posts: Array<{
          /** The numeric post ID parsed from the guid, or null. */
          id?: number | null;
          /** The numeric topic ID parsed from the link, or null. */
          topicId?: number | null;
          /** The post number within the topic, or null. */
          postNumber?: number | null;
          /** The topic title for this post, or null. */
          title?: string | null;
          /** The Linux DO web URL for the post, or null. */
          url?: string | null;
          /** The post author (dc:creator), or null. */
          author?: string | null;
          /** Plain-text excerpt of the post, or null. */
          excerpt?: string | null;
          /** Rendered HTML content from the feed, or null. */
          contentHtml?: string | null;
          /**
           * Publication timestamp (ISO 8601), or null.
           * @format date-time
           */
          pubDate?: string | null;
          /** The raw parsed RSS item. */
          raw: Record<string, unknown>;
        }>;
        /** The number of posts returned. */
        count: number;
      };
    };
    /** List posts by members of a Linux DO group. RSS endpoint: GET https://linux.do/g/{name}/posts.rss. Returns 404 when the target is private or not accessible anonymously; a 404 does not necessarily mean the resource does not exist. On a 429/rate-limit error, retry later or fetch the endpoint URL directly from a local network. */
    "linux_do.list_group_posts": {
      input: {
        /** The Linux DO group name. */
        name: string;
        /**
         * The maximum number of items to return. The feed returns a fixed number of items; this truncates the parsed result locally.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RSS channel metadata. */
        feed: {
          /** The feed title, or null when Linux DO omits it. */
          title: string | null;
          /** The feed link, or null when Linux DO omits it. */
          link: string | null;
          /** The feed description, or null when Linux DO omits it. */
          description: string | null;
        };
        /** The post summaries. */
        posts: Array<{
          /** The numeric post ID parsed from the guid, or null. */
          id?: number | null;
          /** The numeric topic ID parsed from the link, or null. */
          topicId?: number | null;
          /** The post number within the topic, or null. */
          postNumber?: number | null;
          /** The topic title for this post, or null. */
          title?: string | null;
          /** The Linux DO web URL for the post, or null. */
          url?: string | null;
          /** The post author (dc:creator), or null. */
          author?: string | null;
          /** Plain-text excerpt of the post, or null. */
          excerpt?: string | null;
          /** Rendered HTML content from the feed, or null. */
          contentHtml?: string | null;
          /**
           * Publication timestamp (ISO 8601), or null.
           * @format date-time
           */
          pubDate?: string | null;
          /** The raw parsed RSS item. */
          raw: Record<string, unknown>;
        }>;
        /** The number of posts returned. */
        count: number;
      };
    };
    /** List public hot/trending topics from Linux DO. RSS endpoint: GET https://linux.do/hot.rss. On a 429/rate-limit error, retry later or fetch the endpoint URL directly from a local network. */
    "linux_do.list_hot_topics": {
      input: {
        /**
         * The maximum number of items to return. The feed returns a fixed number of items; this truncates the parsed result locally.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RSS channel metadata. */
        feed: {
          /** The feed title, or null when Linux DO omits it. */
          title: string | null;
          /** The feed link, or null when Linux DO omits it. */
          link: string | null;
          /** The feed description, or null when Linux DO omits it. */
          description: string | null;
        };
        /** The topic summaries. */
        topics: Array<{
          /** The numeric topic ID parsed from the link/guid, or null. */
          id?: number | null;
          /** The topic title, or null. */
          title?: string | null;
          /** The Linux DO web URL for the topic, or null. */
          url?: string | null;
          /** The topic author (dc:creator), or null. */
          author?: string | null;
          /** The category name, or null when absent in the feed. */
          category?: string | null;
          /** Plain-text excerpt of the first post, or null. */
          excerpt?: string | null;
          /** Rendered HTML description from the feed, or null. */
          descriptionHtml?: string | null;
          /**
           * Publication timestamp (ISO 8601), or null.
           * @format date-time
           */
          pubDate?: string | null;
          /** Whether the topic is pinned, or null when omitted. */
          pinned?: boolean | null;
          /** Whether the topic is closed, or null when omitted. */
          closed?: boolean | null;
          /** Whether the topic is archived, or null when omitted. */
          archived?: boolean | null;
          /** The raw parsed RSS item. */
          raw: Record<string, unknown>;
        }>;
        /** The number of topics returned. */
        count: number;
      };
    };
    /** List the latest public posts across Linux DO. RSS endpoint: GET https://linux.do/posts.rss. On a 429/rate-limit error, retry later or fetch the endpoint URL directly from a local network. */
    "linux_do.list_latest_posts": {
      input: {
        /**
         * The maximum number of items to return. The feed returns a fixed number of items; this truncates the parsed result locally.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RSS channel metadata. */
        feed: {
          /** The feed title, or null when Linux DO omits it. */
          title: string | null;
          /** The feed link, or null when Linux DO omits it. */
          link: string | null;
          /** The feed description, or null when Linux DO omits it. */
          description: string | null;
        };
        /** The post summaries. */
        posts: Array<{
          /** The numeric post ID parsed from the guid, or null. */
          id?: number | null;
          /** The numeric topic ID parsed from the link, or null. */
          topicId?: number | null;
          /** The post number within the topic, or null. */
          postNumber?: number | null;
          /** The topic title for this post, or null. */
          title?: string | null;
          /** The Linux DO web URL for the post, or null. */
          url?: string | null;
          /** The post author (dc:creator), or null. */
          author?: string | null;
          /** Plain-text excerpt of the post, or null. */
          excerpt?: string | null;
          /** Rendered HTML content from the feed, or null. */
          contentHtml?: string | null;
          /**
           * Publication timestamp (ISO 8601), or null.
           * @format date-time
           */
          pubDate?: string | null;
          /** The raw parsed RSS item. */
          raw: Record<string, unknown>;
        }>;
        /** The number of posts returned. */
        count: number;
      };
    };
    /** List the latest public topics from Linux DO. RSS endpoint: GET https://linux.do/latest.rss. On a 429/rate-limit error, retry later or fetch the endpoint URL directly from a local network. */
    "linux_do.list_latest_topics": {
      input: {
        /**
         * The maximum number of items to return. The feed returns a fixed number of items; this truncates the parsed result locally.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RSS channel metadata. */
        feed: {
          /** The feed title, or null when Linux DO omits it. */
          title: string | null;
          /** The feed link, or null when Linux DO omits it. */
          link: string | null;
          /** The feed description, or null when Linux DO omits it. */
          description: string | null;
        };
        /** The topic summaries. */
        topics: Array<{
          /** The numeric topic ID parsed from the link/guid, or null. */
          id?: number | null;
          /** The topic title, or null. */
          title?: string | null;
          /** The Linux DO web URL for the topic, or null. */
          url?: string | null;
          /** The topic author (dc:creator), or null. */
          author?: string | null;
          /** The category name, or null when absent in the feed. */
          category?: string | null;
          /** Plain-text excerpt of the first post, or null. */
          excerpt?: string | null;
          /** Rendered HTML description from the feed, or null. */
          descriptionHtml?: string | null;
          /**
           * Publication timestamp (ISO 8601), or null.
           * @format date-time
           */
          pubDate?: string | null;
          /** Whether the topic is pinned, or null when omitted. */
          pinned?: boolean | null;
          /** Whether the topic is closed, or null when omitted. */
          closed?: boolean | null;
          /** Whether the topic is archived, or null when omitted. */
          archived?: boolean | null;
          /** The raw parsed RSS item. */
          raw: Record<string, unknown>;
        }>;
        /** The number of topics returned. */
        count: number;
      };
    };
    /** List topics with a Linux DO tag. RSS endpoint: GET https://linux.do/tag/{tag}.rss. Returns 404 when the target is private or not accessible anonymously; a 404 does not necessarily mean the resource does not exist. On a 429/rate-limit error, retry later or fetch the endpoint URL directly from a local network. */
    "linux_do.list_tag_topics": {
      input: {
        /** The tag name/slug, e.g. "chatgpt". */
        tag: string;
        /**
         * The maximum number of items to return. The feed returns a fixed number of items; this truncates the parsed result locally.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RSS channel metadata. */
        feed: {
          /** The feed title, or null when Linux DO omits it. */
          title: string | null;
          /** The feed link, or null when Linux DO omits it. */
          link: string | null;
          /** The feed description, or null when Linux DO omits it. */
          description: string | null;
        };
        /** The topic summaries. */
        topics: Array<{
          /** The numeric topic ID parsed from the link/guid, or null. */
          id?: number | null;
          /** The topic title, or null. */
          title?: string | null;
          /** The Linux DO web URL for the topic, or null. */
          url?: string | null;
          /** The topic author (dc:creator), or null. */
          author?: string | null;
          /** The category name, or null when absent in the feed. */
          category?: string | null;
          /** Plain-text excerpt of the first post, or null. */
          excerpt?: string | null;
          /** Rendered HTML description from the feed, or null. */
          descriptionHtml?: string | null;
          /**
           * Publication timestamp (ISO 8601), or null.
           * @format date-time
           */
          pubDate?: string | null;
          /** Whether the topic is pinned, or null when omitted. */
          pinned?: boolean | null;
          /** Whether the topic is closed, or null when omitted. */
          closed?: boolean | null;
          /** Whether the topic is archived, or null when omitted. */
          archived?: boolean | null;
          /** The raw parsed RSS item. */
          raw: Record<string, unknown>;
        }>;
        /** The number of topics returned. */
        count: number;
      };
    };
    /** List public top topics from Linux DO for a time period. RSS endpoint: GET https://linux.do/top.rss?period={period} (daily/weekly/monthly/quarterly/yearly/all). On a 429/rate-limit error, retry later or fetch the endpoint URL directly from a local network. */
    "linux_do.list_top_topics": {
      input: {
        /** The Discourse top-topics period. */
        period?: "daily" | "weekly" | "monthly" | "quarterly" | "yearly" | "all";
        /**
         * The maximum number of items to return. The feed returns a fixed number of items; this truncates the parsed result locally.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RSS channel metadata. */
        feed: {
          /** The feed title, or null when Linux DO omits it. */
          title: string | null;
          /** The feed link, or null when Linux DO omits it. */
          link: string | null;
          /** The feed description, or null when Linux DO omits it. */
          description: string | null;
        };
        /** The topic summaries. */
        topics: Array<{
          /** The numeric topic ID parsed from the link/guid, or null. */
          id?: number | null;
          /** The topic title, or null. */
          title?: string | null;
          /** The Linux DO web URL for the topic, or null. */
          url?: string | null;
          /** The topic author (dc:creator), or null. */
          author?: string | null;
          /** The category name, or null when absent in the feed. */
          category?: string | null;
          /** Plain-text excerpt of the first post, or null. */
          excerpt?: string | null;
          /** Rendered HTML description from the feed, or null. */
          descriptionHtml?: string | null;
          /**
           * Publication timestamp (ISO 8601), or null.
           * @format date-time
           */
          pubDate?: string | null;
          /** Whether the topic is pinned, or null when omitted. */
          pinned?: boolean | null;
          /** Whether the topic is closed, or null when omitted. */
          closed?: boolean | null;
          /** Whether the topic is archived, or null when omitted. */
          archived?: boolean | null;
          /** The raw parsed RSS item. */
          raw: Record<string, unknown>;
        }>;
        /** The number of topics returned. */
        count: number;
      };
    };
    /** List posts within a Linux DO topic. RSS endpoint: GET https://linux.do/t/{slug}/{id}.rss (slug defaults to "topic"). Returns 404 when the target is private or not accessible anonymously; a 404 does not necessarily mean the resource does not exist. On a 429/rate-limit error, retry later or fetch the endpoint URL directly from a local network. */
    "linux_do.list_topic_posts": {
      input: {
        /**
         * The numeric topic ID.
         * @minimum 1
         */
        topicId: number;
        /** The topic slug; defaults to "topic" when omitted. */
        slug?: string;
        /**
         * The maximum number of items to return. The feed returns a fixed number of items; this truncates the parsed result locally.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RSS channel metadata. */
        feed: {
          /** The feed title, or null when Linux DO omits it. */
          title: string | null;
          /** The feed link, or null when Linux DO omits it. */
          link: string | null;
          /** The feed description, or null when Linux DO omits it. */
          description: string | null;
        };
        /** The post summaries. */
        posts: Array<{
          /** The numeric post ID parsed from the guid, or null. */
          id?: number | null;
          /** The numeric topic ID parsed from the link, or null. */
          topicId?: number | null;
          /** The post number within the topic, or null. */
          postNumber?: number | null;
          /** The topic title for this post, or null. */
          title?: string | null;
          /** The Linux DO web URL for the post, or null. */
          url?: string | null;
          /** The post author (dc:creator), or null. */
          author?: string | null;
          /** Plain-text excerpt of the post, or null. */
          excerpt?: string | null;
          /** Rendered HTML content from the feed, or null. */
          contentHtml?: string | null;
          /**
           * Publication timestamp (ISO 8601), or null.
           * @format date-time
           */
          pubDate?: string | null;
          /** The raw parsed RSS item. */
          raw: Record<string, unknown>;
        }>;
        /** The number of posts returned. */
        count: number;
      };
    };
    /** List posts by a Linux DO user. RSS endpoint: GET https://linux.do/u/{username}/activity.rss. Returns 404 when the target is private or not accessible anonymously; a 404 does not necessarily mean the resource does not exist. On a 429/rate-limit error, retry later or fetch the endpoint URL directly from a local network. */
    "linux_do.list_user_posts": {
      input: {
        /** The Linux DO username. */
        username: string;
        /**
         * The maximum number of items to return. The feed returns a fixed number of items; this truncates the parsed result locally.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RSS channel metadata. */
        feed: {
          /** The feed title, or null when Linux DO omits it. */
          title: string | null;
          /** The feed link, or null when Linux DO omits it. */
          link: string | null;
          /** The feed description, or null when Linux DO omits it. */
          description: string | null;
        };
        /** The post summaries. */
        posts: Array<{
          /** The numeric post ID parsed from the guid, or null. */
          id?: number | null;
          /** The numeric topic ID parsed from the link, or null. */
          topicId?: number | null;
          /** The post number within the topic, or null. */
          postNumber?: number | null;
          /** The topic title for this post, or null. */
          title?: string | null;
          /** The Linux DO web URL for the post, or null. */
          url?: string | null;
          /** The post author (dc:creator), or null. */
          author?: string | null;
          /** Plain-text excerpt of the post, or null. */
          excerpt?: string | null;
          /** Rendered HTML content from the feed, or null. */
          contentHtml?: string | null;
          /**
           * Publication timestamp (ISO 8601), or null.
           * @format date-time
           */
          pubDate?: string | null;
          /** The raw parsed RSS item. */
          raw: Record<string, unknown>;
        }>;
        /** The number of posts returned. */
        count: number;
      };
    };
    /** List topics created by a Linux DO user. RSS endpoint: GET https://linux.do/u/{username}/activity/topics.rss. Returns 404 when the target is private or not accessible anonymously; a 404 does not necessarily mean the resource does not exist. On a 429/rate-limit error, retry later or fetch the endpoint URL directly from a local network. */
    "linux_do.list_user_topics": {
      input: {
        /** The Linux DO username. */
        username: string;
        /**
         * The maximum number of items to return. The feed returns a fixed number of items; this truncates the parsed result locally.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RSS channel metadata. */
        feed: {
          /** The feed title, or null when Linux DO omits it. */
          title: string | null;
          /** The feed link, or null when Linux DO omits it. */
          link: string | null;
          /** The feed description, or null when Linux DO omits it. */
          description: string | null;
        };
        /** The topic summaries. */
        topics: Array<{
          /** The numeric topic ID parsed from the link/guid, or null. */
          id?: number | null;
          /** The topic title, or null. */
          title?: string | null;
          /** The Linux DO web URL for the topic, or null. */
          url?: string | null;
          /** The topic author (dc:creator), or null. */
          author?: string | null;
          /** The category name, or null when absent in the feed. */
          category?: string | null;
          /** Plain-text excerpt of the first post, or null. */
          excerpt?: string | null;
          /** Rendered HTML description from the feed, or null. */
          descriptionHtml?: string | null;
          /**
           * Publication timestamp (ISO 8601), or null.
           * @format date-time
           */
          pubDate?: string | null;
          /** Whether the topic is pinned, or null when omitted. */
          pinned?: boolean | null;
          /** Whether the topic is closed, or null when omitted. */
          closed?: boolean | null;
          /** Whether the topic is archived, or null when omitted. */
          archived?: boolean | null;
          /** The raw parsed RSS item. */
          raw: Record<string, unknown>;
        }>;
        /** The number of topics returned. */
        count: number;
      };
    };
  }
}
