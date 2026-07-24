import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add chat messages to a Zep thread, ingest them into the user's graph, and optionally return current context. */
    "zep.add_thread_messages": {
      input: {
        /**
         * The unique identifier of the target thread.
         * @minLength 1
         * @maxLength 500
         */
        thread_id: string;
        /**
         * The messages to add in chronological order.
         * @minItems 1
         * @maxItems 30
         */
        messages: Array<{
          /**
           * The message content, limited to 4,096 characters.
           * @maxLength 4096
           */
          content: string;
          /** The role of the message sender. */
          role: "norole" | "system" | "assistant" | "user" | "function" | "tool";
          /** The timestamp when the message was created. */
          created_at?: string;
          /** Metadata associated with the message. */
          metadata?: Record<string, unknown>;
          /** The customizable name of the message sender. */
          name?: string;
          /** Whether Zep has processed the message. */
          processed?: boolean;
          /** The unique identifier of the message. */
          uuid?: string;
        }>;
        /** The roles to retain as messages but ignore for graph-memory extraction. */
        ignore_roles?: Array<"norole" | "system" | "assistant" | "user" | "function" | "tool">;
        /** Whether to return context relevant to the most recent messages. */
        return_context?: boolean;
        /** Whether to prevent extraction of generic entities that do not match the configured ontology. */
        strict_ontology?: boolean;
      };
      output: {
        /** The context relevant to the most recent messages, when requested. */
        context?: string;
        /** The unique identifiers assigned to the added messages. */
        message_uuids?: Array<string>;
        /** The identifier of the upstream graph-processing task. */
        task_id?: string;
        [key: string]: unknown;
      };
    };
    /** Create a conversation thread for an existing Zep user. */
    "zep.create_thread": {
      input: {
        /**
         * The application-defined unique identifier of the thread.
         * @minLength 1
         * @maxLength 500
         */
        thread_id: string;
        /**
         * The identifier of the existing user associated with the thread.
         * @minLength 1
         * @maxLength 500
         */
        user_id: string;
      };
      output: {
        /** The timestamp when the thread was created. */
        created_at?: string;
        /** The unique identifier of the thread's Zep project. */
        project_uuid?: string;
        /** The application-defined unique identifier of the thread. */
        thread_id?: string;
        /** The application-defined identifier of the associated user. */
        user_id?: string;
        /** The opaque identifier of the associated user. */
        user_uuid?: string;
        /** The opaque unique identifier of the thread. */
        uuid?: string;
        [key: string]: unknown;
      };
    };
    /** Create a Zep user that can own conversation threads and graph memory. */
    "zep.create_user": {
      input: {
        /**
         * The application-defined unique identifier of the user.
         * @minLength 1
         * @maxLength 500
         */
        user_id: string;
        /** The email address of the user. */
        email?: string;
        /** The first name of the user. */
        first_name?: string;
        /** The last name of the user. */
        last_name?: string;
        /** Metadata to associate with the user. */
        metadata?: Record<string, unknown>;
        /** The user's IANA time zone. Null or omission leaves it unset at creation. */
        time_zone?: string | null;
        /** Whether to disable the default ontology for the user's graph. */
        disable_default_ontology?: boolean;
      };
      output: {
        /** The timestamp when the user was created. */
        created_at?: string;
        /** The timestamp when the user was deleted, or null for an active user. */
        deleted_at?: string | null;
        /** Whether the default ontology is disabled for the user's graph. */
        disable_default_ontology?: boolean;
        /** The user's email address. */
        email?: string;
        /** The user's first name. */
        first_name?: string;
        /** The internal numeric identifier of the user. */
        id?: number;
        /** The user's last name. */
        last_name?: string;
        /** Metadata associated with the user. */
        metadata?: Record<string, unknown>;
        /** The unique identifier of the user's Zep project. */
        project_uuid?: string;
        /** The deprecated session count returned by Zep when present. */
        session_count?: number;
        /** The IANA time zone, or null when no time zone is set. */
        time_zone?: string | null;
        /** The deprecated user update timestamp returned by Zep when present. */
        updated_at?: string;
        /** The application-defined unique identifier of the user. */
        user_id?: string;
        /** The opaque unique identifier of the user. */
        uuid?: string;
        [key: string]: unknown;
      };
    };
    /** Delete a Zep conversation thread and its thread-specific memory. */
    "zep.delete_thread": {
      input: {
        /**
         * The application-defined unique identifier of the thread.
         * @minLength 1
         * @maxLength 500
         */
        thread_id: string;
      };
      output: {
        /** The acknowledgement message returned by Zep. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Delete a Zep user and the threads and graph artifacts associated with that user. */
    "zep.delete_user": {
      input: {
        /**
         * The application-defined unique identifier of the user.
         * @minLength 1
         * @maxLength 500
         */
        user_id: string;
      };
      output: {
        /** The acknowledgement message returned by Zep. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve the Zep project associated with the connected API key. */
    "zep.get_project": {
      input: Record<string, never>;
      output: {
        /** A Zep project. */
        project: {
          /** The timestamp when the project was created. */
          created_at?: string;
          /** The IANA time zone, or null when no time zone is set. */
          default_time_zone?: string | null;
          /** The project description. */
          description?: string;
          /** The project name. */
          name?: string;
          /** The unique identifier of the project. */
          uuid?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve the most relevant context from a user's graph for the current Zep thread. */
    "zep.get_thread_context": {
      input: {
        /**
         * The unique identifier of the current thread.
         * @minLength 1
         * @maxLength 500
         */
        thread_id: string;
        /** The optional context template identifier used for rendering. */
        template_id?: string;
      };
      output: {
        /** The context block containing relevant facts, entities, and messages from the user graph. */
        context: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve messages from a Zep thread with cursor or recent-message controls. */
    "zep.get_thread_messages": {
      input: {
        /**
         * The unique identifier of the target thread.
         * @minLength 1
         * @maxLength 500
         */
        thread_id: string;
        /** The maximum number of messages to return. */
        limit?: number;
        /** The pagination cursor. */
        cursor?: number;
        /** The number of most recent messages to return, overriding limit and cursor. */
        lastn?: number;
      };
      output: {
        /** The messages returned for the thread. */
        messages?: Array<{
          /** The message content. */
          content: string;
          /** The role of the message sender. */
          role: "norole" | "system" | "assistant" | "user" | "function" | "tool";
          /** The timestamp when the message was created. */
          created_at?: string;
          /** Metadata associated with the message. */
          metadata?: Record<string, unknown>;
          /** The customizable name of the message sender. */
          name?: string;
          /** Whether Zep has processed the message. */
          processed?: boolean;
          /** The unique identifier of the message. */
          uuid?: string;
          [key: string]: unknown;
        }>;
        /** The number of messages returned. */
        row_count?: number;
        /** The thread creation timestamp. */
        thread_created_at?: string;
        /** The total number of messages in the thread. */
        total_count?: number;
        /** The application-defined identifier of the thread's user. */
        user_id?: string;
        /** The opaque identifier of the thread's user. */
        user_uuid?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Zep user by its application-defined identifier. */
    "zep.get_user": {
      input: {
        /**
         * The application-defined unique identifier of the user.
         * @minLength 1
         * @maxLength 500
         */
        user_id: string;
      };
      output: {
        /** The timestamp when the user was created. */
        created_at?: string;
        /** The timestamp when the user was deleted, or null for an active user. */
        deleted_at?: string | null;
        /** Whether the default ontology is disabled for the user's graph. */
        disable_default_ontology?: boolean;
        /** The user's email address. */
        email?: string;
        /** The user's first name. */
        first_name?: string;
        /** The internal numeric identifier of the user. */
        id?: number;
        /** The user's last name. */
        last_name?: string;
        /** Metadata associated with the user. */
        metadata?: Record<string, unknown>;
        /** The unique identifier of the user's Zep project. */
        project_uuid?: string;
        /** The deprecated session count returned by Zep when present. */
        session_count?: number;
        /** The IANA time zone, or null when no time zone is set. */
        time_zone?: string | null;
        /** The deprecated user update timestamp returned by Zep when present. */
        updated_at?: string;
        /** The application-defined unique identifier of the user. */
        user_id?: string;
        /** The opaque unique identifier of the user. */
        uuid?: string;
        [key: string]: unknown;
      };
    };
    /** List Zep conversation threads with pagination and ordering controls. */
    "zep.list_threads": {
      input: {
        /**
         * The page number for pagination, starting from 1.
         * @minimum 1
         */
        page_number?: number;
        /** The number of threads to retrieve per page. */
        page_size?: number;
        /** The field used to order threads. */
        order_by?: "created_at" | "updated_at" | "user_id" | "thread_id";
        /** Whether to sort results in ascending order. */
        asc?: boolean;
      };
      output: {
        /** The number of threads returned in this page. */
        response_count: number;
        /** The threads in this page. */
        threads: Array<{
          /** The timestamp when the thread was created. */
          created_at?: string;
          /** The unique identifier of the thread's Zep project. */
          project_uuid?: string;
          /** The application-defined unique identifier of the thread. */
          thread_id?: string;
          /** The application-defined identifier of the associated user. */
          user_id?: string;
          /** The opaque identifier of the associated user. */
          user_uuid?: string;
          /** The opaque unique identifier of the thread. */
          uuid?: string;
          [key: string]: unknown;
        }>;
        /** The total number of threads. */
        total_count: number;
        [key: string]: unknown;
      };
    };
    /** List Zep users with pagination, search, and ordering controls. */
    "zep.list_users": {
      input: {
        /**
         * The page number for pagination, starting from 1.
         * @minimum 1
         */
        pageNumber?: number;
        /** The number of users to retrieve per page. */
        pageSize?: number;
        /** The term used to filter users by user ID, name, or email. */
        search?: string;
        /** The field used to order users. */
        order_by?: "created_at" | "user_id" | "email";
        /** Whether to sort results in ascending order. */
        asc?: boolean;
      };
      output: {
        /** The number of users returned in this page. */
        row_count: number;
        /** The total number of users. */
        total_count: number;
        /** The users in this page. */
        users: Array<{
          /** The timestamp when the user was created. */
          created_at?: string;
          /** The timestamp when the user was deleted, or null for an active user. */
          deleted_at?: string | null;
          /** Whether the default ontology is disabled for the user's graph. */
          disable_default_ontology?: boolean;
          /** The user's email address. */
          email?: string;
          /** The user's first name. */
          first_name?: string;
          /** The internal numeric identifier of the user. */
          id?: number;
          /** The user's last name. */
          last_name?: string;
          /** Metadata associated with the user. */
          metadata?: Record<string, unknown>;
          /** The unique identifier of the user's Zep project. */
          project_uuid?: string;
          /** The deprecated session count returned by Zep when present. */
          session_count?: number;
          /** The IANA time zone, or null when no time zone is set. */
          time_zone?: string | null;
          /** The deprecated user update timestamp returned by Zep when present. */
          updated_at?: string;
          /** The application-defined unique identifier of the user. */
          user_id?: string;
          /** The opaque unique identifier of the user. */
          uuid?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update the profile, metadata, time zone, or ontology setting of a Zep user. */
    "zep.update_user": {
      input: {
        /**
         * The application-defined unique identifier of the user.
         * @minLength 1
         * @maxLength 500
         */
        user_id: string;
        /** The updated email address of the user. */
        email?: string;
        /** The updated first name of the user. */
        first_name?: string;
        /** The updated last name of the user. */
        last_name?: string;
        /** The metadata to update on the user. */
        metadata?: Record<string, unknown>;
        /** The user's IANA time zone. Null clears the existing value. */
        time_zone?: string | null;
        /** Whether to disable the default ontology for the user's graph. */
        disable_default_ontology?: boolean;
      };
      output: {
        /** The timestamp when the user was created. */
        created_at?: string;
        /** The timestamp when the user was deleted, or null for an active user. */
        deleted_at?: string | null;
        /** Whether the default ontology is disabled for the user's graph. */
        disable_default_ontology?: boolean;
        /** The user's email address. */
        email?: string;
        /** The user's first name. */
        first_name?: string;
        /** The internal numeric identifier of the user. */
        id?: number;
        /** The user's last name. */
        last_name?: string;
        /** Metadata associated with the user. */
        metadata?: Record<string, unknown>;
        /** The unique identifier of the user's Zep project. */
        project_uuid?: string;
        /** The deprecated session count returned by Zep when present. */
        session_count?: number;
        /** The IANA time zone, or null when no time zone is set. */
        time_zone?: string | null;
        /** The deprecated user update timestamp returned by Zep when present. */
        updated_at?: string;
        /** The application-defined unique identifier of the user. */
        user_id?: string;
        /** The opaque unique identifier of the user. */
        uuid?: string;
        [key: string]: unknown;
      };
    };
  }
}
