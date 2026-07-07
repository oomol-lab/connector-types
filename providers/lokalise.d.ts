import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one or more translation keys in a Lokalise project. */
    "lokalise.create_keys": {
      input: {
        /**
         * The unique Lokalise project identifier.
         * @minLength 1
         */
        project_id: string;
        /**
         * Keys to add to the project.
         * @minItems 1
         */
        keys: Array<{
          /**
           * The key identifier.
           * @minLength 1
           */
          key_name: string;
          /**
           * Platforms enabled for the key.
           * @minItems 1
           */
          platforms: Array<"android" | "ios" | "other" | "web">;
          /** The key description. */
          description?: string;
          /** Filenames for each platform. */
          filenames?: {
            /**
             * The iOS platform filename.
             * @minLength 1
             */
            ios?: string;
            /**
             * The Android platform filename.
             * @minLength 1
             */
            android?: string;
            /**
             * The Web platform filename.
             * @minLength 1
             */
            web?: string;
            /**
             * The Other platform filename.
             * @minLength 1
             */
            other?: string;
          };
          /** Tags to assign to the key. */
          tags?: Array<string>;
          /** Comments to attach to this key. */
          comments?: Array<{
            /**
             * The comment message.
             * @minLength 1
             */
            comment: string;
          }>;
          /** Translations to create with this key. */
          translations?: Array<{
            /**
             * The language code of the translation.
             * @minLength 1
             */
            language_iso: string;
            /** Translation content as text or plural-form object. */
            translation: string | Record<string, unknown>;
            /** Whether the translation should be marked reviewed. */
            is_reviewed?: boolean;
            /** Whether the translation should be marked unverified. */
            is_unverified?: boolean;
            /** Custom translation status IDs to assign. */
            custom_translation_status_ids?: Array<string>;
          }>;
          /** Whether this key is plural. */
          is_plural?: boolean;
          /** The custom plural name. */
          plural_name?: string;
          /** Whether this key is hidden from non-admin contributors. */
          is_hidden?: boolean;
          /** Whether this key is archived. */
          is_archived?: boolean;
          /** The optional key context. */
          context?: string;
          /** The maximum allowed number of characters. */
          char_limit?: number;
          /** JSON encoded custom key attributes. */
          custom_attributes?: string;
        }>;
        /** Whether to run automations on the new key translations. */
        use_automations?: boolean;
      };
      output: {
        /** The Lokalise project identifier. */
        projectId: string;
        /** Keys returned by Lokalise. */
        keys: Array<{
          /** The unique key identifier. */
          key_id?: number;
          /** When the key was created. */
          created_at?: string;
          /** Unix timestamp when the key was created. */
          created_at_timestamp?: number;
          /** A Lokalise key name as a string or per-platform object. */
          key_name?: string | Record<string, unknown>;
          /** A raw object returned by the official Lokalise API. */
          filenames?: Record<string, unknown>;
          /** The key description. */
          description?: string;
          /** The platforms enabled for this key. */
          platforms?: Array<string>;
          /** The tags assigned to this key. */
          tags?: Array<string>;
          /** Comments attached to this key. */
          comments?: Array<Record<string, unknown>>;
          /** Screenshots attached to this key. */
          screenshots?: Array<Record<string, unknown>>;
          /** Translations included with this key. */
          translations?: Array<Record<string, unknown>>;
          /** Whether this key is plural. */
          is_plural?: boolean;
          /** The custom plural name. */
          plural_name?: string;
          /** Whether this key is hidden from non-admin contributors. */
          is_hidden?: boolean;
          /** Whether this key is archived. */
          is_archived?: boolean;
          /** The optional key context. */
          context?: string;
          /** The number of words in the base language. */
          base_words?: number;
          /** The maximum allowed number of characters. */
          char_limit?: number;
          /** Custom attributes assigned to this key. */
          custom_attributes?: Array<unknown>;
          /** When the key was last modified. */
          modified_at?: string;
          /** Unix timestamp when the key was last modified. */
          modified_at_timestamp?: number;
          /** When translations for this key were last modified. */
          translations_modified_at?: string;
          /** Unix timestamp when translations for this key were last modified. */
          translations_modified_at_timestamp?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Delete one Lokalise key by key ID. */
    "lokalise.delete_key": {
      input: {
        /**
         * The unique Lokalise project identifier.
         * @minLength 1
         */
        project_id: string;
        /**
         * The unique Lokalise key identifier.
         * @minimum 1
         */
        key_id: number;
      };
      output: {
        /** The Lokalise project identifier. */
        projectId: string;
        /** Whether Lokalise removed the key. */
        keyRemoved: boolean;
        /**
         * The number of locked keys reported by Lokalise.
         * @minimum 0
         */
        keysLocked: number;
      };
    };
    /** Retrieve one Lokalise key by key ID. */
    "lokalise.get_key": {
      input: {
        /**
         * The unique Lokalise project identifier.
         * @minLength 1
         */
        project_id: string;
        /**
         * The unique Lokalise key identifier.
         * @minimum 1
         */
        key_id: number;
        /** Whether to disable key references. */
        disable_references?: boolean;
      };
      output: {
        /** The Lokalise project identifier. */
        projectId: string;
        /** A Lokalise key. */
        key: {
          /** The unique key identifier. */
          key_id?: number;
          /** When the key was created. */
          created_at?: string;
          /** Unix timestamp when the key was created. */
          created_at_timestamp?: number;
          /** A Lokalise key name as a string or per-platform object. */
          key_name?: string | Record<string, unknown>;
          /** A raw object returned by the official Lokalise API. */
          filenames?: Record<string, unknown>;
          /** The key description. */
          description?: string;
          /** The platforms enabled for this key. */
          platforms?: Array<string>;
          /** The tags assigned to this key. */
          tags?: Array<string>;
          /** Comments attached to this key. */
          comments?: Array<Record<string, unknown>>;
          /** Screenshots attached to this key. */
          screenshots?: Array<Record<string, unknown>>;
          /** Translations included with this key. */
          translations?: Array<Record<string, unknown>>;
          /** Whether this key is plural. */
          is_plural?: boolean;
          /** The custom plural name. */
          plural_name?: string;
          /** Whether this key is hidden from non-admin contributors. */
          is_hidden?: boolean;
          /** Whether this key is archived. */
          is_archived?: boolean;
          /** The optional key context. */
          context?: string;
          /** The number of words in the base language. */
          base_words?: number;
          /** The maximum allowed number of characters. */
          char_limit?: number;
          /** Custom attributes assigned to this key. */
          custom_attributes?: Array<unknown>;
          /** When the key was last modified. */
          modified_at?: string;
          /** Unix timestamp when the key was last modified. */
          modified_at_timestamp?: number;
          /** When translations for this key were last modified. */
          translations_modified_at?: string;
          /** Unix timestamp when translations for this key were last modified. */
          translations_modified_at_timestamp?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Lokalise project by project ID. */
    "lokalise.get_project": {
      input: {
        /**
         * The unique Lokalise project identifier.
         * @minLength 1
         */
        project_id: string;
      };
      output: {
        /** A Lokalise project. */
        project: {
          /** The unique project identifier. */
          project_id?: string;
          /** The project type descriptor. */
          project_type?: string;
          /** The project name. */
          name?: string;
          /** The project description. */
          description?: string;
          /** When the project was created. */
          created_at?: string;
          /** Unix timestamp when the project was created. */
          created_at_timestamp?: number;
          /** The user identifier that created the project. */
          created_by?: number;
          /** The email address of the user that created the project. */
          created_by_email?: string;
          /** The team identifier the project belongs to. */
          team_id?: number;
          /** The default project language identifier. */
          base_language_id?: number;
          /** The default project language code. */
          base_language_iso?: string;
          /** A raw object returned by the official Lokalise API. */
          settings?: Record<string, unknown>;
          /** A raw object returned by the official Lokalise API. */
          statistics?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Lokalise translation by translation ID. */
    "lokalise.get_translation": {
      input: {
        /**
         * The unique Lokalise project identifier.
         * @minLength 1
         */
        project_id: string;
        /**
         * The unique Lokalise translation identifier.
         * @minimum 1
         */
        translation_id: number;
        /** Whether to disable key references. */
        disable_references?: boolean;
      };
      output: {
        /** The Lokalise project identifier. */
        projectId: string;
        /** A Lokalise translation item. */
        translation: {
          /** The unique translation identifier. */
          translation_id?: number;
          /** The key identifier this translation belongs to. */
          key_id?: number;
          /** The language code for this translation. */
          language_iso?: string;
          /** When the translation was last modified. */
          modified_at?: string;
          /** Unix timestamp when the translation was last modified. */
          modified_at_timestamp?: number;
          /** The user identifier that last modified the translation. */
          modified_by?: number;
          /** The email address of the user that last modified the translation. */
          modified_by_email?: string;
          /** The translation content returned by Lokalise. */
          translation?: unknown;
          /** Whether the translation is marked unverified. */
          is_unverified?: boolean;
          /** Whether the translation is marked reviewed. */
          is_reviewed?: boolean;
          /** The user identifier that reviewed the translation. */
          reviewed_by?: number;
          /** The number of words in the translation. */
          words?: number;
          /** Custom translation statuses assigned to this translation. */
          custom_translation_statuses?: Array<unknown>;
          /** The task identifier when the translation belongs to a task. */
          task_id?: number | null;
          /** The segment number when segmentation is used. */
          segment_number?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List translation keys in a Lokalise project. */
    "lokalise.list_keys": {
      input: {
        /**
         * The unique Lokalise project identifier.
         * @minLength 1
         */
        project_id: string;
        /** Whether to disable key references. */
        disable_references?: boolean;
        /** Whether to include comments. */
        include_comments?: boolean;
        /** Whether to include screenshot URLs. */
        include_screenshots?: boolean;
        /** Whether to include translations. */
        include_translations?: boolean;
        /**
         * One or more language IDs to include translations for, comma-separated.
         * @minLength 1
         */
        filter_translation_lang_ids?: string;
        /**
         * One or more tags to filter by, comma-separated.
         * @minLength 1
         */
        filter_tags?: string;
        /**
         * One or more filenames to filter by, comma-separated.
         * @minLength 1
         */
        filter_filenames?: string;
        /**
         * One or more key names to filter by, comma-separated.
         * @minLength 1
         */
        filter_keys?: string;
        /**
         * One or more key identifiers to filter by, comma-separated.
         * @minLength 1
         */
        filter_key_ids?: string;
        /**
         * One or more platforms to filter by, comma-separated.
         * @minLength 1
         */
        filter_platforms?: string;
        /** Whether to filter untranslated keys. */
        filter_untranslated?: boolean;
        /**
         * One or more QA issue codes to filter by, comma-separated.
         * @minLength 1
         */
        filter_qa_issues?: string;
        /** The archive filter to apply. */
        filter_archived?: "exclude" | "include" | "only";
        /**
         * The number of keys to include, up to 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * Return results starting from this page.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The Lokalise project identifier. */
        projectId: string;
        /** Keys returned by Lokalise. */
        keys: Array<{
          /** The unique key identifier. */
          key_id?: number;
          /** When the key was created. */
          created_at?: string;
          /** Unix timestamp when the key was created. */
          created_at_timestamp?: number;
          /** A Lokalise key name as a string or per-platform object. */
          key_name?: string | Record<string, unknown>;
          /** A raw object returned by the official Lokalise API. */
          filenames?: Record<string, unknown>;
          /** The key description. */
          description?: string;
          /** The platforms enabled for this key. */
          platforms?: Array<string>;
          /** The tags assigned to this key. */
          tags?: Array<string>;
          /** Comments attached to this key. */
          comments?: Array<Record<string, unknown>>;
          /** Screenshots attached to this key. */
          screenshots?: Array<Record<string, unknown>>;
          /** Translations included with this key. */
          translations?: Array<Record<string, unknown>>;
          /** Whether this key is plural. */
          is_plural?: boolean;
          /** The custom plural name. */
          plural_name?: string;
          /** Whether this key is hidden from non-admin contributors. */
          is_hidden?: boolean;
          /** Whether this key is archived. */
          is_archived?: boolean;
          /** The optional key context. */
          context?: string;
          /** The number of words in the base language. */
          base_words?: number;
          /** The maximum allowed number of characters. */
          char_limit?: number;
          /** Custom attributes assigned to this key. */
          custom_attributes?: Array<unknown>;
          /** When the key was last modified. */
          modified_at?: string;
          /** Unix timestamp when the key was last modified. */
          modified_at_timestamp?: number;
          /** When translations for this key were last modified. */
          translations_modified_at?: string;
          /** Unix timestamp when translations for this key were last modified. */
          translations_modified_at_timestamp?: number;
          [key: string]: unknown;
        }>;
        /**
         * The total number of items reported by Lokalise.
         * @minimum 0
         */
        totalCount?: number;
      };
    };
    /** List languages configured on a Lokalise project. */
    "lokalise.list_project_languages": {
      input: {
        /**
         * The unique Lokalise project identifier.
         * @minLength 1
         */
        project_id: string;
        /**
         * The number of items to include, up to 5000.
         * @minimum 1
         * @maximum 5000
         */
        limit?: number;
        /**
         * Return results starting from this page.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The Lokalise project identifier. */
        projectId: string;
        /** Project languages returned by Lokalise. */
        languages: Array<{
          /** The unique language identifier. */
          lang_id?: number;
          /** The language or locale code. */
          lang_iso?: string;
          /** The language name. */
          lang_name?: string;
          /** Whether the language is right-to-left. */
          is_rtl?: boolean;
          /** The supported plural forms. */
          plural_forms?: Array<unknown>;
          /** The associated country code. */
          cc_iso?: string;
          [key: string]: unknown;
        }>;
        /**
         * The total number of items reported by Lokalise.
         * @minimum 0
         */
        totalCount?: number;
      };
    };
    /** List Lokalise projects visible to the API token. */
    "lokalise.list_projects": {
      input: {
        /**
         * Limit results to this Lokalise team ID.
         * @minimum 1
         */
        filter_team_id?: number;
        /**
         * One or more project names to filter by, comma-separated.
         * @minLength 1
         */
        filter_names?: string;
        /** Whether to include project statistics. */
        include_statistics?: boolean;
        /** Whether to include project settings. */
        include_settings?: boolean;
        /**
         * The number of items to include, up to 5000.
         * @minimum 1
         * @maximum 5000
         */
        limit?: number;
        /**
         * Return results starting from this page.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Projects returned by Lokalise. */
        projects: Array<{
          /** The unique project identifier. */
          project_id?: string;
          /** The project type descriptor. */
          project_type?: string;
          /** The project name. */
          name?: string;
          /** The project description. */
          description?: string;
          /** When the project was created. */
          created_at?: string;
          /** Unix timestamp when the project was created. */
          created_at_timestamp?: number;
          /** The user identifier that created the project. */
          created_by?: number;
          /** The email address of the user that created the project. */
          created_by_email?: string;
          /** The team identifier the project belongs to. */
          team_id?: number;
          /** The default project language identifier. */
          base_language_id?: number;
          /** The default project language code. */
          base_language_iso?: string;
          /** A raw object returned by the official Lokalise API. */
          settings?: Record<string, unknown>;
          /** A raw object returned by the official Lokalise API. */
          statistics?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /**
         * The total number of items reported by Lokalise.
         * @minimum 0
         */
        totalCount?: number;
      };
    };
    /** List translation items in a Lokalise project. */
    "lokalise.list_translations": {
      input: {
        /**
         * The unique Lokalise project identifier.
         * @minLength 1
         */
        project_id: string;
        /** Whether to disable key references. */
        disable_references?: boolean;
        /**
         * Return translations only for this language ID.
         * @minimum 1
         */
        filter_lang_id?: number;
        /** Whether to filter reviewed translations. */
        filter_is_reviewed?: boolean;
        /** Whether to filter unverified translations. */
        filter_unverified?: boolean;
        /** Whether to filter untranslated translations. */
        filter_untranslated?: boolean;
        /**
         * One or more QA issue codes to filter by, comma-separated.
         * @minLength 1
         */
        filter_qa_issues?: string;
        /**
         * Filter translations by this active task ID.
         * @minimum 1
         */
        filter_active_task_id?: number;
        /**
         * The number of items to include, up to 5000.
         * @minimum 1
         * @maximum 5000
         */
        limit?: number;
        /**
         * Return results starting from this page.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The Lokalise project identifier. */
        projectId: string;
        /** Translations returned by Lokalise. */
        translations: Array<{
          /** The unique translation identifier. */
          translation_id?: number;
          /** The key identifier this translation belongs to. */
          key_id?: number;
          /** The language code for this translation. */
          language_iso?: string;
          /** When the translation was last modified. */
          modified_at?: string;
          /** Unix timestamp when the translation was last modified. */
          modified_at_timestamp?: number;
          /** The user identifier that last modified the translation. */
          modified_by?: number;
          /** The email address of the user that last modified the translation. */
          modified_by_email?: string;
          /** The translation content returned by Lokalise. */
          translation?: unknown;
          /** Whether the translation is marked unverified. */
          is_unverified?: boolean;
          /** Whether the translation is marked reviewed. */
          is_reviewed?: boolean;
          /** The user identifier that reviewed the translation. */
          reviewed_by?: number;
          /** The number of words in the translation. */
          words?: number;
          /** Custom translation statuses assigned to this translation. */
          custom_translation_statuses?: Array<unknown>;
          /** The task identifier when the translation belongs to a task. */
          task_id?: number | null;
          /** The segment number when segmentation is used. */
          segment_number?: number;
          [key: string]: unknown;
        }>;
        /**
         * The total number of items reported by Lokalise.
         * @minimum 0
         */
        totalCount?: number;
      };
    };
    /** Update one Lokalise key by key ID. */
    "lokalise.update_key": {
      input: {
        /**
         * The unique Lokalise project identifier.
         * @minLength 1
         */
        project_id: string;
        /**
         * The unique Lokalise key identifier.
         * @minimum 1
         */
        key_id: number;
        /**
         * The key identifier.
         * @minLength 1
         */
        key_name?: string;
        /** The key description. */
        description?: string;
        /**
         * Platforms enabled for the key.
         * @minItems 1
         */
        platforms?: Array<"android" | "ios" | "other" | "web">;
        /** Filenames for each platform. */
        filenames?: {
          /**
           * The iOS platform filename.
           * @minLength 1
           */
          ios?: string;
          /**
           * The Android platform filename.
           * @minLength 1
           */
          android?: string;
          /**
           * The Web platform filename.
           * @minLength 1
           */
          web?: string;
          /**
           * The Other platform filename.
           * @minLength 1
           */
          other?: string;
        };
        /** Tags to assign to the key. */
        tags?: Array<string>;
        /** Whether to merge supplied tags with existing tags. */
        merge_tags?: boolean;
        /** Whether this key is plural. */
        is_plural?: boolean;
        /** The custom plural name. */
        plural_name?: string;
        /** Whether this key is hidden from non-admin contributors. */
        is_hidden?: boolean;
        /** Whether this key is archived. */
        is_archived?: boolean;
        /** The optional key context. */
        context?: string;
        /** The maximum allowed number of characters. */
        char_limit?: number;
        /** JSON encoded custom key attributes. */
        custom_attributes?: string;
      };
      output: {
        /** The Lokalise project identifier. */
        projectId: string;
        /** A Lokalise key. */
        key: {
          /** The unique key identifier. */
          key_id?: number;
          /** When the key was created. */
          created_at?: string;
          /** Unix timestamp when the key was created. */
          created_at_timestamp?: number;
          /** A Lokalise key name as a string or per-platform object. */
          key_name?: string | Record<string, unknown>;
          /** A raw object returned by the official Lokalise API. */
          filenames?: Record<string, unknown>;
          /** The key description. */
          description?: string;
          /** The platforms enabled for this key. */
          platforms?: Array<string>;
          /** The tags assigned to this key. */
          tags?: Array<string>;
          /** Comments attached to this key. */
          comments?: Array<Record<string, unknown>>;
          /** Screenshots attached to this key. */
          screenshots?: Array<Record<string, unknown>>;
          /** Translations included with this key. */
          translations?: Array<Record<string, unknown>>;
          /** Whether this key is plural. */
          is_plural?: boolean;
          /** The custom plural name. */
          plural_name?: string;
          /** Whether this key is hidden from non-admin contributors. */
          is_hidden?: boolean;
          /** Whether this key is archived. */
          is_archived?: boolean;
          /** The optional key context. */
          context?: string;
          /** The number of words in the base language. */
          base_words?: number;
          /** The maximum allowed number of characters. */
          char_limit?: number;
          /** Custom attributes assigned to this key. */
          custom_attributes?: Array<unknown>;
          /** When the key was last modified. */
          modified_at?: string;
          /** Unix timestamp when the key was last modified. */
          modified_at_timestamp?: number;
          /** When translations for this key were last modified. */
          translations_modified_at?: string;
          /** Unix timestamp when translations for this key were last modified. */
          translations_modified_at_timestamp?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Update one Lokalise translation by translation ID. */
    "lokalise.update_translation": {
      input: {
        /**
         * The unique Lokalise project identifier.
         * @minLength 1
         */
        project_id: string;
        /**
         * The unique Lokalise translation identifier.
         * @minimum 1
         */
        translation_id: number;
        /** Translation content as text or plural-form object. */
        translation: string | Record<string, unknown>;
        /** Whether the translation should be marked unverified. */
        is_unverified?: boolean;
        /** Whether the translation should be marked reviewed. */
        is_reviewed?: boolean;
        /** Custom translation status IDs to assign, replacing existing statuses. */
        custom_translation_status_ids?: Array<string>;
      };
      output: {
        /** The Lokalise project identifier. */
        projectId: string;
        /** A Lokalise translation item. */
        translation: {
          /** The unique translation identifier. */
          translation_id?: number;
          /** The key identifier this translation belongs to. */
          key_id?: number;
          /** The language code for this translation. */
          language_iso?: string;
          /** When the translation was last modified. */
          modified_at?: string;
          /** Unix timestamp when the translation was last modified. */
          modified_at_timestamp?: number;
          /** The user identifier that last modified the translation. */
          modified_by?: number;
          /** The email address of the user that last modified the translation. */
          modified_by_email?: string;
          /** The translation content returned by Lokalise. */
          translation?: unknown;
          /** Whether the translation is marked unverified. */
          is_unverified?: boolean;
          /** Whether the translation is marked reviewed. */
          is_reviewed?: boolean;
          /** The user identifier that reviewed the translation. */
          reviewed_by?: number;
          /** The number of words in the translation. */
          words?: number;
          /** Custom translation statuses assigned to this translation. */
          custom_translation_statuses?: Array<unknown>;
          /** The task identifier when the translation belongs to a task. */
          task_id?: number | null;
          /** The segment number when segmentation is used. */
          segment_number?: number;
          [key: string]: unknown;
        };
      };
    };
  }
}
