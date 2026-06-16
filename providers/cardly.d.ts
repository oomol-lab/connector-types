import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send a JSON payload to Cardly's authenticated echo endpoint for credential and request debugging. */
    "cardly.echo": {
      input: {
        /**
         * An optional query value that Cardly echoes back.
         * @minLength 1
         * @pattern \S
         */
        test?: string;
        /** An arbitrary JSON object to send to Cardly and echo back. */
        body?: Record<string, unknown>;
      };
      output: {
        /** The Cardly response state object. */
        state: {
          /** Whether Cardly reported the request as successful. */
          success?: boolean;
          /** The status code reported by Cardly. */
          code?: number;
          /** The status message returned by Cardly. */
          message?: string;
          [key: string]: unknown;
        };
        /** The HTTP method Cardly saw for the echo request. */
        method: string | null;
        /** The full URL Cardly saw for the echo request. */
        url: string | null;
        /** The request headers Cardly echoed back. */
        headers: Record<string, unknown>;
        /** The query parameters Cardly echoed back. */
        params: Record<string, unknown>;
        /** The JSON request body Cardly echoed back. */
        body: Record<string, unknown>;
        /** The raw Cardly response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve the current Cardly card credit and gift credit balances. */
    "cardly.get_balance": {
      input: Record<string, never>;
      output: {
        /** The Cardly response state object. */
        state: {
          /** Whether Cardly reported the request as successful. */
          success?: boolean;
          /** The status code reported by Cardly. */
          code?: number;
          /** The status message returned by Cardly. */
          message?: string;
          [key: string]: unknown;
        };
        /** The current Cardly card credit balance. */
        balance: number | null;
        /** The current Cardly gift credit balance when returned. */
        giftCredit: {
          /** The gift credit balance value. */
          balance: number | null;
          /** The currency for the gift credit balance. */
          currency: string | null;
          /** The raw Cardly gift credit object. */
          raw?: Record<string, unknown>;
        } | null;
        /** The raw Cardly response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Cardly account credit history records with pagination and time filters. */
    "cardly.list_credit_history": {
      input: {
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The zero-based record offset to start listing from.
         * @minimum 0
         */
        offset?: number;
        /**
         * Return records with an effective time before this YYYY-MM-DD HH:ii:ss value.
         * @minLength 1
         * @pattern \S
         */
        effectiveTimeLt?: string;
        /**
         * Return records with an effective time before or equal to this YYYY-MM-DD HH:ii:ss value.
         * @minLength 1
         * @pattern \S
         */
        effectiveTimeLte?: string;
        /**
         * Return records with an effective time after this YYYY-MM-DD HH:ii:ss value.
         * @minLength 1
         * @pattern \S
         */
        effectiveTimeGt?: string;
        /**
         * Return records with an effective time after or equal to this YYYY-MM-DD HH:ii:ss value.
         * @minLength 1
         * @pattern \S
         */
        effectiveTimeGte?: string;
      };
      output: {
        /** The Cardly response state object. */
        state: {
          /** Whether Cardly reported the request as successful. */
          success?: boolean;
          /** The status code reported by Cardly. */
          code?: number;
          /** The status message returned by Cardly. */
          message?: string;
          [key: string]: unknown;
        };
        /** The pagination metadata returned by Cardly. */
        meta: {
          /** The page size used by Cardly when present. */
          limit?: number | null;
          /** The result offset used by Cardly when present. */
          offset?: number | null;
          /** The total number of records when Cardly returns it. */
          total?: number | null;
          [key: string]: unknown;
        };
        /** The Cardly credit history records. */
        results: Array<Record<string, unknown>>;
        /** The raw Cardly response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Cardly fonts available for handwriting and text personalization. */
    "cardly.list_fonts": {
      input: {
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The zero-based record offset to start listing from.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The Cardly response state object. */
        state: {
          /** Whether Cardly reported the request as successful. */
          success?: boolean;
          /** The status code reported by Cardly. */
          code?: number;
          /** The status message returned by Cardly. */
          message?: string;
          [key: string]: unknown;
        };
        /** The pagination metadata returned by Cardly. */
        meta: {
          /** The page size used by Cardly when present. */
          limit?: number | null;
          /** The result offset used by Cardly when present. */
          offset?: number | null;
          /** The total number of records when Cardly returns it. */
          total?: number | null;
          [key: string]: unknown;
        };
        /** The Cardly font records. */
        results: Array<Record<string, unknown>>;
        /** The raw Cardly response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Cardly gift credit history records with pagination and time filters. */
    "cardly.list_gift_credit_history": {
      input: {
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The zero-based record offset to start listing from.
         * @minimum 0
         */
        offset?: number;
        /**
         * Return records with an effective time before this YYYY-MM-DD HH:ii:ss value.
         * @minLength 1
         * @pattern \S
         */
        effectiveTimeLt?: string;
        /**
         * Return records with an effective time before or equal to this YYYY-MM-DD HH:ii:ss value.
         * @minLength 1
         * @pattern \S
         */
        effectiveTimeLte?: string;
        /**
         * Return records with an effective time after this YYYY-MM-DD HH:ii:ss value.
         * @minLength 1
         * @pattern \S
         */
        effectiveTimeGt?: string;
        /**
         * Return records with an effective time after or equal to this YYYY-MM-DD HH:ii:ss value.
         * @minLength 1
         * @pattern \S
         */
        effectiveTimeGte?: string;
      };
      output: {
        /** The Cardly response state object. */
        state: {
          /** Whether Cardly reported the request as successful. */
          success?: boolean;
          /** The status code reported by Cardly. */
          code?: number;
          /** The status message returned by Cardly. */
          message?: string;
          [key: string]: unknown;
        };
        /** The pagination metadata returned by Cardly. */
        meta: {
          /** The page size used by Cardly when present. */
          limit?: number | null;
          /** The result offset used by Cardly when present. */
          offset?: number | null;
          /** The total number of records when Cardly returns it. */
          total?: number | null;
          [key: string]: unknown;
        };
        /** The Cardly gift credit history records. */
        results: Array<Record<string, unknown>>;
        /** The raw Cardly response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Cardly media options that can be used when selecting card products. */
    "cardly.list_media": {
      input: {
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The zero-based record offset to start listing from.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The Cardly response state object. */
        state: {
          /** Whether Cardly reported the request as successful. */
          success?: boolean;
          /** The status code reported by Cardly. */
          code?: number;
          /** The status message returned by Cardly. */
          message?: string;
          [key: string]: unknown;
        };
        /** The pagination metadata returned by Cardly. */
        meta: {
          /** The page size used by Cardly when present. */
          limit?: number | null;
          /** The result offset used by Cardly when present. */
          offset?: number | null;
          /** The total number of records when Cardly returns it. */
          total?: number | null;
          [key: string]: unknown;
        };
        /** The Cardly media records. */
        results: Array<Record<string, unknown>>;
        /** The raw Cardly response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Cardly writing styles available for generated handwriting. */
    "cardly.list_writing_styles": {
      input: {
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The zero-based record offset to start listing from.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The Cardly response state object. */
        state: {
          /** Whether Cardly reported the request as successful. */
          success?: boolean;
          /** The status code reported by Cardly. */
          code?: number;
          /** The status message returned by Cardly. */
          message?: string;
          [key: string]: unknown;
        };
        /** The pagination metadata returned by Cardly. */
        meta: {
          /** The page size used by Cardly when present. */
          limit?: number | null;
          /** The result offset used by Cardly when present. */
          offset?: number | null;
          /** The total number of records when Cardly returns it. */
          total?: number | null;
          [key: string]: unknown;
        };
        /** The Cardly writing style records. */
        results: Array<Record<string, unknown>>;
        /** The raw Cardly response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
