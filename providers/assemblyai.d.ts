import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an AssemblyAI transcript from an audio or video file URL. */
    "assemblyai.create_transcript": {
      input: {
        /**
         * The URL of the audio or video file to transcribe.
         * @minLength 1
         * @format uri
         */
        audioUrl: string;
        /** The AssemblyAI speech model to use for transcription. */
        speechModel?: "best" | "nano" | "slam-1" | "universal" | "universal-2" | "universal-1";
        /**
         * The language code of the audio file, such as en_us or es.
         * @minLength 1
         */
        languageCode?: string;
        /** Whether AssemblyAI should detect the spoken language. */
        languageDetection?: boolean;
        /** Whether AssemblyAI should add punctuation to the transcript. */
        punctuate?: boolean;
        /** Whether AssemblyAI should format text in the transcript. */
        formatText?: boolean;
        /** Whether AssemblyAI should identify speakers in the transcript. */
        speakerLabels?: boolean;
        /** The expected number of speakers in the audio. */
        speakersExpected?: number;
        /** Whether the audio has multiple channels to transcribe separately. */
        multichannel?: boolean;
        /** The millisecond timestamp where transcription should start. */
        audioStartFrom?: number;
        /** The millisecond timestamp where transcription should stop. */
        audioEndAt?: number;
        /** Whether AssemblyAI should filter profanity in the transcript. */
        filterProfanity?: boolean;
        /** Whether AssemblyAI should extract key phrases. */
        autoHighlights?: boolean;
        /** Whether AssemblyAI should run sentiment analysis. */
        sentimentAnalysis?: boolean;
        /** Whether AssemblyAI should detect named entities. */
        entityDetection?: boolean;
        /**
         * The webhook URL AssemblyAI should call when processing completes.
         * @format uri
         */
        webhookUrl?: string;
        /**
         * The webhook authentication header name.
         * @minLength 1
         */
        webhookAuthHeaderName?: string;
        /**
         * The webhook authentication header value.
         * @minLength 1
         */
        webhookAuthHeaderValue?: string;
      };
      output: {
        /** A transcript object returned by AssemblyAI. */
        transcript: {
          /** The unique identifier of the transcript. */
          id?: string | null;
          /** The current processing status of the transcript. */
          status?: "queued" | "processing" | "completed" | "error" | null;
          /** The completed transcript text. */
          text?: string | null;
          /** The URL of the media that was transcribed. */
          audio_url?: string | null;
          /** The error message returned when transcription failed. */
          error?: string | null;
          /** The confidence score for the transcript. */
          confidence?: number | null;
          /** The duration of the audio file in seconds. */
          audio_duration?: number | null;
          /** The detected or requested language code. */
          language_code?: string | null;
          /** The timestamp when the transcript was created. */
          created?: string | null;
          /** The timestamp when the transcript completed. */
          completed?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one AssemblyAI transcript by ID. */
    "assemblyai.delete_transcript": {
      input: {
        /**
         * The unique identifier of the AssemblyAI transcript.
         * @minLength 1
         * @pattern \S
         */
        transcriptId: string;
      };
      output: {
        /** A transcript object returned by AssemblyAI. */
        transcript: {
          /** The unique identifier of the transcript. */
          id?: string | null;
          /** The current processing status of the transcript. */
          status?: "queued" | "processing" | "completed" | "error" | null;
          /** The completed transcript text. */
          text?: string | null;
          /** The URL of the media that was transcribed. */
          audio_url?: string | null;
          /** The error message returned when transcription failed. */
          error?: string | null;
          /** The confidence score for the transcript. */
          confidence?: number | null;
          /** The duration of the audio file in seconds. */
          audio_duration?: number | null;
          /** The detected or requested language code. */
          language_code?: string | null;
          /** The timestamp when the transcript was created. */
          created?: string | null;
          /** The timestamp when the transcript completed. */
          completed?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get one AssemblyAI transcript by ID. */
    "assemblyai.get_transcript": {
      input: {
        /**
         * The unique identifier of the AssemblyAI transcript.
         * @minLength 1
         * @pattern \S
         */
        transcriptId: string;
      };
      output: {
        /** A transcript object returned by AssemblyAI. */
        transcript: {
          /** The unique identifier of the transcript. */
          id?: string | null;
          /** The current processing status of the transcript. */
          status?: "queued" | "processing" | "completed" | "error" | null;
          /** The completed transcript text. */
          text?: string | null;
          /** The URL of the media that was transcribed. */
          audio_url?: string | null;
          /** The error message returned when transcription failed. */
          error?: string | null;
          /** The confidence score for the transcript. */
          confidence?: number | null;
          /** The duration of the audio file in seconds. */
          audio_duration?: number | null;
          /** The detected or requested language code. */
          language_code?: string | null;
          /** The timestamp when the transcript was created. */
          created?: string | null;
          /** The timestamp when the transcript completed. */
          completed?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get an AssemblyAI transcript split into paragraphs. */
    "assemblyai.get_transcript_paragraphs": {
      input: {
        /**
         * The unique identifier of the AssemblyAI transcript.
         * @minLength 1
         * @pattern \S
         */
        transcriptId: string;
      };
      output: {
        /** The unique identifier of the transcript. */
        id: string | null;
        /** The confidence score for the transcript. */
        confidence: number | null;
        /** The duration of the audio file in seconds. */
        audioDuration: number | null;
        /** The transcript paragraphs returned by AssemblyAI. */
        paragraphs: Array<{
          /** The segment transcript text. */
          text?: string | null;
          /** The segment start time in milliseconds. */
          start?: number | null;
          /** The segment end time in milliseconds. */
          end?: number | null;
          /** The confidence score for the segment. */
          confidence?: number | null;
          /** The speaker label for the segment when speaker labels are enabled. */
          speaker?: string | null;
          /** The word timing entries in the segment. */
          words?: Array<{
            /** The transcribed word text. */
            text?: string | null;
            /** The word start time in milliseconds. */
            start?: number | null;
            /** The word end time in milliseconds. */
            end?: number | null;
            /** The confidence score for the word. */
            confidence?: number | null;
            /** The speaker label for the word when speaker labels are enabled. */
            speaker?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The raw AssemblyAI response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get an AssemblyAI transcript split into sentences. */
    "assemblyai.get_transcript_sentences": {
      input: {
        /**
         * The unique identifier of the AssemblyAI transcript.
         * @minLength 1
         * @pattern \S
         */
        transcriptId: string;
      };
      output: {
        /** The unique identifier of the transcript. */
        id: string | null;
        /** The confidence score for the transcript. */
        confidence: number | null;
        /** The duration of the audio file in seconds. */
        audioDuration: number | null;
        /** The transcript sentences returned by AssemblyAI. */
        sentences: Array<{
          /** The segment transcript text. */
          text?: string | null;
          /** The segment start time in milliseconds. */
          start?: number | null;
          /** The segment end time in milliseconds. */
          end?: number | null;
          /** The confidence score for the segment. */
          confidence?: number | null;
          /** The speaker label for the segment when speaker labels are enabled. */
          speaker?: string | null;
          /** The word timing entries in the segment. */
          words?: Array<{
            /** The transcribed word text. */
            text?: string | null;
            /** The word start time in milliseconds. */
            start?: number | null;
            /** The word end time in milliseconds. */
            end?: number | null;
            /** The confidence score for the word. */
            confidence?: number | null;
            /** The speaker label for the word when speaker labels are enabled. */
            speaker?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The raw AssemblyAI response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List AssemblyAI transcripts created by the current API key. */
    "assemblyai.list_transcripts": {
      input: {
        /**
         * The maximum number of transcripts to retrieve.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** The current processing status of the transcript. */
        status?: "queued" | "processing" | "completed" | "error";
        /**
         * Only return transcripts created on this date.
         * @format date
         */
        createdOn?: string;
        /**
         * Return transcripts created before this transcript ID.
         * @minLength 1
         */
        beforeId?: string;
        /**
         * Return transcripts created after this transcript ID.
         * @minLength 1
         */
        afterId?: string;
      };
      output: {
        /** The transcript records returned by AssemblyAI. */
        transcripts: Array<{
          /** The unique identifier of the transcript. */
          id?: string | null;
          /** The current processing status of the transcript. */
          status?: "queued" | "processing" | "completed" | "error" | null;
          /** The completed transcript text. */
          text?: string | null;
          /** The URL of the media that was transcribed. */
          audio_url?: string | null;
          /** The error message returned when transcription failed. */
          error?: string | null;
          /** The confidence score for the transcript. */
          confidence?: number | null;
          /** The duration of the audio file in seconds. */
          audio_duration?: number | null;
          /** The detected or requested language code. */
          language_code?: string | null;
          /** The timestamp when the transcript was created. */
          created?: string | null;
          /** The timestamp when the transcript completed. */
          completed?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination details returned by AssemblyAI. */
        pageDetails: {
          /** The maximum number of transcripts requested. */
          limit?: number | null;
          /** The number of transcripts returned on the current page. */
          result_count?: number | null;
          /** The URL for the current page. */
          current_url?: string | null;
          /** The URL for the previous page of older transcripts. */
          prev_url?: string | null;
          /** The URL for the next page of newer transcripts. */
          next_url?: string | null;
          [key: string]: unknown;
        };
        /** The raw AssemblyAI response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
