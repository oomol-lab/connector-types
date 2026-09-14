import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Stream Estate property document by UUID. */
    "stream_estate.get_property": {
      input: {
        /**
         * The UUID of the Stream Estate property.
         * @format uuid
         */
        propertyId: string;
      };
      output: {
        /** The property document with upstream-defined fields. */
        property: Record<string, unknown>;
      };
    };
    /** List Stream Estate cities using official geographic and name filters. */
    "stream_estate.list_cities": {
      input: {
        /** Whether to exclude cities that contain grouped cities. */
        excludeGroupedCities?: boolean;
        /** One or more French INSEE codes. */
        insee?: Array<string>;
        /**
         * A city label to match.
         * @minLength 1
         */
        libelle?: string;
        /**
         * A city name to match.
         * @minLength 1
         */
        name?: string;
        /** The sort direction. */
        orderName?: "asc" | "desc";
        /**
         * The collection page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * A city slug to match.
         * @minLength 1
         */
        slug?: string;
        /** One or more postal codes. */
        zipcode?: Array<string>;
        /** Additional documented Stream Estate query parameters keyed by their exact upstream names, including bracket notation when required. */
        additionalQuery?: Record<string, string | number | boolean | Array<string | number | boolean>>;
      };
      output: {
        /** Locations in the current response. */
        items: Array<Record<string, unknown>>;
        /** The total number of matching locations, or null when the endpoint omits it. */
        totalItems: number | null;
        /** Hydra pagination links returned by Stream Estate, or an empty object when absent. */
        pagination: Record<string, unknown>;
      };
    };
    /** Search Stream Estate property inventory with common filters and optional advanced query parameters. */
    "stream_estate.list_properties": {
      input: {
        /** Property types: apartment 0, house 1, building 2, parking 3, office 4, land 5, or shop 6. */
        propertyTypes?: Array<number>;
        /**
         * The transaction type: sale 0 or rent 1.
         * @minimum 0
         * @maximum 1
         */
        transactionType?: number;
        /** City IRIs returned by search_locations, such as /cities/30953. */
        includedCities?: Array<string>;
        /** Department IRIs returned by search_locations, such as /departments/77. */
        includedDepartments?: Array<string>;
        /** The minimum property budget. */
        budgetMin?: number;
        /** The maximum property budget. */
        budgetMax?: number;
        /** The minimum property surface area. */
        surfaceMin?: number;
        /** The maximum property surface area. */
        surfaceMax?: number;
        /**
         * Return properties created at or after this date-time.
         * @format date-time
         */
        fromDate?: string;
        /** Whether to filter by coherent prices; null disables the filter. */
        withCoherentPrice?: boolean | null;
        /**
         * The number of properties per page, from 1 to 30.
         * @minimum 1
         * @maximum 30
         */
        itemsPerPage?: number;
        /**
         * The collection page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /** The sort direction. */
        orderCreatedAt?: "asc" | "desc";
        /** The sort direction. */
        orderUpdatedAt?: "asc" | "desc";
        /** The sort direction. */
        orderPrice?: "asc" | "desc";
        /** Additional documented Stream Estate query parameters keyed by their exact upstream names, including bracket notation when required. */
        additionalQuery?: Record<string, string | number | boolean | Array<string | number | boolean>>;
      };
      output: {
        /** Property documents in the current page. */
        items: Array<Record<string, unknown>>;
        /** The total number of matching properties, or null when the endpoint omits it. */
        totalItems: number | null;
        /** Hydra pagination links returned by Stream Estate, or an empty object when absent. */
        pagination: Record<string, unknown>;
      };
    };
    /** List Stream Estate properties similar to a selected property. */
    "stream_estate.list_similar_properties": {
      input: {
        /**
         * The UUID of the Stream Estate property.
         * @format uuid
         */
        propertyId: string;
        /**
         * Return properties created at or after this date-time.
         * @format date-time
         */
        fromDate?: string;
        /**
         * The number of properties per page, from 1 to 30.
         * @minimum 1
         * @maximum 30
         */
        itemsPerPage?: number;
        /**
         * The collection page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /** The sort direction. */
        orderCreatedAt?: "asc" | "desc";
        /** The sort direction. */
        orderUpdatedAt?: "asc" | "desc";
        /** The sort direction. */
        orderPricePerMeter?: "asc" | "desc";
        /** The sort direction. */
        orderPrice?: "asc" | "desc";
        /** The sort direction. */
        orderSurface?: "asc" | "desc";
      };
      output: {
        /** Property documents in the current page. */
        items: Array<Record<string, unknown>>;
        /** The total number of matching properties, or null when the endpoint omits it. */
        totalItems: number | null;
        /** Hydra pagination links returned by Stream Estate, or an empty object when absent. */
        pagination: Record<string, unknown>;
      };
    };
    /** Search Stream Estate cities and departments for property-filter identifiers. */
    "stream_estate.search_locations": {
      input: {
        /**
         * The city or department search term.
         * @minLength 1
         */
        query: string;
        /** City IRIs to exclude from the results. */
        excludedCityIds?: Array<string>;
        /** Department IRIs to exclude from the results. */
        excludedDepartmentIds?: Array<string>;
      };
      output: {
        /** Locations in the current response. */
        items: Array<Record<string, unknown>>;
        /** The total number of matching locations, or null when the endpoint omits it. */
        totalItems: number | null;
        /** Hydra pagination links returned by Stream Estate, or an empty object when absent. */
        pagination: Record<string, unknown>;
      };
    };
  }
}
