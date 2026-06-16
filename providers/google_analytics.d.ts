import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Archive a Google Analytics custom dimension that should no longer be available for reporting configuration. */
    "google_analytics.archive_custom_dimension": {
      input: {
        /**
         * The custom dimension resource name, such as properties/123/customDimensions/456.
         * @minLength 1
         */
        customDimensionName: string;
      };
      output: {
        /** Whether Google Analytics accepted the archive request. */
        success: boolean;
        /** The raw Google Analytics object. */
        raw: Record<string, unknown>;
      };
    };
    /** Archive a Google Analytics custom metric that should no longer be available for reporting configuration. */
    "google_analytics.archive_custom_metric": {
      input: {
        /**
         * The custom metric resource name, such as properties/123/customMetrics/456.
         * @minLength 1
         */
        customMetricName: string;
      };
      output: {
        /** Whether Google Analytics accepted the archive request. */
        success: boolean;
        /** The raw Google Analytics object. */
        raw: Record<string, unknown>;
      };
    };
    /** Run up to five Google Analytics Data API pivot reports in one batch request for a single property. */
    "google_analytics.batch_run_pivot_reports": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The RunPivotReportRequest objects to execute in the batch.
         * @minItems 1
         * @maxItems 5
         */
        requests: Array<{
          /**
           * The date ranges for the pivot report.
           * @minItems 1
           */
          dateRanges?: Array<{
            /**
             * The inclusive start date in YYYY-MM-DD format or a relative value such as 7daysAgo.
             * @minLength 1
             */
            startDate: string;
            /**
             * The inclusive end date in YYYY-MM-DD format or a relative value such as today.
             * @minLength 1
             */
            endDate: string;
            /**
             * The optional date range name used in response dimensions.
             * @minLength 1
             */
            name?: string;
          }>;
          /**
           * The dimensions to include in the pivot report.
           * @minItems 1
           */
          dimensions?: Array<string | Record<string, unknown>>;
          /**
           * The metrics to include in the pivot report.
           * @minItems 1
           */
          metrics: Array<string | Record<string, unknown>>;
          /**
           * The pivot configurations for the pivot report.
           * @minItems 1
           */
          pivots: Array<Record<string, unknown>>;
          /** A Google Analytics Data API FilterExpression object. */
          dimensionFilter?: Record<string, unknown>;
          /** A Google Analytics Data API FilterExpression object. */
          metricFilter?: Record<string, unknown>;
          /**
           * The pivot report ordering rules.
           * @minItems 1
           */
          orderBys?: Array<Record<string, unknown>>;
          /**
           * The ISO 4217 currency code for currency metrics.
           * @minLength 1
           */
          currencyCode?: string;
          /** The Google Analytics Data API cohort specification for cohort reports. */
          cohortSpec?: Record<string, unknown>;
          /** Whether rows with zero metric values should be returned. */
          keepEmptyRows?: boolean;
          /**
           * The comparisons to include in the pivot report.
           * @minItems 1
           */
          comparisons?: Array<Record<string, unknown>>;
          /** Whether to return the property quota with the response. */
          returnPropertyQuota?: boolean;
        }>;
      };
      output: {
        /** The normalized pivot reports returned by Google Analytics. */
        pivotReports: Array<{
          /** The pivot headers returned by the report. */
          pivotHeaders: Array<{
            /** The pivot dimension header entries returned by Google Analytics. */
            pivotDimensionHeaders: Array<Record<string, unknown>>;
            /** The number of rows returned for this pivot. */
            rowCount: number | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The dimension headers returned by the report. */
          dimensionHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The metric headers returned by the report. */
          metricHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The normalized report rows. */
          rows: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Normalized Google Analytics report metadata. */
          metadata: {
            /** The currency code used by the report. */
            currencyCode: string | null;
            /** The property timezone used by the report. */
            timeZone: string | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Google Analytics object. */
          propertyQuota: Record<string, unknown> | null;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Google Analytics object. */
        raw: Record<string, unknown>;
      };
    };
    /** Run up to five Google Analytics Data API reports in one batch request for a single property. */
    "google_analytics.batch_run_reports": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The RunReportRequest objects to execute in the batch.
         * @minItems 1
         * @maxItems 5
         */
        requests: Array<{
          /**
           * The date ranges for the report.
           * @minItems 1
           */
          dateRanges: Array<{
            /**
             * The inclusive start date in YYYY-MM-DD format or a relative value such as 7daysAgo.
             * @minLength 1
             */
            startDate: string;
            /**
             * The inclusive end date in YYYY-MM-DD format or a relative value such as today.
             * @minLength 1
             */
            endDate: string;
            /**
             * The optional date range name used in response dimensions.
             * @minLength 1
             */
            name?: string;
          }>;
          /**
           * The dimensions to include in the report.
           * @minItems 1
           */
          dimensions?: Array<string | Record<string, unknown>>;
          /**
           * The metrics to include in the report.
           * @minItems 1
           */
          metrics: Array<string | Record<string, unknown>>;
          /** A Google Analytics Data API FilterExpression object. */
          dimensionFilter?: Record<string, unknown>;
          /** A Google Analytics Data API FilterExpression object. */
          metricFilter?: Record<string, unknown>;
          /**
           * The report ordering rules.
           * @minItems 1
           */
          orderBys?: Array<Record<string, unknown>>;
          /**
           * The ISO 4217 currency code for currency metrics.
           * @minLength 1
           */
          currencyCode?: string;
          /** The Google Analytics Data API cohort specification for cohort reports. */
          cohortSpec?: Record<string, unknown>;
          /** Whether rows with zero metric values should be returned. */
          keepEmptyRows?: boolean;
          /**
           * The metric aggregations to include in the report.
           * @minItems 1
           */
          metricAggregations?: Array<"METRIC_AGGREGATION_UNSPECIFIED" | "TOTAL" | "MINIMUM" | "MAXIMUM" | "COUNT">;
          /**
           * The comparisons to include in the report.
           * @minItems 1
           */
          comparisons?: Array<Record<string, unknown>>;
          /** A Google Analytics int64 request value. */
          limit?: string | number;
          /** A Google Analytics int64 request value. */
          offset?: string | number;
          /** Whether to return the property quota with the response. */
          returnPropertyQuota?: boolean;
        }>;
      };
      output: {
        /** The normalized reports returned by Google Analytics. */
        reports: Array<{
          /** The dimension headers returned by the report. */
          dimensionHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The metric headers returned by the report. */
          metricHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The normalized report rows. */
          rows: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The total row count returned by Google Analytics. */
          rowCount: number | null;
          /** Normalized Google Analytics report metadata. */
          metadata: {
            /** The currency code used by the report. */
            currencyCode: string | null;
            /** The property timezone used by the report. */
            timeZone: string | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Google Analytics object. */
          propertyQuota: Record<string, unknown> | null;
          /** Total rows returned by Google Analytics. */
          totals: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Minimum rows returned by Google Analytics. */
          minimums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Maximum rows returned by Google Analytics. */
          maximums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Google Analytics object. */
        raw: Record<string, unknown>;
      };
    };
    /** Check whether selected Google Analytics dimensions and metrics can be queried together. */
    "google_analytics.check_compatibility": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The dimensions to check for compatibility.
         * @minItems 1
         */
        dimensions?: Array<string | Record<string, unknown>>;
        /**
         * The metrics to check for compatibility.
         * @minItems 1
         * @maxItems 10
         */
        metrics?: Array<string | Record<string, unknown>>;
        /** A Google Analytics Data API FilterExpression object. */
        dimensionFilter?: Record<string, unknown>;
        /** A Google Analytics Data API FilterExpression object. */
        metricFilter?: Record<string, unknown>;
        /** Filter results by Google Analytics compatibility enum value. */
        compatibilityFilter?: "COMPATIBILITY_UNSPECIFIED" | "COMPATIBLE" | "INCOMPATIBLE";
      };
      output: {
        /** The normalized Google Analytics compatibility check response. */
        compatibility: {
          /** The compatibility results for requested dimensions. */
          dimensionCompatibilities: Array<{
            /** The Google Analytics compatibility enum value. */
            compatibility: string | null;
            /** A normalized Google Analytics metadata field. */
            metadata: {
              /** The API name used in report requests. */
              apiName: string | null;
              /** The display name shown by Google Analytics. */
              uiName: string | null;
              /** The field description returned by Google Analytics. */
              description: string | null;
              /** The metadata category returned by Google Analytics. */
              category: string | null;
              /** The metric type returned by Google Analytics when present. */
              type: string | null;
              /** The metric expression returned by Google Analytics. */
              expression: string | null;
              /** Deprecated API names for this field. */
              deprecatedApiNames: Array<string>;
              /** Whether this is a custom dimension or metric. */
              customDefinition: boolean | null;
              /** The raw Google Analytics object. */
              raw: Record<string, unknown>;
            };
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The compatibility results for requested metrics. */
          metricCompatibilities: Array<{
            /** The Google Analytics compatibility enum value. */
            compatibility: string | null;
            /** A normalized Google Analytics metadata field. */
            metadata: {
              /** The API name used in report requests. */
              apiName: string | null;
              /** The display name shown by Google Analytics. */
              uiName: string | null;
              /** The field description returned by Google Analytics. */
              description: string | null;
              /** The metadata category returned by Google Analytics. */
              category: string | null;
              /** The metric type returned by Google Analytics when present. */
              type: string | null;
              /** The metric expression returned by Google Analytics. */
              expression: string | null;
              /** Deprecated API names for this field. */
              deprecatedApiNames: Array<string>;
              /** Whether this is a custom dimension or metric. */
              customDefinition: boolean | null;
              /** The raw Google Analytics object. */
              raw: Record<string, unknown>;
            };
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a Google Analytics custom dimension so reporting can use a business-specific event, user, or item attribute. */
    "google_analytics.create_custom_dimension": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The event parameter name for the custom dimension.
         * @minLength 1
         */
        parameterName: string;
        /**
         * The custom dimension display name.
         * @minLength 1
         */
        displayName: string;
        /**
         * The custom dimension description.
         * @minLength 1
         */
        description?: string;
        /** The custom dimension scope enum value. */
        scope: "EVENT" | "USER" | "ITEM";
        /** Whether this custom dimension is blocked from ads personalization. */
        disallowAdsPersonalization?: boolean;
      };
      output: {
        /** A normalized Google Analytics custom dimension. */
        customDimension: {
          /** The custom dimension resource name. */
          name: string | null;
          /** The event parameter name for the custom dimension. */
          parameterName: string | null;
          /** The custom dimension display name. */
          displayName: string | null;
          /** The custom dimension description. */
          description: string | null;
          /** The custom dimension scope enum value. */
          scope: string | null;
          /** Whether this custom dimension is blocked from ads personalization. */
          disallowAdsPersonalization: boolean | null;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a Google Analytics custom metric so reports can measure business-specific event values. */
    "google_analytics.create_custom_metric": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The event parameter name for the custom metric.
         * @minLength 1
         */
        parameterName: string;
        /**
         * The custom metric display name.
         * @minLength 1
         */
        displayName: string;
        /**
         * The custom metric description.
         * @minLength 1
         */
        description?: string;
        /** The custom metric measurement unit enum value. */
        measurementUnit: "MEASUREMENT_UNIT_UNSPECIFIED" | "STANDARD" | "CURRENCY" | "FEET" | "METERS" | "KILOMETERS" | "MILES" | "MILLISECONDS" | "SECONDS" | "MINUTES" | "HOURS";
        /** The custom metric scope enum value. */
        scope: "EVENT";
        /**
         * The restricted metric type enum values for this custom metric.
         * @minItems 1
         */
        restrictedMetricType?: Array<"RESTRICTED_METRIC_TYPE_UNSPECIFIED" | "COST_DATA" | "REVENUE_DATA">;
      };
      output: {
        /** A normalized Google Analytics custom metric. */
        customMetric: {
          /** The custom metric resource name. */
          name: string | null;
          /** The event parameter name for the custom metric. */
          parameterName: string | null;
          /** The custom metric display name. */
          displayName: string | null;
          /** The custom metric description. */
          description: string | null;
          /** The custom metric measurement unit enum value. */
          measurementUnit: string | null;
          /** The custom metric scope enum value. */
          scope: string | null;
          /** The restricted metric type enum values for this custom metric. */
          restrictedMetricType: Array<string>;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get available dimensions and metrics for a Google Analytics property before building reports. */
    "google_analytics.get_metadata": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
      };
      output: {
        /** The normalized Google Analytics metadata response. */
        metadata: {
          /** The metadata resource name. */
          name: string | null;
          /** The available dimensions for the property. */
          dimensions: Array<{
            /** The API name used in report requests. */
            apiName: string | null;
            /** The display name shown by Google Analytics. */
            uiName: string | null;
            /** The field description returned by Google Analytics. */
            description: string | null;
            /** The metadata category returned by Google Analytics. */
            category: string | null;
            /** The metric type returned by Google Analytics when present. */
            type: string | null;
            /** The metric expression returned by Google Analytics. */
            expression: string | null;
            /** Deprecated API names for this field. */
            deprecatedApiNames: Array<string>;
            /** Whether this is a custom dimension or metric. */
            customDefinition: boolean | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The available metrics for the property. */
          metrics: Array<{
            /** The API name used in report requests. */
            apiName: string | null;
            /** The display name shown by Google Analytics. */
            uiName: string | null;
            /** The field description returned by Google Analytics. */
            description: string | null;
            /** The metadata category returned by Google Analytics. */
            category: string | null;
            /** The metric type returned by Google Analytics when present. */
            type: string | null;
            /** The metric expression returned by Google Analytics. */
            expression: string | null;
            /** Deprecated API names for this field. */
            deprecatedApiNames: Array<string>;
            /** Whether this is a custom dimension or metric. */
            customDefinition: boolean | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The available comparisons for the property. */
          comparisons: Array<{
            /** The API name used in report requests. */
            apiName: string | null;
            /** The display name shown by Google Analytics. */
            uiName: string | null;
            /** The field description returned by Google Analytics. */
            description: string | null;
            /** The metadata category returned by Google Analytics. */
            category: string | null;
            /** The metric type returned by Google Analytics when present. */
            type: string | null;
            /** The metric expression returned by Google Analytics. */
            expression: string | null;
            /** Deprecated API names for this field. */
            deprecatedApiNames: Array<string>;
            /** Whether this is a custom dimension or metric. */
            customDefinition: boolean | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the key setup details for a Google Analytics property before choosing reports. */
    "google_analytics.get_property_overview": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
      };
      output: {
        /** A Google Analytics property overview for reporting setup. */
        overview: {
          /** The numeric property ID extracted from the property resource. */
          propertyId: string | null;
          /** The property resource name, such as properties/1234. */
          property: string | null;
          /** The parent account or roll-up property resource name. */
          parent: string | null;
          /** The property display name. */
          displayName: string | null;
          /** The Google Analytics property type enum value. */
          propertyType: string | null;
          /** The property industry category enum value. */
          industryCategory: string | null;
          /** The property reporting time zone. */
          timeZone: string | null;
          /** The property currency code. */
          currencyCode: string | null;
          /** The data streams configured on the property. */
          dataStreams: Array<{
            /** The data stream resource name. */
            name: string | null;
            /** The numeric data stream ID extracted from the data stream resource. */
            dataStreamId: string | null;
            /** The data stream display name. */
            displayName: string | null;
            /** The Google Analytics data stream type enum value. */
            type: string | null;
            /** The raw Google Analytics object. */
            webStreamData: Record<string, unknown> | null;
            /** The raw Google Analytics object. */
            androidAppStreamData: Record<string, unknown> | null;
            /** The raw Google Analytics object. */
            iosAppStreamData: Record<string, unknown> | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The web stream measurement IDs for the property. */
          webMeasurementIds: Array<string>;
          /** The custom dimensions configured on the property. */
          customDimensions: Array<{
            /** The custom dimension resource name. */
            name: string | null;
            /** The event parameter name for the custom dimension. */
            parameterName: string | null;
            /** The custom dimension display name. */
            displayName: string | null;
            /** The custom dimension description. */
            description: string | null;
            /** The custom dimension scope enum value. */
            scope: string | null;
            /** Whether this custom dimension is blocked from ads personalization. */
            disallowAdsPersonalization: boolean | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The custom metrics configured on the property. */
          customMetrics: Array<{
            /** The custom metric resource name. */
            name: string | null;
            /** The event parameter name for the custom metric. */
            parameterName: string | null;
            /** The custom metric display name. */
            displayName: string | null;
            /** The custom metric description. */
            description: string | null;
            /** The custom metric measurement unit enum value. */
            measurementUnit: string | null;
            /** The custom metric scope enum value. */
            scope: string | null;
            /** The restricted metric type enum values for this custom metric. */
            restrictedMetricType: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The normalized Google Analytics metadata response. */
          metadata: {
            /** The metadata resource name. */
            name: string | null;
            /** The available dimensions for the property. */
            dimensions: Array<{
              /** The API name used in report requests. */
              apiName: string | null;
              /** The display name shown by Google Analytics. */
              uiName: string | null;
              /** The field description returned by Google Analytics. */
              description: string | null;
              /** The metadata category returned by Google Analytics. */
              category: string | null;
              /** The metric type returned by Google Analytics when present. */
              type: string | null;
              /** The metric expression returned by Google Analytics. */
              expression: string | null;
              /** Deprecated API names for this field. */
              deprecatedApiNames: Array<string>;
              /** Whether this is a custom dimension or metric. */
              customDefinition: boolean | null;
              /** The raw Google Analytics object. */
              raw: Record<string, unknown>;
            }>;
            /** The available metrics for the property. */
            metrics: Array<{
              /** The API name used in report requests. */
              apiName: string | null;
              /** The display name shown by Google Analytics. */
              uiName: string | null;
              /** The field description returned by Google Analytics. */
              description: string | null;
              /** The metadata category returned by Google Analytics. */
              category: string | null;
              /** The metric type returned by Google Analytics when present. */
              type: string | null;
              /** The metric expression returned by Google Analytics. */
              expression: string | null;
              /** Deprecated API names for this field. */
              deprecatedApiNames: Array<string>;
              /** Whether this is a custom dimension or metric. */
              customDefinition: boolean | null;
              /** The raw Google Analytics object. */
              raw: Record<string, unknown>;
            }>;
            /** The available comparisons for the property. */
            comparisons: Array<{
              /** The API name used in report requests. */
              apiName: string | null;
              /** The display name shown by Google Analytics. */
              uiName: string | null;
              /** The field description returned by Google Analytics. */
              description: string | null;
              /** The metadata category returned by Google Analytics. */
              category: string | null;
              /** The metric type returned by Google Analytics when present. */
              type: string | null;
              /** The metric expression returned by Google Analytics. */
              expression: string | null;
              /** Deprecated API names for this field. */
              deprecatedApiNames: Array<string>;
              /** Whether this is a custom dimension or metric. */
              customDefinition: boolean | null;
              /** The raw Google Analytics object. */
              raw: Record<string, unknown>;
            }>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          };
          /** A normalized Google Analytics property quotas snapshot. */
          quota: {
            /** The quota snapshot resource name. */
            name: string | null;
            /** The raw Google Analytics object. */
            corePropertyQuota: Record<string, unknown> | null;
            /** The raw Google Analytics object. */
            realtimePropertyQuota: Record<string, unknown> | null;
            /** The raw Google Analytics object. */
            funnelPropertyQuota: Record<string, unknown> | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          };
          /** Raw Google Analytics responses used to build the overview. */
          raw: {
            /** The raw Google Analytics object. */
            property: Record<string, unknown> | null;
            /** The raw Google Analytics object. */
            dataStreams: Record<string, unknown>;
            /** The raw Google Analytics object. */
            customDimensions: Record<string, unknown>;
            /** The raw Google Analytics object. */
            customMetrics: Record<string, unknown>;
            /** The raw Google Analytics object. */
            metadata: Record<string, unknown>;
            /** The raw Google Analytics object. */
            quota: Record<string, unknown>;
          };
        };
      };
    };
    /** Get the Google Analytics Data API quota snapshot for a property without running a report. */
    "google_analytics.get_property_quotas_snapshot": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
      };
      output: {
        /** A normalized Google Analytics property quotas snapshot. */
        propertyQuotasSnapshot: {
          /** The quota snapshot resource name. */
          name: string | null;
          /** The raw Google Analytics object. */
          corePropertyQuota: Record<string, unknown> | null;
          /** The raw Google Analytics object. */
          realtimePropertyQuota: Record<string, unknown> | null;
          /** The raw Google Analytics object. */
          funnelPropertyQuota: Record<string, unknown> | null;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Google Analytics accounts and property summaries visible to the connected Google account. */
    "google_analytics.list_account_summaries": {
      input: {
        /**
         * The maximum number of items to return per page.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
        /**
         * The opaque pagination token returned by a previous Google Analytics response.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The visible account summaries. */
        accountSummaries: Array<{
          /** The account summary resource name. */
          name: string | null;
          /** The Google Analytics account resource name. */
          account: string | null;
          /** The account display name. */
          displayName: string | null;
          /** The properties visible under the account. */
          propertySummaries: Array<{
            /** The property resource name, such as properties/1234. */
            property: string | null;
            /** The numeric property ID extracted from the property resource. */
            propertyId: string | null;
            /** The property display name. */
            displayName: string | null;
            /** The Google Analytics property type enum value. */
            propertyType: string | null;
            /** The parent account resource name. */
            parent: string | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        }>;
        /** The token for the next page when present. */
        nextPageToken: string | null;
      };
    };
    /** List custom dimensions configured on a Google Analytics property. */
    "google_analytics.list_custom_dimensions": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The maximum number of items to return per page.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
        /**
         * The opaque pagination token returned by a previous Google Analytics response.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The custom dimensions on the property. */
        customDimensions: Array<{
          /** The custom dimension resource name. */
          name: string | null;
          /** The event parameter name for the custom dimension. */
          parameterName: string | null;
          /** The custom dimension display name. */
          displayName: string | null;
          /** The custom dimension description. */
          description: string | null;
          /** The custom dimension scope enum value. */
          scope: string | null;
          /** Whether this custom dimension is blocked from ads personalization. */
          disallowAdsPersonalization: boolean | null;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        }>;
        /** The token for the next page when present. */
        nextPageToken: string | null;
      };
    };
    /** List custom metrics configured on a Google Analytics property. */
    "google_analytics.list_custom_metrics": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The maximum number of items to return per page.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
        /**
         * The opaque pagination token returned by a previous Google Analytics response.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The custom metrics on the property. */
        customMetrics: Array<{
          /** The custom metric resource name. */
          name: string | null;
          /** The event parameter name for the custom metric. */
          parameterName: string | null;
          /** The custom metric display name. */
          displayName: string | null;
          /** The custom metric description. */
          description: string | null;
          /** The custom metric measurement unit enum value. */
          measurementUnit: string | null;
          /** The custom metric scope enum value. */
          scope: string | null;
          /** The restricted metric type enum values for this custom metric. */
          restrictedMetricType: Array<string>;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        }>;
        /** The token for the next page when present. */
        nextPageToken: string | null;
      };
    };
    /** List data streams configured on a Google Analytics property. */
    "google_analytics.list_data_streams": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The maximum number of items to return per page.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
        /**
         * The opaque pagination token returned by a previous Google Analytics response.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The data streams on the property. */
        dataStreams: Array<{
          /** The data stream resource name. */
          name: string | null;
          /** The numeric data stream ID extracted from the data stream resource. */
          dataStreamId: string | null;
          /** The data stream display name. */
          displayName: string | null;
          /** The Google Analytics data stream type enum value. */
          type: string | null;
          /** The raw Google Analytics object. */
          webStreamData: Record<string, unknown> | null;
          /** The raw Google Analytics object. */
          androidAppStreamData: Record<string, unknown> | null;
          /** The raw Google Analytics object. */
          iosAppStreamData: Record<string, unknown> | null;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        }>;
        /** The token for the next page when present. */
        nextPageToken: string | null;
      };
    };
    /** List Google Analytics properties visible to the connected account as user-selectable options. Use this first when the user does not know their GA4 propertyId. */
    "google_analytics.list_properties": {
      input: {
        /**
         * The maximum number of items to return per page.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
        /**
         * The opaque pagination token returned by a previous Google Analytics response.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The visible properties with account context. */
        properties: Array<{
          /** The numeric property ID extracted from the property resource. */
          propertyId: string | null;
          /** The property resource name, such as properties/1234. */
          property: string | null;
          /** The property display name. */
          displayName: string | null;
          /** The Google Analytics property type enum value. */
          propertyType: string | null;
          /** The parent account resource name. */
          parent: string | null;
          /** The Google Analytics account resource name. */
          account: string | null;
          /** The Google Analytics account display name. */
          accountDisplayName: string | null;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        }>;
        /** The token for the next page when present. */
        nextPageToken: string | null;
      };
    };
    /** List Google Analytics properties matching a known Admin API filter such as parent:accounts/123. Use list_properties first when the account or propertyId is unknown. */
    "google_analytics.list_properties_filtered": {
      input: {
        /**
         * The Admin API filter expression, such as parent:accounts/123 or ancestor:accounts/123.
         * @minLength 1
         */
        filter: string;
        /**
         * The maximum number of items to return per page.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
        /**
         * The opaque pagination token returned by a previous Google Analytics response.
         * @minLength 1
         */
        pageToken?: string;
        /** Whether to include soft-deleted properties. */
        showDeleted?: boolean;
      };
      output: {
        /** The properties matching the filter. */
        properties: Array<{
          /** The property resource name, such as properties/1234. */
          name: string | null;
          /** The numeric property ID extracted from the property resource. */
          propertyId: string | null;
          /** The parent account or roll-up property resource name. */
          parent: string | null;
          /** The property display name. */
          displayName: string | null;
          /** The Google Analytics property type enum value. */
          propertyType: string | null;
          /** The property industry category enum value. */
          industryCategory: string | null;
          /** The property reporting time zone. */
          timeZone: string | null;
          /** The property currency code. */
          currencyCode: string | null;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        }>;
        /** The token for the next page when present. */
        nextPageToken: string | null;
      };
    };
    /** Run a Google Analytics acquisition report showing where sessions and users came from. */
    "google_analytics.run_acquisition_report": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The inclusive report start date in YYYY-MM-DD format.
         * @minLength 1
         */
        startDate: string;
        /**
         * The inclusive report end date in YYYY-MM-DD format.
         * @minLength 1
         */
        endDate: string;
        /** A Google Analytics int64 request value. */
        limit?: string | number;
        /** The business report field to sort by descending. */
        orderBy?: "activeUsers" | "sessions" | "engagedSessions" | "keyEvents";
        /** A Google Analytics Data API FilterExpression object. */
        dimensionFilter?: Record<string, unknown>;
        /** A Google Analytics Data API FilterExpression object. */
        metricFilter?: Record<string, unknown>;
        /** Whether rows with zero metric values should be returned. */
        keepEmptyRows?: boolean;
        /** Whether to return the property quota with the response. */
        returnPropertyQuota?: boolean;
      };
      output: {
        /** A normalized Google Analytics report response. */
        report: {
          /** The dimension headers returned by the report. */
          dimensionHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The metric headers returned by the report. */
          metricHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The normalized report rows. */
          rows: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The total row count returned by Google Analytics. */
          rowCount: number | null;
          /** Normalized Google Analytics report metadata. */
          metadata: {
            /** The currency code used by the report. */
            currencyCode: string | null;
            /** The property timezone used by the report. */
            timeZone: string | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Google Analytics object. */
          propertyQuota: Record<string, unknown> | null;
          /** Total rows returned by Google Analytics. */
          totals: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Minimum rows returned by Google Analytics. */
          minimums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Maximum rows returned by Google Analytics. */
          maximums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Run a Google Analytics engagement trend report for users, sessions, and engagement quality. */
    "google_analytics.run_engagement_report": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The inclusive report start date in YYYY-MM-DD format.
         * @minLength 1
         */
        startDate: string;
        /**
         * The inclusive report end date in YYYY-MM-DD format.
         * @minLength 1
         */
        endDate: string;
        /** A Google Analytics int64 request value. */
        limit?: string | number;
        /** The business report field to sort by descending. */
        orderBy?: "date" | "activeUsers" | "sessions" | "engagedSessions" | "engagementRate" | "averageSessionDuration" | "eventCount";
        /** A Google Analytics Data API FilterExpression object. */
        dimensionFilter?: Record<string, unknown>;
        /** A Google Analytics Data API FilterExpression object. */
        metricFilter?: Record<string, unknown>;
        /** Whether rows with zero metric values should be returned. */
        keepEmptyRows?: boolean;
        /** Whether to return the property quota with the response. */
        returnPropertyQuota?: boolean;
      };
      output: {
        /** A normalized Google Analytics report response. */
        report: {
          /** The dimension headers returned by the report. */
          dimensionHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The metric headers returned by the report. */
          metricHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The normalized report rows. */
          rows: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The total row count returned by Google Analytics. */
          rowCount: number | null;
          /** Normalized Google Analytics report metadata. */
          metadata: {
            /** The currency code used by the report. */
            currencyCode: string | null;
            /** The property timezone used by the report. */
            timeZone: string | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Google Analytics object. */
          propertyQuota: Record<string, unknown> | null;
          /** Total rows returned by Google Analytics. */
          totals: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Minimum rows returned by Google Analytics. */
          minimums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Maximum rows returned by Google Analytics. */
          maximums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Run a Google Analytics events report for event volume, users, key events, and value. */
    "google_analytics.run_events_report": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The inclusive report start date in YYYY-MM-DD format.
         * @minLength 1
         */
        startDate: string;
        /**
         * The inclusive report end date in YYYY-MM-DD format.
         * @minLength 1
         */
        endDate: string;
        /** A Google Analytics int64 request value. */
        limit?: string | number;
        /** The business report field to sort by descending. */
        orderBy?: "eventName" | "eventCount" | "totalUsers" | "activeUsers" | "keyEvents" | "eventValue";
        /** A Google Analytics Data API FilterExpression object. */
        dimensionFilter?: Record<string, unknown>;
        /** A Google Analytics Data API FilterExpression object. */
        metricFilter?: Record<string, unknown>;
        /** Whether rows with zero metric values should be returned. */
        keepEmptyRows?: boolean;
        /** Whether to return the property quota with the response. */
        returnPropertyQuota?: boolean;
      };
      output: {
        /** A normalized Google Analytics report response. */
        report: {
          /** The dimension headers returned by the report. */
          dimensionHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The metric headers returned by the report. */
          metricHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The normalized report rows. */
          rows: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The total row count returned by Google Analytics. */
          rowCount: number | null;
          /** Normalized Google Analytics report metadata. */
          metadata: {
            /** The currency code used by the report. */
            currencyCode: string | null;
            /** The property timezone used by the report. */
            timeZone: string | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Google Analytics object. */
          propertyQuota: Record<string, unknown> | null;
          /** Total rows returned by Google Analytics. */
          totals: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Minimum rows returned by Google Analytics. */
          minimums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Maximum rows returned by Google Analytics. */
          maximums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Run a Google Analytics geography report for users, sessions, and key events by location. */
    "google_analytics.run_geography_report": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The inclusive report start date in YYYY-MM-DD format.
         * @minLength 1
         */
        startDate: string;
        /**
         * The inclusive report end date in YYYY-MM-DD format.
         * @minLength 1
         */
        endDate: string;
        /** A Google Analytics int64 request value. */
        limit?: string | number;
        /** The business report field to sort by descending. */
        orderBy?: "country" | "region" | "city" | "activeUsers" | "newUsers" | "sessions" | "engagedSessions" | "keyEvents";
        /** A Google Analytics Data API FilterExpression object. */
        dimensionFilter?: Record<string, unknown>;
        /** A Google Analytics Data API FilterExpression object. */
        metricFilter?: Record<string, unknown>;
        /** Whether rows with zero metric values should be returned. */
        keepEmptyRows?: boolean;
        /** Whether to return the property quota with the response. */
        returnPropertyQuota?: boolean;
      };
      output: {
        /** A normalized Google Analytics report response. */
        report: {
          /** The dimension headers returned by the report. */
          dimensionHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The metric headers returned by the report. */
          metricHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The normalized report rows. */
          rows: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The total row count returned by Google Analytics. */
          rowCount: number | null;
          /** Normalized Google Analytics report metadata. */
          metadata: {
            /** The currency code used by the report. */
            currencyCode: string | null;
            /** The property timezone used by the report. */
            timeZone: string | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Google Analytics object. */
          propertyQuota: Record<string, unknown> | null;
          /** Total rows returned by Google Analytics. */
          totals: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Minimum rows returned by Google Analytics. */
          minimums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Maximum rows returned by Google Analytics. */
          maximums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Run a Google Analytics key events report for key event volume and conversion rates. */
    "google_analytics.run_key_events_report": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The inclusive report start date in YYYY-MM-DD format.
         * @minLength 1
         */
        startDate: string;
        /**
         * The inclusive report end date in YYYY-MM-DD format.
         * @minLength 1
         */
        endDate: string;
        /** A Google Analytics int64 request value. */
        limit?: string | number;
        /** The business report field to sort by descending. */
        orderBy?: "eventName" | "keyEvents" | "sessionKeyEventRate" | "userKeyEventRate";
        /** A Google Analytics Data API FilterExpression object. */
        dimensionFilter?: Record<string, unknown>;
        /** A Google Analytics Data API FilterExpression object. */
        metricFilter?: Record<string, unknown>;
        /** Whether rows with zero metric values should be returned. */
        keepEmptyRows?: boolean;
        /** Whether to return the property quota with the response. */
        returnPropertyQuota?: boolean;
      };
      output: {
        /** A normalized Google Analytics report response. */
        report: {
          /** The dimension headers returned by the report. */
          dimensionHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The metric headers returned by the report. */
          metricHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The normalized report rows. */
          rows: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The total row count returned by Google Analytics. */
          rowCount: number | null;
          /** Normalized Google Analytics report metadata. */
          metadata: {
            /** The currency code used by the report. */
            currencyCode: string | null;
            /** The property timezone used by the report. */
            timeZone: string | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Google Analytics object. */
          propertyQuota: Record<string, unknown> | null;
          /** Total rows returned by Google Analytics. */
          totals: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Minimum rows returned by Google Analytics. */
          minimums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Maximum rows returned by Google Analytics. */
          maximums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Run a Google Analytics pages report for page views, users, sessions, and engagement. */
    "google_analytics.run_pages_report": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The inclusive report start date in YYYY-MM-DD format.
         * @minLength 1
         */
        startDate: string;
        /**
         * The inclusive report end date in YYYY-MM-DD format.
         * @minLength 1
         */
        endDate: string;
        /** A Google Analytics int64 request value. */
        limit?: string | number;
        /** The business report field to sort by descending. */
        orderBy?: "pagePath" | "pageTitle" | "screenPageViews" | "activeUsers" | "sessions" | "averageSessionDuration" | "eventCount";
        /** A Google Analytics Data API FilterExpression object. */
        dimensionFilter?: Record<string, unknown>;
        /** A Google Analytics Data API FilterExpression object. */
        metricFilter?: Record<string, unknown>;
        /** Whether rows with zero metric values should be returned. */
        keepEmptyRows?: boolean;
        /** Whether to return the property quota with the response. */
        returnPropertyQuota?: boolean;
      };
      output: {
        /** A normalized Google Analytics report response. */
        report: {
          /** The dimension headers returned by the report. */
          dimensionHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The metric headers returned by the report. */
          metricHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The normalized report rows. */
          rows: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The total row count returned by Google Analytics. */
          rowCount: number | null;
          /** Normalized Google Analytics report metadata. */
          metadata: {
            /** The currency code used by the report. */
            currencyCode: string | null;
            /** The property timezone used by the report. */
            timeZone: string | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Google Analytics object. */
          propertyQuota: Record<string, unknown> | null;
          /** Total rows returned by Google Analytics. */
          totals: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Minimum rows returned by Google Analytics. */
          minimums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Maximum rows returned by Google Analytics. */
          maximums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Run a Google Analytics Data API pivot report for cross-tabbed reporting views. */
    "google_analytics.run_pivot_report": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The date ranges for the pivot report.
         * @minItems 1
         */
        dateRanges?: Array<{
          /**
           * The inclusive start date in YYYY-MM-DD format or a relative value such as 7daysAgo.
           * @minLength 1
           */
          startDate: string;
          /**
           * The inclusive end date in YYYY-MM-DD format or a relative value such as today.
           * @minLength 1
           */
          endDate: string;
          /**
           * The optional date range name used in response dimensions.
           * @minLength 1
           */
          name?: string;
        }>;
        /**
         * The dimensions to include in the pivot report.
         * @minItems 1
         */
        dimensions?: Array<string | Record<string, unknown>>;
        /**
         * The metrics to include in the pivot report.
         * @minItems 1
         */
        metrics: Array<string | Record<string, unknown>>;
        /**
         * The pivot configurations for the pivot report.
         * @minItems 1
         */
        pivots: Array<Record<string, unknown>>;
        /** A Google Analytics Data API FilterExpression object. */
        dimensionFilter?: Record<string, unknown>;
        /** A Google Analytics Data API FilterExpression object. */
        metricFilter?: Record<string, unknown>;
        /**
         * The pivot report ordering rules.
         * @minItems 1
         */
        orderBys?: Array<Record<string, unknown>>;
        /**
         * The ISO 4217 currency code for currency metrics.
         * @minLength 1
         */
        currencyCode?: string;
        /** The Google Analytics Data API cohort specification for cohort reports. */
        cohortSpec?: Record<string, unknown>;
        /** Whether rows with zero metric values should be returned. */
        keepEmptyRows?: boolean;
        /**
         * The comparisons to include in the pivot report.
         * @minItems 1
         */
        comparisons?: Array<Record<string, unknown>>;
        /** Whether to return the property quota with the response. */
        returnPropertyQuota?: boolean;
      };
      output: {
        /** A normalized Google Analytics pivot report response. */
        pivotReport: {
          /** The pivot headers returned by the report. */
          pivotHeaders: Array<{
            /** The pivot dimension header entries returned by Google Analytics. */
            pivotDimensionHeaders: Array<Record<string, unknown>>;
            /** The number of rows returned for this pivot. */
            rowCount: number | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The dimension headers returned by the report. */
          dimensionHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The metric headers returned by the report. */
          metricHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The normalized report rows. */
          rows: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Normalized Google Analytics report metadata. */
          metadata: {
            /** The currency code used by the report. */
            currencyCode: string | null;
            /** The property timezone used by the report. */
            timeZone: string | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Google Analytics object. */
          propertyQuota: Record<string, unknown> | null;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Run a Google Analytics realtime report for currently active users and events. */
    "google_analytics.run_realtime_report": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The realtime dimensions to include in the report.
         * @minItems 1
         */
        dimensions?: Array<string | Record<string, unknown>>;
        /**
         * The realtime metrics to include in the report.
         * @minItems 1
         */
        metrics: Array<string | Record<string, unknown>>;
        /** A Google Analytics Data API FilterExpression object. */
        dimensionFilter?: Record<string, unknown>;
        /** A Google Analytics Data API FilterExpression object. */
        metricFilter?: Record<string, unknown>;
        /**
         * The realtime report ordering rules.
         * @minItems 1
         */
        orderBys?: Array<Record<string, unknown>>;
        /** A Google Analytics int64 request value. */
        limit?: string | number;
        /**
         * The metric aggregations to include in the realtime report.
         * @minItems 1
         */
        metricAggregations?: Array<"METRIC_AGGREGATION_UNSPECIFIED" | "TOTAL" | "MINIMUM" | "MAXIMUM" | "COUNT">;
        /**
         * The minute ranges to include in the realtime report.
         * @minItems 1
         */
        minuteRanges?: Array<Record<string, unknown>>;
        /** Whether to return the property quota with the response. */
        returnPropertyQuota?: boolean;
      };
      output: {
        /** A normalized Google Analytics report response. */
        report: {
          /** The dimension headers returned by the report. */
          dimensionHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The metric headers returned by the report. */
          metricHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The normalized report rows. */
          rows: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The total row count returned by Google Analytics. */
          rowCount: number | null;
          /** Normalized Google Analytics report metadata. */
          metadata: {
            /** The currency code used by the report. */
            currencyCode: string | null;
            /** The property timezone used by the report. */
            timeZone: string | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Google Analytics object. */
          propertyQuota: Record<string, unknown> | null;
          /** Total rows returned by Google Analytics. */
          totals: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Minimum rows returned by Google Analytics. */
          minimums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Maximum rows returned by Google Analytics. */
          maximums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Run a Google Analytics Data API report for selected dimensions, metrics, and date ranges. */
    "google_analytics.run_report": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The date ranges for the report.
         * @minItems 1
         */
        dateRanges: Array<{
          /**
           * The inclusive start date in YYYY-MM-DD format or a relative value such as 7daysAgo.
           * @minLength 1
           */
          startDate: string;
          /**
           * The inclusive end date in YYYY-MM-DD format or a relative value such as today.
           * @minLength 1
           */
          endDate: string;
          /**
           * The optional date range name used in response dimensions.
           * @minLength 1
           */
          name?: string;
        }>;
        /**
         * The dimensions to include in the report.
         * @minItems 1
         */
        dimensions?: Array<string | Record<string, unknown>>;
        /**
         * The metrics to include in the report.
         * @minItems 1
         */
        metrics: Array<string | Record<string, unknown>>;
        /** A Google Analytics Data API FilterExpression object. */
        dimensionFilter?: Record<string, unknown>;
        /** A Google Analytics Data API FilterExpression object. */
        metricFilter?: Record<string, unknown>;
        /**
         * The report ordering rules.
         * @minItems 1
         */
        orderBys?: Array<Record<string, unknown>>;
        /**
         * The ISO 4217 currency code for currency metrics.
         * @minLength 1
         */
        currencyCode?: string;
        /** The Google Analytics Data API cohort specification for cohort reports. */
        cohortSpec?: Record<string, unknown>;
        /** Whether rows with zero metric values should be returned. */
        keepEmptyRows?: boolean;
        /**
         * The metric aggregations to include in the report.
         * @minItems 1
         */
        metricAggregations?: Array<"METRIC_AGGREGATION_UNSPECIFIED" | "TOTAL" | "MINIMUM" | "MAXIMUM" | "COUNT">;
        /**
         * The comparisons to include in the report.
         * @minItems 1
         */
        comparisons?: Array<Record<string, unknown>>;
        /** A Google Analytics int64 request value. */
        limit?: string | number;
        /** A Google Analytics int64 request value. */
        offset?: string | number;
        /** Whether to return the property quota with the response. */
        returnPropertyQuota?: boolean;
      };
      output: {
        /** A normalized Google Analytics report response. */
        report: {
          /** The dimension headers returned by the report. */
          dimensionHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The metric headers returned by the report. */
          metricHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The normalized report rows. */
          rows: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The total row count returned by Google Analytics. */
          rowCount: number | null;
          /** Normalized Google Analytics report metadata. */
          metadata: {
            /** The currency code used by the report. */
            currencyCode: string | null;
            /** The property timezone used by the report. */
            timeZone: string | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Google Analytics object. */
          propertyQuota: Record<string, unknown> | null;
          /** Total rows returned by Google Analytics. */
          totals: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Minimum rows returned by Google Analytics. */
          minimums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Maximum rows returned by Google Analytics. */
          maximums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Run a Google Analytics technology report for device, browser, and operating system performance. */
    "google_analytics.run_technology_report": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The inclusive report start date in YYYY-MM-DD format.
         * @minLength 1
         */
        startDate: string;
        /**
         * The inclusive report end date in YYYY-MM-DD format.
         * @minLength 1
         */
        endDate: string;
        /** A Google Analytics int64 request value. */
        limit?: string | number;
        /** The business report field to sort by descending. */
        orderBy?: "deviceCategory" | "browser" | "operatingSystem" | "activeUsers" | "sessions" | "engagedSessions" | "engagementRate" | "eventCount" | "keyEvents";
        /** A Google Analytics Data API FilterExpression object. */
        dimensionFilter?: Record<string, unknown>;
        /** A Google Analytics Data API FilterExpression object. */
        metricFilter?: Record<string, unknown>;
        /** Whether rows with zero metric values should be returned. */
        keepEmptyRows?: boolean;
        /** Whether to return the property quota with the response. */
        returnPropertyQuota?: boolean;
      };
      output: {
        /** A normalized Google Analytics report response. */
        report: {
          /** The dimension headers returned by the report. */
          dimensionHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The metric headers returned by the report. */
          metricHeaders: Array<{
            /** The header name. */
            name: string | null;
            /** The metric type when present. */
            type: string | null;
          }>;
          /** The normalized report rows. */
          rows: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The total row count returned by Google Analytics. */
          rowCount: number | null;
          /** Normalized Google Analytics report metadata. */
          metadata: {
            /** The currency code used by the report. */
            currencyCode: string | null;
            /** The property timezone used by the report. */
            timeZone: string | null;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Google Analytics object. */
          propertyQuota: Record<string, unknown> | null;
          /** Total rows returned by Google Analytics. */
          totals: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Minimum rows returned by Google Analytics. */
          minimums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** Maximum rows returned by Google Analytics. */
          maximums: Array<{
            /** Dimension values keyed by dimension header name. */
            dimensions: Record<string, string>;
            /** Metric values keyed by metric header name. */
            metrics: Record<string, string>;
            /** Dimension values in response order. */
            dimensionValues: Array<string>;
            /** Metric values in response order. */
            metricValues: Array<string>;
            /** The raw Google Analytics object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update Google Analytics property data retention settings for event data and user activity reset behavior. */
    "google_analytics.update_data_retention_settings": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The event-level data retention duration enum value, such as FOURTEEN_MONTHS.
         * @minLength 1
         */
        eventDataRetention?: string;
        /**
         * The user-level data retention duration enum value, such as FOURTEEN_MONTHS.
         * @minLength 1
         */
        userDataRetention?: string;
        /** Whether user data retention resets on new activity. */
        resetUserDataOnNewActivity?: boolean;
      };
      output: {
        /** A normalized Google Analytics data retention settings resource. */
        dataRetentionSettings: {
          /** The data retention settings resource name, such as properties/123/dataRetentionSettings. */
          name: string | null;
          /** The event-level data retention duration enum value. */
          eventDataRetention: string | null;
          /** The user-level data retention duration enum value. */
          userDataRetention: string | null;
          /** Whether user data retention resets on new activity. */
          resetUserDataOnNewActivity: boolean | null;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update Google Analytics property settings such as display name, industry category, time zone, or currency. */
    "google_analytics.update_property": {
      input: {
        /**
         * The Google Analytics property ID, with or without the properties/ prefix.
         * @minLength 1
         */
        propertyId: string;
        /**
         * The property display name.
         * @minLength 1
         */
        displayName?: string;
        /**
         * The property industry category enum value.
         * @minLength 1
         */
        industryCategory?: string;
        /**
         * The property reporting time zone.
         * @minLength 1
         */
        timeZone?: string;
        /**
         * The property currency code.
         * @minLength 1
         */
        currencyCode?: string;
        /**
         * The Google Analytics property service level enum value.
         * @minLength 1
         */
        serviceLevel?: string;
      };
      output: {
        /** A normalized Google Analytics property. */
        property: {
          /** The property resource name, such as properties/1234. */
          name: string | null;
          /** The numeric property ID extracted from the property resource. */
          propertyId: string | null;
          /** The parent account or roll-up property resource name. */
          parent: string | null;
          /** The property display name. */
          displayName: string | null;
          /** The Google Analytics property type enum value. */
          propertyType: string | null;
          /** The property industry category enum value. */
          industryCategory: string | null;
          /** The property reporting time zone. */
          timeZone: string | null;
          /** The property currency code. */
          currencyCode: string | null;
          /** The raw Google Analytics object. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
