import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a contact in the current DialMyCalls account. */
    "dialmycalls.create_contact": {
      input: {
        /** The contact's first name. */
        firstname?: string;
        /** The contact's last name. */
        lastname?: string;
        /**
         * The contact's phone number.
         * @minLength 1
         */
        phone: string;
        /** The contact's phone extension. */
        extension?: string;
        /** The contact's email address. */
        email?: string;
        /** Additional caller-defined contact data. */
        extra1?: string;
        /** The DialMyCalls group IDs that the contact should belong to. */
        groups?: Array<string>;
      };
      output: {
        /** A contact returned by DialMyCalls. */
        results: {
          /**
           * The unique DialMyCalls contact identifier.
           * @format uuid
           */
          id?: string;
          /** The contact's first name. */
          firstname?: string;
          /** The contact's last name. */
          lastname?: string;
          /** Miscellaneous contact information returned by DialMyCalls. */
          miscellaneous?: string;
          /** The contact's phone number. */
          phone?: string;
          /** The contact's phone extension. */
          extension?: string;
          /** The contact's email address. */
          email?: string;
          /** Additional caller-defined contact data. */
          extra1?: string;
          /** The groups assigned to this contact. */
          groups?: Array<{
            /**
             * The unique DialMyCalls group identifier.
             * @format uuid
             */
            id?: string;
            [key: string]: unknown;
          }>;
          /** The timestamp when the contact was created. */
          created_at?: string;
          /** The timestamp when the contact was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** Metadata returned with every DialMyCalls API response. */
        meta: {
          /** Whether the upstream request succeeded. */
          result: "success" | "failure";
          /** The HTTP status recorded by DialMyCalls. */
          status: number;
          /**
           * The unique DialMyCalls request identifier.
           * @format uuid
           */
          request_id: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a contact group in the current DialMyCalls account. */
    "dialmycalls.create_group": {
      input: {
        /**
         * The contact group name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A contact group returned by DialMyCalls. */
        results: {
          /**
           * The unique DialMyCalls group identifier.
           * @format uuid
           */
          id?: string;
          /** The contact group name. */
          name?: string;
          /** The number of contacts assigned to the group. */
          contacts_count?: number;
          /** The timestamp when the group was created. */
          created_at?: string;
          /** The timestamp when the group was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** Metadata returned with every DialMyCalls API response. */
        meta: {
          /** Whether the upstream request succeeded. */
          result: "success" | "failure";
          /** The HTTP status recorded by DialMyCalls. */
          status: number;
          /**
           * The unique DialMyCalls request identifier.
           * @format uuid
           */
          request_id: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one DialMyCalls contact by identifier. */
    "dialmycalls.delete_contact": {
      input: {
        /**
         * The unique DialMyCalls contact identifier.
         * @format uuid
         */
        contact_id: string;
      };
      output: {
        /** The deleted DialMyCalls contact reference. */
        results: {
          /**
           * The unique identifier of the deleted DialMyCalls contact.
           * @format uuid
           */
          id: string;
          [key: string]: unknown;
        };
        /** Metadata returned with every DialMyCalls API response. */
        meta: {
          /** Whether the upstream request succeeded. */
          result: "success" | "failure";
          /** The HTTP status recorded by DialMyCalls. */
          status: number;
          /**
           * The unique DialMyCalls request identifier.
           * @format uuid
           */
          request_id: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one DialMyCalls contact group by identifier. */
    "dialmycalls.delete_group": {
      input: {
        /**
         * The unique DialMyCalls group identifier.
         * @format uuid
         */
        group_id: string;
      };
      output: {
        /** The deleted DialMyCalls group reference. */
        results: {
          /**
           * The unique identifier of the deleted DialMyCalls group.
           * @format uuid
           */
          id: string;
          [key: string]: unknown;
        };
        /** Metadata returned with every DialMyCalls API response. */
        meta: {
          /** Whether the upstream request succeeded. */
          result: "success" | "failure";
          /** The HTTP status recorded by DialMyCalls. */
          status: number;
          /**
           * The unique DialMyCalls request identifier.
           * @format uuid
           */
          request_id: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the current DialMyCalls account details and available credit balance. */
    "dialmycalls.get_account": {
      input: Record<string, never>;
      output: {
        /** The current DialMyCalls account details. */
        results: {
          /** The number of credits available on the account. */
          credits_available?: number;
          /** The timestamp when the DialMyCalls account was created. */
          created_at?: string;
          [key: string]: unknown;
        };
        /** Metadata returned with every DialMyCalls API response. */
        meta: {
          /** Whether the upstream request succeeded. */
          result: "success" | "failure";
          /** The HTTP status recorded by DialMyCalls. */
          status: number;
          /**
           * The unique DialMyCalls request identifier.
           * @format uuid
           */
          request_id: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one DialMyCalls contact by identifier. */
    "dialmycalls.get_contact": {
      input: {
        /**
         * The unique DialMyCalls contact identifier.
         * @format uuid
         */
        contact_id: string;
      };
      output: {
        /** A contact returned by DialMyCalls. */
        results: {
          /**
           * The unique DialMyCalls contact identifier.
           * @format uuid
           */
          id?: string;
          /** The contact's first name. */
          firstname?: string;
          /** The contact's last name. */
          lastname?: string;
          /** Miscellaneous contact information returned by DialMyCalls. */
          miscellaneous?: string;
          /** The contact's phone number. */
          phone?: string;
          /** The contact's phone extension. */
          extension?: string;
          /** The contact's email address. */
          email?: string;
          /** Additional caller-defined contact data. */
          extra1?: string;
          /** The groups assigned to this contact. */
          groups?: Array<{
            /**
             * The unique DialMyCalls group identifier.
             * @format uuid
             */
            id?: string;
            [key: string]: unknown;
          }>;
          /** The timestamp when the contact was created. */
          created_at?: string;
          /** The timestamp when the contact was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** Metadata returned with every DialMyCalls API response. */
        meta: {
          /** Whether the upstream request succeeded. */
          result: "success" | "failure";
          /** The HTTP status recorded by DialMyCalls. */
          status: number;
          /**
           * The unique DialMyCalls request identifier.
           * @format uuid
           */
          request_id: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one DialMyCalls contact group by identifier. */
    "dialmycalls.get_group": {
      input: {
        /**
         * The unique DialMyCalls group identifier.
         * @format uuid
         */
        group_id: string;
      };
      output: {
        /** A contact group returned by DialMyCalls. */
        results: {
          /**
           * The unique DialMyCalls group identifier.
           * @format uuid
           */
          id?: string;
          /** The contact group name. */
          name?: string;
          /** The number of contacts assigned to the group. */
          contacts_count?: number;
          /** The timestamp when the group was created. */
          created_at?: string;
          /** The timestamp when the group was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** Metadata returned with every DialMyCalls API response. */
        meta: {
          /** Whether the upstream request succeeded. */
          result: "success" | "failure";
          /** The HTTP status recorded by DialMyCalls. */
          status: number;
          /**
           * The unique DialMyCalls request identifier.
           * @format uuid
           */
          request_id: string;
          [key: string]: unknown;
        };
      };
    };
    /** List DialMyCalls contacts with a bounded records range. */
    "dialmycalls.list_contacts": {
      input: {
        /**
         * The one-based index of the first record to return.
         * @minimum 1
         * @default 1
         */
        range_start: number;
        /**
         * The one-based index of the last record to return.
         * @minimum 1
         * @default 100
         */
        range_end: number;
      };
      output: {
        /** The contacts returned by DialMyCalls. */
        results: Array<{
          /**
           * The unique DialMyCalls contact identifier.
           * @format uuid
           */
          id?: string;
          /** The contact's first name. */
          firstname?: string;
          /** The contact's last name. */
          lastname?: string;
          /** Miscellaneous contact information returned by DialMyCalls. */
          miscellaneous?: string;
          /** The contact's phone number. */
          phone?: string;
          /** The contact's phone extension. */
          extension?: string;
          /** The contact's email address. */
          email?: string;
          /** Additional caller-defined contact data. */
          extra1?: string;
          /** The groups assigned to this contact. */
          groups?: Array<{
            /**
             * The unique DialMyCalls group identifier.
             * @format uuid
             */
            id?: string;
            [key: string]: unknown;
          }>;
          /** The timestamp when the contact was created. */
          created_at?: string;
          /** The timestamp when the contact was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Metadata returned with every DialMyCalls API response. */
        meta: {
          /** Whether the upstream request succeeded. */
          result: "success" | "failure";
          /** The HTTP status recorded by DialMyCalls. */
          status: number;
          /**
           * The unique DialMyCalls request identifier.
           * @format uuid
           */
          request_id: string;
          [key: string]: unknown;
        };
      };
    };
    /** List contacts assigned to one DialMyCalls group. */
    "dialmycalls.list_group_contacts": {
      input: {
        /**
         * The unique DialMyCalls group identifier.
         * @format uuid
         */
        group_id: string;
        /**
         * The one-based index of the first record to return.
         * @minimum 1
         * @default 1
         */
        range_start: number;
        /**
         * The one-based index of the last record to return.
         * @minimum 1
         * @default 100
         */
        range_end: number;
      };
      output: {
        /** The contacts returned by DialMyCalls. */
        results: Array<{
          /**
           * The unique DialMyCalls contact identifier.
           * @format uuid
           */
          id?: string;
          /** The contact's first name. */
          firstname?: string;
          /** The contact's last name. */
          lastname?: string;
          /** Miscellaneous contact information returned by DialMyCalls. */
          miscellaneous?: string;
          /** The contact's phone number. */
          phone?: string;
          /** The contact's phone extension. */
          extension?: string;
          /** The contact's email address. */
          email?: string;
          /** Additional caller-defined contact data. */
          extra1?: string;
          /** The groups assigned to this contact. */
          groups?: Array<{
            /**
             * The unique DialMyCalls group identifier.
             * @format uuid
             */
            id?: string;
            [key: string]: unknown;
          }>;
          /** The timestamp when the contact was created. */
          created_at?: string;
          /** The timestamp when the contact was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Metadata returned with every DialMyCalls API response. */
        meta: {
          /** Whether the upstream request succeeded. */
          result: "success" | "failure";
          /** The HTTP status recorded by DialMyCalls. */
          status: number;
          /**
           * The unique DialMyCalls request identifier.
           * @format uuid
           */
          request_id: string;
          [key: string]: unknown;
        };
      };
    };
    /** List DialMyCalls contact groups with a bounded records range. */
    "dialmycalls.list_groups": {
      input: {
        /**
         * The one-based index of the first record to return.
         * @minimum 1
         * @default 1
         */
        range_start: number;
        /**
         * The one-based index of the last record to return.
         * @minimum 1
         * @default 100
         */
        range_end: number;
      };
      output: {
        /** The contact groups returned by DialMyCalls. */
        results: Array<{
          /**
           * The unique DialMyCalls group identifier.
           * @format uuid
           */
          id?: string;
          /** The contact group name. */
          name?: string;
          /** The number of contacts assigned to the group. */
          contacts_count?: number;
          /** The timestamp when the group was created. */
          created_at?: string;
          /** The timestamp when the group was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Metadata returned with every DialMyCalls API response. */
        meta: {
          /** Whether the upstream request succeeded. */
          result: "success" | "failure";
          /** The HTTP status recorded by DialMyCalls. */
          status: number;
          /**
           * The unique DialMyCalls request identifier.
           * @format uuid
           */
          request_id: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update one DialMyCalls contact by identifier. */
    "dialmycalls.update_contact": {
      input: {
        /**
         * The unique DialMyCalls contact identifier.
         * @format uuid
         */
        contact_id: string;
        /** The contact's first name. */
        firstname?: string;
        /** The contact's last name. */
        lastname?: string;
        /**
         * The contact's phone number.
         * @minLength 1
         */
        phone: string;
        /** The contact's phone extension. */
        extension?: string;
        /** The contact's email address. */
        email?: string;
        /** Additional caller-defined contact data. */
        extra1?: string;
        /** The DialMyCalls group IDs that the contact should belong to. */
        groups?: Array<string>;
      };
      output: {
        /** A contact returned by DialMyCalls. */
        results: {
          /**
           * The unique DialMyCalls contact identifier.
           * @format uuid
           */
          id?: string;
          /** The contact's first name. */
          firstname?: string;
          /** The contact's last name. */
          lastname?: string;
          /** Miscellaneous contact information returned by DialMyCalls. */
          miscellaneous?: string;
          /** The contact's phone number. */
          phone?: string;
          /** The contact's phone extension. */
          extension?: string;
          /** The contact's email address. */
          email?: string;
          /** Additional caller-defined contact data. */
          extra1?: string;
          /** The groups assigned to this contact. */
          groups?: Array<{
            /**
             * The unique DialMyCalls group identifier.
             * @format uuid
             */
            id?: string;
            [key: string]: unknown;
          }>;
          /** The timestamp when the contact was created. */
          created_at?: string;
          /** The timestamp when the contact was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** Metadata returned with every DialMyCalls API response. */
        meta: {
          /** Whether the upstream request succeeded. */
          result: "success" | "failure";
          /** The HTTP status recorded by DialMyCalls. */
          status: number;
          /**
           * The unique DialMyCalls request identifier.
           * @format uuid
           */
          request_id: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update one DialMyCalls contact group by identifier. */
    "dialmycalls.update_group": {
      input: {
        /**
         * The unique DialMyCalls group identifier.
         * @format uuid
         */
        group_id: string;
        /**
         * The updated contact group name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A contact group returned by DialMyCalls. */
        results: {
          /**
           * The unique DialMyCalls group identifier.
           * @format uuid
           */
          id?: string;
          /** The contact group name. */
          name?: string;
          /** The number of contacts assigned to the group. */
          contacts_count?: number;
          /** The timestamp when the group was created. */
          created_at?: string;
          /** The timestamp when the group was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** Metadata returned with every DialMyCalls API response. */
        meta: {
          /** Whether the upstream request succeeded. */
          result: "success" | "failure";
          /** The HTTP status recorded by DialMyCalls. */
          status: number;
          /**
           * The unique DialMyCalls request identifier.
           * @format uuid
           */
          request_id: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
