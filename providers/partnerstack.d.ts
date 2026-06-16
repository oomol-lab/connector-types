import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a PartnerStack customer from JSON-friendly fields. */
    "partnerstack.create_customer": {
      input: {
        /**
         * External customer key to assign to the customer.
         * @minLength 1
         * @maxLength 255
         */
        customerKey: string;
        /**
         * Partner key responsible for the customer.
         * @minLength 1
         */
        partnerKey: string;
        /**
         * The customer email address.
         * @format email
         */
        email: string;
        /**
         * The customer or company name.
         * @minLength 1
         * @maxLength 100
         */
        name?: string;
        /**
         * The member key responsible for the customer.
         * @minLength 1
         */
        memberKey?: string;
        /**
         * A payment provider customer identifier.
         * @minLength 1
         * @maxLength 255
         */
        providerKey?: string;
        /** Additional PartnerStack custom fields. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** A normalized PartnerStack customer. */
        customer: {
          /**
           * A PartnerStack resource key.
           * @minLength 1
           * @maxLength 255
           */
          key: string;
          /** The external customer key when returned by PartnerStack. */
          customerKey: string | null;
          /** The customer email address when returned by PartnerStack. */
          email: string | null;
          /** The customer name when returned by PartnerStack. */
          name: string | null;
          /** The partner key associated with the customer. */
          partnerKey: string | null;
          /** The partnership key associated with the customer. */
          partnershipKey: string | null;
          /** The creation timestamp in milliseconds. */
          createdAt: number | null;
          /** The last update timestamp in milliseconds. */
          updatedAt: number | null;
          /** The raw customer object returned by PartnerStack. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one PartnerStack customer by customer key. */
    "partnerstack.get_customer": {
      input: {
        /**
         * A PartnerStack resource key.
         * @minLength 1
         * @maxLength 255
         */
        customerKey: string;
      };
      output: {
        /** A normalized PartnerStack customer. */
        customer: {
          /**
           * A PartnerStack resource key.
           * @minLength 1
           * @maxLength 255
           */
          key: string;
          /** The external customer key when returned by PartnerStack. */
          customerKey: string | null;
          /** The customer email address when returned by PartnerStack. */
          email: string | null;
          /** The customer name when returned by PartnerStack. */
          name: string | null;
          /** The partner key associated with the customer. */
          partnerKey: string | null;
          /** The partnership key associated with the customer. */
          partnershipKey: string | null;
          /** The creation timestamp in milliseconds. */
          createdAt: number | null;
          /** The last update timestamp in milliseconds. */
          updatedAt: number | null;
          /** The raw customer object returned by PartnerStack. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one PartnerStack partnership by partner key, partnership key, or email. */
    "partnerstack.get_partnership": {
      input: {
        /**
         * A partner key, internal partnership key, or email.
         * @minLength 1
         */
        uniqueIdentifier: string;
      };
      output: {
        /** A normalized PartnerStack partnership. */
        partnership: {
          /**
           * A PartnerStack resource key.
           * @minLength 1
           * @maxLength 255
           */
          key: string;
          /** The partner key for the partnership. */
          partnerKey: string | null;
          /** The partner email address when returned by PartnerStack. */
          email: string | null;
          /** The partner or company name when returned by PartnerStack. */
          name: string | null;
          /** The approval status of the partnership. */
          approvedStatus: string | null;
          /** Whether the partnership has been claimed. */
          claimed: boolean | null;
          /** The creation timestamp in milliseconds. */
          createdAt: number | null;
          /** The last update timestamp in milliseconds. */
          updatedAt: number | null;
          /** The raw partnership object returned by PartnerStack. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List PartnerStack customers with pagination and common filters. */
    "partnerstack.list_customers": {
      input: {
        /**
         * The maximum number of records PartnerStack should return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * A cursor key returned by PartnerStack pagination.
         * @minLength 1
         */
        startingAfter?: string;
        /**
         * A cursor key returned by PartnerStack pagination.
         * @minLength 1
         */
        endingBefore?: string;
        /** A Unix timestamp in milliseconds. */
        minCreated?: number;
        /** A Unix timestamp in milliseconds. */
        maxCreated?: number;
        /** A Unix timestamp in milliseconds. */
        minUpdated?: number;
        /** A Unix timestamp in milliseconds. */
        maxUpdated?: number;
        /**
         * Filter to partnerships in a group by normalized group name.
         * @minLength 1
         */
        group?: string;
        /**
         * Filter to customers for a specific partner key.
         * @minLength 1
         */
        partnerKey?: string;
        /**
         * Filter to customers for a specific partnership key.
         * @minLength 1
         */
        partnershipKey?: string;
        /** Filter to specific customer keys. */
        customerKeys?: Array<string>;
      };
      output: {
        /** Customers returned by PartnerStack. */
        customers: Array<{
          /**
           * A PartnerStack resource key.
           * @minLength 1
           * @maxLength 255
           */
          key: string;
          /** The external customer key when returned by PartnerStack. */
          customerKey: string | null;
          /** The customer email address when returned by PartnerStack. */
          email: string | null;
          /** The customer name when returned by PartnerStack. */
          name: string | null;
          /** The partner key associated with the customer. */
          partnerKey: string | null;
          /** The partnership key associated with the customer. */
          partnershipKey: string | null;
          /** The creation timestamp in milliseconds. */
          createdAt: number | null;
          /** The last update timestamp in milliseconds. */
          updatedAt: number | null;
          /** The raw customer object returned by PartnerStack. */
          raw: Record<string, unknown>;
        }>;
        /** Whether PartnerStack has another page of results. */
        hasMore: boolean;
      };
    };
    /** List PartnerStack deals with pagination and common filters. */
    "partnerstack.list_deals": {
      input: {
        /**
         * The maximum number of records PartnerStack should return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * A cursor key returned by PartnerStack pagination.
         * @minLength 1
         */
        startingAfter?: string;
        /**
         * A cursor key returned by PartnerStack pagination.
         * @minLength 1
         */
        endingBefore?: string;
        /** A Unix timestamp in milliseconds. */
        minCreated?: number;
        /** A Unix timestamp in milliseconds. */
        maxCreated?: number;
        /** A Unix timestamp in milliseconds. */
        minUpdated?: number;
        /** A Unix timestamp in milliseconds. */
        maxUpdated?: number;
        /**
         * Filter to partnerships in a group by normalized group name.
         * @minLength 1
         */
        group?: string;
        /**
         * Filter to deals for a specific partner key.
         * @minLength 1
         */
        partnerKey?: string;
        /** Filter to specific customer keys. */
        customerKeys?: Array<string>;
        /**
         * Filter to a specific deal key.
         * @minLength 1
         */
        dealKey?: string;
      };
      output: {
        /** Deals returned by PartnerStack. */
        deals: Array<{
          /**
           * A PartnerStack resource key.
           * @minLength 1
           * @maxLength 255
           */
          key: string;
          /** The external deal key when returned by PartnerStack. */
          dealKey: string | null;
          /** The deal name when returned by PartnerStack. */
          name: string | null;
          /** The deal stage when returned by PartnerStack. */
          stage: string | null;
          /** The partner key associated with the deal. */
          partnerKey: string | null;
          /** The customer key associated with the deal. */
          customerKey: string | null;
          /** The deal amount when returned by PartnerStack. */
          amount: number | null;
          /** The creation timestamp in milliseconds. */
          createdAt: number | null;
          /** The last update timestamp in milliseconds. */
          updatedAt: number | null;
          /** The raw deal object returned by PartnerStack. */
          raw: Record<string, unknown>;
        }>;
        /** Whether PartnerStack has another page of results. */
        hasMore: boolean;
      };
    };
    /** List PartnerStack leads with pagination and common filters. */
    "partnerstack.list_leads": {
      input: {
        /**
         * The maximum number of records PartnerStack should return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * A cursor key returned by PartnerStack pagination.
         * @minLength 1
         */
        startingAfter?: string;
        /**
         * A cursor key returned by PartnerStack pagination.
         * @minLength 1
         */
        endingBefore?: string;
        /** A Unix timestamp in milliseconds. */
        minCreated?: number;
        /** A Unix timestamp in milliseconds. */
        maxCreated?: number;
        /** A Unix timestamp in milliseconds. */
        minUpdated?: number;
        /** A Unix timestamp in milliseconds. */
        maxUpdated?: number;
        /**
         * Filter to partnerships in a group by normalized group name.
         * @minLength 1
         */
        group?: string;
        /**
         * Filter to leads for a specific partner key.
         * @minLength 1
         */
        partnerKey?: string;
        /**
         * Filter to a specific lead key.
         * @minLength 1
         */
        leadKey?: string;
      };
      output: {
        /** Leads returned by PartnerStack. */
        leads: Array<{
          /**
           * A PartnerStack resource key.
           * @minLength 1
           * @maxLength 255
           */
          key: string;
          /** The external lead key when returned by PartnerStack. */
          leadKey: string | null;
          /** The lead email address when returned by PartnerStack. */
          email: string | null;
          /** The lead or company name when returned by PartnerStack. */
          name: string | null;
          /** The partner key associated with the lead. */
          partnerKey: string | null;
          /** The customer key associated with the lead. */
          customerKey: string | null;
          /** The creation timestamp in milliseconds. */
          createdAt: number | null;
          /** The last update timestamp in milliseconds. */
          updatedAt: number | null;
          /** The raw lead object returned by PartnerStack. */
          raw: Record<string, unknown>;
        }>;
        /** Whether PartnerStack has another page of results. */
        hasMore: boolean;
      };
    };
    /** List PartnerStack partnerships with pagination and common filters. */
    "partnerstack.list_partnerships": {
      input: {
        /**
         * The maximum number of records PartnerStack should return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * A cursor key returned by PartnerStack pagination.
         * @minLength 1
         */
        startingAfter?: string;
        /**
         * A cursor key returned by PartnerStack pagination.
         * @minLength 1
         */
        endingBefore?: string;
        /** A Unix timestamp in milliseconds. */
        minCreated?: number;
        /** A Unix timestamp in milliseconds. */
        maxCreated?: number;
        /** A Unix timestamp in milliseconds. */
        minUpdated?: number;
        /** A Unix timestamp in milliseconds. */
        maxUpdated?: number;
        /**
         * Filter to partnerships in a group by normalized group name.
         * @minLength 1
         */
        group?: string;
        /** The field and direction PartnerStack should order by. */
        orderBy?: "-created_at" | "created_at" | "-updated_at" | "updated_at";
        /**
         * Filter to the partner email address.
         * @format email
         */
        email?: string;
        /** Filter by partnership approval status. */
        approvedStatus?: "approved" | "pending" | "declined";
        /** Whether PartnerStack should include archived partnerships. */
        includeArchived?: boolean;
        /**
         * Filter to a specific partnership key.
         * @minLength 1
         */
        partnershipKey?: string;
      };
      output: {
        /** Partnerships returned by PartnerStack. */
        partnerships: Array<{
          /**
           * A PartnerStack resource key.
           * @minLength 1
           * @maxLength 255
           */
          key: string;
          /** The partner key for the partnership. */
          partnerKey: string | null;
          /** The partner email address when returned by PartnerStack. */
          email: string | null;
          /** The partner or company name when returned by PartnerStack. */
          name: string | null;
          /** The approval status of the partnership. */
          approvedStatus: string | null;
          /** Whether the partnership has been claimed. */
          claimed: boolean | null;
          /** The creation timestamp in milliseconds. */
          createdAt: number | null;
          /** The last update timestamp in milliseconds. */
          updatedAt: number | null;
          /** The raw partnership object returned by PartnerStack. */
          raw: Record<string, unknown>;
        }>;
        /** Whether PartnerStack has another page of results. */
        hasMore: boolean;
      };
    };
  }
}
