import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Trendshift's captured GitHub Trending list for a specific scrape date. */
    "trendshift.get_github_trending_by_date": {
      input: {
        /**
         * A calendar date in YYYY-MM-DD format.
         * @format date
         */
        date: string;
        /**
         * A repository language filter, or all to include every language.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** The local scrape date in YYYY-MM-DD format. */
        trend_date: string | null;
        /** The lowercased list language, or null for all languages. */
        language: string | null;
        /** The repositories in GitHub's captured rank order. */
        data: Array<{
          /** GitHub's rank for the repository in the captured list. */
          rank: number;
          /** Trendshift's internal repository identifier. */
          id: number;
          /** The GitHub repository identifier. */
          ghr_id: number;
          /** The GitHub repository name in owner/repository form. */
          full_name: string;
          /** The repository's primary language as reported by GitHub. */
          language: string;
          /** The repository's total star count at query time. */
          stars_now: number;
          /** The repository's total fork count at query time. */
          forks_now: number;
        }> | null;
      };
    };
    /** Get Trendshift's daily trending ranking for a specific UTC date. */
    "trendshift.get_trending_daily_by_date": {
      input: {
        /**
         * A calendar date in YYYY-MM-DD format.
         * @format date
         */
        date: string;
        /**
         * A repository language filter, or all to include every language.
         * @minLength 1
         */
        language?: string;
        /**
         * The maximum number of repositories to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque cursor returned by the previous page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The ranked repositories, or null when unavailable. */
        data: Array<{
          /** Trendshift's internal repository identifier. */
          id: number;
          /** The GitHub repository identifier. */
          ghr_id: number;
          /** The GitHub repository name in owner/repository form. */
          full_name: string;
          /** The repository's primary language as reported by GitHub. */
          language: string;
          /** The repository's total star count at query time. */
          stars_now: number;
          /** The repository's total fork count at query time. */
          forks_now: number;
          /** The stars gained during the ranking period. */
          stars_gained: number;
          /** The forks gained during the ranking period. */
          forks_gained: number;
          /** Trendshift's trending score for the period. */
          score: number;
        }> | null;
        /** The cursor for the next page, or null at the end. */
        next_cursor: string | null;
      };
    };
    /** Get Trendshift's trending ranking for a specific calendar year and month. */
    "trendshift.get_trending_monthly_by_period": {
      input: {
        /**
         * The calendar year, from 1 through 9999.
         * @minimum 1
         * @maximum 9999
         */
        year: number;
        /**
         * The calendar month, from 1 through 12.
         * @minimum 1
         * @maximum 12
         */
        month: number;
        /**
         * A repository language filter, or all to include every language.
         * @minLength 1
         */
        language?: string;
        /**
         * The maximum number of repositories to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque cursor returned by the previous page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The ranked repositories, or null when unavailable. */
        data: Array<{
          /** Trendshift's internal repository identifier. */
          id: number;
          /** The GitHub repository identifier. */
          ghr_id: number;
          /** The GitHub repository name in owner/repository form. */
          full_name: string;
          /** The repository's primary language as reported by GitHub. */
          language: string;
          /** The repository's total star count at query time. */
          stars_now: number;
          /** The repository's total fork count at query time. */
          forks_now: number;
          /** The stars gained during the ranking period. */
          stars_gained: number;
          /** The forks gained during the ranking period. */
          forks_gained: number;
          /** Trendshift's trending score for the period. */
          score: number;
        }> | null;
        /** The cursor for the next page, or null at the end. */
        next_cursor: string | null;
      };
    };
    /** Get Trendshift's trending ranking for a specific ISO year and week. */
    "trendshift.get_trending_weekly_by_period": {
      input: {
        /**
         * The calendar year, from 1 through 9999.
         * @minimum 1
         * @maximum 9999
         */
        year: number;
        /**
         * The ISO 8601 week number, from 1 through 53.
         * @minimum 1
         * @maximum 53
         */
        week: number;
        /**
         * A repository language filter, or all to include every language.
         * @minLength 1
         */
        language?: string;
        /**
         * The maximum number of repositories to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque cursor returned by the previous page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The ranked repositories, or null when unavailable. */
        data: Array<{
          /** Trendshift's internal repository identifier. */
          id: number;
          /** The GitHub repository identifier. */
          ghr_id: number;
          /** The GitHub repository name in owner/repository form. */
          full_name: string;
          /** The repository's primary language as reported by GitHub. */
          language: string;
          /** The repository's total star count at query time. */
          stars_now: number;
          /** The repository's total fork count at query time. */
          forks_now: number;
          /** The stars gained during the ranking period. */
          stars_gained: number;
          /** The forks gained during the ranking period. */
          forks_gained: number;
          /** Trendshift's trending score for the period. */
          score: number;
        }> | null;
        /** The cursor for the next page, or null at the end. */
        next_cursor: string | null;
      };
    };
    /** Get Trendshift's trending ranking for a specific calendar year. */
    "trendshift.get_trending_yearly_by_period": {
      input: {
        /**
         * The calendar year, from 1 through 9999.
         * @minimum 1
         * @maximum 9999
         */
        year: number;
        /**
         * A repository language filter, or all to include every language.
         * @minLength 1
         */
        language?: string;
        /**
         * The maximum number of repositories to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque cursor returned by the previous page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The ranked repositories, or null when unavailable. */
        data: Array<{
          /** Trendshift's internal repository identifier. */
          id: number;
          /** The GitHub repository identifier. */
          ghr_id: number;
          /** The GitHub repository name in owner/repository form. */
          full_name: string;
          /** The repository's primary language as reported by GitHub. */
          language: string;
          /** The repository's total star count at query time. */
          stars_now: number;
          /** The repository's total fork count at query time. */
          forks_now: number;
          /** The stars gained during the ranking period. */
          stars_gained: number;
          /** The forks gained during the ranking period. */
          forks_gained: number;
          /** Trendshift's trending score for the period. */
          score: number;
        }> | null;
        /** The cursor for the next page, or null at the end. */
        next_cursor: string | null;
      };
    };
    /** List repositories whose engagement increased within a requested date window. */
    "trendshift.list_engagement_spikes": {
      input: {
        /** The engagement metric used to rank repositories. */
        metric: "stars" | "forks" | "merged_prs" | "issues" | "closed_issues";
        /**
         * The inclusive minimum engagement gain.
         * @minimum 0
         */
        minGain?: number;
        /**
         * The inclusive maximum engagement gain.
         * @minimum 0
         */
        maxGain?: number;
        /**
         * A calendar date in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * A calendar date in YYYY-MM-DD format.
         * @format date
         */
        endDate?: string;
        /**
         * The maximum number of repositories to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque cursor returned by the previous page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The repositories ranked by engagement gain, or null when unavailable. */
        data: Array<{
          /** Trendshift's internal repository identifier. */
          id: number;
          /** The GitHub repository name in owner/repository form. */
          full_name: string;
          /** The GitHub repository identifier. */
          ghr_id: number;
          /** The engagement gain during the requested window. */
          gain: number;
        }> | null;
        /** The cursor for the next page, or null at the end. */
        next_cursor: string | null;
      };
    };
    /** Get Trendshift's latest captured GitHub Trending list. */
    "trendshift.list_github_trending": {
      input: {
        /**
         * A repository language filter, or all to include every language.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** The local scrape date in YYYY-MM-DD format. */
        trend_date: string | null;
        /** The lowercased list language, or null for all languages. */
        language: string | null;
        /** The repositories in GitHub's captured rank order. */
        data: Array<{
          /** GitHub's rank for the repository in the captured list. */
          rank: number;
          /** Trendshift's internal repository identifier. */
          id: number;
          /** The GitHub repository identifier. */
          ghr_id: number;
          /** The GitHub repository name in owner/repository form. */
          full_name: string;
          /** The repository's primary language as reported by GitHub. */
          language: string;
          /** The repository's total star count at query time. */
          stars_now: number;
          /** The repository's total fork count at query time. */
          forks_now: number;
        }> | null;
      };
    };
    /** List repositories in Trendshift's current daily trending ranking. */
    "trendshift.list_trending_daily": {
      input: {
        /**
         * A repository language filter, or all to include every language.
         * @minLength 1
         */
        language?: string;
        /**
         * The maximum number of repositories to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque cursor returned by the previous page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The ranked repositories, or null when unavailable. */
        data: Array<{
          /** Trendshift's internal repository identifier. */
          id: number;
          /** The GitHub repository identifier. */
          ghr_id: number;
          /** The GitHub repository name in owner/repository form. */
          full_name: string;
          /** The repository's primary language as reported by GitHub. */
          language: string;
          /** The repository's total star count at query time. */
          stars_now: number;
          /** The repository's total fork count at query time. */
          forks_now: number;
          /** The stars gained during the ranking period. */
          stars_gained: number;
          /** The forks gained during the ranking period. */
          forks_gained: number;
          /** Trendshift's trending score for the period. */
          score: number;
        }> | null;
        /** The cursor for the next page, or null at the end. */
        next_cursor: string | null;
      };
    };
    /** List repositories in Trendshift's current monthly trending ranking. */
    "trendshift.list_trending_monthly": {
      input: {
        /**
         * A repository language filter, or all to include every language.
         * @minLength 1
         */
        language?: string;
        /**
         * The maximum number of repositories to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque cursor returned by the previous page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The ranked repositories, or null when unavailable. */
        data: Array<{
          /** Trendshift's internal repository identifier. */
          id: number;
          /** The GitHub repository identifier. */
          ghr_id: number;
          /** The GitHub repository name in owner/repository form. */
          full_name: string;
          /** The repository's primary language as reported by GitHub. */
          language: string;
          /** The repository's total star count at query time. */
          stars_now: number;
          /** The repository's total fork count at query time. */
          forks_now: number;
          /** The stars gained during the ranking period. */
          stars_gained: number;
          /** The forks gained during the ranking period. */
          forks_gained: number;
          /** Trendshift's trending score for the period. */
          score: number;
        }> | null;
        /** The cursor for the next page, or null at the end. */
        next_cursor: string | null;
      };
    };
    /** List repositories in Trendshift's current weekly trending ranking. */
    "trendshift.list_trending_weekly": {
      input: {
        /**
         * A repository language filter, or all to include every language.
         * @minLength 1
         */
        language?: string;
        /**
         * The maximum number of repositories to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque cursor returned by the previous page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The ranked repositories, or null when unavailable. */
        data: Array<{
          /** Trendshift's internal repository identifier. */
          id: number;
          /** The GitHub repository identifier. */
          ghr_id: number;
          /** The GitHub repository name in owner/repository form. */
          full_name: string;
          /** The repository's primary language as reported by GitHub. */
          language: string;
          /** The repository's total star count at query time. */
          stars_now: number;
          /** The repository's total fork count at query time. */
          forks_now: number;
          /** The stars gained during the ranking period. */
          stars_gained: number;
          /** The forks gained during the ranking period. */
          forks_gained: number;
          /** Trendshift's trending score for the period. */
          score: number;
        }> | null;
        /** The cursor for the next page, or null at the end. */
        next_cursor: string | null;
      };
    };
    /** List repositories in Trendshift's current yearly trending ranking. */
    "trendshift.list_trending_yearly": {
      input: {
        /**
         * A repository language filter, or all to include every language.
         * @minLength 1
         */
        language?: string;
        /**
         * The maximum number of repositories to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque cursor returned by the previous page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The ranked repositories, or null when unavailable. */
        data: Array<{
          /** Trendshift's internal repository identifier. */
          id: number;
          /** The GitHub repository identifier. */
          ghr_id: number;
          /** The GitHub repository name in owner/repository form. */
          full_name: string;
          /** The repository's primary language as reported by GitHub. */
          language: string;
          /** The repository's total star count at query time. */
          stars_now: number;
          /** The repository's total fork count at query time. */
          forks_now: number;
          /** The stars gained during the ranking period. */
          stars_gained: number;
          /** The forks gained during the ranking period. */
          forks_gained: number;
          /** Trendshift's trending score for the period. */
          score: number;
        }> | null;
        /** The cursor for the next page, or null at the end. */
        next_cursor: string | null;
      };
    };
  }
}
