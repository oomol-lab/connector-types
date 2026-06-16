import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new StatusCake uptime test. */
    "statuscake.create_uptime_test": {
      input: {
        /**
         * The hosting provider name recorded for the uptime test.
         * @minLength 1
         */
        host?: string;
        /**
         * The human-readable name of the uptime test.
         * @minLength 1
         */
        name: string;
        /**
         * The destination port used for TCP uptime tests.
         * @minimum 0
         */
        port?: number;
        /**
         * Tags assigned to the uptime test.
         * @minItems 1
         */
        tags?: Array<string>;
        /** Whether the uptime test should be paused. */
        paused?: boolean;
        /**
         * The DNS IP addresses expected from the monitored host.
         * @minItems 1
         */
        dns_ips?: Array<string>;
        /**
         * The regions used for the uptime test.
         * @minItems 1
         */
        regions?: Array<string>;
        /**
         * The timeout in seconds before StatusCake marks the probe as failed.
         * @minimum 5
         * @maximum 75
         */
        timeout?: number;
        /** Whether the uptime test stores cookies between requests. */
        use_jar?: boolean;
        /**
         * The raw HTTP request body sent by StatusCake for POST-based uptime tests.
         * @minLength 1
         */
        post_raw?: string;
        /**
         * A JSON string payload sent by StatusCake when the uptime test uses POST.
         * @minLength 1
         */
        post_body?: string;
        /** The uptime test type accepted by StatusCake. */
        test_type: "DNS" | "HEAD" | "HTTP" | "PING" | "SMTP" | "SSH" | "TCP";
        /** The uptime check interval in seconds accepted by StatusCake. */
        check_rate: 0 | 30 | 60 | 300 | 900 | 1800 | 3600 | 86400;
        /**
         * The FQDN or IP address of the DNS server used for DNS uptime tests.
         * @minLength 1
         */
        dns_server?: string;
        /**
         * The custom user agent string sent by StatusCake when probing the target.
         * @minLength 1
         */
        user_agent?: string;
        /** Whether StatusCake should fail the test when the find_string is present. */
        do_not_find?: boolean;
        /**
         * The string that must be present in the response body for the uptime test to pass.
         * @minLength 1
         */
        find_string?: string;
        /**
         * The URL or IP address of the server monitored by the uptime test.
         * @minLength 1
         */
        website_url: string;
        /**
         * The number of confirmation servers StatusCake uses before alerting.
         * @minimum 0
         * @maximum 3
         */
        confirmation?: number;
        /**
         * The number of minutes StatusCake waits before sending an alert.
         * @minimum 0
         * @maximum 60
         */
        trigger_rate?: number;
        /** A JSON string or a string-to-string object representing the custom headers sent by StatusCake. */
        custom_header?: string | Record<string, string>;
        /**
         * The basic authentication password used by the uptime test.
         * @minLength 1
         */
        basic_password?: string;
        /**
         * The basic authentication username used by the uptime test.
         * @minLength 1
         */
        basic_username?: string;
        /**
         * The contact group IDs notified by the uptime test.
         * @minItems 1
         */
        contact_groups?: Array<string>;
        /** Whether StatusCake should follow redirects while probing the target. */
        follow_redirects?: boolean;
        /** Whether response headers should be included when matching the response body. */
        include_header?: boolean;
        /**
         * The HTTP status codes considered healthy by the uptime test.
         * @minItems 1
         */
        status_codes?: Array<string | number>;
      };
      output: {
        /** The newly created uptime test returned by StatusCake. */
        test: {
          /** The unique identifier of the uptime test. */
          id?: string;
          /** The human-readable name of the uptime test. */
          name?: string;
          /** The uptime test type returned by StatusCake. */
          test_type?: string;
          /** The URL or IP address monitored by the uptime test. */
          website_url?: string;
          /** The probe interval in seconds. */
          check_rate?: number;
          /** The number of confirmation servers used before alerting. */
          confirmation?: number;
          /** The contact groups notified by the uptime test. */
          contact_groups?: Array<string>;
          /** The DNS IP addresses expected from the monitored host. */
          dns_ips?: Array<string>;
          /** Whether the test fails when the find_string is present. */
          do_not_find?: boolean;
          /** Whether SSL alerting is enabled for the uptime test. */
          enable_ssl_alert?: boolean;
          /** Whether redirects are followed while probing the target. */
          follow_redirects?: boolean;
          /** Whether response headers are included when matching the body. */
          include_header?: boolean;
          /** Whether the uptime test is paused. */
          paused?: boolean;
          /** Whether the uptime test is still processing. */
          processing?: boolean;
          /** The monitoring servers assigned to the uptime test. */
          servers?: Array<{
            /** The IPv4 address of the assigned monitoring server. */
            ipv4?: string;
            /** The IPv6 address of the assigned monitoring server. */
            ipv6?: string;
            /** The region slug of the monitoring server. */
            region?: string;
            /** The region code of the monitoring server. */
            region_code?: string;
            /** The human-readable description of the server. */
            description?: string;
            /** The current status reported for the monitoring server. */
            status?: string;
            [key: string]: unknown;
          }>;
          /** The current status of the uptime test. */
          status?: string;
          /** The HTTP status codes considered healthy by the uptime test. */
          status_codes?: Array<string | number>;
          /** The tags assigned to the uptime test. */
          tags?: Array<string>;
          /** The timeout in seconds before StatusCake marks the probe as failed. */
          timeout?: number;
          /** The delay in minutes before StatusCake sends an alert. */
          trigger_rate?: number;
          /** The uptime percentage reported by StatusCake. */
          uptime?: number;
          /** Whether cookie storage is enabled for the test. */
          use_jar?: boolean;
          /** An ISO 8601 timestamp returned by the StatusCake API. */
          created_at?: string;
          /** An ISO 8601 timestamp returned by the StatusCake API. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a StatusCake uptime test. */
    "statuscake.delete_uptime_test": {
      input: {
        /**
         * The unique identifier of the StatusCake uptime test.
         * @minLength 1
         */
        test_id: string;
      };
      output: {
        /** Whether the uptime test was deleted successfully. */
        deleted: boolean;
      };
    };
    /** Get the full configuration and status of a single StatusCake uptime test. */
    "statuscake.get_uptime_test": {
      input: {
        /**
         * The unique identifier of the StatusCake uptime test.
         * @minLength 1
         */
        test_id: string;
      };
      output: {
        /** The uptime test returned by StatusCake. */
        test: {
          /** The unique identifier of the uptime test. */
          id?: string;
          /** The human-readable name of the uptime test. */
          name?: string;
          /** The uptime test type returned by StatusCake. */
          test_type?: string;
          /** The URL or IP address monitored by the uptime test. */
          website_url?: string;
          /** The probe interval in seconds. */
          check_rate?: number;
          /** The number of confirmation servers used before alerting. */
          confirmation?: number;
          /** The contact groups notified by the uptime test. */
          contact_groups?: Array<string>;
          /** The DNS IP addresses expected from the monitored host. */
          dns_ips?: Array<string>;
          /** Whether the test fails when the find_string is present. */
          do_not_find?: boolean;
          /** Whether SSL alerting is enabled for the uptime test. */
          enable_ssl_alert?: boolean;
          /** Whether redirects are followed while probing the target. */
          follow_redirects?: boolean;
          /** Whether response headers are included when matching the body. */
          include_header?: boolean;
          /** Whether the uptime test is paused. */
          paused?: boolean;
          /** Whether the uptime test is still processing. */
          processing?: boolean;
          /** The monitoring servers assigned to the uptime test. */
          servers?: Array<{
            /** The IPv4 address of the assigned monitoring server. */
            ipv4?: string;
            /** The IPv6 address of the assigned monitoring server. */
            ipv6?: string;
            /** The region slug of the monitoring server. */
            region?: string;
            /** The region code of the monitoring server. */
            region_code?: string;
            /** The human-readable description of the server. */
            description?: string;
            /** The current status reported for the monitoring server. */
            status?: string;
            [key: string]: unknown;
          }>;
          /** The current status of the uptime test. */
          status?: string;
          /** The HTTP status codes considered healthy by the uptime test. */
          status_codes?: Array<string | number>;
          /** The tags assigned to the uptime test. */
          tags?: Array<string>;
          /** The timeout in seconds before StatusCake marks the probe as failed. */
          timeout?: number;
          /** The delay in minutes before StatusCake sends an alert. */
          trigger_rate?: number;
          /** The uptime percentage reported by StatusCake. */
          uptime?: number;
          /** Whether cookie storage is enabled for the test. */
          use_jar?: boolean;
          /** An ISO 8601 timestamp returned by the StatusCake API. */
          created_at?: string;
          /** An ISO 8601 timestamp returned by the StatusCake API. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List available monitoring locations for StatusCake uptime tests. */
    "statuscake.list_uptime_locations": {
      input: Record<string, never>;
      output: {
        /** The uptime monitoring locations returned by StatusCake. */
        locations: Array<{
          /** The uptime location region slug. */
          region?: string;
          /** The uptime location region code. */
          region_code?: string;
          /** The country name of the uptime location. */
          country?: string;
          /** The city name of the uptime location. */
          city?: string;
          /** The IPv4 address of the uptime location. */
          ipv4?: string;
          /** The IPv6 address of the uptime location. */
          ipv6?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List alerts triggered for a StatusCake uptime test. */
    "statuscake.list_uptime_test_alerts": {
      input: {
        /**
         * The unique identifier of the StatusCake uptime test.
         * @minLength 1
         */
        test_id: string;
        /**
         * The maximum number of records to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Only return records before this UNIX timestamp.
         * @minimum 0
         */
        before?: number;
        /**
         * Only return records after this UNIX timestamp.
         * @minimum 0
         */
        after?: number;
      };
      output: {
        /** The uptime alerts returned by StatusCake. */
        alerts: Array<{
          /** The unique identifier of the uptime alert. */
          id?: string;
          /** The uptime status that triggered the alert. */
          status?: string;
          /** The HTTP status code recorded for the alert. */
          status_code?: number;
          /** An ISO 8601 timestamp returned by the StatusCake API. */
          triggered_at?: string;
          [key: string]: unknown;
        }>;
        /** The pagination links returned by StatusCake. */
        links: {
          /** The URL of the current page. */
          self?: string;
          /** The URL of the next page, when available. */
          next?: string;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List historical probe results for a StatusCake uptime test. */
    "statuscake.list_uptime_test_history": {
      input: {
        /**
         * The unique identifier of the StatusCake uptime test.
         * @minLength 1
         */
        test_id: string;
        /**
         * The maximum number of records to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Only return records before this UNIX timestamp.
         * @minimum 0
         */
        before?: number;
        /**
         * Only return records after this UNIX timestamp.
         * @minimum 0
         */
        after?: number;
      };
      output: {
        /** The historical uptime probe results returned by StatusCake. */
        history: Array<{
          /** The location code where the uptime check was executed. */
          location?: string;
          /** An ISO 8601 timestamp returned by the StatusCake API. */
          created_at?: string;
          /** The response time in milliseconds. */
          performance?: number;
          /** The HTTP status code returned by the probe. */
          status_code?: number;
          [key: string]: unknown;
        }>;
        /** The pagination links returned by StatusCake. */
        links: {
          /** The URL of the current page. */
          self?: string;
          /** The URL of the next page, when available. */
          next?: string;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List uptime or downtime periods recorded for a StatusCake uptime test. */
    "statuscake.list_uptime_test_periods": {
      input: {
        /**
         * The unique identifier of the StatusCake uptime test.
         * @minLength 1
         */
        test_id: string;
        /**
         * The maximum number of records to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Only return records before this UNIX timestamp.
         * @minimum 0
         */
        before?: number;
        /**
         * Only return records after this UNIX timestamp.
         * @minimum 0
         */
        after?: number;
      };
      output: {
        /** The uptime or downtime periods returned by StatusCake. */
        periods: Array<{
          /** The status recorded for the period. */
          status?: string;
          /** An ISO 8601 timestamp returned by the StatusCake API. */
          created_at?: string;
          /** An ISO 8601 timestamp returned by the StatusCake API. */
          ended_at?: string;
          /** The duration of the period in milliseconds. */
          duration?: number;
          [key: string]: unknown;
        }>;
        /** The pagination links returned by StatusCake. */
        links: {
          /** The URL of the current page. */
          self?: string;
          /** The URL of the next page, when available. */
          next?: string;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List uptime tests available in the connected StatusCake account. */
    "statuscake.list_uptime_tests": {
      input: {
        /**
         * The page number of results to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of uptime tests to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * A comma-separated list of tags used to filter uptime tests.
         * @minLength 1
         */
        tags?: string;
        /** Whether the response should include uptime data. */
        uptime?: boolean;
      };
      output: {
        /** The uptime tests returned by StatusCake. */
        tests: Array<{
          /** The unique identifier of the uptime test. */
          id?: string;
          /** The human-readable name of the uptime test. */
          name?: string;
          /** The uptime test type returned by StatusCake. */
          test_type?: string;
          /** The URL or IP address monitored by the uptime test. */
          website_url?: string;
          /** The probe interval in seconds. */
          check_rate?: number;
          /** The number of confirmation servers used before alerting. */
          confirmation?: number;
          /** The contact groups notified by the uptime test. */
          contact_groups?: Array<string>;
          /** The DNS IP addresses expected from the monitored host. */
          dns_ips?: Array<string>;
          /** Whether the test fails when the find_string is present. */
          do_not_find?: boolean;
          /** Whether SSL alerting is enabled for the uptime test. */
          enable_ssl_alert?: boolean;
          /** Whether redirects are followed while probing the target. */
          follow_redirects?: boolean;
          /** Whether response headers are included when matching the body. */
          include_header?: boolean;
          /** Whether the uptime test is paused. */
          paused?: boolean;
          /** Whether the uptime test is still processing. */
          processing?: boolean;
          /** The monitoring servers assigned to the uptime test. */
          servers?: Array<{
            /** The IPv4 address of the assigned monitoring server. */
            ipv4?: string;
            /** The IPv6 address of the assigned monitoring server. */
            ipv6?: string;
            /** The region slug of the monitoring server. */
            region?: string;
            /** The region code of the monitoring server. */
            region_code?: string;
            /** The human-readable description of the server. */
            description?: string;
            /** The current status reported for the monitoring server. */
            status?: string;
            [key: string]: unknown;
          }>;
          /** The current status of the uptime test. */
          status?: string;
          /** The HTTP status codes considered healthy by the uptime test. */
          status_codes?: Array<string | number>;
          /** The tags assigned to the uptime test. */
          tags?: Array<string>;
          /** The timeout in seconds before StatusCake marks the probe as failed. */
          timeout?: number;
          /** The delay in minutes before StatusCake sends an alert. */
          trigger_rate?: number;
          /** The uptime percentage reported by StatusCake. */
          uptime?: number;
          /** Whether cookie storage is enabled for the test. */
          use_jar?: boolean;
          /** An ISO 8601 timestamp returned by the StatusCake API. */
          created_at?: string;
          /** An ISO 8601 timestamp returned by the StatusCake API. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** The pagination metadata returned by StatusCake. */
        pagination: {
          /** The current page number. */
          page?: number;
          /** The number of items returned per page. */
          per_page?: number;
          /** The total number of pages. */
          page_count?: number;
          /** The total number of matching items. */
          total_count?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Update an existing StatusCake uptime test. */
    "statuscake.update_uptime_test": {
      input: {
        /**
         * The unique identifier of the StatusCake uptime test.
         * @minLength 1
         */
        test_id: string;
        /**
         * The hosting provider name recorded for the uptime test.
         * @minLength 1
         */
        host?: string;
        /**
         * The human-readable name of the uptime test.
         * @minLength 1
         */
        name?: string;
        /**
         * The destination port used for TCP uptime tests.
         * @minimum 0
         */
        port?: number;
        /**
         * Tags assigned to the uptime test.
         * @minItems 1
         */
        tags?: Array<string>;
        /** Whether the uptime test should be paused. */
        paused?: boolean;
        /**
         * The DNS IP addresses expected from the monitored host.
         * @minItems 1
         */
        dns_ips?: Array<string>;
        /**
         * The regions used for the uptime test.
         * @minItems 1
         */
        regions?: Array<string>;
        /**
         * The timeout in seconds before StatusCake marks the probe as failed.
         * @minimum 5
         * @maximum 75
         */
        timeout?: number;
        /** Whether the uptime test stores cookies between requests. */
        use_jar?: boolean;
        /**
         * The raw HTTP request body sent by StatusCake for POST-based uptime tests.
         * @minLength 1
         */
        post_raw?: string;
        /**
         * A JSON string payload sent by StatusCake when the uptime test uses POST.
         * @minLength 1
         */
        post_body?: string;
        /** The uptime test type accepted by StatusCake. */
        test_type?: "DNS" | "HEAD" | "HTTP" | "PING" | "SMTP" | "SSH" | "TCP";
        /** The uptime check interval in seconds accepted by StatusCake. */
        check_rate?: 0 | 30 | 60 | 300 | 900 | 1800 | 3600 | 86400;
        /**
         * The FQDN or IP address of the DNS server used for DNS uptime tests.
         * @minLength 1
         */
        dns_server?: string;
        /**
         * The custom user agent string sent by StatusCake when probing the target.
         * @minLength 1
         */
        user_agent?: string;
        /** Whether StatusCake should fail the test when the find_string is present. */
        do_not_find?: boolean;
        /**
         * The string that must be present in the response body for the uptime test to pass.
         * @minLength 1
         */
        find_string?: string;
        /**
         * The URL or IP address of the server monitored by the uptime test.
         * @minLength 1
         */
        website_url?: string;
        /**
         * The number of confirmation servers StatusCake uses before alerting.
         * @minimum 0
         * @maximum 3
         */
        confirmation?: number;
        /**
         * The number of minutes StatusCake waits before sending an alert.
         * @minimum 0
         * @maximum 60
         */
        trigger_rate?: number;
        /** A JSON string or a string-to-string object representing the custom headers sent by StatusCake. */
        custom_header?: string | Record<string, string>;
        /**
         * The basic authentication password used by the uptime test.
         * @minLength 1
         */
        basic_password?: string;
        /**
         * The basic authentication username used by the uptime test.
         * @minLength 1
         */
        basic_username?: string;
        /**
         * The contact group IDs notified by the uptime test.
         * @minItems 1
         */
        contact_groups?: Array<string>;
        /** Whether StatusCake should follow redirects while probing the target. */
        follow_redirects?: boolean;
        /** Whether response headers should be included when matching the response body. */
        include_header?: boolean;
        /**
         * The HTTP status codes considered healthy by the uptime test.
         * @minItems 1
         */
        status_codes?: Array<string | number>;
      };
      output: {
        /** The updated uptime test returned by StatusCake. */
        test: {
          /** The unique identifier of the uptime test. */
          id?: string;
          /** The human-readable name of the uptime test. */
          name?: string;
          /** The uptime test type returned by StatusCake. */
          test_type?: string;
          /** The URL or IP address monitored by the uptime test. */
          website_url?: string;
          /** The probe interval in seconds. */
          check_rate?: number;
          /** The number of confirmation servers used before alerting. */
          confirmation?: number;
          /** The contact groups notified by the uptime test. */
          contact_groups?: Array<string>;
          /** The DNS IP addresses expected from the monitored host. */
          dns_ips?: Array<string>;
          /** Whether the test fails when the find_string is present. */
          do_not_find?: boolean;
          /** Whether SSL alerting is enabled for the uptime test. */
          enable_ssl_alert?: boolean;
          /** Whether redirects are followed while probing the target. */
          follow_redirects?: boolean;
          /** Whether response headers are included when matching the body. */
          include_header?: boolean;
          /** Whether the uptime test is paused. */
          paused?: boolean;
          /** Whether the uptime test is still processing. */
          processing?: boolean;
          /** The monitoring servers assigned to the uptime test. */
          servers?: Array<{
            /** The IPv4 address of the assigned monitoring server. */
            ipv4?: string;
            /** The IPv6 address of the assigned monitoring server. */
            ipv6?: string;
            /** The region slug of the monitoring server. */
            region?: string;
            /** The region code of the monitoring server. */
            region_code?: string;
            /** The human-readable description of the server. */
            description?: string;
            /** The current status reported for the monitoring server. */
            status?: string;
            [key: string]: unknown;
          }>;
          /** The current status of the uptime test. */
          status?: string;
          /** The HTTP status codes considered healthy by the uptime test. */
          status_codes?: Array<string | number>;
          /** The tags assigned to the uptime test. */
          tags?: Array<string>;
          /** The timeout in seconds before StatusCake marks the probe as failed. */
          timeout?: number;
          /** The delay in minutes before StatusCake sends an alert. */
          trigger_rate?: number;
          /** The uptime percentage reported by StatusCake. */
          uptime?: number;
          /** Whether cookie storage is enabled for the test. */
          use_jar?: boolean;
          /** An ISO 8601 timestamp returned by the StatusCake API. */
          created_at?: string;
          /** An ISO 8601 timestamp returned by the StatusCake API. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
