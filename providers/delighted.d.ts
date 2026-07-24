import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create or update a Delighted person and optionally schedule a survey request. */
    "delighted.create_or_update_person": {
      input: {
        /**
         * Email address of the person.
         * @format email
         */
        email?: string;
        /**
         * Phone number in E.164 format. The value must start with a plus sign followed by digits.
         * @minLength 2
         * @maxLength 16
         */
        phone_number?: string;
        /** Survey channel used to send the request. The default is email. */
        channel?: "email" | "sms";
        /**
         * Name of the person.
         * @minLength 1
         */
        name?: string;
        /**
         * Amount of seconds to wait before sending the survey request.
         * @minimum 0
         */
        delay?: number;
        /** Custom properties associated with the survey request. */
        properties?: Record<string, unknown>;
        /** Set to false to create or update the person without sending a survey. */
        send?: boolean;
        /**
         * Unix timestamp to manually set when the person was last sent a survey.
         * @minimum 0
         */
        last_sent_at?: number;
        /**
         * New email address used to update an existing person.
         * @format email
         */
        email_update?: string;
        /**
         * New phone number used to update an existing person.
         * @minLength 2
         * @maxLength 16
         */
        phone_number_update?: string;
      };
      output: {
        /** Created or updated person payload returned by Delighted. */
        person: {
          /** Unique identifier of the person. */
          id: string;
          /**
           * Email address of the person.
           * @format email
           */
          email?: string;
          /** Display name of the person. */
          name?: string | null;
          /**
           * Unix timestamp indicating when the person was created.
           * @minimum 0
           */
          created_at?: number;
          /**
           * Phone number of the person in E.164 format.
           * @minLength 2
           * @maxLength 16
           */
          phone_number?: string;
          /**
           * Unix timestamp indicating when the person was last sent a survey.
           * @minimum 0
           */
          last_sent_at?: number;
          /**
           * Unix timestamp indicating when the person last responded to a survey.
           * @minimum 0
           */
          last_responded_at?: number;
          /**
           * Unix timestamp indicating when the next survey is scheduled, or null when unavailable.
           * @minimum 0
           */
          next_survey_scheduled_at?: number | null;
          /**
           * Unix timestamp indicating when a newly created or updated survey request is scheduled.
           * @minimum 0
           */
          survey_scheduled_at?: number | null;
          /** Custom properties associated with the person. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Delighted person and all related survey history. */
    "delighted.delete_person": {
      input: {
        /**
         * Unique identifier of the person.
         * @minLength 1
         */
        id?: string;
        /**
         * Email address of the person.
         * @format email
         */
        email?: string;
        /**
         * Phone number in E.164 format. The value must start with a plus sign followed by digits.
         * @minLength 2
         * @maxLength 16
         */
        phone_number?: string;
      };
      output: {
        /** Whether Delighted accepted the request. */
        ok: boolean;
      };
    };
    /** Retrieve Net Promoter Score and related metrics from Delighted. */
    "delighted.get_metrics": {
      input: {
        /**
         * Unix timestamp restricting metrics to those created on or after this time.
         * @minimum 0
         */
        since?: number;
        /**
         * Unix timestamp restricting metrics to those created on or before this time.
         * @minimum 0
         */
        until?: number;
        /**
         * Trend identifier restricting metrics to a specific trend.
         * @minLength 1
         */
        trend?: string;
        /** Metric groups to return. The default is core. */
        groups?: Array<"core" | "email" | "kiosk" | "link" | "sms" | "web">;
      };
      output: {
        /** Metrics payload returned by Delighted. */
        metrics: {
          /** Net Promoter Score for the selected time range. */
          nps?: number;
          /** Number of promoter responses in the selected time range. */
          promoter_count?: number;
          /** Percentage of promoter responses in the selected time range. */
          promoter_percent?: number;
          /** Number of passive responses in the selected time range. */
          passive_count?: number;
          /** Percentage of passive responses in the selected time range. */
          passive_percent?: number;
          /** Number of detractor responses in the selected time range. */
          detractor_count?: number;
          /** Percentage of detractor responses in the selected time range. */
          detractor_percent?: number;
          /** Total number of responses in the selected time range. */
          response_count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List bounced people in the connected Delighted account. */
    "delighted.list_bounced_people": {
      input: {
        /**
         * Number of results to return per page. The default is 20. The maximum is 100.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
        /**
         * The page number to return. The default is 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Unix timestamp restricting bounces to those created on or after this time.
         * @minimum 0
         */
        since?: number;
        /**
         * Unix timestamp restricting bounces to those created on or before this time.
         * @minimum 0
         */
        until?: number;
      };
      output: {
        /** Bounce records returned by Delighted. */
        bounces: Array<{
          /** Identifier of the bounced person. */
          person_id: string;
          /**
           * Email address of the bounced person.
           * @format email
           */
          email: string;
          /** Display name of the bounced person. */
          name?: string | null;
          /**
           * Unix timestamp indicating when the email bounced.
           * @minimum 0
           */
          bounced_at: number;
        }>;
        /** Next page number when another page is likely available, or null otherwise. */
        next_page: number | null;
      };
    };
    /** List people in the connected Delighted account. */
    "delighted.list_people": {
      input: {
        /**
         * Number of results to return per page. The default is 20. The maximum is 100.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
        /**
         * Unix timestamp restricting results to people created on or after this time.
         * @minimum 0
         */
        since?: number;
        /**
         * Unix timestamp restricting results to people created on or before this time.
         * @minimum 0
         */
        until?: number;
        /**
         * Email address of the person.
         * @format email
         */
        email?: string;
        /**
         * Phone number in E.164 format. The value must start with a plus sign followed by digits.
         * @minLength 2
         * @maxLength 16
         */
        phone_number?: string;
        /**
         * Opaque pagination cursor returned in the Link header of a previous response.
         * @minLength 1
         */
        page_info?: string;
      };
      output: {
        /** People returned by Delighted. */
        people: Array<{
          /** Unique identifier of the person. */
          id: string;
          /**
           * Email address of the person.
           * @format email
           */
          email?: string;
          /** Display name of the person. */
          name?: string | null;
          /**
           * Unix timestamp indicating when the person was created.
           * @minimum 0
           */
          created_at?: number;
          /**
           * Phone number of the person in E.164 format.
           * @minLength 2
           * @maxLength 16
           */
          phone_number?: string;
          /**
           * Unix timestamp indicating when the person was last sent a survey.
           * @minimum 0
           */
          last_sent_at?: number;
          /**
           * Unix timestamp indicating when the person last responded to a survey.
           * @minimum 0
           */
          last_responded_at?: number;
          /**
           * Unix timestamp indicating when the next survey is scheduled, or null when unavailable.
           * @minimum 0
           */
          next_survey_scheduled_at?: number | null;
          /**
           * Unix timestamp indicating when a newly created or updated survey request is scheduled.
           * @minimum 0
           */
          survey_scheduled_at?: number | null;
          /** Custom properties associated with the person. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Opaque page_info cursor for the next page, or null when there is no next page. */
        next_page_info: string | null;
        /** Absolute URL for the next page returned in the Link header, or null when absent. */
        next_page_url: string | null;
      };
    };
    /** List survey responses collected in the connected Delighted account. */
    "delighted.list_survey_responses": {
      input: {
        /**
         * Number of results to return per page. The default is 20. The maximum is 100.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
        /**
         * The page number to return. The default is 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Unix timestamp restricting responses to those created on or after this time.
         * @minimum 0
         */
        since?: number;
        /**
         * Unix timestamp restricting responses to those created on or before this time.
         * @minimum 0
         */
        until?: number;
        /**
         * Unix timestamp restricting responses to those updated on or after this time.
         * @minimum 0
         */
        updated_since?: number;
        /**
         * Unix timestamp restricting responses to those updated on or before this time.
         * @minimum 0
         */
        updated_until?: number;
        /**
         * Trend identifier restricting responses to a specific trend.
         * @minLength 1
         */
        trend?: string;
        /**
         * Unique identifier of the person.
         * @minLength 1
         */
        person_id?: string;
        /**
         * Email address of the person.
         * @format email
         */
        person_email?: string;
        /** Sort order for responses based on creation time or updated_at. */
        order?: "asc" | "desc" | "asc:updated_at" | "desc:updated_at";
        /** Objects to expand in the survey response payload. The default is notes. */
        expand?: Array<"person" | "notes">;
      };
      output: {
        /** Survey responses returned by Delighted. */
        responses: Array<{
          /** Unique identifier of the survey response. */
          id: string;
          /** Person identifier or expanded person object associated with the response. */
          person: string | {
            /** Unique identifier of the person. */
            id: string;
            /**
             * Email address of the person.
             * @format email
             */
            email?: string;
            /** Display name of the person. */
            name?: string | null;
            /**
             * Unix timestamp indicating when the person was created.
             * @minimum 0
             */
            created_at?: number;
            /**
             * Phone number of the person in E.164 format.
             * @minLength 2
             * @maxLength 16
             */
            phone_number?: string;
            /**
             * Unix timestamp indicating when the person was last sent a survey.
             * @minimum 0
             */
            last_sent_at?: number;
            /**
             * Unix timestamp indicating when the person last responded to a survey.
             * @minimum 0
             */
            last_responded_at?: number;
            /**
             * Unix timestamp indicating when the next survey is scheduled, or null when unavailable.
             * @minimum 0
             */
            next_survey_scheduled_at?: number | null;
            /**
             * Unix timestamp indicating when a newly created or updated survey request is scheduled.
             * @minimum 0
             */
            survey_scheduled_at?: number | null;
            /** Custom properties associated with the person. */
            properties?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Survey type returned by Delighted. */
          survey_type: string;
          /** Primary survey score, or null when not provided. */
          score?: number | null;
          /** Primary free-form comment from the response, or null when not provided. */
          comment?: string | null;
          /** Permalink URL for viewing the response. */
          permalink: string;
          /**
           * Unix timestamp indicating when the response was created.
           * @minimum 0
           */
          created_at: number;
          /** Unix timestamp indicating when the response was last updated. */
          updated_at?: number | null;
          /** Custom properties associated with the responding person. */
          person_properties?: Record<string, unknown> | null;
          /** Expanded notes attached to the response. */
          notes?: Array<{
            /** Unique identifier of the note. */
            id: string;
            /** Text content of the note. */
            text: string;
            /**
             * Email address of the teammate who created the note.
             * @format email
             */
            user_email: string;
            /**
             * Unix timestamp indicating when the note was created.
             * @minimum 0
             */
            created_at: number;
          }>;
          /** Tags attached to the response. */
          tags?: Array<string>;
          /** Additional follow-up answers collected for the response. */
          additional_answers?: Array<{
            /** Unique identifier of the follow-up answer. */
            id: string;
            /** Answer payload returned by Delighted. */
            value: {
              /** Free-form text answer when the question type is free_response. */
              free_response?: string | null;
              /** Scale answer when the question type is scale. */
              scale?: number | null;
              /** Selected option payload when the question type is select_one. */
              select_one?: unknown;
              /** Selected option payload when the question type is select_many. */
              select_many?: unknown;
            };
            /** Question metadata for this answer. */
            question: {
              /** Unique identifier of the follow-up question. */
              id: string;
              /** Question type returned by Delighted. */
              type: string;
              /** Question text shown to the respondent. */
              text: string;
            };
          }>;
          [key: string]: unknown;
        }>;
        /** Next page number when another page is likely available, or null otherwise. */
        next_page: number | null;
      };
    };
    /** List unsubscribed people in the connected Delighted account. */
    "delighted.list_unsubscribed_people": {
      input: {
        /**
         * Number of results to return per page. The default is 20. The maximum is 100.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
        /**
         * The page number to return. The default is 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Unix timestamp restricting unsubscribes to those created on or after this time.
         * @minimum 0
         */
        since?: number;
        /**
         * Unix timestamp restricting unsubscribes to those created on or before this time.
         * @minimum 0
         */
        until?: number;
      };
      output: {
        /** Unsubscribe records returned by Delighted. */
        unsubscribes: Array<{
          /** Identifier of the unsubscribed person. */
          person_id: string;
          /**
           * Email address of the unsubscribed person.
           * @format email
           */
          email: string;
          /** Display name of the unsubscribed person. */
          name?: string | null;
          /**
           * Unix timestamp indicating when the person unsubscribed.
           * @minimum 0
           */
          unsubscribed_at: number;
        }>;
        /** Next page number when another page is likely available, or null otherwise. */
        next_page: number | null;
      };
    };
    /** Add a person to the Delighted unsubscribe list. */
    "delighted.unsubscribe_person": {
      input: {
        /**
         * Email address of the person to unsubscribe.
         * @format email
         */
        person_email: string;
      };
      output: {
        /** Whether Delighted accepted the request. */
        ok: boolean;
      };
    };
  }
}
