import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Request cancellation of a queued or in-progress fal request by model ID and request ID. */
    "fal_ai.cancel_queue_request": {
      input: {
        /** The model identifier in namespace/name format. */
        modelId: string;
        /** The queued request identifier. */
        requestId: string;
      };
      output: {
        /** The cancellation result status. */
        status: string;
      };
    };
    /** Estimate total fal model cost using either historical API call quantities or expected billing-unit quantities. */
    "fal_ai.estimate_pricing": {
      input: {
        /** The pricing estimation method to use. */
        estimateType: "historical_api_price" | "unit_price";
        /** The raw fal object payload. */
        endpoints: Record<string, unknown>;
      };
      output: {
        /** The estimation method that was applied. */
        estimateType: string;
        /** The aggregate estimated cost across all endpoints. */
        totalCost: number;
        /** The ISO 4217 currency code for the estimate. */
        currency: string;
      };
    };
    /** Retrieve the fal JSON Web Key Set used for webhook signature verification. */
    "fal_ai.get_jwks": {
      input: Record<string, never>;
      output: {
        /** The list of raw fal objects. */
        keys: Array<Record<string, unknown>>;
      };
    };
    /** Discover fal model endpoints with optional text search, status, category, pagination, endpoint filtering, and response expansion. */
    "fal_ai.get_models": {
      input: {
        /** The free-text search query for model discovery. */
        q?: string;
        /**
         * The maximum number of models to return.
         * @minimum 1
         */
        limit?: number;
        /** The pagination cursor from a previous response. */
        cursor?: string;
        /** A single string or a list of strings. */
        expand?: string | Array<string>;
        /** Filter models by active or deprecated status. */
        status?: "active" | "deprecated";
        /** Filter models by category name. */
        category?: string;
        /** A single string or a list of strings. */
        endpointId?: string | Array<string>;
      };
      output: {
        /** The list of raw fal objects. */
        models: Array<Record<string, unknown>>;
        /** Whether additional result pages are available. */
        hasMore: boolean;
        /** The pagination cursor for the next page of results. */
        nextCursor: string | null;
      };
    };
    /** Retrieve unit pricing information for one or more fal model endpoints, including billing unit and currency. */
    "fal_ai.get_pricing": {
      input: {
        /** A single string or a list of strings. */
        endpointId: string | Array<string>;
      };
      output: {
        /** The list of raw fal objects. */
        prices: Array<Record<string, unknown>>;
        /** Whether additional result pages are available. */
        hasMore: boolean;
        /** The pagination cursor for the next page of pricing results. */
        nextCursor: string | null;
      };
    };
    /** Retrieve the stored final result payload for a completed fal queued request. */
    "fal_ai.get_queue_request_result": {
      input: {
        /** The model identifier in namespace/name format. */
        modelId: string;
        /** The queued request identifier. */
        requestId: string;
      };
      output: {
        /** The final request status returned by the queue API. */
        status: string;
        /** The logs captured for the queued request. */
        logs: Array<{
          /** The log message text. */
          message: string;
          /** The log severity level. */
          level: string;
          /** The log source identifier. */
          source: string;
          /** The log timestamp in ISO 8601 format. */
          timestamp: string;
        }>;
        /** The raw fal object payload. */
        response: Record<string, unknown>;
      };
    };
    /** Check the status of a queued fal request, with optional log retrieval for in-progress or completed work. */
    "fal_ai.queue_get_status": {
      input: {
        /** The model identifier in namespace/name format. */
        modelId: string;
        /** The queued request identifier. */
        requestId: string;
        /**
         * Set to 1 to include logs in the response.
         * @minimum 0
         * @maximum 1
         */
        logs?: number;
      };
      output: {
        /** The current queue status. */
        status: string;
        /** The URL for fetching the final queued response. */
        responseUrl?: string | null;
        /** The current queue position when the request is still queued. */
        queuePosition?: number | null;
        /** The queue processing logs. */
        logs?: Array<{
          /** The log message text. */
          message: string;
          /** The log severity level. */
          level: string;
          /** The log source identifier. */
          source: string;
          /** The log timestamp in ISO 8601 format. */
          timestamp: string;
        }>;
      };
    };
    /** Consume fal queue status updates as a streamed sequence of SSE events until the server closes the stream. */
    "fal_ai.queue_get_status_stream": {
      input: {
        /** The model identifier in namespace/name format. */
        modelId: string;
        /** The queued request identifier. */
        requestId: string;
        /**
         * Set to 1 to include logs inside streamed updates.
         * @minimum 0
         * @maximum 1
         */
        logs?: number;
      };
      output: {
        /** The list of raw fal objects. */
        updates: Array<Record<string, unknown>>;
        /** The last status value seen in the stream. */
        finalStatus?: string | null;
        /** The final response URL seen in the stream, if present. */
        responseUrl?: string | null;
      };
    };
  }
}
