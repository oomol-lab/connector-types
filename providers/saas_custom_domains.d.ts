import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a custom domain for a SaaS Custom Domains upstream. */
    "saas_custom_domains.create_custom_domain": {
      input: {
        /**
         * SaaS Custom Domains account UUID.
         * @minLength 1
         */
        account_uuid: string;
        /**
         * SaaS Custom Domains upstream UUID.
         * @minLength 1
         */
        upstream_uuid: string;
        /**
         * Host name accepted by SaaS Custom Domains.
         * @minLength 1
         */
        host: string;
        /**
         * Email address where DNS instructions should be sent.
         * @format email
         */
        instructions_recipient?: string;
        /**
         * Path prefix forwarded to the upstream.
         * @minLength 1
         */
        prepend_path?: string;
        /** Certificate challenge type. */
        challenge_type?: "http01" | "dns01";
        /** Whether to redirect traffic to the www subdomain. */
        redirect_to_www?: boolean;
      };
      output: {
        /** One SaaS Custom Domains custom domain. */
        custom_domain: {
          /**
           * Unique identifier for the custom domain.
           * @minLength 1
           */
          uuid: string;
          /** Host of the custom domain. */
          host: string;
          /** Path prefix forwarded to the upstream. */
          prepend_path: string | null;
          /** Bubble.io target path for the custom domain. */
          bubble_target_path: string | null;
          /** Browser and search preview title for the custom domain. */
          meta_title: string | null;
          /** Search result and social preview description for the custom domain. */
          meta_description: string | null;
          /** Favicon URL configured for the custom domain. */
          meta_favicon_url: string | null;
          /** Open Graph image URL configured for the custom domain. */
          meta_image_url: string | null;
          /** Timestamp when the custom domain was created. */
          created_at: string;
          /** Timestamp when the custom domain was last updated. */
          updated_at: string;
          /** Timestamp when DNS records were last checked. */
          last_dns_check_at: string | null;
          /** DNS record status for the custom domain. */
          status: string;
          /** Whether a TLS certificate has been issued. */
          tls_certificate_issued: boolean;
          /** Status of the ACME challenge DNS record. */
          acme_challenge_dns_record_status: string | null;
          /** Certificate challenge type for the custom domain. */
          challenge_type: string;
          /** Whether the custom domain redirects to the www subdomain. */
          redirect_to_www: boolean;
          /** Email address where DNS instructions were sent. */
          instructions_recipient: string | null;
          /** Timestamp when DNS instructions were sent. */
          instructions_email_sent_at: string | null;
          /** UUID of the upstream that owns the custom domain. */
          upstream_uuid: string;
          /** Hostname of the ACME challenge DNS record. */
          delegated_domain_control_validation_record_hostname: string | null;
          /** Value of the ACME challenge DNS record. */
          delegated_domain_control_validation_record_value: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create an upstream for a SaaS Custom Domains account. */
    "saas_custom_domains.create_upstream": {
      input: {
        /**
         * SaaS Custom Domains account UUID.
         * @minLength 1
         */
        account_uuid: string;
        /**
         * Host name accepted by SaaS Custom Domains.
         * @minLength 1
         */
        host: string;
        /** Whether the upstream uses TLS. */
        tls?: boolean;
        /**
         * Port on which the upstream application listens.
         * @minimum 1
         */
        port?: number;
        /** Whether the upstream is a Bubble.io app. */
        bubble_io?: boolean;
        /** Whether automatic response compression is enabled. */
        compression_enabled?: boolean;
        /** Whether geocoding headers are enabled. */
        geocoding_enabled?: boolean;
        /**
         * Auth token to use when forwarding requests to the upstream.
         * @minLength 1
         */
        auth_token?: string;
      };
      output: {
        /** One SaaS Custom Domains upstream. */
        upstream: {
          /**
           * Unique identifier for the upstream.
           * @minLength 1
           */
          uuid: string;
          /** Host of the upstream web application. */
          host: string;
          /** Port on which the upstream application listens. */
          port: number;
          /** Whether the upstream expects TLS traffic. */
          tls: boolean;
          /** Auth token used when forwarding requests to the upstream. */
          auth_token: string;
          /** Whether the upstream is a Bubble.io app. */
          bubble_io: boolean;
          /** Whether automatic response compression is enabled. */
          compression_enabled: boolean;
          /** Whether geocoding headers are enabled. */
          geocoding_enabled: boolean;
          /** Timestamp when the upstream was created. */
          created_at: string;
          /** Timestamp when the upstream was last updated. */
          updated_at: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete one SaaS Custom Domains custom domain. */
    "saas_custom_domains.delete_custom_domain": {
      input: {
        /**
         * SaaS Custom Domains account UUID.
         * @minLength 1
         */
        account_uuid: string;
        /**
         * SaaS Custom Domains upstream UUID.
         * @minLength 1
         */
        upstream_uuid: string;
        /**
         * SaaS Custom Domains custom domain UUID.
         * @minLength 1
         */
        domain_uuid: string;
      };
      output: {
        /** Deletion message returned by SaaS Custom Domains. */
        message: string;
      };
    };
    /** Delete one SaaS Custom Domains upstream and its custom domains. */
    "saas_custom_domains.delete_upstream": {
      input: {
        /**
         * SaaS Custom Domains account UUID.
         * @minLength 1
         */
        account_uuid: string;
        /**
         * SaaS Custom Domains upstream UUID.
         * @minLength 1
         */
        upstream_uuid: string;
      };
      output: {
        /** Deletion message returned by SaaS Custom Domains. */
        message: string;
      };
    };
    /** Retrieve one SaaS Custom Domains custom domain by UUID. */
    "saas_custom_domains.get_custom_domain": {
      input: {
        /**
         * SaaS Custom Domains account UUID.
         * @minLength 1
         */
        account_uuid: string;
        /**
         * SaaS Custom Domains upstream UUID.
         * @minLength 1
         */
        upstream_uuid: string;
        /**
         * SaaS Custom Domains custom domain UUID.
         * @minLength 1
         */
        domain_uuid: string;
      };
      output: {
        /** One SaaS Custom Domains custom domain. */
        custom_domain: {
          /**
           * Unique identifier for the custom domain.
           * @minLength 1
           */
          uuid: string;
          /** Host of the custom domain. */
          host: string;
          /** Path prefix forwarded to the upstream. */
          prepend_path: string | null;
          /** Bubble.io target path for the custom domain. */
          bubble_target_path: string | null;
          /** Browser and search preview title for the custom domain. */
          meta_title: string | null;
          /** Search result and social preview description for the custom domain. */
          meta_description: string | null;
          /** Favicon URL configured for the custom domain. */
          meta_favicon_url: string | null;
          /** Open Graph image URL configured for the custom domain. */
          meta_image_url: string | null;
          /** Timestamp when the custom domain was created. */
          created_at: string;
          /** Timestamp when the custom domain was last updated. */
          updated_at: string;
          /** Timestamp when DNS records were last checked. */
          last_dns_check_at: string | null;
          /** DNS record status for the custom domain. */
          status: string;
          /** Whether a TLS certificate has been issued. */
          tls_certificate_issued: boolean;
          /** Status of the ACME challenge DNS record. */
          acme_challenge_dns_record_status: string | null;
          /** Certificate challenge type for the custom domain. */
          challenge_type: string;
          /** Whether the custom domain redirects to the www subdomain. */
          redirect_to_www: boolean;
          /** Email address where DNS instructions were sent. */
          instructions_recipient: string | null;
          /** Timestamp when DNS instructions were sent. */
          instructions_email_sent_at: string | null;
          /** UUID of the upstream that owns the custom domain. */
          upstream_uuid: string;
          /** Hostname of the ACME challenge DNS record. */
          delegated_domain_control_validation_record_hostname: string | null;
          /** Value of the ACME challenge DNS record. */
          delegated_domain_control_validation_record_value: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one SaaS Custom Domains upstream by UUID. */
    "saas_custom_domains.get_upstream": {
      input: {
        /**
         * SaaS Custom Domains account UUID.
         * @minLength 1
         */
        account_uuid: string;
        /**
         * SaaS Custom Domains upstream UUID.
         * @minLength 1
         */
        upstream_uuid: string;
      };
      output: {
        /** One SaaS Custom Domains upstream. */
        upstream: {
          /**
           * Unique identifier for the upstream.
           * @minLength 1
           */
          uuid: string;
          /** Host of the upstream web application. */
          host: string;
          /** Port on which the upstream application listens. */
          port: number;
          /** Whether the upstream expects TLS traffic. */
          tls: boolean;
          /** Auth token used when forwarding requests to the upstream. */
          auth_token: string;
          /** Whether the upstream is a Bubble.io app. */
          bubble_io: boolean;
          /** Whether automatic response compression is enabled. */
          compression_enabled: boolean;
          /** Whether geocoding headers are enabled. */
          geocoding_enabled: boolean;
          /** Timestamp when the upstream was created. */
          created_at: string;
          /** Timestamp when the upstream was last updated. */
          updated_at: string;
          [key: string]: unknown;
        };
      };
    };
    /** List SaaS Custom Domains accounts available to the API token. */
    "saas_custom_domains.list_accounts": {
      input: Record<string, never>;
      output: {
        /** Accounts returned by SaaS Custom Domains. */
        accounts: Array<{
          /**
           * Unique identifier for the account.
           * @minLength 1
           */
          uuid: string;
          /** Name of the account. */
          name: string;
          /** Whether the account is personal. */
          personal: boolean;
          /** Unique identifier for the account owner. */
          owner_uuid: string;
          /** Timestamp when the account was created. */
          created_at: string;
          /** Timestamp when the account was last updated. */
          updated_at: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List custom domains for a SaaS Custom Domains upstream. */
    "saas_custom_domains.list_custom_domains": {
      input: {
        /**
         * SaaS Custom Domains account UUID.
         * @minLength 1
         */
        account_uuid: string;
        /**
         * SaaS Custom Domains upstream UUID.
         * @minLength 1
         */
        upstream_uuid: string;
        /**
         * Host name accepted by SaaS Custom Domains.
         * @minLength 1
         */
        host?: string;
        /**
         * Page number to retrieve. Pages start at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of items to retrieve per page.
         * @minimum 1
         */
        per_page?: number;
      };
      output: {
        /** Custom domains returned by SaaS Custom Domains. */
        custom_domains: Array<{
          /**
           * Unique identifier for the custom domain.
           * @minLength 1
           */
          uuid: string;
          /** Host of the custom domain. */
          host: string;
          /** Path prefix forwarded to the upstream. */
          prepend_path: string | null;
          /** Bubble.io target path for the custom domain. */
          bubble_target_path: string | null;
          /** Browser and search preview title for the custom domain. */
          meta_title: string | null;
          /** Search result and social preview description for the custom domain. */
          meta_description: string | null;
          /** Favicon URL configured for the custom domain. */
          meta_favicon_url: string | null;
          /** Open Graph image URL configured for the custom domain. */
          meta_image_url: string | null;
          /** Timestamp when the custom domain was created. */
          created_at: string;
          /** Timestamp when the custom domain was last updated. */
          updated_at: string;
          /** Timestamp when DNS records were last checked. */
          last_dns_check_at: string | null;
          /** DNS record status for the custom domain. */
          status: string;
          /** Whether a TLS certificate has been issued. */
          tls_certificate_issued: boolean;
          /** Status of the ACME challenge DNS record. */
          acme_challenge_dns_record_status: string | null;
          /** Certificate challenge type for the custom domain. */
          challenge_type: string;
          /** Whether the custom domain redirects to the www subdomain. */
          redirect_to_www: boolean;
          /** Email address where DNS instructions were sent. */
          instructions_recipient: string | null;
          /** Timestamp when DNS instructions were sent. */
          instructions_email_sent_at: string | null;
          /** UUID of the upstream that owns the custom domain. */
          upstream_uuid: string;
          /** Hostname of the ACME challenge DNS record. */
          delegated_domain_control_validation_record_hostname: string | null;
          /** Value of the ACME challenge DNS record. */
          delegated_domain_control_validation_record_value: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by SaaS Custom Domains. */
        pagination: {
          /** Returned page number. */
          page?: number;
          /** Total number of items in the collection. */
          count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List upstreams for a SaaS Custom Domains account. */
    "saas_custom_domains.list_upstreams": {
      input: {
        /**
         * SaaS Custom Domains account UUID.
         * @minLength 1
         */
        account_uuid: string;
        /**
         * Host name accepted by SaaS Custom Domains.
         * @minLength 1
         */
        host?: string;
        /**
         * Page number to retrieve. Pages start at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of items to retrieve per page.
         * @minimum 1
         */
        per_page?: number;
      };
      output: {
        /** Upstreams returned by SaaS Custom Domains. */
        upstreams: Array<{
          /**
           * Unique identifier for the upstream.
           * @minLength 1
           */
          uuid: string;
          /** Host of the upstream web application. */
          host: string;
          /** Port on which the upstream application listens. */
          port: number;
          /** Whether the upstream expects TLS traffic. */
          tls: boolean;
          /** Auth token used when forwarding requests to the upstream. */
          auth_token: string;
          /** Whether the upstream is a Bubble.io app. */
          bubble_io: boolean;
          /** Whether automatic response compression is enabled. */
          compression_enabled: boolean;
          /** Whether geocoding headers are enabled. */
          geocoding_enabled: boolean;
          /** Timestamp when the upstream was created. */
          created_at: string;
          /** Timestamp when the upstream was last updated. */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by SaaS Custom Domains. */
        pagination: {
          /** Returned page number. */
          page?: number;
          /** Total number of items in the collection. */
          count?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Initiate an HTTP cache purge for one SaaS Custom Domains custom domain. */
    "saas_custom_domains.purge_custom_domain_http_cache": {
      input: {
        /**
         * SaaS Custom Domains account UUID.
         * @minLength 1
         */
        account_uuid: string;
        /**
         * SaaS Custom Domains upstream UUID.
         * @minLength 1
         */
        upstream_uuid: string;
        /**
         * SaaS Custom Domains custom domain UUID.
         * @minLength 1
         */
        domain_uuid: string;
      };
      output: {
        /** Cache purge message returned by SaaS Custom Domains. */
        message: string;
      };
    };
    /** Trigger DNS record verification for one SaaS Custom Domains custom domain. */
    "saas_custom_domains.verify_custom_domain_dns_records": {
      input: {
        /**
         * SaaS Custom Domains account UUID.
         * @minLength 1
         */
        account_uuid: string;
        /**
         * SaaS Custom Domains upstream UUID.
         * @minLength 1
         */
        upstream_uuid: string;
        /**
         * SaaS Custom Domains custom domain UUID.
         * @minLength 1
         */
        domain_uuid: string;
      };
      output: {
        /** Verification message returned by SaaS Custom Domains. */
        message: string;
        /** DNS verification status returned by SaaS Custom Domains. */
        dns_status: string;
        /** Custom domain host that was verified. */
        host: string;
      };
    };
  }
}
