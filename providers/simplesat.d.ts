import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create or update a Simplesat customer by email, overwriting tags or custom attributes when provided. */
    "simplesat.create_or_update_customer": {
      input: {
        /**
         * The customer identifier from an external system.
         * @minLength 1
         */
        externalId?: string;
        /**
         * The customer email address.
         * @format email
         */
        email: string;
        /**
         * The customer full name.
         * @minLength 1
         */
        name?: string;
        /**
         * The customer company name.
         * @minLength 1
         */
        company?: string;
        /**
         * The customer language code.
         * @minLength 1
         */
        language?: string;
        /** Tags associated with the Simplesat record. */
        tags?: Array<string>;
        /** Custom attributes keyed by Simplesat attribute name. */
        customAttributes?: Record<string, unknown>;
      };
      output: {
        /** The Simplesat customer ID. */
        id?: number;
        /** The external identifier returned by Simplesat. */
        external_id?: string | number | null;
        /** The customer name. */
        name?: string;
        /**
         * The customer email address.
         * @format email
         */
        email?: string;
        /** The customer company name. */
        company?: string;
        /** The customer's language code. */
        language?: string;
        /** Tags associated with the Simplesat record. */
        tags?: Array<string>;
        /** Custom attributes keyed by Simplesat attribute name. */
        custom_attributes?: Record<string, unknown>;
        /** The timestamp when this customer was created. */
        created?: string;
        /** The timestamp when this customer was last modified. */
        modified?: string;
        /** Whether this customer is subscribed. */
        subscribed?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get a single Simplesat customer by ID. */
    "simplesat.get_customer": {
      input: {
        /**
         * The Simplesat customer ID to retrieve.
         * @minLength 1
         */
        customerId: string;
      };
      output: {
        /** The Simplesat customer ID. */
        id?: number;
        /** The external identifier returned by Simplesat. */
        external_id?: string | number | null;
        /** The customer name. */
        name?: string;
        /**
         * The customer email address.
         * @format email
         */
        email?: string;
        /** The customer company name. */
        company?: string;
        /** The customer's language code. */
        language?: string;
        /** Tags associated with the Simplesat record. */
        tags?: Array<string>;
        /** Custom attributes keyed by Simplesat attribute name. */
        custom_attributes?: Record<string, unknown>;
        /** The timestamp when this customer was created. */
        created?: string;
        /** The timestamp when this customer was last modified. */
        modified?: string;
        /** Whether this customer is subscribed. */
        subscribed?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get a single Simplesat survey response by ID. */
    "simplesat.get_response": {
      input: {
        /**
         * The Simplesat response ID to retrieve.
         * @minLength 1
         */
        responseId: string;
      };
      output: {
        /** The Simplesat response ID. */
        id?: number;
        /** The survey metadata returned with this response. */
        survey?: Record<string, unknown>;
        /** Tags associated with the Simplesat record. */
        tags?: Array<string>;
        /** The timestamp when this response was created. */
        created?: string;
        /** The timestamp when this response was last modified. */
        modified?: string;
        /** The customer metadata returned with this response. */
        customer?: Record<string, unknown>;
        /** The answers included in this response. */
        answers?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List one page of Simplesat customers with optional date and subscription filters. */
    "simplesat.list_customers": {
      input: {
        /**
         * The one-based page number to request from Simplesat.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of customers to request per page.
         * @minimum 1
         * @maximum 250
         */
        pageSize?: number;
        /**
         * Filter customers created after this timestamp.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * Filter customers created before this timestamp.
         * @format date-time
         */
        createdBefore?: string;
        /**
         * Filter customers modified after this timestamp.
         * @format date-time
         */
        modifiedAfter?: string;
        /**
         * Filter customers modified before this timestamp.
         * @format date-time
         */
        modifiedBefore?: string;
        /** Filter customers by subscription status. */
        subscribed?: boolean;
      };
      output: {
        /** A Simplesat pagination URL, or null when that page is not available. */
        next: string | null;
        /** A Simplesat pagination URL, or null when that page is not available. */
        previous: string | null;
        /** The total number of customers matching the query. */
        count: number;
        /** The customers returned on this page. */
        customers: Array<{
          /** The Simplesat customer ID. */
          id?: number;
          /** The external identifier returned by Simplesat. */
          external_id?: string | number | null;
          /** The customer name. */
          name?: string;
          /**
           * The customer email address.
           * @format email
           */
          email?: string;
          /** The customer company name. */
          company?: string;
          /** The customer's language code. */
          language?: string;
          /** Tags associated with the Simplesat record. */
          tags?: Array<string>;
          /** Custom attributes keyed by Simplesat attribute name. */
          custom_attributes?: Record<string, unknown>;
          /** The timestamp when this customer was created. */
          created?: string;
          /** The timestamp when this customer was last modified. */
          modified?: string;
          /** Whether this customer is subscribed. */
          subscribed?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List one page of Simplesat questions with optional survey and metric filters. */
    "simplesat.list_questions": {
      input: {
        /**
         * The one-based page number to request from Simplesat.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to request per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * Filter questions by Simplesat survey ID.
         * @minimum 1
         */
        surveyId?: number;
        /**
         * Filter questions by metric, such as csat, nps, or ces.
         * @minLength 1
         */
        metric?: string;
      };
      output: {
        /** A Simplesat pagination URL, or null when that page is not available. */
        next: string | null;
        /** A Simplesat pagination URL, or null when that page is not available. */
        previous: string | null;
        /** The total number of questions matching the query. */
        count: number;
        /** The questions returned on this page. */
        questions: Array<{
          /** The Simplesat question ID. */
          id?: number;
          /** The question text. */
          text?: string;
          /** The question metric. */
          metric?: string;
          /** The question display order. */
          order?: number;
          /** Whether the question uses a rating scale. */
          rating_scale?: boolean;
          /** Whether answering this question is required. */
          required?: boolean;
          /** The survey that owns this question. */
          survey?: Record<string, unknown>;
          /** The answer choices configured for this question. */
          choices?: Array<string>;
          /** Conditional display rules configured for this question. */
          rules?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List one page of Simplesat surveys. */
    "simplesat.list_surveys": {
      input: {
        /**
         * The one-based page number to request from Simplesat.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to request per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** A Simplesat pagination URL, or null when that page is not available. */
        next: string | null;
        /** A Simplesat pagination URL, or null when that page is not available. */
        previous: string | null;
        /** The total number of surveys matching the query. */
        count: number;
        /** The surveys returned on this page. */
        surveys: Array<{
          /** The Simplesat survey ID. */
          id?: number;
          /** The survey name. */
          name?: string;
          /** The survey metric, such as CSAT, NPS, or CES. */
          metric?: string;
          /** The Simplesat survey token. */
          survey_token?: string;
          /** The Simplesat survey type. */
          survey_type?: string;
          /** The survey brand name. */
          brand_name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search one page of Simplesat survey responses with documented date and field filters. */
    "simplesat.search_responses": {
      input: {
        /**
         * The one-based page number to request from Simplesat.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to request per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * Legacy response search start timestamp accepted by Simplesat.
         * @format date-time
         */
        startDate?: string;
        /**
         * Legacy response search end timestamp accepted by Simplesat.
         * @format date-time
         */
        endDate?: string;
        /**
         * Filter responses created on or after this timestamp.
         * @format date-time
         */
        createdStartDate?: string;
        /**
         * Filter responses created on or before this timestamp.
         * @format date-time
         */
        createdEndDate?: string;
        /**
         * Filter responses modified on or after this timestamp.
         * @format date-time
         */
        modifiedStartDate?: string;
        /**
         * Filter responses modified on or before this timestamp.
         * @format date-time
         */
        modifiedEndDate?: string;
        /** How Simplesat should combine multiple response filters. */
        operator?: "and" | "or";
        /**
         * Response filters to apply.
         * @minItems 1
         */
        filters?: Array<{
          /**
           * The response field to filter on, such as customer.email, survey, tag, ticket_id, or customer.attribute.
           * @minLength 1
           */
          key: string;
          /** The comparison operator to apply to this response filter. */
          comparison: "is" | "is_not" | "contains" | "does_not_contain" | "is_unknown" | "has_any_value";
          /**
           * The values to compare against when the comparison operator expects values.
           * @minItems 1
           */
          values?: Array<string>;
          /**
           * The custom attribute name when key is customer.attribute or ticket.attribute.
           * @minLength 1
           */
          attribute?: string;
        }>;
      };
      output: {
        /** A Simplesat pagination URL, or null when that page is not available. */
        next: string | null;
        /** A Simplesat pagination URL, or null when that page is not available. */
        previous: string | null;
        /** The total number of responses matching the query. */
        count: number;
        /** The responses returned on this page. */
        responses: Array<{
          /** The Simplesat response ID. */
          id?: number;
          /** The survey metadata returned with this response. */
          survey?: Record<string, unknown>;
          /** Tags associated with the Simplesat record. */
          tags?: Array<string>;
          /** The timestamp when this response was created. */
          created?: string;
          /** The timestamp when this response was last modified. */
          modified?: string;
          /** The customer metadata returned with this response. */
          customer?: Record<string, unknown>;
          /** The answers included in this response. */
          answers?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Schedule a Simplesat event-based survey email for a customer with optional team member and ticket metadata. */
    "simplesat.send_survey_email": {
      input: {
        /**
         * The event-based Simplesat survey token to send.
         * @minLength 1
         */
        surveyToken: string;
        /** The customer who should receive the survey email. */
        customer: {
          /**
           * The customer identifier from an external system.
           * @minLength 1
           */
          id?: string;
          /**
           * The customer email address that should receive the survey.
           * @format email
           */
          email: string;
          /**
           * The customer full name.
           * @minLength 1
           */
          name?: string;
          /**
           * The customer company name.
           * @minLength 1
           */
          company?: string;
          /**
           * The customer language code.
           * @minLength 1
           */
          language?: string;
          /** Custom attributes keyed by Simplesat attribute name. */
          customAttributes?: Record<string, unknown>;
        };
        /** The team member metadata to associate with the survey email. */
        teamMember?: {
          /**
           * The team member identifier from an external system.
           * @minLength 1
           */
          id?: string;
          /**
           * The team member email address.
           * @format email
           */
          email?: string;
          /**
           * The team member full name.
           * @minLength 1
           */
          name?: string;
          /** Custom attributes keyed by Simplesat attribute name. */
          customAttributes?: Record<string, unknown>;
        };
        /** The ticket metadata to associate with the survey email. */
        ticket?: {
          /**
           * The ticket identifier from an external system.
           * @minLength 1
           */
          id?: string;
          /**
           * The ticket subject.
           * @minLength 1
           */
          subject?: string;
          /** Custom attributes keyed by Simplesat attribute name. */
          customAttributes?: Record<string, unknown>;
        };
      };
      output: {
        /** The scheduling status message returned by Simplesat. */
        detail: string;
      };
    };
  }
}
