import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get metadata for one public Deepgram model. */
    "deepgram.get_model": {
      input: {
        /**
         * The unique identifier of the Deepgram model.
         * @minLength 1
         * @pattern \S
         */
        modelId: string;
      };
      output: {
        /** A Deepgram model object that can represent either a speech-to-text or text-to-speech model. */
        model: {
          /** The human-readable model name. */
          name: string | null;
          /** The canonical model identifier. */
          canonical_name: string | null;
          /** The architecture family of the model. */
          architecture: string | null;
          /** The language codes supported by the model. */
          languages: Array<string>;
          /** The model version string. */
          version: string | null;
          /** The unique identifier of the model. */
          uuid: string | null;
          /** Whether the model supports batch processing. */
          batch?: boolean | null;
          /** Whether the model supports streaming processing. */
          streaming?: boolean | null;
          /** Whether the model supports formatted output. */
          formatted_output?: boolean | null;
          /** Additional metadata for a Deepgram text-to-speech model. */
          metadata?: {
            /** The accent of the model voice. */
            accent?: string | null;
            /** The age descriptor of the model voice. */
            age?: string | null;
            /** The accent color associated with the model. */
            color?: string | null;
            /** The display name of the model. */
            display_name?: string | null;
            /** The image URL for the model. */
            image?: string | null;
            /** The sample audio URL for the model. */
            sample?: string | null;
            /** The descriptive tags attached to the model. */
            tags?: Array<string>;
            /** The suggested use cases attached to the model. */
            use_cases?: Array<string>;
          } | null;
        };
      };
    };
    /** Get details for one Deepgram project. */
    "deepgram.get_project": {
      input: {
        /**
         * The unique identifier of the Deepgram project.
         * @minLength 1
         * @pattern \S
         */
        projectId: string;
      };
      output: {
        /** A Deepgram project object returned by the Management API. */
        project: {
          /** The unique identifier of the project. */
          project_id: string | null;
          /** The display name of the project. */
          name: string | null;
          /** Whether the project is opted out of the Model Improvement Program. */
          mip_opt_out?: boolean | null;
        };
      };
    };
    /** Get metadata for one model available to a Deepgram project. */
    "deepgram.get_project_model": {
      input: {
        /**
         * The unique identifier of the Deepgram project.
         * @minLength 1
         * @pattern \S
         */
        projectId: string;
        /**
         * The unique identifier of the Deepgram model.
         * @minLength 1
         * @pattern \S
         */
        modelId: string;
      };
      output: {
        /** A Deepgram model object that can represent either a speech-to-text or text-to-speech model. */
        model: {
          /** The human-readable model name. */
          name: string | null;
          /** The canonical model identifier. */
          canonical_name: string | null;
          /** The architecture family of the model. */
          architecture: string | null;
          /** The language codes supported by the model. */
          languages: Array<string>;
          /** The model version string. */
          version: string | null;
          /** The unique identifier of the model. */
          uuid: string | null;
          /** Whether the model supports batch processing. */
          batch?: boolean | null;
          /** Whether the model supports streaming processing. */
          streaming?: boolean | null;
          /** Whether the model supports formatted output. */
          formatted_output?: boolean | null;
          /** Additional metadata for a Deepgram text-to-speech model. */
          metadata?: {
            /** The accent of the model voice. */
            accent?: string | null;
            /** The age descriptor of the model voice. */
            age?: string | null;
            /** The accent color associated with the model. */
            color?: string | null;
            /** The display name of the model. */
            display_name?: string | null;
            /** The image URL for the model. */
            image?: string | null;
            /** The sample audio URL for the model. */
            sample?: string | null;
            /** The descriptive tags attached to the model. */
            tags?: Array<string>;
            /** The suggested use cases attached to the model. */
            use_cases?: Array<string>;
          } | null;
        };
      };
    };
    /** List the latest public Deepgram models. */
    "deepgram.list_models": {
      input: {
        /** Whether to include non-latest Deepgram model versions in the response. */
        includeOutdated?: boolean;
      };
      output: {
        /** The speech-to-text models returned by Deepgram. */
        stt: Array<{
          /** The human-readable model name. */
          name: string | null;
          /** The canonical model identifier. */
          canonical_name: string | null;
          /** The architecture family of the model. */
          architecture: string | null;
          /** The language codes supported by the model. */
          languages: Array<string>;
          /** The model version string. */
          version: string | null;
          /** The unique identifier of the model. */
          uuid: string | null;
          /** Whether the model supports batch processing. */
          batch?: boolean | null;
          /** Whether the model supports streaming processing. */
          streaming?: boolean | null;
          /** Whether the model supports formatted output. */
          formatted_output?: boolean | null;
          /** Additional metadata for a Deepgram text-to-speech model. */
          metadata?: {
            /** The accent of the model voice. */
            accent?: string | null;
            /** The age descriptor of the model voice. */
            age?: string | null;
            /** The accent color associated with the model. */
            color?: string | null;
            /** The display name of the model. */
            display_name?: string | null;
            /** The image URL for the model. */
            image?: string | null;
            /** The sample audio URL for the model. */
            sample?: string | null;
            /** The descriptive tags attached to the model. */
            tags?: Array<string>;
            /** The suggested use cases attached to the model. */
            use_cases?: Array<string>;
          } | null;
        }>;
        /** The text-to-speech models returned by Deepgram. */
        tts: Array<{
          /** The human-readable model name. */
          name: string | null;
          /** The canonical model identifier. */
          canonical_name: string | null;
          /** The architecture family of the model. */
          architecture: string | null;
          /** The language codes supported by the model. */
          languages: Array<string>;
          /** The model version string. */
          version: string | null;
          /** The unique identifier of the model. */
          uuid: string | null;
          /** Whether the model supports batch processing. */
          batch?: boolean | null;
          /** Whether the model supports streaming processing. */
          streaming?: boolean | null;
          /** Whether the model supports formatted output. */
          formatted_output?: boolean | null;
          /** Additional metadata for a Deepgram text-to-speech model. */
          metadata?: {
            /** The accent of the model voice. */
            accent?: string | null;
            /** The age descriptor of the model voice. */
            age?: string | null;
            /** The accent color associated with the model. */
            color?: string | null;
            /** The display name of the model. */
            display_name?: string | null;
            /** The image URL for the model. */
            image?: string | null;
            /** The sample audio URL for the model. */
            sample?: string | null;
            /** The descriptive tags attached to the model. */
            tags?: Array<string>;
            /** The suggested use cases attached to the model. */
            use_cases?: Array<string>;
          } | null;
        }>;
        /** The raw Deepgram response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List the outstanding balances for a Deepgram project. */
    "deepgram.list_project_balances": {
      input: {
        /**
         * The unique identifier of the Deepgram project.
         * @minLength 1
         * @pattern \S
         */
        projectId: string;
      };
      output: {
        /** The balance entries returned for the project. */
        balances: Array<{
          /** The unique identifier of the balance. */
          balance_id: string | null;
          /** The remaining balance amount. */
          amount: number | null;
          /** The units of the balance, such as USD. */
          units: string | null;
          /** The purchase order or reference identifier. */
          purchase_order_id: string | null;
        }>;
        /** The raw Deepgram response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List the API keys associated with a Deepgram project. */
    "deepgram.list_project_keys": {
      input: {
        /**
         * The unique identifier of the Deepgram project.
         * @minLength 1
         * @pattern \S
         */
        projectId: string;
        /** The Deepgram project API key status to filter by. */
        status?: "active" | "expired";
      };
      output: {
        /** The API keys returned for the project. */
        apiKeys: Array<{
          /** A Deepgram project member attached to an API key. */
          member: {
            /** The unique identifier of the member. */
            member_id: string | null;
            /** The email address of the member. */
            email: string | null;
          };
          /** A Deepgram API key descriptor. */
          api_key: {
            /** The unique identifier of the API key. */
            api_key_id: string | null;
            /** The comment attached to the API key. */
            comment: string | null;
            /** The scopes granted to the API key. */
            scopes: Array<string>;
            /** The ISO 8601 timestamp when the API key was created. */
            created: string | null;
          };
        }>;
        /** The raw Deepgram response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List the models available to a specific Deepgram project. */
    "deepgram.list_project_models": {
      input: {
        /**
         * The unique identifier of the Deepgram project.
         * @minLength 1
         * @pattern \S
         */
        projectId: string;
        /** Whether to include non-latest Deepgram model versions in the response. */
        includeOutdated?: boolean;
      };
      output: {
        /** The speech-to-text models available to the project. */
        stt: Array<{
          /** The human-readable model name. */
          name: string | null;
          /** The canonical model identifier. */
          canonical_name: string | null;
          /** The architecture family of the model. */
          architecture: string | null;
          /** The language codes supported by the model. */
          languages: Array<string>;
          /** The model version string. */
          version: string | null;
          /** The unique identifier of the model. */
          uuid: string | null;
          /** Whether the model supports batch processing. */
          batch?: boolean | null;
          /** Whether the model supports streaming processing. */
          streaming?: boolean | null;
          /** Whether the model supports formatted output. */
          formatted_output?: boolean | null;
          /** Additional metadata for a Deepgram text-to-speech model. */
          metadata?: {
            /** The accent of the model voice. */
            accent?: string | null;
            /** The age descriptor of the model voice. */
            age?: string | null;
            /** The accent color associated with the model. */
            color?: string | null;
            /** The display name of the model. */
            display_name?: string | null;
            /** The image URL for the model. */
            image?: string | null;
            /** The sample audio URL for the model. */
            sample?: string | null;
            /** The descriptive tags attached to the model. */
            tags?: Array<string>;
            /** The suggested use cases attached to the model. */
            use_cases?: Array<string>;
          } | null;
        }>;
        /** The text-to-speech models available to the project. */
        tts: Array<{
          /** The human-readable model name. */
          name: string | null;
          /** The canonical model identifier. */
          canonical_name: string | null;
          /** The architecture family of the model. */
          architecture: string | null;
          /** The language codes supported by the model. */
          languages: Array<string>;
          /** The model version string. */
          version: string | null;
          /** The unique identifier of the model. */
          uuid: string | null;
          /** Whether the model supports batch processing. */
          batch?: boolean | null;
          /** Whether the model supports streaming processing. */
          streaming?: boolean | null;
          /** Whether the model supports formatted output. */
          formatted_output?: boolean | null;
          /** Additional metadata for a Deepgram text-to-speech model. */
          metadata?: {
            /** The accent of the model voice. */
            accent?: string | null;
            /** The age descriptor of the model voice. */
            age?: string | null;
            /** The accent color associated with the model. */
            color?: string | null;
            /** The display name of the model. */
            display_name?: string | null;
            /** The image URL for the model. */
            image?: string | null;
            /** The sample audio URL for the model. */
            sample?: string | null;
            /** The descriptive tags attached to the model. */
            tags?: Array<string>;
            /** The suggested use cases attached to the model. */
            use_cases?: Array<string>;
          } | null;
        }>;
        /** The raw Deepgram response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List the Deepgram projects available to the current API key. */
    "deepgram.list_projects": {
      input: Record<string, never>;
      output: {
        /** The Deepgram projects returned by the Management API. */
        projects: Array<{
          /** The unique identifier of the project. */
          project_id: string | null;
          /** The display name of the project. */
          name: string | null;
        }>;
        /** The raw Deepgram response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
