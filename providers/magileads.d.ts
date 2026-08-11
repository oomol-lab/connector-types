import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Magileads contact list with optional tags, folder, language, and country metadata. */
    "magileads.create_contact_list": {
      input: {
        /**
         * The contact list name.
         * @minLength 1
         */
        name: string;
        /** Tag identifiers to associate with the contact list. */
        tags_ids?: Array<number>;
        /** The folder identifier for the contact list. */
        folder_id?: number;
        /** The ISO 639-3 preferred language code, or null to clear it. */
        language?: string | null;
        /** The ISO 3166-1 alpha-2 preferred country code, or null to clear it. */
        country?: string | null;
      };
      output: {
        /** Whether Magileads reports a successful operation. */
        state: boolean;
        /** The identifier of the created contact list. */
        contact_list_id: number;
        [key: string]: unknown;
      };
    };
    /** Delete one Magileads contact list by identifier. */
    "magileads.delete_contact_list": {
      input: {
        /** The contact list identifier. */
        contact_list_id: number;
      };
      output: {
        /** Whether Magileads reports a successful operation. */
        state: boolean;
        [key: string]: unknown;
      };
    };
    /** Get the profile and metadata of one Magileads contact list by identifier. */
    "magileads.get_contact_list": {
      input: {
        /** The contact list identifier. */
        contact_list_id: number;
      };
      output: {
        /** Whether Magileads reports a successful operation. */
        state: boolean;
        /** A Magileads contact list. */
        contact_list_profile: {
          /** The contact list identifier. */
          id: number;
          /** The contact list name. */
          name: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List all Magileads contact lists available to the authenticated account, including shared lists. */
    "magileads.list_contact_lists": {
      input: Record<string, never>;
      output: {
        /** Whether Magileads reports a successful operation. */
        state: boolean;
        /** Contact lists available to the account. */
        contact_lists: Array<{
          /** The contact list identifier. */
          id: number;
          /** The contact list name. */
          name: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update the metadata of one Magileads contact list by identifier. */
    "magileads.update_contact_list": {
      input: {
        /** The contact list identifier. */
        contact_list_id: number;
        /**
         * The contact list name.
         * @minLength 1
         */
        name?: string;
        /** Tag identifiers to associate with the contact list. */
        tags_ids?: Array<number>;
        /** The folder identifier for the contact list. */
        folder_id?: number;
        /** The ISO 639-3 preferred language code, or null to clear it. */
        language?: string | null;
        /** The ISO 3166-1 alpha-2 preferred country code, or null to clear it. */
        country?: string | null;
        /** Whether the contact list is pinned, or null to clear the setting. */
        pin?: boolean | null;
      };
      output: {
        /** Whether Magileads reports a successful operation. */
        state: boolean;
        [key: string]: unknown;
      };
    };
  }
}
