import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read a report's summary and matching paragraphs. Use the PDF for full reading and original-source citations. */
    "fxbaogao.get_paragraphs": {
      input: {
        /** Report ID returned by search_reports. */
        reportId: number;
        /** Keyword used to locate relevant context within the report. */
        keyword?: string;
      };
      output: {
        /** Upstream result code; zero indicates success. */
        code: number;
        /** Upstream message. */
        msg?: string;
        /** Report summary and matching passages. */
        data: {
          /** Report title. */
          title?: string;
          /** Report summary. */
          summary?: string;
          /** Matching report paragraphs. */
          paragraphs?: Array<{
            /** Paragraph text, possibly containing highlight markup. */
            content?: string;
            /** Page number within the report. */
            pageNum?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get downloadable PDF URLs for a report without transferring binary content through the action response. */
    "fxbaogao.get_pdf_url": {
      input: {
        /** Report ID returned by search_reports. */
        reportId: number;
      };
      output: {
        /** Report ID returned by search_reports. */
        reportId: number;
        /** Available PDF resources; empty when upstream returns no download URL. */
        resources: Array<{
          /** Upstream field containing this resource. */
          field: string;
          /** Absolute PDF download URL; it may expire. */
          url: string;
        }>;
        /** Original upstream response, including additional fields. */
        raw: Record<string, unknown>;
      };
    };
    /** Search research reports by keywords, institutions, and publication time. Provide keywords or at least one institution; pages range from 1 to 10. */
    "fxbaogao.search_reports": {
      input: Record<string, unknown> | {
        /** @minItems 1 */
        orgNames: unknown;
        [key: string]: unknown;
      };
      output: {
        /** Matching research reports. */
        reports: Array<{
          /** Report ID returned by search_reports. */
          reportId?: number;
          /** Report title, possibly containing highlight markup. */
          title?: string;
          /** Publishing institution, possibly containing highlight markup. */
          orgName?: string;
          /** Publication timestamp as returned by the provider. */
          pubTime?: unknown;
          /** Formatted publication date. */
          pubTimeStr?: string;
          /** Industry name. */
          industryName?: string;
          /** Number of pages in the report. */
          pageNum?: number;
          /** Matching text excerpts. */
          paragraphs?: Array<{
            /** Paragraph text, possibly containing highlight markup. */
            content?: string;
            /** Page number within the report. */
            pageNum?: number;
            [key: string]: unknown;
          }>;
          /** Official report reading URL. */
          reportUrl?: string;
          [key: string]: unknown;
        }>;
        /** Original upstream response, including additional fields. */
        raw: Record<string, unknown>;
      };
    };
  }
}
