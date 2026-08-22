import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Clone an existing Onfleet task with optional metadata and field overrides. */
    "onfleet.clone_task": {
      input: {
        /**
         * The Onfleet task identifier.
         * @minLength 1
         * @pattern \S
         */
        taskId: string;
        /** Options controlling which task data is copied and overridden. */
        options?: {
          /** Whether to copy metadata to the cloned task. */
          includeMetadata?: boolean;
          /** Whether to copy barcodes to the cloned task. */
          includeBarcodes?: boolean;
          /** Whether to copy dependencies to the cloned task. */
          includeDependencies?: boolean;
          /** Values that replace fields copied from the source task. */
          overrides?: {
            /** An existing destination ID or an inline destination object. */
            destination?: string | Record<string, unknown>;
            /**
             * Zero or one recipients for the task.
             * @maxItems 1
             */
            recipients?: Array<string | Record<string, unknown>>;
            /**
             * Notes for the cloned task.
             * @maxLength 10000
             */
            notes?: string;
            /** Whether the cloned task is a pickup task. */
            pickupTask?: boolean;
            /** The service time for the cloned task in minutes. */
            serviceTime?: number;
            /** Provider-defined metadata entries attached to the task. */
            metadata?: Array<Record<string, unknown>>;
            /** The earliest completion time for the cloned task in Unix milliseconds. */
            completeAfter?: number;
            /** The latest completion time for the cloned task in Unix milliseconds. */
            completeBefore?: number;
          };
        };
      };
      output: Record<string, unknown>;
    };
    /** Force complete an active Onfleet task as successful or failed. */
    "onfleet.complete_task": {
      input: {
        /**
         * The Onfleet task identifier.
         * @minLength 1
         * @pattern \S
         */
        taskId: string;
        /** The outcome recorded for the completed task. */
        completionDetails: {
          /** Whether the task completion was successful. */
          success: boolean;
          /** Optional completion notes. */
          notes?: string;
        };
      };
      output: {
        /** Whether Onfleet accepted the task completion. */
        success: boolean;
      };
    };
    /** Create a pickup or delivery task in Onfleet. */
    "onfleet.create_task": {
      input: {
        /** An existing destination ID or an inline destination object. */
        destination: string | Record<string, unknown>;
        /**
         * Zero or one recipients for the task.
         * @maxItems 1
         */
        recipients: Array<string | Record<string, unknown>>;
        /**
         * The organization ID displayed to the recipient.
         * @minLength 1
         * @pattern \S
         */
        merchant?: string;
        /**
         * The organization ID responsible for fulfilling the task.
         * @minLength 1
         * @pattern \S
         */
        executor?: string;
        /** The earliest completion time in Unix milliseconds. */
        completeAfter?: number;
        /** The latest completion time in Unix milliseconds. */
        completeBefore?: number;
        /** Whether this is a pickup task instead of a delivery task. */
        pickupTask?: boolean;
        /** Task IDs that must be completed before this task. */
        dependencies?: Array<string>;
        /**
         * Notes for the task.
         * @maxLength 10000
         */
        notes?: string;
        /** Automatic worker assignment options. */
        autoAssign?: Record<string, unknown>;
        /** The organization, team, or worker container for the task. */
        container?: Record<string, unknown>;
        /** The quantity associated with the task. */
        quantity?: number;
        /** The expected service time at the destination in minutes. */
        serviceTime?: number;
        /** A task-level recipient name override. */
        recipientName?: string;
        /** Task-level recipient notes. */
        recipientNotes?: string;
        /** Whether to suppress SMS notifications for this task recipient. */
        recipientSkipSMSNotifications?: boolean;
        /** Whether to use the merchant organization for recipient-facing proxy communication. */
        useMerchantForProxy?: boolean;
        /** Completion requirements for the task. */
        requirements?: {
          /** Whether a signature is required to complete the task. */
          signature?: boolean;
          /** Whether a photo is required to complete the task. */
          photo?: boolean;
          /** Whether notes are required to complete the task. */
          notes?: boolean;
          /** The minimum recipient age required to complete the task. */
          minimumAge?: number;
          /** Whether PIN verification is required for the task. */
          pin?: boolean | null;
        };
        /** Whether workers may scan only barcodes required by this task. */
        scanOnlyRequiredBarcodes?: boolean;
        /** Barcode requirements attached to the task. */
        barcode?: Array<Record<string, unknown>>;
        /** Map-pin appearance settings for the task. */
        appearance?: {
          /**
           * The map-pin color: 0 teal, 1 orange, or 2 magenta.
           * @minimum 0
           * @maximum 2
           */
          triangleColor: number;
        };
        /** Provider-defined metadata entries attached to the task. */
        metadata?: Array<Record<string, unknown>>;
        /** Custom field values attached to the task. */
        customFields?: Array<Record<string, unknown>>;
        /** Additional route optimization quantities attached to the task. */
        additionalQuantities?: {
          /** The arbitrary quantity for capacity type A. */
          quantityA?: number;
          /** The arbitrary quantity for capacity type B. */
          quantityB?: number;
          /** The arbitrary quantity for capacity type C. */
          quantityC?: number;
        };
        /**
         * The route optimization priority for the task.
         * @minimum 0
         * @maximum 499
         */
        priority?: number;
        /**
         * The route optimization group for the task.
         * @maxLength 100
         */
        group?: string;
      };
      output: Record<string, unknown>;
    };
    /** Delete an unstarted Onfleet task. */
    "onfleet.delete_task": {
      input: {
        /**
         * The Onfleet task identifier.
         * @minLength 1
         * @pattern \S
         */
        taskId: string;
      };
      output: {
        /** Whether Onfleet accepted the task deletion. */
        success: boolean;
      };
    };
    /** Get one Onfleet task by ID. */
    "onfleet.get_task": {
      input: {
        /**
         * The Onfleet task identifier.
         * @minLength 1
         * @pattern \S
         */
        taskId: string;
      };
      output: Record<string, unknown>;
    };
    /** List Onfleet tasks in a time range with cursor pagination and task filters. */
    "onfleet.list_tasks": {
      input: {
        /** The inclusive start time in Unix milliseconds. */
        from: number;
        /** The exclusive end time in Unix milliseconds. */
        to?: number;
        /**
         * The pagination cursor returned by the previous page.
         * @minLength 1
         * @pattern \S
         */
        lastId?: string;
        /** Task states to include: 0 unassigned, 1 assigned, 2 active, or 3 completed. */
        state?: Array<number>;
        /**
         * The worker ID used to filter tasks.
         * @minLength 1
         * @pattern \S
         */
        worker?: string;
        /** Only include tasks whose completeBefore is before this Unix millisecond timestamp. */
        completeBeforeBefore?: number;
        /** Only include tasks whose completeAfter is after this Unix millisecond timestamp. */
        completeAfterAfter?: number;
        /** Dependency task IDs used to filter tasks. */
        dependencies?: Array<string>;
        /** Worker, team, or organization container IDs used to filter tasks. */
        containers?: Array<string>;
      };
      output: {
        /** The tasks returned for this page. */
        tasks: Array<Record<string, unknown>>;
        /**
         * The cursor for the next page, when another page exists.
         * @minLength 1
         * @pattern \S
         */
        lastId?: string;
      };
    };
    /** Update supported fields on an Onfleet task. */
    "onfleet.update_task": {
      input: {
        /**
         * The Onfleet task identifier.
         * @minLength 1
         * @pattern \S
         */
        taskId: string;
        /**
         * Updated notes for the task.
         * @maxLength 10000
         */
        notes?: string;
        /** Provider-defined metadata entries attached to the task. */
        metadata?: Array<Record<string, unknown>>;
        /** Custom field values attached to the task. */
        customFields?: Array<Record<string, unknown>>;
        /**
         * The ID of the updated destination for the task.
         * @minLength 1
         * @pattern \S
         */
        destination?: string;
        /** The organization, team, or worker container for the task. */
        container?: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
  }
}
