import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new BotStar bot. */
    "bot_star.create_bot": {
      input: {
        /**
         * The new bot name.
         * @minLength 1
         * @maxLength 250
         */
        name: string;
      };
      output: {
        /** A BotStar bot. */
        bot: {
          /** The BotStar bot ID. */
          id: string;
          /** The bot name. */
          name?: string;
          /** The BotStar team name associated with the bot. */
          team_name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create an attribute on a BotStar bot. */
    "bot_star.create_bot_attribute": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
        /** The BotStar environment target for mutation endpoints. */
        env?: "draft" | "draft,live";
        /**
         * The bot attribute name.
         * @minLength 1
         * @maxLength 250
         */
        name: string;
        /** The bot attribute data type. */
        data_type: "string" | "number" | "date";
        /** The bot attribute description. */
        desc?: string;
        /** A BotStar bot attribute value. */
        value?: string | number;
        /** Language-specific attribute values keyed by BotStar field name such as value_es. */
        localizedValues?: Record<string, string | number>;
      };
      output: {
        /** A BotStar bot attribute. */
        attribute: {
          /** The BotStar bot attribute ID. */
          id: string;
          /** The bot attribute name. */
          name: string;
          /** The BotStar bot attribute data type. */
          data_type: "string" | "number" | "date";
          /** The bot attribute description when returned. */
          desc?: string;
          /** The default bot attribute value. */
          value?: string | number;
          [key: string]: unknown;
        };
      };
    };
    /** Create a BotStar CMS entity. */
    "bot_star.create_cms_entity": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
        /** The BotStar environment target for mutation endpoints. */
        env?: "draft" | "draft,live";
        /**
         * The CMS entity name.
         * @minLength 1
         */
        name: string;
        /**
         * Fields to create with the CMS entity.
         * @minItems 1
         */
        fields?: Array<{
          /**
           * The unique BotStar field name.
           * @minLength 1
           */
          unique_name: string;
          /**
           * The CMS field display name.
           * @minLength 1
           */
          name: string;
          /**
           * The BotStar CMS field data type.
           * @minLength 1
           */
          data_type: string;
          /** Field options such as predefined_data or entity_id. */
          options?: Record<string, unknown>;
        }>;
      };
      output: {
        /** A BotStar CMS entity. */
        entity: {
          /** The BotStar CMS entity ID. */
          id: string;
          /** The CMS entity name. */
          name: string;
          /** The CMS entity fields returned by BotStar. */
          fields?: Array<{
            /** The unique BotStar field name. */
            unique_name?: string;
            /** The CMS field display name. */
            name?: string;
            /** The BotStar CMS field data type. */
            data_type?: string;
            /** Field options returned by BotStar when available. */
            options?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Create an item in a BotStar CMS entity. */
    "bot_star.create_cms_entity_item": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
        /**
         * The BotStar CMS entity ID.
         * @minLength 1
         */
        entityId: string;
        /** The BotStar environment target for mutation endpoints. */
        env?: "draft" | "draft,live";
        /**
         * The CMS entity item name.
         * @minLength 1
         */
        name: string;
        /** The BotStar CMS entity item status. */
        status?: "enabled" | "disabled";
        /** Dynamic CMS item field values keyed by BotStar field unique name, excluding name and status. */
        data?: Record<string, string | number | boolean | Array<string> | null>;
      };
      output: {
        /** A BotStar CMS entity item. */
        item: {
          /** The BotStar CMS entity item ID. */
          id: string;
          /** The CMS entity item name. */
          name: string;
          /** The BotStar CMS entity item status. */
          status?: "enabled" | "disabled";
          /** The BotStar CMS entity ID associated with the item. */
          entity_id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a custom user attribute field for a BotStar bot. */
    "bot_star.create_user_attribute": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
        /**
         * The custom user attribute field name.
         * @minLength 1
         */
        field_name: string;
        /** The custom user attribute type. */
        field_type: "string" | "number" | "date" | "boolean";
      };
      output: {
        /** A BotStar custom user attribute. */
        attribute: {
          /** The BotStar custom user attribute ID. */
          id: string;
          /** The custom user attribute field name. */
          field_name: string;
          /** The custom user attribute type. */
          field_type: "string" | "number" | "date" | "boolean";
          [key: string]: unknown;
        };
      };
    };
    /** Delete a BotStar bot attribute. */
    "bot_star.delete_bot_attribute": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
        /**
         * The BotStar bot attribute ID.
         * @minLength 1
         */
        attributeId: string;
        /** The BotStar environment target for mutation endpoints. */
        env?: "draft" | "draft,live";
      };
      output: {
        /** Whether BotStar accepted the request. */
        success: boolean;
        /** The status string returned by BotStar. */
        status: string;
      };
    };
    /** Delete a BotStar CMS entity. */
    "bot_star.delete_cms_entity": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
        /**
         * The BotStar CMS entity ID.
         * @minLength 1
         */
        entityId: string;
        /** The BotStar environment target for mutation endpoints. */
        env?: "draft" | "draft,live";
      };
      output: {
        /** Whether BotStar accepted the request. */
        success: boolean;
        /** The status string returned by BotStar. */
        status: string;
      };
    };
    /** Delete an item from a BotStar CMS entity. */
    "bot_star.delete_cms_entity_item": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
        /**
         * The BotStar CMS entity ID.
         * @minLength 1
         */
        entityId: string;
        /**
         * The BotStar CMS entity item ID.
         * @minLength 1
         */
        entityItemId: string;
        /** The BotStar environment target for mutation endpoints. */
        env?: "draft" | "draft,live";
      };
      output: {
        /** Whether BotStar accepted the request. */
        success: boolean;
        /** The status string returned by BotStar. */
        status: string;
      };
    };
    /** Get one BotStar bot by ID. */
    "bot_star.get_bot": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
      };
      output: {
        /** A BotStar bot. */
        bot: {
          /** The BotStar bot ID. */
          id: string;
          /** The bot name. */
          name?: string;
          /** The BotStar team name associated with the bot. */
          team_name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one BotStar CMS entity by ID. */
    "bot_star.get_cms_entity": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
        /**
         * The BotStar CMS entity ID.
         * @minLength 1
         */
        entityId: string;
        /** The BotStar environment to read or mutate. */
        env?: "draft" | "live";
      };
      output: {
        /** A BotStar CMS entity. */
        entity: {
          /** The BotStar CMS entity ID. */
          id: string;
          /** The CMS entity name. */
          name: string;
          /** The CMS entity fields returned by BotStar. */
          fields?: Array<{
            /** The unique BotStar field name. */
            unique_name?: string;
            /** The CMS field display name. */
            name?: string;
            /** The BotStar CMS field data type. */
            data_type?: string;
            /** Field options returned by BotStar when available. */
            options?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one item from a BotStar CMS entity. */
    "bot_star.get_cms_entity_item": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
        /**
         * The BotStar CMS entity ID.
         * @minLength 1
         */
        entityId: string;
        /**
         * The BotStar CMS entity item ID.
         * @minLength 1
         */
        entityItemId: string;
        /** The BotStar environment to read or mutate. */
        env?: "draft" | "live";
      };
      output: {
        /** A BotStar CMS entity item. */
        item: {
          /** The BotStar CMS entity item ID. */
          id: string;
          /** The CMS entity item name. */
          name: string;
          /** The BotStar CMS entity item status. */
          status?: "enabled" | "disabled";
          /** The BotStar CMS entity ID associated with the item. */
          entity_id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a BotStar audience user by bot ID and user ID. */
    "bot_star.get_user": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
        /**
         * The BotStar audience user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** A BotStar audience user. */
        user: {
          /** The BotStar user ID. */
          id?: string;
          /** The BotStar board ID associated with the user. */
          board_id?: string;
          /** The user's full name when available. */
          name?: string;
          /** The user's first name when available. */
          first_name?: string;
          /** The user's last name when available. */
          last_name?: string;
          /** The user's email address when available. */
          email?: string;
          /** The channel through which the user interacted. */
          channel?: string;
          /** The user's locale when available. */
          locale?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List attributes configured for a BotStar bot. */
    "bot_star.list_bot_attributes": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
        /** The BotStar environment to read or mutate. */
        env?: "draft" | "live";
      };
      output: {
        /** The bot attributes returned by BotStar. */
        attributes: Array<{
          /** The BotStar bot attribute ID. */
          id: string;
          /** The bot attribute name. */
          name: string;
          /** The BotStar bot attribute data type. */
          data_type: "string" | "number" | "date";
          /** The bot attribute description when returned. */
          desc?: string;
          /** The default bot attribute value. */
          value?: string | number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List bots available to the configured BotStar API token. */
    "bot_star.list_bots": {
      input: Record<string, never>;
      output: {
        /** The bots returned by BotStar. */
        bots: Array<{
          /** The BotStar bot ID. */
          id: string;
          /** The bot name. */
          name?: string;
          /** The BotStar team name associated with the bot. */
          team_name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List CMS entities configured for a BotStar bot. */
    "bot_star.list_cms_entities": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
        /** The BotStar environment to read or mutate. */
        env?: "draft" | "live";
      };
      output: {
        /** The CMS entities returned by BotStar. */
        entities: Array<{
          /** The BotStar CMS entity ID. */
          id: string;
          /** The CMS entity name. */
          name: string;
          /** The CMS entity fields returned by BotStar. */
          fields?: Array<{
            /** The unique BotStar field name. */
            unique_name?: string;
            /** The CMS field display name. */
            name?: string;
            /** The BotStar CMS field data type. */
            data_type?: string;
            /** Field options returned by BotStar when available. */
            options?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List items in a BotStar CMS entity. */
    "bot_star.list_cms_entity_items": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
        /**
         * The BotStar CMS entity ID.
         * @minLength 1
         */
        entityId: string;
        /** The BotStar environment to read or mutate. */
        env?: "draft" | "live";
        /**
         * The 1-based page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of items to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Filter CMS entity items by name.
         * @minLength 1
         */
        name?: string;
        /** The BotStar CMS entity item status. */
        status?: "enabled" | "disabled";
      };
      output: {
        /** The CMS entity items returned by BotStar. */
        items: Array<{
          /** The BotStar CMS entity item ID. */
          id: string;
          /** The CMS entity item name. */
          name: string;
          /** The BotStar CMS entity item status. */
          status?: "enabled" | "disabled";
          /** The BotStar CMS entity ID associated with the item. */
          entity_id?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Publish BotStar bot changes to the live environment. */
    "bot_star.publish_bot": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
      };
      output: {
        /** Whether BotStar accepted the request. */
        success: boolean;
        /** The status string returned by BotStar. */
        status: string;
      };
    };
    /** Update an existing BotStar bot attribute. */
    "bot_star.update_bot_attribute": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
        /**
         * The BotStar bot attribute ID.
         * @minLength 1
         */
        attributeId: string;
        /** The BotStar environment target for mutation endpoints. */
        env?: "draft" | "draft,live";
        /** The updated bot attribute description. */
        desc?: string;
        /** A BotStar bot attribute value. */
        value?: string | number;
        /** Language-specific attribute values keyed by BotStar field name such as value_es. */
        localizedValues?: Record<string, string | number>;
      };
      output: {
        /** The raw BotStar object returned by the Public API. */
        attribute: Record<string, unknown>;
      };
    };
    /** Update a BotStar CMS entity. */
    "bot_star.update_cms_entity": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
        /**
         * The BotStar CMS entity ID.
         * @minLength 1
         */
        entityId: string;
        /** The BotStar environment target for mutation endpoints. */
        env?: "draft" | "draft,live";
        /**
         * The updated CMS entity name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Whether BotStar accepted the request. */
        success: boolean;
        /** The status string returned by BotStar. */
        status: string;
      };
    };
    /** Update an item in a BotStar CMS entity. */
    "bot_star.update_cms_entity_item": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
        /**
         * The BotStar CMS entity ID.
         * @minLength 1
         */
        entityId: string;
        /**
         * The BotStar CMS entity item ID.
         * @minLength 1
         */
        entityItemId: string;
        /** The BotStar environment target for mutation endpoints. */
        env?: "draft" | "draft,live";
        /**
         * The updated CMS entity item name.
         * @minLength 1
         */
        name?: string;
        /** The BotStar CMS entity item status. */
        status?: "enabled" | "disabled";
        /** Dynamic CMS item field values keyed by BotStar field unique name, excluding name and status. */
        data?: Record<string, string | number | boolean | Array<string> | null>;
      };
      output: {
        /** Whether BotStar accepted the request. */
        success: boolean;
        /** The status string returned by BotStar. */
        status: string;
      };
    };
    /** Update attributes on a BotStar audience user. */
    "bot_star.update_user_attributes": {
      input: {
        /**
         * The BotStar bot ID.
         * @minLength 1
         */
        botId: string;
        /**
         * The BotStar audience user ID.
         * @minLength 1
         */
        userId: string;
        /** User attributes to update by BotStar field name. */
        attributes: Record<string, string | number | boolean>;
      };
      output: {
        /** The attributes returned by BotStar. */
        attributes: Record<string, string | number | boolean>;
      };
    };
  }
}
