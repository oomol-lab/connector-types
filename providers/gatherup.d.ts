import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one GatherUp business location by ID. */
    "gatherup.get_business": {
      input: {
        /**
         * The optional GatherUp agency client number to target when using account-owner credentials.
         * @minimum 1
         */
        agent?: number;
        /**
         * The GatherUp business ID to retrieve.
         * @minimum 1
         */
        businessId: number;
      };
      output: {
        /**
         * The GatherUp business ID.
         * @minimum 1
         */
        id: number;
        /** The business name. */
        name: string;
        /** The GatherUp result code. A successful response returns 0. */
        errorCode: number;
        /** The GatherUp result message. */
        errorMessage: string;
        [key: string]: unknown;
      };
    };
    /** Get one GatherUp customer by ID. */
    "gatherup.get_customer": {
      input: {
        /**
         * The optional GatherUp agency client number to target when using account-owner credentials.
         * @minimum 1
         */
        agent?: number;
        /**
         * The GatherUp customer ID to retrieve.
         * @minimum 1
         */
        customerId: number;
      };
      output: {
        /** The GatherUp business ID associated with the customer */
        businessId: string | number;
        /** The customer's first name. */
        firstName?: string;
        /** The customer's last name. */
        lastName?: string;
        /** The customer's email address when present. */
        email?: string;
        /** The customer's phone number when present. */
        phone?: string;
        /** The customer job ID when configured. */
        jobId?: string;
        /** The customer custom ID when configured. */
        customId?: string;
        /** The customer's rating, or null when no rating has been received. */
        rating?: string | null;
        /** The current GatherUp feedback request status. */
        statusInfo?: string;
        /** The customer unsubscribe flag returned by GatherUp. */
        unsubscribed?: string;
        /** The timestamp when the customer was created. */
        createdAt?: string;
        /** The GatherUp result code. A successful response returns 0. */
        errorCode: number;
        /** The GatherUp result message. */
        errorMessage: string;
        [key: string]: unknown;
      };
    };
    /** List one page of business locations available to the connected GatherUp account. */
    "gatherup.list_businesses": {
      input: {
        /**
         * The optional GatherUp agency client number to target when using account-owner credentials.
         * @minimum 1
         */
        agent?: number;
        /** Whether GatherUp should include deleted business locations. */
        includeDeletedBusinesses?: boolean;
        /**
         * The one-based page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of business locations to request per page.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /**
         * The current page number.
         * @minimum 1
         */
        page: number;
        /**
         * The number of business locations requested per page.
         * @minimum 1
         */
        perPage: number;
        /**
         * The total number of pages.
         * @minimum 0
         */
        pages: number;
        /**
         * The total number of business locations.
         * @minimum 0
         */
        count: number;
        /** The business locations returned on this page. */
        data: Array<{
          /**
           * The GatherUp business ID.
           * @minimum 1
           */
          businessId: number;
          /** The business name. */
          businessName: string;
          /** Whether GatherUp marks the business as deleted. */
          businessDeleted: number;
          [key: string]: unknown;
        }>;
        /** The GatherUp result code. A successful response returns 0. */
        errorCode: number;
        /** The GatherUp result message. */
        errorMessage: string;
        [key: string]: unknown;
      };
    };
    /** List one page of GatherUp customers with optional business and customer filters. */
    "gatherup.list_customers": {
      input: {
        /**
         * The optional GatherUp agency client number to target when using account-owner credentials.
         * @minimum 1
         */
        agent?: number;
        /**
         * Filter customers by GatherUp business ID.
         * @minimum 1
         */
        businessId?: number;
        /**
         * Filter customers by GatherUp customer ID.
         * @minimum 1
         */
        customerId?: number;
        /**
         * Filter customers by custom ID.
         * @minLength 1
         */
        customId?: string;
        /**
         * Filter customers by job ID.
         * @minLength 1
         */
        jobId?: string;
        /**
         * Filter customers by email address.
         * @format email
         */
        email?: string;
        /**
         * The one-based page number to request.
         * @minimum 1
         */
        page?: number;
        /** Filter customers by subscription status. */
        subscription?: boolean;
        /** Whether GatherUp should include customer history. */
        showHistory?: boolean;
      };
      output: {
        /**
         * The current page number.
         * @minimum 1
         */
        page: number;
        /**
         * The total number of pages.
         * @minimum 0
         */
        pages: number;
        /**
         * The total number of customers.
         * @minimum 0
         */
        count: number;
        /**
         * The number of customers returned per page.
         * @minimum 1
         */
        perPage: number;
        /** The customers returned on this page. */
        data: Array<{
          /** The GatherUp customer ID */
          id: string | number;
          /** The GatherUp business ID associated with the customer */
          businessId: string | number;
          /** The customer's first name. */
          firstName?: string;
          /** The customer's last name. */
          lastName?: string;
          /** The customer's phone number when present. */
          phone?: string;
          /** The customer's email address when present. */
          email?: string;
          /** The customer job ID when configured. */
          jobId?: string;
          /** The customer custom ID when configured. */
          customId?: string;
          /** The parent customer ID */
          parentId?: string | number;
          /** The customer's rating, or null when no rating has been received. */
          rating?: string | null;
          /** The customer's review, or null when no review has been received. */
          review?: string | null;
          /** The current GatherUp feedback request status. */
          statusInfo?: string;
          /** The customer's subscription flag returned by GatherUp. */
          subscription?: number;
          /** The timestamp when the customer was created. */
          createdAt?: string;
          [key: string]: unknown;
        }>;
        /** The GatherUp result code. A successful response returns 0. */
        errorCode?: number;
        /** The GatherUp result message. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
  }
}
