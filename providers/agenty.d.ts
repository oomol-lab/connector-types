import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Insert one or more rows into one Agenty list. */
    "agenty.add_list_rows": {
      input: {
        /** The Agenty list identifier. */
        list_id: string | number;
        /**
         * The Agenty list rows to insert.
         * @minItems 1
         */
        rows: Array<Record<string, unknown>>;
      };
      output: {
        /** The status code returned by Agenty. */
        statusCode?: number;
        /** The message returned by Agenty. */
        message: string;
      };
    };
    /** Capture a screenshot for one web page and return a downloadable file. */
    "agenty.capture_screenshot": {
      input: {
        /**
         * The public HTTP or HTTPS URL to process.
         * @format uri
         */
        url: string;
      };
      output: {
        /** The generated screenshot file. */
        screenshot: {
          /** The generated file name. */
          name: string;
          /** The generated file MIME type. */
          mimetype: string;
          /** The transit URL for downloading the generated file. */
          s3url: string;
        };
      };
    };
    /** Delete all rows from one Agenty list. */
    "agenty.clear_list_rows": {
      input: {
        /** The Agenty list identifier. */
        list_id: string | number;
      };
      output: {
        /** The status code returned by Agenty. */
        statusCode?: number;
        /** The message returned by Agenty. */
        message: string;
      };
    };
    /** Convert one web page into a PDF document and return a downloadable file. */
    "agenty.convert_url_to_pdf": {
      input: {
        /**
         * The public HTTP or HTTPS URL to process.
         * @format uri
         */
        url: string;
      };
      output: {
        /** The generated PDF file. */
        pdf: {
          /** The generated file name. */
          name: string;
          /** The generated file MIME type. */
          mimetype: string;
          /** The transit URL for downloading the generated file. */
          s3url: string;
        };
      };
    };
    /** Clone one Agenty agent by agent identifier. */
    "agenty.copy_agent": {
      input: {
        /**
         * The Agenty agent identifier.
         * @minLength 1
         */
        agent_id: string;
      };
      output: {
        /** The cloned Agenty agent. */
        agent: {
          /** The Agenty agent identifier. */
          agent_id: string;
          /** The Agenty agent name. */
          name?: string;
          /** The Agenty agent description. */
          description?: string;
          /** The Agenty agent type. */
          type?: "scraping" | "changedetection" | "crawling" | "mapmonitoring" | "brandmonitoring";
          /** The tags assigned to the agent. */
          tags?: Array<string>;
          /** The Agenty agent version number. */
          version?: number;
          /** The Agenty agent configuration object. */
          config?: Record<string, unknown>;
          /** Whether the agent is public. */
          is_public?: boolean | number;
          /** Whether the agent is managed. */
          is_managed?: boolean | number;
          /** The creation timestamp of the agent. */
          created_at?: string;
          /** The update timestamp of the agent. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create one Agenty agent with the provided configuration. */
    "agenty.create_agent": {
      input: {
        /**
         * The Agenty agent name.
         * @minLength 1
         */
        name: string;
        /** The Agenty agent type. */
        type: "scraping" | "changedetection" | "crawling" | "mapmonitoring" | "brandmonitoring";
        /** The Agenty agent configuration object. */
        config: Record<string, unknown>;
        /** The Agenty agent description. */
        description?: string;
        /** The Agenty agent icon URL. */
        icon?: string;
        /** The Agenty agent tags. */
        tags?: Array<string>;
        /** Whether Agenty should start the agent immediately. */
        start?: boolean;
        /** The Agenty scripts configuration. */
        scripts?: Record<string, unknown>;
      };
      output: {
        /** The created Agenty agent. */
        agent: {
          /** The Agenty agent identifier. */
          agent_id: string;
          /** The Agenty agent name. */
          name?: string;
          /** The Agenty agent description. */
          description?: string;
          /** The Agenty agent type. */
          type?: "scraping" | "changedetection" | "crawling" | "mapmonitoring" | "brandmonitoring";
          /** The tags assigned to the agent. */
          tags?: Array<string>;
          /** The Agenty agent version number. */
          version?: number;
          /** The Agenty agent configuration object. */
          config?: Record<string, unknown>;
          /** Whether the agent is public. */
          is_public?: boolean | number;
          /** Whether the agent is managed. */
          is_managed?: boolean | number;
          /** The creation timestamp of the agent. */
          created_at?: string;
          /** The update timestamp of the agent. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create one Agenty list. */
    "agenty.create_list": {
      input: {
        /**
         * The Agenty list name.
         * @minLength 1
         */
        name: string;
        /** The Agenty list description. */
        description?: string;
      };
      output: {
        /** The created Agenty list. */
        list: {
          /** The Agenty list identifier. */
          list_id: string | number;
          /** The Agenty list name. */
          name?: string;
          /** The Agenty list description. */
          description?: string;
          /** The Agenty account identifier. */
          account_id?: number;
          /** The Agenty user identifier. */
          user_id?: number;
          /** The Agenty list creation timestamp. */
          created_at?: string;
          /** The Agenty list update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one Agenty agent by agent identifier. */
    "agenty.delete_agent": {
      input: {
        /**
         * The Agenty agent identifier.
         * @minLength 1
         */
        agent_id: string;
      };
      output: {
        /** The status code returned by Agenty. */
        statusCode?: number;
        /** The message returned by Agenty. */
        message: string;
      };
    };
    /** Delete one Agenty list row by list and row identifiers. */
    "agenty.delete_list_row": {
      input: {
        /** The Agenty list identifier. */
        list_id: string | number;
        /**
         * The Agenty list row identifier.
         * @minLength 1
         */
        row_id: string;
      };
      output: {
        /** The status code returned by Agenty. */
        statusCode?: number;
        /** The message returned by Agenty. */
        message: string;
      };
    };
    /** Delete multiple Agenty list rows by list identifier and row identifiers. */
    "agenty.delete_list_rows": {
      input: {
        /** The Agenty list identifier. */
        list_id: string | number;
        /**
         * The Agenty list row identifiers to delete.
         * @minItems 1
         */
        row_id: Array<string>;
      };
      output: {
        /** The status code returned by Agenty. */
        statusCode?: number;
        /** The message returned by Agenty. */
        message: string;
      };
    };
    /** Download one named Agenty job file and return a downloadable file. */
    "agenty.download_job_file": {
      input: {
        /**
         * The Agenty job identifier.
         * @exclusiveMinimum 0
         */
        job_id: number;
        /**
         * The Agenty job file name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The downloaded Agenty job file. */
        file: {
          /** The generated file name. */
          name: string;
          /** The generated file MIME type. */
          mimetype: string;
          /** The transit URL for downloading the generated file. */
          s3url: string;
        };
      };
    };
    /** Download one Agenty job export as raw text content. */
    "agenty.download_job_result": {
      input: {
        /**
         * The Agenty job identifier.
         * @exclusiveMinimum 0
         */
        job_id: number;
        /** The export format requested from Agenty. */
        format: "CSV" | "TSV" | "JSON";
        /**
         * The Agenty collection number to export.
         * @exclusiveMinimum 0
         */
        collection?: number;
        /** Whether Agenty should export the modified result set. */
        modified?: boolean;
        /**
         * The custom export file name requested from Agenty.
         * @minLength 1
         */
        filename?: string;
      };
      output: {
        /** The raw text content returned by Agenty. */
        content: string;
      };
    };
    /** Download all rows from one Agenty list as raw text content. */
    "agenty.download_list_rows": {
      input: {
        /** The Agenty list identifier. */
        list_id: string | number;
      };
      output: {
        /** The raw text content returned by Agenty. */
        content: string;
      };
    };
    /** Extract structured metadata such as JSON-LD, RDFa, microdata, and meta tags. */
    "agenty.extract_structured_data": {
      input: {
        /**
         * The public HTTP or HTTPS URL to process.
         * @format uri
         */
        url: string;
      };
      output: {
        /** The RDFa structured data extracted from the page. */
        rdfa: unknown;
        /** The JSON-LD scripts extracted from the page. */
        jsonld: unknown;
        /** The meta tags extracted from the page. */
        metatags: unknown;
        /** The microdata extracted from the page. */
        microdata: unknown;
      };
    };
    /** Get one Agenty agent by agent identifier. */
    "agenty.get_agent": {
      input: {
        /**
         * The Agenty agent identifier.
         * @minLength 1
         */
        agent_id: string;
      };
      output: {
        /** The Agenty agent returned by the request. */
        agent: {
          /** The Agenty agent identifier. */
          agent_id: string;
          /** The Agenty agent name. */
          name?: string;
          /** The Agenty agent description. */
          description?: string;
          /** The Agenty agent type. */
          type?: "scraping" | "changedetection" | "crawling" | "mapmonitoring" | "brandmonitoring";
          /** The tags assigned to the agent. */
          tags?: Array<string>;
          /** The Agenty agent version number. */
          version?: number;
          /** The Agenty agent configuration object. */
          config?: Record<string, unknown>;
          /** Whether the agent is public. */
          is_public?: boolean | number;
          /** Whether the agent is managed. */
          is_managed?: boolean | number;
          /** The creation timestamp of the agent. */
          created_at?: string;
          /** The update timestamp of the agent. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the current Agenty input configuration for one agent. */
    "agenty.get_agent_inputs": {
      input: {
        /**
         * The Agenty agent identifier.
         * @minLength 1
         */
        agent_id: string;
      };
      output: {
        /** The Agenty input configuration returned by the request. */
        input: {
          /** The Agenty input source type. */
          type: string;
          /** The upstream Agenty input source identifier. */
          id?: string;
          /** The upstream Agenty source field name. */
          field?: string;
          /** The Agenty collection index. */
          collection?: number;
          /** The Agenty input values. */
          data?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** List public Agenty agent templates with optional pagination and sorting parameters. */
    "agenty.get_agent_templates": {
      input: {
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * The field used for sorting the results.
         * @minLength 1
         */
        sort?: string;
        /** The sort order for the request. */
        order?: "asc" | "desc";
      };
      output: {
        /** The total number of Agenty templates available. */
        total: number;
        /** The page size returned by Agenty. */
        limit: number;
        /** The offset returned by Agenty. */
        offset: number;
        /** The number of Agenty templates returned in this page. */
        returned: number;
        /** The Agenty templates returned by the request. */
        templates: Array<{
          /** The Agenty template identifier. */
          agent_id: string;
          /** The Agenty template name. */
          name?: string;
          /** The Agenty template type. */
          type?: "scraping" | "changedetection" | "crawling" | "mapmonitoring" | "brandmonitoring";
          /** The Agenty template version number. */
          version?: number;
          /** Whether the template is public. */
          is_public?: boolean | number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get one Agenty job by job identifier. */
    "agenty.get_job": {
      input: {
        /**
         * The Agenty job identifier.
         * @exclusiveMinimum 0
         */
        job_id: number;
      };
      output: {
        /** The Agenty job returned by the request. */
        job: {
          /** The Agenty job identifier. */
          job_id: number;
          /** The Agenty agent identifier associated with the job. */
          agent_id?: string;
          /** The Agenty job type. */
          type?: string;
          /** The Agenty job status. */
          status?: string;
          /** The Agenty job priority. */
          priority?: number;
          /** The Agenty account identifier. */
          account_id?: number;
          /** The Agenty job creation timestamp. */
          created_at?: string;
          /** The Agenty job start timestamp. */
          started_at?: string;
          /** The Agenty job stop timestamp. */
          stopped_at?: string;
          /** The Agenty job completion timestamp. */
          completed_at?: string;
          /** The total pages scheduled for the job. */
          pages_total?: number;
          /** The processed pages count for the job. */
          pages_processed?: number;
          /** The succeeded pages count for the job. */
          pages_succeeded?: number;
          /** The failed pages count for the job. */
          pages_failed?: number;
          /** The page credits consumed by the job. */
          pages_credit?: number;
          /** Whether the job is scheduled. */
          is_scheduled?: boolean | number;
          /** The Agenty queue time string. */
          queue_time?: string;
          /** The Agenty run duration string. */
          run_duration?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get raw log content for one Agenty job. */
    "agenty.get_job_logs": {
      input: {
        /**
         * The Agenty job identifier.
         * @exclusiveMinimum 0
         */
        job_id: number;
        /**
         * The maximum number of log lines to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The number of log lines to skip before returning results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The raw text content returned by Agenty. */
        content: string;
      };
    };
    /** Get paginated result rows for one Agenty job. */
    "agenty.get_job_result": {
      input: {
        /**
         * The Agenty job identifier.
         * @exclusiveMinimum 0
         */
        job_id: number;
        /**
         * The maximum number of result rows to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The number of result rows to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * The field used for sorting the Agenty job results.
         * @minLength 1
         */
        sort?: string;
        /** The sort order for the Agenty job results. */
        order?: "asc" | "desc";
        /**
         * The search term used to filter Agenty job results.
         * @minLength 1
         */
        search?: string;
        /**
         * The Agenty result format selector.
         * @minLength 1
         */
        format?: string;
        /** The Agenty collection selector. */
        collection?: string | number;
      };
      output: {
        /** The total number of Agenty result rows available. */
        total: number;
        /** The page size returned by Agenty. */
        limit: number;
        /** The offset returned by Agenty. */
        offset: number;
        /** The number of Agenty result rows returned in this page. */
        returned: number;
        /** The Agenty result rows returned by the request. */
        result: Array<Record<string, unknown>>;
      };
    };
    /** Get one Agenty list by list identifier. */
    "agenty.get_list": {
      input: {
        /** The Agenty list identifier. */
        list_id: string | number;
      };
      output: {
        /** The Agenty list returned by the request. */
        list: {
          /** The Agenty list identifier. */
          list_id: string | number;
          /** The Agenty list name. */
          name?: string;
          /** The Agenty list description. */
          description?: string;
          /** The Agenty account identifier. */
          account_id?: number;
          /** The Agenty user identifier. */
          user_id?: number;
          /** The Agenty list creation timestamp. */
          created_at?: string;
          /** The Agenty list update timestamp. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Agenty list row by list and row identifiers. */
    "agenty.get_list_row": {
      input: {
        /** The Agenty list identifier. */
        list_id: string | number;
        /**
         * The Agenty list row identifier.
         * @minLength 1
         */
        row_id: string;
      };
      output: {
        /** The Agenty list row returned by the request. */
        row: {
          /** The Agenty list row identifier. */
          _id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch the rendered HTML content for one web page. */
    "agenty.get_page_content": {
      input: {
        /**
         * The public HTTP or HTTPS URL to process.
         * @format uri
         */
        url: string;
      };
      output: {
        /** The rendered HTML content returned by Agenty. */
        content: string;
      };
    };
    /** Return the ordered redirect chain for one URL. */
    "agenty.get_redirects": {
      input: {
        /**
         * The public HTTP or HTTPS URL to process.
         * @format uri
         */
        url: string;
      };
      output: {
        /** The ordered redirect steps returned by Agenty. */
        redirects: Array<{
          /** The URL at this redirect step. */
          url: string;
          /** The HTTP status code at this redirect step. */
          status: number;
        }>;
      };
    };
    /** List Agenty agents with optional pagination and sorting parameters. */
    "agenty.list_agents": {
      input: {
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * The field used for sorting the results.
         * @minLength 1
         */
        sort?: string;
        /** The sort order for the request. */
        order?: "asc" | "desc";
      };
      output: {
        /** The total number of Agenty agents available. */
        total: number;
        /** The page size returned by Agenty. */
        limit: number;
        /** The offset returned by Agenty. */
        offset: number;
        /** The number of Agenty agents returned in this page. */
        returned: number;
        /** The Agenty agents returned by the request. */
        agents: Array<{
          /** The Agenty agent identifier. */
          agent_id: string;
          /** The Agenty agent name. */
          name?: string;
          /** The Agenty agent description. */
          description?: string;
          /** The Agenty agent type. */
          type?: "scraping" | "changedetection" | "crawling" | "mapmonitoring" | "brandmonitoring";
          /** The tags assigned to the agent. */
          tags?: Array<string>;
          /** The Agenty agent version number. */
          version?: number;
          /** The Agenty agent configuration object. */
          config?: Record<string, unknown>;
          /** Whether the agent is public. */
          is_public?: boolean | number;
          /** Whether the agent is managed. */
          is_managed?: boolean | number;
          /** The creation timestamp of the agent. */
          created_at?: string;
          /** The update timestamp of the agent. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the files generated for one Agenty job. */
    "agenty.list_job_files": {
      input: {
        /**
         * The Agenty job identifier.
         * @exclusiveMinimum 0
         */
        job_id: number;
      };
      output: {
        /** The Agenty job files returned by the request. */
        files: Array<{
          /** The Agenty job file name. */
          name: string;
          /** The Agenty job file size in bytes. */
          size: number;
        }>;
      };
    };
    /** List Agenty jobs with optional pagination, sorting, and agent filtering parameters. */
    "agenty.list_jobs": {
      input: {
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * The field used for sorting the results.
         * @minLength 1
         */
        sort?: string;
        /** The sort order for the request. */
        order?: "asc" | "desc";
        /**
         * The Agenty agent identifier used to filter jobs.
         * @minLength 1
         */
        agent_id?: string;
      };
      output: {
        /** The total number of Agenty jobs available. */
        total: number;
        /** The page size returned by Agenty. */
        limit: number;
        /** The offset returned by Agenty. */
        offset: number;
        /** The number of Agenty jobs returned in this page. */
        returned: number;
        /** The Agenty jobs returned by the request. */
        jobs: Array<{
          /** The Agenty job identifier. */
          job_id: number;
          /** The Agenty agent identifier associated with the job. */
          agent_id?: string;
          /** The Agenty job type. */
          type?: string;
          /** The Agenty job status. */
          status?: string;
          /** The Agenty job priority. */
          priority?: number;
          /** The Agenty account identifier. */
          account_id?: number;
          /** The Agenty job creation timestamp. */
          created_at?: string;
          /** The Agenty job start timestamp. */
          started_at?: string;
          /** The Agenty job stop timestamp. */
          stopped_at?: string;
          /** The Agenty job completion timestamp. */
          completed_at?: string;
          /** The total pages scheduled for the job. */
          pages_total?: number;
          /** The processed pages count for the job. */
          pages_processed?: number;
          /** The succeeded pages count for the job. */
          pages_succeeded?: number;
          /** The failed pages count for the job. */
          pages_failed?: number;
          /** The page credits consumed by the job. */
          pages_credit?: number;
          /** Whether the job is scheduled. */
          is_scheduled?: boolean | number;
          /** The Agenty queue time string. */
          queue_time?: string;
          /** The Agenty run duration string. */
          run_duration?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Start one Agenty job for an existing agent. */
    "agenty.start_job": {
      input: {
        /**
         * The Agenty agent identifier.
         * @minLength 1
         */
        agent_id: string;
      };
      output: {
        /** The started Agenty job. */
        job: {
          /** The Agenty job identifier. */
          job_id: number;
          /** The Agenty agent identifier associated with the job. */
          agent_id?: string;
          /** The Agenty job type. */
          type?: string;
          /** The Agenty job status. */
          status?: string;
          /** The Agenty job priority. */
          priority?: number;
          /** The Agenty account identifier. */
          account_id?: number;
          /** The Agenty job creation timestamp. */
          created_at?: string;
          /** The Agenty job start timestamp. */
          started_at?: string;
          /** The Agenty job stop timestamp. */
          stopped_at?: string;
          /** The Agenty job completion timestamp. */
          completed_at?: string;
          /** The total pages scheduled for the job. */
          pages_total?: number;
          /** The processed pages count for the job. */
          pages_processed?: number;
          /** The succeeded pages count for the job. */
          pages_succeeded?: number;
          /** The failed pages count for the job. */
          pages_failed?: number;
          /** The page credits consumed by the job. */
          pages_credit?: number;
          /** Whether the job is scheduled. */
          is_scheduled?: boolean | number;
          /** The Agenty queue time string. */
          queue_time?: string;
          /** The Agenty run duration string. */
          run_duration?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Stop one running Agenty job by job identifier. */
    "agenty.stop_job": {
      input: {
        /**
         * The Agenty job identifier.
         * @exclusiveMinimum 0
         */
        job_id: number;
      };
      output: {
        /** The stopped Agenty job payload returned by the request. */
        job: {
          /** The Agenty job identifier. */
          job_id: number;
          /** The Agenty agent identifier associated with the job. */
          agent_id?: string;
          /** The Agenty job type. */
          type?: string;
          /** The Agenty job status. */
          status?: string;
          /** The Agenty job priority. */
          priority?: number;
          /** The Agenty account identifier. */
          account_id?: number;
          /** The Agenty job creation timestamp. */
          created_at?: string;
          /** The Agenty job start timestamp. */
          started_at?: string;
          /** The Agenty job stop timestamp. */
          stopped_at?: string;
          /** The Agenty job completion timestamp. */
          completed_at?: string;
          /** The total pages scheduled for the job. */
          pages_total?: number;
          /** The processed pages count for the job. */
          pages_processed?: number;
          /** The succeeded pages count for the job. */
          pages_succeeded?: number;
          /** The failed pages count for the job. */
          pages_failed?: number;
          /** The page credits consumed by the job. */
          pages_credit?: number;
          /** Whether the job is scheduled. */
          is_scheduled?: boolean | number;
          /** The Agenty queue time string. */
          queue_time?: string;
          /** The Agenty run duration string. */
          run_duration?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update one Agenty agent by agent identifier. */
    "agenty.update_agent": {
      input: {
        /**
         * The Agenty agent identifier.
         * @minLength 1
         */
        agent_id: string;
        /**
         * The Agenty agent name.
         * @minLength 1
         */
        name?: string;
        /** The Agenty agent type. */
        type?: "scraping" | "changedetection" | "crawling" | "mapmonitoring" | "brandmonitoring";
        /** The Agenty agent configuration object. */
        config?: Record<string, unknown>;
        /** The Agenty agent description. */
        description?: string;
        /** The Agenty agent icon URL. */
        icon?: string;
        /** The Agenty agent tags. */
        tags?: Array<string>;
        /** The Agenty scripts configuration. */
        scripts?: Record<string, unknown>;
      };
      output: {
        /** The updated Agenty agent payload returned by the request. */
        agent: {
          /** The Agenty agent identifier. */
          agent_id: string;
          /** The Agenty agent name. */
          name?: string;
          /** The Agenty agent description. */
          description?: string;
          /** The Agenty agent type. */
          type?: "scraping" | "changedetection" | "crawling" | "mapmonitoring" | "brandmonitoring";
          /** The tags assigned to the agent. */
          tags?: Array<string>;
          /** The Agenty agent version number. */
          version?: number;
          /** The Agenty agent configuration object. */
          config?: Record<string, unknown>;
          /** Whether the agent is public. */
          is_public?: boolean | number;
          /** Whether the agent is managed. */
          is_managed?: boolean | number;
          /** The creation timestamp of the agent. */
          created_at?: string;
          /** The update timestamp of the agent. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update the Agenty input configuration for one agent. */
    "agenty.update_agent_inputs": {
      input: {
        /**
         * The Agenty agent identifier.
         * @minLength 1
         */
        agent_id: string;
        /**
         * The Agenty input source type.
         * @minLength 1
         */
        type: string;
        /** The upstream Agenty input source identifier. */
        id?: string;
        /** The upstream Agenty source field name. */
        field?: string;
        /** The Agenty collection index. */
        collection?: number;
        /** The Agenty input values. */
        data?: Array<string>;
      };
      output: {
        /** The status code returned by Agenty. */
        statusCode?: number;
        /** The message returned by Agenty. */
        message: string;
      };
    };
  }
}
