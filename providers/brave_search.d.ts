import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search Brave's image index for images related to a query. */
    "brave_search.image_search": {
      input: {
        /**
         * The user's search query term. Maximum of 400 characters.
         * @minLength 1
         * @maxLength 400
         */
        q: string;
        /**
         * The preferred search result language code.
         * @minLength 2
         */
        search_lang?: string;
        /**
         * The two-letter country code for result localization, or ALL for worldwide results.
         * @minLength 2
         * @maxLength 3
         */
        country?: string;
        /** Filters adult content from image results. */
        safesearch?: "off" | "strict";
        /**
         * The maximum number of image results to return.
         * @minimum 1
         * @maximum 200
         */
        count?: number;
        /** Whether Brave Search should spellcheck the query before searching. */
        spellcheck?: boolean;
      };
      output: {
        /** The Brave Search response type. */
        type: string;
        /** Query metadata returned by Brave Search. */
        query?: Record<string, unknown> | null;
        /** The list of image results returned by Brave Search. */
        results?: Array<Record<string, unknown>>;
        /** Additional metadata returned with the image results. */
        extra?: Record<string, unknown> | null;
      };
    };
    /** Search Brave's news index for recent articles related to a query. */
    "brave_search.news_search": {
      input: {
        /**
         * The user's search query term. Maximum of 400 characters.
         * @minLength 1
         * @maxLength 400
         */
        q: string;
        /**
         * The preferred search result language code.
         * @minLength 2
         */
        search_lang?: string;
        /**
         * The preferred user interface language for response formatting.
         * @minLength 2
         */
        ui_lang?: string;
        /**
         * The two-letter country code for result localization, or ALL for worldwide results.
         * @minLength 2
         * @maxLength 3
         */
        country?: string;
        /** Filters adult content from news results. */
        safesearch?: "off" | "moderate" | "strict";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50
         */
        count?: number;
        /**
         * The zero-based results page offset used for pagination.
         * @minimum 0
         * @maximum 9
         */
        offset?: number;
        /** Whether Brave Search should spellcheck the query before searching. */
        spellcheck?: boolean;
        /** Filters news results by page age. */
        freshness?: "pd" | "pw" | "pm" | "py" | string;
        /** Whether Brave Search should return extra alternate snippets. */
        extra_snippets?: boolean;
        /** One or more Brave Search goggles used to rerank results. */
        goggles?: string | Array<string>;
        /** Whether Brave Search should apply search operators. */
        operators?: boolean;
        /** Whether Brave Search should include fetch metadata in results when available. */
        include_fetch_metadata?: boolean;
      };
      output: {
        /** The Brave Search response type. */
        type: string;
        /** Query metadata returned by Brave Search. */
        query?: Record<string, unknown> | null;
        /** The list of news results returned by Brave Search. */
        results?: Array<Record<string, unknown>>;
      };
    };
    /** Search Brave's video index for videos related to a query. */
    "brave_search.video_search": {
      input: {
        /**
         * The user's search query term. Maximum of 400 characters.
         * @minLength 1
         * @maxLength 400
         */
        q: string;
        /**
         * The preferred search result language code.
         * @minLength 2
         */
        search_lang?: string;
        /**
         * The preferred user interface language for response formatting.
         * @minLength 2
         */
        ui_lang?: string;
        /**
         * The two-letter country code for result localization, or ALL for worldwide results.
         * @minLength 2
         * @maxLength 3
         */
        country?: string;
        /** Filters adult content from video results. */
        safesearch?: "off" | "moderate" | "strict";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50
         */
        count?: number;
        /**
         * The zero-based results page offset used for pagination.
         * @minimum 0
         * @maximum 9
         */
        offset?: number;
        /** Whether Brave Search should spellcheck the query before searching. */
        spellcheck?: boolean;
        /** Filters video results by page age. */
        freshness?: "pd" | "pw" | "pm" | "py" | string;
        /** Whether Brave Search should apply search operators. */
        operators?: boolean;
        /** Whether Brave Search should include fetch metadata in results when available. */
        include_fetch_metadata?: boolean;
      };
      output: {
        /** The Brave Search response type. */
        type: string;
        /** Query metadata returned by Brave Search. */
        query?: Record<string, unknown> | null;
        /** The list of video results returned by Brave Search. */
        results?: Array<Record<string, unknown>>;
        /** Additional metadata returned with the video results. */
        extra?: Record<string, unknown> | null;
      };
    };
    /** Search the Brave Search web index and return the selected result families. */
    "brave_search.web_search": {
      input: {
        /**
         * The user's search query term. Maximum of 400 characters.
         * @minLength 1
         * @maxLength 400
         */
        q: string;
        /**
         * The preferred search result language code.
         * @minLength 2
         */
        search_lang?: string;
        /**
         * The preferred user interface language for response formatting.
         * @minLength 2
         */
        ui_lang?: string;
        /**
         * The two-letter country code for result localization, or ALL for worldwide results.
         * @minLength 2
         * @maxLength 3
         */
        country?: string;
        /** Filters adult content from web results. */
        safesearch?: "off" | "moderate" | "strict";
        /**
         * The maximum number of web results to return.
         * @minimum 1
         * @maximum 20
         */
        count?: number;
        /**
         * The zero-based results page offset used for pagination.
         * @minimum 0
         * @maximum 9
         */
        offset?: number;
        /** Whether Brave Search should spellcheck the query before searching. */
        spellcheck?: boolean;
        /** Filters web results by page age. */
        freshness?: "pd" | "pw" | "pm" | "py" | string;
        /**
         * A comma-delimited list of result types to include, such as web,news,videos,locations,discussions,faq,infobox,mixed,summarizer or rich.
         * @minLength 1
         */
        result_filter?: string;
        /** Whether Brave Search should return extra alternate snippets. */
        extra_snippets?: boolean;
        /** One or more Brave Search goggles used to rerank results. */
        goggles?: string | Array<string>;
        /** Whether display strings should include decoration markers such as highlights. */
        text_decorations?: boolean;
        /** The measurement units used for localized results. */
        units?: "metric" | "imperial";
        /** Whether Brave Search should apply search operators. */
        operators?: boolean;
        /** Whether Brave Search should include fetch metadata in results when available. */
        include_fetch_metadata?: boolean;
      };
      output: {
        /** The Brave Search response type. */
        type: string;
        /** Query metadata returned by Brave Search. */
        query?: Record<string, unknown> | null;
        /** Web result payload returned by Brave Search. */
        web?: Record<string, unknown> | null;
        /** News result payload returned by Brave Search. */
        news?: Record<string, unknown> | null;
        /** Video result payload returned by Brave Search. */
        videos?: Record<string, unknown> | null;
        /** Location result payload returned by Brave Search. */
        locations?: Record<string, unknown> | null;
        /** Discussion clusters returned by Brave Search. */
        discussions?: Record<string, unknown> | null;
        /** Frequently asked questions returned by Brave Search. */
        faq?: Record<string, unknown> | null;
        /** Infobox payload returned by Brave Search. */
        infobox?: Record<string, unknown> | null;
        /** Mixed ranking payload returned by Brave Search. */
        mixed?: Record<string, unknown> | null;
        /** Summary metadata returned by Brave Search. */
        summarizer?: Record<string, unknown> | null;
        /** Rich result callback payload returned by Brave Search. */
        rich?: Record<string, unknown> | null;
      };
    };
  }
}
