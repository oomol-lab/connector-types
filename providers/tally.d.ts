import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch a single Tally form by ID with its blocks and settings. */
    "tally.get_form": {
      input: {
        /**
         * Tally form ID to retrieve.
         * @minLength 1
         */
        formId: string;
      };
      output: {
        /** Tally form ID. */
        id: string;
        /** Tally form name. */
        name: string;
        /** Workspace ID that owns the form. */
        workspaceId: string;
        /** Tally form status. */
        status: "BLANK" | "DRAFT" | "PUBLISHED" | "DELETED";
        /** Number of submissions collected by the form. */
        numberOfSubmissions: number;
        /** Whether the form is closed. */
        isClosed: boolean;
        /** Payment settings returned for the form. */
        payments?: Array<{
          /** Payment amount configured on the form. */
          amount?: number;
          /** Payment currency configured on the form. */
          currency?: string;
          [key: string]: unknown;
        }>;
        /**
         * Timestamp when the form was created.
         * @format date-time
         */
        createdAt: string;
        /**
         * Timestamp when the form was last updated.
         * @format date-time
         */
        updatedAt: string;
        /** Tally form settings. */
        settings: {
          /** Language configured on the form. */
          language?: string | null;
          /** Whether the form is closed. */
          isClosed?: boolean;
          /** Title shown when the form is closed. */
          closeMessageTitle?: string | null;
          /** Description shown when the form is closed. */
          closeMessageDescription?: string | null;
          /** Timezone used for close scheduling. */
          closeTimezone?: string | null;
          /** Date when the form closes. */
          closeDate?: string | null;
          /** Time when the form closes. */
          closeTime?: string | null;
          /** Maximum number of accepted submissions. */
          submissionsLimit?: number | null;
          /** Unique submission key configured on the form. */
          uniqueSubmissionKey?: string | null;
          /** Redirect URL used after completion. */
          redirectOnCompletion?: string | null;
          /** Whether partial submissions are enabled. */
          hasPartialSubmissions?: boolean;
          [key: string]: unknown;
        };
        /** Blocks and settings returned for the form. */
        blocks: Array<{
          /** Block ID. */
          id?: string;
          /** Block type. */
          type?: string;
          /** Block title. */
          title?: string;
          /** Form ID that owns the block. */
          formId?: string;
          /** Whether the block is deleted. */
          isDeleted?: boolean;
          /**
           * Timestamp when the block was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * Timestamp when the block was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /** Fields returned for the block. */
          fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Fetch a single Tally form submission by ID with its responses and questions. */
    "tally.get_submission": {
      input: {
        /**
         * Tally form ID that owns the submission.
         * @minLength 1
         */
        formId: string;
        /**
         * Tally submission ID to retrieve.
         * @minLength 1
         */
        submissionId: string;
      };
      output: {
        /** Questions returned for the form. */
        questions: Array<{
          /** Question ID. */
          id?: string;
          /** Question block type. */
          type?: string;
          /** Question title. */
          title?: string;
          /** Whether the question title was modified by the user. */
          isTitleModifiedByUser?: boolean;
          /** Form ID that owns the question. */
          formId?: string;
          /** Whether the question is deleted. */
          isDeleted?: boolean;
          /** Number of responses collected for the question. */
          numberOfResponses?: number;
          /**
           * Timestamp when the question was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * Timestamp when the question was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /** Fields attached to the question. */
          fields?: Array<{
            /** Question field ID. */
            id?: string;
            /** Question field type. */
            type?: string;
            /** Question field title. */
            title?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Tally form submission. */
        submission: {
          /** Submission ID. */
          id?: string;
          /** Form ID. */
          formId?: string;
          /** Whether the submission is completed. */
          isCompleted?: boolean;
          /**
           * Timestamp when the submission was submitted.
           * @format date-time
           */
          submittedAt?: string;
          /**
           * Timestamp when the submission was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * Timestamp when the submission was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /**
           * Signed browser URL for viewing the submission.
           * @format uri
           */
          previewUrl?: string;
          /**
           * Signed URL for downloading the submission as a PDF.
           * @format uri
           */
          pdfUrl?: string;
          /** Responses captured in the submission. */
          responses?: Array<{
            /** Response ID. */
            id: string;
            /** Form ID. */
            formId: string;
            /** Question ID. */
            questionId: string;
            /** Respondent ID. */
            respondentId: string;
            /** Submission ID. */
            submissionId?: string | null;
            /** Session UUID. */
            sessionUuid: string;
            /** Answer value. Type varies based on the question type. */
            answer: unknown;
            /** Formatted answer returned by Tally. */
            formattedAnswer?: string;
            /**
             * Timestamp when the response was created.
             * @format date-time
             */
            createdAt: string;
            /**
             * Timestamp when the response was last updated.
             * @format date-time
             */
            updatedAt: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Tally forms with optional pagination and workspace filters. */
    "tally.list_forms": {
      input: {
        /** Page number for pagination. Tally defaults to 1. */
        page?: number;
        /**
         * Number of items per page. Tally documents a maximum of 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /** Workspace IDs used to filter the returned forms. */
        workspaceIds?: Array<string>;
      };
      output: {
        /** Forms returned by Tally. */
        items: Array<{
          /** Tally form ID. */
          id: string;
          /** Tally form name. */
          name: string;
          /** Workspace ID that owns the form. */
          workspaceId: string;
          /** Tally form status. */
          status: "BLANK" | "DRAFT" | "PUBLISHED" | "DELETED";
          /** Number of submissions collected by the form. */
          numberOfSubmissions: number;
          /** Whether the form is closed. */
          isClosed: boolean;
          /** Payment settings returned for the form. */
          payments?: Array<{
            /** Payment amount configured on the form. */
            amount?: number;
            /** Payment currency configured on the form. */
            currency?: string;
            [key: string]: unknown;
          }>;
          /**
           * Timestamp when the form was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * Timestamp when the form was last updated.
           * @format date-time
           */
          updatedAt: string;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page: number;
        /** Number of items per page. */
        limit: number;
        /** Total number of forms matching the query. */
        total: number;
        /** Whether more pages are available. */
        hasMore: boolean;
        [key: string]: unknown;
      };
    };
    /** List submissions for a Tally form with pagination and documented completion/date filters. */
    "tally.list_submissions": {
      input: {
        /**
         * Tally form ID whose submissions should be listed.
         * @minLength 1
         */
        formId: string;
        /** Page number for pagination. Tally defaults to 1. */
        page?: number;
        /**
         * Number of items per page. Tally documents a maximum of 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /** Submission completion status filter. */
        filter?: "all" | "completed" | "partial";
        /**
         * Filter submissions submitted on or after this ISO 8601 timestamp.
         * @format date-time
         */
        startDate?: string;
        /**
         * Filter submissions submitted on or before this ISO 8601 timestamp.
         * @format date-time
         */
        endDate?: string;
        /**
         * Submission ID after which results should be returned.
         * @minLength 1
         */
        afterId?: string;
      };
      output: {
        /** Current page number. */
        page: number;
        /** Number of submissions per page. */
        limit: number;
        /** Whether more pages are available. */
        hasMore: boolean;
        /** Submission totals per completion filter. */
        totalNumberOfSubmissionsPerFilter: {
          /** Total number of all submissions. */
          all?: number;
          /** Total number of completed submissions. */
          completed?: number;
          /** Total number of partial submissions. */
          partial?: number;
          [key: string]: unknown;
        };
        /** Questions returned for the form. */
        questions: Array<{
          /** Question ID. */
          id?: string;
          /** Question block type. */
          type?: string;
          /** Question title. */
          title?: string;
          /** Whether the question title was modified by the user. */
          isTitleModifiedByUser?: boolean;
          /** Form ID that owns the question. */
          formId?: string;
          /** Whether the question is deleted. */
          isDeleted?: boolean;
          /** Number of responses collected for the question. */
          numberOfResponses?: number;
          /**
           * Timestamp when the question was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * Timestamp when the question was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /** Fields attached to the question. */
          fields?: Array<{
            /** Question field ID. */
            id?: string;
            /** Question field type. */
            type?: string;
            /** Question field title. */
            title?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Submissions returned by Tally. */
        submissions: Array<{
          /** Submission ID. */
          id?: string;
          /** Form ID. */
          formId?: string;
          /** Whether the submission is completed. */
          isCompleted?: boolean;
          /**
           * Timestamp when the submission was submitted.
           * @format date-time
           */
          submittedAt?: string;
          /**
           * Timestamp when the submission was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * Timestamp when the submission was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /**
           * Signed browser URL for viewing the submission.
           * @format uri
           */
          previewUrl?: string;
          /**
           * Signed URL for downloading the submission as a PDF.
           * @format uri
           */
          pdfUrl?: string;
          /** Responses captured in the submission. */
          responses?: Array<{
            /** Response ID. */
            id: string;
            /** Form ID. */
            formId: string;
            /** Question ID. */
            questionId: string;
            /** Respondent ID. */
            respondentId: string;
            /** Submission ID. */
            submissionId?: string | null;
            /** Session UUID. */
            sessionUuid: string;
            /** Answer value. Type varies based on the question type. */
            answer: unknown;
            /** Formatted answer returned by Tally. */
            formattedAnswer?: string;
            /**
             * Timestamp when the response was created.
             * @format date-time
             */
            createdAt: string;
            /**
             * Timestamp when the response was last updated.
             * @format date-time
             */
            updatedAt: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
