import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List public content in one collection owned by the current Access Secret account. */
    "zhihu.favlist_contents": {
      input: {
        /** The collection URL token. */
        favlistUrlToken: number;
        /**
         * The pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The number of items to return, up to 50.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
      };
      output: {
        /** The upstream response code. */
        Code?: number;
        /** The upstream response message. */
        Message?: string;
        /** The response data. */
        Data?: {
          /** Collection content items. */
          Items?: Array<{
            /** The content type. */
            ContentType?: string;
            /**
             * The content URL.
             * @format uri
             */
            Url?: string;
            /** The creation Unix timestamp in seconds. */
            CreatedAt?: number;
            /** The number of likes. */
            LikeCount?: number;
            /** The number of comments. */
            CommentCount?: number;
            /** The number of favorites. */
            FavoriteCount?: number;
            /** The content title. */
            Title?: string;
            /** The content summary. */
            Summary?: string;
            /** The favorite Unix timestamp in seconds. */
            FavTime?: number;
            /** The collections containing this item. */
            Favlists?: Array<Record<string, unknown>>;
            /** The content author when available. */
            Author?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** Pagination information returned by Zhihu. */
          Paging?: {
            /** Whether this is the last page. */
            IsEnd?: boolean;
            /** The opaque offset for the next page. */
            NextOffset?: string;
            /** The total number of records. */
            Totals?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the status and temporary result URL for a Zhihu PDF parsing task. */
    "zhihu.get_pdf_parse": {
      input: {
        /**
         * The PDF parsing task identifier.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The upstream response code. */
        Code?: number;
        /** The upstream response message. */
        Message?: string;
        /** The current asynchronous task state. */
        Data?: {
          /** The task identifier. */
          task_id?: string;
          /** The task status. */
          task_status?: "pending" | "running" | "succeeded" | "failed";
          /** The task progress from zero to one. */
          progress?: number;
          /** The completed task result. */
          result?: Record<string, unknown> | null;
          /** The task error when failed. */
          error?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the status and temporary PPTX download URL for a PPT generation task. */
    "zhihu.get_ppt_generation": {
      input: {
        /**
         * The PPT generation task identifier.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The upstream response code. */
        Code?: number;
        /** The upstream response message. */
        Message?: string;
        /** The current asynchronous task state. */
        Data?: {
          /** The task identifier. */
          task_id?: string;
          /** The task status. */
          task_status?: "pending" | "running" | "succeeded" | "failed";
          /** The task progress from zero to one. */
          progress?: number;
          /** The completed task result. */
          result?: Record<string, unknown> | null;
          /** The task error when failed. */
          error?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search the global web index exposed by Zhihu Open Platform. */
    "zhihu.global_search": {
      input: {
        /**
         * The search query keyword.
         * @minLength 1
         */
        query: string;
        /**
         * The number of global search results to return, up to 20.
         * @minimum 1
         * @maximum 20
         */
        count?: number;
        /**
         * Advanced filter expression for host or publish_time constraints.
         * @minLength 1
         */
        filter?: string;
        /** The search index database to query. */
        searchDB?: "all" | "realtime" | "static";
      };
      output: {
        /** The upstream response code. */
        Code?: number;
        /** The upstream response message. */
        Message?: string;
        /** The Zhihu global search response data. */
        Data?: {
          /** Whether more results are available. */
          HasMore?: boolean;
          /** Search result items. */
          Items?: Array<{
            /** The content title. */
            Title?: string;
            /** The content type, such as Answer or Article. */
            ContentType?: string;
            /** The content identifier. */
            ContentID?: string;
            /** The content excerpt. Highlighted fragments may include em tags. */
            ContentText?: string;
            /**
             * The source URL with Zhihu Open Platform attribution parameters.
             * @format uri
             */
            Url?: string;
            /** The number of comments. */
            CommentCount?: number;
            /** The number of upvotes. */
            VoteUpCount?: number;
            /** The author display name. */
            AuthorName?: string;
            /** The author avatar URL. */
            AuthorAvatar?: string;
            /** The author certification badge image URL. */
            AuthorBadge?: string;
            /** The author certification badge text. */
            AuthorBadgeText?: string;
            /** The published or last edited Unix timestamp in seconds. */
            EditTime?: number;
            /** Selected comments returned for this content item. */
            CommentInfoList?: Array<{
              /** The comment content. */
              Content?: string;
              [key: string]: unknown;
            }>;
            /** The content authority level from 1 to 4. */
            AuthorityLevel?: string;
            /** The ranking score returned by Zhihu Search. */
            RankingScore?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the current Zhihu hot list with titles, links, thumbnails, and summaries. */
    "zhihu.hot_list": {
      input: {
        /**
         * The number of hot list items to return, up to 30.
         * @minimum 1
         * @maximum 30
         */
        limit?: number;
      };
      output: {
        /** The upstream response code. */
        Code?: number;
        /** The upstream response message. */
        Message?: string;
        /** The Zhihu hot list response data. */
        Data?: {
          /** The number of returned hot list items. */
          Total?: number;
          /** Hot list items. */
          Items?: Array<{
            /** The hot list title. */
            Title?: string;
            /**
             * The Zhihu URL for the hot list item.
             * @format uri
             */
            Url?: string;
            /** The thumbnail image URL, or an empty string when no image is available. */
            ThumbnailUrl?: string;
            /** The item summary, or an empty string when no summary is available. */
            Summary?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List content in a Zhida knowledge base using cursor pagination. */
    "zhihu.knowledge_base_items": {
      input: {
        /**
         * The knowledge base identifier.
         * @minLength 1
         */
        knowledgeBaseId: string;
        /** The opaque cursor returned by the previous page. */
        cursor?: string;
        /**
         * The number of items to return, up to 20.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
      };
      output: {
        /** The upstream response code. */
        Code?: number;
        /** The upstream response message. */
        Message?: string;
        /** The response data. */
        Data?: {
          /** Knowledge base content items. */
          Items?: Array<Record<string, unknown>>;
          /** The total number of content items. */
          Total?: number;
          /** Whether another page is available. */
          HasMore?: boolean;
          /** The opaque cursor for the next page. */
          NextCursor?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Zhida knowledge bases created by or subscribed to by the current account. */
    "zhihu.knowledge_bases": {
      input: {
        /** The relationship used to filter knowledge bases. */
        scope?: "all" | "created" | "subscribed";
      };
      output: {
        /** The upstream response code. */
        Code?: number;
        /** The upstream response message. */
        Message?: string;
        /** The response data. */
        Data?: {
          /** Knowledge bases. */
          Items?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Download a file from an HTTP URL and upload it into a Zhida knowledge base. */
    "zhihu.knowledge_file_upload": {
      input: {
        /**
         * The HTTP or HTTPS URL whose file should be uploaded.
         * @format uri
         */
        fileUrl: string;
        /**
         * The file name, including a supported extension.
         * @minLength 1
         */
        fileName: string;
        /**
         * The target knowledge base identifier.
         * @minLength 1
         */
        knowledgeBaseId?: string;
      };
      output: {
        /** The upstream response code. */
        Code?: number;
        /** The upstream response message. */
        Message?: string;
        /** The response data. */
        Data?: {
          /** The knowledge base that received the file. */
          KnowledgeBaseID?: string;
          /** The uploaded content identifier. */
          RecallContentID?: string;
          /** The normalized uploaded file name. */
          FileName?: string;
          /** The uploaded file size in bytes. */
          FileSize?: number;
          /** The parsed content title when available. */
          Title?: string;
          /** The parsed content summary when available. */
          Abstract?: string;
          /** The source file URL returned by Zhihu when available. */
          OriginUrl?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve relevant document fragments from Zhida knowledge bases with RAG search. */
    "zhihu.knowledge_search": {
      input: ({
        /**
         * The retrieval question.
         * @minLength 1
         */
        query: string;
        /**
         * Knowledge base identifiers to search. Required when recallScopes is omitted.
         * @minItems 1
         */
        knowledgeBaseIds?: Array<string>;
        /**
         * Built-in recall scopes to search. Required when knowledgeBaseIds is omitted.
         * @minItems 1
         */
        recallScopes?: Array<"personal" | "subscription" | "public">;
        /**
         * The number of documents to return, up to 10.
         * @minimum 1
         * @maximum 10
         */
        limit?: number;
      }) & (Record<string, unknown>);
      output: {
        /** The upstream response code. */
        Code?: number;
        /** The upstream response message. */
        Message?: string;
        /** The response data. */
        Data?: {
          /** Relevant documents and fragments. */
          Items?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Download a PDF from an HTTP URL, upload it to Zhihu, and submit an asynchronous parse task. */
    "zhihu.submit_pdf_parse": {
      input: {
        /**
         * The HTTP or HTTPS URL of a PDF file up to 100 MB.
         * @format uri
         */
        fileUrl: string;
        /**
         * The PDF file name, ending in .pdf.
         * @minLength 1
         */
        fileName: string;
        /** A key that makes repeated identical task submissions idempotent. */
        idempotencyKey?: string;
      };
      output: {
        /** The upstream response code. */
        Code?: number;
        /** The upstream response message. */
        Message?: string;
        /** The response data. */
        Data?: {
          /** The PDF parsing task identifier. */
          task_id?: string;
          /** The initial task status. */
          task_status?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Submit a Zhihu answer or article URL for asynchronous PPTX generation. */
    "zhihu.submit_ppt_generation": {
      input: {
        /**
         * A supported Zhihu answer or article URL.
         * @format uri
         */
        resourceUrl: string;
        /**
         * The requested number of slides, from 6 to 21.
         * @minimum 6
         * @maximum 21
         */
        numPages: number;
        /** A key that makes repeated identical submissions idempotent. */
        idempotencyKey?: string;
      };
      output: {
        /** The upstream response code. */
        Code?: number;
        /** The upstream response message. */
        Message?: string;
        /** The response data. */
        Data?: {
          /** The PPT generation task identifier. */
          task_id?: string;
          /** The initial task status. */
          task_status?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List the current Access Secret owner's recently favorited public content. */
    "zhihu.user_collections": {
      input: {
        /**
         * The number of recent favorites to return, up to 50.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
      };
      output: {
        /** The upstream response code. */
        Code?: number;
        /** The upstream response message. */
        Message?: string;
        /** The response data. */
        Data?: {
          /** Recently favorited content. */
          Items?: Array<{
            /** The content type. */
            ContentType?: string;
            /**
             * The content URL.
             * @format uri
             */
            Url?: string;
            /** The creation Unix timestamp in seconds. */
            CreatedAt?: number;
            /** The number of likes. */
            LikeCount?: number;
            /** The number of comments. */
            CommentCount?: number;
            /** The number of favorites. */
            FavoriteCount?: number;
            /** The content title. */
            Title?: string;
            /** The content summary. */
            Summary?: string;
            /** The favorite Unix timestamp in seconds. */
            FavTime?: number;
            /** The collections containing this item. */
            Favlists?: Array<Record<string, unknown>>;
            /** The content author when available. */
            Author?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List the current Access Secret owner's public Zhihu creations. */
    "zhihu.user_contents": {
      input: {
        /** The content type to include. */
        contentType: "all" | "answer" | "article" | "zvideo" | "pin" | "question";
        /**
         * The pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The number of items to return, up to 50.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /** The field used to sort results. */
        sortField?: "like_count" | "ts";
        /** The result sort direction. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** The upstream response code. */
        Code?: number;
        /** The upstream response message. */
        Message?: string;
        /** The response data. */
        Data?: {
          /** User creation items. */
          Items?: Array<{
            /** The content type. */
            ContentType?: string;
            /**
             * The content URL.
             * @format uri
             */
            Url?: string;
            /** The creation Unix timestamp in seconds. */
            CreatedAt?: number;
            /** The number of likes. */
            LikeCount?: number;
            /** The number of comments. */
            CommentCount?: number;
            /** The number of favorites. */
            FavoriteCount?: number;
            /** The content title. */
            Title?: string;
            /** The content summary. */
            Summary?: string;
            [key: string]: unknown;
          }>;
          /** Pagination information returned by Zhihu. */
          Paging?: {
            /** Whether this is the last page. */
            IsEnd?: boolean;
            /** The opaque offset for the next page. */
            NextOffset?: string;
            /** The total number of records. */
            Totals?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List the current Access Secret owner's public Zhihu collections. */
    "zhihu.user_favlists": {
      input: {
        /**
         * The number of collections to return, up to 50.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
      };
      output: {
        /** The upstream response code. */
        Code?: number;
        /** The upstream response message. */
        Message?: string;
        /** The response data. */
        Data?: {
          /** Zhihu collections. */
          Items?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List the current Access Secret owner's public Zhihu followees. */
    "zhihu.user_followees": {
      input: {
        /**
         * The pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The number of followees to return, up to 50.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
      };
      output: {
        /** The upstream response code. */
        Code?: number;
        /** The upstream response message. */
        Message?: string;
        /** The response data. */
        Data?: {
          /** Followed users. */
          Items?: Array<Record<string, unknown>>;
          /** Pagination information returned by Zhihu. */
          Paging?: {
            /** Whether this is the last page. */
            IsEnd?: boolean;
            /** The opaque offset for the next page. */
            NextOffset?: string;
            /** The total number of records. */
            Totals?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a non-streaming Zhihu Zhida chat completion. */
    "zhihu.zhida": {
      input: {
        /** The Zhida model tier. */
        model: "zhida-fast-1p5" | "zhida-thinking-1p5" | "zhida-agent";
        /**
         * Conversation messages to send to Zhida.
         * @minItems 1
         */
        messages: Array<{
          /** The message role. */
          role: "system" | "user" | "assistant";
          /**
           * The message content.
           * @minLength 1
           */
          content: string;
        }>;
      };
      output: {
        /** The completion identifier. */
        id?: string;
        /** The response object type. */
        object?: string;
        /** The creation Unix timestamp in seconds. */
        created?: number;
        /** The model that produced the response. */
        model?: string;
        /** Completion choices. */
        choices?: Array<{
          /** The choice index. */
          index?: number;
          /** The assistant message returned by Zhida. */
          message?: {
            /** The returned message role. */
            role?: string;
            /** The model reasoning content when returned. */
            reasoning_content?: string;
            /** The final answer content. */
            content?: string;
            [key: string]: unknown;
          };
          /** The reason the choice finished. */
          finish_reason?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search Zhihu content and return matching questions, answers, and articles. */
    "zhihu.zhihu_search": {
      input: {
        /**
         * The search query keyword.
         * @minLength 1
         */
        query: string;
        /**
         * The number of Zhihu search results to return, up to 10.
         * @minimum 1
         * @maximum 10
         */
        count?: number;
      };
      output: {
        /** The upstream response code. */
        Code?: number;
        /** The upstream response message. */
        Message?: string;
        /** The Zhihu site search response data. */
        Data?: {
          /** Whether more results are available. Zhihu currently returns false. */
          HasMore?: boolean;
          /** The search request identifier. */
          SearchHashId?: string;
          /** Search result items. */
          Items?: Array<{
            /** The content title. */
            Title?: string;
            /** The content type, such as Answer or Article. */
            ContentType?: string;
            /** The content identifier. */
            ContentID?: string;
            /** The content excerpt. Highlighted fragments may include em tags. */
            ContentText?: string;
            /**
             * The source URL with Zhihu Open Platform attribution parameters.
             * @format uri
             */
            Url?: string;
            /** The number of comments. */
            CommentCount?: number;
            /** The number of upvotes. */
            VoteUpCount?: number;
            /** The author display name. */
            AuthorName?: string;
            /** The author avatar URL. */
            AuthorAvatar?: string;
            /** The author certification badge image URL. */
            AuthorBadge?: string;
            /** The author certification badge text. */
            AuthorBadgeText?: string;
            /** The published or last edited Unix timestamp in seconds. */
            EditTime?: number;
            /** Selected comments returned for this content item. */
            CommentInfoList?: Array<{
              /** The comment content. */
              Content?: string;
              [key: string]: unknown;
            }>;
            /** The content authority level from 1 to 4. */
            AuthorityLevel?: string;
            /** The ranking score returned by Zhihu Search. */
            RankingScore?: number;
            [key: string]: unknown;
          }>;
          /** The reason returned when the result set is empty. */
          EmptyReason?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
