import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read Tradebee blog groups in an enabled language, optionally selecting one group. Follow pagination.next_page to continue. */
    "tradebee.list_blog_groups": {
      input: {
        /**
         * An enabled site language code returned by list_languages.
         * @minLength 1
         * @pattern \S
         */
        language: string;
        /** Read one blog group; omit to list all blog groups. */
        bloggroup_id?: number;
        /** Return only these fields; omit to use the provider defaults. */
        fields?: Array<"bloggroup_id" | "language" | "tags" | "seo" | "create_time" | "update_time" | "group_name" | "brief_description" | "bloggroup_url">;
        /** Pagination; omitted values default to page 1 and 5 items. */
        pagination?: {
          /**
           * Page number, starting at 1.
           * @minimum 1
           */
          current_page?: number;
          /**
           * Items per page, from 1 to 10.
           * @minimum 1
           * @maximum 10
           */
          page_size?: number;
        };
      };
      output: {
        /** Blog groups on this page. */
        list: Array<{
          /** The resource ID, returned as an integer or string by Tradebee. */
          bloggroup_id?: number | string;
          /** The site language code. */
          language?: string;
          /** Resource keywords. */
          tags?: Array<string>;
          /** Search engine metadata. */
          seo?: {
            /** The SEO title. */
            title?: string;
            /** The SEO description. */
            description?: string;
            /** Comma-separated SEO keywords. */
            keywords?: string;
            [key: string]: unknown;
          };
          /** The creation time as returned by Tradebee. */
          create_time?: string;
          /** The last update time as returned by Tradebee. */
          update_time?: string;
          /** The group name. */
          group_name?: string;
          /** A short blog group description. */
          brief_description?: string;
          /** The blog group page URL. */
          bloggroup_url?: string;
          [key: string]: unknown;
        }>;
        /** Pagination returned by Tradebee; use next_page while has_next_page is true. */
        pagination: {
          /** The current page number. */
          current_page?: number;
          /** The returned page size. */
          page_size?: number;
          /** The total number of pages. */
          total_page?: number;
          /** The total number of matching records. */
          total_count?: number;
          /** Whether another page is available. */
          has_next_page?: boolean;
          /** The next page number, or null on the last page. */
          next_page?: number | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read Tradebee blogs in an enabled language, optionally by blog or group. Filters are mutually exclusive. Follow pagination.next_page to continue. */
    "tradebee.list_blogs": {
      input: {
        /**
         * An enabled site language code returned by list_languages.
         * @minLength 1
         * @pattern \S
         */
        language: string;
        /** Filter by blog ID; cannot be combined with bloggroup_id. */
        blog_id?: number;
        /** Filter by blog group ID; cannot be combined with blog_id. */
        bloggroup_id?: number;
        /** Return only these fields; omit to use the provider defaults. */
        fields?: Array<"blog_id" | "language" | "tags" | "seo" | "create_time" | "update_time" | "group" | "publisher" | "publication_date" | "title" | "images" | "summary" | "description" | "blog_url">;
        /** Pagination; omitted values default to page 1 and 5 items. */
        pagination?: {
          /**
           * Page number, starting at 1.
           * @minimum 1
           */
          current_page?: number;
          /**
           * Items per page, from 1 to 10.
           * @minimum 1
           * @maximum 10
           */
          page_size?: number;
        };
      };
      output: {
        /** Blogs on this page. */
        list: Array<{
          /** The resource ID, returned as an integer or string by Tradebee. */
          blog_id?: number | string;
          /** The site language code. */
          language?: string;
          /** Resource keywords. */
          tags?: Array<string>;
          /** Search engine metadata. */
          seo?: {
            /** The SEO title. */
            title?: string;
            /** The SEO description. */
            description?: string;
            /** Comma-separated SEO keywords. */
            keywords?: string;
            [key: string]: unknown;
          };
          /** The creation time as returned by Tradebee. */
          create_time?: string;
          /** The last update time as returned by Tradebee. */
          update_time?: string;
          /** The blog group. */
          group?: {
            /** The resource ID, returned as an integer or string by Tradebee. */
            bloggroup_id?: number | string;
            /** The group name. */
            group_name?: string;
            [key: string]: unknown;
          };
          /** The publisher name. */
          publisher?: string;
          /** The publication date as returned by Tradebee. */
          publication_date?: string;
          /** The blog title. */
          title?: string;
          /** Blog cover image URLs. */
          images?: Array<string>;
          /** The blog summary. */
          summary?: string;
          /** The blog HTML body. */
          description?: string;
          /** The blog page URL. */
          blog_url?: string;
          [key: string]: unknown;
        }>;
        /** Pagination returned by Tradebee; use next_page while has_next_page is true. */
        pagination: {
          /** The current page number. */
          current_page?: number;
          /** The returned page size. */
          page_size?: number;
          /** The total number of pages. */
          total_page?: number;
          /** The total number of matching records. */
          total_count?: number;
          /** Whether another page is available. */
          has_next_page?: boolean;
          /** The next page number, or null on the last page. */
          next_page?: number | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List the enabled Tradebee site languages before querying products or blogs. */
    "tradebee.list_languages": {
      input: Record<string, never>;
      output: {
        /** The enabled languages. */
        list: Array<{
          /** The language display name. */
          name?: string;
          /** The site language code. */
          language?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Read Tradebee product groups and their children. Omit both filters for top-level groups, or select one group or parent. This endpoint is not paginated. */
    "tradebee.list_product_groups": {
      input: {
        /**
         * An enabled site language code returned by list_languages.
         * @minLength 1
         * @pattern \S
         */
        language: string;
        /** Read one product group; cannot be combined with parent_productsgroup_id. */
        productsgroup_id?: number;
        /** Read children of this group; 0 selects top-level groups. Cannot be combined with productsgroup_id. */
        parent_productsgroup_id?: number;
        /** Return only these fields; omit to use the provider defaults. */
        fields?: Array<"productsgroup_id" | "language" | "tags" | "seo" | "create_time" | "update_time" | "group_name" | "productsgroup_url" | "section" | "is_leaf" | "children">;
      };
      output: {
        /** Product groups. */
        list: Array<{
          /** The resource ID, returned as an integer or string by Tradebee. */
          productsgroup_id?: number | string;
          /** The site language code. */
          language?: string;
          /** Resource keywords. */
          tags?: Array<string>;
          /** Search engine metadata. */
          seo?: {
            /** The SEO title. */
            title?: string;
            /** The SEO description. */
            description?: string;
            /** Comma-separated SEO keywords. */
            keywords?: string;
            [key: string]: unknown;
          };
          /** The creation time as returned by Tradebee. */
          create_time?: string;
          /** The last update time as returned by Tradebee. */
          update_time?: string;
          /** The group name. */
          group_name?: string;
          /** The product group page URL. */
          productsgroup_url?: string;
          /** HTML sections of the product group page. */
          section?: {
            /** The header HTML fragment. */
            top?: string;
            /** The footer HTML fragment. */
            bottom?: string;
            [key: string]: unknown;
          };
          /** Whether the group has no child groups. */
          is_leaf?: boolean;
          /** Recursive child groups, preserving provider-defined fields. */
          children?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Read Tradebee products in an enabled language, optionally by product or group. Filters are mutually exclusive. Follow pagination.next_page to continue. */
    "tradebee.list_products": {
      input: {
        /**
         * An enabled site language code returned by list_languages.
         * @minLength 1
         * @pattern \S
         */
        language: string;
        /** Filter by product ID; cannot be combined with productsgroup_id. */
        products_id?: number;
        /** Filter by product group ID; cannot be combined with products_id. */
        productsgroup_id?: number;
        /** Return only these fields; omit to use the provider defaults. */
        fields?: Array<"products_id" | "language" | "tags" | "seo" | "create_time" | "update_time" | "group" | "product_name" | "model" | "images" | "attributes" | "brief_description" | "description" | "view_count" | "inquiry_count" | "products_url">;
        /** Pagination; omitted values default to page 1 and 5 items. */
        pagination?: {
          /**
           * Page number, starting at 1.
           * @minimum 1
           */
          current_page?: number;
          /**
           * Items per page, from 1 to 10.
           * @minimum 1
           * @maximum 10
           */
          page_size?: number;
        };
      };
      output: {
        /** Products on this page. */
        list: Array<{
          /** The resource ID, returned as an integer or string by Tradebee. */
          products_id?: number | string;
          /** The site language code. */
          language?: string;
          /** Resource keywords. */
          tags?: Array<string>;
          /** Search engine metadata. */
          seo?: {
            /** The SEO title. */
            title?: string;
            /** The SEO description. */
            description?: string;
            /** Comma-separated SEO keywords. */
            keywords?: string;
            [key: string]: unknown;
          };
          /** The creation time as returned by Tradebee. */
          create_time?: string;
          /** The last update time as returned by Tradebee. */
          update_time?: string;
          /** The product group. */
          group?: {
            /** The resource ID, returned as an integer or string by Tradebee. */
            productsgroup_id?: number | string;
            /** The group name. */
            group_name?: string;
            [key: string]: unknown;
          };
          /** The product name. */
          product_name?: string;
          /** The product model. */
          model?: string;
          /** Product image URLs. */
          images?: Array<string>;
          /** Product attributes. */
          attributes?: Array<{
            /** The attribute name. */
            name?: string;
            /** The attribute value. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** A short product description. */
          brief_description?: string;
          /** The product HTML description. */
          description?: string;
          /** The product view count. */
          view_count?: number;
          /** The product inquiry count. */
          inquiry_count?: number;
          /** The product page URL. */
          products_url?: string;
          [key: string]: unknown;
        }>;
        /** Pagination returned by Tradebee; use next_page while has_next_page is true. */
        pagination: {
          /** The current page number. */
          current_page?: number;
          /** The returned page size. */
          page_size?: number;
          /** The total number of pages. */
          total_page?: number;
          /** The total number of matching records. */
          total_count?: number;
          /** Whether another page is available. */
          has_next_page?: boolean;
          /** The next page number, or null on the last page. */
          next_page?: number | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
