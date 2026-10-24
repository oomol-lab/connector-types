import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Abort a Bulk query or ingest job created by the authorized user. */
    "salesforce.cancel_bulk_job": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /** Bulk job handle; preserve the API version and job kind. */
        handle: {
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          jobId: string;
          /** Bulk job kind. */
          kind: "query" | "ingest";
          /**
           * API version returned by the submit action; required when reusing a handle.
           * @pattern ^[0-9]+\.[0-9]+$
           */
          apiVersion: string;
        };
      };
      output: {
        /** Bulk job handle; preserve the API version and job kind. */
        handle: {
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          jobId: string;
          /** Bulk job kind. */
          kind: "query" | "ingest";
          /**
           * API version returned by the submit action; required when reusing a handle.
           * @pattern ^[0-9]+\.[0-9]+$
           */
          apiVersion: string;
        };
        /** Salesforce job state. */
        state: string;
        /** Full Salesforce job information, including failure counts and errorMessage. */
        job: Record<string, unknown>;
        /** Downloaded file hosted by OOMOL file transit. */
        result?: {
          /** Temporary download URL. */
          transitUrl: string;
          /** File name. */
          name: string;
          /** File media type. */
          mimeType: string;
          /** Downloaded file size in bytes. */
          sizeBytes: number;
        };
        /** Locator for the next CSV page; null when finished. */
        nextLocator?: string | null;
        /** Number of records in this CSV page. */
        numberOfRecords?: number;
      };
    };
    /** Clone an accessible report with optional metadata overrides such as name and folderId. */
    "salesforce.clone_report": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        reportId: string;
        /** Report definition including reportType, name, folderId, detailColumns, filters, groupings and formulas. Use describe_report to discover supported metadata. */
        reportMetadata?: {
          /**
           * Report name, up to 40 characters.
           * @minLength 1
           * @maxLength 40
           */
          name?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** Report definition including reportType, name, folderId, detailColumns, filters, groupings and formulas. Use describe_report to discover supported metadata. */
        reportMetadata: {
          /**
           * Report name, up to 40 characters.
           * @minLength 1
           * @maxLength 40
           */
          name?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Convert up to 100 Leads using native Salesforce conversion. Query LeadStatus for a valid convertedStatus. Inspect each result for partial failures. Queue-owned leads require an explicit user ownerId. */
    "salesforce.convert_leads": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Ordered lead conversions.
         * @minItems 1
         * @maxItems 100
         */
        conversions: Array<{
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          leadId: string;
          /**
           * Converted LeadStatus label chosen by the caller.
           * @minLength 1
           */
          convertedStatus: string;
          /**
           * Existing target Account ID, including an existing Person Account.
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          accountId?: string;
          /**
           * Existing Contact ID belonging to accountId; do not set for a Person Account.
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          contactId?: string;
          /**
           * Existing Opportunity ID; mutually exclusive with opportunityName and doNotCreateOpportunity=true.
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          opportunityId?: string;
          /**
           * New opportunity name; omit to use the lead company name.
           * @maxLength 80
           */
          opportunityName?: string;
          /** Skip opportunity creation when true; incompatible with opportunityId and opportunityName. */
          doNotCreateOpportunity?: boolean;
          /** Overwrite the existing contact LeadSource; requires contactId when true. */
          overwriteLeadSource?: boolean;
          /**
           * User ID to own newly created records; required for queue-owned leads.
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          ownerId?: string;
          /**
           * Existing Person Account when converting to a business account and a Person Account instead of a contact.
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          relatedPersonAccountId?: string;
          /** New Person Account entity when converting to a business account and a Person Account instead of a contact. */
          relatedPersonAccountRecord?: {
            /** Writable Person Account field API names and scalar values. */
            fields: Record<string, string | number | boolean | null>;
          };
          /** Send a notification email to the specified owner when true. */
          sendNotificationEmail?: boolean;
        }>;
      };
      output: {
        /** One result per conversion. */
        results: Array<{
          /** Whether this lead converted successfully. */
          success: boolean;
          /**
           * Converted Lead ID, or null when Salesforce does not return an ID.
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          leadId?: string | null;
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          accountId?: string | null;
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          contactId?: string | null;
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          opportunityId?: string | null;
          /** Conversion errors. */
          errors: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Reply to a Chatter feed element with structured message segments and optional file, article or shared-feed capabilities. */
    "salesforce.create_chatter_comment": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Experience Cloud community ID; omit for the internal organization.
         * @minLength 1
         */
        communityId?: string;
        /**
         * Chatter feed element ID.
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        feedElementId: string;
        /** Structured Chatter message body. */
        body: {
          /**
           * Ordered message segments; retain mentions and rich text structure.
           * @minItems 1
           */
          messageSegments: Array<{
            /** Input message segment type. */
            type: "Text" | "Mention" | "Hashtag" | "Link" | "MarkupBegin" | "MarkupEnd" | "InlineImage" | "EntityLink";
            /** Text or hashtag content. */
            text?: string;
            /** Mentioned or linked Salesforce entity ID. */
            id?: string;
            /** Link URL. */
            url?: string;
            /** Rich text markup type supported by Salesforce. */
            markupType?: string;
            /** Previously uploaded ContentDocument image ID (069 prefix). */
            fileId?: string;
            [key: string]: unknown;
          }>;
        };
        /** Comment capabilities: content.contentDocumentId for an existing Salesforce file, record.recordId for a Knowledge article, or feedEntityShare.feedEntityId for a shared feed entity. Upload new files with upload_file first. */
        capabilities?: Record<string, unknown>;
        /** Parent comment ID when creating a threaded reply. */
        threadParentId?: string;
      };
      output: {
        /** Full comment including body, capabilities and threading metadata. */
        comment: Record<string, unknown>;
      };
    };
    /** Post a structured Chatter feed item to an explicitly chosen user, group or record. Supports native capabilities and previously uploaded files. */
    "salesforce.create_chatter_feed_element": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Experience Cloud community ID; omit for the internal organization.
         * @minLength 1
         */
        communityId?: string;
        /**
         * Target user, group or record ID, or me for the current user.
         * @minLength 1
         */
        subjectId: string;
        /** Structured Chatter message body. */
        body?: {
          /**
           * Ordered message segments; retain mentions and rich text structure.
           * @minItems 1
           */
          messageSegments: Array<{
            /** Input message segment type. */
            type: "Text" | "Mention" | "Hashtag" | "Link" | "MarkupBegin" | "MarkupEnd" | "InlineImage" | "EntityLink";
            /** Text or hashtag content. */
            text?: string;
            /** Mentioned or linked Salesforce entity ID. */
            id?: string;
            /** Link URL. */
            url?: string;
            /** Rich text markup type supported by Salesforce. */
            markupType?: string;
            /** Previously uploaded ContentDocument image ID (069 prefix). */
            fileId?: string;
            [key: string]: unknown;
          }>;
        };
        /** Native feed element capabilities, including files.items with ContentDocument IDs, link, poll, topics, bookmarks, associatedActions, canvas, directMessage, extensions, feedEntityShare, questionAndAnswers and status. Upload files with upload_file first. */
        capabilities?: Record<string, unknown>;
        /** Post visibility; omit to use Salesforce defaults. User, group and direct-message parents require AllUsers. */
        visibility?: "AllUsers" | "InternalUsers";
      };
      output: {
        /** Full feed element including structured body and capabilities. */
        element: Record<string, unknown>;
      };
    };
    /** Create one standard or custom Salesforce record. */
    "salesforce.create_record": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /** Field API names and JSON values to write. Use describe_object to discover writable fields; null clears a field. */
        fields: Record<string, unknown>;
        /** Apply active assignment rules with true, disable with false, or use a specific AssignmentRule ID. Omit to retain Salesforce defaults. */
        assignmentRule?: boolean | string;
        /** Duplicate detection options; omitted values retain Salesforce defaults. */
        duplicateRule?: {
          /** Acknowledge a duplicate alert and allow saving when the rule permits it. */
          allowSave?: boolean;
          /** Return fields of detected duplicate records. */
          includeRecordDetails?: boolean;
          /** Use current user sharing rules for duplicate detection. */
          runAsCurrentUser?: boolean;
        };
      };
      output: {
        /** ID of the affected record, when returned by Salesforce. */
        id?: string;
        /** Whether the mutation succeeded. */
        success: boolean;
        /** Whether an upsert created a new record. */
        created?: boolean;
        /** Errors returned by Salesforce. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Create parent-child record trees atomically: at most 200 records, five object types and five levels. */
    "salesforce.create_record_tree": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * Root records with attributes.type, attributes.referenceId and nested relationship records arrays.
         * @minItems 1
         * @maxItems 200
         */
        records: Array<Record<string, unknown>>;
      };
      output: {
        /** Whether the tree operation failed. */
        hasErrors?: boolean;
        /** Reference IDs, record IDs and errors. */
        results?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Create up to 200 records, preserving per-record success and errors. */
    "salesforce.create_records": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Records to create.
         * @minItems 1
         * @maxItems 200
         */
        records: Array<{
          /**
           * Standard or custom sObject API name, for example Account or Invoice__c.
           * @pattern ^[A-Za-z][A-Za-z0-9_]*$
           */
          objectName: string;
          /** Field API names and JSON values to write. Use describe_object to discover writable fields; null clears a field. */
          fields: Record<string, unknown>;
        }>;
        /** Roll back the entire collection if any item fails. Defaults to false. */
        allOrNone?: boolean;
      };
      output: {
        /** One result per item; inspect individual success flags. */
        results: Array<unknown>;
      };
    };
    /** Create and save a Salesforce report from an explicit report definition. */
    "salesforce.create_report": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /** Report definition including reportType, name, folderId, detailColumns, filters, groupings and formulas. Use describe_report to discover supported metadata. */
        reportMetadata: {
          /**
           * Name of the new report, up to 40 characters.
           * @minLength 1
           * @maxLength 40
           */
          name: string;
          /** Report type definition. */
          reportType: {
            /**
             * Report type API name, such as Opportunity.
             * @minLength 1
             */
            type: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
      output: {
        /** Report definition including reportType, name, folderId, detailColumns, filters, groupings and formulas. Use describe_report to discover supported metadata. */
        reportMetadata: {
          /**
           * Report name, up to 40 characters.
           * @minLength 1
           * @maxLength 40
           */
          name?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Delete a ContentDocument and its associated versions and links. */
    "salesforce.delete_file": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        fileId: string;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
      };
    };
    /** Delete one Salesforce record by object API name and record ID. */
    "salesforce.delete_record": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        recordId: string;
      };
      output: {
        /** ID of the affected record, when returned by Salesforce. */
        id?: string;
        /** Whether the mutation succeeded. */
        success: boolean;
        /** Whether an upsert created a new record. */
        created?: boolean;
        /** Errors returned by Salesforce. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Delete up to 200 Salesforce records, optionally rolling back on any failure. */
    "salesforce.delete_records": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Record IDs to delete.
         * @minItems 1
         * @maxItems 200
         */
        recordIds: Array<string>;
        /** Roll back the entire collection if any item fails. Defaults to false. */
        allOrNone?: boolean;
      };
      output: {
        /** One result per item; inspect individual success flags. */
        results: Array<unknown>;
      };
    };
    /** Describe an invocable action's inputs and outputs before calling it. */
    "salesforce.describe_invocable_action": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /** Standard action or custom invocable action. */
        category: "standard" | "custom";
        /**
         * Salesforce API name.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        actionType?: string;
        /**
         * Action API name, including namespace or object prefix when documented.
         * @pattern ^[A-Za-z][A-Za-z0-9_.]*$
         */
        actionName: string;
      };
      output: {
        /** Salesforce action definition response. */
        result: unknown;
      };
    };
    /** Describe a list view including its columns and SOQL query. */
    "salesforce.describe_list_view": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        listViewId: string;
      };
      output: {
        /** List view ID. */
        id?: string;
        /** List view columns. */
        columns?: Array<Record<string, unknown>>;
        /** SOQL underlying the view. */
        query?: string;
        [key: string]: unknown;
      };
    };
    /** Describe an sObject, including fields, relationships, permissions and record types. */
    "salesforce.describe_object": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
      };
      output: {
        /** sObject API name. */
        name: string;
        /** Field metadata. */
        fields: Array<Record<string, unknown>>;
        /** Child relationship metadata. */
        childRelationships?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get report, report-type and extended metadata including available filter fields. */
    "salesforce.describe_report": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        reportId: string;
      };
      output: {
        /** Official reportMetadata overrides, including filters, groupings, aggregates and date filters; does not save the report. */
        reportMetadata?: Record<string, unknown>;
        /** Report type fields and filters. */
        reportTypeMetadata?: Record<string, unknown>;
        /** Extended report metadata. */
        reportExtendedMetadata?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Download a Salesforce file version to OOMOL file transit; defaults to the latest published version. */
    "salesforce.download_file": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        fileId: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        versionId?: string;
      };
      output: {
        /** Temporary download URL. */
        transitUrl: string;
        /** File name. */
        name: string;
        /** File media type. */
        mimeType: string;
        /** Downloaded file size in bytes. */
        sizeBytes: number;
      };
    };
    /** Execute up to 25 dependent Salesforce REST subrequests; up to five may be queries or collections. Can delete resources. */
    "salesforce.execute_composite": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Ordered subrequests.
         * @minItems 1
         * @maxItems 25
         */
        requests: Array<{
          /** Subrequest HTTP method. */
          method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
          /**
           * Relative Salesforce /services/data/vXX.X/ resource URL; external URLs are not accepted.
           * @minLength 1
           * @pattern ^/services/data/v[0-9]+\.[0-9]+/
           */
          url: string;
          /**
           * Unique subrequest reference ID.
           * @pattern ^[A-Za-z0-9][A-Za-z0-9_]*$
           */
          referenceId: string;
          /** JSON body accepted by the target Salesforce resource. */
          body?: unknown;
          /** Supported Salesforce subrequest headers. */
          httpHeaders?: Record<string, string>;
        }>;
        /** Roll back the entire collection if any item fails. Defaults to false. */
        allOrNone?: boolean;
        /** Allow Salesforce to collate independent requests; default true. */
        collateSubrequests?: boolean;
      };
      output: {
        /** Per-request HTTP status, body and reference ID. */
        compositeResponse?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Execute transactional Salesforce sObject graphs with at most 500 total subrequests and 75 graphs. Can delete resources. */
    "salesforce.execute_composite_graph": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Graphs executed by Salesforce.
         * @minItems 1
         * @maxItems 75
         */
        graphs: Array<{
          /**
           * Unique graph ID.
           * @minLength 1
           */
          graphId: string;
          /**
           * Graph subrequests.
           * @minItems 1
           * @maxItems 500
           */
          compositeRequest: Array<{
            /** Subrequest HTTP method. */
            method: "GET" | "POST" | "PATCH" | "DELETE";
            /**
             * Relative Salesforce /services/data/vXX.X/ resource URL; external URLs are not accepted.
             * @minLength 1
             * @pattern ^/services/data/v[0-9]+\.[0-9]+/
             */
            url: string;
            /**
             * Unique subrequest reference ID.
             * @pattern ^[A-Za-z0-9][A-Za-z0-9_]*$
             */
            referenceId: string;
            /** JSON body accepted by the target Salesforce resource. */
            body?: unknown;
          }>;
        }>;
      };
      output: {
        /** Per-graph success and subrequest responses. */
        graphs?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Execute a global or object-specific quick action with field values and optional record context. */
    "salesforce.execute_quick_action": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName?: string;
        /**
         * Action API name, including namespace or object prefix when documented.
         * @pattern ^[A-Za-z][A-Za-z0-9_.]*$
         */
        actionName: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        contextId?: string;
        /** Field API names and JSON values to write. Use describe_object to discover writable fields; null clears a field. */
        fields: Record<string, unknown>;
      };
      output: {
        /** Salesforce quick-action result including per-record errors. */
        result: unknown;
      };
    };
    /** Read the text of an Apex debug log. Log bodies may contain sensitive application data. */
    "salesforce.get_apex_log": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        logId: string;
      };
      output: {
        /** Raw debug log text. */
        body: string;
      };
    };
    /** Poll a Bulk ingest job and download successful, failed or unprocessed rows when terminal. JobComplete can still contain failed records. */
    "salesforce.get_bulk_ingest_result": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /** Bulk job handle; preserve the API version and job kind. */
        handle: {
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          jobId: string;
          /** Bulk ingest job. */
          kind: "ingest";
          /**
           * API version returned by the submit action; required when reusing a handle.
           * @pattern ^[0-9]+\.[0-9]+$
           */
          apiVersion: string;
        };
        /** CSV result category; defaults to failedResults for completed jobs and unprocessedrecords for failed or aborted jobs. */
        resultType?: "successfulResults" | "failedResults" | "unprocessedrecords";
        /** Download the selected CSV when terminal; defaults to true. Set false for status only. */
        download?: boolean;
      };
      output: {
        /** Bulk job handle; preserve the API version and job kind. */
        handle: {
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          jobId: string;
          /** Bulk job kind. */
          kind: "query" | "ingest";
          /**
           * API version returned by the submit action; required when reusing a handle.
           * @pattern ^[0-9]+\.[0-9]+$
           */
          apiVersion: string;
        };
        /** Salesforce job state. */
        state: string;
        /** Full Salesforce job information, including failure counts and errorMessage. */
        job: Record<string, unknown>;
        /** Downloaded file hosted by OOMOL file transit. */
        result?: {
          /** Temporary download URL. */
          transitUrl: string;
          /** File name. */
          name: string;
          /** File media type. */
          mimeType: string;
          /** Downloaded file size in bytes. */
          sizeBytes: number;
        };
        /** Locator for the next CSV page; null when finished. */
        nextLocator?: string | null;
        /** Number of records in this CSV page. */
        numberOfRecords?: number;
      };
    };
    /** Poll a Bulk query; when complete, download one CSV page to file transit. Continue using nextLocator. */
    "salesforce.get_bulk_query_result": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /** Bulk job handle; preserve the API version and job kind. */
        handle: {
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          jobId: string;
          /** Bulk query job. */
          kind: "query";
          /**
           * API version returned by the submit action; required when reusing a handle.
           * @pattern ^[0-9]+\.[0-9]+$
           */
          apiVersion: string;
        };
        /** Locator returned by the previous result page. */
        locator?: string;
        /**
         * Maximum records per CSV page.
         * @minimum 1
         */
        maxRecords?: number;
        /** Download a result page when complete; defaults to true. Set false for status only. */
        download?: boolean;
      };
      output: {
        /** Bulk job handle; preserve the API version and job kind. */
        handle: {
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          jobId: string;
          /** Bulk job kind. */
          kind: "query" | "ingest";
          /**
           * API version returned by the submit action; required when reusing a handle.
           * @pattern ^[0-9]+\.[0-9]+$
           */
          apiVersion: string;
        };
        /** Salesforce job state. */
        state: string;
        /** Full Salesforce job information, including failure counts and errorMessage. */
        job: Record<string, unknown>;
        /** Downloaded file hosted by OOMOL file transit. */
        result?: {
          /** Temporary download URL. */
          transitUrl: string;
          /** File name. */
          name: string;
          /** File media type. */
          mimeType: string;
          /** Downloaded file size in bytes. */
          sizeBytes: number;
        };
        /** Locator for the next CSV page; null when finished. */
        nextLocator?: string | null;
        /** Number of records in this CSV page. */
        numberOfRecords?: number;
      };
    };
    /** Get a complete Chatter feed element, preserving capabilities and structured message content. */
    "salesforce.get_chatter_feed_element": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Experience Cloud community ID; omit for the internal organization.
         * @minLength 1
         */
        communityId?: string;
        /**
         * Chatter feed element ID.
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        feedElementId: string;
        /** Comment order; descending order is not supported. */
        commentSort?: "CreatedDateLatestAsc" | "CreatedDateOldestAsc" | "Relevance";
        /**
         * Maximum feed elements per bundle.
         * @minimum 0
         * @maximum 10
         */
        elementsPerBundle?: number;
        /**
         * Number of preview comments per feed element; use list_chatter_comments for full pagination.
         * @minimum 0
         * @maximum 25
         */
        recentCommentCount?: number;
        /** Return threaded comments collapsed when true; defaults to false. */
        threadedCommentsCollapsed?: boolean;
      };
      output: {
        /** Full feed element including structured body and capabilities. */
        element: Record<string, unknown>;
      };
    };
    /** Retrieve the current authorized Salesforce identity. */
    "salesforce.get_current_user": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
      };
      output: {
        /** Current user identity returned by Salesforce. */
        user: Record<string, unknown>;
      };
    };
    /** Retrieve dashboard metadata, component data and status with optional filters. */
    "salesforce.get_dashboard": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        dashboardId: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        runningUser?: string;
        /** First dashboard filter option ID. */
        filter1?: string;
        /** Second dashboard filter option ID. */
        filter2?: string;
        /** Third dashboard filter option ID. */
        filter3?: string;
      };
      output: {
        /** Dashboard metadata. */
        dashboardMetadata?: Record<string, unknown>;
        /** Dashboard components and their report data. */
        componentData?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get refresh status for each dashboard component. */
    "salesforce.get_dashboard_status": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        dashboardId: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        runningUser?: string;
        /** First dashboard filter option ID. */
        filter1?: string;
        /** Second dashboard filter option ID. */
        filter2?: string;
        /** Third dashboard filter option ID. */
        filter3?: string;
      };
      output: {
        /** Component refresh states and dates. */
        componentStatus?: Array<{
          /** Component ID. */
          componentId?: string;
          /** Component refresh state, IDLE or RUNNING. */
          refreshStatus?: string;
          /** Last refresh timestamp. */
          refreshDate?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve an email template's metadata, text body and HTML content. */
    "salesforce.get_email_template": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        templateId: string;
      };
      output: {
        /** EmailTemplate fields. */
        record: Record<string, unknown>;
      };
    };
    /** Get a Salesforce ContentDocument and its latest version reference. */
    "salesforce.get_file": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        fileId: string;
      };
      output: {
        /** ContentDocument fields. */
        record: Record<string, unknown>;
      };
    };
    /** Get a visible online Knowledge article by article ID or URL name, including custom layout content. Does not retrieve draft versions or custom binary file fields. */
    "salesforce.get_knowledge_article": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Active Knowledge language in the organization, sent as Accept-Language.
         * @minLength 1
         */
        language: string;
        /** Article visibility channel. Omit to use the Salesforce user context. */
        channel?: "App" | "Pkb" | "Csp" | "Prm";
        /**
         * Permanent Knowledge article ID, not a Knowledge article version ID; mutually exclusive with urlName.
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        articleId?: string;
        /**
         * Article URL name; mutually exclusive with articleId.
         * @minLength 1
         */
        urlName?: string;
        /**
         * Increment article view counts when true. Defaults to false.
         * @default false
         */
        updateViewStat?: boolean;
      };
      output: {
        /** Online article metadata and organization-defined layout fields. */
        article: Record<string, unknown>;
      };
    };
    /** Execute a list view and retrieve rows and display metadata. */
    "salesforce.get_list_view_records": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        listViewId: string;
        /**
         * Maximum records to return.
         * @minimum 1
         * @maximum 2000
         */
        limit?: number;
        /**
         * Record offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Rows returned by the view. */
        records?: Array<Record<string, unknown>>;
        /** Number of rows returned. */
        size?: number;
        /** Whether all results have been returned. */
        done?: boolean;
        [key: string]: unknown;
      };
    };
    /** Find allowed lookup candidates using the current user's context and dependent field values. Uses UI API POST; this operation only reads suggestions. */
    "salesforce.get_lookup_suggestions": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * Salesforce API name.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        fieldName: string;
        /** Source record fields, including all controlling fields for dependent lookups. Id is required: null for a new record or an existing record ID. */
        sourceFields: {
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          Id: string | null;
          [key: string]: unknown;
        };
        /** Lookup search mode; defaults to Recent. */
        searchType?: "Recent" | "Search" | "TypeAhead";
        /** Search text: at least two characters for Search, three for TypeAhead; TypeAhead does not accept question marks. */
        q?: string;
        /**
         * Page number starting at one.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of suggestions per page; defaults to 25.
         * @minimum 1
         */
        pageSize?: number;
        /**
         * Target object API names for polymorphic lookups.
         * @minItems 1
         */
        targetApiName?: Array<string>;
        /** Ordering for lookup results, available in API 63.0 and later. */
        orderBy?: Array<{
          /**
           * Salesforce API name.
           * @pattern ^[A-Za-z][A-Za-z0-9_]*$
           */
          fieldApiName: string;
          /** Sort in ascending order. */
          isAscending: boolean;
        }>;
      };
      output: {
        /** Suggestions and native pagination metadata. */
        result: Record<string, unknown>;
      };
    };
    /** Get organization limits and remaining allocations; requires View Setup and Configuration permission. */
    "salesforce.get_org_limits": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
      };
      output: {
        /** Limit names mapped to their allocations. */
        limits: Record<string, {
            /** Maximum allocation. */
            Max?: number;
            /** Remaining allocation. */
            Remaining?: number;
            [key: string]: unknown;
          }>;
      };
    };
    /** Get record-type-specific picklist values, including dependencies, through UI API. */
    "salesforce.get_picklist_values": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        recordTypeId: string;
      };
      output: {
        /** Picklist field names mapped to values, defaults and controlling-field indexes. */
        picklistFieldValues?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get default field values for an object-specific quick action, optionally in a record context. */
    "salesforce.get_quick_action_defaults": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * Action API name, including namespace or object prefix when documented.
         * @pattern ^[A-Za-z][A-Za-z0-9_.]*$
         */
        actionName: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        contextId?: string;
      };
      output: {
        /** Evaluated default field values. */
        result: unknown;
      };
    };
    /** Retrieve a Salesforce record by object API name and record ID. */
    "salesforce.get_record": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        recordId: string;
        /**
         * Optional field API names to retrieve.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** Salesforce record with object-specific fields and relationship data. */
        record: Record<string, unknown>;
      };
    };
    /** Retrieve a record by an external ID field and value. */
    "salesforce.get_record_by_external_id": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * External ID field API name.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        externalIdField: string;
        /**
         * External ID value to match.
         * @minLength 1
         */
        externalId: string;
        /**
         * Field API names to retrieve.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** Salesforce record with object-specific fields and relationship data. */
        record: Record<string, unknown>;
      };
    };
    /** Get approximate record counts for selected objects or all available objects. */
    "salesforce.get_record_counts": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Optional sObject API names.
         * @minItems 1
         */
        objectNames?: Array<string>;
      };
      output: {
        /** Object names and counts. */
        sObjects?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get user-specific default values, create layout and object metadata before creating a record. Does not guarantee that validation rules will accept a later write. */
    "salesforce.get_record_create_defaults": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        recordTypeId?: string;
        /** Layout device size; defaults to Large. */
        formFactor?: "Large" | "Medium" | "Small";
        /**
         * Optional qualified field names; inaccessible fields are omitted without failing the request.
         * @minItems 1
         */
        optionalFields?: Array<string>;
      };
      output: {
        /** Default record values. */
        record?: Record<string, unknown>;
        /** Object metadata indexed by API name. */
        objectInfos?: Record<string, unknown>;
        /** Create layout including required fields. */
        layout?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Read the page layout for an object and record type in create, edit or view mode. */
    "salesforce.get_record_layout": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        recordTypeId?: string;
        /** Layout device size; defaults to Large. */
        formFactor?: "Large" | "Medium" | "Small";
        /** Layout detail level; defaults to Full. */
        layoutType?: "Full" | "Compact";
        /** Layout access mode; defaults to View. */
        mode?: "Create" | "Edit" | "View";
      };
      output: {
        /** Layout sections, fields, actions and save options. */
        layout: Record<string, unknown>;
      };
    };
    /** Retrieve up to 2000 records of one object in one request. Missing or inaccessible records return null in place. */
    "salesforce.get_records": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * Record IDs in requested order.
         * @minItems 1
         * @maxItems 2000
         */
        recordIds: Array<string>;
        /**
         * Field API names to retrieve.
         * @minItems 1
         */
        fields: Array<string>;
      };
      output: {
        /** One result per item; inspect individual success flags. */
        results: Array<unknown>;
      };
    };
    /** Traverse one or more Salesforce relationship API names from a record. */
    "salesforce.get_related_records": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        recordId: string;
        /**
         * Relationship traversal in order, up to five levels.
         * @minItems 1
         * @maxItems 5
         */
        relationships: Array<string>;
        /**
         * Field API names to retrieve.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** Relationship response, preserving records and pagination when present. */
        result: unknown;
      };
    };
    /** Get the state and results of an asynchronous report. Empty factMap is a valid successful result. */
    "salesforce.get_report_result": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /** Report run handle; preserve all fields for polling. */
        handle: {
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          reportId: string;
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          instanceId: string;
          /**
           * API version returned by the submit action; required when reusing a handle.
           * @pattern ^[0-9]+\.[0-9]+$
           */
          apiVersion: string;
        };
      };
      output: {
        /** Report run handle; preserve all fields for polling. */
        handle: {
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          reportId: string;
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          instanceId: string;
          /**
           * API version returned by the submit action; required when reusing a handle.
           * @pattern ^[0-9]+\.[0-9]+$
           */
          apiVersion: string;
        };
        /** Salesforce run state: New, Running, Success or Error. */
        state: string;
        /** Report results preserving factMap, groupings, detail columns and metadata. */
        report?: {
          /** Report facts keyed by grouping coordinates. */
          factMap?: Record<string, unknown>;
          /** Whether all report results are included. */
          allData?: boolean;
          /** Report metadata. */
          reportMetadata?: Record<string, unknown>;
          /** Column and aggregate metadata. */
          reportExtendedMetadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Read one Tooling API metadata record without modifying configuration. */
    "salesforce.get_tooling_record": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        recordId: string;
        /**
         * Optional Tooling field API names.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** Tooling record fields. */
        record: Record<string, unknown>;
      };
    };
    /** Invoke a standard action or custom Flow/Apex action. Dynamic actions may delete data or perform other destructive operations. */
    "salesforce.invoke_action": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /** Standard action or custom invocable action. */
        category: "standard" | "custom";
        /**
         * Salesforce API name.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        actionType?: string;
        /**
         * Action API name, including namespace or object prefix when documented.
         * @pattern ^[A-Za-z][A-Za-z0-9_.]*$
         */
        actionName: string;
        /**
         * One parameter map per action invocation.
         * @minItems 1
         */
        inputs: Array<Record<string, unknown>>;
      };
      output: {
        /** One result per item; inspect individual success flags. */
        results: Array<unknown>;
      };
    };
    /** Link an existing file to a Salesforce record with an explicit sharing level. */
    "salesforce.link_file": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        fileId: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        recordId: string;
        /** V = Viewer, C = Collaborator, I = Inferred. Availability depends on target and permissions. */
        shareType?: "V" | "C" | "I";
        /** Audience of the link, subject to Salesforce policies. */
        visibility?: "AllUsers" | "InternalUsers" | "SharedUsers";
      };
      output: {
        /** ID of the affected record, when returned by Salesforce. */
        id?: string;
        /** Whether the mutation succeeded. */
        success: boolean;
        /** Whether an upsert created a new record. */
        created?: boolean;
        /** Errors returned by Salesforce. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** List Classic approval process definitions, optionally filtered by object API name. */
    "salesforce.list_approval_processes": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName?: string;
      };
      output: {
        /** Object names mapped to approval process definitions. */
        processes: Record<string, unknown>;
      };
    };
    /** Read a full page of Chatter comments for a feed element; continue with the page token in nextPageUrl. */
    "salesforce.list_chatter_comments": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Experience Cloud community ID; omit for the internal organization.
         * @minLength 1
         */
        communityId?: string;
        /**
         * Chatter feed element ID.
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        feedElementId: string;
        /** Opaque page token from the corresponding nextPageUrl query parameter; do not use query_more. */
        page?: string;
        /**
         * Number of items per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** Comment order; descending order is not supported. */
        sort?: "CreatedDateLatestAsc" | "CreatedDateOldestAsc" | "Relevance";
        /** Return threaded comments collapsed when true; defaults to false. */
        threadedCommentsCollapsed?: boolean;
      };
      output: {
        /** Comments in this page. */
        items: Array<Record<string, unknown>>;
        /** URL containing the next comment page token. */
        nextPageUrl?: string | null;
        [key: string]: unknown;
      };
    };
    /** Read a Chatter feed with native pagination, search and filters. Feed types support different query options; unsupported combinations are rejected. Embedded comments are previews only. */
    "salesforce.list_chatter_feed_elements": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Experience Cloud community ID; omit for the internal organization.
         * @minLength 1
         */
        communityId?: string;
        /** Native feed type. */
        feedType: "favorites" | "filter" | "bookmarks" | "company" | "direct-messages" | "draft" | "files" | "groups" | "isolated" | "mute" | "news" | "pending-review" | "people" | "record" | "streams" | "to" | "topics" | "user-profile" | "direct-message-moderation" | "home" | "moderation";
        /**
         * User, record, topic or stream ID required by the feed type; user feeds also accept me.
         * @minLength 1
         */
        subjectId?: string;
        /**
         * Favorite ID, required for favorites feeds.
         * @minLength 1
         */
        favoriteId?: string;
        /**
         * Object key prefix, required for filter feeds.
         * @minLength 1
         */
        keyPrefix?: string;
        /** Opaque page token from the corresponding nextPageUrl query parameter; do not use query_more. */
        page?: string;
        /**
         * Number of items per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * Maximum feed elements per bundle.
         * @minimum 0
         * @maximum 10
         */
        elementsPerBundle?: number;
        /**
         * Number of preview comments per feed element; use list_chatter_comments for full pagination.
         * @minimum 0
         * @maximum 25
         */
        recentCommentCount?: number;
        /** Return threaded comments collapsed when true; defaults to false. */
        threadedCommentsCollapsed?: boolean;
        /** Feed update density. */
        density?: "AllUpdates" | "FewerUpdates";
        /** Search keywords for feed bodies and comments; at least two non-wildcard characters. */
        q?: string;
        /** Native filter supported by the selected feed, such as UnansweredQuestions or AuthoredBy. */
        filter?: string;
        /** Custom record feed filter ID. */
        customFilter?: string;
        /** Show only internal items in a record feed. */
        showInternalOnly?: boolean;
        /** Feed order; availability depends on feed type and filter. */
        sort?: "CreatedDateAsc" | "CreatedDateDesc" | "LastModifiedDateDesc" | "MostViewed" | "Relevance";
        /** Opaque updatesToken from a previous feed page; do not construct it. */
        updatedSince?: string;
      };
      output: {
        /** Feed elements in this page. */
        elements: Array<Record<string, unknown>>;
        /** URL containing the next page token. */
        nextPageUrl?: string | null;
        /** Opaque token for subsequent updates. */
        updatesToken?: string;
        [key: string]: unknown;
      };
    };
    /** List recently viewed dashboards. Query the Dashboard object with SOQL for broader discovery. */
    "salesforce.list_dashboards": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
      };
      output: {
        /** One result per item; inspect individual success flags. */
        results: Array<unknown>;
      };
    };
    /** List deleted records within the retained delete log, at most 15 days; retain returned watermarks. */
    "salesforce.list_deleted_records": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * Start of the replication window in ISO 8601 UTC.
         * @format date-time
         */
        start: string;
        /**
         * End of the replication window in ISO 8601 UTC; must follow start.
         * @format date-time
         */
        end: string;
      };
      output: {
        /** Deleted record IDs and deletion timestamps. */
        deletedRecords?: Array<Record<string, unknown>>;
        /** Earliest available deletion timestamp. */
        earliestDateAvailable?: string;
        /** Latest covered timestamp. */
        latestDateCovered?: string;
        [key: string]: unknown;
      };
    };
    /** List accessible active email templates using SOQL; use query_more for subsequent pages. */
    "salesforce.list_email_templates": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        folderId?: string;
        /** Also include inactive templates. */
        includeInactive?: boolean;
        /**
         * Maximum templates to return.
         * @minimum 1
         * @maximum 2000
         */
        limit?: number;
      };
      output: {
        /** Total number of matching records. */
        totalSize: number;
        /** Whether all query results have been returned. */
        done: boolean;
        /** Records in this page. */
        records: Array<Record<string, unknown>>;
        /** Relative URL for the next page; pass it unchanged to query_more. */
        nextRecordsUrl?: string;
        [key: string]: unknown;
      };
    };
    /** List a file's ContentDocumentLink sharing records; use query_more for later pages. */
    "salesforce.list_file_shares": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        fileId: string;
      };
      output: {
        /** Total number of matching records. */
        totalSize: number;
        /** Whether all query results have been returned. */
        done: boolean;
        /** Records in this page. */
        records: Array<Record<string, unknown>>;
        /** Relative URL for the next page; pass it unchanged to query_more. */
        nextRecordsUrl?: string;
        [key: string]: unknown;
      };
    };
    /** Discover standard actions, custom action categories, or actions in a custom category. */
    "salesforce.list_invocable_actions": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /** Standard action or custom invocable action. */
        category: "standard" | "custom";
        /**
         * Salesforce API name.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        actionType?: string;
      };
      output: {
        /** Salesforce action discovery response. */
        result: unknown;
      };
    };
    /** Search or browse visible online Knowledge articles by language, channel and categories. Results are summaries; get_knowledge_article retrieves content. Increment pageNumber for subsequent pages. */
    "salesforce.list_knowledge_articles": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Active Knowledge language in the organization, sent as Accept-Language.
         * @minLength 1
         */
        language: string;
        /** Article visibility channel. Omit to use the Salesforce user context. */
        channel?: "App" | "Pkb" | "Csp" | "Prm";
        /** SOSL search text; omit or leave empty to browse articles. */
        searchText?: string;
        /** Map of unique category group API names to category API names; at most three conditions. */
        categories?: Record<string, string>;
        /** Category matching method; requires categories. */
        queryMethod?: "AT" | "BELOW" | "ABOVE" | "ABOVE_OR_BELOW";
        /** Sort field. ViewScore only supports browsing and a single page. */
        sort?: "LastPublishedDate" | "CreatedDate" | "Title" | "ViewScore";
        /** Sort direction; requires an explicit sort field. */
        order?: "ASC" | "DESC";
        /**
         * Articles per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * Page number starting at one; unavailable with ViewScore sorting.
         * @minimum 1
         */
        pageNumber?: number;
      };
      output: {
        /** Visible article summaries. */
        articles: Array<Record<string, unknown>>;
        /** URL of this article page. */
        currentPageUrl?: string;
        /** URL of the next article page, or null at the end. */
        nextPageUrl?: string | null;
        /** Current page number. */
        pageNumber?: number;
        [key: string]: unknown;
      };
    };
    /** List the views available for an sObject. */
    "salesforce.list_list_views": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
      };
      output: {
        /** List view summaries. */
        listviews?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List sObjects available to the connected Salesforce user. */
    "salesforce.list_objects": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
      };
      output: {
        /** Available sObjects and their capabilities. */
        sobjects: Array<{
          /** sObject API name. */
          name?: string;
          /** sObject display label. */
          label?: string;
          [key: string]: unknown;
        }>;
        /** Organization character encoding. */
        encoding?: string;
        /** Maximum batch size. */
        maxBatchSize?: number;
        [key: string]: unknown;
      };
    };
    /** List pending Classic approval work items for yourself, yourself and your groups, or an explicit actor. Use query_more with nextRecordsUrl for subsequent pages; group scope does not imply all delegated approvals. */
    "salesforce.list_pending_approvals": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /** Whose pending work items to retrieve. */
        scope: "mine" | "mineAndGroups" | "actor";
        /**
         * Assigned actor ID; required only for actor scope.
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        actorId?: string;
        /**
         * Optional business record ID to filter pending approvals.
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        recordId?: string;
      };
      output: {
        /** Total number of matching records. */
        totalSize: number;
        /** Whether all query results have been returned. */
        done: boolean;
        /** Records in this page. */
        records: Array<Record<string, unknown>>;
        /** Relative URL for the next page; pass it unchanged to query_more. */
        nextRecordsUrl?: string;
        [key: string]: unknown;
      };
    };
    /** List global quick actions or quick actions for a specified object. */
    "salesforce.list_quick_actions": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName?: string;
      };
      output: {
        /** Salesforce quick-action discovery response. */
        result: unknown;
      };
    };
    /** List files linked to a Salesforce record, including link IDs needed to unlink; use query_more for later pages. */
    "salesforce.list_record_files": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        recordId: string;
      };
      output: {
        /** Total number of matching records. */
        totalSize: number;
        /** Whether all query results have been returned. */
        done: boolean;
        /** Records in this page. */
        records: Array<Record<string, unknown>>;
        /** Relative URL for the next page; pass it unchanged to query_more. */
        nextRecordsUrl?: string;
        [key: string]: unknown;
      };
    };
    /** List up to 200 recently viewed reports. For all accessible reports, query the Report object with SOQL. */
    "salesforce.list_reports": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
      };
      output: {
        /** One result per item; inspect individual success flags. */
        results: Array<unknown>;
      };
    };
    /** List record IDs changed in a replication window within the last 30 days. */
    "salesforce.list_updated_records": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * Start of the replication window in ISO 8601 UTC.
         * @format date-time
         */
        start: string;
        /**
         * End of the replication window in ISO 8601 UTC; must follow start.
         * @format date-time
         */
        end: string;
      };
      output: {
        /** Updated record IDs. */
        ids?: Array<string>;
        /** Latest covered timestamp. */
        latestDateCovered?: string;
        [key: string]: unknown;
      };
    };
    /** Search Salesforce without composing SOSL; supports all documented parameterized-search options. */
    "salesforce.parameterized_search": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /** Official parameterized-search request, including q, sobjects, fields, filters and limits. */
        request: {
          /**
           * Text to search for.
           * @minLength 1
           */
          q: string;
          /** Objects and per-object search options. */
          sobjects?: Array<{
            /**
             * Standard or custom sObject API name, for example Account or Invoice__c.
             * @pattern ^[A-Za-z][A-Za-z0-9_]*$
             */
            name?: string;
            [key: string]: unknown;
          }>;
          /**
           * Maximum results across objects.
           * @minimum 1
           * @maximum 2000
           */
          overallLimit?: number;
          [key: string]: unknown;
        };
      };
      output: {
        /** Matching records. */
        searchRecords?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Execute read-only SOQL and return one page. Use query_more with nextRecordsUrl for subsequent pages. */
    "salesforce.query": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * SOQL SELECT query, for example SELECT Id, Name FROM Account LIMIT 10.
         * @minLength 1
         */
        soql: string;
        /** Use queryAll to include deleted records and archived activities. */
        includeDeleted?: boolean;
        /**
         * Requested query batch size; Salesforce may return fewer records.
         * @minimum 200
         * @maximum 2000
         */
        batchSize?: number;
      };
      output: {
        /** Total number of matching records. */
        totalSize: number;
        /** Whether all query results have been returned. */
        done: boolean;
        /** Records in this page. */
        records: Array<Record<string, unknown>>;
        /** Relative URL for the next page; pass it unchanged to query_more. */
        nextRecordsUrl?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve the next page of a SOQL query using Salesforce's relative nextRecordsUrl. */
    "salesforce.query_more": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Relative nextRecordsUrl returned by query or query_more. Its version is preserved.
         * @pattern ^/services/data/v[0-9]+\.[0-9]+/query(All)?/[A-Za-z0-9_-]+$
         */
        nextRecordsUrl: string;
        /**
         * Requested query batch size; Salesforce may return fewer records.
         * @minimum 200
         * @maximum 2000
         */
        batchSize?: number;
      };
      output: {
        /** Total number of matching records. */
        totalSize: number;
        /** Whether all query results have been returned. */
        done: boolean;
        /** Records in this page. */
        records: Array<Record<string, unknown>>;
        /** Relative URL for the next page; pass it unchanged to query_more. */
        nextRecordsUrl?: string;
        [key: string]: unknown;
      };
    };
    /** Request a dashboard refresh; inspect get_dashboard_status before reading refreshed data. */
    "salesforce.refresh_dashboard": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        dashboardId: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        runningUser?: string;
        /** First dashboard filter option ID. */
        filter1?: string;
        /** Second dashboard filter option ID. */
        filter2?: string;
        /** Third dashboard filter option ID. */
        filter3?: string;
      };
      output: {
        /** Relative Salesforce URL to check the dashboard refresh status. */
        statusUrl: string;
        [key: string]: unknown;
      };
    };
    /** Approve or reject Classic approval work items assigned to the current user. Each item can succeed or fail independently. */
    "salesforce.review_approval_requests": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Approval decisions.
         * @minItems 1
         */
        requests: Array<{
          /**
           * ProcessInstanceWorkitem ID returned by submission or pending approvals.
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          workItemId: string;
          /** Approval decision. */
          decision: "approve" | "reject";
          /** Comment recorded in approval history. */
          comments?: string;
          /** Explicit next approver user IDs when required by the process. */
          nextApproverIds?: Array<string>;
        }>;
      };
      output: {
        /** One result per approval request; inspect success and errors. */
        results: Array<{
          /** Whether this approval request succeeded. */
          success: boolean;
          /** Business record ID being approved. */
          entityId?: string | null;
          /** Approval ProcessInstance ID. */
          instanceId?: string | null;
          /** Approval instance status, such as Pending, Approved or Rejected. */
          instanceStatus?: string | null;
          /** Currently assigned approver IDs. */
          actorIds?: Array<string> | null;
          /** New pending work item IDs; use these as workItemId for decisions. */
          newWorkitemIds?: Array<string>;
          /** Errors for this request, or null when absent. */
          errors?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Run a report synchronously with optional temporary metadata overrides; does not save changes. */
    "salesforce.run_report": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        reportId: string;
        /** Include detail rows as well as report summaries. */
        includeDetails?: boolean;
        /** Official reportMetadata overrides, including filters, groupings, aggregates and date filters; does not save the report. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** Report facts keyed by grouping coordinates. */
        factMap?: Record<string, unknown>;
        /** Whether all report results are included. */
        allData?: boolean;
        /** Report metadata. */
        reportMetadata?: Record<string, unknown>;
        /** Column and aggregate metadata. */
        reportExtendedMetadata?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Save report metadata changes. Salesforce invalidates and deletes running asynchronous jobs for this report when it is saved. */
    "salesforce.save_report": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        reportId: string;
        /** Report definition including reportType, name, folderId, detailColumns, filters, groupings and formulas. Use describe_report to discover supported metadata. */
        reportMetadata: {
          /**
           * Report name, up to 40 characters.
           * @minLength 1
           * @maxLength 40
           */
          name?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** Report definition including reportType, name, folderId, detailColumns, filters, groupings and formulas. Use describe_report to discover supported metadata. */
        reportMetadata: {
          /**
           * Report name, up to 40 characters.
           * @minLength 1
           * @maxLength 40
           */
          name?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search across Salesforce objects using SOSL. */
    "salesforce.search_records": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * SOSL search expression.
         * @minLength 1
         */
        sosl: string;
      };
      output: {
        /** Matching records. */
        searchRecords?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Send email through Salesforce emailSimple and return each action result; inspect isSuccess and errors. */
    "salesforce.send_email": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /** Email content and delivery options. */
        email: {
          /**
           * Recipient email addresses; combined recipients must not exceed 150.
           * @maxItems 150
           */
          recipientAddresses?: Array<string>;
          /**
           * Recipient email addresses; combined recipients must not exceed 150.
           * @maxItems 150
           */
          ccAddresses?: Array<string>;
          /**
           * Recipient email addresses; combined recipients must not exceed 150.
           * @maxItems 150
           */
          bccAddresses?: Array<string>;
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          recipientId?: string;
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          relatedRecordId?: string;
          /** Sender identity selection. */
          senderType?: "CurrentUser" | "DefaultWorkflowUser" | "OrgWideEmailAddress";
          /**
           * Organization-wide sender email; required for OrgWideEmailAddress.
           * @format email
           */
          senderAddress?: string;
          /** Document, ContentVersion or Attachment IDs. */
          attachmentIdCollection?: Array<string>;
          /** Log the email to recipientId or relatedRecordId; requires at least one of those IDs. */
          logEmailOnSend?: boolean;
          /** Add a related-record threading token to the email body. */
          addThreadingTokenToBody?: boolean;
          /** Add a related-record threading token to the subject. */
          addThreadingTokenToSubject?: boolean;
          /** Email body. */
          emailBody: string;
          /** Email subject. */
          emailSubject: string;
          /** Treat the email body as rich text. */
          sendRichBody?: boolean;
          /** Render line breaks in a rich-text body. */
          useLineBreaks?: boolean;
        };
      };
      output: {
        /** One result per item; inspect individual success flags. */
        results: Array<unknown>;
      };
    };
    /** Send a Salesforce template email with merge fields; requires a recipient Contact or Lead ID. */
    "salesforce.send_email_from_template": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /** Template email and delivery options. */
        email: {
          /**
           * Recipient email addresses; combined recipients must not exceed 150.
           * @maxItems 150
           */
          recipientAddresses?: Array<string>;
          /**
           * Recipient email addresses; combined recipients must not exceed 150.
           * @maxItems 150
           */
          ccAddresses?: Array<string>;
          /**
           * Recipient email addresses; combined recipients must not exceed 150.
           * @maxItems 150
           */
          bccAddresses?: Array<string>;
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          recipientId: string;
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          relatedRecordId?: string;
          /** Sender identity selection. */
          senderType?: "CurrentUser" | "DefaultWorkflowUser" | "OrgWideEmailAddress";
          /**
           * Organization-wide sender email; required for OrgWideEmailAddress.
           * @format email
           */
          senderAddress?: string;
          /** Document, ContentVersion or Attachment IDs. */
          attachmentIdCollection?: Array<string>;
          /** Log the email to recipientId or relatedRecordId; requires at least one of those IDs. */
          logEmailOnSend?: boolean;
          /** Add a related-record threading token to the email body. */
          addThreadingTokenToBody?: boolean;
          /** Add a related-record threading token to the subject. */
          addThreadingTokenToSubject?: boolean;
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          emailTemplateId: string;
        };
      };
      output: {
        /** One result per item; inspect individual success flags. */
        results: Array<unknown>;
      };
    };
    /** Create, upload and submit a Bulk API 2.0 CSV job from a public URL. Supports delete and irreversible hardDelete; inspect per-record results. */
    "salesforce.submit_bulk_ingest": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /** CRM ingest operation. hardDelete requires Bulk API Hard Delete permission. */
        operation: "insert" | "update" | "upsert" | "delete" | "hardDelete";
        /**
         * Public HTTPS CSV URL. Uploads are bounded to Salesforce's recommended 100 MB source size.
         * @format uri
         */
        csvUrl: string;
        /**
         * Salesforce API name.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        externalIdField?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        assignmentRuleId?: string;
        /** CSV delimiter; defaults to COMMA. */
        columnDelimiter?: "BACKQUOTE" | "CARET" | "COMMA" | "PIPE" | "SEMICOLON" | "TAB";
        /** CSV line ending; defaults to LF. */
        lineEnding?: "LF" | "CRLF";
      };
      output: {
        /** Bulk job handle; preserve the API version and job kind. */
        handle: {
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          jobId: string;
          /** Bulk job kind. */
          kind: "query" | "ingest";
          /**
           * API version returned by the submit action; required when reusing a handle.
           * @pattern ^[0-9]+\.[0-9]+$
           */
          apiVersion: string;
        };
        /** Salesforce job state. */
        state: string;
        /** Full Salesforce job information, including failure counts and errorMessage. */
        job: Record<string, unknown>;
        /** Downloaded file hosted by OOMOL file transit. */
        result?: {
          /** Temporary download URL. */
          transitUrl: string;
          /** File name. */
          name: string;
          /** File media type. */
          mimeType: string;
          /** Downloaded file size in bytes. */
          sizeBytes: number;
        };
        /** Locator for the next CSV page; null when finished. */
        nextLocator?: string | null;
        /** Number of records in this CSV page. */
        numberOfRecords?: number;
      };
    };
    /** Submit an asynchronous Bulk API 2.0 SOQL query and return a versioned handle. */
    "salesforce.submit_bulk_query": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Bulk-compatible SOQL; no GROUP BY, OFFSET, aggregate functions or parent-to-child subqueries.
         * @minLength 1
         */
        soql: string;
        /** Use queryAll to include deleted and archived records. */
        includeDeleted?: boolean;
        /** CSV delimiter; defaults to COMMA. */
        columnDelimiter?: "BACKQUOTE" | "CARET" | "COMMA" | "PIPE" | "SEMICOLON" | "TAB";
        /** CSV line ending; defaults to LF. */
        lineEnding?: "LF" | "CRLF";
      };
      output: {
        /** Bulk job handle; preserve the API version and job kind. */
        handle: {
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          jobId: string;
          /** Bulk job kind. */
          kind: "query" | "ingest";
          /**
           * API version returned by the submit action; required when reusing a handle.
           * @pattern ^[0-9]+\.[0-9]+$
           */
          apiVersion: string;
        };
        /** Salesforce job state. */
        state: string;
        /** Full Salesforce job information, including failure counts and errorMessage. */
        job: Record<string, unknown>;
        /** Downloaded file hosted by OOMOL file transit. */
        result?: {
          /** Temporary download URL. */
          transitUrl: string;
          /** File name. */
          name: string;
          /** File media type. */
          mimeType: string;
          /** Downloaded file size in bytes. */
          sizeBytes: number;
        };
        /** Locator for the next CSV page; null when finished. */
        nextLocator?: string | null;
        /** Number of records in this CSV page. */
        numberOfRecords?: number;
      };
    };
    /** Submit records to Classic approval processes. Inspect each result for partial failures; use invoke_action for Flow approvals. */
    "salesforce.submit_for_approval": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Records to submit for approval.
         * @minItems 1
         */
        requests: Array<{
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          recordId: string;
          /** Comment recorded in approval history. */
          comments?: string;
          /** Explicit next approver user IDs when required by the process. */
          nextApproverIds?: Array<string>;
          /**
           * User submitting the record; omit to use the connected user.
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          submitterId?: string;
          /** Specific process developer name or ID; omit to evaluate processes in configured order. */
          processDefinitionNameOrId?: string;
          /** Skip entry criteria for the specified process when true; omitted by default. */
          skipEntryCriteria?: boolean;
        }>;
      };
      output: {
        /** One result per approval request; inspect success and errors. */
        results: Array<{
          /** Whether this approval request succeeded. */
          success: boolean;
          /** Business record ID being approved. */
          entityId?: string | null;
          /** Approval ProcessInstance ID. */
          instanceId?: string | null;
          /** Approval instance status, such as Pending, Approved or Rejected. */
          instanceStatus?: string | null;
          /** Currently assigned approver IDs. */
          actorIds?: Array<string> | null;
          /** New pending work item IDs; use these as workItemId for decisions. */
          newWorkitemIds?: Array<string>;
          /** Errors for this request, or null when absent. */
          errors?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Start an asynchronous report run and return a handle for get_report_result. */
    "salesforce.submit_report": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        reportId: string;
        /** Include detail rows as well as report summaries. */
        includeDetails?: boolean;
        /** Official reportMetadata overrides, including filters, groupings, aggregates and date filters; does not save the report. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** Report run handle; preserve all fields for polling. */
        handle: {
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          reportId: string;
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          instanceId: string;
          /**
           * API version returned by the submit action; required when reusing a handle.
           * @pattern ^[0-9]+\.[0-9]+$
           */
          apiVersion: string;
        };
        /** Salesforce run state: New, Running, Success or Error. */
        state: string;
        /** Report results preserving factMap, groupings, detail columns and metadata. */
        report?: {
          /** Report facts keyed by grouping coordinates. */
          factMap?: Record<string, unknown>;
          /** Whether all report results are included. */
          allData?: boolean;
          /** Report metadata. */
          reportMetadata?: Record<string, unknown>;
          /** Column and aggregate metadata. */
          reportExtendedMetadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Query Salesforce Tooling metadata with SOQL SELECT, such as validation rules, Apex classes and logs. Requires the corresponding administrative permissions. */
    "salesforce.tooling_query": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Tooling SOQL SELECT query.
         * @minLength 1
         * @pattern ^\s*[Ss][Ee][Ll][Ee][Cc][Tt]\s+
         */
        soql: string;
      };
      output: {
        /** Total number of matching records. */
        totalSize: number;
        /** Whether all query results have been returned. */
        done: boolean;
        /** Records in this page. */
        records: Array<Record<string, unknown>>;
        /** Relative Tooling cursor URL; pass it unchanged to tooling_query_more. */
        nextRecordsUrl?: string;
        [key: string]: unknown;
      };
    };
    /** Continue a Tooling SOQL query using its returned nextRecordsUrl. */
    "salesforce.tooling_query_more": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Relative Tooling query cursor URL from the previous response.
         * @pattern ^/services/data/v[0-9]+\.[0-9]+/tooling/query/[A-Za-z0-9-]+$
         */
        nextRecordsUrl: string;
      };
      output: {
        /** Total number of matching records. */
        totalSize: number;
        /** Whether all query results have been returned. */
        done: boolean;
        /** Records in this page. */
        records: Array<Record<string, unknown>>;
        /** Relative Tooling cursor URL; pass it unchanged to tooling_query_more. */
        nextRecordsUrl?: string;
        [key: string]: unknown;
      };
    };
    /** Delete one ContentDocumentLink without deleting the underlying file. */
    "salesforce.unlink_file": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        linkId: string;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
      };
    };
    /** Update supplied fields on a Salesforce record; omitted fields remain unchanged. */
    "salesforce.update_record": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * Salesforce record ID (15 or 18 alphanumeric characters).
         * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
         */
        recordId: string;
        /** Field API names and JSON values to write. Use describe_object to discover writable fields; null clears a field. */
        fields: Record<string, unknown>;
        /** Apply active assignment rules with true, disable with false, or use a specific AssignmentRule ID. Omit to retain Salesforce defaults. */
        assignmentRule?: boolean | string;
        /** Duplicate detection options; omitted values retain Salesforce defaults. */
        duplicateRule?: {
          /** Acknowledge a duplicate alert and allow saving when the rule permits it. */
          allowSave?: boolean;
          /** Return fields of detected duplicate records. */
          includeRecordDetails?: boolean;
          /** Use current user sharing rules for duplicate detection. */
          runAsCurrentUser?: boolean;
        };
      };
      output: {
        /** ID of the affected record, when returned by Salesforce. */
        id?: string;
        /** Whether the mutation succeeded. */
        success: boolean;
        /** Whether an upsert created a new record. */
        created?: boolean;
        /** Errors returned by Salesforce. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Update up to 200 records, preserving per-record success and errors. */
    "salesforce.update_records": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Records to update.
         * @minItems 1
         * @maxItems 200
         */
        records: Array<{
          /**
           * Standard or custom sObject API name, for example Account or Invoice__c.
           * @pattern ^[A-Za-z][A-Za-z0-9_]*$
           */
          objectName: string;
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          recordId: string;
          /** Field API names and JSON values to write. Use describe_object to discover writable fields; null clears a field. */
          fields: Record<string, unknown>;
        }>;
        /** Roll back the entire collection if any item fails. Defaults to false. */
        allOrNone?: boolean;
      };
      output: {
        /** One result per item; inspect individual success flags. */
        results: Array<unknown>;
      };
    };
    /** Upload a file URL as a new Salesforce ContentVersion using streaming multipart data (up to 2 GB). Can add a version to an existing file. */
    "salesforce.upload_file": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Public HTTPS file URL to download; credentials are not forwarded to this URL.
         * @format uri
         */
        fileUrl: string;
        /**
         * File name including its extension.
         * @minLength 1
         */
        filename: string;
        /** ContentVersion fields such as Title, Description, FirstPublishLocationId, ContentDocumentId or ReasonForChange; PathOnClient defaults to filename. VersionData cannot be supplied here. */
        metadata?: {
          /** File title. */
          Title?: string;
          /** File description. */
          Description?: string;
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          FirstPublishLocationId?: string;
          /**
           * Salesforce record ID (15 or 18 alphanumeric characters).
           * @pattern ^[A-Za-z0-9]{15}([A-Za-z0-9]{3})?$
           */
          ContentDocumentId?: string;
          /** Reason for creating this file version. */
          ReasonForChange?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** ID of the affected record, when returned by Salesforce. */
        id?: string;
        /** Whether the mutation succeeded. */
        success: boolean;
        /** Whether an upsert created a new record. */
        created?: boolean;
        /** Errors returned by Salesforce. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Create or update one Salesforce record by an external ID field. Use updateOnly to prevent creation. */
    "salesforce.upsert_record": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * External ID field API name.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        externalIdField: string;
        /**
         * External ID value to match.
         * @minLength 1
         */
        externalId: string;
        /** Field API names and JSON values to write. Use describe_object to discover writable fields; null clears a field. */
        fields: Record<string, unknown>;
        /** Apply active assignment rules with true, disable with false, or use a specific AssignmentRule ID. Omit to retain Salesforce defaults. */
        assignmentRule?: boolean | string;
        /** Duplicate detection options; omitted values retain Salesforce defaults. */
        duplicateRule?: {
          /** Acknowledge a duplicate alert and allow saving when the rule permits it. */
          allowSave?: boolean;
          /** Return fields of detected duplicate records. */
          includeRecordDetails?: boolean;
          /** Use current user sharing rules for duplicate detection. */
          runAsCurrentUser?: boolean;
        };
        /** Fail if no matching record exists instead of inserting a record (API 61.0 or later). */
        updateOnly?: boolean;
      };
      output: {
        /** ID of the affected record, when returned by Salesforce. */
        id?: string;
        /** Whether the mutation succeeded. */
        success: boolean;
        /** Whether an upsert created a new record. */
        created?: boolean;
        /** Errors returned by Salesforce. */
        errors?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Upsert up to 200 records of one object using an external ID field. */
    "salesforce.upsert_records": {
      input: {
        /**
         * Salesforce REST API version. Defaults to 66.0; select a version supported by your organization.
         * @pattern ^[0-9]+\.[0-9]+$
         * @default "66.0"
         */
        apiVersion?: string;
        /**
         * Standard or custom sObject API name, for example Account or Invoice__c.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        objectName: string;
        /**
         * External ID field API name.
         * @pattern ^[A-Za-z][A-Za-z0-9_]*$
         */
        externalIdField: string;
        /**
         * Field maps, each containing the external ID field; do not include Id or attributes.
         * @minItems 1
         * @maxItems 200
         */
        records: Array<Record<string, unknown>>;
        /** Roll back the entire collection if any item fails. Defaults to false. */
        allOrNone?: boolean;
      };
      output: {
        /** One result per item; inspect individual success flags. */
        results: Array<unknown>;
      };
    };
  }
}
