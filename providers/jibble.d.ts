import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a work location in Jibble. */
    "jibble.create_location": {
      input: {
        /**
         * The display name of the Jibble location.
         * @minLength 1
         */
        name: string;
        /** The postal address of the Jibble location. */
        address?: string;
        /** The lifecycle status of the Jibble location. */
        status?: "Active" | "Archived";
        /** The geofence surrounding a Jibble location. */
        geoFence?: {
          /**
           * The geofence radius.
           * @minimum 0
           */
          radius: number;
          /**
           * The Jibble distance unit used for the geofence radius.
           * @minLength 1
           */
          units: string;
        };
        /** The geographic coordinates of a Jibble location. */
        coordinates?: {
          /**
           * The latitude in decimal degrees.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * The longitude in decimal degrees.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
        };
      };
      output: {
        /** The Jibble location returned by the API. */
        location: Record<string, unknown>;
      };
    };
    /** Permanently delete a Jibble work location. */
    "jibble.delete_location": {
      input: {
        /**
         * The Jibble location identifier to delete.
         * @format uuid
         */
        locationId: string;
      };
      output: {
        /** Whether Jibble accepted the operation. */
        ok: boolean;
      };
    };
    /** List the Jibble organizations accessible to the personal access token. */
    "jibble.get_organizations": {
      input: Record<string, never>;
      output: {
        /** The returned Jibble organizations. */
        items: Array<Record<string, unknown>>;
        /** The total matching record count when Jibble returned it. */
        count?: number | null;
        /** The URL for the next OData page when Jibble returned one. */
        nextLink?: string | null;
      };
    };
    /** List Jibble work locations with optional OData filtering and pagination. */
    "jibble.list_locations": {
      input: {
        /** The comma-separated Jibble fields to return through the OData $select option. */
        select?: string;
        /** The OData $filter expression used to limit returned Jibble records. */
        filter?: string;
        /** The OData $expand expression used to include related Jibble records. */
        expand?: string;
        /** The OData $orderby expression used to sort returned Jibble records. */
        orderBy?: string;
        /**
         * The number of matching Jibble records to skip.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of Jibble records to return.
         * @minimum 1
         */
        top?: number;
        /** Whether Jibble should include the total matching record count. */
        count?: boolean;
      };
      output: {
        /** The returned Jibble locations. */
        items: Array<Record<string, unknown>>;
        /** The total matching record count when Jibble returned it. */
        count?: number | null;
        /** The URL for the next OData page when Jibble returned one. */
        nextLink?: string | null;
      };
    };
    /** List people in the Jibble organization with optional OData filtering and pagination. */
    "jibble.list_members": {
      input: {
        /** The comma-separated Jibble fields to return through the OData $select option. */
        select?: string;
        /** The OData $filter expression used to limit returned Jibble records. */
        filter?: string;
        /** The OData $expand expression used to include related Jibble records. */
        expand?: string;
        /** The OData $orderby expression used to sort returned Jibble records. */
        orderBy?: string;
        /**
         * The number of matching Jibble records to skip.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of Jibble records to return.
         * @minimum 1
         */
        top?: number;
        /** Whether Jibble should include the total matching record count. */
        count?: boolean;
      };
      output: {
        /** The returned Jibble members. */
        items: Array<Record<string, unknown>>;
        /** The total matching record count when Jibble returned it. */
        count?: number | null;
        /** The URL for the next OData page when Jibble returned one. */
        nextLink?: string | null;
      };
    };
    /** Update or archive an existing Jibble work location. */
    "jibble.update_location": {
      input: {
        /**
         * The Jibble location identifier.
         * @format uuid
         */
        locationId: string;
        /**
         * The display name of the Jibble location.
         * @minLength 1
         */
        name?: string;
        /** The postal address of the Jibble location. */
        address?: string;
        /** The lifecycle status of the Jibble location. */
        status?: "Active" | "Archived";
        /** The geofence surrounding a Jibble location. */
        geoFence?: {
          /**
           * The geofence radius.
           * @minimum 0
           */
          radius: number;
          /**
           * The Jibble distance unit used for the geofence radius.
           * @minLength 1
           */
          units: string;
        };
        /** The geographic coordinates of a Jibble location. */
        coordinates?: {
          /**
           * The latitude in decimal degrees.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * The longitude in decimal degrees.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
        };
      };
      output: {
        /** Whether Jibble accepted the operation. */
        ok: boolean;
      };
    };
  }
}
