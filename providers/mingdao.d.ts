import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add users, departments, department trees, jobs or organization roles to an application role. */
    "mingdao.add_role_members": {
      input: {
        /**
         * The application role ID.
         * @minLength 1
         */
        roleId: string;
        /** The user IDs. */
        userIds?: Array<string>;
        /** The department IDs. */
        departmentIds?: Array<string>;
        /** The department tree IDs, including their child departments. */
        departmentTreeIds?: Array<string>;
        /** The job IDs. */
        jobIds?: Array<string>;
        /** The organization role IDs to add. */
        projectOrganizeIds?: Array<string>;
      };
      output: {
        /** The upstream operation result, including any partial-success details. */
        data: Record<string, unknown>;
      };
    };
    /** Create workflow, record-update or related-record custom action buttons. */
    "mingdao.batch_create_custom_actions": {
      input: {
        /** The worksheet ID or alias. */
        worksheetId: string;
        /** Custom action configuration. */
        actions: Array<{
          /** The display name. */
          name: string;
          /** The description displayed to users. */
          remark?: string;
          /** The custom action type: triggerWorkflow, updateCurrentRecord or createRelatedRecord. */
          type: string;
          /** The field IDs or aliases to fill for updateCurrentRecord. */
          updateFields?: Array<string>;
          /** The relation field ID or alias; required for createRelatedRecord custom actions or hierarchy views. */
          relationField?: string;
          /** Whether to run the workflow after submission; required for updateCurrentRecord and createRelatedRecord. */
          runWorkflowAfterSubmit?: boolean;
          /** The recursive condition/group filter controlling whether the custom action is enabled. */
          enableWhen?: {
            /** The filter node kind. */
            type: "group" | "condition";
            /** The group logic AND or OR. */
            logic?: "AND" | "OR";
            /** The field ID or alias; filters require a real field ID without an isTitle annotation. */
            field?: string;
            /** The field-type-specific filter operator. */
            operator?: string;
            /** The configured value. */
            value?: unknown;
            /** The nested filter nodes; preserve the recursive condition/group format. */
            children?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The operation result. */
        data: {
          /** The created custom action buttons. */
          actions?: Array<{
            /** The upstream item ID or field alias. */
            id?: string;
            /** The display name. */
            name?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Create multiple Mingdao worksheet records with the batch API's string-encoded field values and URL-based attachments. */
    "mingdao.batch_create_records": {
      input: {
        /**
         * The Mingdao worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /** Whether this record mutation triggers configured workflows. */
        triggerWorkflow?: boolean;
        /** The records to create. */
        rows: Array<{
          /** The record field values. */
          fields: Array<{
            /**
             * The field ID or alias.
             * @minLength 1
             */
            id: string;
            /** The batch API field value as a string; serialize structured field values as JSON text. Attachments must reference accessible URLs, never local files or inline base64. */
            value: string;
            /** The batch field option: for single/multiple selections, 1 disallows new options and 2 allows them (default 1); for attachments, 0 replaces and 1 appends (default 0). */
            type?: number;
          }>;
        }>;
      };
      output: {
        /** The batch creation result. */
        data: {
          /** The successfully created record IDs. */
          rowIds?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Create table, kanban, gallery, calendar, hierarchy, gantt, resource, detail or map views with their configuration. */
    "mingdao.batch_create_views": {
      input: {
        /** The worksheet ID or alias. */
        worksheetId: string;
        /** The views to create. */
        views: Array<{
          /** The display name. */
          name: string;
          /** The type in the documented Mingdao format. */
          type: "table" | "kanban" | "gallery" | "calendar" | "hierarchy" | "gantt" | "resource" | "detail" | "map";
          /** View configuration: kanban requires groupField; map locationField; hierarchy relationField; calendar dates; gantt/resource startField and endField (resource also resourceField); detail mode all or first. */
          config?: {
            /** The grouping field ID or alias; required for kanban config. */
            groupField?: string;
            /** The location field ID or alias required for map views. */
            locationField?: string;
            /** The relation field ID or alias; required for createRelatedRecord custom actions or hierarchy views. */
            relationField?: string;
            /** Calendar start/end field mappings. */
            dates?: Array<Record<string, unknown>>;
            /** The start time field ID or alias. */
            startField?: string;
            /** The end time field ID or alias. */
            endField?: string;
            /** The resource assignee field ID or alias. */
            resourceField?: string;
            /** Detail view mode: all shows the record list; first displays only the first record. */
            mode?: "all" | "first";
            [key: string]: unknown;
          };
          /** The recursive filter whose root must be a group with logic AND/OR. At most group->group->condition nesting; siblings must all be groups or all conditions. Use option keys and related/member/department/role IDs, not names. isempty/isnotempty omit value. */
          filter?: {
            /** The type in the documented Mingdao format. */
            type?: "group" | "condition";
            /** The group logic AND or OR. */
            logic?: "AND" | "OR";
            /** The nested filter nodes; preserve the recursive condition/group format. */
            children?: Array<Record<string, unknown>>;
            /** The field ID or alias; filters require a real field ID without an isTitle annotation. */
            field?: string;
            /** The field-type-specific filter operator. */
            operator?: "eq" | "ne" | "gt" | "ge" | "lt" | "le" | "in" | "notin" | "contains" | "notcontains" | "concurrent" | "belongsto" | "notbelongsto" | "startswith" | "notstartswith" | "endswith" | "notendswith" | "between" | "notbetween" | "isempty" | "isnotempty";
            /** The configured value. */
            value?: unknown;
            [key: string]: unknown;
          };
          /** The view sorting rules in priority order. */
          sort?: Array<{
            /** The field ID or alias. */
            fieldId: string;
            /** The view sort direction: 1 ascending or 2 descending. */
            sortType: 1 | 2;
            [key: string]: unknown;
          }>;
          /** The record color field configuration, using an enabled single-select color field (type 9 or 11). */
          color?: {
            /** The field ID or alias. */
            fieldId?: string;
            [key: string]: unknown;
          };
          /** The quick-filter fields in display order. Supports fieldType 2,4,7,32,33,6,8,31,9,10,11,26,27,28,29,35,36,15,16; only selection fields 9/10/11 support selectionType and displayType. */
          quickFilters?: Array<{
            /** The field ID or alias. */
            fieldId: string;
            /** The option-filter selection mode. */
            selectionType?: "single" | "multiple";
            /** The option-filter display mode. */
            displayType?: "dropdown" | "tile";
            [key: string]: unknown;
          }>;
          /** The fields hidden in record details for this view. */
          hiddenFields?: Array<string>;
          /** The fields shown in table/gantt layouts; omit for all fields. */
          tableFields?: Array<string>;
          /** The sidebar field filter configuration. */
          filterList?: {
            /** The sidebar filtering field ID or alias, not its name. */
            filterField?: string;
            [key: string]: unknown;
          };
          /** The card title, summary, cover and display fields; use aliases or IDs, not names. */
          card?: {
            /** The card title text field. */
            titleField?: string;
            /** The Text or RichText summary field. */
            summaryField?: string;
            /** The attachment cover field. */
            coverField?: string;
            /** The cover position: top, left or right. */
            coverDirection?: "top" | "left" | "right";
            /** The cover presentation: full, square or circle. */
            coverDisplayMode?: "full" | "square" | "circle";
            /** Additional fields displayed on the card. */
            displayFields?: Array<string>;
            [key: string]: unknown;
          };
          /** Custom action configuration. */
          actions?: {
            /** Custom action IDs shown in record details; create the custom actions first. */
            detailActions?: Array<string>;
            /** The quick action buttons shown on rows/cards. */
            quickActions?: Array<{
              /** The action kind: copy, print, delete or share for system actions; action for custom actions. */
              type: string;
              /** The custom action ID when type is action; omit for system actions. */
              id?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** The table/gallery/kanban grouping configuration. */
          group?: {
            /** The grouping field ID or alias; required for kanban config. */
            groupField?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The operation result. */
        data: {
          /** The created views. */
          views?: Array<{
            /** The view ID. */
            viewId?: string;
            /** The display name. */
            name?: string;
            /** The returned item type. */
            type?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete multiple Mingdao worksheet records, optionally permanently instead of using the recycle bin. */
    "mingdao.batch_delete_records": {
      input: {
        /**
         * The Mingdao worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /** The record IDs to operate on. */
        rowIds: Array<string>;
        /** Whether this record mutation triggers configured workflows. */
        triggerWorkflow?: boolean;
        /** Whether to permanently delete records without sending them to the recycle bin. Defaults to false; permanent deletion cannot be recovered. */
        permanent?: boolean;
      };
      output: {
        /** The batch deletion result, normally an empty object. */
        data: Record<string, unknown>;
      };
    };
    /** Apply the same field updates to multiple Mingdao worksheet records and report successful and failed record IDs. */
    "mingdao.batch_update_records": {
      input: {
        /**
         * The Mingdao worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /** The record IDs to operate on. */
        rowIds: Array<string>;
        /** The field values applied to every selected record. */
        fields: Array<{
          /**
           * The field ID or alias.
           * @minLength 1
           */
          id: string;
          /** The value in the worksheet field format. Attachment values use accessible URLs, for example [{"name":"report.pdf","url":"https://example.com/report.pdf"}]; do not pass local files or inline base64. Attachment removal uses file IDs. */
          value: unknown;
          /** The batch field option: for single/multiple selections, 1 disallows new options and 2 allows them (default 1); for attachments, 0 replaces and 1 appends (default 0). */
          type?: number;
        }>;
        /** Whether this record mutation triggers configured workflows. */
        triggerWorkflow?: boolean;
      };
      output: {
        /** The batch update result. */
        data: {
          /** The IDs of records that failed to update. */
          failedRowIds?: Array<string>;
          /** The IDs of records successfully updated. */
          succeededRowIds?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Create blank worksheet or custom-page application items. */
    "mingdao.create_app_items": {
      input: {
        /** The blank application items to create. */
        items: Array<{
          /** The type in the documented Mingdao format. */
          type: "worksheet" | "customPage";
          /** The Mingdao icon name. */
          icon?: string;
          /** The display name. */
          name: string;
          /** The navigation section ID; omitted application items use the first available section. */
          sectionId?: string;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The operation result. */
        data: Array<{
          /** The upstream item ID or field alias. */
          id?: string;
          /** The returned item type. */
          type?: string;
          /** The display name. */
          name?: string;
          /** The navigation section ID; omitted application items use the first available section. */
          sectionId?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create navigation sections in the connected Mingdao application. */
    "mingdao.create_app_sections": {
      input: {
        /** The parent section ID; omit or pass an empty string for the root. */
        parentId?: string;
        /** The navigation sections to create. */
        sections: Array<{
          /** The Mingdao icon name. */
          icon?: string;
          /** The display name. */
          name: string;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The operation result. */
        data: {
          /** The created section IDs. */
          sectionIds?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a worksheet chart with dimensions, metrics, date ranges and filters. */
    "mingdao.create_chart": {
      input: {
        /** The worksheet ID or alias. */
        worksheetId: string;
        /** The chart name. */
        chartName: string;
        /** The view ID. */
        viewId: string;
        /** The chart type: columnChart, barChart, lineChart, pieChart, radarChart, funnelChart, dualAxisChart, pivotTable, regionMap, numberChart, symmetricBarChart, scatterChart, wordCloud, gaugeChart, progressChart, rankingChart or worldMap. Trends use time dimensions; maps require geographic fields. Dual/symmetric charts need one values and one rightValues metric; pivotTable needs rows, columns and values; progressChart needs matching targetValues; gaugeChart needs gaugeMin/gaugeMax. */
        chartType: string;
        /** The data permission scope: permission for visible data or all for all data. */
        dataScope: string;
        /** The time filter field ID; inline page charts default to ctime. */
        timeFieldId: string;
        /** The time range: all, today, yesterday, tomorrow, currentWeek, lastWeek, nextWeek, currentMonth, lastMonth, nextMonth, currentQuarter, lastQuarter, nextQuarter, currentYear, lastYear, nextYear, firstHalfYear, secondHalfYear, last7Days, last30Days, last365Days, next7Days, next30Days, next365Days, customDynamicRange or customRange. Inline page charts default to currentMonth. */
        timeRange: string;
        /** The dynamic date range for timeRange=customDynamicRange. from/to use type today, currentMonth, currentYear, past or future; past/future require value and unit day/week/month/year. */
        customDynamicRange?: {
          /** The start time point; type past/future requires value and unit. */
          from?: {
            /** The type in the documented Mingdao format. */
            type: string;
            /** The configured value. */
            value?: number;
            /** The offset unit: day, week, month or year. */
            unit?: string;
            [key: string]: unknown;
          };
          /** The end time point with the same structure as from. */
          to?: {
            /** The type in the documented Mingdao format. */
            type: string;
            /** The configured value. */
            value?: number;
            /** The offset unit: day, week, month or year. */
            unit?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The explicit date range for timeRange=customRange. */
        customRange?: {
          /** The start date in yyyy/MM/dd format. */
          startDate: string;
          /** The end date in yyyy/MM/dd format. */
          endDate: string;
          [key: string]: unknown;
        };
        /** Non-pivot dimensions: category/time/geographic fields, first for X-axis and second for series. Maps require genuine geographic fields. */
        dimension?: Array<{
          /** The field ID or alias; filters require a real field ID without an isTitle annotation. */
          field: string;
          /** An optional display-name override. */
          displayName?: string;
          /** Grouping granularity: dates 1 day, 2 week, 3 month, 4 quarter, 5 year; regions 1 province, 2 city, 3 district. */
          granularity?: number;
          /** Whether to include empty values; defaults to false. */
          includeEmpty?: boolean;
          [key: string]: unknown;
        }>;
        /** The pivotTable row dimensions. */
        rows?: Array<{
          /** The field ID or alias; filters require a real field ID without an isTitle annotation. */
          field: string;
          /** An optional display-name override. */
          displayName?: string;
          /** Grouping granularity: dates 1 day, 2 week, 3 month, 4 quarter, 5 year; regions 1 province, 2 city, 3 district. */
          granularity?: number;
          /** Whether to include empty values; defaults to false. */
          includeEmpty?: boolean;
          [key: string]: unknown;
        }>;
        /** The pivotTable column dimensions. */
        columns?: Array<{
          /** The field ID or alias; filters require a real field ID without an isTitle annotation. */
          field: string;
          /** An optional display-name override. */
          displayName?: string;
          /** Grouping granularity: dates 1 day, 2 week, 3 month, 4 quarter, 5 year; regions 1 province, 2 city, 3 district. */
          granularity?: number;
          /** Whether to include empty values; defaults to false. */
          includeEmpty?: boolean;
          [key: string]: unknown;
        }>;
        /** The numeric or rowid metrics to aggregate; rowid represents record count. */
        values?: Array<{
          /** The field ID or alias; filters require a real field ID without an isTitle annotation. */
          field: string;
          /** The case-insensitive aggregation: COUNT, DISTINCTCOUNT, SUM, MIN, MAX or AVG. */
          aggregation: string;
          /** An optional display-name override. */
          displayName?: string;
          [key: string]: unknown;
        }>;
        /** The secondary metrics; dualAxisChart and symmetricBarChart require exactly one secondary and one primary metric. */
        rightValues?: Array<{
          /** The field ID or alias; filters require a real field ID without an isTitle annotation. */
          field: string;
          /** The case-insensitive aggregation: COUNT, DISTINCTCOUNT, SUM, MIN, MAX or AVG. */
          aggregation: string;
          /** An optional display-name override. */
          displayName?: string;
          [key: string]: unknown;
        }>;
        /** The target metrics for progressChart, matching values in count and order. */
        targetValues?: Array<{
          /** The field ID or alias; filters require a real field ID without an isTitle annotation. */
          field: string;
          /** The case-insensitive aggregation: COUNT, DISTINCTCOUNT, SUM, MIN, MAX or AVG. */
          aggregation: string;
          /** An optional display-name override. */
          displayName?: string;
          [key: string]: unknown;
        }>;
        /** The gaugeChart minimum as a string; required for gauges. */
        gaugeMin?: string;
        /** The gaugeChart maximum as a string; required for gauges. */
        gaugeMax?: string;
        /** The regionMap scope: country, province or city. */
        mapScope?: "country" | "province" | "city";
        /** The 6-digit region code for regionMap. Province codes end in 0000; city codes end in 00. Omit for country; municipalities and special administrative regions use city-level scope even under province. */
        mapRegionCode?: string;
        /** The recursive filter whose root must be a group with logic AND/OR. At most group->group->condition nesting; siblings must all be groups or all conditions. Use option keys and related/member/department/role IDs, not names. isempty/isnotempty omit value. */
        filter?: {
          /** The type in the documented Mingdao format. */
          type?: "group" | "condition";
          /** The group logic AND or OR. */
          logic?: "AND" | "OR";
          /** The nested filter nodes; preserve the recursive condition/group format. */
          children?: Array<Record<string, unknown>>;
          /** The field ID or alias; filters require a real field ID without an isTitle annotation. */
          field?: string;
          /** The field-type-specific filter operator. */
          operator?: "eq" | "ne" | "gt" | "ge" | "lt" | "le" | "in" | "notin" | "contains" | "notcontains" | "concurrent" | "belongsto" | "notbelongsto" | "startswith" | "notstartswith" | "endswith" | "notendswith" | "between" | "notbetween" | "isempty" | "isnotempty";
          /** The configured value. */
          value?: unknown;
          [key: string]: unknown;
        };
        /** The chart sorting rules. */
        sorts?: Array<{
          /** The field ID or alias; filters require a real field ID without an isTitle annotation. */
          field: string;
          /** Whether to sort ascending; defaults to false. */
          isAsc?: boolean;
          [key: string]: unknown;
        }>;
        /** The maximum result count; recommended for ranking and word-cloud charts. */
        limit?: number;
      };
      output: {
        /** The operation result. */
        data: {
          /** The created chart ID. */
          chartId?: string;
          /** The upstream view ID. */
          view_id?: string;
          /** The upstream worksheet ID. */
          worksheet_id?: string;
          /** The chart name. */
          chartName?: string;
          /** The returned chart type. */
          chartType?: string;
          /** The returned time field ID. */
          timeFieldId?: string;
          /** The returned time range. */
          timeRange?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a chatbot with a system prompt, welcome message and up to five preset questions. */
    "mingdao.create_chatbot": {
      input: {
        /** The application ID. */
        appId: string;
        /** The display name. */
        name: string;
        /** The navigation section ID; omitted application items use the first available section. */
        sectionId?: string;
        /** The purpose of the assistant. */
        description?: string;
        /** The Mingdao icon name. */
        icon?: string;
        /** The chatbot system prompt. */
        prompt: string;
        /** The chatbot welcome message. */
        welcomeMessage: string;
        /**
         * The preset questions; at most five are allowed.
         * @maxItems 5
         */
        presetQuestions: Array<string>;
      };
      output: {
        /** The chatbot creation result. Official response definitions conflict between a string and an object; preserve the actual returned data. */
        data: unknown;
      };
    };
    /** Create an application option set with ordered values, colors and scores. */
    "mingdao.create_optionset": {
      input: {
        /** The option set name. */
        name: string;
        /** The options to create. */
        options: Array<{
          /** The option value; values must not be duplicated. */
          value: string;
          /** The integer sort order; smaller values come first. */
          index: number;
          /** The option color, effective when enableColor is true. */
          color: string;
          /** The option score, effective when enableScore is true; decimals and negative values are supported. */
          score: number;
        }>;
        /** Whether to enable option colors. */
        enableColor: boolean;
        /** Whether to enable option scores. */
        enableScore: boolean;
      };
      output: {
        /** The created option set identity. */
        data: {
          /**
           * The option set ID.
           * @minLength 1
           */
          optionsetId?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Mingdao worksheet record using field IDs or aliases and URL-based attachment values. */
    "mingdao.create_record": {
      input: {
        /**
         * The Mingdao worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /** The field values to write. */
        fields: Array<{
          /**
           * The field ID or alias.
           * @minLength 1
           */
          id: string;
          /** The value in the worksheet field format. Attachment values use accessible URLs, for example [{"name":"report.pdf","url":"https://example.com/report.pdf"}]; do not pass local files or inline base64. Attachment removal uses file IDs. */
          value: unknown;
          /** For updates to attachments, multiple selections, collaborators, departments, relations, subtables or organization roles: 0 replaces, 1 adds, 2 removes. Defaults to 0; omit for creation. */
          updateType?: "0" | "1" | "2";
          /** Whether single-select or multiple-select values may create missing options. */
          allowNewOptions?: boolean;
        }>;
        /** Whether this record mutation triggers configured workflows. */
        triggerWorkflow?: boolean;
      };
      output: {
        /** The record mutation result. */
        data: {
          /** The created or updated record ID. */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create an application role with global or per-worksheet, view, field and page permissions. */
    "mingdao.create_role": {
      input: {
        /** The role name. */
        name: string;
        /** The role description. */
        description: string;
        /** Whether to hide the application from members. The official contract supports boolean values or their string form. */
        hideAppForMembers?: boolean | "true" | "false";
        /** The role type: 0 for a custom role, accepted as an integer or string in the official contract. */
        type: number | string;
        /** Record scope: 80 view/edit/delete all; 60 view all and edit/delete own; 30 view joined and edit/delete own; 20 view all only; 0 distribute permitted application items. The official contract accepts an integer or string. */
        permissionScope: number | string;
        /** Global application permissions; effective when permissionScope is greater than zero. */
        globalPermissions?: {
          /** Whether members may add records. */
          addRecord: boolean;
          /** Whether members may publicly share views and records. */
          share: boolean;
          /** Whether members may import data. */
          import: boolean;
          /** Whether members may export data. */
          export: boolean;
          /** Whether members may discuss. */
          discuss: boolean;
          /** Whether members may use system printing. */
          systemPrint: boolean;
          /** Whether members may download attachments. */
          attachmentDownload: boolean;
          /** Whether members may view logs. */
          log: boolean;
        };
        /** Worksheet permission details; effective when permissionScope is zero. */
        worksheetPermissions?: Array<{
          /** The worksheet ID. */
          id?: string;
          /** The record data permission scopes. */
          recordDataScope: {
            /** Read scope: 0 none, 20 owned by me, 30 owned by me or subordinates, 100 all. */
            read: number;
            /** Edit scope: 0 none, 20 owned by me, 30 owned by me or subordinates, 100 all. */
            edit: number;
            /** Delete scope: 0 none, 20 owned by me, 30 owned by me or subordinates, 100 all. */
            delete: number;
          };
          /** The worksheet action permissions. */
          worksheetActions: {
            /** Whether members may publicly share views. */
            shareView: boolean;
            /** Whether members may import worksheet data. */
            import: boolean;
            /** Whether members may export worksheet data. */
            export: boolean;
            /** Whether members may discuss the worksheet. */
            discuss: boolean;
            /** Whether members may perform batch operations. */
            batchOperation: boolean;
          };
          /** The payment permissions. */
          paymentActions: {
            /** Whether members may make payments in the worksheet. */
            pay: boolean;
          };
          /** The record action permissions. */
          recordActions: {
            /** Whether members may add records. */
            add: boolean;
            /** Whether members may publicly share records. */
            share: boolean;
            /** Whether members may discuss records. */
            discuss: boolean;
            /** Whether members may use system printing. */
            systemPrint: boolean;
            /** Whether members may download attachments. */
            attachmentDownload: boolean;
            /** Whether members may view record logs. */
            log: boolean;
          };
          /** The record permissions within each view. */
          recordPermissionInViews: Array<{
            /** The view ID. */
            viewId: string;
            /** Whether members may read records in the view. */
            read: boolean;
            /** Whether members may edit records in the view. */
            edit: boolean;
            /** Whether members may delete records in the view. */
            delete: boolean;
          }>;
          /** The field permissions. */
          fieldPermissions: Array<{
            /** The field ID. */
            id: string;
            /** Whether members may set the field when adding records. */
            add: boolean;
            /** Whether members may read the field. */
            read: boolean;
            /** Whether members may edit the field. */
            edit: boolean;
            /** Whether members may decrypt the field. */
            decrypt?: boolean;
          }>;
        }>;
        /** Custom-page permission details; effective when permissionScope is zero. */
        pagePermissions?: Array<{
          /** The custom page ID. */
          id: string;
          /** Whether members may view the custom page. */
          enable: boolean;
        }>;
      };
      output: {
        /** The created application role. */
        data: {
          /** The role ID. */
          id?: string;
          /** The role name. */
          name?: string;
          /** The role type. */
          roleType?: number;
          /** The role description. */
          desc?: string;
          /** The role user identifiers. */
          users?: Array<string>;
          /** The role department identifiers. */
          departments?: Array<string>;
          /** The role department tree identifiers. */
          departmentTrees?: Array<string>;
          /** The organization role identifiers. */
          projectOrganizes?: Array<string>;
          /** The role job identifiers. */
          jobs?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a worksheet and its fields, including links to already-created worksheets. */
    "mingdao.create_worksheet": {
      input: {
        /** The display name. */
        name: string;
        /** The worksheet or field alias. */
        alias?: string;
        /** The description displayed to users. */
        remark?: string;
        /** The navigation section ID; omitted application items use the first available section. */
        sectionId?: string;
        /** The worksheet fields to create. Create referenced worksheets before Relation fields; supply dataSource and relation.bidirectional for links. */
        fields: Array<{
          /** The display name. */
          name: string;
          /** The worksheet or field alias. */
          alias?: string;
          /** The description displayed to users. */
          remark?: string;
          /** The field type: creation uses a string (named type such as Text/Relation or documented numeric string codes such as 2/6/11); worksheet updates use integer codes. */
          type: string;
          /** Whether this field is the record title. */
          isTitle?: boolean;
          /** Whether the field is required. */
          required: boolean;
          /** Whether to hide the field. */
          isHidden?: boolean;
          /** Whether the field is read-only. */
          isReadOnly?: boolean;
          /** Whether to hide the field when creating a record. */
          isHiddenOnCreate?: boolean;
          /** Whether the field value must be unique. */
          isUnique?: boolean;
          /** The decimal precision for Number fields, from 0 to 14. */
          precision?: number;
          /** Field subtype: Collaborator 0 single or 1 multiple; Relation 1 single or 2 multiple; Time 1 hours/minutes or 6 hours/minutes/seconds; Date/DateTime 5 year, 4 month, 3 day, 2 hour, 1 minute, 6 second precision. */
          subType?: string;
          /** Selection options for SingleSelect or MultipleSelect fields. */
          options?: Array<{
            /** The configured value. */
            value: string;
            /** The option order. */
            index: number;
            [key: string]: unknown;
          }>;
          /** The maximum rating from 0 to 10 for Rating fields. */
          max?: number;
          /** The already-created related worksheet ID for Relation fields. */
          dataSource?: string;
          /** Relation settings; showFields selects displayed fields and bidirectional enables two-way links. */
          relation?: {
            /** The related worksheet fields to display. */
            showFields?: Array<string>;
            /** Whether the relation is bidirectional. */
            bidirectional?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The operation result. */
        data: {
          /** The created worksheet ID. */
          worksheetId?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Mingdao worksheet record, optionally permanently instead of using the recycle bin. */
    "mingdao.delete_record": {
      input: {
        /**
         * The Mingdao worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /**
         * The Mingdao record ID.
         * @minLength 1
         */
        rowId: string;
        /** Whether this record mutation triggers configured workflows. */
        triggerWorkflow?: boolean;
        /** Whether to permanently delete records without sending them to the recycle bin. Defaults to false; permanent deletion cannot be recovered. */
        permanent?: boolean;
      };
      output: {
        /** The deletion result, normally an empty object. */
        data: Record<string, unknown>;
      };
    };
    /** Delete an application role and revoke the access it grants. */
    "mingdao.delete_role": {
      input: {
        /**
         * The application role ID.
         * @minLength 1
         */
        roleId: string;
      };
      output: {
        /** The upstream operation result, including any partial-success details. */
        data: Record<string, unknown>;
      };
    };
    /** Delete a worksheet from the connected application. */
    "mingdao.delete_worksheet": {
      input: {
        /** The worksheet ID or alias. */
        worksheetId: string;
      };
      output: {
        /** The operation result. */
        data: Record<string, unknown>;
      };
    };
    /** Disable an existing application option set. */
    "mingdao.disable_optionset": {
      input: {
        /**
         * The option set ID.
         * @minLength 1
         */
        optionsetId: string;
      };
      output: {
        /** The upstream operation result, including any partial-success details. */
        data: Record<string, unknown>;
      };
    };
    /** Generate a record share link with selected visible fields, optional password and expiration. Omitted or zero expiration means the link does not expire. */
    "mingdao.generate_record_share_link": {
      input: {
        /**
         * The worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /**
         * The record ID.
         * @minLength 1
         */
        rowId: string;
        /** The visible field IDs. */
        visibleFields?: Array<string>;
        /**
         * The expiration in seconds; omitted or zero means no expiration.
         * @minimum 0
         */
        expiredIn?: number;
        /** The access password; an empty string means no password is required. */
        password?: string;
      };
      output: {
        /** The record sharing result. */
        data: {
          /** The generated record share URL. */
          url?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the connected Mingdao application's identity, metadata and navigation sections. */
    "mingdao.get_app": {
      input: Record<string, never>;
      output: {
        /** The connected application. */
        data: {
          /** The organization ID. */
          organizationId?: string;
          /** The application ID. */
          appId?: string;
          /** The application name. */
          name?: string;
          /** The application icon URL. */
          iconUrl?: string;
          /** The application color. */
          color?: string;
          /** The application explanation. */
          desc?: string;
          /** The application description. */
          remark?: string;
          /** The application navigation sections and nested items. */
          sections?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the execution details, current steps and available operation metadata for an existing Mingdao record approval. */
    "mingdao.get_approval": {
      input: {
        /**
         * The worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /**
         * The record ID.
         * @minLength 1
         */
        rowId: string;
        /**
         * The approval process ID.
         * @minLength 1
         */
        approvalId: string;
      };
      output: {
        /** The approval execution details, including provider-defined step and operation metadata. */
        data: {
          /** The organization ID. */
          companyId?: string;
          /** The executed workflow step instances. */
          works?: Array<Record<string, unknown>>;
          /** The current work item, or null when unavailable. */
          currentWork?: unknown;
          /** The current work item details, or null when unavailable. */
          currentWorkItem?: unknown;
          /** The available operation codes: 3 revoke, 4 approve, 5 reject, 6 forward for approval, 7 countersign, 9 submit, 10 hand over, 12 print. */
          operationTypeList?: Array<Array<number>> | null;
          /** The allowed user ranges for each operation type, or null when unavailable. */
          operationUserRange?: Record<string, unknown> | null;
          /** The approval or rejection opinion template, or null. */
          opinionTemplate?: unknown;
          /** The approval title, or null when unavailable. */
          title?: string | null;
          /** The process name. */
          processName?: string;
          /** The process ID. */
          processId?: string;
          /** The editable process version ID. */
          parentId?: string;
          /** Whether this is an approval workflow. */
          isApproval?: boolean;
          /** The current workflow node information. */
          flowNode?: Record<string, unknown>;
          /** The nodes available for rollback. */
          backFlowNodes?: Array<Record<string, unknown>>;
          /** Rollback scope: 0 all above, 1 start only, 2 previous only, 3 specified nodes; null when unavailable. */
          callBackNodeType?: number | null;
          /** The application form state: -1 deleted, 0 revoked, 1 normal, 2 draft. */
          instanceType?: number;
          /** The names assigned to operation buttons, or null when unavailable. */
          btnMap?: Record<string, unknown> | null;
          /** The execution status: 1 in progress, 2 completed, 3 terminated, 4 failed. */
          status?: number;
          /** The current step IDs. */
          currentWorkIds?: Array<string>;
          /** Countersign mode: 0 let the user select, 1 before approval, 2 after approval; null when unavailable. */
          signOperationType?: number | null;
          /** The node to which the approver may revoke the task, or null when unavailable. */
          allowTaskRevokeBackNodeId?: string | null;
          /** The available print templates. */
          printList?: Array<Record<string, unknown>>;
          /** Whether system printing is disabled. */
          disabledPrint?: boolean;
          /** The task title, or null when unavailable. */
          recordTitle?: string | null;
          /** The data owner information, or null. */
          ownerAccount?: unknown;
          /** The data creator and actual workflow initiator, or null. */
          createAccount?: unknown;
          /** The record creation time, or null when unavailable. */
          createDate?: string | null;
          /** The application information, or null. */
          app?: unknown;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Mingdao worksheet record with its dynamic field values and optional system fields. */
    "mingdao.get_record": {
      input: {
        /**
         * The Mingdao worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /**
         * The Mingdao record ID.
         * @minLength 1
         */
        rowId: string;
        /** The upstream response format: json for structured data or md for Markdown text; defaults to json. Markdown may contain only the important schema fields. */
        responseFormat?: "json" | "md";
        /** Whether to include system fields; first enable system fields in the worksheet feature settings. */
        includeSystemFields?: boolean;
      };
      output: {
        /** The record or requested Markdown text. */
        data: {
          /** The record ID. */
          id?: string;
          [key: string]: unknown;
        } | string;
      };
    };
    /** Page through the records linked by a Mingdao record's relationship field. */
    "mingdao.get_related_records": {
      input: {
        /**
         * The Mingdao worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /**
         * The Mingdao record ID.
         * @minLength 1
         */
        rowId: string;
        /**
         * The relationship field ID.
         * @minLength 1
         */
        field: string;
        /** The number of related records per page; defaults to 20. */
        pageSize?: number;
        /** The page index; defaults to 1. */
        pageIndex?: number;
        /** Whether to include system fields; defaults to false. */
        isReturnSystemFields?: boolean;
      };
      output: {
        /** The record page returned by Mingdao. */
        data: {
          /** The returned records. */
          rows?: Array<{
            /** The record ID. */
            id?: string;
            [key: string]: unknown;
          }>;
          /** The total matching record count, when requested or returned. */
          total?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Mingdao application role's global, worksheet, field and custom-page permissions. */
    "mingdao.get_role": {
      input: {
        /**
         * The role ID.
         * @minLength 1
         */
        roleId: string;
      };
      output: {
        /** The role details and permission configuration. */
        data: {
          /** The role ID. */
          id?: string;
          /** The role name. */
          name?: string;
          /** The role description. */
          description?: string;
          /** The permission scope: 80 full access, 60 read all and edit/delete own, 30 read joined and edit/delete own, 20 read all, 0 permissions by application item. */
          permissionScope?: string;
          /** The role type; 0 denotes a custom role. */
          type?: string;
          /** Whether the application is hidden from members, encoded as true or false text. */
          hideAppForMembers?: string;
          /** The global permissions, effective when permissionScope is greater than zero. */
          globalPermissions?: Record<string, unknown>;
          /** The worksheet, record, view and field permissions, effective when permissionScope is zero. */
          worksheetPermissions?: Array<Record<string, unknown>>;
          /** The custom-page permissions, effective when permissionScope is zero. */
          pagePermissions?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Mingdao workflow's input and output parameter definitions before triggering it. */
    "mingdao.get_workflow": {
      input: {
        /**
         * The existing Mingdao workflow process ID.
         * @minLength 1
         */
        processId: string;
      };
      output: {
        /** The workflow definition. */
        data: {
          /** The workflow ID. */
          id?: string;
          /** The workflow name. */
          name?: string;
          /** The workflow description. */
          description?: string;
          /** The expected workflow input parameters. */
          inputParameters?: Array<Record<string, unknown>>;
          /** The workflow output parameters. */
          outputParameters?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Mingdao worksheet's fields, views and metadata before querying or writing its records. */
    "mingdao.get_worksheet": {
      input: {
        /**
         * The Mingdao worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /** The upstream response format: json for structured data or md for Markdown text; defaults to json. Markdown may contain only the important schema fields. */
        responseFormat?: "json" | "md";
      };
      output: {
        /** The worksheet schema or requested Markdown text. */
        data: {
          /**
           * The Mingdao worksheet ID.
           * @minLength 1
           */
          worksheetId?: string;
          /** The worksheet name. */
          name?: string;
          /** The worksheet alias. */
          alias?: string;
          /** The worksheet explanation. */
          desc?: string;
          /** The worksheet description. */
          remark?: string;
          /** The worksheet field definitions. */
          fields?: Array<Record<string, unknown>>;
          /** The worksheet views. */
          views?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        } | string;
      };
    };
    /** List approval executions for a Mingdao record, optionally selecting completed or incomplete executions. */
    "mingdao.list_approvals": {
      input: {
        /**
         * The worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /**
         * The record ID.
         * @minLength 1
         */
        rowId: string;
        /** The requested page index. */
        pageIndex?: number;
        /** The requested number of executions per page. */
        pageSize?: number;
        /** Whether to select completed executions: true for completed, false for incomplete. */
        complete?: boolean;
      };
      output: {
        /** The approval execution list returned by the API. */
        data: {
          /**
           * The worksheet ID.
           * @minLength 1
           */
          worksheetId?: string;
          /**
           * The record ID.
           * @minLength 1
           */
          rowId?: string;
          /** The approval task entries. */
          todoList?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List Mingdao application knowledge bases, including their configured embedding models. */
    "mingdao.list_knowledge": {
      input: {
        /** The knowledge base IDs; an empty array selects all knowledge bases. */
        knowledgeIds?: Array<string>;
      };
      output: {
        /** The application knowledge bases. */
        data: Array<{
          /** The knowledge base ID. */
          id?: string;
          /** The knowledge base name. */
          name?: string;
          /** The knowledge base description. */
          remark?: string;
          /** The configured embedding model. */
          model?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the reusable option sets in the connected Mingdao application. */
    "mingdao.list_optionsets": {
      input: Record<string, never>;
      output: {
        /** The option set list result. */
        data: {
          /** The application option sets. */
          optionsets?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Read a Mingdao record's discussions, including replies, mentions and attachment metadata, with optional search and Markdown output. */
    "mingdao.list_record_discussions": {
      input: {
        /**
         * The worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /**
         * The record ID.
         * @minLength 1
         */
        rowId: string;
        /**
         * The one-based page index; defaults to 1.
         * @minimum 1
         */
        pageIndex?: number;
        /**
         * The page size from 1 to 100; defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The discussion search keyword. */
        search?: string;
        /** Whether to return only discussions with attachments; defaults to false. */
        onlyWithAttachments?: boolean;
        /** The response format: json or md. Markdown includes only important fields; defaults to json. */
        responseFormat?: "json" | "md";
      };
      output: {
        /** The discussion page or requested Markdown text. */
        data: {
          /** The returned discussions. */
          discussions?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        } | string;
      };
    };
    /** Read a Mingdao record's change logs, optionally filtered by operators, field and date range. */
    "mingdao.list_record_logs": {
      input: {
        /**
         * The worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /**
         * The record ID.
         * @minLength 1
         */
        rowId: string;
        /** Filter by these operator IDs. */
        operatorIds?: Array<string>;
        /** The field ID or alias used to filter change logs. */
        field?: string;
        /** The page index; defaults to 1 when omitted. */
        pageIndex?: number;
        /** The number of items per page; defaults to 20 when omitted. */
        pageSize?: number;
        /** The start date in yyyy-MM-dd HH:mm:ss format. */
        startDate?: string;
        /** The end date in yyyy-MM-dd HH:mm:ss format. */
        endDate?: string;
      };
      output: {
        /** The returned record logs and continuation information. */
        data: {
          /** The record change logs. */
          logs?: Array<Record<string, unknown>>;
          /** The timestamp of the last update. */
          lastMark?: string;
          /** Whether more data is available. */
          flag?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Search, filter, sort and page through Mingdao worksheet records, with optional field selection and total count. */
    "mingdao.list_records": {
      input: {
        /**
         * The Mingdao worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /** The upstream response format: json for structured data or md for Markdown text; defaults to json. Markdown may contain only the important schema fields. */
        responseFormat?: "json" | "md";
        /**
         * The number of records per page, from 1 to 1000.
         * @minimum 1
         * @maximum 1000
         */
        pageSize: number;
        /**
         * The one-based page index.
         * @minimum 1
         */
        pageIndex: number;
        /** The view ID used to constrain the results. */
        viewId?: string;
        /** The field IDs or aliases to include. */
        fields?: Array<string>;
        /** A recursive Mingdao filter. A condition requires type=condition, field and operator; value is required except for isempty and isnotempty. A group requires type=group, logic (AND or OR, case-insensitive) and nested children. Operators and values depend on worksheet field types. */
        filter?: {
          operator?: "isempty" | "isnotempty";
          [key: string]: unknown;
        } | Record<string, unknown> | {
          type?: "group";
          [key: string]: unknown;
        };
        /** The ordered sort rules. */
        sorts?: Array<{
          /** The field ID or alias. */
          field: string;
          /** Whether to sort ascending; defaults to descending. */
          isAsc?: boolean;
        }>;
        /** A fuzzy search keyword. */
        search?: string;
        /** Whether to return records in table-view format. */
        tableView?: boolean;
        /** Whether response field keys use IDs instead of aliases. */
        useFieldIdAsKey?: boolean;
        /** Whether to include the total record count; defaults to false. */
        includeTotalCount?: boolean;
        /** Whether to include system fields; defaults to false. */
        includeSystemFields?: boolean;
      };
      output: {
        /** The record page or requested Markdown text. */
        data: {
          /** The returned records. */
          rows?: Array<{
            /** The record ID. */
            id?: string;
            [key: string]: unknown;
          }>;
          /** The total matching record count, when requested or returned. */
          total?: number;
          [key: string]: unknown;
        } | string;
      };
    };
    /** List or search Mingdao geographic regions; omit the region ID to retrieve top-level regions. */
    "mingdao.list_regions": {
      input: {
        /** The region ID; omitting it returns top-level regions. */
        id?: string;
        /** The fuzzy region-name search text. */
        search?: string;
      };
      output: {
        /** The region list result. */
        data: {
          /** The matching regions. */
          regions?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List the connected Mingdao application's roles and their user, department, job and organization-role memberships. */
    "mingdao.list_roles": {
      input: Record<string, never>;
      output: {
        /** The role list result. */
        data: {
          /** The application roles. */
          roles?: Array<{
            /** The role ID. */
            id?: string;
            /** The role name. */
            name?: string;
            /** The role description. */
            description?: string;
            /** The role type. */
            roleType?: string;
            /** The role's users. */
            accounts?: Array<Record<string, unknown>>;
            /** The department trees assigned to the role. */
            departmentTrees?: Array<Record<string, unknown>>;
            /** The departments assigned to the role. */
            departments?: Array<Record<string, unknown>>;
            /** The jobs assigned to the role. */
            jobs?: Array<Record<string, unknown>>;
            /** The assigned organization role IDs. */
            orgRoleIds?: Array<string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** List the existing webhook and packaged business process workflows available in the connected Mingdao application. */
    "mingdao.list_workflows": {
      input: Record<string, never>;
      output: {
        /** The workflow listing. */
        data: {
          /** The available workflows. */
          processes?: Array<{
            /** The workflow ID. */
            id?: string;
            /** The workflow alias. */
            alias?: string;
            /** The workflow name. */
            name?: string;
            /** The workflow type: 6 for webhook or 10 for packaged business process. */
            type?: number;
            /** The workflow description. */
            description?: string;
            /** The workflow status. */
            status?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** List worksheets in the connected Mingdao application, optionally restricted to selected worksheet IDs. */
    "mingdao.list_worksheets": {
      input: {
        /** The upstream response format: json for structured data or md for Markdown text; defaults to json. Markdown may contain only the important schema fields. */
        responseFormat?: "json" | "md";
        /** Restrict the result to these worksheet IDs. */
        worksheets?: Array<string>;
      };
      output: {
        /** The worksheet list or requested Markdown text. */
        data: Array<{
          /** The worksheet ID. */
          id?: string;
          /** The worksheet name. */
          name?: string;
          /** The worksheet remark. */
          remark?: string;
          [key: string]: unknown;
        }> | string;
      };
    };
    /** Look up departments in the Mingdao application's organization, optionally matching an exact department name. */
    "mingdao.lookup_departments": {
      input: {
        /** The user or department name to match exactly. */
        name?: string;
        /** The organization ID. Optional with AppKey and Sign; omitting it uses the application's organization. */
        orgId?: string;
      };
      output: {
        /** The department lookup result. */
        data: {
          /** The matching departments. */
          departments?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Look up users in the Mingdao application's organization, optionally matching an exact user name. */
    "mingdao.lookup_users": {
      input: {
        /** The user or department name to match exactly. */
        name?: string;
        /** The organization ID. Optional with AppKey and Sign; omitting it uses the application's organization. */
        orgId?: string;
      };
      output: {
        /** The user lookup result. */
        data: {
          /** The matching users. */
          users?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Aggregate Mingdao worksheet records into a pivot table with grouping dimensions, filters, sorting and optional summary totals. */
    "mingdao.pivot_records": {
      input: {
        /**
         * The Mingdao worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /**
         * The page size, at most 1000.
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * The one-based page index.
         * @minimum 1
         */
        pageIndex?: number;
        /** The view ID. */
        viewId?: string;
        /** The column grouping dimensions. */
        columns?: Array<{
          /** The field ID. */
          field: string;
          /** The display name for this dimension. */
          displayName?: string;
          /** Grouping granularity for dates (1 day, 2 week, 3 month) or regions (1 province, 2 province/city, 3 province/city/district). */
          granularity?: number;
          /** Whether to include empty values; defaults to false. */
          includeEmpty?: boolean;
        }>;
        /** The row grouping dimensions. */
        rows?: Array<{
          /** The field ID. */
          field: string;
          /** The display name for this dimension. */
          displayName?: string;
          /** Grouping granularity for dates (1 day, 2 week, 3 month) or regions (1 province, 2 province/city, 3 province/city/district). */
          granularity?: number;
          /** Whether to include empty values; defaults to false. */
          includeEmpty?: boolean;
        }>;
        /** The values to aggregate. */
        values: Array<{
          /** The field ID, or record_count to count records. */
          field: string;
          /** The measure display name. */
          displayName?: string;
          /** The aggregation function: COUNT, DISTINCTCOUNT, SUM, MIN, MAX or AVG. Function names are case-insensitive. */
          aggregation: string;
          /** Whether to include empty values; defaults to false, with empty values displayed as zero. */
          includeEmpty?: boolean;
        }>;
        /** A recursive Mingdao filter. A condition requires type=condition, field and operator; value is required except for isempty and isnotempty. A group requires type=group, logic (AND or OR, case-insensitive) and nested children. Operators and values depend on worksheet field types. */
        filter?: {
          operator?: "isempty" | "isnotempty";
          [key: string]: unknown;
        } | Record<string, unknown> | {
          type?: "group";
          [key: string]: unknown;
        };
        /** The ordered pivot sort rules. */
        sorts?: Array<{
          /** The field ID. */
          field: string;
          /** Whether to sort ascending. */
          isAsc: boolean;
        }>;
        /** Whether to include summary values over all rows. */
        includeSummary?: boolean;
      };
      output: {
        /** The pivot result. */
        data: {
          /** The selected column, row and value definitions. */
          meta?: Record<string, unknown>;
          /** The pivot data rows. */
          pivot?: Array<Record<string, unknown>>;
          /** The summary values keyed by field ID. */
          summary?: Record<string, unknown>;
          /** The total number of pages. */
          totalPages?: number;
          /** The current page index. */
          currentPage?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Remove users, departments, department trees, jobs or organization roles from an application role. */
    "mingdao.remove_role_members": {
      input: {
        /**
         * The application role ID.
         * @minLength 1
         */
        roleId: string;
        /** The user IDs. */
        userIds?: Array<string>;
        /** The department IDs. */
        departmentIds?: Array<string>;
        /** The department tree IDs, including their child departments. */
        departmentTreeIds?: Array<string>;
        /** The job IDs. */
        jobIds?: Array<string>;
        /** The organization role IDs to remove. */
        orgRoleIds?: Array<string>;
      };
      output: {
        /** The upstream operation result, including any partial-success details. */
        data: Record<string, unknown>;
      };
    };
    /** Remove a user from every role in the connected application. */
    "mingdao.remove_user_from_all_roles": {
      input: {
        /**
         * The user ID to remove from all application roles.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** The upstream operation result, including any partial-success details. */
        data: Record<string, unknown>;
      };
    };
    /** Search Mingdao knowledge content using vector, keyword or hybrid retrieval. Knowledge bases with different embedding models must be searched in separate calls. */
    "mingdao.search_knowledge": {
      input: {
        /** The knowledge base IDs; an empty array selects all knowledge bases. */
        knowledgeIds: Array<string>;
        /** The text to search for. */
        query: string;
        /** The retrieval mode: vector for semantic search, keyword for full-text search, or hybrid for both. */
        searchMode: "vector" | "keyword" | "hybrid";
        /**
         * The maximum number of matches, at least 1; defaults to 10.
         * @minimum 1
         */
        topK?: number;
        /**
         * The minimum vector-search relevance score from 0 to 1; applies only to vector mode.
         * @minimum 0
         * @maximum 1
         */
        minRelevance?: number;
        /** The reciprocal rank fusion k parameter; applies only to hybrid mode and defaults to 60. */
        rrfK?: number;
        /** Optional worksheet and content-type restrictions. */
        filter?: {
          /** Restrict the search to these worksheet IDs. */
          worksheetIds?: Array<string>;
          /** The content types to search; omitting this field searches all types. */
          types?: Array<"record" | "record_attachment" | "discussion_attachment" | "discussion">;
        };
      };
      output: {
        /** The knowledge search results. */
        data: {
          /** The matching content chunks. */
          chunks?: Array<{
            /** The ranking score. */
            score?: number;
            /** The source knowledge base ID. */
            knowledgeId?: string;
            /** The source knowledge base name. */
            knowledgeName?: string;
            /** The unique content chunk ID. */
            chunkId?: string;
            /** The matching text content. */
            content?: string;
            /** The content type: record, record_attachment, discussion_attachment or discussion. */
            type?: string;
            /**
             * The record ID.
             * @minLength 1
             */
            rowId?: string;
            /** The application ID. */
            appId?: string;
            /**
             * The worksheet ID.
             * @minLength 1
             */
            worksheetId?: string;
            /** The worksheet name. */
            worksheetName?: string;
            /** The field ID for an attachment match. */
            field?: string;
            /** The field name for an attachment match. */
            fieldName?: string;
            /** The last update time. */
            updatedAt?: string;
            /** The record title. */
            recordTitle?: string;
            /** The attachment ID, when the match is from an attachment. */
            attachmentId?: string;
            /** The attachment name, when the match is from an attachment. */
            attachmentName?: string;
            /** The match type: raw for an original chunk, enhanced for an enhanced chunk. */
            match?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Trigger an existing Mingdao workflow with its defined parameters. Its configured steps may update or delete business data; the returned result does not imply that all downstream work has completed. */
    "mingdao.trigger_workflow": {
      input: {
        /**
         * The existing Mingdao workflow process ID.
         * @minLength 1
         */
        processId: string;
        /** The dynamic input values keyed by the workflow parameter aliases returned by get_workflow. Use an empty object when no parameters are required. */
        parameters: Record<string, unknown>;
      };
      output: {
        /** The dynamic output values defined by this workflow. */
        data: Record<string, unknown>;
      };
    };
    /** Replace the complete custom-page component layout, including inline charts, views, tabs, containers and filter groups. */
    "mingdao.update_custom_page": {
      input: {
        /** The custom page ID. */
        pageId: string;
        /** The complete replacement component list on a 48-column grid. Components sharing y must have the same height; x+w cannot exceed 48. Attachment and iframe content use accessible URLs, not local files or base64. */
        components: Array<{
          /** The page component type. Charts are created inline; existing chart IDs cannot be mounted. */
          componentType: "chart" | "section" | "text" | "html" | "view" | "carousel" | "button" | "tab" | "container" | "filtersGroup";
          /** Required title for section and chart components only; other component types use config fields. */
          name?: string;
          /** A unique caller-generated UUID for tab or container only; omit for every other component type, including chart. */
          componentId?: string;
          /** The parent container componentId for container children only; mutually exclusive with parentTabId. */
          parentSectionId?: string;
          /** The target config.tabs[].tabId for tab children only; mutually exclusive with parentSectionId. */
          parentTabId?: string;
          /** The component position and dimensions on the 48-column grid. */
          position: {
            /** The zero-based starting column; x+w must not exceed 48. */
            x: number;
            /** The zero-based starting row. */
            y: number;
            /** The width in columns; full width is 48. */
            w: number;
            /** The height in rows; components at the same y must have the same height. */
            h: number;
            [key: string]: unknown;
          };
          /** Type-specific component configuration: chart creates inline charts; text requires content; html url; view worksheetId/viewId/objectId; carousel worksheetId/viewId/image/count; button count/mobileCount/buttons; tab tabs and a top-level componentId; container top-level componentId; filtersGroup filters and objectControls mappings. */
          config?: {
            /** The component title, or the carousel title field ID. */
            title?: string;
            /** Required rich-text HTML for text components. */
            content?: string;
            /** The HTTP(S) iframe URL for html components, or the link field ID for carousel action=2. */
            url?: string;
            /** The worksheet ID or alias. */
            worksheetId?: string;
            /** The view ID. */
            viewId?: string;
            /** A unique caller-generated UUID for chart/view components, matching filtersGroup objectControls references; do not use a chart ID or view ID. */
            objectId?: string;
            /** The chart type: columnChart, barChart, lineChart, pieChart, radarChart, funnelChart, dualAxisChart, pivotTable, regionMap, numberChart, symmetricBarChart, scatterChart, wordCloud, gaugeChart, progressChart, rankingChart or worldMap. Trends use time dimensions; maps require geographic fields. Dual/symmetric charts need one values and one rightValues metric; pivotTable needs rows, columns and values; progressChart needs matching targetValues; gaugeChart needs gaugeMin/gaugeMax. */
            chartType?: string;
            /** The data permission scope: permission for visible data or all for all data. */
            dataScope?: string;
            /** The time filter field ID; inline page charts default to ctime. */
            timeFieldId?: string;
            /** The time range: all, today, yesterday, tomorrow, currentWeek, lastWeek, nextWeek, currentMonth, lastMonth, nextMonth, currentQuarter, lastQuarter, nextQuarter, currentYear, lastYear, nextYear, firstHalfYear, secondHalfYear, last7Days, last30Days, last365Days, next7Days, next30Days, next365Days, customDynamicRange or customRange. Inline page charts default to currentMonth. */
            timeRange?: string;
            /** The dynamic date range for timeRange=customDynamicRange. from/to use type today, currentMonth, currentYear, past or future; past/future require value and unit day/week/month/year. */
            customDynamicRange?: Record<string, unknown>;
            /** The explicit date range for timeRange=customRange. */
            customRange?: Record<string, unknown>;
            /** Non-pivot dimensions: category/time/geographic fields, first for X-axis and second for series. Maps require genuine geographic fields. */
            dimension?: Array<Record<string, unknown>>;
            /** The pivotTable row dimensions. */
            rows?: Array<Record<string, unknown>>;
            /** The pivotTable column dimensions. */
            columns?: Array<Record<string, unknown>>;
            /** The numeric or rowid metrics to aggregate; rowid represents record count. */
            values?: Array<Record<string, unknown>>;
            /** The secondary metrics; dualAxisChart and symmetricBarChart require exactly one secondary and one primary metric. */
            rightValues?: Array<Record<string, unknown>>;
            /** The target metrics for progressChart, matching values in count and order. */
            targetValues?: Array<Record<string, unknown>>;
            /** The gaugeChart minimum as a string; required for gauges. */
            gaugeMin?: string;
            /** The gaugeChart maximum as a string; required for gauges. */
            gaugeMax?: string;
            /** The regionMap scope: country, province or city. */
            mapScope?: "country" | "province" | "city";
            /** The 6-digit region code for regionMap. Province codes end in 0000; city codes end in 00. Omit for country; municipalities and special administrative regions use city-level scope even under province. */
            mapRegionCode?: string;
            /** The filter-group ID; use an empty string for a new group. */
            filtersGroupId?: string;
            /** Required title for section and chart components only; other component types use config fields. */
            name?: string;
            /** Whether to enable the filter button. */
            enableBtn?: boolean;
            /** The filter-group definitions, including objectControls mappings to chart/view objectId values. */
            filters?: Array<Record<string, unknown>>;
            /** The application ID. */
            appId?: string;
            /** The custom page ID. */
            customPageId?: string;
            /** The recursive filter whose root must be a group with logic AND/OR. At most group->group->condition nesting; siblings must all be groups or all conditions. Use option keys and related/member/department/role IDs, not names. isempty/isnotempty omit value. */
            filter?: Record<string, unknown>;
            /** The chart sorting rules. */
            sorts?: Array<Record<string, unknown>>;
            /** The maximum result count; recommended for ranking and word-cloud charts. */
            limit?: number;
            /** The attachment field ID used for carousel images. */
            image?: string;
            /** The carousel subtitle field ID. */
            subTitle?: string;
            /** Required for carousel (record count, default 5) and button (desktop buttons per row, default 6). */
            count?: number;
            /** The configured action code: carousel 1 opens record, 2 opens link, 3 previews image; button entries support simple navigation 1 through 4 only. */
            action?: number;
            /** Carousel link opening: 1 current page, 2 new page, 3 dialog. */
            openMode?: number;
            /** The explanation above a button group. */
            explain?: string;
            /** Button style: 1 filled rectangle, 2 rounded rectangle, 3 dashed. */
            style?: number;
            /** Button width: 1 fit text, 2 split the row evenly. */
            width?: number;
            /** Required mobile buttons per row for button components; default 2. */
            mobileCount?: number;
            /** The button definitions; at least one, supporting action codes 1 through 4 only. */
            buttons?: Array<Record<string, unknown>>;
            /** The tab definitions; at least one, each with a globally unique caller-generated tabId UUID. */
            tabs?: Array<Record<string, unknown>>;
            /** Whether to display the tab or container title. */
            showName?: boolean;
            /** Tab/container display: 1 transparent or 2 card. */
            showType?: number;
            /** Whether to display the component border. */
            showBorder?: boolean;
            /** Tab/container height: 1 adaptive or 2 fixed. */
            heightType?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The operation result. */
        data: {
          /** The upstream page ID. */
          page_id?: string;
          /** The saved page components. */
          components?: Array<{
            /** The returned component ID. */
            componentId?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Update an option set's name, keyed options, order, colors and scores. */
    "mingdao.update_optionset": {
      input: {
        /**
         * The option set ID.
         * @minLength 1
         */
        optionsetId: string;
        /** The option set name. */
        name: string;
        /** The updated options. */
        options: Array<{
          /** The existing option key. */
          key: string;
          /** The option value; values must not be duplicated. */
          value: string;
          /** The integer sort order; smaller values come first. */
          index: number;
          /** The option color, effective when enableColor is true. */
          color: string;
          /** The option score, effective when enableScore is true; decimals and negative values are supported. */
          score?: number;
        }>;
        /** Whether to enable option colors. */
        enableColor: boolean;
        /** Whether to enable option scores. */
        enableScore: boolean;
      };
      output: {
        /** The upstream operation result, including any partial-success details. */
        data: Record<string, unknown>;
      };
    };
    /** Update a Mingdao worksheet record, replacing, adding or removing supported field values. */
    "mingdao.update_record": {
      input: {
        /**
         * The Mingdao worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /**
         * The Mingdao record ID.
         * @minLength 1
         */
        rowId: string;
        /** The field values to write. */
        fields: Array<{
          /**
           * The field ID or alias.
           * @minLength 1
           */
          id: string;
          /** The value in the worksheet field format. Attachment values use accessible URLs, for example [{"name":"report.pdf","url":"https://example.com/report.pdf"}]; do not pass local files or inline base64. Attachment removal uses file IDs. */
          value: unknown;
          /** For updates to attachments, multiple selections, collaborators, departments, relations, subtables or organization roles: 0 replaces, 1 adds, 2 removes. Defaults to 0; omit for creation. */
          updateType?: "0" | "1" | "2";
          /** Whether single-select or multiple-select values may create missing options. */
          allowNewOptions?: boolean;
        }>;
        /** Whether this record mutation triggers configured workflows. */
        triggerWorkflow?: boolean;
      };
      output: {
        /** The record mutation result. */
        data: {
          /** The created or updated record ID. */
          id?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update worksheet metadata and add, edit or delete fields. */
    "mingdao.update_worksheet": {
      input: {
        /** The worksheet ID or alias. */
        worksheetId: string;
        /** The display name. */
        name?: string;
        /** The worksheet or field alias. */
        alias?: string;
        /** The description displayed to users. */
        remark?: string;
        /** The navigation section ID; omitted application items use the first available section. */
        sectionId?: string;
        /** The fields to add; type is an integer code for updates. */
        addFields?: Array<{
          /** The display name. */
          name: string;
          /** The field type: creation uses a string (named type such as Text/Relation or documented numeric string codes such as 2/6/11); worksheet updates use integer codes. */
          type: number;
          /** The worksheet or field alias. */
          alias?: string;
          /** The description displayed to users. */
          remark?: string;
          /** The field explanation. */
          desc?: string;
          /** Whether the field is required. */
          required?: boolean;
          /** Whether this field is the record title. */
          isTitle?: boolean;
          /** Whether to hide the field. */
          isHidden?: boolean;
          /** Whether the field is read-only. */
          isReadOnly?: boolean;
          /** Whether to hide the field when creating a record. */
          isHiddenOnCreate?: boolean;
          /** Whether the field value must be unique. */
          isUnique?: boolean;
          /**
           * The decimal precision for Number fields, from 0 to 14.
           * @minimum 0
           * @maximum 14
           */
          precision?: number;
          /** Field subtype: Collaborator 0 single or 1 multiple; Relation 1 single or 2 multiple; Time 1 hours/minutes or 6 hours/minutes/seconds; Date/DateTime 5 year, 4 month, 3 day, 2 hour, 1 minute, 6 second precision. */
          subType?: string;
          /** Selection options for SingleSelect or MultipleSelect fields. */
          options?: Array<{
            /** The configured value. */
            value: string;
            /** The option order. */
            index: number;
            [key: string]: unknown;
          }>;
          /** Relation settings; showFields selects displayed fields and bidirectional enables two-way links. */
          relation?: {
            /** The related worksheet fields to display. */
            showFields?: Array<string>;
            /** Whether the relation is bidirectional. */
            bidirectional?: boolean;
            [key: string]: unknown;
          };
          /**
           * The maximum rating from 0 to 10 for Rating fields.
           * @minimum 0
           * @maximum 10
           */
          max?: number;
          /** The already-created related worksheet ID for Relation fields. */
          dataSource?: string;
          /** An existing one-way relation field ID in dataSource to link bidirectionally; omit when creating a new relation. */
          sourceField?: string;
          [key: string]: unknown;
        }>;
        /** The fields to edit, identified by required id; all other field properties are optional. */
        editFields?: Array<{
          /** The upstream item ID or field alias. */
          id: string;
          /** The display name. */
          name?: string;
          /** The field type: creation uses a string (named type such as Text/Relation or documented numeric string codes such as 2/6/11); worksheet updates use integer codes. */
          type?: number;
          /** The worksheet or field alias. */
          alias?: string;
          /** The description displayed to users. */
          remark?: string;
          /** The field explanation. */
          desc?: string;
          /** Whether the field is required. */
          required?: boolean;
          /** Whether this field is the record title. */
          isTitle?: boolean;
          /** Whether to hide the field. */
          isHidden?: boolean;
          /** Whether the field is read-only. */
          isReadOnly?: boolean;
          /** Whether to hide the field when creating a record. */
          isHiddenOnCreate?: boolean;
          /** Whether the field value must be unique. */
          isUnique?: boolean;
          /**
           * The decimal precision for Number fields, from 0 to 14.
           * @minimum 0
           * @maximum 14
           */
          precision?: number;
          /** Field subtype: Collaborator 0 single or 1 multiple; Relation 1 single or 2 multiple; Time 1 hours/minutes or 6 hours/minutes/seconds; Date/DateTime 5 year, 4 month, 3 day, 2 hour, 1 minute, 6 second precision. */
          subType?: string;
          /** Selection options for SingleSelect or MultipleSelect fields. */
          options?: Array<{
            /** The configured value. */
            value: string;
            /** The option order. */
            index: number;
            [key: string]: unknown;
          }>;
          /** Relation settings; showFields selects displayed fields and bidirectional enables two-way links. */
          relation?: {
            /** The related worksheet fields to display. */
            showFields?: Array<string>;
            [key: string]: unknown;
          };
          /**
           * The maximum rating from 0 to 10 for Rating fields.
           * @minimum 0
           * @maximum 10
           */
          max?: number;
          /** The already-created related worksheet ID for Relation fields. */
          dataSource?: string;
          /** An existing one-way relation field ID in dataSource to link bidirectionally; omit when creating a new relation. */
          sourceField?: string;
          [key: string]: unknown;
        }>;
        /** The field IDs to delete. */
        removeFields?: Array<string>;
      };
      output: {
        /** The operation result. */
        data: Record<string, unknown>;
      };
    };
  }
}
