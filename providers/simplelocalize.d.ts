import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a language in the authenticated SimpleLocalize project. */
    "simplelocalize.create_language": {
      input: {
        /**
         * The case-sensitive language key.
         * @minLength 1
         * @maxLength 20
         */
        key: string;
        /**
         * The display name for the language.
         * @maxLength 200
         */
        name?: string;
      };
      output: {
        /** The created language. */
        language: Record<string, unknown>;
      };
    };
    /** Create a translation key in the authenticated SimpleLocalize project. */
    "simplelocalize.create_translation_key": {
      input: {
        /**
         * The translation key to create.
         * @minLength 1
         * @maxLength 500
         */
        key: string;
        /**
         * The namespace for the translation key.
         * @maxLength 128
         */
        namespace?: string;
        /**
         * A translator-facing description for the key.
         * @maxLength 500
         */
        description?: string;
        /**
         * A code-facing description for the key.
         * @maxLength 500
         */
        codeDescription?: string;
        /** The maximum translated-text length, or -1 for no limit. */
        charactersLimit?: number;
        /** Whether to prevent the translation key from being modified. */
        lock?: boolean;
        /** Whether to mark the translation key as deprecated. */
        deprecated?: boolean;
        /**
         * Up to five tags assigned to the key.
         * @maxItems 5
         */
        tags?: Array<string>;
        /** Provider-defined attributes assigned to the translation key. */
        attributes?: Record<string, unknown>;
      };
      output: {
        /** Whether SimpleLocalize completed the requested operation. */
        success: boolean;
      };
    };
    /** Delete a language from the authenticated SimpleLocalize project. */
    "simplelocalize.delete_language": {
      input: {
        /**
         * The case-sensitive language key to delete.
         * @minLength 1
         */
        languageKey: string;
      };
      output: {
        /** Whether SimpleLocalize completed the requested operation. */
        success: boolean;
      };
    };
    /** Get details and localization statistics for the authenticated SimpleLocalize project. */
    "simplelocalize.get_project": {
      input: Record<string, never>;
      output: {
        /** The project data returned by SimpleLocalize. */
        data: Record<string, unknown>;
      };
    };
    /** List languages configured in the authenticated SimpleLocalize project. */
    "simplelocalize.list_languages": {
      input: Record<string, never>;
      output: {
        /** The languages configured in the project. */
        languages: Array<Record<string, unknown>>;
      };
    };
    /** List translation keys and their metadata in the authenticated project. */
    "simplelocalize.list_translation_keys": {
      input: {
        /** The exact translation key to filter by. */
        key?: string;
        /** The exact namespace to filter by. */
        namespace?: string;
        /** The field used to sort translation keys. */
        sort?: "last_seen_at" | "modified_at" | "created_at" | "deprecated_at";
        /**
         * The zero-based result page.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of translation keys per page.
         * @minimum 1
         * @maximum 2500
         */
        size?: number;
      };
      output: {
        /** The translation keys on the requested page. */
        translationKeys: Array<Record<string, unknown>>;
        /** The pagination details returned by SimpleLocalize. */
        pageDetails: Record<string, unknown> | null;
      };
    };
    /** List and filter translations in the authenticated SimpleLocalize project. */
    "simplelocalize.list_translations": {
      input: {
        /** The exact translation key to filter by. */
        key?: string;
        /** The exact namespace to filter by. */
        namespace?: string;
        /** The language key to filter by. */
        language?: string;
        /**
         * Text to search for, using a case-insensitive contains match.
         * @minLength 3
         */
        text?: string;
        /** The customer identifier to filter by. */
        customerId?: string;
        /** Whether to exclude customer-specific translations. */
        baseOnly?: boolean;
        /** The review status to filter by. */
        reviewStatus?: "REVIEWED" | "NOT_REVIEWED";
        /**
         * The zero-based result page.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of translations per page.
         * @minimum 1
         * @maximum 2500
         */
        size?: number;
        /** The field used to sort translations. */
        sortBy?: "lastModifiedAt";
        /** The translation sort direction. */
        sortOrder?: "asc" | "desc";
        /** The translation version to return. */
        version?: "REVIEWED";
      };
      output: {
        /** The translations on the requested page. */
        translations: Array<Record<string, unknown>>;
        /** The pagination details returned by SimpleLocalize. */
        pageDetails: Record<string, unknown> | null;
      };
    };
    /** Update a language in the authenticated SimpleLocalize project. */
    "simplelocalize.update_language": {
      input: {
        /**
         * The current case-sensitive language key.
         * @minLength 1
         */
        languageKey: string;
        /**
         * The replacement language key.
         * @minLength 1
         * @maxLength 20
         */
        key?: string;
        /**
         * The replacement display name.
         * @maxLength 200
         */
        name?: string;
      };
      output: {
        /** Whether SimpleLocalize completed the requested operation. */
        success: boolean;
      };
    };
    /** Update the text or review state of one SimpleLocalize translation. */
    "simplelocalize.update_translation": {
      input: {
        /**
         * The translation key to update.
         * @minLength 1
         */
        key: string;
        /**
         * The language key of the translation to update.
         * @minLength 1
         */
        language: string;
        /**
         * The new translation text.
         * @maxLength 16382
         */
        text: string;
        /** The namespace containing the translation key. */
        namespace?: string;
        /** The customer identifier for a customer-specific translation. */
        customerId?: string;
        /** The new review status. */
        reviewStatus?: "REVIEWED" | "NOT_REVIEWED";
      };
      output: {
        /** Whether SimpleLocalize completed the requested operation. */
        success: boolean;
      };
    };
  }
}
