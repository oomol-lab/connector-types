import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add up to ten tags to a Respond.io contact. */
    "respond_io.add_contact_tags": {
      input: {
        /**
         * The contact identifier in id:<number>, email:<address>, or phone:<number> format.
         * @minLength 1
         */
        identifier: string;
        /**
         * The contact tags to add or remove.
         * @minItems 1
         * @maxItems 10
         */
        tags: Array<string>;
      };
      output: {
        /** The Respond.io contact ID affected by the action. */
        contactId: number;
        [key: string]: unknown;
      };
    };
    /** Assign or unassign the open conversation for a Respond.io contact. */
    "respond_io.assign_conversation": {
      input: {
        /**
         * The contact identifier in id:<number>, email:<address>, or phone:<number> format.
         * @minLength 1
         */
        identifier: string;
        /** A Respond.io user ID, email address, or null to unassign. */
        assignee: string | number | null;
      };
      output: {
        /** The Respond.io contact ID affected by the action. */
        contactId: number;
        [key: string]: unknown;
      };
    };
    /** Add an internal comment to a Respond.io contact conversation. */
    "respond_io.create_comment": {
      input: {
        /**
         * The contact identifier in id:<number>, email:<address>, or phone:<number> format.
         * @minLength 1
         */
        identifier: string;
        /**
         * The internal comment text.
         * @minLength 1
         */
        text: string;
      };
      output: {
        /** The Respond.io contact ID that received the comment. */
        contactId: number;
        /** The stored comment text. */
        text: string;
        /** The comment creation timestamp returned by Respond.io. */
        created_at: number;
        [key: string]: unknown;
      };
    };
    /** Create a Respond.io contact identified by an email address or phone number. */
    "respond_io.create_contact": {
      input: {
        /**
         * The new contact identifier in email:<address> or phone:<number> format.
         * @minLength 1
         */
        identifier: string;
        /**
         * The contact's first name.
         * @minLength 1
         */
        firstName: string;
        /** The contact's last name when set. */
        lastName?: string | null;
        /** The contact's phone number when set. */
        phone?: string | null;
        /** The contact's email address when set. */
        email?: string | null;
        /** The contact's language when set. */
        language?: string | null;
        /**
         * The contact's publicly reachable profile image URL. Respond.io fetches this URL upstream.
         * @format uri
         */
        profilePic?: string | null;
        /** The contact's country code when set. */
        countryCode?: string | null;
        /** The custom field values to store on the contact. */
        custom_fields?: Array<{
          /**
           * The custom field name.
           * @minLength 1
           */
          name: string;
          /** A Respond.io custom field value. */
          value: string | number | boolean | null;
        }> | null;
      };
      output: {
        /** The Respond.io result code. */
        code: string;
        /** The Respond.io result message. */
        message: string;
        [key: string]: unknown;
      };
    };
    /** Create a Respond.io contact when it does not exist, or update it when the identifier already exists. */
    "respond_io.create_or_update_contact": {
      input: {
        /**
         * The contact identifier in id:<number>, email:<address>, or phone:<number> format.
         * @minLength 1
         */
        identifier: string;
        /**
         * The contact's first name.
         * @minLength 1
         */
        firstName: string;
        /** The contact's last name when set. */
        lastName?: string | null;
        /** The contact's phone number when set. */
        phone?: string | null;
        /** The contact's email address when set. */
        email?: string | null;
        /** The contact's language when set. */
        language?: string | null;
        /**
         * The contact's publicly reachable profile image URL. Respond.io fetches this URL upstream.
         * @format uri
         */
        profilePic?: string | null;
        /** The contact's country code when set. */
        countryCode?: string | null;
        /** The custom field values to store on the contact. */
        custom_fields?: Array<{
          /**
           * The custom field name.
           * @minLength 1
           */
          name: string;
          /** A Respond.io custom field value. */
          value: string | number | boolean | null;
        }> | null;
      };
      output: {
        /** The Respond.io contact ID affected by the action. */
        contactId: number;
        [key: string]: unknown;
      };
    };
    /** Delete a Respond.io contact by contact ID, email address, or phone number. */
    "respond_io.delete_contact": {
      input: {
        /**
         * The contact identifier in id:<number>, email:<address>, or phone:<number> format.
         * @minLength 1
         */
        identifier: string;
      };
      output: {
        /** The Respond.io contact ID affected by the action. */
        contactId: number;
        [key: string]: unknown;
      };
    };
    /** Get one Respond.io contact by contact ID, email address, or phone number. */
    "respond_io.get_contact": {
      input: {
        /**
         * The contact identifier in id:<number>, email:<address>, or phone:<number> format.
         * @minLength 1
         */
        identifier: string;
      };
      output: {
        /** The Respond.io contact ID. */
        id: number;
        /** The contact's first name. */
        firstName: string;
        /** The contact's last name when set. */
        lastName?: string | null;
        /** The contact's phone number when set. */
        phone?: string | null;
        /** The contact's email address when set. */
        email?: string | null;
        /** The contact's language when set. */
        language?: string | null;
        /** The contact's profile image URL when set. */
        profilePic?: string | null;
        /** The contact's country code when set. */
        countryCode?: string | null;
        /** The contact's custom field values when returned. */
        custom_fields?: Array<{
          /**
           * The custom field name.
           * @minLength 1
           */
          name: string;
          /** A Respond.io custom field value. */
          value: string | number | boolean | null;
        }> | null;
        /** The contact's conversation status when returned. */
        status?: "open" | "close";
        /** The tags attached to the contact when returned. */
        tags?: Array<string>;
        /** A Respond.io user assigned to a contact. */
        assignee?: {
          /** The Respond.io user ID. */
          id: number;
          /** The user's first name. */
          firstName: string;
          /** The user's last name. */
          lastName: string;
          /** The user's email address. */
          email: string;
          [key: string]: unknown;
        } | null;
        /** The contact's lifecycle stage when set. */
        lifecycle?: string | null;
        /** The contact creation timestamp returned by Respond.io. */
        created_at: number;
        [key: string]: unknown;
      };
    };
    /** List channels in the connected Respond.io workspace with cursor pagination. */
    "respond_io.list_channels": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The cursor ID used to move forward or backward through paginated results. */
        cursorId?: number;
      };
      output: {
        /** The workspace channels returned for this page. */
        items: Array<{
          /** The Respond.io channel ID. */
          id: number;
          /** The Respond.io channel name. */
          name: string;
          /** The channel source identifier. */
          source: string;
          /** The channel creation timestamp returned by Respond.io. */
          created_at: number;
          [key: string]: unknown;
        }>;
        /** Respond.io pagination links for this result page. */
        pagination: {
          /** The next-page URL, or an empty string when there is no next page. */
          next: string;
          /** The previous-page URL, or an empty string when there is no previous page. */
          previous: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Respond.io contacts using workspace timezone-aware filters and cursor pagination. */
    "respond_io.list_contacts": {
      input: {
        /** Free-text search applied to contacts. */
        search?: string;
        /**
         * The IANA timezone used to evaluate time-based filters.
         * @minLength 1
         */
        timezone: string;
        /** Boolean groups of Respond.io contact filter conditions. */
        filter: {
          /** Conditions that must all match. */
          $and?: Array<{
            /** The type of contact data evaluated by this condition. */
            category: "contactField" | "contactTag" | "lifecycle";
            /** The field name, or null when the category has no field name. */
            field: string | null;
            /** The operator applied to this filter condition. */
            operator: "isEqualTo" | "isNotEqualTo" | "isTimestampAfter" | "isTimestampBefore" | "isTimestampBetween" | "exists" | "doesNotExist" | "isGreaterThan" | "isLessThan" | "isBetween" | "hasAnyOf" | "hasAllOf" | "hasNoneOf";
            /** The value used by the filter operator, or null for existence operators. */
            value: string | Array<string> | {
              /**
               * The inclusive lower range value.
               * @minLength 1
               */
              from: string;
              /**
               * The inclusive upper range value.
               * @minLength 1
               */
              to: string;
            } | null;
          }>;
          /** Conditions where at least one must match. */
          $or?: Array<{
            /** The type of contact data evaluated by this condition. */
            category: "contactField" | "contactTag" | "lifecycle";
            /** The field name, or null when the category has no field name. */
            field: string | null;
            /** The operator applied to this filter condition. */
            operator: "isEqualTo" | "isNotEqualTo" | "isTimestampAfter" | "isTimestampBefore" | "isTimestampBetween" | "exists" | "doesNotExist" | "isGreaterThan" | "isLessThan" | "isBetween" | "hasAnyOf" | "hasAllOf" | "hasNoneOf";
            /** The value used by the filter operator, or null for existence operators. */
            value: string | Array<string> | {
              /**
               * The inclusive lower range value.
               * @minLength 1
               */
              from: string;
              /**
               * The inclusive upper range value.
               * @minLength 1
               */
              to: string;
            } | null;
          }>;
        };
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The cursor ID used to move forward or backward through paginated results. */
        cursorId?: number;
      };
      output: {
        /** The contacts returned for this page. */
        items: Array<{
          /** The Respond.io contact ID. */
          id: number;
          /** The contact's first name. */
          firstName: string;
          /** The contact's last name when set. */
          lastName?: string | null;
          /** The contact's phone number when set. */
          phone?: string | null;
          /** The contact's email address when set. */
          email?: string | null;
          /** The contact's language when set. */
          language?: string | null;
          /** The contact's profile image URL when set. */
          profilePic?: string | null;
          /** The contact's country code when set. */
          countryCode?: string | null;
          /** The contact's custom field values when returned. */
          custom_fields?: Array<{
            /**
             * The custom field name.
             * @minLength 1
             */
            name: string;
            /** A Respond.io custom field value. */
            value: string | number | boolean | null;
          }> | null;
          /** The contact's conversation status when returned. */
          status?: "open" | "close";
          /** The tags attached to the contact when returned. */
          tags?: Array<string>;
          /** A Respond.io user assigned to a contact. */
          assignee?: {
            /** The Respond.io user ID. */
            id: number;
            /** The user's first name. */
            firstName: string;
            /** The user's last name. */
            lastName: string;
            /** The user's email address. */
            email: string;
            [key: string]: unknown;
          } | null;
          /** The contact's lifecycle stage when set. */
          lifecycle?: string | null;
          /** The contact creation timestamp returned by Respond.io. */
          created_at: number;
          [key: string]: unknown;
        }>;
        /** Respond.io pagination links for this result page. */
        pagination: {
          /** The next-page URL, or an empty string when there is no next page. */
          next: string;
          /** The previous-page URL, or an empty string when there is no previous page. */
          previous: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List users in the connected Respond.io workspace with cursor pagination. */
    "respond_io.list_users": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The cursor ID used to move forward or backward through paginated results. */
        cursorId?: number;
      };
      output: {
        /** The workspace users returned for this page. */
        items: Array<{
          /** The Respond.io user ID. */
          id: number;
          /** The user's first name. */
          firstName: string;
          /** The user's last name. */
          lastName: string;
          /** The user's email address. */
          email: string;
          /** The user's workspace role. */
          role: "agent" | "manager" | "owner";
          /** A Respond.io team. */
          team: {
            /** The Respond.io team ID. */
            id: number;
            /** The Respond.io team name. */
            name: string;
            [key: string]: unknown;
          } | null;
          /** The workspace restriction identifiers assigned to this user. */
          restrictions: Array<string>;
          [key: string]: unknown;
        }>;
        /** Respond.io pagination links for this result page. */
        pagination: {
          /** The next-page URL, or an empty string when there is no next page. */
          next: string;
          /** The previous-page URL, or an empty string when there is no previous page. */
          previous: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Remove up to ten tags from a Respond.io contact. */
    "respond_io.remove_contact_tags": {
      input: {
        /**
         * The contact identifier in id:<number>, email:<address>, or phone:<number> format.
         * @minLength 1
         */
        identifier: string;
        /**
         * The contact tags to add or remove.
         * @minItems 1
         * @maxItems 10
         */
        tags: Array<string>;
      };
      output: {
        /** The Respond.io contact ID affected by the action. */
        contactId: number;
        [key: string]: unknown;
      };
    };
    /** Update one or more fields on an existing Respond.io contact. */
    "respond_io.update_contact": {
      input: {
        /**
         * The contact identifier in id:<number>, email:<address>, or phone:<number> format.
         * @minLength 1
         */
        identifier: string;
        /**
         * The contact's first name.
         * @minLength 1
         */
        firstName?: string;
        /** The contact's last name when set. */
        lastName?: string | null;
        /** The contact's phone number when set. */
        phone?: string | null;
        /** The contact's email address when set. */
        email?: string | null;
        /** The contact's language when set. */
        language?: string | null;
        /**
         * The contact's publicly reachable profile image URL. Respond.io fetches this URL upstream.
         * @format uri
         */
        profilePic?: string | null;
        /** The contact's country code when set. */
        countryCode?: string | null;
        /** The custom field values to store on the contact. */
        custom_fields?: Array<{
          /**
           * The custom field name.
           * @minLength 1
           */
          name: string;
          /** A Respond.io custom field value. */
          value: string | number | boolean | null;
        }> | null;
      };
      output: {
        /** The Respond.io contact ID affected by the action. */
        contactId: number;
        [key: string]: unknown;
      };
    };
    /** Open or close a Respond.io contact conversation with optional closing context. */
    "respond_io.update_conversation_status": {
      input: {
        /**
         * The contact identifier in id:<number>, email:<address>, or phone:<number> format.
         * @minLength 1
         */
        identifier: string;
        /** The conversation status to set. */
        status: "open" | "close";
        /**
         * The closing category when closing the conversation.
         * @minLength 1
         */
        category?: string;
        /**
         * The closing summary when closing the conversation.
         * @minLength 1
         */
        summary?: string;
      };
      output: {
        /** The Respond.io contact ID affected by the action. */
        contactId: number;
        [key: string]: unknown;
      };
    };
  }
}
