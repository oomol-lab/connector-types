import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Remove the current OAuth user's role connection data for a Discord application. */
    "discord.delete_my_application_role_connection": {
      input: {
        /**
         * The Discord application ID that owns the role connection.
         * @minLength 1
         */
        application_id: string;
      };
      output: {
        /** Whether Discord accepted the delete request. */
        success: boolean;
      };
    };
    /** Get entitlements for the current OAuth user under a Discord application. */
    "discord.get_current_user_application_entitlements": {
      input: {
        /**
         * The Discord application ID to query entitlements for.
         * @minLength 1
         */
        application_id: string;
        /** Whether to exclude entitlements that have already ended. */
        exclude_ended?: boolean;
        /** Whether to exclude entitlements marked as deleted. */
        exclude_deleted?: boolean;
      };
      output: {
        /** The entitlements visible to the current OAuth user. */
        entitlements: Array<{
          /** The unique identifier of the entitlement. */
          id: string;
          /** The SKU ID associated with the entitlement. */
          sku_id: string;
          /** The application ID the entitlement belongs to. */
          application_id: string;
          /** The type of the entitlement. */
          type: number;
          /** Whether the entitlement has been deleted. */
          deleted: boolean;
          /** The user ID who owns the entitlement. */
          user_id?: string;
          /** The guild ID the entitlement is granted to. */
          guild_id?: string;
          /** The start timestamp of the entitlement. */
          starts_at?: string;
          /** The end timestamp of the entitlement. */
          ends_at?: string;
          /** Whether the entitlement has been consumed. */
          consumed?: boolean;
          /** The promotion ID associated with the entitlement. */
          promotion_id?: string;
          /** The gift code flags for the entitlement. */
          gift_code_flags?: number;
          /** The subscription ID associated with the entitlement. */
          subscription_id?: string;
        }>;
      };
    };
    /** Get a Discord Gateway URL. */
    "discord.get_gateway": {
      input: Record<string, never>;
      output: {
        /** The WebSocket URL for connecting to the Discord Gateway. */
        url: string;
      };
    };
    /** Get a Discord guild template by code. */
    "discord.get_guild_template": {
      input: {
        /**
         * The guild template code.
         * @minLength 1
         */
        code: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a Discord guild widget as JSON. */
    "discord.get_guild_widget": {
      input: {
        /**
         * The guild ID whose widget should be fetched.
         * @minLength 1
         */
        guild_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a Discord guild widget PNG. */
    "discord.get_guild_widget_png": {
      input: {
        /**
         * The guild ID whose widget image should be fetched.
         * @minLength 1
         */
        guild_id: string;
        /** The visual style to use for the guild widget PNG. */
        style?: "shield" | "banner1" | "banner2" | "banner3" | "banner4";
      };
      output: {
        /** The suggested filename for the PNG widget image. */
        filename: string;
        /** The MIME type of the widget image. */
        mimeType: string;
        /** The size of the widget image in bytes. */
        sizeBytes: number;
        /** The Base64-encoded PNG widget bytes. */
        dataBase64: string;
      };
    };
    /** Get a Discord invite by code or URL. */
    "discord.get_invite": {
      input: {
        /**
         * The invite code or invite URL to resolve.
         * @minLength 1
         */
        invite_code: string;
        /** Whether to include approximate member and presence counts. */
        with_counts?: boolean;
        /** Whether to include expiration metadata in the invite response. */
        with_expiration?: boolean;
        /**
         * The scheduled event ID to include in the invite context.
         * @minLength 1
         */
        guild_scheduled_event_id?: string;
      };
      output: Record<string, unknown>;
    };
    /** Read the current OAuth user's role connection data for a Discord application. */
    "discord.get_my_application_role_connection": {
      input: {
        /**
         * The Discord application ID that owns the role connection.
         * @minLength 1
         */
        application_id: string;
      };
      output: {
        /** A Discord application role connection object for the current OAuth user. */
        role_connection: {
          /** The optional platform display name shown on the user's Discord profile. */
          platform_name?: string | null;
          /** Optional application role connection metadata values keyed by metadata field name. */
          metadata?: Record<string, string>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the current OAuth user's member record in a guild. */
    "discord.get_my_guild_member": {
      input: {
        /**
         * The guild ID to inspect membership for.
         * @minLength 1
         */
        guild_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the current OAuth2 authorization information. */
    "discord.get_my_oauth2_authorization": {
      input: Record<string, never>;
      output: {
        /** The authorized Discord application object. */
        application: Record<string, unknown>;
        /** The OAuth2 scopes granted to the token. */
        scopes: Array<string>;
        /** The token expiration timestamp. */
        expires: string;
        /** The OAuth user associated with the authorization, when returned. */
        user?: Record<string, unknown>;
      };
    };
    /** Get the current OAuth user profile. */
    "discord.get_my_user": {
      input: Record<string, never>;
      output: {
        /** The unique identifier of the user. */
        id: string;
        /** The username of the user. */
        username: string;
        /** The discriminator tag of the user. */
        discriminator: string;
        /** The public flags on the user account. */
        public_flags?: number;
        /** The flags on the user account. */
        flags?: number;
        /** The avatar hash of the user. */
        avatar?: string | null;
        /** The banner hash of the user. */
        banner?: string | null;
        /** Whether the user is a bot. */
        bot?: boolean;
        /** Whether the user is a system user. */
        system?: boolean;
        /** The locale of the user. */
        locale?: string;
        /** Whether the user's email is verified. */
        verified?: boolean;
        /** The email address of the user. */
        email?: string;
        /** The global display name of the user. */
        global_name?: string | null;
        /** Whether the user has multi-factor authentication enabled. */
        mfa_enabled?: boolean;
        /** The accent color of the user profile. */
        accent_color?: number | null;
        /** The type of Nitro subscription. */
        premium_type?: number | null;
        /** The avatar decoration data for the user. */
        avatar_decoration_data?: Record<string, unknown>;
      };
    };
    /** Get OpenID Connect userinfo for the current OAuth user. */
    "discord.get_openid_connect_userinfo": {
      input: Record<string, never>;
      output: {
        /** The subject identifier for the current user. */
        sub: string;
        /** The email address of the current user. */
        email?: string;
        /** Whether the email address has been verified. */
        email_verified?: boolean;
        /** The preferred username claim for the user. */
        preferred_username?: string;
        /** The nickname claim for the user. */
        nickname?: string;
        /** The profile picture URL for the user. */
        picture?: string;
        /** The locale claim for the user. */
        locale?: string;
      };
    };
    /** Get Discord OAuth2 public keys as JWKS. */
    "discord.get_public_keys": {
      input: Record<string, never>;
      output: {
        /** The public keys exposed by Discord's JWKS endpoint. */
        keys: Array<{
          /** The key type for this JWK. */
          kty: string;
          /** The key ID used to select this JWK. */
          kid: string;
          /** The RSA modulus for the public key. */
          n: string;
          /** The RSA public exponent for the key. */
          e: string;
          /** The signing algorithm intended for this key. */
          alg?: string;
          /** The intended public-key use, such as signature verification. */
          use?: string;
        }>;
      };
    };
    /** Get a Discord user. OAuth mode only supports @me in this provider. */
    "discord.get_user": {
      input: {
        /**
         * The user ID to fetch. Use `@me` for the current OAuth user.
         * @minLength 1
         */
        user_id: string;
      };
      output: {
        /** The unique identifier of the user. */
        id: string;
        /** The username of the user. */
        username: string;
        /** The discriminator tag of the user. */
        discriminator: string;
        /** The public flags on the user account. */
        public_flags?: number;
        /** The flags on the user account. */
        flags?: number;
        /** The avatar hash of the user. */
        avatar?: string | null;
        /** The banner hash of the user. */
        banner?: string | null;
        /** Whether the user is a bot. */
        bot?: boolean;
        /** Whether the user is a system user. */
        system?: boolean;
        /** The locale of the user. */
        locale?: string;
        /** Whether the user's email is verified. */
        verified?: boolean;
        /** The email address of the user. */
        email?: string;
        /** The global display name of the user. */
        global_name?: string | null;
        /** Whether the user has multi-factor authentication enabled. */
        mfa_enabled?: boolean;
        /** The accent color of the user profile. */
        accent_color?: number | null;
        /** The type of Nitro subscription. */
        premium_type?: number | null;
        /** The avatar decoration data for the user. */
        avatar_decoration_data?: Record<string, unknown>;
      };
    };
    /** List the current OAuth user's linked connections. */
    "discord.list_my_connections": {
      input: Record<string, never>;
      output: {
        /** The linked accounts connected to the current user. */
        connections: Array<{
          /** The unique identifier of the connection account. */
          id: string;
          /** The type of the connection service. */
          type: string;
          /** The display name of the connection. */
          name?: string;
          /** Whether the connection is verified. */
          verified: boolean;
          /** The visibility level of the connection. */
          visibility: number;
          /** Whether friend sync is enabled for this connection. */
          friend_sync: boolean;
          /** Whether activity is shown for this connection. */
          show_activity: boolean;
          /** Whether the connection is a two-way link. */
          two_way_link: boolean;
          /** Whether the connection has been revoked. */
          revoked?: boolean;
          /** The list of server integrations for this connection. */
          integrations?: Array<Record<string, unknown>>;
          /** The metadata visibility level of the connection. */
          metadata_visibility?: number;
        }>;
      };
    };
    /** List the current OAuth user's guilds. */
    "discord.list_my_guilds": {
      input: {
        /**
         * Return guilds after this guild ID in descending order.
         * @minLength 1
         */
        after?: string;
        /**
         * Return guilds before this guild ID in ascending order.
         * @minLength 1
         */
        before?: string;
        /**
         * The maximum number of guilds to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** Whether to include approximate member and presence counts. */
        with_counts?: boolean;
      };
      output: {
        /** The guilds visible to the current OAuth user. */
        guilds: Array<{
          /** The unique identifier of the guild. */
          id: string;
          /** The name of the guild. */
          name: string;
          /** Whether the current user owns the guild. */
          owner: boolean;
          /** The permissions bitfield for the current user in the guild. */
          permissions: string;
          /** The list of guild feature strings. */
          features: Array<string>;
          /** The icon hash of the guild. */
          icon?: string | null;
          /** The approximate number of members in the guild. */
          approximate_member_count?: number;
          /** The approximate number of online members in the guild. */
          approximate_presence_count?: number;
        }>;
      };
    };
    /** List Discord Nitro sticker packs. */
    "discord.list_sticker_packs": {
      input: Record<string, never>;
      output: {
        /** The Nitro sticker packs currently available. */
        sticker_packs: Array<{
          /** The unique identifier of the sticker pack. */
          id: string;
          /** The display name of the sticker pack. */
          name: string;
          /** The description of the sticker pack. */
          description: string;
          /** The SKU ID associated with the sticker pack. */
          sku_id: string;
          /** The stickers contained in the pack. */
          stickers: Array<{
            /** The unique identifier of the sticker. */
            id: string;
            /** The name of the sticker. */
            name: string;
            /** The autocomplete and related emoji tags for the sticker. */
            tags: string;
            /** The sticker type code. */
            type: number;
            /** The sticker format type code. */
            format_type: number;
            /** The sticker description. */
            description?: string | null;
            /** The sticker pack ID that contains this sticker. */
            pack_id?: string;
            /** The guild ID that owns this sticker. */
            guild_id?: string;
            /** Whether the sticker can currently be used. */
            available?: boolean;
            /** The sort order value for the sticker. */
            sort_value?: number;
          }>;
          /** The banner asset ID for the pack artwork. */
          banner_asset_id?: string;
          /** The sticker ID used as the pack cover. */
          cover_sticker_id?: string;
        }>;
      };
    };
    /** Resolve a Discord invite by code. */
    "discord.resolve_invite": {
      input: {
        /**
         * The invite code to resolve.
         * @minLength 1
         */
        code: string;
        /** Whether to include approximate member and presence counts. */
        with_counts?: boolean;
        /** Whether to include invite expiration metadata. */
        with_expiration?: boolean;
        /**
         * The scheduled event ID to attach to the invite context.
         * @minLength 1
         */
        guild_scheduled_event_id?: string;
      };
      output: Record<string, unknown>;
    };
    /** Set the current OAuth user's role connection platform fields or metadata for a Discord application. */
    "discord.update_my_application_role_connection": {
      input: {
        /**
         * The Discord application ID that owns the role connection.
         * @minLength 1
         */
        application_id: string;
        /**
         * A platform display name to show on the user's Discord profile.
         * @maxLength 50
         */
        platform_name?: string;
        /**
         * A platform username to show on the user's Discord profile.
         * @maxLength 100
         */
        platform_username?: string;
        /** Application role connection metadata values keyed by metadata field name. */
        metadata?: Record<string, string>;
      };
      output: {
        /** A Discord application role connection object for the current OAuth user. */
        role_connection: {
          /** The optional platform display name shown on the user's Discord profile. */
          platform_name?: string | null;
          /** Optional application role connection metadata values keyed by metadata field name. */
          metadata?: Record<string, string>;
          [key: string]: unknown;
        };
      };
    };
  }
}
