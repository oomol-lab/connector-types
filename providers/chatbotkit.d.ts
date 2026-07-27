import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Attach an existing ChatBotKit file to a dataset. */
    "chatbotkit.attach_dataset_file": {
      input: {
        /** The ID of the dataset that will receive the file attachment. */
        datasetId: string;
        /** The file identifier. */
        fileId: string;
        /** The attachment type for the dataset file relation. */
        type: "source";
      };
      output: {
        /** The unique identifier of the resource. */
        id: string;
      };
    };
    /** Send a message to a ChatBotKit conversation and receive the next assistant reply. */
    "chatbotkit.complete_conversation": {
      input: {
        /** The conversation identifier. */
        conversationId: string;
        /** The message text to send before requesting the next assistant reply. */
        text?: string;
        /** Known entities supplied with the completion request. */
        entities?: Array<{
          /** The entity type. */
          type: string;
          /** The entity start offset. */
          begin: number;
          /** The entity end offset. */
          end: number;
          /** The matched entity text. */
          text: string;
          /** The replacement applied to the entity. */
          replacement?: {
            /** The replacement start offset. */
            begin: number;
            /** The replacement end offset. */
            end: number;
            /** The replacement text. */
            text: string;
          };
        }>;
      };
      output: {
        /** The unique identifier of the resource. */
        id: string;
        /** The assistant reply text. */
        text: string;
        /** Token usage information for the completion. */
        usage: {
          /** The number of tokens used in this exchange. */
          token: number;
        };
        /** Why the completion ended. */
        end: {
          /** The reason why the completion ended. */
          reason: "length" | "stop" | "activity" | "error" | "iteration";
        };
      };
    };
    /** Create a new ChatBotKit bot. */
    "chatbotkit.create_bot": {
      input: {
        /** The human-readable name of the resource. */
        name?: string;
        /** The human-readable description of the resource. */
        description?: string;
        /** Metadata associated with the resource. */
        meta?: Record<string, unknown>;
        /** A unique alias that can be used instead of the generated identifier. */
        alias?: string;
        /** The model definition used by the bot or conversation. */
        model?: string;
        /** The backstory or system prompt applied to the bot or conversation. */
        backstory?: string;
        /** The dataset identifier. */
        datasetId?: string;
        /** The skillset identifier. */
        skillsetId?: string;
        /** Whether privacy mode is enabled for the configuration. */
        privacy?: boolean;
        /** Whether moderation is enabled for the configuration. */
        moderation?: boolean;
        /** The visibility setting to apply to the bot. */
        visibility?: "private" | "protected" | "public";
        /** The blueprint identifier. */
        blueprintId?: string;
      };
      output: {
        /** The unique identifier of the resource. */
        id: string;
      };
    };
    /** Create a new ChatBotKit conversation with either a bot reference or inline bot configuration. */
    "chatbotkit.create_conversation": {
      input: {
        /** The human-readable name of the resource. */
        name?: string;
        /** The human-readable description of the resource. */
        description?: string;
        /** Metadata associated with the resource. */
        meta?: Record<string, unknown>;
        /** The bot identifier. */
        botId?: string;
        /** The model definition used by the bot or conversation. */
        model?: string;
        /** The backstory or system prompt applied to the bot or conversation. */
        backstory?: string;
        /** The dataset identifier. */
        datasetId?: string;
        /** The skillset identifier. */
        skillsetId?: string;
        /** Whether privacy mode is enabled for the configuration. */
        privacy?: boolean;
        /** Whether moderation is enabled for the configuration. */
        moderation?: boolean;
        /** The contact identifier. */
        contactId?: string;
        /** The task identifier. */
        taskId?: string;
        /** The space identifier. */
        spaceId?: string;
        /** Initial messages to seed the conversation with. */
        messages?: Array<{
          /** The type of the conversation message. */
          type: "user" | "bot" | "reasoning" | "context" | "instruction" | "backstory" | "activity" | "function" | "function_request" | "function_response" | "error";
          /** The message text. */
          text: string;
        }>;
      };
      output: {
        /** The unique identifier of the resource. */
        id: string;
        /** Messages returned by the creation response. */
        messages?: Array<{
          /** The type of the conversation message. */
          type: "user" | "bot" | "reasoning" | "context" | "instruction" | "backstory" | "activity" | "function" | "function_request" | "function_response" | "error";
          /** The message text. */
          text: string;
        }>;
      };
    };
    /** Append a message to an existing ChatBotKit conversation. */
    "chatbotkit.create_conversation_message": {
      input: {
        /** The conversation identifier. */
        conversationId: string;
        /** The type of the conversation message. */
        type: "user" | "bot" | "reasoning" | "context" | "instruction" | "backstory" | "activity" | "function" | "function_request" | "function_response" | "error";
        /** The message text to append to the conversation. */
        text: string;
        /** Metadata associated with the resource. */
        meta?: Record<string, unknown>;
        /** Known entities supplied with the message. */
        entities?: Array<{
          /** The entity type. */
          type: string;
          /** The entity start offset. */
          begin: number;
          /** The entity end offset. */
          end: number;
          /** The matched entity text. */
          text: string;
          /** The replacement applied to the entity. */
          replacement?: {
            /** The replacement start offset. */
            begin: number;
            /** The replacement end offset. */
            end: number;
            /** The replacement text. */
            text: string;
          };
        }>;
      };
      output: {
        /** The unique identifier of the resource. */
        id: string;
        /** Entities returned by the creation response. */
        entities: Array<{
          /** The entity type. */
          type: string;
          /** The entity start offset. */
          begin: number;
          /** The entity end offset. */
          end: number;
          /** The matched entity text. */
          text: string;
          /** The replacement applied to the entity. */
          replacement?: {
            /** The replacement start offset. */
            begin: number;
            /** The replacement end offset. */
            end: number;
            /** The replacement text. */
            text: string;
          };
        }>;
      };
    };
    /** Create a new ChatBotKit dataset for knowledge retrieval. */
    "chatbotkit.create_dataset": {
      input: {
        /** The human-readable name of the resource. */
        name?: string;
        /** The human-readable description of the resource. */
        description?: string;
        /** Metadata associated with the resource. */
        meta?: Record<string, unknown>;
        /** A unique alias that can be used instead of the generated identifier. */
        alias?: string;
        /** The blueprint identifier. */
        blueprintId?: string;
        /** The storage backend to use for the dataset. */
        store?: string;
        /** The reranker to use for the dataset. */
        reranker?: string;
        /** The maximum tokens allowed per record. */
        recordMaxTokens?: number;
        /** The minimum score to keep search results. */
        searchMinScore?: number;
        /** The maximum number of records returned by search. */
        searchMaxRecords?: number;
        /** The maximum tokens used during search. */
        searchMaxTokens?: number;
        /** The instruction inserted when records are matched. */
        matchInstruction?: string;
        /** The instruction inserted when no records are matched. */
        mismatchInstruction?: string;
        /** The separators used when tokenizing text. */
        separators?: string;
        /** The visibility setting of the dataset. */
        visibility?: "private" | "protected" | "public";
      };
      output: {
        /** The unique identifier of the resource. */
        id: string;
      };
    };
    /** Create a new record inside a ChatBotKit dataset. */
    "chatbotkit.create_dataset_record": {
      input: {
        /** The ID of the dataset that should receive the new record. */
        datasetId: string;
        /** The text content to store in the dataset record. */
        text: string;
        /** The source label associated with the record. */
        source?: string;
        /** Metadata associated with the resource. */
        meta?: Record<string, unknown>;
      };
      output: {
        /** The unique identifier of the resource. */
        id: string;
      };
    };
    /** Create a new ChatBotKit file resource. */
    "chatbotkit.create_file": {
      input: {
        /** The human-readable name of the resource. */
        name?: string;
        /** The human-readable description of the resource. */
        description?: string;
        /** Metadata associated with the resource. */
        meta?: Record<string, unknown>;
        /** A unique alias that can be used instead of the generated identifier. */
        alias?: string;
        /** The blueprint identifier. */
        blueprintId?: string;
        /** The visibility setting of the file. */
        visibility?: "private" | "protected" | "public";
      };
      output: {
        /** The unique identifier of the resource. */
        id: string;
      };
    };
    /** Detach a ChatBotKit file from a dataset. */
    "chatbotkit.detach_dataset_file": {
      input: {
        /** The ID of the dataset whose file attachment should be removed. */
        datasetId: string;
        /** The file identifier. */
        fileId: string;
        /** Whether records associated with the file should also be deleted. */
        deleteRecords?: boolean;
      };
      output: {
        /** The unique identifier of the resource. */
        id: string;
      };
    };
    /** Fetch the download URL for an existing ChatBotKit file. */
    "chatbotkit.download_file": {
      input: {
        /** The file identifier. */
        fileId: string;
      };
      output: {
        /** The URL that can be used to download the file content. */
        url: string;
      };
    };
    /** Fetch a single ChatBotKit bot by ID. */
    "chatbotkit.fetch_bot": {
      input: {
        /** The ID of the bot to retrieve. */
        botId: string;
      };
      output: {
        /** The unique identifier of the resource. */
        id: string;
        /** The human-readable name of the resource. */
        name?: string;
        /** The human-readable description of the resource. */
        description?: string;
        /** Metadata associated with the resource. */
        meta?: Record<string, unknown>;
        /** The model definition used by the bot or conversation. */
        model?: string;
        /** The backstory or system prompt applied to the bot or conversation. */
        backstory?: string;
        /** The dataset identifier. */
        datasetId?: string;
        /** The skillset identifier. */
        skillsetId?: string;
        /** Whether privacy mode is enabled for the configuration. */
        privacy?: boolean;
        /** Whether moderation is enabled for the configuration. */
        moderation?: boolean;
        /** The visibility setting of the bot. */
        visibility?: "private" | "protected" | "public";
        /** The blueprint identifier. */
        blueprintId?: string;
        /** The Unix timestamp in milliseconds when the resource was created. */
        createdAt: number;
        /** The Unix timestamp in milliseconds when the resource was last updated. */
        updatedAt: number;
      };
    };
    /** Fetch a single ChatBotKit conversation by ID. */
    "chatbotkit.fetch_conversation": {
      input: {
        /** The conversation identifier. */
        conversationId: string;
      };
      output: {
        /** The unique identifier of the resource. */
        id: string;
        /** The human-readable name of the resource. */
        name?: string;
        /** The human-readable description of the resource. */
        description?: string;
        /** Metadata associated with the resource. */
        meta?: Record<string, unknown>;
        /** The bot identifier. */
        botId?: string;
        /** The model definition used by the bot or conversation. */
        model?: string;
        /** The backstory or system prompt applied to the bot or conversation. */
        backstory?: string;
        /** The dataset identifier. */
        datasetId?: string;
        /** The skillset identifier. */
        skillsetId?: string;
        /** Whether privacy mode is enabled for the configuration. */
        privacy?: boolean;
        /** Whether moderation is enabled for the configuration. */
        moderation?: boolean;
        /** The contact identifier. */
        contactId?: string;
        /** The task identifier. */
        taskId?: string;
        /** The space identifier. */
        spaceId?: string;
        /** The Unix timestamp in milliseconds when the resource was created. */
        createdAt: number;
        /** The Unix timestamp in milliseconds when the resource was last updated. */
        updatedAt: number;
      };
    };
    /** Fetch a single ChatBotKit dataset by ID. */
    "chatbotkit.fetch_dataset": {
      input: {
        /** The ID of the dataset to retrieve. */
        datasetId: string;
      };
      output: {
        /** The unique identifier of the resource. */
        id: string;
        /** The human-readable name of the resource. */
        name?: string;
        /** The human-readable description of the resource. */
        description?: string;
        /** Metadata associated with the resource. */
        meta?: Record<string, unknown>;
        /** The storage backend used by the dataset. */
        store: string;
        /** The reranker model used by the dataset. */
        reranker?: string;
        /** The maximum tokens allowed per record. */
        recordMaxTokens?: number;
        /** The minimum score to keep search results. */
        searchMinScore?: number;
        /** The maximum number of records returned by search. */
        searchMaxRecords?: number;
        /** The maximum tokens used during search. */
        searchMaxTokens?: number;
        /** The instruction inserted when records are matched. */
        matchInstruction?: string;
        /** The instruction inserted when no records are matched. */
        mismatchInstruction?: string;
        /** The separators used to tokenize text. */
        separators?: string;
        /** The visibility setting of the dataset. */
        visibility?: "private" | "protected" | "public";
        /** The blueprint identifier. */
        blueprintId?: string;
        /** The Unix timestamp in milliseconds when the resource was created. */
        createdAt: number;
        /** The Unix timestamp in milliseconds when the resource was last updated. */
        updatedAt: number;
      };
    };
    /** Fetch a single ChatBotKit file by ID. */
    "chatbotkit.fetch_file": {
      input: {
        /** The file identifier. */
        fileId: string;
      };
      output: {
        /** The unique identifier of the resource. */
        id: string;
        /** The human-readable name of the resource. */
        name?: string;
        /** The human-readable description of the resource. */
        description?: string;
        /** Metadata associated with the resource. */
        meta?: Record<string, unknown>;
        /** The size of the file in bytes. */
        size?: number;
        /** The MIME type of the file. */
        type?: string;
        /** The visibility setting of the file. */
        visibility?: "private" | "protected" | "public";
        /** The blueprint identifier. */
        blueprintId?: string;
        /** The Unix timestamp in milliseconds when the resource was created. */
        createdAt: number;
        /** The Unix timestamp in milliseconds when the resource was last updated. */
        updatedAt: number;
      };
    };
    /** Fetch account-wide ChatBotKit usage statistics for tokens, conversations, messages, and database resources. */
    "chatbotkit.fetch_usage": {
      input: Record<string, never>;
      output: {
        /** The number of tokens used in the current billing period. */
        tokens: number;
        /** The number of conversations created in the current billing period. */
        conversations: number;
        /** The number of messages sent in the current billing period. */
        messages: number;
        /** The database value. */
        database: {
          /** The number of datasets created in the current billing period. */
          datasets: number;
          /** The number of records created in the current billing period. */
          records: number;
          /** The number of skillsets created in the current billing period. */
          skillsets: number;
          /** The number of abilities created in the current billing period. */
          abilities: number;
          /** The number of files created in the current billing period. */
          files: number;
          /** The number of users created in the current billing period. */
          users: number;
        };
      };
    };
    /** List ChatBotKit bots with optional pagination and metadata filtering. */
    "chatbotkit.list_bots": {
      input: {
        /**
         * The maximum number of items to retrieve.
         * @minimum 1
         */
        take?: number;
        /** The cursor for fetching the next page of results. */
        cursor?: string;
        /** The sort order to use when paginating results. */
        order?: "asc" | "desc";
        /** String metadata filters encoded into the query string. */
        meta?: Record<string, string>;
      };
      output: {
        /** The bot items returned by the current page. */
        items: Array<{
          /** The unique identifier of the resource. */
          id: string;
          /** The human-readable name of the resource. */
          name?: string;
          /** The human-readable description of the resource. */
          description?: string;
          /** Metadata associated with the resource. */
          meta?: Record<string, unknown>;
          /** The model definition used by the bot or conversation. */
          model?: string;
          /** The backstory or system prompt applied to the bot or conversation. */
          backstory?: string;
          /** The dataset identifier. */
          datasetId?: string;
          /** The skillset identifier. */
          skillsetId?: string;
          /** Whether privacy mode is enabled for the configuration. */
          privacy?: boolean;
          /** Whether moderation is enabled for the configuration. */
          moderation?: boolean;
          /** The visibility setting of the bot. */
          visibility?: "private" | "protected" | "public";
          /** The blueprint identifier. */
          blueprintId?: string;
          /** The Unix timestamp in milliseconds when the resource was created. */
          createdAt: number;
          /** The Unix timestamp in milliseconds when the resource was last updated. */
          updatedAt: number;
        }>;
        /** The cursor for fetching the next page of results. */
        cursor?: string;
      };
    };
    /** List messages inside a ChatBotKit conversation. */
    "chatbotkit.list_conversation_messages": {
      input: {
        /** The conversation identifier. */
        conversationId: string;
        /**
         * The maximum number of items to retrieve.
         * @minimum 1
         */
        take?: number;
        /** The cursor for fetching the next page of results. */
        cursor?: string;
        /** The sort order to use when paginating results. */
        order?: "asc" | "desc";
      };
      output: {
        /** The conversation messages returned by the current page. */
        items: Array<{
          /** The unique identifier of the resource. */
          id: string;
          /** Metadata associated with the resource. */
          meta?: Record<string, unknown>;
          /** The type of the conversation message. */
          type: "user" | "bot" | "reasoning" | "context" | "instruction" | "backstory" | "activity" | "function" | "function_request" | "function_response" | "error";
          /** The message text. */
          text: string;
          /** The Unix timestamp in milliseconds when the resource was created. */
          createdAt: number;
          /** The Unix timestamp in milliseconds when the resource was last updated. */
          updatedAt: number;
        }>;
        /** The cursor for fetching the next page of results. */
        cursor?: string;
      };
    };
    /** List ChatBotKit conversations with optional pagination and metadata filtering. */
    "chatbotkit.list_conversations": {
      input: {
        /**
         * The maximum number of items to retrieve.
         * @minimum 1
         */
        take?: number;
        /** The cursor for fetching the next page of results. */
        cursor?: string;
        /** The sort order to use when paginating results. */
        order?: "asc" | "desc";
        /** String metadata filters encoded into the query string. */
        meta?: Record<string, string>;
      };
      output: {
        /** The conversations returned by the current page. */
        items: Array<{
          /** The unique identifier of the resource. */
          id: string;
          /** The human-readable name of the resource. */
          name?: string;
          /** The human-readable description of the resource. */
          description?: string;
          /** Metadata associated with the resource. */
          meta?: Record<string, unknown>;
          /** The bot identifier. */
          botId?: string;
          /** The model definition used by the bot or conversation. */
          model?: string;
          /** The backstory or system prompt applied to the bot or conversation. */
          backstory?: string;
          /** The dataset identifier. */
          datasetId?: string;
          /** The skillset identifier. */
          skillsetId?: string;
          /** Whether privacy mode is enabled for the configuration. */
          privacy?: boolean;
          /** Whether moderation is enabled for the configuration. */
          moderation?: boolean;
          /** The contact identifier. */
          contactId?: string;
          /** The task identifier. */
          taskId?: string;
          /** The space identifier. */
          spaceId?: string;
          /** The Unix timestamp in milliseconds when the resource was created. */
          createdAt: number;
          /** The Unix timestamp in milliseconds when the resource was last updated. */
          updatedAt: number;
        }>;
        /** The cursor for fetching the next page of results. */
        cursor?: string;
      };
    };
    /** List files attached to a ChatBotKit dataset. */
    "chatbotkit.list_dataset_files": {
      input: {
        /** The ID of the dataset whose attached files should be listed. */
        datasetId: string;
        /**
         * The maximum number of items to retrieve.
         * @minimum 1
         */
        take?: number;
        /** The cursor for fetching the next page of results. */
        cursor?: string;
        /** The sort order to use when paginating results. */
        order?: "asc" | "desc";
      };
      output: {
        /** The files attached to the dataset. */
        items: Array<{
          /** The unique identifier of the resource. */
          id: string;
          /** The human-readable name of the resource. */
          name?: string;
          /** The human-readable description of the resource. */
          description?: string;
          /** Metadata associated with the resource. */
          meta?: Record<string, unknown>;
          /** The size of the file in bytes. */
          size?: number;
          /** The MIME type of the file. */
          type?: string;
          /** The visibility setting of the file. */
          visibility?: "private" | "protected" | "public";
          /** The blueprint identifier. */
          blueprintId?: string;
          /** The Unix timestamp in milliseconds when the resource was created. */
          createdAt: number;
          /** The Unix timestamp in milliseconds when the resource was last updated. */
          updatedAt: number;
        }>;
        /** The cursor for fetching the next page of results. */
        cursor?: string;
      };
    };
    /** List records inside a ChatBotKit dataset. */
    "chatbotkit.list_dataset_records": {
      input: {
        /** The ID of the dataset whose records should be listed. */
        datasetId: string;
        /**
         * The maximum number of items to retrieve.
         * @minimum 1
         */
        take?: number;
        /** The cursor for fetching the next page of results. */
        cursor?: string;
        /** The sort order to use when paginating results. */
        order?: "asc" | "desc";
      };
      output: {
        /** The dataset records returned by the current page. */
        items: Array<{
          /** The unique identifier of the resource. */
          id: string;
          /** The text stored in the dataset record. */
          text: string;
          /** The source label for the record. */
          source?: string;
          /** Metadata associated with the resource. */
          meta?: Record<string, unknown>;
          /** The relevance score returned by semantic search. */
          score?: number;
          /** The Unix timestamp in milliseconds when the resource was created. */
          createdAt?: number;
          /** The Unix timestamp in milliseconds when the resource was last updated. */
          updatedAt?: number;
        }>;
        /** The cursor for fetching the next page of results. */
        cursor?: string;
      };
    };
    /** List ChatBotKit datasets with optional pagination and metadata filtering. */
    "chatbotkit.list_datasets": {
      input: {
        /**
         * The maximum number of items to retrieve.
         * @minimum 1
         */
        take?: number;
        /** The cursor for fetching the next page of results. */
        cursor?: string;
        /** The sort order to use when paginating results. */
        order?: "asc" | "desc";
        /** String metadata filters encoded into the query string. */
        meta?: Record<string, string>;
      };
      output: {
        /** The datasets returned by the current page. */
        items: Array<{
          /** The unique identifier of the resource. */
          id: string;
          /** The human-readable name of the resource. */
          name?: string;
          /** The human-readable description of the resource. */
          description?: string;
          /** Metadata associated with the resource. */
          meta?: Record<string, unknown>;
          /** The storage backend used by the dataset. */
          store: string;
          /** The reranker model used by the dataset. */
          reranker?: string;
          /** The maximum tokens allowed per record. */
          recordMaxTokens?: number;
          /** The minimum score to keep search results. */
          searchMinScore?: number;
          /** The maximum number of records returned by search. */
          searchMaxRecords?: number;
          /** The maximum tokens used during search. */
          searchMaxTokens?: number;
          /** The instruction inserted when records are matched. */
          matchInstruction?: string;
          /** The instruction inserted when no records are matched. */
          mismatchInstruction?: string;
          /** The separators used to tokenize text. */
          separators?: string;
          /** The visibility setting of the dataset. */
          visibility?: "private" | "protected" | "public";
          /** The blueprint identifier. */
          blueprintId?: string;
          /** The Unix timestamp in milliseconds when the resource was created. */
          createdAt: number;
          /** The Unix timestamp in milliseconds when the resource was last updated. */
          updatedAt: number;
        }>;
        /** The cursor for fetching the next page of results. */
        cursor?: string;
      };
    };
    /** List ChatBotKit files with optional pagination and metadata filtering. */
    "chatbotkit.list_files": {
      input: {
        /**
         * The maximum number of items to retrieve.
         * @minimum 1
         */
        take?: number;
        /** The cursor for fetching the next page of results. */
        cursor?: string;
        /** The sort order to use when paginating results. */
        order?: "asc" | "desc";
        /** String metadata filters encoded into the query string. */
        meta?: Record<string, string>;
      };
      output: {
        /** The files returned by the current page. */
        items: Array<{
          /** The unique identifier of the resource. */
          id: string;
          /** The human-readable name of the resource. */
          name?: string;
          /** The human-readable description of the resource. */
          description?: string;
          /** Metadata associated with the resource. */
          meta?: Record<string, unknown>;
          /** The size of the file in bytes. */
          size?: number;
          /** The MIME type of the file. */
          type?: string;
          /** The visibility setting of the file. */
          visibility?: "private" | "protected" | "public";
          /** The blueprint identifier. */
          blueprintId?: string;
          /** The Unix timestamp in milliseconds when the resource was created. */
          createdAt: number;
          /** The Unix timestamp in milliseconds when the resource was last updated. */
          updatedAt: number;
        }>;
        /** The cursor for fetching the next page of results. */
        cursor?: string;
      };
    };
    /** Run semantic search against a ChatBotKit dataset. */
    "chatbotkit.search_dataset": {
      input: {
        /** The ID of the dataset to search. */
        datasetId: string;
        /** The keyword or phrase to search for. */
        search: string;
        /** The filter object used to narrow search results. */
        filter?: Record<string, unknown>;
      };
      output: {
        /** The ID of the dataset that was searched. */
        id: string;
        /** The matching dataset records. */
        records: Array<{
          /** The unique identifier of the resource. */
          id: string;
          /** The text stored in the dataset record. */
          text: string;
          /** The source label for the record. */
          source?: string;
          /** Metadata associated with the resource. */
          meta?: Record<string, unknown>;
          /** The relevance score returned by semantic search. */
          score?: number;
          /** The Unix timestamp in milliseconds when the resource was created. */
          createdAt?: number;
          /** The Unix timestamp in milliseconds when the resource was last updated. */
          updatedAt?: number;
        }>;
      };
    };
    /** Trigger synchronization for an existing ChatBotKit file. */
    "chatbotkit.sync_file": {
      input: {
        /** The file identifier. */
        fileId: string;
      };
      output: {
        /** The unique identifier of the resource. */
        id: string;
      };
    };
    /** Update an existing ChatBotKit bot. */
    "chatbotkit.update_bot": {
      input: {
        /** The human-readable name of the resource. */
        name?: string;
        /** The human-readable description of the resource. */
        description?: string;
        /** Metadata associated with the resource. */
        meta?: Record<string, unknown>;
        /** A unique alias that can be used instead of the generated identifier. */
        alias?: string;
        /** The model definition used by the bot or conversation. */
        model?: string;
        /** The backstory or system prompt applied to the bot or conversation. */
        backstory?: string;
        /** The dataset identifier. */
        datasetId?: string;
        /** The skillset identifier. */
        skillsetId?: string;
        /** Whether privacy mode is enabled for the configuration. */
        privacy?: boolean;
        /** Whether moderation is enabled for the configuration. */
        moderation?: boolean;
        /** The visibility setting to apply to the bot. */
        visibility?: "private" | "protected" | "public";
        /** The blueprint identifier. */
        blueprintId?: string;
        /** The ID of the bot to update. */
        botId: string;
      };
      output: {
        /** The unique identifier of the resource. */
        id: string;
      };
    };
    /** Update an existing ChatBotKit dataset. */
    "chatbotkit.update_dataset": {
      input: {
        /** The human-readable name of the resource. */
        name?: string;
        /** The human-readable description of the resource. */
        description?: string;
        /** Metadata associated with the resource. */
        meta?: Record<string, unknown>;
        /** A unique alias that can be used instead of the generated identifier. */
        alias?: string;
        /** The blueprint identifier. */
        blueprintId?: string;
        /** The storage backend to use for the dataset. */
        store?: string;
        /** The reranker to use for the dataset. */
        reranker?: string;
        /** The maximum tokens allowed per record. */
        recordMaxTokens?: number;
        /** The minimum score to keep search results. */
        searchMinScore?: number;
        /** The maximum number of records returned by search. */
        searchMaxRecords?: number;
        /** The maximum tokens used during search. */
        searchMaxTokens?: number;
        /** The instruction inserted when records are matched. */
        matchInstruction?: string;
        /** The instruction inserted when no records are matched. */
        mismatchInstruction?: string;
        /** The separators used when tokenizing text. */
        separators?: string;
        /** The visibility setting of the dataset. */
        visibility?: "private" | "protected" | "public";
        /** The ID of the dataset to update. */
        datasetId: string;
      };
      output: {
        /** The unique identifier of the resource. */
        id: string;
      };
    };
    /** Upload content to an existing ChatBotKit file using the official JSON upload modes. */
    "chatbotkit.upload_file": {
      input: {
        /** The file identifier. */
        fileId: string;
        /** The file upload payload accepted by the official JSON upload endpoint. */
        file: string | {
          /** The MIME type of the file to upload. */
          type: string;
          /** The size of the file in bytes. */
          size: number;
          /** The optional filename to associate with the upload. */
          name?: string;
        };
      };
      output: {
        /** The unique identifier of the resource. */
        id: string;
        /** Direct upload information returned by ChatBotKit. */
        uploadRequest?: {
          /** The HTTP method to use for the direct upload. */
          method: string;
          /** The HTTP URL to use for the direct upload. */
          url: string;
          /** The headers to include in the direct upload request. */
          headers: Record<string, unknown>;
        };
      };
    };
  }
}
