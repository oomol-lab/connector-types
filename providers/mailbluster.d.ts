import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a MailBluster lead with optional custom fields, metadata, tags, subscription state, and double opt-in settings. */
    "mailbluster.create_lead": {
      input: {
        /**
         * The lead's first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The lead's last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * The lead's email address.
         * @format email
         */
        email: string;
        /**
         * The lead's timezone, such as America/Los_Angeles.
         * @minLength 1
         */
        timezone?: string;
        /**
         * The lead's IP address.
         * @minLength 1
         */
        ipAddress?: string;
        /** Whether the lead should be subscribed. */
        subscribed: boolean;
        /** Custom fields keyed by MailBluster field merge tag. */
        fields?: Record<string, unknown>;
        /** Additional MailBluster lead metadata such as company, role, source, or geolocation values. */
        meta?: Record<string, unknown>;
        /** MailBluster tags associated with the lead. */
        tags?: Array<string>;
        /** Whether MailBluster should require double opt-in for this lead. */
        doubleOptIn?: boolean;
        /** Whether MailBluster should update the existing lead when the email already exists. */
        overrideExisting?: boolean;
      };
      output: {
        /** The MailBluster response message. */
        message: string;
        /** A MailBluster lead object. */
        lead: {
          /** The MailBluster lead identifier. */
          id?: number;
          /** The lead's first name. */
          firstName?: string;
          /** The lead's last name. */
          lastName?: string;
          /** The lead's full name. */
          fullName?: string;
          /** Custom fields keyed by MailBluster field merge tag. */
          fields?: Record<string, unknown>;
          /**
           * The lead's email address.
           * @format email
           */
          email?: string;
          /** The lead's timezone. */
          timezone?: string;
          /** The lead's IP address. */
          ipAddress?: string;
          /** Whether the lead is subscribed. */
          subscribed?: boolean;
          /** The lead's opt-in status, or null when unavailable. */
          optInStatus?: string | null;
          /** Additional MailBluster lead metadata such as company, role, source, or geolocation values. */
          meta?: Record<string, unknown>;
          /** MailBluster tags associated with the lead. */
          tags?: Array<string>;
          /**
           * The timestamp when the lead was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The timestamp when the lead was last updated.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one MailBluster lead by the MD5 hash of the lead email address. */
    "mailbluster.delete_lead": {
      input: {
        /**
         * The MD5 hash of the lead email address.
         * @minLength 1
         */
        lead_hash: string;
      };
      output: {
        /** The MailBluster response message. */
        message: string;
        /** The MD5 hash of the deleted lead email address. */
        leadHash: string;
      };
    };
    /** Get one MailBluster lead by the MD5 hash of the lead email address. */
    "mailbluster.get_lead": {
      input: {
        /**
         * The MD5 hash of the lead email address.
         * @minLength 1
         */
        lead_hash: string;
      };
      output: {
        /** The MailBluster lead identifier. */
        id?: number;
        /** The lead's first name. */
        firstName?: string;
        /** The lead's last name. */
        lastName?: string;
        /** The lead's full name. */
        fullName?: string;
        /** Custom fields keyed by MailBluster field merge tag. */
        fields?: Record<string, unknown>;
        /**
         * The lead's email address.
         * @format email
         */
        email?: string;
        /** The lead's timezone. */
        timezone?: string;
        /** The lead's IP address. */
        ipAddress?: string;
        /** Whether the lead is subscribed. */
        subscribed?: boolean;
        /** The lead's opt-in status, or null when unavailable. */
        optInStatus?: string | null;
        /** Additional MailBluster lead metadata such as company, role, source, or geolocation values. */
        meta?: Record<string, unknown>;
        /** MailBluster tags associated with the lead. */
        tags?: Array<string>;
        /**
         * The timestamp when the lead was created.
         * @format date-time
         */
        createdAt?: string;
        /**
         * The timestamp when the lead was last updated.
         * @format date-time
         */
        updatedAt?: string;
        [key: string]: unknown;
      };
    };
    /** List all MailBluster custom fields configured for the current brand. */
    "mailbluster.list_fields": {
      input: Record<string, never>;
      output: {
        /** The custom fields returned by MailBluster. */
        fields: Array<{
          /** The MailBluster field identifier. */
          id?: number;
          /** The display label of the custom field. */
          fieldLabel?: string;
          /** The merge tag used as the custom field key. */
          fieldMergeTag?: string;
          /**
           * The timestamp when the field was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The timestamp when the field was last updated.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update one MailBluster lead by lead hash, including custom fields, metadata, subscription state, and tag changes. */
    "mailbluster.update_lead": {
      input: {
        /**
         * The MD5 hash of the lead email address to update.
         * @minLength 1
         */
        lead_hash: string;
        /**
         * The lead's first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The lead's last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * The lead's email address.
         * @format email
         */
        email?: string;
        /**
         * The lead's timezone, such as America/Los_Angeles.
         * @minLength 1
         */
        timezone?: string;
        /**
         * The lead's IP address.
         * @minLength 1
         */
        ipAddress?: string;
        /** Whether the lead should be subscribed. */
        subscribed?: boolean;
        /** Custom fields keyed by MailBluster field merge tag. */
        fields?: Record<string, unknown>;
        /** Additional MailBluster lead metadata such as company, role, source, or geolocation values. */
        meta?: Record<string, unknown>;
        /** MailBluster tags associated with the lead. */
        tags?: Array<string>;
        /** MailBluster tags associated with the lead. */
        addTags?: Array<string>;
        /** MailBluster tags associated with the lead. */
        removeTags?: Array<string>;
      };
      output: {
        /** The MailBluster response message. */
        message: string;
        /** A MailBluster lead object. */
        lead: {
          /** The MailBluster lead identifier. */
          id?: number;
          /** The lead's first name. */
          firstName?: string;
          /** The lead's last name. */
          lastName?: string;
          /** The lead's full name. */
          fullName?: string;
          /** Custom fields keyed by MailBluster field merge tag. */
          fields?: Record<string, unknown>;
          /**
           * The lead's email address.
           * @format email
           */
          email?: string;
          /** The lead's timezone. */
          timezone?: string;
          /** The lead's IP address. */
          ipAddress?: string;
          /** Whether the lead is subscribed. */
          subscribed?: boolean;
          /** The lead's opt-in status, or null when unavailable. */
          optInStatus?: string | null;
          /** Additional MailBluster lead metadata such as company, role, source, or geolocation values. */
          meta?: Record<string, unknown>;
          /** MailBluster tags associated with the lead. */
          tags?: Array<string>;
          /**
           * The timestamp when the lead was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The timestamp when the lead was last updated.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
