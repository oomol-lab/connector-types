import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Fireberry account record. */
    "fireberry.create_account": {
      input: {
        /** Fireberry account fields to create or update. */
        fields: {
          /**
           * Name of the account.
           * @minLength 1
           */
          accountname: string;
          /** Account identifier; unique values are recommended. */
          accountnumber?: string;
          /** Primary email address for the account. */
          emailaddress1?: string;
          /** Primary telephone number for the account. */
          telephone1?: string;
          /** Website URL for the account. */
          websiteurl?: string;
          /** Billing city. */
          billingcity?: string;
          /** Billing country. */
          billingcountry?: string;
          /** Billing state. */
          billingstate?: string;
          /** Billing street. */
          billingstreet?: string;
          /** Billing zip code. */
          billingzipcode?: string;
          /** Description of up to 4,000 characters. */
          description?: string;
          /** The GUID of the system user who owns the record. */
          ownerid?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** Whether Fireberry reported the mutation as successful. */
        success: boolean;
        /** The Fireberry response message. */
        message: string;
        /** The raw Fireberry object returned by the API. */
        record: Record<string, unknown>;
        /** The raw Fireberry object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Create one Fireberry contact record. */
    "fireberry.create_contact": {
      input: {
        /** Fireberry contact fields to create or update. */
        fields: {
          /**
           * First name of the contact.
           * @minLength 1
           */
          firstname: string;
          /** Last name of the contact. */
          lastname?: string;
          /** The related account GUID. */
          accountid?: string;
          /** Company name. */
          companyname?: string;
          /** Job title. */
          jobtitle?: string;
          /** Primary email address for the contact. */
          emailaddress1?: string;
          /** Primary mobile phone number. */
          mobilephone1?: string;
          /** Primary telephone number. */
          telephone1?: string;
          /** Billing city. */
          billingcity?: string;
          /** Billing country. */
          billingcountry?: string;
          /** Billing state. */
          billingstate?: string;
          /** Billing street. */
          billingstreet?: string;
          /** Billing zip code. */
          billingzipcode?: string;
          /** Description of up to 4,000 characters. */
          description?: string;
          /** The GUID of the system user who owns the record. */
          ownerid?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** Whether Fireberry reported the mutation as successful. */
        success: boolean;
        /** The Fireberry response message. */
        message: string;
        /** The raw Fireberry object returned by the API. */
        record: Record<string, unknown>;
        /** The raw Fireberry object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete one Fireberry account record by GUID. */
    "fireberry.delete_account": {
      input: {
        /**
         * The Fireberry record GUID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Fireberry reported the delete as successful. */
        success: boolean;
        /** The Fireberry response message. */
        message: string;
        /** The raw Fireberry object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete one Fireberry contact record by GUID. */
    "fireberry.delete_contact": {
      input: {
        /**
         * The Fireberry record GUID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Fireberry reported the delete as successful. */
        success: boolean;
        /** The Fireberry response message. */
        message: string;
        /** The raw Fireberry object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Fireberry account record by GUID. */
    "fireberry.get_account": {
      input: {
        /**
         * The Fireberry record GUID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The raw Fireberry object returned by the API. */
        record: Record<string, unknown>;
        /** The raw Fireberry object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Fireberry contact record by GUID. */
    "fireberry.get_contact": {
      input: {
        /**
         * The Fireberry record GUID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The raw Fireberry object returned by the API. */
        record: Record<string, unknown>;
        /** The raw Fireberry object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Fireberry account records with simple page and page size controls. */
    "fireberry.list_accounts": {
      input: {
        /**
         * The maximum number of records to return. Fireberry accepts 1 through 50.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /**
         * The page number to return. Fireberry accepts 1 through 10.
         * @minimum 1
         * @maximum 10
         */
        pageNumber?: number;
      };
      output: {
        /** The primary key field name for the object. */
        primaryKey: string;
        /** The primary display field name for the object. */
        primaryField: string;
        /**
         * The total number of available records.
         * @minimum 0
         */
        totalRecords: number;
        /**
         * The returned page size.
         * @minimum 0
         */
        pageSize: number;
        /**
         * The returned page number.
         * @minimum 0
         */
        pageNumber: number;
        /** Fireberry records returned by the API. */
        records: Array<Record<string, unknown>>;
        /** The raw Fireberry object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Fireberry contact records with simple page and page size controls. */
    "fireberry.list_contacts": {
      input: {
        /**
         * The maximum number of records to return. Fireberry accepts 1 through 50.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /**
         * The page number to return. Fireberry accepts 1 through 10.
         * @minimum 1
         * @maximum 10
         */
        pageNumber?: number;
      };
      output: {
        /** The primary key field name for the object. */
        primaryKey: string;
        /** The primary display field name for the object. */
        primaryField: string;
        /**
         * The total number of available records.
         * @minimum 0
         */
        totalRecords: number;
        /**
         * The returned page size.
         * @minimum 0
         */
        pageSize: number;
        /**
         * The returned page number.
         * @minimum 0
         */
        pageNumber: number;
        /** Fireberry records returned by the API. */
        records: Array<Record<string, unknown>>;
        /** The raw Fireberry object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Search, filter, sort, aggregate, and paginate Fireberry records using v3 query. */
    "fireberry.query_records": {
      input: {
        /** The numeric Fireberry object type code to query. */
        objectType: number;
        /**
         * Fields to include in the response.
         * @minItems 1
         */
        fields: Array<{
          /** A valid Fireberry field name, including related fields using underscore. */
          name: string;
          /** An alias for the aggregated field in the result set. */
          alias?: string;
          /** The aggregate function to apply to the field. */
          aggrFunc?: "SUM" | "COUNT" | "MIN" | "MAX";
        }>;
        /** Filter condition groups to apply. */
        filter?: Array<{
          /** The logical operator applied between conditions in this group. */
          type: "AND" | "OR";
          /**
           * Filter conditions in this group.
           * @minItems 1
           */
          conditions: Array<{
            /** The Fireberry field name to filter on. */
            fieldName: string;
            /** The Fireberry comparison operator. */
            operator: "eq" | "ne" | "lt" | "gt" | "le" | "ge" | "start-with" | "not-start-with" | "is-null" | "is-not-null" | "eq-in" | "not-in" | "between" | "userid";
            /** The value to compare against in a Fireberry query. */
            value?: string | number | boolean | Array<string | number | boolean>;
          }>;
        }>;
        /** Sort instructions to apply. */
        orderBy?: Array<{
          /** The Fireberry field name to sort by. */
          fieldName: string;
          /** The sort direction. */
          direction?: "ASC" | "DESC";
        }>;
        /** Grouping fields to apply for aggregation mode. */
        groupBy?: Array<{
          /** The Fireberry field name to group by. */
          fieldName: string;
        }>;
        /**
         * The page number to return.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of records to return. Fireberry accepts 1 through 500.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
      };
      output: {
        /** Fireberry query records returned by the API. */
        records: Array<Record<string, unknown>>;
        /** The raw Fireberry object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Update one Fireberry account record by GUID. */
    "fireberry.update_account": {
      input: {
        /**
         * The Fireberry account GUID.
         * @minLength 1
         */
        id: string;
        /** Fireberry account fields to create or update. */
        fields: {
          /**
           * Name of the account.
           * @minLength 1
           */
          accountname: string;
          /** Account identifier; unique values are recommended. */
          accountnumber?: string;
          /** Primary email address for the account. */
          emailaddress1?: string;
          /** Primary telephone number for the account. */
          telephone1?: string;
          /** Website URL for the account. */
          websiteurl?: string;
          /** Billing city. */
          billingcity?: string;
          /** Billing country. */
          billingcountry?: string;
          /** Billing state. */
          billingstate?: string;
          /** Billing street. */
          billingstreet?: string;
          /** Billing zip code. */
          billingzipcode?: string;
          /** Description of up to 4,000 characters. */
          description?: string;
          /** The GUID of the system user who owns the record. */
          ownerid?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** Whether Fireberry reported the mutation as successful. */
        success: boolean;
        /** The Fireberry response message. */
        message: string;
        /** The raw Fireberry object returned by the API. */
        record: Record<string, unknown>;
        /** The raw Fireberry object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Update one Fireberry contact record by GUID. */
    "fireberry.update_contact": {
      input: {
        /**
         * The Fireberry contact GUID.
         * @minLength 1
         */
        id: string;
        /** Fireberry contact fields to create or update. */
        fields: {
          /**
           * First name of the contact.
           * @minLength 1
           */
          firstname: string;
          /** Last name of the contact. */
          lastname?: string;
          /** The related account GUID. */
          accountid?: string;
          /** Company name. */
          companyname?: string;
          /** Job title. */
          jobtitle?: string;
          /** Primary email address for the contact. */
          emailaddress1?: string;
          /** Primary mobile phone number. */
          mobilephone1?: string;
          /** Primary telephone number. */
          telephone1?: string;
          /** Billing city. */
          billingcity?: string;
          /** Billing country. */
          billingcountry?: string;
          /** Billing state. */
          billingstate?: string;
          /** Billing street. */
          billingstreet?: string;
          /** Billing zip code. */
          billingzipcode?: string;
          /** Description of up to 4,000 characters. */
          description?: string;
          /** The GUID of the system user who owns the record. */
          ownerid?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** Whether Fireberry reported the mutation as successful. */
        success: boolean;
        /** The Fireberry response message. */
        message: string;
        /** The raw Fireberry object returned by the API. */
        record: Record<string, unknown>;
        /** The raw Fireberry object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
  }
}
