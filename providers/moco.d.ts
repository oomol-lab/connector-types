import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one MOCO company by ID. */
    "moco.get_company": {
      input: {
        /**
         * The MOCO company identifier.
         * @exclusiveMinimum 0
         */
        companyId: number;
      };
      output: {
        /** A normalized MOCO company. */
        company: {
          /**
           * The MOCO company identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The MOCO company type when returned. */
          type: string | null;
          /** The MOCO company name. */
          name: string;
          /** The company website when returned. */
          website: string | null;
          /** The company email address when returned. */
          email: string | null;
          /** The company phone number when returned. */
          phone: string | null;
          /** MOCO tags attached to the record. */
          tags: Array<string>;
          /** The MOCO company identifier string when returned. */
          identifier: string | null;
          /** Whether the company is active when returned. */
          active: boolean | null;
          /** The company archive date when returned. */
          archivedOn: string | null;
          /** The company creation timestamp when returned. */
          createdAt: string | null;
          /** The company update timestamp when returned. */
          updatedAt: string | null;
          /** The raw MOCO record returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one MOCO contact person by ID. */
    "moco.get_contact": {
      input: {
        /**
         * The MOCO contact identifier.
         * @exclusiveMinimum 0
         */
        contactId: number;
      };
      output: {
        /** A normalized MOCO contact person. */
        contact: {
          /**
           * The MOCO contact identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The contact gender code when returned. */
          gender: string | null;
          /** The contact first name when returned. */
          firstName: string | null;
          /** The contact last name when returned. */
          lastName: string | null;
          /** The contact full name assembled from returned name fields. */
          fullName: string | null;
          /** The contact job position when returned. */
          jobPosition: string | null;
          /** The contact mobile phone number when returned. */
          mobilePhone: string | null;
          /** The contact work phone number when returned. */
          workPhone: string | null;
          /** The contact work email address when returned. */
          workEmail: string | null;
          /** MOCO tags attached to the record. */
          tags: Array<string>;
          /** A compact MOCO company reference. */
          company: {
            /**
             * The MOCO company identifier.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The MOCO company type when returned. */
            type: string | null;
            /** The MOCO company name. */
            name: string;
          } | null;
          /** The contact creation timestamp when returned. */
          createdAt: string | null;
          /** The contact update timestamp when returned. */
          updatedAt: string | null;
          /** The raw MOCO record returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve the current MOCO user's profile. */
    "moco.get_profile": {
      input: Record<string, never>;
      output: {
        /** A normalized MOCO profile. */
        profile: {
          /**
           * The MOCO profile user identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The profile email address when returned. */
          email: string | null;
          /** The profile full name when returned. */
          fullName: string | null;
          /** The profile first name when returned. */
          firstName: string | null;
          /** The profile last name when returned. */
          lastName: string | null;
          /** Whether the profile user is active when returned. */
          active: boolean | null;
          /** Whether the profile user is external when returned. */
          external: boolean | null;
          /** The profile avatar URL when returned. */
          avatarUrl: string | null;
          /** A compact MOCO unit reference. */
          unit: {
            /**
             * The MOCO unit identifier.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The MOCO unit name. */
            name: string;
          } | null;
          /** The profile creation timestamp when returned. */
          createdAt: string | null;
          /** The profile update timestamp when returned. */
          updatedAt: string | null;
          /** The raw MOCO record returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List MOCO companies with official filters and response-header pagination. */
    "moco.list_companies": {
      input: {
        /**
         * The MOCO page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of MOCO records to request per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * Return records updated after this UTC timestamp.
         * @format date-time
         */
        updatedAfter?: string;
        /**
         * The MOCO field name to sort by.
         * @minLength 1
         */
        sortBy?: string;
        /** The MOCO sort direction. */
        sortDirection?: "asc" | "desc";
        /** Whether archived MOCO companies should be included. */
        includeArchived?: boolean;
        /** The MOCO company type. */
        type?: "customer" | "supplier" | "organization";
        /**
         * Tags to match as a comma-separated MOCO tags filter.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * Filter companies by the MOCO identifier string.
         * @minLength 1
         */
        identifier?: string;
        /**
         * Search companies by term.
         * @minLength 1
         */
        term?: string;
      };
      output: {
        /** Companies returned by MOCO. */
        companies: Array<{
          /**
           * The MOCO company identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The MOCO company type when returned. */
          type: string | null;
          /** The MOCO company name. */
          name: string;
          /** The company website when returned. */
          website: string | null;
          /** The company email address when returned. */
          email: string | null;
          /** The company phone number when returned. */
          phone: string | null;
          /** MOCO tags attached to the record. */
          tags: Array<string>;
          /** The MOCO company identifier string when returned. */
          identifier: string | null;
          /** Whether the company is active when returned. */
          active: boolean | null;
          /** The company archive date when returned. */
          archivedOn: string | null;
          /** The company creation timestamp when returned. */
          createdAt: string | null;
          /** The company update timestamp when returned. */
          updatedAt: string | null;
          /** The raw MOCO record returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata normalized from MOCO response headers. */
        pagination: {
          /** The current MOCO response page when returned. */
          page: number | null;
          /** The page size returned by MOCO when returned. */
          perPage: number | null;
          /** The total number of matching records when returned. */
          total: number | null;
          /** Whether the MOCO Link header contains a next page. */
          hasNextPage: boolean;
          /** The next page number when MOCO returned one. */
          nextPage: number | null;
        };
      };
    };
    /** List MOCO contact people with official filters and response-header pagination. */
    "moco.list_contacts": {
      input: {
        /**
         * The MOCO page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of MOCO records to request per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * Return records updated after this UTC timestamp.
         * @format date-time
         */
        updatedAfter?: string;
        /**
         * The MOCO field name to sort by.
         * @minLength 1
         */
        sortBy?: string;
        /** The MOCO sort direction. */
        sortDirection?: "asc" | "desc";
        /**
         * Tags to match as a comma-separated MOCO tags filter.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * Search contacts by name, email, or company.
         * @minLength 1
         */
        term?: string;
        /**
         * Reverse lookup contacts by work or mobile phone number.
         * @minLength 1
         */
        phone?: string;
      };
      output: {
        /** Contacts returned by MOCO. */
        contacts: Array<{
          /**
           * The MOCO contact identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The contact gender code when returned. */
          gender: string | null;
          /** The contact first name when returned. */
          firstName: string | null;
          /** The contact last name when returned. */
          lastName: string | null;
          /** The contact full name assembled from returned name fields. */
          fullName: string | null;
          /** The contact job position when returned. */
          jobPosition: string | null;
          /** The contact mobile phone number when returned. */
          mobilePhone: string | null;
          /** The contact work phone number when returned. */
          workPhone: string | null;
          /** The contact work email address when returned. */
          workEmail: string | null;
          /** MOCO tags attached to the record. */
          tags: Array<string>;
          /** A compact MOCO company reference. */
          company: {
            /**
             * The MOCO company identifier.
             * @exclusiveMinimum 0
             */
            id: number;
            /** The MOCO company type when returned. */
            type: string | null;
            /** The MOCO company name. */
            name: string;
          } | null;
          /** The contact creation timestamp when returned. */
          createdAt: string | null;
          /** The contact update timestamp when returned. */
          updatedAt: string | null;
          /** The raw MOCO record returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata normalized from MOCO response headers. */
        pagination: {
          /** The current MOCO response page when returned. */
          page: number | null;
          /** The page size returned by MOCO when returned. */
          perPage: number | null;
          /** The total number of matching records when returned. */
          total: number | null;
          /** Whether the MOCO Link header contains a next page. */
          hasNextPage: boolean;
          /** The next page number when MOCO returned one. */
          nextPage: number | null;
        };
      };
    };
  }
}
