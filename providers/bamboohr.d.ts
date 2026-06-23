import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve basic BambooHR company profile information for the connected tenant. */
    "bamboohr.get_company_information": {
      input: Record<string, never>;
      output: {
        /** BambooHR company profile information. */
        company: {
          /** Company legal name. */
          legalName?: string;
          /** Company display name. */
          displayName?: string;
          /** Company primary address. */
          address?: {
            /** Company primary address line 1. */
            line1?: string;
            /** Company primary address line 2. */
            line2?: string;
            /** Company city. */
            city?: string;
            /** Company state or province. */
            state?: string;
            /** Company ZIP or postal code. */
            zip?: string;
            [key: string]: unknown;
          };
          /** Company contact phone number. */
          phone?: string;
          [key: string]: unknown;
        };
        /** Raw BambooHR company information response. */
        raw: unknown;
      };
    };
    /** Retrieve one BambooHR employee by ID with optional field aliases. */
    "bamboohr.get_employee": {
      input: {
        /**
         * The BambooHR employee ID to retrieve.
         * @minLength 1
         */
        employeeId: string;
        /**
         * BambooHR field aliases to request, such as firstName, lastName, jobTitle, or department.
         * @minItems 1
         * @maxItems 400
         */
        fields?: Array<string>;
        /** Whether to return only currently effective values for historical fields. */
        onlyCurrent?: boolean;
      };
      output: {
        /** A BambooHR employee record. */
        employee: {
          /** BambooHR employee ID. */
          id?: string;
          /** BambooHR employee ID returned by list endpoints. */
          employeeId?: string;
          /** Employee first name. */
          firstName?: string;
          /** Employee last name. */
          lastName?: string;
          /** Employee display name. */
          displayName?: string;
          /** Employee job title. */
          jobTitle?: string;
          /** Employee department. */
          department?: string;
          /** Employee location. */
          location?: string;
          /** Employee work email address. */
          workEmail?: string;
          /** Employee status. */
          status?: string;
          /** Fields BambooHR suppressed because the authenticated user cannot view them. */
          _restrictedFields?: Array<string>;
          [key: string]: unknown;
        };
        /** Raw BambooHR employee response. */
        raw: unknown;
      };
    };
    /** List BambooHR employees with optional additional field aliases and cursor paging. */
    "bamboohr.list_employees": {
      input: {
        /**
         * BambooHR field aliases to request, such as firstName, lastName, jobTitle, or department.
         * @minItems 1
         * @maxItems 400
         */
        fields?: Array<string>;
        /**
         * Maximum number of employees to return in one page.
         * @maximum 2500
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Cursor for the next page of employees.
         * @minLength 1
         */
        after?: string;
        /**
         * Cursor for the previous page of employees.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /** BambooHR employees returned for the requested page. */
        employees: Array<{
          /** BambooHR employee ID. */
          id?: string;
          /** BambooHR employee ID returned by list endpoints. */
          employeeId?: string;
          /** Employee first name. */
          firstName?: string;
          /** Employee last name. */
          lastName?: string;
          /** Employee display name. */
          displayName?: string;
          /** Employee job title. */
          jobTitle?: string;
          /** Employee department. */
          department?: string;
          /** Employee location. */
          location?: string;
          /** Employee work email address. */
          workEmail?: string;
          /** Employee status. */
          status?: string;
          /** Fields BambooHR suppressed because the authenticated user cannot view them. */
          _restrictedFields?: Array<string>;
          [key: string]: unknown;
        }>;
        /** BambooHR pagination metadata. */
        meta: {
          /** Total number of employees matching the request. */
          total?: number;
          /** BambooHR cursor pagination state. */
          page?: {
            /** Cursor for the next page of results. */
            nextCursor?: string | null;
            /** Cursor for the previous page of results. */
            prevCursor?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** BambooHR pagination links. */
        links: {
          /** URL for the current page. */
          self?: string;
          /** URL for the next page, if present. */
          next?: string | null;
          /** URL for the previous page, if present. */
          prev?: string | null;
          [key: string]: unknown;
        };
        /** Raw BambooHR employee list response. */
        raw: unknown;
      };
    };
    /** List BambooHR employee fields available to the connected account. */
    "bamboohr.list_fields": {
      input: Record<string, never>;
      output: {
        /** BambooHR field definitions. */
        fields: Array<{
          /** BambooHR field identifier. */
          id?: string | number;
          /** BambooHR field display name. */
          name?: string;
          /** BambooHR API field alias. */
          alias?: string;
          /** BambooHR field data type. */
          type?: string;
          /** Whether this BambooHR field is deprecated. */
          deprecated?: string;
          [key: string]: unknown;
        }>;
        /** Raw BambooHR field list response. */
        raw: unknown;
      };
    };
  }
}
