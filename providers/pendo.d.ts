import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one or more Pendo features by feature ID. */
    "pendo.get_features": {
      input: {
        /**
         * Pendo feature IDs to retrieve.
         * @minItems 1
         */
        ids: Array<string>;
      };
      output: {
        /** Matching Pendo feature objects. */
        features: Array<Record<string, unknown>>;
      };
    };
    /** Get one or more Pendo pages by page ID. */
    "pendo.get_pages": {
      input: {
        /**
         * Pendo page IDs to retrieve.
         * @minItems 1
         */
        ids: Array<string>;
      };
      output: {
        /** Matching Pendo page objects. */
        pages: Array<Record<string, unknown>>;
      };
    };
    /** Verify the current Pendo integration key and report whether Pendo says it has write access. */
    "pendo.identify": {
      input: Record<string, never>;
      output: {
        /** Whether Pendo accepted the integration key. */
        valid: boolean;
        /** Whether the integration key has write access when Pendo returns it. */
        canWrite: boolean | null;
        /** The raw Pendo token verification response. */
        raw: unknown;
      };
    };
    /** List Pendo features, optionally scoped to one application or expanded across all applications. */
    "pendo.list_features": {
      input: {
        /**
         * Pendo application ID used to list features for one application in a multi-app subscription.
         * @minLength 1
         */
        appId?: string;
        /** Whether to include features from all applications in the subscription. */
        expandAllApps?: boolean;
      };
      output: {
        /** Pendo feature objects. */
        features: Array<Record<string, unknown>>;
      };
    };
    /** List Pendo pages, optionally scoped to one application or expanded across all applications. */
    "pendo.list_pages": {
      input: {
        /**
         * Pendo application ID used to list pages for one application in a multi-app subscription.
         * @minLength 1
         */
        appId?: string;
        /** Whether to include pages from all applications in the subscription. */
        expandAllApps?: boolean;
      };
      output: {
        /** Pendo page objects. */
        pages: Array<Record<string, unknown>>;
      };
    };
  }
}
