import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the Document360 category hierarchy for a workspace. */
    "document360.get_workspace_categories": {
      input: {
        /**
         * The Document360 project version or workspace ID. Fetch it with list_workspaces.
         * @minLength 1
         * @pattern \S
         */
        projectVersionId: string;
        /** Whether Document360 should omit articles from category nodes. */
        excludeArticles?: boolean;
        /**
         * The Document360 language code such as en, fr, de-DE, or pt-BR.
         * @minLength 1
         * @pattern \S
         */
        langCode?: string;
        /** Whether Document360 should include category descriptions in the response. */
        includeCategoryDescription?: boolean;
        /**
         * Document360 protection level filter where 0 means public and 1 means private or protected.
         * @minimum 0
         * @maximum 1
         */
        securityVisibility?: number;
      };
      output: {
        /** The normalized Document360 response envelope metadata. */
        meta: {
          /** Whether Document360 reported the operation as successful. */
          success: boolean;
          /** The errors returned by Document360. */
          errors: Array<{
            /** The notification description returned by Document360. */
            description: string | null;
            /** The notification error code returned by Document360. */
            errorCode: string | null;
            /** The raw notification object returned by Document360. */
            raw: Record<string, unknown>;
          }>;
          /** The warnings returned by Document360. */
          warnings: Array<{
            /** The notification description returned by Document360. */
            description: string | null;
            /** The notification error code returned by Document360. */
            errorCode: string | null;
            /** The raw notification object returned by Document360. */
            raw: Record<string, unknown>;
          }>;
          /** The informational messages returned by Document360. */
          information: Array<{
            /** The notification description returned by Document360. */
            description: string | null;
            /** The notification error code returned by Document360. */
            errorCode: string | null;
            /** The raw notification object returned by Document360. */
            raw: Record<string, unknown>;
          }>;
        };
        /** The top-level category nodes returned by Document360. */
        categories: Array<{
          /** The category ID. */
          id: string;
          /** The category name returned by Document360. */
          name: string | null;
          /** The category description returned by Document360. */
          description: string | null;
          /** The category slug returned by Document360. */
          slug: string | null;
          /** The category language code returned by Document360. */
          languageCode: string | null;
          /** The category type returned by Document360. */
          categoryType: unknown;
          /** Whether the category is hidden. */
          hidden: boolean | null;
          /** The category order returned by Document360. */
          order: number | null;
          /** The category icon returned by Document360. */
          icon: string | null;
          /** The category status returned by Document360. */
          status: unknown;
          /** Whether the category is excluded from external search. */
          excludeFromExternalSearch: boolean | null;
          /** The category security visibility returned by Document360. */
          securityVisibility: unknown;
          /** The category creation timestamp returned by Document360. */
          createdAt: string | null;
          /** The category modification timestamp returned by Document360. */
          modifiedAt: string | null;
          /** The article summaries attached to this category. */
          articles: Array<{
            /** The article ID. */
            id: string;
            /** The article title returned by Document360. */
            title: string | null;
            /** The article URL returned by Document360. */
            url: string | null;
            /** The article slug returned by Document360. */
            slug: string | null;
            /** The article language code returned by Document360. */
            languageCode: string | null;
            /** The public version number returned by Document360. */
            publicVersion: number | null;
            /** The latest version number returned by Document360. */
            latestVersion: number | null;
            /** Whether the article is hidden. */
            hidden: boolean | null;
            /** The article status returned by Document360. */
            status: unknown;
            /** The article order returned by Document360. */
            order: number | null;
            /** The article content type returned by Document360. */
            contentType: unknown;
            /** The article translation option returned by Document360. */
            translationOption: unknown;
            /** Whether the article is shared. */
            isSharedArticle: boolean | null;
            /** Whether the article is excluded from external search. */
            excludeFromExternalSearch: boolean | null;
            /** The article security visibility returned by Document360. */
            securityVisibility: unknown;
            /** The current workflow status ID returned by Document360. */
            currentWorkflowStatusId: string | null;
            /** The article creation timestamp returned by Document360. */
            createdAt: string | null;
            /** The article modification timestamp returned by Document360. */
            modifiedAt: string | null;
            /** The raw article object returned by Document360. */
            raw: Record<string, unknown>;
          }>;
          /** The child categories nested under this category. */
          childCategories: Array<{
            /** The category ID. */
            id: string;
            /** The category name returned by Document360. */
            name: string | null;
            /** The category description returned by Document360. */
            description: string | null;
            /** The category slug returned by Document360. */
            slug: string | null;
            /** The category language code returned by Document360. */
            languageCode: string | null;
            /** The category type returned by Document360. */
            categoryType: unknown;
            /** Whether the category is hidden. */
            hidden: boolean | null;
            /** The category order returned by Document360. */
            order: number | null;
            /** The category icon returned by Document360. */
            icon: string | null;
            /** The category status returned by Document360. */
            status: unknown;
            /** Whether the category is excluded from external search. */
            excludeFromExternalSearch: boolean | null;
            /** The category security visibility returned by Document360. */
            securityVisibility: unknown;
            /** The category creation timestamp returned by Document360. */
            createdAt: string | null;
            /** The category modification timestamp returned by Document360. */
            modifiedAt: string | null;
            /** The article summaries attached to this category. */
            articles: Array<{
              /** The article ID. */
              id: string;
              /** The article title returned by Document360. */
              title: string | null;
              /** The article URL returned by Document360. */
              url: string | null;
              /** The article slug returned by Document360. */
              slug: string | null;
              /** The article language code returned by Document360. */
              languageCode: string | null;
              /** The public version number returned by Document360. */
              publicVersion: number | null;
              /** The latest version number returned by Document360. */
              latestVersion: number | null;
              /** Whether the article is hidden. */
              hidden: boolean | null;
              /** The article status returned by Document360. */
              status: unknown;
              /** The article order returned by Document360. */
              order: number | null;
              /** The article content type returned by Document360. */
              contentType: unknown;
              /** The article translation option returned by Document360. */
              translationOption: unknown;
              /** Whether the article is shared. */
              isSharedArticle: boolean | null;
              /** Whether the article is excluded from external search. */
              excludeFromExternalSearch: boolean | null;
              /** The article security visibility returned by Document360. */
              securityVisibility: unknown;
              /** The current workflow status ID returned by Document360. */
              currentWorkflowStatusId: string | null;
              /** The article creation timestamp returned by Document360. */
              createdAt: string | null;
              /** The article modification timestamp returned by Document360. */
              modifiedAt: string | null;
              /** The raw article object returned by Document360. */
              raw: Record<string, unknown>;
            }>;
            /** The child categories nested under this category. */
            childCategories: Array<Record<string, unknown>>;
            /** The raw category object returned by Document360. */
            raw: Record<string, unknown>;
          }>;
          /** The raw category object returned by Document360. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Document360 response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** List articles in a Document360 workspace with optional language and pagination filters. */
    "document360.list_workspace_articles": {
      input: {
        /**
         * The Document360 project version or workspace ID. Fetch it with list_workspaces.
         * @minLength 1
         * @pattern \S
         */
        projectVersionId: string;
        /**
         * The Document360 language code such as en, fr, de-DE, or pt-BR.
         * @minLength 1
         * @pattern \S
         */
        langCode?: string;
        /**
         * The 0-based page index used by Document360 paginated endpoints.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of articles per page. Use 0 to let Document360 return all articles, capped by the API.
         * @minimum 0
         * @maximum 100
         */
        hitsPerPage?: number;
        /**
         * Document360 protection level filter where 0 means public and 1 means private or protected.
         * @minimum 0
         * @maximum 1
         */
        securityVisibility?: number;
      };
      output: {
        /** The normalized Document360 response envelope metadata. */
        meta: {
          /** Whether Document360 reported the operation as successful. */
          success: boolean;
          /** The errors returned by Document360. */
          errors: Array<{
            /** The notification description returned by Document360. */
            description: string | null;
            /** The notification error code returned by Document360. */
            errorCode: string | null;
            /** The raw notification object returned by Document360. */
            raw: Record<string, unknown>;
          }>;
          /** The warnings returned by Document360. */
          warnings: Array<{
            /** The notification description returned by Document360. */
            description: string | null;
            /** The notification error code returned by Document360. */
            errorCode: string | null;
            /** The raw notification object returned by Document360. */
            raw: Record<string, unknown>;
          }>;
          /** The informational messages returned by Document360. */
          information: Array<{
            /** The notification description returned by Document360. */
            description: string | null;
            /** The notification error code returned by Document360. */
            errorCode: string | null;
            /** The raw notification object returned by Document360. */
            raw: Record<string, unknown>;
          }>;
        };
        /** The articles returned by Document360. */
        articles: Array<{
          /** The article ID. */
          id: string;
          /** The article title returned by Document360. */
          title: string | null;
          /** The article URL returned by Document360. */
          url: string | null;
          /** The article slug returned by Document360. */
          slug: string | null;
          /** The article language code returned by Document360. */
          languageCode: string | null;
          /** The public version number returned by Document360. */
          publicVersion: number | null;
          /** The latest version number returned by Document360. */
          latestVersion: number | null;
          /** Whether the article is hidden. */
          hidden: boolean | null;
          /** The article status returned by Document360. */
          status: unknown;
          /** The article order returned by Document360. */
          order: number | null;
          /** The article content type returned by Document360. */
          contentType: unknown;
          /** The article translation option returned by Document360. */
          translationOption: unknown;
          /** Whether the article is shared. */
          isSharedArticle: boolean | null;
          /** Whether the article is excluded from external search. */
          excludeFromExternalSearch: boolean | null;
          /** The article security visibility returned by Document360. */
          securityVisibility: unknown;
          /** The current workflow status ID returned by Document360. */
          currentWorkflowStatusId: string | null;
          /** The article creation timestamp returned by Document360. */
          createdAt: string | null;
          /** The article modification timestamp returned by Document360. */
          modifiedAt: string | null;
          /** The raw article object returned by Document360. */
          raw: Record<string, unknown>;
        }>;
        /** The raw pagination object returned by Document360 when pagination is enabled. */
        pagination: Record<string, unknown> | null;
        /** The raw Document360 response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** List Document360 workspaces, also called project versions, for the API token. */
    "document360.list_workspaces": {
      input: Record<string, never>;
      output: {
        /** The normalized Document360 response envelope metadata. */
        meta: {
          /** Whether Document360 reported the operation as successful. */
          success: boolean;
          /** The errors returned by Document360. */
          errors: Array<{
            /** The notification description returned by Document360. */
            description: string | null;
            /** The notification error code returned by Document360. */
            errorCode: string | null;
            /** The raw notification object returned by Document360. */
            raw: Record<string, unknown>;
          }>;
          /** The warnings returned by Document360. */
          warnings: Array<{
            /** The notification description returned by Document360. */
            description: string | null;
            /** The notification error code returned by Document360. */
            errorCode: string | null;
            /** The raw notification object returned by Document360. */
            raw: Record<string, unknown>;
          }>;
          /** The informational messages returned by Document360. */
          information: Array<{
            /** The notification description returned by Document360. */
            description: string | null;
            /** The notification error code returned by Document360. */
            errorCode: string | null;
            /** The raw notification object returned by Document360. */
            raw: Record<string, unknown>;
          }>;
        };
        /** The workspaces returned by Document360. */
        workspaces: Array<{
          /** The workspace ID. */
          id: string;
          /** The workspace version number. */
          versionNumber: number | null;
          /** The base workspace version number. */
          baseVersionNumber: number | null;
          /** The custom workspace version name. */
          versionCodeName: string | null;
          /** Whether this is the main workspace version. */
          isMainVersion: boolean | null;
          /** Whether this workspace is marked beta. */
          isBeta: boolean | null;
          /** Whether this workspace is public. */
          isPublic: boolean | null;
          /** Whether this workspace is deprecated. */
          isDeprecated: boolean | null;
          /** The workspace slug returned by Document360. */
          slug: string | null;
          /** The workspace order returned by Document360. */
          order: number | null;
          /** The workspace type returned by Document360. */
          versionType: unknown;
          /** The workspace creation timestamp returned by Document360. */
          createdAt: string | null;
          /** The workspace modification timestamp returned by Document360. */
          modifiedAt: string | null;
          /** The languages configured on this workspace. */
          languages: Array<{
            /** The language version ID returned by Document360. */
            id: string | null;
            /** The language code returned by Document360. */
            code: string | null;
            /** The language name returned by Document360. */
            name: string | null;
            /** The display name returned by Document360. */
            displayName: string | null;
            /** Whether this language is the workspace default. */
            setAsDefault: boolean | null;
            /** Whether this language is hidden. */
            hidden: boolean | null;
            /** The raw language object returned by Document360. */
            raw: Record<string, unknown>;
          }>;
          /** The raw workspace object returned by Document360. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Document360 response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** Search for a phrase inside a Document360 workspace. */
    "document360.search_workspace": {
      input: {
        /**
         * The Document360 project version or workspace ID. Fetch it with list_workspaces.
         * @minLength 1
         * @pattern \S
         */
        projectVersionId: string;
        /**
         * The Document360 language code such as en, fr, de-DE, or pt-BR.
         * @minLength 1
         * @pattern \S
         */
        langCode: string;
        /**
         * The phrase to search across articles in the workspace.
         * @minLength 1
         * @pattern \S
         */
        searchQuery: string;
        /**
         * The 0-based page index used by Document360 paginated endpoints.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of search results per page. Document360 accepts values from 0 through 1000.
         * @minimum 0
         * @maximum 1000
         */
        hitsPerPage?: number;
      };
      output: {
        /** The normalized Document360 response envelope metadata. */
        meta: {
          /** Whether Document360 reported the operation as successful. */
          success: boolean;
          /** The errors returned by Document360. */
          errors: Array<{
            /** The notification description returned by Document360. */
            description: string | null;
            /** The notification error code returned by Document360. */
            errorCode: string | null;
            /** The raw notification object returned by Document360. */
            raw: Record<string, unknown>;
          }>;
          /** The warnings returned by Document360. */
          warnings: Array<{
            /** The notification description returned by Document360. */
            description: string | null;
            /** The notification error code returned by Document360. */
            errorCode: string | null;
            /** The raw notification object returned by Document360. */
            raw: Record<string, unknown>;
          }>;
          /** The informational messages returned by Document360. */
          information: Array<{
            /** The notification description returned by Document360. */
            description: string | null;
            /** The notification error code returned by Document360. */
            errorCode: string | null;
            /** The raw notification object returned by Document360. */
            raw: Record<string, unknown>;
          }>;
        };
        /** The search hits returned by Document360. */
        hits: Array<{
          /** The matched article ID returned by Document360. */
          articleId: string | null;
          /** The matched category ID returned by Document360. */
          categoryId: string | null;
          /** The matched title returned by Document360. */
          title: string | null;
          /** The matched content returned by Document360. */
          content: string | null;
          /** A normalized Document360 search snippet field. */
          snippet: {
            /** The highlighted snippet value returned by Document360. */
            value: string | null;
            /** The snippet match level returned by Document360. */
            matchLevel: string | null;
          } | null;
          /** The matched article slug returned by Document360. */
          slug: string | null;
          /** The matched article version returned by Document360. */
          version: number | null;
          /** The matched article order returned by Document360. */
          order: number | null;
          /** Whether the matched article is hidden. */
          isHidden: boolean | null;
          /** Whether the matched article is a draft. */
          isDraft: boolean | null;
          /** Whether the matched article is private. */
          isPrivate: boolean | null;
          /** The matched article language code returned by Document360. */
          langCode: string | null;
          /** The search object ID returned by Document360. */
          objectId: string | null;
          /** The raw search hit returned by Document360. */
          raw: Record<string, unknown>;
        }>;
        /** The total hit count returned by Document360. */
        totalHits: number | null;
        /** The result page returned by Document360. */
        page: number | null;
        /** The total page count returned by Document360. */
        totalPages: number | null;
        /** The page size returned by Document360. */
        hitsPerPage: number | null;
        /** The search processing time in milliseconds returned by Document360. */
        processingTimeMs: number | null;
        /** The normalized search query returned by Document360. */
        query: string | null;
        /** The raw Document360 response envelope. */
        raw: Record<string, unknown>;
      };
    };
  }
}
