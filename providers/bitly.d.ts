import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details for an existing Bitly Bitlink. */
    "bitly.get_bitlink": {
      input: {
        /**
         * A Bitlink made of the domain and hash, such as bit.ly/12a4b6c.
         * @minLength 1
         */
        bitlink: string;
      };
      output: {
        /** A Bitly Bitlink. */
        bitlink: {
          /** The Bitlink ID, usually domain/hash. */
          id?: string;
          /**
           * The short URL.
           * @format uri
           */
          link?: string;
          /**
           * The destination URL.
           * @format uri
           */
          long_url?: string;
          /** The Bitlink title. */
          title?: string;
          /** Whether the Bitlink is archived. */
          archived?: boolean;
          /** Timestamp when the Bitlink was created. */
          created_at?: string;
          /** The login that created the Bitlink. */
          created_by?: string;
          /** The client ID that created the Bitlink. */
          client_id?: string;
          /** Custom Bitlinks associated with this Bitlink. */
          custom_bitlinks?: Array<string>;
          /** Tags assigned to the Bitlink. */
          tags?: Array<string>;
          /** Launchpad IDs associated with this Bitlink. */
          launchpad_ids?: Array<string>;
          /** QR code IDs associated with this Bitlink. */
          qr_code_ids?: Array<string>;
          /** Whether the Bitlink has been deleted. */
          is_deleted?: boolean;
          /** Campaign IDs associated with this Bitlink. */
          campaign_ids?: Array<string>;
          /** Optional expiration timestamp for the Bitlink. */
          expiration_at?: string;
          /** Reference URLs returned by Bitly. */
          references?: Record<string, string>;
          [key: string]: unknown;
        };
      };
    };
    /** Get details for a Bitly group. */
    "bitly.get_group": {
      input: {
        /**
         * A Bitly GUID value.
         * @minLength 1
         */
        groupGuid: string;
      };
      output: {
        /** A Bitly group. */
        group: {
          /** The group GUID. */
          guid?: string;
          /** The organization GUID that owns the group. */
          organization_guid?: string;
          /** The group name. */
          name?: string;
          /** Timestamp when the group was created. */
          created?: string;
          /** Timestamp when the group was last modified. */
          modified?: string;
          /** Whether the group is active. */
          is_active?: boolean;
          /** The authenticated user's role in the group. */
          role?: string;
          /** Branded short domains associated with the group. */
          bsds?: Array<string>;
          /** Reference URLs returned by Bitly. */
          references?: Record<string, string>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the authenticated Bitly user details. */
    "bitly.get_user": {
      input: Record<string, never>;
      output: {
        /** Authenticated Bitly user details. */
        user: {
          /** The Bitly login name. */
          login?: string;
          /** The user's display name. */
          name?: string;
          /** Whether the user is active. */
          is_active?: boolean;
          /** Timestamp when the user was created. */
          created?: string;
          /** Timestamp when the user was last modified. */
          modified?: string;
          /** Whether the user authenticates through SSO. */
          is_sso_user?: boolean;
          /** Whether two-factor authentication is enabled. */
          is_2fa_enabled?: boolean;
          /** The default Bitly group GUID. */
          default_group_guid?: string;
          /** Email addresses associated with the user. */
          emails?: Array<{
            /**
             * The email address.
             * @format email
             */
            email?: string;
            /** Whether this is the primary email address. */
            is_primary?: boolean;
            /** Whether this email address has been verified. */
            is_verified?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** List Bitly groups available to the authenticated user. */
    "bitly.list_groups": {
      input: {
        /**
         * A Bitly GUID value.
         * @minLength 1
         */
        organizationGuid?: string;
      };
      output: {
        /** Groups returned by Bitly. */
        groups: Array<{
          /** The group GUID. */
          guid?: string;
          /** The organization GUID that owns the group. */
          organization_guid?: string;
          /** The group name. */
          name?: string;
          /** Timestamp when the group was created. */
          created?: string;
          /** Timestamp when the group was last modified. */
          modified?: string;
          /** Whether the group is active. */
          is_active?: boolean;
          /** The authenticated user's role in the group. */
          role?: string;
          /** Branded short domains associated with the group. */
          bsds?: Array<string>;
          /** Reference URLs returned by Bitly. */
          references?: Record<string, string>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create a short Bitly link for a destination URL. */
    "bitly.shorten_link": {
      input: {
        /**
         * The destination URL for the Bitlink.
         * @format uri
         */
        longUrl: string;
        /**
         * The domain used when creating the Bitlink.
         * @minLength 1
         */
        domain?: string;
        /**
         * A Bitly GUID value.
         * @minLength 1
         */
        groupGuid?: string;
        /** Whether Bitly should create a new short link every time. */
        forceNewLink?: boolean;
      };
      output: {
        /** A Bitly Bitlink. */
        bitlink: {
          /** The Bitlink ID, usually domain/hash. */
          id?: string;
          /**
           * The short URL.
           * @format uri
           */
          link?: string;
          /**
           * The destination URL.
           * @format uri
           */
          long_url?: string;
          /** The Bitlink title. */
          title?: string;
          /** Whether the Bitlink is archived. */
          archived?: boolean;
          /** Timestamp when the Bitlink was created. */
          created_at?: string;
          /** The login that created the Bitlink. */
          created_by?: string;
          /** The client ID that created the Bitlink. */
          client_id?: string;
          /** Custom Bitlinks associated with this Bitlink. */
          custom_bitlinks?: Array<string>;
          /** Tags assigned to the Bitlink. */
          tags?: Array<string>;
          /** Launchpad IDs associated with this Bitlink. */
          launchpad_ids?: Array<string>;
          /** QR code IDs associated with this Bitlink. */
          qr_code_ids?: Array<string>;
          /** Whether the Bitlink has been deleted. */
          is_deleted?: boolean;
          /** Campaign IDs associated with this Bitlink. */
          campaign_ids?: Array<string>;
          /** Optional expiration timestamp for the Bitlink. */
          expiration_at?: string;
          /** Reference URLs returned by Bitly. */
          references?: Record<string, string>;
          [key: string]: unknown;
        };
      };
    };
    /** Update editable fields on an existing Bitly Bitlink. */
    "bitly.update_bitlink": {
      input: {
        /**
         * A Bitlink made of the domain and hash, such as bit.ly/12a4b6c.
         * @minLength 1
         */
        bitlink: string;
        /**
         * Updated Bitlink title.
         * @minLength 1
         */
        title?: string;
        /** Whether the Bitlink should be archived. */
        archived?: boolean;
        /** Tags assigned to the Bitlink. */
        tags?: Array<string>;
        /**
         * The destination URL for the Bitlink.
         * @format uri
         */
        longUrl?: string;
        /**
         * Updated Bitlink expiration timestamp.
         * @minLength 1
         */
        expirationAt?: string;
      };
      output: {
        /** A Bitly Bitlink. */
        bitlink: {
          /** The Bitlink ID, usually domain/hash. */
          id?: string;
          /**
           * The short URL.
           * @format uri
           */
          link?: string;
          /**
           * The destination URL.
           * @format uri
           */
          long_url?: string;
          /** The Bitlink title. */
          title?: string;
          /** Whether the Bitlink is archived. */
          archived?: boolean;
          /** Timestamp when the Bitlink was created. */
          created_at?: string;
          /** The login that created the Bitlink. */
          created_by?: string;
          /** The client ID that created the Bitlink. */
          client_id?: string;
          /** Custom Bitlinks associated with this Bitlink. */
          custom_bitlinks?: Array<string>;
          /** Tags assigned to the Bitlink. */
          tags?: Array<string>;
          /** Launchpad IDs associated with this Bitlink. */
          launchpad_ids?: Array<string>;
          /** QR code IDs associated with this Bitlink. */
          qr_code_ids?: Array<string>;
          /** Whether the Bitlink has been deleted. */
          is_deleted?: boolean;
          /** Campaign IDs associated with this Bitlink. */
          campaign_ids?: Array<string>;
          /** Optional expiration timestamp for the Bitlink. */
          expiration_at?: string;
          /** Reference URLs returned by Bitly. */
          references?: Record<string, string>;
          [key: string]: unknown;
        };
      };
    };
  }
}
