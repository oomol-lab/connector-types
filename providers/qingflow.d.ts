import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a comment to one Qingflow business-data record. */
    "qingflow.add_record_comment": {
      input: {
        /**
         * The Qingflow application key shown in the application URL.
         * @minLength 1
         */
        appKey: string;
        /** The Qingflow application-data record ID. */
        applyId: number | string;
        /**
         * The Qingflow member external user ID.
         * @minLength 1
         */
        userId?: string;
        /**
         * The comment message.
         * @minLength 1
         */
        message: string;
        /** External member user IDs mentioned by the comment. */
        mentionUserIds?: Array<string>;
      };
      output: {
        /** The created comment and its provider-assigned ID. */
        comment: Record<string, unknown>;
      };
    };
    /** Create one business-data record in a Qingflow application and return its asynchronous request ID. */
    "qingflow.create_record": {
      input: {
        /**
         * The Qingflow application key shown in the application URL.
         * @minLength 1
         */
        appKey: string;
        /**
         * The Qingflow member external user ID.
         * @minLength 1
         */
        userId?: string;
        /** The Qingflow member identity used to submit the record. */
        applyUser?: {
          /**
           * The applicant email address.
           * @format email
           */
          email: string;
          /** The applicant phone-number area code. */
          areaCode?: string;
          /** The applicant mobile number. */
          mobile?: string;
        };
        /** Field answers used to create the Qingflow record. */
        answers?: Array<{
          /** The Qingflow field ID, including supported special field IDs. */
          queId: number;
          /** The Qingflow field title. */
          queTitle?: string;
          /** The Qingflow field type code. */
          queType: number;
          /** Values assigned to this field. */
          values?: Array<{
            /** The field value represented as text. */
            value?: string;
            /** The data value returned or accepted for this field type. */
            dataValue?: string;
            /** Additional field-type-specific information, such as an attachment name. */
            otherInfo?: string;
            /** An option, member, address-part, or related-record identifier. */
            id?: number | string;
            /** The external member or option identifier for supported field types. */
            optionId?: string;
            /** The row ordinal used by table fields. */
            ordinal?: string;
            [key: string]: unknown;
          }>;
          /** Rows assigned to a Qingflow table field. */
          tableValues?: Array<Array<{
            /** The Qingflow field ID, including supported special field IDs. */
            queId: number;
            /** The Qingflow field title. */
            queTitle?: string;
            /** The Qingflow field type code. */
            queType: number;
            /** Values assigned to this field. */
            values?: Array<{
              /** The field value represented as text. */
              value?: string;
              /** The data value returned or accepted for this field type. */
              dataValue?: string;
              /** Additional field-type-specific information, such as an attachment name. */
              otherInfo?: string;
              /** An option, member, address-part, or related-record identifier. */
              id?: number | string;
              /** The external member or option identifier for supported field types. */
              optionId?: string;
              /** The row ordinal used by table fields. */
              ordinal?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The request ID used to inspect asynchronous processing results. */
        requestId: string;
        /** The created or affected record ID when Qingflow returns it immediately. */
        applyId?: string;
        /** The created or affected record IDs returned for a batch operation. */
        applyIds?: Array<string>;
      };
    };
    /** Find Qingflow workspace member IDs by email address or mobile number. */
    "qingflow.find_members": {
      input: {
        /**
         * The member email address.
         * @format email
         */
        email?: string;
        /**
         * The member mobile number.
         * @minLength 1
         */
        mobile?: string;
      };
      output: {
        /** Member identity matches returned by Qingflow. */
        items: Array<Record<string, unknown>>;
        /**
         * The number of matching member identities.
         * @minimum 0
         */
        totalCount: number;
      };
    };
    /** Get one Qingflow department by department ID. */
    "qingflow.get_department": {
      input: {
        /** The Qingflow department ID. */
        departmentId: number | string;
      };
      output: {
        /** The Qingflow department and its hierarchy metadata. */
        department: Record<string, unknown>;
      };
    };
    /** Get the current form fields, options, and field metadata for a Qingflow application. */
    "qingflow.get_form": {
      input: {
        /**
         * The Qingflow application key shown in the application URL.
         * @minLength 1
         */
        appKey: string;
        /**
         * The Qingflow member external user ID.
         * @minLength 1
         */
        userId?: string;
      };
      output: {
        /** The Qingflow form and its provider-defined field metadata. */
        form: Record<string, unknown>;
        /** Data-association rules returned with the Qingflow form. */
        questionRelations: Array<Record<string, unknown>>;
      };
    };
    /** Get one Qingflow workspace member by external user ID. */
    "qingflow.get_member": {
      input: {
        /**
         * The Qingflow member external user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** The Qingflow member and their workspace metadata. */
        member: Record<string, unknown>;
      };
    };
    /** Get Qingflow's processing result for a create, update, or other asynchronous request. */
    "qingflow.get_operation_result": {
      input: {
        /**
         * The request ID returned by a Qingflow mutation.
         * @minLength 1
         */
        requestId: string;
      };
      output: {
        /** The provider-defined result for this asynchronous operation. */
        result: unknown;
        /** Provider-defined member details for an asynchronous member operation. */
        memberInfo?: unknown;
        /** Members processed successfully by an asynchronous member operation. */
        successUsers?: Array<Record<string, unknown>>;
        /** Members that failed in an asynchronous member operation. */
        errorUsers?: Array<Record<string, unknown>>;
      };
    };
    /** Get one Qingflow business-data record and its current field answers. */
    "qingflow.get_record": {
      input: {
        /**
         * The Qingflow application key shown in the application URL.
         * @minLength 1
         */
        appKey: string;
        /** The Qingflow application-data record ID. */
        applyId: number | string;
      };
      output: {
        /** The Qingflow record, field answers, and current workflow metadata. */
        record: Record<string, unknown>;
      };
    };
    /** List Qingflow applications visible to the workspace or one specified member. */
    "qingflow.list_apps": {
      input: {
        /**
         * The Qingflow member external user ID.
         * @minLength 1
         */
        userId?: string;
        /** Whether to return only applications favorited by the member. */
        favoritesOnly?: boolean;
      };
      output: {
        /** Qingflow application records available to the connected token. */
        items: Array<Record<string, unknown>>;
        /**
         * The number of applications returned.
         * @minimum 0
         */
        totalCount: number;
      };
    };
    /** List Qingflow departments, optionally rooted at one department. */
    "qingflow.list_departments": {
      input: {
        /** The Qingflow department ID. */
        departmentId?: number | string;
      };
      output: {
        /** Qingflow departments in the requested tree. */
        items: Array<Record<string, unknown>>;
        /**
         * The number of departments returned.
         * @minimum 0
         */
        totalCount: number;
      };
    };
    /** List members in the connected Qingflow workspace. */
    "qingflow.list_members": {
      input: {
        /**
         * The one-based page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        pageNumber?: number;
        /**
         * The number of items requested for this page.
         * @maximum 200
         * @exclusiveMinimum 0
         * @default 50
         */
        pageSize?: number;
      };
      output: {
        /** Items in the returned page. */
        items: Array<Record<string, unknown>>;
        /**
         * The page number returned by Qingflow.
         * @exclusiveMinimum 0
         */
        pageNumber: number;
        /**
         * The page size returned by Qingflow.
         * @exclusiveMinimum 0
         */
        pageSize: number;
        /**
         * The total number of available pages.
         * @minimum 0
         */
        pageCount: number;
        /**
         * The total number of matching items.
         * @minimum 0
         */
        totalCount: number;
      };
    };
    /** List data-change logs for one Qingflow record, optionally filtered by field. */
    "qingflow.list_record_change_logs": {
      input: {
        /**
         * The Qingflow application key shown in the application URL.
         * @minLength 1
         */
        appKey: string;
        /** The Qingflow application-data record ID. */
        applyId: number | string;
        /** The Qingflow field ID whose changes should be returned. */
        fieldId?: number;
        /**
         * The one-based page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        pageNumber?: number;
        /**
         * The number of items requested for this page.
         * @maximum 200
         * @exclusiveMinimum 0
         * @default 50
         */
        pageSize?: number;
      };
      output: {
        /** Items in the returned page. */
        items: Array<Record<string, unknown>>;
        /**
         * The page number returned by Qingflow.
         * @exclusiveMinimum 0
         */
        pageNumber: number;
        /**
         * The page size returned by Qingflow.
         * @exclusiveMinimum 0
         */
        pageSize: number;
        /**
         * The total number of available pages.
         * @minimum 0
         */
        pageCount: number;
        /**
         * The total number of matching items.
         * @minimum 0
         */
        totalCount: number;
      };
    };
    /** List comments attached to one Qingflow business-data record. */
    "qingflow.list_record_comments": {
      input: {
        /**
         * The Qingflow application key shown in the application URL.
         * @minLength 1
         */
        appKey: string;
        /** The Qingflow application-data record ID. */
        applyId: number | string;
        /**
         * The one-based page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        pageNumber?: number;
        /**
         * The number of items requested for this page.
         * @maximum 200
         * @exclusiveMinimum 0
         * @default 50
         */
        pageSize?: number;
      };
      output: {
        /** Items in the returned page. */
        items: Array<Record<string, unknown>>;
        /**
         * The page number returned by Qingflow.
         * @exclusiveMinimum 0
         */
        pageNumber: number;
        /**
         * The page size returned by Qingflow.
         * @exclusiveMinimum 0
         */
        pageSize: number;
        /**
         * The total number of available pages.
         * @minimum 0
         */
        pageCount: number;
        /**
         * The total number of matching items.
         * @minimum 0
         */
        totalCount: number;
      };
    };
    /** List and filter business-data records from one Qingflow application. */
    "qingflow.list_records": {
      input: {
        /**
         * The Qingflow application key shown in the application URL.
         * @minLength 1
         */
        appKey: string;
        /**
         * The Qingflow member external user ID.
         * @minLength 1
         */
        userId?: string;
        /**
         * The one-based page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        pageNumber?: number;
        /**
         * The number of items requested for this page.
         * @maximum 200
         * @exclusiveMinimum 0
         * @default 50
         */
        pageSize?: number;
        /** The Qingflow record scope: pending records or all records. */
        type?: 1 | 8;
        /** Field-level record sort rules. */
        sorts?: Array<{
          /** The Qingflow field ID, including supported special field IDs. */
          queId: number;
          /** Whether this field is sorted in ascending order. */
          isAscend: boolean;
        }>;
        /** The relationship between field queries. */
        queriesRelation?: "and" | "or";
        /** Field-level record filters. */
        queries?: Array<{
          /** The Qingflow field ID, including supported special field IDs. */
          queId: number;
          /** A single keyword matched against this field. */
          searchKey?: string;
          /** Alternative keywords matched with OR semantics. */
          searchKeys?: Array<string>;
          /** The inclusive minimum number or earliest date value. */
          minValue?: string;
          /** The inclusive maximum number or latest date value. */
          maxValue?: string;
          /**
           * Whether matching records may contain any, filled, or empty field values.
           * @minimum 1
           * @maximum 3
           */
          scope?: number;
          /** Selection option IDs that must appear in the field answer. */
          searchOptions?: Array<number>;
          /** External member user IDs that must appear in a member-field answer. */
          searchUserIds?: Array<string>;
        }>;
        /** A keyword matched across all searchable fields. */
        queryKey?: string;
        /** Record IDs used to restrict the result set. */
        applyIds?: Array<number | string>;
      };
      output: {
        /** Items in the returned page. */
        items: Array<Record<string, unknown>>;
        /**
         * The page number returned by Qingflow.
         * @exclusiveMinimum 0
         */
        pageNumber: number;
        /**
         * The page size returned by Qingflow.
         * @exclusiveMinimum 0
         */
        pageSize: number;
        /**
         * The total number of available pages.
         * @minimum 0
         */
        pageCount: number;
        /**
         * The total number of matching items.
         * @minimum 0
         */
        totalCount: number;
      };
    };
    /** List roles in the connected Qingflow workspace. */
    "qingflow.list_roles": {
      input: Record<string, never>;
      output: {
        /** Qingflow workspace roles. */
        items: Array<Record<string, unknown>>;
        /**
         * The number of roles returned.
         * @minimum 0
         */
        totalCount: number;
      };
    };
    /** List workflow-node processing logs for one Qingflow record. */
    "qingflow.list_workflow_logs": {
      input: {
        /**
         * The Qingflow application key shown in the application URL.
         * @minLength 1
         */
        appKey: string;
        /** The Qingflow application-data record ID. */
        applyId: number | string;
        /**
         * The one-based page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        pageNumber?: number;
        /**
         * The number of items requested for this page.
         * @maximum 200
         * @exclusiveMinimum 0
         * @default 50
         */
        pageSize?: number;
      };
      output: {
        /** Items in the returned page. */
        items: Array<Record<string, unknown>>;
        /**
         * The page number returned by Qingflow.
         * @exclusiveMinimum 0
         */
        pageNumber: number;
        /**
         * The page size returned by Qingflow.
         * @exclusiveMinimum 0
         */
        pageSize: number;
        /**
         * The total number of available pages.
         * @minimum 0
         */
        pageCount: number;
        /**
         * The total number of matching items.
         * @minimum 0
         */
        totalCount: number;
      };
    };
    /** Submit, approve, reject, complete, or copy a Qingflow workflow node. */
    "qingflow.process_record": {
      input: {
        /**
         * The Qingflow application key shown in the application URL.
         * @minLength 1
         */
        appKey: string;
        /** The Qingflow application-data record ID. */
        applyId: number | string;
        /**
         * The Qingflow member external user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The workflow node ID being processed.
         * @exclusiveMinimum 0
         */
        auditNodeId: number;
        /** The workflow decision to apply. */
        decision: "submit" | "approve" | "reject" | "start" | "resubmit" | "cc";
        /** Optional workflow-processing feedback. */
        feedback?: string;
        /** Field answers changed while processing the workflow node. */
        answers?: Array<{
          /** The Qingflow field ID, including supported special field IDs. */
          queId: number;
          /** The Qingflow field title. */
          queTitle?: string;
          /** The Qingflow field type code. */
          queType: number;
          /** Values assigned to this field. */
          values?: Array<{
            /** The field value represented as text. */
            value?: string;
            /** The data value returned or accepted for this field type. */
            dataValue?: string;
            /** Additional field-type-specific information, such as an attachment name. */
            otherInfo?: string;
            /** An option, member, address-part, or related-record identifier. */
            id?: number | string;
            /** The external member or option identifier for supported field types. */
            optionId?: string;
            /** The row ordinal used by table fields. */
            ordinal?: string;
            [key: string]: unknown;
          }>;
          /** Rows assigned to a Qingflow table field. */
          tableValues?: Array<Array<{
            /** The Qingflow field ID, including supported special field IDs. */
            queId: number;
            /** The Qingflow field title. */
            queTitle?: string;
            /** The Qingflow field type code. */
            queType: number;
            /** Values assigned to this field. */
            values?: Array<{
              /** The field value represented as text. */
              value?: string;
              /** The data value returned or accepted for this field type. */
              dataValue?: string;
              /** Additional field-type-specific information, such as an attachment name. */
              otherInfo?: string;
              /** An option, member, address-part, or related-record identifier. */
              id?: number | string;
              /** The external member or option identifier for supported field types. */
              optionId?: string;
              /** The row ordinal used by table fields. */
              ordinal?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** Whether Qingflow completed the command successfully. */
        success: boolean;
      };
    };
    /** Reassign active approval or fill-in nodes on one Qingflow record. */
    "qingflow.reassign_record": {
      input: {
        /**
         * The Qingflow application key shown in the application URL.
         * @minLength 1
         */
        appKey: string;
        /** The Qingflow application-data record ID. */
        applyId: number | string;
        /**
         * Workflow nodes and their replacement member user IDs.
         * @minItems 1
         */
        reassignments: Array<{
          /**
           * The active workflow node ID to reassign.
           * @exclusiveMinimum 0
           */
          auditNodeId: number;
          /**
           * Replacement member user IDs.
           * @minItems 1
           */
          userIds: Array<number | string>;
        }>;
      };
      output: {
        /** The reassigned Qingflow record ID. */
        applyId: string;
      };
    };
    /** Roll one Qingflow record back to an allowed earlier workflow node. */
    "qingflow.rollback_record": {
      input: {
        /**
         * The Qingflow application key shown in the application URL.
         * @minLength 1
         */
        appKey: string;
        /** The Qingflow application-data record ID. */
        applyId: number | string;
        /**
         * The Qingflow member external user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The current workflow node ID.
         * @exclusiveMinimum 0
         */
        auditNodeId: number;
        /**
         * The workflow node ID to roll back to.
         * @exclusiveMinimum 0
         */
        targetAuditNodeId: number;
        /**
         * Rollback feedback with at most 200 characters.
         * @maxLength 200
         */
        feedback?: string;
      };
      output: {
        /** Whether Qingflow completed the command successfully. */
        success: boolean;
      };
    };
    /** Update selected field answers on one Qingflow record and return its asynchronous request ID. */
    "qingflow.update_record": {
      input: {
        /**
         * The Qingflow application key shown in the application URL.
         * @minLength 1
         */
        appKey: string;
        /** The Qingflow application-data record ID. */
        applyId: number | string;
        /** Field answers to update on the Qingflow record. */
        answers: Array<{
          /** The Qingflow field ID, including supported special field IDs. */
          queId: number;
          /** The Qingflow field title. */
          queTitle?: string;
          /** The Qingflow field type code. */
          queType: number;
          /** Values assigned to this field. */
          values?: Array<{
            /** The field value represented as text. */
            value?: string;
            /** The data value returned or accepted for this field type. */
            dataValue?: string;
            /** Additional field-type-specific information, such as an attachment name. */
            otherInfo?: string;
            /** An option, member, address-part, or related-record identifier. */
            id?: number | string;
            /** The external member or option identifier for supported field types. */
            optionId?: string;
            /** The row ordinal used by table fields. */
            ordinal?: string;
            [key: string]: unknown;
          }>;
          /** Rows assigned to a Qingflow table field. */
          tableValues?: Array<Array<{
            /** The Qingflow field ID, including supported special field IDs. */
            queId: number;
            /** The Qingflow field title. */
            queTitle?: string;
            /** The Qingflow field type code. */
            queType: number;
            /** Values assigned to this field. */
            values?: Array<{
              /** The field value represented as text. */
              value?: string;
              /** The data value returned or accepted for this field type. */
              dataValue?: string;
              /** Additional field-type-specific information, such as an attachment name. */
              otherInfo?: string;
              /** An option, member, address-part, or related-record identifier. */
              id?: number | string;
              /** The external member or option identifier for supported field types. */
              optionId?: string;
              /** The row ordinal used by table fields. */
              ordinal?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The request ID used to inspect asynchronous processing results. */
        requestId: string;
        /** The created or affected record ID when Qingflow returns it immediately. */
        applyId?: string;
        /** The created or affected record IDs returned for a batch operation. */
        applyIds?: Array<string>;
      };
    };
    /** Send a Qingflow reminder for one in-progress business-data record. */
    "qingflow.urge_record": {
      input: {
        /**
         * The Qingflow application key shown in the application URL.
         * @minLength 1
         */
        appKey: string;
        /** The Qingflow application-data record ID. */
        applyId: number | string;
        /**
         * The Qingflow member external user ID.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** The urged Qingflow record ID. */
        applyId: string;
      };
    };
  }
}
