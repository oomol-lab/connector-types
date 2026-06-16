import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the Codacy user associated with the connected API token. */
    "codacy.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The authenticated Codacy user. */
        user: {
          /** The Codacy user identifier. */
          id?: number;
          /**
           * The user's display name.
           * @minLength 1
           */
          name?: string;
          /**
           * The user's primary email address.
           * @format email
           */
          mainEmail?: string;
          /** Other email addresses associated with the user. */
          otherEmails?: Array<string>;
          /** Whether the user has Codacy administrator privileges. */
          isAdmin?: boolean;
          /** Whether the user account is active. */
          isActive?: boolean;
          /** Timestamp when the user was created, in ISO 8601 format. */
          created?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Codacy repository analysis summary. */
    "codacy.get_repository_analysis": {
      input: {
        /**
         * Git provider identifier used by Codacy, such as gh for GitHub, gl for GitLab, or bb for Bitbucket.
         * @minLength 1
         */
        provider: string;
        /**
         * Organization name on the Git provider.
         * @minLength 1
         */
        remoteOrganizationName: string;
        /**
         * Repository name on the Git provider organization.
         * @minLength 1
         */
        repositoryName: string;
        /**
         * Name of a repository branch enabled on Codacy.
         * @minLength 1
         */
        branch?: string;
      };
      output: {
        /** Repository analysis information returned by Codacy. */
        repository: {
          /** A Codacy repository summary. */
          repository?: {
            /** The Codacy repository identifier. */
            repositoryId?: number;
            /** Git provider hosting the repository. */
            provider?: string;
            /** Name of the organization that owns the repository. */
            owner?: string;
            /**
             * Name of the repository.
             * @minLength 1
             */
            name?: string;
            /** Full path of the repository on the Git provider. */
            fullPath?: string;
            /** Repository visibility reported by Codacy. */
            visibility?: string;
            /** Unique repository identifier on the Git provider. */
            remoteIdentifier?: string;
            /** Programming languages detected in the repository. */
            languages?: Array<string>;
            [key: string]: unknown;
          };
          /** Repository quality grade as a number between 0 and 100. */
          grade?: number;
          /** Repository quality grade letter. */
          gradeLetter?: string;
          /** Issue percentage reported by Codacy. */
          issuesPercentage?: number;
          /** Number of issues reported by Codacy. */
          issuesCount?: number;
          /** Lines of code in the repository. */
          loc?: number;
          /** Complex files percentage reported by Codacy. */
          complexFilesPercentage?: number;
          /** Number of complex files reported by Codacy. */
          complexFilesCount?: number;
          /** Duplication percentage reported by Codacy. */
          duplicationPercentage?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one code pattern for a Codacy analysis tool. */
    "codacy.get_tool_pattern": {
      input: {
        /**
         * The Codacy tool UUID.
         * @minLength 1
         */
        toolUuid: string;
        /**
         * Pattern identifier unique within the Codacy tool.
         * @minLength 1
         */
        patternId: string;
      };
      output: {
        /** A Codacy code pattern that a tool can use to find issues. */
        pattern: {
          /**
           * Pattern identifier unique per tool.
           * @minLength 1
           */
          id?: string;
          /** Pattern title. */
          title?: string;
          /** Pattern category. */
          category?: string;
          /** Pattern subcategory. */
          subCategory?: string;
          /** Deprecated severity field returned by Codacy. */
          level?: string;
          /** Pattern severity level. */
          severityLevel?: string;
          /** Short description of the code pattern. */
          description?: string;
          /** Full description of the code pattern in CommonMark. */
          explanation?: string;
          /** Whether the pattern is enabled by default for new repositories. */
          enabled?: boolean;
          /** Programming languages supported by the pattern. */
          languages?: Array<string>;
          /** Average time to fix an issue detected by the pattern, in minutes. */
          timeToFix?: number;
          /** Pattern parameters returned by Codacy. */
          parameters?: unknown;
          /** Rationale for the pattern. */
          rationale?: string;
          /** Suggested solution for the pattern. */
          solution?: string;
          /** Good examples for the pattern. */
          goodExamples?: Array<string>;
          /** Bad examples for the pattern. */
          badExamples?: Array<string>;
          /** Tags associated with the pattern. */
          tags?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** List programming languages supported by Codacy analysis tools. */
    "codacy.list_languages": {
      input: Record<string, never>;
      output: {
        /** Programming languages supported by Codacy tools. */
        languages: Array<{
          /**
           * The language name.
           * @minLength 1
           */
          name?: string;
          /** Default file extensions for this language. */
          fileExtensions?: Array<string>;
          /** Specific files that should be considered for this language. */
          files?: Array<string>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List repository analysis summaries for a Codacy organization on a Git provider. */
    "codacy.list_repository_analyses": {
      input: {
        /**
         * Git provider identifier used by Codacy, such as gh for GitHub, gl for GitLab, or bb for Bitbucket.
         * @minLength 1
         */
        provider: string;
        /**
         * Organization name on the Git provider.
         * @minLength 1
         */
        remoteOrganizationName: string;
        /**
         * Cursor returned by Codacy for requesting the next result page.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of items to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Search string used to filter repositories.
         * @minLength 1
         */
        search?: string;
        /**
         * Comma-separated list of segment identifiers.
         * @minLength 1
         */
        segments?: string;
      };
      output: {
        /** Repository analysis summaries returned by Codacy. */
        repositories: Array<{
          /** A Codacy repository summary. */
          repository?: {
            /** The Codacy repository identifier. */
            repositoryId?: number;
            /** Git provider hosting the repository. */
            provider?: string;
            /** Name of the organization that owns the repository. */
            owner?: string;
            /**
             * Name of the repository.
             * @minLength 1
             */
            name?: string;
            /** Full path of the repository on the Git provider. */
            fullPath?: string;
            /** Repository visibility reported by Codacy. */
            visibility?: string;
            /** Unique repository identifier on the Git provider. */
            remoteIdentifier?: string;
            /** Programming languages detected in the repository. */
            languages?: Array<string>;
            [key: string]: unknown;
          };
          /** Repository quality grade as a number between 0 and 100. */
          grade?: number;
          /** Repository quality grade letter. */
          gradeLetter?: string;
          /** Issue percentage reported by Codacy. */
          issuesPercentage?: number;
          /** Number of issues reported by Codacy. */
          issuesCount?: number;
          /** Lines of code in the repository. */
          loc?: number;
          /** Complex files percentage reported by Codacy. */
          complexFilesPercentage?: number;
          /** Number of complex files reported by Codacy. */
          complexFilesCount?: number;
          /** Duplication percentage reported by Codacy. */
          duplicationPercentage?: number;
          [key: string]: unknown;
        }>;
        /** Cursor-based pagination information returned by Codacy. */
        pagination: {
          /**
           * Cursor to request the next batch of results.
           * @minLength 1
           */
          cursor?: string;
          /** Maximum number of items returned by Codacy. */
          limit?: number;
          /** Total number of items returned by Codacy. */
          total?: number;
        } | null;
      };
    };
    /** List code patterns available for a Codacy analysis tool. */
    "codacy.list_tool_patterns": {
      input: {
        /**
         * The Codacy tool UUID.
         * @minLength 1
         */
        toolUuid: string;
        /**
         * Cursor returned by Codacy for requesting the next result page.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of items to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Filter by enabled status. */
        enabled?: boolean;
      };
      output: {
        /** Patterns returned for the requested Codacy tool. */
        patterns: Array<{
          /**
           * Pattern identifier unique per tool.
           * @minLength 1
           */
          id?: string;
          /** Pattern title. */
          title?: string;
          /** Pattern category. */
          category?: string;
          /** Pattern subcategory. */
          subCategory?: string;
          /** Deprecated severity field returned by Codacy. */
          level?: string;
          /** Pattern severity level. */
          severityLevel?: string;
          /** Short description of the code pattern. */
          description?: string;
          /** Full description of the code pattern in CommonMark. */
          explanation?: string;
          /** Whether the pattern is enabled by default for new repositories. */
          enabled?: boolean;
          /** Programming languages supported by the pattern. */
          languages?: Array<string>;
          /** Average time to fix an issue detected by the pattern, in minutes. */
          timeToFix?: number;
          /** Pattern parameters returned by Codacy. */
          parameters?: unknown;
          /** Rationale for the pattern. */
          rationale?: string;
          /** Suggested solution for the pattern. */
          solution?: string;
          /** Good examples for the pattern. */
          goodExamples?: Array<string>;
          /** Bad examples for the pattern. */
          badExamples?: Array<string>;
          /** Tags associated with the pattern. */
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Cursor-based pagination information returned by Codacy. */
        pagination: {
          /**
           * Cursor to request the next batch of results.
           * @minLength 1
           */
          cursor?: string;
          /** Maximum number of items returned by Codacy. */
          limit?: number;
          /** Total number of items returned by Codacy. */
          total?: number;
        } | null;
      };
    };
    /** List Codacy code analysis tools. */
    "codacy.list_tools": {
      input: {
        /**
         * Cursor returned by Codacy for requesting the next result page.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of items to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Codacy tools returned by the API. */
        tools: Array<{
          /** The tool unique identifier. */
          uuid?: string;
          /**
           * The tool name.
           * @minLength 1
           */
          name?: string;
          /** Original tool version used by the Codacy wrapper. */
          version?: string;
          /** Unique short name of the tool. */
          shortName?: string;
          /** Original tool documentation URL. */
          documentationUrl?: string;
          /** Codacy tool wrapper source code URL. */
          sourceCodeUrl?: string;
          /** Tool prefix used to ensure pattern names are unique. */
          prefix?: string;
          /** Whether the tool requires compilation to run. */
          needsCompilation?: boolean;
          /** Configuration file names supported by the tool. */
          configurationFilenames?: Array<string>;
          /** Tool description. */
          description?: string;
          /** Docker image used to launch the tool. */
          dockerImage?: string;
          /** Programming languages supported by the tool. */
          languages?: Array<string>;
          /** Whether the tool is expected to run on the client machine. */
          clientSide?: boolean;
          /** Whether the client-side tool runs standalone outside the CLI. */
          standalone?: boolean;
          /** Whether the tool is enabled by default for new projects. */
          enabledByDefault?: boolean;
          /** Whether the tool is configurable in Codacy. */
          configurable?: boolean;
          [key: string]: unknown;
        }>;
        /** Cursor-based pagination information returned by Codacy. */
        pagination: {
          /**
           * Cursor to request the next batch of results.
           * @minLength 1
           */
          cursor?: string;
          /** Maximum number of items returned by Codacy. */
          limit?: number;
          /** Total number of items returned by Codacy. */
          total?: number;
        } | null;
      };
    };
    /** List Codacy organizations accessible to the connected API token, optionally scoped to one Git provider. */
    "codacy.list_user_organizations": {
      input: {
        /**
         * Git provider identifier used by Codacy, such as gh for GitHub, gl for GitLab, or bb for Bitbucket.
         * @minLength 1
         */
        provider?: string;
        /**
         * Cursor returned by Codacy for requesting the next result page.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Maximum number of items to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Organizations accessible to the user. */
        organizations: Array<{
          /** The Codacy organization identifier. */
          identifier?: number;
          /** The organization identifier on the Git provider. */
          remoteIdentifier?: string;
          /**
           * The organization name.
           * @minLength 1
           */
          name?: string;
          /** Git provider hosting the organization. */
          provider?: string;
          /** Organization avatar URL. */
          avatar?: string;
          /** Codacy organization type. */
          type?: string;
          /** Whether the organization uses single provider login. */
          singleProviderLogin?: boolean;
          /** Whether the organization has DAST access. */
          hasDastAccess?: boolean;
          /** Whether the organization has SCA enabled. */
          hasScaEnabled?: boolean;
          /** Whether the organization has image SBOM enabled. */
          imageSbomEnabled?: boolean;
          [key: string]: unknown;
        }>;
        /** Cursor-based pagination information returned by Codacy. */
        pagination: {
          /**
           * Cursor to request the next batch of results.
           * @minLength 1
           */
          cursor?: string;
          /** Maximum number of items returned by Codacy. */
          limit?: number;
          /** Total number of items returned by Codacy. */
          total?: number;
        } | null;
      };
    };
  }
}
