import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Daily meeting token for room access control. */
    "daily.create_meeting_token": {
      input: {
        /** Daily meeting token properties to send as-is. */
        properties: {
          /**
           * The Daily room name.
           * @minLength 1
           */
          room_name?: string;
          /** The UNIX timestamp after which the token cannot be used. */
          exp?: number;
          /** The UNIX timestamp before which the token cannot be used. */
          nbf?: number;
          /** Whether the token grants meeting owner privileges. */
          is_owner?: boolean;
          /** The participant display name for the meeting. */
          user_name?: string;
          /**
           * The participant ID for the meeting.
           * @maxLength 36
           */
          user_id?: string;
          /** Whether this participant joins with camera off by default. */
          start_video_off?: boolean;
          /** Whether this participant joins with microphone off by default. */
          start_audio_off?: boolean;
          /** Whether to eject the participant when the meeting token expires. */
          eject_at_token_exp?: boolean;
          /** The number of seconds after join when the participant is ejected. */
          eject_after_elapsed?: number;
          [key: string]: unknown;
        };
      };
      output: {
        /**
         * The Daily meeting token.
         * @minLength 1
         */
        token: string;
      };
    };
    /** Create a Daily room with optional privacy and configuration properties. */
    "daily.create_room": {
      input: {
        /** The room name. Daily generates a name when omitted. */
        name?: string;
        /** The Daily room privacy setting. */
        privacy?: "public" | "private";
        /** Daily room configuration properties to send as-is. */
        properties?: {
          /** The UNIX timestamp before which users cannot join the room. */
          nbf?: number;
          /** The UNIX timestamp after which users cannot join the room. */
          exp?: number;
          /** The maximum number of participants allowed in the room. */
          max_participants?: number;
          /** Whether Daily Prebuilt shows the prejoin UI for this room. */
          enable_prejoin_ui?: boolean;
          /** Whether Daily Prebuilt shows the People UI. */
          enable_people_ui?: boolean;
          /** Whether Daily Prebuilt shows Picture in Picture controls. */
          enable_pip_ui?: boolean;
          /** Whether Daily Prebuilt chat is enabled. */
          enable_chat?: boolean;
          /** Whether participants join with camera off by default. */
          start_video_off?: boolean;
          /** Whether participants join with microphone off by default. */
          start_audio_off?: boolean;
          /** The default Daily Prebuilt language for this room. */
          lang?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** A Daily room object. */
        room: {
          /** The Daily room ID. */
          id?: string;
          /** The Daily room name. */
          name?: string;
          /** Whether the room was created through the API. */
          api_created?: boolean;
          /** The Daily room privacy setting. */
          privacy?: string;
          /** The Daily room URL. */
          url?: string;
          /** The room creation timestamp. */
          created_at?: string;
          /** The Daily room configuration object. */
          config?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Daily room by name. */
    "daily.delete_room": {
      input: {
        /**
         * The Daily room name.
         * @minLength 1
         */
        room_name: string;
      };
      output: {
        /** Whether Daily deleted the room. */
        deleted: boolean;
        /** The deleted Daily room name. */
        name: string;
      };
    };
    /** Get the top-level configuration for the connected Daily domain. */
    "daily.get_domain_config": {
      input: Record<string, never>;
      output: {
        /** A Daily domain configuration object. */
        domain: {
          /** The Daily domain name. */
          domain_name?: string;
          /** The Daily domain ID. */
          domain_id?: string;
          /** The Daily domain configuration object. */
          config?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get configuration and metadata for a Daily room by name. */
    "daily.get_room": {
      input: {
        /**
         * The Daily room name.
         * @minLength 1
         */
        room_name: string;
      };
      output: {
        /** A Daily room object. */
        room: {
          /** The Daily room ID. */
          id?: string;
          /** The Daily room name. */
          name?: string;
          /** Whether the room was created through the API. */
          api_created?: boolean;
          /** The Daily room privacy setting. */
          privacy?: string;
          /** The Daily room URL. */
          url?: string;
          /** The room creation timestamp. */
          created_at?: string;
          /** The Daily room configuration object. */
          config?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List Daily rooms with cursor pagination. */
    "daily.list_rooms": {
      input: {
        /**
         * The maximum number of rooms to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Return rooms created after this room ID cursor. */
        starting_after?: string;
        /** Return rooms created before this room ID cursor, or OLDEST for oldest rooms. */
        ending_before?: string;
      };
      output: {
        /** The total number of rooms returned by Daily. */
        total_count?: number;
        /** The Daily rooms returned by the list endpoint. */
        rooms: Array<{
          /** The Daily room ID. */
          id?: string;
          /** The Daily room name. */
          name?: string;
          /** Whether the room was created through the API. */
          api_created?: boolean;
          /** The Daily room privacy setting. */
          privacy?: string;
          /** The Daily room URL. */
          url?: string;
          /** The room creation timestamp. */
          created_at?: string;
          /** The Daily room configuration object. */
          config?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** A Daily object returned by the REST API. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Daily room's privacy and configuration properties. */
    "daily.update_room": {
      input: {
        /**
         * The Daily room name.
         * @minLength 1
         */
        room_name: string;
        /** The Daily room privacy setting. */
        privacy?: "public" | "private";
        /** Daily room configuration properties to send as-is. */
        properties?: {
          /** The UNIX timestamp before which users cannot join the room. */
          nbf?: number;
          /** The UNIX timestamp after which users cannot join the room. */
          exp?: number;
          /** The maximum number of participants allowed in the room. */
          max_participants?: number;
          /** Whether Daily Prebuilt shows the prejoin UI for this room. */
          enable_prejoin_ui?: boolean;
          /** Whether Daily Prebuilt shows the People UI. */
          enable_people_ui?: boolean;
          /** Whether Daily Prebuilt shows Picture in Picture controls. */
          enable_pip_ui?: boolean;
          /** Whether Daily Prebuilt chat is enabled. */
          enable_chat?: boolean;
          /** Whether participants join with camera off by default. */
          start_video_off?: boolean;
          /** Whether participants join with microphone off by default. */
          start_audio_off?: boolean;
          /** The default Daily Prebuilt language for this room. */
          lang?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** A Daily room object. */
        room: {
          /** The Daily room ID. */
          id?: string;
          /** The Daily room name. */
          name?: string;
          /** Whether the room was created through the API. */
          api_created?: boolean;
          /** The Daily room privacy setting. */
          privacy?: string;
          /** The Daily room URL. */
          url?: string;
          /** The room creation timestamp. */
          created_at?: string;
          /** The Daily room configuration object. */
          config?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
