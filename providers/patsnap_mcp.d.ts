import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieves Valuation Patent Abstract Image data so users can review the key information and continue with downstream analysis. */
    "patsnap_mcp.abstract_image": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves Patent Abstract Translated data so users can review the key information and continue with downstream analysis. */
    "patsnap_mcp.abstract_translated": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves Patent Awards to review honors, awards, and external recognition for a company or patent. */
    "patsnap_mcp.award_data": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves detailed Bibliography for verification, full-text review, and deeper analysis. */
    "patsnap_mcp.bibliography": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves detailed Translated Claims for verification, full-text review, and deeper analysis. */
    "patsnap_mcp.claim_translated": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves detailed Claims for verification, full-text review, and deeper analysis. */
    "patsnap_mcp.claims": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves Customs Recordation to assess status changes, patent stability, and potential legal risk. */
    "patsnap_mcp.customs_data": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves detailed Description for verification, full-text review, and deeper analysis. */
    "patsnap_mcp.description": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves detailed Translated Description for verification, full-text review, and deeper analysis. */
    "patsnap_mcp.description_translated": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Returns a temporary PUT upload URL. Upload the image binary to this URL using HTTP PUT, then pass the returned image URL to design_submit_workflow. This tool only creates the upload URL and does not accept image binaries or large base64 payloads. */
    "patsnap_mcp.design_create_image_upload_url": {
      input: {
        /** Image MIME type, such as image/jpeg, image/png, image/webp, image/gif, image/bmp or image/tiff. Convert HEIC/HEIF/SVG/PDF to JPEG or PNG first. */
        content_type?: string;
        /** Optional image file extension; inferred from content_type when omitted. */
        file_extension?: string;
        /**
         * Upload URL lifetime in seconds, from 60 to 3600.
         * @minimum 60
         * @maximum 3600
         */
        expire_seconds?: number;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Get execution result of a specific stage — returns the full business data (result_data) of a stage, which may be large. To get final results, typically use stage='feature_comparison' or 'generate_report' */
    "patsnap_mcp.design_get_stage_result": {
      input: {
        /** Stage name (required). Valid values: convert_lineart / image_search / rerank / rrf_fusion / feature_comparison / generate_report */
        stage: "convert_lineart" | "image_search" | "rerank" | "rrf_fusion" | "feature_comparison" | "generate_report";
        /** Task ID (required) */
        task_id: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Query workflow task status — returns lightweight task overview and per-stage summaries (status/duration/retry count/error message) without large result_data, suitable for high-frequency polling */
    "patsnap_mcp.design_get_task_status": {
      input: {
        /** Task ID (required) */
        task_id: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Submit FTO workflow task — triggers the full pipeline (lineart conversion → search → rerank → RRF fusion → feature comparison → report generation) in one shot. Returns a task_id for polling via design_get_task_status and fetching results via design_get_stage_result */
    "patsnap_mcp.design_submit_workflow": {
      input: {
        /** Country code list (optional), e.g. ["CN", "US", "EP"] */
        country?: Array<string>;
        /** Text description or search keywords for the image (optional). Describe the product/form/usage in a sentence or keywords (e.g. 'wireless charger'). The system auto-parses it into search syntax. Not a LOC code */
        main_field?: string;
        /** LOC classification items (optional), each with id and desc */
        loc_items?: Array<{
          /** LOC classification code */
          id: string;
          /** LOC classification description */
          desc?: string;
        }>;
        /** Application end date (optional), format YYYYMMDD */
        apply_end_time?: string;
        /** Application start date (optional), format YYYYMMDD */
        apply_start_time?: string;
        /** Task title (optional) */
        title?: string;
        /** Simple legal status filter (optional), comma-separated (0=expired, 1=active, 2=pending). Defaults to '1,2' if not provided. Pass '0,1,2' to include expired patents */
        simple_legal_status?: string;
        /**
         * Target product image URL (required)
         * @format uri
         */
        url: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves Patent Family to review family relationships, jurisdictional coverage, and family breadth. */
    "patsnap_mcp.family": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves Valuation Patent Forward Citation data so users can review the key information and continue with downstream analysis. */
    "patsnap_mcp.forward_citation": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves detailed Full-text Images for verification, full-text review, and deeper analysis. */
    "patsnap_mcp.fulltext_image": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves Simple Legal Status to assess status changes, patent stability, and potential legal risk. */
    "patsnap_mcp.get_patent_legal_status": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Analyzes Applicant Ranking to show activity changes, leading entities, and directional signals. */
    "patsnap_mcp.landscape_applicant_rank": {
      input: {
        /** Patent dedup sort rules | JSON array */
        collapse_order_authority?: Array<unknown>;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /** Patent dedup sort rules */
        collapse_order?: string;
        /**
         * Analytics query | max 12000 characters
         * @maxLength 12000
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort field */
        collapse_by?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves Applicant Technology Analysis data so users can review the key information and continue with downstream analysis. */
    "patsnap_mcp.landscape_applicant_technology_analysis": {
      input: {
        /** Patent dedup sort rules | JSON array */
        collapse_order_authority?: Array<unknown>;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /** Patent dedup sort rules */
        collapse_order?: string;
        /**
         * Analytics query | max 12000 characters
         * @maxLength 12000
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort field */
        collapse_by?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Analyzes Leading Applicant Filing Trend to show activity changes, leading entities, and directional signals. */
    "patsnap_mcp.landscape_applicant_trend": {
      input: {
        /** Patent dedup sort rules | JSON array */
        collapse_order_authority?: Array<unknown>;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /** Patent dedup sort rules */
        collapse_order?: string;
        /**
         * Analytics query | max 12000 characters
         * @maxLength 12000
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort field */
        collapse_by?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves Cooperation Applicant Analysis data so users can review the key information and continue with downstream analysis. */
    "patsnap_mcp.landscape_cooperation_applicant_analysis": {
      input: {
        /** Patent dedup sort rules | JSON array */
        collapse_order_authority?: Array<unknown>;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /** Patent dedup sort rules */
        collapse_order?: string;
        /**
         * Analytics query | max 12000 characters
         * @maxLength 12000
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort field */
        collapse_by?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves detailed Patent Details for verification, full-text review, and deeper analysis. */
    "patsnap_mcp.landscape_detail": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves detailed Patent Detail Aggregation for verification, full-text review, and deeper analysis. */
    "patsnap_mcp.landscape_detail_aggregation": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves detailed Patent Detail Text for verification, full-text review, and deeper analysis. */
    "patsnap_mcp.landscape_detail_text": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Analyzes Domain Map to show structure, distribution, hotspots, and the overall landscape. */
    "patsnap_mcp.landscape_domain_map": {
      input: {
        /** Patent dedup sort rules | JSON array */
        collapse_order_authority?: Array<unknown>;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /** Patent dedup sort rules */
        collapse_order?: string;
        /**
         * Analytics query | max 12000 characters
         * @maxLength 12000
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort field */
        collapse_by?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Analyzes Patent Family Ranking to show activity changes, leading entities, and directional signals. */
    "patsnap_mcp.landscape_famn_rank": {
      input: {
        /** Patent dedup sort rules | JSON array */
        collapse_order_authority?: Array<unknown>;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /** Patent dedup sort rules */
        collapse_order?: string;
        /**
         * Analytics query | max 12000 characters
         * @maxLength 12000
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort field */
        collapse_by?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves Patent PDF data so users can review the key information and continue with downstream analysis. */
    "patsnap_mcp.landscape_get_patent_pdf": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Analyzes Receiving Office Statistics By Year to show activity changes, leading entities, and directional signals. */
    "patsnap_mcp.landscape_get_rec_office_year": {
      input: {
        /** Patent dedup sort rules | JSON array */
        collapse_order_authority?: Array<unknown>;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /** Patent dedup sort rules */
        collapse_order?: string;
        /**
         * Analytics query | max 12000 characters
         * @maxLength 12000
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort field */
        collapse_by?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves detailed Patent Field Details for verification, full-text review, and deeper analysis. */
    "patsnap_mcp.landscape_info": {
      input: {
        /**
         * Publication number list | supports batch, max 100
         * @maxItems 100
         */
        patent_number: Array<string>;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves a Patent List for batch review, filtering, and further processing. */
    "patsnap_mcp.landscape_list": {
      input: {
        /** Patent dedup sort rules | JSON array */
        collapse_order_authority?: Array<unknown>;
        /**
         * limit+offset<=20000
         * @minimum 0
         * @maximum 20000
         */
        offset?: number;
        /**
         * Return patent count | max 100
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /** Patent dedup sort rules */
        collapse_order?: string;
        /**
         * Analytics query | max 12000 characters
         * @maxLength 12000
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort field */
        collapse_by?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Analyzes 3D Map Analysis to show structure, distribution, hotspots, and the overall landscape. */
    "patsnap_mcp.landscape_map_3d": {
      input: {
        /** Patent dedup sort rules | JSON array */
        collapse_order_authority?: Array<unknown>;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /** Patent dedup sort rules */
        collapse_order?: string;
        /**
         * Analytics query | max 12000 characters
         * @maxLength 12000
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort field */
        collapse_by?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Analyzes Receiving Office Statistics to show activity changes, leading entities, and directional signals. */
    "patsnap_mcp.landscape_rec_office": {
      input: {
        /** Patent dedup sort rules | JSON array */
        collapse_order_authority?: Array<unknown>;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /** Patent dedup sort rules */
        collapse_order?: string;
        /**
         * Analytics query | max 12000 characters
         * @maxLength 12000
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort field */
        collapse_by?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Analyzes Citation Count Ranking to show activity changes, leading entities, and directional signals. */
    "patsnap_mcp.landscape_refered_rank": {
      input: {
        /** Patent dedup sort rules | JSON array */
        collapse_order_authority?: Array<unknown>;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /** Patent dedup sort rules */
        collapse_order?: string;
        /**
         * Analytics query | max 12000 characters
         * @maxLength 12000
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort field */
        collapse_by?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Searches Patent Search Facets based on input criteria and returns matching results for screening, comparison, and follow-up analysis. */
    "patsnap_mcp.landscape_search_patents_facet": {
      input: {
        /** Filter field dimensions | max 5 fields */
        field: string;
        /**
         * <=20000
         * @minimum 0
         * @maximum 20000
         */
        offset?: number;
        /**
         * Return stats count | 1-100, default 50
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Truncation feature | 1 enable, 0 disable
         * @minimum 0
         * @maximum 1
         */
        stemming?: number;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /** Language | cn/en, default cn */
        lang?: string;
        /**
         * Analytics query | max 1500 characters
         * @maxLength 1500
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort rules | JSON array */
        collapse_by?: Array<unknown>;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Analyzes Patent Statistics to show activity changes, leading entities, and directional signals. */
    "patsnap_mcp.landscape_search_patents_statistics": {
      input: {
        /** Filter field dimensions | max 5 fields */
        field: string;
        /**
         * Return stats count | 1-100, default 50
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Truncation feature | 1 enable, 0 disable
         * @minimum 0
         * @maximum 1
         */
        stemming?: number;
        /** Language | cn/en, default cn */
        lang?: string;
        /**
         * Analytics query | max 1500 characters
         * @maxLength 1500
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort rules | JSON array */
        collapse_by?: Array<unknown>;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Searches Patent Search based on input criteria and returns matching results for screening, comparison, and follow-up analysis. */
    "patsnap_mcp.landscape_search_patents_v3": {
      input: {
        /**
         * <=20000
         * @minimum 0
         * @maximum 20000
         */
        offset?: number;
        /**
         * Truncation feature | 1 enable, 0 disable
         * @minimum 0
         * @maximum 1
         */
        stemming?: number;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /**
         * Analytics query | max 1500 characters
         * @maxLength 1500
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort rules | JSON array */
        collapse_by?: Array<unknown>;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Searches Patent Search With Details based on input criteria and returns matching results for screening, comparison, and follow-up analysis. */
    "patsnap_mcp.landscape_search_patents_with_detail": {
      input: {
        /** Patent ID */
        patent_id?: string;
        /**
         * <=20000
         * @minimum 0
         * @maximum 20000
         */
        offset?: number;
        /**
         * Replace with patent family when full text unavailable | 1 yes, 0 no
         * @minimum 0
         * @maximum 1
         */
        replace_by_related?: number;
        /**
         * Truncation feature | 1 enable, 0 disable
         * @minimum 0
         * @maximum 1
         */
        stemming?: number;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /** cn/en/jp */
        lang: string;
        /**
         * Analytics query | max 1500 characters
         * @maxLength 1500
         */
        query_text: string;
        /** Patent publication number */
        pn?: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort rules | JSON array */
        collapse_by?: Array<unknown>;
        /** first/last */
        posiofpat?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Analyzes Key Technology Branch Applicant Distribution to show structure, distribution, hotspots, and the overall landscape. */
    "patsnap_mcp.landscape_tech_applicant_dist": {
      input: {
        /** Patent dedup sort rules | JSON array */
        collapse_order_authority?: Array<unknown>;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /** Patent dedup sort rules */
        collapse_order?: string;
        /**
         * Analytics query | max 12000 characters
         * @maxLength 12000
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort field */
        collapse_by?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Analyzes Technology Composition to show structure, distribution, hotspots, and the overall landscape. */
    "patsnap_mcp.landscape_technology_constitute": {
      input: {
        /** Patent dedup sort rules | JSON array */
        collapse_order_authority?: Array<unknown>;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /** Patent dedup sort rules */
        collapse_order?: string;
        /**
         * Analytics query | max 12000 characters
         * @maxLength 12000
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort field */
        collapse_by?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Analyzes Technology Life Cycle to show structure, distribution, hotspots, and the overall landscape. */
    "patsnap_mcp.landscape_technology_life_cycle": {
      input: {
        /** Patent dedup sort rules | JSON array */
        collapse_order_authority?: Array<unknown>;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /** Patent dedup sort rules */
        collapse_order?: string;
        /**
         * Analytics query | max 800 characters
         * @maxLength 800
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort field */
        collapse_by?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Analyzes Patent Trend to show activity changes, leading entities, and directional signals. */
    "patsnap_mcp.landscape_trend": {
      input: {
        /** Patent dedup sort rules | JSON array */
        collapse_order_authority?: Array<unknown>;
        /** Field sort | JSON array */
        sort?: Array<unknown>;
        /** Patent dedup sort rules */
        collapse_order?: string;
        /**
         * Analytics query | max 12000 characters
         * @maxLength 12000
         */
        query_text: string;
        /** Patent dedup condition */
        collapse_type?: string;
        /** Patent dedup sort field */
        collapse_by?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves detailed Legal Details for verification, full-text review, and deeper analysis. */
    "patsnap_mcp.legal_data": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves Valuation Patent License Data data so users can review the key information and continue with downstream analysis. */
    "patsnap_mcp.license_data": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Discover current tools and live input schemas for one Patsnap MCP service. Defaults to core_patents. */
    "patsnap_mcp.list_tools": {
      input: {
        /** MCP service to inspect; defaults to core_patents. */
        server?: "core_patents" | "patent_landscape" | "design_infringement";
      };
      output: {
        /** The Patsnap MCP service that provided these tools. */
        server: string;
        /** Tools available to this Patsnap account. */
        tools: Array<{
          /** The exact upstream tool name. */
          name: string;
          /** The upstream tool description. */
          description?: string;
          /** The live JSON Schema for this tool input. */
          inputSchema: Record<string, unknown>;
          /** Upstream MCP behavior hints. */
          annotations?: Record<string, unknown>;
          /** The corresponding Connector action name, when this tool has been integrated. */
          actionName?: string;
        }>;
      };
    };
    /** Retrieves detailed Full-text PDF for verification, full-text review, and deeper analysis. */
    "patsnap_mcp.pdf": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves Valuation Patent Pledge Data data so users can review the key information and continue with downstream analysis. */
    "patsnap_mcp.pledge_data": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves Reexamination And Invalidation to assess status changes, patent stability, and potential legal risk. */
    "patsnap_mcp.reexamination_invalidation": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Searches Patent Search By Query based on input criteria and returns matching results for screening, comparison, and follow-up analysis. */
    "patsnap_mcp.search_patents": {
      input: {
        /** Authority priority for collapse order. */
        collapse_order_authority?: Array<string>;
        /** Result offset. Default 0. */
        offset?: number;
        /** Sort field. Default SCORE. */
        sort_field?: string;
        /** Result limit. Default 10. */
        limit?: number;
        /** Stemming. 0=off, 1=on. */
        stemming?: number;
        /** Collapse order. Default LATEST. */
        collapse_order?: string;
        /** Sort order. Default DESC. */
        sort_order?: string;
        /** Query text. Supports keywords, phrases, Boolean expressions, etc. */
        query_text: string;
        /** Collapse type. Default ALL. */
        collapse_type?: string;
        /** Collapse by. Default PBD. */
        collapse_by?: string;
      };
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
    /** Retrieves Valuation Patent Transfer Data data so users can review the key information and continue with downstream analysis. */
    "patsnap_mcp.transfer_data": {
      input: Record<string, unknown>;
      output: {
        /** Structured MCP content when available; otherwise the original MCP content envelope. */
        result: unknown;
      };
    };
  }
}
