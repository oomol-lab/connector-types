import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve WHO GHO observations for an indicator with structured dimension and year filters. */
    "who_gho.get_indicator_data": {
      input: {
        /**
         * The indicator code, such as WHOSIS_000001.
         * @minLength 1
         */
        indicatorCode: string;
        /**
         * Dimension field filters joined with the OData and operator.
         * @minItems 1
         */
        filters?: Array<{
          /** The observation field to filter. */
          field: "SpatialDimType" | "SpatialDim" | "ParentLocationCode" | "TimeDimType" | "Dim1Type" | "Dim1" | "Dim2Type" | "Dim2" | "Dim3Type" | "Dim3" | "DataSourceDimType" | "DataSourceDim";
          /** The comparison operator. */
          operator: "eq" | "ne";
          /** The exact dimension code, or null for a null check. */
          value: string | null;
        }>;
        /**
         * The first observation year to include.
         * @minimum 1
         */
        startYear?: number;
        /**
         * The last observation year to include.
         * @minimum 1
         */
        endYear?: number;
        /**
         * The maximum number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        top?: number;
        /**
         * The number of records to skip before collecting results.
         * @minimum 0
         */
        skip?: number;
      };
      output: {
        /** The indicator observation records in this page. */
        items: Array<Record<string, unknown>>;
        /** The number of records returned in this page. */
        count: number;
      };
    };
    /** List the available values for one WHO GHO dimension. */
    "who_gho.list_dimension_values": {
      input: {
        /**
         * The dimension code, such as COUNTRY or AGEGROUP.
         * @minLength 1
         */
        dimensionCode: string;
        /**
         * The maximum number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        top?: number;
        /**
         * The number of records to skip before collecting results.
         * @minimum 0
         */
        skip?: number;
      };
      output: {
        /** The dimension value records in this page. */
        items: Array<Record<string, unknown>>;
        /** The number of records returned in this page. */
        count: number;
      };
    };
    /** List dimensions available in the WHO Global Health Observatory OData API. */
    "who_gho.list_dimensions": {
      input: {
        /**
         * The maximum number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        top?: number;
        /**
         * The number of records to skip before collecting results.
         * @minimum 0
         */
        skip?: number;
      };
      output: {
        /** The dimension records in this page. */
        items: Array<Record<string, unknown>>;
        /** The number of records returned in this page. */
        count: number;
      };
    };
    /** Search WHO GHO indicators by partial or exact indicator name. */
    "who_gho.search_indicators": {
      input: {
        /**
         * Text contained in the indicator name.
         * @minLength 1
         */
        query?: string;
        /** Whether the query must equal the complete indicator name. */
        exactMatch?: boolean;
        /**
         * The maximum number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        top?: number;
        /**
         * The number of records to skip before collecting results.
         * @minimum 0
         */
        skip?: number;
      };
      output: {
        /** The indicator records in this page. */
        items: Array<Record<string, unknown>>;
        /** The number of records returned in this page. */
        count: number;
      };
    };
  }
}
