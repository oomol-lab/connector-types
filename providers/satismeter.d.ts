import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a SatisMeter project by ID. */
    "satismeter.get_project": {
      input: {
        /**
         * SatisMeter project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** Project returned by SatisMeter. */
        project: {
          /** Project ID. */
          id?: string;
          /** Project name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a SatisMeter survey by ID. */
    "satismeter.get_survey": {
      input: {
        /**
         * SatisMeter project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * SatisMeter survey ID.
         * @minLength 1
         */
        campaignId: string;
      };
      output: {
        /** Survey returned by SatisMeter. */
        survey: {
          /** Survey ID. */
          id?: string;
          /** Survey name. */
          name?: string;
          /** Survey template type returned by SatisMeter. */
          type?: "nps" | "ces" | "csat" | "pmf" | "custom";
          /** Survey state returned by SatisMeter. */
          state?: "live" | "paused" | "draft";
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve aggregated statistics for one SatisMeter survey. */
    "satismeter.get_survey_statistics": {
      input: {
        /**
         * SatisMeter project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * SatisMeter survey ID.
         * @minLength 1
         */
        campaignId: string;
        /**
         * Only include statistics for responses recorded after this timestamp.
         * @format date-time
         */
        startDate?: string;
        /**
         * Only include statistics for responses recorded before this timestamp.
         * @format date-time
         */
        endDate?: string;
      };
      output: {
        /** Survey statistics returned by SatisMeter. */
        statistics: {
          /** Top-level survey response statistics. */
          statistics: {
            /** Total number of responses. */
            responses?: number;
            /** Total number of survey displays. */
            displays?: number;
            /** Ratio of responses over displays in the selected time range. */
            responseRate?: number;
          };
          /** Per-question statistics for the selected survey. */
          questions: Array<{
            /** Question ID. */
            id: string;
            /** Question label in the survey default language. */
            label: string;
            /** Question type. */
            type: "scale" | "smiley" | "long-text" | "single-choice" | "multiple-choice";
            /** Aggregated statistics for the question. */
            statistics: {
              /** Number of responses that answered this question. */
              answers: number;
              /** Per-value answer counts, or null for long-text questions. */
              values?: Array<{
                /** Possible answer value. */
                value: string | number;
                /** Number of answers with this value. */
                answers: number;
              }> | null;
              /** Metric aggregate for the question, or null when unavailable. */
              metric?: {
                /** Metric type calculated for the question. */
                type: "nps" | "ces" | "csat" | "pmf";
                /** Calculated metric value. */
                value: number;
              } | null;
            };
          }>;
        };
      };
    };
    /** List responses recorded across all surveys in a SatisMeter project. */
    "satismeter.list_project_responses": {
      input: {
        /**
         * SatisMeter project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * Only return responses recorded after this timestamp.
         * @format date-time
         */
        startDate?: string;
        /**
         * Only return responses recorded before this timestamp.
         * @format date-time
         */
        endDate?: string;
        /**
         * Cursor returned by a previous SatisMeter response page.
         * @minLength 1
         */
        pageCursor?: string;
        /**
         * Maximum number of results to return on each page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** Responses returned by SatisMeter. */
        responses: Array<{
          /** Response ID. */
          id?: string;
          /** Project ID associated with the response. */
          project?: string;
          /** Survey ID associated with the response. */
          campaign?: string;
          /** Answers left in the response. */
          answers?: Array<{
            /** Answered question ID. */
            id?: string;
            /** Question label displayed to the user. */
            label?: string;
            /** Answer value returned by SatisMeter. */
            value?: string | number | Array<string>;
            /** Type of the answered question. */
            type?: "scale" | "smiley" | "long-text" | "single-choice" | "multiple-choice" | null;
            /** Metric associated with the answered question. */
            metric?: "nps" | "ces" | "csat" | "pmf" | null;
            [key: string]: unknown;
          }>;
          /**
           * Timestamp when the response was recorded.
           * @format date-time
           */
          created?: string;
          /** User who left the response. */
          user?: {
            /** Internal user ID assigned by SatisMeter. */
            id?: string;
            /** Whether the referenced user has been deleted. */
            deleted?: boolean;
            /** External user ID stored on the response. */
            userId?: string | null;
            /** Anonymous ID generated by SatisMeter when userId is unavailable. */
            anonymousId?: string | null;
            /** User traits captured when the response was recorded. */
            traits?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** IP address of the respondent. */
          ip?: string | null;
          /** Location derived from the response IP. */
          location?: {
            /** Country derived from the response IP. */
            country?: {
              /** ISO 3166 country code. */
              code?: string | null;
              /** Country name. */
              name?: string | null;
              [key: string]: unknown;
            } | null;
            /** Region derived from the response IP. */
            region?: {
              /** ISO 3166 region code. */
              code?: string | null;
              /** Region name. */
              name?: string | null;
              [key: string]: unknown;
            } | null;
            /** City derived from the response IP. */
            city?: string | null;
            [key: string]: unknown;
          };
          /** Page URL where the response was created. */
          referrer?: string | null;
          /** Delivery method used for the survey. */
          method?: "In-app" | "Form" | "Mobile" | "Reminder" | "Email";
          /** ISO 639-1 language code. */
          language?: string | null;
          /** Device information for the respondent. */
          device?: {
            /** Type of the device used by the respondent. */
            type?: "phone" | "tablet" | "desktop";
            /** Operating system used by the respondent. */
            os?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Cursor pagination metadata for the current page. */
        page: {
          /** Cursor for the next page, or null when there are no more pages. */
          nextPageCursor?: string | null;
          /** Whether there are more response pages to fetch. */
          hasNextPage?: boolean;
          /** Maximum number of results requested per page. */
          size?: number;
        };
      };
    };
    /** List responses recorded for one SatisMeter survey. */
    "satismeter.list_survey_responses": {
      input: {
        /**
         * SatisMeter project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * SatisMeter survey ID.
         * @minLength 1
         */
        campaignId: string;
        /**
         * Only return responses recorded after this timestamp.
         * @format date-time
         */
        startDate?: string;
        /**
         * Only return responses recorded before this timestamp.
         * @format date-time
         */
        endDate?: string;
        /**
         * Cursor returned by a previous SatisMeter response page.
         * @minLength 1
         */
        pageCursor?: string;
        /**
         * Maximum number of results to return on each page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** Responses returned by SatisMeter. */
        responses: Array<{
          /** Response ID. */
          id?: string;
          /** Project ID associated with the response. */
          project?: string;
          /** Survey ID associated with the response. */
          campaign?: string;
          /** Answers left in the response. */
          answers?: Array<{
            /** Answered question ID. */
            id?: string;
            /** Question label displayed to the user. */
            label?: string;
            /** Answer value returned by SatisMeter. */
            value?: string | number | Array<string>;
            /** Type of the answered question. */
            type?: "scale" | "smiley" | "long-text" | "single-choice" | "multiple-choice" | null;
            /** Metric associated with the answered question. */
            metric?: "nps" | "ces" | "csat" | "pmf" | null;
            [key: string]: unknown;
          }>;
          /**
           * Timestamp when the response was recorded.
           * @format date-time
           */
          created?: string;
          /** User who left the response. */
          user?: {
            /** Internal user ID assigned by SatisMeter. */
            id?: string;
            /** Whether the referenced user has been deleted. */
            deleted?: boolean;
            /** External user ID stored on the response. */
            userId?: string | null;
            /** Anonymous ID generated by SatisMeter when userId is unavailable. */
            anonymousId?: string | null;
            /** User traits captured when the response was recorded. */
            traits?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** IP address of the respondent. */
          ip?: string | null;
          /** Location derived from the response IP. */
          location?: {
            /** Country derived from the response IP. */
            country?: {
              /** ISO 3166 country code. */
              code?: string | null;
              /** Country name. */
              name?: string | null;
              [key: string]: unknown;
            } | null;
            /** Region derived from the response IP. */
            region?: {
              /** ISO 3166 region code. */
              code?: string | null;
              /** Region name. */
              name?: string | null;
              [key: string]: unknown;
            } | null;
            /** City derived from the response IP. */
            city?: string | null;
            [key: string]: unknown;
          };
          /** Page URL where the response was created. */
          referrer?: string | null;
          /** Delivery method used for the survey. */
          method?: "In-app" | "Form" | "Mobile" | "Reminder" | "Email";
          /** ISO 639-1 language code. */
          language?: string | null;
          /** Device information for the respondent. */
          device?: {
            /** Type of the device used by the respondent. */
            type?: "phone" | "tablet" | "desktop";
            /** Operating system used by the respondent. */
            os?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Cursor pagination metadata for the current page. */
        page: {
          /** Cursor for the next page, or null when there are no more pages. */
          nextPageCursor?: string | null;
          /** Whether there are more response pages to fetch. */
          hasNextPage?: boolean;
          /** Maximum number of results requested per page. */
          size?: number;
        };
      };
    };
    /** List surveys configured in a SatisMeter project. */
    "satismeter.list_surveys": {
      input: {
        /**
         * SatisMeter project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** Surveys returned by SatisMeter. */
        surveys: Array<{
          /** Survey ID. */
          id?: string;
          /** Survey name. */
          name?: string;
          /** Survey template type returned by SatisMeter. */
          type?: "nps" | "ces" | "csat" | "pmf" | "custom";
          /** Survey state returned by SatisMeter. */
          state?: "live" | "paused" | "draft";
          [key: string]: unknown;
        }>;
      };
    };
  }
}
