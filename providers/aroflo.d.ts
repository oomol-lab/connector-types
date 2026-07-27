import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a specific AroFlo client by encoded client ID. */
    "aroflo.get_client": {
      input: {
        /**
         * An AroFlo encoded identifier.
         * @minLength 1
         */
        clientId: string;
        /** Comma-separated top-level AroFlo fields to include. Sub-entity fields can use bracket notation. */
        fields?: string;
      };
      output: {
        /** The unique identifier for the client. */
        id: string;
        /** The client name. */
        name: string;
        /** Whether the client is an individual. */
        individual?: boolean;
        /** The client's short name. */
        shortName?: string | null;
        /** The client's website. */
        website?: string | null;
        /** Related links returned by AroFlo. */
        links?: Record<string, unknown>;
        /** The raw object returned by AroFlo. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve the public health status for the AroFlo API. */
    "aroflo.get_health_status": {
      input: Record<string, never>;
      output: {
        /** The health status returned by AroFlo. */
        status: string;
        /** The API uptime returned by AroFlo. */
        uptime?: number;
        /** The raw object returned by AroFlo. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a specific AroFlo task by encoded task ID. */
    "aroflo.get_task": {
      input: {
        /**
         * An AroFlo encoded identifier.
         * @minLength 1
         */
        taskId: string;
        /** Comma-separated top-level AroFlo fields to include. Sub-entity fields can use bracket notation. */
        fields?: string;
      };
      output: {
        /** The unique identifier for the task. */
        id: string;
        /** The task name. */
        name?: string;
        /** The task status. */
        status?: string;
        /** The task description. */
        description?: string | null;
        /** The AroFlo job number. */
        jobNumber?: number | null;
        /** The task due date and time. */
        dueDate?: string | null;
        /** The client summary returned for the task. */
        client?: Record<string, unknown>;
        /** The location summary returned for the task. */
        location?: Record<string, unknown>;
        /** Related links returned by AroFlo. */
        links?: Record<string, unknown>;
        /** The raw object returned by AroFlo. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a specific AroFlo user by encoded user ID. */
    "aroflo.get_user": {
      input: {
        /**
         * An AroFlo encoded identifier.
         * @minLength 1
         */
        userId: string;
        /** Comma-separated top-level AroFlo fields to include. Sub-entity fields can use bracket notation. */
        fields?: string;
      };
      output: {
        /** The unique identifier for the user. */
        id: string;
        /** The user's given name. */
        givenName?: string;
        /** The user's family name. */
        familyName?: string;
        /** The user's email address. */
        email?: string | null;
        /** The user's mobile phone number. */
        mobile?: string | null;
        /** The user's phone number. */
        phone?: string | null;
        /** The user's position or job title. */
        position?: string | null;
        /** Whether the user is archived. */
        isArchived?: boolean;
        /** Related links returned by AroFlo. */
        links?: Record<string, unknown>;
        /** The raw object returned by AroFlo. */
        raw: Record<string, unknown>;
      };
    };
    /** List AroFlo clients with optional partial-name filtering and field selection. */
    "aroflo.list_clients": {
      input: {
        /** Filter clients by name using partial matching. */
        name?: string;
        /** Comma-separated top-level AroFlo fields to include. Sub-entity fields can use bracket notation. */
        fields?: string;
      };
      output: {
        /** The total number of matching records. */
        count?: number;
        /** The records returned by AroFlo. */
        items: Array<{
          /** The unique identifier for the client. */
          id: string;
          /** The client name. */
          name: string;
          /** Whether the client is an individual. */
          individual?: boolean;
          /** Related links returned by AroFlo. */
          links?: Record<string, unknown>;
          /** The raw object returned by AroFlo. */
          raw: Record<string, unknown>;
        }>;
        /** AroFlo page metadata. */
        page?: {
          /** The number of pages available. */
          count?: number;
          /** The current page number. */
          number?: number;
          /** The requested page size. */
          size?: number;
        };
        /** The raw object returned by AroFlo. */
        raw: Record<string, unknown>;
      };
    };
    /** List AroFlo tasks with business unit, status, resource, date, and pagination filters. */
    "aroflo.list_tasks": {
      input: {
        /**
         * The encoded business unit identifier. If omitted, AroFlo uses the controlling organisation.
         * @minLength 1
         */
        businessUnitId?: string;
        /**
         * Filter by task status: 0=PENDING, 1=IN_PROGRESS, 2=COMPLETED, 3=ARCHIVED.
         * @minimum 0
         * @maximum 3
         */
        status?: number;
        /**
         * An AroFlo encoded identifier.
         * @minLength 1
         */
        assignedFilterUserId?: string;
        /**
         * An AroFlo encoded identifier.
         * @minLength 1
         */
        scheduledFilterUserId?: string;
        /**
         * An AroFlo encoded identifier.
         * @minLength 1
         */
        contractorId?: string;
        /**
         * An AroFlo encoded identifier.
         * @minLength 1
         */
        locationId?: string;
        /** Filter tasks with no location assigned. */
        noLocation?: boolean;
        /**
         * An AroFlo encoded identifier.
         * @minLength 1
         */
        projectId?: string;
        /**
         * An AroFlo encoded identifier.
         * @minLength 1
         */
        clientId?: string;
        /**
         * An AroFlo encoded identifier.
         * @minLength 1
         */
        assetId?: string;
        /**
         * An AroFlo encoded identifier.
         * @minLength 1
         */
        serviceId?: string;
        /**
         * An AroFlo encoded identifier.
         * @minLength 1
         */
        ownerFilterOrgId?: string;
        /**
         * Comma-separated substatus identifiers to filter by.
         * @minLength 1
         */
        subStatusList?: string;
        /**
         * An AroFlo encoded identifier.
         * @minLength 1
         */
        templateId?: string;
        /**
         * Comma-separated tag identifiers to filter by.
         * @minLength 1
         */
        tagIds?: string;
        /**
         * The starting row for pagination.
         * @minimum 1
         */
        startRow?: number;
        /** The business unit access scope for the authenticated user. */
        userBuAccessType?: "childbus" | "thisbu" | "allbus";
        /**
         * Assigned resources filter, such as user_123 or org_456, comma-separated for multiple items.
         * @minLength 1
         */
        assignedFilter?: string;
        /**
         * Comma-separated service identifiers to filter by.
         * @minLength 1
         */
        serviceList?: string;
        /**
         * Comma-separated task status identifiers to filter by.
         * @minLength 1
         */
        statusList?: string;
        /**
         * Comma-separated priority identifiers to filter by.
         * @minLength 1
         */
        priorityList?: string;
        /**
         * Comma-separated client identifiers to filter by.
         * @minLength 1
         */
        clientList?: string;
        /**
         * Filter by required-by date from.
         * @format date
         */
        requiredByFrom?: string;
        /**
         * Filter by required-by date to.
         * @format date
         */
        requiredByTo?: string;
        /** The task sort field. */
        sortBy?: "requiredby" | "client" | "clientcode" | "status" | "lastupdateutc" | "jobnumber" | "custon" | "service" | "priority" | "task" | "substatus" | "schedule" | "modified" | "completiondate";
        /** Sort in ascending order when true. */
        ascending?: boolean;
        /**
         * The page number for pagination.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Comma-separated top-level AroFlo fields to include. Sub-entity fields can use bracket notation. */
        fields?: string;
      };
      output: {
        /** The total number of matching records. */
        count?: number;
        /** The records returned by AroFlo. */
        items: Array<{
          /** The unique identifier for the task. */
          id: string;
          /** The task name. */
          name?: string;
          /** The task status. */
          status?: string;
          /** The AroFlo job number. */
          jobNumber?: number | null;
          /** The task due date and time. */
          dueDate?: string | null;
          /** The client summary returned for the task. */
          client?: Record<string, unknown>;
          /** The location summary returned for the task. */
          location?: Record<string, unknown>;
          /** Related links returned by AroFlo. */
          links?: Record<string, unknown>;
          /** The raw object returned by AroFlo. */
          raw: Record<string, unknown>;
        }>;
        /** AroFlo page metadata. */
        page?: {
          /** The number of pages available. */
          count?: number;
          /** The current page number. */
          number?: number;
          /** The requested page size. */
          size?: number;
        };
        /** The raw object returned by AroFlo. */
        raw: Record<string, unknown>;
      };
    };
    /** List AroFlo users for an organisation with optional name and access filters. */
    "aroflo.list_users": {
      input: {
        /**
         * An AroFlo encoded identifier.
         * @minLength 1
         */
        orgId: string;
        /** Filter users by given name using partial matching. */
        givenName?: string;
        /** Filter users by surname using partial matching. */
        surname?: string;
        /**
         * Filter users by billing portal access: 1=true, 0=false.
         * @minimum 0
         * @maximum 1
         */
        billingPortalAccess?: number;
        /**
         * When set to 1, return only users selectable as task labour resources.
         * @minimum 0
         * @maximum 1
         */
        assignedUsersOnly?: number;
        /**
         * When set to 1, exclude disabled stockholders from the results.
         * @minimum 0
         * @maximum 1
         */
        excludeDisabledStockholders?: number;
        /**
         * When set to 1, include archived users in the results.
         * @minimum 0
         * @maximum 1
         */
        includeArchived?: number;
        /** Comma-separated top-level AroFlo fields to include. Sub-entity fields can use bracket notation. */
        fields?: string;
      };
      output: {
        /** The total number of matching records. */
        count?: number;
        /** The records returned by AroFlo. */
        items: Array<{
          /** The unique identifier for the user. */
          id: string;
          /** The user's given name. */
          givenName?: string;
          /** The user's family name. */
          familyName?: string;
          /** The user's email address. */
          email?: string | null;
          /** The user's access type. */
          accessType?: string;
          /** Whether the user is archived. */
          isArchived?: boolean;
          /** The user's business unit summary. */
          businessUnit?: Record<string, unknown>;
          /** Related links returned by AroFlo. */
          links?: Record<string, unknown>;
          /** The raw object returned by AroFlo. */
          raw: Record<string, unknown>;
        }>;
        /** AroFlo page metadata. */
        page?: {
          /** The number of pages available. */
          count?: number;
          /** The current page number. */
          number?: number;
          /** The requested page size. */
          size?: number;
        };
        /** The raw object returned by AroFlo. */
        raw: Record<string, unknown>;
      };
    };
  }
}
