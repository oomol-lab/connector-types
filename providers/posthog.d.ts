import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a collaborator to a PostHog dashboard. */
    "posthog.add_dashboard_collaborator": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        dashboard_id: string | number;
        /**
         * User UUID to add as a collaborator.
         * @minLength 1
         */
        user_uuid: string;
        /** Restriction level to grant to the collaborator. */
        level: number;
      };
      output: {
        /** Dashboard collaborator UUID. */
        id?: string;
        /** Dashboard identifier. */
        dashboard_id?: number;
        /** Basic PostHog user. */
        user?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        };
        /** Restriction level granted to the collaborator. */
        level?: number;
        /** Datetime when the collaborator was added. */
        added_at?: string;
        /** Datetime when the collaborator was updated. */
        updated_at?: string;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Add person UUIDs to a static PostHog cohort. */
    "posthog.add_persons_to_static_cohort": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
        /**
         * Person UUIDs to add to the static cohort.
         * @minItems 1
         */
        person_ids: Array<string>;
      };
      output: {
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** Bulk add, remove, or set tags on PostHog event definitions. */
    "posthog.bulk_update_event_definition_tags": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /**
         * Object IDs to update tags on.
         * @minItems 1
         * @maxItems 500
         */
        ids: Array<number>;
        /** Bulk tag action to perform. */
        action: "add" | "remove" | "set";
        /**
         * Tag names to add, remove, or set.
         * @minItems 1
         */
        tags: Array<string>;
      };
      output: {
        /** Objects whose tags were updated. */
        updated: Array<unknown>;
        /** Objects skipped by PostHog during tag update. */
        skipped: Array<unknown>;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** Bulk add, remove, or set tags on PostHog property definitions. */
    "posthog.bulk_update_property_definition_tags": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /**
         * Object IDs to update tags on.
         * @minItems 1
         * @maxItems 500
         */
        ids: Array<number>;
        /** Bulk tag action to perform. */
        action: "add" | "remove" | "set";
        /**
         * Tag names to add, remove, or set.
         * @minItems 1
         */
        tags: Array<string>;
      };
      output: {
        /** Objects whose tags were updated. */
        updated: Array<unknown>;
        /** Objects skipped by PostHog during tag update. */
        skipped: Array<unknown>;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** Cancel a PostHog async query by project ID and query ID. */
    "posthog.cancel_query": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /**
         * Asynchronous query identifier returned by PostHog.
         * @minLength 1
         */
        query_id: string;
      };
      output: {
        /** Whether the cancel request was sent successfully. */
        cancelled: boolean;
        /** Asynchronous query identifier. */
        query_id: string;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** Copy an existing PostHog dashboard tile to another dashboard. */
    "posthog.copy_dashboard_tile": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
        /** Dashboard ID the tile currently belongs to. */
        fromDashboardId: number;
        /** Dashboard tile ID to copy. */
        tileId: number;
      };
      output: {
        /** Numeric dashboard identifier. */
        id: number;
        /** Dashboard name. */
        name?: string | null;
        /** Dashboard description. */
        description?: string;
        /** Whether the dashboard is pinned to the top of the list. */
        pinned?: boolean;
        /** Datetime when the dashboard was created. */
        created_at?: string;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Datetime when the dashboard was last accessed. */
        last_accessed_at?: string | null;
        /** Datetime when the dashboard was last viewed. */
        last_viewed_at?: string | null;
        /** Whether the dashboard is shared. */
        is_shared?: boolean;
        /** Whether the dashboard is marked as deleted. */
        deleted?: boolean;
        /** Dashboard creation mode returned by PostHog. */
        creation_mode?: string;
        /** Dashboard filters returned by PostHog. */
        filters?: Record<string, unknown> | null;
        /** Dashboard variables returned by PostHog. */
        variables?: Record<string, unknown> | null;
        /** Custom color mapping for breakdown values. */
        breakdown_colors?: unknown;
        /** Color theme ID used for chart visualizations. */
        data_color_theme_id?: number | null;
        /** Tags attached to the dashboard. */
        tags?: Array<unknown>;
        /** Dashboard restriction level. */
        restriction_level?: number;
        /** Effective restriction level for the current user. */
        effective_restriction_level?: number;
        /** Effective privilege level for the current user. */
        effective_privilege_level?: number;
        /** Effective user access level for the dashboard. */
        user_access_level?: string | null;
        /** Dashboard access control version. */
        access_control_version?: string;
        /** Datetime when the dashboard last refreshed. */
        last_refresh?: string | null;
        /** Persisted dashboard filters. */
        persisted_filters?: Record<string, unknown> | null;
        /** Persisted dashboard variables. */
        persisted_variables?: Record<string, unknown> | null;
        /** Project or team ID this dashboard belongs to. */
        team_id?: number;
        /** Quick filter IDs associated with this dashboard. */
        quick_filter_ids?: Array<string> | null;
        /** Dashboard tile payloads returned by PostHog. */
        tiles?: Array<Record<string, unknown>> | null;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create an annotation in a PostHog project. */
    "posthog.create_annotation": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Annotation text shown on charts. */
        content?: string | null;
        /** ISO 8601 timestamp when this annotation happened. */
        date_marker?: string | null;
        /** Annotation creation type. */
        creation_type?: "USR" | "GIT";
        /** Dashboard tile or insight identifier attached to the annotation. */
        dashboard_item?: number | null;
        /** Dashboard identifier attached to the annotation. */
        dashboard_id?: number | null;
        /** Whether the annotation should be marked as deleted. */
        deleted?: boolean;
        /** Annotation visibility scope. */
        scope?: "dashboard_item" | "dashboard" | "project" | "organization";
      };
      output: {
        /** Numeric annotation identifier. */
        id: number;
        /** Annotation text shown on charts. */
        content?: string | null;
        /** ISO 8601 timestamp when this annotation happened. */
        date_marker?: string | null;
        /** Annotation creation type returned by PostHog. */
        creation_type?: string;
        /** Dashboard tile or insight identifier attached to the annotation. */
        dashboard_item?: number | null;
        /** Dashboard identifier attached to the annotation. */
        dashboard_id?: number | null;
        /** Dashboard name attached to the annotation. */
        dashboard_name?: string | null;
        /** Insight short ID attached to the annotation. */
        insight_short_id?: string | null;
        /** Insight name attached to the annotation. */
        insight_name?: string | null;
        /** Derived insight name attached to the annotation. */
        insight_derived_name?: string | null;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Datetime when the annotation was created. */
        created_at?: string | null;
        /** Datetime when the annotation was updated. */
        updated_at?: string;
        /** Whether the annotation is marked as deleted. */
        deleted?: boolean;
        /** Annotation visibility scope. */
        scope?: string;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a cohort in a PostHog project. */
    "posthog.create_cohort": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /**
         * Cohort name.
         * @maxLength 400
         */
        name: string | null;
        /**
         * Description for the cohort.
         * @maxLength 1000
         */
        description?: string;
        /** Group configuration defining cohort criteria. */
        groups?: unknown;
        /** Whether the cohort should be marked as deleted. */
        deleted?: boolean;
        /** Object payload accepted or returned by PostHog. */
        filters?: Record<string, unknown> | null;
        /** Query payload defining this cohort. */
        query?: unknown;
        /** Whether the cohort is static. */
        is_static?: boolean;
        /** Folder identifier where PostHog should create the cohort. */
        _create_in_folder?: string;
        /**
         * Person UUIDs to seed when creating a static cohort.
         * @minItems 1
         */
        _create_static_person_ids?: Array<string>;
      };
      output: {
        /** Numeric cohort identifier. */
        id: number;
        /** Cohort name. */
        name?: string | null;
        /** Description for the cohort. */
        description?: string;
        /** Raw group configuration returned by PostHog. */
        groups?: Record<string, unknown>;
        /** Whether the cohort is marked as deleted. */
        deleted?: boolean;
        /** Cohort filters returned by PostHog. */
        filters?: Record<string, unknown> | null;
        /** Query payload returned by PostHog for this cohort. */
        query?: Record<string, unknown> | null;
        /** Current cohort version. */
        version?: number | null;
        /** Pending cohort version. */
        pending_version?: number | null;
        /** Whether the cohort is being recalculated. */
        is_calculating?: boolean;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Datetime when the cohort was created. */
        created_at?: string | null;
        /** Datetime when the cohort was last calculated. */
        last_calculation?: string | null;
        /** Datetime when person properties were last backfilled. */
        last_backfill_person_properties_at?: string | null;
        /** Number of calculation errors recorded for the cohort. */
        errors_calculating?: number;
        /** Most recent cohort calculation error message. */
        last_error_message?: string | null;
        /** Number of persons in the cohort. */
        count?: number | null;
        /** Whether the cohort is static. */
        is_static?: boolean;
        /** Cohort type classified by PostHog. */
        cohort_type?: string | null;
        /** Experiment IDs attached to the cohort. */
        experiment_set?: Array<number>;
        [key: string]: unknown;
      };
    };
    /** Create a PostHog dashboard in a project. */
    "posthog.create_dashboard": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /**
         * Dashboard name.
         * @maxLength 400
         */
        name?: string | null;
        /** Dashboard description. */
        description?: string;
        /** Whether the dashboard should be pinned to the top of the list. */
        pinned?: boolean;
        /** Whether the dashboard should be marked as deleted. */
        deleted?: boolean;
        /** Custom color mapping for breakdown values. */
        breakdown_colors?: unknown;
        /** Color theme ID used for chart visualizations. */
        data_color_theme_id?: number | null;
        /** Tags attached to the dashboard. */
        tags?: Array<string>;
        /** Dashboard restriction level. */
        restriction_level?: number;
        /** Quick filter IDs associated with this dashboard. */
        quick_filter_ids?: Array<string> | null;
        /** Template key to create the dashboard from a predefined template. */
        use_template?: string;
        /** ID of an existing dashboard to duplicate. */
        use_dashboard?: number | null;
        /** Whether PostHog should also delete insights that are only on this dashboard. */
        delete_insights?: boolean;
        /** Folder identifier where PostHog should create the dashboard. */
        _create_in_folder?: string;
      };
      output: {
        /** Numeric dashboard identifier. */
        id: number;
        /** Dashboard name. */
        name?: string | null;
        /** Dashboard description. */
        description?: string;
        /** Whether the dashboard is pinned to the top of the list. */
        pinned?: boolean;
        /** Datetime when the dashboard was created. */
        created_at?: string;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Datetime when the dashboard was last accessed. */
        last_accessed_at?: string | null;
        /** Datetime when the dashboard was last viewed. */
        last_viewed_at?: string | null;
        /** Whether the dashboard is shared. */
        is_shared?: boolean;
        /** Whether the dashboard is marked as deleted. */
        deleted?: boolean;
        /** Dashboard creation mode returned by PostHog. */
        creation_mode?: string;
        /** Dashboard filters returned by PostHog. */
        filters?: Record<string, unknown> | null;
        /** Dashboard variables returned by PostHog. */
        variables?: Record<string, unknown> | null;
        /** Custom color mapping for breakdown values. */
        breakdown_colors?: unknown;
        /** Color theme ID used for chart visualizations. */
        data_color_theme_id?: number | null;
        /** Tags attached to the dashboard. */
        tags?: Array<unknown>;
        /** Dashboard restriction level. */
        restriction_level?: number;
        /** Effective restriction level for the current user. */
        effective_restriction_level?: number;
        /** Effective privilege level for the current user. */
        effective_privilege_level?: number;
        /** Effective user access level for the dashboard. */
        user_access_level?: string | null;
        /** Dashboard access control version. */
        access_control_version?: string;
        /** Datetime when the dashboard last refreshed. */
        last_refresh?: string | null;
        /** Persisted dashboard filters. */
        persisted_filters?: Record<string, unknown> | null;
        /** Persisted dashboard variables. */
        persisted_variables?: Record<string, unknown> | null;
        /** Project or team ID this dashboard belongs to. */
        team_id?: number;
        /** Quick filter IDs associated with this dashboard. */
        quick_filter_ids?: Array<string> | null;
        /** Dashboard tile payloads returned by PostHog. */
        tiles?: Array<Record<string, unknown>> | null;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create an event definition for a PostHog project. */
    "posthog.create_event_definition": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /**
         * Event definition name.
         * @maxLength 400
         */
        name: string;
        /** Owner user ID. */
        owner?: number | null;
        /** Description for the event definition. */
        description?: string | null;
        /** Tags attached to the event definition. */
        tags?: Array<unknown>;
        /** Whether the event definition is verified. */
        verified?: boolean;
        /** Whether the event definition is hidden. */
        hidden?: boolean | null;
        /** Enforcement mode for this event definition. */
        enforcement_mode?: string;
        /** Primary property displayed alongside this event. */
        primary_property?: string | null;
        /** Whether new events should post to Slack. */
        post_to_slack?: boolean;
        /** Default columns configured for this event definition. */
        default_columns?: Array<string>;
      };
      output: {
        /** Event definition UUID. */
        id: string;
        /** Event definition name. */
        name: string;
        /** Owner user ID. */
        owner?: number | null;
        /** Description for the event definition. */
        description?: string | null;
        /** Tags attached to the event definition. */
        tags?: Array<unknown>;
        /** Creation datetime for the event definition. */
        created_at?: string | null;
        /** Update datetime for the event definition. */
        updated_at?: string;
        /** Basic PostHog user. */
        updated_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Datetime when the event was last seen. */
        last_seen_at?: string | null;
        /** Datetime of the last upstream update. */
        last_updated_at?: string;
        /** Whether the event definition is verified. */
        verified?: boolean;
        /** Datetime when the event definition was verified. */
        verified_at?: string | null;
        /** Basic PostHog user. */
        verified_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Whether the event definition is hidden. */
        hidden?: boolean | null;
        /** Enforcement mode for this event definition. */
        enforcement_mode?: string;
        /** Primary property displayed alongside this event. */
        primary_property?: string | null;
        /** Whether the definition represents an action. */
        is_action?: boolean;
        /** Action ID if this definition is an action. */
        action_id?: number;
        /** Whether PostHog is calculating related metadata. */
        is_calculating?: boolean;
        /** Last calculation datetime. */
        last_calculated_at?: string;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Whether new events post to Slack. */
        post_to_slack?: boolean;
        /** Default columns configured for this event definition. */
        default_columns?: Array<string>;
        /** Media preview URLs returned by PostHog. */
        media_preview_urls?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Create a feature flag in a PostHog project. */
    "posthog.create_feature_flag": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Feature flag key. */
        key: string;
        /** Feature flag description. */
        name: string;
        /** Feature flag filters returned by PostHog. */
        filters?: Record<string, unknown> | null;
        /** Whether the feature flag is active. */
        active?: boolean;
        /** Tags attached to the feature flag. */
        tags?: Array<string>;
        /** Evaluation contexts attached to the feature flag. */
        evaluation_contexts?: Array<string>;
      };
      output: {
        /** Feature flag identifier. */
        id: number;
        /** Feature flag key. */
        key: string;
        /** Feature flag description. */
        name: string;
        /** Whether the feature flag is active. */
        active: boolean;
        /** Whether the feature flag is marked as deleted. */
        deleted: boolean;
        /** Feature flag filters returned by PostHog. */
        filters: Record<string, unknown>;
        /** Tags attached to the feature flag. */
        tags: Array<unknown>;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
        /** Feature flag creation datetime. */
        created_at?: string | null;
        /** Feature flag update datetime. */
        updated_at?: string | null;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Basic PostHog user. */
        last_modified_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Feature flag version. */
        version?: number | null;
        /** Whether experience continuity is enabled for the feature flag. */
        ensure_experience_continuity?: boolean | null;
        /** Associated experiment IDs. */
        experiment_set?: Array<number>;
        /** Associated experiment metadata objects. */
        experiment_set_metadata?: Array<Record<string, unknown>>;
        /** Survey metadata attached to the feature flag. */
        surveys?: Record<string, unknown> | null;
        /** Early access feature metadata attached to the flag. */
        features?: Record<string, unknown> | null;
        /** Rollback conditions for the feature flag. */
        rollback_conditions?: unknown;
        /** Whether a rollback has been performed. */
        performed_rollback?: boolean | null;
        /** Whether the current user can edit the feature flag. */
        can_edit?: boolean | null;
        /** Computed feature flag status. */
        status?: string | null;
        /** Where the feature flag is evaluated. */
        evaluation_runtime?: string | null;
        /** Identifier used for bucketing users. */
        bucketing_identifier?: string | null;
        /** Last time the feature flag was evaluated. */
        last_called_at?: string | null;
        /** Effective access level for the current user. */
        user_access_level?: string | null;
        /** Feature flag rollout percentage, when present. */
        rollout_percentage?: number | null;
        /** Evaluation contexts attached to the feature flag. */
        evaluation_contexts?: Array<string>;
        /** Usage dashboard identifier. */
        usage_dashboard?: number | null;
        /** Analytics dashboard identifiers attached to the feature flag. */
        analytics_dashboards?: Array<number>;
        /** Whether analytics have been enriched. */
        has_enriched_analytics?: boolean | null;
        /** Whether the flag is a remote configuration. */
        is_remote_configuration?: boolean | null;
        /** Whether the flag has encrypted payloads. */
        has_encrypted_payloads?: boolean | null;
        /** Whether the flag is used in replay settings. */
        is_used_in_replay_settings?: boolean | null;
        [key: string]: unknown;
      };
    };
    /** Create a saved PostHog insight in a project. */
    "posthog.create_insight": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Insight name. */
        name?: string | null;
        /** Insight description. */
        description?: string | null;
        /** Object payload accepted or returned by PostHog. */
        query?: Record<string, unknown> | null;
        /** Object payload accepted or returned by PostHog. */
        filters?: Record<string, unknown> | null;
        /** Dashboard IDs referencing the insight. */
        dashboards?: Array<string | number>;
        /** Tags attached to the insight. */
        tags?: Array<string>;
        /** Refresh mode used by the PostHog API. */
        refresh?: "async" | "async_except_on_cache_miss" | "blocking" | "force_async" | "force_blocking" | "force_cache" | "lazy_async" | null;
        /** Whether the insight should be saved. */
        saved?: boolean | null;
        /** Whether the insight should be favorited. */
        favorited?: boolean | null;
      };
      output: {
        /** Numeric insight identifier. */
        id?: number;
        /** Short insight identifier. */
        short_id?: string;
        /** Insight name. */
        name?: string | null;
        /** Object payload accepted or returned by PostHog. */
        query?: Record<string, unknown> | null;
        /** Full raw payload returned by PostHog. */
        raw?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Mark a PostHog annotation as deleted using the official soft-delete contract. */
    "posthog.delete_annotation": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Whether the annotation was marked as deleted. */
        deleted: boolean;
        /** Deleted annotation identifier. */
        id: string;
        /** PostHog annotation. */
        annotation: {
          /** Numeric annotation identifier. */
          id: number;
          /** Annotation text shown on charts. */
          content?: string | null;
          /** ISO 8601 timestamp when this annotation happened. */
          date_marker?: string | null;
          /** Annotation creation type returned by PostHog. */
          creation_type?: string;
          /** Dashboard tile or insight identifier attached to the annotation. */
          dashboard_item?: number | null;
          /** Dashboard identifier attached to the annotation. */
          dashboard_id?: number | null;
          /** Dashboard name attached to the annotation. */
          dashboard_name?: string | null;
          /** Insight short ID attached to the annotation. */
          insight_short_id?: string | null;
          /** Insight name attached to the annotation. */
          insight_name?: string | null;
          /** Derived insight name attached to the annotation. */
          insight_derived_name?: string | null;
          /** Basic PostHog user. */
          created_by?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          } | null;
          /** Datetime when the annotation was created. */
          created_at?: string | null;
          /** Datetime when the annotation was updated. */
          updated_at?: string;
          /** Whether the annotation is marked as deleted. */
          deleted?: boolean;
          /** Annotation visibility scope. */
          scope?: string;
          /** Full raw payload returned by PostHog. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** Mark a PostHog cohort as deleted using the official soft-delete contract. */
    "posthog.delete_cohort": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Whether the cohort was marked as deleted. */
        deleted: boolean;
        /** Deleted cohort identifier. */
        id: string;
        /** PostHog cohort. */
        cohort: {
          /** Numeric cohort identifier. */
          id: number;
          /** Cohort name. */
          name?: string | null;
          /** Description for the cohort. */
          description?: string;
          /** Raw group configuration returned by PostHog. */
          groups?: Record<string, unknown>;
          /** Whether the cohort is marked as deleted. */
          deleted?: boolean;
          /** Cohort filters returned by PostHog. */
          filters?: Record<string, unknown> | null;
          /** Query payload returned by PostHog for this cohort. */
          query?: Record<string, unknown> | null;
          /** Current cohort version. */
          version?: number | null;
          /** Pending cohort version. */
          pending_version?: number | null;
          /** Whether the cohort is being recalculated. */
          is_calculating?: boolean;
          /** Basic PostHog user. */
          created_by?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          } | null;
          /** Datetime when the cohort was created. */
          created_at?: string | null;
          /** Datetime when the cohort was last calculated. */
          last_calculation?: string | null;
          /** Datetime when person properties were last backfilled. */
          last_backfill_person_properties_at?: string | null;
          /** Number of calculation errors recorded for the cohort. */
          errors_calculating?: number;
          /** Most recent cohort calculation error message. */
          last_error_message?: string | null;
          /** Number of persons in the cohort. */
          count?: number | null;
          /** Whether the cohort is static. */
          is_static?: boolean;
          /** Cohort type classified by PostHog. */
          cohort_type?: string | null;
          /** Experiment IDs attached to the cohort. */
          experiment_set?: Array<number>;
          [key: string]: unknown;
        };
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** Mark a PostHog dashboard as deleted using the official soft-delete contract. */
    "posthog.delete_dashboard": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
        /** Whether PostHog should also delete insights that are only on this dashboard. */
        delete_insights: boolean;
      };
      output: {
        /** Whether the dashboard was marked as deleted. */
        deleted: boolean;
        /** Deleted dashboard identifier. */
        id: string;
        /** PostHog dashboard with a stable top-level connector shape. */
        dashboard: {
          /** Numeric dashboard identifier. */
          id: number;
          /** Dashboard name. */
          name?: string | null;
          /** Dashboard description. */
          description?: string;
          /** Whether the dashboard is pinned to the top of the list. */
          pinned?: boolean;
          /** Datetime when the dashboard was created. */
          created_at?: string;
          /** Basic PostHog user. */
          created_by?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          } | null;
          /** Datetime when the dashboard was last accessed. */
          last_accessed_at?: string | null;
          /** Datetime when the dashboard was last viewed. */
          last_viewed_at?: string | null;
          /** Whether the dashboard is shared. */
          is_shared?: boolean;
          /** Whether the dashboard is marked as deleted. */
          deleted?: boolean;
          /** Dashboard creation mode returned by PostHog. */
          creation_mode?: string;
          /** Dashboard filters returned by PostHog. */
          filters?: Record<string, unknown> | null;
          /** Dashboard variables returned by PostHog. */
          variables?: Record<string, unknown> | null;
          /** Custom color mapping for breakdown values. */
          breakdown_colors?: unknown;
          /** Color theme ID used for chart visualizations. */
          data_color_theme_id?: number | null;
          /** Tags attached to the dashboard. */
          tags?: Array<unknown>;
          /** Dashboard restriction level. */
          restriction_level?: number;
          /** Effective restriction level for the current user. */
          effective_restriction_level?: number;
          /** Effective privilege level for the current user. */
          effective_privilege_level?: number;
          /** Effective user access level for the dashboard. */
          user_access_level?: string | null;
          /** Dashboard access control version. */
          access_control_version?: string;
          /** Datetime when the dashboard last refreshed. */
          last_refresh?: string | null;
          /** Persisted dashboard filters. */
          persisted_filters?: Record<string, unknown> | null;
          /** Persisted dashboard variables. */
          persisted_variables?: Record<string, unknown> | null;
          /** Project or team ID this dashboard belongs to. */
          team_id?: number;
          /** Quick filter IDs associated with this dashboard. */
          quick_filter_ids?: Array<string> | null;
          /** Dashboard tile payloads returned by PostHog. */
          tiles?: Array<Record<string, unknown>> | null;
          /** Full raw payload returned by PostHog. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a PostHog event definition by ID. */
    "posthog.delete_event_definition": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Whether the delete request succeeded. */
        deleted: boolean;
        /** Deleted definition identifier. */
        id: string;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** Soft delete a PostHog feature flag by setting deleted to true. */
    "posthog.delete_feature_flag": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Whether the feature flag was marked as deleted. */
        deleted: boolean;
        /** Deleted feature flag identifier. */
        id: string;
        /** PostHog feature flag with a stable top-level connector shape. */
        feature_flag: {
          /** Feature flag identifier. */
          id: number;
          /** Feature flag key. */
          key: string;
          /** Feature flag description. */
          name: string;
          /** Whether the feature flag is active. */
          active: boolean;
          /** Whether the feature flag is marked as deleted. */
          deleted: boolean;
          /** Feature flag filters returned by PostHog. */
          filters: Record<string, unknown>;
          /** Tags attached to the feature flag. */
          tags: Array<unknown>;
          /** Full raw payload returned by PostHog. */
          raw: Record<string, unknown>;
          /** Feature flag creation datetime. */
          created_at?: string | null;
          /** Feature flag update datetime. */
          updated_at?: string | null;
          /** Basic PostHog user. */
          created_by?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          } | null;
          /** Basic PostHog user. */
          last_modified_by?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          } | null;
          /** Feature flag version. */
          version?: number | null;
          /** Whether experience continuity is enabled for the feature flag. */
          ensure_experience_continuity?: boolean | null;
          /** Associated experiment IDs. */
          experiment_set?: Array<number>;
          /** Associated experiment metadata objects. */
          experiment_set_metadata?: Array<Record<string, unknown>>;
          /** Survey metadata attached to the feature flag. */
          surveys?: Record<string, unknown> | null;
          /** Early access feature metadata attached to the flag. */
          features?: Record<string, unknown> | null;
          /** Rollback conditions for the feature flag. */
          rollback_conditions?: unknown;
          /** Whether a rollback has been performed. */
          performed_rollback?: boolean | null;
          /** Whether the current user can edit the feature flag. */
          can_edit?: boolean | null;
          /** Computed feature flag status. */
          status?: string | null;
          /** Where the feature flag is evaluated. */
          evaluation_runtime?: string | null;
          /** Identifier used for bucketing users. */
          bucketing_identifier?: string | null;
          /** Last time the feature flag was evaluated. */
          last_called_at?: string | null;
          /** Effective access level for the current user. */
          user_access_level?: string | null;
          /** Feature flag rollout percentage, when present. */
          rollout_percentage?: number | null;
          /** Evaluation contexts attached to the feature flag. */
          evaluation_contexts?: Array<string>;
          /** Usage dashboard identifier. */
          usage_dashboard?: number | null;
          /** Analytics dashboard identifiers attached to the feature flag. */
          analytics_dashboards?: Array<number>;
          /** Whether analytics have been enriched. */
          has_enriched_analytics?: boolean | null;
          /** Whether the flag is a remote configuration. */
          is_remote_configuration?: boolean | null;
          /** Whether the flag has encrypted payloads. */
          has_encrypted_payloads?: boolean | null;
          /** Whether the flag is used in replay settings. */
          is_used_in_replay_settings?: boolean | null;
          [key: string]: unknown;
        };
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a saved PostHog insight by ID. */
    "posthog.delete_insight": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Whether the insight was deleted. */
        deleted: boolean;
        /** Deleted insight identifier. */
        id: string;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a PostHog property definition by ID. */
    "posthog.delete_property_definition": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Whether the delete request succeeded. */
        deleted: boolean;
        /** Deleted definition identifier. */
        id: string;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a PostHog annotation by ID. */
    "posthog.get_annotation": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Numeric annotation identifier. */
        id: number;
        /** Annotation text shown on charts. */
        content?: string | null;
        /** ISO 8601 timestamp when this annotation happened. */
        date_marker?: string | null;
        /** Annotation creation type returned by PostHog. */
        creation_type?: string;
        /** Dashboard tile or insight identifier attached to the annotation. */
        dashboard_item?: number | null;
        /** Dashboard identifier attached to the annotation. */
        dashboard_id?: number | null;
        /** Dashboard name attached to the annotation. */
        dashboard_name?: string | null;
        /** Insight short ID attached to the annotation. */
        insight_short_id?: string | null;
        /** Insight name attached to the annotation. */
        insight_name?: string | null;
        /** Derived insight name attached to the annotation. */
        insight_derived_name?: string | null;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Datetime when the annotation was created. */
        created_at?: string | null;
        /** Datetime when the annotation was updated. */
        updated_at?: string;
        /** Whether the annotation is marked as deleted. */
        deleted?: boolean;
        /** Annotation visibility scope. */
        scope?: string;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve the status and available result payload for a PostHog async query. */
    "posthog.get_async_query_status": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /**
         * Asynchronous query identifier returned by PostHog.
         * @minLength 1
         */
        query_id: string;
      };
      output: {
        /** Asynchronous query identifier. */
        id?: string;
        /** Object payload accepted or returned by PostHog. */
        query_status?: Record<string, unknown>;
        /** Whether the asynchronous query has completed. */
        complete?: boolean;
        /** Rows returned by the query when available. */
        results?: Array<unknown>;
        /** Query error payload returned by PostHog. */
        error?: unknown;
        /** Full raw payload returned by PostHog. */
        raw?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a PostHog cohort by ID. */
    "posthog.get_cohort": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Numeric cohort identifier. */
        id: number;
        /** Cohort name. */
        name?: string | null;
        /** Description for the cohort. */
        description?: string;
        /** Raw group configuration returned by PostHog. */
        groups?: Record<string, unknown>;
        /** Whether the cohort is marked as deleted. */
        deleted?: boolean;
        /** Cohort filters returned by PostHog. */
        filters?: Record<string, unknown> | null;
        /** Query payload returned by PostHog for this cohort. */
        query?: Record<string, unknown> | null;
        /** Current cohort version. */
        version?: number | null;
        /** Pending cohort version. */
        pending_version?: number | null;
        /** Whether the cohort is being recalculated. */
        is_calculating?: boolean;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Datetime when the cohort was created. */
        created_at?: string | null;
        /** Datetime when the cohort was last calculated. */
        last_calculation?: string | null;
        /** Datetime when person properties were last backfilled. */
        last_backfill_person_properties_at?: string | null;
        /** Number of calculation errors recorded for the cohort. */
        errors_calculating?: number;
        /** Most recent cohort calculation error message. */
        last_error_message?: string | null;
        /** Number of persons in the cohort. */
        count?: number | null;
        /** Whether the cohort is static. */
        is_static?: boolean;
        /** Cohort type classified by PostHog. */
        cohort_type?: string | null;
        /** Experiment IDs attached to the cohort. */
        experiment_set?: Array<number>;
        [key: string]: unknown;
      };
    };
    /** Get the raw calculation history payload for a PostHog cohort. */
    "posthog.get_cohort_calculation_history": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** List persons that belong to a PostHog cohort. */
    "posthog.get_cohort_persons": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
        /**
         * Number of results to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Initial index from which to return the results.
         * @minimum 0
         */
        offset?: number;
        /** Response format requested from PostHog. */
        format?: "json";
      };
      output: {
        /** URL for the next page of results, or null when there is no next page. */
        next: string | null;
        /** URL for the previous page of results, or null when there is no previous page. */
        previous: string | null;
        /** Persons returned by PostHog for this cohort. */
        results: Array<{
          /** Result type returned by PostHog. */
          type?: string;
          /** Person identifier returned by PostHog. */
          id?: string;
          /** Person UUID returned by PostHog. */
          uuid?: string;
          /** Distinct IDs associated with this person. */
          distinct_ids?: Array<string>;
          /** Person properties returned by PostHog. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the current user associated with the PostHog personal API key. */
    "posthog.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Numeric user identifier. */
        id: number;
        /** User UUID. */
        uuid: string;
        /** Current distinct ID for the user. */
        distinct_id?: string | null;
        /** User first name. */
        first_name?: string;
        /** User last name. */
        last_name?: string;
        /** User email address. */
        email: string;
        /** Pending email address awaiting verification. */
        pending_email?: string | null;
        /** Whether the email address is verified. */
        is_email_verified?: boolean | null;
        /** Whether the user has staff access. */
        is_staff?: boolean;
        /** Declared role for the user within the organization. */
        role_at_organization?: string;
        /** Datetime when the user joined PostHog. */
        date_joined?: string;
        /** PostHog current team summary. */
        team?: {
          /** Numeric team identifier. */
          id: number;
          /** Team UUID. */
          uuid?: string;
          /** Owning organization UUID. */
          organization?: string;
          /** Numeric project identifier. */
          project_id?: number;
          /** Team or project name. */
          name?: string;
          /** Project API token. */
          api_token?: string;
          /** Project timezone. */
          timezone?: string;
          [key: string]: unknown;
        } | null;
        /** PostHog organization summary. */
        organization?: {
          /** Organization UUID. */
          id: string;
          /** Organization name. */
          name: string;
          /** Organization slug. */
          slug?: string;
          /** Membership level for the current user in this organization. */
          membership_level?: number | null;
          [key: string]: unknown;
        } | null;
        /** Organizations accessible to the user. */
        organizations?: Array<{
          /** Organization UUID. */
          id: string;
          /** Organization name. */
          name: string;
          /** Organization slug. */
          slug?: string;
          /** Membership level for the current user in this organization. */
          membership_level?: number | null;
          [key: string]: unknown;
        }>;
        /** User hedgehog configuration returned by PostHog. */
        hedgehog_config?: Record<string, unknown> | null;
        /** Notification settings for the user. */
        notification_settings?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a PostHog dashboard by ID with a stable top-level connector shape. */
    "posthog.get_dashboard": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
        /** Object payload accepted or returned by PostHog. */
        filters_override?: Record<string, unknown> | null;
        /** Dashboard variable overrides keyed by variable ID. */
        variables_override?: Record<string, Record<string, unknown>> | null;
      };
      output: {
        /** Numeric dashboard identifier. */
        id: number;
        /** Dashboard name. */
        name?: string | null;
        /** Dashboard description. */
        description?: string;
        /** Whether the dashboard is pinned to the top of the list. */
        pinned?: boolean;
        /** Datetime when the dashboard was created. */
        created_at?: string;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Datetime when the dashboard was last accessed. */
        last_accessed_at?: string | null;
        /** Datetime when the dashboard was last viewed. */
        last_viewed_at?: string | null;
        /** Whether the dashboard is shared. */
        is_shared?: boolean;
        /** Whether the dashboard is marked as deleted. */
        deleted?: boolean;
        /** Dashboard creation mode returned by PostHog. */
        creation_mode?: string;
        /** Dashboard filters returned by PostHog. */
        filters?: Record<string, unknown> | null;
        /** Dashboard variables returned by PostHog. */
        variables?: Record<string, unknown> | null;
        /** Custom color mapping for breakdown values. */
        breakdown_colors?: unknown;
        /** Color theme ID used for chart visualizations. */
        data_color_theme_id?: number | null;
        /** Tags attached to the dashboard. */
        tags?: Array<unknown>;
        /** Dashboard restriction level. */
        restriction_level?: number;
        /** Effective restriction level for the current user. */
        effective_restriction_level?: number;
        /** Effective privilege level for the current user. */
        effective_privilege_level?: number;
        /** Effective user access level for the dashboard. */
        user_access_level?: string | null;
        /** Dashboard access control version. */
        access_control_version?: string;
        /** Datetime when the dashboard last refreshed. */
        last_refresh?: string | null;
        /** Persisted dashboard filters. */
        persisted_filters?: Record<string, unknown> | null;
        /** Persisted dashboard variables. */
        persisted_variables?: Record<string, unknown> | null;
        /** Project or team ID this dashboard belongs to. */
        team_id?: number;
        /** Quick filter IDs associated with this dashboard. */
        quick_filter_ids?: Array<string> | null;
        /** Dashboard tile payloads returned by PostHog. */
        tiles?: Array<Record<string, unknown>> | null;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a PostHog event definition by ID. */
    "posthog.get_event_definition": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Event definition UUID. */
        id: string;
        /** Event definition name. */
        name: string;
        /** Owner user ID. */
        owner?: number | null;
        /** Description for the event definition. */
        description?: string | null;
        /** Tags attached to the event definition. */
        tags?: Array<unknown>;
        /** Creation datetime for the event definition. */
        created_at?: string | null;
        /** Update datetime for the event definition. */
        updated_at?: string;
        /** Basic PostHog user. */
        updated_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Datetime when the event was last seen. */
        last_seen_at?: string | null;
        /** Datetime of the last upstream update. */
        last_updated_at?: string;
        /** Whether the event definition is verified. */
        verified?: boolean;
        /** Datetime when the event definition was verified. */
        verified_at?: string | null;
        /** Basic PostHog user. */
        verified_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Whether the event definition is hidden. */
        hidden?: boolean | null;
        /** Enforcement mode for this event definition. */
        enforcement_mode?: string;
        /** Primary property displayed alongside this event. */
        primary_property?: string | null;
        /** Whether the definition represents an action. */
        is_action?: boolean;
        /** Action ID if this definition is an action. */
        action_id?: number;
        /** Whether PostHog is calculating related metadata. */
        is_calculating?: boolean;
        /** Last calculation datetime. */
        last_calculated_at?: string;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Whether new events post to Slack. */
        post_to_slack?: boolean;
        /** Default columns configured for this event definition. */
        default_columns?: Array<string>;
        /** Media preview URLs returned by PostHog. */
        media_preview_urls?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get a PostHog event definition by exact event name. */
    "posthog.get_event_definition_by_name": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /**
         * Exact event name to look up.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Event definition UUID. */
        id: string;
        /** Event definition name. */
        name: string;
        /** Owner user ID. */
        owner?: number | null;
        /** Description for the event definition. */
        description?: string | null;
        /** Tags attached to the event definition. */
        tags?: Array<unknown>;
        /** Creation datetime for the event definition. */
        created_at?: string | null;
        /** Update datetime for the event definition. */
        updated_at?: string;
        /** Basic PostHog user. */
        updated_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Datetime when the event was last seen. */
        last_seen_at?: string | null;
        /** Datetime of the last upstream update. */
        last_updated_at?: string;
        /** Whether the event definition is verified. */
        verified?: boolean;
        /** Datetime when the event definition was verified. */
        verified_at?: string | null;
        /** Basic PostHog user. */
        verified_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Whether the event definition is hidden. */
        hidden?: boolean | null;
        /** Enforcement mode for this event definition. */
        enforcement_mode?: string;
        /** Primary property displayed alongside this event. */
        primary_property?: string | null;
        /** Whether the definition represents an action. */
        is_action?: boolean;
        /** Action ID if this definition is an action. */
        action_id?: number;
        /** Whether PostHog is calculating related metadata. */
        is_calculating?: boolean;
        /** Last calculation datetime. */
        last_calculated_at?: string;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Whether new events post to Slack. */
        post_to_slack?: boolean;
        /** Default columns configured for this event definition. */
        default_columns?: Array<string>;
        /** Media preview URLs returned by PostHog. */
        media_preview_urls?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get primary properties configured for PostHog event definitions. */
    "posthog.get_event_definition_primary_properties": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /**
         * Event names to restrict the response to.
         * @minItems 1
         */
        names?: Array<string>;
      };
      output: {
        /** Primary properties keyed by event name. */
        results: Record<string, unknown>;
        /** Full raw primary properties payload returned by PostHog. */
        raw: unknown;
      };
    };
    /** Get a PostHog feature flag by ID. */
    "posthog.get_feature_flag": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Feature flag identifier. */
        id: number;
        /** Feature flag key. */
        key: string;
        /** Feature flag description. */
        name: string;
        /** Whether the feature flag is active. */
        active: boolean;
        /** Whether the feature flag is marked as deleted. */
        deleted: boolean;
        /** Feature flag filters returned by PostHog. */
        filters: Record<string, unknown>;
        /** Tags attached to the feature flag. */
        tags: Array<unknown>;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
        /** Feature flag creation datetime. */
        created_at?: string | null;
        /** Feature flag update datetime. */
        updated_at?: string | null;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Basic PostHog user. */
        last_modified_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Feature flag version. */
        version?: number | null;
        /** Whether experience continuity is enabled for the feature flag. */
        ensure_experience_continuity?: boolean | null;
        /** Associated experiment IDs. */
        experiment_set?: Array<number>;
        /** Associated experiment metadata objects. */
        experiment_set_metadata?: Array<Record<string, unknown>>;
        /** Survey metadata attached to the feature flag. */
        surveys?: Record<string, unknown> | null;
        /** Early access feature metadata attached to the flag. */
        features?: Record<string, unknown> | null;
        /** Rollback conditions for the feature flag. */
        rollback_conditions?: unknown;
        /** Whether a rollback has been performed. */
        performed_rollback?: boolean | null;
        /** Whether the current user can edit the feature flag. */
        can_edit?: boolean | null;
        /** Computed feature flag status. */
        status?: string | null;
        /** Where the feature flag is evaluated. */
        evaluation_runtime?: string | null;
        /** Identifier used for bucketing users. */
        bucketing_identifier?: string | null;
        /** Last time the feature flag was evaluated. */
        last_called_at?: string | null;
        /** Effective access level for the current user. */
        user_access_level?: string | null;
        /** Feature flag rollout percentage, when present. */
        rollout_percentage?: number | null;
        /** Evaluation contexts attached to the feature flag. */
        evaluation_contexts?: Array<string>;
        /** Usage dashboard identifier. */
        usage_dashboard?: number | null;
        /** Analytics dashboard identifiers attached to the feature flag. */
        analytics_dashboards?: Array<number>;
        /** Whether analytics have been enriched. */
        has_enriched_analytics?: boolean | null;
        /** Whether the flag is a remote configuration. */
        is_remote_configuration?: boolean | null;
        /** Whether the flag has encrypted payloads. */
        has_encrypted_payloads?: boolean | null;
        /** Whether the flag is used in replay settings. */
        is_used_in_replay_settings?: boolean | null;
        [key: string]: unknown;
      };
    };
    /** List the feature flags that depend on a PostHog feature flag. */
    "posthog.get_feature_flag_dependent_flags": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Dependent feature flags returned by PostHog. */
        results: Array<{
          /** Feature flag identifier. */
          id: number;
          /** Feature flag key. */
          key: string;
          /** Feature flag name. */
          name: string;
          [key: string]: unknown;
        }>;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the computed status for a PostHog feature flag. */
    "posthog.get_feature_flag_status": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Computed feature flag status. */
        status: string;
        /** Human-readable explanation of the feature flag status. */
        reason: string;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
        /** Whether the feature flag is active. */
        active?: boolean | null;
        /** Whether the feature flag is deleted. */
        deleted?: boolean | null;
        /** Last time the feature flag was evaluated. */
        last_called_at?: string | null;
        /** HTTP status code returned by the status endpoint. */
        status_code?: number | null;
        [key: string]: unknown;
      };
    };
    /** Get the local evaluation payload for PostHog feature flags. */
    "posthog.get_feature_flags_local_evaluation": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Whether to include cohorts in the response. */
        send_cohorts?: boolean | null;
      };
      output: {
        /** Feature flags returned by the local evaluation endpoint. */
        flags: Array<{
          /** Feature flag identifier. */
          id: number;
          /** Owning team identifier. */
          team_id: number;
          /** Feature flag description. */
          name: string;
          /** Feature flag key. */
          key: string;
          /** Feature flag filters returned by PostHog. */
          filters: Record<string, unknown>;
          /** Whether the feature flag is marked as deleted. */
          deleted: boolean;
          /** Whether the feature flag is active. */
          active: boolean;
          /** Evaluation contexts attached to the feature flag. */
          evaluation_contexts: Array<string>;
          /** Full raw payload returned by PostHog. */
          raw: Record<string, unknown>;
          /** Whether experience continuity is enabled for the feature flag. */
          ensure_experience_continuity?: boolean | null;
          /** Feature flag version. */
          version?: number | null;
          /** Where the feature flag is evaluated. */
          evaluation_runtime?: string | null;
          /** Identifier used for bucketing users. */
          bucketing_identifier?: string | null;
          [key: string]: unknown;
        }>;
        /** Group type mappings returned by PostHog. */
        group_type_mapping: Record<string, string>;
        /** Cohorts returned by PostHog for local evaluation. */
        cohorts: Record<string, unknown>;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a PostHog insight by ID with a stable top-level connector shape. */
    "posthog.get_insight": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
        /** Dashboard ID whose filters should override the insight context. */
        from_dashboard?: number;
        /** Refresh mode used by the PostHog API. */
        refresh?: "async" | "async_except_on_cache_miss" | "blocking" | "force_async" | "force_blocking" | "force_cache" | "lazy_async";
      };
      output: {
        /** Numeric insight identifier. */
        id: number;
        /** Short insight identifier. */
        short_id?: string;
        /** Insight name. */
        name?: string | null;
        /** Derived insight name. */
        derived_name?: string | null;
        /** Insight query definition returned by PostHog. */
        query?: Record<string, unknown> | null;
        /** Display order for the insight. */
        order?: number | null;
        /** Whether the insight is marked as deleted. */
        deleted?: boolean;
        /** Dashboard IDs referencing the insight. */
        dashboards?: Array<number>;
        /** Dashboard tile summaries referencing the insight. */
        dashboard_tiles?: Array<Record<string, unknown>>;
        /** Datetime when the insight results were last refreshed. */
        last_refresh?: string | null;
        /** Target age timestamp for cached insight results. */
        cache_target_age?: string | null;
        /** Earliest datetime when a client may refresh the insight. */
        next_allowed_client_refresh?: string | null;
        /** Insight result payload returned by PostHog. */
        result?: unknown;
        /** Whether the insight has more result rows. */
        hasMore?: boolean | null;
        /** Column names for the result. */
        columns?: Array<string> | null;
        /** Datetime when the insight was created. */
        created_at?: string | null;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Insight description. */
        description?: string | null;
        /** Datetime when the insight was updated. */
        updated_at?: string;
        /** Tags attached to the insight. */
        tags?: Array<unknown>;
        /** Whether the insight is favorited. */
        favorited?: boolean;
        /** Datetime when the insight was last modified. */
        last_modified_at?: string;
        /** Basic PostHog user. */
        last_modified_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Whether the insight is a sample insight. */
        is_sample?: boolean;
        /** Effective restriction level for the current user. */
        effective_restriction_level?: number;
        /** Effective privilege level for the current user. */
        effective_privilege_level?: number;
        /** Effective user access level for the insight. */
        user_access_level?: string | null;
        /** Timezone used to display the insight. */
        timezone?: string | null;
        /** Whether the returned insight result is cached. */
        is_cached?: boolean;
        /** Query status returned with the insight. */
        query_status?: Record<string, unknown> | null;
        /** Generated HogQL query for the insight. */
        hogql?: string | null;
        /** Types returned for the insight. */
        types?: Array<unknown> | null;
        /** Resolved date range returned by PostHog. */
        resolved_date_range?: {
          /** Resolved start datetime for the date range. */
          date_from?: string;
          /** Resolved end datetime for the date range. */
          date_to?: string;
          [key: string]: unknown;
        } | null;
        /** Alerts attached to the insight. */
        alerts?: Array<unknown>;
        /** Datetime when the insight was last viewed. */
        last_viewed_at?: string | null;
        /** Full raw insight payload returned by PostHog. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a PostHog project from the current or specified organization. */
    "posthog.get_project": {
      input: {
        /** Organization ID. When omitted, the provider falls back to the current organization from the connected user. */
        organization_id?: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Numeric project identifier. */
        id: number;
        /** Owning organization UUID. */
        organization: string;
        /** Project UUID. */
        uuid: string;
        /** Project name. */
        name: string;
        /** Project API token. */
        api_token?: string;
        /** Project creation datetime. */
        created_at?: string;
        /** Project update datetime. */
        updated_at?: string;
        /** Description configured for the product. */
        product_description?: string | null;
        /** Project timezone. */
        timezone?: string;
        /** Whether the project is a demo project. */
        is_demo?: boolean;
        /** Whether the project has ingested at least one event. */
        ingested_event?: boolean;
        /** Whether access control is enabled. */
        access_control?: boolean;
        /** Configured application URLs. */
        app_urls?: Array<string | null>;
        /** Configured group types. */
        group_types?: Array<Record<string, unknown>>;
        /** Product intent summaries for the project. */
        product_intents?: Array<Record<string, unknown>>;
        /** Project secret API token when available. */
        secret_api_token?: string | null;
        /** Project secret API token backup when available. */
        secret_api_token_backup?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a PostHog property definition by ID. */
    "posthog.get_property_definition": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Property definition UUID. */
        id: string;
        /** Property name. */
        name: string;
        /** Description for the property definition. */
        description?: string | null;
        /** Tags attached to the property definition. */
        tags?: Array<unknown>;
        /** Whether the property is numerical. */
        is_numerical: boolean;
        /** Datetime when the property definition was updated. */
        updated_at: string;
        /** Basic PostHog user. */
        updated_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Whether the property was seen on the filtered events. */
        is_seen_on_filtered_events?: boolean | null;
        /** Property type inferred by PostHog. */
        property_type?: string | null;
        /** Whether the property definition is verified. */
        verified?: boolean;
        /** Datetime when the property definition was verified. */
        verified_at?: string | null;
        /** Basic PostHog user. */
        verified_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Whether the property definition is hidden. */
        hidden?: boolean | null;
        [key: string]: unknown;
      };
    };
    /** List annotations for a PostHog project. */
    "posthog.list_annotations": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /**
         * Number of results to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Initial index from which to return the results.
         * @minimum 0
         */
        offset?: number;
        /** Search term used to match annotations. */
        search?: string;
      };
      output: {
        /** Total number of results available. */
        count: number;
        /** URL for the next page of results, or null when there is no next page. */
        next: string | null;
        /** URL for the previous page of results, or null when there is no previous page. */
        previous: string | null;
        /** Annotations returned by PostHog. */
        results: Array<{
          /** Numeric annotation identifier. */
          id: number;
          /** Annotation text shown on charts. */
          content?: string | null;
          /** ISO 8601 timestamp when this annotation happened. */
          date_marker?: string | null;
          /** Annotation creation type returned by PostHog. */
          creation_type?: string;
          /** Dashboard tile or insight identifier attached to the annotation. */
          dashboard_item?: number | null;
          /** Dashboard identifier attached to the annotation. */
          dashboard_id?: number | null;
          /** Dashboard name attached to the annotation. */
          dashboard_name?: string | null;
          /** Insight short ID attached to the annotation. */
          insight_short_id?: string | null;
          /** Insight name attached to the annotation. */
          insight_name?: string | null;
          /** Derived insight name attached to the annotation. */
          insight_derived_name?: string | null;
          /** Basic PostHog user. */
          created_by?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          } | null;
          /** Datetime when the annotation was created. */
          created_at?: string | null;
          /** Datetime when the annotation was updated. */
          updated_at?: string;
          /** Whether the annotation is marked as deleted. */
          deleted?: boolean;
          /** Annotation visibility scope. */
          scope?: string;
          /** Full raw payload returned by PostHog. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** List cohorts for a PostHog project. */
    "posthog.list_cohorts": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /**
         * Number of results to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Initial index from which to return the results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Total number of results available. */
        count: number;
        /** URL for the next page of results, or null when there is no next page. */
        next: string | null;
        /** URL for the previous page of results, or null when there is no previous page. */
        previous: string | null;
        /** Cohorts returned by PostHog. */
        results: Array<{
          /** Numeric cohort identifier. */
          id: number;
          /** Cohort name. */
          name?: string | null;
          /** Description for the cohort. */
          description?: string;
          /** Raw group configuration returned by PostHog. */
          groups?: Record<string, unknown>;
          /** Whether the cohort is marked as deleted. */
          deleted?: boolean;
          /** Cohort filters returned by PostHog. */
          filters?: Record<string, unknown> | null;
          /** Query payload returned by PostHog for this cohort. */
          query?: Record<string, unknown> | null;
          /** Current cohort version. */
          version?: number | null;
          /** Pending cohort version. */
          pending_version?: number | null;
          /** Whether the cohort is being recalculated. */
          is_calculating?: boolean;
          /** Basic PostHog user. */
          created_by?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          } | null;
          /** Datetime when the cohort was created. */
          created_at?: string | null;
          /** Datetime when the cohort was last calculated. */
          last_calculation?: string | null;
          /** Datetime when person properties were last backfilled. */
          last_backfill_person_properties_at?: string | null;
          /** Number of calculation errors recorded for the cohort. */
          errors_calculating?: number;
          /** Most recent cohort calculation error message. */
          last_error_message?: string | null;
          /** Number of persons in the cohort. */
          count?: number | null;
          /** Whether the cohort is static. */
          is_static?: boolean;
          /** Cohort type classified by PostHog. */
          cohort_type?: string | null;
          /** Experiment IDs attached to the cohort. */
          experiment_set?: Array<number>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List collaborators for a PostHog dashboard. */
    "posthog.list_dashboard_collaborators": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        dashboard_id: string | number;
      };
      output: {
        /** Dashboard collaborators returned by PostHog. */
        results: Array<{
          /** Dashboard collaborator UUID. */
          id?: string;
          /** Dashboard identifier. */
          dashboard_id?: number;
          /** Basic PostHog user. */
          user?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          };
          /** Restriction level granted to the collaborator. */
          level?: number;
          /** Datetime when the collaborator was added. */
          added_at?: string;
          /** Datetime when the collaborator was updated. */
          updated_at?: string;
          /** Full raw payload returned by PostHog. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Full raw collaborators payload returned by PostHog. */
        raw: unknown;
      };
    };
    /** List dashboards for a PostHog project. */
    "posthog.list_dashboards": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /**
         * Number of results to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Initial index from which to return the results.
         * @minimum 0
         */
        offset?: number;
        /**
         * Search term used to match dashboard names and descriptions.
         * @maxLength 200
         */
        search?: string;
      };
      output: {
        /** Total number of results available. */
        count: number;
        /** URL for the next page of results, or null when there is no next page. */
        next: string | null;
        /** URL for the previous page of results, or null when there is no previous page. */
        previous: string | null;
        /** Dashboards returned by PostHog. */
        results: Array<{
          /** Numeric dashboard identifier. */
          id: number;
          /** Dashboard name. */
          name?: string | null;
          /** Dashboard description. */
          description?: string;
          /** Whether the dashboard is pinned to the top of the list. */
          pinned?: boolean;
          /** Datetime when the dashboard was created. */
          created_at?: string;
          /** Basic PostHog user. */
          created_by?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          } | null;
          /** Datetime when the dashboard was last accessed. */
          last_accessed_at?: string | null;
          /** Datetime when the dashboard was last viewed. */
          last_viewed_at?: string | null;
          /** Whether the dashboard is shared. */
          is_shared?: boolean;
          /** Whether the dashboard is marked as deleted. */
          deleted?: boolean;
          /** Dashboard creation mode returned by PostHog. */
          creation_mode?: string;
          /** Tags attached to the dashboard. */
          tags?: Array<unknown>;
          /** Dashboard restriction level. */
          restriction_level?: number;
          /** Effective restriction level for the current user. */
          effective_restriction_level?: number;
          /** Effective privilege level for the current user. */
          effective_privilege_level?: number;
          /** Effective user access level for the dashboard. */
          user_access_level?: string | null;
          /** Dashboard access control version. */
          access_control_version?: string;
          /** Datetime when the dashboard last refreshed. */
          last_refresh?: string | null;
          /** Project or team ID this dashboard belongs to. */
          team_id?: number;
          [key: string]: unknown;
        }>;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** List event definitions for a PostHog project. */
    "posthog.list_event_definitions": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /**
         * Number of results to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Initial index from which to return the results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Total number of results available. */
        count: number;
        /** URL for the next page of results, or null when there is no next page. */
        next: string | null;
        /** URL for the previous page of results, or null when there is no previous page. */
        previous: string | null;
        /** Event definitions returned by PostHog. */
        results: Array<{
          /** Event definition UUID. */
          id: string;
          /** Event definition name. */
          name: string;
          /** Owner user ID. */
          owner?: number | null;
          /** Description for the event definition. */
          description?: string | null;
          /** Tags attached to the event definition. */
          tags?: Array<unknown>;
          /** Creation datetime for the event definition. */
          created_at?: string | null;
          /** Update datetime for the event definition. */
          updated_at?: string;
          /** Basic PostHog user. */
          updated_by?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          } | null;
          /** Datetime when the event was last seen. */
          last_seen_at?: string | null;
          /** Datetime of the last upstream update. */
          last_updated_at?: string;
          /** Whether the event definition is verified. */
          verified?: boolean;
          /** Datetime when the event definition was verified. */
          verified_at?: string | null;
          /** Basic PostHog user. */
          verified_by?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          } | null;
          /** Whether the event definition is hidden. */
          hidden?: boolean | null;
          /** Enforcement mode for this event definition. */
          enforcement_mode?: string;
          /** Primary property displayed alongside this event. */
          primary_property?: string | null;
          /** Whether the definition represents an action. */
          is_action?: boolean;
          /** Action ID if this definition is an action. */
          action_id?: number;
          /** Whether PostHog is calculating related metadata. */
          is_calculating?: boolean;
          /** Last calculation datetime. */
          last_calculated_at?: string;
          /** Basic PostHog user. */
          created_by?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          } | null;
          /** Whether new events post to Slack. */
          post_to_slack?: boolean;
          /** Default columns configured for this event definition. */
          default_columns?: Array<string>;
          /** Media preview URLs returned by PostHog. */
          media_preview_urls?: Array<string>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List feature flags for a PostHog project. */
    "posthog.list_feature_flags": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Filter feature flags by active state. */
        active?: "STALE" | "false" | "true";
        /** User ID that initially created the feature flag. */
        created_by_id?: string;
        /** Filter feature flags by evaluation runtime. */
        evaluation_runtime?: "both" | "client" | "server";
        /** JSON-encoded list of feature flag keys to exclude. */
        excluded_properties?: string;
        /** Filter feature flags by whether they have evaluation contexts. */
        has_evaluation_contexts?: "false" | "true";
        /**
         * Number of results to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Initial index from which to return the results.
         * @minimum 0
         */
        offset?: number;
        /** Search term used to match feature flag keys or names. */
        search?: string;
        /** JSON-encoded list of feature flag tags to filter by. */
        tags?: string;
        /** Filter feature flags by type. */
        type?: "boolean" | "experiment" | "multivariant" | "remote_config";
      };
      output: {
        /** Total number of results available. */
        count: number;
        /** URL for the next page of results, or null when there is no next page. */
        next: string | null;
        /** URL for the previous page of results, or null when there is no previous page. */
        previous: string | null;
        /** Feature flags returned by PostHog. */
        results: Array<{
          /** Feature flag identifier. */
          id: number;
          /** Feature flag key. */
          key: string;
          /** Feature flag description. */
          name: string;
          /** Whether the feature flag is active. */
          active: boolean;
          /** Whether the feature flag is marked as deleted. */
          deleted: boolean;
          /** Feature flag filters returned by PostHog. */
          filters: Record<string, unknown>;
          /** Tags attached to the feature flag. */
          tags: Array<unknown>;
          /** Full raw payload returned by PostHog. */
          raw: Record<string, unknown>;
          /** Feature flag creation datetime. */
          created_at?: string | null;
          /** Feature flag update datetime. */
          updated_at?: string | null;
          /** Basic PostHog user. */
          created_by?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          } | null;
          /** Basic PostHog user. */
          last_modified_by?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          } | null;
          /** Feature flag version. */
          version?: number | null;
          /** Whether experience continuity is enabled for the feature flag. */
          ensure_experience_continuity?: boolean | null;
          /** Associated experiment IDs. */
          experiment_set?: Array<number>;
          /** Associated experiment metadata objects. */
          experiment_set_metadata?: Array<Record<string, unknown>>;
          /** Survey metadata attached to the feature flag. */
          surveys?: Record<string, unknown> | null;
          /** Early access feature metadata attached to the flag. */
          features?: Record<string, unknown> | null;
          /** Rollback conditions for the feature flag. */
          rollback_conditions?: unknown;
          /** Whether a rollback has been performed. */
          performed_rollback?: boolean | null;
          /** Whether the current user can edit the feature flag. */
          can_edit?: boolean | null;
          /** Computed feature flag status. */
          status?: string | null;
          /** Where the feature flag is evaluated. */
          evaluation_runtime?: string | null;
          /** Identifier used for bucketing users. */
          bucketing_identifier?: string | null;
          /** Last time the feature flag was evaluated. */
          last_called_at?: string | null;
          /** Effective access level for the current user. */
          user_access_level?: string | null;
          /** Feature flag rollout percentage, when present. */
          rollout_percentage?: number | null;
          /** Evaluation contexts attached to the feature flag. */
          evaluation_contexts?: Array<string>;
          /** Usage dashboard identifier. */
          usage_dashboard?: number | null;
          /** Analytics dashboard identifiers attached to the feature flag. */
          analytics_dashboards?: Array<number>;
          /** Whether analytics have been enriched. */
          has_enriched_analytics?: boolean | null;
          /** Whether the flag is a remote configuration. */
          is_remote_configuration?: boolean | null;
          /** Whether the flag has encrypted payloads. */
          has_encrypted_payloads?: boolean | null;
          /** Whether the flag is used in replay settings. */
          is_used_in_replay_settings?: boolean | null;
          [key: string]: unknown;
        }>;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** List insights for a PostHog project. */
    "posthog.list_insights": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Whether to return basic insight metadata without results. */
        basic?: boolean;
        /**
         * Number of results to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Initial index from which to return the results.
         * @minimum 0
         */
        offset?: number;
        /** Refresh mode used by the PostHog API. */
        refresh?: "async" | "async_except_on_cache_miss" | "blocking" | "force_async" | "force_blocking" | "force_cache" | "lazy_async";
        /** Short insight identifier to filter by. */
        short_id?: string;
      };
      output: {
        /** Total number of results available. */
        count: number;
        /** URL for the next page of results, or null when there is no next page. */
        next: string | null;
        /** URL for the previous page of results, or null when there is no previous page. */
        previous: string | null;
        /** Insights returned by PostHog. */
        results: Array<{
          /** Numeric insight identifier. */
          id: number;
          /** Short insight identifier. */
          short_id?: string;
          /** Insight name. */
          name?: string | null;
          /** Derived insight name. */
          derived_name?: string | null;
          /** Insight query definition returned by PostHog. */
          query?: Record<string, unknown> | null;
          /** Display order for the insight. */
          order?: number | null;
          /** Whether the insight is marked as deleted. */
          deleted?: boolean;
          /** Dashboard IDs referencing the insight. */
          dashboards?: Array<number>;
          /** Dashboard tile summaries referencing the insight. */
          dashboard_tiles?: Array<Record<string, unknown>>;
          /** Datetime when the insight results were last refreshed. */
          last_refresh?: string | null;
          /** Target age timestamp for cached insight results. */
          cache_target_age?: string | null;
          /** Earliest datetime when a client may refresh the insight. */
          next_allowed_client_refresh?: string | null;
          /** Insight result payload returned by PostHog. */
          result?: unknown;
          /** Whether the insight has more result rows. */
          hasMore?: boolean | null;
          /** Column names for the result. */
          columns?: Array<string> | null;
          /** Datetime when the insight was created. */
          created_at?: string | null;
          /** Basic PostHog user. */
          created_by?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          } | null;
          /** Insight description. */
          description?: string | null;
          /** Datetime when the insight was updated. */
          updated_at?: string;
          /** Tags attached to the insight. */
          tags?: Array<unknown>;
          /** Whether the insight is favorited. */
          favorited?: boolean;
          /** Datetime when the insight was last modified. */
          last_modified_at?: string;
          /** Basic PostHog user. */
          last_modified_by?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          } | null;
          /** Whether the insight is a sample insight. */
          is_sample?: boolean;
          /** Effective restriction level for the current user. */
          effective_restriction_level?: number;
          /** Effective privilege level for the current user. */
          effective_privilege_level?: number;
          /** Effective user access level for the insight. */
          user_access_level?: string | null;
          /** Timezone used to display the insight. */
          timezone?: string | null;
          /** Whether the returned insight result is cached. */
          is_cached?: boolean;
          /** Query status returned with the insight. */
          query_status?: Record<string, unknown> | null;
          /** Generated HogQL query for the insight. */
          hogql?: string | null;
          /** Types returned for the insight. */
          types?: Array<unknown> | null;
          /** Resolved date range returned by PostHog. */
          resolved_date_range?: {
            /** Resolved start datetime for the date range. */
            date_from?: string;
            /** Resolved end datetime for the date range. */
            date_to?: string;
            [key: string]: unknown;
          } | null;
          /** Alerts attached to the insight. */
          alerts?: Array<unknown>;
          /** Datetime when the insight was last viewed. */
          last_viewed_at?: string | null;
          /** Full raw insight payload returned by PostHog. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Full raw insight list payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** List PostHog projects for the current or specified organization. */
    "posthog.list_projects": {
      input: {
        /** Organization ID. When omitted, the provider falls back to the current organization from the connected user. */
        organization_id?: string | number;
        /**
         * Number of results to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Initial index from which to return the results.
         * @minimum 0
         */
        offset?: number;
        /** A search term used to filter projects. */
        search?: string;
      };
      output: {
        /** Total number of results available. */
        count: number;
        /** URL for the next page of results, or null when there is no next page. */
        next: string | null;
        /** URL for the previous page of results, or null when there is no previous page. */
        previous: string | null;
        /** Projects returned by PostHog. */
        results: Array<{
          /** Numeric project identifier. */
          id: number;
          /** Owning organization UUID. */
          organization: string;
          /** Project UUID. */
          uuid: string;
          /** Project name. */
          name: string;
          /** Project API token. */
          api_token?: string;
          /** Project creation datetime. */
          created_at?: string;
          /** Project update datetime. */
          updated_at?: string;
          /** Description configured for the product. */
          product_description?: string | null;
          /** Project timezone. */
          timezone?: string;
          /** Whether the project is a demo project. */
          is_demo?: boolean;
          /** Whether the project has ingested at least one event. */
          ingested_event?: boolean;
          /** Whether access control is enabled. */
          access_control?: boolean;
          /** Configured application URLs. */
          app_urls?: Array<string | null>;
          /** Configured group types. */
          group_types?: Array<Record<string, unknown>>;
          /** Product intent summaries for the project. */
          product_intents?: Array<Record<string, unknown>>;
          /** Project secret API token when available. */
          secret_api_token?: string | null;
          /** Project secret API token backup when available. */
          secret_api_token_backup?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List property definitions for a PostHog project. */
    "posthog.list_property_definitions": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** JSON-encoded event names used by PostHog to populate filtered event visibility. */
        event_names?: string;
        /** Whether to exclude core properties. */
        exclude_core_properties?: boolean;
        /** Whether to exclude hidden properties. */
        exclude_hidden?: boolean;
        /** JSON-encoded list of excluded properties. */
        excluded_properties?: string;
        /** Whether to return only properties seen on the supplied event names. */
        filter_by_event_names?: boolean | null;
        /** Group type index to use when type is group. */
        group_type_index?: number;
        /** Whether to include only or exclude feature flag properties. */
        is_feature_flag?: boolean | null;
        /** Whether to include only or exclude numerical properties. */
        is_numerical?: boolean | null;
        /**
         * Number of results to return per page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Initial index from which to return the results.
         * @minimum 0
         */
        offset?: number;
        /** Comma-separated list of properties to filter. */
        properties?: string;
        /** Search term used to match property names. */
        search?: string;
        /** Property definition type to return. */
        type?: "event" | "person" | "group" | "session";
        /** Whether to filter by verified state. */
        verified?: boolean | null;
      };
      output: {
        /** Total number of results available. */
        count: number;
        /** URL for the next page of results, or null when there is no next page. */
        next: string | null;
        /** URL for the previous page of results, or null when there is no previous page. */
        previous: string | null;
        /** Property definitions returned by PostHog. */
        results: Array<{
          /** Property definition UUID. */
          id: string;
          /** Property name. */
          name: string;
          /** Description for the property definition. */
          description?: string | null;
          /** Tags attached to the property definition. */
          tags?: Array<unknown>;
          /** Whether the property is numerical. */
          is_numerical: boolean;
          /** Datetime when the property definition was updated. */
          updated_at: string;
          /** Basic PostHog user. */
          updated_by?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          } | null;
          /** Whether the property was seen on the filtered events. */
          is_seen_on_filtered_events?: boolean | null;
          /** Property type inferred by PostHog. */
          property_type?: string | null;
          /** Whether the property definition is verified. */
          verified?: boolean;
          /** Datetime when the property definition was verified. */
          verified_at?: string | null;
          /** Basic PostHog user. */
          verified_by?: {
            /** Numeric user identifier. */
            id: number;
            /** User UUID. */
            uuid: string;
            /** User email address. */
            email: string;
            /** User first name. */
            first_name?: string;
            /** User last name. */
            last_name?: string;
            /** Current distinct ID for the user. */
            distinct_id?: string | null;
            /** Role declared for the user within the organization. */
            role_at_organization?: string | null;
            [key: string]: unknown;
          } | null;
          /** Whether the property definition is hidden. */
          hidden?: boolean | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Move a PostHog dashboard tile to another dashboard. */
    "posthog.move_dashboard_tile": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
        /** Dashboard tile to move. */
        tile: {
          /** Dashboard tile ID to move. */
          id: number;
        };
        /** Dashboard ID to move the tile to. */
        toDashboard: number;
      };
      output: {
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** Remove a collaborator from a PostHog dashboard. */
    "posthog.remove_dashboard_collaborator": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        dashboard_id: string | number;
        /**
         * User UUID to remove from the dashboard collaborators.
         * @minLength 1
         */
        user_uuid: string;
      };
      output: {
        /** Whether the collaborator was removed. */
        deleted: boolean;
        /** Dashboard identifier. */
        dashboard_id: string;
        /** Removed user UUID. */
        user_uuid: string;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** Reorder tiles on a PostHog dashboard. */
    "posthog.reorder_dashboard_tiles": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
        /**
         * Dashboard tile IDs in the desired display order.
         * @minItems 1
         */
        tile_order: Array<number>;
      };
      output: {
        /** Numeric dashboard identifier. */
        id: number;
        /** Dashboard name. */
        name?: string | null;
        /** Dashboard description. */
        description?: string;
        /** Whether the dashboard is pinned to the top of the list. */
        pinned?: boolean;
        /** Datetime when the dashboard was created. */
        created_at?: string;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Datetime when the dashboard was last accessed. */
        last_accessed_at?: string | null;
        /** Datetime when the dashboard was last viewed. */
        last_viewed_at?: string | null;
        /** Whether the dashboard is shared. */
        is_shared?: boolean;
        /** Whether the dashboard is marked as deleted. */
        deleted?: boolean;
        /** Dashboard creation mode returned by PostHog. */
        creation_mode?: string;
        /** Dashboard filters returned by PostHog. */
        filters?: Record<string, unknown> | null;
        /** Dashboard variables returned by PostHog. */
        variables?: Record<string, unknown> | null;
        /** Custom color mapping for breakdown values. */
        breakdown_colors?: unknown;
        /** Color theme ID used for chart visualizations. */
        data_color_theme_id?: number | null;
        /** Tags attached to the dashboard. */
        tags?: Array<unknown>;
        /** Dashboard restriction level. */
        restriction_level?: number;
        /** Effective restriction level for the current user. */
        effective_restriction_level?: number;
        /** Effective privilege level for the current user. */
        effective_privilege_level?: number;
        /** Effective user access level for the dashboard. */
        user_access_level?: string | null;
        /** Dashboard access control version. */
        access_control_version?: string;
        /** Datetime when the dashboard last refreshed. */
        last_refresh?: string | null;
        /** Persisted dashboard filters. */
        persisted_filters?: Record<string, unknown> | null;
        /** Persisted dashboard variables. */
        persisted_variables?: Record<string, unknown> | null;
        /** Project or team ID this dashboard belongs to. */
        team_id?: number;
        /** Quick filter IDs associated with this dashboard. */
        quick_filter_ids?: Array<string> | null;
        /** Dashboard tile payloads returned by PostHog. */
        tiles?: Array<Record<string, unknown>> | null;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Run all insights on a PostHog dashboard and return their results. */
    "posthog.run_dashboard_insights": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
        /** Object payload accepted or returned by PostHog. */
        filters_override?: Record<string, unknown> | null;
        /** Dashboard variable overrides keyed by variable ID. */
        variables_override?: Record<string, Record<string, unknown>> | null;
        /** Output format returned by PostHog. */
        output_format?: "json" | "optimized";
        /** Cache behavior for dashboard insight execution. */
        refresh?: "blocking" | "force_blocking" | "force_cache";
      };
      output: {
        /** Dashboard tile results returned by PostHog. */
        results: Array<unknown>;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
      };
    };
    /** Run a PostHog query and return a stable top-level query result shape. */
    "posthog.run_query": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Query object submitted to the PostHog query API. */
        query: {
          /**
           * Query kind accepted by the PostHog query API.
           * @minLength 1
           */
          kind: string;
          [key: string]: unknown;
        };
        /** Whether PostHog should execute the query asynchronously. */
        async?: boolean | null;
        /** Client-provided query identifier. */
        client_query_id?: string | null;
        /** Object payload accepted or returned by PostHog. */
        filters_override?: Record<string, unknown> | null;
        /** Limit context forwarded to the query API. */
        limit_context?: string | null;
        /**
         * Descriptive query name for PostHog query logs.
         * @maxLength 128
         */
        name?: string | null;
        /** Refresh mode used by the PostHog API. */
        refresh?: "async" | "async_except_on_cache_miss" | "blocking" | "force_async" | "force_blocking" | "force_cache" | "lazy_async" | null;
        /** Variable overrides for the supplied query. */
        variables_override?: Record<string, unknown> | null;
      };
      output: {
        /** Rows returned by the PostHog query. */
        results?: Array<unknown>;
        /** Column names for the result. */
        columns?: Array<string>;
        /** Column type metadata returned by PostHog. */
        types?: Array<unknown>;
        /** Whether the query has more result rows. */
        hasMore?: boolean | null;
        /** Limit returned by PostHog for the query. */
        limit?: number;
        /** Offset returned by PostHog for the query. */
        offset?: number;
        /** Object payload accepted or returned by PostHog. */
        query?: Record<string, unknown> | null;
        /** Query error payload returned by PostHog. */
        error?: unknown;
        /** Whether the query result came from cache. */
        is_cached?: boolean | null;
        /** Timing metrics collected while processing the query. */
        timings?: Array<Record<string, unknown>>;
        /** Object payload accepted or returned by PostHog. */
        query_status?: Record<string, unknown> | null;
        /** Generated HogQL query. */
        hogql?: string | null;
        /** Target age timestamp for the cached query result. */
        cache_target_age?: string | null;
        /** Datetime when the query result was last refreshed. */
        last_refresh?: string | null;
        /** Earliest datetime when the client can request a fresh result. */
        next_allowed_client_refresh?: string | null;
        /** Object payload accepted or returned by PostHog. */
        resolved_date_range?: Record<string, unknown> | null;
        /** Full raw payload returned by PostHog. */
        raw?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Partially update a PostHog annotation by ID. */
    "posthog.update_annotation": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Annotation text shown on charts. */
        content?: string | null;
        /** ISO 8601 timestamp when this annotation happened. */
        date_marker?: string | null;
        /** Annotation creation type. */
        creation_type?: "USR" | "GIT";
        /** Dashboard tile or insight identifier attached to the annotation. */
        dashboard_item?: number | null;
        /** Dashboard identifier attached to the annotation. */
        dashboard_id?: number | null;
        /** Whether the annotation should be marked as deleted. */
        deleted?: boolean;
        /** Annotation visibility scope. */
        scope?: "dashboard_item" | "dashboard" | "project" | "organization";
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Numeric annotation identifier. */
        id: number;
        /** Annotation text shown on charts. */
        content?: string | null;
        /** ISO 8601 timestamp when this annotation happened. */
        date_marker?: string | null;
        /** Annotation creation type returned by PostHog. */
        creation_type?: string;
        /** Dashboard tile or insight identifier attached to the annotation. */
        dashboard_item?: number | null;
        /** Dashboard identifier attached to the annotation. */
        dashboard_id?: number | null;
        /** Dashboard name attached to the annotation. */
        dashboard_name?: string | null;
        /** Insight short ID attached to the annotation. */
        insight_short_id?: string | null;
        /** Insight name attached to the annotation. */
        insight_name?: string | null;
        /** Derived insight name attached to the annotation. */
        insight_derived_name?: string | null;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Datetime when the annotation was created. */
        created_at?: string | null;
        /** Datetime when the annotation was updated. */
        updated_at?: string;
        /** Whether the annotation is marked as deleted. */
        deleted?: boolean;
        /** Annotation visibility scope. */
        scope?: string;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Partially update a PostHog cohort by ID. */
    "posthog.update_cohort": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /**
         * Cohort name.
         * @maxLength 400
         */
        name?: string | null;
        /**
         * Description for the cohort.
         * @maxLength 1000
         */
        description?: string;
        /** Group configuration defining cohort criteria. */
        groups?: unknown;
        /** Whether the cohort should be marked as deleted. */
        deleted?: boolean;
        /** Object payload accepted or returned by PostHog. */
        filters?: Record<string, unknown> | null;
        /** Query payload defining this cohort. */
        query?: unknown;
        /** Whether the cohort is static. */
        is_static?: boolean;
        /** Folder identifier where PostHog should create the cohort. */
        _create_in_folder?: string;
        /**
         * Person UUIDs to seed when creating a static cohort.
         * @minItems 1
         */
        _create_static_person_ids?: Array<string>;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Numeric cohort identifier. */
        id: number;
        /** Cohort name. */
        name?: string | null;
        /** Description for the cohort. */
        description?: string;
        /** Raw group configuration returned by PostHog. */
        groups?: Record<string, unknown>;
        /** Whether the cohort is marked as deleted. */
        deleted?: boolean;
        /** Cohort filters returned by PostHog. */
        filters?: Record<string, unknown> | null;
        /** Query payload returned by PostHog for this cohort. */
        query?: Record<string, unknown> | null;
        /** Current cohort version. */
        version?: number | null;
        /** Pending cohort version. */
        pending_version?: number | null;
        /** Whether the cohort is being recalculated. */
        is_calculating?: boolean;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Datetime when the cohort was created. */
        created_at?: string | null;
        /** Datetime when the cohort was last calculated. */
        last_calculation?: string | null;
        /** Datetime when person properties were last backfilled. */
        last_backfill_person_properties_at?: string | null;
        /** Number of calculation errors recorded for the cohort. */
        errors_calculating?: number;
        /** Most recent cohort calculation error message. */
        last_error_message?: string | null;
        /** Number of persons in the cohort. */
        count?: number | null;
        /** Whether the cohort is static. */
        is_static?: boolean;
        /** Cohort type classified by PostHog. */
        cohort_type?: string | null;
        /** Experiment IDs attached to the cohort. */
        experiment_set?: Array<number>;
        [key: string]: unknown;
      };
    };
    /** Partially update a PostHog dashboard by ID. */
    "posthog.update_dashboard": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /**
         * Dashboard name.
         * @maxLength 400
         */
        name?: string | null;
        /** Dashboard description. */
        description?: string;
        /** Whether the dashboard should be pinned to the top of the list. */
        pinned?: boolean;
        /** Whether the dashboard should be marked as deleted. */
        deleted?: boolean;
        /** Custom color mapping for breakdown values. */
        breakdown_colors?: unknown;
        /** Color theme ID used for chart visualizations. */
        data_color_theme_id?: number | null;
        /** Tags attached to the dashboard. */
        tags?: Array<string>;
        /** Dashboard restriction level. */
        restriction_level?: number;
        /** Quick filter IDs associated with this dashboard. */
        quick_filter_ids?: Array<string> | null;
        /** Template key to create the dashboard from a predefined template. */
        use_template?: string;
        /** ID of an existing dashboard to duplicate. */
        use_dashboard?: number | null;
        /** Whether PostHog should also delete insights that are only on this dashboard. */
        delete_insights?: boolean;
        /** Folder identifier where PostHog should create the dashboard. */
        _create_in_folder?: string;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Numeric dashboard identifier. */
        id: number;
        /** Dashboard name. */
        name?: string | null;
        /** Dashboard description. */
        description?: string;
        /** Whether the dashboard is pinned to the top of the list. */
        pinned?: boolean;
        /** Datetime when the dashboard was created. */
        created_at?: string;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Datetime when the dashboard was last accessed. */
        last_accessed_at?: string | null;
        /** Datetime when the dashboard was last viewed. */
        last_viewed_at?: string | null;
        /** Whether the dashboard is shared. */
        is_shared?: boolean;
        /** Whether the dashboard is marked as deleted. */
        deleted?: boolean;
        /** Dashboard creation mode returned by PostHog. */
        creation_mode?: string;
        /** Dashboard filters returned by PostHog. */
        filters?: Record<string, unknown> | null;
        /** Dashboard variables returned by PostHog. */
        variables?: Record<string, unknown> | null;
        /** Custom color mapping for breakdown values. */
        breakdown_colors?: unknown;
        /** Color theme ID used for chart visualizations. */
        data_color_theme_id?: number | null;
        /** Tags attached to the dashboard. */
        tags?: Array<unknown>;
        /** Dashboard restriction level. */
        restriction_level?: number;
        /** Effective restriction level for the current user. */
        effective_restriction_level?: number;
        /** Effective privilege level for the current user. */
        effective_privilege_level?: number;
        /** Effective user access level for the dashboard. */
        user_access_level?: string | null;
        /** Dashboard access control version. */
        access_control_version?: string;
        /** Datetime when the dashboard last refreshed. */
        last_refresh?: string | null;
        /** Persisted dashboard filters. */
        persisted_filters?: Record<string, unknown> | null;
        /** Persisted dashboard variables. */
        persisted_variables?: Record<string, unknown> | null;
        /** Project or team ID this dashboard belongs to. */
        team_id?: number;
        /** Quick filter IDs associated with this dashboard. */
        quick_filter_ids?: Array<string> | null;
        /** Dashboard tile payloads returned by PostHog. */
        tiles?: Array<Record<string, unknown>> | null;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Partially update a PostHog event definition by ID. */
    "posthog.update_event_definition": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /**
         * Event definition name.
         * @maxLength 400
         */
        name?: string;
        /** Owner user ID. */
        owner?: number | null;
        /** Description for the event definition. */
        description?: string | null;
        /** Tags attached to the event definition. */
        tags?: Array<unknown>;
        /** Whether the event definition is verified. */
        verified?: boolean;
        /** Whether the event definition is hidden. */
        hidden?: boolean | null;
        /** Enforcement mode for this event definition. */
        enforcement_mode?: string;
        /** Primary property displayed alongside this event. */
        primary_property?: string | null;
        /** Whether new events should post to Slack. */
        post_to_slack?: boolean;
        /** Default columns configured for this event definition. */
        default_columns?: Array<string>;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Event definition UUID. */
        id: string;
        /** Event definition name. */
        name: string;
        /** Owner user ID. */
        owner?: number | null;
        /** Description for the event definition. */
        description?: string | null;
        /** Tags attached to the event definition. */
        tags?: Array<unknown>;
        /** Creation datetime for the event definition. */
        created_at?: string | null;
        /** Update datetime for the event definition. */
        updated_at?: string;
        /** Basic PostHog user. */
        updated_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Datetime when the event was last seen. */
        last_seen_at?: string | null;
        /** Datetime of the last upstream update. */
        last_updated_at?: string;
        /** Whether the event definition is verified. */
        verified?: boolean;
        /** Datetime when the event definition was verified. */
        verified_at?: string | null;
        /** Basic PostHog user. */
        verified_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Whether the event definition is hidden. */
        hidden?: boolean | null;
        /** Enforcement mode for this event definition. */
        enforcement_mode?: string;
        /** Primary property displayed alongside this event. */
        primary_property?: string | null;
        /** Whether the definition represents an action. */
        is_action?: boolean;
        /** Action ID if this definition is an action. */
        action_id?: number;
        /** Whether PostHog is calculating related metadata. */
        is_calculating?: boolean;
        /** Last calculation datetime. */
        last_calculated_at?: string;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Whether new events post to Slack. */
        post_to_slack?: boolean;
        /** Default columns configured for this event definition. */
        default_columns?: Array<string>;
        /** Media preview URLs returned by PostHog. */
        media_preview_urls?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Partially update a PostHog feature flag by ID. */
    "posthog.update_feature_flag": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
        /** Feature flag key. */
        key?: string;
        /** Feature flag description. */
        name?: string;
        /** Feature flag filters returned by PostHog. */
        filters?: Record<string, unknown> | null;
        /** Whether the feature flag is active. */
        active?: boolean;
        /** Tags attached to the feature flag. */
        tags?: Array<string>;
        /** Evaluation contexts attached to the feature flag. */
        evaluation_contexts?: Array<string>;
      };
      output: {
        /** Feature flag identifier. */
        id: number;
        /** Feature flag key. */
        key: string;
        /** Feature flag description. */
        name: string;
        /** Whether the feature flag is active. */
        active: boolean;
        /** Whether the feature flag is marked as deleted. */
        deleted: boolean;
        /** Feature flag filters returned by PostHog. */
        filters: Record<string, unknown>;
        /** Tags attached to the feature flag. */
        tags: Array<unknown>;
        /** Full raw payload returned by PostHog. */
        raw: Record<string, unknown>;
        /** Feature flag creation datetime. */
        created_at?: string | null;
        /** Feature flag update datetime. */
        updated_at?: string | null;
        /** Basic PostHog user. */
        created_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Basic PostHog user. */
        last_modified_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Feature flag version. */
        version?: number | null;
        /** Whether experience continuity is enabled for the feature flag. */
        ensure_experience_continuity?: boolean | null;
        /** Associated experiment IDs. */
        experiment_set?: Array<number>;
        /** Associated experiment metadata objects. */
        experiment_set_metadata?: Array<Record<string, unknown>>;
        /** Survey metadata attached to the feature flag. */
        surveys?: Record<string, unknown> | null;
        /** Early access feature metadata attached to the flag. */
        features?: Record<string, unknown> | null;
        /** Rollback conditions for the feature flag. */
        rollback_conditions?: unknown;
        /** Whether a rollback has been performed. */
        performed_rollback?: boolean | null;
        /** Whether the current user can edit the feature flag. */
        can_edit?: boolean | null;
        /** Computed feature flag status. */
        status?: string | null;
        /** Where the feature flag is evaluated. */
        evaluation_runtime?: string | null;
        /** Identifier used for bucketing users. */
        bucketing_identifier?: string | null;
        /** Last time the feature flag was evaluated. */
        last_called_at?: string | null;
        /** Effective access level for the current user. */
        user_access_level?: string | null;
        /** Feature flag rollout percentage, when present. */
        rollout_percentage?: number | null;
        /** Evaluation contexts attached to the feature flag. */
        evaluation_contexts?: Array<string>;
        /** Usage dashboard identifier. */
        usage_dashboard?: number | null;
        /** Analytics dashboard identifiers attached to the feature flag. */
        analytics_dashboards?: Array<number>;
        /** Whether analytics have been enriched. */
        has_enriched_analytics?: boolean | null;
        /** Whether the flag is a remote configuration. */
        is_remote_configuration?: boolean | null;
        /** Whether the flag has encrypted payloads. */
        has_encrypted_payloads?: boolean | null;
        /** Whether the flag is used in replay settings. */
        is_used_in_replay_settings?: boolean | null;
        [key: string]: unknown;
      };
    };
    /** Update a saved PostHog insight by ID. */
    "posthog.update_insight": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Insight name. */
        name?: string | null;
        /** Insight description. */
        description?: string | null;
        /** Object payload accepted or returned by PostHog. */
        query?: Record<string, unknown> | null;
        /** Object payload accepted or returned by PostHog. */
        filters?: Record<string, unknown> | null;
        /** Dashboard IDs referencing the insight. */
        dashboards?: Array<string | number>;
        /** Tags attached to the insight. */
        tags?: Array<string>;
        /** Refresh mode used by the PostHog API. */
        refresh?: "async" | "async_except_on_cache_miss" | "blocking" | "force_async" | "force_blocking" | "force_cache" | "lazy_async" | null;
        /** Whether the insight should be saved. */
        saved?: boolean | null;
        /** Whether the insight should be favorited. */
        favorited?: boolean | null;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Numeric insight identifier. */
        id?: number;
        /** Short insight identifier. */
        short_id?: string;
        /** Insight name. */
        name?: string | null;
        /** Object payload accepted or returned by PostHog. */
        query?: Record<string, unknown> | null;
        /** Full raw payload returned by PostHog. */
        raw?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Partially update a PostHog property definition by ID. */
    "posthog.update_property_definition": {
      input: {
        /** Project ID of the project to access. */
        project_id: string | number;
        /** Description for the property definition. */
        description?: string | null;
        /** Tags attached to the property definition. */
        tags?: Array<unknown>;
        /** Whether the property definition is verified. */
        verified?: boolean;
        /** Whether the property definition is hidden. */
        hidden?: boolean | null;
        /** Property type classified by PostHog. */
        property_type?: string | null;
        /** Identifier accepted by the official PostHog API path. */
        id: string | number;
      };
      output: {
        /** Property definition UUID. */
        id: string;
        /** Property name. */
        name: string;
        /** Description for the property definition. */
        description?: string | null;
        /** Tags attached to the property definition. */
        tags?: Array<unknown>;
        /** Whether the property is numerical. */
        is_numerical: boolean;
        /** Datetime when the property definition was updated. */
        updated_at: string;
        /** Basic PostHog user. */
        updated_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Whether the property was seen on the filtered events. */
        is_seen_on_filtered_events?: boolean | null;
        /** Property type inferred by PostHog. */
        property_type?: string | null;
        /** Whether the property definition is verified. */
        verified?: boolean;
        /** Datetime when the property definition was verified. */
        verified_at?: string | null;
        /** Basic PostHog user. */
        verified_by?: {
          /** Numeric user identifier. */
          id: number;
          /** User UUID. */
          uuid: string;
          /** User email address. */
          email: string;
          /** User first name. */
          first_name?: string;
          /** User last name. */
          last_name?: string;
          /** Current distinct ID for the user. */
          distinct_id?: string | null;
          /** Role declared for the user within the organization. */
          role_at_organization?: string | null;
          [key: string]: unknown;
        } | null;
        /** Whether the property definition is hidden. */
        hidden?: boolean | null;
        [key: string]: unknown;
      };
    };
  }
}
