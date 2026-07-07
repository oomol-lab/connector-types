import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Attach a Slab topic to a post. */
    "slab.add_topic_to_post": {
      input: {
        /**
         * A Slab GraphQL ID.
         * @minLength 1
         */
        postId: string;
        /**
         * A Slab GraphQL ID.
         * @minLength 1
         */
        topicId: string;
      };
      output: {
        /** A Slab topic. */
        topic: {
          /**
           * A Slab GraphQL ID.
           * @minLength 1
           */
          id: string;
          /** The topic name. */
          name: string;
          /** A JSON value returned by Slab. */
          description: unknown;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          insertedAt: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          updatedAt: string;
          /** The Slab topic privacy mode. */
          privacy: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
          /** The Slab topic member editability mode. */
          memberEditable: "ALL" | "POST" | "NONE";
          /** Whether the topic inherits members and owners from its parent. */
          inheritParent: boolean;
          /** The topic hierarchy IDs. */
          hierarchy?: Array<string> | null;
          /** A compact Slab topic reference. */
          parent?: {
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          } | null;
          /** Topic ancestors from the Slab hierarchy. */
          ancestors?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          /** Child topics under this topic. */
          children?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          /** Topic owner users. */
          owners?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          /** Topic member users. */
          members?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a blank Slab post, optionally in a topic or from a template. */
    "slab.create_post": {
      input: {
        /**
         * The new post title.
         * @minLength 1
         */
        title?: string;
        /**
         * A Slab GraphQL ID.
         * @minLength 1
         */
        topicId?: string;
        /**
         * A Slab GraphQL ID.
         * @minLength 1
         */
        templateId?: string;
      };
      output: {
        /** A Slab post. */
        post: {
          /**
           * A Slab GraphQL ID.
           * @minLength 1
           */
          id: string;
          /** The Slab post link access mode. */
          linkAccess: "INTERNAL" | "INTERNAL_VIEW" | "PUBLIC" | "PUBLIC_EDIT" | "DISABLED";
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          archivedAt?: string | null;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          publishedAt?: string | null;
          /** The post title. */
          title: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          insertedAt: string;
          /** A JSON value returned by Slab. */
          content: unknown;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          updatedAt: string;
          /** The Slab post version. */
          version: number;
          /** A compact Slab user reference. */
          owner: {
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Topics attached to the post. */
          topics: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Slab topic. */
    "slab.create_topic": {
      input: {
        /**
         * The topic name.
         * @minLength 1
         */
        name: string;
        /** A JSON value returned by Slab. */
        description?: unknown;
        /**
         * A Slab GraphQL ID.
         * @minLength 1
         */
        parentId?: string;
        /** The Slab topic member editability mode. */
        memberEditable?: "ALL" | "POST" | "NONE";
        /** The Slab topic privacy mode. */
        privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
        /** Whether to inherit parent topic owners and members. */
        inheritParent?: boolean;
      };
      output: {
        /** A Slab topic. */
        topic: {
          /**
           * A Slab GraphQL ID.
           * @minLength 1
           */
          id: string;
          /** The topic name. */
          name: string;
          /** A JSON value returned by Slab. */
          description: unknown;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          insertedAt: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          updatedAt: string;
          /** The Slab topic privacy mode. */
          privacy: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
          /** The Slab topic member editability mode. */
          memberEditable: "ALL" | "POST" | "NONE";
          /** Whether the topic inherits members and owners from its parent. */
          inheritParent: boolean;
          /** The topic hierarchy IDs. */
          hierarchy?: Array<string> | null;
          /** A compact Slab topic reference. */
          parent?: {
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          } | null;
          /** Topic ancestors from the Slab hierarchy. */
          ancestors?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          /** Child topics under this topic. */
          children?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          /** Topic owner users. */
          owners?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          /** Topic member users. */
          members?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Slab post by ID. */
    "slab.delete_post": {
      input: {
        /**
         * A Slab GraphQL ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Slab post. */
        post: {
          /**
           * A Slab GraphQL ID.
           * @minLength 1
           */
          id: string;
          /** The Slab post link access mode. */
          linkAccess: "INTERNAL" | "INTERNAL_VIEW" | "PUBLIC" | "PUBLIC_EDIT" | "DISABLED";
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          archivedAt?: string | null;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          publishedAt?: string | null;
          /** The post title. */
          title: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          insertedAt: string;
          /** A JSON value returned by Slab. */
          content: unknown;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          updatedAt: string;
          /** The Slab post version. */
          version: number;
          /** A compact Slab user reference. */
          owner: {
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Topics attached to the post. */
          topics: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Slab topic by ID. */
    "slab.delete_topic": {
      input: {
        /**
         * A Slab GraphQL ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Slab topic. */
        topic: {
          /**
           * A Slab GraphQL ID.
           * @minLength 1
           */
          id: string;
          /** The topic name. */
          name: string;
          /** A JSON value returned by Slab. */
          description: unknown;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          insertedAt: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          updatedAt: string;
          /** The Slab topic privacy mode. */
          privacy: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
          /** The Slab topic member editability mode. */
          memberEditable: "ALL" | "POST" | "NONE";
          /** Whether the topic inherits members and owners from its parent. */
          inheritParent: boolean;
          /** The topic hierarchy IDs. */
          hierarchy?: Array<string> | null;
          /** A compact Slab topic reference. */
          parent?: {
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          } | null;
          /** Topic ancestors from the Slab hierarchy. */
          ancestors?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          /** Child topics under this topic. */
          children?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          /** Topic owner users. */
          owners?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          /** Topic member users. */
          members?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the current Slab organization visible to the API token. */
    "slab.get_organization": {
      input: Record<string, never>;
      output: {
        /** A Slab organization. */
        organization: {
          /**
           * A Slab GraphQL ID.
           * @minLength 1
           */
          id: string;
          /** The organization name. */
          name: string;
          /** The Slab organization host. */
          host: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          insertedAt: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          updatedAt: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Slab post by ID. */
    "slab.get_post": {
      input: {
        /**
         * A Slab GraphQL ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Slab post. */
        post: {
          /**
           * A Slab GraphQL ID.
           * @minLength 1
           */
          id: string;
          /** The Slab post link access mode. */
          linkAccess: "INTERNAL" | "INTERNAL_VIEW" | "PUBLIC" | "PUBLIC_EDIT" | "DISABLED";
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          archivedAt?: string | null;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          publishedAt?: string | null;
          /** The post title. */
          title: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          insertedAt: string;
          /** A JSON value returned by Slab. */
          content: unknown;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          updatedAt: string;
          /** The Slab post version. */
          version: number;
          /** A compact Slab user reference. */
          owner: {
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Topics attached to the post. */
          topics: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get multiple Slab posts by ID. */
    "slab.get_posts": {
      input: {
        /**
         * The Slab IDs to retrieve. Slab accepts between 1 and 100 IDs.
         * @minItems 1
         * @maxItems 100
         */
        ids: Array<string>;
      };
      output: {
        /** Posts returned by Slab. */
        posts: Array<{
          /**
           * A Slab GraphQL ID.
           * @minLength 1
           */
          id: string;
          /** The Slab post link access mode. */
          linkAccess: "INTERNAL" | "INTERNAL_VIEW" | "PUBLIC" | "PUBLIC_EDIT" | "DISABLED";
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          archivedAt?: string | null;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          publishedAt?: string | null;
          /** The post title. */
          title: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          insertedAt: string;
          /** A JSON value returned by Slab. */
          content: unknown;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          updatedAt: string;
          /** The Slab post version. */
          version: number;
          /** A compact Slab user reference. */
          owner: {
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Topics attached to the post. */
          topics: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get one Slab topic by ID. */
    "slab.get_topic": {
      input: {
        /**
         * A Slab GraphQL ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Slab topic. */
        topic: {
          /**
           * A Slab GraphQL ID.
           * @minLength 1
           */
          id: string;
          /** The topic name. */
          name: string;
          /** A JSON value returned by Slab. */
          description: unknown;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          insertedAt: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          updatedAt: string;
          /** The Slab topic privacy mode. */
          privacy: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
          /** The Slab topic member editability mode. */
          memberEditable: "ALL" | "POST" | "NONE";
          /** Whether the topic inherits members and owners from its parent. */
          inheritParent: boolean;
          /** The topic hierarchy IDs. */
          hierarchy?: Array<string> | null;
          /** A compact Slab topic reference. */
          parent?: {
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          } | null;
          /** Topic ancestors from the Slab hierarchy. */
          ancestors?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          /** Child topics under this topic. */
          children?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          /** Topic owner users. */
          owners?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          /** Topic member users. */
          members?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get multiple Slab topics by ID. */
    "slab.get_topics": {
      input: {
        /**
         * The Slab IDs to retrieve. Slab accepts between 1 and 100 IDs.
         * @minItems 1
         * @maxItems 100
         */
        ids: Array<string>;
      };
      output: {
        /** Topics returned by Slab. */
        topics: Array<{
          /**
           * A Slab GraphQL ID.
           * @minLength 1
           */
          id: string;
          /** The topic name. */
          name: string;
          /** A JSON value returned by Slab. */
          description: unknown;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          insertedAt: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          updatedAt: string;
          /** The Slab topic privacy mode. */
          privacy: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
          /** The Slab topic member editability mode. */
          memberEditable: "ALL" | "POST" | "NONE";
          /** Whether the topic inherits members and owners from its parent. */
          inheritParent: boolean;
          /** The topic hierarchy IDs. */
          hierarchy?: Array<string> | null;
          /** A compact Slab topic reference. */
          parent?: {
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          } | null;
          /** Topic ancestors from the Slab hierarchy. */
          ancestors?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          /** Child topics under this topic. */
          children?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          /** Topic owner users. */
          owners?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          /** Topic member users. */
          members?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get one Slab user by ID. */
    "slab.get_user": {
      input: {
        /**
         * A Slab GraphQL ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Slab user. */
        user: {
          /**
           * A Slab GraphQL ID.
           * @minLength 1
           */
          id: string;
          /** The user's display name. */
          name: string;
          /** The user's title. */
          title: string;
          /**
           * The user's email address.
           * @format email
           */
          email: string;
          /** A JSON value returned by Slab. */
          description: unknown;
          /** The Slab user type. */
          type: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          deactivatedAt?: string | null;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          insertedAt: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          updatedAt: string;
          /** A Slab image object. */
          avatar?: {
            /** The original image URL. */
            original?: string | null;
            /** The thumbnail image URL. */
            thumb?: string | null;
            /** The preset image URL. */
            preset?: string | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        };
      };
    };
    /** List users in the current Slab organization. */
    "slab.list_users": {
      input: {
        /** Whether to include deactivated users. */
        includeDeactivated?: boolean;
      };
      output: {
        /** Users returned by Slab. */
        users: Array<{
          /**
           * A Slab GraphQL ID.
           * @minLength 1
           */
          id: string;
          /** The user's display name. */
          name: string;
          /** The user's title. */
          title: string;
          /**
           * The user's email address.
           * @format email
           */
          email: string;
          /** A JSON value returned by Slab. */
          description: unknown;
          /** The Slab user type. */
          type: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          deactivatedAt?: string | null;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          insertedAt: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          updatedAt: string;
          /** A Slab image object. */
          avatar?: {
            /** The original image URL. */
            original?: string | null;
            /** The thumbnail image URL. */
            thumb?: string | null;
            /** The preset image URL. */
            preset?: string | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Detach a Slab topic from a post. */
    "slab.remove_topic_from_post": {
      input: {
        /**
         * A Slab GraphQL ID.
         * @minLength 1
         */
        postId: string;
        /**
         * A Slab GraphQL ID.
         * @minLength 1
         */
        topicId: string;
      };
      output: {
        /** A Slab topic. */
        topic: {
          /**
           * A Slab GraphQL ID.
           * @minLength 1
           */
          id: string;
          /** The topic name. */
          name: string;
          /** A JSON value returned by Slab. */
          description: unknown;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          insertedAt: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          updatedAt: string;
          /** The Slab topic privacy mode. */
          privacy: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
          /** The Slab topic member editability mode. */
          memberEditable: "ALL" | "POST" | "NONE";
          /** Whether the topic inherits members and owners from its parent. */
          inheritParent: boolean;
          /** The topic hierarchy IDs. */
          hierarchy?: Array<string> | null;
          /** A compact Slab topic reference. */
          parent?: {
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          } | null;
          /** Topic ancestors from the Slab hierarchy. */
          ancestors?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          /** Child topics under this topic. */
          children?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          /** Topic owner users. */
          owners?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          /** Topic member users. */
          members?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Search Slab posts, topics, users, and comments with cursor pagination. */
    "slab.search": {
      input: {
        /**
         * The Slab search query.
         * @minLength 1
         */
        query: string;
        /**
         * Search result types to include.
         * @minItems 1
         */
        types?: Array<"POST" | "COMMENT" | "TOPIC" | "USER">;
        /** The number of results to return after the cursor. */
        first?: number;
        /**
         * The cursor after which to return results.
         * @minLength 1
         */
        after?: string;
        /** The number of results to return before the cursor. */
        last?: number;
        /**
         * The cursor before which to return results.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /** Search results returned by Slab. */
        results: Array<{
          /** The normalized search result type. */
          type?: "POST" | "COMMENT" | "TOPIC" | "USER";
          /** The pagination cursor for this result. */
          cursor?: string;
          /** The highlighted or fallback result title. */
          title?: string;
          /** A JSON value returned by Slab. */
          content?: unknown;
          /** A JSON value returned by Slab. */
          highlight?: unknown;
          /** A Slab post. */
          post?: {
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The Slab post link access mode. */
            linkAccess: "INTERNAL" | "INTERNAL_VIEW" | "PUBLIC" | "PUBLIC_EDIT" | "DISABLED";
            /**
             * An ISO 8601 timestamp returned by Slab.
             * @format date-time
             */
            archivedAt?: string | null;
            /**
             * An ISO 8601 timestamp returned by Slab.
             * @format date-time
             */
            publishedAt?: string | null;
            /** The post title. */
            title: string;
            /**
             * An ISO 8601 timestamp returned by Slab.
             * @format date-time
             */
            insertedAt: string;
            /** A JSON value returned by Slab. */
            content: unknown;
            /**
             * An ISO 8601 timestamp returned by Slab.
             * @format date-time
             */
            updatedAt: string;
            /** The Slab post version. */
            version: number;
            /** A compact Slab user reference. */
            owner: {
              /**
               * A Slab GraphQL ID.
               * @minLength 1
               */
              id: string;
              /** The user's display name. */
              name: string;
              /**
               * The user's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            /** Topics attached to the post. */
            topics: Array<{
              /**
               * A Slab GraphQL ID.
               * @minLength 1
               */
              id: string;
              /** The topic name. */
              name: string;
              /** The Slab topic privacy mode. */
              privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** A Slab topic. */
          topic?: {
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** A JSON value returned by Slab. */
            description: unknown;
            /**
             * An ISO 8601 timestamp returned by Slab.
             * @format date-time
             */
            insertedAt: string;
            /**
             * An ISO 8601 timestamp returned by Slab.
             * @format date-time
             */
            updatedAt: string;
            /** The Slab topic privacy mode. */
            privacy: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            /** The Slab topic member editability mode. */
            memberEditable: "ALL" | "POST" | "NONE";
            /** Whether the topic inherits members and owners from its parent. */
            inheritParent: boolean;
            /** The topic hierarchy IDs. */
            hierarchy?: Array<string> | null;
            /** A compact Slab topic reference. */
            parent?: {
              /**
               * A Slab GraphQL ID.
               * @minLength 1
               */
              id: string;
              /** The topic name. */
              name: string;
              /** The Slab topic privacy mode. */
              privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
              [key: string]: unknown;
            } | null;
            /** Topic ancestors from the Slab hierarchy. */
            ancestors?: Array<{
              /**
               * A Slab GraphQL ID.
               * @minLength 1
               */
              id: string;
              /** The topic name. */
              name: string;
              /** The Slab topic privacy mode. */
              privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
              [key: string]: unknown;
            }>;
            /** Child topics under this topic. */
            children?: Array<{
              /**
               * A Slab GraphQL ID.
               * @minLength 1
               */
              id: string;
              /** The topic name. */
              name: string;
              /** The Slab topic privacy mode. */
              privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
              [key: string]: unknown;
            }>;
            /** Topic owner users. */
            owners?: Array<{
              /**
               * A Slab GraphQL ID.
               * @minLength 1
               */
              id: string;
              /** The user's display name. */
              name: string;
              /**
               * The user's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            }>;
            /** Topic member users. */
            members?: Array<{
              /**
               * A Slab GraphQL ID.
               * @minLength 1
               */
              id: string;
              /** The user's display name. */
              name: string;
              /**
               * The user's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** A Slab user. */
          user?: {
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /** The user's title. */
            title: string;
            /**
             * The user's email address.
             * @format email
             */
            email: string;
            /** A JSON value returned by Slab. */
            description: unknown;
            /** The Slab user type. */
            type: string;
            /**
             * An ISO 8601 timestamp returned by Slab.
             * @format date-time
             */
            deactivatedAt?: string | null;
            /**
             * An ISO 8601 timestamp returned by Slab.
             * @format date-time
             */
            insertedAt: string;
            /**
             * An ISO 8601 timestamp returned by Slab.
             * @format date-time
             */
            updatedAt: string;
            /** A Slab image object. */
            avatar?: {
              /** The original image URL. */
              original?: string | null;
              /** The thumbnail image URL. */
              thumb?: string | null;
              /** The preset image URL. */
              preset?: string | null;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          };
          /** A Slab comment. */
          comment?: {
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** A JSON value returned by Slab. */
            content: unknown;
            /**
             * An ISO 8601 timestamp returned by Slab.
             * @format date-time
             */
            insertedAt: string;
            /** A compact Slab user reference. */
            author: {
              /**
               * A Slab GraphQL ID.
               * @minLength 1
               */
              id: string;
              /** The user's display name. */
              name: string;
              /**
               * The user's email address.
               * @format email
               */
              email?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Slab cursor pagination metadata. */
        pageInfo: {
          /** Whether another page exists before this page. */
          hasPreviousPage: boolean;
          /** Whether another page exists after this page. */
          hasNextPage: boolean;
          /** The cursor for the first edge in this page. */
          startCursor: string | null;
          /** The cursor for the last edge in this page. */
          endCursor: string | null;
        };
      };
    };
    /** Create or update a readonly Slab copy of external HTML or Markdown content. */
    "slab.sync_post": {
      input: {
        /**
         * A Slab GraphQL ID.
         * @minLength 1
         */
        externalId: string;
        /** The content format for a synced Slab post. */
        format: "HTML" | "MARKDOWN";
        /**
         * The HTML or Markdown content to sync into Slab.
         * @minLength 1
         */
        content: string;
        /**
         * The external edit URL for the source content.
         * @format uri
         */
        editUrl?: string;
        /**
         * The external read URL for the source content.
         * @format uri
         */
        readUrl?: string;
      };
      output: {
        /** A Slab post. */
        post: {
          /**
           * A Slab GraphQL ID.
           * @minLength 1
           */
          id: string;
          /** The Slab post link access mode. */
          linkAccess: "INTERNAL" | "INTERNAL_VIEW" | "PUBLIC" | "PUBLIC_EDIT" | "DISABLED";
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          archivedAt?: string | null;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          publishedAt?: string | null;
          /** The post title. */
          title: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          insertedAt: string;
          /** A JSON value returned by Slab. */
          content: unknown;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          updatedAt: string;
          /** The Slab post version. */
          version: number;
          /** A compact Slab user reference. */
          owner: {
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Topics attached to the post. */
          topics: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Update Slab post metadata such as owner, publication state, link access, or banner. */
    "slab.update_post": {
      input: {
        /**
         * A Slab GraphQL ID.
         * @minLength 1
         */
        id: string;
        /**
         * A Slab GraphQL ID.
         * @minLength 1
         */
        ownerId?: string;
        /** Whether the post should be archived. */
        archived?: boolean;
        /** Whether the post should be published. */
        published?: boolean;
        /** The Slab post link access mode. */
        linkAccess?: "INTERNAL" | "INTERNAL_VIEW" | "PUBLIC" | "PUBLIC_EDIT" | "DISABLED";
        /**
         * The post banner image URL.
         * @format uri
         */
        bannerUrl?: string;
      };
      output: {
        /** A Slab post. */
        post: {
          /**
           * A Slab GraphQL ID.
           * @minLength 1
           */
          id: string;
          /** The Slab post link access mode. */
          linkAccess: "INTERNAL" | "INTERNAL_VIEW" | "PUBLIC" | "PUBLIC_EDIT" | "DISABLED";
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          archivedAt?: string | null;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          publishedAt?: string | null;
          /** The post title. */
          title: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          insertedAt: string;
          /** A JSON value returned by Slab. */
          content: unknown;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          updatedAt: string;
          /** The Slab post version. */
          version: number;
          /** A compact Slab user reference. */
          owner: {
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          };
          /** Topics attached to the post. */
          topics: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Slab topic. */
    "slab.update_topic": {
      input: {
        /**
         * A Slab GraphQL ID.
         * @minLength 1
         */
        id: string;
        /**
         * The topic name.
         * @minLength 1
         */
        name?: string;
        /** A JSON value returned by Slab. */
        description?: unknown;
        /**
         * A Slab GraphQL ID.
         * @minLength 1
         */
        parentId?: string;
        /** The Slab topic member editability mode. */
        memberEditable?: "ALL" | "POST" | "NONE";
        /** The Slab topic privacy mode. */
        privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
        /**
         * The topic banner image URL.
         * @format uri
         */
        bannerUrl?: string;
        /** Whether to inherit parent topic owners and members. */
        inheritParent?: boolean;
        /** Whether privacy changes should propagate to subtopics. */
        propagatePrivacy?: boolean;
      };
      output: {
        /** A Slab topic. */
        topic: {
          /**
           * A Slab GraphQL ID.
           * @minLength 1
           */
          id: string;
          /** The topic name. */
          name: string;
          /** A JSON value returned by Slab. */
          description: unknown;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          insertedAt: string;
          /**
           * An ISO 8601 timestamp returned by Slab.
           * @format date-time
           */
          updatedAt: string;
          /** The Slab topic privacy mode. */
          privacy: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
          /** The Slab topic member editability mode. */
          memberEditable: "ALL" | "POST" | "NONE";
          /** Whether the topic inherits members and owners from its parent. */
          inheritParent: boolean;
          /** The topic hierarchy IDs. */
          hierarchy?: Array<string> | null;
          /** A compact Slab topic reference. */
          parent?: {
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          } | null;
          /** Topic ancestors from the Slab hierarchy. */
          ancestors?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          /** Child topics under this topic. */
          children?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The topic name. */
            name: string;
            /** The Slab topic privacy mode. */
            privacy?: "OPEN" | "PRIVATE" | "SECRET" | "PUBLIC";
            [key: string]: unknown;
          }>;
          /** Topic owner users. */
          owners?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          /** Topic member users. */
          members?: Array<{
            /**
             * A Slab GraphQL ID.
             * @minLength 1
             */
            id: string;
            /** The user's display name. */
            name: string;
            /**
             * The user's email address.
             * @format email
             */
            email?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
  }
}
