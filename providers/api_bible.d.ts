import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one chapter with configurable display options from API.Bible. */
    "api_bible.get_chapter": {
      input: {
        /**
         * The Bible identifier used to retrieve the chapter.
         * @minLength 1
         */
        bibleId: string;
        /**
         * The chapter identifier used to retrieve the chapter.
         * @minLength 1
         */
        chapterId: string;
        /**
         * A comma-separated list of Bible identifiers used for parallel content comparison.
         * @minLength 1
         */
        parallels?: string;
        /** The content format requested from API.Bible. */
        contentType?: "html" | "json" | "text";
        /**
         * Whether to include footnotes in the returned content.
         * @default false
         */
        includeNotes?: boolean;
        /**
         * Whether to include section titles in the returned content.
         * @default true
         */
        includeTitles?: boolean;
        /**
         * Whether to include verse span wrappers in the returned content.
         * @default false
         */
        includeVerseSpans?: boolean;
        /**
         * Whether to include verse numbers in the returned content.
         * @default true
         */
        includeVerseNumbers?: boolean;
        /**
         * Whether to include chapter numbers in the returned content.
         * @default false
         */
        includeChapterNumbers?: boolean;
        /**
         * Whether the supplied identifier should match the upstream organization-specific identifier.
         * @default false
         */
        useOrgId?: boolean;
      };
      output: {
        /** The chapter payload returned by API.Bible. */
        chapter: {
          /**
           * The chapter identifier returned by API.Bible.
           * @minLength 1
           */
          id: string;
          /**
           * The Bible identifier associated with the chapter.
           * @minLength 1
           */
          bibleId: string;
          /**
           * The book identifier associated with the chapter.
           * @minLength 1
           */
          bookId: string;
          /**
           * The chapter number returned by API.Bible.
           * @minLength 1
           */
          number: string;
          /**
           * The human-readable chapter reference returned by API.Bible.
           * @minLength 1
           */
          reference: string;
          /** The verse count returned by API.Bible. */
          verseCount: number;
          /** The scripture content returned by API.Bible. */
          content: string | Array<Record<string, unknown>>;
          /**
           * The copyright string returned by API.Bible.
           * @minLength 1
           */
          copyright: string;
          [key: string]: unknown;
        };
        /** The response metadata returned by API.Bible. */
        meta?: {
          /**
           * The FUMS tracking identifier returned by API.Bible.
           * @minLength 1
           */
          fumsId?: string;
          /**
           * The FUMS embed snippet returned by API.Bible.
           * @minLength 1
           */
          fums?: string;
          /**
           * The inline FUMS JavaScript returned by API.Bible.
           * @minLength 1
           */
          fumsJs?: string;
          /**
           * The FUMS JavaScript include URL returned by API.Bible.
           * @minLength 1
           */
          fumsJsInclude?: string;
          /**
           * The FUMS noscript snippet returned by API.Bible.
           * @minLength 1
           */
          fumsNoScript?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one passage with configurable display options from API.Bible. */
    "api_bible.get_passage": {
      input: {
        /**
         * The Bible identifier used to retrieve the passage.
         * @minLength 1
         */
        bibleId: string;
        /**
         * The passage identifier used to retrieve the passage.
         * @minLength 1
         */
        passageId: string;
        /**
         * A comma-separated list of Bible identifiers used for parallel content comparison.
         * @minLength 1
         */
        parallels?: string;
        /** The content format requested from API.Bible. */
        contentType?: "html" | "json" | "text";
        /**
         * Whether to include footnotes in the returned content.
         * @default false
         */
        includeNotes?: boolean;
        /**
         * Whether to include section titles in the returned content.
         * @default true
         */
        includeTitles?: boolean;
        /**
         * Whether to include verse span wrappers in the returned content.
         * @default false
         */
        includeVerseSpans?: boolean;
        /**
         * Whether to include verse numbers in the returned content.
         * @default true
         */
        includeVerseNumbers?: boolean;
        /**
         * Whether to include chapter numbers in the returned content.
         * @default false
         */
        includeChapterNumbers?: boolean;
        /**
         * Whether the supplied identifier should match the upstream organization-specific identifier.
         * @default false
         */
        useOrgId?: boolean;
      };
      output: {
        /** The passage payload returned by API.Bible. */
        passage: {
          /**
           * The passage identifier returned by API.Bible.
           * @minLength 1
           */
          id: string;
          /**
           * The organization-specific passage identifier returned by API.Bible.
           * @minLength 1
           */
          orgId: string;
          /**
           * The Bible identifier associated with the passage.
           * @minLength 1
           */
          bibleId: string;
          /**
           * The human-readable passage reference returned by API.Bible.
           * @minLength 1
           */
          reference: string;
          /** The verse count returned by API.Bible. */
          verseCount: number;
          /** The scripture content returned by API.Bible. */
          content: string | Array<Record<string, unknown>>;
          /**
           * The copyright string returned by API.Bible.
           * @minLength 1
           */
          copyright: string;
          [key: string]: unknown;
        };
        /** The response metadata returned by API.Bible. */
        meta?: {
          /**
           * The FUMS tracking identifier returned by API.Bible.
           * @minLength 1
           */
          fumsId?: string;
          /**
           * The FUMS embed snippet returned by API.Bible.
           * @minLength 1
           */
          fums?: string;
          /**
           * The inline FUMS JavaScript returned by API.Bible.
           * @minLength 1
           */
          fumsJs?: string;
          /**
           * The FUMS JavaScript include URL returned by API.Bible.
           * @minLength 1
           */
          fumsJsInclude?: string;
          /**
           * The FUMS noscript snippet returned by API.Bible.
           * @minLength 1
           */
          fumsNoScript?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one verse with configurable display options from API.Bible. */
    "api_bible.get_verse": {
      input: {
        /**
         * The Bible identifier used to retrieve the verse.
         * @minLength 1
         */
        bibleId: string;
        /**
         * The verse identifier used to retrieve the verse.
         * @minLength 1
         */
        verseId: string;
        /**
         * A comma-separated list of Bible identifiers used for parallel content comparison.
         * @minLength 1
         */
        parallels?: string;
        /** The content format requested from API.Bible. */
        contentType?: "html" | "json" | "text";
        /**
         * Whether to include footnotes in the returned content.
         * @default false
         */
        includeNotes?: boolean;
        /**
         * Whether to include section titles in the returned content.
         * @default true
         */
        includeTitles?: boolean;
        /**
         * Whether to include verse span wrappers in the returned content.
         * @default false
         */
        includeVerseSpans?: boolean;
        /**
         * Whether to include verse numbers in the returned content.
         * @default true
         */
        includeVerseNumbers?: boolean;
        /**
         * Whether to include chapter numbers in the returned content.
         * @default false
         */
        includeChapterNumbers?: boolean;
        /**
         * Whether the supplied identifier should match the upstream organization-specific identifier.
         * @default false
         */
        useOrgId?: boolean;
      };
      output: {
        /** The verse payload returned by API.Bible. */
        verse: {
          /**
           * The verse identifier returned by API.Bible.
           * @minLength 1
           */
          id: string;
          /**
           * The organization-specific verse identifier returned by API.Bible.
           * @minLength 1
           */
          orgId: string;
          /**
           * The Bible identifier associated with the verse.
           * @minLength 1
           */
          bibleId: string;
          /**
           * The book identifier associated with the verse.
           * @minLength 1
           */
          bookId: string;
          /**
           * The chapter identifier associated with the verse.
           * @minLength 1
           */
          chapterId: string;
          /**
           * The human-readable verse reference returned by API.Bible.
           * @minLength 1
           */
          reference: string;
          /** The verse count returned by API.Bible. */
          verseCount: number;
          /** The scripture content returned by API.Bible. */
          content: string | Array<Record<string, unknown>>;
          /**
           * The copyright string returned by API.Bible.
           * @minLength 1
           */
          copyright: string;
          [key: string]: unknown;
        };
        /** The response metadata returned by API.Bible. */
        meta?: {
          /**
           * The FUMS tracking identifier returned by API.Bible.
           * @minLength 1
           */
          fumsId?: string;
          /**
           * The FUMS embed snippet returned by API.Bible.
           * @minLength 1
           */
          fums?: string;
          /**
           * The inline FUMS JavaScript returned by API.Bible.
           * @minLength 1
           */
          fumsJs?: string;
          /**
           * The FUMS JavaScript include URL returned by API.Bible.
           * @minLength 1
           */
          fumsJsInclude?: string;
          /**
           * The FUMS noscript snippet returned by API.Bible.
           * @minLength 1
           */
          fumsNoScript?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Bible versions from API.Bible with optional language, abbreviation, or name filters. */
    "api_bible.list_bibles": {
      input: {
        /**
         * The ISO language code used to filter Bible versions.
         * @minLength 1
         */
        language?: string;
        /**
         * The Bible abbreviation used to filter Bible versions.
         * @minLength 1
         */
        abbreviation?: string;
        /**
         * The Bible name filter used to narrow the result set.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** The Bible versions returned by API.Bible. */
        bibles: Array<{
          /**
           * The Bible identifier returned by API.Bible.
           * @minLength 1
           */
          id: string;
          /**
           * The Bible abbreviation returned by API.Bible.
           * @minLength 1
           */
          abbreviation?: string;
          /**
           * The localized Bible abbreviation returned by API.Bible.
           * @minLength 1
           */
          abbreviationLocal?: string;
          /**
           * The Bible description returned by API.Bible.
           * @minLength 1
           */
          description?: string;
          /** The language metadata for the Bible. */
          language: {
            /**
             * The ISO language identifier returned by API.Bible.
             * @minLength 1
             */
            id: string;
            /**
             * The language display name returned by API.Bible.
             * @minLength 1
             */
            name: string;
            /**
             * The localized language name returned by API.Bible.
             * @minLength 1
             */
            nameLocal?: string;
            /**
             * The script direction returned by API.Bible when available.
             * @minLength 1
             */
            scriptDirection?: string;
            [key: string]: unknown;
          };
          /**
           * The Bible display name returned by API.Bible.
           * @minLength 1
           */
          name: string;
          /**
           * The localized Bible name returned by API.Bible.
           * @minLength 1
           */
          nameLocal?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List books for one Bible version from API.Bible. */
    "api_bible.list_books": {
      input: {
        /**
         * The Bible identifier used to list books.
         * @minLength 1
         */
        bibleId: string;
      };
      output: {
        /** The books returned by API.Bible. */
        books: Array<{
          /**
           * The book identifier returned by API.Bible.
           * @minLength 1
           */
          id: string;
          /**
           * The Bible identifier associated with the book.
           * @minLength 1
           */
          bibleId: string;
          /**
           * The book abbreviation returned by API.Bible.
           * @minLength 1
           */
          abbreviation?: string;
          /**
           * The book display name returned by API.Bible.
           * @minLength 1
           */
          name: string;
          /**
           * The long book name returned by API.Bible.
           * @minLength 1
           */
          nameLong: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List chapters for one book in one Bible version from API.Bible. */
    "api_bible.list_chapters": {
      input: {
        /**
         * The Bible identifier used to list chapters.
         * @minLength 1
         */
        bibleId: string;
        /**
         * The book identifier used to list chapters.
         * @minLength 1
         */
        bookId: string;
      };
      output: {
        /** The chapters returned by API.Bible. */
        chapters: Array<{
          /**
           * The chapter identifier returned by API.Bible.
           * @minLength 1
           */
          id: string;
          /**
           * The Bible identifier associated with the chapter.
           * @minLength 1
           */
          bibleId: string;
          /**
           * The book identifier associated with the chapter.
           * @minLength 1
           */
          bookId: string;
          /**
           * The chapter number returned by API.Bible.
           * @minLength 1
           */
          number: string;
          /**
           * The human-readable chapter reference returned by API.Bible.
           * @minLength 1
           */
          reference: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List verses for one chapter in one Bible version from API.Bible. */
    "api_bible.list_verses": {
      input: {
        /**
         * The Bible identifier used to list verses.
         * @minLength 1
         */
        bibleId: string;
        /**
         * The chapter identifier used to list verses.
         * @minLength 1
         */
        chapterId: string;
      };
      output: {
        /** The verses returned by API.Bible. */
        verses: Array<{
          /**
           * The verse identifier returned by API.Bible.
           * @minLength 1
           */
          id: string;
          /**
           * The organization-specific verse identifier returned by API.Bible.
           * @minLength 1
           */
          orgId: string;
          /**
           * The Bible identifier associated with the verse.
           * @minLength 1
           */
          bibleId: string;
          /**
           * The book identifier associated with the verse.
           * @minLength 1
           */
          bookId: string;
          /**
           * The chapter identifier associated with the verse.
           * @minLength 1
           */
          chapterId: string;
          /**
           * The human-readable verse reference returned by API.Bible.
           * @minLength 1
           */
          reference: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search scripture within one Bible version from API.Bible and preserve whether the result is verse-based or passage-based. */
    "api_bible.search_scripture": {
      input: {
        /**
         * The Bible identifier used for the search request.
         * @minLength 1
         */
        bibleId: string;
        /**
         * The keyword or passage reference query sent to API.Bible search.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of results returned by API.Bible.
         * @minimum 0
         */
        limit?: number;
        /**
         * The number of results skipped before the response page.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /**
         * The query echoed back by API.Bible search.
         * @minLength 1
         */
        query: string;
        /** The result limit returned by API.Bible search. */
        limit: number;
        /** The result offset returned by API.Bible search. */
        offset: number;
        /** The total number of matches returned by API.Bible. */
        total: number;
        /** Whether API.Bible search returned verse results or passage results. */
        resultType: "verses" | "passages";
        /** The verse results returned by API.Bible. */
        verses: Array<{
          /**
           * The verse identifier returned by API.Bible search.
           * @minLength 1
           */
          id: string;
          /**
           * The organization-specific verse identifier returned by API.Bible.
           * @minLength 1
           */
          orgId: string;
          /**
           * The Bible identifier associated with the verse.
           * @minLength 1
           */
          bibleId: string;
          /**
           * The book identifier associated with the verse.
           * @minLength 1
           */
          bookId: string;
          /**
           * The chapter identifier associated with the verse.
           * @minLength 1
           */
          chapterId: string;
          /**
           * The human-readable verse reference returned by API.Bible.
           * @minLength 1
           */
          reference: string;
          /**
           * The verse text returned by API.Bible search when present.
           * @minLength 1
           */
          text?: string;
          [key: string]: unknown;
        }>;
        /** The passage results returned by API.Bible. */
        passages: Array<{
          /**
           * The passage identifier returned by API.Bible search.
           * @minLength 1
           */
          id: string;
          /**
           * The organization-specific passage identifier returned by API.Bible.
           * @minLength 1
           */
          orgId: string;
          /**
           * The Bible identifier associated with the passage.
           * @minLength 1
           */
          bibleId: string;
          /**
           * The human-readable passage reference returned by API.Bible.
           * @minLength 1
           */
          reference: string;
          /** The scripture content returned by API.Bible. */
          content: string | Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** The response metadata returned by API.Bible. */
        meta?: {
          /**
           * The FUMS tracking identifier returned by API.Bible.
           * @minLength 1
           */
          fumsId?: string;
          /**
           * The FUMS embed snippet returned by API.Bible.
           * @minLength 1
           */
          fums?: string;
          /**
           * The inline FUMS JavaScript returned by API.Bible.
           * @minLength 1
           */
          fumsJs?: string;
          /**
           * The FUMS JavaScript include URL returned by API.Bible.
           * @minLength 1
           */
          fumsJsInclude?: string;
          /**
           * The FUMS noscript snippet returned by API.Bible.
           * @minLength 1
           */
          fumsNoScript?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
