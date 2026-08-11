import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one activity from the connected Amilia organization. */
    "amilia.get_activity": {
      input: {
        /**
         * The Amilia activity identifier.
         * @minimum 1
         */
        activityId: number;
        /** Whether activity tax details should be included. */
        showTaxes?: boolean;
      };
      output: {
        /** An Amilia activity object using the fields returned by the organization API. */
        activity: Record<string, unknown>;
      };
    };
    /** Retrieve one program from the connected Amilia organization. */
    "amilia.get_program": {
      input: {
        /**
         * The Amilia program identifier.
         * @minimum 1
         */
        programId: number;
      };
      output: {
        /** An Amilia program object using the fields returned by the organization API. */
        program: Record<string, unknown>;
      };
    };
    /** List activities in one Amilia program with visibility, cancellation, occurrence, tax, and pagination options. */
    "amilia.list_program_activities": {
      input: {
        /**
         * The Amilia program identifier.
         * @minimum 1
         */
        programId: number;
        /** Whether hidden activities should be included. */
        showHidden?: boolean;
        /** Whether cancelled activities should be included. */
        showCancelled?: boolean;
        /** Whether each activity should include its full occurrence list. */
        showOccurrences?: boolean;
        /** Whether activity tax details should be included. */
        showTaxes?: boolean;
        /**
         * The Amilia result page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of Amilia records to request per page.
         * @minimum 1
         */
        perPage?: number;
      };
      output: {
        /** Activities returned by Amilia. */
        activities: Array<Record<string, unknown>>;
        /** Normalized Amilia v3 pagination metadata. */
        paging: {
          /**
           * The total number of available records when Amilia returns it.
           * @minimum 0
           */
          totalCount: number | null;
          /** The URL for the next page when Amilia returns one. */
          next: string | null;
        };
      };
    };
    /** List programs for the connected Amilia organization with visibility, archive, and pagination filters. */
    "amilia.list_programs": {
      input: {
        /** Whether hidden programs should be included. */
        showHidden?: boolean;
        /** Whether archived programs should be included. */
        showArchived?: boolean;
        /**
         * The Amilia result page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of Amilia records to request per page.
         * @minimum 1
         */
        perPage?: number;
      };
      output: {
        /** Programs returned by Amilia. */
        programs: Array<Record<string, unknown>>;
        /** Normalized Amilia v3 pagination metadata. */
        paging: {
          /**
           * The total number of available records when Amilia returns it.
           * @minimum 0
           */
          totalCount: number | null;
          /** The URL for the next page when Amilia returns one. */
          next: string | null;
        };
      };
    };
  }
}
