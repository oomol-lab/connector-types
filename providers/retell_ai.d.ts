import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve details for a specific Retell AI call. */
    "retell_ai.get_call": {
      input: {
        /**
         * The call id to retrieve call history for.
         * @minLength 1
         */
        callId: string;
      };
      output: {
        /** A normalized Retell AI call. */
        call: {
          /** Unique id of the call. */
          callId: string;
          /** Call type, such as web_call or phone_call, when provided. */
          callType: string | null;
          /** Agent id associated with the call when provided. */
          agentId: string | null;
          /** Agent name associated with the call when provided. */
          agentName: string | null;
          /** Current call status when provided. */
          callStatus: string | null;
          /** Call direction for phone calls when provided. */
          direction: string | null;
          /** Caller number for phone calls when provided. */
          fromNumber: string | null;
          /** Callee number for phone calls when provided. */
          toNumber: string | null;
          /** Call start timestamp in milliseconds when provided. */
          startTimestamp: number | null;
          /** Call end timestamp in milliseconds when provided. */
          endTimestamp: number | null;
          /** Call duration in milliseconds when provided. */
          durationMs: number | null;
          /** The raw object returned by Retell AI. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve details for a specific Retell AI phone number. */
    "retell_ai.get_phone_number": {
      input: {
        /**
         * E.164 phone number to retrieve.
         * @minLength 1
         */
        phoneNumber: string;
      };
      output: {
        /** A normalized Retell AI phone number. */
        phoneNumber: {
          /** E.164 phone number used as the unique identifier. */
          phoneNumber: string;
          /** Type of the phone number when provided. */
          phoneNumberType: string | null;
          /** Pretty printed phone number when provided. */
          phoneNumberPretty: string | null;
          /** Phone number nickname when provided. */
          nickname: string | null;
          /** Inbound webhook URL when provided. */
          inboundWebhookUrl: string | null;
          /** Last modification timestamp in milliseconds since epoch when provided. */
          lastModificationTimestamp: number | null;
          /** The raw object returned by Retell AI. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve details for a specific Retell AI voice. */
    "retell_ai.get_voice": {
      input: {
        /**
         * Unique id for the voice.
         * @minLength 1
         */
        voiceId: string;
      };
      output: {
        /** A normalized Retell AI voice. */
        voice: {
          /** Unique id for the voice. */
          voiceId: string;
          /** Name of the voice. */
          voiceName: string;
          /** Provider of the voice. */
          provider: string;
          /** Gender of the voice. */
          gender: string;
          /** Accent annotation of the voice when provided. */
          accent: string | null;
          /** Age annotation of the voice when provided. */
          age: string | null;
          /** URL to the preview audio when provided. */
          previewAudioUrl: string | null;
          /** The raw object returned by Retell AI. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve details for a specific Retell AI voice agent. */
    "retell_ai.get_voice_agent": {
      input: {
        /**
         * Unique id of the voice agent to retrieve.
         * @minLength 1
         */
        agentId: string;
        /** Agent version reference. */
        version?: number | string;
      };
      output: {
        /** A normalized Retell AI voice agent. */
        agent: {
          /** Unique id of the agent. */
          agentId: string;
          /** Version of the agent. */
          version: number | null;
          /** Name of the agent when provided. */
          agentName: string | null;
          /** Voice id used for the agent when provided. */
          voiceId: string | null;
          /** Whether the agent version is published when provided. */
          isPublished: boolean | null;
          /** Last modification timestamp in milliseconds since epoch when provided. */
          lastModificationTimestamp: number | null;
          /** The raw object returned by Retell AI. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Retell AI calls with pagination and optional simple filters. */
    "retell_ai.list_calls": {
      input: {
        /**
         * Maximum number of calls to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Opaque pagination cursor from a previous response.
         * @minLength 1
         */
        paginationKey?: string;
        /**
         * Number of records to skip for pagination.
         * @minimum 0
         */
        skip?: number;
        /** Sort calls by start timestamp in ascending or descending order. */
        sortOrder?: "ascending" | "descending";
        /** Whether Retell AI should include the matching total count. */
        includeTotal?: boolean;
        /**
         * Agent ids to filter calls by.
         * @minItems 1
         */
        agentIds?: Array<string>;
        /**
         * Call ids to filter calls by.
         * @minItems 1
         */
        callIds?: Array<string>;
        /**
         * Call statuses to filter calls by.
         * @minItems 1
         */
        callStatuses?: Array<"not_connected" | "ongoing" | "ended" | "error">;
        /**
         * Call types to filter calls by.
         * @minItems 1
         */
        callTypes?: Array<"web_call" | "phone_call">;
        /**
         * Call directions to filter phone calls by.
         * @minItems 1
         */
        directions?: Array<"inbound" | "outbound">;
      };
      output: {
        /** Pagination cursor for the next page when provided. */
        paginationKey: string | null;
        /** Whether more results are available. */
        hasMore: boolean;
        /** Total number of matching calls when includeTotal was requested and provided. */
        total: number | null;
        /** Calls returned by Retell AI. */
        calls: Array<{
          /** Unique id of the call. */
          callId: string;
          /** Call type, such as web_call or phone_call, when provided. */
          callType: string | null;
          /** Agent id associated with the call when provided. */
          agentId: string | null;
          /** Agent name associated with the call when provided. */
          agentName: string | null;
          /** Current call status when provided. */
          callStatus: string | null;
          /** Call direction for phone calls when provided. */
          direction: string | null;
          /** Caller number for phone calls when provided. */
          fromNumber: string | null;
          /** Callee number for phone calls when provided. */
          toNumber: string | null;
          /** Call start timestamp in milliseconds when provided. */
          startTimestamp: number | null;
          /** Call end timestamp in milliseconds when provided. */
          endTimestamp: number | null;
          /** Call duration in milliseconds when provided. */
          durationMs: number | null;
          /** The raw object returned by Retell AI. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Retell AI. */
        raw: Record<string, unknown>;
      };
    };
    /** List Retell AI phone numbers with cursor pagination. */
    "retell_ai.list_phone_numbers": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Pagination cursor from a previous response.
         * @minLength 1
         */
        paginationKey?: string;
        /** Sort order for phone number results. */
        sortOrder?: "ascending" | "descending";
      };
      output: {
        /** Pagination cursor for the next page when provided. */
        paginationKey: string | null;
        /** Whether more results are available. */
        hasMore: boolean;
        /** Phone numbers returned by Retell AI. */
        phoneNumbers: Array<{
          /** E.164 phone number used as the unique identifier. */
          phoneNumber: string;
          /** Type of the phone number when provided. */
          phoneNumberType: string | null;
          /** Pretty printed phone number when provided. */
          phoneNumberPretty: string | null;
          /** Phone number nickname when provided. */
          nickname: string | null;
          /** Inbound webhook URL when provided. */
          inboundWebhookUrl: string | null;
          /** Last modification timestamp in milliseconds since epoch when provided. */
          lastModificationTimestamp: number | null;
          /** The raw object returned by Retell AI. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Retell AI. */
        raw: Record<string, unknown>;
      };
    };
    /** List Retell AI voice agents with optional pagination filters. */
    "retell_ai.list_voice_agents": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Pagination cursor from a previous response.
         * @minLength 1
         */
        paginationKey?: string;
        /**
         * Version of the agent associated with paginationKey for consistent pagination.
         * @minimum 0
         */
        paginationKeyVersion?: number;
        /** Whether to return only the latest version of each agent. */
        isLatest?: boolean;
      };
      output: {
        /** Voice agents returned by Retell AI. */
        agents: Array<{
          /** Unique id of the agent. */
          agentId: string;
          /** Version of the agent. */
          version: number | null;
          /** Name of the agent when provided. */
          agentName: string | null;
          /** Voice id used for the agent when provided. */
          voiceId: string | null;
          /** Whether the agent version is published when provided. */
          isPublished: boolean | null;
          /** Last modification timestamp in milliseconds since epoch when provided. */
          lastModificationTimestamp: number | null;
          /** The raw object returned by Retell AI. */
          raw: Record<string, unknown>;
        }>;
        /** The raw voice agent list returned by Retell AI. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List all Retell AI voices available to the authenticated workspace. */
    "retell_ai.list_voices": {
      input: Record<string, never>;
      output: {
        /** Voices returned by Retell AI. */
        voices: Array<{
          /** Unique id for the voice. */
          voiceId: string;
          /** Name of the voice. */
          voiceName: string;
          /** Provider of the voice. */
          provider: string;
          /** Gender of the voice. */
          gender: string;
          /** Accent annotation of the voice when provided. */
          accent: string | null;
          /** Age annotation of the voice when provided. */
          age: string | null;
          /** URL to the preview audio when provided. */
          previewAudioUrl: string | null;
          /** The raw object returned by Retell AI. */
          raw: Record<string, unknown>;
        }>;
        /** The raw voice list returned by Retell AI. */
        raw: Array<Record<string, unknown>>;
      };
    };
  }
}
