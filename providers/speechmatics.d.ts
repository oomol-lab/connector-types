import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Query the Speechmatics Discovery API for current Batch transcription, translation, language identification, and language metadata capabilities. */
    "speechmatics.get_service_capabilities": {
      input: {
        /** The Batch SaaS region whose Discovery API should be queried. Defaults to eu1. */
        region?: "eu1" | "eu2" | "us1" | "us2" | "au1";
      };
      output: {
        /** The queried Speechmatics Batch SaaS region. */
        region: "eu1" | "eu2" | "us1" | "us2" | "au1";
        /**
         * The Discovery API endpoint that was queried.
         * @format uri
         */
        endpoint: string;
        /** The Speechmatics Discovery API capability document. */
        capabilities: {
          /** Language metadata returned by Speechmatics. */
          metadata?: {
            /** Language pack metadata keyed by Speechmatics language code. */
            language_pack_info?: Record<string, Record<string, unknown>>;
            [key: string]: unknown;
          };
          /** Capabilities exposed by the Speechmatics Batch API. */
          batch?: {
            /** Batch transcription capabilities. */
            transcription?: Array<{
              /** The capability version. */
              version?: string;
              /** Supported transcription language codes. */
              languages?: Array<string>;
              /** A map from a language or capability name to its supported values. */
              locales?: Record<string, Array<string>>;
              /** A map from a language or capability name to its supported values. */
              domains?: Record<string, Array<string>>;
              /** A map from a language or capability name to its supported values. */
              domains_availability?: Record<string, Array<string>>;
              [key: string]: unknown;
            }>;
            /** Batch translation capabilities. */
            translation?: Array<{
              /** The capability version. */
              version?: string;
              /** A map from a language or capability name to its supported values. */
              languages?: Record<string, Array<string>>;
              [key: string]: unknown;
            }>;
            /** Batch language identification capabilities. */
            languageid?: {
              /** Languages supported by language identification. */
              languages?: Array<string>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a completed Speechmatics transcript as JSON, plain text, or SRT subtitles. */
    "speechmatics.get_transcript": {
      input: {
        /** The completed transcription job identifier. */
        jobId: string;
        /** The same Batch SaaS region used to submit the job. Defaults to the connection region, then eu1. */
        region?: "eu1" | "eu2" | "us1" | "us2" | "au1";
        /** The requested transcript format. Defaults to json-v2. */
        format?: "json-v2" | "txt" | "srt";
      };
      output: {
        /** The transcript format. */
        format: "json-v2" | "txt" | "srt";
        /** The JSON transcript document or text transcript. */
        transcript: Record<string, unknown> | string;
      };
    };
    /** Get the current status, metadata, and errors for a Speechmatics Batch job. */
    "speechmatics.get_transcription_job": {
      input: {
        /** The transcription job identifier. */
        jobId: string;
        /** The same Batch SaaS region used to submit the job. Defaults to the connection region, then eu1. */
        region?: "eu1" | "eu2" | "us1" | "us2" | "au1";
      };
      output: {
        /** A Speechmatics Batch transcription job. */
        job: {
          /** The transcription job identifier. */
          id: string;
          /** The current transcription job status. */
          status: "running" | "done" | "rejected" | "deleted" | "expired";
          /**
           * When the job was created.
           * @format date-time
           */
          created_at?: string;
          /** The submitted media name. */
          data_name?: string;
          /**
           * The media duration in seconds.
           * @minimum 0
           */
          duration?: number;
          /** Errors reported while processing the job. */
          errors?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List the Speechmatics Batch and Realtime SaaS production deployments documented for general and enterprise customers. */
    "speechmatics.list_deployments": {
      input: {
        /** Only return deployments for this processing mode. */
        mode?: "batch" | "realtime";
      };
      output: {
        /** Speechmatics cloud API deployments. */
        deployments: Array<{
          /** The processing mode served by this deployment. */
          mode: "batch" | "realtime";
          /** The region or global routing mode. */
          region: "eu1" | "eu2" | "us1" | "us2" | "au1" | "global";
          /** The geographic location or routing behavior. */
          location: string;
          /** Which customers can use the deployment. */
          customerType: "all" | "enterprise";
          /** The production API hostname. */
          endpoint: string;
          /** The protocol used to connect to the deployment. */
          protocol: "https" | "wss";
          /** The API version path used by the deployment. */
          apiVersion: string;
        }>;
      };
    };
    /** Submit media by URL to the Speechmatics Batch API and return a job ID for status polling and transcript retrieval. */
    "speechmatics.submit_transcription": {
      input: {
        /**
         * A publicly reachable or presigned media URL that Speechmatics should fetch.
         * @format uri
         */
        mediaUrl: string;
        /** The transcription language, normally an ISO language code or auto for language identification. */
        language: string;
        /** The Batch SaaS region. Defaults to the connection region, then eu1. */
        region?: "eu1" | "eu2" | "us1" | "us2" | "au1";
        /** The Speechmatics transcription model. */
        model?: "standard" | "enhanced" | "melia-1";
        /** A specialized transcription domain such as finance or medical. */
        domain?: string;
        /** The locale used to format transcription output. */
        outputLocale?: string;
        /** How speakers or channels should be labelled. */
        diarization?: "none" | "speaker" | "channel";
        /** Whether entity objects should be included in the transcript. */
        enableEntities?: boolean;
        /** Custom words or phrases that should be recognized. */
        additionalVocabulary?: Array<{
          /** The custom word or phrase. */
          content: string;
          /** Alternative pronunciations that can help Speechmatics recognize the content. */
          soundsLike?: Array<string>;
        }>;
        /** Headers Speechmatics should send when fetching the media URL. */
        mediaAuthHeaders?: Array<string>;
        /** Customer-defined metadata retained with the transcription job. */
        tracking?: {
          /** The job title. */
          title?: string;
          /** An external system reference. */
          reference?: string;
          /** Tags associated with the job. */
          tags?: Array<string>;
          /** Customer-defined JSON metadata. */
          details?: Record<string, unknown>;
        };
      };
      output: {
        /** The job identifier used for status and transcript requests. */
        id: string;
        [key: string]: unknown;
      };
    };
  }
}
