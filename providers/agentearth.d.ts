import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Execute a discovered AgentEarth tool using its complete tool_url and input_schema. Tools may modify or delete external resources and consume credits. Execution waits up to five minutes; after a timeout, verify the outcome before retrying. */
    "agentearth.execute_tool": {
      input: {
        /**
         * The complete HTTPS execution URL returned by recommend_tools or get_tool_detail, including all query parameters.
         * @minLength 1
         * @pattern \S
         */
        tool_url: string;
        /** Tool arguments matching the discovered input_schema; use URLs for remote files when supported by the tool. */
        params?: Record<string, unknown>;
      };
      output: {
        /** Zero indicates a successful request. */
        error_no: 0;
        /** The upstream status message. */
        error_msg: string;
        /** The complete tool result, including any text, image, audio, or resource links. */
        result: unknown;
        /** Optional provider annotations about the result. */
        platform_annotations?: string;
        [key: string]: unknown;
      };
    };
    /** Read the connected AgentEarth account, API key name, and credit balance without discovering tools. */
    "agentearth.get_account": {
      input: Record<string, never>;
      output: {
        /** Zero indicates a successful request. */
        error_no: 0;
        /** The upstream status message. */
        error_msg: string;
        /** The authenticated user ID. */
        user_id: string;
        /** The authenticated user name. */
        user_name: string;
        /** The API key name, not its secret value. */
        key_name: string;
        /** The account balance as a decimal string, preserving eight decimal places. */
        credit: string;
        [key: string]: unknown;
      };
    };
    /** Get the complete input schema and execution URL for an exact AgentEarth tool name returned by discovery. */
    "agentearth.get_tool_detail": {
      input: {
        /**
         * The exact tool name returned by discovery.
         * @minLength 1
         * @pattern \S
         */
        tool_name: string;
      };
      output: {
        /** Zero indicates a successful request. */
        error_no: 0;
        /** The upstream status message. */
        error_msg: string;
        /** The total number of matching tools. */
        total: number;
        /** Discovered tools. */
        tools: Array<{
          /** The exact tool name. */
          tool_name?: string;
          /** The complete execution URL; pass it unchanged to execute_tool. */
          tool_url?: string;
          /** The tool capability description. */
          description?: string;
          /** When this tool should be used. */
          when_to_use?: string;
          /** The tool's JSON input schema; usually omitted from list results. */
          input_schema?: Record<string, unknown>;
          /** Credits charged per tool call. */
          credit?: number;
          /** Related tools suggested by the provider. */
          associated_tools?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Browse one page of AgentEarth tools. Increase page to continue; read tool details for the complete input schema before execution. */
    "agentearth.list_tools": {
      input: {
        /**
         * Page number; defaults to 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * Tools per page; defaults to 20, maximum 100.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        page_size?: number;
        /** A keyword used to filter tools. */
        keyword?: string;
        /** The provider's sorting mode; omit for its default ordering. */
        sort?: string;
      };
      output: {
        /** Zero indicates a successful request. */
        error_no: 0;
        /** The upstream status message. */
        error_msg: string;
        /** The total number of matching tools. */
        total: number;
        /** Discovered tools. */
        tools: Array<{
          /** The exact tool name. */
          tool_name?: string;
          /** The complete execution URL; pass it unchanged to execute_tool. */
          tool_url?: string;
          /** The tool capability description. */
          description?: string;
          /** When this tool should be used. */
          when_to_use?: string;
          /** The tool's JSON input schema; usually omitted from list results. */
          input_schema?: Record<string, unknown>;
          /** Credits charged per tool call. */
          credit?: number;
          /** Related tools suggested by the provider. */
          associated_tools?: string;
          [key: string]: unknown;
        }>;
        /** The returned page number. */
        page: number;
        /** The requested number of tools per page. */
        page_size: number;
        [key: string]: unknown;
      };
    };
    /** Recommend AgentEarth tools for a natural-language task, including input schemas and complete execution URLs. */
    "agentearth.recommend_tools": {
      input: {
        /**
         * The task or question to find tools for.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * Maximum recommendations; defaults to 5.
         * @minimum 1
         * @maximum 50
         * @default 5
         */
        limit?: number;
      };
      output: {
        /** Zero indicates a successful request. */
        error_no: 0;
        /** The upstream status message. */
        error_msg: string;
        /** The total number of matching tools. */
        total: number;
        /** Discovered tools. */
        tools: Array<{
          /** The exact tool name. */
          tool_name?: string;
          /** The complete execution URL; pass it unchanged to execute_tool. */
          tool_url?: string;
          /** The tool capability description. */
          description?: string;
          /** When this tool should be used. */
          when_to_use?: string;
          /** The tool's JSON input schema; usually omitted from list results. */
          input_schema?: Record<string, unknown>;
          /** Credits charged per tool call. */
          credit?: number;
          /** Related tools suggested by the provider. */
          associated_tools?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
