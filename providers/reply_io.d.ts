import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Reply.io contact using standard contact fields. */
    "reply_io.create_contact": {
      input: {
        /**
         * Contact email address.
         * @format email
         */
        email?: string;
        /** Contact first name. */
        firstName?: string;
        /** Contact last name. */
        lastName?: string;
        /** Contact company name. */
        company?: string;
        /** Contact job title. */
        title?: string;
        /** Contact phone number. */
        phone?: string;
        /** Contact city. */
        city?: string;
        /** Contact state or province. */
        state?: string;
        /** Contact country. */
        country?: string;
        /** Contact industry. */
        industry?: string;
        /** Contact company size range. */
        companySize?: string;
        /** Contact timezone identifier. */
        timeZone?: string;
        /**
         * Contact LinkedIn profile URL.
         * @minLength 1
         */
        linkedInProfile?: string;
        /**
         * Contact LinkedIn Sales Navigator URL.
         * @minLength 1
         */
        linkedInSalesNavigator?: string;
        /**
         * Contact LinkedIn Recruiter URL.
         * @minLength 1
         */
        linkedInRecruiter?: string;
        /** Notes to store on the contact. */
        notes?: string;
        /**
         * Reply.io user ID that should own the contact.
         * @minimum 1
         */
        ownerUserId?: number;
        /**
         * Custom field values to store on the contact.
         * @minItems 1
         */
        customFields?: Array<{
          /**
           * Custom field key.
           * @minLength 1
           */
          key: string;
          /** Custom field value. */
          value: string | number | boolean | null;
        }>;
      };
      output: {
        /** Reply.io contact object, including standard contact fields and custom fields when available. */
        contact: Record<string, unknown>;
      };
    };
    /** Get a Reply.io contact by ID. */
    "reply_io.get_contact": {
      input: {
        /**
         * Reply.io resource ID.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** Reply.io contact object, including standard contact fields and custom fields when available. */
        contact: Record<string, unknown>;
      };
    };
    /** Get the authenticated Reply.io user ID and username. */
    "reply_io.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Authenticated Reply.io user information. */
        user: {
          /** The authenticated user's Reply.io ID. */
          userId: number;
          /** The authenticated user's username. */
          username: string;
        };
      };
    };
    /** Get a Reply.io sequence by ID. */
    "reply_io.get_sequence": {
      input: {
        /**
         * Reply.io resource ID.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** Reply.io sequence object, including owner, status, archive, health, and detail fields when available. */
        sequence: Record<string, unknown>;
      };
    };
    /** List Reply.io contacts with optional pagination. */
    "reply_io.list_contacts": {
      input: {
        /**
         * Maximum number of contacts to return. Reply.io defaults to 25.
         * @minimum 1
         * @maximum 1000
         */
        top?: number;
        /**
         * Number of contacts to skip before returning results.
         * @minimum 0
         */
        skip?: number;
      };
      output: {
        /** Reply.io contacts returned by the API. */
        contacts: Array<Record<string, unknown>>;
        /** Whether Reply.io has more matching records after this page. */
        hasMore: boolean;
      };
    };
    /** List Reply.io sequences with optional pagination and filters. */
    "reply_io.list_sequences": {
      input: {
        /**
         * Maximum number of sequences to return. Reply.io defaults to 25.
         * @minimum 1
         * @maximum 1000
         */
        top?: number;
        /**
         * Number of sequences to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /** Sequence status to filter by. */
        status?: "active" | "paused" | "new";
        /**
         * Reply.io user ID that owns the sequence.
         * @minimum 1
         */
        ownerUserId?: number;
        /**
         * Reply.io sequence folder UUID.
         * @minLength 1
         */
        folderId?: string;
        /** Whether to return archived or non-archived sequences. */
        isArchived?: boolean;
        /**
         * Case-insensitive partial sequence name filter.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** Reply.io sequences returned by the API. */
        sequences: Array<Record<string, unknown>>;
        /** Whether Reply.io has more matching records after this page. */
        hasMore: boolean;
      };
    };
    /** Pause an active Reply.io sequence. */
    "reply_io.pause_sequence": {
      input: {
        /**
         * Reply.io resource ID.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** Reply.io sequence object, including owner, status, archive, health, and detail fields when available. */
        sequence: Record<string, unknown>;
      };
    };
    /** Start a paused or new Reply.io sequence. */
    "reply_io.start_sequence": {
      input: {
        /**
         * Reply.io resource ID.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** Reply.io sequence object, including owner, status, archive, health, and detail fields when available. */
        sequence: Record<string, unknown>;
      };
    };
    /** Update a Reply.io contact by ID. */
    "reply_io.update_contact": {
      input: {
        /**
         * Reply.io contact ID to update.
         * @minimum 1
         */
        id: number;
        /**
         * Contact email address.
         * @format email
         */
        email?: string;
        /** Contact first name. */
        firstName?: string;
        /** Contact last name. */
        lastName?: string;
        /** Contact company name. */
        company?: string;
        /** Contact job title. */
        title?: string;
        /** Contact phone number. */
        phone?: string;
        /** Contact city. */
        city?: string;
        /** Contact state or province. */
        state?: string;
        /** Contact country. */
        country?: string;
        /** Contact industry. */
        industry?: string;
        /** Contact company size range. */
        companySize?: string;
        /** Contact timezone identifier. */
        timeZone?: string;
        /**
         * Contact LinkedIn profile URL.
         * @minLength 1
         */
        linkedInProfile?: string;
        /**
         * Contact LinkedIn Sales Navigator URL.
         * @minLength 1
         */
        linkedInSalesNavigator?: string;
        /**
         * Contact LinkedIn Recruiter URL.
         * @minLength 1
         */
        linkedInRecruiter?: string;
        /** Notes to store on the contact. */
        notes?: string;
        /**
         * Reply.io user ID that should own the contact.
         * @minimum 1
         */
        ownerUserId?: number;
        /**
         * Custom field values to store on the contact.
         * @minItems 1
         */
        customFields?: Array<{
          /**
           * Custom field key.
           * @minLength 1
           */
          key: string;
          /** Custom field value. */
          value: string | number | boolean | null;
        }>;
      };
      output: {
        /** Reply.io contact object, including standard contact fields and custom fields when available. */
        contact: Record<string, unknown>;
      };
    };
  }
}
