import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new WhatsApp message template for a WABA. */
    "whatsapp.create_message_template": {
      input: {
        /**
         * WhatsApp Business Account ID. Omit to use the default credential WABA ID.
         * @minLength 1
         */
        waba_id?: string;
        /**
         * Unique template name.
         * @maxLength 512
         * @pattern ^[a-z0-9_]+$
         */
        name: string;
        /** Template category. */
        category: "AUTHENTICATION" | "MARKETING" | "UTILITY";
        /** Template language code such as en_US. */
        language: string;
        /**
         * Components submitted when creating the template.
         * @minItems 1
         */
        components: Array<{
          /** Template component type. */
          type: "HEADER" | "BODY" | "BUTTONS";
          /**
           * Text value for BODY or TEXT HEADER components.
           * @maxLength 1024
           */
          text?: string;
          /** HEADER format. */
          format?: "TEXT" | "IMAGE" | "VIDEO" | "DOCUMENT";
          /**
           * Buttons defined for a BUTTONS component.
           * @minItems 1
           * @maxItems 3
           */
          buttons?: Array<{
            /** Template button type. */
            type: "QUICK_REPLY" | "URL" | "PHONE_NUMBER";
            /**
             * Button text shown to the recipient.
             * @maxLength 25
             */
            text: string;
            /** Target URL for URL buttons. */
            url?: string;
            /** Target phone number for PHONE_NUMBER buttons. */
            phone_number?: string;
          }>;
          /** Example placeholder values used for submission. */
          example?: Record<string, unknown>;
        }>;
      };
      output: {
        /** Template ID created by Meta. */
        id: string;
        /** Initial template status returned by Meta. */
        status: string;
        /** Template category returned by Meta. */
        category: string;
      };
    };
    /** Delete all message template variants that share the same name. */
    "whatsapp.delete_message_template": {
      input: {
        /** Template name to delete. */
        name: string;
        /**
         * WhatsApp Business Account ID. Omit to use the default credential WABA ID.
         * @minLength 1
         */
        waba_id?: string;
      };
      output: {
        /** Whether the request completed successfully. */
        success: boolean;
      };
    };
    /** Get the business profile configured for a WhatsApp Business phone number. */
    "whatsapp.get_business_profile": {
      input: {
        /**
         * Meta phone number ID for the WhatsApp Business number used by this action.
         * @minLength 1
         */
        phone_number_id: string;
        /**
         * Comma-separated list of business profile fields to request.
         * @minLength 1
         * @default "about,address,description,email,profile_picture_url,websites,vertical"
         */
        fields?: string;
      };
      output: {
        /** Messaging product identifier, typically whatsapp. */
        messaging_product?: string;
        /** About text shown on the business profile. */
        about?: string;
        /** Business address. */
        address?: string;
        /** Business description. */
        description?: string;
        /** Business support email address. */
        email?: string;
        /** Public URL for the business profile picture. */
        profile_picture_url?: string;
        /** Websites linked from the business profile. */
        websites?: Array<string>;
        /** Business vertical selected in Meta. */
        vertical?: string;
      };
    };
    /** Get metadata and a short-lived download URL for uploaded media. */
    "whatsapp.get_media_info": {
      input: {
        /**
         * Meta media ID.
         * @minLength 1
         */
        media_id: string;
      };
      output: {
        /** Meta media ID. */
        id: string;
        /** Short-lived download URL for the media file. */
        url?: string;
        /** MIME type of the uploaded media. */
        mime_type?: string;
        /** SHA256 hash of the media file. */
        sha256?: string;
        /** Size of the media file in bytes. */
        file_size?: number;
        /** Messaging product identifier, typically whatsapp. */
        messaging_product?: string;
      };
    };
    /** List message templates for a WhatsApp Business Account. */
    "whatsapp.get_message_templates": {
      input: {
        /**
         * WhatsApp Business Account ID. Omit to use the default credential WABA ID.
         * @minLength 1
         */
        waba_id?: string;
        /** Pagination cursor returned by a previous response. */
        after?: string;
        /**
         * Maximum number of templates to return.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
        /** Optional template status filter. */
        status?: string;
        /** Optional template category filter. */
        category?: string;
        /** Optional template language filter. */
        language?: string;
        /** Optional filter that matches template name or content. */
        name_or_content?: string;
      };
      output: {
        /** Templates returned for the WABA. */
        templates: Array<{
          /** Meta template ID. */
          id: string;
          /** Template name. */
          name: string;
          /** Template status returned by Meta. */
          status: string;
          /** Template category. */
          category: string;
          /** Template language code. */
          language: string;
          /** Template components. */
          components: Array<{
            /** Component type such as HEADER, BODY, FOOTER, or BUTTONS. */
            type: string;
            /** HEADER format such as TEXT, IMAGE, VIDEO, or DOCUMENT. */
            format?: string;
            /** Text value for BODY, FOOTER, or TEXT HEADER components. */
            text?: string;
            /** Button definitions for BUTTONS components. */
            buttons?: Array<{
              /** Template button type. */
              type: string;
              /** Button text shown to the recipient. */
              text: string;
              /** URL value for URL buttons. */
              url?: string;
              /** Phone number used by phone buttons. */
              phone_number?: string;
              /** Example placeholder values returned by Meta. */
              example?: Array<string>;
            }>;
            /** Example placeholder values returned by Meta. */
            example?: Record<string, unknown>;
          }>;
          /** Template creation time. */
          created_time?: string;
          /** Template update time. */
          updated_time?: string;
          /** Template quality rating. */
          quality_rating?: string;
          /** Parameter format reported by Meta. */
          parameter_format?: string;
          /** Previous category after recategorization. */
          previous_category?: string;
          /** Rejection reason, when present. */
          rejected_reason?: string;
          /** Quality score details, when present. */
          quality_score?: {
            /** Template quality score reported by Meta. */
            score: string;
            /** Last update time for the quality score. */
            date?: number | string;
          };
        }>;
        /** Pagination data returned by Meta. */
        paging?: {
          /** Cursor values returned by Meta. */
          cursors?: {
            /** Cursor for the previous page. */
            before?: string;
            /** Cursor for the next page. */
            after?: string;
          };
          /** URL for the previous page, when provided. */
          previous?: string;
          /** URL for the next page, when provided. */
          next?: string;
        };
      };
    };
    /** Get metadata for a specific WhatsApp Business phone number. */
    "whatsapp.get_phone_number": {
      input: {
        /**
         * Meta phone number ID for the WhatsApp Business number used by this action.
         * @minLength 1
         */
        phone_number_id: string;
        /**
         * Comma-separated list of phone number fields to request.
         * @minLength 1
         * @default "id,display_phone_number,verified_name,code_verification_status,quality_rating,platform_type,throughput,webhook_configuration,last_onboarded_time"
         */
        fields?: string;
      };
      output: {
        /** Meta phone number ID. */
        id: string;
        /** Phone number in display format, including country code. */
        display_phone_number?: string;
        /** Verified business name shown to WhatsApp users. */
        verified_name?: string;
        /** Meta quality rating for this phone number. */
        quality_rating?: string;
        /** Verification status of the phone number. */
        code_verification_status?: string;
        /** Hosting platform type, such as CLOUD_API. */
        platform_type?: string;
        /** Timestamp for the latest phone number onboarding event. */
        last_onboarded_time?: string;
        /** Messaging throughput information returned by Meta. */
        throughput?: {
          /** Messaging throughput tier for the phone number. */
          level: string;
        };
        /** Webhook configuration returned by Meta. */
        webhook_configuration?: {
          /** Webhook endpoint configured for the phone number, when Meta returns one. */
          application: string;
        };
      };
    };
    /** List phone numbers for a WhatsApp Business Account. */
    "whatsapp.get_phone_numbers": {
      input: {
        /**
         * WhatsApp Business Account ID. Omit to use the default credential WABA ID.
         * @minLength 1
         */
        waba_id?: string;
        /**
         * Maximum number of phone numbers to return.
         * @minimum 1
         * @maximum 100
         * @default 25
         */
        limit?: number;
      };
      output: {
        /** Phone numbers returned for the WABA. */
        phone_numbers: Array<{
          /** Meta phone number ID. */
          id: string;
          /** Phone number in display format, including country code. */
          display_phone_number?: string;
          /** Verified business name shown to WhatsApp users. */
          verified_name?: string;
          /** Meta quality rating for this phone number. */
          quality_rating?: string;
          /** Verification status of the phone number. */
          code_verification_status?: string;
          /** Hosting platform type, such as CLOUD_API. */
          platform_type?: string;
          /** Timestamp for the latest phone number onboarding event. */
          last_onboarded_time?: string;
          /** Messaging throughput information returned by Meta. */
          throughput?: {
            /** Messaging throughput tier for the phone number. */
            level: string;
          };
          /** Webhook configuration returned by Meta. */
          webhook_configuration?: {
            /** Webhook endpoint configured for the phone number, when Meta returns one. */
            application: string;
          };
        }>;
        /** Pagination data returned by Meta. */
        paging?: {
          /** Cursor values returned by Meta. */
          cursors?: {
            /** Cursor for the previous page. */
            before?: string;
            /** Cursor for the next page. */
            after?: string;
          };
          /** URL for the previous page, when provided. */
          previous?: string;
          /** URL for the next page, when provided. */
          next?: string;
        };
      };
    };
    /** Get status details for a specific message template. */
    "whatsapp.get_template_status": {
      input: {
        /**
         * Meta template ID.
         * @minLength 1
         */
        template_id: string;
        /**
         * Comma-separated list of fields to retrieve.
         * @minLength 1
         */
        fields?: string;
      };
      output: {
        /** Meta template ID. */
        id: string;
        /** Template name. */
        name: string;
        /** Template status returned by Meta. */
        status: string;
        /** Template category. */
        category: string;
        /** Template language code. */
        language: string;
        /** Template components. */
        components: Array<{
          /** Component type such as HEADER, BODY, FOOTER, or BUTTONS. */
          type: string;
          /** HEADER format such as TEXT, IMAGE, VIDEO, or DOCUMENT. */
          format?: string;
          /** Text value for BODY, FOOTER, or TEXT HEADER components. */
          text?: string;
          /** Button definitions for BUTTONS components. */
          buttons?: Array<{
            /** Template button type. */
            type: string;
            /** Button text shown to the recipient. */
            text: string;
            /** URL value for URL buttons. */
            url?: string;
            /** Phone number used by phone buttons. */
            phone_number?: string;
            /** Example placeholder values returned by Meta. */
            example?: Array<string>;
          }>;
          /** Example placeholder values returned by Meta. */
          example?: Record<string, unknown>;
        }>;
        /** Template creation time. */
        created_time?: string;
        /** Template update time. */
        updated_time?: string;
        /** Template quality rating. */
        quality_rating?: string;
        /** Parameter format reported by Meta. */
        parameter_format?: string;
        /** Previous category after recategorization. */
        previous_category?: string;
        /** Rejection reason, when present. */
        rejected_reason?: string;
        /** Quality score details, when present. */
        quality_score?: {
          /** Template quality score reported by Meta. */
          score: string;
          /** Last update time for the quality score. */
          date?: number | string;
        };
      };
    };
    /** Send one or more contacts to a WhatsApp user. */
    "whatsapp.send_contacts": {
      input: {
        /**
         * Meta phone number ID for the WhatsApp Business number used by this action.
         * @minLength 1
         */
        phone_number_id: string;
        /**
         * Recipient phone number in international format without the plus sign.
         * @minLength 1
         */
        to_number: string;
        /**
         * Contacts to send in the message.
         * @minItems 1
         */
        contacts: Array<{
          /** Contact name information. */
          name: {
            /** Full name of the contact. */
            formatted_name: string;
            /** Given name of the contact. */
            first_name: string;
            /** Family name of the contact. */
            last_name: string;
            /** Middle name of the contact. */
            middle_name?: string;
            /** Name prefix. */
            prefix?: string;
            /** Name suffix. */
            suffix?: string;
          };
          /** Organization information. */
          org?: {
            /** Company name. */
            company?: string;
            /** Department name. */
            department?: string;
            /** Job title. */
            title?: string;
          };
          /** Email addresses for the contact. */
          emails?: Array<{
            /**
             * Email type.
             * @default "HOME"
             */
            type?: "HOME" | "WORK";
            /** Email address. */
            email: string;
          }>;
          /** Phone numbers for the contact. */
          phones?: Array<{
            /**
             * Phone type.
             * @default "CELL"
             */
            type?: "CELL" | "MAIN" | "IPHONE" | "HOME" | "WORK";
            /** Phone number in display format. */
            phone?: string;
            /** WhatsApp ID for the phone number. */
            wa_id?: string;
          }>;
          /** Postal addresses for the contact. */
          addresses?: Array<{
            /**
             * Address type.
             * @default "HOME"
             */
            type?: "HOME" | "WORK";
            /** Street address. */
            street?: string;
            /** City. */
            city?: string;
            /** State or province. */
            state?: string;
            /** Postal code. */
            zip?: string;
            /** Country name. */
            country?: string;
            /** Two-letter country code. */
            country_code?: string;
          }>;
          /** Birthday in YYYY-MM-DD format. */
          birthday?: string;
        }>;
      };
      output: {
        /** Resolved contacts associated with the delivery request. */
        contacts: Array<{
          /** Phone number submitted in the request. */
          input: string;
          /** WhatsApp ID resolved by Meta for the contact. */
          wa_id: string;
        }>;
        /** Messages accepted by Meta. */
        messages: Array<{
          /** Meta message identifier. */
          id: string;
        }>;
      };
    };
    /** Send an interactive reply-button message. */
    "whatsapp.send_interactive_buttons": {
      input: {
        /**
         * Meta phone number ID for the WhatsApp Business number used by this action.
         * @minLength 1
         */
        phone_number_id: string;
        /**
         * Recipient phone number in international format without the plus sign.
         * @minLength 1
         */
        to_number: string;
        /**
         * Body text shown above the buttons.
         * @maxLength 1024
         */
        body_text: string;
        /**
         * Reply buttons shown in the interactive message.
         * @minItems 1
         * @maxItems 3
         */
        buttons: Array<{
          /**
           * Unique identifier for the reply button.
           * @maxLength 256
           */
          id: string;
          /**
           * Button label shown to the user.
           * @maxLength 20
           */
          title: string;
        }>;
        /**
         * Optional header text.
         * @maxLength 60
         */
        header_text?: string;
        /**
         * Optional footer text.
         * @maxLength 60
         */
        footer_text?: string;
        /**
         * WhatsApp message ID to reply to.
         * @minLength 1
         */
        reply_to_message_id?: string;
      };
      output: {
        /** Resolved contacts associated with the delivery request. */
        contacts: Array<{
          /** Phone number submitted in the request. */
          input: string;
          /** WhatsApp ID resolved by Meta for the contact. */
          wa_id: string;
        }>;
        /** Messages accepted by Meta. */
        messages: Array<{
          /** Meta message identifier. */
          id: string;
        }>;
      };
    };
    /** Send an interactive list message with sections and rows. */
    "whatsapp.send_interactive_list": {
      input: {
        /**
         * Meta phone number ID for the WhatsApp Business number used by this action.
         * @minLength 1
         */
        phone_number_id: string;
        /**
         * Recipient phone number in international format without the plus sign.
         * @minLength 1
         */
        to_number: string;
        /**
         * Body text shown above the list button.
         * @maxLength 1024
         */
        body_text: string;
        /**
         * Label shown on the list button.
         * @maxLength 20
         */
        button_text: string;
        /**
         * Sections and rows shown inside the interactive list.
         * @minItems 1
         * @maxItems 10
         */
        sections: Array<{
          /**
           * Section title.
           * @maxLength 24
           */
          title: string;
          /**
           * Rows listed inside the section.
           * @minItems 1
           * @maxItems 10
           */
          rows: Array<{
            /**
             * Unique identifier for the row.
             * @maxLength 24
             */
            id: string;
            /**
             * Row title shown to the user.
             * @maxLength 24
             */
            title: string;
            /**
             * Optional row description.
             * @maxLength 72
             */
            description?: string;
          }>;
        }>;
        /**
         * Optional header text.
         * @maxLength 60
         */
        header_text?: string;
        /**
         * Optional footer text.
         * @maxLength 60
         */
        footer_text?: string;
        /**
         * WhatsApp message ID to reply to.
         * @minLength 1
         */
        reply_to_message_id?: string;
      };
      output: {
        /** Resolved contacts associated with the delivery request. */
        contacts: Array<{
          /** Phone number submitted in the request. */
          input: string;
          /** WhatsApp ID resolved by Meta for the contact. */
          wa_id: string;
        }>;
        /** Messages accepted by Meta. */
        messages: Array<{
          /** Meta message identifier. */
          id: string;
        }>;
      };
    };
    /** Send a location message to a WhatsApp user. */
    "whatsapp.send_location": {
      input: {
        /**
         * Meta phone number ID for the WhatsApp Business number used by this action.
         * @minLength 1
         */
        phone_number_id: string;
        /**
         * Recipient phone number in international format without the plus sign.
         * @minLength 1
         */
        to_number: string;
        /** Latitude in decimal degrees. */
        latitude: number | string;
        /** Longitude in decimal degrees. */
        longitude: number | string;
        /** Location title. */
        name: string;
        /** Location address. */
        address: string;
      };
      output: {
        /** Resolved contacts associated with the delivery request. */
        contacts: Array<{
          /** Phone number submitted in the request. */
          input: string;
          /** WhatsApp ID resolved by Meta for the contact. */
          wa_id: string;
        }>;
        /** Messages accepted by Meta. */
        messages: Array<{
          /** Meta message identifier. */
          id: string;
        }>;
      };
    };
    /** Send a media message by public URL. */
    "whatsapp.send_media": {
      input: {
        /**
         * Meta phone number ID for the WhatsApp Business number used by this action.
         * @minLength 1
         */
        phone_number_id: string;
        /** WhatsApp media type. */
        media_type: "audio" | "document" | "image" | "sticker" | "video";
        /**
         * Recipient phone number in international format without the plus sign.
         * @minLength 1
         */
        to_number: string;
        /**
         * Public HTTPS URL for the media file.
         * @format uri
         */
        link: string;
        /**
         * Optional caption for image, video, or document messages.
         * @maxLength 1024
         */
        caption?: string;
      };
      output: {
        /** Resolved contacts associated with the delivery request. */
        contacts: Array<{
          /** Phone number submitted in the request. */
          input: string;
          /** WhatsApp ID resolved by Meta for the contact. */
          wa_id: string;
        }>;
        /** Messages accepted by Meta. */
        messages: Array<{
          /** Meta message identifier. */
          id: string;
        }>;
      };
    };
    /** Send previously uploaded media by Meta media ID. */
    "whatsapp.send_media_by_id": {
      input: {
        /**
         * Meta phone number ID for the WhatsApp Business number used by this action.
         * @minLength 1
         */
        phone_number_id: string;
        /**
         * Recipient phone number in international format without the plus sign.
         * @minLength 1
         */
        to_number: string;
        /** WhatsApp media type. */
        media_type: "audio" | "document" | "image" | "sticker" | "video";
        /**
         * Meta media ID.
         * @minLength 1
         */
        media_id: string;
        /**
         * Optional caption for image, video, or document messages.
         * @maxLength 1024
         */
        caption?: string;
        /** Filename to attach when sending a document by media ID. */
        filename?: string;
        /**
         * WhatsApp message ID to reply to.
         * @minLength 1
         */
        reply_to_message_id?: string;
      };
      output: {
        /** Resolved contacts associated with the delivery request. */
        contacts: Array<{
          /** Phone number submitted in the request. */
          input: string;
          /** WhatsApp ID resolved by Meta for the contact. */
          wa_id: string;
        }>;
        /** Messages accepted by Meta. */
        messages: Array<{
          /** Meta message identifier. */
          id: string;
        }>;
      };
    };
    /** Send a text message to a WhatsApp user. */
    "whatsapp.send_message": {
      input: {
        /**
         * Meta phone number ID for the WhatsApp Business number used by this action.
         * @minLength 1
         */
        phone_number_id: string;
        /**
         * Recipient phone number in international format without the plus sign.
         * @minLength 1
         */
        to_number: string;
        /**
         * Text body of the message to send.
         * @minLength 1
         * @maxLength 4096
         */
        text: string;
        /**
         * WhatsApp message ID. Omit to send a standalone message.
         * @minLength 1
         */
        message_id?: string;
        /**
         * Whether Meta should render a link preview for the first URL in the text.
         * @default false
         */
        preview_url?: boolean;
      };
      output: {
        /** Resolved contacts associated with the delivery request. */
        contacts: Array<{
          /** Phone number submitted in the request. */
          input: string;
          /** WhatsApp ID resolved by Meta for the contact. */
          wa_id: string;
        }>;
        /** Messages accepted by Meta. */
        messages: Array<{
          /** Meta message identifier. */
          id: string;
        }>;
      };
    };
    /** Send an approved WhatsApp template message. */
    "whatsapp.send_template_message": {
      input: {
        /**
         * Meta phone number ID for the WhatsApp Business number used by this action.
         * @minLength 1
         */
        phone_number_id: string;
        /**
         * Recipient phone number in international format without the plus sign.
         * @minLength 1
         */
        to_number: string;
        /** Approved template name. */
        template_name: string;
        /**
         * Template language code used for delivery.
         * @default "en_US"
         */
        language_code?: string;
        /** Template component parameters passed to Meta. */
        components?: Array<{
          /** Template component type such as header, body, or button. */
          type: string;
          /** Button index for button components. */
          index?: number;
          /** Button subtype such as quick_reply or url. */
          sub_type?: string;
          /** Parameters used to fill template placeholders. */
          parameters?: Array<{
            /** Template parameter type. */
            type: string;
            /** Text value for text parameters. */
            text?: string;
            /** Image payload for image parameters. */
            image?: Record<string, string>;
            /** Video payload for video parameters. */
            video?: Record<string, string>;
            /** Document payload for document parameters. */
            document?: Record<string, string>;
            /** Currency payload for currency parameters. */
            currency?: Record<string, string>;
            /** Date-time payload for date_time parameters. */
            date_time?: Record<string, string>;
          }>;
        }>;
      };
      output: {
        /** Resolved contacts associated with the delivery request. */
        contacts: Array<{
          /** Phone number submitted in the request. */
          input: string;
          /** WhatsApp ID resolved by Meta for the contact. */
          wa_id: string;
        }>;
        /** Messages accepted by Meta. */
        messages: Array<{
          /** Meta message identifier. */
          id: string;
        }>;
      };
    };
    /** Upload media to Meta and return the resulting media record. */
    "whatsapp.upload_media": {
      input: {
        /**
         * Meta phone number ID for the WhatsApp Business number used by this action.
         * @minLength 1
         */
        phone_number_id: string;
        /** WhatsApp media type. */
        media_type: "audio" | "document" | "image" | "sticker" | "video";
        /** Source file to upload to Meta. */
        file_to_upload: {
          /** Filename to send to Meta. */
          name: string;
          /** MIME type of the source file. */
          mimetype: string;
          /** Transit object key or absolute URL used to download the file before upload. */
          s3key: string;
        };
      };
      output: {
        /** Meta media ID. */
        id: string;
        /** Short-lived download URL for the media file. */
        url?: string;
        /** MIME type of the uploaded media. */
        mime_type?: string;
        /** SHA256 hash of the media file. */
        sha256?: string;
        /** Size of the media file in bytes. */
        file_size?: number;
        /** Messaging product identifier, typically whatsapp. */
        messaging_product?: string;
      };
    };
  }
}
