import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Shortcut epic with the first-pass supported fields. */
    "shortcut.create_epic": {
      input: {
        /**
         * The Shortcut epic name.
         * @minLength 1
         */
        name: string;
        /** The Shortcut epic description. */
        description?: string | null;
        /** The Shortcut member UUIDs. */
        ownerIds?: Array<string>;
        /** The Shortcut member UUIDs. */
        followerIds?: Array<string>;
        /**
         * The Shortcut member UUID.
         * @minLength 1
         */
        requestedById?: string;
        /** The Shortcut group UUIDs to associate with the epic. */
        groupIds?: Array<string>;
        /** The Shortcut project IDs to associate with the epic. */
        projectIds?: Array<number>;
        /** The new labels to create and attach to the epic. */
        labels?: Array<{
          /**
           * The Shortcut label name.
           * @minLength 1
           */
          name: string;
          /**
           * The Shortcut label color.
           * @minLength 1
           */
          color?: string;
          /** The Shortcut label description. */
          description?: string | null;
          /** The external ID attached to this label. */
          externalId?: string | null;
        }>;
        /**
         * The Shortcut due date in YYYY-MM-DD format.
         * @format date
         */
        plannedStartDate?: string;
        /**
         * The Shortcut due date in YYYY-MM-DD format.
         * @format date
         */
        deadline?: string;
        /** The external ID attached to this epic. */
        externalId?: string | null;
      };
      output: {
        /** A Shortcut epic. */
        epic: {
          /**
           * The Shortcut epic ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Shortcut epic name. */
          name?: string;
          /** The Shortcut epic description. */
          description?: string | null;
          /** The Shortcut web URL for this epic. */
          app_url?: string;
          /** Whether the epic is archived. */
          archived?: boolean;
          /** Whether the epic is completed. */
          completed?: boolean;
          /** Whether the epic has started. */
          started?: boolean;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** The Shortcut epic started timestamp. */
          started_at?: string | null;
          /** The Shortcut epic completed timestamp. */
          completed_at?: string | null;
          /** The Shortcut epic deadline. */
          deadline?: string | null;
          /** The Shortcut epic planned start date. */
          planned_start_date?: string | null;
          /** The Shortcut epic position. */
          position?: number;
          /** The Shortcut epic state string. */
          state?: string | null;
          /** The Shortcut member UUIDs. */
          owner_ids?: Array<string>;
          /** The Shortcut member UUIDs. */
          follower_ids?: Array<string>;
          /** The Shortcut group UUIDs applied to this epic. */
          group_ids?: Array<string>;
          /** The Shortcut label IDs applied to this epic. */
          label_ids?: Array<number>;
          /** The Shortcut project IDs associated with this epic. */
          project_ids?: Array<number>;
          /** The Shortcut objective IDs associated with this epic. */
          objective_ids?: Array<number>;
          /** The expanded labels on this epic. */
          labels?: Array<{
            /**
             * The Shortcut label ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The Shortcut label name. */
            name?: string;
            /** The Shortcut label color. */
            color?: string | null;
            /** The Shortcut label description. */
            description?: string | null;
            /** The Shortcut web URL for this label. */
            app_url?: string | null;
            /** Whether the label is archived. */
            archived?: boolean;
            /** The Shortcut label entity type. */
            entity_type?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            created_at?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            updated_at?: string;
            /** The external ID attached to this label. */
            external_id?: string | null;
            [key: string]: unknown;
          }>;
          /** A Shortcut epic stats object. */
          stats?: {
            /** The total epic points. */
            num_points?: number;
            /** The completed epic points. */
            num_points_done?: number;
            /** The started epic points. */
            num_points_started?: number;
            /** The unstarted epic points. */
            num_points_unstarted?: number;
            /** The backlog epic points. */
            num_points_backlog?: number;
            /** The total epic stories. */
            num_stories_total?: number;
            /** The completed epic stories. */
            num_stories_done?: number;
            /** The started epic stories. */
            num_stories_started?: number;
            /** The unstarted epic stories. */
            num_stories_unstarted?: number;
            /** The backlog epic stories. */
            num_stories_backlog?: number;
            /** The total documents related to this epic. */
            num_related_documents?: number;
            [key: string]: unknown;
          };
          /** The Shortcut member UUID that requested the epic. */
          requested_by_id?: string | null;
          /** The Shortcut epic entity type. */
          entity_type?: string;
          /** The external ID attached to this epic. */
          external_id?: string | null;
          /** The Shortcut epic workflow state ID. */
          workflow_state_id?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create one Shortcut story with the first-pass supported fields. */
    "shortcut.create_story": {
      input: {
        /**
         * The Shortcut story name.
         * @minLength 1
         */
        name: string;
        /** The Shortcut story description. */
        description?: string | null;
        /**
         * The Shortcut workflow state ID.
         * @exclusiveMinimum 0
         */
        workflowStateId?: number;
        /**
         * The Shortcut project ID.
         * @exclusiveMinimum 0
         */
        projectId?: number;
        /** The Shortcut story type. */
        storyType?: "feature" | "bug" | "chore";
        /**
         * The Shortcut epic ID.
         * @exclusiveMinimum 0
         */
        epicId?: number;
        /** The Shortcut member UUIDs. */
        ownerIds?: Array<string>;
        /** The Shortcut member UUIDs. */
        followerIds?: Array<string>;
        /**
         * The Shortcut member UUID.
         * @minLength 1
         */
        requestedById?: string;
        /** The Shortcut story estimate. */
        estimate?: number | null;
        /**
         * The Shortcut due date in YYYY-MM-DD format.
         * @format date
         */
        dueDate?: string;
        /** The external ID attached to this story. */
        externalId?: string | null;
        /** The Shortcut iteration ID. */
        iterationId?: number;
        /** Whether the Shortcut story should be archived. */
        archived?: boolean;
      };
      output: {
        /** A Shortcut story. */
        story: {
          /**
           * The Shortcut story ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Shortcut story name. */
          name?: string;
          /** The Shortcut story description. */
          description?: string | null;
          /** The Shortcut web URL for this story. */
          app_url?: string;
          /** The Shortcut story type. */
          story_type?: string | null;
          /** Whether the story is archived. */
          archived?: boolean;
          /** Whether the story is blocked. */
          blocked?: boolean;
          /** Whether the story blocks other stories. */
          blocker?: boolean;
          /** Whether the story is completed. */
          completed?: boolean;
          /** Whether the story has started. */
          started?: boolean;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** The Shortcut story started timestamp. */
          started_at?: string | null;
          /** The Shortcut story completed timestamp. */
          completed_at?: string | null;
          /** The Shortcut story moved timestamp. */
          moved_at?: string | null;
          /** The Shortcut story due date. */
          due_date?: string | null;
          /** The Shortcut story estimate. */
          estimate?: number | null;
          /** The Shortcut story position. */
          position?: number;
          /**
           * The Shortcut workflow ID.
           * @exclusiveMinimum 0
           */
          workflow_id?: number;
          /**
           * The Shortcut workflow state ID.
           * @exclusiveMinimum 0
           */
          workflow_state_id?: number;
          /**
           * The Shortcut project ID.
           * @exclusiveMinimum 0
           */
          project_id?: number | null;
          /**
           * The Shortcut epic ID.
           * @exclusiveMinimum 0
           */
          epic_id?: number | null;
          /** The Shortcut iteration ID. */
          iteration_id?: number | null;
          /** The Shortcut member UUIDs. */
          owner_ids?: Array<string>;
          /** The Shortcut member UUIDs. */
          follower_ids?: Array<string>;
          /** The Shortcut member UUID that requested the story. */
          requested_by_id?: string | null;
          /** The expanded labels on this story. */
          labels?: Array<{
            /**
             * The Shortcut label ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The Shortcut label name. */
            name?: string;
            /** The Shortcut label color. */
            color?: string | null;
            /** The Shortcut label description. */
            description?: string | null;
            /** The Shortcut web URL for this label. */
            app_url?: string | null;
            /** Whether the label is archived. */
            archived?: boolean;
            /** The Shortcut label entity type. */
            entity_type?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            created_at?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            updated_at?: string;
            /** The external ID attached to this label. */
            external_id?: string | null;
            [key: string]: unknown;
          }>;
          /** The tasks attached to this story. */
          tasks?: Array<{
            /**
             * The Shortcut task ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The Shortcut task description. */
            description?: string;
            /** Whether the task is complete. */
            complete?: boolean;
            /** The Shortcut member UUIDs. */
            owner_ids?: Array<string>;
            /** The Shortcut task creation timestamp. */
            created_at?: string | null;
            /** The Shortcut task update timestamp. */
            updated_at?: string | null;
            /** The external ID attached to this task. */
            external_id?: string | null;
            [key: string]: unknown;
          }>;
          /** The Shortcut story entity type. */
          entity_type?: string;
          /** The external ID attached to this story. */
          external_id?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Shortcut epic by epic ID. */
    "shortcut.get_epic": {
      input: {
        /**
         * The Shortcut epic ID.
         * @exclusiveMinimum 0
         */
        epicId: number;
      };
      output: {
        /** A Shortcut epic. */
        epic: {
          /**
           * The Shortcut epic ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Shortcut epic name. */
          name?: string;
          /** The Shortcut epic description. */
          description?: string | null;
          /** The Shortcut web URL for this epic. */
          app_url?: string;
          /** Whether the epic is archived. */
          archived?: boolean;
          /** Whether the epic is completed. */
          completed?: boolean;
          /** Whether the epic has started. */
          started?: boolean;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** The Shortcut epic started timestamp. */
          started_at?: string | null;
          /** The Shortcut epic completed timestamp. */
          completed_at?: string | null;
          /** The Shortcut epic deadline. */
          deadline?: string | null;
          /** The Shortcut epic planned start date. */
          planned_start_date?: string | null;
          /** The Shortcut epic position. */
          position?: number;
          /** The Shortcut epic state string. */
          state?: string | null;
          /** The Shortcut member UUIDs. */
          owner_ids?: Array<string>;
          /** The Shortcut member UUIDs. */
          follower_ids?: Array<string>;
          /** The Shortcut group UUIDs applied to this epic. */
          group_ids?: Array<string>;
          /** The Shortcut label IDs applied to this epic. */
          label_ids?: Array<number>;
          /** The Shortcut project IDs associated with this epic. */
          project_ids?: Array<number>;
          /** The Shortcut objective IDs associated with this epic. */
          objective_ids?: Array<number>;
          /** The expanded labels on this epic. */
          labels?: Array<{
            /**
             * The Shortcut label ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The Shortcut label name. */
            name?: string;
            /** The Shortcut label color. */
            color?: string | null;
            /** The Shortcut label description. */
            description?: string | null;
            /** The Shortcut web URL for this label. */
            app_url?: string | null;
            /** Whether the label is archived. */
            archived?: boolean;
            /** The Shortcut label entity type. */
            entity_type?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            created_at?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            updated_at?: string;
            /** The external ID attached to this label. */
            external_id?: string | null;
            [key: string]: unknown;
          }>;
          /** A Shortcut epic stats object. */
          stats?: {
            /** The total epic points. */
            num_points?: number;
            /** The completed epic points. */
            num_points_done?: number;
            /** The started epic points. */
            num_points_started?: number;
            /** The unstarted epic points. */
            num_points_unstarted?: number;
            /** The backlog epic points. */
            num_points_backlog?: number;
            /** The total epic stories. */
            num_stories_total?: number;
            /** The completed epic stories. */
            num_stories_done?: number;
            /** The started epic stories. */
            num_stories_started?: number;
            /** The unstarted epic stories. */
            num_stories_unstarted?: number;
            /** The backlog epic stories. */
            num_stories_backlog?: number;
            /** The total documents related to this epic. */
            num_related_documents?: number;
            [key: string]: unknown;
          };
          /** The Shortcut member UUID that requested the epic. */
          requested_by_id?: string | null;
          /** The Shortcut epic entity type. */
          entity_type?: string;
          /** The external ID attached to this epic. */
          external_id?: string | null;
          /** The Shortcut epic workflow state ID. */
          workflow_state_id?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Shortcut member by member UUID. */
    "shortcut.get_member": {
      input: {
        /**
         * The Shortcut member UUID.
         * @minLength 1
         */
        memberId: string;
        /**
         * The Shortcut organization ID.
         * @exclusiveMinimum 0
         */
        orgId?: number;
      };
      output: {
        /** A Shortcut member. */
        member: {
          /**
           * The Shortcut member UUID.
           * @minLength 1
           */
          id?: string;
          /** The Shortcut workspace role. */
          role?: string | null;
          /** Whether the member is disabled in the workspace. */
          disabled?: boolean;
          /** The Shortcut global member identifier. */
          global_id?: string | null;
          /** The Shortcut member entity type. */
          entity_type?: string;
          /** The Shortcut group UUIDs for this member. */
          group_ids?: Array<string>;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** The Shortcut member state payload. */
          state?: unknown;
          /** A Shortcut member profile. */
          profile?: {
            /**
             * The Shortcut profile UUID.
             * @minLength 1
             */
            id?: string;
            /** The member name shown by Shortcut. */
            name?: string;
            /** The Shortcut mention name. */
            mention_name?: string | null;
            /** The member email address. */
            email_address?: string | null;
            /** Whether the member profile is deactivated. */
            deactivated?: boolean;
            /** Whether two-factor authentication is enabled for the member. */
            two_factor_auth_activated?: boolean;
            /** Whether the member profile is an organization owner. */
            is_owner?: boolean;
            /** Whether the member profile is disabled. */
            disabled?: boolean;
            /** The Shortcut profile entity type. */
            entity_type?: string;
            /** The member gravatar hash. */
            gravatar_hash?: string | null;
            /** A Shortcut icon object. */
            icon?: {
              /** The Shortcut icon ID. */
              id?: number;
              /** The Shortcut icon URL. */
              url?: string;
              /**
               * The Shortcut ISO 8601 timestamp.
               * @format date-time
               */
              created_at?: string;
              /**
               * The Shortcut ISO 8601 timestamp.
               * @format date-time
               */
              updated_at?: string;
              /** The Shortcut icon entity type. */
              entity_type?: string;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get one Shortcut project by project ID. */
    "shortcut.get_project": {
      input: {
        /**
         * The Shortcut project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
      };
      output: {
        /** A Shortcut project. */
        project: {
          /**
           * The Shortcut project ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Shortcut project name. */
          name?: string;
          /** The Shortcut project description. */
          description?: string | null;
          /** The Shortcut project abbreviation. */
          abbreviation?: string | null;
          /** The Shortcut project color. */
          color?: string | null;
          /** Whether the project is archived. */
          archived?: boolean;
          /**
           * The Shortcut team ID.
           * @exclusiveMinimum 0
           */
          team_id?: number;
          /**
           * The Shortcut workflow ID.
           * @exclusiveMinimum 0
           */
          workflow_id?: number;
          /** The number of weeks per iteration. */
          iteration_length?: number;
          /** The Shortcut project start time. */
          start_time?: string | null;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** The Shortcut project entity type. */
          entity_type?: string;
          /** The Shortcut global project identifier. */
          global_id?: string | null;
          /** The Shortcut web URL for this project. */
          app_url?: string;
          /** The Shortcut member UUIDs. */
          follower_ids?: Array<string>;
          /** Whether the Shortcut thermometer is enabled. */
          show_thermometer?: boolean;
          /** The number of days before the thermometer is shown. */
          days_to_thermometer?: number;
          /** A Shortcut project stats object. */
          stats?: {
            /** The total project points. */
            num_points?: number;
            /** The total project stories. */
            num_stories?: number;
            /** The total related project documents. */
            num_related_documents?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get one Shortcut story by story ID. */
    "shortcut.get_story": {
      input: {
        /**
         * The Shortcut story ID.
         * @exclusiveMinimum 0
         */
        storyId: number;
      };
      output: {
        /** A Shortcut story. */
        story: {
          /**
           * The Shortcut story ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Shortcut story name. */
          name?: string;
          /** The Shortcut story description. */
          description?: string | null;
          /** The Shortcut web URL for this story. */
          app_url?: string;
          /** The Shortcut story type. */
          story_type?: string | null;
          /** Whether the story is archived. */
          archived?: boolean;
          /** Whether the story is blocked. */
          blocked?: boolean;
          /** Whether the story blocks other stories. */
          blocker?: boolean;
          /** Whether the story is completed. */
          completed?: boolean;
          /** Whether the story has started. */
          started?: boolean;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** The Shortcut story started timestamp. */
          started_at?: string | null;
          /** The Shortcut story completed timestamp. */
          completed_at?: string | null;
          /** The Shortcut story moved timestamp. */
          moved_at?: string | null;
          /** The Shortcut story due date. */
          due_date?: string | null;
          /** The Shortcut story estimate. */
          estimate?: number | null;
          /** The Shortcut story position. */
          position?: number;
          /**
           * The Shortcut workflow ID.
           * @exclusiveMinimum 0
           */
          workflow_id?: number;
          /**
           * The Shortcut workflow state ID.
           * @exclusiveMinimum 0
           */
          workflow_state_id?: number;
          /**
           * The Shortcut project ID.
           * @exclusiveMinimum 0
           */
          project_id?: number | null;
          /**
           * The Shortcut epic ID.
           * @exclusiveMinimum 0
           */
          epic_id?: number | null;
          /** The Shortcut iteration ID. */
          iteration_id?: number | null;
          /** The Shortcut member UUIDs. */
          owner_ids?: Array<string>;
          /** The Shortcut member UUIDs. */
          follower_ids?: Array<string>;
          /** The Shortcut member UUID that requested the story. */
          requested_by_id?: string | null;
          /** The expanded labels on this story. */
          labels?: Array<{
            /**
             * The Shortcut label ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The Shortcut label name. */
            name?: string;
            /** The Shortcut label color. */
            color?: string | null;
            /** The Shortcut label description. */
            description?: string | null;
            /** The Shortcut web URL for this label. */
            app_url?: string | null;
            /** Whether the label is archived. */
            archived?: boolean;
            /** The Shortcut label entity type. */
            entity_type?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            created_at?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            updated_at?: string;
            /** The external ID attached to this label. */
            external_id?: string | null;
            [key: string]: unknown;
          }>;
          /** The tasks attached to this story. */
          tasks?: Array<{
            /**
             * The Shortcut task ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The Shortcut task description. */
            description?: string;
            /** Whether the task is complete. */
            complete?: boolean;
            /** The Shortcut member UUIDs. */
            owner_ids?: Array<string>;
            /** The Shortcut task creation timestamp. */
            created_at?: string | null;
            /** The Shortcut task update timestamp. */
            updated_at?: string | null;
            /** The external ID attached to this task. */
            external_id?: string | null;
            [key: string]: unknown;
          }>;
          /** The Shortcut story entity type. */
          entity_type?: string;
          /** The external ID attached to this story. */
          external_id?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Shortcut workflow by workflow ID. */
    "shortcut.get_workflow": {
      input: {
        /**
         * The Shortcut workflow ID.
         * @exclusiveMinimum 0
         */
        workflowId: number;
      };
      output: {
        /** A Shortcut workflow. */
        workflow: {
          /**
           * The Shortcut workflow ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Shortcut workflow name. */
          name?: string;
          /** The Shortcut workflow description. */
          description?: string | null;
          /**
           * The Shortcut team ID for this workflow.
           * @exclusiveMinimum 0
           */
          team_id?: number;
          /**
           * The Shortcut workflow state ID.
           * @exclusiveMinimum 0
           */
          default_state_id?: number;
          /** Whether Shortcut auto-assigns owners when work starts. */
          auto_assign_owner?: boolean;
          /** The Shortcut project IDs in this workflow. */
          project_ids?: Array<number>;
          /** The workflow states in this workflow. */
          states?: Array<{
            /**
             * The Shortcut workflow state ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The workflow state name. */
            name?: string;
            /** The Shortcut workflow state type. */
            type?: string | null;
            /** The Shortcut workflow state color. */
            color?: string | null;
            /** The Shortcut workflow state description. */
            description?: string | null;
            /** The workflow state commit verb. */
            verb?: string | null;
            /** The workflow state position. */
            position?: number;
            /** The number of stories in this workflow state. */
            num_stories?: number;
            /** The number of story templates in this workflow state. */
            num_story_templates?: number;
            /** The Shortcut workflow state entity type. */
            entity_type?: string;
            /** The Shortcut global workflow state identifier. */
            global_id?: string | null;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            created_at?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            updated_at?: string;
            [key: string]: unknown;
          }>;
          /** The Shortcut workflow entity type. */
          entity_type?: string;
          /** The Shortcut global workflow identifier. */
          global_id?: string | null;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List the epics available in the connected Shortcut workspace. */
    "shortcut.list_epics": {
      input: {
        /** Whether Shortcut should include epic descriptions. */
        includesDescription?: boolean;
      };
      output: {
        /** The Shortcut epics. */
        epics: Array<{
          /**
           * The Shortcut epic ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Shortcut epic name. */
          name?: string;
          /** The Shortcut epic description. */
          description?: string | null;
          /** The Shortcut web URL for this epic. */
          app_url?: string;
          /** Whether the epic is archived. */
          archived?: boolean;
          /** Whether the epic is completed. */
          completed?: boolean;
          /** Whether the epic has started. */
          started?: boolean;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** The Shortcut epic started timestamp. */
          started_at?: string | null;
          /** The Shortcut epic completed timestamp. */
          completed_at?: string | null;
          /** The Shortcut epic deadline. */
          deadline?: string | null;
          /** The Shortcut epic planned start date. */
          planned_start_date?: string | null;
          /** The Shortcut epic position. */
          position?: number;
          /** The Shortcut epic state string. */
          state?: string | null;
          /** The Shortcut member UUIDs. */
          owner_ids?: Array<string>;
          /** The Shortcut member UUIDs. */
          follower_ids?: Array<string>;
          /** The Shortcut group UUIDs applied to this epic. */
          group_ids?: Array<string>;
          /** The Shortcut label IDs applied to this epic. */
          label_ids?: Array<number>;
          /** The Shortcut project IDs associated with this epic. */
          project_ids?: Array<number>;
          /** The Shortcut objective IDs associated with this epic. */
          objective_ids?: Array<number>;
          /** The expanded labels on this epic. */
          labels?: Array<{
            /**
             * The Shortcut label ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The Shortcut label name. */
            name?: string;
            /** The Shortcut label color. */
            color?: string | null;
            /** The Shortcut label description. */
            description?: string | null;
            /** The Shortcut web URL for this label. */
            app_url?: string | null;
            /** Whether the label is archived. */
            archived?: boolean;
            /** The Shortcut label entity type. */
            entity_type?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            created_at?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            updated_at?: string;
            /** The external ID attached to this label. */
            external_id?: string | null;
            [key: string]: unknown;
          }>;
          /** A Shortcut epic stats object. */
          stats?: {
            /** The total epic points. */
            num_points?: number;
            /** The completed epic points. */
            num_points_done?: number;
            /** The started epic points. */
            num_points_started?: number;
            /** The unstarted epic points. */
            num_points_unstarted?: number;
            /** The backlog epic points. */
            num_points_backlog?: number;
            /** The total epic stories. */
            num_stories_total?: number;
            /** The completed epic stories. */
            num_stories_done?: number;
            /** The started epic stories. */
            num_stories_started?: number;
            /** The unstarted epic stories. */
            num_stories_unstarted?: number;
            /** The backlog epic stories. */
            num_stories_backlog?: number;
            /** The total documents related to this epic. */
            num_related_documents?: number;
            [key: string]: unknown;
          };
          /** The Shortcut member UUID that requested the epic. */
          requested_by_id?: string | null;
          /** The Shortcut epic entity type. */
          entity_type?: string;
          /** The external ID attached to this epic. */
          external_id?: string | null;
          /** The Shortcut epic workflow state ID. */
          workflow_state_id?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the members available in the connected Shortcut workspace. */
    "shortcut.list_members": {
      input: {
        /**
         * The Shortcut organization ID.
         * @exclusiveMinimum 0
         */
        orgId?: number;
      };
      output: {
        /** The Shortcut members. */
        members: Array<{
          /**
           * The Shortcut member UUID.
           * @minLength 1
           */
          id?: string;
          /** The Shortcut workspace role. */
          role?: string | null;
          /** Whether the member is disabled in the workspace. */
          disabled?: boolean;
          /** The Shortcut global member identifier. */
          global_id?: string | null;
          /** The Shortcut member entity type. */
          entity_type?: string;
          /** The Shortcut group UUIDs for this member. */
          group_ids?: Array<string>;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** The Shortcut member state payload. */
          state?: unknown;
          /** A Shortcut member profile. */
          profile?: {
            /**
             * The Shortcut profile UUID.
             * @minLength 1
             */
            id?: string;
            /** The member name shown by Shortcut. */
            name?: string;
            /** The Shortcut mention name. */
            mention_name?: string | null;
            /** The member email address. */
            email_address?: string | null;
            /** Whether the member profile is deactivated. */
            deactivated?: boolean;
            /** Whether two-factor authentication is enabled for the member. */
            two_factor_auth_activated?: boolean;
            /** Whether the member profile is an organization owner. */
            is_owner?: boolean;
            /** Whether the member profile is disabled. */
            disabled?: boolean;
            /** The Shortcut profile entity type. */
            entity_type?: string;
            /** The member gravatar hash. */
            gravatar_hash?: string | null;
            /** A Shortcut icon object. */
            icon?: {
              /** The Shortcut icon ID. */
              id?: number;
              /** The Shortcut icon URL. */
              url?: string;
              /**
               * The Shortcut ISO 8601 timestamp.
               * @format date-time
               */
              created_at?: string;
              /**
               * The Shortcut ISO 8601 timestamp.
               * @format date-time
               */
              updated_at?: string;
              /** The Shortcut icon entity type. */
              entity_type?: string;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List the projects available in the connected Shortcut workspace. */
    "shortcut.list_projects": {
      input: Record<string, never>;
      output: {
        /** The Shortcut projects. */
        projects: Array<{
          /**
           * The Shortcut project ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Shortcut project name. */
          name?: string;
          /** The Shortcut project description. */
          description?: string | null;
          /** The Shortcut project abbreviation. */
          abbreviation?: string | null;
          /** The Shortcut project color. */
          color?: string | null;
          /** Whether the project is archived. */
          archived?: boolean;
          /**
           * The Shortcut team ID.
           * @exclusiveMinimum 0
           */
          team_id?: number;
          /**
           * The Shortcut workflow ID.
           * @exclusiveMinimum 0
           */
          workflow_id?: number;
          /** The number of weeks per iteration. */
          iteration_length?: number;
          /** The Shortcut project start time. */
          start_time?: string | null;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** The Shortcut project entity type. */
          entity_type?: string;
          /** The Shortcut global project identifier. */
          global_id?: string | null;
          /** The Shortcut web URL for this project. */
          app_url?: string;
          /** The Shortcut member UUIDs. */
          follower_ids?: Array<string>;
          /** Whether the Shortcut thermometer is enabled. */
          show_thermometer?: boolean;
          /** The number of days before the thermometer is shown. */
          days_to_thermometer?: number;
          /** A Shortcut project stats object. */
          stats?: {
            /** The total project points. */
            num_points?: number;
            /** The total project stories. */
            num_stories?: number;
            /** The total related project documents. */
            num_related_documents?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List the stories in one Shortcut project. */
    "shortcut.list_stories": {
      input: {
        /**
         * The Shortcut project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /** Whether Shortcut should include story descriptions. */
        includesDescription?: boolean;
      };
      output: {
        /** The Shortcut stories. */
        stories: Array<{
          /**
           * The Shortcut story ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Shortcut story name. */
          name?: string;
          /** The Shortcut story description. */
          description?: string | null;
          /** The Shortcut web URL for this story. */
          app_url?: string;
          /** The Shortcut story type. */
          story_type?: string | null;
          /** Whether the story is archived. */
          archived?: boolean;
          /** Whether the story is blocked. */
          blocked?: boolean;
          /** Whether the story blocks other stories. */
          blocker?: boolean;
          /** Whether the story is completed. */
          completed?: boolean;
          /** Whether the story has started. */
          started?: boolean;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** The Shortcut story started timestamp. */
          started_at?: string | null;
          /** The Shortcut story completed timestamp. */
          completed_at?: string | null;
          /** The Shortcut story moved timestamp. */
          moved_at?: string | null;
          /** The Shortcut story due date. */
          due_date?: string | null;
          /** The Shortcut story estimate. */
          estimate?: number | null;
          /** The Shortcut story position. */
          position?: number;
          /**
           * The Shortcut workflow ID.
           * @exclusiveMinimum 0
           */
          workflow_id?: number;
          /**
           * The Shortcut workflow state ID.
           * @exclusiveMinimum 0
           */
          workflow_state_id?: number;
          /**
           * The Shortcut project ID.
           * @exclusiveMinimum 0
           */
          project_id?: number | null;
          /**
           * The Shortcut epic ID.
           * @exclusiveMinimum 0
           */
          epic_id?: number | null;
          /** The Shortcut iteration ID. */
          iteration_id?: number | null;
          /** The Shortcut member UUIDs. */
          owner_ids?: Array<string>;
          /** The Shortcut member UUIDs. */
          follower_ids?: Array<string>;
          /** The Shortcut member UUID that requested the story. */
          requested_by_id?: string | null;
          /** The expanded labels on this story. */
          labels?: Array<{
            /**
             * The Shortcut label ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The Shortcut label name. */
            name?: string;
            /** The Shortcut label color. */
            color?: string | null;
            /** The Shortcut label description. */
            description?: string | null;
            /** The Shortcut web URL for this label. */
            app_url?: string | null;
            /** Whether the label is archived. */
            archived?: boolean;
            /** The Shortcut label entity type. */
            entity_type?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            created_at?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            updated_at?: string;
            /** The external ID attached to this label. */
            external_id?: string | null;
            [key: string]: unknown;
          }>;
          /** The tasks attached to this story. */
          tasks?: Array<{
            /**
             * The Shortcut task ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The Shortcut task description. */
            description?: string;
            /** Whether the task is complete. */
            complete?: boolean;
            /** The Shortcut member UUIDs. */
            owner_ids?: Array<string>;
            /** The Shortcut task creation timestamp. */
            created_at?: string | null;
            /** The Shortcut task update timestamp. */
            updated_at?: string | null;
            /** The external ID attached to this task. */
            external_id?: string | null;
            [key: string]: unknown;
          }>;
          /** The Shortcut story entity type. */
          entity_type?: string;
          /** The external ID attached to this story. */
          external_id?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the workflows available in the connected Shortcut workspace. */
    "shortcut.list_workflows": {
      input: Record<string, never>;
      output: {
        /** The Shortcut workflows. */
        workflows: Array<{
          /**
           * The Shortcut workflow ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Shortcut workflow name. */
          name?: string;
          /** The Shortcut workflow description. */
          description?: string | null;
          /**
           * The Shortcut team ID for this workflow.
           * @exclusiveMinimum 0
           */
          team_id?: number;
          /**
           * The Shortcut workflow state ID.
           * @exclusiveMinimum 0
           */
          default_state_id?: number;
          /** Whether Shortcut auto-assigns owners when work starts. */
          auto_assign_owner?: boolean;
          /** The Shortcut project IDs in this workflow. */
          project_ids?: Array<number>;
          /** The workflow states in this workflow. */
          states?: Array<{
            /**
             * The Shortcut workflow state ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The workflow state name. */
            name?: string;
            /** The Shortcut workflow state type. */
            type?: string | null;
            /** The Shortcut workflow state color. */
            color?: string | null;
            /** The Shortcut workflow state description. */
            description?: string | null;
            /** The workflow state commit verb. */
            verb?: string | null;
            /** The workflow state position. */
            position?: number;
            /** The number of stories in this workflow state. */
            num_stories?: number;
            /** The number of story templates in this workflow state. */
            num_story_templates?: number;
            /** The Shortcut workflow state entity type. */
            entity_type?: string;
            /** The Shortcut global workflow state identifier. */
            global_id?: string | null;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            created_at?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            updated_at?: string;
            [key: string]: unknown;
          }>;
          /** The Shortcut workflow entity type. */
          entity_type?: string;
          /** The Shortcut global workflow identifier. */
          global_id?: string | null;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Shortcut stories with the official search endpoint and stable pagination. */
    "shortcut.search_stories": {
      input: {
        /**
         * The Shortcut search query.
         * @minLength 1
         */
        query: string;
        /**
         * The Shortcut next-page token.
         * @minLength 1
         */
        next?: string;
        /** The amount of detail to return for each search result. */
        detail?: "full" | "slim";
        /**
         * The number of search results to return.
         * @minimum 1
         * @maximum 25
         */
        pageSize?: number;
        /**
         * The Shortcut entity types to search.
         * @minItems 1
         */
        entityTypes?: Array<"story" | "epic" | "iteration" | "objective">;
      };
      output: {
        /** The Shortcut stories returned by the search. */
        stories: Array<{
          /**
           * The Shortcut story ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Shortcut story name. */
          name?: string;
          /** The Shortcut story description. */
          description?: string | null;
          /** The Shortcut web URL for this story. */
          app_url?: string;
          /** The Shortcut story type. */
          story_type?: string | null;
          /** Whether the story is archived. */
          archived?: boolean;
          /** Whether the story is blocked. */
          blocked?: boolean;
          /** Whether the story blocks other stories. */
          blocker?: boolean;
          /** Whether the story is completed. */
          completed?: boolean;
          /** Whether the story has started. */
          started?: boolean;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** The Shortcut story started timestamp. */
          started_at?: string | null;
          /** The Shortcut story completed timestamp. */
          completed_at?: string | null;
          /** The Shortcut story moved timestamp. */
          moved_at?: string | null;
          /** The Shortcut story due date. */
          due_date?: string | null;
          /** The Shortcut story estimate. */
          estimate?: number | null;
          /** The Shortcut story position. */
          position?: number;
          /**
           * The Shortcut workflow ID.
           * @exclusiveMinimum 0
           */
          workflow_id?: number;
          /**
           * The Shortcut workflow state ID.
           * @exclusiveMinimum 0
           */
          workflow_state_id?: number;
          /**
           * The Shortcut project ID.
           * @exclusiveMinimum 0
           */
          project_id?: number | null;
          /**
           * The Shortcut epic ID.
           * @exclusiveMinimum 0
           */
          epic_id?: number | null;
          /** The Shortcut iteration ID. */
          iteration_id?: number | null;
          /** The Shortcut member UUIDs. */
          owner_ids?: Array<string>;
          /** The Shortcut member UUIDs. */
          follower_ids?: Array<string>;
          /** The Shortcut member UUID that requested the story. */
          requested_by_id?: string | null;
          /** The expanded labels on this story. */
          labels?: Array<{
            /**
             * The Shortcut label ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The Shortcut label name. */
            name?: string;
            /** The Shortcut label color. */
            color?: string | null;
            /** The Shortcut label description. */
            description?: string | null;
            /** The Shortcut web URL for this label. */
            app_url?: string | null;
            /** Whether the label is archived. */
            archived?: boolean;
            /** The Shortcut label entity type. */
            entity_type?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            created_at?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            updated_at?: string;
            /** The external ID attached to this label. */
            external_id?: string | null;
            [key: string]: unknown;
          }>;
          /** The tasks attached to this story. */
          tasks?: Array<{
            /**
             * The Shortcut task ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The Shortcut task description. */
            description?: string;
            /** Whether the task is complete. */
            complete?: boolean;
            /** The Shortcut member UUIDs. */
            owner_ids?: Array<string>;
            /** The Shortcut task creation timestamp. */
            created_at?: string | null;
            /** The Shortcut task update timestamp. */
            updated_at?: string | null;
            /** The external ID attached to this task. */
            external_id?: string | null;
            [key: string]: unknown;
          }>;
          /** The Shortcut story entity type. */
          entity_type?: string;
          /** The external ID attached to this story. */
          external_id?: string | null;
          [key: string]: unknown;
        }>;
        /** The Shortcut next-page token when more search results exist. */
        next: string | null;
        /** The total number of matching stories when Shortcut returns it. */
        total: number | null;
      };
    };
    /** Update one Shortcut epic with the first-pass supported fields. */
    "shortcut.update_epic": {
      input: {
        /**
         * The Shortcut epic ID.
         * @exclusiveMinimum 0
         */
        epicId: number;
        /**
         * The Shortcut epic name.
         * @minLength 1
         */
        name?: string;
        /** The Shortcut epic description. */
        description?: string | null;
        /** The Shortcut member UUIDs. */
        ownerIds?: Array<string>;
        /** The Shortcut member UUIDs. */
        followerIds?: Array<string>;
        /**
         * The Shortcut member UUID.
         * @minLength 1
         */
        requestedById?: string;
        /** The Shortcut group UUIDs to associate with the epic. */
        groupIds?: Array<string>;
        /** The Shortcut project IDs to associate with the epic. */
        projectIds?: Array<number>;
        /** The new labels to create and attach to the epic. */
        labels?: Array<{
          /**
           * The Shortcut label name.
           * @minLength 1
           */
          name: string;
          /**
           * The Shortcut label color.
           * @minLength 1
           */
          color?: string;
          /** The Shortcut label description. */
          description?: string | null;
          /** The external ID attached to this label. */
          externalId?: string | null;
        }>;
        /**
         * The Shortcut due date in YYYY-MM-DD format.
         * @format date
         */
        plannedStartDate?: string;
        /**
         * The Shortcut due date in YYYY-MM-DD format.
         * @format date
         */
        deadline?: string;
        /** The external ID attached to this epic. */
        externalId?: string | null;
        /** Whether the Shortcut epic should be archived. */
        archived?: boolean;
      };
      output: {
        /** A Shortcut epic. */
        epic: {
          /**
           * The Shortcut epic ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Shortcut epic name. */
          name?: string;
          /** The Shortcut epic description. */
          description?: string | null;
          /** The Shortcut web URL for this epic. */
          app_url?: string;
          /** Whether the epic is archived. */
          archived?: boolean;
          /** Whether the epic is completed. */
          completed?: boolean;
          /** Whether the epic has started. */
          started?: boolean;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** The Shortcut epic started timestamp. */
          started_at?: string | null;
          /** The Shortcut epic completed timestamp. */
          completed_at?: string | null;
          /** The Shortcut epic deadline. */
          deadline?: string | null;
          /** The Shortcut epic planned start date. */
          planned_start_date?: string | null;
          /** The Shortcut epic position. */
          position?: number;
          /** The Shortcut epic state string. */
          state?: string | null;
          /** The Shortcut member UUIDs. */
          owner_ids?: Array<string>;
          /** The Shortcut member UUIDs. */
          follower_ids?: Array<string>;
          /** The Shortcut group UUIDs applied to this epic. */
          group_ids?: Array<string>;
          /** The Shortcut label IDs applied to this epic. */
          label_ids?: Array<number>;
          /** The Shortcut project IDs associated with this epic. */
          project_ids?: Array<number>;
          /** The Shortcut objective IDs associated with this epic. */
          objective_ids?: Array<number>;
          /** The expanded labels on this epic. */
          labels?: Array<{
            /**
             * The Shortcut label ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The Shortcut label name. */
            name?: string;
            /** The Shortcut label color. */
            color?: string | null;
            /** The Shortcut label description. */
            description?: string | null;
            /** The Shortcut web URL for this label. */
            app_url?: string | null;
            /** Whether the label is archived. */
            archived?: boolean;
            /** The Shortcut label entity type. */
            entity_type?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            created_at?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            updated_at?: string;
            /** The external ID attached to this label. */
            external_id?: string | null;
            [key: string]: unknown;
          }>;
          /** A Shortcut epic stats object. */
          stats?: {
            /** The total epic points. */
            num_points?: number;
            /** The completed epic points. */
            num_points_done?: number;
            /** The started epic points. */
            num_points_started?: number;
            /** The unstarted epic points. */
            num_points_unstarted?: number;
            /** The backlog epic points. */
            num_points_backlog?: number;
            /** The total epic stories. */
            num_stories_total?: number;
            /** The completed epic stories. */
            num_stories_done?: number;
            /** The started epic stories. */
            num_stories_started?: number;
            /** The unstarted epic stories. */
            num_stories_unstarted?: number;
            /** The backlog epic stories. */
            num_stories_backlog?: number;
            /** The total documents related to this epic. */
            num_related_documents?: number;
            [key: string]: unknown;
          };
          /** The Shortcut member UUID that requested the epic. */
          requested_by_id?: string | null;
          /** The Shortcut epic entity type. */
          entity_type?: string;
          /** The external ID attached to this epic. */
          external_id?: string | null;
          /** The Shortcut epic workflow state ID. */
          workflow_state_id?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Update one Shortcut story with the first-pass supported fields. */
    "shortcut.update_story": {
      input: {
        /**
         * The Shortcut story ID.
         * @exclusiveMinimum 0
         */
        storyId: number;
        /**
         * The Shortcut story name.
         * @minLength 1
         */
        name?: string;
        /** The Shortcut story description. */
        description?: string | null;
        /**
         * The Shortcut workflow state ID.
         * @exclusiveMinimum 0
         */
        workflowStateId?: number;
        /**
         * The Shortcut project ID.
         * @exclusiveMinimum 0
         */
        projectId?: number;
        /** The Shortcut story type. */
        storyType?: "feature" | "bug" | "chore";
        /**
         * The Shortcut epic ID.
         * @exclusiveMinimum 0
         */
        epicId?: number;
        /** The Shortcut member UUIDs. */
        ownerIds?: Array<string>;
        /** The Shortcut member UUIDs. */
        followerIds?: Array<string>;
        /**
         * The Shortcut member UUID.
         * @minLength 1
         */
        requestedById?: string;
        /** The Shortcut story estimate. */
        estimate?: number | null;
        /**
         * The Shortcut due date in YYYY-MM-DD format.
         * @format date
         */
        dueDate?: string;
        /** The external ID attached to this story. */
        externalId?: string | null;
        /** The Shortcut iteration ID. */
        iterationId?: number;
        /** Whether the Shortcut story should be archived. */
        archived?: boolean;
      };
      output: {
        /** A Shortcut story. */
        story: {
          /**
           * The Shortcut story ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The Shortcut story name. */
          name?: string;
          /** The Shortcut story description. */
          description?: string | null;
          /** The Shortcut web URL for this story. */
          app_url?: string;
          /** The Shortcut story type. */
          story_type?: string | null;
          /** Whether the story is archived. */
          archived?: boolean;
          /** Whether the story is blocked. */
          blocked?: boolean;
          /** Whether the story blocks other stories. */
          blocker?: boolean;
          /** Whether the story is completed. */
          completed?: boolean;
          /** Whether the story has started. */
          started?: boolean;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The Shortcut ISO 8601 timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** The Shortcut story started timestamp. */
          started_at?: string | null;
          /** The Shortcut story completed timestamp. */
          completed_at?: string | null;
          /** The Shortcut story moved timestamp. */
          moved_at?: string | null;
          /** The Shortcut story due date. */
          due_date?: string | null;
          /** The Shortcut story estimate. */
          estimate?: number | null;
          /** The Shortcut story position. */
          position?: number;
          /**
           * The Shortcut workflow ID.
           * @exclusiveMinimum 0
           */
          workflow_id?: number;
          /**
           * The Shortcut workflow state ID.
           * @exclusiveMinimum 0
           */
          workflow_state_id?: number;
          /**
           * The Shortcut project ID.
           * @exclusiveMinimum 0
           */
          project_id?: number | null;
          /**
           * The Shortcut epic ID.
           * @exclusiveMinimum 0
           */
          epic_id?: number | null;
          /** The Shortcut iteration ID. */
          iteration_id?: number | null;
          /** The Shortcut member UUIDs. */
          owner_ids?: Array<string>;
          /** The Shortcut member UUIDs. */
          follower_ids?: Array<string>;
          /** The Shortcut member UUID that requested the story. */
          requested_by_id?: string | null;
          /** The expanded labels on this story. */
          labels?: Array<{
            /**
             * The Shortcut label ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The Shortcut label name. */
            name?: string;
            /** The Shortcut label color. */
            color?: string | null;
            /** The Shortcut label description. */
            description?: string | null;
            /** The Shortcut web URL for this label. */
            app_url?: string | null;
            /** Whether the label is archived. */
            archived?: boolean;
            /** The Shortcut label entity type. */
            entity_type?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            created_at?: string;
            /**
             * The Shortcut ISO 8601 timestamp.
             * @format date-time
             */
            updated_at?: string;
            /** The external ID attached to this label. */
            external_id?: string | null;
            [key: string]: unknown;
          }>;
          /** The tasks attached to this story. */
          tasks?: Array<{
            /**
             * The Shortcut task ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /** The Shortcut task description. */
            description?: string;
            /** Whether the task is complete. */
            complete?: boolean;
            /** The Shortcut member UUIDs. */
            owner_ids?: Array<string>;
            /** The Shortcut task creation timestamp. */
            created_at?: string | null;
            /** The Shortcut task update timestamp. */
            updated_at?: string | null;
            /** The external ID attached to this task. */
            external_id?: string | null;
            [key: string]: unknown;
          }>;
          /** The Shortcut story entity type. */
          entity_type?: string;
          /** The external ID attached to this story. */
          external_id?: string | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
