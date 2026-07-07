import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Momentum meetings with optional date, attendee, Salesforce, and source filters. */
    "momentum_io.list_meetings": {
      input: {
        /**
         * An ISO 8601 date-time value.
         * @format date-time
         */
        from?: string;
        /**
         * An ISO 8601 date-time value.
         * @format date-time
         */
        to?: string;
        /**
         * The page number to retrieve, using 1-based indexing.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * The maximum number of records to return, from 1 to 50.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /**
         * An 18-character Salesforce record ID.
         * @minLength 18
         * @maxLength 18
         */
        salesforceAccountId?: string;
        /**
         * An 18-character Salesforce record ID.
         * @minLength 18
         * @maxLength 18
         */
        salesforceOpportunityId?: string;
        /**
         * Email addresses that every returned meeting must include.
         * @minItems 1
         */
        attendeeEmailAddresses?: Array<string>;
        /**
         * Meeting source types to include.
         * @minItems 1
         */
        sourceTypes?: Array<"AIRCALL" | "CHORUS" | "CLOUDTALK" | "DIALPAD" | "GONG" | "MINDTICKLE" | "MOMENTUM" | "MS_TEAMS" | "ORUM" | "OUTREACH" | "RINGCENTRAL" | "SALESLOFT" | "SALESLOFT_CI" | "USER_PROVIDED" | "VONAGE" | "WEBEX" | "WINGMAN" | "WISER" | "ZOOM" | "ZOOM_PHONE">;
        /** Whether to include temporary recording download URLs. */
        includeDownloadUrl?: boolean;
      };
      output: {
        /** Momentum meetings returned for the requested page. */
        meetings: Array<{
          /** Meeting ID. */
          id?: string;
          /** Meeting title. */
          title?: string;
          /**
           * Meeting start time.
           * @format date-time
           */
          startTime?: string;
          /**
           * Meeting end time.
           * @format date-time
           */
          endTime?: string;
          /** Meeting host. */
          host?: {
            /**
             * Host email address.
             * @format email
             */
            email?: string;
            /** Host name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** Meeting attendees. */
          attendees?: Array<{
            /** Attendee ID. */
            id?: string;
            /** Attendee name. */
            name?: string;
            /**
             * Attendee email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          /** Meeting transcript data. */
          transcript?: Record<string, unknown> | null;
          /** Associated Salesforce account ID. */
          salesforceAccountId?: string | null;
          /** Associated Salesforce lead ID. */
          salesforceLeadId?: string | null;
          /** Associated Salesforce opportunity ID. */
          salesforceOpportunityId?: string | null;
          /**
           * Temporary pre-signed meeting recording download URL.
           * @format uri
           */
          downloadUrl?: string | null;
          /**
           * Expiration timestamp for the temporary download URL.
           * @format date-time
           */
          downloadUrlExpiresAt?: string | null;
          [key: string]: unknown;
        }>;
        /** Total number of pages available for the query. */
        pageCount?: number;
      };
    };
    /** List Momentum signal v2 definitions configured for the organization. */
    "momentum_io.list_signal_definitions": {
      input: Record<string, never>;
      output: {
        /** Momentum signals returned by the API. */
        signals: Array<{
          /** Unique identifier for the signal. */
          id?: number;
          /** Display name of the signal. */
          signalName?: string;
          /** Source context that triggers the signal. */
          contextSource?: string;
          /** Whether the signal is enabled. */
          enabled?: boolean;
          /**
           * Timestamp when the signal was created.
           * @format date-time
           */
          createdAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List executions for a Momentum v1 signal prompt within a time range. */
    "momentum_io.list_signal_executions": {
      input: {
        /**
         * The signal prompt ID to retrieve executions for.
         * @minimum 1
         */
        promptId: number;
        /**
         * An ISO 8601 date-time value.
         * @format date-time
         */
        executionFrom: string;
        /**
         * An ISO 8601 date-time value.
         * @format date-time
         */
        executionTo?: string;
        /**
         * The page number to retrieve, using 1-based indexing.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * The maximum number of records to return, from 1 to 50.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /** Whether to include custom instruction outputs in the response. */
        includeCustomInstructions?: boolean;
      };
      output: {
        /** Momentum signal executions returned for the requested page. */
        signals: Array<{
          /** Identifier for the signal that was triggered. */
          signalId?: number;
          /** Name of the signal that was triggered. */
          signalName?: string;
          /**
           * Timestamp when the signal was triggered.
           * @format date-time
           */
          triggeredAt?: string;
          /** Identifier for the source item that triggered the signal. */
          sourceId?: number | string;
          /** Type of source that triggered the signal. */
          sourceType?: string;
          /** Title of the source item. */
          sourceTitle?: string | null;
          /** Prompt text used for the signal. */
          prompt?: string | null;
          /** AI-generated reason explaining why the signal was triggered. */
          reason?: string | null;
          /**
           * Email address of the meeting host.
           * @format email
           */
          hostEmail?: string | null;
          /** Meeting attendee email addresses. */
          attendeeEmails?: Array<string> | null;
          /**
           * Sender email address for email-triggered signals.
           * @format email
           */
          emailFrom?: string | null;
          /** Recipient email addresses for email-triggered signals. */
          emailTo?: Array<string> | null;
          /** Follow-up prompt outputs returned by Momentum. */
          followUpPrompts?: Array<Record<string, unknown>> | null;
          /** Custom instruction outputs returned by Momentum. */
          customInstructions?: Array<Record<string, unknown>> | null;
          /** Associated Salesforce account ID. */
          salesforceAccountId?: string | null;
          /** Associated Salesforce opportunity ID. */
          salesforceOpportunityId?: string | null;
          [key: string]: unknown;
        }>;
        /** Total number of pages available for the query. */
        pageCount: number;
      };
    };
    /** List Momentum AI signal prompts configured for the organization. */
    "momentum_io.list_signal_prompts": {
      input: Record<string, never>;
      output: {
        /** Momentum signals returned by the API. */
        signals: Array<{
          /** Unique identifier for the signal. */
          id?: number;
          /** Display name of the signal. */
          signalName?: string;
          /** Source context that triggers the signal. */
          contextSource?: string;
          /** Whether the signal is enabled. */
          enabled?: boolean;
          /**
           * Timestamp when the signal was created.
           * @format date-time
           */
          createdAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List executions for a Momentum signal v2 definition within a time range. */
    "momentum_io.list_signal_v2_executions": {
      input: {
        /**
         * The signal definition ID to retrieve executions for.
         * @minimum 1
         */
        definitionId: number;
        /**
         * An ISO 8601 date-time value.
         * @format date-time
         */
        executionFrom: string;
        /**
         * An ISO 8601 date-time value.
         * @format date-time
         */
        executionTo?: string;
        /**
         * The page number to retrieve, using 1-based indexing.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * The maximum number of records to return, from 1 to 50.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /** Whether to include follow-up prompt outputs. */
        includeFollowUpPrompts?: boolean;
      };
      output: {
        /** Momentum signal executions returned for the requested page. */
        signals: Array<{
          /** Identifier for the signal that was triggered. */
          signalId?: number;
          /** Name of the signal that was triggered. */
          signalName?: string;
          /**
           * Timestamp when the signal was triggered.
           * @format date-time
           */
          triggeredAt?: string;
          /** Identifier for the source item that triggered the signal. */
          sourceId?: number | string;
          /** Type of source that triggered the signal. */
          sourceType?: string;
          /** Title of the source item. */
          sourceTitle?: string | null;
          /** Prompt text used for the signal. */
          prompt?: string | null;
          /** AI-generated reason explaining why the signal was triggered. */
          reason?: string | null;
          /**
           * Email address of the meeting host.
           * @format email
           */
          hostEmail?: string | null;
          /** Meeting attendee email addresses. */
          attendeeEmails?: Array<string> | null;
          /**
           * Sender email address for email-triggered signals.
           * @format email
           */
          emailFrom?: string | null;
          /** Recipient email addresses for email-triggered signals. */
          emailTo?: Array<string> | null;
          /** Follow-up prompt outputs returned by Momentum. */
          followUpPrompts?: Array<Record<string, unknown>> | null;
          /** Custom instruction outputs returned by Momentum. */
          customInstructions?: Array<Record<string, unknown>> | null;
          /** Associated Salesforce account ID. */
          salesforceAccountId?: string | null;
          /** Associated Salesforce opportunity ID. */
          salesforceOpportunityId?: string | null;
          [key: string]: unknown;
        }>;
        /** Total number of pages available for the query. */
        pageCount: number;
      };
    };
    /** List Momentum organization users with optional pagination and filters. */
    "momentum_io.list_users": {
      input: {
        /**
         * The page number to retrieve, using 1-based indexing.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * The maximum number of records to return, from 1 to 50.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /** Filter users by license status. */
        licenseAdded?: boolean;
        /** Momentum user role to filter by. */
        role?: "VIEWER" | "EDITOR" | "ORGANIZATION_ADMIN" | "USER_ADMIN" | "USER";
      };
      output: {
        /** Momentum users returned for the requested page. */
        users: Array<{
          /**
           * User email address.
           * @format email
           */
          email?: string;
          /** User full name. */
          name?: string;
          /** User role returned by Momentum. */
          role?: string;
          /** Momentum user type. */
          type?: string;
          /** Slack user ID, when connected. */
          slackUserId?: string | null;
          /** User job title from Slack, when available. */
          title?: string | null;
          /** User department from Salesforce, when available. */
          salesforceDepartment?: string | null;
          /** User role from Salesforce, when available. */
          salesforceUserRole?: string | null;
          /** Whether the user has an active AI license. */
          licenseAdded?: boolean;
          /**
           * Timestamp when the license was assigned.
           * @format date-time
           */
          licenseAssignedAt?: string | null;
          /** Salesforce authentication status. */
          salesforceAuthStatus?: string;
          /** Google Calendar authentication status. */
          gcalAuthStatus?: string;
          [key: string]: unknown;
        }>;
        /** Total number of pages available for the query. */
        pageCount: number;
      };
    };
  }
}
