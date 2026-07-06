import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Census Data API variable group and its variables. */
    "census_bureau.get_group": {
      input: {
        /**
         * The Census dataset path after /data, for example 2022/acs/acs5.
         * @minLength 1
         */
        datasetPath: string;
        /**
         * The Census variable group name, for example B01001.
         * @minLength 1
         */
        group: string;
      };
      output: {
        /** The requested Census variable group. */
        group: {
          /** The group name. */
          name: string;
          /** The group description when provided. */
          description: string | null;
          /** The variables in the group. */
          variables: Array<{
            /** The Census variable name. */
            name: string;
            /** The variable label returned by Census metadata. */
            label: string | null;
            /** The variable concept returned by Census metadata. */
            concept: string | null;
            /** The variable predicate type when provided. */
            predicateType: string | null;
            /** The variable group name when provided. */
            group: string | null;
            /** The variable limit value when provided. */
            limit: number | null;
            /** Whether the variable is predicate-only when indicated. */
            predicateOnly: boolean | null;
            /** Whether Census marks the variable as required. */
            required: boolean | null;
            /** The attributes string returned for the variable. */
            attributes: string | null;
            /** The enumerated values object for the variable. */
            values: Record<string, unknown> | null;
            /** The raw object returned by the Census Data API. */
            raw: Record<string, unknown>;
          }>;
          /** The raw object returned by the Census Data API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Census Data API datasets with optional client-side search, vintage, and pagination filters. */
    "census_bureau.list_datasets": {
      input: {
        /**
         * Case-insensitive text used to filter dataset title or description.
         * @minLength 1
         */
        search?: string;
        /** The dataset vintage year used to filter Census metadata. */
        vintage?: number;
        /**
         * Maximum number of matched datasets to return.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Zero-based offset into the matched dataset list.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The matched Census datasets. */
        datasets: Array<{
          /** The dataset title. */
          title: string;
          /** The dataset description when provided. */
          description: string | null;
          /** The dataset vintage year when published in metadata. */
          vintage: number | null;
          /** The normalized Census API dataset path when derivable. */
          datasetPath: string | null;
          /** The dataset identifier components returned by Census metadata. */
          identifier: Array<string>;
          /** The first dataset access URL when provided. */
          distributionUrl: string | null;
          /** The raw object returned by the Census Data API. */
          raw: Record<string, unknown>;
        }>;
        /** The number of datasets returned in this page. */
        count: number;
        /** The total number of datasets matched before pagination. */
        totalMatched: number;
      };
    };
    /** List variable groups for a Census Data API dataset. */
    "census_bureau.list_groups": {
      input: {
        /**
         * The Census dataset path after /data, for example 2022/acs/acs5.
         * @minLength 1
         */
        datasetPath: string;
      };
      output: {
        /** The groups returned for the dataset. */
        groups: Array<{
          /** The group name. */
          name: string;
          /** The group description when provided. */
          description: string | null;
          /** The official variables URL for the group when provided. */
          variablesUrl: string | null;
          /** The raw object returned by the Census Data API. */
          raw: Record<string, unknown>;
        }>;
        /** The number of groups returned. */
        count: number;
        /** The raw object returned by the Census Data API. */
        raw: Record<string, unknown>;
      };
    };
    /** List variables for a Census Data API dataset. */
    "census_bureau.list_variables": {
      input: {
        /**
         * The Census dataset path after /data, for example 2022/acs/acs5.
         * @minLength 1
         */
        datasetPath: string;
      };
      output: {
        /** The variables returned for the dataset. */
        variables: Array<{
          /** The Census variable name. */
          name: string;
          /** The variable label returned by Census metadata. */
          label: string | null;
          /** The variable concept returned by Census metadata. */
          concept: string | null;
          /** The variable predicate type when provided. */
          predicateType: string | null;
          /** The variable group name when provided. */
          group: string | null;
          /** The variable limit value when provided. */
          limit: number | null;
          /** Whether the variable is predicate-only when indicated. */
          predicateOnly: boolean | null;
          /** Whether Census marks the variable as required. */
          required: boolean | null;
          /** The attributes string returned for the variable. */
          attributes: string | null;
          /** The enumerated values object for the variable. */
          values: Record<string, unknown> | null;
          /** The raw object returned by the Census Data API. */
          raw: Record<string, unknown>;
        }>;
        /** The number of variables returned. */
        count: number;
        /** The raw object returned by the Census Data API. */
        raw: Record<string, unknown>;
      };
    };
    /** Query a Census Data API dataset with variables, geography predicates, and optional filters. */
    "census_bureau.query_dataset": {
      input: {
        /**
         * The Census dataset path after /data, for example 2022/acs/acs5.
         * @minLength 1
         */
        datasetPath: string;
        /**
         * The Census variables to request through the get parameter.
         * @minItems 1
         * @maxItems 50
         */
        variables: Array<string>;
        /**
         * The official Census for predicate, for example state:*.
         * @minLength 1
         */
        for: string;
        /** The optional official Census in predicate value or values. */
        in?: string | Array<string>;
        /** Additional Census query predicates besides get, for, in, and key. */
        predicates?: Record<string, string | number | boolean | Array<string | number | boolean>>;
      };
      output: {
        /** The Census response column names. */
        columns: Array<string>;
        /** The Census response rows normalized as objects keyed by column name. */
        rows: Array<Record<string, string | null>>;
        /** The raw Census response rows, including the header row as the first entry. */
        rawRows: Array<Array<string | null>>;
        /** The number of data rows returned, excluding the header row. */
        rowCount: number;
      };
    };
  }
}
