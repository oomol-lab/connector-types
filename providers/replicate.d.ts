import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a running Replicate prediction by prediction ID. */
    "replicate.cancel_prediction": {
      input: {
        /**
         * The Replicate prediction identifier.
         * @minLength 1
         */
        predictionId: string;
      };
      output: {
        /** A Replicate API object. */
        prediction: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a Replicate prediction using JSON model input and optional synchronous wait headers. */
    "replicate.create_prediction": {
      input: {
        /**
         * The Replicate model identifier, model version identifier, or owner/model:version reference.
         * @minLength 1
         */
        version: string;
        /** A JSON object. */
        input: Record<string, unknown>;
        /**
         * Seconds to wait synchronously for prediction output.
         * @minimum 1
         * @maximum 60
         */
        waitSeconds?: number;
        /**
         * Maximum prediction runtime before Replicate cancels it, such as 30s, 5m, or 1h30m.
         * @minLength 1
         */
        cancelAfter?: string;
        /**
         * An HTTPS webhook URL for Replicate prediction events.
         * @format uri
         */
        webhook?: string;
        /**
         * The Replicate prediction event types that should trigger the webhook.
         * @minItems 1
         */
        webhookEventsFilter?: Array<"start" | "output" | "logs" | "completed">;
      };
      output: {
        /** A Replicate API object. */
        prediction: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve the authenticated Replicate account for the connected API token. */
    "replicate.get_account": {
      input: Record<string, never>;
      output: {
        /** A Replicate API object. */
        account: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Replicate collection by slug. */
    "replicate.get_collection": {
      input: {
        /**
         * The Replicate collection slug.
         * @minLength 1
         */
        collectionSlug: string;
      };
      output: {
        /** A Replicate API object. */
        collection: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Replicate model by owner and model slug. */
    "replicate.get_model": {
      input: {
        /**
         * The Replicate model owner username or organization slug.
         * @minLength 1
         */
        owner: string;
        /**
         * The Replicate model name slug.
         * @minLength 1
         */
        model: string;
      };
      output: {
        /** A Replicate API object. */
        model: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Replicate model version by owner, model, and version ID. */
    "replicate.get_model_version": {
      input: {
        /**
         * The Replicate model owner username or organization slug.
         * @minLength 1
         */
        owner: string;
        /**
         * The Replicate model name slug.
         * @minLength 1
         */
        model: string;
        /**
         * The Replicate model version identifier.
         * @minLength 1
         */
        versionId: string;
      };
      output: {
        /** A Replicate API object. */
        version: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve the current state and output of a Replicate prediction. */
    "replicate.get_prediction": {
      input: {
        /**
         * The Replicate prediction identifier.
         * @minLength 1
         */
        predictionId: string;
      };
      output: {
        /** A Replicate API object. */
        prediction: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List public Replicate model collections. */
    "replicate.list_collections": {
      input: Record<string, never>;
      output: {
        /** The Replicate collections returned for this page. */
        collections: Array<Record<string, unknown>>;
        /**
         * A Replicate pagination URL.
         * @format uri
         */
        next: string | null;
        /**
         * A Replicate pagination URL.
         * @format uri
         */
        previous: string | null;
        [key: string]: unknown;
      };
    };
    /** List versions for one Replicate model. */
    "replicate.list_model_versions": {
      input: {
        /**
         * The Replicate model owner username or organization slug.
         * @minLength 1
         */
        owner: string;
        /**
         * The Replicate model name slug.
         * @minLength 1
         */
        model: string;
      };
      output: {
        /** The model versions returned for this page. */
        versions: Array<Record<string, unknown>>;
        /**
         * A Replicate pagination URL.
         * @format uri
         */
        next: string | null;
        /**
         * A Replicate pagination URL.
         * @format uri
         */
        previous: string | null;
        [key: string]: unknown;
      };
    };
    /** List public Replicate models with optional official sorting parameters. */
    "replicate.list_models": {
      input: {
        /** The field used to sort public Replicate models. */
        sortBy?: "model_created_at" | "latest_version_created_at";
        /** The sort direction for Replicate model results. */
        sortDirection?: "asc" | "desc";
      };
      output: {
        /** The Replicate models returned for this page. */
        models: Array<Record<string, unknown>>;
        /**
         * A Replicate pagination URL.
         * @format uri
         */
        next: string | null;
        /**
         * A Replicate pagination URL.
         * @format uri
         */
        previous: string | null;
        [key: string]: unknown;
      };
    };
    /** List Replicate predictions for the authenticated account. */
    "replicate.list_predictions": {
      input: {
        /**
         * Include predictions created at or after this ISO 8601 timestamp.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * Include predictions created before this ISO 8601 timestamp.
         * @format date-time
         */
        createdBefore?: string;
        /** Filter predictions to those created from the Replicate website. */
        source?: "web";
      };
      output: {
        /** The Replicate predictions returned for this page. */
        predictions: Array<Record<string, unknown>>;
        /**
         * A Replicate pagination URL.
         * @format uri
         */
        next: string | null;
        /**
         * A Replicate pagination URL.
         * @format uri
         */
        previous: string | null;
        [key: string]: unknown;
      };
    };
  }
}
