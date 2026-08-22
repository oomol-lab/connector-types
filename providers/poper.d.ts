import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List responses collected by one Poper popup. */
    "poper.list_popup_responses": {
      input: {
        /**
         * The Poper popup identifier whose responses to return.
         * @minLength 1
         */
        popup_id: string;
      };
      output: {
        /** Responses collected by the selected popup. */
        responses: Array<Record<string, unknown>>;
      };
    };
    /** List all popups in the authenticated Poper account. */
    "poper.list_popups": {
      input: Record<string, never>;
      output: {
        /** Popups in the authenticated Poper account. */
        popups: Array<Record<string, unknown>>;
      };
    };
  }
}
