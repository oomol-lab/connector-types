import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Taiga issue. */
    "taiga.create_issue": {
      input: {
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        project: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        assigned_to?: number | null;
        /** The reason the item is blocked. */
        blocked_note?: string;
        /** The item description. */
        description?: string;
        /** Whether the item is blocked. */
        is_blocked?: boolean;
        /** Whether the item is closed. */
        is_closed?: boolean;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        milestone?: number | null;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        status?: number | null;
        /**
         * The item subject.
         * @minLength 1
         */
        subject: string;
        /** The Taiga tags assigned to the resource. */
        tags?: Array<string>;
        /** The numeric user IDs that should watch the resource. */
        watchers?: Array<number>;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        severity?: number | null;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        priority?: number | null;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        type?: number | null;
      };
      output: {
        /** A Taiga resource record returned by the instance. */
        issue: Record<string, unknown>;
      };
    };
    /** Create a Taiga project. */
    "taiga.create_project": {
      input: {
        /**
         * The project name.
         * @minLength 1
         */
        name: string;
        /** The project description. */
        description: string;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        creation_template?: number | null;
        /** Whether the project backlog is enabled. */
        is_backlog_activated?: boolean;
        /** Whether issue tracking is enabled. */
        is_issues_activated?: boolean;
        /** Whether the Kanban module is enabled. */
        is_kanban_activated?: boolean;
        /** Whether the project is private. */
        is_private?: boolean;
        /** Whether the project wiki is enabled. */
        is_wiki_activated?: boolean;
      };
      output: {
        /** A Taiga resource record returned by the instance. */
        project: Record<string, unknown>;
      };
    };
    /** Create a Taiga task. */
    "taiga.create_task": {
      input: {
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        project: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        assigned_to?: number | null;
        /** The reason the item is blocked. */
        blocked_note?: string;
        /** The item description. */
        description?: string;
        /** Whether the item is blocked. */
        is_blocked?: boolean;
        /** Whether the item is closed. */
        is_closed?: boolean;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        milestone?: number | null;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        status?: number | null;
        /**
         * The item subject.
         * @minLength 1
         */
        subject: string;
        /** The Taiga tags assigned to the resource. */
        tags?: Array<string>;
        /** The numeric user IDs that should watch the resource. */
        watchers?: Array<number>;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        user_story?: number | null;
      };
      output: {
        /** A Taiga resource record returned by the instance. */
        task: Record<string, unknown>;
      };
    };
    /** Create a Taiga user story. */
    "taiga.create_user_story": {
      input: {
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        project: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        assigned_to?: number | null;
        /** The reason the item is blocked. */
        blocked_note?: string;
        /** The item description. */
        description?: string;
        /** Whether the item is blocked. */
        is_blocked?: boolean;
        /** Whether the item is closed. */
        is_closed?: boolean;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        milestone?: number | null;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        status?: number | null;
        /**
         * The item subject.
         * @minLength 1
         */
        subject: string;
        /** The Taiga tags assigned to the resource. */
        tags?: Array<string>;
        /** The numeric user IDs that should watch the resource. */
        watchers?: Array<number>;
        /** Whether the story is a client requirement. */
        client_requirement?: boolean;
        /** Whether the story is a team requirement. */
        team_requirement?: boolean;
      };
      output: {
        /** A Taiga resource record returned by the instance. */
        userStory: Record<string, unknown>;
      };
    };
    /** Get a Taiga issue by numeric ID. */
    "taiga.get_issue": {
      input: {
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        issueId: number;
      };
      output: {
        /** A Taiga resource record returned by the instance. */
        issue: Record<string, unknown>;
      };
    };
    /** Get a Taiga project by numeric ID. */
    "taiga.get_project": {
      input: {
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        projectId: number;
      };
      output: {
        /** A Taiga resource record returned by the instance. */
        project: Record<string, unknown>;
      };
    };
    /** Get a Taiga task by numeric ID. */
    "taiga.get_task": {
      input: {
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        taskId: number;
      };
      output: {
        /** A Taiga resource record returned by the instance. */
        task: Record<string, unknown>;
      };
    };
    /** Get a Taiga user story by numeric ID. */
    "taiga.get_user_story": {
      input: {
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        userStoryId: number;
      };
      output: {
        /** A Taiga resource record returned by the instance. */
        userStory: Record<string, unknown>;
      };
    };
    /** List Taiga issues with optional project filters. */
    "taiga.list_issues": {
      input: {
        /**
         * The one-based result page to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to request per page.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        project?: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        status?: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        milestone?: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        assigned_to?: number;
        /** Whether to return issues with closed statuses. */
        status__is_closed?: boolean;
      };
      output: {
        /** The matching Taiga records. */
        items: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Taiga response headers. */
        pagination: {
          /** The current page number. */
          page: number;
          /** The number of records requested per page. */
          pageSize: number;
          /** The total number of pages. */
          pages: number;
          /** The total number of matching records. */
          count: number;
        };
      };
    };
    /** List Taiga projects visible to the connected user. */
    "taiga.list_projects": {
      input: {
        /**
         * The one-based result page to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to request per page.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        member?: number;
        /** Whether to return projects looking for contributors. */
        is_looking_for_people?: boolean;
        /** Whether to return projects featured by the instance staff. */
        is_featured?: boolean;
      };
      output: {
        /** The matching Taiga records. */
        items: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Taiga response headers. */
        pagination: {
          /** The current page number. */
          page: number;
          /** The number of records requested per page. */
          pageSize: number;
          /** The total number of pages. */
          pages: number;
          /** The total number of matching records. */
          count: number;
        };
      };
    };
    /** List Taiga tasks with optional project filters. */
    "taiga.list_tasks": {
      input: {
        /**
         * The one-based result page to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to request per page.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        project?: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        status?: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        milestone?: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        assigned_to?: number;
        /** Whether to return tasks with closed statuses. */
        status__is_closed?: boolean;
      };
      output: {
        /** The matching Taiga records. */
        items: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Taiga response headers. */
        pagination: {
          /** The current page number. */
          page: number;
          /** The number of records requested per page. */
          pageSize: number;
          /** The total number of pages. */
          pages: number;
          /** The total number of matching records. */
          count: number;
        };
      };
    };
    /** List Taiga user stories with optional project filters. */
    "taiga.list_user_stories": {
      input: {
        /**
         * The one-based result page to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to request per page.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        project?: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        status?: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        milestone?: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        assigned_to?: number;
        /** Whether to return stories with closed statuses. */
        status__is_closed?: boolean;
      };
      output: {
        /** The matching Taiga records. */
        items: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Taiga response headers. */
        pagination: {
          /** The current page number. */
          page: number;
          /** The number of records requested per page. */
          pageSize: number;
          /** The total number of pages. */
          pages: number;
          /** The total number of matching records. */
          count: number;
        };
      };
    };
    /** Update a Taiga issue using optimistic concurrency control. */
    "taiga.update_issue": {
      input: {
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        issueId: number;
        /** The current issue version. */
        version: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        assigned_to?: number | null;
        /** The reason the item is blocked. */
        blocked_note?: string;
        /** The item description. */
        description?: string;
        /** Whether the item is blocked. */
        is_blocked?: boolean;
        /** Whether the item is closed. */
        is_closed?: boolean;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        milestone?: number | null;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        status?: number | null;
        /**
         * The item subject.
         * @minLength 1
         */
        subject?: string;
        /** The Taiga tags assigned to the resource. */
        tags?: Array<string>;
        /** The numeric user IDs that should watch the resource. */
        watchers?: Array<number>;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        severity?: number | null;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        priority?: number | null;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        type?: number | null;
      };
      output: {
        /** A Taiga resource record returned by the instance. */
        issue: Record<string, unknown>;
      };
    };
    /** Update a Taiga project using optimistic concurrency control. */
    "taiga.update_project": {
      input: {
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        projectId: number;
        /** The current project version. */
        version: number;
        /**
         * The project name.
         * @minLength 1
         */
        name?: string;
        /** The project description. */
        description?: string;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        creation_template?: number | null;
        /** Whether the project backlog is enabled. */
        is_backlog_activated?: boolean;
        /** Whether issue tracking is enabled. */
        is_issues_activated?: boolean;
        /** Whether the Kanban module is enabled. */
        is_kanban_activated?: boolean;
        /** Whether the project is private. */
        is_private?: boolean;
        /** Whether the project wiki is enabled. */
        is_wiki_activated?: boolean;
      };
      output: {
        /** A Taiga resource record returned by the instance. */
        project: Record<string, unknown>;
      };
    };
    /** Update a Taiga task using optimistic concurrency control. */
    "taiga.update_task": {
      input: {
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        taskId: number;
        /** The current task version. */
        version: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        assigned_to?: number | null;
        /** The reason the item is blocked. */
        blocked_note?: string;
        /** The item description. */
        description?: string;
        /** Whether the item is blocked. */
        is_blocked?: boolean;
        /** Whether the item is closed. */
        is_closed?: boolean;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        milestone?: number | null;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        status?: number | null;
        /**
         * The item subject.
         * @minLength 1
         */
        subject?: string;
        /** The Taiga tags assigned to the resource. */
        tags?: Array<string>;
        /** The numeric user IDs that should watch the resource. */
        watchers?: Array<number>;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        user_story?: number | null;
      };
      output: {
        /** A Taiga resource record returned by the instance. */
        task: Record<string, unknown>;
      };
    };
    /** Update a Taiga user story using optimistic concurrency control. */
    "taiga.update_user_story": {
      input: {
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        userStoryId: number;
        /** The current user story version. */
        version: number;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        assigned_to?: number | null;
        /** The reason the item is blocked. */
        blocked_note?: string;
        /** The item description. */
        description?: string;
        /** Whether the item is blocked. */
        is_blocked?: boolean;
        /** Whether the item is closed. */
        is_closed?: boolean;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        milestone?: number | null;
        /**
         * The numeric Taiga resource ID.
         * @minimum 1
         */
        status?: number | null;
        /**
         * The item subject.
         * @minLength 1
         */
        subject?: string;
        /** The Taiga tags assigned to the resource. */
        tags?: Array<string>;
        /** The numeric user IDs that should watch the resource. */
        watchers?: Array<number>;
        /** Whether the story is a client requirement. */
        client_requirement?: boolean;
        /** Whether the story is a team requirement. */
        team_requirement?: boolean;
      };
      output: {
        /** A Taiga resource record returned by the instance. */
        userStory: Record<string, unknown>;
      };
    };
  }
}
