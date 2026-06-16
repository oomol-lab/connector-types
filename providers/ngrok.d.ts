import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch one ngrok endpoint by ID and return the upstream endpoint object. */
    "ngrok.get_endpoint": {
      input: {
        /**
         * Unique identifier of the ngrok endpoint.
         * @minLength 1
         */
        endpoint_id: string;
      };
      output: {
        /** Unique endpoint resource identifier. */
        id: string;
        /** Timestamp when the endpoint was created. */
        created_at: string;
        /** Timestamp when the endpoint was last updated. */
        updated_at: string;
        /** Endpoint type returned by ngrok, such as edge or cloud. */
        type: string;
        /** Protocol served by this endpoint. */
        proto: string;
        /** Public URL currently serving this endpoint. */
        public_url?: string;
        /** API URL or frontend URL returned by ngrok for this endpoint. */
        url?: string;
        /** Human-readable description configured on this endpoint. */
        description?: string;
        /** User-defined metadata attached to this endpoint. */
        metadata?: string;
        /** Host portion returned by ngrok for this endpoint. */
        host?: string;
        /** User-defined endpoint name returned by ngrok. */
        name?: string;
        /** Port returned by ngrok for this endpoint. */
        port?: number;
        /** Region identifier returned by ngrok for this endpoint. */
        region?: string;
        /** Scheme returned by ngrok for this endpoint. */
        scheme?: string;
        /** Bindings configured on this endpoint. */
        bindings?: Array<string>;
        /** Hostport returned by ngrok for this endpoint. */
        hostport?: string;
        /** TCP address reserved for this endpoint, when returned. */
        tcp_addr?: {
          /** ngrok resource identifier. */
          id: string;
          /** Canonical ngrok API URI for this resource. */
          uri: string;
          [key: string]: unknown;
        };
        /** Principal that owns this endpoint, when returned. */
        principal?: {
          /** ngrok resource identifier. */
          id: string;
          /** Canonical ngrok API URI for this resource. */
          uri: string;
          [key: string]: unknown;
        };
        /** Edge resource backing this endpoint, when returned. */
        edge?: {
          /** ngrok resource identifier. */
          id: string;
          /** Canonical ngrok API URI for this resource. */
          uri: string;
          [key: string]: unknown;
        };
        /** Reserved domain attached to this endpoint, when returned. */
        domain?: {
          /** ngrok resource identifier. */
          id: string;
          /** Canonical ngrok API URI for this resource. */
          uri: string;
          [key: string]: unknown;
        };
        /** Tunnel serving this endpoint, when returned. */
        tunnel?: {
          /** ngrok resource identifier. */
          id: string;
          /** Canonical ngrok API URI for this resource. */
          uri: string;
          [key: string]: unknown;
        };
        /** Tunnel session serving this endpoint, when returned. */
        tunnel_session?: {
          /** ngrok resource identifier. */
          id: string;
          /** Canonical ngrok API URI for this resource. */
          uri: string;
          [key: string]: unknown;
        };
        /** Upstream URL forwarded to by this endpoint, when returned. */
        upstream_url?: string;
        /** Upstream protocol used by the ngrok agent, when returned. */
        upstream_protocol?: string;
        /** Traffic policy attached to this endpoint, when returned. */
        traffic_policy?: string;
        /** Whether pooling is enabled for this endpoint. */
        pooling_enabled?: boolean;
        [key: string]: unknown;
      };
    };
    /** Fetch one ngrok reserved domain by ID and return the upstream domain object. */
    "ngrok.get_reserved_domain": {
      input: {
        /**
         * Unique identifier of the ngrok reserved domain.
         * @minLength 1
         */
        reserved_domain_id: string;
      };
      output: {
        /** Unique reserved domain resource identifier. */
        id: string;
        /** Canonical ngrok API URI for this reserved domain. */
        uri: string;
        /** Timestamp when this reserved domain was created. */
        created_at: string;
        /** Hostname reserved on the ngrok account. */
        domain: string;
        /** Deprecated region field returned by ngrok, when present. */
        region?: string;
        /** User-defined metadata attached to this reserved domain. */
        metadata?: string;
        /** Human-readable description configured on this reserved domain. */
        description?: string;
        /** TLS certificate currently attached to this reserved domain. */
        certificate?: {
          /** ngrok resource identifier. */
          id: string;
          /** Canonical ngrok API URI for this resource. */
          uri: string;
          [key: string]: unknown;
        };
        /** DNS CNAME target for this reserved domain. */
        cname_target?: string;
        /** DNS CNAME target used for ACME validation, when returned. */
        acme_challenge_cname_target?: string;
        /** Resolver targets configured on this reserved domain, when returned. */
        resolves_to?: Array<{
          /** Resolver target value returned by ngrok. */
          value: string;
          [key: string]: unknown;
        }>;
        /** Automatic certificate management policy, when enabled. */
        certificate_management_policy?: {
          /** Certificate authority used by automatic management. */
          authority: string;
          /** Private key type used by automatic management. */
          private_key_type: string;
          [key: string]: unknown;
        };
        /** Automatic certificate management status, when returned. */
        certificate_management_status?: {
          /** Timestamp when the managed certificate renews, when returned. */
          renews_at?: string;
          /** Certificate provisioning job status returned by ngrok, when present. */
          provisioning_job?: {
            /** Status or error message returned for the certificate job. */
            msg: string;
            /** Certificate job error code returned by ngrok, when present. */
            error_code?: string;
            /** Timestamp when ngrok will retry the certificate job, when present. */
            retries_at?: string;
            /** Timestamp when the certificate job started. */
            started_at: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List active ngrok endpoints for the current account, with optional pagination and CEL filtering. */
    "ngrok.list_endpoints": {
      input: {
        /**
         * Maximum number of results to return. ngrok accepts values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination cursor that requests results created before this resource ID.
         * @minLength 1
         */
        before_id?: string;
        /**
         * CEL filter expression used by ngrok to filter the returned resources.
         * @minLength 1
         */
        filter?: string;
      };
      output: {
        /** Canonical ngrok API URI for the endpoints collection. */
        uri: string;
        /** Active endpoints returned by ngrok for this page. */
        endpoints: Array<{
          /** Unique endpoint resource identifier. */
          id: string;
          /** Timestamp when the endpoint was created. */
          created_at: string;
          /** Timestamp when the endpoint was last updated. */
          updated_at: string;
          /** Endpoint type returned by ngrok, such as edge or cloud. */
          type: string;
          /** Protocol served by this endpoint. */
          proto: string;
          /** Public URL currently serving this endpoint. */
          public_url?: string;
          /** API URL or frontend URL returned by ngrok for this endpoint. */
          url?: string;
          /** Human-readable description configured on this endpoint. */
          description?: string;
          /** User-defined metadata attached to this endpoint. */
          metadata?: string;
          /** Host portion returned by ngrok for this endpoint. */
          host?: string;
          /** User-defined endpoint name returned by ngrok. */
          name?: string;
          /** Port returned by ngrok for this endpoint. */
          port?: number;
          /** Region identifier returned by ngrok for this endpoint. */
          region?: string;
          /** Scheme returned by ngrok for this endpoint. */
          scheme?: string;
          /** Bindings configured on this endpoint. */
          bindings?: Array<string>;
          /** Hostport returned by ngrok for this endpoint. */
          hostport?: string;
          /** TCP address reserved for this endpoint, when returned. */
          tcp_addr?: {
            /** ngrok resource identifier. */
            id: string;
            /** Canonical ngrok API URI for this resource. */
            uri: string;
            [key: string]: unknown;
          };
          /** Principal that owns this endpoint, when returned. */
          principal?: {
            /** ngrok resource identifier. */
            id: string;
            /** Canonical ngrok API URI for this resource. */
            uri: string;
            [key: string]: unknown;
          };
          /** Edge resource backing this endpoint, when returned. */
          edge?: {
            /** ngrok resource identifier. */
            id: string;
            /** Canonical ngrok API URI for this resource. */
            uri: string;
            [key: string]: unknown;
          };
          /** Reserved domain attached to this endpoint, when returned. */
          domain?: {
            /** ngrok resource identifier. */
            id: string;
            /** Canonical ngrok API URI for this resource. */
            uri: string;
            [key: string]: unknown;
          };
          /** Tunnel serving this endpoint, when returned. */
          tunnel?: {
            /** ngrok resource identifier. */
            id: string;
            /** Canonical ngrok API URI for this resource. */
            uri: string;
            [key: string]: unknown;
          };
          /** Tunnel session serving this endpoint, when returned. */
          tunnel_session?: {
            /** ngrok resource identifier. */
            id: string;
            /** Canonical ngrok API URI for this resource. */
            uri: string;
            [key: string]: unknown;
          };
          /** Upstream URL forwarded to by this endpoint, when returned. */
          upstream_url?: string;
          /** Upstream protocol used by the ngrok agent, when returned. */
          upstream_protocol?: string;
          /** Traffic policy attached to this endpoint, when returned. */
          traffic_policy?: string;
          /** Whether pooling is enabled for this endpoint. */
          pooling_enabled?: boolean;
          [key: string]: unknown;
        }>;
        /** URI of the next page, or null when there is no next page. */
        next_page_uri?: string | null;
        [key: string]: unknown;
      };
    };
    /** List reserved ngrok domains for the current account with pagination and CEL filtering. */
    "ngrok.list_reserved_domains": {
      input: {
        /**
         * Maximum number of results to return. ngrok accepts values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination cursor that requests results created before this resource ID.
         * @minLength 1
         */
        before_id?: string;
        /**
         * CEL filter expression used by ngrok to filter the returned resources.
         * @minLength 1
         */
        filter?: string;
      };
      output: {
        /** Canonical ngrok API URI for the reserved domains collection. */
        uri: string;
        /** Reserved domains returned by ngrok for this page. */
        reserved_domains: Array<{
          /** Unique reserved domain resource identifier. */
          id: string;
          /** Canonical ngrok API URI for this reserved domain. */
          uri: string;
          /** Timestamp when this reserved domain was created. */
          created_at: string;
          /** Hostname reserved on the ngrok account. */
          domain: string;
          /** Deprecated region field returned by ngrok, when present. */
          region?: string;
          /** User-defined metadata attached to this reserved domain. */
          metadata?: string;
          /** Human-readable description configured on this reserved domain. */
          description?: string;
          /** TLS certificate currently attached to this reserved domain. */
          certificate?: {
            /** ngrok resource identifier. */
            id: string;
            /** Canonical ngrok API URI for this resource. */
            uri: string;
            [key: string]: unknown;
          };
          /** DNS CNAME target for this reserved domain. */
          cname_target?: string;
          /** DNS CNAME target used for ACME validation, when returned. */
          acme_challenge_cname_target?: string;
          /** Resolver targets configured on this reserved domain, when returned. */
          resolves_to?: Array<{
            /** Resolver target value returned by ngrok. */
            value: string;
            [key: string]: unknown;
          }>;
          /** Automatic certificate management policy, when enabled. */
          certificate_management_policy?: {
            /** Certificate authority used by automatic management. */
            authority: string;
            /** Private key type used by automatic management. */
            private_key_type: string;
            [key: string]: unknown;
          };
          /** Automatic certificate management status, when returned. */
          certificate_management_status?: {
            /** Timestamp when the managed certificate renews, when returned. */
            renews_at?: string;
            /** Certificate provisioning job status returned by ngrok, when present. */
            provisioning_job?: {
              /** Status or error message returned for the certificate job. */
              msg: string;
              /** Certificate job error code returned by ngrok, when present. */
              error_code?: string;
              /** Timestamp when ngrok will retry the certificate job, when present. */
              retries_at?: string;
              /** Timestamp when the certificate job started. */
              started_at: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** URI of the next page, or null when there is no next page. */
        next_page_uri?: string | null;
        [key: string]: unknown;
      };
    };
    /** List online ngrok tunnel sessions for the current account with pagination and CEL filtering. */
    "ngrok.list_tunnel_sessions": {
      input: {
        /**
         * Maximum number of results to return. ngrok accepts values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination cursor that requests results created before this resource ID.
         * @minLength 1
         */
        before_id?: string;
        /**
         * CEL filter expression used by ngrok to filter the returned resources.
         * @minLength 1
         */
        filter?: string;
      };
      output: {
        /** Canonical ngrok API URI for the tunnel sessions collection. */
        uri: string;
        /** Online tunnel sessions returned by ngrok for this page. */
        tunnel_sessions: Array<{
          /** Unique tunnel session resource identifier. */
          id: string;
          /** Canonical ngrok API URI for this tunnel session. */
          uri: string;
          /** ngrok agent version serving this session. */
          agent_version: string;
          /** Credential that authenticated this tunnel session. */
          credential: {
            /** ngrok resource identifier. */
            id: string;
            /** Canonical ngrok API URI for this resource. */
            uri: string;
            [key: string]: unknown;
          };
          /** Source IP address of the tunnel session. */
          ip: string;
          /** Operating system reported by the ngrok agent. */
          os: string;
          /** ngrok region where this session is connected. */
          region: string;
          /** Timestamp when this tunnel session connected. */
          started_at: string;
          /** Transport protocol used by this tunnel session. */
          transport: string;
          /** User-defined metadata attached to this session. */
          metadata?: string;
          [key: string]: unknown;
        }>;
        /** URI of the next page, or null when there is no next page. */
        next_page_uri?: string | null;
        [key: string]: unknown;
      };
    };
    /** List online ngrok tunnels for the current account with pagination support. */
    "ngrok.list_tunnels": {
      input: {
        /**
         * Maximum number of results to return. ngrok accepts values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination cursor that requests results created before this resource ID.
         * @minLength 1
         */
        before_id?: string;
      };
      output: {
        /** Canonical ngrok API URI for the tunnels collection. */
        uri: string;
        /** Online tunnels returned by ngrok for this page. */
        tunnels: Array<{
          /** Unique tunnel resource identifier. */
          id: string;
          /** Timestamp when this tunnel was started. */
          started_at: string;
          /** Region where this tunnel is running. */
          region: string;
          /** Upstream address that this tunnel forwards traffic to. */
          forwards_to: string;
          /** Tunnel protocol returned by ngrok. */
          proto?: string;
          /** Public URL currently serving this tunnel. */
          public_url?: string;
          /** User-defined metadata attached to this tunnel. */
          metadata?: string;
          /** Endpoint served by this tunnel, when returned. */
          endpoint?: {
            /** ngrok resource identifier. */
            id: string;
            /** Canonical ngrok API URI for this resource. */
            uri: string;
            [key: string]: unknown;
          };
          /** Tunnel session currently serving this tunnel. */
          tunnel_session: {
            /** ngrok resource identifier. */
            id: string;
            /** Canonical ngrok API URI for this resource. */
            uri: string;
            [key: string]: unknown;
          };
          /** Backends attached to this tunnel group, when returned. */
          backends?: Array<{
            /** ngrok resource identifier. */
            id: string;
            /** Canonical ngrok API URI for this resource. */
            uri: string;
            [key: string]: unknown;
          }>;
          /** Label map returned by ngrok for this tunnel. */
          labels?: Record<string, string>;
          [key: string]: unknown;
        }>;
        /** URI of the next page, or null when there is no next page. */
        next_page_uri?: string | null;
        [key: string]: unknown;
      };
    };
  }
}
