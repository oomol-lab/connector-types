import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Ringover call log entries for one call ID. */
    "ringover.get_call": {
      input: {
        /**
         * The Ringover call ID.
         * @minLength 1
         */
        callId: string;
      };
      output: {
        /** Ringover call log objects. */
        calls: Array<Record<string, unknown>>;
        /** The total item count returned by Ringover when present. */
        listCount: number | null;
        /** The raw Ringover response payload. */
        raw: unknown;
      };
    };
    /** Get a Ringover call group by ID, optionally paginating its users array. */
    "ringover.get_group": {
      input: {
        /**
         * The Ringover group ID.
         * @exclusiveMinimum 0
         */
        groupId: number;
        /**
         * Maximum number of items to return.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        limitCount?: number;
        /**
         * Number of items to skip for offset pagination.
         * @minimum 0
         */
        limitOffset?: number;
      };
      output: {
        /** The Ringover group object returned by the Public API. */
        group: Record<string, unknown>;
        /** The raw Ringover response payload. */
        raw: unknown;
      };
    };
    /** Get a Ringover IVR by ID. */
    "ringover.get_ivr": {
      input: {
        /**
         * The Ringover IVR ID.
         * @exclusiveMinimum 0
         */
        ivrId: number;
      };
      output: {
        /** The Ringover IVR object returned by the Public API. */
        ivr: Record<string, unknown>;
        /** The raw Ringover response payload. */
        raw: unknown;
      };
    };
    /** Get Ringover phone number details by E.164 number without the plus prefix. */
    "ringover.get_number": {
      input: {
        /**
         * The E.164 phone number without the plus prefix.
         * @minLength 1
         */
        number: string;
      };
      output: {
        /** The Ringover phone number object returned by the Public API. */
        number: Record<string, unknown>;
        /** The raw Ringover response payload. */
        raw: unknown;
      };
    };
    /** Get a Ringover call tag by ID. */
    "ringover.get_tag": {
      input: {
        /**
         * The Ringover tag ID.
         * @exclusiveMinimum 0
         */
        tagId: number;
      };
      output: {
        /** The Ringover tag object returned by the Public API. */
        tag: Record<string, unknown>;
        /** The raw Ringover response payload. */
        raw: unknown;
      };
    };
    /** Retrieve the Ringover team object with nested numbers, users, IVRs, conferences, tags, and groups allowed by the API key. */
    "ringover.get_team": {
      input: Record<string, never>;
      output: {
        /** The Ringover team object returned by the Public API. */
        team: Record<string, unknown>;
        /** The raw Ringover response payload. */
        raw: unknown;
      };
    };
    /** Get a Ringover user by ID. */
    "ringover.get_user": {
      input: {
        /**
         * The Ringover user ID.
         * @exclusiveMinimum 0
         */
        userId: number;
      };
      output: {
        /** The Ringover user object returned by the Public API. */
        user: Record<string, unknown>;
        /** The raw Ringover response payload. */
        raw: unknown;
      };
    };
    /** List terminated Ringover calls with optional date, pagination, and call type filters. */
    "ringover.list_calls": {
      input: {
        /**
         * Start of the date range as an ISO 8601 date-time.
         * @format date-time
         */
        startDate?: string;
        /**
         * End of the date range as an ISO 8601 date-time.
         * @format date-time
         */
        endDate?: string;
        /**
         * Maximum number of calls to return.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        limitCount?: number;
        /**
         * Number of calls to skip for offset pagination.
         * @minimum 0
         * @maximum 9000
         */
        limitOffset?: number;
        /**
         * Cursor value for deep pagination using cdr_id.
         * @exclusiveMinimum 0
         */
        lastIdReturned?: number;
        /**
         * Call type filters to apply.
         * @minItems 1
         */
        callType?: Array<"ANSWERED" | "MISSED" | "OUT" | "VOICEMAIL">;
      };
      output: {
        /** Ringover call log objects. */
        calls: Array<Record<string, unknown>>;
        /** The total item count returned by Ringover when present. */
        listCount: number | null;
        /** The raw Ringover response payload. */
        raw: unknown;
      };
    };
    /** List Ringover call groups with offset pagination. */
    "ringover.list_groups": {
      input: {
        /**
         * Maximum number of items to return.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        limitCount?: number;
        /**
         * Number of items to skip for offset pagination.
         * @minimum 0
         */
        limitOffset?: number;
      };
      output: {
        /** Ringover group objects. */
        groups: Array<Record<string, unknown>>;
        /** The total item count returned by Ringover when present. */
        listCount: number | null;
        /** The raw Ringover response payload. */
        raw: unknown;
      };
    };
    /** List Ringover IVR configurations visible to the API key. */
    "ringover.list_ivrs": {
      input: Record<string, never>;
      output: {
        /** Ringover IVR objects. */
        ivrs: Array<Record<string, unknown>>;
        /** The total item count returned by Ringover when present. */
        listCount: number | null;
        /** The raw Ringover response payload. */
        raw: unknown;
      };
    };
    /** List Ringover phone numbers with assignment-type filters. */
    "ringover.list_numbers": {
      input: {
        /** Whether to include phone numbers assigned to users. */
        isUser?: boolean;
        /** Whether to include phone numbers assigned to IVRs. */
        isIvr?: boolean;
        /** Whether to include phone numbers used for fax. */
        isFax?: boolean;
        /** Whether to include phone numbers assigned to conference rooms. */
        isConference?: boolean;
        /** Whether to include unassigned phone numbers. */
        isAvailable?: boolean;
      };
      output: {
        /** Ringover phone number objects. */
        numbers: Array<Record<string, unknown>>;
        /** The total item count returned by Ringover when present. */
        listCount: number | null;
        /** The raw Ringover response payload. */
        raw: unknown;
      };
    };
    /** List Ringover call tags. */
    "ringover.list_tags": {
      input: Record<string, never>;
      output: {
        /** Ringover tag objects. */
        tags: Array<Record<string, unknown>>;
        /** The total item count returned by Ringover when present. */
        listCount: number | null;
        /** The raw Ringover response payload. */
        raw: unknown;
      };
    };
    /** List Ringover users visible to the API key. */
    "ringover.list_users": {
      input: Record<string, never>;
      output: {
        /** Ringover user objects. */
        users: Array<Record<string, unknown>>;
        /** The total item count returned by Ringover when present. */
        listCount: number | null;
        /** The raw Ringover response payload. */
        raw: unknown;
      };
    };
  }
}
