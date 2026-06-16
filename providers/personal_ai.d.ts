import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send a chatgpt or search instruction to a Personal AI persona. */
    "personal_ai.send_instruction": {
      input: {
        /** The Personal AI instruction command to execute. */
        command: "chatgpt" | "search";
        /**
         * The text to send to the Personal AI persona.
         * @minLength 1
         */
        text: string;
        /**
         * The hyphenated domain name of the target Personal AI persona.
         * @minLength 1
         */
        domainName: string;
        /**
         * Additional context for the AI response.
         * @minLength 1
         */
        context?: string;
        /**
         * The name of the user sending the request.
         * @minLength 1
         */
        userName?: string;
        /**
         * The session identifier used to continue a conversation.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * The source application name for the inbound message.
         * @minLength 1
         */
        sourceName?: string;
        /** Whether the instruction should be treated as a message. */
        isMessage?: boolean;
      };
      output: {
        /** The AI's response message. */
        aiMessage: string;
        /** The confidence score of the AI response. */
        aiScore?: number | null;
        /** The name of the AI persona that responded. */
        aiName?: string | null;
        /**
         * The image URL for the responding AI persona.
         * @format uri
         */
        aiPicture?: string | null;
        /** The Personal AI conversation session identifier. */
        sessionId?: string | null;
        /** The source application returned by Personal AI. */
        sourceApp?: string | null;
        /** The raw Personal AI response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Send a message to a Personal AI persona and receive a response. */
    "personal_ai.send_message": {
      input: {
        /**
         * The text to send to the Personal AI persona.
         * @minLength 1
         */
        text: string;
        /**
         * The hyphenated domain name of the target Personal AI persona.
         * @minLength 1
         */
        domainName: string;
        /**
         * Additional context for the AI response.
         * @minLength 1
         */
        context?: string;
        /**
         * The name of the user sending the request.
         * @minLength 1
         */
        userName?: string;
        /**
         * The session identifier used to continue a conversation.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * The source application name for the inbound message.
         * @minLength 1
         */
        sourceName?: string;
        /**
         * The document name to reference from the persona upload library.
         * @minLength 1
         */
        events?: string;
        /** Whether to add the user message to memory. */
        isStack?: boolean;
        /** Whether to create a copilot draft message. */
        isDraft?: boolean;
        /** Additional metadata to pass through to Personal AI. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** The AI's response message. */
        aiMessage: string;
        /** The confidence score of the AI response. */
        aiScore?: number | null;
        /** The name of the AI persona that responded. */
        aiName?: string | null;
        /**
         * The image URL for the responding AI persona.
         * @format uri
         */
        aiPicture?: string | null;
        /** The Personal AI conversation session identifier. */
        sessionId?: string | null;
        /** The source application returned by Personal AI. */
        sourceApp?: string | null;
        /** The raw Personal AI response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Upload one plain text memory to a Personal AI persona memory stack. */
    "personal_ai.upload_memory": {
      input: {
        /**
         * The plain text memory to upload.
         * @minLength 1
         */
        text: string;
        /**
         * The source or application name for the memory.
         * @minLength 1
         */
        sourceName: string;
        /**
         * The hyphenated domain name of the target Personal AI persona.
         * @minLength 1
         */
        domainName: string;
        /**
         * The memory time including timezone.
         * @minLength 1
         */
        createdTime?: string;
        /**
         * The formatted text to store with the memory.
         * @minLength 1
         */
        rawFeedText?: string;
        /**
         * Comma-delimited tags for the memory.
         * @minLength 1
         */
        tags?: string;
      };
      output: {
        /** The top-level response type returned by Personal AI. */
        type: string | null;
        /** The memory items returned by Personal AI. */
        memories: Array<{
          /** The Personal AI memory item type. */
          type?: string | null;
          /** The Personal AI memory level. */
          memlevel?: string | null;
          /** The memory label generated by Personal AI. */
          memlabel?: string | null;
          /** The UTC start time for the memory item. */
          startTimeUtc?: string | null;
          /** The source metadata associated with one memory item. */
          source?: {
            /** The source type of the memory item. */
            type?: string | null;
            /** The source name of the memory item. */
            name?: string | null;
          } | null;
          /** The topics attached to the memory item. */
          topics?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        }>;
        /** The raw Personal AI response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Upload a text document to a Personal AI persona memory library. */
    "personal_ai.upload_text_document": {
      input: {
        /**
         * The body text to upload as a document.
         * @minLength 1
         */
        text: string;
        /**
         * The hyphenated domain name of the target Personal AI persona.
         * @minLength 1
         */
        domainName: string;
        /**
         * The title of the uploaded document.
         * @minLength 1
         */
        title?: string;
        /**
         * The UTC start timestamp for the document.
         * @format date-time
         */
        startTime?: string;
        /**
         * The UTC end timestamp for the document.
         * @format date-time
         */
        endTime?: string;
        /**
         * Comma-delimited tags for the document.
         * @minLength 1
         */
        tags?: string;
        /** Whether to add the document to memory. */
        isStack?: boolean;
      };
      output: {
        /** The upload status message returned by Personal AI. */
        message: string;
        /** The raw Personal AI response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Upload public URL content to a Personal AI persona memory library. */
    "personal_ai.upload_url": {
      input: {
        /**
         * The public URL to upload.
         * @format uri
         */
        url: string;
        /**
         * The hyphenated domain name of the target Personal AI persona.
         * @minLength 1
         */
        domainName: string;
        /**
         * The title of the uploaded content.
         * @minLength 1
         */
        title?: string;
        /**
         * The UTC start timestamp for the content.
         * @format date-time
         */
        startTime?: string;
        /**
         * The UTC end timestamp for the content.
         * @format date-time
         */
        endTime?: string;
        /**
         * Comma-delimited tags for the URL content.
         * @minLength 1
         */
        tags?: string;
        /** Whether to add the URL content to memory. */
        isStack?: boolean;
      };
      output: {
        /** The upload status message returned by Personal AI. */
        message: string;
        /** The raw Personal AI response object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
