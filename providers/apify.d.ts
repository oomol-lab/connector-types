import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve metadata for one Apify actor by identifier. */
    "apify.get_actor": {
      input: {
        /**
         * The Apify actor identifier, such as apify~web-scraper or apify/web-scraper.
         * @minLength 1
         */
        actorId: string;
      };
      output: {
        /** An Apify actor. */
        actor: {
          /** The Apify actor identifier. */
          id: string;
          /** The owner user identifier. */
          userId: string;
          /** The internal actor name. */
          name: string;
          /** The actor owner's username. */
          username: string;
          /** The actor display title. */
          title?: string;
          /** The actor description. */
          description?: string;
          /** Whether the actor is public. */
          isPublic: boolean;
          /** When the actor was created. */
          createdAt?: string;
          /** When the actor was last modified. */
          modifiedAt?: string;
          /** Actor usage and popularity statistics. */
          stats?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the currently authenticated Apify user account. */
    "apify.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current Apify user account. */
        user: {
          /** The Apify user identifier. */
          id?: string;
          /** The Apify username. */
          username: string;
          /** The email address of the Apify user. */
          email?: string;
          /** The Apify subscription plan. */
          plan?: Record<string, unknown>;
          /** The Apify proxy configuration. */
          proxy?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve JSON items from one Apify dataset. */
    "apify.get_dataset_items": {
      input: {
        /**
         * The Apify dataset identifier.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * How many items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** Whether hidden fields and empty values should be removed from each item. */
        clean?: boolean;
        /** Whether fields starting with a hash sign should be skipped. */
        skipHidden?: boolean;
      };
      output: {
        /** The ordered list of Apify dataset items. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve the current status and storage identifiers for one Apify actor run. */
    "apify.get_run": {
      input: {
        /**
         * The Apify actor run identifier.
         * @minLength 1
         */
        runId: string;
        /**
         * How many seconds to wait for run completion before returning.
         * @minimum 0
         */
        waitForFinishSeconds?: number;
      };
      output: {
        /** An Apify actor run. */
        run: {
          /** The Apify run identifier. */
          id: string;
          /** The actor identifier associated with the run. */
          actId: string;
          /** The current run status. */
          status: string;
          /** When the run started. */
          startedAt?: string;
          /** When the run finished. */
          finishedAt?: string;
          /** The default dataset identifier created for the run. */
          defaultDatasetId?: string;
          /** The default key-value store identifier created for the run. */
          defaultKeyValueStoreId?: string;
          /** The default request queue identifier created for the run. */
          defaultRequestQueueId?: string;
          /** The run statistics object. */
          stats?: Record<string, unknown>;
          /** The run options object. */
          options?: Record<string, unknown>;
          /** The run usage summary object. */
          usage?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Start one Apify actor run with an optional JSON input payload. */
    "apify.run_actor": {
      input: {
        /**
         * The Apify actor identifier, such as apify~web-scraper or apify/web-scraper.
         * @minLength 1
         */
        actorId: string;
        /** The JSON input object passed to the actor run. */
        input?: Record<string, unknown>;
        /**
         * The actor build tag or number to run.
         * @minLength 1
         */
        build?: string;
        /**
         * The memory limit for the run in megabytes.
         * @exclusiveMinimum 0
         */
        memoryMbytes?: number;
        /**
         * The maximum runtime for the run in seconds.
         * @exclusiveMinimum 0
         */
        timeoutSecs?: number;
      };
      output: {
        /** An Apify actor run. */
        run: {
          /** The Apify run identifier. */
          id: string;
          /** The actor identifier associated with the run. */
          actId: string;
          /** The current run status. */
          status: string;
          /** When the run started. */
          startedAt?: string;
          /** When the run finished. */
          finishedAt?: string;
          /** The default dataset identifier created for the run. */
          defaultDatasetId?: string;
          /** The default key-value store identifier created for the run. */
          defaultKeyValueStoreId?: string;
          /** The default request queue identifier created for the run. */
          defaultRequestQueueId?: string;
          /** The run statistics object. */
          stats?: Record<string, unknown>;
          /** The run options object. */
          options?: Record<string, unknown>;
          /** The run usage summary object. */
          usage?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
