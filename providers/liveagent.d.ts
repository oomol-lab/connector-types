import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a LiveAgent contact. */
    "liveagent.create_contact": {
      input: {
        /** Optional contact ID supplied to LiveAgent. */
        id?: string;
        /** LiveAgent company ID for the contact. */
        company_id?: string;
        /** Contact first name. */
        firstname?: string;
        /** Contact last name. */
        lastname?: string;
        /** System name stored by LiveAgent. */
        system_name?: string;
        /** Contact description. */
        description?: string;
        /**
         * Contact avatar URL.
         * @format uri
         */
        avatar_url?: string;
        /** LiveAgent contact gender code. */
        gender?: "M" | "F" | "O" | "X";
        /** Contact language code. */
        language?: string;
        /** Contact city. */
        city?: string;
        /** Contact country code. */
        countrycode?: string;
        /** Contact IP address. */
        ip?: string;
        /** Contact email addresses. */
        emails?: Array<string>;
        /** Contact phone numbers. */
        phones?: Array<string>;
        /** LiveAgent contact group IDs. */
        groups?: Array<string>;
        /** Contact job position. */
        job_position?: string;
        /** Contact note. */
        note?: string;
        /** Contact browser user-agent string. */
        useragent?: string;
        /** Contact screen information. */
        screen?: string;
        /** Contact timezone offset. */
        time_offset?: number;
        /** Contact latitude. */
        latitude?: number;
        /** Contact longitude. */
        longitude?: number;
        /** LiveAgent custom fields. The nested shape is provider-defined. */
        custom_fields?: Array<Record<string, unknown>>;
      };
      output: {
        /** A normalized LiveAgent contact. */
        contact: {
          /** LiveAgent contact ID. */
          id?: string | null;
          /** Contact first name. */
          firstname?: string | null;
          /** Contact last name. */
          lastname?: string | null;
          /** Contact system name. */
          system_name?: string | null;
          /** LiveAgent contact type code. */
          type?: string | null;
          /** Registered contact email address. */
          registration_email?: string | null;
          /** String values returned by LiveAgent. */
          emails?: Array<string> | null;
          /** String values returned by LiveAgent. */
          phones?: Array<string> | null;
          /** String values returned by LiveAgent. */
          groups?: Array<string> | null;
          /** Raw object returned by LiveAgent. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a LiveAgent ticket with an initial message. */
    "liveagent.create_ticket": {
      input: {
        /**
         * Contact identifier, usually the visitor email address.
         * @minLength 1
         */
        useridentifier: string;
        /**
         * Ticket subject.
         * @minLength 1
         */
        subject: string;
        /**
         * LiveAgent department ID for the ticket.
         * @minLength 1
         */
        departmentid: string;
        /**
         * Recipient email address used by LiveAgent.
         * @minLength 1
         */
        recipient: string;
        /**
         * Initial ticket message body.
         * @minLength 1
         */
        message: string;
        /** Recipient display name. */
        recipient_name?: string;
        /** Comma-separated CC recipients accepted by LiveAgent. */
        carbon_copies?: string;
        /** Comma-separated BCC recipients accepted by LiveAgent. */
        blind_carbon_copies?: string;
        /** LiveAgent ticket status code. */
        status?: "I" | "N" | "T" | "P" | "R" | "X" | "B" | "A" | "C" | "W" | "L";
        /** External mail message ID to associate with the ticket. */
        mail_message_id?: string;
        /** Whether LiveAgent should skip sending mail. */
        do_not_send_mail?: "Y" | "N";
        /** Whether LiveAgent should use the configured mail template. */
        use_template?: "Y" | "N";
        /** Whether the message body is HTML. */
        is_html_message?: "Y" | "N";
        /** LiveAgent tag IDs to attach to the ticket. */
        tags?: Array<string>;
        /** LiveAgent custom fields. The nested shape is provider-defined. */
        custom_fields?: Array<Record<string, unknown>>;
      };
      output: {
        /** A normalized LiveAgent ticket. */
        ticket: {
          /** LiveAgent ticket ID. */
          id?: string | null;
          /** LiveAgent ticket code. */
          code?: string | null;
          /** Ticket subject. */
          subject?: string | null;
          /** LiveAgent ticket status code. */
          status?: string | null;
          /** LiveAgent department ID. */
          departmentid?: string | null;
          /** LiveAgent agent ID. */
          agentid?: string | null;
          /** LiveAgent owner contact ID. */
          owner_contactid?: string | null;
          /** Owner email address. */
          owner_email?: string | null;
          /** Owner display name. */
          owner_name?: string | null;
          /** String values returned by LiveAgent. */
          tags?: Array<string> | null;
          /** Raw object returned by LiveAgent. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a LiveAgent contact by ID. */
    "liveagent.get_contact": {
      input: {
        /**
         * LiveAgent contact ID.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** A normalized LiveAgent contact. */
        contact: {
          /** LiveAgent contact ID. */
          id?: string | null;
          /** Contact first name. */
          firstname?: string | null;
          /** Contact last name. */
          lastname?: string | null;
          /** Contact system name. */
          system_name?: string | null;
          /** LiveAgent contact type code. */
          type?: string | null;
          /** Registered contact email address. */
          registration_email?: string | null;
          /** String values returned by LiveAgent. */
          emails?: Array<string> | null;
          /** String values returned by LiveAgent. */
          phones?: Array<string> | null;
          /** String values returned by LiveAgent. */
          groups?: Array<string> | null;
          /** Raw object returned by LiveAgent. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a LiveAgent department by ID. */
    "liveagent.get_department": {
      input: {
        /**
         * LiveAgent department ID.
         * @minLength 1
         */
        departmentId: string;
      };
      output: {
        /** A normalized LiveAgent department. */
        department: {
          /** LiveAgent department ID. */
          department_id?: string | null;
          /** Department name. */
          name?: string | null;
          /** Department online status. */
          online_status?: string | null;
          /** Number of agents in the department. */
          agent_count?: number | null;
          /** String values returned by LiveAgent. */
          agent_ids?: Array<string> | null;
          /** Associated LiveAgent mail account ID. */
          mailaccount_id?: string | null;
          /** Raw object returned by LiveAgent. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a LiveAgent contact group by ID. */
    "liveagent.get_group": {
      input: {
        /**
         * LiveAgent group ID.
         * @minLength 1
         */
        groupId: string;
      };
      output: {
        /** A normalized LiveAgent contact group. */
        group: {
          /** LiveAgent group ID. */
          id?: string | null;
          /** Group name. */
          name?: string | null;
          /** Group foreground color. */
          color?: string | null;
          /** Group background color. */
          background_color?: string | null;
          /** Raw object returned by LiveAgent. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a LiveAgent ticket by ID. */
    "liveagent.get_ticket": {
      input: {
        /**
         * LiveAgent ticket ID.
         * @minLength 1
         */
        ticketId: string;
      };
      output: {
        /** A normalized LiveAgent ticket. */
        ticket: {
          /** LiveAgent ticket ID. */
          id?: string | null;
          /** LiveAgent ticket code. */
          code?: string | null;
          /** Ticket subject. */
          subject?: string | null;
          /** LiveAgent ticket status code. */
          status?: string | null;
          /** LiveAgent department ID. */
          departmentid?: string | null;
          /** LiveAgent agent ID. */
          agentid?: string | null;
          /** LiveAgent owner contact ID. */
          owner_contactid?: string | null;
          /** Owner email address. */
          owner_email?: string | null;
          /** Owner display name. */
          owner_name?: string | null;
          /** String values returned by LiveAgent. */
          tags?: Array<string> | null;
          /** Raw object returned by LiveAgent. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List LiveAgent contacts with pagination, sorting, and filters. */
    "liveagent.list_contacts": {
      input: {
        /**
         * Page to send as the LiveAgent _page query parameter.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results to send as the LiveAgent _perPage query parameter.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
        /**
         * Result-set start offset to send as the LiveAgent _from query parameter.
         * @minimum 0
         */
        from?: number;
        /**
         * Result-set end offset to send as the LiveAgent _to query parameter.
         * @minimum 0
         */
        to?: number;
        /** Sort direction accepted by LiveAgent. */
        sortDir?: "ASC" | "DESC";
        /**
         * LiveAgent field name to send as the _sortField query parameter.
         * @minLength 1
         */
        sortField?: string;
        /**
         * LiveAgent filters encoded as the JSON string documented by the API and sent as _filters.
         * @minLength 1
         */
        filters?: string;
      };
      output: {
        /** Contacts returned by LiveAgent. */
        contacts: Array<{
          /** LiveAgent contact ID. */
          id?: string | null;
          /** Contact first name. */
          firstname?: string | null;
          /** Contact last name. */
          lastname?: string | null;
          /** Contact system name. */
          system_name?: string | null;
          /** LiveAgent contact type code. */
          type?: string | null;
          /** Registered contact email address. */
          registration_email?: string | null;
          /** String values returned by LiveAgent. */
          emails?: Array<string> | null;
          /** String values returned by LiveAgent. */
          phones?: Array<string> | null;
          /** String values returned by LiveAgent. */
          groups?: Array<string> | null;
          /** Raw object returned by LiveAgent. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Raw LiveAgent list response. */
        raw: unknown;
      };
    };
    /** List LiveAgent departments with pagination, sorting, and filters. */
    "liveagent.list_departments": {
      input: {
        /**
         * Page to send as the LiveAgent _page query parameter.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results to send as the LiveAgent _perPage query parameter.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
        /**
         * Result-set start offset to send as the LiveAgent _from query parameter.
         * @minimum 0
         */
        from?: number;
        /**
         * Result-set end offset to send as the LiveAgent _to query parameter.
         * @minimum 0
         */
        to?: number;
        /** Sort direction accepted by LiveAgent. */
        sortDir?: "ASC" | "DESC";
        /**
         * LiveAgent field name to send as the _sortField query parameter.
         * @minLength 1
         */
        sortField?: string;
        /**
         * LiveAgent filters encoded as the JSON string documented by the API and sent as _filters.
         * @minLength 1
         */
        filters?: string;
      };
      output: {
        /** Departments returned by LiveAgent. */
        departments: Array<{
          /** LiveAgent department ID. */
          department_id?: string | null;
          /** Department name. */
          name?: string | null;
          /** Department online status. */
          online_status?: string | null;
          /** Number of agents in the department. */
          agent_count?: number | null;
          /** String values returned by LiveAgent. */
          agent_ids?: Array<string> | null;
          /** Associated LiveAgent mail account ID. */
          mailaccount_id?: string | null;
          /** Raw object returned by LiveAgent. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Raw LiveAgent list response. */
        raw: unknown;
      };
    };
    /** List LiveAgent contact groups. */
    "liveagent.list_groups": {
      input: Record<string, never>;
      output: {
        /** Contact groups returned by LiveAgent. */
        groups: Array<{
          /** LiveAgent group ID. */
          id?: string | null;
          /** Group name. */
          name?: string | null;
          /** Group foreground color. */
          color?: string | null;
          /** Group background color. */
          background_color?: string | null;
          /** Raw object returned by LiveAgent. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Raw LiveAgent list response. */
        raw: unknown;
      };
    };
    /** List LiveAgent tickets with page pagination, sorting, and optional filters. */
    "liveagent.list_tickets": {
      input: {
        /**
         * Page to send as the LiveAgent _page query parameter.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results to send as the LiveAgent _perPage query parameter.
         * @minimum 1
         * @maximum 1000
         */
        perPage?: number;
        /**
         * Result-set start offset to send as the LiveAgent _from query parameter.
         * @minimum 0
         */
        from?: number;
        /**
         * Result-set end offset to send as the LiveAgent _to query parameter.
         * @minimum 0
         */
        to?: number;
        /** Sort direction accepted by LiveAgent. */
        sortDir?: "ASC" | "DESC";
        /**
         * LiveAgent field name to send as the _sortField query parameter.
         * @minLength 1
         */
        sortField?: string;
        /**
         * LiveAgent filters encoded as the JSON string documented by the API and sent as _filters.
         * @minLength 1
         */
        filters?: string;
      };
      output: {
        /** Ticket rows returned by LiveAgent. */
        tickets: Array<{
          /** LiveAgent conversation ID. */
          conversationid?: string | null;
          /** LiveAgent ticket code. */
          code?: string | null;
          /** Ticket subject. */
          subject?: string | null;
          /** LiveAgent ticket status code. */
          status?: string | null;
          /** LiveAgent department ID. */
          departmentid?: string | null;
          /** LiveAgent agent ID. */
          agentid?: string | null;
          /** LiveAgent contact ID. */
          contactid?: string | null;
          /** Primary owner or contact email address. */
          ownerEmail?: string | null;
          /** Primary owner or contact display name. */
          ownerName?: string | null;
          /** Unix timestamp when the ticket was created. */
          datecreated?: number | null;
          /** Unix timestamp when the ticket was last changed. */
          datechanged?: number | null;
          /** String values returned by LiveAgent. */
          tags?: Array<string> | null;
          /** Raw object returned by LiveAgent. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Raw object returned by LiveAgent. */
        raw: Record<string, unknown>;
      };
    };
    /** Update mutable fields on a LiveAgent contact. */
    "liveagent.update_contact": {
      input: {
        /**
         * LiveAgent contact ID.
         * @minLength 1
         */
        contactId: string;
        /** Optional contact ID supplied to LiveAgent. */
        id?: string;
        /** LiveAgent company ID for the contact. */
        company_id?: string;
        /** Contact first name. */
        firstname?: string;
        /** Contact last name. */
        lastname?: string;
        /** System name stored by LiveAgent. */
        system_name?: string;
        /** Contact description. */
        description?: string;
        /**
         * Contact avatar URL.
         * @format uri
         */
        avatar_url?: string;
        /** LiveAgent contact gender code. */
        gender?: "M" | "F" | "O" | "X";
        /** Contact language code. */
        language?: string;
        /** Contact city. */
        city?: string;
        /** Contact country code. */
        countrycode?: string;
        /** Contact IP address. */
        ip?: string;
        /** Contact email addresses. */
        emails?: Array<string>;
        /** Contact phone numbers. */
        phones?: Array<string>;
        /** LiveAgent contact group IDs. */
        groups?: Array<string>;
        /** Contact job position. */
        job_position?: string;
        /** Contact note. */
        note?: string;
        /** Contact browser user-agent string. */
        useragent?: string;
        /** Contact screen information. */
        screen?: string;
        /** Contact timezone offset. */
        time_offset?: number;
        /** Contact latitude. */
        latitude?: number;
        /** Contact longitude. */
        longitude?: number;
        /** LiveAgent custom fields. The nested shape is provider-defined. */
        custom_fields?: Array<Record<string, unknown>>;
      };
      output: {
        /** A normalized LiveAgent contact. */
        contact: {
          /** LiveAgent contact ID. */
          id?: string | null;
          /** Contact first name. */
          firstname?: string | null;
          /** Contact last name. */
          lastname?: string | null;
          /** Contact system name. */
          system_name?: string | null;
          /** LiveAgent contact type code. */
          type?: string | null;
          /** Registered contact email address. */
          registration_email?: string | null;
          /** String values returned by LiveAgent. */
          emails?: Array<string> | null;
          /** String values returned by LiveAgent. */
          phones?: Array<string> | null;
          /** String values returned by LiveAgent. */
          groups?: Array<string> | null;
          /** Raw object returned by LiveAgent. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Update mutable fields on a LiveAgent ticket. */
    "liveagent.update_ticket": {
      input: {
        /**
         * LiveAgent ticket ID.
         * @minLength 1
         */
        ticketId: string;
        /** LiveAgent owner contact ID. */
        owner_contactid?: string;
        /** LiveAgent department ID. */
        departmentid?: string;
        /** LiveAgent agent ID. */
        agentid?: string;
        /** LiveAgent ticket status code. */
        status?: "I" | "N" | "T" | "P" | "R" | "X" | "B" | "A" | "C" | "W" | "L";
        /**
         * Ticket subject.
         * @minLength 1
         */
        subject?: string;
        /** LiveAgent tag IDs to set on the ticket. */
        tags?: Array<string>;
        /** LiveAgent custom fields. The nested shape is provider-defined. */
        custom_fields?: Array<Record<string, unknown>>;
      };
      output: {
        /** A normalized LiveAgent ticket. */
        ticket: {
          /** LiveAgent ticket ID. */
          id?: string | null;
          /** LiveAgent ticket code. */
          code?: string | null;
          /** Ticket subject. */
          subject?: string | null;
          /** LiveAgent ticket status code. */
          status?: string | null;
          /** LiveAgent department ID. */
          departmentid?: string | null;
          /** LiveAgent agent ID. */
          agentid?: string | null;
          /** LiveAgent owner contact ID. */
          owner_contactid?: string | null;
          /** Owner email address. */
          owner_email?: string | null;
          /** Owner display name. */
          owner_name?: string | null;
          /** String values returned by LiveAgent. */
          tags?: Array<string> | null;
          /** Raw object returned by LiveAgent. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
