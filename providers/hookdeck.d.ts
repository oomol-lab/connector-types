import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Hookdeck connection and optionally create or bind its source and destination. */
    "hookdeck.create_connection": {
      input: {
        /**
         * The Hookdeck resource name.
         * @minLength 1
         */
        name: string;
        /**
         * The Hookdeck resource description.
         * @minLength 1
         */
        description?: string;
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        sourceId?: string;
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        destinationId?: string;
        /** The Hookdeck source input object. */
        source?: {
          /**
           * The Hookdeck resource name.
           * @minLength 1
           */
          name?: string;
          /**
           * The Hookdeck resource description.
           * @minLength 1
           */
          description?: string;
          /** The Hookdeck source type. */
          type?: string;
          /** The Hookdeck source config object. */
          config?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The Hookdeck destination input object. */
        destination?: {
          /**
           * The Hookdeck resource name.
           * @minLength 1
           */
          name?: string;
          /**
           * The Hookdeck resource description.
           * @minLength 1
           */
          description?: string;
          /** The Hookdeck destination type. */
          type?: string;
          /** The Hookdeck destination config object. */
          config?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Rules to attach to the Hookdeck connection. */
        rules?: Array<Record<string, unknown>>;
      };
      output: {
        /** A normalized Hookdeck connection. */
        connection: {
          /** The Hookdeck connection ID. */
          id?: string;
          /** The Hookdeck connection name. */
          name?: string;
          /** The Hookdeck full_name value. */
          fullName?: string | null;
          /** The Hookdeck connection description. */
          description?: string | null;
          /** A normalized Hookdeck source. */
          source?: {
            /** The Hookdeck source ID. */
            id?: string;
            /** The Hookdeck source name. */
            name?: string;
            /** The Hookdeck source type. */
            type?: string | null;
            /**
             * The Hookdeck source ingestion URL.
             * @format uri
             */
            url?: string | null;
            /** Whether the Hookdeck source is authenticated. */
            authenticated?: boolean | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            disabledAt?: string | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            createdAt?: string | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            updatedAt?: string | null;
            /** The raw Hookdeck object. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** A normalized Hookdeck destination. */
          destination?: {
            /** The Hookdeck destination ID. */
            id?: string;
            /** The Hookdeck destination name. */
            name?: string;
            /** The Hookdeck destination type. */
            type?: string | null;
            /** The Hookdeck destination config object. */
            config?: Record<string, unknown>;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            disabledAt?: string | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            createdAt?: string | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            updatedAt?: string | null;
            /** The raw Hookdeck object. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          disabledAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          pausedAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The raw Hookdeck object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw Hookdeck object. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Hookdeck destination. */
    "hookdeck.create_destination": {
      input: {
        /**
         * The Hookdeck resource name.
         * @minLength 1
         */
        name: string;
        /**
         * The Hookdeck resource description.
         * @minLength 1
         */
        description?: string;
        /** The Hookdeck destination type. */
        type?: string;
        /** The Hookdeck destination config object. */
        config: {
          /**
           * The HTTP endpoint URL for an HTTP destination.
           * @format uri
           */
          url?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** A normalized Hookdeck destination. */
        destination: {
          /** The Hookdeck destination ID. */
          id?: string;
          /** The Hookdeck destination name. */
          name?: string;
          /** The Hookdeck destination type. */
          type?: string | null;
          /** The Hookdeck destination config object. */
          config?: Record<string, unknown>;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          disabledAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The raw Hookdeck object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw Hookdeck object. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Hookdeck source. */
    "hookdeck.create_source": {
      input: {
        /**
         * The Hookdeck resource name.
         * @minLength 1
         */
        name: string;
        /**
         * The Hookdeck resource description.
         * @minLength 1
         */
        description?: string;
        /** The Hookdeck source type. */
        type?: string;
        /** The Hookdeck source config object. */
        config?: Record<string, unknown>;
      };
      output: {
        /** A normalized Hookdeck source. */
        source: {
          /** The Hookdeck source ID. */
          id?: string;
          /** The Hookdeck source name. */
          name?: string;
          /** The Hookdeck source type. */
          type?: string | null;
          /**
           * The Hookdeck source ingestion URL.
           * @format uri
           */
          url?: string | null;
          /** Whether the Hookdeck source is authenticated. */
          authenticated?: boolean | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          disabledAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The raw Hookdeck object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw Hookdeck object. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a Hookdeck connection by ID. */
    "hookdeck.delete_connection": {
      input: {
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        connectionId: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /** The raw Hookdeck object. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a Hookdeck destination by ID. */
    "hookdeck.delete_destination": {
      input: {
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        destinationId: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /** The raw Hookdeck object. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a Hookdeck source by ID. */
    "hookdeck.delete_source": {
      input: {
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        sourceId: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /** The raw Hookdeck object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Hookdeck connection by ID. */
    "hookdeck.get_connection": {
      input: {
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        connectionId: string;
      };
      output: {
        /** A normalized Hookdeck connection. */
        connection: {
          /** The Hookdeck connection ID. */
          id?: string;
          /** The Hookdeck connection name. */
          name?: string;
          /** The Hookdeck full_name value. */
          fullName?: string | null;
          /** The Hookdeck connection description. */
          description?: string | null;
          /** A normalized Hookdeck source. */
          source?: {
            /** The Hookdeck source ID. */
            id?: string;
            /** The Hookdeck source name. */
            name?: string;
            /** The Hookdeck source type. */
            type?: string | null;
            /**
             * The Hookdeck source ingestion URL.
             * @format uri
             */
            url?: string | null;
            /** Whether the Hookdeck source is authenticated. */
            authenticated?: boolean | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            disabledAt?: string | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            createdAt?: string | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            updatedAt?: string | null;
            /** The raw Hookdeck object. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** A normalized Hookdeck destination. */
          destination?: {
            /** The Hookdeck destination ID. */
            id?: string;
            /** The Hookdeck destination name. */
            name?: string;
            /** The Hookdeck destination type. */
            type?: string | null;
            /** The Hookdeck destination config object. */
            config?: Record<string, unknown>;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            disabledAt?: string | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            createdAt?: string | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            updatedAt?: string | null;
            /** The raw Hookdeck object. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          disabledAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          pausedAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The raw Hookdeck object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw Hookdeck object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Hookdeck destination by ID. */
    "hookdeck.get_destination": {
      input: {
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        destinationId: string;
      };
      output: {
        /** A normalized Hookdeck destination. */
        destination: {
          /** The Hookdeck destination ID. */
          id?: string;
          /** The Hookdeck destination name. */
          name?: string;
          /** The Hookdeck destination type. */
          type?: string | null;
          /** The Hookdeck destination config object. */
          config?: Record<string, unknown>;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          disabledAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The raw Hookdeck object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw Hookdeck object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Hookdeck source by ID. */
    "hookdeck.get_source": {
      input: {
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        sourceId: string;
      };
      output: {
        /** A normalized Hookdeck source. */
        source: {
          /** The Hookdeck source ID. */
          id?: string;
          /** The Hookdeck source name. */
          name?: string;
          /** The Hookdeck source type. */
          type?: string | null;
          /**
           * The Hookdeck source ingestion URL.
           * @format uri
           */
          url?: string | null;
          /** Whether the Hookdeck source is authenticated. */
          authenticated?: boolean | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          disabledAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The raw Hookdeck object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw Hookdeck object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Hookdeck connections with optional filters and cursor pagination. */
    "hookdeck.list_connections": {
      input: {
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        id?: string;
        /**
         * Filter connections by name or name expression.
         * @minLength 1
         */
        name?: string;
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        sourceId?: string;
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        destinationId?: string;
        /**
         * Fuzzy match the Hookdeck full_name value.
         * @minLength 1
         */
        fullName?: string;
        /** Whether to include disabled connections. */
        disabled?: boolean;
        /**
         * The maximum number of connections to return. Hookdeck allows up to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The Hookdeck cursor for the next page.
         * @minLength 1
         */
        next?: string;
        /**
         * The Hookdeck cursor for the previous page.
         * @minLength 1
         */
        prev?: string;
        /**
         * The Hookdeck order_by value.
         * @minLength 1
         */
        orderBy?: string;
        /** The Hookdeck sort direction. */
        dir?: "asc" | "desc";
      };
      output: {
        /** The Hookdeck connections returned by the API. */
        connections: Array<{
          /** The Hookdeck connection ID. */
          id?: string;
          /** The Hookdeck connection name. */
          name?: string;
          /** The Hookdeck full_name value. */
          fullName?: string | null;
          /** The Hookdeck connection description. */
          description?: string | null;
          /** A normalized Hookdeck source. */
          source?: {
            /** The Hookdeck source ID. */
            id?: string;
            /** The Hookdeck source name. */
            name?: string;
            /** The Hookdeck source type. */
            type?: string | null;
            /**
             * The Hookdeck source ingestion URL.
             * @format uri
             */
            url?: string | null;
            /** Whether the Hookdeck source is authenticated. */
            authenticated?: boolean | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            disabledAt?: string | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            createdAt?: string | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            updatedAt?: string | null;
            /** The raw Hookdeck object. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** A normalized Hookdeck destination. */
          destination?: {
            /** The Hookdeck destination ID. */
            id?: string;
            /** The Hookdeck destination name. */
            name?: string;
            /** The Hookdeck destination type. */
            type?: string | null;
            /** The Hookdeck destination config object. */
            config?: Record<string, unknown>;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            disabledAt?: string | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            createdAt?: string | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            updatedAt?: string | null;
            /** The raw Hookdeck object. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          disabledAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          pausedAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The raw Hookdeck object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The number of connections returned by Hookdeck. */
        count: number;
        /** Hookdeck cursor pagination metadata. */
        pagination: {
          /** The field Hookdeck used for ordering this page. */
          order_by?: string;
          /** The ordering direction returned by Hookdeck. */
          dir?: string;
          /** The page size returned by Hookdeck. */
          limit?: number;
          /** The cursor for the next page when present. */
          next?: string;
          /** The cursor for the previous page when present. */
          prev?: string;
          [key: string]: unknown;
        };
        /** The raw Hookdeck list response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Hookdeck destinations with optional filters and cursor pagination. */
    "hookdeck.list_destinations": {
      input: {
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        id?: string;
        /**
         * Filter resources by name or name expression.
         * @minLength 1
         */
        name?: string;
        /** Whether to include disabled resources. */
        disabled?: boolean;
        /**
         * The maximum number of resources to return. Hookdeck allows up to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The Hookdeck cursor for the next page.
         * @minLength 1
         */
        next?: string;
        /**
         * The Hookdeck cursor for the previous page.
         * @minLength 1
         */
        prev?: string;
        /**
         * The Hookdeck order_by value.
         * @minLength 1
         */
        orderBy?: string;
        /** The Hookdeck sort direction. */
        dir?: "asc" | "desc";
      };
      output: {
        /** The Hookdeck destinations returned by the API. */
        destinations: Array<{
          /** The Hookdeck destination ID. */
          id?: string;
          /** The Hookdeck destination name. */
          name?: string;
          /** The Hookdeck destination type. */
          type?: string | null;
          /** The Hookdeck destination config object. */
          config?: Record<string, unknown>;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          disabledAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The raw Hookdeck object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The number of destinations returned by Hookdeck. */
        count: number;
        /** Hookdeck cursor pagination metadata. */
        pagination: {
          /** The field Hookdeck used for ordering this page. */
          order_by?: string;
          /** The ordering direction returned by Hookdeck. */
          dir?: string;
          /** The page size returned by Hookdeck. */
          limit?: number;
          /** The cursor for the next page when present. */
          next?: string;
          /** The cursor for the previous page when present. */
          prev?: string;
          [key: string]: unknown;
        };
        /** The raw Hookdeck list response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Hookdeck sources with optional filters and cursor pagination. */
    "hookdeck.list_sources": {
      input: {
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        id?: string;
        /**
         * Filter resources by name or name expression.
         * @minLength 1
         */
        name?: string;
        /** Whether to include disabled resources. */
        disabled?: boolean;
        /**
         * The maximum number of resources to return. Hookdeck allows up to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The Hookdeck cursor for the next page.
         * @minLength 1
         */
        next?: string;
        /**
         * The Hookdeck cursor for the previous page.
         * @minLength 1
         */
        prev?: string;
        /**
         * The Hookdeck order_by value.
         * @minLength 1
         */
        orderBy?: string;
        /** The Hookdeck sort direction. */
        dir?: "asc" | "desc";
      };
      output: {
        /** The Hookdeck sources returned by the API. */
        sources: Array<{
          /** The Hookdeck source ID. */
          id?: string;
          /** The Hookdeck source name. */
          name?: string;
          /** The Hookdeck source type. */
          type?: string | null;
          /**
           * The Hookdeck source ingestion URL.
           * @format uri
           */
          url?: string | null;
          /** Whether the Hookdeck source is authenticated. */
          authenticated?: boolean | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          disabledAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The raw Hookdeck object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The number of sources returned by Hookdeck. */
        count: number;
        /** Hookdeck cursor pagination metadata. */
        pagination: {
          /** The field Hookdeck used for ordering this page. */
          order_by?: string;
          /** The ordering direction returned by Hookdeck. */
          dir?: string;
          /** The page size returned by Hookdeck. */
          limit?: number;
          /** The cursor for the next page when present. */
          next?: string;
          /** The cursor for the previous page when present. */
          prev?: string;
          [key: string]: unknown;
        };
        /** The raw Hookdeck list response. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Hookdeck connection by ID. */
    "hookdeck.update_connection": {
      input: {
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        connectionId: string;
        /**
         * The Hookdeck resource name.
         * @minLength 1
         */
        name?: string;
        /**
         * The Hookdeck resource description.
         * @minLength 1
         */
        description?: string;
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        sourceId?: string;
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        destinationId?: string;
        /** The Hookdeck source input object. */
        source?: {
          /**
           * The Hookdeck resource name.
           * @minLength 1
           */
          name?: string;
          /**
           * The Hookdeck resource description.
           * @minLength 1
           */
          description?: string;
          /** The Hookdeck source type. */
          type?: string;
          /** The Hookdeck source config object. */
          config?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The Hookdeck destination input object. */
        destination?: {
          /**
           * The Hookdeck resource name.
           * @minLength 1
           */
          name?: string;
          /**
           * The Hookdeck resource description.
           * @minLength 1
           */
          description?: string;
          /** The Hookdeck destination type. */
          type?: string;
          /** The Hookdeck destination config object. */
          config?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Rules to attach to the Hookdeck connection. */
        rules?: Array<Record<string, unknown>>;
      };
      output: {
        /** A normalized Hookdeck connection. */
        connection: {
          /** The Hookdeck connection ID. */
          id?: string;
          /** The Hookdeck connection name. */
          name?: string;
          /** The Hookdeck full_name value. */
          fullName?: string | null;
          /** The Hookdeck connection description. */
          description?: string | null;
          /** A normalized Hookdeck source. */
          source?: {
            /** The Hookdeck source ID. */
            id?: string;
            /** The Hookdeck source name. */
            name?: string;
            /** The Hookdeck source type. */
            type?: string | null;
            /**
             * The Hookdeck source ingestion URL.
             * @format uri
             */
            url?: string | null;
            /** Whether the Hookdeck source is authenticated. */
            authenticated?: boolean | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            disabledAt?: string | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            createdAt?: string | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            updatedAt?: string | null;
            /** The raw Hookdeck object. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** A normalized Hookdeck destination. */
          destination?: {
            /** The Hookdeck destination ID. */
            id?: string;
            /** The Hookdeck destination name. */
            name?: string;
            /** The Hookdeck destination type. */
            type?: string | null;
            /** The Hookdeck destination config object. */
            config?: Record<string, unknown>;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            disabledAt?: string | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            createdAt?: string | null;
            /**
             * The timestamp returned by Hookdeck.
             * @format date-time
             */
            updatedAt?: string | null;
            /** The raw Hookdeck object. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          disabledAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          pausedAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The raw Hookdeck object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw Hookdeck object. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Hookdeck destination by ID. */
    "hookdeck.update_destination": {
      input: {
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        destinationId: string;
        /**
         * The Hookdeck resource name.
         * @minLength 1
         */
        name?: string;
        /**
         * The Hookdeck resource description.
         * @minLength 1
         */
        description?: string;
        /** The Hookdeck destination type. */
        type?: string;
        /** The Hookdeck destination config object. */
        config?: {
          /**
           * The HTTP endpoint URL for an HTTP destination.
           * @format uri
           */
          url?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** A normalized Hookdeck destination. */
        destination: {
          /** The Hookdeck destination ID. */
          id?: string;
          /** The Hookdeck destination name. */
          name?: string;
          /** The Hookdeck destination type. */
          type?: string | null;
          /** The Hookdeck destination config object. */
          config?: Record<string, unknown>;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          disabledAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The raw Hookdeck object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw Hookdeck object. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Hookdeck source by ID. */
    "hookdeck.update_source": {
      input: {
        /**
         * The Hookdeck resource identifier.
         * @minLength 1
         */
        sourceId: string;
        /**
         * The Hookdeck resource name.
         * @minLength 1
         */
        name?: string;
        /**
         * The Hookdeck resource description.
         * @minLength 1
         */
        description?: string;
        /** The Hookdeck source type. */
        type?: string;
        /** The Hookdeck source config object. */
        config?: Record<string, unknown>;
      };
      output: {
        /** A normalized Hookdeck source. */
        source: {
          /** The Hookdeck source ID. */
          id?: string;
          /** The Hookdeck source name. */
          name?: string;
          /** The Hookdeck source type. */
          type?: string | null;
          /**
           * The Hookdeck source ingestion URL.
           * @format uri
           */
          url?: string | null;
          /** Whether the Hookdeck source is authenticated. */
          authenticated?: boolean | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          disabledAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * The timestamp returned by Hookdeck.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The raw Hookdeck object. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw Hookdeck object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
