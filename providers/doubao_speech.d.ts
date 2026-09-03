import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a Doubao recording-file speech recognition task state and output. */
    "doubao_speech.get_stt": {
      input: {
        /**
         * The opaque Doubao Speech task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * The opaque Doubao Speech task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The task is queued or processing. */
        state: "processing";
        /**
         * The task progress percentage when available.
         * @minimum 0
         * @maximum 100
         */
        progress?: number;
      } | {
        /**
         * The opaque Doubao Speech task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The task succeeded. */
        state: "succeeded";
        /** The complete recognized text. */
        text: string;
        /** Recognized speech segments. */
        utterances?: Array<{
          /** The recognized segment text. */
          text: string;
          /**
           * The segment start time in milliseconds.
           * @minimum 0
           */
          startTime: number;
          /**
           * The segment end time in milliseconds.
           * @minimum 0
           */
          endTime: number;
        }>;
        /**
         * The source audio duration in milliseconds.
         * @minimum 0
         */
        duration?: number;
      };
    };
    /** Retrieve a Doubao Speech 2.0 text-to-speech task state and output. */
    "doubao_speech.get_tts": {
      input: {
        /**
         * The opaque Doubao Speech task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * The opaque Doubao Speech task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The task is processing. */
        state: "processing";
        /**
         * The task progress percentage when available.
         * @minimum 0
         * @maximum 100
         */
        progress?: number;
      } | {
        /**
         * The opaque Doubao Speech task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The task succeeded. */
        state: "succeeded";
        /**
         * The temporary synthesized audio URL.
         * @minLength 1
         */
        audioUrl: string;
        /** The Unix timestamp when the audio URL expires. */
        urlExpiresAt?: number;
        /**
         * The requested text length reported by Doubao Speech.
         * @minimum 0
         */
        requestedTextLength?: number;
        /**
         * The synthesized text length reported by Doubao Speech.
         * @minimum 0
         */
        synthesizedTextLength?: number;
      };
    };
    /** Submit an asynchronous Doubao recording-file speech recognition task. */
    "doubao_speech.submit_stt": {
      input: {
        /**
         * A public URL for the audio file to recognize.
         * @minLength 1
         */
        audioUrl: string;
        /** The audio container format. */
        format: "raw" | "wav" | "mp3" | "ogg";
        /** The recognition language code, such as zh-CN or en-US. */
        language?: string;
        /**
         * Whether to return speaker clustering information.
         * @default false
         */
        enableSpeakerInfo?: boolean;
      };
      output: {
        /**
         * The opaque Doubao Speech task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Submit an asynchronous Doubao Speech 2.0 text-to-speech task. */
    "doubao_speech.submit_tts": {
      input: {
        /**
         * The text to synthesize.
         * @minLength 1
         * @maxLength 100000
         */
        text: string;
        /**
         * The Doubao Speech speaker ID.
         * @minLength 1
         */
        voice: string;
        /**
         * The synthesized audio format.
         * @default "mp3"
         */
        format?: "mp3" | "wav" | "pcm" | "ogg_opus";
      };
      output: {
        /**
         * The opaque Doubao Speech task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
      };
    };
  }
}
