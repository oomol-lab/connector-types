import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a company to a SecurityScorecard portfolio and request its scorecard if needed. */
    "securityscorecard.add_portfolio_company": {
      input: {
        /**
         * The portfolio ID.
         * @minLength 1
         */
        portfolio_id: string;
        /**
         * The company domain, normalized to lowercase.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** The public company name. */
        name?: string;
        /** The primary company domain. */
        domain?: string;
        /** The company security score. */
        score?: number;
        /** The company security grade. */
        grade?: string;
        /** The company industry. */
        industry?: string;
        [key: string]: unknown;
      };
    };
    /** Create a SecurityScorecard portfolio for monitoring companies. */
    "securityscorecard.create_portfolio": {
      input: {
        /**
         * The human-readable portfolio name.
         * @minLength 1
         */
        name: string;
        /** The human-readable portfolio description. */
        description?: string;
        /** Portfolio visibility: private to its owner, shared with the organization, or restricted to a team. */
        privacy?: "private" | "shared" | "team";
        /** The team ID for a team portfolio. */
        team_id?: string;
      };
      output: {
        /** The portfolio ID. */
        id?: string;
        /**
         * The human-readable portfolio name.
         * @minLength 1
         */
        name: string;
        /** The human-readable portfolio description. */
        description?: string;
        /** Portfolio visibility: private to its owner, shared with the organization, or restricted to a team. */
        privacy?: "private" | "shared" | "team";
        [key: string]: unknown;
      };
    };
    /** Delete a SecurityScorecard portfolio. */
    "securityscorecard.delete_portfolio": {
      input: {
        /**
         * The portfolio ID.
         * @minLength 1
         */
        portfolio_id: string;
      };
      output: {
        /** Whether the deletion succeeded. */
        success: boolean;
      };
    };
    /** Get company information and the current SecurityScorecard score summary. */
    "securityscorecard.get_company": {
      input: {
        /**
         * The company domain or custom scorecard identifier. Add the company to a portfolio before querying its scorecard.
         * @minLength 1
         */
        scorecard_identifier: string;
      };
      output: {
        /** The public company name. */
        name?: string;
        /** The primary company domain. */
        domain?: string;
        /** The company security score. */
        score?: number;
        /** The company security grade. */
        grade?: string;
        /** The company industry. */
        industry?: string;
        [key: string]: unknown;
      };
    };
    /** Get a company security factor scores and issue counts from SecurityScorecard. */
    "securityscorecard.get_company_factors": {
      input: {
        /**
         * The company domain or custom scorecard identifier. Add the company to a portfolio before querying its scorecard.
         * @minLength 1
         */
        scorecard_identifier: string;
        /** Filter issues by one severity. */
        severity?: "positive" | "info" | "low" | "medium" | "high";
        /** Filter issues by a comma-separated severity list, such as high,medium. */
        severity_in?: string;
      };
      output: {
        /** The factor scores and issue counts. */
        entries: Array<Record<string, unknown>>;
        /** The total number of factors. */
        total?: number;
        [key: string]: unknown;
      };
    };
    /** Get historical SecurityScorecard scores for a company over a date range. */
    "securityscorecard.get_company_score_history": {
      input: {
        /**
         * The company domain or custom scorecard identifier. Add the company to a portfolio before querying its scorecard.
         * @minLength 1
         */
        scorecard_identifier: string;
        /** The history granularity; defaults to daily upstream. */
        timing?: "daily" | "weekly" | "monthly";
        /**
         * The history start date in YYYY-MM-DD format.
         * @format date
         */
        from?: string;
        /**
         * The history end date in YYYY-MM-DD format.
         * @format date
         */
        to?: string;
      };
      output: {
        /** The historical score entries; empty if the company has not been scored. */
        entries?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List companies in a SecurityScorecard portfolio with optional risk filters. */
    "securityscorecard.list_portfolio_companies": {
      input: {
        /**
         * The portfolio ID.
         * @minLength 1
         */
        portfolio_id: string;
        /** Filter by security grade. */
        grade?: string;
        /** Filter by industry. */
        industry?: string;
        /** Filter by CVE vulnerability. */
        vulnerability?: string;
        /** Filter by issue type. */
        issue_type?: string;
        /** Filter by company status. */
        status?: "active" | "inactive";
        /** Filter companies with breaches within this many days. */
        had_breach_within_last_days?: number;
      };
      output: {
        /** The matching companies. */
        entries: Array<{
          /** The public company name. */
          name?: string;
          /** The primary company domain. */
          domain?: string;
          /** The company security score. */
          score?: number;
          /** The company security grade. */
          grade?: string;
          /** The company industry. */
          industry?: string;
          [key: string]: unknown;
        }>;
        /** The total number of companies in the portfolio. */
        total?: number;
        [key: string]: unknown;
      };
    };
    /** List all SecurityScorecard portfolios accessible to the connected account. */
    "securityscorecard.list_portfolios": {
      input: Record<string, never>;
      output: {
        /** The accessible portfolios. */
        entries: Array<{
          /** The portfolio ID. */
          id?: string;
          /**
           * The human-readable portfolio name.
           * @minLength 1
           */
          name: string;
          /** The human-readable portfolio description. */
          description?: string;
          /** Portfolio visibility: private to its owner, shared with the organization, or restricted to a team. */
          privacy?: "private" | "shared" | "team";
          [key: string]: unknown;
        }>;
        /** The total number of portfolios. */
        count?: number;
        [key: string]: unknown;
      };
    };
    /** Remove a company from a SecurityScorecard portfolio. */
    "securityscorecard.remove_portfolio_company": {
      input: {
        /**
         * The portfolio ID.
         * @minLength 1
         */
        portfolio_id: string;
        /**
         * The company domain, normalized to lowercase.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** Whether the deletion succeeded. */
        success: boolean;
      };
    };
    /** Update a SecurityScorecard portfolio name, description, or visibility. */
    "securityscorecard.update_portfolio": {
      input: {
        /**
         * The portfolio ID.
         * @minLength 1
         */
        portfolio_id: string;
        /**
         * The human-readable portfolio name.
         * @minLength 1
         */
        name: string;
        /** The human-readable portfolio description. */
        description?: string;
        /** Portfolio visibility: private to its owner, shared with the organization, or restricted to a team. */
        privacy?: "private" | "shared" | "team";
      };
      output: {
        /** The portfolio ID. */
        id?: string;
        /**
         * The human-readable portfolio name.
         * @minLength 1
         */
        name: string;
        /** The human-readable portfolio description. */
        description?: string;
        /** Portfolio visibility: private to its owner, shared with the organization, or restricted to a team. */
        privacy?: "private" | "shared" | "team";
        [key: string]: unknown;
      };
    };
  }
}
