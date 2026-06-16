import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a contact in an EmailOctopus mailing list. */
    "emailoctopus.create_list_contact": {
      input: {
        /**
         * EmailOctopus list identifier.
         * @minLength 1
         */
        list_id: string;
        /**
         * Contact email address accepted by the official EmailOctopus API.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email_address: string;
        /** Custom contact fields object accepted by the official EmailOctopus API. */
        fields?: Record<string, unknown>;
        /** Tag names accepted by the official create-contact API. */
        tags?: Array<string>;
        /**
         * Contact status value accepted by the official EmailOctopus API.
         * @minLength 1
         */
        status?: string;
      };
      output: {
        /** Contact object returned by the official EmailOctopus API. */
        contact: Record<string, unknown>;
      };
    };
    /** Delete a contact from an EmailOctopus mailing list. */
    "emailoctopus.delete_list_contact": {
      input: {
        /**
         * EmailOctopus list identifier.
         * @minLength 1
         */
        list_id: string;
        /**
         * EmailOctopus contact identifier.
         * @minLength 1
         */
        contact_id: string;
      };
      output: {
        /** Whether EmailOctopus accepted the operation. */
        success: boolean;
      };
    };
    /** Fetch a single EmailOctopus campaign by ID. */
    "emailoctopus.get_campaign": {
      input: {
        /**
         * EmailOctopus campaign identifier.
         * @minLength 1
         */
        campaign_id: string;
      };
      output: {
        /** Campaign object returned by the official EmailOctopus API. */
        campaign: Record<string, unknown>;
      };
    };
    /** Fetch a single EmailOctopus mailing list by ID. */
    "emailoctopus.get_list": {
      input: {
        /**
         * EmailOctopus list identifier.
         * @minLength 1
         */
        list_id: string;
      };
      output: {
        /** List object returned by the official EmailOctopus API. */
        list: Record<string, unknown>;
      };
    };
    /** Fetch a single contact from an EmailOctopus mailing list. */
    "emailoctopus.get_list_contact": {
      input: {
        /**
         * EmailOctopus list identifier.
         * @minLength 1
         */
        list_id: string;
        /**
         * EmailOctopus contact identifier.
         * @minLength 1
         */
        contact_id: string;
      };
      output: {
        /** Contact object returned by the official EmailOctopus API. */
        contact: Record<string, unknown>;
      };
    };
    /** List EmailOctopus campaigns available to the current API key. */
    "emailoctopus.list_campaigns": {
      input: {
        /**
         * Maximum number of records to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Specific 1-based page number to request.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Campaigns returned by the official EmailOctopus API. */
        campaigns: Array<Record<string, unknown>>;
        /** Pagination object returned by the official EmailOctopus API. */
        paging?: {
          /**
           * Page size returned by the official API.
           * @minimum 1
           */
          limit?: number;
          /**
           * Current page number returned by the official API.
           * @minimum 1
           */
          current_page?: number;
          /**
           * Total number of pages returned by the official API.
           * @minimum 1
           */
          total_pages?: number;
          /** URL of the next page, if available. */
          next_page?: string | null;
          /** URL of the previous page, if available. */
          prev_page?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List contacts in a specific EmailOctopus mailing list. */
    "emailoctopus.list_list_contacts": {
      input: {
        /**
         * EmailOctopus list identifier.
         * @minLength 1
         */
        list_id: string;
        /**
         * Maximum number of records to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Specific 1-based page number to request.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Contacts returned by the official EmailOctopus API. */
        contacts: Array<Record<string, unknown>>;
        /** Pagination object returned by the official EmailOctopus API. */
        paging?: {
          /**
           * Page size returned by the official API.
           * @minimum 1
           */
          limit?: number;
          /**
           * Current page number returned by the official API.
           * @minimum 1
           */
          current_page?: number;
          /**
           * Total number of pages returned by the official API.
           * @minimum 1
           */
          total_pages?: number;
          /** URL of the next page, if available. */
          next_page?: string | null;
          /** URL of the previous page, if available. */
          prev_page?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List EmailOctopus mailing lists available to the current API key. */
    "emailoctopus.list_lists": {
      input: {
        /**
         * Maximum number of records to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Specific 1-based page number to request.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Lists returned by the official EmailOctopus API. */
        lists: Array<Record<string, unknown>>;
        /** Pagination object returned by the official EmailOctopus API. */
        paging?: {
          /**
           * Page size returned by the official API.
           * @minimum 1
           */
          limit?: number;
          /**
           * Current page number returned by the official API.
           * @minimum 1
           */
          current_page?: number;
          /**
           * Total number of pages returned by the official API.
           * @minimum 1
           */
          total_pages?: number;
          /** URL of the next page, if available. */
          next_page?: string | null;
          /** URL of the previous page, if available. */
          prev_page?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Update a contact in an EmailOctopus mailing list. */
    "emailoctopus.update_list_contact": {
      input: {
        /**
         * EmailOctopus list identifier.
         * @minLength 1
         */
        list_id: string;
        /**
         * EmailOctopus contact identifier.
         * @minLength 1
         */
        contact_id: string;
        /**
         * Contact email address accepted by the official EmailOctopus API.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email_address?: string;
        /** Custom contact fields object accepted by the official EmailOctopus API. */
        fields?: Record<string, unknown>;
        /** Tag update map accepted by the official update-contact API. */
        tags?: Record<string, boolean>;
        /**
         * Contact status value accepted by the official EmailOctopus API.
         * @minLength 1
         */
        status?: string;
      };
      output: {
        /** Contact object returned by the official EmailOctopus API. */
        contact: Record<string, unknown>;
      };
    };
  }
}
