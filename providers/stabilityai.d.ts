import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate audio from a text prompt with Stability AI and upload the generated file to connector transit storage. */
    "stabilityai.text_to_audio": {
      input: {
        /**
         * The text description used to generate audio.
         * @minLength 1
         * @maxLength 10000
         */
        prompt: string;
        /**
         * The requested duration of the generated audio in seconds.
         * @minimum 1
         * @maximum 190
         */
        duration?: number;
        /**
         * The randomness seed used for generation. Use 0 or omit it for a random seed.
         * @minimum 0
         * @maximum 4294967294
         */
        seed?: number;
        /** The number of sampling steps requested from Stability AI. */
        steps?: number;
        /**
         * How strongly the generation should follow the prompt text.
         * @minimum 1
         * @maximum 25
         */
        cfgScale?: number;
        /** The Stable Audio model to use for generation. */
        model?: "stable-audio-2" | "stable-audio-2.5";
        /** The output audio format returned by Stability AI. */
        outputFormat?: "mp3" | "wav";
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
        /** The Stable Audio model used for generation. */
        model: "stable-audio-2" | "stable-audio-2.5";
        /** The requested output format. */
        outputFormat: "mp3" | "wav";
        /** The MIME type returned by Stability AI. */
        contentType: string;
        /** The seed returned by Stability AI for this generation. */
        seed?: number;
        /** The completion reason returned by Stability AI. */
        finishReason?: string;
      };
    };
  }
}
