import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create or update a subscriber and associate the tag linked to the KlickTipp Listbuilding API key. */
    "klicktipp.signin": {
      input: {
        /**
         * The subscriber email address. KlickTipp requires either email or smsnumber for signin, and email for signout and signoff.
         * @format email
         */
        email?: string | null;
        /**
         * The subscriber phone number in international format, for example +4912345678 or 004912345678.
         * @minLength 1
         */
        smsnumber?: string | null;
        /** Additional custom fields for the subscriber. Keys must match KlickTipp field names and values must match the configured field type formats. */
        fields?: Record<string, string> | null;
      };
      output: {
        /** Redirect URLs returned by KlickTipp for the configured opt-in flow. */
        redirect_urls: Array<string>;
      };
    };
    /** Unsubscribe a contact by email address through the KlickTipp Listbuilding API key. */
    "klicktipp.signoff": {
      input: {
        /**
         * The subscriber email address.
         * @format email
         */
        email: string;
      };
      output: {
        /** Whether every returned boolean result is true. */
        success: boolean;
        /** The raw boolean result array returned by KlickTipp. */
        results: Array<boolean>;
      };
    };
    /** Remove the tag linked to the KlickTipp Listbuilding API key from a subscriber by email address. */
    "klicktipp.signout": {
      input: {
        /**
         * The subscriber email address.
         * @format email
         */
        email: string;
      };
      output: {
        /** Whether every returned boolean result is true. */
        success: boolean;
        /** The raw boolean result array returned by KlickTipp. */
        results: Array<boolean>;
      };
    };
  }
}
