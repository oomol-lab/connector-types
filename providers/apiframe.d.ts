import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Submit an Apiframe image generation job and return its job ID. */
    "apiframe.generate_image": {
      input: {
        /** The Apiframe generation request, including the model-specific parameter object documented for the selected model. */
        body: {
          /**
           * The Apiframe model identifier from the model catalog.
           * @minLength 1
           */
          model: string;
          /**
           * The generation prompt when required by the selected model.
           * @minLength 1
           */
          prompt?: string;
          /**
           * The endpoint URL that receives job events.
           * @format uri
           */
          webhookUrl?: string;
          /**
           * The job events delivered to the webhook.
           * @minItems 1
           */
          webhookEvents?: Array<"progress" | "completed" | "failed">;
          [key: string]: unknown;
        };
        /**
         * A unique key used to deduplicate generation retries.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /**
         * The job UUID used to retrieve the result.
         * @format uuid
         */
        jobId: string;
        /** The job status when the request was accepted. */
        status: "QUEUED" | "PROCESSING" | "COMPLETED" | "FAILED";
      };
    };
    /** Submit an Apiframe music generation job and return its job ID. */
    "apiframe.generate_music": {
      input: {
        /** The Apiframe generation request, including the model-specific parameter object documented for the selected model. */
        body: {
          /**
           * The Apiframe model identifier from the model catalog.
           * @minLength 1
           */
          model: string;
          /**
           * The generation prompt when required by the selected model.
           * @minLength 1
           */
          prompt?: string;
          /**
           * The endpoint URL that receives job events.
           * @format uri
           */
          webhookUrl?: string;
          /**
           * The job events delivered to the webhook.
           * @minItems 1
           */
          webhookEvents?: Array<"progress" | "completed" | "failed">;
          [key: string]: unknown;
        };
        /**
         * A unique key used to deduplicate generation retries.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /**
         * The job UUID used to retrieve the result.
         * @format uuid
         */
        jobId: string;
        /** The job status when the request was accepted. */
        status: "QUEUED" | "PROCESSING" | "COMPLETED" | "FAILED";
      };
    };
    /** Submit an Apiframe video generation job and return its job ID. */
    "apiframe.generate_video": {
      input: {
        /** The Apiframe generation request, including the model-specific parameter object documented for the selected model. */
        body: {
          /**
           * The Apiframe model identifier from the model catalog.
           * @minLength 1
           */
          model: string;
          /**
           * The generation prompt when required by the selected model.
           * @minLength 1
           */
          prompt?: string;
          /**
           * The endpoint URL that receives job events.
           * @format uri
           */
          webhookUrl?: string;
          /**
           * The job events delivered to the webhook.
           * @minItems 1
           */
          webhookEvents?: Array<"progress" | "completed" | "failed">;
          [key: string]: unknown;
        };
        /**
         * A unique key used to deduplicate generation retries.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /**
         * The job UUID used to retrieve the result.
         * @format uuid
         */
        jobId: string;
        /** The job status when the request was accepted. */
        status: "QUEUED" | "PROCESSING" | "COMPLETED" | "FAILED";
      };
    };
    /** Get the current status and model-specific result for one Apiframe job. */
    "apiframe.get_job": {
      input: {
        /**
         * The Apiframe job UUID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /**
         * The Apiframe job UUID.
         * @format uuid
         */
        id: string;
        /** The current job status. */
        status: "QUEUED" | "PROCESSING" | "COMPLETED" | "FAILED" | "CANCELLED";
        /** The model used by the job. */
        model: string;
        /**
         * The completion percentage when reported.
         * @minimum 0
         * @maximum 100
         */
        progress: number | null;
        /** The original generation input when returned. */
        input?: Record<string, unknown> | null;
        /** The model-specific result, normally containing provider-hosted media URLs. */
        result?: unknown;
        /** The failure message when the job failed. */
        error: string | null;
        /** The number of credits charged for the job. */
        creditCost: number | null;
        /** The current webhook delivery status. */
        webhookStatus: string | null;
        /**
         * The time the job was created.
         * @format date-time
         */
        createdAt: string;
        /**
         * The time the job completed.
         * @format date-time
         */
        completedAt: string | null;
        /** Whether the job's hosted media assets have expired. */
        expired?: boolean;
        [key: string]: unknown;
      };
    };
    /** List Apiframe jobs with cursor pagination and optional status or model filters. */
    "apiframe.list_jobs": {
      input: {
        /** The job status to return. */
        status?: "QUEUED" | "PROCESSING" | "COMPLETED" | "FAILED" | "CANCELLED";
        /**
         * The model identifier to return.
         * @minLength 1
         */
        model?: string;
        /**
         * The maximum number of jobs to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The cursor returned by the previous page.
         * @minLength 1
         */
        cursor?: string;
        /** Whether to return the user's jobs or, for admins, all team jobs. */
        scope?: "user" | "team";
        /**
         * A job UUID to search for.
         * @format uuid
         */
        search?: string;
        /** Whether to include model identifiers available to the current filter. */
        includeModels?: boolean;
      };
      output: {
        /** The jobs in this page. */
        jobs: Array<{
          /**
           * The Apiframe job UUID.
           * @format uuid
           */
          id: string;
          /** The current job status. */
          status: "QUEUED" | "PROCESSING" | "COMPLETED" | "FAILED" | "CANCELLED";
          /** The model used by the job. */
          model: string;
          /**
           * The completion percentage when reported.
           * @minimum 0
           * @maximum 100
           */
          progress: number | null;
          /** The original generation input when returned. */
          input?: Record<string, unknown> | null;
          /** The model-specific result, normally containing provider-hosted media URLs. */
          result?: unknown;
          /** The failure message when the job failed. */
          error: string | null;
          /** The number of credits charged for the job. */
          creditCost: number | null;
          /** The current webhook delivery status. */
          webhookStatus: string | null;
          /**
           * The time the job was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * The time the job completed.
           * @format date-time
           */
          completedAt: string | null;
          /** Whether the job's hosted media assets have expired. */
          expired?: boolean;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page. */
        nextCursor: string | null;
        /** Whether another page is available. */
        hasMore: boolean;
        /** Model identifiers available to the current filter. */
        models?: Array<string>;
      };
    };
    /** List Apiframe models and their current generation control surfaces. */
    "apiframe.list_models": {
      input: {
        /** The media modality to return. */
        modality?: "image" | "video" | "music";
      };
      output: {
        /** The available Apiframe models. */
        models: Array<Record<string, unknown>>;
      };
    };
  }
}
