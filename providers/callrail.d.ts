import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one CallRail call by account ID and call ID. */
    "callrail.get_call": {
      input: {
        /**
         * The CallRail account ID.
         * @minLength 1
         */
        accountId: string;
        /**
         * The CallRail call ID.
         * @minLength 1
         */
        callId: string;
        /**
         * Additional field names to request from CallRail, such as milestones or keywords_spotted.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** A CallRail call. */
        call: {
          /** The CallRail call ID. */
          id: string | null;
          /** The CallRail company ID associated with the call. */
          companyId: string | null;
          /** The caller or customer name. */
          customerName: string | null;
          /** The caller or customer phone number. */
          customerPhoneNumber: string | null;
          /** The tracking phone number that received the call. */
          trackingPhoneNumber: string | null;
          /** The destination business phone number. */
          businessPhoneNumber: string | null;
          /** The call direction returned by CallRail. */
          direction: string | null;
          /** Whether the call was answered. */
          answered: boolean | null;
          /** The call duration in seconds. */
          duration: number | null;
          /** The call start timestamp. */
          startTime: string | null;
          /** The marketing source attributed to the call. */
          source: string | null;
          /** The CallRail recording URL when available. */
          recording: string | null;
          /** The raw CallRail object. */
          raw: Record<string, unknown>;
        };
        /** The raw CallRail object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one CallRail form submission by account ID and form submission ID. */
    "callrail.get_form_submission": {
      input: {
        /**
         * The CallRail account ID.
         * @minLength 1
         */
        accountId: string;
        /**
         * The CallRail form submission ID.
         * @minLength 1
         */
        formSubmissionId: string;
      };
      output: {
        /** A CallRail form submission. */
        formSubmission: {
          /** The CallRail form submission ID. */
          id: string | null;
          /** The CallRail company ID associated with the submission. */
          companyId: string | null;
          /** The CallRail person ID associated with the submission. */
          personId: string | null;
          /** The submitted customer name when available. */
          customerName: string | null;
          /** The submitted customer email when available. */
          customerEmail: string | null;
          /** The submitted customer phone number when available. */
          customerPhoneNumber: string | null;
          /** The URL of the submitted form. */
          formUrl: string | null;
          /** The landing page URL attributed to the submission. */
          landingPageUrl: string | null;
          /** The submission timestamp. */
          submittedAt: string | null;
          /** The marketing source attributed to the submission. */
          source: string | null;
          /** The submitted form data returned by CallRail. */
          formData: Record<string, unknown>;
          /** The raw CallRail object. */
          raw: Record<string, unknown>;
        };
        /** The raw CallRail object. */
        raw: Record<string, unknown>;
      };
    };
    /** List CallRail accounts visible to the API key. */
    "callrail.list_accounts": {
      input: {
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         * @maximum 250
         */
        perPage?: number;
        /** Filter accounts by HIPAA account status. */
        hipaaAccount?: boolean;
      };
      output: {
        /** The current page number returned by CallRail. */
        page: number | null;
        /** The number of records returned per page. */
        perPage: number | null;
        /** The total number of pages when provided by CallRail. */
        totalPages: number | null;
        /** The total number of matching records. */
        totalRecords: number | null;
        /** Whether a next page is available when CallRail returns relative pagination. */
        hasNextPage: boolean | null;
        /** The next page URL returned by CallRail when relative pagination is used. */
        nextPageUrl: string | null;
        /** The CallRail accounts returned by the API. */
        accounts: Array<{
          /** The CallRail account ID. */
          id: string | null;
          /** The account name. */
          name: string | null;
          /** Whether outbound recording is enabled for the account. */
          outboundRecordingEnabled: boolean | null;
          /** Whether the account is a HIPAA account. */
          hipaaAccount: boolean | null;
          /** The raw CallRail object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw CallRail object. */
        raw: Record<string, unknown>;
      };
    };
    /** List CallRail calls for one account with optional company, tracker, date, and field filters. */
    "callrail.list_calls": {
      input: {
        /**
         * The CallRail account ID.
         * @minLength 1
         */
        accountId: string;
        /**
         * The CallRail company ID.
         * @minLength 1
         */
        companyId?: string;
        /**
         * Only return calls for this CallRail tracker ID.
         * @minLength 1
         */
        trackerId?: string;
        /**
         * Only return calls on or after this date.
         * @format date
         */
        startDate?: string;
        /**
         * Only return calls on or before this date.
         * @format date
         */
        endDate?: string;
        /**
         * Additional field names to request from CallRail, such as milestones or keywords_spotted.
         * @minItems 1
         */
        fields?: Array<string>;
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         * @maximum 250
         */
        perPage?: number;
        /** Whether to request CallRail relative pagination. */
        relativePagination?: boolean;
      };
      output: {
        /** The current page number returned by CallRail. */
        page: number | null;
        /** The number of records returned per page. */
        perPage: number | null;
        /** The total number of pages when provided by CallRail. */
        totalPages: number | null;
        /** The total number of matching records. */
        totalRecords: number | null;
        /** Whether a next page is available when CallRail returns relative pagination. */
        hasNextPage: boolean | null;
        /** The next page URL returned by CallRail when relative pagination is used. */
        nextPageUrl: string | null;
        /** The CallRail calls returned by the API. */
        calls: Array<{
          /** The CallRail call ID. */
          id: string | null;
          /** The CallRail company ID associated with the call. */
          companyId: string | null;
          /** The caller or customer name. */
          customerName: string | null;
          /** The caller or customer phone number. */
          customerPhoneNumber: string | null;
          /** The tracking phone number that received the call. */
          trackingPhoneNumber: string | null;
          /** The destination business phone number. */
          businessPhoneNumber: string | null;
          /** The call direction returned by CallRail. */
          direction: string | null;
          /** Whether the call was answered. */
          answered: boolean | null;
          /** The call duration in seconds. */
          duration: number | null;
          /** The call start timestamp. */
          startTime: string | null;
          /** The marketing source attributed to the call. */
          source: string | null;
          /** The CallRail recording URL when available. */
          recording: string | null;
          /** The raw CallRail object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw CallRail object. */
        raw: Record<string, unknown>;
      };
    };
    /** List CallRail companies for one account. */
    "callrail.list_companies": {
      input: {
        /**
         * The CallRail account ID.
         * @minLength 1
         */
        accountId: string;
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         * @maximum 250
         */
        perPage?: number;
      };
      output: {
        /** The current page number returned by CallRail. */
        page: number | null;
        /** The number of records returned per page. */
        perPage: number | null;
        /** The total number of pages when provided by CallRail. */
        totalPages: number | null;
        /** The total number of matching records. */
        totalRecords: number | null;
        /** Whether a next page is available when CallRail returns relative pagination. */
        hasNextPage: boolean | null;
        /** The next page URL returned by CallRail when relative pagination is used. */
        nextPageUrl: string | null;
        /** The CallRail companies returned by the API. */
        companies: Array<{
          /** The CallRail company ID. */
          id: string | null;
          /** The company name. */
          name: string | null;
          /** The company status returned by CallRail. */
          status: string | null;
          /** The company time zone. */
          timeZone: string | null;
          /** The company creation timestamp. */
          createdAt: string | null;
          /** The company disabled timestamp when present. */
          disabledAt: string | null;
          /** The raw CallRail object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw CallRail object. */
        raw: Record<string, unknown>;
      };
    };
    /** List CallRail form submissions for one account with optional company, date, and field filters. */
    "callrail.list_form_submissions": {
      input: {
        /**
         * The CallRail account ID.
         * @minLength 1
         */
        accountId: string;
        /**
         * The CallRail company ID.
         * @minLength 1
         */
        companyId?: string;
        /**
         * Only return submissions on or after this date.
         * @format date
         */
        startDate?: string;
        /**
         * Only return submissions on or before this date.
         * @format date
         */
        endDate?: string;
        /**
         * Additional field names to request from CallRail, such as milestones or keywords_spotted.
         * @minItems 1
         */
        fields?: Array<string>;
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         * @maximum 250
         */
        perPage?: number;
      };
      output: {
        /** The current page number returned by CallRail. */
        page: number | null;
        /** The number of records returned per page. */
        perPage: number | null;
        /** The total number of pages when provided by CallRail. */
        totalPages: number | null;
        /** The total number of matching records. */
        totalRecords: number | null;
        /** Whether a next page is available when CallRail returns relative pagination. */
        hasNextPage: boolean | null;
        /** The next page URL returned by CallRail when relative pagination is used. */
        nextPageUrl: string | null;
        /** The CallRail form submissions returned by the API. */
        formSubmissions: Array<{
          /** The CallRail form submission ID. */
          id: string | null;
          /** The CallRail company ID associated with the submission. */
          companyId: string | null;
          /** The CallRail person ID associated with the submission. */
          personId: string | null;
          /** The submitted customer name when available. */
          customerName: string | null;
          /** The submitted customer email when available. */
          customerEmail: string | null;
          /** The submitted customer phone number when available. */
          customerPhoneNumber: string | null;
          /** The URL of the submitted form. */
          formUrl: string | null;
          /** The landing page URL attributed to the submission. */
          landingPageUrl: string | null;
          /** The submission timestamp. */
          submittedAt: string | null;
          /** The marketing source attributed to the submission. */
          source: string | null;
          /** The submitted form data returned by CallRail. */
          formData: Record<string, unknown>;
          /** The raw CallRail object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw CallRail object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
