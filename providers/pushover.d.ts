import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Acknowledge and delete all Open Client messages up to the provided message identifier. */
    "pushover.ack_delete_messages_up_to_id": {
      input: {
        /**
         * Open Client user session secret.
         * @minLength 1
         */
        secret: string;
        /**
         * Registered Open Client device identifier.
         * @minLength 1
         */
        device_id: string;
        /**
         * Highest message identifier already seen on the device, represented as a string.
         * @minLength 1
         */
        message: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Add an existing Pushover user to a delivery group. */
    "pushover.add_group_user": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
        /**
         * Pushover delivery group key.
         * @minLength 1
         */
        group_key: string;
        /**
         * User key to add to the delivery group.
         * @minLength 1
         */
        user: string;
        /**
         * Optional device name restriction for the target user.
         * @minLength 1
         * @maxLength 100
         */
        device?: string;
        /**
         * Optional memo stored with the group membership.
         * @maxLength 200
         */
        memo?: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Add a user to a Pushover for Teams organization using the Team API token. */
    "pushover.add_team_user": {
      input: {
        /**
         * Optional Team API token override. When omitted, the connected Team API token is used.
         * @minLength 1
         */
        token?: string;
        /**
         * Email address of the user to add to the team.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email: string;
        /**
         * Optional full name for the team user.
         * @minLength 1
         */
        name?: string;
        /**
         * Optional password assigned directly to the team user.
         * @minLength 1
         */
        password?: string;
        /** Whether the welcome email should include an instant-login link. */
        instant?: boolean;
        /** Whether the user should be added as a team administrator. */
        admin?: boolean;
        /**
         * Optional delivery group name that should contain the new team user.
         * @minLength 1
         */
        group?: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Assign one prepaid Pushover license credit to a user by key or email address. */
    "pushover.assign_license": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
        /**
         * Optional Pushover user key receiving the license.
         * @minLength 1
         */
        user?: string;
        /**
         * Optional email address receiving the license.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email?: string;
        /** Optional platform restriction for the assigned license. */
        os?: "Android" | "iOS" | "Desktop";
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        /** Remaining license credits after the assignment. */
        credits: number;
        [key: string]: unknown;
      };
    };
    /** Cancel further retries for one emergency receipt before it expires. */
    "pushover.cancel_receipt_retries": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
        /**
         * Emergency notification receipt identifier.
         * @minLength 1
         */
        receipt: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Cancel retries for all active emergency receipts that share the provided tag. */
    "pushover.cancel_retries_by_tag": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
        /**
         * Emergency receipt tag used when the notifications were created.
         * @minLength 1
         */
        tag: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get the number of prepaid Pushover license credits remaining on the application. */
    "pushover.check_license_credits": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        /** Remaining prepaid license credits on the application. */
        credits: number;
        [key: string]: unknown;
      };
    };
    /** Authenticate an Open Client user with email, password, and optional two-factor code. */
    "pushover.client_login": {
      input: {
        /**
         * Pushover account email address.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email: string;
        /**
         * Pushover account password.
         * @minLength 1
         */
        password: string;
        /**
         * Optional current two-factor authentication code.
         * @minLength 1
         */
        twofa?: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Open Client user identifier returned by the login call. */
        id: string;
        /** Session secret returned by the login call. */
        secret: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Create a new Pushover delivery group. */
    "pushover.create_group": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
        /**
         * Name of the new delivery group.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        /** Newly created delivery group key. */
        group: string;
        [key: string]: unknown;
      };
    };
    /** Temporarily disable deliveries to a user, or one of the user's devices, inside a delivery group. */
    "pushover.disable_group_user": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
        /**
         * Pushover delivery group key.
         * @minLength 1
         */
        group_key: string;
        /**
         * User key to disable inside the delivery group.
         * @minLength 1
         */
        user: string;
        /**
         * Optional device name restriction for the target user.
         * @minLength 1
         * @maxLength 100
         */
        device?: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Re-enable deliveries to a previously disabled user, or one of the user's devices, inside a delivery group. */
    "pushover.enable_group_user": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
        /**
         * Pushover delivery group key.
         * @minLength 1
         */
        group_key: string;
        /**
         * User key to re-enable inside the delivery group.
         * @minLength 1
         */
        user: string;
        /**
         * Optional device name restriction for the target user.
         * @minLength 1
         * @maxLength 100
         */
        device?: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Download pending Open Client messages for a registered device. */
    "pushover.fetch_client_messages": {
      input: {
        /**
         * Open Client user session secret.
         * @minLength 1
         */
        secret: string;
        /**
         * Registered Open Client device identifier.
         * @minLength 1
         */
        device_id: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Messages currently queued for the Open Client device. */
        messages: Array<{
          /** Device-local message identifier represented as a string. */
          id: string;
          /** Cross-device message identifier represented as a string. */
          umid?: string | null;
          /** Application identifier represented as a string. */
          aid?: string | null;
          /** Application name that produced the notification. */
          app?: string | null;
          /** Application icon identifier. */
          icon?: string | null;
          /** Notification title. */
          title?: string | null;
          /** Notification body text. */
          message: string;
          /** Unix timestamp when the notification was created. */
          date?: number | null;
          /** Notification priority. */
          priority?: number | null;
          /** Whether the notification has been acknowledged on the device. */
          acked?: boolean;
          /** Optional supplementary URL on the notification. */
          url?: string | null;
          /** Optional title for the supplementary URL. */
          url_title?: string | null;
          /** Optional notification sound. */
          sound?: string | null;
          /** Whether the notification body uses HTML formatting. */
          html?: boolean;
          [key: string]: unknown;
        }>;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Download a Pushover application icon PNG by icon identifier and return its binary content as base64. */
    "pushover.get_app_icon_image": {
      input: {
        /**
         * Pushover icon identifier returned on client messages.
         * @minLength 1
         */
        icon: string;
      };
      output: {
        /** Requested icon identifier. */
        icon: string;
        /** Absolute icon download URL. */
        url: string;
        /** MIME type returned by the icon download. */
        mimeType: string;
        /** Base64-encoded PNG bytes for the icon. */
        dataBase64: string;
      };
    };
    /** Get the current monthly message limit, remaining messages, and reset time for the connected Pushover application. */
    "pushover.get_app_limits": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        /** Monthly message limit for the application. */
        limit: number;
        /** Messages remaining before the monthly reset. */
        remaining: number;
        /** Unix timestamp when the monthly limit resets. */
        reset: number;
        /** Additional parameter flags returned by Pushover for the request. */
        parameter_flags?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Return the application API token resolved from the action input or the connected credential. */
    "pushover.get_app_token": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
      };
      output: {
        /** Resolved Pushover application API token. */
        token: string;
      };
    };
    /** Get the name and membership of a Pushover delivery group. */
    "pushover.get_group": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
        /**
         * Pushover delivery group key.
         * @minLength 1
         */
        group_key: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        /** Delivery group name. */
        name: string;
        /** Members returned for the delivery group. */
        users: Array<{
          /** User key belonging to the delivery group. */
          user: string;
          /** Optional device-restricted membership name. */
          device?: string | null;
          /** Optional memo stored for the membership. */
          memo?: string | null;
          /** Whether deliveries to this membership are disabled. */
          disabled?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get the status of an emergency notification receipt, including acknowledgment, callback, and expiry details. */
    "pushover.get_receipt_status": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
        /**
         * Emergency notification receipt identifier.
         * @minLength 1
         */
        receipt: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        /** Whether the emergency notification has been acknowledged. */
        acknowledged: boolean;
        /** Unix timestamp when the notification was acknowledged, or null. */
        acknowledged_at: number | null;
        /** User key of the first user who acknowledged the notification, or null. */
        acknowledged_by: string | null;
        /** Device name that first acknowledged the notification, or null. */
        acknowledged_by_device: string | null;
        /** Whether the configured callback URL has already been called. */
        called_back: boolean;
        /** Unix timestamp when the callback URL was called, or null. */
        called_back_at: number | null;
        /** Unix timestamp when the receipt expires, or null. */
        expires_at: number | null;
        /** Unix timestamp when the last retry was delivered, or null. */
        last_delivered_at: number | null;
        /** Whether the receipt has expired. */
        expired: boolean;
        [key: string]: unknown;
      };
    };
    /** Return the Team API token resolved from the action input or the connected credential metadata. */
    "pushover.get_team_api_token": {
      input: {
        /**
         * Optional Team API token override. When omitted, the connected Team API token is used.
         * @minLength 1
         */
        token?: string;
      };
      output: {
        /** Resolved Pushover Team API token. */
        token: string;
      };
    };
    /** List the delivery groups owned by the connected Pushover application account. */
    "pushover.list_groups": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        /** Delivery groups returned by Pushover. */
        groups: Array<{
          /** Delivery group key. */
          group: string;
          /** Human-readable delivery group name. */
          name: string;
        }>;
        [key: string]: unknown;
      };
    };
    /** Open a temporary Open Client WebSocket session, login with the provided device and secret, and collect realtime events until timeout or close. */
    "pushover.listen_client_websocket": {
      input: {
        /**
         * Open Client user session secret.
         * @minLength 1
         */
        secret: string;
        /**
         * Registered Open Client device identifier.
         * @minLength 1
         */
        device_id: string;
        /**
         * Maximum number of seconds to keep the WebSocket connection open.
         * @maximum 300
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** Events received from the realtime WebSocket connection. */
        events: Array<{
          /**
           * Raw frame code received from the WebSocket server.
           * @minLength 1
           */
          code: string;
          /** Normalized event name derived from the raw frame code. */
          event: string;
          /** Human-readable explanation of the WebSocket event. */
          description: string;
        }>;
      };
    };
    /** Register an Open Client desktop device using a user session secret. */
    "pushover.register_client_device": {
      input: {
        /**
         * Open Client user session secret returned by client_login.
         * @minLength 1
         */
        secret: string;
        /**
         * Short Open Client device name using letters, numbers, underscores, or hyphens.
         * @pattern ^[A-Za-z0-9_-]{1,25}$
         */
        name: string;
        /**
         * Open Client OS code. Omit to use the Open Client desktop code O.
         * @minLength 1
         */
        os?: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Registered Open Client device identifier. */
        id: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Remove a user, or one of the user's devices, from a delivery group. */
    "pushover.remove_group_user": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
        /**
         * Pushover delivery group key.
         * @minLength 1
         */
        group_key: string;
        /**
         * User key to remove from the delivery group.
         * @minLength 1
         */
        user: string;
        /**
         * Optional device name restriction for the target user.
         * @minLength 1
         * @maxLength 100
         */
        device?: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Remove a user from a Pushover for Teams organization without deleting the user's Pushover account. */
    "pushover.remove_team_user": {
      input: {
        /**
         * Optional Team API token override. When omitted, the connected Team API token is used.
         * @minLength 1
         */
        token?: string;
        /**
         * Email address of the team user to remove.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Rename an existing Pushover delivery group. */
    "pushover.rename_group": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
        /**
         * Pushover delivery group key.
         * @minLength 1
         */
        group_key: string;
        /**
         * New name for the delivery group.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Send a Pushover notification to a user or delivery group, with optional emergency settings, URL metadata, and image attachment. */
    "pushover.send_message": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
        /**
         * Pushover user key or delivery group key.
         * @minLength 1
         */
        user: string;
        /**
         * Optional device name restriction for the target user.
         * @minLength 1
         * @maxLength 100
         */
        device?: string;
        /**
         * Notification body text, limited to 1024 UTF-8 characters.
         * @minLength 1
         * @maxLength 1024
         */
        message: string;
        /**
         * Optional message title shown above the notification body.
         * @minLength 1
         * @maxLength 250
         */
        title?: string;
        /**
         * Optional supplementary URL shown with the message.
         * @maxLength 512
         * @format uri
         */
        url?: string;
        /**
         * Optional title shown for the supplementary URL.
         * @minLength 1
         * @maxLength 100
         */
        url_title?: string;
        /**
         * Message priority: -2 lowest, -1 low, 0 normal, 1 high, 2 emergency.
         * @minimum -2
         * @maximum 2
         */
        priority?: number;
        /**
         * Time to live in seconds for the notification. Ignored for emergency messages.
         * @exclusiveMinimum 0
         */
        ttl?: number;
        /**
         * Seconds between retries for an emergency notification.
         * @minimum 30
         */
        retry?: number;
        /**
         * Maximum number of seconds to keep retrying an emergency notification.
         * @maximum 10800
         * @exclusiveMinimum 0
         */
        expire?: number;
        /** Whether the notification body should be parsed as HTML. */
        html?: boolean;
        /** Whether the notification body should be rendered in a monospace font. */
        monospace?: boolean;
        /**
         * Optional Unix timestamp displayed instead of the current time.
         * @minimum 0
         */
        timestamp?: number;
        /**
         * Optional callback URL invoked when an emergency notification is acknowledged.
         * @format uri
         */
        callback?: string;
        /**
         * Optional Pushover sound name used for the notification.
         * @minLength 1
         */
        sound?: string;
        /**
         * Optional comma-separated emergency tags stored with the receipt.
         * @minLength 1
         */
        tags?: string;
        /** Attachment stored in the configured transit bucket. */
        attachment?: {
          /**
           * Filename used when uploading the attachment to Pushover.
           * @minLength 1
           */
          name: string;
          /**
           * MIME type reported for the attachment upload.
           * @minLength 1
           */
          mimetype: string;
          /**
           * Transit object key or absolute transit URL for a previously downloaded attachment.
           * @minLength 1
           */
          s3key: string;
        };
        /**
         * MIME type for the inline base64 attachment.
         * @minLength 1
         */
        attachment_type?: string;
        /**
         * Base64-encoded image attachment content.
         * @minLength 1
         */
        attachment_base64?: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        /** Receipt identifier returned for emergency notifications. */
        receipt?: string;
        /** Additional parameter flags returned by Pushover for the request. */
        parameter_flags?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Validate a Pushover Team API token for later use. Persist the token through the provider connection extra field when needed. */
    "pushover.store_team_api_token": {
      input: {
        /**
         * Team API token to validate.
         * @minLength 1
         */
        token: string;
      };
      output: {
        /** Whether the Team API token passed validation. */
        success: boolean;
      };
    };
    /** Validate and echo a Pushover subscription code collected through the web subscription flow. */
    "pushover.subscription_flow": {
      input: {
        /**
         * Subscription code returned by the Pushover web subscription flow.
         * @minLength 1
         */
        subscription_code: string;
      };
      output: {
        /** Validated subscription code. */
        subscription_code: string;
      };
    };
    /** Update Pushover Glances widget data for a user without creating a push notification. */
    "pushover.update_glances": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
        /**
         * Pushover user key or delivery group key.
         * @minLength 1
         */
        user: string;
        /**
         * Optional device name restriction for the target user.
         * @minLength 1
         * @maxLength 100
         */
        device?: string;
        /**
         * Short Glances title.
         * @maxLength 100
         */
        title?: string;
        /**
         * Primary text shown by the widget.
         * @maxLength 100
         */
        text?: string;
        /**
         * Secondary text shown by the widget.
         * @maxLength 100
         */
        subtext?: string;
        /** Optional count value shown by Glances. */
        count?: number;
        /**
         * Optional percentage value shown by supported Glances widgets.
         * @minimum 0
         * @maximum 100
         */
        percent?: number;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Validate that a Pushover user or delivery group key can receive notifications, optionally restricted to one device. */
    "pushover.validate_user_or_group": {
      input: {
        /**
         * Optional application API token override. When omitted, the connected application token is used.
         * @minLength 1
         */
        token?: string;
        /**
         * Pushover user key or delivery group key.
         * @minLength 1
         */
        user: string;
        /**
         * Optional device name restriction for the target user.
         * @minLength 1
         * @maxLength 100
         */
        device?: string;
      };
      output: {
        /** Pushover status code. Successful requests return 1. */
        status: number;
        /** Unique request identifier returned by Pushover. */
        request: string;
        /** Error messages returned by Pushover when the request fails. */
        errors?: Array<string>;
        /** Active devices returned by the validation call. */
        devices: Array<string>;
        /** Licensed platforms returned by the validation call. */
        licenses: Array<string>;
        [key: string]: unknown;
      };
    };
  }
}
