import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
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
