import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add an OOMOL user to the current team with the member role. */
    "oomol_console.add_member": {
      input: {
        /**
         * The exact OOMOL user identifier to add.
         * @minLength 1
         * @pattern \S
         */
        userId: string;
      };
      output: {
        /** Whether the member was added successfully. */
        added: true;
        /**
         * The current OOMOL team identifier.
         * @minLength 1
         * @pattern \S
         */
        teamId: string;
        /**
         * The OOMOL user identifier that was added.
         * @minLength 1
         * @pattern \S
         */
        userId: string;
        /** The role assigned to the new team member. */
        role: "member";
      };
    };
    /** Create a custom Connection permission group and replace the assignments of its members. */
    "oomol_console.create_connection_permission_group": {
      input: {
        /**
         * The Connector App ID in the current OOMOL team.
         * @minLength 1
         * @pattern \S
         */
        appId: string;
        /**
         * The exact revision returned by list_connection_permission_groups.
         * @minLength 1
         * @pattern \S
         */
        revision: string;
        /**
         * The permission group display name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** The complete member set that should belong to the permission group after this mutation. */
        memberIds: Array<string>;
        /** The action permission assigned by a permission group. */
        actionPermission: {
          /** Allow every provider action. */
          mode: "all";
        } | {
          /** Deny every provider action. */
          mode: "none";
        } | {
          /** Allow only selected provider actions. */
          mode: "selected";
          /**
           * The exact provider action names allowed by the permission group.
           * @minItems 1
           */
          actionNames: Array<string>;
        };
      };
      output: {
        /** A manageable Connection in the current OOMOL team. */
        connection: {
          /**
           * The Connector App ID.
           * @minLength 1
           * @pattern \S
           */
          appId: string;
          /**
           * The provider service identifier.
           * @minLength 1
           * @pattern \S
           */
          service: string;
          /** The Connection display name. */
          displayName: string;
          /** The optional team-local Connection alias. */
          alias: string | null;
          /** The provider account label for the Connection. */
          accountLabel: string | null;
          /** The current Connection status. */
          status: "active" | "reauth_required" | "error" | "disconnected" | null;
          /** Whether this is the default Connection for its provider. */
          isDefault: boolean;
        };
        /**
         * The ETag revision required by subsequent permission-group mutations.
         * @minLength 1
         * @pattern \S
         */
        revision: string;
        /** The non-deletable default permission group. */
        defaultGroup: {
          /** The permission group kind. */
          kind: "default";
          /** The stable default permission group name. */
          name: "Default permission group";
          /** The members covered by the default permission group. */
          memberScope: "all";
          /** Whether the default permission group can be deleted. */
          deletable: false;
          /** The action permission assigned by a permission group. */
          actionPermission: {
            /** Allow every provider action. */
            mode: "all";
          } | {
            /** Deny every provider action. */
            mode: "none";
          } | {
            /** Allow only selected provider actions. */
            mode: "selected";
            /**
             * The exact provider action names allowed by the permission group.
             * @minItems 1
             */
            actionNames: Array<string>;
          };
        };
        /** The custom permission groups for the Connection. */
        groups: Array<{
          /** The permission group kind. */
          kind: "custom";
          /**
           * The stable permission group identifier.
           * @minLength 1
           * @pattern \S
           */
          groupId: string;
          /**
           * The permission group display name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** The current-team member identifiers assigned to this permission group. */
          memberIds: Array<string>;
          /** The action permission assigned by a permission group. */
          actionPermission: {
            /** Allow every provider action. */
            mode: "all";
          } | {
            /** Deny every provider action. */
            mode: "none";
          } | {
            /** Allow only selected provider actions. */
            mode: "selected";
            /**
             * The exact provider action names allowed by the permission group.
             * @minItems 1
             */
            actionNames: Array<string>;
          };
        }>;
        /** The members of the current OOMOL team. */
        members: Array<{
          /**
           * The OOMOL user or service-account identifier.
           * @minLength 1
           * @pattern \S
           */
          userId: string;
          /** The type of team member. */
          userType?: "user" | "service_account";
          /** The member display name. */
          name?: string;
          /** The role held by the principal in the team. */
          role: "creator" | "admin" | "member" | "guest";
          /** Whether the member is disabled in the team. */
          disabled: boolean;
        }>;
        /** The provider actions available when configuring permission groups. */
        availableActions: Array<{
          /**
           * The provider action name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** The provider action description. */
          description: string;
          /** The provider action operation type. */
          operationType: "read" | "write" | "destructive";
          /** Whether this action can be selected individually. */
          configurable: boolean;
        }>;
        /**
         * The created permission group identifier.
         * @minLength 1
         * @pattern \S
         */
        createdGroupId: string;
      };
    };
    /** Delete a custom Connection permission group so its members return to the default group. */
    "oomol_console.delete_connection_permission_group": {
      input: {
        /**
         * The Connector App ID in the current OOMOL team.
         * @minLength 1
         * @pattern \S
         */
        appId: string;
        /**
         * The exact revision returned by list_connection_permission_groups.
         * @minLength 1
         * @pattern \S
         */
        revision: string;
        /**
         * The permission group identifier to delete.
         * @minLength 1
         * @pattern \S
         */
        groupId: string;
      };
      output: {
        /** A manageable Connection in the current OOMOL team. */
        connection: {
          /**
           * The Connector App ID.
           * @minLength 1
           * @pattern \S
           */
          appId: string;
          /**
           * The provider service identifier.
           * @minLength 1
           * @pattern \S
           */
          service: string;
          /** The Connection display name. */
          displayName: string;
          /** The optional team-local Connection alias. */
          alias: string | null;
          /** The provider account label for the Connection. */
          accountLabel: string | null;
          /** The current Connection status. */
          status: "active" | "reauth_required" | "error" | "disconnected" | null;
          /** Whether this is the default Connection for its provider. */
          isDefault: boolean;
        };
        /**
         * The ETag revision required by subsequent permission-group mutations.
         * @minLength 1
         * @pattern \S
         */
        revision: string;
        /** The non-deletable default permission group. */
        defaultGroup: {
          /** The permission group kind. */
          kind: "default";
          /** The stable default permission group name. */
          name: "Default permission group";
          /** The members covered by the default permission group. */
          memberScope: "all";
          /** Whether the default permission group can be deleted. */
          deletable: false;
          /** The action permission assigned by a permission group. */
          actionPermission: {
            /** Allow every provider action. */
            mode: "all";
          } | {
            /** Deny every provider action. */
            mode: "none";
          } | {
            /** Allow only selected provider actions. */
            mode: "selected";
            /**
             * The exact provider action names allowed by the permission group.
             * @minItems 1
             */
            actionNames: Array<string>;
          };
        };
        /** The custom permission groups for the Connection. */
        groups: Array<{
          /** The permission group kind. */
          kind: "custom";
          /**
           * The stable permission group identifier.
           * @minLength 1
           * @pattern \S
           */
          groupId: string;
          /**
           * The permission group display name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** The current-team member identifiers assigned to this permission group. */
          memberIds: Array<string>;
          /** The action permission assigned by a permission group. */
          actionPermission: {
            /** Allow every provider action. */
            mode: "all";
          } | {
            /** Deny every provider action. */
            mode: "none";
          } | {
            /** Allow only selected provider actions. */
            mode: "selected";
            /**
             * The exact provider action names allowed by the permission group.
             * @minItems 1
             */
            actionNames: Array<string>;
          };
        }>;
        /** The members of the current OOMOL team. */
        members: Array<{
          /**
           * The OOMOL user or service-account identifier.
           * @minLength 1
           * @pattern \S
           */
          userId: string;
          /** The type of team member. */
          userType?: "user" | "service_account";
          /** The member display name. */
          name?: string;
          /** The role held by the principal in the team. */
          role: "creator" | "admin" | "member" | "guest";
          /** Whether the member is disabled in the team. */
          disabled: boolean;
        }>;
        /** The provider actions available when configuring permission groups. */
        availableActions: Array<{
          /**
           * The provider action name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** The provider action description. */
          description: string;
          /** The provider action operation type. */
          operationType: "read" | "write" | "destructive";
          /** Whether this action can be selected individually. */
          configurable: boolean;
        }>;
        /**
         * The deleted permission group identifier.
         * @minLength 1
         * @pattern \S
         */
        deletedGroupId: string;
        /** The members returned to the default permission group. */
        affectedMemberIds: Array<string>;
      };
    };
    /** Return every available balance lot for the authenticated OOMOL account. */
    "oomol_console.get_balance": {
      input: Record<string, never>;
      output: {
        /** The billing scope represented by this result. */
        scope: "account";
        /** All available balance lots across every upstream page. */
        items: Array<{
          /**
           * The balance lot identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The source type that created the balance lot. */
          sourceType: string;
          /** The service scope that can consume the balance lot. */
          serviceScope: string;
          /** The payment amount associated with the lot. */
          paymentAmount: number | null;
          /** The payment currency associated with the lot. */
          currency: string | null;
          /** The remaining credit represented as an exact decimal string. */
          currentCredit: string;
          /** The original credit represented as an exact decimal string. */
          originalCredit: string;
          /** Whether the balance lot is currently available. */
          available: boolean;
          /** The billing order number associated with the lot. */
          orderNumber: string | null;
          /** The promotional code associated with the lot. */
          promoCode: string | null;
          /** The expiration timestamp in milliseconds. */
          expiresAt: number | null;
          /** The creation timestamp in milliseconds. */
          createdAt: number;
        }>;
        /** The next page token, always null after full aggregation. */
        nextToken: string | null;
        /** The aggregate credit totals returned by OOMOL Insight. */
        total: {
          /** The original aggregate credit as an exact decimal string. */
          originalCredit: string;
          /** The remaining aggregate credit as an exact decimal string. */
          currentCredit: string;
        } | null;
        /** The account deficit as an exact decimal string. */
        deficit: string | null;
      };
    };
    /** Return the compact OOMOL account billing metrics shown by Console. */
    "oomol_console.get_billing_summary": {
      input: {
        /**
         * The number of trailing days to include.
         * @minimum 1
         * @maximum 90
         * @default 30
         */
        days: number;
        /**
         * The UTC offset in whole hours used for daily boundaries.
         * @minimum -12
         * @maximum 14
         * @default 0
         */
        utcOffset: number;
      };
      output: {
        /** The billing scope represented by this result. */
        scope: "account";
        /** The requested billing summary period. */
        period: {
          /** The number of trailing days included in the summary. */
          days: number;
          /** The period start timestamp in milliseconds. */
          startTime: number;
          /** The period end timestamp in milliseconds. */
          endTime: number;
          /** The UTC offset used for daily boundaries. */
          utcOffset: number;
        };
        /** The remaining GENERAL credit as an exact decimal string. */
        generalBalanceCredit: string;
        /** The remaining non-general visible allowance as an exact decimal string. */
        scopedAllowanceCredit: string;
        /** The account deficit as an exact decimal string. */
        deficit: string | null;
        /** The credit spent during the period as an exact decimal string. */
        spentCredit: string;
        /**
         * The number of metered events during the period.
         * @minimum 0
         */
        meteredEvents: number;
      };
    };
    /** Return the current OOMOL team scope and authenticated principal. */
    "oomol_console.get_current_scope": {
      input: Record<string, never>;
      output: {
        /** The current team scope. */
        scope: {
          /** The execution scope kind. */
          kind: "team";
          /** A team visible to the authenticated OOMOL principal. */
          team: {
            /**
             * The OOMOL team identifier.
             * @minLength 1
             * @pattern \S
             */
            id: string;
            /** The team display name. */
            name: string;
            /** The team avatar URL. */
            avatar?: string;
            /** The user identifier of the team creator. */
            creatorUserId?: string;
            /** The current team status. */
            status?: "normal" | "paused";
            /** The role held by the principal in the team. */
            role?: "creator" | "admin" | "member" | "guest";
            /** Whether the authenticated principal can modify the team. */
            writable?: boolean;
            /** Whether OOMOL created the team as the account's default team. */
            systemCreated?: boolean;
          };
        };
        /** The principal authenticated for the current action execution. */
        principal: {
          /** The authenticated OOMOL principal type. */
          kind: "user" | "service_account" | "team_token";
          /** The user or service-account identifier when one is available. */
          id?: string;
        };
      };
    };
    /** Return metadata and member counts for the current OOMOL team. */
    "oomol_console.get_team_summary": {
      input: Record<string, never>;
      output: {
        /** A team visible to the authenticated OOMOL principal. */
        team: {
          /**
           * The OOMOL team identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The team display name. */
          name: string;
          /** The team avatar URL. */
          avatar?: string;
          /** The user identifier of the team creator. */
          creatorUserId?: string;
          /** The current team status. */
          status?: "normal" | "paused";
          /** The role held by the principal in the team. */
          role?: "creator" | "admin" | "member" | "guest";
          /** Whether the authenticated principal can modify the team. */
          writable?: boolean;
          /** Whether OOMOL created the team as the account's default team. */
          systemCreated?: boolean;
        };
        /** Derived counts for members of the current team. */
        members: {
          /**
           * The total number of team members.
           * @minimum 0
           */
          total: number;
          /**
           * The number of active team members.
           * @minimum 0
           */
          active: number;
          /**
           * The number of disabled team members.
           * @minimum 0
           */
          disabled: number;
          /**
           * The number of user members.
           * @minimum 0
           */
          users: number;
          /**
           * The number of service-account members.
           * @minimum 0
           */
          serviceAccounts: number;
        };
      };
    };
    /** Return the daily OOMOL account usage breakdown by source and subject. */
    "oomol_console.get_usage_breakdown": {
      input: {
        /**
         * The number of trailing days to include.
         * @minimum 1
         * @maximum 90
         * @default 30
         */
        days: number;
        /**
         * The UTC offset in whole hours used for daily boundaries.
         * @minimum -12
         * @maximum 14
         * @default 0
         */
        utcOffset: number;
      };
      output: {
        /** The usage scope represented by this result. */
        scope: "account";
        /** The effective time range used by OOMOL Insight. */
        effectiveRange: {
          /** The inclusive range start timestamp in milliseconds. */
          startTime: number;
          /** The exclusive range end timestamp in milliseconds. */
          endTime: number;
        };
        /** The timestamp through which metering data is complete. */
        dataAsOf: number;
        /** The time granularity of the returned series. */
        granularity: "daily";
        /** The daily metering series. */
        items: Array<{
          /** The start timestamp of the data point in milliseconds. */
          time: number;
          /** The metering source represented by the data point. */
          source?: string;
          /** The metering subject represented by the data point. */
          subject?: string;
          /** The total usage reported for the data point. */
          totalUsage?: string;
          /**
           * The number of metering events in the data point.
           * @minimum 0
           */
          eventCount: number;
        }>;
        /** The metering total across all returned sources. */
        total: {
          /**
           * The total number of metering events.
           * @minimum 0
           */
          eventCount: number;
        };
        /** Metering event totals keyed by source. */
        sourceTotals: Record<string, {
            /**
             * The number of metering events for the source.
             * @minimum 0
             */
            eventCount: number;
          }>;
        /** Metering totals keyed first by source and then by subject. */
        subjectTotals: Record<string, Record<string, {
              /** The total usage reported for the subject. */
              totalUsage: string;
              /**
               * The number of metering events reported for the subject.
               * @minimum 0
               */
              eventCount: number;
            }>>;
      };
    };
    /** List the execution records shown on an OOMOL Console Connection details page. */
    "oomol_console.list_connection_executions": {
      input: {
        /**
         * The Connector App ID shown on the Connection details page.
         * @minLength 1
         * @pattern \S
         */
        appId: string;
        /**
         * Only return executions for this action name.
         * @minLength 1
         * @pattern \S
         */
        action?: string;
        /**
         * The cursor returned by the previous page.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * The maximum number of execution records to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit: number;
        /** Only return executions with this result status. */
        status?: "success" | "error";
      };
      output: {
        /** The execution records visible to the current principal. */
        data: Array<{
          /**
           * The execution identifier.
           * @minLength 1
           * @pattern \S
           */
          executionId: string;
          /**
           * The provider service identifier.
           * @minLength 1
           * @pattern \S
           */
          service: string;
          /**
           * The executed action name.
           * @minLength 1
           * @pattern \S
           */
          action: string;
          /** The actor that triggered the execution. */
          actor: string;
          /** The user or service-account identifier that ran the action. */
          userId?: string;
          /** The execution result status. */
          status: "success" | "error";
          /** The normalized execution error code. */
          errorCode: string;
          /** The execution error message. */
          errorMessage: string;
          /** The execution start timestamp. */
          startedAt: string;
          /** The execution finish timestamp. */
          finishedAt: string;
          /** The logged action input after configured redaction. */
          input: unknown;
          /** The summarized action output after configured redaction. */
          outputSummary: string;
        }>;
        /** The cursor for loading the next page. */
        nextCursor?: string;
      };
    };
    /** List the default and custom permission groups for one current-team Connection. */
    "oomol_console.list_connection_permission_groups": {
      input: {
        /**
         * The Connector App ID in the current OOMOL team.
         * @minLength 1
         * @pattern \S
         */
        appId: string;
      };
      output: {
        /** A manageable Connection in the current OOMOL team. */
        connection: {
          /**
           * The Connector App ID.
           * @minLength 1
           * @pattern \S
           */
          appId: string;
          /**
           * The provider service identifier.
           * @minLength 1
           * @pattern \S
           */
          service: string;
          /** The Connection display name. */
          displayName: string;
          /** The optional team-local Connection alias. */
          alias: string | null;
          /** The provider account label for the Connection. */
          accountLabel: string | null;
          /** The current Connection status. */
          status: "active" | "reauth_required" | "error" | "disconnected" | null;
          /** Whether this is the default Connection for its provider. */
          isDefault: boolean;
        };
        /**
         * The ETag revision required by subsequent permission-group mutations.
         * @minLength 1
         * @pattern \S
         */
        revision: string;
        /** The non-deletable default permission group. */
        defaultGroup: {
          /** The permission group kind. */
          kind: "default";
          /** The stable default permission group name. */
          name: "Default permission group";
          /** The members covered by the default permission group. */
          memberScope: "all";
          /** Whether the default permission group can be deleted. */
          deletable: false;
          /** The action permission assigned by a permission group. */
          actionPermission: {
            /** Allow every provider action. */
            mode: "all";
          } | {
            /** Deny every provider action. */
            mode: "none";
          } | {
            /** Allow only selected provider actions. */
            mode: "selected";
            /**
             * The exact provider action names allowed by the permission group.
             * @minItems 1
             */
            actionNames: Array<string>;
          };
        };
        /** The custom permission groups for the Connection. */
        groups: Array<{
          /** The permission group kind. */
          kind: "custom";
          /**
           * The stable permission group identifier.
           * @minLength 1
           * @pattern \S
           */
          groupId: string;
          /**
           * The permission group display name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** The current-team member identifiers assigned to this permission group. */
          memberIds: Array<string>;
          /** The action permission assigned by a permission group. */
          actionPermission: {
            /** Allow every provider action. */
            mode: "all";
          } | {
            /** Deny every provider action. */
            mode: "none";
          } | {
            /** Allow only selected provider actions. */
            mode: "selected";
            /**
             * The exact provider action names allowed by the permission group.
             * @minItems 1
             */
            actionNames: Array<string>;
          };
        }>;
        /** The members of the current OOMOL team. */
        members: Array<{
          /**
           * The OOMOL user or service-account identifier.
           * @minLength 1
           * @pattern \S
           */
          userId: string;
          /** The type of team member. */
          userType?: "user" | "service_account";
          /** The member display name. */
          name?: string;
          /** The role held by the principal in the team. */
          role: "creator" | "admin" | "member" | "guest";
          /** Whether the member is disabled in the team. */
          disabled: boolean;
        }>;
        /** The provider actions available when configuring permission groups. */
        availableActions: Array<{
          /**
           * The provider action name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** The provider action description. */
          description: string;
          /** The provider action operation type. */
          operationType: "read" | "write" | "destructive";
          /** Whether this action can be selected individually. */
          configurable: boolean;
        }>;
      };
    };
    /** List members of the current OOMOL team. */
    "oomol_console.list_members": {
      input: Record<string, never>;
      output: {
        /** The current-team members. */
        members: Array<{
          /**
           * The OOMOL user or service-account identifier.
           * @minLength 1
           * @pattern \S
           */
          userId: string;
          /** The type of team member. */
          userType?: "user" | "service_account";
          /** The member display name. */
          name?: string;
          /** The role held by the principal in the team. */
          role: "creator" | "admin" | "member" | "guest";
          /** Whether the member is disabled in the team. */
          disabled: boolean;
        }>;
      };
    };
    /** List the Connections manageable by an administrator of the current OOMOL team. */
    "oomol_console.list_team_connections": {
      input: Record<string, never>;
      output: {
        /** The manageable current-team Connections. */
        connections: Array<{
          /**
           * The Connector App ID.
           * @minLength 1
           * @pattern \S
           */
          appId: string;
          /**
           * The provider service identifier.
           * @minLength 1
           * @pattern \S
           */
          service: string;
          /** The Connection display name. */
          displayName: string;
          /** The optional team-local Connection alias. */
          alias: string | null;
          /** The provider account label for the Connection. */
          accountLabel: string | null;
          /** The current Connection status. */
          status: "active" | "reauth_required" | "error" | "disconnected" | null;
          /** Whether this is the default Connection for its provider. */
          isDefault: boolean;
        }>;
      };
    };
    /** List the OOMOL teams visible to the authenticated account. */
    "oomol_console.list_teams": {
      input: Record<string, never>;
      output: {
        /** The visible teams, with the system-created team first. */
        teams: Array<{
          /**
           * The OOMOL team identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The team display name. */
          name: string;
          /** The team avatar URL. */
          avatar?: string;
          /** The user identifier of the team creator. */
          creatorUserId?: string;
          /** The current team status. */
          status?: "normal" | "paused";
          /** The role held by the principal in the team. */
          role?: "creator" | "admin" | "member" | "guest";
          /** Whether the authenticated principal can modify the team. */
          writable?: boolean;
          /** Whether OOMOL created the team as the account's default team. */
          systemCreated?: boolean;
        }>;
      };
    };
    /** Replace the action permission of a Connection's non-deletable default permission group. */
    "oomol_console.update_connection_default_permission_group": {
      input: {
        /**
         * The Connector App ID in the current OOMOL team.
         * @minLength 1
         * @pattern \S
         */
        appId: string;
        /**
         * The exact revision returned by list_connection_permission_groups.
         * @minLength 1
         * @pattern \S
         */
        revision: string;
        /** The action permission assigned by a permission group. */
        actionPermission: {
          /** Allow every provider action. */
          mode: "all";
        } | {
          /** Deny every provider action. */
          mode: "none";
        } | {
          /** Allow only selected provider actions. */
          mode: "selected";
          /**
           * The exact provider action names allowed by the permission group.
           * @minItems 1
           */
          actionNames: Array<string>;
        };
      };
      output: {
        /** A manageable Connection in the current OOMOL team. */
        connection: {
          /**
           * The Connector App ID.
           * @minLength 1
           * @pattern \S
           */
          appId: string;
          /**
           * The provider service identifier.
           * @minLength 1
           * @pattern \S
           */
          service: string;
          /** The Connection display name. */
          displayName: string;
          /** The optional team-local Connection alias. */
          alias: string | null;
          /** The provider account label for the Connection. */
          accountLabel: string | null;
          /** The current Connection status. */
          status: "active" | "reauth_required" | "error" | "disconnected" | null;
          /** Whether this is the default Connection for its provider. */
          isDefault: boolean;
        };
        /**
         * The ETag revision required by subsequent permission-group mutations.
         * @minLength 1
         * @pattern \S
         */
        revision: string;
        /** The non-deletable default permission group. */
        defaultGroup: {
          /** The permission group kind. */
          kind: "default";
          /** The stable default permission group name. */
          name: "Default permission group";
          /** The members covered by the default permission group. */
          memberScope: "all";
          /** Whether the default permission group can be deleted. */
          deletable: false;
          /** The action permission assigned by a permission group. */
          actionPermission: {
            /** Allow every provider action. */
            mode: "all";
          } | {
            /** Deny every provider action. */
            mode: "none";
          } | {
            /** Allow only selected provider actions. */
            mode: "selected";
            /**
             * The exact provider action names allowed by the permission group.
             * @minItems 1
             */
            actionNames: Array<string>;
          };
        };
        /** The custom permission groups for the Connection. */
        groups: Array<{
          /** The permission group kind. */
          kind: "custom";
          /**
           * The stable permission group identifier.
           * @minLength 1
           * @pattern \S
           */
          groupId: string;
          /**
           * The permission group display name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** The current-team member identifiers assigned to this permission group. */
          memberIds: Array<string>;
          /** The action permission assigned by a permission group. */
          actionPermission: {
            /** Allow every provider action. */
            mode: "all";
          } | {
            /** Deny every provider action. */
            mode: "none";
          } | {
            /** Allow only selected provider actions. */
            mode: "selected";
            /**
             * The exact provider action names allowed by the permission group.
             * @minItems 1
             */
            actionNames: Array<string>;
          };
        }>;
        /** The members of the current OOMOL team. */
        members: Array<{
          /**
           * The OOMOL user or service-account identifier.
           * @minLength 1
           * @pattern \S
           */
          userId: string;
          /** The type of team member. */
          userType?: "user" | "service_account";
          /** The member display name. */
          name?: string;
          /** The role held by the principal in the team. */
          role: "creator" | "admin" | "member" | "guest";
          /** Whether the member is disabled in the team. */
          disabled: boolean;
        }>;
        /** The provider actions available when configuring permission groups. */
        availableActions: Array<{
          /**
           * The provider action name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** The provider action description. */
          description: string;
          /** The provider action operation type. */
          operationType: "read" | "write" | "destructive";
          /** Whether this action can be selected individually. */
          configurable: boolean;
        }>;
      };
    };
    /** Replace the name, member assignments, and action permission of a custom Connection permission group. */
    "oomol_console.update_connection_permission_group": {
      input: {
        /**
         * The Connector App ID in the current OOMOL team.
         * @minLength 1
         * @pattern \S
         */
        appId: string;
        /**
         * The exact revision returned by list_connection_permission_groups.
         * @minLength 1
         * @pattern \S
         */
        revision: string;
        /**
         * The permission group identifier to update.
         * @minLength 1
         * @pattern \S
         */
        groupId: string;
        /**
         * The new permission group display name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** The complete member set that should belong to the permission group after this mutation. */
        memberIds: Array<string>;
        /** The action permission assigned by a permission group. */
        actionPermission: {
          /** Allow every provider action. */
          mode: "all";
        } | {
          /** Deny every provider action. */
          mode: "none";
        } | {
          /** Allow only selected provider actions. */
          mode: "selected";
          /**
           * The exact provider action names allowed by the permission group.
           * @minItems 1
           */
          actionNames: Array<string>;
        };
      };
      output: {
        /** A manageable Connection in the current OOMOL team. */
        connection: {
          /**
           * The Connector App ID.
           * @minLength 1
           * @pattern \S
           */
          appId: string;
          /**
           * The provider service identifier.
           * @minLength 1
           * @pattern \S
           */
          service: string;
          /** The Connection display name. */
          displayName: string;
          /** The optional team-local Connection alias. */
          alias: string | null;
          /** The provider account label for the Connection. */
          accountLabel: string | null;
          /** The current Connection status. */
          status: "active" | "reauth_required" | "error" | "disconnected" | null;
          /** Whether this is the default Connection for its provider. */
          isDefault: boolean;
        };
        /**
         * The ETag revision required by subsequent permission-group mutations.
         * @minLength 1
         * @pattern \S
         */
        revision: string;
        /** The non-deletable default permission group. */
        defaultGroup: {
          /** The permission group kind. */
          kind: "default";
          /** The stable default permission group name. */
          name: "Default permission group";
          /** The members covered by the default permission group. */
          memberScope: "all";
          /** Whether the default permission group can be deleted. */
          deletable: false;
          /** The action permission assigned by a permission group. */
          actionPermission: {
            /** Allow every provider action. */
            mode: "all";
          } | {
            /** Deny every provider action. */
            mode: "none";
          } | {
            /** Allow only selected provider actions. */
            mode: "selected";
            /**
             * The exact provider action names allowed by the permission group.
             * @minItems 1
             */
            actionNames: Array<string>;
          };
        };
        /** The custom permission groups for the Connection. */
        groups: Array<{
          /** The permission group kind. */
          kind: "custom";
          /**
           * The stable permission group identifier.
           * @minLength 1
           * @pattern \S
           */
          groupId: string;
          /**
           * The permission group display name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** The current-team member identifiers assigned to this permission group. */
          memberIds: Array<string>;
          /** The action permission assigned by a permission group. */
          actionPermission: {
            /** Allow every provider action. */
            mode: "all";
          } | {
            /** Deny every provider action. */
            mode: "none";
          } | {
            /** Allow only selected provider actions. */
            mode: "selected";
            /**
             * The exact provider action names allowed by the permission group.
             * @minItems 1
             */
            actionNames: Array<string>;
          };
        }>;
        /** The members of the current OOMOL team. */
        members: Array<{
          /**
           * The OOMOL user or service-account identifier.
           * @minLength 1
           * @pattern \S
           */
          userId: string;
          /** The type of team member. */
          userType?: "user" | "service_account";
          /** The member display name. */
          name?: string;
          /** The role held by the principal in the team. */
          role: "creator" | "admin" | "member" | "guest";
          /** Whether the member is disabled in the team. */
          disabled: boolean;
        }>;
        /** The provider actions available when configuring permission groups. */
        availableActions: Array<{
          /**
           * The provider action name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** The provider action description. */
          description: string;
          /** The provider action operation type. */
          operationType: "read" | "write" | "destructive";
          /** Whether this action can be selected individually. */
          configurable: boolean;
        }>;
        /**
         * The canonical permission group identifier after any legacy migration.
         * @minLength 1
         * @pattern \S
         */
        updatedGroupId: string;
      };
    };
  }
}
