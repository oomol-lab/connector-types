import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Submit multiple company searches as one downloadable batch. Poll get_batch_job_status with the returned job ID. */
    "panjiva.batch_search_companies": {
      input: {
        /** Download file format; upstream default is jsonl. */
        output_format?: "jsonl" | "csv";
        /**
         * Optional email address for job completion notification. Omit to retrieve the download URL by polling.
         * @format email
         */
        notify_email?: string;
        /**
         * Individual company search requests.
         * @minItems 1
         * @maxItems 50000
         */
        requests: Array<{
          /** Free-text search criteria. */
          query?: {
            /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
            text: string;
            /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
            group?: string;
            /** Explicit fields to search instead of a named group. */
            custom_group?: Array<string>;
            /** Boolean operator between search terms; the upstream default is OR. */
            operator?: "AND" | "OR";
            /** Match word stems or exact terms; the upstream default is stem. */
            match?: "stem" | "exact";
          };
          /**
           * Multiple search criteria; every query must match.
           * @maxItems 500
           */
          queries?: Array<{
            /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
            text: string;
            /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
            group?: string;
            /** Explicit fields to search instead of a named group. */
            custom_group?: Array<string>;
            /** Boolean operator between search terms; the upstream default is OR. */
            operator?: "AND" | "OR";
            /** Match word stems or exact terms; the upstream default is stem. */
            match?: "stem" | "exact";
          }>;
          /** Native Panjiva filters, including AND, OR, NOT, ranges, dates and geographic constraints. For example: {record_date:{gte:'2025-01-01'},destination_countries:'United States'}. Discover fields with get_data_source_metadata; syntax: https://panjiva.com/api-guide/data-selection/filters. */
          filters?: Record<string, unknown>;
          /** Company identifier representation; upstream default is country_company_name. */
          company_type?: "ccn" | "country_company_name" | "pid" | "capiq" | "ultimate_parent_capiq";
          /** Trade role to search; upstream default is bidirectional. */
          direction?: "bidirectional" | "consignee" | "shipper";
          /** Aggregate statistics across matching shipments. */
          metrics?: Array<{
            /** Numeric field to aggregate, such as value_usd, weight_kg or volume_teu. Available fields depend on the data source. */
            metric: string;
            /** Statistical aggregation operation. */
            op: "sum" | "max" | "avg" | "min";
          }>;
          /**
           * Maximum company results per trade direction.
           * @minimum 0
           * @maximum 5000
           */
          size?: number;
          /** Sort an aggregation; metric keys must also be declared in metrics. */
          sort?: {
            /** Sort by count, field, or an available metric. */
            key: string;
            /** Ascending or descending order. */
            order?: "asc" | "desc";
            /** Statistical aggregation operation. */
            op?: "sum" | "max" | "avg" | "min";
          };
        }>;
      };
      output: {
        /**
         * Job ID returned by the corresponding submission action.
         * @format uuid
         */
        job_id?: string;
        /** Upstream job status, initially submitted. */
        status?: string;
        [key: string]: unknown;
      };
    };
    /** Submit a bulk shipment aggregation for JSONL or CSV download. Poll get_bulk_job_status with the returned job ID. */
    "panjiva.bulk_rollup_shipments": {
      input: {
        /** Download file format; upstream default is jsonl. */
        output_format?: "jsonl" | "csv";
        /**
         * Optional email address for job completion notification. Omit to retrieve the download URL by polling.
         * @format email
         */
        notify_email?: string;
        /**
         * Data source, such as global or us-imports. Use list_data_sources to discover available sources; global covers the last five years.
         * @minLength 1
         */
        data_source: string;
        /** Free-text search criteria. */
        query?: {
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        };
        /**
         * Multiple search criteria; every query must match.
         * @maxItems 500
         */
        queries?: Array<{
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        }>;
        /** Native Panjiva filters, including AND, OR, NOT, ranges, dates and geographic constraints. For example: {record_date:{gte:'2025-01-01'},destination_countries:'United States'}. Discover fields with get_data_source_metadata; syntax: https://panjiva.com/api-guide/data-selection/filters. */
        filters?: Record<string, unknown>;
        /** Aggregate statistics across matching shipments. */
        metrics?: Array<{
          /** Numeric field to aggregate, such as value_usd, weight_kg or volume_teu. Available fields depend on the data source. */
          metric: string;
          /** Statistical aggregation operation. */
          op: "sum" | "max" | "avg" | "min";
        }>;
        /**
         * One grouping dimension for a bulk rollup without synchronous pagination limits.
         * @minItems 1
         * @maxItems 1
         */
        dimensions: Array<{
          /** Field to group by; discover available dimensions with get_data_source_metadata. */
          field: string;
          /** Include missing values as NO_VALUE buckets. */
          include_missing?: boolean;
          /** Sort an aggregation; metric keys must also be declared in metrics. */
          sort: {
            /** Sort by count, field, or an available metric. */
            key: string;
            /** Ascending or descending order. */
            order?: "asc" | "desc";
            /** Statistical aggregation operation. */
            op?: "sum" | "max" | "avg" | "min";
          };
        }>;
      };
      output: {
        /**
         * Job ID returned by the corresponding submission action.
         * @format uuid
         */
        job_id?: string;
        /** Upstream job status, initially submitted. */
        status?: string;
        [key: string]: unknown;
      };
    };
    /** Submit a large shipment search for JSONL or CSV download. Poll get_bulk_job_status with the returned job ID. */
    "panjiva.bulk_search_shipments": {
      input: {
        /** Download file format; upstream default is jsonl. */
        output_format?: "jsonl" | "csv";
        /**
         * Optional email address for job completion notification. Omit to retrieve the download URL by polling.
         * @format email
         */
        notify_email?: string;
        /**
         * Data source, such as global or us-imports. Use list_data_sources to discover available sources; global covers the last five years.
         * @minLength 1
         */
        data_source: string;
        /** Free-text search criteria. */
        query?: {
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        };
        /**
         * Multiple search criteria; every query must match.
         * @maxItems 500
         */
        queries?: Array<{
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        }>;
        /** Native Panjiva filters, including AND, OR, NOT, ranges, dates and geographic constraints. For example: {record_date:{gte:'2025-01-01'},destination_countries:'United States'}. Discover fields with get_data_source_metadata; syntax: https://panjiva.com/api-guide/data-selection/filters. */
        filters?: Record<string, unknown>;
        /** Shipment sort fields in priority order. */
        sort?: Array<{
          /** Sortable shipment field; discover fields with get_data_source_metadata. */
          field: string;
          /** Ascending or descending order. */
          order: "asc" | "desc";
        }>;
      };
      output: {
        /**
         * Job ID returned by the corresponding submission action.
         * @format uuid
         */
        job_id?: string;
        /** Upstream job status, initially submitted. */
        status?: string;
        [key: string]: unknown;
      };
    };
    /** Check a batch company search job and retrieve its download URL when ready. */
    "panjiva.get_batch_job_status": {
      input: {
        /**
         * Job ID returned by the corresponding submission action.
         * @format uuid
         */
        job_id: string;
      };
      output: {
        /**
         * Job ID returned by the corresponding submission action.
         * @format uuid
         */
        id?: string;
        /** Upstream state: submitted, in_process, fetched, uploaded, notification_sent, or error. */
        status: string;
        /** Download URL when ready; pass this URL to a file consumer. */
        download_url?: string;
        /**
         * Time of the latest state change.
         * @format date-time
         */
        last_changed?: string;
        /** Original job parameters. */
        parameters?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Check a bulk shipment job and retrieve its download URL when ready. */
    "panjiva.get_bulk_job_status": {
      input: {
        /**
         * Job ID returned by the corresponding submission action.
         * @format uuid
         */
        job_id: string;
      };
      output: {
        /**
         * Job ID returned by the corresponding submission action.
         * @format uuid
         */
        id?: string;
        /** Upstream state: submitted, in_process, fetched, uploaded, notification_sent, or error. */
        status: string;
        /** Download URL when ready; pass this URL to a file consumer. */
        download_url?: string;
        /**
         * Time of the latest state change.
         * @format date-time
         */
        last_changed?: string;
        /** Original job parameters. */
        parameters?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve a company's top buyers, suppliers and trade statistics from Panjiva. */
    "panjiva.get_company_network": {
      input: {
        /** Free-text search criteria. */
        query?: {
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        };
        /**
         * Multiple search criteria; every query must match.
         * @maxItems 500
         */
        queries?: Array<{
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        }>;
        /** Native Panjiva filters, including AND, OR, NOT, ranges, dates and geographic constraints. For example: {record_date:{gte:'2025-01-01'},destination_countries:'United States'}. Discover fields with get_data_source_metadata; syntax: https://panjiva.com/api-guide/data-selection/filters. */
        filters?: Record<string, unknown>;
        /** Company identifier representation; upstream default is country_company_name. */
        company_type?: "ccn" | "country_company_name" | "pid" | "capiq" | "ultimate_parent_capiq";
        /** Trade role to search; upstream default is bidirectional. */
        direction?: "bidirectional" | "consignee" | "shipper";
        /** Aggregate statistics across matching shipments. */
        metrics?: Array<{
          /** Numeric field to aggregate, such as value_usd, weight_kg or volume_teu. Available fields depend on the data source. */
          metric: string;
          /** Statistical aggregation operation. */
          op: "sum" | "max" | "avg" | "min";
        }>;
        /**
         * Maximum company results per trade direction.
         * @minimum 0
         * @maximum 5000
         */
        size?: number;
        /** Sort an aggregation; metric keys must also be declared in metrics. */
        sort?: {
          /** Sort by count, field, or an available metric. */
          key: string;
          /** Ascending or descending order. */
          order?: "asc" | "desc";
          /** Statistical aggregation operation. */
          op?: "sum" | "max" | "avg" | "min";
        };
        /** Company ID whose trade network should be retrieved. */
        company_id: number;
      };
      output: {
        /** Trade network keyed by company ID. */
        network: Record<string, Record<string, unknown>>;
      };
    };
    /** Discover searchable fields, filters, sort keys, metrics, dimensions and refinements for a Panjiva data source. */
    "panjiva.get_data_source_metadata": {
      input: {
        /**
         * Data source, such as global or us-imports. Use list_data_sources to discover available sources; global covers the last five years.
         * @minLength 1
         */
        data_source: string;
      };
      output: {
        /** Query groups and defaults. */
        query?: Record<string, unknown>;
        /** Filter fields and their types. */
        filters?: Array<Record<string, unknown>>;
        /** Valid sort keys and defaults. */
        sort?: Record<string, unknown>;
        /** Available metrics and supported operations. */
        metrics?: Array<Record<string, unknown>>;
        /** Available dimension fields. */
        dimensions?: Array<string>;
        /** Available refinement fields. */
        refinements?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Retrieve native shipment record schemas for a Panjiva data source. */
    "panjiva.get_data_source_schema": {
      input: {
        /**
         * Data source, such as global or us-imports. Use list_data_sources to discover available sources; global covers the last five years.
         * @minLength 1
         */
        data_source: string;
      };
      output: {
        /** Schemas keyed by country and trade direction. */
        schemas: Record<string, Record<string, unknown>>;
      };
    };
    /** List the most common values of selected shipment attributes for matching Panjiva records. */
    "panjiva.get_shipment_refinements": {
      input: {
        /**
         * Data source, such as global or us-imports. Use list_data_sources to discover available sources; global covers the last five years.
         * @minLength 1
         */
        data_source: string;
        /** Free-text search criteria. */
        query?: {
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        };
        /**
         * Multiple search criteria; every query must match.
         * @maxItems 500
         */
        queries?: Array<{
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        }>;
        /** Native Panjiva filters, including AND, OR, NOT, ranges, dates and geographic constraints. For example: {record_date:{gte:'2025-01-01'},destination_countries:'United States'}. Discover fields with get_data_source_metadata; syntax: https://panjiva.com/api-guide/data-selection/filters. */
        filters?: Record<string, unknown>;
        /** Attributes whose top values should be returned; discover available refinements with get_data_source_metadata. */
        fields: Array<string>;
      };
      output: {
        /** Matching and returned record counts. */
        record_count?: {
          /** Total matching records. */
          total?: number;
          /** Records returned in this response. */
          returned?: number;
          [key: string]: unknown;
        };
        /** Panjiva metrics, refinements, time_series or rollup results, keyed by requested fields. */
        analytics?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Calculate shipment metrics aggregated by week, month, quarter or year. */
    "panjiva.get_shipment_time_series": {
      input: {
        /**
         * Data source, such as global or us-imports. Use list_data_sources to discover available sources; global covers the last five years.
         * @minLength 1
         */
        data_source: string;
        /** Free-text search criteria. */
        query?: {
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        };
        /**
         * Multiple search criteria; every query must match.
         * @maxItems 500
         */
        queries?: Array<{
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        }>;
        /** Native Panjiva filters, including AND, OR, NOT, ranges, dates and geographic constraints. For example: {record_date:{gte:'2025-01-01'},destination_countries:'United States'}. Discover fields with get_data_source_metadata; syntax: https://panjiva.com/api-guide/data-selection/filters. */
        filters?: Record<string, unknown>;
        /** Aggregate statistics across matching shipments. */
        metrics: Array<{
          /** Numeric field to aggregate, such as value_usd, weight_kg or volume_teu. Available fields depend on the data source. */
          metric: string;
          /** Statistical aggregation operation. */
          op: "sum" | "max" | "avg" | "min";
        }>;
        /** Time-series bucket interval. */
        interval: "week" | "month" | "quarter" | "year";
        /**
         * First date included in the time series.
         * @format date
         */
        min_date?: string;
        /**
         * Last date included in the time series.
         * @format date
         */
        max_date?: string;
      };
      output: {
        /** Matching and returned record counts. */
        record_count?: {
          /** Total matching records. */
          total?: number;
          /** Records returned in this response. */
          returned?: number;
          [key: string]: unknown;
        };
        /** Panjiva metrics, refinements, time_series or rollup results, keyed by requested fields. */
        analytics?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List the Panjiva data sources available to the connected organization. */
    "panjiva.list_data_sources": {
      input: Record<string, never>;
      output: {
        /** Available data-source identifiers. */
        data_sources?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Retrieve Panjiva company entities by company IDs and identifier representation. */
    "panjiva.lookup_companies": {
      input: {
        /**
         * Company IDs to retrieve.
         * @minItems 1
         */
        company_ids: Array<number>;
        /** Company identifier representation; upstream default is country_company_name. */
        company_type?: "ccn" | "country_company_name" | "pid" | "capiq" | "ultimate_parent_capiq";
      };
      output: {
        /** Requested company entities. */
        companies?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Identify HS codes from a product description using the Panjiva commodity coder. Optionally restrict the HS prefix and enable parser, manual rules or classifier methods; the first matching method supplies the results. */
    "panjiva.parse_hs_codes": {
      input: {
        /** Product description to classify into HS codes. */
        description: string;
        /**
         * Optional two- or four-digit HS code prefix that restricts classification results.
         * @pattern ^(?:[0-9]{2}|[0-9]{4})$
         */
        partial_hs?: string;
        /** Whether to extract HS codes already present in the description. */
        use_parser?: boolean;
        /** Whether to match predefined classification rules. */
        use_manual_logic?: boolean;
        /** Whether to use the machine-learning HS classifier. */
        use_classifier?: boolean;
      };
      output: {
        /** Number of classification results reported by Panjiva. */
        result_count?: number;
        /** HS code classification candidates. */
        results?: Array<{
          /** Predicted HS code. */
          predCode?: string;
          /** Description associated with the predicted code. */
          description?: string;
          /** Confidence value reported by Panjiva. */
          confidence?: number;
          /** Classification method that produced the prediction. */
          source?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Call Panjiva's Parse Many commodity coder and return per-item HS codes and classifier metadata. The published request schema defines items as an object with description, optional marks and partial_hs; pass that documented object shape. */
    "panjiva.parse_many_hs_codes": {
      input: {
        /** Commodity item object as defined by the official Parse Many request schema. */
        items: {
          /** Product description to classify into HS codes. */
          description: string;
          /** Shipment marks text accompanying the product description. */
          marks?: string;
          /**
           * Optional two- or four-digit HS code prefix that restricts classification results.
           * @pattern ^(?:[0-9]{2}|[0-9]{4})$
           */
          partial_hs?: string;
        };
      };
      output: {
        /** Classifier training date reported by Panjiva. */
        classifier_training_date?: string;
        /** Classifier model version. */
        classifier_version?: string;
        /** Per-item commodity classification results. */
        items?: Array<{
          /** HS codes returned by this classification method. */
          parsed_hs_codes?: Array<string>;
          /** HS codes returned by this classification method. */
          piers_override?: Array<string>;
          /** HS codes returned by this classification method. */
          panjiva_override?: Array<string>;
          /** HS codes predicted by the classifier. */
          classifier_codes?: Array<{
            /** Predicted HS code. */
            hs_code?: string;
            /** Confidence value reported by Panjiva. */
            confidence?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Aggregate trade records for selected companies into up to three grouping dimensions. */
    "panjiva.rollup_companies": {
      input: {
        /** Free-text search criteria. */
        query?: {
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        };
        /**
         * Multiple search criteria; every query must match.
         * @maxItems 500
         */
        queries?: Array<{
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        }>;
        /** Native Panjiva filters, including AND, OR, NOT, ranges, dates and geographic constraints. For example: {record_date:{gte:'2025-01-01'},destination_countries:'United States'}. Discover fields with get_data_source_metadata; syntax: https://panjiva.com/api-guide/data-selection/filters. */
        filters?: Record<string, unknown>;
        /** Company identifier representation; upstream default is country_company_name. */
        company_type?: "ccn" | "country_company_name" | "pid" | "capiq" | "ultimate_parent_capiq";
        /** Trade role to search; upstream default is bidirectional. */
        direction?: "bidirectional" | "consignee" | "shipper";
        /** Aggregate statistics across matching shipments. */
        metrics?: Array<{
          /** Numeric field to aggregate, such as value_usd, weight_kg or volume_teu. Available fields depend on the data source. */
          metric: string;
          /** Statistical aggregation operation. */
          op: "sum" | "max" | "avg" | "min";
        }>;
        /** Company IDs to analyze. */
        company_ids?: Array<number>;
        /**
         * One to three successive grouping dimensions. Only the first dimension supports offset; size plus offset cannot exceed 1000.
         * @minItems 1
         * @maxItems 3
         */
        dimensions: Array<{
          /** Field to group by; discover available dimensions with get_data_source_metadata. */
          field: string;
          /** Include missing values as NO_VALUE buckets. */
          include_missing?: boolean;
          /** Sort an aggregation; metric keys must also be declared in metrics. */
          sort: {
            /** Sort by count, field, or an available metric. */
            key: string;
            /** Ascending or descending order. */
            order?: "asc" | "desc";
            /** Statistical aggregation operation. */
            op?: "sum" | "max" | "avg" | "min";
          };
          /**
           * Maximum buckets in this dimension; upstream default is 10.
           * @minimum 0
           * @maximum 100
           */
          size?: number;
          /**
           * First-dimension bucket offset; upstream default is 0.
           * @minimum 0
           * @maximum 999
           */
          offset?: number;
        }>;
      };
      output: {
        /** Matching buyers or consignees. */
        consignees?: Array<Record<string, unknown>>;
        /** Matching suppliers or shippers. */
        shippers?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Group matching shipments into up to three dimensions with metrics and optional time-series aggregation. */
    "panjiva.rollup_shipments": {
      input: {
        /**
         * Data source, such as global or us-imports. Use list_data_sources to discover available sources; global covers the last five years.
         * @minLength 1
         */
        data_source: string;
        /** Free-text search criteria. */
        query?: {
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        };
        /**
         * Multiple search criteria; every query must match.
         * @maxItems 500
         */
        queries?: Array<{
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        }>;
        /** Native Panjiva filters, including AND, OR, NOT, ranges, dates and geographic constraints. For example: {record_date:{gte:'2025-01-01'},destination_countries:'United States'}. Discover fields with get_data_source_metadata; syntax: https://panjiva.com/api-guide/data-selection/filters. */
        filters?: Record<string, unknown>;
        /** Aggregate statistics across matching shipments. */
        metrics?: Array<{
          /** Numeric field to aggregate, such as value_usd, weight_kg or volume_teu. Available fields depend on the data source. */
          metric: string;
          /** Statistical aggregation operation. */
          op: "sum" | "max" | "avg" | "min";
        }>;
        /**
         * One to three successive grouping dimensions. Only the first dimension supports offset; size plus offset cannot exceed 1000.
         * @minItems 1
         * @maxItems 3
         */
        dimensions: Array<{
          /** Field to group by; discover available dimensions with get_data_source_metadata. */
          field: string;
          /** Include missing values as NO_VALUE buckets. */
          include_missing?: boolean;
          /** Sort an aggregation; metric keys must also be declared in metrics. */
          sort: {
            /** Sort by count, field, or an available metric. */
            key: string;
            /** Ascending or descending order. */
            order?: "asc" | "desc";
            /** Statistical aggregation operation. */
            op?: "sum" | "max" | "avg" | "min";
          };
          /**
           * Maximum buckets in this dimension; upstream default is 10.
           * @minimum 0
           * @maximum 100
           */
          size?: number;
          /**
           * First-dimension bucket offset; upstream default is 0.
           * @minimum 0
           * @maximum 999
           */
          offset?: number;
        }>;
        /** Time-series aggregation within the rollup. */
        time_series?: {
          /** Time-series bucket interval. */
          interval: "week" | "month" | "quarter" | "year";
          /**
           * First date included in the time series.
           * @format date
           */
          min_date?: string;
          /**
           * Last date included in the time series.
           * @format date
           */
          max_date?: string;
        };
      };
      output: {
        /** Matching and returned record counts. */
        record_count?: {
          /** Total matching records. */
          total?: number;
          /** Records returned in this response. */
          returned?: number;
          [key: string]: unknown;
        };
        /** Panjiva metrics, refinements, time_series or rollup results, keyed by requested fields. */
        analytics?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Find buyers and suppliers through matching Panjiva trade records, with company identity types and trade-role filtering. */
    "panjiva.search_companies": {
      input: {
        /** Free-text search criteria. */
        query?: {
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        };
        /**
         * Multiple search criteria; every query must match.
         * @maxItems 500
         */
        queries?: Array<{
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        }>;
        /** Native Panjiva filters, including AND, OR, NOT, ranges, dates and geographic constraints. For example: {record_date:{gte:'2025-01-01'},destination_countries:'United States'}. Discover fields with get_data_source_metadata; syntax: https://panjiva.com/api-guide/data-selection/filters. */
        filters?: Record<string, unknown>;
        /** Company identifier representation; upstream default is country_company_name. */
        company_type?: "ccn" | "country_company_name" | "pid" | "capiq" | "ultimate_parent_capiq";
        /** Trade role to search; upstream default is bidirectional. */
        direction?: "bidirectional" | "consignee" | "shipper";
        /** Aggregate statistics across matching shipments. */
        metrics?: Array<{
          /** Numeric field to aggregate, such as value_usd, weight_kg or volume_teu. Available fields depend on the data source. */
          metric: string;
          /** Statistical aggregation operation. */
          op: "sum" | "max" | "avg" | "min";
        }>;
        /**
         * Maximum company results per trade direction.
         * @minimum 0
         * @maximum 5000
         */
        size?: number;
        /** Sort an aggregation; metric keys must also be declared in metrics. */
        sort?: {
          /** Sort by count, field, or an available metric. */
          key: string;
          /** Ascending or descending order. */
          order?: "asc" | "desc";
          /** Statistical aggregation operation. */
          op?: "sum" | "max" | "avg" | "min";
        };
      };
      output: {
        /** Matching buyers or consignees. */
        consignees?: Array<Record<string, unknown>>;
        /** Matching suppliers or shippers. */
        shippers?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Search Harmonized System codes and US Harmonized Tariff Schedule descriptions. */
    "panjiva.search_hs_codes": {
      input: {
        /** HS code text query. */
        query: {
          /** Text to search in HS code descriptions. */
          text: string;
        };
        /** Additional HS code text queries. */
        queries?: Array<{
          /** Text to search in HS code descriptions. */
          text: string;
        }>;
        /** HS code level and section constraints, supporting AND, OR and NOT. Levels are 2, 4, 6, 8 or 10. */
        filters?: Record<string, unknown>;
        /**
         * Record offset.
         * @minimum 0
         * @maximum 4500
         */
        offset?: number;
        /**
         * Maximum records to return.
         * @minimum 0
         * @maximum 500
         */
        size?: number;
      };
      output: {
        /** Matching and returned record counts. */
        record_count?: {
          /** Total matching records. */
          total?: number;
          /** Records returned in this response. */
          returned?: number;
          [key: string]: unknown;
        };
        /** Matching HS codes. */
        results?: Array<{
          /** HS code. */
          commodity?: string;
          /** Commodity description. */
          description?: string;
          /** HS code digit level. */
          level?: string;
          /** Parent HS code. */
          parent?: string;
          /** HS system section. */
          section?: string;
          [key: string]: unknown;
        }>;
        /** Panjiva metrics, refinements, time_series or rollup results, keyed by requested fields. */
        analytics?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Search Panjiva import and export shipment records with filtering, sorting, pagination and optional metrics. Use bulk_search_shipments for larger result sets. */
    "panjiva.search_shipments": {
      input: {
        /**
         * Data source, such as global or us-imports. Use list_data_sources to discover available sources; global covers the last five years.
         * @minLength 1
         */
        data_source: string;
        /** Free-text search criteria. */
        query?: {
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        };
        /**
         * Multiple search criteria; every query must match.
         * @maxItems 500
         */
        queries?: Array<{
          /** Search text. Supports + (AND), | (OR), - (exclude), quoted phrases, trailing *, and parentheses. */
          text: string;
          /** Named search group, such as goods_described, consignee_name, shipper_name, or main. Discover groups with get_data_source_metadata. */
          group?: string;
          /** Explicit fields to search instead of a named group. */
          custom_group?: Array<string>;
          /** Boolean operator between search terms; the upstream default is OR. */
          operator?: "AND" | "OR";
          /** Match word stems or exact terms; the upstream default is stem. */
          match?: "stem" | "exact";
        }>;
        /** Native Panjiva filters, including AND, OR, NOT, ranges, dates and geographic constraints. For example: {record_date:{gte:'2025-01-01'},destination_countries:'United States'}. Discover fields with get_data_source_metadata; syntax: https://panjiva.com/api-guide/data-selection/filters. */
        filters?: Record<string, unknown>;
        /**
         * Record offset.
         * @minimum 0
         * @maximum 4500
         */
        offset?: number;
        /**
         * Maximum records to return.
         * @minimum 0
         * @maximum 500
         */
        size?: number;
        /** Aggregate statistics across matching shipments. */
        metrics?: Array<{
          /** Numeric field to aggregate, such as value_usd, weight_kg or volume_teu. Available fields depend on the data source. */
          metric: string;
          /** Statistical aggregation operation. */
          op: "sum" | "max" | "avg" | "min";
        }>;
        /** Shipment sort fields in priority order. */
        sort?: Array<{
          /** Sortable shipment field; discover fields with get_data_source_metadata. */
          field: string;
          /** Ascending or descending order. */
          order: "asc" | "desc";
        }>;
      };
      output: {
        /** Matching and returned record counts. */
        record_count?: {
          /** Total matching records. */
          total?: number;
          /** Records returned in this response. */
          returned?: number;
          [key: string]: unknown;
        };
        /** Matching shipment records. */
        records?: Array<Record<string, unknown>>;
        /** Panjiva metrics, refinements, time_series or rollup results, keyed by requested fields. */
        analytics?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
