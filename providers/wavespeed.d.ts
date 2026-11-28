import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the credit balance in USD of the WaveSpeedAI account behind the connected API key. */
    "wavespeed.get_balance": {
      input: Record<string, never>;
      output: {
        /** The account balance in USD. */
        balance: number;
      };
    };
    /** Retrieve one WaveSpeedAI model with its input schema, so the inputs for run_model can be built correctly. */
    "wavespeed.get_model": {
      input: {
        /**
         * The WaveSpeedAI model id, which is also its API path, such as bytedance/seedream-v5.0-pro or google/veo3.1-fast/text-to-video.
         * @minLength 1
         */
        modelId: string;
      };
      output: {
        /** A WaveSpeedAI model. */
        model: {
          /**
           * The model id used to run the model.
           * @minLength 1
           */
          modelId: string;
          /** The model display name. */
          name: string;
          /** The task type, such as text-to-image or image-to-video. */
          type: string;
          /** A short description of what the model does. */
          description: string;
          /** The base price of one run in USD. The final price can depend on the inputs. */
          basePrice: number | null;
          [key: string]: unknown;
        };
        /** The JSON Schema of the model input, when the catalog provides one. */
        inputSchema: Record<string, unknown> | null;
      };
    };
    /** Retrieve the status of a WaveSpeedAI prediction and, once it is completed, the URLs of the generated files. */
    "wavespeed.get_prediction": {
      input: {
        /**
         * The prediction id returned by run_model.
         * @minLength 1
         */
        predictionId: string;
      };
      output: {
        /** A WaveSpeedAI prediction. */
        prediction: {
          /**
           * The prediction id used to fetch the result.
           * @minLength 1
           */
          id: string;
          /** The prediction status: created, processing, completed, failed, cancelled, timeout or deleted. */
          status: string;
          /** Generated file URLs or structured results. Empty until the prediction is completed. */
          outputs: Array<unknown>;
          /** The failure reason when the prediction failed. */
          error: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search the WaveSpeedAI model catalog for image, video, audio and 3D generation models by keyword or task type. */
    "wavespeed.list_models": {
      input: {
        /**
         * Words that must all appear in the model id, name or description, such as seedance image-to-video.
         * @minLength 1
         */
        query?: string;
        /**
         * An exact task type to filter by, such as text-to-image, image-to-video or text-to-video.
         * @minLength 1
         */
        type?: string;
        /**
         * Maximum number of models to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** The models that match the search, without their input schemas. */
        models: Array<{
          /**
           * The model id used to run the model.
           * @minLength 1
           */
          modelId: string;
          /** The model display name. */
          name: string;
          /** The task type, such as text-to-image or image-to-video. */
          type: string;
          /** A short description of what the model does. */
          description: string;
          /** The base price of one run in USD. The final price can depend on the inputs. */
          basePrice: number | null;
          [key: string]: unknown;
        }>;
        /**
         * The number of models that matched before the limit was applied.
         * @minimum 0
         */
        total: number;
      };
    };
    /** Start a WaveSpeedAI prediction for a model with a JSON input and return its id. The run is billed; poll get_prediction with the id for the outputs. */
    "wavespeed.run_model": {
      input: {
        /**
         * The WaveSpeedAI model id, which is also its API path, such as bytedance/seedream-v5.0-pro or google/veo3.1-fast/text-to-video.
         * @minLength 1
         */
        modelId: string;
        /** The model input, following the input schema returned by get_model. */
        input: Record<string, unknown>;
      };
      output: {
        /** A WaveSpeedAI prediction. */
        prediction: {
          /**
           * The prediction id used to fetch the result.
           * @minLength 1
           */
          id: string;
          /** The prediction status: created, processing, completed, failed, cancelled, timeout or deleted. */
          status: string;
          /** Generated file URLs or structured results. Empty until the prediction is completed. */
          outputs: Array<unknown>;
          /** The failure reason when the prediction failed. */
          error: string | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
