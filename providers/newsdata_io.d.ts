import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the latest and breaking news from NewsData.io with optional filters. */
    "newsdata_io.get_latest_news": {
      input: {
        /**
         * Comma-separated NewsData.io article IDs to fetch, up to the API plan limit.
         * @minLength 1
         */
        id?: string;
        /**
         * Keyword or phrase search across article title, content, URL, and metadata.
         * @minLength 1
         * @maxLength 512
         */
        q?: string;
        /**
         * Keyword or phrase search restricted to article titles.
         * @minLength 1
         * @maxLength 512
         */
        qInTitle?: string;
        /**
         * Keyword or phrase search restricted to article title, URL, and metadata.
         * @minLength 1
         * @maxLength 512
         */
        qInMeta?: string;
        /**
         * Comma-separated country codes, up to 5 values.
         * @minLength 1
         */
        country?: string;
        /**
         * Comma-separated categories to include, up to 5 values.
         * @minLength 1
         */
        category?: string;
        /**
         * Comma-separated categories to exclude, up to 5 values.
         * @minLength 1
         */
        excludecategory?: string;
        /**
         * Comma-separated language codes, up to 5 values.
         * @minLength 1
         */
        language?: string;
        /**
         * Comma-separated source domain names, up to 5 values.
         * @minLength 1
         */
        domain?: string;
        /**
         * Comma-separated source domain URLs, up to 5 values.
         * @minLength 1
         */
        domainurl?: string;
        /**
         * Comma-separated source domain URLs to exclude.
         * @minLength 1
         */
        excludedomain?: string;
        /**
         * Comma-separated response fields to exclude. NewsData.io does not allow excluding article_id.
         * @minLength 1
         */
        excludefield?: string;
        /** News source reputation tier filter. */
        prioritydomain?: "top" | "medium" | "low";
        /**
         * Timezone filter such as America/New_York or Europe/Berlin.
         * @minLength 1
         */
        timezone?: string;
        /**
         * Boolean-like NewsData.io flag, where 1 means yes and 0 means no.
         * @minimum 0
         * @maximum 1
         */
        full_content?: number;
        /**
         * Boolean-like NewsData.io flag, where 1 means yes and 0 means no.
         * @minimum 0
         * @maximum 1
         */
        image?: number;
        /**
         * Boolean-like NewsData.io flag, where 1 means yes and 0 means no.
         * @minimum 0
         * @maximum 1
         */
        video?: number;
        /**
         * Number of articles to request, from 1 to 50.
         * @minimum 1
         * @maximum 50
         */
        size?: number;
        /**
         * Pagination cursor returned as nextPage from a previous response.
         * @minLength 1
         */
        page?: string;
        /**
         * Latest-news time window in hours, 1 to 48, or minutes such as 15m.
         * @minLength 1
         */
        timeframe?: string;
        /**
         * Comma-separated AI-classified tags, up to 5 values on supported plans.
         * @minLength 1
         */
        tag?: string;
        /** AI sentiment label used to filter articles. */
        sentiment?: "positive" | "negative" | "neutral";
        /**
         * Comma-separated geographic regions on supported plans.
         * @minLength 1
         */
        region?: string;
        /**
         * Boolean-like NewsData.io flag, where 1 means yes and 0 means no.
         * @minimum 0
         * @maximum 1
         */
        removeduplicate?: number;
      };
      output: {
        /**
         * Top-level request status returned by NewsData.io.
         * @minLength 1
         */
        status: string;
        /** Total number of matching articles available. */
        totalResults?: number;
        /** Articles returned for this request. */
        results: Array<{
          /**
           * Unique NewsData.io article identifier.
           * @minLength 1
           */
          article_id?: string;
          /**
           * Article headline.
           * @minLength 1
           */
          title?: string;
          /**
           * Canonical article URL.
           * @minLength 1
           */
          link?: string;
          /** Keywords associated with the article. */
          keywords?: Array<string>;
          /** Article creators or authors returned by NewsData.io. */
          creator?: Array<string>;
          /**
           * Video URL associated with the article.
           * @minLength 1
           */
          video_url?: string | null;
          /**
           * Article summary or description.
           * @minLength 1
           */
          description?: string | null;
          /**
           * Article content returned by NewsData.io.
           * @minLength 1
           */
          content?: string | null;
          /**
           * Publication date-time string returned by NewsData.io.
           * @minLength 1
           */
          pubDate?: string;
          /**
           * Timezone used for pubDate.
           * @minLength 1
           */
          pubDateTZ?: string;
          /**
           * Featured image URL for the article.
           * @minLength 1
           */
          image_url?: string | null;
          /**
           * NewsData.io source identifier.
           * @minLength 1
           */
          source_id?: string;
          /** NewsData.io source priority value. */
          source_priority?: number;
          /**
           * Display name of the news source.
           * @minLength 1
           */
          source_name?: string;
          /**
           * Homepage URL of the news source.
           * @minLength 1
           */
          source_url?: string;
          /**
           * Icon URL for the news source.
           * @minLength 1
           */
          source_icon?: string | null;
          /**
           * Article language returned by NewsData.io.
           * @minLength 1
           */
          language?: string;
          /** Countries associated with the article. */
          country?: Array<string>;
          /** Categories associated with the article. */
          category?: Array<string>;
          /**
           * Sentiment label returned for the article.
           * @minLength 1
           */
          sentiment?: string;
          /** Whether NewsData.io marked this article as a duplicate. */
          duplicate?: boolean;
          [key: string]: unknown;
        }>;
        /**
         * Cursor token to request the next page.
         * @minLength 1
         */
        nextPage?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve cryptocurrency-related news articles from NewsData.io. */
    "newsdata_io.list_crypto_news": {
      input: {
        /**
         * Comma-separated NewsData.io article IDs to fetch, up to the API plan limit.
         * @minLength 1
         */
        id?: string;
        /**
         * Keyword or phrase search across article title, content, URL, and metadata.
         * @minLength 1
         * @maxLength 512
         */
        q?: string;
        /**
         * Keyword or phrase search restricted to article titles.
         * @minLength 1
         * @maxLength 512
         */
        qInTitle?: string;
        /**
         * Keyword or phrase search restricted to article title, URL, and metadata.
         * @minLength 1
         * @maxLength 512
         */
        qInMeta?: string;
        /**
         * Comma-separated country codes, up to 5 values.
         * @minLength 1
         */
        country?: string;
        /**
         * Comma-separated categories to include, up to 5 values.
         * @minLength 1
         */
        category?: string;
        /**
         * Comma-separated categories to exclude, up to 5 values.
         * @minLength 1
         */
        excludecategory?: string;
        /**
         * Comma-separated language codes, up to 5 values.
         * @minLength 1
         */
        language?: string;
        /**
         * Comma-separated source domain names, up to 5 values.
         * @minLength 1
         */
        domain?: string;
        /**
         * Comma-separated source domain URLs, up to 5 values.
         * @minLength 1
         */
        domainurl?: string;
        /**
         * Comma-separated source domain URLs to exclude.
         * @minLength 1
         */
        excludedomain?: string;
        /**
         * Comma-separated response fields to exclude. NewsData.io does not allow excluding article_id.
         * @minLength 1
         */
        excludefield?: string;
        /** News source reputation tier filter. */
        prioritydomain?: "top" | "medium" | "low";
        /**
         * Timezone filter such as America/New_York or Europe/Berlin.
         * @minLength 1
         */
        timezone?: string;
        /**
         * Boolean-like NewsData.io flag, where 1 means yes and 0 means no.
         * @minimum 0
         * @maximum 1
         */
        full_content?: number;
        /**
         * Boolean-like NewsData.io flag, where 1 means yes and 0 means no.
         * @minimum 0
         * @maximum 1
         */
        image?: number;
        /**
         * Boolean-like NewsData.io flag, where 1 means yes and 0 means no.
         * @minimum 0
         * @maximum 1
         */
        video?: number;
        /**
         * Number of articles to request, from 1 to 50.
         * @minimum 1
         * @maximum 50
         */
        size?: number;
        /**
         * Pagination cursor returned as nextPage from a previous response.
         * @minLength 1
         */
        page?: string;
        /**
         * Comma-separated crypto coin symbols, up to 5 values.
         * @minLength 1
         */
        coin?: string;
        /**
         * Crypto news start date or date-time in YYYY-MM-DD or YYYY-MM-DD HH:MM:SS format.
         * @minLength 1
         */
        from_date?: string;
        /**
         * Crypto news end date or date-time in YYYY-MM-DD or YYYY-MM-DD HH:MM:SS format.
         * @minLength 1
         */
        to_date?: string;
        /**
         * Crypto news time window in hours, 1 to 48, or minutes such as 15m.
         * @minLength 1
         */
        timeframe?: string;
        /**
         * Comma-separated crypto AI-classified tags, up to 5 values.
         * @minLength 1
         */
        tag?: string;
        /** AI sentiment label used to filter articles. */
        sentiment?: "positive" | "negative" | "neutral";
        /**
         * Boolean-like NewsData.io flag, where 1 means yes and 0 means no.
         * @minimum 0
         * @maximum 1
         */
        removeduplicate?: number;
      };
      output: {
        /**
         * Top-level request status returned by NewsData.io.
         * @minLength 1
         */
        status: string;
        /** Total number of matching articles available. */
        totalResults?: number;
        /** Articles returned for this request. */
        results: Array<{
          /**
           * Unique NewsData.io article identifier.
           * @minLength 1
           */
          article_id?: string;
          /**
           * Article headline.
           * @minLength 1
           */
          title?: string;
          /**
           * Canonical article URL.
           * @minLength 1
           */
          link?: string;
          /** Keywords associated with the article. */
          keywords?: Array<string>;
          /** Article creators or authors returned by NewsData.io. */
          creator?: Array<string>;
          /**
           * Video URL associated with the article.
           * @minLength 1
           */
          video_url?: string | null;
          /**
           * Article summary or description.
           * @minLength 1
           */
          description?: string | null;
          /**
           * Article content returned by NewsData.io.
           * @minLength 1
           */
          content?: string | null;
          /**
           * Publication date-time string returned by NewsData.io.
           * @minLength 1
           */
          pubDate?: string;
          /**
           * Timezone used for pubDate.
           * @minLength 1
           */
          pubDateTZ?: string;
          /**
           * Featured image URL for the article.
           * @minLength 1
           */
          image_url?: string | null;
          /**
           * NewsData.io source identifier.
           * @minLength 1
           */
          source_id?: string;
          /** NewsData.io source priority value. */
          source_priority?: number;
          /**
           * Display name of the news source.
           * @minLength 1
           */
          source_name?: string;
          /**
           * Homepage URL of the news source.
           * @minLength 1
           */
          source_url?: string;
          /**
           * Icon URL for the news source.
           * @minLength 1
           */
          source_icon?: string | null;
          /**
           * Article language returned by NewsData.io.
           * @minLength 1
           */
          language?: string;
          /** Countries associated with the article. */
          country?: Array<string>;
          /** Categories associated with the article. */
          category?: Array<string>;
          /**
           * Sentiment label returned for the article.
           * @minLength 1
           */
          sentiment?: string;
          /** Whether NewsData.io marked this article as a duplicate. */
          duplicate?: boolean;
          [key: string]: unknown;
        }>;
        /**
         * Cursor token to request the next page.
         * @minLength 1
         */
        nextPage?: string;
        [key: string]: unknown;
      };
    };
    /** List NewsData.io source domains with optional country, category, and language filters. */
    "newsdata_io.list_news_sources": {
      input: {
        /**
         * Comma-separated country codes, up to 5 values.
         * @minLength 1
         */
        country?: string;
        /**
         * Comma-separated categories, up to 5 values.
         * @minLength 1
         */
        category?: string;
        /**
         * Comma-separated language codes, up to 5 values.
         * @minLength 1
         */
        language?: string;
        /** News source reputation tier filter. */
        prioritydomain?: "top" | "medium" | "low";
        /**
         * Single source domain URL to look up.
         * @minLength 1
         */
        domainurl?: string;
      };
      output: {
        /**
         * Top-level request status returned by NewsData.io.
         * @minLength 1
         */
        status: string;
        /** Sources returned for this request. */
        results: Array<{
          /**
           * Source domain identifier.
           * @minLength 1
           */
          id?: string;
          /**
           * Source display name.
           * @minLength 1
           */
          name?: string;
          /**
           * Source homepage URL.
           * @minLength 1
           */
          url?: string;
          /** Categories associated with the source. */
          category?: Array<string>;
          /** Languages associated with the source. */
          language?: Array<string>;
          /** Countries associated with the source. */
          country?: Array<string>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search historical NewsData.io archive articles with keyword, taxonomy, and date filters. */
    "newsdata_io.search_news_archive": {
      input: {
        /**
         * Comma-separated NewsData.io article IDs to fetch, up to the API plan limit.
         * @minLength 1
         */
        id?: string;
        /**
         * Keyword or phrase search across article title, content, URL, and metadata.
         * @minLength 1
         * @maxLength 512
         */
        q?: string;
        /**
         * Keyword or phrase search restricted to article titles.
         * @minLength 1
         * @maxLength 512
         */
        qInTitle?: string;
        /**
         * Keyword or phrase search restricted to article title, URL, and metadata.
         * @minLength 1
         * @maxLength 512
         */
        qInMeta?: string;
        /**
         * Comma-separated country codes, up to 5 values.
         * @minLength 1
         */
        country?: string;
        /**
         * Comma-separated categories to include, up to 5 values.
         * @minLength 1
         */
        category?: string;
        /**
         * Comma-separated categories to exclude, up to 5 values.
         * @minLength 1
         */
        excludecategory?: string;
        /**
         * Comma-separated language codes, up to 5 values.
         * @minLength 1
         */
        language?: string;
        /**
         * Comma-separated source domain names, up to 5 values.
         * @minLength 1
         */
        domain?: string;
        /**
         * Comma-separated source domain URLs, up to 5 values.
         * @minLength 1
         */
        domainurl?: string;
        /**
         * Comma-separated source domain URLs to exclude.
         * @minLength 1
         */
        excludedomain?: string;
        /**
         * Comma-separated response fields to exclude. NewsData.io does not allow excluding article_id.
         * @minLength 1
         */
        excludefield?: string;
        /** News source reputation tier filter. */
        prioritydomain?: "top" | "medium" | "low";
        /**
         * Timezone filter such as America/New_York or Europe/Berlin.
         * @minLength 1
         */
        timezone?: string;
        /**
         * Boolean-like NewsData.io flag, where 1 means yes and 0 means no.
         * @minimum 0
         * @maximum 1
         */
        full_content?: number;
        /**
         * Boolean-like NewsData.io flag, where 1 means yes and 0 means no.
         * @minimum 0
         * @maximum 1
         */
        image?: number;
        /**
         * Boolean-like NewsData.io flag, where 1 means yes and 0 means no.
         * @minimum 0
         * @maximum 1
         */
        video?: number;
        /**
         * Number of articles to request, from 1 to 50.
         * @minimum 1
         * @maximum 50
         */
        size?: number;
        /**
         * Pagination cursor returned as nextPage from a previous response.
         * @minLength 1
         */
        page?: string;
        /**
         * Archive start date or date-time in YYYY-MM-DD or YYYY-MM-DD HH:MM:SS format.
         * @minLength 1
         */
        from_date?: string;
        /**
         * Archive end date or date-time in YYYY-MM-DD or YYYY-MM-DD HH:MM:SS format.
         * @minLength 1
         */
        to_date?: string;
      };
      output: {
        /**
         * Top-level request status returned by NewsData.io.
         * @minLength 1
         */
        status: string;
        /** Total number of matching articles available. */
        totalResults?: number;
        /** Articles returned for this request. */
        results: Array<{
          /**
           * Unique NewsData.io article identifier.
           * @minLength 1
           */
          article_id?: string;
          /**
           * Article headline.
           * @minLength 1
           */
          title?: string;
          /**
           * Canonical article URL.
           * @minLength 1
           */
          link?: string;
          /** Keywords associated with the article. */
          keywords?: Array<string>;
          /** Article creators or authors returned by NewsData.io. */
          creator?: Array<string>;
          /**
           * Video URL associated with the article.
           * @minLength 1
           */
          video_url?: string | null;
          /**
           * Article summary or description.
           * @minLength 1
           */
          description?: string | null;
          /**
           * Article content returned by NewsData.io.
           * @minLength 1
           */
          content?: string | null;
          /**
           * Publication date-time string returned by NewsData.io.
           * @minLength 1
           */
          pubDate?: string;
          /**
           * Timezone used for pubDate.
           * @minLength 1
           */
          pubDateTZ?: string;
          /**
           * Featured image URL for the article.
           * @minLength 1
           */
          image_url?: string | null;
          /**
           * NewsData.io source identifier.
           * @minLength 1
           */
          source_id?: string;
          /** NewsData.io source priority value. */
          source_priority?: number;
          /**
           * Display name of the news source.
           * @minLength 1
           */
          source_name?: string;
          /**
           * Homepage URL of the news source.
           * @minLength 1
           */
          source_url?: string;
          /**
           * Icon URL for the news source.
           * @minLength 1
           */
          source_icon?: string | null;
          /**
           * Article language returned by NewsData.io.
           * @minLength 1
           */
          language?: string;
          /** Countries associated with the article. */
          country?: Array<string>;
          /** Categories associated with the article. */
          category?: Array<string>;
          /**
           * Sentiment label returned for the article.
           * @minLength 1
           */
          sentiment?: string;
          /** Whether NewsData.io marked this article as a duplicate. */
          duplicate?: boolean;
          [key: string]: unknown;
        }>;
        /**
         * Cursor token to request the next page.
         * @minLength 1
         */
        nextPage?: string;
        [key: string]: unknown;
      };
    };
  }
}
