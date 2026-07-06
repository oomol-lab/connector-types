import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Elevio knowledge base article by ID. */
    "elevio.get_article": {
      input: {
        /**
         * The Elevio numeric resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** An Elevio article resource. */
        article: {
          /** The Elevio article ID. */
          id?: number;
          /** The article title derived from the default translation. */
          title?: string;
          /** Sort order for displaying the article. */
          order?: number;
          /** An Elevio user reference. */
          creator?: {
            /** The Elevio user ID. */
            id?: number;
            /** The user display name. */
            name?: string;
            /** The user Gravatar URL. */
            gravatar?: string;
            /**
             * The user email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** An Elevio user reference. */
          author?: {
            /** The Elevio user ID. */
            id?: number;
            /** The user display name. */
            name?: string;
            /** The user Gravatar URL. */
            gravatar?: string;
            /**
             * The user email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** The source that created the article. */
          source?: string;
          /** The article identifier in the source system. */
          external_id?: string | null;
          /** The Elevio editor version used for the article. */
          editor_version?: string;
          /** Internal notes for contributors. */
          notes?: string;
          /** Global article keywords. */
          keywords?: Array<string>;
          /** The category ID that contains the article. */
          category_id?: number;
          /** Deprecated Elevio access level for the article. */
          access?: string;
          /** Direct access restriction for the article. */
          restriction?: string;
          /** Whether the article is searchable and listable. */
          discoverable?: boolean;
          /** Whether the article is internal only. */
          is_internal?: boolean;
          /** Deprecated email allow-list values returned by Elevio. */
          access_emails?: Array<string>;
          /** Deprecated domain allow-list values returned by Elevio. */
          access_domains?: Array<string>;
          /** Deprecated group allow-list values returned by Elevio. */
          access_groups?: Array<string>;
          /** Smart groups attached to the article. */
          smart_groups?: Array<{
            /** The smart group ID. */
            id?: number;
            /** The smart group name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The article publication status. */
          status?: string;
          /** An Elevio user reference. */
          last_publisher?: {
            /** The Elevio user ID. */
            id?: number;
            /** The user display name. */
            name?: string;
            /** The user Gravatar URL. */
            gravatar?: string;
            /**
             * The user email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Timestamp when the article was last published. */
          last_published_at?: string;
          /** Users who contributed to the article. */
          contributors?: Array<{
            /** The Elevio user ID. */
            id?: number;
            /** The user display name. */
            name?: string;
            /** The user Gravatar URL. */
            gravatar?: string;
            /**
             * The user email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          /** Timestamp when the article was created. */
          created_at?: string;
          /** Timestamp when the article was last updated. */
          updated_at?: string;
          /** Tags associated with the article. */
          tags?: Array<string>;
          /** Translations available for the article. */
          translations?: Array<{
            /** The translation ID. */
            id?: number;
            /** The translated article title. */
            title?: string;
            /** The translated article body. */
            body?: string;
            /** The translated article summary. */
            summary?: string;
            /** Deprecated machine-generated article summary. */
            machine_summary?: string;
            /** The translation language code. */
            language_id?: string;
            /** Language-specific translation keywords. */
            keywords?: Array<string>;
            /** Language-specific translation tags. */
            tags?: Array<string>;
            /** Timestamp when the translation was created. */
            created_at?: string;
            /** Timestamp when the translation was last updated. */
            updated_at?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Elevio knowledge base category by ID. */
    "elevio.get_category": {
      input: {
        /**
         * The Elevio numeric resource ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** An Elevio category resource. */
        category: {
          /** The Elevio category ID. */
          id?: number;
          /** The parent category ID. */
          parent_category_id?: number | null;
          /** The source that created the category. */
          source?: string;
          /** The category identifier in the source system. */
          external_id?: string | null;
          /** Sort order for displaying the category. */
          order?: number;
          /** Deprecated Elevio access level for the category. */
          access?: string;
          /** Direct access restriction for the category. */
          restriction?: string;
          /** Whether articles in the category are searchable and listable. */
          discoverable?: boolean;
          /** Whether the category is internal only. */
          is_internal?: boolean;
          /** Deprecated email allow-list values returned by Elevio. */
          access_emails?: Array<string>;
          /** Deprecated domain allow-list values returned by Elevio. */
          access_domains?: Array<string>;
          /** Deprecated group allow-list values returned by Elevio. */
          access_groups?: Array<string>;
          /** Smart groups attached to the category. */
          smart_groups?: Array<{
            /** The smart group ID. */
            id?: number;
            /** The smart group name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Translations available for the category. */
          translations?: Array<{
            /** The translation ID. */
            id?: number;
            /** The translation language code. */
            language_id?: string;
            /** The translated category title. */
            title?: string;
            [key: string]: unknown;
          }>;
          /** Timestamp when the category was created. */
          created_at?: string;
          /** Timestamp when the category was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Elevio knowledge base articles with optional pagination and filters. */
    "elevio.list_articles": {
      input: {
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of articles per page. Elevio allows up to 500.
         * @maximum 500
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Filter articles by publication status. */
        status?: "draft" | "published";
        /**
         * Epoch millisecond timestamp used by Elevio filters.
         * @minimum 0
         */
        fromCreatedAt?: number;
        /**
         * Epoch millisecond timestamp used by Elevio filters.
         * @minimum 0
         */
        toCreatedAt?: number;
        /**
         * Epoch millisecond timestamp used by Elevio filters.
         * @minimum 0
         */
        fromPublishedAt?: number;
        /**
         * Epoch millisecond timestamp used by Elevio filters.
         * @minimum 0
         */
        toPublishedAt?: number;
        /** Article tags to filter by. Elevio receives each value as a repeated tag[] query parameter. */
        tags?: Array<string>;
      };
      output: {
        /** Articles returned by Elevio. */
        articles: Array<{
          /** The Elevio article ID. */
          id?: number;
          /** The article title derived from the default translation. */
          title?: string;
          /** Sort order for displaying the article. */
          order?: number;
          /** An Elevio user reference. */
          creator?: {
            /** The Elevio user ID. */
            id?: number;
            /** The user display name. */
            name?: string;
            /** The user Gravatar URL. */
            gravatar?: string;
            /**
             * The user email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** An Elevio user reference. */
          author?: {
            /** The Elevio user ID. */
            id?: number;
            /** The user display name. */
            name?: string;
            /** The user Gravatar URL. */
            gravatar?: string;
            /**
             * The user email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** The source that created the article. */
          source?: string;
          /** The article identifier in the source system. */
          external_id?: string | null;
          /** The Elevio editor version used for the article. */
          editor_version?: string;
          /** Internal notes for contributors. */
          notes?: string;
          /** Global article keywords. */
          keywords?: Array<string>;
          /** The category ID that contains the article. */
          category_id?: number;
          /** Deprecated Elevio access level for the article. */
          access?: string;
          /** Direct access restriction for the article. */
          restriction?: string;
          /** Whether the article is searchable and listable. */
          discoverable?: boolean;
          /** Whether the article is internal only. */
          is_internal?: boolean;
          /** Deprecated email allow-list values returned by Elevio. */
          access_emails?: Array<string>;
          /** Deprecated domain allow-list values returned by Elevio. */
          access_domains?: Array<string>;
          /** Deprecated group allow-list values returned by Elevio. */
          access_groups?: Array<string>;
          /** Smart groups attached to the article. */
          smart_groups?: Array<{
            /** The smart group ID. */
            id?: number;
            /** The smart group name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The article publication status. */
          status?: string;
          /** An Elevio user reference. */
          last_publisher?: {
            /** The Elevio user ID. */
            id?: number;
            /** The user display name. */
            name?: string;
            /** The user Gravatar URL. */
            gravatar?: string;
            /**
             * The user email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Timestamp when the article was last published. */
          last_published_at?: string;
          /** Users who contributed to the article. */
          contributors?: Array<{
            /** The Elevio user ID. */
            id?: number;
            /** The user display name. */
            name?: string;
            /** The user Gravatar URL. */
            gravatar?: string;
            /**
             * The user email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          /** Timestamp when the article was created. */
          created_at?: string;
          /** Timestamp when the article was last updated. */
          updated_at?: string;
          /** Tags associated with the article. */
          tags?: Array<string>;
          /** Translations available for the article. */
          translations?: Array<{
            /** The translation ID. */
            id?: number;
            /** The translated article title. */
            title?: string;
            /** The translated article body. */
            body?: string;
            /** The translated article summary. */
            summary?: string;
            /** Deprecated machine-generated article summary. */
            machine_summary?: string;
            /** The translation language code. */
            language_id?: string;
            /** Language-specific translation keywords. */
            keywords?: Array<string>;
            /** Language-specific translation tags. */
            tags?: Array<string>;
            /** Timestamp when the translation was created. */
            created_at?: string;
            /** Timestamp when the translation was last updated. */
            updated_at?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Current Elevio page number. */
        page_number?: number;
        /** Current Elevio page size. */
        page_size?: number;
        /** Total number of result pages. */
        total_pages?: number;
        /** Total number of matching articles. */
        total_entries?: number;
      };
    };
    /** List Elevio knowledge base categories. */
    "elevio.list_categories": {
      input: Record<string, never>;
      output: {
        /** Categories returned by Elevio. */
        categories: Array<{
          /** The Elevio category ID. */
          id?: number;
          /** The parent category ID. */
          parent_category_id?: number | null;
          /** The source that created the category. */
          source?: string;
          /** The category identifier in the source system. */
          external_id?: string | null;
          /** Sort order for displaying the category. */
          order?: number;
          /** Deprecated Elevio access level for the category. */
          access?: string;
          /** Direct access restriction for the category. */
          restriction?: string;
          /** Whether articles in the category are searchable and listable. */
          discoverable?: boolean;
          /** Whether the category is internal only. */
          is_internal?: boolean;
          /** Deprecated email allow-list values returned by Elevio. */
          access_emails?: Array<string>;
          /** Deprecated domain allow-list values returned by Elevio. */
          access_domains?: Array<string>;
          /** Deprecated group allow-list values returned by Elevio. */
          access_groups?: Array<string>;
          /** Smart groups attached to the category. */
          smart_groups?: Array<{
            /** The smart group ID. */
            id?: number;
            /** The smart group name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Translations available for the category. */
          translations?: Array<{
            /** The translation ID. */
            id?: number;
            /** The translation language code. */
            language_id?: string;
            /** The translated category title. */
            title?: string;
            [key: string]: unknown;
          }>;
          /** Timestamp when the category was created. */
          created_at?: string;
          /** Timestamp when the category was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Elevio articles in a language with optional access filters. */
    "elevio.search_articles": {
      input: {
        /**
         * The Elevio language code to search, such as en.
         * @minLength 1
         */
        languageCode: string;
        /**
         * Search keywords to look for in article content.
         * @minLength 1
         */
        query: string;
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of search rows to return. Elevio allows up to 100.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        rows?: number;
        /** Article tags to filter by. Elevio receives each value as a repeated tag[] query parameter. */
        tags?: Array<string>;
        /**
         * Optional user email used for Elevio access filtering.
         * @format email
         */
        userEmail?: string;
        /** Optional user groups used for Elevio access filtering. */
        groups?: Array<string>;
        /**
         * Optional user hash used for Elevio access filtering.
         * @minLength 1
         */
        hash?: string;
        /**
         * Optional originating domain or page URL used for Elevio access filtering.
         * @minLength 1
         */
        url?: string;
      };
      output: {
        /** The query term Elevio searched for. */
        queryTerm: string;
        /** Total number of matching search results. */
        totalResults: number;
        /** Total number of result pages. */
        totalPages: number;
        /** Current result page. */
        currentPage: number;
        /** Number of results in this response. */
        count: number;
        /** Article search results returned by Elevio. */
        results: Array<{
          /** The matching article ID returned by Elevio. */
          id?: string | number;
          /** The highlighted article title returned by Elevio. */
          title?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
