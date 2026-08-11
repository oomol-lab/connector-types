import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a note associated with a Monica contact. */
    "monica_crm.create_note": {
      input: {
        /**
         * The note body.
         * @minLength 1
         * @maxLength 100000
         */
        body: string;
        /**
         * The contact to associate with the note.
         * @exclusiveMinimum 0
         */
        contactId: number;
        /** Whether the note is favorited. */
        isFavorited: boolean;
      };
      output: {
        /** A resource returned by the Monica API. */
        data: Record<string, unknown>;
      };
    };
    /** Delete a Monica note by ID. */
    "monica_crm.delete_note": {
      input: {
        /**
         * The Monica note ID.
         * @exclusiveMinimum 0
         */
        noteId: number;
      };
      output: {
        /** Whether Monica deleted the note. */
        deleted: boolean;
        /**
         * The ID of the deleted Monica note.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Get a Monica contact by ID. */
    "monica_crm.get_contact": {
      input: {
        /**
         * The Monica contact ID.
         * @exclusiveMinimum 0
         */
        contactId: number;
      };
      output: {
        /** A resource returned by the Monica API. */
        data: Record<string, unknown>;
      };
    };
    /** Get a Monica note by ID. */
    "monica_crm.get_note": {
      input: {
        /**
         * The Monica note ID.
         * @exclusiveMinimum 0
         */
        noteId: number;
      };
      output: {
        /** A resource returned by the Monica API. */
        data: Record<string, unknown>;
      };
    };
    /** List or search contacts in the authenticated Monica account. */
    "monica_crm.list_contacts": {
      input: {
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of resources to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Text to search across contact names, food preferences, jobs, and companies.
         * @minLength 1
         */
        query?: string;
        /** The order used for returned contacts. */
        sort?: "created_at" | "-created_at" | "updated_at" | "-updated_at";
      };
      output: {
        /** Contacts returned by Monica. */
        data: Array<Record<string, unknown>>;
        /** Pagination links returned by Monica. */
        links: Record<string, unknown>;
        /** Pagination metadata returned by Monica. */
        meta: Record<string, unknown>;
      };
    };
    /** List notes in the Monica account or for one contact. */
    "monica_crm.list_notes": {
      input: {
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of resources to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The contact whose notes should be returned.
         * @exclusiveMinimum 0
         */
        contactId?: number;
      };
      output: {
        /** Notes returned by Monica. */
        data: Array<Record<string, unknown>>;
        /** Pagination links returned by Monica. */
        links: Record<string, unknown>;
        /** Pagination metadata returned by Monica. */
        meta: Record<string, unknown>;
      };
    };
    /** Replace a Monica note by ID. */
    "monica_crm.update_note": {
      input: {
        /**
         * The Monica note ID.
         * @exclusiveMinimum 0
         */
        noteId: number;
        /**
         * The note body.
         * @minLength 1
         * @maxLength 100000
         */
        body: string;
        /**
         * The contact to associate with the note.
         * @exclusiveMinimum 0
         */
        contactId: number;
        /** Whether the note is favorited. */
        isFavorited: boolean;
      };
      output: {
        /** A resource returned by the Monica API. */
        data: Record<string, unknown>;
      };
    };
  }
}
