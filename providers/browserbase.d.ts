import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Browserbase context and return the upload credentials for an encrypted user-data directory. */
    "browserbase.create_context": {
      input: {
        /**
         * The Browserbase project identifier. When omitted, the connected project is used.
         * @minLength 1
         */
        projectId?: string;
      };
      output: {
        /** The Browserbase context identifier. */
        id: string;
        /**
         * The upload URL for the encrypted user-data directory archive.
         * @format uri
         */
        uploadUrl: string;
        /** The public key used to encrypt the context archive. */
        publicKey: string;
        /** The cipher algorithm required by Browserbase. */
        cipherAlgorithm: string;
        /** The initialization vector size required by Browserbase. */
        initializationVectorSize: number;
      };
    };
    /** Create a Browserbase session using the connected project by default, with optional context reuse and persistence. */
    "browserbase.create_session": {
      input: {
        /**
         * The Browserbase project identifier. When omitted, the connected project is used.
         * @minLength 1
         */
        projectId?: string;
        /**
         * The session timeout in seconds.
         * @minimum 60
         * @maximum 21600
         */
        timeout?: number;
        /** Whether the Browserbase session stays alive after disconnections. */
        keepAlive?: boolean;
        /** The Browserbase region where the session runs. */
        region?: "us-west-2" | "us-east-1" | "eu-central-1" | "ap-southeast-1";
        /** Arbitrary user metadata to attach to the Browserbase session. */
        userMetadata?: Record<string, string | number | boolean | null | Record<string, unknown>>;
        /**
         * The Browserbase context identifier to attach to the session.
         * @minLength 1
         */
        contextId?: string;
        /** Whether Browserbase should persist updates back into the attached context. */
        persist?: boolean;
      };
      output: {
        /** The Browserbase session that was created. */
        session: {
          /** The Browserbase session identifier. */
          id: string;
          /** When the Browserbase session was created. */
          createdAt: string;
          /** When the Browserbase session was last updated. */
          updatedAt: string;
          /** The Browserbase project identifier linked to the session. */
          projectId: string;
          /** When the Browserbase session started. */
          startedAt: string;
          /** When the Browserbase session expires. */
          expiresAt: string;
          /** The current Browserbase session status. */
          status: "PENDING" | "RUNNING" | "ERROR" | "TIMED_OUT" | "COMPLETED";
          /** The proxy bytes consumed by the Browserbase session. */
          proxyBytes: number;
          /** Whether the Browserbase session stays alive after disconnections. */
          keepAlive: boolean;
          /** The Browserbase region where the session runs. */
          region: "us-west-2" | "us-east-1" | "eu-central-1" | "ap-southeast-1";
          /** When the Browserbase session ended. */
          endedAt?: string;
          /** The linked Browserbase context identifier. */
          contextId?: string;
          /**
           * The WebSocket URL used to connect to the Browserbase session.
           * @format uri
           */
          connectUrl?: string;
          /**
           * The Selenium Remote URL used to connect to the Browserbase session.
           * @format uri
           */
          seleniumRemoteUrl?: string;
          /** The signing key required for Browserbase HTTP connections. */
          signingKey?: string;
          /** The user metadata attached to the Browserbase session. */
          userMetadata?: Record<string, string | number | boolean | null | Record<string, unknown>>;
        };
      };
    };
    /** Delete one Browserbase context by context identifier. */
    "browserbase.delete_context": {
      input: {
        /**
         * The Browserbase context identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Browserbase confirmed the context deletion. */
        success: boolean;
      };
    };
    /** Get one Browserbase context by context identifier. */
    "browserbase.get_context": {
      input: {
        /**
         * The Browserbase context identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Browserbase context that was retrieved. */
        context: {
          /** The Browserbase context identifier. */
          id: string;
          /** When the Browserbase context was created. */
          createdAt: string;
          /** When the Browserbase context was last updated. */
          updatedAt: string;
          /** The Browserbase project identifier linked to the context. */
          projectId: string;
        };
      };
    };
    /** Get one Browserbase project by project identifier. */
    "browserbase.get_project": {
      input: {
        /**
         * The Browserbase project identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Browserbase project that was retrieved. */
        project: {
          /** The Browserbase project identifier. */
          id: string;
          /** When the Browserbase project was created. */
          createdAt: string;
          /** When the Browserbase project was last updated. */
          updatedAt: string;
          /** The Browserbase project name. */
          name: string;
          /** The owner identifier of the Browserbase project. */
          ownerId: string;
          /** The default session timeout in seconds for the Browserbase project. */
          defaultTimeout: number;
          /** The concurrent session limit configured for the Browserbase project. */
          concurrency?: number;
        };
      };
    };
    /** Get Browserbase browser minute and proxy byte usage for one project, defaulting to the connected project. */
    "browserbase.get_project_usage": {
      input: {
        /**
         * The Browserbase project identifier. When omitted, the connected project is used.
         * @minLength 1
         */
        id?: string;
      };
      output: {
        /** The browser minutes consumed by the Browserbase project. */
        browserMinutes: number;
        /** The proxy bytes consumed by the Browserbase project. */
        proxyBytes: number;
      };
    };
    /** Get one Browserbase session by session identifier. */
    "browserbase.get_session": {
      input: {
        /**
         * The Browserbase session identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Browserbase session that was retrieved. */
        session: {
          /** The Browserbase session identifier. */
          id: string;
          /** When the Browserbase session was created. */
          createdAt: string;
          /** When the Browserbase session was last updated. */
          updatedAt: string;
          /** The Browserbase project identifier linked to the session. */
          projectId: string;
          /** When the Browserbase session started. */
          startedAt: string;
          /** When the Browserbase session expires. */
          expiresAt: string;
          /** The current Browserbase session status. */
          status: "PENDING" | "RUNNING" | "ERROR" | "TIMED_OUT" | "COMPLETED";
          /** The proxy bytes consumed by the Browserbase session. */
          proxyBytes: number;
          /** Whether the Browserbase session stays alive after disconnections. */
          keepAlive: boolean;
          /** The Browserbase region where the session runs. */
          region: "us-west-2" | "us-east-1" | "eu-central-1" | "ap-southeast-1";
          /** When the Browserbase session ended. */
          endedAt?: string;
          /** The linked Browserbase context identifier. */
          contextId?: string;
          /**
           * The WebSocket URL used to connect to the Browserbase session.
           * @format uri
           */
          connectUrl?: string;
          /**
           * The Selenium Remote URL used to connect to the Browserbase session.
           * @format uri
           */
          seleniumRemoteUrl?: string;
          /** The signing key required for Browserbase HTTP connections. */
          signingKey?: string;
          /** The user metadata attached to the Browserbase session. */
          userMetadata?: Record<string, string | number | boolean | null | Record<string, unknown>>;
        };
      };
    };
    /** List the Browserbase projects visible to the current API key. */
    "browserbase.list_projects": {
      input: Record<string, never>;
      output: {
        /** The Browserbase projects returned. */
        projects: Array<{
          /** The Browserbase project identifier. */
          id: string;
          /** When the Browserbase project was created. */
          createdAt: string;
          /** When the Browserbase project was last updated. */
          updatedAt: string;
          /** The Browserbase project name. */
          name: string;
          /** The owner identifier of the Browserbase project. */
          ownerId: string;
          /** The default session timeout in seconds for the Browserbase project. */
          defaultTimeout: number;
          /** The concurrent session limit configured for the Browserbase project. */
          concurrency?: number;
        }>;
      };
    };
    /** List Browserbase sessions with optional status or metadata query filters. */
    "browserbase.list_sessions": {
      input: {
        /** The current Browserbase session status. */
        status?: "PENDING" | "RUNNING" | "ERROR" | "TIMED_OUT" | "COMPLETED";
        /**
         * The Browserbase metadata query string used to filter sessions.
         * @minLength 1
         */
        q?: string;
      };
      output: {
        /** The Browserbase sessions returned. */
        sessions: Array<{
          /** The Browserbase session identifier. */
          id: string;
          /** When the Browserbase session was created. */
          createdAt: string;
          /** When the Browserbase session was last updated. */
          updatedAt: string;
          /** The Browserbase project identifier linked to the session. */
          projectId: string;
          /** When the Browserbase session started. */
          startedAt: string;
          /** When the Browserbase session expires. */
          expiresAt: string;
          /** The current Browserbase session status. */
          status: "PENDING" | "RUNNING" | "ERROR" | "TIMED_OUT" | "COMPLETED";
          /** The proxy bytes consumed by the Browserbase session. */
          proxyBytes: number;
          /** Whether the Browserbase session stays alive after disconnections. */
          keepAlive: boolean;
          /** The Browserbase region where the session runs. */
          region: "us-west-2" | "us-east-1" | "eu-central-1" | "ap-southeast-1";
          /** When the Browserbase session ended. */
          endedAt?: string;
          /** The linked Browserbase context identifier. */
          contextId?: string;
          /**
           * The WebSocket URL used to connect to the Browserbase session.
           * @format uri
           */
          connectUrl?: string;
          /**
           * The Selenium Remote URL used to connect to the Browserbase session.
           * @format uri
           */
          seleniumRemoteUrl?: string;
          /** The signing key required for Browserbase HTTP connections. */
          signingKey?: string;
          /** The user metadata attached to the Browserbase session. */
          userMetadata?: Record<string, string | number | boolean | null | Record<string, unknown>>;
        }>;
      };
    };
    /** Refresh the Browserbase upload credentials for an existing context so a new encrypted archive can be uploaded. */
    "browserbase.refresh_context_upload_credentials": {
      input: {
        /**
         * The Browserbase context identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Browserbase context identifier. */
        id: string;
        /**
         * The upload URL for the encrypted user-data directory archive.
         * @format uri
         */
        uploadUrl: string;
        /** The public key used to encrypt the context archive. */
        publicKey: string;
        /** The cipher algorithm required by Browserbase. */
        cipherAlgorithm: string;
        /** The initialization vector size required by Browserbase. */
        initializationVectorSize: number;
      };
    };
    /** Request that Browserbase releases a session before timeout by sending status REQUEST_RELEASE. */
    "browserbase.request_session_release": {
      input: {
        /**
         * The Browserbase session identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The Browserbase project identifier. When omitted, the connected project is used.
         * @minLength 1
         */
        projectId?: string;
      };
      output: {
        /** The Browserbase session after the release request. */
        session: {
          /** The Browserbase session identifier. */
          id: string;
          /** When the Browserbase session was created. */
          createdAt: string;
          /** When the Browserbase session was last updated. */
          updatedAt: string;
          /** The Browserbase project identifier linked to the session. */
          projectId: string;
          /** When the Browserbase session started. */
          startedAt: string;
          /** When the Browserbase session expires. */
          expiresAt: string;
          /** The current Browserbase session status. */
          status: "PENDING" | "RUNNING" | "ERROR" | "TIMED_OUT" | "COMPLETED";
          /** The proxy bytes consumed by the Browserbase session. */
          proxyBytes: number;
          /** Whether the Browserbase session stays alive after disconnections. */
          keepAlive: boolean;
          /** The Browserbase region where the session runs. */
          region: "us-west-2" | "us-east-1" | "eu-central-1" | "ap-southeast-1";
          /** When the Browserbase session ended. */
          endedAt?: string;
          /** The linked Browserbase context identifier. */
          contextId?: string;
          /**
           * The WebSocket URL used to connect to the Browserbase session.
           * @format uri
           */
          connectUrl?: string;
          /**
           * The Selenium Remote URL used to connect to the Browserbase session.
           * @format uri
           */
          seleniumRemoteUrl?: string;
          /** The signing key required for Browserbase HTTP connections. */
          signingKey?: string;
          /** The user metadata attached to the Browserbase session. */
          userMetadata?: Record<string, string | number | boolean | null | Record<string, unknown>>;
        };
      };
    };
  }
}
