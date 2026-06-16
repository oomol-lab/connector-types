import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List available ElevenLabs speech synthesis models for reading text aloud. */
    "elevenreader.get_models": {
      input: Record<string, never>;
      output: {
        /** The available speech synthesis models. */
        models: Array<{
          /** The unique model identifier. */
          modelId: string;
          /** The model name. */
          name?: string;
          /** The model description. */
          description?: string;
          /** The supported languages. */
          languages?: Array<{
            /** The language identifier. */
            languageId: string;
            /** The language name. */
            name: string;
          }>;
          /** Whether the model supports text-to-speech. */
          canDoTextToSpeech?: boolean;
          /** Whether the model supports style control. */
          canUseStyle?: boolean;
          /** Whether the model supports speaker boost. */
          canUseSpeakerBoost?: boolean;
          /** The maximum text length per request. */
          maximumTextLengthPerRequest?: number;
          /** The pricing information for the model. */
          modelRates?: Record<string, unknown>;
        }>;
      };
    };
    /** Get the current ElevenReader user profile and subscription snapshot. */
    "elevenreader.get_user_info": {
      input: Record<string, never>;
      output: {
        /** The current ElevenReader user profile. */
        user: {
          /** The unique user identifier. */
          userId: string;
          /** The Unix timestamp when the user was created. */
          createdAt: number;
          /** The user's first name. */
          firstName?: string;
          /** Whether the user is new. */
          isNewUser: boolean;
          /** Whether onboarding is completed. */
          isOnboardingCompleted: boolean;
          /** The user's subscription summary. */
          subscription: {
            /** The subscription tier. */
            tier: string;
            /** The subscription status. */
            status: string;
            /** The used character count. */
            characterCount: number;
            /** The maximum character count. */
            characterLimit: number;
            /** Whether the character limit can be extended. */
            canExtendCharacterLimit: boolean;
            /** Whether the user is currently allowed to extend the character limit. */
            allowedToExtendCharacterLimit: boolean;
            /** The Unix timestamp of the next character count reset. */
            nextCharacterCountResetUnix?: number;
            /** The custom voice limit. */
            voiceLimit?: number;
            /** Whether instant voice cloning is enabled. */
            canUseInstantVoiceCloning?: boolean;
            /** Whether professional voice cloning is enabled. */
            canUseProfessionalVoiceCloning?: boolean;
          };
        };
      };
    };
    /** Get one ElevenLabs voice by voice ID before using it to read text aloud. */
    "elevenreader.get_voice": {
      input: {
        /**
         * The unique voice identifier.
         * @minLength 1
         */
        voiceId: string;
        /** Whether to include voice settings in the response. */
        withSettings?: boolean;
      };
      output: {
        /** The requested voice. */
        voice: {
          /** The unique voice identifier. */
          voiceId: string;
          /** The voice name. */
          name: string;
          /** The voice category. */
          category: string;
          /** The voice description. */
          description?: string;
          /** The preview audio URL. */
          previewUrl?: string;
          /** The custom labels on the voice. */
          labels?: Record<string, string>;
          /** The voice settings. */
          settings?: Record<string, unknown>;
          /** The subscription tiers that can access the voice. */
          availableForTiers?: Array<string>;
          /** The high-quality base models available for this voice. */
          highQualityBaseModelIds?: Array<string>;
          /** The verified languages supported by the voice. */
          verifiedLanguages?: Array<Record<string, unknown>>;
          /** The voice sharing metadata. */
          sharing?: Record<string, unknown>;
          /** The voice fine-tuning metadata. */
          fineTuning?: Record<string, unknown>;
          /** The permission level on the voice resource. */
          permissionOnResource?: string;
          /** Whether the current user owns the voice. */
          isOwner?: boolean;
          /** Whether the voice is a legacy voice. */
          isLegacy?: boolean;
        };
      };
    };
    /** Convert text to speech with an ElevenLabs voice and upload the generated audio to connector transit storage. */
    "elevenreader.read_text": {
      input: {
        /**
         * The voice ID used to read the text aloud.
         * @minLength 1
         */
        voiceId: string;
        /**
         * The text to convert to speech.
         * @minLength 1
         */
        text: string;
        /** The ElevenLabs model ID to use for speech synthesis. */
        modelId?: string;
        /** The ElevenLabs output format, such as mp3_44100_128. */
        outputFormat?: string;
        /**
         * The latency optimization level accepted by ElevenLabs.
         * @minimum 0
         * @maximum 4
         */
        optimizeStreamingLatency?: number;
        /** Optional voice settings passed through to ElevenLabs. */
        voiceSettings?: Record<string, unknown>;
      };
      output: {
        /** The generated audio file. */
        file: {
          /** The generated file name. */
          name: string;
          /** The MIME type of the uploaded file. */
          mimetype: string;
          /** The transit URL for downloading the uploaded file. */
          s3url: string;
        };
        /** The voice ID used for generation. */
        voiceId: string;
        /** The model ID used for generation. */
        modelId?: string;
        /** The requested output format. */
        outputFormat: string;
        /** The response content type from ElevenLabs. */
        contentType: string;
      };
    };
    /** Search available ElevenLabs voices with pagination and filters useful for reading text aloud. */
    "elevenreader.search_voices": {
      input: {
        /** A search term that filters voices by name, description, labels, or category. */
        search?: string;
        /** The voice category to filter by. */
        category?: "premade" | "cloned" | "generated" | "professional";
        /** The voice type to filter by. */
        voiceType?: "personal" | "community" | "default" | "workspace" | "non-default" | "saved";
        /** The field used to sort voices. */
        sort?: "created_at_unix" | "name";
        /** The direction used to sort voices. */
        sortDirection?: "asc" | "desc";
        /**
         * The maximum number of voices to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The pagination token returned by the previous response. */
        nextPageToken?: string;
        /** Whether to include the total count in the response. */
        includeTotalCount?: boolean;
      };
      output: {
        /** The voices returned by the search. */
        voices: Array<{
          /** The unique voice identifier. */
          voiceId: string;
          /** The voice name. */
          name: string;
          /** The voice category. */
          category: string;
          /** The voice description. */
          description?: string;
          /** The preview audio URL. */
          previewUrl?: string;
          /** The custom labels on the voice. */
          labels?: Record<string, string>;
          /** The voice settings. */
          settings?: Record<string, unknown>;
          /** The subscription tiers that can access the voice. */
          availableForTiers?: Array<string>;
          /** The high-quality base models available for this voice. */
          highQualityBaseModelIds?: Array<string>;
          /** The verified languages supported by the voice. */
          verifiedLanguages?: Array<Record<string, unknown>>;
          /** The voice sharing metadata. */
          sharing?: Record<string, unknown>;
          /** The voice fine-tuning metadata. */
          fineTuning?: Record<string, unknown>;
          /** The permission level on the voice resource. */
          permissionOnResource?: string;
          /** Whether the current user owns the voice. */
          isOwner?: boolean;
          /** Whether the voice is a legacy voice. */
          isLegacy?: boolean;
        }>;
        /** Whether more voices are available after this page. */
        hasMore: boolean;
        /** The token to pass to the next request for pagination. */
        nextPageToken?: string;
        /** The total number of matching voices when requested. */
        totalCount?: number;
      };
    };
  }
}
