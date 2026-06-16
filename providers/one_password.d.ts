import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get health details for the configured 1Password Connect Server. */
    "one_password.get_health": {
      input: Record<string, never>;
      output: {
        /** Raw 1Password Connect Server health details. */
        health: Record<string, unknown>;
      };
    };
    /** Get one full 1Password item by vault UUID and item UUID. */
    "one_password.get_item": {
      input: {
        /** The 1Password vault UUID. */
        vaultId: string;
        /** The 1Password item UUID. */
        itemId: string;
      };
      output: {
        /** A full 1Password item object. */
        item: {
          /** The 1Password item UUID. */
          id?: string;
          /** The item title. */
          title?: string;
          /** The item category. */
          category?: string;
          /** Fields returned for the item. */
          fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get details for one 1Password vault by UUID. */
    "one_password.get_vault": {
      input: {
        /** The 1Password vault UUID. */
        vaultId: string;
      };
      output: {
        /** A 1Password vault object. */
        vault: {
          /** The 1Password vault UUID. */
          id?: string;
          /** The vault name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List 1Password Connect activity events visible to the access token. */
    "one_password.list_activity": {
      input: {
        /**
         * Maximum number of activity events to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Zero-based activity event offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** 1Password Connect activity events. */
        activity: Array<Record<string, unknown>>;
      };
    };
    /** List item overviews in one 1Password vault. */
    "one_password.list_items": {
      input: {
        /** The 1Password vault UUID. */
        vaultId: string;
        /** A SCIM-style filter for item titles or tags, such as title eq "Example Item". */
        filter?: string;
      };
      output: {
        /** Items in the requested vault. */
        items: Array<{
          /** The 1Password item UUID. */
          id?: string;
          /** The item title. */
          title?: string;
          /** The item category. */
          category?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List 1Password vaults available to the connected Connect access token. */
    "one_password.list_vaults": {
      input: {
        /** A SCIM-style filter for vault names, such as name eq "Demo Vault". */
        filter?: string;
      };
      output: {
        /** Vaults available to the Connect access token. */
        vaults: Array<{
          /** The 1Password vault UUID. */
          id?: string;
          /** The vault name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
