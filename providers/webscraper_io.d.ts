import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Web Scraper Cloud scraping job for one sitemap. */
    "webscraper_io.create_scraping_job": {
      input: {
        /**
         * The numeric sitemap ID to scrape.
         * @exclusiveMinimum 0
         */
        sitemap_id: number;
        /** The scraping driver to use for the job. */
        driver?: "fast" | "fulljs";
        /**
         * The page load delay in milliseconds for the scraping job.
         * @minimum 0
         */
        page_load_delay?: number;
        /**
         * The request interval in milliseconds for the scraping job.
         * @minimum 0
         */
        request_interval?: number;
        /**
         * The proxy value such as datacenter-us or residential-us for the scraping job.
         * @minLength 1
         * @pattern \S
         */
        proxy?: string;
        /**
         * The optional start URLs that override the sitemap start URLs for this job.
         * @minItems 1
         */
        start_urls?: Array<string>;
        /**
         * The optional custom scraping job identifier included in webhook notifications.
         * @minLength 1
         * @pattern \S
         */
        custom_id?: string;
      };
      output: {
        /**
         * The numeric scraping job ID created by Web Scraper Cloud.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The custom scraping job identifier when provided. */
        custom_id: string | null;
      };
    };
    /** Create a new Web Scraper Cloud sitemap from a sitemap JSON document. */
    "webscraper_io.create_sitemap": {
      input: {
        /**
         * The sitemap identifier inside the sitemap JSON.
         * @minLength 1
         * @pattern \S
         */
        _id: string;
        /**
         * The sitemap start URLs used by Web Scraper Cloud.
         * @minItems 1
         */
        startUrl: Array<string>;
        /**
         * The selector definitions included in the sitemap JSON.
         * @minItems 1
         */
        selectors: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
      output: {
        /**
         * The numeric sitemap ID created by Web Scraper Cloud.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Delete a Web Scraper Cloud scraping job by numeric scraping job ID. */
    "webscraper_io.delete_scraping_job": {
      input: {
        /**
         * The numeric scraping job ID to delete.
         * @exclusiveMinimum 0
         */
        scraping_job_id: number;
      };
      output: {
        /** Whether Web Scraper Cloud confirmed the scraping job deletion. */
        ok: boolean;
      };
    };
    /** Delete a Web Scraper Cloud sitemap by numeric sitemap ID. */
    "webscraper_io.delete_sitemap": {
      input: {
        /**
         * The numeric sitemap ID to delete.
         * @exclusiveMinimum 0
         */
        sitemap_id: number;
      };
      output: {
        /** Whether Web Scraper Cloud confirmed the sitemap deletion. */
        ok: boolean;
      };
    };
    /** Download one Web Scraper Cloud scraping job result in JSON Lines format. */
    "webscraper_io.download_scraping_job_json": {
      input: {
        /**
         * The numeric scraping job ID to download.
         * @exclusiveMinimum 0
         */
        scraping_job_id: number;
      };
      output: {
        /** The parsed JSON objects returned from the JSON Lines export. */
        rows: Array<Record<string, unknown>>;
        /**
         * The number of parsed JSON rows returned by the export.
         * @minimum 0
         */
        row_count: number;
      };
    };
    /** Get the current Web Scraper Cloud account profile for the connected API token. */
    "webscraper_io.get_account_info": {
      input: Record<string, never>;
      output: {
        /** The account email address. */
        email: string | null;
        /** The account first name. */
        firstname: string | null;
        /** The account last name. */
        lastname: string | null;
        /** The remaining Web Scraper Cloud page credits. */
        page_credits: number | null;
        /** The raw account object returned by Web Scraper Cloud. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Web Scraper Cloud scraping job by numeric scraping job ID. */
    "webscraper_io.get_scraping_job": {
      input: {
        /**
         * The numeric scraping job ID to fetch.
         * @exclusiveMinimum 0
         */
        scraping_job_id: number;
      };
      output: {
        /**
         * The numeric scraping job ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The custom scraping job identifier when provided. */
        custom_id: string | null;
        /** The sitemap name associated with the scraping job. */
        sitemap_name: string | null;
        /** The scraping job status returned by Web Scraper Cloud. */
        status: string | null;
        /** The numeric sitemap ID associated with the scraping job. */
        sitemap_id: number | null;
        /** Whether the scraping job was created as a test run. */
        test_run: number | null;
        /** The number of jobs scheduled for the scraping run. */
        jobs_scheduled: number | null;
        /** The number of jobs executed for the scraping run. */
        jobs_executed: number | null;
        /** The number of failed jobs in the scraping run. */
        jobs_failed: number | null;
        /** The number of empty-result jobs in the scraping run. */
        jobs_empty: number | null;
        /** The number of no-value-result jobs in the scraping run. */
        jobs_no_value: number | null;
        /** The number of stored records produced by the scraping run. */
        stored_record_count: number | null;
        /** The configured request interval in milliseconds for the scraping run. */
        request_interval: number | null;
        /** The configured page load delay in milliseconds for the scraping run. */
        page_load_delay: number | null;
        /** The scraping driver returned by Web Scraper Cloud. */
        driver: string | null;
        /** Whether the scraping job was started by the sitemap scheduler. */
        scheduled: number | null;
        /** The Unix timestamp when the scraping job was created. */
        time_created: number | null;
        /** The scraping duration in seconds when the run has completed. */
        scraping_duration: number | null;
        /** The raw scraping job object returned by Web Scraper Cloud. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Web Scraper Cloud sitemap by numeric sitemap ID. */
    "webscraper_io.get_sitemap": {
      input: {
        /**
         * The numeric sitemap ID to fetch.
         * @exclusiveMinimum 0
         */
        sitemap_id: number;
      };
      output: {
        /**
         * The numeric sitemap ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The sitemap name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** The sitemap JSON document sent to or returned by Web Scraper Cloud. */
        sitemap: {
          /**
           * The sitemap identifier inside the sitemap JSON.
           * @minLength 1
           * @pattern \S
           */
          _id: string;
          /**
           * The sitemap start URLs used by Web Scraper Cloud.
           * @minItems 1
           */
          startUrl: Array<string>;
          /**
           * The selector definitions included in the sitemap JSON.
           * @minItems 1
           */
          selectors: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /**
         * The raw sitemap JSON string returned by Web Scraper Cloud.
         * @minLength 1
         * @pattern \S
         */
        sitemap_json: string;
      };
    };
    /** List Web Scraper Cloud scraping jobs with optional page, sitemap, and tag filters. */
    "webscraper_io.list_scraping_jobs": {
      input: {
        /**
         * The one-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The optional numeric sitemap ID used to filter jobs.
         * @exclusiveMinimum 0
         */
        sitemap_id?: number;
        /**
         * The optional scraping job tag used to filter results.
         * @minLength 1
         * @pattern \S
         */
        tag?: string;
      };
      output: {
        /** The scraping job records returned by Web Scraper Cloud. */
        items: Array<{
          /**
           * The numeric scraping job ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The custom scraping job identifier when provided. */
          custom_id: string | null;
          /** The sitemap name associated with the scraping job. */
          sitemap_name: string | null;
          /** The scraping job status returned by Web Scraper Cloud. */
          status: string | null;
          /** The numeric sitemap ID associated with the scraping job. */
          sitemap_id: number | null;
          /** Whether the scraping job was created as a test run. */
          test_run: number | null;
          /** The number of jobs scheduled for the scraping run. */
          jobs_scheduled: number | null;
          /** The number of jobs executed for the scraping run. */
          jobs_executed: number | null;
          /** The number of failed jobs in the scraping run. */
          jobs_failed: number | null;
          /** The number of empty-result jobs in the scraping run. */
          jobs_empty: number | null;
          /** The number of no-value-result jobs in the scraping run. */
          jobs_no_value: number | null;
          /** The number of stored records produced by the scraping run. */
          stored_record_count: number | null;
          /** The configured request interval in milliseconds for the scraping run. */
          request_interval: number | null;
          /** The configured page load delay in milliseconds for the scraping run. */
          page_load_delay: number | null;
          /** The scraping driver returned by Web Scraper Cloud. */
          driver: string | null;
          /** Whether the scraping job was started by the sitemap scheduler. */
          scheduled: number | null;
          /** The Unix timestamp when the scraping job was created. */
          time_created: number | null;
          /** The scraping duration in seconds when the run has completed. */
          scraping_duration: number | null;
          /** The raw scraping job object returned by Web Scraper Cloud. */
          raw: Record<string, unknown>;
        }>;
        /**
         * The current result page returned by Web Scraper Cloud.
         * @exclusiveMinimum 0
         */
        current_page: number;
        /**
         * The last available result page returned by Web Scraper Cloud.
         * @exclusiveMinimum 0
         */
        last_page: number;
        /**
         * The total number of records available for the query.
         * @minimum 0
         */
        total: number;
        /**
         * The number of records returned per result page.
         * @minimum 0
         */
        per_page: number;
      };
    };
    /** List Web Scraper Cloud sitemaps with optional page and tag filters. */
    "webscraper_io.list_sitemaps": {
      input: {
        /**
         * The one-based page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The sitemap or scraping job tag used to filter results.
         * @minLength 1
         * @pattern \S
         */
        tag?: string;
      };
      output: {
        /** The sitemap summaries returned by Web Scraper Cloud. */
        items: Array<{
          /**
           * The numeric sitemap ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The sitemap name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
        }>;
        /**
         * The current result page returned by Web Scraper Cloud.
         * @exclusiveMinimum 0
         */
        current_page: number;
        /**
         * The last available result page returned by Web Scraper Cloud.
         * @exclusiveMinimum 0
         */
        last_page: number;
        /**
         * The total number of records available for the query.
         * @minimum 0
         */
        total: number;
        /**
         * The number of records returned per result page.
         * @minimum 0
         */
        per_page: number;
      };
    };
    /** Update an existing Web Scraper Cloud sitemap by numeric sitemap ID. */
    "webscraper_io.update_sitemap": {
      input: {
        /**
         * The numeric sitemap ID to update.
         * @exclusiveMinimum 0
         */
        sitemap_id: number;
        /**
         * The sitemap identifier inside the sitemap JSON.
         * @minLength 1
         * @pattern \S
         */
        _id: string;
        /**
         * The sitemap start URLs used by Web Scraper Cloud.
         * @minItems 1
         */
        startUrl: Array<string>;
        /**
         * The selector definitions included in the sitemap JSON.
         * @minItems 1
         */
        selectors: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
      output: {
        /** Whether Web Scraper Cloud confirmed the sitemap update. */
        ok: boolean;
      };
    };
  }
}
