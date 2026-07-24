import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Submit a JSON prediction against an existing BigML model and return the prediction resource for polling. */
    "bigml.create_prediction": {
      input: {
        /**
         * A model identifier as model/ID or a bare ID.
         * @minLength 1
         */
        modelId: string;
        /** Prediction input values keyed by BigML field identifier or field name. */
        inputData: Record<string, unknown>;
        /**
         * An optional display name for the prediction resource.
         * @minLength 1
         */
        name?: string;
        /**
         * An optional description for the prediction resource.
         * @maxLength 8192
         */
        description?: string;
        /**
         * An optional project identifier as project/ID or a bare ID.
         * @minLength 1
         */
        project?: string;
        /** Tags used to classify the prediction resource. */
        tags?: Array<string>;
        /**
         * The BigML missing-value strategy, 0 or 1.
         * @minimum 0
         * @maximum 1
         */
        missingStrategy?: number;
        /** The metric used to choose classification output. */
        operatingKind?: "probability" | "confidence";
        /** Whether BigML should compute an explanation for the prediction. */
        explain?: boolean;
      };
      output: {
        /** A normalized BigML prediction resource. */
        prediction: {
          /**
           * The prediction resource identifier in prediction/ID form.
           * @minLength 1
           */
          resource: string;
          /** The prediction name when BigML provides it. */
          name: string | null;
          /** The prediction creation timestamp when BigML provides it. */
          created: string | null;
          /** The prediction update timestamp when BigML provides it. */
          updated: string | null;
          /** The model resource used to create the prediction. */
          model: string | null;
          /** The project resource containing the prediction. */
          project: string | null;
          /** The input field values used by BigML for this prediction. */
          inputData: Record<string, unknown>;
          /** A scalar prediction value returned by BigML. */
          output: string | number | null;
          /** The prediction values keyed by objective field identifier. */
          prediction: Record<string, unknown>;
          /** The confidence value returned for the prediction. */
          confidence: number | null;
          /** The display name of the predicted field. */
          objectiveFieldName: string | null;
          /** The normalized BigML resource state. */
          state: "waiting" | "queued" | "started" | "in_progress" | "summarized" | "finished" | "faulty" | "unknown";
          /** The normalized BigML resource status. */
          status: {
            /** The numeric BigML resource status code. */
            code: number;
            /** The human-readable status message returned by BigML. */
            message: string | null;
            /** The completion ratio reported by BigML. */
            progress: number | null;
          };
        };
      };
    };
    /** Permanently delete one stored BigML prediction resource. */
    "bigml.delete_prediction": {
      input: {
        /**
         * A prediction identifier as prediction/ID or a bare ID.
         * @minLength 1
         */
        predictionId: string;
      };
      output: {
        /** Whether the prediction was deleted. */
        deleted: boolean;
        /**
         * The deleted prediction resource identifier.
         * @minLength 1
         */
        resource: string;
      };
    };
    /** Retrieve compact BigML model metadata and field definitions needed to construct prediction input. */
    "bigml.get_model": {
      input: {
        /**
         * A model identifier as model/ID or a bare ID.
         * @minLength 1
         */
        modelId: string;
        /**
         * The maximum number of model fields to return.
         * @exclusiveMinimum 0
         */
        fieldLimit?: number;
        /**
         * The zero-based model field offset.
         * @minimum 0
         */
        fieldOffset?: number;
      };
      output: {
        /** Compact BigML model details used for prediction input. */
        model: {
          /**
           * The model resource identifier in model/ID form.
           * @minLength 1
           */
          resource: string;
          /** The model name when BigML provides it. */
          name: string | null;
          /** The model creation timestamp when BigML provides it. */
          created: string | null;
          /** The model update timestamp when BigML provides it. */
          updated: string | null;
          /** The project resource identifier containing the model. */
          project: string | null;
          /** The field identifier predicted by the model. */
          objectiveField: string | null;
          /** The display name of the predicted field. */
          objectiveFieldName: string | null;
          /** The model field identifiers accepted as prediction input. */
          inputFields: Array<string>;
          /** Model field metadata keyed by BigML field identifier. */
          fields: Record<string, unknown>;
          /** Pagination metadata for the returned model fields. */
          fieldPagination: {
            /**
             * The number of fields returned in this model response.
             * @minimum 0
             */
            count: number | null;
            /**
             * The maximum number of fields requested from BigML.
             * @minimum 0
             */
            limit: number | null;
            /**
             * The field offset used for this model response.
             * @minimum 0
             */
            offset: number | null;
            /**
             * The total number of fields in the model.
             * @minimum 0
             */
            total: number | null;
          } | null;
          /** The normalized BigML resource state. */
          state: "waiting" | "queued" | "started" | "in_progress" | "summarized" | "finished" | "faulty" | "unknown";
          /** The normalized BigML resource status. */
          status: {
            /** The numeric BigML resource status code. */
            code: number;
            /** The human-readable status message returned by BigML. */
            message: string | null;
            /** The completion ratio reported by BigML. */
            progress: number | null;
          };
        };
      };
    };
    /** Retrieve the current status and result of one BigML prediction resource for async polling. */
    "bigml.get_prediction": {
      input: {
        /**
         * A prediction identifier as prediction/ID or a bare ID.
         * @minLength 1
         */
        predictionId: string;
      };
      output: {
        /** A normalized BigML prediction resource. */
        prediction: {
          /**
           * The prediction resource identifier in prediction/ID form.
           * @minLength 1
           */
          resource: string;
          /** The prediction name when BigML provides it. */
          name: string | null;
          /** The prediction creation timestamp when BigML provides it. */
          created: string | null;
          /** The prediction update timestamp when BigML provides it. */
          updated: string | null;
          /** The model resource used to create the prediction. */
          model: string | null;
          /** The project resource containing the prediction. */
          project: string | null;
          /** The input field values used by BigML for this prediction. */
          inputData: Record<string, unknown>;
          /** A scalar prediction value returned by BigML. */
          output: string | number | null;
          /** The prediction values keyed by objective field identifier. */
          prediction: Record<string, unknown>;
          /** The confidence value returned for the prediction. */
          confidence: number | null;
          /** The display name of the predicted field. */
          objectiveFieldName: string | null;
          /** The normalized BigML resource state. */
          state: "waiting" | "queued" | "started" | "in_progress" | "summarized" | "finished" | "faulty" | "unknown";
          /** The normalized BigML resource status. */
          status: {
            /** The numeric BigML resource status code. */
            code: number;
            /** The human-readable status message returned by BigML. */
            message: string | null;
            /** The completion ratio reported by BigML. */
            progress: number | null;
          };
        };
      };
    };
    /** List existing BigML supervised models with credential-safe pagination metadata and compact status details. */
    "bigml.list_models": {
      input: {
        /**
         * The maximum number of resources to return, up to 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * The zero-based resource offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The BigML field used for ordering, prefixed with - for descending order.
         * @minLength 1
         */
        orderBy?: string;
        /**
         * A project resource identifier used to filter the list.
         * @minLength 1
         */
        project?: string;
        /**
         * A case-insensitive substring used to filter resource names.
         * @minLength 1
         */
        nameContains?: string;
      };
      output: {
        /** The models returned for this page. */
        models: Array<{
          /**
           * The model resource identifier in model/ID form.
           * @minLength 1
           */
          resource: string;
          /** The model name when BigML provides it. */
          name: string | null;
          /** The model creation timestamp when BigML provides it. */
          created: string | null;
          /** The model update timestamp when BigML provides it. */
          updated: string | null;
          /** The project resource identifier containing the model. */
          project: string | null;
          /** The normalized BigML resource state. */
          state: "waiting" | "queued" | "started" | "in_progress" | "summarized" | "finished" | "faulty" | "unknown";
          /** The normalized BigML resource status. */
          status: {
            /** The numeric BigML resource status code. */
            code: number;
            /** The human-readable status message returned by BigML. */
            message: string | null;
            /** The completion ratio reported by BigML. */
            progress: number | null;
          };
        }>;
        /** Credential-safe BigML pagination metadata. */
        pagination: {
          /**
           * The total number of matching resources.
           * @minimum 0
           */
          totalCount: number;
          /**
           * The maximum number of resources requested for this page.
           * @exclusiveMinimum 0
           */
          limit: number;
          /**
           * The zero-based offset of this page.
           * @minimum 0
           */
          offset: number;
          /**
           * The offset for the next page when one exists.
           * @minimum 0
           */
          nextOffset: number | null;
          /**
           * The offset for the previous page when one exists.
           * @minimum 0
           */
          previousOffset: number | null;
        };
      };
    };
    /** List stored BigML prediction resources with normalized status and credential-safe pagination metadata. */
    "bigml.list_predictions": {
      input: {
        /**
         * The maximum number of resources to return, up to 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * The zero-based resource offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The BigML field used for ordering, prefixed with - for descending order.
         * @minLength 1
         */
        orderBy?: string;
        /**
         * A project resource identifier used to filter the list.
         * @minLength 1
         */
        project?: string;
        /**
         * A case-insensitive substring used to filter resource names.
         * @minLength 1
         */
        nameContains?: string;
      };
      output: {
        /** The predictions returned for this page. */
        predictions: Array<{
          /**
           * The prediction resource identifier in prediction/ID form.
           * @minLength 1
           */
          resource: string;
          /** The prediction name when BigML provides it. */
          name: string | null;
          /** The prediction creation timestamp when BigML provides it. */
          created: string | null;
          /** The prediction update timestamp when BigML provides it. */
          updated: string | null;
          /** The model resource used to create the prediction. */
          model: string | null;
          /** The project resource containing the prediction. */
          project: string | null;
          /** The input field values used by BigML for this prediction. */
          inputData: Record<string, unknown>;
          /** A scalar prediction value returned by BigML. */
          output: string | number | null;
          /** The prediction values keyed by objective field identifier. */
          prediction: Record<string, unknown>;
          /** The confidence value returned for the prediction. */
          confidence: number | null;
          /** The display name of the predicted field. */
          objectiveFieldName: string | null;
          /** The normalized BigML resource state. */
          state: "waiting" | "queued" | "started" | "in_progress" | "summarized" | "finished" | "faulty" | "unknown";
          /** The normalized BigML resource status. */
          status: {
            /** The numeric BigML resource status code. */
            code: number;
            /** The human-readable status message returned by BigML. */
            message: string | null;
            /** The completion ratio reported by BigML. */
            progress: number | null;
          };
        }>;
        /** Credential-safe BigML pagination metadata. */
        pagination: {
          /**
           * The total number of matching resources.
           * @minimum 0
           */
          totalCount: number;
          /**
           * The maximum number of resources requested for this page.
           * @exclusiveMinimum 0
           */
          limit: number;
          /**
           * The zero-based offset of this page.
           * @minimum 0
           */
          offset: number;
          /**
           * The offset for the next page when one exists.
           * @minimum 0
           */
          nextOffset: number | null;
          /**
           * The offset for the previous page when one exists.
           * @minimum 0
           */
          previousOffset: number | null;
        };
      };
    };
  }
}
