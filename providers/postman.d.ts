import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Tool to create a new Postman collection in a specific workspace or the default workspace. Use when you need to create a collection with workspace specification. For complete collection format details, refer to the Postman Collection Format documentation. */
    "postman.create_a_collection": {
      input: {
        /** Optional workspace ID where the collection will be created. If not specified, the collection is created in the user's default workspace */
        workspace?: string;
        /** Collection object containing info (name, description, schema) and item array (requests/folders) */
        collection: {
          /** Collection metadata containing name, description, and schema version */
          info: {
            /** The name of the collection to create */
            name: string;
            /**
             * The schema version URL for the collection. Defaults to v2.1.0
             * @default "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
             */
            schema?: string;
            /** Optional description of the collection explaining its purpose */
            description?: string;
          };
          /** Array of collection items (requests, folders). Defaults to empty array for new collections */
          item?: Array<{
            /** Nested items if this is a folder */
            item?: Array<Record<string, unknown>>;
            /** Name of the item (request or folder) */
            name?: string;
            /** Request object containing method, url, headers, body, etc. */
            request?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
        };
        [key: string]: unknown;
      };
      output: {
        /** Created collection object containing id, name, and uid */
        collection?: {
          /** Unique identifier of the created collection */
          id?: string;
          /** Unique identifier with team/user prefix */
          uid?: string;
          /** Name of the created collection */
          name?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to create a comment on an API's collection. Use when you need to add a comment to a specific collection within an API. To create a reply on an existing comment, include the thread_id in the request. */
    "postman.create_a_collection_comment": {
      input: {
        /** The text content of the comment to create on the API collection. */
        body: string;
        /** The API's unique identifier (UUID). This identifies the API containing the collection. */
        api_id: string;
        /** Optional thread ID to reply to an existing comment thread. Include this to create a reply on an existing comment. */
        thread_id?: number;
        /** The collection's unique identifier (UUID). This identifies the specific collection to comment on. */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The comment's unique ID */
        id?: number;
        /** The text content of the comment */
        body?: string;
        /** The thread ID this comment belongs to */
        thread_id?: number;
        /** ISO 8601 timestamp when the comment was created */
        created_at?: string;
        /** The ID of the user who created the comment */
        created_by?: number;
        /** ISO 8601 timestamp when the comment was last updated */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to create a collection from a schema and link it to an API with specified relations. Note: This endpoint is deprecated in Postman v10 and higher. Use when you need to generate a collection from an API schema and establish relations like contract tests or documentation. */
    "postman.create_a_collection_from_a_schema": {
      input: {
        /** The name of the collection to be created */
        name: string;
        /** The unique identifier (UUID) of the API */
        api_id: string;
        /** List of relation(s) to be created. Each relation must specify a type from the allowed values */
        relations: Array<{
          /** The type of relation to create. Must be one of: contracttest, integrationtest, testsuite, or documentation */
          type: "contracttest" | "integrationtest" | "testsuite" | "documentation";
          [key: string]: unknown;
        }>;
        /** The unique identifier (UUID) of the schema from which to create the collection */
        schema_id: string;
        /** Optional workspace ID where the collection will be created. If not specified, the collection is created in the user's default workspace */
        workspace?: string;
        /** The unique identifier (UUID) of the API version */
        api_version_id: string;
        [key: string]: unknown;
      };
      output: {
        /** List of created relations */
        relations?: Array<{
          /** The unique identifier of the created relation */
          id?: string;
          /** The type of the relation */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Information about the newly created collection */
        collection?: {
          /** The unique identifier of the created collection */
          id?: string;
          /** The extended unique identifier combining workspace and collection ID */
          uid?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to create a folder in a Postman collection. Use when you need to organize requests by creating a new folder within a collection. For complete details, see the Postman Collection Format documentation. */
    "postman.create_a_folder": {
      input: {
        /** The name of the folder to create */
        name: string;
        /** Optional description of the folder explaining its purpose */
        description?: string;
        /** The unique identifier of the collection to create the folder in */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Data about the created folder */
        data?: {
          /** The unique identifier of the created folder */
          id?: string;
          /** The name of the folder */
          name?: string;
          /** Array of request IDs in the folder's display order */
          order?: Array<string>;
          /** The owner ID of the folder */
          owner?: string;
          /** ISO 8601 timestamp when the folder was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the folder was last updated */
          updatedAt?: string;
          /** The collection ID containing this folder */
          collection?: string;
          /** The description of the folder */
          description?: string;
          /** Array of subfolder IDs in the folder's display order */
          foldersOrder?: Array<string>;
          /** User ID who last updated the folder */
          lastUpdatedBy?: string;
          [key: string]: unknown;
        };
        /** Metadata about the folder creation operation */
        meta?: {
          /** The model type */
          model?: string;
          /** The action performed */
          action?: string;
          [key: string]: unknown;
        };
        /** The model ID of the created folder */
        model_id?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to create a comment on a folder. Use when you need to add a comment to a specific folder in a collection. */
    "postman.create_a_folder_comment": {
      input: {
        /** The comment text content to post on the folder. */
        body: string;
        /** The unique identifier (UID) of the folder to comment on. */
        folder_uid: string;
        /** The unique identifier (UID) of the collection containing the folder. */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** The created comment object with all its details */
        data?: {
          /** The comment's unique ID */
          id?: number;
          /** The comment text content */
          body?: string;
          /** The comment status */
          status?: string;
          /** The thread ID this comment belongs to */
          thread_id?: number;
          /** ISO 8601 timestamp when comment was created */
          created_at?: string;
          /** User ID who created the comment */
          created_by?: number;
          /** ISO 8601 timestamp when comment was last updated */
          updated_at?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to create a fork from an existing environment into a workspace. Use when you need to fork an environment to a specified workspace. */
    "postman.create_a_fork2": {
      input: {
        /** A name for the forked environment */
        fork_name: string;
        /** The workspace ID where the forked environment will be created */
        workspace: string;
        /** The unique identifier (UID) of the environment to fork */
        environment_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** The environment object containing the fork details */
        environment?: {
          /** The unique identifier of the newly created fork */
          uid?: string;
          /** The original environment name */
          name?: string;
          /** The name of the forked environment */
          forkName?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to create a new mock server in a Postman collection. Use when you need to create a mock server to simulate API endpoints for testing or development. Returns the created mock server's details including the mockUrl which can be used to make requests. */
    "postman.create_a_mock_server": {
      input: {
        /** Mock server configuration containing name, collection UID, optional environment UID, and privacy setting */
        mock: {
          /** The name for the mock server */
          name: string;
          /** Whether to create a private mock server. Private mocks require API key authentication. Default is false (public). */
          private?: boolean;
          /** The collection UID (format: userId-collectionId) to create the mock server from */
          collection: string;
          /** The environment UID to use with the mock server */
          environment?: string;
        };
        /** The workspace ID where the mock server should be created */
        workspace?: string;
        [key: string]: unknown;
      };
      output: {
        /** Created mock server object with details including id, name, uid, owner, collection, environment, mockUrl, and isPublic */
        mock?: {
          /** Unique identifier of the created mock server */
          id?: string;
          /** Unique identifier with team/user prefix */
          uid?: string;
          /** Name of the created mock server */
          name?: string;
          /** User ID of the mock server owner */
          owner?: string;
          /** URL of the mock server that can be used to make requests */
          mockUrl?: string;
          /** Whether the mock server is public (true) or private (false). Private mocks require API key authentication. */
          isPublic?: boolean;
          /** Collection ID associated with this mock server */
          collection?: string;
          /** Environment ID associated with this mock server (if applicable) */
          environment?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to create a new monitor in a specific workspace to run a collection on a schedule. Use when you need to set up automated collection runs at specified intervals using cron expressions within a workspace. */
    "postman.create_a_monitor": {
      input: {
        /** Monitor configuration object containing name, collection, schedule, and optional environment */
        monitor: {
          /** Name of the monitor to be created */
          name: string;
          /** Schedule configuration defining when and how often the monitor should run */
          schedule: {
            /** Cron expression defining when the monitor should run (e.g., '0 0 * * *' for daily at midnight, '0 *\/6 * * *' for every 6 hours) */
            cron: string;
            /** Timezone for the monitor schedule (e.g., 'UTC', 'America/New_York', 'Asia/Kolkata') */
            timezone: string;
          };
          /** Collection UID in the format 'owner-collectionId' (e.g., '12345678-abcd1234-ef56-7890-abcd-1234567890ab') */
          collection: string;
          /** Optional environment UID to use with the monitor. If not provided, the monitor runs without an environment. */
          environment?: string;
        };
        /** The workspace ID where the monitor will be created */
        workspace: string;
        [key: string]: unknown;
      };
      output: {
        /** The created monitor object with id, name, and uid */
        monitor?: {
          /** Unique identifier of the created monitor */
          id?: string;
          /** Unique identifier with team/user prefix */
          uid?: string;
          /** Name of the created monitor */
          name?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to create a pull request for a forked collection into its parent collection. Use when you need to propose changes from a forked collection to be merged into the parent collection. The forked collection must exist before creating a pull request. */
    "postman.create_a_pull_request": {
      input: {
        /** The title of the pull request. This should summarize the changes being proposed. */
        title: string;
        /** Array of reviewer user IDs or user groups who should review the pull request. Can be an empty array if no specific reviewers are required. */
        reviewers?: Array<string>;
        /** A detailed description of the changes in the pull request. Provides context for reviewers. */
        description?: string;
        /** The unique identifier (UID) of the forked collection from which to create the pull request. Format: {owner}-{collectionId} */
        collection_uid: string;
        /** The UID of the destination (parent) collection where the changes will be merged. Format: {owner}-{collectionId} */
        destination_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The pull request object containing details about the created pull request */
        data?: {
          /** Unique identifier of the created pull request */
          id?: string;
          /** Title of the pull request */
          title?: string;
          /** Source collection ID (the forked collection) */
          source?: string;
          /** Current status of the pull request (e.g., 'open', 'merged', 'declined') */
          status?: string;
          /** ISO 8601 timestamp when the pull request was created */
          created_at?: string;
          /** User ID of the pull request creator */
          created_by?: number;
          /** ISO 8601 timestamp when the pull request was last updated */
          updated_at?: string;
          /** Description of the pull request */
          description?: string;
          /** Destination collection ID (the parent collection) */
          destination?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to create a new request in a Postman collection. Use when you need to add a request to an existing collection with specified method, URL, headers, and body. */
    "postman.create_a_request": {
      input: {
        /** The name of the request to create */
        name: string;
        /** The request object containing method, URL, headers, body, and other request details following the Postman Collection Format */
        request: {
          /** The request URL */
          url: string;
          /** Body object for the request. */
          body?: {
            /** The raw body content when mode is 'raw' */
            raw?: string;
            /** The mode of the request body (e.g., 'raw', 'urlencoded', 'formdata') */
            mode?: string;
            /** Form data key-value pairs when mode is 'formdata' */
            formdata?: Array<Record<string, string | boolean>>;
            /** URL-encoded key-value pairs when mode is 'urlencoded' */
            urlencoded?: Array<Record<string, string | boolean>>;
          };
          /** Array of header objects for the request */
          header?: Array<{
            /** The header key/name */
            key: string;
            /** The header value */
            value: string;
            /** Whether this header is disabled */
            disabled?: boolean;
            [key: string]: unknown;
          }>;
          /** HTTP method for the request */
          method: string;
          /** Description of the request */
          description?: string;
        };
        /** The unique identifier of the collection where the request will be created */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Data about the created request */
        data?: {
          /** The unique identifier of the created request */
          id?: string;
          /** The URL of the request */
          url?: string;
          /** The name of the created request */
          name?: string;
          /** The owner ID of the request */
          owner?: string;
          /** The folder ID if the request is in a folder */
          folder?: string;
          /** The HTTP method of the request */
          method?: string;
          /** List of headers in the request */
          headers?: Array<Record<string, string | boolean>>;
          /** The data mode of the request body */
          dataMode?: string;
          /** ISO 8601 timestamp when the request was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the request was last updated */
          updatedAt?: string;
          /** The collection ID containing this request */
          collection?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to create a comment on a request. Use when you need to add a comment to a specific request within a collection or reply to an existing comment thread. */
    "postman.create_a_request_comment": {
      input: {
        /** The comment text content to post on the request. */
        body: string;
        /** Optional thread ID to reply to an existing comment. If provided, this comment will be added as a reply to the specified thread. */
        thread_id?: number;
        /** The request's unique ID (UID). This identifies the specific request to create a comment on. */
        request_uid: string;
        /** The collection's unique ID (UID). This identifies the collection containing the request. */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** The created comment object with all its details */
        data?: {
          /** The comment's unique ID */
          id?: number;
          /** The comment text content */
          body?: string;
          /** The comment status (e.g., Open) */
          status?: string;
          /** The thread ID this comment belongs to */
          thread_id?: number;
          /** ISO 8601 timestamp when comment was created */
          created_at?: string;
          /** User ID who created the comment */
          created_by?: number;
          /** ISO 8601 timestamp when comment was last updated */
          updated_at?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to create a request response in a Postman collection. Use when you need to add a saved response example to a specific request in a collection. */
    "postman.create_a_response": {
      input: {
        /** The response body as a string */
        body?: string;
        /** The HTTP status code */
        code?: number;
        /** The name of the response example */
        name: string;
        /** Array of header objects with key and value properties */
        header?: Array<{
          /** The header key name */
          key: string;
          /** The header value */
          value: string;
          [key: string]: unknown;
        }>;
        /** The status text (e.g., OK, Not Found, Bad Request) */
        status?: string;
        /** The unique identifier of the collection where the response will be created */
        collection_id: string;
        /** The original request object structure. */
        original_request?: {
          /** The URL of the original request */
          url?: string;
          /** HTTP method of the request (GET, POST, PUT, DELETE, etc.) */
          method?: string;
        };
        /** The unique identifier of the parent request to which this response will be attached */
        parent_request_id: string;
        /** The preview language for the response body (e.g., json, html, xml) */
        _postman_previewlanguage?: string;
        [key: string]: unknown;
      };
      output: {
        /** Data about the created response */
        data?: {
          /** The unique identifier of the created response */
          id?: string;
          /** The name of the response */
          name?: string;
          /** The response body text */
          text?: string;
          /** The owner ID of the response */
          owner?: string;
          /** The status text of the response */
          status?: string;
          /** List of response headers */
          headers?: Array<Record<string, string | number | boolean>>;
          /** The request ID associated with this response */
          request?: string;
          /** The language of the response */
          language?: string;
          /** ISO 8601 timestamp when the response was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the response was last updated */
          updatedAt?: string;
          /** The raw data type of the response */
          rawDataType?: string;
          /** The HTTP response code */
          responseCode?: number;
          /** The request object associated with this response */
          requestObject?: Record<string, string | number | boolean | Array<unknown> | Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** Metadata about the response operation */
        meta?: {
          /** The model type */
          model?: string;
          /** The action performed */
          action?: string;
          [key: string]: unknown;
        };
        /** The model ID of the response */
        model_id?: string;
        /** The revision number of the collection after creation */
        revision?: number;
        [key: string]: unknown;
      };
    };
    /** Tool to create a comment on a response. Use when you need to add a comment to a specific response within a collection or reply to an existing comment thread. */
    "postman.create_a_response_comment": {
      input: {
        /** The comment text content to post on the response. */
        body: string;
        /** Optional thread ID to reply to an existing comment. If provided, this comment will be added as a reply to the specified thread. */
        thread_id?: number;
        /** The response's unique ID (UID). This identifies the specific response to create a comment on. */
        response_uid: string;
        /** The collection's unique ID (UID). This identifies the collection containing the response. */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** The created comment object with all its details */
        data?: {
          /** The comment's unique ID */
          id?: number;
          /** The comment text content */
          body?: string;
          /** The comment status (e.g., Open) */
          status?: string;
          /** The thread ID this comment belongs to */
          thread_id?: number;
          /** ISO 8601 timestamp when comment was created */
          created_at?: string;
          /** User ID who created the comment */
          created_by?: number;
          /** ISO 8601 timestamp when comment was last updated */
          updated_at?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to create a schema for an API in Postman. Use when you need to add a schema definition (such as OpenAPI, GraphQL, or Protocol Buffers) to an existing API. The schema can consist of single or multiple files. Returns the created schema's ID and metadata upon successful creation. */
    "postman.create_a_schema": {
      input: {
        /** The type of schema being created. Common values include 'openapi:3' (OpenAPI 3.0), 'openapi:2' (Swagger 2.0), 'proto' (Protocol Buffers), 'graphql', etc. */
        type: string;
        /** List of files that make up the schema. Each file must have a path and content. For single-file schemas, provide one file; for multi-file schemas, provide all referenced files */
        files: Array<{
          /** The path of the file in the schema (e.g., 'index.json', 'openapi.yaml'). This defines the file structure within the schema */
          path: string;
          /** The actual content of the schema file. Must be a valid JSON or YAML string representation of the schema (e.g., OpenAPI specification) */
          content: string;
          [key: string]: unknown;
        }>;
        /** The unique identifier (UUID) of the API for which to create the schema */
        api_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The unique identifier of the created schema */
        id?: string;
        /** The type of the schema (e.g., 'openapi:3') */
        type?: string;
        /** List of files that were created as part of the schema */
        files?: Array<{
          /** Unique identifier of the created file */
          id?: string;
          /** Name of the file */
          name?: string;
          /** Path of the file in the schema */
          path?: string;
          [key: string]: unknown;
        }>;
        /** ISO 8601 timestamp when the schema was created */
        created_at?: string;
        /** User ID who created the schema */
        created_by?: string;
        /** ISO 8601 timestamp when the schema was last updated */
        updated_at?: string;
        /** User ID who last updated the schema */
        updated_by?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to create a server response on a Postman mock server. Use when you need to simulate 5xx server-level responses (500, 503, etc.) for testing error conditions. */
    "postman.create_a_server_response": {
      input: {
        /** The unique identifier of the mock server (UUID format) */
        mock_id: string;
        /** Server response configuration containing name, status code, and optional body/headers */
        serverResponse: {
          /** The response body content as a string */
          body?: string;
          /** Name of the server response (e.g., 'Internal Server Error', 'Service Unavailable') */
          name: string;
          /** Array of header objects with key and value properties */
          headers?: Array<Record<string, string>>;
          /** Preview language for the response body (e.g., json, html, text) */
          language?: string;
          /** HTTP status code for the server-level response. Must be a 5xx status code (500-599) */
          statusCode: number;
        };
        [key: string]: unknown;
      };
      output: {
        /** The created server response object with id, name, uid, and status code */
        serverResponse?: {
          /** Unique identifier of the created server response */
          id?: string;
          /** Unique identifier with team/user prefix */
          uid?: string;
          /** The response body content */
          body?: string;
          /** Name of the server response */
          name?: string;
          /** List of response headers */
          headers?: Array<Record<string, string | number | boolean>>;
          /** Preview language for the response body */
          language?: string;
          /** ISO 8601 timestamp when the server response was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the server response was last updated */
          updatedAt?: string;
          /** HTTP status code of the server response */
          statusCode?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to create an API specification in Postman's Spec Hub. Use when you need to create single or multi-file specifications in a workspace. Supports various spec types including OpenAPI 3.0, OpenAPI 3.1, and AsyncAPI 2.0. */
    "postman.create_a_spec": {
      input: {
        /** The name of the API specification to create */
        name: string;
        /** The type of specification. Common values include 'OPENAPI:3.0', 'OPENAPI:3.1', 'ASYNCAPI:2.0' */
        type: string;
        /**
         * Array of files for the specification. Each file must have a path and content property. For single-file specs, provide one file; for multi-file specs, provide multiple files
         * @minItems 1
         */
        files: Array<{
          /** The file path within the specification (e.g., 'index.yaml', 'paths/users.yaml') */
          path: string;
          /** The content of the file as a string. For YAML files, provide properly formatted YAML content */
          content: string;
          [key: string]: unknown;
        }>;
        /** The workspace ID where the spec will be created. This is a UUID format string identifying the target workspace */
        workspace_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Unique identifier of the created specification */
        id?: string;
        /** Name of the created specification */
        name?: string;
        /** Type of specification (e.g., 'OPENAPI:3.0') */
        type?: string;
        /** ISO 8601 timestamp when the spec was created */
        createdAt?: string;
        /** User ID who created the spec */
        createdBy?: number;
        /** ISO 8601 timestamp when the spec was last updated */
        updatedAt?: string;
        /** User ID who last updated the spec */
        updatedBy?: number;
        [key: string]: unknown;
      };
    };
    /** Tool to create a new file in an API specification. Use when you need to add a new file (such as schema definitions, path configurations, or components) to an existing spec. */
    "postman.create_a_spec_file": {
      input: {
        /** The file path within the spec (e.g., 'components/schemas.yaml', 'paths/users.yaml'). This defines the file location in the spec structure */
        path: string;
        /** The content of the file to create. Must be a valid YAML or JSON string */
        content: string;
        /** The unique identifier of the API specification in which to create the file */
        spec_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The unique identifier of the created file */
        id?: string;
        /** The file path within the specification */
        path?: string;
        /** The type of file (e.g., 'DEFAULT', 'ROOT') */
        type?: string;
        /** ISO 8601 timestamp when the file was created */
        created_at?: string;
        /** User ID who created the file */
        created_by?: number;
        /** ISO 8601 timestamp when the file was last updated */
        updated_at?: string;
        /** User ID who last updated the file */
        updated_by?: number;
        [key: string]: unknown;
      };
    };
    /** Tool to create a webhook that triggers a collection with a custom payload. Use when you need to set up a webhook endpoint that can trigger a Postman collection run. The webhook URL is available in the webhookUrl property of the response. */
    "postman.create_a_webhook": {
      input: {
        /** Webhook configuration object containing name and collection UID */
        webhook: {
          /** Name of the webhook to be created */
          name: string;
          /** Collection UID in the format 'owner-collectionId' (e.g., '12345678-abcd1234-ef56-7890-abcd-1234567890ab'). This is the collection that will be triggered by the webhook. */
          collection: string;
        };
        /** The workspace ID where the webhook will be created */
        workspace: string;
        [key: string]: unknown;
      };
      output: {
        /** The created webhook object with id, name, collection, webhookUrl, and uid */
        webhook?: {
          /** Unique identifier of the created webhook */
          id?: string;
          /** Unique identifier with team/user prefix */
          uid?: string;
          /** Name of the created webhook */
          name?: string;
          /** Collection UID associated with the webhook */
          collection?: string;
          /** The URL endpoint for triggering this webhook with custom payloads */
          webhookUrl?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to create a new workspace in Postman. Use when you need to create a workspace with a specified name, type (personal, team, private, or public), and optional description. Returns the created workspace's ID, name, and type upon successful creation. */
    "postman.create_a_workspace": {
      input: {
        /** The workspace object containing name, type, and optional description */
        workspace: {
          /** The name of the workspace to create */
          name: string;
          /** The type of workspace. Use 'personal' for individual workspaces, 'team' for team collaboration, 'private' for private team workspaces, or 'public' for publicly accessible workspaces */
          type: "personal" | "team" | "private" | "public";
          /** A detailed description of the workspace */
          description?: string;
        };
        [key: string]: unknown;
      };
      output: {
        /** The created workspace object with id, name, and type */
        workspace?: {
          /** The unique identifier of the created workspace */
          id?: string;
          /** The name of the created workspace */
          name?: string;
          /** The type of the created workspace */
          type?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to create a new API in Postman. Use when you need to create an API with a name, summary, and description in your Postman workspace. */
    "postman.create_an_api": {
      input: {
        /** The API object containing name, summary, and description */
        api: {
          /** The name of the API to create */
          name: string;
          /** A brief summary of the API */
          summary?: string;
          /** A detailed description of the API */
          description?: string;
        };
        /** The workspace ID where the API will be created */
        workspace_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The unique identifier of the created API */
        id?: string;
        /** The name of the created API */
        name?: string;
        /** The summary of the created API */
        summary?: string;
        /** ISO 8601 timestamp when the API was created */
        createdAt?: string;
        /** User ID of who created the API */
        createdBy?: string;
        /** ISO 8601 timestamp when the API was last updated */
        updatedAt?: string;
        /** User ID of who last updated the API */
        updatedBy?: string;
        /** The description of the created API */
        description?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to create a new environment in a Postman workspace. Use when you need to create a new environment with variables for different settings (development, production, testing, etc.). Returns the created environment's ID, name, and UID upon successful creation. */
    "postman.create_an_environment": {
      input: {
        /** Environment object containing name and optional array of environment variables */
        environment: {
          /** The name of the environment to create */
          name: string;
          /** Array of environment variables with key, value, type, and enabled properties. Defaults to empty array for new environments */
          values?: Array<{
            /** The name/key of the environment variable */
            key: string;
            /**
             * The type of the variable. Use 'default' for regular variables or 'secret' for sensitive values like passwords and API keys
             * @default "default"
             */
            type?: "default" | "secret";
            /** The value of the environment variable */
            value: string;
            /**
             * Whether the variable is enabled and active in the environment
             * @default true
             */
            enabled?: boolean;
            [key: string]: unknown;
          }>;
        };
        /** The workspace ID where the environment will be created. Required to associate the environment with a specific workspace */
        workspace_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Created environment object containing id, name, and uid */
        environment?: {
          /** Unique identifier of the created environment */
          id?: string;
          /** Unique identifier with team/user prefix */
          uid?: string;
          /** Name of the created environment */
          name?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to create or update an API schema file in Postman. Use when you need to add a new schema file or modify an existing one within an API schema. Requires API ID, schema ID, file path, and stringified JSON content. */
    "postman.create_or_update_a_schema_file": {
      input: {
        /** The unique identifier of the API containing the schema. This is the API's ID in Postman. */
        api_id: string;
        /** The stringified JSON content of the schema file. This should be a JSON string representation of your schema content. For complex JSON objects, ensure proper escaping. */
        content: string;
        /** The path to the schema file to create or update. This is the file path within the schema structure (e.g., 'index.json', 'components.json', 'schemas/openapi.yaml'). */
        file_path: string;
        /** The unique identifier of the schema to which the file belongs. This is the schema's ID within the API. */
        schema_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The created or updated schema file object with metadata including ID, name, path, and timestamps */
        file?: {
          /** Unique identifier of the schema file */
          id?: string;
          /** Name of the schema file */
          name?: string;
          /** File path within the schema structure */
          path?: string;
          /** Root configuration indicating if this is a root file */
          root?: {
            /** Indicates whether the file is enabled as a root file in the schema */
            enabled?: boolean;
            [key: string]: unknown;
          };
          /** ISO 8601 timestamp when the file was created */
          created_at?: string;
          /** User ID of the person who created the file */
          created_by?: string;
          /** ISO 8601 timestamp when the file was last updated */
          updated_at?: string;
          /** User ID of the person who last updated the file */
          updated_by?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to create new relations for an API version. Use when you need to link collections or mock servers to an API version as contract tests, test suites, documentation, or mocks. */
    "postman.create_relations": {
      input: {
        /** Array of mock server UIDs */
        mock?: Array<string>;
        /** The unique identifier of the API */
        api_id: string;
        /** Array of collection UIDs for test suites */
        testsuite?: Array<string>;
        /** Array of collection UIDs for contract testing */
        contracttest?: Array<string>;
        /** Array of collection UIDs for documentation */
        documentation?: Array<string>;
        /** The unique identifier of the API version */
        api_version_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of mock server relations created (can be IDs or relation objects) */
        mock?: Array<string | {
          /** Unique identifier of the relation */
          id?: string;
          /** Name of the related entity */
          name?: string;
          /** Type of relation (contracttest, testsuite, documentation, mock) */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Array of test suite relations created (can be IDs or relation objects) */
        testsuite?: Array<string | {
          /** Unique identifier of the relation */
          id?: string;
          /** Name of the related entity */
          name?: string;
          /** Type of relation (contracttest, testsuite, documentation, mock) */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Array of contract test relations created (can be IDs or relation objects) */
        contracttest?: Array<string | {
          /** Unique identifier of the relation */
          id?: string;
          /** Name of the related entity */
          name?: string;
          /** Type of relation (contracttest, testsuite, documentation, mock) */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Array of documentation relations created (can be IDs or relation objects) */
        documentation?: Array<string | {
          /** Unique identifier of the relation */
          id?: string;
          /** Name of the related entity */
          name?: string;
          /** Type of relation (contracttest, testsuite, documentation, mock) */
          type?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to permanently delete a collection from Postman. Use when you need to remove a collection that is no longer needed. */
    "postman.delete_a_collection": {
      input: {
        /** The unique identifier (UID) or ID of the collection to delete. */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Information about the deleted collection */
        collection?: {
          /** The ID of the deleted collection */
          id?: string;
          /** The UID of the deleted collection */
          uid?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to delete a comment from an API's collection. Use when you need to remove a specific comment from a collection. On success, returns HTTP 204 No Content. */
    "postman.delete_a_collections_comment": {
      input: {
        /** The API's ID */
        api_id: string;
        /** The comment's ID */
        comment_id: number;
        /** The collection's UID */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Status message describing the result */
        message: string;
        /** Indicates whether the comment was successfully deleted */
        success: boolean;
        [key: string]: unknown;
      };
    };
    /** Tool to delete a folder in a Postman collection. Use when you need to remove a folder and all its contents from a collection. The folder ID should not contain spaces to avoid 404 errors. */
    "postman.delete_a_folder": {
      input: {
        /** The folder's ID. This is the unique identifier for the folder to delete. Note: folder IDs should not contain spaces to avoid 404 errors. */
        folder_id: string;
        /** The collection's ID. This is the unique identifier for the collection containing the folder to delete. */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Data information about the deleted folder */
        data?: {
          /** The ID of the deleted folder */
          id?: string;
          /** The owner ID of the deleted folder */
          owner?: string;
          [key: string]: unknown;
        };
        /** Metadata about the delete operation */
        meta?: {
          /** The type of model that was deleted */
          model?: string;
          /** The action performed */
          action?: string;
          [key: string]: unknown;
        };
        /** The ID of the deleted folder */
        model_id?: string;
        /** The revision number after the delete operation */
        revision?: number;
        [key: string]: unknown;
      };
    };
    /** Tool to delete a comment from a folder. Use when you need to remove a specific comment from a folder. Returns HTTP 204 No Content on successful deletion. */
    "postman.delete_a_folders_comment": {
      input: {
        /** The ID of the comment to delete */
        comment_id: number;
        /** The unique identifier (UID) of the folder */
        folder_uid: string;
        /** The unique identifier (UID) of the collection */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /**
         * Indicates the operation completed successfully
         * @default true
         */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Tool to delete a comment from a request. Use when you need to remove a specific comment from a request. On success, this returns an HTTP 204 No Content response. */
    "postman.delete_a_requests_comment": {
      input: {
        /** The comment's ID to delete. This identifies the specific comment to be removed. */
        comment_id: number;
        /** The request's unique ID (UID). This identifies the specific request containing the comment. */
        request_uid: string;
        /** The collection's unique ID (UID). This identifies the collection containing the request. */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /**
         * Indicates the operation completed successfully
         * @default true
         */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Tool to delete a response in a Postman collection. Use when you need to remove a saved response from a collection. */
    "postman.delete_a_response": {
      input: {
        /** The unique identifier of the response to delete */
        response_id: string;
        /** The unique identifier of the collection containing the response */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Data about the deleted response */
        data?: {
          /** The ID of the deleted response */
          id?: string;
          /** The owner ID of the response */
          owner?: string;
          [key: string]: unknown;
        };
        /** Metadata about the deletion operation */
        meta?: {
          /** The model type, typically 'response' */
          model?: string;
          /** The action performed, typically 'destroy' */
          action?: string;
          [key: string]: unknown;
        };
        /** The ID of the deleted response model */
        model_id?: string;
        /** The revision number after deletion */
        revision?: number;
        [key: string]: unknown;
      };
    };
    /** Tool to delete a comment from a response. Use when you need to remove a specific comment from a collection response. On successful deletion, this returns HTTP 204 No Content. */
    "postman.delete_a_responses_comment": {
      input: {
        /** The unique identifier for the comment to delete. */
        comment_id: number;
        /** The unique identifier for the response. */
        response_uid: string;
        /** The unique identifier for the collection. */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /**
         * Indicates the operation completed successfully
         * @default true
         */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Tool to delete a file in an API schema. Use when you need to remove a specific file from a schema. On success, returns HTTP 204 No Content response. */
    "postman.delete_a_schema_file": {
      input: {
        /** The API's ID. This is the unique identifier for the API containing the schema. */
        api_id: string;
        /** The path to the schema file to delete. This is the file path within the schema. */
        file_path: string;
        /** The schema's ID. This is the unique identifier for the schema containing the file. */
        schema_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Indicates if the delete operation was successful. Returns true when file is deleted (HTTP 204). */
        success: boolean;
        [key: string]: unknown;
      };
    };
    /** Tool to delete a mock server's server response. Use when you need to remove a specific response from a Postman mock server. */
    "postman.delete_a_server_response": {
      input: {
        /** The mock server's unique identifier (UUID format) */
        mock_id: string;
        /** The server response's unique identifier (UUID format) to delete */
        server_response_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Details of the deleted server response */
        server_response?: {
          /** The unique identifier of the server response */
          id?: string;
          /** The unique identifier (uid) of the server response */
          uid?: string;
          /** The name of the server response */
          name?: string;
          /** The HTTP status code of the server response */
          status_code?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to delete an API specification from Postman. Use when you need to permanently remove a specification. On success, returns HTTP 204 No Content response. */
    "postman.delete_a_spec": {
      input: {
        /** The ID of the API specification to delete. This is the unique identifier for the specification. */
        spec_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Indicates if the delete operation was successful. Returns true when spec is deleted (HTTP 204). */
        success: boolean;
        [key: string]: unknown;
      };
    };
    /** Tool to delete a file from an API specification. Use when you need to remove a specific file from a multi-file specification. */
    "postman.delete_a_spec_file": {
      input: {
        /** The unique identifier of the API specification containing the file to delete */
        spec_id: string;
        /** The path to the file within the specification to delete (e.g., 'components/schemas.yaml', 'openapi.yaml') */
        file_path: string;
        [key: string]: unknown;
      };
      output: {
        /**
         * Indicates the file was successfully deleted from the specification
         * @default true
         */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Tool to delete a Postman workspace permanently. Use when you need to remove a workspace and all its contents. Deletion is permanent and cannot be undone. */
    "postman.delete_a_workspace": {
      input: {
        /** The ID of the workspace to delete. This is the unique identifier assigned to the workspace when it was created. */
        workspace_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Contains the ID of the deleted workspace */
        workspace: {
          /** The unique identifier of the deleted workspace */
          id: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to delete an API from Postman. Use when you need to permanently remove an API. On success, returns HTTP 204 No Content response. */
    "postman.delete_an_api": {
      input: {
        /** The ID of the API to delete. This is the unique identifier for the API. */
        api_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Indicates if the delete operation was successful. Returns true when API is deleted (HTTP 204). */
        success: boolean;
        [key: string]: unknown;
      };
    };
    /** Tool to delete a comment from an API. Use when you need to remove a comment from a specific API. On success, this returns an HTTP 204 No Content response indicating the comment was successfully deleted. */
    "postman.delete_an_apis_comment": {
      input: {
        /** The API ID. This is the unique identifier of the API from which to delete the comment */
        api_id: string;
        /** The comment ID. This is the unique identifier of the comment to delete */
        comment_id: string;
        [key: string]: unknown;
      };
      output: {
        /**
         * Indicates the operation completed successfully
         * @default true
         */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Tool to delete an environment permanently in Postman. Use when you need to remove an environment that is no longer needed. */
    "postman.delete_an_environment": {
      input: {
        /** The environment ID or UID to delete. */
        environment_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Information about the deleted environment */
        environment?: {
          /** The unique identifier of the deleted environment */
          id?: string;
          /** The UID of the deleted environment */
          uid?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to delete a monitor by its ID. Use when you need to permanently remove a monitor from Postman. The monitor ID must be provided to identify which monitor to delete. */
    "postman.delete_monitor": {
      input: {
        /** The ID of the monitor to delete */
        monitor_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Information about the deleted monitor */
        monitor: {
          /** The ID of the deleted monitor */
          id: string;
          /** The UID of the deleted monitor */
          uid: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to create a duplicate of a collection in another workspace. Use when you need to copy an existing collection to a different workspace. Returns an asynchronous task that can be tracked using the duplication task status endpoint. */
    "postman.duplicate_a_collection": {
      input: {
        /** The ID of the workspace where the duplicated collection will be created */
        workspace: string;
        /** The unique identifier (UUID) of the collection to duplicate */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Task object containing status and id fields for the asynchronous duplication operation */
        task?: {
          /** The unique identifier for the duplication task */
          id?: string;
          /** The status of the duplication task (e.g., 'processing') */
          status?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to create a fork of a collection in a specified workspace. Use when you need to fork an existing collection to a workspace. */
    "postman.fork_collection": {
      input: {
        /** Label or name for the fork. If not provided, the fork will be created with a default label. */
        label?: string;
        /** The workspace ID where the forked collection will be created. This is a required parameter for creating a fork. */
        workspace: string;
        /** The unique identifier (UUID) of the collection to fork */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The fork object containing the ID and name of the newly created forked collection */
        fork?: {
          /** The unique identifier of the forked collection */
          id?: string;
          /** The name of the forked collection */
          name?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to generate a Postman collection from an OpenAPI 2.0, 3.0, or 3.1 specification. Use when you need to create a collection from an existing API spec. The operation is asynchronous and returns a task ID and polling URL to check the generation status. */
    "postman.generate_a_collection_from_spec": {
      input: {
        /** The name for the generated collection. This will be the display name in Postman. */
        name: string;
        /** Options for configuring the collection generation from the specification. */
        options?: {
          /** Determines how folders are organized in the generated collection. 'Paths' organizes by API paths, 'Tags' organizes by OpenAPI tags. */
          folderStrategy?: "Paths" | "Tags";
          /** Source for generating request names. 'Fallback' uses operationId, summary, or URL as fallback. 'URL' uses the endpoint URL. */
          requestNameSource?: "Fallback" | "URL";
        };
        /** The unique identifier of the API specification from which to generate the collection. */
        spec_id: string;
        /**
         * The type of element to generate. Must be 'collection' for collection generation.
         * @default "collection"
         */
        element_type?: "collection";
        [key: string]: unknown;
      };
      output: {
        /** The relative polling URL to check the task status. Append this to the base URL to monitor generation progress. */
        url?: string;
        /** The unique identifier for the asynchronous generation task. Use this to poll the task status. */
        taskId?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to generate an API specification from a Postman collection. Use when you need to create an OpenAPI 3.0 specification from an existing collection. The operation is asynchronous and returns a task ID and polling URL to check the generation status. */
    "postman.generate_spec_from_collection": {
      input: {
        /** The name for the generated API specification. This will be used to identify the generated spec. */
        name: string;
        /** The specification type to generate. Must be 'OPENAPI:3.0' for OpenAPI 3.0 specification format. */
        type: "OPENAPI:3.0";
        /** The format of the generated specification file. Choose 'json' for JSON format or 'yaml' for YAML format. */
        format: "json" | "yaml";
        /**
         * The type of element to generate. Valid value is 'spec' for API specification generation.
         * @default "spec"
         */
        element_type?: "spec";
        /** The unique identifier for the collection (UID format). This identifies the collection to generate the specification from. */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** The relative polling URL to check the task status. Append this to the base URL to monitor generation progress. */
        url?: string;
        /** The unique identifier for the asynchronous task. Use this to poll the task status. */
        taskId?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve all comments left by users in an API's collection. Use when you need to fetch all comments associated with a specific collection within an API. */
    "postman.get_a_collections_comments": {
      input: {
        /** The API's unique identifier (UUID). This identifies the API containing the collection. */
        api_id: string;
        /** The collection's unique identifier (UUID). This identifies the specific collection to retrieve comments from. */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of comment objects left by users in the collection */
        data?: Array<{
          /** The comment's unique ID */
          id?: number;
          /** Information about the user who created the comment */
          user?: {
            /** The user's unique ID */
            id?: number;
            /** The user's username */
            username?: string;
            [key: string]: unknown;
          };
          /** The comment's content/text */
          content?: string;
          /** The ID of the user who created the comment */
          user_id?: number;
          /** ISO 8601 timestamp when the comment was created */
          created_at?: string;
          /** ISO 8601 timestamp when the comment was last updated */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get all forks of a specific collection. Use when you need to retrieve information about who has forked a collection, including fork IDs, users, and creation dates. */
    "postman.get_a_collections_forks": {
      input: {
        /** The unique identifier (UUID) of the collection whose forks you want to retrieve */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of fork objects, each containing fork ID, user who forked it, and creation date */
        data?: Array<{
          /** Unique identifier of the forked collection */
          id?: string;
          /** Unique identifier for the collection in the form of teamId-collectionId */
          uid?: string;
          /** Fork metadata including label, creation timestamp, and source collection reference */
          fork?: {
            /** Reference to the source collection that was forked */
            from?: string;
            /** Label or name of the fork */
            label?: string;
            /** ISO 8601 timestamp when the fork was created */
            createdAt?: string;
            [key: string]: unknown;
          };
          /** Name of the forked collection */
          name?: string;
          /** User ID of the collection owner who forked it */
          owner?: string;
          /** ISO 8601 timestamp when the fork was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the fork was last updated */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Metadata about the response including total count and pagination cursor */
        meta?: {
          /** Total number of forks for this collection */
          total?: number;
          /** Cursor for pagination to fetch next set of results */
          nextCursor?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to get information about a collection's pull requests including source and destination IDs, status, and URLs. Use when you need to retrieve pull request details for a specific collection. */
    "postman.get_a_collections_pull_requests": {
      input: {
        /** The unique identifier for the collection in the format {owner}-{collectionId}. This identifies the collection to retrieve pull requests from. */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of pull request objects for the collection, containing source and destination IDs, status, and URLs */
        data?: Array<{
          /** Unique identifier of the pull request */
          id?: string;
          /** URL link to view the pull request details */
          url?: string;
          /** Title of the pull request */
          title?: string;
          /** Source collection ID where the changes originate */
          source?: string;
          /** Current status of the pull request (e.g., 'open', 'merged', 'declined', 'closed') */
          status?: string;
          /** ISO 8601 timestamp when the pull request was created */
          created_at?: string;
          /** ISO 8601 timestamp when the pull request was last updated */
          updated_at?: string;
          /** Description or details about the pull request */
          description?: string;
          /** Destination collection ID where the changes will be merged */
          destination?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get information about all roles in a collection. Use when you need to retrieve the IDs of all users, teams, and groups with access to view or edit a collection. */
    "postman.get_a_collections_roles": {
      input: {
        /** The unique identifier of the collection to retrieve roles for */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of team roles with access to the collection */
        team?: Array<{
          /** Team ID */
          id?: number;
          /** Role type assigned to the team (e.g., EDITOR, VIEWER) */
          role?: string;
          [key: string]: unknown;
        }>;
        /** Array of user roles with access to the collection */
        user?: Array<{
          /** User ID */
          id?: number;
          /** Role type assigned to the user (e.g., EDITOR, VIEWER) */
          role?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve information about a folder in a Postman collection. Use when you need to fetch details about a specific folder including its name, description, owner, and timestamps. */
    "postman.get_a_folder": {
      input: {
        /** The unique identifier of the folder to retrieve. Note: folder IDs should not contain spaces to avoid 404 errors. */
        folder_id: string;
        /** The unique identifier of the collection containing the folder */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Data about the folder */
        data?: {
          /** The unique identifier of the folder */
          id?: string;
          /** The name of the folder */
          name?: string;
          /** Array of request IDs in the folder's display order */
          order?: Array<string>;
          /** The owner ID of the folder */
          owner?: string;
          /** ISO 8601 timestamp when the folder was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the folder was last updated */
          updatedAt?: string;
          /** The collection ID containing this folder */
          collection?: string;
          /** The description of the folder */
          description?: string;
          /** Array of subfolder IDs in the folder's display order */
          foldersOrder?: Array<string>;
          /** User ID who last updated the folder */
          lastUpdatedBy?: string;
          [key: string]: unknown;
        };
        /** Metadata about the folder operation */
        meta?: {
          /** The model type */
          model?: string;
          /** The action performed */
          action?: string;
          [key: string]: unknown;
        };
        /** The model ID of the folder */
        model_id?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve all comments left by users in a folder. Use when you need to fetch all comments associated with a specific folder within a collection. */
    "postman.get_a_folders_comments": {
      input: {
        /** The folder's unique ID (UID). This identifies the specific folder to retrieve comments from. */
        folder_uid: string;
        /** The collection's unique ID (UID). This identifies the collection containing the folder. */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of comment objects left by users in the folder */
        data?: Array<{
          /** The comment's unique ID */
          id?: number;
          /** The comment's text content */
          body?: string;
          /** The comment's status (e.g., 'Open', 'Resolved') */
          status?: string;
          /** The thread ID this comment belongs to */
          thread_id?: number;
          /** ISO 8601 timestamp when the comment was created */
          created_at?: string;
          /** The ID of the user who created the comment */
          created_by?: number;
          /** ISO 8601 timestamp when the comment was last updated */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve information about a specific monitor in Postman. Use when you need to fetch monitor details including schedule, collection, environment, and run status. */
    "postman.get_a_monitor": {
      input: {
        /** The unique identifier of the monitor to retrieve */
        monitor_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The monitor object with all details */
        monitor?: {
          /** The unique identifier of the monitor */
          id?: string;
          /** Unique identifier with team/user prefix */
          uid?: string;
          /** The name of the monitor */
          name?: string;
          /** User ID of the monitor owner */
          owner?: string | number;
          /** Whether the monitor is active */
          active?: boolean;
          /** Information about the monitor's last run */
          lastRun?: {
            /** Statistics from the last run */
            stats?: Record<string, string | number>;
            /** Status of the last run (e.g., 'success', 'failure') */
            status?: string;
            /** ISO 8601 timestamp when the last run started */
            startedAt?: string;
            /** ISO 8601 timestamp when the last run finished */
            finishedAt?: string;
            [key: string]: unknown;
          };
          /** Additional configuration options */
          options?: {
            /** Whether to enforce strict SSL certificate validation */
            strictSSL?: boolean;
            /** Delay between requests in milliseconds */
            requestDelay?: number;
            /** Request timeout in milliseconds */
            requestTimeout?: number;
            /** Whether to follow HTTP redirects */
            followRedirects?: boolean;
            [key: string]: unknown;
          };
          /** Schedule configuration for the monitor */
          schedule?: {
            /** Cron expression defining when the monitor runs */
            cron?: string;
            /** ISO 8601 timestamp of the next scheduled run */
            nextRun?: string;
            /** Timezone for the schedule (e.g., 'America/New_York') */
            timezone?: string;
            [key: string]: unknown;
          };
          /** List of regions where the monitor runs */
          distribution?: Array<string>;
          /** UID of the collection being monitored */
          collectionUid?: string;
          /** Notification settings for the monitor */
          notifications?: {
            /** Notification settings triggered on monitor errors */
            onError?: Array<Record<string, unknown>>;
            /** Notification settings triggered on monitor failures */
            onFailure?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          };
          /** UID of the environment used by the monitor */
          environmentUid?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve information about a specific request in a Postman collection. Use when you need to fetch details about a request including its method, URL, headers, body, authentication, and associated scripts. */
    "postman.get_a_request": {
      input: {
        /** The unique identifier of the request to retrieve */
        request_id: string;
        /** The unique identifier of the collection containing the request */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Data about the request */
        data?: {
          /** The unique identifier of the request */
          id?: string;
          /** The URL of the request, either as a string or detailed URL object */
          url?: string | {
            /** The complete URL as a string */
            raw?: string;
            /** List of host components */
            host?: Array<string>;
            /** List of path segments */
            path?: Array<string>;
            /** List of query parameters */
            query?: Array<Record<string, string | boolean>>;
            /** The protocol (e.g., 'https') */
            protocol?: string;
            [key: string]: unknown;
          };
          /** Authentication configuration for the request */
          auth?: {
            /** The authentication type (e.g., 'apikey', 'bearer', 'basic') */
            type?: string;
            /** Basic authentication details */
            basic?: Array<Record<string, string | boolean>>;
            /** API key authentication details */
            apikey?: Array<Record<string, string | boolean>>;
            /** Bearer token authentication details */
            bearer?: Array<Record<string, string | boolean>>;
            [key: string]: unknown;
          };
          /** Request body information */
          body?: {
            /** Raw body content */
            raw?: string;
            /** The body mode (e.g., 'raw', 'urlencoded', 'formdata') */
            mode?: string;
            /** Form-data body parameters */
            formdata?: Array<Record<string, string | boolean>>;
            /** URL-encoded body parameters */
            urlencoded?: Array<Record<string, string | boolean>>;
            [key: string]: unknown;
          };
          /** The name of the request */
          name?: string;
          /** The owner ID of the request */
          owner?: string;
          /** List of events (pre-request scripts, test scripts) */
          events?: Array<{
            /** Event type (e.g., 'prerequest', 'test') */
            listen?: string;
            /** Script details including type and code */
            script?: Record<string, string | Array<string>>;
            [key: string]: unknown;
          }>;
          /** The folder ID this request belongs to, if any */
          folder?: string;
          /** List of headers for the request */
          header?: Array<Record<string, string | boolean>>;
          /** The HTTP method (e.g., 'GET', 'POST', 'PUT', 'DELETE') */
          method?: string;
          /** ISO 8601 timestamp when the request was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the request was last updated */
          updatedAt?: string;
          /** The collection ID this request belongs to */
          collection?: string;
          /** Description of the request */
          description?: string;
          /** The revision number of the request */
          lastRevision?: number;
          /** User ID who last updated the request */
          lastUpdatedBy?: string;
          [key: string]: unknown;
        };
        /** Metadata about the request operation */
        meta?: {
          /** The model type */
          model?: string;
          /** The action performed */
          action?: string;
          /** Whether to populate additional fields */
          populate?: boolean;
          /** Whether changeset is enabled */
          changeset?: boolean;
          [key: string]: unknown;
        };
        /** The model ID of the request */
        model_id?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve all comments left by users in a request. Use when you need to fetch all comments associated with a specific request within a collection. */
    "postman.get_a_requests_comments": {
      input: {
        /** The request's unique ID (UID). This identifies the specific request to retrieve comments from. */
        request_uid: string;
        /** The collection's unique ID (UID). This identifies the collection containing the request. */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of comment objects left by users in the request */
        data?: Array<{
          /** The comment's unique ID */
          id?: number;
          /** The comment's text content */
          body?: string;
          /** The comment's status (e.g., 'Open', 'Resolved') */
          status?: string;
          /** The thread ID this comment belongs to */
          thread_id?: number;
          /** ISO 8601 timestamp when the comment was created */
          created_at?: string;
          /** The ID of the user who created the comment */
          created_by?: number;
          /** ISO 8601 timestamp when the comment was last updated */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve information about a saved response in a Postman collection. Use when you need to fetch details about a specific response including status, headers, body, and metadata. */
    "postman.get_a_response": {
      input: {
        /** The unique identifier of the response to retrieve */
        response_id: string;
        /** The unique identifier of the collection containing the response */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Data about the response */
        data?: {
          /** The unique identifier of the response */
          id?: string;
          /** The MIME type of the response */
          mime?: string;
          /** The name of the response */
          name?: string;
          /** The response body text */
          text?: string;
          /** The response time in milliseconds */
          time?: number;
          /** The owner ID of the response */
          owner?: string;
          /** The status text of the response */
          status?: string;
          /** List of cookies in the response */
          cookies?: Array<Record<string, string | number | boolean>>;
          /** List of response headers */
          headers?: Array<Record<string, string | number | boolean>>;
          /** The request ID associated with this response */
          request?: string;
          /** The language of the response */
          language?: string;
          /** ISO 8601 timestamp when the response was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the response was last updated */
          updatedAt?: string;
          /** The raw data type of the response */
          rawDataType?: string;
          /** The revision number of the response */
          lastRevision?: number;
          /** The HTTP response code */
          responseCode?: number;
          /** User ID who last updated the response */
          lastUpdatedBy?: string;
          /** The request object associated with this response */
          requestObject?: Record<string, string | number | boolean | Array<unknown> | Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** Metadata about the response operation */
        meta?: {
          /** The model type */
          model?: string;
          /** The action performed */
          action?: string;
          /** Whether to populate additional fields */
          populate?: boolean;
          /** Whether changeset is enabled */
          changeset?: boolean;
          [key: string]: unknown;
        };
        /** The model ID of the response */
        model_id?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve all comments left by users in a response. Use when you need to fetch all comments associated with a specific response within a collection. */
    "postman.get_a_responses_comments": {
      input: {
        /** The response's unique ID (UID). This identifies the specific response to retrieve comments from. */
        response_uid: string;
        /** The collection's unique ID (UID). This identifies the collection containing the response. */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of comment objects left by users in the response */
        data?: Array<{
          /** The comment's unique ID */
          id?: number;
          /** The comment's text content */
          body?: string;
          /** The comment's status (e.g., 'Open', 'Resolved') */
          status?: string;
          /** The thread ID this comment belongs to */
          thread_id?: number;
          /** ISO 8601 timestamp when the comment was created */
          created_at?: string;
          /** The ID of the user who created the comment */
          created_by?: number;
          /** ISO 8601 timestamp when the comment was last updated */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve information about an API schema from Postman. Use when you need to fetch schema details for a specific API. Optionally specify a version ID to get a schema published in a specific API version. */
    "postman.get_a_schema": {
      input: {
        /** The API's unique identifier */
        api_id: string;
        /** The schema's unique identifier */
        schema_id: string;
        /** Optional. The API version ID to get a schema published in a specific API version */
        version_id?: string;
        [key: string]: unknown;
      };
      output: {
        /** The schema's unique ID */
        id?: string;
        /** The schema type (e.g., 'openapi:3') */
        type?: string;
        /** Schema files information */
        files?: {
          /** List of schema files */
          data?: Array<{
            /** Unique identifier of the file */
            id?: string;
            /** Name of the file */
            name?: string;
            /** Path of the file */
            path?: string;
            /** Root object of the file */
            root?: Record<string, unknown>;
            /** ISO 8601 timestamp when the file was created */
            created_at?: string;
            /** User ID who created the file */
            created_by?: string;
            /** ISO 8601 timestamp when the file was last updated */
            updated_at?: string;
            /** User ID who last updated the file */
            updated_by?: string;
            [key: string]: unknown;
          }>;
          /** Metadata about the files */
          meta?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** ISO 8601 timestamp when the schema was created */
        created_at?: string;
        /** User ID who created the schema */
        created_by?: string;
        /** ISO 8601 timestamp when the schema was last updated */
        updated_at?: string;
        /** User ID who last updated the schema */
        updated_by?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve information about an API specification in Postman. Use when you need to fetch spec details including name, type, and timestamps. */
    "postman.get_a_spec": {
      input: {
        /** The unique identifier of the API specification to retrieve. This is a UUID format string. */
        spec_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Unique identifier of the specification */
        id?: string;
        /** Name of the specification */
        name?: string;
        /** Type of specification (e.g., 'OPENAPI:3.0') */
        type?: string;
        /** ISO 8601 timestamp when the spec was created */
        createdAt?: string;
        /** User ID who created the spec */
        createdBy?: number;
        /** ISO 8601 timestamp when the spec was last updated */
        updatedAt?: string;
        /** User ID who last updated the spec */
        updatedBy?: number;
        [key: string]: unknown;
      };
    };
    /** Tool to get the contents of an API specification's file. Use when you need to retrieve the actual content and metadata of a specific file within a spec. */
    "postman.get_a_spec_file": {
      input: {
        /** The ID of the API specification */
        spec_id: string;
        /** The path of the file within the spec (e.g., 'openapi.yaml', 'components/schemas.yaml') */
        file_path: string;
        [key: string]: unknown;
      };
      output: {
        /** The unique identifier of the file */
        id?: string;
        /** The name of the file */
        name?: string;
        /** The path of the file within the specification */
        path?: string;
        /** The type of file (e.g., 'ROOT') */
        type?: string;
        /** The file contents */
        content?: string;
        /** ISO 8601 timestamp when the file was created */
        created_at?: string;
        /** User ID who created the file */
        created_by?: number;
        /** ISO 8601 timestamp when the file was last updated */
        updated_at?: string;
        /** User ID who last updated the file */
        updated_by?: number;
        [key: string]: unknown;
      };
    };
    /** Tool to get the complete contents of an API specification's definition. Use when you need to retrieve the full OpenAPI/Swagger specification content for a spec. Returns the raw definition content as a string. */
    "postman.get_a_specs_definition": {
      input: {
        /** The unique identifier of the API specification to retrieve the definition for. This is a UUID format string. */
        spec_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The complete API specification definition content in YAML or JSON format (OpenAPI spec content) */
        definition?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve all files in an API specification from Postman. Use when you need to list or view specification files for a specific spec ID. Returns file metadata including IDs, names, paths, types, and timestamps. */
    "postman.get_a_specs_files": {
      input: {
        /** The ID of the API specification whose files you want to retrieve. This is the unique identifier for the specification. */
        spec_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Pagination metadata including cursor for next page */
        meta?: {
          /** Cursor for fetching the next page of results. Returns null if no more pages exist. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** Array of specification file objects with metadata including ID, name, path, type, and timestamps */
        files?: Array<{
          /** Unique identifier of the specification file */
          id?: string;
          /** Name of the specification file */
          name?: string;
          /** File path within the specification structure */
          path?: string;
          /** Type of the specification file */
          type?: string;
          /** ISO 8601 timestamp when the file was created */
          created_at?: string;
          /** User ID of the person who created the file */
          created_by?: number;
          /** ISO 8601 timestamp when the file was last updated */
          updated_at?: string;
          /** User ID of the person who last updated the file */
          updated_by?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve all collections generated from an API specification in Postman. Use when you need to fetch collections that have been auto-generated from a spec. Returns metadata and an array of generated collections. */
    "postman.get_a_specs_generated_collections": {
      input: {
        /** The unique identifier of the API specification */
        spec_id: string;
        /**
         * The type of element to retrieve generations for. Valid value: 'collection'
         * @default "collection"
         */
        element_type?: string;
        [key: string]: unknown;
      };
      output: {
        /** Metadata about the response including pagination information */
        meta?: {
          /** Cursor for pagination. If present, use this value to fetch the next page of results. */
          nextCursor?: string;
          [key: string]: unknown;
        };
        /** Array of generated collections from the specification. May be empty if no collections have been generated. */
        collections?: Array<{
          /** Unique identifier of the generated collection */
          id?: string;
          /** Universal identifier of the collection */
          uid?: string;
          /** Name of the generated collection */
          name?: string;
          /** Owner of the collection */
          owner?: string;
          /** ISO 8601 timestamp when the collection was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the collection was last updated */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get information about a user on the Postman team. Use when you need to retrieve details about a specific team member including their ID, name, email, roles, and join date. */
    "postman.get_a_team_user": {
      input: {
        /** The ID of the user to retrieve information about */
        user_id: number;
        [key: string]: unknown;
      };
      output: {
        /** User ID */
        id?: number;
        /** User's full name */
        name?: string;
        /** User's email address */
        email?: string;
        /** Array of roles assigned to the user (e.g., admin, billing, user, community-manager) */
        roles?: Array<string>;
        /** ISO 8601 timestamp of when the user joined the team */
        joinedAt?: string;
        /** User's username */
        username?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to get detailed information about a specific workspace by its ID. Use when you need to retrieve the complete structure of a workspace including all collections, environments, APIs, mocks, and monitors. */
    "postman.get_a_workspace": {
      input: {
        /** The unique identifier of the workspace to retrieve */
        workspace_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The workspace object with all its details including collections, environments, APIs, mocks, and monitors */
        workspace?: {
          /** Unique identifier of the workspace */
          id?: string;
          /** Array of APIs in the workspace */
          apis?: Array<{
            /** Unique identifier of the API */
            id?: string;
            /** Unique identifier with team/user prefix */
            uid?: string;
            /** Name of the API */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Name of the workspace */
          name?: string;
          /** Type of the workspace (personal, team, or public) */
          type?: string;
          /** Array of mock servers in the workspace */
          mocks?: Array<{
            /** Unique identifier of the mock server */
            id?: string;
            /** Unique identifier with team/user prefix */
            uid?: string;
            /** Name of the mock server */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Array of monitors in the workspace */
          monitors?: Array<{
            /** Unique identifier of the monitor */
            id?: string;
            /** Unique identifier with team/user prefix */
            uid?: string;
            /** Name of the monitor */
            name?: string;
            [key: string]: unknown;
          }>;
          /** ISO 8601 timestamp when the workspace was created */
          created_at?: string;
          /** User ID of who created the workspace */
          created_by?: string;
          /** ISO 8601 timestamp when the workspace was last updated */
          updated_at?: string;
          /** User ID of who last updated the workspace */
          updated_by?: string;
          /** Visibility setting of the workspace */
          visibility?: string;
          /** Array of collections in the workspace */
          collections?: Array<{
            /** Unique identifier of the collection */
            id?: string;
            /** Unique identifier with team/user prefix */
            uid?: string;
            /** Name of the collection */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Description of the workspace */
          description?: string;
          /** Array of environments in the workspace */
          environments?: Array<{
            /** Unique identifier of the environment */
            id?: string;
            /** Unique identifier with team/user prefix */
            uid?: string;
            /** Name of the environment */
            name?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to get a workspace's activity feed showing who added or removed collections, environments, or elements, and users joining or leaving. Use when you need to track workspace changes and user activity. */
    "postman.get_a_workspaces_activity_feed": {
      input: {
        /** The maximum number of activities to return. Used for pagination. */
        limit?: number;
        /** Cursor for pagination. Use the nextCursor value from the previous response to fetch the next page of results. */
        cursor?: string;
        /** The ID of the workspace to get the activity feed for */
        workspace_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of activity objects showing workspace changes and user actions */
        data?: Array<{
          /** Unique identifier of the activity */
          id?: string;
          /** User who performed the activity */
          user?: {
            /** Unique identifier of the user */
            id?: number;
            /** Display name of the user */
            name?: string;
            /** Username of the user */
            username?: string;
            /** Whether the user is a partner */
            isPartner?: boolean;
            [key: string]: unknown;
          };
          /** Action performed (e.g., create, update, destroy, comment) */
          action?: string;
          /** Trigger that caused the activity (e.g., create, update, destroy, pull_request, comment_on_request) */
          trigger?: string;
          /** ISO 8601 timestamp when the activity was created */
          createdAt?: string;
          /** ID of the element that was acted upon */
          elementId?: string;
          /** ISO 8601 timestamp when the activity was last updated */
          updatedAt?: string;
          /** Name of the element that was acted upon */
          elementName?: string;
          /** Type of element (e.g., collection, environment, specification, workspace, monitor) */
          elementType?: string;
          /** ID of the workspace where the activity occurred */
          workspaceId?: string;
          [key: string]: unknown;
        }>;
        /** Metadata containing pagination information */
        meta?: {
          /** Cursor to use for fetching the next page of activities. If null or absent, there are no more pages. */
          nextCursor?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to get the roles of users, user groups, and partners in a workspace. Use when you need to retrieve role assignments and understand who has what level of access to a specific workspace. */
    "postman.get_a_workspaces_roles": {
      input: {
        /** The unique identifier of the workspace to retrieve roles for */
        workspace_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of role objects with user assignments */
        roles?: Array<{
          /** Role ID */
          id?: string;
          /** Array of user IDs with this role */
          user?: Array<string>;
          /** Display name of the role (e.g., Editor, Admin) */
          display_name?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve Postman billing account details for the authenticated team. Use when you need to access account information such as account ID, team ID, account state, billing slots, sales channel, or billing email. */
    "postman.get_accounts": {
      input: Record<string, unknown>;
      output: {
        /** Billing slot details showing total, unbilled, consumed, and available slots */
        slots?: {
          /** Total number of slots available in the account */
          total?: number;
          /** Number of slots currently consumed */
          consumed?: number;
          /** Number of slots that are not yet billed */
          unbilled?: number;
          /** Number of slots available for use */
          available?: number;
          [key: string]: unknown;
        };
        /** Unique identifier for the team associated with this account */
        team_id?: string;
        /** Unique identifier for the Postman account */
        account_id?: string;
        /** Current state of the account (e.g., active, suspended) */
        account_state?: string;
        /** Email address used for billing communications */
        billing_email?: string;
        /** Sales channel through which the account was acquired */
        sales_channel?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to get all releases for a specific API version in Postman. Use when you need to list releases for an API version. Note: This endpoint is deprecated in Postman v10 and higher. */
    "postman.get_all_api_releases": {
      input: {
        /** The unique identifier of the API */
        api_id: string;
        /** The unique identifier of the API version */
        api_version_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of release objects for the specified API version */
        releases?: Array<{
          /** Unique identifier of the release */
          id?: string;
          /** Name of the release */
          name?: string;
          /** ISO 8601 timestamp when the release was created */
          created_at?: string;
          /** User ID who created the release */
          created_by?: string;
          /** ISO 8601 timestamp when the release was last updated */
          updated_at?: string;
          /** User ID who last updated the release */
          updated_by?: string;
          /** Release notes describing changes in this release */
          release_notes?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get all APIs accessible to the authenticated user with optional workspace filtering. Use when you need to list or retrieve APIs from Postman. Returns an array of API objects with their IDs, names, summaries, and other metadata. */
    "postman.get_all_apis": {
      input: {
        /** Filter by workspace ID to get APIs specific to a workspace. If not provided, returns all APIs accessible to the authenticated user. */
        workspace?: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of API objects, each containing API details such as id, name, summary, and timestamps */
        apis?: Array<{
          /** Unique identifier of the API */
          id?: string;
          /** Name of the API */
          name?: string;
          /** A brief summary of the API */
          summary?: string;
          /** ISO 8601 timestamp when the API was created */
          created_at?: string;
          /** User ID of who created the API */
          created_by?: string;
          /** ISO 8601 timestamp when the API was last updated */
          updated_at?: string;
          /** User ID of who last updated the API */
          updated_by?: string;
          /** A detailed description of the API */
          description?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get all collections accessible to the authenticated user. Use when you need to retrieve all your collections including subscribed collections. Returns detailed information for each collection including owner, creation/update timestamps, and visibility. */
    "postman.get_all_collections2": {
      input: {
        /** Optional workspace ID to filter collections. Can be empty to get all collections across all workspaces. */
        workspace?: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of collection objects with detailed information including id, name, owner, timestamps, uid, and visibility status */
        collections?: Array<{
          /** Unique identifier of the collection */
          id?: string;
          /** Unique identifier with team/user prefix */
          uid?: string;
          /** Name of the collection */
          name?: string;
          /** Owner of the collection */
          owner?: string;
          /** Whether the collection is public */
          isPublic?: boolean;
          /** ISO 8601 timestamp when the collection was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the collection was last updated */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get all environments accessible to the authenticated user with optional workspace filtering. Use when you need to list or retrieve environments from Postman. Returns an array of environment objects with their IDs, names, and UIDs. */
    "postman.get_all_environments": {
      input: {
        /** Filter by workspace ID to get environments specific to a workspace. If not provided, returns all environments accessible to the authenticated user. */
        workspace?: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of environment objects, each containing id, name, and uid fields */
        environments?: Array<{
          /** Unique identifier of the environment */
          id?: string;
          /** Unique identifier with team/user prefix */
          uid?: string;
          /** Name of the environment */
          name?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve all forked collections for the authenticated user. Use when you need to list or access all collections that the user has forked. */
    "postman.get_all_forked_collections": {
      input: Record<string, unknown>;
      output: {
        /** Array of forked collection objects */
        data?: Array<{
          /** Unique identifier of the forked collection */
          id?: string;
          /** Unique identifier for the collection in the form of teamId-collectionId */
          uid?: string;
          /** Fork metadata including label, creation timestamp, and source collection reference */
          fork?: {
            /** Reference to the source collection that was forked */
            from?: string;
            /** Label or name of the fork */
            label?: string;
            /** ISO 8601 timestamp when the fork was created */
            createdAt?: string;
            [key: string]: unknown;
          };
          /** Name of the forked collection */
          name?: string;
          /** User ID of the collection owner */
          owner?: string;
          /** ISO 8601 timestamp when the fork was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the fork was last updated */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Metadata about the response including total count and pagination cursor */
        meta?: {
          /** Total number of forked collections */
          total?: number;
          /** Cursor for pagination to fetch next set of results */
          nextCursor?: string;
          /** Number of inaccessible forks */
          inaccessibleFork?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to get all user groups in a Postman team. Use when you need to list all groups and their details including member counts and timestamps. Returns an array of group objects with their IDs, names, team IDs, user counts, and creation/update timestamps. */
    "postman.get_all_groups": {
      input: Record<string, unknown>;
      output: {
        /** Array of group objects, each containing group details such as id, name, teamId, userCount, and timestamps */
        groups?: Array<{
          /** Unique identifier of the group */
          id?: string;
          /** Name of the group */
          name?: string;
          /** Identifier of the team this group belongs to */
          teamId?: string;
          /** ISO 8601 datetime string indicating when the group was created */
          createdAt?: string;
          /** ISO 8601 datetime string indicating when the group was last updated */
          updatedAt?: string;
          /** Number of users in the group */
          userCount?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve all linked relations for a specific API version in Postman. Use when you need to discover what collections, documentation, mocks, or monitors are linked to an API version. */
    "postman.get_all_linked_relations": {
      input: {
        /** The unique identifier of the API. This is the API's ID returned when listing or creating APIs. */
        api_id: string;
        /** The unique identifier of the API version. This is the version ID returned when listing or creating API versions. */
        api_version_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Object containing all relation types (contracttest, integrationtest, documentation, mock, monitor) for the specified API version */
        relations?: {
          /** Mock server relations for the API version */
          mock?: Array<{
            /** Unique identifier of the related entity */
            id?: string;
            /** Type of the relation */
            type?: string;
            [key: string]: unknown;
          }>;
          /** Monitor relations for the API version */
          monitor?: Array<{
            /** Unique identifier of the related entity */
            id?: string;
            /** Type of the relation */
            type?: string;
            [key: string]: unknown;
          }>;
          /** Contract test relations for the API version */
          contracttest?: Array<{
            /** Unique identifier of the related entity */
            id?: string;
            /** Type of the relation */
            type?: string;
            [key: string]: unknown;
          }>;
          /** Documentation relations for the API version */
          documentation?: Array<{
            /** Unique identifier of the related entity */
            id?: string;
            /** Type of the relation */
            type?: string;
            [key: string]: unknown;
          }>;
          /** Integration test relations for the API version */
          integrationtest?: Array<{
            /** Unique identifier of the related entity */
            id?: string;
            /** Type of the relation */
            type?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to get all active mock servers accessible to the authenticated user. Use when you need to list or retrieve mock servers from Postman. By default, returns only mock servers you created across all workspaces. Can be filtered by workspace ID to get mock servers specific to a workspace. */
    "postman.get_all_mock_servers": {
      input: {
        /** Filter by workspace ID to get mock servers specific to a workspace. If not provided, returns all mock servers you created across all workspaces. */
        workspace?: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of mock server objects with details including id, name, uid, owner, collection, environment, mockUrl, and isPublic */
        mocks?: Array<{
          /** Unique identifier of the mock server */
          id?: string;
          /** Unique identifier with team/user prefix */
          uid?: string;
          /** Name of the mock server */
          name?: string;
          /** User ID of the mock server owner */
          owner?: string;
          /** URL of the mock server that can be used to make requests */
          mockUrl?: string;
          /** Whether the mock server is public (true) or private (false). Private mocks require API key authentication. */
          isPublic?: boolean;
          /** Collection ID associated with this mock server */
          collection?: string;
          /** Environment ID associated with this mock server (if applicable) */
          environment?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get all monitors accessible to the authenticated user with optional workspace filtering. Use when you need to list or retrieve monitors from Postman. Returns an array of monitor objects with their IDs, names, and UIDs. */
    "postman.get_all_monitors": {
      input: {
        /** Filter by workspace ID to get monitors specific to a workspace. If not provided, returns all monitors accessible to the authenticated user. */
        workspace?: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of monitor objects, each containing id, name, and uid fields */
        monitors?: Array<{
          /** Unique identifier of the monitor */
          id?: string;
          /** Unique identifier with team/user prefix */
          uid?: string;
          /** Name of the monitor */
          name?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get all API specifications in a workspace. Use when you need to list or retrieve API specs from a specific Postman workspace. Returns an array of spec objects with their IDs, names, types, and timestamps, along with pagination metadata. */
    "postman.get_all_specs": {
      input: {
        /** The workspace ID to fetch API specifications from. This is required to retrieve specs for a specific workspace. */
        workspace_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Metadata including pagination cursor for fetching additional results */
        meta?: {
          /** Cursor for fetching the next page of results, null if no more pages */
          nextCursor?: string;
          [key: string]: unknown;
        };
        /** Array of specification objects, each containing spec details such as id, name, type, and timestamps */
        specs?: Array<{
          /** Unique identifier of the specification */
          id?: string;
          /** Name of the specification */
          name?: string;
          /** Type of specification (e.g., 'OPENAPI:3.0') */
          type?: string;
          /** ISO 8601 timestamp when the spec was created */
          createdAt?: string;
          /** User ID who created the spec */
          createdBy?: number;
          /** ISO 8601 timestamp when the spec was last updated */
          updatedAt?: string;
          /** User ID who last updated the spec */
          updatedBy?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get information about all users on the Postman team. Use when you need to list all team members and their details including roles and join dates. Returns an array of user objects with their IDs, names, usernames, emails, roles, and join timestamps. */
    "postman.get_all_team_users": {
      input: Record<string, unknown>;
      output: {
        /** Array of team user objects, each containing user details such as id, name, username, email, roles, and joinedAt timestamp */
        data?: Array<{
          /** Unique identifier of the user */
          id?: number;
          /** Full name of the user */
          name?: string;
          /** Email address of the user */
          email?: string;
          /** List of roles assigned to the user within the team */
          roles?: Array<string>;
          /** ISO 8601 datetime string indicating when the user joined the team */
          joinedAt?: string;
          /** Username of the user */
          username?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve all test relations for a specific API version. Use when you need to get test relations associated with an API version. Note: This endpoint is deprecated in Postman v10 and higher. */
    "postman.get_all_test_relations": {
      input: {
        /** The unique identifier of the API. */
        api_id: string;
        /** The unique identifier of the API version. */
        api_version_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of test relations for the API version */
        test?: Array<{
          /** Unique identifier of the test relation */
          id?: string;
          /** Unique identifier of the related entity */
          uid?: string;
          /** Name of the test relation */
          name?: string;
          /** Type of the test relation */
          type?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get all published versions of a specific API in Postman. Use when you need to list or retrieve version information for an API. Returns an array of version objects with their IDs and names. */
    "postman.get_all_versions": {
      input: {
        /** The unique identifier of the API whose versions you want to retrieve. */
        api_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of version objects, each containing id and name fields */
        versions?: Array<{
          /** Unique identifier of the version */
          id?: string;
          /** Name of the version */
          name?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get all workspaces accessible to the authenticated user with optional type filtering. Use when you need to list or retrieve workspaces from Postman. Returns an array of workspace objects with their IDs, names, and types. */
    "postman.get_all_workspaces": {
      input: {
        /** Filter by workspace type. Use 'personal' for personal workspaces, 'team' for team workspaces, or 'public' for public workspaces. If not provided, returns all workspaces accessible to the authenticated user. */
        type?: "personal" | "team" | "public";
        [key: string]: unknown;
      };
      output: {
        /** Array of workspace objects, each containing id, name, and type fields */
        workspaces?: Array<{
          /** Unique identifier of the workspace */
          id?: string;
          /** Name of the workspace */
          name?: string;
          /** Type of the workspace (personal, team, or public) */
          type?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve information about a specific API in Postman. Use when you need to fetch API details including name, description, versions, and schemas. */
    "postman.get_an_api": {
      input: {
        /** The unique identifier of the API to retrieve */
        api_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The API object with all details */
        api?: {
          /** The unique identifier of the API */
          id?: string;
          /** The name of the API */
          name?: string;
          /** The team ID associated with this API */
          team?: string;
          /** A brief summary of the API */
          summary?: string;
          /** List of versions associated with this API */
          versions?: Array<{
            /** The unique identifier of the API version */
            id?: string;
            /** The name of the API version */
            name?: string;
            /** List of schemas associated with this version */
            schemas?: Array<{
              /** The unique identifier of the schema */
              id?: string;
              /** The type of schema (e.g., 'openapi:3') */
              type?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** ISO 8601 timestamp when the API was created */
          created_at?: string;
          /** User ID of who created the API */
          created_by?: string;
          /** ISO 8601 timestamp when the API was last updated */
          updated_at?: string;
          /** User ID of who last updated the API */
          updated_by?: string;
          /** A detailed description of the API */
          description?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to get information about a specific API version in Postman. Use when you need to retrieve details about a particular version of an API. Returns version details including ID, name, creation date, and associated schemas. */
    "postman.get_an_api_version": {
      input: {
        /** The unique identifier of the API. */
        api_id: string;
        /** The unique identifier of the API version to retrieve. */
        api_version_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The version object containing all details about the API version */
        version?: {
          /** Unique identifier of the version */
          id?: string;
          /** The API ID this version belongs to */
          api?: string;
          /** Name of the version */
          name?: string;
          /** Array of schema IDs associated with this version */
          schema?: Array<string>;
          /** ISO 8601 timestamp when the version was created */
          createdAt?: string;
          /** User ID who created the version */
          createdBy?: string;
          /** ISO 8601 timestamp when the version was last updated */
          updatedAt?: string;
          /** User ID who last updated the version */
          updatedBy?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve all comments left by users in an API. Use when you need to fetch all comments associated with a specific API. */
    "postman.get_an_apis_comments": {
      input: {
        /** The API's unique identifier (UUID). This identifies the API to retrieve comments from. */
        api_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of comment objects left by users in the API */
        data?: Array<{
          /** The comment's unique ID */
          id?: number;
          /** Information about the user who created the comment */
          user?: {
            /** The user's unique ID */
            id?: number;
            /** The user's username */
            username?: string;
            [key: string]: unknown;
          };
          /** The comment's content/text */
          content?: string;
          /** The ID of the user who created the comment */
          user_id?: number;
          /** ISO 8601 timestamp when the comment was created */
          created_at?: string;
          /** ISO 8601 timestamp when the comment was last updated */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve detailed information about a specific environment in Postman. Use when you need to fetch environment details including name, ID, owner, and all environment variables. */
    "postman.get_an_environment": {
      input: {
        /** The unique identifier (ID or UID) of the environment to retrieve */
        environment_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The environment object with all details including variables */
        environment?: {
          /** The unique identifier of the environment */
          id?: string;
          /** The unique identifier with team/user prefix */
          uid?: string;
          /** The name of the environment */
          name?: string;
          /** User ID of the environment owner */
          owner?: string;
          /** Array of environment variable objects with key, value, type, and enabled fields */
          values?: Array<{
            /** The name of the environment variable */
            key?: string;
            /** The type of the environment variable (e.g., 'default', 'secret') */
            type?: string;
            /** The value of the environment variable */
            value?: string;
            /** Whether the environment variable is enabled */
            enabled?: boolean;
            [key: string]: unknown;
          }>;
          /** ISO 8601 timestamp when the environment was created */
          created_at?: string;
          /** ISO 8601 timestamp when the environment was last updated */
          updated_at?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve all forked environments for a specific environment. Use when you need to list all environments that have been forked from a particular environment. */
    "postman.get_an_environments_forks": {
      input: {
        /** The environment's unique identifier (UID) */
        environment_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of forked environment objects */
        data?: Array<{
          /** Unique identifier of the forked environment */
          id?: string;
          /** Unique identifier for the environment in the form of teamId-environmentId */
          uid?: string;
          /** Fork metadata including label, creation timestamp, and source environment reference */
          fork?: Record<string, string>;
          /** Name of the forked environment */
          name?: string;
          /** User ID of the environment owner */
          owner?: string;
          /** ISO 8601 timestamp when the fork was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the fork was last updated */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Metadata about the response including total count and pagination cursor */
        meta?: {
          /** Total number of forked environments */
          total?: number;
          /** Cursor for pagination to fetch next set of results */
          nextCursor?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to get the status of an asynchronous collection update task. Use when you need to check whether a previously initiated async collection update is still processing, has completed successfully, or has failed. The task ID is obtained from PUT /collections/{collectionId} endpoint when using the Prefer: respond-async header. */
    "postman.get_async_collection_update_status": {
      input: {
        /** The ID of the collection update task. Obtained from PUT /collections/{collectionId} with Prefer: respond-async header. */
        task_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The task ID */
        id?: string;
        /** Current status of the collection update task. Possible values: 'successful', 'failed', 'in-progress' */
        status?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to get information about the authenticated user. Use when you need to retrieve details about the current authenticated user, including their user ID, username, and email address. */
    "postman.get_authenticated_user": {
      input: Record<string, unknown>;
      output: {
        /** Object containing the authenticated user's details including ID, username, and email */
        user?: {
          /** Unique identifier of the authenticated user */
          id?: number;
          /** Email address of the authenticated user */
          email?: string;
          /** List of roles assigned to the user */
          roles?: Array<string>;
          /** Avatar URL of the authenticated user */
          avatar?: string;
          /** Team ID the user belongs to */
          teamId?: number;
          /** Full name of the authenticated user */
          fullName?: string;
          /** Whether the user's profile is public */
          isPublic?: boolean;
          /** Name of the team the user belongs to */
          teamName?: string;
          /** Username of the authenticated user */
          username?: string;
          /** Domain of the team the user belongs to */
          teamDomain?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve all personal and team collection access keys for the authenticated user. Use when you need to list or manage collection access keys. Returns an array of access key objects with their IDs, tokens, status, and associated collection information. */
    "postman.get_collection_access_keys": {
      input: Record<string, unknown>;
      output: {
        /** Array of collection access key objects */
        data?: Array<{
          /** Unique identifier for the access key */
          id?: string;
          /** The actual key value (displayed masked for security) */
          token?: string;
          /** Current state of the access key (e.g., ACTIVE) */
          status?: string;
          /** Associated team identifier */
          teamId?: string;
          /** User ID who created the key */
          userId?: string;
          /** Timestamp when the access key was created */
          createdAt?: string;
          /** Timestamp when the access key was revoked (null if active) */
          deletedAt?: string;
          /** Timestamp when the access key was last modified */
          updatedAt?: string;
          /** Timestamp of most recent usage (null if unused) */
          lastUsedAt?: string;
          /** Target collection's unique identifier */
          collectionId?: string;
          /** Timestamp when the access key will expire */
          expiresAfter?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata including cursors for navigating results */
        meta?: {
          /** Cursor for pagination to fetch next set of results */
          nextCursor?: string;
          /** Cursor for pagination to fetch previous set of results */
          prevCursor?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve contract test relations for a specific API version. Use when you need to check contract test associations. Note: This endpoint is deprecated and may return limited or no data. */
    "postman.get_contract_test_relations": {
      input: {
        /** The unique identifier of the API */
        api_id: string;
        /** The unique identifier of the API version */
        api_version_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of contract test relations. This endpoint is deprecated and may return an empty array. */
        contracttest?: Array<{
          /** Unique identifier of the contract test relation */
          id?: string;
          /** Identifier of the entity */
          entity_id?: string;
          /** Type of the entity */
          entity_type?: string;
          /** Identifier of the associated collection */
          collection_id?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get documentation relations for a specific API version. This endpoint is deprecated in Postman v10 and higher. */
    "postman.get_documentation_relations": {
      input: {
        /** The ID of the API */
        api_id: string;
        /** The ID of the API version */
        api_version_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of documentation relations for the API version */
        documentation: Array<{
          /** Unique identifier of the documentation relation */
          id?: string;
          /** URL of the documentation */
          url?: string;
          /** Name of the documentation */
          name?: string;
          /** Type of the documentation */
          type?: string;
          /** Associated collection ID */
          collection_id?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get the status of a collection duplication task. Use when you need to check whether a previously initiated collection duplication is still processing or has completed. The task ID must first be obtained from the POST /collections/{collectionId}/duplicates endpoint. */
    "postman.get_duplication_task_status": {
      input: {
        /** The ID of the collection duplication task. Obtained from POST /collections/{collectionId}/duplicates endpoint response. */
        task_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Task object containing status and id fields */
        task?: {
          /** The task ID */
          id?: string;
          /** Status of the duplication task (e.g., 'processing', 'completed') */
          status?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to get environment relations for a specific API version. This endpoint is deprecated in Postman v10 and higher. */
    "postman.get_environment_relations": {
      input: {
        /** The unique ID of the API. */
        api_id: string;
        /** The unique ID of the API version. */
        api_version_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of environment relations associated with the API version */
        environment: Array<{
          /** Unique identifier of the environment */
          id?: string;
          /** Unique identifier in UID format */
          uid?: string;
          /** Name of the environment */
          name?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve the API specification generated for a Postman collection. Use when you need to fetch OpenAPI/Swagger specs that have been auto-generated from a collection. Returns metadata and an array of generated specifications. */
    "postman.get_generated_spec": {
      input: {
        /**
         * The type of generated element to retrieve. Use 'spec' for API specifications. This is typically 'spec' for OpenAPI/Swagger specifications generated from the collection.
         * @default "spec"
         */
        element_type?: string;
        /** The unique identifier for the collection. This is the collection's UID (with team/user prefix). */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** Metadata about the response including pagination information */
        meta?: {
          /** Cursor for pagination. If present, use this value to fetch the next page of results. */
          nextCursor?: string;
          [key: string]: unknown;
        };
        /** Array of generated API specifications for the collection. May be empty if no specifications have been generated. */
        specs?: Array<{
          /** Unique identifier of the generated specification */
          id?: string;
          /** Type of the specification (e.g., 'openapi', 'swagger') */
          type?: string;
          /** The actual specification content/definition */
          content?: {
            /** API information including title, version, and description */
            info?: Record<string, string>;
            /** API paths and their operations */
            paths?: Record<string, Record<string, string>>;
            /** OpenAPI version (e.g., '3.0.0', '3.1.0') */
            openapi?: string;
            /** Reusable components like schemas, parameters, responses */
            components?: Record<string, Record<string, string>>;
            [key: string]: unknown;
          };
          /** ISO 8601 timestamp when the specification was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the specification was last updated */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get a workspace's global variables. Use when you need to retrieve global variables that are available throughout a workspace for access between collections, requests, scripts, and environments. Note that this endpoint only works with personal or team workspaces, not public workspaces. */
    "postman.get_global_variables": {
      input: {
        /** The unique identifier of the workspace to retrieve global variables from. Can be obtained from the GET /workspaces endpoint. */
        workspace_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of global variable objects, each containing key, value, enabled, and type fields */
        values?: Array<{
          /** The name/key of the global variable */
          key?: string;
          /** The type of the global variable (e.g., 'default', 'secret') */
          type?: string;
          /** The value of the global variable */
          value?: string;
          /** Whether the global variable is enabled or not */
          enabled?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get integration test relations for a specific API version. This endpoint is deprecated and may not return active data. */
    "postman.get_integration_test_relations": {
      input: {
        /** The unique identifier of the API */
        api_id: string;
        /** The unique identifier of the API version */
        api_version_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of integration test relations for the API version. This endpoint is deprecated and typically returns an empty array. */
        integrationtest?: Array<{
          /** Unique identifier of the integration test relation */
          id?: string;
          /** Name of the integration test */
          name?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get all resource types supported by Postman's SCIM API. Use when you need to discover what resource types (e.g., User, Group) are available in the SCIM API and their corresponding endpoints and schemas. */
    "postman.get_resource_types": {
      input: Record<string, unknown>;
      output: {
        /** Array of resource type objects supported by Postman's SCIM API */
        Resources?: Array<{
          /** Resource type identifier (e.g., 'User', 'Group') */
          id?: string;
          /** Human-readable name of the resource type */
          name?: string;
          /** The primary/base schema URI for this resource type */
          schema?: string;
          /** SCIM schemas URIs for this resource type */
          schemas?: Array<string>;
          /** The HTTP-addressable endpoint of this resource type (e.g., '/Users', '/Groups') */
          endpoint?: string;
          /** Description of the resource type */
          description?: string;
          /** Schema extensions supported by this resource type */
          schemaExtensions?: Array<{
            /** The URI of the schema extension */
            schema?: string;
            /** Whether this schema extension is required */
            required?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get the contents of an API schema file at a specified path. Use when you need to retrieve the actual content of a schema file. Optionally specify a version ID to get file contents from a specific API version. */
    "postman.get_schema_file_contents": {
      input: {
        /** The API's unique identifier */
        api_id: string;
        /** The path of the file within the schema (e.g., 'index.yaml', 'schemas/openapi.yaml') */
        file_path: string;
        /** The schema's unique identifier */
        schema_id: string;
        /** Optional query parameter to get schema file contents published in an API version */
        version_id?: string;
        [key: string]: unknown;
      };
      output: {
        /** The unique identifier of the file */
        id?: string;
        /** The name of the file */
        name?: string;
        /** The path of the file */
        path?: string;
        /** The file contents as a string */
        content?: string;
        /** ISO 8601 timestamp when the file was created */
        created_at?: string;
        /** User ID who created the file */
        created_by?: string;
        /** ISO 8601 timestamp when the file was last updated */
        updated_at?: string;
        /** User ID who last updated the file */
        updated_by?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to retrieve files in an API schema from Postman. Use when you need to list or view schema files for a specific API and schema ID. Optionally filter by version ID to get files from a particular API version. */
    "postman.get_schema_files": {
      input: {
        /** The unique identifier of the API containing the schema. */
        api_id: string;
        /** The unique identifier of the schema whose files you want to retrieve. */
        schema_id: string;
        /** Optional version ID to get schema files published in a specific API version. If not provided, returns files from the latest version. */
        version_id?: string;
        [key: string]: unknown;
      };
      output: {
        /** Pagination metadata including cursor for next page */
        meta?: {
          /** Cursor for fetching the next page of results. Returns null if no more pages exist. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** Array of schema file objects with metadata including ID, name, path, and timestamps */
        files?: Array<{
          /** Unique identifier of the schema file */
          id?: string;
          /** Name of the schema file */
          name?: string;
          /** File path within the schema structure */
          path?: string;
          /** Root configuration indicating if this is a root file */
          root?: {
            /** Indicates whether the file is enabled as a root file */
            enabled?: boolean;
            [key: string]: unknown;
          };
          /** ISO 8601 timestamp when the file was created */
          created_at?: string;
          /** User ID of the person who created the file */
          created_by?: string;
          /** ISO 8601 timestamp when the file was last updated */
          updated_at?: string;
          /** User ID of the person who last updated the file */
          updated_by?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get Postman's SCIM API service provider configuration information. Use when you need to discover supported SCIM operations, capabilities, and authentication schemes. This endpoint returns configuration details including support for PATCH, bulk operations, filtering, sorting, and ETag handling. */
    "postman.get_service_provider_configuration": {
      input: Record<string, unknown>;
      output: {
        /** Bulk operation support configuration */
        bulk?: {
          /** Whether bulk operations are supported */
          supported?: boolean;
          /** Maximum number of operations allowed in a bulk request */
          maxOperations?: number;
          /** Maximum payload size in bytes for bulk operations */
          maxPayloadSize?: number;
          [key: string]: unknown;
        };
        /** ETag support configuration */
        etag?: {
          /** Whether ETag support is enabled */
          supported?: boolean;
          [key: string]: unknown;
        };
        /** Resource metadata including resource type and location */
        meta?: {
          /** The URI of the resource */
          location?: string;
          /** The resource type name */
          resourceType?: string;
          [key: string]: unknown;
        };
        /** Sort operation support configuration */
        sort?: {
          /** Whether sorting is supported */
          supported?: boolean;
          [key: string]: unknown;
        };
        /** PATCH operation support configuration */
        patch?: {
          /** Whether PATCH operations are supported */
          supported?: boolean;
          [key: string]: unknown;
        };
        /** Filter operation support configuration */
        filter?: {
          /** Whether filtering is supported */
          supported?: boolean;
          /** Maximum number of resources returned in a query response */
          maxResults?: number;
          [key: string]: unknown;
        };
        /** SCIM schemas URIs for the service provider configuration */
        schemas?: Array<string>;
        /** Password change operation support configuration */
        changePassword?: {
          /** Whether password change operations are supported */
          supported?: boolean;
          [key: string]: unknown;
        };
        /** HTTP-addressable URL pointing to the service provider's documentation */
        documentationUri?: string;
        /** List of supported authentication schemes */
        authenticationSchemes?: Array<{
          /** Common name of the authentication scheme (e.g., 'OAuth Bearer Token') */
          name?: string;
          /** The authentication scheme type (e.g., 'oauthbearertoken', 'httpbasic') */
          type?: string;
          /** HTTP-addressable URL pointing to the authentication scheme's specification */
          specUri?: string;
          /** Description of the authentication scheme */
          description?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to check whether there is a change between a forked collection and its parent (source) collection. Use when you need to determine if the source collection has updates that are not yet in the forked collection. This endpoint only works with forked collections; attempting to use it with regular collections will result in an error. */
    "postman.get_source_collections_status": {
      input: {
        /** The ID of a forked collection. The endpoint only works with forked collections, not regular collections. */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Dictionary with collection UID as key and source status information as value */
        collection?: Record<string, {
            /** Indicates whether the parent (source) collection has changes that are ahead of the forked collection */
            is_source_ahead?: boolean;
            [key: string]: unknown;
          }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get test suite relations for a specific API version. Use when you need to retrieve the test suites associated with an API version. Note: This endpoint is deprecated and only works with legacy v9 APIs. For v10+ APIs, this returns an empty array. */
    "postman.get_test_suite_relations": {
      input: {
        /** The unique identifier of the API to get test suite relations for. */
        api_id: string;
        /** The unique identifier of the API version to get test suite relations for. */
        api_version_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Optional message providing additional context about the response, especially for deprecated endpoints. */
        message?: string;
        /** Array of test suite relations for the API version. Each item represents a test suite associated with this API version. This endpoint is deprecated and returns an empty array for v10+ APIs. */
        testsuite?: Array<{
          /** The unique identifier of the test suite */
          id?: string;
          /** The UID of the test suite */
          uid?: string;
          /** The name of the test suite */
          name?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get unclassified relations for an API version in Postman. Use when you need to retrieve unclassified relations for a specific API version. This endpoint is for Postman v10 and higher. */
    "postman.get_unclassified_relations": {
      input: {
        /** The API identifier (UUID format) */
        api_id: string;
        /** The API version identifier (UUID format) */
        api_version_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of unclassified relations for the API version. Each relation is a dictionary containing relation metadata. */
        unclassified?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Tool to import an OpenAPI specification into Postman as a new collection. Use when you need to convert an OpenAPI 3.0+ specification into a Postman collection within a specific workspace. The imported specification will be automatically converted to a Postman collection with all endpoints, request parameters, and documentation. */
    "postman.import_openapi": {
      input: {
        /** The type of import input. Use 'string' when providing the OpenAPI specification as a JSON/YAML string, or 'file' when uploading a file. Common value is 'string'. */
        type: string;
        /** The OpenAPI specification content as a JSON or YAML string. Must be a valid OpenAPI 3.0+ specification with required fields like 'openapi', 'info', and 'paths'. Ensure proper JSON formatting if using type='string'. */
        input: string;
        /** The unique identifier of the workspace where the OpenAPI specification will be imported. The imported OpenAPI will be created as a collection in this workspace. */
        workspace: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of collections created from the OpenAPI specification import. Usually contains one collection per import. */
        collections?: Array<{
          /** The unique identifier of the created collection */
          id?: string;
          /** The full unique identifier of the collection including user/team prefix */
          uid?: string;
          /** The name of the created collection, typically derived from the OpenAPI info.title field */
          name?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to get all invoices for a Postman billing account filtered by status. Use when you need to retrieve invoice history for an account. The account ID must first be obtained from the GET /accounts endpoint. */
    "postman.list_account_invoices": {
      input: {
        /** Filter invoices by status (e.g., PAID). If not provided, returns all invoices. */
        status?: string;
        /** The billing account ID obtained from GET /accounts endpoint */
        account_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of invoice objects containing invoice details */
        data?: Array<{
          /** Invoice identifier */
          id?: string;
          /** Links object containing web href to view/pay the invoice */
          links?: {
            /** Object containing href link to view/pay the invoice */
            web?: Record<string, string>;
            [key: string]: unknown;
          };
          /** Invoice status (e.g., PAID) */
          status?: string;
          /** Issue date in YYYY-MM-DD format */
          issuedAt?: string;
          /** Total amount object containing value and currency */
          totalAmount?: {
            /** Numeric amount of the invoice */
            value?: number;
            /** Currency code for the invoice amount (e.g., USD) */
            currency?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to merge a forked collection back into its parent collection. This endpoint is deprecated. Use when you need to merge changes from a forked collection into the parent collection. */
    "postman.merge_a_fork": {
      input: {
        /** The UID of the forked collection (source) to merge from */
        source: string;
        /** Optional merge strategy: 'deleteSource' (merge and delete forked collection) or 'updateSourceWithDestination' (merge and update both collections) */
        strategy?: string;
        /** The UID of the parent collection (destination) to merge into */
        destination: string;
        [key: string]: unknown;
      };
      output: {
        /** The merged collection object containing id, name, and uid */
        collection?: {
          /** The unique identifier of the merged collection */
          id?: string;
          /** The unique identifier with team/user prefix */
          uid?: string;
          /** The name of the merged collection */
          name?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to merge a forked environment back into its parent environment. Use when you need to merge changes from a forked environment into the parent. */
    "postman.merge_a_fork2": {
      input: {
        /** The UID of the forked (source) environment to merge from */
        source: string;
        /** The UID of the parent (destination) environment where changes will be merged into */
        environment_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** The parent environment object containing the UID after merge */
        environment?: {
          /** The UID of the parent environment that received the merged changes */
          uid?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to publish a mock server in Postman. Use when you need to make a mock server publicly accessible. Publishing sets the mock server's Access Control configuration to public. */
    "postman.publish_a_mock_server": {
      input: {
        /** The unique identifier of the mock server to publish. Publishing a mock server sets its Access Control configuration to public. */
        mock_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Information about the published mock server */
        mock?: {
          /** The unique identifier of the published mock server */
          id?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to pull changes from a parent (source) collection into a forked collection. Use when you need to sync a forked collection with its parent. */
    "postman.pull_source_changes2": {
      input: {
        /** The ID of the forked collection that will receive the changes from its parent (source) collection */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The collection object containing destination and source IDs after pulling changes */
        collection?: {
          /** The ID of the parent collection (source) */
          source_id?: string;
          /** The ID of the forked collection (destination) */
          destination_id?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to completely replace an environment's data with new variables and values. Use when you need to update an entire environment by replacing all its contents. This operation replaces ALL existing variables with the ones provided in the request. */
    "postman.replace_an_environments_data": {
      input: {
        /** Environment object containing name and array of environment variables. This completely replaces the environment's data */
        environment: {
          /** The name of the environment to replace */
          name: string;
          /** Array of environment variables with key, value, type, and enabled properties. This replaces ALL existing variables in the environment */
          values?: Array<{
            /** The name/key of the environment variable */
            key: string;
            /**
             * The type of the variable. Use 'default' for regular variables or 'secret' for sensitive values like passwords and API keys
             * @default "default"
             */
            type?: "default" | "secret";
            /** The value of the environment variable */
            value: string;
            /**
             * Whether the variable is enabled and active in the environment
             * @default true
             */
            enabled?: boolean;
            [key: string]: unknown;
          }>;
        };
        /** The unique identifier (ID or UID) of the environment to replace */
        environment_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Replaced environment object containing id, name, and uid */
        environment?: {
          /** Unique identifier of the environment */
          id?: string;
          /** Unique identifier with team/user prefix */
          uid?: string;
          /** Name of the environment */
          name?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to replace the entire contents of a collection asynchronously. Use when you need to completely replace a collection with new data. IMPORTANT: Include the collection's ID values in item, variable, and other nested objects to preserve them. If you do not include IDs, existing items will be removed and new items will be created. */
    "postman.replace_collections_data_asynchronously": {
      input: {
        /** The complete collection object to replace the existing collection. IMPORTANT: Include the collection's ID values in item, variable, and other nested objects to preserve them. If you do not include IDs, the endpoint removes existing items and creates new items. */
        collection: {
          /** Authentication configuration for the collection. */
          auth?: {
            /** The type of authentication (e.g., 'apikey', 'bearer', 'basic', 'oauth2') */
            type?: string;
          };
          /** Collection metadata containing name, description, and schema version */
          info: {
            /** The name of the collection */
            name: string;
            /**
             * The schema version URL for the collection. Defaults to v2.1.0
             * @default "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
             */
            schema?: string;
            /** Optional description of the collection explaining its purpose */
            description?: string;
          };
          /** Array of collection items (requests, folders). Include existing item IDs to preserve them, omit IDs to create new items. */
          item?: Array<{
            /** The unique identifier for the item. Include to preserve existing items, omit to create new ones. */
            id?: string;
            /** Nested items if this is a folder */
            item?: Array<Record<string, string | Array<unknown> | Record<string, unknown>>>;
            /** Name of the item (request or folder) */
            name?: string;
            /** Request object containing method, url, headers, body, etc. */
            request?: Record<string, string | Array<unknown> | Record<string, unknown>>;
            /** Array of saved responses for this request */
            response?: Array<Record<string, string | Array<unknown> | Record<string, unknown>>>;
            [key: string]: unknown;
          }>;
          /** Collection-level variables. Include existing variable IDs to preserve them, omit IDs to create new variables. */
          variable?: Array<{
            /** The unique identifier for the variable. Include to preserve existing variables, omit to create new ones. */
            id?: string;
            /** The variable name/key */
            key?: string;
            /** The type of the variable (e.g., 'string', 'secret') */
            type?: string;
            /** The variable value */
            value?: string;
            [key: string]: unknown;
          }>;
        };
        /** The unique identifier (ID or UID) of the collection to replace */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The replaced collection object. The update happens asynchronously, so full details may not be immediately available. */
        collection?: {
          /** The unique identifier of the collection */
          id?: string;
          /** Unique identifier with team/user prefix */
          uid?: string;
          /** Metadata about the collection */
          info?: {
            /** The name of the collection */
            name?: string;
            /** The schema URL for the collection format */
            schema?: string;
            /** ISO 8601 timestamp when the collection was last updated */
            updatedAt?: string;
            /** The collection's unique Postman identifier */
            _postman_id?: string;
            /** A description of the collection */
            description?: string;
            [key: string]: unknown;
          };
          /** The name of the collection */
          name?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to resolve a comment thread and any associated replies. Use when you need to mark a comment thread as resolved. On success, this returns an HTTP 204 No Content response. */
    "postman.resolve_a_comment_thread": {
      input: {
        /** The ID of the comment thread to resolve. This is obtained from the threadId field when creating or retrieving comments. */
        thread_id: number;
        [key: string]: unknown;
      };
      output: {
        /**
         * Indicates the operation completed successfully
         * @default true
         */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Tool to update the review status of a pull request by approving, declining, or unapproving it. Use when you need to perform a review action on a Postman pull request. */
    "postman.review_a_pull_request": {
      input: {
        /** The review action to perform on the pull request. 'approve' to approve the PR, 'decline' to decline it, or 'unapprove' to revoke a previous approval */
        action: "approve" | "decline" | "unapprove";
        /** The unique identifier of the pull request to review */
        pull_request_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Task data containing the updated pull request review status */
        data?: {
          /** Unique identifier of the task */
          id?: string;
          /** The action that was performed */
          action?: string;
          /** Status of the pull request after the review action */
          status?: string;
          /** ISO 8601 timestamp when the task was created */
          created_at?: string;
          /** ISO 8601 timestamp when the task was last updated */
          updated_at?: string;
          /** The ID of the pull request that was reviewed */
          pull_request_id?: string;
          [key: string]: unknown;
        };
        /** Response message indicating success or additional information */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to trigger an immediate run of a monitor and retrieve its execution results. Use when you need to manually execute a monitor outside of its scheduled runs. */
    "postman.run_a_monitor": {
      input: {
        /** The unique identifier (ID or UID) of the monitor to run */
        monitor_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The monitor run object containing execution info and statistics */
        run?: {
          /** Information about the monitor run execution */
          info?: {
            /** Status of the monitor run */
            status?: string;
            /** Unique identifier for this execution */
            execution_id?: string;
            [key: string]: unknown;
          };
          /** Statistics about the monitor run including assertions and requests */
          stats?: {
            /** Request statistics including total and pending counts */
            requests?: {
              /** Total number of requests */
              total?: number;
              /** Number of pending requests */
              pending?: number;
              [key: string]: unknown;
            };
            /** Assertion statistics including total, failed, and passed counts */
            assertions?: {
              /** Total number of assertions */
              total?: number;
              /** Number of failed assertions */
              failed?: number;
              /** Number of passed assertions */
              passed?: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to sync a collection attached to an API with the API schema. This is an asynchronous endpoint that returns HTTP 202 Accepted. Use when you need to synchronize a collection with changes made to the API schema. The collection must already be attached to the API. Returns a task ID that can be used to check the status of the sync operation. */
    "postman.sync_collection_with_schema": {
      input: {
        /** The unique identifier of the API. Must be in UUID format. */
        api_id: string;
        /** The unique identifier of the collection that is attached to the API. Format: userId-collectionId. */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** The unique identifier of the asynchronous sync task. Use this to check task status. */
        taskId?: string;
        /** URL to check the status of the sync task */
        location?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to sync a collection generated from an API specification. This is an asynchronous operation that returns HTTP 202 Accepted. Use when you need to update a collection to match the latest version of its source API specification. The collection must have been generated from a spec. */
    "postman.sync_collection_with_spec": {
      input: {
        /** The ID of the API specification to sync with the collection. This is the source specification that the collection was generated from. */
        spec_id: string;
        /** The UID of a collection that was generated from an API specification. This collection will be synchronized with its source specification. */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** The URL to poll for checking the status of the synchronization task */
        url?: string;
        /** The unique identifier of the asynchronous task for tracking the synchronization operation */
        taskId?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to sync an API specification with a linked collection. This is an asynchronous operation that returns HTTP 202 Accepted with task tracking information. Use when you need to synchronize changes from a generated collection back to its source specification. Prerequisites: the collection must be generated from the spec, and the spec must be single-file. */
    "postman.sync_spec_with_collection": {
      input: {
        /** The unique identifier of the API specification to sync. Must be in UUID format. */
        spec_id: string;
        /** The unique identifier of the generated collection whose changes should be synchronized back to the specification. The collection must have been generated from this spec, and the spec must be a single-file specification. */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** The relative URL to check the task status. Use GET request to this URL to monitor sync progress. */
        url?: string;
        /** The unique identifier for the asynchronous sync task. Use this to poll the task status. */
        taskId?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to copy or move folders into a collection or folder. Use when you need to reorganize collections by transferring folders between collections or into other folders. */
    "postman.transfer_folders": {
      input: {
        /**
         * Array of folder unique identifiers (UIDs) to transfer. Each UID must be in format 'owner-folderId' (e.g., '50304422-f172eb50-ded9-dcc1-5c6a-1ad2a604bf55'). All folders must exist and be accessible.
         * @minItems 1
         */
        ids: Array<string>;
        /** Transfer mode: 'copy' creates duplicates of folders in target, 'move' relocates folders to target (removes from source). */
        mode: "copy" | "move";
        /** Target location where folders should be transferred. Specify the model type (collection or folder) and its UID. */
        target: {
          /** The unique identifier (UID) of the target collection or folder in format 'owner-id' (e.g., '50304422-747b3035-ab7d-408e-bff9-ac1634a769d4') */
          id: string;
          /** Type of target to transfer folders into. Use 'collection' to transfer into a collection root, or 'folder' to transfer into a specific folder. */
          model: "collection" | "folder";
        };
        /** Position within the target where folders should be placed. Specify 'start' or 'end' for the position. */
        location: {
          /** Optional ID to position relative to. Use with model to place folders before/after a specific item. */
          id?: string;
          /** Optional model type for positioning relative to another item. Can be 'collection', 'folder', or 'request'. */
          model?: string;
          /** Position where folders should be placed in the target. Use 'start' to place at beginning or 'end' to place at end. */
          position: "start" | "end";
        };
        [key: string]: unknown;
      };
      output: {
        /** Array of folder IDs created in the target location after the transfer operation. These are the new folder UIDs in the destination. */
        ids?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Tool to transform an existing Postman Collection into a stringified OpenAPI 3.0.3 definition. Use when you need to convert a collection to OpenAPI format for API documentation or interoperability with other tools. */
    "postman.transform_collection_to_openapi": {
      input: {
        /** The unique identifier of the collection to transform into OpenAPI format */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Stringified JSON containing the OpenAPI 3.0.3 definition of the collection. Parse this string to get the full OpenAPI specification with paths, components, schemas, and server configurations. */
        output?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to update a folder in a Postman collection. Use when you need to modify the name or description of an existing folder. For complete properties and information, see the Postman Collection Format documentation. */
    "postman.update_a_folder": {
      input: {
        /** The new name for the folder */
        name?: string;
        /** The unique identifier of the folder to update */
        folder_id: string;
        /** Optional updated description for the folder explaining its purpose */
        description?: string;
        /** The unique identifier of the collection containing the folder */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Data about the updated folder */
        data?: {
          /** The unique identifier of the updated folder */
          id?: string;
          /** The name of the folder */
          name?: string;
          /** Array of request IDs in the folder's display order */
          order?: Array<string>;
          /** The owner ID of the folder */
          owner?: string;
          /** ISO 8601 timestamp when the folder was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the folder was last updated */
          updatedAt?: string;
          /** The collection ID containing this folder */
          collection?: string;
          /** The description of the folder */
          description?: string;
          /** Array of subfolder IDs in the folder's display order */
          foldersOrder?: Array<string>;
          /** User ID who last updated the folder */
          lastUpdatedBy?: string;
          [key: string]: unknown;
        };
        /** Metadata about the folder update operation */
        meta?: {
          /** The model type */
          model?: string;
          /** The action performed */
          action?: string;
          [key: string]: unknown;
        };
        /** The model ID of the updated folder */
        model_id?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to update a comment on a folder. Use when you need to modify the text content of an existing comment on a specific folder in a collection. */
    "postman.update_a_folders_comment": {
      input: {
        /** The updated text content of the comment. */
        body: string;
        /** The unique identifier of the comment to update. */
        comment_id: string;
        /** The unique identifier (UID) of the folder containing the comment. */
        folder_uid: string;
        /** The unique identifier (UID) of the collection containing the folder. */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** The updated comment object with all its details */
        data?: {
          /** The comment's unique ID */
          id?: number;
          /** The updated text content of the comment */
          body?: string;
          /** The status of the comment */
          status?: string;
          /** The thread ID this comment belongs to */
          thread_id?: number;
          /** ISO 8601 timestamp when the comment was created */
          created_at?: string;
          /** The ID of the user who created the comment */
          created_by?: number;
          /** ISO 8601 timestamp when the comment was last updated */
          updated_at?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to update an existing mock server. Use when you need to change a mock server's name, collection, environment, or privacy settings. The collection UID is required for all updates. */
    "postman.update_a_mock_server": {
      input: {
        /** Mock server configuration containing the collection UID (required), and optional name, environment UID, and privacy setting */
        mock: {
          /** The new name for the mock server */
          name?: string;
          /** Whether the mock server should be private. Private mocks require API key authentication. */
          private?: boolean;
          /** The collection UID (format: userId-collectionId) to associate with the mock server. This is required when updating a mock server. */
          collection: string;
          /** The environment UID to use with the mock server */
          environment?: string;
        };
        /** The unique identifier of the mock server to update */
        mock_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Updated mock server object with details including id, name, uid, owner, collection, environment, mockUrl, createdAt, updatedAt, and config */
        mock?: {
          /** Unique identifier of the mock server */
          id?: string;
          /** Unique identifier with team/user prefix */
          uid?: string;
          /** Name of the mock server */
          name?: string;
          /** User ID of the mock server owner */
          owner?: string;
          /** Configuration settings for the mock server */
          config?: {
            /** Delay in milliseconds before responding */
            delay?: number | string;
            /** Custom headers for the mock server */
            headers?: Array<unknown>;
            /** Whether to match request body */
            matchBody?: boolean;
            /** Whether to match request headers */
            matchHeader?: boolean;
            /** Whether to match wildcards */
            matchWildcards?: boolean;
            /** Whether to match query parameters */
            matchQueryParams?: boolean;
            /** Server response ID if configured */
            serverResponseId?: string;
            [key: string]: unknown;
          };
          /** URL of the mock server that can be used to make requests */
          mockUrl?: string;
          /** ISO 8601 timestamp when the mock server was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the mock server was last updated */
          updatedAt?: string;
          /** Collection ID associated with this mock server */
          collection?: string;
          /** Environment ID associated with this mock server (if applicable) */
          environment?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to update an existing monitor in Postman. Use when you need to modify monitor properties like name, active status, collection, environment, options, notifications, or distribution settings. */
    "postman.update_a_monitor": {
      input: {
        /** The monitor object containing fields to update. All fields are optional - only include fields you want to update. */
        monitor: {
          /** The monitor's name. Update this field to change the monitor's display name. */
          name?: string;
          /** Whether the monitor is active. Set to true to enable or false to disable the monitor. */
          active?: boolean;
          /** Monitor options configuration. */
          options?: {
            /** Whether to enforce strict SSL certificate validation */
            strictSSL?: boolean;
            /** Delay between requests in milliseconds */
            requestDelay?: number;
            /** Request timeout in milliseconds */
            requestTimeout?: number;
            /** Whether to follow HTTP redirects */
            followRedirects?: boolean;
          };
          /** Distribution/region settings for where the monitor should run */
          distribution?: Array<string>;
          /** The collection UID to monitor. Update to change which collection the monitor runs. */
          collectionUid?: string;
          /** Monitor notification settings. */
          notifications?: {
            /** Array of recipients to notify on error */
            onError?: Array<{
              /** Email address of the recipient */
              email?: string;
              [key: string]: unknown;
            }>;
            /** Array of recipients to notify on failure */
            onFailure?: Array<{
              /** Email address of the recipient */
              email?: string;
              [key: string]: unknown;
            }>;
          };
          /** The environment UID to use with the monitor. Update to change the environment or set to null to remove. */
          environmentUid?: string;
        };
        /** The unique identifier (ID or UID) of the monitor to update */
        monitor_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The updated monitor object with id, name, and uid */
        monitor?: {
          /** The unique identifier of the monitor */
          id?: string;
          /** The unique identifier with team/user prefix */
          uid?: string;
          /** The name of the monitor */
          name?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to update an open pull request in Postman. Use when you need to modify the title, description, source, destination, or reviewers of an existing pull request. All fields must be provided in the request. */
    "postman.update_a_pull_request": {
      input: {
        /** The updated title of the pull request. This should summarize the changes being proposed. */
        title: string;
        /** Array of reviewer user IDs who should review the pull request. Can be an empty array if no specific reviewers are required. This field is required even when updating a pull request. */
        reviewers: Array<string>;
        /** The UID of the source collection (forked collection). Format: {owner}-{collectionId}. This field is required even when updating a pull request. */
        source_id: string;
        /** The updated description for the pull request. Provides context for reviewers about the changes. */
        description: string;
        /** The UID of the destination collection (parent collection). Format: {owner}-{collectionId}. This field is required even when updating a pull request. */
        destination_id: string;
        /** The unique identifier of the pull request to update. This is the pull request ID returned when the pull request was created. */
        pull_request_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The updated pull request object containing details about the pull request */
        data?: {
          /** Unique identifier of the updated pull request */
          id?: string;
          /** Updated title of the pull request */
          title?: string;
          /** Current status of the pull request (e.g., 'open', 'merged', 'declined') */
          status?: string;
          /** Array of reviewer user IDs assigned to the pull request */
          reviewers?: Array<string>;
          /** Source collection ID (the forked collection) */
          source_id?: string;
          /** ISO 8601 timestamp when the pull request was created */
          created_at?: string;
          /** User ID of the pull request creator */
          created_by?: number;
          /** ISO 8601 timestamp when the pull request was last updated */
          updated_at?: string;
          /** Updated description of the pull request */
          description?: string;
          /** Destination collection ID (the parent collection) */
          destination_id?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to update a request in a Postman collection. Use when you need to modify an existing request's name, method, URL, headers, or body following the Postman Collection Format. */
    "postman.update_a_request": {
      input: {
        /** The updated name of the request */
        name?: string;
        /** Request object following Postman Collection Format. */
        request?: {
          /** The request URL */
          url: string;
          /** Body object for the request. */
          body?: {
            /** The raw body content when mode is 'raw' */
            raw?: string;
            /** The mode of the request body (e.g., 'raw', 'urlencoded', 'formdata') */
            mode?: string;
            /** Form data key-value pairs when mode is 'formdata' */
            formdata?: Array<Record<string, string | boolean>>;
            /** URL-encoded key-value pairs when mode is 'urlencoded' */
            urlencoded?: Array<Record<string, string | boolean>>;
          };
          /** Array of header objects for the request */
          header?: Array<{
            /** The header key/name */
            key: string;
            /** The header value */
            value: string;
            /** Whether this header is disabled */
            disabled?: boolean;
            [key: string]: unknown;
          }>;
          /** HTTP method for the request */
          method: string;
          /** Description of the request */
          description?: string;
        };
        /** The unique identifier of the request to update */
        request_id: string;
        /** The unique identifier of the collection containing the request */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Data about the updated request */
        data?: {
          /** The unique identifier of the updated request */
          id?: string;
          /** The URL of the request */
          url?: string;
          /** The name of the updated request */
          name?: string;
          /** The owner ID of the request */
          owner?: string;
          /** The folder ID if the request is in a folder */
          folder?: string;
          /** The HTTP method of the request */
          method?: string;
          /** List of headers in the request */
          headers?: Array<Record<string, string | boolean>>;
          /** The data mode of the request body */
          dataMode?: string;
          /** ISO 8601 timestamp when the request was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the request was last updated */
          updatedAt?: string;
          /** The collection ID containing this request */
          collection?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to update a comment on a request. Use when you need to modify the text content of an existing comment on a specific request within a collection. */
    "postman.update_a_requests_comment": {
      input: {
        /** The updated text content of the comment. */
        body: string;
        /** The comment's unique identifier. This is the ID of the comment to update. */
        comment_id: number;
        /** The request's unique ID (UID). This identifies the specific request containing the comment. */
        request_uid: string;
        /** The collection's unique ID (UID). This identifies the collection containing the request. */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** The comment's unique ID */
        id?: number;
        /** The updated text content of the comment */
        body?: string;
        /** The status of the comment (e.g., 'Open') */
        status?: string;
        /** The thread ID this comment belongs to */
        thread_id?: number;
        /** ISO 8601 timestamp when the comment was created */
        created_at?: string;
        /** The ID of the user who created the comment */
        created_by?: number;
        /** ISO 8601 timestamp when the comment was last updated */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to update a response in a Postman collection. Use when you need to modify properties of an existing saved response example such as name, status, code, headers, cookies, or body. */
    "postman.update_a_response": {
      input: {
        /** The response object containing the properties to update. Can include name, status, code, header, cookie, body, originalRequest, etc. */
        response: {
          /** The response body as a string */
          body?: string;
          /** The HTTP status code */
          code?: number;
          /** The name of the response example */
          name?: string;
          /** Array of cookie objects with key and value properties */
          cookie?: Array<{
            /** The cookie key name */
            key: string;
            /** The cookie value */
            value: string;
            [key: string]: unknown;
          }>;
          /** Array of header objects with key and value properties */
          header?: Array<{
            /** The header key name */
            key: string;
            /** The header value */
            value: string;
            [key: string]: unknown;
          }>;
          /** The status text (e.g., OK, Not Found, Bad Request) */
          status?: string;
          /** The original request object structure. */
          originalRequest?: {
            /** The URL of the original request */
            url?: string;
            /** HTTP method of the request (GET, POST, PUT, DELETE, etc.) */
            method?: string;
          };
        };
        /** The unique identifier of the response to update */
        response_id: string;
        /** The unique identifier of the collection containing the response */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Data about the updated response */
        data?: {
          /** The unique identifier of the response */
          id?: string;
          /** The MIME type of the response */
          mime?: string;
          /** The name of the response */
          name?: string;
          /** The response body text */
          text?: string;
          /** The response time */
          time?: number;
          /** The owner ID of the response */
          owner?: string;
          /** The status text of the response */
          status?: string;
          /** List of cookies in the response */
          cookies?: Array<unknown>;
          /** List of response headers */
          headers?: Array<unknown>;
          /** The request ID associated with this response */
          request?: string;
          /** The language of the response */
          language?: string;
          /** ISO 8601 timestamp when the response was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the response was last updated */
          updatedAt?: string;
          /** The raw data type of the response */
          rawDataType?: string;
          /** The revision number of the response */
          lastRevision?: number;
          /** The HTTP response code */
          responseCode?: number;
          /** User ID who last updated the response */
          lastUpdatedBy?: string;
          /** The request object associated with this response */
          requestObject?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Metadata about the response operation */
        meta?: {
          /** The model type */
          model?: string;
          /** The action performed */
          action?: string;
          [key: string]: unknown;
        };
        /** The ID of the updated response */
        model_id?: string;
        /** The revision number of the collection after update */
        revision?: number;
        [key: string]: unknown;
      };
    };
    /** Tool to update a comment on a response. Use when you need to modify the text content of an existing comment on a specific response within a collection. */
    "postman.update_a_responses_comment": {
      input: {
        /** The updated text content of the comment. */
        body: string;
        /** The unique identifier of the comment to update. */
        comment_id: string;
        /** The unique identifier (UID) of the response containing the comment. */
        response_uid: string;
        /** The unique identifier (UID) of the collection containing the response. */
        collection_uid: string;
        [key: string]: unknown;
      };
      output: {
        /** The comment's unique ID */
        id?: number;
        /** The updated text content of the comment */
        body?: string;
        /** The status of the comment */
        status?: string;
        /** The thread ID this comment belongs to */
        thread_id?: number;
        /** ISO 8601 timestamp when the comment was created */
        created_at?: string;
        /** The ID of the user who created the comment */
        created_by?: number;
        /** ISO 8601 timestamp when the comment was last updated */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to update a mock server's server response. Use when you need to modify properties of an existing server response such as name, status code, language, body, or headers. At least one property must be included in the update request. */
    "postman.update_a_server_response": {
      input: {
        /** The mock server's unique identifier (UUID format) */
        mock_id: string;
        /** The server response object containing the properties to update. Include at least one property: name, status_code, language, body, or headers. */
        server_response: {
          /** The response body content as a string */
          body?: string;
          /** The name of the server response */
          name?: string;
          /** Array of header objects with key and value properties to include in the response */
          headers?: Array<{
            /** The header key name */
            key: string;
            /** The header value */
            value: string;
            [key: string]: unknown;
          }>;
          /** The language/format of the response body (e.g., json, html, text, xml) */
          language?: string;
          /** The HTTP status code for the server response */
          status_code?: number;
        };
        /** The server response's unique identifier (UUID format) to update */
        server_response_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Details of the updated server response */
        serverResponse?: {
          /** The unique identifier of the server response */
          id?: string;
          /** The unique identifier (uid) of the server response */
          uid?: string;
          /** The response body content */
          body?: string;
          /** The name of the server response */
          name?: string;
          /** Array of response headers */
          headers?: Array<Record<string, string>>;
          /** The language/format of the response body */
          language?: string;
          /** ISO 8601 timestamp when the server response was created */
          createdAt?: string;
          /** ISO 8601 timestamp when the server response was last updated */
          updatedAt?: string;
          /** The HTTP status code of the server response */
          statusCode?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to update an API specification file's content. Use when you need to modify the contents of a specific file within a spec. */
    "postman.update_a_spec_file": {
      input: {
        /** The updated content of the spec file in YAML or JSON format */
        content: string;
        /** The unique identifier of the API specification */
        spec_id: string;
        /** The path of the file within the spec to update (e.g., 'openapi.yaml', 'components/schemas.yaml') */
        file_path: string;
        [key: string]: unknown;
      };
      output: {
        /** The unique identifier of the file */
        id?: string;
        /** The name of the file */
        name?: string;
        /** The path of the file within the specification */
        path?: string;
        /** The type of file (e.g., 'ROOT') */
        type?: string;
        /** ISO 8601 timestamp when the file was created */
        created_at?: string;
        /** User ID who created the file */
        created_by?: number;
        /** ISO 8601 timestamp when the file was last updated */
        updated_at?: string;
        /** User ID who last updated the file */
        updated_by?: number;
        [key: string]: unknown;
      };
    };
    /** Tool to update an API specification's properties such as its name. Use when you need to modify metadata of an existing spec. */
    "postman.update_a_specs_properties": {
      input: {
        /** The new name for the API specification */
        name?: string;
        /** The unique identifier of the API specification to update. This is a UUID format string. */
        spec_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Unique identifier of the specification */
        id?: string;
        /** Name of the specification */
        name?: string;
        /** Type of specification (e.g., 'OPENAPI:3.0') */
        type?: string;
        /** ISO 8601 timestamp when the spec was created */
        createdAt?: string;
        /** User ID who created the spec */
        createdBy?: number;
        /** ISO 8601 timestamp when the spec was last updated */
        updatedAt?: string;
        /** User ID who last updated the spec */
        updatedBy?: number;
        [key: string]: unknown;
      };
    };
    /** Tool to update an existing workspace in Postman. Use when you need to modify the name, type, or description of a workspace. The 'type' field is required for all updates. */
    "postman.update_a_workspace": {
      input: {
        /** The workspace object containing fields to update. The 'type' field is required, while 'name' and 'description' are optional. */
        workspace: {
          /** The name of the workspace. Update this field to change the workspace's display name. */
          name?: string;
          /** The type of the workspace. Required field. Valid values are 'personal', 'team', or 'public'. */
          type: string;
          /** A description of the workspace. Update to change the workspace's description. */
          description?: string;
        };
        /** The unique identifier of the workspace to update. This is the workspace ID returned when the workspace was created. */
        workspace_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The updated workspace object with all details */
        workspace?: {
          /** The unique identifier of the workspace */
          id?: string;
          /** The name of the workspace */
          name?: string;
          /** The type of the workspace (personal, team, or public) */
          type?: string;
          /** ISO 8601 timestamp when the workspace was created */
          created_at?: string;
          /** User ID of who created the workspace */
          created_by?: string;
          /** ISO 8601 timestamp when the workspace was last updated */
          updated_at?: string;
          /** User ID of who last updated the workspace */
          updated_by?: string;
          /** Visibility setting of the workspace */
          visibility?: string;
          /** The description of the workspace */
          description?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to update an existing API in Postman. Use when you need to modify the name, summary, or description of an API. */
    "postman.update_an_api": {
      input: {
        /** The API object containing fields to update. Include at least one of: name, summary, or description. */
        api: {
          /** The name of the API. Update this field to change the API's display name. */
          name?: string;
          /** A brief summary of the API. Update to change the API's summary description. */
          summary?: string;
          /** A detailed description of the API. Update to change the full API description. */
          description?: string;
        };
        /** The unique identifier of the API to update. This is the API ID returned when the API was created. */
        api_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The updated API object with all details */
        api?: {
          /** The unique identifier of the API */
          id?: string;
          /** The name of the API */
          name?: string;
          /** The summary of the API */
          summary?: string;
          /** ISO 8601 timestamp when the API was created */
          created_at?: string;
          /** User ID of who created the API */
          created_by?: string;
          /** ISO 8601 timestamp when the API was last updated */
          updated_at?: string;
          /** User ID of who last updated the API */
          updated_by?: string;
          /** The description of the API */
          description?: string;
          /** Indicates if the API is soft deleted (0 for active, 1 for deleted) */
          is_soft_deleted?: number;
          /** The container status of the API */
          api_container_status?: number;
          /** The configuration source of the API */
          configuration_source?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to update a comment on an API. Use when you need to modify the text content of an existing comment on a specific API. */
    "postman.update_an_apis_comment": {
      input: {
        /** The updated text content of the comment. */
        body: string;
        /** The API's unique identifier. This identifies the API containing the comment to update. */
        api_id: string;
        /** The comment's unique identifier. This is the ID of the comment to update. */
        comment_id: number;
        [key: string]: unknown;
      };
      output: {
        /** The comment's unique ID */
        id?: number;
        /** The updated text content of the comment */
        body?: string;
        /** The status of the comment (e.g., 'Open') */
        status?: string;
        /** The thread ID this comment belongs to */
        thread_id?: number;
        /** ISO 8601 timestamp when the comment was created */
        created_at?: string;
        /** The ID of the user who created the comment */
        created_by?: number;
        /** ISO 8601 timestamp when the comment was last updated */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Tool to update specific environment properties using JSON Patch operations (RFC 6902). Use when you need to modify environment name or variables without replacing the entire environment. */
    "postman.update_an_environment": {
      input: {
        /** Array of JSON Patch operations to apply to the environment. Each operation modifies a specific field using the RFC 6902 format */
        operations: Array<{
          /** The operation type to perform. Use 'replace' to update existing fields, 'add' to create new fields or append to arrays, 'remove' to delete fields, 'copy'/'move' to copy/move from another path (requires 'from' field) */
          op: "replace" | "add" | "remove" | "copy" | "move" | "test";
          /** Source JSON pointer for 'copy' and 'move' operations (RFC 6902). Required when op is 'copy' or 'move' */
          from?: string;
          /** JSON pointer to the field to modify (e.g., '/name' for environment name, '/values/0/value' for first variable's value) */
          path: string;
          /** New value for the field. Required for 'replace' and 'add' operations, not used for 'remove' operation */
          value?: string | number | boolean | Record<string, unknown> | Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** The unique identifier (ID or UID) of the environment to update */
        environment_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The updated environment object with all details including variables */
        environment?: {
          /** The unique identifier of the environment */
          id?: string;
          /** The unique identifier with team/user prefix */
          uid?: string;
          /** The name of the environment */
          name?: string;
          /** User ID of the environment owner */
          owner?: string;
          /** Array of environment variable objects with key, value, type, and enabled fields */
          values?: Array<{
            /** The name of the environment variable */
            key?: string;
            /** The type of the environment variable (e.g., 'default', 'secret') */
            type?: string;
            /** The value of the environment variable */
            value?: string;
            /** Whether the environment variable is enabled */
            enabled?: boolean;
            [key: string]: unknown;
          }>;
          /** ISO 8601 timestamp when the environment was created */
          created_at?: string;
          /** ISO 8601 timestamp when the environment was last updated */
          updated_at?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Tool to update and replace a workspace's global variables. Use when you need to set or replace all global variables in a workspace. Note: This endpoint replaces all existing global variables with the provided list. */
    "postman.update_global_variables": {
      input: {
        /** Array of global variable objects to set. This replaces all existing global variables in the workspace with the provided list. */
        values: Array<{
          /** The name/key of the global variable */
          key: string;
          /**
           * The type of the global variable. Typically 'default' for standard variables or 'secret' for sensitive data
           * @default "default"
           */
          type?: string;
          /** The value of the global variable */
          value: string;
          /**
           * Whether the global variable is enabled or not
           * @default true
           */
          enabled?: boolean;
          [key: string]: unknown;
        }>;
        /** The unique identifier of the workspace to update global variables for. Can be obtained from the GET /workspaces endpoint. */
        workspace_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Array of updated global variable objects, each containing key, value, enabled, and type fields */
        values?: Array<{
          /** The name/key of the global variable */
          key?: string;
          /** The type of the global variable (e.g., 'default', 'secret') */
          type?: string;
          /** The value of the global variable */
          value?: string;
          /** Whether the global variable is enabled or not */
          enabled?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Tool to update specific collection properties like name, description, authentication, variables, or events. Use when you need to partially update a collection without replacing the entire collection structure. Returns the updated collection information after the changes are applied. */
    "postman.update_part_of_a_collection": {
      input: {
        /** The collection object containing the properties to update. Can include info (with name, description), auth, variables, or events properties. Only the specified properties will be updated. */
        collection: {
          /** Authentication configuration to update. */
          auth?: {
            /** The type of authentication (e.g., 'apikey', 'bearer', 'basic', 'oauth2') */
            type?: string;
          };
          /** Collection metadata to update. */
          info?: {
            /** The new name for the collection */
            name?: string;
            /** The new description for the collection */
            description?: string;
          };
          /** Collection-level event scripts to update or add */
          event?: Array<{
            /** When the script runs (e.g., 'prerequest', 'test') */
            listen?: string;
            /** Script configuration for an event. */
            script?: {
              /** Array of script lines to execute */
              exec?: Array<string>;
              /** The script language type (e.g., 'text/javascript') */
              type?: string;
            };
            [key: string]: unknown;
          }>;
          /** Collection-level variables to update or add */
          variable?: Array<{
            /** The variable name/key */
            key?: string;
            /** The type of the variable (e.g., 'string', 'secret') */
            type?: string;
            /** The variable value */
            value?: string;
            [key: string]: unknown;
          }>;
        };
        /** The unique identifier (ID or UID) of the collection to update */
        collection_id: string;
        [key: string]: unknown;
      };
      output: {
        /** The updated collection object with the modified properties */
        collection?: {
          /** Authentication configuration for the collection */
          auth?: {
            /** The type of authentication */
            type?: string;
            [key: string]: unknown;
          };
          /** Metadata about the collection */
          info?: {
            /** The name of the collection */
            name?: string;
            /** The schema URL for the collection format */
            schema?: string;
            /** ISO 8601 timestamp when the collection was last updated */
            updatedAt?: string;
            /** The collection's unique Postman identifier */
            _postman_id?: string;
            /** A description of the collection */
            description?: string;
            [key: string]: unknown;
          };
          /** Collection-level event scripts */
          event?: Array<{
            /** When the script runs */
            listen?: string;
            /** The script configuration and code */
            script?: {
              /** Array of script lines to execute */
              exec?: Array<string>;
              /** The script language type */
              type?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Collection-level variables */
          variable?: Array<{
            /** The unique identifier for the variable */
            id?: string;
            /** The variable name/key */
            key?: string;
            /** The type of the variable */
            type?: string;
            /** The variable value */
            value?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
