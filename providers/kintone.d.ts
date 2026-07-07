import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the departments assigned to a Kintone user by user code. */
    "kintone.get_user_departments": {
      input: {
        /**
         * A Kintone code value.
         * @minLength 1
         */
        code: string;
      };
      output: {
        /** The department and title assignments returned by Kintone. */
        organizationTitles: Array<{
          /** A normalized Kintone department. */
          organization: {
            /** The Kintone department ID. */
            id: string | null;
            /** The Kintone department code. */
            code: string | null;
            /** The Kintone department name. */
            name: string | null;
            /** The Kintone department description. */
            description: string | null;
            /** The raw object returned by Kintone. */
            raw: Record<string, unknown>;
          };
          /** A normalized Kintone title. */
          title: {
            /** The Kintone title ID. */
            id: string | null;
            /** The Kintone title code. */
            code: string | null;
            /** The Kintone title name. */
            name: string | null;
            /** The Kintone title description. */
            description: string | null;
            /** The raw object returned by Kintone. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw object returned by Kintone. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Get the groups assigned to a Kintone user by user code. */
    "kintone.get_user_groups": {
      input: {
        /**
         * A Kintone code value.
         * @minLength 1
         */
        code: string;
      };
      output: {
        /** The groups assigned to the Kintone user. */
        groups: Array<{
          /** The Kintone group ID. */
          id: string | null;
          /** The Kintone group code. */
          code: string | null;
          /** The Kintone group name. */
          name: string | null;
          /** The Kintone group description when returned. */
          description: string | null;
          /** The raw object returned by Kintone. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Get services assigned to Kintone users with optional user code filters. */
    "kintone.get_user_services": {
      input: {
        /**
         * A list of Kintone code values. Up to 100 codes can be specified.
         * @minItems 1
         * @maxItems 100
         */
        codes?: Array<string>;
        /**
         * The result offset. Kintone defaults this to 0.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return. Kintone defaults this to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
      };
      output: {
        /** The Kintone users and their assigned services. */
        users: Array<{
          /** The Kintone user code. */
          code: string | null;
          /** The service codes assigned to the Kintone user. */
          services: Array<string>;
          /** The raw object returned by Kintone. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Kintone departments with optional ID, code, and pagination filters. */
    "kintone.list_departments": {
      input: {
        /**
         * A list of Kintone numeric IDs. Up to 100 IDs can be specified.
         * @minItems 1
         * @maxItems 100
         */
        ids?: Array<number>;
        /**
         * A list of Kintone code values. Up to 100 codes can be specified.
         * @minItems 1
         * @maxItems 100
         */
        codes?: Array<string>;
        /**
         * The result offset. Kintone defaults this to 0.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return. Kintone defaults this to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
      };
      output: {
        /** The departments returned by Kintone. */
        departments: Array<{
          /** The Kintone department ID. */
          id: string | null;
          /** The Kintone department code. */
          code: string | null;
          /** The Kintone department name. */
          name: string | null;
          /** The Kintone department description. */
          description: string | null;
          /** The raw object returned by Kintone. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Kintone groups with optional ID, code, and pagination filters. */
    "kintone.list_groups": {
      input: {
        /**
         * A list of Kintone numeric IDs. Up to 100 IDs can be specified.
         * @minItems 1
         * @maxItems 100
         */
        ids?: Array<number>;
        /**
         * A list of Kintone code values. Up to 100 codes can be specified.
         * @minItems 1
         * @maxItems 100
         */
        codes?: Array<string>;
        /**
         * The result offset. Kintone defaults this to 0.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return. Kintone defaults this to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
      };
      output: {
        /** The groups returned by Kintone. */
        groups: Array<{
          /** The Kintone group ID. */
          id: string | null;
          /** The Kintone group code. */
          code: string | null;
          /** The Kintone group name. */
          name: string | null;
          /** The Kintone group description when returned. */
          description: string | null;
          /** The raw object returned by Kintone. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Kintone users with optional ID, code, and pagination filters. */
    "kintone.list_users": {
      input: {
        /**
         * A list of Kintone numeric IDs. Up to 100 IDs can be specified.
         * @minItems 1
         * @maxItems 100
         */
        ids?: Array<number>;
        /**
         * A list of Kintone code values. Up to 100 codes can be specified.
         * @minItems 1
         * @maxItems 100
         */
        codes?: Array<string>;
        /**
         * The result offset. Kintone defaults this to 0.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return. Kintone defaults this to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
      };
      output: {
        /** The users returned by Kintone. */
        users: Array<{
          /** The Kintone user ID. */
          id: string | null;
          /** The Kintone user code. */
          code: string | null;
          /** The Kintone user display name. */
          name: string | null;
          /** The Kintone user email address. */
          email: string | null;
          /** Whether the Kintone user status is active. */
          valid: boolean | null;
          /** The raw object returned by Kintone. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
