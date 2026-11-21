import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the best-ranked plans for one GTM API. */
    "datacircle.get_best_for_api": {
      input: {
        /**
         * The API slug returned by list_apis.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** The ranking, as Datacircle returns it. */
        data: unknown;
      };
    };
    /** List every GTM API on the Datacircle sheet. */
    "datacircle.list_apis": {
      input: Record<string, never>;
      output: {
        /** The APIs, as Datacircle returns them. */
        data: unknown;
      };
    };
  }
}
