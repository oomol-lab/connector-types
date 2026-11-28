import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a LurkAPI endpoint by its path with query parameters, and get its JSON answer. Use find_endpoints to see the paths, parameters and prices. A call that reached the platform is charged, a not-found answer included; invalid parameters and server errors are free. */
    "lurkapi.call_endpoint": {
      input: {
        /**
         * The endpoint path from find_endpoints, such as /v1/tiktok/profile.
         * @minLength 1
         */
        path: string;
        /** Query parameters keyed by their exact names from find_endpoints, such as { handle: nike }. Values are strings, numbers or booleans. */
        query?: Record<string, unknown>;
      };
      output: {
        /** The endpoint path that was called. */
        path: string;
        /** The credits this call cost. */
        creditsCharged: number | null;
        /** The credits left on the account after this call. */
        creditsRemaining: number | null;
        /** The endpoint's answer without the success and credit fields. */
        data: Record<string, unknown>;
      };
    };
    /** Find LurkAPI endpoints by platform or by what they return, with their parameters and price. The list is read from LurkAPI's live OpenAPI document, so new endpoints appear without a provider update. Free to call. */
    "lurkapi.find_endpoints": {
      input: {
        /**
         * Words to match against the platform, title, description and path, such as tiktok comments.
         * @maxLength 200
         */
        query?: string;
        /**
         * A platform name to keep, such as TikTok, Instagram, Reddit or YouTube.
         * @maxLength 100
         */
        platform?: string;
        /**
         * The zero-based offset into the matching endpoints.
         * @minimum 0
         * @default 0
         */
        offset?: number;
        /**
         * The most endpoints to return.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** The matching endpoints in this page. */
        endpoints: Array<{
          /**
           * The API path to pass to call_endpoint, such as /v1/tiktok/profile.
           * @minLength 1
           */
          path: string;
          /** The platform the endpoint reads, such as TikTok or Reddit. */
          platform: string;
          /** A short name for the endpoint. */
          title: string;
          /** What the endpoint returns, when to use it, and the errors it answers. */
          description: string;
          /** The base credits one successful call costs. Some endpoints add paid steps. */
          credits: number | null;
          /** The endpoint's documentation page, with a real response. */
          documentationUrl: string | null;
          /** The query parameters the endpoint accepts. */
          parameters: Array<{
            /**
             * The exact query parameter name to pass in call_endpoint's query.
             * @minLength 1
             */
            name: string;
            /** Whether the endpoint needs this parameter. */
            required: boolean;
            /** The JSON type of the value, such as string, number or boolean. */
            type: string;
            /** What the parameter means and the values it accepts. */
            description: string;
            /** The values the parameter accepts, when it is a fixed list. */
            enum: Array<unknown> | null;
          }>;
        }>;
        /**
         * How many endpoints match the filters.
         * @minimum 0
         */
        total: number;
        /** The offset of the next page, or null when this is the last. */
        nextOffset: number | null;
      };
    };
    /** Get the credits left on the LurkAPI account the connected key belongs to. Free to call. */
    "lurkapi.get_credit_balance": {
      input: Record<string, never>;
      output: {
        /** The credits the account can still spend. */
        creditsRemaining: number;
        /** Once a day (UTC), a balance below this is raised to it on the first call. */
        dailyTopUp: number | null;
        /** When the next daily top-up can happen, as an ISO 8601 timestamp. */
        nextTopUpAt: string | null;
      };
    };
  }
}
