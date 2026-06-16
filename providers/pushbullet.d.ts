import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Pushbullet chat with another user or email address. */
    "pushbullet.create_chat": {
      input: {
        /**
         * Email address of the person to create a chat with.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email: string;
      };
      output: {
        /**
         * Pushbullet identifier for the resource.
         * @minLength 1
         */
        iden: string;
        /** Whether the chat is active. */
        active?: boolean;
        /** Whether the chat is muted. */
        muted?: boolean;
        /** Creation timestamp for the chat. */
        created?: number;
        /** Last modification timestamp for the chat. */
        modified?: number;
        /**
         * Email address for the chat participant.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email?: string;
        /**
         * Normalized email address for the chat participant.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email_normalized?: string;
        /** Display name for the chat participant. */
        name?: string;
        /**
         * Profile image URL for the chat participant.
         * @format uri
         */
        image_url?: string;
        /** User object for the chat participant. */
        with?: {
          /**
           * Pushbullet identifier for the resource.
           * @minLength 1
           */
          iden: string;
          /**
           * Email address of the Pushbullet account.
           * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
           * @format email
           */
          email?: string;
          /**
           * Normalized email address of the Pushbullet account.
           * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
           * @format email
           */
          email_normalized?: string;
          /** Display name of the Pushbullet user. */
          name?: string;
          /**
           * Profile image URL for the Pushbullet user.
           * @format uri
           */
          image_url?: string;
          /** Maximum upload size in bytes for the account. */
          max_upload_size?: number;
          /** Creation timestamp for the user account. */
          created?: number;
          /** Last modification timestamp for the user account. */
          modified?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a new Pushbullet device for the current user. */
    "pushbullet.create_device": {
      input: {
        /**
         * Name to display for the device.
         * @minLength 1
         */
        nickname?: string;
        /**
         * Model of the device.
         * @minLength 1
         */
        model?: string;
        /**
         * Manufacturer of the device.
         * @minLength 1
         */
        manufacturer?: string;
        /**
         * Platform-specific push token. Leave blank when creating a custom listening device.
         * @minLength 1
         */
        push_token?: string;
        /**
         * Version of the Pushbullet application installed on the device.
         * @minimum 0
         */
        app_version?: number;
        /**
         * Icon name for this device, such as desktop, browser, or phone.
         * @minLength 1
         */
        icon?: string;
        /** Whether the device supports SMS. */
        has_sms?: boolean;
      };
      output: {
        /**
         * Pushbullet identifier for the resource.
         * @minLength 1
         */
        iden: string;
        /** Whether the device is active. */
        active?: boolean;
        /** Display name for the device. */
        nickname?: string;
        /** Manufacturer of the device. */
        manufacturer?: string;
        /** Model of the device. */
        model?: string;
        /** Icon name used for the device. */
        icon?: string;
        /** Platform-specific push token for the device. */
        push_token?: string;
        /** Version of the Pushbullet application installed on the device. */
        app_version?: number;
        /** Device fingerprint returned by Pushbullet. */
        fingerprint?: string;
        /** Whether the device can send SMS messages. */
        has_sms?: boolean;
        /** Creation timestamp for the device. */
        created?: number;
        /** Last modification timestamp for the device. */
        modified?: number;
        [key: string]: unknown;
      };
    };
    /** Send a Pushbullet note, link, file, or list push to the current user or a selected target. */
    "pushbullet.create_push": {
      input: {
        /** Type of push to create: note, link, file, or list. */
        type: "note" | "link" | "file" | "list";
        /**
         * Title of the push.
         * @minLength 1
         */
        title?: string;
        /**
         * Body text of the push.
         * @minLength 1
         */
        body?: string;
        /**
         * URL associated with the push.
         * @format uri
         */
        url?: string;
        /**
         * File name for a file push.
         * @minLength 1
         */
        file_name?: string;
        /**
         * MIME type for a file push.
         * @minLength 1
         */
        file_type?: string;
        /**
         * Download URL for a file push.
         * @format uri
         */
        file_url?: string;
        /**
         * Identifier of the source device sending the push.
         * @minLength 1
         */
        source_device_iden?: string;
        /**
         * Client-generated unique identifier for idempotency.
         * @minLength 1
         */
        guid?: string;
        /** Items for a list push. */
        items?: Array<{
          /**
           * Text for the list item.
           * @minLength 1
           */
          text: string;
          /** Whether the list item is checked. */
          checked: boolean;
        }>;
        /**
         * Identifier of the target device for a single-device push.
         * @minLength 1
         */
        device_iden?: string;
        /**
         * Email address to send the push to.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email?: string;
        /**
         * Tag of the target channel.
         * @minLength 1
         */
        channel_tag?: string;
        /**
         * Identifier of the target OAuth client.
         * @minLength 1
         */
        client_iden?: string;
      };
      output: {
        /**
         * Pushbullet identifier for the resource.
         * @minLength 1
         */
        iden: string;
        /** Push type such as note, link, file, or list. */
        type?: string;
        /** Whether the push is active. */
        active?: boolean;
        /** Whether the push has been dismissed. */
        dismissed?: boolean;
        /** Creation timestamp for the push. */
        created?: number;
        /** Last modification timestamp for the push. */
        modified?: number;
        /** Title of the push. */
        title?: string;
        /** Body text of the push. */
        body?: string;
        /**
         * URL included with a link push.
         * @format uri
         */
        url?: string;
        /** File name for a file push. */
        file_name?: string;
        /** MIME type for a file push. */
        file_type?: string;
        /**
         * Download URL for a file push.
         * @format uri
         */
        file_url?: string;
        /**
         * Preview image URL for the push.
         * @format uri
         */
        image_url?: string;
        /** Direction of the push. */
        direction?: string;
        /** Identifier of the sending user. */
        sender_iden?: string;
        /**
         * Email address of the sending user.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        sender_email?: string;
        /** Identifier of the receiving user. */
        receiver_iden?: string;
        /**
         * Email address of the receiving user.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        receiver_email?: string;
        /** Identifier of the target device for a single-device push. */
        target_device_iden?: string;
        /** Identifier of the source device that sent the push. */
        source_device_iden?: string;
        /** Identifier of the target OAuth client. */
        client_iden?: string;
        /** Identifier of the target channel. */
        channel_iden?: string;
        /** Tag of the target channel. */
        channel_tag?: string;
        /** Client-provided idempotency identifier. */
        guid?: string;
        /** Items for a list push. */
        items?: Array<{
          /**
           * Text for the list item.
           * @minLength 1
           */
          text: string;
          /** Whether the list item is checked. */
          checked: boolean;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete all pushes belonging to the current Pushbullet user. */
    "pushbullet.delete_all_pushes": {
      input: Record<string, never>;
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
      };
    };
    /** Delete one Pushbullet chat by identifier. */
    "pushbullet.delete_chat": {
      input: {
        /**
         * Pushbullet identifier for the resource.
         * @minLength 1
         */
        iden: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
      };
    };
    /** Delete one Pushbullet device by identifier. */
    "pushbullet.delete_device": {
      input: {
        /**
         * Pushbullet identifier for the resource.
         * @minLength 1
         */
        iden: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
      };
    };
    /** Delete one Pushbullet push by identifier. */
    "pushbullet.delete_push": {
      input: {
        /**
         * Pushbullet identifier for the resource.
         * @minLength 1
         */
        iden: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
      };
    };
    /** Get the currently authenticated Pushbullet user profile. */
    "pushbullet.get_current_user": {
      input: Record<string, never>;
      output: {
        /**
         * Pushbullet identifier for the resource.
         * @minLength 1
         */
        iden: string;
        /**
         * Email address of the Pushbullet account.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email?: string;
        /**
         * Normalized email address of the Pushbullet account.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email_normalized?: string;
        /** Display name of the Pushbullet user. */
        name?: string;
        /**
         * Profile image URL for the Pushbullet user.
         * @format uri
         */
        image_url?: string;
        /** Maximum upload size in bytes for the account. */
        max_upload_size?: number;
        /** Creation timestamp for the user account. */
        created?: number;
        /** Last modification timestamp for the user account. */
        modified?: number;
        [key: string]: unknown;
      };
    };
    /** List all chats for the current Pushbullet user. */
    "pushbullet.list_chats": {
      input: Record<string, never>;
      output: {
        /** Chats ordered with most recently modified first. */
        chats: Array<{
          /**
           * Pushbullet identifier for the resource.
           * @minLength 1
           */
          iden: string;
          /** Whether the chat is active. */
          active?: boolean;
          /** Whether the chat is muted. */
          muted?: boolean;
          /** Creation timestamp for the chat. */
          created?: number;
          /** Last modification timestamp for the chat. */
          modified?: number;
          /**
           * Email address for the chat participant.
           * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
           * @format email
           */
          email?: string;
          /**
           * Normalized email address for the chat participant.
           * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
           * @format email
           */
          email_normalized?: string;
          /** Display name for the chat participant. */
          name?: string;
          /**
           * Profile image URL for the chat participant.
           * @format uri
           */
          image_url?: string;
          /** User object for the chat participant. */
          with?: {
            /**
             * Pushbullet identifier for the resource.
             * @minLength 1
             */
            iden: string;
            /**
             * Email address of the Pushbullet account.
             * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
             * @format email
             */
            email?: string;
            /**
             * Normalized email address of the Pushbullet account.
             * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
             * @format email
             */
            email_normalized?: string;
            /** Display name of the Pushbullet user. */
            name?: string;
            /**
             * Profile image URL for the Pushbullet user.
             * @format uri
             */
            image_url?: string;
            /** Maximum upload size in bytes for the account. */
            max_upload_size?: number;
            /** Creation timestamp for the user account. */
            created?: number;
            /** Last modification timestamp for the user account. */
            modified?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List all registered devices for the current Pushbullet user. */
    "pushbullet.list_devices": {
      input: Record<string, never>;
      output: {
        /** Devices ordered with most recently modified first. */
        devices: Array<{
          /**
           * Pushbullet identifier for the resource.
           * @minLength 1
           */
          iden: string;
          /** Whether the device is active. */
          active?: boolean;
          /** Display name for the device. */
          nickname?: string;
          /** Manufacturer of the device. */
          manufacturer?: string;
          /** Model of the device. */
          model?: string;
          /** Icon name used for the device. */
          icon?: string;
          /** Platform-specific push token for the device. */
          push_token?: string;
          /** Version of the Pushbullet application installed on the device. */
          app_version?: number;
          /** Device fingerprint returned by Pushbullet. */
          fingerprint?: string;
          /** Whether the device can send SMS messages. */
          has_sms?: boolean;
          /** Creation timestamp for the device. */
          created?: number;
          /** Last modification timestamp for the device. */
          modified?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Pushbullet pushes with optional active, modified-after, and cursor filters. */
    "pushbullet.list_pushes": {
      input: {
        /** When true, only return active pushes. */
        active?: boolean;
        /** Only return pushes modified after this Unix timestamp. */
        modified_after?: number;
        /**
         * Cursor returned by a previous list_pushes response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of pushes to return, up to 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
      };
      output: {
        /** Pushes ordered with most recently modified first. */
        pushes: Array<{
          /**
           * Pushbullet identifier for the resource.
           * @minLength 1
           */
          iden: string;
          /** Push type such as note, link, file, or list. */
          type?: string;
          /** Whether the push is active. */
          active?: boolean;
          /** Whether the push has been dismissed. */
          dismissed?: boolean;
          /** Creation timestamp for the push. */
          created?: number;
          /** Last modification timestamp for the push. */
          modified?: number;
          /** Title of the push. */
          title?: string;
          /** Body text of the push. */
          body?: string;
          /**
           * URL included with a link push.
           * @format uri
           */
          url?: string;
          /** File name for a file push. */
          file_name?: string;
          /** MIME type for a file push. */
          file_type?: string;
          /**
           * Download URL for a file push.
           * @format uri
           */
          file_url?: string;
          /**
           * Preview image URL for the push.
           * @format uri
           */
          image_url?: string;
          /** Direction of the push. */
          direction?: string;
          /** Identifier of the sending user. */
          sender_iden?: string;
          /**
           * Email address of the sending user.
           * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
           * @format email
           */
          sender_email?: string;
          /** Identifier of the receiving user. */
          receiver_iden?: string;
          /**
           * Email address of the receiving user.
           * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
           * @format email
           */
          receiver_email?: string;
          /** Identifier of the target device for a single-device push. */
          target_device_iden?: string;
          /** Identifier of the source device that sent the push. */
          source_device_iden?: string;
          /** Identifier of the target OAuth client. */
          client_iden?: string;
          /** Identifier of the target channel. */
          channel_iden?: string;
          /** Tag of the target channel. */
          channel_tag?: string;
          /** Client-provided idempotency identifier. */
          guid?: string;
          /** Items for a list push. */
          items?: Array<{
            /**
             * Text for the list item.
             * @minLength 1
             */
            text: string;
            /** Whether the list item is checked. */
            checked: boolean;
          }>;
          [key: string]: unknown;
        }>;
        /** Cursor for fetching the next page of pushes. */
        cursor?: string;
        [key: string]: unknown;
      };
    };
    /** Mute or unmute an existing Pushbullet chat. */
    "pushbullet.update_chat": {
      input: {
        /**
         * Pushbullet identifier for the resource.
         * @minLength 1
         */
        iden: string;
        /** True to mute the chat, false to unmute it. */
        muted: boolean;
      };
      output: {
        /**
         * Pushbullet identifier for the resource.
         * @minLength 1
         */
        iden: string;
        /** Whether the chat is active. */
        active?: boolean;
        /** Whether the chat is muted. */
        muted?: boolean;
        /** Creation timestamp for the chat. */
        created?: number;
        /** Last modification timestamp for the chat. */
        modified?: number;
        /**
         * Email address for the chat participant.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email?: string;
        /**
         * Normalized email address for the chat participant.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email_normalized?: string;
        /** Display name for the chat participant. */
        name?: string;
        /**
         * Profile image URL for the chat participant.
         * @format uri
         */
        image_url?: string;
        /** User object for the chat participant. */
        with?: {
          /**
           * Pushbullet identifier for the resource.
           * @minLength 1
           */
          iden: string;
          /**
           * Email address of the Pushbullet account.
           * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
           * @format email
           */
          email?: string;
          /**
           * Normalized email address of the Pushbullet account.
           * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
           * @format email
           */
          email_normalized?: string;
          /** Display name of the Pushbullet user. */
          name?: string;
          /**
           * Profile image URL for the Pushbullet user.
           * @format uri
           */
          image_url?: string;
          /** Maximum upload size in bytes for the account. */
          max_upload_size?: number;
          /** Creation timestamp for the user account. */
          created?: number;
          /** Last modification timestamp for the user account. */
          modified?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update metadata for an existing Pushbullet device. */
    "pushbullet.update_device": {
      input: {
        /**
         * Pushbullet identifier for the resource.
         * @minLength 1
         */
        iden: string;
        /**
         * Name to display for the device.
         * @minLength 1
         */
        nickname?: string;
        /**
         * Model of the device.
         * @minLength 1
         */
        model?: string;
        /**
         * Manufacturer of the device.
         * @minLength 1
         */
        manufacturer?: string;
        /**
         * Platform-specific push token. Leave blank when creating a custom listening device.
         * @minLength 1
         */
        push_token?: string;
        /**
         * Version of the Pushbullet application installed on the device.
         * @minimum 0
         */
        app_version?: number;
        /**
         * Icon name for this device, such as desktop, browser, or phone.
         * @minLength 1
         */
        icon?: string;
        /** Whether the device supports SMS. */
        has_sms?: boolean;
      };
      output: {
        /**
         * Pushbullet identifier for the resource.
         * @minLength 1
         */
        iden: string;
        /** Whether the device is active. */
        active?: boolean;
        /** Display name for the device. */
        nickname?: string;
        /** Manufacturer of the device. */
        manufacturer?: string;
        /** Model of the device. */
        model?: string;
        /** Icon name used for the device. */
        icon?: string;
        /** Platform-specific push token for the device. */
        push_token?: string;
        /** Version of the Pushbullet application installed on the device. */
        app_version?: number;
        /** Device fingerprint returned by Pushbullet. */
        fingerprint?: string;
        /** Whether the device can send SMS messages. */
        has_sms?: boolean;
        /** Creation timestamp for the device. */
        created?: number;
        /** Last modification timestamp for the device. */
        modified?: number;
        [key: string]: unknown;
      };
    };
    /** Update a Pushbullet push, typically to dismiss it or update list items. */
    "pushbullet.update_push": {
      input: {
        /**
         * Pushbullet identifier for the resource.
         * @minLength 1
         */
        iden: string;
        /** Whether the push should be marked dismissed. */
        dismissed?: boolean;
        /** Updated items for a list push. */
        items?: Array<{
          /**
           * Text for the list item.
           * @minLength 1
           */
          text: string;
          /** Whether the list item is checked. */
          checked: boolean;
        }>;
      };
      output: {
        /**
         * Pushbullet identifier for the resource.
         * @minLength 1
         */
        iden: string;
        /** Push type such as note, link, file, or list. */
        type?: string;
        /** Whether the push is active. */
        active?: boolean;
        /** Whether the push has been dismissed. */
        dismissed?: boolean;
        /** Creation timestamp for the push. */
        created?: number;
        /** Last modification timestamp for the push. */
        modified?: number;
        /** Title of the push. */
        title?: string;
        /** Body text of the push. */
        body?: string;
        /**
         * URL included with a link push.
         * @format uri
         */
        url?: string;
        /** File name for a file push. */
        file_name?: string;
        /** MIME type for a file push. */
        file_type?: string;
        /**
         * Download URL for a file push.
         * @format uri
         */
        file_url?: string;
        /**
         * Preview image URL for the push.
         * @format uri
         */
        image_url?: string;
        /** Direction of the push. */
        direction?: string;
        /** Identifier of the sending user. */
        sender_iden?: string;
        /**
         * Email address of the sending user.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        sender_email?: string;
        /** Identifier of the receiving user. */
        receiver_iden?: string;
        /**
         * Email address of the receiving user.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        receiver_email?: string;
        /** Identifier of the target device for a single-device push. */
        target_device_iden?: string;
        /** Identifier of the source device that sent the push. */
        source_device_iden?: string;
        /** Identifier of the target OAuth client. */
        client_iden?: string;
        /** Identifier of the target channel. */
        channel_iden?: string;
        /** Tag of the target channel. */
        channel_tag?: string;
        /** Client-provided idempotency identifier. */
        guid?: string;
        /** Items for a list push. */
        items?: Array<{
          /**
           * Text for the list item.
           * @minLength 1
           */
          text: string;
          /** Whether the list item is checked. */
          checked: boolean;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
