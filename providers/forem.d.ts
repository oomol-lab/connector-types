import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Forem article for the authenticated user. */
    "forem.create_article": {
      input: {
        /**
         * The article title.
         * @minLength 1
         */
        title: string;
        /**
         * The article body in Markdown.
         * @minLength 1
         */
        bodyMarkdown: string;
        /** Whether the article should be published. */
        published?: boolean;
        /** The article series name. */
        series?: string | null;
        /**
         * The main image URL for the article.
         * @format uri
         */
        mainImage?: string | null;
        /**
         * The canonical URL for the article.
         * @format uri
         */
        canonicalUrl?: string | null;
        /** The article description. */
        description?: string;
        /**
         * The Forem tags to send as a comma-separated upstream value.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * The Forem organization ID for the article.
         * @exclusiveMinimum 0
         */
        organizationId?: number | null;
      };
      output: {
        /** A Forem article. */
        article: {
          /** The Forem record type. */
          type_of?: string;
          /** The Forem article ID. */
          id?: number;
          /** The article title. */
          title?: string;
          /** The article description. */
          description?: string;
          /** The human-readable publish date returned by Forem. */
          readable_publish_date?: string;
          /** The article slug. */
          slug?: string;
          /** The article path. */
          path?: string;
          /** The article URL. */
          url?: string;
          /** The number of comments on the article. */
          comments_count?: number;
          /** The number of public reactions on the article. */
          public_reactions_count?: number;
          /** The collection ID when the article belongs to a collection. */
          collection_id?: number | null;
          /** The article publish timestamp. */
          published_timestamp?: string;
          /** The article language code when returned by Forem. */
          language?: string | null;
          /** The subforem ID when returned by Forem. */
          subforem_id?: number | null;
          /** The number of positive reactions on the article. */
          positive_reactions_count?: number;
          /** The article cover image URL when returned by Forem. */
          cover_image?: string | null;
          /** The social preview image URL returned by Forem. */
          social_image?: string;
          /** The canonical URL returned by Forem. */
          canonical_url?: string;
          /** The article creation timestamp. */
          created_at?: string;
          /** The article edit timestamp when returned by Forem. */
          edited_at?: string | null;
          /** The crosspost timestamp when returned by Forem. */
          crossposted_at?: string | null;
          /** The article publish timestamp when returned by Forem. */
          published_at?: string | null;
          /** The last-comment timestamp returned by Forem. */
          last_comment_at?: string;
          /** The estimated article reading time in minutes. */
          reading_time_minutes?: number;
          /** The article tag list as returned by Forem. */
          tag_list?: string | Array<string>;
          /** The article tags as returned by Forem. */
          tags?: string | Array<string>;
          /** The rendered article HTML when returned by Forem. */
          body_html?: string;
          /** The markdown article body when returned by Forem. */
          body_markdown?: string;
          /** The Forem user summary attached to a resource. */
          user?: {
            /** The user's display name. */
            name?: string;
            /** The Forem username. */
            username?: string;
            /** The user's Twitter username when returned by Forem. */
            twitter_username?: string | null;
            /** The user's GitHub username when returned by Forem. */
            github_username?: string | null;
            /** The Forem user ID. */
            user_id?: number;
            /** The user website URL when returned by Forem. */
            website_url?: string | null;
            /** The user profile image URL. */
            profile_image?: string;
            /** The 90px user profile image URL. */
            profile_image_90?: string;
            [key: string]: unknown;
          };
          /** The Forem organization attached to a resource. */
          organization?: {
            /** The organization display name. */
            name?: string;
            /** The organization username. */
            username?: string;
            /** The organization slug. */
            slug?: string;
            /** The organization profile image URL. */
            profile_image?: string;
            /** The 90px organization profile image URL. */
            profile_image_90?: string;
            [key: string]: unknown;
          };
          /** The Forem flare tag attached to an article. */
          flare_tag?: {
            /** The flare tag name. */
            name?: string;
            /** The flare tag background color in hex. */
            bg_color_hex?: string | null;
            /** The flare tag text color in hex. */
            text_color_hex?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The raw object returned by Forem. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one published Forem article by numeric ID. */
    "forem.get_article": {
      input: {
        /**
         * The Forem article ID.
         * @exclusiveMinimum 0
         */
        articleId: number;
      };
      output: {
        /** A Forem article. */
        article: {
          /** The Forem record type. */
          type_of?: string;
          /** The Forem article ID. */
          id?: number;
          /** The article title. */
          title?: string;
          /** The article description. */
          description?: string;
          /** The human-readable publish date returned by Forem. */
          readable_publish_date?: string;
          /** The article slug. */
          slug?: string;
          /** The article path. */
          path?: string;
          /** The article URL. */
          url?: string;
          /** The number of comments on the article. */
          comments_count?: number;
          /** The number of public reactions on the article. */
          public_reactions_count?: number;
          /** The collection ID when the article belongs to a collection. */
          collection_id?: number | null;
          /** The article publish timestamp. */
          published_timestamp?: string;
          /** The article language code when returned by Forem. */
          language?: string | null;
          /** The subforem ID when returned by Forem. */
          subforem_id?: number | null;
          /** The number of positive reactions on the article. */
          positive_reactions_count?: number;
          /** The article cover image URL when returned by Forem. */
          cover_image?: string | null;
          /** The social preview image URL returned by Forem. */
          social_image?: string;
          /** The canonical URL returned by Forem. */
          canonical_url?: string;
          /** The article creation timestamp. */
          created_at?: string;
          /** The article edit timestamp when returned by Forem. */
          edited_at?: string | null;
          /** The crosspost timestamp when returned by Forem. */
          crossposted_at?: string | null;
          /** The article publish timestamp when returned by Forem. */
          published_at?: string | null;
          /** The last-comment timestamp returned by Forem. */
          last_comment_at?: string;
          /** The estimated article reading time in minutes. */
          reading_time_minutes?: number;
          /** The article tag list as returned by Forem. */
          tag_list?: string | Array<string>;
          /** The article tags as returned by Forem. */
          tags?: string | Array<string>;
          /** The rendered article HTML when returned by Forem. */
          body_html?: string;
          /** The markdown article body when returned by Forem. */
          body_markdown?: string;
          /** The Forem user summary attached to a resource. */
          user?: {
            /** The user's display name. */
            name?: string;
            /** The Forem username. */
            username?: string;
            /** The user's Twitter username when returned by Forem. */
            twitter_username?: string | null;
            /** The user's GitHub username when returned by Forem. */
            github_username?: string | null;
            /** The Forem user ID. */
            user_id?: number;
            /** The user website URL when returned by Forem. */
            website_url?: string | null;
            /** The user profile image URL. */
            profile_image?: string;
            /** The 90px user profile image URL. */
            profile_image_90?: string;
            [key: string]: unknown;
          };
          /** The Forem organization attached to a resource. */
          organization?: {
            /** The organization display name. */
            name?: string;
            /** The organization username. */
            username?: string;
            /** The organization slug. */
            slug?: string;
            /** The organization profile image URL. */
            profile_image?: string;
            /** The 90px organization profile image URL. */
            profile_image_90?: string;
            [key: string]: unknown;
          };
          /** The Forem flare tag attached to an article. */
          flare_tag?: {
            /** The flare tag name. */
            name?: string;
            /** The flare tag background color in hex. */
            bg_color_hex?: string | null;
            /** The flare tag text color in hex. */
            text_color_hex?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The raw object returned by Forem. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one published Forem article by username and slug. */
    "forem.get_article_by_path": {
      input: {
        /**
         * The Forem username from the article path.
         * @minLength 1
         */
        username: string;
        /**
         * The Forem article slug.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** A Forem article. */
        article: {
          /** The Forem record type. */
          type_of?: string;
          /** The Forem article ID. */
          id?: number;
          /** The article title. */
          title?: string;
          /** The article description. */
          description?: string;
          /** The human-readable publish date returned by Forem. */
          readable_publish_date?: string;
          /** The article slug. */
          slug?: string;
          /** The article path. */
          path?: string;
          /** The article URL. */
          url?: string;
          /** The number of comments on the article. */
          comments_count?: number;
          /** The number of public reactions on the article. */
          public_reactions_count?: number;
          /** The collection ID when the article belongs to a collection. */
          collection_id?: number | null;
          /** The article publish timestamp. */
          published_timestamp?: string;
          /** The article language code when returned by Forem. */
          language?: string | null;
          /** The subforem ID when returned by Forem. */
          subforem_id?: number | null;
          /** The number of positive reactions on the article. */
          positive_reactions_count?: number;
          /** The article cover image URL when returned by Forem. */
          cover_image?: string | null;
          /** The social preview image URL returned by Forem. */
          social_image?: string;
          /** The canonical URL returned by Forem. */
          canonical_url?: string;
          /** The article creation timestamp. */
          created_at?: string;
          /** The article edit timestamp when returned by Forem. */
          edited_at?: string | null;
          /** The crosspost timestamp when returned by Forem. */
          crossposted_at?: string | null;
          /** The article publish timestamp when returned by Forem. */
          published_at?: string | null;
          /** The last-comment timestamp returned by Forem. */
          last_comment_at?: string;
          /** The estimated article reading time in minutes. */
          reading_time_minutes?: number;
          /** The article tag list as returned by Forem. */
          tag_list?: string | Array<string>;
          /** The article tags as returned by Forem. */
          tags?: string | Array<string>;
          /** The rendered article HTML when returned by Forem. */
          body_html?: string;
          /** The markdown article body when returned by Forem. */
          body_markdown?: string;
          /** The Forem user summary attached to a resource. */
          user?: {
            /** The user's display name. */
            name?: string;
            /** The Forem username. */
            username?: string;
            /** The user's Twitter username when returned by Forem. */
            twitter_username?: string | null;
            /** The user's GitHub username when returned by Forem. */
            github_username?: string | null;
            /** The Forem user ID. */
            user_id?: number;
            /** The user website URL when returned by Forem. */
            website_url?: string | null;
            /** The user profile image URL. */
            profile_image?: string;
            /** The 90px user profile image URL. */
            profile_image_90?: string;
            [key: string]: unknown;
          };
          /** The Forem organization attached to a resource. */
          organization?: {
            /** The organization display name. */
            name?: string;
            /** The organization username. */
            username?: string;
            /** The organization slug. */
            slug?: string;
            /** The organization profile image URL. */
            profile_image?: string;
            /** The 90px organization profile image URL. */
            profile_image_90?: string;
            [key: string]: unknown;
          };
          /** The Forem flare tag attached to an article. */
          flare_tag?: {
            /** The flare tag name. */
            name?: string;
            /** The flare tag background color in hex. */
            bg_color_hex?: string | null;
            /** The flare tag text color in hex. */
            text_color_hex?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The raw object returned by Forem. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Forem comment thread by numeric ID. */
    "forem.get_comment": {
      input: {
        /**
         * The Forem comment ID.
         * @exclusiveMinimum 0
         */
        commentId: number;
      };
      output: {
        /** A Forem comment thread node. */
        comment: {
          /** The Forem record type. */
          type_of?: string;
          /** The Forem comment ID code. */
          id_code?: string;
          /** The comment creation timestamp. */
          created_at?: string;
          /** The rendered comment body HTML. */
          body_html?: string;
          /** The image URL attached to a podcast comment when returned by Forem. */
          image_url?: string;
          /** The Forem user summary attached to a resource. */
          user?: {
            /** The user's display name. */
            name?: string;
            /** The Forem username. */
            username?: string;
            /** The user's Twitter username when returned by Forem. */
            twitter_username?: string | null;
            /** The user's GitHub username when returned by Forem. */
            github_username?: string | null;
            /** The Forem user ID. */
            user_id?: number;
            /** The user website URL when returned by Forem. */
            website_url?: string | null;
            /** The user profile image URL. */
            profile_image?: string;
            /** The 90px user profile image URL. */
            profile_image_90?: string;
            [key: string]: unknown;
          };
          /** Nested child comments. */
          children?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** The raw object returned by Forem. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve the Forem user associated with the connected API key. */
    "forem.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Forem user profile. */
        user: {
          /** The Forem record type. */
          type_of?: string;
          /** The Forem user ID. */
          id?: number;
          /** The Forem username. */
          username?: string;
          /** The Forem display name. */
          name?: string;
          /** The user email address when returned by Forem. */
          email?: string | null;
          /** The user profile summary when returned by Forem. */
          summary?: string | null;
          /** The user's Twitter username when returned by Forem. */
          twitter_username?: string | null;
          /** The user's GitHub username when returned by Forem. */
          github_username?: string | null;
          /** The user website URL when returned by Forem. */
          website_url?: string | null;
          /** The user location when returned by Forem. */
          location?: string | null;
          /** The user join date returned by Forem. */
          joined_at?: string;
          /** The user profile image URL. */
          profile_image?: string;
          /** The Forem badge IDs awarded to the user. */
          badge_ids?: Array<number>;
          /** The number of followers reported by Forem. */
          followers_count?: number;
          [key: string]: unknown;
        };
        /** The raw object returned by Forem. */
        raw: Record<string, unknown>;
      };
    };
    /** List published Forem articles with optional filters. */
    "forem.list_articles": {
      input: {
        /**
         * The pagination page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of articles to return per page. Forem defaults to 30.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
        /**
         * Return articles containing this tag.
         * @minLength 1
         */
        tag?: string;
        /**
         * The Forem tags to send as a comma-separated upstream value.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * The Forem tags to send as a comma-separated upstream value.
         * @minItems 1
         */
        tagsExclude?: Array<string>;
        /**
         * Return articles for this user or organization username.
         * @minLength 1
         */
        username?: string;
        /** The Forem article list state filter. */
        state?: "fresh" | "rising" | "all";
        /**
         * Return the most popular articles from the last N days.
         * @exclusiveMinimum 0
         */
        top?: number;
        /**
         * Return articles belonging to this collection ID.
         * @exclusiveMinimum 0
         */
        collectionId?: number;
      };
      output: {
        /** The Forem articles returned by the request. */
        articles: Array<{
          /** The Forem record type. */
          type_of?: string;
          /** The Forem article ID. */
          id?: number;
          /** The article title. */
          title?: string;
          /** The article description. */
          description?: string;
          /** The human-readable publish date returned by Forem. */
          readable_publish_date?: string;
          /** The article slug. */
          slug?: string;
          /** The article path. */
          path?: string;
          /** The article URL. */
          url?: string;
          /** The number of comments on the article. */
          comments_count?: number;
          /** The number of public reactions on the article. */
          public_reactions_count?: number;
          /** The collection ID when the article belongs to a collection. */
          collection_id?: number | null;
          /** The article publish timestamp. */
          published_timestamp?: string;
          /** The article language code when returned by Forem. */
          language?: string | null;
          /** The subforem ID when returned by Forem. */
          subforem_id?: number | null;
          /** The number of positive reactions on the article. */
          positive_reactions_count?: number;
          /** The article cover image URL when returned by Forem. */
          cover_image?: string | null;
          /** The social preview image URL returned by Forem. */
          social_image?: string;
          /** The canonical URL returned by Forem. */
          canonical_url?: string;
          /** The article creation timestamp. */
          created_at?: string;
          /** The article edit timestamp when returned by Forem. */
          edited_at?: string | null;
          /** The crosspost timestamp when returned by Forem. */
          crossposted_at?: string | null;
          /** The article publish timestamp when returned by Forem. */
          published_at?: string | null;
          /** The last-comment timestamp returned by Forem. */
          last_comment_at?: string;
          /** The estimated article reading time in minutes. */
          reading_time_minutes?: number;
          /** The article tag list as returned by Forem. */
          tag_list?: string | Array<string>;
          /** The article tags as returned by Forem. */
          tags?: string | Array<string>;
          /** The rendered article HTML when returned by Forem. */
          body_html?: string;
          /** The markdown article body when returned by Forem. */
          body_markdown?: string;
          /** The Forem user summary attached to a resource. */
          user?: {
            /** The user's display name. */
            name?: string;
            /** The Forem username. */
            username?: string;
            /** The user's Twitter username when returned by Forem. */
            twitter_username?: string | null;
            /** The user's GitHub username when returned by Forem. */
            github_username?: string | null;
            /** The Forem user ID. */
            user_id?: number;
            /** The user website URL when returned by Forem. */
            website_url?: string | null;
            /** The user profile image URL. */
            profile_image?: string;
            /** The 90px user profile image URL. */
            profile_image_90?: string;
            [key: string]: unknown;
          };
          /** The Forem organization attached to a resource. */
          organization?: {
            /** The organization display name. */
            name?: string;
            /** The organization username. */
            username?: string;
            /** The organization slug. */
            slug?: string;
            /** The organization profile image URL. */
            profile_image?: string;
            /** The 90px organization profile image URL. */
            profile_image_90?: string;
            [key: string]: unknown;
          };
          /** The Forem flare tag attached to an article. */
          flare_tag?: {
            /** The flare tag name. */
            name?: string;
            /** The flare tag background color in hex. */
            bg_color_hex?: string | null;
            /** The flare tag text color in hex. */
            text_color_hex?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The raw array returned by Forem. */
        raw: Array<unknown>;
      };
    };
    /** List Forem comments for an article or podcast episode as threaded conversations. */
    "forem.list_comments": {
      input: {
        /**
         * The Forem article ID whose comments should be listed.
         * @exclusiveMinimum 0
         */
        articleId?: number;
        /**
         * The Forem podcast episode ID whose comments should be listed.
         * @exclusiveMinimum 0
         */
        podcastEpisodeId?: number;
        /**
         * The pagination page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of articles to return per page. Forem defaults to 30.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
      };
      output: {
        /** The Forem comments returned by the request. */
        comments: Array<{
          /** The Forem record type. */
          type_of?: string;
          /** The Forem comment ID code. */
          id_code?: string;
          /** The comment creation timestamp. */
          created_at?: string;
          /** The rendered comment body HTML. */
          body_html?: string;
          /** The image URL attached to a podcast comment when returned by Forem. */
          image_url?: string;
          /** The Forem user summary attached to a resource. */
          user?: {
            /** The user's display name. */
            name?: string;
            /** The Forem username. */
            username?: string;
            /** The user's Twitter username when returned by Forem. */
            twitter_username?: string | null;
            /** The user's GitHub username when returned by Forem. */
            github_username?: string | null;
            /** The Forem user ID. */
            user_id?: number;
            /** The user website URL when returned by Forem. */
            website_url?: string | null;
            /** The user profile image URL. */
            profile_image?: string;
            /** The 90px user profile image URL. */
            profile_image_90?: string;
            [key: string]: unknown;
          };
          /** Nested child comments. */
          children?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** The raw array returned by Forem. */
        raw: Array<unknown>;
      };
    };
    /** List articles owned by the authenticated Forem user. */
    "forem.list_my_articles": {
      input: {
        /** Which authenticated-user article collection to list. */
        scope?: "published" | "unpublished" | "all" | "default";
        /**
         * The pagination page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of articles to return per page. Forem defaults to 30.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
      };
      output: {
        /** The Forem articles returned by the request. */
        articles: Array<{
          /** The Forem record type. */
          type_of?: string;
          /** The Forem article ID. */
          id?: number;
          /** The article title. */
          title?: string;
          /** The article description. */
          description?: string;
          /** The human-readable publish date returned by Forem. */
          readable_publish_date?: string;
          /** The article slug. */
          slug?: string;
          /** The article path. */
          path?: string;
          /** The article URL. */
          url?: string;
          /** The number of comments on the article. */
          comments_count?: number;
          /** The number of public reactions on the article. */
          public_reactions_count?: number;
          /** The collection ID when the article belongs to a collection. */
          collection_id?: number | null;
          /** The article publish timestamp. */
          published_timestamp?: string;
          /** The article language code when returned by Forem. */
          language?: string | null;
          /** The subforem ID when returned by Forem. */
          subforem_id?: number | null;
          /** The number of positive reactions on the article. */
          positive_reactions_count?: number;
          /** The article cover image URL when returned by Forem. */
          cover_image?: string | null;
          /** The social preview image URL returned by Forem. */
          social_image?: string;
          /** The canonical URL returned by Forem. */
          canonical_url?: string;
          /** The article creation timestamp. */
          created_at?: string;
          /** The article edit timestamp when returned by Forem. */
          edited_at?: string | null;
          /** The crosspost timestamp when returned by Forem. */
          crossposted_at?: string | null;
          /** The article publish timestamp when returned by Forem. */
          published_at?: string | null;
          /** The last-comment timestamp returned by Forem. */
          last_comment_at?: string;
          /** The estimated article reading time in minutes. */
          reading_time_minutes?: number;
          /** The article tag list as returned by Forem. */
          tag_list?: string | Array<string>;
          /** The article tags as returned by Forem. */
          tags?: string | Array<string>;
          /** The rendered article HTML when returned by Forem. */
          body_html?: string;
          /** The markdown article body when returned by Forem. */
          body_markdown?: string;
          /** The Forem user summary attached to a resource. */
          user?: {
            /** The user's display name. */
            name?: string;
            /** The Forem username. */
            username?: string;
            /** The user's Twitter username when returned by Forem. */
            twitter_username?: string | null;
            /** The user's GitHub username when returned by Forem. */
            github_username?: string | null;
            /** The Forem user ID. */
            user_id?: number;
            /** The user website URL when returned by Forem. */
            website_url?: string | null;
            /** The user profile image URL. */
            profile_image?: string;
            /** The 90px user profile image URL. */
            profile_image_90?: string;
            [key: string]: unknown;
          };
          /** The Forem organization attached to a resource. */
          organization?: {
            /** The organization display name. */
            name?: string;
            /** The organization username. */
            username?: string;
            /** The organization slug. */
            slug?: string;
            /** The organization profile image URL. */
            profile_image?: string;
            /** The 90px organization profile image URL. */
            profile_image_90?: string;
            [key: string]: unknown;
          };
          /** The Forem flare tag attached to an article. */
          flare_tag?: {
            /** The flare tag name. */
            name?: string;
            /** The flare tag background color in hex. */
            bg_color_hex?: string | null;
            /** The flare tag text color in hex. */
            text_color_hex?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The raw array returned by Forem. */
        raw: Array<unknown>;
      };
    };
    /** List Forem tags ordered by popularity. */
    "forem.list_tags": {
      input: {
        /**
         * The pagination page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of tags to return per page. Forem defaults to 10.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
      };
      output: {
        /** The Forem tags returned by the request. */
        tags: Array<{
          /** The Forem tag ID. */
          id?: number;
          /** The Forem tag name. */
          name?: string;
          /** The tag background color in hex. */
          bg_color_hex?: string | null;
          /** The tag text color in hex. */
          text_color_hex?: string | null;
          /** The tag short summary when returned by Forem. */
          short_summary?: string | null;
          [key: string]: unknown;
        }>;
        /** The raw array returned by Forem. */
        raw: Array<unknown>;
      };
    };
    /** Update an existing Forem article by numeric ID. */
    "forem.update_article": {
      input: {
        /**
         * The Forem article ID to update.
         * @exclusiveMinimum 0
         */
        articleId: number;
        /**
         * The article title.
         * @minLength 1
         */
        title?: string;
        /**
         * The article body in Markdown.
         * @minLength 1
         */
        bodyMarkdown?: string;
        /** Whether the article should be published. */
        published?: boolean;
        /** The article series name. */
        series?: string | null;
        /**
         * The main image URL for the article.
         * @format uri
         */
        mainImage?: string | null;
        /**
         * The canonical URL for the article.
         * @format uri
         */
        canonicalUrl?: string | null;
        /** The article description. */
        description?: string;
        /**
         * The Forem tags to send as a comma-separated upstream value.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * The Forem organization ID for the article.
         * @exclusiveMinimum 0
         */
        organizationId?: number | null;
      };
      output: {
        /** A Forem article. */
        article: {
          /** The Forem record type. */
          type_of?: string;
          /** The Forem article ID. */
          id?: number;
          /** The article title. */
          title?: string;
          /** The article description. */
          description?: string;
          /** The human-readable publish date returned by Forem. */
          readable_publish_date?: string;
          /** The article slug. */
          slug?: string;
          /** The article path. */
          path?: string;
          /** The article URL. */
          url?: string;
          /** The number of comments on the article. */
          comments_count?: number;
          /** The number of public reactions on the article. */
          public_reactions_count?: number;
          /** The collection ID when the article belongs to a collection. */
          collection_id?: number | null;
          /** The article publish timestamp. */
          published_timestamp?: string;
          /** The article language code when returned by Forem. */
          language?: string | null;
          /** The subforem ID when returned by Forem. */
          subforem_id?: number | null;
          /** The number of positive reactions on the article. */
          positive_reactions_count?: number;
          /** The article cover image URL when returned by Forem. */
          cover_image?: string | null;
          /** The social preview image URL returned by Forem. */
          social_image?: string;
          /** The canonical URL returned by Forem. */
          canonical_url?: string;
          /** The article creation timestamp. */
          created_at?: string;
          /** The article edit timestamp when returned by Forem. */
          edited_at?: string | null;
          /** The crosspost timestamp when returned by Forem. */
          crossposted_at?: string | null;
          /** The article publish timestamp when returned by Forem. */
          published_at?: string | null;
          /** The last-comment timestamp returned by Forem. */
          last_comment_at?: string;
          /** The estimated article reading time in minutes. */
          reading_time_minutes?: number;
          /** The article tag list as returned by Forem. */
          tag_list?: string | Array<string>;
          /** The article tags as returned by Forem. */
          tags?: string | Array<string>;
          /** The rendered article HTML when returned by Forem. */
          body_html?: string;
          /** The markdown article body when returned by Forem. */
          body_markdown?: string;
          /** The Forem user summary attached to a resource. */
          user?: {
            /** The user's display name. */
            name?: string;
            /** The Forem username. */
            username?: string;
            /** The user's Twitter username when returned by Forem. */
            twitter_username?: string | null;
            /** The user's GitHub username when returned by Forem. */
            github_username?: string | null;
            /** The Forem user ID. */
            user_id?: number;
            /** The user website URL when returned by Forem. */
            website_url?: string | null;
            /** The user profile image URL. */
            profile_image?: string;
            /** The 90px user profile image URL. */
            profile_image_90?: string;
            [key: string]: unknown;
          };
          /** The Forem organization attached to a resource. */
          organization?: {
            /** The organization display name. */
            name?: string;
            /** The organization username. */
            username?: string;
            /** The organization slug. */
            slug?: string;
            /** The organization profile image URL. */
            profile_image?: string;
            /** The 90px organization profile image URL. */
            profile_image_90?: string;
            [key: string]: unknown;
          };
          /** The Forem flare tag attached to an article. */
          flare_tag?: {
            /** The flare tag name. */
            name?: string;
            /** The flare tag background color in hex. */
            bg_color_hex?: string | null;
            /** The flare tag text color in hex. */
            text_color_hex?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The raw object returned by Forem. */
        raw: Record<string, unknown>;
      };
    };
  }
}
