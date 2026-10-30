import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Submit URLs for indexing. Standard submission costs one credit per URL; Apex and Bing add non-refundable charges. Save the project ID: final results may take 14 days. */
    "rapid_url_indexer.create_project": {
      input: {
        /**
         * Project name, sanitized by the provider.
         * @minLength 1
         * @maxLength 255
         */
        project_name: string;
        /**
         * URLs to submit for indexing.
         * @minItems 1
         * @maxItems 9999
         */
        urls: Array<string>;
        /** Receive email notifications when the project status changes. Defaults to false. */
        notify_on_status_change?: boolean;
        /** Enable Apex Mode for faster Google indexing, adding two non-refundable credits per URL. Defaults to false. */
        apex_mode_enabled?: boolean;
        /** Enable Bing indexing, adding one non-refundable credit per URL. Defaults to false. Bing indexing is not guaranteed or checked; reports cover Google only. */
        bing_mode_enabled?: boolean;
      };
      output: {
        /** Unique identifier of the project. */
        project_id: number;
        /** Success message. */
        message?: string;
        /** Whether Bing indexing was enabled. */
        bing_mode_enabled?: boolean;
        /** Credits charged for the Bing add-on. */
        bing_credits_charged?: number;
        /** Total credits charged including add-ons. */
        credits_charged?: number;
        /** Warnings keyed by code, including bing_unavailable when no Bing credits were charged. */
        warnings?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the current Rapid URL Indexer credit balance. */
    "rapid_url_indexer.get_credit_balance": {
      input: Record<string, never>;
      output: {
        /** Available credits. */
        credits?: number;
        [key: string]: unknown;
      };
    };
    /** Read indexing progress for a project. Standard processing may take 14 days; refunded is a completed project with a partial refund. */
    "rapid_url_indexer.get_project": {
      input: {
        /** Unique identifier of the project. */
        project_id: number;
      };
      output: {
        /** Unique identifier of the project. */
        project_id?: number;
        /** Name of the project. */
        project_name?: string;
        /** Project status: pending, submitted, completed, failed, or refunded. */
        status?: string;
        /** URLs submitted for indexing. */
        urls?: Array<string>;
        /** Number of submitted URLs. */
        submitted_links?: number;
        /** Number of indexed URLs. */
        indexed_links?: number;
        /** Project creation timestamp. */
        created_at?: string;
        /** Last update timestamp. */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Read a project's Google indexing report as JSON. Initial reports are available after four days; Bing indexing is not checked. A report that is not ready returns an upstream error. */
    "rapid_url_indexer.get_project_report": {
      input: {
        /** Unique identifier of the project. */
        project_id: number;
      };
      output: {
        /** Unique identifier of the project. */
        project_id?: number;
        /** Name of the project. */
        project_name?: string;
        /** Number of URLs in the report. */
        total_urls?: number;
        /** Per-URL indexing results. */
        urls?: Array<{
          /**
           * The submitted HTTP or HTTPS URL.
           * @pattern ^https?://
           * @format uri
           */
          url?: string;
          /** Google indexing status: indexed or not_indexed. */
          status?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List all indexing projects, newest first. The API does not expose pagination. */
    "rapid_url_indexer.list_projects": {
      input: Record<string, never>;
      output: {
        /** Whether the listing succeeded. */
        success?: boolean;
        /** Projects ordered by creation date, newest first. */
        projects?: Array<{
          /** Unique identifier of the project. */
          id?: number;
          /** Name of the project. */
          name?: string;
          /** Project status: pending, submitted, completed, failed, or refunded. */
          status?: string;
          /** Number of submitted URLs. */
          submitted_urls?: number;
          /** Number of indexed URLs. */
          indexed_urls?: number;
          /** Project creation timestamp. */
          created_at?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
