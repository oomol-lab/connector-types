import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one 7shifts company by ID. */
    "7_shifts.get_company": {
      input: {
        /**
         * The 7shifts API version to send as x-api-version.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        apiVersion?: string;
        /**
         * The 7shifts company GUID to send as x-company-guid.
         * @format uuid
         */
        companyGuid?: string;
        /** The 7shifts company ID. */
        id: number;
      };
      output: {
        /** A normalized 7shifts company. */
        company: {
          /** The 7shifts company ID. */
          id: number;
          /** The company name. */
          name: string;
          /** The company status returned by 7shifts. */
          status: string | null;
          /** The raw company object returned by 7shifts. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List 7shifts companies available to the access token. */
    "7_shifts.list_companies": {
      input: {
        /**
         * The 7shifts API version to send as x-api-version.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        apiVersion?: string;
        /**
         * The 7shifts company GUID to send as x-company-guid.
         * @format uuid
         */
        companyGuid?: string;
        /**
         * A date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        modified_since?: string;
      };
      output: {
        /** The companies returned by 7shifts. */
        companies: Array<{
          /** The 7shifts company ID. */
          id: number;
          /** The company name. */
          name: string;
          /** The company status returned by 7shifts. */
          status: string | null;
          /** The raw company object returned by 7shifts. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List 7shifts departments for a company. */
    "7_shifts.list_departments": {
      input: {
        /**
         * The 7shifts API version to send as x-api-version.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        apiVersion?: string;
        /**
         * The 7shifts company GUID to send as x-company-guid.
         * @format uuid
         */
        companyGuid?: string;
        /** The 7shifts company ID. */
        company_id: number;
        /**
         * A date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        modified_since?: string;
        /** The 7shifts location ID. */
        location_id?: number;
        /**
         * The cursor for the next or previous page of results.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of results desired per page.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The departments returned by 7shifts. */
        departments: Array<{
          /** The 7shifts department ID. */
          id: number;
          /** The department name. */
          name: string;
          /** The raw department object returned by 7shifts. */
          raw: Record<string, unknown>;
        }>;
        /** The cursor metadata returned by 7shifts. */
        cursor: {
          /** The current cursor. */
          current: string | null;
          /** A cursor for navigating to the previous page. */
          prev: string | null;
          /** A cursor for navigating to the next page. */
          next: string | null;
          /** The total items in the current cursor. */
          count: number | null;
        } | null;
      };
    };
    /** List 7shifts locations for a company. */
    "7_shifts.list_locations": {
      input: {
        /**
         * The 7shifts API version to send as x-api-version.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        apiVersion?: string;
        /**
         * The 7shifts company GUID to send as x-company-guid.
         * @format uuid
         */
        companyGuid?: string;
        /** The 7shifts company ID. */
        company_id: number;
        /**
         * A date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        modified_since?: string;
        /** Whether to include deleted locations. */
        deleted?: boolean;
        /**
         * The cursor for the next or previous page of results.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of results desired per page.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The locations returned by 7shifts. */
        locations: Array<{
          /** The 7shifts location ID. */
          id: number;
          /** The location name. */
          name: string;
          /** The raw location object returned by 7shifts. */
          raw: Record<string, unknown>;
        }>;
        /** The cursor metadata returned by 7shifts. */
        cursor: {
          /** The current cursor. */
          current: string | null;
          /** A cursor for navigating to the previous page. */
          prev: string | null;
          /** A cursor for navigating to the next page. */
          next: string | null;
          /** The total items in the current cursor. */
          count: number | null;
        } | null;
      };
    };
    /** List 7shifts roles for a company. */
    "7_shifts.list_roles": {
      input: {
        /**
         * The 7shifts API version to send as x-api-version.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        apiVersion?: string;
        /**
         * The 7shifts company GUID to send as x-company-guid.
         * @format uuid
         */
        companyGuid?: string;
        /** The 7shifts company ID. */
        company_id: number;
        /** The 7shifts location ID. */
        location_id?: number;
        /** The 7shifts department ID. */
        department_id?: number;
        /**
         * The role IDs to include.
         * @minItems 1
         */
        ids?: Array<number>;
        /**
         * A date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        modified_since?: string;
        /**
         * The cursor for the next or previous page of results.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of results desired per page.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The roles returned by 7shifts. */
        roles: Array<{
          /** The 7shifts role ID. */
          id: number;
          /** The role name. */
          name: string;
          /** The raw role object returned by 7shifts. */
          raw: Record<string, unknown>;
        }>;
        /** The cursor metadata returned by 7shifts. */
        cursor: {
          /** The current cursor. */
          current: string | null;
          /** A cursor for navigating to the previous page. */
          prev: string | null;
          /** A cursor for navigating to the next page. */
          next: string | null;
          /** The total items in the current cursor. */
          count: number | null;
        } | null;
      };
    };
    /** List 7shifts users for a company. */
    "7_shifts.list_users": {
      input: {
        /**
         * The 7shifts API version to send as x-api-version.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        apiVersion?: string;
        /**
         * The 7shifts company GUID to send as x-company-guid.
         * @format uuid
         */
        companyGuid?: string;
        /** The 7shifts company ID. */
        company_id: number;
        /**
         * A date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        modified_since?: string;
        /** The 7shifts location ID. */
        location_id?: number;
        /** The 7shifts department ID. */
        department_id?: number;
        /** The 7shifts role ID. */
        role_id?: number;
        /** The user status to filter by. */
        status?: "active" | "inactive";
        /**
         * A partial or full employee name to filter by.
         * @minLength 1
         */
        name?: string;
        /**
         * The user sort expression, such as firstname.asc,lastname.desc.
         * @minLength 1
         */
        sort_by?: string;
        /**
         * The cursor for the next or previous page of results.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of results desired per page.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
      };
      output: {
        /** The users returned by 7shifts. */
        users: Array<{
          /** The 7shifts user ID. */
          id: number;
          /** The user's first name. */
          firstName: string | null;
          /** The user's last name. */
          lastName: string | null;
          /** The user's email address. */
          email: string | null;
          /** Whether the user is active. */
          active: boolean | null;
          /** The raw user object returned by 7shifts. */
          raw: Record<string, unknown>;
        }>;
        /** The cursor metadata returned by 7shifts. */
        cursor: {
          /** The current cursor. */
          current: string | null;
          /** A cursor for navigating to the previous page. */
          prev: string | null;
          /** A cursor for navigating to the next page. */
          next: string | null;
          /** The total items in the current cursor. */
          count: number | null;
        } | null;
      };
    };
    /** Retrieve the 7shifts identity associated with the access token. */
    "7_shifts.retrieve_identity": {
      input: {
        /**
         * The 7shifts API version to send as x-api-version.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        apiVersion?: string;
        /**
         * The 7shifts company GUID to send as x-company-guid.
         * @format uuid
         */
        companyGuid?: string;
      };
      output: {
        /** A normalized 7shifts identity response. */
        identity: {
          /** The authenticated 7shifts identity ID. */
          identityId: number;
          /** The 7shifts users associated with the identity. */
          users: Array<{
            /** The 7shifts user ID. */
            id: number;
            /** The 7shifts identity ID for the user. */
            identityId: number | null;
            /** The 7shifts company ID associated with the user. */
            companyId: number;
            /** The user's first name. */
            firstName: string | null;
            /** The user's last name. */
            lastName: string | null;
            /** The user's email address. */
            email: string | null;
            /** Whether the user is active. */
            active: boolean | null;
            /** The raw user object returned by 7shifts. */
            raw: Record<string, unknown>;
          }>;
          /** The raw identity object returned by 7shifts. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
