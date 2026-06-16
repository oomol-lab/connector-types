import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one JobNimbus contact from a raw contact payload, with optional actor, bulk, and skip controls. */
    "jobnimbus.create_contact": {
      input: {
        /**
         * The optional JobNimbus actor email used to execute the request as a specific team member.
         * @minLength 1
         */
        actor?: string;
        /** Whether to ask JobNimbus for optimistic bulk persistence on this create request. */
        bulk?: boolean;
        /**
         * The JobNimbus automated steps to bypass, such as automation or notification.
         * @minItems 1
         */
        skip?: Array<string>;
        /** The raw JobNimbus contact payload to send to the API, including standard and custom fields. */
        data: Record<string, unknown>;
      };
      output: {
        /** The raw JobNimbus contact record returned by the API. */
        contact: Record<string, unknown>;
      };
    };
    /** Create one JobNimbus job from a raw job payload, with optional actor, bulk, and skip controls. */
    "jobnimbus.create_job": {
      input: {
        /**
         * The optional JobNimbus actor email used to execute the request as a specific team member.
         * @minLength 1
         */
        actor?: string;
        /** Whether to ask JobNimbus for optimistic bulk persistence on this create request. */
        bulk?: boolean;
        /**
         * The JobNimbus automated steps to bypass, such as automation or notification.
         * @minItems 1
         */
        skip?: Array<string>;
        /** The raw JobNimbus job payload to send to the API, including standard and custom fields. */
        data: Record<string, unknown>;
      };
      output: {
        /** The raw JobNimbus job record returned by the API. */
        job: Record<string, unknown>;
      };
    };
    /** Get one JobNimbus contact by ID. */
    "jobnimbus.get_contact": {
      input: {
        /**
         * The JobNimbus record identifier.
         * @minLength 1
         */
        contactId: string;
        /**
         * The optional JobNimbus actor email used to execute the request as a specific team member.
         * @minLength 1
         */
        actor?: string;
        /**
         * The JobNimbus field names to include in the response.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** The raw JobNimbus contact record returned by the API. */
        contact: Record<string, unknown>;
      };
    };
    /** Get one JobNimbus job by ID. */
    "jobnimbus.get_job": {
      input: {
        /**
         * The JobNimbus record identifier.
         * @minLength 1
         */
        jobId: string;
        /**
         * The optional JobNimbus actor email used to execute the request as a specific team member.
         * @minLength 1
         */
        actor?: string;
        /**
         * The JobNimbus field names to include in the response.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** The raw JobNimbus job record returned by the API. */
        job: Record<string, unknown>;
      };
    };
    /** List JobNimbus contacts with the standard pagination, sorting, field selection, actor, and Elasticsearch-style filter options. */
    "jobnimbus.list_contacts": {
      input: {
        /**
         * The optional JobNimbus actor email used to execute the request as a specific team member.
         * @minLength 1
         */
        actor?: string;
        /**
         * The maximum number of contacts to return.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        size?: number;
        /**
         * The zero-based starting offset for pagination.
         * @minimum 0
         */
        from?: number;
        /**
         * The JobNimbus field name used for sorting.
         * @minLength 1
         */
        sortField?: string;
        /** The JobNimbus sort direction. */
        sortDirection?: "asc" | "desc";
        /**
         * The JobNimbus field names to include in the response.
         * @minItems 1
         */
        fields?: Array<string>;
        /** A JobNimbus Elasticsearch-style filter object that will be JSON-encoded for the filter query parameter. */
        filter?: Record<string, unknown>;
      };
      output: {
        /**
         * The total number of contacts returned by the API response.
         * @minimum 0
         */
        count: number;
        /** The JobNimbus contacts returned for this request. */
        contacts: Array<Record<string, unknown>>;
      };
    };
    /** List JobNimbus jobs with the standard pagination, sorting, field selection, actor, and Elasticsearch-style filter options. */
    "jobnimbus.list_jobs": {
      input: {
        /**
         * The optional JobNimbus actor email used to execute the request as a specific team member.
         * @minLength 1
         */
        actor?: string;
        /**
         * The maximum number of jobs to return.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        size?: number;
        /**
         * The zero-based starting offset for pagination.
         * @minimum 0
         */
        from?: number;
        /**
         * The JobNimbus field name used for sorting.
         * @minLength 1
         */
        sortField?: string;
        /** The JobNimbus sort direction. */
        sortDirection?: "asc" | "desc";
        /**
         * The JobNimbus field names to include in the response.
         * @minItems 1
         */
        fields?: Array<string>;
        /** A JobNimbus Elasticsearch-style filter object that will be JSON-encoded for the filter query parameter. */
        filter?: Record<string, unknown>;
      };
      output: {
        /**
         * The total number of jobs returned by the API response.
         * @minimum 0
         */
        count: number;
        /** The JobNimbus jobs returned for this request. */
        jobs: Array<Record<string, unknown>>;
      };
    };
    /** Update one JobNimbus contact by ID from a raw contact payload, with optional actor, bulk, and skip controls. */
    "jobnimbus.update_contact": {
      input: {
        /**
         * The JobNimbus record identifier.
         * @minLength 1
         */
        contactId: string;
        /**
         * The optional JobNimbus actor email used to execute the request as a specific team member.
         * @minLength 1
         */
        actor?: string;
        /** Whether to ask JobNimbus for optimistic bulk persistence on this update request. */
        bulk?: boolean;
        /**
         * The JobNimbus automated steps to bypass, such as automation or notification.
         * @minItems 1
         */
        skip?: Array<string>;
        /** The raw JobNimbus contact payload to send to the API, including standard and custom fields. */
        data: Record<string, unknown>;
      };
      output: {
        /** The raw JobNimbus contact record returned by the API. */
        contact: Record<string, unknown>;
      };
    };
    /** Update one JobNimbus job by ID from a raw job payload, with optional actor, bulk, and skip controls. */
    "jobnimbus.update_job": {
      input: {
        /**
         * The JobNimbus record identifier.
         * @minLength 1
         */
        jobId: string;
        /**
         * The optional JobNimbus actor email used to execute the request as a specific team member.
         * @minLength 1
         */
        actor?: string;
        /** Whether to ask JobNimbus for optimistic bulk persistence on this update request. */
        bulk?: boolean;
        /**
         * The JobNimbus automated steps to bypass, such as automation or notification.
         * @minItems 1
         */
        skip?: Array<string>;
        /** The raw JobNimbus job payload to send to the API, including standard and custom fields. */
        data: Record<string, unknown>;
      };
      output: {
        /** The raw JobNimbus job record returned by the API. */
        job: Record<string, unknown>;
      };
    };
  }
}
