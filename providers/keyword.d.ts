import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current Keyword.com user profile for the API token. */
    "keyword.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current Keyword.com user profile. */
        user: {
          /** The user resource type returned by Keyword.com. */
          type: string;
          /** The user identifier returned by Keyword.com. */
          id: string;
          /** The user profile and subscription attributes returned by Keyword.com. */
          attributes: Record<string, unknown>;
          /** The raw user resource returned by Keyword.com. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Keyword.com keyword and its ranking data by project and keyword ID. */
    "keyword.get_keyword": {
      input: {
        /**
         * The Keyword.com project or group name. Use the full `[sub]` convention for subprojects.
         * @minLength 1
         * @pattern \S
         */
        projectName: string;
        /**
         * The Keyword.com keyword identifier.
         * @minLength 1
         * @pattern \S
         */
        keywordId: string;
        /**
         * The ranking data date to retrieve in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
      };
      output: {
        /** A Keyword.com keyword resource. */
        keyword: {
          /** The resource type returned by Keyword.com. */
          type: string;
          /** The keyword identifier returned by Keyword.com. */
          id: string;
          /** The keyword attributes and ranking metrics returned by Keyword.com. */
          attributes: Record<string, unknown>;
          /** The raw keyword resource returned by Keyword.com. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Keyword.com project or group by name. */
    "keyword.get_project": {
      input: {
        /**
         * The Keyword.com project or group name. Use the full `[sub]` convention for subprojects.
         * @minLength 1
         * @pattern \S
         */
        projectName: string;
      };
      output: {
        /** A Keyword.com project or group resource. */
        project: {
          /** The resource type returned by Keyword.com. */
          type: string;
          /** The project or group identifier returned by Keyword.com. */
          id: string;
          /** The project or group attributes returned by Keyword.com. */
          attributes: Record<string, unknown>;
          /** The raw project or group resource returned by Keyword.com. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Keyword.com keywords and ranking data for a project or group. */
    "keyword.list_keywords": {
      input: {
        /**
         * The Keyword.com project or group name. Use the full `[sub]` convention for subprojects.
         * @minLength 1
         * @pattern \S
         */
        projectName: string;
        /**
         * The page number for a paginated Keyword.com response.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return per page.
         * @minimum 1
         * @maximum 250
         */
        perPage?: number;
        /**
         * The ranking data date to retrieve in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
      };
      output: {
        /** The keywords returned by Keyword.com. */
        keywords: Array<{
          /** The resource type returned by Keyword.com. */
          type: string;
          /** The keyword identifier returned by Keyword.com. */
          id: string;
          /** The keyword attributes and ranking metrics returned by Keyword.com. */
          attributes: Record<string, unknown>;
          /** The raw keyword resource returned by Keyword.com. */
          raw: Record<string, unknown>;
        }>;
        /** The metadata object returned by Keyword.com. */
        meta: Record<string, unknown> | null;
        /** The pagination links returned by Keyword.com. */
        links: Record<string, unknown> | null;
      };
    };
    /** List Google regions tracked by a Keyword.com project or group. */
    "keyword.list_project_regions": {
      input: {
        /**
         * The Keyword.com project or group name. Use the full `[sub]` convention for subprojects.
         * @minLength 1
         * @pattern \S
         */
        projectName: string;
      };
      output: {
        /** The tracked regions returned by Keyword.com. */
        regions: Array<{
          /** The Google region domain returned by Keyword.com. */
          region: string;
          /** The language code returned by Keyword.com. */
          language: string | null;
          /** The tracking type returned by Keyword.com. */
          type: string | null;
          /** The number of keywords tracked for this region. */
          total: number | null;
          /** The raw region object returned by Keyword.com. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List active Keyword.com projects and groups visible to the API token. */
    "keyword.list_projects": {
      input: Record<string, never>;
      output: {
        /** The projects and groups returned by Keyword.com. */
        projects: Array<{
          /** The resource type returned by Keyword.com. */
          type: string;
          /** The project or group identifier returned by Keyword.com. */
          id: string;
          /** The project or group attributes returned by Keyword.com. */
          attributes: Record<string, unknown>;
          /** The raw project or group resource returned by Keyword.com. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
