import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Wachete SinglePage monitor, or replace an existing monitor with a SinglePage definition when id is provided. */
    "wachete.create_or_update_monitor": {
      input: {
        /**
         * The existing monitor ID when updating.
         * @format uuid
         */
        id?: string;
        /**
         * The monitor name.
         * @minLength 1
         */
        name: string;
        /**
         * The public URL that Wachete should monitor.
         * @format uri
         */
        url: string;
        /** The XPath expression selecting monitored content. */
        xPath?: string;
        /** The XPath expression excluding content. */
        excludeXPath?: string;
        /** The regular expression selecting monitored content. */
        regex?: string;
        /**
         * The alert conditions for the monitor.
         * @minItems 1
         */
        alerts?: Array<{
          /**
           * The Wachete alert type, such as Error or NotEq.
           * @minLength 1
           */
          type: string;
          /** The optional comparison value for the alert. */
          value?: string;
        }>;
        /**
         * The check interval in seconds.
         * @exclusiveMinimum 0
         */
        recurrenceInSeconds?: number;
        /**
         * The folder that should contain the monitor.
         * @format uuid
         */
        folderId?: string;
        /**
         * The notification destinations for the monitor.
         * @minItems 1
         */
        notificationEndpoints?: Array<{
          /**
           * The destination type, such as Webhook or Email.
           * @minLength 1
           */
          type: string;
          /**
           * The destination address or URL.
           * @minLength 1
           */
          value: string;
        }>;
        /** Whether Wachete should render JavaScript content. */
        dynamicContent?: boolean;
        /** Whether Wachete should scroll the page while checking it. */
        scrollPage?: boolean;
        /** Whether invalid crawler pages should be ignored. */
        ignoreInvalidPages?: boolean;
        /** Whether Wachete should collect raw HTML. */
        collectRawHtml?: boolean;
        /** The supported Wachete monitor job type. */
        jobType?: "SinglePage";
        /** A note attached to the monitor. */
        note?: string;
      };
      output: {
        /** A Wachete monitor definition. */
        monitor: {
          /** The monitor ID. */
          id?: string | null;
          /** The monitor name. */
          name?: string | null;
          /** The HTTP method used to check the monitored URL. */
          method?: string | null;
          /** The monitored URL. */
          url?: string | null;
          /** The XPath expression selecting monitored content. */
          xPath?: string | null;
          /** The XPath expression excluding content. */
          excludeXPath?: string | null;
          /** The regular expression selecting monitored content. */
          regex?: string | null;
          /** The configured alert conditions. */
          alerts?: Array<Record<string, unknown>> | null;
          /** The check interval in seconds. */
          recurrenceInSeconds?: number | null;
          /** The containing folder ID. */
          folderId?: string | null;
          /** The latest monitoring result. */
          data?: Record<string, unknown> | null;
          /** The configured notification destinations. */
          notificationEndpoints?: Array<Record<string, unknown>> | null;
          /** Whether JavaScript-rendered content is enabled. */
          dynamicContent?: boolean;
          /** Whether Wachete scrolls the page while checking it. */
          scrollPage?: boolean;
          /** Whether invalid crawler pages are ignored. */
          ignoreInvalidPages?: boolean;
          /** Whether raw HTML is collected. */
          collectRawHtml?: boolean;
          /** The Wachete monitor job type. */
          jobType?: string | null;
          /** The monitor note. */
          note?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Wachete monitor by ID. */
    "wachete.delete_monitor": {
      input: {
        /**
         * The monitor ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** Whether the monitor was deleted. */
        deleted: true;
        /**
         * The deleted monitor ID.
         * @format uuid
         */
        id: string;
      };
    };
    /** Retrieve a Wachete monitor definition by ID. */
    "wachete.get_monitor": {
      input: {
        /**
         * The monitor ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** A Wachete monitor definition. */
        monitor: {
          /** The monitor ID. */
          id?: string | null;
          /** The monitor name. */
          name?: string | null;
          /** The HTTP method used to check the monitored URL. */
          method?: string | null;
          /** The monitored URL. */
          url?: string | null;
          /** The XPath expression selecting monitored content. */
          xPath?: string | null;
          /** The XPath expression excluding content. */
          excludeXPath?: string | null;
          /** The regular expression selecting monitored content. */
          regex?: string | null;
          /** The configured alert conditions. */
          alerts?: Array<Record<string, unknown>> | null;
          /** The check interval in seconds. */
          recurrenceInSeconds?: number | null;
          /** The containing folder ID. */
          folderId?: string | null;
          /** The latest monitoring result. */
          data?: Record<string, unknown> | null;
          /** The configured notification destinations. */
          notificationEndpoints?: Array<Record<string, unknown>> | null;
          /** Whether JavaScript-rendered content is enabled. */
          dynamicContent?: boolean;
          /** Whether Wachete scrolls the page while checking it. */
          scrollPage?: boolean;
          /** Whether invalid crawler pages are ignored. */
          ignoreInvalidPages?: boolean;
          /** Whether raw HTML is collected. */
          collectRawHtml?: boolean;
          /** The Wachete monitor job type. */
          jobType?: string | null;
          /** The monitor note. */
          note?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve paginated check history for a Wachete monitor. */
    "wachete.get_monitor_history": {
      input: {
        /**
         * The monitor ID.
         * @format uuid
         */
        id: string;
        /**
         * The inclusive start of the time interval.
         * @format date-time
         */
        from?: string;
        /**
         * The inclusive end of the time interval.
         * @format date-time
         */
        to?: string;
        /**
         * The maximum number of history items to return.
         * @exclusiveMinimum 0
         */
        count?: number;
        /** Whether to include the diff from the previous value. */
        returnDiff?: boolean;
        /**
         * The continuation token returned by a previous request.
         * @minLength 1
         */
        continuationToken?: string;
      };
      output: {
        /** The monitor history items. */
        history: Array<{
          /**
           * The time of the check.
           * @format date-time
           */
          lastCheckTimestamp?: string;
          /**
           * The time the monitored value changed.
           * @format date-time
           */
          valueChangedTimestamp?: string | null;
          /** The captured monitored value. */
          raw?: string | null;
          /** The check error, when present. */
          error?: string | null;
          /** The changes from the previous value. */
          diff?: Array<{
            /** The Wachete diff operation code. */
            operation?: number;
            /** The changed text. */
            text?: string | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        /** The continuation token for the next page, or null when complete. */
        continuationToken: string | null;
      };
    };
    /** List monitors, subfolders, and the folder path for a Wachete folder or the root folder. */
    "wachete.list_folder_content": {
      input: {
        /**
         * The folder ID. Omit it to list the root folder.
         * @format uuid
         */
        parentId?: string;
        /**
         * The continuation token returned by a previous request.
         * @minLength 1
         */
        continuationToken?: string;
      };
      output: {
        /** The child folders. */
        subfolders: Array<{
          /** The folder ID. */
          id?: string | null;
          /** The folder name. */
          name?: string | null;
          /** The parent folder ID. */
          parentId?: string | null;
          /** The number of monitors in the folder. */
          count?: number;
          /** The number of failed monitors in the folder. */
          failedCount?: number;
          /** The number of paused monitors in the folder. */
          pausedCount?: number;
          [key: string]: unknown;
        }>;
        /** The monitors in the folder. */
        monitors: Array<{
          /** The monitor ID. */
          id?: string | null;
          /** The monitor name. */
          name?: string | null;
          /** The HTTP method used to check the monitored URL. */
          method?: string | null;
          /** The monitored URL. */
          url?: string | null;
          /** The XPath expression selecting monitored content. */
          xPath?: string | null;
          /** The XPath expression excluding content. */
          excludeXPath?: string | null;
          /** The regular expression selecting monitored content. */
          regex?: string | null;
          /** The configured alert conditions. */
          alerts?: Array<Record<string, unknown>> | null;
          /** The check interval in seconds. */
          recurrenceInSeconds?: number | null;
          /** The containing folder ID. */
          folderId?: string | null;
          /** The latest monitoring result. */
          data?: Record<string, unknown> | null;
          /** The configured notification destinations. */
          notificationEndpoints?: Array<Record<string, unknown>> | null;
          /** Whether JavaScript-rendered content is enabled. */
          dynamicContent?: boolean;
          /** Whether Wachete scrolls the page while checking it. */
          scrollPage?: boolean;
          /** Whether invalid crawler pages are ignored. */
          ignoreInvalidPages?: boolean;
          /** Whether raw HTML is collected. */
          collectRawHtml?: boolean;
          /** The Wachete monitor job type. */
          jobType?: string | null;
          /** The monitor note. */
          note?: string | null;
          [key: string]: unknown;
        }>;
        /** The folder ancestry path. */
        path: Array<{
          /** The folder ID. */
          id?: string | null;
          /** The folder name. */
          name?: string | null;
          /** The parent folder ID. */
          parentId?: string | null;
          /** The number of monitors in the folder. */
          count?: number;
          /** The number of failed monitors in the folder. */
          failedCount?: number;
          /** The number of paused monitors in the folder. */
          pausedCount?: number;
          [key: string]: unknown;
        }>;
        /** The continuation token for the next page, or null when complete. */
        continuationToken: string | null;
      };
    };
    /** List Wachete notifications from newest to oldest. */
    "wachete.list_notifications": {
      input: {
        /**
         * The monitor ID used to filter notifications.
         * @format uuid
         */
        taskId?: string;
        /**
         * The inclusive start of the time interval.
         * @format date-time
         */
        from?: string;
        /**
         * The inclusive end of the time interval.
         * @format date-time
         */
        to?: string;
        /**
         * The maximum number of notifications to return.
         * @exclusiveMinimum 0
         */
        count?: number;
        /**
         * The continuation token returned by a previous request.
         * @minLength 1
         */
        continuationToken?: string;
        /** Whether to include HTML-formatted notification content. */
        html?: boolean;
      };
      output: {
        /** The matching notifications. */
        notifications: Array<{
          /** The notification ID. */
          id?: string | null;
          /** The Wachete alert type. */
          type?: string | number;
          /** The current monitored value. */
          current?: string | null;
          /** The comparison value. */
          comparand?: string | null;
          /** The optional HTML notification body. */
          html?: string | null;
          /** The notification error, when present. */
          error?: string | null;
          /**
           * The notification timestamp.
           * @format date-time
           */
          timestamp?: string;
          /**
           * The Wachete server timestamp.
           * @format date-time
           */
          serverTime?: string;
          /** The related monitor ID. */
          taskId?: string | null;
          /** The related monitor name. */
          taskName?: string | null;
          /** The monitored URL. */
          url?: string | null;
          [key: string]: unknown;
        }>;
        /** The continuation token for the next page, or null when complete. */
        continuationToken: string | null;
      };
    };
  }
}
