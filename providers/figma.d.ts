import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create dev resources and attach them to Figma file nodes. */
    "figma.create_dev_resources": {
      input: {
        /**
         * The dev resources to create.
         * @minItems 1
         */
        devResources: Array<{
          /**
           * The display name for the dev resource.
           * @minLength 1
           */
          name: string;
          /**
           * The URL of the dev resource.
           * @format uri
           */
          url: string;
          /**
           * The main Figma file key from a Figma file URL.
           * @minLength 1
           */
          fileKey: string;
          /**
           * The Figma node ID to attach the dev resource to.
           * @minLength 1
           */
          nodeId: string;
        }>;
      };
      output: {
        /** The raw JSON array returned by the Figma API. */
        linksCreated: Array<Record<string, unknown>>;
        /** The raw JSON array returned by the Figma API. */
        linksUpdated: Array<Record<string, unknown>>;
        /** The raw JSON array returned by the Figma API. */
        errors: Array<Record<string, unknown>>;
        /** The raw JSON object returned by the Figma API. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a Figma comment created by the authenticated user. */
    "figma.delete_comment": {
      input: {
        /**
         * The Figma file key or branch key from a Figma file URL.
         * @minLength 1
         */
        fileKey: string;
        /**
         * The Figma comment ID to delete.
         * @minLength 1
         */
        commentId: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
      };
    };
    /** Delete an emoji reaction created by the authenticated user. */
    "figma.delete_comment_reaction": {
      input: {
        /**
         * The Figma file key or branch key from a Figma file URL.
         * @minLength 1
         */
        fileKey: string;
        /**
         * The Figma comment ID.
         * @minLength 1
         */
        commentId: string;
        /**
         * The emoji reaction shortcode to add or delete.
         * @minLength 1
         */
        emoji: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
      };
    };
    /** Delete a Figma dev resource from a main file. */
    "figma.delete_dev_resource": {
      input: {
        /**
         * The main Figma file key from a Figma file URL.
         * @minLength 1
         */
        fileKey: string;
        /**
         * The Figma dev resource ID to delete.
         * @minLength 1
         */
        devResourceId: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
      };
    };
    /** Get metadata for a published Figma component by key. */
    "figma.get_component": {
      input: {
        /**
         * The unique Figma library asset key.
         * @minLength 1
         */
        key: string;
      };
      output: {
        /** The raw JSON object returned by the Figma API. */
        item: Record<string, unknown>;
        /** The raw JSON object returned by the Figma API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get metadata for a published Figma component set by key. */
    "figma.get_component_set": {
      input: {
        /**
         * The unique Figma library asset key.
         * @minLength 1
         */
        key: string;
      };
      output: {
        /** The raw JSON object returned by the Figma API. */
        item: Record<string, unknown>;
        /** The raw JSON object returned by the Figma API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the current Figma user associated with the API key. */
    "figma.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current Figma user object returned by `/v1/me`. */
        user: Record<string, unknown>;
      };
    };
    /** Get dev resources attached to a Figma main file. */
    "figma.get_dev_resources": {
      input: {
        /**
         * The main Figma file key from a Figma file URL.
         * @minLength 1
         */
        fileKey: string;
        /**
         * Figma node IDs to fetch or render, for example `1:2` or `123:456`.
         * @minItems 1
         */
        nodeIds?: Array<string>;
      };
      output: {
        /** The raw JSON array returned by the Figma API. */
        devResources: Array<Record<string, unknown>>;
        /** The raw JSON object returned by the Figma API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the JSON document for a Figma file or branch. */
    "figma.get_file": {
      input: {
        /**
         * The Figma file key or branch key from a Figma file URL.
         * @minLength 1
         */
        fileKey: string;
        /**
         * A specific Figma file version ID to read.
         * @minLength 1
         */
        version?: string;
        /**
         * Figma node IDs to fetch or render, for example `1:2` or `123:456`.
         * @minItems 1
         */
        nodeIds?: Array<string>;
        /**
         * The maximum depth of the document tree to return from Figma.
         * @exclusiveMinimum 0
         */
        depth?: number;
        /** Whether Figma should include vector path geometry. */
        geometry?: "paths";
        /**
         * Plugin IDs whose plugin data Figma should include.
         * @minItems 1
         */
        pluginData?: Array<string>;
        /** Whether Figma should include branch metadata in the response. */
        branchData?: boolean;
      };
      output: {
        /** The raw JSON object returned by the Figma API. */
        file: Record<string, unknown>;
      };
    };
    /** Get lightweight metadata for a Figma file without fetching its full document. */
    "figma.get_file_metadata": {
      input: {
        /**
         * The Figma file key or branch key from a Figma file URL.
         * @minLength 1
         */
        fileKey: string;
      };
      output: {
        /** The raw JSON object returned by the Figma API. */
        metadata: Record<string, unknown>;
      };
    };
    /** Get JSON for selected node IDs from a Figma file or branch. */
    "figma.get_file_nodes": {
      input: {
        /**
         * The Figma file key or branch key from a Figma file URL.
         * @minLength 1
         */
        fileKey: string;
        /**
         * Figma node IDs to fetch or render, for example `1:2` or `123:456`.
         * @minItems 1
         */
        nodeIds: Array<string>;
        /**
         * A specific Figma file version ID to read.
         * @minLength 1
         */
        version?: string;
        /**
         * The maximum depth of the document tree to return from Figma.
         * @exclusiveMinimum 0
         */
        depth?: number;
        /** Whether Figma should include vector path geometry. */
        geometry?: "paths";
        /**
         * Plugin IDs whose plugin data Figma should include.
         * @minItems 1
         */
        pluginData?: Array<string>;
      };
      output: {
        /** Figma nodes keyed by node ID. */
        nodes: Record<string, Record<string, unknown>>;
        /** The raw JSON object returned by the Figma API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get temporary download URLs for image fills used in a Figma file. */
    "figma.get_image_fills": {
      input: {
        /**
         * The Figma file key or branch key from a Figma file URL.
         * @minLength 1
         */
        fileKey: string;
      };
      output: {
        /** Image fill URLs keyed by Figma image reference. */
        images: Record<string, string>;
        /** The raw JSON object returned by the Figma API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get metadata for a Figma project. */
    "figma.get_project_metadata": {
      input: {
        /**
         * The Figma project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** The raw JSON object returned by the Figma API. */
        metadata: Record<string, unknown>;
      };
    };
    /** Get metadata for a published Figma style by key. */
    "figma.get_style": {
      input: {
        /**
         * The unique Figma library asset key.
         * @minLength 1
         */
        key: string;
      };
      output: {
        /** The raw JSON object returned by the Figma API. */
        item: Record<string, unknown>;
        /** The raw JSON object returned by the Figma API. */
        raw: Record<string, unknown>;
      };
    };
    /** List emoji reactions on a Figma file comment. */
    "figma.list_comment_reactions": {
      input: {
        /**
         * The Figma file key or branch key from a Figma file URL.
         * @minLength 1
         */
        fileKey: string;
        /**
         * The Figma comment ID.
         * @minLength 1
         */
        commentId: string;
        /**
         * A pagination cursor returned by Figma.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The raw JSON array returned by the Figma API. */
        reactions: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Figma. */
        pagination: Record<string, unknown>;
        /** The raw JSON object returned by the Figma API. */
        raw: Record<string, unknown>;
      };
    };
    /** List comments on a Figma file or branch. */
    "figma.list_comments": {
      input: {
        /**
         * The Figma file key or branch key from a Figma file URL.
         * @minLength 1
         */
        fileKey: string;
      };
      output: {
        /** The comments returned by Figma. */
        comments: Array<Record<string, unknown>>;
        /** The raw JSON object returned by the Figma API. */
        raw: Record<string, unknown>;
      };
    };
    /** List published component sets in a Figma main file library. */
    "figma.list_file_component_sets": {
      input: {
        /**
         * The main Figma file key from a Figma file URL.
         * @minLength 1
         */
        fileKey: string;
      };
      output: {
        /** The raw JSON array returned by the Figma API. */
        items: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Figma. */
        pagination: Record<string, unknown>;
        /** The raw JSON object returned by the Figma API. */
        raw: Record<string, unknown>;
      };
    };
    /** List published components in a Figma main file library. */
    "figma.list_file_components": {
      input: {
        /**
         * The main Figma file key from a Figma file URL.
         * @minLength 1
         */
        fileKey: string;
      };
      output: {
        /** The raw JSON array returned by the Figma API. */
        items: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Figma. */
        pagination: Record<string, unknown>;
        /** The raw JSON object returned by the Figma API. */
        raw: Record<string, unknown>;
      };
    };
    /** List published styles in a Figma main file library. */
    "figma.list_file_styles": {
      input: {
        /**
         * The main Figma file key from a Figma file URL.
         * @minLength 1
         */
        fileKey: string;
      };
      output: {
        /** The raw JSON array returned by the Figma API. */
        items: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Figma. */
        pagination: Record<string, unknown>;
        /** The raw JSON object returned by the Figma API. */
        raw: Record<string, unknown>;
      };
    };
    /** List version history records for a Figma file. */
    "figma.list_file_versions": {
      input: {
        /**
         * The Figma file key or branch key from a Figma file URL.
         * @minLength 1
         */
        fileKey: string;
        /**
         * The maximum number of versions to request from Figma.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * A pagination cursor requesting versions before this cursor.
         * @minLength 1
         */
        before?: string;
        /**
         * A pagination cursor requesting versions after this cursor.
         * @minLength 1
         */
        after?: string;
      };
      output: {
        /** The Figma file versions. */
        versions: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Figma. */
        pagination: Record<string, unknown>;
        /** The raw JSON object returned by the Figma API. */
        raw: Record<string, unknown>;
      };
    };
    /** List files in a Figma project. */
    "figma.list_project_files": {
      input: {
        /**
         * The Figma project ID.
         * @minLength 1
         */
        projectId: string;
        /** Whether Figma should include branch metadata for files. */
        branchData?: boolean;
      };
      output: {
        /** The raw JSON array returned by the Figma API. */
        files: Array<Record<string, unknown>>;
        /** The raw JSON object returned by the Figma API. */
        raw: Record<string, unknown>;
      };
    };
    /** List projects visible to the authenticated user in a Figma team. */
    "figma.list_team_projects": {
      input: {
        /**
         * The Figma team ID from a Figma team URL.
         * @minLength 1
         */
        teamId: string;
      };
      output: {
        /** The raw JSON array returned by the Figma API. */
        projects: Array<Record<string, unknown>>;
        /** The raw JSON object returned by the Figma API. */
        raw: Record<string, unknown>;
      };
    };
    /** Post a comment on a Figma file or branch. */
    "figma.post_comment": {
      input: {
        /**
         * The Figma file key or branch key from a Figma file URL.
         * @minLength 1
         */
        fileKey: string;
        /**
         * The comment message to post.
         * @minLength 1
         */
        message: string;
        /** Optional Figma client_meta coordinates or node location forwarded to Figma. */
        clientMeta?: Record<string, unknown>;
        /**
         * An optional parent comment ID to reply to.
         * @minLength 1
         */
        commentId?: string;
      };
      output: {
        /** The raw JSON object returned by the Figma API. */
        comment: Record<string, unknown>;
      };
    };
    /** Add an emoji reaction to a Figma file comment. */
    "figma.post_comment_reaction": {
      input: {
        /**
         * The Figma file key or branch key from a Figma file URL.
         * @minLength 1
         */
        fileKey: string;
        /**
         * The Figma comment ID.
         * @minLength 1
         */
        commentId: string;
        /**
         * The emoji reaction shortcode to add or delete.
         * @minLength 1
         */
        emoji: string;
      };
      output: {
        /** Whether the reaction request completed successfully. */
        posted: boolean;
      };
    };
    /** Render selected Figma file nodes and return temporary image URLs. */
    "figma.render_images": {
      input: {
        /**
         * The Figma file key or branch key from a Figma file URL.
         * @minLength 1
         */
        fileKey: string;
        /**
         * Figma node IDs to fetch or render, for example `1:2` or `123:456`.
         * @minItems 1
         */
        nodeIds: Array<string>;
        /**
         * A specific Figma file version ID to read.
         * @minLength 1
         */
        version?: string;
        /**
         * The image scale factor supported by Figma.
         * @minimum 0.01
         * @maximum 4
         */
        scale?: number;
        /** The image format Figma should render. */
        format?: "jpg" | "png" | "svg" | "pdf";
        /** Whether SVG exports should include Figma node IDs. */
        svgIncludeId?: boolean;
        /** Whether SVG exports should simplify inside and outside strokes. */
        svgSimplifyStroke?: boolean;
        /** Whether Figma should use full node bounds when rendering. */
        useAbsoluteBounds?: boolean;
      };
      output: {
        /** Rendered image URLs keyed by node ID. Missing or failed renders may be null. */
        images: Record<string, string | null>;
        /** The image rendering error returned by Figma. */
        err: string | null;
        /** The raw JSON object returned by the Figma API. */
        raw: Record<string, unknown>;
      };
    };
    /** Update existing Figma dev resources. */
    "figma.update_dev_resources": {
      input: {
        /**
         * The dev resources to update.
         * @minItems 1
         */
        devResources: Array<{
          /**
           * The unique Figma dev resource ID.
           * @minLength 1
           */
          id: string;
          /**
           * The new display name for the dev resource.
           * @minLength 1
           */
          name?: string;
          /**
           * The new URL for the dev resource.
           * @format uri
           */
          url?: string;
        }>;
      };
      output: {
        /** The raw JSON array returned by the Figma API. */
        linksCreated: Array<Record<string, unknown>>;
        /** The raw JSON array returned by the Figma API. */
        linksUpdated: Array<Record<string, unknown>>;
        /** The raw JSON array returned by the Figma API. */
        errors: Array<Record<string, unknown>>;
        /** The raw JSON object returned by the Figma API. */
        raw: Record<string, unknown>;
      };
    };
  }
}
