import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new Dev.to article. */
    "devto.create_article": {
      input: {
        /**
         * The article title.
         * @minLength 1
         */
        title: string;
        /**
         * The article body in markdown.
         * @minLength 1
         */
        bodyMarkdown: string;
        /** Whether the article is published. */
        published?: boolean;
        /** The optional article series. */
        series?: string | null;
        /** The optional main image URL. */
        mainImage?: string | null;
        /** The optional canonical URL. */
        canonicalUrl?: string | null;
        /** The article description. */
        description?: string;
        /** The article tags. */
        tags?: string | Array<string>;
        /**
         * The optional organization identifier.
         * @exclusiveMinimum 0
         */
        organizationId?: number | null;
      };
      output: {
        /** The record type. */
        type_of: string;
        /** The article identifier. */
        id: number;
        /** The article title. */
        title: string;
        /** The article description. */
        description: string;
        /** The cover image URL. */
        cover_image?: string | null;
        /** The human-readable publish date. */
        readable_publish_date: string;
        /** The social preview image URL. */
        social_image: string;
        /** The article tag list. */
        tag_list: string | Array<string>;
        /** The article tags. */
        tags: string | Array<string>;
        /** The article slug. */
        slug: string;
        /** The article path. */
        path: string;
        /** The article URL. */
        url: string;
        /** The canonical article URL. */
        canonical_url: string;
        /** The number of comments. */
        comments_count?: number;
        /** The number of positive reactions. */
        positive_reactions_count: number;
        /** The number of public reactions. */
        public_reactions_count: number;
        /** The optional collection identifier. */
        collection_id?: number | null;
        /** The article creation timestamp. */
        created_at: string;
        /** The article edit timestamp. */
        edited_at?: string | null;
        /** The article crosspost timestamp. */
        crossposted_at?: string | null;
        /** The article publish timestamp. */
        published_at: string;
        /** The last comment timestamp. */
        last_comment_at: string;
        /** The publish timestamp as a string. */
        published_timestamp: string;
        /** The estimated reading time in minutes. */
        reading_time_minutes: number;
        /** The author profile for the article. */
        user: {
          /** The author name. */
          name: string;
          /** The author username. */
          username: string;
          /** The author's Twitter username. */
          twitter_username?: string | null;
          /** The author's GitHub username. */
          github_username?: string | null;
          /** The author's website URL. */
          website_url?: string | null;
          /** The author profile image URL. */
          profile_image: string;
          /** The author profile image URL at 90px. */
          profile_image_90: string;
          [key: string]: unknown;
        };
        /** The optional flare tag attached to the article. */
        flare_tag?: {
          /** The flare tag name. */
          name: string;
          /** The flare tag background color in hex. */
          bg_color_hex?: string | null;
          /** The flare tag text color in hex. */
          text_color_hex?: string | null;
          [key: string]: unknown;
        };
        /** The optional organization associated with the article. */
        organization?: {
          /** The organization name. */
          name: string;
          /** The organization username. */
          username: string;
          /** The organization slug. */
          slug: string;
          /** The organization profile image URL. */
          profile_image: string;
          /** The organization profile image URL at 90px. */
          profile_image_90: string;
          [key: string]: unknown;
        };
        /** The rendered article body HTML. */
        body_html?: string;
        /** The markdown article body. */
        body_markdown?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Dev.to article by numeric id. */
    "devto.get_article": {
      input: {
        /** The article identifier. */
        articleId: number | string;
      };
      output: {
        /** The record type. */
        type_of: string;
        /** The article identifier. */
        id: number;
        /** The article title. */
        title: string;
        /** The article description. */
        description: string;
        /** The cover image URL. */
        cover_image?: string | null;
        /** The human-readable publish date. */
        readable_publish_date: string;
        /** The social preview image URL. */
        social_image: string;
        /** The article tag list. */
        tag_list: string | Array<string>;
        /** The article tags. */
        tags: string | Array<string>;
        /** The article slug. */
        slug: string;
        /** The article path. */
        path: string;
        /** The article URL. */
        url: string;
        /** The canonical article URL. */
        canonical_url: string;
        /** The number of comments. */
        comments_count?: number;
        /** The number of positive reactions. */
        positive_reactions_count: number;
        /** The number of public reactions. */
        public_reactions_count: number;
        /** The optional collection identifier. */
        collection_id?: number | null;
        /** The article creation timestamp. */
        created_at: string;
        /** The article edit timestamp. */
        edited_at?: string | null;
        /** The article crosspost timestamp. */
        crossposted_at?: string | null;
        /** The article publish timestamp. */
        published_at: string;
        /** The last comment timestamp. */
        last_comment_at: string;
        /** The publish timestamp as a string. */
        published_timestamp: string;
        /** The estimated reading time in minutes. */
        reading_time_minutes: number;
        /** The author profile for the article. */
        user: {
          /** The author name. */
          name: string;
          /** The author username. */
          username: string;
          /** The author's Twitter username. */
          twitter_username?: string | null;
          /** The author's GitHub username. */
          github_username?: string | null;
          /** The author's website URL. */
          website_url?: string | null;
          /** The author profile image URL. */
          profile_image: string;
          /** The author profile image URL at 90px. */
          profile_image_90: string;
          [key: string]: unknown;
        };
        /** The optional flare tag attached to the article. */
        flare_tag?: {
          /** The flare tag name. */
          name: string;
          /** The flare tag background color in hex. */
          bg_color_hex?: string | null;
          /** The flare tag text color in hex. */
          text_color_hex?: string | null;
          [key: string]: unknown;
        };
        /** The optional organization associated with the article. */
        organization?: {
          /** The organization name. */
          name: string;
          /** The organization username. */
          username: string;
          /** The organization slug. */
          slug: string;
          /** The organization profile image URL. */
          profile_image: string;
          /** The organization profile image URL at 90px. */
          profile_image_90: string;
          [key: string]: unknown;
        };
        /** The rendered article body HTML. */
        body_html?: string;
        /** The markdown article body. */
        body_markdown?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Dev.to article by username and slug. */
    "devto.get_article_by_path": {
      input: {
        /**
         * The article author username.
         * @minLength 1
         */
        username: string;
        /**
         * The article slug.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** The record type. */
        type_of: string;
        /** The article identifier. */
        id: number;
        /** The article title. */
        title: string;
        /** The article description. */
        description: string;
        /** The cover image URL. */
        cover_image?: string | null;
        /** The human-readable publish date. */
        readable_publish_date: string;
        /** The social preview image URL. */
        social_image: string;
        /** The article tag list. */
        tag_list: string | Array<string>;
        /** The article tags. */
        tags: string | Array<string>;
        /** The article slug. */
        slug: string;
        /** The article path. */
        path: string;
        /** The article URL. */
        url: string;
        /** The canonical article URL. */
        canonical_url: string;
        /** The number of comments. */
        comments_count?: number;
        /** The number of positive reactions. */
        positive_reactions_count: number;
        /** The number of public reactions. */
        public_reactions_count: number;
        /** The optional collection identifier. */
        collection_id?: number | null;
        /** The article creation timestamp. */
        created_at: string;
        /** The article edit timestamp. */
        edited_at?: string | null;
        /** The article crosspost timestamp. */
        crossposted_at?: string | null;
        /** The article publish timestamp. */
        published_at: string;
        /** The last comment timestamp. */
        last_comment_at: string;
        /** The publish timestamp as a string. */
        published_timestamp: string;
        /** The estimated reading time in minutes. */
        reading_time_minutes: number;
        /** The author profile for the article. */
        user: {
          /** The author name. */
          name: string;
          /** The author username. */
          username: string;
          /** The author's Twitter username. */
          twitter_username?: string | null;
          /** The author's GitHub username. */
          github_username?: string | null;
          /** The author's website URL. */
          website_url?: string | null;
          /** The author profile image URL. */
          profile_image: string;
          /** The author profile image URL at 90px. */
          profile_image_90: string;
          [key: string]: unknown;
        };
        /** The optional flare tag attached to the article. */
        flare_tag?: {
          /** The flare tag name. */
          name: string;
          /** The flare tag background color in hex. */
          bg_color_hex?: string | null;
          /** The flare tag text color in hex. */
          text_color_hex?: string | null;
          [key: string]: unknown;
        };
        /** The optional organization associated with the article. */
        organization?: {
          /** The organization name. */
          name: string;
          /** The organization username. */
          username: string;
          /** The organization slug. */
          slug: string;
          /** The organization profile image URL. */
          profile_image: string;
          /** The organization profile image URL at 90px. */
          profile_image_90: string;
          [key: string]: unknown;
        };
        /** The rendered article body HTML. */
        body_html?: string;
        /** The markdown article body. */
        body_markdown?: string;
        [key: string]: unknown;
      };
    };
    /** Get the current authenticated Dev.to user profile. */
    "devto.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The record type. */
        type_of: string;
        /** The user identifier. */
        id: number;
        /** The user username. */
        username: string;
        /** The user display name. */
        name: string;
        /** The user summary. */
        summary?: string | null;
        /** The user Twitter username. */
        twitter_username?: string;
        /** The user GitHub username. */
        github_username?: string;
        /** The user website URL. */
        website_url?: string | null;
        /** The user location. */
        location?: string | null;
        /** The user join timestamp. */
        joined_at: string;
        /** The user profile image URL. */
        profile_image: string;
        [key: string]: unknown;
      };
    };
    /** Get Dev.to organization profile. */
    "devto.get_organization": {
      input: {
        /**
         * The organization username.
         * @minLength 1
         */
        organizationUsername: string;
      };
      output: {
        /** The record type. */
        type_of: string;
        /** The organization identifier. */
        id?: number;
        /** The organization username. */
        username: string;
        /** The organization name. */
        name: string;
        /** The organization summary. */
        summary: string;
        /** The organization Twitter username. */
        twitter_username?: string;
        /** The organization GitHub username. */
        github_username?: string;
        /** The organization URL. */
        url?: string;
        /** The organization location. */
        location?: string | null;
        /** The organization join timestamp. */
        joined_at: string;
        /** The organization tech stack. */
        tech_stack?: string | null;
        /** The organization tag line. */
        tag_line?: string | null;
        /** The organization story. */
        story?: string | null;
        /** The organization profile image URL. */
        profile_image?: string;
        [key: string]: unknown;
      };
    };
    /** List published Dev.to articles with query filters. */
    "devto.list_articles": {
      input: {
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items per page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
        /** The tag filter. */
        tag?: string;
        /** The tag filter list. */
        tags?: string | Array<string>;
        /** The excluded tag filter list. */
        tagsExclude?: string | Array<string>;
        /** The username filter. */
        username?: string;
        /** The article listing state. */
        state?: "fresh" | "rising" | "all";
        /**
         * The top rank limit.
         * @exclusiveMinimum 0
         */
        top?: number;
        /**
         * The collection identifier filter.
         * @exclusiveMinimum 0
         */
        collectionId?: number;
      };
      output: Array<{
        /** The record type. */
        type_of: string;
        /** The article identifier. */
        id: number;
        /** The article title. */
        title: string;
        /** The article description. */
        description: string;
        /** The cover image URL. */
        cover_image?: string | null;
        /** The human-readable publish date. */
        readable_publish_date: string;
        /** The social preview image URL. */
        social_image: string;
        /** The article tag list. */
        tag_list: string | Array<string>;
        /** The article tags. */
        tags: string | Array<string>;
        /** The article slug. */
        slug: string;
        /** The article path. */
        path: string;
        /** The article URL. */
        url: string;
        /** The canonical article URL. */
        canonical_url: string;
        /** The number of comments. */
        comments_count?: number;
        /** The number of positive reactions. */
        positive_reactions_count: number;
        /** The number of public reactions. */
        public_reactions_count: number;
        /** The optional collection identifier. */
        collection_id?: number | null;
        /** The article creation timestamp. */
        created_at: string;
        /** The article edit timestamp. */
        edited_at?: string | null;
        /** The article crosspost timestamp. */
        crossposted_at?: string | null;
        /** The article publish timestamp. */
        published_at: string;
        /** The last comment timestamp. */
        last_comment_at: string;
        /** The publish timestamp as a string. */
        published_timestamp: string;
        /** The estimated reading time in minutes. */
        reading_time_minutes: number;
        /** The author profile for the article. */
        user: {
          /** The author name. */
          name: string;
          /** The author username. */
          username: string;
          /** The author's Twitter username. */
          twitter_username?: string | null;
          /** The author's GitHub username. */
          github_username?: string | null;
          /** The author's website URL. */
          website_url?: string | null;
          /** The author profile image URL. */
          profile_image: string;
          /** The author profile image URL at 90px. */
          profile_image_90: string;
          [key: string]: unknown;
        };
        /** The optional flare tag attached to the article. */
        flare_tag?: {
          /** The flare tag name. */
          name: string;
          /** The flare tag background color in hex. */
          bg_color_hex?: string | null;
          /** The flare tag text color in hex. */
          text_color_hex?: string | null;
          [key: string]: unknown;
        };
        /** The optional organization associated with the article. */
        organization?: {
          /** The organization name. */
          name: string;
          /** The organization username. */
          username: string;
          /** The organization slug. */
          slug: string;
          /** The organization profile image URL. */
          profile_image: string;
          /** The organization profile image URL at 90px. */
          profile_image_90: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      }>;
    };
    /** List latest Dev.to articles. */
    "devto.list_latest_articles": {
      input: {
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items per page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
      };
      output: Array<{
        /** The record type. */
        type_of: string;
        /** The article identifier. */
        id: number;
        /** The article title. */
        title: string;
        /** The article description. */
        description: string;
        /** The cover image URL. */
        cover_image?: string | null;
        /** The human-readable publish date. */
        readable_publish_date: string;
        /** The social preview image URL. */
        social_image: string;
        /** The article tag list. */
        tag_list: string | Array<string>;
        /** The article tags. */
        tags: string | Array<string>;
        /** The article slug. */
        slug: string;
        /** The article path. */
        path: string;
        /** The article URL. */
        url: string;
        /** The canonical article URL. */
        canonical_url: string;
        /** The number of comments. */
        comments_count?: number;
        /** The number of positive reactions. */
        positive_reactions_count: number;
        /** The number of public reactions. */
        public_reactions_count: number;
        /** The optional collection identifier. */
        collection_id?: number | null;
        /** The article creation timestamp. */
        created_at: string;
        /** The article edit timestamp. */
        edited_at?: string | null;
        /** The article crosspost timestamp. */
        crossposted_at?: string | null;
        /** The article publish timestamp. */
        published_at: string;
        /** The last comment timestamp. */
        last_comment_at: string;
        /** The publish timestamp as a string. */
        published_timestamp: string;
        /** The estimated reading time in minutes. */
        reading_time_minutes: number;
        /** The author profile for the article. */
        user: {
          /** The author name. */
          name: string;
          /** The author username. */
          username: string;
          /** The author's Twitter username. */
          twitter_username?: string | null;
          /** The author's GitHub username. */
          github_username?: string | null;
          /** The author's website URL. */
          website_url?: string | null;
          /** The author profile image URL. */
          profile_image: string;
          /** The author profile image URL at 90px. */
          profile_image_90: string;
          [key: string]: unknown;
        };
        /** The optional flare tag attached to the article. */
        flare_tag?: {
          /** The flare tag name. */
          name: string;
          /** The flare tag background color in hex. */
          bg_color_hex?: string | null;
          /** The flare tag text color in hex. */
          text_color_hex?: string | null;
          [key: string]: unknown;
        };
        /** The optional organization associated with the article. */
        organization?: {
          /** The organization name. */
          name: string;
          /** The organization username. */
          username: string;
          /** The organization slug. */
          slug: string;
          /** The organization profile image URL. */
          profile_image: string;
          /** The organization profile image URL at 90px. */
          profile_image_90: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      }>;
    };
    /** List current user's own Dev.to articles by status. */
    "devto.list_my_articles": {
      input: {
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items per page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
        /**
         * The article status filter.
         * @default "default"
         */
        status?: "default" | "published" | "unpublished" | "all";
      };
      output: Array<{
        /** The record type. */
        type_of: string;
        /** The article identifier. */
        id: number;
        /** The article title. */
        title: string;
        /** The article description. */
        description: string;
        /** The cover image URL. */
        cover_image?: string | null;
        /** The human-readable publish date. */
        readable_publish_date: string;
        /** The social preview image URL. */
        social_image: string;
        /** The article tag list. */
        tag_list: string | Array<string>;
        /** The article tags. */
        tags: string | Array<string>;
        /** The article slug. */
        slug: string;
        /** The article path. */
        path: string;
        /** The article URL. */
        url: string;
        /** The canonical article URL. */
        canonical_url: string;
        /** The number of comments. */
        comments_count?: number;
        /** The number of positive reactions. */
        positive_reactions_count: number;
        /** The number of public reactions. */
        public_reactions_count: number;
        /** The optional collection identifier. */
        collection_id?: number | null;
        /** The article creation timestamp. */
        created_at: string;
        /** The article edit timestamp. */
        edited_at?: string | null;
        /** The article crosspost timestamp. */
        crossposted_at?: string | null;
        /** The article publish timestamp. */
        published_at: string;
        /** The last comment timestamp. */
        last_comment_at: string;
        /** The publish timestamp as a string. */
        published_timestamp: string;
        /** The estimated reading time in minutes. */
        reading_time_minutes: number;
        /** The author profile for the article. */
        user: {
          /** The author name. */
          name: string;
          /** The author username. */
          username: string;
          /** The author's Twitter username. */
          twitter_username?: string | null;
          /** The author's GitHub username. */
          github_username?: string | null;
          /** The author's website URL. */
          website_url?: string | null;
          /** The author profile image URL. */
          profile_image: string;
          /** The author profile image URL at 90px. */
          profile_image_90: string;
          [key: string]: unknown;
        };
        /** The optional flare tag attached to the article. */
        flare_tag?: {
          /** The flare tag name. */
          name: string;
          /** The flare tag background color in hex. */
          bg_color_hex?: string | null;
          /** The flare tag text color in hex. */
          text_color_hex?: string | null;
          [key: string]: unknown;
        };
        /** The optional organization associated with the article. */
        organization?: {
          /** The organization name. */
          name: string;
          /** The organization username. */
          username: string;
          /** The organization slug. */
          slug: string;
          /** The organization profile image URL. */
          profile_image: string;
          /** The organization profile image URL at 90px. */
          profile_image_90: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      }>;
    };
    /** List articles under a Dev.to organization. */
    "devto.list_organization_articles": {
      input: {
        /**
         * The organization username.
         * @minLength 1
         */
        organizationUsername: string;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items per page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
      };
      output: Array<{
        /** The record type. */
        type_of: string;
        /** The article identifier. */
        id: number;
        /** The article title. */
        title: string;
        /** The article description. */
        description: string;
        /** The cover image URL. */
        cover_image?: string | null;
        /** The human-readable publish date. */
        readable_publish_date: string;
        /** The social preview image URL. */
        social_image: string;
        /** The article tag list. */
        tag_list: string | Array<string>;
        /** The article tags. */
        tags: string | Array<string>;
        /** The article slug. */
        slug: string;
        /** The article path. */
        path: string;
        /** The article URL. */
        url: string;
        /** The canonical article URL. */
        canonical_url: string;
        /** The number of comments. */
        comments_count?: number;
        /** The number of positive reactions. */
        positive_reactions_count: number;
        /** The number of public reactions. */
        public_reactions_count: number;
        /** The optional collection identifier. */
        collection_id?: number | null;
        /** The article creation timestamp. */
        created_at: string;
        /** The article edit timestamp. */
        edited_at?: string | null;
        /** The article crosspost timestamp. */
        crossposted_at?: string | null;
        /** The article publish timestamp. */
        published_at: string;
        /** The last comment timestamp. */
        last_comment_at: string;
        /** The publish timestamp as a string. */
        published_timestamp: string;
        /** The estimated reading time in minutes. */
        reading_time_minutes: number;
        /** The author profile for the article. */
        user: {
          /** The author name. */
          name: string;
          /** The author username. */
          username: string;
          /** The author's Twitter username. */
          twitter_username?: string | null;
          /** The author's GitHub username. */
          github_username?: string | null;
          /** The author's website URL. */
          website_url?: string | null;
          /** The author profile image URL. */
          profile_image: string;
          /** The author profile image URL at 90px. */
          profile_image_90: string;
          [key: string]: unknown;
        };
        /** The optional flare tag attached to the article. */
        flare_tag?: {
          /** The flare tag name. */
          name: string;
          /** The flare tag background color in hex. */
          bg_color_hex?: string | null;
          /** The flare tag text color in hex. */
          text_color_hex?: string | null;
          [key: string]: unknown;
        };
        /** The optional organization associated with the article. */
        organization?: {
          /** The organization name. */
          name: string;
          /** The organization username. */
          username: string;
          /** The organization slug. */
          slug: string;
          /** The organization profile image URL. */
          profile_image: string;
          /** The organization profile image URL at 90px. */
          profile_image_90: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      }>;
    };
    /** List Dev.to tags. */
    "devto.list_tags": {
      input: {
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items per page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
      };
      output: Array<{
        /** The tag identifier. */
        id: number;
        /** The tag name. */
        name: string;
        /** The tag background color in hex. */
        bg_color_hex?: string | null;
        /** The tag text color in hex. */
        text_color_hex?: string | null;
        [key: string]: unknown;
      }>;
    };
    /** List Dev.to videos. */
    "devto.list_videos": {
      input: {
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items per page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
      };
      output: Array<{
        /** The record type. */
        type_of: string;
        /** The video article identifier. */
        id: number;
        /** The article path. */
        path: string;
        /** The Cloudinary video URL. */
        cloudinary_video_url: string;
        /** The article title. */
        title: string;
        /** The user identifier. */
        user_id: number;
        /** The video duration in minutes. */
        video_duration_in_minutes: string;
        /** The video source URL. */
        video_source_url: string;
        /** The author profile for the video article. */
        user: {
          /** The author name. */
          name: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      }>;
    };
    /** Update an existing Dev.to article. */
    "devto.update_article": {
      input: {
        /** The article identifier. */
        articleId: number | string;
        /**
         * The article title.
         * @minLength 1
         */
        title: string;
        /**
         * The article body in markdown.
         * @minLength 1
         */
        bodyMarkdown: string;
        /** Whether the article is published. */
        published?: boolean;
        /** The optional article series. */
        series?: string | null;
        /** The optional main image URL. */
        mainImage?: string | null;
        /** The optional canonical URL. */
        canonicalUrl?: string | null;
        /** The article description. */
        description?: string;
        /** The article tags. */
        tags?: string | Array<string>;
        /**
         * The optional organization identifier.
         * @exclusiveMinimum 0
         */
        organizationId?: number | null;
      };
      output: {
        /** The record type. */
        type_of: string;
        /** The article identifier. */
        id: number;
        /** The article title. */
        title: string;
        /** The article description. */
        description: string;
        /** The cover image URL. */
        cover_image?: string | null;
        /** The human-readable publish date. */
        readable_publish_date: string;
        /** The social preview image URL. */
        social_image: string;
        /** The article tag list. */
        tag_list: string | Array<string>;
        /** The article tags. */
        tags: string | Array<string>;
        /** The article slug. */
        slug: string;
        /** The article path. */
        path: string;
        /** The article URL. */
        url: string;
        /** The canonical article URL. */
        canonical_url: string;
        /** The number of comments. */
        comments_count?: number;
        /** The number of positive reactions. */
        positive_reactions_count: number;
        /** The number of public reactions. */
        public_reactions_count: number;
        /** The optional collection identifier. */
        collection_id?: number | null;
        /** The article creation timestamp. */
        created_at: string;
        /** The article edit timestamp. */
        edited_at?: string | null;
        /** The article crosspost timestamp. */
        crossposted_at?: string | null;
        /** The article publish timestamp. */
        published_at: string;
        /** The last comment timestamp. */
        last_comment_at: string;
        /** The publish timestamp as a string. */
        published_timestamp: string;
        /** The estimated reading time in minutes. */
        reading_time_minutes: number;
        /** The author profile for the article. */
        user: {
          /** The author name. */
          name: string;
          /** The author username. */
          username: string;
          /** The author's Twitter username. */
          twitter_username?: string | null;
          /** The author's GitHub username. */
          github_username?: string | null;
          /** The author's website URL. */
          website_url?: string | null;
          /** The author profile image URL. */
          profile_image: string;
          /** The author profile image URL at 90px. */
          profile_image_90: string;
          [key: string]: unknown;
        };
        /** The optional flare tag attached to the article. */
        flare_tag?: {
          /** The flare tag name. */
          name: string;
          /** The flare tag background color in hex. */
          bg_color_hex?: string | null;
          /** The flare tag text color in hex. */
          text_color_hex?: string | null;
          [key: string]: unknown;
        };
        /** The optional organization associated with the article. */
        organization?: {
          /** The organization name. */
          name: string;
          /** The organization username. */
          username: string;
          /** The organization slug. */
          slug: string;
          /** The organization profile image URL. */
          profile_image: string;
          /** The organization profile image URL at 90px. */
          profile_image_90: string;
          [key: string]: unknown;
        };
        /** The rendered article body HTML. */
        body_html?: string;
        /** The markdown article body. */
        body_markdown?: string;
        [key: string]: unknown;
      };
    };
  }
}
