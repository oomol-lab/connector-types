import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the authenticated Enormail account profile. */
    "enormail.get_account": {
      input: Record<string, never>;
      output: {
        /** Account ID. */
        id?: string;
        /** Account first name. */
        firstname?: string;
        /** Account last name. */
        lastname?: string;
        /** Account email address. */
        email?: string;
        /** Account creation timestamp. */
        created_at?: string;
        /** Last login timestamp. */
        lastlogin_at?: string;
        [key: string]: unknown;
      };
    };
    /** Get an Enormail contact by mailing list and email address. */
    "enormail.get_contact": {
      input: {
        /**
         * Enormail mailing list ID.
         * @minLength 1
         */
        listid: string;
        /**
         * Contact email address.
         * @format email
         */
        email: string;
      };
      output: {
        /** Mailing list ID. */
        listid?: string;
        /** Contact email address. */
        email?: string;
        /** Subscription state. */
        state?: string;
        [key: string]: unknown;
      };
    };
    /** Get an Enormail mailing list and its subscriber counts. */
    "enormail.get_list": {
      input: {
        /**
         * Enormail mailing list ID.
         * @minLength 1
         */
        listid: string;
      };
      output: {
        /** Mailing list ID. */
        listid?: string;
        /** Mailing list title. */
        title?: string;
        [key: string]: unknown;
      };
    };
    /** Get delivery, open, click, bounce, and unsubscribe statistics for a sent Enormail mailing. */
    "enormail.get_mailing_stats": {
      input: {
        /**
         * Enormail mailing ID.
         * @minLength 1
         */
        mailingid: string;
      };
      output: {
        /** Mailing ID. */
        mailingid?: string;
        /** Delivery and engagement counters and ratios. */
        statistics?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List one page of Enormail contacts in a mailing list by subscription state. */
    "enormail.list_contacts": {
      input: {
        /**
         * Enormail mailing list ID.
         * @minLength 1
         */
        listid: string;
        /** Subscription state to retrieve. */
        state: "active" | "unconfirmed" | "unsubscribed" | "bounced";
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Resources on this page. */
        results?: Array<Record<string, unknown>>;
        /** Total number of matching resources. */
        total_results?: number;
        /** Number of resources per page. */
        page_size?: number;
        /** Total number of pages. */
        number_of_pages?: number;
        /** Current page number. */
        current_page?: number;
        [key: string]: unknown;
      };
    };
    /** List one page of Enormail mailing lists. */
    "enormail.list_lists": {
      input: {
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Mailing lists on this page. */
        lists: Array<Record<string, unknown>>;
      };
    };
    /** List one page of sent, draft, or scheduled Enormail mailings. */
    "enormail.list_mailings": {
      input: {
        /** Mailing state to retrieve. */
        state: "sent" | "drafts" | "scheduled";
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Resources on this page. */
        results?: Array<Record<string, unknown>>;
        /** Total number of matching resources. */
        total_results?: number;
        /** Number of resources per page. */
        page_size?: number;
        /** Total number of pages. */
        number_of_pages?: number;
        /** Current page number. */
        current_page?: number;
        [key: string]: unknown;
      };
    };
    /** List allowed sender email addresses for the Enormail account. */
    "enormail.list_senders": {
      input: Record<string, never>;
      output: {
        /** Allowed sender addresses. */
        senders: Array<string>;
      };
    };
  }
}
