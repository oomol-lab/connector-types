import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add tags to multiple Omnisend contacts in a batch. */
    "omnisend.add_tags": {
      input: {
        /**
         * Omnisend contact IDs.
         * @minItems 1
         * @maxItems 250
         */
        contactIDs: Array<string>;
        /**
         * Tags to add or remove.
         * @minItems 1
         * @maxItems 100
         */
        tags: Array<string>;
      };
      output: {
        /** Whether Omnisend accepted the tag operation. */
        success: boolean;
      };
    };
    /** Fetch a single Omnisend contact by ID. */
    "omnisend.get_contact": {
      input: {
        /**
         * Omnisend contact ID.
         * @minLength 1
         */
        contactID: string;
      };
      output: Record<string, unknown>;
    };
    /** Fetch a single Omnisend segment by ID. */
    "omnisend.get_segment": {
      input: {
        /**
         * Omnisend segment ID. Omnisend documents segment IDs as 24-character hexadecimal strings.
         * @minLength 24
         * @maxLength 24
         */
        segmentID: string;
      };
      output: Record<string, unknown>;
    };
    /** List Omnisend contacts with documented filters and cursor pagination. */
    "omnisend.list_contacts": {
      input: {
        /**
         * Number of contacts per page. Range: 1-250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * Opaque cursor for fetching the next page.
         * @minLength 1
         */
        after?: string;
        /**
         * Opaque cursor for fetching the previous page.
         * @minLength 1
         */
        before?: string;
        /** Contact sort field accepted by Omnisend. */
        sort?: "createdAt" | "updatedAt";
        /** Sort direction accepted by Omnisend. */
        direction?: "asc" | "desc";
        /**
         * Filter by email address.
         * @format email
         */
        email?: string;
        /**
         * Filter by phone number.
         * @minLength 1
         */
        phone?: string;
        /** Contact subscription status filter. */
        status?: "subscribed" | "unsubscribed" | "nonSubscribed";
        /**
         * Filter by segment ID.
         * @minLength 1
         */
        segmentID?: string;
        /**
         * Filter by tag. Cannot be combined with status.
         * @minLength 1
         */
        tag?: string;
        /**
         * Filter contacts updated at or after this RFC3339 timestamp.
         * @format date-time
         */
        updatedAtFrom?: string;
      };
      output: {
        /** Contact resources returned by Omnisend. */
        contacts: Array<Record<string, unknown>>;
        /** Cursor-based pagination metadata returned by Omnisend. */
        paging: {
          /** Whether more results are available beyond the current page. */
          hasMore?: boolean;
          /** Cursor values for navigating between pages. */
          cursors?: {
            /** Opaque cursor for fetching the next page. */
            after?: string | null;
            /** Opaque cursor for fetching the previous page. */
            before?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List Omnisend segments with sorting and cursor pagination. */
    "omnisend.list_segments": {
      input: {
        /**
         * Number of segments per page. Range: 1-50.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Opaque cursor for fetching the next page.
         * @minLength 1
         */
        after?: string;
        /**
         * Opaque cursor for fetching the previous page.
         * @minLength 1
         */
        before?: string;
        /** Segment sort field accepted by Omnisend. */
        sort?: "createdAt" | "name";
        /** Sort direction accepted by Omnisend. */
        direction?: "asc" | "desc";
      };
      output: {
        /** Segment resources returned by Omnisend. */
        segments: Array<Record<string, unknown>>;
        /** Cursor-based pagination metadata returned by Omnisend. */
        paging: {
          /** Whether more results are available beyond the current page. */
          hasMore?: boolean;
          /** Cursor values for navigating between pages. */
          cursors?: {
            /** Opaque cursor for fetching the next page. */
            after?: string | null;
            /** Opaque cursor for fetching the previous page. */
            before?: string | null;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Remove tags from multiple Omnisend contacts in a batch. */
    "omnisend.remove_tags": {
      input: {
        /**
         * Omnisend contact IDs.
         * @minItems 1
         * @maxItems 250
         */
        contactIDs: Array<string>;
        /**
         * Tags to add or remove.
         * @minItems 1
         * @maxItems 100
         */
        tags: Array<string>;
      };
      output: {
        /** Whether Omnisend accepted the tag operation. */
        success: boolean;
      };
    };
    /** Update an existing Omnisend contact selected by email address. */
    "omnisend.update_contact_by_email": {
      input: {
        /**
         * Contact email address used to select the Omnisend contact.
         * @format email
         */
        email: string;
        /**
         * Street, house number, apartment number.
         * @minLength 1
         */
        address?: string;
        /**
         * Contact birthdate in YYYY-MM-DD format.
         * @format date
         */
        birthdate?: string;
        /**
         * Contact city.
         * @minLength 1
         */
        city?: string;
        /**
         * Country name. Used to derive ISO country code when countryCode is not provided.
         * @minLength 1
         */
        country?: string;
        /**
         * ISO 3166-1 alpha-2 country code.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /**
         * Contact creation timestamp. Omnisend stores it as the "externalCreated" custom property.
         * @format date-time
         */
        createdAt?: string;
        /** Custom contact properties defined for the brand. */
        customProperties?: Record<string, unknown>;
        /**
         * Contact first name.
         * @minLength 1
         */
        firstName?: string;
        /** Contact gender accepted by Omnisend. */
        gender?: "m" | "f";
        /**
         * Contact identifiers, such as email or phone.
         * @minItems 1
         */
        identifiers?: Array<{
          /**
           * Identifier value. For email, provide an email address. For phone, provide an E.164 phone number.
           * @minLength 1
           */
          id: string;
          /** Contact identifier type accepted by Omnisend. */
          type: "email" | "phone";
          /** Communication channels keyed by channel name. */
          channels?: Record<string, {
              /** Contact subscription status filter. */
              status: "subscribed" | "unsubscribed" | "nonSubscribed";
              /**
               * Timestamp when the channel status last changed.
               * @format date-time
               */
              statusChangedAt?: string;
            }>;
          /** Consent record for a contact channel. */
          consent?: {
            /**
             * Consent collection timestamp in RFC3339 format. Defaults to current time if not provided.
             * @format date-time
             */
            createdAt?: string;
            /**
             * IP address at time of consent.
             * @minLength 1
             */
            ip?: string;
            /**
             * Source of consent.
             * @minLength 1
             */
            source?: string;
            /**
             * User agent at time of consent.
             * @minLength 1
             */
            userAgent?: string;
          };
          /** Whether to send a welcome message for this identifier when the workflow is enabled. */
          sendWelcomeMessage?: boolean;
          /**
           * Source of the identifier.
           * @minLength 1
           */
          source?: string;
        }>;
        /**
         * Contact last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * Postal or zip code.
         * @minLength 1
         */
        postalCode?: string;
        /**
         * State or region.
         * @minLength 1
         */
        state?: string;
        /**
         * Labels assigned to the contact.
         * @maxItems 100
         */
        tags?: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Update an existing Omnisend contact selected by contact ID. */
    "omnisend.update_contact_by_id": {
      input: {
        /**
         * Omnisend contact ID.
         * @minLength 1
         */
        contactID: string;
        /**
         * Street, house number, apartment number.
         * @minLength 1
         */
        address?: string;
        /**
         * Contact birthdate in YYYY-MM-DD format.
         * @format date
         */
        birthdate?: string;
        /**
         * Contact city.
         * @minLength 1
         */
        city?: string;
        /**
         * Country name. Used to derive ISO country code when countryCode is not provided.
         * @minLength 1
         */
        country?: string;
        /**
         * ISO 3166-1 alpha-2 country code.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /**
         * Contact creation timestamp. Omnisend stores it as the "externalCreated" custom property.
         * @format date-time
         */
        createdAt?: string;
        /** Custom contact properties defined for the brand. */
        customProperties?: Record<string, unknown>;
        /**
         * Contact first name.
         * @minLength 1
         */
        firstName?: string;
        /** Contact gender accepted by Omnisend. */
        gender?: "m" | "f";
        /**
         * Contact identifiers, such as email or phone.
         * @minItems 1
         */
        identifiers?: Array<{
          /**
           * Identifier value. For email, provide an email address. For phone, provide an E.164 phone number.
           * @minLength 1
           */
          id: string;
          /** Contact identifier type accepted by Omnisend. */
          type: "email" | "phone";
          /** Communication channels keyed by channel name. */
          channels?: Record<string, {
              /** Contact subscription status filter. */
              status: "subscribed" | "unsubscribed" | "nonSubscribed";
              /**
               * Timestamp when the channel status last changed.
               * @format date-time
               */
              statusChangedAt?: string;
            }>;
          /** Consent record for a contact channel. */
          consent?: {
            /**
             * Consent collection timestamp in RFC3339 format. Defaults to current time if not provided.
             * @format date-time
             */
            createdAt?: string;
            /**
             * IP address at time of consent.
             * @minLength 1
             */
            ip?: string;
            /**
             * Source of consent.
             * @minLength 1
             */
            source?: string;
            /**
             * User agent at time of consent.
             * @minLength 1
             */
            userAgent?: string;
          };
          /** Whether to send a welcome message for this identifier when the workflow is enabled. */
          sendWelcomeMessage?: boolean;
          /**
           * Source of the identifier.
           * @minLength 1
           */
          source?: string;
        }>;
        /**
         * Contact last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * Postal or zip code.
         * @minLength 1
         */
        postalCode?: string;
        /**
         * State or region.
         * @minLength 1
         */
        state?: string;
        /**
         * Labels assigned to the contact.
         * @maxItems 100
         */
        tags?: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Create a new Omnisend contact or update an existing contact matched by email. */
    "omnisend.upsert_contact": {
      input: {
        /**
         * Street, house number, apartment number.
         * @minLength 1
         */
        address?: string;
        /**
         * Contact birthdate in YYYY-MM-DD format.
         * @format date
         */
        birthdate?: string;
        /**
         * Contact city.
         * @minLength 1
         */
        city?: string;
        /**
         * Country name. Used to derive ISO country code when countryCode is not provided.
         * @minLength 1
         */
        country?: string;
        /**
         * ISO 3166-1 alpha-2 country code.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /**
         * Contact creation timestamp. Omnisend stores it as the "externalCreated" custom property.
         * @format date-time
         */
        createdAt?: string;
        /** Custom contact properties defined for the brand. */
        customProperties?: Record<string, unknown>;
        /**
         * Contact first name.
         * @minLength 1
         */
        firstName?: string;
        /** Contact gender accepted by Omnisend. */
        gender?: "m" | "f";
        /**
         * Contact identifiers, such as email or phone.
         * @minItems 1
         */
        identifiers: Array<{
          /**
           * Identifier value. For email, provide an email address. For phone, provide an E.164 phone number.
           * @minLength 1
           */
          id: string;
          /** Contact identifier type accepted by Omnisend. */
          type: "email" | "phone";
          /** Communication channels keyed by channel name. */
          channels?: Record<string, {
              /** Contact subscription status filter. */
              status: "subscribed" | "unsubscribed" | "nonSubscribed";
              /**
               * Timestamp when the channel status last changed.
               * @format date-time
               */
              statusChangedAt?: string;
            }>;
          /** Consent record for a contact channel. */
          consent?: {
            /**
             * Consent collection timestamp in RFC3339 format. Defaults to current time if not provided.
             * @format date-time
             */
            createdAt?: string;
            /**
             * IP address at time of consent.
             * @minLength 1
             */
            ip?: string;
            /**
             * Source of consent.
             * @minLength 1
             */
            source?: string;
            /**
             * User agent at time of consent.
             * @minLength 1
             */
            userAgent?: string;
          };
          /** Whether to send a welcome message for this identifier when the workflow is enabled. */
          sendWelcomeMessage?: boolean;
          /**
           * Source of the identifier.
           * @minLength 1
           */
          source?: string;
        }>;
        /**
         * Contact last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * Postal or zip code.
         * @minLength 1
         */
        postalCode?: string;
        /**
         * State or region.
         * @minLength 1
         */
        state?: string;
        /**
         * Labels assigned to the contact.
         * @maxItems 100
         */
        tags?: Array<string>;
      };
      output: Record<string, unknown>;
    };
  }
}
