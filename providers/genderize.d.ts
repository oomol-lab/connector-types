import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Predict the gender probability for a single name, optionally localized to one country. */
    "genderize.predict_gender": {
      input: {
        /**
         * The first name or full name string to classify with Genderize.
         * @minLength 1
         */
        name: string;
        /**
         * The optional ISO 3166-1 alpha-2 country code used to localize the prediction.
         * @minLength 2
         * @maxLength 2
         */
        country_id?: string;
      };
      output: {
        /** The input name echoed back by Genderize. */
        name: string;
        /** The inferred gender, or null when Genderize has no data for the name. */
        gender: "male" | "female" | null;
        /**
         * The probability score returned by Genderize for the inferred gender.
         * @minimum 0
         * @maximum 1
         */
        probability: number;
        /**
         * The number of data rows Genderize used for the prediction.
         * @minimum 0
         */
        count: number;
        /**
         * The country code echoed by Genderize when the request was localized.
         * @minLength 2
         * @maxLength 2
         */
        country_id?: string;
      };
    };
    /** Predict the gender probability for up to 10 names in a single request, optionally localized to one country. */
    "genderize.predict_gender_batch": {
      input: {
        /**
         * Up to 10 names to classify in one Genderize batch request.
         * @minItems 1
         * @maxItems 10
         */
        names: Array<string>;
        /**
         * The optional ISO 3166-1 alpha-2 country code used to localize the prediction.
         * @minLength 2
         * @maxLength 2
         */
        country_id?: string;
      };
      output: {
        /**
         * The ordered list of gender predictions returned for the requested names.
         * @minItems 1
         * @maxItems 10
         */
        predictions: Array<{
          /** The input name echoed back by Genderize. */
          name: string;
          /** The inferred gender, or null when Genderize has no data for the name. */
          gender: "male" | "female" | null;
          /**
           * The probability score returned by Genderize for the inferred gender.
           * @minimum 0
           * @maximum 1
           */
          probability: number;
          /**
           * The number of data rows Genderize used for the prediction.
           * @minimum 0
           */
          count: number;
          /**
           * The country code echoed by Genderize when the request was localized.
           * @minLength 2
           * @maxLength 2
           */
          country_id?: string;
        }>;
      };
    };
  }
}
