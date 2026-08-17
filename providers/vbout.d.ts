import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a contact in a VBOUT email marketing list. */
    "vbout.create_contact": {
      input: {
        /**
         * The numeric VBOUT email list identifier.
         * @minimum 1
         */
        listId: number;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /** The VBOUT contact subscription status. */
        status: "Active" | "Disactive";
        /**
         * The contact IP address recorded by VBOUT.
         * @minLength 1
         */
        ipAddress?: string;
        /** Custom VBOUT list fields keyed by their numeric field identifiers. */
        fields?: Record<string, string>;
      };
      output: {
        /**
         * VBOUT response status, normally ok for successful requests.
         * @minLength 1
         */
        status: string;
        /** Creation result data. */
        data?: Record<string, unknown>;
        /** Rate-limit details returned by VBOUT. */
        rateLimit?: {
          /** Maximum requests allowed in the current window. */
          limit?: string;
          /** Requests already made in the current window. */
          requests?: string;
          /** Requests remaining in the current window. */
          remaining?: string;
          /** Whether the current request reached the rate limit. */
          reached?: string;
          /** Unix timestamp when the current rate-limit window resets. */
          reset?: string;
          /** Seconds to wait before retrying after reaching the limit. */
          after?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a contact from a specific VBOUT email marketing list. */
    "vbout.delete_contact": {
      input: {
        /**
         * The numeric VBOUT contact identifier.
         * @minimum 1
         */
        contactId: number;
        /**
         * The numeric VBOUT email list identifier containing the contact.
         * @minimum 1
         */
        listId: number;
      };
      output: {
        /**
         * VBOUT response status, normally ok for successful requests.
         * @minLength 1
         */
        status: string;
        /** Deletion result data. */
        data?: Record<string, unknown>;
        /** Rate-limit details returned by VBOUT. */
        rateLimit?: {
          /** Maximum requests allowed in the current window. */
          limit?: string;
          /** Requests already made in the current window. */
          requests?: string;
          /** Requests remaining in the current window. */
          remaining?: string;
          /** Whether the current request reached the rate limit. */
          reached?: string;
          /** Unix timestamp when the current rate-limit window resets. */
          reset?: string;
          /** Seconds to wait before retrying after reaching the limit. */
          after?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the business profile associated with the current VBOUT API key. */
    "vbout.get_account": {
      input: Record<string, never>;
      output: {
        /**
         * VBOUT response status, normally ok for successful requests.
         * @minLength 1
         */
        status: string;
        /** VBOUT business details. */
        data?: Record<string, unknown>;
        /** Rate-limit details returned by VBOUT. */
        rateLimit?: {
          /** Maximum requests allowed in the current window. */
          limit?: string;
          /** Requests already made in the current window. */
          requests?: string;
          /** Requests remaining in the current window. */
          remaining?: string;
          /** Whether the current request reached the rate limit. */
          reached?: string;
          /** Unix timestamp when the current rate-limit window resets. */
          reset?: string;
          /** Seconds to wait before retrying after reaching the limit. */
          after?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one VBOUT contact by its numeric contact identifier. */
    "vbout.get_contact": {
      input: {
        /**
         * The numeric VBOUT contact identifier.
         * @minimum 1
         */
        contactId: number;
      };
      output: {
        /**
         * VBOUT response status, normally ok for successful requests.
         * @minLength 1
         */
        status: string;
        /** The requested contact details. */
        data?: Record<string, unknown>;
        /** Rate-limit details returned by VBOUT. */
        rateLimit?: {
          /** Maximum requests allowed in the current window. */
          limit?: string;
          /** Requests already made in the current window. */
          requests?: string;
          /** Requests remaining in the current window. */
          remaining?: string;
          /** Whether the current request reached the rate limit. */
          reached?: string;
          /** Unix timestamp when the current rate-limit window resets. */
          reset?: string;
          /** Seconds to wait before retrying after reaching the limit. */
          after?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one VBOUT email marketing list and its configured custom fields. */
    "vbout.get_list": {
      input: {
        /**
         * The numeric VBOUT email list identifier.
         * @minimum 1
         */
        listId: number;
      };
      output: {
        /**
         * VBOUT response status, normally ok for successful requests.
         * @minLength 1
         */
        status: string;
        /** The requested list details. */
        data?: Record<string, unknown>;
        /** Rate-limit details returned by VBOUT. */
        rateLimit?: {
          /** Maximum requests allowed in the current window. */
          limit?: string;
          /** Requests already made in the current window. */
          requests?: string;
          /** Requests remaining in the current window. */
          remaining?: string;
          /** Whether the current request reached the rate limit. */
          reached?: string;
          /** Unix timestamp when the current rate-limit window resets. */
          reset?: string;
          /** Seconds to wait before retrying after reaching the limit. */
          after?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List contacts belonging to a specific VBOUT email marketing list. */
    "vbout.list_contacts": {
      input: {
        /**
         * The numeric VBOUT email list identifier.
         * @minimum 1
         */
        listId: number;
      };
      output: {
        /**
         * VBOUT response status, normally ok for successful requests.
         * @minLength 1
         */
        status: string;
        /** The contacts collection, including count and contact items. */
        data?: Record<string, unknown>;
        /** Rate-limit details returned by VBOUT. */
        rateLimit?: {
          /** Maximum requests allowed in the current window. */
          limit?: string;
          /** Requests already made in the current window. */
          requests?: string;
          /** Requests remaining in the current window. */
          remaining?: string;
          /** Whether the current request reached the rate limit. */
          reached?: string;
          /** Unix timestamp when the current rate-limit window resets. */
          reset?: string;
          /** Seconds to wait before retrying after reaching the limit. */
          after?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List email marketing lists available in the connected VBOUT account. */
    "vbout.list_lists": {
      input: Record<string, never>;
      output: {
        /**
         * VBOUT response status, normally ok for successful requests.
         * @minLength 1
         */
        status: string;
        /** The lists collection, including count and list items. */
        data?: Record<string, unknown>;
        /** Rate-limit details returned by VBOUT. */
        rateLimit?: {
          /** Maximum requests allowed in the current window. */
          limit?: string;
          /** Requests already made in the current window. */
          requests?: string;
          /** Requests remaining in the current window. */
          remaining?: string;
          /** Whether the current request reached the rate limit. */
          reached?: string;
          /** Unix timestamp when the current rate-limit window resets. */
          reset?: string;
          /** Seconds to wait before retrying after reaching the limit. */
          after?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update standard or custom fields for an existing VBOUT contact. */
    "vbout.update_contact": {
      input: {
        /**
         * The numeric VBOUT contact identifier.
         * @minimum 1
         */
        contactId: number;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /**
         * The contact IP address recorded by VBOUT.
         * @minLength 1
         */
        ipAddress?: string;
        /** The VBOUT contact subscription status. */
        status?: "Active" | "Disactive";
        /** Custom VBOUT list fields keyed by their numeric field identifiers. */
        fields?: Record<string, string>;
      };
      output: {
        /**
         * VBOUT response status, normally ok for successful requests.
         * @minLength 1
         */
        status: string;
        /** Update result data. */
        data?: Record<string, unknown>;
        /** Rate-limit details returned by VBOUT. */
        rateLimit?: {
          /** Maximum requests allowed in the current window. */
          limit?: string;
          /** Requests already made in the current window. */
          requests?: string;
          /** Requests remaining in the current window. */
          remaining?: string;
          /** Whether the current request reached the rate limit. */
          reached?: string;
          /** Unix timestamp when the current rate-limit window resets. */
          reset?: string;
          /** Seconds to wait before retrying after reaching the limit. */
          after?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
