import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Filter OneDesk work items by item type and return matching external IDs. */
    "onedesk.filter_items": {
      input: {
        /**
         * The OneDesk item types to include, such as ticket or task.
         * @minItems 1
         */
        itemTypes: Array<string>;
        /**
         * The OneDesk property filters to apply.
         * @minItems 1
         */
        properties?: Array<{
          /**
           * The OneDesk property name to filter, such as name or creationTime.
           * @minLength 1
           */
          property: string;
          /** The OneDesk filter comparison operation to apply to this property or custom field. */
          operation: "EQ" | "NE" | "CONTAINS" | "NOT_CONTAINS" | "LE" | "LT" | "GT" | "GE";
          /** The value OneDesk should use in the filtering operation. */
          value: string | number | boolean | null | Array<string | number | boolean | null>;
        }>;
        /**
         * The OneDesk custom field filters to apply.
         * @minItems 1
         */
        customFields?: Array<{
          /**
           * The OneDesk custom field name to filter.
           * @minLength 1
           */
          name: string;
          /** The OneDesk filter comparison operation to apply to this property or custom field. */
          operation: "EQ" | "NE" | "CONTAINS" | "NOT_CONTAINS" | "LE" | "LT" | "GT" | "GE";
          /** The value OneDesk should use in the filtering operation. */
          value: string | number | boolean | null | Array<string | number | boolean | null>;
        }>;
        /** Whether OneDesk should return results in ascending creation order. Defaults to descending when omitted. */
        isAsc?: boolean;
        /**
         * The maximum number of external IDs to return. OneDesk allows up to 200 on external ID filter endpoints.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * The zero-based result offset to start from.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The OneDesk API result code. */
        code: string | null;
        /** The matching OneDesk external IDs. */
        externalIds: Array<string>;
        /** The total number of resources matching the filter. */
        totalNum: number | null;
        /** The property filters OneDesk applied. */
        appliedPropertyFilters: Array<Record<string, unknown>>;
        /** The custom field filters OneDesk applied. */
        appliedCustomFieldFilters: Array<Record<string, unknown>>;
        /** Property filters OneDesk could not apply. */
        notAppliedPropertyFilters: Array<string>;
        /** Custom field filters OneDesk could not apply. */
        notAppliedCustomFieldFilters: Array<string>;
        /** The raw OneDesk filter response. */
        raw: Record<string, unknown>;
      };
    };
    /** Filter OneDesk projects and return matching project external IDs. */
    "onedesk.filter_projects": {
      input: {
        /**
         * The OneDesk property filters to apply.
         * @minItems 1
         */
        properties?: Array<{
          /**
           * The OneDesk property name to filter, such as name or creationTime.
           * @minLength 1
           */
          property: string;
          /** The OneDesk filter comparison operation to apply to this property or custom field. */
          operation: "EQ" | "NE" | "CONTAINS" | "NOT_CONTAINS" | "LE" | "LT" | "GT" | "GE";
          /** The value OneDesk should use in the filtering operation. */
          value: string | number | boolean | null | Array<string | number | boolean | null>;
        }>;
        /**
         * The OneDesk custom field filters to apply.
         * @minItems 1
         */
        customFields?: Array<{
          /**
           * The OneDesk custom field name to filter.
           * @minLength 1
           */
          name: string;
          /** The OneDesk filter comparison operation to apply to this property or custom field. */
          operation: "EQ" | "NE" | "CONTAINS" | "NOT_CONTAINS" | "LE" | "LT" | "GT" | "GE";
          /** The value OneDesk should use in the filtering operation. */
          value: string | number | boolean | null | Array<string | number | boolean | null>;
        }>;
        /** Whether OneDesk should return results in ascending creation order. Defaults to descending when omitted. */
        isAsc?: boolean;
        /**
         * The maximum number of external IDs to return. OneDesk allows up to 200 on external ID filter endpoints.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * The zero-based result offset to start from.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The OneDesk API result code. */
        code: string | null;
        /** The matching OneDesk external IDs. */
        externalIds: Array<string>;
        /** The total number of resources matching the filter. */
        totalNum: number | null;
        /** The property filters OneDesk applied. */
        appliedPropertyFilters: Array<Record<string, unknown>>;
        /** The custom field filters OneDesk applied. */
        appliedCustomFieldFilters: Array<Record<string, unknown>>;
        /** Property filters OneDesk could not apply. */
        notAppliedPropertyFilters: Array<string>;
        /** Custom field filters OneDesk could not apply. */
        notAppliedCustomFieldFilters: Array<string>;
        /** The raw OneDesk filter response. */
        raw: Record<string, unknown>;
      };
    };
    /** Get OneDesk work item details by external ID or numeric ID. */
    "onedesk.get_item": {
      input: {
        /**
         * The OneDesk external ID of the resource.
         * @minLength 1
         */
        externalId?: string;
        /**
         * The numeric OneDesk ID of the resource.
         * @exclusiveMinimum 0
         */
        id?: number;
      };
      output: {
        /** The OneDesk API result code. */
        code: string | null;
        /** The OneDesk work item details. */
        item: Record<string, unknown>;
        /** The raw OneDesk item response. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the OneDesk organization profile and policy for the connected API key. */
    "onedesk.get_organization_profile": {
      input: Record<string, never>;
      output: {
        /** The OneDesk API result code. */
        code: string | null;
        /** The OneDesk response data. */
        data: unknown;
        /** The raw OneDesk response. */
        raw: Record<string, unknown>;
      };
    };
    /** Get OneDesk project details by external ID or numeric ID. */
    "onedesk.get_project": {
      input: {
        /**
         * The OneDesk external ID of the resource.
         * @minLength 1
         */
        externalId?: string;
        /**
         * The numeric OneDesk ID of the resource.
         * @exclusiveMinimum 0
         */
        id?: number;
      };
      output: {
        /** The OneDesk API result code. */
        code: string | null;
        /** The OneDesk project details. */
        project: Record<string, unknown>;
        /** The raw OneDesk project response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
