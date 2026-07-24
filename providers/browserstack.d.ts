import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve details for a BrowserStack Automate session. */
    "browserstack.get_session": {
      input: {
        /**
         * The BrowserStack session hashed_id.
         * @minLength 1
         */
        session_id: string;
      };
      output: {
        /** A BrowserStack Automate session record. */
        session: {
          /** The session name. */
          name?: string;
          /** The session execution duration. */
          duration?: number;
          /** The session operating system. */
          os?: string;
          /** The session operating system version. */
          os_version?: string;
          /** The browser version used for the session. */
          browser_version?: string;
          /** The browser used for the session. */
          browser?: string;
          /** The device used for the session, when present. */
          device?: string | null;
          /** The session status. */
          status?: string;
          /** The BrowserStack session identifier. */
          hashed_id?: string;
          /** The test status reason, when present. */
          reason?: string | null;
          /** The build name containing the session. */
          build_name?: string;
          /** The project name containing the session. */
          project_name?: string;
          /** The URL for the session logs. */
          logs?: string;
          /** The BrowserStack dashboard URL for the session. */
          browser_url?: string;
          /** The public URL for the session. */
          public_url?: string;
          /** The session video URL. */
          video_url?: string;
          /** The browser console logs URL. */
          browser_console_logs_url?: string;
          /** The HAR logs URL. */
          har_logs_url?: string;
          /** The Selenium logs URL. */
          selenium_logs_url?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List BrowserStack Automate sessions for a build. */
    "browserstack.list_build_sessions": {
      input: {
        /**
         * The BrowserStack build hashed_id.
         * @minLength 1
         */
        build_id: string;
        /**
         * The number of results to return. BrowserStack accepts 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
        /** Only return sessions with this BrowserStack status. */
        status?: string;
      };
      output: {
        /** BrowserStack Automate sessions. */
        sessions: Array<{
          /** The session name. */
          name?: string;
          /** The session execution duration. */
          duration?: number;
          /** The session operating system. */
          os?: string;
          /** The session operating system version. */
          os_version?: string;
          /** The browser version used for the session. */
          browser_version?: string;
          /** The browser used for the session. */
          browser?: string;
          /** The device used for the session, when present. */
          device?: string | null;
          /** The session status. */
          status?: string;
          /** The BrowserStack session identifier. */
          hashed_id?: string;
          /** The test status reason, when present. */
          reason?: string | null;
          /** The build name containing the session. */
          build_name?: string;
          /** The project name containing the session. */
          project_name?: string;
          /** The URL for the session logs. */
          logs?: string;
          /** The BrowserStack dashboard URL for the session. */
          browser_url?: string;
          /** The public URL for the session. */
          public_url?: string;
          /** The session video URL. */
          video_url?: string;
          /** The browser console logs URL. */
          browser_console_logs_url?: string;
          /** The HAR logs URL. */
          har_logs_url?: string;
          /** The Selenium logs URL. */
          selenium_logs_url?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List recent BrowserStack Automate builds with optional status, project, and pagination filters. */
    "browserstack.list_builds": {
      input: {
        /**
         * The number of results to return. BrowserStack accepts 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
        /** A BrowserStack Automate build status filter. */
        status?: "running" | "done" | "timeout" | "failed";
        /**
         * Only return builds for this BrowserStack project ID.
         * @minimum 1
         */
        project_id?: number;
      };
      output: {
        /** BrowserStack Automate builds. */
        builds: Array<{
          /** The build name. */
          name?: string;
          /** The BrowserStack build identifier. */
          hashed_id?: string;
          /** The build execution duration. */
          duration?: number;
          /** The build status. */
          status?: string;
          /** The build tag, when present. */
          build_tag?: string | null;
          /** The BrowserStack dashboard URL for the build. */
          public_url?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Mark a BrowserStack Automate session as passed or failed with a reason. */
    "browserstack.update_session_status": {
      input: {
        /**
         * The BrowserStack session hashed_id.
         * @minLength 1
         */
        session_id: string;
        /** A BrowserStack Automate session status. */
        status: "passed" | "failed";
        /**
         * The reason to store with the BrowserStack session status.
         * @minLength 1
         */
        reason: string;
      };
      output: {
        /** A BrowserStack Automate session record. */
        session: {
          /** The session name. */
          name?: string;
          /** The session execution duration. */
          duration?: number;
          /** The session operating system. */
          os?: string;
          /** The session operating system version. */
          os_version?: string;
          /** The browser version used for the session. */
          browser_version?: string;
          /** The browser used for the session. */
          browser?: string;
          /** The device used for the session, when present. */
          device?: string | null;
          /** The session status. */
          status?: string;
          /** The BrowserStack session identifier. */
          hashed_id?: string;
          /** The test status reason, when present. */
          reason?: string | null;
          /** The build name containing the session. */
          build_name?: string;
          /** The project name containing the session. */
          project_name?: string;
          /** The URL for the session logs. */
          logs?: string;
          /** The BrowserStack dashboard URL for the session. */
          browser_url?: string;
          /** The public URL for the session. */
          public_url?: string;
          /** The session video URL. */
          video_url?: string;
          /** The browser console logs URL. */
          browser_console_logs_url?: string;
          /** The HAR logs URL. */
          har_logs_url?: string;
          /** The Selenium logs URL. */
          selenium_logs_url?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
