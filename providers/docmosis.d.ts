import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check whether the selected Docmosis environment is currently ready to service render requests. */
    "docmosis.check_environment_ready": {
      input: Record<string, never>;
      output: {
        /** Whether the selected Docmosis environment is ready. */
        ready: boolean;
        /** Whether Docmosis reported the request as successful. */
        succeeded: boolean;
        /** The short Docmosis response message. */
        shortMsg: string | null;
        /** The long Docmosis response message. */
        longMsg: string | null;
      };
    };
    /** Get Docmosis environment plan, quota, and readiness information for the selected processing location. */
    "docmosis.get_environment_summary": {
      input: Record<string, never>;
      output: {
        /** Whether Docmosis reported the request as successful. */
        succeeded: boolean;
        /** The short Docmosis response message. */
        shortMsg: string | null;
        /** The long Docmosis response message. */
        longMsg: string | null;
        /** A normalized Docmosis environment summary. */
        summary: {
          /** The Docmosis environment name. */
          environmentName: string | null;
          /** Whether the environment is ready to service document requests. */
          ready: boolean | null;
          /** The Docmosis plan name. */
          planName: string | null;
          /** Whether the environment is activated. */
          isActivated: boolean | null;
          /** Whether the environment is deleted. */
          isDeleted: boolean | null;
          /** Whether the environment is disabled. */
          isDisabled: boolean | null;
          /** The user who last updated the environment when available. */
          lastUpdatedByUser: string | null;
          /** The Unix epoch timestamp in milliseconds when the environment was last updated. */
          lastUpdatedTime: number | null;
          /** The environment page quota details when available. */
          pageQuota: {
            /** The total page quota. */
            quota: number | null;
            /** The used page quota. */
            used: number | null;
            /** The percentage of the quota that has been used. */
            pctUsed: number | null;
            /** The human-readable quota usage percentage. */
            pctUsedStr: string | null;
            /** Whether the page quota is hard limited. */
            isHardLimited: boolean | null;
          } | null;
          /** The raw environment summary payload returned by Docmosis. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the stored metadata for one uploaded Docmosis template without downloading the template file. */
    "docmosis.get_template_details": {
      input: {
        /**
         * The template path to inspect.
         * @minLength 1
         */
        templateName: string;
      };
      output: {
        /** Whether Docmosis reported the request as successful. */
        succeeded: boolean;
        /** The short Docmosis response message. */
        shortMsg: string | null;
        /** The long Docmosis response message. */
        longMsg: string | null;
        /** One Docmosis template summary. */
        template: {
          /**
           * The template path in the selected Docmosis environment.
           * @minLength 1
           */
          name: string;
          /** The Unix epoch timestamp in milliseconds when the template was last modified. */
          lastModifiedMillisSinceEpoch: number | null;
          /** The ISO 8601 timestamp when the template was last modified. */
          lastModifiedISO8601: string | null;
          /** The template size in bytes. */
          sizeBytes: number | null;
          /** The MD5 hash of the template file. */
          md5: string | null;
          /** The plain-text field prefix configured when the template was uploaded. */
          templatePlainTextFieldPrefix: string | null;
          /** The plain-text field suffix configured when the template was uploaded. */
          templatePlainTextFieldSuffix: string | null;
          /** Whether Docmosis detected template errors. */
          templateHasErrors: boolean | null;
          /** Whether the template was uploaded in development mode. */
          templateDevMode: boolean | null;
          /** The uploaded template description when available. */
          templateDescription: string | null;
          /** The raw template details object returned by Docmosis. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the Docmosis template structure tree that describes fields, repeats, conditions, and other data references. */
    "docmosis.get_template_structure": {
      input: {
        /**
         * The template path to inspect.
         * @minLength 1
         */
        templateName: string;
      };
      output: {
        /** Whether Docmosis detected template errors. */
        templateHasErrors: boolean | null;
        /** The first template error message when one exists. */
        templateErrorMessage: string | null;
        /** The Docmosis template structure tree returned by the API. */
        templateStructure: Array<Record<string, unknown>>;
      };
    };
    /** List Docmosis templates available in the selected processing location with optional folder and paging controls. */
    "docmosis.list_templates": {
      input: {
        /** Whether to include extra template detail such as template error status. */
        includeDetail?: boolean;
        /**
         * The optional starting folder path to list.
         * @minLength 1
         */
        folder?: string;
        /** Whether template results should include templates inside sub-folders. */
        includeSubFolders?: boolean;
        /** Whether Docmosis should return paged results. */
        paging?: boolean;
        /**
         * The pagination token previously returned by Docmosis.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * The page size to request when paging is enabled.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
      };
      output: {
        /** Whether Docmosis detected a temporary stale template list during updates. */
        templateListStale: boolean | null;
        /** The token for the next template page when available. */
        nextPageToken: string | null;
        /** The effective page size returned by Docmosis. */
        pageSize: number | null;
        /** The templates returned by Docmosis. */
        templates: Array<{
          /**
           * The template path in the selected Docmosis environment.
           * @minLength 1
           */
          name: string;
          /** The Unix epoch timestamp in milliseconds when the template was last modified. */
          lastModifiedMillisSinceEpoch: number | null;
          /** The ISO 8601 timestamp when the template was last modified. */
          lastModifiedISO8601: string | null;
          /** The template size in bytes. */
          sizeBytes: number | null;
          /** The MD5 hash of the template file. */
          md5: string | null;
          /** The plain-text field prefix configured when the template was uploaded. */
          templatePlainTextFieldPrefix: string | null;
          /** The plain-text field suffix configured when the template was uploaded. */
          templatePlainTextFieldSuffix: string | null;
          /** Whether Docmosis detected template errors. */
          templateHasErrors: boolean | null;
          /** Whether the template was uploaded in development mode. */
          templateDevMode: boolean | null;
          /** The uploaded template description when available. */
          templateDescription: string | null;
          /** The raw template details object returned by Docmosis. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Render one Docmosis template with JSON data and return JSON-safe delivery metadata or an explicit base64 result file. */
    "docmosis.render_document": {
      input: {
        /**
         * The Docmosis template path to render.
         * @minLength 1
         */
        templateName: string;
        /**
         * The output filename including the preferred extension.
         * @minLength 1
         */
        outputName: string;
        /** The JSON data payload merged into the template. */
        data: unknown;
        /** The optional output format override. */
        outputFormat?: "PDF" | "DOCX" | "ODT" | "TXT";
        /**
         * The optional Docmosis delivery target such as `mailto:person@example.com` or `s3:bucket,key`.
         * @minLength 1
         */
        storeTo?: string;
        /**
         * The optional semicolon-delimited tags recorded against the render.
         * @minLength 1
         */
        tags?: string;
        /**
         * The optional request identifier echoed by Docmosis.
         * @minLength 1
         */
        requestId?: string;
        /**
         * The optional source identifier associated with the render.
         * @minLength 1
         */
        sourceId?: string;
        /**
         * The optional email subject when using mailto delivery.
         * @minLength 1
         */
        mailSubject?: string;
        /**
         * The optional HTML email body when using mailto delivery.
         * @minLength 1
         */
        mailBodyHtml?: string;
        /**
         * The optional plain-text email body when using mailto delivery.
         * @minLength 1
         */
        mailBodyText?: string;
        /** Whether Docmosis should render in development mode instead of strict production mode. */
        devMode?: boolean;
        /** Whether the streamed result should be returned as base64 in the connector response. */
        returnResultFileBase64?: boolean;
      };
      output: {
        /** Whether Docmosis reported the render as successful. */
        succeeded: boolean;
        /** The short Docmosis render message. */
        shortMsg: string | null;
        /** The long Docmosis render message. */
        longMsg: string | null;
        /** The render request identifier when returned by Docmosis. */
        requestId: string | null;
        /** The rendered document content encoded as base64 when explicitly requested. */
        resultFileBase64: string | null;
        /** The Docmosis render queue state when returned. */
        queue: {
          /** Whether the current render queue rejected the request. */
          rejected: boolean | null;
          /** The percentage of queue capacity still available. */
          availablePct: number | null;
          /** The suggested backoff delay in seconds. */
          delaySeconds: number | null;
        } | null;
        /** The selected Docmosis response headers. */
        headers: {
          /** The Docmosis request identifier header when present. */
          requestId: string | null;
          /** The number of rendered pages when present. */
          pagesRendered: number | null;
          /** Whether Docmosis created a ZIP archive. */
          zipCreated: boolean | null;
          /** Whether Docmosis detected document errors during rendering. */
          documentErrorsDetected: boolean | null;
          /** Whether the render queue rejected the request. */
          queueRejected: boolean | null;
          /** The percentage of queue capacity still available. */
          queueAvailablePct: number | null;
          /** The suggested render queue delay in seconds. */
          queueDelaySeconds: number | null;
          /** The Retry-After header value in seconds when present. */
          retryAfter: number | null;
          /** The Docmosis server identifier header when present. */
          server: string | null;
        };
        /** The webhook delivery results returned by Docmosis when mail or webhooks are involved. */
        webHookResults: Array<Record<string, unknown>>;
      };
    };
  }
}
