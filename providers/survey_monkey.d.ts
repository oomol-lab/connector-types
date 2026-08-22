import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a SurveyMonkey contact for use in survey invitations. */
    "survey_monkey.create_contact": {
      input: {
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /**
         * The contact first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The contact last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * The contact phone number.
         * @minLength 1
         */
        phoneNumber?: string;
        /** Custom contact field values keyed by SurveyMonkey field identifier. */
        customFields?: Record<string, string>;
      };
      output: {
        /** The contact created by SurveyMonkey. */
        contact: {
          /**
           * The contact identifier.
           * @minLength 1
           */
          id?: string;
          /** The contact email address when available. */
          email?: string | null;
          /** The contact first name. */
          first_name?: string;
          /** The contact last name. */
          last_name?: string;
          /** The contact phone number when available. */
          phone_number?: string | null;
          /** The API URL of the contact. */
          href?: string;
          /** The custom field values keyed by SurveyMonkey field identifier. */
          custom_fields?: Record<string, string> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create a SurveyMonkey contact list for survey recipients. */
    "survey_monkey.create_contact_list": {
      input: {
        /**
         * The contact list name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The contact list created by SurveyMonkey. */
        contactList: {
          /**
           * The contact list identifier.
           * @minLength 1
           */
          id?: string;
          /** The contact list name. */
          name?: string;
          /** The API URL of the contact list. */
          href?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a blank SurveyMonkey survey with one empty page. */
    "survey_monkey.create_survey": {
      input: {
        /**
         * The title of the new survey.
         * @minLength 1
         */
        title: string;
        /**
         * An internal nickname for the survey.
         * @minLength 1
         */
        nickname?: string;
        /**
         * The survey language code, such as `en`.
         * @minLength 1
         */
        language?: string;
        /**
         * The folder identifier where the survey will be created.
         * @minLength 1
         */
        folderId?: string;
        /** Whether to display the SurveyMonkey footer. */
        footer?: boolean;
      };
      output: {
        /** The survey created by SurveyMonkey. */
        survey: {
          /**
           * The survey identifier.
           * @minLength 1
           */
          id?: string;
          /** The survey title. */
          title?: string;
          /** The internal survey nickname. */
          nickname?: string;
          /** The survey language code. */
          language?: string;
          /** The API URL of the survey. */
          href?: string;
          /** The timestamp when the survey was created. */
          date_created?: string;
          /** The timestamp when the survey was last modified. */
          date_modified?: string;
          /** The number of survey responses. */
          response_count?: number;
          /** The number of survey questions. */
          question_count?: number;
          /** The number of survey pages. */
          page_count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Create a public weblink collector for a SurveyMonkey survey. */
    "survey_monkey.create_weblink_collector": {
      input: {
        /**
         * The SurveyMonkey survey identifier.
         * @minLength 1
         */
        surveyId: string;
        /**
         * The collector name.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** The weblink collector created by SurveyMonkey. */
        collector: {
          /**
           * The collector identifier.
           * @minLength 1
           */
          id?: string;
          /** The collector name. */
          name?: string;
          /** The collector type. */
          type?: string;
          /** The collector status. */
          status?: string;
          /** The public collector URL, when available. */
          url?: string;
          /** The API URL of the collector. */
          href?: string;
          /** The number of responses received by the collector. */
          response_count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get the SurveyMonkey user and plan associated with the connected account. */
    "survey_monkey.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The authenticated SurveyMonkey user. */
        user: {
          /**
           * The SurveyMonkey user identifier.
           * @minLength 1
           */
          id?: string;
          /** The SurveyMonkey username. */
          username?: string;
          /** The user email address. */
          email?: string;
          /** The user first name. */
          first_name?: string;
          /** The user last name. */
          last_name?: string;
          /** The SurveyMonkey account plan type. */
          account_type?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a survey with its pages, questions, and answer choices. */
    "survey_monkey.get_survey_details": {
      input: {
        /**
         * The SurveyMonkey survey identifier.
         * @minLength 1
         */
        surveyId: string;
      };
      output: {
        /** The expanded survey returned by SurveyMonkey. */
        survey: {
          /**
           * The survey identifier.
           * @minLength 1
           */
          id?: string;
          /** The survey title. */
          title?: string;
          /** The internal survey nickname. */
          nickname?: string;
          /** The survey language code. */
          language?: string;
          /** The API URL of the survey. */
          href?: string;
          /** The timestamp when the survey was created. */
          date_created?: string;
          /** The timestamp when the survey was last modified. */
          date_modified?: string;
          /** The number of survey responses. */
          response_count?: number;
          /** The number of survey questions. */
          question_count?: number;
          /** The number of survey pages. */
          page_count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get one SurveyMonkey response including its question answers. */
    "survey_monkey.get_survey_response_details": {
      input: {
        /**
         * The SurveyMonkey survey identifier.
         * @minLength 1
         */
        surveyId: string;
        /**
         * The SurveyMonkey response identifier.
         * @minLength 1
         */
        responseId: string;
      };
      output: {
        /** The requested detailed survey response. */
        response: {
          /**
           * The response identifier.
           * @minLength 1
           */
          id?: string;
          /** The survey identifier associated with the response. */
          survey_id?: string;
          /** The collector identifier associated with the response. */
          collector_id?: string;
          /** The response status. */
          response_status?: string;
          /** The timestamp when the response was created. */
          date_created?: string;
          /** The timestamp when the response was last modified. */
          date_modified?: string;
          /** The response pages and answers returned by SurveyMonkey. */
          pages?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get aggregate answer counts and basic statistics for every question in a SurveyMonkey survey. */
    "survey_monkey.get_survey_rollups": {
      input: {
        /**
         * The SurveyMonkey survey identifier.
         * @minLength 1
         */
        surveyId: string;
        /**
         * Limit the aggregation to responses from these collector identifiers.
         * @minItems 1
         */
        collectorIds?: Array<string>;
        /** Limit the aggregation to responses with this status. */
        status?: "completed" | "partial" | "overquota" | "disqualified";
        /**
         * Include responses created at or after this SurveyMonkey datetime value.
         * @minLength 1
         */
        startCreatedAt?: string;
        /**
         * Include responses created at or before this SurveyMonkey datetime value.
         * @minLength 1
         */
        endCreatedAt?: string;
        /**
         * Include responses last modified at or after this SurveyMonkey datetime value.
         * @minLength 1
         */
        startModifiedAt?: string;
        /**
         * Include responses last modified at or before this SurveyMonkey datetime value.
         * @minLength 1
         */
        endModifiedAt?: string;
      };
      output: {
        /** The aggregate results returned for the survey questions. */
        rollups: Array<{
          /**
           * The SurveyMonkey question identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * The API URL of the question rollup.
           * @format uri
           */
          href?: string;
          /** The SurveyMonkey question family. */
          family?: string;
          /** The SurveyMonkey question subtype. */
          subtype?: string;
          /** The aggregate answer counts and statistics returned for the question. */
          summary?: Array<{
            /**
             * The number of respondents who answered the question.
             * @minimum 0
             */
            answered?: number;
            /**
             * The number of respondents who skipped the question.
             * @minimum 0
             */
            skipped?: number;
            /**
             * The number of respondents who selected an other-answer option.
             * @minimum 0
             */
            other_answered?: number;
            /** Provider-defined basic statistics for supported closed-ended questions. */
            stats?: unknown;
            /** Provider-defined answer choice identifiers and aggregate counts. */
            choices?: unknown;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List collectors and distribution URLs for a SurveyMonkey survey. */
    "survey_monkey.list_collectors": {
      input: {
        /**
         * The SurveyMonkey survey identifier.
         * @minLength 1
         */
        surveyId: string;
        /**
         * The 1-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of resources to return on this page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
      };
      output: {
        /** The collectors returned on this page. */
        items: Array<{
          /**
           * The collector identifier.
           * @minLength 1
           */
          id?: string;
          /** The collector name. */
          name?: string;
          /** The collector type. */
          type?: string;
          /** The collector status. */
          status?: string;
          /** The public collector URL, when available. */
          url?: string;
          /** The API URL of the collector. */
          href?: string;
          /** The number of responses received by the collector. */
          response_count?: number;
          [key: string]: unknown;
        }>;
        /** The current page number. */
        page: number;
        /** The number of resources requested per page. */
        perPage: number;
        /** The total number of matching resources. */
        total: number;
        /** The pagination links returned by SurveyMonkey. */
        links: {
          /** The URL of the current page. */
          self?: string;
          /** The URL of the next page, when available. */
          next?: string;
          /** The URL of the previous page, when available. */
          prev?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List contact lists in the connected SurveyMonkey account. */
    "survey_monkey.list_contact_lists": {
      input: {
        /**
         * The 1-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of resources to return on this page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
      };
      output: {
        /** The contact lists returned on this page. */
        items: Array<{
          /**
           * The contact list identifier.
           * @minLength 1
           */
          id?: string;
          /** The contact list name. */
          name?: string;
          /** The API URL of the contact list. */
          href?: string;
          [key: string]: unknown;
        }>;
        /** The current page number. */
        page: number;
        /** The number of resources requested per page. */
        perPage: number;
        /** The total number of matching resources. */
        total: number;
        /** The pagination links returned by SurveyMonkey. */
        links: {
          /** The URL of the current page. */
          self?: string;
          /** The URL of the next page, when available. */
          next?: string;
          /** The URL of the previous page, when available. */
          prev?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List, filter, and search contacts in the connected SurveyMonkey account. */
    "survey_monkey.list_contacts": {
      input: {
        /**
         * The 1-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of resources to return on this page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
        /** The contact delivery status to include. */
        status?: "active" | "optout" | "bounced";
        /**
         * The contact field used for sorting.
         * @minLength 1
         */
        sortBy?: string;
        /** The contact sort direction. */
        sortOrder?: "ASC" | "DESC";
        /**
         * The text used to search contacts.
         * @minLength 1
         */
        search?: string;
        /**
         * The contact field used for searching.
         * @minLength 1
         */
        searchBy?: string;
      };
      output: {
        /** The contacts returned on this page. */
        items: Array<{
          /**
           * The contact identifier.
           * @minLength 1
           */
          id?: string;
          /** The contact email address when available. */
          email?: string | null;
          /** The contact first name. */
          first_name?: string;
          /** The contact last name. */
          last_name?: string;
          /** The contact phone number when available. */
          phone_number?: string | null;
          /** The API URL of the contact. */
          href?: string;
          /** The custom field values keyed by SurveyMonkey field identifier. */
          custom_fields?: Record<string, string> | null;
          [key: string]: unknown;
        }>;
        /** The current page number. */
        page: number;
        /** The number of resources requested per page. */
        perPage: number;
        /** The total number of matching resources. */
        total: number;
        /** The pagination links returned by SurveyMonkey. */
        links: {
          /** The URL of the current page. */
          self?: string;
          /** The URL of the next page, when available. */
          next?: string;
          /** The URL of the previous page, when available. */
          prev?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List detailed SurveyMonkey responses including question answers. */
    "survey_monkey.list_survey_response_details": {
      input: {
        /**
         * The SurveyMonkey survey identifier.
         * @minLength 1
         */
        surveyId: string;
        /**
         * The 1-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of resources to return on this page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** The response status to include. */
        status?: "completed" | "partial" | "overquota" | "disqualified";
        /** Return responses created at or after this SurveyMonkey datetime value. */
        startCreatedAt?: string;
        /** Return responses created at or before this SurveyMonkey datetime value. */
        endCreatedAt?: string;
      };
      output: {
        /** The detailed survey responses returned on this page. */
        items: Array<{
          /**
           * The response identifier.
           * @minLength 1
           */
          id?: string;
          /** The survey identifier associated with the response. */
          survey_id?: string;
          /** The collector identifier associated with the response. */
          collector_id?: string;
          /** The response status. */
          response_status?: string;
          /** The timestamp when the response was created. */
          date_created?: string;
          /** The timestamp when the response was last modified. */
          date_modified?: string;
          /** The response pages and answers returned by SurveyMonkey. */
          pages?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** The current page number. */
        page: number;
        /** The number of resources requested per page. */
        perPage: number;
        /** The total number of matching resources. */
        total: number;
        /** The pagination links returned by SurveyMonkey. */
        links: {
          /** The URL of the current page. */
          self?: string;
          /** The URL of the next page, when available. */
          next?: string;
          /** The URL of the previous page, when available. */
          prev?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List response metadata for a SurveyMonkey survey. */
    "survey_monkey.list_survey_responses": {
      input: {
        /**
         * The SurveyMonkey survey identifier.
         * @minLength 1
         */
        surveyId: string;
        /**
         * The 1-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of resources to return on this page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
        /** The response status to include. */
        status?: "completed" | "partial" | "overquota" | "disqualified";
        /** Return responses created at or after this SurveyMonkey datetime value. */
        startCreatedAt?: string;
        /** Return responses created at or before this SurveyMonkey datetime value. */
        endCreatedAt?: string;
      };
      output: {
        /** The survey responses returned on this page. */
        items: Array<{
          /**
           * The response identifier.
           * @minLength 1
           */
          id?: string;
          /** The survey identifier associated with the response. */
          survey_id?: string;
          /** The collector identifier associated with the response. */
          collector_id?: string;
          /** The response status. */
          response_status?: string;
          /** The timestamp when the response was created. */
          date_created?: string;
          /** The timestamp when the response was last modified. */
          date_modified?: string;
          /** The response pages and answers returned by SurveyMonkey. */
          pages?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** The current page number. */
        page: number;
        /** The number of resources requested per page. */
        perPage: number;
        /** The total number of matching resources. */
        total: number;
        /** The pagination links returned by SurveyMonkey. */
        links: {
          /** The URL of the current page. */
          self?: string;
          /** The URL of the next page, when available. */
          next?: string;
          /** The URL of the previous page, when available. */
          prev?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List surveys available to the connected SurveyMonkey account. */
    "survey_monkey.list_surveys": {
      input: {
        /**
         * The 1-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of resources to return on this page.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
        /**
         * A partial survey title to search for.
         * @minLength 1
         */
        title?: string;
        /**
         * The folder identifier used to filter surveys.
         * @minLength 1
         */
        folderId?: string;
        /** The field used to sort surveys. */
        sortBy?: "title" | "date_modified" | "num_responses";
        /** The survey sort direction. */
        sortOrder?: "ASC" | "DESC";
        /** Return surveys modified at or after this SurveyMonkey datetime value. */
        startModifiedAt?: string;
        /** Return surveys modified at or before this SurveyMonkey datetime value. */
        endModifiedAt?: string;
      };
      output: {
        /** The surveys returned on this page. */
        items: Array<{
          /**
           * The survey identifier.
           * @minLength 1
           */
          id?: string;
          /** The survey title. */
          title?: string;
          /** The internal survey nickname. */
          nickname?: string;
          /** The survey language code. */
          language?: string;
          /** The API URL of the survey. */
          href?: string;
          /** The timestamp when the survey was created. */
          date_created?: string;
          /** The timestamp when the survey was last modified. */
          date_modified?: string;
          /** The number of survey responses. */
          response_count?: number;
          /** The number of survey questions. */
          question_count?: number;
          /** The number of survey pages. */
          page_count?: number;
          [key: string]: unknown;
        }>;
        /** The current page number. */
        page: number;
        /** The number of resources requested per page. */
        perPage: number;
        /** The total number of matching resources. */
        total: number;
        /** The pagination links returned by SurveyMonkey. */
        links: {
          /** The URL of the current page. */
          self?: string;
          /** The URL of the next page, when available. */
          next?: string;
          /** The URL of the previous page, when available. */
          prev?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
