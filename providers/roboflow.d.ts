import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Describe workflow inputs, outputs, typing hints, and kind schemas for a specification or saved Roboflow workflow. */
    "roboflow.describe_workflow_interface": {
      input: {
        /** Roboflow workflow specification object defining version, inputs, steps, and outputs. */
        specification?: Record<string, unknown>;
        /**
         * The Roboflow workspace slug.
         * @minLength 1
         */
        workspace?: string;
        /**
         * The Roboflow workflow identifier.
         * @minLength 1
         */
        workflowId?: string;
        /**
         * Specific saved workflow version identifier to use instead of the latest version.
         * @minLength 1
         */
        workflowVersionId?: string;
        /** Whether Roboflow should use cached saved workflow definitions when describing a saved workflow. */
        useCache?: boolean;
      };
      output: {
        /** The raw Roboflow payload for fields not normalized yet. */
        inputs: Record<string, unknown>;
        /** The raw Roboflow payload for fields not normalized yet. */
        outputs: Record<string, unknown>;
        /** The raw Roboflow payload for fields not normalized yet. */
        typingHints: Record<string, unknown>;
        /** The raw Roboflow payload for fields not normalized yet. */
        kindsSchemas: Record<string, unknown>;
        /** The raw Roboflow payload for fields not normalized yet. */
        raw: Record<string, unknown>;
      };
    };
    /** Run Roboflow hosted object detection for one project version using a public image URL or Base64 image content. */
    "roboflow.detect_objects": {
      input: {
        /**
         * The Roboflow project slug.
         * @minLength 1
         */
        project: string;
        /**
         * The Roboflow project version number.
         * @exclusiveMinimum 0
         */
        version: number;
        /**
         * A public image URL to send to Roboflow for inference.
         * @format uri
         */
        imageUrl?: string;
        /**
         * Base64-encoded image bytes to send to Roboflow for inference.
         * @minLength 1
         */
        imageBase64?: string;
        /**
         * Minimum confidence threshold percentage for returned predictions.
         * @minimum 0
         * @maximum 100
         */
        confidence?: number;
        /**
         * Maximum bounding box overlap percentage for non-max suppression.
         * @minimum 0
         * @maximum 100
         */
        overlap?: number;
      };
      output: {
        /** Object detection predictions returned by Roboflow. */
        predictions: Array<{
          /** The predicted class label. */
          className: string | null;
          /** The predicted class identifier when returned. */
          classId: string | null;
          /** The prediction confidence score. */
          confidence: number | null;
          /** The prediction center X coordinate in pixels. */
          x: number | null;
          /** The prediction center Y coordinate in pixels. */
          y: number | null;
          /** The prediction bounding box width in pixels. */
          width: number | null;
          /** The prediction bounding box height in pixels. */
          height: number | null;
          /** The Roboflow detection identifier when returned. */
          detectionId: string | null;
          /** The raw Roboflow payload for fields not normalized yet. */
          raw: Record<string, unknown>;
        }>;
        /** The image dimensions returned by Roboflow when available. */
        image: {
          /** The image width in pixels when returned. */
          width: number | null;
          /** The image height in pixels when returned. */
          height: number | null;
        } | null;
        /** The inference duration in seconds when returned. */
        timeSeconds: number | null;
        /** The raw Roboflow payload for fields not normalized yet. */
        raw: Record<string, unknown>;
      };
    };
    /** List available Roboflow workflow execution engine versions. */
    "roboflow.get_execution_engine_versions": {
      input: Record<string, never>;
      output: {
        /** Execution engine versions returned by Roboflow. */
        versions: Array<string>;
        /** The raw Roboflow payload for fields not normalized yet. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Roboflow project and list its available versions. */
    "roboflow.get_project_versions": {
      input: {
        /**
         * The Roboflow workspace slug.
         * @minLength 1
         */
        workspace: string;
        /**
         * The Roboflow project slug.
         * @minLength 1
         */
        project: string;
      };
      output: {
        /** A normalized Roboflow project summary. */
        project: {
          /** The Roboflow project identifier when returned. */
          id: string | null;
          /** The Roboflow project display name when returned. */
          name: string | null;
          /** The Roboflow project type when returned. */
          type: string | null;
          /** The raw Roboflow payload for fields not normalized yet. */
          raw: Record<string, unknown>;
        };
        /** Versions returned for the requested project. */
        versions: Array<{
          /** The Roboflow version identifier when returned. */
          id: string | null;
          /** The Roboflow version display name when returned. */
          name: string | null;
          /** The model type or model family when returned. */
          model: string | null;
          /** Whether Roboflow reports the version as trained. */
          trained: boolean | null;
          /** The raw Roboflow payload for fields not normalized yet. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Read Roboflow inference server name, version, and UUID. */
    "roboflow.get_server_info": {
      input: Record<string, never>;
      output: {
        /** The Roboflow inference server name. */
        name: string | null;
        /** The Roboflow inference server version. */
        version: string | null;
        /** The Roboflow inference server UUID. */
        uuid: string | null;
        /** The raw Roboflow payload for fields not normalized yet. */
        raw: Record<string, unknown>;
      };
    };
    /** Read Prometheus metrics exposed by the Roboflow inference server. */
    "roboflow.get_server_metrics": {
      input: Record<string, never>;
      output: {
        /** Prometheus metrics text returned by the inference server. */
        metricsText: string;
      };
    };
    /** Read one Roboflow project version and return training/export metadata. */
    "roboflow.get_version": {
      input: {
        /**
         * The Roboflow workspace slug.
         * @minLength 1
         */
        workspace: string;
        /**
         * The Roboflow project slug.
         * @minLength 1
         */
        project: string;
        /**
         * The Roboflow project version number.
         * @exclusiveMinimum 0
         */
        version: number;
      };
      output: {
        /** A normalized Roboflow version detail. */
        version: {
          /** The Roboflow version identifier when returned. */
          id: string | null;
          /** The Roboflow version display name when returned. */
          name: string | null;
          /** The model type or model family when returned. */
          model: string | null;
          /** Whether Roboflow reports the version as trained. */
          trained: boolean | null;
          /** Dataset export formats Roboflow reports for this version. */
          exports: Array<string>;
          /** The raw Roboflow payload for fields not normalized yet. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Fetch the Roboflow workflow block JSON schema. */
    "roboflow.get_workflow_schema": {
      input: Record<string, never>;
      output: {
        /** The raw Roboflow payload for fields not normalized yet. */
        schema: Record<string, unknown>;
        /** The raw Roboflow payload for fields not normalized yet. */
        raw: Record<string, unknown>;
      };
    };
    /** List Roboflow projects visible to the API key workspace. */
    "roboflow.list_projects": {
      input: Record<string, never>;
      output: {
        /** The Roboflow workspace slug when returned. */
        workspace: string | null;
        /** Projects visible to the API key. */
        projects: Array<{
          /** The Roboflow project identifier when returned. */
          id: string | null;
          /** The Roboflow project display name when returned. */
          name: string | null;
          /** The Roboflow project type when returned. */
          type: string | null;
          /** The raw Roboflow payload for fields not normalized yet. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Run a workflow saved in Roboflow using workspace and workflow identifiers with runtime inputs. */
    "roboflow.run_saved_workflow": {
      input: {
        /**
         * The Roboflow workspace slug.
         * @minLength 1
         */
        workspace: string;
        /**
         * The Roboflow workflow identifier.
         * @minLength 1
         */
        workflowId: string;
        /** Runtime values keyed by Roboflow workflow input name. */
        inputs: Record<string, unknown>;
        /**
         * Specific saved workflow version identifier to use instead of the latest version.
         * @minLength 1
         */
        workflowVersionId?: string;
        /** Whether Roboflow should use cached saved workflow definitions. */
        useCache?: boolean;
        /** Output field names to exclude from the workflow response. */
        excludedFields?: Array<string>;
        /** Whether to request workflow profiler trace data. */
        enableProfiling?: boolean;
      };
      output: {
        /** Serialized outputs returned by the workflow. */
        outputs: Array<Record<string, unknown>>;
        /** Profiler trace events returned when profiling is enabled. */
        profilerTrace: Array<Record<string, unknown>> | null;
        /** The raw Roboflow payload for fields not normalized yet. */
        raw: Record<string, unknown>;
      };
    };
    /** Run a Roboflow workflow specification with runtime inputs and return serialized workflow outputs. */
    "roboflow.run_workflow": {
      input: {
        /** Roboflow workflow specification object defining version, inputs, steps, and outputs. */
        specification: Record<string, unknown>;
        /** Runtime values keyed by Roboflow workflow input name. */
        inputs: Record<string, unknown>;
        /**
         * The Roboflow workflow identifier.
         * @minLength 1
         */
        workflowId?: string;
        /** Output field names to exclude from the workflow response. */
        excludedFields?: Array<string>;
        /** Whether to request workflow profiler trace data. */
        enableProfiling?: boolean;
        /** Whether to run the workflow in Roboflow preview mode. */
        isPreview?: boolean;
      };
      output: {
        /** Serialized outputs returned by the workflow. */
        outputs: Array<Record<string, unknown>>;
        /** Profiler trace events returned when profiling is enabled. */
        profilerTrace: Array<Record<string, unknown>> | null;
        /** The raw Roboflow payload for fields not normalized yet. */
        raw: Record<string, unknown>;
      };
    };
    /** Validate a Roboflow workflow specification before running it. */
    "roboflow.validate_workflow": {
      input: {
        /** Roboflow workflow specification object defining version, inputs, steps, and outputs. */
        specification: Record<string, unknown>;
      };
      output: {
        /** Roboflow workflow validation status. */
        status: string | null;
        /** The raw Roboflow payload for fields not normalized yet. */
        raw: Record<string, unknown>;
      };
    };
  }
}
