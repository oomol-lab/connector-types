import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an Atlas customer. */
    "atlas_so.create_customer": {
      input: {
        /** The customer's first name. */
        firstName?: string | null;
        /** The customer's last name. */
        lastName?: string | null;
        /**
         * The customer's email address.
         * @format email
         */
        email?: string | null;
        /** The customer's phone number. */
        phoneNumber?: string | null;
        /** The external user identifier. */
        externalUserId?: string | null;
        /** Custom customer fields keyed by Atlas custom field name. */
        customFields?: Record<string, unknown> | null;
        /** Default sender values for an Atlas customer. */
        defaultSenders?: {
          /** The default SMS sender value. */
          sms?: string | null;
          /** The default email sender value. */
          email?: string | null;
        } | null;
      };
      output: {
        /** An Atlas customer resource. */
        customer: {
          /**
           * The Atlas customer ID.
           * @format uuid
           */
          id?: string;
          /**
           * The associated Atlas account ID.
           * @format uuid
           */
          companyId?: string | null;
          /** The customer's first name. */
          firstName?: string | null;
          /** The customer's last name. */
          lastName?: string | null;
          /**
           * The customer's email address.
           * @format email
           */
          email?: string | null;
          /** The customer's phone number. */
          phoneNumber?: string | null;
          /** The external user identifier. */
          externalUserId?: string | null;
          /** Custom customer fields returned by Atlas. */
          customFields?: Record<string, unknown> | null;
          /**
           * The timestamp when the customer was created.
           * @format date-time
           */
          createdAt?: string;
          /** Default sender values for an Atlas customer. */
          defaultSenders?: {
            /** The default SMS sender value. */
            sms?: string | null;
            /** The default email sender value. */
            email?: string | null;
          } | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a single Atlas account by ID. */
    "atlas_so.get_account": {
      input: {
        /**
         * The Atlas account ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** An Atlas account resource. */
        account: {
          /**
           * The Atlas account ID.
           * @format uuid
           */
          id?: string;
          /** The account name. */
          name?: string | null;
          /** The account email address. */
          email?: string | null;
          /** The account website. */
          website?: string | null;
          /** The external account identifier. */
          externalId?: string | null;
          /** Custom account fields returned by Atlas. */
          customFields?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a single Atlas customer by ID. */
    "atlas_so.get_customer": {
      input: {
        /**
         * The Atlas customer ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** An Atlas customer resource. */
        customer: {
          /**
           * The Atlas customer ID.
           * @format uuid
           */
          id?: string;
          /**
           * The associated Atlas account ID.
           * @format uuid
           */
          companyId?: string | null;
          /** The customer's first name. */
          firstName?: string | null;
          /** The customer's last name. */
          lastName?: string | null;
          /**
           * The customer's email address.
           * @format email
           */
          email?: string | null;
          /** The customer's phone number. */
          phoneNumber?: string | null;
          /** The external user identifier. */
          externalUserId?: string | null;
          /** Custom customer fields returned by Atlas. */
          customFields?: Record<string, unknown> | null;
          /**
           * The timestamp when the customer was created.
           * @format date-time
           */
          createdAt?: string;
          /** Default sender values for an Atlas customer. */
          defaultSenders?: {
            /** The default SMS sender value. */
            sms?: string | null;
            /** The default email sender value. */
            email?: string | null;
          } | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Atlas accounts visible to the current API key. */
    "atlas_so.list_accounts": {
      input: {
        /**
         * The Atlas pagination cursor. Atlas defaults this to 0.
         * @minimum 0
         */
        cursor?: number;
        /**
         * The maximum number of records to return. Atlas defaults this to 20.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The Atlas accounts returned by the API. */
        accounts: Array<{
          /**
           * The Atlas account ID.
           * @format uuid
           */
          id?: string;
          /** The account name. */
          name?: string | null;
          /** The account email address. */
          email?: string | null;
          /** The account website. */
          website?: string | null;
          /** The external account identifier. */
          externalId?: string | null;
          /** Custom account fields returned by Atlas. */
          customFields?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** The total number of available records when Atlas returns it. */
        total: number | null;
        /** The cursor returned by Atlas for the current page. */
        cursor: number | null;
        /** The page size returned by Atlas. */
        limit: number | null;
        /** Raw Atlas list response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Atlas customers visible to the current API key. */
    "atlas_so.list_customers": {
      input: {
        /**
         * The Atlas pagination cursor. Atlas defaults this to 0.
         * @minimum 0
         */
        cursor?: number;
        /**
         * The maximum number of records to return. Atlas defaults this to 20.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The Atlas customers returned by the API. */
        customers: Array<{
          /**
           * The Atlas customer ID.
           * @format uuid
           */
          id?: string;
          /**
           * The associated Atlas account ID.
           * @format uuid
           */
          companyId?: string | null;
          /** The customer's first name. */
          firstName?: string | null;
          /** The customer's last name. */
          lastName?: string | null;
          /**
           * The customer's email address.
           * @format email
           */
          email?: string | null;
          /** The customer's phone number. */
          phoneNumber?: string | null;
          /** The external user identifier. */
          externalUserId?: string | null;
          /** Custom customer fields returned by Atlas. */
          customFields?: Record<string, unknown> | null;
          /**
           * The timestamp when the customer was created.
           * @format date-time
           */
          createdAt?: string;
          /** Default sender values for an Atlas customer. */
          defaultSenders?: {
            /** The default SMS sender value. */
            sms?: string | null;
            /** The default email sender value. */
            email?: string | null;
          } | null;
          [key: string]: unknown;
        }>;
        /** The total number of available records when Atlas returns it. */
        total: number | null;
        /** The cursor returned by Atlas for the current page. */
        cursor: number | null;
        /** The page size returned by Atlas. */
        limit: number | null;
        /** Raw Atlas list response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Atlas session recordings with optional customer and date filters. */
    "atlas_so.list_sessions": {
      input: {
        /**
         * The Atlas pagination cursor. Atlas defaults this to 0.
         * @minimum 0
         */
        cursor?: number;
        /**
         * The maximum number of records to return. Atlas defaults this to 20.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The Atlas external session recording ID filter.
         * @format uuid
         */
        externalId?: string;
        /**
         * The customer email address filter.
         * @format email
         */
        email?: string;
        /**
         * The page URL filter.
         * @minLength 1
         */
        pageUrl?: string;
        /**
         * Return sessions that started before this timestamp.
         * @format date-time
         */
        startedBefore?: string;
        /**
         * Return sessions that started after this timestamp.
         * @format date-time
         */
        startedAfter?: string;
      };
      output: {
        /** The Atlas session recordings returned by the API. */
        sessions: Array<{
          /**
           * The Atlas session recording ID.
           * @format uuid
           */
          id?: string;
          /**
           * The Atlas customer ID associated with this session.
           * @format uuid
           */
          customerId?: string;
          /**
           * The timestamp when the session started.
           * @format date-time
           */
          startTime?: string;
          /**
           * The timestamp of the last recorded session activity.
           * @format date-time
           */
          lastActivity?: string;
          /** Atlas session recording metadata. */
          info?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** The total number of available records when Atlas returns it. */
        total: number | null;
        /** The cursor returned by Atlas for the current page. */
        cursor: number | null;
        /** The page size returned by Atlas. */
        limit: number | null;
        /** Raw Atlas list response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a single Atlas customer by ID, email, phone number, or user ID. */
    "atlas_so.lookup_customer": {
      input: {
        /**
         * The Atlas customer ID.
         * @format uuid
         */
        id?: string | null;
        /**
         * The customer's email address.
         * @format email
         */
        email?: string | null;
        /** The customer's phone number. */
        phoneNumber?: string | null;
        /** The external user identifier. */
        userId?: string | null;
      };
      output: {
        /** An Atlas customer resource. */
        customer: {
          /**
           * The Atlas customer ID.
           * @format uuid
           */
          id?: string;
          /**
           * The associated Atlas account ID.
           * @format uuid
           */
          companyId?: string | null;
          /** The customer's first name. */
          firstName?: string | null;
          /** The customer's last name. */
          lastName?: string | null;
          /**
           * The customer's email address.
           * @format email
           */
          email?: string | null;
          /** The customer's phone number. */
          phoneNumber?: string | null;
          /** The external user identifier. */
          externalUserId?: string | null;
          /** Custom customer fields returned by Atlas. */
          customFields?: Record<string, unknown> | null;
          /**
           * The timestamp when the customer was created.
           * @format date-time
           */
          createdAt?: string;
          /** Default sender values for an Atlas customer. */
          defaultSenders?: {
            /** The default SMS sender value. */
            sms?: string | null;
            /** The default email sender value. */
            email?: string | null;
          } | null;
          [key: string]: unknown;
        };
      };
    };
    /** Update an Atlas customer by ID. */
    "atlas_so.update_customer": {
      input: {
        /**
         * The Atlas customer ID.
         * @format uuid
         */
        id: string;
        /** The customer's first name. */
        firstName?: string | null;
        /** The customer's last name. */
        lastName?: string | null;
        /**
         * The customer's email address.
         * @format email
         */
        email?: string | null;
        /** The customer's phone number. */
        phoneNumber?: string | null;
        /** The external user identifier. */
        externalUserId?: string | null;
        /** Custom customer fields keyed by Atlas custom field name. */
        customFields?: Record<string, unknown> | null;
        /** Default sender values for an Atlas customer. */
        defaultSenders?: {
          /** The default SMS sender value. */
          sms?: string | null;
          /** The default email sender value. */
          email?: string | null;
        } | null;
      };
      output: {
        /** An Atlas customer resource. */
        customer: {
          /**
           * The Atlas customer ID.
           * @format uuid
           */
          id?: string;
          /**
           * The associated Atlas account ID.
           * @format uuid
           */
          companyId?: string | null;
          /** The customer's first name. */
          firstName?: string | null;
          /** The customer's last name. */
          lastName?: string | null;
          /**
           * The customer's email address.
           * @format email
           */
          email?: string | null;
          /** The customer's phone number. */
          phoneNumber?: string | null;
          /** The external user identifier. */
          externalUserId?: string | null;
          /** Custom customer fields returned by Atlas. */
          customFields?: Record<string, unknown> | null;
          /**
           * The timestamp when the customer was created.
           * @format date-time
           */
          createdAt?: string;
          /** Default sender values for an Atlas customer. */
          defaultSenders?: {
            /** The default SMS sender value. */
            sms?: string | null;
            /** The default email sender value. */
            email?: string | null;
          } | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create or update an Atlas account using the account upsert endpoint. */
    "atlas_so.upsert_account": {
      input: {
        /** The account name. */
        name?: string | null;
        /**
         * The account email address.
         * @format email
         */
        email?: string | null;
        /** The account website. */
        website?: string | null;
        /** The external account identifier. */
        externalId?: string | null;
        /** Custom account fields keyed by Atlas custom field name. */
        customFields?: Record<string, unknown> | null;
        /**
         * The primary contact customer ID for the account.
         * @format uuid
         */
        primaryContactId?: string | null;
        /**
         * The account manager user ID.
         * @format uuid
         */
        accountManagerId?: string | null;
        /**
         * The secondary account manager user ID.
         * @format uuid
         */
        secondaryAccountManagerId?: string | null;
      };
      output: {
        /** An Atlas account resource. */
        account: {
          /**
           * The Atlas account ID.
           * @format uuid
           */
          id?: string;
          /** The account name. */
          name?: string | null;
          /** The account email address. */
          email?: string | null;
          /** The account website. */
          website?: string | null;
          /** The external account identifier. */
          externalId?: string | null;
          /** Custom account fields returned by Atlas. */
          customFields?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create or update an Atlas customer using the customer upsert endpoint. */
    "atlas_so.upsert_customer": {
      input: {
        /**
         * The Atlas customer ID.
         * @format uuid
         */
        id?: string | null;
        /** The external user identifier used by Atlas upsert. */
        userId?: string | null;
        /** The customer's first name. */
        firstName?: string | null;
        /** The customer's last name. */
        lastName?: string | null;
        /**
         * The customer's email address.
         * @format email
         */
        email?: string | null;
        /** The customer's phone number. */
        phoneNumber?: string | null;
        /** Custom customer fields keyed by Atlas custom field name. */
        customFields?: Record<string, unknown> | null;
        /** The account payload to associate with this customer. */
        account?: Record<string, unknown> | null;
        /** Alternate phone numbers for this customer. */
        alternatePhoneNumbers?: Array<string> | null;
        /** Alternate email addresses for this customer. */
        alternateEmails?: Array<string> | null;
      };
      output: {
        /** An Atlas customer resource. */
        customer: {
          /**
           * The Atlas customer ID.
           * @format uuid
           */
          id?: string;
          /**
           * The associated Atlas account ID.
           * @format uuid
           */
          companyId?: string | null;
          /** The customer's first name. */
          firstName?: string | null;
          /** The customer's last name. */
          lastName?: string | null;
          /**
           * The customer's email address.
           * @format email
           */
          email?: string | null;
          /** The customer's phone number. */
          phoneNumber?: string | null;
          /** The external user identifier. */
          externalUserId?: string | null;
          /** Custom customer fields returned by Atlas. */
          customFields?: Record<string, unknown> | null;
          /**
           * The timestamp when the customer was created.
           * @format date-time
           */
          createdAt?: string;
          /** Default sender values for an Atlas customer. */
          defaultSenders?: {
            /** The default SMS sender value. */
            sms?: string | null;
            /** The default email sender value. */
            email?: string | null;
          } | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
