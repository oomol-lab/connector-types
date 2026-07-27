import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Continue a Fireflies AskFred thread with a follow-up question. */
    "fireflies.continue_askfred_thread": {
      input: {
        /**
         * The Fireflies AskFred thread identifier.
         * @minLength 1
         */
        thread_id: string;
        /**
         * The follow-up AskFred query to execute.
         * @minLength 1
         * @maxLength 2000
         */
        query: string;
        /**
         * The AskFred response language code.
         * @minLength 1
         */
        response_language?: string;
        /** The AskFred response format. */
        format_mode?: "markdown" | "plaintext";
      };
      output: {
        /** The Fireflies AskFred message created by the request. */
        message: {
          /** The AskFred message identifier. */
          id?: string;
          /** The AskFred message error text. */
          error?: string;
          /** The AskFred message query text. */
          query?: string;
          /** The AskFred message answer text. */
          answer?: string;
          /** The AskFred message status. */
          status?: string;
          /** The AskFred thread identifier. */
          thread_id?: string;
          /** The AskFred message creation timestamp. */
          created_at?: string;
          /** The AskFred message update timestamp. */
          updated_at?: string;
          /** Suggested AskFred follow-up queries. */
          suggested_queries?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Fireflies AskFred thread from a meeting question. */
    "fireflies.create_askfred_thread": {
      input: {
        /**
         * The AskFred query to execute.
         * @minLength 1
         * @maxLength 2000
         */
        query: string;
        /**
         * The Fireflies transcript identifier used for a single-meeting AskFred query.
         * @minLength 1
         */
        transcript_id?: string;
        /** Meeting filters used for multi-meeting AskFred queries. */
        filters?: {
          /**
           * Inclusive start datetime for AskFred meeting filters.
           * @format date-time
           */
          start_time?: string;
          /**
           * Inclusive end datetime for AskFred meeting filters.
           * @format date-time
           */
          end_time?: string;
          /**
           * Organizer email addresses used to filter AskFred meetings.
           * @minItems 1
           */
          organizers?: Array<string>;
          /**
           * Participant email addresses used to filter AskFred meetings.
           * @minItems 1
           */
          participants?: Array<string>;
          /**
           * Channel identifiers used to filter AskFred meetings.
           * @minItems 1
           */
          channel_ids?: Array<string>;
          /**
           * Transcript identifiers used to filter AskFred meetings.
           * @minItems 1
           */
          transcript_ids?: Array<string>;
          [key: string]: unknown;
        };
        /**
         * The AskFred response language code.
         * @minLength 1
         */
        response_language?: string;
        /** The AskFred response format. */
        format_mode?: "markdown" | "plaintext";
      };
      output: {
        /** The Fireflies AskFred message created by the request. */
        message: {
          /** The AskFred message identifier. */
          id?: string;
          /** The AskFred message error text. */
          error?: string;
          /** The AskFred message query text. */
          query?: string;
          /** The AskFred message answer text. */
          answer?: string;
          /** The AskFred message status. */
          status?: string;
          /** The AskFred thread identifier. */
          thread_id?: string;
          /** The AskFred message creation timestamp. */
          created_at?: string;
          /** The AskFred message update timestamp. */
          updated_at?: string;
          /** Suggested AskFred follow-up queries. */
          suggested_queries?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Fireflies bite from a transcript time range. */
    "fireflies.create_bite": {
      input: {
        /**
         * The Fireflies transcript identifier used to create the bite.
         * @minLength 1
         */
        transcript_id: string;
        /**
         * The bite start time in seconds.
         * @minimum 0
         */
        start_time: number;
        /**
         * The bite end time in seconds.
         * @minimum 0
         */
        end_time: number;
        /**
         * The name for the created bite.
         * @minLength 1
         * @maxLength 256
         */
        name?: string;
        /**
         * The summary for the created bite.
         * @minLength 1
         * @maxLength 500
         */
        summary?: string;
        /** The media type to create for the bite. */
        media_type?: "video" | "audio";
        /**
         * Visibility settings for the created bite.
         * @minItems 1
         */
        privacies?: Array<"public" | "team" | "participants">;
      };
      output: {
        /** The created Fireflies bite. */
        bite: {
          /** The created Fireflies bite identifier. */
          id: string;
          /** The created Fireflies bite title. */
          name?: string;
          /** The created Fireflies bite status. */
          status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Fireflies AskFred thread by thread ID. */
    "fireflies.delete_askfred_thread": {
      input: {
        /**
         * The Fireflies AskFred thread identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The deleted Fireflies AskFred thread. */
        askfred_thread: {
          /** The AskFred thread identifier. */
          id?: string;
          /** The AskFred thread title. */
          title?: string;
          /** The AskFred thread creator identifier. */
          user_id?: string;
          /** The AskFred thread creation timestamp. */
          created_at?: string;
          /** The AskFred transcript identifier. */
          transcript_id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Fireflies transcript by transcript ID. */
    "fireflies.delete_transcript": {
      input: {
        /**
         * The Fireflies transcript identifier to delete.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The deleted Fireflies transcript. */
        deleted_transcript: {
          /** The deleted Fireflies transcript identifier. */
          id?: string;
          /** The deleted transcript timestamp in milliseconds since Unix epoch. */
          date?: number;
          /** The deleted Fireflies transcript title. */
          title?: string;
          /** The deleted transcript duration. */
          duration?: number;
          /** The deleted transcript audio URL. */
          audio_url?: string;
          /** The deleted transcript video URL. */
          video_url?: string;
          /** The deleted transcript host email address. */
          host_email?: string;
          /** Participant email addresses on the deleted transcript. */
          participants?: Array<string>;
          /** The deleted transcript dashboard URL. */
          transcript_url?: string;
          /** Fireflies users linked to the deleted transcript. */
          fireflies_users?: Array<string>;
          /** The deleted transcript organizer email address. */
          organizer_email?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Execute a raw read-only Fireflies GraphQL query and return the raw response. */
    "fireflies.execute_graphql_query": {
      input: {
        /**
         * The Fireflies GraphQL query document.
         * @minLength 1
         */
        query: string;
        /** GraphQL variables used with the query document. */
        variables?: Record<string, unknown>;
        /**
         * The GraphQL operation name to execute.
         * @minLength 1
         */
        operationName?: string;
      };
      output: {
        /** The raw Fireflies GraphQL data payload. */
        data?: unknown;
        /** GraphQL errors returned by the Fireflies query. */
        errors?: Array<{
          /** The GraphQL error message. */
          message?: string;
          /** The GraphQL error code. */
          code?: string;
          /** Whether the GraphQL error is safe to display. */
          friendly?: boolean;
          /** Path segments for the GraphQL error. */
          path?: Array<string | number>;
          /** Locations for the GraphQL error. */
          locations?: Array<{
            /** The GraphQL error line number. */
            line?: number;
            /** The GraphQL error column number. */
            column?: number;
            [key: string]: unknown;
          }>;
          /** Extensions attached to the GraphQL error. */
          extensions?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Additional metadata returned by the Fireflies GraphQL response. */
        extensions?: Record<string, unknown>;
      };
    };
    /** Get a Fireflies AskFred thread by thread ID. */
    "fireflies.get_askfred_thread": {
      input: {
        /**
         * The Fireflies AskFred thread identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The requested Fireflies AskFred thread. */
        askfred_thread: {
          /** The AskFred thread identifier. */
          id?: string;
          /** The AskFred thread title. */
          title?: string;
          /** The AskFred thread creator identifier. */
          user_id?: string;
          /** The AskFred thread creation timestamp. */
          created_at?: string;
          /** The AskFred transcript identifier. */
          transcript_id?: string;
          /** Messages returned for the AskFred thread. */
          messages?: Array<{
            /** The AskFred message identifier. */
            id?: string;
            /** The AskFred message error text. */
            error?: string;
            /** The AskFred message query text. */
            query?: string;
            /** The AskFred message answer text. */
            answer?: string;
            /** The AskFred message status. */
            status?: string;
            /** The AskFred thread identifier. */
            thread_id?: string;
            /** The AskFred message creation timestamp. */
            created_at?: string;
            /** The AskFred message update timestamp. */
            updated_at?: string;
            /** Suggested AskFred follow-up queries. */
            suggested_queries?: Array<string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Fireflies bite by bite ID. */
    "fireflies.get_bite": {
      input: {
        /**
         * The Fireflies bite identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The requested Fireflies bite. */
        bite: {
          /** The Fireflies bite identifier. */
          id: string;
          /** The Fireflies transcript identifier for the bite. */
          transcript_id: string;
          /** The Fireflies bite title. */
          name?: string;
          /** The bite creator. */
          user?: {
            /** The Fireflies bite user identifier. */
            id?: string;
            /** The Fireflies bite user display name. */
            name?: string;
            /** The bite user profile picture URL. */
            picture?: string;
            /** The bite user first name. */
            first_name?: string;
            /** The bite user last name. */
            last_name?: string;
            [key: string]: unknown;
          };
          /** The bite processing status. */
          status?: string;
          /** The bite preview URL. */
          preview?: string;
          /** Media sources for the bite. */
          sources?: Array<{
            /** The bite media source URL. */
            src: string;
            /** The bite media source type. */
            type?: string;
            [key: string]: unknown;
          }>;
          /** The bite summary text. */
          summary?: string;
          /** The Fireflies user identifier that created the bite. */
          user_id?: string;
          /** Captions for the bite. */
          captions?: Array<{
            /** The caption position index. */
            index?: number | string;
            /** The caption speaker identifier. */
            speaker_id: string;
            /** The caption speaker name. */
            speaker_name?: string;
            /** The caption text. */
            text?: string;
            /** The caption start time. */
            start_time?: number | string;
            /** The caption end time. */
            end_time?: number | string;
            [key: string]: unknown;
          }>;
          /** The bite end time in seconds. */
          end_time?: number;
          /** Visibility settings for the bite. */
          privacies?: Array<string>;
          /** The bite thumbnail URL. */
          thumbnail?: string;
          /** The bite creation timestamp. */
          created_at?: string;
          /** The bite media type. */
          media_type?: string;
          /** The bite start time in seconds. */
          start_time?: number;
          /** The origin of the bite. */
          created_from?: {
            /** The source identifier for the bite. */
            id?: string;
            /** The source name for the bite. */
            name?: string;
            /** The source type for the bite. */
            type?: string;
            /** The source duration for the bite in seconds. */
            duration?: number;
            /** The source description for the bite. */
            description?: string;
            [key: string]: unknown;
          };
          /** The bite summary generation status. */
          summary_status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the authenticated Fireflies user for the current API key. */
    "fireflies.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The authenticated Fireflies user. */
        user: {
          /** The Fireflies user identifier. */
          user_id: string;
          /** The Fireflies user email address. */
          email?: string;
          /** The Fireflies user full name. */
          name?: string;
          /** Whether the Fireflies user is an admin. */
          is_admin?: boolean;
          /** The most recent meeting for the user. */
          recent_meeting?: string;
          /** The most recent transcript for the user. */
          recent_transcript?: string;
          /** The number of transcripts for the user. */
          num_transcripts?: number;
          /** The meeting minutes consumed by the user. */
          minutes_consumed?: number;
          /** Integrations enabled for the Fireflies user. */
          integrations?: Array<string>;
          /** User groups attached to the Fireflies user. */
          user_groups?: Array<{
            /** The Fireflies user group identifier. */
            id: string;
            /** The Fireflies user group name. */
            name?: string;
            /** The Fireflies user group handle. */
            handle?: string;
            /** Members in the Fireflies user group. */
            members?: Array<{
              /** The Fireflies user identifier. */
              user_id: string;
              /** The member first name. */
              first_name?: string;
              /** The member last name. */
              last_name?: string;
              /** The member email address. */
              email?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Fireflies transcript by transcript ID. */
    "fireflies.get_transcript": {
      input: {
        /**
         * The Fireflies transcript identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The requested Fireflies transcript. */
        transcript: {
          /** The Fireflies transcript identifier. */
          id: string;
          /** The Fireflies transcript title. */
          title?: string;
          /** The transcript timestamp in milliseconds since Unix epoch. */
          date?: number;
          /** The Fireflies user that owns the transcript. */
          user?: {
            /** The Fireflies user identifier. */
            user_id: string;
            /** The Fireflies user email address. */
            email?: string;
            /** The Fireflies user full name. */
            name?: string;
            /** Whether the Fireflies user is an admin. */
            is_admin?: boolean;
            /** The most recent meeting for the user. */
            recent_meeting?: string;
            /** The most recent transcript for the user. */
            recent_transcript?: string;
            /** The number of transcripts for the user. */
            num_transcripts?: number;
            /** The meeting minutes consumed by the user. */
            minutes_consumed?: number;
            /** Integrations enabled for the Fireflies user. */
            integrations?: Array<string>;
            /** User groups attached to the Fireflies user. */
            user_groups?: Array<{
              /** The Fireflies user group identifier. */
              id: string;
              /** The Fireflies user group name. */
              name?: string;
              /** The Fireflies user group handle. */
              handle?: string;
              /** Members in the Fireflies user group. */
              members?: Array<{
                /** The Fireflies user identifier. */
                user_id: string;
                /** The member first name. */
                first_name?: string;
                /** The member last name. */
                last_name?: string;
                /** The member email address. */
                email?: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Summary information for the transcript. */
          summary?: {
            /** The transcript overview text. */
            overview?: string;
            /** Detailed AI-generated transcript notes. */
            notes?: string;
            /** A one-line transcript gist. */
            gist?: string;
            /** A bullet summary of the meeting. */
            bullet_gist?: string;
            /** A short summary paragraph. */
            short_summary?: string;
            /** A short overview paragraph. */
            short_overview?: string;
            /** Shorthand bullet summary text. */
            shorthand_bullet?: string;
            /** The Fireflies meeting type classification. */
            meeting_type?: string;
            /** The AI-generated action items string. */
            action_items?: string;
            /** Transcript keywords. */
            keywords?: Array<string>;
            /** Topics discussed in the transcript. */
            topics_discussed?: Array<string>;
            [key: string]: unknown;
          };
          /** Transcript sentence details. */
          sentences?: Array<{
            /** The sentence speaker name. */
            speaker_name?: string;
            /** The sentence transcript text. */
            text?: string;
            /** The sentence start time in seconds. */
            start_time?: number;
            /** The sentence end time in seconds. */
            end_time?: number;
            [key: string]: unknown;
          }>;
          /** Meeting attendee details for the transcript. */
          meeting_attendees?: Array<{
            /** The attendee display name. */
            display_name?: string;
            /** The attendee email address. */
            email?: string;
            /** The attendee phone number. */
            phone_number?: string;
            [key: string]: unknown;
          }>;
          /** Channels linked to the transcript. */
          channels?: Array<{
            /** The Fireflies channel identifier. */
            id: string;
            /** The Fireflies channel title. */
            title?: string;
            /** Whether the Fireflies channel is private. */
            is_private?: boolean;
            /** Members visible on the Fireflies channel. */
            members?: Array<{
              /** The Fireflies user identifier. */
              user_id: string;
              /** The member email address. */
              email?: string;
              /** The member display name. */
              name?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Fireflies user by user ID. */
    "fireflies.get_user": {
      input: {
        /**
         * The Fireflies user identifier to fetch.
         * @minLength 1
         */
        user_id: string;
      };
      output: {
        /** The requested Fireflies user. */
        user: {
          /** The Fireflies user identifier. */
          user_id: string;
          /** The Fireflies user email address. */
          email?: string;
          /** The Fireflies user full name. */
          name?: string;
          /** Whether the Fireflies user is an admin. */
          is_admin?: boolean;
          /** The most recent meeting for the user. */
          recent_meeting?: string;
          /** The most recent transcript for the user. */
          recent_transcript?: string;
          /** The number of transcripts for the user. */
          num_transcripts?: number;
          /** The meeting minutes consumed by the user. */
          minutes_consumed?: number;
          /** Integrations enabled for the Fireflies user. */
          integrations?: Array<string>;
          /** User groups attached to the Fireflies user. */
          user_groups?: Array<{
            /** The Fireflies user group identifier. */
            id: string;
            /** The Fireflies user group name. */
            name?: string;
            /** The Fireflies user group handle. */
            handle?: string;
            /** Members in the Fireflies user group. */
            members?: Array<{
              /** The Fireflies user identifier. */
              user_id: string;
              /** The member first name. */
              first_name?: string;
              /** The member last name. */
              last_name?: string;
              /** The member email address. */
              email?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** List Fireflies AI app outputs for transcripts or app IDs. */
    "fireflies.list_ai_app_outputs": {
      input: {
        /**
         * The Fireflies AI app identifier used to filter outputs.
         * @minLength 1
         */
        app_id?: string;
        /**
         * The Fireflies transcript identifier used to filter AI app outputs.
         * @minLength 1
         */
        transcript_id?: string;
        /** The number of AI app outputs to skip before returning results. */
        skip?: number;
        /**
         * The maximum number of AI app outputs to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** Fireflies AI app outputs returned by the request. */
        outputs: Array<{
          /** The meeting title for the AI app output. */
          title?: string;
          /** The Fireflies AI app identifier. */
          app_id?: string;
          /** The prompt sent to the AI app. */
          prompt?: string;
          /** The Fireflies user identifier for the AI app output. */
          user_id?: string;
          /** The AI app response text. */
          response?: string;
          /** The AI app output creation timestamp. */
          created_at?: string;
          /** The Fireflies transcript identifier. */
          transcript_id?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Fireflies AskFred conversation threads. */
    "fireflies.list_askfred_threads": {
      input: {
        /**
         * The Fireflies transcript identifier used to filter AskFred threads.
         * @minLength 1
         */
        transcript_id?: string;
      };
      output: {
        /** Fireflies AskFred threads returned by the request. */
        askfred_threads: Array<{
          /** The AskFred thread identifier. */
          id?: string;
          /** The AskFred thread title. */
          title?: string;
          /** The AskFred thread creator identifier. */
          user_id?: string;
          /** The AskFred thread creation timestamp. */
          created_at?: string;
          /** The AskFred transcript identifier. */
          transcript_id?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Fireflies bites using the available bite filters. */
    "fireflies.list_bites": {
      input: {
        /** Whether to return only bites created by the current user. */
        mine?: boolean;
        /** Whether to return bites created by the current team. */
        my_team?: boolean;
        /**
         * The Fireflies transcript identifier used to filter bites.
         * @minLength 1
         */
        transcript_id?: string;
        /** The number of bites to skip before returning results. */
        skip?: number;
        /**
         * The maximum number of Fireflies bites to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** Fireflies bites returned by the request. */
        bites: Array<{
          /** The Fireflies bite identifier. */
          id: string;
          /** The Fireflies transcript identifier for the bite. */
          transcript_id: string;
          /** The Fireflies bite title. */
          name?: string;
          /** The bite creator. */
          user?: {
            /** The Fireflies bite user identifier. */
            id?: string;
            /** The Fireflies bite user display name. */
            name?: string;
            /** The bite user profile picture URL. */
            picture?: string;
            /** The bite user first name. */
            first_name?: string;
            /** The bite user last name. */
            last_name?: string;
            [key: string]: unknown;
          };
          /** The bite processing status. */
          status?: string;
          /** The bite preview URL. */
          preview?: string;
          /** Media sources for the bite. */
          sources?: Array<{
            /** The bite media source URL. */
            src: string;
            /** The bite media source type. */
            type?: string;
            [key: string]: unknown;
          }>;
          /** The bite summary text. */
          summary?: string;
          /** The Fireflies user identifier that created the bite. */
          user_id?: string;
          /** Captions for the bite. */
          captions?: Array<{
            /** The caption position index. */
            index?: number | string;
            /** The caption speaker identifier. */
            speaker_id: string;
            /** The caption speaker name. */
            speaker_name?: string;
            /** The caption text. */
            text?: string;
            /** The caption start time. */
            start_time?: number | string;
            /** The caption end time. */
            end_time?: number | string;
            [key: string]: unknown;
          }>;
          /** The bite end time in seconds. */
          end_time?: number;
          /** Visibility settings for the bite. */
          privacies?: Array<string>;
          /** The bite thumbnail URL. */
          thumbnail?: string;
          /** The bite creation timestamp. */
          created_at?: string;
          /** The bite media type. */
          media_type?: string;
          /** The bite start time in seconds. */
          start_time?: number;
          /** The origin of the bite. */
          created_from?: {
            /** The source identifier for the bite. */
            id?: string;
            /** The source name for the bite. */
            name?: string;
            /** The source type for the bite. */
            type?: string;
            /** The source duration for the bite in seconds. */
            duration?: number;
            /** The source description for the bite. */
            description?: string;
            [key: string]: unknown;
          };
          /** The bite summary generation status. */
          summary_status?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Fireflies channels visible to the current API key. */
    "fireflies.list_channels": {
      input: Record<string, never>;
      output: {
        /** Fireflies channels returned by the request. */
        channels: Array<{
          /** The Fireflies channel identifier. */
          id: string;
          /** The Fireflies channel title. */
          title?: string;
          /** Whether the Fireflies channel is private. */
          is_private?: boolean;
          /** Members visible on the Fireflies channel. */
          members?: Array<{
            /** The Fireflies user identifier. */
            user_id: string;
            /** The member email address. */
            email?: string;
            /** The member display name. */
            name?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Fireflies transcripts with official filters and include flags. */
    "fireflies.list_transcripts": {
      input: {
        /** The number of Fireflies transcripts to skip before returning results. */
        skip?: number;
        /**
         * The maximum number of Fireflies transcripts to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * The meeting title filter.
         * @minLength 1
         */
        title?: string;
        /**
         * The Fireflies user identifier used to filter transcripts.
         * @minLength 1
         */
        user_id?: string;
        /**
         * Inclusive start datetime for transcript filtering.
         * @format date-time
         */
        from_date?: string;
        /**
         * Inclusive end datetime for transcript filtering.
         * @format date-time
         */
        to_date?: string;
        /**
         * The host email address filter.
         * @format email
         */
        host_email?: string;
        /**
         * Organizer email addresses used to filter transcripts.
         * @minItems 1
         */
        organizers?: Array<string>;
        /**
         * Participant email addresses used to filter transcripts.
         * @minItems 1
         */
        participants?: Array<string>;
        /**
         * The Fireflies channel identifier used to filter transcripts.
         * @minLength 1
         */
        channel_id?: string;
        /** Whether to include transcript summary data. */
        include_summary?: boolean;
        /** Whether to include transcript analytics data. */
        include_analytics?: boolean;
        /** Whether to include the transcript audio URL. */
        include_audio_url?: boolean;
        /** Whether to include the transcript video URL. */
        include_video_url?: boolean;
        /** Whether to include transcript sentences. */
        include_sentences?: boolean;
        /** Whether to include transcript app preview data. */
        include_apps_preview?: boolean;
        /** Whether to include detailed user information. */
        include_user_details?: boolean;
        /** Whether to include meeting attendees. */
        include_meeting_attendees?: boolean;
        /** Whether to include meeting attendance details. */
        include_meeting_attendance?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** Fireflies transcripts returned by the request. */
        transcripts: Array<{
          /** The Fireflies transcript identifier. */
          id: string;
          /** The Fireflies transcript title. */
          title?: string;
          /** The transcript timestamp in milliseconds since Unix epoch. */
          date?: number;
          /** The Fireflies user that owns the transcript. */
          user?: {
            /** The Fireflies user identifier. */
            user_id: string;
            /** The Fireflies user email address. */
            email?: string;
            /** The Fireflies user full name. */
            name?: string;
            /** Whether the Fireflies user is an admin. */
            is_admin?: boolean;
            /** The most recent meeting for the user. */
            recent_meeting?: string;
            /** The most recent transcript for the user. */
            recent_transcript?: string;
            /** The number of transcripts for the user. */
            num_transcripts?: number;
            /** The meeting minutes consumed by the user. */
            minutes_consumed?: number;
            /** Integrations enabled for the Fireflies user. */
            integrations?: Array<string>;
            /** User groups attached to the Fireflies user. */
            user_groups?: Array<{
              /** The Fireflies user group identifier. */
              id: string;
              /** The Fireflies user group name. */
              name?: string;
              /** The Fireflies user group handle. */
              handle?: string;
              /** Members in the Fireflies user group. */
              members?: Array<{
                /** The Fireflies user identifier. */
                user_id: string;
                /** The member first name. */
                first_name?: string;
                /** The member last name. */
                last_name?: string;
                /** The member email address. */
                email?: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Summary information for the transcript. */
          summary?: {
            /** The transcript overview text. */
            overview?: string;
            /** Detailed AI-generated transcript notes. */
            notes?: string;
            /** A one-line transcript gist. */
            gist?: string;
            /** A bullet summary of the meeting. */
            bullet_gist?: string;
            /** A short summary paragraph. */
            short_summary?: string;
            /** A short overview paragraph. */
            short_overview?: string;
            /** Shorthand bullet summary text. */
            shorthand_bullet?: string;
            /** The Fireflies meeting type classification. */
            meeting_type?: string;
            /** The AI-generated action items string. */
            action_items?: string;
            /** Transcript keywords. */
            keywords?: Array<string>;
            /** Topics discussed in the transcript. */
            topics_discussed?: Array<string>;
            [key: string]: unknown;
          };
          /** Transcript sentence details. */
          sentences?: Array<{
            /** The sentence speaker name. */
            speaker_name?: string;
            /** The sentence transcript text. */
            text?: string;
            /** The sentence start time in seconds. */
            start_time?: number;
            /** The sentence end time in seconds. */
            end_time?: number;
            [key: string]: unknown;
          }>;
          /** Meeting attendee details for the transcript. */
          meeting_attendees?: Array<{
            /** The attendee display name. */
            display_name?: string;
            /** The attendee email address. */
            email?: string;
            /** The attendee phone number. */
            phone_number?: string;
            [key: string]: unknown;
          }>;
          /** Channels linked to the transcript. */
          channels?: Array<{
            /** The Fireflies channel identifier. */
            id: string;
            /** The Fireflies channel title. */
            title?: string;
            /** Whether the Fireflies channel is private. */
            is_private?: boolean;
            /** Members visible on the Fireflies channel. */
            members?: Array<{
              /** The Fireflies user identifier. */
              user_id: string;
              /** The member email address. */
              email?: string;
              /** The member display name. */
              name?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Fireflies user groups visible to the current API key. */
    "fireflies.list_user_groups": {
      input: {
        /** Whether to return only user groups that include the current user. */
        mine?: boolean;
      };
      output: {
        /** Fireflies user groups returned by the request. */
        user_groups: Array<{
          /** The Fireflies user group identifier. */
          id: string;
          /** The Fireflies user group name. */
          name?: string;
          /** The Fireflies user group handle. */
          handle?: string;
          /** Members in the Fireflies user group. */
          members?: Array<{
            /** The Fireflies user identifier. */
            user_id: string;
            /** The member first name. */
            first_name?: string;
            /** The member last name. */
            last_name?: string;
            /** The member email address. */
            email?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Fireflies users visible to the current API key. */
    "fireflies.list_users": {
      input: Record<string, never>;
      output: {
        /** Fireflies users returned by the request. */
        users: Array<{
          /** The Fireflies user identifier. */
          user_id: string;
          /** The Fireflies user email address. */
          email?: string;
          /** The Fireflies user full name. */
          name?: string;
          /** Whether the Fireflies user is an admin. */
          is_admin?: boolean;
          /** The most recent meeting for the user. */
          recent_meeting?: string;
          /** The most recent transcript for the user. */
          recent_transcript?: string;
          /** The number of transcripts for the user. */
          num_transcripts?: number;
          /** The meeting minutes consumed by the user. */
          minutes_consumed?: number;
          /** Integrations enabled for the Fireflies user. */
          integrations?: Array<string>;
          /** User groups attached to the Fireflies user. */
          user_groups?: Array<{
            /** The Fireflies user group identifier. */
            id: string;
            /** The Fireflies user group name. */
            name?: string;
            /** The Fireflies user group handle. */
            handle?: string;
            /** Members in the Fireflies user group. */
            members?: Array<{
              /** The Fireflies user identifier. */
              user_id: string;
              /** The member first name. */
              first_name?: string;
              /** The member last name. */
              last_name?: string;
              /** The member email address. */
              email?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Set a Fireflies user's role to admin or user. */
    "fireflies.set_user_role": {
      input: {
        /**
         * The Fireflies user identifier to update.
         * @minLength 1
         */
        user_id: string;
        /** The Fireflies role to set for the user. */
        role: "admin" | "user";
      };
      output: {
        /** The Fireflies user returned after the role update. */
        user: {
          /** The Fireflies user identifier. */
          user_id?: string;
          /** The Fireflies user email address. */
          email?: string;
          /** The Fireflies user full name. */
          name?: string;
          /** Whether the Fireflies user is an admin. */
          is_admin?: boolean;
          /** The most recent meeting for the user. */
          recent_meeting?: string;
          /** The most recent transcript for the user. */
          recent_transcript?: string;
          /** The number of transcripts for the user. */
          num_transcripts?: number;
          /** The meeting minutes consumed by the user. */
          minutes_consumed?: number;
          /** Integrations enabled for the Fireflies user. */
          integrations?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Update the Fireflies channel assignments for one or more meetings. */
    "fireflies.update_meeting_channel": {
      input: {
        /**
         * Transcript identifiers to update in the channel mutation.
         * @minItems 1
         * @maxItems 5
         */
        transcript_ids: Array<string>;
        /**
         * The Fireflies channel identifier to assign to the meetings.
         * @minLength 1
         */
        channel_id: string;
      };
      output: {
        /** Meetings returned by the Fireflies channel update mutation. */
        updated_meetings: Array<{
          /** The Fireflies transcript identifier. */
          id: string;
          /** The Fireflies transcript title. */
          title?: string;
          /** Channels linked to the updated meeting. */
          channels?: Array<{
            /** The Fireflies channel identifier. */
            id: string;
            /** The Fireflies channel title. */
            title?: string;
            /** Whether the Fireflies channel is private. */
            is_private?: boolean;
            /** Members visible on the Fireflies channel. */
            members?: Array<{
              /** The Fireflies user identifier. */
              user_id: string;
              /** The member email address. */
              email?: string;
              /** The member display name. */
              name?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update the privacy value for a Fireflies meeting. */
    "fireflies.update_meeting_privacy": {
      input: {
        /**
         * The Fireflies transcript identifier to update.
         * @minLength 1
         */
        id: string;
        /** The Fireflies privacy value to set on the meeting. */
        privacy: "link" | "owner" | "participants" | "teammatesandparticipants" | "teammates";
      };
      output: {
        /** The Fireflies meeting returned by the privacy update. */
        meeting: {
          /** The Fireflies transcript identifier. */
          id: string;
          /** The Fireflies transcript title. */
          title?: string;
          /** The Fireflies transcript privacy value. */
          privacy?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update the title for a Fireflies meeting. */
    "fireflies.update_meeting_title": {
      input: {
        /**
         * The Fireflies transcript identifier to update.
         * @minLength 1
         */
        id: string;
        /**
         * The new Fireflies meeting title.
         * @minLength 1
         */
        title: string;
      };
      output: {
        /** The Fireflies meeting returned by the title update. */
        meeting: {
          /** The Fireflies transcript identifier. */
          id: string;
          /** The Fireflies transcript title. */
          title?: string;
          /** The Fireflies transcript privacy value. */
          privacy?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
