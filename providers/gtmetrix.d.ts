import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current GTmetrix account status, credits, and plan capabilities. */
    "gtmetrix.get_account_status": {
      input: Record<string, never>;
      output: {
        /** The GTmetrix account status. */
        status: {
          /** The remaining GTmetrix API credits. */
          api_credits?: number;
          /** A UNIX timestamp in seconds returned by the GTmetrix API. */
          api_refill?: number;
          /** The number of API credits restored on the next refill. */
          api_refill_amount?: number;
          /** The GTmetrix plan type. */
          account_type?: string;
          /** Whether the account can use GTmetrix PRO analysis options. */
          account_pro_analysis_options_access?: boolean;
          /** Whether the account can use GTmetrix PRO locations. */
          account_pro_locations_access?: boolean;
          /** Whether the account can generate white-label PDF reports. */
          account_whitelabel_pdf_access?: boolean;
          /** The GTmetrix PRO team role returned for the account, when present. */
          account_pro_team_role?: string;
        };
      };
    };
    /** Get a single GTmetrix browser by ID. */
    "gtmetrix.get_browser": {
      input: {
        /**
         * The GTmetrix browser ID.
         * @minLength 1
         */
        browser_id: string;
      };
      output: {
        /** The GTmetrix browser resource. */
        browser: {
          /** The GTmetrix resource type. */
          type?: "browser";
          /**
           * The GTmetrix browser ID.
           * @minLength 1
           */
          id?: string;
          /** The GTmetrix browser attributes. */
          attributes: {
            /** The display name of the GTmetrix browser. */
            name?: string;
            /** The GTmetrix short browser identifier, such as chrome or firefox. */
            browser?: string;
            /** The GTmetrix browser platform, such as desktop or android. */
            platform?: string;
            /** The GTmetrix browser device label. */
            device?: string;
            /** Whether the browser is the default browser for the account or location. */
            default?: boolean;
            /** Whether the browser supports AdBlock. */
            adblock?: boolean;
            /** Whether the browser supports Lighthouse analysis. */
            lighthouse?: boolean;
            /** Whether the browser supports custom cookies. */
            cookies?: boolean;
            /** Whether the browser supports custom DNS. */
            dns?: boolean;
            /** Whether the browser supports allow or block URL filtering. */
            filtering?: boolean;
            /** Whether the browser supports HTTP access authentication. */
            http_auth?: boolean;
            /** Whether the browser supports custom viewport resolution settings. */
            resolution?: boolean;
            /** Whether the browser supports connection throttling. */
            throttle?: boolean;
            /** Whether the browser supports a custom user agent string. */
            user_agent?: boolean;
            /** Whether the browser supports video capture. */
            video?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get the latest GTmetrix report associated with a page. */
    "gtmetrix.get_latest_page_report": {
      input: {
        /**
         * The GTmetrix page slug identifier.
         * @minLength 1
         */
        page_id: string;
      };
      output: {
        /** The latest GTmetrix report resource for the page. */
        report: {
          /** The GTmetrix resource type. */
          type?: "report";
          /**
           * The GTmetrix report slug identifier.
           * @minLength 1
           */
          id?: string;
          /** The GTmetrix report attributes. */
          attributes: {
            /**
             * The GTmetrix test ID.
             * @minLength 1
             */
            test?: string;
            /**
             * The GTmetrix page slug identifier.
             * @minLength 1
             */
            page?: string;
            /** The analyzed page URL. */
            url?: string;
            /**
             * The GTmetrix location ID.
             * @minLength 1
             */
            location?: string;
            /**
             * The GTmetrix browser ID.
             * @minLength 1
             */
            browser?: string;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            created?: number;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            expires?: number;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            finished?: number;
            /** The source of the GTmetrix test or report. */
            source?: "api" | "on-demand" | "monitored";
            /** The HTML load time or TTFB in milliseconds. */
            html_load_time?: number;
            /** The HTML transfer size in bytes. */
            html_bytes?: number;
            /** The page load time in milliseconds. */
            page_load_time?: number;
            /** The total page transfer size in bytes. */
            page_bytes?: number;
            /** The total number of requests required to load the page. */
            page_requests?: number;
            /** The total redirect duration in milliseconds. */
            redirect_duration?: number;
            /** The GTmetrix connection duration in milliseconds. */
            connect_duration?: number;
            /** The backend wait duration in milliseconds. */
            backend_duration?: number;
            /** The time to first byte in milliseconds. */
            time_to_first_byte?: number;
            /** The first paint time in milliseconds. */
            first_paint_time?: number;
            /** The first contentful paint in milliseconds. */
            first_contentful_paint?: number;
            /** The DOM interactive time in milliseconds. */
            dom_interactive_time?: number;
            /** The DOMContentLoaded event timestamp in milliseconds. */
            dom_content_loaded_time?: number;
            /** The DOMContentLoaded handler duration in milliseconds. */
            dom_content_loaded_duration?: number;
            /** The window.onload timestamp in milliseconds. */
            onload_time?: number;
            /** The window.onload handler duration in milliseconds. */
            onload_duration?: number;
            /** The fully loaded time in milliseconds. */
            fully_loaded_time?: number;
            /** The GTmetrix RUM speed index. */
            rum_speed_index?: number;
            /** The GTmetrix speed index. */
            speed_index?: number;
            /** The CPU time reported by GTmetrix. */
            cpu_time?: number;
            /** The overall GTmetrix grade for the report. */
            gtmetrix_grade?: string;
            /** The overall GTmetrix score. */
            gtmetrix_score?: number;
            /** The GTmetrix performance score. */
            performance_score?: number;
            /** The GTmetrix structure score. */
            structure_score?: number;
            /** The PageSpeed score. */
            pagespeed_score?: number;
            /** The YSlow score. */
            yslow_score?: number;
            /** The largest contentful paint in milliseconds. */
            largest_contentful_paint?: number;
            /** The time to interactive in milliseconds. */
            time_to_interactive?: number;
            /** The total blocking time in milliseconds. */
            total_blocking_time?: number;
            /** The cumulative layout shift score. */
            cumulative_layout_shift?: number;
            [key: string]: unknown;
          };
          /** The GTmetrix links embedded on the report resource. */
          links?: {
            /** The GTmetrix API URL for the related location. */
            location?: string;
            /** The GTmetrix API URL for the related browser. */
            browser?: string;
            /** The public GTmetrix report URL. */
            report_url?: string;
            /** The GTmetrix API URL for the report analysis options. */
            analysis_options?: string;
            /** The GTmetrix API URL for the report screenshot resource. */
            screenshot?: string;
            /** The GTmetrix API URL for the report HAR resource. */
            har?: string;
            /** The GTmetrix API URL for the JSON resource summary. */
            resource_summary?: string;
            /** The GTmetrix API URL for the related test. */
            test?: string;
            /** The GTmetrix API URL for the Lighthouse JSON resource. */
            lighthouse?: string;
            /** The GTmetrix API URL for the filmstrip JSON resource. */
            filmstrip?: string;
            /** The GTmetrix API URL for the optimized images archive. */
            optimized_images?: string;
            /** The GTmetrix API URL for the video resource. */
            video?: string;
            /** The GTmetrix API URL for the PDF report. */
            report_pdf?: string;
            /** The GTmetrix API URL for the full PDF report. */
            report_pdf_full?: string;
            /** The GTmetrix API URL for the PageSpeed JSON resource. */
            pagespeed?: string;
            /** The GTmetrix API URL for the PageSpeed files archive. */
            pagespeed_files?: string;
            /** The GTmetrix API URL for the YSlow JSON resource. */
            yslow?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get a single GTmetrix test location by ID. */
    "gtmetrix.get_location": {
      input: {
        /**
         * The GTmetrix location ID.
         * @minLength 1
         */
        location_id: string;
      };
      output: {
        /** The GTmetrix location resource. */
        location: {
          /** The GTmetrix resource type. */
          type?: "location";
          /**
           * The GTmetrix location ID.
           * @minLength 1
           */
          id?: string;
          /** The GTmetrix location attributes. */
          attributes: {
            /** The display name of the GTmetrix location. */
            name?: string;
            /** The region label of the GTmetrix location. */
            region?: string;
            /** Whether the location is the default GTmetrix location. */
            default?: boolean;
            /** Whether the connected account can use this GTmetrix location. */
            account_has_access?: boolean;
            /** The browser IDs supported by this GTmetrix location. */
            browsers?: Array<string>;
            /** The IP addresses assigned to the GTmetrix location. */
            ips?: Array<string>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get a single GTmetrix page by slug. */
    "gtmetrix.get_page": {
      input: {
        /**
         * The GTmetrix page slug identifier.
         * @minLength 1
         */
        page_id: string;
      };
      output: {
        /** The GTmetrix page resource. */
        page: {
          /** The GTmetrix resource type. */
          type?: "page";
          /**
           * The GTmetrix page slug identifier.
           * @minLength 1
           */
          id?: string;
          /** The GTmetrix page attributes. */
          attributes: {
            /** The tested page URL. */
            url?: string;
            /**
             * The GTmetrix location ID.
             * @minLength 1
             */
            location?: string;
            /**
             * The GTmetrix browser ID.
             * @minLength 1
             */
            browser?: string;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            created?: number;
            /**
             * The GTmetrix report slug identifier.
             * @minLength 1
             */
            latest_report?: string;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            latest_report_time?: number;
            /** The number of reports on the page. */
            report_count?: number;
            /** Whether the GTmetrix page is monitored and at which frequency. */
            monitored?: "no" | "hourly" | "daily" | "weekly" | "monthly";
            [key: string]: unknown;
          };
          /** The GTmetrix links embedded on the page resource. */
          links?: {
            /** The GTmetrix API URL for the latest report on the page. */
            latest_report?: string;
            /** The GTmetrix API URL for retesting the page. */
            retest?: string;
            /** The GTmetrix API URL for the report list on the page. */
            reports?: string;
            /** The GTmetrix API URL for the related location. */
            location?: string;
            /** The GTmetrix API URL for the related browser. */
            browser?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get a single GTmetrix report by slug. */
    "gtmetrix.get_report": {
      input: {
        /**
         * The GTmetrix report slug identifier.
         * @minLength 1
         */
        report_slug: string;
      };
      output: {
        /** The GTmetrix report resource. */
        report: {
          /** The GTmetrix resource type. */
          type?: "report";
          /**
           * The GTmetrix report slug identifier.
           * @minLength 1
           */
          id?: string;
          /** The GTmetrix report attributes. */
          attributes: {
            /**
             * The GTmetrix test ID.
             * @minLength 1
             */
            test?: string;
            /**
             * The GTmetrix page slug identifier.
             * @minLength 1
             */
            page?: string;
            /** The analyzed page URL. */
            url?: string;
            /**
             * The GTmetrix location ID.
             * @minLength 1
             */
            location?: string;
            /**
             * The GTmetrix browser ID.
             * @minLength 1
             */
            browser?: string;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            created?: number;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            expires?: number;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            finished?: number;
            /** The source of the GTmetrix test or report. */
            source?: "api" | "on-demand" | "monitored";
            /** The HTML load time or TTFB in milliseconds. */
            html_load_time?: number;
            /** The HTML transfer size in bytes. */
            html_bytes?: number;
            /** The page load time in milliseconds. */
            page_load_time?: number;
            /** The total page transfer size in bytes. */
            page_bytes?: number;
            /** The total number of requests required to load the page. */
            page_requests?: number;
            /** The total redirect duration in milliseconds. */
            redirect_duration?: number;
            /** The GTmetrix connection duration in milliseconds. */
            connect_duration?: number;
            /** The backend wait duration in milliseconds. */
            backend_duration?: number;
            /** The time to first byte in milliseconds. */
            time_to_first_byte?: number;
            /** The first paint time in milliseconds. */
            first_paint_time?: number;
            /** The first contentful paint in milliseconds. */
            first_contentful_paint?: number;
            /** The DOM interactive time in milliseconds. */
            dom_interactive_time?: number;
            /** The DOMContentLoaded event timestamp in milliseconds. */
            dom_content_loaded_time?: number;
            /** The DOMContentLoaded handler duration in milliseconds. */
            dom_content_loaded_duration?: number;
            /** The window.onload timestamp in milliseconds. */
            onload_time?: number;
            /** The window.onload handler duration in milliseconds. */
            onload_duration?: number;
            /** The fully loaded time in milliseconds. */
            fully_loaded_time?: number;
            /** The GTmetrix RUM speed index. */
            rum_speed_index?: number;
            /** The GTmetrix speed index. */
            speed_index?: number;
            /** The CPU time reported by GTmetrix. */
            cpu_time?: number;
            /** The overall GTmetrix grade for the report. */
            gtmetrix_grade?: string;
            /** The overall GTmetrix score. */
            gtmetrix_score?: number;
            /** The GTmetrix performance score. */
            performance_score?: number;
            /** The GTmetrix structure score. */
            structure_score?: number;
            /** The PageSpeed score. */
            pagespeed_score?: number;
            /** The YSlow score. */
            yslow_score?: number;
            /** The largest contentful paint in milliseconds. */
            largest_contentful_paint?: number;
            /** The time to interactive in milliseconds. */
            time_to_interactive?: number;
            /** The total blocking time in milliseconds. */
            total_blocking_time?: number;
            /** The cumulative layout shift score. */
            cumulative_layout_shift?: number;
            [key: string]: unknown;
          };
          /** The GTmetrix links embedded on the report resource. */
          links?: {
            /** The GTmetrix API URL for the related location. */
            location?: string;
            /** The GTmetrix API URL for the related browser. */
            browser?: string;
            /** The public GTmetrix report URL. */
            report_url?: string;
            /** The GTmetrix API URL for the report analysis options. */
            analysis_options?: string;
            /** The GTmetrix API URL for the report screenshot resource. */
            screenshot?: string;
            /** The GTmetrix API URL for the report HAR resource. */
            har?: string;
            /** The GTmetrix API URL for the JSON resource summary. */
            resource_summary?: string;
            /** The GTmetrix API URL for the related test. */
            test?: string;
            /** The GTmetrix API URL for the Lighthouse JSON resource. */
            lighthouse?: string;
            /** The GTmetrix API URL for the filmstrip JSON resource. */
            filmstrip?: string;
            /** The GTmetrix API URL for the optimized images archive. */
            optimized_images?: string;
            /** The GTmetrix API URL for the video resource. */
            video?: string;
            /** The GTmetrix API URL for the PDF report. */
            report_pdf?: string;
            /** The GTmetrix API URL for the full PDF report. */
            report_pdf_full?: string;
            /** The GTmetrix API URL for the PageSpeed JSON resource. */
            pagespeed?: string;
            /** The GTmetrix API URL for the PageSpeed files archive. */
            pagespeed_files?: string;
            /** The GTmetrix API URL for the YSlow JSON resource. */
            yslow?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get a single GTmetrix simulated device by ID. */
    "gtmetrix.get_simulated_device": {
      input: {
        /**
         * The GTmetrix simulated device ID.
         * @minLength 1
         */
        simulated_device_id: string;
      };
      output: {
        /** The GTmetrix simulated device resource. */
        simulated_device: {
          /** The GTmetrix resource type. */
          type?: "simulated_device";
          /**
           * The GTmetrix simulated device ID.
           * @minLength 1
           */
          id?: string;
          /** The GTmetrix simulated device attributes. */
          attributes: {
            /** The display name of the simulated device. */
            name?: string;
            /** The GTmetrix simulated device category, such as phone or tablet. */
            category?: string;
            /** The manufacturer of the simulated device. */
            manufacturer?: string;
            /** The user agent used when this simulated device is selected. */
            user_agent?: string;
            /** The simulated viewport width in pixels. */
            width?: number;
            /** The simulated viewport height in pixels. */
            height?: number;
            /** The simulated device pixel ratio. */
            dppx?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get the current state of a GTmetrix test and detect when it has completed. */
    "gtmetrix.get_test": {
      input: {
        /**
         * The GTmetrix test ID.
         * @minLength 1
         */
        test_id: string;
      };
      output: {
        /** The GTmetrix test resource. */
        test: {
          /** The GTmetrix resource type. */
          type?: "test";
          /**
           * The GTmetrix test ID.
           * @minLength 1
           */
          id?: string;
          /** The GTmetrix test attributes. */
          attributes: {
            /**
             * The GTmetrix report slug identifier.
             * @minLength 1
             */
            report?: string;
            /**
             * The GTmetrix page slug identifier.
             * @minLength 1
             */
            page?: string;
            /** The tested URL. */
            url?: string;
            /**
             * The GTmetrix browser ID.
             * @minLength 1
             */
            browser?: string;
            /**
             * The GTmetrix location ID.
             * @minLength 1
             */
            location?: string;
            /** The source of the GTmetrix test or report. */
            source?: "api" | "on-demand" | "monitored";
            /** The lifecycle state of the GTmetrix test. */
            state?: "queued" | "started" | "error" | "completed";
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            created?: number;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            started?: number;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            finished?: number;
            /** The GTmetrix test error message, when present. */
            error?: string;
            [key: string]: unknown;
          };
          /** The GTmetrix links embedded on the test resource. */
          links?: {
            /** The GTmetrix API URL for the related report. */
            report?: string;
            /** The GTmetrix API URL for the related location. */
            location?: string;
            /** The GTmetrix API URL for the related browser. */
            browser?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether GTmetrix has completed the test. */
        is_complete: boolean;
        /** The GTmetrix report URL returned when the test has completed. */
        report_url?: string;
        /** The GTmetrix retry delay returned while the test is still pending. */
        retry_after_seconds?: number;
      };
    };
    /** List GTmetrix browsers that can be used for tests. */
    "gtmetrix.list_browsers": {
      input: Record<string, never>;
      output: {
        /** The GTmetrix browsers returned by the API. */
        browsers: Array<{
          /** The GTmetrix resource type. */
          type?: "browser";
          /**
           * The GTmetrix browser ID.
           * @minLength 1
           */
          id?: string;
          /** The GTmetrix browser attributes. */
          attributes: {
            /** The display name of the GTmetrix browser. */
            name?: string;
            /** The GTmetrix short browser identifier, such as chrome or firefox. */
            browser?: string;
            /** The GTmetrix browser platform, such as desktop or android. */
            platform?: string;
            /** The GTmetrix browser device label. */
            device?: string;
            /** Whether the browser is the default browser for the account or location. */
            default?: boolean;
            /** Whether the browser supports AdBlock. */
            adblock?: boolean;
            /** Whether the browser supports Lighthouse analysis. */
            lighthouse?: boolean;
            /** Whether the browser supports custom cookies. */
            cookies?: boolean;
            /** Whether the browser supports custom DNS. */
            dns?: boolean;
            /** Whether the browser supports allow or block URL filtering. */
            filtering?: boolean;
            /** Whether the browser supports HTTP access authentication. */
            http_auth?: boolean;
            /** Whether the browser supports custom viewport resolution settings. */
            resolution?: boolean;
            /** Whether the browser supports connection throttling. */
            throttle?: boolean;
            /** Whether the browser supports a custom user agent string. */
            user_agent?: boolean;
            /** Whether the browser supports video capture. */
            video?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List GTmetrix test locations available to the connected account. */
    "gtmetrix.list_locations": {
      input: Record<string, never>;
      output: {
        /** The GTmetrix locations returned by the API. */
        locations: Array<{
          /** The GTmetrix resource type. */
          type?: "location";
          /**
           * The GTmetrix location ID.
           * @minLength 1
           */
          id?: string;
          /** The GTmetrix location attributes. */
          attributes: {
            /** The display name of the GTmetrix location. */
            name?: string;
            /** The region label of the GTmetrix location. */
            region?: string;
            /** Whether the location is the default GTmetrix location. */
            default?: boolean;
            /** Whether the connected account can use this GTmetrix location. */
            account_has_access?: boolean;
            /** The browser IDs supported by this GTmetrix location. */
            browsers?: Array<string>;
            /** The IP addresses assigned to the GTmetrix location. */
            ips?: Array<string>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List GTmetrix reports associated with a single page. */
    "gtmetrix.list_page_reports": {
      input: {
        /**
         * The GTmetrix page slug identifier.
         * @minLength 1
         */
        page_id: string;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 500
         */
        page_size?: number;
        /**
         * The page number of results to return.
         * @minimum 1
         */
        page_number?: number;
        /**
         * The GTmetrix page report sort directives to apply.
         * @minItems 1
         */
        sort?: Array<"report_id" | "-report_id" | "gtmetrix_score" | "-gtmetrix_score" | "performance_score" | "-performance_score" | "structure_score" | "-structure_score" | "pagespeed_score" | "-pagespeed_score" | "yslow_score" | "-yslow_score" | "created" | "-created" | "expires" | "-expires" | "page_bytes" | "-page_bytes" | "html_bytes" | "-html_bytes" | "page_requests" | "-page_requests" | "connect_duration" | "-connect_duration" | "redirect_duration" | "-redirect_duration" | "backend_duration" | "-backend_duration" | "time_to_first_byte" | "-time_to_first_byte" | "first_paint_time" | "-first_paint_time" | "first_contentful_paint" | "-first_contentful_paint" | "largest_contentful_paint" | "-largest_contentful_paint" | "time_to_interactive" | "-time_to_interactive" | "total_blocking_time" | "-total_blocking_time" | "cumulative_layout_shift" | "-cumulative_layout_shift" | "speed_index" | "-speed_index" | "rum_speed_index" | "-rum_speed_index" | "dom_content_loaded_duration" | "-dom_content_loaded_duration" | "dom_content_loaded_time" | "-dom_content_loaded_time" | "dom_interactive_time" | "-dom_interactive_time" | "onload_time" | "-onload_time" | "onload_duration" | "-onload_duration" | "fully_loaded_time" | "-fully_loaded_time" | "cpu_time" | "-cpu_time">;
      };
      output: {
        /** The GTmetrix reports returned for the page. */
        reports: Array<{
          /** The GTmetrix resource type. */
          type?: "report";
          /**
           * The GTmetrix report slug identifier.
           * @minLength 1
           */
          id?: string;
          /** The GTmetrix report attributes. */
          attributes: {
            /**
             * The GTmetrix test ID.
             * @minLength 1
             */
            test?: string;
            /**
             * The GTmetrix page slug identifier.
             * @minLength 1
             */
            page?: string;
            /** The analyzed page URL. */
            url?: string;
            /**
             * The GTmetrix location ID.
             * @minLength 1
             */
            location?: string;
            /**
             * The GTmetrix browser ID.
             * @minLength 1
             */
            browser?: string;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            created?: number;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            expires?: number;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            finished?: number;
            /** The source of the GTmetrix test or report. */
            source?: "api" | "on-demand" | "monitored";
            /** The HTML load time or TTFB in milliseconds. */
            html_load_time?: number;
            /** The HTML transfer size in bytes. */
            html_bytes?: number;
            /** The page load time in milliseconds. */
            page_load_time?: number;
            /** The total page transfer size in bytes. */
            page_bytes?: number;
            /** The total number of requests required to load the page. */
            page_requests?: number;
            /** The total redirect duration in milliseconds. */
            redirect_duration?: number;
            /** The GTmetrix connection duration in milliseconds. */
            connect_duration?: number;
            /** The backend wait duration in milliseconds. */
            backend_duration?: number;
            /** The time to first byte in milliseconds. */
            time_to_first_byte?: number;
            /** The first paint time in milliseconds. */
            first_paint_time?: number;
            /** The first contentful paint in milliseconds. */
            first_contentful_paint?: number;
            /** The DOM interactive time in milliseconds. */
            dom_interactive_time?: number;
            /** The DOMContentLoaded event timestamp in milliseconds. */
            dom_content_loaded_time?: number;
            /** The DOMContentLoaded handler duration in milliseconds. */
            dom_content_loaded_duration?: number;
            /** The window.onload timestamp in milliseconds. */
            onload_time?: number;
            /** The window.onload handler duration in milliseconds. */
            onload_duration?: number;
            /** The fully loaded time in milliseconds. */
            fully_loaded_time?: number;
            /** The GTmetrix RUM speed index. */
            rum_speed_index?: number;
            /** The GTmetrix speed index. */
            speed_index?: number;
            /** The CPU time reported by GTmetrix. */
            cpu_time?: number;
            /** The overall GTmetrix grade for the report. */
            gtmetrix_grade?: string;
            /** The overall GTmetrix score. */
            gtmetrix_score?: number;
            /** The GTmetrix performance score. */
            performance_score?: number;
            /** The GTmetrix structure score. */
            structure_score?: number;
            /** The PageSpeed score. */
            pagespeed_score?: number;
            /** The YSlow score. */
            yslow_score?: number;
            /** The largest contentful paint in milliseconds. */
            largest_contentful_paint?: number;
            /** The time to interactive in milliseconds. */
            time_to_interactive?: number;
            /** The total blocking time in milliseconds. */
            total_blocking_time?: number;
            /** The cumulative layout shift score. */
            cumulative_layout_shift?: number;
            [key: string]: unknown;
          };
          /** The GTmetrix links embedded on the report resource. */
          links?: {
            /** The GTmetrix API URL for the related location. */
            location?: string;
            /** The GTmetrix API URL for the related browser. */
            browser?: string;
            /** The public GTmetrix report URL. */
            report_url?: string;
            /** The GTmetrix API URL for the report analysis options. */
            analysis_options?: string;
            /** The GTmetrix API URL for the report screenshot resource. */
            screenshot?: string;
            /** The GTmetrix API URL for the report HAR resource. */
            har?: string;
            /** The GTmetrix API URL for the JSON resource summary. */
            resource_summary?: string;
            /** The GTmetrix API URL for the related test. */
            test?: string;
            /** The GTmetrix API URL for the Lighthouse JSON resource. */
            lighthouse?: string;
            /** The GTmetrix API URL for the filmstrip JSON resource. */
            filmstrip?: string;
            /** The GTmetrix API URL for the optimized images archive. */
            optimized_images?: string;
            /** The GTmetrix API URL for the video resource. */
            video?: string;
            /** The GTmetrix API URL for the PDF report. */
            report_pdf?: string;
            /** The GTmetrix API URL for the full PDF report. */
            report_pdf_full?: string;
            /** The GTmetrix API URL for the PageSpeed JSON resource. */
            pagespeed?: string;
            /** The GTmetrix API URL for the PageSpeed files archive. */
            pagespeed_files?: string;
            /** The GTmetrix API URL for the YSlow JSON resource. */
            yslow?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The GTmetrix pagination links for the page reports list. */
        links: {
          /** The URL of the previous page, when available. */
          prev?: string;
          /** The URL of the next page, when available. */
          next?: string;
          [key: string]: unknown;
        } | null;
        /** The GTmetrix pagination metadata for the page reports list. */
        meta: {
          /** The current GTmetrix page number returned by the collection endpoint. */
          curr_page?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List GTmetrix pages associated with the connected account. */
    "gtmetrix.list_pages": {
      input: {
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 500
         */
        page_size?: number;
        /**
         * The page number of results to return.
         * @minimum 1
         */
        page_number?: number;
        /**
         * The GTmetrix page sort directives to apply.
         * @minItems 1
         */
        sort?: Array<"page_id" | "-page_id" | "created" | "-created" | "latest_report_time" | "-latest_report_time">;
        /** The boolean connector used between GTmetrix filters. */
        filter_bool?: "AND" | "OR";
        /**
         * The GTmetrix location IDs to include in the page list.
         * @minItems 1
         */
        location_ids?: Array<string>;
        /**
         * The GTmetrix browser IDs to include in the page list.
         * @minItems 1
         */
        browser_ids?: Array<string>;
        /**
         * The GTmetrix monitored frequency filters to apply.
         * @minItems 1
         */
        monitored?: Array<"no" | "any" | "hourly" | "daily" | "weekly" | "monthly">;
        /**
         * The GTmetrix page URLs to filter by.
         * @minItems 1
         */
        urls?: Array<string>;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        created_eq?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        created_gt?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        created_gte?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        created_lt?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        created_lte?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        latest_report_time_eq?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        latest_report_time_gt?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        latest_report_time_gte?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        latest_report_time_lt?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        latest_report_time_lte?: number;
      };
      output: {
        /** The GTmetrix pages returned by the API. */
        pages: Array<{
          /** The GTmetrix resource type. */
          type?: "page";
          /**
           * The GTmetrix page slug identifier.
           * @minLength 1
           */
          id?: string;
          /** The GTmetrix page attributes. */
          attributes: {
            /** The tested page URL. */
            url?: string;
            /**
             * The GTmetrix location ID.
             * @minLength 1
             */
            location?: string;
            /**
             * The GTmetrix browser ID.
             * @minLength 1
             */
            browser?: string;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            created?: number;
            /**
             * The GTmetrix report slug identifier.
             * @minLength 1
             */
            latest_report?: string;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            latest_report_time?: number;
            /** The number of reports on the page. */
            report_count?: number;
            /** Whether the GTmetrix page is monitored and at which frequency. */
            monitored?: "no" | "hourly" | "daily" | "weekly" | "monthly";
            [key: string]: unknown;
          };
          /** The GTmetrix links embedded on the page resource. */
          links?: {
            /** The GTmetrix API URL for the latest report on the page. */
            latest_report?: string;
            /** The GTmetrix API URL for retesting the page. */
            retest?: string;
            /** The GTmetrix API URL for the report list on the page. */
            reports?: string;
            /** The GTmetrix API URL for the related location. */
            location?: string;
            /** The GTmetrix API URL for the related browser. */
            browser?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The GTmetrix pagination links for the page list. */
        links: {
          /** The URL of the previous page, when available. */
          prev?: string;
          /** The URL of the next page, when available. */
          next?: string;
          [key: string]: unknown;
        } | null;
        /** The GTmetrix pagination metadata for the page list. */
        meta: {
          /** The current GTmetrix page number returned by the collection endpoint. */
          curr_page?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List GTmetrix simulated devices that can be used for tests. */
    "gtmetrix.list_simulated_devices": {
      input: Record<string, never>;
      output: {
        /** The GTmetrix simulated devices returned by the API. */
        simulated_devices: Array<{
          /** The GTmetrix resource type. */
          type?: "simulated_device";
          /**
           * The GTmetrix simulated device ID.
           * @minLength 1
           */
          id?: string;
          /** The GTmetrix simulated device attributes. */
          attributes: {
            /** The display name of the simulated device. */
            name?: string;
            /** The GTmetrix simulated device category, such as phone or tablet. */
            category?: string;
            /** The manufacturer of the simulated device. */
            manufacturer?: string;
            /** The user agent used when this simulated device is selected. */
            user_agent?: string;
            /** The simulated viewport width in pixels. */
            width?: number;
            /** The simulated viewport height in pixels. */
            height?: number;
            /** The simulated device pixel ratio. */
            dppx?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List GTmetrix tests for the connected account. */
    "gtmetrix.list_tests": {
      input: {
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 500
         */
        page_size?: number;
        /**
         * The page number of results to return.
         * @minimum 1
         */
        page_number?: number;
        /**
         * The GTmetrix test sort directives to apply.
         * @minItems 1
         */
        sort?: Array<"created" | "-created" | "started" | "-started" | "finished" | "-finished">;
        /** The boolean connector used between GTmetrix filters. */
        filter_bool?: "AND" | "OR";
        /**
         * The GTmetrix test source filters to apply.
         * @minItems 1
         */
        sources?: Array<"api" | "on-demand" | "monitored" | "any">;
        /**
         * The GTmetrix test states to include.
         * @minItems 1
         */
        states?: Array<"queued" | "started" | "error" | "completed">;
        /**
         * The GTmetrix location IDs to include in the test list.
         * @minItems 1
         */
        location_ids?: Array<string>;
        /**
         * The GTmetrix browser IDs to include in the test list.
         * @minItems 1
         */
        browser_ids?: Array<string>;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        created_eq?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        created_gt?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        created_gte?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        created_lt?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        created_lte?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        started_eq?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        started_gt?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        started_gte?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        started_lt?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        started_lte?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        finished_eq?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        finished_gt?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        finished_gte?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        finished_lt?: number;
        /** A UNIX timestamp in seconds returned by the GTmetrix API. */
        finished_lte?: number;
      };
      output: {
        /** The GTmetrix tests returned by the API. */
        tests: Array<{
          /** The GTmetrix resource type. */
          type?: "test";
          /**
           * The GTmetrix test ID.
           * @minLength 1
           */
          id?: string;
          /** The GTmetrix test attributes. */
          attributes: {
            /**
             * The GTmetrix report slug identifier.
             * @minLength 1
             */
            report?: string;
            /**
             * The GTmetrix page slug identifier.
             * @minLength 1
             */
            page?: string;
            /** The tested URL. */
            url?: string;
            /**
             * The GTmetrix browser ID.
             * @minLength 1
             */
            browser?: string;
            /**
             * The GTmetrix location ID.
             * @minLength 1
             */
            location?: string;
            /** The source of the GTmetrix test or report. */
            source?: "api" | "on-demand" | "monitored";
            /** The lifecycle state of the GTmetrix test. */
            state?: "queued" | "started" | "error" | "completed";
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            created?: number;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            started?: number;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            finished?: number;
            /** The GTmetrix test error message, when present. */
            error?: string;
            [key: string]: unknown;
          };
          /** The GTmetrix links embedded on the test resource. */
          links?: {
            /** The GTmetrix API URL for the related report. */
            report?: string;
            /** The GTmetrix API URL for the related location. */
            location?: string;
            /** The GTmetrix API URL for the related browser. */
            browser?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The GTmetrix pagination links for the test list. */
        links: {
          /** The URL of the previous page, when available. */
          prev?: string;
          /** The URL of the next page, when available. */
          next?: string;
          [key: string]: unknown;
        } | null;
        /** The GTmetrix pagination metadata for the test list. */
        meta: {
          /** The current GTmetrix page number returned by the collection endpoint. */
          curr_page?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Start a new GTmetrix performance test for a URL. */
    "gtmetrix.start_test": {
      input: {
        /**
         * The URL to test with GTmetrix.
         * @format uri
         */
        url: string;
        /**
         * The GTmetrix location ID.
         * @minLength 1
         */
        location_id?: string;
        /**
         * The GTmetrix browser ID.
         * @minLength 1
         */
        browser_id?: string;
        /** The GTmetrix report type to generate. */
        report?: "lighthouse" | "legacy" | "none" | "lighthouse,legacy";
        /** The number of months GTmetrix should retain the report. */
        retention?: 1 | 6 | 12 | 24;
        /**
         * The HTTP access authentication username.
         * @minLength 1
         */
        httpauth_username?: string;
        /**
         * The HTTP access authentication password.
         * @minLength 1
         */
        httpauth_password?: string;
        /** Whether to enable AdBlock during analysis. */
        adblock?: boolean;
        /**
         * The cookies GTmetrix should send with the test request.
         * @minItems 1
         */
        cookies?: Array<string>;
        /** Whether GTmetrix should generate a video. */
        video?: boolean;
        /** Whether GTmetrix should stop the test at window.onload. */
        stop_onload?: boolean;
        /**
         * The GTmetrix throttle profile or custom throttle string.
         * @minLength 1
         */
        throttle?: string;
        /**
         * The GTmetrix allow-list URL patterns to apply.
         * @minItems 1
         */
        allow_url?: Array<string>;
        /**
         * The GTmetrix block-list URL patterns to apply.
         * @minItems 1
         */
        block_url?: Array<string>;
        /**
         * The GTmetrix custom DNS mappings to apply.
         * @minItems 1
         */
        dns?: Array<string>;
        /**
         * The GTmetrix simulated device ID.
         * @minLength 1
         */
        simulate_device_id?: string;
        /** Whether GTmetrix should strip the trailing GTmetrix user agent tag. */
        anonymize_user_agent?: boolean;
        /**
         * The custom user agent string to send.
         * @minLength 1
         */
        user_agent?: string;
        /**
         * The browser viewport width in pixels.
         * @exclusiveMinimum 0
         */
        browser_width?: number;
        /**
         * The browser viewport height in pixels.
         * @exclusiveMinimum 0
         */
        browser_height?: number;
        /**
         * The browser device pixel ratio.
         * @minimum 1
         * @maximum 5
         */
        browser_dppx?: number;
        /** Whether GTmetrix should swap the browser viewport width and height. */
        browser_rotate?: boolean;
      };
      output: {
        /** The accepted GTmetrix test resource. */
        test: {
          /** The GTmetrix resource type. */
          type?: "test";
          /**
           * The GTmetrix test ID.
           * @minLength 1
           */
          id?: string;
          /** The GTmetrix test attributes. */
          attributes: {
            /**
             * The GTmetrix report slug identifier.
             * @minLength 1
             */
            report?: string;
            /**
             * The GTmetrix page slug identifier.
             * @minLength 1
             */
            page?: string;
            /** The tested URL. */
            url?: string;
            /**
             * The GTmetrix browser ID.
             * @minLength 1
             */
            browser?: string;
            /**
             * The GTmetrix location ID.
             * @minLength 1
             */
            location?: string;
            /** The source of the GTmetrix test or report. */
            source?: "api" | "on-demand" | "monitored";
            /** The lifecycle state of the GTmetrix test. */
            state?: "queued" | "started" | "error" | "completed";
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            created?: number;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            started?: number;
            /** A UNIX timestamp in seconds returned by the GTmetrix API. */
            finished?: number;
            /** The GTmetrix test error message, when present. */
            error?: string;
            [key: string]: unknown;
          };
          /** The GTmetrix links embedded on the test resource. */
          links?: {
            /** The GTmetrix API URL for the related report. */
            report?: string;
            /** The GTmetrix API URL for the related location. */
            location?: string;
            /** The GTmetrix API URL for the related browser. */
            browser?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The GTmetrix credits metadata for the accepted test. */
        meta: {
          /** The GTmetrix API credits remaining after the test was accepted. */
          credits_left: number;
          /** The GTmetrix API credits consumed by the accepted test. */
          credits_used: number;
        };
        /** The GTmetrix links for the accepted test. */
        links: {
          /** The GTmetrix API URL for the accepted test resource. */
          self: string;
        };
      };
    };
  }
}
