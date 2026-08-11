import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Transcribe an audio file into text in its original language using a GroqCloud Whisper model. Supply the audio inline as base64 or as a public URL that GroqCloud downloads. */
    "groqcloud.create_audio_transcription": {
      input: {
        /** The GroqCloud speech-to-text model identifier. */
        model: "whisper-large-v3" | "whisper-large-v3-turbo";
        /** The audio source. Provide url for GroqCloud to fetch the audio, or content_base64 to upload the bytes inline. */
        file: Record<string, unknown>;
        /** The ISO-639-1 code of the spoken language, such as en, which improves accuracy and latency. */
        language?: string;
        /** Optional context or style guidance for the transcript, limited to 224 tokens. */
        prompt?: string;
        /** The transcript format to return. This connector returns structured payloads, so the plain text format is not offered. */
        response_format?: "json" | "verbose_json";
        /**
         * The sampling temperature applied to the transcription.
         * @minimum 0
         * @maximum 1
         */
        temperature?: number;
        /**
         * The timestamp detail to include. Requires response_format to be verbose_json.
         * @minItems 1
         */
        timestamp_granularities?: Array<"word" | "segment">;
      };
      output: {
        /** The full transcript text. */
        text?: string;
        /** The detected or requested language of the audio. */
        language?: string;
        /** The audio duration in seconds. */
        duration?: number;
        /** The transcribed segments, returned for the verbose_json format. */
        segments?: Array<{
          /** The segment index. */
          id?: number;
          /** The seek offset of the segment. */
          seek?: number;
          /** The segment start time in seconds. */
          start?: number;
          /** The segment end time in seconds. */
          end?: number;
          /** The transcribed text for the segment. */
          text?: string;
          /** The token identifiers for the segment. */
          tokens?: Array<number>;
          /** The sampling temperature used for the segment. */
          temperature?: number;
          /** The average log probability of the segment. */
          avg_logprob?: number;
          /** The compression ratio of the segment. */
          compression_ratio?: number;
          /** The probability that the segment contains no speech. */
          no_speech_prob?: number;
          [key: string]: unknown;
        }>;
        /** The transcribed words, returned when word timestamp granularity is requested. */
        words?: Array<{
          /** The transcribed word. */
          word?: string;
          /** The word start time in seconds. */
          start?: number;
          /** The word end time in seconds. */
          end?: number;
          [key: string]: unknown;
        }>;
        /** Any JSON object. */
        x_groq?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Translate an audio file into English text using a GroqCloud Whisper model. Supply the audio inline as base64 or as a public URL that GroqCloud downloads. */
    "groqcloud.create_audio_translation": {
      input: {
        /** The GroqCloud speech-to-text model identifier. Only whisper-large-v3 supports translation. */
        model: "whisper-large-v3";
        /** The audio source. Provide url for GroqCloud to fetch the audio, or content_base64 to upload the bytes inline. */
        file: Record<string, unknown>;
        /** Optional context or style guidance for the transcript, limited to 224 tokens. */
        prompt?: string;
        /** The transcript format to return. This connector returns structured payloads, so the plain text format is not offered. */
        response_format?: "json" | "verbose_json";
        /**
         * The sampling temperature applied to the transcription.
         * @minimum 0
         * @maximum 1
         */
        temperature?: number;
      };
      output: {
        /** The full transcript text. */
        text?: string;
        /** The detected or requested language of the audio. */
        language?: string;
        /** The audio duration in seconds. */
        duration?: number;
        /** The transcribed segments, returned for the verbose_json format. */
        segments?: Array<{
          /** The segment index. */
          id?: number;
          /** The seek offset of the segment. */
          seek?: number;
          /** The segment start time in seconds. */
          start?: number;
          /** The segment end time in seconds. */
          end?: number;
          /** The transcribed text for the segment. */
          text?: string;
          /** The token identifiers for the segment. */
          tokens?: Array<number>;
          /** The sampling temperature used for the segment. */
          temperature?: number;
          /** The average log probability of the segment. */
          avg_logprob?: number;
          /** The compression ratio of the segment. */
          compression_ratio?: number;
          /** The probability that the segment contains no speech. */
          no_speech_prob?: number;
          [key: string]: unknown;
        }>;
        /** The transcribed words, returned when word timestamp granularity is requested. */
        words?: Array<{
          /** The transcribed word. */
          word?: string;
          /** The word start time in seconds. */
          start?: number;
          /** The word end time in seconds. */
          end?: number;
          [key: string]: unknown;
        }>;
        /** Any JSON object. */
        x_groq?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a non-streaming GroqCloud OpenAI-compatible chat completion. */
    "groqcloud.create_chat_completion": {
      input: {
        /** The GroqCloud model identifier to use. */
        model: string;
        /**
         * The ordered conversation history sent to the model.
         * @minItems 1
         */
        messages: Array<{
          /** The role of the message author. */
          role: "system" | "user" | "assistant" | "tool";
          /** The message content sent to the model. */
          content?: string | Array<Record<string, unknown>> | null;
          /** The optional participant name for the message. */
          name?: string;
          /** The identifier of the tool call that this tool message responds to. */
          tool_call_id?: string;
          /** Tool calls emitted by the assistant. */
          tool_calls?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /**
         * The frequency penalty applied to repeated tokens.
         * @minimum -2
         * @maximum 2
         */
        frequency_penalty?: number;
        /** Token bias adjustments keyed by token id. */
        logit_bias?: Record<string, unknown>;
        /** Whether to include token-level log probabilities. */
        logprobs?: boolean;
        /**
         * The maximum number of completion tokens to generate.
         * @minimum 1
         */
        max_completion_tokens?: number;
        /**
         * The deprecated maximum token field accepted by OpenAI-compatible clients.
         * @minimum 1
         */
        max_tokens?: number;
        /**
         * The number of chat completions to generate.
         * @minimum 1
         */
        n?: number;
        /** Whether the model may call tools in parallel. */
        parallel_tool_calls?: boolean;
        /**
         * The presence penalty applied to newly introduced tokens.
         * @minimum -2
         * @maximum 2
         */
        presence_penalty?: number;
        /** The response format request. */
        response_format?: {
          /** The requested response format type. */
          type?: "text" | "json_object" | "json_schema";
          /** The JSON Schema definition when type is json_schema. */
          json_schema?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A seed for deterministic sampling. */
        seed?: number;
        /** One or more sequences where generation should stop. */
        stop?: string | Array<string>;
        /**
         * The sampling temperature.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /** How the model should choose tools. */
        tool_choice?: "none" | "auto" | "required" | Record<string, unknown>;
        /** Tools available to the model. */
        tools?: Array<Record<string, unknown>>;
        /**
         * The number of top token log probabilities to include.
         * @minimum 0
         */
        top_logprobs?: number;
        /**
         * The nucleus sampling threshold.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /** An end-user identifier for monitoring or abuse detection. */
        user?: string;
        [key: string]: unknown;
      };
      output: {
        /** The chat completion identifier. */
        id: string;
        /** The object type returned by the API. */
        object: string;
        /** The Unix timestamp when the completion was created. */
        created: number;
        /** The model used to generate the completion. */
        model: string;
        /** The generated completion choices. */
        choices: Array<{
          /** The choice index. */
          index: number;
          /** The assistant message returned by the model. */
          message: {
            /** The role of the message author. */
            role: "system" | "user" | "assistant" | "tool";
            /** The message content sent to the model. */
            content?: string | Array<Record<string, unknown>> | null;
            /** The optional participant name for the message. */
            name?: string;
            /** The identifier of the tool call that this tool message responds to. */
            tool_call_id?: string;
            /** Tool calls emitted by the assistant. */
            tool_calls?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          };
          /** The reason generation finished for this choice. */
          finish_reason?: string | null;
          /** Token-level log probability details. */
          logprobs?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Token usage information. */
        usage?: {
          /** The number of prompt tokens consumed. */
          prompt_tokens?: number;
          /** The number of completion tokens generated. */
          completion_tokens?: number;
          /** The total number of tokens consumed. */
          total_tokens?: number;
          [key: string]: unknown;
        };
        /** The backend system fingerprint for the completion. */
        system_fingerprint?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch metadata for one GroqCloud model. */
    "groqcloud.get_model": {
      input: {
        /** The exact GroqCloud model identifier to retrieve. */
        model: string;
      };
      output: {
        /** The model identifier. */
        id: string;
        /** The object type returned by the API. */
        object: string;
        /** The Unix timestamp when the model was created. */
        created?: number;
        /** The organization that owns the model. */
        owned_by?: string;
        /** Whether the model is currently active. */
        active?: boolean;
        /** The model context window size. */
        context_window?: number;
        /** The maximum completion tokens supported by the model. */
        max_completion_tokens?: number;
        [key: string]: unknown;
      };
    };
    /** List the GroqCloud models available to the current API key. */
    "groqcloud.list_models": {
      input: Record<string, never>;
      output: {
        /** The top-level object type. */
        object: string;
        /** The list of available GroqCloud models. */
        data: Array<{
          /** The model identifier. */
          id: string;
          /** The object type returned by the API. */
          object: string;
          /** The Unix timestamp when the model was created. */
          created?: number;
          /** The organization that owns the model. */
          owned_by?: string;
          /** Whether the model is currently active. */
          active?: boolean;
          /** The model context window size. */
          context_window?: number;
          /** The maximum completion tokens supported by the model. */
          max_completion_tokens?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
