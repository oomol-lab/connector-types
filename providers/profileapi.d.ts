import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Resolve a profileAPI person identifier and basic profile link from one email address. */
    "profileapi.reverse_lookup_email": {
      input: {
        /**
         * The email address to reverse lookup.
         * @format email
         */
        email: string;
      };
      output: {
        /** The person identifiers returned by profileAPI after a successful reverse lookup. */
        data: {
          /**
           * The profileAPI person identifier, formatted as a UUID without hyphens.
           * @minLength 1
           */
          id: string;
          /**
           * The LinkedIn profile URL returned for the matched person.
           * @format uri
           */
          linkedInUrl?: string;
        };
      };
    };
    /** Resolve a profileAPI person identifier and basic profile link from one E.164 phone number. */
    "profileapi.reverse_lookup_phone": {
      input: {
        /**
         * The phone number to reverse lookup in E.164 format, including the leading plus sign.
         * @minLength 1
         * @pattern ^\+[1-9][0-9]{1,14}$
         */
        phone: string;
      };
      output: {
        /** The person identifiers returned by profileAPI after a successful reverse lookup. */
        data: {
          /**
           * The profileAPI person identifier, formatted as a UUID without hyphens.
           * @minLength 1
           */
          id: string;
          /**
           * The LinkedIn profile URL returned for the matched person.
           * @format uri
           */
          linkedInUrl?: string;
        };
      };
    };
  }
}
