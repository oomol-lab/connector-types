import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a SafetyCulture action and return the created action ID. */
    "safetyculture.create_action": {
      input: {
        /**
         * Required title of the action. SafetyCulture limits this to 255 characters.
         * @minLength 1
         * @maxLength 255
         */
        title: string;
        /** The unique identifier of the action. If omitted, SafetyCulture generates one. */
        taskId?: string;
        /**
         * Description of the action. SafetyCulture limits this to 30000 characters.
         * @maxLength 30000
         */
        description?: string;
        /** Collaborators involved in the action. */
        collaborators?: Array<{
          /** The collaborator type. */
          type: "USER" | "GROUP" | "EXTERNAL_USER" | "CONTRIBUTOR";
          /** The collaborator role. */
          role?: "ASSIGNEE" | "CREATOR";
          /** The user, group, external user, or contributor identifier. */
          id?: string;
          [key: string]: unknown;
        }>;
        /** ID of the action priority. */
        priorityId?: string;
        /** ID of the action status. */
        statusId?: string;
        /**
         * Date and time this action was created.
         * @format date-time
         */
        createdAt?: string;
        /**
         * Date and time this action is due.
         * @format date-time
         */
        dueAt?: string;
        /** ID of the inspection the action belongs to. */
        inspectionId?: string;
        /** ID of the item in the inspection associated with the action. */
        inspectionItemId?: string;
        /** Template ID associated with the action. */
        templateId?: string;
        /** Site ID associated with the action. */
        siteId?: string;
        /** References attached to the action. */
        references?: Array<{
          /** The reference type. */
          type: "SENSOR" | "SENSOR_ALERT" | "INSPECTION" | "INCIDENT" | "SCHEDULE" | "ACTION" | "LINKED_INSPECTION" | "ASSET_MAINTENANCE_PLAN";
          /** The referenced resource ID. */
          id: string;
          [key: string]: unknown;
        }>;
        /** Asset ID associated with the action. */
        assetId?: string;
        /** IDs of labels associated with the action. */
        labelIds?: Array<string>;
        /** The SafetyCulture action type to create. */
        type?: {
          /** The task type. */
          type: "TASK_TYPE_ACTION" | "TASK_TYPE_CUSTOM";
          /** The action type ID. */
          id: string;
          /** The action type name. */
          name: string;
          [key: string]: unknown;
        };
        /** Custom field values to create with the action. */
        fieldValues?: Array<{
          /** The custom field ID. */
          field_id: string;
          [key: string]: unknown;
        }>;
        /** Template IDs to link to the action. */
        templateIds?: Array<string>;
      };
      output: {
        /** The created SafetyCulture action ID. */
        actionId: string;
        /** The raw SafetyCulture object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a SafetyCulture action by ID. */
    "safetyculture.get_action": {
      input: {
        /**
         * The SafetyCulture action ID.
         * @minLength 1
         */
        actionId: string;
      };
      output: {
        /** A SafetyCulture action object. */
        action: {
          /** The task data associated with the action. */
          task?: Record<string, unknown>;
          /** Custom fields and their values belonging to the action. */
          custom_field_and_values?: Array<Record<string, unknown>>;
          /** Custom type metadata associated with the action. */
          type?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Whether the action is read-only for the token owner. */
        readOnly?: boolean;
        /** The raw SafetyCulture object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a SafetyCulture inspection by ID. */
    "safetyculture.get_inspection": {
      input: {
        /**
         * The SafetyCulture inspection ID.
         * @minLength 1
         */
        inspectionId: string;
      };
      output: {
        /** The raw SafetyCulture object returned by the API. */
        inspection: Record<string, unknown>;
        /** The raw SafetyCulture object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List SafetyCulture actions using pagination, sorting, and optional filters. */
    "safetyculture.list_actions": {
      input: {
        /**
         * Number of actions to return in a single request. Maximum 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The page token returned by a previous list_actions response.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * The inspection ID to list related actions for.
         * @minLength 1
         */
        inspectionId?: string;
        /**
         * Offset from where actions should be listed.
         * @minimum 0
         */
        offset?: number;
        /** The field to use for sorting. */
        sortField?: "PRIORITY" | "DATE_DUE" | "CREATED_AT" | "MODIFIED_AT";
        /** The sorting direction. */
        sortDirection?: "ASC" | "DESC";
        /** Whether SafetyCulture should omit the deprecated total count. */
        withoutCount?: boolean;
        /** Task filters to apply to the SafetyCulture action list request. */
        taskFilters?: Array<Record<string, unknown>>;
      };
      output: {
        /** Actions returned by SafetyCulture. */
        actions: Array<{
          /** The task data associated with the action. */
          task?: Record<string, unknown>;
          /** Custom fields and their values belonging to the action. */
          custom_field_and_values?: Array<Record<string, unknown>>;
          /** Custom type metadata associated with the action. */
          type?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Token for the next page of SafetyCulture actions. */
        nextPageToken: string;
        /**
         * The total number of actions returned by SafetyCulture.
         * @minimum 0
         */
        total: number;
        /** The raw SafetyCulture object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Search SafetyCulture inspections by modification time, template, archive state, completion state, and owner. */
    "safetyculture.search_inspections": {
      input: {
        /** Fields to return for each inspection. audit_id is always included by SafetyCulture. */
        fields?: Array<"audit_id" | "modified_at" | "template_id">;
        /** The order to return inspection results in. */
        order?: "asc" | "desc";
        /**
         * Filter inspections modified after this timestamp.
         * @format date-time
         */
        modifiedAfter?: string;
        /**
         * Filter inspections modified before this timestamp.
         * @format date-time
         */
        modifiedBefore?: string;
        /** Template IDs to search inspections for. */
        templateIds?: Array<string>;
        /** Filter inspections by archived status. */
        archived?: "false" | "true" | "both";
        /** Filter inspections by completion status. */
        completed?: "both" | "false" | "true";
        /** Filter inspections by owner. */
        owner?: "all" | "me" | "other";
        /**
         * The maximum number of inspections to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /**
         * The number of inspection results returned.
         * @minimum 0
         */
        count: number;
        /**
         * The total number of inspection results available.
         * @minimum 0
         */
        total: number;
        /** Inspections returned by SafetyCulture. */
        inspections: Array<{
          /** The SafetyCulture inspection ID. */
          audit_id?: string;
          /** The inspection modification timestamp, when requested. */
          modified_at?: string;
          /** The template ID used by the inspection, when requested. */
          template_id?: string;
          [key: string]: unknown;
        }>;
        /** The raw SafetyCulture object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
  }
}
