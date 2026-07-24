import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Hotjar survey with its question definitions. */
    "hotjar.get_survey": {
      input: {
        /**
         * The Hotjar site identifier.
         * @minLength 1
         */
        siteId: string;
        /**
         * The Hotjar survey identifier.
         * @minLength 1
         */
        surveyId: string;
      };
      output: {
        /** A Hotjar survey returned by the API. */
        survey: {
          /** The unique Hotjar survey identifier. */
          id?: string;
          /** The Hotjar API path for this survey. */
          url?: string;
          /**
           * The time the survey was created in RFC 3339 format.
           * @format date-time
           */
          created_time?: string;
          /**
           * The time the survey was last updated in RFC 3339 format.
           * @format date-time
           */
          updated_time?: string;
          /** Whether the survey is enabled. */
          is_enabled?: boolean;
          /** The survey name. */
          name?: string;
          /** The Hotjar API path for this survey's responses. */
          responses_url?: string;
          /** The Hotjar survey presentation type. */
          type?: "link" | "full_screen" | "popover";
          /** The questions included in this survey response. */
          questions?: Array<{
            /** The unique Hotjar question identifier. */
            id?: string;
            /** Whether the respondent must answer this question. */
            is_required?: boolean;
            /** The survey question text. */
            text?: string;
            /** The Hotjar question type, such as reaction, long-text, single-option, rating-1-5, nps, statement, or thank-you. */
            type?: string;
            /**
             * The image URL associated with the question, when present.
             * @format uri
             */
            image_url?: string | null;
            /** The selectable choices for an option question. */
            choices?: Array<{
              /** The text shown for this choice. */
              text?: string;
              /** Whether respondents can add a comment for this choice. */
              allow_comment?: boolean;
              [key: string]: unknown;
            }> | null;
            /** The endpoint labels for a scored Hotjar question. */
            labels?: {
              /** The label shown for the lowest score. */
              low_label?: string;
              /** The label shown for the highest score. */
              high_label?: string;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          }>;
          /** Whether Hotjar sentiment analysis is enabled for this survey. */
          sentiment_analysis_enabled?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** List responses submitted to one Hotjar survey with cursor pagination. */
    "hotjar.list_survey_responses": {
      input: {
        /**
         * The Hotjar site identifier.
         * @minLength 1
         */
        siteId: string;
        /**
         * The Hotjar survey identifier.
         * @minLength 1
         */
        surveyId: string;
        /**
         * The maximum number of records to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque cursor returned as nextCursor by a previous Hotjar list action.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The Hotjar survey responses returned for this page. */
        responses: Array<{
          /** The unique Hotjar survey response identifier. */
          id?: string;
          /** The answers included in this survey response. */
          answers?: Array<{
            /** The identifier of the answered survey question. */
            question_id?: string;
            /** The answer value recorded by Hotjar. */
            answer?: string;
            /** The optional respondent comment. */
            comment?: string | null;
            /** The tags attached to this answer. */
            tags?: Array<{
              /** The tag name. */
              name?: string;
              [key: string]: unknown;
            }>;
            /** The sentiment assigned to the answer text, when available. */
            sentiment?: "positive" | "negative" | "neutral" | null;
            [key: string]: unknown;
          }>;
          /** The browser used to submit the survey response. */
          browser?: string;
          /** The two-letter country code associated with the respondent. */
          country?: string;
          /**
           * The response submission time in RFC 3339 format.
           * @format date-time
           */
          created_time?: string;
          /** The device type used to submit the response. */
          device?: "tablet" | "mobile" | "desktop";
          /** The Hotjar identifier for the respondent. */
          hotjar_user_id?: string;
          /** Whether the survey response is complete. */
          is_complete?: boolean;
          /** The respondent's operating system. */
          os?: string;
          /**
           * The related Hotjar recording URL, or null when no recording is available.
           * @format uri
           */
          recording_url?: string | null;
          /**
           * The site URL where the survey response was submitted.
           * @format uri
           */
          response_origin_url?: string;
          /** The respondent attributes supplied through the Hotjar Identify API. */
          user_attributes?: Array<{
            /** The user attribute name. */
            name?: string;
            /** The string, number, boolean, or datetime attribute value. */
            value?: unknown;
            [key: string]: unknown;
          }>;
          /** The browser window size for a survey response. */
          window_size?: {
            /** The browser window width in pixels. */
            width?: number;
            /** The browser window height in pixels. */
            height?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The cursor for the next page, or null when there are no more responses. */
        nextCursor: string | null;
      };
    };
    /** List surveys for a Hotjar site with cursor pagination. */
    "hotjar.list_surveys": {
      input: {
        /**
         * The Hotjar site identifier.
         * @minLength 1
         */
        siteId: string;
        /**
         * The maximum number of records to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque cursor returned as nextCursor by a previous Hotjar list action.
         * @minLength 1
         */
        cursor?: string;
        /** Whether each survey should include its question definitions. */
        withQuestions?: boolean;
      };
      output: {
        /** The Hotjar surveys returned for this page. */
        surveys: Array<{
          /** The unique Hotjar survey identifier. */
          id?: string;
          /** The Hotjar API path for this survey. */
          url?: string;
          /**
           * The time the survey was created in RFC 3339 format.
           * @format date-time
           */
          created_time?: string;
          /**
           * The time the survey was last updated in RFC 3339 format.
           * @format date-time
           */
          updated_time?: string;
          /** Whether the survey is enabled. */
          is_enabled?: boolean;
          /** The survey name. */
          name?: string;
          /** The Hotjar API path for this survey's responses. */
          responses_url?: string;
          /** The Hotjar survey presentation type. */
          type?: "link" | "full_screen" | "popover";
          /** The questions included in this survey response. */
          questions?: Array<{
            /** The unique Hotjar question identifier. */
            id?: string;
            /** Whether the respondent must answer this question. */
            is_required?: boolean;
            /** The survey question text. */
            text?: string;
            /** The Hotjar question type, such as reaction, long-text, single-option, rating-1-5, nps, statement, or thank-you. */
            type?: string;
            /**
             * The image URL associated with the question, when present.
             * @format uri
             */
            image_url?: string | null;
            /** The selectable choices for an option question. */
            choices?: Array<{
              /** The text shown for this choice. */
              text?: string;
              /** Whether respondents can add a comment for this choice. */
              allow_comment?: boolean;
              [key: string]: unknown;
            }> | null;
            /** The endpoint labels for a scored Hotjar question. */
            labels?: {
              /** The label shown for the lowest score. */
              low_label?: string;
              /** The label shown for the highest score. */
              high_label?: string;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          }>;
          /** Whether Hotjar sentiment analysis is enabled for this survey. */
          sentiment_analysis_enabled?: boolean;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page, or null when there are no more surveys. */
        nextCursor: string | null;
      };
    };
    /** Submit a Hotjar organization user lookup request, optionally deleting all matching data when deleteAllHits is true. */
    "hotjar.submit_user_lookup": {
      input: {
        /**
         * The Hotjar organization identifier.
         * @minLength 1
         */
        organizationId: string;
        /**
         * The email address of the data subject.
         * @format email
         */
        dataSubjectEmail?: string;
        /** A mapping from Hotjar site identifiers to the user's identifier on each site. */
        dataSubjectSiteIdToUserIdMap?: Record<string, string>;
        /** Whether Hotjar should immediately and silently delete all matching user data. Set false to request a lookup report instead. */
        deleteAllHits: boolean;
      };
      output: {
        /** Whether Hotjar accepted the lookup or deletion request. */
        accepted: boolean;
      };
    };
  }
}
