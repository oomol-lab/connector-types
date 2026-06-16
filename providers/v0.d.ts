import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Assign an existing v0 chat to a project container. */
    "v0.assign_project_to_chat": {
      input: {
        /** v0 project ID. */
        projectId: string;
        /** v0 chat ID. */
        chatId: string;
      };
      output: {
        /** Assignment result returned by v0. */
        assignment: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Whether the chat was assigned to the project. */
          assigned?: boolean;
        };
      };
    };
    /** Create a new v0 chat and immediately send the first message. */
    "v0.create_chat": {
      input: {
        /** Initial user message to send to v0. */
        message: string;
        /** v0 project ID. */
        projectId?: string;
        /** Chat visibility setting. */
        chatPrivacy?: "public" | "private" | "team" | "team-edit" | "unlisted";
        /** How v0 should return the result. `sync` waits for the full response, `async` returns the accepted task state. */
        responseMode?: "sync" | "async";
        /** Chat metadata to attach. */
        metadata?: Record<string, unknown>;
        /** Model ID to use when supported by v0. */
        modelId?: string;
        /** Model configuration overrides. */
        modelConfiguration?: Record<string, unknown>;
        /** Design system ID to reuse. */
        designSystemId?: string;
        /** MCP server IDs to attach. */
        mcpServerIds?: Array<string>;
        /** Attached skill IDs. */
        attachedSkillIds?: Array<string>;
        /** Optional follow-up action. */
        action?: {
          /** Follow-up action type. */
          type: "fix-with-v0";
        };
      };
      output: {
        /** The created chat. */
        chat: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Chat title or display name. */
          name?: string;
          /** Chat visibility setting. */
          privacy?: string;
          /** Whether the chat is marked as favorite. */
          favorite?: boolean;
          /** Author user ID. */
          authorId?: string;
          /** Linked project ID. */
          projectId?: string;
          /** Linked Vercel project ID. */
          vercelProjectId?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** API URL for the chat. */
          apiUrl?: string;
          /** Web URL for the chat. */
          webUrl?: string;
          /** Chat metadata payload returned by v0. */
          metadata?: Record<string, unknown>;
          /** Latest version attached to the chat. */
          latestVersion?: {
            /** Unique identifier returned by v0. */
            id: string;
            /** Object type returned by v0. */
            object?: string;
            /** Version generation status. */
            status?: string;
            /** Preview URL for the version. */
            demoUrl?: string;
            /** Screenshot URL for the version. */
            screenshotUrl?: string;
            /** ISO 8601 timestamp returned by v0. */
            createdAt?: string;
            /** ISO 8601 timestamp returned by v0. */
            updatedAt?: string;
            /** Files included in the version. */
            files?: Array<{
              /** Object type returned by v0. */
              object?: string;
              /** File path. */
              name?: string;
              /** File content. */
              content?: string;
              /** Whether the file is locked in v0. */
              locked?: boolean;
              /** Origin of the file. */
              origin?: string;
              /** Programming language detected by v0. */
              language?: string;
              /** Additional file metadata returned by v0. */
              metadata?: Record<string, unknown>;
            }>;
          };
          /** Messages currently returned with the chat. */
          messages?: Array<{
            /** Unique identifier returned by v0. */
            id: string;
            /** Object type returned by v0. */
            object?: string;
            /** Owning chat ID. */
            chatId?: string;
            /** Message role such as `user` or `assistant`. */
            role?: string;
            /** Message type reported by v0. */
            type?: string;
            /** Message text content. */
            content?: string;
            /** Why the generation finished. */
            finishReason?: string;
            /** ISO 8601 timestamp returned by v0. */
            createdAt?: string;
            /** ISO 8601 timestamp returned by v0. */
            updatedAt?: string;
            /** API URL for the message. */
            apiUrl?: string;
            /** Model configuration returned by v0. */
            modelConfiguration?: Record<string, unknown>;
            /** Attachments associated with the message. */
            attachments?: Array<{
              /** Attachment URL. */
              url?: string;
              /** Attachment file name. */
              name?: string;
              /** Attachment MIME type. */
              contentType?: string;
              /** Attachment size in bytes. */
              size?: number;
              /** Inline attachment content when v0 returns it. */
              content?: string;
              /** Attachment type reported by v0. */
              type?: string;
            }>;
            /** Experimental rich content payload returned by v0. */
            experimentalContent?: unknown;
          }>;
        };
      };
    };
    /** Create a deployment for a specific v0 chat version. */
    "v0.create_deployment": {
      input: {
        /** v0 project ID. */
        projectId: string;
        /** v0 chat ID. */
        chatId: string;
        /** v0 version ID. */
        versionId: string;
      };
      output: {
        /** The created deployment. */
        deployment: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Inspector URL for the deployment. */
          inspectorUrl?: string;
          /** Linked chat ID. */
          chatId?: string;
          /** Linked project ID. */
          projectId?: string;
          /** Linked version ID. */
          versionId?: string;
          /** API URL for the deployment. */
          apiUrl?: string;
          /** Public deployment URL. */
          webUrl?: string;
        };
      };
    };
    /** Create one or more environment variables on a v0 project. */
    "v0.create_env_vars": {
      input: {
        /** v0 project ID. */
        projectId: string;
        /** When true, request decrypted environment variable values. */
        decrypted?: boolean;
        /** When true, allow overwriting keys that already exist. */
        upsert?: boolean;
        /**
         * Environment variables to create.
         * @minItems 1
         */
        environmentVariables: Array<{
          /** Environment variable key. */
          key: string;
          /** Environment variable value. */
          value: string;
        }>;
      };
      output: {
        /** The created environment variables. */
        envVars: Array<{
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Environment variable key. */
          key?: string;
          /** Environment variable value. */
          value?: string;
          /** Whether the returned value is decrypted. */
          decrypted?: boolean;
          /** Creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last update timestamp in milliseconds. */
          updatedAt?: number;
          /** Whether the environment variable was deleted. */
          deleted?: boolean;
        }>;
      };
    };
    /** Create a webhook hook in v0 for chat or message events. */
    "v0.create_hook": {
      input: {
        /** Webhook display name. */
        name: string;
        /** Target URL that receives webhook payloads. */
        url: string;
        /**
         * Event types to subscribe to.
         * @minItems 1
         */
        events: Array<"chat.created" | "chat.updated" | "chat.deleted" | "message.created" | "message.updated" | "message.deleted" | "message.finished">;
        /** v0 chat ID. */
        chatId?: string;
        /** v0 project ID. */
        projectId?: string;
      };
      output: {
        /** The created hook. */
        hook: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Webhook display name. */
          name?: string;
          /** Webhook events subscribed in v0. */
          events?: Array<string>;
          /** Optional chat ID scoped to the hook. */
          chatId?: string;
          /** Optional project ID scoped to the hook. */
          projectId?: string;
          /** Target URL that receives webhook payloads. */
          url?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** Optional description returned by v0. */
          description?: string;
          /** Whether the hook is currently active. */
          active?: boolean;
        };
      };
    };
    /** Create a new v0 project container for chats, environment variables, and deployments. */
    "v0.create_project": {
      input: {
        /** Project name. */
        name: string;
        /** Project description. */
        description?: string;
        /** Project icon or emoji. */
        icon?: string;
        /** Project-level instructions for v0. */
        instructions?: string;
        /** Project visibility setting. */
        privacy?: "private" | "team";
        /** Linked Vercel project ID. */
        vercelProjectId?: string;
        /** Environment variables to create together with the project. */
        environmentVariables?: Array<{
          /** Environment variable key. */
          key: string;
          /** Environment variable value. */
          value: string;
        }>;
      };
      output: {
        /** The created project. */
        project: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Project name. */
          name?: string;
          /** Project description. */
          description?: string;
          /** Project-level instructions for v0. */
          instructions?: string;
          /** Project icon or emoji. */
          icon?: string;
          /** Project visibility setting. */
          privacy?: string;
          /** Linked Vercel project ID. */
          vercelProjectId?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** API URL for the project. */
          apiUrl?: string;
          /** Web URL for the project. */
          webUrl?: string;
          /** Chats currently linked to the project. */
          chats?: Array<{
            /** Unique identifier returned by v0. */
            id: string;
            /** Object type returned by v0. */
            object?: string;
            /** Chat title or display name. */
            name?: string;
            /** Chat visibility setting. */
            privacy?: string;
            /** Whether the chat is marked as favorite. */
            favorite?: boolean;
            /** Author user ID. */
            authorId?: string;
            /** Linked project ID. */
            projectId?: string;
            /** Linked Vercel project ID. */
            vercelProjectId?: string;
            /** ISO 8601 timestamp returned by v0. */
            createdAt?: string;
            /** ISO 8601 timestamp returned by v0. */
            updatedAt?: string;
            /** API URL for the chat. */
            apiUrl?: string;
            /** Web URL for the chat. */
            webUrl?: string;
          }>;
        };
      };
    };
    /** Create and link a Vercel project from a v0 project. */
    "v0.create_vercel_project": {
      input: {
        /** v0 project ID. */
        projectId: string;
        /** Name to assign to the linked Vercel project. */
        name: string;
      };
      output: {
        /** The linked Vercel project returned by v0. */
        vercelProject: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Linked Vercel project name. */
          name?: string;
        };
      };
    };
    /** Delete a v0 chat by chat ID. */
    "v0.delete_chat": {
      input: {
        /** v0 chat ID. */
        chatId: string;
      };
      output: {
        /** Deletion result returned by v0. */
        deletedChat: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Whether the resource was deleted. */
          deleted?: boolean;
        };
      };
    };
    /** Delete one or more environment variables from a v0 project. */
    "v0.delete_env_vars": {
      input: {
        /** v0 project ID. */
        projectId: string;
        /**
         * Environment variable IDs to delete.
         * @minItems 1
         */
        environmentVariableIds: Array<string>;
      };
      output: {
        /** Deletion results returned by v0. */
        deletedEnvVars: Array<{
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Environment variable key. */
          key?: string;
          /** Environment variable value. */
          value?: string;
          /** Whether the returned value is decrypted. */
          decrypted?: boolean;
          /** Creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last update timestamp in milliseconds. */
          updatedAt?: number;
          /** Whether the environment variable was deleted. */
          deleted?: boolean;
        }>;
      };
    };
    /** Delete a webhook hook by hook ID. */
    "v0.delete_hook": {
      input: {
        /** v0 hook ID. */
        hookId: string;
      };
      output: {
        /** Deletion result returned by v0. */
        deletedHook: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Whether the resource was deleted. */
          deleted?: boolean;
        };
      };
    };
    /** Delete a v0 project by project ID. */
    "v0.delete_project": {
      input: {
        /** v0 project ID. */
        projectId: string;
      };
      output: {
        /** Deletion result returned by v0. */
        deletedProject: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Whether the resource was deleted. */
          deleted?: boolean;
        };
      };
    };
    /** Mark or unmark a v0 chat as favorite. */
    "v0.favorite_chat": {
      input: {
        /** v0 chat ID. */
        chatId: string;
        /** Whether the chat should be favorited. */
        isFavorite: boolean;
      };
      output: {
        /** Favorite status returned by v0. */
        favorite: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Whether the chat is now marked as favorite. */
          favorited?: boolean;
        };
      };
    };
    /** List chats in the connected v0 workspace with optional filters. */
    "v0.find_chats": {
      input: {
        /** v0 project ID. */
        projectId?: string;
        /** Filter by linked Vercel project ID. */
        vercelProjectId?: string;
        /** Filter by Git branch. */
        branch?: string;
        /** Filter by favorite status. */
        isFavorite?: boolean;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Offset for paginated list results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Chats returned by v0. */
        chats: Array<{
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Chat title or display name. */
          name?: string;
          /** Chat visibility setting. */
          privacy?: string;
          /** Whether the chat is marked as favorite. */
          favorite?: boolean;
          /** Author user ID. */
          authorId?: string;
          /** Linked project ID. */
          projectId?: string;
          /** Linked Vercel project ID. */
          vercelProjectId?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** API URL for the chat. */
          apiUrl?: string;
          /** Web URL for the chat. */
          webUrl?: string;
        }>;
        /** Pagination metadata returned by v0. */
        pagination?: {
          /** Whether more results are available. */
          hasMore?: boolean;
          /** Cursor for the next page, or null when there are no more results. */
          nextCursor?: string | null;
          /** Full URL for the next page when v0 returns one. */
          nextUrl?: string | null;
          /** Offset for the next page. */
          offset?: number;
          /** Total number of items reported by v0. */
          total?: number;
          /** Number of items in the current page. */
          count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get the current error summary for a v0 deployment. */
    "v0.find_deployment_errors": {
      input: {
        /** v0 deployment ID. */
        deploymentId: string;
      };
      output: {
        /** Deployment error details. */
        errors: {
          /** Short deployment error summary. */
          error?: string;
          /** Full deployment error text. */
          fullErrorText?: string;
          /** Deployment error type. */
          errorType?: string;
          /** Formatted deployment error message. */
          formattedError?: string;
        };
      };
    };
    /** List logs for a v0 deployment, optionally continuing from a previous timestamp. */
    "v0.find_deployment_logs": {
      input: {
        /** v0 deployment ID. */
        deploymentId: string;
        /** Only return logs after this timestamp. */
        since?: number;
      };
      output: {
        /** Deployment logs returned by v0. */
        logs: Array<{
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Owning deployment ID. */
          deploymentId?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** Log text. */
          text?: string;
          /** Log type reported by v0. */
          type?: string;
          /** Log level reported by v0. */
          level?: string;
        }>;
        /** Timestamp token for the next log query. */
        nextSince?: number;
      };
    };
    /** List deployments for a specific project, chat, and version combination. */
    "v0.find_deployments": {
      input: {
        /** v0 project ID. */
        projectId: string;
        /** v0 chat ID. */
        chatId: string;
        /** v0 version ID. */
        versionId: string;
      };
      output: {
        /** Deployments returned by v0. */
        deployments: Array<{
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Inspector URL for the deployment. */
          inspectorUrl?: string;
          /** Linked chat ID. */
          chatId?: string;
          /** Linked project ID. */
          projectId?: string;
          /** Linked version ID. */
          versionId?: string;
          /** API URL for the deployment. */
          apiUrl?: string;
          /** Public deployment URL. */
          webUrl?: string;
        }>;
      };
    };
    /** List environment variables configured on a v0 project. */
    "v0.find_env_vars": {
      input: {
        /** v0 project ID. */
        projectId: string;
        /** When true, request decrypted environment variable values. */
        decrypted?: boolean;
      };
      output: {
        /** Environment variables returned by v0. */
        envVars: Array<{
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Environment variable key. */
          key?: string;
          /** Environment variable value. */
          value?: string;
          /** Whether the returned value is decrypted. */
          decrypted?: boolean;
          /** Creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last update timestamp in milliseconds. */
          updatedAt?: number;
          /** Whether the environment variable was deleted. */
          deleted?: boolean;
        }>;
      };
    };
    /** List webhook hooks configured in the connected v0 workspace. */
    "v0.find_hooks": {
      input: Record<string, never>;
      output: {
        /** Hooks returned by v0. */
        hooks: Array<{
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Webhook display name. */
          name?: string;
          /** Webhook events subscribed in v0. */
          events?: Array<string>;
          /** Optional chat ID scoped to the hook. */
          chatId?: string;
          /** Optional project ID scoped to the hook. */
          projectId?: string;
          /** Target URL that receives webhook payloads. */
          url?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** Optional description returned by v0. */
          description?: string;
          /** Whether the hook is currently active. */
          active?: boolean;
        }>;
      };
    };
    /** List messages for a v0 chat. */
    "v0.find_messages": {
      input: {
        /** v0 chat ID. */
        chatId: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Cursor returned by a previous v0 list response. */
        cursor?: string;
      };
      output: {
        /** Messages returned by v0. */
        messages: Array<{
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Owning chat ID. */
          chatId?: string;
          /** Message role such as `user` or `assistant`. */
          role?: string;
          /** Message type reported by v0. */
          type?: string;
          /** Message text content. */
          content?: string;
          /** Why the generation finished. */
          finishReason?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** API URL for the message. */
          apiUrl?: string;
          /** Model configuration returned by v0. */
          modelConfiguration?: Record<string, unknown>;
          /** Attachments associated with the message. */
          attachments?: Array<{
            /** Attachment URL. */
            url?: string;
            /** Attachment file name. */
            name?: string;
            /** Attachment MIME type. */
            contentType?: string;
            /** Attachment size in bytes. */
            size?: number;
            /** Inline attachment content when v0 returns it. */
            content?: string;
            /** Attachment type reported by v0. */
            type?: string;
          }>;
          /** Experimental rich content payload returned by v0. */
          experimentalContent?: unknown;
        }>;
        /** Pagination metadata returned by v0. */
        pagination?: {
          /** Whether more results are available. */
          hasMore?: boolean;
          /** Cursor for the next page, or null when there are no more results. */
          nextCursor?: string | null;
          /** Full URL for the next page when v0 returns one. */
          nextUrl?: string | null;
          /** Offset for the next page. */
          offset?: number;
          /** Total number of items reported by v0. */
          total?: number;
          /** Number of items in the current page. */
          count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List v0 projects available to the connected account. */
    "v0.find_projects": {
      input: {
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Offset for paginated list results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Projects returned by v0. */
        projects: Array<{
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Project name. */
          name?: string;
          /** Project description. */
          description?: string;
          /** Project-level instructions for v0. */
          instructions?: string;
          /** Project icon or emoji. */
          icon?: string;
          /** Project visibility setting. */
          privacy?: string;
          /** Linked Vercel project ID. */
          vercelProjectId?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** API URL for the project. */
          apiUrl?: string;
          /** Web URL for the project. */
          webUrl?: string;
          /** Chats currently linked to the project. */
          chats?: Array<{
            /** Unique identifier returned by v0. */
            id: string;
            /** Object type returned by v0. */
            object?: string;
            /** Chat title or display name. */
            name?: string;
            /** Chat visibility setting. */
            privacy?: string;
            /** Whether the chat is marked as favorite. */
            favorite?: boolean;
            /** Author user ID. */
            authorId?: string;
            /** Linked project ID. */
            projectId?: string;
            /** Linked Vercel project ID. */
            vercelProjectId?: string;
            /** ISO 8601 timestamp returned by v0. */
            createdAt?: string;
            /** ISO 8601 timestamp returned by v0. */
            updatedAt?: string;
            /** API URL for the chat. */
            apiUrl?: string;
            /** Web URL for the chat. */
            webUrl?: string;
          }>;
        }>;
        /** Pagination metadata returned by v0. */
        pagination?: {
          /** Whether more results are available. */
          hasMore?: boolean;
          /** Cursor for the next page, or null when there are no more results. */
          nextCursor?: string | null;
          /** Full URL for the next page when v0 returns one. */
          nextUrl?: string | null;
          /** Offset for the next page. */
          offset?: number;
          /** Total number of items reported by v0. */
          total?: number;
          /** Number of items in the current page. */
          count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get current v0 rate-limit information for the workspace or a specific scope. */
    "v0.find_rate_limit": {
      input: {
        /** Workspace, project, or billing scope in v0. */
        scope?: string;
      };
      output: {
        /** Rate-limit information returned by v0. */
        rateLimit: {
          /** Maximum number of requests allowed in the current window. */
          limit: number;
          /** Remaining number of requests in the current window. */
          remaining?: number;
          /** Reset timestamp in milliseconds. */
          reset?: number;
          /** Daily message limit information for free-tier usage. */
          dailyLimit?: {
            /** Maximum number of requests allowed in the current window. */
            limit: number;
            /** Remaining number of requests in the current window. */
            remaining?: number;
            /** Reset timestamp in milliseconds. */
            reset?: number;
            /** Whether the limit is still inside v0's grace period. */
            isWithinGracePeriod?: boolean;
          };
        };
      };
    };
    /** List Vercel projects linked to the connected v0 workspace. */
    "v0.find_vercel_projects": {
      input: Record<string, never>;
      output: {
        /** Linked Vercel projects returned by v0. */
        vercelProjects: Array<{
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Linked Vercel project name. */
          name?: string;
        }>;
      };
    };
    /** List generated versions for a v0 chat. */
    "v0.find_versions": {
      input: {
        /** v0 chat ID. */
        chatId: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Cursor returned by a previous v0 list response. */
        cursor?: string;
      };
      output: {
        /** Versions returned by v0. */
        versions: Array<{
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Version generation status. */
          status?: string;
          /** Preview URL for the version. */
          demoUrl?: string;
          /** Screenshot URL for the version. */
          screenshotUrl?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** Files included in the version. */
          files?: Array<{
            /** Object type returned by v0. */
            object?: string;
            /** File path. */
            name?: string;
            /** File content. */
            content?: string;
            /** Whether the file is locked in v0. */
            locked?: boolean;
            /** Origin of the file. */
            origin?: string;
            /** Programming language detected by v0. */
            language?: string;
            /** Additional file metadata returned by v0. */
            metadata?: Record<string, unknown>;
          }>;
        }>;
        /** Pagination metadata returned by v0. */
        pagination?: {
          /** Whether more results are available. */
          hasMore?: boolean;
          /** Cursor for the next page, or null when there are no more results. */
          nextCursor?: string | null;
          /** Full URL for the next page when v0 returns one. */
          nextUrl?: string | null;
          /** Offset for the next page. */
          offset?: number;
          /** Total number of items reported by v0. */
          total?: number;
          /** Number of items in the current page. */
          count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Fork an existing v0 chat into a new chat workspace. */
    "v0.fork_chat": {
      input: {
        /** v0 chat ID. */
        chatId: string;
        /** Privacy for the forked chat. */
        privacy?: "public" | "private" | "team" | "team-edit" | "unlisted";
        /** v0 version ID. */
        versionId?: string;
      };
      output: {
        /** The forked chat. */
        chat: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Chat title or display name. */
          name?: string;
          /** Chat visibility setting. */
          privacy?: string;
          /** Whether the chat is marked as favorite. */
          favorite?: boolean;
          /** Author user ID. */
          authorId?: string;
          /** Linked project ID. */
          projectId?: string;
          /** Linked Vercel project ID. */
          vercelProjectId?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** API URL for the chat. */
          apiUrl?: string;
          /** Web URL for the chat. */
          webUrl?: string;
          /** Chat metadata payload returned by v0. */
          metadata?: Record<string, unknown>;
          /** Latest version attached to the chat. */
          latestVersion?: {
            /** Unique identifier returned by v0. */
            id: string;
            /** Object type returned by v0. */
            object?: string;
            /** Version generation status. */
            status?: string;
            /** Preview URL for the version. */
            demoUrl?: string;
            /** Screenshot URL for the version. */
            screenshotUrl?: string;
            /** ISO 8601 timestamp returned by v0. */
            createdAt?: string;
            /** ISO 8601 timestamp returned by v0. */
            updatedAt?: string;
            /** Files included in the version. */
            files?: Array<{
              /** Object type returned by v0. */
              object?: string;
              /** File path. */
              name?: string;
              /** File content. */
              content?: string;
              /** Whether the file is locked in v0. */
              locked?: boolean;
              /** Origin of the file. */
              origin?: string;
              /** Programming language detected by v0. */
              language?: string;
              /** Additional file metadata returned by v0. */
              metadata?: Record<string, unknown>;
            }>;
          };
          /** Messages currently returned with the chat. */
          messages?: Array<{
            /** Unique identifier returned by v0. */
            id: string;
            /** Object type returned by v0. */
            object?: string;
            /** Owning chat ID. */
            chatId?: string;
            /** Message role such as `user` or `assistant`. */
            role?: string;
            /** Message type reported by v0. */
            type?: string;
            /** Message text content. */
            content?: string;
            /** Why the generation finished. */
            finishReason?: string;
            /** ISO 8601 timestamp returned by v0. */
            createdAt?: string;
            /** ISO 8601 timestamp returned by v0. */
            updatedAt?: string;
            /** API URL for the message. */
            apiUrl?: string;
            /** Model configuration returned by v0. */
            modelConfiguration?: Record<string, unknown>;
            /** Attachments associated with the message. */
            attachments?: Array<{
              /** Attachment URL. */
              url?: string;
              /** Attachment file name. */
              name?: string;
              /** Attachment MIME type. */
              contentType?: string;
              /** Attachment size in bytes. */
              size?: number;
              /** Inline attachment content when v0 returns it. */
              content?: string;
              /** Attachment type reported by v0. */
              type?: string;
            }>;
            /** Experimental rich content payload returned by v0. */
            experimentalContent?: unknown;
          }>;
        };
      };
    };
    /** Get current v0 billing and quota information. */
    "v0.get_billing": {
      input: {
        /** Workspace, project, or billing scope in v0. */
        scope?: string;
      };
      output: {
        /** Billing information returned by v0. */
        billing: {
          /** Billing model currently active in v0. */
          billingType?: string;
          /** Raw billing payload returned by v0. */
          data?: Record<string, unknown>;
          /** Remaining request quota when v0 returns it. */
          remaining?: number;
          /** Quota reset timestamp when v0 returns it. */
          reset?: number;
          /** Quota limit when v0 returns it. */
          limit?: number;
        };
      };
    };
    /** Get a single v0 chat, including the current messages when v0 returns them. */
    "v0.get_chat": {
      input: {
        /** v0 chat ID. */
        chatId: string;
      };
      output: {
        /** The requested chat. */
        chat: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Chat title or display name. */
          name?: string;
          /** Chat visibility setting. */
          privacy?: string;
          /** Whether the chat is marked as favorite. */
          favorite?: boolean;
          /** Author user ID. */
          authorId?: string;
          /** Linked project ID. */
          projectId?: string;
          /** Linked Vercel project ID. */
          vercelProjectId?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** API URL for the chat. */
          apiUrl?: string;
          /** Web URL for the chat. */
          webUrl?: string;
          /** Chat metadata payload returned by v0. */
          metadata?: Record<string, unknown>;
          /** Latest version attached to the chat. */
          latestVersion?: {
            /** Unique identifier returned by v0. */
            id: string;
            /** Object type returned by v0. */
            object?: string;
            /** Version generation status. */
            status?: string;
            /** Preview URL for the version. */
            demoUrl?: string;
            /** Screenshot URL for the version. */
            screenshotUrl?: string;
            /** ISO 8601 timestamp returned by v0. */
            createdAt?: string;
            /** ISO 8601 timestamp returned by v0. */
            updatedAt?: string;
            /** Files included in the version. */
            files?: Array<{
              /** Object type returned by v0. */
              object?: string;
              /** File path. */
              name?: string;
              /** File content. */
              content?: string;
              /** Whether the file is locked in v0. */
              locked?: boolean;
              /** Origin of the file. */
              origin?: string;
              /** Programming language detected by v0. */
              language?: string;
              /** Additional file metadata returned by v0. */
              metadata?: Record<string, unknown>;
            }>;
          };
          /** Messages currently returned with the chat. */
          messages?: Array<{
            /** Unique identifier returned by v0. */
            id: string;
            /** Object type returned by v0. */
            object?: string;
            /** Owning chat ID. */
            chatId?: string;
            /** Message role such as `user` or `assistant`. */
            role?: string;
            /** Message type reported by v0. */
            type?: string;
            /** Message text content. */
            content?: string;
            /** Why the generation finished. */
            finishReason?: string;
            /** ISO 8601 timestamp returned by v0. */
            createdAt?: string;
            /** ISO 8601 timestamp returned by v0. */
            updatedAt?: string;
            /** API URL for the message. */
            apiUrl?: string;
            /** Model configuration returned by v0. */
            modelConfiguration?: Record<string, unknown>;
            /** Attachments associated with the message. */
            attachments?: Array<{
              /** Attachment URL. */
              url?: string;
              /** Attachment file name. */
              name?: string;
              /** Attachment MIME type. */
              contentType?: string;
              /** Attachment size in bytes. */
              size?: number;
              /** Inline attachment content when v0 returns it. */
              content?: string;
              /** Attachment type reported by v0. */
              type?: string;
            }>;
            /** Experimental rich content payload returned by v0. */
            experimentalContent?: unknown;
          }>;
        };
      };
    };
    /** Get a single deployment by deployment ID. */
    "v0.get_deployment": {
      input: {
        /** v0 deployment ID. */
        deploymentId: string;
      };
      output: {
        /** The requested deployment. */
        deployment: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Inspector URL for the deployment. */
          inspectorUrl?: string;
          /** Linked chat ID. */
          chatId?: string;
          /** Linked project ID. */
          projectId?: string;
          /** Linked version ID. */
          versionId?: string;
          /** API URL for the deployment. */
          apiUrl?: string;
          /** Public deployment URL. */
          webUrl?: string;
        };
      };
    };
    /** Get a single environment variable from a v0 project. */
    "v0.get_env_var": {
      input: {
        /** v0 project ID. */
        projectId: string;
        /** v0 environment variable ID. */
        environmentVariableId: string;
        /** When true, request decrypted environment variable values. */
        decrypted?: boolean;
      };
      output: {
        /** The requested environment variable. */
        envVar: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Environment variable key. */
          key?: string;
          /** Environment variable value. */
          value?: string;
          /** Whether the returned value is decrypted. */
          decrypted?: boolean;
          /** Creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last update timestamp in milliseconds. */
          updatedAt?: number;
          /** Whether the environment variable was deleted. */
          deleted?: boolean;
        };
      };
    };
    /** Get a single webhook hook by hook ID. */
    "v0.get_hook": {
      input: {
        /** v0 hook ID. */
        hookId: string;
      };
      output: {
        /** The requested hook. */
        hook: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Webhook display name. */
          name?: string;
          /** Webhook events subscribed in v0. */
          events?: Array<string>;
          /** Optional chat ID scoped to the hook. */
          chatId?: string;
          /** Optional project ID scoped to the hook. */
          projectId?: string;
          /** Target URL that receives webhook payloads. */
          url?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** Optional description returned by v0. */
          description?: string;
          /** Whether the hook is currently active. */
          active?: boolean;
        };
      };
    };
    /** Get a single message from a v0 chat. */
    "v0.get_message": {
      input: {
        /** v0 chat ID. */
        chatId: string;
        /** v0 message ID. */
        messageId: string;
      };
      output: {
        /** The requested message. */
        message: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Owning chat ID. */
          chatId?: string;
          /** Message role such as `user` or `assistant`. */
          role?: string;
          /** Message type reported by v0. */
          type?: string;
          /** Message text content. */
          content?: string;
          /** Why the generation finished. */
          finishReason?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** API URL for the message. */
          apiUrl?: string;
          /** Model configuration returned by v0. */
          modelConfiguration?: Record<string, unknown>;
          /** Attachments associated with the message. */
          attachments?: Array<{
            /** Attachment URL. */
            url?: string;
            /** Attachment file name. */
            name?: string;
            /** Attachment MIME type. */
            contentType?: string;
            /** Attachment size in bytes. */
            size?: number;
            /** Inline attachment content when v0 returns it. */
            content?: string;
            /** Attachment type reported by v0. */
            type?: string;
          }>;
          /** Experimental rich content payload returned by v0. */
          experimentalContent?: unknown;
        };
      };
    };
    /** Get the current subscription plan for the connected v0 user. */
    "v0.get_plan": {
      input: Record<string, never>;
      output: {
        /** Subscription plan returned by v0. */
        plan: {
          /** Object type returned by v0. */
          object?: string;
          /** Subscription plan name. */
          plan: string;
          /** Billing cycle returned by v0. */
          billingCycle?: {
            /** Billing cycle start timestamp. */
            start: number;
            /** Billing cycle end timestamp. */
            end: number;
          };
          /** Billing balance returned by v0. */
          balance?: {
            /** Remaining billing balance. */
            remaining: number;
            /** Total billing balance. */
            total: number;
          };
        };
      };
    };
    /** Get a single v0 project by project ID. */
    "v0.get_project": {
      input: {
        /** v0 project ID. */
        projectId: string;
      };
      output: {
        /** The requested project. */
        project: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Project name. */
          name?: string;
          /** Project description. */
          description?: string;
          /** Project-level instructions for v0. */
          instructions?: string;
          /** Project icon or emoji. */
          icon?: string;
          /** Project visibility setting. */
          privacy?: string;
          /** Linked Vercel project ID. */
          vercelProjectId?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** API URL for the project. */
          apiUrl?: string;
          /** Web URL for the project. */
          webUrl?: string;
          /** Chats currently linked to the project. */
          chats?: Array<{
            /** Unique identifier returned by v0. */
            id: string;
            /** Object type returned by v0. */
            object?: string;
            /** Chat title or display name. */
            name?: string;
            /** Chat visibility setting. */
            privacy?: string;
            /** Whether the chat is marked as favorite. */
            favorite?: boolean;
            /** Author user ID. */
            authorId?: string;
            /** Linked project ID. */
            projectId?: string;
            /** Linked Vercel project ID. */
            vercelProjectId?: string;
            /** ISO 8601 timestamp returned by v0. */
            createdAt?: string;
            /** ISO 8601 timestamp returned by v0. */
            updatedAt?: string;
            /** API URL for the chat. */
            apiUrl?: string;
            /** Web URL for the chat. */
            webUrl?: string;
          }>;
        };
      };
    };
    /** Get the v0 project currently linked to a chat. */
    "v0.get_project_by_chat": {
      input: {
        /** v0 chat ID. */
        chatId: string;
      };
      output: {
        /** The project linked to the chat. */
        project: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Project name. */
          name?: string;
          /** Project description. */
          description?: string;
          /** Project-level instructions for v0. */
          instructions?: string;
          /** Project icon or emoji. */
          icon?: string;
          /** Project visibility setting. */
          privacy?: string;
          /** Linked Vercel project ID. */
          vercelProjectId?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** API URL for the project. */
          apiUrl?: string;
          /** Web URL for the project. */
          webUrl?: string;
          /** Chats currently linked to the project. */
          chats?: Array<{
            /** Unique identifier returned by v0. */
            id: string;
            /** Object type returned by v0. */
            object?: string;
            /** Chat title or display name. */
            name?: string;
            /** Chat visibility setting. */
            privacy?: string;
            /** Whether the chat is marked as favorite. */
            favorite?: boolean;
            /** Author user ID. */
            authorId?: string;
            /** Linked project ID. */
            projectId?: string;
            /** Linked Vercel project ID. */
            vercelProjectId?: string;
            /** ISO 8601 timestamp returned by v0. */
            createdAt?: string;
            /** ISO 8601 timestamp returned by v0. */
            updatedAt?: string;
            /** API URL for the chat. */
            apiUrl?: string;
            /** Web URL for the chat. */
            webUrl?: string;
          }>;
        };
      };
    };
    /** Get usage events and pagination information from the v0 usage report API. */
    "v0.get_usage_report": {
      input: {
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Cursor returned by a previous v0 list response. */
        cursor?: string;
        /** v0 chat ID. */
        chatId?: string;
        /** Filter usage events by user ID. */
        userId?: string;
        /** v0 message ID. */
        messageId?: string;
        /** Only include events on or after this ISO timestamp. */
        startDate?: string;
        /** Only include events on or before this ISO timestamp. */
        endDate?: string;
      };
      output: {
        /** Usage events returned by v0. */
        usageEvents: Array<{
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Usage event type reported by v0. */
          type?: string;
          /** Prompt-side cost for the usage event. */
          promptCost?: string;
          /** Completion-side cost for the usage event. */
          completionCost?: string;
          /** Total cost for the usage event. */
          totalCost?: string;
          /** Chat ID associated with the usage event. */
          chatId?: string;
          /** Message ID associated with the usage event. */
          messageId?: string;
          /** User ID associated with the usage event. */
          userId?: string;
          /** User information associated with the usage event. */
          user?: {
            /** User ID associated with the usage event. */
            id?: string;
            /** Object type returned by v0. */
            object?: string;
            /** User display name associated with the usage event. */
            name?: string;
            /** User email associated with the usage event. */
            email?: string;
          };
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
        }>;
        /** Pagination metadata returned by v0. */
        pagination?: {
          /** Whether more results are available. */
          hasMore?: boolean;
          /** Cursor for the next page, or null when there are no more results. */
          nextCursor?: string | null;
          /** Full URL for the next page when v0 returns one. */
          nextUrl?: string | null;
          /** Offset for the next page. */
          offset?: number;
          /** Total number of items reported by v0. */
          total?: number;
          /** Number of items in the current page. */
          count?: number;
          [key: string]: unknown;
        };
        /** Usage report metadata returned by v0. */
        meta?: {
          /** Total number of usage events in the current response. */
          totalCount: number;
        };
      };
    };
    /** Get the authenticated v0 user profile for the connected API key. */
    "v0.get_user": {
      input: Record<string, never>;
      output: {
        /** The authenticated v0 user. */
        user: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** User display name. */
          name?: string;
          /** User email address. */
          email?: string;
          /** Avatar URL. */
          avatar?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
        };
      };
    };
    /** List workspaces and scopes accessible to the connected v0 user. */
    "v0.get_user_scopes": {
      input: Record<string, never>;
      output: {
        /** Scopes returned by v0. */
        scopes: Array<{
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Scope display name. */
          name?: string;
        }>;
      };
    };
    /** Get a single v0 chat version, optionally including default deployment files. */
    "v0.get_version": {
      input: {
        /** v0 chat ID. */
        chatId: string;
        /** v0 version ID. */
        versionId: string;
        /** Whether to include default deployment files. */
        includeDefaultFiles?: boolean;
      };
      output: {
        /** The requested version. */
        version: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Version generation status. */
          status?: string;
          /** Preview URL for the version. */
          demoUrl?: string;
          /** Screenshot URL for the version. */
          screenshotUrl?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** Files included in the version. */
          files?: Array<{
            /** Object type returned by v0. */
            object?: string;
            /** File path. */
            name?: string;
            /** File content. */
            content?: string;
            /** Whether the file is locked in v0. */
            locked?: boolean;
            /** Origin of the file. */
            origin?: string;
            /** Programming language detected by v0. */
            language?: string;
            /** Additional file metadata returned by v0. */
            metadata?: Record<string, unknown>;
          }>;
        };
      };
    };
    /** Initialize a new v0 chat from files, a repository, a registry, a zip archive, or a template. */
    "v0.init_chat": {
      input: {
        /** Chat name shown in v0. */
        name?: string;
        /** v0 project ID. */
        projectId?: string;
        /** Initialization source type. */
        type: "files" | "repo" | "registry" | "zip" | "template";
        /** Inline files used when `type` is `files`. */
        files?: Array<{
          /** File path. */
          name: string;
          /** File content. */
          content: string;
          /** Whether the file should be locked in v0. */
          locked?: boolean;
        }>;
        /** Repository source used when `type` is `repo`. */
        repo?: {
          /** Git repository URL. */
          url: string;
          /** Git branch to clone. */
          branch?: string;
        };
        /** Registry source used when `type` is `registry`. */
        registry?: {
          /** Component registry URL. */
          url: string;
        };
        /** Zip source used when `type` is `zip`. */
        zip?: {
          /** Zip archive URL. */
          url: string;
          /** Whether all imported files should be locked. */
          lockAllFiles?: boolean;
        };
        /** Template ID used when `type` is `template`. */
        templateId?: string;
        /** Chat visibility setting. */
        chatPrivacy?: "public" | "private" | "team" | "team-edit" | "unlisted";
        /** Chat metadata to attach. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** The initialized chat. */
        chat: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Chat title or display name. */
          name?: string;
          /** Chat visibility setting. */
          privacy?: string;
          /** Whether the chat is marked as favorite. */
          favorite?: boolean;
          /** Author user ID. */
          authorId?: string;
          /** Linked project ID. */
          projectId?: string;
          /** Linked Vercel project ID. */
          vercelProjectId?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** API URL for the chat. */
          apiUrl?: string;
          /** Web URL for the chat. */
          webUrl?: string;
          /** Chat metadata payload returned by v0. */
          metadata?: Record<string, unknown>;
          /** Latest version attached to the chat. */
          latestVersion?: {
            /** Unique identifier returned by v0. */
            id: string;
            /** Object type returned by v0. */
            object?: string;
            /** Version generation status. */
            status?: string;
            /** Preview URL for the version. */
            demoUrl?: string;
            /** Screenshot URL for the version. */
            screenshotUrl?: string;
            /** ISO 8601 timestamp returned by v0. */
            createdAt?: string;
            /** ISO 8601 timestamp returned by v0. */
            updatedAt?: string;
            /** Files included in the version. */
            files?: Array<{
              /** Object type returned by v0. */
              object?: string;
              /** File path. */
              name?: string;
              /** File content. */
              content?: string;
              /** Whether the file is locked in v0. */
              locked?: boolean;
              /** Origin of the file. */
              origin?: string;
              /** Programming language detected by v0. */
              language?: string;
              /** Additional file metadata returned by v0. */
              metadata?: Record<string, unknown>;
            }>;
          };
          /** Messages currently returned with the chat. */
          messages?: Array<{
            /** Unique identifier returned by v0. */
            id: string;
            /** Object type returned by v0. */
            object?: string;
            /** Owning chat ID. */
            chatId?: string;
            /** Message role such as `user` or `assistant`. */
            role?: string;
            /** Message type reported by v0. */
            type?: string;
            /** Message text content. */
            content?: string;
            /** Why the generation finished. */
            finishReason?: string;
            /** ISO 8601 timestamp returned by v0. */
            createdAt?: string;
            /** ISO 8601 timestamp returned by v0. */
            updatedAt?: string;
            /** API URL for the message. */
            apiUrl?: string;
            /** Model configuration returned by v0. */
            modelConfiguration?: Record<string, unknown>;
            /** Attachments associated with the message. */
            attachments?: Array<{
              /** Attachment URL. */
              url?: string;
              /** Attachment file name. */
              name?: string;
              /** Attachment MIME type. */
              contentType?: string;
              /** Attachment size in bytes. */
              size?: number;
              /** Inline attachment content when v0 returns it. */
              content?: string;
              /** Attachment type reported by v0. */
              type?: string;
            }>;
            /** Experimental rich content payload returned by v0. */
            experimentalContent?: unknown;
          }>;
        };
      };
    };
    /** Resume a previously asynchronous v0 message generation. */
    "v0.resume_message": {
      input: {
        /** v0 chat ID. */
        chatId: string;
        /** v0 message ID. */
        messageId: string;
      };
      output: {
        /** The resumed message state returned by v0. */
        message: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Owning chat ID. */
          chatId?: string;
          /** Message role such as `user` or `assistant`. */
          role?: string;
          /** Message type reported by v0. */
          type?: string;
          /** Message text content. */
          content?: string;
          /** Why the generation finished. */
          finishReason?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** API URL for the message. */
          apiUrl?: string;
          /** Model configuration returned by v0. */
          modelConfiguration?: Record<string, unknown>;
          /** Attachments associated with the message. */
          attachments?: Array<{
            /** Attachment URL. */
            url?: string;
            /** Attachment file name. */
            name?: string;
            /** Attachment MIME type. */
            contentType?: string;
            /** Attachment size in bytes. */
            size?: number;
            /** Inline attachment content when v0 returns it. */
            content?: string;
            /** Attachment type reported by v0. */
            type?: string;
          }>;
          /** Experimental rich content payload returned by v0. */
          experimentalContent?: unknown;
        };
      };
    };
    /** Send a follow-up message to an existing v0 chat. */
    "v0.send_message": {
      input: {
        /** v0 chat ID. */
        chatId: string;
        /** Message text to send to v0. */
        message: string;
        /** How v0 should return the result. `sync` waits for the full response, `async` returns the accepted task state. */
        responseMode?: "sync" | "async";
        /** System instruction appended to the message. */
        system?: string;
        /** Attachments sent with the message. */
        attachments?: Array<{
          /** Attachment URL. */
          url?: string;
          /** Attachment file name. */
          name?: string;
          /** Attachment MIME type. */
          contentType?: string;
          /** Attachment size in bytes. */
          size?: number;
          /** Inline attachment content when v0 returns it. */
          content?: string;
          /** Attachment type reported by v0. */
          type?: string;
        }>;
        /** Model ID to use when supported by v0. */
        modelId?: string;
        /** Model configuration overrides. */
        modelConfiguration?: Record<string, unknown>;
        /** MCP server IDs to attach. */
        mcpServerIds?: Array<string>;
        /** Attached skill IDs. */
        attachedSkillIds?: Array<string>;
        /** Optional follow-up action. */
        action?: {
          /** Follow-up action type. */
          type: "fix-with-v0";
        };
      };
      output: {
        /** The updated chat state returned by v0. */
        chat: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Chat title or display name. */
          name?: string;
          /** Chat visibility setting. */
          privacy?: string;
          /** Whether the chat is marked as favorite. */
          favorite?: boolean;
          /** Author user ID. */
          authorId?: string;
          /** Linked project ID. */
          projectId?: string;
          /** Linked Vercel project ID. */
          vercelProjectId?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** API URL for the chat. */
          apiUrl?: string;
          /** Web URL for the chat. */
          webUrl?: string;
          /** Chat metadata payload returned by v0. */
          metadata?: Record<string, unknown>;
          /** Latest version attached to the chat. */
          latestVersion?: {
            /** Unique identifier returned by v0. */
            id: string;
            /** Object type returned by v0. */
            object?: string;
            /** Version generation status. */
            status?: string;
            /** Preview URL for the version. */
            demoUrl?: string;
            /** Screenshot URL for the version. */
            screenshotUrl?: string;
            /** ISO 8601 timestamp returned by v0. */
            createdAt?: string;
            /** ISO 8601 timestamp returned by v0. */
            updatedAt?: string;
            /** Files included in the version. */
            files?: Array<{
              /** Object type returned by v0. */
              object?: string;
              /** File path. */
              name?: string;
              /** File content. */
              content?: string;
              /** Whether the file is locked in v0. */
              locked?: boolean;
              /** Origin of the file. */
              origin?: string;
              /** Programming language detected by v0. */
              language?: string;
              /** Additional file metadata returned by v0. */
              metadata?: Record<string, unknown>;
            }>;
          };
          /** Messages currently returned with the chat. */
          messages?: Array<{
            /** Unique identifier returned by v0. */
            id: string;
            /** Object type returned by v0. */
            object?: string;
            /** Owning chat ID. */
            chatId?: string;
            /** Message role such as `user` or `assistant`. */
            role?: string;
            /** Message type reported by v0. */
            type?: string;
            /** Message text content. */
            content?: string;
            /** Why the generation finished. */
            finishReason?: string;
            /** ISO 8601 timestamp returned by v0. */
            createdAt?: string;
            /** ISO 8601 timestamp returned by v0. */
            updatedAt?: string;
            /** API URL for the message. */
            apiUrl?: string;
            /** Model configuration returned by v0. */
            modelConfiguration?: Record<string, unknown>;
            /** Attachments associated with the message. */
            attachments?: Array<{
              /** Attachment URL. */
              url?: string;
              /** Attachment file name. */
              name?: string;
              /** Attachment MIME type. */
              contentType?: string;
              /** Attachment size in bytes. */
              size?: number;
              /** Inline attachment content when v0 returns it. */
              content?: string;
              /** Attachment type reported by v0. */
              type?: string;
            }>;
            /** Experimental rich content payload returned by v0. */
            experimentalContent?: unknown;
          }>;
        };
      };
    };
    /** Update a v0 chat's metadata such as its name or privacy. */
    "v0.update_chat": {
      input: {
        /** v0 chat ID. */
        chatId: string;
        /** Updated chat name. */
        name?: string;
        /** Updated chat privacy. */
        privacy?: "public" | "private" | "team" | "team-edit" | "unlisted";
      };
      output: {
        /** The updated chat. */
        chat: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Chat title or display name. */
          name?: string;
          /** Chat visibility setting. */
          privacy?: string;
          /** Whether the chat is marked as favorite. */
          favorite?: boolean;
          /** Author user ID. */
          authorId?: string;
          /** Linked project ID. */
          projectId?: string;
          /** Linked Vercel project ID. */
          vercelProjectId?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** API URL for the chat. */
          apiUrl?: string;
          /** Web URL for the chat. */
          webUrl?: string;
          /** Chat metadata payload returned by v0. */
          metadata?: Record<string, unknown>;
          /** Latest version attached to the chat. */
          latestVersion?: {
            /** Unique identifier returned by v0. */
            id: string;
            /** Object type returned by v0. */
            object?: string;
            /** Version generation status. */
            status?: string;
            /** Preview URL for the version. */
            demoUrl?: string;
            /** Screenshot URL for the version. */
            screenshotUrl?: string;
            /** ISO 8601 timestamp returned by v0. */
            createdAt?: string;
            /** ISO 8601 timestamp returned by v0. */
            updatedAt?: string;
            /** Files included in the version. */
            files?: Array<{
              /** Object type returned by v0. */
              object?: string;
              /** File path. */
              name?: string;
              /** File content. */
              content?: string;
              /** Whether the file is locked in v0. */
              locked?: boolean;
              /** Origin of the file. */
              origin?: string;
              /** Programming language detected by v0. */
              language?: string;
              /** Additional file metadata returned by v0. */
              metadata?: Record<string, unknown>;
            }>;
          };
          /** Messages currently returned with the chat. */
          messages?: Array<{
            /** Unique identifier returned by v0. */
            id: string;
            /** Object type returned by v0. */
            object?: string;
            /** Owning chat ID. */
            chatId?: string;
            /** Message role such as `user` or `assistant`. */
            role?: string;
            /** Message type reported by v0. */
            type?: string;
            /** Message text content. */
            content?: string;
            /** Why the generation finished. */
            finishReason?: string;
            /** ISO 8601 timestamp returned by v0. */
            createdAt?: string;
            /** ISO 8601 timestamp returned by v0. */
            updatedAt?: string;
            /** API URL for the message. */
            apiUrl?: string;
            /** Model configuration returned by v0. */
            modelConfiguration?: Record<string, unknown>;
            /** Attachments associated with the message. */
            attachments?: Array<{
              /** Attachment URL. */
              url?: string;
              /** Attachment file name. */
              name?: string;
              /** Attachment MIME type. */
              contentType?: string;
              /** Attachment size in bytes. */
              size?: number;
              /** Inline attachment content when v0 returns it. */
              content?: string;
              /** Attachment type reported by v0. */
              type?: string;
            }>;
            /** Experimental rich content payload returned by v0. */
            experimentalContent?: unknown;
          }>;
        };
      };
    };
    /** Update existing environment variables on a v0 project. */
    "v0.update_env_vars": {
      input: {
        /** v0 project ID. */
        projectId: string;
        /** When true, request decrypted environment variable values. */
        decrypted?: boolean;
        /**
         * Environment variables to update.
         * @minItems 1
         */
        environmentVariables: Array<{
          /** v0 environment variable ID. */
          id: string;
          /** Updated environment variable key. */
          key?: string;
          /** Updated environment variable value. */
          value?: string;
        }>;
      };
      output: {
        /** The updated environment variables. */
        envVars: Array<{
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Environment variable key. */
          key?: string;
          /** Environment variable value. */
          value?: string;
          /** Whether the returned value is decrypted. */
          decrypted?: boolean;
          /** Creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last update timestamp in milliseconds. */
          updatedAt?: number;
          /** Whether the environment variable was deleted. */
          deleted?: boolean;
        }>;
      };
    };
    /** Update an existing webhook hook in v0. */
    "v0.update_hook": {
      input: {
        /** v0 hook ID. */
        hookId: string;
        /** Updated webhook display name. */
        name?: string;
        /** Updated target URL. */
        url?: string;
        /** Updated event subscriptions. */
        events?: Array<"chat.created" | "chat.updated" | "chat.deleted" | "message.created" | "message.updated" | "message.deleted" | "message.finished">;
      };
      output: {
        /** The updated hook. */
        hook: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Webhook display name. */
          name?: string;
          /** Webhook events subscribed in v0. */
          events?: Array<string>;
          /** Optional chat ID scoped to the hook. */
          chatId?: string;
          /** Optional project ID scoped to the hook. */
          projectId?: string;
          /** Target URL that receives webhook payloads. */
          url?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** Optional description returned by v0. */
          description?: string;
          /** Whether the hook is currently active. */
          active?: boolean;
        };
      };
    };
    /** Update a v0 project's metadata, instructions, visibility, or linked Vercel project. */
    "v0.update_project": {
      input: {
        /** v0 project ID. */
        projectId: string;
        /** Updated project name. */
        name?: string;
        /** Updated project description. */
        description?: string;
        /** Updated project icon or emoji. */
        icon?: string;
        /** Updated project instructions. */
        instructions?: string;
        /** Updated project visibility. */
        privacy?: "private" | "team";
        /** Updated linked Vercel project ID. */
        vercelProjectId?: string;
      };
      output: {
        /** The updated project. */
        project: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Project name. */
          name?: string;
          /** Project description. */
          description?: string;
          /** Project-level instructions for v0. */
          instructions?: string;
          /** Project icon or emoji. */
          icon?: string;
          /** Project visibility setting. */
          privacy?: string;
          /** Linked Vercel project ID. */
          vercelProjectId?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** API URL for the project. */
          apiUrl?: string;
          /** Web URL for the project. */
          webUrl?: string;
          /** Chats currently linked to the project. */
          chats?: Array<{
            /** Unique identifier returned by v0. */
            id: string;
            /** Object type returned by v0. */
            object?: string;
            /** Chat title or display name. */
            name?: string;
            /** Chat visibility setting. */
            privacy?: string;
            /** Whether the chat is marked as favorite. */
            favorite?: boolean;
            /** Author user ID. */
            authorId?: string;
            /** Linked project ID. */
            projectId?: string;
            /** Linked Vercel project ID. */
            vercelProjectId?: string;
            /** ISO 8601 timestamp returned by v0. */
            createdAt?: string;
            /** ISO 8601 timestamp returned by v0. */
            updatedAt?: string;
            /** API URL for the chat. */
            apiUrl?: string;
            /** Web URL for the chat. */
            webUrl?: string;
          }>;
        };
      };
    };
    /** Update the files of an existing v0 chat version. */
    "v0.update_version": {
      input: {
        /** v0 chat ID. */
        chatId: string;
        /** v0 version ID. */
        versionId: string;
        /**
         * Files to update on the version.
         * @minItems 1
         */
        files: Array<{
          /** File path. */
          name: string;
          /** File content. */
          content: string;
          /** Whether the file should be locked in v0. */
          locked?: boolean;
        }>;
      };
      output: {
        /** The updated version. */
        version: {
          /** Unique identifier returned by v0. */
          id: string;
          /** Object type returned by v0. */
          object?: string;
          /** Version generation status. */
          status?: string;
          /** Preview URL for the version. */
          demoUrl?: string;
          /** Screenshot URL for the version. */
          screenshotUrl?: string;
          /** ISO 8601 timestamp returned by v0. */
          createdAt?: string;
          /** ISO 8601 timestamp returned by v0. */
          updatedAt?: string;
          /** Files included in the version. */
          files?: Array<{
            /** Object type returned by v0. */
            object?: string;
            /** File path. */
            name?: string;
            /** File content. */
            content?: string;
            /** Whether the file is locked in v0. */
            locked?: boolean;
            /** Origin of the file. */
            origin?: string;
            /** Programming language detected by v0. */
            language?: string;
            /** Additional file metadata returned by v0. */
            metadata?: Record<string, unknown>;
          }>;
        };
      };
    };
  }
}
