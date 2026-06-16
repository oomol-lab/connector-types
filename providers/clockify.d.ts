import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new Clockify project in a workspace. */
    "clockify.create_project": {
      input: {
        /**
         * The Clockify workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The project name to create.
         * @minLength 1
         */
        name: string;
        /** The project note. */
        note?: string;
        /** The project color in hexadecimal notation. */
        color?: string;
        /** Whether the created project should be public. */
        isPublic?: boolean;
        /** Whether the created project should be billable. */
        billable?: boolean;
        /**
         * The client ID associated with the project.
         * @minLength 1
         */
        clientId?: string;
        /** The project estimate configuration sent to Clockify. */
        estimate?: {
          /**
           * The estimate type accepted by Clockify.
           * @minLength 1
           */
          type: string;
          /**
           * The project estimate in ISO 8601 duration format.
           * @pattern ^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$
           * @format duration
           */
          estimate: string;
        };
        /** The hourly rate configuration sent to Clockify. */
        hourlyRate?: {
          /**
           * The hourly rate amount in the smallest currency unit.
           * @minimum 0
           */
          amount: number;
          /**
           * The ISO currency code for the hourly rate.
           * @minLength 1
           */
          currency: string;
        };
      };
      output: {
        /** The newly created project returned by Clockify. */
        project: {
          /**
           * The Clockify project ID.
           * @minLength 1
           */
          id: string;
          /**
           * The workspace ID that owns the project.
           * @minLength 1
           */
          workspaceId: string;
          /** The project name. */
          name: string;
          /** The project note. */
          note?: string | null;
          /** The project color returned by Clockify. */
          color?: string | null;
          /** Whether the project is public. */
          public?: boolean;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is billable. */
          billable?: boolean;
          /** The client ID associated with the project. */
          clientId?: string | null;
          /** The client name associated with the project. */
          clientName?: string | null;
          /** Whether the project is a template. */
          template?: boolean;
          /** The tracked duration for the project. */
          duration?: string | null;
          /** The project estimate object. */
          estimate?: {
            /** The estimate mode used by Clockify. */
            type?: string;
            /** The project estimate returned by Clockify. */
            estimate?: string;
            [key: string]: unknown;
          };
          /** The time estimate object returned by Clockify. */
          timeEstimate?: Record<string, unknown>;
          /** The budget estimate object returned by Clockify. */
          budgetEstimate?: Record<string, unknown>;
          /** The memberships returned for the project. */
          memberships?: Array<{
            /** The user ID associated with the membership. */
            userId?: string;
            /** The target ID associated with the membership. */
            targetId?: string;
            /** The workspace ID associated with the membership. */
            workspaceId?: string;
            /** The membership type returned by Clockify. */
            membershipType?: string;
            /** The membership status returned by Clockify. */
            membershipStatus?: string;
            /** The membership cost rate. */
            costRate?: {
              /** The rate amount in the smallest currency unit. */
              amount?: number;
              /** The ISO currency code for the rate. */
              currency?: string;
              /**
               * When the rate became effective, if Clockify returned it.
               * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
               * @format date-time
               */
              since?: string;
              [key: string]: unknown;
            };
            /** The membership hourly rate. */
            hourlyRate?: {
              /** The rate amount in the smallest currency unit. */
              amount?: number;
              /** The ISO currency code for the rate. */
              currency?: string;
              /**
               * When the rate became effective, if Clockify returned it.
               * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
               * @format date-time
               */
              since?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** The project cost rate. */
          costRate?: {
            /** The rate amount in the smallest currency unit. */
            amount?: number;
            /** The ISO currency code for the rate. */
            currency?: string;
            /**
             * When the rate became effective, if Clockify returned it.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            since?: string;
            [key: string]: unknown;
          };
          /** The project hourly rate. */
          hourlyRate?: {
            /** The rate amount in the smallest currency unit. */
            amount?: number;
            /** The ISO currency code for the rate. */
            currency?: string;
            /**
             * When the rate became effective, if Clockify returned it.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            since?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Create a new Clockify task inside a project. */
    "clockify.create_task": {
      input: {
        /**
         * The Clockify workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The Clockify project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The task name to create.
         * @minLength 1
         */
        name: string;
        /** The initial task status accepted by Clockify. */
        status?: "ACTIVE" | "DONE";
        /** Whether the created task should be billable. */
        billable?: boolean;
        /**
         * The task estimate in ISO 8601 duration format.
         * @pattern ^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$
         * @format duration
         */
        estimate?: string;
        /**
         * The assignee IDs for the created task.
         * @minItems 1
         */
        assigneeIds?: Array<string>;
      };
      output: {
        /** The newly created task returned by Clockify. */
        task: {
          /**
           * The Clockify task ID.
           * @minLength 1
           */
          id: string;
          /**
           * The project ID that owns the task.
           * @minLength 1
           */
          projectId: string;
          /** The task name. */
          name: string;
          /** The task status returned by Clockify. */
          status?: string | null;
          /** Whether the task is billable. */
          billable?: boolean;
          /** The tracked duration for the task. */
          duration?: string | null;
          estimate?: string | null;
          /** The legacy assignee ID returned by Clockify. */
          assigneeId?: string | null;
          /** The assignee IDs returned by Clockify. */
          assigneeIds?: Array<string>;
          /** The user group IDs returned by Clockify. */
          userGroupIds?: Array<string>;
          /** The budget estimate returned by Clockify. */
          budgetEstimate?: number;
          /** The task cost rate. */
          costRate?: {
            /** The rate amount in the smallest currency unit. */
            amount?: number;
            /** The ISO currency code for the rate. */
            currency?: string;
            /**
             * When the rate became effective, if Clockify returned it.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            since?: string;
            [key: string]: unknown;
          };
          /** The task hourly rate. */
          hourlyRate?: {
            /** The rate amount in the smallest currency unit. */
            amount?: number;
            /** The ISO currency code for the rate. */
            currency?: string;
            /**
             * When the rate became effective, if Clockify returned it.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            since?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Create a new Clockify time entry for a user. */
    "clockify.create_time_entry": {
      input: {
        /**
         * The Clockify workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The Clockify user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The start timestamp for the time entry.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        start: string;
        /**
         * The end timestamp for the time entry. Omit it to create a running timer.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        end?: string;
        /**
         * The tag IDs attached to the time entry.
         * @minItems 1
         */
        tagIds?: Array<string>;
        /**
         * The task ID associated with the time entry.
         * @minLength 1
         */
        taskId?: string;
        /** Whether the time entry should be billable. */
        billable?: boolean;
        /**
         * The project ID associated with the time entry.
         * @minLength 1
         */
        projectId?: string;
        /** The time entry description. */
        description?: string;
        /**
         * The custom field values attached to the time entry.
         * @minItems 1
         */
        customFieldValues?: Array<{
          /**
           * The Clockify custom field ID.
           * @minLength 1
           */
          customFieldId: string;
          /** The value assigned to the custom field. */
          value: string | number | boolean;
        }>;
      };
      output: {
        /** The newly created time entry returned by Clockify. */
        time_entry: {
          /** The time entry ID. */
          id: string;
          /** The Clockify time entry type. */
          type?: string | null;
          /** The time entry description. */
          description?: string | null;
          /**
           * The user ID that owns the time entry.
           * @minLength 1
           */
          userId?: string;
          /**
           * The workspace ID for the time entry.
           * @minLength 1
           */
          workspaceId?: string;
          /** The project ID associated with the time entry. */
          projectId?: string | null;
          /** The task ID associated with the time entry. */
          taskId?: string | null;
          /** The tag IDs attached to the time entry. */
          tagIds?: Array<string>;
          /** Whether the time entry is billable. */
          billable?: boolean;
          /** Whether the time entry is locked. */
          isLocked?: boolean;
          /** The tracked time interval. */
          timeInterval?: {
            /**
             * The start timestamp of the time interval.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            start: string;
            /** The end timestamp of the time interval, if the entry is finished. */
            end?: string | null;
            /** The ISO 8601 duration returned by Clockify. */
            duration?: string | null;
            [key: string]: unknown;
          };
          /** The hydrated user object returned by Clockify. */
          user?: {
            /**
             * The Clockify user ID.
             * @minLength 1
             */
            id?: string;
            /** The user display name. */
            name?: string;
            /** The user email address. */
            email?: string;
            [key: string]: unknown;
          };
          /** The hydrated project object. */
          project?: {
            /**
             * The Clockify project ID.
             * @minLength 1
             */
            id: string;
            /** The project name. */
            name?: string;
            /** The project color. */
            color?: string | null;
            /** Whether the project is billable. */
            billable?: boolean;
            /** The client ID associated with the project. */
            clientId?: string | null;
            /**
             * The workspace that owns the project.
             * @minLength 1
             */
            workspaceId?: string;
            [key: string]: unknown;
          };
          /** The hydrated task object. */
          task?: {
            /**
             * The Clockify task ID.
             * @minLength 1
             */
            id: string;
            /** The task name. */
            name?: string;
            /** The task status. */
            status?: string | null;
            /**
             * The project ID that owns the task.
             * @minLength 1
             */
            projectId?: string;
            [key: string]: unknown;
          };
          /** The hydrated tag objects. */
          tags?: Array<{
            /** The tag ID. */
            id?: string;
            /** The tag name. */
            name?: string;
            /**
             * The workspace that owns the tag.
             * @minLength 1
             */
            workspaceId?: string;
            [key: string]: unknown;
          }>;
          /** The time entry cost rate. */
          costRate?: {
            /** The rate amount in the smallest currency unit. */
            amount?: number;
            /** The ISO currency code for the rate. */
            currency?: string;
            /**
             * When the rate became effective, if Clockify returned it.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            since?: string;
            [key: string]: unknown;
          };
          /** The time entry hourly rate. */
          hourlyRate?: {
            /** The rate amount in the smallest currency unit. */
            amount?: number;
            /** The ISO currency code for the rate. */
            currency?: string;
            /**
             * When the rate became effective, if Clockify returned it.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            since?: string;
            [key: string]: unknown;
          };
          /** The custom field values returned by Clockify. */
          customFieldValues?: Array<{
            /**
             * The Clockify custom field ID.
             * @minLength 1
             */
            customFieldId: string;
            /** The value assigned to the custom field. */
            value: string | number | boolean;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Clockify project by ID. */
    "clockify.delete_project": {
      input: {
        /**
         * The Clockify workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The Clockify project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** Whether Clockify deleted the requested project. */
        deleted: boolean;
      };
    };
    /** Get the currently authenticated Clockify user. */
    "clockify.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current Clockify user. */
        user: {
          /**
           * The Clockify user ID.
           * @minLength 1
           */
          id: string;
          /** The user's email address. */
          email: string;
          /** The user's display name. */
          name: string;
          /**
           * The active workspace ID for the user.
           * @minLength 1
           */
          activeWorkspace?: string;
          /**
           * The default workspace ID for the user.
           * @minLength 1
           */
          defaultWorkspace?: string;
          /** The memberships returned for the user. */
          memberships?: Array<{
            /** The user ID associated with the membership. */
            userId?: string;
            /** The target ID associated with the membership. */
            targetId?: string;
            /** The workspace ID associated with the membership. */
            workspaceId?: string;
            /** The membership type returned by Clockify. */
            membershipType?: string;
            /** The membership status returned by Clockify. */
            membershipStatus?: string;
            /** The membership cost rate. */
            costRate?: {
              /** The rate amount in the smallest currency unit. */
              amount?: number;
              /** The ISO currency code for the rate. */
              currency?: string;
              /**
               * When the rate became effective, if Clockify returned it.
               * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
               * @format date-time
               */
              since?: string;
              [key: string]: unknown;
            };
            /** The membership hourly rate. */
            hourlyRate?: {
              /** The rate amount in the smallest currency unit. */
              amount?: number;
              /** The ISO currency code for the rate. */
              currency?: string;
              /**
               * When the rate became effective, if Clockify returned it.
               * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
               * @format date-time
               */
              since?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** The user settings object returned by Clockify. */
          settings?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a single Clockify project by ID. */
    "clockify.get_project": {
      input: {
        /**
         * The Clockify workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The Clockify project ID.
         * @minLength 1
         */
        projectId: string;
        /** Whether to request a hydrated project object. */
        hydrated?: boolean;
      };
      output: {
        /** The project returned by Clockify. */
        project: {
          /**
           * The Clockify project ID.
           * @minLength 1
           */
          id: string;
          /**
           * The workspace ID that owns the project.
           * @minLength 1
           */
          workspaceId: string;
          /** The project name. */
          name: string;
          /** The project note. */
          note?: string | null;
          /** The project color returned by Clockify. */
          color?: string | null;
          /** Whether the project is public. */
          public?: boolean;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is billable. */
          billable?: boolean;
          /** The client ID associated with the project. */
          clientId?: string | null;
          /** The client name associated with the project. */
          clientName?: string | null;
          /** Whether the project is a template. */
          template?: boolean;
          /** The tracked duration for the project. */
          duration?: string | null;
          /** The project estimate object. */
          estimate?: {
            /** The estimate mode used by Clockify. */
            type?: string;
            /** The project estimate returned by Clockify. */
            estimate?: string;
            [key: string]: unknown;
          };
          /** The time estimate object returned by Clockify. */
          timeEstimate?: Record<string, unknown>;
          /** The budget estimate object returned by Clockify. */
          budgetEstimate?: Record<string, unknown>;
          /** The memberships returned for the project. */
          memberships?: Array<{
            /** The user ID associated with the membership. */
            userId?: string;
            /** The target ID associated with the membership. */
            targetId?: string;
            /** The workspace ID associated with the membership. */
            workspaceId?: string;
            /** The membership type returned by Clockify. */
            membershipType?: string;
            /** The membership status returned by Clockify. */
            membershipStatus?: string;
            /** The membership cost rate. */
            costRate?: {
              /** The rate amount in the smallest currency unit. */
              amount?: number;
              /** The ISO currency code for the rate. */
              currency?: string;
              /**
               * When the rate became effective, if Clockify returned it.
               * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
               * @format date-time
               */
              since?: string;
              [key: string]: unknown;
            };
            /** The membership hourly rate. */
            hourlyRate?: {
              /** The rate amount in the smallest currency unit. */
              amount?: number;
              /** The ISO currency code for the rate. */
              currency?: string;
              /**
               * When the rate became effective, if Clockify returned it.
               * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
               * @format date-time
               */
              since?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** The project cost rate. */
          costRate?: {
            /** The rate amount in the smallest currency unit. */
            amount?: number;
            /** The ISO currency code for the rate. */
            currency?: string;
            /**
             * When the rate became effective, if Clockify returned it.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            since?: string;
            [key: string]: unknown;
          };
          /** The project hourly rate. */
          hourlyRate?: {
            /** The rate amount in the smallest currency unit. */
            amount?: number;
            /** The ISO currency code for the rate. */
            currency?: string;
            /**
             * When the rate became effective, if Clockify returned it.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            since?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get a single Clockify workspace by ID. */
    "clockify.get_workspace": {
      input: {
        /**
         * The Clockify workspace ID.
         * @minLength 1
         */
        workspaceId: string;
      };
      output: {
        /** The workspace returned by Clockify. */
        workspace: {
          /**
           * The Clockify workspace ID.
           * @minLength 1
           */
          id: string;
          /** The workspace name. */
          name: string;
          /** The workspace image URL returned by Clockify. */
          imageUrl?: string | null;
          /** The subscription tier returned by Clockify. */
          featureSubscriptionType?: string | null;
          /** The feature flags enabled for the workspace. */
          features?: Array<string>;
          /** The memberships returned for the workspace. */
          memberships?: Array<{
            /** The user ID associated with the membership. */
            userId?: string;
            /** The target ID associated with the membership. */
            targetId?: string;
            /** The workspace ID associated with the membership. */
            workspaceId?: string;
            /** The membership type returned by Clockify. */
            membershipType?: string;
            /** The membership status returned by Clockify. */
            membershipStatus?: string;
            /** The membership cost rate. */
            costRate?: {
              /** The rate amount in the smallest currency unit. */
              amount?: number;
              /** The ISO currency code for the rate. */
              currency?: string;
              /**
               * When the rate became effective, if Clockify returned it.
               * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
               * @format date-time
               */
              since?: string;
              [key: string]: unknown;
            };
            /** The membership hourly rate. */
            hourlyRate?: {
              /** The rate amount in the smallest currency unit. */
              amount?: number;
              /** The ISO currency code for the rate. */
              currency?: string;
              /**
               * When the rate became effective, if Clockify returned it.
               * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
               * @format date-time
               */
              since?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** The workspace settings object returned by Clockify. */
          settings?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List Clockify projects in a workspace. */
    "clockify.list_projects": {
      input: {
        /**
         * The Clockify workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * Filter projects by a partial project name.
         * @minLength 1
         */
        name?: string;
        /**
         * The 1-based page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * A comma-separated list of user IDs used to filter projects.
         * @minLength 1
         */
        users?: string;
        /**
         * A comma-separated list of client IDs used to filter projects.
         * @minLength 1
         */
        clients?: string;
        /** Whether to return archived projects. */
        archived?: boolean;
        /** Whether to return billable projects. */
        billable?: boolean;
        /** Whether to request hydrated project objects. */
        hydrated?: boolean;
        /**
         * The number of records to return per page.
         * @minimum 1
         */
        "page-size"?: number;
        /** The project sort order accepted by Clockify. */
        "sort-order"?: "ASCENDING" | "DESCENDING";
        /** Whether to return project templates. */
        "is-template"?: boolean;
        /**
         * The project sort column accepted by Clockify.
         * @minLength 1
         */
        "sort-column"?: string;
        /**
         * The user membership status filter accepted by Clockify.
         * @minLength 1
         */
        "user-status"?: string;
        /**
         * The client status filter accepted by Clockify.
         * @minLength 1
         */
        "client-status"?: string;
        /** Whether to return only projects that already have users assigned. */
        "contains-users"?: boolean;
        /** Whether to return only projects that already have a client assigned. */
        "contains-client"?: boolean;
      };
      output: {
        /** The projects returned by Clockify. */
        projects: Array<{
          /**
           * The Clockify project ID.
           * @minLength 1
           */
          id: string;
          /**
           * The workspace ID that owns the project.
           * @minLength 1
           */
          workspaceId: string;
          /** The project name. */
          name: string;
          /** The project note. */
          note?: string | null;
          /** The project color returned by Clockify. */
          color?: string | null;
          /** Whether the project is public. */
          public?: boolean;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is billable. */
          billable?: boolean;
          /** The client ID associated with the project. */
          clientId?: string | null;
          /** The client name associated with the project. */
          clientName?: string | null;
          /** Whether the project is a template. */
          template?: boolean;
          /** The tracked duration for the project. */
          duration?: string | null;
          /** The project estimate object. */
          estimate?: {
            /** The estimate mode used by Clockify. */
            type?: string;
            /** The project estimate returned by Clockify. */
            estimate?: string;
            [key: string]: unknown;
          };
          /** The time estimate object returned by Clockify. */
          timeEstimate?: Record<string, unknown>;
          /** The budget estimate object returned by Clockify. */
          budgetEstimate?: Record<string, unknown>;
          /** The memberships returned for the project. */
          memberships?: Array<{
            /** The user ID associated with the membership. */
            userId?: string;
            /** The target ID associated with the membership. */
            targetId?: string;
            /** The workspace ID associated with the membership. */
            workspaceId?: string;
            /** The membership type returned by Clockify. */
            membershipType?: string;
            /** The membership status returned by Clockify. */
            membershipStatus?: string;
            /** The membership cost rate. */
            costRate?: {
              /** The rate amount in the smallest currency unit. */
              amount?: number;
              /** The ISO currency code for the rate. */
              currency?: string;
              /**
               * When the rate became effective, if Clockify returned it.
               * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
               * @format date-time
               */
              since?: string;
              [key: string]: unknown;
            };
            /** The membership hourly rate. */
            hourlyRate?: {
              /** The rate amount in the smallest currency unit. */
              amount?: number;
              /** The ISO currency code for the rate. */
              currency?: string;
              /**
               * When the rate became effective, if Clockify returned it.
               * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
               * @format date-time
               */
              since?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** The project cost rate. */
          costRate?: {
            /** The rate amount in the smallest currency unit. */
            amount?: number;
            /** The ISO currency code for the rate. */
            currency?: string;
            /**
             * When the rate became effective, if Clockify returned it.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            since?: string;
            [key: string]: unknown;
          };
          /** The project hourly rate. */
          hourlyRate?: {
            /** The rate amount in the smallest currency unit. */
            amount?: number;
            /** The ISO currency code for the rate. */
            currency?: string;
            /**
             * When the rate became effective, if Clockify returned it.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            since?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The pagination metadata derived from the Clockify response. */
        pagination: {
          /**
           * The 1-based page number to request.
           * @minimum 1
           */
          page?: number;
          /**
           * The page size requested from Clockify.
           * @minimum 1
           */
          page_size?: number;
          /** Whether Clockify marked the current page as the last page. */
          last_page?: boolean | null;
        } | null;
      };
    };
    /** List Clockify tasks for a project. */
    "clockify.list_tasks": {
      input: {
        /**
         * The Clockify workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The Clockify project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * Filter tasks by a partial task name.
         * @minLength 1
         */
        name?: string;
        /**
         * The 1-based page number to request.
         * @minimum 1
         */
        page?: number;
        /** Whether to return only active tasks. */
        "is-active"?: boolean;
        /**
         * The number of records to return per page.
         * @minimum 1
         */
        "page-size"?: number;
        /** The task sort order accepted by Clockify. */
        "sort-order"?: "ASCENDING" | "DESCENDING";
        /**
         * The task sort column accepted by Clockify.
         * @minLength 1
         */
        "sort-column"?: string;
        /** Whether to use strict task name matching. */
        "strict-name-search"?: boolean;
      };
      output: {
        /** The tasks returned by Clockify. */
        tasks: Array<{
          /**
           * The Clockify task ID.
           * @minLength 1
           */
          id: string;
          /**
           * The project ID that owns the task.
           * @minLength 1
           */
          projectId: string;
          /** The task name. */
          name: string;
          /** The task status returned by Clockify. */
          status?: string | null;
          /** Whether the task is billable. */
          billable?: boolean;
          /** The tracked duration for the task. */
          duration?: string | null;
          estimate?: string | null;
          /** The legacy assignee ID returned by Clockify. */
          assigneeId?: string | null;
          /** The assignee IDs returned by Clockify. */
          assigneeIds?: Array<string>;
          /** The user group IDs returned by Clockify. */
          userGroupIds?: Array<string>;
          /** The budget estimate returned by Clockify. */
          budgetEstimate?: number;
          /** The task cost rate. */
          costRate?: {
            /** The rate amount in the smallest currency unit. */
            amount?: number;
            /** The ISO currency code for the rate. */
            currency?: string;
            /**
             * When the rate became effective, if Clockify returned it.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            since?: string;
            [key: string]: unknown;
          };
          /** The task hourly rate. */
          hourlyRate?: {
            /** The rate amount in the smallest currency unit. */
            amount?: number;
            /** The ISO currency code for the rate. */
            currency?: string;
            /**
             * When the rate became effective, if Clockify returned it.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            since?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The pagination metadata derived from the Clockify response. */
        pagination: {
          /**
           * The 1-based page number to request.
           * @minimum 1
           */
          page?: number;
          /**
           * The page size requested from Clockify.
           * @minimum 1
           */
          page_size?: number;
          /** Whether Clockify marked the current page as the last page. */
          last_page?: boolean | null;
        } | null;
      };
    };
    /** List Clockify time entries for a user in a workspace. */
    "clockify.list_time_entries": {
      input: {
        /**
         * The Clockify workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The Clockify user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * Only return entries that start after this timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        start?: string;
        /**
         * Only return entries that end before this timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        end?: string;
        /**
         * The 1-based page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * A comma-separated list of tag IDs used to filter time entries.
         * @minLength 1
         */
        tags?: string;
        /**
         * Only return entries for this task ID.
         * @minLength 1
         */
        task?: string;
        /**
         * Only return entries for this project ID.
         * @minLength 1
         */
        project?: string;
        /** Whether to request hydrated time entry objects. */
        hydrated?: boolean;
        /**
         * The number of records to return per page.
         * @minimum 1
         */
        "page-size"?: number;
        /**
         * Only return entries whose description matches this text.
         * @minLength 1
         */
        description?: string;
        /** Whether to return only in-progress time entries. */
        "in-progress"?: boolean;
      };
      output: {
        /** The time entries returned by Clockify. */
        time_entries: Array<{
          /** The time entry ID. */
          id: string;
          /** The Clockify time entry type. */
          type?: string | null;
          /** The time entry description. */
          description?: string | null;
          /**
           * The user ID that owns the time entry.
           * @minLength 1
           */
          userId?: string;
          /**
           * The workspace ID for the time entry.
           * @minLength 1
           */
          workspaceId?: string;
          /** The project ID associated with the time entry. */
          projectId?: string | null;
          /** The task ID associated with the time entry. */
          taskId?: string | null;
          /** The tag IDs attached to the time entry. */
          tagIds?: Array<string>;
          /** Whether the time entry is billable. */
          billable?: boolean;
          /** Whether the time entry is locked. */
          isLocked?: boolean;
          /** The tracked time interval. */
          timeInterval?: {
            /**
             * The start timestamp of the time interval.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            start: string;
            /** The end timestamp of the time interval, if the entry is finished. */
            end?: string | null;
            /** The ISO 8601 duration returned by Clockify. */
            duration?: string | null;
            [key: string]: unknown;
          };
          /** The hydrated user object returned by Clockify. */
          user?: {
            /**
             * The Clockify user ID.
             * @minLength 1
             */
            id?: string;
            /** The user display name. */
            name?: string;
            /** The user email address. */
            email?: string;
            [key: string]: unknown;
          };
          /** The hydrated project object. */
          project?: {
            /**
             * The Clockify project ID.
             * @minLength 1
             */
            id: string;
            /** The project name. */
            name?: string;
            /** The project color. */
            color?: string | null;
            /** Whether the project is billable. */
            billable?: boolean;
            /** The client ID associated with the project. */
            clientId?: string | null;
            /**
             * The workspace that owns the project.
             * @minLength 1
             */
            workspaceId?: string;
            [key: string]: unknown;
          };
          /** The hydrated task object. */
          task?: {
            /**
             * The Clockify task ID.
             * @minLength 1
             */
            id: string;
            /** The task name. */
            name?: string;
            /** The task status. */
            status?: string | null;
            /**
             * The project ID that owns the task.
             * @minLength 1
             */
            projectId?: string;
            [key: string]: unknown;
          };
          /** The hydrated tag objects. */
          tags?: Array<{
            /** The tag ID. */
            id?: string;
            /** The tag name. */
            name?: string;
            /**
             * The workspace that owns the tag.
             * @minLength 1
             */
            workspaceId?: string;
            [key: string]: unknown;
          }>;
          /** The time entry cost rate. */
          costRate?: {
            /** The rate amount in the smallest currency unit. */
            amount?: number;
            /** The ISO currency code for the rate. */
            currency?: string;
            /**
             * When the rate became effective, if Clockify returned it.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            since?: string;
            [key: string]: unknown;
          };
          /** The time entry hourly rate. */
          hourlyRate?: {
            /** The rate amount in the smallest currency unit. */
            amount?: number;
            /** The ISO currency code for the rate. */
            currency?: string;
            /**
             * When the rate became effective, if Clockify returned it.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            since?: string;
            [key: string]: unknown;
          };
          /** The custom field values returned by Clockify. */
          customFieldValues?: Array<{
            /**
             * The Clockify custom field ID.
             * @minLength 1
             */
            customFieldId: string;
            /** The value assigned to the custom field. */
            value: string | number | boolean;
          }>;
          [key: string]: unknown;
        }>;
        /** The pagination metadata derived from the Clockify response. */
        pagination: {
          /**
           * The 1-based page number to request.
           * @minimum 1
           */
          page?: number;
          /**
           * The page size requested from Clockify.
           * @minimum 1
           */
          page_size?: number;
          /** Whether Clockify marked the current page as the last page. */
          last_page?: boolean | null;
        } | null;
      };
    };
    /** List the Clockify workspaces available to the authenticated user. */
    "clockify.list_workspaces": {
      input: {
        /**
         * Optional workspace roles used to filter the Clockify response.
         * @minItems 1
         */
        roles?: Array<string>;
      };
      output: {
        /** The workspaces returned by Clockify. */
        workspaces: Array<{
          /**
           * The Clockify workspace ID.
           * @minLength 1
           */
          id: string;
          /** The workspace name. */
          name: string;
          /** The workspace image URL returned by Clockify. */
          imageUrl?: string | null;
          /** The subscription tier returned by Clockify. */
          featureSubscriptionType?: string | null;
          /** The feature flags enabled for the workspace. */
          features?: Array<string>;
          /** The memberships returned for the workspace. */
          memberships?: Array<{
            /** The user ID associated with the membership. */
            userId?: string;
            /** The target ID associated with the membership. */
            targetId?: string;
            /** The workspace ID associated with the membership. */
            workspaceId?: string;
            /** The membership type returned by Clockify. */
            membershipType?: string;
            /** The membership status returned by Clockify. */
            membershipStatus?: string;
            /** The membership cost rate. */
            costRate?: {
              /** The rate amount in the smallest currency unit. */
              amount?: number;
              /** The ISO currency code for the rate. */
              currency?: string;
              /**
               * When the rate became effective, if Clockify returned it.
               * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
               * @format date-time
               */
              since?: string;
              [key: string]: unknown;
            };
            /** The membership hourly rate. */
            hourlyRate?: {
              /** The rate amount in the smallest currency unit. */
              amount?: number;
              /** The ISO currency code for the rate. */
              currency?: string;
              /**
               * When the rate became effective, if Clockify returned it.
               * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
               * @format date-time
               */
              since?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** The workspace settings object returned by Clockify. */
          settings?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update an existing Clockify project. */
    "clockify.update_project": {
      input: {
        /**
         * The Clockify workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The Clockify project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The updated project name.
         * @minLength 1
         */
        name?: string;
        /** The updated project note. */
        note?: string;
        /** The updated project color. */
        color?: string;
        /** Whether the updated project should be public. */
        isPublic?: boolean;
        /** Whether the updated project should be archived. */
        archived?: boolean;
        /** Whether the updated project should be billable. */
        billable?: boolean;
        /**
         * The updated client ID.
         * @minLength 1
         */
        clientId?: string;
        /** The updated cost rate configuration. */
        costRate?: {
          /**
           * The cost rate amount in the smallest currency unit.
           * @minimum 0
           */
          amount: number;
          /**
           * When the updated cost rate should become effective.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          since?: string;
        };
        /** The updated hourly rate configuration. */
        hourlyRate?: {
          /**
           * The hourly rate amount in the smallest currency unit.
           * @minimum 0
           */
          amount: number;
          /**
           * When the updated hourly rate should become effective.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
           * @format date-time
           */
          since?: string;
        };
      };
      output: {
        /** The updated project returned by Clockify. */
        project: {
          /**
           * The Clockify project ID.
           * @minLength 1
           */
          id: string;
          /**
           * The workspace ID that owns the project.
           * @minLength 1
           */
          workspaceId: string;
          /** The project name. */
          name: string;
          /** The project note. */
          note?: string | null;
          /** The project color returned by Clockify. */
          color?: string | null;
          /** Whether the project is public. */
          public?: boolean;
          /** Whether the project is archived. */
          archived?: boolean;
          /** Whether the project is billable. */
          billable?: boolean;
          /** The client ID associated with the project. */
          clientId?: string | null;
          /** The client name associated with the project. */
          clientName?: string | null;
          /** Whether the project is a template. */
          template?: boolean;
          /** The tracked duration for the project. */
          duration?: string | null;
          /** The project estimate object. */
          estimate?: {
            /** The estimate mode used by Clockify. */
            type?: string;
            /** The project estimate returned by Clockify. */
            estimate?: string;
            [key: string]: unknown;
          };
          /** The time estimate object returned by Clockify. */
          timeEstimate?: Record<string, unknown>;
          /** The budget estimate object returned by Clockify. */
          budgetEstimate?: Record<string, unknown>;
          /** The memberships returned for the project. */
          memberships?: Array<{
            /** The user ID associated with the membership. */
            userId?: string;
            /** The target ID associated with the membership. */
            targetId?: string;
            /** The workspace ID associated with the membership. */
            workspaceId?: string;
            /** The membership type returned by Clockify. */
            membershipType?: string;
            /** The membership status returned by Clockify. */
            membershipStatus?: string;
            /** The membership cost rate. */
            costRate?: {
              /** The rate amount in the smallest currency unit. */
              amount?: number;
              /** The ISO currency code for the rate. */
              currency?: string;
              /**
               * When the rate became effective, if Clockify returned it.
               * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
               * @format date-time
               */
              since?: string;
              [key: string]: unknown;
            };
            /** The membership hourly rate. */
            hourlyRate?: {
              /** The rate amount in the smallest currency unit. */
              amount?: number;
              /** The ISO currency code for the rate. */
              currency?: string;
              /**
               * When the rate became effective, if Clockify returned it.
               * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
               * @format date-time
               */
              since?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** The project cost rate. */
          costRate?: {
            /** The rate amount in the smallest currency unit. */
            amount?: number;
            /** The ISO currency code for the rate. */
            currency?: string;
            /**
             * When the rate became effective, if Clockify returned it.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            since?: string;
            [key: string]: unknown;
          };
          /** The project hourly rate. */
          hourlyRate?: {
            /** The rate amount in the smallest currency unit. */
            amount?: number;
            /** The ISO currency code for the rate. */
            currency?: string;
            /**
             * When the rate became effective, if Clockify returned it.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
             * @format date-time
             */
            since?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
  }
}
