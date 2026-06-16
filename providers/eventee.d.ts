import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the event content export, including halls, sessions, pauses, speakers, and tracks. */
    "eventee.get_event_content": {
      input: Record<string, never>;
      output: {
        /** Normalized Eventee content export. */
        content: {
          /** Halls returned by Eventee. */
          halls: Array<{
            /** Unique identifier of the hall. */
            id: number;
            /** Display name of the hall. */
            name: string;
            /** Timestamp when the hall was created. */
            created_at?: string;
            /** Timestamp when the hall was last updated. */
            updated_at?: string;
            [key: string]: unknown;
          }>;
          /** Lectures returned by Eventee. */
          lectures: Array<{
            /** Unique identifier of the session. */
            id: number;
            /** Display name of the session. */
            name: string;
            /** Description of the session. */
            description?: string;
            /** Session start timestamp. */
            start?: string;
            /** Session end timestamp. */
            end?: string;
            /** Hall identifier assigned to the session. */
            hall_id?: number;
            /** Speakers assigned to the session. */
            speakers?: Array<unknown>;
            /** Whether the session has discussion enabled. */
            discussion?: boolean;
            /** Whether the session has moderation enabled. */
            moderating?: boolean;
            /** Whether the session has polling enabled. */
            polling?: boolean;
            /** Capacity limit of the session. */
            capacity?: number;
            /** Numeric Eventee session type. */
            type?: number;
            /** Streaming metadata attached to the session. */
            stream?: Record<string, unknown>;
            /** Virtual meeting metadata attached to the session. */
            virtual_meeting?: Record<string, unknown>;
            /** Tracks assigned to the session. */
            tracks?: Array<unknown>;
            /** Booking information for the session. */
            booking_info?: Array<unknown>;
            /** Timestamp when the session was created. */
            created_at?: string;
            /** Timestamp when the session was last updated. */
            updated_at?: string;
            [key: string]: unknown;
          }>;
          /** Workshops returned by Eventee. */
          workshops: Array<{
            /** Unique identifier of the session. */
            id: number;
            /** Display name of the session. */
            name: string;
            /** Description of the session. */
            description?: string;
            /** Session start timestamp. */
            start?: string;
            /** Session end timestamp. */
            end?: string;
            /** Hall identifier assigned to the session. */
            hall_id?: number;
            /** Speakers assigned to the session. */
            speakers?: Array<unknown>;
            /** Whether the session has discussion enabled. */
            discussion?: boolean;
            /** Whether the session has moderation enabled. */
            moderating?: boolean;
            /** Whether the session has polling enabled. */
            polling?: boolean;
            /** Capacity limit of the session. */
            capacity?: number;
            /** Numeric Eventee session type. */
            type?: number;
            /** Streaming metadata attached to the session. */
            stream?: Record<string, unknown>;
            /** Virtual meeting metadata attached to the session. */
            virtual_meeting?: Record<string, unknown>;
            /** Tracks assigned to the session. */
            tracks?: Array<unknown>;
            /** Booking information for the session. */
            booking_info?: Array<unknown>;
            /** Timestamp when the session was created. */
            created_at?: string;
            /** Timestamp when the session was last updated. */
            updated_at?: string;
            [key: string]: unknown;
          }>;
          /** Pauses returned by Eventee. */
          pauses: Array<{
            /** Unique identifier of the pause item. */
            id: number;
            /** Display name of the pause item. */
            name: string;
            /** Description of the pause item. */
            description?: string;
            /** Pause start timestamp. */
            start?: string;
            /** Pause end timestamp. */
            end?: string;
            /** Timestamp when the pause item was created. */
            created_at?: string;
            /** Timestamp when the pause item was last updated. */
            updated_at?: string;
            [key: string]: unknown;
          }>;
          /** Speakers returned by Eventee. */
          speakers: Array<{
            /** Unique identifier of the speaker. */
            id: number;
            /** Display name of the speaker. */
            name: string;
            /** Email address of the speaker. */
            email?: string;
            /** Profile photo URL of the speaker. */
            photo?: string;
            /** Phone number of the speaker. */
            phone?: string;
            /** Biography of the speaker. */
            bio?: string;
            /** Website URL of the speaker. */
            web?: string;
            /** Facebook profile URL of the speaker. */
            facebook?: string;
            /** Twitter profile URL of the speaker. */
            twitter?: string;
            /** LinkedIn profile URL of the speaker. */
            linkedIn?: string;
            /** Job title of the speaker. */
            position?: string;
            /** Company name of the speaker. */
            company?: string;
            /** Country code of the speaker. */
            country?: string;
            /** Language information of the speaker. */
            language?: string;
            /** Parent event identifier of the speaker. */
            event_id?: number;
            /** Thumbnail image URL of the speaker. */
            thumbnail?: string;
            [key: string]: unknown;
          }>;
          /** Tracks returned by Eventee. */
          tracks: Array<{
            /** Unique identifier of the track. */
            id: number;
            /** Display name of the track. */
            name: string;
            /** Hex color value assigned to the track. */
            color?: string;
            [key: string]: unknown;
          }>;
        };
      };
    };
    /** List all attendee groups configured for the current Eventee event. */
    "eventee.list_groups": {
      input: Record<string, never>;
      output: {
        /** Groups returned by Eventee. */
        groups: Array<{
          /** Unique identifier of the attendee group. */
          id: number;
          /** Internal name of the attendee group. */
          name: string;
          /** Public label shown to attendees. */
          public_name?: string;
          /** Hex color assigned to the attendee group. */
          color?: string;
          /** Emoji assigned to the attendee group. */
          emoji?: string;
          /** Whether the group can access the agenda. */
          agenda?: boolean;
          /** Whether the group can access the newsfeed. */
          newsfeed?: boolean;
          /** Whether the group can access networking features. */
          networking?: boolean;
          /** Whether the group can submit session ratings. */
          session_ratings?: boolean;
          /** Whether the group can access the social wall. */
          social_wall?: boolean;
          /** Whether the group can access gamification. */
          gamification?: boolean;
          /** Ticket names mapped to the attendee group. */
          ticket_names?: Array<string>;
          /** Whether the attendee group is the default one. */
          is_default?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List all participants currently registered in the current Eventee event. */
    "eventee.list_participants": {
      input: Record<string, never>;
      output: {
        /** Participants returned by Eventee. */
        participants: Array<{
          /** Unique identifier of the participant. */
          id: number;
          /** Email address of the participant. */
          email: string;
          /** Full display name of the participant. */
          name?: string;
          /** First name of the participant. */
          first_name?: string;
          /** Last name of the participant. */
          last_name?: string;
          /** Company name of the participant. */
          company?: string;
          /** Job title of the participant. */
          position?: string;
          /** Role code assigned by Eventee. */
          role?: string;
          /** Group identifier assigned to the participant. */
          group_id?: number;
          /** Timestamp when the participant checked in. */
          checked_at?: string | null;
          /** Timestamp when the participant was registered. */
          registered_at?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List all pending or completed registrations for the current Eventee event. */
    "eventee.list_registrations": {
      input: Record<string, never>;
      output: {
        /** Registrations returned by Eventee. */
        registrations: Array<{
          /** Unique identifier of the registration. */
          id: number;
          /** Email address of the registration. */
          email: string;
          /** First name captured in the registration. */
          first_name?: string;
          /** Last name captured in the registration. */
          last_name?: string;
          /** Photo URL attached to the registration. */
          photo?: string;
          /** Phone number captured in the registration. */
          phone?: string;
          /** Bio captured in the registration. */
          bio?: string;
          /** Website URL captured in the registration. */
          web?: string;
          /** Facebook link captured in the registration. */
          facebook_link?: string;
          /** Twitter link captured in the registration. */
          twitter_link?: string;
          /** LinkedIn link captured in the registration. */
          linked_in_link?: string;
          /** Position captured in the registration. */
          position?: string;
          /** Company captured in the registration. */
          company?: string;
          /** Whether Eventee should send email to the registrant. */
          send_email?: boolean;
          /** Group identifier assigned to the registration. */
          group_id?: number;
          /** Whether Eventee considers the email valid. */
          email_valid?: boolean;
          /** Registration status code returned by Eventee. */
          status?: number | string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List all session reviews submitted by attendees for the current Eventee event. */
    "eventee.list_reviews": {
      input: Record<string, never>;
      output: {
        /** Reviews returned by Eventee. */
        reviews: Array<{
          /** Unique identifier of the review. */
          id: number;
          /** Username of the attendee who submitted the review. */
          username?: string;
          /** Profile photo URL of the attendee. */
          userphoto?: string;
          /** Star rating submitted for the lecture. */
          stars?: number;
          /** Free-form comment submitted with the review. */
          comment?: string;
          /** Identifier of the attendee who submitted the review. */
          user_id?: number;
          /** Identifier of the lecture being reviewed. */
          lecture_id?: number;
          /** Lecture summary referenced by the review. */
          lecture?: {
            /** Unique identifier of the related lecture. */
            id: number;
            /** Display name of the related lecture. */
            name?: string;
            [key: string]: unknown;
          };
          /** Device name captured when the review was submitted. */
          device?: string;
          /** Operating system captured when the review was submitted. */
          OS?: string;
          /** Timestamp when the review was created. */
          created_at?: string;
          /** Timestamp when the review was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
