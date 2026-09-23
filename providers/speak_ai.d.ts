import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve AI-generated summaries, topics, sentiment, and other insights for processed Speak AI media. */
    "speak_ai.get_media_insights": {
      input: {
        /**
         * The unique Speak AI media identifier.
         * @minLength 1
         */
        mediaId: string;
      };
      output: {
        /** The media identifier. */
        mediaId: string;
        /** A provider-defined object returned by Speak AI. */
        insights: Record<string, unknown>;
      };
    };
    /** Get processing state and metadata for one Speak AI media item. */
    "speak_ai.get_media_status": {
      input: {
        /**
         * The unique Speak AI media identifier.
         * @minLength 1
         */
        mediaId: string;
      };
      output: {
        /** The media identifier. */
        mediaId: string;
        /** The current processing state. */
        state: string;
        /** A provider-defined object returned by Speak AI. */
        media: Record<string, unknown>;
      };
    };
    /** Retrieve the transcript, speakers, and timestamps for one Speak AI media item. */
    "speak_ai.get_transcript": {
      input: {
        /**
         * The unique Speak AI media identifier.
         * @minLength 1
         */
        mediaId: string;
      };
      output: {
        /** The media identifier. */
        mediaId: string;
        /** A provider-defined object returned by Speak AI. */
        transcript: Record<string, unknown>;
      };
    };
    /** List folders available in the connected Speak AI workspace. */
    "speak_ai.list_folders": {
      input: {
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of folders to return.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
        /** The upstream sort expression, such as createdAt:desc. */
        sortBy?: string;
      };
      output: {
        /** The total number of folders. */
        totalCount: number;
        /** The folders returned for this page. */
        folders: Array<Record<string, unknown>>;
        /** The provider pagination value. */
        pages: number | null;
      };
    };
    /** List and filter media items in the connected Speak AI workspace. */
    "speak_ai.list_media": {
      input: {
        /** The media type to return. */
        mediaType?: "audio" | "video" | "text";
        /**
         * The one-based page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of media items to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The upstream sort expression, such as createdAt:desc. */
        sortBy?: string;
        /**
         * The ownership filter: 0 for uploaded, 1 for assigned, or 2 for both.
         * @minimum 0
         * @maximum 2
         */
        filterMedia?: number;
        /** Text matched against media names and analyzed content. */
        filterName?: string;
        /** The folder whose media items should be returned. */
        folderId?: string;
      };
      output: {
        /** The total number of matching media items. */
        totalCount: number;
        /** The number of available result pages. */
        pages: number;
        /** The media items returned for this page. */
        media: Array<Record<string, unknown>>;
      };
    };
    /** Submit a public audio or video URL to Speak AI for asynchronous transcription and analysis. */
    "speak_ai.upload_media": {
      input: {
        /**
         * The display name for the media item.
         * @minLength 1
         */
        name: string;
        /**
         * A public audio, video, or supported social-media URL that Speak AI can fetch.
         * @minLength 1
         * @format uri
         */
        mediaUrl: string;
        /** The media type when it is known; omit it to let Speak AI inspect the URL. */
        mediaType?: "audio" | "video";
        /** A description stored with the media item. */
        description?: string;
        /** The transcription language as a BCP-47 language code, such as en-US. */
        sourceLanguage?: string;
        /** Comma-separated tags stored with the media item. */
        tags?: string;
        /** The Speak AI folder identifier that should contain the media item. */
        folderId?: string;
      };
      output: {
        /** The media identifier used to poll processing and retrieve results. */
        mediaId: string;
      };
    };
  }
}
