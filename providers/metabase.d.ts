import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Metabase card by ID. */
    "metabase.get_card": {
      input: {
        /** A Metabase numeric ID or entity ID string. */
        id: number | string;
        /** Whether to request the legacy MBQL response shape. */
        legacyMbql?: boolean;
      };
      output: {
        /** A Metabase entity object. */
        card: Record<string, unknown>;
        /** The raw Metabase API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Metabase collection by ID. */
    "metabase.get_collection": {
      input: {
        /** A Metabase numeric ID or entity ID string. */
        id: number | string;
      };
      output: {
        /** A Metabase entity object. */
        collection: Record<string, unknown>;
        /** The raw Metabase API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the Metabase user associated with the API key. */
    "metabase.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Metabase entity object. */
        user: Record<string, unknown>;
        /** The raw Metabase API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Metabase dashboard by ID. */
    "metabase.get_dashboard": {
      input: {
        /** A Metabase numeric ID or entity ID string. */
        id: number | string;
      };
      output: {
        /** A Metabase entity object. */
        dashboard: Record<string, unknown>;
        /** The raw Metabase API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Metabase database by ID. */
    "metabase.get_database": {
      input: {
        /** A Metabase numeric ID or entity ID string. */
        id: number | string;
        /** Related database data to include. */
        include?: "tables" | "tables.fields";
        /** Whether to include editable data model metadata. */
        includeEditableDataModel?: boolean;
        /** Whether to exclude details the API key cannot edit. */
        excludeUneditableDetails?: boolean;
      };
      output: {
        /** A Metabase entity object. */
        database: Record<string, unknown>;
        /** The raw Metabase API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Metabase cards, also known as questions. */
    "metabase.list_cards": {
      input: {
        /** Card list filter. */
        filter?: "archived" | "table" | "using_model" | "bookmarked" | "using_segment" | "all" | "mine" | "database";
        /**
         * Model ID to filter cards by.
         * @exclusiveMinimum 0
         */
        modelId?: number;
      };
      output: {
        /** Metabase cards returned by the API. */
        cards: Array<Record<string, unknown>>;
        /** The raw Metabase API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Metabase collections visible to the API key. */
    "metabase.list_collections": {
      input: {
        /** Whether to include archived collections. */
        archived?: boolean;
        /** Whether to exclude other users' personal collections. */
        excludeOtherUserCollections?: boolean;
        /**
         * Collection namespace to filter by.
         * @minLength 1
         */
        namespace?: string;
        /** Whether to return only personal collections. */
        personalOnly?: boolean;
      };
      output: {
        /** Metabase collections returned by the API. */
        collections: Array<Record<string, unknown>>;
        /** The raw Metabase API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Metabase dashboards visible to the API key. */
    "metabase.list_dashboards": {
      input: {
        /** Dashboard list filter. */
        filter?: "all" | "mine" | "archived";
      };
      output: {
        /** Metabase dashboards returned by the API. */
        dashboards: Array<Record<string, unknown>>;
        /** The raw Metabase API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Metabase databases visible to the API key. */
    "metabase.list_databases": {
      input: {
        /** Related database data to include. */
        include?: "tables" | "schemas";
        /** Whether to include analytics database metadata. */
        includeAnalytics?: boolean;
        /** Whether to return saved query databases. */
        saved?: boolean;
        /** Whether to include editable data model metadata. */
        includeEditableDataModel?: boolean;
        /** Whether to exclude details the API key cannot edit. */
        excludeUneditableDetails?: boolean;
        /** Whether to return only uploadable databases. */
        includeOnlyUploadable?: boolean;
        /**
         * Router database ID to filter by.
         * @exclusiveMinimum 0
         */
        routerDatabaseId?: number;
        /** Whether to return databases the API key can query. */
        canQuery?: boolean;
        /** Whether to return databases the API key can edit metadata for. */
        canWriteMetadata?: boolean;
      };
      output: {
        /** Metabase databases returned by the API. */
        databases: Array<Record<string, unknown>>;
        /** The raw Metabase API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Metabase content visible to the API key. */
    "metabase.search": {
      input: {
        /**
         * Search text.
         * @minLength 1
         */
        query?: string;
        /** Metabase search context. */
        context?: "search-bar" | "search-app" | "command-palette" | "entity-picker" | "data-picker" | "type-filter" | "basic-actions" | "browse" | "embedding-setup" | "document" | "library" | "dependencies" | "model-migration" | "api" | "metabot";
        /** Whether to search archived content. */
        archived?: boolean;
        /**
         * Collection ID to search within.
         * @exclusiveMinimum 0
         */
        collectionId?: number;
        /**
         * Database ID to filter table search results by.
         * @exclusiveMinimum 0
         */
        tableDatabaseId?: number;
        /** Metabase model types to include. */
        models?: Array<"dashboard" | "table" | "dataset" | "segment" | "collection" | "measure" | "transform" | "document" | "database" | "action" | "indexed-entity" | "metric" | "card">;
        /** Whether to include dashboard questions. */
        includeDashboardQuestions?: boolean;
        /** Whether to include result metadata. */
        includeMetadata?: boolean;
      };
      output: {
        /** Metabase search results returned by the API. */
        results: Array<Record<string, unknown>>;
        /** The raw Metabase API response object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
