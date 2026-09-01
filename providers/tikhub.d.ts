import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Calculate TikHub daily request pricing for one endpoint. Requires the /api/v1/tikhub/user/ TikHub path scope. */
    "tikhub.calculate_price": {
      input: {
        /**
         * The TikHub endpoint path to inspect or price.
         * @minLength 1
         */
        endpoint: string;
        /**
         * The expected number of daily requests used for the price calculation.
         * @exclusiveMinimum 0
         */
        requestPerDay?: number;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The endpoint path used for the calculation. */
        endpoint: string;
        /**
         * The daily request count used for the calculation.
         * @exclusiveMinimum 0
         */
        requestPerDay: number;
        /** The raw data payload returned by TikHub. */
        price: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Discover current TikHub functional API endpoints from the official documentation catalog, excluding account APIs. */
    "tikhub.discover_endpoints": {
      input: {
        /**
         * Short title, operation ID, category, or path terms to match.
         * @maxLength 200
         */
        query?: string;
        /**
         * An exact TikHub functional API family name.
         * @maxLength 100
         */
        category?: string;
        /**
         * An opaque cursor bound to the current catalog version and filters.
         * @maxLength 1024
         */
        cursor?: string | null;
        /**
         * The maximum number of endpoint documents to inspect in this page.
         * @minimum 1
         * @maximum 20
         * @default 10
         */
        limit?: number;
      };
      output: {
        /** The SHA-256 digest of the current TikHub documentation index. */
        catalogVersion: string;
        /** The endpoints discovered in this page. */
        endpoints: Array<{
          /** The TikHub documentation identifier for this endpoint. */
          endpointId: string;
          /** The OpenAPI operation identifier reported by TikHub. */
          operationId: string;
          /** The endpoint title from the TikHub documentation index. */
          title: string;
          /** The TikHub API family from the documentation index. */
          category: string;
          /** The current endpoint description from TikHub documentation. */
          description: string;
          /** The HTTP method accepted by this endpoint. */
          method: "GET" | "POST";
          /** The absolute TikHub API path or path template. */
          path: string;
          /** The TikHub token path scope required by this endpoint. */
          requiredScope: string;
          /**
           * The fixed-origin TikHub endpoint documentation URL.
           * @format uri
           */
          documentationUrl: string;
          /** The SHA-256 digest of the normalized operation contract. */
          contractHash: string;
          /** The dynamic path, query, and JSON body request schema. */
          requestSchema: Record<string, unknown>;
        }>;
        /** The next opaque catalog cursor when more entries remain. */
        nextCursor: string | null;
        /** Whether discovery used a recent stale catalog after a refresh failure. */
        stale: boolean;
      };
    };
    /** Get TikHub cost and metadata for all endpoints. Requires the /api/v1/tikhub/user/ TikHub path scope. */
    "tikhub.get_all_endpoints_info": {
      input: Record<string, never>;
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        endpoints: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get TikHub cost and metadata for one endpoint. Requires the /api/v1/tikhub/user/ TikHub path scope. */
    "tikhub.get_endpoint_info": {
      input: {
        /**
         * The TikHub endpoint path to inspect or price.
         * @minLength 1
         */
        endpoint: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The endpoint path that was inspected. */
        endpoint: string;
        /** The raw data payload returned by TikHub. */
        endpointInfo: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the current TikHub account daily API usage. Requires the /api/v1/tikhub/user/ TikHub path scope. */
    "tikhub.get_user_daily_usage": {
      input: Record<string, never>;
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The daily usage entries returned by TikHub. */
        usage: Array<Record<string, unknown>>;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the current TikHub account and API key information. Requires the /api/v1/tikhub/user/ TikHub path scope. */
    "tikhub.get_user_info": {
      input: Record<string, never>;
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** TikHub API key metadata returned for the current token. */
        apiKey: {
          /** The API key name. */
          api_key_name?: string;
          /** The TikHub path scopes assigned to the API key. */
          api_key_scopes?: Array<string>;
          /** The API key creation timestamp. */
          created_at?: string;
          /** The API key expiration timestamp when configured. */
          expires_at?: string | null;
          /** The API key status value returned by TikHub. */
          api_key_status?: number;
          [key: string]: unknown;
        } | null;
        /** TikHub account metadata returned for the current token. */
        user: {
          /** The TikHub account email address. */
          email?: string;
          /** The current account balance. */
          balance?: number;
          /** The remaining free credit balance. */
          free_credit?: number;
          /** Whether the TikHub account email is verified. */
          email_verified?: boolean;
          /** Whether the TikHub account is disabled. */
          account_disabled?: boolean;
          /** Whether the TikHub account is active. */
          is_active?: boolean;
          [key: string]: unknown;
        } | null;
        /** The TikHub path scopes assigned to the current API key. */
        scopes: Array<string>;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Invoke one TikHub functional API endpoint at the fixed TikHub API origin. TikHub account endpoints are excluded. */
    "tikhub.invoke_endpoint": {
      input: {
        /** The approved TikHub endpoint HTTP method. */
        method: "GET" | "POST";
        /**
         * The absolute TikHub API path or OpenAPI path template.
         * @minLength 1
         */
        path: string;
        /** The path, query, and optional JSON body sent to one TikHub endpoint. */
        request: {
          /** Path placeholder values keyed by placeholder name. */
          path?: Record<string, unknown>;
          /** Query values keyed by the exact upstream parameter name. */
          query?: Record<string, unknown>;
          /** The JSON request body for an approved POST endpoint, or null when absent. */
          body?: unknown;
        };
      };
      output: {
        /** The HTTP method used for the TikHub request. */
        method: "GET" | "POST";
        /** The final encoded TikHub API path used for the request. */
        path: string;
        /**
         * The successful upstream HTTP status.
         * @minimum 100
         * @maximum 599
         */
        status: number;
        /** The TikHub request identifier when returned. */
        requestId: string | null;
        /** The complete successful TikHub JSON response body. */
        response: Record<string, unknown>;
      };
    };
  }
}
