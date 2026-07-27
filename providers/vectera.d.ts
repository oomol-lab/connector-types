import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Vectera meeting room with optional ownership and access settings. */
    "vectera.create_meeting_room": {
      input: {
        /**
         * A unique identifier to use in the meeting room URL.
         * @minLength 1
         * @maxLength 255
         */
        key?: string;
        /**
         * A preferred meeting room key that Vectera may suffix to avoid conflicts.
         * @minLength 1
         * @maxLength 255
         */
        preferredKey?: string;
        /**
         * The Vectera meeting room template id to apply.
         * @minLength 1
         */
        templateId?: string;
        /**
         * The Vectera user id that owns the meeting room.
         * @minLength 1
         */
        ownerId?: string;
        /** The access level granted for a Vectera meeting room. */
        publicAccessLevel?: "should_knock" | "can_always_join" | "is_host";
        /** The access level granted for a Vectera meeting room. */
        teamAccessLevel?: "should_knock" | "can_always_join" | "is_host";
        /**
         * Optional related fields to include in each Vectera meeting room response.
         * @minItems 1
         * @maxItems 2
         */
        include?: Array<"owner" | "numTranscriptions">;
      };
      output: {
        /** A Vectera meeting room returned by the API. */
        meetingRoom: {
          /** The Vectera meeting room id. */
          id?: string;
          /** The identifier used in the meeting room URL. */
          key?: string;
          /**
           * The public URL used to join the meeting room.
           * @format uri
           */
          url?: string;
          /** The id of the meeting room owner. */
          ownerId?: string;
          /** The access level granted for a Vectera meeting room. */
          publicAccessLevel?: "should_knock" | "can_always_join" | "is_host";
          /** The access level granted for a Vectera meeting room. */
          teamAccessLevel?: "should_knock" | "can_always_join" | "is_host";
          /**
           * When the meeting room was created.
           * @format date-time
           */
          dateCreated?: string;
          /** Whether at least one participant is currently in the meeting room. */
          isOpened?: boolean;
          /** Whether the meeting room currently has an active multi-participant session. */
          isActive?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Create a shareable Vectera meeting room access permission and join URL. */
    "vectera.create_meeting_room_permission": {
      input: {
        /**
         * The Vectera meeting room id to grant access to.
         * @minLength 1
         */
        meetingRoomId: string;
        /** The access level granted for a Vectera meeting room. */
        accessLevel?: "should_knock" | "can_always_join" | "is_host";
        /**
         * An email address that should receive the meeting room invitation.
         * @format email
         */
        email?: string;
        /**
         * A Vectera user id that should receive the invitation.
         * @minLength 1
         */
        userId?: string;
        /** The optional message included with an emailed invitation. */
        inviteMessage?: string;
      };
      output: {
        /** A Vectera meeting room permission returned by the API. */
        permission: {
          /** The Vectera meeting room permission id. */
          id?: string;
          /** The id of the meeting room this permission grants access to. */
          meetingRoomId?: string;
          /** The secure access key generated for this permission. */
          accessKey?: string;
          /**
           * The URL used to join the meeting room with this permission.
           * @format uri
           */
          url?: string;
          /** The access level granted for a Vectera meeting room. */
          accessLevel?: "should_knock" | "can_always_join" | "is_host";
          [key: string]: unknown;
        };
      };
    };
    /** Get the user associated with the connected Vectera API token. */
    "vectera.get_current_user": {
      input: {
        /**
         * Optional related fields to include in the current Vectera user response.
         * @minItems 1
         * @maxItems 3
         */
        include?: Array<"organization" | "organization.defaultSmartSummaryTemplate" | "organization.integrationStatus">;
      };
      output: {
        /** The current Vectera user returned by the API. */
        user: {
          /** The Vectera user id. */
          id?: string;
          /** The username within the Vectera organization. */
          username?: string | null;
          /** The user's first name. */
          firstName?: string;
          /** The user's last name. */
          lastName?: string;
          /** The user's full display name. */
          fullName?: string;
          /**
           * The user's email address.
           * @format email
           */
          email?: string;
          /** The id of the user's Vectera organization. */
          organizationId?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Vectera meeting room by id. */
    "vectera.get_meeting_room": {
      input: {
        /**
         * The Vectera meeting room id.
         * @minLength 1
         */
        meetingRoomId: string;
        /**
         * Optional related fields to include in each Vectera meeting room response.
         * @minItems 1
         * @maxItems 2
         */
        include?: Array<"owner" | "numTranscriptions">;
      };
      output: {
        /** A Vectera meeting room returned by the API. */
        meetingRoom: {
          /** The Vectera meeting room id. */
          id?: string;
          /** The identifier used in the meeting room URL. */
          key?: string;
          /**
           * The public URL used to join the meeting room.
           * @format uri
           */
          url?: string;
          /** The id of the meeting room owner. */
          ownerId?: string;
          /** The access level granted for a Vectera meeting room. */
          publicAccessLevel?: "should_knock" | "can_always_join" | "is_host";
          /** The access level granted for a Vectera meeting room. */
          teamAccessLevel?: "should_knock" | "can_always_join" | "is_host";
          /**
           * When the meeting room was created.
           * @format date-time
           */
          dateCreated?: string;
          /** Whether at least one participant is currently in the meeting room. */
          isOpened?: boolean;
          /** Whether the meeting room currently has an active multi-participant session. */
          isActive?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Get settings for one Vectera meeting room. */
    "vectera.get_meeting_room_settings": {
      input: {
        /**
         * The Vectera meeting room id.
         * @minLength 1
         */
        meetingRoomId: string;
      };
      output: {
        /** Vectera meeting room settings. */
        settings: {
          /** Whether private note controls are visible to the meeting room host. */
          showPrivateNotes?: boolean;
          /** Whether presenter mode is active in the meeting room. */
          presenterMode?: boolean;
          /** The URL guests are sent to after the meeting ends. */
          forwardUrl?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Vectera meeting rooms available to the connected user. */
    "vectera.list_meeting_rooms": {
      input: {
        /**
         * The 1-based result page to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of meeting rooms to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * Text to search for in meeting room keys.
         * @minLength 1
         */
        search?: string;
        /**
         * A Vectera filter expression for meeting room fields.
         * @minLength 1
         */
        filter?: string;
        /**
         * Meeting room fields to sort by; prefix a field with - for descending order.
         * @minItems 1
         */
        orderBy?: Array<string>;
        /**
         * Optional related fields to include in each Vectera meeting room response.
         * @minItems 1
         * @maxItems 2
         */
        include?: Array<"owner" | "numTranscriptions">;
      };
      output: {
        /** The meeting rooms returned for this page. */
        meetingRooms: Array<{
          /** The Vectera meeting room id. */
          id?: string;
          /** The identifier used in the meeting room URL. */
          key?: string;
          /**
           * The public URL used to join the meeting room.
           * @format uri
           */
          url?: string;
          /** The id of the meeting room owner. */
          ownerId?: string;
          /** The access level granted for a Vectera meeting room. */
          publicAccessLevel?: "should_knock" | "can_always_join" | "is_host";
          /** The access level granted for a Vectera meeting room. */
          teamAccessLevel?: "should_knock" | "can_always_join" | "is_host";
          /**
           * When the meeting room was created.
           * @format date-time
           */
          dateCreated?: string;
          /** Whether at least one participant is currently in the meeting room. */
          isOpened?: boolean;
          /** Whether the meeting room currently has an active multi-participant session. */
          isActive?: boolean;
          [key: string]: unknown;
        }>;
        /** Pagination links parsed from the Vectera Link header. */
        pagination: {
          /**
           * The requested 1-based page number.
           * @minimum 1
           */
          page: number;
          /**
           * The URL of the next page, or null when there is no next page.
           * @format uri
           */
          next: string | null;
          /**
           * The URL of the previous page, or null when there is no previous page.
           * @format uri
           */
          previous: string | null;
          /**
           * The URL of the first page, or null when it is not returned.
           * @format uri
           */
          first: string | null;
          /**
           * The URL of the last page, or null when it is not returned.
           * @format uri
           */
          last: string | null;
        };
      };
    };
    /** Update the key, owner, or access levels of a Vectera meeting room. */
    "vectera.update_meeting_room": {
      input: {
        /**
         * The Vectera meeting room id.
         * @minLength 1
         */
        meetingRoomId: string;
        /**
         * A unique identifier to use in the meeting room URL.
         * @minLength 1
         * @maxLength 255
         */
        key?: string;
        /**
         * The Vectera user id that owns the meeting room.
         * @minLength 1
         */
        ownerId?: string;
        /** The access level granted for a Vectera meeting room. */
        publicAccessLevel?: "should_knock" | "can_always_join" | "is_host";
        /** The access level granted for a Vectera meeting room. */
        teamAccessLevel?: "should_knock" | "can_always_join" | "is_host";
        /**
         * Optional related fields to include in each Vectera meeting room response.
         * @minItems 1
         * @maxItems 2
         */
        include?: Array<"owner" | "numTranscriptions">;
      };
      output: {
        /** A Vectera meeting room returned by the API. */
        meetingRoom: {
          /** The Vectera meeting room id. */
          id?: string;
          /** The identifier used in the meeting room URL. */
          key?: string;
          /**
           * The public URL used to join the meeting room.
           * @format uri
           */
          url?: string;
          /** The id of the meeting room owner. */
          ownerId?: string;
          /** The access level granted for a Vectera meeting room. */
          publicAccessLevel?: "should_knock" | "can_always_join" | "is_host";
          /** The access level granted for a Vectera meeting room. */
          teamAccessLevel?: "should_knock" | "can_always_join" | "is_host";
          /**
           * When the meeting room was created.
           * @format date-time
           */
          dateCreated?: string;
          /** Whether at least one participant is currently in the meeting room. */
          isOpened?: boolean;
          /** Whether the meeting room currently has an active multi-participant session. */
          isActive?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Update writable settings for one Vectera meeting room. */
    "vectera.update_meeting_room_settings": {
      input: {
        /**
         * The Vectera meeting room id.
         * @minLength 1
         */
        meetingRoomId: string;
        /** Whether private note controls are visible to the meeting room host. */
        showPrivateNotes?: boolean;
        /** Whether presenter mode is active in the meeting room. */
        presenterMode?: boolean;
        /** The URL guests are sent to after the meeting, or an empty string to remove it. */
        forwardUrl?: string;
      };
      output: {
        /** Vectera meeting room settings. */
        settings: {
          /** Whether private note controls are visible to the meeting room host. */
          showPrivateNotes?: boolean;
          /** Whether presenter mode is active in the meeting room. */
          presenterMode?: boolean;
          /** The URL guests are sent to after the meeting ends. */
          forwardUrl?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
