import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List appointments or slots for one SuperSaaS schedule in a time range. */
    "super_saas.list_appointments": {
      input: {
        /**
         * The SuperSaaS schedule ID.
         * @minimum 1
         */
        schedule_id: number;
        /**
         * A SuperSaaS date or timestamp in YYYY-MM-DD or YYYY-MM-DD HH:MM:SS format.
         * @minLength 1
         */
        from?: string;
        /**
         * A SuperSaaS date or timestamp in YYYY-MM-DD or YYYY-MM-DD HH:MM:SS format.
         * @minLength 1
         */
        to?: string;
        /** Whether SuperSaaS should use the current local day as the range. */
        today?: boolean;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The result offset used for pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * A SuperSaaS user name, user ID, or foreign key used to filter bookings.
         * @minLength 1
         */
        user?: string;
        /** Whether to include capacity schedule slot information. */
        slot?: boolean;
      };
      output: {
        /** SuperSaaS bookings in the requested range. */
        bookings: Array<Record<string, unknown>>;
        /** SuperSaaS slots in the requested range. */
        slots: Array<Record<string, unknown>>;
        /** The raw SuperSaaS appointment range response. */
        raw: Record<string, unknown>;
      };
    };
    /** List available SuperSaaS fields for a schedule or for the user object. */
    "super_saas.list_field_names": {
      input: {
        /**
         * The SuperSaaS schedule ID.
         * @minimum 1
         */
        schedule_id?: number;
      };
      output: {
        /** The raw SuperSaaS field list response. */
        fields: Record<string, unknown>;
      };
    };
    /** List groups in the connected SuperSaaS account. */
    "super_saas.list_groups": {
      input: Record<string, never>;
      output: {
        /** SuperSaaS group tuples. */
        groups: Array<Array<unknown>>;
      };
    };
    /** List recently changed bookings for one SuperSaaS schedule. */
    "super_saas.list_recent_changes": {
      input: {
        /**
         * The SuperSaaS schedule ID.
         * @minimum 1
         */
        schedule_id: number;
        /**
         * A SuperSaaS date or timestamp in YYYY-MM-DD or YYYY-MM-DD HH:MM:SS format.
         * @minLength 1
         */
        from?: string;
        /**
         * A SuperSaaS date or timestamp in YYYY-MM-DD or YYYY-MM-DD HH:MM:SS format.
         * @minLength 1
         */
        to?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The result offset used for pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * A SuperSaaS user name, user ID, or foreign key used to filter bookings.
         * @minLength 1
         */
        user?: string;
        /** Whether to include capacity schedule slot information. */
        slot?: boolean;
      };
      output: {
        /** Changed SuperSaaS bookings. */
        bookings: Array<Record<string, unknown>>;
        /** Changed SuperSaaS slots with nested bookings. */
        slots: Array<Record<string, unknown>>;
        /** The raw SuperSaaS recent changes response. */
        raw: Record<string, unknown>;
      };
    };
    /** List resources or services for one SuperSaaS schedule. */
    "super_saas.list_resources": {
      input: {
        /**
         * The SuperSaaS schedule ID.
         * @minimum 1
         */
        schedule_id: number;
      };
      output: {
        /** SuperSaaS resource or service tuples. */
        resources: Array<Array<unknown>>;
      };
    };
    /** List schedules in the connected SuperSaaS account. */
    "super_saas.list_schedules": {
      input: Record<string, never>;
      output: {
        /** SuperSaaS schedule tuples. */
        schedules: Array<Array<unknown>>;
      };
    };
    /** List SuperForms in the connected SuperSaaS account. */
    "super_saas.list_super_forms": {
      input: Record<string, never>;
      output: {
        /** SuperSaaS SuperForm tuples. */
        superForms: Array<Array<unknown>>;
      };
    };
  }
}
