import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve data for one URL in a Conductor Monitoring website. */
    "conductor.get_page": {
      input: {
        /**
         * The Conductor Monitoring website ID returned by list_websites.
         * @minLength 1
         */
        website_id: string;
        /**
         * The page URL to retrieve from the Conductor Monitoring website.
         * @format uri
         */
        url: string;
      };
      output: {
        /** The Conductor Monitoring data object. */
        data: Record<string, unknown>;
        /** The timestamp when Conductor captured the returned data. */
        data_captured_at?: string | null;
        /** Whether Conductor marks the returned data as golden. */
        is_data_golden?: boolean | null;
        /** The raw Conductor Monitoring JSON response. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve Conductor Monitoring statistics for a whole website or a segment scope. */
    "conductor.get_statistics": {
      input: {
        /**
         * The Conductor Monitoring website ID returned by list_websites.
         * @minLength 1
         */
        website_id: string;
        /**
         * The Conductor Monitoring scope, such as website, segment:<segment_id>, or segment_label:<segment_label>.
         * @minLength 1
         */
        scope: string;
        /**
         * Optional historical capture timestamp in ISO 8601 format accepted by Conductor.
         * @minLength 1
         */
        captured_at?: string;
      };
      output: {
        /** The Conductor Monitoring data object. */
        data: Record<string, unknown>;
        /** The timestamp when Conductor captured the returned data. */
        data_captured_at?: string | null;
        /** Whether Conductor marks the returned data as golden. */
        is_data_golden?: boolean | null;
        /** The raw Conductor Monitoring JSON response. */
        raw: Record<string, unknown>;
      };
    };
    /** List pages affected by one Conductor Monitoring issue. */
    "conductor.list_affected_pages": {
      input: {
        /**
         * The Conductor Monitoring website ID returned by list_websites.
         * @minLength 1
         */
        website_id: string;
        /**
         * The issue name returned by list_issues.
         * @minLength 1
         */
        issue: string;
        /**
         * The one-based page number to retrieve. Do not use together with page_cursor.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        per_page?: number;
      };
      output: {
        /** The Conductor Monitoring data object. */
        data: Record<string, unknown>;
        /** The timestamp when Conductor captured the returned data. */
        data_captured_at?: string | null;
        /** Whether Conductor marks the returned data as golden. */
        is_data_golden?: boolean | null;
        /** The raw Conductor Monitoring JSON response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Conductor Monitoring issues for a whole website or a segment scope. */
    "conductor.list_issues": {
      input: {
        /**
         * The Conductor Monitoring website ID returned by list_websites.
         * @minLength 1
         */
        website_id: string;
        /**
         * The Conductor Monitoring scope, such as website, segment:<segment_id>, or segment_label:<segment_label>.
         * @minLength 1
         */
        scope: string;
        /**
         * Optional historical capture timestamp in ISO 8601 format accepted by Conductor.
         * @minLength 1
         */
        captured_at?: string;
      };
      output: {
        /** The Conductor Monitoring data array. */
        data: Array<Record<string, unknown>>;
        /** The timestamp when Conductor captured the returned data. */
        data_captured_at?: string | null;
        /** Whether Conductor marks the returned data as golden. */
        is_data_golden?: boolean | null;
        /** The raw Conductor Monitoring JSON response. */
        raw: Record<string, unknown>;
      };
    };
    /** List pages for a Conductor Monitoring website with pagination. */
    "conductor.list_pages": {
      input: {
        /**
         * The Conductor Monitoring website ID returned by list_websites.
         * @minLength 1
         */
        website_id: string;
        /**
         * The number of records to return per page.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        per_page: number;
        /**
         * The one-based page number to retrieve. Do not use together with page_cursor.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The page cursor returned by the previous Conductor Monitoring page-list response. Do not use together with page.
         * @minLength 1
         */
        page_cursor?: string;
        /** The field Conductor should sort by. */
        sort?: "url";
        /** The Conductor sort direction. */
        direction?: "asc" | "desc";
      };
      output: {
        /** The Conductor Monitoring data object. */
        data: Record<string, unknown>;
        /** The timestamp when Conductor captured the returned data. */
        data_captured_at?: string | null;
        /** Whether Conductor marks the returned data as golden. */
        is_data_golden?: boolean | null;
        /** The raw Conductor Monitoring JSON response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Conductor Monitoring segments for one website. */
    "conductor.list_segments": {
      input: {
        /**
         * The Conductor Monitoring website ID returned by list_websites.
         * @minLength 1
         */
        website_id: string;
      };
      output: {
        /** Segments returned by Conductor Monitoring. */
        data: Array<{
          /** The Conductor Monitoring segment ID. */
          id: string;
          /** The segment color value. */
          color: string | null;
          /** The segment label. */
          label: string | null;
          /** The segment shortcode when available. */
          shortcode: string | null;
          [key: string]: unknown;
        }>;
        /** The raw Conductor Monitoring JSON response. */
        raw: Record<string, unknown>;
      };
    };
    /** List websites available in the connected Conductor Monitoring account. */
    "conductor.list_websites": {
      input: Record<string, never>;
      output: {
        /** Websites returned by Conductor Monitoring. */
        data: Array<{
          /** The Conductor Monitoring website ID. */
          id: string;
          /** The Conductor app URL for the website. */
          app_url: string | null;
          /** The website domain URL. */
          domain: string | null;
          /** The website display name when available. */
          name: string | null;
          /** The configured page capacity for the website. */
          page_capacity: number | null;
          [key: string]: unknown;
        }>;
        /** The raw Conductor Monitoring JSON response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
