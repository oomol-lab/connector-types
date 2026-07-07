import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details for a Xata branch by organizationID, projectID, and branchID. */
    "xata.get_branch": {
      input: {
        /**
         * The Xata organizationID path parameter.
         * @minLength 1
         */
        organizationID: string;
        /**
         * The Xata projectID path parameter.
         * @minLength 1
         */
        projectID: string;
        /**
         * The Xata branchID path parameter.
         * @minLength 1
         */
        branchID: string;
      };
      output: {
        /** A normalized Xata branch. */
        branch: {
          /** The unique Xata branch ID. */
          id: string;
          /** The Xata branch name. */
          name: string;
          /**
           * The timestamp when Xata created the branch.
           * @format date-time
           */
          createdAt: string;
          /**
           * The timestamp when Xata last updated the branch.
           * @format date-time
           */
          updatedAt: string;
          /** The region where the Xata branch is deployed. */
          region: string;
          /** Whether the branch allows public access. */
          publicAccess: boolean;
          /** Whether backups are enabled for the branch. */
          backupsEnabled: boolean;
          /** The branch description when one is present. */
          description: string | null;
          /** The parent branch ID when one is present. */
          parentID: string | null;
          /** The database connection string returned by Xata when present. */
          connectionString: string | null;
          /** The status object returned by Xata. */
          status: Record<string, unknown>;
          /** The scaleToZero object returned by Xata. */
          scaleToZero: Record<string, unknown>;
          /** The configuration object returned by Xata. */
          configuration: Record<string, unknown>;
          /** The raw branch object returned by Xata. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get details for a Xata organization by organizationID. */
    "xata.get_organization": {
      input: {
        /**
         * The Xata organizationID path parameter.
         * @minLength 1
         */
        organizationID: string;
      };
      output: {
        /** A normalized Xata organization. */
        organization: {
          /** The unique Xata organization ID. */
          id: string;
          /** The Xata organization name. */
          name: string;
          /** The status object returned by Xata. */
          status: Record<string, unknown>;
          /** The marketplace provider for the organization, if present. */
          marketplace: string | null;
          /** The raw organization object returned by Xata. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get details for a Xata project by organizationID and projectID. */
    "xata.get_project": {
      input: {
        /**
         * The Xata organizationID path parameter.
         * @minLength 1
         */
        organizationID: string;
        /**
         * The Xata projectID path parameter.
         * @minLength 1
         */
        projectID: string;
      };
      output: {
        /** A normalized Xata project. */
        project: {
          /** The unique Xata project ID. */
          id: string;
          /** The Xata project name. */
          name: string;
          /**
           * The timestamp when Xata created the project.
           * @format date-time
           */
          createdAt: string;
          /**
           * The timestamp when Xata last updated the project.
           * @format date-time
           */
          updatedAt: string;
          /** The configuration object returned by Xata. */
          configuration: Record<string, unknown>;
          /** The raw project object returned by Xata. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Xata regions where new branches can be deployed for an organization. */
    "xata.list_available_regions": {
      input: {
        /**
         * The Xata organizationID path parameter.
         * @minLength 1
         */
        organizationID: string;
      };
      output: {
        /** The Xata regions returned by the API. */
        regions: Array<{
          /** The unique Xata region ID. */
          id: string;
          /** Whether the region supports public data-plane access. */
          publicAccess: boolean;
          /** Whether backups are enabled for branches created in this region. */
          backupsEnabled: boolean;
          /** The cloud provider that runs the region. */
          provider: string;
          /** The organization that owns the region when the region is private. */
          organizationId: string | null;
          /** The raw region object returned by Xata. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Xata branches within a project. */
    "xata.list_branches": {
      input: {
        /**
         * The Xata organizationID path parameter.
         * @minLength 1
         */
        organizationID: string;
        /**
         * The Xata projectID path parameter.
         * @minLength 1
         */
        projectID: string;
      };
      output: {
        /** The Xata branches returned by the API. */
        branches: Array<{
          /** The unique Xata branch ID. */
          id: string;
          /** The Xata branch name. */
          name: string;
          /**
           * The timestamp when Xata created the branch.
           * @format date-time
           */
          createdAt: string;
          /**
           * The timestamp when Xata last updated the branch.
           * @format date-time
           */
          updatedAt: string;
          /** The region where the Xata branch is deployed. */
          region: string;
          /** Whether the branch allows public access. */
          publicAccess: boolean;
          /** Whether backups are enabled for the branch. */
          backupsEnabled: boolean;
          /** The branch description when one is present. */
          description: string | null;
          /** The parent branch ID when one is present. */
          parentID: string | null;
          /** The raw branch object returned by Xata. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Xata organizations available to the authenticated API key. */
    "xata.list_organizations": {
      input: Record<string, never>;
      output: {
        /** The Xata organizations returned by the API. */
        organizations: Array<{
          /** The unique Xata organization ID. */
          id: string;
          /** The Xata organization name. */
          name: string;
          /** The status object returned by Xata. */
          status: Record<string, unknown>;
          /** The marketplace provider for the organization, if present. */
          marketplace: string | null;
          /** The raw organization object returned by Xata. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Xata projects within an organization. */
    "xata.list_projects": {
      input: {
        /**
         * The Xata organizationID path parameter.
         * @minLength 1
         */
        organizationID: string;
      };
      output: {
        /** The Xata projects returned by the API. */
        projects: Array<{
          /** The unique Xata project ID. */
          id: string;
          /** The Xata project name. */
          name: string;
          /**
           * The timestamp when Xata created the project.
           * @format date-time
           */
          createdAt: string;
          /**
           * The timestamp when Xata last updated the project.
           * @format date-time
           */
          updatedAt: string;
          /** The configuration object returned by Xata. */
          configuration: Record<string, unknown>;
          /** The raw project object returned by Xata. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
