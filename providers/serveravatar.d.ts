import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one ServerAvatar organization by its ID. */
    "serveravatar.get_organization": {
      input: {
        /**
         * The ServerAvatar organization ID.
         * @exclusiveMinimum 0
         */
        organizationId: number;
      };
      output: {
        /** A ServerAvatar organization. */
        organization: {
          /**
           * The organization ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The organization name. */
          name?: string;
          /** The organization description when configured. */
          description?: string | null;
          /** The organization logo URL when configured. */
          logo?: string | null;
          /** The timestamp when the organization was created. */
          created_at?: string;
          /** The timestamp when the organization was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List applications across a ServerAvatar organization. */
    "serveravatar.list_applications": {
      input: {
        /**
         * The ServerAvatar organization ID.
         * @exclusiveMinimum 0
         */
        organizationId: number;
        /**
         * The one-based result page to return.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** ServerAvatar applications and pagination metadata. */
        applications: {
          /** The applications returned for this page. */
          data: Array<{
            /**
             * The application ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /**
             * The server that hosts the application.
             * @exclusiveMinimum 0
             */
            server_id?: number;
            /** The application name. */
            name?: string;
            /** The application's primary domain. */
            primary_domain?: string;
            /** The application framework. */
            framework?: string;
            /** Whether the application is active as returned by ServerAvatar. */
            active?: boolean | number;
            [key: string]: unknown;
          }>;
          /**
           * The current result page.
           * @exclusiveMinimum 0
           */
          current_page?: number;
          /** The URL of the first result page. */
          first_page_url?: string;
          /**
           * The index of the first record on this page.
           * @minimum 0
           */
          from?: number | null;
          /**
           * The final result page.
           * @exclusiveMinimum 0
           */
          last_page?: number;
          /** The URL of the final result page. */
          last_page_url?: string;
          /** The pagination links returned by ServerAvatar. */
          links?: Array<Record<string, unknown>>;
          /** The next page URL when another page exists. */
          next_page_url?: string | null;
          /** The API path represented by this paginated response. */
          path?: string;
          /**
           * The maximum number of records in one page.
           * @exclusiveMinimum 0
           */
          per_page?: number;
          /** The previous page URL when one exists. */
          prev_page_url?: string | null;
          /**
           * The index of the final record on this page.
           * @minimum 0
           */
          to?: number | null;
          /**
           * The total number of matching records.
           * @minimum 0
           */
          total?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List or search databases across a ServerAvatar organization. */
    "serveravatar.list_databases": {
      input: {
        /**
         * The ServerAvatar organization ID.
         * @exclusiveMinimum 0
         */
        organizationId: number;
        /**
         * The one-based result page to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * A database-name search filter.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** ServerAvatar databases and pagination metadata. */
        databases: {
          /** The databases returned for this page. */
          data: Array<{
            /**
             * The database ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /**
             * The server that hosts the database.
             * @exclusiveMinimum 0
             */
            server_id?: number;
            /** The database name. */
            name?: string;
            /** The database engine type. */
            database_type?: string;
            /** The name of the hosting server. */
            server_name?: string;
            /** Whether remote database access is enabled. */
            remoteAccess?: boolean;
            [key: string]: unknown;
          }>;
          /**
           * The current result page.
           * @exclusiveMinimum 0
           */
          current_page?: number;
          /** The URL of the first result page. */
          first_page_url?: string;
          /**
           * The index of the first record on this page.
           * @minimum 0
           */
          from?: number | null;
          /**
           * The final result page.
           * @exclusiveMinimum 0
           */
          last_page?: number;
          /** The URL of the final result page. */
          last_page_url?: string;
          /** The pagination links returned by ServerAvatar. */
          links?: Array<Record<string, unknown>>;
          /** The next page URL when another page exists. */
          next_page_url?: string | null;
          /** The API path represented by this paginated response. */
          path?: string;
          /**
           * The maximum number of records in one page.
           * @exclusiveMinimum 0
           */
          per_page?: number;
          /** The previous page URL when one exists. */
          prev_page_url?: string | null;
          /**
           * The index of the final record on this page.
           * @minimum 0
           */
          to?: number | null;
          /**
           * The total number of matching records.
           * @minimum 0
           */
          total?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List the organizations available to the connected ServerAvatar API token. */
    "serveravatar.list_organizations": {
      input: Record<string, never>;
      output: {
        /** The organizations available to the API token. */
        organizations: Array<{
          /**
           * The organization ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The organization name. */
          name?: string;
          /** The organization description when configured. */
          description?: string | null;
          /** The organization logo URL when configured. */
          logo?: string | null;
          /** The timestamp when the organization was created. */
          created_at?: string;
          /** The timestamp when the organization was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the servers managed in a ServerAvatar organization. */
    "serveravatar.list_servers": {
      input: {
        /**
         * The ServerAvatar organization ID.
         * @exclusiveMinimum 0
         */
        organizationId: number;
        /**
         * The one-based result page to return.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** ServerAvatar servers and pagination metadata. */
        servers: {
          /** The servers returned for this page. */
          data: Array<{
            /**
             * The server ID.
             * @exclusiveMinimum 0
             */
            id?: number;
            /**
             * The organization that owns the server.
             * @exclusiveMinimum 0
             */
            organization_id?: number;
            /** The server name. */
            name?: string;
            /** The server hostname. */
            hostname?: string;
            /** The server IP address. */
            ip?: string;
            /** The connected infrastructure provider name. */
            provider_name?: string;
            /** The server operating system. */
            operating_system?: string;
            /** The current ServerAvatar health status. */
            health_status?: string;
            [key: string]: unknown;
          }>;
          /**
           * The current result page.
           * @exclusiveMinimum 0
           */
          current_page?: number;
          /** The URL of the first result page. */
          first_page_url?: string;
          /**
           * The index of the first record on this page.
           * @minimum 0
           */
          from?: number | null;
          /**
           * The final result page.
           * @exclusiveMinimum 0
           */
          last_page?: number;
          /** The URL of the final result page. */
          last_page_url?: string;
          /** The pagination links returned by ServerAvatar. */
          links?: Array<Record<string, unknown>>;
          /** The next page URL when another page exists. */
          next_page_url?: string | null;
          /** The API path represented by this paginated response. */
          path?: string;
          /**
           * The maximum number of records in one page.
           * @exclusiveMinimum 0
           */
          per_page?: number;
          /** The previous page URL when one exists. */
          prev_page_url?: string | null;
          /**
           * The index of the final record on this page.
           * @minimum 0
           */
          to?: number | null;
          /**
           * The total number of matching records.
           * @minimum 0
           */
          total?: number;
          [key: string]: unknown;
        };
      };
    };
  }
}
