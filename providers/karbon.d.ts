import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read a Karbon client group by key, optionally including its business card and client team. */
    "karbon.get_client_group": {
      input: {
        /**
         * The Karbon-generated entity key from the corresponding list action.
         * @minLength 1
         */
        key: string;
        /**
         * Comma-separated related fields to include: BusinessCard, ClientTeam.
         * @minLength 1
         */
        expand?: string;
      };
      output: {
        /** Client group and requested related fields, preserving upstream properties. */
        clientGroup: Record<string, unknown>;
      };
    };
    /** Read a Karbon contact by key, optionally including business cards, client team, client access and service types. */
    "karbon.get_contact": {
      input: {
        /**
         * The Karbon-generated entity key from the corresponding list action.
         * @minLength 1
         */
        key: string;
        /**
         * Comma-separated related fields to include: BusinessCards, ClientTeam, ClientAccess, ServiceTypes.
         * @minLength 1
         */
        expand?: string;
      };
      output: {
        /** Contact and requested related fields, preserving upstream properties. */
        contact: Record<string, unknown>;
      };
    };
    /** Read a Karbon organization by key, optionally including business cards, client team, contacts and service types. */
    "karbon.get_organization": {
      input: {
        /**
         * The Karbon-generated entity key from the corresponding list action.
         * @minLength 1
         */
        key: string;
        /**
         * Comma-separated related fields to include: BusinessCards, ClientTeam, Contacts, ServiceTypes.
         * @minLength 1
         */
        expand?: string;
      };
      output: {
        /** Organization and requested related fields, preserving upstream properties. */
        organization: Record<string, unknown>;
      };
    };
    /** Read Karbon tenant configuration, including contact types, work types, work statuses and service types. */
    "karbon.get_tenant_settings": {
      input: Record<string, never>;
      output: {
        /** Tenant settings with upstream configuration fields preserved. */
        settings: Record<string, unknown>;
      };
    };
    /** Search and paginate Karbon client groups by FullName using OData filters and ordering. */
    "karbon.list_client_groups": {
      input: {
        /** OData filter expression. Supported properties depend on the entity; client groups support FullName. */
        filter?: string;
        /** OData sort expression, such as FullName desc. Contacts and organizations also support LastModifiedDateTime. */
        orderBy?: string;
        /**
         * Maximum records per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        top?: number;
        /**
         * Number of records to skip.
         * @minimum 0
         */
        skip?: number;
        /**
         * The nextPageUrl returned by the same list action. Supply without other query fields.
         * @format uri
         */
        nextPageUrl?: string;
      };
      output: {
        /** Client records in this page. */
        items: Array<Record<string, unknown>>;
        /** Total matching records when provided by Karbon. */
        count?: number;
        /** URL for the next page when more records are available. */
        nextPageUrl?: string;
      };
    };
    /** Search and paginate Karbon contacts by name, email, phone, contact type or external key using OData filters. Hidden and private clients require additional API access. */
    "karbon.list_contacts": {
      input: {
        /** OData filter expression. Supported properties depend on the entity; client groups support FullName. */
        filter?: string;
        /** OData sort expression, such as FullName desc. Contacts and organizations also support LastModifiedDateTime. */
        orderBy?: string;
        /**
         * Maximum records per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        top?: number;
        /**
         * Number of records to skip.
         * @minimum 0
         */
        skip?: number;
        /**
         * The nextPageUrl returned by the same list action. Supply without other query fields.
         * @format uri
         */
        nextPageUrl?: string;
      };
      output: {
        /** Client records in this page. */
        items: Array<Record<string, unknown>>;
        /** Total matching records when provided by Karbon. */
        count?: number;
        /** URL for the next page when more records are available. */
        nextPageUrl?: string;
      };
    };
    /** Search and paginate Karbon organizations using OData filters and ordering. Hidden and private clients require additional API access. */
    "karbon.list_organizations": {
      input: {
        /** OData filter expression. Supported properties depend on the entity; client groups support FullName. */
        filter?: string;
        /** OData sort expression, such as FullName desc. Contacts and organizations also support LastModifiedDateTime. */
        orderBy?: string;
        /**
         * Maximum records per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        top?: number;
        /**
         * Number of records to skip.
         * @minimum 0
         */
        skip?: number;
        /**
         * The nextPageUrl returned by the same list action. Supply without other query fields.
         * @format uri
         */
        nextPageUrl?: string;
      };
      output: {
        /** Client records in this page. */
        items: Array<Record<string, unknown>>;
        /** Total matching records when provided by Karbon. */
        count?: number;
        /** URL for the next page when more records are available. */
        nextPageUrl?: string;
      };
    };
  }
}
