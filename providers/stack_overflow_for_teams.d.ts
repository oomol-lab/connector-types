import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the user represented by the connected Stack Internal personal access token. */
    "stack_overflow_for_teams.get_current_user": {
      input: Record<string, never>;
      output: {
        /** One resource returned by the Stack Internal API. */
        user: Record<string, unknown>;
      };
    };
    /** Retrieve one question from the connected Stack Internal team by ID. */
    "stack_overflow_for_teams.get_question": {
      input: {
        /**
         * The question ID to retrieve.
         * @minimum 1
         */
        questionId: number;
      };
      output: {
        /** One resource returned by the Stack Internal API. */
        question: Record<string, unknown>;
      };
    };
    /** List answers for one question in the connected Stack Internal team. */
    "stack_overflow_for_teams.list_answers": {
      input: {
        /**
         * The question ID whose answers should be listed.
         * @minimum 1
         */
        questionId: number;
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /** The number of records to return per page. */
        pageSize?: 15 | 30 | 50 | 100;
        /** The answer sort mode. */
        sort?: "score" | "modified" | "creation";
        /** The result sort order. */
        order?: "asc" | "desc";
      };
      output: {
        /** The total number of matching records. */
        totalCount: number;
        /** The number of records returned per page. */
        pageSize: number;
        /** The current page number. */
        page: number;
        /** The total number of available pages. */
        totalPages: number;
        /** The sort mode applied by Stack Internal. */
        sort: string;
        /** The sort order applied by Stack Internal. */
        order?: string;
        /** The resources on the current page. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List questions from the connected Stack Internal team with optional filters. */
    "stack_overflow_for_teams.list_questions": {
      input: {
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /** The number of records to return per page. */
        pageSize?: 15 | 30 | 50 | 100;
        /** The question sort mode. */
        sort?: "activity" | "creation" | "score";
        /** The result sort order. */
        order?: "asc" | "desc";
        /** Whether to return only answered or unanswered questions. */
        isAnswered?: boolean;
        /** Whether to filter by the presence of an accepted answer. */
        hasAcceptedAnswer?: boolean;
        /**
         * The author user ID to filter by.
         * @minimum 1
         */
        authorId?: number;
        /**
         * The earliest question creation timestamp to include.
         * @format date-time
         */
        from?: string;
        /**
         * The latest question creation timestamp to include.
         * @format date-time
         */
        to?: string;
      };
      output: {
        /** The total number of matching records. */
        totalCount: number;
        /** The number of records returned per page. */
        pageSize: number;
        /** The current page number. */
        page: number;
        /** The total number of available pages. */
        totalPages: number;
        /** The sort mode applied by Stack Internal. */
        sort: string;
        /** The sort order applied by Stack Internal. */
        order?: string;
        /** The resources on the current page. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List tags from the connected Stack Internal team with optional filters. */
    "stack_overflow_for_teams.list_tags": {
      input: {
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /** The number of records to return per page. */
        pageSize?: 15 | 30 | 50 | 100;
        /** The tag sort mode. */
        sort?: "name" | "postCount" | "creationDate";
        /** The result sort order. */
        order?: "asc" | "desc";
        /** A partial tag name to match. */
        partialName?: string;
        /** Whether returned tags must have subject matter experts. */
        hasSmes?: boolean;
        /** Whether returned tags must have synonyms. */
        hasSynonyms?: boolean;
      };
      output: {
        /** The total number of matching records. */
        totalCount: number;
        /** The number of records returned per page. */
        pageSize: number;
        /** The current page number. */
        page: number;
        /** The total number of available pages. */
        totalPages: number;
        /** The sort mode applied by Stack Internal. */
        sort: string;
        /** The sort order applied by Stack Internal. */
        order?: string;
        /** The resources on the current page. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Search questions, answers, and articles in the connected Stack Internal team. */
    "stack_overflow_for_teams.search": {
      input: {
        /** The text query to search for. */
        query?: string;
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /** The number of records to return per page. */
        pageSize?: 15 | 30 | 50 | 100;
        /** The search result sort mode. */
        sort?: "relevance" | "newest" | "active" | "score";
      };
      output: {
        /** The total number of matching records. */
        totalCount: number;
        /** The number of records returned per page. */
        pageSize: number;
        /** The current page number. */
        page: number;
        /** The total number of available pages. */
        totalPages: number;
        /** The sort mode applied by Stack Internal. */
        sort: string;
        /** The sort order applied by Stack Internal. */
        order?: string;
        /** The resources on the current page. */
        items: Array<Record<string, unknown>>;
      };
    };
  }
}
