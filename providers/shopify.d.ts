import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Count Shopify REST articles in a blog with optional filters. */
    "shopify.count_articles": {
      input: {
        /**
         * The Shopify blog ID.
         * @minimum 1
         */
        blog_id: number;
        /** The Shopify publication status filter. */
        published_status?: "published" | "unpublished" | "any";
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        created_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        created_at_max?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        updated_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        updated_at_max?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        published_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        published_at_max?: string;
      };
      output: {
        /**
         * The count returned by Shopify REST Admin.
         * @minimum 0
         */
        count: number;
      };
    };
    /** Count Shopify REST blogs in the connected shop. */
    "shopify.count_blogs": {
      input: Record<string, never>;
      output: {
        /**
         * The count returned by Shopify REST Admin.
         * @minimum 0
         */
        count: number;
      };
    };
    /** Count Shopify REST pages with optional filters. */
    "shopify.count_pages": {
      input: {
        /**
         * Count pages with this exact Shopify page title.
         * @minLength 1
         */
        title?: string;
        /**
         * Count pages with this Shopify page handle.
         * @minLength 1
         */
        handle?: string;
        /** The Shopify publication status filter. */
        published_status?: "published" | "unpublished" | "any";
        /**
         * Return records with Shopify numeric IDs greater than this value.
         * @minimum 1
         */
        since_id?: number;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        created_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        created_at_max?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        updated_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        updated_at_max?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        published_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        published_at_max?: string;
      };
      output: {
        /**
         * The count returned by Shopify REST Admin.
         * @minimum 0
         */
        count: number;
      };
    };
    /** Retrieve one Shopify REST article by blog ID and article ID. */
    "shopify.get_article": {
      input: {
        /**
         * The Shopify blog ID.
         * @minimum 1
         */
        blog_id: number;
        /**
         * The Shopify article ID.
         * @minimum 1
         */
        article_id: number;
      };
      output: {
        /** A Shopify REST article object. */
        article: {
          /**
           * The Shopify article ID.
           * @minimum 1
           */
          id: number;
          /**
           * The Shopify blog ID that owns the article.
           * @minimum 1
           */
          blog_id: number;
          /** The article title. */
          title: string;
          /** The article handle. */
          handle: string;
          /** The article body HTML returned by Shopify. */
          body_html: string | null;
          /** The article summary HTML returned by Shopify. */
          summary_html: string | null;
          /** The article author returned by Shopify. */
          author: string | null;
          /** The comma-separated article tags returned by Shopify. */
          tags: string | null;
          /** The article publication timestamp, or null when hidden. */
          published_at: string | null;
          /** The Liquid template suffix used by the article. */
          template_suffix: string | null;
          /** The article creation timestamp returned by Shopify. */
          created_at: string | null;
          /** The article update timestamp returned by Shopify. */
          updated_at: string | null;
          /** The article image object returned by Shopify. */
          image?: Record<string, unknown> | null;
          /** The Shopify Admin GraphQL ID for the article. */
          admin_graphql_api_id: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Shopify REST blog by numeric ID. */
    "shopify.get_blog": {
      input: {
        /**
         * The Shopify blog ID.
         * @minimum 1
         */
        blog_id: number;
      };
      output: {
        /** A Shopify REST blog object. */
        blog: {
          /**
           * The Shopify blog ID.
           * @minimum 1
           */
          id: number;
          /** The blog title. */
          title: string;
          /** The blog handle. */
          handle: string;
          /** The blog comment policy returned by Shopify. */
          commentable: string | null;
          /** The comma-separated tags from the 200 most recent articles. */
          tags: string | null;
          /** The Liquid template suffix used by the blog. */
          template_suffix: string | null;
          /** The FeedBurner identifier when configured. */
          feedburner: string | null;
          /** The FeedBurner URL when configured. */
          feedburner_location: string | null;
          /** The blog creation timestamp returned by Shopify. */
          created_at: string | null;
          /** The blog update timestamp returned by Shopify. */
          updated_at: string | null;
          /** The Shopify Admin GraphQL ID for the blog. */
          admin_graphql_api_id: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Shopify REST page by numeric ID. */
    "shopify.get_page": {
      input: {
        /**
         * The Shopify page ID.
         * @minimum 1
         */
        page_id: number;
      };
      output: {
        /** A Shopify REST page object. */
        page: {
          /**
           * The Shopify page ID.
           * @minimum 1
           */
          id: number;
          /** The page title. */
          title: string;
          /** The page handle. */
          handle: string;
          /** The page body HTML returned by Shopify. */
          body_html: string | null;
          /** The page author returned by Shopify. */
          author: string | null;
          /** The page publication timestamp, or null when hidden. */
          published_at: string | null;
          /** The Liquid template suffix used by the page. */
          template_suffix: string | null;
          /** The page creation timestamp returned by Shopify. */
          created_at: string | null;
          /** The page update timestamp returned by Shopify. */
          updated_at: string | null;
          /** The Shopify Admin GraphQL ID for the page. */
          admin_graphql_api_id: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the connected Shopify REST Admin shop configuration. */
    "shopify.get_shop": {
      input: Record<string, never>;
      output: {
        /** A Shopify REST shop object. */
        shop: {
          /**
           * The Shopify shop ID.
           * @minimum 1
           */
          id: number;
          /** The shop display name. */
          name: string;
          /** The canonical myshopify.com domain for the shop. */
          myshopify_domain: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Shopify REST article tags across all articles in the connected shop. */
    "shopify.list_article_tags": {
      input: {
        /**
         * The maximum number of records to return. Shopify REST supports values from 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /** Whether Shopify should order tags by popularity. */
        popular?: boolean;
      };
      output: {
        /** Article tags returned by Shopify. */
        tags: Array<string>;
      };
    };
    /** List Shopify REST articles in a blog with optional filters and pagination. */
    "shopify.list_articles": {
      input: {
        /**
         * The Shopify blog ID.
         * @minimum 1
         */
        blog_id: number;
        /**
         * Filter articles by author.
         * @minLength 1
         */
        author?: string;
        /**
         * Retrieve an article with this Shopify article handle.
         * @minLength 1
         */
        handle?: string;
        /**
         * Filter articles by tag.
         * @minLength 1
         */
        tag?: string;
        /** The Shopify publication status filter. */
        published_status?: "published" | "unpublished" | "any";
        /**
         * Return records with Shopify numeric IDs greater than this value.
         * @minimum 1
         */
        since_id?: number;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        created_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        created_at_max?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        updated_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        updated_at_max?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        published_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        published_at_max?: string;
        /**
         * The maximum number of records to return. Shopify REST supports values from 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The opaque Shopify REST page_info cursor from a previous response pagination value.
         * @minLength 1
         */
        page_info?: string;
      };
      output: {
        /** Articles returned by Shopify. */
        articles: Array<{
          /**
           * The Shopify article ID.
           * @minimum 1
           */
          id: number;
          /**
           * The Shopify blog ID that owns the article.
           * @minimum 1
           */
          blog_id: number;
          /** The article title. */
          title: string;
          /** The article handle. */
          handle: string;
          /** The article body HTML returned by Shopify. */
          body_html: string | null;
          /** The article summary HTML returned by Shopify. */
          summary_html: string | null;
          /** The article author returned by Shopify. */
          author: string | null;
          /** The comma-separated article tags returned by Shopify. */
          tags: string | null;
          /** The article publication timestamp, or null when hidden. */
          published_at: string | null;
          /** The Liquid template suffix used by the article. */
          template_suffix: string | null;
          /** The article creation timestamp returned by Shopify. */
          created_at: string | null;
          /** The article update timestamp returned by Shopify. */
          updated_at: string | null;
          /** The article image object returned by Shopify. */
          image?: Record<string, unknown> | null;
          /** The Shopify Admin GraphQL ID for the article. */
          admin_graphql_api_id: string | null;
          [key: string]: unknown;
        }>;
        /** Shopify REST Link-header pagination cursors. */
        pagination: {
          /** The page_info cursor for the next page when Shopify returned one. */
          nextPageInfo: string | null;
          /** The page_info cursor for the previous page when Shopify returned one. */
          previousPageInfo: string | null;
        };
        /** The raw object returned by Shopify REST Admin. */
        raw: Record<string, unknown>;
      };
    };
    /** List Shopify REST blogs with optional handle filtering and pagination. */
    "shopify.list_blogs": {
      input: {
        /**
         * Filter blogs by Shopify blog handle.
         * @minLength 1
         */
        handle?: string;
        /**
         * Return records with Shopify numeric IDs greater than this value.
         * @minimum 1
         */
        since_id?: number;
        /**
         * The maximum number of records to return. Shopify REST supports values from 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The opaque Shopify REST page_info cursor from a previous response pagination value.
         * @minLength 1
         */
        page_info?: string;
      };
      output: {
        /** Blogs returned by Shopify. */
        blogs: Array<{
          /**
           * The Shopify blog ID.
           * @minimum 1
           */
          id: number;
          /** The blog title. */
          title: string;
          /** The blog handle. */
          handle: string;
          /** The blog comment policy returned by Shopify. */
          commentable: string | null;
          /** The comma-separated tags from the 200 most recent articles. */
          tags: string | null;
          /** The Liquid template suffix used by the blog. */
          template_suffix: string | null;
          /** The FeedBurner identifier when configured. */
          feedburner: string | null;
          /** The FeedBurner URL when configured. */
          feedburner_location: string | null;
          /** The blog creation timestamp returned by Shopify. */
          created_at: string | null;
          /** The blog update timestamp returned by Shopify. */
          updated_at: string | null;
          /** The Shopify Admin GraphQL ID for the blog. */
          admin_graphql_api_id: string | null;
          [key: string]: unknown;
        }>;
        /** Shopify REST Link-header pagination cursors. */
        pagination: {
          /** The page_info cursor for the next page when Shopify returned one. */
          nextPageInfo: string | null;
          /** The page_info cursor for the previous page when Shopify returned one. */
          previousPageInfo: string | null;
        };
        /** The raw object returned by Shopify REST Admin. */
        raw: Record<string, unknown>;
      };
    };
    /** List Shopify REST pages with optional filters and pagination. */
    "shopify.list_pages": {
      input: {
        /**
         * Retrieve pages with this exact Shopify page title.
         * @minLength 1
         */
        title?: string;
        /**
         * Retrieve pages with this Shopify page handle.
         * @minLength 1
         */
        handle?: string;
        /** The Shopify publication status filter. */
        published_status?: "published" | "unpublished" | "any";
        /**
         * Return records with Shopify numeric IDs greater than this value.
         * @minimum 1
         */
        since_id?: number;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        created_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        created_at_max?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        updated_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        updated_at_max?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        published_at_min?: string;
        /**
         * An ISO 8601 date-time filter accepted by Shopify REST Admin.
         * @minLength 1
         */
        published_at_max?: string;
        /**
         * The maximum number of records to return. Shopify REST supports values from 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The opaque Shopify REST page_info cursor from a previous response pagination value.
         * @minLength 1
         */
        page_info?: string;
      };
      output: {
        /** Pages returned by Shopify. */
        pages: Array<{
          /**
           * The Shopify page ID.
           * @minimum 1
           */
          id: number;
          /** The page title. */
          title: string;
          /** The page handle. */
          handle: string;
          /** The page body HTML returned by Shopify. */
          body_html: string | null;
          /** The page author returned by Shopify. */
          author: string | null;
          /** The page publication timestamp, or null when hidden. */
          published_at: string | null;
          /** The Liquid template suffix used by the page. */
          template_suffix: string | null;
          /** The page creation timestamp returned by Shopify. */
          created_at: string | null;
          /** The page update timestamp returned by Shopify. */
          updated_at: string | null;
          /** The Shopify Admin GraphQL ID for the page. */
          admin_graphql_api_id: string | null;
          [key: string]: unknown;
        }>;
        /** Shopify REST Link-header pagination cursors. */
        pagination: {
          /** The page_info cursor for the next page when Shopify returned one. */
          nextPageInfo: string | null;
          /** The page_info cursor for the previous page when Shopify returned one. */
          previousPageInfo: string | null;
        };
        /** The raw object returned by Shopify REST Admin. */
        raw: Record<string, unknown>;
      };
    };
  }
}
