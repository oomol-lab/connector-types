import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Wisburg asset-management research report (资管报告) by report ID, including the download URL and Markdown summary. */
    "wisburg.get_am_report": {
      input: {
        /** The report ID. */
        id: number;
      };
      output: {
        /** The Wisburg request ID used for troubleshooting. */
        requestId: string;
        /** A Wisburg research report detail. */
        report: {
          /** The report ID. */
          id: number;
          /** The report title. */
          title: string;
          /** The publication time in ISO 8601 format. */
          datetime: string;
          /** The original report download URL. Not returned for every report. */
          url?: string;
          /** The report summary in Markdown. */
          summary?: string;
          /** Report metadata. */
          meta?: {
            /** The metadata name. */
            name?: string;
            /** The metadata description. */
            description?: string;
            [key: string]: unknown;
          };
        };
      };
    };
    /** Get one Wisburg literature research report (文献) by report ID, including the download URL and Markdown summary. */
    "wisburg.get_archive": {
      input: {
        /** The report ID. */
        id: number;
      };
      output: {
        /** The Wisburg request ID used for troubleshooting. */
        requestId: string;
        /** A Wisburg research report detail. */
        report: {
          /** The report ID. */
          id: number;
          /** The report title. */
          title: string;
          /** The publication time in ISO 8601 format. */
          datetime: string;
          /** The original report download URL. Not returned for every report. */
          url?: string;
          /** The report summary in Markdown. */
          summary?: string;
          /** Report metadata. */
          meta?: {
            /** The metadata name. */
            name?: string;
            /** The metadata description. */
            description?: string;
            [key: string]: unknown;
          };
        };
      };
    };
    /** Get one Wisburg column article (文章) by article ID, including the HTML body. */
    "wisburg.get_article": {
      input: {
        /** The article ID. */
        id: number;
      };
      output: {
        /** The Wisburg request ID used for troubleshooting. */
        requestId: string;
        /** A Wisburg column article detail. */
        article: {
          /** The article ID. */
          id: number;
          /** The article title. */
          title: string;
          /** The publication time in ISO 8601 format. */
          datetime: string;
          /** The article introduction. */
          description?: string;
          /** The article body in HTML. */
          body: string;
        };
      };
    };
    /** Get one Wisburg single-company research report (企业研究) by report ID, including the download URL and Markdown summary. */
    "wisburg.get_company_report": {
      input: {
        /** The report ID. */
        id: number;
      };
      output: {
        /** The Wisburg request ID used for troubleshooting. */
        requestId: string;
        /** A Wisburg research report detail. */
        report: {
          /** The report ID. */
          id: number;
          /** The report title. */
          title: string;
          /** The publication time in ISO 8601 format. */
          datetime: string;
          /** The original report download URL. Not returned for every report. */
          url?: string;
          /** The report summary in Markdown. */
          summary?: string;
          /** Report metadata. */
          meta?: {
            /** The metadata name. */
            name?: string;
            /** The metadata description. */
            description?: string;
            [key: string]: unknown;
          };
        };
      };
    };
    /** Get one Wisburg earnings call minutes document (电话会纪要) by ID, including the download URL and Markdown summary. */
    "wisburg.get_earnings_call": {
      input: {
        /** The earnings call minutes ID. */
        id: number;
      };
      output: {
        /** The Wisburg request ID used for troubleshooting. */
        requestId: string;
        /** A Wisburg earnings call minutes detail. */
        report: {
          /** The earnings call minutes ID. */
          id: number;
          /** The title. */
          title: string;
          /** The publication time in ISO 8601 format. */
          datetime: string;
          /** The original download URL. Not returned for every document. */
          url?: string;
          /** The summary in Markdown. */
          summary?: string;
        };
      };
    };
    /** Get one Wisburg Mikko log entry (Mikko 日志) by log ID. Returns the same fields as the list. */
    "wisburg.get_mikko_log": {
      input: {
        /** The log ID. */
        id: number;
      };
      output: {
        /** The Wisburg request ID used for troubleshooting. */
        requestId: string;
        /** A Wisburg Mikko log entry. Logs have no title. */
        log: {
          /** The log ID. */
          id: number;
          /** The publication time in ISO 8601 format. */
          datetime: string;
          /** The log body in Markdown. */
          content: string;
          /** Attached image URLs; empty when the log has no images. */
          images: Array<string>;
        };
      };
    };
    /** Get one Wisburg research note (研报笔记) by report ID, including the Markdown summary. */
    "wisburg.get_report": {
      input: {
        /** The report ID. */
        id: number;
      };
      output: {
        /** The Wisburg request ID used for troubleshooting. */
        requestId: string;
        /** A Wisburg research report detail. */
        report: {
          /** The report ID. */
          id: number;
          /** The report title. */
          title: string;
          /** The publication time in ISO 8601 format. */
          datetime: string;
          /** The original report download URL. Not returned for every report. */
          url?: string;
          /** The report summary in Markdown. */
          summary?: string;
          /** Report metadata. */
          meta?: {
            /** The metadata name. */
            name?: string;
            /** The metadata description. */
            description?: string;
            [key: string]: unknown;
          };
        };
      };
    };
    /** List Wisburg asset-management research reports (资管报告) with cursor pagination, keyword search, and time filters. */
    "wisburg.list_am_reports": {
      input: {
        /**
         * The number of items per page, up to 100. Defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        first?: number;
        /** The pagination cursor from `pageInfo.endCursor` of the previous page. */
        after?: string;
        /** The search keyword. Without a keyword items are sorted by publication time descending; with one by relevance. */
        query?: string;
        /** The start of the time range as a Unix timestamp or an ISO 8601 string. */
        startTime?: string;
        /** The end of the time range as a Unix timestamp or an ISO 8601 string. */
        endTime?: string;
      };
      output: {
        /** The Wisburg request ID used for troubleshooting. */
        requestId: string;
        /** Research reports on this page. */
        items: Array<{
          /** The report ID. */
          id: number;
          /** The report title. */
          title: string;
          /** The publication time in ISO 8601 format. */
          datetime: string;
        }>;
        /** Cursor pagination details for the current page. */
        pageInfo: {
          /** The cursor for the next page; absent when there is no next page. */
          endCursor?: string;
        };
      };
    };
    /** List Wisburg literature research reports (文献) with cursor pagination, keyword search, and time filters. */
    "wisburg.list_archives": {
      input: {
        /**
         * The number of items per page, up to 100. Defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        first?: number;
        /** The pagination cursor from `pageInfo.endCursor` of the previous page. */
        after?: string;
        /** The search keyword. Without a keyword items are sorted by publication time descending; with one by relevance. */
        query?: string;
        /** The start of the time range as a Unix timestamp or an ISO 8601 string. */
        startTime?: string;
        /** The end of the time range as a Unix timestamp or an ISO 8601 string. */
        endTime?: string;
      };
      output: {
        /** The Wisburg request ID used for troubleshooting. */
        requestId: string;
        /** Research reports on this page. */
        items: Array<{
          /** The report ID. */
          id: number;
          /** The report title. */
          title: string;
          /** The publication time in ISO 8601 format. */
          datetime: string;
        }>;
        /** Cursor pagination details for the current page. */
        pageInfo: {
          /** The cursor for the next page; absent when there is no next page. */
          endCursor?: string;
        };
      };
    };
    /** List Wisburg column articles (文章) with cursor pagination, keyword search, and time filters. Mikko logs are not included; use list_mikko_logs for those. */
    "wisburg.list_articles": {
      input: {
        /**
         * The number of items per page, up to 100. Defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        first?: number;
        /** The pagination cursor from `pageInfo.endCursor` of the previous page. */
        after?: string;
        /** The search keyword. Without a keyword items are sorted by publication time descending; with one by relevance. */
        query?: string;
        /** The start of the time range as a Unix timestamp or an ISO 8601 string. */
        startTime?: string;
        /** The end of the time range as a Unix timestamp or an ISO 8601 string. */
        endTime?: string;
      };
      output: {
        /** The Wisburg request ID used for troubleshooting. */
        requestId: string;
        /** Column articles on this page. */
        items: Array<{
          /** The article ID. */
          id: number;
          /** The article title. */
          title: string;
          /** The publication time in ISO 8601 format. */
          datetime: string;
          /** The article introduction. */
          description?: string;
        }>;
        /** Cursor pagination details for the current page. */
        pageInfo: {
          /** The cursor for the next page; absent when there is no next page. */
          endCursor?: string;
        };
      };
    };
    /** List Wisburg single-company research reports (企业研究) with cursor pagination, keyword search, and time filters. */
    "wisburg.list_company_reports": {
      input: {
        /**
         * The number of items per page, up to 100. Defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        first?: number;
        /** The pagination cursor from `pageInfo.endCursor` of the previous page. */
        after?: string;
        /** The search keyword. Without a keyword items are sorted by publication time descending; with one by relevance. */
        query?: string;
        /** The start of the time range as a Unix timestamp or an ISO 8601 string. */
        startTime?: string;
        /** The end of the time range as a Unix timestamp or an ISO 8601 string. */
        endTime?: string;
      };
      output: {
        /** The Wisburg request ID used for troubleshooting. */
        requestId: string;
        /** Research reports on this page. */
        items: Array<{
          /** The report ID. */
          id: number;
          /** The report title. */
          title: string;
          /** The publication time in ISO 8601 format. */
          datetime: string;
        }>;
        /** Cursor pagination details for the current page. */
        pageInfo: {
          /** The cursor for the next page; absent when there is no next page. */
          endCursor?: string;
        };
      };
    };
    /** List Wisburg earnings call minutes (电话会纪要) with cursor pagination, keyword search, and time filters. */
    "wisburg.list_earnings_calls": {
      input: {
        /**
         * The number of items per page, up to 100. Defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        first?: number;
        /** The pagination cursor from `pageInfo.endCursor` of the previous page. */
        after?: string;
        /** The search keyword. Without a keyword items are sorted by publication time descending; with one by relevance. */
        query?: string;
        /** The start of the time range as a Unix timestamp or an ISO 8601 string. */
        startTime?: string;
        /** The end of the time range as a Unix timestamp or an ISO 8601 string. */
        endTime?: string;
      };
      output: {
        /** The Wisburg request ID used for troubleshooting. */
        requestId: string;
        /** Research reports on this page. */
        items: Array<{
          /** The report ID. */
          id: number;
          /** The report title. */
          title: string;
          /** The publication time in ISO 8601 format. */
          datetime: string;
        }>;
        /** Cursor pagination details for the current page. */
        pageInfo: {
          /** The cursor for the next page; absent when there is no next page. */
          endCursor?: string;
        };
      };
    };
    /** List the Wisburg news feed (资讯流) with cursor pagination, keyword search, and time filters. Feed items carry the full Markdown body in `content`. */
    "wisburg.list_feed": {
      input: {
        /**
         * The number of items per page, up to 100. Defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        first?: number;
        /** The pagination cursor from `pageInfo.endCursor` of the previous page. */
        after?: string;
        /** The search keyword. Without a keyword items are sorted by publication time descending; with one by relevance. */
        query?: string;
        /** The start of the time range as a Unix timestamp or an ISO 8601 string. */
        startTime?: string;
        /** The end of the time range as a Unix timestamp or an ISO 8601 string. */
        endTime?: string;
      };
      output: {
        /** The Wisburg request ID used for troubleshooting. */
        requestId: string;
        /** News feed items on this page. */
        items: Array<{
          /** The feed item ID. */
          id: number;
          /** The feed item title. */
          title: string;
          /** The publication time in ISO 8601 format. */
          datetime: string;
          /** The feed item body in Markdown. */
          content: string;
        }>;
        /** Cursor pagination details for the current page. */
        pageInfo: {
          /** The cursor for the next page; absent when there is no next page. */
          endCursor?: string;
        };
      };
    };
    /** List the Wisburg image feed (图片流) with cursor pagination, keyword search, and time filters. */
    "wisburg.list_images": {
      input: {
        /**
         * The number of items per page, up to 100. Defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        first?: number;
        /** The pagination cursor from `pageInfo.endCursor` of the previous page. */
        after?: string;
        /** The search keyword. Without a keyword items are sorted by publication time descending; with one by relevance. */
        query?: string;
        /** The start of the time range as a Unix timestamp or an ISO 8601 string. */
        startTime?: string;
        /** The end of the time range as a Unix timestamp or an ISO 8601 string. */
        endTime?: string;
      };
      output: {
        /** The Wisburg request ID used for troubleshooting. */
        requestId: string;
        /** Image feed items on this page. */
        items: Array<{
          /** The image title. */
          title: string;
          /** The publication time in ISO 8601 format. */
          datetime: string;
          /** The image description. */
          description: string;
          /** The cover image URL. */
          cover_url: string;
        }>;
        /** Cursor pagination details for the current page. */
        pageInfo: {
          /** The cursor for the next page; absent when there is no next page. */
          endCursor?: string;
        };
      };
    };
    /** List the Wisburg AI market daily (AI 市场日报) with cursor pagination, keyword search, and time filters. */
    "wisburg.list_market_daily": {
      input: {
        /**
         * The number of items per page, up to 100. Defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        first?: number;
        /** The pagination cursor from `pageInfo.endCursor` of the previous page. */
        after?: string;
        /** The search keyword. Without a keyword items are sorted by publication time descending; with one by relevance. */
        query?: string;
        /** The start of the time range as a Unix timestamp or an ISO 8601 string. */
        startTime?: string;
        /** The end of the time range as a Unix timestamp or an ISO 8601 string. */
        endTime?: string;
      };
      output: {
        /** The Wisburg request ID used for troubleshooting. */
        requestId: string;
        /** Research reports on this page. */
        items: Array<{
          /** The report ID. */
          id: number;
          /** The report title. */
          title: string;
          /** The publication time in ISO 8601 format. */
          datetime: string;
        }>;
        /** Cursor pagination details for the current page. */
        pageInfo: {
          /** The cursor for the next page; absent when there is no next page. */
          endCursor?: string;
        };
      };
    };
    /** List Wisburg Mikko log entries (Mikko 日志), newest first. Each entry is a short Markdown note; the list already returns the full content. */
    "wisburg.list_mikko_logs": {
      input: {
        /**
         * The number of items per page, up to 100. Defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        first?: number;
        /** The pagination cursor from `pageInfo.endCursor` of the previous page. */
        after?: string;
        /** The search keyword. Without a keyword items are sorted by publication time descending; with one by relevance. */
        query?: string;
        /** The start of the time range as a Unix timestamp or an ISO 8601 string. */
        startTime?: string;
        /** The end of the time range as a Unix timestamp or an ISO 8601 string. */
        endTime?: string;
      };
      output: {
        /** The Wisburg request ID used for troubleshooting. */
        requestId: string;
        /** Mikko log entries on this page. */
        items: Array<{
          /** The log ID. */
          id: number;
          /** The publication time in ISO 8601 format. */
          datetime: string;
          /** The log body in Markdown. */
          content: string;
          /** Attached image URLs; empty when the log has no images. */
          images: Array<string>;
        }>;
        /** Cursor pagination details for the current page. */
        pageInfo: {
          /** The cursor for the next page; absent when there is no next page. */
          endCursor?: string;
        };
      };
    };
    /** List Wisburg research notes (研报笔记) with cursor pagination, keyword search, and time filters. */
    "wisburg.list_reports": {
      input: {
        /**
         * The number of items per page, up to 100. Defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        first?: number;
        /** The pagination cursor from `pageInfo.endCursor` of the previous page. */
        after?: string;
        /** The search keyword. Without a keyword items are sorted by publication time descending; with one by relevance. */
        query?: string;
        /** The start of the time range as a Unix timestamp or an ISO 8601 string. */
        startTime?: string;
        /** The end of the time range as a Unix timestamp or an ISO 8601 string. */
        endTime?: string;
      };
      output: {
        /** The Wisburg request ID used for troubleshooting. */
        requestId: string;
        /** Research reports on this page. */
        items: Array<{
          /** The report ID. */
          id: number;
          /** The report title. */
          title: string;
          /** The publication time in ISO 8601 format. */
          datetime: string;
        }>;
        /** Cursor pagination details for the current page. */
        pageInfo: {
          /** The cursor for the next page; absent when there is no next page. */
          endCursor?: string;
        };
      };
    };
  }
}
