import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a OnePageCRM contact using JSON-safe contact fields. */
    "one_page_crm.create_contact": {
      input: {
        /** Title of the contact. */
        title?: "Mr" | "Mrs" | "Ms";
        /**
         * First name of the contact.
         * @minLength 1
         * @maxLength 25
         */
        firstName?: string;
        /**
         * Last name of the contact.
         * @minLength 1
         * @maxLength 25
         */
        lastName?: string;
        /**
         * Job title of the contact.
         * @minLength 1
         * @maxLength 1000
         */
        jobTitle?: string;
        /** Whether the contact should be starred. */
        starred?: boolean;
        /**
         * ID of the company to which the contact belongs.
         * @minLength 1
         */
        companyId?: string;
        /**
         * Name of the company to which the contact belongs.
         * @minLength 1
         * @maxLength 55
         */
        companyName?: string;
        /** URLs associated with the contact. */
        urls?: Array<{
          /**
           * OnePageCRM type for this value, such as work, home, website, or other.
           * @minLength 1
           */
          type: string;
          /**
           * The typed value stored on the contact.
           * @minLength 1
           */
          value: string;
        }>;
        /** Phone numbers associated with the contact. */
        phones?: Array<{
          /**
           * OnePageCRM type for this value, such as work, home, website, or other.
           * @minLength 1
           */
          type: string;
          /**
           * The typed value stored on the contact.
           * @minLength 1
           */
          value: string;
        }>;
        /** Email addresses associated with the contact. */
        emails?: Array<{
          /**
           * OnePageCRM type for this value, such as work, home, website, or other.
           * @minLength 1
           */
          type: string;
          /**
           * The typed value stored on the contact.
           * @minLength 1
           */
          value: string;
        }>;
        /**
         * ID of the status assigned to the contact.
         * @minLength 1
         */
        statusId?: string;
        /** Tags assigned to the contact. */
        tags?: Array<string>;
        /**
         * ID of the lead source assigned to the contact.
         * @minLength 1
         */
        leadSourceId?: string;
        /**
         * Background information about the contact.
         * @minLength 1
         * @maxLength 10240
         */
        background?: string;
        /**
         * ID of the OnePageCRM user who owns the contact.
         * @minLength 1
         */
        ownerId?: string;
      };
      output: {
        /** OnePageCRM contact object. */
        contact: Record<string, unknown>;
        /** Raw OnePageCRM response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a OnePageCRM deal using JSON-safe deal fields. */
    "one_page_crm.create_deal": {
      input: {
        /**
         * ID of the contact to which the deal belongs.
         * @minLength 1
         */
        contactId: string;
        /**
         * ID of the OnePageCRM user who owns the deal.
         * @minLength 1
         */
        ownerId: string;
        /**
         * ID of the pipeline to which the deal belongs.
         * @minLength 1
         */
        pipelineId?: string;
        /**
         * ID of the sales pipeline to which the deal belongs.
         * @minLength 1
         */
        salesPipelineId?: string;
        /**
         * Name of the deal.
         * @minLength 1
         * @maxLength 60
         */
        name: string;
        /**
         * Extra notes related to the deal.
         * @minLength 1
         * @maxLength 7168
         */
        text?: string;
        /**
         * Progress stage for a pending deal. OnePageCRM uses 0 through 100.
         * @minimum 0
         * @maximum 100
         */
        stage?: number;
        /** Status of the deal. */
        status?: "pending" | "won" | "lost";
        /**
         * Date the pending deal is expected to close.
         * @format date
         */
        expectedCloseDate?: string;
        /**
         * Date the won or lost deal actually closed.
         * @format date
         */
        closeDate?: string;
        /**
         * Creation date of the deal.
         * @format date
         */
        date?: string;
        /** Monetary value of the deal. */
        amount?: number;
        /**
         * Number of months the deal is paid for.
         * @exclusiveMinimum 0
         */
        months?: number;
        /** Monetary cost of the deal. */
        cost?: number;
        /** Commission calculation base. */
        commissionBase?: "amount" | "margin";
        /** Commission type. */
        commissionType?: "none" | "percentage" | "fixed";
        /** Fixed commission value for the deal. */
        commission?: number;
        /** Commission percentage for the deal. */
        commissionPercentage?: number;
      };
      output: {
        /** OnePageCRM deal object. */
        deal: Record<string, unknown>;
        /** Raw OnePageCRM response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a single OnePageCRM contact by ID. */
    "one_page_crm.get_contact": {
      input: {
        /**
         * ID of the OnePageCRM contact to retrieve.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** OnePageCRM contact object. */
        contact: Record<string, unknown>;
        /** Raw OnePageCRM response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a single OnePageCRM deal by ID. */
    "one_page_crm.get_deal": {
      input: {
        /**
         * ID of the OnePageCRM deal to retrieve.
         * @minLength 1
         */
        dealId: string;
      };
      output: {
        /** OnePageCRM deal object. */
        deal: Record<string, unknown>;
        /** Raw OnePageCRM response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List OnePageCRM contacts with pagination, search, ownership, tag, and sorting filters. */
    "one_page_crm.list_contacts": {
      input: {
        /**
         * Page number to request. OnePageCRM starts pagination at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of records to return per page. OnePageCRM allows at most 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * Search contacts by contact name, company name, or phone number.
         * @minLength 1
         */
        search?: string;
        /**
         * Return contacts owned by a specific OnePageCRM user.
         * @minLength 1
         */
        ownerId?: string;
        /**
         * Filter contacts by tag.
         * @minLength 1
         */
        tag?: string;
        /**
         * Apply a saved OnePageCRM contact filter.
         * @minLength 1
         */
        filterId?: string;
        /** Field used to sort OnePageCRM contacts. */
        sortBy?: "created_at" | "modified_at" | "first_name" | "last_name" | "company_name" | "name";
        /** Sort order for OnePageCRM contact results. */
        order?: "asc" | "desc";
      };
      output: {
        /** Contacts returned by OnePageCRM. */
        contacts: Array<Record<string, unknown>>;
        /** Total number of matching records reported by OnePageCRM. */
        totalCount?: number;
        /** Current page number returned by OnePageCRM. */
        page?: number;
        /** Number of records returned per page by OnePageCRM. */
        perPage?: number;
        /** Last available page number reported by OnePageCRM. */
        maxPage?: number;
        /** Raw OnePageCRM response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List OnePageCRM deals with pagination, search, status, contact, owner, tag, and sorting filters. */
    "one_page_crm.list_deals": {
      input: {
        /**
         * Page number to request. OnePageCRM starts pagination at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of records to return per page. OnePageCRM allows at most 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * Search deals by deal name, contact name, or company name.
         * @minLength 1
         */
        search?: string;
        /** Return deals with a particular status. */
        status?: "pending" | "won" | "lost" | "closed";
        /**
         * Return pending deals at a specific stage.
         * @minimum 0
         * @maximum 100
         */
        stage?: number;
        /**
         * Return deals owned by a specific OnePageCRM user.
         * @minLength 1
         */
        ownerId?: string;
        /**
         * Return deals linked to a specific contact.
         * @minLength 1
         */
        contactId?: string;
        /**
         * Return deals linked to a specific company.
         * @minLength 1
         */
        companyId?: string;
        /**
         * Filter deals by tag.
         * @minLength 1
         */
        tag?: string;
        /**
         * Apply a saved OnePageCRM deal filter.
         * @minLength 1
         */
        filterId?: string;
        /** Field used to sort OnePageCRM deals. */
        sortBy?: "created_at" | "modified_at" | "date" | "close_date" | "expected_close_date";
        /** Sort order for OnePageCRM deal results. */
        order?: "asc" | "desc";
      };
      output: {
        /** Deals returned by OnePageCRM. */
        deals: Array<Record<string, unknown>>;
        /** Total number of matching records reported by OnePageCRM. */
        totalCount?: number;
        /** Current page number returned by OnePageCRM. */
        page?: number;
        /** Number of records returned per page by OnePageCRM. */
        perPage?: number;
        /** Last available page number reported by OnePageCRM. */
        maxPage?: number;
        /** Raw OnePageCRM response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
