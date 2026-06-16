import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Databox ingestion data source in an account. */
    "databox.create_data_source": {
      input: {
        /** The Databox account identifier. */
        accountId: number;
        /**
         * The display title for the Databox resource.
         * @minLength 1
         * @pattern \S
         */
        title: string;
        /**
         * The IANA timezone identifier for the Databox data source.
         * @minLength 1
         * @pattern \S
         */
        timezone: string;
      };
      output: {
        /** The Databox request identifier. */
        requestId: string;
        /** A Databox data source. */
        dataSource: {
          /**
           * The Databox data source identifier.
           * @format uuid
           */
          id: string;
          /** The Databox data source type. */
          type: string;
          /** The Databox data source title. */
          title: string;
          /** The Databox request status. */
          status: string;
          /**
           * The date and time when the Databox data source was created.
           * @format date-time
           */
          createdAt: string;
          /** The Databox data source timezone. */
          timezone: string;
          /** Whether the Databox data source supports dataset ingestion. */
          ingestionSupported: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Databox dataset within an ingestion data source. */
    "databox.create_dataset": {
      input: {
        /**
         * The Databox data source identifier.
         * @format uuid
         */
        dataSourceId: string;
        /**
         * The display title for the Databox resource.
         * @minLength 1
         * @pattern \S
         */
        title: string;
        /**
         * The field names that uniquely identify records in the Databox dataset.
         * @minItems 1
         */
        primaryKeys: Array<string>;
      };
      output: {
        /** The Databox request identifier. */
        requestId: string;
        /** A Databox dataset. */
        dataset: {
          /**
           * The Databox dataset identifier.
           * @format uuid
           */
          id: string;
          /** The Databox dataset title. */
          title: string;
          /** The Databox request status. */
          status: string;
          /**
           * The date and time when the Databox dataset was created.
           * @format date-time
           */
          createdAt: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Databox data source by ID. */
    "databox.delete_data_source": {
      input: {
        /**
         * The Databox data source identifier.
         * @format uuid
         */
        dataSourceId: string;
      };
      output: {
        /** The Databox request status. */
        status: string;
        /** The human-readable Databox response message. */
        message: string;
        /** The Databox request identifier. */
        requestId: string;
        [key: string]: unknown;
      };
    };
    /** Delete a Databox dataset by ID. */
    "databox.delete_dataset": {
      input: {
        /**
         * The Databox dataset identifier.
         * @format uuid
         */
        datasetId: string;
      };
      output: {
        /** The Databox request status. */
        status: string;
        /** The human-readable Databox response message. */
        message: string;
        /** The Databox request identifier. */
        requestId: string;
        [key: string]: unknown;
      };
    };
    /** Get the processing status of a Databox dataset ingestion. */
    "databox.get_dataset_ingestion_status": {
      input: {
        /**
         * The Databox dataset identifier.
         * @format uuid
         */
        datasetId: string;
        /**
         * The Databox ingestion identifier.
         * @format uuid
         */
        ingestionId: string;
      };
      output: {
        /** The Databox request status. */
        status: string;
        /** The human-readable Databox response message. */
        message: string;
        /** The Databox request identifier. */
        requestId: string;
        /**
         * The Databox ingestion identifier.
         * @format uuid
         */
        ingestionId: string;
        [key: string]: unknown;
      };
    };
    /** List Databox accounts accessible to the API key. */
    "databox.list_accounts": {
      input: Record<string, never>;
      output: {
        /** The Databox request status. */
        status: string;
        /** The Databox request identifier. */
        requestId: string;
        /** The Databox accounts returned by the API. */
        accounts: Array<{
          /** The Databox account identifier. */
          id: number;
          /** The Databox account display name. */
          name: string;
          /** The Databox account type. */
          accountType: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Push JSON records into a Databox dataset. */
    "databox.push_dataset_data": {
      input: {
        /**
         * The Databox dataset identifier.
         * @format uuid
         */
        datasetId: string;
        /**
         * The Databox dataset records to ingest.
         * @minItems 1
         */
        records: Array<Record<string, string | number | boolean | Array<string> | null>>;
      };
      output: {
        /** The Databox request status. */
        status: string;
        /** The human-readable Databox response message. */
        message: string;
        /** The Databox request identifier. */
        requestId: string;
        /**
         * The Databox ingestion identifier.
         * @format uuid
         */
        ingestionId: string;
        [key: string]: unknown;
      };
    };
  }
}
