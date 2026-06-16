import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one RenderForm template by identifier and return its normalized template details. */
    "renderform.get_template": {
      input: {
        /**
         * Template identifier to retrieve.
         * @minLength 1
         */
        templateId: string;
      };
      output: {
        /** RenderForm template summary returned by the API. */
        template: {
          /**
           * Unique template identifier.
           * @minLength 1
           */
          identifier: string;
          /**
           * Template display name.
           * @minLength 1
           */
          name: string;
          /**
           * Preview URL for the template when available.
           * @format uri
           */
          preview?: string | null;
          /** Template width in pixels when available. */
          width?: number | null;
          /** Template height in pixels when available. */
          height?: number | null;
          /** Configured output format such as `jpg`, `png`, or `pdf`. */
          outputFormat?: string | null;
          /** Configured file extension such as `.jpg` or `.pdf`. */
          outputExtension?: string | null;
          /**
           * Template creation timestamp when available.
           * @format date-time
           */
          createdAt?: string | null;
          /** Template tags. */
          tags?: Array<string>;
          /** Raw template payload returned by RenderForm. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get current RenderForm credit usage for the API key and return a normalized usage summary. */
    "renderform.get_usage": {
      input: Record<string, never>;
      output: {
        /** Current RenderForm usage counters for the authenticated account. */
        usage: {
          /** Unique RenderForm organization identifier for the authenticated API key. */
          identifier: string | null;
          /** RenderForm credit usage summary. */
          credits: {
            /** Credits already used in the current billing period. */
            used: number;
            /** Total credits available in the current billing period. */
            total: number;
            /** Date or timestamp when credits will be renewed when available. */
            nextRenewalAt: string | null;
            /** Number of credits to be granted on the next renewal when available. */
            renewalAmount: number | null;
          };
          /** RenderForm upload storage usage summary. */
          uploads: {
            /** Current upload storage used in bytes. */
            used: number;
            /** Maximum upload storage available in bytes. */
            total: number;
          };
          /** Current RenderForm subscription plan summary. */
          plan: {
            /** Current RenderForm plan name when available. */
            name: string | null;
            /** Current RenderForm plan status when available. */
            status: string | null;
            /** Date or timestamp of the next billing event when available. */
            nextBillingAt: string | null;
          } | null;
          /** Raw usage payload returned by RenderForm. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List RenderForm generated results with pagination and optional template or batch filters. */
    "renderform.list_results": {
      input: {
        /**
         * Zero-based page number.
         * @minimum 0
         */
        page?: number;
        /**
         * Number of results to return per page.
         * @minimum 1
         * @maximum 50
         */
        size?: number;
        /**
         * Optional batch identifier filter.
         * @minLength 1
         */
        batch?: string;
        /**
         * Optional template identifier filter.
         * @minLength 1
         */
        template?: string;
      };
      output: {
        /** RenderForm results returned by the page. */
        results: Array<{
          /**
           * Unique result identifier.
           * @minLength 1
           */
          identifier: string;
          /**
           * Download URL for the generated file.
           * @format uri
           */
          href: string;
          /** Generated width in pixels when available. */
          width?: number | null;
          /** Generated height in pixels when available. */
          height?: number | null;
          /** Generated file name when RenderForm returns one. */
          fileName?: string | null;
          /**
           * Result creation timestamp when available.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * Deletion timestamp when the result has been removed.
           * @format date-time
           */
          deletedAt?: string | null;
          /** Template name used for the render when available. */
          templateName?: string | null;
          /** Template identifier used for the render when available. */
          templateIdentifier?: string | null;
          /** Raw result payload returned by RenderForm. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Current zero-based page number. */
        page: number;
        /** Requested page size. */
        size: number;
        /** Total page count when RenderForm returns one. */
        totalPages: number | null;
        /** Total result count when RenderForm returns one. */
        totalElements: number | null;
        /** Number of results present in the current page when available. */
        numberOfElements: number | null;
        /** Whether this page is the first page. */
        first: boolean;
        /** Whether this page is the last page. */
        last: boolean;
        /** Whether this page is empty. */
        empty: boolean;
        /** Page metadata returned by RenderForm for paginated responses. */
        pageable: {
          /** Sort flags returned by RenderForm pagination responses. */
          sort: {
            /** Whether the sort definition is empty. */
            empty: boolean;
            /** Whether the result set is sorted. */
            sorted: boolean;
            /** Whether the result set is unsorted. */
            unsorted: boolean;
          };
          /** Zero-based item offset for the current page. */
          offset: number;
          /** Zero-based page number. */
          pageNumber: number;
          /** Configured page size. */
          pageSize: number;
          /** Whether pagination is disabled. */
          unpaged: boolean;
          /** Whether pagination is enabled. */
          paged: boolean;
        } | null;
        /** Sort flags returned by RenderForm pagination responses. */
        sort: {
          /** Whether the sort definition is empty. */
          empty: boolean;
          /** Whether the result set is sorted. */
          sorted: boolean;
          /** Whether the result set is unsorted. */
          unsorted: boolean;
        } | null;
      };
    };
    /** List RenderForm templates with optional pagination and filters for name, tags, and source template ID. */
    "renderform.list_templates": {
      input: {
        /**
         * Optional template name filter.
         * @minLength 1
         */
        name?: string;
        /**
         * Zero-based page number.
         * @minimum 0
         */
        page?: number;
        /**
         * Number of templates to return per page.
         * @minimum 1
         * @maximum 50
         */
        size?: number;
        /**
         * Template tags used to filter the template list.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * Optional source template identifier used to filter cloned templates.
         * @minLength 1
         */
        sourceTemplateId?: string;
      };
      output: {
        /** Template summaries returned by RenderForm. */
        templates: Array<{
          /**
           * Unique template identifier.
           * @minLength 1
           */
          identifier: string;
          /**
           * Template display name.
           * @minLength 1
           */
          name: string;
          /**
           * Preview URL for the template when available.
           * @format uri
           */
          preview?: string | null;
          /** Template width in pixels when available. */
          width?: number | null;
          /** Template height in pixels when available. */
          height?: number | null;
          /** Configured output format such as `jpg`, `png`, or `pdf`. */
          outputFormat?: string | null;
          /** Configured file extension such as `.jpg` or `.pdf`. */
          outputExtension?: string | null;
          /**
           * Template creation timestamp when available.
           * @format date-time
           */
          createdAt?: string | null;
          /** Template tags. */
          tags?: Array<string>;
          /** Raw template payload returned by RenderForm. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Current zero-based page number. */
        page: number;
        /** Requested page size. */
        size: number;
        /** Total page count when RenderForm returns one. */
        totalPages: number | null;
        /** Total template count when RenderForm returns one. */
        totalElements: number | null;
        /** Number of templates present in the current page when available. */
        numberOfElements: number | null;
        /** Whether this page is the first page. */
        first: boolean;
        /** Whether this page is the last page. */
        last: boolean;
        /** Whether this page is empty. */
        empty: boolean;
        /** Page metadata returned by RenderForm for paginated responses. */
        pageable: {
          /** Sort flags returned by RenderForm pagination responses. */
          sort: {
            /** Whether the sort definition is empty. */
            empty: boolean;
            /** Whether the result set is sorted. */
            sorted: boolean;
            /** Whether the result set is unsorted. */
            unsorted: boolean;
          };
          /** Zero-based item offset for the current page. */
          offset: number;
          /** Zero-based page number. */
          pageNumber: number;
          /** Configured page size. */
          pageSize: number;
          /** Whether pagination is disabled. */
          unpaged: boolean;
          /** Whether pagination is enabled. */
          paged: boolean;
        } | null;
        /** Sort flags returned by RenderForm pagination responses. */
        sort: {
          /** Whether the sort definition is empty. */
          empty: boolean;
          /** Whether the result set is sorted. */
          sorted: boolean;
          /** Whether the result set is unsorted. */
          unsorted: boolean;
        } | null;
      };
    };
    /** Render one RenderForm image or PDF from a template and return the request identifier, file URL, and echoed request. */
    "renderform.render_image": {
      input: {
        /**
         * Template identifier to render.
         * @minLength 1
         */
        template: string;
        /** Template data object forwarded to RenderForm for placeholder replacement. */
        data?: Record<string, unknown>;
        /**
         * Optional custom output file name.
         * @minLength 1
         */
        fileName?: string;
        /**
         * Optional webhook URL called by RenderForm after rendering completes.
         * @format uri
         */
        webhookUrl?: string;
        /** Arbitrary metadata object stored together with the generated RenderForm result. */
        metadata?: Record<string, unknown>;
        /**
         * Optional cache-busting version string used to force a fresh render.
         * @minLength 1
         */
        version?: string;
        /**
         * Optional output width in pixels.
         * @exclusiveMinimum 0
         */
        width?: number;
        /**
         * Optional output height in pixels.
         * @exclusiveMinimum 0
         */
        height?: number;
        /**
         * Optional wait time in milliseconds before rendering begins.
         * @minimum 0
         * @maximum 5000
         */
        waitTime?: number;
      };
      output: {
        /**
         * Unique request identifier for this render.
         * @minLength 1
         */
        requestId: string;
        /**
         * URL of the generated image or PDF file.
         * @format uri
         */
        href: string;
        /** Echoed request payload returned by RenderForm when available. */
        request: Record<string, unknown>;
      };
    };
    /** Capture one website screenshot with RenderForm and return the request identifier, file URL, and echoed request. */
    "renderform.take_screenshot": {
      input: {
        /**
         * Website URL to capture.
         * @format uri
         */
        url: string;
        /**
         * Screenshot width in pixels.
         * @exclusiveMinimum 0
         */
        width: number;
        /**
         * Screenshot height in pixels.
         * @exclusiveMinimum 0
         */
        height: number;
        /**
         * Optional wait time in milliseconds before capture.
         * @minimum 500
         * @maximum 5000
         */
        waitTime?: number;
      };
      output: {
        /**
         * Unique request identifier for this screenshot.
         * @minLength 1
         */
        requestId: string;
        /**
         * URL of the generated screenshot file.
         * @format uri
         */
        href: string;
        /** Echoed request payload returned by RenderForm when available. */
        request: Record<string, unknown>;
      };
    };
  }
}
