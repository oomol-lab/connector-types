import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Feedier analytical report. */
    "feedier.create_report": {
      input: {
        /**
         * The user ID to associate with the report.
         * @minimum 1
         */
        user_id?: number;
        /**
         * The report name.
         * @minLength 1
         */
        name?: string;
        /** The Feedier FQL value applied to report components. */
        fql?: string | Array<Record<string, unknown>>;
        /** The Feedier report visibility type. */
        type?: "master" | "private" | "public";
        /**
         * The team ID that should own the report.
         * @minimum 1
         */
        team_id?: number;
        /**
         * The master report ID to clone as a template.
         * @minimum 1
         */
        master_id?: number;
        /** The initial Feedier report format. */
        format?: "blank" | "prefilled";
      };
      output: {
        /** A Feedier analytical report. */
        report: {
          /** The report ID. */
          id?: number;
          /** The user ID associated with the report, or null. */
          user_id?: number | null;
          /** The team ID that owns the report, or null. */
          team_id?: number | null;
          /** The report name. */
          name?: string;
          /** The report visibility type. */
          type?: string;
          /** The report publication status. */
          status?: string;
          /** The serialized global FQL expression, or null. */
          fql?: string | null;
          /** The report color palette, or null. */
          color?: string | null;
          /** The report creation timestamp. */
          created_at?: string;
          /** The report update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Generate a new expiring share link for a Feedier report. */
    "feedier.create_report_share_link": {
      input: {
        /**
         * The Feedier report ID.
         * @minimum 1
         */
        report_id: number;
        /** The lifetime of the generated share link. */
        expiration?: "seven_days" | "thirty_days" | "ninety_days" | "four_months";
      };
      output: {
        /** The generated Feedier share-link record. */
        share_link: {
          /** The share-link record ID. */
          id?: number;
          /** The generated share token. */
          token?: string;
          /**
           * The public report URL.
           * @format uri
           */
          public_link?: string;
          /** The share-link expiration timestamp. */
          expires_at?: string;
          /** The share-link creation timestamp. */
          created_at?: string;
          /** The share-link update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Feedier report by ID. */
    "feedier.delete_report": {
      input: {
        /**
         * The Feedier report ID.
         * @minimum 1
         */
        report_id: number;
      };
      output: {
        /** Whether the report deletion succeeded. */
        deleted: boolean;
      };
    };
    /** Get a Feedier report by ID. */
    "feedier.get_report": {
      input: {
        /**
         * The Feedier report ID.
         * @minimum 1
         */
        report_id: number;
      };
      output: {
        /** A Feedier analytical report. */
        report: {
          /** The report ID. */
          id?: number;
          /** The user ID associated with the report, or null. */
          user_id?: number | null;
          /** The team ID that owns the report, or null. */
          team_id?: number | null;
          /** The report name. */
          name?: string;
          /** The report visibility type. */
          type?: string;
          /** The report publication status. */
          status?: string;
          /** The serialized global FQL expression, or null. */
          fql?: string | null;
          /** The report color palette, or null. */
          color?: string | null;
          /** The report creation timestamp. */
          created_at?: string;
          /** The report update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Feedier reports with pagination, filters, and sorting. */
    "feedier.list_reports": {
      input: {
        /**
         * The page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /** Filter reports by name. */
        name?: string;
        /**
         * Filter reports by user ID.
         * @minimum 1
         */
        user_id?: number;
        /**
         * Filter reports by team ID.
         * @minimum 1
         */
        team_id?: number;
        /** The report field to sort by; prefix with a minus for descending order. */
        sort?: "name" | "-name" | "created_at" | "-created_at";
      };
      output: {
        /** Reports returned by Feedier. */
        reports: Array<{
          /** The report ID. */
          id?: number;
          /** The user ID associated with the report, or null. */
          user_id?: number | null;
          /** The team ID that owns the report, or null. */
          team_id?: number | null;
          /** The report name. */
          name?: string;
          /** The report visibility type. */
          type?: string;
          /** The report publication status. */
          status?: string;
          /** The serialized global FQL expression, or null. */
          fql?: string | null;
          /** The report color palette, or null. */
          color?: string | null;
          /** The report creation timestamp. */
          created_at?: string;
          /** The report update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Feedier pagination links. */
        links: {
          /**
           * The first page URL, or null.
           * @format uri
           */
          first?: string | null;
          /**
           * The last page URL, or null.
           * @format uri
           */
          last?: string | null;
          /**
           * The previous page URL, or null.
           * @format uri
           */
          prev?: string | null;
          /**
           * The next page URL, or null.
           * @format uri
           */
          next?: string | null;
          [key: string]: unknown;
        };
        /** Feedier pagination metadata. */
        meta: {
          /** The current page number. */
          current_page?: number;
          /** The last available page number. */
          last_page?: number;
          /** The number of reports per page. */
          per_page?: number;
          /** The total number of reports. */
          total?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Update editable fields on a Feedier report. */
    "feedier.update_report": {
      input: {
        /**
         * The Feedier report ID.
         * @minimum 1
         */
        report_id: number;
        /**
         * The user ID to associate with the report.
         * @minimum 1
         */
        user_id?: number;
        /**
         * The report name.
         * @minLength 1
         */
        name?: string;
        /** The Feedier FQL value applied to report components. */
        fql?: string | Array<Record<string, unknown>>;
        /** The Feedier report visibility type. */
        type?: "master" | "private" | "public";
      };
      output: {
        /** A Feedier analytical report. */
        report: {
          /** The report ID. */
          id?: number;
          /** The user ID associated with the report, or null. */
          user_id?: number | null;
          /** The team ID that owns the report, or null. */
          team_id?: number | null;
          /** The report name. */
          name?: string;
          /** The report visibility type. */
          type?: string;
          /** The report publication status. */
          status?: string;
          /** The serialized global FQL expression, or null. */
          fql?: string | null;
          /** The report color palette, or null. */
          color?: string | null;
          /** The report creation timestamp. */
          created_at?: string;
          /** The report update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
