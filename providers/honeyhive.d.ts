import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create datapoints from raw JSON objects and add them to a HoneyHive dataset using a field mapping. */
    "honeyhive.add_datapoints": {
      input: {
        /**
         * The unique HoneyHive dataset identifier.
         * @minLength 1
         */
        datasetId: string;
        /**
         * Raw datapoint source objects to add.
         * @minItems 1
         */
        data: Array<Record<string, unknown>>;
        /** Source field names mapped into HoneyHive datapoint sections. */
        mapping: {
          /** Source fields to map into datapoint inputs. */
          inputs?: Array<string>;
          /** Source fields to map into datapoint conversation history. */
          history?: Array<string>;
          /** Source fields to map into datapoint ground truth. */
          groundTruth?: Array<string>;
        };
      };
      output: {
        /** Whether HoneyHive inserted the datapoints. */
        inserted: boolean;
        /** The identifiers of the inserted datapoints. */
        datapoint_ids: Array<string>;
      };
    };
    /** Create a HoneyHive dataset with an optional name, description, and initial datapoint identifiers. */
    "honeyhive.create_dataset": {
      input: {
        /**
         * The dataset name. HoneyHive defaults to Untitled Dataset.
         * @maxLength 200
         */
        name?: string;
        /** The dataset description. */
        description?: string;
        /** Initial datapoint identifiers to include in the dataset. */
        datapoints?: Array<string>;
      };
      output: {
        /** Whether HoneyHive inserted the dataset. */
        inserted: boolean;
        /** The identifier of the newly created dataset. */
        result: {
          /**
           * The unique HoneyHive dataset identifier.
           * @minLength 1
           */
          insertedId: string;
        };
      };
    };
    /** Permanently delete a HoneyHive dataset by its unique identifier. */
    "honeyhive.delete_dataset": {
      input: {
        /**
         * The unique HoneyHive dataset identifier.
         * @minLength 1
         */
        datasetId: string;
      };
      output: {
        /** The deleted dataset identifier. */
        result: {
          /**
           * The unique HoneyHive dataset identifier.
           * @minLength 1
           */
          id: string;
        };
      };
    };
    /** List HoneyHive datasets in the API key's project, optionally filtering by dataset ID or exact name. */
    "honeyhive.list_datasets": {
      input: {
        /**
         * The unique HoneyHive dataset identifier.
         * @minLength 1
         */
        datasetId?: string;
        /** The exact dataset name to filter by. */
        name?: string;
      };
      output: {
        /** The matching HoneyHive datasets. */
        datasets: Array<{
          /**
           * The unique HoneyHive dataset identifier.
           * @minLength 1
           */
          id: string;
          /** The dataset name. */
          name: string;
          /** The dataset description. */
          description?: string | null;
          /** The datapoint identifiers currently in the dataset. */
          datapoints: Array<string>;
          /** The timestamp when the dataset was created. */
          created_at?: string;
          /** The timestamp when the dataset was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Remove a datapoint association from a HoneyHive dataset without deleting the datapoint itself. */
    "honeyhive.remove_datapoint": {
      input: {
        /**
         * The unique HoneyHive dataset identifier.
         * @minLength 1
         */
        datasetId: string;
        /**
         * A unique HoneyHive datapoint identifier.
         * @minLength 1
         */
        datapointId: string;
      };
      output: {
        /** Whether the datapoint was removed from the dataset. */
        dereferenced: boolean;
        /** The result message returned by HoneyHive. */
        message: string;
      };
    };
    /** Update a HoneyHive dataset's name, description, or complete datapoint identifier list. */
    "honeyhive.update_dataset": {
      input: {
        /**
         * The unique HoneyHive dataset identifier.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The new dataset name.
         * @maxLength 200
         */
        name?: string;
        /** The new dataset description. */
        description?: string;
        /** The complete updated list of datapoint identifiers. */
        datapoints?: Array<string>;
      };
      output: {
        /** A HoneyHive dataset. */
        result: {
          /**
           * The unique HoneyHive dataset identifier.
           * @minLength 1
           */
          id: string;
          /** The dataset name. */
          name: string;
          /** The dataset description. */
          description?: string | null;
          /** The datapoint identifiers currently in the dataset. */
          datapoints: Array<string>;
          /** The timestamp when the dataset was created. */
          created_at?: string;
          /** The timestamp when the dataset was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
