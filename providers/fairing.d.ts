import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List paginated Fairing survey responses with optional time, cursor, and question filters. */
    "fairing.list_responses": {
      input: {
        /**
         * Response ID cursor used to fetch the page after this response in the active sort direction.
         * @minLength 1
         * @pattern \S
         */
        starting_after?: string;
        /**
         * Response ID cursor used to fetch the page before this response in the active sort direction.
         * @minLength 1
         * @pattern \S
         */
        ending_before?: string;
        /**
         * Return responses inserted at or after this UTC timestamp.
         * @format date-time
         */
        inserted_at_min?: string;
        /**
         * Return responses inserted at or before this UTC timestamp.
         * @format date-time
         */
        inserted_at_max?: string;
        /**
         * Return responses last updated at or after this UTC timestamp.
         * @format date-time
         */
        updated_at_min?: string;
        /**
         * Return responses last updated at or before this UTC timestamp.
         * @format date-time
         */
        updated_at_max?: string;
        /** The Fairing response ordering direction. */
        sort?: "inserted_at_desc" | "inserted_at_asc" | "updated_at_desc" | "updated_at_asc";
        /**
         * The number of responses to fetch per request. Fairing allows up to 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Only return responses for this Fairing question ID.
         * @minimum 1
         */
        question_id?: number;
      };
      output: {
        /** The Fairing responses returned for this page. */
        responses: Array<{
          /**
           * The unique Fairing response ID.
           * @minLength 1
           * @pattern \S
           */
          id?: string;
          /** The customer email address associated with the response. */
          email?: string | null;
          /** The question text associated with the response. */
          question?: string | null;
          /** The Fairing question ID associated with the response. */
          question_id?: number | null;
          /** The Fairing question type associated with the response. */
          question_type?: string | null;
          /** The selected response text, or null for free-form responses. */
          response?: string | null;
          /** The free-form response text when the answer is other. */
          other_response?: string | null;
          /** The ISO 8601 timestamp when Fairing stored the response. */
          inserted_at?: string | null;
          /** The ISO 8601 timestamp when Fairing last updated the response. */
          updated_at?: string | null;
          /** The ISO 8601 timestamp when the customer provided the response. */
          response_provided_at?: string | null;
          [key: string]: unknown;
        }>;
        /** The full URL for the next page of Fairing responses. */
        next: string | null;
        /** The full URL for the previous page of Fairing responses. */
        prev: string | null;
      };
    };
  }
}
