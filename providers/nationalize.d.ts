import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Predict ranked country candidates and probabilities for a last name or full name. */
    "nationalize.predict_nationality": {
      input: {
        /**
         * A last name or full name to predict. Full names provide the most accurate predictions.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The name echoed by Nationalize. */
        name?: string;
        /** The number of data points behind the prediction. */
        count?: number | null;
        /** Country candidates ordered by descending probability; empty or null when unknown. */
        country?: Array<{
          /** The ISO 3166-1 alpha-2 country code. */
          country_id?: string;
          /** The probability of this country, between zero and one. */
          probability?: number;
          [key: string]: unknown;
        }> | null;
        [key: string]: unknown;
      };
    };
    /** Predict country candidates for up to 100 names in input order. Each name consumes one lookup from the quota. */
    "nationalize.predict_nationality_batch": {
      input: {
        /**
         * The names in the desired result order; duplicates are allowed.
         * @minItems 1
         * @maxItems 100
         */
        names: Array<string>;
      };
      output: {
        /** Predictions in the same order as the input names. */
        predictions: Array<{
          /** The name echoed by Nationalize. */
          name?: string;
          /** The number of data points behind the prediction. */
          count?: number | null;
          /** Country candidates ordered by descending probability; empty or null when unknown. */
          country?: Array<{
            /** The ISO 3166-1 alpha-2 country code. */
            country_id?: string;
            /** The probability of this country, between zero and one. */
            probability?: number;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
