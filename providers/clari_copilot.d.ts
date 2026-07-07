import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Clari Copilot call with transcript, summary, and optional media URLs. */
    "clari_copilot.get_call_details": {
      input: {
        /**
         * The Clari Copilot call ID.
         * @minLength 1
         */
        id: string;
        /** Whether a signed audio URL should be included. */
        includeAudio?: boolean;
        /** Whether a signed video URL should be included. */
        includeVideo?: boolean;
      };
      output: {
        /** Detailed Clari Copilot call information. */
        call: {
          /** The call ID. */
          id?: string;
          /** The source call ID. */
          source_id?: string;
          /** The call title. */
          title?: string;
          /** Internal Clari Copilot users on the call. */
          users?: Array<{
            /** The Clari Copilot user ID. */
            userId?: string;
            /** The Clari Copilot user email. */
            userEmail?: string;
            /** Whether the user organized the call. */
            isOrganizer?: boolean;
            /** The participant person ID in the call transcript. */
            personId?: number;
            [key: string]: unknown;
          }>;
          /** External call participants. */
          externalParticipants?: Array<{
            /** The participant name. */
            name?: string;
            /** The participant email. */
            email?: string;
            /** The participant phone number. */
            phone?: string;
            /** The participant person ID in the call transcript. */
            personId?: number;
            [key: string]: unknown;
          }>;
          /** Participants that joined the call. */
          joinedParticipants?: Array<Record<string, unknown>>;
          /** A Clari Copilot call status. */
          status?: "SCHEDULED" | "INITIATED" | "INPROGRESS" | "WAITING_IN_QUEUE" | "PROCESSING" | "PROCESSED" | "ERROR_IN_TRANSCRIBE" | "ERROR_IN_PROCESSING" | "ERROR_IN_RECORDING" | "UNABLE_TO_JOIN" | "CALL_DID_NOT_HAPPEN" | "IGNORED_BY_USER" | "BOTJOIN_DISABLED" | "POST_PROCESSING_DONE" | "NO_DATA_INCALL" | "NOBODY_JOINED_CALL" | "BOTJOIN_DENIED";
          /** Reasons why the bot did not join. */
          bot_not_join_reason?: Array<"IGNORED_DUE_TO_WHITELIST" | "CONSENT_REVOKED" | "IGNORED_BY_USER" | "IGNORED_CALL_TYPE_IGNORED_BY_CUSTOMER" | "IGNORED_NO_USER_HAS_ACCEPTED_INVITE" | "RECORDING_PERMISSION_DENIED" | "IGNORED_NON_MEETING" | "IGNORED_NOT_CONFIRMED" | "IGNORED_NOT_EXTERNAL_MEETING" | "IGNORED_NOT_ORGANIZER" | "IGNORED">;
          /** A Clari Copilot call source type. */
          type?: "ZOOM" | "GOOGLE_MEET" | "FRESHCALLER" | "AIRCALL_RECORDING" | "RINGCENTRAL" | "GOTO_MEETING" | "OUTREACH" | "HUBSPOT" | "BLUE_JEANS" | "SALESLOFT" | "MS_TEAMS" | "DIALPAD" | "FRONTSPIN" | "TALKDESK";
          /** The call scheduled or start time. */
          time?: string;
          /** The calendar iCal UID. */
          icaluid?: string;
          /** The calendar ID. */
          calendar_id?: string;
          /** The recurring event ID. */
          recurring_event_id?: string;
          /** The original call start time. */
          original_start_time?: string;
          /** The last time the call was modified. */
          last_modified_time?: string;
          /** A signed audio URL when requested and available. */
          audio_url?: string;
          /** A signed video URL when requested and available. */
          video_url?: string;
          /** A Clari Copilot call disposition. */
          disposition?: "UNKNOWN_CALL_DISPOSITION" | "CALL_CONNECTED_WITH_PROSPECT" | "CALL_DID_NOT_CONNECT_WITH_PROSPECT" | "CALL_NOBODY_JOINED" | "CALL_BOTJOIN_DENIED";
          /** The associated deal name. */
          deal_name?: string;
          /** The associated deal value. */
          deal_value?: string;
          /** The associated deal close date. */
          deal_close_date?: string;
          /** The deal stage before the call. */
          deal_stage_before_call?: string;
          /** The associated account name. */
          account_name?: string;
          /** Associated contact names. */
          contact_names?: Array<string>;
          /** CRM metadata associated with a Clari Copilot call. */
          crm_info?: {
            /** The source CRM name. */
            source_crm?: string;
            /** The CRM deal ID. */
            deal_id?: string;
            /** The CRM account ID. */
            account_id?: string;
            /** CRM contact IDs. */
            contact_ids?: Array<string>;
            [key: string]: unknown;
          };
          /** Bookmark timestamps. */
          bookmark_timestamps?: Array<string>;
          /** Clari Copilot call metrics. */
          metrics?: {
            /** Talk-listen ratio for the call. */
            talk_listen_ratio?: number;
            /** Number of questions asked during the call. */
            num_questions_asked?: number;
            /** Number of questions asked by reps. */
            num_questions_asked_by_reps?: number;
            /** Call duration in seconds. */
            call_duration?: number;
            /** Total speak duration in seconds. */
            total_speak_duration?: number;
            /** Longest monologue duration in seconds. */
            longest_monologue_duration?: number;
            /** Start time of the longest monologue in seconds. */
            longest_monologue_start_time?: number;
            /** Number of engaging questions. */
            engaging_questions?: number;
            /** Metric categories returned by Clari Copilot. */
            categories?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          };
          /** The Clari Copilot call review page URL. */
          call_review_page_url?: string;
          /** The live deal stage. */
          deal_stage_live?: string;
          /** Call transcript turns. */
          transcript?: Array<{
            /** The transcript text. */
            text?: string;
            /** The turn start time in seconds. */
            start?: number;
            /** The turn end time in seconds. */
            end?: number;
            /** The participant person ID. */
            personId?: number;
            /** Transcript annotations. */
            annotations?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          }>;
          /** Call summary returned by Clari Copilot. */
          summary?: {
            /** The full call summary. */
            full_summary?: string;
            /** Topics discussed in the call. */
            topics_discussed?: Array<{
              /** The topic name. */
              name?: string;
              /** The topic start timestamp. */
              start_timestamp?: string;
              /** The topic end timestamp. */
              end_timestamp?: string;
              /** The topic summary. */
              summary?: string;
              [key: string]: unknown;
            }>;
            /** Key action items from the call. */
            key_action_items?: Array<{
              /** The action item text. */
              action_item?: string;
              /** The speaker name. */
              speaker_name?: string;
              /** The action item start timestamp. */
              start_timestamp?: string;
              /** The action item end timestamp. */
              end_timestamp?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Competitor sentiment details returned by Clari Copilot. */
          competitor_sentiments?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Clari Copilot calls with supported filters, sorting, and pagination. */
    "clari_copilot.list_calls": {
      input: {
        /**
         * The number of calls to skip.
         * @minimum 0
         * @maximum 10000
         */
        skip?: number;
        /**
         * The number of calls to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Filter calls by Clari Copilot user email.
         * @minItems 1
         */
        filterUser?: Array<string>;
        /**
         * Filter calls by external attendee email.
         * @minItems 1
         */
        filterAttendees?: Array<string>;
        /**
         * Filter calls by topic name.
         * @minItems 1
         */
        filterTopics?: Array<string>;
        /**
         * Filter calls by status.
         * @minItems 1
         */
        filterStatus?: Array<"SCHEDULED" | "INITIATED" | "INPROGRESS" | "WAITING_IN_QUEUE" | "PROCESSING" | "PROCESSED" | "ERROR_IN_TRANSCRIBE" | "ERROR_IN_PROCESSING" | "ERROR_IN_RECORDING" | "UNABLE_TO_JOIN" | "CALL_DID_NOT_HAPPEN" | "IGNORED_BY_USER" | "BOTJOIN_DISABLED" | "POST_PROCESSING_DONE" | "NO_DATA_INCALL" | "NOBODY_JOINED_CALL" | "BOTJOIN_DENIED">;
        /**
         * Filter calls by source type.
         * @minItems 1
         */
        filterType?: Array<"ZOOM" | "GOOGLE_MEET" | "FRESHCALLER" | "AIRCALL_RECORDING" | "RINGCENTRAL" | "GOTO_MEETING" | "OUTREACH" | "HUBSPOT" | "BLUE_JEANS" | "SALESLOFT" | "MS_TEAMS" | "DIALPAD" | "FRONTSPIN" | "TALKDESK">;
        /**
         * Filter calls by source IDs.
         * @minItems 1
         */
        filterSourceId?: Array<string>;
        /**
         * Return calls scheduled or started after this time. Use the date-time format accepted by the Clari Copilot API.
         * @minLength 1
         */
        filterTimeGt?: string;
        /**
         * Return calls scheduled or started before this time. Use the date-time format accepted by the Clari Copilot API.
         * @minLength 1
         */
        filterTimeLt?: string;
        /**
         * Return calls modified after this time. Use the date-time format accepted by the Clari Copilot API.
         * @minLength 1
         */
        filterModifiedGt?: string;
        /**
         * Return calls modified before this time. Use the date-time format accepted by the Clari Copilot API.
         * @minLength 1
         */
        filterModifiedLt?: string;
        /**
         * Return calls longer than this duration in seconds.
         * @minimum 0
         * @maximum 7200
         */
        filterDurationGt?: number;
        /**
         * Return calls shorter than this duration in seconds.
         * @minimum 0
         * @maximum 7200
         */
        filterDurationLt?: number;
        /** Sort direction. */
        sortTime?: "asc" | "desc";
        /** Sort direction. */
        sortProcessed?: "asc" | "desc";
        /** Whether private calls should be included. */
        includePrivate?: boolean;
        /** Whether signed audio URLs should be included. */
        includeAudio?: boolean;
        /** Whether signed video URLs should be included. */
        includeVideo?: boolean;
        /** Whether pagination metadata should be included. */
        includePagination?: boolean;
      };
      output: {
        /** Calls returned by Clari Copilot. */
        calls: Array<{
          /** The call ID. */
          id?: string;
          /** The source call ID. */
          source_id?: string;
          /** The call title. */
          title?: string;
          /** Internal Clari Copilot users on the call. */
          users?: Array<{
            /** The Clari Copilot user ID. */
            userId?: string;
            /** The Clari Copilot user email. */
            userEmail?: string;
            /** Whether the user organized the call. */
            isOrganizer?: boolean;
            /** The participant person ID in the call transcript. */
            personId?: number;
            [key: string]: unknown;
          }>;
          /** External call participants. */
          externalParticipants?: Array<{
            /** The participant name. */
            name?: string;
            /** The participant email. */
            email?: string;
            /** The participant phone number. */
            phone?: string;
            /** The participant person ID in the call transcript. */
            personId?: number;
            [key: string]: unknown;
          }>;
          /** Participants that joined the call. */
          joinedParticipants?: Array<Record<string, unknown>>;
          /** A Clari Copilot call status. */
          status?: "SCHEDULED" | "INITIATED" | "INPROGRESS" | "WAITING_IN_QUEUE" | "PROCESSING" | "PROCESSED" | "ERROR_IN_TRANSCRIBE" | "ERROR_IN_PROCESSING" | "ERROR_IN_RECORDING" | "UNABLE_TO_JOIN" | "CALL_DID_NOT_HAPPEN" | "IGNORED_BY_USER" | "BOTJOIN_DISABLED" | "POST_PROCESSING_DONE" | "NO_DATA_INCALL" | "NOBODY_JOINED_CALL" | "BOTJOIN_DENIED";
          /** Reasons why the bot did not join. */
          bot_not_join_reason?: Array<"IGNORED_DUE_TO_WHITELIST" | "CONSENT_REVOKED" | "IGNORED_BY_USER" | "IGNORED_CALL_TYPE_IGNORED_BY_CUSTOMER" | "IGNORED_NO_USER_HAS_ACCEPTED_INVITE" | "RECORDING_PERMISSION_DENIED" | "IGNORED_NON_MEETING" | "IGNORED_NOT_CONFIRMED" | "IGNORED_NOT_EXTERNAL_MEETING" | "IGNORED_NOT_ORGANIZER" | "IGNORED">;
          /** A Clari Copilot call source type. */
          type?: "ZOOM" | "GOOGLE_MEET" | "FRESHCALLER" | "AIRCALL_RECORDING" | "RINGCENTRAL" | "GOTO_MEETING" | "OUTREACH" | "HUBSPOT" | "BLUE_JEANS" | "SALESLOFT" | "MS_TEAMS" | "DIALPAD" | "FRONTSPIN" | "TALKDESK";
          /** The call scheduled or start time. */
          time?: string;
          /** The calendar iCal UID. */
          icaluid?: string;
          /** The calendar ID. */
          calendar_id?: string;
          /** The recurring event ID. */
          recurring_event_id?: string;
          /** The original call start time. */
          original_start_time?: string;
          /** The last time the call was modified. */
          last_modified_time?: string;
          /** A signed audio URL when requested and available. */
          audio_url?: string;
          /** A signed video URL when requested and available. */
          video_url?: string;
          /** A Clari Copilot call disposition. */
          disposition?: "UNKNOWN_CALL_DISPOSITION" | "CALL_CONNECTED_WITH_PROSPECT" | "CALL_DID_NOT_CONNECT_WITH_PROSPECT" | "CALL_NOBODY_JOINED" | "CALL_BOTJOIN_DENIED";
          /** The associated deal name. */
          deal_name?: string;
          /** The associated deal value. */
          deal_value?: string;
          /** The associated deal close date. */
          deal_close_date?: string;
          /** The deal stage before the call. */
          deal_stage_before_call?: string;
          /** The associated account name. */
          account_name?: string;
          /** Associated contact names. */
          contact_names?: Array<string>;
          /** CRM metadata associated with a Clari Copilot call. */
          crm_info?: {
            /** The source CRM name. */
            source_crm?: string;
            /** The CRM deal ID. */
            deal_id?: string;
            /** The CRM account ID. */
            account_id?: string;
            /** CRM contact IDs. */
            contact_ids?: Array<string>;
            [key: string]: unknown;
          };
          /** Bookmark timestamps. */
          bookmark_timestamps?: Array<string>;
          /** Clari Copilot call metrics. */
          metrics?: {
            /** Talk-listen ratio for the call. */
            talk_listen_ratio?: number;
            /** Number of questions asked during the call. */
            num_questions_asked?: number;
            /** Number of questions asked by reps. */
            num_questions_asked_by_reps?: number;
            /** Call duration in seconds. */
            call_duration?: number;
            /** Total speak duration in seconds. */
            total_speak_duration?: number;
            /** Longest monologue duration in seconds. */
            longest_monologue_duration?: number;
            /** Start time of the longest monologue in seconds. */
            longest_monologue_start_time?: number;
            /** Number of engaging questions. */
            engaging_questions?: number;
            /** Metric categories returned by Clari Copilot. */
            categories?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          };
          /** The Clari Copilot call review page URL. */
          call_review_page_url?: string;
          [key: string]: unknown;
        }>;
        /** Pagination information returned by Clari Copilot. */
        pagination?: {
          /** The number of records matching the query. */
          matched?: number;
          /** Whether more records are available. */
          hasMore?: boolean;
          /** The skip value for the next page. */
          nextPageSkip?: number;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** List Clari Copilot scorecards with pagination and scorer filters. */
    "clari_copilot.list_scorecards": {
      input: {
        /**
         * The number of scorecards to skip.
         * @minimum 0
         * @maximum 10000
         */
        skip?: number;
        /**
         * The number of scorecards to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Return scorecards after this timestamp. Use the date-time format accepted by the Clari Copilot API.
         * @minLength 1
         */
        filterTimeGt?: string;
        /**
         * Return scorecards before this timestamp. Use the date-time format accepted by the Clari Copilot API.
         * @minLength 1
         */
        filterTimeLt?: string;
        /**
         * Filter scorecards by scored rep user ID.
         * @minLength 1
         */
        filterRepId?: string;
        /**
         * Filter scorecards by scorer user ID.
         * @minLength 1
         */
        filterScorerId?: string;
      };
      output: {
        /** Scorecards returned by Clari Copilot. */
        scorecards: Array<{
          /** The scorecard ID. */
          id?: string;
          /** The scorecard type. */
          type?: string;
          /** The scored rep ID. */
          rep?: string;
          /** The scorer ID. */
          scorer?: string;
          /** The scorecard template ID. */
          template_id?: string;
          /** The scored call ID. */
          call_id?: string;
          /** The total score. */
          total_score?: number;
          /** Additional remarks or comments on the scorecard. */
          remark?: string;
          /** Question-level scores. */
          questions_score?: Array<{
            /** The score for the question. */
            score?: number;
            /** The assessed skill. */
            skill?: string;
            /** The question label. */
            label?: string;
            /** The question order. */
            order?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Pagination information returned by Clari Copilot. */
        pagination?: {
          /** The number of records matching the query. */
          matched?: number;
          /** Whether more records are available. */
          hasMore?: boolean;
          /** The skip value for the next page. */
          nextPageSkip?: number;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** List Clari Copilot topics, optionally filtered by last modified time. */
    "clari_copilot.list_topics": {
      input: {
        /**
         * Return topics modified before this timestamp. Use the date-time format accepted by the Clari Copilot API.
         * @minLength 1
         */
        filterModifiedLt?: string;
        /**
         * Return topics modified after this timestamp. Use the date-time format accepted by the Clari Copilot API.
         * @minLength 1
         */
        filterModifiedGt?: string;
      };
      output: {
        /** Topics returned by Clari Copilot. */
        topics: Array<{
          /** The topic ID. */
          topic_id?: string;
          /** The topic name. */
          topic_name?: string;
          /** The topic type. */
          type?: string;
          /** Team IDs associated with the topic. */
          team_ids?: Array<string>;
          /** Custom topic details. */
          custom_topic?: {
            /** The custom topic description. */
            description?: string;
            /** The custom topic status. */
            status?: string;
            [key: string]: unknown;
          };
          /** Keyword topic details. */
          keyword_topic?: {
            /** Keyword trackers associated with the topic. */
            trackers?: Array<string>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List current users in the Clari Copilot workspace. */
    "clari_copilot.list_users": {
      input: Record<string, never>;
      output: {
        /** Users returned by Clari Copilot. */
        users: Array<{
          /** The user ID. */
          id?: string;
          /** The user email address. */
          email?: string;
          /** The user's display name. */
          name?: string;
          /** The user's Clari Copilot role. */
          role?: "REP" | "MANAGER" | "OBSERVER";
          /** Whether calls for this user are recorded. */
          is_recording?: boolean;
          /** The user's manager ID. */
          manager_id?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
