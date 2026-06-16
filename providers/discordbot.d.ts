import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a recipient to a group DM channel. */
    "discordbot.add_group_dm_user": {
      input: {
        /**
         * The group DM channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The user id.
         * @minLength 1
         */
        user_id: string;
        /**
         * The user access token.
         * @minLength 1
         */
        access_token: string;
        /**
         * The optional nickname.
         * @maxLength 32
         */
        nick?: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Add a user to a guild with a user access token. */
    "discordbot.add_guild_member": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The user id.
         * @minLength 1
         */
        user_id: string;
        /**
         * The user access token.
         * @minLength 1
         */
        access_token: string;
        /**
         * The nickname.
         * @maxLength 32
         */
        nick?: string;
        /** The role ids to assign. */
        roles?: Array<string>;
        /** Whether the member is muted. */
        mute?: boolean;
        /** Whether the member is deafened. */
        deaf?: boolean;
        /** The member flags. */
        flags?: number;
      };
      output: Record<string, unknown>;
    };
    /** Add a role to a guild member. */
    "discordbot.add_guild_member_role": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The user id.
         * @minLength 1
         */
        user_id: string;
        /**
         * The role id.
         * @minLength 1
         */
        role_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Add a reaction as the current bot user. */
    "discordbot.add_my_message_reaction": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The message id.
         * @minLength 1
         */
        message_id: string;
        /**
         * The emoji name.
         * @minLength 1
         */
        emoji_name: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Add a member to a thread. */
    "discordbot.add_thread_member": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The user id.
         * @minLength 1
         */
        user_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Ban a user from a guild. */
    "discordbot.ban_user_from_guild": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The user id.
         * @minLength 1
         */
        user_id: string;
        /**
         * The number of days of messages to delete.
         * @minimum 0
         * @maximum 7
         */
        delete_message_days?: number;
        /**
         * The number of seconds of messages to delete.
         * @minimum 0
         * @maximum 604800
         */
        delete_message_seconds?: number;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Bulk ban users from a guild. */
    "discordbot.bulk_ban_users_from_guild": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The user ids to ban.
         * @minItems 1
         * @maxItems 200
         */
        user_ids: Array<string>;
        /**
         * The number of seconds of messages to delete.
         * @minimum 0
         * @maximum 604800
         */
        delete_message_seconds?: number;
      };
      output: Record<string, unknown>;
    };
    /** Bulk delete messages in a Discord channel. */
    "discordbot.bulk_delete_messages": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The message ids to delete.
         * @minItems 2
         * @maxItems 100
         */
        messages: Array<string>;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Create a global application command. */
    "discordbot.create_application_command": {
      input: {
        /**
         * The application id.
         * @minLength 1
         */
        application_id: string;
        /**
         * The command name.
         * @minLength 1
         * @maxLength 32
         */
        name: string;
        /**
         * The command description.
         * @maxLength 100
         */
        description?: string;
        /** The command type. */
        type?: number;
        /** The command options. */
        options?: Array<Record<string, unknown>>;
        /** Whether the command is enabled in DMs. */
        dm_permission?: boolean;
        /** The default member permissions. */
        default_member_permissions?: string;
        /** The localized command names. */
        name_localizations?: Record<string, unknown>;
        /** The localized command descriptions. */
        description_localizations?: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Create a guild auto moderation rule. */
    "discordbot.create_auto_moderation_rule": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The rule name.
         * @minLength 1
         */
        name: string;
        /** The event type. */
        eventType: number;
        /** The trigger type. */
        triggerType: number;
        /**
         * The actions to execute.
         * @minItems 1
         * @maxItems 5
         */
        actions: Array<Record<string, unknown>>;
        /** Whether the rule is enabled. */
        enabled?: boolean;
        /** The exempt role ids. */
        exemptRoles?: Array<string>;
        /** The exempt channel ids. */
        exemptChannels?: Array<string>;
        /** The trigger metadata. */
        triggerMetadata?: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Create an invite for a Discord channel. */
    "discordbot.create_channel_invite": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The invite lifetime in seconds.
         * @minimum 0
         * @maximum 604800
         */
        max_age?: number;
        /**
         * The maximum invite uses.
         * @minimum 0
         * @maximum 100
         */
        max_uses?: number;
        /** Whether the invite is temporary. */
        temporary?: boolean;
        /** Whether the invite should be unique. */
        unique?: boolean;
        /** The optional target type. */
        target_type?: number;
        /**
         * The target user id.
         * @minLength 1
         */
        target_user_id?: string;
        /**
         * The target application id.
         * @minLength 1
         */
        target_application_id?: string;
      };
      output: Record<string, unknown>;
    };
    /** Create or fetch a DM channel with a recipient user. */
    "discordbot.create_dm": {
      input: {
        /**
         * The recipient user id.
         * @minLength 1
         */
        recipient_id: string;
      };
      output: {
        /** The channel id. */
        id: string;
        /** The channel type. */
        type: number;
        /** The channel name. */
        name?: string;
        /** The guild id that owns the channel. */
        guild_id?: string;
        /** The channel position. */
        position?: number;
        [key: string]: unknown;
      };
    };
    /** Create a guild with the platform bot token. */
    "discordbot.create_guild": {
      input: {
        /** The guild icon. */
        icon?: string;
        /**
         * The guild name.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
        /** The role payloads to seed the guild with. */
        roles?: Array<Record<string, unknown>>;
        /** The channel payloads to seed the guild with. */
        channels?: Array<Record<string, unknown>>;
        /** The verification level. */
        verification_level?: number;
      };
      output: Record<string, unknown>;
    };
    /** Create a guild-scoped application command. */
    "discordbot.create_guild_application_command": {
      input: {
        /**
         * The application id.
         * @minLength 1
         */
        application_id: string;
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The command name.
         * @minLength 1
         * @maxLength 32
         */
        name: string;
        /**
         * The command description.
         * @maxLength 100
         */
        description?: string;
        /** The command type. */
        type?: number;
        /** The command options. */
        options?: Array<Record<string, unknown>>;
        /** Whether the command is enabled in DMs. */
        dm_permission?: boolean;
        /** The default member permissions. */
        default_member_permissions?: string;
        /** The localized command names. */
        name_localizations?: Record<string, unknown>;
        /** The localized command descriptions. */
        description_localizations?: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Create a channel in a guild. */
    "discordbot.create_guild_channel": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The channel name.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
        /** The channel type. */
        type?: number;
        /** The channel topic. */
        topic?: string;
        /** The bitrate. */
        bitrate?: number;
        /** The user limit. */
        user_limit?: number;
        /** The slowmode delay in seconds. */
        rate_limit_per_user?: number;
        /** The channel position. */
        position?: number;
        /** The permission overwrites. */
        permission_overwrites?: Array<Record<string, unknown>>;
        /**
         * The parent channel id.
         * @minLength 1
         */
        parent_id?: string;
        /** Whether the channel is NSFW. */
        nsfw?: boolean;
        /** The RTC region. */
        rtc_region?: string;
        /** The video quality mode. */
        video_quality_mode?: number;
        /** The default auto-archive duration. */
        default_auto_archive_duration?: number;
        /** The default reaction emoji payload. */
        default_reaction_emoji?: Record<string, unknown>;
        /** The available forum tags. */
        available_tags?: Array<Record<string, unknown>>;
        /** The default sort order. */
        default_sort_order?: number;
        /** The default forum layout. */
        default_forum_layout?: number;
        /** The default thread slowmode delay in seconds. */
        default_thread_rate_limit_per_user?: number;
      };
      output: {
        /** The channel id. */
        id: string;
        /** The channel type. */
        type: number;
        /** The channel name. */
        name?: string;
        /** The guild id that owns the channel. */
        guild_id?: string;
        /** The channel position. */
        position?: number;
        [key: string]: unknown;
      };
    };
    /** Create a guild emoji. */
    "discordbot.create_guild_emoji": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The emoji name.
         * @minLength 1
         */
        name: string;
        /**
         * The base64 image data.
         * @minLength 1
         */
        image: string;
        /** The role ids allowed to use the emoji. */
        roles?: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Create a guild from a template with the platform bot token. */
    "discordbot.create_guild_from_template": {
      input: {
        /**
         * The template code.
         * @minLength 1
         */
        code: string;
        /**
         * The guild name.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
        /** The guild icon. */
        icon?: string;
      };
      output: Record<string, unknown>;
    };
    /** Create a role in a guild. */
    "discordbot.create_guild_role": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The role name.
         * @maxLength 100
         */
        name?: string;
        /** The role permissions. */
        permissions?: string;
        /** The role color. */
        color?: number;
        /** Whether the role is hoisted. */
        hoist?: boolean;
        /** Whether the role is mentionable. */
        mentionable?: boolean;
        /** The unicode emoji. */
        unicode_emoji?: string;
        /** The role icon. */
        icon?: string;
      };
      output: Record<string, unknown>;
    };
    /** Create a guild scheduled event. */
    "discordbot.create_guild_scheduled_event": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The scheduled event name.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
        /**
         * The optional channel id.
         * @minLength 1
         */
        channel_id?: string;
        /** The scheduled event description. */
        description?: string;
        /** The privacy level. */
        privacy_level?: number;
        /** The scheduled start time. */
        scheduled_start_time: string;
        /** The scheduled end time. */
        scheduled_end_time?: string;
        /** The entity type. */
        entity_type: number;
        /** The entity metadata. */
        entity_metadata?: Record<string, unknown>;
        /** The recurrence rule. */
        recurrence_rule?: Record<string, unknown>;
        /** The scheduled event image. */
        image?: string;
      };
      output: Record<string, unknown>;
    };
    /** Create a guild sticker from base64 file content. */
    "discordbot.create_guild_sticker": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /** The sticker file payload. */
        file: {
          /**
           * The file name.
           * @minLength 1
           */
          name: string;
          /**
           * The MIME type.
           * @minLength 1
           */
          mimeType: string;
          /**
           * The file contents encoded as base64.
           * @minLength 1
           */
          dataBase64: string;
        };
        /**
         * The sticker name.
         * @minLength 1
         * @maxLength 30
         */
        name: string;
        /**
         * The sticker tags.
         * @minLength 1
         */
        tags: string;
        /** The sticker description. */
        description?: string;
      };
      output: Record<string, unknown>;
    };
    /** Create a template for a guild. */
    "discordbot.create_guild_template": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The template name.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
        /** The template description. */
        description?: string;
      };
      output: Record<string, unknown>;
    };
    /** Create a Discord channel message with the platform bot token. */
    "discordbot.create_message": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The message content.
         * @maxLength 2000
         */
        content?: string;
        /**
         * The embeds to include.
         * @maxItems 10
         */
        embeds?: Array<Record<string, unknown>>;
        /**
         * The components to include.
         * @maxItems 5
         */
        components?: Array<Record<string, unknown>>;
        /**
         * The sticker ids to attach.
         * @maxItems 3
         */
        sticker_ids?: Array<string>;
        allowed_mentions?: {
          /**
           * The mention targets to parse automatically.
           * @maxItems 3
           */
          parse?: Array<"roles" | "users" | "everyone">;
          /** The role ids allowed to be mentioned. */
          roles?: Array<string>;
          /** The user ids allowed to be mentioned. */
          users?: Array<string>;
          /** Whether the replied user should be mentioned. */
          replied_user?: boolean;
          [key: string]: unknown;
        };
        message_reference?: {
          /**
           * The referenced message id.
           * @minLength 1
           */
          message_id?: string;
          /**
           * The referenced channel id.
           * @minLength 1
           */
          channel_id?: string;
          /**
           * The referenced guild id.
           * @minLength 1
           */
          guild_id?: string;
          /** Whether the request should fail if the reference does not exist. */
          fail_if_not_exists?: boolean;
          /** The reference type. */
          type?: number;
          [key: string]: unknown;
        };
        /** Whether the message is a text-to-speech message. */
        tts?: boolean;
        /** The message flags. */
        flags?: number;
        /** The message nonce. */
        nonce?: number | string;
        /** Whether nonce enforcement is enabled. */
        enforce_nonce?: boolean;
        /** The optional poll payload. */
        poll?: Record<string, unknown>;
        /** The optional shared client theme payload. */
        shared_client_theme?: Record<string, unknown>;
      };
      output: {
        /** The message id. */
        id: string;
        /** The channel id. */
        channel_id: string;
        /** The message content. */
        content?: string;
        [key: string]: unknown;
      };
    };
    /** Create a thread in a Discord channel. */
    "discordbot.create_thread": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The thread name.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
        /** The auto-archive duration. */
        auto_archive_duration?: number;
        /** The thread type. */
        type?: number;
        /** Whether non-moderators can invite other users. */
        invitable?: boolean;
        /**
         * The slowmode delay in seconds.
         * @minimum 0
         */
        rate_limit_per_user?: number;
        /** The applied forum tag ids. */
        applied_tags?: Array<string>;
        /** The starter message payload. */
        message?: Record<string, unknown>;
      };
      output: {
        /** The channel id. */
        id: string;
        /** The channel type. */
        type: number;
        /** The channel name. */
        name?: string;
        /** The guild id that owns the channel. */
        guild_id?: string;
        /** The channel position. */
        position?: number;
        [key: string]: unknown;
      };
    };
    /** Create a thread from a Discord message. */
    "discordbot.create_thread_from_message": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The message id.
         * @minLength 1
         */
        message_id: string;
        /**
         * The thread name.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
        /** The auto-archive duration. */
        auto_archive_duration?: number;
        /**
         * The slowmode delay in seconds.
         * @minimum 0
         */
        rate_limit_per_user?: number;
      };
      output: {
        /** The channel id. */
        id: string;
        /** The channel type. */
        type: number;
        /** The channel name. */
        name?: string;
        /** The guild id that owns the channel. */
        guild_id?: string;
        /** The channel position. */
        position?: number;
        [key: string]: unknown;
      };
    };
    /** Crosspost a message in an announcement channel. */
    "discordbot.crosspost_message": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The message id.
         * @minLength 1
         */
        message_id: string;
      };
      output: {
        /** The message id. */
        id: string;
        /** The channel id. */
        channel_id: string;
        /** The message content. */
        content?: string;
        [key: string]: unknown;
      };
    };
    /** Delete all reactions on a message. */
    "discordbot.delete_all_message_reactions": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The message id.
         * @minLength 1
         */
        message_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Delete all reactions for a specific emoji on a message. */
    "discordbot.delete_all_message_reactions_by_emoji": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The message id.
         * @minLength 1
         */
        message_id: string;
        /**
         * The emoji name.
         * @minLength 1
         */
        emoji_name: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Delete a global application command. */
    "discordbot.delete_application_command": {
      input: {
        /**
         * The application id.
         * @minLength 1
         */
        application_id: string;
        /**
         * The command id.
         * @minLength 1
         */
        command_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Delete an auto moderation rule. */
    "discordbot.delete_auto_moderation_rule": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The rule id.
         * @minLength 1
         */
        rule_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Delete a channel. */
    "discordbot.delete_channel": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
      };
      output: {
        /** The channel id. */
        id: string;
        /** The channel type. */
        type: number;
        /** The channel name. */
        name?: string;
        /** The guild id that owns the channel. */
        guild_id?: string;
        /** The channel position. */
        position?: number;
        [key: string]: unknown;
      };
    };
    /** Delete a channel permission overwrite. */
    "discordbot.delete_channel_permission_overwrite": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The overwrite id.
         * @minLength 1
         */
        overwrite_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Remove a recipient from a group DM channel. */
    "discordbot.delete_group_dm_user": {
      input: {
        /**
         * The group DM channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The user id.
         * @minLength 1
         */
        user_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Delete a guild owned by the platform bot. */
    "discordbot.delete_guild": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Delete a guild-scoped application command. */
    "discordbot.delete_guild_application_command": {
      input: {
        /**
         * The application id.
         * @minLength 1
         */
        application_id: string;
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The command id.
         * @minLength 1
         */
        command_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Delete a guild emoji. */
    "discordbot.delete_guild_emoji": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The emoji id.
         * @minLength 1
         */
        emoji_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Delete a guild integration. */
    "discordbot.delete_guild_integration": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The integration id.
         * @minLength 1
         */
        integration_id: string;
        /**
         * The optional audit log reason.
         * @minLength 1
         * @maxLength 512
         */
        reason?: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Delete a user from a guild. */
    "discordbot.delete_guild_member": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The user id.
         * @minLength 1
         */
        user_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Delete a role from a guild member. */
    "discordbot.delete_guild_member_role": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The user id.
         * @minLength 1
         */
        user_id: string;
        /**
         * The role id.
         * @minLength 1
         */
        role_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Delete a guild role. */
    "discordbot.delete_guild_role": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The role id.
         * @minLength 1
         */
        role_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Delete a guild scheduled event. */
    "discordbot.delete_guild_scheduled_event": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The scheduled event id.
         * @minLength 1
         */
        guild_scheduled_event_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Delete a guild sticker. */
    "discordbot.delete_guild_sticker": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The sticker id.
         * @minLength 1
         */
        sticker_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Delete a guild template. */
    "discordbot.delete_guild_template": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The template code.
         * @minLength 1
         */
        code: string;
      };
      output: Record<string, unknown>;
    };
    /** Delete a message in a Discord channel. */
    "discordbot.delete_message": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The message id.
         * @minLength 1
         */
        message_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Delete the current bot user's reaction on a message. */
    "discordbot.delete_my_message_reaction": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The message id.
         * @minLength 1
         */
        message_id: string;
        /**
         * The emoji name.
         * @minLength 1
         */
        emoji_name: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Delete a member from a thread. */
    "discordbot.delete_thread_member": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The user id.
         * @minLength 1
         */
        user_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Delete another user's reaction on a message. */
    "discordbot.delete_user_message_reaction": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The message id.
         * @minLength 1
         */
        message_id: string;
        /**
         * The emoji name.
         * @minLength 1
         */
        emoji_name: string;
        /**
         * The user id.
         * @minLength 1
         */
        user_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Follow an announcement channel into a target channel. */
    "discordbot.follow_channel": {
      input: {
        /**
         * The source channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The destination webhook channel id.
         * @minLength 1
         */
        webhook_channel_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get active threads for a guild. */
    "discordbot.get_active_guild_threads": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get an application by id. */
    "discordbot.get_application": {
      input: {
        /**
         * The application id.
         * @minLength 1
         */
        application_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a global application command. */
    "discordbot.get_application_command": {
      input: {
        /**
         * The application id.
         * @minLength 1
         */
        application_id: string;
        /**
         * The command id.
         * @minLength 1
         */
        command_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get application role connection metadata. */
    "discordbot.get_application_role_connections_metadata": {
      input: {
        /**
         * The application id.
         * @minLength 1
         */
        application_id: string;
      };
      output: Array<Record<string, unknown>>;
    };
    /** Get the current user's application role connection. */
    "discordbot.get_application_user_role_connection": {
      input: {
        /**
         * The application id.
         * @minLength 1
         */
        application_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get an auto moderation rule. */
    "discordbot.get_auto_moderation_rule": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The rule id.
         * @minLength 1
         */
        rule_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get gateway connection info for the platform bot. */
    "discordbot.get_bot_gateway": {
      input: Record<string, never>;
      output: {
        /** The gateway URL. */
        url: string;
        /** The recommended shard count. */
        shards: number;
        /** The gateway session start limit. */
        session_start_limit: {
          /** The total allowed session starts. */
          total: number;
          /** The remaining session starts. */
          remaining: number;
          /** The reset delay in milliseconds. */
          reset_after: number;
          /** The maximum concurrent session starts. */
          max_concurrency: number;
        };
      };
    };
    /** Get a channel by id. */
    "discordbot.get_channel": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
      };
      output: {
        /** The channel id. */
        id: string;
        /** The channel type. */
        type: number;
        /** The channel name. */
        name?: string;
        /** The guild id that owns the channel. */
        guild_id?: string;
        /** The channel position. */
        position?: number;
        [key: string]: unknown;
      };
    };
    /** Get the public Discord gateway URL. */
    "discordbot.get_gateway": {
      input: Record<string, never>;
      output: {
        /** The public gateway URL. */
        url: string;
      };
    };
    /** Get a guild by id using the platform bot token. */
    "discordbot.get_guild": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /** Whether to include approximate counts. */
        with_counts?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Get a guild-scoped application command. */
    "discordbot.get_guild_application_command": {
      input: {
        /**
         * The application id.
         * @minLength 1
         */
        application_id: string;
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The command id.
         * @minLength 1
         */
        command_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get guild application command permissions. */
    "discordbot.get_guild_application_command_permissions": {
      input: {
        /**
         * The application id.
         * @minLength 1
         */
        application_id: string;
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The command id.
         * @minLength 1
         */
        command_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a specific guild ban by user id. */
    "discordbot.get_guild_ban": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The user id.
         * @minLength 1
         */
        user_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a guild emoji by id. */
    "discordbot.get_guild_emoji": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The emoji id.
         * @minLength 1
         */
        emoji_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a guild member by guild id and user id. */
    "discordbot.get_guild_member": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The user id.
         * @minLength 1
         */
        user_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the preview for a discoverable guild. */
    "discordbot.get_guild_preview": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a guild scheduled event. */
    "discordbot.get_guild_scheduled_event": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The scheduled event id.
         * @minLength 1
         */
        guild_scheduled_event_id: string;
        /** Whether to include user counts. */
        with_user_count?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Get a guild sticker by id. */
    "discordbot.get_guild_sticker": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The sticker id.
         * @minLength 1
         */
        sticker_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a guild template by code. */
    "discordbot.get_guild_template": {
      input: {
        /**
         * The template code.
         * @minLength 1
         */
        code: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the vanity invite for a guild. */
    "discordbot.get_guild_vanity_url": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a guild welcome screen. */
    "discordbot.get_guild_welcome_screen": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the public guild widget JSON. */
    "discordbot.get_guild_widget": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the public guild widget PNG. */
    "discordbot.get_guild_widget_png": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The widget style.
         * @minLength 1
         */
        style?: string;
      };
      output: {
        /** The file name. */
        filename: string;
        /** The MIME type. */
        mimeType: string;
        /** The file size in bytes. */
        sizeBytes: number;
        /** The file contents encoded as base64. */
        dataBase64: string;
      };
    };
    /** Get guild widget settings. */
    "discordbot.get_guild_widget_settings": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get guild onboarding configuration. */
    "discordbot.get_guilds_onboarding": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a message by channel id and message id. */
    "discordbot.get_message": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The message id.
         * @minLength 1
         */
        message_id: string;
      };
      output: {
        /** The message id. */
        id: string;
        /** The channel id. */
        channel_id: string;
        /** The message content. */
        content?: string;
        [key: string]: unknown;
      };
    };
    /** Get the current platform bot application. */
    "discordbot.get_my_application": {
      input: Record<string, never>;
      output: {
        /** The application id. */
        id: string;
        /** The application name. */
        name: string;
        /** The application description. */
        description: string;
        /** Whether the bot is public. */
        bot_public: boolean;
        /** Whether the bot requires the code grant flow. */
        bot_require_code_grant: boolean;
        /** The application verify key. */
        verify_key: string;
        /** The webhook status. */
        event_webhooks_status: number;
        [key: string]: unknown;
      };
    };
    /** Get the current OAuth2 application information. */
    "discordbot.get_my_oauth2_application": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Get Discord OAuth2 public keys. */
    "discordbot.get_public_keys": {
      input: Record<string, never>;
      output: {
        /** The public keys returned by the API. */
        keys: Array<Record<string, unknown>>;
      };
    };
    /** Get a sticker by id. */
    "discordbot.get_sticker": {
      input: {
        /**
         * The sticker id.
         * @minLength 1
         */
        sticker_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a thread member by user id. */
    "discordbot.get_thread_member": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The user id.
         * @minLength 1
         */
        user_id: string;
        /** Whether to include the member payload. */
        with_member?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Get a user by id. */
    "discordbot.get_user": {
      input: {
        /**
         * The user id.
         * @minLength 1
         */
        user_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Resolve a guild or channel invite by code. */
    "discordbot.invite_resolve": {
      input: {
        /**
         * The invite code.
         * @minLength 1
         */
        code: string;
        /** Whether to include counts. */
        with_counts?: boolean;
        /**
         * The guild scheduled event id.
         * @minLength 1
         */
        guild_scheduled_event_id?: string;
      };
      output: Record<string, unknown>;
    };
    /** Revoke an invite by code. */
    "discordbot.invite_revoke": {
      input: {
        /**
         * The invite code.
         * @minLength 1
         */
        code: string;
      };
      output: Record<string, unknown>;
    };
    /** Join a thread as the current bot user. */
    "discordbot.join_thread": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Leave a guild as the current bot user. */
    "discordbot.leave_guild": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Leave a thread as the current bot user. */
    "discordbot.leave_thread": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** List global application commands. */
    "discordbot.list_application_commands": {
      input: {
        /**
         * The application id.
         * @minLength 1
         */
        application_id: string;
        /** Whether to include localizations. */
        with_localizations?: boolean;
      };
      output: {
        /** The command records. */
        commands: Array<Record<string, unknown>>;
      };
    };
    /** List auto moderation rules for a guild. */
    "discordbot.list_auto_moderation_rules": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: {
        /** The rule records. */
        rules: Array<Record<string, unknown>>;
      };
    };
    /** List invites for a channel. */
    "discordbot.list_channel_invites": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
      };
      output: {
        /** The invite records. */
        invites: Array<Record<string, unknown>>;
      };
    };
    /** List guild application command permissions. */
    "discordbot.list_guild_application_command_permissions": {
      input: {
        /**
         * The application id.
         * @minLength 1
         */
        application_id: string;
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: {
        /** The permission records. */
        permissions: Array<Record<string, unknown>>;
      };
    };
    /** List guild-scoped application commands. */
    "discordbot.list_guild_application_commands": {
      input: {
        /**
         * The application id.
         * @minLength 1
         */
        application_id: string;
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /** Whether to include localizations. */
        with_localizations?: boolean;
      };
      output: {
        /** The command records. */
        commands: Array<Record<string, unknown>>;
      };
    };
    /** List audit log entries for a guild. */
    "discordbot.list_guild_audit_log_entries": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The user id filter.
         * @minLength 1
         */
        user_id?: string;
        /**
         * The target id filter.
         * @minLength 1
         */
        target_id?: string;
        /** The audit log action type filter. */
        action_type?: number;
        /**
         * The entry id to start before.
         * @minLength 1
         */
        before?: string;
        /**
         * The entry id to start after.
         * @minLength 1
         */
        after?: string;
        /**
         * The maximum number of entries to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** List bans for a guild. */
    "discordbot.list_guild_bans": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The ban id to start before.
         * @minLength 1
         */
        before?: string;
        /**
         * The ban id to start after.
         * @minLength 1
         */
        after?: string;
        /**
         * The maximum number of bans to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The ban records. */
        bans: Array<Record<string, unknown>>;
      };
    };
    /** List channels in a guild. */
    "discordbot.list_guild_channels": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: {
        /** The channel summaries. */
        channels: Array<{
          /** The channel id. */
          id: string;
          /** The channel type. */
          type: number;
          /** The channel name. */
          name: string;
          /** The channel position. */
          position: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List emojis for a guild. */
    "discordbot.list_guild_emojis": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: {
        /** The emoji records. */
        emojis: Array<Record<string, unknown>>;
      };
    };
    /** List guild integrations. */
    "discordbot.list_guild_integrations": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: {
        /** The integration records. */
        integrations: Array<Record<string, unknown>>;
      };
    };
    /** List invites for a guild. */
    "discordbot.list_guild_invites": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: {
        /** The invite records. */
        invites: Array<Record<string, unknown>>;
      };
    };
    /** List guild members. */
    "discordbot.list_guild_members": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The maximum number of members to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The member id to start after.
         * @minLength 1
         */
        after?: string;
      };
      output: {
        /** The member records. */
        members: Array<Record<string, unknown>>;
      };
    };
    /** List roles in a guild. */
    "discordbot.list_guild_roles": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: {
        /** The role records. */
        roles: Array<Record<string, unknown>>;
      };
    };
    /** List users for a guild scheduled event. */
    "discordbot.list_guild_scheduled_event_users": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The scheduled event id.
         * @minLength 1
         */
        guild_scheduled_event_id: string;
        /** Whether to include member payloads. */
        with_member?: boolean;
        /**
         * The user id to start before.
         * @minLength 1
         */
        before?: string;
        /**
         * The user id to start after.
         * @minLength 1
         */
        after?: string;
        /**
         * The maximum number of users to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The scheduled event attendee records. */
        users: Array<Record<string, unknown>>;
      };
    };
    /** List scheduled events for a guild. */
    "discordbot.list_guild_scheduled_events": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /** Whether to include user counts. */
        with_user_count?: boolean;
      };
      output: {
        /** The scheduled event records. */
        events: Array<Record<string, unknown>>;
      };
    };
    /** List stickers for a guild. */
    "discordbot.list_guild_stickers": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: {
        /** The sticker records. */
        stickers: Array<Record<string, unknown>>;
      };
    };
    /** List templates for a guild. */
    "discordbot.list_guild_templates": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: {
        /** The template records. */
        templates: Array<Record<string, unknown>>;
      };
    };
    /** List voice regions for a guild. */
    "discordbot.list_guild_voice_regions": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
      };
      output: {
        /** The region records. */
        regions: Array<Record<string, unknown>>;
      };
    };
    /** List users who reacted to a message with a specific emoji. */
    "discordbot.list_message_reactions_by_emoji": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The message id.
         * @minLength 1
         */
        message_id: string;
        /**
         * The emoji name.
         * @minLength 1
         */
        emoji_name: string;
        /**
         * The user id to start listing after.
         * @minLength 1
         */
        after?: string;
        /**
         * The maximum number of users to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The user records. */
        users: Array<Record<string, unknown>>;
      };
    };
    /** List messages in a channel. */
    "discordbot.list_messages": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The message id to anchor around.
         * @minLength 1
         */
        around?: string;
        /**
         * The message id to fetch messages before.
         * @minLength 1
         */
        before?: string;
        /**
         * The message id to fetch messages after.
         * @minLength 1
         */
        after?: string;
        /**
         * The maximum number of messages to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The message records. */
        messages: Array<{
          /** The message id. */
          id: string;
          /** The channel id. */
          channel_id: string;
          /** The message content. */
          content?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List private archived threads joined by the current bot user. */
    "discordbot.list_my_private_archived_threads": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /** The thread id to start before. */
        before?: string;
        /**
         * The maximum number of threads to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** List pinned messages in a channel. */
    "discordbot.list_pinned_messages": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
      };
      output: {
        /** The pinned message records. */
        messages: Array<{
          /** The message id. */
          id: string;
          /** The channel id. */
          channel_id: string;
          /** The message content. */
          content?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List private archived threads in a channel. */
    "discordbot.list_private_archived_threads": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /** The thread id to start before. */
        before?: string;
        /**
         * The maximum number of threads to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** List public archived threads in a channel. */
    "discordbot.list_public_archived_threads": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /** The thread id to start before. */
        before?: string;
        /**
         * The maximum number of threads to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** List public sticker packs. */
    "discordbot.list_sticker_packs": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** List thread members. */
    "discordbot.list_thread_members": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /** Whether to include member payloads. */
        with_member?: boolean;
        /**
         * The member id to start after.
         * @minLength 1
         */
        after?: string;
        /**
         * The maximum number of thread members to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The thread member records. */
        members: Array<Record<string, unknown>>;
      };
    };
    /** List public voice regions. */
    "discordbot.list_voice_regions": {
      input: Record<string, never>;
      output: {
        /** The region records. */
        regions: Array<Record<string, unknown>>;
      };
    };
    /** Pin a message in a channel. */
    "discordbot.pin_message": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The message id.
         * @minLength 1
         */
        message_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Preview how many members would be pruned from a guild. */
    "discordbot.preview_prune_guild": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The inactivity window in days.
         * @minimum 1
         * @maximum 30
         */
        days?: number;
        /** The role ids to include in the prune. */
        include_roles?: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Prune inactive members from a guild. */
    "discordbot.prune_guild": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The inactivity window in days.
         * @minimum 1
         * @maximum 30
         */
        days?: number;
        /** The role ids to include in the prune. */
        include_roles?: Array<string>;
        /** Whether to compute the prune count. */
        compute_prune_count?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Update guild onboarding configuration. */
    "discordbot.put_guilds_onboarding": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /** The onboarding mode. */
        mode?: number;
        /** Whether onboarding is enabled. */
        enabled?: boolean;
        /** The onboarding prompts. */
        prompts?: Array<Record<string, unknown>>;
        /** The default channel ids. */
        default_channel_ids?: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Search guild members by query. */
    "discordbot.search_guild_members": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The search query.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of members to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The member records. */
        members: Array<Record<string, unknown>>;
      };
    };
    /** Create or update a channel permission overwrite. */
    "discordbot.set_channel_permission_overwrite": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The overwrite id.
         * @minLength 1
         */
        overwrite_id: string;
        /**
         * The overwrite target type.
         * @minimum 0
         * @maximum 1
         */
        type: number;
        /** The allowed permission bitset. */
        allow?: string;
        /** The denied permission bitset. */
        deny?: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Sync a guild template with the current guild state. */
    "discordbot.sync_guild_template": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The template code.
         * @minLength 1
         */
        code: string;
      };
      output: Record<string, unknown>;
    };
    /** Test the configured bot token against /users/@me. */
    "discordbot.test_auth": {
      input: Record<string, never>;
      output: {
        /** Whether authentication succeeded. */
        auth_ok: boolean;
        /** The HTTP status code returned by the test request. */
        status_code: number;
        /** The error body returned by the test request. */
        error_body?: string;
        [key: string]: unknown;
      };
    };
    /** Trigger the typing indicator in a channel. */
    "discordbot.trigger_typing_indicator": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Remove a guild ban for a user. */
    "discordbot.unban_user_from_guild": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The user id.
         * @minLength 1
         */
        user_id: string;
        /**
         * The optional audit log reason.
         * @minLength 1
         * @maxLength 512
         */
        reason?: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Unpin a message in a channel. */
    "discordbot.unpin_message": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The message id.
         * @minLength 1
         */
        message_id: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Update a global application command. */
    "discordbot.update_application_command": {
      input: {
        /**
         * The application id.
         * @minLength 1
         */
        application_id: string;
        /**
         * The command id.
         * @minLength 1
         */
        command_id: string;
        /**
         * The command name.
         * @minLength 1
         * @maxLength 32
         */
        name?: string;
        /**
         * The command description.
         * @maxLength 100
         */
        description?: string;
        /** The command options. */
        options?: Array<Record<string, unknown>>;
        /** Whether the command is enabled in DMs. */
        dm_permission?: boolean;
        /** The default member permissions. */
        default_member_permissions?: string;
        /** The localized command names. */
        name_localizations?: Record<string, unknown>;
        /** The localized command descriptions. */
        description_localizations?: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Update the current user's application role connection. */
    "discordbot.update_application_user_role_connection": {
      input: {
        /**
         * The application id.
         * @minLength 1
         */
        application_id: string;
        /**
         * The platform name.
         * @maxLength 50
         */
        platform_name?: string;
        /**
         * The platform username.
         * @maxLength 100
         */
        platform_username?: string;
        /** The role connection metadata. */
        metadata?: Record<string, string | number>;
      };
      output: Record<string, unknown>;
    };
    /** Update an auto moderation rule. */
    "discordbot.update_auto_moderation_rule": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The rule id.
         * @minLength 1
         */
        rule_id: string;
        /**
         * The rule name.
         * @minLength 1
         */
        name?: string;
        /** The event type. */
        eventType?: number;
        /** The trigger type. */
        triggerType?: number;
        /**
         * The actions to execute.
         * @minItems 1
         * @maxItems 5
         */
        actions?: Array<Record<string, unknown>>;
        /** Whether the rule is enabled. */
        enabled?: boolean;
        /** The exempt role ids. */
        exemptRoles?: Array<string>;
        /** The exempt channel ids. */
        exemptChannels?: Array<string>;
        /** The trigger metadata. */
        triggerMetadata?: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Update settings for an existing channel. */
    "discordbot.update_channel": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The channel name.
         * @minLength 1
         * @maxLength 100
         */
        name?: string;
        /** The channel type. */
        type?: number;
        /** The channel position. */
        position?: number;
        /** The channel topic. */
        topic?: string;
        /** Whether the channel is NSFW. */
        nsfw?: boolean;
        /**
         * The slowmode delay in seconds.
         * @minimum 0
         * @maximum 21600
         */
        rate_limit_per_user?: number;
        /** The bitrate. */
        bitrate?: number;
        /** The user limit. */
        user_limit?: number;
        /** The permission overwrites. */
        permission_overwrites?: Array<{
          /**
           * The target id.
           * @minLength 1
           */
          id: string;
          /** The overwrite target type. */
          type: number;
          /** The allowed permission bitset. */
          allow: string;
          /** The denied permission bitset. */
          deny: string;
          [key: string]: unknown;
        }>;
        /**
         * The parent channel id.
         * @minLength 1
         */
        parent_id?: string;
        /**
         * The RTC region.
         * @minLength 1
         */
        rtc_region?: string;
        /** The video quality mode. */
        video_quality_mode?: number;
        /** The default auto-archive duration. */
        default_auto_archive_duration?: number;
        /** The channel flags. */
        flags?: number;
        /** The available forum tags. */
        available_tags?: Array<{
          /**
           * The tag id.
           * @minLength 1
           */
          id?: string;
          /**
           * The tag name.
           * @minLength 1
           * @maxLength 20
           */
          name: string;
          /** Whether the tag is moderated. */
          moderated: boolean;
          /**
           * The optional emoji id.
           * @minLength 1
           */
          emoji_id?: string;
          /**
           * The optional emoji name.
           * @minLength 1
           */
          emoji_name?: string;
          [key: string]: unknown;
        }>;
        /** The default reaction emoji payload. */
        default_reaction_emoji?: {
          /**
           * The optional emoji id.
           * @minLength 1
           */
          emoji_id?: string;
          /**
           * The optional emoji name.
           * @minLength 1
           */
          emoji_name?: string;
          [key: string]: unknown;
        };
        /** The default sort order. */
        default_sort_order?: number;
        /** The default forum layout. */
        default_forum_layout?: number;
        /**
         * The default thread slowmode delay in seconds.
         * @minimum 0
         * @maximum 21600
         */
        default_thread_rate_limit_per_user?: number;
      };
      output: {
        /** The channel id. */
        id: string;
        /** The channel type. */
        type: number;
        /** The channel name. */
        name?: string;
        /** The guild id that owns the channel. */
        guild_id?: string;
        /** The channel position. */
        position?: number;
        [key: string]: unknown;
      };
    };
    /** Update guild settings. */
    "discordbot.update_guild": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /** The guild icon. */
        icon?: string;
        /**
         * The guild name.
         * @minLength 1
         * @maxLength 100
         */
        name?: string;
        /** The guild banner. */
        banner?: string;
        /** The guild region. */
        region?: string;
        /** The guild splash. */
        splash?: string;
        /** The guild feature flags. */
        features?: Array<string>;
        /**
         * The guild owner id.
         * @minLength 1
         */
        owner_id?: string;
        /** The AFK timeout in seconds. */
        afk_timeout?: number;
        /** The guild description. */
        description?: string;
        /** The guild home header. */
        home_header?: string;
        /**
         * The AFK channel id.
         * @minLength 1
         */
        afk_channel_id?: string;
        /** The discovery splash image. */
        discovery_splash?: string;
        /** The preferred locale. */
        preferred_locale?: string;
        /**
         * The rules channel id.
         * @minLength 1
         */
        rules_channel_id?: string;
        /**
         * The system channel id.
         * @minLength 1
         */
        system_channel_id?: string;
        /** The verification level. */
        verification_level?: number;
        /** The system channel flags. */
        system_channel_flags?: number;
        /** The explicit content filter level. */
        explicit_content_filter?: number;
        /**
         * The safety alerts channel id.
         * @minLength 1
         */
        safety_alerts_channel_id?: string;
        /**
         * The public updates channel id.
         * @minLength 1
         */
        public_updates_channel_id?: string;
        /** Whether the premium progress bar is enabled. */
        premium_progress_bar_enabled?: boolean;
        /** The default message notification level. */
        default_message_notifications?: number;
      };
      output: Record<string, unknown>;
    };
    /** Update a guild-scoped application command. */
    "discordbot.update_guild_application_command": {
      input: {
        /**
         * The application id.
         * @minLength 1
         */
        application_id: string;
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The command id.
         * @minLength 1
         */
        command_id: string;
        /**
         * The command name.
         * @minLength 1
         * @maxLength 32
         */
        name?: string;
        /**
         * The command description.
         * @maxLength 100
         */
        description?: string;
        /** The command options. */
        options?: Array<Record<string, unknown>>;
        /** Whether the command is enabled in DMs. */
        dm_permission?: boolean;
        /** The default member permissions. */
        default_member_permissions?: string;
        /** The localized command names. */
        name_localizations?: Record<string, unknown>;
        /** The localized command descriptions. */
        description_localizations?: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Update a guild emoji. */
    "discordbot.update_guild_emoji": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The emoji id.
         * @minLength 1
         */
        emoji_id: string;
        /**
         * The new emoji name.
         * @minLength 1
         */
        name?: string;
        /** The role ids allowed to use the emoji. */
        roles?: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Update a guild member. */
    "discordbot.update_guild_member": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The user id.
         * @minLength 1
         */
        user_id: string;
        /**
         * The new nickname.
         * @maxLength 32
         */
        nick?: string;
        /** The role ids to assign. */
        roles?: Array<string>;
        /** Whether the member is muted. */
        mute?: boolean;
        /** Whether the member is deafened. */
        deaf?: boolean;
        /**
         * The voice channel id.
         * @minLength 1
         */
        channel_id?: string;
        /** The communication timeout timestamp. */
        communication_disabled_until?: string;
        /** The member flags. */
        flags?: number;
      };
      output: Record<string, unknown>;
    };
    /** Update a guild role. */
    "discordbot.update_guild_role": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The role id.
         * @minLength 1
         */
        role_id: string;
        /**
         * The role name.
         * @maxLength 100
         */
        name?: string;
        /** The role permissions. */
        permissions?: string;
        /** The role color. */
        color?: number;
        /** Whether the role is hoisted. */
        hoist?: boolean;
        /** Whether the role is mentionable. */
        mentionable?: boolean;
        /** The unicode emoji. */
        unicode_emoji?: string;
        /** The role icon. */
        icon?: string;
        /** The role colors payload. */
        colors?: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Update a guild scheduled event. */
    "discordbot.update_guild_scheduled_event": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The scheduled event id.
         * @minLength 1
         */
        guild_scheduled_event_id: string;
        /**
         * The scheduled event name.
         * @minLength 1
         * @maxLength 100
         */
        name?: string;
        /**
         * The optional channel id.
         * @minLength 1
         */
        channel_id?: string;
        /** The scheduled event description. */
        description?: string;
        /** The privacy level. */
        privacy_level?: number;
        /** The scheduled start time. */
        scheduled_start_time?: string;
        /** The scheduled end time. */
        scheduled_end_time?: string;
        /** The entity type. */
        entity_type?: number;
        /** The entity metadata. */
        entity_metadata?: Record<string, unknown>;
        /** The recurrence rule. */
        recurrence_rule?: Record<string, unknown>;
        /** The scheduled event image. */
        image?: string;
        /** The scheduled event status. */
        status?: number;
      };
      output: Record<string, unknown>;
    };
    /** Update a guild sticker. */
    "discordbot.update_guild_sticker": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The sticker id.
         * @minLength 1
         */
        sticker_id: string;
        /**
         * The sticker name.
         * @minLength 1
         * @maxLength 30
         */
        name?: string;
        /**
         * The sticker tags.
         * @minLength 1
         */
        tags?: string;
        /** The sticker description. */
        description?: string;
      };
      output: Record<string, unknown>;
    };
    /** Update a guild template. */
    "discordbot.update_guild_template": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The template code.
         * @minLength 1
         */
        code: string;
        /**
         * The template name.
         * @minLength 1
         * @maxLength 100
         */
        name?: string;
        /** The template description. */
        description?: string;
      };
      output: Record<string, unknown>;
    };
    /** Update a guild welcome screen. */
    "discordbot.update_guild_welcome_screen": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /** Whether the welcome screen is enabled. */
        enabled?: boolean;
        /** The welcome screen description. */
        description?: string;
        /**
         * The welcome screen channels.
         * @maxItems 5
         */
        welcome_channels?: Array<{
          /**
           * The channel id.
           * @minLength 1
           */
          channel_id: string;
          /**
           * The channel description.
           * @minLength 1
           */
          description: string;
          /**
           * The optional emoji name.
           * @minLength 1
           */
          emoji_name?: string;
          /** The optional emoji id. */
          emoji_id?: string | null;
        }>;
      };
      output: Record<string, unknown>;
    };
    /** Update guild widget settings. */
    "discordbot.update_guild_widget_settings": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /** Whether the widget is enabled. */
        enabled?: boolean;
        /**
         * The widget channel id.
         * @minLength 1
         */
        channel_id?: string;
      };
      output: Record<string, unknown>;
    };
    /** Update a message in a Discord channel. */
    "discordbot.update_message": {
      input: {
        /**
         * The channel id.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The message id.
         * @minLength 1
         */
        message_id: string;
        /**
         * The new message content.
         * @maxLength 2000
         */
        content?: string;
        /**
         * The embeds to include.
         * @maxItems 10
         */
        embeds?: Array<Record<string, unknown>>;
        /**
         * The components to include.
         * @maxItems 5
         */
        components?: Array<Record<string, unknown>>;
        /**
         * The sticker ids to attach.
         * @maxItems 3
         */
        sticker_ids?: Array<string>;
        allowed_mentions?: {
          /**
           * The mention targets to parse automatically.
           * @maxItems 3
           */
          parse?: Array<"roles" | "users" | "everyone">;
          /** The role ids allowed to be mentioned. */
          roles?: Array<string>;
          /** The user ids allowed to be mentioned. */
          users?: Array<string>;
          /** Whether the replied user should be mentioned. */
          replied_user?: boolean;
          [key: string]: unknown;
        };
        /** The attachments to keep or replace. */
        attachments?: Array<Record<string, unknown>>;
        /** The message flags. */
        flags?: number;
      };
      output: {
        /** The message id. */
        id: string;
        /** The channel id. */
        channel_id: string;
        /** The message content. */
        content?: string;
        [key: string]: unknown;
      };
    };
    /** Update the current bot user's guild member profile. */
    "discordbot.update_my_guild_member": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The new nickname.
         * @maxLength 32
         */
        nick?: string;
      };
      output: Record<string, unknown>;
    };
    /** Update the current bot user's profile. */
    "discordbot.update_my_user": {
      input: {
        /**
         * The new username.
         * @minLength 2
         * @maxLength 32
         */
        username?: string;
        /** The new avatar image data or URL. */
        avatar?: string;
      };
      output: Record<string, unknown>;
    };
    /** Update the current bot user's voice state. */
    "discordbot.update_self_voice_state": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The voice channel id.
         * @minLength 1
         */
        channel_id?: string;
        /** Whether the user is suppressed. */
        suppress?: boolean;
        /** The request-to-speak timestamp. */
        request_to_speak_timestamp?: string;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
    /** Update another user's voice state. */
    "discordbot.update_voice_state": {
      input: {
        /**
         * The guild id.
         * @minLength 1
         */
        guild_id: string;
        /**
         * The user id.
         * @minLength 1
         */
        user_id: string;
        /**
         * The voice channel id.
         * @minLength 1
         */
        channel_id?: string;
        /** Whether the user is suppressed. */
        suppress?: boolean;
      };
      output: {
        /** The success flag. */
        success: true;
      };
    };
  }
}
