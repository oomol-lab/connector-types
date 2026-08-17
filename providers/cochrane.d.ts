import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get JSON metadata for a Cochrane review. */
    "cochrane.get_review_metadata": {
      input: {
        /**
         * The Cochrane review ID or CD number.
         * @minLength 1
         */
        reviewId: string;
      };
      output: {
        /** A JSON object returned by the Cochrane Review Document API. */
        metadata: Record<string, unknown>;
      };
    };
    /** Get the document roles associated with a Cochrane review. */
    "cochrane.get_review_roles": {
      input: {
        /**
         * The Cochrane review ID or CD number.
         * @minLength 1
         */
        reviewId: string;
      };
      output: {
        /** The JSON document role data returned by Cochrane. */
        roles: unknown;
      };
    };
    /** List published translations for a Cochrane review or one of its versions. */
    "cochrane.list_review_translations": {
      input: {
        /**
         * The Cochrane review ID or CD number.
         * @minLength 1
         */
        reviewId: string;
        /**
         * The published review version, such as 7.0.
         * @minLength 1
         */
        version?: string;
      };
      output: {
        /** The published translations returned by Cochrane. */
        translations: Array<{
          /** The translation language code. */
          language?: string;
          /** The translated review title. */
          title?: string;
          /** The published translation version. */
          version?: string;
          /**
           * The URL of the published translation.
           * @format uri
           */
          href?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List JSON metadata for all versions of a Cochrane review. */
    "cochrane.list_review_versions": {
      input: {
        /**
         * The Cochrane review ID or CD number.
         * @minLength 1
         */
        reviewId: string;
      };
      output: {
        /** The JSON version metadata returned by Cochrane. */
        versions: unknown;
      };
    };
  }
}
