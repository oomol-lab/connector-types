import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a Guru card with additional details by card ID. */
    "guru.get_card": {
      input: {
        /**
         * The Guru card ID.
         * @minLength 1
         */
        cardId: string;
      };
      output: {
        /** A Guru object returned by the API. */
        card: Record<string, unknown>;
      };
    };
    /** Get the Guru user or collection identity for the authenticated API token. */
    "guru.get_current_identity": {
      input: Record<string, never>;
      output: {
        /** A Guru object returned by the API. */
        identity: Record<string, unknown>;
      };
    };
    /** Get Guru trust and card-count statistics for a team. */
    "guru.get_team_stats": {
      input: {
        /**
         * The Guru team ID.
         * @minLength 1
         */
        teamId: string;
      };
      output: {
        /** A Guru object returned by the API. */
        teamStats: Record<string, unknown>;
      };
    };
    /** List Guru collections visible to the authenticated API token. */
    "guru.list_collections": {
      input: {
        /**
         * Search term for filtering Guru collections.
         * @minLength 1
         */
        search?: string;
        /**
         * Guru collection sort field.
         * @minLength 1
         */
        sortField?: string;
        /**
         * Guru collection sort order.
         * @minLength 1
         */
        sortDir?: string;
        /**
         * Guru collection filter expression.
         * @minLength 1
         */
        filter?: string;
      };
      output: {
        /** Guru collections returned by the API. */
        collections: Array<Record<string, unknown>>;
      };
    };
    /** Search Guru cards visible to the authenticated API token. */
    "guru.search_cards": {
      input: {
        /**
         * The Guru Query Language string to search with.
         * @minLength 1
         */
        q?: string;
        /**
         * Search terms to pass to Guru.
         * @minLength 1
         */
        searchTerms?: string;
        /** The Guru search query type. */
        queryType?: "cards" | "questions" | "archived" | "draft" | "legacy" | "search_cards";
        /** Whether to include archived cards in search results. */
        showArchived?: boolean;
        /**
         * Maximum number of cards to return, up to 50.
         * @minimum 1
         * @maximum 50
         */
        maxResults?: number;
        /** The Guru card search sort field. */
        sortField?: "lastModified" | "lastModifiedBy" | "boardCount" | "verificationState" | "copyCount" | "viewCount" | "favoriteCount" | "followerCount" | "dateCreated" | "verificationInterval" | "verifier" | "owner" | "originalOwner" | "lastVerifiedBy" | "lastVerified" | "verificationReason" | "popularity" | "unverifiedViewsCopies" | "nextVerificationDate" | "collection" | "title" | "followedDate" | "pendingAutoArchive" | "relevancy";
        /** The Guru sort order. */
        sortOrder?: "ASC" | "DESC";
        /** Whether Guru should include card attributes. */
        includeCardAttributes?: boolean;
        /**
         * Paging token returned by a previous Guru Link header.
         * @minLength 1
         */
        token?: string;
      };
      output: {
        /** Guru cards returned for the search. */
        cards: Array<Record<string, unknown>>;
        /** Pagination links parsed from the Guru Link response header. */
        links?: {
          /**
           * The URL for the next page of results.
           * @format uri
           */
          next?: string;
          /**
           * The URL for the previous page of results.
           * @format uri
           */
          previous?: string;
          /** The next-page token parsed from the next link URL. */
          nextToken?: string;
          /** The previous-page token parsed from the previous link URL. */
          previousToken?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
