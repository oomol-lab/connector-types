import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Run multiple instances of the same VectorShift pipeline with JSON-safe inputs in one request. */
    "vectorshift.bulk_run_pipeline": {
      input: {
        /**
         * The VectorShift pipeline identifier.
         * @minLength 1
         */
        pipeline_id: string;
        /**
         * The list of run payloads sent to VectorShift.
         * @minItems 1
         */
        runs: Array<{
          /** Map of input names to their JSON-safe values. */
          inputs: Record<string, string | number | boolean | null | Array<unknown> | {
              /** The VectorShift datatype identifier for map values. */
              type: "map";
              /** The nested values inside the VectorShift map. */
              items: Record<string, unknown>;
            } | Record<string, unknown>>;
        }>;
      };
      output: {
        /** The VectorShift request status. */
        status: "success" | "failed";
        /** The outputs returned for each VectorShift pipeline run. */
        run_outputs: Array<{
          /** The VectorShift run identifier. */
          run_id: string;
          /** The outputs returned for this VectorShift pipeline run. */
          outputs: Record<string, string | number | boolean | null | Array<unknown> | {
              /** The VectorShift datatype identifier for map values. */
              type: "map";
              /** The nested values inside the VectorShift map. */
              items: Record<string, unknown>;
            } | {
              /** The VectorShift datatype identifier for file inputs. */
              type: "file";
              /** The base64 payload for a file input. */
              raw_bytes: string;
              /** Optional VectorShift file metadata. */
              metadata: Record<string, unknown>;
            } | Record<string, unknown>>;
        }>;
      };
    };
    /** Fetch one VectorShift pipeline by pipeline ID or by pipeline name. */
    "vectorshift.get_pipeline": {
      input: {
        /**
         * The VectorShift pipeline identifier.
         * @minLength 1
         */
        pipeline_id?: string;
        /**
         * The VectorShift pipeline name.
         * @minLength 1
         */
        name?: string;
        /**
         * Optional username used by VectorShift when resolving a pipeline by name.
         * @minLength 1
         */
        username?: string;
        /**
         * Optional organization name used by VectorShift when resolving a pipeline by name.
         * @minLength 1
         */
        org_name?: string;
      };
      output: {
        /** The VectorShift request status. */
        status: "success" | "failed";
        /** The pipeline object returned by VectorShift. */
        pipeline: Record<string, unknown>;
      };
    };
    /** List VectorShift pipelines that are accessible to the connected API key. */
    "vectorshift.list_pipelines": {
      input: {
        /** Whether shared pipelines should be included in the result. */
        include_shared?: boolean;
        /** Whether VectorShift should include full pipeline objects. */
        verbose?: boolean;
      };
      output: {
        /** The VectorShift request status. */
        status: "success" | "failed";
        /** The pipeline identifiers returned by VectorShift. */
        pipeline_ids: Array<string>;
        /** The full pipeline objects returned when verbose=true. */
        pipelines: Array<Record<string, unknown>>;
      };
    };
    /** Run one VectorShift pipeline with JSON-safe inputs and return the resulting outputs. */
    "vectorshift.run_pipeline": {
      input: {
        /**
         * The VectorShift pipeline identifier.
         * @minLength 1
         */
        pipeline_id: string;
        /** Map of input names to their JSON-safe values. */
        inputs: Record<string, string | number | boolean | null | Array<unknown> | {
            /** The VectorShift datatype identifier for map values. */
            type: "map";
            /** The nested values inside the VectorShift map. */
            items: Record<string, unknown>;
          } | Record<string, unknown>>;
      };
      output: {
        /** The VectorShift request status. */
        status: "success" | "failed";
        /** The VectorShift run identifier. */
        run_id: string;
        /** The pipeline outputs returned by VectorShift. */
        outputs: Record<string, string | number | boolean | null | Array<unknown> | {
            /** The VectorShift datatype identifier for map values. */
            type: "map";
            /** The nested values inside the VectorShift map. */
            items: Record<string, unknown>;
          } | {
            /** The VectorShift datatype identifier for file inputs. */
            type: "file";
            /** The base64 payload for a file input. */
            raw_bytes: string;
            /** Optional VectorShift file metadata. */
            metadata: Record<string, unknown>;
          } | Record<string, unknown>>;
      };
    };
  }
}
