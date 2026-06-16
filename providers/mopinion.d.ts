import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the current Mopinion account profile and available account limits. */
    "mopinion.get_account": {
      input: Record<string, never>;
      output: {
        /** The current Mopinion account. */
        account: {
          /** The Mopinion account name. */
          name?: string;
          /** The Mopinion account package. */
          package?: string;
          /** The current Mopinion package end date. */
          enddate?: string;
          /** The number of users allowed. */
          number_users?: number;
          /** The number of charts allowed. */
          number_charts?: number;
          /** The number of forms allowed. */
          number_forms?: number;
          /** The number of reports allowed. */
          number_reports?: number;
          /** The reports included in the account. */
          reports?: Array<{
            /** The Mopinion report identifier. */
            id?: number;
            /** The Mopinion report name. */
            name?: string;
            /** The Mopinion report description. */
            description?: string;
            /** The Mopinion report language. */
            language?: string;
            /** The Mopinion report creation date. */
            created?: string;
            [key: string]: unknown;
          }>;
          /** The Mopinion response metadata. */
          _meta?: {
            /** The upstream HTTP status code. */
            code?: number;
            /** The upstream status message. */
            message?: string;
            /** Whether more results are available. */
            has_more?: boolean;
            /** The previous page URI or false when there is no previous page. */
            previous?: string | boolean;
            /** The next page URI or false when there is no next page. */
            next?: string | boolean;
            /** The number of items in the response. */
            count?: number;
            /** The total number of available items. */
            total?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Fetch basic metadata for one Mopinion dataset or feedback form. */
    "mopinion.get_dataset": {
      input: {
        /**
         * The Mopinion dataset identifier.
         * @minLength 1
         */
        datasetId: string;
      };
      output: {
        /** The requested Mopinion dataset. */
        dataset: {
          /** The Mopinion dataset identifier. */
          id?: number;
          /** The Mopinion dataset name. */
          name?: string | null;
          /** The parent Mopinion report identifier. */
          report_id?: number;
          /** The Mopinion dataset description. */
          description?: string;
          /** The Mopinion dataset source type. */
          data_source?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch one feedback item from a Mopinion dataset or feedback form. */
    "mopinion.get_dataset_feedback": {
      input: {
        /**
         * The Mopinion dataset identifier.
         * @minLength 1
         */
        datasetId: string;
        /**
         * The Mopinion feedback identifier.
         * @minLength 1
         */
        feedbackId: string;
      };
      output: {
        /** The requested Mopinion feedback item. */
        feedback: {
          /** The Mopinion feedback identifier. */
          id?: number;
          /** The feedback creation timestamp. */
          created?: string;
          /** The parent Mopinion report identifier. */
          report_id?: number;
          /** The parent Mopinion dataset identifier. */
          dataset_id?: number;
          /** The tags assigned to the feedback item. */
          tags?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch one Mopinion deployment by deployment identifier. */
    "mopinion.get_deployment": {
      input: {
        /**
         * The Mopinion deployment identifier.
         * @minLength 1
         */
        deploymentId: string;
      };
      output: {
        /** The requested Mopinion deployment. */
        deployment: {
          /** The Mopinion deployment key. */
          key?: string;
          /** The Mopinion deployment identifier. */
          id?: string;
          /** The Mopinion deployment name. */
          name?: string;
          /** The domain configured for the deployment. */
          domain?: string;
          /** The Mopinion organization identifier. */
          org_id?: number;
          /** The deployment rules returned by Mopinion. */
          rules?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch basic metadata for one Mopinion report. */
    "mopinion.get_report": {
      input: {
        /**
         * The Mopinion report identifier.
         * @minLength 1
         */
        reportId: string;
      };
      output: {
        /** The requested Mopinion report. */
        report: {
          /** The Mopinion report identifier. */
          id?: number;
          /** The Mopinion report name. */
          name?: string;
          /** The Mopinion report description. */
          description?: string;
          /** The Mopinion report language. */
          language?: string;
          /** The Mopinion report creation date. */
          created?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch one feedback item from a Mopinion report. */
    "mopinion.get_report_feedback": {
      input: {
        /**
         * The Mopinion report identifier.
         * @minLength 1
         */
        reportId: string;
        /**
         * The Mopinion feedback identifier.
         * @minLength 1
         */
        feedbackId: string;
      };
      output: {
        /** The requested Mopinion feedback item. */
        feedback: {
          /** The Mopinion feedback identifier. */
          id?: number;
          /** The feedback creation timestamp. */
          created?: string;
          /** The parent Mopinion report identifier. */
          report_id?: number;
          /** The parent Mopinion dataset identifier. */
          dataset_id?: number;
          /** The tags assigned to the feedback item. */
          tags?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** List feedback items collected by one Mopinion dataset or feedback form. */
    "mopinion.list_dataset_feedback": {
      input: {
        /**
         * The collection page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of items to return in one page.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** The Mopinion feedback sort field. */
        sort?: "created" | "datetime";
        /** The Mopinion feedback sort order. */
        order?: "asc" | "desc";
        /** Mopinion feedback filters serialized as filter[key]=value query parameters. */
        filters?: Record<string, string | number | boolean>;
        /**
         * The Mopinion dataset identifier.
         * @minLength 1
         */
        datasetId: string;
      };
      output: {
        /** The Mopinion feedback items. */
        feedback: Array<{
          /** The Mopinion feedback identifier. */
          id?: number;
          /** The feedback creation timestamp. */
          created?: string;
          /** The parent Mopinion report identifier. */
          report_id?: number;
          /** The parent Mopinion dataset identifier. */
          dataset_id?: number;
          /** The tags assigned to the feedback item. */
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
        /** The Mopinion pagination metadata, if present. */
        meta: {
          /** The upstream HTTP status code. */
          code?: number;
          /** The upstream status message. */
          message?: string;
          /** Whether more results are available. */
          has_more?: boolean;
          /** The previous page URI or false when there is no previous page. */
          previous?: string | boolean;
          /** The next page URI or false when there is no next page. */
          next?: string | boolean;
          /** The number of items in the response. */
          count?: number;
          /** The total number of available items. */
          total?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List the field definitions configured for one Mopinion dataset. */
    "mopinion.list_dataset_fields": {
      input: {
        /**
         * The Mopinion dataset identifier.
         * @minLength 1
         */
        datasetId: string;
      };
      output: {
        /** The Mopinion dataset fields. */
        fields: Array<{
          /** The parent Mopinion report identifier. */
          report_id?: number;
          /** The parent Mopinion dataset identifier. */
          dataset_id?: number;
          /** The Mopinion field label. */
          label?: string;
          /** The Mopinion field short label. */
          short_label?: string;
          /** The Mopinion field key. */
          key?: string;
          /** The Mopinion field type. */
          type?: string;
          /** The answer values defined for this field. */
          answer_values?: unknown | null;
          /** The answer options defined for this field. */
          answer_options?: unknown | null;
          /** The Mopinion field group key. */
          group_key?: string | null;
          [key: string]: unknown;
        }>;
        /** The Mopinion pagination metadata, if present. */
        meta: {
          /** The upstream HTTP status code. */
          code?: number;
          /** The upstream status message. */
          message?: string;
          /** Whether more results are available. */
          has_more?: boolean;
          /** The previous page URI or false when there is no previous page. */
          previous?: string | boolean;
          /** The next page URI or false when there is no next page. */
          next?: string | boolean;
          /** The number of items in the response. */
          count?: number;
          /** The total number of available items. */
          total?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List Mopinion deployments for the connected account. */
    "mopinion.list_deployments": {
      input: {
        /**
         * The collection page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of items to return in one page.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The Mopinion deployments. */
        deployments: Array<{
          /** The Mopinion deployment key. */
          key?: string;
          /** The Mopinion deployment identifier. */
          id?: string;
          /** The Mopinion deployment name. */
          name?: string;
          /** The domain configured for the deployment. */
          domain?: string;
          /** The Mopinion organization identifier. */
          org_id?: number;
          /** The deployment rules returned by Mopinion. */
          rules?: Array<string>;
          [key: string]: unknown;
        }>;
        /** The Mopinion pagination metadata, if present. */
        meta: {
          /** The upstream HTTP status code. */
          code?: number;
          /** The upstream status message. */
          message?: string;
          /** Whether more results are available. */
          has_more?: boolean;
          /** The previous page URI or false when there is no previous page. */
          previous?: string | boolean;
          /** The next page URI or false when there is no next page. */
          next?: string | boolean;
          /** The number of items in the response. */
          count?: number;
          /** The total number of available items. */
          total?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List feedback items available through one Mopinion report. */
    "mopinion.list_report_feedback": {
      input: {
        /**
         * The collection page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of items to return in one page.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** The Mopinion feedback sort field. */
        sort?: "created" | "datetime";
        /** The Mopinion feedback sort order. */
        order?: "asc" | "desc";
        /** Mopinion feedback filters serialized as filter[key]=value query parameters. */
        filters?: Record<string, string | number | boolean>;
        /**
         * The Mopinion report identifier.
         * @minLength 1
         */
        reportId: string;
      };
      output: {
        /** The Mopinion feedback items. */
        feedback: Array<{
          /** The Mopinion feedback identifier. */
          id?: number;
          /** The feedback creation timestamp. */
          created?: string;
          /** The parent Mopinion report identifier. */
          report_id?: number;
          /** The parent Mopinion dataset identifier. */
          dataset_id?: number;
          /** The tags assigned to the feedback item. */
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
        /** The Mopinion pagination metadata, if present. */
        meta: {
          /** The upstream HTTP status code. */
          code?: number;
          /** The upstream status message. */
          message?: string;
          /** Whether more results are available. */
          has_more?: boolean;
          /** The previous page URI or false when there is no previous page. */
          previous?: string | boolean;
          /** The next page URI or false when there is no next page. */
          next?: string | boolean;
          /** The number of items in the response. */
          count?: number;
          /** The total number of available items. */
          total?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List the field definitions configured for one Mopinion report. */
    "mopinion.list_report_fields": {
      input: {
        /**
         * The Mopinion report identifier.
         * @minLength 1
         */
        reportId: string;
      };
      output: {
        /** The Mopinion report fields. */
        fields: Array<{
          /** The parent Mopinion report identifier. */
          report_id?: number;
          /** The parent Mopinion dataset identifier. */
          dataset_id?: number;
          /** The Mopinion field label. */
          label?: string;
          /** The Mopinion field short label. */
          short_label?: string;
          /** The Mopinion field key. */
          key?: string;
          /** The Mopinion field type. */
          type?: string;
          /** The answer values defined for this field. */
          answer_values?: unknown | null;
          /** The answer options defined for this field. */
          answer_options?: unknown | null;
          /** The Mopinion field group key. */
          group_key?: string | null;
          [key: string]: unknown;
        }>;
        /** The Mopinion pagination metadata, if present. */
        meta: {
          /** The upstream HTTP status code. */
          code?: number;
          /** The upstream status message. */
          message?: string;
          /** Whether more results are available. */
          has_more?: boolean;
          /** The previous page URI or false when there is no previous page. */
          previous?: string | boolean;
          /** The next page URI or false when there is no next page. */
          next?: string | boolean;
          /** The number of items in the response. */
          count?: number;
          /** The total number of available items. */
          total?: number;
          [key: string]: unknown;
        } | null;
      };
    };
  }
}
