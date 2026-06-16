import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Formbricks contact with a workspace-scoped attributes object. */
    "formbricks.create_contact": {
      input: {
        /**
         * The Formbricks workspace identifier used by this action.
         * @minLength 1
         * @pattern \S
         */
        workspaceId: string;
        /**
         * The deprecated environment identifier alias accepted by Formbricks for compatibility.
         * @minLength 1
         * @pattern \S
         */
        environmentId?: string;
        /** The Formbricks contact attributes object. It must include a valid email address. */
        attributes: {
          /**
           * The contact email address used by Formbricks as the unique identifier.
           * @format email
           */
          email: string;
          [key: string]: string;
        };
      };
      output: {
        /** A normalized Formbricks contact returned by the connector. */
        contact: {
          /**
           * The Formbricks contact identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The ISO timestamp when the contact was created.
           * @minLength 1
           * @pattern \S
           */
          createdAt: string;
          /**
           * The workspace identifier that owns the contact.
           * @minLength 1
           * @pattern \S
           */
          workspaceId: string;
          /** The deprecated environment identifier alias returned by Formbricks. */
          environmentId: string | null;
          /** The string-valued contact attributes stored in Formbricks. */
          attributes: Record<string, string>;
          /** The raw Formbricks contact payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create one Formbricks contact attribute key inside a workspace. */
    "formbricks.create_contact_attribute_key": {
      input: {
        /**
         * The Formbricks workspace identifier used by this action.
         * @minLength 1
         * @pattern \S
         */
        workspaceId: string;
        /**
         * The deprecated environment identifier alias accepted by Formbricks for compatibility.
         * @minLength 1
         * @pattern \S
         */
        environmentId?: string;
        /**
         * The machine-readable attribute key to create in Formbricks.
         * @minLength 1
         * @pattern \S
         */
        key: string;
        /**
         * The display name for the new Formbricks attribute key.
         * @minLength 1
         * @pattern \S
         */
        name: string | null;
        /**
         * The description for the new Formbricks attribute key.
         * @minLength 1
         * @pattern \S
         */
        description: string | null;
      };
      output: {
        /** A normalized Formbricks contact attribute key. */
        contactAttributeKey: {
          /**
           * The Formbricks contact attribute key identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The ISO timestamp when the attribute key was created.
           * @minLength 1
           * @pattern \S
           */
          createdAt: string;
          /**
           * The ISO timestamp when the attribute key was last updated.
           * @minLength 1
           * @pattern \S
           */
          updatedAt: string;
          /** Whether the attribute key is marked as unique across contacts in the workspace. */
          isUnique: boolean;
          /**
           * The machine-readable attribute key used in Formbricks.
           * @minLength 1
           * @pattern \S
           */
          key: string;
          /**
           * The display name configured for the attribute key.
           * @minLength 1
           * @pattern \S
           */
          name: string | null;
          /**
           * The description configured for the attribute key.
           * @minLength 1
           * @pattern \S
           */
          description: string | null;
          /** Whether Formbricks marks this key as default or custom. */
          type: "default" | "custom";
          /**
           * The workspace identifier that owns the attribute key.
           * @minLength 1
           * @pattern \S
           */
          workspaceId: string;
          /** The deprecated environment identifier alias returned by Formbricks. */
          environmentId: string | null;
          /** The raw Formbricks contact attribute key payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete one Formbricks contact attribute key by its identifier. */
    "formbricks.delete_contact_attribute_key": {
      input: {
        /**
         * The Formbricks contact attribute key identifier to fetch, update, or delete.
         * @minLength 1
         * @pattern \S
         */
        contactAttributeKeyId: string;
      };
      output: {
        /** A normalized Formbricks contact attribute key. */
        contactAttributeKey: {
          /**
           * The Formbricks contact attribute key identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The ISO timestamp when the attribute key was created.
           * @minLength 1
           * @pattern \S
           */
          createdAt: string;
          /**
           * The ISO timestamp when the attribute key was last updated.
           * @minLength 1
           * @pattern \S
           */
          updatedAt: string;
          /** Whether the attribute key is marked as unique across contacts in the workspace. */
          isUnique: boolean;
          /**
           * The machine-readable attribute key used in Formbricks.
           * @minLength 1
           * @pattern \S
           */
          key: string;
          /**
           * The display name configured for the attribute key.
           * @minLength 1
           * @pattern \S
           */
          name: string | null;
          /**
           * The description configured for the attribute key.
           * @minLength 1
           * @pattern \S
           */
          description: string | null;
          /** Whether Formbricks marks this key as default or custom. */
          type: "default" | "custom";
          /**
           * The workspace identifier that owns the attribute key.
           * @minLength 1
           * @pattern \S
           */
          workspaceId: string;
          /** The deprecated environment identifier alias returned by Formbricks. */
          environmentId: string | null;
          /** The raw Formbricks contact attribute key payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Formbricks contact attribute key by its identifier. */
    "formbricks.get_contact_attribute_key": {
      input: {
        /**
         * The Formbricks contact attribute key identifier to fetch, update, or delete.
         * @minLength 1
         * @pattern \S
         */
        contactAttributeKeyId: string;
      };
      output: {
        /** A normalized Formbricks contact attribute key. */
        contactAttributeKey: {
          /**
           * The Formbricks contact attribute key identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The ISO timestamp when the attribute key was created.
           * @minLength 1
           * @pattern \S
           */
          createdAt: string;
          /**
           * The ISO timestamp when the attribute key was last updated.
           * @minLength 1
           * @pattern \S
           */
          updatedAt: string;
          /** Whether the attribute key is marked as unique across contacts in the workspace. */
          isUnique: boolean;
          /**
           * The machine-readable attribute key used in Formbricks.
           * @minLength 1
           * @pattern \S
           */
          key: string;
          /**
           * The display name configured for the attribute key.
           * @minLength 1
           * @pattern \S
           */
          name: string | null;
          /**
           * The description configured for the attribute key.
           * @minLength 1
           * @pattern \S
           */
          description: string | null;
          /** Whether Formbricks marks this key as default or custom. */
          type: "default" | "custom";
          /**
           * The workspace identifier that owns the attribute key.
           * @minLength 1
           * @pattern \S
           */
          workspaceId: string;
          /** The deprecated environment identifier alias returned by Formbricks. */
          environmentId: string | null;
          /** The raw Formbricks contact attribute key payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the Formbricks organization and workspace context associated with the current API key. */
    "formbricks.get_me": {
      input: Record<string, never>;
      output: {
        /**
         * The Formbricks organization identifier.
         * @minLength 1
         * @pattern \S
         */
        organizationId: string;
        /** The organization-level access control returned by Formbricks. */
        organizationAccess: {
          /** The read and write access flags for the API key. */
          accessControl: {
            /** Whether the API key can read organization-level data. */
            read: boolean;
            /** Whether the API key can write organization-level data. */
            write: boolean;
          };
        };
        /** The workspaces accessible to the API key. */
        workspaces: Array<{
          /**
           * The Formbricks workspace identifier.
           * @minLength 1
           * @pattern \S
           */
          workspaceId: string;
          /** The deprecated environment identifier alias when returned by Formbricks. */
          environmentId: string | null;
          /** The Formbricks environment type for the workspace. */
          environmentType: "production" | "development";
          /** The permission level granted to this API key for the workspace. */
          permission: "read" | "write" | "manage";
          /**
           * The Formbricks project identifier that owns the workspace.
           * @minLength 1
           * @pattern \S
           */
          projectId: string;
          /**
           * The Formbricks project name that owns the workspace.
           * @minLength 1
           * @pattern \S
           */
          projectName: string;
        }>;
        /** The deprecated environments alias returned by Formbricks when present. */
        environments: Array<{
          /**
           * The Formbricks workspace identifier.
           * @minLength 1
           * @pattern \S
           */
          workspaceId: string;
          /** The deprecated environment identifier alias when returned by Formbricks. */
          environmentId: string | null;
          /** The Formbricks environment type for the workspace. */
          environmentType: "production" | "development";
          /** The permission level granted to this API key for the workspace. */
          permission: "read" | "write" | "manage";
          /**
           * The Formbricks project identifier that owns the workspace.
           * @minLength 1
           * @pattern \S
           */
          projectId: string;
          /**
           * The Formbricks project name that owns the workspace.
           * @minLength 1
           * @pattern \S
           */
          projectName: string;
        }>;
      };
    };
    /** List Formbricks contact attribute keys with optional pagination, sorting, date filters, and workspace scoping. */
    "formbricks.list_contact_attribute_keys": {
      input: {
        /**
         * The Formbricks workspace identifier used by this action.
         * @minLength 1
         * @pattern \S
         */
        workspaceId?: string;
        /**
         * The deprecated environment identifier alias accepted by Formbricks for compatibility.
         * @minLength 1
         * @pattern \S
         */
        environmentId?: string;
        /**
         * The maximum number of attribute keys to return.
         * @maximum 250
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The number of attribute keys to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /** The Formbricks field used to sort the returned attribute keys. */
        sortBy?: "createdAt" | "updatedAt";
        /** The sort order for the returned Formbricks attribute keys. */
        order?: "asc" | "desc";
        /** An optional start-date filter passed through to Formbricks exactly as provided. */
        startDate?: string;
        /** An optional end-date filter passed through to Formbricks exactly as provided. */
        endDate?: string;
        /** The Formbricks date field used for start/end filtering. */
        filterDateField?: "createdAt" | "updatedAt";
      };
      output: {
        /** The contact attribute keys returned by Formbricks. */
        contactAttributeKeys: Array<{
          /**
           * The Formbricks contact attribute key identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The ISO timestamp when the attribute key was created.
           * @minLength 1
           * @pattern \S
           */
          createdAt: string;
          /**
           * The ISO timestamp when the attribute key was last updated.
           * @minLength 1
           * @pattern \S
           */
          updatedAt: string;
          /** Whether the attribute key is marked as unique across contacts in the workspace. */
          isUnique: boolean;
          /**
           * The machine-readable attribute key used in Formbricks.
           * @minLength 1
           * @pattern \S
           */
          key: string;
          /**
           * The display name configured for the attribute key.
           * @minLength 1
           * @pattern \S
           */
          name: string | null;
          /**
           * The description configured for the attribute key.
           * @minLength 1
           * @pattern \S
           */
          description: string | null;
          /** Whether Formbricks marks this key as default or custom. */
          type: "default" | "custom";
          /**
           * The workspace identifier that owns the attribute key.
           * @minLength 1
           * @pattern \S
           */
          workspaceId: string;
          /** The deprecated environment identifier alias returned by Formbricks. */
          environmentId: string | null;
          /** The raw Formbricks contact attribute key payload. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata returned for Formbricks contact attribute key lists. */
        meta: {
          /**
           * The total number of matching Formbricks attribute keys.
           * @minimum 0
           */
          total: number;
          /**
           * The number of attribute keys Formbricks returned per page.
           * @minimum 0
           */
          limit: number;
          /**
           * The offset Formbricks applied to this result page.
           * @minimum 0
           */
          offset: number;
        };
      };
    };
    /** Update one existing Formbricks contact attribute key. */
    "formbricks.update_contact_attribute_key": {
      input: {
        /**
         * The Formbricks contact attribute key identifier to fetch, update, or delete.
         * @minLength 1
         * @pattern \S
         */
        contactAttributeKeyId: string;
        /**
         * An updated machine-readable attribute key.
         * @minLength 1
         * @pattern \S
         */
        key?: string;
        /**
         * An updated display name for the attribute key.
         * @minLength 1
         * @pattern \S
         */
        name?: string | null;
        /**
         * An updated description for the attribute key.
         * @minLength 1
         * @pattern \S
         */
        description?: string | null;
      };
      output: {
        /** A normalized Formbricks contact attribute key. */
        contactAttributeKey: {
          /**
           * The Formbricks contact attribute key identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The ISO timestamp when the attribute key was created.
           * @minLength 1
           * @pattern \S
           */
          createdAt: string;
          /**
           * The ISO timestamp when the attribute key was last updated.
           * @minLength 1
           * @pattern \S
           */
          updatedAt: string;
          /** Whether the attribute key is marked as unique across contacts in the workspace. */
          isUnique: boolean;
          /**
           * The machine-readable attribute key used in Formbricks.
           * @minLength 1
           * @pattern \S
           */
          key: string;
          /**
           * The display name configured for the attribute key.
           * @minLength 1
           * @pattern \S
           */
          name: string | null;
          /**
           * The description configured for the attribute key.
           * @minLength 1
           * @pattern \S
           */
          description: string | null;
          /** Whether Formbricks marks this key as default or custom. */
          type: "default" | "custom";
          /**
           * The workspace identifier that owns the attribute key.
           * @minLength 1
           * @pattern \S
           */
          workspaceId: string;
          /** The deprecated environment identifier alias returned by Formbricks. */
          environmentId: string | null;
          /** The raw Formbricks contact attribute key payload. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
