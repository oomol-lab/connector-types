import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a MinerU precise extraction batch from document URLs. */
    "mineru.create_extract_batch": {
      input: {
        /**
         * The URL-based documents to submit for batch parsing.
         * @minItems 1
         * @maxItems 50
         */
        files: Array<{
          /**
           * The public HTTP or HTTPS URL of one document to parse with MinerU.
           * @format uri
           */
          url: string;
          /** Whether to enable OCR for this file. Only applies to pipeline and vlm models. */
          is_ocr?: boolean;
          /**
           * The caller-defined data identifier associated with the source document.
           * @minLength 1
           * @maxLength 128
           */
          data_id?: string;
          /**
           * The page range expression to parse for this file.
           * @minLength 1
           */
          page_ranges?: string;
        }>;
        /** Whether to enable formula recognition for pipeline and vlm models. */
        enable_formula?: boolean;
        /** Whether to enable table recognition for pipeline and vlm models. */
        enable_table?: boolean;
        /**
         * The document language code used by pipeline and vlm models.
         * @minLength 1
         */
        language?: string;
        /**
         * Additional result formats to export besides Markdown and JSON.
         * @minItems 1
         */
        extra_formats?: Array<"docx" | "html" | "latex">;
        /** The MinerU model version to use for parsing. */
        model_version?: "pipeline" | "vlm" | "MinerU-HTML";
        /** Whether MinerU should bypass its URL content cache. */
        no_cache?: boolean;
        /**
         * The acceptable MinerU URL cache age in seconds when no_cache is false.
         * @minimum 0
         */
        cache_tolerance?: number;
      };
      output: {
        /** The MinerU batch extraction task identifier. */
        batch_id: string;
        /** The upstream request trace identifier. */
        trace_id?: string;
        /** The upstream response message. */
        msg?: string;
      };
    };
    /** Create a MinerU precise extraction task from a document URL. */
    "mineru.create_extract_task": {
      input: {
        /**
         * The public HTTP or HTTPS URL of the document to parse with MinerU.
         * @format uri
         */
        url: string;
        /** Whether to enable OCR. Only applies to pipeline and vlm models. */
        is_ocr?: boolean;
        /** Whether to enable formula recognition for pipeline and vlm models. */
        enable_formula?: boolean;
        /** Whether to enable table recognition for pipeline and vlm models. */
        enable_table?: boolean;
        /**
         * The document language code used by pipeline and vlm models.
         * @minLength 1
         */
        language?: string;
        /**
         * The caller-defined data identifier associated with the source document.
         * @minLength 1
         * @maxLength 128
         */
        data_id?: string;
        /**
         * Additional result formats to export besides Markdown and JSON.
         * @minItems 1
         */
        extra_formats?: Array<"docx" | "html" | "latex">;
        /**
         * The page range expression to parse, such as 2,4-6 or 2--2.
         * @minLength 1
         */
        page_ranges?: string;
        /** The MinerU model version to use for parsing. */
        model_version?: "pipeline" | "vlm" | "MinerU-HTML";
        /** Whether MinerU should bypass its URL content cache. */
        no_cache?: boolean;
        /**
         * The acceptable MinerU URL cache age in seconds when no_cache is false.
         * @minimum 0
         */
        cache_tolerance?: number;
      };
      output: {
        /** The MinerU extraction task identifier. */
        task_id: string;
        /** The upstream request trace identifier. */
        trace_id?: string;
        /** The upstream response message. */
        msg?: string;
      };
    };
    /** Get the current status and result URLs for a MinerU extraction batch. */
    "mineru.get_extract_batch_results": {
      input: {
        /**
         * The MinerU batch extraction task identifier.
         * @minLength 1
         */
        batch_id: string;
      };
      output: {
        /** The MinerU batch extraction task identifier. */
        batch_id: string;
        /** The extraction results for files in the requested batch. */
        extract_result: Array<{
          /** The submitted source file name, when returned. */
          file_name?: string;
          /** The caller-defined data identifier, when provided. */
          data_id?: string;
          /** The upstream task state, such as waiting-file, pending, running, converting, done, or failed. */
          state: string;
          /** The ZIP URL containing Markdown, JSON, and any requested exports. */
          full_zip_url?: string;
          /** The upstream failure reason when the task failed. */
          err_msg?: string;
          /** Progress details returned while the task is running. */
          extract_progress?: {
            /** The number of pages that have already been parsed. */
            extracted_pages?: number;
            /** The total number of pages reported for the document. */
            total_pages?: number;
            /** The upstream parsing start time. */
            start_time?: string;
          };
        }>;
        /** The upstream request trace identifier. */
        trace_id?: string;
        /** The upstream response message. */
        msg?: string;
      };
    };
    /** Get the current status and result URLs for a MinerU extraction task. */
    "mineru.get_extract_task": {
      input: {
        /**
         * The MinerU extraction task identifier.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /** The MinerU extraction task identifier. */
        task_id: string;
        /** The caller-defined data identifier, when provided. */
        data_id?: string;
        /** The upstream task state, such as pending, running, converting, done, or failed. */
        state: string;
        /** The ZIP URL containing Markdown, JSON, and any requested exports. */
        full_zip_url?: string;
        /** The upstream failure reason when the task failed. */
        err_msg?: string;
        /** Progress details returned while the task is running. */
        extract_progress?: {
          /** The number of pages that have already been parsed. */
          extracted_pages?: number;
          /** The total number of pages reported for the document. */
          total_pages?: number;
          /** The upstream parsing start time. */
          start_time?: string;
        };
      };
    };
  }
}
