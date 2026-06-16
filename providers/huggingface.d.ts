import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate a chat completion with Hugging Face Inference Providers. */
    "huggingface.generate_chat_completion": {
      input: {
        /**
         * The Hugging Face model identifier.
         * @minLength 1
         */
        model: string;
        /**
         * The ordered conversation messages.
         * @minItems 1
         */
        messages: Array<{
          /** The role of the message author. */
          role: "system" | "user" | "assistant" | "tool";
          /** The content carried by the message. */
          content: string | Array<{
            /** The multimodal content type. */
            type: "text";
            /** The text content for this message part. */
            text: string;
          } | {
            /** The multimodal content type. */
            type: "image_url";
            /** The image reference payload. */
            image_url: {
              /** The image URL or data URI. */
              url: string;
            };
          }>;
          /** The optional speaker name. */
          name?: string;
        }>;
        /**
         * The maximum number of output tokens to generate.
         * @minimum 1
         */
        max_tokens?: number;
        /**
         * The sampling temperature.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /**
         * The nucleus sampling threshold.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /**
         * Up to 4 stop sequences.
         * @maxItems 4
         */
        stop?: Array<string>;
        /** A random seed for deterministic generation. */
        seed?: number;
        /** Whether to request a streaming response. This connector only accepts false or an omitted value. */
        stream?: false;
        /** The function tools available to the model. */
        tools?: Array<{
          /** The tool type. */
          type: "function";
          /** The function tool declaration. */
          function: {
            /** The tool function name. */
            name: string;
            /** A human-readable tool description. */
            description?: string;
            /** The JSON Schema parameters for the tool. */
            parameters?: Record<string, unknown>;
          };
        }>;
      };
      output: {
        /** The chat completion identifier. */
        id: string;
        /** The upstream object type. */
        object: string;
        /** The creation timestamp in Unix seconds. */
        created?: number;
        /** The model used for generation. */
        model: string;
        /** The first assistant text content extracted from the response. */
        text?: string;
        /** The generated completion choices. */
        choices: Array<{
          /** The zero-based choice index. */
          index: number;
          /** The generated assistant message. */
          message: {
            /** The role of the generated message. */
            role: string;
            content?: string | null;
          };
          finishReason?: string | null;
        }>;
        /** The normalized token usage. */
        usage?: {
          /** The prompt token count. */
          promptTokens?: number;
          /** The completion token count. */
          completionTokens?: number;
          /** The total token count. */
          totalTokens?: number;
        };
      };
    };
    /** Generate text embeddings with Hugging Face inference. */
    "huggingface.generate_embeddings": {
      input: {
        /** The embedding model identifier. */
        model?: string;
        /**
         * The list of texts to embed.
         * @minItems 1
         */
        inputs: Array<string>;
      };
      output: {
        /** The embedding model identifier. */
        model: string;
        /** The embedding vectors for each input string. */
        embeddings: Array<Array<number>>;
        /** The embedding dimension count. */
        dimensions: number;
      };
    };
    /** Get the current authenticated Hugging Face user profile. */
    "huggingface.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The Hugging Face subject identifier. */
        id: string;
        /** The Hugging Face handle. */
        preferredUsername?: string;
        /** The display name of the authenticated user. */
        name?: string;
        /** The email address returned by Hugging Face. */
        email?: string;
        /** The avatar image URL. */
        avatarUrl?: string;
        /** The public profile URL. */
        profileUrl?: string;
        /** The organizations attached to the authenticated user. */
        organizations?: Array<{
          /** The organization handle shown by Hugging Face. */
          preferredUsername?: string;
          /** The organization display name. */
          name?: string;
          /** The organization avatar URL. */
          avatarUrl?: string;
          /** The organization profile URL. */
          profileUrl?: string;
        }>;
      };
    };
    /** Preview the first rows of a dataset split from the Hugging Face Dataset Viewer. */
    "huggingface.get_dataset_first_rows": {
      input: {
        /**
         * The full dataset identifier, such as owner/dataset.
         * @minLength 1
         */
        dataset: string;
        /**
         * The dataset config or subset name.
         * @minLength 1
         */
        config: string;
        /**
         * The dataset split name to preview.
         * @minLength 1
         */
        split: string;
      };
      output: {
        /** The dataset identifier that was queried. */
        dataset: string;
        /** The dataset config that was queried. */
        config: string;
        /** The dataset split that was queried. */
        split: string;
        /** The feature list returned by the viewer. */
        features: Array<{
          /** The zero-based feature index. */
          featureIdx: number;
          /** The feature name. */
          name: string;
          /** The feature type description. */
          type: Record<string, unknown>;
        }>;
        /** The row previews returned by the viewer. */
        rows: Array<{
          /** The zero-based row index. */
          rowIdx: number;
          /** The row payload keyed by column name. */
          row: Record<string, unknown>;
          /** The cells truncated by the upstream dataset viewer. */
          truncatedCells: Array<string>;
        }>;
      };
    };
    /** Get detailed metadata for a Hugging Face dataset by dataset id. */
    "huggingface.get_dataset_info": {
      input: {
        /**
         * The full dataset identifier, such as owner/dataset.
         * @minLength 1
         */
        dataset: string;
        /** The optional dataset config or subset name. */
        config?: string;
      };
      output: {
        /** The full dataset identifier. */
        dataset: string;
        /** The dataset config name. */
        config?: string;
        /** The dataset description text. */
        description?: string;
        /** The dataset citation text. */
        citation?: string;
        /** The dataset homepage URL. */
        homepage?: string;
        /** The dataset license string. */
        license?: string;
        /** The dataset features keyed by column name. */
        features?: Record<string, unknown>;
        /** The dataset splits keyed by split name. */
        splits?: Record<string, unknown>;
        /** Whether the dataset metadata was computed on a partial source. */
        partial?: boolean;
      };
    };
    /** Get column statistics for a dataset split from the Hugging Face Dataset Viewer. */
    "huggingface.get_dataset_statistics": {
      input: {
        /**
         * The full dataset identifier, such as owner/dataset.
         * @minLength 1
         */
        dataset: string;
        /**
         * The dataset config or subset name.
         * @minLength 1
         */
        config: string;
        /**
         * The dataset split name to analyze.
         * @minLength 1
         */
        split: string;
      };
      output: {
        /** The number of examples analyzed. */
        numExamples?: number;
        /** Whether the statistics were computed on only a partial source. */
        partial: boolean;
        /** The statistics entries returned by the viewer. */
        statistics: Array<{
          /** The column name. */
          columnName?: string;
          /** The upstream column type. */
          columnType?: string;
          /** The upstream statistics payload. */
          columnStatistics?: Record<string, unknown>;
        }>;
      };
    };
    /** Get detailed metadata for a Hugging Face model by modelId. */
    "huggingface.get_model_info": {
      input: {
        /**
         * The full model identifier, such as owner/model.
         * @minLength 1
         */
        modelId: string;
      };
      output: {
        /** The full model identifier. */
        id: string;
        /** The model owner handle. */
        author?: string;
        /** The primary pipeline task for the model. */
        task?: string;
        /** Whether the model repository is private. */
        private?: boolean;
        /** The Hugging Face gating status. */
        gated?: boolean | string;
        /** The number of likes on the model card. */
        likes?: number;
        /** The number of model downloads. */
        downloads?: number;
        /** The last modification timestamp. */
        lastModified?: string;
        /** The creation timestamp. */
        createdAt?: string;
        /** The tags attached to the model. */
        tags?: Array<string>;
        /** The full model identifier. */
        modelId: string;
        /** The current repository SHA. */
        sha?: string;
        /** The primary library tag for the model. */
        libraryName?: string;
        /** The model configuration object. */
        config?: Record<string, unknown>;
        /** Parsed metadata from the model card. */
        cardData?: Record<string, unknown>;
      };
    };
    /** Get detailed metadata for a Hugging Face Space by repo id. */
    "huggingface.get_space_info": {
      input: {
        /**
         * The full Space identifier, such as owner/space.
         * @minLength 1
         */
        repoId: string;
        /** The optional git revision to inspect. */
        revision?: string;
      };
      output: {
        /** The full Space identifier. */
        id?: string;
        /** The Space owner handle. */
        author?: string;
        /** The SDK used by the Space. */
        sdk?: string;
        /** The public host URL for the Space. */
        host?: string;
        /** Whether the Space repository is private. */
        private?: boolean;
        /** The Hugging Face gating status. */
        gated?: boolean | string;
        /** The number of likes on the Space. */
        likes?: number;
        /** The models linked from the Space. */
        models?: Array<string>;
        /** The datasets linked from the Space. */
        datasets?: Array<string>;
        /** The tags attached to the Space. */
        tags?: Array<string>;
        /** The creation timestamp. */
        createdAt?: string;
        /** The last modification timestamp. */
        lastModified?: string;
        /** The upstream runtime payload. */
        runtime?: Record<string, unknown>;
        /** The parsed Space card metadata. */
        cardData?: Record<string, unknown>;
      };
    };
    /** Get trending Hugging Face repositories across models, datasets, and Spaces. */
    "huggingface.get_trending": {
      input: {
        /** The repository type filter. */
        type?: "all" | "model" | "dataset" | "space";
        /**
         * The maximum number of trending items to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The list of trending repositories. */
        recentlyTrending: Array<{
          /** The repository type for the trending entry. */
          repoType: string;
          /** The repository data for the trending entry. */
          repoData: Record<string, unknown>;
        }>;
      };
    };
    /** List Hugging Face datasets using user-friendly search filters. */
    "huggingface.list_datasets": {
      input: {
        /** A keyword used to search dataset names and owners. */
        search?: string;
        /** Filter datasets by author or organization. */
        author?: string;
        /** Filter datasets by a Hub tag expression. */
        filter?: string;
        /** The property used to sort results. */
        sort?: "lastModified" | "trending" | "likes" | "downloads";
        /** The direction in which to sort results. */
        direction?: "asc" | "desc";
        /**
         * The maximum number of datasets to return.
         * @minimum 1
         * @maximum 500
         * @default 20
         */
        limit: number;
      };
      output: {
        /** The list of matching dataset summaries. */
        datasets: Array<{
          /** The full dataset identifier. */
          id: string;
          /** The dataset owner handle. */
          author?: string;
          /** Whether the dataset repository is private. */
          private?: boolean;
          /** The Hugging Face gating status. */
          gated?: boolean | string;
          /** Whether the dataset is disabled. */
          disabled?: boolean;
          /** The number of dataset downloads. */
          downloads?: number;
          /** The number of likes on the dataset card. */
          likes?: number;
          /** The tags attached to the dataset. */
          tags?: Array<string>;
          /** The creation timestamp. */
          createdAt?: string;
          /** The last modification timestamp. */
          lastModified?: string;
        }>;
      };
    };
    /** List Hugging Face Inference Endpoints for a namespace. */
    "huggingface.list_endpoints": {
      input: {
        /**
         * The user or organization namespace.
         * @minLength 1
         */
        namespace: string;
        /** Filter endpoints by a name substring. */
        search?: string;
        /** Filter endpoints by a comma-separated tag list. */
        tags?: string;
        /**
         * The maximum number of endpoints to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The pagination cursor from a previous response. */
        cursor?: string;
      };
      output: {
        /** The endpoint records returned by the API. */
        items: Array<Record<string, unknown>>;
        /** The cursor for the next page of results. */
        nextCursor?: string;
        /** The cursor for the previous page of results. */
        prevCursor?: string;
      };
    };
    /** List Hugging Face models using user-friendly search filters. */
    "huggingface.list_models": {
      input: {
        /** A keyword used to search model names and owners. */
        search?: string;
        /** Filter models by author or organization. */
        author?: string;
        /** Filter models by pipeline task. */
        task?: string;
        /**
         * The maximum number of models to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit: number;
      };
      output: {
        /** The list of matching model summaries. */
        models: Array<{
          /** The full model identifier. */
          id: string;
          /** The model owner handle. */
          author?: string;
          /** The primary pipeline task for the model. */
          task?: string;
          /** Whether the model repository is private. */
          private?: boolean;
          /** The Hugging Face gating status. */
          gated?: boolean | string;
          /** The number of likes on the model card. */
          likes?: number;
          /** The number of model downloads. */
          downloads?: number;
          /** The last modification timestamp. */
          lastModified?: string;
          /** The creation timestamp. */
          createdAt?: string;
          /** The tags attached to the model. */
          tags?: Array<string>;
        }>;
      };
    };
    /** List files in a Hugging Face repository tree. */
    "huggingface.list_repo_files": {
      input: {
        /** The Hugging Face repository type. */
        repoType: "model" | "dataset" | "space";
        /**
         * The full repository identifier, such as owner/repo.
         * @minLength 1
         */
        repoId: string;
        /**
         * The optional repository-relative path to list.
         * @default ""
         */
        path: string;
        /** The optional git revision to inspect. */
        revision?: string;
        /** Whether to recursively return all nested entries. */
        recursive?: boolean;
        /** Whether to request expanded commit and security metadata. */
        expand?: boolean;
        /**
         * The maximum number of items to return.
         * @minimum 1
         */
        limit?: number;
        /** The pagination cursor from a previous response. */
        cursor?: string;
      };
      output: {
        /** The repository tree items. */
        items: Array<{
          /** The repository-relative path. */
          path?: string;
          /** The tree entry type. */
          type?: string;
          /** The object identifier for the tree entry. */
          oid?: string;
          /** The entry size in bytes. */
          size?: number;
          /** The last commit metadata for the entry. */
          lastCommit?: Record<string, unknown>;
          /** The upstream security scanner metadata for the entry. */
          securityFileStatus?: Record<string, unknown>;
        }>;
        /** The cursor for the next page of results. */
        nextCursor?: string;
      };
    };
    /** List Hugging Face Spaces using user-friendly discovery filters. */
    "huggingface.list_spaces": {
      input: {
        /** A keyword used to search Space names and owners. */
        search?: string;
        /** Filter Spaces by author or organization. */
        author?: string;
        /** Filter Spaces by a Hub tag expression. */
        filter?: string;
        /** The property used to sort results. */
        sort?: string;
        /** The sort direction used by the Space listing API. */
        direction?: "1" | "-1";
        /**
         * The maximum number of Spaces to return.
         * @minimum 1
         * @maximum 500
         * @default 20
         */
        limit: number;
      };
      output: {
        /** The list of matching Space summaries. */
        spaces: Array<{
          /** The full Space identifier. */
          id?: string;
          /** The Space owner handle. */
          author?: string;
          /** The SDK used by the Space. */
          sdk?: string;
          /** The public host URL for the Space. */
          host?: string;
          /** Whether the Space repository is private. */
          private?: boolean;
          /** The Hugging Face gating status. */
          gated?: boolean | string;
          /** The number of likes on the Space. */
          likes?: number;
          /** The models linked from the Space. */
          models?: Array<string>;
          /** The datasets linked from the Space. */
          datasets?: Array<string>;
          /** The tags attached to the Space. */
          tags?: Array<string>;
          /** The creation timestamp. */
          createdAt?: string;
          /** The last modification timestamp. */
          lastModified?: string;
          /** The upstream runtime payload. */
          runtime?: Record<string, unknown>;
          /** The parsed Space card metadata. */
          cardData?: Record<string, unknown>;
        }>;
      };
    };
  }
}
