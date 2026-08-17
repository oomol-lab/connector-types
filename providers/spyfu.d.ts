import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Discover domains matching a wildcard pattern and optional traffic, budget, rank, or strength criteria. */
    "spyfu.find_matching_domains": {
      input: {
        /**
         * Wildcard domain pattern such as *blog* or *software*.
         * @minLength 1
         */
        query: string;
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
        /** Domain statistic used to sort matching results. */
        sortBy?: "AverageAdRank" | "AverageOrganicRank" | "MonthlyBudget" | "MonthlyOrganicClicks" | "MonthlyOrganicValue" | "MonthlyPaidClicks" | "Strength" | "TotalOrganicResults";
        /** Direction used to sort SpyFu results. */
        sortOrder?: "Ascending" | "Descending";
        /**
         * Minimum estimated monthly advertising budget.
         * @minimum 0
         */
        minMonthlyBudget?: number;
        /**
         * Maximum estimated monthly advertising budget.
         * @minimum 0
         */
        maxMonthlyBudget?: number;
        /**
         * Minimum estimated monthly organic clicks.
         * @minimum 0
         */
        minMonthlyOrganicClicks?: number;
        /**
         * Maximum estimated monthly organic clicks.
         * @minimum 0
         */
        maxMonthlyOrganicClicks?: number;
        /**
         * Minimum estimated monthly organic traffic value.
         * @minimum 0
         */
        minMonthlyOrganicValue?: number;
        /**
         * Maximum estimated monthly organic traffic value.
         * @minimum 0
         */
        maxMonthlyOrganicValue?: number;
        /**
         * Minimum estimated monthly paid clicks.
         * @minimum 0
         */
        minMonthlyPaidClicks?: number;
        /**
         * Maximum estimated monthly paid clicks.
         * @minimum 0
         */
        maxMonthlyPaidClicks?: number;
        /**
         * Minimum number of ranking organic keywords.
         * @minimum 0
         */
        minTotalOrganicResults?: number;
        /**
         * Maximum number of ranking organic keywords.
         * @minimum 0
         */
        maxTotalOrganicResults?: number;
        /**
         * Minimum SpyFu domain strength score.
         * @minimum 0
         * @maximum 100
         */
        minStrength?: number;
        /**
         * Maximum SpyFu domain strength score.
         * @minimum 0
         * @maximum 100
         */
        maxStrength?: number;
        /**
         * Minimum average organic rank value.
         * @minimum 1
         */
        minAverageOrganicRank?: number;
        /**
         * Maximum average organic rank value.
         * @minimum 1
         */
        maxAverageOrganicRank?: number;
        /**
         * Minimum average paid ad rank value.
         * @minimum 1
         */
        minAverageAdRank?: number;
        /**
         * Maximum average paid ad rank value.
         * @minimum 1
         */
        maxAverageAdRank?: number;
        /**
         * Maximum number of SpyFu rows to return.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * One-based row offset used for SpyFu pagination.
         * @minimum 1
         * @maximum 10000
         */
        startingRow?: number;
      };
      output: {
        /**
         * Number of rows returned in this SpyFu response.
         * @minimum 0
         */
        resultCount: number;
        /**
         * Total number of upstream rows matching the query when SpyFu reports it.
         * @minimum 0
         */
        totalMatchingResults?: number;
        /** Result rows returned by SpyFu. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve current or historical SEO and PPC statistics for multiple domains. */
    "spyfu.get_bulk_domain_stats": {
      input: {
        /**
         * Root domains to analyze: up to 100 latest snapshots or 10 complete histories.
         * @minItems 1
         * @maxItems 100
         */
        domains: Array<string>;
        /** Whether SpyFu should return only the latest snapshot instead of complete history. */
        showOnlyLatest: boolean;
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
      };
      output: {
        /**
         * Number of rows returned in this SpyFu response.
         * @minimum 0
         */
        resultCount: number;
        /**
         * Total number of upstream rows matching the query when SpyFu reports it.
         * @minimum 0
         */
        totalMatchingResults?: number;
        /** Result rows returned by SpyFu. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Find SEO or PPC keywords shared by selected domains with optional exclusions. */
    "spyfu.get_competing_keywords": {
      input: {
        /** Search channel compared by SpyFu Kombat. */
        keywordType: "seo" | "ppc";
        /**
         * Domains whose keywords should seed the comparison.
         * @minItems 1
         * @maxItems 10
         */
        includedDomains: Array<string>;
        /**
         * Domains whose keywords should be removed from the result.
         * @minItems 1
         * @maxItems 10
         */
        excludedDomains?: Array<string>;
        /** Whether returned keywords must appear for every included domain instead of any domain. */
        isIntersection: boolean;
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
        /**
         * Maximum number of SpyFu rows to return.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * One-based row offset used for SpyFu pagination.
         * @minimum 1
         * @maximum 10000
         */
        startingRow?: number;
        /** Direction used to sort SpyFu results. */
        sortOrder?: "Ascending" | "Descending";
        /** Whether SpyFu should exclude adult keywords. */
        adultFilter?: boolean;
      };
      output: {
        /** Search channel used for this keyword comparison. */
        keywordType: string;
        /**
         * Number of rows returned in this SpyFu response.
         * @minimum 0
         */
        resultCount: number;
        /**
         * Total number of upstream rows matching the query when SpyFu reports it.
         * @minimum 0
         */
        totalMatchingResults?: number;
        /** Result rows returned by SpyFu. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve a domain's top SEO, PPC, or combined search competitors. */
    "spyfu.get_competitors": {
      input: {
        /**
         * Domain whose competitors should be discovered.
         * @minLength 1
         */
        domain: string;
        /** Search channel used to identify competitors. */
        competitorType: "seo" | "ppc" | "combined";
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
        /**
         * Maximum number of competitor rows to return.
         * @minimum 1
         * @maximum 550
         */
        pageSize?: number;
        /**
         * One-based competitor row offset.
         * @minimum 1
         * @maximum 550
         */
        startingRow?: number;
        /** Competitor field used for sorting. */
        sortBy?: "Domain" | "CommonTerms" | "Rank";
        /** Direction used to sort SpyFu results. */
        sortOrder?: "Ascending" | "Descending";
      };
      output: {
        /** Search channel used to find these competitors. */
        competitorType: string;
        /**
         * Number of combined or primary competitor rows returned.
         * @minimum 0
         */
        resultCount: number;
        /**
         * Total number of upstream competitor rows matching the query when reported.
         * @minimum 0
         */
        totalMatchingResults?: number;
        /** Primary competitor rows returned by SpyFu. */
        results: Array<Record<string, unknown>>;
        /** PPC competitor rows returned in combined mode. */
        ppcResults?: Array<Record<string, unknown>>;
        /** SEO competitor rows returned in combined mode. */
        seoResults?: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve historical advertising copy and keywords for a domain. */
    "spyfu.get_domain_ad_history": {
      input: {
        /**
         * Advertiser root domain whose ad history should be returned.
         * @minLength 1
         */
        domain: string;
        /**
         * Keyword text used to filter the domain's ad history.
         * @minLength 1
         */
        keywordFilter?: string;
        /**
         * Earliest ad capture date to include, formatted as YYYYMMDD.
         * @minimum 19000101
         * @maximum 29991231
         */
        minSearchDateId?: number;
        /**
         * Latest ad capture date to include, formatted as YYYYMMDD.
         * @minimum 19000101
         * @maximum 29991231
         */
        maxSearchDateId?: number;
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
        /**
         * Maximum number of SpyFu rows to return.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * One-based ad history row offset.
         * @minimum 1
         */
        startingRow?: number;
      };
      output: {
        /**
         * Number of ad history rows returned in this response.
         * @minimum 0
         */
        resultCount: number;
        /**
         * Total number of matching ad history rows reported.
         * @minimum 0
         */
        totalMatchingResults?: number;
        /** Whether SpyFu reports the total matching row count as partial. */
        totalMatchingResultsIsPartial?: boolean;
        /**
         * One-based starting row returned by SpyFu.
         * @minimum 1
         */
        startingRow?: number;
        /**
         * Page size returned by SpyFu.
         * @minimum 1
         */
        pageSize?: number;
        /** Whether more flattened ad history rows are available. */
        hasMoreResults?: boolean;
        /**
         * Total number of matching keywords reported by SpyFu.
         * @minimum 0
         */
        totalMatchingKeywords?: number;
        /** Whether more backing keyword result groups are available. */
        hasMoreKeywordResults?: boolean;
        /** Domain ad history rows returned by SpyFu. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Compare one domain's historical organic rankings across selected keywords. */
    "spyfu.get_domain_keyword_rankings": {
      input: {
        /**
         * Domain whose keyword ranking history should be compared.
         * @minLength 1
         */
        domain: string;
        /**
         * Keywords whose historical rankings should be compared.
         * @minItems 1
         * @maxItems 50
         */
        keywords: Array<string>;
        /**
         * Beginning month of the ranking range in YYYY-MM format.
         * @minLength 7
         * @maxLength 7
         */
        startMonth?: string;
        /**
         * Ending month of the ranking range in YYYY-MM format.
         * @minLength 7
         * @maxLength 7
         */
        endMonth?: string;
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
      };
      output: {
        /**
         * Number of rows returned in this SpyFu response.
         * @minimum 0
         */
        resultCount: number;
        /**
         * Total number of upstream rows matching the query when SpyFu reports it.
         * @minimum 0
         */
        totalMatchingResults?: number;
        /** Result rows returned by SpyFu. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve historical keyword ranks and aggregate click changes for a domain across a month range. */
    "spyfu.get_domain_ranking_history": {
      input: {
        /**
         * Domain whose historical organic rankings should be analyzed.
         * @minLength 1
         */
        domain: string;
        /** Historical ranking analysis performed by SpyFu. */
        queryType?: "MostValuable" | "FellFromTop10" | "MadeTheTop10" | "NewKeywords" | "NoLongerRanks" | "GainedRanks" | "LostRanks" | "GainedClicks" | "LostClicks";
        /**
         * Beginning month of the ranking range in YYYY-MM format.
         * @minLength 7
         * @maxLength 7
         */
        startMonth?: string;
        /**
         * Ending month of the ranking range in YYYY-MM format.
         * @minLength 7
         * @maxLength 7
         */
        endMonth?: string;
        /**
         * Terms that must be present in historical keywords.
         * @minItems 1
         * @maxItems 50
         */
        includeTerms?: Array<string>;
        /** Whether a historical keyword may match any include term instead of all include terms. */
        includeAnyTerm?: boolean;
        /**
         * Terms that must not be present in historical keywords.
         * @minItems 1
         * @maxItems 50
         */
        excludeTerms?: Array<string>;
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
        /** Historical ranking field used for sorting. */
        sortBy?: "ClicksChange" | "EndClicks" | "StartRank" | "EndRank" | "RankChange";
        /** Direction used to sort SpyFu results. */
        sortOrder?: "Ascending" | "Descending";
        /**
         * Maximum number of SpyFu rows to return.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * One-based row offset used for SpyFu pagination.
         * @minimum 1
         * @maximum 10000
         */
        startingRow?: number;
      };
      output: {
        /**
         * Number of historical keyword rows returned.
         * @minimum 0
         */
        resultCount: number;
        /**
         * Total matching historical keyword rows reported.
         * @minimum 0
         */
        totalMatchingResults?: number;
        /** Historical keyword ranking rows returned by SpyFu. */
        results: Array<Record<string, unknown>>;
        /** Combined search volume across matching historical keywords. */
        totalVolume?: number;
        /** Combined ending organic clicks across matching keywords. */
        totalClicks?: number;
        /** Combined organic click change across matching keywords. */
        totalClicksChange?: number;
        /** Combined rank change across matching keywords. */
        totalRankChange?: number;
        /** Average ending rank across matching keywords. */
        rankAverage?: number;
        /** Change in average rank across the selected month range. */
        rankAverageChange?: number;
      };
    };
    /** Retrieve historical advertisers and ad copy for a keyword. */
    "spyfu.get_keyword_ad_history": {
      input: {
        /**
         * Keyword whose advertising history should be returned.
         * @minLength 1
         */
        term: string;
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
        /**
         * Maximum number of SpyFu rows to return.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * One-based ad history row offset.
         * @minimum 1
         */
        startingRow?: number;
      };
      output: {
        /**
         * Number of rows returned in this SpyFu response.
         * @minimum 0
         */
        resultCount: number;
        /**
         * Total number of upstream rows matching the query when SpyFu reports it.
         * @minimum 0
         */
        totalMatchingResults?: number;
        /** Result rows returned by SpyFu. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve keyword ad history enriched with advertiser budgets, coverage, and top-ad statistics. */
    "spyfu.get_keyword_ad_history_with_stats": {
      input: {
        /**
         * Keyword whose enriched advertising history should be returned.
         * @minLength 1
         */
        term: string;
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
        /**
         * Maximum number of SpyFu rows to return.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * One-based ad history row offset.
         * @minimum 1
         */
        startingRow?: number;
      };
      output: {
        /**
         * Number of advertiser history rows returned by SpyFu.
         * @minimum 0
         */
        resultCount: number;
        /** Advertiser domain statistics returned by SpyFu. */
        domains: Array<Record<string, unknown>>;
        /** Top-performing ads returned by SpyFu. */
        topAds: Array<Record<string, unknown>>;
      };
    };
    /** Compare one keyword's historical organic rankings across multiple domains. */
    "spyfu.get_keyword_domain_rankings": {
      input: {
        /**
         * Keyword whose historical rankings should be compared.
         * @minLength 1
         */
        keyword: string;
        /**
         * Domains whose historical rankings should be compared.
         * @minItems 1
         * @maxItems 10
         */
        domains: Array<string>;
        /**
         * Beginning month of the ranking range in YYYY-MM format.
         * @minLength 7
         * @maxLength 7
         */
        startMonth?: string;
        /**
         * Ending month of the ranking range in YYYY-MM format.
         * @minLength 7
         * @maxLength 7
         */
        endMonth?: string;
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
      };
      output: {
        /**
         * Number of rows returned in this SpyFu response.
         * @minimum 0
         */
        resultCount: number;
        /**
         * Total number of upstream rows matching the query when SpyFu reports it.
         * @minimum 0
         */
        totalMatchingResults?: number;
        /** Result rows returned by SpyFu. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Expand a seed keyword into related, question, transactional, co-ranking, or co-advertised terms. */
    "spyfu.get_keyword_expansions": {
      input: {
        /**
         * Seed keyword to expand.
         * @minLength 1
         */
        query: string;
        /** Keyword relationship SpyFu should discover. */
        keywordSearchType: "AlsoBuysAdsFor" | "AlsoRanksFor" | "PhraseMatch" | "Questions" | "Transactions";
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
        /**
         * Terms that must be present in returned keywords.
         * @minItems 1
         * @maxItems 50
         */
        includeTerms?: Array<string>;
        /** Whether a keyword may match any include term instead of requiring every include term. */
        includeAnyTerm?: boolean;
        /**
         * Terms that must not be present in returned keywords.
         * @minItems 1
         * @maxItems 50
         */
        excludeTerms?: Array<string>;
        /**
         * Maximum number of SpyFu rows to return.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * One-based row offset used for SpyFu pagination.
         * @minimum 1
         * @maximum 10000
         */
        startingRow?: number;
        /** Direction used to sort SpyFu results. */
        sortOrder?: "Ascending" | "Descending";
        /** Whether SpyFu should exclude adult keywords. */
        adultFilter?: boolean;
        /** Whether SpyFu should return only adult keywords. */
        onlyAdultKeywords?: boolean;
      };
      output: {
        /** Keyword relationship used for this expansion. */
        keywordSearchType: string;
        /**
         * Number of rows returned in this SpyFu response.
         * @minimum 0
         */
        resultCount: number;
        /**
         * Total number of upstream rows matching the query when SpyFu reports it.
         * @minimum 0
         */
        totalMatchingResults?: number;
        /** Result rows returned by SpyFu. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve search, difficulty, click, cost, and intent metrics for exact keywords. */
    "spyfu.get_keyword_information": {
      input: {
        /**
         * Exact keywords to analyze.
         * @minItems 1
         * @maxItems 100
         */
        keywords: Array<string>;
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
        /** Whether SpyFu should exclude adult keywords. */
        adultFilter?: boolean;
        /** Whether SpyFu should return only adult keywords. */
        onlyAdultKeywords?: boolean;
      };
      output: {
        /**
         * Number of rows returned in this SpyFu response.
         * @minimum 0
         */
        resultCount: number;
        /**
         * Total number of upstream rows matching the query when SpyFu reports it.
         * @minimum 0
         */
        totalMatchingResults?: number;
        /** Result rows returned by SpyFu. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve the latest SEO and PPC statistics for a domain. */
    "spyfu.get_latest_domain_stats": {
      input: {
        /**
         * Domain to analyze without requiring a protocol.
         * @minLength 1
         */
        domain: string;
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
        /**
         * Number of recent months of domain statistics to return.
         * @minimum 0
         * @maximum 120
         */
        pastNMonths?: number;
      };
      output: {
        /** Domain reported by SpyFu for these statistics. */
        domain: string;
        /**
         * Number of rows returned in this SpyFu response.
         * @minimum 0
         */
        resultCount: number;
        /**
         * Total number of upstream rows matching the query when SpyFu reports it.
         * @minimum 0
         */
        totalMatchingResults?: number;
        /** Result rows returned by SpyFu. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve live aggregate organic visibility, click, value, and search-volume metrics for a domain or URL. */
    "spyfu.get_live_seo_stats": {
      input: {
        /**
         * Domain, URL, subdomain, path, or page to analyze.
         * @minLength 1
         */
        query: string;
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
      };
      output: {
        /**
         * Number of aggregate results reported by SpyFu.
         * @minimum 0
         */
        resultCount: number;
        /** Root domain reported for the analyzed target. */
        domain?: string | null;
        /** Normalized URL reported for the analyzed target. */
        url?: string | null;
        /**
         * Total ranking organic keywords found for the target.
         * @minimum 0
         */
        totalOrganicResults?: number;
        /**
         * Estimated monthly organic clicks for the target.
         * @minimum 0
         */
        monthlyOrganicClicks?: number;
        /**
         * Estimated monthly advertising value of the target's organic clicks.
         * @minimum 0
         */
        monthlyOrganicClickValue?: number;
        /**
         * Combined monthly search volume across the target's ranking keywords.
         * @minimum 0
         */
        totalSearchVolume?: number;
      };
    };
    /** Retrieve SpyFu API usage and cost totals for one calendar month. */
    "spyfu.get_monthly_usage": {
      input: {
        /**
         * Calendar month in YYYY-MM format.
         * @minLength 7
         * @maxLength 7
         */
        usageMonth?: string;
      };
      output: {
        /** Calendar month requested from SpyFu in YYYY-MM format. */
        usageMonth: string;
        /** Usage and cost entries returned by SpyFu. */
        usage: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve current ads, most successful paid keywords, or newly acquired paid keywords for a domain. */
    "spyfu.get_ppc_keywords": {
      input: {
        /**
         * Domain or URL whose paid search activity should be analyzed.
         * @minLength 1
         */
        query: string;
        /** Paid search analysis performed by SpyFu. */
        searchType: "current_ads" | "most_successful" | "newly_acquired";
        /**
         * Domain to exclude from paid keyword results.
         * @minLength 1
         */
        excludeDomain?: string;
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
        /**
         * Terms that must be present in returned keywords.
         * @minItems 1
         * @maxItems 50
         */
        includeTerms?: Array<string>;
        /** Whether a keyword may match any include term instead of requiring every include term. */
        includeAnyTerm?: boolean;
        /**
         * Terms that must not be present in returned keywords.
         * @minItems 1
         * @maxItems 50
         */
        excludeTerms?: Array<string>;
        /**
         * Maximum number of SpyFu rows to return.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * One-based row offset used for SpyFu pagination.
         * @minimum 1
         * @maximum 10000
         */
        startingRow?: number;
        /** Direction used to sort SpyFu results. */
        sortOrder?: "Ascending" | "Descending";
        /** Whether SpyFu should exclude adult keywords. */
        adultFilter?: boolean;
        /** Whether SpyFu should return only adult keywords. */
        onlyAdultKeywords?: boolean;
      };
      output: {
        /** Paid search analysis mode used for this response. */
        searchType: string;
        /**
         * Number of rows returned in this SpyFu response.
         * @minimum 0
         */
        resultCount: number;
        /**
         * Total number of upstream rows matching the query when SpyFu reports it.
         * @minimum 0
         */
        totalMatchingResults?: number;
        /** Result rows returned by SpyFu. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve SEO keywords for a domain by value, ranking change, click change, or page-one movement. */
    "spyfu.get_seo_keywords": {
      input: {
        /**
         * Domain, URL, subdomain, path, or page to analyze.
         * @minLength 1
         */
        query: string;
        /** SEO keyword analysis performed by SpyFu. */
        searchType: "GainedClicks" | "GainedRanks" | "JustFellOff" | "JustMadeIt" | "LostClicks" | "LostRanks" | "MostValuable" | "NewlyRanked";
        /**
         * Optional domain used for competitive comparison fields.
         * @minLength 1
         */
        compareDomain?: string;
        /** Whether keywords where the target homepage ranks should be excluded. */
        excludeHomepageKeywords?: boolean;
        /** Whether SpyFu should require an exact protocol, host, path, and trailing-slash match. */
        exactMatch?: boolean;
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
        /**
         * Terms that must be present in returned keywords.
         * @minItems 1
         * @maxItems 50
         */
        includeTerms?: Array<string>;
        /** Whether a keyword may match any include term instead of requiring every include term. */
        includeAnyTerm?: boolean;
        /**
         * Terms that must not be present in returned keywords.
         * @minItems 1
         * @maxItems 50
         */
        excludeTerms?: Array<string>;
        /**
         * Maximum number of SpyFu rows to return.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * One-based row offset used for SpyFu pagination.
         * @minimum 1
         * @maximum 10000
         */
        startingRow?: number;
        /** Direction used to sort SpyFu results. */
        sortOrder?: "Ascending" | "Descending";
        /** Whether SpyFu should exclude adult keywords. */
        adultFilter?: boolean;
        /** Whether SpyFu should return only adult keywords. */
        onlyAdultKeywords?: boolean;
      };
      output: {
        /** SEO analysis mode used for this response. */
        searchType: string;
        /**
         * Number of rows returned in this SpyFu response.
         * @minimum 0
         */
        resultCount: number;
        /**
         * Total number of upstream rows matching the query when SpyFu reports it.
         * @minimum 0
         */
        totalMatchingResults?: number;
        /** Result rows returned by SpyFu. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Analyze the current organic search result landscape for a keyword, including ranks and competing pages. */
    "spyfu.get_serp_analysis": {
      input: {
        /**
         * Keyword whose organic search results should be analyzed.
         * @minLength 1
         */
        keyword: string;
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
        /**
         * Maximum number of SERP ranking rows to return.
         * @minimum 1
         * @maximum 105
         */
        pageSize?: number;
      };
      output: {
        /**
         * Number of rows returned in this SpyFu response.
         * @minimum 0
         */
        resultCount: number;
        /**
         * Total number of upstream rows matching the query when SpyFu reports it.
         * @minimum 0
         */
        totalMatchingResults?: number;
        /** Result rows returned by SpyFu. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve a domain's highest-traffic or newly successful organic pages and their top keywords. */
    "spyfu.get_top_pages": {
      input: {
        /**
         * Domain, URL, subdomain, or path whose pages should be analyzed.
         * @minLength 1
         */
        query: string;
        /** Page performance analysis performed by SpyFu. */
        searchType: "MostTraffic" | "New";
        /**
         * Keyword text used to restrict pages to a topic or content theme.
         * @minLength 1
         */
        keywordFilter?: string;
        /**
         * Minimum estimated monthly organic clicks for a page.
         * @minimum 0
         */
        minSeoClicks?: number;
        /**
         * Maximum estimated monthly organic clicks for a page.
         * @minimum 0
         */
        maxSeoClicks?: number;
        /** SpyFu country market whose Google data should be queried. */
        countryCode?: "AR" | "AT" | "AU" | "BE" | "BR" | "CA" | "CH" | "DE" | "DK" | "ES" | "FR" | "IE" | "IN" | "IT" | "JP" | "MX" | "NL" | "NO" | "NZ" | "PL" | "PT" | "SE" | "SG" | "TR" | "UA" | "UK" | "US" | "ZA";
        /**
         * Maximum number of top-page rows to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * One-based row offset used for SpyFu pagination.
         * @minimum 1
         * @maximum 10000
         */
        startingRow?: number;
        /** Direction used to sort SpyFu results. */
        sortOrder?: "Ascending" | "Descending";
      };
      output: {
        /** Page analysis mode used for this response. */
        searchType: string;
        /**
         * Number of rows returned in this SpyFu response.
         * @minimum 0
         */
        resultCount: number;
        /**
         * Total number of upstream rows matching the query when SpyFu reports it.
         * @minimum 0
         */
        totalMatchingResults?: number;
        /** Result rows returned by SpyFu. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve SpyFu API usage broken down by day or API method for one month. */
    "spyfu.get_usage_breakdown": {
      input: {
        /**
         * Calendar month in YYYY-MM format.
         * @minLength 7
         * @maxLength 7
         */
        usageMonth?: string;
        /** Dimension used to break down monthly SpyFu API usage. */
        breakdownType: "daily" | "method";
      };
      output: {
        /** Calendar month requested from SpyFu in YYYY-MM format. */
        usageMonth: string;
        /** Dimension used for this usage breakdown. */
        breakdownType: string;
        /** Daily or per-method usage entries returned by SpyFu. */
        usage: Array<Record<string, unknown>>;
      };
    };
  }
}
