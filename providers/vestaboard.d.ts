import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read the current message displayed by Vestaboard Cloud API. */
    "vestaboard.get_current_message": {
      input: Record<string, never>;
      output: {
        /** The current Vestaboard message returned by the Cloud API. */
        currentMessage: {
          /**
           * The Vestaboard message identifier.
           * @minLength 1
           * @format uuid
           */
          id: string;
          /**
           * The raw Vestaboard layout JSON string returned by the Cloud API.
           * @minLength 1
           */
          layout: string;
          /**
           * The parsed Vestaboard character grid derived from the layout string.
           * @minItems 1
           */
          characters: Array<Array<number>>;
          /**
           * The number of rows in the parsed Vestaboard character grid.
           * @exclusiveMinimum 0
           */
          rows: number;
          /**
           * The number of columns in the parsed Vestaboard character grid.
           * @exclusiveMinimum 0
           */
          columns: number;
        };
      };
    };
    /** Read the current Vestaboard transition settings. */
    "vestaboard.get_transition": {
      input: Record<string, never>;
      output: {
        /** The Vestaboard transition style. */
        transition: "classic" | "wave" | "drift" | "curtain";
        /** The Vestaboard transition speed. */
        transitionSpeed: "gentle" | "fast";
      };
    };
    /** Send a new Vestaboard message as plain text or as a two-dimensional character-code grid. */
    "vestaboard.send_message": {
      input: {
        /**
         * The text message sent to Vestaboard.
         * @minLength 1
         */
        text: string;
        /** Whether Vestaboard should bypass quiet hours for this message. */
        forced?: boolean;
      } | {
        /**
         * The Vestaboard character grid to send.
         * @minItems 1
         */
        characters: Array<Array<number>>;
        /** Whether Vestaboard should bypass quiet hours for this message. */
        forced?: boolean;
      };
      output: {
        /**
         * The write status returned by Vestaboard.
         * @minLength 1
         */
        status: string;
        /**
         * The Vestaboard message identifier.
         * @minLength 1
         * @format uuid
         */
        id: string;
        /**
         * The Unix epoch timestamp in milliseconds when Vestaboard created the message.
         * @minimum 0
         */
        created: number;
      };
    };
    /** Update the Vestaboard transition style and transition speed. */
    "vestaboard.set_transition": {
      input: {
        /** The Vestaboard transition style. */
        transition: "classic" | "wave" | "drift" | "curtain";
        /** The Vestaboard transition speed. */
        transitionSpeed: "gentle" | "fast";
      };
      output: {
        /** The Vestaboard transition style. */
        transition: "classic" | "wave" | "drift" | "curtain";
        /** The Vestaboard transition speed. */
        transitionSpeed: "gentle" | "fast";
      };
    };
  }
}
