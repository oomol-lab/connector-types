import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Estimate age from a full name or first name, optionally scoped to a country. */
    "agify.predict_age": {
      input: {
        /**
         * The full name or first name to estimate age for.
         * @minLength 1
         */
        name: string;
        /**
         * An ISO 3166-1 alpha-2 country code to scope the prediction.
         * @minLength 2
         * @maxLength 2
         * @pattern ^[A-Za-z]{2}$
         */
        country_id?: string;
      };
      output: {
        /** The name echoed exactly as submitted. */
        name: string;
        /** Estimated age in years, or null when no prediction is available. */
        age: number | null;
        /** The number of data points behind the estimate. */
        count: number;
        /** The country code when the prediction is localized. */
        country_id?: string;
        [key: string]: unknown;
      };
    };
    /** Estimate ages for up to 100 names in input order, optionally scoped to one country. Each name consumes quota. */
    "agify.predict_age_batch": {
      input: {
        /**
         * One to 100 names in the desired result order.
         * @minItems 1
         * @maxItems 100
         */
        names: Array<string>;
        /**
         * An ISO 3166-1 alpha-2 country code to scope the prediction.
         * @minLength 2
         * @maxLength 2
         * @pattern ^[A-Za-z]{2}$
         */
        country_id?: string;
      };
      output: {
        /** Age estimates in the same order as the input names. */
        predictions: Array<{
          /** The name echoed exactly as submitted. */
          name: string;
          /** Estimated age in years, or null when no prediction is available. */
          age: number | null;
          /** The number of data points behind the estimate. */
          count: number;
          /** The country code when the prediction is localized. */
          country_id?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
