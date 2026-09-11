import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Construct SQL for saving as a question. This handle cannot be run by execute_query or query; use execute_sql to execute SQL. */
    "metabase.construct_native_query": {
      input: {
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        databaseId: number;
        /**
         * Raw SQL text.
         * @minLength 1
         * @pattern \S
         */
        sql: string;
      };
      output: {
        /**
         * Stored query handle from construct_query or construct_native_query. Subject to server expiry and caller ownership.
         * @format uuid
         */
        queryHandle: string;
        /** Complete native MCP response, including content blocks and metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Construct portable MBQL 5 without executing it; returns a stored query handle. */
    "metabase.construct_query": {
      input: {
        /** Portable MBQL 5 query. Discover exact names with search_content/read_resource and read metabase://docs/construct-query.md; nested native query keys are passed unchanged. */
        query: Record<string, unknown>;
        /**
         * Exact original user message, if available.
         * @minLength 1
         * @maxLength 10000
         */
        prompt: string;
      };
      output: {
        /**
         * Stored query handle from construct_query or construct_native_query. Subject to server expiry and caller ownership.
         * @format uuid
         */
        queryHandle: string;
        /** Complete native MCP response, including content blocks and metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a collection, optionally nested under a parent. */
    "metabase.create_collection": {
      input: {
        /**
         * Entity name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** Entity description. */
        description: string;
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        parentCollectionId: number;
      };
      output: {
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Entity name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        parentId: number | null;
        /**
         * Materialized collection path.
         * @minLength 1
         */
        location: string;
        /** Description. */
        description: string | null;
        /** Complete native MCP response, including content blocks and metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a dashboard with optional saved questions, automatically positioned. */
    "metabase.create_dashboard": {
      input: {
        /**
         * Entity name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** Entity description. */
        description: string;
        /**
         * Destination collection. On creation, omission uses the API-key caller's default (root on v0.63.16); on update it leaves the collection unchanged. MCP cannot move existing content to root with null.
         * @exclusiveMinimum 0
         */
        collectionId: number;
        /** Questions to add. */
        questionIds: Array<number>;
      };
      output: {
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Entity name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        collectionId: number | null;
        /** Saved collection breadcrumb. */
        collectionPath: string;
        /** Saved description. */
        description: string | null;
        /** Dashboard URL, possibly relative. */
        url: string;
        /** Saved dashboard-card IDs. */
        dashcardIds: Array<number>;
        /** Complete native MCP response, including content blocks and metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Save constructed MBQL as a metric: one aggregation and at most one date/datetime grouping. */
    "metabase.create_metric": {
      input: {
        /**
         * Entity name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * Stored query handle from construct_query or construct_native_query. Subject to server expiry and caller ownership.
         * @format uuid
         */
        queryHandle: string;
        /** Visualization display type. */
        display: "table" | "bar" | "line" | "pie" | "scatter" | "area" | "row" | "combo" | "pivot" | "scalar" | "smartscalar" | "gauge" | "progress" | "funnel" | "map" | "waterfall" | "sankey";
        /** Entity description. */
        description: string;
        /**
         * Destination collection. On creation, omission uses the API-key caller's default (root on v0.63.16); on update it leaves the collection unchanged. MCP cannot move existing content to root with null.
         * @exclusiveMinimum 0
         */
        collectionId: number;
        /** Native Metabase visualization settings. Keys are passed unchanged. */
        visualizationSettings: Record<string, unknown>;
      };
      output: {
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Entity name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        collectionId: number | null;
        /** Saved collection breadcrumb. */
        collectionPath: string;
        /** Saved description. */
        description: string | null;
        /** Saved display type. */
        display: string;
        /** Metabase question URL, possibly relative. */
        url: string;
        /** Complete native MCP response, including content blocks and metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Save a constructed MBQL or SQL query as a question. */
    "metabase.create_question": {
      input: {
        /**
         * Entity name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * Stored query handle from construct_query or construct_native_query. Subject to server expiry and caller ownership.
         * @format uuid
         */
        queryHandle: string;
        /** Visualization display type. */
        display: "table" | "bar" | "line" | "pie" | "scatter" | "area" | "row" | "combo" | "pivot" | "scalar" | "smartscalar" | "gauge" | "progress" | "funnel" | "map" | "waterfall" | "sankey";
        /** Entity description. */
        description: string;
        /**
         * Destination collection. On creation, omission uses the API-key caller's default (root on v0.63.16); on update it leaves the collection unchanged. MCP cannot move existing content to root with null.
         * @exclusiveMinimum 0
         */
        collectionId: number;
        /** Native Metabase visualization settings. Keys are passed unchanged. */
        visualizationSettings: Record<string, unknown>;
      };
      output: {
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Entity name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        collectionId: number | null;
        /** Saved collection breadcrumb. */
        collectionPath: string;
        /** Saved description. */
        description: string | null;
        /** Saved display type. */
        display: string;
        /** Metabase question URL, possibly relative. */
        url: string;
        /** Complete native MCP response, including content blocks and metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Execute constructed MBQL and return rows and columns. Native SQL handles are not supported. */
    "metabase.execute_query": {
      input: Record<string, unknown>;
      output: {
        /** Literal value. */
        status: "completed";
        /** Result columns in row order. */
        columns: Array<{
          /** Column name. */
          name: string;
          /** Human-readable name. */
          displayName: string;
          /** Metabase base type. */
          baseType: string;
          /** Effective type. */
          effectiveType: string | null;
        }>;
        /** Result rows. */
        rows: Array<Array<unknown>>;
        /**
         * Reported number of rows.
         * @minimum 0
         */
        rowCount: number;
        /**
         * Execution time in milliseconds.
         * @minimum 0
         */
        runningTime: number;
        /** Pass to query for the next page, when available. */
        continuationToken: string;
        /** Complete native MCP response, including content blocks and metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Run a saved question. Parameterized questions and input template tags are not supported by native MCP. */
    "metabase.execute_question": {
      input: {
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Literal value. */
        status: "completed";
        /** Result columns in row order. */
        columns: Array<{
          /** Column name. */
          name: string;
          /** Human-readable name. */
          displayName: string;
          /** Metabase base type. */
          baseType: string;
          /** Effective type. */
          effectiveType: string | null;
        }>;
        /** Result rows. */
        rows: Array<Array<unknown>>;
        /**
         * Reported number of rows.
         * @minimum 0
         */
        rowCount: number;
        /**
         * Execution time in milliseconds.
         * @minimum 0
         */
        runningTime: number;
        /** Pass to query for the next page, when available. */
        continuationToken: string;
        /** Complete native MCP response, including content blocks and metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Execute native SQL. Requires native-query permission and the instance's execute-SQL setting to be enabled. */
    "metabase.execute_sql": {
      input: {
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        databaseId: number;
        /**
         * Raw SQL text.
         * @minLength 1
         * @pattern \S
         */
        sql: string;
      };
      output: {
        /** Literal value. */
        status: "completed";
        /** Result columns in row order. */
        columns: Array<{
          /** Column name. */
          name: string;
          /** Human-readable name. */
          displayName: string;
          /** Metabase base type. */
          baseType: string;
          /** Effective type. */
          effectiveType: string | null;
        }>;
        /** Result rows. */
        rows: Array<Array<unknown>>;
        /**
         * Reported number of rows.
         * @minimum 0
         */
        rowCount: number;
        /**
         * Execution time in milliseconds.
         * @minimum 0
         */
        runningTime: number;
        /** Pass to query for the next page, when available. */
        continuationToken: string;
        /** Complete native MCP response, including content blocks and metadata. */
        raw: Record<string, unknown>;
      };
    };
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
    /** Discover native MCP resources. Only documentation resources can be read by this connector; Apps are not supported. */
    "metabase.list_mcp_resources": {
      input: Record<string, never>;
      output: {
        /** Resource definitions. */
        resources: Array<{
          /** Resource URI. */
          uri: string;
          /** Resource name. */
          name: string;
          /** Title. */
          title: string;
          /** Description. */
          description: string;
          /** Media type. */
          mimeType: string;
        }>;
        /** Complete native MCP response, including content blocks and metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Discover native MCP tools and their upstream schemas. Unknown tools are discoverable, not automatically executable. */
    "metabase.list_mcp_tools": {
      input: Record<string, never>;
      output: {
        /** Native tools. */
        tools: Array<{
          /** Native tool name (search maps to search_content). */
          name: string;
          /** Tool title. */
          title: string;
          /** Tool description. */
          description: string;
          /** Upstream JSON input schema. */
          inputSchema: Record<string, unknown>;
          /** Upstream JSON output schema. */
          outputSchema: Record<string, unknown>;
          /** Native tool annotations. */
          annotations: Record<string, unknown>;
        }>;
        /** Complete native MCP response, including content blocks and metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Execute MBQL or fetch its next page. Native MCP returns pages of 200 rows within a 2,000-row total budget. */
    "metabase.query": {
      input: Record<string, unknown>;
      output: {
        /** Literal value. */
        status: "completed";
        /** Result columns in row order. */
        columns: Array<{
          /** Column name. */
          name: string;
          /** Human-readable name. */
          displayName: string;
          /** Metabase base type. */
          baseType: string;
          /** Effective type. */
          effectiveType: string | null;
        }>;
        /** Result rows. */
        rows: Array<Array<unknown>>;
        /**
         * Reported number of rows.
         * @minimum 0
         */
        rowCount: number;
        /**
         * Execution time in milliseconds.
         * @minimum 0
         */
        runningTime: number;
        /** Pass to query for the next page, when available. */
        continuationToken: string;
        /** Complete native MCP response, including content blocks and metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Read native metabase://docs/ documentation, not entities or MCP Apps resources. */
    "metabase.read_mcp_resource": {
      input: {
        /**
         * URI from list_mcp_resources.
         * @minLength 17
         * @pattern ^metabase://docs/
         */
        uri: string;
      };
      output: {
        /** Text resource contents. */
        contents: Array<{
          /** Resource URI. */
          uri: string;
          /** Media type. */
          mimeType: string;
          /** Documentation text. */
          text: string;
        }>;
        /** Complete native MCP response, including content blocks and metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Read up to five Metabase entity URIs. Preserves individual resource errors; list endpoints cap at 25 items. */
    "metabase.read_resource": {
      input: {
        /**
         * For example metabase://databases or metabase://table/1/fields.
         * @minItems 1
         * @maxItems 5
         */
        uris: Array<string>;
      };
      output: {
        /** Per-URI successes or failures. */
        resources: Array<{
          /** Requested URI. */
          uri: string;
          /** Resource content; shape depends on URI. */
          content: unknown;
          /** Per-resource error. */
          error: string;
        }>;
        /** Native formatted XML representation. */
        output: string;
        /** Complete native MCP response, including content blocks and metadata. */
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
    /** Search native Metabase MCP content using keyword or semantic queries (not the REST search action). Requires native MCP on the instance. */
    "metabase.search_content": {
      input: {
        /** Keyword queries. */
        termQueries: Array<string>;
        /** Natural-language queries; availability depends on instance search configuration. */
        semanticQueries: Array<string>;
      };
      output: {
        /** Matching content. */
        results: Array<{
          /** Entity ID. */
          id: number;
          /** Metabase entity type. */
          type: string;
          /**
           * Entity name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** Display name. */
          displayName: string | null;
          /** Description. */
          description: string | null;
          /** Database ID. */
          databaseId: number | null;
          /** Database schema. */
          databaseSchema: string | null;
        }>;
        /**
         * Number of matches.
         * @minimum 0
         */
        totalCount: number;
        /** Complete native MCP response, including content blocks and metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Patch a dashboard and apply ordered add/remove/move card mutations. */
    "metabase.update_dashboard": {
      input: {
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Entity name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** Entity description. */
        description: string;
        /**
         * Destination collection. On creation, omission uses the API-key caller's default (root on v0.63.16); on update it leaves the collection unchanged. MCP cannot move existing content to root with null.
         * @exclusiveMinimum 0
         */
        collectionId: number;
        /** Archive or restore. */
        archived: boolean;
        /** Ordered dashboard-card mutations. */
        dashcards: Array<{
          /** Literal value. */
          action: "add";
          /**
           * Metabase numeric ID.
           * @exclusiveMinimum 0
           */
          cardId: number;
          /** Optional layout size. */
          displaySize: "wide" | "tall" | "full";
        } | {
          /** Literal value. */
          action: "remove";
          /**
           * Metabase numeric ID.
           * @exclusiveMinimum 0
           */
          dashcardId: number;
        } | {
          /** Literal value. */
          action: "move";
          /**
           * Metabase numeric ID.
           * @exclusiveMinimum 0
           */
          dashcardId: number;
          /** Placement. */
          position: "top" | "bottom";
        }>;
      };
      output: {
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Entity name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        collectionId: number | null;
        /** Saved collection breadcrumb. */
        collectionPath: string;
        /** Saved description. */
        description: string | null;
        /** Whether archived. */
        archived: boolean;
        /** Saved dashboard-card IDs. */
        dashcardIds: Array<number>;
        /** Complete native MCP response, including content blocks and metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Patch a metric; replacement queries must still meet metric requirements. */
    "metabase.update_metric": {
      input: {
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Entity name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * Stored query handle from construct_query or construct_native_query. Subject to server expiry and caller ownership.
         * @format uuid
         */
        queryHandle: string;
        /** Visualization display type. */
        display: "table" | "bar" | "line" | "pie" | "scatter" | "area" | "row" | "combo" | "pivot" | "scalar" | "smartscalar" | "gauge" | "progress" | "funnel" | "map" | "waterfall" | "sankey";
        /** Entity description. */
        description: string;
        /**
         * Destination collection. On creation, omission uses the API-key caller's default (root on v0.63.16); on update it leaves the collection unchanged. MCP cannot move existing content to root with null.
         * @exclusiveMinimum 0
         */
        collectionId: number;
        /** Native Metabase visualization settings. Keys are passed unchanged. */
        visualizationSettings: Record<string, unknown>;
        /** Archive or restore. */
        archived: boolean;
      };
      output: {
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Entity name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        collectionId: number | null;
        /** Saved collection breadcrumb. */
        collectionPath: string;
        /** Saved description. */
        description: string | null;
        /** Saved display type. */
        display: string;
        /** Whether archived. */
        archived: boolean;
        /** Complete native MCP response, including content blocks and metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Patch a saved question, optionally replacing its query with a stored handle. */
    "metabase.update_question": {
      input: {
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Entity name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * Stored query handle from construct_query or construct_native_query. Subject to server expiry and caller ownership.
         * @format uuid
         */
        queryHandle: string;
        /** Visualization display type. */
        display: "table" | "bar" | "line" | "pie" | "scatter" | "area" | "row" | "combo" | "pivot" | "scalar" | "smartscalar" | "gauge" | "progress" | "funnel" | "map" | "waterfall" | "sankey";
        /** Entity description. */
        description: string;
        /**
         * Destination collection. On creation, omission uses the API-key caller's default (root on v0.63.16); on update it leaves the collection unchanged. MCP cannot move existing content to root with null.
         * @exclusiveMinimum 0
         */
        collectionId: number;
        /** Native Metabase visualization settings. Keys are passed unchanged. */
        visualizationSettings: Record<string, unknown>;
        /** Archive or restore. */
        archived: boolean;
      };
      output: {
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Entity name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /**
         * Metabase numeric ID.
         * @exclusiveMinimum 0
         */
        collectionId: number | null;
        /** Saved collection breadcrumb. */
        collectionPath: string;
        /** Saved description. */
        description: string | null;
        /** Saved display type. */
        display: string;
        /** Whether archived. */
        archived: boolean;
        /** Complete native MCP response, including content blocks and metadata. */
        raw: Record<string, unknown>;
      };
    };
  }
}
