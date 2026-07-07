import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get transcripts for up to 100 Demodesk recording tokens in one request. */
    "demodesk.batch_get_recording_transcripts": {
      input: {
        /**
         * Public Demodesk recording tokens.
         * @minItems 1
         * @maxItems 100
         */
        recordingTokens: Array<string>;
        /**
         * Language code used to request an on-the-fly translation.
         * @pattern ^[a-z]{2}(-[A-Z]{2})?$
         */
        lang?: string;
        /** Transcript response format to request from Demodesk. */
        format?: "json" | "plaintext";
      };
      output: {
        /** Per-recording transcript results. */
        results: Array<{
          /** Public Demodesk recording token. */
          recordingToken: string;
          /** Per-recording transcript status. */
          status: "ready" | "processing" | "not_requested" | "empty" | "not_found";
          /** A structured or plaintext transcript payload. */
          transcript: {
            /** Transcript language code. */
            language: string;
            /** Transcript paragraphs. */
            paragraphs: Array<{
              /** Paragraph start time in seconds. */
              startInSeconds: number;
              /** Paragraph end time in seconds. */
              endInSeconds: number;
              /** A transcript speaker. */
              speaker: {
                /** Speaker display name when available. */
                displayName: string | null;
              } | null;
              /** Sentences in the paragraph. */
              sentences: Array<{
                /** Sentence start time in seconds. */
                startInSeconds: number;
                /** Sentence end time in seconds. */
                endInSeconds: number;
                /** Sentence text. */
                text: string;
              }>;
            }>;
          } | {
            /** Transcript language code. */
            language: string;
            /** Transcript text. */
            text: string;
          } | null;
        }>;
        /** Demodesk transcript batch metadata. */
        meta: {
          /** Number of recording tokens requested. */
          requestedCount: number;
        };
      };
    };
    /** Get the Demodesk user represented by the current API key. */
    "demodesk.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Demodesk user profile. */
        user: {
          /** Internal Demodesk user ID. */
          id?: string;
          /** First name of the user. */
          firstName?: string;
          /** Last name of the user. */
          lastName?: string;
          /**
           * Primary email address of the user.
           * @format email
           */
          email?: string;
          /** Role of the user within the company. */
          role?: "user" | "manager" | "company_admin";
          /** Locale of the user. */
          locale?: string;
          /** IANA time zone of the user. */
          timeZone?: string;
          /** Groups the current user belongs to when returned by Demodesk. */
          groups?: Array<{
            /** Internal Demodesk group ID. */
            groupId?: string;
            /** Human-readable Demodesk group name. */
            groupName?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Demodesk recording by public recording token. */
    "demodesk.get_recording": {
      input: {
        /**
         * Public Demodesk recording token.
         * @minLength 1
         */
        token: string;
      };
      output: {
        /** A Demodesk recording. */
        recording: {
          /** Public recording token identifier. */
          recordingToken?: string;
          /** Internal recording ID as a string. */
          recordingId?: string;
          /** Internal demo ID as a string. */
          demoId?: string;
          /** ID of the demo host user. */
          userId?: number;
          /** Recording name when present. */
          name?: string | null;
          /**
           * URL to the recording view in Demodesk.
           * @format uri
           */
          recordingWebUrl?: string;
          /**
           * Temporary direct video file URL when available.
           * @format uri
           */
          temporaryDirectUrl?: string | null;
          /** Demodesk recording status. */
          status?: "pending" | "ready" | "failure" | "cancelled" | "expired";
          /**
           * Timestamp when the recording was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * Timestamp when the recording was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /**
           * Meeting start timestamp when available.
           * @format date-time
           */
          demoStartDate?: string | null;
          /** Recording duration in milliseconds when available. */
          durationMs?: number | null;
          /** Demodesk post-processing status. */
          postprocessingStatus?: "pending" | "done" | "failed" | "too_short" | null;
          /** Demodesk recording access permission level. */
          access?: "company_wide" | "selected_groups" | "host_and_participants" | "host_only";
          /** Group IDs assigned to the demo in list responses. */
          groupIds?: Array<string>;
          /** Resolved recording host when present. */
          host?: Record<string, unknown> | null;
          /** Whether the recording is audio-only. */
          audioOnly?: boolean;
          /** Demodesk attendee classification when present. */
          attendeeClassification?: string | null;
          /** Meeting location metadata returned by Demodesk. */
          meetingLocation?: Record<string, unknown>;
          /** Participants returned on a recording detail response. */
          participants?: Array<Record<string, unknown>>;
          /** Groups assigned to the recording in detail responses. */
          groups?: Array<{
            /** Internal Demodesk group ID. */
            groupId?: string;
            /** Human-readable Demodesk group name. */
            groupName?: string;
            [key: string]: unknown;
          }>;
          /** Demodesk recording statistics. */
          statistics?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the transcript for one Demodesk recording token. */
    "demodesk.get_recording_transcript": {
      input: {
        /**
         * Public Demodesk recording token.
         * @minLength 1
         */
        token: string;
        /**
         * Language code used to request an on-the-fly translation.
         * @pattern ^[a-z]{2}(-[A-Z]{2})?$
         */
        lang?: string;
        /** Transcript response format to request from Demodesk. */
        format?: "json" | "plaintext";
      };
      output: {
        /** Transcript retrieval status. */
        status: "ready" | "processing" | "empty";
        /** A structured Demodesk transcript. */
        transcript: {
          /** Transcript language code. */
          language: string;
          /** Transcript paragraphs. */
          paragraphs: Array<{
            /** Paragraph start time in seconds. */
            startInSeconds: number;
            /** Paragraph end time in seconds. */
            endInSeconds: number;
            /** A transcript speaker. */
            speaker: {
              /** Speaker display name when available. */
              displayName: string | null;
            } | null;
            /** Sentences in the paragraph. */
            sentences: Array<{
              /** Sentence start time in seconds. */
              startInSeconds: number;
              /** Sentence end time in seconds. */
              endInSeconds: number;
              /** Sentence text. */
              text: string;
            }>;
          }>;
        } | null;
        /** Plaintext transcript when plaintext format was requested. */
        text: string | null;
        /** Upstream Demodesk status payload for non-ready states. */
        error: Record<string, unknown> | null;
      };
    };
    /** List scorecards linked to a Demodesk recording. */
    "demodesk.list_recording_scorecards": {
      input: {
        /**
         * Public Demodesk recording token.
         * @minLength 1
         */
        token: string;
      };
      output: {
        /** Scorecards returned by Demodesk. */
        scorecards: Array<{
          /** Scorecard ID. */
          scorecardId?: string;
          /** Scorecard template ID when available. */
          templateId?: string | null;
          /** Scorecard template name. */
          templateName?: string;
          /** Overall score when available. */
          score?: number | null;
          /** Overall scorecard comment when available. */
          comment?: string | null;
          /** Scorecard language code when available. */
          languageCode?: string | null;
          /** User ID of the score giver when available. */
          giverUserId?: number | null;
          /** User ID of the score receiver. */
          receiverUserId?: number;
          /**
           * Timestamp when the scorecard was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * Timestamp when the scorecard was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /** Question-level scorecard results. */
          questions?: Array<{
            /** Question ID. */
            questionId?: string;
            /** Question position. */
            position?: number;
            /** Question name when available. */
            name?: string | null;
            /** Question text. */
            text?: string;
            /** Scoring criteria when available. */
            criteria?: string | null;
            /** Question score when available. */
            score?: number | null;
            /** Question comment when available. */
            comment?: string | null;
            /** Raw timestamp references when available. */
            rawTimestamps?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List AI-generated summaries attached to a Demodesk recording. */
    "demodesk.list_recording_summaries": {
      input: {
        /**
         * Public Demodesk recording token.
         * @minLength 1
         */
        token: string;
      };
      output: {
        /** Summaries returned by Demodesk. */
        summaries: Array<{
          /** Summary ID. */
          summaryId?: string;
          /** Prompt ID when available. */
          promptId?: string | null;
          /** Prompt name when available. */
          promptName?: string | null;
          /** Summary language code. */
          languageCode?: string;
          /** Plaintext summary content. */
          content?: string;
          /** HTML summary content when available. */
          htmlContent?: string | null;
          /**
           * Timestamp when the summary was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * Timestamp when the summary was last updated.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Demodesk recordings with cursor pagination and optional filters. */
    "demodesk.list_recordings": {
      input: {
        /**
         * Opaque cursor returned by a previous Demodesk list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of items to return. Demodesk allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Demodesk recording filters keyed by documented Ransack-style names, such as host_eq or status_in. */
        filters?: Record<string, string | Array<string>>;
      };
      output: {
        /** Recordings returned by Demodesk. */
        recordings: Array<{
          /** Public recording token identifier. */
          recordingToken?: string;
          /** Internal recording ID as a string. */
          recordingId?: string;
          /** Internal demo ID as a string. */
          demoId?: string;
          /** ID of the demo host user. */
          userId?: number;
          /** Recording name when present. */
          name?: string | null;
          /**
           * URL to the recording view in Demodesk.
           * @format uri
           */
          recordingWebUrl?: string;
          /**
           * Temporary direct video file URL when available.
           * @format uri
           */
          temporaryDirectUrl?: string | null;
          /** Demodesk recording status. */
          status?: "pending" | "ready" | "failure" | "cancelled" | "expired";
          /**
           * Timestamp when the recording was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * Timestamp when the recording was last updated.
           * @format date-time
           */
          updatedAt?: string;
          /**
           * Meeting start timestamp when available.
           * @format date-time
           */
          demoStartDate?: string | null;
          /** Recording duration in milliseconds when available. */
          durationMs?: number | null;
          /** Demodesk post-processing status. */
          postprocessingStatus?: "pending" | "done" | "failed" | "too_short" | null;
          /** Demodesk recording access permission level. */
          access?: "company_wide" | "selected_groups" | "host_and_participants" | "host_only";
          /** Group IDs assigned to the demo in list responses. */
          groupIds?: Array<string>;
          /** Resolved recording host when present. */
          host?: Record<string, unknown> | null;
          /** Whether the recording is audio-only. */
          audioOnly?: boolean;
          /** Demodesk attendee classification when present. */
          attendeeClassification?: string | null;
          /** Meeting location metadata returned by Demodesk. */
          meetingLocation?: Record<string, unknown>;
          /** Participants returned on a recording detail response. */
          participants?: Array<Record<string, unknown>>;
          /** Groups assigned to the recording in detail responses. */
          groups?: Array<{
            /** Internal Demodesk group ID. */
            groupId?: string;
            /** Human-readable Demodesk group name. */
            groupName?: string;
            [key: string]: unknown;
          }>;
          /** Demodesk recording statistics. */
          statistics?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Demodesk pagination metadata. */
        meta: {
          /** Whether another page is available. */
          hasNext: boolean;
          /** Page size used by Demodesk. */
          limit: number;
          /** Cursor for the next page when available. */
          nextCursor: string | null;
        };
      };
    };
    /** List active Demodesk users visible to the current API key. */
    "demodesk.list_users": {
      input: {
        /**
         * Case-insensitive search across user full name and email.
         * @minLength 1
         */
        search?: string;
        /**
         * Opaque cursor returned by a previous Demodesk list response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of items to return. Demodesk allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Users returned by Demodesk. */
        users: Array<{
          /** Internal Demodesk user ID. */
          id?: string;
          /** First name of the user. */
          firstName?: string;
          /** Last name of the user. */
          lastName?: string;
          /**
           * Primary email address of the user.
           * @format email
           */
          email?: string;
          /** Role of the user within the company. */
          role?: "user" | "manager" | "company_admin";
          /** Locale of the user. */
          locale?: string;
          /** IANA time zone of the user. */
          timeZone?: string;
          /** Groups the current user belongs to when returned by Demodesk. */
          groups?: Array<{
            /** Internal Demodesk group ID. */
            groupId?: string;
            /** Human-readable Demodesk group name. */
            groupName?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Demodesk pagination metadata. */
        meta: {
          /** Whether another page is available. */
          hasNext: boolean;
          /** Page size used by Demodesk. */
          limit: number;
          /** Cursor for the next page when available. */
          nextCursor: string | null;
        };
      };
    };
  }
}
