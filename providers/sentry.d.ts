import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one alert workflow in a Sentry organization by workflow id. */
    "sentry.get_alert": {
      input: {
        /**
         * The organization id or slug that owns the alert workflow.
         * @minLength 1
         */
        organizationIdOrSlug: string;
        /**
         * The alert workflow id to retrieve.
         * @minLength 1
         */
        alertId: string;
      };
      output: {
        /** The alert workflow details returned by Sentry. */
        alert: {
          /** The alert workflow id. */
          id: string;
          /** The alert workflow name. */
          name: string;
          /** The Sentry organization id that owns the alert. */
          organizationId: string | null;
          /** Whether the alert workflow is currently enabled. */
          enabled: boolean;
          /** The user identifier that created the alert, or null. */
          createdBy: string | null;
          /** The ISO 8601 timestamp when the alert was created. */
          dateCreated: string | null;
          /** The ISO 8601 timestamp when the alert was last updated. */
          dateUpdated: string | null;
          /** The environment configured on the alert, or null. */
          environment: string | null;
          /** The ISO 8601 timestamp when the alert last fired. */
          lastTriggered: string | null;
          /** The detector ids connected to the alert workflow. */
          detectorIds: Array<string>;
          /** The alert configuration payload returned by Sentry. */
          config: Record<string, unknown>;
          /** The primary trigger configuration returned by Sentry, or null. */
          triggers: {
            /** The alert trigger id, or null when absent. */
            id: string | null;
            /** The trigger logic type returned by Sentry, or null. */
            logicType: string | null;
            /** The alert trigger actions payload returned by Sentry. */
            actions: unknown;
            /** The alert trigger conditions payload returned by Sentry. */
            conditions: unknown;
            /** The organization id attached to the trigger, or null. */
            organizationId: string | null;
          } | null;
          /** The action filters attached to the alert workflow. */
          actionFilters: Array<{
            /** The action filter id, or null when absent. */
            id: string | null;
            /** The action filter actions payload returned by Sentry. */
            actions: unknown;
            /** The action filter logic type returned by Sentry, or null. */
            logicType: string | null;
            /** The action filter conditions payload returned by Sentry. */
            conditions: unknown;
            /** The organization id attached to the action filter, or null. */
            organizationId: string | null;
          }>;
        };
      };
    };
    /** Get one issue in a Sentry organization by numeric id or short id. */
    "sentry.get_issue": {
      input: {
        /**
         * The organization id or slug that owns the issue.
         * @minLength 1
         */
        organizationIdOrSlug: string;
        /**
         * The Sentry issue id or short id to retrieve.
         * @minLength 1
         */
        issueId: string;
      };
      output: {
        /** The issue details returned by Sentry. */
        issue: {
          /** The Sentry issue id. */
          id: string;
          /** The short issue id shown in the Sentry UI, or null. */
          shortId: string | null;
          /** The issue title returned by Sentry. */
          title: string | null;
          /** The culprit or transaction summary for the issue. */
          culprit: string | null;
          /** The highest event level currently associated with the issue. */
          level: string | null;
          /** The current Sentry status for the issue. */
          status: string | null;
          /** The occurrence count returned by Sentry for the issue. */
          count: string | null;
          /** The affected user count returned by Sentry. */
          userCount: number | null;
          /** The ISO 8601 timestamp when the issue was first seen. */
          firstSeen: string | null;
          /** The ISO 8601 timestamp when the issue was last seen. */
          lastSeen: string | null;
          /** The Sentry permalink for the issue. */
          permalink: string | null;
          /** The logger name attached to the issue, or null. */
          logger: string | null;
          /** Whether the current user bookmarked the issue. */
          isBookmarked: boolean;
          /** Whether the current user subscribed to the issue. */
          isSubscribed: boolean;
          /** Whether the current user marked the issue as seen. */
          hasSeen: boolean;
          /** Whether the issue is visible through a public permalink. */
          isPublic: boolean;
          /** The project that owns the issue, or null when Sentry omits it. */
          project: {
            /** The Sentry project id. */
            id: string;
            /** The project slug. */
            slug: string;
            /** The human-readable project name. */
            name: string;
            /** The primary platform configured for the project. */
            platform: string | null;
          } | null;
          /** The current issue assignee, or null when the issue is unassigned. */
          assignedTo: {
            /** The Sentry actor id. */
            id: string | null;
            /** The actor type such as user or team. */
            type: string | null;
            /** The actor display name. */
            name: string | null;
            /** The actor email address, when available. */
            email: string | null;
            /** The actor username, when available. */
            username: string | null;
          } | null;
          /** Additional Sentry resolution details for the issue, or null. */
          statusDetails: {
            /** The release version in which the issue is considered resolved, or null. */
            inRelease: string | null;
            /** The commit hash associated with the issue resolution, or null. */
            inCommit: string | null;
            /** Whether the issue is marked resolved in the next release, or null when absent. */
            inNextRelease: boolean | null;
          } | null;
          /** The issue metadata payload returned by Sentry. */
          metadata: unknown;
          /** The issue statistics payload returned by Sentry. */
          stats: unknown;
          /** The issue tags returned by Sentry. */
          tags: Array<{
            /** The tag key used by Sentry. */
            key: string;
            /** The tag display name shown in the Sentry UI. */
            name: string | null;
            /** The currently selected tag value, when Sentry includes it. */
            value: string | null;
          }>;
        };
      };
    };
    /** Get one event for a Sentry issue by event id, or use latest, oldest, or recommended selectors. */
    "sentry.get_issue_event": {
      input: {
        /**
         * The organization id or slug that owns the issue.
         * @minLength 1
         */
        organizationIdOrSlug: string;
        /**
         * The Sentry issue id whose event should be retrieved.
         * @minLength 1
         */
        issueId: string;
        /**
         * The event id or selector such as latest, oldest, or recommended.
         * @minLength 1
         */
        eventId: string;
        /** The environment names used to filter which issue event Sentry selects. */
        environments?: Array<string>;
      };
      output: {
        /** The issue event returned by Sentry. */
        event: {
          /** The Sentry event record id. */
          id: string;
          /** The stable event identifier returned as eventID by Sentry. */
          eventId: string | null;
          /** The parent Sentry issue id for this event. */
          issueId: string | null;
          /** The event title returned by Sentry. */
          title: string | null;
          /** The formatted event message returned by Sentry. */
          message: string | null;
          /** The platform that produced the event. */
          platform: string | null;
          /** The ISO 8601 timestamp when the event was created. */
          dateCreated: string | null;
          /** The normalized event user payload, or null when the event is anonymous. */
          user: {
            /** The event user id. */
            id: string | null;
            /** The event user email address. */
            email: string | null;
            /** The event user username. */
            username: string | null;
            /** The event user IP address. */
            ipAddress: string | null;
            /** The event user display name. */
            name: string | null;
          } | null;
          /** The event tags returned by Sentry. */
          tags: Array<{
            /** The event tag key. */
            key: string;
            /** The event tag value. */
            value: string;
          }>;
        };
      };
    };
    /** Get one installed Sentry organization integration by its integration id. */
    "sentry.get_organization_integration": {
      input: {
        /**
         * The Sentry organization id or slug that owns the integration.
         * @minLength 1
         */
        organizationIdOrSlug: string;
        /**
         * The installed integration id to retrieve.
         * @minLength 1
         */
        integrationId: string;
      };
      output: {
        /** The installed integration details. */
        integration: {
          /** The installed integration identifier. */
          id: string;
          /** The display name of the installed integration. */
          name: string;
          /** The icon URL for the installed integration. */
          icon: string | null;
          /** The provider domain associated with the integration, if any. */
          domainName: string | null;
          /** The provider account type associated with the integration. */
          accountType: string | null;
          /** The OAuth scopes or permissions granted to the installed integration. */
          scopes: Array<string> | null;
          /** The current integration status reported by Sentry. */
          status: string | null;
          /** The provider metadata for the installed integration. */
          provider: {
            /** The stable Sentry provider key. */
            key: string;
            /** The provider slug. */
            slug: string;
            /** The display name of the provider. */
            name: string;
            /** Whether the provider can be installed into the organization. */
            canAdd: boolean;
            /** Whether installed integrations from this provider can be disabled. */
            canDisable: boolean;
            /** The integration feature flags advertised by Sentry. */
            features: Array<string>;
            /** Additional provider aspects returned by Sentry. */
            aspects: Record<string, unknown>;
            /** Provider metadata returned by Sentry, or null when absent. */
            metadata: {
              /** The singular noun that the integration uses for installed accounts. */
              noun: string | null;
              /** The author or maintainer of the integration. */
              author: string | null;
              /** The provider description shown in Sentry. */
              description: string | null;
              /** The URL for reporting issues with the integration. */
              issueUrl: string | null;
              /** The URL to the provider source code, when available. */
              sourceUrl: string | null;
              /** Additional provider capability flags and configuration. */
              aspects: Record<string, unknown> | null;
              /** Feature metadata objects returned by Sentry for the provider. */
              features: Array<unknown>;
            } | null;
            /** Setup dialog metadata returned by Sentry, or null when absent. */
            setupDialog: {
              /** The URL used to open the provider setup dialog. */
              url: string | null;
              /** The setup dialog width in pixels. */
              width: number | null;
              /** The setup dialog height in pixels. */
              height: number | null;
            } | null;
          };
          /** The organization-level configuration payload returned for the integration. */
          configOrganization: Array<unknown>;
          /** The integration configuration data returned by Sentry. */
          configData: Record<string, unknown>;
          /** The provider-specific external identifier for the integration. */
          externalId: string | null;
          /** The Sentry organization id that owns the integration. */
          organizationId: number | null;
          /** The organization-to-integration relationship status reported by Sentry. */
          organizationIntegrationStatus: string | null;
          /** The ISO 8601 timestamp when the integration grace period ends, or null. */
          gracePeriodEnd: string | null;
        };
      };
    };
    /** List available integration provider configs for a Sentry organization, optionally filtered by provider key. */
    "sentry.get_organization_integration_config": {
      input: {
        /**
         * The Sentry organization id or slug whose integration config should be retrieved.
         * @minLength 1
         */
        organizationIdOrSlug: string;
        /**
         * Optional provider key filter such as slack, github, or jira.
         * @minLength 1
         */
        providerKey?: string;
      };
      output: {
        /** The integration provider configs returned by Sentry. */
        providers: Array<{
          /** The stable Sentry provider key. */
          key: string;
          /** The provider slug. */
          slug: string;
          /** The display name of the provider. */
          name: string;
          /** Whether the provider can be installed into the organization. */
          canAdd: boolean;
          /** Whether installed integrations from this provider can be disabled. */
          canDisable: boolean;
          /** The integration feature flags advertised by Sentry. */
          features: Array<string>;
          /** Additional provider aspects returned by Sentry. */
          aspects: Record<string, unknown>;
          /** Provider metadata returned by Sentry, or null when absent. */
          metadata: {
            /** The singular noun that the integration uses for installed accounts. */
            noun: string | null;
            /** The author or maintainer of the integration. */
            author: string | null;
            /** The provider description shown in Sentry. */
            description: string | null;
            /** The URL for reporting issues with the integration. */
            issueUrl: string | null;
            /** The URL to the provider source code, when available. */
            sourceUrl: string | null;
            /** Additional provider capability flags and configuration. */
            aspects: Record<string, unknown> | null;
            /** Feature metadata objects returned by Sentry for the provider. */
            features: Array<unknown>;
          } | null;
          /** Setup dialog metadata returned by Sentry, or null when absent. */
          setupDialog: {
            /** The URL used to open the provider setup dialog. */
            url: string | null;
            /** The setup dialog width in pixels. */
            width: number | null;
            /** The setup dialog height in pixels. */
            height: number | null;
          } | null;
        }>;
      };
    };
    /** Get one release in a Sentry organization, with optional health and summary statistics included. */
    "sentry.get_organization_release": {
      input: {
        /**
         * The organization id or slug that owns the release.
         * @minLength 1
         */
        organizationIdOrSlug: string;
        /**
         * The Sentry release version identifier to retrieve.
         * @minLength 1
         */
        version: string;
        /** Whether Sentry should include release health details in the response. */
        health?: boolean;
        /** The relative time period used for release summary statistics. */
        summaryStatsPeriod?: string;
        /** The relative time period used for release health statistics. */
        healthStatsPeriod?: string;
        /** Whether Sentry should include release adoption stage information. */
        adoptionStages?: boolean;
        /** An optional project id used to scope the release details. */
        projectId?: string;
        /** An optional Sentry query string used to filter release statistics. */
        query?: string;
        /** The sort field used for release statistics in the Sentry response. */
        sort?: string;
        /** An optional release status filter such as open or archived. */
        status?: string;
      };
      output: {
        /** The release details returned by Sentry. */
        release: {
          /** The Sentry release version identifier. */
          version: string;
          /** The shortened release version shown by Sentry. */
          shortVersion: string | null;
          /** The current Sentry status for the release. */
          status: string | null;
          /** The ISO 8601 timestamp when the release was created. */
          dateCreated: string | null;
          /** The ISO 8601 timestamp when the release was published. */
          dateReleased: string | null;
          /** The git reference associated with the release, or null. */
          ref: string | null;
          /** The release URL returned by Sentry, or null. */
          url: string | null;
          /** The number of new issue groups attributed to the release. */
          newGroups: number | null;
          /** The projects currently attached to the release. */
          projects: Array<{
            /** The numeric Sentry project id attached to the release. */
            id: number | null;
            /** The project slug attached to the release. */
            slug: string | null;
            /** The project display name attached to the release. */
            name: string | null;
          }>;
          /** The last commit payload returned by Sentry, if available. */
          lastCommit: unknown;
          /** The last deploy payload returned by Sentry, if available. */
          lastDeploy: unknown;
          /** The release health payload returned by Sentry, if requested. */
          healthData: unknown;
          /** The release statistics payload returned by Sentry, if requested. */
          stats: unknown;
        };
      };
    };
    /** Get one Sentry project by organization and project slug or id. */
    "sentry.get_project": {
      input: {
        /**
         * The organization id or slug that owns the project.
         * @minLength 1
         */
        organizationIdOrSlug: string;
        /**
         * The Sentry project id or slug to retrieve.
         * @minLength 1
         */
        projectIdOrSlug: string;
      };
      output: {
        /** The Sentry project details returned by Sentry. */
        project: {
          /** The Sentry project id. */
          id: string;
          /** The project slug. */
          slug: string;
          /** The human-readable project name. */
          name: string;
          /** The primary platform configured for the project. */
          platform: string | null;
          /** The project status label returned by Sentry. */
          status: string | null;
          /** The ISO 8601 timestamp when the project was created. */
          dateCreated: string | null;
          /** Whether the current user bookmarked the project. */
          isBookmarked: boolean;
          /** Whether the current user is a member of the project. */
          isMember: boolean;
          /** Whether the current user can access the project. */
          hasAccess: boolean;
          /** The enabled feature flags for the project. */
          features: Array<string>;
          /** The environment names currently associated with the project. */
          environments: Array<string>;
          /** The primary team returned by Sentry for the project, or null when absent. */
          team: {
            /** The Sentry team id. */
            id: string | null;
            /** The Sentry team slug. */
            slug: string | null;
            /** The human-readable Sentry team name. */
            name: string | null;
          } | null;
          /** All teams currently associated with the project. */
          teams: Array<{
            /** The Sentry team id. */
            id: string | null;
            /** The Sentry team slug. */
            slug: string | null;
            /** The human-readable Sentry team name. */
            name: string | null;
          }>;
        };
      };
    };
    /** Retrieve release health session statistics for one Sentry release by querying the sessions endpoint with that release version. */
    "sentry.get_release_health_stats": {
      input: {
        /**
         * The organization id or slug that owns the release.
         * @minLength 1
         */
        organizationIdOrSlug: string;
        /**
         * The Sentry release version to filter release health statistics by.
         * @minLength 1
         */
        version: string;
        /**
         * The session metric fields that Sentry should calculate.
         * @minItems 1
         */
        fields: Array<string>;
        /** The session dimensions that Sentry should group by. */
        groupBy?: Array<string>;
        /** An optional additional Sentry search query appended to the release filter. */
        query?: string;
        /** The inclusive ISO 8601 start time used to query release health data. */
        start?: string;
        /** The inclusive ISO 8601 end time used to query release health data. */
        end?: string;
        /** The environment names used to filter release health statistics. */
        environments?: Array<string>;
        /** The numeric Sentry project ids used to filter release health statistics. */
        projectIds?: Array<number>;
        /** The interval used for time-series release health statistics. */
        interval?: string;
        /** The relative time period such as 24h or 7d used for release health statistics. */
        statsPeriod?: string;
        /** Whether Sentry should include series data, using 1 for yes and 0 for no. */
        includeSeries?: number;
        /** Whether Sentry should include totals data, using 1 for yes and 0 for no. */
        includeTotals?: number;
        /**
         * The maximum number of grouped rows to return.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** The metric field Sentry should order the grouped rows by. */
        orderBy?: string;
      };
      output: {
        /** The grouped release health statistics returned by Sentry. */
        groups: Array<{
          /** The group-by values returned for this health row. */
          by: Record<string, unknown>;
          /** The aggregate metric totals returned for this row. */
          totals: Record<string, unknown>;
          /** The metric series returned for this row, or null when omitted. */
          series: Record<string, unknown> | null;
        }>;
        /** The interval boundaries returned by the Sentry sessions endpoint. */
        intervals: Array<string>;
        /** The ISO 8601 start time applied to the statistics query. */
        start: string | null;
        /** The ISO 8601 end time applied to the statistics query. */
        end: string | null;
      };
    };
    /** Get one replay instance in a Sentry organization by replay id. */
    "sentry.get_replay": {
      input: {
        /**
         * The organization id or slug that owns the replay.
         * @minLength 1
         */
        organizationIdOrSlug: string;
        /**
         * The replay id to retrieve.
         * @minLength 1
         */
        replayId: string;
        /** The inclusive ISO 8601 start time used to scope replay detail metrics. */
        start?: string;
        /** The inclusive ISO 8601 end time used to scope replay detail metrics. */
        end?: string;
        /** The relative time period such as 1h or 7d used to scope replay detail metrics. */
        statsPeriod?: string;
        /** The replay detail sort field returned by Sentry, optionally prefixed with -. */
        sort?: string;
        /** Additional replay detail fields that Sentry should include in the response. */
        field?: Array<string>;
        /** The Sentry replay search query string used to scope the replay detail response. */
        query?: string;
        /** The opaque Sentry pagination cursor for nested replay detail data. */
        cursor?: string;
        /** The numeric Sentry project ids used to scope replay details. */
        projectIds?: Array<number>;
        /**
         * The maximum number of nested replay detail rows to return.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** The environment name used to scope replay details. */
        environment?: string;
      };
      output: {
        /** The replay details returned by Sentry. */
        replay: {
          /** The replay id. */
          id: string;
          /** The numeric Sentry project id for the replay. */
          projectId: number | null;
          /** The replay environment, or null when absent. */
          environment: string | null;
          /** The replay platform, or null when absent. */
          platform: string | null;
          /** The ISO 8601 timestamp when the replay started. */
          startedAt: string | null;
          /** The ISO 8601 timestamp when the replay finished. */
          finishedAt: string | null;
          /** The replay duration in milliseconds, or null. */
          duration: number | null;
          /** The number of errors captured during the replay. */
          countErrors: number | null;
          /** The number of rage clicks captured during the replay. */
          countRageClicks: number | null;
          /** The number of dead clicks captured during the replay. */
          countDeadClicks: number | null;
          /** The number of replay segments captured by Sentry. */
          countSegments: number | null;
          /** The replay user summary, or null when absent. */
          user: {
            /** The replay user id, or null when absent. */
            id: string | null;
            /** The replay user email address, or null when absent. */
            email: string | null;
            /** The replay user username, or null when absent. */
            username: string | null;
            /** The replay user IP address, or null when absent. */
            ip: string | null;
          } | null;
          /** The replay browser summary, or null when absent. */
          browser: {
            /** The display name returned by Sentry, or null. */
            name: string | null;
            /** The version returned by Sentry, or null. */
            version: string | null;
          } | null;
          /** The replay operating system summary, or null when absent. */
          os: {
            /** The display name returned by Sentry, or null. */
            name: string | null;
            /** The version returned by Sentry, or null. */
            version: string | null;
          } | null;
          /** The replay device summary, or null when absent. */
          device: {
            /** The display name returned by Sentry, or null. */
            name: string | null;
            /** The version returned by Sentry, or null. */
            version: string | null;
          } | null;
          /** The releases associated with the replay. */
          releases: Array<string>;
        };
        /** The opaque Sentry cursor from the Link header for the next page, or null when there are no more results. */
        nextCursor: string | null;
        /** The opaque Sentry cursor from the Link header for the previous page, or null when there are no earlier results. */
        previousCursor: string | null;
      };
    };
    /** Get one Sentry App by id or slug, including integration metadata and OAuth client settings. */
    "sentry.get_sentry_app": {
      input: {
        /**
         * The Sentry App id or slug to retrieve from the global Sentry App registry.
         * @minLength 1
         */
        sentryAppIdOrSlug: string;
      };
      output: {
        /** The Sentry App details returned by Sentry. */
        sentryApp: {
          /** The display name of the Sentry App. */
          name: string;
          /** The Sentry App slug. */
          slug: string;
          /** The Sentry App UUID. */
          uuid: string;
          /** The owning organization for the Sentry App, or null when absent. */
          owner: {
            /** The numeric organization id that owns the Sentry App. */
            id: number | null;
            /** The slug of the organization that owns the Sentry App. */
            slug: string | null;
          } | null;
          /** The author or publisher of the Sentry App. */
          author: string | null;
          /** The webhook event subscriptions exposed by the Sentry App. */
          events: Array<string>;
          /** The UI schema or configuration payload for the Sentry App. */
          schema: unknown;
          /** The permission scopes requested by the Sentry App. */
          scopes: Array<string>;
          /** The publication status of the Sentry App. */
          status: string;
          /** The avatar variants available for the Sentry App. */
          avatars: Array<{
            /** The avatar type reported by Sentry. */
            avatarType: string;
            /** The avatar UUID reported by Sentry. */
            avatarUuid: string;
            /** The avatar image URL. */
            avatarUrl: string;
            /** Whether the avatar is a color variant. */
            color: boolean;
            /** The avatar photo classification. */
            photoType: string;
          }>;
          /** The OAuth client id configured for the Sentry App. */
          clientId: string | null;
          /** The custom metadata payload configured on the Sentry App. */
          metadata: unknown;
          /** The overview text shown for the Sentry App. */
          overview: string | null;
          /** The popularity count or score reported by Sentry. */
          popularity: number | null;
          /** The webhook URL configured for the Sentry App. */
          webhookUrl: string | null;
          /** Feature metadata returned for the Sentry App. */
          featureData: Array<unknown>;
          /** Whether the Sentry App can be used for alert actions. */
          isAlertable: boolean;
          /** The OAuth redirect URL configured for the Sentry App. */
          redirectUrl: string | null;
          /** Whether Sentry reports that the Sentry App has an OAuth client secret. */
          hasClientSecret: boolean;
          /** Whether installation of the Sentry App requires verification. */
          verifyInstall: boolean;
          /** The allowed CORS origins configured on the Sentry App. */
          allowedOrigins: Array<string>;
        };
      };
    };
    /** List alert workflows for a Sentry organization, with optional id, project, and search filters. */
    "sentry.list_alerts": {
      input: {
        /**
         * The organization id or slug whose alert workflows should be listed.
         * @minLength 1
         */
        organizationIdOrSlug: string;
        /** Specific alert workflow ids that Sentry should filter the list to. */
        ids?: Array<string>;
        /** An optional free-text search query used to filter alert workflows. */
        query?: string;
        /** The alert workflow sort field, optionally prefixed with - for descending. */
        sortBy?: string;
        /** The numeric Sentry project ids used to filter alert workflows. */
        projectIds?: Array<number>;
      };
      output: {
        /** The alert workflows returned by Sentry. */
        alerts: Array<{
          /** The alert workflow id. */
          id: string;
          /** The alert workflow name. */
          name: string;
          /** The Sentry organization id that owns the alert. */
          organizationId: string | null;
          /** Whether the alert workflow is currently enabled. */
          enabled: boolean;
          /** The user identifier that created the alert, or null. */
          createdBy: string | null;
          /** The ISO 8601 timestamp when the alert was created. */
          dateCreated: string | null;
          /** The ISO 8601 timestamp when the alert was last updated. */
          dateUpdated: string | null;
          /** The environment configured on the alert, or null. */
          environment: string | null;
          /** The ISO 8601 timestamp when the alert last fired. */
          lastTriggered: string | null;
          /** The detector ids connected to the alert workflow. */
          detectorIds: Array<string>;
          /** The alert configuration payload returned by Sentry. */
          config: Record<string, unknown>;
          /** The primary trigger configuration returned by Sentry, or null. */
          triggers: {
            /** The alert trigger id, or null when absent. */
            id: string | null;
            /** The trigger logic type returned by Sentry, or null. */
            logicType: string | null;
            /** The alert trigger actions payload returned by Sentry. */
            actions: unknown;
            /** The alert trigger conditions payload returned by Sentry. */
            conditions: unknown;
            /** The organization id attached to the trigger, or null. */
            organizationId: string | null;
          } | null;
          /** The action filters attached to the alert workflow. */
          actionFilters: Array<{
            /** The action filter id, or null when absent. */
            id: string | null;
            /** The action filter actions payload returned by Sentry. */
            actions: unknown;
            /** The action filter logic type returned by Sentry, or null. */
            logicType: string | null;
            /** The action filter conditions payload returned by Sentry. */
            conditions: unknown;
            /** The organization id attached to the action filter, or null. */
            organizationId: string | null;
          }>;
        }>;
      };
    };
    /** List events that belong to one Sentry issue, with optional event query filters. */
    "sentry.list_issue_events": {
      input: {
        /**
         * The organization id or slug that owns the issue.
         * @minLength 1
         */
        organizationIdOrSlug: string;
        /**
         * The Sentry issue id whose events should be listed.
         * @minLength 1
         */
        issueId: string;
        /** Whether Sentry should return full event payloads instead of summaries. */
        full?: boolean;
        /** Whether Sentry should return a deterministic sample of issue events. */
        sample?: boolean;
        /** The Sentry event search query string used to filter issue events. */
        query?: string;
        /** The inclusive ISO 8601 start time used to filter issue events. */
        start?: string;
        /** The inclusive ISO 8601 end time used to filter issue events. */
        end?: string;
        /** The environment names used to filter issue events. */
        environments?: Array<string>;
        /** The relative stats period such as 24h or 7d used to filter issue events. */
        statsPeriod?: string;
      };
      output: {
        /** The issue events returned by Sentry. */
        events: Array<{
          /** The Sentry event record id. */
          id: string;
          /** The stable event identifier returned as eventID by Sentry. */
          eventId: string | null;
          /** The parent Sentry issue id for this event. */
          issueId: string | null;
          /** The event title returned by Sentry. */
          title: string | null;
          /** The formatted event message returned by Sentry. */
          message: string | null;
          /** The platform that produced the event. */
          platform: string | null;
          /** The ISO 8601 timestamp when the event was created. */
          dateCreated: string | null;
          /** The normalized event user payload, or null when the event is anonymous. */
          user: {
            /** The event user id. */
            id: string | null;
            /** The event user email address. */
            email: string | null;
            /** The event user username. */
            username: string | null;
            /** The event user IP address. */
            ipAddress: string | null;
            /** The event user display name. */
            name: string | null;
          } | null;
          /** The event tags returned by Sentry. */
          tags: Array<{
            /** The event tag key. */
            key: string;
            /** The event tag value. */
            value: string;
          }>;
        }>;
      };
    };
    /** List installed integrations for a Sentry organization, with optional provider and feature filters. */
    "sentry.list_organization_integrations": {
      input: {
        /**
         * The Sentry organization id or slug whose installed integrations should be listed.
         * @minLength 1
         */
        organizationIdOrSlug: string;
        /**
         * Optional provider key filter such as slack, github, or jira.
         * @minLength 1
         */
        providerKey?: string;
        /** Whether to ask Sentry to include expanded third-party configuration details. */
        includeConfig?: boolean;
        /** Optional provider feature filters such as alert-rule or issue-sync. */
        features?: Array<string>;
      };
      output: {
        /** The installed integrations returned for the organization. */
        integrations: Array<{
          /** The installed integration identifier. */
          id: string;
          /** The display name of the installed integration. */
          name: string;
          /** The icon URL for the installed integration. */
          icon: string | null;
          /** The provider domain associated with the integration, if any. */
          domainName: string | null;
          /** The provider account type associated with the integration. */
          accountType: string | null;
          /** The OAuth scopes or permissions granted to the installed integration. */
          scopes: Array<string> | null;
          /** The current integration status reported by Sentry. */
          status: string | null;
          /** The provider metadata for the installed integration. */
          provider: {
            /** The stable Sentry provider key. */
            key: string;
            /** The provider slug. */
            slug: string;
            /** The display name of the provider. */
            name: string;
            /** Whether the provider can be installed into the organization. */
            canAdd: boolean;
            /** Whether installed integrations from this provider can be disabled. */
            canDisable: boolean;
            /** The integration feature flags advertised by Sentry. */
            features: Array<string>;
            /** Additional provider aspects returned by Sentry. */
            aspects: Record<string, unknown>;
            /** Provider metadata returned by Sentry, or null when absent. */
            metadata: {
              /** The singular noun that the integration uses for installed accounts. */
              noun: string | null;
              /** The author or maintainer of the integration. */
              author: string | null;
              /** The provider description shown in Sentry. */
              description: string | null;
              /** The URL for reporting issues with the integration. */
              issueUrl: string | null;
              /** The URL to the provider source code, when available. */
              sourceUrl: string | null;
              /** Additional provider capability flags and configuration. */
              aspects: Record<string, unknown> | null;
              /** Feature metadata objects returned by Sentry for the provider. */
              features: Array<unknown>;
            } | null;
            /** Setup dialog metadata returned by Sentry, or null when absent. */
            setupDialog: {
              /** The URL used to open the provider setup dialog. */
              url: string | null;
              /** The setup dialog width in pixels. */
              width: number | null;
              /** The setup dialog height in pixels. */
              height: number | null;
            } | null;
          };
          /** The organization-level configuration payload returned for the integration. */
          configOrganization: Array<unknown>;
          /** The integration configuration data returned by Sentry. */
          configData: Record<string, unknown>;
          /** The provider-specific external identifier for the integration. */
          externalId: string | null;
          /** The Sentry organization id that owns the integration. */
          organizationId: number | null;
          /** The organization-to-integration relationship status reported by Sentry. */
          organizationIntegrationStatus: string | null;
          /** The ISO 8601 timestamp when the integration grace period ends, or null. */
          gracePeriodEnd: string | null;
        }>;
      };
    };
    /** List issues for a Sentry organization with optional search, project, and environment filters. */
    "sentry.list_organization_issues": {
      input: {
        /**
         * The organization id or slug whose issues should be listed.
         * @minLength 1
         */
        organizationIdOrSlug: string;
        /** The Sentry issue search query string used to filter the results. */
        query?: string;
        /** The issue sort order such as date, freq, inbox, new, trends, or user. */
        sort?: string;
        /**
         * The maximum number of issues to return in one page.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** The inclusive ISO 8601 start time used to filter the issue results. */
        start?: string;
        /** The inclusive ISO 8601 end time used to filter the issue results. */
        end?: string;
        /** The opaque Sentry pagination cursor for the issue results. */
        cursor?: string;
        /** Additional issue data keys that Sentry should expand in the response. */
        expand?: Array<string>;
        /** Response sections that Sentry should collapse or omit from the payload. */
        collapse?: Array<string>;
        /** The environment names used to filter issues. */
        environments?: Array<string>;
        /** The numeric Sentry project ids used to filter issues. */
        projectIds?: Array<number>;
        /** The relative stats period such as 24h or 7d used for issue statistics. */
        statsPeriod?: string;
        /** Whether Sentry should parse short issue ids inside the query string. */
        shortIdLookup?: boolean;
        /** The issue group statistics window such as auto, 24h, or 14d. */
        groupStatsPeriod?: string;
        /** The Sentry saved view id whose filters should be applied. */
        viewId?: string;
      };
      output: {
        /** The issues returned by Sentry. */
        issues: Array<{
          /** The Sentry issue id. */
          id: string;
          /** The short issue id shown in the Sentry UI, or null. */
          shortId: string | null;
          /** The issue title returned by Sentry. */
          title: string | null;
          /** The culprit or transaction summary for the issue. */
          culprit: string | null;
          /** The highest event level currently associated with the issue. */
          level: string | null;
          /** The current Sentry status for the issue. */
          status: string | null;
          /** The occurrence count returned by Sentry for the issue. */
          count: string | null;
          /** The affected user count returned by Sentry. */
          userCount: number | null;
          /** The ISO 8601 timestamp when the issue was first seen. */
          firstSeen: string | null;
          /** The ISO 8601 timestamp when the issue was last seen. */
          lastSeen: string | null;
          /** The Sentry permalink for the issue. */
          permalink: string | null;
          /** The logger name attached to the issue, or null. */
          logger: string | null;
          /** Whether the current user bookmarked the issue. */
          isBookmarked: boolean;
          /** Whether the current user subscribed to the issue. */
          isSubscribed: boolean;
          /** Whether the current user marked the issue as seen. */
          hasSeen: boolean;
          /** Whether the issue is visible through a public permalink. */
          isPublic: boolean;
          /** The project that owns the issue, or null when Sentry omits it. */
          project: {
            /** The Sentry project id. */
            id: string;
            /** The project slug. */
            slug: string;
            /** The human-readable project name. */
            name: string;
            /** The primary platform configured for the project. */
            platform: string | null;
          } | null;
          /** The current issue assignee, or null when the issue is unassigned. */
          assignedTo: {
            /** The Sentry actor id. */
            id: string | null;
            /** The actor type such as user or team. */
            type: string | null;
            /** The actor display name. */
            name: string | null;
            /** The actor email address, when available. */
            email: string | null;
            /** The actor username, when available. */
            username: string | null;
          } | null;
          /** Additional Sentry resolution details for the issue, or null. */
          statusDetails: {
            /** The release version in which the issue is considered resolved, or null. */
            inRelease: string | null;
            /** The commit hash associated with the issue resolution, or null. */
            inCommit: string | null;
            /** Whether the issue is marked resolved in the next release, or null when absent. */
            inNextRelease: boolean | null;
          } | null;
          /** The issue metadata payload returned by Sentry. */
          metadata: unknown;
          /** The issue statistics payload returned by Sentry. */
          stats: unknown;
          /** The issue tags returned by Sentry. */
          tags: Array<{
            /** The tag key used by Sentry. */
            key: string;
            /** The tag display name shown in the Sentry UI. */
            name: string | null;
            /** The currently selected tag value, when Sentry includes it. */
            value: string | null;
          }>;
        }>;
        /** The opaque Sentry cursor from the Link header for the next page, or null when there are no more results. */
        nextCursor: string | null;
        /** The opaque Sentry cursor from the Link header for the previous page, or null when there are no earlier results. */
        previousCursor: string | null;
      };
    };
    /** List projects that belong to a Sentry organization. */
    "sentry.list_organization_projects": {
      input: {
        /**
         * The Sentry organization id or slug whose projects should be listed.
         * @minLength 1
         */
        organizationIdOrSlug: string;
        /**
         * The opaque Sentry pagination cursor for the next or previous page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The projects returned by Sentry. */
        projects: Array<{
          /** The Sentry project id. */
          id: string;
          /** The project slug. */
          slug: string;
          /** The human-readable project name. */
          name: string;
          /** The primary platform configured for the project. */
          platform: string | null;
          /** The project status label returned by Sentry. */
          status: string | null;
          /** The ISO 8601 timestamp when the project was created. */
          dateCreated: string | null;
          /** Whether the current user bookmarked the project. */
          isBookmarked: boolean;
          /** Whether the current user is a member of the project. */
          isMember: boolean;
          /** Whether the current user can access the project. */
          hasAccess: boolean;
          /** The enabled feature flags for the project. */
          features: Array<string>;
          /** The environment names currently associated with the project. */
          environments: Array<string>;
          /** The primary team returned by Sentry for the project, or null when absent. */
          team: {
            /** The Sentry team id. */
            id: string | null;
            /** The Sentry team slug. */
            slug: string | null;
            /** The human-readable Sentry team name. */
            name: string | null;
          } | null;
          /** All teams currently associated with the project. */
          teams: Array<{
            /** The Sentry team id. */
            id: string | null;
            /** The Sentry team slug. */
            slug: string | null;
            /** The human-readable Sentry team name. */
            name: string | null;
          }>;
        }>;
        /** The opaque Sentry cursor from the Link header for the next page, or null when there are no more results. */
        nextCursor: string | null;
        /** The opaque Sentry cursor from the Link header for the previous page, or null when there are no earlier results. */
        previousCursor: string | null;
      };
    };
    /** List releases that belong to a Sentry organization, optionally filtered by version prefix. */
    "sentry.list_organization_releases": {
      input: {
        /**
         * The organization id or slug whose releases should be listed.
         * @minLength 1
         */
        organizationIdOrSlug: string;
        /** An optional release version prefix used to filter the release list. */
        query?: string;
      };
      output: {
        /** The releases returned by Sentry. */
        releases: Array<{
          /** The Sentry release version identifier. */
          version: string;
          /** The shortened release version shown by Sentry. */
          shortVersion: string | null;
          /** The current Sentry status for the release. */
          status: string | null;
          /** The ISO 8601 timestamp when the release was created. */
          dateCreated: string | null;
          /** The ISO 8601 timestamp when the release was published. */
          dateReleased: string | null;
          /** The git reference associated with the release, or null. */
          ref: string | null;
          /** The release URL returned by Sentry, or null. */
          url: string | null;
          /** The number of new issue groups attributed to the release. */
          newGroups: number | null;
          /** The projects currently attached to the release. */
          projects: Array<{
            /** The numeric Sentry project id attached to the release. */
            id: number | null;
            /** The project slug attached to the release. */
            slug: string | null;
            /** The project display name attached to the release. */
            name: string | null;
          }>;
          /** The last commit payload returned by Sentry, if available. */
          lastCommit: unknown;
          /** The last deploy payload returned by Sentry, if available. */
          lastDeploy: unknown;
          /** The release health payload returned by Sentry, if requested. */
          healthData: unknown;
          /** The release statistics payload returned by Sentry, if requested. */
          stats: unknown;
        }>;
      };
    };
    /** List session replays for a Sentry organization, with optional project and environment filters. */
    "sentry.list_organization_replays": {
      input: {
        /**
         * The organization id or slug whose replays should be listed.
         * @minLength 1
         */
        organizationIdOrSlug: string;
        /** The inclusive ISO 8601 start time used to filter replays. */
        start?: string;
        /** The inclusive ISO 8601 end time used to filter replays. */
        end?: string;
        /** The relative time period such as 1d or 7d used to filter replays. */
        statsPeriod?: string;
        /** The replay sort field returned by Sentry, optionally prefixed with -. */
        sort?: string;
        /** Additional replay fields that Sentry should include in each result. */
        field?: Array<string>;
        /** The Sentry replay search query string used to filter results. */
        query?: string;
        /** The opaque Sentry pagination cursor for the replay results. */
        cursor?: string;
        /** The numeric Sentry project ids used to filter replays. */
        projectIds?: Array<number>;
        /**
         * The maximum number of replay rows to return.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** The environment name used to filter replays. */
        environment?: string;
      };
      output: {
        /** The replays returned by Sentry. */
        replays: Array<{
          /** The replay id. */
          id: string;
          /** The numeric Sentry project id for the replay. */
          projectId: number | null;
          /** The replay environment, or null when absent. */
          environment: string | null;
          /** The replay platform, or null when absent. */
          platform: string | null;
          /** The ISO 8601 timestamp when the replay started. */
          startedAt: string | null;
          /** The ISO 8601 timestamp when the replay finished. */
          finishedAt: string | null;
          /** The replay duration in milliseconds, or null. */
          duration: number | null;
          /** The number of errors captured during the replay. */
          countErrors: number | null;
          /** The number of rage clicks captured during the replay. */
          countRageClicks: number | null;
          /** The number of dead clicks captured during the replay. */
          countDeadClicks: number | null;
          /** The number of replay segments captured by Sentry. */
          countSegments: number | null;
          /** The replay user summary, or null when absent. */
          user: {
            /** The replay user id, or null when absent. */
            id: string | null;
            /** The replay user email address, or null when absent. */
            email: string | null;
            /** The replay user username, or null when absent. */
            username: string | null;
            /** The replay user IP address, or null when absent. */
            ip: string | null;
          } | null;
          /** The replay browser summary, or null when absent. */
          browser: {
            /** The display name returned by Sentry, or null. */
            name: string | null;
            /** The version returned by Sentry, or null. */
            version: string | null;
          } | null;
          /** The replay operating system summary, or null when absent. */
          os: {
            /** The display name returned by Sentry, or null. */
            name: string | null;
            /** The version returned by Sentry, or null. */
            version: string | null;
          } | null;
          /** The replay device summary, or null when absent. */
          device: {
            /** The display name returned by Sentry, or null. */
            name: string | null;
            /** The version returned by Sentry, or null. */
            version: string | null;
          } | null;
          /** The releases associated with the replay. */
          releases: Array<string>;
        }>;
        /** The opaque Sentry cursor from the Link header for the next page, or null when there are no more results. */
        nextCursor: string | null;
        /** The opaque Sentry cursor from the Link header for the previous page, or null when there are no earlier results. */
        previousCursor: string | null;
      };
    };
    /** List the custom Sentry Apps created by a Sentry organization. */
    "sentry.list_organization_sentry_apps": {
      input: {
        /**
         * The Sentry organization id or slug whose custom Sentry Apps should be listed.
         * @minLength 1
         */
        organizationIdOrSlug: string;
      };
      output: {
        /** The custom Sentry Apps returned for the organization. */
        sentryApps: Array<{
          /** The display name of the Sentry App. */
          name: string;
          /** The Sentry App slug. */
          slug: string;
          /** The Sentry App UUID. */
          uuid: string;
          /** The owning organization for the Sentry App, or null when absent. */
          owner: {
            /** The numeric organization id that owns the Sentry App. */
            id: number | null;
            /** The slug of the organization that owns the Sentry App. */
            slug: string | null;
          } | null;
          /** The author or publisher of the Sentry App. */
          author: string | null;
          /** The webhook event subscriptions exposed by the Sentry App. */
          events: Array<string>;
          /** The UI schema or configuration payload for the Sentry App. */
          schema: unknown;
          /** The permission scopes requested by the Sentry App. */
          scopes: Array<string>;
          /** The publication status of the Sentry App. */
          status: string;
          /** The avatar variants available for the Sentry App. */
          avatars: Array<{
            /** The avatar type reported by Sentry. */
            avatarType: string;
            /** The avatar UUID reported by Sentry. */
            avatarUuid: string;
            /** The avatar image URL. */
            avatarUrl: string;
            /** Whether the avatar is a color variant. */
            color: boolean;
            /** The avatar photo classification. */
            photoType: string;
          }>;
          /** The OAuth client id configured for the Sentry App. */
          clientId: string | null;
          /** The custom metadata payload configured on the Sentry App. */
          metadata: unknown;
          /** The overview text shown for the Sentry App. */
          overview: string | null;
          /** The popularity count or score reported by Sentry. */
          popularity: number | null;
          /** The webhook URL configured for the Sentry App. */
          webhookUrl: string | null;
          /** Feature metadata returned for the Sentry App. */
          featureData: Array<unknown>;
          /** Whether the Sentry App can be used for alert actions. */
          isAlertable: boolean;
          /** The OAuth redirect URL configured for the Sentry App. */
          redirectUrl: string | null;
          /** Whether Sentry reports that the Sentry App has an OAuth client secret. */
          hasClientSecret: boolean;
          /** Whether installation of the Sentry App requires verification. */
          verifyInstall: boolean;
          /** The allowed CORS origins configured on the Sentry App. */
          allowedOrigins: Array<string>;
        }>;
      };
    };
    /** Update mutable attributes on one Sentry issue, such as status, assignment, or bookmarks. */
    "sentry.update_issue": {
      input: {
        /**
         * The organization id or slug that owns the issue.
         * @minLength 1
         */
        organizationIdOrSlug: string;
        /**
         * The Sentry issue id to update.
         * @minLength 1
         */
        issueId: string;
        /** The new issue status such as resolved, resolvedInNextRelease, unresolved, or ignored. */
        status?: string;
        /** Whether the current user has seen the issue after this update. */
        hasSeen?: boolean;
        /** Whether the issue should be visible via a public permalink. */
        isPublic?: boolean;
        /** The assignee actor id, username, or email address; use an empty string to unassign. */
        assignedTo?: string;
        /** Whether the current user should bookmark the issue after this update. */
        isBookmarked?: boolean;
        /** Whether the current user should subscribe to issue notifications. */
        isSubscribed?: boolean;
        /** Additional issue resolution details sent to Sentry. */
        statusDetails?: {
          /** The commit hash associated with the issue resolution. */
          inCommit?: string;
          /** The release version in which the issue is considered resolved. */
          inRelease?: string;
          /** Whether the issue is considered resolved in the next release. */
          inNextRelease?: boolean;
        };
      };
      output: {
        /** The updated issue payload returned by Sentry. */
        issue: {
          /** The Sentry issue id. */
          id: string;
          /** The short issue id shown in the Sentry UI, or null. */
          shortId: string | null;
          /** The issue title returned by Sentry. */
          title: string | null;
          /** The culprit or transaction summary for the issue. */
          culprit: string | null;
          /** The highest event level currently associated with the issue. */
          level: string | null;
          /** The current Sentry status for the issue. */
          status: string | null;
          /** The occurrence count returned by Sentry for the issue. */
          count: string | null;
          /** The affected user count returned by Sentry. */
          userCount: number | null;
          /** The ISO 8601 timestamp when the issue was first seen. */
          firstSeen: string | null;
          /** The ISO 8601 timestamp when the issue was last seen. */
          lastSeen: string | null;
          /** The Sentry permalink for the issue. */
          permalink: string | null;
          /** The logger name attached to the issue, or null. */
          logger: string | null;
          /** Whether the current user bookmarked the issue. */
          isBookmarked: boolean;
          /** Whether the current user subscribed to the issue. */
          isSubscribed: boolean;
          /** Whether the current user marked the issue as seen. */
          hasSeen: boolean;
          /** Whether the issue is visible through a public permalink. */
          isPublic: boolean;
          /** The project that owns the issue, or null when Sentry omits it. */
          project: {
            /** The Sentry project id. */
            id: string;
            /** The project slug. */
            slug: string;
            /** The human-readable project name. */
            name: string;
            /** The primary platform configured for the project. */
            platform: string | null;
          } | null;
          /** The current issue assignee, or null when the issue is unassigned. */
          assignedTo: {
            /** The Sentry actor id. */
            id: string | null;
            /** The actor type such as user or team. */
            type: string | null;
            /** The actor display name. */
            name: string | null;
            /** The actor email address, when available. */
            email: string | null;
            /** The actor username, when available. */
            username: string | null;
          } | null;
          /** Additional Sentry resolution details for the issue, or null. */
          statusDetails: {
            /** The release version in which the issue is considered resolved, or null. */
            inRelease: string | null;
            /** The commit hash associated with the issue resolution, or null. */
            inCommit: string | null;
            /** Whether the issue is marked resolved in the next release, or null when absent. */
            inNextRelease: boolean | null;
          } | null;
          /** The issue metadata payload returned by Sentry. */
          metadata: unknown;
          /** The issue statistics payload returned by Sentry. */
          stats: unknown;
          /** The issue tags returned by Sentry. */
          tags: Array<{
            /** The tag key used by Sentry. */
            key: string;
            /** The tag display name shown in the Sentry UI. */
            name: string | null;
            /** The currently selected tag value, when Sentry includes it. */
            value: string | null;
          }>;
        };
      };
    };
  }
}
