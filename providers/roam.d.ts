import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a Roam HQ magicast by ID. */
    "roam.get_magicast": {
      input: {
        /**
         * The magicast ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** A Roam HQ magicast. */
        magicast: {
          /**
           * The unique magicast ID.
           * @format uuid
           */
          id: string;
          /** The magicast display name. */
          name: string;
          /**
           * The timestamp when the magicast was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * The address ID of the magicast owner.
           * @format uuid
           */
          ownerId?: string;
          /**
           * The magicast cover image thumbnail URL.
           * @format uri
           */
          coverImageUrl?: string;
          [key: string]: unknown;
        };
        /** The raw JSON payload returned by Roam HQ. */
        raw: unknown;
      };
    };
    /** List public, non-archived groups in the authenticated Roam HQ organization. */
    "roam.list_groups": {
      input: Record<string, never>;
      output: {
        /** The groups returned by Roam HQ. */
        groups: Array<{
          /** The Roam group address ID. */
          addressId?: string;
          /** The numeric Roam ID. */
          roamId?: number;
          /** The numeric account ID. */
          accountId?: number;
          /** The group type reported by Roam HQ. */
          groupType?: string;
          /** The group display name. */
          name?: string;
          /** The group access mode. */
          accessMode?: string;
          /** The group management setting. */
          groupManagement?: string;
          /** Whether threaded mode is enforced for the group. */
          enforceThreadedMode?: boolean;
          /** The timestamp when the group was created. */
          dateCreated?: string;
          /**
           * The group image URL.
           * @format uri
           */
          imageUrl?: string;
          [key: string]: unknown;
        }>;
        /** The raw JSON payload returned by Roam HQ. */
        raw: unknown;
      };
    };
    /** List Roam HQ magicasts in reverse chronological order. */
    "roam.list_magicasts": {
      input: {
        /**
         * The maximum number of items to request.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The opaque pagination cursor returned by a previous response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The magicasts returned by Roam HQ. */
        magicasts: Array<{
          /**
           * The unique magicast ID.
           * @format uuid
           */
          id: string;
          /** The magicast display name. */
          name: string;
          /**
           * The timestamp when the magicast was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * The address ID of the magicast owner.
           * @format uuid
           */
          ownerId?: string;
          /**
           * The magicast cover image thumbnail URL.
           * @format uri
           */
          coverImageUrl?: string;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page of magicasts. */
        nextCursor: string | null;
        /** The raw JSON payload returned by Roam HQ. */
        raw: unknown;
      };
    };
    /** List Roam HQ meeting recordings with optional date filtering and pagination. */
    "roam.list_recordings": {
      input: {
        /**
         * The UTC date or RFC 3339 datetime to begin listing recordings.
         * @minLength 1
         */
        after?: string;
        /**
         * The UTC date or RFC 3339 datetime until which to list recordings.
         * @minLength 1
         */
        before?: string;
        /**
         * The maximum number of recordings to request.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The opaque pagination cursor returned by a previous response.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The recordings returned by Roam HQ. */
        recordings: Array<{
          /**
           * The unique recording ID.
           * @format uuid
           */
          recordingId?: string;
          /** The Roam room where the recording took place. */
          location?: string;
          /**
           * The timestamp when the recording began.
           * @format date-time
           */
          startTime?: string;
          /**
           * The timestamp when the recording ended.
           * @format date-time
           */
          endTime?: string;
          /**
           * The downloadable video URL for the recording.
           * @format uri
           */
          videoUrl?: string;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page of recordings. */
        nextCursor: string | null;
        /** The raw JSON payload returned by Roam HQ. */
        raw: unknown;
      };
    };
    /** Send a message to a single Roam HQ group as a bot. */
    "roam.send_message": {
      input: {
        /**
         * The Roam HQ group address ID to send the message to.
         * @format uuid
         */
        groupId: string;
        /**
         * The message text to send.
         * @minLength 1
         */
        text: string;
        /** Whether Roam HQ should interpret the text as Markdown. */
        markdown?: boolean;
        /** Optional bot sender identity for a Roam HQ message. */
        sender?: {
          /**
           * The internal bot sender ID.
           * @minLength 1
           * @maxLength 16
           */
          id: string;
          /**
           * The user-visible bot sender name.
           * @minLength 1
           */
          name?: string;
          /**
           * The bot sender image URL.
           * @format uri
           */
          imageUrl?: string;
        };
      };
      output: {
        /** The chat ID returned by Roam HQ. */
        chatId: string;
        /** The send status returned by Roam HQ. */
        status: string;
        /** The raw JSON payload returned by Roam HQ. */
        raw: unknown;
      };
    };
  }
}
