import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the current TextRazor account plan and request quota summary. */
    "textrazor.account_info": {
      input: Record<string, never>;
      output: {
        /** The current subscription plan identifier. */
        plan?: string;
        /** The number of requests already used today. */
        requestsUsedToday?: number;
        /** The maximum number of concurrent requests allowed for the account. */
        concurrentRequestLimit?: number;
        /** The number of concurrent requests currently in use. */
        concurrentRequestsUsed?: number;
        /** The number of requests included each day in the current plan. */
        planDailyIncludedRequests?: number;
        [key: string]: unknown;
      };
    };
    /** Analyze text with one or more TextRazor extractors and return the official analysis payload. */
    "textrazor.analyze_content": {
      input: {
        /**
         * The text content to analyze.
         * @minLength 1
         */
        text: string;
        /**
         * The extractors to run for this analysis.
         * @minItems 1
         */
        extractors?: Array<string>;
        /** The cleanup mode TextRazor should apply before analysis. */
        cleanup_mode?: "raw" | "stripTags" | "cleanHTML";
        /**
         * An ISO-639-2 language code used to force a specific analysis language.
         * @minLength 3
         * @maxLength 3
         */
        language_override?: string;
        /** Whether TextRazor should use page metadata during cleanup. */
        cleanup_use_metadata?: boolean;
        /** Whether TextRazor should include cleaned text in the response. */
        cleanup_return_cleaned?: boolean;
      };
      output: {
        /** Whether the analysis request succeeded. */
        ok: boolean;
        /** The processing time in seconds reported by TextRazor. */
        time: number;
        /** An error message returned by TextRazor. */
        error?: string;
        /** An informational message returned by TextRazor. */
        message?: string;
        /** The successful analysis response payload. */
        response?: {
          /** The detected or forced document language. */
          language?: string;
          /** Whether the language detection result is considered reliable. */
          languageIsReliable?: boolean;
          /** The cleaned text returned when cleanup.returnCleaned is enabled. */
          cleanedText?: string;
          /** The extracted entities. */
          entities?: Array<{
            /** The original text matched to this entity. */
            matchedText?: string;
            /** The confidence score returned for the entity match. */
            confidenceScore?: number;
            /** The relevance score returned for the entity match. */
            relevanceScore?: number;
            /** The canonical entity identifier. */
            entityId?: string;
            /** The canonical English Wikipedia identifier for this entity. */
            entityEnglishId?: string;
            /** A Wikipedia URL for the entity. */
            wikiLink?: string;
            /** A Wikidata identifier for the entity. */
            wikidataId?: string;
            /** The DBpedia types assigned to the entity. */
            type?: Array<string>;
            /** The Freebase types assigned to the entity. */
            freebaseTypes?: Array<string>;
            /** The token positions that matched the entity. */
            matchingTokens?: Array<number>;
            [key: string]: unknown;
          }>;
          /** The matched classifier categories. */
          categories?: Array<{
            /** The sequential identifier for this category result. */
            id?: number;
            /** The category identifier within the selected classifier. */
            categoryId?: string;
            /** The human-readable category label. */
            label?: string;
            /** The confidence score for the matched category. */
            score?: number;
            /** The classifier identifier that produced the category match. */
            classifierId?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Classify text with one or more TextRazor classifiers and return the official categories payload. */
    "textrazor.classify_text": {
      input: {
        /**
         * The text content to classify.
         * @minLength 1
         */
        text: string;
        /** One or more classifier identifiers to run. */
        classifiers: string | Array<string>;
        /** The cleanup mode TextRazor should apply before analysis. */
        cleanup_mode?: "raw" | "stripTags" | "cleanHTML";
        /**
         * An ISO-639-2 language code used to force a specific analysis language.
         * @minLength 3
         * @maxLength 3
         */
        language_override?: string;
      };
      output: {
        /** Whether the analysis request succeeded. */
        ok: boolean;
        /** The processing time in seconds reported by TextRazor. */
        time: number;
        /** An error message returned by TextRazor. */
        error?: string;
        /** An informational message returned by TextRazor. */
        message?: string;
        /** The successful analysis response payload. */
        response?: {
          /** The detected or forced document language. */
          language?: string;
          /** Whether the language detection result is considered reliable. */
          languageIsReliable?: boolean;
          /** The cleaned text returned when cleanup.returnCleaned is enabled. */
          cleanedText?: string;
          /** The extracted entities. */
          entities?: Array<{
            /** The original text matched to this entity. */
            matchedText?: string;
            /** The confidence score returned for the entity match. */
            confidenceScore?: number;
            /** The relevance score returned for the entity match. */
            relevanceScore?: number;
            /** The canonical entity identifier. */
            entityId?: string;
            /** The canonical English Wikipedia identifier for this entity. */
            entityEnglishId?: string;
            /** A Wikipedia URL for the entity. */
            wikiLink?: string;
            /** A Wikidata identifier for the entity. */
            wikidataId?: string;
            /** The DBpedia types assigned to the entity. */
            type?: Array<string>;
            /** The Freebase types assigned to the entity. */
            freebaseTypes?: Array<string>;
            /** The token positions that matched the entity. */
            matchingTokens?: Array<number>;
            [key: string]: unknown;
          }>;
          /** The matched classifier categories. */
          categories?: Array<{
            /** The sequential identifier for this category result. */
            id?: number;
            /** The category identifier within the selected classifier. */
            categoryId?: string;
            /** The human-readable category label. */
            label?: string;
            /** The confidence score for the matched category. */
            score?: number;
            /** The classifier identifier that produced the category match. */
            classifierId?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Manage TextRazor custom classifier categories, including upload, listing, retrieval, and deletion. */
    "textrazor.custom_classifier_manager": {
      input: {
        operation: "create_update";
        /**
         * The classifier identifier to create or update.
         * @minLength 1
         */
        classifier_id: string;
        /**
         * The categories to upload into the classifier.
         * @minItems 1
         */
        categories: Array<{
          /**
           * The category identifier within the classifier.
           * @minLength 1
           */
          category_id: string;
          /**
           * The human-readable label for the category.
           * @minLength 1
           */
          label?: string;
          /**
           * The TextRazor query used to define the category.
           * @minLength 1
           */
          query: string;
        }>;
      } | {
        operation: "delete";
        /**
         * The classifier identifier to delete.
         * @minLength 1
         */
        classifier_id: string;
      } | {
        operation: "get_categories";
        /**
         * The classifier identifier to inspect.
         * @minLength 1
         */
        classifier_id: string;
        /**
         * The maximum number of categories to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The zero-based offset to use for pagination.
         * @minimum 0
         */
        offset?: number;
      } | {
        operation: "get_category";
        /**
         * The classifier identifier to inspect.
         * @minLength 1
         */
        classifier_id: string;
        /**
         * The category identifier to retrieve.
         * @minLength 1
         */
        category_id: string;
      } | {
        operation: "delete_category";
        /**
         * The classifier identifier to mutate.
         * @minLength 1
         */
        classifier_id: string;
        /**
         * The category identifier to delete.
         * @minLength 1
         */
        category_id: string;
      };
      output: {
        /** Whether the manager operation completed successfully. */
        success?: boolean;
        /** The classifier identifier affected by the operation. */
        classifierId?: string;
        /** The number of categories uploaded during the operation. */
        categoryCount?: number;
        /** The total number of categories available in the classifier. */
        total?: number;
        /** The categories returned by the operation. */
        categories?: Array<{
          /** The classifier category identifier. */
          categoryId?: string;
          label?: string | null;
          /** The classifier query expression. */
          query?: string;
          [key: string]: unknown;
        }>;
        /** The category identifier returned by the operation. */
        categoryId?: string;
        /** The category label returned by the operation. */
        label?: string;
        /** The category query returned by the operation. */
        query?: string;
        [key: string]: unknown;
      };
    };
    /** Manage TextRazor custom entity dictionaries, including lifecycle and entry operations. */
    "textrazor.dictionary_manager": {
      input: {
        operation: "create";
        /**
         * The dictionary identifier to create.
         * @minLength 1
         */
        dictionary_id: string;
      } | {
        operation: "list";
      } | {
        operation: "get";
        /**
         * The dictionary identifier to retrieve.
         * @minLength 1
         */
        dictionary_id: string;
      } | {
        operation: "delete";
        /**
         * The dictionary identifier to delete.
         * @minLength 1
         */
        dictionary_id: string;
      } | {
        operation: "add_entries";
        /**
         * The dictionary identifier to mutate.
         * @minLength 1
         */
        dictionary_id: string;
        /**
         * The entries to add into the dictionary.
         * @minItems 1
         */
        entries: Array<{
          /**
           * The stable identifier for the dictionary entry.
           * @minLength 1
           */
          id?: string;
          /**
           * The dictionary entry text.
           * @minLength 1
           */
          text: string;
          /** Additional metadata attached to the dictionary entry. */
          data?: Record<string, Array<string>>;
        }>;
      } | {
        operation: "get_entries";
        /**
         * The dictionary identifier to inspect.
         * @minLength 1
         */
        dictionary_id: string;
        /**
         * The maximum number of entries to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The zero-based offset to use for pagination.
         * @minimum 0
         */
        offset?: number;
      } | {
        operation: "delete_entries";
        /**
         * The dictionary identifier to mutate.
         * @minLength 1
         */
        dictionary_id: string;
        /**
         * The entries to delete from the dictionary.
         * @minItems 1
         */
        entries: Array<{
          /**
           * The entry identifier required for deletion.
           * @minLength 1
           */
          id: string;
        }>;
      };
      output: {
        /** Whether the manager operation completed successfully. */
        success?: boolean;
        /** The dictionary identifier affected by the operation. */
        dictionaryId?: string;
        /** The entry identifiers deleted during the operation. */
        deletedEntryIds?: Array<string>;
        /** The number of entries affected during the operation. */
        entryCount?: number;
        /** The dictionaries returned by the operation. */
        dictionaries?: Array<{
          /** The dictionary identifier. */
          id?: string;
          /** Whether dictionary matching is case insensitive. */
          caseInsensitive?: boolean;
          /** Whether approximate matching is enabled for the dictionary. */
          approximateMatching?: boolean;
          /** The language associated with the dictionary. */
          language?: string;
          [key: string]: unknown;
        }>;
        /** The dictionary returned by the operation. */
        dictionary?: {
          /** The dictionary identifier. */
          id?: string;
          /** Whether dictionary matching is case insensitive. */
          caseInsensitive?: boolean;
          /** Whether approximate matching is enabled for the dictionary. */
          approximateMatching?: boolean;
          /** The language associated with the dictionary. */
          language?: string;
          [key: string]: unknown;
        };
        /** The dictionary entries returned by the operation. */
        entries?: Array<{
          /** The dictionary entry identifier. */
          id?: string;
          /** The dictionary entry text. */
          text?: string;
          /** The metadata attached to the dictionary entry. */
          data?: Record<string, Array<string>>;
          [key: string]: unknown;
        }>;
        /** The total number of returned entries. */
        total?: number;
        [key: string]: unknown;
      };
    };
    /** Extract named entities from text using the official TextRazor entities extractor. */
    "textrazor.extract_entities": {
      input: {
        /**
         * The text content to analyze.
         * @minLength 1
         */
        text: string;
        /** The cleanup mode TextRazor should apply before analysis. */
        cleanup_mode?: "raw" | "stripTags" | "cleanHTML";
        /**
         * An ISO-639-2 language code used to force a specific analysis language.
         * @minLength 3
         * @maxLength 3
         */
        language_override?: string;
        /** Whether overlapping entities are allowed in the response. */
        entities_allow_overlap?: boolean;
        /** The DBpedia types to keep in the entity response. */
        entities_filter_dbpedia_types?: Array<string>;
        /** The Freebase types to keep in the entity response. */
        entities_filter_freebase_types?: Array<string>;
        /** The custom entity dictionaries to enable during extraction. */
        entity_dictionaries?: Array<string>;
      };
      output: {
        /** Whether the analysis request succeeded. */
        ok: boolean;
        /** The processing time in seconds reported by TextRazor. */
        time: number;
        /** An error message returned by TextRazor. */
        error?: string;
        /** An informational message returned by TextRazor. */
        message?: string;
        /** The successful analysis response payload. */
        response?: {
          /** The detected or forced document language. */
          language?: string;
          /** Whether the language detection result is considered reliable. */
          languageIsReliable?: boolean;
          /** The cleaned text returned when cleanup.returnCleaned is enabled. */
          cleanedText?: string;
          /** The extracted entities. */
          entities?: Array<{
            /** The original text matched to this entity. */
            matchedText?: string;
            /** The confidence score returned for the entity match. */
            confidenceScore?: number;
            /** The relevance score returned for the entity match. */
            relevanceScore?: number;
            /** The canonical entity identifier. */
            entityId?: string;
            /** The canonical English Wikipedia identifier for this entity. */
            entityEnglishId?: string;
            /** A Wikipedia URL for the entity. */
            wikiLink?: string;
            /** A Wikidata identifier for the entity. */
            wikidataId?: string;
            /** The DBpedia types assigned to the entity. */
            type?: Array<string>;
            /** The Freebase types assigned to the entity. */
            freebaseTypes?: Array<string>;
            /** The token positions that matched the entity. */
            matchingTokens?: Array<number>;
            [key: string]: unknown;
          }>;
          /** The matched classifier categories. */
          categories?: Array<{
            /** The sequential identifier for this category result. */
            id?: number;
            /** The category identifier within the selected classifier. */
            categoryId?: string;
            /** The human-readable category label. */
            label?: string;
            /** The confidence score for the matched category. */
            score?: number;
            /** The classifier identifier that produced the category match. */
            classifierId?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
