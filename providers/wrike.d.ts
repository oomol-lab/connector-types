import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Wrike folder under a parent folder or root folder ID. */
    "wrike.create_folder": {
      input: {
        /**
         * The Wrike API resource ID.
         * @minLength 1
         */
        folderId: string;
        /**
         * The Wrike folder title.
         * @minLength 1
         */
        title: string;
        /** The Wrike folder description. */
        description?: string;
        /**
         * Wrike user or invited user IDs to share the folder with.
         * @minItems 1
         */
        shareds?: Array<string>;
        /** Whether to include invitations in ownerIds and sharedIds. */
        withInvitations?: boolean;
        /**
         * Optional Wrike folder response fields.
         * @minItems 1
         */
        fields?: Array<"cascadingFields" | "accessRoles" | "customItemTypeId" | "customColumnIds" | "contractType" | "attachmentCount" | "briefDescription" | "finance">;
      };
      output: {
        /**
         * The Wrike response kind.
         * @minLength 1
         */
        kind: string;
        /**
         * The pagination token returned by Wrike for the next page.
         * @minLength 1
         */
        nextPageToken?: string;
        /** The raw Wrike API object. */
        raw: Record<string, unknown>;
        /** A normalized Wrike folder or project. */
        folder: {
          /** The Wrike folder ID. */
          id: string | null;
          /** The folder or project title. */
          title: string | null;
          /** The folder color returned by Wrike. */
          color: string | null;
          /** Child folder IDs returned by Wrike. */
          childIds: Array<string>;
          /** The Wrike folder scope. */
          scope: string | null;
          /** The raw Wrike API object. */
          project: Record<string, unknown> | null;
          /** The Wrike folder permalink. */
          permalink: string | null;
          /** The raw Wrike API object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a Wrike task in a folder using JSON-friendly task fields. */
    "wrike.create_task": {
      input: {
        /**
         * The Wrike API resource ID.
         * @minLength 1
         */
        folderId: string;
        /**
         * The Wrike task title.
         * @minLength 1
         */
        title: string;
        /** The Wrike task description. */
        description?: string;
        /** The Wrike task status. */
        status?: "Active" | "Deferred" | "Completed" | "Cancelled";
        /** The Wrike task importance. */
        importance?: "High" | "Low" | "Normal";
        /**
         * Wrike contact IDs to assign to the task.
         * @minItems 1
         */
        responsibles?: Array<string>;
        /**
         * Additional Wrike parent folder IDs.
         * @minItems 1
         */
        parents?: Array<string>;
        /**
         * Wrike parent task IDs for creating a subtask.
         * @minItems 1
         */
        superTasks?: Array<string>;
        /**
         * Wrike contact IDs to add as followers.
         * @minItems 1
         */
        followers?: Array<string>;
        /** Whether the caller should follow the created task. */
        follow?: boolean;
        /**
         * Optional Wrike task response fields.
         * @minItems 1
         */
        fields?: Array<"cascadingFields" | "customItemTypeId" | "billingType" | "attachmentCount" | "workScheduleId" | "responsiblePlaceholderIds" | "effortAllocation" | "recurrent" | "finance">;
      };
      output: {
        /**
         * The Wrike response kind.
         * @minLength 1
         */
        kind: string;
        /**
         * The pagination token returned by Wrike for the next page.
         * @minLength 1
         */
        nextPageToken?: string;
        /** The raw Wrike API object. */
        raw: Record<string, unknown>;
        /** A normalized Wrike task. */
        task: {
          /** The Wrike task ID. */
          id: string | null;
          /** The task title. */
          title: string | null;
          /** The Wrike task status. */
          status: string | null;
          /** The Wrike task importance. */
          importance: string | null;
          /** The Wrike task permalink. */
          permalink: string | null;
          /** Wrike contact IDs assigned to the task. */
          responsibleIds: Array<string>;
          /** Wrike parent folder IDs for the task. */
          parentIds: Array<string>;
          /** Wrike parent task IDs for the task. */
          superTaskIds: Array<string>;
          /** Wrike subtask IDs for the task. */
          subTaskIds: Array<string>;
          /** The task creation timestamp returned by Wrike. */
          createdDate: string | null;
          /** The task update timestamp returned by Wrike. */
          updatedDate: string | null;
          /** The task completion timestamp returned by Wrike. */
          completedDate: string | null;
          /** The raw Wrike API object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve complete Wrike folder or project information by ID. */
    "wrike.get_folders": {
      input: {
        /**
         * Wrike API resource IDs.
         * @minItems 1
         * @maxItems 1000
         */
        folderIds: Array<string>;
        /** Whether to include invitations in sharedIds. */
        withInvitations?: boolean;
        /** Whether to strip HTML tags from custom fields. */
        plainTextCustomFields?: boolean;
        /**
         * Optional Wrike folder response fields.
         * @minItems 1
         */
        fields?: Array<"cascadingFields" | "accessRoles" | "customItemTypeId" | "customColumnIds" | "contractType" | "attachmentCount" | "briefDescription" | "finance">;
      };
      output: {
        /**
         * The Wrike response kind.
         * @minLength 1
         */
        kind: string;
        /**
         * The pagination token returned by Wrike for the next page.
         * @minLength 1
         */
        nextPageToken?: string;
        /** The raw Wrike API object. */
        raw: Record<string, unknown>;
        /** Folders returned by Wrike. */
        folders: Array<{
          /** The Wrike folder ID. */
          id: string | null;
          /** The folder or project title. */
          title: string | null;
          /** The folder color returned by Wrike. */
          color: string | null;
          /** Child folder IDs returned by Wrike. */
          childIds: Array<string>;
          /** The Wrike folder scope. */
          scope: string | null;
          /** The raw Wrike API object. */
          project: Record<string, unknown> | null;
          /** The Wrike folder permalink. */
          permalink: string | null;
          /** The raw Wrike API object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Retrieve complete Wrike task information by ID. */
    "wrike.get_tasks": {
      input: {
        /**
         * Wrike API resource IDs.
         * @minItems 1
         * @maxItems 1000
         */
        taskIds: Array<string>;
        /** Whether to include invitations in sharedIds and responsibleIds. */
        withInvitations?: boolean;
        /** Whether to strip HTML tags from custom fields. */
        plainTextCustomFields?: boolean;
        /**
         * Optional Wrike task response fields.
         * @minItems 1
         */
        fields?: Array<"cascadingFields" | "customItemTypeId" | "billingType" | "attachmentCount" | "workScheduleId" | "responsiblePlaceholderIds" | "effortAllocation" | "recurrent" | "finance">;
      };
      output: {
        /**
         * The Wrike response kind.
         * @minLength 1
         */
        kind: string;
        /**
         * The pagination token returned by Wrike for the next page.
         * @minLength 1
         */
        nextPageToken?: string;
        /** The raw Wrike API object. */
        raw: Record<string, unknown>;
        /** Tasks returned by Wrike. */
        tasks: Array<{
          /** The Wrike task ID. */
          id: string | null;
          /** The task title. */
          title: string | null;
          /** The Wrike task status. */
          status: string | null;
          /** The Wrike task importance. */
          importance: string | null;
          /** The Wrike task permalink. */
          permalink: string | null;
          /** Wrike contact IDs assigned to the task. */
          responsibleIds: Array<string>;
          /** Wrike parent folder IDs for the task. */
          parentIds: Array<string>;
          /** Wrike parent task IDs for the task. */
          superTaskIds: Array<string>;
          /** Wrike subtask IDs for the task. */
          subTaskIds: Array<string>;
          /** The task creation timestamp returned by Wrike. */
          createdDate: string | null;
          /** The task update timestamp returned by Wrike. */
          updatedDate: string | null;
          /** The task completion timestamp returned by Wrike. */
          completedDate: string | null;
          /** The raw Wrike API object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Wrike contacts in the current account with optional filters. */
    "wrike.list_contacts": {
      input: {
        /** Whether to return only the requesting user's contact. */
        me?: boolean;
        /** Whether to include deleted contacts. */
        deleted?: boolean;
        /** Whether to filter contacts by active status. */
        active?: boolean;
        /**
         * The contact name filter.
         * @minLength 1
         */
        name?: string;
        /**
         * Email addresses to filter contacts by.
         * @minItems 1
         * @maxItems 100
         */
        emails?: Array<string>;
        /**
         * Wrike contact types to include.
         * @minItems 1
         */
        types?: Array<"Group" | "Asset" | "Person" | "Robot">;
        /**
         * Optional Wrike contact response fields.
         * @minItems 1
         */
        fields?: Array<"metadata" | "currentCostRate" | "customFields" | "currentBillRate" | "jobRoleId" | "workScheduleId">;
      };
      output: {
        /**
         * The Wrike response kind.
         * @minLength 1
         */
        kind: string;
        /**
         * The pagination token returned by Wrike for the next page.
         * @minLength 1
         */
        nextPageToken?: string;
        /** The raw Wrike API object. */
        raw: Record<string, unknown>;
        /** Contacts returned by Wrike. */
        contacts: Array<{
          /** The Wrike contact ID. */
          id: string | null;
          /** The contact first name. */
          firstName: string | null;
          /** The contact last name. */
          lastName: string | null;
          /** The Wrike contact type. */
          type: string | null;
          /** The first email from the contact profiles. */
          email: string | null;
          /** The first account ID from the contact profiles. */
          accountId: string | null;
          /** The contact timezone. */
          timezone: string | null;
          /** The contact locale. */
          locale: string | null;
          /** Whether Wrike marks the contact as deleted. */
          deleted: boolean | null;
          /** Whether this contact is the requesting user. */
          me: boolean | null;
          /** The raw Wrike API object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Wrike folders and projects in the current account. */
    "wrike.list_folders": {
      input: {
        /**
         * Folder permalink to match exactly.
         * @minLength 1
         */
        permalink?: string;
        /** Whether to add all descendant folders to the search scope. */
        descendants?: boolean;
        /** Filter only projects when true or only folders when false. */
        project?: boolean;
        /** Whether to get folders from the recycle bin. */
        deleted?: boolean;
        /**
         * The number of folders to return. Wrike supports up to 1000.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * The Wrike pagination token from the previous response.
         * @minLength 1
         */
        nextPageToken?: string;
        /**
         * Optional Wrike folder response fields.
         * @minItems 1
         */
        fields?: Array<"cascadingFields" | "accessRoles" | "customItemTypeId" | "customColumnIds" | "contractType" | "attachmentCount" | "briefDescription" | "finance">;
      };
      output: {
        /**
         * The Wrike response kind.
         * @minLength 1
         */
        kind: string;
        /**
         * The pagination token returned by Wrike for the next page.
         * @minLength 1
         */
        nextPageToken?: string;
        /** The raw Wrike API object. */
        raw: Record<string, unknown>;
        /** Folders returned by Wrike. */
        folders: Array<{
          /** The Wrike folder ID. */
          id: string | null;
          /** The folder or project title. */
          title: string | null;
          /** The folder color returned by Wrike. */
          color: string | null;
          /** Child folder IDs returned by Wrike. */
          childIds: Array<string>;
          /** The Wrike folder scope. */
          scope: string | null;
          /** The raw Wrike API object. */
          project: Record<string, unknown> | null;
          /** The Wrike folder permalink. */
          permalink: string | null;
          /** The raw Wrike API object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Search Wrike tasks in the current account with optional filters. */
    "wrike.list_tasks": {
      input: {
        /**
         * A title substring filter.
         * @minLength 1
         */
        title?: string;
        /**
         * Wrike task statuses to include.
         * @minItems 1
         */
        status?: Array<"Active" | "Deferred" | "Completed" | "Cancelled">;
        /** The Wrike task importance. */
        importance?: "High" | "Low" | "Normal";
        /** The Wrike task type. */
        type?: "Milestone" | "Backlog" | "Planned";
        /**
         * The maximum number of tasks returned by Wrike.
         * @minimum 1
         */
        limit?: number;
        /** The Wrike task sort field. */
        sortField?: "Status" | "Importance" | "UpdatedDate" | "CreatedDate" | "Title" | "StartFinishInterval" | "DueDate" | "LastAccessDate" | "CompletedDate";
        /** The Wrike task sort order. */
        sortOrder?: "Asc" | "Desc";
        /**
         * The Wrike pagination token from the previous response.
         * @minLength 1
         */
        nextPageToken?: string;
        /**
         * Wrike contact IDs used as author filters.
         * @minItems 1
         */
        authors?: Array<string>;
        /**
         * Wrike contact IDs used as assignee filters.
         * @minItems 1
         */
        responsibles?: Array<string>;
        /**
         * Optional Wrike task response fields.
         * @minItems 1
         */
        fields?: Array<"cascadingFields" | "customItemTypeId" | "billingType" | "attachmentCount" | "workScheduleId" | "responsiblePlaceholderIds" | "effortAllocation" | "recurrent" | "finance">;
      };
      output: {
        /**
         * The Wrike response kind.
         * @minLength 1
         */
        kind: string;
        /**
         * The pagination token returned by Wrike for the next page.
         * @minLength 1
         */
        nextPageToken?: string;
        /** The raw Wrike API object. */
        raw: Record<string, unknown>;
        /** Tasks returned by Wrike. */
        tasks: Array<{
          /** The Wrike task ID. */
          id: string | null;
          /** The task title. */
          title: string | null;
          /** The Wrike task status. */
          status: string | null;
          /** The Wrike task importance. */
          importance: string | null;
          /** The Wrike task permalink. */
          permalink: string | null;
          /** Wrike contact IDs assigned to the task. */
          responsibleIds: Array<string>;
          /** Wrike parent folder IDs for the task. */
          parentIds: Array<string>;
          /** Wrike parent task IDs for the task. */
          superTaskIds: Array<string>;
          /** Wrike subtask IDs for the task. */
          subTaskIds: Array<string>;
          /** The task creation timestamp returned by Wrike. */
          createdDate: string | null;
          /** The task update timestamp returned by Wrike. */
          updatedDate: string | null;
          /** The task completion timestamp returned by Wrike. */
          completedDate: string | null;
          /** The raw Wrike API object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
