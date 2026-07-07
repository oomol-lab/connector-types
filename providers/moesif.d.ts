import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a Moesif workspace by ID. */
    "moesif.get_workspace": {
      input: {
        /**
         * The Moesif workspace ID.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The Moesif organization path segment. Use the default ~ value for the current organization.
         * @minLength 1
         */
        organizationId?: string;
        /**
         * The Moesif app ID. Use the default ~ value for the current app.
         * @minLength 1
         */
        appId?: string;
      };
      output: {
        /** A normalized Moesif workspace. */
        workspace: {
          /** The Moesif workspace ID. */
          id: string | null;
          /** The workspace name when returned. */
          name: string | null;
          /** The app ID associated with the workspace when returned. */
          appId: string | null;
          /** The organization ID associated with the workspace. */
          organizationId: string | null;
          /** The Moesif workspace type when returned. */
          type: string | null;
          /** Whether this is the default workspace when returned. */
          isDefault: boolean | null;
          /** Whether this workspace is a template when returned. */
          isTemplate: boolean | null;
          /** The workspace view count when returned. */
          viewCount: number | null;
          /** The workspace creation timestamp when returned. */
          created: string | null;
          /** The raw workspace object returned by Moesif. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List apps in the selected Moesif organization. */
    "moesif.list_apps": {
      input: {
        /**
         * The Moesif organization path segment. Use the default ~ value for the current organization.
         * @minLength 1
         */
        organizationId?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        take?: number;
        /**
         * The cursor ID used to fetch records before that item.
         * @minLength 1
         */
        beforeId?: string;
      };
      output: {
        /** The Moesif apps returned by the API. */
        apps: Array<{
          /** The Moesif app ID. */
          id: string | null;
          /** The Moesif app name. */
          name: string;
          /** The custom app ID when configured. */
          customAppId: string | null;
          /** The app search API base URL when returned. */
          searchApiBaseUrl: string | null;
          /** The app portal API base URL when returned. */
          portalApiBaseUrl: string | null;
          /** The app time zone when returned. */
          timeZone: string | null;
          /** The first day of the app week when returned. */
          weekStartsOn: number | null;
          /** Whether secure proxy is enabled for the app. */
          secureProxy: boolean | null;
          /** The raw app object returned by Moesif. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Moesif workspace templates for an app. */
    "moesif.list_workspace_templates": {
      input: {
        /**
         * The Moesif organization path segment. Use the default ~ value for the current organization.
         * @minLength 1
         */
        organizationId?: string;
        /**
         * The Moesif app ID. Use the default ~ value for the current app.
         * @minLength 1
         */
        appId?: string;
      };
      output: {
        /** The Moesif workspace templates returned by the API. */
        templates: Array<{
          /** The Moesif workspace ID. */
          id: string | null;
          /** The workspace name when returned. */
          name: string | null;
          /** The app ID associated with the workspace when returned. */
          appId: string | null;
          /** The organization ID associated with the workspace. */
          organizationId: string | null;
          /** The Moesif workspace type when returned. */
          type: string | null;
          /** Whether this is the default workspace when returned. */
          isDefault: boolean | null;
          /** Whether this workspace is a template when returned. */
          isTemplate: boolean | null;
          /** The workspace view count when returned. */
          viewCount: number | null;
          /** The workspace creation timestamp when returned. */
          created: string | null;
          /** The raw workspace object returned by Moesif. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Moesif workspaces for an app with access filters. */
    "moesif.list_workspaces": {
      input: {
        /**
         * The Moesif organization path segment. Use the default ~ value for the current organization.
         * @minLength 1
         */
        organizationId?: string;
        /**
         * The Moesif app ID. Use the default ~ value for the current app.
         * @minLength 1
         */
        appId?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        take?: number;
        /**
         * The cursor ID used to fetch records before that item.
         * @minLength 1
         */
        beforeId?: string;
        /**
         * The Moesif workspace access filters to request.
         * @minItems 1
         */
        access: Array<string>;
      };
      output: {
        /** The Moesif workspaces returned by the API. */
        workspaces: Array<{
          /** The Moesif workspace ID. */
          id: string | null;
          /** The workspace name when returned. */
          name: string | null;
          /** The app ID associated with the workspace when returned. */
          appId: string | null;
          /** The organization ID associated with the workspace. */
          organizationId: string | null;
          /** The Moesif workspace type when returned. */
          type: string | null;
          /** Whether this is the default workspace when returned. */
          isDefault: boolean | null;
          /** Whether this workspace is a template when returned. */
          isTemplate: boolean | null;
          /** The workspace view count when returned. */
          viewCount: number | null;
          /** The workspace creation timestamp when returned. */
          created: string | null;
          /** The raw workspace object returned by Moesif. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
