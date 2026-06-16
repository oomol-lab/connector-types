import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Rocketlane project by numeric project ID. */
    "rocketlane.get_project": {
      input: {
        /**
         * The Rocketlane project ID to fetch.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The Rocketlane project fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<"annualizedRecurringRevenue" | "projectFee" | "allocatedHours" | "allocatedMinutes" | "budgetedHours" | "percentageBudgetedHoursConsumed" | "percentageBudgetConsumed" | "billableHours" | "billableMinutes" | "nonBillableHours" | "nonBillableMinutes" | "trackedHours" | "trackedMinutes" | "progressPercentage" | "startDateActual" | "dueDateActual" | "currentPhase" | "autoAllocation" | "sources" | "inferredProgress" | "plannedDuration" | "projectAgeInDays" | "customersInvited" | "customersJoined" | "externalReferenceId" | "metrics" | "remainingMinutes" | "remainingHours">;
        /** Whether Rocketlane should return all available project fields. */
        includeAllFields?: boolean;
      };
      output: {
        /** A Rocketlane project. */
        project: {
          /**
           * The Rocketlane project identifier.
           * @exclusiveMinimum 0
           */
          projectId: number;
          /**
           * The Rocketlane project name.
           * @minLength 1
           */
          projectName: string;
          /** The Rocketlane project start date in YYYY-MM-DD format. */
          startDate?: string;
          /** The Rocketlane project due date in YYYY-MM-DD format. */
          dueDate?: string;
          /**
           * The epoch timestamp in milliseconds.
           * @minimum 0
           */
          createdAt?: number;
          /**
           * The epoch timestamp in milliseconds.
           * @minimum 0
           */
          updatedAt?: number;
          /** A lightweight Rocketlane person summary. */
          owner?: {
            /**
             * The Rocketlane user identifier.
             * @exclusiveMinimum 0
             */
            userId?: number;
            /** The Rocketlane email address when available. */
            emailId?: string;
            /** The Rocketlane first name when available. */
            firstName?: string;
            /** The Rocketlane last name when available. */
            lastName?: string;
            [key: string]: unknown;
          };
          /** The Rocketlane project members, customers, and champion. */
          teamMembers?: {
            /** The Rocketlane internal team members on the project. */
            members?: Array<{
              /**
               * The Rocketlane user identifier.
               * @exclusiveMinimum 0
               */
              userId?: number;
              /** The Rocketlane email address when available. */
              emailId?: string;
              /** The Rocketlane first name when available. */
              firstName?: string;
              /** The Rocketlane last name when available. */
              lastName?: string;
              [key: string]: unknown;
            }>;
            /** The Rocketlane customer users on the project. */
            customers?: Array<{
              /**
               * The Rocketlane user identifier.
               * @exclusiveMinimum 0
               */
              userId?: number;
              /** The Rocketlane email address when available. */
              emailId?: string;
              /** The Rocketlane first name when available. */
              firstName?: string;
              /** The Rocketlane last name when available. */
              lastName?: string;
              [key: string]: unknown;
            }>;
            /** A lightweight Rocketlane person summary. */
            customerChampion?: {
              /**
               * The Rocketlane user identifier.
               * @exclusiveMinimum 0
               */
              userId?: number;
              /** The Rocketlane email address when available. */
              emailId?: string;
              /** The Rocketlane first name when available. */
              firstName?: string;
              /** The Rocketlane last name when available. */
              lastName?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** A Rocketlane project status summary. */
          status?: {
            /**
             * The Rocketlane project status identifier.
             * @exclusiveMinimum 0
             */
            value?: number;
            /** The Rocketlane project status label. */
            label?: string;
            [key: string]: unknown;
          };
          /** The Rocketlane custom project fields returned for the project. */
          fields?: Array<{
            /**
             * The Rocketlane custom field identifier.
             * @exclusiveMinimum 0
             */
            fieldId?: number;
            /** The Rocketlane custom field label. */
            fieldLabel?: string;
            /** The raw Rocketlane custom field value. */
            fieldValue?: unknown;
            /** The display label for the Rocketlane custom field value. */
            fieldValueLabel?: string;
            [key: string]: unknown;
          }>;
          /** A Rocketlane company summary. */
          customer?: {
            /**
             * The Rocketlane company identifier.
             * @exclusiveMinimum 0
             */
            companyId?: number;
            /** The Rocketlane company name. */
            companyName?: string;
            /** The Rocketlane company website URL. */
            companyUrl?: string;
            [key: string]: unknown;
          };
          /** The Rocketlane partner companies attached to the project. */
          partnerCompanies?: Array<{
            /**
             * The Rocketlane company identifier.
             * @exclusiveMinimum 0
             */
            companyId?: number;
            /** The Rocketlane company name. */
            companyName?: string;
            /** The Rocketlane company website URL. */
            companyUrl?: string;
            [key: string]: unknown;
          }>;
          /** Whether the Rocketlane project is archived. */
          archived?: boolean;
          /** The Rocketlane project visibility value. */
          visibility?: "EVERYONE" | "MEMBERS" | "GROUP";
          /** A lightweight Rocketlane person summary. */
          createdBy?: {
            /**
             * The Rocketlane user identifier.
             * @exclusiveMinimum 0
             */
            userId?: number;
            /** The Rocketlane email address when available. */
            emailId?: string;
            /** The Rocketlane first name when available. */
            firstName?: string;
            /** The Rocketlane last name when available. */
            lastName?: string;
            [key: string]: unknown;
          };
          /** A lightweight Rocketlane person summary. */
          updatedBy?: {
            /**
             * The Rocketlane user identifier.
             * @exclusiveMinimum 0
             */
            userId?: number;
            /** The Rocketlane email address when available. */
            emailId?: string;
            /** The Rocketlane first name when available. */
            firstName?: string;
            /** The Rocketlane last name when available. */
            lastName?: string;
            [key: string]: unknown;
          };
          /** The Rocketlane project currency code. */
          currency?: string;
          /** The Rocketlane financial summary attached to the project. */
          financials?: Record<string, unknown>;
          /** The actual Rocketlane project start date in YYYY-MM-DD format. */
          startDateActual?: string;
          /** The actual Rocketlane project completion date in YYYY-MM-DD format. */
          dueDateActual?: string;
          /** The Rocketlane annualized recurring revenue value when present. */
          annualizedRecurringRevenue?: number;
          /** The Rocketlane project fee when present. */
          projectFee?: number;
          /** The Rocketlane budgeted hours value when present. */
          budgetedHours?: number;
          /** The percentage of Rocketlane budgeted hours consumed when present. */
          percentageBudgetedHoursConsumed?: number;
          /** The percentage of Rocketlane budget consumed when present. */
          percentageBudgetConsumed?: number;
          /** The Rocketlane tracked hours value when present. */
          trackedHours?: number;
          /** The Rocketlane tracked minutes value when present. */
          trackedMinutes?: number;
          /** The Rocketlane allocated hours value when present. */
          allocatedHours?: number;
          /** The Rocketlane allocated minutes value when present. */
          allocatedMinutes?: number;
          /** The Rocketlane billable hours value when present. */
          billableHours?: number;
          /** The Rocketlane billable minutes value when present. */
          billableMinutes?: number;
          /** The Rocketlane non-billable hours value when present. */
          nonBillableHours?: number;
          /** The Rocketlane non-billable minutes value when present. */
          nonBillableMinutes?: number;
          /** The Rocketlane remaining hours value when present. */
          remainingHours?: number;
          /** The Rocketlane remaining minutes value when present. */
          remainingMinutes?: number;
          /** The Rocketlane progress percentage when present. */
          progressPercentage?: number;
          /** The Rocketlane project phases currently in progress when present. */
          currentPhases?: Array<Record<string, unknown>>;
          /** Whether Rocketlane auto-allocation is enabled for the project. */
          autoAllocation?: boolean;
          /** The Rocketlane project template sources attached to the project when present. */
          sources?: Array<Record<string, unknown>>;
          /** The Rocketlane inferred progress value when present. */
          inferredProgress?: number;
          /** The Rocketlane planned duration value when present. */
          plannedDuration?: number;
          /** The Rocketlane project age in days when present. */
          projectAgeInDays?: number;
          /** The number of Rocketlane customers invited when present. */
          customersInvited?: number;
          /** The number of Rocketlane customers joined when present. */
          customersJoined?: number;
          /** The external reference identifier attached to the Rocketlane project when present. */
          externalReferenceId?: string;
          /** The Rocketlane project metrics payload when present. */
          metrics?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Rocketlane task by numeric task ID. */
    "rocketlane.get_task": {
      input: {
        /**
         * The Rocketlane task ID to fetch.
         * @exclusiveMinimum 0
         */
        taskId: number;
        /**
         * The Rocketlane task fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<"startDateActual" | "dueDateActual" | "type" | "phase" | "assignees" | "followers" | "dependencies" | "billable" | "csatEnabled" | "priority" | "timeEntryCategory" | "financialsBudget" | "taskPrivateNote" | "parent" | "externalReferenceId">;
        /** Whether Rocketlane should return all available task fields. */
        includeAllFields?: boolean;
      };
      output: {
        /** A Rocketlane task. */
        task: {
          /**
           * The Rocketlane task identifier.
           * @exclusiveMinimum 0
           */
          taskId: number;
          /**
           * The Rocketlane task name.
           * @minLength 1
           */
          taskName: string;
          /** The Rocketlane task description in HTML format. */
          taskDescription?: string;
          /** The Rocketlane task start date in YYYY-MM-DD format. */
          startDate?: string;
          /** The Rocketlane task due date in YYYY-MM-DD format. */
          dueDate?: string;
          /** Whether the Rocketlane task is archived. */
          archived?: boolean;
          /** The Rocketlane task effort in minutes. */
          effortInMinutes?: number;
          /** The Rocketlane task progress percentage. */
          progress?: number;
          /** Whether the Rocketlane task is marked as at risk. */
          atRisk?: boolean;
          /**
           * The epoch timestamp in milliseconds.
           * @minimum 0
           */
          createdAt?: number;
          /**
           * The epoch timestamp in milliseconds.
           * @minimum 0
           */
          updatedAt?: number;
          /** A lightweight Rocketlane person summary. */
          createdBy?: {
            /**
             * The Rocketlane user identifier.
             * @exclusiveMinimum 0
             */
            userId?: number;
            /** The Rocketlane email address when available. */
            emailId?: string;
            /** The Rocketlane first name when available. */
            firstName?: string;
            /** The Rocketlane last name when available. */
            lastName?: string;
            [key: string]: unknown;
          };
          /** A lightweight Rocketlane person summary. */
          updatedBy?: {
            /**
             * The Rocketlane user identifier.
             * @exclusiveMinimum 0
             */
            userId?: number;
            /** The Rocketlane email address when available. */
            emailId?: string;
            /** The Rocketlane first name when available. */
            firstName?: string;
            /** The Rocketlane last name when available. */
            lastName?: string;
            [key: string]: unknown;
          };
          /** A lightweight Rocketlane project summary attached to a task. */
          project?: {
            /**
             * The Rocketlane project identifier.
             * @exclusiveMinimum 0
             */
            projectId?: number;
            /** The Rocketlane project name. */
            projectName?: string;
            [key: string]: unknown;
          };
          /** A Rocketlane task status summary. */
          status?: {
            /**
             * The Rocketlane task status identifier.
             * @exclusiveMinimum 0
             */
            value?: number;
            /** The Rocketlane task status label. */
            label?: string;
            [key: string]: unknown;
          };
          /** The Rocketlane custom task fields returned for the task. */
          fields?: Array<{
            /**
             * The Rocketlane custom field identifier.
             * @exclusiveMinimum 0
             */
            fieldId?: number;
            /** The Rocketlane custom field label. */
            fieldLabel?: string;
            /** The raw Rocketlane custom field value. */
            fieldValue?: unknown;
            /** The display label for the Rocketlane custom field value. */
            fieldValueLabel?: string;
            [key: string]: unknown;
          }>;
          /** The actual Rocketlane task start date in YYYY-MM-DD format. */
          startDateActual?: string;
          /** The actual Rocketlane task completion date in YYYY-MM-DD format. */
          dueDateActual?: string;
          /** The Rocketlane task type. */
          type?: "TASK" | "MILESTONE";
          /** The Rocketlane phase summary attached to the task. */
          phase?: Record<string, unknown>;
          /** The Rocketlane assignees attached to the task. */
          assignees?: {
            /** The Rocketlane users assigned to the task. */
            members?: Array<{
              /**
               * The Rocketlane user identifier.
               * @exclusiveMinimum 0
               */
              userId?: number;
              /** The Rocketlane email address when available. */
              emailId?: string;
              /** The Rocketlane first name when available. */
              firstName?: string;
              /** The Rocketlane last name when available. */
              lastName?: string;
              [key: string]: unknown;
            }>;
            /** The Rocketlane placeholders assigned to the task. */
            placeholders?: Array<{
              /**
               * The Rocketlane placeholder identifier.
               * @exclusiveMinimum 0
               */
              placeholderId?: number;
              /** The Rocketlane placeholder name. */
              placeholderName?: string;
              /** The Rocketlane placeholder role summary. */
              role?: Record<string, unknown>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** The Rocketlane followers attached to the task. */
          followers?: {
            /** The Rocketlane followers assigned to the task. */
            members?: Array<{
              /**
               * The Rocketlane user identifier.
               * @exclusiveMinimum 0
               */
              userId?: number;
              /** The Rocketlane email address when available. */
              emailId?: string;
              /** The Rocketlane first name when available. */
              firstName?: string;
              /** The Rocketlane last name when available. */
              lastName?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** The Rocketlane task dependencies returned for the task. */
          dependencies?: Array<Record<string, unknown>>;
          /** The parent Rocketlane task when present. */
          parent?: Record<string, unknown>;
          /** The external reference identifier attached to the Rocketlane task when present. */
          externalReferenceId?: string;
          /** Whether the Rocketlane task is billable. */
          billable?: boolean;
          /** The Rocketlane time entry category attached to the task. */
          timeEntryCategory?: Record<string, unknown>;
          /** The Rocketlane financial budgets attached to the task. */
          financialsBudgets?: Array<Record<string, unknown>>;
          /** Whether Rocketlane CSAT is enabled for the task. */
          csatEnabled?: boolean;
          /** The Rocketlane task priority summary. */
          priority?: Record<string, unknown>;
          /** The Rocketlane private task note in HTML format. */
          taskPrivateNote?: string;
          /** Whether the Rocketlane task is private. */
          private?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Rocketlane user by numeric user ID. */
    "rocketlane.get_user": {
      input: {
        /**
         * The Rocketlane user ID to fetch.
         * @exclusiveMinimum 0
         */
        userId: number;
        /**
         * The Rocketlane user fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<"role" | "company" | "permission" | "holidayCalendar" | "capacityInMinutes" | "profilePictureUrl">;
        /** Whether Rocketlane should return all available user fields. */
        includeAllFields?: boolean;
      };
      output: {
        /** A Rocketlane user. */
        user: {
          /**
           * The Rocketlane user identifier.
           * @exclusiveMinimum 0
           */
          userId: number;
          /**
           * The Rocketlane user email address.
           * @minLength 1
           */
          email: string;
          /**
           * The Rocketlane user first name.
           * @minLength 1
           */
          firstName: string;
          /**
           * The Rocketlane user last name.
           * @minLength 1
           */
          lastName: string;
          /** One Rocketlane user type value. */
          type: "TEAM_MEMBER" | "PARTNER" | "CUSTOMER" | "EXTERNAL_PARTNER";
          /** One Rocketlane user status value. */
          status: "INACTIVE" | "INVITED" | "ACTIVE" | "PASSIVE";
          /** The Rocketlane user role summary. */
          role?: {
            /**
             * The Rocketlane role identifier.
             * @exclusiveMinimum 0
             */
            roleId?: number;
            /** The Rocketlane role name. */
            roleName?: string;
            [key: string]: unknown;
          };
          /** The Rocketlane company summary attached to the user. */
          company?: {
            /**
             * The Rocketlane company identifier.
             * @exclusiveMinimum 0
             */
            companyId?: number;
            /** The Rocketlane company name. */
            companyName?: string;
            [key: string]: unknown;
          };
          /** The Rocketlane permission summary attached to the user. */
          permission?: {
            /**
             * The Rocketlane permission identifier.
             * @exclusiveMinimum 0
             */
            permissionId?: number;
            /** The Rocketlane permission name. */
            permissionName?: string;
            [key: string]: unknown;
          };
          /** The Rocketlane custom user fields returned for the user. */
          fields?: Array<{
            /**
             * The Rocketlane custom field identifier.
             * @exclusiveMinimum 0
             */
            fieldId?: number;
            /** The Rocketlane custom field label. */
            fieldLabel?: string;
            /** The raw Rocketlane custom field value. */
            fieldValue?: unknown;
            /** The display label for the Rocketlane custom field value. */
            fieldValueLabel?: string;
            [key: string]: unknown;
          }>;
          /** The Rocketlane user capacity in minutes. */
          capacityInMinutes?: number;
          /** The Rocketlane holiday calendar attached to the user. */
          holidayCalendar?: Record<string, unknown>;
          /** The Rocketlane user profile picture URL. */
          profilePictureUrl?: string;
          /**
           * The epoch timestamp in milliseconds.
           * @minimum 0
           */
          createdAt?: number;
          /** A lightweight Rocketlane person summary. */
          createdBy?: {
            /**
             * The Rocketlane user identifier.
             * @exclusiveMinimum 0
             */
            userId?: number;
            /** The Rocketlane email address when available. */
            emailId?: string;
            /** The Rocketlane first name when available. */
            firstName?: string;
            /** The Rocketlane last name when available. */
            lastName?: string;
            [key: string]: unknown;
          };
          /**
           * The epoch timestamp in milliseconds.
           * @minimum 0
           */
          updatedAt?: number;
          /** A lightweight Rocketlane person summary. */
          updatedBy?: {
            /**
             * The Rocketlane user identifier.
             * @exclusiveMinimum 0
             */
            userId?: number;
            /** The Rocketlane email address when available. */
            emailId?: string;
            /** The Rocketlane first name when available. */
            firstName?: string;
            /** The Rocketlane last name when available. */
            lastName?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List Rocketlane projects with pagination, sorting, and the first-pass project filters. */
    "rocketlane.list_projects": {
      input: {
        /**
         * The maximum number of records to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The pagination token returned by the previous Rocketlane list response.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * The Rocketlane project fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<"annualizedRecurringRevenue" | "projectFee" | "allocatedHours" | "allocatedMinutes" | "budgetedHours" | "percentageBudgetedHoursConsumed" | "percentageBudgetConsumed" | "billableHours" | "billableMinutes" | "nonBillableHours" | "nonBillableMinutes" | "trackedHours" | "trackedMinutes" | "progressPercentage" | "startDateActual" | "dueDateActual" | "currentPhase" | "autoAllocation" | "sources" | "inferredProgress" | "plannedDuration" | "projectAgeInDays" | "customersInvited" | "customersJoined" | "externalReferenceId" | "metrics" | "remainingMinutes" | "remainingHours">;
        /** Whether Rocketlane should return all available project fields. */
        includeAllFields?: boolean;
        /** The Rocketlane project field used for sorting. */
        sortBy?: "projectName" | "startDate" | "dueDate" | "startDateActual" | "dueDateActual" | "annualizedRecurringRevenue" | "projectFee";
        /** The sort order for the Rocketlane list response. */
        sortOrder?: "ASC" | "DESC";
        /** Whether Rocketlane should match all filters or any filter. */
        match?: "all" | "any";
        /**
         * Return only Rocketlane projects with this exact project name.
         * @minLength 1
         */
        projectNameEq?: string;
        /**
         * Return only Rocketlane projects whose project name contains this value.
         * @minLength 1
         */
        projectNameContains?: string;
        /**
         * The Rocketlane status or external identifier.
         * @minLength 1
         */
        statusEq?: string;
        /**
         * Return Rocketlane projects whose status matches one of these identifiers.
         * @minItems 1
         */
        statusOneOf?: Array<string>;
        /**
         * Return Rocketlane projects with a startDate after this YYYY-MM-DD date.
         * @minLength 1
         */
        startDateGt?: string;
        /**
         * Return Rocketlane projects with a startDate on or after this YYYY-MM-DD date.
         * @minLength 1
         */
        startDateGe?: string;
        /**
         * Return Rocketlane projects with a dueDate before this YYYY-MM-DD date.
         * @minLength 1
         */
        dueDateLt?: string;
        /**
         * Return only Rocketlane projects for this customer company ID.
         * @exclusiveMinimum 0
         */
        customerIdEq?: number;
      };
      output: {
        /** The Rocketlane projects returned for the current page. */
        projects: Array<{
          /**
           * The Rocketlane project identifier.
           * @exclusiveMinimum 0
           */
          projectId: number;
          /**
           * The Rocketlane project name.
           * @minLength 1
           */
          projectName: string;
          /** The Rocketlane project start date in YYYY-MM-DD format. */
          startDate?: string;
          /** The Rocketlane project due date in YYYY-MM-DD format. */
          dueDate?: string;
          /**
           * The epoch timestamp in milliseconds.
           * @minimum 0
           */
          createdAt?: number;
          /**
           * The epoch timestamp in milliseconds.
           * @minimum 0
           */
          updatedAt?: number;
          /** A lightweight Rocketlane person summary. */
          owner?: {
            /**
             * The Rocketlane user identifier.
             * @exclusiveMinimum 0
             */
            userId?: number;
            /** The Rocketlane email address when available. */
            emailId?: string;
            /** The Rocketlane first name when available. */
            firstName?: string;
            /** The Rocketlane last name when available. */
            lastName?: string;
            [key: string]: unknown;
          };
          /** The Rocketlane project members, customers, and champion. */
          teamMembers?: {
            /** The Rocketlane internal team members on the project. */
            members?: Array<{
              /**
               * The Rocketlane user identifier.
               * @exclusiveMinimum 0
               */
              userId?: number;
              /** The Rocketlane email address when available. */
              emailId?: string;
              /** The Rocketlane first name when available. */
              firstName?: string;
              /** The Rocketlane last name when available. */
              lastName?: string;
              [key: string]: unknown;
            }>;
            /** The Rocketlane customer users on the project. */
            customers?: Array<{
              /**
               * The Rocketlane user identifier.
               * @exclusiveMinimum 0
               */
              userId?: number;
              /** The Rocketlane email address when available. */
              emailId?: string;
              /** The Rocketlane first name when available. */
              firstName?: string;
              /** The Rocketlane last name when available. */
              lastName?: string;
              [key: string]: unknown;
            }>;
            /** A lightweight Rocketlane person summary. */
            customerChampion?: {
              /**
               * The Rocketlane user identifier.
               * @exclusiveMinimum 0
               */
              userId?: number;
              /** The Rocketlane email address when available. */
              emailId?: string;
              /** The Rocketlane first name when available. */
              firstName?: string;
              /** The Rocketlane last name when available. */
              lastName?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** A Rocketlane project status summary. */
          status?: {
            /**
             * The Rocketlane project status identifier.
             * @exclusiveMinimum 0
             */
            value?: number;
            /** The Rocketlane project status label. */
            label?: string;
            [key: string]: unknown;
          };
          /** The Rocketlane custom project fields returned for the project. */
          fields?: Array<{
            /**
             * The Rocketlane custom field identifier.
             * @exclusiveMinimum 0
             */
            fieldId?: number;
            /** The Rocketlane custom field label. */
            fieldLabel?: string;
            /** The raw Rocketlane custom field value. */
            fieldValue?: unknown;
            /** The display label for the Rocketlane custom field value. */
            fieldValueLabel?: string;
            [key: string]: unknown;
          }>;
          /** A Rocketlane company summary. */
          customer?: {
            /**
             * The Rocketlane company identifier.
             * @exclusiveMinimum 0
             */
            companyId?: number;
            /** The Rocketlane company name. */
            companyName?: string;
            /** The Rocketlane company website URL. */
            companyUrl?: string;
            [key: string]: unknown;
          };
          /** The Rocketlane partner companies attached to the project. */
          partnerCompanies?: Array<{
            /**
             * The Rocketlane company identifier.
             * @exclusiveMinimum 0
             */
            companyId?: number;
            /** The Rocketlane company name. */
            companyName?: string;
            /** The Rocketlane company website URL. */
            companyUrl?: string;
            [key: string]: unknown;
          }>;
          /** Whether the Rocketlane project is archived. */
          archived?: boolean;
          /** The Rocketlane project visibility value. */
          visibility?: "EVERYONE" | "MEMBERS" | "GROUP";
          /** A lightweight Rocketlane person summary. */
          createdBy?: {
            /**
             * The Rocketlane user identifier.
             * @exclusiveMinimum 0
             */
            userId?: number;
            /** The Rocketlane email address when available. */
            emailId?: string;
            /** The Rocketlane first name when available. */
            firstName?: string;
            /** The Rocketlane last name when available. */
            lastName?: string;
            [key: string]: unknown;
          };
          /** A lightweight Rocketlane person summary. */
          updatedBy?: {
            /**
             * The Rocketlane user identifier.
             * @exclusiveMinimum 0
             */
            userId?: number;
            /** The Rocketlane email address when available. */
            emailId?: string;
            /** The Rocketlane first name when available. */
            firstName?: string;
            /** The Rocketlane last name when available. */
            lastName?: string;
            [key: string]: unknown;
          };
          /** The Rocketlane project currency code. */
          currency?: string;
          /** The Rocketlane financial summary attached to the project. */
          financials?: Record<string, unknown>;
          /** The actual Rocketlane project start date in YYYY-MM-DD format. */
          startDateActual?: string;
          /** The actual Rocketlane project completion date in YYYY-MM-DD format. */
          dueDateActual?: string;
          /** The Rocketlane annualized recurring revenue value when present. */
          annualizedRecurringRevenue?: number;
          /** The Rocketlane project fee when present. */
          projectFee?: number;
          /** The Rocketlane budgeted hours value when present. */
          budgetedHours?: number;
          /** The percentage of Rocketlane budgeted hours consumed when present. */
          percentageBudgetedHoursConsumed?: number;
          /** The percentage of Rocketlane budget consumed when present. */
          percentageBudgetConsumed?: number;
          /** The Rocketlane tracked hours value when present. */
          trackedHours?: number;
          /** The Rocketlane tracked minutes value when present. */
          trackedMinutes?: number;
          /** The Rocketlane allocated hours value when present. */
          allocatedHours?: number;
          /** The Rocketlane allocated minutes value when present. */
          allocatedMinutes?: number;
          /** The Rocketlane billable hours value when present. */
          billableHours?: number;
          /** The Rocketlane billable minutes value when present. */
          billableMinutes?: number;
          /** The Rocketlane non-billable hours value when present. */
          nonBillableHours?: number;
          /** The Rocketlane non-billable minutes value when present. */
          nonBillableMinutes?: number;
          /** The Rocketlane remaining hours value when present. */
          remainingHours?: number;
          /** The Rocketlane remaining minutes value when present. */
          remainingMinutes?: number;
          /** The Rocketlane progress percentage when present. */
          progressPercentage?: number;
          /** The Rocketlane project phases currently in progress when present. */
          currentPhases?: Array<Record<string, unknown>>;
          /** Whether Rocketlane auto-allocation is enabled for the project. */
          autoAllocation?: boolean;
          /** The Rocketlane project template sources attached to the project when present. */
          sources?: Array<Record<string, unknown>>;
          /** The Rocketlane inferred progress value when present. */
          inferredProgress?: number;
          /** The Rocketlane planned duration value when present. */
          plannedDuration?: number;
          /** The Rocketlane project age in days when present. */
          projectAgeInDays?: number;
          /** The number of Rocketlane customers invited when present. */
          customersInvited?: number;
          /** The number of Rocketlane customers joined when present. */
          customersJoined?: number;
          /** The external reference identifier attached to the Rocketlane project when present. */
          externalReferenceId?: string;
          /** The Rocketlane project metrics payload when present. */
          metrics?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Rocketlane list endpoints. */
        pagination: {
          /**
           * The maximum number of records to return per page.
           * @minimum 1
           * @maximum 100
           */
          pageSize?: number;
          /** Whether Rocketlane has more results available. */
          hasMore?: boolean;
          /**
           * The total number of matching Rocketlane records.
           * @minimum 0
           */
          totalRecordCount?: number;
          /**
           * The next-page URL returned by Rocketlane.
           * @minLength 1
           */
          nextPage?: string;
          /**
           * The pagination token returned by the previous Rocketlane list response.
           * @minLength 1
           */
          nextPageToken?: string;
        };
      };
    };
    /** List Rocketlane tasks with pagination, sorting, and the first-pass task filters. */
    "rocketlane.list_tasks": {
      input: {
        /**
         * The maximum number of records to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The pagination token returned by the previous Rocketlane list response.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * The Rocketlane task fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<"startDateActual" | "dueDateActual" | "type" | "phase" | "assignees" | "followers" | "dependencies" | "billable" | "csatEnabled" | "priority" | "timeEntryCategory" | "financialsBudget" | "taskPrivateNote" | "parent" | "externalReferenceId">;
        /** Whether Rocketlane should return all available task fields. */
        includeAllFields?: boolean;
        /** The Rocketlane task field used for sorting. */
        sortBy?: "taskName" | "startDate" | "dueDate" | "startDateActual" | "dueDateActual";
        /** The sort order for the Rocketlane list response. */
        sortOrder?: "ASC" | "DESC";
        /** Whether Rocketlane should match all filters or any filter. */
        match?: "all" | "any";
        /**
         * Return only Rocketlane tasks with this exact task name.
         * @minLength 1
         */
        taskNameEq?: string;
        /**
         * Return only Rocketlane tasks whose task name contains this value.
         * @minLength 1
         */
        taskNameContains?: string;
        /**
         * The Rocketlane status or external identifier.
         * @minLength 1
         */
        taskStatusEq?: string;
        /**
         * Return Rocketlane tasks whose status matches one of these identifiers.
         * @minItems 1
         */
        taskStatusOneOf?: Array<string>;
        /**
         * Return only Rocketlane tasks for this project ID.
         * @exclusiveMinimum 0
         */
        projectIdEq?: number;
        /**
         * Return Rocketlane tasks with a startDate after this YYYY-MM-DD date.
         * @minLength 1
         */
        startDateGt?: string;
        /**
         * Return Rocketlane tasks with a dueDate before this YYYY-MM-DD date.
         * @minLength 1
         */
        dueDateLt?: string;
        /** Return only Rocketlane tasks that match this at-risk flag. */
        atRiskEq?: boolean;
      };
      output: {
        /** The Rocketlane tasks returned for the current page. */
        tasks: Array<{
          /**
           * The Rocketlane task identifier.
           * @exclusiveMinimum 0
           */
          taskId: number;
          /**
           * The Rocketlane task name.
           * @minLength 1
           */
          taskName: string;
          /** The Rocketlane task description in HTML format. */
          taskDescription?: string;
          /** The Rocketlane task start date in YYYY-MM-DD format. */
          startDate?: string;
          /** The Rocketlane task due date in YYYY-MM-DD format. */
          dueDate?: string;
          /** Whether the Rocketlane task is archived. */
          archived?: boolean;
          /** The Rocketlane task effort in minutes. */
          effortInMinutes?: number;
          /** The Rocketlane task progress percentage. */
          progress?: number;
          /** Whether the Rocketlane task is marked as at risk. */
          atRisk?: boolean;
          /**
           * The epoch timestamp in milliseconds.
           * @minimum 0
           */
          createdAt?: number;
          /**
           * The epoch timestamp in milliseconds.
           * @minimum 0
           */
          updatedAt?: number;
          /** A lightweight Rocketlane person summary. */
          createdBy?: {
            /**
             * The Rocketlane user identifier.
             * @exclusiveMinimum 0
             */
            userId?: number;
            /** The Rocketlane email address when available. */
            emailId?: string;
            /** The Rocketlane first name when available. */
            firstName?: string;
            /** The Rocketlane last name when available. */
            lastName?: string;
            [key: string]: unknown;
          };
          /** A lightweight Rocketlane person summary. */
          updatedBy?: {
            /**
             * The Rocketlane user identifier.
             * @exclusiveMinimum 0
             */
            userId?: number;
            /** The Rocketlane email address when available. */
            emailId?: string;
            /** The Rocketlane first name when available. */
            firstName?: string;
            /** The Rocketlane last name when available. */
            lastName?: string;
            [key: string]: unknown;
          };
          /** A lightweight Rocketlane project summary attached to a task. */
          project?: {
            /**
             * The Rocketlane project identifier.
             * @exclusiveMinimum 0
             */
            projectId?: number;
            /** The Rocketlane project name. */
            projectName?: string;
            [key: string]: unknown;
          };
          /** A Rocketlane task status summary. */
          status?: {
            /**
             * The Rocketlane task status identifier.
             * @exclusiveMinimum 0
             */
            value?: number;
            /** The Rocketlane task status label. */
            label?: string;
            [key: string]: unknown;
          };
          /** The Rocketlane custom task fields returned for the task. */
          fields?: Array<{
            /**
             * The Rocketlane custom field identifier.
             * @exclusiveMinimum 0
             */
            fieldId?: number;
            /** The Rocketlane custom field label. */
            fieldLabel?: string;
            /** The raw Rocketlane custom field value. */
            fieldValue?: unknown;
            /** The display label for the Rocketlane custom field value. */
            fieldValueLabel?: string;
            [key: string]: unknown;
          }>;
          /** The actual Rocketlane task start date in YYYY-MM-DD format. */
          startDateActual?: string;
          /** The actual Rocketlane task completion date in YYYY-MM-DD format. */
          dueDateActual?: string;
          /** The Rocketlane task type. */
          type?: "TASK" | "MILESTONE";
          /** The Rocketlane phase summary attached to the task. */
          phase?: Record<string, unknown>;
          /** The Rocketlane assignees attached to the task. */
          assignees?: {
            /** The Rocketlane users assigned to the task. */
            members?: Array<{
              /**
               * The Rocketlane user identifier.
               * @exclusiveMinimum 0
               */
              userId?: number;
              /** The Rocketlane email address when available. */
              emailId?: string;
              /** The Rocketlane first name when available. */
              firstName?: string;
              /** The Rocketlane last name when available. */
              lastName?: string;
              [key: string]: unknown;
            }>;
            /** The Rocketlane placeholders assigned to the task. */
            placeholders?: Array<{
              /**
               * The Rocketlane placeholder identifier.
               * @exclusiveMinimum 0
               */
              placeholderId?: number;
              /** The Rocketlane placeholder name. */
              placeholderName?: string;
              /** The Rocketlane placeholder role summary. */
              role?: Record<string, unknown>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** The Rocketlane followers attached to the task. */
          followers?: {
            /** The Rocketlane followers assigned to the task. */
            members?: Array<{
              /**
               * The Rocketlane user identifier.
               * @exclusiveMinimum 0
               */
              userId?: number;
              /** The Rocketlane email address when available. */
              emailId?: string;
              /** The Rocketlane first name when available. */
              firstName?: string;
              /** The Rocketlane last name when available. */
              lastName?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** The Rocketlane task dependencies returned for the task. */
          dependencies?: Array<Record<string, unknown>>;
          /** The parent Rocketlane task when present. */
          parent?: Record<string, unknown>;
          /** The external reference identifier attached to the Rocketlane task when present. */
          externalReferenceId?: string;
          /** Whether the Rocketlane task is billable. */
          billable?: boolean;
          /** The Rocketlane time entry category attached to the task. */
          timeEntryCategory?: Record<string, unknown>;
          /** The Rocketlane financial budgets attached to the task. */
          financialsBudgets?: Array<Record<string, unknown>>;
          /** Whether Rocketlane CSAT is enabled for the task. */
          csatEnabled?: boolean;
          /** The Rocketlane task priority summary. */
          priority?: Record<string, unknown>;
          /** The Rocketlane private task note in HTML format. */
          taskPrivateNote?: string;
          /** Whether the Rocketlane task is private. */
          private?: boolean;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Rocketlane list endpoints. */
        pagination: {
          /**
           * The maximum number of records to return per page.
           * @minimum 1
           * @maximum 100
           */
          pageSize?: number;
          /** Whether Rocketlane has more results available. */
          hasMore?: boolean;
          /**
           * The total number of matching Rocketlane records.
           * @minimum 0
           */
          totalRecordCount?: number;
          /**
           * The next-page URL returned by Rocketlane.
           * @minLength 1
           */
          nextPage?: string;
          /**
           * The pagination token returned by the previous Rocketlane list response.
           * @minLength 1
           */
          nextPageToken?: string;
        };
      };
    };
    /** List Rocketlane users with pagination, sorting, and the first-pass user filters. */
    "rocketlane.list_users": {
      input: {
        /**
         * The maximum number of records to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The pagination token returned by the previous Rocketlane list response.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * The Rocketlane user fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<"role" | "company" | "permission" | "holidayCalendar" | "capacityInMinutes" | "profilePictureUrl">;
        /** Whether Rocketlane should return all available user fields. */
        includeAllFields?: boolean;
        /** The Rocketlane user field used for sorting. */
        sortBy?: "email" | "firstName" | "lastName" | "type" | "status" | "capacityInMinutes";
        /** The sort order for the Rocketlane list response. */
        sortOrder?: "ASC" | "DESC";
        /** Whether Rocketlane should match all filters or any filter. */
        match?: "all" | "any";
        /**
         * Return only Rocketlane users with this exact first name.
         * @minLength 1
         */
        firstNameEq?: string;
        /**
         * Return only Rocketlane users whose first name contains this value.
         * @minLength 1
         */
        firstNameContains?: string;
        /**
         * Return only Rocketlane users with this exact email address.
         * @minLength 1
         */
        emailEq?: string;
        /**
         * Return only Rocketlane users whose email address contains this value.
         * @minLength 1
         */
        emailContains?: string;
        /**
         * Return only Rocketlane users with this exact status.
         * @minItems 1
         * @maxItems 1
         */
        statusEq?: Array<"INACTIVE" | "INVITED" | "ACTIVE" | "PASSIVE">;
        /**
         * Return Rocketlane users whose status matches any of these values.
         * @minItems 1
         * @maxItems 3
         */
        statusOneOf?: Array<"INACTIVE" | "INVITED" | "ACTIVE" | "PASSIVE">;
        /**
         * Return only Rocketlane users with this exact user type.
         * @minItems 1
         * @maxItems 1
         */
        typeEq?: Array<"TEAM_MEMBER" | "PARTNER" | "CUSTOMER" | "EXTERNAL_PARTNER">;
        /**
         * Return only Rocketlane users with this permission ID.
         * @exclusiveMinimum 0
         */
        permissionIdEq?: number;
      };
      output: {
        /** The Rocketlane users returned for the current page. */
        users: Array<{
          /**
           * The Rocketlane user identifier.
           * @exclusiveMinimum 0
           */
          userId: number;
          /**
           * The Rocketlane user email address.
           * @minLength 1
           */
          email: string;
          /**
           * The Rocketlane user first name.
           * @minLength 1
           */
          firstName: string;
          /**
           * The Rocketlane user last name.
           * @minLength 1
           */
          lastName: string;
          /** One Rocketlane user type value. */
          type: "TEAM_MEMBER" | "PARTNER" | "CUSTOMER" | "EXTERNAL_PARTNER";
          /** One Rocketlane user status value. */
          status: "INACTIVE" | "INVITED" | "ACTIVE" | "PASSIVE";
          /** The Rocketlane user role summary. */
          role?: {
            /**
             * The Rocketlane role identifier.
             * @exclusiveMinimum 0
             */
            roleId?: number;
            /** The Rocketlane role name. */
            roleName?: string;
            [key: string]: unknown;
          };
          /** The Rocketlane company summary attached to the user. */
          company?: {
            /**
             * The Rocketlane company identifier.
             * @exclusiveMinimum 0
             */
            companyId?: number;
            /** The Rocketlane company name. */
            companyName?: string;
            [key: string]: unknown;
          };
          /** The Rocketlane permission summary attached to the user. */
          permission?: {
            /**
             * The Rocketlane permission identifier.
             * @exclusiveMinimum 0
             */
            permissionId?: number;
            /** The Rocketlane permission name. */
            permissionName?: string;
            [key: string]: unknown;
          };
          /** The Rocketlane custom user fields returned for the user. */
          fields?: Array<{
            /**
             * The Rocketlane custom field identifier.
             * @exclusiveMinimum 0
             */
            fieldId?: number;
            /** The Rocketlane custom field label. */
            fieldLabel?: string;
            /** The raw Rocketlane custom field value. */
            fieldValue?: unknown;
            /** The display label for the Rocketlane custom field value. */
            fieldValueLabel?: string;
            [key: string]: unknown;
          }>;
          /** The Rocketlane user capacity in minutes. */
          capacityInMinutes?: number;
          /** The Rocketlane holiday calendar attached to the user. */
          holidayCalendar?: Record<string, unknown>;
          /** The Rocketlane user profile picture URL. */
          profilePictureUrl?: string;
          /**
           * The epoch timestamp in milliseconds.
           * @minimum 0
           */
          createdAt?: number;
          /** A lightweight Rocketlane person summary. */
          createdBy?: {
            /**
             * The Rocketlane user identifier.
             * @exclusiveMinimum 0
             */
            userId?: number;
            /** The Rocketlane email address when available. */
            emailId?: string;
            /** The Rocketlane first name when available. */
            firstName?: string;
            /** The Rocketlane last name when available. */
            lastName?: string;
            [key: string]: unknown;
          };
          /**
           * The epoch timestamp in milliseconds.
           * @minimum 0
           */
          updatedAt?: number;
          /** A lightweight Rocketlane person summary. */
          updatedBy?: {
            /**
             * The Rocketlane user identifier.
             * @exclusiveMinimum 0
             */
            userId?: number;
            /** The Rocketlane email address when available. */
            emailId?: string;
            /** The Rocketlane first name when available. */
            firstName?: string;
            /** The Rocketlane last name when available. */
            lastName?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Rocketlane list endpoints. */
        pagination: {
          /**
           * The maximum number of records to return per page.
           * @minimum 1
           * @maximum 100
           */
          pageSize?: number;
          /** Whether Rocketlane has more results available. */
          hasMore?: boolean;
          /**
           * The total number of matching Rocketlane records.
           * @minimum 0
           */
          totalRecordCount?: number;
          /**
           * The next-page URL returned by Rocketlane.
           * @minLength 1
           */
          nextPage?: string;
          /**
           * The pagination token returned by the previous Rocketlane list response.
           * @minLength 1
           */
          nextPageToken?: string;
        };
      };
    };
  }
}
