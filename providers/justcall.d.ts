import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a contact in JustCall for the owner, selected agents, or the whole team. */
    "justcall.create_contact": {
      input: {
        /**
         * The contact's first name.
         * @minLength 1
         */
        firstName: string;
        /**
         * The contact's last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * The contact's primary phone number.
         * @minLength 1
         */
        contactNumber: string;
        /** Additional phone numbers for the contact. */
        otherNumbers?: Array<{
          /**
           * The label for the additional phone number.
           * @minLength 1
           */
          label: string;
          /**
           * The additional phone number.
           * @minLength 1
           */
          number: string;
        }>;
        /**
         * The extension assigned to the contact.
         * @minimum 0
         */
        extension?: number;
        /** The contact's email address. */
        email?: string;
        /** The company associated with the contact. */
        company?: string;
        /** The contact's postal address. */
        address?: string;
        /** Additional information to store with the contact. */
        notes?: string;
        /** Whether to create the contact for all agents. */
        acrossTeam?: boolean;
        /**
         * The numeric identifier assigned by JustCall.
         * @minimum 1
         */
        agentId?: number;
        /** Agent IDs for whom the contact should be created. */
        agentIds?: Array<string>;
      };
      output: {
        /** The raw object returned by JustCall. */
        record: Record<string, unknown>;
        /** The raw object returned by JustCall. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a JustCall contact selected by ID or primary phone number. */
    "justcall.delete_contact": {
      input: {
        /**
         * The numeric identifier assigned by JustCall.
         * @minimum 1
         */
        id?: number;
        /**
         * The primary phone number used to find the contact.
         * @minLength 1
         */
        contactNumber?: string;
        /** Whether contacts selected by phone number should be deleted for all agents. */
        acrossTeam?: boolean;
      };
      output: {
        /** The raw object returned by JustCall. */
        record: Record<string, unknown>;
        /** The raw object returned by JustCall. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one JustCall contact by its numeric ID. */
    "justcall.get_contact": {
      input: {
        /**
         * The numeric identifier assigned by JustCall.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** The raw object returned by JustCall. */
        record: Record<string, unknown>;
        /** The raw object returned by JustCall. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one JustCall user by numeric agent ID. */
    "justcall.get_user": {
      input: {
        /**
         * The numeric identifier assigned by JustCall.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** The raw object returned by JustCall. */
        record: Record<string, unknown>;
        /** The raw object returned by JustCall. */
        raw: Record<string, unknown>;
      };
    };
    /** List JustCall contacts with optional agent, phone, name, status, and pagination filters. */
    "justcall.list_contacts": {
      input: {
        /** Whether to include contacts associated with all agents. */
        acrossTeam?: boolean;
        /** Agent IDs whose contacts should be returned. */
        agentIds?: Array<number>;
        /**
         * A phone number used to filter contacts.
         * @minLength 1
         */
        contactNumber?: string;
        /**
         * A first name used to filter contacts.
         * @minLength 1
         */
        firstName?: string;
        /**
         * A last name used to filter contacts.
         * @minLength 1
         */
        lastName?: string;
        /** Suppression statuses used to filter contacts. */
        statuses?: Array<"blacklist" | "dnd" | "dnm">;
        /**
         * The maximum number of contacts to return, up to 500.
         * @minimum 1
         * @maximum 500
         */
        perPage?: number;
        /**
         * The zero-indexed page number to return.
         * @minimum 0
         */
        page?: number;
        /** The order of contacts by numeric ID. */
        order?: "asc" | "desc";
        /**
         * The last contact ID from the previous page, used to avoid duplicate records.
         * @minimum 1
         */
        lastContactIdFetched?: number;
      };
      output: {
        /** The records returned by JustCall. */
        records: Array<Record<string, unknown>>;
        /** Pagination metadata returned by JustCall. */
        pagination: Record<string, unknown>;
        /** The raw object returned by JustCall. */
        raw: Record<string, unknown>;
      };
    };
    /** List users in a JustCall account with availability, group, role, and pagination filters. */
    "justcall.list_users": {
      input: {
        /** Whether to return only agents available during their working hours. */
        available?: boolean;
        /** An email address used to filter users. */
        email?: string;
        /**
         * The numeric identifier assigned by JustCall.
         * @minimum 1
         */
        groupId?: number;
        /** A JustCall role used to filter users. */
        role?: string;
        /**
         * The zero-indexed page number to return.
         * @minimum 0
         */
        page?: number;
        /**
         * The maximum number of users to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** The order of users by agent ID. */
        order?: "asc" | "desc";
      };
      output: {
        /** The records returned by JustCall. */
        records: Array<Record<string, unknown>>;
        /** Pagination metadata returned by JustCall. */
        pagination: Record<string, unknown>;
        /** The raw object returned by JustCall. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a JustCall contact selected by ID or primary phone number. */
    "justcall.update_contact": {
      input: {
        /**
         * The numeric identifier assigned by JustCall.
         * @minimum 1
         */
        id?: number;
        /**
         * The contact's primary phone number.
         * @minLength 1
         */
        contactNumber?: string;
        /**
         * The contact's first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The contact's last name.
         * @minLength 1
         */
        lastName?: string;
        /** Additional phone numbers for the contact. */
        otherNumbers?: Array<{
          /**
           * The label for the additional phone number.
           * @minLength 1
           */
          label: string;
          /**
           * The additional phone number.
           * @minLength 1
           */
          number: string;
        }>;
        /**
         * The extension assigned to the contact.
         * @minimum 0
         */
        extension?: number;
        /** The contact's email address. */
        email?: string;
        /** The company associated with the contact. */
        company?: string;
        /** The contact's postal address. */
        address?: string;
        /** Notes to append to the contact. */
        notes?: Array<{
          /**
           * The note text.
           * @minLength 1
           */
          note: string;
        }>;
        /** Whether a contact selected by phone number should be updated for all agents. */
        acrossTeam?: boolean;
      };
      output: {
        /** The raw object returned by JustCall. */
        record: Record<string, unknown>;
        /** The raw object returned by JustCall. */
        raw: Record<string, unknown>;
      };
    };
    /** Add or remove a JustCall contact from DND, DNM, or blacklist suppression lists. */
    "justcall.update_contact_status": {
      input: {
        /**
         * The numeric identifier assigned by JustCall.
         * @minimum 1
         */
        id?: number;
        /**
         * The primary phone number used to find the contact.
         * @minLength 1
         */
        contactNumber?: string;
        /**
         * Suppression lists to add the contact to.
         * @minItems 1
         */
        addTo?: Array<"blacklist" | "dnd" | "dnm">;
        /**
         * Suppression lists to remove the contact from.
         * @minItems 1
         */
        removeFrom?: Array<"blacklist" | "dnd" | "dnm">;
        /** Whether a contact selected by phone number should be changed for all agents. */
        acrossTeam?: boolean;
      };
      output: {
        /** The raw object returned by JustCall. */
        record: Record<string, unknown>;
        /** The raw object returned by JustCall. */
        raw: Record<string, unknown>;
      };
    };
  }
}
