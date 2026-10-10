import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a SolarWinds Service Desk incident with assignment, tags, related resources, and JSON custom fields. */
    "solarwinds_service_desk.create_incident": {
      input: {
        /** Incident fields to create. */
        incident: {
          /** Incident name; the API truncates names longer than 255 characters. */
          name: string;
          /** Site ID. */
          site_id?: string | number;
          /** Department ID. */
          department_id?: string | number;
          /** Incident description. */
          description?: string | null;
          /** Tenant-defined incident state ID. */
          state_id?: string | number;
          /** User referenced by email, or an explicit clearing value. */
          assignee?: {
            /** Reference email. */
            email: string;
          } | null | "" | "nil";
          /** Object referenced by name, or an explicit clearing value. */
          group_assignee?: {
            /** Reference name. */
            name: string;
          } | null | "" | "nil";
          /** Assigned user ID. */
          assignee_id?: string | number;
          /** Assigned group ID. */
          group_assignee_id?: string | number;
          /** Incident priority as a name or numeric value. */
          priority?: string | number;
          /** User referenced by email, or an explicit clearing value. */
          requester?: {
            /** Reference email. */
            email: string;
          } | null | "" | "nil";
          /** Object referenced by name, or an explicit clearing value. */
          category?: {
            /** Reference name. */
            name: string;
          } | null | "" | "nil";
          /** Object referenced by name, or an explicit clearing value. */
          subcategory?: {
            /** Reference name. */
            name: string;
          } | null | "" | "nil";
          /** Due date in a SolarWinds-supported date format. */
          due_at?: string;
          /** Comma-separated tags to add. */
          add_to_tag_list?: string;
          /** Comma-separated tags to remove. */
          remove_from_tag_list?: string;
          /** Comma-separated complete tag list. */
          tag_list?: string;
          /** Custom fields addressed by name. */
          custom_fields_values?: {
            /** One or more custom field values. */
            custom_fields_value: {
              /** Custom field name. */
              name: string;
              /** Text or integer value. */
              value?: string | number | null;
              /** User referenced by email, or an explicit clearing value. */
              user_value?: {
                /** Reference email. */
                email: string;
              } | null | "" | "nil";
            } | Array<{
              /** Custom field name. */
              name: string;
              /** Text or integer value. */
              value?: string | number | null;
              /** User referenced by email, or an explicit clearing value. */
              user_value?: {
                /** Reference email. */
                email: string;
              } | null | "" | "nil";
            }>;
          };
          /** Custom field values addressed by ID. */
          custom_fields_values_attributes?: {
            /** Numeric resource identifier, not its display number. */
            id?: number | string;
            /** Numeric resource identifier, not its display number. */
            custom_field_id?: number | string;
            /** Text or integer value. */
            value?: string | number | null;
          } | Array<{
            /** Numeric resource identifier, not its display number. */
            id?: number | string;
            /** Numeric resource identifier, not its display number. */
            custom_field_id?: number | string;
            /** Text or integer value. */
            value?: string | number | null;
          }>;
          /** Related incidents. */
          incidents?: {
            /** Text or integer value. */
            number: string | number;
          } | Array<{
            /** Text or integer value. */
            number: string | number;
          }>;
          /** Related knowledge base solutions. */
          solutions?: {
            /** Text or integer value. */
            number: string | number;
          } | Array<{
            /** Text or integer value. */
            number: string | number;
          }>;
          /** Related changes. */
          changes?: {
            /** Text or integer value. */
            number: string | number;
          } | Array<{
            /** Text or integer value. */
            number: string | number;
          }>;
          /** Related problem; at most one can be associated. */
          problems?: {
            /** Text or integer value. */
            number: string | number;
          } | Array<{
            /** Text or integer value. */
            number: string | number;
          }>;
          /** Related releases. */
          releases?: {
            /** Text or integer value. */
            number: string | number;
          } | Array<{
            /** Text or integer value. */
            number: string | number;
          }>;
          /** Related configuration item IDs. */
          configuration_item_ids?: Array<number | string>;
          /** Email addresses to copy on the incident. */
          cc?: Array<string>;
        };
      };
      output: {
        /** Incident data, including upstream fields for the requested layout. */
        incident: {
          /** Text or integer value. */
          id?: string | number;
          /** Incident display number. */
          number?: number;
          /** Incident name. */
          name?: string;
          /** Incident description. */
          description?: string | null;
          /** Current state name. */
          state?: string;
          /** Priority name. */
          priority?: string;
          /** Requester details. */
          requester?: Record<string, unknown> | null;
          /** Assigned user details. */
          assignee?: Record<string, unknown> | null;
          /** Creation timestamp. */
          created_at?: string;
          /** Last update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Add a public or private comment to a SolarWinds Service Desk incident, optionally triggering notifications. */
    "solarwinds_service_desk.create_incident_comment": {
      input: {
        /** Numeric resource identifier, not its display number. */
        id: number | string;
        /** Comment body. */
        body: string;
        /** Whether the comment is private. */
        is_private?: boolean | "true" | "false";
        /** Numeric resource identifier, not its display number. */
        user_id?: number | string;
        /** Enable notifications; the API does not trigger them by default. */
        add_callbacks?: boolean;
      };
      output: {
        /** Created comment. */
        comment: {
          /** Text or integer value. */
          id?: string | number;
          /** Comment body. */
          body?: string;
          /** Comment privacy flag. */
          is_private?: boolean | string;
          /** Creation timestamp. */
          created_at?: string;
          /** Author details. */
          user?: Record<string, unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Delete a SolarWinds Service Desk incident by its resource ID. */
    "solarwinds_service_desk.delete_incident": {
      input: {
        /** Numeric resource identifier, not its display number. */
        id: number | string;
      };
      output: {
        /** IDs returned by SolarWinds for the deleted incidents. */
        deleted_ids: Array<string | number>;
        [key: string]: unknown;
      };
    };
    /** Get a SolarWinds Service Desk incident by ID, optionally including its long-layout details. */
    "solarwinds_service_desk.get_incident": {
      input: {
        /** Numeric resource identifier, not its display number. */
        id: number | string;
        /** Response layout; long includes comments, attachments, and service statistics. */
        layout?: "short" | "long";
      };
      output: {
        /** Incident data, including upstream fields for the requested layout. */
        incident: {
          /** Text or integer value. */
          id?: string | number;
          /** Incident display number. */
          number?: number;
          /** Incident name. */
          name?: string;
          /** Incident description. */
          description?: string | null;
          /** Current state name. */
          state?: string;
          /** Priority name. */
          priority?: string;
          /** Requester details. */
          requester?: Record<string, unknown> | null;
          /** Assigned user details. */
          assignee?: Record<string, unknown> | null;
          /** Creation timestamp. */
          created_at?: string;
          /** Last update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List SolarWinds Service Desk incidents with pagination, layout, and creation or update time filters. */
    "solarwinds_service_desk.list_incidents": {
      input: {
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records requested per page.
         * @minimum 1
         */
        per_page?: number;
        /** Response layout; long includes comments, attachments, and service statistics. */
        layout?: "short" | "long";
        /** Relative update window: 1-90 or 365 days, or 1h-23h. */
        updated?: string;
        /** Start of update time range in ISO 8601 UTC. */
        updated_from?: string;
        /** End of update time range in ISO 8601 UTC. */
        updated_to?: string;
        /** Start of creation time range in ISO 8601 UTC. */
        created_from?: string;
        /** End of creation time range in ISO 8601 UTC. */
        created_to?: string;
      };
      output: {
        /** Incidents on this page. */
        incidents: Array<{
          /** Text or integer value. */
          id?: string | number;
          /** Incident display number. */
          number?: number;
          /** Incident name. */
          name?: string;
          /** Incident description. */
          description?: string | null;
          /** Current state name. */
          state?: string;
          /** Priority name. */
          priority?: string;
          /** Requester details. */
          requester?: Record<string, unknown> | null;
          /** Assigned user details. */
          assignee?: Record<string, unknown> | null;
          /** Creation timestamp. */
          created_at?: string;
          /** Last update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Requested page number. */
        page: number;
        /** Actual page size reported in X-Per-Page. */
        per_page: number | null;
        /** Total count reported in X-Total-Count. */
        total_count: number | null;
        /** Total pages reported in X-Total-Pages. */
        total_pages: number | null;
        /** Upstream Link header containing pagination URLs; returned without fetching them. */
        link: string | null;
      };
    };
    /** Update a SolarWinds Service Desk incident, including assignment, custom fields, or a state change that may close it. */
    "solarwinds_service_desk.update_incident": {
      input: {
        /** Numeric resource identifier, not its display number. */
        id: number | string;
        /** Fields to update; omitted fields are unchanged. */
        incident: {
          /** Incident name; the API truncates names longer than 255 characters. */
          name?: string;
          /** Site ID. */
          site_id?: string | number;
          /** Department ID. */
          department_id?: string | number;
          /** Incident description. */
          description?: string | null;
          /** Tenant-defined incident state ID. */
          state_id?: string | number;
          /** User referenced by email, or an explicit clearing value. */
          assignee?: {
            /** Reference email. */
            email: string;
          } | null | "" | "nil";
          /** Object referenced by name, or an explicit clearing value. */
          group_assignee?: {
            /** Reference name. */
            name: string;
          } | null | "" | "nil";
          /** Assigned user ID. */
          assignee_id?: string | number;
          /** Assigned group ID. */
          group_assignee_id?: string | number;
          /** Incident priority as a name or numeric value. */
          priority?: string | number;
          /** User referenced by email, or an explicit clearing value. */
          requester?: {
            /** Reference email. */
            email: string;
          } | null | "" | "nil";
          /** Object referenced by name, or an explicit clearing value. */
          category?: {
            /** Reference name. */
            name: string;
          } | null | "" | "nil";
          /** Object referenced by name, or an explicit clearing value. */
          subcategory?: {
            /** Reference name. */
            name: string;
          } | null | "" | "nil";
          /** Due date in a SolarWinds-supported date format. */
          due_at?: string;
          /** Comma-separated tags to add. */
          add_to_tag_list?: string;
          /** Comma-separated tags to remove. */
          remove_from_tag_list?: string;
          /** Comma-separated complete tag list. */
          tag_list?: string;
          /** Custom fields addressed by name. */
          custom_fields_values?: {
            /** One or more custom field values. */
            custom_fields_value: {
              /** Custom field name. */
              name: string;
              /** Text or integer value. */
              value?: string | number | null;
              /** User referenced by email, or an explicit clearing value. */
              user_value?: {
                /** Reference email. */
                email: string;
              } | null | "" | "nil";
            } | Array<{
              /** Custom field name. */
              name: string;
              /** Text or integer value. */
              value?: string | number | null;
              /** User referenced by email, or an explicit clearing value. */
              user_value?: {
                /** Reference email. */
                email: string;
              } | null | "" | "nil";
            }>;
          };
          /** Custom field values addressed by ID. */
          custom_fields_values_attributes?: {
            /** Numeric resource identifier, not its display number. */
            id?: number | string;
            /** Numeric resource identifier, not its display number. */
            custom_field_id?: number | string;
            /** Text or integer value. */
            value?: string | number | null;
          } | Array<{
            /** Numeric resource identifier, not its display number. */
            id?: number | string;
            /** Numeric resource identifier, not its display number. */
            custom_field_id?: number | string;
            /** Text or integer value. */
            value?: string | number | null;
          }>;
          /** Related incidents. */
          incidents?: {
            /** Text or integer value. */
            number: string | number;
          } | Array<{
            /** Text or integer value. */
            number: string | number;
          }>;
          /** Related knowledge base solutions. */
          solutions?: {
            /** Text or integer value. */
            number: string | number;
          } | Array<{
            /** Text or integer value. */
            number: string | number;
          }>;
          /** Related changes. */
          changes?: {
            /** Text or integer value. */
            number: string | number;
          } | Array<{
            /** Text or integer value. */
            number: string | number;
          }>;
          /** Related problem; at most one can be associated. */
          problems?: {
            /** Text or integer value. */
            number: string | number;
          } | Array<{
            /** Text or integer value. */
            number: string | number;
          }>;
          /** Related releases. */
          releases?: {
            /** Text or integer value. */
            number: string | number;
          } | Array<{
            /** Text or integer value. */
            number: string | number;
          }>;
          /** Related configuration item IDs. */
          configuration_item_ids?: Array<number | string>;
          /** Email addresses to copy on the incident. */
          cc?: Array<string>;
        };
      };
      output: {
        /** Incident data, including upstream fields for the requested layout. */
        incident: {
          /** Text or integer value. */
          id?: string | number;
          /** Incident display number. */
          number?: number;
          /** Incident name. */
          name?: string;
          /** Incident description. */
          description?: string | null;
          /** Current state name. */
          state?: string;
          /** Priority name. */
          priority?: string;
          /** Requester details. */
          requester?: Record<string, unknown> | null;
          /** Assigned user details. */
          assignee?: Record<string, unknown> | null;
          /** Creation timestamp. */
          created_at?: string;
          /** Last update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
