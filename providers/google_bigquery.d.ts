import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a BigQuery job. */
    "google_bigquery.cancel_job": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery job ID.
         * @minLength 1
         */
        jobId: string;
        /**
         * The BigQuery job location, such as US or europe-west1.
         * @minLength 1
         */
        location?: string;
      };
      output: {
        /** A normalized BigQuery job. */
        job: {
          /**
           * The fully qualified BigQuery job ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the job.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery job ID.
           * @minLength 1
           */
          jobId: string;
          /**
           * The BigQuery job location.
           * @minLength 1
           */
          location: string | null;
          /**
           * The BigQuery job state.
           * @minLength 1
           */
          state: string | null;
          /** The raw BigQuery object returned by the API. */
          status: Record<string, unknown> | null;
          /** The raw BigQuery object returned by the API. */
          errorResult: Record<string, unknown> | null;
          /**
           * The job-level BigQuery errors.
           * @minItems 0
           */
          errors: Array<Record<string, unknown>>;
          /** The raw BigQuery object returned by the API. */
          configuration: Record<string, unknown> | null;
          /** The raw BigQuery object returned by the API. */
          statistics: Record<string, unknown> | null;
          /**
           * The email address of the user who ran the job.
           * @minLength 1
           */
          userEmail: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a BigQuery dataset. */
    "google_bigquery.create_dataset": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The BigQuery job location, such as US or europe-west1.
         * @minLength 1
         */
        location?: string;
        /**
         * The human-readable dataset name.
         * @minLength 1
         */
        friendlyName?: string;
        /**
         * The dataset description.
         * @minLength 1
         */
        description?: string;
        /** A BigQuery labels map. */
        labels?: Record<string, string>;
        /**
         * The default table expiration in milliseconds, encoded as a string.
         * @minLength 1
         */
        defaultTableExpirationMs?: string;
        /**
         * The default partition expiration in milliseconds, encoded as a string.
         * @minLength 1
         */
        defaultPartitionExpirationMs?: string;
      };
      output: {
        /** A normalized BigQuery dataset. */
        dataset: {
          /**
           * The fully qualified BigQuery dataset ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the dataset.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The human-readable dataset name.
           * @minLength 1
           */
          friendlyName: string | null;
          /**
           * The dataset description.
           * @minLength 1
           */
          description: string | null;
          /** A BigQuery labels map. */
          labels: Record<string, string> | null;
          /**
           * The dataset location.
           * @minLength 1
           */
          location: string | null;
          /** The default table expiration in milliseconds, encoded as a string. */
          defaultTableExpirationMs: string | null;
          /** The default partition expiration in milliseconds, encoded as a string. */
          defaultPartitionExpirationMs: string | null;
          /** The dataset creation time in milliseconds since epoch. */
          creationTime: string | null;
          /** The dataset modification time in milliseconds since epoch. */
          modifiedTime: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a BigQuery routine such as a user-defined function or stored procedure. */
    "google_bigquery.create_routine": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The BigQuery routine ID.
         * @minLength 1
         */
        routineId: string;
        /**
         * The BigQuery routine type.
         * @minLength 1
         */
        routineType: string;
        /**
         * The routine implementation language.
         * @minLength 1
         */
        language?: string;
        /**
         * The routine definition body.
         * @minLength 1
         */
        definitionBody: string;
        /**
         * The routine description.
         * @minLength 1
         */
        description?: string;
        /**
         * The routine arguments.
         * @minItems 1
         */
        arguments?: Array<Record<string, unknown>>;
        /** A BigQuery official object preserved without normalization. */
        returnType?: Record<string, unknown>;
        /**
         * The routine imported library URIs.
         * @minItems 1
         */
        importedLibraries?: Array<string>;
        /**
         * The routine determinism level enum value.
         * @minLength 1
         */
        determinismLevel?: string;
      };
      output: {
        /** A normalized BigQuery routine. */
        routine: {
          /**
           * The fully qualified BigQuery routine ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the routine.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID that owns the routine.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The BigQuery routine ID.
           * @minLength 1
           */
          routineId: string;
          /**
           * The BigQuery routine type.
           * @minLength 1
           */
          routineType: string | null;
          /**
           * The routine implementation language.
           * @minLength 1
           */
          language: string | null;
          /** The routine creation time in milliseconds since epoch. */
          creationTime: string | null;
          /** The routine modification time in milliseconds since epoch. */
          modifiedTime: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a BigQuery table. */
    "google_bigquery.create_table": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The BigQuery table ID.
         * @minLength 1
         */
        tableId: string;
        /** A BigQuery official object preserved without normalization. */
        schema?: Record<string, unknown>;
        /**
         * The human-readable table name.
         * @minLength 1
         */
        friendlyName?: string;
        /**
         * The table description.
         * @minLength 1
         */
        description?: string;
        /** A BigQuery labels map. */
        labels?: Record<string, string>;
        /** A BigQuery official object preserved without normalization. */
        timePartitioning?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        rangePartitioning?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        clustering?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        view?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        materializedView?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        externalDataConfiguration?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        encryptionConfiguration?: Record<string, unknown>;
      };
      output: {
        /** A normalized BigQuery table. */
        table: {
          /**
           * The fully qualified BigQuery table ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the table.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The BigQuery table ID.
           * @minLength 1
           */
          tableId: string;
          /**
           * The human-readable table name.
           * @minLength 1
           */
          friendlyName: string | null;
          /**
           * The BigQuery table type.
           * @minLength 1
           */
          type: string | null;
          /**
           * The table location.
           * @minLength 1
           */
          location: string | null;
          /** The table creation time in milliseconds since epoch. */
          creationTime: string | null;
          /** The table modification time in milliseconds since epoch. */
          modifiedTime: string | null;
          /** The number of rows in the table, encoded as a string. */
          numRows: string | null;
          /** The table size in bytes, encoded as a string. */
          numBytes: string | null;
          /** A normalized BigQuery table schema. */
          schema: {
            /**
             * The fields in the BigQuery table schema.
             * @minItems 0
             */
            fields: Array<{
              /**
               * The field name.
               * @minLength 1
               */
              name: string;
              /**
               * The BigQuery field type.
               * @minLength 1
               */
              type: string;
              /**
               * The BigQuery field mode.
               * @minLength 1
               */
              mode?: string;
              /**
               * The field description.
               * @minLength 1
               */
              description?: string;
              /**
               * Nested BigQuery fields for record types.
               * @minItems 0
               */
              fields?: Array<{
                /**
                 * The field name.
                 * @minLength 1
                 */
                name: string;
                /**
                 * The BigQuery field type.
                 * @minLength 1
                 */
                type: string;
                /**
                 * The BigQuery field mode.
                 * @minLength 1
                 */
                mode?: string;
                /**
                 * The field description.
                 * @minLength 1
                 */
                description?: string;
                /**
                 * Nested BigQuery fields for record types.
                 * @minItems 0
                 */
                fields?: Array<{
                  /**
                   * The field name.
                   * @minLength 1
                   */
                  name: string;
                  /**
                   * The BigQuery field type.
                   * @minLength 1
                   */
                  type: string;
                  /**
                   * The BigQuery field mode.
                   * @minLength 1
                   */
                  mode?: string;
                  /**
                   * The field description.
                   * @minLength 1
                   */
                  description?: string;
                  /**
                   * Nested BigQuery fields for record types.
                   * @minItems 0
                   */
                  fields?: Array<{
                    /**
                     * The field name.
                     * @minLength 1
                     */
                    name: string;
                    /**
                     * The BigQuery field type.
                     * @minLength 1
                     */
                    type: string;
                    /**
                     * The BigQuery field mode.
                     * @minLength 1
                     */
                    mode?: string;
                    /**
                     * The field description.
                     * @minLength 1
                     */
                    description?: string;
                    /**
                     * Nested BigQuery fields for record types.
                     * @minItems 0
                     */
                    fields?: Array<{
                      /**
                       * The field name.
                       * @minLength 1
                       */
                      name: string;
                      /**
                       * The BigQuery field type.
                       * @minLength 1
                       */
                      type: string;
                      /**
                       * The BigQuery field mode.
                       * @minLength 1
                       */
                      mode?: string;
                      /**
                       * The field description.
                       * @minLength 1
                       */
                      description?: string;
                      /**
                       * Nested BigQuery fields for record types.
                       * @minItems 0
                       */
                      fields?: Array<{
                        /**
                         * The field name.
                         * @minLength 1
                         */
                        name: string;
                        /**
                         * The BigQuery field type.
                         * @minLength 1
                         */
                        type: string;
                        /**
                         * The BigQuery field mode.
                         * @minLength 1
                         */
                        mode?: string;
                        /**
                         * The field description.
                         * @minLength 1
                         */
                        description?: string;
                        /**
                         * Nested BigQuery fields for record types.
                         * @minItems 0
                         */
                        fields?: Array<{
                          /**
                           * The field name.
                           * @minLength 1
                           */
                          name: string;
                          /**
                           * The BigQuery field type.
                           * @minLength 1
                           */
                          type: string;
                          /**
                           * The BigQuery field mode.
                           * @minLength 1
                           */
                          mode?: string;
                          /**
                           * The field description.
                           * @minLength 1
                           */
                          description?: string;
                          /**
                           * Nested BigQuery fields for record types.
                           * @minItems 0
                           */
                          fields?: Array<Record<string, unknown>>;
                          /** The raw BigQuery object returned by the API. */
                          raw: Record<string, unknown>;
                        }>;
                        /** The raw BigQuery object returned by the API. */
                        raw: Record<string, unknown>;
                      }>;
                      /** The raw BigQuery object returned by the API. */
                      raw: Record<string, unknown>;
                    }>;
                    /** The raw BigQuery object returned by the API. */
                    raw: Record<string, unknown>;
                  }>;
                  /** The raw BigQuery object returned by the API. */
                  raw: Record<string, unknown>;
                }>;
                /** The raw BigQuery object returned by the API. */
                raw: Record<string, unknown>;
              }>;
              /** The raw BigQuery object returned by the API. */
              raw: Record<string, unknown>;
            }>;
            /** The raw BigQuery object returned by the API. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete a BigQuery dataset, optionally deleting contained tables when explicitly requested. */
    "google_bigquery.delete_dataset": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /** Whether to delete all tables in the dataset. */
        deleteContents?: boolean;
      };
      output: {
        /** Whether BigQuery accepted the delete request. */
        success: boolean;
        /** The raw BigQuery object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a BigQuery ML model from a dataset. */
    "google_bigquery.delete_model": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The BigQuery model ID.
         * @minLength 1
         */
        modelId: string;
      };
      output: {
        /** Whether BigQuery accepted the delete request. */
        success: boolean;
        /** The raw BigQuery object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a BigQuery routine from a dataset. */
    "google_bigquery.delete_routine": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The BigQuery routine ID.
         * @minLength 1
         */
        routineId: string;
      };
      output: {
        /** Whether BigQuery accepted the delete request. */
        success: boolean;
        /** The raw BigQuery object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a BigQuery table from a dataset. */
    "google_bigquery.delete_table": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The BigQuery table ID.
         * @minLength 1
         */
        tableId: string;
      };
      output: {
        /** Whether BigQuery accepted the delete request. */
        success: boolean;
        /** The raw BigQuery object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve BigQuery dataset metadata. */
    "google_bigquery.get_dataset": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * A subset of fields to return, formatted as a comma-separated list.
         * @minLength 1
         */
        selectedFields?: string;
      };
      output: {
        /** A normalized BigQuery dataset. */
        dataset: {
          /**
           * The fully qualified BigQuery dataset ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the dataset.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The human-readable dataset name.
           * @minLength 1
           */
          friendlyName: string | null;
          /**
           * The dataset description.
           * @minLength 1
           */
          description: string | null;
          /** A BigQuery labels map. */
          labels: Record<string, string> | null;
          /**
           * The dataset location.
           * @minLength 1
           */
          location: string | null;
          /** The default table expiration in milliseconds, encoded as a string. */
          defaultTableExpirationMs: string | null;
          /** The default partition expiration in milliseconds, encoded as a string. */
          defaultPartitionExpirationMs: string | null;
          /** The dataset creation time in milliseconds since epoch. */
          creationTime: string | null;
          /** The dataset modification time in milliseconds since epoch. */
          modifiedTime: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve BigQuery job metadata. */
    "google_bigquery.get_job": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery job ID.
         * @minLength 1
         */
        jobId: string;
        /**
         * The BigQuery job location, such as US or europe-west1.
         * @minLength 1
         */
        location?: string;
      };
      output: {
        /** A normalized BigQuery job. */
        job: {
          /**
           * The fully qualified BigQuery job ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the job.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery job ID.
           * @minLength 1
           */
          jobId: string;
          /**
           * The BigQuery job location.
           * @minLength 1
           */
          location: string | null;
          /**
           * The BigQuery job state.
           * @minLength 1
           */
          state: string | null;
          /** The raw BigQuery object returned by the API. */
          status: Record<string, unknown> | null;
          /** The raw BigQuery object returned by the API. */
          errorResult: Record<string, unknown> | null;
          /**
           * The job-level BigQuery errors.
           * @minItems 0
           */
          errors: Array<Record<string, unknown>>;
          /** The raw BigQuery object returned by the API. */
          configuration: Record<string, unknown> | null;
          /** The raw BigQuery object returned by the API. */
          statistics: Record<string, unknown> | null;
          /**
           * The email address of the user who ran the job.
           * @minLength 1
           */
          userEmail: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve BigQuery ML model metadata. */
    "google_bigquery.get_model": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The BigQuery model ID.
         * @minLength 1
         */
        modelId: string;
      };
      output: {
        /** A normalized BigQuery model. */
        model: {
          /**
           * The fully qualified BigQuery model ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the model.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID that owns the model.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The BigQuery model ID.
           * @minLength 1
           */
          modelId: string;
          /**
           * The BigQuery model type.
           * @minLength 1
           */
          modelType: string | null;
          /**
           * The human-readable model name.
           * @minLength 1
           */
          friendlyName: string | null;
          /**
           * The model description.
           * @minLength 1
           */
          description: string | null;
          /** A BigQuery labels map. */
          labels: Record<string, string> | null;
          /** The model creation time in milliseconds since epoch. */
          creationTime: string | null;
          /** The model modification time in milliseconds since epoch. */
          modifiedTime: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Poll a BigQuery query job and return a page of results. */
    "google_bigquery.get_query_results": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery query job ID.
         * @minLength 1
         */
        jobId: string;
        /**
         * The BigQuery job location, such as US or europe-west1.
         * @minLength 1
         */
        location?: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         */
        maxResults?: number;
        /**
         * The opaque page token returned by a previous BigQuery response.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * The zero-based row offset to start reading from.
         * @minLength 1
         */
        startIndex?: string;
        /**
         * How long BigQuery should wait for query results, in milliseconds.
         * @minimum 1
         */
        timeoutMs?: number;
      };
      output: {
        /** Whether the query job completed within the request timeout. */
        jobComplete: boolean;
        /** The raw BigQuery object returned by the API. */
        jobReference: Record<string, unknown> | null;
        /**
         * The rows returned by the query.
         * @minItems 0
         */
        rows: Array<{
          /**
           * The row values in schema order.
           * @minItems 0
           */
          values: Array<unknown>;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** A normalized BigQuery table schema. */
        schema: {
          /**
           * The fields in the BigQuery table schema.
           * @minItems 0
           */
          fields: Array<{
            /**
             * The field name.
             * @minLength 1
             */
            name: string;
            /**
             * The BigQuery field type.
             * @minLength 1
             */
            type: string;
            /**
             * The BigQuery field mode.
             * @minLength 1
             */
            mode?: string;
            /**
             * The field description.
             * @minLength 1
             */
            description?: string;
            /**
             * Nested BigQuery fields for record types.
             * @minItems 0
             */
            fields?: Array<{
              /**
               * The field name.
               * @minLength 1
               */
              name: string;
              /**
               * The BigQuery field type.
               * @minLength 1
               */
              type: string;
              /**
               * The BigQuery field mode.
               * @minLength 1
               */
              mode?: string;
              /**
               * The field description.
               * @minLength 1
               */
              description?: string;
              /**
               * Nested BigQuery fields for record types.
               * @minItems 0
               */
              fields?: Array<{
                /**
                 * The field name.
                 * @minLength 1
                 */
                name: string;
                /**
                 * The BigQuery field type.
                 * @minLength 1
                 */
                type: string;
                /**
                 * The BigQuery field mode.
                 * @minLength 1
                 */
                mode?: string;
                /**
                 * The field description.
                 * @minLength 1
                 */
                description?: string;
                /**
                 * Nested BigQuery fields for record types.
                 * @minItems 0
                 */
                fields?: Array<{
                  /**
                   * The field name.
                   * @minLength 1
                   */
                  name: string;
                  /**
                   * The BigQuery field type.
                   * @minLength 1
                   */
                  type: string;
                  /**
                   * The BigQuery field mode.
                   * @minLength 1
                   */
                  mode?: string;
                  /**
                   * The field description.
                   * @minLength 1
                   */
                  description?: string;
                  /**
                   * Nested BigQuery fields for record types.
                   * @minItems 0
                   */
                  fields?: Array<{
                    /**
                     * The field name.
                     * @minLength 1
                     */
                    name: string;
                    /**
                     * The BigQuery field type.
                     * @minLength 1
                     */
                    type: string;
                    /**
                     * The BigQuery field mode.
                     * @minLength 1
                     */
                    mode?: string;
                    /**
                     * The field description.
                     * @minLength 1
                     */
                    description?: string;
                    /**
                     * Nested BigQuery fields for record types.
                     * @minItems 0
                     */
                    fields?: Array<{
                      /**
                       * The field name.
                       * @minLength 1
                       */
                      name: string;
                      /**
                       * The BigQuery field type.
                       * @minLength 1
                       */
                      type: string;
                      /**
                       * The BigQuery field mode.
                       * @minLength 1
                       */
                      mode?: string;
                      /**
                       * The field description.
                       * @minLength 1
                       */
                      description?: string;
                      /**
                       * Nested BigQuery fields for record types.
                       * @minItems 0
                       */
                      fields?: Array<{
                        /**
                         * The field name.
                         * @minLength 1
                         */
                        name: string;
                        /**
                         * The BigQuery field type.
                         * @minLength 1
                         */
                        type: string;
                        /**
                         * The BigQuery field mode.
                         * @minLength 1
                         */
                        mode?: string;
                        /**
                         * The field description.
                         * @minLength 1
                         */
                        description?: string;
                        /**
                         * Nested BigQuery fields for record types.
                         * @minItems 0
                         */
                        fields?: Array<Record<string, unknown>>;
                        /** The raw BigQuery object returned by the API. */
                        raw: Record<string, unknown>;
                      }>;
                      /** The raw BigQuery object returned by the API. */
                      raw: Record<string, unknown>;
                    }>;
                    /** The raw BigQuery object returned by the API. */
                    raw: Record<string, unknown>;
                  }>;
                  /** The raw BigQuery object returned by the API. */
                  raw: Record<string, unknown>;
                }>;
                /** The raw BigQuery object returned by the API. */
                raw: Record<string, unknown>;
              }>;
              /** The raw BigQuery object returned by the API. */
              raw: Record<string, unknown>;
            }>;
            /** The raw BigQuery object returned by the API. */
            raw: Record<string, unknown>;
          }>;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        } | null;
        /** The total number of rows returned by the query, encoded as a string. */
        totalRows: string | null;
        /** The total bytes processed by the query, encoded as a string. */
        totalBytesProcessed: string | null;
        /** Whether BigQuery served the query result from cache. */
        cacheHit: boolean | null;
        /**
         * The token for the next page of query rows.
         * @minLength 1
         */
        pageToken: string | null;
        /** The raw BigQuery object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve BigQuery routine metadata. */
    "google_bigquery.get_routine": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The BigQuery routine ID.
         * @minLength 1
         */
        routineId: string;
        /**
         * The routine fields to return, formatted as a comma-separated list.
         * @minLength 1
         */
        readMask?: string;
      };
      output: {
        /** A normalized BigQuery routine. */
        routine: {
          /**
           * The fully qualified BigQuery routine ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the routine.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID that owns the routine.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The BigQuery routine ID.
           * @minLength 1
           */
          routineId: string;
          /**
           * The BigQuery routine type.
           * @minLength 1
           */
          routineType: string | null;
          /**
           * The routine implementation language.
           * @minLength 1
           */
          language: string | null;
          /** The routine creation time in milliseconds since epoch. */
          creationTime: string | null;
          /** The routine modification time in milliseconds since epoch. */
          modifiedTime: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve BigQuery table metadata, including schema when available. */
    "google_bigquery.get_table": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The BigQuery table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * A subset of fields to return, formatted as a comma-separated list.
         * @minLength 1
         */
        selectedFields?: string;
      };
      output: {
        /** A normalized BigQuery table. */
        table: {
          /**
           * The fully qualified BigQuery table ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the table.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The BigQuery table ID.
           * @minLength 1
           */
          tableId: string;
          /**
           * The human-readable table name.
           * @minLength 1
           */
          friendlyName: string | null;
          /**
           * The BigQuery table type.
           * @minLength 1
           */
          type: string | null;
          /**
           * The table location.
           * @minLength 1
           */
          location: string | null;
          /** The table creation time in milliseconds since epoch. */
          creationTime: string | null;
          /** The table modification time in milliseconds since epoch. */
          modifiedTime: string | null;
          /** The number of rows in the table, encoded as a string. */
          numRows: string | null;
          /** The table size in bytes, encoded as a string. */
          numBytes: string | null;
          /** A normalized BigQuery table schema. */
          schema: {
            /**
             * The fields in the BigQuery table schema.
             * @minItems 0
             */
            fields: Array<{
              /**
               * The field name.
               * @minLength 1
               */
              name: string;
              /**
               * The BigQuery field type.
               * @minLength 1
               */
              type: string;
              /**
               * The BigQuery field mode.
               * @minLength 1
               */
              mode?: string;
              /**
               * The field description.
               * @minLength 1
               */
              description?: string;
              /**
               * Nested BigQuery fields for record types.
               * @minItems 0
               */
              fields?: Array<{
                /**
                 * The field name.
                 * @minLength 1
                 */
                name: string;
                /**
                 * The BigQuery field type.
                 * @minLength 1
                 */
                type: string;
                /**
                 * The BigQuery field mode.
                 * @minLength 1
                 */
                mode?: string;
                /**
                 * The field description.
                 * @minLength 1
                 */
                description?: string;
                /**
                 * Nested BigQuery fields for record types.
                 * @minItems 0
                 */
                fields?: Array<{
                  /**
                   * The field name.
                   * @minLength 1
                   */
                  name: string;
                  /**
                   * The BigQuery field type.
                   * @minLength 1
                   */
                  type: string;
                  /**
                   * The BigQuery field mode.
                   * @minLength 1
                   */
                  mode?: string;
                  /**
                   * The field description.
                   * @minLength 1
                   */
                  description?: string;
                  /**
                   * Nested BigQuery fields for record types.
                   * @minItems 0
                   */
                  fields?: Array<{
                    /**
                     * The field name.
                     * @minLength 1
                     */
                    name: string;
                    /**
                     * The BigQuery field type.
                     * @minLength 1
                     */
                    type: string;
                    /**
                     * The BigQuery field mode.
                     * @minLength 1
                     */
                    mode?: string;
                    /**
                     * The field description.
                     * @minLength 1
                     */
                    description?: string;
                    /**
                     * Nested BigQuery fields for record types.
                     * @minItems 0
                     */
                    fields?: Array<{
                      /**
                       * The field name.
                       * @minLength 1
                       */
                      name: string;
                      /**
                       * The BigQuery field type.
                       * @minLength 1
                       */
                      type: string;
                      /**
                       * The BigQuery field mode.
                       * @minLength 1
                       */
                      mode?: string;
                      /**
                       * The field description.
                       * @minLength 1
                       */
                      description?: string;
                      /**
                       * Nested BigQuery fields for record types.
                       * @minItems 0
                       */
                      fields?: Array<{
                        /**
                         * The field name.
                         * @minLength 1
                         */
                        name: string;
                        /**
                         * The BigQuery field type.
                         * @minLength 1
                         */
                        type: string;
                        /**
                         * The BigQuery field mode.
                         * @minLength 1
                         */
                        mode?: string;
                        /**
                         * The field description.
                         * @minLength 1
                         */
                        description?: string;
                        /**
                         * Nested BigQuery fields for record types.
                         * @minItems 0
                         */
                        fields?: Array<{
                          /**
                           * The field name.
                           * @minLength 1
                           */
                          name: string;
                          /**
                           * The BigQuery field type.
                           * @minLength 1
                           */
                          type: string;
                          /**
                           * The BigQuery field mode.
                           * @minLength 1
                           */
                          mode?: string;
                          /**
                           * The field description.
                           * @minLength 1
                           */
                          description?: string;
                          /**
                           * Nested BigQuery fields for record types.
                           * @minItems 0
                           */
                          fields?: Array<Record<string, unknown>>;
                          /** The raw BigQuery object returned by the API. */
                          raw: Record<string, unknown>;
                        }>;
                        /** The raw BigQuery object returned by the API. */
                        raw: Record<string, unknown>;
                      }>;
                      /** The raw BigQuery object returned by the API. */
                      raw: Record<string, unknown>;
                    }>;
                    /** The raw BigQuery object returned by the API. */
                    raw: Record<string, unknown>;
                  }>;
                  /** The raw BigQuery object returned by the API. */
                  raw: Record<string, unknown>;
                }>;
                /** The raw BigQuery object returned by the API. */
                raw: Record<string, unknown>;
              }>;
              /** The raw BigQuery object returned by the API. */
              raw: Record<string, unknown>;
            }>;
            /** The raw BigQuery object returned by the API. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Insert a small batch of rows into a BigQuery table. */
    "google_bigquery.insert_all": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The BigQuery table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The rows to insert.
         * @minItems 1
         */
        rows: Array<{
          /**
           * A unique insert ID used for best-effort deduplication.
           * @minLength 1
           */
          insertId?: string;
          /** The row JSON object to insert. */
          json: Record<string, unknown>;
        }>;
        /** Whether to insert valid rows while skipping invalid rows. */
        skipInvalidRows?: boolean;
        /** Whether to ignore values that do not match the table schema. */
        ignoreUnknownValues?: boolean;
        /**
         * The template table suffix for creating a generated table.
         * @minLength 1
         */
        templateSuffix?: string;
      };
      output: {
        /**
         * The row insert errors returned by BigQuery.
         * @minItems 0
         */
        insertErrors: Array<{
          /** The zero-based row index that failed. */
          index: number | null;
          /**
           * The BigQuery error objects for the row.
           * @minItems 0
           */
          errors: Array<Record<string, unknown>>;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The raw BigQuery object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List BigQuery datasets in a Google Cloud project. */
    "google_bigquery.list_datasets": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /** Whether to list all datasets, including hidden datasets. */
        all?: boolean;
        /**
         * An expression for filtering datasets by label.
         * @minLength 1
         */
        filter?: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         */
        maxResults?: number;
        /**
         * The opaque page token returned by a previous BigQuery response.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /**
         * The datasets returned by BigQuery.
         * @minItems 0
         */
        datasets: Array<{
          /**
           * The fully qualified BigQuery dataset ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the dataset.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The human-readable dataset name.
           * @minLength 1
           */
          friendlyName: string | null;
          /**
           * The dataset description.
           * @minLength 1
           */
          description: string | null;
          /** A BigQuery labels map. */
          labels: Record<string, string> | null;
          /**
           * The dataset location.
           * @minLength 1
           */
          location: string | null;
          /** The default table expiration in milliseconds, encoded as a string. */
          defaultTableExpirationMs: string | null;
          /** The default partition expiration in milliseconds, encoded as a string. */
          defaultPartitionExpirationMs: string | null;
          /** The dataset creation time in milliseconds since epoch. */
          creationTime: string | null;
          /** The dataset modification time in milliseconds since epoch. */
          modifiedTime: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /**
         * The token for the next page of datasets.
         * @minLength 1
         */
        nextPageToken: string | null;
        /** The raw BigQuery object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List BigQuery jobs in a Google Cloud project. */
    "google_bigquery.list_jobs": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /** Whether to list jobs owned by all users in the project. */
        allUsers?: boolean;
        /**
         * The maximum number of results to return.
         * @minimum 1
         */
        maxResults?: number;
        /**
         * The opaque page token returned by a previous BigQuery response.
         * @minLength 1
         */
        pageToken?: string;
        /** The amount of job information to return. */
        projection?: "MINIMAL" | "FULL";
        /**
         * The BigQuery job states to include.
         * @minItems 1
         */
        stateFilter?: Array<"DONE" | "PENDING" | "RUNNING">;
        /**
         * The minimum job creation time in milliseconds since epoch.
         * @minLength 1
         */
        minCreationTime?: string;
        /**
         * The maximum job creation time in milliseconds since epoch.
         * @minLength 1
         */
        maxCreationTime?: string;
      };
      output: {
        /**
         * The jobs returned by BigQuery.
         * @minItems 0
         */
        jobs: Array<{
          /**
           * The fully qualified BigQuery job ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the job.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery job ID.
           * @minLength 1
           */
          jobId: string;
          /**
           * The BigQuery job location.
           * @minLength 1
           */
          location: string | null;
          /**
           * The BigQuery job state.
           * @minLength 1
           */
          state: string | null;
          /** The raw BigQuery object returned by the API. */
          status: Record<string, unknown> | null;
          /** The raw BigQuery object returned by the API. */
          errorResult: Record<string, unknown> | null;
          /**
           * The job-level BigQuery errors.
           * @minItems 0
           */
          errors: Array<Record<string, unknown>>;
          /** The raw BigQuery object returned by the API. */
          configuration: Record<string, unknown> | null;
          /** The raw BigQuery object returned by the API. */
          statistics: Record<string, unknown> | null;
          /**
           * The email address of the user who ran the job.
           * @minLength 1
           */
          userEmail: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /**
         * The token for the next page of jobs.
         * @minLength 1
         */
        nextPageToken: string | null;
        /** The raw BigQuery object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List BigQuery ML models in a dataset. */
    "google_bigquery.list_models": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         */
        maxResults?: number;
        /**
         * The opaque page token returned by a previous BigQuery response.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /**
         * The models returned by BigQuery.
         * @minItems 0
         */
        models: Array<{
          /**
           * The fully qualified BigQuery model ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the model.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID that owns the model.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The BigQuery model ID.
           * @minLength 1
           */
          modelId: string;
          /**
           * The BigQuery model type.
           * @minLength 1
           */
          modelType: string | null;
          /**
           * The human-readable model name.
           * @minLength 1
           */
          friendlyName: string | null;
          /**
           * The model description.
           * @minLength 1
           */
          description: string | null;
          /** A BigQuery labels map. */
          labels: Record<string, string> | null;
          /** The model creation time in milliseconds since epoch. */
          creationTime: string | null;
          /** The model modification time in milliseconds since epoch. */
          modifiedTime: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /**
         * The token for the next page of models.
         * @minLength 1
         */
        nextPageToken: string | null;
        /** The raw BigQuery object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Google Cloud projects accessible to BigQuery. */
    "google_bigquery.list_projects": {
      input: {
        /**
         * The maximum number of results to return.
         * @minimum 1
         */
        maxResults?: number;
        /**
         * The opaque page token returned by a previous BigQuery response.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /**
         * The projects returned by BigQuery.
         * @minItems 0
         */
        projects: Array<{
          /**
           * The BigQuery project resource ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID.
           * @minLength 1
           */
          projectId: string;
          /**
           * The numeric Google Cloud project ID.
           * @minLength 1
           */
          numericId: string | null;
          /**
           * The human-readable project name.
           * @minLength 1
           */
          friendlyName: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /**
         * The token for the next page of projects.
         * @minLength 1
         */
        nextPageToken: string | null;
        /** The raw BigQuery object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List BigQuery routines in a dataset. */
    "google_bigquery.list_routines": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         */
        maxResults?: number;
        /**
         * The opaque page token returned by a previous BigQuery response.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * The routine fields to return, formatted as a comma-separated list.
         * @minLength 1
         */
        readMask?: string;
      };
      output: {
        /**
         * The routines returned by BigQuery.
         * @minItems 0
         */
        routines: Array<{
          /**
           * The fully qualified BigQuery routine ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the routine.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID that owns the routine.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The BigQuery routine ID.
           * @minLength 1
           */
          routineId: string;
          /**
           * The BigQuery routine type.
           * @minLength 1
           */
          routineType: string | null;
          /**
           * The routine implementation language.
           * @minLength 1
           */
          language: string | null;
          /** The routine creation time in milliseconds since epoch. */
          creationTime: string | null;
          /** The routine modification time in milliseconds since epoch. */
          modifiedTime: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /**
         * The token for the next page of routines.
         * @minLength 1
         */
        nextPageToken: string | null;
        /** The raw BigQuery object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List rows from a BigQuery table. */
    "google_bigquery.list_table_data": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The BigQuery table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         */
        maxResults?: number;
        /**
         * The opaque page token returned by a previous BigQuery response.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * The zero-based row offset to start reading from.
         * @minLength 1
         */
        startIndex?: string;
        /**
         * A subset of fields to return, formatted as a comma-separated list.
         * @minLength 1
         */
        selectedFields?: string;
      };
      output: {
        /**
         * The rows returned by BigQuery.
         * @minItems 0
         */
        rows: Array<{
          /**
           * The row values in schema order.
           * @minItems 0
           */
          values: Array<unknown>;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** A normalized BigQuery table schema. */
        schema: {
          /**
           * The fields in the BigQuery table schema.
           * @minItems 0
           */
          fields: Array<{
            /**
             * The field name.
             * @minLength 1
             */
            name: string;
            /**
             * The BigQuery field type.
             * @minLength 1
             */
            type: string;
            /**
             * The BigQuery field mode.
             * @minLength 1
             */
            mode?: string;
            /**
             * The field description.
             * @minLength 1
             */
            description?: string;
            /**
             * Nested BigQuery fields for record types.
             * @minItems 0
             */
            fields?: Array<{
              /**
               * The field name.
               * @minLength 1
               */
              name: string;
              /**
               * The BigQuery field type.
               * @minLength 1
               */
              type: string;
              /**
               * The BigQuery field mode.
               * @minLength 1
               */
              mode?: string;
              /**
               * The field description.
               * @minLength 1
               */
              description?: string;
              /**
               * Nested BigQuery fields for record types.
               * @minItems 0
               */
              fields?: Array<{
                /**
                 * The field name.
                 * @minLength 1
                 */
                name: string;
                /**
                 * The BigQuery field type.
                 * @minLength 1
                 */
                type: string;
                /**
                 * The BigQuery field mode.
                 * @minLength 1
                 */
                mode?: string;
                /**
                 * The field description.
                 * @minLength 1
                 */
                description?: string;
                /**
                 * Nested BigQuery fields for record types.
                 * @minItems 0
                 */
                fields?: Array<{
                  /**
                   * The field name.
                   * @minLength 1
                   */
                  name: string;
                  /**
                   * The BigQuery field type.
                   * @minLength 1
                   */
                  type: string;
                  /**
                   * The BigQuery field mode.
                   * @minLength 1
                   */
                  mode?: string;
                  /**
                   * The field description.
                   * @minLength 1
                   */
                  description?: string;
                  /**
                   * Nested BigQuery fields for record types.
                   * @minItems 0
                   */
                  fields?: Array<{
                    /**
                     * The field name.
                     * @minLength 1
                     */
                    name: string;
                    /**
                     * The BigQuery field type.
                     * @minLength 1
                     */
                    type: string;
                    /**
                     * The BigQuery field mode.
                     * @minLength 1
                     */
                    mode?: string;
                    /**
                     * The field description.
                     * @minLength 1
                     */
                    description?: string;
                    /**
                     * Nested BigQuery fields for record types.
                     * @minItems 0
                     */
                    fields?: Array<{
                      /**
                       * The field name.
                       * @minLength 1
                       */
                      name: string;
                      /**
                       * The BigQuery field type.
                       * @minLength 1
                       */
                      type: string;
                      /**
                       * The BigQuery field mode.
                       * @minLength 1
                       */
                      mode?: string;
                      /**
                       * The field description.
                       * @minLength 1
                       */
                      description?: string;
                      /**
                       * Nested BigQuery fields for record types.
                       * @minItems 0
                       */
                      fields?: Array<{
                        /**
                         * The field name.
                         * @minLength 1
                         */
                        name: string;
                        /**
                         * The BigQuery field type.
                         * @minLength 1
                         */
                        type: string;
                        /**
                         * The BigQuery field mode.
                         * @minLength 1
                         */
                        mode?: string;
                        /**
                         * The field description.
                         * @minLength 1
                         */
                        description?: string;
                        /**
                         * Nested BigQuery fields for record types.
                         * @minItems 0
                         */
                        fields?: Array<Record<string, unknown>>;
                        /** The raw BigQuery object returned by the API. */
                        raw: Record<string, unknown>;
                      }>;
                      /** The raw BigQuery object returned by the API. */
                      raw: Record<string, unknown>;
                    }>;
                    /** The raw BigQuery object returned by the API. */
                    raw: Record<string, unknown>;
                  }>;
                  /** The raw BigQuery object returned by the API. */
                  raw: Record<string, unknown>;
                }>;
                /** The raw BigQuery object returned by the API. */
                raw: Record<string, unknown>;
              }>;
              /** The raw BigQuery object returned by the API. */
              raw: Record<string, unknown>;
            }>;
            /** The raw BigQuery object returned by the API. */
            raw: Record<string, unknown>;
          }>;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        } | null;
        /** The total number of rows in the table, encoded as a string. */
        totalRows: string | null;
        /**
         * The token for the next page of rows.
         * @minLength 1
         */
        pageToken: string | null;
        /** The raw BigQuery object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List BigQuery tables in a dataset. */
    "google_bigquery.list_tables": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         */
        maxResults?: number;
        /**
         * The opaque page token returned by a previous BigQuery response.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /**
         * The tables returned by BigQuery.
         * @minItems 0
         */
        tables: Array<{
          /**
           * The fully qualified BigQuery table ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the table.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The BigQuery table ID.
           * @minLength 1
           */
          tableId: string;
          /**
           * The human-readable table name.
           * @minLength 1
           */
          friendlyName: string | null;
          /**
           * The BigQuery table type.
           * @minLength 1
           */
          type: string | null;
          /**
           * The table location.
           * @minLength 1
           */
          location: string | null;
          /** The table creation time in milliseconds since epoch. */
          creationTime: string | null;
          /** The table modification time in milliseconds since epoch. */
          modifiedTime: string | null;
          /** The number of rows in the table, encoded as a string. */
          numRows: string | null;
          /** The table size in bytes, encoded as a string. */
          numBytes: string | null;
          /** A normalized BigQuery table schema. */
          schema: {
            /**
             * The fields in the BigQuery table schema.
             * @minItems 0
             */
            fields: Array<{
              /**
               * The field name.
               * @minLength 1
               */
              name: string;
              /**
               * The BigQuery field type.
               * @minLength 1
               */
              type: string;
              /**
               * The BigQuery field mode.
               * @minLength 1
               */
              mode?: string;
              /**
               * The field description.
               * @minLength 1
               */
              description?: string;
              /**
               * Nested BigQuery fields for record types.
               * @minItems 0
               */
              fields?: Array<{
                /**
                 * The field name.
                 * @minLength 1
                 */
                name: string;
                /**
                 * The BigQuery field type.
                 * @minLength 1
                 */
                type: string;
                /**
                 * The BigQuery field mode.
                 * @minLength 1
                 */
                mode?: string;
                /**
                 * The field description.
                 * @minLength 1
                 */
                description?: string;
                /**
                 * Nested BigQuery fields for record types.
                 * @minItems 0
                 */
                fields?: Array<{
                  /**
                   * The field name.
                   * @minLength 1
                   */
                  name: string;
                  /**
                   * The BigQuery field type.
                   * @minLength 1
                   */
                  type: string;
                  /**
                   * The BigQuery field mode.
                   * @minLength 1
                   */
                  mode?: string;
                  /**
                   * The field description.
                   * @minLength 1
                   */
                  description?: string;
                  /**
                   * Nested BigQuery fields for record types.
                   * @minItems 0
                   */
                  fields?: Array<{
                    /**
                     * The field name.
                     * @minLength 1
                     */
                    name: string;
                    /**
                     * The BigQuery field type.
                     * @minLength 1
                     */
                    type: string;
                    /**
                     * The BigQuery field mode.
                     * @minLength 1
                     */
                    mode?: string;
                    /**
                     * The field description.
                     * @minLength 1
                     */
                    description?: string;
                    /**
                     * Nested BigQuery fields for record types.
                     * @minItems 0
                     */
                    fields?: Array<{
                      /**
                       * The field name.
                       * @minLength 1
                       */
                      name: string;
                      /**
                       * The BigQuery field type.
                       * @minLength 1
                       */
                      type: string;
                      /**
                       * The BigQuery field mode.
                       * @minLength 1
                       */
                      mode?: string;
                      /**
                       * The field description.
                       * @minLength 1
                       */
                      description?: string;
                      /**
                       * Nested BigQuery fields for record types.
                       * @minItems 0
                       */
                      fields?: Array<{
                        /**
                         * The field name.
                         * @minLength 1
                         */
                        name: string;
                        /**
                         * The BigQuery field type.
                         * @minLength 1
                         */
                        type: string;
                        /**
                         * The BigQuery field mode.
                         * @minLength 1
                         */
                        mode?: string;
                        /**
                         * The field description.
                         * @minLength 1
                         */
                        description?: string;
                        /**
                         * Nested BigQuery fields for record types.
                         * @minItems 0
                         */
                        fields?: Array<{
                          /**
                           * The field name.
                           * @minLength 1
                           */
                          name: string;
                          /**
                           * The BigQuery field type.
                           * @minLength 1
                           */
                          type: string;
                          /**
                           * The BigQuery field mode.
                           * @minLength 1
                           */
                          mode?: string;
                          /**
                           * The field description.
                           * @minLength 1
                           */
                          description?: string;
                          /**
                           * Nested BigQuery fields for record types.
                           * @minItems 0
                           */
                          fields?: Array<Record<string, unknown>>;
                          /** The raw BigQuery object returned by the API. */
                          raw: Record<string, unknown>;
                        }>;
                        /** The raw BigQuery object returned by the API. */
                        raw: Record<string, unknown>;
                      }>;
                      /** The raw BigQuery object returned by the API. */
                      raw: Record<string, unknown>;
                    }>;
                    /** The raw BigQuery object returned by the API. */
                    raw: Record<string, unknown>;
                  }>;
                  /** The raw BigQuery object returned by the API. */
                  raw: Record<string, unknown>;
                }>;
                /** The raw BigQuery object returned by the API. */
                raw: Record<string, unknown>;
              }>;
              /** The raw BigQuery object returned by the API. */
              raw: Record<string, unknown>;
            }>;
            /** The raw BigQuery object returned by the API. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /**
         * The token for the next page of tables.
         * @minLength 1
         */
        nextPageToken: string | null;
        /** The raw BigQuery object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Patch BigQuery dataset metadata. */
    "google_bigquery.patch_dataset": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The BigQuery dataset patch update mode.
         * @minLength 1
         */
        updateMode?: string;
        /**
         * The BigQuery job location, such as US or europe-west1.
         * @minLength 1
         */
        location?: string;
        /**
         * The human-readable dataset name.
         * @minLength 1
         */
        friendlyName?: string;
        /**
         * The dataset description.
         * @minLength 1
         */
        description?: string;
        /** A BigQuery labels map. */
        labels?: Record<string, string>;
        /**
         * The default table expiration in milliseconds, encoded as a string.
         * @minLength 1
         */
        defaultTableExpirationMs?: string;
        /**
         * The default partition expiration in milliseconds, encoded as a string.
         * @minLength 1
         */
        defaultPartitionExpirationMs?: string;
      };
      output: {
        /** A normalized BigQuery dataset. */
        dataset: {
          /**
           * The fully qualified BigQuery dataset ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the dataset.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The human-readable dataset name.
           * @minLength 1
           */
          friendlyName: string | null;
          /**
           * The dataset description.
           * @minLength 1
           */
          description: string | null;
          /** A BigQuery labels map. */
          labels: Record<string, string> | null;
          /**
           * The dataset location.
           * @minLength 1
           */
          location: string | null;
          /** The default table expiration in milliseconds, encoded as a string. */
          defaultTableExpirationMs: string | null;
          /** The default partition expiration in milliseconds, encoded as a string. */
          defaultPartitionExpirationMs: string | null;
          /** The dataset creation time in milliseconds since epoch. */
          creationTime: string | null;
          /** The dataset modification time in milliseconds since epoch. */
          modifiedTime: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Patch BigQuery ML model metadata such as friendly name, description, or labels. */
    "google_bigquery.patch_model": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The BigQuery model ID.
         * @minLength 1
         */
        modelId: string;
        /**
         * The human-readable model name.
         * @minLength 1
         */
        friendlyName?: string;
        /**
         * The model description.
         * @minLength 1
         */
        description?: string;
        /** A BigQuery labels map. */
        labels?: Record<string, string>;
      };
      output: {
        /** A normalized BigQuery model. */
        model: {
          /**
           * The fully qualified BigQuery model ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the model.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID that owns the model.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The BigQuery model ID.
           * @minLength 1
           */
          modelId: string;
          /**
           * The BigQuery model type.
           * @minLength 1
           */
          modelType: string | null;
          /**
           * The human-readable model name.
           * @minLength 1
           */
          friendlyName: string | null;
          /**
           * The model description.
           * @minLength 1
           */
          description: string | null;
          /** A BigQuery labels map. */
          labels: Record<string, string> | null;
          /** The model creation time in milliseconds since epoch. */
          creationTime: string | null;
          /** The model modification time in milliseconds since epoch. */
          modifiedTime: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Patch BigQuery table metadata. */
    "google_bigquery.patch_table": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The BigQuery table ID.
         * @minLength 1
         */
        tableId: string;
        /** A BigQuery official object preserved without normalization. */
        schema?: Record<string, unknown>;
        /**
         * The human-readable table name.
         * @minLength 1
         */
        friendlyName?: string;
        /**
         * The table description.
         * @minLength 1
         */
        description?: string;
        /** A BigQuery labels map. */
        labels?: Record<string, string>;
        /** A BigQuery official object preserved without normalization. */
        timePartitioning?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        rangePartitioning?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        clustering?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        view?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        materializedView?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        externalDataConfiguration?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        encryptionConfiguration?: Record<string, unknown>;
      };
      output: {
        /** A normalized BigQuery table. */
        table: {
          /**
           * The fully qualified BigQuery table ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the table.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The BigQuery table ID.
           * @minLength 1
           */
          tableId: string;
          /**
           * The human-readable table name.
           * @minLength 1
           */
          friendlyName: string | null;
          /**
           * The BigQuery table type.
           * @minLength 1
           */
          type: string | null;
          /**
           * The table location.
           * @minLength 1
           */
          location: string | null;
          /** The table creation time in milliseconds since epoch. */
          creationTime: string | null;
          /** The table modification time in milliseconds since epoch. */
          modifiedTime: string | null;
          /** The number of rows in the table, encoded as a string. */
          numRows: string | null;
          /** The table size in bytes, encoded as a string. */
          numBytes: string | null;
          /** A normalized BigQuery table schema. */
          schema: {
            /**
             * The fields in the BigQuery table schema.
             * @minItems 0
             */
            fields: Array<{
              /**
               * The field name.
               * @minLength 1
               */
              name: string;
              /**
               * The BigQuery field type.
               * @minLength 1
               */
              type: string;
              /**
               * The BigQuery field mode.
               * @minLength 1
               */
              mode?: string;
              /**
               * The field description.
               * @minLength 1
               */
              description?: string;
              /**
               * Nested BigQuery fields for record types.
               * @minItems 0
               */
              fields?: Array<{
                /**
                 * The field name.
                 * @minLength 1
                 */
                name: string;
                /**
                 * The BigQuery field type.
                 * @minLength 1
                 */
                type: string;
                /**
                 * The BigQuery field mode.
                 * @minLength 1
                 */
                mode?: string;
                /**
                 * The field description.
                 * @minLength 1
                 */
                description?: string;
                /**
                 * Nested BigQuery fields for record types.
                 * @minItems 0
                 */
                fields?: Array<{
                  /**
                   * The field name.
                   * @minLength 1
                   */
                  name: string;
                  /**
                   * The BigQuery field type.
                   * @minLength 1
                   */
                  type: string;
                  /**
                   * The BigQuery field mode.
                   * @minLength 1
                   */
                  mode?: string;
                  /**
                   * The field description.
                   * @minLength 1
                   */
                  description?: string;
                  /**
                   * Nested BigQuery fields for record types.
                   * @minItems 0
                   */
                  fields?: Array<{
                    /**
                     * The field name.
                     * @minLength 1
                     */
                    name: string;
                    /**
                     * The BigQuery field type.
                     * @minLength 1
                     */
                    type: string;
                    /**
                     * The BigQuery field mode.
                     * @minLength 1
                     */
                    mode?: string;
                    /**
                     * The field description.
                     * @minLength 1
                     */
                    description?: string;
                    /**
                     * Nested BigQuery fields for record types.
                     * @minItems 0
                     */
                    fields?: Array<{
                      /**
                       * The field name.
                       * @minLength 1
                       */
                      name: string;
                      /**
                       * The BigQuery field type.
                       * @minLength 1
                       */
                      type: string;
                      /**
                       * The BigQuery field mode.
                       * @minLength 1
                       */
                      mode?: string;
                      /**
                       * The field description.
                       * @minLength 1
                       */
                      description?: string;
                      /**
                       * Nested BigQuery fields for record types.
                       * @minItems 0
                       */
                      fields?: Array<{
                        /**
                         * The field name.
                         * @minLength 1
                         */
                        name: string;
                        /**
                         * The BigQuery field type.
                         * @minLength 1
                         */
                        type: string;
                        /**
                         * The BigQuery field mode.
                         * @minLength 1
                         */
                        mode?: string;
                        /**
                         * The field description.
                         * @minLength 1
                         */
                        description?: string;
                        /**
                         * Nested BigQuery fields for record types.
                         * @minItems 0
                         */
                        fields?: Array<{
                          /**
                           * The field name.
                           * @minLength 1
                           */
                          name: string;
                          /**
                           * The BigQuery field type.
                           * @minLength 1
                           */
                          type: string;
                          /**
                           * The BigQuery field mode.
                           * @minLength 1
                           */
                          mode?: string;
                          /**
                           * The field description.
                           * @minLength 1
                           */
                          description?: string;
                          /**
                           * Nested BigQuery fields for record types.
                           * @minItems 0
                           */
                          fields?: Array<Record<string, unknown>>;
                          /** The raw BigQuery object returned by the API. */
                          raw: Record<string, unknown>;
                        }>;
                        /** The raw BigQuery object returned by the API. */
                        raw: Record<string, unknown>;
                      }>;
                      /** The raw BigQuery object returned by the API. */
                      raw: Record<string, unknown>;
                    }>;
                    /** The raw BigQuery object returned by the API. */
                    raw: Record<string, unknown>;
                  }>;
                  /** The raw BigQuery object returned by the API. */
                  raw: Record<string, unknown>;
                }>;
                /** The raw BigQuery object returned by the API. */
                raw: Record<string, unknown>;
              }>;
              /** The raw BigQuery object returned by the API. */
              raw: Record<string, unknown>;
            }>;
            /** The raw BigQuery object returned by the API. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Run a BigQuery SQL query and return the first page of results. */
    "google_bigquery.query": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The GoogleSQL query text to execute.
         * @minLength 1
         */
        query: string;
        /**
         * The BigQuery job location, such as US or europe-west1.
         * @minLength 1
         */
        location?: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         */
        maxResults?: number;
        /** Whether BigQuery should validate the query without running it. */
        dryRun?: boolean;
        /** Whether to use legacy SQL instead of GoogleSQL. */
        useLegacySql?: boolean;
        /**
         * How long BigQuery should wait for the query to complete, in milliseconds.
         * @minimum 1
         */
        timeoutMs?: number;
        /** The BigQuery parameter mode. */
        parameterMode?: "NAMED" | "POSITIONAL";
        /**
         * The query parameters for parameterized SQL.
         * @minItems 1
         */
        queryParameters?: Array<{
          /**
           * The named parameter identifier without the @ prefix.
           * @minLength 1
           */
          name?: string;
          /** A BigQuery QueryParameterType object that describes the parameter data type. */
          parameterType: Record<string, unknown>;
          /** A BigQuery QueryParameterValue object that contains the parameter value. */
          parameterValue: Record<string, unknown>;
        }>;
      };
      output: {
        /** Whether the query job completed within the request timeout. */
        jobComplete: boolean;
        /** The raw BigQuery object returned by the API. */
        jobReference: Record<string, unknown> | null;
        /**
         * The rows returned by the query.
         * @minItems 0
         */
        rows: Array<{
          /**
           * The row values in schema order.
           * @minItems 0
           */
          values: Array<unknown>;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** A normalized BigQuery table schema. */
        schema: {
          /**
           * The fields in the BigQuery table schema.
           * @minItems 0
           */
          fields: Array<{
            /**
             * The field name.
             * @minLength 1
             */
            name: string;
            /**
             * The BigQuery field type.
             * @minLength 1
             */
            type: string;
            /**
             * The BigQuery field mode.
             * @minLength 1
             */
            mode?: string;
            /**
             * The field description.
             * @minLength 1
             */
            description?: string;
            /**
             * Nested BigQuery fields for record types.
             * @minItems 0
             */
            fields?: Array<{
              /**
               * The field name.
               * @minLength 1
               */
              name: string;
              /**
               * The BigQuery field type.
               * @minLength 1
               */
              type: string;
              /**
               * The BigQuery field mode.
               * @minLength 1
               */
              mode?: string;
              /**
               * The field description.
               * @minLength 1
               */
              description?: string;
              /**
               * Nested BigQuery fields for record types.
               * @minItems 0
               */
              fields?: Array<{
                /**
                 * The field name.
                 * @minLength 1
                 */
                name: string;
                /**
                 * The BigQuery field type.
                 * @minLength 1
                 */
                type: string;
                /**
                 * The BigQuery field mode.
                 * @minLength 1
                 */
                mode?: string;
                /**
                 * The field description.
                 * @minLength 1
                 */
                description?: string;
                /**
                 * Nested BigQuery fields for record types.
                 * @minItems 0
                 */
                fields?: Array<{
                  /**
                   * The field name.
                   * @minLength 1
                   */
                  name: string;
                  /**
                   * The BigQuery field type.
                   * @minLength 1
                   */
                  type: string;
                  /**
                   * The BigQuery field mode.
                   * @minLength 1
                   */
                  mode?: string;
                  /**
                   * The field description.
                   * @minLength 1
                   */
                  description?: string;
                  /**
                   * Nested BigQuery fields for record types.
                   * @minItems 0
                   */
                  fields?: Array<{
                    /**
                     * The field name.
                     * @minLength 1
                     */
                    name: string;
                    /**
                     * The BigQuery field type.
                     * @minLength 1
                     */
                    type: string;
                    /**
                     * The BigQuery field mode.
                     * @minLength 1
                     */
                    mode?: string;
                    /**
                     * The field description.
                     * @minLength 1
                     */
                    description?: string;
                    /**
                     * Nested BigQuery fields for record types.
                     * @minItems 0
                     */
                    fields?: Array<{
                      /**
                       * The field name.
                       * @minLength 1
                       */
                      name: string;
                      /**
                       * The BigQuery field type.
                       * @minLength 1
                       */
                      type: string;
                      /**
                       * The BigQuery field mode.
                       * @minLength 1
                       */
                      mode?: string;
                      /**
                       * The field description.
                       * @minLength 1
                       */
                      description?: string;
                      /**
                       * Nested BigQuery fields for record types.
                       * @minItems 0
                       */
                      fields?: Array<{
                        /**
                         * The field name.
                         * @minLength 1
                         */
                        name: string;
                        /**
                         * The BigQuery field type.
                         * @minLength 1
                         */
                        type: string;
                        /**
                         * The BigQuery field mode.
                         * @minLength 1
                         */
                        mode?: string;
                        /**
                         * The field description.
                         * @minLength 1
                         */
                        description?: string;
                        /**
                         * Nested BigQuery fields for record types.
                         * @minItems 0
                         */
                        fields?: Array<Record<string, unknown>>;
                        /** The raw BigQuery object returned by the API. */
                        raw: Record<string, unknown>;
                      }>;
                      /** The raw BigQuery object returned by the API. */
                      raw: Record<string, unknown>;
                    }>;
                    /** The raw BigQuery object returned by the API. */
                    raw: Record<string, unknown>;
                  }>;
                  /** The raw BigQuery object returned by the API. */
                  raw: Record<string, unknown>;
                }>;
                /** The raw BigQuery object returned by the API. */
                raw: Record<string, unknown>;
              }>;
              /** The raw BigQuery object returned by the API. */
              raw: Record<string, unknown>;
            }>;
            /** The raw BigQuery object returned by the API. */
            raw: Record<string, unknown>;
          }>;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        } | null;
        /** The total number of rows returned by the query, encoded as a string. */
        totalRows: string | null;
        /** The total bytes processed by the query, encoded as a string. */
        totalBytesProcessed: string | null;
        /** Whether BigQuery served the query result from cache. */
        cacheHit: boolean | null;
        /**
         * The token for the next page of query rows.
         * @minLength 1
         */
        pageToken: string | null;
        /** The raw BigQuery object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Start an asynchronous BigQuery extract job to Cloud Storage objects. */
    "google_bigquery.start_extract_job_to_gcs": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /** A BigQuery table reference. */
        sourceTable: {
          /**
           * The Google Cloud project ID that owns the BigQuery resource.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The BigQuery table ID.
           * @minLength 1
           */
          tableId: string;
        };
        /**
         * The Cloud Storage destination URIs, such as gs://bucket/path/export-*.json.
         * @minItems 1
         */
        destinationUris: Array<string>;
        /**
         * The BigQuery job location, such as US or europe-west1.
         * @minLength 1
         */
        location?: string;
        /**
         * The optional client-provided BigQuery job ID.
         * @minLength 1
         */
        jobId?: string;
        /**
         * The destination file format, such as CSV or PARQUET.
         * @minLength 1
         */
        destinationFormat?: string;
        /**
         * The compression codec for exported files.
         * @minLength 1
         */
        compression?: string;
        /**
         * The field delimiter for CSV destination files.
         * @minLength 1
         */
        fieldDelimiter?: string;
        /** Whether CSV exports should include a header row. */
        printHeader?: boolean;
        /** Whether Avro exports should use logical types. */
        useAvroLogicalTypes?: boolean;
        /** A BigQuery labels map. */
        labels?: Record<string, string>;
      };
      output: {
        /** A normalized BigQuery job. */
        job: {
          /**
           * The fully qualified BigQuery job ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the job.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery job ID.
           * @minLength 1
           */
          jobId: string;
          /**
           * The BigQuery job location.
           * @minLength 1
           */
          location: string | null;
          /**
           * The BigQuery job state.
           * @minLength 1
           */
          state: string | null;
          /** The raw BigQuery object returned by the API. */
          status: Record<string, unknown> | null;
          /** The raw BigQuery object returned by the API. */
          errorResult: Record<string, unknown> | null;
          /**
           * The job-level BigQuery errors.
           * @minItems 0
           */
          errors: Array<Record<string, unknown>>;
          /** The raw BigQuery object returned by the API. */
          configuration: Record<string, unknown> | null;
          /** The raw BigQuery object returned by the API. */
          statistics: Record<string, unknown> | null;
          /**
           * The email address of the user who ran the job.
           * @minLength 1
           */
          userEmail: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Start an asynchronous BigQuery load job from Cloud Storage objects. */
    "google_bigquery.start_load_job_from_gcs": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Cloud Storage URIs to load, such as gs://bucket/path/file.csv.
         * @minItems 1
         */
        sourceUris: Array<string>;
        /** A BigQuery table reference. */
        destinationTable: {
          /**
           * The Google Cloud project ID that owns the BigQuery resource.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The BigQuery table ID.
           * @minLength 1
           */
          tableId: string;
        };
        /**
         * The BigQuery job location, such as US or europe-west1.
         * @minLength 1
         */
        location?: string;
        /**
         * The optional client-provided BigQuery job ID.
         * @minLength 1
         */
        jobId?: string;
        /**
         * The source data format, such as CSV or NEWLINE_DELIMITED_JSON.
         * @minLength 1
         */
        sourceFormat?: string;
        /** A BigQuery official object preserved without normalization. */
        schema?: Record<string, unknown>;
        /**
         * The BigQuery write disposition for the destination table.
         * @minLength 1
         */
        writeDisposition?: string;
        /**
         * The BigQuery create disposition for the destination table.
         * @minLength 1
         */
        createDisposition?: string;
        /**
         * The number of leading source rows to skip.
         * @minimum 0
         */
        skipLeadingRows?: number;
        /**
         * The field delimiter for CSV source files.
         * @minLength 1
         */
        fieldDelimiter?: string;
        /** Whether CSV quoted sections may contain newline characters. */
        allowQuotedNewlines?: boolean;
        /** Whether CSV rows may omit trailing optional columns. */
        allowJaggedRows?: boolean;
        /** Whether to ignore source values not present in the schema. */
        ignoreUnknownValues?: boolean;
        /**
         * The maximum number of bad records BigQuery may ignore.
         * @minimum 0
         */
        maxBadRecords?: number;
        /** Whether BigQuery should autodetect schema and format options. */
        autodetect?: boolean;
        /**
         * The string that represents null values in CSV source files.
         * @minLength 1
         */
        nullMarker?: string;
        /**
         * The character encoding of the source data.
         * @minLength 1
         */
        encoding?: string;
        /** A BigQuery official object preserved without normalization. */
        timePartitioning?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        rangePartitioning?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        clustering?: Record<string, unknown>;
        /** A BigQuery labels map. */
        labels?: Record<string, string>;
      };
      output: {
        /** A normalized BigQuery job. */
        job: {
          /**
           * The fully qualified BigQuery job ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the job.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery job ID.
           * @minLength 1
           */
          jobId: string;
          /**
           * The BigQuery job location.
           * @minLength 1
           */
          location: string | null;
          /**
           * The BigQuery job state.
           * @minLength 1
           */
          state: string | null;
          /** The raw BigQuery object returned by the API. */
          status: Record<string, unknown> | null;
          /** The raw BigQuery object returned by the API. */
          errorResult: Record<string, unknown> | null;
          /**
           * The job-level BigQuery errors.
           * @minItems 0
           */
          errors: Array<Record<string, unknown>>;
          /** The raw BigQuery object returned by the API. */
          configuration: Record<string, unknown> | null;
          /** The raw BigQuery object returned by the API. */
          statistics: Record<string, unknown> | null;
          /**
           * The email address of the user who ran the job.
           * @minLength 1
           */
          userEmail: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Start an asynchronous BigQuery query job. */
    "google_bigquery.start_query_job": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The GoogleSQL query text to execute.
         * @minLength 1
         */
        query: string;
        /**
         * The BigQuery job location, such as US or europe-west1.
         * @minLength 1
         */
        location?: string;
        /**
         * The optional client-provided BigQuery job ID.
         * @minLength 1
         */
        jobId?: string;
        /** Whether BigQuery should validate the query without running it. */
        dryRun?: boolean;
        /** Whether to use legacy SQL instead of GoogleSQL. */
        useLegacySql?: boolean;
        /** A BigQuery official object preserved without normalization. */
        destinationTable?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        defaultDataset?: Record<string, unknown>;
        /**
         * The BigQuery write disposition for destination tables.
         * @minLength 1
         */
        writeDisposition?: string;
        /**
         * The BigQuery create disposition for destination tables.
         * @minLength 1
         */
        createDisposition?: string;
        /**
         * The BigQuery query priority.
         * @minLength 1
         */
        priority?: string;
        /**
         * The maximum bytes billed for the query, encoded as a string.
         * @minLength 1
         */
        maximumBytesBilled?: string;
        /** The BigQuery parameter mode. */
        parameterMode?: "NAMED" | "POSITIONAL";
        /**
         * The query parameters for parameterized SQL.
         * @minItems 1
         */
        queryParameters?: Array<{
          /**
           * The named parameter identifier without the @ prefix.
           * @minLength 1
           */
          name?: string;
          /** A BigQuery QueryParameterType object that describes the parameter data type. */
          parameterType: Record<string, unknown>;
          /** A BigQuery QueryParameterValue object that contains the parameter value. */
          parameterValue: Record<string, unknown>;
        }>;
        /** A BigQuery labels map. */
        labels?: Record<string, string>;
      };
      output: {
        /** A normalized BigQuery job. */
        job: {
          /**
           * The fully qualified BigQuery job ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the job.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery job ID.
           * @minLength 1
           */
          jobId: string;
          /**
           * The BigQuery job location.
           * @minLength 1
           */
          location: string | null;
          /**
           * The BigQuery job state.
           * @minLength 1
           */
          state: string | null;
          /** The raw BigQuery object returned by the API. */
          status: Record<string, unknown> | null;
          /** The raw BigQuery object returned by the API. */
          errorResult: Record<string, unknown> | null;
          /**
           * The job-level BigQuery errors.
           * @minItems 0
           */
          errors: Array<Record<string, unknown>>;
          /** The raw BigQuery object returned by the API. */
          configuration: Record<string, unknown> | null;
          /** The raw BigQuery object returned by the API. */
          statistics: Record<string, unknown> | null;
          /**
           * The email address of the user who ran the job.
           * @minLength 1
           */
          userEmail: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Replace BigQuery dataset metadata with the supplied dataset resource fields. */
    "google_bigquery.update_dataset": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The BigQuery job location, such as US or europe-west1.
         * @minLength 1
         */
        location?: string;
        /**
         * The human-readable dataset name.
         * @minLength 1
         */
        friendlyName?: string;
        /**
         * The dataset description.
         * @minLength 1
         */
        description?: string;
        /** A BigQuery labels map. */
        labels?: Record<string, string>;
        /**
         * The default table expiration in milliseconds, encoded as a string.
         * @minLength 1
         */
        defaultTableExpirationMs?: string;
        /**
         * The default partition expiration in milliseconds, encoded as a string.
         * @minLength 1
         */
        defaultPartitionExpirationMs?: string;
      };
      output: {
        /** A normalized BigQuery dataset. */
        dataset: {
          /**
           * The fully qualified BigQuery dataset ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the dataset.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The human-readable dataset name.
           * @minLength 1
           */
          friendlyName: string | null;
          /**
           * The dataset description.
           * @minLength 1
           */
          description: string | null;
          /** A BigQuery labels map. */
          labels: Record<string, string> | null;
          /**
           * The dataset location.
           * @minLength 1
           */
          location: string | null;
          /** The default table expiration in milliseconds, encoded as a string. */
          defaultTableExpirationMs: string | null;
          /** The default partition expiration in milliseconds, encoded as a string. */
          defaultPartitionExpirationMs: string | null;
          /** The dataset creation time in milliseconds since epoch. */
          creationTime: string | null;
          /** The dataset modification time in milliseconds since epoch. */
          modifiedTime: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Replace BigQuery routine metadata and definition fields. */
    "google_bigquery.update_routine": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The BigQuery routine ID.
         * @minLength 1
         */
        routineId: string;
        /**
         * The BigQuery routine type.
         * @minLength 1
         */
        routineType: string;
        /**
         * The routine implementation language.
         * @minLength 1
         */
        language?: string;
        /**
         * The routine definition body.
         * @minLength 1
         */
        definitionBody: string;
        /**
         * The routine description.
         * @minLength 1
         */
        description?: string;
        /**
         * The routine arguments.
         * @minItems 1
         */
        arguments?: Array<Record<string, unknown>>;
        /** A BigQuery official object preserved without normalization. */
        returnType?: Record<string, unknown>;
        /**
         * The routine imported library URIs.
         * @minItems 1
         */
        importedLibraries?: Array<string>;
        /**
         * The routine determinism level enum value.
         * @minLength 1
         */
        determinismLevel?: string;
      };
      output: {
        /** A normalized BigQuery routine. */
        routine: {
          /**
           * The fully qualified BigQuery routine ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the routine.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID that owns the routine.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The BigQuery routine ID.
           * @minLength 1
           */
          routineId: string;
          /**
           * The BigQuery routine type.
           * @minLength 1
           */
          routineType: string | null;
          /**
           * The routine implementation language.
           * @minLength 1
           */
          language: string | null;
          /** The routine creation time in milliseconds since epoch. */
          creationTime: string | null;
          /** The routine modification time in milliseconds since epoch. */
          modifiedTime: string | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Replace BigQuery table metadata with the supplied table resource fields. */
    "google_bigquery.update_table": {
      input: {
        /**
         * The Google Cloud project ID that owns the BigQuery resource.
         * @minLength 1
         */
        projectId: string;
        /**
         * The BigQuery dataset ID.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The BigQuery table ID.
         * @minLength 1
         */
        tableId: string;
        /** A BigQuery official object preserved without normalization. */
        schema?: Record<string, unknown>;
        /**
         * The human-readable table name.
         * @minLength 1
         */
        friendlyName?: string;
        /**
         * The table description.
         * @minLength 1
         */
        description?: string;
        /** A BigQuery labels map. */
        labels?: Record<string, string>;
        /** A BigQuery official object preserved without normalization. */
        timePartitioning?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        rangePartitioning?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        clustering?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        view?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        materializedView?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        externalDataConfiguration?: Record<string, unknown>;
        /** A BigQuery official object preserved without normalization. */
        encryptionConfiguration?: Record<string, unknown>;
      };
      output: {
        /** A normalized BigQuery table. */
        table: {
          /**
           * The fully qualified BigQuery table ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Google Cloud project ID that owns the table.
           * @minLength 1
           */
          projectId: string;
          /**
           * The BigQuery dataset ID.
           * @minLength 1
           */
          datasetId: string;
          /**
           * The BigQuery table ID.
           * @minLength 1
           */
          tableId: string;
          /**
           * The human-readable table name.
           * @minLength 1
           */
          friendlyName: string | null;
          /**
           * The BigQuery table type.
           * @minLength 1
           */
          type: string | null;
          /**
           * The table location.
           * @minLength 1
           */
          location: string | null;
          /** The table creation time in milliseconds since epoch. */
          creationTime: string | null;
          /** The table modification time in milliseconds since epoch. */
          modifiedTime: string | null;
          /** The number of rows in the table, encoded as a string. */
          numRows: string | null;
          /** The table size in bytes, encoded as a string. */
          numBytes: string | null;
          /** A normalized BigQuery table schema. */
          schema: {
            /**
             * The fields in the BigQuery table schema.
             * @minItems 0
             */
            fields: Array<{
              /**
               * The field name.
               * @minLength 1
               */
              name: string;
              /**
               * The BigQuery field type.
               * @minLength 1
               */
              type: string;
              /**
               * The BigQuery field mode.
               * @minLength 1
               */
              mode?: string;
              /**
               * The field description.
               * @minLength 1
               */
              description?: string;
              /**
               * Nested BigQuery fields for record types.
               * @minItems 0
               */
              fields?: Array<{
                /**
                 * The field name.
                 * @minLength 1
                 */
                name: string;
                /**
                 * The BigQuery field type.
                 * @minLength 1
                 */
                type: string;
                /**
                 * The BigQuery field mode.
                 * @minLength 1
                 */
                mode?: string;
                /**
                 * The field description.
                 * @minLength 1
                 */
                description?: string;
                /**
                 * Nested BigQuery fields for record types.
                 * @minItems 0
                 */
                fields?: Array<{
                  /**
                   * The field name.
                   * @minLength 1
                   */
                  name: string;
                  /**
                   * The BigQuery field type.
                   * @minLength 1
                   */
                  type: string;
                  /**
                   * The BigQuery field mode.
                   * @minLength 1
                   */
                  mode?: string;
                  /**
                   * The field description.
                   * @minLength 1
                   */
                  description?: string;
                  /**
                   * Nested BigQuery fields for record types.
                   * @minItems 0
                   */
                  fields?: Array<{
                    /**
                     * The field name.
                     * @minLength 1
                     */
                    name: string;
                    /**
                     * The BigQuery field type.
                     * @minLength 1
                     */
                    type: string;
                    /**
                     * The BigQuery field mode.
                     * @minLength 1
                     */
                    mode?: string;
                    /**
                     * The field description.
                     * @minLength 1
                     */
                    description?: string;
                    /**
                     * Nested BigQuery fields for record types.
                     * @minItems 0
                     */
                    fields?: Array<{
                      /**
                       * The field name.
                       * @minLength 1
                       */
                      name: string;
                      /**
                       * The BigQuery field type.
                       * @minLength 1
                       */
                      type: string;
                      /**
                       * The BigQuery field mode.
                       * @minLength 1
                       */
                      mode?: string;
                      /**
                       * The field description.
                       * @minLength 1
                       */
                      description?: string;
                      /**
                       * Nested BigQuery fields for record types.
                       * @minItems 0
                       */
                      fields?: Array<{
                        /**
                         * The field name.
                         * @minLength 1
                         */
                        name: string;
                        /**
                         * The BigQuery field type.
                         * @minLength 1
                         */
                        type: string;
                        /**
                         * The BigQuery field mode.
                         * @minLength 1
                         */
                        mode?: string;
                        /**
                         * The field description.
                         * @minLength 1
                         */
                        description?: string;
                        /**
                         * Nested BigQuery fields for record types.
                         * @minItems 0
                         */
                        fields?: Array<{
                          /**
                           * The field name.
                           * @minLength 1
                           */
                          name: string;
                          /**
                           * The BigQuery field type.
                           * @minLength 1
                           */
                          type: string;
                          /**
                           * The BigQuery field mode.
                           * @minLength 1
                           */
                          mode?: string;
                          /**
                           * The field description.
                           * @minLength 1
                           */
                          description?: string;
                          /**
                           * Nested BigQuery fields for record types.
                           * @minItems 0
                           */
                          fields?: Array<Record<string, unknown>>;
                          /** The raw BigQuery object returned by the API. */
                          raw: Record<string, unknown>;
                        }>;
                        /** The raw BigQuery object returned by the API. */
                        raw: Record<string, unknown>;
                      }>;
                      /** The raw BigQuery object returned by the API. */
                      raw: Record<string, unknown>;
                    }>;
                    /** The raw BigQuery object returned by the API. */
                    raw: Record<string, unknown>;
                  }>;
                  /** The raw BigQuery object returned by the API. */
                  raw: Record<string, unknown>;
                }>;
                /** The raw BigQuery object returned by the API. */
                raw: Record<string, unknown>;
              }>;
              /** The raw BigQuery object returned by the API. */
              raw: Record<string, unknown>;
            }>;
            /** The raw BigQuery object returned by the API. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw BigQuery object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
