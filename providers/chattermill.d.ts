import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a response in a Chattermill project. */
    "chattermill.create_response": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
        /** Chattermill response payload sent inside the response wrapper. */
        response: {
          /** Feedback score accepted by Chattermill. */
          score?: number;
          /** Feedback comment text. */
          comment?: string;
          /** Chattermill attribute map keyed by attribute identifier. */
          user_meta?: Record<string, Record<string, unknown>>;
          /** Chattermill attribute map keyed by attribute identifier. */
          segments?: Record<string, Record<string, unknown>>;
          /** Chattermill data type key or name. */
          data_type?: string;
          /** Chattermill data source key or name. */
          data_source?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** Chattermill response object. */
        response: Record<string, unknown> | null;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** Permanently delete a Chattermill response by ID. */
    "chattermill.delete_response": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
        /**
         * Chattermill response identifier used in the API path.
         * @minLength 1
         */
        responseId: string;
      };
      output: {
        /** Whether the connector sent the deletion request successfully. */
        deleted: boolean;
        /** Chattermill response identifier that was deleted. */
        responseId: string;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** Get a Chattermill attribute by ID. */
    "chattermill.get_attribute": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
        /**
         * Chattermill resource identifier used in the API path.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Raw Chattermill object. */
        attribute: Record<string, unknown>;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** Get a Chattermill category by ID. */
    "chattermill.get_category": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
        /**
         * Chattermill resource identifier used in the API path.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Raw Chattermill object. */
        category: Record<string, unknown>;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** Get a Chattermill data source by ID. */
    "chattermill.get_data_source": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
        /**
         * Chattermill resource identifier used in the API path.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Raw Chattermill object. */
        dataSource: Record<string, unknown>;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** Get a Chattermill data type by ID. */
    "chattermill.get_data_type": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
        /**
         * Chattermill resource identifier used in the API path.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Raw Chattermill object. */
        dataType: Record<string, unknown>;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** Get a Chattermill metric value for a project. */
    "chattermill.get_metric": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
        /**
         * Metric type accepted by Chattermill, such as nps.
         * @minLength 1
         */
        type: string;
        /**
         * Metric range start timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Metric range end timestamp.
         * @format date-time
         */
        to?: string;
        /** Chattermill category filter. */
        category?: string;
        /** Chattermill theme filter. */
        theme?: string;
        /** Chattermill sentiment filter. */
        sentiment?: string;
      };
      output: {
        /** Raw Chattermill response payload. */
        metric: unknown;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** Get a Chattermill project by project ID. */
    "chattermill.get_project": {
      input: {
        /**
         * Chattermill resource identifier used in the API path.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Chattermill project object. */
        project: {
          /** Chattermill project identifier. */
          id?: unknown;
          /** Chattermill project key. */
          key?: string;
          /** Chattermill project name. */
          name?: string;
          [key: string]: unknown;
        };
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** Get a single Chattermill response by ID. */
    "chattermill.get_response": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
        /**
         * Chattermill resource identifier used in the API path.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Chattermill response object. */
        response: Record<string, unknown>;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** Get a Chattermill tag by ID. */
    "chattermill.get_tag": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
        /**
         * Chattermill resource identifier used in the API path.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Raw Chattermill object. */
        tag: Record<string, unknown>;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** Get a Chattermill theme by ID. */
    "chattermill.get_theme": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
        /**
         * Chattermill resource identifier used in the API path.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Raw Chattermill object. */
        theme: Record<string, unknown>;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** List attributes for a Chattermill project. */
    "chattermill.list_attributes": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
      };
      output: {
        /** Chattermill attributes returned by the API. */
        attributes: Array<Record<string, unknown>>;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** List categories for a Chattermill project. */
    "chattermill.list_categories": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
      };
      output: {
        /** Chattermill categories returned by the API. */
        categories: Array<Record<string, unknown>>;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** List custom segments for a Chattermill project. */
    "chattermill.list_custom_segments": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
      };
      output: {
        /** Chattermill customSegments returned by the API. */
        customSegments: Array<Record<string, unknown>>;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** List data sources for a Chattermill project. */
    "chattermill.list_data_sources": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
      };
      output: {
        /** Chattermill dataSources returned by the API. */
        dataSources: Array<Record<string, unknown>>;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** List data types for a Chattermill project. */
    "chattermill.list_data_types": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
      };
      output: {
        /** Chattermill dataTypes returned by the API. */
        dataTypes: Array<Record<string, unknown>>;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** List Chattermill projects accessible to the API key. */
    "chattermill.list_projects": {
      input: Record<string, never>;
      output: {
        /** Projects returned by Chattermill. */
        projects: Array<{
          /** Chattermill project identifier. */
          id?: unknown;
          /** Chattermill project key. */
          key?: string;
          /** Chattermill project name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** List responses for a Chattermill project with optional filters. */
    "chattermill.list_responses": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
        /**
         * Page number to request from Chattermill.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of records to return per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /**
         * Only include responses created at or after this timestamp.
         * @format date-time
         */
        from?: string;
        /**
         * Only include responses created at or before this timestamp.
         * @format date-time
         */
        to?: string;
        /** Chattermill data type filter. */
        dataType?: string;
        /** Chattermill data source filter. */
        dataSource?: string;
        /** Response property name to filter on. */
        filterProperty?: string;
        /** Response property value to filter on. */
        filterValue?: string;
        /** Whether text analytics must be processed. */
        textAnalyticsProcessed?: boolean;
        /** Whether responses must include a comment. */
        commentPresent?: boolean;
        /** Minimum response score. */
        scoreFrom?: number;
        /** Maximum response score. */
        scoreTo?: number;
        /** Chattermill custom segment identifier filter. */
        customSegmentId?: string;
        /** Chattermill theme identifier filter. */
        themeId?: string;
        /**
         * Only include responses updated at or after this timestamp.
         * @format date-time
         */
        updatedFrom?: string;
        /**
         * Only include responses updated at or before this timestamp.
         * @format date-time
         */
        updatedTo?: string;
      };
      output: {
        /** Responses returned by Chattermill. */
        responses: Array<Record<string, unknown>>;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** List tags for a Chattermill project. */
    "chattermill.list_tags": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
      };
      output: {
        /** Chattermill tags returned by the API. */
        tags: Array<Record<string, unknown>>;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** List themes for a Chattermill project. */
    "chattermill.list_themes": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
      };
      output: {
        /** Chattermill themes returned by the API. */
        themes: Array<Record<string, unknown>>;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** Search for Chattermill responses by response ID, user metadata, or custom criteria. */
    "chattermill.search_responses": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
        /**
         * Page number to request from Chattermill.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of records to return per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** Specific Chattermill response identifier to search for. */
        responseId?: string;
        /** Chattermill user_meta property name to search. */
        userMetaProperty?: string;
        /** Chattermill user_meta property value to search. */
        userMetaValue?: string;
        /** Chattermill custom segment identifier filter. */
        customSegmentId?: string;
      };
      output: {
        /** Responses returned by Chattermill search. */
        responses: Array<Record<string, unknown>>;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
    /** Update user metadata, segments, or other response fields in Chattermill. */
    "chattermill.update_response": {
      input: {
        /**
         * Chattermill project key or identifier used in the API path.
         * @minLength 1
         */
        project: string;
        /**
         * Chattermill response identifier used in the API path.
         * @minLength 1
         */
        responseId: string;
        /** Chattermill response payload sent inside the response wrapper. */
        response: {
          /** Feedback score accepted by Chattermill. */
          score?: number;
          /** Feedback comment text. */
          comment?: string;
          /** Chattermill attribute map keyed by attribute identifier. */
          user_meta?: Record<string, Record<string, unknown>>;
          /** Chattermill attribute map keyed by attribute identifier. */
          segments?: Record<string, Record<string, unknown>>;
          /** Chattermill data type key or name. */
          data_type?: string;
          /** Chattermill data source key or name. */
          data_source?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** Chattermill response object. */
        response: Record<string, unknown> | null;
        /** Raw Chattermill response payload. */
        raw: unknown;
      };
    };
  }
}
