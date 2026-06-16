import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a HubSpot company with the provided properties and optional associations. */
    "hubspot.create_company": {
      input: {
        /** HubSpot properties keyed by property name. */
        properties: Record<string, unknown>;
        /** Association definitions to create alongside the record. */
        associations?: Array<Record<string, unknown>>;
      };
      output: {
        /** The created HubSpot company. */
        record: {
          /** HubSpot record identifier. */
          id: string;
          /** Whether the record is archived. */
          archived: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties: Record<string, string | null>;
          /** HubSpot property histories returned when they were requested. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when they were requested. */
          associations?: Record<string, unknown>;
        };
      };
    };
    /** Create a HubSpot contact with the provided properties and optional associations. */
    "hubspot.create_contact": {
      input: {
        /** HubSpot properties keyed by property name. */
        properties: Record<string, unknown>;
        /** Association definitions to create alongside the record. */
        associations?: Array<Record<string, unknown>>;
      };
      output: {
        /** The created HubSpot contact. */
        record: {
          /** HubSpot record identifier. */
          id: string;
          /** Whether the record is archived. */
          archived: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties: Record<string, string | null>;
          /** HubSpot property histories returned when they were requested. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when they were requested. */
          associations?: Record<string, unknown>;
        };
      };
    };
    /** Create a HubSpot deal with the provided properties and optional associations. */
    "hubspot.create_deal": {
      input: {
        /** HubSpot properties keyed by property name. */
        properties: Record<string, unknown>;
        /** Association definitions to create alongside the record. */
        associations?: Array<Record<string, unknown>>;
      };
      output: {
        /** The created HubSpot deal. */
        record: {
          /** HubSpot record identifier. */
          id: string;
          /** Whether the record is archived. */
          archived: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties: Record<string, string | null>;
          /** HubSpot property histories returned when they were requested. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when they were requested. */
          associations?: Record<string, unknown>;
        };
      };
    };
    /** Get a HubSpot company by record ID or by a custom idProperty value. */
    "hubspot.get_company": {
      input: {
        /**
         * HubSpot record identifier.
         * @minLength 1
         */
        recordId: string;
        /**
         * Alternate unique property name that should be used to resolve recordId.
         * @minLength 1
         */
        idProperty?: string;
        /** Property names to include in the returned record payload. */
        properties?: Array<string>;
        /** Property names to include with their value history. */
        propertiesWithHistory?: Array<string>;
        /** Associated object types to include in the response. */
        associations?: Array<string>;
      };
      output: {
        /** The requested HubSpot company. */
        record: {
          /** HubSpot record identifier. */
          id: string;
          /** Whether the record is archived. */
          archived: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties: Record<string, string | null>;
          /** HubSpot property histories returned when they were requested. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when they were requested. */
          associations?: Record<string, unknown>;
        };
      };
    };
    /** Get a HubSpot contact by record ID or by a custom idProperty value. */
    "hubspot.get_contact": {
      input: {
        /**
         * HubSpot record identifier.
         * @minLength 1
         */
        recordId: string;
        /**
         * Alternate unique property name that should be used to resolve recordId.
         * @minLength 1
         */
        idProperty?: string;
        /** Property names to include in the returned record payload. */
        properties?: Array<string>;
        /** Property names to include with their value history. */
        propertiesWithHistory?: Array<string>;
        /** Associated object types to include in the response. */
        associations?: Array<string>;
      };
      output: {
        /** The requested HubSpot contact. */
        record: {
          /** HubSpot record identifier. */
          id: string;
          /** Whether the record is archived. */
          archived: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties: Record<string, string | null>;
          /** HubSpot property histories returned when they were requested. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when they were requested. */
          associations?: Record<string, unknown>;
        };
      };
    };
    /** Get a HubSpot deal by record ID or by a custom idProperty value. */
    "hubspot.get_deal": {
      input: {
        /**
         * HubSpot record identifier.
         * @minLength 1
         */
        recordId: string;
        /**
         * Alternate unique property name that should be used to resolve recordId.
         * @minLength 1
         */
        idProperty?: string;
        /** Property names to include in the returned record payload. */
        properties?: Array<string>;
        /** Property names to include with their value history. */
        propertiesWithHistory?: Array<string>;
        /** Associated object types to include in the response. */
        associations?: Array<string>;
      };
      output: {
        /** The requested HubSpot deal. */
        record: {
          /** HubSpot record identifier. */
          id: string;
          /** Whether the record is archived. */
          archived: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties: Record<string, string | null>;
          /** HubSpot property histories returned when they were requested. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when they were requested. */
          associations?: Record<string, unknown>;
        };
      };
    };
    /** Get a single HubSpot property definition for contacts, companies, or deals. */
    "hubspot.get_property": {
      input: {
        /** HubSpot CRM object type. */
        objectType: "contacts" | "companies" | "deals";
        /**
         * HubSpot property name.
         * @minLength 1
         */
        propertyName: string;
      };
      output: {
        /** The requested HubSpot property definition. */
        property: {
          /** Internal HubSpot property name. */
          name: string;
          /** Display label for the property. */
          label: string;
          /** HubSpot property type. */
          type: string;
          /** HubSpot field presentation type. */
          fieldType: string;
          /** Description configured for the property. */
          description: string | null;
          /** HubSpot property group name. */
          groupName: string | null;
          /** Whether the property enforces unique values. */
          hasUniqueValue: boolean;
          /** Whether the property is hidden. */
          hidden: boolean;
          /** Enumerated options for the property. */
          options: Array<{
            /** Display label for the property option. */
            label: string;
            /** Stored value for the property option. */
            value: string;
            /** Description for the option, when present. */
            description: string | null;
            /** Display order for the option, when present. */
            displayOrder: number | null;
            /** Whether the option is hidden. */
            hidden: boolean;
          }>;
        };
      };
    };
    /** List HubSpot property definitions for contacts, companies, or deals. */
    "hubspot.list_properties": {
      input: {
        /** HubSpot CRM object type. */
        objectType: "contacts" | "companies" | "deals";
      };
      output: {
        /** Property definitions returned for the requested object type. */
        properties: Array<{
          /** Internal HubSpot property name. */
          name: string;
          /** Display label for the property. */
          label: string;
          /** HubSpot property type. */
          type: string;
          /** HubSpot field presentation type. */
          fieldType: string;
          /** Description configured for the property. */
          description: string | null;
          /** HubSpot property group name. */
          groupName: string | null;
          /** Whether the property enforces unique values. */
          hasUniqueValue: boolean;
          /** Whether the property is hidden. */
          hidden: boolean;
          /** Enumerated options for the property. */
          options: Array<{
            /** Display label for the property option. */
            label: string;
            /** Stored value for the property option. */
            value: string;
            /** Description for the option, when present. */
            description: string | null;
            /** Display order for the option, when present. */
            displayOrder: number | null;
            /** Whether the option is hidden. */
            hidden: boolean;
          }>;
        }>;
      };
    };
    /** Search HubSpot companies with optional filters, sorting, and selected properties. */
    "hubspot.search_companies": {
      input: {
        /** Full-text query applied to the HubSpot CRM search. */
        query?: string;
        /** HubSpot filter groups used to narrow the search. */
        filterGroups?: Array<Record<string, unknown>>;
        /** HubSpot sort expressions. */
        sorts?: Array<string>;
        /** Property names to include in the returned record payload. */
        properties?: Array<string>;
        /** Property names to include with their value history. */
        propertiesWithHistory?: Array<string>;
        /** Associated object types to include in the response. */
        associations?: Array<string>;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Paging cursor returned by a previous search request.
         * @minLength 1
         */
        after?: string;
      };
      output: {
        /** Companies returned by the search request. */
        results: Array<{
          /** HubSpot record identifier. */
          id: string;
          /** Whether the record is archived. */
          archived: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties: Record<string, string | null>;
          /** HubSpot property histories returned when they were requested. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when they were requested. */
          associations?: Record<string, unknown>;
        }>;
        /** Paging information for the next page when HubSpot returns it. */
        paging?: {
          /** Cursor for the next search request when another page is available. */
          nextAfter?: string;
        };
      };
    };
    /** Search HubSpot contacts with optional filters, sorting, and selected properties. */
    "hubspot.search_contacts": {
      input: {
        /** Full-text query applied to the HubSpot CRM search. */
        query?: string;
        /** HubSpot filter groups used to narrow the search. */
        filterGroups?: Array<Record<string, unknown>>;
        /** HubSpot sort expressions. */
        sorts?: Array<string>;
        /** Property names to include in the returned record payload. */
        properties?: Array<string>;
        /** Property names to include with their value history. */
        propertiesWithHistory?: Array<string>;
        /** Associated object types to include in the response. */
        associations?: Array<string>;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Paging cursor returned by a previous search request.
         * @minLength 1
         */
        after?: string;
      };
      output: {
        /** Contacts returned by the search request. */
        results: Array<{
          /** HubSpot record identifier. */
          id: string;
          /** Whether the record is archived. */
          archived: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties: Record<string, string | null>;
          /** HubSpot property histories returned when they were requested. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when they were requested. */
          associations?: Record<string, unknown>;
        }>;
        /** Paging information for the next page when HubSpot returns it. */
        paging?: {
          /** Cursor for the next search request when another page is available. */
          nextAfter?: string;
        };
      };
    };
    /** Search HubSpot deals with optional filters, sorting, and selected properties. */
    "hubspot.search_deals": {
      input: {
        /** Full-text query applied to the HubSpot CRM search. */
        query?: string;
        /** HubSpot filter groups used to narrow the search. */
        filterGroups?: Array<Record<string, unknown>>;
        /** HubSpot sort expressions. */
        sorts?: Array<string>;
        /** Property names to include in the returned record payload. */
        properties?: Array<string>;
        /** Property names to include with their value history. */
        propertiesWithHistory?: Array<string>;
        /** Associated object types to include in the response. */
        associations?: Array<string>;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Paging cursor returned by a previous search request.
         * @minLength 1
         */
        after?: string;
      };
      output: {
        /** Deals returned by the search request. */
        results: Array<{
          /** HubSpot record identifier. */
          id: string;
          /** Whether the record is archived. */
          archived: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties: Record<string, string | null>;
          /** HubSpot property histories returned when they were requested. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when they were requested. */
          associations?: Record<string, unknown>;
        }>;
        /** Paging information for the next page when HubSpot returns it. */
        paging?: {
          /** Cursor for the next search request when another page is available. */
          nextAfter?: string;
        };
      };
    };
    /** Update a HubSpot company by record ID or by a custom idProperty value. */
    "hubspot.update_company": {
      input: {
        /**
         * HubSpot record identifier.
         * @minLength 1
         */
        recordId: string;
        /**
         * Alternate unique property name that should be used to resolve recordId.
         * @minLength 1
         */
        idProperty?: string;
        /** HubSpot properties keyed by property name. */
        properties: Record<string, unknown>;
      };
      output: {
        /** The updated HubSpot company. */
        record: {
          /** HubSpot record identifier. */
          id: string;
          /** Whether the record is archived. */
          archived: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties: Record<string, string | null>;
          /** HubSpot property histories returned when they were requested. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when they were requested. */
          associations?: Record<string, unknown>;
        };
      };
    };
    /** Update a HubSpot contact by record ID or by a custom idProperty value. */
    "hubspot.update_contact": {
      input: {
        /**
         * HubSpot record identifier.
         * @minLength 1
         */
        recordId: string;
        /**
         * Alternate unique property name that should be used to resolve recordId.
         * @minLength 1
         */
        idProperty?: string;
        /** HubSpot properties keyed by property name. */
        properties: Record<string, unknown>;
      };
      output: {
        /** The updated HubSpot contact. */
        record: {
          /** HubSpot record identifier. */
          id: string;
          /** Whether the record is archived. */
          archived: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties: Record<string, string | null>;
          /** HubSpot property histories returned when they were requested. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when they were requested. */
          associations?: Record<string, unknown>;
        };
      };
    };
    /** Update a HubSpot deal by record ID or by a custom idProperty value. */
    "hubspot.update_deal": {
      input: {
        /**
         * HubSpot record identifier.
         * @minLength 1
         */
        recordId: string;
        /**
         * Alternate unique property name that should be used to resolve recordId.
         * @minLength 1
         */
        idProperty?: string;
        /** HubSpot properties keyed by property name. */
        properties: Record<string, unknown>;
      };
      output: {
        /** The updated HubSpot deal. */
        record: {
          /** HubSpot record identifier. */
          id: string;
          /** Whether the record is archived. */
          archived: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties: Record<string, string | null>;
          /** HubSpot property histories returned when they were requested. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when they were requested. */
          associations?: Record<string, unknown>;
        };
      };
    };
  }
}
