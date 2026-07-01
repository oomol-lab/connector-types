import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a Help Scout Docs article by ID or article number. */
    "helpscout_docs.get_article": {
      input: {
        /**
         * The Help Scout Docs article ID or article number to fetch.
         * @minLength 1
         */
        articleIdOrNumber: string;
        /** Whether to return the draft version when unpublished changes exist. */
        draft?: boolean;
      };
      output: {
        /** A Help Scout Docs article object returned by the API. */
        article: Record<string, unknown>;
      };
    };
    /** List Help Scout Docs articles in a collection or category. */
    "helpscout_docs.list_articles": {
      input: {
        /**
         * The Help Scout Docs collection ID whose articles to list.
         * @minLength 1
         */
        collectionId?: string;
        /**
         * The Help Scout Docs category ID whose articles to list.
         * @minLength 1
         */
        categoryId?: string;
        /**
         * The 1-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items Help Scout Docs should return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The current page number returned by Help Scout Docs. */
        page: number | null;
        /** The total number of pages returned by Help Scout Docs. */
        pages: number | null;
        /** The number of items returned on this page. */
        count: number | null;
        /** The Help Scout Docs article reference objects on this page. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List Help Scout Docs categories in a collection. */
    "helpscout_docs.list_categories": {
      input: {
        /**
         * The Help Scout Docs collection ID whose categories to list.
         * @minLength 1
         */
        collectionId: string;
        /**
         * The 1-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items Help Scout Docs should return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The current page number returned by Help Scout Docs. */
        page: number | null;
        /** The total number of pages returned by Help Scout Docs. */
        pages: number | null;
        /** The number of items returned on this page. */
        count: number | null;
        /** The Help Scout Docs category objects on this page. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List Help Scout Docs collections available to the API key. */
    "helpscout_docs.list_collections": {
      input: {
        /**
         * The 1-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items Help Scout Docs should return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The current page number returned by Help Scout Docs. */
        page: number | null;
        /** The total number of pages returned by Help Scout Docs. */
        pages: number | null;
        /** The number of items returned on this page. */
        count: number | null;
        /** The Help Scout Docs collection objects on this page. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List Help Scout Docs sites available to the API key. */
    "helpscout_docs.list_sites": {
      input: {
        /**
         * The 1-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items Help Scout Docs should return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The current page number returned by Help Scout Docs. */
        page: number | null;
        /** The total number of pages returned by Help Scout Docs. */
        pages: number | null;
        /** The number of items returned on this page. */
        count: number | null;
        /** The Help Scout Docs site objects on this page. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Search Help Scout Docs articles by query with optional collection and site filters. */
    "helpscout_docs.search_articles": {
      input: {
        /**
         * The search query to run against Help Scout Docs articles.
         * @minLength 1
         */
        query: string;
        /**
         * The optional Help Scout Docs collection ID to filter by.
         * @minLength 1
         */
        collectionId?: string;
        /**
         * The optional Help Scout Docs site ID to filter by.
         * @minLength 1
         */
        siteId?: string;
        /** The optional collection visibility filter. */
        visibility?: "public" | "private";
        /**
         * The 1-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items Help Scout Docs should return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The current page number returned by Help Scout Docs. */
        page: number | null;
        /** The total number of pages returned by Help Scout Docs. */
        pages: number | null;
        /** The number of items returned on this page. */
        count: number | null;
        /** The Help Scout Docs article search result objects on this page. */
        items: Array<Record<string, unknown>>;
      };
    };
  }
}
