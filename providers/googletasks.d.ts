import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Clear every completed task from a Google Tasks task list. */
    "googletasks.clear_tasks": {
      input: {
        /**
         * Google Tasks task list ID. Use @default for the primary list when supported.
         * @minLength 1
         */
        tasklistId?: string;
      };
      output: {
        /** Whether the Google Tasks operation completed successfully. */
        success: true;
      };
    };
    /** Create a new Google Tasks task list. */
    "googletasks.create_task_list": {
      input: {
        /**
         * Title for the new task list.
         * @minLength 1
         */
        title: string;
      };
      output: {
        /** Created task list. */
        taskList: {
          /** Google Tasks task list ID. */
          id: string;
          /** Google Tasks resource kind. */
          kind: string;
          /** Entity tag for the task list resource. */
          etag: string | null;
          /** Task list title. */
          title: string | null;
          /** Last update time for the task list, in RFC 3339 format. */
          updated: string | null;
          /** API URL for the task list resource. */
          selfLink: string | null;
        };
      };
    };
    /** Delete a Google Tasks task. */
    "googletasks.delete_task": {
      input: {
        /**
         * Google Tasks task list ID. Use @default for the primary list when supported.
         * @minLength 1
         */
        tasklistId?: string;
        /**
         * Google Tasks task ID.
         * @minLength 1
         */
        taskId?: string;
      };
      output: {
        /** Whether the Google Tasks operation completed successfully. */
        success: true;
      };
    };
    /** Delete a Google Tasks task list. */
    "googletasks.delete_task_list": {
      input: {
        /**
         * Google Tasks task list ID. Use @default for the primary list when supported.
         * @minLength 1
         */
        tasklistId?: string;
      };
      output: {
        /** Whether the Google Tasks operation completed successfully. */
        success: true;
      };
    };
    /** Fetch a Google Tasks task by task list ID and task ID. */
    "googletasks.get_task": {
      input: {
        /**
         * Google Tasks task list ID. Use @default for the primary list when supported.
         * @minLength 1
         */
        tasklistId?: string;
        /**
         * Google Tasks task ID.
         * @minLength 1
         */
        taskId?: string;
      };
      output: {
        /** Task returned by Google Tasks. */
        task: {
          /** Google Tasks task ID. */
          id: string;
          /** Google Tasks resource kind. */
          kind: string;
          /** Entity tag for the task resource. */
          etag: string | null;
          /** Task title. */
          title: string | null;
          /** Task notes. */
          notes: string | null;
          /** Task status. */
          status: "needsAction" | "completed" | null;
          /** Parent task ID when this task is a subtask. */
          parent: string | null;
          /** Lexicographic position token among sibling tasks. */
          position: string | null;
          /** Task due timestamp in RFC 3339 format. */
          due: string | null;
          /** Timestamp when the task was completed, in RFC 3339 format. */
          completed: string | null;
          /** Whether the task is marked as deleted. */
          deleted: boolean;
          /** Whether the task is hidden from the default Google Tasks view. */
          hidden: boolean;
          /** Last update time for the task, in RFC 3339 format. */
          updated: string | null;
          /** API URL for the task resource. */
          selfLink: string | null;
          /** Google Tasks web URL for the task. */
          webViewLink: string | null;
          /** Links attached to the task. */
          links: Array<{
            /** Type of linked resource. */
            type: string;
            /** Absolute URL or URI for the linked resource. */
            link: string;
            /** Human-readable description of the link. */
            description?: string;
          }>;
          /** Assignment metadata for tasks created from other Google surfaces. */
          assignmentInfo: {
            /** Type of surface where the task was assigned. */
            surfaceType?: "CONTEXT_TYPE_UNSPECIFIED" | "GMAIL" | "DOCUMENT" | "SPACE";
            /** Absolute link to the source assignment surface. */
            linkToTask?: string;
            /** Google Chat space information for assigned tasks. */
            spaceInfo?: {
              /** Google Chat space resource name. */
              space?: string;
            };
            /** Google Drive file information for assigned tasks. */
            driveResourceInfo?: {
              /** Google Drive file ID for the source document. */
              driveFileId?: string;
              /** Google Drive resource key for the source document. */
              resourceKey?: string;
            };
          } | null;
        };
      };
    };
    /** Fetch a Google Tasks task list by ID. */
    "googletasks.get_task_list": {
      input: {
        /**
         * Google Tasks task list ID. Use @default for the primary list when supported.
         * @minLength 1
         */
        tasklistId?: string;
      };
      output: {
        /** Task list returned by Google Tasks. */
        taskList: {
          /** Google Tasks task list ID. */
          id: string;
          /** Google Tasks resource kind. */
          kind: string;
          /** Entity tag for the task list resource. */
          etag: string | null;
          /** Task list title. */
          title: string | null;
          /** Last update time for the task list, in RFC 3339 format. */
          updated: string | null;
          /** API URL for the task list resource. */
          selfLink: string | null;
        };
      };
    };
    /** Create a task in a Google Tasks task list. */
    "googletasks.insert_task": {
      input: {
        /**
         * Google Tasks task list ID. Use @default for the primary list when supported.
         * @minLength 1
         */
        tasklistId?: string;
        /** Task resource ID to send in the request body. */
        id?: string;
        /** Entity tag to send in the request body. */
        etag?: string;
        /** Task title. */
        title: string;
        /** Plain-text task notes. */
        notes?: string;
        /** Task status. */
        status?: "needsAction" | "completed";
        /**
         * Task due timestamp in RFC 3339 format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        due?: string;
        /**
         * Completion timestamp in RFC 3339 format when the task is completed.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        completed?: string;
        /** Whether the task is marked as deleted. */
        deleted?: boolean;
        /** Parent task ID. */
        taskParent?: string;
        /** Previous sibling task ID. */
        taskPrevious?: string;
      };
      output: {
        /** Created task. */
        task: {
          /** Google Tasks task ID. */
          id: string;
          /** Google Tasks resource kind. */
          kind: string;
          /** Entity tag for the task resource. */
          etag: string | null;
          /** Task title. */
          title: string | null;
          /** Task notes. */
          notes: string | null;
          /** Task status. */
          status: "needsAction" | "completed" | null;
          /** Parent task ID when this task is a subtask. */
          parent: string | null;
          /** Lexicographic position token among sibling tasks. */
          position: string | null;
          /** Task due timestamp in RFC 3339 format. */
          due: string | null;
          /** Timestamp when the task was completed, in RFC 3339 format. */
          completed: string | null;
          /** Whether the task is marked as deleted. */
          deleted: boolean;
          /** Whether the task is hidden from the default Google Tasks view. */
          hidden: boolean;
          /** Last update time for the task, in RFC 3339 format. */
          updated: string | null;
          /** API URL for the task resource. */
          selfLink: string | null;
          /** Google Tasks web URL for the task. */
          webViewLink: string | null;
          /** Links attached to the task. */
          links: Array<{
            /** Type of linked resource. */
            type: string;
            /** Absolute URL or URI for the linked resource. */
            link: string;
            /** Human-readable description of the link. */
            description?: string;
          }>;
          /** Assignment metadata for tasks created from other Google surfaces. */
          assignmentInfo: {
            /** Type of surface where the task was assigned. */
            surfaceType?: "CONTEXT_TYPE_UNSPECIFIED" | "GMAIL" | "DOCUMENT" | "SPACE";
            /** Absolute link to the source assignment surface. */
            linkToTask?: string;
            /** Google Chat space information for assigned tasks. */
            spaceInfo?: {
              /** Google Chat space resource name. */
              space?: string;
            };
            /** Google Drive file information for assigned tasks. */
            driveResourceInfo?: {
              /** Google Drive file ID for the source document. */
              driveFileId?: string;
              /** Google Drive resource key for the source document. */
              resourceKey?: string;
            };
          } | null;
        };
      };
    };
    /** List tasks across every Google Tasks task list visible to the current connection. */
    "googletasks.list_all_tasks": {
      input: {
        /**
         * Only include tasks due on or before this timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        dueMax?: string;
        /**
         * Only include tasks due on or after this timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        dueMin?: string;
        /**
         * Only include tasks completed on or before this timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        completedMax?: string;
        /**
         * Only include tasks completed on or after this timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        completedMin?: string;
        /**
         * Only include tasks updated on or after this timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        updatedMin?: string;
        /**
         * Whether completed tasks should be returned.
         * @default true
         */
        showCompleted: boolean;
        /** Whether deleted tasks should be returned. */
        showDeleted?: boolean;
        /** Whether hidden tasks should be returned. */
        showHidden?: boolean;
        /** Whether assigned tasks should be returned. */
        showAssigned?: boolean;
        /**
         * Maximum number of tasks to return across all task lists.
         * @minimum 1
         * @maximum 100000
         */
        maxTasksTotal?: number;
      };
      output: {
        /** Task lists visited while aggregating tasks. */
        taskLists: Array<{
          /** Task list ID. */
          id: string;
          /** Task list title. */
          title: string | null;
          /** Number of tasks returned for this task list. */
          taskCount: number;
        }>;
        /** Tasks returned across every visited task list. */
        tasks: Array<{
          /** Google Tasks task ID. */
          id: string;
          /** Google Tasks resource kind. */
          kind: string;
          /** Entity tag for the task resource. */
          etag: string | null;
          /** Task title. */
          title: string | null;
          /** Task notes. */
          notes: string | null;
          /** Task status. */
          status: "needsAction" | "completed" | null;
          /** Parent task ID when this task is a subtask. */
          parent: string | null;
          /** Lexicographic position token among sibling tasks. */
          position: string | null;
          /** Task due timestamp in RFC 3339 format. */
          due: string | null;
          /** Timestamp when the task was completed, in RFC 3339 format. */
          completed: string | null;
          /** Whether the task is marked as deleted. */
          deleted: boolean;
          /** Whether the task is hidden from the default Google Tasks view. */
          hidden: boolean;
          /** Last update time for the task, in RFC 3339 format. */
          updated: string | null;
          /** API URL for the task resource. */
          selfLink: string | null;
          /** Google Tasks web URL for the task. */
          webViewLink: string | null;
          /** Links attached to the task. */
          links: Array<{
            /** Type of linked resource. */
            type: string;
            /** Absolute URL or URI for the linked resource. */
            link: string;
            /** Human-readable description of the link. */
            description?: string;
          }>;
          /** Assignment metadata for tasks created from other Google surfaces. */
          assignmentInfo: {
            /** Type of surface where the task was assigned. */
            surfaceType?: "CONTEXT_TYPE_UNSPECIFIED" | "GMAIL" | "DOCUMENT" | "SPACE";
            /** Absolute link to the source assignment surface. */
            linkToTask?: string;
            /** Google Chat space information for assigned tasks. */
            spaceInfo?: {
              /** Google Chat space resource name. */
              space?: string;
            };
            /** Google Drive file information for assigned tasks. */
            driveResourceInfo?: {
              /** Google Drive file ID for the source document. */
              driveFileId?: string;
              /** Google Drive resource key for the source document. */
              resourceKey?: string;
            };
          } | null;
          /** Task list ID that contains the task. */
          tasklistId: string;
          /** Task list title that contains the task. */
          tasklistTitle: string | null;
        }>;
        /** Number of task lists included in the aggregation. */
        totalLists: number;
        /** Number of tasks returned by the aggregation. */
        totalTasks: number;
        /** Whether aggregation stopped early because maxTasksTotal was reached. */
        truncated: boolean;
      };
    };
    /** List Google Tasks task lists visible to the current connection. */
    "googletasks.list_task_lists": {
      input: {
        /**
         * Maximum number of task lists to return per page.
         * @minimum 1
         * @maximum 1000
         */
        maxResults?: number;
        /** Opaque pagination token returned by a previous Google Tasks response. */
        pageToken?: string;
      };
      output: {
        /** Task lists returned by Google Tasks. */
        taskLists: Array<{
          /** Google Tasks task list ID. */
          id: string;
          /** Google Tasks resource kind. */
          kind: string;
          /** Entity tag for the task list resource. */
          etag: string | null;
          /** Task list title. */
          title: string | null;
          /** Last update time for the task list, in RFC 3339 format. */
          updated: string | null;
          /** API URL for the task list resource. */
          selfLink: string | null;
        }>;
        /** Opaque token for the next page, or null when there are no more results. */
        nextPageToken: string | null;
      };
    };
    /** List tasks from a Google Tasks task list. */
    "googletasks.list_tasks": {
      input: {
        /**
         * Google Tasks task list ID. Use @default for the primary list when supported.
         * @minLength 1
         */
        tasklistId?: string;
        /**
         * Only return tasks due on or before this timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        dueMax?: string;
        /**
         * Only return tasks due on or after this timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        dueMin?: string;
        /**
         * Only return tasks completed on or before this timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        completedMax?: string;
        /**
         * Only return tasks completed on or after this timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        completedMin?: string;
        /**
         * Only return tasks updated on or after this timestamp.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        updatedMin?: string;
        /** Opaque pagination token returned by a previous Google Tasks response. */
        pageToken?: string;
        /**
         * Maximum number of items to return per page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /**
         * Whether completed tasks should be returned.
         * @default true
         */
        showCompleted: boolean;
        /** Whether deleted tasks should be returned. */
        showDeleted?: boolean;
        /** Whether hidden tasks should be returned. */
        showHidden?: boolean;
        /** Whether assigned tasks should be returned. */
        showAssigned?: boolean;
      };
      output: {
        /** Tasks returned by Google Tasks. */
        tasks: Array<{
          /** Google Tasks task ID. */
          id: string;
          /** Google Tasks resource kind. */
          kind: string;
          /** Entity tag for the task resource. */
          etag: string | null;
          /** Task title. */
          title: string | null;
          /** Task notes. */
          notes: string | null;
          /** Task status. */
          status: "needsAction" | "completed" | null;
          /** Parent task ID when this task is a subtask. */
          parent: string | null;
          /** Lexicographic position token among sibling tasks. */
          position: string | null;
          /** Task due timestamp in RFC 3339 format. */
          due: string | null;
          /** Timestamp when the task was completed, in RFC 3339 format. */
          completed: string | null;
          /** Whether the task is marked as deleted. */
          deleted: boolean;
          /** Whether the task is hidden from the default Google Tasks view. */
          hidden: boolean;
          /** Last update time for the task, in RFC 3339 format. */
          updated: string | null;
          /** API URL for the task resource. */
          selfLink: string | null;
          /** Google Tasks web URL for the task. */
          webViewLink: string | null;
          /** Links attached to the task. */
          links: Array<{
            /** Type of linked resource. */
            type: string;
            /** Absolute URL or URI for the linked resource. */
            link: string;
            /** Human-readable description of the link. */
            description?: string;
          }>;
          /** Assignment metadata for tasks created from other Google surfaces. */
          assignmentInfo: {
            /** Type of surface where the task was assigned. */
            surfaceType?: "CONTEXT_TYPE_UNSPECIFIED" | "GMAIL" | "DOCUMENT" | "SPACE";
            /** Absolute link to the source assignment surface. */
            linkToTask?: string;
            /** Google Chat space information for assigned tasks. */
            spaceInfo?: {
              /** Google Chat space resource name. */
              space?: string;
            };
            /** Google Drive file information for assigned tasks. */
            driveResourceInfo?: {
              /** Google Drive file ID for the source document. */
              driveFileId?: string;
              /** Google Drive resource key for the source document. */
              resourceKey?: string;
            };
          } | null;
        }>;
        /** Opaque token for the next page, or null when there are no more results. */
        nextPageToken: string | null;
      };
    };
    /** Move a Google Tasks task within a list or into another task list. */
    "googletasks.move_task": {
      input: {
        /**
         * Source task list ID.
         * @minLength 1
         */
        tasklist: string;
        /**
         * Task ID to move.
         * @minLength 1
         */
        task: string;
        /** New parent task ID. */
        parent?: string;
        /** New previous sibling task ID. */
        previous?: string;
        /** Destination task list ID. */
        destinationTasklist?: string;
      };
      output: {
        /** Moved task. */
        task: {
          /** Google Tasks task ID. */
          id: string;
          /** Google Tasks resource kind. */
          kind: string;
          /** Entity tag for the task resource. */
          etag: string | null;
          /** Task title. */
          title: string | null;
          /** Task notes. */
          notes: string | null;
          /** Task status. */
          status: "needsAction" | "completed" | null;
          /** Parent task ID when this task is a subtask. */
          parent: string | null;
          /** Lexicographic position token among sibling tasks. */
          position: string | null;
          /** Task due timestamp in RFC 3339 format. */
          due: string | null;
          /** Timestamp when the task was completed, in RFC 3339 format. */
          completed: string | null;
          /** Whether the task is marked as deleted. */
          deleted: boolean;
          /** Whether the task is hidden from the default Google Tasks view. */
          hidden: boolean;
          /** Last update time for the task, in RFC 3339 format. */
          updated: string | null;
          /** API URL for the task resource. */
          selfLink: string | null;
          /** Google Tasks web URL for the task. */
          webViewLink: string | null;
          /** Links attached to the task. */
          links: Array<{
            /** Type of linked resource. */
            type: string;
            /** Absolute URL or URI for the linked resource. */
            link: string;
            /** Human-readable description of the link. */
            description?: string;
          }>;
          /** Assignment metadata for tasks created from other Google surfaces. */
          assignmentInfo: {
            /** Type of surface where the task was assigned. */
            surfaceType?: "CONTEXT_TYPE_UNSPECIFIED" | "GMAIL" | "DOCUMENT" | "SPACE";
            /** Absolute link to the source assignment surface. */
            linkToTask?: string;
            /** Google Chat space information for assigned tasks. */
            spaceInfo?: {
              /** Google Chat space resource name. */
              space?: string;
            };
            /** Google Drive file information for assigned tasks. */
            driveResourceInfo?: {
              /** Google Drive file ID for the source document. */
              driveFileId?: string;
              /** Google Drive resource key for the source document. */
              resourceKey?: string;
            };
          } | null;
        };
      };
    };
    /** Partially update a Google Tasks task. */
    "googletasks.patch_task": {
      input: {
        /**
         * Google Tasks task list ID. Use @default for the primary list when supported.
         * @minLength 1
         */
        tasklistId?: string;
        /**
         * Google Tasks task ID.
         * @minLength 1
         */
        taskId?: string;
        /** Task resource ID to send in the request body. */
        id?: string;
        /** Entity tag to send in the request body. */
        etag?: string;
        /**
         * Task title.
         * @minLength 1
         */
        title?: string;
        /** Plain-text task notes. */
        notes?: string;
        /** Task status. */
        status?: "needsAction" | "completed";
        /**
         * Task due timestamp in RFC 3339 format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        due?: string;
        /**
         * Completion timestamp in RFC 3339 format when the task is completed.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        completed?: string;
        /** Whether the task is marked as deleted. */
        deleted?: boolean;
      };
      output: {
        /** Updated task. */
        task: {
          /** Google Tasks task ID. */
          id: string;
          /** Google Tasks resource kind. */
          kind: string;
          /** Entity tag for the task resource. */
          etag: string | null;
          /** Task title. */
          title: string | null;
          /** Task notes. */
          notes: string | null;
          /** Task status. */
          status: "needsAction" | "completed" | null;
          /** Parent task ID when this task is a subtask. */
          parent: string | null;
          /** Lexicographic position token among sibling tasks. */
          position: string | null;
          /** Task due timestamp in RFC 3339 format. */
          due: string | null;
          /** Timestamp when the task was completed, in RFC 3339 format. */
          completed: string | null;
          /** Whether the task is marked as deleted. */
          deleted: boolean;
          /** Whether the task is hidden from the default Google Tasks view. */
          hidden: boolean;
          /** Last update time for the task, in RFC 3339 format. */
          updated: string | null;
          /** API URL for the task resource. */
          selfLink: string | null;
          /** Google Tasks web URL for the task. */
          webViewLink: string | null;
          /** Links attached to the task. */
          links: Array<{
            /** Type of linked resource. */
            type: string;
            /** Absolute URL or URI for the linked resource. */
            link: string;
            /** Human-readable description of the link. */
            description?: string;
          }>;
          /** Assignment metadata for tasks created from other Google surfaces. */
          assignmentInfo: {
            /** Type of surface where the task was assigned. */
            surfaceType?: "CONTEXT_TYPE_UNSPECIFIED" | "GMAIL" | "DOCUMENT" | "SPACE";
            /** Absolute link to the source assignment surface. */
            linkToTask?: string;
            /** Google Chat space information for assigned tasks. */
            spaceInfo?: {
              /** Google Chat space resource name. */
              space?: string;
            };
            /** Google Drive file information for assigned tasks. */
            driveResourceInfo?: {
              /** Google Drive file ID for the source document. */
              driveFileId?: string;
              /** Google Drive resource key for the source document. */
              resourceKey?: string;
            };
          } | null;
        };
      };
    };
    /** Partially update the title of a Google Tasks task list. */
    "googletasks.patch_task_list": {
      input: {
        /**
         * Google Tasks task list ID. Use @default for the primary list when supported.
         * @minLength 1
         */
        tasklistId: string;
        /**
         * New task list title.
         * @minLength 1
         */
        title: string;
      };
      output: {
        /** Updated task list. */
        taskList: {
          /** Google Tasks task list ID. */
          id: string;
          /** Google Tasks resource kind. */
          kind: string;
          /** Entity tag for the task list resource. */
          etag: string | null;
          /** Task list title. */
          title: string | null;
          /** Last update time for the task list, in RFC 3339 format. */
          updated: string | null;
          /** API URL for the task list resource. */
          selfLink: string | null;
        };
      };
    };
    /** Deprecated alias for update_task_full. Fully replace the mutable fields of a Google Tasks task. */
    "googletasks.update_task": {
      input: {
        /**
         * Google Tasks task list ID. Use @default for the primary list when supported.
         * @minLength 1
         */
        tasklistId?: string;
        /**
         * Google Tasks task ID.
         * @minLength 1
         */
        taskId?: string;
        /** Task resource ID to send in the request body. */
        id: string;
        /** Entity tag to send in the request body. */
        etag?: string;
        /**
         * Task title.
         * @minLength 1
         */
        title: string;
        /** Plain-text task notes. */
        notes?: string;
        /** Task status. */
        status?: "needsAction" | "completed";
        /**
         * Task due timestamp in RFC 3339 format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        due?: string;
        /**
         * Completion timestamp in RFC 3339 format when the task is completed.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        completed?: string;
        /** Whether the task is marked as deleted. */
        deleted?: boolean;
      };
      output: {
        /** Updated task. */
        task: {
          /** Google Tasks task ID. */
          id: string;
          /** Google Tasks resource kind. */
          kind: string;
          /** Entity tag for the task resource. */
          etag: string | null;
          /** Task title. */
          title: string | null;
          /** Task notes. */
          notes: string | null;
          /** Task status. */
          status: "needsAction" | "completed" | null;
          /** Parent task ID when this task is a subtask. */
          parent: string | null;
          /** Lexicographic position token among sibling tasks. */
          position: string | null;
          /** Task due timestamp in RFC 3339 format. */
          due: string | null;
          /** Timestamp when the task was completed, in RFC 3339 format. */
          completed: string | null;
          /** Whether the task is marked as deleted. */
          deleted: boolean;
          /** Whether the task is hidden from the default Google Tasks view. */
          hidden: boolean;
          /** Last update time for the task, in RFC 3339 format. */
          updated: string | null;
          /** API URL for the task resource. */
          selfLink: string | null;
          /** Google Tasks web URL for the task. */
          webViewLink: string | null;
          /** Links attached to the task. */
          links: Array<{
            /** Type of linked resource. */
            type: string;
            /** Absolute URL or URI for the linked resource. */
            link: string;
            /** Human-readable description of the link. */
            description?: string;
          }>;
          /** Assignment metadata for tasks created from other Google surfaces. */
          assignmentInfo: {
            /** Type of surface where the task was assigned. */
            surfaceType?: "CONTEXT_TYPE_UNSPECIFIED" | "GMAIL" | "DOCUMENT" | "SPACE";
            /** Absolute link to the source assignment surface. */
            linkToTask?: string;
            /** Google Chat space information for assigned tasks. */
            spaceInfo?: {
              /** Google Chat space resource name. */
              space?: string;
            };
            /** Google Drive file information for assigned tasks. */
            driveResourceInfo?: {
              /** Google Drive file ID for the source document. */
              driveFileId?: string;
              /** Google Drive resource key for the source document. */
              resourceKey?: string;
            };
          } | null;
        };
      };
    };
    /** Replace the mutable fields of a Google Tasks task with a full update. */
    "googletasks.update_task_full": {
      input: {
        /**
         * Google Tasks task list ID. Use @default for the primary list when supported.
         * @minLength 1
         */
        tasklistId?: string;
        /**
         * Google Tasks task ID.
         * @minLength 1
         */
        taskId?: string;
        /** Task resource ID to send in the request body. */
        id: string;
        /** Entity tag to send in the request body. */
        etag?: string;
        /**
         * Task title.
         * @minLength 1
         */
        title: string;
        /** Plain-text task notes. */
        notes?: string;
        /** Task status. */
        status?: "needsAction" | "completed";
        /**
         * Task due timestamp in RFC 3339 format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        due?: string;
        /**
         * Completion timestamp in RFC 3339 format when the task is completed.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|([+-](?:[01]\d|2[0-3]):[0-5]\d)))$
         * @format date-time
         */
        completed?: string;
        /** Whether the task is marked as deleted. */
        deleted?: boolean;
      };
      output: {
        /** Updated task. */
        task: {
          /** Google Tasks task ID. */
          id: string;
          /** Google Tasks resource kind. */
          kind: string;
          /** Entity tag for the task resource. */
          etag: string | null;
          /** Task title. */
          title: string | null;
          /** Task notes. */
          notes: string | null;
          /** Task status. */
          status: "needsAction" | "completed" | null;
          /** Parent task ID when this task is a subtask. */
          parent: string | null;
          /** Lexicographic position token among sibling tasks. */
          position: string | null;
          /** Task due timestamp in RFC 3339 format. */
          due: string | null;
          /** Timestamp when the task was completed, in RFC 3339 format. */
          completed: string | null;
          /** Whether the task is marked as deleted. */
          deleted: boolean;
          /** Whether the task is hidden from the default Google Tasks view. */
          hidden: boolean;
          /** Last update time for the task, in RFC 3339 format. */
          updated: string | null;
          /** API URL for the task resource. */
          selfLink: string | null;
          /** Google Tasks web URL for the task. */
          webViewLink: string | null;
          /** Links attached to the task. */
          links: Array<{
            /** Type of linked resource. */
            type: string;
            /** Absolute URL or URI for the linked resource. */
            link: string;
            /** Human-readable description of the link. */
            description?: string;
          }>;
          /** Assignment metadata for tasks created from other Google surfaces. */
          assignmentInfo: {
            /** Type of surface where the task was assigned. */
            surfaceType?: "CONTEXT_TYPE_UNSPECIFIED" | "GMAIL" | "DOCUMENT" | "SPACE";
            /** Absolute link to the source assignment surface. */
            linkToTask?: string;
            /** Google Chat space information for assigned tasks. */
            spaceInfo?: {
              /** Google Chat space resource name. */
              space?: string;
            };
            /** Google Drive file information for assigned tasks. */
            driveResourceInfo?: {
              /** Google Drive file ID for the source document. */
              driveFileId?: string;
              /** Google Drive resource key for the source document. */
              resourceKey?: string;
            };
          } | null;
        };
      };
    };
    /** Replace the mutable fields of a Google Tasks task list. */
    "googletasks.update_task_list": {
      input: {
        /**
         * Google Tasks task list ID. Use @default for the primary list when supported.
         * @minLength 1
         */
        tasklistId: string;
        /**
         * New task list title.
         * @minLength 1
         */
        title: string;
      };
      output: {
        /** Updated task list. */
        taskList: {
          /** Google Tasks task list ID. */
          id: string;
          /** Google Tasks resource kind. */
          kind: string;
          /** Entity tag for the task list resource. */
          etag: string | null;
          /** Task list title. */
          title: string | null;
          /** Last update time for the task list, in RFC 3339 format. */
          updated: string | null;
          /** API URL for the task list resource. */
          selfLink: string | null;
        };
      };
    };
  }
}
