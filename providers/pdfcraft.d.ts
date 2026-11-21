import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a PDFCraft MCP tool using its live schema from list_tools. Results preserve the upstream data envelope. For file conversion, prefer submit_transform to handle uploading a public file URL. get_download_urls defaults to complete output; request limited output only explicitly. */
    "pdfcraft.call_tool": {
      input: {
        /**
         * The exact tool name returned by list_tools.
         * @minLength 1
         * @pattern \S
         */
        toolName: string;
        /** JSON arguments matching the selected tool schema; defaults to an empty object. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** The upstream MCP result, including data, recovery guidance and any additional fields. */
        result: unknown;
      };
    };
    /** Get a PDFCraft task and its progress or failure recovery guidance. When succeeded, call get_download_urls through call_tool and save the result before it expires. */
    "pdfcraft.get_transform": {
      input: {
        /**
         * The PDFCraft transform UUID. Save it to resume the task.
         * @format uuid
         */
        uuid: string;
      };
      output: {
        /**
         * The PDFCraft transform UUID. Save it to resume the task.
         * @format uuid
         */
        uuid?: string;
        /** The task state: waiting_for_upload, running, succeeded, failed or cancelled. */
        status?: string;
        [key: string]: unknown;
      };
    };
    /** Discover PDFCraft tools and their live schemas for conversion, translation, balance, estimates, task recovery and downloads. Call get_capabilities through call_tool before the first conversion. */
    "pdfcraft.list_tools": {
      input: Record<string, never>;
      output: {
        /** Available tools with input and output schemas. */
        tools: Array<Record<string, unknown>>;
      };
    };
    /** Download a public PDF or EPUB URL, create a PDFCraft task, upload the bytes and launch conversion or translation. Uses OOMOL credits. Returns immediately after launch; use get_transform to check completion, then call get_download_urls for a download link. Connector accepts files up to 100 MiB. On failure after creation, retain the UUID from the error and resume that task instead of creating another. */
    "pdfcraft.submit_transform": {
      input: {
        /**
         * A publicly accessible direct file download URL; local paths are not supported.
         * @format uri
         */
        fileUrl: string;
        /** The source document format. */
        input_format: "pdf" | "epub";
        /**
         * An optional display name for the source document.
         * @minLength 1
         * @maxLength 255
         */
        input_filename?: string;
        /** Conversion parameters. PDF supports Markdown or EPUB without translation; PDF output and EPUB input require translation. EPUB input does not accept refinement. */
        parameters: {
          /** The output format. Markdown is downloaded as a ZIP archive. */
          output_format: "markdown" | "epub" | "pdf";
          /** The case-sensitive translation target; omit to keep the source language for PDF to Markdown or EPUB. */
          target_language?: "zh-CN" | "en" | "de" | "es" | "fr" | "it" | "ja" | "ko" | "pt" | "ru" | "ar" | "hi" | "nl" | "pl" | "tr" | "vi" | "th" | "id" | "sv" | "da" | "no" | "fi";
          /** Defaults to source without translation and replace with translation. PDF output only supports replace. */
          rendering_mode?: "source" | "replace" | "bilingual" | "bilingual-inline";
          /**
           * Optional terminology instructions; only allowed with translation.
           * @minLength 1
           * @pattern \S
           */
          translation_prompt?: string;
          /** PDF-only extraction mode. Defaults to disabled. */
          refinement?: "disabled" | "refinement_with_footnotes";
        };
      };
      output: {
        /**
         * The PDFCraft transform UUID. Save it to resume the task.
         * @format uuid
         */
        uuid?: string;
        /** The task state: waiting_for_upload, running, succeeded, failed or cancelled. */
        status?: string;
        [key: string]: unknown;
      };
    };
  }
}
