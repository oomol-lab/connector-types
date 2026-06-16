import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the current billing-month usage counters for the connected Eagle Doc API key. */
    "eagle_doc.get_current_usage": {
      input: Record<string, never>;
      output: {
        /** The current billing month in `YYYY-MM` format. */
        currentMonth: string;
        /** The contract quota returned by Eagle Doc. */
        contractQuota: number;
        /** The number of processed pages used in the current month. */
        quotaUsed: number;
        /** Whether over-usage beyond the contract quota is allowed. */
        overUsageAllowed: boolean;
        /** The optional hard limit on processed pages for the current month. */
        hardLimit: number | null;
        /** The number of pages above the contract quota. */
        overUsage: number;
        /** The price per page applied to over-usage when returned by Eagle Doc. */
        pricePerPageOverUsage: number;
        /** The current over-usage cost calculated by Eagle Doc for this month. */
        overUsageCost: number;
      };
    };
    /** Fetch the overall Eagle Doc management quota summary tied to the connected API key. */
    "eagle_doc.get_quota": {
      input: Record<string, never>;
      output: {
        /** The quota value returned by Eagle Doc when one is configured. */
        quota: number | null;
        /** The number of processed pages counted against the quota. */
        quotaUsed: number;
        /** The month identifier returned by Eagle Doc for the quota summary. */
        currentMonth: string;
      };
    };
    /** List Eagle Doc monthly usage history together with pricing metadata for each month returned. */
    "eagle_doc.list_monthly_usage": {
      input: Record<string, never>;
      output: {
        /** The monthly usage rows returned by Eagle Doc. */
        months: Array<{
          /** The number of processed pages used in that month. */
          quotaUsed: number;
          /** The month identifier returned by Eagle Doc in `YYYY-MM` format. */
          quotaDate: string;
          /** Additional monthly pricing metadata returned by Eagle Doc. */
          additionalInfo: {
            /** The over-usage price per page when returned. */
            PricePerPageOverUsage?: number;
            /** The contract quota for that month when returned. */
            ContractQuota?: number;
            /** The in-contract price per page when returned. */
            PricePerPage?: number;
            [key: string]: unknown;
          };
        }>;
      };
    };
    /** List recent Eagle Doc request log rows with processed page counts and timestamps. */
    "eagle_doc.list_usage_logs": {
      input: Record<string, never>;
      output: {
        /** The recent request log rows returned by Eagle Doc. */
        logs: Array<{
          /** The number of pages processed by that request. */
          pages: number;
          /** The time when Eagle Doc finished processing the request. */
          time: string;
          /** The time when Eagle Doc received the request for processing. */
          timeRequested: string;
        }>;
      };
    };
    /** Upload one invoice, receipt, or PDF to Eagle Doc Finance OCR and return the structured extraction result. */
    "eagle_doc.process_finance_document": {
      input: {
        /**
         * The Base64-encoded content of the uploaded invoice, receipt, image, or PDF.
         * @minLength 1
         */
        contentBase64: string;
        /**
         * The file name sent to Eagle Doc for the uploaded document.
         * @minLength 1
         */
        fileName: string;
        /**
         * The MIME type sent to Eagle Doc for the uploaded document.
         * @minLength 1
         */
        mimeType?: string;
        /** Whether Eagle Doc should avoid storing the uploaded file on the server. Eagle Doc defaults this to true. */
        privacy?: boolean;
        /** Whether Eagle Doc should include polygon coordinates for extracted fields. */
        polygon?: boolean;
        /** Whether Eagle Doc should include the full OCR text grouped by page. */
        fullText?: boolean;
        /** Whether Eagle Doc should detect signatures inside the uploaded document. */
        signature?: boolean;
      };
      output: {
        /** The top-level document type returned by Eagle Doc. */
        docType: string | null;
        /** The normalized `general` field collection returned by Eagle Doc. */
        general: Record<string, {
            /** The extracted field value returned by Eagle Doc. */
            value: unknown;
            /** The polygon coordinates returned for the extracted field when polygon mode is enabled. */
            polygon: {
              /**
               * The first polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p1: Array<number>;
              /**
               * The second polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p2: Array<number>;
              /**
               * The third polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p3: Array<number>;
              /**
               * The fourth polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p4: Array<number>;
            } | null;
            /** The 1-based page number where Eagle Doc found this field when returned. */
            page: number | null;
            /** The confidence score returned by Eagle Doc for this field when available. */
            confidence: number | null;
          }> | null;
        /** The normalized product item rows returned by Eagle Doc. */
        productItems: Array<Record<string, {
            /** The extracted field value returned by Eagle Doc. */
            value: unknown;
            /** The polygon coordinates returned for the extracted field when polygon mode is enabled. */
            polygon: {
              /**
               * The first polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p1: Array<number>;
              /**
               * The second polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p2: Array<number>;
              /**
               * The third polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p3: Array<number>;
              /**
               * The fourth polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p4: Array<number>;
            } | null;
            /** The 1-based page number where Eagle Doc found this field when returned. */
            page: number | null;
            /** The confidence score returned by Eagle Doc for this field when available. */
            confidence: number | null;
          }>>;
        /** The normalized tax summary rows returned by Eagle Doc. */
        taxes: Array<Record<string, {
            /** The extracted field value returned by Eagle Doc. */
            value: unknown;
            /** The polygon coordinates returned for the extracted field when polygon mode is enabled. */
            polygon: {
              /**
               * The first polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p1: Array<number>;
              /**
               * The second polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p2: Array<number>;
              /**
               * The third polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p3: Array<number>;
              /**
               * The fourth polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p4: Array<number>;
            } | null;
            /** The 1-based page number where Eagle Doc found this field when returned. */
            page: number | null;
            /** The confidence score returned by Eagle Doc for this field when available. */
            confidence: number | null;
          }>> | null;
        /** The normalized payment rows returned by Eagle Doc when present. */
        payments: Array<Record<string, {
            /** The extracted field value returned by Eagle Doc. */
            value: unknown;
            /** The polygon coordinates returned for the extracted field when polygon mode is enabled. */
            polygon: {
              /**
               * The first polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p1: Array<number>;
              /**
               * The second polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p2: Array<number>;
              /**
               * The third polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p3: Array<number>;
              /**
               * The fourth polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p4: Array<number>;
            } | null;
            /** The 1-based page number where Eagle Doc found this field when returned. */
            page: number | null;
            /** The confidence score returned by Eagle Doc for this field when available. */
            confidence: number | null;
          }>> | null;
        /** The normalized bank payment rows returned by Eagle Doc when present. */
        paymentBanks: Array<Record<string, {
            /** The extracted field value returned by Eagle Doc. */
            value: unknown;
            /** The polygon coordinates returned for the extracted field when polygon mode is enabled. */
            polygon: {
              /**
               * The first polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p1: Array<number>;
              /**
               * The second polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p2: Array<number>;
              /**
               * The third polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p3: Array<number>;
              /**
               * The fourth polygon point as a `[x, y]` coordinate pair.
               * @minItems 2
               * @maxItems 2
               */
              p4: Array<number>;
            } | null;
            /** The 1-based page number where Eagle Doc found this field when returned. */
            page: number | null;
            /** The confidence score returned by Eagle Doc for this field when available. */
            confidence: number | null;
          }>> | null;
        /** The signature objects returned by Eagle Doc when `signature=true` is enabled. */
        signatures: Array<{
          /** The Base64-encoded signature image when returned. */
          image?: string;
          /** The Base64-encoded binary signature image when returned. */
          binary?: string;
          /**
           * The signature bounding box as `[left, top, right, bottom]` coordinates when returned.
           * @minItems 4
           * @maxItems 4
           */
          boundingBox?: Array<number>;
          /** The 1-based page number where the signature was detected. */
          page?: number;
          [key: string]: unknown;
        }> | null;
        /** The additional signature image payloads returned by Eagle Doc when present. */
        signatureImages: Array<unknown> | null;
        /** The QR code objects returned by Eagle Doc when present. */
        qrCodes: Array<Record<string, unknown>> | null;
        /** The Eagle Doc processing mode such as `ACCURACY` or `FALLBACK`. */
        performanceOption: string | null;
        /** The MD5 hash returned by Eagle Doc for the uploaded file. */
        fileHash: string | null;
        /** The Eagle Doc algorithm version used for the extraction. */
        version: string | null;
        /** The number of pages Eagle Doc processed for the uploaded document. */
        numberOfPages: number | null;
        /** The processed page size metadata returned by Eagle Doc. */
        pages: Array<{
          /** The page width returned by Eagle Doc. */
          width: number;
          /** The page height returned by Eagle Doc. */
          height: number;
        }>;
        /** The page-grouped OCR text returned when `fullText=true` is requested. */
        fullText: Array<Array<string>> | null;
        /** The language codes Eagle Doc detected in the document. */
        languages: Array<string>;
        /** The primary language code Eagle Doc detected in the document. */
        mainLanguage: string | null;
        /** The template identifier returned by Eagle Doc when present. */
        templateId: unknown;
      };
    };
  }
}
