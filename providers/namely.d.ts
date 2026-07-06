import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the Namely profile associated with the personal access token. */
    "namely.get_current_profile": {
      input: Record<string, never>;
      output: {
        /** A Namely API object. */
        profile: Record<string, unknown>;
        /** A Namely API object. */
        linked: Record<string, unknown> | null;
        /** The raw Namely API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Namely employee profile by profile ID. */
    "namely.get_profile": {
      input: {
        /**
         * The Namely profile ID.
         * @minLength 1
         */
        profileId: string;
      };
      output: {
        /** A Namely API object. */
        profile: Record<string, unknown>;
        /** A Namely API object. */
        linked: Record<string, unknown> | null;
        /** The raw Namely API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Namely profile fields configured for the company. */
    "namely.list_profile_fields": {
      input: Record<string, never>;
      output: {
        /** The Namely profile fields returned by the API. */
        profileFields: Array<Record<string, unknown>>;
        /** A Namely API object. */
        meta: Record<string, unknown> | null;
        /** A Namely API object. */
        links: Record<string, unknown> | null;
        /** A Namely API object. */
        linked: Record<string, unknown> | null;
        /** The raw Namely API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Namely employee profiles visible to the personal access token. */
    "namely.list_profiles": {
      input: {
        /**
         * The Namely page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of Namely records to return per page.
         * @minimum 1
         * @maximum 50
         */
        perPage?: number;
      };
      output: {
        /** The Namely profiles returned by the API. */
        profiles: Array<Record<string, unknown>>;
        /** A Namely API object. */
        meta: Record<string, unknown> | null;
        /** A Namely API object. */
        links: Record<string, unknown> | null;
        /** A Namely API object. */
        linked: Record<string, unknown> | null;
        /** The raw Namely API response object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
