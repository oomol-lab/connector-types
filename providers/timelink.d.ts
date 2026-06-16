import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch one Timelink client by its identifier. */
    "timelink.get_client": {
      input: {
        /**
         * A Timelink ULID identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** A Timelink client record. */
        client: {
          /**
           * A Timelink ULID identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The client name. */
          name: string;
          /** The numeric company identifier linked to the client. */
          companyId: number | null;
          /** The external tool identifier linked to the client. */
          extToolId: number | null;
          /** The free-form client information text. */
          info: string | null;
          /** The client color value. */
          color: string | null;
          /** Whether the client is active. */
          active: boolean;
          /** Whether the client is billable by default. */
          billable: boolean;
          /** The client acronym. */
          acronym: string | null;
          /** The image identifier for this client. */
          imageId: string | null;
          /** Whether the client is a demo record. */
          demoFlag: boolean;
          /** The number of projects returned for the client when present. */
          projectCount: number | null;
          /** The number of active projects returned for the client when present. */
          activeProjectCount: number | null;
          /** The raw Timelink client object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Fetch the current Timelink company details for the authenticated token. */
    "timelink.get_company": {
      input: Record<string, never>;
      output: {
        /** A Timelink company record. */
        company: {
          /** The company identifier. */
          id: string;
          /** The company name. */
          name: string;
          /** The company address. */
          address: string;
          /** The company city. */
          city: string;
          /** The company ZIP or postal code. */
          zip: string;
          /** The company country. */
          country: string;
          /** The company phone number. */
          phone: string;
          /** The company admin email. */
          email: string;
          /** The company invoice email. */
          invoiceEmail: string;
          /** Whether Timelink forces OAuth for the company. */
          forceOauth: boolean | null;
          /** The OAuth provider configured for the company. */
          oauthProvider: string | null;
          /** Whether Timelink auto-updates the subscription quantity. */
          autoupdateQuantity: boolean | null;
          /** The Timelink subscription details for the company. */
          subscription: {
            /** The subscription status. */
            status: "active" | "canceled";
            /** The subscription product. */
            product: "basic" | "trial";
            /** The number of seats in the subscription. */
            quantity: number;
            /** Whether the subscription is currently a trial. */
            trial: boolean;
            /**
             * When the trial ends.
             * @format date-time
             */
            trialEndsAt: string | null;
            /**
             * When the subscription ends.
             * @format date-time
             */
            endsAt: string | null;
            /** The raw Timelink subscription object. */
            raw: Record<string, unknown>;
          } | null;
          /** The active Timelink pull provider. */
          pullProvider: string | null;
          /** The active Timelink push provider. */
          pushProvider: string | null;
          /** The raw Timelink company settings object. */
          settings: Record<string, unknown> | null;
          /** The raw Timelink company object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Inspect the current Timelink API token metadata. */
    "timelink.get_current_token": {
      input: Record<string, never>;
      output: {
        /** A Timelink API token record. */
        token: {
          /** The numeric token identifier returned by Timelink. */
          id: number;
          /** The token name configured in Timelink. */
          name: string;
          /** The token abilities granted by Timelink. */
          abilities: Array<string>;
          /**
           * When the token was last used.
           * @format date-time
           */
          lastUsedAt: string | null;
          /**
           * When the token expires.
           * @format date-time
           */
          expiresAt: string | null;
          /**
           * When the token was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * When the token was last updated.
           * @format date-time
           */
          updatedAt: string;
        };
      };
    };
    /** Fetch one Timelink project by its identifier. */
    "timelink.get_project": {
      input: {
        /**
         * A Timelink ULID identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** A Timelink project record. */
        project: {
          /**
           * A Timelink ULID identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The project name. */
          name: string;
          /** The numeric client identifier linked to the project. */
          clientId: number | null;
          /** The external tool identifier linked to the project. */
          extToolId: number | null;
          /** The free-form project information text. */
          info: string | null;
          /** The project color value. */
          color: string | null;
          /** Whether the project is active. */
          active: boolean;
          /** Whether the project is billable by default. */
          billable: boolean;
          /** The project acronym. */
          acronym: string | null;
          /** The image identifier for this project. */
          imageId: string | null;
          /** Whether the project is a demo record. */
          demoFlag: boolean;
          /** The raw Timelink project object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Fetch one Timelink service by its identifier. */
    "timelink.get_service": {
      input: {
        /**
         * A Timelink ULID identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** A Timelink service record. */
        service: {
          /**
           * A Timelink ULID identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The service name. */
          name: string;
          /** The numeric company identifier linked to the service. */
          companyId: number | null;
          /** The external tool identifier linked to the service. */
          extToolId: number | null;
          /** The free-form service information text. */
          info: string | null;
          /** The service color value. */
          color: string | null;
          /** Whether the service is active. */
          active: boolean;
          /** Whether the service is billable by default. */
          billable: boolean;
          /** The service acronym. */
          acronym: string | null;
          /** The image identifier for this service. */
          imageId: string | null;
          /** The default time entry description configured for the service. */
          defaultTimeEntryDescription: string | null;
          /** The raw Timelink service object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Fetch one Timelink time entry by its identifier. */
    "timelink.get_time_entry": {
      input: {
        /**
         * A Timelink ULID identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** A Timelink time entry record. */
        timeEntry: {
          /**
           * A Timelink ULID identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The user identifier linked to the time entry. */
          userId: string | null;
          /** The client identifier linked to the time entry. */
          clientId: string | null;
          /** The project identifier linked to the time entry. */
          projectId: string | null;
          /** The service identifier linked to the time entry. */
          serviceId: string | null;
          /** The time entry description. */
          description: string | null;
          /** Whether the time entry is billable. */
          billable: boolean;
          /** Whether the time entry has been billed. */
          billed: boolean;
          /**
           * When the time entry was billed.
           * @format date-time
           */
          billedAt: string | null;
          /** Whether the time entry is marked as an interruption. */
          isInterrupt: boolean;
          /**
           * When the time entry started.
           * @format date-time
           */
          startedAt: string;
          /**
           * When the time entry ended.
           * @format date-time
           */
          endedAt: string | null;
          /**
           * When the time entry was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * When the time entry was last updated.
           * @format date-time
           */
          updatedAt: string;
          /**
           * When the time entry was deleted.
           * @format date-time
           */
          deletedAt: string | null;
          /** The external tool identifier linked to the time entry. */
          extToolId: string | null;
          /** The temporary identifier used by Timelink clients. */
          tempId: string | null;
          /** The Timelink push state value. */
          pushState: number | null;
          /** The Timelink push errors. */
          pushErrors: Array<string>;
          /** The raw Timelink time entry object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Fetch one Timelink user by its identifier. */
    "timelink.get_user": {
      input: {
        /**
         * A Timelink ULID identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** A Timelink user record. */
        user: {
          /** The user identifier. */
          id: string;
          /** The user's first name. */
          firstName: string;
          /** The user's last name. */
          lastName: string;
          /** The user's full name. */
          fullName: string;
          /** The user's email address. */
          email: string;
          /** The company identifier linked to the user. */
          companyId: string;
          /**
           * When the user's email was verified.
           * @format date-time
           */
          emailVerifiedAt: string | null;
          /** Whether the user is active. */
          active: boolean;
          /** The user's configured timezone. */
          timezone: string;
          /** The user's configured language. */
          language: string;
          /** The recent Timelink entities referenced by the user. */
          lastUsed: {
            /** The last used client identifiers. */
            clients: Array<string>;
            /** The last used project identifiers. */
            projects: Array<string>;
            /** The last used service identifiers. */
            services: Array<string>;
          };
          /** The raw Timelink user settings object. */
          settings: Record<string, unknown> | null;
          /** The raw Timelink user object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List currently active Timelink time entries. */
    "timelink.list_active_time_entries": {
      input: {
        /**
         * The maximum number of active time entries to return.
         * @minimum 1
         */
        limit?: number;
        /** Whether Timelink should include related entities. */
        withRelations?: boolean;
      };
      output: {
        /** The active Timelink time entries. */
        timeEntries: Array<{
          /**
           * A Timelink ULID identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The user identifier linked to the time entry. */
          userId: string | null;
          /** The client identifier linked to the time entry. */
          clientId: string | null;
          /** The project identifier linked to the time entry. */
          projectId: string | null;
          /** The service identifier linked to the time entry. */
          serviceId: string | null;
          /** The time entry description. */
          description: string | null;
          /** Whether the time entry is billable. */
          billable: boolean;
          /** Whether the time entry has been billed. */
          billed: boolean;
          /**
           * When the time entry was billed.
           * @format date-time
           */
          billedAt: string | null;
          /** Whether the time entry is marked as an interruption. */
          isInterrupt: boolean;
          /**
           * When the time entry started.
           * @format date-time
           */
          startedAt: string;
          /**
           * When the time entry ended.
           * @format date-time
           */
          endedAt: string | null;
          /**
           * When the time entry was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * When the time entry was last updated.
           * @format date-time
           */
          updatedAt: string;
          /**
           * When the time entry was deleted.
           * @format date-time
           */
          deletedAt: string | null;
          /** The external tool identifier linked to the time entry. */
          extToolId: string | null;
          /** The temporary identifier used by Timelink clients. */
          tempId: string | null;
          /** The Timelink push state value. */
          pushState: number | null;
          /** The Timelink push errors. */
          pushErrors: Array<string>;
          /** The raw Timelink time entry object. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Timelink list endpoints. */
        pagination: {
          /** The current page number. */
          currentPage: number;
          /** The first item index on the current page. */
          from: number;
          /** The last available page number. */
          lastPage: number;
          /** The pagination links returned by Timelink. */
          links: Array<{
            /** The page URL. */
            url: string | null;
            /** The human-readable page label. */
            label: string;
            /** Whether this pagination link is active. */
            active: boolean;
          }>;
          /** The Timelink API path for this paginated response. */
          path: string;
          /** The number of items returned per page. */
          perPage: number;
          /** The last item index on the current page. */
          to: number;
          /** The total number of items across all pages. */
          total: number;
        };
      };
    };
    /** List Timelink clients with optional filtering and pagination parameters. */
    "timelink.list_clients": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * A search string matched by Timelink.
         * @minLength 1
         * @pattern \S
         */
        search?: string;
        /**
         * A list of Timelink record IDs to fetch.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * The Timelink sort rules to apply.
         * @minItems 1
         */
        orders?: Array<{
          /**
           * The Timelink field name used for sorting.
           * @minLength 1
           * @pattern \S
           */
          column: string;
          /** The sort direction. */
          direction: "asc" | "desc";
        }>;
        /** Filter clients by active state. */
        active?: boolean;
        /** Whether Timelink should include a limited subset of each client's projects. */
        withLimitedPartOfProjects?: boolean;
        /**
         * The number of nested projects to include per client.
         * @minimum 1
         */
        projectsLimit?: number;
      };
      output: {
        /** The Timelink clients returned by the API. */
        clients: Array<{
          /**
           * A Timelink ULID identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The client name. */
          name: string;
          /** The numeric company identifier linked to the client. */
          companyId: number | null;
          /** The external tool identifier linked to the client. */
          extToolId: number | null;
          /** The free-form client information text. */
          info: string | null;
          /** The client color value. */
          color: string | null;
          /** Whether the client is active. */
          active: boolean;
          /** Whether the client is billable by default. */
          billable: boolean;
          /** The client acronym. */
          acronym: string | null;
          /** The image identifier for this client. */
          imageId: string | null;
          /** Whether the client is a demo record. */
          demoFlag: boolean;
          /** The number of projects returned for the client when present. */
          projectCount: number | null;
          /** The number of active projects returned for the client when present. */
          activeProjectCount: number | null;
          /** The raw Timelink client object. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Timelink list endpoints. */
        pagination: {
          /** The current page number. */
          currentPage: number;
          /** The first item index on the current page. */
          from: number;
          /** The last available page number. */
          lastPage: number;
          /** The pagination links returned by Timelink. */
          links: Array<{
            /** The page URL. */
            url: string | null;
            /** The human-readable page label. */
            label: string;
            /** Whether this pagination link is active. */
            active: boolean;
          }>;
          /** The Timelink API path for this paginated response. */
          path: string;
          /** The number of items returned per page. */
          perPage: number;
          /** The last item index on the current page. */
          to: number;
          /** The total number of items across all pages. */
          total: number;
        };
      };
    };
    /** List Timelink projects with optional filtering and pagination parameters. */
    "timelink.list_projects": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * A search string matched by Timelink.
         * @minLength 1
         * @pattern \S
         */
        search?: string;
        /**
         * A list of Timelink record IDs to fetch.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * The Timelink sort rules to apply.
         * @minItems 1
         */
        orders?: Array<{
          /**
           * The Timelink field name used for sorting.
           * @minLength 1
           * @pattern \S
           */
          column: string;
          /** The sort direction. */
          direction: "asc" | "desc";
        }>;
        /** Filter projects by active state. */
        active?: boolean;
        /**
         * Filter projects by the linked client identifier.
         * @minLength 1
         * @pattern \S
         */
        clientId?: string;
      };
      output: {
        /** The Timelink projects returned by the API. */
        projects: Array<{
          /**
           * A Timelink ULID identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The project name. */
          name: string;
          /** The numeric client identifier linked to the project. */
          clientId: number | null;
          /** The external tool identifier linked to the project. */
          extToolId: number | null;
          /** The free-form project information text. */
          info: string | null;
          /** The project color value. */
          color: string | null;
          /** Whether the project is active. */
          active: boolean;
          /** Whether the project is billable by default. */
          billable: boolean;
          /** The project acronym. */
          acronym: string | null;
          /** The image identifier for this project. */
          imageId: string | null;
          /** Whether the project is a demo record. */
          demoFlag: boolean;
          /** The raw Timelink project object. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Timelink list endpoints. */
        pagination: {
          /** The current page number. */
          currentPage: number;
          /** The first item index on the current page. */
          from: number;
          /** The last available page number. */
          lastPage: number;
          /** The pagination links returned by Timelink. */
          links: Array<{
            /** The page URL. */
            url: string | null;
            /** The human-readable page label. */
            label: string;
            /** Whether this pagination link is active. */
            active: boolean;
          }>;
          /** The Timelink API path for this paginated response. */
          path: string;
          /** The number of items returned per page. */
          perPage: number;
          /** The last item index on the current page. */
          to: number;
          /** The total number of items across all pages. */
          total: number;
        };
      };
    };
    /** List Timelink services with optional filtering and pagination parameters. */
    "timelink.list_services": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * A search string matched by Timelink.
         * @minLength 1
         * @pattern \S
         */
        search?: string;
        /**
         * A list of Timelink record IDs to fetch.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * The Timelink sort rules to apply.
         * @minItems 1
         */
        orders?: Array<{
          /**
           * The Timelink field name used for sorting.
           * @minLength 1
           * @pattern \S
           */
          column: string;
          /** The sort direction. */
          direction: "asc" | "desc";
        }>;
        /** Filter services by active state. */
        active?: boolean;
      };
      output: {
        /** The Timelink services returned by the API. */
        services: Array<{
          /**
           * A Timelink ULID identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The service name. */
          name: string;
          /** The numeric company identifier linked to the service. */
          companyId: number | null;
          /** The external tool identifier linked to the service. */
          extToolId: number | null;
          /** The free-form service information text. */
          info: string | null;
          /** The service color value. */
          color: string | null;
          /** Whether the service is active. */
          active: boolean;
          /** Whether the service is billable by default. */
          billable: boolean;
          /** The service acronym. */
          acronym: string | null;
          /** The image identifier for this service. */
          imageId: string | null;
          /** The default time entry description configured for the service. */
          defaultTimeEntryDescription: string | null;
          /** The raw Timelink service object. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Timelink list endpoints. */
        pagination: {
          /** The current page number. */
          currentPage: number;
          /** The first item index on the current page. */
          from: number;
          /** The last available page number. */
          lastPage: number;
          /** The pagination links returned by Timelink. */
          links: Array<{
            /** The page URL. */
            url: string | null;
            /** The human-readable page label. */
            label: string;
            /** Whether this pagination link is active. */
            active: boolean;
          }>;
          /** The Timelink API path for this paginated response. */
          path: string;
          /** The number of items returned per page. */
          perPage: number;
          /** The last item index on the current page. */
          to: number;
          /** The total number of items across all pages. */
          total: number;
        };
      };
    };
    /** List Timelink time entries with optional filtering and pagination parameters. */
    "timelink.list_time_entries": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * A search string matched by Timelink.
         * @minLength 1
         * @pattern \S
         */
        search?: string;
        /**
         * A list of Timelink record IDs to fetch.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * The Timelink sort rules to apply.
         * @minItems 1
         */
        orders?: Array<{
          /**
           * The Timelink field name used for sorting.
           * @minLength 1
           * @pattern \S
           */
          column: string;
          /** The sort direction. */
          direction: "asc" | "desc";
        }>;
        /** Whether Timelink should include related entities. */
        withRelations?: boolean;
        /**
         * Filter time entries starting from this timestamp.
         * @format date-time
         */
        start?: string;
        /**
         * Filter time entries ending before this timestamp.
         * @format date-time
         */
        end?: string;
        /** Whether to return only deleted time entries. */
        onlyDeleted?: boolean;
        /** Filter time entries by interruption state. */
        isInterrupt?: boolean;
        /** Filter time entries by billed state. */
        isBilled?: boolean;
        /** Filter time entries by billable state. */
        isBillable?: boolean;
        /**
         * The Timelink description search mode or term passed through to the API.
         * @minLength 1
         * @pattern \S
         */
        searchInDescription?: string;
        /**
         * Filter time entries by client identifier.
         * @minLength 1
         * @pattern \S
         */
        clientId?: string;
        /**
         * Filter time entries by project identifier.
         * @minLength 1
         * @pattern \S
         */
        projectId?: string;
        /**
         * Filter time entries by service identifier.
         * @minLength 1
         * @pattern \S
         */
        serviceId?: string;
        /**
         * Filter time entries by user identifier.
         * @minLength 1
         * @pattern \S
         */
        userId?: string;
        /**
         * Filter time entries by multiple user identifiers.
         * @minItems 1
         */
        userIds?: Array<string>;
        /**
         * Filter time entries by external tool identifier.
         * @minLength 1
         * @pattern \S
         */
        extToolId?: string;
        /** Whether the Timelink search should be exact. */
        exact?: boolean;
      };
      output: {
        /** The Timelink time entries returned by the API. */
        timeEntries: Array<{
          /**
           * A Timelink ULID identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The user identifier linked to the time entry. */
          userId: string | null;
          /** The client identifier linked to the time entry. */
          clientId: string | null;
          /** The project identifier linked to the time entry. */
          projectId: string | null;
          /** The service identifier linked to the time entry. */
          serviceId: string | null;
          /** The time entry description. */
          description: string | null;
          /** Whether the time entry is billable. */
          billable: boolean;
          /** Whether the time entry has been billed. */
          billed: boolean;
          /**
           * When the time entry was billed.
           * @format date-time
           */
          billedAt: string | null;
          /** Whether the time entry is marked as an interruption. */
          isInterrupt: boolean;
          /**
           * When the time entry started.
           * @format date-time
           */
          startedAt: string;
          /**
           * When the time entry ended.
           * @format date-time
           */
          endedAt: string | null;
          /**
           * When the time entry was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * When the time entry was last updated.
           * @format date-time
           */
          updatedAt: string;
          /**
           * When the time entry was deleted.
           * @format date-time
           */
          deletedAt: string | null;
          /** The external tool identifier linked to the time entry. */
          extToolId: string | null;
          /** The temporary identifier used by Timelink clients. */
          tempId: string | null;
          /** The Timelink push state value. */
          pushState: number | null;
          /** The Timelink push errors. */
          pushErrors: Array<string>;
          /** The raw Timelink time entry object. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Timelink list endpoints. */
        pagination: {
          /** The current page number. */
          currentPage: number;
          /** The first item index on the current page. */
          from: number;
          /** The last available page number. */
          lastPage: number;
          /** The pagination links returned by Timelink. */
          links: Array<{
            /** The page URL. */
            url: string | null;
            /** The human-readable page label. */
            label: string;
            /** Whether this pagination link is active. */
            active: boolean;
          }>;
          /** The Timelink API path for this paginated response. */
          path: string;
          /** The number of items returned per page. */
          perPage: number;
          /** The last item index on the current page. */
          to: number;
          /** The total number of items across all pages. */
          total: number;
        };
      };
    };
    /** List the Timelink field names that are required for time entries. */
    "timelink.list_time_entry_required_fields": {
      input: Record<string, never>;
      output: {
        /** The required Timelink field names. */
        fields: Array<string>;
      };
    };
    /** List Timelink users with optional filtering and pagination parameters. */
    "timelink.list_users": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * A search string matched by Timelink.
         * @minLength 1
         * @pattern \S
         */
        search?: string;
        /**
         * A list of Timelink record IDs to fetch.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * The Timelink sort rules to apply.
         * @minItems 1
         */
        orders?: Array<{
          /**
           * The Timelink field name used for sorting.
           * @minLength 1
           * @pattern \S
           */
          column: string;
          /** The sort direction. */
          direction: "asc" | "desc";
        }>;
        /** Filter users by active state. */
        active?: boolean;
      };
      output: {
        /** The Timelink users returned by the API. */
        users: Array<{
          /** The user identifier. */
          id: string;
          /** The user's first name. */
          firstName: string;
          /** The user's last name. */
          lastName: string;
          /** The user's full name. */
          fullName: string;
          /** The user's email address. */
          email: string;
          /** The company identifier linked to the user. */
          companyId: string;
          /**
           * When the user's email was verified.
           * @format date-time
           */
          emailVerifiedAt: string | null;
          /** Whether the user is active. */
          active: boolean;
          /** The user's configured timezone. */
          timezone: string;
          /** The user's configured language. */
          language: string;
          /** The recent Timelink entities referenced by the user. */
          lastUsed: {
            /** The last used client identifiers. */
            clients: Array<string>;
            /** The last used project identifiers. */
            projects: Array<string>;
            /** The last used service identifiers. */
            services: Array<string>;
          };
          /** The raw Timelink user settings object. */
          settings: Record<string, unknown> | null;
          /** The raw Timelink user object. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned by Timelink list endpoints. */
        pagination: {
          /** The current page number. */
          currentPage: number;
          /** The first item index on the current page. */
          from: number;
          /** The last available page number. */
          lastPage: number;
          /** The pagination links returned by Timelink. */
          links: Array<{
            /** The page URL. */
            url: string | null;
            /** The human-readable page label. */
            label: string;
            /** Whether this pagination link is active. */
            active: boolean;
          }>;
          /** The Timelink API path for this paginated response. */
          path: string;
          /** The number of items returned per page. */
          perPage: number;
          /** The last item index on the current page. */
          to: number;
          /** The total number of items across all pages. */
          total: number;
        };
      };
    };
  }
}
