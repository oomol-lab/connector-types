import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read A-share balance sheets for one stock's full history or one market-wide report period. */
    "ftshare.get_balance_sheets": {
      input: Record<string, unknown>;
      output: {
        /** Upstream status code; 200 indicates success. */
        code?: number;
        /** Upstream status message. */
        message?: string;
        /** Report records and pagination totals. */
        data?: {
          /** Records, retaining financial strings, nulls, and additional upstream fields. */
          items?: Array<{
            /** Stock code returned by FTShare. */
            stock_code?: string;
            /** Stock name. */
            stock_name?: string;
            /** Report year. */
            year?: number;
            /** Report period type. */
            report_type?: string;
            /** Chinese report period name. */
            report_type_cn?: string;
            /** Publication date in YYYY-MM-DD format. */
            publish_date?: string;
            /** Statement consolidation and adjustment type. */
            report_form_type?: string;
            /** Total assets. */
            t_assets?: string | null;
            /** Total liabilities. */
            t_liability?: string | null;
            /** Total equity. */
            t_equity?: string | null;
            [key: string]: unknown;
          }>;
          /** Total matching records. */
          total_items?: number;
          /** Total result pages. */
          total_pages?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read A-share cash flow statements for one stock's full history or one market-wide report period. */
    "ftshare.get_cashflow_statements": {
      input: Record<string, unknown>;
      output: {
        /** Upstream status code; 200 indicates success. */
        code?: number;
        /** Upstream status message. */
        message?: string;
        /** Report records and pagination totals. */
        data?: {
          /** Records, retaining financial strings, nulls, and additional upstream fields. */
          items?: Array<{
            /** Stock code returned by FTShare. */
            stock_code?: string;
            /** Stock name. */
            stock_name?: string;
            /** Report year. */
            year?: number;
            /** Report period type. */
            report_type?: string;
            /** Chinese report period name. */
            report_type_cn?: string;
            /** Publication date in YYYY-MM-DD format. */
            publish_date?: string;
            /** Detailed statement consolidation and adjustment type. */
            detail_report_type?: string;
            /** Net cash flow from operating activities. */
            net_oper_cash_flow?: string | null;
            /** Net cash flow from investing activities. */
            net_invest_cash_flow?: string | null;
            /** Net cash flow from financing activities. */
            net_fin_cash_flow?: string | null;
            [key: string]: unknown;
          }>;
          /** Total matching records. */
          total_items?: number;
          /** Total result pages. */
          total_pages?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read A-share earnings forecasts by stock or market report period, including forecast ranges and year-over-year changes. */
    "ftshare.get_earnings_forecasts": {
      input: Record<string, unknown>;
      output: {
        /** Upstream status code; 200 indicates success. */
        code?: number;
        /** Upstream status message. */
        message?: string;
        /** Report records and pagination totals. */
        data?: {
          /** Records, retaining financial strings, nulls, and additional upstream fields. */
          items?: Array<{
            /** Stock code returned by FTShare. */
            stock_code?: string;
            /** Stock name. */
            stock_name?: string;
            /** Report year. */
            year?: number;
            /** Report period type. */
            report_type?: string;
            /** Chinese report period name. */
            report_type_cn?: string;
            /** Publication date in YYYY-MM-DD format. */
            publish_date?: string;
            /** Forecast financial metric. */
            forecast_subject?: string;
            /** Forecast category reported by FTShare. */
            forecast_type?: string;
            /** Lower forecast value. */
            forecast_value_min?: string | null;
            /** Upper forecast value. */
            forecast_value_max?: string | null;
            /** Forecast value unit. */
            unit?: string;
            /** Lower year-over-year percentage change. */
            yoy_change_min?: string | null;
            /** Upper year-over-year percentage change. */
            yoy_change_max?: string | null;
            /** Value for the same period last year. */
            last_year_value?: string | null;
            [key: string]: unknown;
          }>;
          /** Total matching records. */
          total_items?: number;
          /** Total result pages. */
          total_pages?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read A-share earnings express reports by stock or market report period, preserving multiple disclosures and corrections. */
    "ftshare.get_earnings_reports": {
      input: Record<string, unknown>;
      output: {
        /** Upstream status code; 200 indicates success. */
        code?: number;
        /** Upstream status message. */
        message?: string;
        /** Report records and pagination totals. */
        data?: {
          /** Records, retaining financial strings, nulls, and additional upstream fields. */
          items?: Array<{
            /** Stock code returned by FTShare. */
            stock_code?: string;
            /** Stock name. */
            stock_name?: string;
            /** Report year. */
            year?: number;
            /** Report period type. */
            report_type?: string;
            /** Chinese report period name. */
            report_type_cn?: string;
            /** Publication date in YYYY-MM-DD format. */
            publish_date?: string;
            /** Earnings per share. */
            eps?: string | null;
            /** Total revenue. */
            total_revenue?: string | null;
            /** Net profit. */
            net_profit?: string | null;
            /** Return on equity. */
            roe?: string | null;
            [key: string]: unknown;
          }>;
          /** Total matching records. */
          total_items?: number;
          /** Total result pages. */
          total_pages?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read A-share income statements for one stock's full history or one market-wide report period. */
    "ftshare.get_income_statements": {
      input: Record<string, unknown>;
      output: {
        /** Upstream status code; 200 indicates success. */
        code?: number;
        /** Upstream status message. */
        message?: string;
        /** Report records and pagination totals. */
        data?: {
          /** Records, retaining financial strings, nulls, and additional upstream fields. */
          items?: Array<{
            /** Stock code returned by FTShare. */
            stock_code?: string;
            /** Stock name. */
            stock_name?: string;
            /** Report year. */
            year?: number;
            /** Report period type. */
            report_type?: string;
            /** Chinese report period name. */
            report_type_cn?: string;
            /** Publication date in YYYY-MM-DD format. */
            publish_date?: string;
            /** Statement consolidation and adjustment type. */
            report_form_type?: string;
            /** Total revenue. */
            t_revenue?: string | null;
            /** Net profit including minority interests. */
            n_profit?: string | null;
            /** Net profit attributable to the parent company. */
            parcomp_n_profit?: string | null;
            [key: string]: unknown;
          }>;
          /** Total matching records. */
          total_items?: number;
          /** Total result pages. */
          total_pages?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List company snapshots with optional exact stock name and unsuffixed stock code filters. */
    "ftshare.list_companies": {
      input: {
        /**
         * Exact stock code without exchange suffix, for example 000001.
         * @minLength 1
         */
        stock_code?: string;
        /**
         * Exact stock name.
         * @minLength 1
         */
        stock_name?: string;
        /**
         * Page number; defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Page size; defaults to 50, maximum 200.
         * @minimum 1
         * @maximum 200
         */
        page_size?: number;
      };
      output: {
        /** Upstream status code; 200 indicates success. */
        code?: number;
        /** Upstream status message. */
        message?: string;
        /** Company result page. */
        data?: {
          /** Current page number. */
          pageNum?: number;
          /** Current page size. */
          pageSize?: number;
          /** Total matching companies. */
          total?: number;
          /** Total result pages. */
          pages?: number;
          /** Company snapshots. */
          records?: Array<{
            /** Stock code returned by FTShare. */
            stock_code?: string;
            /** Stock name. */
            stock_name?: string;
            /** Company code. */
            company_code?: string;
            /** Main business activities. */
            main_business?: string | null;
            /** Company profile. */
            company_profile?: string | null;
            /** Total market capitalization as reported by FTShare. */
            total_market_value?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
