import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Save a web page to Cubox for queued parsing and snapshot processing. */
    "cubox.save_url": {
      input: {
        /**
         * The web page URL to save.
         * @format uri
         */
        url: string;
        /**
         * Optional title for the saved page.
         * @minLength 1
         */
        title?: string;
        /**
         * Optional description for the saved page.
         * @minLength 1
         */
        description?: string;
        /** Optional Cubox tags to apply to the saved page. */
        tags?: Array<string>;
        /**
         * Optional Cubox folder name for the saved page.
         * @minLength 1
         */
        folder?: string;
      };
      output: {
        /** Whether Cubox accepted the page for queued parsing and snapshot processing. */
        queued: boolean;
      };
    };
  }
}
