import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Bulk change CodeRabbit organization roles for up to 500 users. */
    "coderabbit.change_roles": {
      input: {
        /** The CodeRabbit user role. */
        role: "cr_admin" | "cr_member";
        /**
         * The provider user identifiers to assign the role to.
         * @minItems 1
         * @maxItems 500
         */
        userIds: Array<string>;
      };
      output: {
        /** The bulk operation status. */
        status: "success" | "partial_success" | "failure";
        /** The user identifiers that were successfully processed. */
        succeeded: Array<string>;
        /** The failed user operations. */
        failed: Array<{
          /**
           * The user identifier that failed.
           * @minLength 1
           */
          id?: string;
          /**
           * The CodeRabbit error code for this failed item.
           * @minLength 1
           */
          code?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create a CodeRabbit Enterprise custom role. */
    "coderabbit.create_role": {
      input: {
        /**
         * The git-provider organization ID for workspace-scoped API tokens.
         * @minLength 1
         */
        orgId?: string;
        /**
         * The name of the custom role.
         * @minLength 1
         */
        name: string;
        /** The description of the custom role. */
        description?: string | null;
        /** Whether the new role should become the subscription default. */
        isDefault?: boolean;
        /**
         * The role ID to copy permissions from.
         * @minLength 1
         */
        duplicateFrom?: string;
        /** The permissions to assign to the custom role. */
        permissions?: Array<{
          /**
           * The CodeRabbit permission resource identifier.
           * @minLength 1
           */
          resource_id: string;
          /** The CodeRabbit role permission access type. */
          access_type: "read" | "write" | "delete";
        }>;
      };
      output: {
        /** A CodeRabbit role. */
        role: {
          /** The CodeRabbit role identifier. */
          id?: string;
          /** The CodeRabbit role name. */
          name?: string;
          /** The CodeRabbit role description. */
          description?: string | null;
          /** Whether this role is the organization default role. */
          is_default?: boolean | null;
          /** The permissions attached to this role. */
          permissions?: Array<{
            /**
             * The CodeRabbit permission resource identifier.
             * @minLength 1
             */
            resource_id: string;
            /** The CodeRabbit role permission access type. */
            access_type: "read" | "write" | "delete";
          }>;
          /** The number of users assigned to this role. */
          user_count?: number | null;
          [key: string]: unknown;
        };
        /** The raw CodeRabbit response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a CodeRabbit Enterprise custom role when it is not assigned to users. */
    "coderabbit.delete_role": {
      input: {
        /**
         * The CodeRabbit role identifier.
         * @minLength 1
         */
        roleId: string;
        /**
         * The git-provider organization ID for workspace-scoped API tokens.
         * @minLength 1
         */
        orgId?: string;
      };
      output: {
        /** Whether the CodeRabbit role was deleted. */
        deleted: boolean;
      };
    };
    /** Get CodeRabbit merged pull request review metrics for a date range with optional organization, repository, and user filters. */
    "coderabbit.get_review_metrics": {
      input: {
        /**
         * The start date in YYYY-MM-DD format.
         * @format date
         */
        startDate: string;
        /**
         * The end date in YYYY-MM-DD format.
         * @format date
         */
        endDate: string;
        /**
         * The organization Git provider IDs to filter by, up to 10 values.
         * @minItems 1
         * @maxItems 10
         */
        organizationIds?: Array<string>;
        /**
         * The repository Git provider IDs to filter by, up to 10 values.
         * @minItems 1
         * @maxItems 10
         */
        repositoryIds?: Array<string>;
        /**
         * The author Git provider IDs to filter by, up to 10 values.
         * @minItems 1
         * @maxItems 10
         */
        userIds?: Array<string>;
        /**
         * The maximum number of metric records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The pagination cursor for fetching the next page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The CodeRabbit review metric records. */
        data: Array<{
          /** The full URL to the pull request. */
          pr_url?: string;
          /** The unique author identifier assigned by the Git provider. */
          author_id?: string;
          /** The pull request author's username. */
          author_username?: string;
          /** The unique organization identifier assigned by the Git provider. */
          organization_id?: string;
          /** The organization name. */
          organization_name?: string;
          /** The unique repository identifier assigned by the Git provider. */
          repository_id?: string;
          /** The repository name. */
          repository_name?: string;
          /** The timestamp when the pull request was created. */
          created_at?: string;
          /** The timestamp when the pull request became ready for review. */
          ready_for_review_at?: string | null;
          /** The timestamp when the first human review was submitted. */
          first_human_review_at?: string | null;
          /** The timestamp when the last commit was pushed. */
          last_commit_at?: string | null;
          /** The timestamp when the pull request was merged. */
          merged_at?: string | null;
          /** The estimated review complexity score. */
          estimated_complexity?: number | null;
          /** The estimated time to review the pull request in minutes. */
          estimated_review_minutes?: number | null;
          /** The CodeRabbit comment metrics. */
          coderabbit_comments?: {
            /** A CodeRabbit comment count bucket. */
            total?: {
              /** The number of comments posted. */
              posted?: number;
              /** The number of comments accepted. */
              accepted?: number;
              [key: string]: unknown;
            };
            /** The CodeRabbit comment metrics grouped by severity. */
            severity?: Record<string, unknown>;
            /** The CodeRabbit comment metrics grouped by category. */
            category?: Record<string, unknown>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The cursor for fetching the next page of results. */
        nextCursor: string | null;
        /** The raw CodeRabbit response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get details for one CodeRabbit built-in or Enterprise custom role. */
    "coderabbit.get_role": {
      input: {
        /**
         * The CodeRabbit role identifier.
         * @minLength 1
         */
        roleId: string;
        /**
         * The git-provider organization ID for workspace-scoped API tokens.
         * @minLength 1
         */
        orgId?: string;
        /** Whether to include permissions for the role. */
        includePermissions?: boolean;
        /** Whether to include assigned user count for the role. */
        includeUserCount?: boolean;
      };
      output: {
        /** A CodeRabbit role. */
        role: {
          /** The CodeRabbit role identifier. */
          id?: string;
          /** The CodeRabbit role name. */
          name?: string;
          /** The CodeRabbit role description. */
          description?: string | null;
          /** Whether this role is the organization default role. */
          is_default?: boolean | null;
          /** The permissions attached to this role. */
          permissions?: Array<{
            /**
             * The CodeRabbit permission resource identifier.
             * @minLength 1
             */
            resource_id: string;
            /** The CodeRabbit role permission access type. */
            access_type: "read" | "write" | "delete";
          }>;
          /** The number of users assigned to this role. */
          user_count?: number | null;
          [key: string]: unknown;
        };
        /** The raw CodeRabbit response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve the current CodeRabbit seat assignment mode for a self-hosted Enterprise organization. */
    "coderabbit.get_seat_assignment_mode": {
      input: Record<string, never>;
      output: {
        /** The CodeRabbit seat assignment mode. */
        mode: "automatic" | "manual";
      };
    };
    /** List CodeRabbit organization audit log entries with optional actor, action, resource type, date, and pagination filters. */
    "coderabbit.list_audit_logs": {
      input: {
        /**
         * Case-insensitive partial match on actor name.
         * @maxLength 200
         */
        search?: string;
        /**
         * The audit log action keys to filter by, up to 50 values.
         * @minItems 1
         * @maxItems 50
         */
        actions?: Array<string>;
        /**
         * The audit log resource type keys to filter by, up to 50 values.
         * @minItems 1
         * @maxItems 50
         */
        resourceTypes?: Array<string>;
        /**
         * The inclusive lower timestamp bound in ISO 8601 format.
         * @format date-time
         */
        dateFrom?: string;
        /**
         * The inclusive upper timestamp bound in ISO 8601 format.
         * @format date-time
         */
        dateTo?: string;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The audit log entries returned by CodeRabbit. */
        data: Array<{
          /** The audit log entry identifier. */
          id?: string;
          /** The audit log action key. */
          action?: string;
          /** The human-readable action label. */
          actionLabel?: string;
          /** The affected resource type key. */
          resourceType?: string;
          /** The human-readable resource type label. */
          resourceTypeLabel?: string;
          /** The short description of the affected resource. */
          resourceSummary?: string;
          /** The actor that performed an audit log action. */
          actor?: {
            /** The display name of the actor. */
            name?: string;
            /** The actor role label or actor type. */
            subtitle?: string;
            /** Whether the actor is a bot. */
            isBot?: boolean;
            /** The actor avatar URL when available. */
            avatarUrl?: string | null;
            [key: string]: unknown;
          };
          /** A CodeRabbit object returned by the API. */
          metadata?: Record<string, unknown> | null;
          /** The IP address that triggered the action. */
          ipAddress?: string | null;
          /** The ISO 8601 timestamp when the action occurred. */
          createdAt?: string;
          /** The human-readable relative event time. */
          relativeTime?: string;
          [key: string]: unknown;
        }>;
        /** The CodeRabbit pagination metadata. */
        pagination: {
          /** The current page number. */
          page?: number;
          /** The number of results per page. */
          page_size?: number;
          /** The total number of matching entries. */
          total_count?: number;
          /** The total number of pages. */
          total_pages?: number;
          /** Whether a next page is available. */
          has_next_page?: boolean;
          /** Whether a previous page is available. */
          has_previous_page?: boolean;
          [key: string]: unknown;
        };
        /** The available CodeRabbit audit log filter options. */
        filterOptions: {
          /** The available audit log action filters. */
          actions?: Array<{
            /** The filter option value. */
            value?: string;
            /** The filter option label. */
            label?: string;
            /** The number of entries matching this option. */
            count?: number;
            [key: string]: unknown;
          }>;
          /** The available audit log resource type filters. */
          resource_types?: Array<{
            /** The filter option value. */
            value?: string;
            /** The filter option label. */
            label?: string;
            /** The number of entries matching this option. */
            count?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The raw CodeRabbit response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List valid CodeRabbit role permission resource identifiers and access types for custom roles. */
    "coderabbit.list_role_permissions": {
      input: {
        /**
         * The git-provider organization ID for workspace-scoped API tokens.
         * @minLength 1
         */
        orgId?: string;
      };
      output: {
        /** The valid CodeRabbit permission resource identifiers. */
        resourceIds: Array<string>;
        /** The valid CodeRabbit permission access types. */
        accessTypes: Array<"read" | "write" | "delete">;
        /** The raw CodeRabbit response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List CodeRabbit built-in and Enterprise custom roles for the organization. */
    "coderabbit.list_roles": {
      input: {
        /**
         * The git-provider organization ID for workspace-scoped API tokens.
         * @minLength 1
         */
        orgId?: string;
        /** Filter roles by built-in or custom type. */
        roleType?: "all" | "system" | "custom";
        /** Whether to include permissions for each role. */
        includePermissions?: boolean;
        /** Whether to include assigned user counts for each role. */
        includeUserCount?: boolean;
      };
      output: {
        /** The CodeRabbit roles returned by the API. */
        roles: Array<{
          /** The CodeRabbit role identifier. */
          id?: string;
          /** The CodeRabbit role name. */
          name?: string;
          /** The CodeRabbit role description. */
          description?: string | null;
          /** Whether this role is the organization default role. */
          is_default?: boolean | null;
          /** The permissions attached to this role. */
          permissions?: Array<{
            /**
             * The CodeRabbit permission resource identifier.
             * @minLength 1
             */
            resource_id: string;
            /** The CodeRabbit role permission access type. */
            access_type: "read" | "write" | "delete";
          }>;
          /** The number of users assigned to this role. */
          user_count?: number | null;
          [key: string]: unknown;
        }>;
        /** The raw CodeRabbit response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List CodeRabbit organization users with optional seat and role filters using cursor-based pagination. */
    "coderabbit.list_users": {
      input: {
        /** Filter users by seat assignment status. */
        seatFilter?: "all" | "assigned" | "unassigned";
        /** Filter users by organization role. */
        roleFilter?: "all" | "member" | "admin";
        /**
         * The maximum number of users to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination cursor from the previous response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The total number of seats purchased in the subscription. */
        seatsPurchased: number;
        /** The number of seats currently assigned to users. */
        seatsAssigned: number;
        /** The CodeRabbit seat assignment mode. */
        seatAssignmentMode: "automatic" | "manual";
        /** The CodeRabbit users returned by the API. */
        users: Array<{
          /**
           * The unique user identifier assigned by the Git provider.
           * @minLength 1
           */
          user_id?: string;
          /** Whether the user has a CodeRabbit seat assigned. */
          seat_assigned?: boolean;
          /** The user's CodeRabbit role. */
          role?: string;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page of results. */
        nextCursor: string | null;
        /** The raw CodeRabbit response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Bulk assign or unassign CodeRabbit seats for up to 500 organization users. */
    "coderabbit.manage_seats": {
      input: {
        /** The seat operation to perform. */
        action: "assign" | "unassign";
        /**
         * The provider user identifiers to assign or unassign seats for.
         * @minItems 1
         * @maxItems 500
         */
        userIds: Array<string>;
      };
      output: {
        /** The bulk operation status. */
        status: "success" | "partial_success" | "failure";
        /** The user identifiers that were successfully processed. */
        succeeded: Array<string>;
        /** The failed user operations. */
        failed: Array<{
          /**
           * The user identifier that failed.
           * @minLength 1
           */
          id?: string;
          /**
           * The CodeRabbit error code for this failed item.
           * @minLength 1
           */
          code?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update a CodeRabbit Enterprise custom role. */
    "coderabbit.update_role": {
      input: {
        /**
         * The git-provider organization ID for workspace-scoped API tokens.
         * @minLength 1
         */
        orgId?: string;
        /**
         * The CodeRabbit role identifier.
         * @minLength 1
         */
        roleId: string;
        /**
         * The updated custom role name.
         * @minLength 1
         */
        name?: string;
        /** The updated custom role description. */
        description?: string | null;
        /** Whether this role should become the subscription default. */
        isDefault?: boolean;
        /** The updated permissions to assign to the custom role. */
        permissions?: Array<{
          /**
           * The CodeRabbit permission resource identifier.
           * @minLength 1
           */
          resource_id: string;
          /** The CodeRabbit role permission access type. */
          access_type: "read" | "write" | "delete";
        }>;
      };
      output: {
        /** A CodeRabbit role. */
        role: {
          /** The CodeRabbit role identifier. */
          id?: string;
          /** The CodeRabbit role name. */
          name?: string;
          /** The CodeRabbit role description. */
          description?: string | null;
          /** Whether this role is the organization default role. */
          is_default?: boolean | null;
          /** The permissions attached to this role. */
          permissions?: Array<{
            /**
             * The CodeRabbit permission resource identifier.
             * @minLength 1
             */
            resource_id: string;
            /** The CodeRabbit role permission access type. */
            access_type: "read" | "write" | "delete";
          }>;
          /** The number of users assigned to this role. */
          user_count?: number | null;
          [key: string]: unknown;
        };
        /** The raw CodeRabbit response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Update the CodeRabbit seat assignment mode for a self-hosted Enterprise organization. */
    "coderabbit.update_seat_assignment_mode": {
      input: {
        /** The CodeRabbit seat assignment mode. */
        mode: "automatic" | "manual";
      };
      output: {
        /** The CodeRabbit seat assignment mode. */
        mode: "automatic" | "manual";
      };
    };
  }
}
