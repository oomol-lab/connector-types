import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Livespace company. */
    "livespace.create_company": {
      input: {
        /** Raw Livespace company payload accepted by Contact/addCompany or Contact/editCompany. */
        company: Record<string, unknown>;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Create a Livespace deal. */
    "livespace.create_deal": {
      input: {
        /** Raw Livespace deal payload accepted by Deal/addDeal or Deal/editDeal. */
        deal: Record<string, unknown>;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Create a Livespace person. */
    "livespace.create_person": {
      input: {
        /** Raw Livespace contact payload accepted by Contact/addContact or Contact/editContact. */
        contact: Record<string, unknown>;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Create a Livespace todo. */
    "livespace.create_task": {
      input: {
        /** Raw Livespace todo payload accepted by Todo/addTodo or Todo/editTodo. */
        todo: Record<string, unknown>;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Delete a Livespace company. */
    "livespace.delete_company": {
      input: {
        /**
         * Livespace object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Delete a Livespace deal. */
    "livespace.delete_deal": {
      input: {
        /**
         * Livespace object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Delete a Livespace person. */
    "livespace.delete_person": {
      input: {
        /**
         * Livespace object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Delete a Livespace todo. */
    "livespace.delete_task": {
      input: {
        /**
         * Livespace object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get a Livespace company by ID. */
    "livespace.get_company": {
      input: {
        /**
         * Livespace object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get information about the current Livespace API user. */
    "livespace.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get a Livespace deal by ID. */
    "livespace.get_deal": {
      input: {
        /**
         * Livespace object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get a Livespace person by ID. */
    "livespace.get_person": {
      input: {
        /**
         * Livespace object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get a Livespace todo by ID. */
    "livespace.get_task": {
      input: {
        /**
         * Livespace object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** List Livespace todos assigned to an object. */
    "livespace.get_tasks_for_object": {
      input: {
        /**
         * Livespace object type, such as contact, company, or deal.
         * @minLength 1
         */
        type: string;
        /**
         * Livespace object ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** List Livespace companies with simple pagination. */
    "livespace.list_companies": {
      input: {
        /**
         * Maximum number of objects to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Zero-based offset of the first object to return.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** List Livespace deals using optional Livespace filters. */
    "livespace.list_deals": {
      input: {
        /** Raw Livespace Deal/getAll filters. */
        filters?: Record<string, unknown>;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** List Livespace people with simple pagination. */
    "livespace.list_people": {
      input: {
        /**
         * Maximum number of objects to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Zero-based offset of the first object to return.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** List Livespace todos using optional Livespace filters. */
    "livespace.list_tasks": {
      input: {
        /** Raw Livespace Todo/getTodoObjects filters. */
        filters?: Record<string, unknown>;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** List Livespace users visible to the API credential. */
    "livespace.list_users": {
      input: Record<string, never>;
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Livespace companies. */
    "livespace.search_companies": {
      input: {
        /**
         * Search phrase to match against Livespace objects.
         * @minLength 1
         */
        query: string;
        /** Livespace search type filter accepted by the Search module. */
        type?: string;
        /** Livespace search condition accepted by the Search module. */
        condition?: string;
        /**
         * Maximum number of search results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Zero-based offset of the first search result to return.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Livespace deals. */
    "livespace.search_deals": {
      input: {
        /**
         * Search phrase to match against Livespace objects.
         * @minLength 1
         */
        query: string;
        /** Livespace search type filter accepted by the Search module. */
        type?: string;
        /** Livespace search condition accepted by the Search module. */
        condition?: string;
        /**
         * Maximum number of search results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Zero-based offset of the first search result to return.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Search Livespace people. */
    "livespace.search_people": {
      input: {
        /**
         * Search phrase to match against Livespace objects.
         * @minLength 1
         */
        query: string;
        /** Livespace search type filter accepted by the Search module. */
        type?: string;
        /** Livespace search condition accepted by the Search module. */
        condition?: string;
        /**
         * Maximum number of search results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Zero-based offset of the first search result to return.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Update a Livespace company. */
    "livespace.update_company": {
      input: {
        /**
         * Livespace company ID.
         * @minLength 1
         */
        id: string;
        /** Raw Livespace company payload accepted by Contact/addCompany or Contact/editCompany. */
        company: Record<string, unknown>;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Update a Livespace deal. */
    "livespace.update_deal": {
      input: {
        /**
         * Livespace deal ID.
         * @minLength 1
         */
        id: string;
        /** Raw Livespace deal payload accepted by Deal/addDeal or Deal/editDeal. */
        deal: Record<string, unknown>;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Update a Livespace person. */
    "livespace.update_person": {
      input: {
        /**
         * Livespace person ID.
         * @minLength 1
         */
        id: string;
        /** Raw Livespace contact payload accepted by Contact/addContact or Contact/editContact. */
        contact: Record<string, unknown>;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
    /** Update a Livespace todo. */
    "livespace.update_task": {
      input: {
        /**
         * Livespace todo ID.
         * @minLength 1
         */
        id: string;
        /** Raw Livespace todo payload accepted by Todo/addTodo or Todo/editTodo. */
        todo: Record<string, unknown>;
      };
      output: {
        /** Whether Livespace reported the request as successful. */
        status?: boolean;
        /** Livespace numeric result code. */
        result?: number;
        /** Raw Livespace data payload. */
        data?: unknown;
        /** Raw Livespace error payload. */
        error?: unknown;
        [key: string]: unknown;
      };
    };
  }
}
