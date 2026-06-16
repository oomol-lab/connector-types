import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new Canny comment on a post or as a reply to a comment. */
    "canny.create_comment": {
      input: {
        /**
         * Unique identifier of the post.
         * @minLength 1
         */
        postID: string;
        /**
         * Unique identifier of the author.
         * @minLength 1
         */
        authorID: string;
        /**
         * Text content of the comment.
         * @minLength 1
         */
        value?: string;
        /**
         * Parent comment ID when creating a reply.
         * @minLength 1
         */
        parentID?: string;
        /** Whether the comment is internal only. */
        internal?: boolean;
        /**
         * Original creation time in ISO 8601 format.
         * @minLength 1
         */
        createdAt?: string;
        /** Image URLs attached to the comment. */
        imageURLs?: Array<string>;
        /** Whether voters of the post should receive notifications. */
        shouldNotifyVoters?: boolean;
      };
      output: {
        /** Identifier of the created comment. */
        comment: {
          /** Unique identifier of the created comment. */
          id: string;
        };
      };
    };
    /** Create a new Canny user or update an existing one by id, userID, or email. */
    "canny.create_or_update_user": {
      input: {
        /**
         * Display name of the user.
         * @minLength 1
         * @maxLength 50
         */
        name: string;
        /**
         * Alias for the user.
         * @minLength 1
         */
        alias?: string;
        /**
         * ISO 8601 timestamp from the source system.
         * @minLength 1
         */
        created?: string;
        /**
         * Avatar URL for the user.
         * @minLength 1
         */
        avatarURL?: string;
        /** Companies associated with the user. */
        companies?: Array<{
          /** Unique identifier of the company. */
          id: string;
          /** Display name of the company. */
          name?: string;
          /** ISO 8601 timestamp when the company was created. */
          created?: string;
          /** Custom fields associated with the company. */
          customFields?: Record<string, unknown>;
          /** Monthly spend for the company. */
          monthlySpend?: number;
          [key: string]: unknown;
        }>;
        /** Custom fields associated with the user. */
        customFields?: Record<string, unknown>;
        /**
         * Canny user ID.
         * @minLength 1
         */
        id?: string;
        /**
         * External user ID from the source system.
         * @minLength 1
         */
        userID?: string;
        /**
         * Email address of the user.
         * @minLength 1
         */
        email?: string;
      };
      output: {
        /** Identifier of the created or updated user. */
        user: {
          /** Unique identifier of the created or updated user. */
          id: string;
        };
      };
    };
    /** Create a new Canny post on a board for a specific author. */
    "canny.create_post": {
      input: {
        /**
         * Unique identifier of the board.
         * @minLength 1
         */
        boardID: string;
        /**
         * Title of the post.
         * @minLength 1
         */
        title: string;
        /**
         * Detailed body of the post.
         * @minLength 1
         */
        details: string;
        /**
         * Unique identifier of the author.
         * @minLength 1
         */
        authorID: string;
        /**
         * Admin authoring the post on behalf of the user.
         * @minLength 1
         */
        byID?: string;
        /**
         * Owner assigned to the post.
         * @minLength 1
         */
        ownerID?: string;
        /**
         * Category assigned to the post.
         * @minLength 1
         */
        categoryID?: string;
        /**
         * Original creation time in ISO 8601 format.
         * @minLength 1
         */
        createdAt?: string;
        /**
         * Estimated timeframe for delivery in MM/YYYY.
         * @minLength 1
         */
        eta?: string;
        /** Whether the ETA should be visible to end users. */
        etaPublic?: boolean;
        /** Image URLs attached to the post. */
        imageURLs?: Array<string>;
        /** Custom fields associated with the post. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** Identifier of the created post. */
        post: {
          /** Unique identifier of the created post. */
          id: string;
          /** URL to the created post. */
          url?: string;
        };
      };
    };
    /** List all Canny boards available to the authenticated workspace. */
    "canny.list_boards": {
      input: Record<string, never>;
      output: {
        /** Boards returned by the request. */
        boards: Array<{
          /** Unique identifier of the board. */
          id: string;
          /** ISO 8601 timestamp when the board was created. */
          created: string;
          /** Whether the board is private. */
          isPrivate: boolean;
          /** Display name of the board. */
          name: string;
          /** Number of posts on the board. */
          postCount: number;
          /** Whether comments are private by default. */
          privateComments: boolean;
          /** Public token associated with the board. */
          token?: string;
          /** URL to the board. */
          url: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Canny comments with optional filtering and pagination. */
    "canny.list_comments": {
      input: {
        /**
         * Unique identifier of the post.
         * @minLength 1
         */
        postID?: string;
        /**
         * Unique identifier of the board.
         * @minLength 1
         */
        boardID?: string;
        /**
         * Unique identifier of the author.
         * @minLength 1
         */
        authorID?: string;
        /**
         * Unique identifier of the company.
         * @minLength 1
         */
        companyID?: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of items to skip before returning results.
         * @minimum 0
         */
        skip?: number;
      };
      output: {
        /** Comments returned by the request. */
        comments: Array<{
          /** Unique identifier of the comment. */
          id: string;
          /** ISO 8601 timestamp when the comment was created. */
          created?: string;
          /** Text content of the comment. */
          value?: string;
          /** Whether the comment is internal. */
          internal?: boolean;
          /** Whether the comment is private. */
          private?: boolean;
          /** Number of likes on the comment. */
          likeCount?: number;
          /** Parent comment ID when this is a reply. */
          parentID?: string | null;
          /** Image URLs attached to the comment. */
          imageURLs?: Array<string>;
          /** Author associated with the comment. */
          author?: {
            /** Unique identifier of the user. */
            id: string;
            /** ISO 8601 timestamp when the user was created. */
            created: string;
            /** Whether the user is a Canny admin. */
            isAdmin: boolean;
            /** Display name of the user. */
            name?: string;
            /** Alias of the user. */
            alias?: string;
            /** Email address of the user. */
            email?: string;
            /** External user ID from the source system. */
            userID?: string;
            /** URL to the user in Canny admin. */
            url?: string;
            /** URL to the user's avatar. */
            avatarURL?: string;
            /** Companies associated with the user. */
            companies?: Array<{
              /** Unique identifier of the company. */
              id: string;
              /** Display name of the company. */
              name?: string;
              /** ISO 8601 timestamp when the company was created. */
              created?: string;
              /** Custom fields associated with the company. */
              customFields?: Record<string, unknown>;
              /** Monthly spend for the company. */
              monthlySpend?: number;
              [key: string]: unknown;
            }>;
            /** Custom fields associated with the user. */
            customFields?: Record<string, unknown>;
            /** ISO 8601 timestamp of the user's last activity. */
            lastActivity?: string;
            [key: string]: unknown;
          };
          /** Board associated with the comment. */
          board?: {
            /** Unique identifier of the board. */
            id: string;
            /** ISO 8601 timestamp when the board was created. */
            created: string;
            /** Whether the board is private. */
            isPrivate: boolean;
            /** Display name of the board. */
            name: string;
            /** Number of posts on the board. */
            postCount: number;
            /** Whether comments are private by default. */
            privateComments: boolean;
            /** Public token associated with the board. */
            token?: string;
            /** URL to the board. */
            url: string;
            [key: string]: unknown;
          };
          /** Post associated with the comment. */
          post?: {
            /** Unique identifier of the post. */
            id: string;
            /** Title of the post. */
            title: string;
            /** Detailed body of the post. */
            details?: string;
            /** ISO 8601 timestamp when the post was created. */
            created?: string;
            /** Current status of the post. */
            status?: string;
            /** Vote score of the post. */
            score?: number;
            /** Number of comments on the post. */
            commentCount?: number;
            /** URL to the post. */
            url: string;
            /** Estimated timeframe for delivery. */
            eta?: string;
            /** Image URLs attached to the post. */
            imageURLs?: Array<string>;
            /** Board associated with the post. */
            board?: {
              /** Unique identifier of the board. */
              id: string;
              /** ISO 8601 timestamp when the board was created. */
              created: string;
              /** Whether the board is private. */
              isPrivate: boolean;
              /** Display name of the board. */
              name: string;
              /** Number of posts on the board. */
              postCount: number;
              /** Whether comments are private by default. */
              privateComments: boolean;
              /** Public token associated with the board. */
              token?: string;
              /** URL to the board. */
              url: string;
              [key: string]: unknown;
            };
            /** Author associated with the post. */
            author?: {
              /** Unique identifier of the user. */
              id: string;
              /** ISO 8601 timestamp when the user was created. */
              created: string;
              /** Whether the user is a Canny admin. */
              isAdmin: boolean;
              /** Display name of the user. */
              name?: string;
              /** Alias of the user. */
              alias?: string;
              /** Email address of the user. */
              email?: string;
              /** External user ID from the source system. */
              userID?: string;
              /** URL to the user in Canny admin. */
              url?: string;
              /** URL to the user's avatar. */
              avatarURL?: string;
              /** Companies associated with the user. */
              companies?: Array<{
                /** Unique identifier of the company. */
                id: string;
                /** Display name of the company. */
                name?: string;
                /** ISO 8601 timestamp when the company was created. */
                created?: string;
                /** Custom fields associated with the company. */
                customFields?: Record<string, unknown>;
                /** Monthly spend for the company. */
                monthlySpend?: number;
                [key: string]: unknown;
              }>;
              /** Custom fields associated with the user. */
              customFields?: Record<string, unknown>;
              /** ISO 8601 timestamp of the user's last activity. */
              lastActivity?: string;
              [key: string]: unknown;
            };
            /** Category associated with the post. */
            category?: Record<string, unknown>;
            /** Tags associated with the post. */
            tags?: Array<Record<string, unknown>>;
            /** Custom fields associated with the post. */
            customFields?: Record<string, unknown>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List Canny posts with optional filtering, search, sorting, and pagination. */
    "canny.list_posts": {
      input: {
        /**
         * Unique identifier of the board.
         * @minLength 1
         */
        boardID?: string;
        /**
         * Unique identifier of the author.
         * @minLength 1
         */
        authorID?: string;
        /**
         * Unique identifier of the company.
         * @minLength 1
         */
        companyID?: string;
        /**
         * Search query applied to post titles and bodies.
         * @minLength 1
         */
        search?: string;
        /** Sort order used when fetching posts. */
        sort?: "newest" | "oldest" | "relevance" | "score" | "statusChanged" | "trending";
        /**
         * Comma-separated list of statuses to filter by.
         * @minLength 1
         */
        status?: string;
        /** Tag IDs used to filter posts. */
        tagIDs?: Array<string>;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of items to skip before returning results.
         * @minimum 0
         */
        skip?: number;
      };
      output: {
        /** Posts returned by the request. */
        posts: Array<{
          /** Unique identifier of the post. */
          id: string;
          /** Title of the post. */
          title: string;
          /** Detailed body of the post. */
          details?: string;
          /** ISO 8601 timestamp when the post was created. */
          created?: string;
          /** Current status of the post. */
          status?: string;
          /** Vote score of the post. */
          score?: number;
          /** Number of comments on the post. */
          commentCount?: number;
          /** URL to the post. */
          url: string;
          /** Estimated timeframe for delivery. */
          eta?: string;
          /** Image URLs attached to the post. */
          imageURLs?: Array<string>;
          /** Board associated with the post. */
          board?: {
            /** Unique identifier of the board. */
            id: string;
            /** ISO 8601 timestamp when the board was created. */
            created: string;
            /** Whether the board is private. */
            isPrivate: boolean;
            /** Display name of the board. */
            name: string;
            /** Number of posts on the board. */
            postCount: number;
            /** Whether comments are private by default. */
            privateComments: boolean;
            /** Public token associated with the board. */
            token?: string;
            /** URL to the board. */
            url: string;
            [key: string]: unknown;
          };
          /** Author associated with the post. */
          author?: {
            /** Unique identifier of the user. */
            id: string;
            /** ISO 8601 timestamp when the user was created. */
            created: string;
            /** Whether the user is a Canny admin. */
            isAdmin: boolean;
            /** Display name of the user. */
            name?: string;
            /** Alias of the user. */
            alias?: string;
            /** Email address of the user. */
            email?: string;
            /** External user ID from the source system. */
            userID?: string;
            /** URL to the user in Canny admin. */
            url?: string;
            /** URL to the user's avatar. */
            avatarURL?: string;
            /** Companies associated with the user. */
            companies?: Array<{
              /** Unique identifier of the company. */
              id: string;
              /** Display name of the company. */
              name?: string;
              /** ISO 8601 timestamp when the company was created. */
              created?: string;
              /** Custom fields associated with the company. */
              customFields?: Record<string, unknown>;
              /** Monthly spend for the company. */
              monthlySpend?: number;
              [key: string]: unknown;
            }>;
            /** Custom fields associated with the user. */
            customFields?: Record<string, unknown>;
            /** ISO 8601 timestamp of the user's last activity. */
            lastActivity?: string;
            [key: string]: unknown;
          };
          /** Category associated with the post. */
          category?: Record<string, unknown>;
          /** Tags associated with the post. */
          tags?: Array<Record<string, unknown>>;
          /** Custom fields associated with the post. */
          customFields?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        hasMore: boolean;
      };
    };
    /** List Canny users with cursor-based pagination. */
    "canny.list_users": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination cursor returned by a previous request.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Users returned by the request. */
        users: Array<{
          /** Unique identifier of the user. */
          id: string;
          /** ISO 8601 timestamp when the user was created. */
          created: string;
          /** Whether the user is a Canny admin. */
          isAdmin: boolean;
          /** Display name of the user. */
          name?: string;
          /** Alias of the user. */
          alias?: string;
          /** Email address of the user. */
          email?: string;
          /** External user ID from the source system. */
          userID?: string;
          /** URL to the user in Canny admin. */
          url?: string;
          /** URL to the user's avatar. */
          avatarURL?: string;
          /** Companies associated with the user. */
          companies?: Array<{
            /** Unique identifier of the company. */
            id: string;
            /** Display name of the company. */
            name?: string;
            /** ISO 8601 timestamp when the company was created. */
            created?: string;
            /** Custom fields associated with the company. */
            customFields?: Record<string, unknown>;
            /** Monthly spend for the company. */
            monthlySpend?: number;
            [key: string]: unknown;
          }>;
          /** Custom fields associated with the user. */
          customFields?: Record<string, unknown>;
          /** ISO 8601 timestamp of the user's last activity. */
          lastActivity?: string;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        hasNextPage: boolean;
        /** Cursor for the next page when another page is available. */
        cursor?: string;
      };
    };
    /** Retrieve a single Canny board by board ID. */
    "canny.retrieve_board": {
      input: {
        /**
         * Unique identifier of the board.
         * @minLength 1
         */
        boardID: string;
      };
      output: {
        /** The requested board. */
        board: {
          /** Unique identifier of the board. */
          id: string;
          /** ISO 8601 timestamp when the board was created. */
          created: string;
          /** Whether the board is private. */
          isPrivate: boolean;
          /** Display name of the board. */
          name: string;
          /** Number of posts on the board. */
          postCount: number;
          /** Whether comments are private by default. */
          privateComments: boolean;
          /** Public token associated with the board. */
          token?: string;
          /** URL to the board. */
          url: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a single Canny post by post ID. */
    "canny.retrieve_post": {
      input: {
        /**
         * Unique identifier of the post.
         * @minLength 1
         */
        postID: string;
      };
      output: {
        /** The requested post. */
        post: {
          /** Unique identifier of the post. */
          id: string;
          /** Title of the post. */
          title: string;
          /** Detailed body of the post. */
          details?: string;
          /** ISO 8601 timestamp when the post was created. */
          created?: string;
          /** Current status of the post. */
          status?: string;
          /** Vote score of the post. */
          score?: number;
          /** Number of comments on the post. */
          commentCount?: number;
          /** URL to the post. */
          url: string;
          /** Estimated timeframe for delivery. */
          eta?: string;
          /** Image URLs attached to the post. */
          imageURLs?: Array<string>;
          /** Board associated with the post. */
          board?: {
            /** Unique identifier of the board. */
            id: string;
            /** ISO 8601 timestamp when the board was created. */
            created: string;
            /** Whether the board is private. */
            isPrivate: boolean;
            /** Display name of the board. */
            name: string;
            /** Number of posts on the board. */
            postCount: number;
            /** Whether comments are private by default. */
            privateComments: boolean;
            /** Public token associated with the board. */
            token?: string;
            /** URL to the board. */
            url: string;
            [key: string]: unknown;
          };
          /** Author associated with the post. */
          author?: {
            /** Unique identifier of the user. */
            id: string;
            /** ISO 8601 timestamp when the user was created. */
            created: string;
            /** Whether the user is a Canny admin. */
            isAdmin: boolean;
            /** Display name of the user. */
            name?: string;
            /** Alias of the user. */
            alias?: string;
            /** Email address of the user. */
            email?: string;
            /** External user ID from the source system. */
            userID?: string;
            /** URL to the user in Canny admin. */
            url?: string;
            /** URL to the user's avatar. */
            avatarURL?: string;
            /** Companies associated with the user. */
            companies?: Array<{
              /** Unique identifier of the company. */
              id: string;
              /** Display name of the company. */
              name?: string;
              /** ISO 8601 timestamp when the company was created. */
              created?: string;
              /** Custom fields associated with the company. */
              customFields?: Record<string, unknown>;
              /** Monthly spend for the company. */
              monthlySpend?: number;
              [key: string]: unknown;
            }>;
            /** Custom fields associated with the user. */
            customFields?: Record<string, unknown>;
            /** ISO 8601 timestamp of the user's last activity. */
            lastActivity?: string;
            [key: string]: unknown;
          };
          /** Category associated with the post. */
          category?: Record<string, unknown>;
          /** Tags associated with the post. */
          tags?: Array<Record<string, unknown>>;
          /** Custom fields associated with the post. */
          customFields?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a single Canny user by id, userID, or email. */
    "canny.retrieve_user": {
      input: {
        /**
         * Canny user ID.
         * @minLength 1
         */
        id?: string;
        /**
         * External user ID from the source system.
         * @minLength 1
         */
        userID?: string;
        /**
         * Email address of the user.
         * @minLength 1
         */
        email?: string;
      };
      output: {
        /** The requested user. */
        user: {
          /** Unique identifier of the user. */
          id: string;
          /** ISO 8601 timestamp when the user was created. */
          created: string;
          /** Whether the user is a Canny admin. */
          isAdmin: boolean;
          /** Display name of the user. */
          name?: string;
          /** Alias of the user. */
          alias?: string;
          /** Email address of the user. */
          email?: string;
          /** External user ID from the source system. */
          userID?: string;
          /** URL to the user in Canny admin. */
          url?: string;
          /** URL to the user's avatar. */
          avatarURL?: string;
          /** Companies associated with the user. */
          companies?: Array<{
            /** Unique identifier of the company. */
            id: string;
            /** Display name of the company. */
            name?: string;
            /** ISO 8601 timestamp when the company was created. */
            created?: string;
            /** Custom fields associated with the company. */
            customFields?: Record<string, unknown>;
            /** Monthly spend for the company. */
            monthlySpend?: number;
            [key: string]: unknown;
          }>;
          /** Custom fields associated with the user. */
          customFields?: Record<string, unknown>;
          /** ISO 8601 timestamp of the user's last activity. */
          lastActivity?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update mutable fields on an existing Canny post. */
    "canny.update_post": {
      input: {
        /**
         * Unique identifier of the post.
         * @minLength 1
         */
        postID: string;
        /**
         * Updated title of the post.
         * @minLength 1
         */
        title?: string;
        /**
         * Updated body of the post.
         * @minLength 1
         */
        details?: string;
        /**
         * Updated ETA in MM/YYYY format.
         * @minLength 1
         */
        eta?: string;
        /** Whether the ETA should be visible to end users. */
        etaPublic?: boolean;
        /** Updated image URLs for the post. */
        imageURLs?: Array<string>;
        /** Updated custom fields for the post. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** Whether the post update succeeded. */
        success: boolean;
      };
    };
  }
}
