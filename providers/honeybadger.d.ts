import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Report a Honeybadger check-in by id or slug. */
    "honeybadger.report_check_in": {
      input: {
        /**
         * The Honeybadger check-in id or capability token.
         * @minLength 1
         */
        id?: string;
        /**
         * The Honeybadger check-in slug to report by project API key.
         * @minLength 1
         */
        slug?: string;
      };
      output: {
        /** The Honeybadger check-in result. */
        checkIn: {
          /** Whether Honeybadger accepted the check-in request. */
          success: boolean;
        };
      };
    };
    /** Report a Honeybadger check-in with payload data. */
    "honeybadger.report_check_in_with_payload": {
      input: {
        /**
         * The Honeybadger check-in id or capability token used in the request path.
         * @minLength 1
         */
        checkInId: string;
        /** The payload data sent with the Honeybadger check-in. */
        checkIn: {
          /** The execution status associated with the check-in payload. */
          status?: "success" | "error";
          /**
           * The execution duration in milliseconds.
           * @minimum 0
           */
          duration?: number;
          /** Captured standard output attached to the check-in payload. */
          stdout?: string;
          /** Captured standard error attached to the check-in payload. */
          stderr?: string;
          /** The process exit code attached to the check-in payload. */
          exitCode?: number;
        };
      };
      output: {
        /** The Honeybadger check-in result. */
        checkIn: {
          /** Whether Honeybadger accepted the check-in request. */
          success: boolean;
        };
      };
    };
    /** Report a deployment to Honeybadger. */
    "honeybadger.report_deployment": {
      input: {
        /** The deployment metadata to report to Honeybadger. */
        deploy: {
          /**
           * The deployment environment, such as production.
           * @minLength 1
           */
          environment?: string;
          /**
           * The revision, Git SHA, or version identifier that was deployed.
           * @minLength 1
           */
          revision?: string;
          /**
           * The repository URL associated with the deployment.
           * @minLength 1
           */
          repository?: string;
          /**
           * The local username or automation actor that performed the deployment.
           * @minLength 1
           */
          local_username?: string;
        };
      };
      output: {
        /** The Honeybadger deployment acknowledgement. */
        deployment: {
          /**
           * The deployment acknowledgement returned by Honeybadger.
           * @minLength 1
           */
          status: string;
        };
      };
    };
    /** Report one or more Honeybadger Insights events. */
    "honeybadger.report_event": {
      input: {
        /**
         * The event objects to serialize into the Honeybadger NDJSON event stream.
         * @minItems 1
         */
        events: Array<Record<string, unknown>>;
      };
      output: {
        /** The Honeybadger event batch response. */
        batch: {
          /**
           * The Honeybadger batch identifier.
           * @minLength 1
           */
          id: string;
          /** Whether Honeybadger reported event-level errors in the batch response. */
          errors: boolean;
          /** The per-event statuses returned by Honeybadger. */
          events: Array<{
            /**
             * The Honeybadger event identifier.
             * @minLength 1
             */
            id: string;
            /** The per-event HTTP status returned by Honeybadger. */
            status: number;
          }>;
        };
      };
    };
    /** Report an exception notice to Honeybadger. */
    "honeybadger.report_exception": {
      input: {
        /** The exception payload to report to Honeybadger. */
        error: {
          /**
           * The exception class name, such as RuntimeError.
           * @minLength 1
           */
          class: string;
          /**
           * The exception message.
           * @minLength 1
           */
          message: string;
          /**
           * The stack frames used by Honeybadger to group the exception.
           * @minItems 1
           */
          backtrace: Array<{
            /**
             * The zero-based frame number within the backtrace.
             * @minimum 0
             */
            number: number;
            /**
             * The source filename for the stack frame.
             * @minLength 1
             */
            file: string;
            /**
             * The method or function name for the stack frame.
             * @minLength 1
             */
            method: string;
            /** Optional source context for the stack frame. */
            source?: Record<string, string>;
          }>;
          /** Optional tags used to annotate the exception notice. */
          tags?: Array<string>;
          /** Optional nested causes associated with the exception. */
          causes?: Array<{
            /**
             * The exception class name for the nested cause.
             * @minLength 1
             */
            class: string;
            /**
             * The exception message for the nested cause.
             * @minLength 1
             */
            message: string;
            /**
             * The stack frames attached to the nested cause.
             * @minItems 1
             */
            backtrace: Array<{
              /**
               * The zero-based frame number within the backtrace.
               * @minimum 0
               */
              number: number;
              /**
               * The source filename for the stack frame.
               * @minLength 1
               */
              file: string;
              /**
               * The method or function name for the stack frame.
               * @minLength 1
               */
              method: string;
              /** Optional source context for the stack frame. */
              source?: Record<string, string>;
            }>;
            /** Additional nested causes attached to this cause. */
            causes?: Array<unknown>;
          }>;
          /**
           * An optional fingerprint used to override Honeybadger grouping.
           * @minLength 1
           */
          fingerprint?: string;
        };
        /** Optional server metadata attached to the exception notice. */
        server?: {
          /**
           * The application project root on the server.
           * @minLength 1
           */
          project_root: string;
          /**
           * The runtime environment name, such as production.
           * @minLength 1
           */
          environment_name: string;
          /**
           * The hostname where the exception occurred.
           * @minLength 1
           */
          hostname: string;
          /** The process id where the exception occurred. */
          pid?: number;
          /**
           * The deployed revision identifier, such as a Git SHA.
           * @minLength 1
           */
          revision?: string;
        };
        /** Optional request metadata attached to the exception notice. */
        request?: {
          /**
           * The controller or component handling the request.
           * @minLength 1
           */
          component: string;
          /**
           * The action or method handling the request.
           * @minLength 1
           */
          action: string;
          /**
           * The request URL where the exception occurred.
           * @minLength 1
           */
          url: string;
          /** Optional request parameters attached to the notice. */
          params?: Record<string, unknown>;
          /** Optional CGI or header data attached to the notice. */
          cgi_data?: Record<string, unknown>;
          /** Optional session data attached to the notice. */
          session?: Record<string, unknown>;
          /** Optional framework-specific request context attached to the notice. */
          context?: Record<string, unknown>;
        };
      };
      output: {
        /** The created Honeybadger notice summary. */
        notice: {
          /**
           * The UUID returned by Honeybadger for the created notice.
           * @minLength 1
           */
          id: string;
        };
      };
    };
  }
}
