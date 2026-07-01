import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List submissions for a Formspree form with optional filters. */
    "formspree.list_submissions": {
      input: {
        /**
         * The Formspree form hashid. When omitted, the hashid saved during connection is used.
         * @minLength 1
         */
        form_id?: string;
        /**
         * The maximum number of submissions to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination offset to return.
         * @minimum 0
         */
        offset?: number;
        /**
         * Only return submissions received after this datetime.
         * @format date-time
         */
        since?: string;
        /** The sort order for returned submissions. */
        order?: "asc" | "desc";
        /** Whether to return spam or non-spam submissions. */
        spam?: boolean;
      };
      output: {
        /** The form field names returned by Formspree. */
        fields: Array<string>;
        /** The submissions returned for this page. */
        submissions: Array<{
          /** The submitter email address when Formspree extracted one. */
          email?: string | null;
          /** The submitter name when Formspree extracted one. */
          name?: string | null;
          /** The submitter message when Formspree extracted one. */
          message?: string | null;
          /** The Formspree submission status when returned. */
          status?: string | null;
          /** The datetime when Formspree received the submission. */
          submitted_at?: string | null;
          /** The submitted form fields exactly as Formspree returned them. */
          data?: Record<string, unknown>;
          /** The raw Formspree API object for advanced fields. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Formspree when available. */
        page: {
          /** The total number of matching submissions when returned. */
          count: number | null;
          /** The requested page size when returned. */
          limit: number | null;
          /** The requested result offset when returned. */
          offset: number | null;
        };
        /** The raw Formspree API object for advanced fields. */
        raw: Record<string, unknown>;
      };
    };
  }
}
