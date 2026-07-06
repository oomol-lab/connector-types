import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add or update a contact inside an ActiveTrail group. */
    "active_trail.add_group_member": {
      input: {
        /**
         * The ActiveTrail group ID.
         * @minimum 1
         */
        group_id: number;
        /** The subscribe IP address recorded for the contact. */
        subscribe_ip?: string;
        /** The ActiveTrail contact status value. */
        status?: "None" | "Subscribed" | "Unsubscribed" | "Pending";
        /** The ActiveTrail contact status value. */
        sms_status?: "None" | "Subscribed" | "Unsubscribed" | "Pending";
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /** The contact SMS value. */
        sms?: string;
        /** The contact first name. */
        first_name?: string;
        /** The contact last name. */
        last_name?: string;
        /**
         * The contact anniversary timestamp.
         * @minLength 1
         */
        anniversary?: string;
        /**
         * The contact birthday timestamp.
         * @minLength 1
         */
        birthday?: string;
        /** The contact city. */
        city?: string;
        /** The contact fax number. */
        fax?: string;
        /** The contact primary phone number. */
        phone1?: string;
        /** The contact secondary phone number. */
        phone2?: string;
        /** The contact street address. */
        street?: string;
        /** The contact ZIP or postal code. */
        zip_code?: string;
        [key: string]: unknown;
      };
      output: {
        /** A normalized ActiveTrail contact record. */
        contact: {
          /** The ActiveTrail contact ID. */
          id: number;
          /** The ActiveTrail contact state when returned. */
          state: string | null;
          /** Whether the contact is opted in when returned. */
          is_optined: boolean | null;
          /** The contact email address when returned. */
          email: string | null;
          /** The contact SMS value when returned. */
          sms: string | null;
          /** The contact first name when returned. */
          first_name: string | null;
          /** The contact last name when returned. */
          last_name: string | null;
          /** The raw object returned by ActiveTrail. */
          data: Record<string, unknown>;
        };
      };
    };
    /** Create an ActiveTrail contact. */
    "active_trail.create_contact": {
      input: {
        /** The subscribe IP address recorded for the contact. */
        subscribe_ip?: string;
        /** The ActiveTrail contact status value. */
        status?: "None" | "Subscribed" | "Unsubscribed" | "Pending";
        /** The ActiveTrail contact status value. */
        sms_status?: "None" | "Subscribed" | "Unsubscribed" | "Pending";
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /** The contact SMS value. */
        sms?: string;
        /** The contact first name. */
        first_name?: string;
        /** The contact last name. */
        last_name?: string;
        /**
         * The contact anniversary timestamp.
         * @minLength 1
         */
        anniversary?: string;
        /**
         * The contact birthday timestamp.
         * @minLength 1
         */
        birthday?: string;
        /** The contact city. */
        city?: string;
        /** The contact fax number. */
        fax?: string;
        /** The contact primary phone number. */
        phone1?: string;
        /** The contact secondary phone number. */
        phone2?: string;
        /** The contact street address. */
        street?: string;
        /** The contact ZIP or postal code. */
        zip_code?: string;
        [key: string]: unknown;
      };
      output: {
        /** A normalized ActiveTrail contact record. */
        contact: {
          /** The ActiveTrail contact ID. */
          id: number;
          /** The ActiveTrail contact state when returned. */
          state: string | null;
          /** Whether the contact is opted in when returned. */
          is_optined: boolean | null;
          /** The contact email address when returned. */
          email: string | null;
          /** The contact SMS value when returned. */
          sms: string | null;
          /** The contact first name when returned. */
          first_name: string | null;
          /** The contact last name when returned. */
          last_name: string | null;
          /** The raw object returned by ActiveTrail. */
          data: Record<string, unknown>;
        };
      };
    };
    /** Create an ActiveTrail group. */
    "active_trail.create_group": {
      input: {
        /**
         * The group name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A normalized ActiveTrail group record. */
        group: {
          /** The ActiveTrail group ID. */
          id: number;
          /** The ActiveTrail group name. */
          name: string;
          /** The number of active contacts in the group when returned. */
          active_counter: number | null;
          /** The total number of contacts in the group when returned. */
          counter: number | null;
          /** The group creation timestamp when returned. */
          created: string | null;
          /** The last dynamic-group generation timestamp when returned. */
          last_generated: string | null;
          /** The raw object returned by ActiveTrail. */
          data: Record<string, unknown>;
        };
      };
    };
    /** Delete one ActiveTrail contact by ID. */
    "active_trail.delete_contact": {
      input: {
        /**
         * The ActiveTrail contact ID.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** Whether the delete request was accepted by ActiveTrail. */
        deleted: boolean;
        /** The raw delete response returned by ActiveTrail, if any. */
        data: unknown;
      };
    };
    /** Delete one ActiveTrail group by ID. */
    "active_trail.delete_group": {
      input: {
        /**
         * The ActiveTrail group ID.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** Whether the delete request was accepted by ActiveTrail. */
        deleted: boolean;
        /** The raw delete response returned by ActiveTrail, if any. */
        data: unknown;
      };
    };
    /** Fetch the current ActiveTrail email, SMS, and coupon account balances. */
    "active_trail.get_account_balance": {
      input: Record<string, never>;
      output: {
        /** One ActiveTrail balance bucket. */
        email: {
          /** The remaining credits in this balance bucket. */
          credits?: number;
          /** The balance percentage reported by ActiveTrail. */
          percent?: number;
          /** The ActiveTrail alert type for this balance bucket. */
          alert_type?: string;
          [key: string]: unknown;
        };
        /** One ActiveTrail balance bucket. */
        sms: {
          /** The remaining credits in this balance bucket. */
          credits?: number;
          /** The balance percentage reported by ActiveTrail. */
          percent?: number;
          /** The ActiveTrail alert type for this balance bucket. */
          alert_type?: string;
          [key: string]: unknown;
        };
        /** The coupon balance information returned by ActiveTrail. */
        coupons: Record<string, unknown>;
        /** The raw object returned by ActiveTrail. */
        data: Record<string, unknown>;
      };
    };
    /** Fetch one ActiveTrail contact by ID. */
    "active_trail.get_contact": {
      input: {
        /**
         * The ActiveTrail contact ID.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** A normalized ActiveTrail contact record. */
        contact: {
          /** The ActiveTrail contact ID. */
          id: number;
          /** The ActiveTrail contact state when returned. */
          state: string | null;
          /** Whether the contact is opted in when returned. */
          is_optined: boolean | null;
          /** The contact email address when returned. */
          email: string | null;
          /** The contact SMS value when returned. */
          sms: string | null;
          /** The contact first name when returned. */
          first_name: string | null;
          /** The contact last name when returned. */
          last_name: string | null;
          /** The raw object returned by ActiveTrail. */
          data: Record<string, unknown>;
        };
      };
    };
    /** Fetch one ActiveTrail group by ID. */
    "active_trail.get_group": {
      input: {
        /**
         * The ActiveTrail group ID.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** A normalized ActiveTrail group record. */
        group: {
          /** The ActiveTrail group ID. */
          id: number;
          /** The ActiveTrail group name. */
          name: string;
          /** The number of active contacts in the group when returned. */
          active_counter: number | null;
          /** The total number of contacts in the group when returned. */
          counter: number | null;
          /** The group creation timestamp when returned. */
          created: string | null;
          /** The last dynamic-group generation timestamp when returned. */
          last_generated: string | null;
          /** The raw object returned by ActiveTrail. */
          data: Record<string, unknown>;
        };
      };
    };
    /** List ActiveTrail contacts with optional state, search, date, and pagination filters. */
    "active_trail.list_contacts": {
      input: {
        /** The ActiveTrail CustomerStates filter used by contact list endpoints. */
        customer_state?: "ALL" | "ACTIVE" | "INACTIVE" | "CUSTOMER_REQUEST" | "BOUNCED" | "SPAM_COMPLIENT" | "QUARANTINED";
        /** Text used to filter ActiveTrail contacts. */
        search_term?: string;
        /**
         * Only include contacts changed on or after this date.
         * @minLength 1
         */
        from_date?: string;
        /**
         * Only include contacts changed on or before this date.
         * @minLength 1
         */
        to_date?: string;
        /**
         * The zero-based page number requested from ActiveTrail.
         * @minimum 0
         */
        page?: number;
        /**
         * The maximum number of records to request from ActiveTrail.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The contacts returned by ActiveTrail. */
        contacts: Array<{
          /** The ActiveTrail contact ID. */
          id: number;
          /** The ActiveTrail contact state when returned. */
          state: string | null;
          /** Whether the contact is opted in when returned. */
          is_optined: boolean | null;
          /** The contact email address when returned. */
          email: string | null;
          /** The contact SMS value when returned. */
          sms: string | null;
          /** The contact first name when returned. */
          first_name: string | null;
          /** The contact last name when returned. */
          last_name: string | null;
          /** The raw object returned by ActiveTrail. */
          data: Record<string, unknown>;
        }>;
      };
    };
    /** List members in an ActiveTrail group with optional filters. */
    "active_trail.list_group_members": {
      input: {
        /**
         * The ActiveTrail group ID.
         * @minimum 1
         */
        group_id: number;
        /** The ActiveTrail CustomerStates filter used by contact list endpoints. */
        customer_state?: "ALL" | "ACTIVE" | "INACTIVE" | "CUSTOMER_REQUEST" | "BOUNCED" | "SPAM_COMPLIENT" | "QUARANTINED";
        /** Text used to filter group members. */
        search_term?: string;
        /**
         * Only include members changed on or after this date.
         * @minLength 1
         */
        from_date?: string;
        /**
         * Only include members changed on or before this date.
         * @minLength 1
         */
        to_date?: string;
        /**
         * The zero-based page number requested from ActiveTrail.
         * @minimum 0
         */
        page?: number;
        /**
         * The maximum number of records to request from ActiveTrail.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The total count returned by ActiveTrail when present. */
        count: number | null;
        /** The group members returned by ActiveTrail. */
        contacts: Array<{
          /** The ActiveTrail contact ID. */
          id: number;
          /** The ActiveTrail contact state when returned. */
          state: string | null;
          /** Whether the contact is opted in when returned. */
          is_optined: boolean | null;
          /** The contact email address when returned. */
          email: string | null;
          /** The contact SMS value when returned. */
          sms: string | null;
          /** The contact first name when returned. */
          first_name: string | null;
          /** The contact last name when returned. */
          last_name: string | null;
          /** The raw object returned by ActiveTrail. */
          data: Record<string, unknown>;
        }>;
        /** The raw object returned by ActiveTrail. */
        data: Record<string, unknown>;
      };
    };
    /** List ActiveTrail groups with optional search and pagination filters. */
    "active_trail.list_groups": {
      input: {
        /** Text used to filter ActiveTrail groups. */
        search_term?: string;
        /**
         * The zero-based page number requested from ActiveTrail.
         * @minimum 0
         */
        page?: number;
        /**
         * The maximum number of records to request from ActiveTrail.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The groups returned by ActiveTrail. */
        groups: Array<{
          /** The ActiveTrail group ID. */
          id: number;
          /** The ActiveTrail group name. */
          name: string;
          /** The number of active contacts in the group when returned. */
          active_counter: number | null;
          /** The total number of contacts in the group when returned. */
          counter: number | null;
          /** The group creation timestamp when returned. */
          created: string | null;
          /** The last dynamic-group generation timestamp when returned. */
          last_generated: string | null;
          /** The raw object returned by ActiveTrail. */
          data: Record<string, unknown>;
        }>;
      };
    };
    /** Remove one contact from an ActiveTrail group. */
    "active_trail.remove_group_member": {
      input: {
        /**
         * The ActiveTrail group ID.
         * @minimum 1
         */
        group_id: number;
        /**
         * The ActiveTrail contact ID to remove from the group.
         * @minimum 1
         */
        member_id: number;
      };
      output: {
        /** Whether the delete request was accepted by ActiveTrail. */
        deleted: boolean;
        /** The raw delete response returned by ActiveTrail, if any. */
        data: unknown;
      };
    };
    /** Update an ActiveTrail contact. */
    "active_trail.update_contact": {
      input: {
        /**
         * The ActiveTrail contact ID.
         * @minimum 1
         */
        id: number;
        /** The subscribe IP address recorded for the contact. */
        subscribe_ip?: string;
        /** The ActiveTrail contact status value. */
        status?: "None" | "Subscribed" | "Unsubscribed" | "Pending";
        /** The ActiveTrail contact status value. */
        sms_status?: "None" | "Subscribed" | "Unsubscribed" | "Pending";
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /** The contact SMS value. */
        sms?: string;
        /** The contact first name. */
        first_name?: string;
        /** The contact last name. */
        last_name?: string;
        /**
         * The contact anniversary timestamp.
         * @minLength 1
         */
        anniversary?: string;
        /**
         * The contact birthday timestamp.
         * @minLength 1
         */
        birthday?: string;
        /** The contact city. */
        city?: string;
        /** The contact fax number. */
        fax?: string;
        /** The contact primary phone number. */
        phone1?: string;
        /** The contact secondary phone number. */
        phone2?: string;
        /** The contact street address. */
        street?: string;
        /** The contact ZIP or postal code. */
        zip_code?: string;
        [key: string]: unknown;
      };
      output: {
        /** A normalized ActiveTrail contact record. */
        contact: {
          /** The ActiveTrail contact ID. */
          id: number;
          /** The ActiveTrail contact state when returned. */
          state: string | null;
          /** Whether the contact is opted in when returned. */
          is_optined: boolean | null;
          /** The contact email address when returned. */
          email: string | null;
          /** The contact SMS value when returned. */
          sms: string | null;
          /** The contact first name when returned. */
          first_name: string | null;
          /** The contact last name when returned. */
          last_name: string | null;
          /** The raw object returned by ActiveTrail. */
          data: Record<string, unknown>;
        };
      };
    };
    /** Update an ActiveTrail group name. */
    "active_trail.update_group": {
      input: {
        /**
         * The ActiveTrail group ID.
         * @minimum 1
         */
        id: number;
        /**
         * The updated group name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A normalized ActiveTrail group record. */
        group: {
          /** The ActiveTrail group ID. */
          id: number;
          /** The ActiveTrail group name. */
          name: string;
          /** The number of active contacts in the group when returned. */
          active_counter: number | null;
          /** The total number of contacts in the group when returned. */
          counter: number | null;
          /** The group creation timestamp when returned. */
          created: string | null;
          /** The last dynamic-group generation timestamp when returned. */
          last_generated: string | null;
          /** The raw object returned by ActiveTrail. */
          data: Record<string, unknown>;
        };
      };
    };
  }
}
