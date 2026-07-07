import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a reply post in an existing Discourse topic. */
    "discourse.create_post": {
      input: {
        /**
         * The Discourse topic identifier to reply to.
         * @exclusiveMinimum 0
         */
        topicId: number;
        /**
         * The raw Markdown body for the reply.
         * @minLength 1
         */
        raw: string;
        /**
         * The post number to reply to inside the topic.
         * @exclusiveMinimum 0
         */
        replyToPostNumber?: number;
        /**
         * The explicit creation timestamp for the post.
         * @format date-time
         */
        createdAt?: string;
      };
      output: {
        /** A Discourse post summary. */
        post: {
          /** The Discourse post identifier. */
          id: number;
          /** The topic identifier for the post when present. */
          topicId: number | null;
          /** The topic slug for the post when present. */
          topicSlug: string | null;
          /** The one-based post number inside the topic when present. */
          postNumber: number | null;
          /** The post number this post replies to when present. */
          replyToPostNumber: number | null;
          /** The author's username when present. */
          username: string | null;
          /** The author's display username when present. */
          displayUsername: string | null;
          /** The author's display name when present. */
          name: string | null;
          /** The timestamp when the post was created when present. */
          createdAt: string | null;
          /** The timestamp when the post was updated when present. */
          updatedAt: string | null;
          /** The cooked HTML post body when present. */
          cooked: string | null;
          /** The Discourse post type value when present. */
          postType: number | null;
          /** The raw Discourse post payload. */
          raw: Record<string, unknown>;
        };
        /** The raw Discourse created post payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a new Discourse topic with a first post. */
    "discourse.create_topic": {
      input: {
        /**
         * The title for the new Discourse topic.
         * @minLength 1
         */
        title: string;
        /**
         * The raw Markdown body for the first post.
         * @minLength 1
         */
        raw: string;
        /**
         * The Discourse category identifier for the new topic.
         * @exclusiveMinimum 0
         */
        categoryId?: number;
        /**
         * A remote URL to associate with the new topic.
         * @format uri
         */
        embedUrl?: string;
        /**
         * A caller-provided external identifier for the new topic.
         * @minLength 1
         */
        externalId?: string;
        /** Whether the author should automatically track the new topic. */
        autoTrack?: boolean;
        /**
         * The explicit creation timestamp for the post.
         * @format date-time
         */
        createdAt?: string;
      };
      output: {
        /** A Discourse post summary. */
        post: {
          /** The Discourse post identifier. */
          id: number;
          /** The topic identifier for the post when present. */
          topicId: number | null;
          /** The topic slug for the post when present. */
          topicSlug: string | null;
          /** The one-based post number inside the topic when present. */
          postNumber: number | null;
          /** The post number this post replies to when present. */
          replyToPostNumber: number | null;
          /** The author's username when present. */
          username: string | null;
          /** The author's display username when present. */
          displayUsername: string | null;
          /** The author's display name when present. */
          name: string | null;
          /** The timestamp when the post was created when present. */
          createdAt: string | null;
          /** The timestamp when the post was updated when present. */
          updatedAt: string | null;
          /** The cooked HTML post body when present. */
          cooked: string | null;
          /** The Discourse post type value when present. */
          postType: number | null;
          /** The raw Discourse post payload. */
          raw: Record<string, unknown>;
        };
        /** The raw Discourse created post payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Read one Discourse topic and its returned posts. */
    "discourse.get_topic": {
      input: {
        /**
         * The Discourse topic identifier.
         * @exclusiveMinimum 0
         */
        topicId: number;
      };
      output: {
        /** The normalized Discourse topic detail. */
        topic: {
          /** The Discourse topic identifier. */
          id: number;
          /** The topic title. */
          title: string;
          /** The HTML-formatted topic title when present. */
          fancyTitle: string | null;
          /** The topic slug when present. */
          slug: string | null;
          /** The number of posts in the topic when present. */
          postsCount: number | null;
          /** The category identifier for the topic when present. */
          categoryId: number | null;
          /** The timestamp when the topic was created when present. */
          createdAt: string | null;
          /** The posts returned for the topic. */
          posts: Array<{
            /** The Discourse post identifier. */
            id: number;
            /** The topic identifier for the post when present. */
            topicId: number | null;
            /** The topic slug for the post when present. */
            topicSlug: string | null;
            /** The one-based post number inside the topic when present. */
            postNumber: number | null;
            /** The post number this post replies to when present. */
            replyToPostNumber: number | null;
            /** The author's username when present. */
            username: string | null;
            /** The author's display username when present. */
            displayUsername: string | null;
            /** The author's display name when present. */
            name: string | null;
            /** The timestamp when the post was created when present. */
            createdAt: string | null;
            /** The timestamp when the post was updated when present. */
            updatedAt: string | null;
            /** The cooked HTML post body when present. */
            cooked: string | null;
            /** The Discourse post type value when present. */
            postType: number | null;
            /** The raw Discourse post payload. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Discourse topic details object. */
          details: Record<string, unknown>;
          /** The raw Discourse topic payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Discourse categories visible to the authenticated API user. */
    "discourse.list_categories": {
      input: {
        /** Whether Discourse should include subcategories. */
        includeSubcategories?: boolean;
      };
      output: {
        /** The categories returned by Discourse. */
        categories: Array<{
          /** The Discourse category identifier. */
          id: number;
          /** The category name. */
          name: string;
          /** The category slug when present. */
          slug: string | null;
          /** The category color hex value when present. */
          color: string | null;
          /** The category text color hex value when present. */
          textColor: string | null;
          /** The plain-text category description when present. */
          description: string | null;
          /** The number of topics in the category when present. */
          topicCount: number | null;
          /** The number of posts in the category when present. */
          postCount: number | null;
          /** The category display position when present. */
          position: number | null;
          /** The parent category identifier when present. */
          parentCategoryId: number | null;
          /** Whether the category is read-restricted when present. */
          readRestricted: boolean | null;
          /** The raw Discourse category payload. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Discourse category list payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List topics for one Discourse category. */
    "discourse.list_category_topics": {
      input: {
        /**
         * The Discourse category slug.
         * @minLength 1
         */
        slug: string;
        /**
         * The Discourse category identifier.
         * @exclusiveMinimum 0
         */
        categoryId: number;
      };
      output: {
        /** Whether the authenticated user can create a topic. */
        canCreateTopic: boolean | null;
        /** The Discourse per-page value used by the response. */
        perPage: number | null;
        /** The relative URL for the next topic page when present. */
        moreTopicsUrl: string | null;
        /** The topics returned by Discourse. */
        topics: Array<{
          /** The Discourse topic identifier. */
          id: number;
          /** The topic title. */
          title: string;
          /** The HTML-formatted topic title when present. */
          fancyTitle: string | null;
          /** The topic slug when present. */
          slug: string | null;
          /** The number of posts in the topic when present. */
          postsCount: number | null;
          /** The number of replies in the topic when present. */
          replyCount: number | null;
          /** The highest post number in the topic when present. */
          highestPostNumber: number | null;
          /** The timestamp when the topic was created when present. */
          createdAt: string | null;
          /** The timestamp of the latest post when present. */
          lastPostedAt: string | null;
          /** The timestamp when the topic was last bumped when present. */
          bumpedAt: string | null;
          /** The category identifier for the topic when present. */
          categoryId: number | null;
          /** The topic view count when present. */
          views: number | null;
          /** The topic like count when present. */
          likeCount: number | null;
          /** Whether the topic is pinned when present. */
          pinned: boolean | null;
          /** Whether the topic is closed when present. */
          closed: boolean | null;
          /** Whether the topic is archived when present. */
          archived: boolean | null;
          /** Whether the topic is visible when present. */
          visible: boolean | null;
          /** The username of the latest poster when present. */
          lastPosterUsername: string | null;
          /** The raw Discourse topic payload. */
          raw: Record<string, unknown>;
        }>;
        /** The users referenced by the topic list. */
        users: Array<{
          /** The Discourse user identifier when present. */
          id: number | null;
          /** The Discourse username when present. */
          username: string | null;
          /** The user's display name when present. */
          name: string | null;
          /** The Discourse avatar template URL when present. */
          avatarTemplate: string | null;
          /** The raw Discourse user payload. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Discourse topic list payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List the latest topics visible to the authenticated Discourse API user. */
    "discourse.list_latest_topics": {
      input: {
        /** The Discourse latest-topics ordering field. */
        order?: "default" | "created" | "activity" | "views" | "posts" | "category" | "likes" | "op_likes" | "posters";
        /** Whether Discourse should sort the latest topics ascending. */
        ascending?: boolean;
        /**
         * Maximum number of topics to request from Discourse.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Whether the authenticated user can create a topic. */
        canCreateTopic: boolean | null;
        /** The Discourse per-page value used by the response. */
        perPage: number | null;
        /** The relative URL for the next topic page when present. */
        moreTopicsUrl: string | null;
        /** The topics returned by Discourse. */
        topics: Array<{
          /** The Discourse topic identifier. */
          id: number;
          /** The topic title. */
          title: string;
          /** The HTML-formatted topic title when present. */
          fancyTitle: string | null;
          /** The topic slug when present. */
          slug: string | null;
          /** The number of posts in the topic when present. */
          postsCount: number | null;
          /** The number of replies in the topic when present. */
          replyCount: number | null;
          /** The highest post number in the topic when present. */
          highestPostNumber: number | null;
          /** The timestamp when the topic was created when present. */
          createdAt: string | null;
          /** The timestamp of the latest post when present. */
          lastPostedAt: string | null;
          /** The timestamp when the topic was last bumped when present. */
          bumpedAt: string | null;
          /** The category identifier for the topic when present. */
          categoryId: number | null;
          /** The topic view count when present. */
          views: number | null;
          /** The topic like count when present. */
          likeCount: number | null;
          /** Whether the topic is pinned when present. */
          pinned: boolean | null;
          /** Whether the topic is closed when present. */
          closed: boolean | null;
          /** Whether the topic is archived when present. */
          archived: boolean | null;
          /** Whether the topic is visible when present. */
          visible: boolean | null;
          /** The username of the latest poster when present. */
          lastPosterUsername: string | null;
          /** The raw Discourse topic payload. */
          raw: Record<string, unknown>;
        }>;
        /** The users referenced by the topic list. */
        users: Array<{
          /** The Discourse user identifier when present. */
          id: number | null;
          /** The Discourse username when present. */
          username: string | null;
          /** The user's display name when present. */
          name: string | null;
          /** The Discourse avatar template URL when present. */
          avatarTemplate: string | null;
          /** The raw Discourse user payload. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Discourse topic list payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Discourse content using the official search query syntax. */
    "discourse.search": {
      input: {
        /**
         * The Discourse search query string.
         * @minLength 1
         */
        query: string;
        /**
         * The one-based search results page.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The posts returned by Discourse search. */
        posts: Array<{
          /** The Discourse post identifier. */
          id: number;
          /** The topic identifier for the post when present. */
          topicId: number | null;
          /** The topic slug for the post when present. */
          topicSlug: string | null;
          /** The one-based post number inside the topic when present. */
          postNumber: number | null;
          /** The post number this post replies to when present. */
          replyToPostNumber: number | null;
          /** The author's username when present. */
          username: string | null;
          /** The author's display username when present. */
          displayUsername: string | null;
          /** The author's display name when present. */
          name: string | null;
          /** The timestamp when the post was created when present. */
          createdAt: string | null;
          /** The timestamp when the post was updated when present. */
          updatedAt: string | null;
          /** The cooked HTML post body when present. */
          cooked: string | null;
          /** The Discourse post type value when present. */
          postType: number | null;
          /** The raw Discourse post payload. */
          raw: Record<string, unknown>;
        }>;
        /** The topics returned by Discourse search. */
        topics: Array<{
          /** The Discourse topic identifier. */
          id: number;
          /** The topic title. */
          title: string;
          /** The HTML-formatted topic title when present. */
          fancyTitle: string | null;
          /** The topic slug when present. */
          slug: string | null;
          /** The number of posts in the topic when present. */
          postsCount: number | null;
          /** The number of replies in the topic when present. */
          replyCount: number | null;
          /** The highest post number in the topic when present. */
          highestPostNumber: number | null;
          /** The timestamp when the topic was created when present. */
          createdAt: string | null;
          /** The timestamp of the latest post when present. */
          lastPostedAt: string | null;
          /** The timestamp when the topic was last bumped when present. */
          bumpedAt: string | null;
          /** The category identifier for the topic when present. */
          categoryId: number | null;
          /** The topic view count when present. */
          views: number | null;
          /** The topic like count when present. */
          likeCount: number | null;
          /** Whether the topic is pinned when present. */
          pinned: boolean | null;
          /** Whether the topic is closed when present. */
          closed: boolean | null;
          /** Whether the topic is archived when present. */
          archived: boolean | null;
          /** Whether the topic is visible when present. */
          visible: boolean | null;
          /** The username of the latest poster when present. */
          lastPosterUsername: string | null;
          /** The raw Discourse topic payload. */
          raw: Record<string, unknown>;
        }>;
        /** The users returned by Discourse search. */
        users: Array<{
          /** The Discourse user identifier when present. */
          id: number | null;
          /** The Discourse username when present. */
          username: string | null;
          /** The user's display name when present. */
          name: string | null;
          /** The Discourse avatar template URL when present. */
          avatarTemplate: string | null;
          /** The raw Discourse user payload. */
          raw: Record<string, unknown>;
        }>;
        /** The categories returned by Discourse search. */
        categories: Array<{
          /** The Discourse category identifier. */
          id: number;
          /** The category name. */
          name: string;
          /** The category slug when present. */
          slug: string | null;
          /** The category color hex value when present. */
          color: string | null;
          /** The category text color hex value when present. */
          textColor: string | null;
          /** The plain-text category description when present. */
          description: string | null;
          /** The number of topics in the category when present. */
          topicCount: number | null;
          /** The number of posts in the category when present. */
          postCount: number | null;
          /** The category display position when present. */
          position: number | null;
          /** The parent category identifier when present. */
          parentCategoryId: number | null;
          /** Whether the category is read-restricted when present. */
          readRestricted: boolean | null;
          /** The raw Discourse category payload. */
          raw: Record<string, unknown>;
        }>;
        /** The grouped_search_result object returned by Discourse. */
        groupedSearchResult: Record<string, unknown>;
        /** The raw Discourse search payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
