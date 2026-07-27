import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a one-off signing link for a WaiverForever template. */
    "waiverforever.create_template_signing_link": {
      input: {
        /**
         * The WaiverForever resource ID.
         * @minLength 1
         * @pattern \S
         */
        template_id: string;
        /**
         * The signing link expiration time in seconds. WaiverForever defaults to 86400.
         * @exclusiveMinimum 0
         */
        ttl?: number;
        /** Whether submissions through the generated tracking link should start as pending. */
        pending_enabled?: boolean;
      };
      output: {
        /** The generated tracking ID. */
        tracking_id: string | null;
        /**
         * The generated request waiver URL.
         * @format uri
         */
        request_waiver_url: string | null;
        /** The signing link expiration time in seconds. */
        ttl: number | null;
        /** Whether pending status was requested for this signing link. */
        pending_enabled: boolean | null;
        /** Whether pending status was available for this signing link. */
        pending_available: boolean | null;
        /** The raw object returned by WaiverForever. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a WaiverForever waiver request group. */
    "waiverforever.create_waiver_request": {
      input: {
        /**
         * The waiver request group name.
         * @minLength 1
         */
        name: string;
        /**
         * The request group size. WaiverForever supports values between 0 and 1000.
         * @minimum 0
         * @maximum 1000
         */
        size: number;
        /**
         * The WaiverForever resource ID.
         * @minLength 1
         * @pattern \S
         */
        template_id: string;
        /**
         * The waiver request group note.
         * @minLength 1
         */
        note?: string;
        /** The waiver request group type. */
        type?: "normal" | "anonymous";
        /**
         * The waiver request contact info.
         * @minLength 1
         */
        contact_info?: string;
        /** The WaiverForever prefill field map keyed by documented prefill field IDs. */
        group_prefill_data?: Record<string, unknown>;
      };
      output: {
        /** The raw object returned by WaiverForever. */
        waiver_request: Record<string, unknown>;
        /** The raw object returned by WaiverForever. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the WaiverForever account username associated with the API key. */
    "waiverforever.get_user_info": {
      input: Record<string, never>;
      output: {
        /** The WaiverForever account username. */
        username: string | null;
        /** The raw object returned by WaiverForever. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a signed WaiverForever waiver by ID. */
    "waiverforever.get_waiver": {
      input: {
        /**
         * The WaiverForever resource ID.
         * @minLength 1
         * @pattern \S
         */
        waiver_id: string;
      };
      output: {
        /** The raw object returned by WaiverForever. */
        waiver: Record<string, unknown>;
        /** The raw object returned by WaiverForever. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a WaiverForever waiver request group by ID. */
    "waiverforever.get_waiver_request": {
      input: {
        /**
         * The WaiverForever resource ID.
         * @minLength 1
         * @pattern \S
         */
        waiver_request_id: string;
        /** Whether to include submitted waivers in the response. */
        include_waivers?: boolean;
      };
      output: {
        /** The raw object returned by WaiverForever. */
        waiver_request: Record<string, unknown>;
        /** The raw object returned by WaiverForever. */
        raw: Record<string, unknown>;
      };
    };
    /** List waiver templates available to the WaiverForever account. */
    "waiverforever.list_templates": {
      input: Record<string, never>;
      output: {
        /** The raw objects returned by WaiverForever. */
        templates: Array<Record<string, unknown>>;
        /** The raw object returned by WaiverForever. */
        raw: Record<string, unknown>;
      };
    };
    /** List WaiverForever waiver request groups for a template with optional filters. */
    "waiverforever.list_waiver_requests": {
      input: {
        /**
         * The WaiverForever resource ID.
         * @minLength 1
         * @pattern \S
         */
        template_id: string;
        /**
         * The waiver request group name search term.
         * @minLength 1
         */
        name?: string;
        /** The waiver request group status to filter by. */
        status?: "collecting" | "accepted";
        /** The Unix timestamp in seconds. */
        start_timestamp?: number;
        /** The Unix timestamp in seconds. */
        end_timestamp?: number;
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /** Whether to include submitted waivers in each request group. */
        include_waivers?: boolean;
        /**
         * The string values used to filter results.
         * @minItems 1
         */
        request_ids?: Array<string>;
      };
      output: {
        /** The raw objects returned by WaiverForever. */
        waiver_requests: Array<Record<string, unknown>>;
        /** The page number returned by WaiverForever. */
        page: number | null;
        /** The page size returned by WaiverForever. */
        per_page: number | null;
        /** The total or page count returned by WaiverForever. */
        count: number | null;
        /** The raw object returned by WaiverForever. */
        raw: Record<string, unknown>;
      };
    };
    /** Search signed WaiverForever waivers with keyword, date, template, and status filters. */
    "waiverforever.search_waivers": {
      input: {
        /**
         * The keyword search term.
         * @minLength 1
         */
        search_term?: string;
        /** The Unix timestamp in seconds. */
        start_timestamp?: number;
        /** The Unix timestamp in seconds. */
        end_timestamp?: number;
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The WaiverForever template IDs used to filter results.
         * @minItems 1
         */
        template_ids?: Array<string>;
        /**
         * The waiver note text to search.
         * @minLength 1
         */
        note?: string;
        /**
         * The string values used to filter results.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * The string values used to filter results.
         * @minItems 1
         */
        device_ids?: Array<string>;
        /**
         * The WaiverForever resource ID.
         * @minLength 1
         * @pattern \S
         */
        request_id?: string;
        /**
         * The string values used to filter results.
         * @minItems 1
         */
        request_ids?: Array<string>;
        /** The waiver status to filter by. */
        status?: "approved" | "pending" | "revoked";
      };
      output: {
        /** The raw objects returned by WaiverForever. */
        waivers: Array<Record<string, unknown>>;
        /** The page number returned by WaiverForever. */
        page: number | null;
        /** The page size returned by WaiverForever. */
        per_page: number | null;
        /** The total or page count returned by WaiverForever. */
        count: number | null;
        /** The raw object returned by WaiverForever. */
        raw: Record<string, unknown>;
      };
    };
  }
}
