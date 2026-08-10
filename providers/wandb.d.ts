import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Compare metadata, aliases, tags, lineage, sizes, and optionally files for two W&B artifact versions. */
    "wandb.compare_artifact_versions": {
      input: {
        /**
         * The first fully qualified artifact version name.
         * @minLength 1
         * @pattern \S
         */
        artifact_name_a: string;
        /**
         * The second fully qualified artifact version name.
         * @minLength 1
         * @pattern \S
         */
        artifact_name_b: string;
        /**
         * Optional artifact type name.
         * @minLength 1
         * @pattern \S
         */
        type_name?: string;
        /**
         * Whether to include file-level differences.
         * @default true
         */
        include_file_diff?: boolean;
        /**
         * Maximum file-difference entries to return.
         * @exclusiveMinimum 0
         * @default 50
         */
        max_file_diff_entries?: number;
      };
      output: {
        /** The first artifact version name. */
        artifact_a?: string;
        /** The second artifact version name. */
        artifact_b?: string;
        /** Artifact metadata differences. */
        metadata_diff?: Record<string, unknown>;
        /** Artifact tag differences. */
        tags_diff?: Record<string, unknown>;
        /** Artifact alias differences. */
        aliases_diff?: Record<string, unknown>;
        /** Artifact size differences. */
        size_diff?: Record<string, unknown>;
        /** Artifact file-count differences. */
        file_count_diff?: Record<string, unknown>;
        /** Artifact lineage differences. */
        lineage_diff?: Record<string, unknown>;
        /** Whether both artifact versions have the same digest. */
        digest_match?: boolean;
        /** Optional file-level differences. */
        file_diff?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Compare configuration, summary metrics, metadata, and optionally metric history for two W&B runs. */
    "wandb.compare_runs": {
      input: {
        /**
         * The W&B entity or team name.
         * @minLength 1
         * @pattern \S
         */
        entity_name: string;
        /**
         * The W&B project name.
         * @minLength 1
         * @pattern \S
         */
        project_name: string;
        /**
         * The first W&B run ID.
         * @minLength 1
         * @pattern \S
         */
        run_id_a: string;
        /**
         * The second W&B run ID.
         * @minLength 1
         * @pattern \S
         */
        run_id_b: string;
        /**
         * Whether to compare overlapping sampled metric history.
         * @default false
         */
        include_history_overlap?: boolean;
        /** Metric keys used for history comparison. */
        history_keys?: Array<string>;
        /**
         * Maximum history samples per run.
         * @exclusiveMinimum 0
         * @default 50
         */
        history_samples?: number;
      };
      output: {
        /** Details for the first W&B run. */
        run_a?: Record<string, unknown>;
        /** Details for the second W&B run. */
        run_b?: Record<string, unknown>;
        /** Run configuration differences. */
        config_diff?: Record<string, unknown>;
        /** Run summary metric differences. */
        summary_diff?: Record<string, unknown>;
        /** Run metadata differences. */
        metadata_diff?: Record<string, unknown>;
        /** Optional sampled history comparison. */
        history_comparison?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Count matching classic Weave traces and root traces without returning trace payloads. */
    "wandb.count_weave_traces": {
      input: {
        /**
         * The W&B entity or team name.
         * @minLength 1
         * @pattern \S
         */
        entity_name: string;
        /**
         * The W&B project name.
         * @minLength 1
         * @pattern \S
         */
        project_name: string;
        /** Optional provider-native filters. */
        filters?: Record<string, unknown>;
      };
      output: {
        /**
         * The number of matching traces.
         * @minimum 0
         */
        total_count: number;
        /**
         * The number of matching root traces.
         * @minimum 0
         */
        root_traces_count: number;
      };
    };
    /** Create a W&B report with narrative text, plots, and configurable panels. */
    "wandb.create_report": {
      input: {
        /**
         * The W&B entity or team name.
         * @minLength 1
         * @pattern \S
         */
        entity_name: string;
        /**
         * The W&B project name.
         * @minLength 1
         * @pattern \S
         */
        project_name: string;
        /**
         * The report title.
         * @minLength 1
         * @pattern \S
         */
        title: string;
        /** Optional report description. */
        description?: string;
        /**
         * Markdown narrative for the report.
         * @default ""
         */
        markdown_report_text?: string;
        /** Plotly HTML supplied as one string or a name-to-HTML map. */
        plots_html?: string | Record<string, string>;
        /** W&B report panel definitions. */
        panels?: Array<Record<string, unknown>>;
      };
      output: string;
    };
    /** Inspect loss metrics and run state to diagnose the training health of a W&B run. */
    "wandb.diagnose_run": {
      input: {
        /**
         * The W&B entity or team name.
         * @minLength 1
         * @pattern \S
         */
        entity_name: string;
        /**
         * The W&B project name.
         * @minLength 1
         * @pattern \S
         */
        project_name: string;
        /**
         * The W&B run ID.
         * @minLength 1
         * @pattern \S
         */
        run_id: string;
        /**
         * Optional training-loss metric key.
         * @minLength 1
         * @pattern \S
         */
        loss_key?: string;
        /**
         * Optional validation-loss metric key.
         * @minLength 1
         * @pattern \S
         */
        val_loss_key?: string;
      };
      output: {
        /** The diagnosed W&B run ID. */
        run_id?: string;
        /** The W&B run name. */
        run_name?: string;
        /** The W&B run state. */
        run_state?: string;
        /** Training-health findings and recommendations. */
        diagnosis?: unknown;
        /** Calculated loss statistics. */
        loss_stats?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get metadata, lineage, and optionally files for a W&B artifact version. */
    "wandb.get_artifact_details": {
      input: {
        /**
         * The fully qualified artifact version name.
         * @minLength 1
         * @pattern \S
         */
        artifact_name: string;
        /**
         * Optional artifact type name.
         * @minLength 1
         * @pattern \S
         */
        type_name?: string;
        /**
         * Whether to include artifact file entries.
         * @default false
         */
        include_files?: boolean;
        /**
         * Maximum files to return when file entries are included.
         * @exclusiveMinimum 0
         * @default 50
         */
        max_files?: number;
      };
      output: {
        /** Artifact metadata. */
        artifact?: Record<string, unknown>;
        /** Artifact lineage information. */
        lineage?: Record<string, unknown>;
        /** Optional artifact file entries. */
        files?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Retrieve sampled time-series metric history for a W&B run. */
    "wandb.get_run_history": {
      input: {
        /**
         * The W&B entity or team name.
         * @minLength 1
         * @pattern \S
         */
        entity_name: string;
        /**
         * The W&B project name.
         * @minLength 1
         * @pattern \S
         */
        project_name: string;
        /**
         * The W&B run ID.
         * @minLength 1
         * @pattern \S
         */
        run_id: string;
        /** Metric keys to return. */
        keys?: Array<string>;
        /**
         * Maximum sampled history points.
         * @exclusiveMinimum 0
         * @default 500
         */
        samples?: number;
        /**
         * Optional minimum training step.
         * @minimum 0
         */
        min_step?: number;
        /**
         * Optional maximum training step.
         * @minimum 0
         */
        max_step?: number;
      };
      output: {
        /** Sampled metric history rows. */
        history?: Array<Record<string, unknown>>;
        /** The W&B run ID. */
        run_id?: string;
        /** The W&B run name. */
        run_name?: string;
        /**
         * The total available run steps.
         * @minimum 0
         */
        total_steps?: number;
        /**
         * The number of returned points.
         * @minimum 0
         */
        sampled_points?: number;
        /** Metric keys present in the result. */
        keys_returned?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Sample classic Weave traces to discover field paths, types, and frequent values. */
    "wandb.infer_trace_schema": {
      input: {
        /**
         * The W&B entity or team name.
         * @minLength 1
         * @pattern \S
         */
        entity_name: string;
        /**
         * The W&B project name.
         * @minLength 1
         * @pattern \S
         */
        project_name: string;
        /**
         * Number of traces to sample.
         * @exclusiveMinimum 0
         * @default 20
         */
        sample_size?: number;
        /**
         * Frequent values retained per field.
         * @exclusiveMinimum 0
         * @default 5
         */
        top_n_values?: number;
      };
      output: {
        /** Discovered trace fields. */
        fields?: Array<Record<string, unknown>>;
        /**
         * The total matching traces.
         * @minimum 0
         */
        total_traces?: number;
        /**
         * The total root traces.
         * @minimum 0
         */
        root_traces?: number;
        /**
         * The number of sampled traces.
         * @minimum 0
         */
        sample_size?: number;
        [key: string]: unknown;
      };
    };
    /** List versions of a W&B project artifact or registry collection. */
    "wandb.list_artifact_versions": {
      input: {
        /**
         * The artifact collection name.
         * @minLength 1
         * @pattern \S
         */
        collection_name: string;
        /**
         * The W&B entity or team name.
         * @minLength 1
         * @pattern \S
         */
        entity_name?: string;
        /**
         * The W&B project name.
         * @minLength 1
         * @pattern \S
         */
        project_name?: string;
        /**
         * Optional W&B registry name.
         * @minLength 1
         * @pattern \S
         */
        registry_name?: string;
        /**
         * Optional W&B organization name.
         * @minLength 1
         * @pattern \S
         */
        organization?: string;
        /**
         * Optional artifact type name.
         * @minLength 1
         * @pattern \S
         */
        type_name?: string;
        /** Whether the collection belongs to a project or registry. */
        source?: "project" | "registry";
        /**
         * Maximum artifact versions to return.
         * @exclusiveMinimum 0
         * @default 50
         */
        max_items?: number;
      };
      output: {
        /** The selected artifact collection name. */
        collection?: string;
        /** The artifact source type. */
        source?: string;
        /** Artifact versions in the collection. */
        versions?: Array<Record<string, unknown>>;
        /**
         * The number of returned versions.
         * @minimum 0
         */
        count?: number;
        /** Whether results were truncated. */
        truncated?: boolean;
        [key: string]: unknown;
      };
    };
    /** List W&B Automations that trigger on artifact, run-state, or run-metric events. */
    "wandb.list_automations": {
      input: {
        /**
         * Optional W&B entity name.
         * @minLength 1
         * @pattern \S
         */
        entity?: string;
        /**
         * Optional automation name filter.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /**
         * Maximum automations to return.
         * @exclusiveMinimum 0
         * @default 50
         */
        max_items?: number;
      };
      output: {
        /** Matching W&B Automations. */
        automations?: Array<Record<string, unknown>>;
        /**
         * The number of returned automations.
         * @minimum 0
         */
        count?: number;
        /** The filtered W&B entity. */
        entity?: string | null;
        /** Whether results were truncated. */
        truncated?: boolean;
        [key: string]: unknown;
      };
    };
    /** List W&B user and team entities accessible with the configured API key. */
    "wandb.list_entities": {
      input: Record<string, never>;
      output: {
        /** Accessible W&B entities. */
        entities?: Array<{
          /** The entity name. */
          name?: string;
          /** The entity type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /**
         * The number of returned entities.
         * @minimum 0
         */
        count?: number;
        [key: string]: unknown;
      };
    };
    /** List Slack and webhook integrations available as W&B Automation targets. */
    "wandb.list_integrations": {
      input: {
        /**
         * Optional W&B entity name.
         * @minLength 1
         * @pattern \S
         */
        entity?: string;
        /** Optional integration kind. */
        kind?: "slack" | "webhook";
        /**
         * Maximum integrations to return.
         * @exclusiveMinimum 0
         * @default 50
         */
        max_items?: number;
      };
      output: {
        /** Matching W&B integrations. */
        integrations?: Array<Record<string, unknown>>;
        /**
         * The number of returned integrations.
         * @minimum 0
         */
        count?: number;
        /** The filtered W&B entity. */
        entity?: string | null;
        /** The filtered integration kind. */
        kind?: string | null;
        /** Whether results were truncated. */
        truncated?: boolean;
        [key: string]: unknown;
      };
    };
    /** List W&B projects for one entity or for all entities accessible with the configured API key. */
    "wandb.list_projects": {
      input: {
        /**
         * Optional W&B entity name.
         * @minLength 1
         * @pattern \S
         */
        entity?: string;
        /**
         * Maximum projects returned per entity.
         * @exclusiveMinimum 0
         * @default 50
         */
        max_projects?: number;
      };
      output: {
        /** Projects keyed by W&B entity. */
        projects?: Record<string, Array<Record<string, unknown>>>;
        /** Whether project results were truncated. */
        truncated?: boolean;
        /**
         * The per-entity project limit.
         * @exclusiveMinimum 0
         */
        max_projects_per_entity?: number;
        [key: string]: unknown;
      };
    };
    /** List W&B model registries for an organization. */
    "wandb.list_registries": {
      input: {
        /**
         * Optional W&B organization name.
         * @minLength 1
         * @pattern \S
         */
        organization?: string;
        /** Optional provider-native filters. */
        filter?: Record<string, unknown>;
        /**
         * Maximum registries to return.
         * @exclusiveMinimum 0
         * @default 50
         */
        max_items?: number;
      };
      output: {
        /** Matching W&B registries. */
        registries?: Array<Record<string, unknown>>;
        /**
         * The number of returned registries.
         * @minimum 0
         */
        count?: number;
        /** Whether results were truncated. */
        truncated?: boolean;
        [key: string]: unknown;
      };
    };
    /** List artifact collections within a W&B model registry. */
    "wandb.list_registry_collections": {
      input: {
        /**
         * The W&B registry name.
         * @minLength 1
         * @pattern \S
         */
        registry_name: string;
        /**
         * Optional W&B organization name.
         * @minLength 1
         * @pattern \S
         */
        organization?: string;
        /** Optional provider-native filters. */
        filter?: Record<string, unknown>;
        /**
         * Maximum collections to return.
         * @exclusiveMinimum 0
         * @default 50
         */
        max_items?: number;
      };
      output: {
        /** The selected W&B registry name. */
        registry?: string;
        /** Collections in the registry. */
        collections?: Array<Record<string, unknown>>;
        /**
         * The number of returned collections.
         * @minimum 0
         */
        count?: number;
        /** Whether results were truncated. */
        truncated?: boolean;
        [key: string]: unknown;
      };
    };
    /** Log analysis rows, charts, and scalar metrics to W&B as a new run. */
    "wandb.log_analysis": {
      input: {
        /**
         * The W&B entity or team name.
         * @minLength 1
         * @pattern \S
         */
        entity_name: string;
        /**
         * The W&B project name.
         * @minLength 1
         * @pattern \S
         */
        project_name: string;
        /**
         * The analysis run name.
         * @minLength 1
         * @pattern \S
         */
        analysis_name: string;
        /**
         * Tabular analysis rows to log.
         * @minItems 1
         */
        data: Array<Record<string, unknown>>;
        /** Chart definitions to log. */
        charts?: Array<Record<string, unknown>>;
        /** Scalar metrics keyed by metric name. */
        scalars?: Record<string, number>;
      };
      output: {
        /** The created W&B run ID. */
        run_id?: string;
        /**
         * The created W&B run URL.
         * @format uri
         */
        run_url?: string;
        /** The logged metric and data keys. */
        logged_keys?: Array<string>;
        /** The logged table columns. */
        table_columns?: Array<string>;
        /**
         * The number of logged analysis rows.
         * @minimum 0
         */
        row_count?: number;
        [key: string]: unknown;
      };
    };
    /** Sample W&B runs to discover a project's metrics, configuration keys, tags, groups, and structure. */
    "wandb.probe_project": {
      input: {
        /**
         * The W&B entity or team name.
         * @minLength 1
         * @pattern \S
         */
        entity_name: string;
        /**
         * The W&B project name.
         * @minLength 1
         * @pattern \S
         */
        project_name: string;
        /**
         * Maximum runs to sample.
         * @exclusiveMinimum 0
         * @default 5
         */
        sample_runs?: number;
      };
      output: {
        /** The W&B entity name. */
        entity?: string;
        /** The W&B project name. */
        project?: string;
        /**
         * The project run count.
         * @minimum 0
         */
        run_count?: number;
        /** Sampled W&B runs. */
        sampled_runs?: Array<Record<string, unknown>>;
        /** Discovered metric keys. */
        metric_keys?: Array<string>;
        /** Discovered configuration keys. */
        config_keys?: Array<string>;
        /** Discovered run tags. */
        tags?: Array<string>;
        /** Discovered run groups. */
        groups?: Array<string>;
        /** Suggested follow-up actions. */
        recommendations?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Run a read-only GraphQL query against W&B experiment data with bounded pagination. */
    "wandb.query_wandb": {
      input: {
        /**
         * A read-only W&B GraphQL query.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /** GraphQL variables. */
        variables?: Record<string, unknown>;
        /**
         * Maximum total items returned across pages.
         * @exclusiveMinimum 0
         * @default 100
         */
        max_items?: number;
        /**
         * Items requested per GraphQL page.
         * @exclusiveMinimum 0
         * @default 20
         */
        items_per_page?: number;
      };
      output: unknown;
    };
    /** Query classic Weave traces with filters, ordering, selected columns, cost data, feedback, and detail-level controls. */
    "wandb.query_weave_traces": {
      input: {
        /**
         * The W&B entity or team name.
         * @minLength 1
         * @pattern \S
         */
        entity_name: string;
        /**
         * The W&B project name.
         * @minLength 1
         * @pattern \S
         */
        project_name: string;
        /** Optional provider-native filters. */
        filters?: Record<string, unknown>;
        /**
         * The trace field used for sorting.
         * @minLength 1
         * @pattern \S
         * @default "started_at"
         */
        sort_by?: string;
        /** The sort direction. */
        sort_direction?: "asc" | "desc";
        /**
         * The maximum number of traces to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Whether to include calculated trace costs.
         * @default true
         */
        include_costs?: boolean;
        /**
         * Whether to include trace feedback.
         * @default true
         */
        include_feedback?: boolean;
        /** Trace columns to return. */
        columns?: Array<string>;
        /** Nested trace columns to expand. */
        expand_columns?: Array<string>;
        /**
         * Maximum string length before truncation.
         * @exclusiveMinimum 0
         * @default 1000
         */
        truncate_length?: number;
        /**
         * Whether to return untruncated trace data.
         * @default false
         */
        return_full_data?: boolean;
        /**
         * Whether to return query metadata without trace rows.
         * @default false
         */
        metadata_only?: boolean;
        /** The trace detail level. */
        detail_level?: "schema" | "summary" | "full";
      };
      output: {
        /** Trace query counts, distributions, time range, and truncation metadata. */
        metadata?: Record<string, unknown>;
        /** Matching Weave traces. */
        traces?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Resolve the root spans for a batch of classic Weave trace IDs. */
    "wandb.resolve_trace_roots": {
      input: {
        /**
         * The W&B entity or team name.
         * @minLength 1
         * @pattern \S
         */
        entity_name: string;
        /**
         * The W&B project name.
         * @minLength 1
         * @pattern \S
         */
        project_name: string;
        /**
         * Child trace IDs to resolve.
         * @minItems 1
         */
        trace_ids: Array<string>;
      };
      output: {
        /** Root span details keyed by requested trace ID. */
        roots?: Record<string, Record<string, unknown>>;
        /**
         * The number of resolved trace IDs.
         * @minimum 0
         */
        resolved?: number;
        /**
         * The number of requested trace IDs.
         * @minimum 0
         */
        total_requested?: number;
        [key: string]: unknown;
      };
    };
    /** Search the official W&B documentation for relevant guidance and examples. */
    "wandb.search_docs": {
      input: {
        /**
         * The W&B documentation search query.
         * @minLength 1
         * @pattern \S
         */
        query: string;
      };
      output: string;
    };
    /** Aggregate classic Weave evaluation results for a project or named evaluation. */
    "wandb.summarize_evaluation": {
      input: {
        /**
         * The W&B entity or team name.
         * @minLength 1
         * @pattern \S
         */
        entity_name: string;
        /**
         * The W&B project name.
         * @minLength 1
         * @pattern \S
         */
        project_name: string;
        /**
         * Optional evaluation name filter.
         * @minLength 1
         * @pattern \S
         */
        eval_name?: string;
        /**
         * Maximum evaluations to aggregate.
         * @exclusiveMinimum 0
         * @default 5
         */
        max_evals?: number;
        /**
         * Whether to include per-task aggregates.
         * @default false
         */
        include_per_task?: boolean;
      };
      output: {
        /** Matching evaluation summaries. */
        evaluations?: Array<Record<string, unknown>>;
        /**
         * The number of summarized evaluations.
         * @minimum 0
         */
        count?: number;
        /** The W&B project name. */
        project?: string;
        [key: string]: unknown;
      };
    };
  }
}
