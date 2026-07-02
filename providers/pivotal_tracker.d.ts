import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Pivotal Tracker story in a project. */
    "pivotal_tracker.create_story": {
      input: {
        /**
         * The numeric Pivotal Tracker project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * Story name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** Tracker story type. */
        storyType?: "feature" | "bug" | "chore" | "release";
        /** Tracker story state. */
        currentState?: "unscheduled" | "unstarted" | "started" | "finished" | "delivered" | "accepted" | "rejected";
        /**
         * Story description.
         * @minLength 1
         */
        description?: string;
        /** Story estimate. */
        estimate?: number;
        /**
         * ID of the requester person.
         * @exclusiveMinimum 0
         */
        requestedById?: number;
        /**
         * Numeric Tracker IDs.
         * @minItems 1
         */
        ownerIds?: Array<number>;
        /**
         * Label names to apply to the story.
         * @minItems 1
         */
        labelNames?: Array<string>;
      };
      output: {
        /** The Pivotal Tracker story returned by the API. */
        story: {
          /** Resource kind returned by Tracker. */
          kind?: string;
          /**
           * The numeric Pivotal Tracker ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /**
           * The numeric Pivotal Tracker project ID.
           * @exclusiveMinimum 0
           */
          project_id?: number;
          /** Story name. */
          name?: string;
          /** Story type returned by Tracker. */
          story_type?: string;
          /** Current story state returned by Tracker. */
          current_state?: string;
          /** Browser URL for the story. */
          url?: string;
          /** Timestamp when the story was created. */
          created_at?: string;
          /** Timestamp when the story was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a text comment on a Pivotal Tracker story. */
    "pivotal_tracker.create_story_comment": {
      input: {
        /**
         * The numeric Pivotal Tracker project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The numeric Pivotal Tracker story ID.
         * @exclusiveMinimum 0
         */
        storyId: number;
        /**
         * Comment text.
         * @minLength 1
         * @pattern \S
         */
        text: string;
      };
      output: {
        /** The Pivotal Tracker story comment returned by the API. */
        comment: {
          /** Resource kind returned by Tracker. */
          kind?: string;
          /**
           * The numeric Pivotal Tracker ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /**
           * The numeric Pivotal Tracker story ID.
           * @exclusiveMinimum 0
           */
          story_id?: number;
          /**
           * ID of the person who created the comment.
           * @exclusiveMinimum 0
           */
          person_id?: number;
          /** Comment text. */
          text?: string;
          /** Timestamp when the comment was created. */
          created_at?: string;
          /** Timestamp when the comment was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the Pivotal Tracker user associated with the API token. */
    "pivotal_tracker.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The Pivotal Tracker user returned by the API. */
        user: {
          /** Resource kind returned by Tracker. */
          kind?: string;
          /**
           * The numeric Pivotal Tracker ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** User display name. */
          name?: string;
          /** Tracker username. */
          username?: string;
          /** User email address. */
          email?: string;
          /** User initials. */
          initials?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Pivotal Tracker project by ID. */
    "pivotal_tracker.get_project": {
      input: {
        /**
         * The numeric Pivotal Tracker project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * Optional Tracker fields selector.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
      };
      output: {
        /** The Pivotal Tracker project returned by the API. */
        project: {
          /** Resource kind returned by Tracker. */
          kind?: string;
          /**
           * The numeric Pivotal Tracker ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** Project name. */
          name?: string;
          /** Project version returned by Tracker. */
          version?: number;
          /** Iteration length in weeks. */
          iteration_length?: number;
          /** Project week start day. */
          week_start_day?: string;
          /** Project point scale. */
          point_scale?: string;
          /**
           * Account ID that owns the project.
           * @exclusiveMinimum 0
           */
          account_id?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Pivotal Tracker story by project ID and story ID. */
    "pivotal_tracker.get_story": {
      input: {
        /**
         * The numeric Pivotal Tracker project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The numeric Pivotal Tracker story ID.
         * @exclusiveMinimum 0
         */
        storyId: number;
        /**
         * Optional Tracker fields selector.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
      };
      output: {
        /** The Pivotal Tracker story returned by the API. */
        story: {
          /** Resource kind returned by Tracker. */
          kind?: string;
          /**
           * The numeric Pivotal Tracker ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /**
           * The numeric Pivotal Tracker project ID.
           * @exclusiveMinimum 0
           */
          project_id?: number;
          /** Story name. */
          name?: string;
          /** Story type returned by Tracker. */
          story_type?: string;
          /** Current story state returned by Tracker. */
          current_state?: string;
          /** Browser URL for the story. */
          url?: string;
          /** Timestamp when the story was created. */
          created_at?: string;
          /** Timestamp when the story was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List stories in a Pivotal Tracker project with optional filters. */
    "pivotal_tracker.list_project_stories": {
      input: {
        /**
         * The numeric Pivotal Tracker project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * Tracker story filter query such as label:plans.
         * @minLength 1
         * @pattern \S
         */
        filter?: string;
        /** Tracker story state. */
        withState?: "unscheduled" | "unstarted" | "started" | "finished" | "delivered" | "accepted" | "rejected";
        /** Tracker story type. */
        withStoryType?: "feature" | "bug" | "chore" | "release";
        /**
         * Maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * Optional Tracker fields selector.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
      };
      output: {
        /** Stories returned by Tracker. */
        stories: Array<{
          /** Resource kind returned by Tracker. */
          kind?: string;
          /**
           * The numeric Pivotal Tracker ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /**
           * The numeric Pivotal Tracker project ID.
           * @exclusiveMinimum 0
           */
          project_id?: number;
          /** Story name. */
          name?: string;
          /** Story type returned by Tracker. */
          story_type?: string;
          /** Current story state returned by Tracker. */
          current_state?: string;
          /** Browser URL for the story. */
          url?: string;
          /** Timestamp when the story was created. */
          created_at?: string;
          /** Timestamp when the story was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Pivotal Tracker projects visible to the API token. */
    "pivotal_tracker.list_projects": {
      input: {
        /**
         * Maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * Optional Tracker fields selector.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
      };
      output: {
        /** Projects returned by Tracker. */
        projects: Array<{
          /** Resource kind returned by Tracker. */
          kind?: string;
          /**
           * The numeric Pivotal Tracker ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** Project name. */
          name?: string;
          /** Project version returned by Tracker. */
          version?: number;
          /** Iteration length in weeks. */
          iteration_length?: number;
          /** Project week start day. */
          week_start_day?: string;
          /** Project point scale. */
          point_scale?: string;
          /**
           * Account ID that owns the project.
           * @exclusiveMinimum 0
           */
          account_id?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List text comments on a Pivotal Tracker story. */
    "pivotal_tracker.list_story_comments": {
      input: {
        /**
         * The numeric Pivotal Tracker project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The numeric Pivotal Tracker story ID.
         * @exclusiveMinimum 0
         */
        storyId: number;
        /**
         * Maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * Optional Tracker fields selector.
         * @minLength 1
         * @pattern \S
         */
        fields?: string;
      };
      output: {
        /** Comments returned by Tracker. */
        comments: Array<{
          /** Resource kind returned by Tracker. */
          kind?: string;
          /**
           * The numeric Pivotal Tracker ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /**
           * The numeric Pivotal Tracker story ID.
           * @exclusiveMinimum 0
           */
          story_id?: number;
          /**
           * ID of the person who created the comment.
           * @exclusiveMinimum 0
           */
          person_id?: number;
          /** Comment text. */
          text?: string;
          /** Timestamp when the comment was created. */
          created_at?: string;
          /** Timestamp when the comment was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update the current state of a Pivotal Tracker story. */
    "pivotal_tracker.update_story_state": {
      input: {
        /**
         * The numeric Pivotal Tracker project ID.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The numeric Pivotal Tracker story ID.
         * @exclusiveMinimum 0
         */
        storyId: number;
        /** Tracker story state. */
        currentState: "unscheduled" | "unstarted" | "started" | "finished" | "delivered" | "accepted" | "rejected";
      };
      output: {
        /** The Pivotal Tracker story returned by the API. */
        story: {
          /** Resource kind returned by Tracker. */
          kind?: string;
          /**
           * The numeric Pivotal Tracker ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /**
           * The numeric Pivotal Tracker project ID.
           * @exclusiveMinimum 0
           */
          project_id?: number;
          /** Story name. */
          name?: string;
          /** Story type returned by Tracker. */
          story_type?: string;
          /** Current story state returned by Tracker. */
          current_state?: string;
          /** Browser URL for the story. */
          url?: string;
          /** Timestamp when the story was created. */
          created_at?: string;
          /** Timestamp when the story was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
