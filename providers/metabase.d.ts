import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a native Metabase MCP tool with JSON arguments matching the inputSchema returned by list_tools with toolNames. Depending on the tool, this can run queries or create, update, or archive Metabase content as the API key's user; check the tool's annotations and confirm writes first. */
    "metabase.call_tool": {
      input: {
        /**
         * Exact tool name returned by list_tools.
         * @minLength 1
         */
        toolName: string;
        /** JSON arguments matching the tool's inputSchema; passed unchanged. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** structuredContent when present, otherwise the leading JSON of the text content, otherwise the text. */
        result: unknown;
        /** Guidance text Metabase appended after the JSON, such as paging hints. */
        notes: string;
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
    /** Discover native MCP resources. Data resources can be read with read_mcp_resource; MCP Apps (ui://) resources are not supported. */
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
      };
    };
    /** Discover the tools exposed by this Metabase instance's native MCP server. Without toolNames, returns a compact index (name, one-line summary, annotations); pass toolNames to get the full descriptions and input schemas of those tools before calling them with call_tool. Tool names and schemas follow the instance's Metabase version. */
    "metabase.list_tools": {
      input: {
        /**
         * Exact tool names whose full description and schemas to return.
         * @minItems 1
         */
        toolNames?: Array<string>;
      };
      output: {
        /** Native tools. */
        tools: Array<{
          /** Exact native tool name to pass to call_tool. */
          name: string;
          /** First line of the tool description; index mode only. */
          summary?: string;
          /** Full tool description supplied by Metabase; toolNames mode only. */
          description?: string;
          /** Upstream JSON input schema; toolNames mode only. */
          inputSchema?: Record<string, unknown>;
          /** Upstream JSON output schema; toolNames mode only. */
          outputSchema?: Record<string, unknown>;
          /** Native tool annotations such as readOnlyHint and destructiveHint. */
          annotations?: Record<string, unknown>;
        }>;
      };
    };
    /** Read a text resource listed by list_mcp_resources. MCP Apps (ui://) resources are not supported. */
    "metabase.read_mcp_resource": {
      input: {
        /**
         * URI from list_mcp_resources.
         * @minLength 4
         * @pattern ^(?!ui://)[a-z][a-z0-9+.-]*://
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
          /** Resource text. */
          text: string;
        }>;
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
