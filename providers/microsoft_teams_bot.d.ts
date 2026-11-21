import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Start a proactive one-on-one conversation with a user, or a new thread in a team's general channel, and optionally post a first message. */
    "microsoft_teams_bot.create_conversation": {
      input: {
        /**
         * Bot Connector service URL for the conversation, taken from the inbound activity the bot received. Falls back to the credential's default service URL.
         * @minLength 1
         */
        serviceUrl?: string;
        /**
         * Teams user ID (for example 29:...) to start a one-on-one conversation with; email and UPN are not supported. Omit when targeting a team.
         * @minLength 1
         */
        memberId?: string;
        /**
         * Teams team ID to start a new thread in the team's general channel. Requires text. Omit for a one-on-one chat.
         * @minLength 1
         */
        teamId?: string;
        /**
         * Tenant of the target user or team. Defaults to the credential's tenant.
         * @minLength 1
         */
        tenantId?: string;
        /**
         * Initial message text. Required when teamId is provided; optional for a one-on-one conversation.
         * @minLength 1
         */
        text?: string;
        /** How the text is rendered. Defaults to markdown. */
        textFormat?: "plain" | "markdown" | "xml";
      };
      output: {
        /** ID of the created conversation. */
        id: string;
        /** ID of the first message, when text was sent. */
        activityId?: string;
        /** Service URL to use for follow-up actions in this conversation. */
        serviceUrl?: string;
        [key: string]: unknown;
      };
    };
    /** Delete a message the bot previously sent. */
    "microsoft_teams_bot.delete_message": {
      input: {
        /**
         * Bot Connector service URL for the conversation, taken from the inbound activity the bot received. Falls back to the credential's default service URL.
         * @minLength 1
         */
        serviceUrl?: string;
        /**
         * Teams conversation ID, taken from an inbound activity or a created conversation.
         * @minLength 1
         */
        conversationId: string;
        /**
         * Numeric ID of a channel thread's root message. Routes the call into that thread instead of the channel's main conversation.
         * @minLength 1
         */
        threadId?: string;
        /**
         * ID of an existing activity in the conversation.
         * @minLength 1
         */
        activityId: string;
      };
      output: {
        /** Whether the Bot Connector accepted the deletion. */
        deleted: boolean;
      };
    };
    /** List one page of the members of a Teams conversation. */
    "microsoft_teams_bot.list_conversation_members": {
      input: {
        /**
         * Bot Connector service URL for the conversation, taken from the inbound activity the bot received. Falls back to the credential's default service URL.
         * @minLength 1
         */
        serviceUrl?: string;
        /**
         * Teams conversation ID, taken from an inbound activity or a created conversation.
         * @minLength 1
         */
        conversationId: string;
        /**
         * Members per page, from 50 to 500. Teams defaults to 200.
         * @minimum 50
         * @maximum 500
         */
        pageSize?: number;
        /**
         * Token from a previous page's continuationToken.
         * @minLength 1
         */
        continuationToken?: string;
      };
      output: {
        /** Members in this page. */
        members: Array<{
          /** Channel-specific account ID. */
          id: string;
          /** Account display name. */
          name?: string;
          /** Microsoft Entra object ID. */
          aadObjectId?: string;
          /** Email address. */
          email?: string;
          /** User principal name. */
          userPrincipalName?: string;
          /** Given name. */
          givenName?: string;
          /** Surname. */
          surname?: string;
          /** Microsoft Entra tenant ID. */
          tenantId?: string;
          [key: string]: unknown;
        }>;
        /** Token for the next page. Absent on the last page. */
        continuationToken?: string;
      };
    };
    /** List the channels of a team the bot is installed in. The Bot Connector cannot list the teams a bot is in: learn a team's ID from channelData.team.id on its activities, such as the conversationUpdate Teams sends when the bot is added to the team. */
    "microsoft_teams_bot.list_team_channels": {
      input: {
        /**
         * Bot Connector service URL for the conversation, taken from the inbound activity the bot received. Falls back to the credential's default service URL.
         * @minLength 1
         */
        serviceUrl?: string;
        /**
         * Teams team ID, taken from channelData.team.id on an activity from the team.
         * @minLength 1
         */
        teamId: string;
      };
      output: {
        /** Channels of the team. */
        channels: Array<{
          /** Channel ID, usable as conversationId. The General channel's ID equals the team ID. */
          id: string;
          /** Channel name. Teams returns no name for the General channel, so it is named General. */
          name: string;
        }>;
      };
    };
    /** Reply to an existing activity in a Teams conversation, with text, cards such as an Adaptive Card, or both. */
    "microsoft_teams_bot.reply_to_message": {
      input: {
        /**
         * Bot Connector service URL for the conversation, taken from the inbound activity the bot received. Falls back to the credential's default service URL.
         * @minLength 1
         */
        serviceUrl?: string;
        /**
         * Teams conversation ID, taken from an inbound activity or a created conversation.
         * @minLength 1
         */
        conversationId: string;
        /**
         * Numeric ID of a channel thread's root message. Routes the call into that thread instead of the channel's main conversation.
         * @minLength 1
         */
        threadId?: string;
        /**
         * ID of an existing activity in the conversation.
         * @minLength 1
         */
        activityId: string;
        /**
         * Message text. Optional when attachments are given.
         * @minLength 1
         */
        text?: string;
        /** How the text is rendered. Defaults to markdown. */
        textFormat?: "plain" | "markdown" | "xml";
        /**
         * Cards to attach. Teams splits a message with both text and cards into separate messages and returns an ID for only one, so put the text inside the card when the card will be updated later.
         * @minItems 1
         * @maxItems 10
         */
        attachments?: Array<{
          /** Card type. */
          contentType: "application/vnd.microsoft.card.adaptive" | "application/vnd.microsoft.card.hero" | "application/vnd.microsoft.card.thumbnail" | "application/vnd.microsoft.card.receipt" | "application/vnd.microsoft.card.signin" | "application/vnd.microsoft.card.oauth" | "application/vnd.microsoft.teams.card.o365connector" | "application/vnd.microsoft.teams.card.list";
          /** The card JSON as an object, such as an Adaptive Card. */
          content: Record<string, unknown>;
        }>;
        /** How several cards are shown. Defaults to list. */
        attachmentLayout?: "list" | "carousel";
      };
      output: {
        /** ID of the activity the Bot Connector created or changed. */
        id?: string;
        [key: string]: unknown;
      };
    };
    /** Send a new message from the bot into an existing Teams conversation, with text, cards such as an Adaptive Card, or both. */
    "microsoft_teams_bot.send_message": {
      input: {
        /**
         * Bot Connector service URL for the conversation, taken from the inbound activity the bot received. Falls back to the credential's default service URL.
         * @minLength 1
         */
        serviceUrl?: string;
        /**
         * Teams conversation ID, taken from an inbound activity or a created conversation.
         * @minLength 1
         */
        conversationId: string;
        /**
         * Numeric ID of a channel thread's root message. Routes the call into that thread instead of the channel's main conversation.
         * @minLength 1
         */
        threadId?: string;
        /**
         * Message text. Optional when attachments are given.
         * @minLength 1
         */
        text?: string;
        /** How the text is rendered. Defaults to markdown. */
        textFormat?: "plain" | "markdown" | "xml";
        /**
         * Cards to attach. Teams splits a message with both text and cards into separate messages and returns an ID for only one, so put the text inside the card when the card will be updated later.
         * @minItems 1
         * @maxItems 10
         */
        attachments?: Array<{
          /** Card type. */
          contentType: "application/vnd.microsoft.card.adaptive" | "application/vnd.microsoft.card.hero" | "application/vnd.microsoft.card.thumbnail" | "application/vnd.microsoft.card.receipt" | "application/vnd.microsoft.card.signin" | "application/vnd.microsoft.card.oauth" | "application/vnd.microsoft.teams.card.o365connector" | "application/vnd.microsoft.teams.card.list";
          /** The card JSON as an object, such as an Adaptive Card. */
          content: Record<string, unknown>;
        }>;
        /** How several cards are shown. Defaults to list. */
        attachmentLayout?: "list" | "carousel";
      };
      output: {
        /** ID of the activity the Bot Connector created or changed. */
        id?: string;
        [key: string]: unknown;
      };
    };
    /** Replace a message the bot previously sent. The new text and cards replace the old message entirely, so leaving out attachments removes its cards, for example to swap a card with buttons for one without. */
    "microsoft_teams_bot.update_message": {
      input: {
        /**
         * Bot Connector service URL for the conversation, taken from the inbound activity the bot received. Falls back to the credential's default service URL.
         * @minLength 1
         */
        serviceUrl?: string;
        /**
         * Teams conversation ID, taken from an inbound activity or a created conversation.
         * @minLength 1
         */
        conversationId: string;
        /**
         * Numeric ID of a channel thread's root message. Routes the call into that thread instead of the channel's main conversation.
         * @minLength 1
         */
        threadId?: string;
        /**
         * ID of an existing activity in the conversation.
         * @minLength 1
         */
        activityId: string;
        /**
         * Message text. Optional when attachments are given.
         * @minLength 1
         */
        text?: string;
        /** How the text is rendered. Defaults to markdown. */
        textFormat?: "plain" | "markdown" | "xml";
        /**
         * Cards to attach. Teams splits a message with both text and cards into separate messages and returns an ID for only one, so put the text inside the card when the card will be updated later.
         * @minItems 1
         * @maxItems 10
         */
        attachments?: Array<{
          /** Card type. */
          contentType: "application/vnd.microsoft.card.adaptive" | "application/vnd.microsoft.card.hero" | "application/vnd.microsoft.card.thumbnail" | "application/vnd.microsoft.card.receipt" | "application/vnd.microsoft.card.signin" | "application/vnd.microsoft.card.oauth" | "application/vnd.microsoft.teams.card.o365connector" | "application/vnd.microsoft.teams.card.list";
          /** The card JSON as an object, such as an Adaptive Card. */
          content: Record<string, unknown>;
        }>;
        /** How several cards are shown. Defaults to list. */
        attachmentLayout?: "list" | "carousel";
      };
      output: {
        /** ID of the activity the Bot Connector created or changed. */
        id?: string;
        [key: string]: unknown;
      };
    };
  }
}
