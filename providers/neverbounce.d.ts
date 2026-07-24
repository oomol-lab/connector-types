import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a NeverBounce bulk verification job from a remote file or supplied rows. */
    "neverbounce.create_job": {
      input: {
        /** Whether the bulk input is a remote URL or supplied inline. */
        input_location: "remote_url";
        /**
         * The source data to verify with NeverBounce.
         * @format uri
         */
        input: string;
        /** Whether NeverBounce should parse the job immediately. */
        auto_parse?: boolean;
        /** Whether NeverBounce should start verification immediately after parsing. */
        auto_start?: boolean;
        /** Whether NeverBounce should run the job as a sample. */
        run_sample?: boolean;
        /**
         * The display filename shown for the job in the NeverBounce dashboard.
         * @minLength 1
         */
        filename?: string;
        /** Additional metadata that influences NeverBounce verification behavior. */
        request_meta_data?: {
          /** Whether NeverBounce should leverage historical data during verification. */
          leverage_historical_data?: boolean;
        };
        /** Whether the job is allowed to enter the manual review queue when needed. */
        allow_manual_review?: boolean;
        /**
         * The optional callback URL for NeverBounce job lifecycle events.
         * @format uri
         */
        callback_url?: string;
        /** The optional headers appended to NeverBounce callback requests. */
        callback_headers?: Record<string, string>;
      } | {
        /** Whether the bulk input is a remote URL or supplied inline. */
        input_location: "supplied";
        /**
         * The source data to verify with NeverBounce.
         * @minItems 1
         */
        input: Array<Record<string, string | number | boolean | null>>;
        /** Whether NeverBounce should parse the job immediately. */
        auto_parse?: boolean;
        /** Whether NeverBounce should start verification immediately after parsing. */
        auto_start?: boolean;
        /** Whether NeverBounce should run the job as a sample. */
        run_sample?: boolean;
        /**
         * The display filename shown for the job in the NeverBounce dashboard.
         * @minLength 1
         */
        filename?: string;
        /** Additional metadata that influences NeverBounce verification behavior. */
        request_meta_data?: {
          /** Whether NeverBounce should leverage historical data during verification. */
          leverage_historical_data?: boolean;
        };
        /** Whether the job is allowed to enter the manual review queue when needed. */
        allow_manual_review?: boolean;
        /**
         * The optional callback URL for NeverBounce job lifecycle events.
         * @format uri
         */
        callback_url?: string;
        /** The optional headers appended to NeverBounce callback requests. */
        callback_headers?: Record<string, string>;
      };
      output: {
        /** The request status returned by NeverBounce. */
        status: string;
        /**
         * The newly created NeverBounce job identifier.
         * @exclusiveMinimum 0
         */
        job_id: number;
        /**
         * The server execution time in milliseconds.
         * @minimum 0
         */
        execution_time: number;
      };
    };
    /** Download a NeverBounce bulk job as CSV with optional result filters and extra columns. */
    "neverbounce.download_job_results": {
      input: {
        /**
         * The NeverBounce job identifier returned by the jobs API.
         * @exclusiveMinimum 0
         */
        job_id: number;
        /** Whether valid email results should be included in the CSV. */
        valids?: boolean;
        /** Whether invalid email results should be included in the CSV. */
        invalids?: boolean;
        /** Whether catchall email results should be included in the CSV. */
        catchalls?: boolean;
        /** Whether unknown email results should be included in the CSV. */
        unknowns?: boolean;
        /** Whether disposable email results should be included in the CSV. */
        disposables?: boolean;
        /** Whether duplicate rows should be included in the CSV. */
        include_duplicates?: boolean;
        /** Whether only duplicate rows should be returned in the CSV. */
        only_duplicates?: boolean;
        /** Whether only bad-syntax rows should be returned in the CSV. */
        only_bad_syntax?: boolean;
        /** Whether the CSV should include the email_status column. */
        email_status?: boolean;
        /** Whether the CSV should include the integer email_status column. */
        email_status_int?: boolean;
        /** Whether the CSV should include the has_dns_info column. */
        has_dns_info?: boolean;
        /** Whether the CSV should include the has_mail_server column. */
        has_mail_server?: boolean;
        /** Whether the CSV should include the mail_server_reachable column. */
        mail_server_reachable?: boolean;
        /** Whether the CSV should include the free_email_host column. */
        free_email_host?: boolean;
        /** Whether the CSV should include the role_account column. */
        role_account?: boolean;
        /** Whether the CSV should include the addr column. */
        addr?: boolean;
        /** Whether the CSV should include the alias column. */
        alias?: boolean;
        /** Whether the CSV should include the host column. */
        host?: boolean;
        /** Whether the CSV should include the fqdn column. */
        fqdn?: boolean;
        /** Whether the CSV should include the subdomain column. */
        subdomain?: boolean;
        /** Whether the CSV should include the domain column. */
        domain?: boolean;
        /** Whether the CSV should include the tld column. */
        tld?: boolean;
        /** Whether the CSV should include the network column. */
        network?: boolean;
        /** Whether the CSV should include the bad_syntax column. */
        bad_syntax?: boolean;
        /** The representation used for binary flags in the downloaded CSV. */
        binary_operators_type?: "BIN_1_0" | "BIN_Y_N" | "BIN_y_n" | "BIN_yes_no" | "BIN_Yes_No" | "BIN_true_false";
        /** The line feed style used in the downloaded CSV. */
        line_feed_type?: "LINEFEED_0A0D" | "LINEFEED_0D0A" | "LINEFEED_0A" | "LINEFEED_0D";
      };
      output: {
        /**
         * The filename inferred from the NeverBounce download response.
         * @minLength 1
         */
        filename?: string;
        /**
         * The CSV response content type returned by NeverBounce.
         * @minLength 1
         */
        content_type: string;
        /** The raw CSV body returned by NeverBounce. */
        csv: string;
      };
    };
    /** Get the current NeverBounce account credit summary and bulk job counters. */
    "neverbounce.get_account_info": {
      input: Record<string, never>;
      output: {
        /** The request status returned by NeverBounce. */
        status: string;
        /** The paid and free credit summary. */
        credits_info: {
          /**
           * The number of paid credits already consumed.
           * @minimum 0
           */
          paid_credits_used?: number;
          /**
           * The number of free credits already consumed.
           * @minimum 0
           */
          free_credits_used?: number;
          /**
           * The number of paid credits currently remaining.
           * @minimum 0
           */
          paid_credits_remaining?: number;
          /**
           * The number of free credits currently remaining.
           * @minimum 0
           */
          free_credits_remaining?: number;
        };
        /** The bulk verification job counters. */
        job_counts: {
          /**
           * The number of completed bulk jobs.
           * @minimum 0
           */
          completed?: number;
          /**
           * The number of jobs currently under manual review.
           * @minimum 0
           */
          under_review?: number;
          /**
           * The number of jobs currently queued.
           * @minimum 0
           */
          queued?: number;
          /**
           * The number of jobs currently processing.
           * @minimum 0
           */
          processing?: number;
        };
        /**
         * The server execution time in milliseconds.
         * @minimum 0
         */
        execution_time: number;
      };
    };
    /** Retrieve paginated NeverBounce verification results for a completed bulk job. */
    "neverbounce.get_job_results": {
      input: {
        /**
         * The NeverBounce job identifier returned by the jobs API.
         * @exclusiveMinimum 0
         */
        job_id: number;
        /**
         * The results page to fetch from NeverBounce.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page returned by NeverBounce.
         * @minimum 1
         * @maximum 1000
         */
        items_per_page?: number;
      };
      output: {
        /** The request status returned by NeverBounce. */
        status: string;
        /**
         * The total number of matching result rows.
         * @minimum 0
         */
        total_results: number;
        /**
         * The total number of result pages.
         * @minimum 0
         */
        total_pages: number;
        /** The query echo returned by NeverBounce. */
        query: {
          /**
           * The queried NeverBounce job identifier.
           * @exclusiveMinimum 0
           */
          job_id?: number;
          /**
           * Whether valid results were requested.
           * @minimum 0
           */
          valids?: number;
          /**
           * Whether invalid results were requested.
           * @minimum 0
           */
          invalids?: number;
          /**
           * Whether disposable results were requested.
           * @minimum 0
           */
          disposables?: number;
          /**
           * Whether catchall results were requested.
           * @minimum 0
           */
          catchalls?: number;
          /**
           * Whether unknown results were requested.
           * @minimum 0
           */
          unknowns?: number;
          /**
           * The requested results page.
           * @minimum 0
           */
          page?: number;
          /**
           * The requested page size.
           * @minimum 0
           */
          items_per_page?: number;
        };
        /** The paginated NeverBounce result rows. */
        results: Array<{
          /** The original row data submitted to NeverBounce for this result. */
          data: Record<string, unknown>;
          /** The verification object returned for a single result row. */
          verification: {
            /** The verification result returned for this row. */
            result?: string;
            /** The verification flags returned for this row. */
            flags?: Array<string>;
            /** The suggested correction returned for this row. */
            suggested_correction?: string;
            /** The optional address info returned for this row. */
            address_info?: {
              /** The original email address submitted to NeverBounce. */
              original_email?: string;
              /** The normalized email address returned by NeverBounce. */
              normalized_email?: string;
              /** The local part of the email address. */
              addr?: string;
              /** The alias part detected in the email address. */
              alias?: string;
              /** The full host portion of the email address. */
              host?: string;
              /** The fully qualified domain name for the email address. */
              fqdn?: string;
              /** The registrable domain name. */
              domain?: string;
              /** The subdomain portion of the email address. */
              subdomain?: string;
              /** The top-level domain for the email address. */
              tld?: string;
            };
            [key: string]: unknown;
          };
        }>;
        /**
         * The server execution time in milliseconds.
         * @minimum 0
         */
        execution_time: number;
      };
    };
    /** Retrieve the current processing status and aggregate counts for a NeverBounce job. */
    "neverbounce.get_job_status": {
      input: {
        /**
         * The NeverBounce job identifier returned by the jobs API.
         * @exclusiveMinimum 0
         */
        job_id: number;
      };
      output: {
        /** The request status returned by NeverBounce. */
        status: string;
        /**
         * The NeverBounce job identifier.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The filename shown for the job. */
        filename: string;
        /** The timestamp when the job was created. */
        created_at: string;
        /** The timestamp when the job started processing. */
        started_at?: string | null;
        /** The timestamp when the job finished processing. */
        finished_at?: string | null;
        /** The failure reason returned by NeverBounce when the job fails. */
        failure_reason?: unknown;
        /** The aggregate job totals returned by NeverBounce. */
        total: {
          /**
           * The total number of submitted records.
           * @minimum 0
           */
          records?: number;
          /**
           * The number of billable records.
           * @minimum 0
           */
          billable?: number;
          /**
           * The number of processed records.
           * @minimum 0
           */
          processed?: number;
          /**
           * The number of valid email results.
           * @minimum 0
           */
          valid?: number;
          /**
           * The number of invalid email results.
           * @minimum 0
           */
          invalid?: number;
          /**
           * The number of catchall email results.
           * @minimum 0
           */
          catchall?: number;
          /**
           * The number of disposable email results.
           * @minimum 0
           */
          disposable?: number;
          /**
           * The number of unknown email results.
           * @minimum 0
           */
          unknown?: number;
          /**
           * The number of duplicate rows in the job.
           * @minimum 0
           */
          duplicates?: number;
          /**
           * The number of rows rejected for bad email syntax.
           * @minimum 0
           */
          bad_syntax?: number;
        };
        /** The estimated bounce rate percentage for the job. */
        bounce_estimate: number;
        /**
         * The percent completion reported by NeverBounce.
         * @minimum 0
         * @maximum 100
         */
        percent_complete: number;
        /** The current NeverBounce bulk job status. */
        job_status: string;
        /**
         * The server execution time in milliseconds.
         * @minimum 0
         */
        execution_time: number;
      };
    };
    /** Parse a NeverBounce bulk job created without auto_parse enabled. */
    "neverbounce.parse_job": {
      input: {
        /**
         * The NeverBounce job identifier returned by the jobs API.
         * @exclusiveMinimum 0
         */
        job_id: number;
        /** Whether NeverBounce should start verification immediately after parsing. */
        auto_start?: boolean;
      };
      output: {
        /** The request status returned by NeverBounce. */
        status: string;
        /**
         * The queue identifier returned when the parse request succeeds.
         * @minLength 1
         */
        queue_id?: string;
        /**
         * The server execution time in milliseconds.
         * @minimum 0
         */
        execution_time: number;
      };
    };
    /** Verify a single email address with NeverBounce and return the verification result. */
    "neverbounce.single_check": {
      input: {
        /**
         * The email address to verify with NeverBounce.
         * @format email
         */
        email: string;
        /** Whether NeverBounce should include the optional address_info object in the response. */
        address_info?: boolean;
        /** Whether NeverBounce should include the current credit counters in the response. */
        credits_info?: boolean;
        /**
         * The maximum verification time in seconds before the check returns unknown.
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** The request status returned by NeverBounce. */
        status: string;
        /** The NeverBounce verification result code. */
        result: "valid" | "invalid" | "disposable" | "catchall" | "unknown";
        /** The verification flags returned by NeverBounce. */
        flags: Array<string>;
        /** The typo correction suggested by NeverBounce when applicable. */
        suggested_correction: string;
        /** Additional address breakdown fields when address_info is requested. */
        address_info?: {
          /** The original email address submitted to NeverBounce. */
          original_email?: string;
          /** The normalized email address returned by NeverBounce. */
          normalized_email?: string;
          /** The local part of the email address. */
          addr?: string;
          /** The alias part detected in the email address. */
          alias?: string;
          /** The full host portion of the email address. */
          host?: string;
          /** The fully qualified domain name for the email address. */
          fqdn?: string;
          /** The registrable domain name. */
          domain?: string;
          /** The subdomain portion of the email address. */
          subdomain?: string;
          /** The top-level domain for the email address. */
          tld?: string;
        };
        /** Credit counters echoed when credits_info is requested. */
        credits_info?: {
          /**
           * The number of paid credits already consumed.
           * @minimum 0
           */
          paid_credits_used?: number;
          /**
           * The number of free credits already consumed.
           * @minimum 0
           */
          free_credits_used?: number;
          /**
           * The number of paid credits currently remaining.
           * @minimum 0
           */
          paid_credits_remaining?: number;
          /**
           * The number of free credits currently remaining.
           * @minimum 0
           */
          free_credits_remaining?: number;
        };
        /**
         * The server execution time in milliseconds.
         * @minimum 0
         */
        execution_time: number;
      };
    };
    /** Start a parsed NeverBounce bulk job. */
    "neverbounce.start_job": {
      input: {
        /**
         * The NeverBounce job identifier returned by the jobs API.
         * @exclusiveMinimum 0
         */
        job_id: number;
        /** Whether NeverBounce should run the job as a sample. */
        run_sample?: boolean;
      };
      output: {
        /** The request status returned by NeverBounce. */
        status: string;
        /**
         * The queue identifier returned when the start request succeeds.
         * @minLength 1
         */
        queue_id?: string;
        /** An optional message returned by NeverBounce for the start request. */
        message?: string;
        /**
         * The server execution time in milliseconds.
         * @minimum 0
         */
        execution_time: number;
      };
    };
  }
}
