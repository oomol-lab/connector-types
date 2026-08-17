import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate completion text with a published LoyJoy process (agent). */
    "loyjoy.create_completion": {
      input: {
        /**
         * The ID of the published process used for the completion.
         * @format uuid
         */
        processId: string;
        /**
         * The input text to complete.
         * @minLength 1
         */
        text: string;
        /**
         * The locale used for generation, such as en or de.
         * @minLength 1
         */
        locale?: string;
      };
      output: {
        /** The generated completion text. */
        text: string;
      };
    };
    /** Retrieve a published LoyJoy process (agent) as JSON by its ID. */
    "loyjoy.get_process": {
      input: {
        /**
         * The ID of the published process to retrieve.
         * @format uuid
         */
        processId: string;
      };
      output: {
        /** A LoyJoy process (agent) returned by the API. */
        process: Record<string, unknown>;
      };
    };
    /** Retrieve a LoyJoy home view as JSON by its ID. */
    "loyjoy.get_view": {
      input: {
        /**
         * The ID of the home view to retrieve.
         * @format uuid
         */
        viewId: string;
      };
      output: {
        /** A LoyJoy home view returned by the API. */
        view: Record<string, unknown>;
      };
    };
    /** List the published LoyJoy processes (agents) available in the tenant. */
    "loyjoy.list_processes": {
      input: Record<string, never>;
      output: {
        /** Process records returned by LoyJoy. */
        processes: Array<Record<string, unknown>>;
      };
    };
    /** List the LoyJoy home views available in the tenant. */
    "loyjoy.list_views": {
      input: Record<string, never>;
      output: {
        /** Home view records returned by LoyJoy. */
        views: Array<Record<string, unknown>>;
      };
    };
    /** Search the tenant knowledge base for up to 100 relevant chunks. */
    "loyjoy.search_chunks": {
      input: {
        /**
         * The natural-language search query.
         * @minLength 1
         */
        query: string;
        /** Folder names used to restrict the knowledge search. */
        folders?: Array<string>;
        /**
         * The maximum number of chunks to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        maxChunks?: number;
      };
      output: {
        /** Knowledge chunks returned by LoyJoy. */
        chunks: Array<Record<string, unknown>>;
      };
    };
    /** Start a published LoyJoy process and return the variables produced before it completes or requests user input. */
    "loyjoy.start_process": {
      input: {
        /**
         * The ID of the published process to start.
         * @format uuid
         */
        processId: string;
        /** Process variables keyed by the variable names configured in LoyJoy. */
        variables?: Record<string, unknown>;
      };
      output: {
        /** The process variables returned by LoyJoy. */
        variables: unknown;
      };
    };
  }
}
