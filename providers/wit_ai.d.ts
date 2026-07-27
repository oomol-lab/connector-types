import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a keyword and optional synonyms to an existing Wit.ai entity. */
    "wit_ai.add_entity_keyword": {
      input: {
        /**
         * Canonical entity name used by the connector.
         * @minLength 1
         */
        entityName: string;
        /**
         * Keyword value.
         * @minLength 1
         */
        keyword: string;
        /** Synonyms for the new keyword. */
        synonyms?: Array<string>;
      };
      output: {
        /** Unique identifier of the entity. */
        id: string;
        /** Entity name. */
        name: string;
        /** Lookup strategies configured for the entity. */
        lookups: Array<string>;
        /** Roles configured for the entity. */
        roles: Array<string>;
        /** Keywords and synonyms defined on the entity. */
        keywords: Array<{
          /**
           * Keyword value.
           * @minLength 1
           */
          keyword: string;
          /** Synonyms configured for the keyword. */
          synonyms: Array<string>;
        }>;
        /** Language code of the entity. */
        lang?: string;
        /** Whether the entity is built in. */
        builtin?: boolean;
      };
    };
    /** Add a synonym to a specific keyword on a Wit.ai entity. */
    "wit_ai.add_keyword_synonym": {
      input: {
        /**
         * Canonical entity name used by the connector.
         * @minLength 1
         */
        entityName: string;
        /**
         * Keyword value.
         * @minLength 1
         */
        keyword: string;
        /**
         * Synonym value.
         * @minLength 1
         */
        synonym: string;
      };
      output: {
        /** Whether Wit.ai accepted the asynchronous request. */
        sent: boolean;
        /** Number of records reported as accepted. */
        count: number;
      };
    };
    /** Add a canonical value to an existing Wit.ai trait. */
    "wit_ai.add_trait_value": {
      input: {
        /**
         * Canonical trait name used by the connector.
         * @minLength 1
         */
        traitName: string;
        /**
         * Canonical value.
         * @minLength 1
         */
        value: string;
      };
      output: {
        /** Unique identifier of the trait. */
        id: string;
        /** Trait name. */
        name: string;
        /** Values configured for the trait. */
        values: Array<{
          /** Unique identifier of the trait value. */
          id?: string;
          /**
           * Canonical value.
           * @minLength 1
           */
          value: string;
          /** Metadata associated with the trait value. */
          metadata?: string;
          /** Synonyms for the trait value. */
          synonyms?: Array<string>;
          /** Expressions for the trait value. */
          expressions?: Array<string>;
        }>;
        /** Language code of the trait. */
        lang?: string;
        /** Lookup strategies configured for the trait. */
        lookups?: Array<string>;
        /** Creation timestamp of the trait. */
        createdAt?: string;
        /** Last update timestamp of the trait. */
        updatedAt?: string;
        /** Whether the trait allows only one matching value per message. */
        mutuallyExclusive?: boolean;
      };
    };
    /** Analyze a text message and return the intents, entities, and traits inferred by Wit.ai. */
    "wit_ai.analyze_message": {
      input: {
        /**
         * Text to analyze with Wit.ai.
         * @minLength 1
         */
        text: string;
        /**
         * Maximum number of top candidates to request from Wit.ai.
         * @minimum 1
         * @maximum 8
         */
        topN?: number;
        /**
         * Specific Wit.ai app version tag to query.
         * @minLength 1
         */
        tag?: string;
        /** Context object used by Wit.ai for locale, timezone, and other hints. */
        context?: Record<string, unknown>;
        /** Dynamic entities injected into the request for one-off disambiguation. */
        dynamicEntities?: Record<string, Array<Record<string, unknown>>>;
      };
      output: {
        /** Original text returned by Wit.ai. */
        text: string;
        /** Optional message identifier returned by Wit.ai. */
        messageId?: string | null;
        /** Detected intents sorted by confidence. */
        intents: Array<{
          /** Unique identifier of the intent. */
          id: string;
          /** Intent name. */
          name: string;
          /** Confidence score returned by Wit.ai. */
          confidence?: number;
        }>;
        /** Detected entities keyed by entity name. */
        entities: Record<string, Array<{
            /** Unique identifier of the entity match. */
            id: string;
            /** Entity name returned by Wit.ai. */
            name?: string;
            /** Entity role returned by Wit.ai. */
            role?: string;
            /** Source text matched by the entity. */
            body?: string;
            /** Start index of the entity span. */
            start?: number;
            /** End index of the entity span. */
            end?: number;
            /** Confidence score for the entity match. */
            confidence?: number;
            /** Resolved value returned by Wit.ai. */
            value?: unknown;
            /** Entity value type returned by Wit.ai. */
            type?: string;
            /** Nested entity payload returned by Wit.ai. */
            entities?: Record<string, unknown>;
          }>>;
        /** Detected traits keyed by trait name. */
        traits: Record<string, Array<{
            /** Unique identifier of the trait match. */
            id: string;
            /** Resolved trait value. */
            value: string;
            /** Confidence score for the trait match. */
            confidence?: number;
          }>>;
      };
    };
    /** Create a new Wit.ai entity with optional lookups and keywords. */
    "wit_ai.create_entity": {
      input: {
        /**
         * Name of the entity to create.
         * @minLength 1
         */
        name: string;
        /**
         * Roles to create for the entity. At least one role is required.
         * @minItems 1
         */
        roles: Array<string>;
        /** Lookup strategies enabled for the entity. */
        lookups?: Array<"free-text" | "keywords">;
        /** Initial keywords and synonyms for keyword-based entities. */
        keywords?: Array<{
          /**
           * Keyword value.
           * @minLength 1
           */
          keyword: string;
          /** Alternative phrases for the keyword. */
          synonyms?: Array<string>;
        }>;
      };
      output: {
        /** Unique identifier of the entity. */
        id: string;
        /** Entity name. */
        name: string;
        /** Lookup strategies configured for the entity. */
        lookups: Array<string>;
        /** Roles configured for the entity. */
        roles: Array<string>;
        /** Keywords and synonyms defined on the entity. */
        keywords: Array<{
          /**
           * Keyword value.
           * @minLength 1
           */
          keyword: string;
          /** Synonyms configured for the keyword. */
          synonyms: Array<string>;
        }>;
        /** Language code of the entity. */
        lang?: string;
        /** Whether the entity is built in. */
        builtin?: boolean;
      };
    };
    /** Create a new Wit.ai intent for labeling user messages. */
    "wit_ai.create_intent": {
      input: {
        /**
         * Name of the intent to create.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Unique identifier of the intent. */
        id: string;
        /** Intent name. */
        name: string;
        /** Confidence score returned by Wit.ai. */
        confidence?: number;
      };
    };
    /** Create a new Wit.ai trait with one or more canonical values. */
    "wit_ai.create_trait": {
      input: {
        /**
         * Name of the trait to create.
         * @minLength 1
         */
        name: string;
        /**
         * Trait values to create.
         * @minItems 1
         */
        values: Array<string | {
          /**
           * Canonical value.
           * @minLength 1
           */
          value: string;
          /**
           * Optional metadata for the trait value.
           * @minLength 1
           */
          metadata?: string;
          /** Optional sample expressions mapped to the trait value. */
          expressions?: Array<string>;
        }>;
        /** Lookup strategies configured for the trait. */
        lookups?: Array<string>;
        /** Whether the trait should match at most one value per message. */
        mutuallyExclusive?: boolean;
      };
      output: {
        /** Unique identifier of the trait. */
        id: string;
        /** Trait name. */
        name: string;
        /** Values configured for the trait. */
        values: Array<{
          /** Unique identifier of the trait value. */
          id?: string;
          /**
           * Canonical value.
           * @minLength 1
           */
          value: string;
          /** Metadata associated with the trait value. */
          metadata?: string;
          /** Synonyms for the trait value. */
          synonyms?: Array<string>;
          /** Expressions for the trait value. */
          expressions?: Array<string>;
        }>;
        /** Language code of the trait. */
        lang?: string;
        /** Lookup strategies configured for the trait. */
        lookups?: Array<string>;
        /** Creation timestamp of the trait. */
        createdAt?: string;
        /** Last update timestamp of the trait. */
        updatedAt?: string;
        /** Whether the trait allows only one matching value per message. */
        mutuallyExclusive?: boolean;
      };
    };
    /** Asynchronously enqueue validated utterances for training in Wit.ai. */
    "wit_ai.create_utterances": {
      input: {
        /**
         * Utterances to enqueue for training.
         * @minItems 1
         */
        utterances: Array<{
          /**
           * User text sent to Wit.ai for analysis.
           * @minLength 1
           */
          text: string;
          /**
           * Annotated intent for the utterance.
           * @minLength 1
           */
          intent?: string;
          /** Annotated entities in the utterance. */
          entities: Array<{
            /**
             * Entity name including role when applicable.
             * @minLength 1
             */
            entity: string;
            /**
             * Start index of the entity span.
             * @minimum 0
             */
            start: number;
            /**
             * End index of the entity span.
             * @minimum 0
             */
            end: number;
            /** Source text matched by the entity. */
            body: string;
            /**
             * Nested entities inside the composite entity.
             * @default []
             */
            entities?: Array<unknown>;
          }>;
          /** Annotated traits in the utterance. */
          traits: Array<{
            /**
             * Trait name or ID.
             * @minLength 1
             */
            trait: string;
            /**
             * Canonical value.
             * @minLength 1
             */
            value: string;
          }>;
        }>;
      };
      output: {
        /** Whether Wit.ai accepted the asynchronous request. */
        sent: boolean;
        /** Number of records reported as accepted. */
        count: number;
      };
    };
    /** Asynchronously delete validated utterances from the current Wit.ai app. */
    "wit_ai.delete_utterances": {
      input: {
        /**
         * Validated utterances to delete asynchronously.
         * @minItems 1
         */
        utterances: Array<{
          /**
           * Exact utterance text to delete.
           * @minLength 1
           */
          text: string;
        }>;
      };
      output: {
        /** Whether Wit.ai accepted the asynchronous request. */
        sent: boolean;
        /** Number of records reported as accepted. */
        count: number;
      };
    };
    /** Detect the most likely locales for a text message using Wit.ai language identification. */
    "wit_ai.detect_language": {
      input: {
        /**
         * Text to use for locale detection.
         * @minLength 1
         */
        text: string;
        /**
         * Maximum number of top candidates to request from Wit.ai.
         * @minimum 1
         * @maximum 8
         */
        topN?: number;
      };
      output: {
        /** Detected locales returned by Wit.ai. */
        detectedLocales: Array<{
          /** Detected locale such as en_US. */
          locale: string;
          /** Confidence score for the detected locale. */
          confidence: number;
        }>;
      };
    };
    /** Retrieve details and training status for a specific Wit.ai app. */
    "wit_ai.get_app": {
      input: {
        /**
         * Canonical app identifier used by the connector.
         * @minLength 1
         */
        appId: string;
      };
      output: {
        /** Unique identifier of the app. */
        id: string;
        /** App name. */
        name: string;
        /** ISO 639-1 language code. */
        lang: string;
        /** Whether the app is private. */
        private: boolean;
        /** Creation timestamp in ISO 8601 format. */
        createdAt: string;
        /** Whether the app matches the bearer token used for the request. */
        isAppForToken?: boolean;
        /** Scheduled next training timestamp. */
        willTrainAt?: string;
        /** Last completed training timestamp. */
        lastTrainedAt?: string;
        /** Duration of the last training run in seconds. */
        lastTrainingDurationSecs?: number;
        /** Current training status such as done, scheduled, or ongoing. */
        trainingStatus?: string;
      };
    };
    /** Retrieve a Wit.ai entity including its roles, lookups, and keywords. */
    "wit_ai.get_entity": {
      input: {
        /**
         * Canonical entity name used by the connector.
         * @minLength 1
         */
        entityName: string;
      };
      output: {
        /** Unique identifier of the entity. */
        id: string;
        /** Entity name. */
        name: string;
        /** Lookup strategies configured for the entity. */
        lookups: Array<string>;
        /** Roles configured for the entity. */
        roles: Array<string>;
        /** Keywords and synonyms defined on the entity. */
        keywords: Array<{
          /**
           * Keyword value.
           * @minLength 1
           */
          keyword: string;
          /** Synonyms configured for the keyword. */
          synonyms: Array<string>;
        }>;
        /** Language code of the entity. */
        lang?: string;
        /** Whether the entity is built in. */
        builtin?: boolean;
      };
    };
    /** Retrieve a Wit.ai intent together with the entity bindings it uses. */
    "wit_ai.get_intent": {
      input: {
        /**
         * Canonical intent name used by the connector.
         * @minLength 1
         */
        intentName: string;
      };
      output: {
        /** Unique identifier of the intent. */
        id: string;
        /** Intent name. */
        name: string;
        /** Entities associated with the intent. */
        entities: Array<{
          /** Unique identifier of the entity binding. */
          id: string;
          /** Entity binding name. */
          name: string;
        }>;
      };
    };
    /** Retrieve a Wit.ai trait together with its configured values. */
    "wit_ai.get_trait": {
      input: {
        /**
         * Canonical trait name used by the connector.
         * @minLength 1
         */
        traitName: string;
      };
      output: {
        /** Unique identifier of the trait. */
        id: string;
        /** Trait name. */
        name: string;
        /** Values configured for the trait. */
        values: Array<{
          /** Unique identifier of the trait value. */
          id?: string;
          /**
           * Canonical value.
           * @minLength 1
           */
          value: string;
          /** Metadata associated with the trait value. */
          metadata?: string;
          /** Synonyms for the trait value. */
          synonyms?: Array<string>;
          /** Expressions for the trait value. */
          expressions?: Array<string>;
        }>;
        /** Language code of the trait. */
        lang?: string;
        /** Lookup strategies configured for the trait. */
        lookups?: Array<string>;
        /** Creation timestamp of the trait. */
        createdAt?: string;
        /** Last update timestamp of the trait. */
        updatedAt?: string;
        /** Whether the trait allows only one matching value per message. */
        mutuallyExclusive?: boolean;
      };
    };
    /** List the Wit.ai apps accessible by the current bearer token. */
    "wit_ai.list_apps": {
      input: {
        /**
         * Maximum number of apps to return.
         * @minimum 1
         * @maximum 10000
         */
        limit: number;
        /**
         * Number of records to skip before collecting results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Apps accessible by the current bearer token. */
        apps: Array<{
          /** Unique identifier of the app. */
          id: string;
          /** App name. */
          name: string;
          /** ISO 639-1 language code. */
          lang: string;
          /** Whether the app is private. */
          private: boolean;
          /** Creation timestamp in ISO 8601 format. */
          createdAt: string;
          /** Whether the app matches the bearer token used for the request. */
          isAppForToken?: boolean;
        }>;
      };
    };
    /** List all entities defined in the current Wit.ai app. */
    "wit_ai.list_entities": {
      input: Record<string, never>;
      output: {
        /** Entities defined in the app. */
        entities: Array<{
          /** Unique identifier of the entity. */
          id: string;
          /** Entity name. */
          name: string;
        }>;
      };
    };
    /** List all intents defined in the current Wit.ai app. */
    "wit_ai.list_intents": {
      input: {
        /**
         * Maximum number of intents to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Number of records to skip before collecting results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Intents defined in the app. */
        intents: Array<{
          /** Unique identifier of the intent. */
          id: string;
          /** Intent name. */
          name: string;
          /** Confidence score returned by Wit.ai. */
          confidence?: number;
        }>;
      };
    };
    /** List all traits defined in the current Wit.ai app. */
    "wit_ai.list_traits": {
      input: Record<string, never>;
      output: {
        /** Traits defined in the app. */
        traits: Array<{
          /** Unique identifier of the trait. */
          id: string;
          /** Trait name. */
          name: string;
        }>;
      };
    };
    /** List validated utterances already stored in the current Wit.ai app. */
    "wit_ai.list_utterances": {
      input: {
        /**
         * Maximum number of utterances to return.
         * @minimum 1
         * @maximum 10000
         */
        limit: number;
        /**
         * Number of records to skip before collecting results.
         * @minimum 0
         */
        offset?: number;
        /** Optional list of intents used to filter returned utterances. */
        intents?: Array<string>;
        /** Optional list of traits used to filter returned utterances. */
        traits?: Array<string>;
        /** Optional list of entities used to filter returned utterances. */
        entities?: Array<string>;
      };
      output: {
        /** Validated utterances returned by Wit.ai. */
        utterances: Array<{
          /** Utterance text. */
          text: string;
          /** Annotated intent for the utterance. */
          intent?: {
            /** Unique identifier of the intent. */
            id: string;
            /** Intent name. */
            name: string;
          };
          /** Annotated entities for the utterance. */
          entities: Array<{
            /** Entity name including role when applicable. */
            entity: string;
            /** Start index of the entity span. */
            start: number;
            /** End index of the entity span. */
            end: number;
            /** Source text matched by the entity. */
            body: string;
            /**
             * Nested entities.
             * @default []
             */
            entities?: Array<unknown>;
          }>;
          /** Annotated traits for the utterance. */
          traits: Array<{
            /**
             * Trait name or ID.
             * @minLength 1
             */
            trait: string;
            /**
             * Canonical value.
             * @minLength 1
             */
            value: string;
          }>;
        }>;
      };
    };
    /** Update a Wit.ai entity by sending the desired end-state definition for its schema and keywords. */
    "wit_ai.update_entity": {
      input: {
        /**
         * Existing entity name or ID used in the path.
         * @minLength 1
         */
        entityName: string;
        /**
         * Desired entity name after the update.
         * @minLength 1
         */
        name: string;
        /**
         * Final list of roles for the entity. At least one role is required.
         * @minItems 1
         */
        roles: Array<string>;
        /** Lookup strategies enabled for the entity. */
        lookups?: Array<"free-text" | "keywords">;
        /** Final list of keywords and synonyms for the entity. */
        keywords?: Array<{
          /**
           * Keyword value.
           * @minLength 1
           */
          keyword: string;
          /** Alternative phrases for the keyword. */
          synonyms?: Array<string>;
        }>;
      };
      output: {
        /** Unique identifier of the entity. */
        id: string;
        /** Entity name. */
        name: string;
        /** Lookup strategies configured for the entity. */
        lookups: Array<string>;
        /** Roles configured for the entity. */
        roles: Array<string>;
        /** Keywords and synonyms defined on the entity. */
        keywords: Array<{
          /**
           * Keyword value.
           * @minLength 1
           */
          keyword: string;
          /** Synonyms configured for the keyword. */
          synonyms: Array<string>;
        }>;
        /** Language code of the entity. */
        lang?: string;
        /** Whether the entity is built in. */
        builtin?: boolean;
      };
    };
  }
}
