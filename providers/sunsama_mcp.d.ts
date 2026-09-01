import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Confirms attendance to a meeting that the user is invited to. */
    "sunsama_mcp.accept_meeting_invite": {
      input: {
        /** The unique ID of the calendar event to accept the meeting invite for. */
        eventId: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Adds multiple subtasks to an existing task. Do not use for merging existing tasks in as subtasks. */
    "sunsama_mcp.add_subtasks_to_task": {
      input: {
        /** The _id of the task to add the subtask to. */
        taskId: string;
        /** The subtasks to add to the task. */
        subtasks: Array<{
          /** The title of the subtask. */
          title: string;
          /** The estimated time in whole minutes for the subtask. */
          timeEstimate?: number;
          /** When the subtask represents its own external item (e.g. one GitHub issue inside a parent triage task), pass integration on the subtask so it links to its source. Use the same shape as create_task's integration field. */
          integration?: {
            service: "github";
            identifier: {
              /** GitHub item id (issue/PR/discussion node id). */
              id: string;
              /** Owner login, e.g. "sunsama". */
              repositoryOwnerLogin: string;
              /** Repo name, e.g. "sunsama". */
              repositoryName: string;
              /** Issue / PR / discussion number. */
              number: number;
              type: "Issue" | "PullRequest" | "Discussion";
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | {
            service: "jira";
            identifier: {
              /** Jira issue id or key. */
              id: string;
              /** Atlassian cloudId of the Jira site the issue lives on. */
              cloudId: string;
              /** Atlassian accountId of the connected Jira account the issue was read with. */
              accountId: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | {
            service: "linear";
            identifier: {
              /** Linear issue id (UUID, the GraphQL `id` field). */
              id: string;
              /** Linear human identifier like "SUN-1386" (the GraphQL `identifier` field). */
              identifier: string;
              /** Linear issue number (integer, the GraphQL `number` field). */
              number: number;
              /** Linear issue URL (the GraphQL `url` field). */
              url: string;
              /** Linear user id of the connected Linear account the issue was read with (the GraphQL `viewer.id`). */
              linearUserId: string;
              /** Linear organization id the issue belongs to (the GraphQL `organization.id`). */
              linearOrganizationId: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | {
            service: "googleTasks";
            identifier: {
              /** Google Tasks task id (the `id` field on a tasks#task resource). */
              id: string;
              /** Google Tasks task list id (the `id` of the tasks#taskList that contains this task). */
              listId: string;
              /** Email address of the connected Google Tasks account that owns the list this task lives in. */
              accountId: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | {
            service: "gmail";
            identifier: {
              /** Gmail thread id (the "threadId" field on any message in the API response — NOT the message id). Sunsama links tasks to threads, not individual messages. */
              id: string;
              /** Gmail message id of the specific message in that thread (the "id" field on the message). Required so the in-app preview can open to the right message. */
              messageId: string;
              /** Email address of the connected Gmail account the thread belongs to, as listed by the sunsama://email/accounts resource. */
              accountId: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | {
            service: "slack";
            identifier: {
              /** Slack permalink to the specific message/thread, e.g. "https://workspace.slack.com/archives/CHANNELID/p1778871920033179". Copy the message's "Permalink" value verbatim — a permalink you assembled by hand will not resolve. */
              permalink: string;
              /** Optional markdown excerpt of the message body / thread excerpt — useful as a fallback when the user looks at the task without clicking through to Slack. Keep short (1-3 lines). */
              notesMarkdown?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | {
            service: "outlook";
            identifier: {
              /** Outlook message id. */
              id: string;
              conversationId?: string;
              internetMessageId?: string;
              /** The `accountId` of the connected Outlook account, as listed by the sunsama://email/accounts resource — unlike Gmail, an Outlook accountId is the Microsoft Graph object id, not the email address. If all you have is the mailbox address, pass the address instead and it will be resolved to the accountId; an address belonging to no connected mailbox is an error. */
              accountId: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Adds a task to a channel. */
    "sunsama_mcp.add_task_to_channel": {
      input: {
        /** The _id of the task to add to the channel. */
        taskId: string;
        /** The channel to add the task to. This does not need to be perfect. The closest match will be used. */
        channel: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Aligns a task with an objective. */
    "sunsama_mcp.align_task_with_objective": {
      input: {
        /** The _id of the task to align with the objective. */
        taskId: string;
        /** The _id of the objective to align the task with. */
        objectiveId: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Appends Markdown content to the end of an existing task's notes. Existing notes are preserved; the new content is added below them with a horizontal rule separator. Use edit_task_notes to replace the notes body entirely. */
    "sunsama_mcp.append_task_notes": {
      input: {
        /** The _id of the task to update. */
        taskId: string;
        /** The Markdown content to append to the task's existing notes. A horizontal rule separator is inserted between the existing notes and the new content. */
        notes: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Call a Sunsama MCP tool with JSON arguments. */
    "sunsama_mcp.call_tool": {
      input: {
        /**
         * The exact tool name returned by list_tools.
         * @minLength 1
         */
        toolName: string;
        /** JSON arguments matching the inputSchema returned for the selected tool. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Moves one or more tasks to a backlog folder. If folderId is null, removes tasks from their current folder. */
    "sunsama_mcp.change_backlog_folder": {
      input: {
        /** The unique identifier(s) `_id` of the task(s) to move. Can be a single task ID or an array of task IDs. */
        taskIds: string | Array<string>;
        /** The _id of the backlog folder to move the tasks to. If null, removes tasks from their current folder. */
        folderId?: string | null;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Creates a new calendar event. */
    "sunsama_mcp.create_calendar_event": {
      input: {
        /** The title of the calendar event. */
        title: string;
        /** The start date of the event in YYYY-MM-DD format. If this is in the past you must confirm with the user that you are creating a past event. */
        startDate: string;
        /** The start time of the event in 12 hour "h:mm A" format. Required if the event is not all day. If this is in the past you must confirm with the user that you are creating a past event. */
        startTime?: string;
        /**
         * The duration of the event in minutes. Required if the event is not all day
         * @default 60
         */
        duration?: number;
        /**
         * Whether the event is all day.
         * @default false
         */
        isAllDay?: boolean;
        /** A brief description of the calendar event purpose or agenda. */
        description?: string;
        /** The ID of the calendar to create the event in. If not provided, the default calendar will be used. IMPORTANT: user must have owner or writer access to the calendar. */
        calendarId?: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Creates a new channel for the user. */
    "sunsama_mcp.create_channel": {
      input: {
        /** The name of the channel to create. */
        channelName: string;
        /** The name of the category this should belong to. If not provided one will be assigned automatically. */
        categoryName?: string;
        /**
         * Whether the channel is a personal channel. If not provided it will be assumed to be a work channel. This option is ignored if a category name is provided.
         * @default false
         */
        isPersonal?: boolean;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Creates a single task with a title, optional notes (markdown), and estimated time. Scheduled to a day by default; pass `backlog` instead to stage it in the backlog. This is also the tool for a task that links to an item in another tool — pass `integrationUrl`, which works for a backlog task too. */
    "sunsama_mcp.create_task": {
      input: {
        /** A short title of the task, should not be more than a few words. Required unless you pass integrationUrl: with a link, omit this and Sunsama titles the task from the linked item itself — only pass a title alongside integrationUrl when the user dictated one, never a placeholder like "Todoist task". */
        title?: string;
        /** Specific task-related notes in Markdown (e.g. requirements, links, context). Do not include conversation history. */
        notes?: string;
        /** The estimated time in whole minutes for the task */
        timeEstimate?: number;
        /** The _id of the weekly objective the task should be associated with, if any. */
        objectiveId?: string;
        /** The day the task should be scheduled to in YYYY-MM-DD format. Required unless `backlog` is passed, which stages the task with no day at all — do not invent a day to go alongside `backlog`, it is ignored. */
        day?: string;
        /** Pass this to put the task in the backlog — work the user intends to do eventually but has not committed to a day — instead of scheduling it. An empty object is enough; the two fields only refine where it lands. */
        backlog?: {
          /** The time bucket captures a rough idea of when a task should be done and also how likely it is to actually get done. Options: "in the next two weeks", "in the next month", "in the next quarter", "in the next year", "someday", "never".  */
          timeBucket?: "in the next two weeks" | "in the next month" | "in the next quarter" | "in the next year" | "someday" | "never";
          /** The _id of the backlog folder the task should be added. */
          folderId?: string;
          [key: string]: unknown;
        };
        /** The channel the task should be added to. This does not need to be perfect. The closest match will be used. If not provided a channel will be added automatically as long as the user did not disable the channel prediction feature. */
        channel?: string;
        /**
         * Where to place the task in the list. Defaults to bottom. If the user asks for another position you should re-order the task after creating it.
         * @default "bottom"
         */
        position?: "top" | "bottom";
        subtasks?: Array<{
          /** The title of the subtask */
          title: string;
          /** When the subtask represents its own external item (e.g. a parent "Desktop bug triage" task with one subtask per GitHub issue), pass integration on the subtask itself so each subtask is individually linked to its source. */
          integration?: {
            service: "github";
            identifier: {
              /** GitHub item id (issue/PR/discussion node id). */
              id: string;
              /** Owner login, e.g. "sunsama". */
              repositoryOwnerLogin: string;
              /** Repo name, e.g. "sunsama". */
              repositoryName: string;
              /** Issue / PR / discussion number. */
              number: number;
              type: "Issue" | "PullRequest" | "Discussion";
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | {
            service: "jira";
            identifier: {
              /** Jira issue id or key. */
              id: string;
              /** Atlassian cloudId of the Jira site the issue lives on. */
              cloudId: string;
              /** Atlassian accountId of the connected Jira account the issue was read with. */
              accountId: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | {
            service: "linear";
            identifier: {
              /** Linear issue id (UUID, the GraphQL `id` field). */
              id: string;
              /** Linear human identifier like "SUN-1386" (the GraphQL `identifier` field). */
              identifier: string;
              /** Linear issue number (integer, the GraphQL `number` field). */
              number: number;
              /** Linear issue URL (the GraphQL `url` field). */
              url: string;
              /** Linear user id of the connected Linear account the issue was read with (the GraphQL `viewer.id`). */
              linearUserId: string;
              /** Linear organization id the issue belongs to (the GraphQL `organization.id`). */
              linearOrganizationId: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | {
            service: "googleTasks";
            identifier: {
              /** Google Tasks task id (the `id` field on a tasks#task resource). */
              id: string;
              /** Google Tasks task list id (the `id` of the tasks#taskList that contains this task). */
              listId: string;
              /** Email address of the connected Google Tasks account that owns the list this task lives in. */
              accountId: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | {
            service: "gmail";
            identifier: {
              /** Gmail thread id (the "threadId" field on any message in the API response — NOT the message id). Sunsama links tasks to threads, not individual messages. */
              id: string;
              /** Gmail message id of the specific message in that thread (the "id" field on the message). Required so the in-app preview can open to the right message. */
              messageId: string;
              /** Email address of the connected Gmail account the thread belongs to, as listed by the sunsama://email/accounts resource. */
              accountId: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | {
            service: "slack";
            identifier: {
              /** Slack permalink to the specific message/thread, e.g. "https://workspace.slack.com/archives/CHANNELID/p1778871920033179". Copy the message's "Permalink" value verbatim — a permalink you assembled by hand will not resolve. */
              permalink: string;
              /** Optional markdown excerpt of the message body / thread excerpt — useful as a fallback when the user looks at the task without clicking through to Slack. Keep short (1-3 lines). */
              notesMarkdown?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | {
            service: "outlook";
            identifier: {
              /** Outlook message id. */
              id: string;
              conversationId?: string;
              internetMessageId?: string;
              /** The `accountId` of the connected Outlook account, as listed by the sunsama://email/accounts resource — unlike Gmail, an Outlook accountId is the Microsoft Graph object id, not the email address. If all you have is the mailbox address, pass the address instead and it will be resolved to the accountId; an address belonging to no connected mailbox is an error. */
              accountId: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The recurrence rule for the task in RRULE format. If provided the task will be created as a recurring task. Only the following parameters are supported: FREQ (DAILY, WEEKLY, MONTHLY, YEARLY), BYDAY, BYMONTHDAY, BYSETPOS, INTERVAL. Unsupported parameters such as COUNT and UNTIL will be rejected — Sunsama recurring tasks do not have a fixed end date or occurrence count. */
        recurrenceRule?: string;
        /** The estimated (projected) start time for the recurring task in 12 hour "h:mm A" format. Only used when recurrenceRule is provided. This is a SOFT start time used to order the task and auto-schedule it each day — it does NOT timebox the recurring instances onto the calendar at a fixed time, and Sunsama cannot carry an exact calendar timebox across a recurring series. If the user wants every occurrence pinned to the same exact time on their calendar, tell them that isn't supported rather than implying this sets it. */
        recurringTaskStartTime?: string;
        /** Whether the recurring task start time is only an estimate and not a rigid start time. Only used when recurrenceRule and recurringTaskStartTime are provided. */
        isRecurringTaskStartTimeOnlyAnEstimate?: boolean;
        /** The backlog priority for the task. Only applies when adding to the backlog. Valid values: "urgent", "high", "medium", "low", "none". */
        backlogPriority?: "urgent" | "high" | "medium" | "low" | "none";
        /** The daily priority level for the task. Only applies when scheduling to a day (not backlog). The date is derived from the "day" parameter. */
        dailyPriority?: "urgent" | "important" | "normal" | "low";
        /** When the task originates from an item in a connected integration (an email, GitHub issue/PR, Jira issue) whose identifier fields you have actually read, pass the integration metadata so the task is properly linked back to its source. Don't include URLs — they're derived from the identifier fields. If the task is a parent block that bundles multiple external items, leave this unset and put the integration link on each subtask instead. If all you have is a link to the item, use integrationUrl instead — never guess identifier fields. Passing both is fine when you have both; the link is what gets used. */
        integration?: {
          service: "github";
          identifier: {
            /** GitHub item id (issue/PR/discussion node id). */
            id: string;
            /** Owner login, e.g. "sunsama". */
            repositoryOwnerLogin: string;
            /** Repo name, e.g. "sunsama". */
            repositoryName: string;
            /** Issue / PR / discussion number. */
            number: number;
            type: "Issue" | "PullRequest" | "Discussion";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        } | {
          service: "jira";
          identifier: {
            /** Jira issue id or key. */
            id: string;
            /** Atlassian cloudId of the Jira site the issue lives on. */
            cloudId: string;
            /** Atlassian accountId of the connected Jira account the issue was read with. */
            accountId: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        } | {
          service: "linear";
          identifier: {
            /** Linear issue id (UUID, the GraphQL `id` field). */
            id: string;
            /** Linear human identifier like "SUN-1386" (the GraphQL `identifier` field). */
            identifier: string;
            /** Linear issue number (integer, the GraphQL `number` field). */
            number: number;
            /** Linear issue URL (the GraphQL `url` field). */
            url: string;
            /** Linear user id of the connected Linear account the issue was read with (the GraphQL `viewer.id`). */
            linearUserId: string;
            /** Linear organization id the issue belongs to (the GraphQL `organization.id`). */
            linearOrganizationId: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        } | {
          service: "googleTasks";
          identifier: {
            /** Google Tasks task id (the `id` field on a tasks#task resource). */
            id: string;
            /** Google Tasks task list id (the `id` of the tasks#taskList that contains this task). */
            listId: string;
            /** Email address of the connected Google Tasks account that owns the list this task lives in. */
            accountId: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        } | {
          service: "gmail";
          identifier: {
            /** Gmail thread id (the "threadId" field on any message in the API response — NOT the message id). Sunsama links tasks to threads, not individual messages. */
            id: string;
            /** Gmail message id of the specific message in that thread (the "id" field on the message). Required so the in-app preview can open to the right message. */
            messageId: string;
            /** Email address of the connected Gmail account the thread belongs to, as listed by the sunsama://email/accounts resource. */
            accountId: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        } | {
          service: "slack";
          identifier: {
            /** Slack permalink to the specific message/thread, e.g. "https://workspace.slack.com/archives/CHANNELID/p1778871920033179". Copy the message's "Permalink" value verbatim — a permalink you assembled by hand will not resolve. */
            permalink: string;
            /** Optional markdown excerpt of the message body / thread excerpt — useful as a fallback when the user looks at the task without clicking through to Slack. Keep short (1-3 lines). */
            notesMarkdown?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        } | {
          service: "outlook";
          identifier: {
            /** Outlook message id. */
            id: string;
            conversationId?: string;
            internetMessageId?: string;
            /** The `accountId` of the connected Outlook account, as listed by the sunsama://email/accounts resource — unlike Gmail, an Outlook accountId is the Microsoft Graph object id, not the email address. If all you have is the mailbox address, pass the address instead and it will be resolved to the accountId; an address belonging to no connected mailbox is an error. */
            accountId: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** A link the task should be attached to. For an item in a connected integration (Asana, ClickUp, GitHub, Gmail, Jira, Linear, Loom, Monday.com, Notion, Outlook, Todoist, Trello, Microsoft Teams, Slack, Google Tasks, Microsoft To Do, Microsoft Planner) — say a Todoist task URL the user pasted — Sunsama looks the item up and creates a natively linked task: the provider's icon, a click-through to the original, and the existing completion/date synchronization. Any other URL is attached as a web page instead, with its title and preview unfurled. Use this whenever the user gives you a link instead of putting the link in notes, and use it in preference to the integration parameter for any service you did not fetch the item from yourself. Pass the URL alone, not surrounding prose. */
        integrationUrl?: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Creates a new weekly objective. */
    "sunsama_mcp.create_weekly_objective": {
      input: {
        /** The title of the weekly objective. */
        title: string;
        /** The start day of the week in YYYY-MM-DD format. */
        weekStartDay: string;
        /** The estimated time in minutes for the objective. */
        timeEstimate?: number;
        /** The channel name to associate with the objective. This does not need to be perfect. The closest match will be used. */
        channel?: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Decline attendance to a meeting that the user is invited to. */
    "sunsama_mcp.decline_meeting_invite": {
      input: {
        /** The unique ID of the calendar event to decline the meeting invite for. */
        eventId: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** PERMANENTLY deletes incomplete instances of a recurring task and TERMINATES the series, preventing any future instances from ever being created. This is irreversible. When afterDate is provided, only instances after that date are deleted and the series is terminated at that date. When omitted, all incomplete instances are deleted. WARNING: If the user wants to temporarily skip a period (e.g. vacation) and resume the series afterwards, do NOT use this tool — use edit_task_recurrence_rule with deleteOldInstancesAfter and firstOccurrenceOnOrAfter instead. */
    "sunsama_mcp.delete_all_incomplete_recurring_task_instances": {
      input: {
        /** The _id of the recurring task to delete all incomplete instances for. */
        taskId: string;
        /** When provided (YYYY-MM-DD), all incomplete instances after this date are permanently deleted and the entire recurring series is terminated at this date — no future instances will ever be created. Instances on or before this date are preserved. This is NOT a temporary pause; the series ends permanently. */
        afterDate?: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Removes a calendar event and deletes all associated tasks. If the event is a meeting then any access role can remove the event. Otherwise only owners or writers can remove the event. Note: If the event is a meeting and the user is an owner or write this will remove the event for ALL attendees. */
    "sunsama_mcp.delete_calendar_event": {
      input: {
        /** The unique ID of the calendar event to remove. */
        eventId: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Deletes one of the user's channels. Takes a channel ID, not a channel name — use the search_channels tool to resolve a name the user mentions into an ID first. Tasks, objectives, and calendar events in the channel are not deleted, but they lose their channel assignment and cannot be reassigned by undoing this. Deleting a category also uncategorizes the channels inside it. This cannot be undone, so confirm with the user before calling it. */
    "sunsama_mcp.delete_channel": {
      input: {
        /** The ID of the channel to delete. */
        channelId: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Deletes an existing task. */
    "sunsama_mcp.delete_task": {
      input: {
        /** The _id of the task to delete. */
        taskId: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Updates the title of an existing subtask. */
    "sunsama_mcp.edit_subtask_title": {
      input: {
        /** The _id of the parent task. */
        taskId: string;
        /** The _id of the subtask to update. */
        subtaskId: string;
        /** The new title for the subtask. */
        newTitle: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Sets or clears the due date of a task. This is the hard deadline, not the day the task is planned/scheduled for (use move_task_to_day for that). */
    "sunsama_mcp.edit_task_due_date": {
      input: {
        /** The _id of the task to update. */
        taskId: string;
        dueDate?: string | null;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Replaces the notes body of an existing task with new Markdown content. The full notes field is overwritten — use append_task_notes to add to existing notes without replacing them. */
    "sunsama_mcp.edit_task_notes": {
      input: {
        /** The _id of the task to update. */
        taskId: string;
        /** The new notes body in Markdown. Replaces the existing notes entirely. Pass an empty string to clear notes. */
        notes: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Updates the recurrence rule of an existing task. This is the preferred tool for temporarily pausing or skipping a recurring task for a specific period (e.g. vacation, leave). By combining deleteOldInstancesAfter (to clear instances during the skip period) and firstOccurrenceOnOrAfter (to restart the series afterwards), you can maintain the recurrence while accommodating temporary breaks — unlike delete_all_incomplete_recurring_task_instances which permanently terminates the series. When firstOccurrenceOnOrAfter is provided, this forks the recurring series: a new series begins from that date and the old series ends the day before. */
    "sunsama_mcp.edit_task_recurrence_rule": {
      input: {
        /** The _id of any task instance in the recurring series to update. Can be the master or any child instance. */
        taskId: string;
        /** The new recurrence rule for the task in RRULE format. Only the following parameters are supported: FREQ (DAILY, WEEKLY, MONTHLY, YEARLY), BYDAY, BYMONTHDAY, BYSETPOS, INTERVAL. Unsupported parameters such as COUNT and UNTIL will be rejected — Sunsama recurring tasks do not have a fixed end date or occurrence count. The recurrence rule must not have more than one occurrence of a task on any given day. */
        recurrenceRule: string;
        /** The date to start the new recurrence on or after, in YYYY-MM-DD format. When provided for an existing recurring task, this forks the series: a new series starts from this date and the old series ends the day before. Instances from the old series before this date are preserved unless deleteOldInstancesAfter is also set. When omitted, the recurrence is updated in place starting from the current task date. */
        firstOccurrenceOnOrAfter?: string;
        /** Only used with firstOccurrenceOnOrAfter. Date in YYYY-MM-DD format. Deletes old series instances after this date while the new series picks up from firstOccurrenceOnOrAfter. This creates a temporary gap — use it when the user wants to skip a period (e.g. "skip next week", "I'm on vacation until June 2nd"). Set to the last date the user wants to keep from the old series. Example: to skip May 26–30, set deleteOldInstancesAfter to 2026-05-23 (Friday before) and firstOccurrenceOnOrAfter to 2026-06-02 (Monday after). */
        deleteOldInstancesAfter?: string;
        /** The estimated (projected) start time of the recurring task in 12 hour "h:mm A" format. If not provided the start time will be set according to the old recurrence rule or it will be omitted. This is a SOFT start time used to order the task and auto-schedule it each day — it does NOT timebox the recurring instances onto the calendar at a fixed time, and Sunsama cannot carry an exact calendar timebox across a recurring series. If the user wants every occurrence pinned to the same exact time on their calendar, tell them that isn't supported rather than implying this sets it. */
        startTime?: string;
        /** Whether the start time is only an estimate and not a rigid start time. If not provided the start time will be set according to the old recurrence rule or it will be set to a rigid start time. */
        isStartTimeOnlyAnEstimate?: boolean;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Updates the time estimate of an existing task. */
    "sunsama_mcp.edit_task_time_estimate": {
      input: {
        /** The _id of the task to update. If multiple timeboxed events are present you must update the duration of the associated event instead. */
        taskId: string;
        /** The _id of the subtask to update. If not provided, the time estimate will be updated for the entire task. If the task has any subtasks with planned time, you must provide a subtaskId since the time estimate for the task will be calculated based on the subtasks. */
        subtaskId?: string;
        /** The new time estimate in whole minutes. */
        timeEstimate: number;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Updates the title of an existing task. */
    "sunsama_mcp.edit_task_title": {
      input: {
        /** The _id of the task to update. */
        taskId: string;
        /** The new title for the task. */
        title: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Fetches the users archived tasks */
    "sunsama_mcp.get_archived_tasks": {
      input: {
        /**
         * The offset to fetch from
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Fetches the users backlog tasks */
    "sunsama_mcp.get_backlog_tasks": {
      input: {
        /**
         * The page number to fetch (0-based)
         * @default 0
         */
        page?: number;
        /** All pages > 0 must pass in the queryId from the first page. */
        queryId?: string;
        /** Optional folder filter for page 0. Omit to fetch all backlog tasks. Include a folder _id to scope to that folder (multiple ids are unioned). Include `null` to include tasks that are not in any folder. Use `get_backlog_folders` to list available folder ids. */
        folderIds?: Array<string | null>;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Gets a list of daily highlights (end of day journal entries of your work day) for the user. Returns published daily wraps in Markdown format. If startDate and endDate are omitted, returns only the most recent one. */
    "sunsama_mcp.get_daily_highlights": {
      input: {
        /** Start of the date range (YYYY-MM-DD). Inclusive. If omitted, returns only the last daily highlight. */
        startDate?: string;
        /** End of the date range (YYYY-MM-DD). Inclusive. If omitted, returns only the last daily highlight. */
        endDate?: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Fetches the full text of a single Sunsama help center article. First call "list_help_articles" to find the relevant article, then pass its id here. Returns the article title, url, and plain-text body so you can answer the user's question from the docs. */
    "sunsama_mcp.get_help_article": {
      input: {
        /** The id of the article to fetch, exactly as returned in the "id" field by the list_help_articles tool (e.g. "getting-started/basics/task-basics"). */
        articleId: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Fetches a single task by its Sunsama task ID. Returns full task details including integration information. */
    "sunsama_mcp.get_task_by_id": {
      input: {
        /** The Sunsama task ID (_id field) of the task to fetch */
        taskId: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Gets the time estimate for a task in minutes. */
    "sunsama_mcp.get_task_time_estimate": {
      input: {
        /** The title of the task. The estimate will be based on similar task names. */
        title: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Imports a calendar event as a task. */
    "sunsama_mcp.import_task_from_calendar_event": {
      input: {
        /** The unique ID of the calendar event to import as a task. */
        eventId: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Lists Sunsama's help center articles as a catalog: each entry has an id, title, description, category, and url. Use this whenever the user asks how a Sunsama feature works, what Sunsama can or cannot do, or whenever you are unsure about product behavior or a limitation. Pick the most relevant article from the list, then call "get_help_article" with its id to read it and answer from the docs instead of guessing. You can also share the article url with the user. */
    "sunsama_mcp.list_help_articles": {
      input: Record<string, never>;
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Lists all available resources and resource templates exposed by this MCP server. Use this tool to discover what data sources are available when the client doesn't support the MCP resources protocol natively.

Returns an array of resources, where each resource has:
- name: The resource identifier
- uri: The static URI (for fixed resources) OR uri_template (for parameterized resources)
- description: What the resource provides
- mimeType: The content type returned */
    "sunsama_mcp.list_resources": {
      input: Record<string, never>;
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Discover the current Sunsama task and daily planning MCP tools with their live input schemas. */
    "sunsama_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently exposed to the connected Sunsama account. */
        tools: Array<{
          /**
           * The exact Sunsama MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by Sunsama. */
          description?: string;
          /** MCP hints supplied by Sunsama about a tool's behavior. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify data. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform destructive operations. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments are expected to be idempotent. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with entities outside Sunsama. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by Sunsama. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
    /** Marks a subtask of an existing task as completed. */
    "sunsama_mcp.mark_subtask_as_completed": {
      input: {
        /** The _id of the parent task. */
        taskId: string;
        /** The _id of the subtask to mark as completed. */
        subtaskId: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Marks a subtask of an existing task as incomplete. */
    "sunsama_mcp.mark_subtask_as_incomplete": {
      input: {
        /** The _id of the parent task. */
        taskId: string;
        /** The _id of the subtask to mark as incomplete. */
        subtaskId: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Marks a task as completed. Can also be used to move a task to a previous day which auto-completes the task. */
    "sunsama_mcp.mark_task_as_completed": {
      input: {
        /** The _id of the task to mark as completed. */
        taskId: string;
        /** A date in YYYY-MM-DD the task was completed. */
        finishedDay: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Marks a task as incomplete. */
    "sunsama_mcp.mark_task_as_incomplete": {
      input: {
        /** The _id of a completed task we want to mark as incomplete or "to do" again. */
        taskId: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Updates a calendar event's date, time, and/or duration. */
    "sunsama_mcp.move_calendar_event": {
      input: {
        /** The unique ID of the calendar event to move. IMPORTANT: user must have owner or writer access to the event. */
        eventId: string;
        /** The target start date to move the event to, in YYYY-MM-DD format. */
        startDate: string;
        /** The target start time to move the event to, in 12 hour "h:mm A" format. Required if the event is not all day. */
        startTime?: string;
        /** The duration of the event in minutes. Required if the event is not all day */
        duration?: number;
        /** Whether the event is all day. */
        isAllDay: boolean;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Moves a task out of the backlog and onto a specific date. */
    "sunsama_mcp.move_task_from_backlog": {
      input: {
        /** The unique identifier `_id` of the task to move. */
        taskId: string;
        /** The new date to move the task to in YYYY-MM-DD format. */
        calendarDay: string;
        /** The new sort order of the task. This should be an integer that is half way between the sort order of the task before it and the sort order of the task after it. If placing at the end of the list, use the sort order of the last task + 2048. If left blank, the task will be placed at the top of the list. */
        sortOrder?: number;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Moves a task to the backlog. IF THE USER ASKS YOU TO MOVE A TASK TO A SPECIFIC DAY THEN YOU SHOULD USE THE move_task_to_day TOOL NOT THIS ONE. */
    "sunsama_mcp.move_task_to_backlog": {
      input: {
        /** The unique identifier `_id` of the task to move. */
        taskId: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Moves or defers a task to a specific date. */
    "sunsama_mcp.move_task_to_day": {
      input: {
        /** The unique identifier `_id` of the task to move. */
        taskId: string;
        /** The new date to move the task to in YYYY-MM-DD format. */
        calendarDay: string;
        /** The new sort order of the task. This should be an integer that is half way between the sort order of the task before it and the sort order of the task after it. If placing at the end of the list, use the sort order of the last task + 2048. If left blank, the task will be placed at the top of the list. */
        sortOrder?: number;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Reads a specific resource by URI. Use this tool to fetch data from resources when the client doesn't support the MCP resources protocol natively.

For static resources, pass the exact URI from list_resources.
For templated resources, fill in the placeholders with actual values.

Example: If list_resources shows uri_template "sunsama://tasks/{calendarDay}", 
you would call this with uri "sunsama://tasks/2025-01-15" to get tasks for that day. */
    "sunsama_mcp.read_resource": {
      input: {
        /** The resource URI to read. For templates, fill in the placeholder values. */
        uri: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Renames one of the user's channels. Takes a channel ID, not a channel name — use the search_channels tool to resolve a name the user mentions into an ID first. Renaming only changes the channel's label; the tasks, objectives, and calendar events assigned to it stay assigned. */
    "sunsama_mcp.rename_channel": {
      input: {
        /** The ID of the channel to rename. */
        channelId: string;
        /** The new name for the channel. */
        newName: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Reorders tasks for the calendar day according to the provided order of taskIds. */
    "sunsama_mcp.reorder_tasks": {
      input: {
        /** The _id(s) of the task(s) in the order they should appear. */
        taskIds: Array<string>;
        /** The date to reorder tasks for in YYYY-MM-DD format. */
        calendarDay: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Repositions a task within the backlog by moving it to a specific time bucket (horizon) and position (append/prepend). */
    "sunsama_mcp.reposition_task_in_backlog": {
      input: {
        /** The unique identifier `_id` of the task to reposition. */
        taskId: string;
        /** The time bucket captures a rough idea of when a task should be done and also how likely it is to actually get done. Options: "in the next two weeks", "in the next month", "in the next quarter", "in the next year", "someday", "never". */
        timeBucket: "in the next two weeks" | "in the next month" | "in the next quarter" | "in the next year" | "someday" | "never";
        /** Where to position the task in the bucket. "prepend" places it at the top, "append" places it at the bottom. */
        position?: "append" | "prepend";
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Changes a task from deleted to not deleted. */
    "sunsama_mcp.restore_task": {
      input: {
        /** The _id of the task to mark as not deleted. */
        taskId: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Searches the user's channels by meaning, not just by exact name. Returns the closest matching channels ordered by relevance, so "client work" can match a channel named "Acme Corp". Use this to resolve a channel a user mentions into a channel ID before assigning tasks to it. */
    "sunsama_mcp.search_channels": {
      input: {
        /** What to search for, e.g. a channel name, project, or client. */
        searchText: string;
        /**
         * How many matching channels to return, ordered by relevance.
         * @minimum 1
         * @maximum 25
         * @default 5
         */
        numResults?: number;
        /** Restrict the search to personal channels (true) or work channels (false). Omit to search both. */
        isPersonal?: boolean;
        /** Restrict the search to categories (true) or to channels inside a category (false). Omit to search both. */
        isCategory?: boolean;
        /** Restrict the search to channels belonging to this category channel ID. */
        categoryStreamId?: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Searches for tasks. Returns tasks that match the search term or are similar to the search term. */
    "sunsama_mcp.search_tasks": {
      input: {
        /** The search term to look for in task titles, notes, and comments */
        searchTerm: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Sets the backlog priority of a task. Backlog priority persists and is used for tasks in the backlog. Valid values: "urgent", "high", "medium", "low", "none". Set to null to clear. */
    "sunsama_mcp.set_backlog_priority": {
      input: {
        /** The _id of the task. */
        taskId: string;
        /** The backlog priority value, or null to clear. */
        backlogPriority: "urgent" | "high" | "medium" | "low" | "none" | null;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Sets whether tasks are allowed to be automatically projected (scheduled) at the same time as a calendar event. When set to true, tasks can be automatically projected during the event. When set to false, tasks cannot be automatically projected during the event. Note: This only affects automatic projections; users can still manually timebox tasks during this event. */
    "sunsama_mcp.set_calendar_event_allow_task_projections": {
      input: {
        /** The unique ID of the calendar event to set task projection settings for. */
        eventId: string;
        /** If true, allows tasks to be automatically projected at the same time as this event. If false, blocks tasks from being automatically projected at the same time as this event. Note: This only affects automatic projections; manual timeboxing is not affected. */
        allowTasksProjectedAtSameTime: boolean;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Sets the daily priority of a task. Daily priority is tied to a specific day and decays after that day. Valid values: "urgent", "important", "normal", "low". Set to null to clear. The date is automatically determined from the task. */
    "sunsama_mcp.set_daily_priority": {
      input: {
        /** The _id of the task. */
        taskId: string;
        /** The daily priority level, or null to clear. */
        dailyPriority: "urgent" | "important" | "normal" | "low" | null;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Sets the shutdown time for a specific day. */
    "sunsama_mcp.set_shutdown_time": {
      input: {
        /** The day to set the shutdown time for, in YYYY-MM-DD format. */
        calendarDay: string;
        /** Hour of the shutdown time (0-23) */
        hour: number;
        /** Minute of the shutdown time (0-59) */
        minute: number;
        /**
         * Whether to create a shutdown task and calendar event for the day.
         * @default false
         */
        addToTheCalendar?: boolean;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Starts the timer for a task or subtask. If a subtaskId is provided, starts the timer for that specific subtask. */
    "sunsama_mcp.start_task_timer": {
      input: {
        /** The _id of the task to start the timer for. */
        taskId: string;
        /** The _id of the subtask to start the timer for. If not provided, starts the timer for the entire task. */
        subtaskId?: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Stops the timer for a task or subtask. If a subtaskId is provided, stops the timer for that specific subtask. */
    "sunsama_mcp.stop_task_timer": {
      input: {
        /** The _id of the task to stop the timer for. */
        taskId: string;
        /** The _id of the subtask to stop the timer for. If not provided, stops the timer for the entire task. */
        subtaskId?: string;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Timeboxes a task to the calendar. This will create a timebox event for the task. This may also be referred to as "scheduling" a task or "adding a task to the calendar". */
    "sunsama_mcp.timebox_a_task_to_calendar": {
      input: {
        /** The _id of the task to timebox. */
        taskId: string;
        /** The start date of the event in YYYY-MM-DD format. If this is in the past you must confirm with the user that you are timeboxing a past task. */
        startDate: string;
        /** The start time of the event in 12 hour "h:mm A" format. If this is in the past you must confirm with the user that you are timeboxing a past task. */
        startTime: string;
        /** The duration of the event in minutes. If not provided the timeEstimate of the task will be used or 30 minutes if the task has no time estimate. */
        duration?: number;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Enables or disables automatic importing of calendar events to the daily task list. */
    "sunsama_mcp.toggle_auto_import_events": {
      input: {
        /** Whether to enable (true) or disable (false) automatic importing of calendar events. */
        enabled: boolean;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Unarchives a task and moves it to a specific date or the backlog if no date is provided. */
    "sunsama_mcp.unarchive_task": {
      input: {
        /** The unique identifier `_id` of the task to move. */
        taskId: string;
        /** The new date to move the task to in YYYY-MM-DD format. */
        calendarDay: string;
        /** The new sort order of the task. This should be an integer that is half way between the sort order of the task before it and the sort order of the task after it. If placing at the end of the list, use the sort order of the last task + 2048. If left blank, the task will be placed at the top of the list. */
        sortOrder?: number;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Updates all incomplete instances of a recurring task to match the current task. This is useful when you want to apply changes made to one instance of a recurring task to all future incomplete instances. */
    "sunsama_mcp.update_all_incomplete_recurring_task_instances": {
      input: {
        /** The _id of the recurring task to update all incomplete instances for. */
        taskId: string;
        /**
         * The type of update to perform. "allIncomplete" updates all incomplete instances starting from today, "allAfterThisTask" updates all incomplete instances starting after the date of the task given by taskId.
         * @default "allIncomplete"
         */
        updateType?: "allIncomplete" | "allAfterThisTask";
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Updates preferences for a specific calendar including whether it is the default for tasks, default for events, and whether it is included in auto-importing of events. */
    "sunsama_mcp.update_calendar_preferences": {
      input: {
        /** The ID of the calendar to update preferences for. */
        calendarId: string;
        /** Whether this calendar should be the default calendar for timeboxing tasks. If not provided, this preference will not be changed. */
        isDefaultForTasks?: boolean;
        /** Whether this calendar should be the default calendar for scheduling events. If not provided, this preference will not be changed. */
        isDefaultForEvents?: boolean;
        /** Whether this calendar should be included in automatic importing of calendar events. If not provided, this preference will not be changed. */
        includedInAutoImportingOfEvents?: boolean;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Updates the exclusion filters that determine which calendar events are excluded from automatic import. Events matching any of these filters will NOT be automatically imported. */
    "sunsama_mcp.update_import_event_filters": {
      input: {
        /** An array of exclusion filter types. Events matching any of these filters will be EXCLUDED from auto-import. Available filters: "solo" (events with no other invitees), "transparent" (non-blocking events), "hold" (events with HOLD/OOO/Focus time in title), "unconfirmed" (unconfirmed meeting invites), "multi-day-all-day" (multi-day all-day events), "single-day-all-day" (single-day all-day events). */
        excludedEventFilters: Array<"solo" | "transparent" | "hold" | "unconfirmed" | "multi-day-all-day" | "single-day-all-day">;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
  }
}
