import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Favro card in a board or in the configured user's todo list. */
    "favro.create_card": {
      input: {
        /**
         * Name of the new card.
         * @minLength 1
         */
        name: string;
        /**
         * Widget where the card should be created.
         * @minLength 1
         */
        widgetCommonId?: string;
        /**
         * Lane where the card should be created.
         * @minLength 1
         */
        laneId?: string;
        /**
         * Column where the card should be created.
         * @minLength 1
         */
        columnId?: string;
        /** Detailed card description. */
        detailedDescription?: string;
        /** Tag names to add to the card. */
        tags?: Array<string>;
        /**
         * Card start date in ISO 8601 format.
         * @format date-time
         */
        startDate?: string;
        /**
         * Card due date in ISO 8601 format.
         * @format date-time
         */
        dueDate?: string;
        /** Card description format. */
        descriptionFormat?: "plaintext" | "markdown";
      };
      output: {
        /** A Favro API entity. */
        card: Record<string, unknown>;
      };
    };
    /** Retrieve one Favro card by its card identifier. */
    "favro.get_card": {
      input: {
        /**
         * Identifier of the card to retrieve.
         * @minLength 1
         */
        cardId: string;
        /** Card description format. */
        descriptionFormat?: "plaintext" | "markdown";
      };
      output: {
        /** A Favro API entity. */
        card: Record<string, unknown>;
      };
    };
    /** Retrieve the Favro organization configured for this connection. */
    "favro.get_organization": {
      input: Record<string, never>;
      output: {
        /** A Favro API entity. */
        organization: Record<string, unknown>;
      };
    };
    /** Retrieve a Favro board or other widget by its common identifier. */
    "favro.get_widget": {
      input: {
        /**
         * Common identifier of the widget to retrieve.
         * @minLength 1
         */
        widgetCommonId: string;
      };
      output: {
        /** A Favro API entity. */
        widget: Record<string, unknown>;
      };
    };
    /** List Favro cards using a documented board, collection, card, or todo filter. */
    "favro.list_cards": {
      input: {
        /** Whether to return cards from the user's todo list. */
        todoList?: boolean;
        /**
         * Common card identifier used to filter results.
         * @minLength 1
         */
        cardCommonId?: string;
        /**
         * Sequential card identifier used to filter results.
         * @minLength 1
         */
        cardSequentialId?: string;
        /**
         * Widget common identifier used to filter cards.
         * @minLength 1
         */
        widgetCommonId?: string;
        /**
         * Column identifier used to filter cards.
         * @minLength 1
         */
        columnId?: string;
        /**
         * Collection identifier used to filter cards.
         * @minLength 1
         */
        collectionId?: string;
        /** Whether to return unique cards only. */
        unique?: boolean;
        /** Whether to return archived cards. */
        archived?: boolean;
        /** Card description format. */
        descriptionFormat?: "plaintext" | "markdown";
        /**
         * Request identifier returned by the first page.
         * @minLength 1
         */
        requestId?: string;
        /**
         * Zero-based page index to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * Favro backend identifier returned by the first page for routing continuation requests.
         * @minLength 1
         */
        backendIdentifier?: string;
      };
      output: {
        /** Cards returned for this page. */
        cards: Array<Record<string, unknown>>;
        /**
         * Request identifier used to retrieve subsequent pages.
         * @minLength 1
         */
        requestId: string;
        /** Zero-based page index returned by Favro. */
        page: number;
        /** Total number of available pages. */
        pages: number;
        /** Maximum number of entities in this page. */
        limit: number;
        /** Favro backend identifier required when retrieving subsequent pages. */
        backendIdentifier: string | null;
      };
    };
    /** List collections in the configured Favro organization. */
    "favro.list_collections": {
      input: {
        /** Whether to return archived collections. */
        archived?: boolean;
        /**
         * Request identifier returned by the first page.
         * @minLength 1
         */
        requestId?: string;
        /**
         * Zero-based page index to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * Favro backend identifier returned by the first page for routing continuation requests.
         * @minLength 1
         */
        backendIdentifier?: string;
      };
      output: {
        /** Collections returned for this page. */
        collections: Array<Record<string, unknown>>;
        /**
         * Request identifier used to retrieve subsequent pages.
         * @minLength 1
         */
        requestId: string;
        /** Zero-based page index returned by Favro. */
        page: number;
        /** Total number of available pages. */
        pages: number;
        /** Maximum number of entities in this page. */
        limit: number;
        /** Favro backend identifier required when retrieving subsequent pages. */
        backendIdentifier: string | null;
      };
    };
    /** List Favro organizations accessible to the configured user and API token. */
    "favro.list_organizations": {
      input: {
        /**
         * Request identifier returned by the first page.
         * @minLength 1
         */
        requestId?: string;
        /**
         * Zero-based page index to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * Favro backend identifier returned by the first page for routing continuation requests.
         * @minLength 1
         */
        backendIdentifier?: string;
      };
      output: {
        /** Organizations returned for this page. */
        organizations: Array<Record<string, unknown>>;
        /**
         * Request identifier used to retrieve subsequent pages.
         * @minLength 1
         */
        requestId: string;
        /** Zero-based page index returned by Favro. */
        page: number;
        /** Total number of available pages. */
        pages: number;
        /** Maximum number of entities in this page. */
        limit: number;
        /** Favro backend identifier required when retrieving subsequent pages. */
        backendIdentifier: string | null;
      };
    };
    /** List boards and other widgets in the configured Favro organization. */
    "favro.list_widgets": {
      input: {
        /**
         * Collection identifier used to filter widgets.
         * @minLength 1
         */
        collectionId?: string;
        /** Whether to return archived widgets. */
        archived?: boolean;
        /**
         * Request identifier returned by the first page.
         * @minLength 1
         */
        requestId?: string;
        /**
         * Zero-based page index to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * Favro backend identifier returned by the first page for routing continuation requests.
         * @minLength 1
         */
        backendIdentifier?: string;
      };
      output: {
        /** Widgets returned for this page. */
        widgets: Array<Record<string, unknown>>;
        /**
         * Request identifier used to retrieve subsequent pages.
         * @minLength 1
         */
        requestId: string;
        /** Zero-based page index returned by Favro. */
        page: number;
        /** Total number of available pages. */
        pages: number;
        /** Maximum number of entities in this page. */
        limit: number;
        /** Favro backend identifier required when retrieving subsequent pages. */
        backendIdentifier: string | null;
      };
    };
    /** Update selected fields on an existing Favro card. */
    "favro.update_card": {
      input: {
        /**
         * Identifier of the card to update.
         * @minLength 1
         */
        cardId: string;
        /** Updated card name. */
        name?: string;
        /** Updated detailed card description. */
        detailedDescription?: string;
        /**
         * Widget where the card should be moved.
         * @minLength 1
         */
        widgetCommonId?: string;
        /**
         * Lane where the card should be moved.
         * @minLength 1
         */
        laneId?: string;
        /**
         * Column where the card should be moved.
         * @minLength 1
         */
        columnId?: string;
        /**
         * Updated card start date in ISO 8601 format.
         * @format date-time
         */
        startDate?: string | null;
        /**
         * Updated card due date in ISO 8601 format.
         * @format date-time
         */
        dueDate?: string | null;
        /** Whether the card should be archived. */
        archived?: boolean;
        /** Card description format. */
        descriptionFormat?: "plaintext" | "markdown";
      };
      output: {
        /** A Favro API entity. */
        card: Record<string, unknown>;
      };
    };
  }
}
