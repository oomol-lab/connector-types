import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current Benchmark Email account summary and image storage plan details. */
    "benchmark_email.get_account_summary": {
      input: Record<string, never>;
      output: {
        /** Whether the account is on the free plan: 1 for free, 0 for paid. */
        FreePlan: number;
        /** The total image storage limit available for the account. */
        Limit: number;
      };
    };
    /** Get detailed information for a specific Benchmark Email contact email within a specific list. */
    "benchmark_email.get_contact_details": {
      input: {
        /**
         * The contact list identifier that contains the contact.
         * @minLength 1
         */
        list_id: string;
        /**
         * The email address of the contact to look up within the list.
         * @format email
         */
        email: string;
      };
      output: {
        /** The status code returned by Benchmark Email for this response wrapper. */
        Status: "1" | "-1";
        /** The detailed contact payload returned by Benchmark Email, including standard and custom field values. */
        Data?: {
          /** The unique contact identifier in the list. */
          ID?: string;
          /** The contact email address. */
          Email?: string;
          /** The contact status code returned by Benchmark Email. */
          Status?: string;
          /** The contact first name. */
          FirstName?: string;
          /** The contact last name. */
          LastName?: string;
          /** The contact middle name. */
          MiddleName?: string;
          /** The email type classification returned by Benchmark Email. */
          EmailType?: string;
          /** The Benchmark Email master contact identifier. */
          ContactMasterID?: string;
          /** The contact opt-in status. */
          Optin?: string;
          /** The email permission flag returned by Benchmark Email. */
          EmailPerm?: string;
          /** The contact rating score. */
          Rating?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get summary counts for a Benchmark Email contact list, including active, bounced, pending, and unsubscribed contacts. */
    "benchmark_email.get_contact_list_summary": {
      input: {
        /**
         * The contact list identifier to summarize.
         * @minLength 1
         */
        list_id: string;
      };
      output: {
        /** The status code returned by Benchmark Email for this response wrapper. */
        Status: "1" | "-1";
        /** The contact list summary metrics returned by Benchmark Email. */
        Data?: {
          /** The total number of contacts in the list. */
          TotalContacts?: number;
          /** The number of active contacts in the list. */
          ActiveContacts?: number;
          /** The number of bounced contacts in the list. */
          BouncedContacts?: number;
          /** The number of pending contacts in the list. */
          PendingContacts?: number;
          /** The number of unsubscribed contacts in the list. */
          UnsubscribedContacts?: number;
        };
      };
    };
    /** Get paginated contacts from a Benchmark Email list with optional search, filter, and sorting parameters. */
    "benchmark_email.get_contacts_in_list": {
      input: {
        /**
         * The contact list identifier to query.
         * @minLength 1
         */
        list_id: string;
        /**
         * The Benchmark Email language code forwarded to listGetFilteredContacts when needed.
         * @minLength 1
         */
        language?: string;
        /** The predefined contact subset filter returned by Benchmark Email. */
        filter?: "2" | "5" | "100";
        /** The contact field used for sorting list results. */
        order_by?: "email" | "firstname" | "lastname" | "date";
        /** The sort direction used for contact list results. */
        sort_order?: "asc" | "desc";
        /**
         * The number of contacts to return per page.
         * @minimum 1
         */
        page_size?: number;
        /**
         * The page number to return, starting at 1.
         * @minimum 1
         */
        page_number?: number;
        /** The search match mode used when filtering contacts in a list. */
        search_type?: "1" | "2" | "3" | "4";
        /**
         * The field name to search, such as email or firstname.
         * @minLength 1
         */
        search_field?: string;
        /**
         * The text filter to apply when searching within contacts.
         * @minLength 1
         */
        search_filter?: string;
      };
      output: {
        /** The status code returned by Benchmark Email for this response wrapper. */
        Status: "1" | "-1";
        /** The total number of contacts matching the current list query. */
        Count?: number;
        /** The contacts returned for the current page. */
        Data?: Array<{
          /** The unique contact entry identifier in the list. */
          ID?: string;
          /** The contact email address. */
          Email?: string;
          /** The Benchmark Email resend indicator or action token. */
          ReSend?: string;
          /** The contact last name. */
          LastName?: string;
          /** The email type classification returned by Benchmark Email. */
          EmailType?: string;
          /** The contact first name. */
          FirstName?: string;
          /** The contact middle name. */
          MiddleName?: string;
          /** The date when the contact was created. */
          CreatedDate?: string;
          /** The date when the contact was last updated. */
          UpdatedDate?: string;
          /** The Benchmark Email master contact identifier. */
          ContactMasterID?: string;
        }>;
      };
    };
  }
}
