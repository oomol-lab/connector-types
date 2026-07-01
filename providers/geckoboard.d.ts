import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Append records to a Geckoboard dataset, updating existing rows when unique_by fields match. */
    "geckoboard.append_dataset_data": {
      input: {
        /**
         * The Geckoboard dataset identifier, such as sales.by_day.
         * @minLength 1
         * @pattern \S
         */
        datasetId: string;
        /**
         * Dataset records to write to Geckoboard.
         * @maxItems 500
         */
        records: Array<Record<string, unknown>>;
        /**
         * A date or datetime field name Geckoboard should use when truncating old records.
         * @minLength 1
         * @pattern \S
         */
        deleteBy?: string;
      };
      output: Record<string, never>;
    };
    /** Delete a Geckoboard dataset by identifier. */
    "geckoboard.delete_dataset": {
      input: {
        /**
         * The Geckoboard dataset identifier, such as sales.by_day.
         * @minLength 1
         * @pattern \S
         */
        datasetId: string;
      };
      output: Record<string, never>;
    };
    /** Find or create a Geckoboard dataset with a declared field schema. */
    "geckoboard.find_or_create_dataset": {
      input: {
        /**
         * The Geckoboard dataset identifier, such as sales.by_day.
         * @minLength 1
         * @pattern \S
         */
        datasetId: string;
        /** The dataset fields keyed by column name. Each field describes a Geckoboard column. */
        fields: Record<string, Record<string, unknown>>;
        /**
         * Field names whose values uniquely identify records in the dataset.
         * @minItems 1
         */
        uniqueBy?: Array<string>;
      };
      output: {
        /** A Geckoboard dataset definition. */
        dataset: {
          /** The Geckoboard dataset identifier. */
          id: string;
          /** The dataset fields keyed by column name. Each field describes a Geckoboard column. */
          fields: Record<string, Record<string, unknown>>;
          /** The unique field names returned by Geckoboard when configured. */
          unique_by: Array<string> | null;
          /** The raw dataset object returned by Geckoboard. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Replace all records in a Geckoboard dataset with the supplied records. */
    "geckoboard.replace_dataset_data": {
      input: {
        /**
         * The Geckoboard dataset identifier, such as sales.by_day.
         * @minLength 1
         * @pattern \S
         */
        datasetId: string;
        /**
         * Dataset records to write to Geckoboard.
         * @maxItems 500
         */
        records: Array<Record<string, unknown>>;
      };
      output: Record<string, never>;
    };
  }
}
