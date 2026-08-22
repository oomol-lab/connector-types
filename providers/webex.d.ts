import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Schedule a Webex meeting. */
    "webex.create_meeting": {
      input: {
        /**
         * The meeting title.
         * @minLength 1
         * @pattern \S
         */
        title: string;
        /** The meeting agenda. */
        agenda?: string;
        /**
         * The meeting password.
         * @minLength 1
         * @pattern \S
         */
        password?: string;
        /**
         * The meeting start time in ISO 8601 format.
         * @format date-time
         */
        start: string;
        /**
         * The meeting end time in ISO 8601 format.
         * @format date-time
         */
        end: string;
        /**
         * The meeting timezone, such as America/Los_Angeles.
         * @minLength 1
         * @pattern \S
         */
        timezone?: string;
        /**
         * The meeting recurrence rule in Webex recurrence format.
         * @minLength 1
         * @pattern \S
         */
        recurrence?: string;
        /** Whether Webex should automatically record the meeting. */
        enabledAutoRecordMeeting?: boolean;
        /** Whether attendees may join before the host. */
        enabledJoinBeforeHost?: boolean;
        /** Whether Webex should send meeting notification email. */
        sendEmail?: boolean;
        /**
         * Integration-defined tags associated with the meeting.
         * @maxItems 3
         */
        integrationTags?: Array<string>;
        /** How many minutes before the host attendees may join. */
        joinBeforeHostMinutes?: 0 | 5 | 10 | 15;
        /** The meeting invitees. */
        invitees?: Array<{
          /**
           * The invitee email address.
           * @minLength 1
           */
          email: string;
          /** The invitee display name. */
          displayName?: string;
          /** Whether the invitee is a meeting cohost. */
          coHost?: boolean;
          /** Whether the invitee is a webinar panelist. */
          panelist?: boolean;
        }>;
        /**
         * The Webex site URL on which to schedule the meeting.
         * @minLength 1
         * @pattern \S
         */
        siteUrl?: string;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Webex membership. */
    "webex.create_membership": {
      input: {
        /**
         * The Webex room ID.
         * @minLength 1
         * @pattern \S
         */
        roomId: string;
        /**
         * The Webex person ID to add.
         * @minLength 1
         * @pattern \S
         */
        personId?: string;
        /**
         * The email address to add.
         * @minLength 1
         * @pattern \S
         */
        personEmail?: string;
        /** Whether the person should be a room moderator. */
        isModerator?: boolean;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Send a message to a Webex room or person. */
    "webex.create_message": {
      input: {
        /**
         * The destination Webex room ID.
         * @minLength 1
         * @pattern \S
         */
        roomId?: string;
        /**
         * The parent message ID when sending a threaded reply.
         * @minLength 1
         * @pattern \S
         */
        parentId?: string;
        /**
         * The destination Webex person ID for a direct message.
         * @minLength 1
         * @pattern \S
         */
        toPersonId?: string;
        /**
         * The destination email address for a direct message.
         * @minLength 1
         * @pattern \S
         */
        toPersonEmail?: string;
        /** The plain-text message content. */
        text?: string;
        /** The Markdown message content. */
        markdown?: string;
        /**
         * A publicly accessible file URL to attach to the message.
         * @minItems 1
         * @maxItems 1
         */
        files?: Array<string>;
        /**
         * An Adaptive Card attachment to send.
         * @minItems 1
         * @maxItems 1
         */
        attachments?: Array<Record<string, unknown>>;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Webex room. */
    "webex.create_room": {
      input: {
        /**
         * The room title.
         * @minLength 1
         * @pattern \S
         */
        title: string;
        /**
         * The Webex team ID that owns the room.
         * @minLength 1
         * @pattern \S
         */
        teamId?: string;
        /**
         * The Webex room classification ID.
         * @minLength 1
         * @pattern \S
         */
        classificationId?: string;
        /** Whether the room is locked. */
        isLocked?: boolean;
        /** Whether the room is public within the organization. */
        isPublic?: boolean;
        /** The room description. */
        description?: string;
        /** Whether only moderators can post messages. */
        isAnnouncementOnly?: boolean;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Webex team. */
    "webex.create_team": {
      input: {
        /**
         * The team name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** The team description. */
        description?: string;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Webex team membership. */
    "webex.create_team_membership": {
      input: {
        /**
         * The Webex team ID.
         * @minLength 1
         * @pattern \S
         */
        teamId: string;
        /**
         * The Webex person ID to add.
         * @minLength 1
         * @pattern \S
         */
        personId?: string;
        /**
         * The email address to add.
         * @minLength 1
         * @pattern \S
         */
        personEmail?: string;
        /** Whether the person should be a team moderator. */
        isModerator?: boolean;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a scheduled Webex meeting. */
    "webex.delete_meeting": {
      input: {
        /**
         * The Webex meeting ID.
         * @minLength 1
         * @pattern \S
         */
        meetingId: string;
        /** Whether Webex should send cancellation email. */
        sendEmail?: boolean;
      };
      output: {
        /** Whether Webex accepted the delete operation. */
        success: boolean;
      };
    };
    /** Delete a Webex membership. */
    "webex.delete_membership": {
      input: {
        /**
         * The Webex room membership ID.
         * @minLength 1
         * @pattern \S
         */
        membershipId: string;
      };
      output: {
        /** Whether Webex accepted the delete operation. */
        success: boolean;
      };
    };
    /** Delete a Webex message. */
    "webex.delete_message": {
      input: {
        /**
         * The Webex message ID.
         * @minLength 1
         * @pattern \S
         */
        messageId: string;
      };
      output: {
        /** Whether Webex accepted the delete operation. */
        success: boolean;
      };
    };
    /** Delete a Webex room. */
    "webex.delete_room": {
      input: {
        /**
         * The Webex room ID.
         * @minLength 1
         * @pattern \S
         */
        roomId: string;
      };
      output: {
        /** Whether Webex accepted the delete operation. */
        success: boolean;
      };
    };
    /** Delete a Webex team. */
    "webex.delete_team": {
      input: {
        /**
         * The Webex team ID.
         * @minLength 1
         * @pattern \S
         */
        teamId: string;
      };
      output: {
        /** Whether Webex accepted the delete operation. */
        success: boolean;
      };
    };
    /** Delete a Webex team membership. */
    "webex.delete_team_membership": {
      input: {
        /**
         * The Webex team membership ID.
         * @minLength 1
         * @pattern \S
         */
        membershipId: string;
      };
      output: {
        /** Whether Webex accepted the delete operation. */
        success: boolean;
      };
    };
    /** Download a Webex meeting transcript as VTT or plain text. */
    "webex.download_meeting_transcript": {
      input: {
        /**
         * The Webex meeting transcript ID.
         * @minLength 1
         * @pattern \S
         */
        transcriptId: string;
        /** The transcript download format. */
        format?: "vtt" | "txt";
      };
      output: {
        /** The transcript content returned by Webex. */
        content: string;
        /** The transcript response content type, or null when absent. */
        contentType: string | null;
      };
    };
    /** Get a scheduled or historical Webex meeting by ID. */
    "webex.get_meeting": {
      input: {
        /**
         * The Webex meeting ID.
         * @minLength 1
         * @pattern \S
         */
        meetingId: string;
        /** Whether to return the current recurring meeting instance. */
        current?: boolean;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Webex meeting participant by ID. */
    "webex.get_meeting_participant": {
      input: {
        /**
         * The Webex meeting participant ID.
         * @minLength 1
         * @pattern \S
         */
        participantId: string;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the AI-generated summary for a Webex meeting. */
    "webex.get_meeting_summary": {
      input: {
        /**
         * The Webex meeting ID.
         * @minLength 1
         * @pattern \S
         */
        meetingId: string;
      };
      output: {
        /** The resources returned by Webex. */
        items: Array<{
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        }>;
        /** The Webex URL for the next page, or null when this is the last page. */
        nextPageUrl: string | null;
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Webex membership by ID. */
    "webex.get_membership": {
      input: {
        /**
         * The Webex room membership ID.
         * @minLength 1
         * @pattern \S
         */
        membershipId: string;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Webex message by ID. */
    "webex.get_message": {
      input: {
        /**
         * The Webex message ID.
         * @minLength 1
         * @pattern \S
         */
        messageId: string;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Webex person by ID. */
    "webex.get_person": {
      input: {
        /**
         * The Webex person ID, or me for the authenticated user.
         * @minLength 1
         * @pattern \S
         */
        personId: string;
        /** Whether to include Webex Calling information. */
        callingData?: boolean;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Webex meeting recording details. */
    "webex.get_recording": {
      input: {
        /**
         * The Webex recording ID.
         * @minLength 1
         * @pattern \S
         */
        recordingId: string;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Webex room by ID. */
    "webex.get_room": {
      input: {
        /**
         * The Webex room ID.
         * @minLength 1
         * @pattern \S
         */
        roomId: string;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Webex team by ID. */
    "webex.get_team": {
      input: {
        /**
         * The Webex team ID.
         * @minLength 1
         * @pattern \S
         */
        teamId: string;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Webex team membership by ID. */
    "webex.get_team_membership": {
      input: {
        /**
         * The Webex team membership ID.
         * @minLength 1
         * @pattern \S
         */
        membershipId: string;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** List direct messages involving the authenticated Webex user. */
    "webex.list_direct_messages": {
      input: {
        /**
         * Only return replies to this parent message ID.
         * @minLength 1
         * @pattern \S
         */
        parentId?: string;
        /**
         * Only return direct messages with this Webex person ID.
         * @minLength 1
         * @pattern \S
         */
        personId?: string;
        /**
         * Only return direct messages with this email address.
         * @minLength 1
         * @pattern \S
         */
        personEmail?: string;
      };
      output: {
        /** The resources returned by Webex. */
        items: Array<{
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        }>;
        /** The Webex URL for the next page, or null when this is the last page. */
        nextPageUrl: string | null;
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** List participants for a Webex meeting. */
    "webex.list_meeting_participants": {
      input: {
        /**
         * The Webex meeting ID.
         * @minLength 1
         * @pattern \S
         */
        meetingId: string;
        /**
         * Only return participants from this breakout session.
         * @minLength 1
         * @pattern \S
         */
        breakoutSessionId?: string;
        /**
         * Only return meetings starting after this time.
         * @format date-time
         */
        meetingStartTimeFrom?: string;
        /**
         * Only return meetings starting before this time.
         * @format date-time
         */
        meetingStartTimeTo?: string;
        /**
         * Only return participants who joined after this time.
         * @format date-time
         */
        joinTimeFrom?: string;
        /**
         * Only return participants who joined before this time.
         * @format date-time
         */
        joinTimeTo?: string;
        /**
         * The maximum number of Webex records to return.
         * @minimum 1
         * @maximum 100
         */
        max?: number;
      };
      output: {
        /** The resources returned by Webex. */
        items: Array<{
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        }>;
        /** The Webex URL for the next page, or null when this is the last page. */
        nextPageUrl: string | null;
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** List transcripts generated for Webex meetings. */
    "webex.list_meeting_transcripts": {
      input: {
        /**
         * Only return transcripts created after this time.
         * @format date-time
         */
        from?: string;
        /**
         * Only return transcripts created before this time.
         * @format date-time
         */
        to?: string;
        /**
         * Filter transcripts by Webex meeting ID.
         * @minLength 1
         * @pattern \S
         */
        meetingId?: string;
        /**
         * Filter transcripts by Webex site URL.
         * @minLength 1
         * @pattern \S
         */
        siteUrl?: string;
        /**
         * The maximum number of Webex records to return.
         * @minimum 1
         * @maximum 100
         */
        max?: number;
      };
      output: {
        /** The resources returned by Webex. */
        items: Array<{
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        }>;
        /** The Webex URL for the next page, or null when this is the last page. */
        nextPageUrl: string | null;
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** List meetings visible to the authenticated Webex user. */
    "webex.list_meetings": {
      input: {
        /**
         * Filter by Webex meeting number.
         * @minLength 1
         * @pattern \S
         */
        meetingNumber?: string;
        /**
         * Filter by Webex meeting link.
         * @minLength 1
         * @pattern \S
         */
        webLink?: string;
        /**
         * Filter by meeting series ID.
         * @minLength 1
         * @pattern \S
         */
        meetingSeriesId?: string;
        /**
         * Only return meetings after this time.
         * @format date-time
         */
        from?: string;
        /**
         * Only return meetings before this time.
         * @format date-time
         */
        to?: string;
        /** The Webex meeting record type. */
        meetingType?: "meetingSeries" | "scheduledMeeting" | "meeting";
        /** The Webex meeting state. */
        state?: "active" | "scheduled" | "ready" | "lobby" | "inProgress" | "ended" | "missed" | "expired";
        /** The scheduled meeting type. */
        scheduledType?: "meeting" | "webinar" | "personalRoomMeeting";
        /** Whether to return only the current instance of recurring meetings. */
        current?: boolean;
        /**
         * Filter meetings by Webex site URL.
         * @minLength 1
         * @pattern \S
         */
        siteUrl?: string;
        /**
         * Filter meetings by integration tag.
         * @minLength 1
         * @pattern \S
         */
        integrationTag?: string;
        /**
         * The maximum number of Webex records to return.
         * @minimum 1
         * @maximum 100
         */
        max?: number;
      };
      output: {
        /** The resources returned by Webex. */
        items: Array<{
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        }>;
        /** The Webex URL for the next page, or null when this is the last page. */
        nextPageUrl: string | null;
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** List Webex memberships. */
    "webex.list_memberships": {
      input: {
        /**
         * Only return memberships for this room ID.
         * @minLength 1
         * @pattern \S
         */
        roomId?: string;
        /**
         * Only return memberships for this person ID.
         * @minLength 1
         * @pattern \S
         */
        personId?: string;
        /**
         * Only return memberships for this email address.
         * @minLength 1
         * @pattern \S
         */
        personEmail?: string;
        /**
         * The maximum number of Webex records to return.
         * @minimum 1
         * @maximum 1000
         */
        max?: number;
      };
      output: {
        /** The resources returned by Webex. */
        items: Array<{
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        }>;
        /** The Webex URL for the next page, or null when this is the last page. */
        nextPageUrl: string | null;
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** List messages in a Webex room. */
    "webex.list_messages": {
      input: {
        /**
         * The Webex room ID.
         * @minLength 1
         * @pattern \S
         */
        roomId: string;
        /**
         * Only return replies to this parent message ID.
         * @minLength 1
         * @pattern \S
         */
        parentId?: string;
        /**
         * Only return messages that mention the authenticated user.
         * @minItems 1
         * @maxItems 1
         */
        mentionedPeople?: Array<string>;
        /**
         * Only return messages sent before this time.
         * @format date-time
         */
        before?: string;
        /**
         * Only return messages sent before this message ID.
         * @minLength 1
         * @pattern \S
         */
        beforeMessage?: string;
        /**
         * The maximum number of Webex records to return.
         * @minimum 1
         * @maximum 1000
         */
        max?: number;
      };
      output: {
        /** The resources returned by Webex. */
        items: Array<{
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        }>;
        /** The Webex URL for the next page, or null when this is the last page. */
        nextPageUrl: string | null;
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** List people visible to the authenticated Webex user. */
    "webex.list_people": {
      input: {
        /**
         * Filter people by email address.
         * @minLength 1
         * @pattern \S
         */
        email?: string;
        /**
         * Filter people by display name.
         * @minLength 1
         * @pattern \S
         */
        displayName?: string;
        /**
         * Filter people by one or more Webex person IDs.
         * @minItems 1
         * @maxItems 85
         */
        id?: Array<string>;
        /** Filter people by one or more Webex role IDs. */
        roles?: Array<string>;
        /** Whether to include Webex Calling information. */
        callingData?: boolean;
        /**
         * Filter people by Webex Calling location ID.
         * @minLength 1
         * @pattern \S
         */
        locationId?: string;
        /** Whether to exclude the person status from the response. */
        excludeStatus?: boolean;
        /**
         * The maximum number of Webex records to return.
         * @minimum 1
         * @maximum 1000
         */
        max?: number;
      };
      output: {
        /** The resources returned by Webex. */
        items: Array<{
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        }>;
        /** The Webex URL for the next page, or null when this is the last page. */
        nextPageUrl: string | null;
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** List Webex meeting recordings. */
    "webex.list_recordings": {
      input: {
        /**
         * Only return recordings created after this time.
         * @format date-time
         */
        from?: string;
        /**
         * Only return recordings created before this time.
         * @format date-time
         */
        to?: string;
        /**
         * Filter recordings by Webex meeting ID.
         * @minLength 1
         * @pattern \S
         */
        meetingId?: string;
        /**
         * Filter recordings by Webex site URL.
         * @minLength 1
         * @pattern \S
         */
        siteUrl?: string;
        /**
         * Filter recordings by integration tag.
         * @minLength 1
         * @pattern \S
         */
        integrationTag?: string;
        /**
         * Filter recordings by topic.
         * @minLength 1
         * @pattern \S
         */
        topic?: string;
        /** The recording format. */
        format?: "MP4" | "ARF";
        /** The recording status. */
        status?: "available" | "deleted" | "purged";
        /**
         * The maximum number of Webex records to return.
         * @minimum 1
         * @maximum 100
         */
        max?: number;
      };
      output: {
        /** The resources returned by Webex. */
        items: Array<{
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        }>;
        /** The Webex URL for the next page, or null when this is the last page. */
        nextPageUrl: string | null;
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** List rooms visible to the authenticated Webex user. */
    "webex.list_rooms": {
      input: {
        /**
         * Only return rooms belonging to this Webex team ID.
         * @minLength 1
         * @pattern \S
         */
        teamId?: string;
        /** Only return rooms of this type. */
        type?: "direct" | "group";
        /** Whether to include organization public spaces. */
        orgPublicSpaces?: boolean;
        /**
         * Only return rooms updated after this time.
         * @format date-time
         */
        from?: string;
        /**
         * Only return rooms updated before this time.
         * @format date-time
         */
        to?: string;
        /** How Webex should sort the rooms. */
        sortBy?: "id" | "lastactivity" | "created";
        /**
         * The maximum number of Webex records to return.
         * @minimum 1
         * @maximum 1000
         */
        max?: number;
      };
      output: {
        /** The resources returned by Webex. */
        items: Array<{
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        }>;
        /** The Webex URL for the next page, or null when this is the last page. */
        nextPageUrl: string | null;
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** List Webex team memberships. */
    "webex.list_team_memberships": {
      input: {
        /**
         * The Webex team ID.
         * @minLength 1
         * @pattern \S
         */
        teamId: string;
        /**
         * The maximum number of Webex records to return.
         * @minimum 1
         * @maximum 1000
         */
        max?: number;
      };
      output: {
        /** The resources returned by Webex. */
        items: Array<{
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        }>;
        /** The Webex URL for the next page, or null when this is the last page. */
        nextPageUrl: string | null;
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** List Webex teams. */
    "webex.list_teams": {
      input: {
        /**
         * The maximum number of Webex records to return.
         * @minimum 1
         * @maximum 1000
         */
        max?: number;
      };
      output: {
        /** The resources returned by Webex. */
        items: Array<{
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        }>;
        /** The Webex URL for the next page, or null when this is the last page. */
        nextPageUrl: string | null;
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a scheduled Webex meeting. */
    "webex.update_meeting": {
      input: {
        /**
         * The Webex meeting ID.
         * @minLength 1
         * @pattern \S
         */
        meetingId: string;
        /**
         * The meeting title.
         * @minLength 1
         * @pattern \S
         */
        title?: string;
        /** The meeting agenda. */
        agenda?: string;
        /**
         * The meeting password.
         * @minLength 1
         * @pattern \S
         */
        password?: string;
        /**
         * The meeting start time in ISO 8601 format.
         * @format date-time
         */
        start?: string;
        /**
         * The meeting end time in ISO 8601 format.
         * @format date-time
         */
        end?: string;
        /**
         * The meeting timezone, such as America/Los_Angeles.
         * @minLength 1
         * @pattern \S
         */
        timezone?: string;
        /**
         * The meeting recurrence rule in Webex recurrence format.
         * @minLength 1
         * @pattern \S
         */
        recurrence?: string;
        /** Whether Webex should automatically record the meeting. */
        enabledAutoRecordMeeting?: boolean;
        /** Whether attendees may join before the host. */
        enabledJoinBeforeHost?: boolean;
        /** Whether Webex should send meeting notification email. */
        sendEmail?: boolean;
        /**
         * Integration-defined tags associated with the meeting.
         * @maxItems 3
         */
        integrationTags?: Array<string>;
        /** How many minutes before the host attendees may join. */
        joinBeforeHostMinutes?: 0 | 5 | 10 | 15 | 30 | 45 | 60;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Webex membership. */
    "webex.update_membership": {
      input: {
        /**
         * The Webex room membership ID.
         * @minLength 1
         * @pattern \S
         */
        membershipId: string;
        /** Whether the member is a room moderator. */
        isModerator: boolean;
        /** Whether the room is hidden for the member. */
        isRoomHidden: boolean;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Webex message. */
    "webex.update_message": {
      input: {
        /**
         * The Webex message ID.
         * @minLength 1
         * @pattern \S
         */
        messageId: string;
        /**
         * The Webex room ID containing the message.
         * @minLength 1
         * @pattern \S
         */
        roomId: string;
        /** The replacement plain-text message content. */
        text?: string;
        /** The replacement Markdown message content. */
        markdown?: string;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Webex room. */
    "webex.update_room": {
      input: {
        /**
         * The Webex room ID.
         * @minLength 1
         * @pattern \S
         */
        roomId: string;
        /**
         * The replacement room title.
         * @minLength 1
         * @pattern \S
         */
        title: string;
        /**
         * The replacement room classification ID.
         * @minLength 1
         * @pattern \S
         */
        classificationId?: string;
        /**
         * The Webex team ID that owns the room.
         * @minLength 1
         * @pattern \S
         */
        teamId?: string;
        /** Whether the room is locked. */
        isLocked?: boolean;
        /** Whether the room is public within the organization. */
        isPublic?: boolean;
        /** The replacement room description. */
        description?: string;
        /** Whether only moderators can post messages. */
        isAnnouncementOnly?: boolean;
        /** Whether the room is read-only. */
        isReadOnly?: boolean;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Webex team. */
    "webex.update_team": {
      input: {
        /**
         * The Webex team ID.
         * @minLength 1
         * @pattern \S
         */
        teamId: string;
        /**
         * The replacement team name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** The replacement team description. */
        description?: string;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Webex team membership. */
    "webex.update_team_membership": {
      input: {
        /**
         * The Webex team membership ID.
         * @minLength 1
         * @pattern \S
         */
        membershipId: string;
        /** Whether the member is a team moderator. */
        isModerator: boolean;
      };
      output: {
        /** The complete resource returned by Webex. */
        item: {
          /** The stable Webex resource ID. */
          id?: string;
          [key: string]: unknown;
        };
        /** The complete Webex response body. */
        raw: Record<string, unknown>;
      };
    };
  }
}
