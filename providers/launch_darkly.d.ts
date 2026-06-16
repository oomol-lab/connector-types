import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add one or more LaunchDarkly members to one or more teams with a semantic patch update. */
    "launch_darkly.add_member_to_teams": {
      input: {
        /**
         * The LaunchDarkly member identifiers to add to teams.
         * @minItems 1
         */
        memberIds: Array<string>;
        /**
         * The LaunchDarkly team keys that should receive the members.
         * @minItems 1
         */
        teamKeys: Array<string>;
        /** The comment to attach to the update, when supported. */
        comment?: string;
      };
      output: {
        /** The member identifiers that were processed by the update. */
        memberIDs?: Array<string>;
        /** The team keys that were processed by the update. */
        teamKeys?: Array<string>;
        /** The per-team errors returned by LaunchDarkly, when any updates fail. */
        errors?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Create a LaunchDarkly environment using either common fields or a full official request body. */
    "launch_darkly.create_environment": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The environment key to create.
         * @minLength 1
         */
        key?: string;
        /**
         * The environment name to create.
         * @minLength 1
         */
        name?: string;
        /** The display color for the environment. */
        color?: string;
        /**
         * The default time-to-live value for temporary targeting, in minutes.
         * @minimum 0
         */
        defaultTtl?: number;
        /** Whether secure mode should be enabled for the environment. */
        secureMode?: boolean;
        /** Whether event tracking should be enabled by default for the environment. */
        defaultTrackEvents?: boolean;
        /** Whether UI changes should require confirmation in the environment. */
        confirmChanges?: boolean;
        /** Whether UI changes should require comments in the environment. */
        requireComments?: boolean;
        /** The tags to assign to the environment. */
        tags?: Array<string>;
        /** The approval settings payload for the environment. */
        approvalSettings?: Record<string, unknown>;
        /** The default configuration object for the environment. */
        defaults?: Record<string, unknown>;
        /** The full official LaunchDarkly environment creation payload. */
        body?: Record<string, unknown>;
      };
      output: {
        /** The LaunchDarkly environment identifier. */
        _id?: string;
        /** The LaunchDarkly environment key. */
        key?: string;
        /** The LaunchDarkly environment name. */
        name?: string;
        /** The display color configured for the environment. */
        color?: string | null;
        /** The server-side SDK key for the environment, when returned. */
        apiKey?: string | null;
        /** The mobile key for the environment, when returned. */
        mobileKey?: string | null;
        /** The default time-to-live value for temporary flag targeting, in minutes. */
        defaultTtl?: number;
        /** Whether secure mode is enabled for client-side SDK evaluation. */
        secureMode?: boolean;
        /** Whether event tracking is enabled by default for flags in this environment. */
        defaultTrackEvents?: boolean;
        /** Whether UI changes require confirmation in this environment. */
        confirmChanges?: boolean;
        /** Whether UI changes require a comment in this environment. */
        requireComments?: boolean;
        /** The tags assigned to the environment. */
        tags?: Array<string>;
        /** The related resource links for the environment. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a LaunchDarkly feature flag using either common fields or a full official request body. */
    "launch_darkly.create_feature_flag": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The feature flag key to create.
         * @minLength 1
         */
        key?: string;
        /**
         * The feature flag name to create.
         * @minLength 1
         */
        name?: string;
        /** The LaunchDarkly feature flag kind. */
        kind?: "boolean" | "multivariate";
        /** The feature flag description. */
        description?: string;
        /** Whether the feature flag is temporary. */
        temporary?: boolean;
        /** The tags to assign to the feature flag. */
        tags?: Array<string>;
        /** The client-side availability settings for the feature flag. */
        clientSideAvailability?: Record<string, unknown>;
        /** The variations to configure on the feature flag. */
        variations?: Array<Record<string, unknown>>;
        /** The default variation configuration for the feature flag. */
        defaults?: Record<string, unknown>;
        /** The full official LaunchDarkly feature flag creation payload. */
        body?: Record<string, unknown>;
      };
      output: {
        /** The LaunchDarkly feature flag identifier. */
        _id?: string;
        /** The LaunchDarkly feature flag key. */
        key?: string;
        /** The LaunchDarkly feature flag name. */
        name?: string;
        /** The LaunchDarkly feature flag kind. */
        kind?: string;
        /** The LaunchDarkly feature flag description. */
        description?: string | null;
        /** Whether the feature flag is marked as temporary. */
        temporary?: boolean;
        /** Whether the feature flag is archived. */
        archived?: boolean;
        /** The tags assigned to the feature flag. */
        tags?: Array<string>;
        /** The maintainer identifier configured for the feature flag. */
        maintainerId?: string | null;
        /** The Unix timestamp, in milliseconds, when the feature flag was created. */
        creationDate?: number;
        /** The client-side availability settings for the feature flag. */
        clientSideAvailability?: Record<string, unknown>;
        /** The variations configured on the feature flag. */
        variations?: Array<Record<string, unknown>>;
        /** The default variation configuration for the feature flag. */
        defaults?: Record<string, unknown>;
        /** The environment-specific configuration for the feature flag. */
        environments?: Record<string, unknown>;
        /** The related resource links for the feature flag. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a LaunchDarkly project using either common fields or a full official request body. */
    "launch_darkly.create_project": {
      input: {
        /**
         * The project key to create.
         * @minLength 1
         */
        key?: string;
        /**
         * The project name to create.
         * @minLength 1
         */
        name?: string;
        /** The project description. */
        description?: string;
        /** Whether new flags should be included in generated snippets by default. */
        includeInSnippetByDefault?: boolean;
        /** The tags to assign to the project. */
        tags?: Array<string>;
        /** The default client-side availability settings for the project. */
        defaultClientSideAvailability?: Record<string, unknown>;
        /** The full official LaunchDarkly project creation payload. */
        body?: Record<string, unknown>;
      };
      output: {
        /** The LaunchDarkly project identifier. */
        _id?: string;
        /** The LaunchDarkly project key. */
        key?: string;
        /** The LaunchDarkly project name. */
        name?: string;
        /** The LaunchDarkly project description. */
        description?: string | null;
        /** Whether new flags should be included in generated code snippets by default. */
        includeInSnippetByDefault?: boolean;
        /** The tags assigned to the project. */
        tags?: Array<string>;
        /** The default release pipeline key for the project. */
        defaultReleasePipelineKey?: string | null;
        /** The default client-side availability settings for new flags in the project. */
        defaultClientSideAvailability?: Record<string, unknown>;
        /** The environment collection embedded in the project response. */
        environments?: Record<string, unknown>;
        /** The related resource links for the project. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a LaunchDarkly segment using either common fields or a full official request body. */
    "launch_darkly.create_segment": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The LaunchDarkly environment key.
         * @minLength 1
         */
        environmentKey: string;
        /**
         * The segment key to create.
         * @minLength 1
         */
        key?: string;
        /**
         * The segment name to create.
         * @minLength 1
         */
        name?: string;
        /** The segment description. */
        description?: string;
        /** The tags to assign to the segment. */
        tags?: Array<string>;
        /** The context keys to include in the segment. */
        included?: Array<string>;
        /** The context keys to exclude from the segment. */
        excluded?: Array<string>;
        /** The targeting rules to configure on the segment. */
        rules?: Array<Record<string, unknown>>;
        /** Whether the segment should be configured as unbounded. */
        unbounded?: boolean;
        /** The context kind used for unbounded segment membership. */
        unboundedContextKind?: string;
        /** The full official LaunchDarkly segment creation payload. */
        body?: Record<string, unknown>;
      };
      output: {
        /** The LaunchDarkly segment identifier. */
        _id?: string;
        /** The LaunchDarkly segment key. */
        key?: string;
        /** The LaunchDarkly segment name. */
        name?: string;
        /** The LaunchDarkly segment description. */
        description?: string | null;
        /** The tags assigned to the segment. */
        tags?: Array<string>;
        /** The included context keys configured on the segment. */
        included?: Array<string>;
        /** The excluded context keys configured on the segment. */
        excluded?: Array<string>;
        /** The targeting rules configured on the segment. */
        rules?: Array<Record<string, unknown>>;
        /** Whether the segment is configured as an unbounded segment. */
        unbounded?: boolean;
        /** The context kind used for unbounded segment membership. */
        unboundedContextKind?: string | null;
        /** The Unix timestamp, in milliseconds, when the segment was created. */
        creationDate?: number;
        /** The Unix timestamp, in milliseconds, when the segment was last modified. */
        lastModifiedDate?: number;
        /** The related resource links for the segment. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a LaunchDarkly team using either common fields or a full official request body. */
    "launch_darkly.create_team": {
      input: {
        /**
         * The team key to create.
         * @minLength 1
         */
        key?: string;
        /**
         * The team name to create.
         * @minLength 1
         */
        name?: string;
        /** The team description. */
        description?: string;
        /** The custom role keys to assign to the team. */
        customRoleKeys?: Array<string>;
        /** The member identifiers to assign to the team. */
        memberIds?: Array<string>;
        /** The member identifiers to assign as team maintainers. */
        maintainerIds?: Array<string>;
        /** The role-attribute payload for the team. */
        roleAttributes?: Record<string, unknown>;
        /** The full official LaunchDarkly team creation payload. */
        body?: Record<string, unknown>;
      };
      output: {
        /** The LaunchDarkly team identifier. */
        _id?: string;
        /** The LaunchDarkly team key. */
        key?: string;
        /** The LaunchDarkly team name. */
        name?: string;
        /** The LaunchDarkly team description. */
        description?: string | null;
        /** The Unix timestamp, in milliseconds, when the team was created. */
        creationDate?: number;
        /** The Unix timestamp, in milliseconds, when the team was last modified. */
        lastModified?: number;
        /** The LaunchDarkly team version number. */
        version?: number;
        /** The number of members assigned to the team. */
        memberCount?: number;
        /** The custom role keys assigned to the team. */
        customRoleKeys?: Array<string>;
        /** The member identifiers assigned as maintainers for the team. */
        maintainerIds?: Array<string>;
        /** The member identifiers assigned to the team. */
        memberIds?: Array<string>;
        /** The team role-attribute configuration returned by LaunchDarkly. */
        roleAttributes?: Record<string, unknown>;
        /** The related resource links for the team. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a LaunchDarkly access token using either common fields or a full official request body. */
    "launch_darkly.create_token": {
      input: {
        /**
         * The access token name to create.
         * @minLength 1
         */
        name?: string;
        /** The access token description. */
        description?: string;
        /** The base role assigned to the token. */
        role?: string;
        /** The custom role identifiers assigned to the token. */
        customRoleIds?: Array<string>;
        /** The inline policy assigned to the token. */
        inlineRole?: Record<string, unknown>;
        /** Whether the token should be a service token. */
        serviceToken?: boolean;
        /** The default API version to associate with the token. */
        defaultApiVersion?: number;
        /** The full official LaunchDarkly token creation payload. */
        body?: Record<string, unknown>;
      };
      output: {
        /** The LaunchDarkly access token identifier. */
        _id?: string;
        /** The LaunchDarkly access token name. */
        name?: string;
        /** The LaunchDarkly access token description. */
        description?: string | null;
        /** The base role assigned to the token. */
        role?: string | null;
        /** The Unix timestamp, in milliseconds, when the token was created. */
        creationDate?: number;
        /** The Unix timestamp, in milliseconds, when the token was last modified. */
        lastModified?: number;
        /** The timestamp when the token was last used. */
        lastUsed?: string | null;
        /** The token secret value, when returned by LaunchDarkly. */
        token?: string | null;
        /** Whether the token is a service token. */
        serviceToken?: boolean;
        /** The default API version configured for the token. */
        defaultApiVersion?: number;
        /** The custom role identifiers assigned to the token. */
        customRoleIds?: Array<string>;
        /** The inline policy attached to the token. */
        inlineRole?: Record<string, unknown>;
        /** The owner identifier for the token. */
        ownerId?: string | null;
        /** The member identifier associated with the token. */
        memberId?: string | null;
        /** The related resource links for the token. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Delete a LaunchDarkly environment by project key and environment key. */
    "launch_darkly.delete_environment": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The LaunchDarkly environment key.
         * @minLength 1
         */
        environmentKey: string;
      };
      output: Record<string, unknown>;
    };
    /** Delete a LaunchDarkly feature flag by project key and feature flag key. */
    "launch_darkly.delete_feature_flag": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The LaunchDarkly feature flag key.
         * @minLength 1
         */
        featureFlagKey: string;
      };
      output: Record<string, unknown>;
    };
    /** Delete a LaunchDarkly project by project key. */
    "launch_darkly.delete_project": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
      };
      output: Record<string, unknown>;
    };
    /** Delete a LaunchDarkly segment by project key, environment key, and segment key. */
    "launch_darkly.delete_segment": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The LaunchDarkly environment key.
         * @minLength 1
         */
        environmentKey: string;
        /**
         * The LaunchDarkly segment key.
         * @minLength 1
         */
        segmentKey: string;
      };
      output: Record<string, unknown>;
    };
    /** Delete a LaunchDarkly team by team key. */
    "launch_darkly.delete_team": {
      input: {
        /**
         * The LaunchDarkly team key.
         * @minLength 1
         */
        teamKey: string;
      };
      output: Record<string, unknown>;
    };
    /** Delete a LaunchDarkly access token by token identifier. */
    "launch_darkly.delete_token": {
      input: {
        /**
         * The LaunchDarkly access token identifier.
         * @minLength 1
         */
        tokenId: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the LaunchDarkly caller identity for the current access token. */
    "launch_darkly.get_caller_identity": {
      input: Record<string, never>;
      output: {
        /** The LaunchDarkly account identifier for the caller. */
        accountId?: string | null;
        /** The LaunchDarkly account name for the caller. */
        accountName?: string | null;
        /** The access token identifier for the caller. */
        tokenId?: string | null;
        /** The access token name for the caller. */
        tokenName?: string | null;
        /** The LaunchDarkly member identifier for the caller, when applicable. */
        memberId?: string | null;
        /** The LaunchDarkly project identifier for a scoped token. */
        projectId?: string | null;
        /** The LaunchDarkly project name for a scoped token. */
        projectName?: string | null;
        /** The LaunchDarkly environment identifier for a scoped token. */
        environmentId?: string | null;
        /** The LaunchDarkly environment name for a scoped token. */
        environmentName?: string | null;
        /** Whether the caller is authenticated with a service token. */
        serviceToken?: boolean;
        /** The scopes or permission strings returned for the caller. */
        scopes?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get a LaunchDarkly context instance by project key, environment key, and context instance identifier. */
    "launch_darkly.get_context_instances": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The LaunchDarkly environment key.
         * @minLength 1
         */
        environmentKey: string;
        /**
         * The LaunchDarkly context instance identifier.
         * @minLength 1
         */
        contextInstanceId: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         */
        limit?: number;
        /** The LaunchDarkly filter expression to apply to the result set. */
        filter?: string;
        /** The LaunchDarkly sort expression to apply to the result set. */
        sort?: string;
        /** The continuation token returned by a previous paginated response. */
        continuationToken?: string;
      };
      output: {
        /** The collection items returned by LaunchDarkly. */
        items: Array<{
          /** The context payload returned by LaunchDarkly. */
          context?: string | Record<string, unknown>;
          /** The timestamp when LaunchDarkly last saw the context. */
          lastSeen?: string | null;
          /** The application identifier attached to the context item. */
          applicationId?: string | null;
          /** The number of associated contexts returned for the item. */
          associatedContexts?: number;
          /** The environment identifier returned for the context item. */
          _environmentId?: string | null;
          /** The related resource links for the context item. */
          _links?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The total number of matching items returned by LaunchDarkly. */
        totalCount?: number;
        /** The continuation token for retrieving the next page of results. */
        continuationToken?: string | null;
        /** The related resource links for the collection response. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a LaunchDarkly context by context kind and key, with optional paging over related results. */
    "launch_darkly.get_contexts": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The LaunchDarkly environment key.
         * @minLength 1
         */
        environmentKey: string;
        /**
         * The LaunchDarkly context kind.
         * @minLength 1
         */
        kind: string;
        /**
         * The LaunchDarkly context key.
         * @minLength 1
         */
        key: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         */
        limit?: number;
        /** The LaunchDarkly filter expression to apply to the result set. */
        filter?: string;
        /** The LaunchDarkly sort expression to apply to the result set. */
        sort?: string;
        /** The continuation token returned by a previous paginated response. */
        continuationToken?: string;
      };
      output: {
        /** The collection items returned by LaunchDarkly. */
        items: Array<{
          /** The context payload returned by LaunchDarkly. */
          context?: string | Record<string, unknown>;
          /** The timestamp when LaunchDarkly last saw the context. */
          lastSeen?: string | null;
          /** The application identifier attached to the context item. */
          applicationId?: string | null;
          /** The number of associated contexts returned for the item. */
          associatedContexts?: number;
          /** The environment identifier returned for the context item. */
          _environmentId?: string | null;
          /** The related resource links for the context item. */
          _links?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The total number of matching items returned by LaunchDarkly. */
        totalCount?: number;
        /** The continuation token for retrieving the next page of results. */
        continuationToken?: string | null;
        /** The related resource links for the collection response. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a LaunchDarkly environment by project key and environment key. */
    "launch_darkly.get_environment": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The LaunchDarkly environment key.
         * @minLength 1
         */
        environmentKey: string;
      };
      output: {
        /** The LaunchDarkly environment identifier. */
        _id?: string;
        /** The LaunchDarkly environment key. */
        key?: string;
        /** The LaunchDarkly environment name. */
        name?: string;
        /** The display color configured for the environment. */
        color?: string | null;
        /** The server-side SDK key for the environment, when returned. */
        apiKey?: string | null;
        /** The mobile key for the environment, when returned. */
        mobileKey?: string | null;
        /** The default time-to-live value for temporary flag targeting, in minutes. */
        defaultTtl?: number;
        /** Whether secure mode is enabled for client-side SDK evaluation. */
        secureMode?: boolean;
        /** Whether event tracking is enabled by default for flags in this environment. */
        defaultTrackEvents?: boolean;
        /** Whether UI changes require confirmation in this environment. */
        confirmChanges?: boolean;
        /** Whether UI changes require a comment in this environment. */
        requireComments?: boolean;
        /** The tags assigned to the environment. */
        tags?: Array<string>;
        /** The related resource links for the environment. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List the LaunchDarkly environments that belong to a project. */
    "launch_darkly.get_environments": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
      };
      output: {
        /** The collection items returned by LaunchDarkly. */
        items: Array<{
          /** The LaunchDarkly environment identifier. */
          _id?: string;
          /** The LaunchDarkly environment key. */
          key?: string;
          /** The LaunchDarkly environment name. */
          name?: string;
          /** The display color configured for the environment. */
          color?: string | null;
          /** The server-side SDK key for the environment, when returned. */
          apiKey?: string | null;
          /** The mobile key for the environment, when returned. */
          mobileKey?: string | null;
          /** The default time-to-live value for temporary flag targeting, in minutes. */
          defaultTtl?: number;
          /** Whether secure mode is enabled for client-side SDK evaluation. */
          secureMode?: boolean;
          /** Whether event tracking is enabled by default for flags in this environment. */
          defaultTrackEvents?: boolean;
          /** Whether UI changes require confirmation in this environment. */
          confirmChanges?: boolean;
          /** Whether UI changes require a comment in this environment. */
          requireComments?: boolean;
          /** The tags assigned to the environment. */
          tags?: Array<string>;
          /** The related resource links for the environment. */
          _links?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The total number of matching items returned by LaunchDarkly. */
        totalCount?: number;
        /** The continuation token for retrieving the next page of results. */
        continuationToken?: string | null;
        /** The related resource links for the collection response. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a LaunchDarkly feature flag by project key and feature flag key. */
    "launch_darkly.get_feature_flag": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The LaunchDarkly feature flag key.
         * @minLength 1
         */
        featureFlagKey: string;
        /** The environment key used to scope the feature flag response. */
        env?: string;
        /** Whether to request a summary response for the feature flag. */
        summary?: boolean;
      };
      output: {
        /** The LaunchDarkly feature flag identifier. */
        _id?: string;
        /** The LaunchDarkly feature flag key. */
        key?: string;
        /** The LaunchDarkly feature flag name. */
        name?: string;
        /** The LaunchDarkly feature flag kind. */
        kind?: string;
        /** The LaunchDarkly feature flag description. */
        description?: string | null;
        /** Whether the feature flag is marked as temporary. */
        temporary?: boolean;
        /** Whether the feature flag is archived. */
        archived?: boolean;
        /** The tags assigned to the feature flag. */
        tags?: Array<string>;
        /** The maintainer identifier configured for the feature flag. */
        maintainerId?: string | null;
        /** The Unix timestamp, in milliseconds, when the feature flag was created. */
        creationDate?: number;
        /** The client-side availability settings for the feature flag. */
        clientSideAvailability?: Record<string, unknown>;
        /** The variations configured on the feature flag. */
        variations?: Array<Record<string, unknown>>;
        /** The default variation configuration for the feature flag. */
        defaults?: Record<string, unknown>;
        /** The environment-specific configuration for the feature flag. */
        environments?: Record<string, unknown>;
        /** The related resource links for the feature flag. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List LaunchDarkly feature flags in a project with optional filtering, pagination, and summary output. */
    "launch_darkly.get_feature_flags": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The LaunchDarkly filter expression to apply to the result set. */
        filter?: string;
        /** The LaunchDarkly sort expression to apply to the result set. */
        sort?: string;
        /** Whether to request summary output for each feature flag. */
        summary?: boolean;
        /** The environment key used to filter the response. */
        env?: string;
        /** A tag used to filter the response. */
        tag?: string;
        /** Whether to include archived flags. */
        archived?: boolean;
      };
      output: {
        /** The collection items returned by LaunchDarkly. */
        items: Array<{
          /** The LaunchDarkly feature flag identifier. */
          _id?: string;
          /** The LaunchDarkly feature flag key. */
          key?: string;
          /** The LaunchDarkly feature flag name. */
          name?: string;
          /** The LaunchDarkly feature flag kind. */
          kind?: string;
          /** The LaunchDarkly feature flag description. */
          description?: string | null;
          /** Whether the feature flag is marked as temporary. */
          temporary?: boolean;
          /** Whether the feature flag is archived. */
          archived?: boolean;
          /** The tags assigned to the feature flag. */
          tags?: Array<string>;
          /** The maintainer identifier configured for the feature flag. */
          maintainerId?: string | null;
          /** The Unix timestamp, in milliseconds, when the feature flag was created. */
          creationDate?: number;
          /** The client-side availability settings for the feature flag. */
          clientSideAvailability?: Record<string, unknown>;
          /** The variations configured on the feature flag. */
          variations?: Array<Record<string, unknown>>;
          /** The default variation configuration for the feature flag. */
          defaults?: Record<string, unknown>;
          /** The environment-specific configuration for the feature flag. */
          environments?: Record<string, unknown>;
          /** The related resource links for the feature flag. */
          _links?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The total number of matching items returned by LaunchDarkly. */
        totalCount?: number;
        /** The continuation token for retrieving the next page of results. */
        continuationToken?: string | null;
        /** The related resource links for the collection response. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a LaunchDarkly account member by member identifier. */
    "launch_darkly.get_member": {
      input: {
        /**
         * The LaunchDarkly member identifier.
         * @minLength 1
         */
        memberId: string;
        /** A comma-separated list of related collections to expand in the response. */
        expand?: string;
      };
      output: {
        /** The LaunchDarkly member identifier. */
        _id?: string;
        /** The LaunchDarkly member email address. */
        email?: string;
        /** The LaunchDarkly member first name. */
        firstName?: string | null;
        /** The LaunchDarkly member last name. */
        lastName?: string | null;
        /** The LaunchDarkly member role. */
        role?: string | null;
        /** The Unix timestamp, in milliseconds, when the member was created. */
        creationDate?: number;
        /** The timestamp when the member was last seen in LaunchDarkly. */
        lastSeen?: string | null;
        /** Whether the member is still pending invite acceptance. */
        pendingInvite?: boolean;
        /** Whether the member has a verified email address. */
        verified?: boolean;
        /** The custom roles assigned to the member. */
        customRoles?: Array<string>;
        /** The related resource links for the member. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List LaunchDarkly account members with optional filtering, sorting, pagination, and expansion. */
    "launch_darkly.get_members": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The LaunchDarkly filter expression to apply to the result set. */
        filter?: string;
        /** The LaunchDarkly sort expression to apply to the result set. */
        sort?: string;
        /** A comma-separated list of related collections to expand in the response. */
        expand?: string;
      };
      output: {
        /** The collection items returned by LaunchDarkly. */
        items: Array<{
          /** The LaunchDarkly member identifier. */
          _id?: string;
          /** The LaunchDarkly member email address. */
          email?: string;
          /** The LaunchDarkly member first name. */
          firstName?: string | null;
          /** The LaunchDarkly member last name. */
          lastName?: string | null;
          /** The LaunchDarkly member role. */
          role?: string | null;
          /** The Unix timestamp, in milliseconds, when the member was created. */
          creationDate?: number;
          /** The timestamp when the member was last seen in LaunchDarkly. */
          lastSeen?: string | null;
          /** Whether the member is still pending invite acceptance. */
          pendingInvite?: boolean;
          /** Whether the member has a verified email address. */
          verified?: boolean;
          /** The custom roles assigned to the member. */
          customRoles?: Array<string>;
          /** The related resource links for the member. */
          _links?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The total number of matching items returned by LaunchDarkly. */
        totalCount?: number;
        /** The continuation token for retrieving the next page of results. */
        continuationToken?: string | null;
        /** The related resource links for the collection response. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a LaunchDarkly project by project key. */
    "launch_darkly.get_project": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /** A comma-separated list of related collections to expand in the response. */
        expand?: string;
      };
      output: {
        /** The LaunchDarkly project identifier. */
        _id?: string;
        /** The LaunchDarkly project key. */
        key?: string;
        /** The LaunchDarkly project name. */
        name?: string;
        /** The LaunchDarkly project description. */
        description?: string | null;
        /** Whether new flags should be included in generated code snippets by default. */
        includeInSnippetByDefault?: boolean;
        /** The tags assigned to the project. */
        tags?: Array<string>;
        /** The default release pipeline key for the project. */
        defaultReleasePipelineKey?: string | null;
        /** The default client-side availability settings for new flags in the project. */
        defaultClientSideAvailability?: Record<string, unknown>;
        /** The environment collection embedded in the project response. */
        environments?: Record<string, unknown>;
        /** The related resource links for the project. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a LaunchDarkly segment by project key, environment key, and segment key. */
    "launch_darkly.get_segment": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The LaunchDarkly environment key.
         * @minLength 1
         */
        environmentKey: string;
        /**
         * The LaunchDarkly segment key.
         * @minLength 1
         */
        segmentKey: string;
      };
      output: {
        /** The LaunchDarkly segment identifier. */
        _id?: string;
        /** The LaunchDarkly segment key. */
        key?: string;
        /** The LaunchDarkly segment name. */
        name?: string;
        /** The LaunchDarkly segment description. */
        description?: string | null;
        /** The tags assigned to the segment. */
        tags?: Array<string>;
        /** The included context keys configured on the segment. */
        included?: Array<string>;
        /** The excluded context keys configured on the segment. */
        excluded?: Array<string>;
        /** The targeting rules configured on the segment. */
        rules?: Array<Record<string, unknown>>;
        /** Whether the segment is configured as an unbounded segment. */
        unbounded?: boolean;
        /** The context kind used for unbounded segment membership. */
        unboundedContextKind?: string | null;
        /** The Unix timestamp, in milliseconds, when the segment was created. */
        creationDate?: number;
        /** The Unix timestamp, in milliseconds, when the segment was last modified. */
        lastModifiedDate?: number;
        /** The related resource links for the segment. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List LaunchDarkly segments in a project environment with optional filtering and pagination. */
    "launch_darkly.get_segments": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The LaunchDarkly environment key.
         * @minLength 1
         */
        environmentKey: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The LaunchDarkly filter expression to apply to the result set. */
        filter?: string;
        /** The LaunchDarkly sort expression to apply to the result set. */
        sort?: string;
      };
      output: {
        /** The collection items returned by LaunchDarkly. */
        items: Array<{
          /** The LaunchDarkly segment identifier. */
          _id?: string;
          /** The LaunchDarkly segment key. */
          key?: string;
          /** The LaunchDarkly segment name. */
          name?: string;
          /** The LaunchDarkly segment description. */
          description?: string | null;
          /** The tags assigned to the segment. */
          tags?: Array<string>;
          /** The included context keys configured on the segment. */
          included?: Array<string>;
          /** The excluded context keys configured on the segment. */
          excluded?: Array<string>;
          /** The targeting rules configured on the segment. */
          rules?: Array<Record<string, unknown>>;
          /** Whether the segment is configured as an unbounded segment. */
          unbounded?: boolean;
          /** The context kind used for unbounded segment membership. */
          unboundedContextKind?: string | null;
          /** The Unix timestamp, in milliseconds, when the segment was created. */
          creationDate?: number;
          /** The Unix timestamp, in milliseconds, when the segment was last modified. */
          lastModifiedDate?: number;
          /** The related resource links for the segment. */
          _links?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The total number of matching items returned by LaunchDarkly. */
        totalCount?: number;
        /** The continuation token for retrieving the next page of results. */
        continuationToken?: string | null;
        /** The related resource links for the collection response. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List LaunchDarkly tags with optional prefix and resource-kind filters. */
    "launch_darkly.get_tags": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The tag prefix used to filter the result set. */
        pre?: string;
        /** The resource kinds used to filter the result set. */
        kind?: string | Array<string>;
      };
      output: {
        /** The collection items returned by LaunchDarkly. */
        items: Array<string>;
        /** The total number of matching items returned by LaunchDarkly. */
        totalCount?: number;
        /** The continuation token for retrieving the next page of results. */
        continuationToken?: string | null;
        /** The related resource links for the collection response. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a LaunchDarkly team by team key. */
    "launch_darkly.get_team": {
      input: {
        /**
         * The LaunchDarkly team key.
         * @minLength 1
         */
        teamKey: string;
        /** A comma-separated list of related collections to expand in the response. */
        expand?: string;
      };
      output: {
        /** The LaunchDarkly team identifier. */
        _id?: string;
        /** The LaunchDarkly team key. */
        key?: string;
        /** The LaunchDarkly team name. */
        name?: string;
        /** The LaunchDarkly team description. */
        description?: string | null;
        /** The Unix timestamp, in milliseconds, when the team was created. */
        creationDate?: number;
        /** The Unix timestamp, in milliseconds, when the team was last modified. */
        lastModified?: number;
        /** The LaunchDarkly team version number. */
        version?: number;
        /** The number of members assigned to the team. */
        memberCount?: number;
        /** The custom role keys assigned to the team. */
        customRoleKeys?: Array<string>;
        /** The member identifiers assigned as maintainers for the team. */
        maintainerIds?: Array<string>;
        /** The member identifiers assigned to the team. */
        memberIds?: Array<string>;
        /** The team role-attribute configuration returned by LaunchDarkly. */
        roleAttributes?: Record<string, unknown>;
        /** The related resource links for the team. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a LaunchDarkly access token by token identifier. */
    "launch_darkly.get_token": {
      input: {
        /**
         * The LaunchDarkly access token identifier.
         * @minLength 1
         */
        tokenId: string;
      };
      output: {
        /** The LaunchDarkly access token identifier. */
        _id?: string;
        /** The LaunchDarkly access token name. */
        name?: string;
        /** The LaunchDarkly access token description. */
        description?: string | null;
        /** The base role assigned to the token. */
        role?: string | null;
        /** The Unix timestamp, in milliseconds, when the token was created. */
        creationDate?: number;
        /** The Unix timestamp, in milliseconds, when the token was last modified. */
        lastModified?: number;
        /** The timestamp when the token was last used. */
        lastUsed?: string | null;
        /** The token secret value, when returned by LaunchDarkly. */
        token?: string | null;
        /** Whether the token is a service token. */
        serviceToken?: boolean;
        /** The default API version configured for the token. */
        defaultApiVersion?: number;
        /** The custom role identifiers assigned to the token. */
        customRoleIds?: Array<string>;
        /** The inline policy attached to the token. */
        inlineRole?: Record<string, unknown>;
        /** The owner identifier for the token. */
        ownerId?: string | null;
        /** The member identifier associated with the token. */
        memberId?: string | null;
        /** The related resource links for the token. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List LaunchDarkly access tokens with optional pagination and visibility scope. */
    "launch_darkly.get_tokens": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** Whether to include all access tokens visible to the caller. */
        showAll?: boolean;
      };
      output: {
        /** The collection items returned by LaunchDarkly. */
        items: Array<{
          /** The LaunchDarkly access token identifier. */
          _id?: string;
          /** The LaunchDarkly access token name. */
          name?: string;
          /** The LaunchDarkly access token description. */
          description?: string | null;
          /** The base role assigned to the token. */
          role?: string | null;
          /** The Unix timestamp, in milliseconds, when the token was created. */
          creationDate?: number;
          /** The Unix timestamp, in milliseconds, when the token was last modified. */
          lastModified?: number;
          /** The timestamp when the token was last used. */
          lastUsed?: string | null;
          /** The token secret value, when returned by LaunchDarkly. */
          token?: string | null;
          /** Whether the token is a service token. */
          serviceToken?: boolean;
          /** The default API version configured for the token. */
          defaultApiVersion?: number;
          /** The custom role identifiers assigned to the token. */
          customRoleIds?: Array<string>;
          /** The inline policy attached to the token. */
          inlineRole?: Record<string, unknown>;
          /** The owner identifier for the token. */
          ownerId?: string | null;
          /** The member identifier associated with the token. */
          memberId?: string | null;
          /** The related resource links for the token. */
          _links?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The total number of matching items returned by LaunchDarkly. */
        totalCount?: number;
        /** The continuation token for retrieving the next page of results. */
        continuationToken?: string | null;
        /** The related resource links for the collection response. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List LaunchDarkly projects with optional filtering, sorting, pagination, and expansion. */
    "launch_darkly.list_projects": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The LaunchDarkly filter expression to apply to the result set. */
        filter?: string;
        /** The LaunchDarkly sort expression to apply to the result set. */
        sort?: string;
        /** A comma-separated list of related collections to expand in the response. */
        expand?: string;
      };
      output: {
        /** The collection items returned by LaunchDarkly. */
        items: Array<{
          /** The LaunchDarkly project identifier. */
          _id?: string;
          /** The LaunchDarkly project key. */
          key?: string;
          /** The LaunchDarkly project name. */
          name?: string;
          /** The LaunchDarkly project description. */
          description?: string | null;
          /** Whether new flags should be included in generated code snippets by default. */
          includeInSnippetByDefault?: boolean;
          /** The tags assigned to the project. */
          tags?: Array<string>;
          /** The default release pipeline key for the project. */
          defaultReleasePipelineKey?: string | null;
          /** The default client-side availability settings for new flags in the project. */
          defaultClientSideAvailability?: Record<string, unknown>;
          /** The environment collection embedded in the project response. */
          environments?: Record<string, unknown>;
          /** The related resource links for the project. */
          _links?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The total number of matching items returned by LaunchDarkly. */
        totalCount?: number;
        /** The continuation token for retrieving the next page of results. */
        continuationToken?: string | null;
        /** The related resource links for the collection response. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List LaunchDarkly teams with optional filtering, pagination, and expansion controls. */
    "launch_darkly.list_teams": {
      input: {
        /**
         * The maximum number of items to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of items to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The LaunchDarkly filter expression to apply to the result set. */
        filter?: string;
        /** A comma-separated list of related collections to expand in the response. */
        expand?: string;
      };
      output: {
        /** The collection items returned by LaunchDarkly. */
        items: Array<{
          /** The LaunchDarkly team identifier. */
          _id?: string;
          /** The LaunchDarkly team key. */
          key?: string;
          /** The LaunchDarkly team name. */
          name?: string;
          /** The LaunchDarkly team description. */
          description?: string | null;
          /** The Unix timestamp, in milliseconds, when the team was created. */
          creationDate?: number;
          /** The Unix timestamp, in milliseconds, when the team was last modified. */
          lastModified?: number;
          /** The LaunchDarkly team version number. */
          version?: number;
          /** The number of members assigned to the team. */
          memberCount?: number;
          /** The custom role keys assigned to the team. */
          customRoleKeys?: Array<string>;
          /** The member identifiers assigned as maintainers for the team. */
          maintainerIds?: Array<string>;
          /** The member identifiers assigned to the team. */
          memberIds?: Array<string>;
          /** The team role-attribute configuration returned by LaunchDarkly. */
          roleAttributes?: Record<string, unknown>;
          /** The related resource links for the team. */
          _links?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The total number of matching items returned by LaunchDarkly. */
        totalCount?: number;
        /** The continuation token for retrieving the next page of results. */
        continuationToken?: string | null;
        /** The related resource links for the collection response. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Patch a LaunchDarkly environment with standard JSON Patch operations. */
    "launch_darkly.patch_environment": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The LaunchDarkly environment key.
         * @minLength 1
         */
        environmentKey: string;
        /**
         * The JSON Patch operations to apply to the environment.
         * @minItems 1
         */
        patch: Array<{
          /** The JSON Patch operation. */
          op: "add" | "remove" | "replace" | "move" | "copy" | "test";
          /** The JSON Pointer path that the patch operation targets. */
          path: string;
          /** The source JSON Pointer path for move or copy operations. */
          from?: string;
          /** The value used by the patch operation. */
          value?: unknown;
        }>;
      };
      output: {
        /** The LaunchDarkly environment identifier. */
        _id?: string;
        /** The LaunchDarkly environment key. */
        key?: string;
        /** The LaunchDarkly environment name. */
        name?: string;
        /** The display color configured for the environment. */
        color?: string | null;
        /** The server-side SDK key for the environment, when returned. */
        apiKey?: string | null;
        /** The mobile key for the environment, when returned. */
        mobileKey?: string | null;
        /** The default time-to-live value for temporary flag targeting, in minutes. */
        defaultTtl?: number;
        /** Whether secure mode is enabled for client-side SDK evaluation. */
        secureMode?: boolean;
        /** Whether event tracking is enabled by default for flags in this environment. */
        defaultTrackEvents?: boolean;
        /** Whether UI changes require confirmation in this environment. */
        confirmChanges?: boolean;
        /** Whether UI changes require a comment in this environment. */
        requireComments?: boolean;
        /** The tags assigned to the environment. */
        tags?: Array<string>;
        /** The related resource links for the environment. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Patch a LaunchDarkly feature flag with JSON Patch, JSON Merge Patch, or semantic patch instructions. */
    "launch_darkly.patch_feature_flag": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The LaunchDarkly feature flag key.
         * @minLength 1
         */
        featureFlagKey: string;
        /**
         * The JSON Patch operations to apply to the feature flag.
         * @minItems 1
         */
        patch?: Array<{
          /** The JSON Patch operation. */
          op: "add" | "remove" | "replace" | "move" | "copy" | "test";
          /** The JSON Pointer path that the patch operation targets. */
          path: string;
          /** The source JSON Pointer path for move or copy operations. */
          from?: string;
          /** The value used by the patch operation. */
          value?: unknown;
        }>;
        /** The JSON Merge Patch payload to apply to the feature flag. */
        merge?: Record<string, unknown>;
        /**
         * The semantic patch instructions to apply to the feature flag.
         * @minItems 1
         */
        instructions?: Array<{
          /** The semantic patch instruction kind. */
          kind: string;
          [key: string]: unknown;
        }>;
        /** The comment to attach to the update, when supported. */
        comment?: string;
        /** The environment key used by semantic patch instructions that require it. */
        environmentKey?: string;
        /** Whether to validate the patch without applying it. */
        dryRun?: boolean;
        /** Whether to ignore conflicts during patch execution. */
        ignoreConflicts?: boolean;
      };
      output: {
        /** The LaunchDarkly feature flag identifier. */
        _id?: string;
        /** The LaunchDarkly feature flag key. */
        key?: string;
        /** The LaunchDarkly feature flag name. */
        name?: string;
        /** The LaunchDarkly feature flag kind. */
        kind?: string;
        /** The LaunchDarkly feature flag description. */
        description?: string | null;
        /** Whether the feature flag is marked as temporary. */
        temporary?: boolean;
        /** Whether the feature flag is archived. */
        archived?: boolean;
        /** The tags assigned to the feature flag. */
        tags?: Array<string>;
        /** The maintainer identifier configured for the feature flag. */
        maintainerId?: string | null;
        /** The Unix timestamp, in milliseconds, when the feature flag was created. */
        creationDate?: number;
        /** The client-side availability settings for the feature flag. */
        clientSideAvailability?: Record<string, unknown>;
        /** The variations configured on the feature flag. */
        variations?: Array<Record<string, unknown>>;
        /** The default variation configuration for the feature flag. */
        defaults?: Record<string, unknown>;
        /** The environment-specific configuration for the feature flag. */
        environments?: Record<string, unknown>;
        /** The related resource links for the feature flag. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Patch a LaunchDarkly project with standard JSON Patch operations. */
    "launch_darkly.patch_project": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The JSON Patch operations to apply to the project.
         * @minItems 1
         */
        patch: Array<{
          /** The JSON Patch operation. */
          op: "add" | "remove" | "replace" | "move" | "copy" | "test";
          /** The JSON Pointer path that the patch operation targets. */
          path: string;
          /** The source JSON Pointer path for move or copy operations. */
          from?: string;
          /** The value used by the patch operation. */
          value?: unknown;
        }>;
      };
      output: {
        /** The LaunchDarkly project identifier. */
        _id?: string;
        /** The LaunchDarkly project key. */
        key?: string;
        /** The LaunchDarkly project name. */
        name?: string;
        /** The LaunchDarkly project description. */
        description?: string | null;
        /** Whether new flags should be included in generated code snippets by default. */
        includeInSnippetByDefault?: boolean;
        /** The tags assigned to the project. */
        tags?: Array<string>;
        /** The default release pipeline key for the project. */
        defaultReleasePipelineKey?: string | null;
        /** The default client-side availability settings for new flags in the project. */
        defaultClientSideAvailability?: Record<string, unknown>;
        /** The environment collection embedded in the project response. */
        environments?: Record<string, unknown>;
        /** The related resource links for the project. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Patch a LaunchDarkly segment with JSON Patch, JSON Merge Patch, or semantic patch instructions. */
    "launch_darkly.patch_segment": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The LaunchDarkly environment key.
         * @minLength 1
         */
        environmentKey: string;
        /**
         * The LaunchDarkly segment key.
         * @minLength 1
         */
        segmentKey: string;
        /**
         * The JSON Patch operations to apply to the segment.
         * @minItems 1
         */
        patch?: Array<{
          /** The JSON Patch operation. */
          op: "add" | "remove" | "replace" | "move" | "copy" | "test";
          /** The JSON Pointer path that the patch operation targets. */
          path: string;
          /** The source JSON Pointer path for move or copy operations. */
          from?: string;
          /** The value used by the patch operation. */
          value?: unknown;
        }>;
        /** The JSON Merge Patch payload to apply to the segment. */
        merge?: Record<string, unknown>;
        /**
         * The semantic patch instructions to apply to the segment.
         * @minItems 1
         */
        instructions?: Array<{
          /** The semantic patch instruction kind. */
          kind: string;
          [key: string]: unknown;
        }>;
        /** The comment to attach to the update, when supported. */
        comment?: string;
      };
      output: {
        /** The LaunchDarkly segment identifier. */
        _id?: string;
        /** The LaunchDarkly segment key. */
        key?: string;
        /** The LaunchDarkly segment name. */
        name?: string;
        /** The LaunchDarkly segment description. */
        description?: string | null;
        /** The tags assigned to the segment. */
        tags?: Array<string>;
        /** The included context keys configured on the segment. */
        included?: Array<string>;
        /** The excluded context keys configured on the segment. */
        excluded?: Array<string>;
        /** The targeting rules configured on the segment. */
        rules?: Array<Record<string, unknown>>;
        /** Whether the segment is configured as an unbounded segment. */
        unbounded?: boolean;
        /** The context kind used for unbounded segment membership. */
        unboundedContextKind?: string | null;
        /** The Unix timestamp, in milliseconds, when the segment was created. */
        creationDate?: number;
        /** The Unix timestamp, in milliseconds, when the segment was last modified. */
        lastModifiedDate?: number;
        /** The related resource links for the segment. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Patch a LaunchDarkly team with semantic patch instructions. */
    "launch_darkly.patch_team": {
      input: {
        /**
         * The LaunchDarkly team key.
         * @minLength 1
         */
        teamKey: string;
        /** A comma-separated list of related collections to expand in the response. */
        expand?: string;
        /** The comment to attach to the update, when supported. */
        comment?: string;
        /**
         * The semantic patch instructions to apply to the team.
         * @minItems 1
         */
        instructions?: Array<{
          /** The semantic patch instruction kind. */
          kind: string;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The LaunchDarkly team identifier. */
        _id?: string;
        /** The LaunchDarkly team key. */
        key?: string;
        /** The LaunchDarkly team name. */
        name?: string;
        /** The LaunchDarkly team description. */
        description?: string | null;
        /** The Unix timestamp, in milliseconds, when the team was created. */
        creationDate?: number;
        /** The Unix timestamp, in milliseconds, when the team was last modified. */
        lastModified?: number;
        /** The LaunchDarkly team version number. */
        version?: number;
        /** The number of members assigned to the team. */
        memberCount?: number;
        /** The custom role keys assigned to the team. */
        customRoleKeys?: Array<string>;
        /** The member identifiers assigned as maintainers for the team. */
        maintainerIds?: Array<string>;
        /** The member identifiers assigned to the team. */
        memberIds?: Array<string>;
        /** The team role-attribute configuration returned by LaunchDarkly. */
        roleAttributes?: Record<string, unknown>;
        /** The related resource links for the team. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Patch a LaunchDarkly access token with standard JSON Patch operations. */
    "launch_darkly.patch_token": {
      input: {
        /**
         * The LaunchDarkly access token identifier.
         * @minLength 1
         */
        tokenId: string;
        /**
         * The JSON Patch operations to apply to the token.
         * @minItems 1
         */
        patch: Array<{
          /** The JSON Patch operation. */
          op: "add" | "remove" | "replace" | "move" | "copy" | "test";
          /** The JSON Pointer path that the patch operation targets. */
          path: string;
          /** The source JSON Pointer path for move or copy operations. */
          from?: string;
          /** The value used by the patch operation. */
          value?: unknown;
        }>;
      };
      output: {
        /** The LaunchDarkly access token identifier. */
        _id?: string;
        /** The LaunchDarkly access token name. */
        name?: string;
        /** The LaunchDarkly access token description. */
        description?: string | null;
        /** The base role assigned to the token. */
        role?: string | null;
        /** The Unix timestamp, in milliseconds, when the token was created. */
        creationDate?: number;
        /** The Unix timestamp, in milliseconds, when the token was last modified. */
        lastModified?: number;
        /** The timestamp when the token was last used. */
        lastUsed?: string | null;
        /** The token secret value, when returned by LaunchDarkly. */
        token?: string | null;
        /** Whether the token is a service token. */
        serviceToken?: boolean;
        /** The default API version configured for the token. */
        defaultApiVersion?: number;
        /** The custom role identifiers assigned to the token. */
        customRoleIds?: Array<string>;
        /** The inline policy attached to the token. */
        inlineRole?: Record<string, unknown>;
        /** The owner identifier for the token. */
        ownerId?: string | null;
        /** The member identifier associated with the token. */
        memberId?: string | null;
        /** The related resource links for the token. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Reset a LaunchDarkly access token value and optionally control when the old value expires. */
    "launch_darkly.reset_token": {
      input: {
        /**
         * The LaunchDarkly access token identifier.
         * @minLength 1
         */
        tokenId: string;
        /** The Unix timestamp, in milliseconds, when the old token value should expire. */
        expiry?: number;
      };
      output: {
        /** The LaunchDarkly access token identifier. */
        _id?: string;
        /** The LaunchDarkly access token name. */
        name?: string;
        /** The LaunchDarkly access token description. */
        description?: string | null;
        /** The base role assigned to the token. */
        role?: string | null;
        /** The Unix timestamp, in milliseconds, when the token was created. */
        creationDate?: number;
        /** The Unix timestamp, in milliseconds, when the token was last modified. */
        lastModified?: number;
        /** The timestamp when the token was last used. */
        lastUsed?: string | null;
        /** The token secret value, when returned by LaunchDarkly. */
        token?: string | null;
        /** Whether the token is a service token. */
        serviceToken?: boolean;
        /** The default API version configured for the token. */
        defaultApiVersion?: number;
        /** The custom role identifiers assigned to the token. */
        customRoleIds?: Array<string>;
        /** The inline policy attached to the token. */
        inlineRole?: Record<string, unknown>;
        /** The owner identifier for the token. */
        ownerId?: string | null;
        /** The member identifier associated with the token. */
        memberId?: string | null;
        /** The related resource links for the token. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Search LaunchDarkly context instances in a project environment with filtering, sorting, and pagination. */
    "launch_darkly.search_context_instances": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The LaunchDarkly environment key.
         * @minLength 1
         */
        environmentKey: string;
        /** The LaunchDarkly filter expression to apply to the result set. */
        filter?: string;
        /** The LaunchDarkly sort expression to apply to the result set. */
        sort?: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         */
        limit?: number;
        /** The continuation token returned by a previous paginated response. */
        continuationToken?: string;
      };
      output: {
        /** The collection items returned by LaunchDarkly. */
        items: Array<{
          /** The context payload returned by LaunchDarkly. */
          context?: string | Record<string, unknown>;
          /** The timestamp when LaunchDarkly last saw the context. */
          lastSeen?: string | null;
          /** The application identifier attached to the context item. */
          applicationId?: string | null;
          /** The number of associated contexts returned for the item. */
          associatedContexts?: number;
          /** The environment identifier returned for the context item. */
          _environmentId?: string | null;
          /** The related resource links for the context item. */
          _links?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The total number of matching items returned by LaunchDarkly. */
        totalCount?: number;
        /** The continuation token for retrieving the next page of results. */
        continuationToken?: string | null;
        /** The related resource links for the collection response. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Search LaunchDarkly contexts in a project environment with filtering, sorting, and pagination. */
    "launch_darkly.search_contexts": {
      input: {
        /**
         * The LaunchDarkly project key.
         * @minLength 1
         */
        projectKey: string;
        /**
         * The LaunchDarkly environment key.
         * @minLength 1
         */
        environmentKey: string;
        /** The LaunchDarkly filter expression to apply to the result set. */
        filter?: string;
        /** The LaunchDarkly sort expression to apply to the result set. */
        sort?: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         */
        limit?: number;
        /** The continuation token returned by a previous paginated response. */
        continuationToken?: string;
      };
      output: {
        /** The collection items returned by LaunchDarkly. */
        items: Array<{
          /** The context payload returned by LaunchDarkly. */
          context?: string | Record<string, unknown>;
          /** The timestamp when LaunchDarkly last saw the context. */
          lastSeen?: string | null;
          /** The application identifier attached to the context item. */
          applicationId?: string | null;
          /** The number of associated contexts returned for the item. */
          associatedContexts?: number;
          /** The environment identifier returned for the context item. */
          _environmentId?: string | null;
          /** The related resource links for the context item. */
          _links?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The total number of matching items returned by LaunchDarkly. */
        totalCount?: number;
        /** The continuation token for retrieving the next page of results. */
        continuationToken?: string | null;
        /** The related resource links for the collection response. */
        _links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
