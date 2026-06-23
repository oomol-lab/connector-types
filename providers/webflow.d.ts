import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a draft or live item in a Webflow CMS collection. */
    "webflow.create_collection_item": {
      input: {
        /**
         * The unique Webflow collection identifier.
         * @minLength 1
         */
        collectionId: string;
        /** CMS field values keyed by Webflow field slug. Include the fields required by the collection. */
        fieldData: Record<string, unknown>;
        /** Whether the new item should be archived. */
        isArchived?: boolean;
        /** Whether the new item should remain a draft. */
        isDraft?: boolean;
        /**
         * The unique Webflow CMS locale identifier.
         * @minLength 1
         */
        cmsLocaleId?: string;
        /** Whether to create the item on the live site. */
        live?: boolean;
      };
      output: {
        /** A Webflow CMS item. */
        item: {
          /** The unique CMS item identifier. */
          id: string;
          /** The CMS locale identifier for this item. */
          cmsLocaleId: string | null;
          /** The most recent publish timestamp when returned. */
          lastPublished: string | null;
          /** The most recent update timestamp when returned. */
          lastUpdated: string | null;
          /** The creation timestamp when returned. */
          createdOn: string | null;
          /** Whether the item is archived. */
          isArchived: boolean | null;
          /** Whether the item is a draft. */
          isDraft: boolean | null;
          /** Raw object data returned by Webflow. */
          fieldData: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a draft CMS item from a Webflow collection. */
    "webflow.delete_collection_item": {
      input: {
        /**
         * The unique Webflow collection identifier.
         * @minLength 1
         */
        collectionId: string;
        /**
         * The unique Webflow CMS item identifier.
         * @minLength 1
         */
        itemId: string;
      };
      output: {
        /**
         * The unique Webflow CMS item identifier.
         * @minLength 1
         */
        itemId: string;
        /** Whether the connector completed the delete request. */
        deleted: boolean;
      };
    };
    /** Get a Webflow CMS collection including its field definitions. */
    "webflow.get_collection": {
      input: {
        /**
         * The unique Webflow collection identifier.
         * @minLength 1
         */
        collectionId: string;
      };
      output: {
        /** A Webflow CMS collection summary. */
        collection: {
          /** The unique collection identifier. */
          id: string;
          /** The collection display name. */
          displayName: string | null;
          /** The singular collection item name. */
          singularName: string | null;
          /** The collection URL slug. */
          slug: string | null;
          /** The most recent update timestamp when returned. */
          lastUpdated: string | null;
          [key: string]: unknown;
        };
        /** CMS fields defined on the collection. */
        fields: Array<{
          /** The unique collection field identifier. */
          id: string;
          /** The field display name. */
          displayName: string | null;
          /** The field slug used in fieldData. */
          slug: string | null;
          /** The Webflow field type. */
          type: string | null;
          /** Whether Webflow marks the field as required. */
          required: boolean | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get a single item from a Webflow CMS collection. */
    "webflow.get_collection_item": {
      input: {
        /**
         * The unique Webflow collection identifier.
         * @minLength 1
         */
        collectionId: string;
        /**
         * The unique Webflow CMS item identifier.
         * @minLength 1
         */
        itemId: string;
        /**
         * The unique Webflow CMS locale identifier.
         * @minLength 1
         */
        cmsLocaleId?: string;
      };
      output: {
        /** A Webflow CMS item. */
        item: {
          /** The unique CMS item identifier. */
          id: string;
          /** The CMS locale identifier for this item. */
          cmsLocaleId: string | null;
          /** The most recent publish timestamp when returned. */
          lastPublished: string | null;
          /** The most recent update timestamp when returned. */
          lastUpdated: string | null;
          /** The creation timestamp when returned. */
          createdOn: string | null;
          /** Whether the item is archived. */
          isArchived: boolean | null;
          /** Whether the item is a draft. */
          isDraft: boolean | null;
          /** Raw object data returned by Webflow. */
          fieldData: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get details for a single Webflow site. */
    "webflow.get_site": {
      input: {
        /**
         * The unique Webflow site identifier.
         * @minLength 1
         */
        siteId: string;
      };
      output: {
        /** A Webflow site summary. */
        site: {
          /** The unique site identifier. */
          id: string;
          /** The site display name. */
          displayName: string | null;
          /** The site short name. */
          shortName: string | null;
          /** The site preview image URL when returned by Webflow. */
          previewUrl: string | null;
          /** The workspace identifier that owns the site. */
          workspaceId: string | null;
          /** The most recent publish timestamp when returned. */
          lastPublished: string | null;
          /** The most recent update timestamp when returned. */
          lastUpdated: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List items in a Webflow CMS collection. */
    "webflow.list_collection_items": {
      input: {
        /**
         * The unique Webflow collection identifier.
         * @minLength 1
         */
        collectionId: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** CMS items in the collection. */
        items: Array<{
          /** The unique CMS item identifier. */
          id: string;
          /** The CMS locale identifier for this item. */
          cmsLocaleId: string | null;
          /** The most recent publish timestamp when returned. */
          lastPublished: string | null;
          /** The most recent update timestamp when returned. */
          lastUpdated: string | null;
          /** The creation timestamp when returned. */
          createdOn: string | null;
          /** Whether the item is archived. */
          isArchived: boolean | null;
          /** Whether the item is a draft. */
          isDraft: boolean | null;
          /** Raw object data returned by Webflow. */
          fieldData: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Webflow. */
        pagination: {
          /** Maximum number of records returned by Webflow. */
          limit: number | null;
          /** Number of records skipped by Webflow. */
          offset: number | null;
          /** Total number of records available when returned by Webflow. */
          total: number | null;
        };
      };
    };
    /** List CMS collections for a Webflow site. */
    "webflow.list_collections": {
      input: {
        /**
         * The unique Webflow site identifier.
         * @minLength 1
         */
        siteId: string;
      };
      output: {
        /** CMS collections for the site. */
        collections: Array<{
          /** The unique collection identifier. */
          id: string;
          /** The collection display name. */
          displayName: string | null;
          /** The singular collection item name. */
          singularName: string | null;
          /** The collection URL slug. */
          slug: string | null;
          /** The most recent update timestamp when returned. */
          lastUpdated: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Webflow sites available to the connected token. */
    "webflow.list_sites": {
      input: Record<string, never>;
      output: {
        /** Webflow sites returned by the API. */
        sites: Array<{
          /** The unique site identifier. */
          id: string;
          /** The site display name. */
          displayName: string | null;
          /** The site short name. */
          shortName: string | null;
          /** The site preview image URL when returned by Webflow. */
          previewUrl: string | null;
          /** The workspace identifier that owns the site. */
          workspaceId: string | null;
          /** The most recent publish timestamp when returned. */
          lastPublished: string | null;
          /** The most recent update timestamp when returned. */
          lastUpdated: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Publish one or more Webflow CMS collection items. */
    "webflow.publish_collection_items": {
      input: {
        /**
         * The unique Webflow collection identifier.
         * @minLength 1
         */
        collectionId: string;
        /**
         * Collection item identifiers to publish.
         * @minItems 1
         */
        itemIds: Array<string>;
      };
      output: {
        /** The Webflow publish response. */
        result: {
          /** CMS item identifiers that Webflow reported as published. */
          publishedItemIds: Array<string>;
          /** Publish errors returned by Webflow. */
          errors: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Publish a Webflow site to all domains or selected custom domains and return Webflow's publish result. */
    "webflow.publish_site": {
      input: {
        /**
         * The unique Webflow site identifier.
         * @minLength 1
         */
        siteId: string;
        /**
         * Optional custom domain identifiers to publish. Omit to publish all domains.
         * @minItems 1
         */
        customDomains?: Array<string>;
        /** Whether to publish to the default Webflow subdomain. */
        publishToWebflowSubdomain?: boolean;
      };
      output: {
        /** Raw object data returned by Webflow. */
        result: Record<string, unknown>;
      };
    };
    /** Update a draft or live item in a Webflow CMS collection. */
    "webflow.update_collection_item": {
      input: {
        /**
         * The unique Webflow collection identifier.
         * @minLength 1
         */
        collectionId: string;
        /**
         * The unique Webflow CMS item identifier.
         * @minLength 1
         */
        itemId: string;
        /** CMS field values keyed by Webflow field slug. Include the fields required by the collection. */
        fieldData: Record<string, unknown>;
        /** Whether the item should be archived. */
        isArchived?: boolean;
        /** Whether the item should remain a draft. */
        isDraft?: boolean;
        /**
         * The unique Webflow CMS locale identifier.
         * @minLength 1
         */
        cmsLocaleId?: string;
        /** Whether to update the item on the live site. */
        live?: boolean;
      };
      output: {
        /** A Webflow CMS item. */
        item: {
          /** The unique CMS item identifier. */
          id: string;
          /** The CMS locale identifier for this item. */
          cmsLocaleId: string | null;
          /** The most recent publish timestamp when returned. */
          lastPublished: string | null;
          /** The most recent update timestamp when returned. */
          lastUpdated: string | null;
          /** The creation timestamp when returned. */
          createdOn: string | null;
          /** Whether the item is archived. */
          isArchived: boolean | null;
          /** Whether the item is a draft. */
          isDraft: boolean | null;
          /** Raw object data returned by Webflow. */
          fieldData: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
