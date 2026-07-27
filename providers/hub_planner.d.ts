import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Hub Planner project with core scheduling and budget fields. */
    "hub_planner.create_project": {
      input: {
        /**
         * The project name.
         * @minLength 1
         */
        name: string;
        /** Free-form project notes. */
        note?: string;
        /** The current Hub Planner project status. */
        status?: "STATUS_ACTIVE" | "STATUS_ARCHIVED" | "STATUS_PENDING" | "STATUS_PLANNED" | "STATUS_FLOATING";
        /**
         * A unique project code.
         * @minLength 1
         */
        projectCode?: string;
        /**
         * Custom project metadata with at most 255 characters.
         * @maxLength 255
         */
        metadata?: string;
        /**
         * The project display color.
         * @minLength 1
         */
        backgroundColor?: string;
        /** Whether to use the default status color. */
        useStatusColor?: boolean;
        /** Whether project display dates are enabled. */
        useProjectDuration?: boolean;
        /**
         * The project display start date in YYYY-MM-DD format.
         * @format date
         */
        start?: string;
        /**
         * The project display end date in YYYY-MM-DD format.
         * @format date
         */
        end?: string;
        /**
         * The number of budgeted project hours.
         * @minimum 0
         */
        budgetHours?: number;
        /**
         * The cash budget amount.
         * @minimum 0
         */
        budgetCashAmount?: number;
        /**
         * The currency code for the cash budget.
         * @minLength 1
         */
        budgetCurrency?: string;
        /** Whether time entry is enabled for the project. */
        timeEntryEnabled?: boolean;
        /** Whether time entry is locked for the project. */
        timeEntryLocked?: boolean;
        /** Whether project time entries require approval. */
        timeEntryApproval?: boolean;
        /** Whether project time entries require notes. */
        timeEntryNoteRequired?: boolean;
        /** Resource IDs to assign to the project. */
        resources?: Array<string>;
        /** Resource IDs to assign as project managers. */
        projectManagers?: Array<string>;
      };
      output: {
        /** A project returned by Hub Planner. */
        project: {
          /** The unique project ID. */
          _id?: string;
          /** The project name. */
          name?: string;
          /** The project notes. */
          note?: string;
          /** The project creation timestamp. */
          createdDate?: string;
          /** The project update timestamp. */
          updatedDate?: string;
          /** The unique project code. */
          projectCode?: string;
          /** The project status returned by Hub Planner. */
          status?: string;
          /** The project metadata value. */
          metadata?: string;
          /** The project display color. */
          backgroundColor?: string;
          /** The project display start date. */
          start?: string | null;
          /** The project display end date. */
          end?: string | null;
          /** Whether project display dates are enabled. */
          useProjectDuration?: boolean;
          /** Whether time entry is enabled for the project. */
          timeEntryEnabled?: boolean;
          /** Whether time entry is locked for the project. */
          timeEntryLocked?: boolean;
          /** Whether project time entries require approval. */
          timeEntryApproval?: boolean;
          /** Whether project time entries require notes. */
          timeEntryNoteRequired?: boolean;
          /** The number of budgeted project hours. */
          budgetHours?: number;
          /** The cash budget amount. */
          budgetCashAmount?: number;
          /** The cash budget currency code. */
          budgetCurrency?: string;
          /** Resource IDs assigned to the project. */
          resources?: Array<string>;
          /** Resource IDs assigned as project managers. */
          projectManagers?: Array<string>;
          /** Provider-defined project links. */
          links?: Record<string, unknown>;
          /** Tags assigned to the project. */
          tags?: Array<Record<string, unknown>>;
          /** Custom fields assigned to the project. */
          customFields?: Array<Record<string, unknown>>;
          /** The project billing-rate configuration. */
          projectRate?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Hub Planner resource and optionally send an invitation email. */
    "hub_planner.create_resource": {
      input: {
        /**
         * The resource first name.
         * @minLength 1
         */
        firstName: string;
        /** The resource last name. */
        lastName?: string;
        /**
         * The unique resource email address.
         * @format email
         */
        email?: string;
        /** Free-form resource notes. */
        note?: string;
        /** The resource role. */
        role?: string;
        /** The current Hub Planner resource status. */
        status?: "STATUS_ACTIVE" | "STATUS_ARCHIVED" | "STATUS_NON_BOOKABLE" | "STATUS_PARKED";
        /**
         * Custom resource metadata with at most 255 characters.
         * @maxLength 255
         */
        metadata?: string;
        /** Whether to email an invitation to the resource. */
        sendInviteEmail?: boolean;
        /** Whether the resource uses custom availability. */
        useCustomAvailability?: boolean;
        /** Calendar IDs to associate with the resource. */
        calendarIds?: Array<string>;
      };
      output: {
        /** A resource returned by Hub Planner. */
        resource: {
          /** The unique resource ID. */
          _id?: string;
          /** The resource first name. */
          firstName?: string;
          /** The resource last name. */
          lastName?: string;
          /** The resource email address. */
          email?: string;
          /** The resource notes. */
          note?: string;
          /** The resource role. */
          role?: string;
          /** The resource status returned by Hub Planner. */
          status?: string;
          /** The resource metadata value. */
          metadata?: string;
          /** The resource creation timestamp. */
          createdDate?: string;
          /** The resource update timestamp. */
          updatedDate?: string | null;
          /** Whether the resource uses custom availability. */
          useCustomAvailability?: boolean;
          /** Whether the resource can manage projects. */
          isProjectManager?: boolean;
          /** Calendar IDs associated with the resource. */
          calendarIds?: Array<string>;
          /** Provider-defined resource links. */
          links?: Record<string, unknown>;
          /** Custom fields assigned to the resource. */
          customFields?: Array<Record<string, unknown>>;
          /** The resource billing-rate configuration. */
          resourceRates?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Hub Planner project by its unique ID. */
    "hub_planner.get_project": {
      input: {
        /**
         * The unique Hub Planner project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** A project returned by Hub Planner. */
        project: {
          /** The unique project ID. */
          _id?: string;
          /** The project name. */
          name?: string;
          /** The project notes. */
          note?: string;
          /** The project creation timestamp. */
          createdDate?: string;
          /** The project update timestamp. */
          updatedDate?: string;
          /** The unique project code. */
          projectCode?: string;
          /** The project status returned by Hub Planner. */
          status?: string;
          /** The project metadata value. */
          metadata?: string;
          /** The project display color. */
          backgroundColor?: string;
          /** The project display start date. */
          start?: string | null;
          /** The project display end date. */
          end?: string | null;
          /** Whether project display dates are enabled. */
          useProjectDuration?: boolean;
          /** Whether time entry is enabled for the project. */
          timeEntryEnabled?: boolean;
          /** Whether time entry is locked for the project. */
          timeEntryLocked?: boolean;
          /** Whether project time entries require approval. */
          timeEntryApproval?: boolean;
          /** Whether project time entries require notes. */
          timeEntryNoteRequired?: boolean;
          /** The number of budgeted project hours. */
          budgetHours?: number;
          /** The cash budget amount. */
          budgetCashAmount?: number;
          /** The cash budget currency code. */
          budgetCurrency?: string;
          /** Resource IDs assigned to the project. */
          resources?: Array<string>;
          /** Resource IDs assigned as project managers. */
          projectManagers?: Array<string>;
          /** Provider-defined project links. */
          links?: Record<string, unknown>;
          /** Tags assigned to the project. */
          tags?: Array<Record<string, unknown>>;
          /** Custom fields assigned to the project. */
          customFields?: Array<Record<string, unknown>>;
          /** The project billing-rate configuration. */
          projectRate?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Hub Planner resource by its unique ID. */
    "hub_planner.get_resource": {
      input: {
        /**
         * The unique Hub Planner resource ID.
         * @minLength 1
         */
        resourceId: string;
      };
      output: {
        /** A resource returned by Hub Planner. */
        resource: {
          /** The unique resource ID. */
          _id?: string;
          /** The resource first name. */
          firstName?: string;
          /** The resource last name. */
          lastName?: string;
          /** The resource email address. */
          email?: string;
          /** The resource notes. */
          note?: string;
          /** The resource role. */
          role?: string;
          /** The resource status returned by Hub Planner. */
          status?: string;
          /** The resource metadata value. */
          metadata?: string;
          /** The resource creation timestamp. */
          createdDate?: string;
          /** The resource update timestamp. */
          updatedDate?: string | null;
          /** Whether the resource uses custom availability. */
          useCustomAvailability?: boolean;
          /** Whether the resource can manage projects. */
          isProjectManager?: boolean;
          /** Calendar IDs associated with the resource. */
          calendarIds?: Array<string>;
          /** Provider-defined resource links. */
          links?: Record<string, unknown>;
          /** Custom fields assigned to the resource. */
          customFields?: Array<Record<string, unknown>>;
          /** The resource billing-rate configuration. */
          resourceRates?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List Hub Planner projects with optional zero-based pagination and sorting. */
    "hub_planner.list_projects": {
      input: {
        /**
         * The zero-based page number.
         * @minimum 0
         */
        page?: number;
        /**
         * The maximum number of results to return, from 1 to 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Sort fields in priority order. Prefix a field with - for descending order.
         * @minItems 1
         */
        sort?: Array<string>;
      };
      output: {
        /** Projects returned by Hub Planner. */
        projects: Array<{
          /** The unique project ID. */
          _id?: string;
          /** The project name. */
          name?: string;
          /** The project notes. */
          note?: string;
          /** The project creation timestamp. */
          createdDate?: string;
          /** The project update timestamp. */
          updatedDate?: string;
          /** The unique project code. */
          projectCode?: string;
          /** The project status returned by Hub Planner. */
          status?: string;
          /** The project metadata value. */
          metadata?: string;
          /** The project display color. */
          backgroundColor?: string;
          /** The project display start date. */
          start?: string | null;
          /** The project display end date. */
          end?: string | null;
          /** Whether project display dates are enabled. */
          useProjectDuration?: boolean;
          /** Whether time entry is enabled for the project. */
          timeEntryEnabled?: boolean;
          /** Whether time entry is locked for the project. */
          timeEntryLocked?: boolean;
          /** Whether project time entries require approval. */
          timeEntryApproval?: boolean;
          /** Whether project time entries require notes. */
          timeEntryNoteRequired?: boolean;
          /** The number of budgeted project hours. */
          budgetHours?: number;
          /** The cash budget amount. */
          budgetCashAmount?: number;
          /** The cash budget currency code. */
          budgetCurrency?: string;
          /** Resource IDs assigned to the project. */
          resources?: Array<string>;
          /** Resource IDs assigned as project managers. */
          projectManagers?: Array<string>;
          /** Provider-defined project links. */
          links?: Record<string, unknown>;
          /** Tags assigned to the project. */
          tags?: Array<Record<string, unknown>>;
          /** Custom fields assigned to the project. */
          customFields?: Array<Record<string, unknown>>;
          /** The project billing-rate configuration. */
          projectRate?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Hub Planner resources with optional zero-based pagination and sorting. */
    "hub_planner.list_resources": {
      input: {
        /**
         * The zero-based page number.
         * @minimum 0
         */
        page?: number;
        /**
         * The maximum number of results to return, from 1 to 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Sort fields in priority order. Prefix a field with - for descending order.
         * @minItems 1
         */
        sort?: Array<string>;
      };
      output: {
        /** Resources returned by Hub Planner. */
        resources: Array<{
          /** The unique resource ID. */
          _id?: string;
          /** The resource first name. */
          firstName?: string;
          /** The resource last name. */
          lastName?: string;
          /** The resource email address. */
          email?: string;
          /** The resource notes. */
          note?: string;
          /** The resource role. */
          role?: string;
          /** The resource status returned by Hub Planner. */
          status?: string;
          /** The resource metadata value. */
          metadata?: string;
          /** The resource creation timestamp. */
          createdDate?: string;
          /** The resource update timestamp. */
          updatedDate?: string | null;
          /** Whether the resource uses custom availability. */
          useCustomAvailability?: boolean;
          /** Whether the resource can manage projects. */
          isProjectManager?: boolean;
          /** Calendar IDs associated with the resource. */
          calendarIds?: Array<string>;
          /** Provider-defined resource links. */
          links?: Record<string, unknown>;
          /** Custom fields assigned to the resource. */
          customFields?: Array<Record<string, unknown>>;
          /** The resource billing-rate configuration. */
          resourceRates?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
