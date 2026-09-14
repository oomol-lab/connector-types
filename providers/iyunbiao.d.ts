import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create or update multiple Yunbiao forms. Inspect errorFormList for individual failures even when the request succeeds. */
    "iyunbiao.batch_save_forms": {
      input: {
        /**
         * The template name returned by list_templates.
         * @minLength 1
         */
        templateName: string;
        /**
         * Complete forms to create or update.
         * @minItems 1
         */
        forms: Array<{
          /** The existing form ID; omit or use zero to create. */
          objectId?: number;
          /** The current version returned by get_form; preserve it when updating. */
          objectVersion?: number;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** Successfully saved forms with updated versions. */
        formJsonList: Array<{
          /** The existing form ID; omit or use zero to create. */
          objectId?: number;
          /** The current version returned by get_form; preserve it when updating. */
          objectVersion?: number;
          [key: string]: unknown;
        }>;
        /** Per-form failures returned by Yunbiao. */
        errorFormList: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Download a Yunbiao attachment to a usable file transit URL. Use the attachment file ID from get_form. */
    "iyunbiao.download_attachment": {
      input: {
        /**
         * The template name returned by list_templates.
         * @minLength 1
         */
        templateName: string;
        /**
         * The attachment file ID, not the form or detail row ID.
         * @minimum 1
         */
        fileId: number;
        /**
         * The attachment file name including its extension.
         * @minLength 1
         */
        fileName: string;
      };
      output: {
        /**
         * The file transit URL.
         * @format uri
         */
        transitUrl: string;
        /** The file name. */
        fileName: string;
        /** The file media type. */
        mimeType: string;
      };
    };
    /** Download a Yunbiao enterprise cloud drive file to a usable file transit URL. */
    "iyunbiao.download_cloud_file": {
      input: {
        /**
         * The template name returned by list_templates.
         * @minLength 1
         */
        templateName: string;
        /** The cloud drive file ID, not a form or detail row ID. */
        fileId: string | number;
        /**
         * The file name including its extension.
         * @minLength 1
         */
        fileName: string;
      };
      output: {
        /**
         * The file transit URL.
         * @format uri
         */
        transitUrl: string;
        /** The file name. */
        fileName: string;
        /** The file media type. */
        mimeType: string;
      };
    };
    /** Read a Yunbiao form with its current version, detail rows and attachment references. */
    "iyunbiao.get_form": {
      input: {
        /**
         * The template name returned by list_templates.
         * @minLength 1
         */
        templateName: string;
        /**
         * The existing form ID returned by query_forms.
         * @minimum 1
         */
        objectId: number;
      };
      output: {
        /** The complete form with business fields and detail rows. Omit objectId to create; to update, first get_form and preserve objectId and objectVersion. */
        form: {
          /** The existing form ID; omit or use zero to create. */
          objectId?: number;
          /** The current version returned by get_form; preserve it when updating. */
          objectVersion?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Read a complete Yunbiao role record. */
    "iyunbiao.get_role": {
      input: {
        /**
         * The role object ID returned by list_roles.
         * @minimum 1
         */
        objectId: number;
      };
      output: {
        /** The complete Yunbiao role record. Preserve fields returned by get_role when updating. */
        role: {
          /**
           * The role object ID. Omit or use zero to create a role.
           * @minimum 0
           */
          objectId?: number;
          /** The role name. */
          name?: string;
          /** The role description. */
          m_description?: string;
          /** Whether this is a system role. */
          isSys?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Get Yunbiao template fields and detail table definitions. Requires server 3.3.45.43 or later. */
    "iyunbiao.get_template_structure": {
      input: {
        /**
         * The template name returned by list_templates.
         * @minLength 1
         */
        templateName: string;
      };
      output: {
        /** The template name. */
        templateName?: string;
        /** Main-table field definitions. */
        fieldMapList?: Array<Record<string, unknown>>;
        /** Detail table definitions and their fields. */
        childTableList?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Read a complete Yunbiao user record, including roles and posts. */
    "iyunbiao.get_user": {
      input: {
        /**
         * The user object ID returned by list_users.
         * @minimum 1
         */
        objectId: number;
      };
      output: {
        /** The complete Yunbiao user record, including roles, posts and account settings. */
        user: {
          /**
           * The user object ID. To create, omit both objectId and formId or set both to zero.
           * @minimum 0
           */
          objectId?: number;
          /**
           * The user ID returned by get_user or save_user; preserved when updating.
           * @minimum 0
           */
          formId?: number;
          /** The user account name. */
          account?: string;
          /** The user display name. */
          name?: string;
          /**
           * The MD5-encoded password required by Yunbiao, not plaintext. Omit when keeping the existing password.
           * @minLength 32
           * @maxLength 32
           */
          password?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Yunbiao roles, optionally with filtering, sorting and pagination. */
    "iyunbiao.list_roles": {
      input: {
        /** Optional pagination, parameters, filters and sorting for the query. */
        query?: {
          /** Pagination by page index or row offset. */
          pageInfo?: {
            /** Whether to paginate by rowIndex instead of pageIndex. */
            isUseRowIndex?: boolean;
            /**
             * Zero-based page index.
             * @minimum 0
             */
            pageIndex?: number;
            /**
             * Number of records to return per page.
             * @minimum 1
             */
            pageSize?: number;
            /**
             * Zero-based row offset when isUseRowIndex is true.
             * @minimum 0
             */
            rowIndex?: number;
          };
          /** Parameters defined by the data interface. */
          paramList?: Array<{
            /**
             * The parameter name.
             * @minLength 1
             */
            param: string;
            /** The parameter value accepted by the interface. */
            value: unknown;
          }>;
          /** Field filters; expressions within a field support AND or OR. */
          filter?: Array<{
            /**
             * The field name accepted by this template or interface.
             * @minLength 1
             */
            filterField: string;
            /**
             * Comparisons for this field.
             * @minItems 1
             */
            expressionList: Array<{
              /** Comparison: $e, $ne, $gt, $gte, $lt, $lte, or numeric operators 10 (like), 11 (not like), 12 (in), 13 (null), 14 (not null), 15 (not in). */
              operator: "$e" | "$ne" | "$gt" | "$gte" | "$lt" | "$lte" | 10 | 11 | 12 | 13 | 14 | 15;
              /** Whether to combine with AND rather than OR. */
              isAnd?: boolean;
              /** The comparison value; may be omitted for null checks. */
              value?: unknown;
            }>;
          }>;
          /** Sort order using internal field names from get_template_structure. */
          sortList?: Array<{
            /**
             * The internal field name, for example f1.
             * @minLength 1
             */
            field: string;
            /** Whether to sort in descending order. */
            isDesc: boolean;
          }>;
        };
      };
      output: {
        /** Matching records with template-defined fields. */
        results: Array<Record<string, unknown>>;
        /** Pagination information returned by Yunbiao. */
        pageInfo?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List available Yunbiao templates. Requires Yunbiao server 3.3.45.43 or later. */
    "iyunbiao.list_templates": {
      input: Record<string, never>;
      output: {
        /** Templates available in this application space. */
        templates: Array<{
          /** The template name used in other actions. */
          name: string;
          /** The display caption. */
          caption?: string;
          [key: string]: unknown;
        }>;
        /** The total number of templates. */
        totalCount?: number;
        [key: string]: unknown;
      };
    };
    /** List Yunbiao users, optionally with filtering, sorting and pagination. */
    "iyunbiao.list_users": {
      input: {
        /** Optional pagination, parameters, filters and sorting for the query. */
        query?: {
          /** Pagination by page index or row offset. */
          pageInfo?: {
            /** Whether to paginate by rowIndex instead of pageIndex. */
            isUseRowIndex?: boolean;
            /**
             * Zero-based page index.
             * @minimum 0
             */
            pageIndex?: number;
            /**
             * Number of records to return per page.
             * @minimum 1
             */
            pageSize?: number;
            /**
             * Zero-based row offset when isUseRowIndex is true.
             * @minimum 0
             */
            rowIndex?: number;
          };
          /** Parameters defined by the data interface. */
          paramList?: Array<{
            /**
             * The parameter name.
             * @minLength 1
             */
            param: string;
            /** The parameter value accepted by the interface. */
            value: unknown;
          }>;
          /** Field filters; expressions within a field support AND or OR. */
          filter?: Array<{
            /**
             * The field name accepted by this template or interface.
             * @minLength 1
             */
            filterField: string;
            /**
             * Comparisons for this field.
             * @minItems 1
             */
            expressionList: Array<{
              /** Comparison: $e, $ne, $gt, $gte, $lt, $lte, or numeric operators 10 (like), 11 (not like), 12 (in), 13 (null), 14 (not null), 15 (not in). */
              operator: "$e" | "$ne" | "$gt" | "$gte" | "$lt" | "$lte" | 10 | 11 | 12 | 13 | 14 | 15;
              /** Whether to combine with AND rather than OR. */
              isAnd?: boolean;
              /** The comparison value; may be omitted for null checks. */
              value?: unknown;
            }>;
          }>;
          /** Sort order using internal field names from get_template_structure. */
          sortList?: Array<{
            /**
             * The internal field name, for example f1.
             * @minLength 1
             */
            field: string;
            /** Whether to sort in descending order. */
            isDesc: boolean;
          }>;
        };
      };
      output: {
        /** Matching records with template-defined fields. */
        results: Array<Record<string, unknown>>;
        /** Pagination information returned by Yunbiao. */
        pageInfo?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Query rows in a Yunbiao detail table across forms. Requires server 3.3.45.43 or later. */
    "iyunbiao.query_detail_rows": {
      input: {
        /**
         * The template name returned by list_templates.
         * @minLength 1
         */
        templateName: string;
        /**
         * The detail table name.
         * @minLength 1
         */
        detailTableName: string;
        /** Optional pagination, parameters, filters and sorting for the query. */
        query?: {
          /** Pagination by page index or row offset. */
          pageInfo?: {
            /** Whether to paginate by rowIndex instead of pageIndex. */
            isUseRowIndex?: boolean;
            /**
             * Zero-based page index.
             * @minimum 0
             */
            pageIndex?: number;
            /**
             * Number of records to return per page.
             * @minimum 1
             */
            pageSize?: number;
            /**
             * Zero-based row offset when isUseRowIndex is true.
             * @minimum 0
             */
            rowIndex?: number;
          };
          /** Parameters defined by the data interface. */
          paramList?: Array<{
            /**
             * The parameter name.
             * @minLength 1
             */
            param: string;
            /** The parameter value accepted by the interface. */
            value: unknown;
          }>;
          /** Field filters; expressions within a field support AND or OR. */
          filter?: Array<{
            /**
             * The field name accepted by this template or interface.
             * @minLength 1
             */
            filterField: string;
            /**
             * Comparisons for this field.
             * @minItems 1
             */
            expressionList: Array<{
              /** Comparison: $e, $ne, $gt, $gte, $lt, $lte, or numeric operators 10 (like), 11 (not like), 12 (in), 13 (null), 14 (not null), 15 (not in). */
              operator: "$e" | "$ne" | "$gt" | "$gte" | "$lt" | "$lte" | 10 | 11 | 12 | 13 | 14 | 15;
              /** Whether to combine with AND rather than OR. */
              isAnd?: boolean;
              /** The comparison value; may be omitted for null checks. */
              value?: unknown;
            }>;
          }>;
          /** Sort order using internal field names from get_template_structure. */
          sortList?: Array<{
            /**
             * The internal field name, for example f1.
             * @minLength 1
             */
            field: string;
            /** Whether to sort in descending order. */
            isDesc: boolean;
          }>;
        };
      };
      output: {
        /** Matching records with template-defined fields. */
        results: Array<Record<string, unknown>>;
        /** Pagination information returned by Yunbiao. */
        pageInfo?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Find Yunbiao forms with filters, sorting and pagination. Use get_form to retrieve full detail rows before editing. */
    "iyunbiao.query_forms": {
      input: {
        /**
         * The template name returned by list_templates.
         * @minLength 1
         */
        templateName: string;
        /** Optional pagination, parameters, filters and sorting for the query. */
        query?: {
          /** Pagination by page index or row offset. */
          pageInfo?: {
            /** Whether to paginate by rowIndex instead of pageIndex. */
            isUseRowIndex?: boolean;
            /**
             * Zero-based page index.
             * @minimum 0
             */
            pageIndex?: number;
            /**
             * Number of records to return per page.
             * @minimum 1
             */
            pageSize?: number;
            /**
             * Zero-based row offset when isUseRowIndex is true.
             * @minimum 0
             */
            rowIndex?: number;
          };
          /** Parameters defined by the data interface. */
          paramList?: Array<{
            /**
             * The parameter name.
             * @minLength 1
             */
            param: string;
            /** The parameter value accepted by the interface. */
            value: unknown;
          }>;
          /** Field filters; expressions within a field support AND or OR. */
          filter?: Array<{
            /**
             * The field name accepted by this template or interface.
             * @minLength 1
             */
            filterField: string;
            /**
             * Comparisons for this field.
             * @minItems 1
             */
            expressionList: Array<{
              /** Comparison: $e, $ne, $gt, $gte, $lt, $lte, or numeric operators 10 (like), 11 (not like), 12 (in), 13 (null), 14 (not null), 15 (not in). */
              operator: "$e" | "$ne" | "$gt" | "$gte" | "$lt" | "$lte" | 10 | 11 | 12 | 13 | 14 | 15;
              /** Whether to combine with AND rather than OR. */
              isAnd?: boolean;
              /** The comparison value; may be omitted for null checks. */
              value?: unknown;
            }>;
          }>;
          /** Sort order using internal field names from get_template_structure. */
          sortList?: Array<{
            /**
             * The internal field name, for example f1.
             * @minLength 1
             */
            field: string;
            /** Whether to sort in descending order. */
            isDesc: boolean;
          }>;
        };
      };
      output: {
        /** Matching records with template-defined fields. */
        results: Array<Record<string, unknown>>;
        /** Pagination information returned by Yunbiao. */
        pageInfo?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Call a global Yunbiao data interface. Its configured business logic may modify data. */
    "iyunbiao.query_global_interface": {
      input: {
        /**
         * The configured global data interface name.
         * @minLength 1
         */
        interfaceName: string;
        /** Optional pagination, parameters, filters and sorting for the query. */
        query?: {
          /** Pagination by page index or row offset. */
          pageInfo?: {
            /** Whether to paginate by rowIndex instead of pageIndex. */
            isUseRowIndex?: boolean;
            /**
             * Zero-based page index.
             * @minimum 0
             */
            pageIndex?: number;
            /**
             * Number of records to return per page.
             * @minimum 1
             */
            pageSize?: number;
            /**
             * Zero-based row offset when isUseRowIndex is true.
             * @minimum 0
             */
            rowIndex?: number;
          };
          /** Parameters defined by the data interface. */
          paramList?: Array<{
            /**
             * The parameter name.
             * @minLength 1
             */
            param: string;
            /** The parameter value accepted by the interface. */
            value: unknown;
          }>;
          /** Field filters; expressions within a field support AND or OR. */
          filter?: Array<{
            /**
             * The field name accepted by this template or interface.
             * @minLength 1
             */
            filterField: string;
            /**
             * Comparisons for this field.
             * @minItems 1
             */
            expressionList: Array<{
              /** Comparison: $e, $ne, $gt, $gte, $lt, $lte, or numeric operators 10 (like), 11 (not like), 12 (in), 13 (null), 14 (not null), 15 (not in). */
              operator: "$e" | "$ne" | "$gt" | "$gte" | "$lt" | "$lte" | 10 | 11 | 12 | 13 | 14 | 15;
              /** Whether to combine with AND rather than OR. */
              isAnd?: boolean;
              /** The comparison value; may be omitted for null checks. */
              value?: unknown;
            }>;
          }>;
          /** Sort order using internal field names from get_template_structure. */
          sortList?: Array<{
            /**
             * The internal field name, for example f1.
             * @minLength 1
             */
            field: string;
            /** Whether to sort in descending order. */
            isDesc: boolean;
          }>;
        };
      };
      output: {
        /** The complete result defined by the configured interface. */
        result: unknown;
      };
    };
    /** Call a data interface configured on a Yunbiao template. Its configured business logic may modify data. */
    "iyunbiao.query_template_interface": {
      input: {
        /**
         * The template name returned by list_templates.
         * @minLength 1
         */
        templateName: string;
        /**
         * The configured data interface name.
         * @minLength 1
         */
        interfaceName: string;
        /** Optional pagination, parameters, filters and sorting for the query. */
        query?: {
          /** Pagination by page index or row offset. */
          pageInfo?: {
            /** Whether to paginate by rowIndex instead of pageIndex. */
            isUseRowIndex?: boolean;
            /**
             * Zero-based page index.
             * @minimum 0
             */
            pageIndex?: number;
            /**
             * Number of records to return per page.
             * @minimum 1
             */
            pageSize?: number;
            /**
             * Zero-based row offset when isUseRowIndex is true.
             * @minimum 0
             */
            rowIndex?: number;
          };
          /** Parameters defined by the data interface. */
          paramList?: Array<{
            /**
             * The parameter name.
             * @minLength 1
             */
            param: string;
            /** The parameter value accepted by the interface. */
            value: unknown;
          }>;
          /** Field filters; expressions within a field support AND or OR. */
          filter?: Array<{
            /**
             * The field name accepted by this template or interface.
             * @minLength 1
             */
            filterField: string;
            /**
             * Comparisons for this field.
             * @minItems 1
             */
            expressionList: Array<{
              /** Comparison: $e, $ne, $gt, $gte, $lt, $lte, or numeric operators 10 (like), 11 (not like), 12 (in), 13 (null), 14 (not null), 15 (not in). */
              operator: "$e" | "$ne" | "$gt" | "$gte" | "$lt" | "$lte" | 10 | 11 | 12 | 13 | 14 | 15;
              /** Whether to combine with AND rather than OR. */
              isAnd?: boolean;
              /** The comparison value; may be omitted for null checks. */
              value?: unknown;
            }>;
          }>;
          /** Sort order using internal field names from get_template_structure. */
          sortList?: Array<{
            /**
             * The internal field name, for example f1.
             * @minLength 1
             */
            field: string;
            /** Whether to sort in descending order. */
            isDesc: boolean;
          }>;
        };
      };
      output: {
        /** The complete result defined by the configured interface. */
        result: unknown;
      };
    };
    /** Create or update a Yunbiao form. Before updating, read the complete form and preserve its objectId and current objectVersion. */
    "iyunbiao.save_form": {
      input: {
        /**
         * The template name returned by list_templates.
         * @minLength 1
         */
        templateName: string;
        /** The complete form with business fields and detail rows. Omit objectId to create; to update, first get_form and preserve objectId and objectVersion. */
        form: {
          /** The existing form ID; omit or use zero to create. */
          objectId?: number;
          /** The current version returned by get_form; preserve it when updating. */
          objectVersion?: number;
          [key: string]: unknown;
        };
      };
      output: {
        /** The complete form with business fields and detail rows. Omit objectId to create; to update, first get_form and preserve objectId and objectVersion. */
        form: {
          /** The existing form ID; omit or use zero to create. */
          objectId?: number;
          /** The current version returned by get_form; preserve it when updating. */
          objectVersion?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Create or update a Yunbiao role. Read get_role before updating and preserve its fields. */
    "iyunbiao.save_role": {
      input: {
        /** The complete Yunbiao role record. Preserve fields returned by get_role when updating. */
        role: {
          /**
           * The role object ID. Omit or use zero to create a role.
           * @minimum 0
           */
          objectId?: number;
          /** The role name. */
          name?: string;
          /** The role description. */
          m_description?: string;
          /** Whether this is a system role. */
          isSys?: boolean;
          [key: string]: unknown;
        };
      };
      output: {
        /** The complete Yunbiao role record. Preserve fields returned by get_role when updating. */
        role: {
          /**
           * The role object ID. Omit or use zero to create a role.
           * @minimum 0
           */
          objectId?: number;
          /** The role name. */
          name?: string;
          /** The role description. */
          m_description?: string;
          /** Whether this is a system role. */
          isSys?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Create or update a Yunbiao user. Read get_user before updating and preserve its fields. Passwords in the user record must already be MD5-encoded. */
    "iyunbiao.save_user": {
      input: {
        /** The complete Yunbiao user record, including roles, posts and account settings. */
        user: {
          /**
           * The user object ID. To create, omit both objectId and formId or set both to zero.
           * @minimum 0
           */
          objectId?: number;
          /**
           * The user ID returned by get_user or save_user; preserved when updating.
           * @minimum 0
           */
          formId?: number;
          /** The user account name. */
          account?: string;
          /** The user display name. */
          name?: string;
          /**
           * The MD5-encoded password required by Yunbiao, not plaintext. Omit when keeping the existing password.
           * @minLength 32
           * @maxLength 32
           */
          password?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** The complete Yunbiao user record, including roles, posts and account settings. */
        user: {
          /**
           * The user object ID. To create, omit both objectId and formId or set both to zero.
           * @minimum 0
           */
          objectId?: number;
          /**
           * The user ID returned by get_user or save_user; preserved when updating.
           * @minimum 0
           */
          formId?: number;
          /** The user account name. */
          account?: string;
          /** The user display name. */
          name?: string;
          /**
           * The MD5-encoded password required by Yunbiao, not plaintext. Omit when keeping the existing password.
           * @minLength 32
           * @maxLength 32
           */
          password?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Upload a file from a URL to Yunbiao, returning an attachment entry to include in save_form. Upload alone does not attach it to a form. Connector upload limit: 64 MiB. */
    "iyunbiao.upload_attachment": {
      input: {
        /**
         * The template name returned by list_templates.
         * @minLength 1
         */
        templateName: string;
        /**
         * A publicly accessible HTTP or HTTPS URL for the source file.
         * @format uri
         */
        fileUrl: string;
        /**
         * The file name including its extension.
         * @minLength 1
         */
        fileName: string;
        /**
         * The attachment type, for example pdf or txt.
         * @minLength 1
         */
        fileType: string;
      };
      output: {
        /** The uploaded attachment ID, not a form record ID. */
        fileId: number;
        /** Insert this entry into the form attachment table, usually named 附件, then call save_form. */
        attachment: Record<string, unknown>;
      };
    };
    /** Upload a file from a URL to the Yunbiao enterprise cloud drive. Upload alone does not associate it with a form. Connector upload limit: 64 MiB. */
    "iyunbiao.upload_cloud_file": {
      input: {
        /**
         * The template name returned by list_templates.
         * @minLength 1
         */
        templateName: string;
        /**
         * A publicly accessible HTTP or HTTPS URL for the source file.
         * @format uri
         */
        fileUrl: string;
        /**
         * The file name including its extension.
         * @minLength 1
         */
        fileName: string;
        /**
         * The attachment type, for example pdf or txt.
         * @minLength 1
         */
        fileType: string;
        /** The enterprise cloud drive folder path. Omit to use the server default. */
        fileFolderPath?: string;
      };
      output: {
        /** The uploaded cloud drive file ID. */
        fileId: string;
        /** The complete cloud drive file metadata, including owner, fileId and any fields returned by Yunbiao. */
        file: Record<string, unknown>;
      };
    };
  }
}
