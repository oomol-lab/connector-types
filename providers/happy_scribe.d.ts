import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Confirm a previously created Happy Scribe order so processing can begin. */
    "happy_scribe.confirm_order": {
      input: {
        /**
         * The unique identifier of the Happy Scribe order.
         * @minLength 1
         * @pattern \S
         */
        orderId: string;
      };
      output: {
        /** Whether Happy Scribe accepted the order confirmation. */
        confirmed: boolean;
        /**
         * The unique identifier of the Happy Scribe order.
         * @minLength 1
         * @pattern \S
         */
        orderId: string;
      };
    };
    /** Create an asynchronous export for one or more Happy Scribe transcriptions. */
    "happy_scribe.create_export": {
      input: {
        /**
         * The transcription identifiers included in the export.
         * @minItems 1
         */
        transcriptionIds: Array<string>;
        /**
         * The export format, such as txt, srt, vtt, json, csv, or docx.
         * @minLength 1
         * @pattern \S
         */
        format: string;
        /** Whether to include timestamps in the export. */
        showTimestamps?: boolean;
        /** Whether to include speaker names in the export. */
        showSpeakers?: boolean;
        /** Whether to include comments in the export. */
        showComments?: boolean;
        /** Whether to include highlights in the export. */
        showHighlights?: boolean;
      };
      output: {
        /** A Happy Scribe export and its current state. */
        export: {
          /** The unique identifier of the export. */
          id?: string | null;
          /** The current processing state of the export. */
          state?: string | null;
          /** The requested export format. */
          format?: string | null;
          /** The temporary download URL when the export is ready. */
          download_link?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Submit a transcription or subtitling order from a public media URL. */
    "happy_scribe.create_transcription_order": {
      input: {
        /**
         * The public URL of the audio or video file to process.
         * @format uri
         */
        mediaUrl: string;
        /**
         * The spoken language code, such as en-US or es.
         * @minLength 1
         * @pattern \S
         */
        language: string;
        /** The transcription service level. */
        service: "auto" | "pro";
        /**
         * The Happy Scribe organization identifier.
         * @minimum 1
         */
        organizationId: number;
        /**
         * The display name for the order.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /**
         * The destination folder name.
         * @minLength 1
         * @pattern \S
         */
        folder?: string;
        /** Whether to submit the order for processing immediately. */
        confirm?: boolean;
        /** Whether the order should produce subtitles. */
        isSubtitle?: boolean;
        /**
         * The URL Happy Scribe should notify when processing changes.
         * @format uri
         */
        webhookUrl?: string;
        /** The tags to attach to the transcription. */
        tags?: Array<string>;
      };
      output: {
        /** A Happy Scribe order and its current processing state. */
        order: {
          /** The unique identifier of the order. */
          id?: string | null;
          /** The current processing state of the order. */
          state?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Submit a translation order for an existing Happy Scribe transcription. */
    "happy_scribe.create_translation_order": {
      input: {
        /**
         * The unique identifier of the Happy Scribe transcription.
         * @minLength 1
         * @pattern \S
         */
        sourceTranscriptionId: string;
        /**
         * The target language codes for the translation.
         * @minItems 1
         */
        targetLanguages: Array<string>;
        /** The translation service level. */
        service: "auto" | "pro";
        /** Whether to submit the order for processing immediately. */
        confirm?: boolean;
        /**
         * The URL Happy Scribe should notify when processing changes.
         * @format uri
         */
        webhookUrl?: string;
      };
      output: {
        /** A Happy Scribe order and its current processing state. */
        order: {
          /** The unique identifier of the order. */
          id?: string | null;
          /** The current processing state of the order. */
          state?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one Happy Scribe transcription by ID. */
    "happy_scribe.delete_transcription": {
      input: {
        /**
         * The unique identifier of the Happy Scribe transcription.
         * @minLength 1
         * @pattern \S
         */
        transcriptionId: string;
        /** Whether to delete irreversibly instead of moving the transcription to Trash. */
        permanent?: boolean;
      };
      output: {
        /** Whether Happy Scribe accepted the deletion. */
        deleted: boolean;
        /**
         * The unique identifier of the Happy Scribe transcription.
         * @minLength 1
         * @pattern \S
         */
        transcriptionId: string;
      };
    };
    /** Get the state and download link of a Happy Scribe export. */
    "happy_scribe.get_export": {
      input: {
        /**
         * The unique identifier of the Happy Scribe export.
         * @minLength 1
         * @pattern \S
         */
        exportId: string;
      };
      output: {
        /** A Happy Scribe export and its current state. */
        export: {
          /** The unique identifier of the export. */
          id?: string | null;
          /** The current processing state of the export. */
          state?: string | null;
          /** The requested export format. */
          format?: string | null;
          /** The temporary download URL when the export is ready. */
          download_link?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get the current state and details of a Happy Scribe order. */
    "happy_scribe.get_order": {
      input: {
        /**
         * The unique identifier of the Happy Scribe order.
         * @minLength 1
         * @pattern \S
         */
        orderId: string;
      };
      output: {
        /** A Happy Scribe order and its current processing state. */
        order: {
          /** The unique identifier of the order. */
          id?: string | null;
          /** The current processing state of the order. */
          state?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Happy Scribe transcription by ID. */
    "happy_scribe.get_transcription": {
      input: {
        /**
         * The unique identifier of the Happy Scribe transcription.
         * @minLength 1
         * @pattern \S
         */
        transcriptionId: string;
      };
      output: {
        /** A Happy Scribe transcription record. */
        transcription: {
          /** The unique identifier of the transcription. */
          id?: string | null;
          /** The display name of the transcription. */
          name?: string | null;
          /** The current processing state of the transcription. */
          state?: string | null;
          /** The language code of the transcription. */
          language?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List the Happy Scribe organizations available to the current API key. */
    "happy_scribe.list_organizations": {
      input: Record<string, never>;
      output: {
        /** The organizations available to the API key. */
        organizations: Array<{
          /** The unique identifier of the organization. */
          id?: number | null;
          /** The display name of the organization. */
          name?: string | null;
          /** The authenticated user's role in the organization. */
          role?: string | null;
          [key: string]: unknown;
        }>;
        /** The raw Happy Scribe response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List transcriptions in a Happy Scribe organization. */
    "happy_scribe.list_transcriptions": {
      input: {
        /**
         * The Happy Scribe organization identifier.
         * @minimum 1
         */
        organizationId: number;
        /**
         * The results page number, starting from zero.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of transcriptions to return per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The folder identifier used to filter transcriptions.
         * @minimum 1
         */
        folderId?: number;
        /** The tags used to filter transcriptions. */
        tags?: Array<string>;
      };
      output: {
        /** The transcription records returned by Happy Scribe. */
        transcriptions: Array<{
          /** The unique identifier of the transcription. */
          id?: string | null;
          /** The display name of the transcription. */
          name?: string | null;
          /** The current processing state of the transcription. */
          state?: string | null;
          /** The language code of the transcription. */
          language?: string | null;
          [key: string]: unknown;
        }>;
        /** The raw Happy Scribe response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Update editable fields on a Happy Scribe transcription. */
    "happy_scribe.update_transcription": {
      input: {
        /**
         * The unique identifier of the Happy Scribe transcription.
         * @minLength 1
         * @pattern \S
         */
        transcriptionId: string;
        /**
         * The Happy Scribe organization identifier.
         * @minimum 1
         */
        organizationId: number;
        /**
         * The new transcription display name.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /** Whether anyone with the editor URL can access the transcription. */
        sharingEnabled?: boolean;
        /**
         * The destination folder identifier in the same organization.
         * @minimum 1
         */
        folderId?: number;
      };
      output: {
        /** A Happy Scribe transcription record. */
        transcription: {
          /** The unique identifier of the transcription. */
          id?: string | null;
          /** The display name of the transcription. */
          name?: string | null;
          /** The current processing state of the transcription. */
          state?: string | null;
          /** The language code of the transcription. */
          language?: string | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
