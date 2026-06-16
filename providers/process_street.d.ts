import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Process Street workflow run from an existing workflow. */
    "process_street.create_workflow_run": {
      input: {
        /**
         * The Process Street opaque 22-character resource ID.
         * @minLength 1
         */
        workflowId: string;
        /**
         * The new workflow run display name.
         * @minLength 1
         */
        name?: string;
        /**
         * The optional ISO-8601 UTC due date for the new workflow run.
         * @format date-time
         */
        dueDate?: string;
        /** Whether the new workflow run should be shared. */
        shared?: boolean;
        /**
         * The optional idempotency-friendly workflow run reference identifier.
         * @minLength 1
         * @maxLength 100
         */
        referenceId?: string;
      };
      output: {
        /**
         * The Process Street opaque 22-character resource ID.
         * @minLength 1
         */
        id: string;
        /** The Process Street pagination or related-resource links. */
        links: Array<{
          /** The RFC-5988 link relation name. */
          name: string;
          /**
           * A Process Street URL.
           * @format uri
           */
          href: string;
          /** Whether a Process Street link targets the API or the app. */
          type: "Api" | "App";
          /** The optional related resource type. */
          rel: string | null;
        }>;
        /** The raw Process Street object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Process Street workflow by workflow ID. */
    "process_street.get_workflow": {
      input: {
        /**
         * The Process Street opaque 22-character resource ID.
         * @minLength 1
         */
        workflowId: string;
      };
      output: {
        /** A normalized Process Street workflow. */
        workflow: {
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          id: string;
          /** The workflow display name. */
          name: string | null;
          /** The optional workflow description. */
          description: string | null;
          /** Creation and last-modification metadata. */
          audit: {
            /**
             * The ISO-8601 UTC creation timestamp.
             * @format date-time
             */
            createdDate: string;
            /** A Process Street user summary. */
            createdBy: {
              /**
               * The Process Street opaque 22-character resource ID.
               * @minLength 1
               */
              id: string;
              /** The user's email address. */
              email: string;
              /** The user's display name. */
              username: string;
            };
            /**
             * The ISO-8601 UTC last update timestamp.
             * @format date-time
             */
            updatedDate: string;
            /** A Process Street user summary. */
            updatedBy: {
              /**
               * The Process Street opaque 22-character resource ID.
               * @minLength 1
               */
              id: string;
              /** The user's email address. */
              email: string;
              /** The user's display name. */
              username: string;
            };
          } | null;
          /** The Process Street pagination or related-resource links. */
          links: Array<{
            /** The RFC-5988 link relation name. */
            name: string;
            /**
             * A Process Street URL.
             * @format uri
             */
            href: string;
            /** Whether a Process Street link targets the API or the app. */
            type: "Api" | "App";
            /** The optional related resource type. */
            rel: string | null;
          }>;
          /** The raw Process Street object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Process Street workflow run by workflow run ID. */
    "process_street.get_workflow_run": {
      input: {
        /**
         * The Process Street opaque 22-character resource ID.
         * @minLength 1
         */
        workflowRunId: string;
      };
      output: {
        /** A normalized Process Street workflow run. */
        workflowRun: {
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          workflowId: string | null;
          /** The workflow run display name. */
          name: string | null;
          /** The workflow run lifecycle status reported by Process Street. */
          status: "Active" | "Completed" | "Archived" | "Deleted" | null;
          /** Whether the workflow run is shared. */
          shared: boolean | null;
          /** The workflow run migration state reported by Process Street. */
          migrationStatus: "Inactive" | "Scheduled" | "Migrating" | null;
          /** The optional ISO-8601 UTC due date. */
          dueDate: string | null;
          /** Workflow run audit metadata. */
          audit: {
            /**
             * The ISO-8601 UTC creation timestamp.
             * @format date-time
             */
            createdDate: string;
            /**
             * The Process Street opaque 22-character resource ID.
             * @minLength 1
             */
            createdById: string;
            /**
             * The ISO-8601 UTC last update timestamp.
             * @format date-time
             */
            updatedDate: string;
            /**
             * The Process Street opaque 22-character resource ID.
             * @minLength 1
             */
            updatedById: string;
          } | null;
          /** The Process Street pagination or related-resource links. */
          links: Array<{
            /** The RFC-5988 link relation name. */
            name: string;
            /**
             * A Process Street URL.
             * @format uri
             */
            href: string;
            /** Whether a Process Street link targets the API or the app. */
            type: "Api" | "App";
            /** The optional related resource type. */
            rel: string | null;
          }>;
          /** The raw Process Street object returned by the API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Process Street workflow form field definitions for one workflow. */
    "process_street.list_workflow_form_fields": {
      input: {
        /**
         * The Process Street opaque 22-character resource ID.
         * @minLength 1
         */
        workflowId: string;
        /**
         * The opaque pagination cursor returned by Process Street links. Omit it on the first page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The Process Street form field definitions returned by the API. */
        fields: Array<{
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          taskId: string | null;
          /** The Process Street variable key for the field. */
          key: string | null;
          /** The field label shown to users. */
          label: string | null;
          /** The Process Street form field type. */
          fieldType: "Date" | "Document" | "Email" | "File" | "Hidden" | "Members" | "MultiChoice" | "MultiFile" | "MultiSelect" | "Number" | "Select" | "SendRichEmail" | "Snippet" | "Table" | "Text" | "Textarea" | "Url" | null;
          /** Whether the field is linked to a data set row. */
          dataSetLinked: boolean | null;
          /** Creation and last-modification metadata. */
          audit: {
            /**
             * The ISO-8601 UTC creation timestamp.
             * @format date-time
             */
            createdDate: string;
            /** A Process Street user summary. */
            createdBy: {
              /**
               * The Process Street opaque 22-character resource ID.
               * @minLength 1
               */
              id: string;
              /** The user's email address. */
              email: string;
              /** The user's display name. */
              username: string;
            };
            /**
             * The ISO-8601 UTC last update timestamp.
             * @format date-time
             */
            updatedDate: string;
            /** A Process Street user summary. */
            updatedBy: {
              /**
               * The Process Street opaque 22-character resource ID.
               * @minLength 1
               */
              id: string;
              /** The user's email address. */
              email: string;
              /** The user's display name. */
              username: string;
            };
          } | null;
          /** The raw Process Street object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The Process Street pagination or related-resource links. */
        links: Array<{
          /** The RFC-5988 link relation name. */
          name: string;
          /**
           * A Process Street URL.
           * @format uri
           */
          href: string;
          /** Whether a Process Street link targets the API or the app. */
          type: "Api" | "App";
          /** The optional related resource type. */
          rel: string | null;
        }>;
      };
    };
    /** List Process Street workflow run form field values for one workflow run. */
    "process_street.list_workflow_run_form_fields": {
      input: {
        /**
         * The Process Street opaque 22-character resource ID.
         * @minLength 1
         */
        workflowRunId: string;
        /**
         * The opaque pagination cursor returned by Process Street links. Omit it on the first page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The Process Street workflow run form field values returned by the API. */
        fields: Array<{
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          workflowRunId: string | null;
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          taskId: string | null;
          /** The Process Street variable key for the field value. */
          key: string | null;
          /** The field label shown to users. */
          label: string | null;
          /** The Process Street form field type. */
          fieldType: "Date" | "Document" | "Email" | "File" | "Hidden" | "Members" | "MultiChoice" | "MultiFile" | "MultiSelect" | "Number" | "Select" | "SendRichEmail" | "Snippet" | "Table" | "Text" | "Textarea" | "Url" | null;
          /** The Process Street JSON-encoded field value. */
          data: unknown;
          /** Whether the field value is linked to a data set row. */
          dataSetLinked: boolean | null;
          /** The ISO-8601 UTC field-value update timestamp. */
          updatedDate: string | null;
          /** A Process Street user summary. */
          updatedBy: {
            /**
             * The Process Street opaque 22-character resource ID.
             * @minLength 1
             */
            id: string;
            /** The user's email address. */
            email: string;
            /** The user's display name. */
            username: string;
          } | null;
          /** The Process Street pagination or related-resource links. */
          links: Array<{
            /** The RFC-5988 link relation name. */
            name: string;
            /**
             * A Process Street URL.
             * @format uri
             */
            href: string;
            /** Whether a Process Street link targets the API or the app. */
            type: "Api" | "App";
            /** The optional related resource type. */
            rel: string | null;
          }>;
          /** The raw Process Street object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The Process Street pagination or related-resource links. */
        links: Array<{
          /** The RFC-5988 link relation name. */
          name: string;
          /**
           * A Process Street URL.
           * @format uri
           */
          href: string;
          /** Whether a Process Street link targets the API or the app. */
          type: "Api" | "App";
          /** The optional related resource type. */
          rel: string | null;
        }>;
      };
    };
    /** List Process Street workflow runs with optional workflow, status, and cursor filters. */
    "process_street.list_workflow_runs": {
      input: {
        /**
         * The Process Street opaque 22-character resource ID.
         * @minLength 1
         */
        workflowId?: string;
        /**
         * The workflow run statuses to include.
         * @minItems 1
         */
        status?: Array<"Active" | "Completed" | "Archived">;
        /**
         * The opaque pagination cursor returned by Process Street links. Omit it on the first page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The Process Street workflow runs returned by the API. */
        workflowRuns: Array<{
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          workflowId: string | null;
          /** The workflow run display name. */
          name: string | null;
          /** The workflow run lifecycle status reported by Process Street. */
          status: "Active" | "Completed" | "Archived" | "Deleted" | null;
          /** Whether the workflow run is shared. */
          shared: boolean | null;
          /** The workflow run migration state reported by Process Street. */
          migrationStatus: "Inactive" | "Scheduled" | "Migrating" | null;
          /** The optional ISO-8601 UTC due date. */
          dueDate: string | null;
          /** Workflow run audit metadata. */
          audit: {
            /**
             * The ISO-8601 UTC creation timestamp.
             * @format date-time
             */
            createdDate: string;
            /**
             * The Process Street opaque 22-character resource ID.
             * @minLength 1
             */
            createdById: string;
            /**
             * The ISO-8601 UTC last update timestamp.
             * @format date-time
             */
            updatedDate: string;
            /**
             * The Process Street opaque 22-character resource ID.
             * @minLength 1
             */
            updatedById: string;
          } | null;
          /** The Process Street pagination or related-resource links. */
          links: Array<{
            /** The RFC-5988 link relation name. */
            name: string;
            /**
             * A Process Street URL.
             * @format uri
             */
            href: string;
            /** Whether a Process Street link targets the API or the app. */
            type: "Api" | "App";
            /** The optional related resource type. */
            rel: string | null;
          }>;
          /** The raw Process Street object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The Process Street pagination or related-resource links. */
        links: Array<{
          /** The RFC-5988 link relation name. */
          name: string;
          /**
           * A Process Street URL.
           * @format uri
           */
          href: string;
          /** Whether a Process Street link targets the API or the app. */
          type: "Api" | "App";
          /** The optional related resource type. */
          rel: string | null;
        }>;
      };
    };
    /** List Process Street tasks for one workflow run. */
    "process_street.list_workflow_tasks": {
      input: {
        /**
         * The Process Street opaque 22-character resource ID.
         * @minLength 1
         */
        workflowRunId: string;
        /**
         * The opaque pagination cursor returned by Process Street links. Omit it on the first page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The Process Street tasks returned by the API. */
        tasks: Array<{
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          workflowRunId: string | null;
          /** The workflow task completion status to write. */
          status: "NotCompleted" | "Completed" | null;
          /** The task display name. */
          name: string | null;
          /** Whether the task is hidden. */
          hidden: boolean | null;
          /** Whether the task is blocked by a prior stop task. */
          stopped: boolean | null;
          /** The Process Street task type. */
          taskType: "Standard" | "Approval" | "AI" | "Code" | null;
          /** The optional ISO-8601 UTC due date. */
          dueDate: string | null;
          /** The ISO-8601 UTC task completion timestamp. */
          completedDate: string | null;
          /** The ISO-8601 UTC task update timestamp. */
          updatedDate: string | null;
          /** A Process Street user summary. */
          updatedBy: {
            /**
             * The Process Street opaque 22-character resource ID.
             * @minLength 1
             */
            id: string;
            /** The user's email address. */
            email: string;
            /** The user's display name. */
            username: string;
          } | null;
          /** A Process Street user summary. */
          completedBy: {
            /**
             * The Process Street opaque 22-character resource ID.
             * @minLength 1
             */
            id: string;
            /** The user's email address. */
            email: string;
            /** The user's display name. */
            username: string;
          } | null;
          /** The Process Street pagination or related-resource links. */
          links: Array<{
            /** The RFC-5988 link relation name. */
            name: string;
            /**
             * A Process Street URL.
             * @format uri
             */
            href: string;
            /** Whether a Process Street link targets the API or the app. */
            type: "Api" | "App";
            /** The optional related resource type. */
            rel: string | null;
          }>;
          /** The raw Process Street object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The Process Street pagination or related-resource links. */
        links: Array<{
          /** The RFC-5988 link relation name. */
          name: string;
          /**
           * A Process Street URL.
           * @format uri
           */
          href: string;
          /** Whether a Process Street link targets the API or the app. */
          type: "Api" | "App";
          /** The optional related resource type. */
          rel: string | null;
        }>;
      };
    };
    /** List Process Street workflows with optional name filtering and cursor pagination. */
    "process_street.list_workflows": {
      input: {
        /**
         * A case-insensitive partial workflow name search.
         * @minLength 1
         */
        name?: string;
        /**
         * The opaque pagination cursor returned by Process Street links. Omit it on the first page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The Process Street workflows returned by the API. */
        workflows: Array<{
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          id: string;
          /** The workflow display name. */
          name: string | null;
          /** The optional workflow description. */
          description: string | null;
          /** Creation and last-modification metadata. */
          audit: {
            /**
             * The ISO-8601 UTC creation timestamp.
             * @format date-time
             */
            createdDate: string;
            /** A Process Street user summary. */
            createdBy: {
              /**
               * The Process Street opaque 22-character resource ID.
               * @minLength 1
               */
              id: string;
              /** The user's email address. */
              email: string;
              /** The user's display name. */
              username: string;
            };
            /**
             * The ISO-8601 UTC last update timestamp.
             * @format date-time
             */
            updatedDate: string;
            /** A Process Street user summary. */
            updatedBy: {
              /**
               * The Process Street opaque 22-character resource ID.
               * @minLength 1
               */
              id: string;
              /** The user's email address. */
              email: string;
              /** The user's display name. */
              username: string;
            };
          } | null;
          /** The Process Street pagination or related-resource links. */
          links: Array<{
            /** The RFC-5988 link relation name. */
            name: string;
            /**
             * A Process Street URL.
             * @format uri
             */
            href: string;
            /** Whether a Process Street link targets the API or the app. */
            type: "Api" | "App";
            /** The optional related resource type. */
            rel: string | null;
          }>;
          /** The raw Process Street object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The Process Street pagination or related-resource links. */
        links: Array<{
          /** The RFC-5988 link relation name. */
          name: string;
          /**
           * A Process Street URL.
           * @format uri
           */
          href: string;
          /** Whether a Process Street link targets the API or the app. */
          type: "Api" | "App";
          /** The optional related resource type. */
          rel: string | null;
        }>;
      };
    };
    /** Batch update Process Street workflow run form field values for one workflow run. */
    "process_street.update_workflow_run_form_fields": {
      input: {
        /**
         * The Process Street opaque 22-character resource ID.
         * @minLength 1
         */
        workflowRunId: string;
        /**
         * The Process Street form field update entries to write.
         * @minItems 1
         */
        fields: Array<{
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          id: string;
          /** A single string value to assign to the field. */
          value?: string;
          /** Multiple string values to assign to the field. */
          values?: Array<string>;
          /** Whether a date field should hide the time component. */
          timeHidden?: boolean;
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          dataSetRowId?: string;
        }>;
      };
      output: {
        /** The Process Street workflow run form field values returned by the API. */
        fields: Array<{
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          workflowRunId: string | null;
          /**
           * The Process Street opaque 22-character resource ID.
           * @minLength 1
           */
          taskId: string | null;
          /** The Process Street variable key for the field value. */
          key: string | null;
          /** The field label shown to users. */
          label: string | null;
          /** The Process Street form field type. */
          fieldType: "Date" | "Document" | "Email" | "File" | "Hidden" | "Members" | "MultiChoice" | "MultiFile" | "MultiSelect" | "Number" | "Select" | "SendRichEmail" | "Snippet" | "Table" | "Text" | "Textarea" | "Url" | null;
          /** The Process Street JSON-encoded field value. */
          data: unknown;
          /** Whether the field value is linked to a data set row. */
          dataSetLinked: boolean | null;
          /** The ISO-8601 UTC field-value update timestamp. */
          updatedDate: string | null;
          /** A Process Street user summary. */
          updatedBy: {
            /**
             * The Process Street opaque 22-character resource ID.
             * @minLength 1
             */
            id: string;
            /** The user's email address. */
            email: string;
            /** The user's display name. */
            username: string;
          } | null;
          /** The Process Street pagination or related-resource links. */
          links: Array<{
            /** The RFC-5988 link relation name. */
            name: string;
            /**
             * A Process Street URL.
             * @format uri
             */
            href: string;
            /** Whether a Process Street link targets the API or the app. */
            type: "Api" | "App";
            /** The optional related resource type. */
            rel: string | null;
          }>;
          /** The raw Process Street object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The Process Street pagination or related-resource links. */
        links: Array<{
          /** The RFC-5988 link relation name. */
          name: string;
          /**
           * A Process Street URL.
           * @format uri
           */
          href: string;
          /** Whether a Process Street link targets the API or the app. */
          type: "Api" | "App";
          /** The optional related resource type. */
          rel: string | null;
        }>;
      };
    };
    /** Update one Process Street workflow task status and optional due date by workflow run ID and task ID. */
    "process_street.update_workflow_task": {
      input: {
        /**
         * The Process Street opaque 22-character resource ID.
         * @minLength 1
         */
        workflowRunId: string;
        /**
         * The Process Street opaque 22-character resource ID.
         * @minLength 1
         */
        taskId: string;
        /** The workflow task completion status to write. */
        status: "NotCompleted" | "Completed";
        /**
         * The optional ISO-8601 UTC due date to assign to the task.
         * @format date-time
         */
        dueDate?: string;
      };
      output: {
        /** Whether the Process Street task update request succeeded. */
        ok: boolean;
      };
    };
  }
}
