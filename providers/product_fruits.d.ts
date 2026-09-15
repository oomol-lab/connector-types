import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get localized Product Fruits knowledge-base article content as Markdown or HTML. */
    "product_fruits.get_knowledge_base_article_content": {
      input: {
        /**
         * Custom article correlation ID or internal ID prefixed with pf_.
         * @minLength 1
         */
        correlationId: string;
        /**
         * Language code for the requested article content.
         * @minLength 1
         */
        lang: string;
        /** Requested article content format. */
        format?: "markdown" | "html";
      };
      output: {
        /** Internal Product Fruits article ID. */
        articleId?: number;
        /** Article correlation ID when assigned. */
        articleCorrelationId?: string | null;
        /** Internal content entry ID. */
        contentId?: number;
        /** Content entry correlation ID when assigned. */
        contentCorrelationId?: string | null;
        /** Language code of the returned content. */
        lang?: string;
        /** Localized article title. */
        title?: string;
        /** Localized article URL slug. */
        slug?: string;
        /** Article keywords. */
        keywords?: string;
        /** Article lead or short description. */
        lead?: string;
        /** Whether the article content is published. */
        published?: boolean;
        /** ISO 8601 timestamp of the latest modification. */
        lastModified?: string;
        /** Format of the returned content. */
        format?: "markdown" | "html";
        /** Article content in the requested format. */
        content?: string;
        /** Conversion notes for Markdown rendering. */
        conversionResults?: Array<{
          /** Conversion result type, such as dropped or simplified. */
          type?: string;
          /** HTML element affected by the conversion. */
          element?: string;
          /** Number of affected elements. */
          count?: number;
          /** Human-readable conversion detail. */
          message?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get a Product Fruits knowledge-base category by correlation ID. */
    "product_fruits.get_knowledge_base_category": {
      input: {
        /**
         * Custom category correlation ID or internal ID prefixed with pf_.
         * @minLength 1
         */
        correlationId: string;
      };
      output: {
        /** Internal Product Fruits category ID. */
        id?: number;
        /** External correlation ID when assigned. */
        correlationId?: string | null;
        /** Parent category ID, or null for a root category. */
        parentCategoryId?: number | null;
        /** Display order within the parent category. */
        order?: number;
        /** Whether the category is featured. */
        isFeatured?: boolean;
        /** Category icon identifier when assigned. */
        icon?: string | null;
        /** Localized category content entries. */
        contents?: Array<{
          /** ISO 639-1 language code. */
          lang?: string;
          /** Localized category title. */
          title?: string;
          /** Localized category description. */
          description?: string;
          /** Localized category URL slug. */
          slug?: string;
          /** Slug generation mode returned by Product Fruits. */
          slug_state?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Product Fruits knowledge-base articles, optionally filtered by category. */
    "product_fruits.list_knowledge_base_articles": {
      input: {
        /**
         * Category correlation ID; use null to list only uncategorized root articles.
         * @minLength 1
         */
        correlationCategoryId?: string | null;
      };
      output: {
        /** Knowledge-base article summaries. */
        articles: Array<{
          /** Internal Product Fruits article ID. */
          id?: string;
          /** External article correlation ID when assigned. */
          correlationId?: string | null;
          /** ISO 8601 timestamp of the latest modification. */
          lastModified?: string;
          /** Category ID, or null for an uncategorized article. */
          categoryId?: number | null;
          /** Whether the article is private. */
          isPrivate?: boolean;
          /** Whether the article is hidden from navigation. */
          isHidden?: boolean;
          /** Whether the article is featured. */
          isFeatured?: boolean;
          /** Featured display order when assigned. */
          featuredOrder?: number | null;
          /** Display order within the category. */
          order?: number;
          /** Article format version. */
          version?: string;
          /** JSON string containing alternate slugs by language. */
          alternateSlugs?: string | null;
          /** Localized content summaries for the article. */
          contents?: Array<{
            /** Internal content entry ID. */
            id?: string;
            /** External content correlation ID when assigned. */
            correlationId?: string | null;
            /** ISO 639-1 language code. */
            lang?: string;
            /** Whether this content entry is published. */
            published?: boolean;
            /** ISO 8601 timestamp of the latest modification. */
            lastModified?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List all Product Fruits knowledge-base categories and localized content. */
    "product_fruits.list_knowledge_base_categories": {
      input: Record<string, never>;
      output: {
        /** Knowledge-base categories. */
        categories: Array<{
          /** Internal Product Fruits category ID. */
          id?: number;
          /** External correlation ID when assigned. */
          correlationId?: string | null;
          /** Parent category ID, or null for a root category. */
          parentCategoryId?: number | null;
          /** Display order within the parent category. */
          order?: number;
          /** Whether the category is featured. */
          isFeatured?: boolean;
          /** Category icon identifier when assigned. */
          icon?: string | null;
          /** Localized category content entries. */
          contents?: Array<{
            /** ISO 639-1 language code. */
            lang?: string;
            /** Localized category title. */
            title?: string;
            /** Localized category description. */
            description?: string;
            /** Localized category URL slug. */
            slug?: string;
            /** Slug generation mode returned by Product Fruits. */
            slug_state?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
