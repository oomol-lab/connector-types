import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a MotherDuck access token for a user. */
    "mother_duck.create_token": {
      input: {
        /**
         * The MotherDuck username within the organization.
         * @minLength 1
         * @maxLength 255
         */
        username: string;
        /**
         * The token display name.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
        /**
         * Token expiration in seconds.
         * @minimum 300
         * @maximum 31536000
         */
        ttl?: number;
        /** The MotherDuck token type. */
        token_type?: "read_write" | "read_scaling";
      };
      output: {
        /** A MotherDuck access token. */
        token: {
          /** The token UUID. */
          id?: string;
          /** The token display name. */
          name?: string;
          /** The newly-created token secret when MotherDuck returns it. */
          token?: string;
          /** The timestamp when the token expires. */
          expire_at?: string;
          /** The timestamp when the token was created. */
          created_ts?: string;
          /** Whether the token is read-only. */
          read_only?: boolean;
          /** The MotherDuck token type. */
          token_type?: "read_write" | "read_scaling";
          /** The raw token object returned by MotherDuck. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a MotherDuck member user in the organization. */
    "mother_duck.create_user": {
      input: {
        /**
         * The MotherDuck username within the organization.
         * @minLength 1
         * @maxLength 255
         */
        username: string;
      };
      output: {
        /**
         * The MotherDuck username within the organization.
         * @minLength 1
         * @maxLength 255
         */
        username: string;
      };
    };
    /** Invalidate a MotherDuck access token for a user. */
    "mother_duck.delete_token": {
      input: {
        /**
         * The MotherDuck username within the organization.
         * @minLength 1
         * @maxLength 255
         */
        username: string;
        /**
         * The MotherDuck access token identifier.
         * @minLength 1
         */
        token_id: string;
      };
      output: {
        /** Whether MotherDuck accepted the token deletion request. */
        success: boolean;
      };
    };
    /** Permanently delete a MotherDuck user and all of their data. */
    "mother_duck.delete_user": {
      input: {
        /**
         * The MotherDuck username within the organization.
         * @minLength 1
         * @maxLength 255
         */
        username: string;
      };
      output: {
        /**
         * The MotherDuck username within the organization.
         * @minLength 1
         * @maxLength 255
         */
        username: string;
      };
    };
    /** Retrieve MotherDuck Duckling configuration for a user. */
    "mother_duck.get_user_duckling_config": {
      input: {
        /**
         * The MotherDuck username within the organization.
         * @minLength 1
         * @maxLength 255
         */
        username: string;
      };
      output: {
        /** MotherDuck Duckling configuration for a user. */
        config: {
          /** MotherDuck read-write Duckling configuration. */
          read_write: {
            /** The MotherDuck instance size. */
            instance_size: "pulse" | "standard" | "jumbo" | "mega" | "giga";
            /**
             * Cooldown duration in seconds.
             * @minimum 60
             * @maximum 86400
             */
            cooldown_seconds?: number;
          };
          /** MotherDuck read-scaling Duckling configuration. */
          read_scaling: {
            /** The MotherDuck instance size. */
            instance_size: "pulse" | "standard" | "jumbo" | "mega" | "giga";
            /**
             * The number of read-scaling Ducklings.
             * @minimum 0
             * @maximum 64
             */
            flock_size: number;
            /**
             * Cooldown duration in seconds.
             * @minimum 60
             * @maximum 86400
             */
            cooldown_seconds?: number;
          };
        };
      };
    };
    /** List active MotherDuck accounts and their active Ducklings in the organization. */
    "mother_duck.list_active_accounts": {
      input: Record<string, never>;
      output: {
        /** The active accounts in the organization. */
        accounts: Array<{
          /**
           * The MotherDuck username within the organization.
           * @minLength 1
           * @maxLength 255
           */
          username: string;
          /** The active Ducklings for the account. */
          ducklings: Array<{
            /** The Duckling identifier, such as rw or rs.N. */
            id: string;
            /** The MotherDuck Duckling type. */
            type: "read_write" | "read_scaling";
            /**
             * The MotherDuck Duckling status, such as active or cooldown.
             * @minLength 1
             */
            status: string;
          }>;
        }>;
      };
    };
    /** List MotherDuck access tokens for a user. */
    "mother_duck.list_tokens": {
      input: {
        /**
         * The MotherDuck username within the organization.
         * @minLength 1
         * @maxLength 255
         */
        username: string;
      };
      output: {
        /** The user's MotherDuck access tokens. */
        tokens: Array<{
          /** The token UUID. */
          id?: string;
          /** The token display name. */
          name?: string;
          /** The newly-created token secret when MotherDuck returns it. */
          token?: string;
          /** The timestamp when the token expires. */
          expire_at?: string;
          /** The timestamp when the token was created. */
          created_ts?: string;
          /** Whether the token is read-only. */
          read_only?: boolean;
          /** The MotherDuck token type. */
          token_type?: "read_write" | "read_scaling";
          /** The raw token object returned by MotherDuck. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Set MotherDuck Duckling configuration for a user. */
    "mother_duck.set_user_duckling_config": {
      input: {
        /**
         * The MotherDuck username within the organization.
         * @minLength 1
         * @maxLength 255
         */
        username: string;
        /** MotherDuck Duckling configuration for a user. */
        config: {
          /** MotherDuck read-write Duckling configuration. */
          read_write: {
            /** The MotherDuck instance size. */
            instance_size: "pulse" | "standard" | "jumbo" | "mega" | "giga";
            /**
             * Cooldown duration in seconds.
             * @minimum 60
             * @maximum 86400
             */
            cooldown_seconds?: number;
          };
          /** MotherDuck read-scaling Duckling configuration. */
          read_scaling: {
            /** The MotherDuck instance size. */
            instance_size: "pulse" | "standard" | "jumbo" | "mega" | "giga";
            /**
             * The number of read-scaling Ducklings.
             * @minimum 0
             * @maximum 64
             */
            flock_size: number;
            /**
             * Cooldown duration in seconds.
             * @minimum 60
             * @maximum 86400
             */
            cooldown_seconds?: number;
          };
        };
      };
      output: {
        /** MotherDuck Duckling configuration for a user. */
        config: {
          /** MotherDuck read-write Duckling configuration. */
          read_write: {
            /** The MotherDuck instance size. */
            instance_size: "pulse" | "standard" | "jumbo" | "mega" | "giga";
            /**
             * Cooldown duration in seconds.
             * @minimum 60
             * @maximum 86400
             */
            cooldown_seconds?: number;
          };
          /** MotherDuck read-scaling Duckling configuration. */
          read_scaling: {
            /** The MotherDuck instance size. */
            instance_size: "pulse" | "standard" | "jumbo" | "mega" | "giga";
            /**
             * The number of read-scaling Ducklings.
             * @minimum 0
             * @maximum 64
             */
            flock_size: number;
            /**
             * Cooldown duration in seconds.
             * @minimum 60
             * @maximum 86400
             */
            cooldown_seconds?: number;
          };
        };
      };
    };
  }
}
