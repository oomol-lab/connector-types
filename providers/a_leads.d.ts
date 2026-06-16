import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Find a business email address from a person's name and company website or A-Leads document ID. */
    "a_leads.find_email": {
      input: {
        /**
         * First name of the person.
         * @minLength 1
         */
        first_name?: string;
        /**
         * Last name of the person.
         * @minLength 1
         */
        last_name?: string;
        /**
         * Company website or domain.
         * @minLength 1
         */
        website?: string;
        /**
         * Unique document ID from A-Leads advanced search results.
         * @minLength 1
         */
        document_id?: string;
        /**
         * A unique ID linked to the search request for tracking in A-Leads.
         * @minLength 1
         */
        request_uuid?: string;
      };
      output: {
        /** A-Leads response message metadata. */
        message: {
          /** A-Leads operation status. */
          status?: string;
          /** HTTP-like status code returned by A-Leads. */
          statusCode?: number;
          /** Human-readable response description returned by A-Leads. */
          description?: string;
          [key: string]: unknown;
        };
        /** A-Leads email finder result. */
        response: {
          /** Business email address found by A-Leads. */
          email?: string | null;
          /** Email quality rating returned by A-Leads. */
          quality?: string | null;
          /** Email finder result code returned by A-Leads. */
          result?: string | null;
          /** First name returned by A-Leads. */
          first_name?: string | null;
          /** Last name returned by A-Leads. */
          last_name?: string | null;
          /** Whether the company email domain is catch-all. */
          catch_all_status?: boolean | null;
          [key: string]: unknown;
        };
        /** Raw A-Leads response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Find a personal email address from a LinkedIn username or profile URL. */
    "a_leads.find_personal_email": {
      input: {
        /**
         * LinkedIn profile URL or username of the person.
         * @minLength 1
         */
        linkedin_username: string;
        /**
         * A unique ID linked to the search request for tracking in A-Leads.
         * @minLength 1
         */
        request_uuid?: string;
      };
      output: {
        /** A-Leads response message metadata. */
        message: {
          /** A-Leads operation status. */
          status?: string;
          /** HTTP-like status code returned by A-Leads. */
          statusCode?: number;
          /** Human-readable response description returned by A-Leads. */
          description?: string;
          [key: string]: unknown;
        };
        /** Personal email address found by A-Leads. */
        personal_email: string | null;
        /** Raw A-Leads response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Find a phone number from a LinkedIn username or profile URL. */
    "a_leads.find_phone": {
      input: {
        /**
         * LinkedIn profile URL or username of the person.
         * @minLength 1
         */
        linkedin_username: string;
        /**
         * A unique ID linked to the search request for tracking in A-Leads.
         * @minLength 1
         */
        request_uuid?: string;
      };
      output: {
        /** A-Leads response message metadata. */
        message: {
          /** A-Leads operation status. */
          status?: string;
          /** HTTP-like status code returned by A-Leads. */
          statusCode?: number;
          /** Human-readable response description returned by A-Leads. */
          description?: string;
          [key: string]: unknown;
        };
        /** Phone number found by A-Leads. */
        phone_number: string | null;
        /** Raw A-Leads response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Verify an email address and return deliverability signals from A-Leads. */
    "a_leads.verify_email": {
      input: {
        /**
         * Email address to verify.
         * @format email
         */
        email: string;
      };
      output: {
        /** A-Leads response message metadata. */
        message: {
          /** A-Leads operation status. */
          status?: string;
          /** HTTP-like status code returned by A-Leads. */
          statusCode?: number;
          /** Human-readable response description returned by A-Leads. */
          description?: string;
          [key: string]: unknown;
        };
        /** A-Leads email verification result. */
        response: {
          /** Whether A-Leads considers the email deliverable. */
          is_valid?: boolean | null;
          /** Email quality rating returned by A-Leads. */
          quality?: string | null;
          /** Email verification result code returned by A-Leads. */
          result?: string | null;
          /** Whether the email domain is catch-all. */
          catch_all_status?: boolean | null;
          /** Email service provider detected by A-Leads. */
          esp?: string | null;
          [key: string]: unknown;
        };
        /** Raw A-Leads response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
