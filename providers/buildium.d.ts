import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Buildium rental owner by identifier. */
    "buildium.get_owner": {
      input: {
        /**
         * The Buildium rental owner identifier.
         * @minimum 1
         */
        rentalOwnerId: number;
      };
      output: {
        /** The normalized Buildium resource payload. */
        owner: Record<string, unknown>;
      };
    };
    /** Retrieve one Buildium rental property by identifier. */
    "buildium.get_property": {
      input: {
        /**
         * The Buildium rental property identifier.
         * @minimum 1
         */
        propertyId: number;
      };
      output: {
        /** The normalized Buildium resource payload. */
        property: Record<string, unknown>;
      };
    };
    /** Retrieve one Buildium rental unit by identifier. */
    "buildium.get_unit": {
      input: {
        /**
         * The Buildium rental unit identifier.
         * @minimum 1
         */
        unitId: number;
      };
      output: {
        /** The normalized Buildium resource payload. */
        unit: Record<string, unknown>;
      };
    };
    /** List Buildium rental owners. */
    "buildium.list_owners": {
      input: {
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Zero-based record offset used for pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * Buildium orderby expression used to sort returned records.
         * @minLength 1
         */
        orderBy?: string;
        /**
         * Rental owner identifiers to include.
         * @minItems 1
         */
        rentalOwnerIds?: Array<number>;
      };
      output: {
        /** The number of returned records. */
        count: number;
        /** The returned records. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List Buildium rental properties. */
    "buildium.list_properties": {
      input: {
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Zero-based record offset used for pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * Buildium orderby expression used to sort returned records.
         * @minLength 1
         */
        orderBy?: string;
        /**
         * Rental property identifiers to include.
         * @minItems 1
         */
        propertyIds?: Array<number>;
      };
      output: {
        /** The number of returned records. */
        count: number;
        /** The returned records. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List notes attached to one Buildium rental property. */
    "buildium.list_property_notes": {
      input: {
        /**
         * The Buildium rental property identifier.
         * @minimum 1
         */
        propertyId: number;
        /**
         * Filter to notes updated at or after this Buildium date-time value.
         * @minLength 1
         */
        updatedDateTimeFrom?: string;
        /**
         * Filter to notes updated at or before this Buildium date-time value.
         * @minLength 1
         */
        updatedDateTimeTo?: string;
        /**
         * Filter to notes last updated by this user identifier.
         * @minimum 1
         */
        lastUpdatedByUserId?: number;
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Zero-based record offset used for pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * Buildium orderby expression used to sort returned records.
         * @minLength 1
         */
        orderBy?: string;
      };
      output: {
        /** The number of returned records. */
        count: number;
        /** The returned records. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List Buildium rental units. */
    "buildium.list_units": {
      input: {
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Zero-based record offset used for pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * Buildium orderby expression used to sort returned records.
         * @minLength 1
         */
        orderBy?: string;
        /**
         * Rental property identifiers used to filter units.
         * @minItems 1
         */
        propertyIds?: Array<number>;
        /**
         * Rental unit identifiers to include.
         * @minItems 1
         */
        unitIds?: Array<number>;
      };
      output: {
        /** The number of returned records. */
        count: number;
        /** The returned records. */
        items: Array<Record<string, unknown>>;
      };
    };
  }
}
