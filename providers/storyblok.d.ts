import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve metadata for the Storyblok space associated with the access token. */
    "storyblok.get_space": {
      input: Record<string, never>;
      output: {
        /** Storyblok space object. */
        space: {
          /** Space ID. */
          id?: number;
          /**
           * Space name.
           * @minLength 1
           */
          name?: string;
          /**
           * Domain associated with the Storyblok space.
           * @format uri
           */
          domain?: string;
          /** Storyblok cache version value. */
          version?: number | string;
          /** Language codes configured in the Storyblok space. */
          language_codes?: Array<string>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve one Storyblok story by full slug, numeric ID, or UUID. */
    "storyblok.get_story": {
      input: {
        /**
         * Story full slug, numeric ID, or UUID to place in the path.
         * @minLength 1
         */
        story: string;
        /** Story lookup mode required when story is a UUID. */
        find_by?: "uuid";
        /** Storyblok content version to request. */
        version?: "draft" | "published";
        /**
         * Storyblok cache version timestamp.
         * @minimum 0
         */
        cv?: number;
        /**
         * Release ID to request a story version from.
         * @minLength 1
         */
        from_release?: string;
        /** Storyblok link resolution mode. */
        resolve_links?: "story" | "url" | "link";
        /**
         * Number of link levels to resolve.
         * @minimum 1
         * @maximum 2
         */
        resolve_links_level?: number;
        /**
         * Comma-separated component.field references to resolve as stories.
         * @minLength 1
         */
        resolve_relations?: string;
        /**
         * Force second-level relation resolution.
         * @minimum 2
         * @maximum 2
         */
        resolve_level?: number;
        /**
         * Storyblok numeric boolean flag, where 1 means yes and 0 means no.
         * @minimum 0
         * @maximum 1
         */
        resolve_assets?: number;
        /**
         * Fallback language code configured in the space.
         * @minLength 1
         */
        fallback_lang?: string;
        /**
         * Language code configured in the space.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Storyblok story object. */
        story: {
          /**
           * Story name.
           * @minLength 1
           */
          name?: string;
          /**
           * Latest publication timestamp.
           * @format date-time
           */
          published_at?: string | null;
          /**
           * First publication timestamp.
           * @format date-time
           */
          first_published_at?: string | null;
          /**
           * Story creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * Latest story update timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** Story ID. */
          id?: number;
          /**
           * Story UUID.
           * @format uuid
           */
          uuid?: string;
          /** Storyblok story content object shaped by the space's component schema. */
          content?: {
            /**
             * Storyblok component technical name.
             * @minLength 1
             */
            component?: string;
            [key: string]: unknown;
          };
          /**
           * Story slug.
           * @minLength 1
           */
          slug?: string;
          /**
           * Story full slug.
           * @minLength 1
           */
          full_slug?: string;
          /**
           * Date configured for sorting the story.
           * @minLength 1
           */
          sort_by_date?: string | null;
          /** Story position in its folder. */
          position?: number;
          /** Story tag names. */
          tag_list?: Array<string>;
          /** Whether the story is the start page for a folder. */
          is_startpage?: boolean;
          /** Parent folder ID. */
          parent_id?: number;
          /** Story metadata object. */
          meta_data?: Record<string, unknown> | null;
          /**
           * Story group UUID shared between alternates.
           * @format uuid
           */
          group_id?: string;
          /** Release ID when requested from a release. */
          release_id?: number | null;
          /**
           * Story language code.
           * @minLength 1
           */
          lang?: string;
          /**
           * Story real path.
           * @minLength 1
           */
          path?: string | null;
          /** Alternate stories for this story. */
          alternates?: Array<Record<string, unknown>>;
          /**
           * Default-language full slug.
           * @minLength 1
           */
          default_full_slug?: string | null;
          /** Translated slug objects. */
          translated_slugs?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        };
        /** Resolved story objects. */
        rels?: Array<{
          /**
           * Story name.
           * @minLength 1
           */
          name?: string;
          /**
           * Latest publication timestamp.
           * @format date-time
           */
          published_at?: string | null;
          /**
           * First publication timestamp.
           * @format date-time
           */
          first_published_at?: string | null;
          /**
           * Story creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * Latest story update timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** Story ID. */
          id?: number;
          /**
           * Story UUID.
           * @format uuid
           */
          uuid?: string;
          /** Storyblok story content object shaped by the space's component schema. */
          content?: {
            /**
             * Storyblok component technical name.
             * @minLength 1
             */
            component?: string;
            [key: string]: unknown;
          };
          /**
           * Story slug.
           * @minLength 1
           */
          slug?: string;
          /**
           * Story full slug.
           * @minLength 1
           */
          full_slug?: string;
          /**
           * Date configured for sorting the story.
           * @minLength 1
           */
          sort_by_date?: string | null;
          /** Story position in its folder. */
          position?: number;
          /** Story tag names. */
          tag_list?: Array<string>;
          /** Whether the story is the start page for a folder. */
          is_startpage?: boolean;
          /** Parent folder ID. */
          parent_id?: number;
          /** Story metadata object. */
          meta_data?: Record<string, unknown> | null;
          /**
           * Story group UUID shared between alternates.
           * @format uuid
           */
          group_id?: string;
          /** Release ID when requested from a release. */
          release_id?: number | null;
          /**
           * Story language code.
           * @minLength 1
           */
          lang?: string;
          /**
           * Story real path.
           * @minLength 1
           */
          path?: string | null;
          /** Alternate stories for this story. */
          alternates?: Array<Record<string, unknown>>;
          /**
           * Default-language full slug.
           * @minLength 1
           */
          default_full_slug?: string | null;
          /** Translated slug objects. */
          translated_slugs?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        }>;
        /** Resolved link objects. */
        links?: Array<{
          /** Story or folder ID. */
          id?: number;
          /**
           * Story or folder UUID.
           * @format uuid
           */
          uuid?: string;
          /**
           * Story or folder full slug.
           * @minLength 1
           */
          slug?: string;
          /**
           * Story real path.
           * @minLength 1
           */
          path?: string | null;
          /** Parent folder ID. */
          parent_id?: number | null;
          /**
           * Story or folder name.
           * @minLength 1
           */
          name?: string;
          /** Whether the object is a folder. */
          is_folder?: boolean;
          /** Whether the story is published. */
          published?: boolean;
          /** Whether the story is the start page for a folder. */
          is_startpage?: boolean;
          /** Story position in its folder. */
          position?: number;
          /**
           * Resolved real path with a leading slash.
           * @minLength 1
           */
          real_path?: string;
          /**
           * Latest publication timestamp.
           * @format date-time
           */
          published_at?: string;
          /**
           * Creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * Latest update timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** Alternate link objects. */
          alternates?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Referenced story UUIDs that exceeded the resolution limit. */
        rel_uuids?: Array<string>;
        /** Linked story UUIDs that exceeded the resolution limit. */
        link_uuids?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** List Storyblok datasource entries, optionally filtered by datasource and dimension. */
    "storyblok.list_datasource_entries": {
      input: {
        /**
         * Datasource slug to filter entries by.
         * @minLength 1
         */
        datasource?: string;
        /**
         * Datasource dimension value to request.
         * @minLength 1
         */
        dimension?: string;
        /**
         * Page number to request from Storyblok.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Datasource entries to request per page.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * Storyblok cache version timestamp.
         * @minimum 0
         */
        cv?: number;
      };
      output: {
        /** Datasource entries returned for the current page. */
        datasource_entries: Array<{
          /** Entry ID. */
          id?: number;
          /**
           * Entry name.
           * @minLength 1
           */
          name?: string;
          /**
           * Entry value in the default dimension.
           * @minLength 1
           */
          value?: string;
          /**
           * Entry value for the requested dimension.
           * @minLength 1
           */
          dimension_value?: string;
          [key: string]: unknown;
        }>;
        /** Storyblok cache version timestamp. */
        cv?: number;
        /** Pagination metadata derived from Storyblok response headers. */
        pagination?: {
          /**
           * Total number of matching items reported by Storyblok.
           * @minimum 0
           */
          total?: number;
          /**
           * Number of items per page reported by Storyblok.
           * @exclusiveMinimum 0
           */
          per_page?: number;
        };
        [key: string]: unknown;
      };
    };
    /** List Storyblok datasources with pagination. */
    "storyblok.list_datasources": {
      input: {
        /**
         * Page number to request from Storyblok.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of items to request per page.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        per_page?: number;
      };
      output: {
        /** Datasources returned for the current page. */
        datasources: Array<{
          /** Datasource ID. */
          id?: number;
          /**
           * Datasource name.
           * @minLength 1
           */
          name?: string;
          /**
           * Datasource slug.
           * @minLength 1
           */
          slug?: string;
          /** Dimensions defined for this datasource. */
          dimensions?: Array<{
            /** Dimension ID. */
            id?: number;
            /**
             * Dimension name.
             * @minLength 1
             */
            name?: string;
            /**
             * Dimension value.
             * @minLength 1
             */
            entry_value?: string;
            /** Datasource ID containing this dimension. */
            datasource_id?: number;
            /**
             * Dimension creation timestamp.
             * @format date-time
             */
            created_at?: string;
            /**
             * Latest dimension update timestamp.
             * @format date-time
             */
            updated_at?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Storyblok cache version timestamp. */
        cv?: number;
        /** Pagination metadata derived from Storyblok response headers. */
        pagination?: {
          /**
           * Total number of matching items reported by Storyblok.
           * @minimum 0
           */
          total?: number;
          /**
           * Number of items per page reported by Storyblok.
           * @exclusiveMinimum 0
           */
          per_page?: number;
        };
        [key: string]: unknown;
      };
    };
    /** List compact Storyblok link records for stories and folders in a space. */
    "storyblok.list_links": {
      input: {
        /**
         * Return links whose full_slug starts with this value.
         * @minLength 1
         */
        starts_with?: string;
        /** Storyblok content version to request. */
        version?: "draft" | "published";
        /**
         * Storyblok cache version timestamp.
         * @minimum 0
         */
        cv?: number;
        /**
         * Folder ID used to filter links, or 0 for root entries.
         * @minimum 0
         */
        with_parent?: number;
        /**
         * Storyblok numeric boolean flag, where 1 means yes and 0 means no.
         * @minimum 0
         * @maximum 1
         */
        include_dates?: number;
        /**
         * Page number to request from Storyblok.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Links to request per page.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * Storyblok numeric boolean flag, where 1 means yes and 0 means no.
         * @minimum 0
         * @maximum 1
         */
        paginated?: number;
      };
      output: {
        /** Storyblok links keyed by story or folder UUID. */
        links: Record<string, {
            /** Story or folder ID. */
            id?: number;
            /**
             * Story or folder UUID.
             * @format uuid
             */
            uuid?: string;
            /**
             * Story or folder full slug.
             * @minLength 1
             */
            slug?: string;
            /**
             * Story real path.
             * @minLength 1
             */
            path?: string | null;
            /** Parent folder ID. */
            parent_id?: number | null;
            /**
             * Story or folder name.
             * @minLength 1
             */
            name?: string;
            /** Whether the object is a folder. */
            is_folder?: boolean;
            /** Whether the story is published. */
            published?: boolean;
            /** Whether the story is the start page for a folder. */
            is_startpage?: boolean;
            /** Story position in its folder. */
            position?: number;
            /**
             * Resolved real path with a leading slash.
             * @minLength 1
             */
            real_path?: string;
            /**
             * Latest publication timestamp.
             * @format date-time
             */
            published_at?: string;
            /**
             * Creation timestamp.
             * @format date-time
             */
            created_at?: string;
            /**
             * Latest update timestamp.
             * @format date-time
             */
            updated_at?: string;
            /** Alternate link objects. */
            alternates?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          }>;
        /** Pagination metadata derived from Storyblok response headers. */
        pagination?: {
          /**
           * Total number of matching items reported by Storyblok.
           * @minimum 0
           */
          total?: number;
          /**
           * Number of items per page reported by Storyblok.
           * @exclusiveMinimum 0
           */
          per_page?: number;
        };
        [key: string]: unknown;
      };
    };
    /** List Storyblok stories with pagination, content filters, language, and relation resolution options. */
    "storyblok.list_stories": {
      input: {
        /** Storyblok content version to request. */
        version?: "draft" | "published";
        /**
         * Storyblok cache version timestamp.
         * @minimum 0
         */
        cv?: number;
        /**
         * Release ID to request a story version from.
         * @minLength 1
         */
        from_release?: string;
        /** Storyblok link resolution mode. */
        resolve_links?: "story" | "url" | "link";
        /**
         * Number of link levels to resolve.
         * @minimum 1
         * @maximum 2
         */
        resolve_links_level?: number;
        /**
         * Comma-separated component.field references to resolve as stories.
         * @minLength 1
         */
        resolve_relations?: string;
        /**
         * Force second-level relation resolution.
         * @minimum 2
         * @maximum 2
         */
        resolve_level?: number;
        /**
         * Storyblok numeric boolean flag, where 1 means yes and 0 means no.
         * @minimum 0
         * @maximum 1
         */
        resolve_assets?: number;
        /**
         * Fallback language code configured in the space.
         * @minLength 1
         */
        fallback_lang?: string;
        /**
         * Language code configured in the space.
         * @minLength 1
         */
        language?: string;
        /**
         * Return stories whose full_slug starts with this value.
         * @minLength 1
         */
        starts_with?: string;
        /**
         * Search term applied to story name, slug, full slug, and content.
         * @minLength 1
         */
        search_term?: string;
        /**
         * Page number to request from Storyblok.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Stories to request per page.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * Storyblok content type technical name.
         * @minLength 1
         */
        content_type?: string;
        /**
         * Comma-separated full slugs to include, with wildcard support.
         * @minLength 1
         */
        by_slugs?: string;
        /**
         * Comma-separated full slugs to exclude, with wildcard support.
         * @minLength 1
         */
        excluding_slugs?: string;
        /**
         * Comma-separated story UUIDs to include.
         * @minLength 1
         */
        by_uuids?: string;
        /**
         * Comma-separated story UUIDs to include while preserving request order.
         * @minLength 1
         */
        by_uuids_ordered?: string;
        /**
         * Comma-separated story IDs to exclude.
         * @minLength 1
         */
        excluding_ids?: string;
        /**
         * Comma-separated tag slugs used to filter stories.
         * @minLength 1
         */
        with_tag?: string;
        /**
         * Storyblok sort expression.
         * @minLength 1
         */
        sort_by?: string;
        /**
         * Comma-separated workflow stage IDs.
         * @minLength 1
         */
        in_workflow_stages?: string;
        /** Storyblok filter_query object keyed by field name. */
        filter_query?: Record<string, Record<string, string | number | boolean>>;
        /**
         * Folder level used to filter returned stories.
         * @exclusiveMinimum 0
         */
        level?: number;
        /**
         * Storyblok numeric boolean flag, where 1 means yes and 0 means no.
         * @minimum 0
         * @maximum 1
         */
        is_startpage?: number;
        /**
         * Return stories first published after this timestamp.
         * @minLength 1
         */
        first_published_at_gt?: string;
        /**
         * Return stories first published before this timestamp.
         * @minLength 1
         */
        first_published_at_lt?: string;
        /**
         * Return stories published after this timestamp.
         * @minLength 1
         */
        published_at_gt?: string;
        /**
         * Return stories published before this timestamp.
         * @minLength 1
         */
        published_at_lt?: string;
        /**
         * Return stories published on or after this timestamp.
         * @minLength 1
         */
        published_at_gte?: string;
        /**
         * Return stories published on or before this timestamp.
         * @minLength 1
         */
        published_at_lte?: string;
        /**
         * Return stories updated after this timestamp.
         * @minLength 1
         */
        updated_at_gt?: string;
        /**
         * Return stories updated before this timestamp.
         * @minLength 1
         */
        updated_at_lt?: string;
        /**
         * Comma-separated content field names to exclude.
         * @minLength 1
         */
        excluding_fields?: string;
      };
      output: {
        /** Stories returned for the current page. */
        stories: Array<{
          /**
           * Story name.
           * @minLength 1
           */
          name?: string;
          /**
           * Latest publication timestamp.
           * @format date-time
           */
          published_at?: string | null;
          /**
           * First publication timestamp.
           * @format date-time
           */
          first_published_at?: string | null;
          /**
           * Story creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * Latest story update timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** Story ID. */
          id?: number;
          /**
           * Story UUID.
           * @format uuid
           */
          uuid?: string;
          /** Storyblok story content object shaped by the space's component schema. */
          content?: {
            /**
             * Storyblok component technical name.
             * @minLength 1
             */
            component?: string;
            [key: string]: unknown;
          };
          /**
           * Story slug.
           * @minLength 1
           */
          slug?: string;
          /**
           * Story full slug.
           * @minLength 1
           */
          full_slug?: string;
          /**
           * Date configured for sorting the story.
           * @minLength 1
           */
          sort_by_date?: string | null;
          /** Story position in its folder. */
          position?: number;
          /** Story tag names. */
          tag_list?: Array<string>;
          /** Whether the story is the start page for a folder. */
          is_startpage?: boolean;
          /** Parent folder ID. */
          parent_id?: number;
          /** Story metadata object. */
          meta_data?: Record<string, unknown> | null;
          /**
           * Story group UUID shared between alternates.
           * @format uuid
           */
          group_id?: string;
          /** Release ID when requested from a release. */
          release_id?: number | null;
          /**
           * Story language code.
           * @minLength 1
           */
          lang?: string;
          /**
           * Story real path.
           * @minLength 1
           */
          path?: string | null;
          /** Alternate stories for this story. */
          alternates?: Array<Record<string, unknown>>;
          /**
           * Default-language full slug.
           * @minLength 1
           */
          default_full_slug?: string | null;
          /** Translated slug objects. */
          translated_slugs?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        }>;
        /** Resolved story objects. */
        rels?: Array<{
          /**
           * Story name.
           * @minLength 1
           */
          name?: string;
          /**
           * Latest publication timestamp.
           * @format date-time
           */
          published_at?: string | null;
          /**
           * First publication timestamp.
           * @format date-time
           */
          first_published_at?: string | null;
          /**
           * Story creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * Latest story update timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** Story ID. */
          id?: number;
          /**
           * Story UUID.
           * @format uuid
           */
          uuid?: string;
          /** Storyblok story content object shaped by the space's component schema. */
          content?: {
            /**
             * Storyblok component technical name.
             * @minLength 1
             */
            component?: string;
            [key: string]: unknown;
          };
          /**
           * Story slug.
           * @minLength 1
           */
          slug?: string;
          /**
           * Story full slug.
           * @minLength 1
           */
          full_slug?: string;
          /**
           * Date configured for sorting the story.
           * @minLength 1
           */
          sort_by_date?: string | null;
          /** Story position in its folder. */
          position?: number;
          /** Story tag names. */
          tag_list?: Array<string>;
          /** Whether the story is the start page for a folder. */
          is_startpage?: boolean;
          /** Parent folder ID. */
          parent_id?: number;
          /** Story metadata object. */
          meta_data?: Record<string, unknown> | null;
          /**
           * Story group UUID shared between alternates.
           * @format uuid
           */
          group_id?: string;
          /** Release ID when requested from a release. */
          release_id?: number | null;
          /**
           * Story language code.
           * @minLength 1
           */
          lang?: string;
          /**
           * Story real path.
           * @minLength 1
           */
          path?: string | null;
          /** Alternate stories for this story. */
          alternates?: Array<Record<string, unknown>>;
          /**
           * Default-language full slug.
           * @minLength 1
           */
          default_full_slug?: string | null;
          /** Translated slug objects. */
          translated_slugs?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        }>;
        /** Resolved link objects. */
        links?: Array<{
          /** Story or folder ID. */
          id?: number;
          /**
           * Story or folder UUID.
           * @format uuid
           */
          uuid?: string;
          /**
           * Story or folder full slug.
           * @minLength 1
           */
          slug?: string;
          /**
           * Story real path.
           * @minLength 1
           */
          path?: string | null;
          /** Parent folder ID. */
          parent_id?: number | null;
          /**
           * Story or folder name.
           * @minLength 1
           */
          name?: string;
          /** Whether the object is a folder. */
          is_folder?: boolean;
          /** Whether the story is published. */
          published?: boolean;
          /** Whether the story is the start page for a folder. */
          is_startpage?: boolean;
          /** Story position in its folder. */
          position?: number;
          /**
           * Resolved real path with a leading slash.
           * @minLength 1
           */
          real_path?: string;
          /**
           * Latest publication timestamp.
           * @format date-time
           */
          published_at?: string;
          /**
           * Creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * Latest update timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** Alternate link objects. */
          alternates?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Referenced story UUIDs that exceeded the resolution limit. */
        rel_uuids?: Array<string>;
        /** Linked story UUIDs that exceeded the resolution limit. */
        link_uuids?: Array<string>;
        /** Storyblok cache version timestamp. */
        cv?: number;
        /** Pagination metadata derived from Storyblok response headers. */
        pagination?: {
          /**
           * Total number of matching items reported by Storyblok.
           * @minimum 0
           */
          total?: number;
          /**
           * Number of items per page reported by Storyblok.
           * @exclusiveMinimum 0
           */
          per_page?: number;
        };
        [key: string]: unknown;
      };
    };
    /** List Storyblok tags assigned to stories in the current space. */
    "storyblok.list_tags": {
      input: {
        /**
         * Return tags assigned to stories whose full_slug starts with this value.
         * @minLength 1
         */
        starts_with?: string;
        /** Storyblok content version to request. */
        version?: "draft" | "published";
      };
      output: {
        /** Tags returned by Storyblok. */
        tags: Array<{
          /**
           * Tag name.
           * @minLength 1
           */
          name?: string;
          /**
           * Number of stories assigned to the tag.
           * @minimum 0
           */
          taggings_count?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
