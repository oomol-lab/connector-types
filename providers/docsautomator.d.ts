import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate one DocsAutomator document synchronously and return the resulting file URLs plus signing metadata when available. */
    "docsautomator.create_document": {
      input: {
        /**
         * The DocsAutomator automation ID to execute.
         * @minLength 1
         */
        automationId?: string;
        /**
         * Alias for automationId accepted by DocsAutomator.
         * @minLength 1
         */
        docId?: string;
        /** Template placeholder values forwarded to DocsAutomator. Keys should match your template placeholders. */
        data?: Record<string, unknown>;
        /**
         * An optional output document name override.
         * @minLength 1
         */
        documentName?: string;
        /** Custom webhook parameters forwarded to DocsAutomator as additionalParams. */
        webhookParams?: Record<string, unknown>;
        /**
         * A list of publicly accessible PDF URLs used by DocsAutomator for merge operations.
         * @minItems 1
         */
        existingPdfs?: Array<string>;
        /**
         * An optional Google Doc template URL override used for this request only.
         * @format uri
         */
        docTemplateLink?: string;
      };
      output: {
        /** The normalized DocsAutomator document creation result. */
        document: {
          /** The status message returned by DocsAutomator. */
          message: string | null;
          /**
           * The generated PDF URL when DocsAutomator returns one.
           * @format uri
           */
          pdfUrl: string | null;
          /** The generated document name returned by DocsAutomator. */
          documentName: string | null;
          /**
           * The saved Google Doc URL when the automation is configured to save it.
           * @format uri
           */
          googleDocUrl: string | null;
          /**
           * The saved Google Drive PDF URL when DocsAutomator returns it.
           * @format uri
           */
          googleDrivePdfUrl: string | null;
          /** The saved Google Drive PDF file identifier when DocsAutomator returns it. */
          googleDrivePdfFileId: string | null;
          /** The e-signature session identifier when the automation creates one. */
          signingSessionId: string | null;
          /** The signing session status returned by DocsAutomator. */
          signingStatus: string | null;
          /** The signing links returned by DocsAutomator for each signer. */
          signingLinks: Array<{
            /** The zero-based signer index returned by DocsAutomator. */
            signerIndex: number | null;
            /** The signer email returned by DocsAutomator. */
            email: string | null;
            /** The signer name returned by DocsAutomator. */
            name: string | null;
            /**
             * The signer URL returned by DocsAutomator.
             * @format uri
             */
            signingUrl: string | null;
            /** The signer status returned by DocsAutomator. */
            status: string | null;
          }>;
          /** The raw document creation payload returned by DocsAutomator. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Queue one DocsAutomator document generation job and return the job handle for later polling. */
    "docsautomator.create_document_async": {
      input: {
        /**
         * The DocsAutomator automation ID to execute.
         * @minLength 1
         */
        automationId?: string;
        /**
         * Alias for automationId accepted by DocsAutomator.
         * @minLength 1
         */
        docId?: string;
        /** Template placeholder values forwarded to DocsAutomator. Keys should match your template placeholders. */
        data?: Record<string, unknown>;
        /**
         * An optional output document name override.
         * @minLength 1
         */
        documentName?: string;
        /** Custom webhook parameters forwarded to DocsAutomator as additionalParams. */
        webhookParams?: Record<string, unknown>;
        /**
         * A list of publicly accessible PDF URLs used by DocsAutomator for merge operations.
         * @minItems 1
         */
        existingPdfs?: Array<string>;
        /**
         * An optional Google Doc template URL override used for this request only.
         * @format uri
         */
        docTemplateLink?: string;
      };
      output: {
        /** The DocsAutomator async job handle. */
        job: {
          /** The queue acknowledgement message returned by DocsAutomator. */
          message: string | null;
          /**
           * The DocsAutomator job identifier used for polling.
           * @minLength 1
           */
          jobId: string;
          /** The DocsAutomator request log identifier when returned. */
          logId: string | null;
          /** The raw async queue payload returned by DocsAutomator. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one DocsAutomator automation by automationId or docId and return its current generation-related settings. */
    "docsautomator.get_automation": {
      input: {
        /**
         * The DocsAutomator automation ID to target for this request.
         * @minLength 1
         */
        automationId?: string;
        /**
         * Alias for automationId accepted by the DocsAutomator API.
         * @minLength 1
         */
        docId?: string;
      };
      output: {
        /** A normalized DocsAutomator automation summary. */
        automation: {
          /**
           * The automation identifier returned by DocsAutomator.
           * @minLength 1
           */
          id: string;
          /** The automation title returned by DocsAutomator. */
          title: string | null;
          /** The automation data source name returned by DocsAutomator. */
          dataSourceName: string | null;
          /** The raw automation data source object returned by DocsAutomator. */
          dataSource: Record<string, unknown> | null;
          /**
           * The Google Doc template URL configured on the automation.
           * @format uri
           */
          docTemplateLink: string | null;
          /** The document naming field configured on the automation. */
          newDocumentNameField: string | null;
          /** Whether the automation is active. */
          isActive: boolean | null;
          /** Whether the automation saves a Google Doc copy when generating documents. */
          saveGoogleDoc: boolean | null;
          /** The locale configured on the automation. */
          locale: string | null;
          /** Whether DocsAutomator formats numbers using the automation locale. */
          formatNumbersWithLocale: boolean | null;
          /** The PDF expiration setting configured on the automation. */
          pdfExpiration: string | null;
          /**
           * The automation creation timestamp.
           * @format date-time
           */
          dateCreated: string | null;
          /**
           * The last preview PDF URL when DocsAutomator returns one.
           * @format uri
           */
          lastPreviewPdf: string | null;
          /** The raw automation object returned by DocsAutomator. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the current status of a DocsAutomator async document generation job and return the finished document result when available. */
    "docsautomator.get_document_job": {
      input: {
        /**
         * The DocsAutomator job identifier returned by create_document_async.
         * @minLength 1
         */
        jobId: string;
      };
      output: {
        /** The normalized DocsAutomator document job state. */
        job: {
          /**
           * The DocsAutomator job identifier.
           * @minLength 1
           */
          jobId: string;
          /**
           * The current job status returned by DocsAutomator.
           * @minLength 1
           */
          status: string;
          /** The job progress percentage returned by DocsAutomator. */
          progress: number | null;
          /**
           * The timestamp when the job was created.
           * @format date-time
           */
          createdAt: string | null;
          /**
           * The timestamp when the job started processing.
           * @format date-time
           */
          processedOn: string | null;
          /**
           * The timestamp when the job finished processing.
           * @format date-time
           */
          finishedOn: string | null;
          /** The number of processing attempts reported by DocsAutomator. */
          attempts: number | null;
          /** The job error string when DocsAutomator reports a failure. */
          error: string | null;
          /** The raw job payload returned by DocsAutomator. */
          raw: Record<string, unknown>;
        };
        /** The normalized DocsAutomator document creation result. */
        document: {
          /** The status message returned by DocsAutomator. */
          message: string | null;
          /**
           * The generated PDF URL when DocsAutomator returns one.
           * @format uri
           */
          pdfUrl: string | null;
          /** The generated document name returned by DocsAutomator. */
          documentName: string | null;
          /**
           * The saved Google Doc URL when the automation is configured to save it.
           * @format uri
           */
          googleDocUrl: string | null;
          /**
           * The saved Google Drive PDF URL when DocsAutomator returns it.
           * @format uri
           */
          googleDrivePdfUrl: string | null;
          /** The saved Google Drive PDF file identifier when DocsAutomator returns it. */
          googleDrivePdfFileId: string | null;
          /** The e-signature session identifier when the automation creates one. */
          signingSessionId: string | null;
          /** The signing session status returned by DocsAutomator. */
          signingStatus: string | null;
          /** The signing links returned by DocsAutomator for each signer. */
          signingLinks: Array<{
            /** The zero-based signer index returned by DocsAutomator. */
            signerIndex: number | null;
            /** The signer email returned by DocsAutomator. */
            email: string | null;
            /** The signer name returned by DocsAutomator. */
            name: string | null;
            /**
             * The signer URL returned by DocsAutomator.
             * @format uri
             */
            signingUrl: string | null;
            /** The signer status returned by DocsAutomator. */
            status: string | null;
          }>;
          /** The raw document creation payload returned by DocsAutomator. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Return current DocsAutomator queue statistics for the connected workspace. */
    "docsautomator.get_queue_stats": {
      input: Record<string, never>;
      output: {
        /** The DocsAutomator workspace queue statistics. */
        queue: {
          /** The number of queued jobs waiting to be processed. */
          waiting: number;
          /** The number of jobs currently being processed. */
          active: number;
          /** The number of completed jobs reported by DocsAutomator. */
          completed: number;
          /** The number of failed jobs reported by DocsAutomator. */
          failed: number;
          /** The number of delayed jobs reported by DocsAutomator. */
          delayed: number;
          /** The raw queue statistics payload returned by DocsAutomator. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List DocsAutomator automations in the current workspace with the core fields needed for document generation setup. */
    "docsautomator.list_automations": {
      input: Record<string, never>;
      output: {
        /** The automations returned by DocsAutomator. */
        automations: Array<{
          /**
           * The automation identifier returned by DocsAutomator.
           * @minLength 1
           */
          id: string;
          /** The automation title returned by DocsAutomator. */
          title: string | null;
          /** The automation data source name returned by DocsAutomator. */
          dataSourceName: string | null;
          /** The raw automation data source object returned by DocsAutomator. */
          dataSource: Record<string, unknown> | null;
          /**
           * The Google Doc template URL configured on the automation.
           * @format uri
           */
          docTemplateLink: string | null;
          /** The document naming field configured on the automation. */
          newDocumentNameField: string | null;
          /** Whether the automation is active. */
          isActive: boolean | null;
          /** Whether the automation saves a Google Doc copy when generating documents. */
          saveGoogleDoc: boolean | null;
          /** The locale configured on the automation. */
          locale: string | null;
          /** Whether DocsAutomator formats numbers using the automation locale. */
          formatNumbersWithLocale: boolean | null;
          /** The PDF expiration setting configured on the automation. */
          pdfExpiration: string | null;
          /**
           * The automation creation timestamp.
           * @format date-time
           */
          dateCreated: string | null;
          /**
           * The last preview PDF URL when DocsAutomator returns one.
           * @format uri
           */
          lastPreviewPdf: string | null;
          /** The raw automation object returned by DocsAutomator. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List the placeholder groups extracted from a DocsAutomator Google Doc template for one automation. */
    "docsautomator.list_template_placeholders": {
      input: {
        /**
         * The DocsAutomator automation ID to target for this request.
         * @minLength 1
         */
        automationId?: string;
        /**
         * Alias for automationId accepted by the DocsAutomator API.
         * @minLength 1
         */
        docId?: string;
      };
      output: {
        /** The DocsAutomator placeholder groups keyed by main or line item group names. */
        placeholders: Record<string, Array<string>>;
      };
    };
  }
}
