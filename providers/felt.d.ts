import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Felt map with optional initial metadata. */
    "felt.create_map": {
      input: {
        /**
         * The Felt map title.
         * @minLength 1
         */
        title?: string;
        /**
         * The Felt map description.
         * @minLength 1
         */
        description?: string;
        /** The Felt map public access setting. */
        public_access?: "private" | "view_only" | "view_and_comment" | "view_comment_and_edit";
        /**
         * The Felt basemap identifier.
         * @minLength 1
         */
        basemap?: string;
        /** The initial map center latitude. */
        lat?: number;
        /** The initial map center longitude. */
        lon?: number;
        /** The initial map zoom level. */
        zoom?: number;
        /**
         * The Felt workspace ID.
         * @minLength 1
         */
        workspace_id?: string;
        /**
         * Layer URLs Felt should import into the new map.
         * @minItems 1
         */
        layer_urls?: Array<string>;
      };
      output: {
        /** The raw Felt map object returned by the API. */
        map: Record<string, unknown>;
      };
    };
    /** Create a Felt project in the authenticated workspace. */
    "felt.create_project": {
      input: {
        /**
         * The name to use for the Felt project.
         * @minLength 1
         */
        name: string;
        /** The Felt project visibility setting. */
        visibility: "workspace" | "private";
        /** The maximum permission level workspace members inherit on team-visible projects. */
        max_inherited_permission?: "view_only" | "view_and_contribute" | "view_and_edit";
      };
      output: {
        /** The raw Felt project object returned by the API. */
        project: Record<string, unknown>;
      };
    };
    /** Delete one Felt map by ID. */
    "felt.delete_map": {
      input: {
        /**
         * The Felt resource ID.
         * @minLength 1
         */
        map_id: string;
      };
      output: {
        /**
         * The Felt resource ID.
         * @minLength 1
         */
        id: string;
        /** The deleted Felt object type. */
        object: "map";
        /** Whether Felt accepted the map deletion. */
        deleted: boolean;
      };
    };
    /** Delete one Felt project by ID. */
    "felt.delete_project": {
      input: {
        /**
         * The Felt resource ID.
         * @minLength 1
         */
        project_id: string;
      };
      output: {
        /**
         * The Felt resource ID.
         * @minLength 1
         */
        id: string;
        /** The deleted Felt object type. */
        object: "project";
        /** Whether Felt accepted the project deletion. */
        deleted: boolean;
      };
    };
    /** Duplicate a Felt map, optionally into another project or folder. */
    "felt.duplicate_map": {
      input: {
        /**
         * The Felt resource ID.
         * @minLength 1
         */
        map_id: string;
        /**
         * The title for the duplicated map.
         * @minLength 1
         */
        title?: string;
        /** The destination project or folder for a Felt map. */
        destination?: {
          /**
           * The Felt resource ID.
           * @minLength 1
           */
          project_id: string;
        } | {
          /**
           * The Felt resource ID.
           * @minLength 1
           */
          folder_id: string;
        };
      };
      output: {
        /** The raw Felt map object returned by the API. */
        map: Record<string, unknown>;
      };
    };
    /** Get the Felt user profile for the authenticated API token. */
    "felt.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The raw Felt user object returned by the API. */
        user: {
          /** The Felt user ID. */
          id?: string;
          /** The user's display name. */
          name?: string;
          /** The user's email address. */
          email?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Felt map by ID. */
    "felt.get_map": {
      input: {
        /**
         * The Felt resource ID.
         * @minLength 1
         */
        map_id: string;
      };
      output: {
        /** The raw Felt map object returned by the API. */
        map: Record<string, unknown>;
      };
    };
    /** Get one Felt project by ID. */
    "felt.get_project": {
      input: {
        /**
         * The Felt resource ID.
         * @minLength 1
         */
        project_id: string;
      };
      output: {
        /** The raw Felt project object returned by the API. */
        project: Record<string, unknown>;
      };
    };
    /** List Felt projects accessible to the authenticated user. */
    "felt.list_projects": {
      input: {
        /**
         * The Felt workspace ID.
         * @minLength 1
         */
        workspace_id?: string;
      };
      output: {
        /** The Felt projects returned by the API. */
        projects: Array<Record<string, unknown>>;
      };
    };
    /** Move a Felt map to another project or folder in the same workspace. */
    "felt.move_map": {
      input: {
        /**
         * The Felt resource ID.
         * @minLength 1
         */
        map_id: string;
        /**
         * The Felt resource ID.
         * @minLength 1
         */
        project_id: string;
      } | {
        /**
         * The Felt resource ID.
         * @minLength 1
         */
        map_id: string;
        /**
         * The Felt resource ID.
         * @minLength 1
         */
        folder_id: string;
      };
      output: {
        /** The raw Felt map object returned by the API. */
        map: Record<string, unknown>;
      };
    };
    /** Update Felt map metadata and sharing settings. */
    "felt.update_map": {
      input: {
        /**
         * The Felt resource ID.
         * @minLength 1
         */
        map_id: string;
        /**
         * The updated Felt map title.
         * @minLength 1
         */
        title?: string;
        /**
         * The updated Felt map description.
         * @minLength 1
         */
        description?: string;
        /** The Felt map public access setting. */
        public_access?: "private" | "view_only" | "view_and_comment" | "view_comment_and_edit";
        /**
         * The updated Felt basemap identifier.
         * @minLength 1
         */
        basemap?: string;
        /** Map table settings accepted by the Felt API. */
        table_settings?: {
          /**
           * The Felt resource ID.
           * @minLength 1
           */
          default_table_layer_id?: string | null;
          /** Whether viewers can open the data table. */
          viewers_can_open_table?: boolean;
        };
        /** Viewer permissions accepted by the Felt API. */
        viewer_permissions?: {
          /** Whether viewers can duplicate the map and data. */
          can_duplicate_map?: boolean;
          /** Whether viewers can export map data. */
          can_export_data?: boolean;
          /** Whether viewers can see who else is viewing the map. */
          can_see_map_presence?: boolean;
        };
      };
      output: {
        /** The raw Felt map object returned by the API. */
        map: Record<string, unknown>;
      };
    };
    /** Update Felt project properties. */
    "felt.update_project": {
      input: {
        /**
         * The Felt resource ID.
         * @minLength 1
         */
        project_id: string;
        /**
         * The updated Felt project name.
         * @minLength 1
         */
        name?: string;
        /** The Felt project visibility setting. */
        visibility?: "workspace" | "private";
        /** The maximum permission level workspace members inherit on team-visible projects. */
        max_inherited_permission?: "view_only" | "view_and_contribute" | "view_and_edit";
      };
      output: {
        /** The raw Felt project object returned by the API. */
        project: Record<string, unknown>;
      };
    };
  }
}
