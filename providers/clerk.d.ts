import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Ban a Clerk user. */
    "clerk.ban_user": {
      input: {
        /**
         * The Clerk user ID.
         * @minLength 1
         */
        user_id: string;
      };
      output: {
        /** A Clerk user object. */
        user: {
          /**
           * The Clerk user ID.
           * @minLength 1
           */
          id?: string;
          /** The Clerk object type. */
          object?: string;
          /** The user's username when present. */
          username?: string | null;
          /** The user's first name when present. */
          first_name?: string | null;
          /** The user's last name when present. */
          last_name?: string | null;
          /** The user's image URL when present. */
          image_url?: string | null;
          /** Whether the user has an image. */
          has_image?: boolean;
          /** The primary email address ID. */
          primary_email_address_id?: string | null;
          /** The primary phone number ID. */
          primary_phone_number_id?: string | null;
          /** The primary Web3 wallet ID. */
          primary_web3_wallet_id?: string | null;
          /** Whether password authentication is enabled. */
          password_enabled?: boolean;
          /** Whether two-factor authentication is enabled. */
          two_factor_enabled?: boolean;
          /** Whether TOTP is enabled. */
          totp_enabled?: boolean;
          /** Whether backup codes are enabled. */
          backup_code_enabled?: boolean;
          /** Email addresses attached to the user. */
          email_addresses?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Phone numbers attached to the user. */
          phone_numbers?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Web3 wallets attached to the user. */
          web3_wallets?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** External accounts attached to the user. */
          external_accounts?: Array<{
            /** The external account ID. */
            id?: string;
            /** The external account object type. */
            object?: string;
            /** The external provider identifier. */
            provider?: string;
            /** The related identification ID. */
            identification_id?: string;
            /** The user ID reported by the external provider. */
            provider_user_id?: string;
            /** The provider email address when present. */
            email_address?: string | null;
            /** The provider first name when present. */
            first_name?: string | null;
            /** The provider last name when present. */
            last_name?: string | null;
            /** The provider image URL when present. */
            image_url?: string | null;
            /** The provider username when present. */
            username?: string | null;
            /** Arbitrary Clerk metadata stored on the user. */
            public_metadata?: Record<string, unknown>;
            /** The external account verification state returned by Clerk. */
            verification?: unknown;
            [key: string]: unknown;
          }>;
          /** Arbitrary Clerk metadata stored on the user. */
          public_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          private_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          unsafe_metadata?: Record<string, unknown>;
          /** Whether the user is banned. */
          banned?: boolean;
          /** Whether the user is locked. */
          locked?: boolean;
          /** Seconds until lockout expires when present. */
          lockout_expires_in_seconds?: number | null;
          /** Verification attempts remaining when present. */
          verification_attempts_remaining?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          last_sign_in_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          created_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          updated_at?: number | null;
          /** Whether the user can delete their own account. */
          delete_self_enabled?: boolean;
          /** Whether the user can create organizations. */
          create_organization_enabled?: boolean;
          /** The organization creation limit when present. */
          create_organizations_limit?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Count Clerk users with optional filters. */
    "clerk.count_users": {
      input: {
        /** A list of string values used by Clerk filters. */
        email_address?: Array<string>;
        /** A list of string values used by Clerk filters. */
        phone_number?: Array<string>;
        /** A list of string values used by Clerk filters. */
        username?: Array<string>;
        /** A list of string values used by Clerk filters. */
        user_id?: Array<string>;
        /** A list of string values used by Clerk filters. */
        external_id?: Array<string>;
        /**
         * A search query for Clerk users.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Total number of matching users reported by Clerk. */
        total_count: number;
      };
    };
    /** Create a Clerk user. */
    "clerk.create_user": {
      input: {
        /** Email addresses to add to the new user. */
        email_address?: Array<string>;
        /** Phone numbers to add to the new user. */
        phone_number?: Array<string>;
        /** Web3 wallet addresses to add to the new user. */
        web3_wallet?: Array<string>;
        /**
         * An external ID for the user.
         * @minLength 1
         */
        external_id?: string;
        /**
         * The user's first name.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The user's last name.
         * @minLength 1
         */
        last_name?: string;
        /**
         * The username attached to the Clerk user.
         * @minLength 1
         */
        username?: string;
        /**
         * The user's password.
         * @minLength 1
         */
        password?: string;
        /**
         * A password digest for the user.
         * @minLength 1
         */
        password_digest?: string;
        /**
         * The hashing algorithm used for password_digest.
         * @minLength 1
         */
        password_hasher?: string;
        /** Whether Clerk should skip password validation checks. */
        skip_password_checks?: boolean;
        /** Whether Clerk should allow creating the user without a password. */
        skip_password_requirement?: boolean;
        /**
         * The TOTP secret to add to the user.
         * @minLength 1
         */
        totp_secret?: string;
        /** Backup codes to add to the user. */
        backup_codes?: Array<string>;
        /** Arbitrary Clerk metadata stored on the user. */
        public_metadata?: Record<string, unknown>;
        /** Arbitrary Clerk metadata stored on the user. */
        private_metadata?: Record<string, unknown>;
        /** Arbitrary Clerk metadata stored on the user. */
        unsafe_metadata?: Record<string, unknown>;
        /**
         * The RFC3339 datetime to set as the user's creation time.
         * @minLength 1
         */
        created_at?: string;
      };
      output: {
        /** A Clerk user object. */
        user: {
          /**
           * The Clerk user ID.
           * @minLength 1
           */
          id?: string;
          /** The Clerk object type. */
          object?: string;
          /** The user's username when present. */
          username?: string | null;
          /** The user's first name when present. */
          first_name?: string | null;
          /** The user's last name when present. */
          last_name?: string | null;
          /** The user's image URL when present. */
          image_url?: string | null;
          /** Whether the user has an image. */
          has_image?: boolean;
          /** The primary email address ID. */
          primary_email_address_id?: string | null;
          /** The primary phone number ID. */
          primary_phone_number_id?: string | null;
          /** The primary Web3 wallet ID. */
          primary_web3_wallet_id?: string | null;
          /** Whether password authentication is enabled. */
          password_enabled?: boolean;
          /** Whether two-factor authentication is enabled. */
          two_factor_enabled?: boolean;
          /** Whether TOTP is enabled. */
          totp_enabled?: boolean;
          /** Whether backup codes are enabled. */
          backup_code_enabled?: boolean;
          /** Email addresses attached to the user. */
          email_addresses?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Phone numbers attached to the user. */
          phone_numbers?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Web3 wallets attached to the user. */
          web3_wallets?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** External accounts attached to the user. */
          external_accounts?: Array<{
            /** The external account ID. */
            id?: string;
            /** The external account object type. */
            object?: string;
            /** The external provider identifier. */
            provider?: string;
            /** The related identification ID. */
            identification_id?: string;
            /** The user ID reported by the external provider. */
            provider_user_id?: string;
            /** The provider email address when present. */
            email_address?: string | null;
            /** The provider first name when present. */
            first_name?: string | null;
            /** The provider last name when present. */
            last_name?: string | null;
            /** The provider image URL when present. */
            image_url?: string | null;
            /** The provider username when present. */
            username?: string | null;
            /** Arbitrary Clerk metadata stored on the user. */
            public_metadata?: Record<string, unknown>;
            /** The external account verification state returned by Clerk. */
            verification?: unknown;
            [key: string]: unknown;
          }>;
          /** Arbitrary Clerk metadata stored on the user. */
          public_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          private_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          unsafe_metadata?: Record<string, unknown>;
          /** Whether the user is banned. */
          banned?: boolean;
          /** Whether the user is locked. */
          locked?: boolean;
          /** Seconds until lockout expires when present. */
          lockout_expires_in_seconds?: number | null;
          /** Verification attempts remaining when present. */
          verification_attempts_remaining?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          last_sign_in_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          created_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          updated_at?: number | null;
          /** Whether the user can delete their own account. */
          delete_self_enabled?: boolean;
          /** Whether the user can create organizations. */
          create_organization_enabled?: boolean;
          /** The organization creation limit when present. */
          create_organizations_limit?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Clerk user. */
    "clerk.delete_user": {
      input: {
        /**
         * The Clerk user ID.
         * @minLength 1
         */
        user_id: string;
      };
      output: {
        /** A Clerk deleted object response. */
        deleted_object: {
          /** The deleted object ID. */
          id: string;
          /** The deleted object type. */
          object?: string;
          /** Whether the object was deleted. */
          deleted: boolean;
        };
      };
    };
    /** Retrieve a Clerk user by ID. */
    "clerk.get_user": {
      input: {
        /**
         * The Clerk user ID.
         * @minLength 1
         */
        user_id: string;
      };
      output: {
        /** A Clerk user object. */
        user: {
          /**
           * The Clerk user ID.
           * @minLength 1
           */
          id?: string;
          /** The Clerk object type. */
          object?: string;
          /** The user's username when present. */
          username?: string | null;
          /** The user's first name when present. */
          first_name?: string | null;
          /** The user's last name when present. */
          last_name?: string | null;
          /** The user's image URL when present. */
          image_url?: string | null;
          /** Whether the user has an image. */
          has_image?: boolean;
          /** The primary email address ID. */
          primary_email_address_id?: string | null;
          /** The primary phone number ID. */
          primary_phone_number_id?: string | null;
          /** The primary Web3 wallet ID. */
          primary_web3_wallet_id?: string | null;
          /** Whether password authentication is enabled. */
          password_enabled?: boolean;
          /** Whether two-factor authentication is enabled. */
          two_factor_enabled?: boolean;
          /** Whether TOTP is enabled. */
          totp_enabled?: boolean;
          /** Whether backup codes are enabled. */
          backup_code_enabled?: boolean;
          /** Email addresses attached to the user. */
          email_addresses?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Phone numbers attached to the user. */
          phone_numbers?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Web3 wallets attached to the user. */
          web3_wallets?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** External accounts attached to the user. */
          external_accounts?: Array<{
            /** The external account ID. */
            id?: string;
            /** The external account object type. */
            object?: string;
            /** The external provider identifier. */
            provider?: string;
            /** The related identification ID. */
            identification_id?: string;
            /** The user ID reported by the external provider. */
            provider_user_id?: string;
            /** The provider email address when present. */
            email_address?: string | null;
            /** The provider first name when present. */
            first_name?: string | null;
            /** The provider last name when present. */
            last_name?: string | null;
            /** The provider image URL when present. */
            image_url?: string | null;
            /** The provider username when present. */
            username?: string | null;
            /** Arbitrary Clerk metadata stored on the user. */
            public_metadata?: Record<string, unknown>;
            /** The external account verification state returned by Clerk. */
            verification?: unknown;
            [key: string]: unknown;
          }>;
          /** Arbitrary Clerk metadata stored on the user. */
          public_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          private_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          unsafe_metadata?: Record<string, unknown>;
          /** Whether the user is banned. */
          banned?: boolean;
          /** Whether the user is locked. */
          locked?: boolean;
          /** Seconds until lockout expires when present. */
          lockout_expires_in_seconds?: number | null;
          /** Verification attempts remaining when present. */
          verification_attempts_remaining?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          last_sign_in_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          created_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          updated_at?: number | null;
          /** Whether the user can delete their own account. */
          delete_self_enabled?: boolean;
          /** Whether the user can create organizations. */
          create_organization_enabled?: boolean;
          /** The organization creation limit when present. */
          create_organizations_limit?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Clerk users with optional filtering and pagination. */
    "clerk.list_users": {
      input: {
        /** A list of string values used by Clerk filters. */
        email_address?: Array<string>;
        /** A list of string values used by Clerk filters. */
        phone_number?: Array<string>;
        /** A list of string values used by Clerk filters. */
        username?: Array<string>;
        /** A list of string values used by Clerk filters. */
        user_id?: Array<string>;
        /** A list of string values used by Clerk filters. */
        external_id?: Array<string>;
        /**
         * A search query for Clerk users.
         * @minLength 1
         */
        query?: string;
        /**
         * The Clerk order field, such as -created_at.
         * @minLength 1
         */
        order_by?: string;
        /**
         * Maximum number of users to return.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Number of users to skip before returning results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Clerk users returned by the list request. */
        users: Array<{
          /**
           * The Clerk user ID.
           * @minLength 1
           */
          id?: string;
          /** The Clerk object type. */
          object?: string;
          /** The user's username when present. */
          username?: string | null;
          /** The user's first name when present. */
          first_name?: string | null;
          /** The user's last name when present. */
          last_name?: string | null;
          /** The user's image URL when present. */
          image_url?: string | null;
          /** Whether the user has an image. */
          has_image?: boolean;
          /** The primary email address ID. */
          primary_email_address_id?: string | null;
          /** The primary phone number ID. */
          primary_phone_number_id?: string | null;
          /** The primary Web3 wallet ID. */
          primary_web3_wallet_id?: string | null;
          /** Whether password authentication is enabled. */
          password_enabled?: boolean;
          /** Whether two-factor authentication is enabled. */
          two_factor_enabled?: boolean;
          /** Whether TOTP is enabled. */
          totp_enabled?: boolean;
          /** Whether backup codes are enabled. */
          backup_code_enabled?: boolean;
          /** Email addresses attached to the user. */
          email_addresses?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Phone numbers attached to the user. */
          phone_numbers?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Web3 wallets attached to the user. */
          web3_wallets?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** External accounts attached to the user. */
          external_accounts?: Array<{
            /** The external account ID. */
            id?: string;
            /** The external account object type. */
            object?: string;
            /** The external provider identifier. */
            provider?: string;
            /** The related identification ID. */
            identification_id?: string;
            /** The user ID reported by the external provider. */
            provider_user_id?: string;
            /** The provider email address when present. */
            email_address?: string | null;
            /** The provider first name when present. */
            first_name?: string | null;
            /** The provider last name when present. */
            last_name?: string | null;
            /** The provider image URL when present. */
            image_url?: string | null;
            /** The provider username when present. */
            username?: string | null;
            /** Arbitrary Clerk metadata stored on the user. */
            public_metadata?: Record<string, unknown>;
            /** The external account verification state returned by Clerk. */
            verification?: unknown;
            [key: string]: unknown;
          }>;
          /** Arbitrary Clerk metadata stored on the user. */
          public_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          private_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          unsafe_metadata?: Record<string, unknown>;
          /** Whether the user is banned. */
          banned?: boolean;
          /** Whether the user is locked. */
          locked?: boolean;
          /** Seconds until lockout expires when present. */
          lockout_expires_in_seconds?: number | null;
          /** Verification attempts remaining when present. */
          verification_attempts_remaining?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          last_sign_in_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          created_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          updated_at?: number | null;
          /** Whether the user can delete their own account. */
          delete_self_enabled?: boolean;
          /** Whether the user can create organizations. */
          create_organization_enabled?: boolean;
          /** The organization creation limit when present. */
          create_organizations_limit?: number | null;
          [key: string]: unknown;
        }>;
        /** Total number of matching users reported by Clerk. */
        total_count: number;
      };
    };
    /** Lock a Clerk user. */
    "clerk.lock_user": {
      input: {
        /**
         * The Clerk user ID.
         * @minLength 1
         */
        user_id: string;
      };
      output: {
        /** A Clerk user object. */
        user: {
          /**
           * The Clerk user ID.
           * @minLength 1
           */
          id?: string;
          /** The Clerk object type. */
          object?: string;
          /** The user's username when present. */
          username?: string | null;
          /** The user's first name when present. */
          first_name?: string | null;
          /** The user's last name when present. */
          last_name?: string | null;
          /** The user's image URL when present. */
          image_url?: string | null;
          /** Whether the user has an image. */
          has_image?: boolean;
          /** The primary email address ID. */
          primary_email_address_id?: string | null;
          /** The primary phone number ID. */
          primary_phone_number_id?: string | null;
          /** The primary Web3 wallet ID. */
          primary_web3_wallet_id?: string | null;
          /** Whether password authentication is enabled. */
          password_enabled?: boolean;
          /** Whether two-factor authentication is enabled. */
          two_factor_enabled?: boolean;
          /** Whether TOTP is enabled. */
          totp_enabled?: boolean;
          /** Whether backup codes are enabled. */
          backup_code_enabled?: boolean;
          /** Email addresses attached to the user. */
          email_addresses?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Phone numbers attached to the user. */
          phone_numbers?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Web3 wallets attached to the user. */
          web3_wallets?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** External accounts attached to the user. */
          external_accounts?: Array<{
            /** The external account ID. */
            id?: string;
            /** The external account object type. */
            object?: string;
            /** The external provider identifier. */
            provider?: string;
            /** The related identification ID. */
            identification_id?: string;
            /** The user ID reported by the external provider. */
            provider_user_id?: string;
            /** The provider email address when present. */
            email_address?: string | null;
            /** The provider first name when present. */
            first_name?: string | null;
            /** The provider last name when present. */
            last_name?: string | null;
            /** The provider image URL when present. */
            image_url?: string | null;
            /** The provider username when present. */
            username?: string | null;
            /** Arbitrary Clerk metadata stored on the user. */
            public_metadata?: Record<string, unknown>;
            /** The external account verification state returned by Clerk. */
            verification?: unknown;
            [key: string]: unknown;
          }>;
          /** Arbitrary Clerk metadata stored on the user. */
          public_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          private_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          unsafe_metadata?: Record<string, unknown>;
          /** Whether the user is banned. */
          banned?: boolean;
          /** Whether the user is locked. */
          locked?: boolean;
          /** Seconds until lockout expires when present. */
          lockout_expires_in_seconds?: number | null;
          /** Verification attempts remaining when present. */
          verification_attempts_remaining?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          last_sign_in_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          created_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          updated_at?: number | null;
          /** Whether the user can delete their own account. */
          delete_self_enabled?: boolean;
          /** Whether the user can create organizations. */
          create_organization_enabled?: boolean;
          /** The organization creation limit when present. */
          create_organizations_limit?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Unban a Clerk user. */
    "clerk.unban_user": {
      input: {
        /**
         * The Clerk user ID.
         * @minLength 1
         */
        user_id: string;
      };
      output: {
        /** A Clerk user object. */
        user: {
          /**
           * The Clerk user ID.
           * @minLength 1
           */
          id?: string;
          /** The Clerk object type. */
          object?: string;
          /** The user's username when present. */
          username?: string | null;
          /** The user's first name when present. */
          first_name?: string | null;
          /** The user's last name when present. */
          last_name?: string | null;
          /** The user's image URL when present. */
          image_url?: string | null;
          /** Whether the user has an image. */
          has_image?: boolean;
          /** The primary email address ID. */
          primary_email_address_id?: string | null;
          /** The primary phone number ID. */
          primary_phone_number_id?: string | null;
          /** The primary Web3 wallet ID. */
          primary_web3_wallet_id?: string | null;
          /** Whether password authentication is enabled. */
          password_enabled?: boolean;
          /** Whether two-factor authentication is enabled. */
          two_factor_enabled?: boolean;
          /** Whether TOTP is enabled. */
          totp_enabled?: boolean;
          /** Whether backup codes are enabled. */
          backup_code_enabled?: boolean;
          /** Email addresses attached to the user. */
          email_addresses?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Phone numbers attached to the user. */
          phone_numbers?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Web3 wallets attached to the user. */
          web3_wallets?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** External accounts attached to the user. */
          external_accounts?: Array<{
            /** The external account ID. */
            id?: string;
            /** The external account object type. */
            object?: string;
            /** The external provider identifier. */
            provider?: string;
            /** The related identification ID. */
            identification_id?: string;
            /** The user ID reported by the external provider. */
            provider_user_id?: string;
            /** The provider email address when present. */
            email_address?: string | null;
            /** The provider first name when present. */
            first_name?: string | null;
            /** The provider last name when present. */
            last_name?: string | null;
            /** The provider image URL when present. */
            image_url?: string | null;
            /** The provider username when present. */
            username?: string | null;
            /** Arbitrary Clerk metadata stored on the user. */
            public_metadata?: Record<string, unknown>;
            /** The external account verification state returned by Clerk. */
            verification?: unknown;
            [key: string]: unknown;
          }>;
          /** Arbitrary Clerk metadata stored on the user. */
          public_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          private_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          unsafe_metadata?: Record<string, unknown>;
          /** Whether the user is banned. */
          banned?: boolean;
          /** Whether the user is locked. */
          locked?: boolean;
          /** Seconds until lockout expires when present. */
          lockout_expires_in_seconds?: number | null;
          /** Verification attempts remaining when present. */
          verification_attempts_remaining?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          last_sign_in_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          created_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          updated_at?: number | null;
          /** Whether the user can delete their own account. */
          delete_self_enabled?: boolean;
          /** Whether the user can create organizations. */
          create_organization_enabled?: boolean;
          /** The organization creation limit when present. */
          create_organizations_limit?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Unlock a Clerk user. */
    "clerk.unlock_user": {
      input: {
        /**
         * The Clerk user ID.
         * @minLength 1
         */
        user_id: string;
      };
      output: {
        /** A Clerk user object. */
        user: {
          /**
           * The Clerk user ID.
           * @minLength 1
           */
          id?: string;
          /** The Clerk object type. */
          object?: string;
          /** The user's username when present. */
          username?: string | null;
          /** The user's first name when present. */
          first_name?: string | null;
          /** The user's last name when present. */
          last_name?: string | null;
          /** The user's image URL when present. */
          image_url?: string | null;
          /** Whether the user has an image. */
          has_image?: boolean;
          /** The primary email address ID. */
          primary_email_address_id?: string | null;
          /** The primary phone number ID. */
          primary_phone_number_id?: string | null;
          /** The primary Web3 wallet ID. */
          primary_web3_wallet_id?: string | null;
          /** Whether password authentication is enabled. */
          password_enabled?: boolean;
          /** Whether two-factor authentication is enabled. */
          two_factor_enabled?: boolean;
          /** Whether TOTP is enabled. */
          totp_enabled?: boolean;
          /** Whether backup codes are enabled. */
          backup_code_enabled?: boolean;
          /** Email addresses attached to the user. */
          email_addresses?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Phone numbers attached to the user. */
          phone_numbers?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Web3 wallets attached to the user. */
          web3_wallets?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** External accounts attached to the user. */
          external_accounts?: Array<{
            /** The external account ID. */
            id?: string;
            /** The external account object type. */
            object?: string;
            /** The external provider identifier. */
            provider?: string;
            /** The related identification ID. */
            identification_id?: string;
            /** The user ID reported by the external provider. */
            provider_user_id?: string;
            /** The provider email address when present. */
            email_address?: string | null;
            /** The provider first name when present. */
            first_name?: string | null;
            /** The provider last name when present. */
            last_name?: string | null;
            /** The provider image URL when present. */
            image_url?: string | null;
            /** The provider username when present. */
            username?: string | null;
            /** Arbitrary Clerk metadata stored on the user. */
            public_metadata?: Record<string, unknown>;
            /** The external account verification state returned by Clerk. */
            verification?: unknown;
            [key: string]: unknown;
          }>;
          /** Arbitrary Clerk metadata stored on the user. */
          public_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          private_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          unsafe_metadata?: Record<string, unknown>;
          /** Whether the user is banned. */
          banned?: boolean;
          /** Whether the user is locked. */
          locked?: boolean;
          /** Seconds until lockout expires when present. */
          lockout_expires_in_seconds?: number | null;
          /** Verification attempts remaining when present. */
          verification_attempts_remaining?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          last_sign_in_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          created_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          updated_at?: number | null;
          /** Whether the user can delete their own account. */
          delete_self_enabled?: boolean;
          /** Whether the user can create organizations. */
          create_organization_enabled?: boolean;
          /** The organization creation limit when present. */
          create_organizations_limit?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Clerk user. */
    "clerk.update_user": {
      input: {
        /**
         * The Clerk user ID.
         * @minLength 1
         */
        user_id: string;
        /**
         * The user's first name.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The user's last name.
         * @minLength 1
         */
        last_name?: string;
        /**
         * The primary email address ID.
         * @minLength 1
         */
        primary_email_address_id?: string;
        /**
         * The primary phone number ID.
         * @minLength 1
         */
        primary_phone_number_id?: string;
        /**
         * The primary Web3 wallet ID.
         * @minLength 1
         */
        primary_web3_wallet_id?: string;
        /**
         * The username attached to the Clerk user.
         * @minLength 1
         */
        username?: string;
        /**
         * The user's password.
         * @minLength 1
         */
        password?: string;
        /**
         * A password digest for the user.
         * @minLength 1
         */
        password_digest?: string;
        /**
         * The hashing algorithm used for password_digest.
         * @minLength 1
         */
        password_hasher?: string;
        /** Whether Clerk should skip password validation checks. */
        skip_password_checks?: boolean;
        /** Whether Clerk should allow the user without a password. */
        skip_password_requirement?: boolean;
        /** Whether Clerk should sign the user out of other sessions. */
        sign_out_of_other_sessions?: boolean;
        /**
         * The TOTP secret to add to the user.
         * @minLength 1
         */
        totp_secret?: string;
        /** Backup codes to add to the user. */
        backup_codes?: Array<string>;
        /** Arbitrary Clerk metadata stored on the user. */
        public_metadata?: Record<string, unknown>;
        /** Arbitrary Clerk metadata stored on the user. */
        private_metadata?: Record<string, unknown>;
        /** Arbitrary Clerk metadata stored on the user. */
        unsafe_metadata?: Record<string, unknown>;
      };
      output: {
        /** A Clerk user object. */
        user: {
          /**
           * The Clerk user ID.
           * @minLength 1
           */
          id?: string;
          /** The Clerk object type. */
          object?: string;
          /** The user's username when present. */
          username?: string | null;
          /** The user's first name when present. */
          first_name?: string | null;
          /** The user's last name when present. */
          last_name?: string | null;
          /** The user's image URL when present. */
          image_url?: string | null;
          /** Whether the user has an image. */
          has_image?: boolean;
          /** The primary email address ID. */
          primary_email_address_id?: string | null;
          /** The primary phone number ID. */
          primary_phone_number_id?: string | null;
          /** The primary Web3 wallet ID. */
          primary_web3_wallet_id?: string | null;
          /** Whether password authentication is enabled. */
          password_enabled?: boolean;
          /** Whether two-factor authentication is enabled. */
          two_factor_enabled?: boolean;
          /** Whether TOTP is enabled. */
          totp_enabled?: boolean;
          /** Whether backup codes are enabled. */
          backup_code_enabled?: boolean;
          /** Email addresses attached to the user. */
          email_addresses?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Phone numbers attached to the user. */
          phone_numbers?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Web3 wallets attached to the user. */
          web3_wallets?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** External accounts attached to the user. */
          external_accounts?: Array<{
            /** The external account ID. */
            id?: string;
            /** The external account object type. */
            object?: string;
            /** The external provider identifier. */
            provider?: string;
            /** The related identification ID. */
            identification_id?: string;
            /** The user ID reported by the external provider. */
            provider_user_id?: string;
            /** The provider email address when present. */
            email_address?: string | null;
            /** The provider first name when present. */
            first_name?: string | null;
            /** The provider last name when present. */
            last_name?: string | null;
            /** The provider image URL when present. */
            image_url?: string | null;
            /** The provider username when present. */
            username?: string | null;
            /** Arbitrary Clerk metadata stored on the user. */
            public_metadata?: Record<string, unknown>;
            /** The external account verification state returned by Clerk. */
            verification?: unknown;
            [key: string]: unknown;
          }>;
          /** Arbitrary Clerk metadata stored on the user. */
          public_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          private_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          unsafe_metadata?: Record<string, unknown>;
          /** Whether the user is banned. */
          banned?: boolean;
          /** Whether the user is locked. */
          locked?: boolean;
          /** Seconds until lockout expires when present. */
          lockout_expires_in_seconds?: number | null;
          /** Verification attempts remaining when present. */
          verification_attempts_remaining?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          last_sign_in_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          created_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          updated_at?: number | null;
          /** Whether the user can delete their own account. */
          delete_self_enabled?: boolean;
          /** Whether the user can create organizations. */
          create_organization_enabled?: boolean;
          /** The organization creation limit when present. */
          create_organizations_limit?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Deep merge metadata for a Clerk user. */
    "clerk.update_user_metadata": {
      input: {
        /**
         * The Clerk user ID.
         * @minLength 1
         */
        user_id: string;
        /** Arbitrary Clerk metadata stored on the user. */
        public_metadata?: Record<string, unknown>;
        /** Arbitrary Clerk metadata stored on the user. */
        private_metadata?: Record<string, unknown>;
        /** Arbitrary Clerk metadata stored on the user. */
        unsafe_metadata?: Record<string, unknown>;
      };
      output: {
        /** A Clerk user object. */
        user: {
          /**
           * The Clerk user ID.
           * @minLength 1
           */
          id?: string;
          /** The Clerk object type. */
          object?: string;
          /** The user's username when present. */
          username?: string | null;
          /** The user's first name when present. */
          first_name?: string | null;
          /** The user's last name when present. */
          last_name?: string | null;
          /** The user's image URL when present. */
          image_url?: string | null;
          /** Whether the user has an image. */
          has_image?: boolean;
          /** The primary email address ID. */
          primary_email_address_id?: string | null;
          /** The primary phone number ID. */
          primary_phone_number_id?: string | null;
          /** The primary Web3 wallet ID. */
          primary_web3_wallet_id?: string | null;
          /** Whether password authentication is enabled. */
          password_enabled?: boolean;
          /** Whether two-factor authentication is enabled. */
          two_factor_enabled?: boolean;
          /** Whether TOTP is enabled. */
          totp_enabled?: boolean;
          /** Whether backup codes are enabled. */
          backup_code_enabled?: boolean;
          /** Email addresses attached to the user. */
          email_addresses?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Phone numbers attached to the user. */
          phone_numbers?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** Web3 wallets attached to the user. */
          web3_wallets?: Array<{
            /** The identification ID. */
            id?: string;
            /** The identification object type. */
            object?: string;
            /** The email address value when present. */
            email_address?: string | null;
            /** The phone number value when present. */
            phone_number?: string | null;
            /** Whether the identifier is reserved. */
            reserved?: boolean;
            /** The verification state returned by Clerk. */
            verification?: unknown;
            /** External accounts linked to this identification. */
            linked_to?: Array<unknown>;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            created_at?: number | null;
            /** Unix timestamp in milliseconds as returned by Clerk. */
            updated_at?: number | null;
            [key: string]: unknown;
          }>;
          /** External accounts attached to the user. */
          external_accounts?: Array<{
            /** The external account ID. */
            id?: string;
            /** The external account object type. */
            object?: string;
            /** The external provider identifier. */
            provider?: string;
            /** The related identification ID. */
            identification_id?: string;
            /** The user ID reported by the external provider. */
            provider_user_id?: string;
            /** The provider email address when present. */
            email_address?: string | null;
            /** The provider first name when present. */
            first_name?: string | null;
            /** The provider last name when present. */
            last_name?: string | null;
            /** The provider image URL when present. */
            image_url?: string | null;
            /** The provider username when present. */
            username?: string | null;
            /** Arbitrary Clerk metadata stored on the user. */
            public_metadata?: Record<string, unknown>;
            /** The external account verification state returned by Clerk. */
            verification?: unknown;
            [key: string]: unknown;
          }>;
          /** Arbitrary Clerk metadata stored on the user. */
          public_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          private_metadata?: Record<string, unknown>;
          /** Arbitrary Clerk metadata stored on the user. */
          unsafe_metadata?: Record<string, unknown>;
          /** Whether the user is banned. */
          banned?: boolean;
          /** Whether the user is locked. */
          locked?: boolean;
          /** Seconds until lockout expires when present. */
          lockout_expires_in_seconds?: number | null;
          /** Verification attempts remaining when present. */
          verification_attempts_remaining?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          last_sign_in_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          created_at?: number | null;
          /** Unix timestamp in milliseconds as returned by Clerk. */
          updated_at?: number | null;
          /** Whether the user can delete their own account. */
          delete_self_enabled?: boolean;
          /** Whether the user can create organizations. */
          create_organization_enabled?: boolean;
          /** The organization creation limit when present. */
          create_organizations_limit?: number | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
