import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Convert text to speech and return the generated audio URL and usage details. */
    "voicemaker.generate_tts": {
      input: {
        /**
         * The Voicemaker voice identifier used for synthesis.
         * @minLength 1
         */
        VoiceId: string;
        /**
         * The language code used for synthesis.
         * @minLength 1
         */
        LanguageCode?: string;
        /**
         * The text or SSML content to synthesize.
         * @minLength 1
         */
        Text: string;
        /**
         * The generated audio format accepted by Voicemaker.
         * @minLength 1
         */
        OutputFormat?: string;
        /**
         * The requested audio sample rate in hertz.
         * @minLength 1
         */
        SampleRate?: string;
        /**
         * The master volume adjustment accepted by Voicemaker.
         * @minLength 1
         */
        MasterVolume?: string;
        /**
         * The master speed adjustment accepted by Voicemaker.
         * @minLength 1
         */
        MasterSpeed?: string;
        /**
         * The master pitch adjustment accepted by Voicemaker.
         * @minLength 1
         */
        MasterPitch?: string;
      };
      output: {
        /**
         * The URL of the generated audio file.
         * @format uri
         */
        audioUrl: string;
        /** The number of characters consumed by this request. */
        usedChars: number;
        /** The remaining account character balance. */
        remainingChars: number;
        /** The remaining character balance for this API key. */
        remainingKeyChars: number;
      };
    };
    /** List Voicemaker text-to-speech voices, optionally filtered by language. */
    "voicemaker.list_voices": {
      input: {
        /**
         * The language code used to filter available voices.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** The voices matching the requested language. */
        voices: Array<{
          /** The synthesis engine used by the voice. */
          Engine: string;
          /** The identifier used to synthesize speech with this voice. */
          VoiceId: string;
          /** The gender label assigned to the voice. */
          VoiceGender: string;
          /** The display name of the voice. */
          VoiceWebname: string;
          /** The country code associated with the voice. */
          Country: string;
          /** The language code supported by the voice. */
          Language: string;
          /** The display name of the voice language. */
          LanguageName: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
