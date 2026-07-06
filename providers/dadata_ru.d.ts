import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Suggest Russian postal addresses from partial text using DaData's Suggestions API. */
    "dadata_ru.suggest_address": {
      input: {
        /**
         * The address search text to send to DaData.
         * @minLength 1
         * @maxLength 300
         */
        query: string;
        /**
         * The maximum number of suggestions to return.
         * @minimum 1
         * @maximum 20
         */
        count?: number;
        /** The language for returned address suggestions. */
        language?: "ru" | "en";
      };
      output: {
        /** The ordered suggestion results. */
        suggestions: Array<{
          /** The display value for the suggestion. */
          value?: string;
          /** The full unrestricted value for the suggestion. */
          unrestricted_value?: string;
          /** A provider-defined suggestion data object with arbitrary string keys. */
          data?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Suggest Russian banks from partial text using DaData's Suggestions API. */
    "dadata_ru.suggest_bank": {
      input: {
        /**
         * The search text to send to DaData.
         * @minLength 1
         * @maxLength 300
         */
        query: string;
        /**
         * The maximum number of suggestions to return.
         * @minimum 1
         * @maximum 20
         */
        count?: number;
      };
      output: {
        /** The ordered suggestion results. */
        suggestions: Array<{
          /** The display value for the suggestion. */
          value?: string;
          /** The full unrestricted value for the suggestion. */
          unrestricted_value?: string;
          /** A provider-defined suggestion data object with arbitrary string keys. */
          data?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Suggest email addresses from partial text using DaData's Suggestions API. */
    "dadata_ru.suggest_email": {
      input: {
        /**
         * The search text to send to DaData.
         * @minLength 1
         * @maxLength 300
         */
        query: string;
        /**
         * The maximum number of suggestions to return.
         * @minimum 1
         * @maximum 20
         */
        count?: number;
      };
      output: {
        /** The ordered suggestion results. */
        suggestions: Array<{
          /** The display value for the suggestion. */
          value?: string;
          /** The full unrestricted value for the suggestion. */
          unrestricted_value?: string;
          /** A provider-defined suggestion data object with arbitrary string keys. */
          data?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Suggest Russian full names from partial text using DaData's Suggestions API. */
    "dadata_ru.suggest_fio": {
      input: {
        /**
         * The search text to send to DaData.
         * @minLength 1
         * @maxLength 300
         */
        query: string;
        /**
         * The maximum number of suggestions to return.
         * @minimum 1
         * @maximum 20
         */
        count?: number;
      };
      output: {
        /** The ordered suggestion results. */
        suggestions: Array<{
          /** The display value for the suggestion. */
          value?: string;
          /** The full unrestricted value for the suggestion. */
          unrestricted_value?: string;
          /** A provider-defined suggestion data object with arbitrary string keys. */
          data?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Suggest Russian organizations and individual entrepreneurs from partial text using DaData's Suggestions API. */
    "dadata_ru.suggest_party": {
      input: {
        /**
         * The search text to send to DaData.
         * @minLength 1
         * @maxLength 300
         */
        query: string;
        /**
         * The maximum number of suggestions to return.
         * @minimum 1
         * @maximum 20
         */
        count?: number;
      };
      output: {
        /** The ordered suggestion results. */
        suggestions: Array<{
          /** The display value for the suggestion. */
          value?: string;
          /** The full unrestricted value for the suggestion. */
          unrestricted_value?: string;
          /** A provider-defined suggestion data object with arbitrary string keys. */
          data?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
