import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a comment to a Nozbe task. */
    "nozbe_teams.create_comment": {
      input: {
        /** The comment body. */
        body: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        task_id: string;
        /** Whether the comment is pinned. */
        is_pinned?: boolean;
        /** Whether the comment is visible to the team. */
        is_team?: boolean;
        /** Additional serialized comment metadata. */
        extra?: string | null;
      };
      output: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id?: string;
        /** The comment body. */
        body?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        task_id?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        author_id?: string;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        edited_at?: number | null;
        /** Whether the comment is marked as deleted. */
        is_deleted?: boolean;
        /** Whether the comment is pinned. */
        is_pinned?: boolean;
        /** Whether the comment is visible to the team. */
        is_team?: boolean;
        /** Additional serialized comment metadata. */
        extra?: string | null;
        /** Serialized reactions attached to the comment. */
        reactions?: string | null;
        [key: string]: unknown;
      };
    };
    /** Create a Nozbe project in a team. */
    "nozbe_teams.create_project": {
      input: {
        /**
         * The project name.
         * @maxLength 255
         */
        name: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        team_id: string;
        /** Whether the new project is open. */
        is_open: boolean;
        /** Whether the project is marked as a favorite. */
        is_favorite?: boolean;
        /** Whether the project contains single actions. */
        is_single_actions?: boolean;
        /** Whether the project is a template. */
        is_template?: boolean;
        /** The predefined Nozbe project color. */
        color?: "elwis" | "felus" | "fluffy" | "luna" | "maja" | "pedro" | "rufus" | "toto" | "aquamarine" | "aubergine" | "blue" | "brown" | "burntsienna" | "darkgreen" | "deeppurple" | "dustpink" | "green" | "heather" | "indigo" | "karmin" | "lightblue" | "lightpink" | "mauve" | "midnight" | "navy" | "ocean" | "ocher" | "olive" | "orange" | "pink" | "purple" | "red" | "sand" | "stone" | "taupe" | "teal" | "ultramarine" | "yellow" | null;
        /** The project description. */
        description?: string | null;
        /** Additional serialized project metadata. */
        extra?: string | null;
        /** Serialized project preferences. */
        preferences?: string | null;
        /** The project's sidebar position. */
        sidebar_position?: number | null;
      };
      output: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id?: string;
        /** The project name. */
        name?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        team_id?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        author_id?: string;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        ended_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_event_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_seen_event_at?: number | null;
        /** Whether the project is open. */
        is_open?: boolean;
        /** Whether the project is marked as a favorite. */
        is_favorite?: boolean;
        /** Whether the project contains single actions. */
        is_single_actions?: boolean;
        /** Whether the project is a template. */
        is_template?: boolean;
        /** The project's predefined color. */
        color?: string | null;
        /** The team's color for the project. */
        team_color?: string | null;
        /** The project description. */
        description?: string | null;
        /** Additional serialized project metadata. */
        extra?: string | null;
        /** Serialized project preferences. */
        preferences?: string | null;
        /** The project's sidebar position. */
        sidebar_position?: number | null;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        shared_team_id?: string | null;
        [key: string]: unknown;
      };
    };
    /** Create a task in Nozbe. */
    "nozbe_teams.create_task": {
      input: {
        /**
         * The task name.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
        /** The Nozbe project ID or the personal task list identifier. */
        project_id?: string | "task_me" | "";
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        project_section_id?: string | null;
        /** The responsible Nozbe user ID or the special author value. */
        responsible_id?: string | "author" | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        due_at?: number | null;
        /** Whether the current user follows the task. */
        is_followed?: boolean;
        /** Whether the task is an all-day task. */
        is_all_day?: boolean;
        /** The task's priority position. */
        priority_position?: number | null;
        /**
         * A non-negative duration value in Nozbe's integer format.
         * @minimum 0
         */
        time_needed?: number | null;
        /** Additional serialized task metadata. */
        extra?: string | null;
      };
      output: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id?: string;
        /** The task name. */
        name?: string;
        /** The task's project identifier. */
        project_id?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        project_section_id?: string | null;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        author_id?: string;
        /** The user responsible for the task. */
        responsible_id?: string | null;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        recurrence_id?: string | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_modified?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        due_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        ended_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_activity_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_seen_activity_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_reviewed_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        review_triggered_at?: number | null;
        /** The reason the task needs review. */
        review_reason?: string | null;
        /** Whether the current user follows the task. */
        is_followed?: boolean;
        /** Whether the task is abandoned. */
        is_abandoned?: boolean;
        /** Whether the task is an all-day task. */
        is_all_day?: boolean;
        /** The task's position in its project. */
        project_position?: number;
        /** The task's priority position. */
        priority_position?: number | null;
        /**
         * The number of missed task recurrences.
         * @minimum 0
         */
        missed_repeats?: number;
        /**
         * A non-negative duration value in Nozbe's integer format.
         * @minimum 0
         */
        time_needed?: number | null;
        /**
         * A non-negative duration value in Nozbe's integer format.
         * @minimum 0
         */
        time_spent?: number | null;
        /** The task type. */
        type?: string | null;
        /** Additional serialized task metadata. */
        extra?: string | null;
        [key: string]: unknown;
      };
    };
    /** Delete a Nozbe task comment and return the updated comment resource. */
    "nozbe_teams.delete_comment": {
      input: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id: string;
      };
      output: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id?: string;
        /** The comment body. */
        body?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        task_id?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        author_id?: string;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        edited_at?: number | null;
        /** Whether the comment is marked as deleted. */
        is_deleted?: boolean;
        /** Whether the comment is pinned. */
        is_pinned?: boolean;
        /** Whether the comment is visible to the team. */
        is_team?: boolean;
        /** Additional serialized comment metadata. */
        extra?: string | null;
        /** Serialized reactions attached to the comment. */
        reactions?: string | null;
        [key: string]: unknown;
      };
    };
    /** Delete a Nozbe project by ID. */
    "nozbe_teams.delete_project": {
      input: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id: string;
      };
      output: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id: string;
        /** Whether Nozbe accepted the project deletion. */
        deleted: boolean;
      };
    };
    /** Delete a Nozbe task by ID. */
    "nozbe_teams.delete_task": {
      input: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id: string;
      };
      output: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id: string;
        /** Whether Nozbe accepted the task deletion. */
        deleted: boolean;
      };
    };
    /** Get a Nozbe task comment by ID. */
    "nozbe_teams.get_comment": {
      input: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id: string;
      };
      output: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id?: string;
        /** The comment body. */
        body?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        task_id?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        author_id?: string;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        edited_at?: number | null;
        /** Whether the comment is marked as deleted. */
        is_deleted?: boolean;
        /** Whether the comment is pinned. */
        is_pinned?: boolean;
        /** Whether the comment is visible to the team. */
        is_team?: boolean;
        /** Additional serialized comment metadata. */
        extra?: string | null;
        /** Serialized reactions attached to the comment. */
        reactions?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a Nozbe project by ID. */
    "nozbe_teams.get_project": {
      input: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id: string;
      };
      output: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id?: string;
        /** The project name. */
        name?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        team_id?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        author_id?: string;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        ended_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_event_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_seen_event_at?: number | null;
        /** Whether the project is open. */
        is_open?: boolean;
        /** Whether the project is marked as a favorite. */
        is_favorite?: boolean;
        /** Whether the project contains single actions. */
        is_single_actions?: boolean;
        /** Whether the project is a template. */
        is_template?: boolean;
        /** The project's predefined color. */
        color?: string | null;
        /** The team's color for the project. */
        team_color?: string | null;
        /** The project description. */
        description?: string | null;
        /** Additional serialized project metadata. */
        extra?: string | null;
        /** Serialized project preferences. */
        preferences?: string | null;
        /** The project's sidebar position. */
        sidebar_position?: number | null;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        shared_team_id?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a Nozbe task by ID. */
    "nozbe_teams.get_task": {
      input: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id: string;
      };
      output: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id?: string;
        /** The task name. */
        name?: string;
        /** The task's project identifier. */
        project_id?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        project_section_id?: string | null;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        author_id?: string;
        /** The user responsible for the task. */
        responsible_id?: string | null;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        recurrence_id?: string | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_modified?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        due_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        ended_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_activity_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_seen_activity_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_reviewed_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        review_triggered_at?: number | null;
        /** The reason the task needs review. */
        review_reason?: string | null;
        /** Whether the current user follows the task. */
        is_followed?: boolean;
        /** Whether the task is abandoned. */
        is_abandoned?: boolean;
        /** Whether the task is an all-day task. */
        is_all_day?: boolean;
        /** The task's position in its project. */
        project_position?: number;
        /** The task's priority position. */
        priority_position?: number | null;
        /**
         * The number of missed task recurrences.
         * @minimum 0
         */
        missed_repeats?: number;
        /**
         * A non-negative duration value in Nozbe's integer format.
         * @minimum 0
         */
        time_needed?: number | null;
        /**
         * A non-negative duration value in Nozbe's integer format.
         * @minimum 0
         */
        time_spent?: number | null;
        /** The task type. */
        type?: string | null;
        /** Additional serialized task metadata. */
        extra?: string | null;
        [key: string]: unknown;
      };
    };
    /** List Nozbe task comments with pagination, sorting, and task filtering. */
    "nozbe_teams.list_comments": {
      input: {
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /**
         * The number of resources to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Comma-separated fields used for sorting. Prefix a field with '-' for descending order.
         * @pattern ^[-a-z_,]*$
         */
        sortBy?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        task_id?: string;
      };
      output: Array<{
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id?: string;
        /** The comment body. */
        body?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        task_id?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        author_id?: string;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        edited_at?: number | null;
        /** Whether the comment is marked as deleted. */
        is_deleted?: boolean;
        /** Whether the comment is pinned. */
        is_pinned?: boolean;
        /** Whether the comment is visible to the team. */
        is_team?: boolean;
        /** Additional serialized comment metadata. */
        extra?: string | null;
        /** Serialized reactions attached to the comment. */
        reactions?: string | null;
        [key: string]: unknown;
      }>;
    };
    /** List Nozbe projects with pagination, sorting, and team filters. */
    "nozbe_teams.list_projects": {
      input: {
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /**
         * The number of resources to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Comma-separated fields used for sorting. Prefix a field with '-' for descending order.
         * @pattern ^[-a-z_,]*$
         */
        sortBy?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        team_id?: string;
        /** Whether to return only Single Tasks projects. */
        is_single_actions?: boolean;
      };
      output: Array<{
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id?: string;
        /** The project name. */
        name?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        team_id?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        author_id?: string;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        ended_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_event_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_seen_event_at?: number | null;
        /** Whether the project is open. */
        is_open?: boolean;
        /** Whether the project is marked as a favorite. */
        is_favorite?: boolean;
        /** Whether the project contains single actions. */
        is_single_actions?: boolean;
        /** Whether the project is a template. */
        is_template?: boolean;
        /** The project's predefined color. */
        color?: string | null;
        /** The team's color for the project. */
        team_color?: string | null;
        /** The project description. */
        description?: string | null;
        /** Additional serialized project metadata. */
        extra?: string | null;
        /** Serialized project preferences. */
        preferences?: string | null;
        /** The project's sidebar position. */
        sidebar_position?: number | null;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        shared_team_id?: string | null;
        [key: string]: unknown;
      }>;
    };
    /** List Nozbe tasks with pagination, sorting, and project filtering. */
    "nozbe_teams.list_tasks": {
      input: {
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /**
         * The number of resources to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Comma-separated fields used for sorting. Prefix a field with '-' for descending order.
         * @pattern ^[-a-z_,]*$
         */
        sortBy?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        project_id?: string;
      };
      output: Array<{
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id?: string;
        /** The task name. */
        name?: string;
        /** The task's project identifier. */
        project_id?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        project_section_id?: string | null;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        author_id?: string;
        /** The user responsible for the task. */
        responsible_id?: string | null;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        recurrence_id?: string | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_modified?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        due_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        ended_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_activity_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_seen_activity_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_reviewed_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        review_triggered_at?: number | null;
        /** The reason the task needs review. */
        review_reason?: string | null;
        /** Whether the current user follows the task. */
        is_followed?: boolean;
        /** Whether the task is abandoned. */
        is_abandoned?: boolean;
        /** Whether the task is an all-day task. */
        is_all_day?: boolean;
        /** The task's position in its project. */
        project_position?: number;
        /** The task's priority position. */
        priority_position?: number | null;
        /**
         * The number of missed task recurrences.
         * @minimum 0
         */
        missed_repeats?: number;
        /**
         * A non-negative duration value in Nozbe's integer format.
         * @minimum 0
         */
        time_needed?: number | null;
        /**
         * A non-negative duration value in Nozbe's integer format.
         * @minimum 0
         */
        time_spent?: number | null;
        /** The task type. */
        type?: string | null;
        /** Additional serialized task metadata. */
        extra?: string | null;
        [key: string]: unknown;
      }>;
    };
    /** List teams accessible with the connected Nozbe API token. */
    "nozbe_teams.list_teams": {
      input: {
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /**
         * The number of resources to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Comma-separated fields used for sorting. Prefix a field with '-' for descending order.
         * @pattern ^[-a-z_,]*$
         */
        sortBy?: string;
      };
      output: Array<{
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id?: string;
        /** The team name. */
        name?: string;
        /** Whether this is a personal team. */
        is_personal?: boolean;
        /** The team avatar color. */
        color?: string;
        /** The team avatar URL. */
        avatar_url?: string | null;
        /** The serialized team limit information. */
        limits?: string | null;
        /** The serialized team plan information. */
        plan_info?: string | null;
        /** The team's sidebar position. */
        sidebar_position?: number;
        /** The number of AI credits used by the team. */
        ai_credits_used?: number;
        [key: string]: unknown;
      }>;
    };
    /** Update writable fields on a Nozbe task comment. */
    "nozbe_teams.update_comment": {
      input: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id: string;
        /** The updated comment body. */
        body?: string;
        /** Whether the comment is pinned. */
        is_pinned?: boolean;
        /** Whether the comment is marked as deleted. */
        is_deleted?: boolean;
        /** Additional serialized comment metadata. */
        extra?: string | null;
      };
      output: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id?: string;
        /** The comment body. */
        body?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        task_id?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        author_id?: string;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        edited_at?: number | null;
        /** Whether the comment is marked as deleted. */
        is_deleted?: boolean;
        /** Whether the comment is pinned. */
        is_pinned?: boolean;
        /** Whether the comment is visible to the team. */
        is_team?: boolean;
        /** Additional serialized comment metadata. */
        extra?: string | null;
        /** Serialized reactions attached to the comment. */
        reactions?: string | null;
        [key: string]: unknown;
      };
    };
    /** Update writable fields on a Nozbe project. */
    "nozbe_teams.update_project": {
      input: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id: string;
        /**
         * The updated project name.
         * @maxLength 255
         */
        name?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        team_id?: string;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        ended_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_seen_event_at?: number | null;
        /** Whether the project is open. */
        is_open?: boolean;
        /** Whether the project is marked as a favorite. */
        is_favorite?: boolean;
        /** Whether the project contains single actions. */
        is_single_actions?: boolean;
        /** Whether the project is a template. */
        is_template?: boolean;
        /** The predefined Nozbe project color. */
        color?: "elwis" | "felus" | "fluffy" | "luna" | "maja" | "pedro" | "rufus" | "toto" | "aquamarine" | "aubergine" | "blue" | "brown" | "burntsienna" | "darkgreen" | "deeppurple" | "dustpink" | "green" | "heather" | "indigo" | "karmin" | "lightblue" | "lightpink" | "mauve" | "midnight" | "navy" | "ocean" | "ocher" | "olive" | "orange" | "pink" | "purple" | "red" | "sand" | "stone" | "taupe" | "teal" | "ultramarine" | "yellow" | null;
        /** The updated project description. */
        description?: string | null;
        /** Additional serialized project metadata. */
        extra?: string | null;
        /** Serialized project preferences. */
        preferences?: string | null;
        /** The project's sidebar position. */
        sidebar_position?: number | null;
      };
      output: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id?: string;
        /** The project name. */
        name?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        team_id?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        author_id?: string;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        ended_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_event_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_seen_event_at?: number | null;
        /** Whether the project is open. */
        is_open?: boolean;
        /** Whether the project is marked as a favorite. */
        is_favorite?: boolean;
        /** Whether the project contains single actions. */
        is_single_actions?: boolean;
        /** Whether the project is a template. */
        is_template?: boolean;
        /** The project's predefined color. */
        color?: string | null;
        /** The team's color for the project. */
        team_color?: string | null;
        /** The project description. */
        description?: string | null;
        /** Additional serialized project metadata. */
        extra?: string | null;
        /** Serialized project preferences. */
        preferences?: string | null;
        /** The project's sidebar position. */
        sidebar_position?: number | null;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        shared_team_id?: string | null;
        [key: string]: unknown;
      };
    };
    /** Update writable fields on a Nozbe task. */
    "nozbe_teams.update_task": {
      input: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id: string;
        /**
         * The updated task name.
         * @minLength 1
         * @maxLength 255
         */
        name?: string;
        /** The Nozbe project ID or the personal task list identifier. */
        project_id?: string | "task_me" | "";
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        project_section_id?: string | null;
        /** The responsible Nozbe user ID or the special author value. */
        responsible_id?: string | "author" | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        due_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        ended_at?: number | null;
        /** Whether the current user follows the task. */
        is_followed?: boolean;
        /** Whether the task is abandoned. */
        is_abandoned?: boolean;
        /** Whether the task is an all-day task. */
        is_all_day?: boolean;
        /** The task's priority position. */
        priority_position?: number | null;
        /**
         * A non-negative duration value in Nozbe's integer format.
         * @minimum 0
         */
        time_needed?: number | null;
        /**
         * A non-negative duration value in Nozbe's integer format.
         * @minimum 0
         */
        time_spent?: number | null;
        /** Additional serialized task metadata. */
        extra?: string | null;
      };
      output: {
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        id?: string;
        /** The task name. */
        name?: string;
        /** The task's project identifier. */
        project_id?: string;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        project_section_id?: string | null;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        author_id?: string;
        /** The user responsible for the task. */
        responsible_id?: string | null;
        /**
         * The 16-character Nozbe resource ID.
         * @minLength 16
         * @maxLength 16
         * @pattern ^[a-zA-Z0-9]{16}$
         */
        recurrence_id?: string | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_modified?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        due_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        ended_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_activity_at?: number;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_seen_activity_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        last_reviewed_at?: number | null;
        /**
         * A Unix timestamp in milliseconds.
         * @minimum 0
         */
        review_triggered_at?: number | null;
        /** The reason the task needs review. */
        review_reason?: string | null;
        /** Whether the current user follows the task. */
        is_followed?: boolean;
        /** Whether the task is abandoned. */
        is_abandoned?: boolean;
        /** Whether the task is an all-day task. */
        is_all_day?: boolean;
        /** The task's position in its project. */
        project_position?: number;
        /** The task's priority position. */
        priority_position?: number | null;
        /**
         * The number of missed task recurrences.
         * @minimum 0
         */
        missed_repeats?: number;
        /**
         * A non-negative duration value in Nozbe's integer format.
         * @minimum 0
         */
        time_needed?: number | null;
        /**
         * A non-negative duration value in Nozbe's integer format.
         * @minimum 0
         */
        time_spent?: number | null;
        /** The task type. */
        type?: string | null;
        /** Additional serialized task metadata. */
        extra?: string | null;
        [key: string]: unknown;
      };
    };
  }
}
