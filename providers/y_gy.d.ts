import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Y.GY short link with optional QR, security, and routing settings. */
    "y_gy.create_link": {
      input: {
        /**
         * The destination URL or hostname/path that Y.GY should redirect to.
         * @minLength 1
         */
        destination_url: string;
        /**
         * A verified Y.GY custom domain, or y.gy when omitted.
         * @minLength 1
         */
        domain?: string;
        /**
         * The preferred custom suffix for the short link.
         * @minLength 1
         */
        suffix?: string;
        /**
         * The password required to access the short link.
         * @minLength 1
         */
        password?: string;
        /**
         * The updated title used in social link previews.
         * @minLength 1
         */
        og_title?: string;
        /**
         * The updated description used in social link previews.
         * @minLength 1
         */
        og_description?: string;
        /**
         * The updated image URL used in social link previews.
         * @format uri
         */
        og_image?: string;
        /**
         * The ISO 8601 timestamp when the short link should expire.
         * @format date-time
         */
        expiration_date?: string;
        /** The six-digit foreground color for the QR code. */
        qr_code_foreground_hex?: string;
        /** The six-digit background color for the QR code. */
        qr_code_background_hex?: string;
        /**
         * An internal name for the short link.
         * @minLength 1
         */
        name?: string;
        /**
         * Tag identifiers to associate with the short link.
         * @minItems 1
         */
        tags?: Array<number>;
        /**
         * The destination URL used for Android visitors.
         * @format uri
         */
        android_link_destination?: string;
        /**
         * The destination URL used for iOS visitors.
         * @format uri
         */
        ios_link_destination?: string;
        /**
         * The URL that Y.GY should notify with real-time link updates.
         * @format uri
         */
        webhook_url?: string;
        /**
         * The authentication key Y.GY should use for webhook requests.
         * @minLength 1
         */
        webhook_auth_key?: string;
        /** Whether Y.GY should skip PNG generation and return only the SVG QR code. */
        disable_png?: boolean;
      };
      output: {
        /** The unique Y.GY link identifier. */
        id: number;
        /**
         * The destination URL reached through the short link.
         * @format uri
         */
        destination_url: string;
        /**
         * The complete shortened URL.
         * @format uri
         */
        url: string;
        /** The timestamp string returned by Y.GY for link creation. */
        created_at?: string;
        /** The domain used by the short link. */
        domain?: string;
        /** The path suffix used by the short link. */
        suffix?: string;
        /** The organization identifier that owns the link. */
        organization_id?: number;
        /** The Open Graph title, or null when none is configured. */
        og_title?: string | null;
        /** The Open Graph description, or null when none is configured. */
        og_description?: string | null;
        /** The Open Graph image URL, or null when none is configured. */
        og_image?: string | null;
        /** The expiration timestamp, or null for no expiration. */
        expiration_date?: string | null;
        /** The SVG markup for the generated QR code. */
        qr_code_svg?: string;
        /** The generated QR code PNG URL, or null when PNG generation is disabled. */
        qr_code_png?: string | null;
        /** The QR code foreground color returned by Y.GY. */
        qr_code_foreground_hex?: string;
        /** The QR code background color returned by Y.GY. */
        qr_code_background_hex?: string;
        /** Whether the link is password protected. */
        has_password?: boolean;
        /** The Android-specific destination URL, or null when none is configured. */
        android_link_destination?: string | null;
        /** The iOS-specific destination URL, or null when none is configured. */
        ios_link_destination?: string | null;
        /** Whether bot protection is enabled, or null when the setting is unavailable. */
        bot_protection?: boolean | null;
        /** Whether CAPTCHA protection is enabled, or null when the setting is unavailable. */
        captcha?: boolean | null;
        /** The internal link name, or null when none is configured. */
        name?: string | null;
        /** Tags associated with the link. */
        tags?: Array<{
          /** The unique tag identifier. */
          id: number;
          /** The tag name. */
          name: string;
          /** The timestamp string returned by Y.GY for tag creation. */
          created_at: string;
          /** The organization identifier that owns the tag. */
          organization_id: number;
        }>;
        /** The webhook destination URL, or null when no webhook is configured. */
        webhook_url?: string | null;
      };
    };
    /** Delete a Y.GY short link by its identifier. */
    "y_gy.delete_link": {
      input: {
        /** The Y.GY link identifier returned by the API. */
        id: number | string;
      };
      output: {
        /**
         * The Y.GY link identifier returned by the API.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Whether the short link was deleted successfully. */
        deleted: true;
      };
    };
    /** Get one Y.GY short link by its identifier. */
    "y_gy.get_link": {
      input: {
        /** The Y.GY link identifier returned by the API. */
        id: number | string;
      };
      output: {
        /** The unique Y.GY link identifier. */
        id: number;
        /**
         * The destination URL reached through the short link.
         * @format uri
         */
        destination_url: string;
        /**
         * The complete shortened URL.
         * @format uri
         */
        url: string;
        /** The timestamp string returned by Y.GY for link creation. */
        created_at?: string;
        /** The domain used by the short link. */
        domain?: string;
        /** The path suffix used by the short link. */
        suffix?: string;
        /** The organization identifier that owns the link. */
        organization_id?: number;
        /** The Open Graph title, or null when none is configured. */
        og_title?: string | null;
        /** The Open Graph description, or null when none is configured. */
        og_description?: string | null;
        /** The Open Graph image URL, or null when none is configured. */
        og_image?: string | null;
        /** The expiration timestamp, or null for no expiration. */
        expiration_date?: string | null;
        /** The SVG markup for the generated QR code. */
        qr_code_svg?: string;
        /** The generated QR code PNG URL, or null when PNG generation is disabled. */
        qr_code_png?: string | null;
        /** The QR code foreground color returned by Y.GY. */
        qr_code_foreground_hex?: string;
        /** The QR code background color returned by Y.GY. */
        qr_code_background_hex?: string;
        /** Whether the link is password protected. */
        has_password?: boolean;
        /** The Android-specific destination URL, or null when none is configured. */
        android_link_destination?: string | null;
        /** The iOS-specific destination URL, or null when none is configured. */
        ios_link_destination?: string | null;
        /** Whether bot protection is enabled, or null when the setting is unavailable. */
        bot_protection?: boolean | null;
        /** Whether CAPTCHA protection is enabled, or null when the setting is unavailable. */
        captcha?: boolean | null;
        /** The internal link name, or null when none is configured. */
        name?: string | null;
        /** Tags associated with the link. */
        tags?: Array<{
          /** The unique tag identifier. */
          id: number;
          /** The tag name. */
          name: string;
          /** The timestamp string returned by Y.GY for tag creation. */
          created_at: string;
          /** The organization identifier that owns the tag. */
          organization_id: number;
        }>;
        /** The webhook destination URL, or null when no webhook is configured. */
        webhook_url?: string | null;
      };
    };
    /** List Y.GY short links with offset pagination. */
    "y_gy.list_links": {
      input: {
        /**
         * The maximum number of links to return; Y.GY defaults to 25.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of links to skip before collecting results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The links returned for the requested range. */
        links: Array<{
          /** The unique Y.GY link identifier. */
          id: number;
          /**
           * The destination URL reached through the short link.
           * @format uri
           */
          destination_url: string;
          /**
           * The complete shortened URL.
           * @format uri
           */
          url: string;
          /** The timestamp string returned by Y.GY for link creation. */
          created_at?: string;
          /** The domain used by the short link. */
          domain?: string;
          /** The path suffix used by the short link. */
          suffix?: string;
          /** The organization identifier that owns the link. */
          organization_id?: number;
          /** The Open Graph title, or null when none is configured. */
          og_title?: string | null;
          /** The Open Graph description, or null when none is configured. */
          og_description?: string | null;
          /** The Open Graph image URL, or null when none is configured. */
          og_image?: string | null;
          /** The expiration timestamp, or null for no expiration. */
          expiration_date?: string | null;
          /** The SVG markup for the generated QR code. */
          qr_code_svg?: string;
          /** The generated QR code PNG URL, or null when PNG generation is disabled. */
          qr_code_png?: string | null;
          /** The QR code foreground color returned by Y.GY. */
          qr_code_foreground_hex?: string;
          /** The QR code background color returned by Y.GY. */
          qr_code_background_hex?: string;
          /** Whether the link is password protected. */
          has_password?: boolean;
          /** The Android-specific destination URL, or null when none is configured. */
          android_link_destination?: string | null;
          /** The iOS-specific destination URL, or null when none is configured. */
          ios_link_destination?: string | null;
          /** Whether bot protection is enabled, or null when the setting is unavailable. */
          bot_protection?: boolean | null;
          /** Whether CAPTCHA protection is enabled, or null when the setting is unavailable. */
          captcha?: boolean | null;
          /** The internal link name, or null when none is configured. */
          name?: string | null;
          /** Tags associated with the link. */
          tags?: Array<{
            /** The unique tag identifier. */
            id: number;
            /** The tag name. */
            name: string;
            /** The timestamp string returned by Y.GY for tag creation. */
            created_at: string;
            /** The organization identifier that owns the tag. */
            organization_id: number;
          }>;
          /** The webhook destination URL, or null when no webhook is configured. */
          webhook_url?: string | null;
        }>;
        /**
         * The total number of links in the Y.GY account.
         * @minimum 0
         */
        total_links: number;
      };
    };
    /** Update the documented mutable settings of a Y.GY short link. */
    "y_gy.update_link": {
      input: {
        /** The Y.GY link identifier returned by the API. */
        id: number | string;
        /**
         * The destination URL or hostname/path that Y.GY should redirect to.
         * @minLength 1
         */
        destination_url?: string;
        /**
         * The password required to access the short link.
         * @minLength 1
         */
        password?: string;
        /**
         * The updated title used in social link previews.
         * @minLength 1
         */
        og_title?: string;
        /**
         * The updated description used in social link previews.
         * @minLength 1
         */
        og_description?: string;
        /**
         * The updated image URL used in social link previews.
         * @format uri
         */
        og_image?: string;
        /**
         * The ISO 8601 timestamp when the short link should expire.
         * @format date-time
         */
        expiration_date?: string;
        /** The six-digit foreground color for the QR code. */
        qr_code_foreground_hex?: string;
        /** The six-digit background color for the QR code. */
        qr_code_background_hex?: string;
        /**
         * The updated internal name for the short link.
         * @minLength 1
         */
        name?: string;
        /**
         * The destination URL used for Android visitors.
         * @format uri
         */
        android_link_destination?: string;
        /**
         * The destination URL used for iOS visitors.
         * @format uri
         */
        ios_link_destination?: string;
        /** Whether bots should be blocked from following the short link. */
        bot_protection?: boolean;
        /** Whether visitors must pass a CAPTCHA before being redirected. */
        captcha?: boolean;
        /**
         * The URL that Y.GY should notify with real-time link updates.
         * @format uri
         */
        webhook_url?: string;
        /**
         * The authentication key Y.GY should use for webhook requests.
         * @minLength 1
         */
        webhook_auth_key?: string;
        /**
         * Tag identifiers to add to the short link.
         * @minItems 1
         */
        add_tags?: Array<number>;
        /**
         * Tag identifiers to remove from the short link.
         * @minItems 1
         */
        remove_tags?: Array<number>;
      };
      output: {
        /** The unique Y.GY link identifier. */
        id: number;
        /**
         * The destination URL reached through the short link.
         * @format uri
         */
        destination_url: string;
        /**
         * The complete shortened URL.
         * @format uri
         */
        url: string;
        /** The timestamp string returned by Y.GY for link creation. */
        created_at?: string;
        /** The domain used by the short link. */
        domain?: string;
        /** The path suffix used by the short link. */
        suffix?: string;
        /** The organization identifier that owns the link. */
        organization_id?: number;
        /** The Open Graph title, or null when none is configured. */
        og_title?: string | null;
        /** The Open Graph description, or null when none is configured. */
        og_description?: string | null;
        /** The Open Graph image URL, or null when none is configured. */
        og_image?: string | null;
        /** The expiration timestamp, or null for no expiration. */
        expiration_date?: string | null;
        /** The SVG markup for the generated QR code. */
        qr_code_svg?: string;
        /** The generated QR code PNG URL, or null when PNG generation is disabled. */
        qr_code_png?: string | null;
        /** The QR code foreground color returned by Y.GY. */
        qr_code_foreground_hex?: string;
        /** The QR code background color returned by Y.GY. */
        qr_code_background_hex?: string;
        /** Whether the link is password protected. */
        has_password?: boolean;
        /** The Android-specific destination URL, or null when none is configured. */
        android_link_destination?: string | null;
        /** The iOS-specific destination URL, or null when none is configured. */
        ios_link_destination?: string | null;
        /** Whether bot protection is enabled, or null when the setting is unavailable. */
        bot_protection?: boolean | null;
        /** Whether CAPTCHA protection is enabled, or null when the setting is unavailable. */
        captcha?: boolean | null;
        /** The internal link name, or null when none is configured. */
        name?: string | null;
        /** Tags associated with the link. */
        tags?: Array<{
          /** The unique tag identifier. */
          id: number;
          /** The tag name. */
          name: string;
          /** The timestamp string returned by Y.GY for tag creation. */
          created_at: string;
          /** The organization identifier that owns the tag. */
          organization_id: number;
        }>;
        /** The webhook destination URL, or null when no webhook is configured. */
        webhook_url?: string | null;
      };
    };
  }
}
