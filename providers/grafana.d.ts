import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Grafana dashboard resource in a namespace. */
    "grafana.create_dashboard": {
      input: {
        /**
         * Optional explicit Grafana dashboard UID.
         * @minLength 1
         */
        uid?: string;
        /**
         * Optional UID prefix Grafana can use to generate a dashboard UID.
         * @minLength 1
         */
        generateName?: string;
        /**
         * Optional folder UID for the new dashboard.
         * @minLength 1
         */
        folderUid?: string;
        /** The Grafana dashboard spec JSON. This is forwarded to Grafana as the dashboard body. */
        spec: Record<string, unknown>;
        /**
         * The Grafana API namespace. Use default for the main organization.
         * @minLength 1
         */
        namespace?: string;
      };
      output: {
        /** A normalized Grafana dashboard resource. */
        dashboard: {
          /** The dashboard UID. */
          uid: string | null;
          /** The dashboard title. */
          title: string | null;
          /** The namespace that owns the dashboard. */
          namespace: string | null;
          /** The dashboard resource version. */
          resourceVersion: string | null;
          /** The folder UID that contains the dashboard. */
          folderUid: string | null;
          /** The raw Grafana API object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a Grafana data source using a JSON payload accepted by Grafana. */
    "grafana.create_data_source": {
      input: {
        /** The Grafana data source payload. Use official Grafana data source fields such as name, type, access, url, jsonData, and secureJsonData. */
        dataSource: Record<string, unknown>;
      };
      output: {
        /** A Grafana data source record. */
        dataSource: {
          /** The numeric Grafana data source ID. */
          id: number | null;
          /** The Grafana data source UID. */
          uid: string | null;
          /** The data source name. */
          name: string | null;
          /** The data source plugin type. */
          type: string | null;
          /** The data source access mode. */
          access: string | null;
          /** The data source URL when returned by Grafana. */
          url: string | null;
          /** Whether this data source is the default. */
          isDefault: boolean | null;
          /** Whether this data source is read-only. */
          readOnly: boolean | null;
          [key: string]: unknown;
        };
        /** The raw Grafana API object. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Grafana folder in a namespace. */
    "grafana.create_folder": {
      input: {
        /**
         * The new folder title.
         * @minLength 1
         */
        title: string;
        /**
         * Optional explicit Grafana folder UID.
         * @minLength 1
         */
        uid?: string;
        /**
         * Optional UID prefix Grafana can use to generate a folder UID.
         * @minLength 1
         */
        generateName?: string;
        /**
         * Optional parent folder UID for a nested folder.
         * @minLength 1
         */
        parentUid?: string;
        /**
         * The Grafana API namespace. Use default for the main organization.
         * @minLength 1
         */
        namespace?: string;
      };
      output: {
        /** A normalized Grafana folder. */
        folder: {
          /** The Grafana folder UID. */
          uid: string | null;
          /** The folder title. */
          title: string | null;
          /** The namespace that owns the folder. */
          namespace: string | null;
          /** The folder resource version. */
          resourceVersion: string | null;
          /** The parent folder UID when the folder is nested. */
          parentUid: string | null;
          /** The raw Grafana API object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete a Grafana dashboard resource by UID. */
    "grafana.delete_dashboard": {
      input: {
        /**
         * The Grafana dashboard UID.
         * @minLength 1
         */
        uid: string;
        /**
         * The Grafana API namespace. Use default for the main organization.
         * @minLength 1
         */
        namespace?: string;
      };
      output: {
        /** Whether the connector completed the delete request. */
        deleted: boolean;
        /** The raw Grafana API object. */
        raw: Record<string, unknown> | null;
      };
    };
    /** Delete a Grafana data source by UID. */
    "grafana.delete_data_source": {
      input: {
        /**
         * The Grafana data source UID.
         * @minLength 1
         */
        uid: string;
      };
      output: {
        /** Whether the connector completed the delete request. */
        deleted: boolean;
        /** The raw Grafana API object. */
        raw: Record<string, unknown> | null;
      };
    };
    /** Delete a Grafana folder by UID. */
    "grafana.delete_folder": {
      input: {
        /**
         * The Grafana folder UID.
         * @minLength 1
         */
        uid: string;
        /**
         * The Grafana API namespace. Use default for the main organization.
         * @minLength 1
         */
        namespace?: string;
      };
      output: {
        /** Whether the connector completed the delete request. */
        deleted: boolean;
        /** The raw Grafana API object. */
        raw: Record<string, unknown> | null;
      };
    };
    /** Retrieve one Grafana dashboard resource by UID. */
    "grafana.get_dashboard": {
      input: {
        /**
         * The Grafana dashboard UID.
         * @minLength 1
         */
        uid: string;
        /**
         * The Grafana API namespace. Use default for the main organization.
         * @minLength 1
         */
        namespace?: string;
      };
      output: {
        /** A normalized Grafana dashboard resource. */
        dashboard: {
          /** The dashboard UID. */
          uid: string | null;
          /** The dashboard title. */
          title: string | null;
          /** The namespace that owns the dashboard. */
          namespace: string | null;
          /** The dashboard resource version. */
          resourceVersion: string | null;
          /** The folder UID that contains the dashboard. */
          folderUid: string | null;
          /** The raw Grafana API object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Grafana data source by UID. */
    "grafana.get_data_source": {
      input: {
        /**
         * The Grafana data source UID.
         * @minLength 1
         */
        uid: string;
      };
      output: {
        /** A Grafana data source record. */
        dataSource: {
          /** The numeric Grafana data source ID. */
          id: number | null;
          /** The Grafana data source UID. */
          uid: string | null;
          /** The data source name. */
          name: string | null;
          /** The data source plugin type. */
          type: string | null;
          /** The data source access mode. */
          access: string | null;
          /** The data source URL when returned by Grafana. */
          url: string | null;
          /** Whether this data source is the default. */
          isDefault: boolean | null;
          /** Whether this data source is read-only. */
          readOnly: boolean | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Grafana folder by UID. */
    "grafana.get_folder": {
      input: {
        /**
         * The Grafana folder UID.
         * @minLength 1
         */
        uid: string;
        /**
         * The Grafana API namespace. Use default for the main organization.
         * @minLength 1
         */
        namespace?: string;
      };
      output: {
        /** A normalized Grafana folder. */
        folder: {
          /** The Grafana folder UID. */
          uid: string | null;
          /** The folder title. */
          title: string | null;
          /** The namespace that owns the folder. */
          namespace: string | null;
          /** The folder resource version. */
          resourceVersion: string | null;
          /** The parent folder UID when the folder is nested. */
          parentUid: string | null;
          /** The raw Grafana API object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Grafana data sources available to the service account token. */
    "grafana.list_data_sources": {
      input: Record<string, never>;
      output: {
        /** Data sources returned by Grafana. */
        dataSources: Array<{
          /** The numeric Grafana data source ID. */
          id: number | null;
          /** The Grafana data source UID. */
          uid: string | null;
          /** The data source name. */
          name: string | null;
          /** The data source plugin type. */
          type: string | null;
          /** The data source access mode. */
          access: string | null;
          /** The data source URL when returned by Grafana. */
          url: string | null;
          /** Whether this data source is the default. */
          isDefault: boolean | null;
          /** Whether this data source is read-only. */
          readOnly: boolean | null;
          [key: string]: unknown;
        }>;
        /** Raw Grafana data source objects. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List Grafana folders in a namespace with optional pagination. */
    "grafana.list_folders": {
      input: {
        /**
         * The Grafana API namespace. Use default for the main organization.
         * @minLength 1
         */
        namespace?: string;
        /**
         * Maximum number of folders to request.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The Grafana continue token from a previous folder list response.
         * @minLength 1
         */
        continueToken?: string;
      };
      output: {
        /** Folders returned by Grafana. */
        folders: Array<{
          /** The Grafana folder UID. */
          uid: string | null;
          /** The folder title. */
          title: string | null;
          /** The namespace that owns the folder. */
          namespace: string | null;
          /** The folder resource version. */
          resourceVersion: string | null;
          /** The parent folder UID when the folder is nested. */
          parentUid: string | null;
          /** The raw Grafana API object. */
          raw: Record<string, unknown>;
        }>;
        /** The next Grafana continue token, or null on the last page. */
        continueToken: string | null;
        /** The raw Grafana API object. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Grafana folders and dashboards by query, tags, type, folder, and pagination. */
    "grafana.search_dashboards": {
      input: {
        /**
         * Free-text search query.
         * @minLength 1
         */
        query?: string;
        /** Dashboard tags to search for. */
        tags?: Array<string>;
        /** Restrict results to dashboards or folders. */
        type?: "dash-db" | "dash-folder";
        /** Dashboard UIDs to search for. */
        dashboardUids?: Array<string>;
        /** Folder UIDs to search in. */
        folderUids?: Array<string>;
        /** Whether to return only starred dashboards. */
        starred?: boolean;
        /**
         * Maximum number of search results to return.
         * @maximum 5000
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Search results page number. Numbering starts at 1.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Search results returned by Grafana. */
        results: Array<{
          /** The numeric Grafana search result ID. */
          id: number | null;
          /** The Grafana dashboard or folder UID. */
          uid: string | null;
          /** The search result title. */
          title: string | null;
          /** The Grafana result type, such as dash-db or dash-folder. */
          type: string | null;
          /** The Grafana UI path for the result. */
          url: string | null;
          /** Whether the dashboard is starred. */
          isStarred: boolean | null;
          [key: string]: unknown;
        }>;
        /** Raw Grafana search result objects. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Replace a Grafana dashboard resource by UID. */
    "grafana.update_dashboard": {
      input: {
        /**
         * The Grafana dashboard UID.
         * @minLength 1
         */
        uid: string;
        /**
         * Optional folder UID for the dashboard.
         * @minLength 1
         */
        folderUid?: string;
        /** The Grafana dashboard spec JSON. This is forwarded to Grafana as the dashboard body. */
        spec: Record<string, unknown>;
        /**
         * The Grafana API namespace. Use default for the main organization.
         * @minLength 1
         */
        namespace?: string;
        /**
         * The current Grafana resource version when required by the instance.
         * @minLength 1
         */
        resourceVersion?: string;
      };
      output: {
        /** A normalized Grafana dashboard resource. */
        dashboard: {
          /** The dashboard UID. */
          uid: string | null;
          /** The dashboard title. */
          title: string | null;
          /** The namespace that owns the dashboard. */
          namespace: string | null;
          /** The dashboard resource version. */
          resourceVersion: string | null;
          /** The folder UID that contains the dashboard. */
          folderUid: string | null;
          /** The raw Grafana API object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update a Grafana data source by UID using fields accepted by Grafana. */
    "grafana.update_data_source": {
      input: {
        /**
         * The Grafana data source UID.
         * @minLength 1
         */
        uid: string;
        /** The Grafana data source payload. Use official Grafana data source fields such as name, type, access, url, jsonData, and secureJsonData. */
        dataSource: Record<string, unknown>;
      };
      output: {
        /** A Grafana data source record. */
        dataSource: {
          /** The numeric Grafana data source ID. */
          id: number | null;
          /** The Grafana data source UID. */
          uid: string | null;
          /** The data source name. */
          name: string | null;
          /** The data source plugin type. */
          type: string | null;
          /** The data source access mode. */
          access: string | null;
          /** The data source URL when returned by Grafana. */
          url: string | null;
          /** Whether this data source is the default. */
          isDefault: boolean | null;
          /** Whether this data source is read-only. */
          readOnly: boolean | null;
          [key: string]: unknown;
        };
        /** The raw Grafana API object. */
        raw: Record<string, unknown>;
      };
    };
    /** Update the title or parent folder for a Grafana folder. */
    "grafana.update_folder": {
      input: {
        /**
         * The Grafana folder UID.
         * @minLength 1
         */
        uid: string;
        /**
         * The updated folder title.
         * @minLength 1
         */
        title: string;
        /**
         * Optional parent folder UID for a nested folder.
         * @minLength 1
         */
        parentUid?: string;
        /**
         * The Grafana API namespace. Use default for the main organization.
         * @minLength 1
         */
        namespace?: string;
        /**
         * The current Grafana resource version when required by the instance.
         * @minLength 1
         */
        resourceVersion?: string;
      };
      output: {
        /** A normalized Grafana folder. */
        folder: {
          /** The Grafana folder UID. */
          uid: string | null;
          /** The folder title. */
          title: string | null;
          /** The namespace that owns the folder. */
          namespace: string | null;
          /** The folder resource version. */
          resourceVersion: string | null;
          /** The parent folder UID when the folder is nested. */
          parentUid: string | null;
          /** The raw Grafana API object. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
