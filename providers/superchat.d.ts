import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Superchat contact with handles and optional custom attributes. */
    "superchat.create_contact": {
      input: {
        /**
         * The contact first name.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The contact last name.
         * @minLength 1
         */
        last_name?: string;
        /** The gender value returned by Superchat. */
        gender?: "female" | "male" | "diverse";
        /**
         * The contact handles to attach to the contact.
         * @minItems 1
         */
        handles: Array<{
          /** The contact handle type supported by the create and update endpoints. */
          type: "phone" | "mail";
          /**
           * The phone number or email address to store on the contact.
           * @minLength 1
           */
          value: string;
        }>;
        /** The custom attributes to set on the contact. */
        custom_attributes?: Array<Record<string, unknown>>;
      };
      output: {
        /** A Superchat contact. */
        contact: {
          /**
           * The contact identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The relative URL of the contact resource.
           * @minLength 1
           */
          url: string;
          /** The contact first name. */
          first_name: string | null;
          /** The contact last name. */
          last_name: string | null;
          /** The gender value returned by Superchat. */
          gender: "female" | "male" | "diverse" | null;
          /**
           * The UTC timestamp when the contact was created.
           * @format date-time
           */
          created_at: string;
          /**
           * The UTC timestamp when the contact was last updated.
           * @format date-time
           */
          updated_at: string;
          /** The handles attached to the contact. */
          handles: Array<{
            /**
             * The contact handle identifier.
             * @minLength 1
             */
            id: string;
            /** The contact handle type returned by Superchat. */
            type: "phone" | "mail" | "instagram" | "telegram" | "google_business_messaging" | "facebook_messenger";
            /**
             * The phone number, email address, or username stored on the handle.
             * @minLength 1
             */
            value: string;
          }>;
          /** The custom attributes attached to the contact. */
          custom_attributes: Array<Record<string, unknown>>;
        };
      };
    };
    /** Get one Superchat channel by channel_id. */
    "superchat.get_channel": {
      input: {
        /**
         * The channel identifier.
         * @minLength 1
         */
        channel_id: string;
      };
      output: {
        /** A Superchat channel. */
        channel: {
          /** The channel type returned by Superchat. */
          type: "whats_app" | "instagram" | "facebook_messenger" | "sms" | "mail" | "telegram" | "livechat";
          /**
           * The channel identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The channel display name.
           * @minLength 1
           */
          name: string;
          /** A Superchat inbox summary. */
          inbox: {
            /**
             * The inbox identifier.
             * @minLength 1
             */
            id: string;
            /**
             * The inbox name.
             * @minLength 1
             */
            name: string;
            /**
             * The relative URL of the inbox resource.
             * @minLength 1
             */
            url: string;
          };
          /**
           * The relative URL of the channel resource.
           * @minLength 1
           */
          url: string;
          /** The WhatsApp business account id when the channel type is whats_app. */
          whats_app_business_account_id: string | null;
        };
      };
    };
    /** Get one Superchat contact by contact_id. */
    "superchat.get_contact": {
      input: {
        /**
         * The contact identifier.
         * @minLength 1
         */
        contact_id: string;
      };
      output: {
        /** A Superchat contact. */
        contact: {
          /**
           * The contact identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The relative URL of the contact resource.
           * @minLength 1
           */
          url: string;
          /** The contact first name. */
          first_name: string | null;
          /** The contact last name. */
          last_name: string | null;
          /** The gender value returned by Superchat. */
          gender: "female" | "male" | "diverse" | null;
          /**
           * The UTC timestamp when the contact was created.
           * @format date-time
           */
          created_at: string;
          /**
           * The UTC timestamp when the contact was last updated.
           * @format date-time
           */
          updated_at: string;
          /** The handles attached to the contact. */
          handles: Array<{
            /**
             * The contact handle identifier.
             * @minLength 1
             */
            id: string;
            /** The contact handle type returned by Superchat. */
            type: "phone" | "mail" | "instagram" | "telegram" | "google_business_messaging" | "facebook_messenger";
            /**
             * The phone number, email address, or username stored on the handle.
             * @minLength 1
             */
            value: string;
          }>;
          /** The custom attributes attached to the contact. */
          custom_attributes: Array<Record<string, unknown>>;
        };
      };
    };
    /** Retrieve the authenticated Superchat user and workspace summary. */
    "superchat.get_me": {
      input: Record<string, never>;
      output: {
        /** The authenticated Superchat profile. */
        profile: {
          /** The authenticated Superchat user. */
          user: {
            /**
             * The user identifier.
             * @minLength 1
             */
            id: string;
            /**
             * The UTC timestamp when the user was created.
             * @format date-time
             */
            created_at: string;
            /**
             * The UTC timestamp when the user was last updated.
             * @format date-time
             */
            updated_at: string;
            /**
             * The user first name.
             * @minLength 1
             */
            first_name: string;
            /**
             * The user last name.
             * @minLength 1
             */
            last_name: string;
            /**
             * The user email address.
             * @format email
             */
            email: string;
            /** The Superchat user role. */
            role: "member" | "supervisor" | "admin";
            /** The language code configured on the Superchat user. */
            language: "en" | "de" | "pt" | "it" | "fr" | "es";
            /**
             * The relative URL of the user resource.
             * @minLength 1
             */
            url: string;
            /** The inboxes the user can access. */
            inboxes: Array<{
              /**
               * The inbox identifier.
               * @minLength 1
               */
              id: string;
              /**
               * The inbox name.
               * @minLength 1
               */
              name: string;
              /**
               * The relative URL of the inbox resource.
               * @minLength 1
               */
              url: string;
            }>;
          };
          /** The authenticated Superchat workspace summary. */
          workspace: {
            /**
             * The workspace display name.
             * @minLength 1
             */
            name: string;
          };
        };
      };
    };
    /** List Superchat channels in the current workspace. */
    "superchat.list_channels": {
      input: {
        /**
         * The number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Return objects after this cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * Return objects before this cursor.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /** The channels returned by Superchat. */
        channels: Array<{
          /** The channel type returned by Superchat. */
          type: "whats_app" | "instagram" | "facebook_messenger" | "sms" | "mail" | "telegram" | "livechat";
          /**
           * The channel identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The channel display name.
           * @minLength 1
           */
          name: string;
          /** A Superchat inbox summary. */
          inbox: {
            /**
             * The inbox identifier.
             * @minLength 1
             */
            id: string;
            /**
             * The inbox name.
             * @minLength 1
             */
            name: string;
            /**
             * The relative URL of the inbox resource.
             * @minLength 1
             */
            url: string;
          };
          /**
           * The relative URL of the channel resource.
           * @minLength 1
           */
          url: string;
          /** The WhatsApp business account id when the channel type is whats_app. */
          whats_app_business_account_id: string | null;
        }>;
        /** Cursor pagination metadata returned by Superchat. */
        pagination: {
          /** The cursor to request the next page. */
          next_cursor: string | null;
          /** The cursor to request the previous page. */
          previous_cursor: string | null;
          /** The relative URL of the next page. */
          next_url: string | null;
          /** The relative URL of the previous page. */
          previous_url: string | null;
        };
      };
    };
    /** List Superchat contacts in the current workspace. */
    "superchat.list_contacts": {
      input: {
        /**
         * The number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Return objects after this cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * Return objects before this cursor.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /** The contacts returned by Superchat. */
        contacts: Array<{
          /**
           * The contact identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The relative URL of the contact resource.
           * @minLength 1
           */
          url: string;
          /** The contact first name. */
          first_name: string | null;
          /** The contact last name. */
          last_name: string | null;
          /** The gender value returned by Superchat. */
          gender: "female" | "male" | "diverse" | null;
          /**
           * The UTC timestamp when the contact was created.
           * @format date-time
           */
          created_at: string;
          /**
           * The UTC timestamp when the contact was last updated.
           * @format date-time
           */
          updated_at: string;
          /** The handles attached to the contact. */
          handles: Array<{
            /**
             * The contact handle identifier.
             * @minLength 1
             */
            id: string;
            /** The contact handle type returned by Superchat. */
            type: "phone" | "mail" | "instagram" | "telegram" | "google_business_messaging" | "facebook_messenger";
            /**
             * The phone number, email address, or username stored on the handle.
             * @minLength 1
             */
            value: string;
          }>;
          /** The custom attributes attached to the contact. */
          custom_attributes: Array<Record<string, unknown>>;
        }>;
        /** Cursor pagination metadata returned by Superchat. */
        pagination: {
          /** The cursor to request the next page. */
          next_cursor: string | null;
          /** The cursor to request the previous page. */
          previous_cursor: string | null;
          /** The relative URL of the next page. */
          next_url: string | null;
          /** The relative URL of the previous page. */
          previous_url: string | null;
        };
      };
    };
    /** Search Superchat contacts by phone, email, or one selected custom attribute field. */
    "superchat.search_contacts": {
      input: {
        /** The contact field to search. */
        field: "mail" | "phone" | "custom_attribute";
        /**
         * The custom attribute identifier, or one of gender, first_name, or last_name.
         * @minLength 1
         */
        identifier?: string;
        /**
         * The value to match in the selected field.
         * @minLength 1
         */
        value: string;
      };
      output: {
        /** The contacts returned by Superchat. */
        contacts: Array<{
          /**
           * The contact identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The relative URL of the contact resource.
           * @minLength 1
           */
          url: string;
          /** The contact first name. */
          first_name: string | null;
          /** The contact last name. */
          last_name: string | null;
          /** The gender value returned by Superchat. */
          gender: "female" | "male" | "diverse" | null;
          /**
           * The UTC timestamp when the contact was created.
           * @format date-time
           */
          created_at: string;
          /**
           * The UTC timestamp when the contact was last updated.
           * @format date-time
           */
          updated_at: string;
          /** The handles attached to the contact. */
          handles: Array<{
            /**
             * The contact handle identifier.
             * @minLength 1
             */
            id: string;
            /** The contact handle type returned by Superchat. */
            type: "phone" | "mail" | "instagram" | "telegram" | "google_business_messaging" | "facebook_messenger";
            /**
             * The phone number, email address, or username stored on the handle.
             * @minLength 1
             */
            value: string;
          }>;
          /** The custom attributes attached to the contact. */
          custom_attributes: Array<Record<string, unknown>>;
        }>;
        /** Cursor pagination metadata returned by Superchat. */
        pagination: {
          /** The cursor to request the next page. */
          next_cursor: string | null;
          /** The cursor to request the previous page. */
          previous_cursor: string | null;
          /** The relative URL of the next page. */
          next_url: string | null;
          /** The relative URL of the previous page. */
          previous_url: string | null;
        };
      };
    };
    /** Send one Superchat email message through a selected email channel. */
    "superchat.send_email_message": {
      input: {
        /**
         * The recipient email address.
         * @format email
         */
        identifier: string;
        /**
         * The email channel identifier that should send the message.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The optional sender name to override the default channel sender.
         * @minLength 1
         */
        from_name?: string;
        /**
         * The optional email subject line.
         * @minLength 1
         */
        subject?: string;
        /**
         * The plain text email body.
         * @minLength 1
         */
        text: string;
        /**
         * The optional HTML email body.
         * @minLength 1
         */
        html?: string;
        /**
         * The optional message id to reply to.
         * @minLength 1
         */
        in_reply_to?: string;
      };
      output: {
        /** A Superchat outbound email message. */
        message: {
          /**
           * The message identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The relative URL of the message resource.
           * @minLength 1
           */
          url: string;
          /**
           * The UTC timestamp when the message was created.
           * @format date-time
           */
          created_at: string;
          /**
           * The UTC timestamp when the message was last updated.
           * @format date-time
           */
          updated_at: string;
          /** The Superchat message status. */
          status: "processed" | "sent" | "received" | "read" | "clicked";
          /** The Superchat message direction. */
          direction: "outbound";
          /** The message recipients. */
          to: Array<{
            /**
             * The recipient contact identifier.
             * @minLength 1
             */
            contact_id: string;
            /**
             * The identifier used for the delivery.
             * @minLength 1
             */
            identifier: string;
            /**
             * The relative URL of the contact resource.
             * @minLength 1
             */
            url: string;
          }>;
          /** The sender summary returned by Superchat. */
          from: {
            /**
             * The sender name chosen for the message.
             * @minLength 1
             */
            name: string;
            /**
             * The channel identifier used to send the message.
             * @minLength 1
             */
            channel_id: string;
          };
          /** A Superchat email content object. */
          content: {
            /** The message content type. */
            type: "email";
            /**
             * The email subject line.
             * @minLength 1
             */
            subject?: string;
            /**
             * The plain text email body.
             * @minLength 1
             */
            text: string;
            /** The optional HTML email body. */
            html?: string | null;
            /** The optional file attachments returned on the email content. */
            files?: Array<{
              /**
               * The Superchat file identifier.
               * @minLength 1
               */
              id: string;
            }> | null;
            /** The message id this email replied to. */
            in_reply_to?: string | null;
          };
          /** The replied-to message id when present. */
          in_reply_to: string | null;
          /**
           * The conversation identifier created or used by the send.
           * @minLength 1
           */
          conversation_id: string;
        };
      };
    };
    /** Send one Superchat text message through a selected channel. */
    "superchat.send_text_message": {
      input: {
        /**
         * The recipient email address, E164 phone number, or contact id accepted by Superchat.
         * @minLength 1
         */
        identifier: string;
        /**
         * The channel identifier that should send the message.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The optional sender name to override the default channel sender.
         * @minLength 1
         */
        from_name?: string;
        /**
         * The text body to send.
         * @minLength 1
         */
        body: string;
      };
      output: {
        /** A Superchat outbound text message. */
        message: {
          /**
           * The message identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The relative URL of the message resource.
           * @minLength 1
           */
          url: string;
          /**
           * The UTC timestamp when the message was created.
           * @format date-time
           */
          created_at: string;
          /**
           * The UTC timestamp when the message was last updated.
           * @format date-time
           */
          updated_at: string;
          /** The Superchat message status. */
          status: "processed" | "sent" | "received" | "read" | "clicked";
          /** The Superchat message direction. */
          direction: "outbound";
          /** The message recipients. */
          to: Array<{
            /**
             * The recipient contact identifier.
             * @minLength 1
             */
            contact_id: string;
            /**
             * The identifier used for the delivery.
             * @minLength 1
             */
            identifier: string;
            /**
             * The relative URL of the contact resource.
             * @minLength 1
             */
            url: string;
          }>;
          /** The sender summary returned by Superchat. */
          from: {
            /**
             * The sender name chosen for the message.
             * @minLength 1
             */
            name: string;
            /**
             * The channel identifier used to send the message.
             * @minLength 1
             */
            channel_id: string;
          };
          /** A Superchat text message content object. */
          content: {
            /** The message content type. */
            type: "text";
            /**
             * The text body that was sent.
             * @minLength 1
             */
            body: string;
          };
          /** The replied-to message id when present. */
          in_reply_to: string | null;
          /**
           * The conversation identifier created or used by the send.
           * @minLength 1
           */
          conversation_id: string;
        };
      };
    };
    /** Send one Superchat WhatsApp template message through a selected channel. */
    "superchat.send_whatsapp_template_message": {
      input: {
        /**
         * The recipient E164 phone number or contact id accepted by Superchat.
         * @minLength 1
         */
        identifier: string;
        /**
         * The WhatsApp channel identifier that should send the message.
         * @minLength 1
         */
        channel_id: string;
        /**
         * The optional sender name to override the default channel sender.
         * @minLength 1
         */
        from_name?: string;
        /**
         * The WhatsApp template identifier.
         * @minLength 1
         */
        template_id: string;
        /**
         * The variable values to pass to the template.
         * @minItems 1
         */
        variables: Array<{
          /**
           * The one-based template variable position.
           * @exclusiveMinimum 0
           */
          position: number;
          /**
           * The replacement value for the template variable.
           * @minLength 1
           */
          value: string;
        }>;
      };
      output: {
        /** A Superchat outbound WhatsApp template message. */
        message: {
          /**
           * The message identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The relative URL of the message resource.
           * @minLength 1
           */
          url: string;
          /**
           * The UTC timestamp when the message was created.
           * @format date-time
           */
          created_at: string;
          /**
           * The UTC timestamp when the message was last updated.
           * @format date-time
           */
          updated_at: string;
          /** The Superchat message status. */
          status: "processed" | "sent" | "received" | "read" | "clicked";
          /** The Superchat message direction. */
          direction: "outbound";
          /** The message recipients. */
          to: Array<{
            /**
             * The recipient contact identifier.
             * @minLength 1
             */
            contact_id: string;
            /**
             * The identifier used for the delivery.
             * @minLength 1
             */
            identifier: string;
            /**
             * The relative URL of the contact resource.
             * @minLength 1
             */
            url: string;
          }>;
          /** The sender summary returned by Superchat. */
          from: {
            /**
             * The sender name chosen for the message.
             * @minLength 1
             */
            name: string;
            /**
             * The channel identifier used to send the message.
             * @minLength 1
             */
            channel_id: string;
          };
          /** A Superchat WhatsApp template content object. */
          content: {
            /** The message content type. */
            type: "whats_app_template";
            /**
             * The template identifier.
             * @minLength 1
             */
            template_id: string;
            /** The variable values passed to the template. */
            variables: Array<{
              /**
               * The one-based template variable position.
               * @exclusiveMinimum 0
               */
              position: number;
              /**
               * The replacement value for the template variable.
               * @minLength 1
               */
              value: string;
            }>;
            /** The optional template media reference. */
            file?: {
              /**
               * The Superchat file identifier.
               * @minLength 1
               */
              id: string;
            } | null;
          };
          /** The replied-to message id when present. */
          in_reply_to: string | null;
          /**
           * The conversation identifier created or used by the send.
           * @minLength 1
           */
          conversation_id: string;
        };
      };
    };
    /** Update one Superchat contact by contact_id. */
    "superchat.update_contact": {
      input: {
        /**
         * The contact identifier.
         * @minLength 1
         */
        contact_id: string;
        /**
         * The contact first name.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The contact last name.
         * @minLength 1
         */
        last_name?: string;
        /** The gender value returned by Superchat. */
        gender?: "female" | "male" | "diverse";
        /** The contact handles to upsert on the contact. */
        handles?: Array<{
          /**
           * The existing contact handle id when you want to update one handle.
           * @minLength 1
           */
          id?: string;
          /** The contact handle type supported by the create and update endpoints. */
          type: "phone" | "mail";
          /**
           * The phone number or email address to store on the contact.
           * @minLength 1
           */
          value: string;
        }>;
        /** The custom attributes to update on the contact. */
        custom_attributes?: Array<Record<string, unknown>>;
      };
      output: {
        /** A Superchat contact. */
        contact: {
          /**
           * The contact identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The relative URL of the contact resource.
           * @minLength 1
           */
          url: string;
          /** The contact first name. */
          first_name: string | null;
          /** The contact last name. */
          last_name: string | null;
          /** The gender value returned by Superchat. */
          gender: "female" | "male" | "diverse" | null;
          /**
           * The UTC timestamp when the contact was created.
           * @format date-time
           */
          created_at: string;
          /**
           * The UTC timestamp when the contact was last updated.
           * @format date-time
           */
          updated_at: string;
          /** The handles attached to the contact. */
          handles: Array<{
            /**
             * The contact handle identifier.
             * @minLength 1
             */
            id: string;
            /** The contact handle type returned by Superchat. */
            type: "phone" | "mail" | "instagram" | "telegram" | "google_business_messaging" | "facebook_messenger";
            /**
             * The phone number, email address, or username stored on the handle.
             * @minLength 1
             */
            value: string;
          }>;
          /** The custom attributes attached to the contact. */
          custom_attributes: Array<Record<string, unknown>>;
        };
      };
    };
  }
}
