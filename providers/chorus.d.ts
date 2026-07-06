import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a specific Chorus conversation with optional populated fields. */
    "chorus.get_conversation": {
      input: {
        /**
         * The Chorus conversation ID to retrieve.
         * @minLength 1
         */
        id: string;
        /**
         * Chorus conversation fields to populate.
         * @minItems 1
         */
        fields?: Array<"account" | "company_name" | "_created_at" | "_modified_at" | "deal" | "disposition" | "language" | "metrics" | "meeting.id" | "name" | "owner" | "owner.email" | "participants" | "private" | "recording" | "recording.audio_only" | "recording.autojoin" | "recording.autojoin_reason" | "recording.clusters" | "recording.duration" | "recording.end_reason" | "recording.recordable" | "recording.schedule_end_time" | "recording.schedule_start_time" | "recording.start_time" | "recording.thumbnails" | "recording.trackers" | "recording.utterances" | "source" | "status" | "user_company_name">;
        /** Whether Chorus should regenerate the conversation from latest data. */
        forceRegeneration?: boolean;
        /** Whether Chorus should skip summary generation. */
        skipSummaryGeneration?: boolean;
        /** Whether Chorus should include meeting metadata such as provider calendar ID and meeting URL. */
        includeMeetingMetadata?: boolean;
      };
      output: {
        /** A Chorus JSON:API resource. */
        conversation: {
          /** The Chorus resource ID. */
          id?: string;
          /** The Chorus resource type. */
          type?: string;
          /** The Chorus resource attributes. */
          attributes?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get details about the current Chorus API token user. */
    "chorus.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Chorus JSON:API resource. */
        user: {
          /** The Chorus resource ID. */
          id?: string;
          /** The Chorus resource type. */
          type?: string;
          /** The Chorus resource attributes. */
          attributes?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a specific Chorus team by ID. */
    "chorus.get_team": {
      input: {
        /**
         * The Chorus team ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Chorus JSON:API resource. */
        team: {
          /** The Chorus resource ID. */
          id?: string;
          /** The Chorus resource type. */
          type?: string;
          /** The Chorus resource attributes. */
          attributes?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List Chorus engagements with documented v3 filters and continuation pagination. */
    "chorus.list_engagements": {
      input: {
        /**
         * Filter by Chorus call recording compliance flag.
         * @minLength 1
         */
        compliance?: string;
        /**
         * The Chorus continuation_key returned by the previous page.
         * @minLength 1
         */
        continuationKey?: string;
        /** Filter by Chorus connected disposition. */
        dispositionConnected?: boolean;
        /** Filter by Chorus gatekeeper disposition. */
        dispositionGatekeeper?: boolean;
        /** Filter by Chorus phone tree disposition. */
        dispositionTree?: boolean;
        /** Filter by Chorus voicemail disposition. */
        dispositionVoicemail?: boolean;
        /**
         * One or more Chorus engagement IDs to retrieve.
         * @minItems 1
         */
        engagementIds?: Array<string>;
        /**
         * Filter by Chorus engagement type.
         * @minLength 1
         */
        engagementType?: string;
        /**
         * Filter by Chorus engagement content type.
         * @minLength 1
         */
        contentType?: string;
        /**
         * Only include engagements on or before this datetime.
         * @format date-time
         */
        maxDate?: string;
        /** Only include engagements with duration at or below this number of seconds. */
        maxDuration?: number;
        /**
         * Only include engagements on or after this datetime.
         * @format date-time
         */
        minDate?: string;
        /** Only include engagements with duration at or above this number of seconds. */
        minDuration?: number;
        /**
         * Filter by a participant email address.
         * @format email
         */
        participantsEmail?: string;
        /**
         * One or more Chorus team IDs for engagement owners.
         * @minItems 1
         */
        teamIds?: Array<number>;
        /**
         * One or more Chorus user IDs for engagement owners.
         * @minItems 1
         */
        userIds?: Array<number>;
        /** Whether to return tracker information with engagements. */
        withTrackers?: boolean;
      };
      output: {
        /** The Chorus engagements returned by the API. */
        engagements: Array<{
          /** The Chorus engagement ID. */
          engagement_id?: string;
          /** The engagement subject. */
          subject?: string;
          /** The Chorus user ID of the engagement owner. */
          user_id?: number;
          /** The email address of the engagement owner. */
          user_email?: string;
          /** The name of the engagement owner. */
          user_name?: string;
          /** The engagement start time as returned by Chorus. */
          date_time?: number;
          /** The engagement duration in seconds. */
          duration?: number;
          /** Participants included in the engagement. */
          participants?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** The continuation key for the next page, if present. */
        continuationKey: string | null;
      };
    };
    /** List Chorus scorecards with documented filters and page pagination. */
    "chorus.list_scorecards": {
      input: {
        /**
         * IDs of Chorus users who were scored.
         * @minItems 1
         */
        recipientIds?: Array<number>;
        /**
         * IDs of Chorus users who completed scorecards.
         * @minItems 1
         */
        reviewerIds?: Array<number>;
        /** The Chorus initiative ID that scorecards were completed against. */
        initiativeId?: number;
        /**
         * The submitted datetime range in Chorus format, such as 2021-01-01T00:00:00Z:2021-01-31T00:00:00Z.
         * @minLength 1
         */
        submittedRange?: string;
        /**
         * The number of scorecards to return per page. Chorus allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The one-indexed page of scorecards to return.
         * @minimum 1
         */
        pageNumber?: number;
      };
      output: {
        /** The Chorus scorecards returned by the API. */
        scorecards: Array<{
          /** The Chorus resource ID. */
          id?: string;
          /** The Chorus resource type. */
          type?: string;
          /** The Chorus resource attributes. */
          attributes?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Chorus teams visible to the connected API token user. */
    "chorus.list_teams": {
      input: Record<string, never>;
      output: {
        /** The Chorus teams returned by the API. */
        teams: Array<{
          /** The Chorus resource ID. */
          id?: string;
          /** The Chorus resource type. */
          type?: string;
          /** The Chorus resource attributes. */
          attributes?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
