import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Execute one AppDrag Cloud Backend API function by folder, function name, HTTP method, and optional parameters. */
    "appdrag.execute_function": {
      input: {
        /**
         * The AppDrag function folder name used in the route.
         * @minLength 1
         */
        folder: string;
        /**
         * The AppDrag function name used in the route.
         * @minLength 1
         */
        functionName: string;
        /** The HTTP method configured for the AppDrag API function. */
        method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
        /** The AppDrag environment segment to call when using an environment-specific route. */
        environment?: "default" | "dev" | "preprod" | "prod";
        /** Key-value pairs forwarded to the AppDrag function as request parameters. */
        parameters?: Record<string, string | number | boolean | null | Array<unknown> | Record<string, unknown>>;
        /** Whether to return the raw response body instead of the standard AppDrag wrapper payload. */
        rawResponse?: boolean;
      };
      output: {
        /** Whether the upstream HTTP request completed with a 2xx status code. */
        successful: boolean;
        /** The standard AppDrag response wrapper returned by most Cloud Backend functions. */
        data?: {
          /** The AppDrag execution status field. */
          status: boolean | string;
          /** The AppDrag function execution time in milliseconds. */
          execTime: number;
          /** The AppDrag billed time in milliseconds. */
          billedTime: number;
          /** The upstream payload returned by the AppDrag function. */
          payload: unknown;
          /** Optional logs or error details returned by the AppDrag function. */
          logs?: unknown;
          /** Optional affected row count returned by Visual SQL actions. */
          affectedRows?: string | number;
        };
        /** The top-level AppDrag error string when it is present. */
        error?: string;
        /** The parsed response body returned when rawResponse is enabled. */
        rawBody?: unknown;
        /** The response body format detected by the connector. */
        responseFormat: "json" | "text" | "empty";
        /** The final AppDrag route that was called. */
        route: string;
      };
    };
  }
}
