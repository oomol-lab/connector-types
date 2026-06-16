import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Weaviate collection definition by collection name, including properties and vectorizer settings. */
    "weaviate.get_collection": {
      input: {
        /**
         * The Weaviate collection name to retrieve.
         * @minLength 1
         */
        className: string;
        /** Whether Weaviate should proxy the schema request to the cluster leader for strong consistency. */
        consistency?: boolean;
      };
      output: {
        /** One Weaviate collection definition. */
        collection: {
          /**
           * The collection name.
           * @minLength 1
           */
          class?: string;
          /** The collection description. */
          description?: string;
          /** The collection vectorizer setting. */
          vectorizer?: string;
          /** The collection vector index type. */
          vectorIndexType?: string;
          /** Collection properties returned by Weaviate. */
          properties?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** The raw Weaviate collection payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Weaviate instance metadata, including version, hostname, loaded modules, and GRPC message size. */
    "weaviate.get_instance_metadata": {
      input: Record<string, never>;
      output: {
        /** Weaviate instance metadata. */
        meta: {
          /**
           * The URL hostname reported by the Weaviate instance.
           * @format uri
           */
          hostname?: string;
          /**
           * The Weaviate server version.
           * @minLength 1
           */
          version?: string;
          /** Module-specific metadata returned by Weaviate. */
          modules?: Record<string, unknown>;
          /** The maximum GRPC message size in bytes. */
          grpcMaxMessageSize?: number;
          [key: string]: unknown;
        };
        /** The raw Weaviate meta payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Weaviate object by collection name and UUID with optional include flags, consistency, node, and tenant routing. */
    "weaviate.get_object": {
      input: {
        /**
         * The Weaviate collection name the object belongs to.
         * @minLength 1
         */
        className: string;
        /**
         * The Weaviate object UUID.
         * @minLength 1
         * @format uuid
         */
        id: string;
        /** Additional fields to include, such as classification, vector, or interpretation. */
        include?: string;
        /** The optional consistency level query value to forward. */
        consistencyLevel?: string;
        /** The optional node name query value to forward. */
        nodeName?: string;
        /** The tenant name to target for a multi-tenant Weaviate collection. */
        tenant?: string;
      };
      output: {
        /** One Weaviate object. */
        object: {
          /** The collection name the object belongs to. */
          class?: string;
          /**
           * The Weaviate object UUID.
           * @format uuid
           */
          id?: string;
          /** The tenant name the object belongs to. */
          tenant?: string;
          /** The object properties returned by Weaviate. */
          properties?: Record<string, unknown>;
          /** Additional metadata returned by Weaviate. */
          additional?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw Weaviate object payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List all Weaviate collection definitions currently registered in the instance schema. */
    "weaviate.list_collections": {
      input: {
        /** Whether Weaviate should proxy the schema request to the cluster leader for strong consistency. */
        consistency?: boolean;
      };
      output: {
        /** The collection definitions returned by Weaviate. */
        classes: Array<{
          /**
           * The collection name.
           * @minLength 1
           */
          class?: string;
          /** The collection description. */
          description?: string;
          /** The collection vectorizer setting. */
          vectorizer?: string;
          /** The collection vector index type. */
          vectorIndexType?: string;
          /** Collection properties returned by Weaviate. */
          properties?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** The schema name returned by Weaviate. */
        name: string;
        /** The schema maintainer email returned by Weaviate. */
        maintainer: string;
        /** The raw Weaviate schema payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List objects from one Weaviate collection with optional paging, sorting, include flags, and tenant selection. */
    "weaviate.list_objects": {
      input: {
        /**
         * The Weaviate collection name to query.
         * @minLength 1
         */
        className: string;
        /** The tenant name to target for a multi-tenant Weaviate collection. */
        tenant?: string;
        /** The threshold UUID to page after. Use an empty string only when intentionally following the official Weaviate after semantics. */
        after?: string;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of objects to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** Additional fields to include, such as classification, vector, or interpretation. */
        include?: string;
        /** Comma-separated property names to sort by, such as city or country,city. */
        sort?: string;
        /** Comma-separated sort directions matching sort, such as asc or desc. */
        order?: string;
      };
      output: {
        /** The objects returned by Weaviate. */
        objects: Array<{
          /** The collection name the object belongs to. */
          class?: string;
          /**
           * The Weaviate object UUID.
           * @format uuid
           */
          id?: string;
          /** The tenant name the object belongs to. */
          tenant?: string;
          /** The object properties returned by Weaviate. */
          properties?: Record<string, unknown>;
          /** Additional metadata returned by Weaviate. */
          additional?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The total number of matching objects. */
        totalResults: number;
        /** The raw Weaviate object list payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
