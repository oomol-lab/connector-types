import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate a sound effect from a text prompt and upload the binary audio result to connector transit storage. */
    "elevenlabs.create_sound_effect": {
      input: {
        /**
         * The prompt text that will be converted into a sound effect.
         * @minLength 1
         */
        text: string;
        /** The output audio format for generated sound effects. */
        outputFormat?: "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "mp3_44100_128" | "mp3_44100_192" | "pcm_8000" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "ulaw_8000" | "alaw_8000" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "opus_48000_128" | "opus_48000_192";
        /** Whether to create a smoothly looping sound effect. */
        loop?: boolean;
        /**
         * The generated sound duration in seconds.
         * @minimum 0.5
         * @maximum 30
         */
        durationSeconds?: number;
        /**
         * How strongly the generation should follow the prompt.
         * @minimum 0
         * @maximum 1
         */
        promptInfluence?: number;
        /** The ElevenLabs sound generation model ID. */
        modelId?: string;
      };
      output: {
        /** A downloadable file uploaded to connector transit storage. */
        file: {
          /** The generated file name. */
          name: string;
          /** The MIME type of the uploaded file. */
          mimetype: string;
          /** The transit URL for downloading the uploaded file. */
          s3url: string;
        };
        /** The requested output format. */
        outputFormat: string;
        /** The response content type from ElevenLabs. */
        contentType: string;
      };
    };
    /** Delete one ElevenLabs history item by history item ID. */
    "elevenlabs.delete_history_item": {
      input: {
        /**
         * The history item ID to delete.
         * @minLength 1
         */
        historyItemId: string;
      };
      output: {
        /** The deletion status returned by ElevenLabs. */
        status: string;
      };
    };
    /** Download the audio for one ElevenLabs history item and upload the binary result to connector transit storage. */
    "elevenlabs.get_audio_from_history_item": {
      input: {
        /**
         * The history item ID whose audio should be downloaded.
         * @minLength 1
         */
        historyItemId: string;
      };
      output: {
        /** A downloadable file uploaded to connector transit storage. */
        file: {
          /** The generated file name. */
          name: string;
          /** The MIME type of the uploaded file. */
          mimetype: string;
          /** The transit URL for downloading the uploaded file. */
          s3url: string;
        };
        /** The history item ID that was downloaded. */
        historyItemId: string;
        /** The response content type from ElevenLabs. */
        contentType: string;
      };
    };
    /** List generated ElevenLabs history items with pagination and optional voice filtering. */
    "elevenlabs.get_generated_items": {
      input: {
        /**
         * The maximum number of history items to return.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /** Filter history items by voice ID. */
        voiceId?: string;
        /** The history item ID to continue pagination after. */
        startAfterHistoryItemId?: string;
      };
      output: {
        /** The returned history items. */
        history: Array<{
          /** The unique history item identifier. */
          historyItemId: string;
          /** The originating request identifier. */
          requestId?: string;
          /** The voice identifier used for generation. */
          voiceId?: string;
          /** The model identifier used for generation. */
          modelId?: string;
          /** The voice name used for generation. */
          voiceName?: string;
          /** The voice category used for generation. */
          voiceCategory?: string;
          /** The input text that was synthesized. */
          text?: string;
          /** The Unix timestamp when the history item was created. */
          dateUnix: number;
          /** The input character count before processing. */
          characterCountChangeFrom?: number;
          /** The final synthesized character count. */
          characterCountChangeTo?: number;
          /** The audio content type. */
          contentType?: string;
          /** The history item state. */
          state: string;
          /** The generation source. */
          source?: string;
          /** The synthesis settings used for the generation. */
          settings?: Record<string, unknown>;
          /** The feedback attached to a history item. */
          feedback?: {
            /** Whether the feedback is positive. */
            thumbsUp?: boolean;
            /** The textual feedback content. */
            feedback?: string;
            /** Whether the feedback mentions emotions. */
            emotions?: boolean;
            /** Whether the feedback reports an inaccurate clone. */
            inaccurateClone?: boolean;
            /** Whether the feedback reports glitches. */
            glitches?: boolean;
            /** Whether the feedback mentions audio quality. */
            audioQuality?: boolean;
            /** Whether the feedback mentions other issues. */
            other?: boolean;
            /** The review status. */
            reviewStatus?: string;
          };
          /** The public share link identifier. */
          shareLinkId?: string | null;
        }>;
        /** Whether additional history items are available. */
        hasMore: boolean;
        /** The pagination cursor for the next page. */
        lastHistoryItemId?: string | null;
        /** The Unix timestamp until which the scan completed. */
        scannedUntil?: number;
      };
    };
    /** Get one ElevenLabs history item by history item ID without downloading its audio. */
    "elevenlabs.get_history_item_by_id": {
      input: {
        /**
         * The history item ID to retrieve.
         * @minLength 1
         */
        historyItemId: string;
      };
      output: {
        /** An ElevenLabs history item summary. */
        historyItem: {
          /** The unique history item identifier. */
          historyItemId: string;
          /** The originating request identifier. */
          requestId?: string;
          /** The voice identifier used for generation. */
          voiceId?: string;
          /** The model identifier used for generation. */
          modelId?: string;
          /** The voice name used for generation. */
          voiceName?: string;
          /** The voice category used for generation. */
          voiceCategory?: string;
          /** The input text that was synthesized. */
          text?: string;
          /** The Unix timestamp when the history item was created. */
          dateUnix: number;
          /** The input character count before processing. */
          characterCountChangeFrom?: number;
          /** The final synthesized character count. */
          characterCountChangeTo?: number;
          /** The audio content type. */
          contentType?: string;
          /** The history item state. */
          state: string;
          /** The generation source. */
          source?: string;
          /** The synthesis settings used for the generation. */
          settings?: Record<string, unknown>;
          /** The feedback attached to a history item. */
          feedback?: {
            /** Whether the feedback is positive. */
            thumbsUp?: boolean;
            /** The textual feedback content. */
            feedback?: string;
            /** Whether the feedback mentions emotions. */
            emotions?: boolean;
            /** Whether the feedback reports an inaccurate clone. */
            inaccurateClone?: boolean;
            /** Whether the feedback reports glitches. */
            glitches?: boolean;
            /** Whether the feedback mentions audio quality. */
            audioQuality?: boolean;
            /** Whether the feedback mentions other issues. */
            other?: boolean;
            /** The review status. */
            reviewStatus?: string;
          };
          /** The public share link identifier. */
          shareLinkId?: string | null;
        };
      };
    };
    /** List the available ElevenLabs models and their text-to-speech capabilities. */
    "elevenlabs.get_models": {
      input: Record<string, never>;
      output: {
        /** The available ElevenLabs models. */
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
          /** Whether the model can be finetuned. */
          canBeFinetuned?: boolean;
          /** Whether the model supports text-to-speech. */
          canDoTextToSpeech?: boolean;
          /** Whether the model supports voice conversion. */
          canDoVoiceConversion?: boolean;
          /** Whether the model supports style control. */
          canUseStyle?: boolean;
          /** Whether the model supports speaker boost. */
          canUseSpeakerBoost?: boolean;
          /** Whether the model serves professional voices. */
          servesProVoices?: boolean;
          /** The token cost factor for the model. */
          tokenCostFactor?: number;
          /** The concurrency group. */
          concurrencyGroup?: string;
          /** The maximum request length for free users. */
          maxCharactersRequestFreeUser?: number;
          /** The maximum request length for subscribed users. */
          maxCharactersRequestSubscribedUser?: number;
          /** The maximum text length per request. */
          maximumTextLengthPerRequest?: number;
          /** Whether alpha access is required. */
          requiresAlphaAccess?: boolean;
          /** The pricing information for the model. */
          modelRates?: Record<string, unknown>;
        }>;
      };
    };
    /** Get the current ElevenLabs user profile together with the embedded subscription snapshot. */
    "elevenlabs.get_user_info": {
      input: Record<string, never>;
      output: {
        /** The current ElevenLabs user profile. */
        user: {
          /** The unique user identifier. */
          userId: string;
          /** The Unix timestamp when the user was created. */
          createdAt: number;
          /** The user's first name. */
          firstName?: string;
          /** Whether the user is new. */
          isNewUser: boolean;
          /** Whether delayed payment methods are available. */
          canUseDelayedPaymentMethods: boolean;
          /** Whether onboarding is completed. */
          isOnboardingCompleted: boolean;
          /** Whether the onboarding checklist is completed. */
          isOnboardingChecklistCompleted: boolean;
          /** Whether the API key is stored in hashed form. */
          isApiKeyHashed: boolean;
          /** An ElevenLabs user subscription summary. */
          subscription: {
            /** The subscription tier. */
            tier: string;
            /** The subscription status. */
            status: string;
            /** The billing currency. */
            currency?: string;
            /** The billing period. */
            billingPeriod?: string;
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
            voiceLimit: number;
            /** The maximum allowed voice add/edit operations. */
            maxVoiceAddEdits: number;
            /** The number of used voice add/edit operations. */
            voiceAddEditCounter: number;
            /** The professional voice limit. */
            professionalVoiceLimit: number;
            /** Whether the voice limit can be extended. */
            canExtendVoiceLimit: boolean;
            /** Whether instant voice cloning is enabled. */
            canUseInstantVoiceCloning: boolean;
            /** Whether professional voice cloning is enabled. */
            canUseProfessionalVoiceCloning: boolean;
            /** The character refresh period. */
            characterRefreshPeriod?: string;
            /** Whether delayed payment methods are available. */
            canUseDelayedPaymentMethods?: boolean;
          };
        };
      };
    };
    /** Get the current ElevenLabs subscription details for the authenticated user. */
    "elevenlabs.get_user_subscription_info": {
      input: Record<string, never>;
      output: {
        /** An ElevenLabs subscription summary. */
        subscription: {
          /** The subscription tier. */
          tier: string;
          /** The subscription status. */
          status: string;
          /** The billing currency. */
          currency?: string;
          /** The billing period. */
          billingPeriod?: string;
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
          voiceLimit: number;
          /** The maximum allowed voice add/edit operations. */
          maxVoiceAddEdits: number;
          /** The number of used voice add/edit operations. */
          voiceAddEditCounter: number;
          /** The professional voice limit. */
          professionalVoiceLimit: number;
          /** Whether the voice limit can be extended. */
          canExtendVoiceLimit: boolean;
          /** Whether instant voice cloning is enabled. */
          canUseInstantVoiceCloning: boolean;
          /** Whether professional voice cloning is enabled. */
          canUseProfessionalVoiceCloning: boolean;
          /** The character refresh period. */
          characterRefreshPeriod?: string;
          /** Whether delayed payment methods are available. */
          canUseDelayedPaymentMethods?: boolean;
          /** Whether there are open invoices. */
          hasOpenInvoices: boolean;
          /** The list of open invoices. */
          openInvoices: Array<{
            /** The amount due in cents. */
            amountDueCents: number;
            /** The Unix timestamp of the next payment attempt. */
            nextPaymentAttemptUnix: number;
            /** The discounts applied to the invoice. */
            discounts: Array<{
              /** The discount amount applied to the invoice. */
              discountAmountOff?: number;
              /** The discount percentage applied to the invoice. */
              discountPercentOff?: number;
            }>;
            /** The invoice subtotal in cents. */
            subtotalCents?: number;
            /** The invoice tax amount in cents. */
            taxCents?: number;
            /** The payment intent status. */
            paymentIntentStatus?: string;
            /** The total discount amount applied. */
            discountAmountOff?: number;
            /** The total discount percentage applied. */
            discountPercentOff?: number;
          }>;
          /** A billing invoice summary. */
          nextInvoice?: {
            /** The amount due in cents. */
            amountDueCents: number;
            /** The Unix timestamp of the next payment attempt. */
            nextPaymentAttemptUnix: number;
            /** The discounts applied to the invoice. */
            discounts: Array<{
              /** The discount amount applied to the invoice. */
              discountAmountOff?: number;
              /** The discount percentage applied to the invoice. */
              discountPercentOff?: number;
            }>;
            /** The invoice subtotal in cents. */
            subtotalCents?: number;
            /** The invoice tax amount in cents. */
            taxCents?: number;
            /** The payment intent status. */
            paymentIntentStatus?: string;
            /** The total discount amount applied. */
            discountAmountOff?: number;
            /** The total discount percentage applied. */
            discountPercentOff?: number;
          } | null;
          /** A pending subscription change. */
          pendingSubscriptionChange?: {
            /** The pending change kind. */
            kind?: string;
            /** The next subscription tier. */
            nextTier?: string;
            /** The next billing period. */
            nextBillingPeriod?: string;
            /** The Unix timestamp when the change takes effect. */
            timestampSeconds?: number;
          } | null;
        };
      };
    };
    /** Get one ElevenLabs voice by voice ID, with optional settings included. */
    "elevenlabs.get_voice": {
      input: {
        /**
         * The voice ID to retrieve.
         * @minLength 1
         */
        voiceId: string;
        /** Whether the response should include voice settings. */
        withSettings?: boolean;
      };
      output: {
        /** An ElevenLabs voice summary. */
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
          /** The verified languages supported by the voice. */
          verifiedLanguages?: Array<{
            /** The language name. */
            language?: string;
            /** The model identifier for the language. */
            modelId?: string;
            /** The accent label. */
            accent?: string;
            /** The locale code. */
            locale?: string;
          }>;
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
    /** Get the synthesis settings configured for one ElevenLabs voice. */
    "elevenlabs.get_voice_settings": {
      input: {
        /**
         * The voice ID whose settings should be retrieved.
         * @minLength 1
         */
        voiceId: string;
      };
      output: {
        /** The voice settings returned by ElevenLabs. */
        settings: {
          /** The stability control value. */
          stability?: number | null;
          /** The similarity boost value. */
          similarityBoost?: number | null;
          /** The style control value. */
          style?: number | null;
          /** Whether speaker boost is enabled. */
          useSpeakerBoost?: boolean | null;
          /** The voice speed multiplier. */
          speed?: number | null;
        };
      };
    };
    /** List the available ElevenLabs voices with their key metadata and settings. */
    "elevenlabs.get_voices": {
      input: Record<string, never>;
      output: {
        /** The available ElevenLabs voices. */
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
          /** The verified languages supported by the voice. */
          verifiedLanguages?: Array<{
            /** The language name. */
            language?: string;
            /** The model identifier for the language. */
            modelId?: string;
            /** The accent label. */
            accent?: string;
            /** The locale code. */
            locale?: string;
          }>;
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
      };
    };
    /** Search ElevenLabs voices with v2 pagination, filtering, sorting, and optional total count. */
    "elevenlabs.search_voices": {
      input: {
        /** Search voices by name, description, labels, or category. */
        search?: string;
        /** The voice category to filter by. */
        category?: "premade" | "cloned" | "generated" | "professional";
        /** The voice type to filter by. */
        voiceType?: "personal" | "community" | "default" | "workspace" | "non-default" | "non-community" | "saved";
        /** The field used to sort voices. */
        sort?: "created_at_unix" | "name";
        /** The direction used to sort results. */
        sortDirection?: "asc" | "desc";
        /** The voice fine-tuning state to filter by. */
        fineTuningState?: "draft" | "not_verified" | "not_started" | "queued" | "fine_tuning" | "fine_tuned" | "failed" | "delayed";
        /** Filter voices by collection ID. */
        collectionId?: string;
        /**
         * The voice IDs to look up.
         * @maxItems 100
         */
        voiceIds?: Array<string>;
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
          /** The verified languages supported by the voice. */
          verifiedLanguages?: Array<{
            /** The language name. */
            language?: string;
            /** The model identifier for the language. */
            modelId?: string;
            /** The accent label. */
            accent?: string;
            /** The locale code. */
            locale?: string;
          }>;
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
        /** The pagination token for the next request. */
        nextPageToken?: string;
        /** The total number of matching voices when requested. */
        totalCount?: number;
      };
    };
    /** Generate speech audio from text by calling ElevenLabs text-to-speech and uploading the binary result to connector transit storage. */
    "elevenlabs.text_to_speech": {
      input: {
        /**
         * The voice ID to use for synthesis.
         * @minLength 1
         */
        voiceId: string;
        /**
         * The input text to synthesize.
         * @minLength 1
         */
        text: string;
        /** The model ID to use for synthesis. */
        modelId?: string;
        /** The output audio format. ElevenLabs formats are named as codec_sample_rate_bitrate, such as mp3_44100_128. */
        outputFormat?: "alaw_8000" | "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_128" | "mp3_44100_192" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "opus_48000_128" | "opus_48000_192" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "pcm_8000" | "ulaw_8000" | "wav_16000" | "wav_22050" | "wav_24000" | "wav_32000" | "wav_44100" | "wav_48000" | "wav_8000";
        /**
         * The streaming latency optimization level.
         * @minimum 0
         * @maximum 4
         */
        optimizeStreamingLatency?: number;
        /** The deterministic generation seed. */
        seed?: number;
        /** The voice settings overrides for synthesis. */
        voiceSettings?: {
          /**
           * The stability control value.
           * @minimum 0
           * @maximum 1
           */
          stability?: number;
          /**
           * The similarity boost value.
           * @minimum 0
           * @maximum 1
           */
          similarityBoost?: number;
          /**
           * The style control value.
           * @minimum 0
           * @maximum 1
           */
          style?: number;
          /** Whether speaker boost should be enabled. */
          useSpeakerBoost?: boolean;
          [key: string]: unknown;
        };
        /**
         * The pronunciation dictionary locators to apply.
         * @maxItems 3
         */
        pronunciationDictionaryLocators?: Array<{
          /** The pronunciation dictionary identifier. */
          pronunciationDictionaryId: string;
          /** The pronunciation dictionary version identifier. */
          versionId?: string;
        }>;
      };
      output: {
        /** A downloadable file uploaded to connector transit storage. */
        file: {
          /** The generated file name. */
          name: string;
          /** The MIME type of the uploaded file. */
          mimetype: string;
          /** The transit URL for downloading the uploaded file. */
          s3url: string;
        };
        /** The voice ID used for synthesis. */
        voiceId: string;
        /** The model ID used for synthesis. */
        modelId?: string;
        /** The requested output format. */
        outputFormat: string;
        /** The response content type from ElevenLabs. */
        contentType: string;
      };
    };
    /** Generate speech audio with character-level timing, upload the audio to connector transit storage, and return timing metadata. */
    "elevenlabs.text_to_speech_with_timestamps": {
      input: {
        /**
         * The voice ID to use for synthesis.
         * @minLength 1
         */
        voiceId: string;
        /**
         * The input text to synthesize.
         * @minLength 1
         */
        text: string;
        /** The model ID to use for synthesis. */
        modelId?: string;
        /** The output audio format. ElevenLabs formats are named as codec_sample_rate_bitrate, such as mp3_44100_128. */
        outputFormat?: "alaw_8000" | "mp3_22050_32" | "mp3_24000_48" | "mp3_44100_128" | "mp3_44100_192" | "mp3_44100_32" | "mp3_44100_64" | "mp3_44100_96" | "opus_48000_128" | "opus_48000_192" | "opus_48000_32" | "opus_48000_64" | "opus_48000_96" | "pcm_16000" | "pcm_22050" | "pcm_24000" | "pcm_32000" | "pcm_44100" | "pcm_48000" | "pcm_8000" | "ulaw_8000" | "wav_16000" | "wav_22050" | "wav_24000" | "wav_32000" | "wav_44100" | "wav_48000" | "wav_8000";
        /**
         * The streaming latency optimization level.
         * @minimum 0
         * @maximum 4
         */
        optimizeStreamingLatency?: number;
        /** The deterministic generation seed. */
        seed?: number;
        /** The voice settings overrides for synthesis. */
        voiceSettings?: {
          /**
           * The stability control value.
           * @minimum 0
           * @maximum 1
           */
          stability?: number;
          /**
           * The similarity boost value.
           * @minimum 0
           * @maximum 1
           */
          similarityBoost?: number;
          /**
           * The style control value.
           * @minimum 0
           * @maximum 1
           */
          style?: number;
          /** Whether speaker boost should be enabled. */
          useSpeakerBoost?: boolean;
          [key: string]: unknown;
        };
        /**
         * The pronunciation dictionary locators to apply.
         * @maxItems 3
         */
        pronunciationDictionaryLocators?: Array<{
          /** The pronunciation dictionary identifier. */
          pronunciationDictionaryId: string;
          /** The pronunciation dictionary version identifier. */
          versionId?: string;
        }>;
      };
      output: {
        /** A downloadable file uploaded to connector transit storage. */
        file: {
          /** The generated file name. */
          name: string;
          /** The MIME type of the uploaded file. */
          mimetype: string;
          /** The transit URL for downloading the uploaded file. */
          s3url: string;
        };
        /** Character-level timing information for generated audio. */
        alignment?: {
          /** The generated characters. */
          characters: Array<string>;
          /** The start time in seconds for each character. */
          characterStartTimesSeconds: Array<number>;
          /** The end time in seconds for each character. */
          characterEndTimesSeconds: Array<number>;
        } | null;
        /** Character-level timing information for generated audio. */
        normalizedAlignment?: {
          /** The generated characters. */
          characters: Array<string>;
          /** The start time in seconds for each character. */
          characterStartTimesSeconds: Array<number>;
          /** The end time in seconds for each character. */
          characterEndTimesSeconds: Array<number>;
        } | null;
        /** The voice ID used for synthesis. */
        voiceId: string;
        /** The model ID used for synthesis. */
        modelId?: string;
        /** The requested output format. */
        outputFormat: string;
        /** The uploaded audio MIME type. */
        contentType: string;
      };
    };
  }
}
