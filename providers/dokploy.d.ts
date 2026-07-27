import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a Dokploy application deployment. Warning: this operation can interrupt an active deployment. */
    "dokploy.cancel_application_deployment": {
      input: {
        /**
         * The Dokploy application ID.
         * @minLength 1
         */
        applicationId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Cancel a Dokploy compose deployment. Warning: this operation can interrupt an active deployment. */
    "dokploy.cancel_compose_deployment": {
      input: {
        /**
         * The Dokploy compose ID.
         * @minLength 1
         */
        composeId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Count Dokploy servers visible to the API key. */
    "dokploy.count_servers": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Create a Dokploy domain route. */
    "dokploy.create_domain": {
      input: {
        /**
         * The domain host.
         * @minLength 1
         */
        host: string;
        /** The optional public path for the domain route. */
        path?: string | null;
        /**
         * The service port exposed by this domain.
         * @minimum 1
         * @maximum 65535
         */
        port?: number | null;
        /** The optional Traefik entrypoint name. */
        customEntrypoint?: string | null;
        /** Whether HTTPS is enabled for the domain. */
        https?: boolean;
        /** The certificate strategy for this domain. */
        certificateType?: "letsencrypt" | "none" | "custom";
        /** The optional custom certificate resolver. */
        customCertResolver?: string | null;
        /** The compose service name for compose domains. */
        serviceName?: string | null;
        /** The Dokploy domain target type. */
        domainType?: "compose" | "application" | "preview" | null;
        /** The optional internal upstream path. */
        internalPath?: string | null;
        /** Whether Dokploy strips the public path before proxying. */
        stripPath?: boolean;
        /** The Traefik middleware names applied to this domain. */
        middlewares?: Array<string> | null;
        /** The application ID for application domains. */
        applicationId?: string | null;
        /** The compose ID for compose domains. */
        composeId?: string | null;
        /** The preview deployment ID for preview domains. */
        previewDeploymentId?: string | null;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Create a Dokploy environment inside a project. */
    "dokploy.create_environment": {
      input: {
        /**
         * The environment name.
         * @minLength 1
         */
        name: string;
        /** The environment description. */
        description?: string;
        /**
         * The Dokploy project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Delete a Dokploy deployment record. Warning: this operation removes deployment history. */
    "dokploy.delete_deployment_record": {
      input: {
        /**
         * The Dokploy deployment ID.
         * @minLength 1
         */
        deploymentId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Delete a Dokploy domain route. Warning: this operation removes the domain routing configuration. */
    "dokploy.delete_domain": {
      input: {
        /**
         * The Dokploy domain ID.
         * @minLength 1
         */
        domainId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Delete a Dokploy environment. Warning: this operation can remove environment resources. */
    "dokploy.delete_environment": {
      input: {
        /**
         * The Dokploy environment ID.
         * @minLength 1
         */
        environmentId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Deploy a Dokploy application. */
    "dokploy.deploy_application": {
      input: {
        /**
         * The Dokploy application ID.
         * @minLength 1
         */
        applicationId: string;
        /** The deployment title. */
        title?: string;
        /** The deployment description. */
        description?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Deploy a Dokploy compose service. */
    "dokploy.deploy_compose": {
      input: {
        /**
         * The Dokploy compose ID.
         * @minLength 1
         */
        composeId: string;
        /** The deployment title. */
        title?: string;
        /** The deployment description. */
        description?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Deploy a Dokploy LibSQL service. */
    "dokploy.deploy_libsql": {
      input: {
        /**
         * The Dokploy LibSQL service ID.
         * @minLength 1
         */
        libsqlId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Deploy a Dokploy MariaDB service. */
    "dokploy.deploy_mariadb": {
      input: {
        /**
         * The Dokploy MariaDB service ID.
         * @minLength 1
         */
        mariadbId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Deploy a Dokploy MongoDB service. */
    "dokploy.deploy_mongo": {
      input: {
        /**
         * The Dokploy MongoDB service ID.
         * @minLength 1
         */
        mongoId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Deploy a Dokploy MySQL service. */
    "dokploy.deploy_mysql": {
      input: {
        /**
         * The Dokploy MySQL service ID.
         * @minLength 1
         */
        mysqlId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Deploy a Dokploy Postgres service. */
    "dokploy.deploy_postgres": {
      input: {
        /**
         * The Dokploy Postgres service ID.
         * @minLength 1
         */
        postgresId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Deploy a Dokploy Redis service. */
    "dokploy.deploy_redis": {
      input: {
        /**
         * The Dokploy Redis service ID.
         * @minLength 1
         */
        redisId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Duplicate a Dokploy environment. */
    "dokploy.duplicate_environment": {
      input: {
        /**
         * The Dokploy environment ID.
         * @minLength 1
         */
        environmentId: string;
        /**
         * The new environment name.
         * @minLength 1
         */
        name: string;
        /** The new environment description. */
        description?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Generate a Dokploy domain for an app name. */
    "dokploy.generate_domain": {
      input: {
        /** The app name used for the generated domain. */
        appName: string;
        /** The optional Dokploy server ID. */
        serverId?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get a Dokploy application by ID. */
    "dokploy.get_application": {
      input: {
        /**
         * The Dokploy application ID.
         * @minLength 1
         */
        applicationId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get a Dokploy Bitbucket provider connection by ID. */
    "dokploy.get_bitbucket_provider": {
      input: {
        /**
         * The Dokploy Bitbucket provider ID.
         * @minLength 1
         */
        bitbucketId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get a Dokploy compose service by ID. */
    "dokploy.get_compose": {
      input: {
        /**
         * The Dokploy compose ID.
         * @minLength 1
         */
        composeId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get a Dokploy domain by ID. */
    "dokploy.get_domain": {
      input: {
        /**
         * The Dokploy domain ID.
         * @minLength 1
         */
        domainId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get a Dokploy environment by ID. */
    "dokploy.get_environment": {
      input: {
        /**
         * The Dokploy environment ID.
         * @minLength 1
         */
        environmentId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get a Dokploy Gitea provider connection by ID. */
    "dokploy.get_gitea_provider": {
      input: {
        /**
         * The Dokploy Gitea provider ID.
         * @minLength 1
         */
        giteaId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get a Dokploy GitHub provider connection by ID. */
    "dokploy.get_github_provider": {
      input: {
        /**
         * The Dokploy GitHub provider ID.
         * @minLength 1
         */
        githubId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get a Dokploy GitLab provider connection by ID. */
    "dokploy.get_gitlab_provider": {
      input: {
        /**
         * The Dokploy GitLab provider ID.
         * @minLength 1
         */
        gitlabId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get a Dokploy LibSQL service by ID. */
    "dokploy.get_libsql": {
      input: {
        /**
         * The Dokploy LibSQL service ID.
         * @minLength 1
         */
        libsqlId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get a Dokploy MariaDB service by ID. */
    "dokploy.get_mariadb": {
      input: {
        /**
         * The Dokploy MariaDB service ID.
         * @minLength 1
         */
        mariadbId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get a Dokploy MongoDB service by ID. */
    "dokploy.get_mongo": {
      input: {
        /**
         * The Dokploy MongoDB service ID.
         * @minLength 1
         */
        mongoId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get a Dokploy MySQL service by ID. */
    "dokploy.get_mysql": {
      input: {
        /**
         * The Dokploy MySQL service ID.
         * @minLength 1
         */
        mysqlId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get a Dokploy Postgres service by ID. */
    "dokploy.get_postgres": {
      input: {
        /**
         * The Dokploy Postgres service ID.
         * @minLength 1
         */
        postgresId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get a Dokploy project by ID. */
    "dokploy.get_project": {
      input: {
        /**
         * The Dokploy project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get Dokploy project home statistics. */
    "dokploy.get_project_home_stats": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get the public IP address detected by Dokploy. */
    "dokploy.get_public_ip": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get a Dokploy Redis service by ID. */
    "dokploy.get_redis": {
      input: {
        /**
         * The Dokploy Redis service ID.
         * @minLength 1
         */
        redisId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get a Dokploy server by ID. */
    "dokploy.get_server": {
      input: {
        /**
         * The Dokploy server ID.
         * @minLength 1
         */
        serverId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Get the current server time from Dokploy. */
    "dokploy.get_server_time": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Kill a Dokploy deployment process. Warning: this operation can interrupt an active deployment. */
    "dokploy.kill_deployment_process": {
      input: {
        /**
         * The Dokploy deployment ID.
         * @minLength 1
         */
        deploymentId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List deployments for a Dokploy application. */
    "dokploy.list_application_deployments": {
      input: {
        /**
         * The Dokploy application ID.
         * @minLength 1
         */
        applicationId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List Dokploy domains attached to an application. */
    "dokploy.list_application_domains": {
      input: {
        /**
         * The Dokploy application ID.
         * @minLength 1
         */
        applicationId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List branches for a repository through a Dokploy Bitbucket provider connection. */
    "dokploy.list_bitbucket_branches": {
      input: {
        /**
         * The repository owner or namespace.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /** The Dokploy Bitbucket provider ID. */
        bitbucketId?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List Dokploy Bitbucket provider connections. */
    "dokploy.list_bitbucket_providers": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List repositories available through a Dokploy Bitbucket provider connection. */
    "dokploy.list_bitbucket_repositories": {
      input: {
        /**
         * The Dokploy Bitbucket provider ID.
         * @minLength 1
         */
        bitbucketId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List centralized Dokploy deployments. */
    "dokploy.list_centralized_deployments": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List deployments for a Dokploy compose service. */
    "dokploy.list_compose_deployments": {
      input: {
        /**
         * The Dokploy compose ID.
         * @minLength 1
         */
        composeId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List Dokploy domains attached to a compose service. */
    "dokploy.list_compose_domains": {
      input: {
        /**
         * The Dokploy compose ID.
         * @minLength 1
         */
        composeId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List the Dokploy deployment queue. */
    "dokploy.list_deployment_queue": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List Dokploy deployments by resource type. */
    "dokploy.list_deployments_by_type": {
      input: {
        /**
         * The Dokploy resource ID.
         * @minLength 1
         */
        id: string;
        /** The Dokploy resource type. */
        type: "application" | "compose" | "server" | "schedule" | "previewDeployment" | "backup" | "volumeBackup";
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List Dokploy git provider connections. */
    "dokploy.list_git_providers": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List Dokploy git provider connections as returned by the permissions endpoint. */
    "dokploy.list_git_providers_for_permissions": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List branches for a repository through a Dokploy Gitea provider connection. */
    "dokploy.list_gitea_branches": {
      input: {
        /**
         * The repository owner or namespace.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repositoryName: string;
        /** The Dokploy Gitea provider ID. */
        giteaId?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List Dokploy Gitea provider connections. */
    "dokploy.list_gitea_providers": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List repositories available through a Dokploy Gitea provider connection. */
    "dokploy.list_gitea_repositories": {
      input: {
        /**
         * The Dokploy Gitea provider ID.
         * @minLength 1
         */
        giteaId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List branches for a repository through a Dokploy GitHub provider connection. */
    "dokploy.list_github_branches": {
      input: {
        /**
         * The repository owner or namespace.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /** The Dokploy GitHub provider ID. */
        githubId?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List Dokploy GitHub provider connections. */
    "dokploy.list_github_providers": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List repositories available through a Dokploy GitHub provider connection. */
    "dokploy.list_github_repositories": {
      input: {
        /**
         * The Dokploy GitHub provider ID.
         * @minLength 1
         */
        githubId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List branches for a repository through a Dokploy GitLab provider connection. */
    "dokploy.list_gitlab_branches": {
      input: {
        /**
         * The repository owner or namespace.
         * @minLength 1
         */
        owner: string;
        /**
         * The repository name.
         * @minLength 1
         */
        repo: string;
        /** The Dokploy GitLab provider ID. */
        gitlabId?: string;
        /** The numeric repository ID. */
        id?: number;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List Dokploy GitLab provider connections. */
    "dokploy.list_gitlab_providers": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List repositories available through a Dokploy GitLab provider connection. */
    "dokploy.list_gitlab_repositories": {
      input: {
        /**
         * The Dokploy GitLab provider ID.
         * @minLength 1
         */
        gitlabId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List Dokploy environments in a project. */
    "dokploy.list_project_environments": {
      input: {
        /**
         * The Dokploy project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List Dokploy projects visible to the API key. */
    "dokploy.list_projects": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List Dokploy projects as returned by the permissions endpoint. */
    "dokploy.list_projects_for_permissions": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List deployments for a Dokploy server. */
    "dokploy.list_server_deployments": {
      input: {
        /**
         * The Dokploy server ID.
         * @minLength 1
         */
        serverId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List Dokploy servers visible to the API key. */
    "dokploy.list_servers": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** List Dokploy servers as returned by the permissions endpoint. */
    "dokploy.list_servers_for_permissions": {
      input: Record<string, never>;
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Read logs for a Dokploy application. */
    "dokploy.read_application_logs": {
      input: {
        /**
         * The Dokploy application ID.
         * @minLength 1
         */
        applicationId: string;
        /**
         * The number of log lines to return.
         * @minimum 1
         * @maximum 10000
         * @default 100
         */
        tail?: number;
        /**
         * The log time window. Use all or a duration such as 10m, 2h, or 1d.
         * @pattern ^(all|\d+[smhd])$
         * @default "all"
         */
        since?: string;
        /**
         * A log search filter containing up to 500 safe characters.
         * @pattern ^[a-zA-Z0-9 ._-]{0,500}$
         */
        search?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Read logs for a Dokploy compose service container. */
    "dokploy.read_compose_logs": {
      input: {
        /**
         * The Dokploy compose ID.
         * @minLength 1
         */
        composeId: string;
        /**
         * The Dokploy compose container ID.
         * @minLength 1
         * @pattern ^[a-zA-Z0-9.\-_]+$
         */
        containerId: string;
        /**
         * The number of log lines to return.
         * @minimum 1
         * @maximum 10000
         * @default 100
         */
        tail?: number;
        /**
         * The log time window. Use all or a duration such as 10m, 2h, or 1d.
         * @pattern ^(all|\d+[smhd])$
         * @default "all"
         */
        since?: string;
        /**
         * A log search filter containing up to 500 safe characters.
         * @pattern ^[a-zA-Z0-9 ._-]{0,500}$
         */
        search?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Read logs for a Dokploy LibSQL service. */
    "dokploy.read_libsql_logs": {
      input: {
        /**
         * The Dokploy LibSQL service ID.
         * @minLength 1
         */
        libsqlId: string;
        /**
         * The number of log lines to return.
         * @minimum 1
         * @maximum 10000
         * @default 100
         */
        tail?: number;
        /**
         * The log time window. Use all or a duration such as 10m, 2h, or 1d.
         * @pattern ^(all|\d+[smhd])$
         * @default "all"
         */
        since?: string;
        /**
         * A log search filter containing up to 500 safe characters.
         * @pattern ^[a-zA-Z0-9 ._-]{0,500}$
         */
        search?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Read logs for a Dokploy MariaDB service. */
    "dokploy.read_mariadb_logs": {
      input: {
        /**
         * The Dokploy MariaDB service ID.
         * @minLength 1
         */
        mariadbId: string;
        /**
         * The number of log lines to return.
         * @minimum 1
         * @maximum 10000
         * @default 100
         */
        tail?: number;
        /**
         * The log time window. Use all or a duration such as 10m, 2h, or 1d.
         * @pattern ^(all|\d+[smhd])$
         * @default "all"
         */
        since?: string;
        /**
         * A log search filter containing up to 500 safe characters.
         * @pattern ^[a-zA-Z0-9 ._-]{0,500}$
         */
        search?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Read logs for a Dokploy MongoDB service. */
    "dokploy.read_mongo_logs": {
      input: {
        /**
         * The Dokploy MongoDB service ID.
         * @minLength 1
         */
        mongoId: string;
        /**
         * The number of log lines to return.
         * @minimum 1
         * @maximum 10000
         * @default 100
         */
        tail?: number;
        /**
         * The log time window. Use all or a duration such as 10m, 2h, or 1d.
         * @pattern ^(all|\d+[smhd])$
         * @default "all"
         */
        since?: string;
        /**
         * A log search filter containing up to 500 safe characters.
         * @pattern ^[a-zA-Z0-9 ._-]{0,500}$
         */
        search?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Read logs for a Dokploy MySQL service. */
    "dokploy.read_mysql_logs": {
      input: {
        /**
         * The Dokploy MySQL service ID.
         * @minLength 1
         */
        mysqlId: string;
        /**
         * The number of log lines to return.
         * @minimum 1
         * @maximum 10000
         * @default 100
         */
        tail?: number;
        /**
         * The log time window. Use all or a duration such as 10m, 2h, or 1d.
         * @pattern ^(all|\d+[smhd])$
         * @default "all"
         */
        since?: string;
        /**
         * A log search filter containing up to 500 safe characters.
         * @pattern ^[a-zA-Z0-9 ._-]{0,500}$
         */
        search?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Read logs for a Dokploy Postgres service. */
    "dokploy.read_postgres_logs": {
      input: {
        /**
         * The Dokploy Postgres service ID.
         * @minLength 1
         */
        postgresId: string;
        /**
         * The number of log lines to return.
         * @minimum 1
         * @maximum 10000
         * @default 100
         */
        tail?: number;
        /**
         * The log time window. Use all or a duration such as 10m, 2h, or 1d.
         * @pattern ^(all|\d+[smhd])$
         * @default "all"
         */
        since?: string;
        /**
         * A log search filter containing up to 500 safe characters.
         * @pattern ^[a-zA-Z0-9 ._-]{0,500}$
         */
        search?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Read logs for a Dokploy Redis service. */
    "dokploy.read_redis_logs": {
      input: {
        /**
         * The Dokploy Redis service ID.
         * @minLength 1
         */
        redisId: string;
        /**
         * The number of log lines to return.
         * @minimum 1
         * @maximum 10000
         * @default 100
         */
        tail?: number;
        /**
         * The log time window. Use all or a duration such as 10m, 2h, or 1d.
         * @pattern ^(all|\d+[smhd])$
         * @default "all"
         */
        since?: string;
        /**
         * A log search filter containing up to 500 safe characters.
         * @pattern ^[a-zA-Z0-9 ._-]{0,500}$
         */
        search?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Rebuild a Dokploy LibSQL service. Warning: this operation can disrupt running services. */
    "dokploy.rebuild_libsql": {
      input: {
        /**
         * The Dokploy LibSQL service ID.
         * @minLength 1
         */
        libsqlId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Rebuild a Dokploy MariaDB service. Warning: this operation can disrupt running services. */
    "dokploy.rebuild_mariadb": {
      input: {
        /**
         * The Dokploy MariaDB service ID.
         * @minLength 1
         */
        mariadbId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Rebuild a Dokploy MongoDB service. Warning: this operation can disrupt running services. */
    "dokploy.rebuild_mongo": {
      input: {
        /**
         * The Dokploy MongoDB service ID.
         * @minLength 1
         */
        mongoId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Rebuild a Dokploy MySQL service. Warning: this operation can disrupt running services. */
    "dokploy.rebuild_mysql": {
      input: {
        /**
         * The Dokploy MySQL service ID.
         * @minLength 1
         */
        mysqlId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Rebuild a Dokploy Postgres service. Warning: this operation can disrupt running services. */
    "dokploy.rebuild_postgres": {
      input: {
        /**
         * The Dokploy Postgres service ID.
         * @minLength 1
         */
        postgresId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Rebuild a Dokploy Redis service. Warning: this operation can disrupt running services. */
    "dokploy.rebuild_redis": {
      input: {
        /**
         * The Dokploy Redis service ID.
         * @minLength 1
         */
        redisId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Redeploy a Dokploy application. */
    "dokploy.redeploy_application": {
      input: {
        /**
         * The Dokploy application ID.
         * @minLength 1
         */
        applicationId: string;
        /** The deployment title. */
        title?: string;
        /** The deployment description. */
        description?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Redeploy a Dokploy compose service. */
    "dokploy.redeploy_compose": {
      input: {
        /**
         * The Dokploy compose ID.
         * @minLength 1
         */
        composeId: string;
        /** The deployment title. */
        title?: string;
        /** The deployment description. */
        description?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Reload a Dokploy LibSQL service. */
    "dokploy.reload_libsql": {
      input: {
        /**
         * The Dokploy LibSQL service ID.
         * @minLength 1
         */
        libsqlId: string;
        /**
         * The Dokploy app name.
         * @minLength 1
         * @maxLength 63
         * @pattern ^[a-zA-Z0-9._-]+$
         */
        appName: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Reload a Dokploy MariaDB service. */
    "dokploy.reload_mariadb": {
      input: {
        /**
         * The Dokploy MariaDB service ID.
         * @minLength 1
         */
        mariadbId: string;
        /**
         * The Dokploy app name.
         * @minLength 1
         * @maxLength 63
         * @pattern ^[a-zA-Z0-9._-]+$
         */
        appName: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Reload a Dokploy MongoDB service. */
    "dokploy.reload_mongo": {
      input: {
        /**
         * The Dokploy MongoDB service ID.
         * @minLength 1
         */
        mongoId: string;
        /**
         * The Dokploy app name.
         * @minLength 1
         * @maxLength 63
         * @pattern ^[a-zA-Z0-9._-]+$
         */
        appName: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Reload a Dokploy MySQL service. */
    "dokploy.reload_mysql": {
      input: {
        /**
         * The Dokploy MySQL service ID.
         * @minLength 1
         */
        mysqlId: string;
        /**
         * The Dokploy app name.
         * @minLength 1
         * @maxLength 63
         * @pattern ^[a-zA-Z0-9._-]+$
         */
        appName: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Reload a Dokploy Postgres service. */
    "dokploy.reload_postgres": {
      input: {
        /**
         * The Dokploy Postgres service ID.
         * @minLength 1
         */
        postgresId: string;
        /**
         * The Dokploy app name.
         * @minLength 1
         * @maxLength 63
         * @pattern ^[a-zA-Z0-9._-]+$
         */
        appName: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Reload a Dokploy Redis service. */
    "dokploy.reload_redis": {
      input: {
        /**
         * The Dokploy Redis service ID.
         * @minLength 1
         */
        redisId: string;
        /**
         * The Dokploy app name.
         * @minLength 1
         * @maxLength 63
         * @pattern ^[a-zA-Z0-9._-]+$
         */
        appName: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Search Dokploy applications with optional filters and pagination. */
    "dokploy.search_applications": {
      input: {
        /** A text filter sent to Dokploy. */
        q?: string;
        /** The service display name filter. */
        name?: string;
        /** The Dokploy app name filter. */
        appName?: string;
        /** The service description filter. */
        description?: string;
        /** The project ID filter. */
        projectId?: string;
        /** The environment ID filter. */
        environmentId?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit?: number;
        /**
         * The number of records to skip before returning results.
         * @minimum 0
         * @default 0
         */
        offset?: number;
        /** The application repository filter. */
        repository?: string;
        /** The application repository owner filter. */
        owner?: string;
        /** The application Docker image filter. */
        dockerImage?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Search Dokploy compose services with optional filters and pagination. */
    "dokploy.search_composes": {
      input: {
        /** A text filter sent to Dokploy. */
        q?: string;
        /** The service display name filter. */
        name?: string;
        /** The Dokploy app name filter. */
        appName?: string;
        /** The service description filter. */
        description?: string;
        /** The project ID filter. */
        projectId?: string;
        /** The environment ID filter. */
        environmentId?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit?: number;
        /**
         * The number of records to skip before returning results.
         * @minimum 0
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Search Dokploy environments with optional filters and pagination. */
    "dokploy.search_environments": {
      input: {
        /** A text filter sent to Dokploy. */
        q?: string;
        /** The environment name filter. */
        name?: string;
        /** The environment description filter. */
        description?: string;
        /** The project ID filter. */
        projectId?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit?: number;
        /**
         * The number of records to skip before returning results.
         * @minimum 0
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Search Dokploy MariaDB services with optional filters and pagination. */
    "dokploy.search_mariadb": {
      input: {
        /** A text filter sent to Dokploy. */
        q?: string;
        /** The service display name filter. */
        name?: string;
        /** The Dokploy app name filter. */
        appName?: string;
        /** The service description filter. */
        description?: string;
        /** The project ID filter. */
        projectId?: string;
        /** The environment ID filter. */
        environmentId?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit?: number;
        /**
         * The number of records to skip before returning results.
         * @minimum 0
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Search Dokploy MongoDB services with optional filters and pagination. */
    "dokploy.search_mongo": {
      input: {
        /** A text filter sent to Dokploy. */
        q?: string;
        /** The service display name filter. */
        name?: string;
        /** The Dokploy app name filter. */
        appName?: string;
        /** The service description filter. */
        description?: string;
        /** The project ID filter. */
        projectId?: string;
        /** The environment ID filter. */
        environmentId?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit?: number;
        /**
         * The number of records to skip before returning results.
         * @minimum 0
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Search Dokploy MySQL services with optional filters and pagination. */
    "dokploy.search_mysql": {
      input: {
        /** A text filter sent to Dokploy. */
        q?: string;
        /** The service display name filter. */
        name?: string;
        /** The Dokploy app name filter. */
        appName?: string;
        /** The service description filter. */
        description?: string;
        /** The project ID filter. */
        projectId?: string;
        /** The environment ID filter. */
        environmentId?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit?: number;
        /**
         * The number of records to skip before returning results.
         * @minimum 0
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Search Dokploy Postgres services with optional filters and pagination. */
    "dokploy.search_postgres": {
      input: {
        /** A text filter sent to Dokploy. */
        q?: string;
        /** The service display name filter. */
        name?: string;
        /** The Dokploy app name filter. */
        appName?: string;
        /** The service description filter. */
        description?: string;
        /** The project ID filter. */
        projectId?: string;
        /** The environment ID filter. */
        environmentId?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit?: number;
        /**
         * The number of records to skip before returning results.
         * @minimum 0
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Search Dokploy projects with optional filters and pagination. */
    "dokploy.search_projects": {
      input: {
        /** A text filter sent to Dokploy. */
        q?: string;
        /** The project name filter. */
        name?: string;
        /** The project description filter. */
        description?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit?: number;
        /**
         * The number of records to skip before returning results.
         * @minimum 0
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Search Dokploy Redis services with optional filters and pagination. */
    "dokploy.search_redis": {
      input: {
        /** A text filter sent to Dokploy. */
        q?: string;
        /** The service display name filter. */
        name?: string;
        /** The Dokploy app name filter. */
        appName?: string;
        /** The service description filter. */
        description?: string;
        /** The project ID filter. */
        projectId?: string;
        /** The environment ID filter. */
        environmentId?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit?: number;
        /**
         * The number of records to skip before returning results.
         * @minimum 0
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Start a Dokploy application. */
    "dokploy.start_application": {
      input: {
        /**
         * The Dokploy application ID.
         * @minLength 1
         */
        applicationId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Start a Dokploy compose service. */
    "dokploy.start_compose": {
      input: {
        /**
         * The Dokploy compose ID.
         * @minLength 1
         */
        composeId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Start a Dokploy LibSQL service. */
    "dokploy.start_libsql": {
      input: {
        /**
         * The Dokploy LibSQL service ID.
         * @minLength 1
         */
        libsqlId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Start a Dokploy MariaDB service. */
    "dokploy.start_mariadb": {
      input: {
        /**
         * The Dokploy MariaDB service ID.
         * @minLength 1
         */
        mariadbId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Start a Dokploy MongoDB service. */
    "dokploy.start_mongo": {
      input: {
        /**
         * The Dokploy MongoDB service ID.
         * @minLength 1
         */
        mongoId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Start a Dokploy MySQL service. */
    "dokploy.start_mysql": {
      input: {
        /**
         * The Dokploy MySQL service ID.
         * @minLength 1
         */
        mysqlId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Start a Dokploy Postgres service. */
    "dokploy.start_postgres": {
      input: {
        /**
         * The Dokploy Postgres service ID.
         * @minLength 1
         */
        postgresId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Start a Dokploy Redis service. */
    "dokploy.start_redis": {
      input: {
        /**
         * The Dokploy Redis service ID.
         * @minLength 1
         */
        redisId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Stop a Dokploy application. Warning: this operation can disrupt running services. */
    "dokploy.stop_application": {
      input: {
        /**
         * The Dokploy application ID.
         * @minLength 1
         */
        applicationId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Stop a Dokploy compose service. Warning: this operation can disrupt running services. */
    "dokploy.stop_compose": {
      input: {
        /**
         * The Dokploy compose ID.
         * @minLength 1
         */
        composeId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Stop a Dokploy LibSQL service. Warning: this operation can disrupt running services. */
    "dokploy.stop_libsql": {
      input: {
        /**
         * The Dokploy LibSQL service ID.
         * @minLength 1
         */
        libsqlId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Stop a Dokploy MariaDB service. Warning: this operation can disrupt running services. */
    "dokploy.stop_mariadb": {
      input: {
        /**
         * The Dokploy MariaDB service ID.
         * @minLength 1
         */
        mariadbId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Stop a Dokploy MongoDB service. Warning: this operation can disrupt running services. */
    "dokploy.stop_mongo": {
      input: {
        /**
         * The Dokploy MongoDB service ID.
         * @minLength 1
         */
        mongoId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Stop a Dokploy MySQL service. Warning: this operation can disrupt running services. */
    "dokploy.stop_mysql": {
      input: {
        /**
         * The Dokploy MySQL service ID.
         * @minLength 1
         */
        mysqlId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Stop a Dokploy Postgres service. Warning: this operation can disrupt running services. */
    "dokploy.stop_postgres": {
      input: {
        /**
         * The Dokploy Postgres service ID.
         * @minLength 1
         */
        postgresId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Stop a Dokploy Redis service. Warning: this operation can disrupt running services. */
    "dokploy.stop_redis": {
      input: {
        /**
         * The Dokploy Redis service ID.
         * @minLength 1
         */
        redisId: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Update a Dokploy domain route. */
    "dokploy.update_domain": {
      input: {
        /**
         * The Dokploy domain ID.
         * @minLength 1
         */
        domainId: string;
        /**
         * The domain host.
         * @minLength 1
         */
        host: string;
        /** The optional public path for the domain route. */
        path?: string | null;
        /**
         * The service port exposed by this domain.
         * @minimum 1
         * @maximum 65535
         */
        port?: number | null;
        /** The optional Traefik entrypoint name. */
        customEntrypoint?: string | null;
        /** Whether HTTPS is enabled for the domain. */
        https?: boolean;
        /** The certificate strategy for this domain. */
        certificateType?: "letsencrypt" | "none" | "custom";
        /** The optional custom certificate resolver. */
        customCertResolver?: string | null;
        /** The compose service name for compose domains. */
        serviceName?: string | null;
        /** The Dokploy domain target type. */
        domainType?: "compose" | "application" | "preview" | null;
        /** The optional internal upstream path. */
        internalPath?: string | null;
        /** Whether Dokploy strips the public path before proxying. */
        stripPath?: boolean;
        /** The Traefik middleware names applied to this domain. */
        middlewares?: Array<string> | null;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Update a Dokploy environment. */
    "dokploy.update_environment": {
      input: {
        /**
         * The Dokploy environment ID.
         * @minLength 1
         */
        environmentId: string;
        /**
         * The updated environment name.
         * @minLength 1
         */
        name?: string;
        /** The updated environment description. */
        description?: string;
        /** The updated project ID. */
        projectId?: string;
        /** The environment variable content. */
        env?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
    /** Validate whether a domain points at a Dokploy server. */
    "dokploy.validate_domain": {
      input: {
        /**
         * The domain name to validate.
         * @minLength 1
         */
        domain: string;
        /** The expected Dokploy server IP address. */
        serverIp?: string;
      };
      output: {
        /** The JSON response returned by Dokploy. */
        result: unknown;
      };
    };
  }
}
