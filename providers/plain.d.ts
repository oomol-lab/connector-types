import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch one Plain customer by exact email address. */
    "plain.get_customer_by_email": {
      input: {
        /**
         * The exact customer email address to look up in Plain.
         * @minLength 1
         * @format email
         */
        email: string;
      };
      output: {
        /** A normalized Plain customer record. */
        customer: {
          /** The Plain customer ID. */
          id: string;
          /** Your own external identifier stored on the customer. */
          externalId: string | null;
          /** The customer's full name. */
          fullName: string;
          /** The customer's optional short name. */
          shortName: string | null;
          /** The customer's primary email address. */
          email: string;
          /** Whether the customer's primary email address is verified. */
          emailVerified: boolean;
          /** The customer's avatar URL when Plain has one. */
          avatarUrl: string | null;
          /** The customer's creation timestamp in ISO 8601 format. */
          createdAt: string;
          /** The customer's update timestamp in ISO 8601 format. */
          updatedAt: string;
        };
      };
    };
    /** Fetch one Plain customer by exact external ID. */
    "plain.get_customer_by_external_id": {
      input: {
        /**
         * The exact external ID to look up in Plain.
         * @minLength 1
         */
        externalId: string;
      };
      output: {
        /** A normalized Plain customer record. */
        customer: {
          /** The Plain customer ID. */
          id: string;
          /** Your own external identifier stored on the customer. */
          externalId: string | null;
          /** The customer's full name. */
          fullName: string;
          /** The customer's optional short name. */
          shortName: string | null;
          /** The customer's primary email address. */
          email: string;
          /** Whether the customer's primary email address is verified. */
          emailVerified: boolean;
          /** The customer's avatar URL when Plain has one. */
          avatarUrl: string | null;
          /** The customer's creation timestamp in ISO 8601 format. */
          createdAt: string;
          /** The customer's update timestamp in ISO 8601 format. */
          updatedAt: string;
        };
      };
    };
    /** Search Plain customers with one human-oriented term across full name, short name, email, and external ID. */
    "plain.search_customers": {
      input: {
        /**
         * The human search term to match against Plain customers.
         * @minLength 1
         */
        term: string;
        /**
         * The number of customers to return from the first page.
         * @minimum 1
         */
        first?: number;
        /**
         * The cursor to continue after when fetching the next page.
         * @minLength 1
         */
        after?: string;
      };
      output: {
        /** The matching Plain customers. */
        customers: Array<{
          /** The Plain customer ID. */
          id: string;
          /** Your own external identifier stored on the customer. */
          externalId: string | null;
          /** The customer's full name. */
          fullName: string;
          /** The customer's optional short name. */
          shortName: string | null;
          /** The customer's primary email address. */
          email: string;
          /** Whether the customer's primary email address is verified. */
          emailVerified: boolean;
          /** The customer's avatar URL when Plain has one. */
          avatarUrl: string | null;
          /** The customer's creation timestamp in ISO 8601 format. */
          createdAt: string;
          /** The customer's update timestamp in ISO 8601 format. */
          updatedAt: string;
        }>;
        /** Cursor pagination metadata returned by Plain. */
        pageInfo: {
          /** Whether another page exists after this one. */
          hasNextPage: boolean;
          /** Whether a previous page exists before this one. */
          hasPreviousPage: boolean;
          /** The start cursor for the current page. */
          startCursor: string | null;
          /** The end cursor for the current page. */
          endCursor: string | null;
        };
      };
    };
    /** Create or update one Plain customer using exactly one identifier plus create and update payloads. */
    "plain.upsert_customer": {
      input: {
        /** The Plain customer identifier to use for exact lookup or mutation matching. */
        identifier: {
          /**
           * The customer's email address in Plain.
           * @format email
           */
          emailAddress?: string;
          /**
           * Your own stable external identifier for the customer.
           * @minLength 1
           */
          externalId?: string;
          /**
           * The Plain customer ID.
           * @minLength 1
           */
          customerId?: string;
        };
        /** Customer values to send to Plain when creating a new customer. */
        onCreate: {
          /**
           * The customer's full name.
           * @minLength 1
           */
          fullName: string;
          /**
           * The customer's primary email address.
           * @minLength 1
           * @format email
           */
          email: string;
          /** Whether Plain should mark the email address as verified. */
          emailVerified?: boolean;
          /**
           * Your own stable external identifier for the customer.
           * @minLength 1
           */
          externalId?: string;
          /**
           * The customer's optional short name.
           * @minLength 1
           */
          shortName?: string;
        };
        /** Customer fields to update when the Plain customer already exists. */
        onUpdate: {
          /**
           * The customer's new full name.
           * @minLength 1
           */
          fullName?: string;
          /**
           * The customer's new short name.
           * @minLength 1
           */
          shortName?: string;
          /**
           * The customer's new external identifier.
           * @minLength 1
           */
          externalId?: string;
          /**
           * The customer's replacement email address.
           * @minLength 1
           * @format email
           */
          email?: string;
          /** Whether Plain should mark the replacement email as verified. */
          emailVerified?: boolean;
        };
      };
      output: {
        /** Whether Plain created, updated, or left the customer unchanged. */
        result: "CREATED" | "UPDATED" | "NOOP";
        /** A normalized Plain customer record. */
        customer: {
          /** The Plain customer ID. */
          id: string;
          /** Your own external identifier stored on the customer. */
          externalId: string | null;
          /** The customer's full name. */
          fullName: string;
          /** The customer's optional short name. */
          shortName: string | null;
          /** The customer's primary email address. */
          email: string;
          /** Whether the customer's primary email address is verified. */
          emailVerified: boolean;
          /** The customer's avatar URL when Plain has one. */
          avatarUrl: string | null;
          /** The customer's creation timestamp in ISO 8601 format. */
          createdAt: string;
          /** The customer's update timestamp in ISO 8601 format. */
          updatedAt: string;
        };
      };
    };
  }
}
