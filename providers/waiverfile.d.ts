import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details for the connected WaiverFile site. */
    "waiverfile.get_site_details": {
      input: Record<string, never>;
      output: {
        /** The complete JSON value returned by WaiverFile. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
      };
    };
    /** Get one signed WaiverFile waiver by its identifier. */
    "waiverfile.get_waiver": {
      input: {
        /**
         * The WaiverFile waiver identifier.
         * @minLength 1
         * @pattern \S
         */
        waiverId: string;
      };
      output: {
        /** The complete JSON value returned by WaiverFile. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
      };
    };
    /** List upcoming WaiverFile events within a UTC date range. */
    "waiverfile.list_upcoming_events": {
      input: {
        /**
         * The inclusive UTC range start in ISO 8601 date-time format.
         * @format date-time
         */
        startDate: string;
        /**
         * The inclusive UTC range end in ISO 8601 date-time format.
         * @format date-time
         */
        endDate: string;
      };
      output: {
        /** The complete JSON value returned by WaiverFile. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
      };
    };
    /** List active waiver forms for the connected WaiverFile site. */
    "waiverfile.list_waiver_forms": {
      input: Record<string, never>;
      output: {
        /** The complete JSON value returned by WaiverFile. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
      };
    };
    /** List WaiverFile waivers matching one or more external reference identifiers. */
    "waiverfile.list_waivers_by_reference": {
      input: {
        /**
         * The value matched against reference ID field 1.
         * @minLength 1
         * @pattern \S
         */
        referenceId1?: string;
        /**
         * The value matched against reference ID field 2.
         * @minLength 1
         * @pattern \S
         */
        referenceId2?: string;
        /**
         * The value matched against reference ID field 3.
         * @minLength 1
         * @pattern \S
         */
        referenceId3?: string;
        /**
         * The value matched against any of the three reference ID fields.
         * @minLength 1
         * @pattern \S
         */
        referenceIdAny?: string;
      };
      output: {
        /** The complete JSON value returned by WaiverFile. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
      };
    };
    /** Search signed WaiverFile waivers by text. */
    "waiverfile.search_waivers": {
      input: {
        /**
         * The text used to search signed waivers.
         * @minLength 1
         * @pattern \S
         */
        terms: string;
      };
      output: {
        /** The complete JSON value returned by WaiverFile. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
      };
    };
  }
}
