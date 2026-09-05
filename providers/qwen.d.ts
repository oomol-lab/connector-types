import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Analyze documents or text with Qwen-Doc-Turbo. */
    "qwen.analyze_document": {
      input: {
        /**
         * The extraction, classification, review, or summarization instruction.
         * @minLength 1
         */
        instruction: string;
        /**
         * Public URLs for up to ten documents.
         * @minItems 1
         * @maxItems 10
         */
        documentUrls?: Array<string>;
        /**
         * Plain text to analyze instead of documents.
         * @minLength 1
         */
        text?: string;
        /**
         * The system instruction defining the model role and behavior.
         * @minLength 1
         * @default "You are a helpful assistant."
         */
        systemPrompt?: string;
        /**
         * How Qwen parses document URLs.
         * @default "auto"
         */
        fileParsingStrategy?: "auto" | "text_only" | "text_and_images";
      };
      output: {
        /** The generated analysis content. */
        content: string;
        /**
         * The model reported by Qwen.
         * @minLength 1
         */
        model: string;
        /**
         * The number of input tokens billed by Qwen.
         * @minimum 0
         */
        inputTokens: number;
        /**
         * The number of output tokens billed by Qwen.
         * @minimum 0
         */
        outputTokens: number;
      };
    };
    /** Create a Qwen-Audio custom voice from a text description. */
    "qwen.create_designed_voice": {
      input: {
        /**
         * The Qwen-Audio 3.0 TTS model bound to the voice.
         * @default "qwen-audio-3.0-tts-flash"
         */
        targetModel?: "qwen-audio-3.0-tts-flash" | "qwen-audio-3.0-tts-plus";
        /**
         * An alphanumeric voice-name prefix of at most ten characters.
         * @minLength 1
         * @maxLength 10
         * @pattern ^[A-Za-z0-9]+$
         */
        prefix: string;
        /**
         * A Chinese or English description of the desired voice.
         * @minLength 1
         * @maxLength 500
         */
        voicePrompt: string;
        /**
         * Chinese or English text spoken by the preview audio.
         * @minLength 1
         * @maxLength 200
         */
        previewText: string;
        /**
         * The preview language hint; the API currently uses only the first value.
         * @minItems 1
         * @maxItems 1
         */
        languageHints?: Array<"zh" | "en">;
        /**
         * The preview audio sample rate in hertz.
         * @default 24000
         */
        sampleRate?: 16000 | 24000 | 48000;
        /**
         * The preview audio encoding.
         * @default "wav"
         */
        responseFormat?: "pcm" | "wav" | "mp3";
      };
      output: {
        /**
         * The created voice identifier accepted by generate_speech.
         * @minLength 1
         */
        voiceId: string;
        /** The Base64-encoded preview audio. */
        previewAudio: string;
        /**
         * The preview audio sample rate in hertz.
         * @minimum 1
         */
        sampleRate: number;
        /**
         * The preview audio encoding.
         * @minLength 1
         */
        responseFormat: string;
      };
    };
    /** Create a Qwen-Audio custom voice from a public audio sample. */
    "qwen.create_voice_clone": {
      input: {
        /**
         * The Qwen-Audio 3.0 TTS model bound to the voice.
         * @default "qwen-audio-3.0-tts-flash"
         */
        targetModel?: "qwen-audio-3.0-tts-flash" | "qwen-audio-3.0-tts-plus";
        /**
         * An alphanumeric voice-name prefix of at most ten characters.
         * @minLength 1
         * @maxLength 10
         * @pattern ^[A-Za-z0-9]+$
         */
        prefix: string;
        /**
         * A publicly accessible reference audio URL.
         * @minLength 1
         */
        audioUrl: string;
        /**
         * The sample audio language hint; the API currently uses only the first value.
         * @minItems 1
         * @maxItems 1
         */
        languageHints?: Array<"zh" | "en" | "fr" | "de" | "ja" | "ko" | "ru" | "pt" | "th" | "id" | "vi" | "it" | "es" | "ms" | "fil" | "ar">;
        /**
         * The maximum reference audio duration used, in seconds.
         * @minimum 3
         * @maximum 30
         */
        maxPromptAudioLength?: number;
        /** Whether to denoise and enhance the reference audio. */
        enablePreprocess?: boolean;
        /** Whether to normalize reference audio volume. */
        enableVolumeNormalization?: boolean;
      };
      output: {
        /**
         * The created voice identifier accepted by generate_speech.
         * @minLength 1
         */
        voiceId: string;
      };
    };
    /** Delete one Qwen-Audio cloned or designed voice. */
    "qwen.delete_custom_voice": {
      input: {
        /**
         * The custom voice identifier to delete.
         * @minLength 1
         */
        voiceId: string;
      };
      output: {
        /**
         * The deleted custom voice identifier.
         * @minLength 1
         */
        voiceId: string;
      };
    };
    /** Extract text and structured information from an image with Qwen3.5-OCR. */
    "qwen.extract_text": {
      input: {
        /**
         * A publicly accessible image URL.
         * @format uri
         */
        fileUrl: string;
        /**
         * The OCR task to perform.
         * @default "text_recognition"
         */
        task?: "text_recognition" | "advanced_recognition" | "key_information_extraction" | "table_parsing" | "document_parsing" | "formula_recognition" | "multi_lan";
        /** Fields to extract for key_information_extraction, keyed by field name with descriptions or nested field definitions. */
        resultSchema?: Record<string, unknown>;
        /**
         * Whether to automatically correct image rotation.
         * @default false
         */
        enableRotate?: boolean;
        /**
         * The minimum number of image pixels used for model input.
         * @minimum 1
         */
        minPixels?: number;
        /**
         * The maximum number of image pixels used for model input.
         * @minimum 1
         */
        maxPixels?: number;
      };
      output: {
        /** The extracted text or formatted OCR output. */
        content: string;
        /** Task-specific structured OCR details when returned by Qwen. */
        details?: Record<string, unknown>;
        /**
         * The Qwen OCR model used for extraction.
         * @minLength 1
         */
        model: string;
        /**
         * The number of input tokens billed by Qwen.
         * @minimum 0
         */
        inputTokens: number;
        /**
         * The number of output tokens billed by Qwen.
         * @minimum 0
         */
        outputTokens: number;
        /**
         * The number of image input tokens billed by Qwen.
         * @minimum 0
         */
        imageTokens: number;
      };
    };
    /** Generate or edit images with the Qwen Image 3.0 family. */
    "qwen.generate_image": {
      input: {
        /**
         * The Qwen Image 3.0 model.
         * @default "qwen-image-3.0"
         */
        model?: "qwen-image-3.0" | "qwen-image-3.0-pro";
        /**
         * The image generation or editing prompt.
         * @minLength 1
         */
        prompt: string;
        /**
         * Reference image URLs or data URLs. Omit for text-to-image generation.
         * @maxItems 3
         */
        images?: Array<string>;
        /**
         * The optional output dimensions as WIDTH*HEIGHT. Omit for model-selected dimensions.
         * @minLength 1
         */
        size?: string;
        /**
         * The number of images to generate.
         * @minimum 1
         * @maximum 6
         * @default 1
         */
        imageCount?: number;
        /** Content that should not appear in the generated images. */
        negativePrompt?: string;
        /**
         * Whether Qwen should enhance the prompt.
         * @default true
         */
        promptExtend?: boolean;
        /**
         * The prompt enhancement mode.
         * @default "direct"
         */
        promptExtendMode?: "direct" | "agent";
        /**
         * Whether to use reasoning during image generation.
         * @default true
         */
        enableThinking?: boolean;
        /**
         * Whether generated images include a watermark.
         * @default false
         */
        watermark?: boolean;
        /**
         * The random seed.
         * @minimum 0
         * @maximum 2147483647
         */
        seed?: number;
      };
      output: {
        /** The generated temporary image URLs. */
        images: Array<string>;
        /**
         * The number of generated images.
         * @minimum 0
         */
        imageCount: number;
        /**
         * The output image width in pixels.
         * @minimum 0
         */
        width?: number;
        /**
         * The output image height in pixels.
         * @minimum 0
         */
        height?: number;
        /**
         * The number of input images billed by Qwen.
         * @minimum 0
         */
        inputImageCount: number;
      };
    };
    /** Generate speech with Qwen-Audio 3.0 TTS. */
    "qwen.generate_speech": {
      input: {
        /**
         * The Qwen-Audio 3.0 TTS model.
         * @default "qwen-audio-3.0-tts-flash"
         */
        model?: "qwen-audio-3.0-tts-flash" | "qwen-audio-3.0-tts-plus";
        /**
         * The text to synthesize.
         * @minLength 1
         */
        text: string;
        /**
         * A system, cloned, or designed Qwen-Audio voice name.
         * @minLength 1
         * @default "longanhuan_v3.6"
         */
        voice?: string;
        /**
         * The generated audio encoding.
         * @default "mp3"
         */
        format?: "mp3" | "pcm" | "wav" | "opus";
        /**
         * The audio sample rate in hertz.
         * @default 22050
         */
        sampleRate?: 8000 | 16000 | 22050 | 24000 | 44100 | 48000;
        /**
         * The output volume from 0 to 100.
         * @minimum 0
         * @maximum 100
         */
        volume?: number;
        /**
         * The speech rate from 0.5 to 2.0.
         * @minimum 0.5
         * @maximum 2
         */
        rate?: number;
        /**
         * The pitch multiplier from 0.5 to 2.0.
         * @minimum 0.5
         * @maximum 2
         */
        pitch?: number;
        /**
         * A natural-language instruction for dialect, emotion, pace, or role.
         * @minLength 1
         */
        instruction?: string;
        /**
         * The target language hint; the API currently uses only the first value.
         * @minItems 1
         * @maxItems 1
         */
        languageHints?: Array<"zh" | "en" | "fr" | "de" | "ja" | "ko" | "ru" | "pt" | "th" | "id" | "vi" | "es" | "it" | "ms" | "fil" | "ar">;
        /** Whether text contains supported SSML markup. */
        enableSsml?: boolean;
        /**
         * The deterministic synthesis seed.
         * @minimum 0
         * @maximum 65535
         */
        seed?: number;
        /**
         * The Opus bit rate in kbps; only valid when format is opus.
         * @minimum 6
         * @maximum 510
         */
        bitRate?: number;
        /** Whether to embed an AIGC provenance tag in the generated audio. */
        enableAigcTag?: boolean;
      };
      output: {
        /**
         * The temporary generated audio URL.
         * @minLength 1
         */
        audioUrl: string;
        /**
         * The Unix timestamp when the audio URL expires.
         * @minimum 0
         */
        expiresAt?: number;
      };
    };
    /** Get one Qwen-Audio cloned or designed voice. */
    "qwen.get_custom_voice": {
      input: {
        /**
         * The custom voice identifier.
         * @minLength 1
         */
        voiceId: string;
      };
      output: {
        /**
         * The custom voice identifier accepted by generate_speech.
         * @minLength 1
         */
        voiceId: string;
        /** The Qwen-Audio 3.0 TTS model bound to the voice. */
        targetModel?: "qwen-audio-3.0-tts-flash" | "qwen-audio-3.0-tts-plus";
        /** The upstream voice status. */
        status?: string;
        /** The upstream voice creation time. */
        createdAt?: string;
        /** The upstream voice modification time. */
        modifiedAt?: string;
        /** The voice description used for a designed voice. */
        voicePrompt?: string;
        /** The preview text used for a designed voice. */
        previewText?: string;
        /**
         * The upstream reference or preview audio URL.
         * @minLength 1
         */
        resourceUrl?: string;
      };
    };
    /** Retrieve a Qwen image translation task state and output. */
    "qwen.get_image_translation": {
      input: {
        /**
         * The opaque Qwen image translation task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * The opaque Qwen image translation task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The task is queued or running. */
        state: "processing";
        /**
         * The task progress percentage when available.
         * @minimum 0
         * @maximum 100
         */
        progress?: number;
      } | {
        /**
         * The opaque Qwen image translation task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The task succeeded. */
        state: "succeeded";
        /**
         * The temporary translated image URL.
         * @minLength 1
         */
        imageUrl: string;
      } | {
        /**
         * The opaque Qwen image translation task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The terminal task state. */
        state: "failed" | "cancelled" | "expired";
        /** The upstream terminal error. */
        error?: {
          /** The upstream error code. */
          code?: string;
          /** The upstream error message. */
          message?: string;
        };
      };
    };
    /** Retrieve a Qwen-Audio 3.0 transcription task and its normalized result. */
    "qwen.get_speech_recognition": {
      input: {
        /**
         * The opaque Qwen speech recognition task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * The opaque Qwen speech recognition task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The task is queued or running. */
        state: "processing";
        /**
         * The task progress percentage when available.
         * @minimum 0
         * @maximum 100
         */
        progress?: number;
      } | {
        /**
         * The opaque Qwen speech recognition task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The task succeeded. */
        state: "succeeded";
        /**
         * The temporary URL of the original transcription JSON.
         * @minLength 1
         */
        transcriptionUrl: string;
        /**
         * The transcribed file URL.
         * @minLength 1
         */
        fileUrl: string;
        /**
         * The billable speech duration in seconds.
         * @minimum 0
         */
        duration: number;
        /** Normalized per-channel transcriptions. */
        transcripts: Array<{
          /**
           * The zero-based audio channel index.
           * @minimum 0
           */
          channelId: number;
          /** The complete recognized text for the channel. */
          text: string;
          /**
           * The detected speech duration in milliseconds.
           * @minimum 0
           */
          contentDuration: number;
          /** Recognized sentences for the channel. */
          sentences: Array<{
            /** The recognized sentence text. */
            text: string;
            /**
             * The sentence start time in milliseconds.
             * @minimum 0
             */
            beginTime: number;
            /**
             * The sentence end time in milliseconds.
             * @minimum 0
             */
            endTime: number;
            /**
             * The sentence index.
             * @minimum 0
             */
            sentenceId: number;
            /**
             * The detected speaker index when diarization is enabled.
             * @minimum 0
             */
            speakerId?: number;
            /** The detected language code. */
            language?: string;
            /** The detected emotion. */
            emotion?: string;
            /** Recognized words in the sentence. */
            words?: Array<{
              /** The recognized word text. */
              text: string;
              /**
               * The word start time in milliseconds.
               * @minimum 0
               */
              beginTime: number;
              /**
               * The word end time in milliseconds.
               * @minimum 0
               */
              endTime: number;
              /** The punctuation following the word. */
              punctuation: string;
            }>;
          }>;
        }>;
      } | {
        /**
         * The opaque Qwen speech recognition task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The terminal task state. */
        state: "failed" | "cancelled" | "expired";
        /** The upstream terminal error. */
        error?: {
          /** The upstream error code. */
          code?: string;
          /** The upstream error message. */
          message?: string;
        };
      };
    };
    /** List Qwen-Audio cloned and designed voices together. */
    "qwen.list_custom_voices": {
      input: {
        /**
         * An optional voice-name prefix filter.
         * @minLength 1
         * @maxLength 10
         */
        prefix?: string;
        /**
         * The zero-based page index.
         * @minimum 0
         * @default 0
         */
        pageIndex?: number;
        /**
         * The number of voices requested per page.
         * @minimum 1
         * @default 10
         */
        pageSize?: number;
      };
      output: {
        /** The custom voices on this page. */
        voices: Array<{
          /**
           * The custom voice identifier accepted by generate_speech.
           * @minLength 1
           */
          voiceId: string;
          /** The Qwen-Audio 3.0 TTS model bound to the voice. */
          targetModel?: "qwen-audio-3.0-tts-flash" | "qwen-audio-3.0-tts-plus";
          /** The upstream voice status. */
          status?: string;
          /** The upstream voice creation time. */
          createdAt?: string;
          /** The upstream voice modification time. */
          modifiedAt?: string;
          /** The voice description used for a designed voice. */
          voicePrompt?: string;
          /** The preview text used for a designed voice. */
          previewText?: string;
        }>;
        /**
         * The zero-based page index.
         * @minimum 0
         */
        pageIndex: number;
        /**
         * The requested page size.
         * @minimum 1
         */
        pageSize: number;
        /**
         * The total number of matching voices.
         * @minimum 0
         */
        totalCount: number;
      };
    };
    /** Submit an asynchronous Qwen image translation task. */
    "qwen.submit_image_translation": {
      input: {
        /**
         * A public URL for the image to translate.
         * @minLength 1
         */
        imageUrl: string;
        /**
         * The source language, or auto for detection.
         * @default "auto"
         */
        sourceLanguage?: "auto" | "zh" | "en" | "ko" | "ja" | "ru" | "es" | "fr" | "pt" | "it" | "de" | "vi";
        /** The target language. */
        targetLanguage: "zh" | "en" | "ko" | "ja" | "ru" | "es" | "fr" | "pt" | "it" | "vi" | "ms" | "th" | "id" | "ar";
        /**
         * An English domain hint describing the desired translation style.
         * @maxLength 2000
         */
        domainHint?: string;
        /**
         * Exact text values that should not be translated.
         * @maxItems 50
         */
        sensitivities?: Array<string>;
        /**
         * Required terminology translations.
         * @maxItems 50
         */
        terminologies?: Array<{
          /** The source term. */
          source: string;
          /** The required target term. */
          target: string;
        }>;
        /** Whether to translate all text without foreground segmentation. */
        skipImageSegmentation?: boolean;
      };
      output: {
        /**
         * The opaque Qwen image translation task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Submit a Qwen-Audio 3.0 asynchronous audio or video transcription task. */
    "qwen.submit_speech_recognition": {
      input: {
        /**
         * A public HTTP or HTTPS URL for the audio or video file.
         * @minLength 1
         */
        fileUrl: string;
        /**
         * Possible language codes. Omit to let Qwen detect the language.
         * @maxItems 4
         */
        languageHints?: Array<string>;
        /**
         * Zero-based audio channel indexes to transcribe. Each channel is billed separately.
         * @minItems 1
         * @default [0]
         */
        channelIds?: Array<number>;
        /**
         * A precompiled Qwen vocabulary identifier.
         * @minLength 1
         */
        vocabularyId?: string;
        /**
         * Request-specific hotwords and their recognition weights.
         * @maxItems 2000
         */
        vocabulary?: Array<{
          /**
           * The hotword text.
           * @minLength 1
           */
          text: string;
          /** The hotword weight from 1 to 5, or 50 for a super hotword. */
          weight: number;
        }>;
        /**
         * Prior conversation turns or domain context used to improve recognition.
         * @maxItems 5
         */
        context?: Array<{
          /**
           * Prior user speech text or domain vocabulary.
           * @minLength 1
           */
          userText: string;
          /**
           * The corresponding prior assistant response.
           * @minLength 1
           */
          assistantText: string;
        }>;
        /**
         * The Qwen special-word filtering configuration string.
         * @minLength 1
         */
        specialWordFilter?: string;
        /**
         * Whether to separate speakers in single-channel audio.
         * @default false
         */
        diarizationEnabled?: boolean;
        /**
         * The expected speaker count when diarization is enabled.
         * @minimum 2
         * @maximum 100
         */
        speakerCount?: number;
      };
      output: {
        /**
         * The opaque Qwen speech recognition task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Translate text with Qwen-MT and optional terminology, translation memory, and domain guidance. */
    "qwen.translate_text": {
      input: {
        /**
         * The Qwen-MT translation model.
         * @default "qwen-mt-flash"
         */
        model?: "qwen-mt-flash" | "qwen-mt-plus";
        /**
         * The text to translate.
         * @minLength 1
         */
        text: string;
        /**
         * The source language name or code, or auto for automatic detection.
         * @minLength 1
         * @default "auto"
         */
        sourceLanguage?: string;
        /**
         * The target language name or code.
         * @minLength 1
         */
        targetLanguage: string;
        /** Required translations for terms appearing in the source text. */
        terms?: Array<{
          /**
           * The source term or sentence.
           * @minLength 1
           */
          source: string;
          /**
           * The required or preferred translation.
           * @minLength 1
           */
          target: string;
        }>;
        /** Previously translated sentence pairs whose style and phrasing should be followed. */
        translationMemory?: Array<{
          /**
           * The source term or sentence.
           * @minLength 1
           */
          source: string;
          /**
           * The required or preferred translation.
           * @minLength 1
           */
          target: string;
        }>;
        /**
         * English guidance describing the translation domain and preferred style.
         * @minLength 1
         */
        domainPrompt?: string;
      };
      output: {
        /** The translated text. */
        text: string;
        /**
         * The Qwen-MT model reported by Qwen.
         * @minLength 1
         */
        model: string;
        /**
         * The number of input tokens billed by Qwen.
         * @minimum 0
         */
        inputTokens: number;
        /**
         * The number of output tokens billed by Qwen.
         * @minimum 0
         */
        outputTokens: number;
      };
    };
  }
}
