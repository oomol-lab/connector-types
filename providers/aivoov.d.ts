import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate base64 audio from one or more voice/text segments. */
    "aivoov.create_audio": {
      input: {
        /**
         * Voice/text segments to render into one audio payload.
         * @minItems 1
         */
        segments: Array<{
          /**
           * The AiVOOV voice identifier.
           * @minLength 1
           */
          voiceId: string;
          /**
           * The text to synthesize.
           * @minLength 1
           */
          text: string;
          /** The SSML pitch rate control for this segment. */
          pitchRate?: "default" | number;
          /** The SSML speaking rate control for this segment. */
          speakingRate?: "default" | number;
          /** The SSML volume control for this segment. */
          volume?: "default" | number;
        }>;
      };
      output: {
        /** Whether AiVOOV generated the audio successfully. */
        status: boolean;
        /** The status message returned by AiVOOV. */
        message: string;
        /** The Base64-encoded audio payload returned by AiVOOV. */
        audio: string;
        [key: string]: unknown;
      };
    };
    /** List available AiVOOV voices, optionally filtered by language code. */
    "aivoov.list_voices": {
      input: {
        /**
         * The language code used to filter voices.
         * @minLength 1
         */
        languageCode?: string;
      };
      output: Array<{
        /** The AiVOOV voice identifier. */
        voice_id: string;
        /** The voice display name. */
        name: string;
        /** The voice language code. */
        language: string;
        [key: string]: unknown;
      }>;
    };
  }
}
