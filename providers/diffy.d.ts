import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current status and visual change result for a Diffy comparison. */
    "diffy.get_diff": {
      input: {
        /**
         * The Diffy comparison identifier.
         * @minimum 1
         */
        diffId: number;
      };
      output: {
        /** The visual comparison returned by Diffy. */
        diff: Record<string, unknown>;
      };
    };
    /** Get the current settings and environments for a Diffy project. */
    "diffy.get_project": {
      input: {
        /**
         * The Diffy project identifier.
         * @minimum 1
         */
        projectId: number;
      };
      output: {
        /** The project returned by Diffy. */
        project: Record<string, unknown>;
      };
    };
    /** Get the current status and result details for a Diffy screenshot set. */
    "diffy.get_screenshot": {
      input: {
        /**
         * The Diffy screenshot set identifier.
         * @minimum 1
         */
        screenshotId: number;
      };
      output: {
        /** The screenshot set returned by Diffy. */
        screenshot: Record<string, unknown>;
      };
    };
    /** List visual comparison results for a Diffy project. */
    "diffy.list_diffs": {
      input: {
        /**
         * The Diffy project identifier.
         * @minimum 1
         */
        projectId: number;
        /**
         * The zero-based Diffy results page to return.
         * @minimum 0
         */
        page?: number;
      };
      output: {
        /** The visual comparisons returned by Diffy. */
        diffs: Array<Record<string, unknown>>;
        /** The zero-based page requested from Diffy. */
        page: number;
        /** The total page count reported by Diffy when available. */
        totalPages: number | null;
      };
    };
    /** List the Diffy visual testing projects available to the connected account. */
    "diffy.list_projects": {
      input: Record<string, never>;
      output: {
        /** The projects returned by Diffy. */
        projects: Array<Record<string, unknown>>;
      };
    };
    /** List screenshot sets captured for a Diffy project. */
    "diffy.list_screenshots": {
      input: {
        /**
         * The Diffy project identifier.
         * @minimum 1
         */
        projectId: number;
      };
      output: {
        /** The screenshot sets returned by Diffy. */
        screenshots: Array<Record<string, unknown>>;
      };
    };
  }
}
