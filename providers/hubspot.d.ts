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
        /** HubSpot CRM record returned by the MCP server. */
        record: {
          /** HubSpot record identifier. */
          id?: string;
          /** Whether the record is archived. */
          archived?: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties?: Record<string, unknown>;
          /** HubSpot property histories keyed by property name. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when requested. */
          associations?: Record<string, unknown>;
          [key: string]: unknown;
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
        /** HubSpot CRM record returned by the MCP server. */
        record: {
          /** HubSpot record identifier. */
          id?: string;
          /** Whether the record is archived. */
          archived?: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties?: Record<string, unknown>;
          /** HubSpot property histories keyed by property name. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when requested. */
          associations?: Record<string, unknown>;
          [key: string]: unknown;
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
        /** HubSpot CRM record returned by the MCP server. */
        record: {
          /** HubSpot record identifier. */
          id?: string;
          /** Whether the record is archived. */
          archived?: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties?: Record<string, unknown>;
          /** HubSpot property histories keyed by property name. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when requested. */
          associations?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get HubSpot campaign analytics for one or more campaigns. */
    "hubspot.get_campaign_analytics": {
      input: {
        /**
         * HubSpot campaign IDs.
         * @minItems 1
         */
        campaignIds: Array<number | string>;
        /**
         * Campaign analytics metric type.
         * @minLength 1
         */
        metricType?: string;
        /**
         * Inclusive analytics start date.
         * @format date
         */
        startDate?: string;
        /**
         * Inclusive analytics end date.
         * @format date
         */
        endDate?: string;
        [key: string]: unknown;
      };
      output: {
        /** Raw response payload returned by the HubSpot MCP tool. */
        result: unknown;
      };
    };
    /** Get metrics and properties for CRM objects associated with a HubSpot campaign. */
    "hubspot.get_campaign_asset_metrics": {
      input: {
        /** HubSpot object ID. */
        campaignId: number | string;
        /**
         * Campaign asset type name.
         * @minLength 1
         */
        assetType: string;
        /**
         * CRM object IDs associated with the campaign.
         * @minItems 1
         */
        objectIds?: Array<number | string>;
        [key: string]: unknown;
      };
      output: {
        /** Raw response payload returned by the HubSpot MCP tool. */
        result: unknown;
      };
    };
    /** List HubSpot asset type names available as campaign assets. */
    "hubspot.get_campaign_asset_types": {
      input: Record<string, unknown>;
      output: {
        /** Raw response payload returned by the HubSpot MCP tool. */
        result: unknown;
      };
    };
    /** Fetch paginated HubSpot contact IDs for a campaign filtered by attribution type. */
    "hubspot.get_campaign_contacts_by_type": {
      input: {
        /** HubSpot object ID. */
        campaignId: number | string;
        /**
         * Campaign attribution type.
         * @minLength 1
         */
        attributionType: string;
        /**
         * Maximum number of contact IDs to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Paging cursor returned by a previous request.
         * @minLength 1
         */
        after?: string;
        [key: string]: unknown;
      };
      output: {
        /** Raw response payload returned by the HubSpot MCP tool. */
        result: unknown;
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
         * Alternate unique property name that should resolve recordId.
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
        /** HubSpot CRM record returned by the MCP server. */
        record: {
          /** HubSpot record identifier. */
          id?: string;
          /** Whether the record is archived. */
          archived?: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties?: Record<string, unknown>;
          /** HubSpot property histories keyed by property name. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when requested. */
          associations?: Record<string, unknown>;
          [key: string]: unknown;
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
         * Alternate unique property name that should resolve recordId.
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
        /** HubSpot CRM record returned by the MCP server. */
        record: {
          /** HubSpot record identifier. */
          id?: string;
          /** Whether the record is archived. */
          archived?: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties?: Record<string, unknown>;
          /** HubSpot property histories keyed by property name. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when requested. */
          associations?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch one or more HubSpot CRM objects by ID through the MCP server. */
    "hubspot.get_crm_objects": {
      input: {
        /**
         * HubSpot CRM object type accepted by the MCP server, such as contacts, companies, deals, tickets, line_items, products, calls, emails, meetings, notes, tasks, campaigns, or a custom object type.
         * @minLength 1
         */
        objectType: string;
        /**
         * HubSpot object IDs to fetch.
         * @minItems 1
         * @maxItems 100
         */
        objectIds: Array<number | string>;
        /**
         * Alternate unique property name that should resolve objectIds.
         * @minLength 1
         */
        idProperty?: string;
        /** Property names to include in the returned record payload. */
        properties?: Array<string>;
        /** Property names to include with their value history. */
        propertiesWithHistory?: Array<string>;
        /** Associated object types to include in the response. */
        associations?: Array<string>;
        [key: string]: unknown;
      };
      output: {
        /** Raw response payload returned by the HubSpot MCP tool. */
        result: unknown;
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
         * Alternate unique property name that should resolve recordId.
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
        /** HubSpot CRM record returned by the MCP server. */
        record: {
          /** HubSpot record identifier. */
          id?: string;
          /** Whether the record is archived. */
          archived?: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties?: Record<string, unknown>;
          /** HubSpot property histories keyed by property name. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when requested. */
          associations?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get full HubSpot property definitions for an object type. */
    "hubspot.get_properties": {
      input: {
        /**
         * HubSpot CRM object type accepted by the MCP server, such as contacts, companies, deals, tickets, line_items, products, calls, emails, meetings, notes, tasks, campaigns, or a custom object type.
         * @minLength 1
         */
        objectType: string;
        /** Specific property names to fetch when a full definition is needed. */
        propertyNames?: Array<string>;
        [key: string]: unknown;
      };
      output: {
        /** Raw response payload returned by the HubSpot MCP tool. */
        result: unknown;
      };
    };
    /** Get a single HubSpot property definition for an MCP-supported object type. */
    "hubspot.get_property": {
      input: {
        /**
         * HubSpot CRM object type accepted by the MCP server, such as contacts, companies, deals, tickets, line_items, products, calls, emails, meetings, notes, tasks, campaigns, or a custom object type.
         * @minLength 1
         */
        objectType: string;
        /**
         * HubSpot property name.
         * @minLength 1
         */
        propertyName: string;
      };
      output: {
        /** HubSpot property definition returned by the MCP server. */
        property: {
          /** Internal HubSpot property name. */
          name?: string;
          /** Display label for the property. */
          label?: string;
          /** HubSpot property type. */
          type?: string;
          /** HubSpot field presentation type. */
          fieldType?: string;
          /** Description configured for the property. */
          description?: string | null;
          /** HubSpot property group name. */
          groupName?: string | null;
          /** Enumerated options for the property. */
          options?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the authenticated HubSpot MCP user's account and access details. */
    "hubspot.get_user_details": {
      input: Record<string, never>;
      output: {
        /** Authenticated user, account, and access details from HubSpot MCP. */
        userDetails: Record<string, unknown>;
      };
    };
    /** List or search HubSpot property definitions for an MCP-supported object type. */
    "hubspot.list_properties": {
      input: {
        /**
         * HubSpot CRM object type accepted by the MCP server, such as contacts, companies, deals, tickets, line_items, products, calls, emails, meetings, notes, tasks, campaigns, or a custom object type.
         * @minLength 1
         */
        objectType: string;
        /**
         * Keywords used to search matching property definitions.
         * @maxItems 5
         */
        keywords?: Array<string>;
        /** Specific property names to fetch when a full definition is needed. */
        propertyNames?: Array<string>;
      };
      output: {
        /** Property definitions returned for the requested object type. */
        properties: Array<{
          /** Internal HubSpot property name. */
          name?: string;
          /** Display label for the property. */
          label?: string;
          /** HubSpot property type. */
          type?: string;
          /** HubSpot field presentation type. */
          fieldType?: string;
          /** Description configured for the property. */
          description?: string | null;
          /** HubSpot property group name. */
          groupName?: string | null;
          /** Enumerated options for the property. */
          options?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create or update HubSpot CRM records or activities through the MCP server. */
    "hubspot.manage_crm_objects": {
      input: {
        /** HubSpot MCP createRequest payload. */
        createRequest: Record<string, unknown>;
        [key: string]: unknown;
      } | {
        /** HubSpot MCP updateRequest payload. */
        updateRequest: Record<string, unknown>;
        [key: string]: unknown;
      } | {
        /**
         * HubSpot CRM object type accepted by the MCP server, such as contacts, companies, deals, tickets, line_items, products, calls, emails, meetings, notes, tasks, campaigns, or a custom object type.
         * @minLength 1
         */
        objectType: string;
        /** CRM mutation operation. */
        operation: "create";
        /** HubSpot properties keyed by property name. */
        properties: Record<string, unknown>;
        /** Association definitions to create alongside the record. */
        associations?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      } | {
        /**
         * HubSpot CRM object type accepted by the MCP server, such as contacts, companies, deals, tickets, line_items, products, calls, emails, meetings, notes, tasks, campaigns, or a custom object type.
         * @minLength 1
         */
        objectType: string;
        /** CRM mutation operation. */
        operation: "update";
        /**
         * HubSpot record identifier for update operations.
         * @minLength 1
         */
        recordId: string;
        /**
         * Alternate unique property name that should resolve the record ID.
         * @minLength 1
         */
        idProperty?: string;
        /** HubSpot properties keyed by property name. */
        properties: Record<string, unknown>;
        [key: string]: unknown;
      } | {
        /**
         * HubSpot CRM object type accepted by the MCP server, such as contacts, companies, deals, tickets, line_items, products, calls, emails, meetings, notes, tasks, campaigns, or a custom object type.
         * @minLength 1
         */
        objectType: string;
        /** CRM mutation operation. */
        operation: "update";
        /**
         * HubSpot record identifier for update operations.
         * @minLength 1
         */
        id: string;
        /**
         * Alternate unique property name that should resolve the record ID.
         * @minLength 1
         */
        idProperty?: string;
        /** HubSpot properties keyed by property name. */
        properties: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: {
        /** Raw response payload returned by the HubSpot MCP tool. */
        result: unknown;
      };
    };
    /** Search HubSpot companies with optional filters, sorting, and selected properties. */
    "hubspot.search_companies": {
      input: {
        /** Full-text query applied to the HubSpot CRM search. */
        query?: string;
        /**
         * HubSpot filter groups used to narrow the search.
         * @maxItems 5
         */
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
        /** Records returned by the search request. */
        results: Array<{
          /** HubSpot record identifier. */
          id?: string;
          /** Whether the record is archived. */
          archived?: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties?: Record<string, unknown>;
          /** HubSpot property histories keyed by property name. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when requested. */
          associations?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Paging information returned by HubSpot. */
        paging?: {
          /** Cursor for the next search request when another page is available. */
          nextAfter?: string;
          [key: string]: unknown;
        };
        /** Raw MCP response payload. */
        raw?: unknown;
      };
    };
    /** Search HubSpot contacts with optional filters, sorting, and selected properties. */
    "hubspot.search_contacts": {
      input: {
        /** Full-text query applied to the HubSpot CRM search. */
        query?: string;
        /**
         * HubSpot filter groups used to narrow the search.
         * @maxItems 5
         */
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
        /** Records returned by the search request. */
        results: Array<{
          /** HubSpot record identifier. */
          id?: string;
          /** Whether the record is archived. */
          archived?: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties?: Record<string, unknown>;
          /** HubSpot property histories keyed by property name. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when requested. */
          associations?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Paging information returned by HubSpot. */
        paging?: {
          /** Cursor for the next search request when another page is available. */
          nextAfter?: string;
          [key: string]: unknown;
        };
        /** Raw MCP response payload. */
        raw?: unknown;
      };
    };
    /** Search and filter HubSpot CRM records for any object type supported by the MCP server. */
    "hubspot.search_crm_objects": {
      input: {
        /**
         * HubSpot CRM object type accepted by the MCP server, such as contacts, companies, deals, tickets, line_items, products, calls, emails, meetings, notes, tasks, campaigns, or a custom object type.
         * @minLength 1
         */
        objectType: string;
        /** Full-text query applied to the HubSpot CRM search. */
        query?: string;
        /**
         * HubSpot filter groups used to narrow the search.
         * @maxItems 5
         */
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
        [key: string]: unknown;
      };
      output: {
        /** Raw response payload returned by the HubSpot MCP tool. */
        result: unknown;
      };
    };
    /** Search HubSpot deals with optional filters, sorting, and selected properties. */
    "hubspot.search_deals": {
      input: {
        /** Full-text query applied to the HubSpot CRM search. */
        query?: string;
        /**
         * HubSpot filter groups used to narrow the search.
         * @maxItems 5
         */
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
        /** Records returned by the search request. */
        results: Array<{
          /** HubSpot record identifier. */
          id?: string;
          /** Whether the record is archived. */
          archived?: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties?: Record<string, unknown>;
          /** HubSpot property histories keyed by property name. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when requested. */
          associations?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Paging information returned by HubSpot. */
        paging?: {
          /** Cursor for the next search request when another page is available. */
          nextAfter?: string;
          [key: string]: unknown;
        };
        /** Raw MCP response payload. */
        raw?: unknown;
      };
    };
    /** Find HubSpot CRM record owners by name, email, or owner ID. */
    "hubspot.search_owners": {
      input: {
        /** Owner name or email query. */
        query?: string;
        /**
         * HubSpot owner IDs to look up.
         * @maxItems 100
         */
        ownerIds?: Array<number | string>;
        /**
         * Maximum number of owners to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Paging cursor returned by a previous owner search request.
         * @minLength 1
         */
        after?: string;
        [key: string]: unknown;
      };
      output: {
        /** Raw response payload returned by the HubSpot MCP tool. */
        result: unknown;
      };
    };
    /** Find HubSpot property definitions for an object type using keyword search. */
    "hubspot.search_properties": {
      input: {
        /**
         * HubSpot CRM object type accepted by the MCP server, such as contacts, companies, deals, tickets, line_items, products, calls, emails, meetings, notes, tasks, campaigns, or a custom object type.
         * @minLength 1
         */
        objectType: string;
        /**
         * Keywords used to search matching property definitions.
         * @minItems 1
         * @maxItems 5
         */
        keywords: Array<string>;
        [key: string]: unknown;
      };
      output: {
        /** Raw response payload returned by the HubSpot MCP tool. */
        result: unknown;
      };
    };
    /** Send feedback about the HubSpot MCP server experience to HubSpot. */
    "hubspot.submit_feedback": {
      input: {
        /**
         * Feedback text to send to HubSpot.
         * @minLength 1
         */
        feedback: string;
        [key: string]: unknown;
      };
      output: {
        /** Raw response payload returned by the HubSpot MCP tool. */
        result: unknown;
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
         * Alternate unique property name that should resolve recordId.
         * @minLength 1
         */
        idProperty?: string;
        /** HubSpot properties keyed by property name. */
        properties: Record<string, unknown>;
      };
      output: {
        /** HubSpot CRM record returned by the MCP server. */
        record: {
          /** HubSpot record identifier. */
          id?: string;
          /** Whether the record is archived. */
          archived?: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties?: Record<string, unknown>;
          /** HubSpot property histories keyed by property name. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when requested. */
          associations?: Record<string, unknown>;
          [key: string]: unknown;
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
         * Alternate unique property name that should resolve recordId.
         * @minLength 1
         */
        idProperty?: string;
        /** HubSpot properties keyed by property name. */
        properties: Record<string, unknown>;
      };
      output: {
        /** HubSpot CRM record returned by the MCP server. */
        record: {
          /** HubSpot record identifier. */
          id?: string;
          /** Whether the record is archived. */
          archived?: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties?: Record<string, unknown>;
          /** HubSpot property histories keyed by property name. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when requested. */
          associations?: Record<string, unknown>;
          [key: string]: unknown;
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
         * Alternate unique property name that should resolve recordId.
         * @minLength 1
         */
        idProperty?: string;
        /** HubSpot properties keyed by property name. */
        properties: Record<string, unknown>;
      };
      output: {
        /** HubSpot CRM record returned by the MCP server. */
        record: {
          /** HubSpot record identifier. */
          id?: string;
          /** Whether the record is archived. */
          archived?: boolean;
          /** Timestamp when the record was created. */
          createdAt?: string;
          /** Timestamp when the record was last updated. */
          updatedAt?: string;
          /** HubSpot properties keyed by property name. */
          properties?: Record<string, unknown>;
          /** HubSpot property histories keyed by property name. */
          propertiesWithHistory?: Record<string, unknown>;
          /** Associations returned by HubSpot when requested. */
          associations?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
