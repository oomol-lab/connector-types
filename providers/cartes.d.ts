import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Cartes.io map. */
    "cartes.create_map": {
      input: {
        /**
         * Map title.
         * @maxLength 191
         */
        title?: string;
        /**
         * Optional unique map slug.
         * @maxLength 255
         */
        slug?: string;
        /** Optional map description. */
        description?: string;
        /** The Cartes.io map privacy value. */
        privacy?: "public" | "unlisted" | "private";
        /** Who can create markers on the map. */
        usersCanCreateMarkers?: "yes" | "only_logged_in" | "no";
      };
      output: {
        /** The raw Cartes.io JSON object. */
        map: Record<string, unknown>;
      };
    };
    /** Create a marker on one Cartes.io map. */
    "cartes.create_marker": {
      input: {
        /**
         * Optional map token for anonymous or token-protected map operations.
         * @minLength 1
         */
        mapToken?: string;
        /**
         * Marker description.
         * @maxLength 191
         */
        description?: string;
        /**
         * The Cartes.io category id.
         * @exclusiveMinimum 0
         */
        categoryId?: number;
        /**
         * Category name used when categoryId is not provided.
         * @minLength 3
         * @maxLength 32
         */
        categoryName?: string;
        /**
         * Latitude coordinate in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * Longitude coordinate in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lng: number;
        /**
         * Optional marker link URL.
         * @format uri
         */
        link?: string;
        /**
         * Map zoom level.
         * @minimum 0
         * @maximum 20
         */
        zoom?: number;
        /**
         * Elevation in meters.
         * @minimum -100000
         * @maximum 100000
         */
        elevation?: number;
        /**
         * Marker expiration timestamp.
         * @format date-time
         */
        expiresAt?: string;
        /**
         * Optional marker metadata values.
         * @maxItems 25
         */
        meta?: Array<unknown>;
        /**
         * Heading in degrees.
         * @minimum 0
         * @maximum 360
         */
        heading?: number;
        /**
         * Pitch in degrees.
         * @minimum -90
         * @maximum 90
         */
        pitch?: number;
        /**
         * Roll in degrees.
         * @minimum -180
         * @maximum 180
         */
        roll?: number;
        /**
         * Marker speed.
         * @minimum 0
         * @maximum 100000
         */
        speed?: number;
        /**
         * The Cartes.io map UUID.
         * @format uuid
         */
        mapUuid: string;
      };
      output: {
        /** The raw Cartes.io JSON object. */
        marker: Record<string, unknown>;
      };
    };
    /** Append a new location point to one Cartes.io marker. */
    "cartes.create_marker_location": {
      input: {
        /**
         * The Cartes.io map UUID.
         * @format uuid
         */
        mapUuid: string;
        /**
         * The Cartes.io marker id.
         * @exclusiveMinimum 0
         */
        markerId: number;
        /**
         * Optional map token for anonymous or token-protected map operations.
         * @minLength 1
         */
        mapToken?: string;
        /**
         * Latitude coordinate in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * Longitude coordinate in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lng: number;
        /**
         * Map zoom level.
         * @minimum 0
         * @maximum 20
         */
        zoom?: number;
        /**
         * Elevation in meters.
         * @minimum -100000
         * @maximum 100000
         */
        elevation?: number;
        /**
         * Heading in degrees.
         * @minimum 0
         * @maximum 360
         */
        heading?: number;
        /**
         * Pitch in degrees.
         * @minimum -90
         * @maximum 90
         */
        pitch?: number;
        /**
         * Roll in degrees.
         * @minimum -180
         * @maximum 180
         */
        roll?: number;
        /**
         * Marker speed.
         * @minimum 0
         * @maximum 100000
         */
        speed?: number;
      };
      output: {
        /** The raw Cartes.io JSON object. */
        marker: Record<string, unknown>;
      };
    };
    /** Delete one Cartes.io map. */
    "cartes.delete_map": {
      input: {
        /**
         * The Cartes.io map UUID.
         * @format uuid
         */
        mapUuid: string;
        /**
         * Optional map token for anonymous or token-protected map operations.
         * @minLength 1
         */
        mapToken?: string;
      };
      output: {
        /** Whether Cartes.io confirmed the deletion. */
        success: boolean;
        /** The raw Cartes.io JSON object. */
        raw?: Record<string, unknown>;
      };
    };
    /** Delete one marker from a Cartes.io map. */
    "cartes.delete_marker": {
      input: {
        /**
         * The Cartes.io map UUID.
         * @format uuid
         */
        mapUuid: string;
        /**
         * The Cartes.io marker id.
         * @exclusiveMinimum 0
         */
        markerId: number;
        /**
         * Optional map token for anonymous or token-protected map operations.
         * @minLength 1
         */
        mapToken?: string;
      };
      output: {
        /** Whether Cartes.io confirmed the deletion. */
        success: boolean;
        /** The raw Cartes.io JSON object. */
        raw?: Record<string, unknown>;
      };
    };
    /** Get the current Cartes.io user for the connected API token. */
    "cartes.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The raw Cartes.io JSON object. */
        user: Record<string, unknown>;
      };
    };
    /** Get one Cartes.io map. */
    "cartes.get_map": {
      input: {
        /**
         * The Cartes.io map UUID.
         * @format uuid
         */
        mapUuid: string;
        /**
         * Optional map token for anonymous or token-protected map operations.
         * @minLength 1
         */
        mapToken?: string;
      };
      output: {
        /** The raw Cartes.io JSON object. */
        map: Record<string, unknown>;
      };
    };
    /** Get one marker from a Cartes.io map. */
    "cartes.get_marker": {
      input: {
        /**
         * The Cartes.io map UUID.
         * @format uuid
         */
        mapUuid: string;
        /**
         * The Cartes.io marker id.
         * @exclusiveMinimum 0
         */
        markerId: number;
        /**
         * Optional map token for anonymous or token-protected map operations.
         * @minLength 1
         */
        mapToken?: string;
      };
      output: {
        /** The raw Cartes.io JSON object. */
        marker: Record<string, unknown>;
      };
    };
    /** Get one public Cartes.io user. */
    "cartes.get_user": {
      input: {
        /**
         * The Cartes.io username.
         * @minLength 1
         */
        username: string;
        /**
         * Related resources to include with the user.
         * @minItems 1
         */
        with?: Array<"maps" | "maps.markers">;
      };
      output: {
        /** The raw Cartes.io JSON object. */
        user: Record<string, unknown>;
      };
    };
    /** List Cartes.io marker categories. */
    "cartes.list_categories": {
      input: Record<string, never>;
      output: {
        /** Categories returned by Cartes.io. */
        categories: Array<Record<string, unknown>>;
      };
    };
    /** List public Cartes.io maps, optionally including maps owned by the account. */
    "cartes.list_maps": {
      input: {
        /**
         * Map UUIDs to include in the listing.
         * @minItems 1
         * @maxItems 100
         */
        ids?: Array<string>;
        /**
         * Category ids used to filter public maps.
         * @minItems 1
         * @maxItems 10
         */
        categoryIds?: Array<number>;
        /** Whether to include maps owned by the connected account. */
        withMine?: boolean;
        /**
         * Cartes.io field used for descending ordering.
         * @minLength 1
         */
        orderBy?: string;
        /**
         * Pagination page number.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Maps returned by Cartes.io. */
        maps: Array<Record<string, unknown>>;
        /** The raw Cartes.io paginated response. */
        page: Record<string, unknown>;
      };
    };
    /** List markers on one Cartes.io map. */
    "cartes.list_markers": {
      input: {
        /**
         * The Cartes.io map UUID.
         * @format uuid
         */
        mapUuid: string;
        /**
         * Optional map token for anonymous or token-protected map operations.
         * @minLength 1
         */
        mapToken?: string;
        /** Whether expired markers should be included. */
        showExpired?: boolean;
      };
      output: {
        /** Markers returned by Cartes.io. */
        markers: Array<Record<string, unknown>>;
      };
    };
    /** List public Cartes.io markers across public maps. */
    "cartes.list_public_markers": {
      input: {
        /**
         * The Cartes.io category id.
         * @exclusiveMinimum 0
         */
        categoryId?: number;
        /** Whether expired markers should be included. */
        showExpired?: boolean;
        /**
         * Pagination page number.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Markers returned by Cartes.io. */
        markers: Array<Record<string, unknown>>;
        /** The raw Cartes.io paginated response. */
        page: Record<string, unknown>;
      };
    };
    /** List Cartes.io maps related to one map. */
    "cartes.list_related_maps": {
      input: {
        /**
         * The Cartes.io map UUID.
         * @format uuid
         */
        mapUuid: string;
      };
      output: {
        /** Related maps returned by Cartes.io. */
        maps: Array<Record<string, unknown>>;
      };
    };
    /** List public Cartes.io users. */
    "cartes.list_users": {
      input: {
        /**
         * Related resources to include in the user listing.
         * @minItems 1
         */
        with?: Array<"maps" | "maps.markers">;
        /**
         * Pagination page number.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Users returned by Cartes.io. */
        users: Array<Record<string, unknown>>;
        /** The raw Cartes.io paginated response. */
        page: Record<string, unknown>;
      };
    };
    /** Search public Cartes.io maps. */
    "cartes.search_maps": {
      input: {
        /**
         * Search query. Cartes.io requires at least 3 characters.
         * @minLength 3
         * @maxLength 255
         */
        query: string;
        /**
         * Pagination page number.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Maps returned by Cartes.io. */
        maps: Array<Record<string, unknown>>;
        /** The raw Cartes.io paginated response. */
        page: Record<string, unknown>;
      };
    };
    /** Update one Cartes.io map. */
    "cartes.update_map": {
      input: {
        /**
         * The Cartes.io map UUID.
         * @format uuid
         */
        mapUuid: string;
        /**
         * Optional map token for anonymous or token-protected map operations.
         * @minLength 1
         */
        mapToken?: string;
        /**
         * Map title.
         * @maxLength 191
         */
        title?: string;
        /**
         * Optional unique map slug.
         * @maxLength 255
         */
        slug?: string;
        /** Updated map description. */
        description?: string;
        /** The Cartes.io map privacy value. */
        privacy?: "public" | "unlisted" | "private";
        /** Who can create markers on the map. */
        usersCanCreateMarkers?: "yes" | "only_logged_in" | "no";
      };
      output: {
        /** The raw Cartes.io JSON object. */
        map: Record<string, unknown>;
      };
    };
    /** Update one marker on a Cartes.io map. */
    "cartes.update_marker": {
      input: {
        /**
         * The Cartes.io map UUID.
         * @format uuid
         */
        mapUuid: string;
        /**
         * The Cartes.io marker id.
         * @exclusiveMinimum 0
         */
        markerId: number;
        /**
         * Optional map token for anonymous or token-protected map operations.
         * @minLength 1
         */
        mapToken?: string;
        /**
         * Marker description.
         * @maxLength 191
         */
        description?: string;
        /** Whether the marker should be marked as spam. */
        isSpam?: boolean;
      };
      output: {
        /** The raw Cartes.io JSON object. */
        marker: Record<string, unknown>;
      };
    };
  }
}
