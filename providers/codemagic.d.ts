import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a Codemagic build by its build ID. */
    "codemagic.cancel_build": {
      input: {
        /**
         * The Codemagic build ID.
         * @minLength 1
         */
        build_id: string;
      };
      output: {
        /** Whether the cancel request was accepted. */
        ok: boolean;
        /** The build ID that was targeted. */
        build_id: string;
        /** Whether Codemagic reported that the build had already finished. */
        already_finished: boolean;
      };
    };
    /** Start a new Codemagic build for the specified app and workflow. */
    "codemagic.create_build": {
      input: {
        /**
         * The application identifier.
         * @minLength 1
         */
        appId: string;
        /**
         * The workflow identifier as specified in the YAML file.
         * @minLength 1
         */
        workflowId: string;
        /**
         * Git branch name to build. Either branch or tag is required.
         * @minLength 1
         */
        branch?: string;
        /**
         * Git tag name to build. Either branch or tag is required.
         * @minLength 1
         */
        tag?: string;
        /** Labels to attach to the build. */
        labels?: Array<string>;
        /** Environment, group, and software overrides for the build. */
        environment?: {
          /** Environment variable overrides keyed by variable name. */
          variables?: Record<string, string | number | boolean>;
          /** Variable groups to inject into the build. */
          groups?: Array<string>;
          /** Software version overrides keyed by tool name. */
          softwareVersions?: Record<string, string>;
        };
        /**
         * Build machine type, such as mac_mini_m2 or linux_standard.
         * @minLength 1
         */
        instanceType?: string;
      };
      output: {
        /** The newly created Codemagic build ID. */
        buildId: string;
      };
    };
    /** Get detailed information about a single Codemagic build. */
    "codemagic.get_build": {
      input: {
        /**
         * The Codemagic build ID.
         * @minLength 1
         */
        build_id: string;
      };
      output: {
        /** The Codemagic build ID. */
        id: string;
        /** The application ID that owns the build. */
        app_id: string;
        /** Workflow metadata for the build. */
        workflow: {
          /** Workflow identifier, when available. */
          id?: string;
          /** Workflow name, when available. */
          name?: string;
          [key: string]: unknown;
        };
        /** Build status reported by Codemagic, such as queued, building, or finished. */
        status: string;
        /** Build sequence number. */
        index: number;
        /** Labels attached to the build. */
        labels: Array<string>;
        /** Artifacts attached to the build. */
        artifacts: Array<Record<string, unknown>>;
        /** Release notes attached to the build. */
        release_notes: Array<Record<string, unknown>>;
        /** Timestamp when the build was created. */
        created_at: string;
        /** Timestamp when the build started. */
        started_at?: string | null;
        /** Timestamp when the build finished. */
        finished_at?: string | null;
        /** Git branch used by the build, if available. */
        branch?: string | null;
        /** Git tag used by the build, if available. */
        tag?: string | null;
        /** Commit metadata for the build. */
        commit?: {
          /** Commit SHA, when available. */
          hash?: string;
          /** Commit author, when available. */
          author?: string;
          /** Commit message, when available. */
          message?: string;
          [key: string]: unknown;
        } | null;
        /** Pull request metadata for the build. */
        pull_request?: Record<string, unknown> | null;
        /** Build machine type, if available. */
        instance_type?: string | null;
        /** Whether remote access is enabled for the build. */
        remote_access_enabled?: boolean;
        /** Build configuration metadata, if available. */
        config?: Record<string, unknown>;
        /** Custom build input values returned by Codemagic, if available. */
        build_inputs?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the authenticated Codemagic user and their available team permissions. */
    "codemagic.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The authenticated Codemagic user ID. */
        id: string;
        /** Avatar URL of the authenticated user, if available. */
        avatar_url: string | null;
        /** Permissions available to the user across teams. */
        permissions: Record<string, Array<string>>;
        [key: string]: unknown;
      };
    };
    /** List the applications that belong to a specific Codemagic team. */
    "codemagic.list_team_apps": {
      input: {
        /**
         * The Codemagic team ID.
         * @minLength 1
         */
        team_id: string;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
        /** Optional list of application IDs to filter by. */
        id?: Array<string>;
      };
      output: {
        /** Applications that belong to the specified team. */
        apps: Array<{
          /** The Codemagic application ID. */
          id: string;
          /** Application name. */
          name: string;
          /** Application icon URL, if available. */
          icon_url: string | null;
          /** Most recent build ID, or null when absent. */
          last_build_id: string | null;
          /** Whether the application is archived. */
          archived?: boolean | null;
          /** Repository metadata for the application. */
          repository?: {
            /** Repository provider reported by Codemagic, when available. */
            provider?: string;
            /** Repository URL, when available. */
            url?: string;
            /** Default repository branch, when available. */
            default_branch?: string;
            [key: string]: unknown;
          };
          /** Where the application settings are sourced from, when available. */
          settings_source?: string;
          /** Project type, if Codemagic reports it. */
          project_type?: string | null;
          [key: string]: unknown;
        }>;
        /** The number of results returned per page. */
        page_size: number;
        /** The current page number. */
        current_page: number;
        /** The total number of pages available. */
        total_pages: number;
      };
    };
    /** List builds for a specific Codemagic team with optional filters. */
    "codemagic.list_team_builds": {
      input: {
        /**
         * The Codemagic team ID.
         * @minLength 1
         */
        team_id: string;
        /**
         * Only return builds for this application ID.
         * @minLength 1
         */
        app_id?: string;
        /** Only return builds with this status. */
        status?: "queued" | "building" | "finished" | "failed" | "canceled" | "timeout" | "skipped";
        /**
         * Only return builds for this workflow ID.
         * @minLength 1
         */
        workflow_id?: string;
        /**
         * Only return builds for this branch.
         * @minLength 1
         */
        branch?: string;
        /**
         * Only return builds for this tag.
         * @minLength 1
         */
        tag?: string;
        /** Only return builds that match these labels. */
        label?: Array<string>;
        /** Cursor returned by the previous response to continue listing results. */
        cursor?: string;
        /**
         * The maximum number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
      };
      output: {
        /** Builds returned for the specified team. */
        builds: Array<{
          /** The Codemagic build ID. */
          id: string;
          /** The application ID that owns the build. */
          app_id: string;
          /** Workflow metadata for the build. */
          workflow: {
            /** Workflow identifier, when available. */
            id?: string;
            /** Workflow name, when available. */
            name?: string;
            [key: string]: unknown;
          };
          /** Build status reported by Codemagic, such as queued, building, or finished. */
          status: string;
          /** Build sequence number. */
          index: number;
          /** Labels attached to the build. */
          labels: Array<string>;
          /** Artifacts attached to the build. */
          artifacts: Array<Record<string, unknown>>;
          /** Release notes attached to the build. */
          release_notes: Array<Record<string, unknown>>;
          /** Timestamp when the build was created. */
          created_at: string;
          /** Timestamp when the build started. */
          started_at?: string | null;
          /** Timestamp when the build finished. */
          finished_at?: string | null;
          /** Git branch used by the build, if available. */
          branch?: string | null;
          /** Git tag used by the build, if available. */
          tag?: string | null;
          /** Commit metadata for the build. */
          commit?: {
            /** Commit SHA, when available. */
            hash?: string;
            /** Commit author, when available. */
            author?: string;
            /** Commit message, when available. */
            message?: string;
            [key: string]: unknown;
          } | null;
          /** Pull request metadata for the build. */
          pull_request?: Record<string, unknown> | null;
          /** Build machine type, if available. */
          instance_type?: string | null;
          /** Whether remote access is enabled for the build. */
          remote_access_enabled?: boolean;
          /** Build configuration metadata, if available. */
          config?: Record<string, unknown>;
          /** Custom build input values returned by Codemagic, if available. */
          build_inputs?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The number of results returned per page. */
        page_size: number;
        /** Cursor for the next page, or null when there are no more results. */
        cursor?: string | null;
      };
    };
    /** List the Codemagic applications accessible to the authenticated user. */
    "codemagic.list_user_apps": {
      input: {
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
      };
      output: {
        /** Applications accessible to the authenticated user. */
        apps: Array<{
          /** The Codemagic application ID. */
          id: string;
          /** Application name. */
          name: string;
          /** Application icon URL, if available. */
          icon_url: string | null;
          /** Most recent build ID, or null when absent. */
          last_build_id: string | null;
          /** Whether the application is archived. */
          archived?: boolean | null;
          /** Repository metadata for the application. */
          repository?: {
            /** Repository provider reported by Codemagic, when available. */
            provider?: string;
            /** Repository URL, when available. */
            url?: string;
            /** Default repository branch, when available. */
            default_branch?: string;
            [key: string]: unknown;
          };
          /** Where the application settings are sourced from, when available. */
          settings_source?: string;
          /** Project type, if Codemagic reports it. */
          project_type?: string | null;
          [key: string]: unknown;
        }>;
        /** The number of results returned per page. */
        page_size: number;
        /** The current page number. */
        current_page: number;
        /** The total number of pages available. */
        total_pages: number;
      };
    };
    /** List the Codemagic teams accessible to the authenticated user. */
    "codemagic.list_user_teams": {
      input: {
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
      };
      output: {
        /** Teams accessible to the authenticated user. */
        teams: Array<{
          /** The Codemagic team ID. */
          id: string;
          /** Display name of the team. */
          name: string;
          /** Icon URL of the team, if available. */
          icon_url: string | null;
          [key: string]: unknown;
        }>;
        /** The number of results returned per page. */
        page_size: number;
        /** The current page number. */
        current_page: number;
        /** The total number of pages available. */
        total_pages: number;
      };
    };
  }
}
