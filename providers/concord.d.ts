import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get profile and current-organization information for the Concord API key owner. */
    "concord.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current user returned by Concord. */
        user: Record<string, unknown>;
      };
    };
    /** Get one Concord organization by its numeric ID. */
    "concord.get_organization": {
      input: {
        /**
         * The numeric Concord organization ID.
         * @minimum 1
         */
        organizationId: number;
      };
      output: {
        /** The organization returned by Concord. */
        organization: Record<string, unknown>;
      };
    };
    /** List and search agreements accessible to the current user in a Concord organization. */
    "concord.list_agreements": {
      input: {
        /**
         * The numeric Concord organization ID.
         * @minimum 1
         */
        organizationId: number;
        /**
         * The agreement stages to include.
         * @minItems 1
         */
        statuses: Array<"DRAFT" | "VALIDATION" | "NEGOTIATION" | "SIGNING" | "UNKNOWN_CONTRACT" | "FUTURE_CONTRACT" | "CURRENT_CONTRACT" | "COMPLETED_CONTRACT" | "COMPLETED_CANCEL_CONTRACT" | "COMPLETED_CONTRACT_RENEWABLE" | "BROKEN" | "TRASHED" | "NEGO_INVITE" | "TEMPLATE" | "TEMPLATE_AUTO">;
        /**
         * The zero-based result page to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The maximum number of agreements per page.
         * @minimum 1
         */
        numberOfItemsByPage?: number;
        /**
         * Text to match against agreement titles and descriptions.
         * @minLength 1
         */
        search?: string;
        /** Whether to return only agreements displayed in the inbox. */
        isInboxed?: boolean;
        /** Whether to return only bookmarked agreements. */
        isBookmarked?: boolean;
        /**
         * The Concord column name used to sort agreements.
         * @minLength 1
         */
        sortByColumn?: string;
        /** Whether to sort agreements in ascending order. */
        sortByAsc?: boolean;
        /** The numeric tag IDs used to filter agreements. */
        tagIds?: Array<number>;
      };
      output: {
        /** The agreements on this page. */
        items: Array<Record<string, unknown>>;
        /** The number of items in this response. */
        numberOfItems: number;
        /** The maximum number of items on one page. */
        numberOfItemsByPage: number;
        /** The current page number. */
        page: number;
        /** The total matching documents and invitations. */
        total: number;
        /** The total matching invitations. */
        totalInvitations: number;
        /** The optional Concord result status. */
        result?: string;
      };
    };
    /** List the folder tree shared with the current user in a Concord organization. */
    "concord.list_folders": {
      input: {
        /**
         * The numeric Concord organization ID.
         * @minimum 1
         */
        organizationId: number;
      };
      output: {
        /** The root folder tree returned by Concord. */
        folder: Record<string, unknown>;
      };
    };
    /** List the Concord organizations available to the API key owner. */
    "concord.list_organizations": {
      input: Record<string, never>;
      output: {
        /** The available Concord organizations. */
        organizations: Array<Record<string, unknown>>;
      };
    };
  }
}
