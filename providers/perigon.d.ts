import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Perigon journalist profile by journalist ID. */
    "perigon.get_journalist": {
      input: {
        /**
         * The Perigon journalist ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** One Perigon result object. */
        journalist: Record<string, unknown>;
        /** The raw Perigon response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Perigon news articles with keyword, date, entity, source, and category filters. */
    "perigon.search_articles": {
      input: {
        /**
         * The primary search query using Perigon Boolean search syntax.
         * @minLength 1
         */
        q?: string;
        /**
         * A search query scoped to article titles.
         * @minLength 1
         */
        title?: string;
        /**
         * A search query scoped to article descriptions.
         * @minLength 1
         */
        desc?: string;
        /**
         * A search query scoped to article content.
         * @minLength 1
         */
        content?: string;
        /**
         * A search query scoped to article summaries.
         * @minLength 1
         */
        summary?: string;
        /**
         * The earliest publication date or date-time to include.
         * @minLength 1
         */
        from?: string;
        /**
         * The latest publication date or date-time to include.
         * @minLength 1
         */
        to?: string;
        /**
         * The earliest Perigon ingestion date or date-time to include.
         * @minLength 1
         */
        addDateFrom?: string;
        /**
         * The latest Perigon ingestion date or date-time to include.
         * @minLength 1
         */
        addDateTo?: string;
        /**
         * The broad news categories to include.
         * @minItems 1
         */
        category?: Array<string>;
        /**
         * The Perigon topics to include.
         * @minItems 1
         */
        topic?: Array<string>;
        /**
         * The publisher domains or wildcard source patterns to include.
         * @minItems 1
         */
        source?: Array<string>;
        /**
         * The curated Perigon source groups to include.
         * @minItems 1
         */
        sourceGroup?: Array<string>;
        /**
         * The ISO 639 language codes to include.
         * @minItems 1
         */
        language?: Array<string>;
        /**
         * The source country codes to include.
         * @minItems 1
         */
        country?: Array<string>;
        /**
         * The editorial labels to include.
         * @minItems 1
         */
        label?: Array<string>;
        /**
         * The article media types to include.
         * @minItems 1
         */
        medium?: Array<string>;
        /**
         * The exact person names to include.
         * @minItems 1
         */
        personName?: Array<string>;
        /**
         * The Wikidata person IDs to include.
         * @minItems 1
         */
        personWikidataId?: Array<string>;
        /**
         * The exact company name to include.
         * @minLength 1
         */
        companyName?: string;
        /**
         * The company domains to include.
         * @minItems 1
         */
        companyDomain?: Array<string>;
        /**
         * The Perigon company IDs to include.
         * @minItems 1
         */
        companyId?: Array<string>;
        /**
         * The company stock symbols to include.
         * @minItems 1
         */
        companySymbol?: Array<string>;
        /**
         * The journalist IDs to include.
         * @minItems 1
         */
        journalistId?: Array<string>;
        /**
         * The author names to include.
         * @minItems 1
         */
        author?: Array<string>;
        /**
         * The story cluster IDs to include.
         * @minItems 1
         */
        clusterId?: Array<string>;
        /** Whether wire-service reprints should be included. */
        showReprints?: boolean;
        /** The article sort order. */
        sortBy?: "relevance" | "date" | "reverseDate" | "addDate" | "reverseAddDate" | "pubDate" | "refreshDate";
        /**
         * The zero-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** Whether Perigon should return an exact result count. */
        showNumResults?: boolean;
      };
      output: {
        /** The status code returned by Perigon. */
        status: number | null;
        /**
         * The result count returned by Perigon when available.
         * @minimum 0
         */
        numResults: number | null;
        /** The article objects returned by Perigon. */
        articles: Array<Record<string, unknown>>;
        /** The raw Perigon response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Perigon company entities by name, domain, symbol, industry, country, and exchange. */
    "perigon.search_companies": {
      input: {
        /**
         * The company search query.
         * @minLength 1
         */
        q?: string;
        /**
         * A search query scoped to company names.
         * @minLength 1
         */
        name?: string;
        /**
         * The company domains to include.
         * @minItems 1
         */
        domain?: Array<string>;
        /**
         * The stock symbols to include.
         * @minItems 1
         */
        symbol?: Array<string>;
        /**
         * The Perigon company IDs to include.
         * @minItems 1
         */
        id?: Array<string>;
        /**
         * The company industry filter.
         * @minLength 1
         */
        industry?: string;
        /**
         * The company sector filter.
         * @minLength 1
         */
        sector?: string;
        /**
         * The company country codes to include.
         * @minItems 1
         */
        country?: Array<string>;
        /**
         * The stock exchange filter.
         * @minLength 1
         */
        exchange?: string;
        /**
         * The zero-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** Whether Perigon should return an exact result count. */
        showNumResults?: boolean;
      };
      output: {
        /** The status code returned by Perigon. */
        status: number | null;
        /**
         * The result count returned by Perigon when available.
         * @minimum 0
         */
        numResults: number | null;
        /** The company objects returned by Perigon. */
        results: Array<Record<string, unknown>>;
        /** The raw Perigon response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Perigon journalist profiles by name, Twitter handle, post volume, and update date. */
    "perigon.search_journalists": {
      input: {
        /**
         * The journalist search query.
         * @minLength 1
         */
        q?: string;
        /**
         * A search query scoped to journalist names.
         * @minLength 1
         */
        name?: string;
        /**
         * The exact Twitter or X handle without the at sign.
         * @minLength 1
         */
        twitter?: string;
        /**
         * The minimum monthly article count.
         * @minimum 0
         */
        minMonthlyPosts?: number;
        /**
         * The maximum monthly article count.
         * @minimum 0
         */
        maxMonthlyPosts?: number;
        /**
         * The earliest journalist profile update date or date-time.
         * @minLength 1
         */
        updatedAtFrom?: string;
        /**
         * The latest journalist profile update date or date-time.
         * @minLength 1
         */
        updatedAtTo?: string;
        /**
         * The zero-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** Whether Perigon should return an exact result count. */
        showNumResults?: boolean;
      };
      output: {
        /** The status code returned by Perigon. */
        status: number | null;
        /**
         * The result count returned by Perigon when available.
         * @minimum 0
         */
        numResults: number | null;
        /** The journalist objects returned by Perigon. */
        results: Array<Record<string, unknown>>;
        /** The raw Perigon response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Perigon people entities for Wikidata-backed profile metadata. */
    "perigon.search_people": {
      input: {
        /**
         * The person search query.
         * @minLength 1
         */
        q?: string;
        /**
         * A search query scoped to person names.
         * @minLength 1
         */
        name?: string;
        /**
         * The Wikidata person IDs to include.
         * @minItems 1
         */
        wikidataId?: Array<string>;
        /**
         * The zero-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** Whether Perigon should return an exact result count. */
        showNumResults?: boolean;
      };
      output: {
        /** The status code returned by Perigon. */
        status: number | null;
        /**
         * The result count returned by Perigon when available.
         * @minimum 0
         */
        numResults: number | null;
        /** The people objects returned by Perigon. */
        results: Array<Record<string, unknown>>;
        /** The raw Perigon response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Perigon media sources by domain, source group, traffic, paywall, and geography filters. */
    "perigon.search_sources": {
      input: {
        /**
         * The source search query.
         * @minLength 1
         */
        q?: string;
        /**
         * A search query scoped to source names or aliases.
         * @minLength 1
         */
        name?: string;
        /**
         * The curated Perigon source group to include.
         * @minLength 1
         */
        sourceGroup?: string;
        /**
         * The exact source domains to include.
         * @minItems 1
         */
        domain?: Array<string>;
        /** Whether to filter sources by paywall status. */
        paywall?: boolean;
        /**
         * The minimum monthly article count.
         * @minimum 0
         */
        minMonthlyPosts?: number;
        /**
         * The maximum monthly article count.
         * @minimum 0
         */
        maxMonthlyPosts?: number;
        /**
         * The minimum monthly visit count.
         * @minimum 0
         */
        minMonthlyVisits?: number;
        /**
         * The maximum monthly visit count.
         * @minimum 0
         */
        maxMonthlyVisits?: number;
        /** Whether subdomains should be returned as separate sources. */
        showSubdomains?: boolean;
        /** The latitude used for source geo search. */
        sourceLat?: number;
        /** The longitude used for source geo search. */
        sourceLon?: number;
        /**
         * The source geo-search radius in kilometers.
         * @minimum 0
         */
        sourceMaxDistance?: number;
        /** The source sort order. */
        sortBy?: "createdAt" | "updatedAt" | "relevance" | "count" | "totalCount";
        /**
         * The zero-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** Whether Perigon should return an exact result count. */
        showNumResults?: boolean;
      };
      output: {
        /** The status code returned by Perigon. */
        status: number | null;
        /**
         * The result count returned by Perigon when available.
         * @minimum 0
         */
        numResults: number | null;
        /** The source objects returned by Perigon. */
        results: Array<Record<string, unknown>>;
        /** The raw Perigon response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Perigon story clusters for evolving news narratives and grouped article coverage. */
    "perigon.search_stories": {
      input: {
        /**
         * The primary search query using Perigon Boolean search syntax.
         * @minLength 1
         */
        q?: string;
        /**
         * A search query scoped to article titles.
         * @minLength 1
         */
        title?: string;
        /**
         * A search query scoped to article descriptions.
         * @minLength 1
         */
        desc?: string;
        /**
         * A search query scoped to article content.
         * @minLength 1
         */
        content?: string;
        /**
         * A search query scoped to article summaries.
         * @minLength 1
         */
        summary?: string;
        /**
         * The earliest publication date or date-time to include.
         * @minLength 1
         */
        from?: string;
        /**
         * The latest publication date or date-time to include.
         * @minLength 1
         */
        to?: string;
        /**
         * The earliest Perigon ingestion date or date-time to include.
         * @minLength 1
         */
        addDateFrom?: string;
        /**
         * The latest Perigon ingestion date or date-time to include.
         * @minLength 1
         */
        addDateTo?: string;
        /**
         * The broad news categories to include.
         * @minItems 1
         */
        category?: Array<string>;
        /**
         * The Perigon topics to include.
         * @minItems 1
         */
        topic?: Array<string>;
        /**
         * The publisher domains or wildcard source patterns to include.
         * @minItems 1
         */
        source?: Array<string>;
        /**
         * The curated Perigon source groups to include.
         * @minItems 1
         */
        sourceGroup?: Array<string>;
        /**
         * The ISO 639 language codes to include.
         * @minItems 1
         */
        language?: Array<string>;
        /**
         * The source country codes to include.
         * @minItems 1
         */
        country?: Array<string>;
        /**
         * The editorial labels to include.
         * @minItems 1
         */
        label?: Array<string>;
        /**
         * The article media types to include.
         * @minItems 1
         */
        medium?: Array<string>;
        /**
         * The exact person names to include.
         * @minItems 1
         */
        personName?: Array<string>;
        /**
         * The Wikidata person IDs to include.
         * @minItems 1
         */
        personWikidataId?: Array<string>;
        /**
         * The exact company name to include.
         * @minLength 1
         */
        companyName?: string;
        /**
         * The company domains to include.
         * @minItems 1
         */
        companyDomain?: Array<string>;
        /**
         * The Perigon company IDs to include.
         * @minItems 1
         */
        companyId?: Array<string>;
        /**
         * The company stock symbols to include.
         * @minItems 1
         */
        companySymbol?: Array<string>;
        /**
         * The journalist IDs to include.
         * @minItems 1
         */
        journalistId?: Array<string>;
        /**
         * The author names to include.
         * @minItems 1
         */
        author?: Array<string>;
        /**
         * The story cluster IDs to include.
         * @minItems 1
         */
        clusterId?: Array<string>;
        /** Whether wire-service reprints should be included. */
        showReprints?: boolean;
        /** The story sort order. */
        sortBy?: "createdAt" | "updatedAt" | "relevance" | "count" | "totalCount" | "date" | "reverseDate" | "addDate" | "reverseAddDate" | "pubDate" | "refreshDate";
        /**
         * The zero-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** Whether Perigon should return an exact result count. */
        showNumResults?: boolean;
        /**
         * A search query scoped to story names.
         * @minLength 1
         */
        name?: string;
        /**
         * The earliest story initialization date or date-time to include.
         * @minLength 1
         */
        initializedFrom?: string;
        /**
         * The latest story initialization date or date-time to include.
         * @minLength 1
         */
        initializedTo?: string;
        /**
         * The earliest story update date or date-time to include.
         * @minLength 1
         */
        updatedFrom?: string;
        /**
         * The latest story update date or date-time to include.
         * @minLength 1
         */
        updatedTo?: string;
        /**
         * The minimum number of unique sources in a story.
         * @minimum 0
         */
        minUniqueSources?: number;
        /**
         * The minimum unique-source to unique-article ratio.
         * @minimum 0
         */
        minSourceDiversity?: number;
      };
      output: {
        /** The status code returned by Perigon. */
        status: number | null;
        /**
         * The result count returned by Perigon when available.
         * @minimum 0
         */
        numResults: number | null;
        /** The story cluster objects returned by Perigon. */
        stories: Array<Record<string, unknown>>;
        /** The raw Perigon response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Browse or search Perigon topics used to classify news content. */
    "perigon.search_topics": {
      input: {
        /**
         * The topic name filter.
         * @minLength 1
         */
        name?: string;
        /**
         * The parent category filter.
         * @minLength 1
         */
        category?: string;
        /**
         * The subcategory filter.
         * @minLength 1
         */
        subcategory?: string;
        /**
         * The zero-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
      };
      output: {
        /**
         * The total number of matching topics when available.
         * @minimum 0
         */
        total: number | null;
        /** The topic objects returned by Perigon. */
        data: Array<Record<string, unknown>>;
        /** The raw Perigon response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Perigon Wikipedia pages by text, identity, category, revision, and pageview filters. */
    "perigon.search_wikipedia": {
      input: {
        /**
         * The Wikipedia search query.
         * @minLength 1
         */
        q?: string;
        /**
         * A search query scoped to Wikipedia page titles.
         * @minLength 1
         */
        title?: string;
        /**
         * A search query scoped to Wikipedia summaries.
         * @minLength 1
         */
        summary?: string;
        /**
         * A search query scoped to Wikipedia page text.
         * @minLength 1
         */
        text?: string;
        /**
         * A search query scoped to Wikipedia page references.
         * @minLength 1
         */
        reference?: string;
        /**
         * The earliest Perigon scrape date or date-time to include.
         * @minLength 1
         */
        scrapedAtFrom?: string;
        /**
         * The latest Perigon scrape date or date-time to include.
         * @minLength 1
         */
        scrapedAtTo?: string;
        /**
         * The earliest Wikipedia revision date or date-time to include.
         * @minLength 1
         */
        wikiRevisionFrom?: string;
        /**
         * The latest Wikipedia revision date or date-time to include.
         * @minLength 1
         */
        wikiRevisionTo?: string;
        /**
         * The minimum average daily pageview count.
         * @minimum 0
         */
        pageviewsFrom?: number;
        /**
         * The maximum average daily pageview count.
         * @minimum 0
         */
        pageviewsTo?: number;
        /** Whether only pages with pageview data should be returned. */
        withPageviews?: boolean;
        /**
         * The Perigon Wikipedia page IDs to include.
         * @minItems 1
         */
        id?: Array<string>;
        /**
         * The Wikipedia section IDs to include.
         * @minItems 1
         */
        sectionId?: Array<string>;
        /**
         * The Wikipedia categories to include.
         * @minItems 1
         */
        category?: Array<string>;
        /**
         * The wiki project codes to include.
         * @minItems 1
         */
        wikiCode?: Array<string>;
        /**
         * The Wikidata IDs to include.
         * @minItems 1
         */
        wikidataId?: Array<string>;
        /**
         * The Wikidata instance-of IDs to include.
         * @minItems 1
         */
        wikidataInstanceOfId?: Array<string>;
        /**
         * The Wikidata instance-of labels to include.
         * @minItems 1
         */
        wikidataInstanceOfLabel?: Array<string>;
        /**
         * The Wikipedia namespaces to include.
         * @minItems 1
         */
        wikiNamespace?: Array<number>;
        /**
         * The Wikipedia page IDs to include.
         * @minItems 1
         */
        wikiPageId?: Array<number>;
        /**
         * The Wikipedia revision IDs to include.
         * @minItems 1
         */
        wikiRevisionId?: Array<number>;
        /** The Wikipedia sort order. */
        sortBy?: "relevance" | "revisionTsDesc" | "revisionTsAsc" | "pageViewsDesc" | "pageViewsAsc" | "scrapedAtDesc" | "scrapedAtAsc";
        /**
         * The zero-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** Whether Perigon should return an exact result count. */
        showNumResults?: boolean;
      };
      output: {
        /** The status code returned by Perigon. */
        status: number | null;
        /**
         * The result count returned by Perigon when available.
         * @minimum 0
         */
        numResults: number | null;
        /** The Wikipedia page objects returned by Perigon. */
        results: Array<Record<string, unknown>>;
        /** The raw Perigon response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Generate an AI summary over Perigon news articles matching the supplied filters. */
    "perigon.summarize_news": {
      input: {
        /**
         * The primary search query using Perigon Boolean search syntax.
         * @minLength 1
         */
        q?: string;
        /**
         * A search query scoped to article titles.
         * @minLength 1
         */
        title?: string;
        /**
         * A search query scoped to article descriptions.
         * @minLength 1
         */
        desc?: string;
        /**
         * A search query scoped to article content.
         * @minLength 1
         */
        content?: string;
        /**
         * A search query scoped to article summaries.
         * @minLength 1
         */
        summary?: string;
        /**
         * The earliest publication date or date-time to include.
         * @minLength 1
         */
        from?: string;
        /**
         * The latest publication date or date-time to include.
         * @minLength 1
         */
        to?: string;
        /**
         * The earliest Perigon ingestion date or date-time to include.
         * @minLength 1
         */
        addDateFrom?: string;
        /**
         * The latest Perigon ingestion date or date-time to include.
         * @minLength 1
         */
        addDateTo?: string;
        /**
         * The broad news categories to include.
         * @minItems 1
         */
        category?: Array<string>;
        /**
         * The Perigon topics to include.
         * @minItems 1
         */
        topic?: Array<string>;
        /**
         * The publisher domains or wildcard source patterns to include.
         * @minItems 1
         */
        source?: Array<string>;
        /**
         * The curated Perigon source groups to include.
         * @minItems 1
         */
        sourceGroup?: Array<string>;
        /**
         * The ISO 639 language codes to include.
         * @minItems 1
         */
        language?: Array<string>;
        /**
         * The source country codes to include.
         * @minItems 1
         */
        country?: Array<string>;
        /**
         * The editorial labels to include.
         * @minItems 1
         */
        label?: Array<string>;
        /**
         * The article media types to include.
         * @minItems 1
         */
        medium?: Array<string>;
        /**
         * The exact person names to include.
         * @minItems 1
         */
        personName?: Array<string>;
        /**
         * The Wikidata person IDs to include.
         * @minItems 1
         */
        personWikidataId?: Array<string>;
        /**
         * The exact company name to include.
         * @minLength 1
         */
        companyName?: string;
        /**
         * The company domains to include.
         * @minItems 1
         */
        companyDomain?: Array<string>;
        /**
         * The Perigon company IDs to include.
         * @minItems 1
         */
        companyId?: Array<string>;
        /**
         * The company stock symbols to include.
         * @minItems 1
         */
        companySymbol?: Array<string>;
        /**
         * The journalist IDs to include.
         * @minItems 1
         */
        journalistId?: Array<string>;
        /**
         * The author names to include.
         * @minItems 1
         */
        author?: Array<string>;
        /**
         * The story cluster IDs to include.
         * @minItems 1
         */
        clusterId?: Array<string>;
        /** Whether wire-service reprints should be included. */
        showReprints?: boolean;
        /** The article sort order. */
        sortBy?: "relevance" | "date" | "reverseDate" | "addDate" | "reverseAddDate" | "pubDate" | "refreshDate";
        /**
         * The zero-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** Whether Perigon should return an exact result count. */
        showNumResults?: boolean;
        /**
         * Instructions guiding the generated summary.
         * @maxLength 2048
         */
        prompt?: string;
        /**
         * The maximum number of matching articles to summarize.
         * @exclusiveMinimum 0
         */
        maxArticleCount?: number;
        /**
         * The maximum number of source articles to return.
         * @minimum 0
         */
        returnedArticleCount?: number;
        /**
         * The maximum generated-token budget for the summary.
         * @exclusiveMinimum 0
         */
        maxTokens?: number;
        /**
         * The model sampling temperature.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /**
         * The nucleus sampling value.
         * @minimum 0
         * @maximum 1
         */
        topP?: number;
        /**
         * The Perigon-supported language model to use.
         * @minLength 1
         */
        model?: string;
        /** The article selection method. */
        method?: "ARTICLES" | "CLUSTERS";
        /**
         * The article fields Perigon should include in the summarization context.
         * @minItems 1
         * @maxItems 3
         */
        summarizeFields?: Array<"TITLE" | "CONTENT" | "SUMMARY">;
      };
      output: {
        /** The status code returned by Perigon. */
        status: number | null;
        /**
         * The result count returned by Perigon when available.
         * @minimum 0
         */
        numResults: number | null;
        /** The AI-generated news summary returned by Perigon. */
        summary: string | null;
        /** The source article objects returned by Perigon. */
        results: Array<Record<string, unknown>>;
        /** The raw Perigon response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Run semantic vector search over recent Perigon news articles with optional structured filters. */
    "perigon.vector_search_news": {
      input: {
        /**
         * The natural-language prompt for semantic news search.
         * @minLength 1
         */
        prompt: string;
        /**
         * The zero-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /**
         * The earliest article publication date or date-time to include.
         * @minLength 1
         */
        pubDateFrom?: string;
        /**
         * The latest article publication date or date-time to include.
         * @minLength 1
         */
        pubDateTo?: string;
        /** Whether wire-service reprints should be included. */
        showReprints?: boolean;
        /** A Perigon vector-search filter object with direct fields or nested AND, OR, and NOT clauses. */
        filter?: Record<string, unknown>;
      };
      output: {
        /** The status code returned by Perigon. */
        status: number | null;
        /** The scored vector-search result objects returned by Perigon. */
        results: Array<Record<string, unknown>>;
        /** The raw Perigon response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Run semantic vector search over Perigon Wikipedia content with optional structured filters. */
    "perigon.vector_search_wikipedia": {
      input: {
        /**
         * The natural-language prompt for semantic Wikipedia search.
         * @minLength 1
         */
        prompt: string;
        /**
         * The zero-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /**
         * The minimum average daily pageview count.
         * @minimum 0
         */
        pageviewsFrom?: number;
        /**
         * The maximum average daily pageview count.
         * @minimum 0
         */
        pageviewsTo?: number;
        /**
         * The earliest Wikipedia revision date or date-time to include.
         * @minLength 1
         */
        wikiRevisionFrom?: string;
        /**
         * The latest Wikipedia revision date or date-time to include.
         * @minLength 1
         */
        wikiRevisionTo?: string;
        /** A Perigon vector-search filter object with direct fields or nested AND, OR, and NOT clauses. */
        filter?: Record<string, unknown>;
      };
      output: {
        /** The status code returned by Perigon. */
        status: number | null;
        /** The scored vector-search result objects returned by Perigon. */
        results: Array<Record<string, unknown>>;
        /** The raw Perigon response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
