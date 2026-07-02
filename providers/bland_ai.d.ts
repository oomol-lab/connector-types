import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve Bland AI account status, billing balance, and total call count. */
    "bland_ai.get_account": {
      input: Record<string, never>;
      output: {
        /** Current Bland AI account status. */
        status: string;
        /** The raw object returned by Bland AI. */
        billing: Record<string, unknown>;
        /** Current account credit balance when provided. */
        currentBalance: number | null;
        /** Auto-refill target balance when provided. */
        refillTo: number | null;
        /** Total number of calls made by the account when provided. */
        totalCalls: number | null;
        /** The raw object returned by Bland AI. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve detailed information and transcript phrases for a Bland AI call. */
    "bland_ai.get_call": {
      input: {
        /**
         * Unique id of the call to retrieve.
         * @minLength 1
         */
        callId: string;
      };
      output: {
        /** A normalized Bland AI call. */
        call: {
          /** Unique id of the call. */
          callId: string;
          /** Timestamp when the call request was created. */
          createdAt: string | null;
          /** Timestamp when the call connected when provided. */
          startedAt: string | null;
          /** Timestamp when the call ended when provided. */
          endedAt: string | null;
          /** Call length in minutes when provided. */
          callLength: number | null;
          /** Phone number that initiated the call when provided. */
          fromNumber: string | null;
          /** Phone number that received the call when provided. */
          toNumber: string | null;
          /** Whether the call has completed when provided. */
          completed: boolean | null;
          /** Whether the call was inbound when provided. */
          inbound: boolean | null;
          /** Bland queue status when provided. */
          queueStatus: string | null;
          /** Most up-to-date call status when provided. */
          status: string | null;
          /** Answer classification such as human, voicemail, or no-answer. */
          answeredBy: string | null;
          /** Error message recorded by Bland when provided. */
          errorMessage: string | null;
          /** Batch id associated with the call when provided. */
          batchId: string | null;
          /** Recording URL when the call was recorded and Bland provides it. */
          recordingUrl: string | null;
          /** Generated call summary when provided. */
          summary: string | null;
          /** The raw object returned by Bland AI. */
          raw: Record<string, unknown>;
        };
        /** Transcript phrases returned for the call. */
        transcripts: Array<{
          /** Unique phrase id when provided. */
          id: string | null;
          /** Timestamp when this transcript phrase was created. */
          createdAt: string | null;
          /** Transcript phrase text. */
          text: string;
          /** Speaker label such as user, assistant, robot, or agent-action. */
          user: string | null;
          /** The raw object returned by Bland AI. */
          raw: Record<string, unknown>;
        }>;
        /** Single combined transcript text when provided. */
        concatenatedTranscript: string | null;
      };
    };
    /** Retrieve details for a specific Bland AI voice by UUID or curated voice name. */
    "bland_ai.get_voice": {
      input: {
        /**
         * Voice UUID or curated voice name.
         * @minLength 1
         */
        voiceId: string;
      };
      output: {
        /** A normalized Bland AI voice. */
        voice: {
          /** UUID of the Bland voice. */
          id: string;
          /** Display name of the voice. */
          name: string;
          /** Human-readable voice description when provided. */
          description: string | null;
          /** Whether the voice is public or curated when provided. */
          isPublic: boolean | null;
          /** Labels describing the voice. */
          tags: Array<string>;
          /** Owner UUID when provided. */
          userId: string | null;
          /** Underlying model identifier when provided. */
          voiceId: string | null;
          /** Bland TTS engine identifier when provided. */
          service: string | null;
          /** Whether the voice has been fine-tuned when provided. */
          finetuned: boolean | null;
          /** Whether the voice is a creator-program voice when provided. */
          isCreatorVoice: boolean | null;
          /** Total number of voice ratings when provided. */
          ratings: number | null;
          /** Average voice rating when provided. */
          averageRating: number | null;
          /** Authenticated user's rating when provided. */
          myRating: number | null;
          /** Creator display name when provided. */
          creatorDisplayName: string | null;
          /** The raw object returned by Bland AI. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Bland AI calls with optional official filters and result-window controls. */
    "bland_ai.list_calls": {
      input: {
        /**
         * Filter calls by the number that initiated the call.
         * @minLength 1
         */
        fromNumber?: string;
        /**
         * Filter calls by the number that answered the call.
         * @minLength 1
         */
        toNumber?: string;
        /**
         * Starting index, inclusive, for the call result window.
         * @minimum 0
         */
        from?: number;
        /**
         * Ending index for the call result window.
         * @minimum 0
         */
        to?: number;
        /**
         * Maximum number of calls to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** Whether to sort calls ascending by creation time. */
        ascending?: boolean;
        /** Field to sort calls by. */
        sortBy?: "created_at" | "updated_at";
        /**
         * Start date or ISO datetime for filtering calls.
         * @minLength 1
         */
        startDate?: string;
        /**
         * End date or ISO datetime for filtering calls.
         * @minLength 1
         */
        endDate?: string;
        /**
         * Specific call creation date in YYYY-MM-DD format.
         * @minLength 1
         */
        createdAt?: string;
        /**
         * IANA timezone for interpreting date-only filters.
         * @minLength 1
         */
        timezone?: string;
        /**
         * Start date for filtering calls by update date.
         * @minLength 1
         */
        updateStartDate?: string;
        /**
         * End date for filtering calls by update date.
         * @minLength 1
         */
        updateEndDate?: string;
        /** Whether to filter calls by completed status. */
        completed?: boolean;
        /**
         * Filter calls by Bland batch id.
         * @minLength 1
         */
        batchId?: string;
        /**
         * Filter calls by answer classification.
         * @minLength 1
         */
        answeredBy?: string;
        /** Whether to filter inbound calls. */
        inbound?: boolean;
        /** Filter calls with call length greater than this minute value. */
        durationGt?: number;
        /** Filter calls with call length less than this minute value. */
        durationLt?: number;
        /**
         * Filter calls by campaign id.
         * @minLength 1
         */
        campaignId?: string;
      };
      output: {
        /** Total number of calls matching the filters when provided. */
        totalCount: number | null;
        /** Number of calls returned when provided. */
        count: number | null;
        /** Calls returned by Bland AI. */
        calls: Array<{
          /** Unique id of the call. */
          callId: string;
          /** Timestamp when the call request was created. */
          createdAt: string | null;
          /** Timestamp when the call connected when provided. */
          startedAt: string | null;
          /** Timestamp when the call ended when provided. */
          endedAt: string | null;
          /** Call length in minutes when provided. */
          callLength: number | null;
          /** Phone number that initiated the call when provided. */
          fromNumber: string | null;
          /** Phone number that received the call when provided. */
          toNumber: string | null;
          /** Whether the call has completed when provided. */
          completed: boolean | null;
          /** Whether the call was inbound when provided. */
          inbound: boolean | null;
          /** Bland queue status when provided. */
          queueStatus: string | null;
          /** Most up-to-date call status when provided. */
          status: string | null;
          /** Answer classification such as human, voicemail, or no-answer. */
          answeredBy: string | null;
          /** Error message recorded by Bland when provided. */
          errorMessage: string | null;
          /** Batch id associated with the call when provided. */
          batchId: string | null;
          /** Recording URL when the call was recorded and Bland provides it. */
          recordingUrl: string | null;
          /** Generated call summary when provided. */
          summary: string | null;
          /** The raw object returned by Bland AI. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Bland AI. */
        raw: Record<string, unknown>;
      };
    };
    /** List every Bland AI voice available to the authenticated account. */
    "bland_ai.list_voices": {
      input: Record<string, never>;
      output: {
        /** Voices returned by Bland AI. */
        voices: Array<{
          /** UUID of the Bland voice. */
          id: string;
          /** Display name of the voice. */
          name: string;
          /** Human-readable voice description when provided. */
          description: string | null;
          /** Whether the voice is public or curated when provided. */
          isPublic: boolean | null;
          /** Labels describing the voice. */
          tags: Array<string>;
          /** Owner UUID when provided. */
          userId: string | null;
          /** Underlying model identifier when provided. */
          voiceId: string | null;
          /** Bland TTS engine identifier when provided. */
          service: string | null;
          /** Whether the voice has been fine-tuned when provided. */
          finetuned: boolean | null;
          /** Whether the voice is a creator-program voice when provided. */
          isCreatorVoice: boolean | null;
          /** Total number of voice ratings when provided. */
          ratings: number | null;
          /** Average voice rating when provided. */
          averageRating: number | null;
          /** Authenticated user's rating when provided. */
          myRating: number | null;
          /** Creator display name when provided. */
          creatorDisplayName: string | null;
          /** The raw object returned by Bland AI. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Bland AI. */
        raw: Record<string, unknown>;
      };
    };
  }
}
