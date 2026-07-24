import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete a Gladia pre-recorded transcription job and its associated data. */
    "gladia.delete_transcription": {
      input: {
        /**
         * The ID of the pre-recorded transcription job to delete.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The HTTP status code returned by Gladia. */
        statusCode: number;
        /** The deletion response message, when provided. */
        message?: string;
      };
    };
    /** Download the original audio file for a Gladia pre-recorded transcription and store it in connector transit storage. */
    "gladia.download_transcription_audio": {
      input: {
        /**
         * The ID of the pre-recorded transcription job.
         * @minLength 1
         */
        id: string;
        /**
         * Optional file name to use for the transit audio file.
         * @minLength 1
         */
        fileName?: string;
        /**
         * Optional MIME type override for the transit audio file.
         * @minLength 1
         */
        mimeType?: string;
      };
      output: {
        /** The Gladia pre-recorded transcription job ID. */
        id: string;
        /** The file name used for the transit upload. */
        name: string;
        /** The MIME type of the downloaded audio file. */
        mimeType: string;
        /** The downloaded audio size in bytes, when reported by Gladia. */
        sizeBytes: number | null;
        /** A temporary connector transit URL for downloading the original audio file. */
        transitUrl: string;
      };
    };
    /** Retrieve a Gladia pre-recorded transcription job by ID, including results when done. */
    "gladia.get_transcription": {
      input: {
        /**
         * The ID of the pre-recorded transcription job.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The transcription job returned by Gladia. */
        job: {
          /** The unique transcription job identifier. */
          id: string;
          /** The request identifier for debugging. */
          requestId?: string;
          /** The Gladia API version used for this job. */
          version?: number;
          /** The current transcription job status. */
          status: "queued" | "processing" | "done" | "error";
          /** The ISO timestamp when the job was created. */
          createdAt?: string;
          /** The ISO timestamp when the job completed or failed. */
          completedAt?: string;
          /** The Gladia job kind, usually pre-recorded. */
          kind?: string;
          /** The upstream error status code. */
          errorCode?: number;
          /** File metadata associated with this transcription job. */
          file?: {
            /** The Gladia file identifier. */
            id?: string;
            /** The original URI or source of the file. */
            source?: string;
            /** The original file name. */
            filename?: string;
            /** The audio duration in seconds. */
            audioDuration?: number;
            /** The number of audio channels. */
            numberOfChannels?: number;
          };
          /** The transcription result when the job is done. */
          result?: Record<string, unknown>;
          /** The request parameters used to create the job. */
          requestParams?: Record<string, unknown>;
          /** Custom metadata attached to the job. */
          customMetadata?: Record<string, unknown>;
          /** Debugging metadata returned by Gladia for the completed session. */
          postSessionMetadata?: Record<string, unknown>;
        };
      };
    };
    /** List Gladia pre-recorded transcription jobs with optional pagination, date, status, and metadata filters. */
    "gladia.list_transcriptions": {
      input: {
        /**
         * The maximum number of jobs to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The starting offset for pagination.
         * @minimum 0
         */
        offset?: number;
        /** Statuses to include in the result set. */
        status?: Array<"queued" | "processing" | "done" | "error">;
        /**
         * Filter jobs relevant to a specific date in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
        /**
         * Filter jobs after the specified ISO datetime.
         * @format date-time
         */
        afterDate?: string;
        /**
         * Filter jobs before the specified ISO datetime.
         * @format date-time
         */
        beforeDate?: string;
        /** Custom metadata filter to match jobs. */
        customMetadata?: Record<string, unknown>;
      };
      output: {
        /** The URL for the first result page. */
        first?: string;
        /** The URL for the current result page. */
        current?: string;
        /** The URL for the next result page. */
        next?: string | null;
        /** The returned transcription jobs. */
        items: Array<{
          /** The unique transcription job identifier. */
          id: string;
          /** The request identifier for debugging. */
          requestId?: string;
          /** The Gladia API version used for this job. */
          version?: number;
          /** The current transcription job status. */
          status: "queued" | "processing" | "done" | "error";
          /** The ISO timestamp when the job was created. */
          createdAt?: string;
          /** The ISO timestamp when the job completed or failed. */
          completedAt?: string;
          /** The Gladia job kind, usually pre-recorded. */
          kind?: string;
          /** The upstream error status code. */
          errorCode?: number;
          /** File metadata associated with this transcription job. */
          file?: {
            /** The Gladia file identifier. */
            id?: string;
            /** The original URI or source of the file. */
            source?: string;
            /** The original file name. */
            filename?: string;
            /** The audio duration in seconds. */
            audioDuration?: number;
            /** The number of audio channels. */
            numberOfChannels?: number;
          };
          /** The transcription result when the job is done. */
          result?: Record<string, unknown>;
          /** The request parameters used to create the job. */
          requestParams?: Record<string, unknown>;
          /** Custom metadata attached to the job. */
          customMetadata?: Record<string, unknown>;
          /** Debugging metadata returned by Gladia for the completed session. */
          postSessionMetadata?: Record<string, unknown>;
        }>;
      };
    };
    /** Start an asynchronous Gladia pre-recorded transcription job from a public audio or video URL. */
    "gladia.start_transcription": {
      input: {
        /**
         * The URL to an audio or video file. This can be a public URL or a Gladia file URL from the upload endpoint.
         * @format uri
         */
        audioUrl: string;
        /** The transcription model. solaria-1 is the default; solaria-2 may require a higher tier plan. */
        model?: "solaria-1" | "solaria-2";
        /** Whether to enable sentence segmentation. */
        sentences?: boolean;
        /** Whether to enable subtitle generation. */
        subtitles?: boolean;
        /** Whether to identify speakers in the audio. */
        diarization?: boolean;
        /** Whether to enable transcription translation. */
        translation?: boolean;
        /** Whether to enable transcription summarization. */
        summarization?: boolean;
        /** Whether to enable enhanced punctuation and casing. */
        punctuationEnhanced?: boolean;
        /** Whether Gladia should send a callback. Defaults to true when callbackConfig is provided. */
        callback?: boolean;
        /** Webhook callback configuration for this transcription job. */
        callbackConfig?: {
          /**
           * The URL endpoint that receives the transcription callback.
           * @format uri
           */
          url: string;
          /** The HTTP method Gladia uses for the callback request. */
          method?: "POST" | "PUT";
        };
        /** Enable custom vocabulary, or provide the official custom_vocabulary_config payload. */
        customVocabulary?: boolean | Array<string> | Record<string, unknown>;
        /** Enable custom spelling, or provide the official custom_spelling_config payload. */
        customSpelling?: boolean | Array<string> | Record<string, unknown>;
        /** Enable moderation, or provide the official moderation_config payload. */
        moderation?: boolean | Array<string> | Record<string, unknown>;
        /** Whether to enable named entity recognition. */
        namedEntityRecognition?: boolean;
        /** Whether to enable chapterization. */
        chapterization?: boolean;
        /** Whether to improve speaker name consistency. */
        nameConsistency?: boolean;
        /** Enable structured data extraction, or provide the official structured_data_extraction_config payload. */
        structuredDataExtraction?: boolean | Array<string> | Record<string, unknown>;
        /** Whether to enable sentiment analysis. */
        sentimentAnalysis?: boolean;
        /** Enable audio-to-LLM processing, or provide the official audio_to_llm_config. */
        audioToLlm?: boolean | Array<string> | Record<string, unknown>;
        /**
         * The Gladia display_mode value for transcript formatting.
         * @minLength 1
         */
        displayMode?: string;
        /** Enable PII redaction, or provide the official pii_redaction_config payload. */
        piiRedaction?: boolean | Array<string> | Record<string, unknown>;
        /** Arbitrary metadata to attach to the job for tracking and organization. */
        customMetadata?: Record<string, unknown>;
        /** Preferred language handling for this transcription request. */
        languageConfig?: {
          /** Preferred language codes for recognition. */
          languages: Array<string>;
          /** Whether multilingual code switching is enabled. */
          codeSwitching: boolean;
        };
        /** Subtitle generation configuration for this transcription request. */
        subtitlesConfig?: {
          /** The subtitle styling option. */
          style?: string;
          /** The subtitle formats Gladia should generate. */
          formats?: Array<string>;
          /** The maximum caption duration in seconds. */
          maximumDuration?: number;
          /** The minimum caption duration in seconds. */
          minimumDuration?: number;
          /** The maximum number of rows per subtitle caption. */
          maximumRowsPerCaption?: number;
          /** The maximum number of characters per subtitle row. */
          maximumCharactersPerRow?: number;
        };
        /** Speaker diarization configuration for this transcription request. */
        diarizationConfig?: {
          /** Whether enhanced speaker diarization is enabled. */
          enhanced?: boolean;
          /** The minimum number of speakers to detect. */
          minSpeakers?: number;
          /** The maximum number of speakers to detect. */
          maxSpeakers?: number;
          /** The estimated number of speakers to detect. */
          numberOfSpeakers?: number;
        };
        /** Translation configuration for this transcription job. */
        translationConfig?: {
          /** The translation model to use. */
          model?: string;
          /** Contextual prompt for the translation model. */
          context?: string;
          /** Target languages for translation. */
          targetLanguages?: Array<string>;
          /** Whether context adaptation is enabled for translation. */
          contextAdaptation?: boolean;
          /** Whether translated utterances should match the original segmentation. */
          matchOriginalUtterances?: boolean;
          /** Whether to use informal tone in translation. */
          informal?: boolean;
          /** Whether to include lipsync metadata for subtitles. */
          lipsync?: boolean;
        };
        /** Summarization configuration for this transcription job. */
        summarizationConfig?: {
          /** The summarization type, such as general. */
          type?: string;
        };
      };
      output: {
        /** The identifier of the created transcription job. */
        id: string;
        /** The URL to fetch the transcription result. */
        resultUrl: string;
      };
    };
    /** Upload an audio or video file up to 100 MiB from connector transit storage to Gladia. */
    "gladia.upload_file": {
      input: {
        /** A connector transit file to upload. */
        file: {
          /**
           * The source file name.
           * @minLength 1
           */
          name: string;
          /**
           * The MIME type of the source file.
           * @minLength 1
           */
          mimetype?: string;
          /**
           * The transit object key or transit URL.
           * @minLength 1
           */
          s3key?: string;
          /**
           * The transit URL for the file content.
           * @minLength 1
           */
          s3url?: string;
        };
        /**
         * Optional file name override for the uploaded Gladia file.
         * @minLength 1
         */
        fileName?: string;
        /**
         * Optional MIME type override for the uploaded Gladia file.
         * @minLength 1
         */
        mimeType?: string;
      };
      output: {
        /** The Gladia audio URL to pass to start_transcription. */
        audioUrl: string;
        /** The file metadata returned by Gladia for the uploaded media. */
        metadata: Record<string, unknown>;
      };
    };
  }
}
