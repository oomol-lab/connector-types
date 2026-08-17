import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the Hamsa project associated with the connected API key. */
    "hamsa.get_project": {
      input: Record<string, never>;
      output: {
        /** A Hamsa project associated with the API key. */
        project: {
          /** The project identifier. */
          id?: string;
          /** The project name. */
          name?: string;
          /**
           * The project creation timestamp.
           * @format date-time
           */
          createdAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Hamsa voice agent by its identifier. */
    "hamsa.get_voice_agent": {
      input: {
        /**
         * The voice agent identifier.
         * @format uuid
         */
        voiceAgentId: string;
      };
      output: {
        /** A Hamsa voice agent. */
        voiceAgent: {
          /**
           * The voice agent identifier.
           * @format uuid
           */
          id?: string;
          /** The voice agent name. */
          name?: string;
          /** The voice agent type. */
          type?: string | null;
          /**
           * The voice agent creation timestamp.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The voice agent update timestamp.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Hamsa text-to-speech voices available to a project. */
    "hamsa.list_tts_voices": {
      input: {
        /**
         * The Hamsa project identifier.
         * @format uuid
         */
        projectId: string;
        /** The product surface where the voices are used. */
        source: "jobs" | "voice_agents";
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of voices to return per page.
         * @minimum 1
         */
        pageSize?: number;
        /** The search query used to filter voices. */
        search?: string;
        /** Whether to return only recently used voices. */
        recentlyUsed?: boolean;
        /** Whether to return all matching voices. */
        all?: boolean;
        /** Whether to return only voices owned by the connected user. */
        myVoices?: boolean;
        /** Whether to return only favourite voices. */
        favourite?: boolean;
        /** The voice genders to include. */
        genders?: Array<"male" | "female">;
        /** The voice languages to include. */
        languages?: Array<"ar" | "en">;
        /** The speaking styles to include. */
        styles?: Array<"narrator" | "conversational">;
        /** The dialect identifiers to include. */
        dialectIds?: Array<string>;
      };
      output: {
        /** The voices in this page. */
        voices: Array<{
          /**
           * The voice identifier.
           * @format uuid
           */
          id?: string;
          /** The voice language code. */
          language?: string;
          /** The voice name. */
          name?: string;
          /** The gender and speaking-style tags for the voice. */
          tags?: Array<string>;
          /**
           * The signed URL for the voice audio sample.
           * @format uri
           */
          voiceRecord?: string;
          /**
           * The voice creation timestamp.
           * @format date-time
           */
          createdAt?: string;
          /** Whether the voice is marked as a favourite. */
          isFavourite?: boolean;
          /** Whether the voice has been used in text-to-speech jobs. */
          usedInJobs?: boolean;
          /** Whether the voice is assigned to a voice agent. */
          usedInVoiceAgents?: boolean;
          [key: string]: unknown;
        }>;
        /** The total number of pages. */
        totalPages: number;
        /** The current page number. */
        page: number;
        /** The total number of matching voices. */
        totalCount: number;
      };
    };
    /** List Hamsa voice agents with pagination, search, sorting, and filters. */
    "hamsa.list_voice_agents": {
      input: {
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of voice agents to return per page.
         * @minimum 1
         */
        pageSize?: number;
        /** The search query used to filter voice agents by name. */
        search?: string;
        /** The creation-time sort order. */
        sortOrder?: "asc" | "desc";
        /** The voice agent types to include. */
        types?: Array<string>;
        /** The language codes to include. */
        languages?: Array<string>;
      };
      output: {
        /** The total number of matching voice agents. */
        total: number;
        /** The number of voice agents returned in this page. */
        filtered: number;
        /** The voice agents in this page. */
        voiceAgents: Array<{
          /**
           * The voice agent identifier.
           * @format uuid
           */
          id?: string;
          /** The voice agent name. */
          name?: string;
          /** The voice agent type. */
          type?: string | null;
          /**
           * The voice agent creation timestamp.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The voice agent update timestamp.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
