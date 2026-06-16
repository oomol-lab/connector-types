import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one datapoint on a Beeminder goal. */
    "beeminder.create_datapoint": {
      input: {
        /**
         * The Beeminder username, or me for the authenticated user.
         * @minLength 1
         */
        username: string;
        /**
         * The Beeminder goal slug.
         * @minLength 1
         */
        goal_slug: string;
        /** The datapoint value. */
        value: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        timestamp?: number;
        /**
         * The datapoint daystamp in YYYYMMDD format.
         * @minLength 1
         */
        daystamp?: string;
        /**
         * The datapoint comment.
         * @minLength 1
         */
        comment?: string;
        /**
         * A caller-supplied idempotency key scoped to the goal. Reusing it avoids duplicate datapoints.
         * @minLength 1
         */
        requestid?: string;
      };
      output: {
        /** A normalized Beeminder datapoint. */
        datapoint: {
          /** The Beeminder datapoint ID when returned. */
          id: string | null;
          /** The datapoint timestamp when returned. */
          timestamp: number | null;
          /** The Beeminder daystamp when returned. */
          daystamp: string | null;
          /** The datapoint value when returned. */
          value: number | null;
          /** The datapoint comment when returned. */
          comment: string | null;
          /** The idempotency key associated with the datapoint when returned. */
          requestid: string | null;
          /** The datapoint update timestamp when returned. */
          updated_at: number | null;
          /** The raw object returned by Beeminder. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete one Beeminder datapoint by ID. */
    "beeminder.delete_datapoint": {
      input: {
        /**
         * The Beeminder username, or me for the authenticated user.
         * @minLength 1
         */
        username: string;
        /**
         * The Beeminder goal slug.
         * @minLength 1
         */
        goal_slug: string;
        /**
         * The Beeminder datapoint ID.
         * @minLength 1
         */
        datapoint_id: string;
      };
      output: {
        /** A normalized Beeminder datapoint. */
        datapoint: {
          /** The Beeminder datapoint ID when returned. */
          id: string | null;
          /** The datapoint timestamp when returned. */
          timestamp: number | null;
          /** The Beeminder daystamp when returned. */
          daystamp: string | null;
          /** The datapoint value when returned. */
          value: number | null;
          /** The datapoint comment when returned. */
          comment: string | null;
          /** The idempotency key associated with the datapoint when returned. */
          requestid: string | null;
          /** The datapoint update timestamp when returned. */
          updated_at: number | null;
          /** The raw object returned by Beeminder. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Read one Beeminder goal, optionally including its datapoints. */
    "beeminder.get_goal": {
      input: {
        /**
         * The Beeminder username, or me for the authenticated user.
         * @minLength 1
         */
        username: string;
        /**
         * The Beeminder goal slug.
         * @minLength 1
         */
        goal_slug: string;
        /** Whether Beeminder should include datapoints in the goal response. */
        datapoints?: boolean;
      };
      output: {
        /** A normalized Beeminder goal. */
        goal: {
          /** The immutable Beeminder goal ID when returned. */
          id: string | null;
          /** The Beeminder goal slug. */
          slug: string;
          /** The goal title when returned. */
          title: string | null;
          /** The Beeminder goal type when returned. */
          goal_type: string | null;
          /** The goal graph URL when returned. */
          graph_url: string | null;
          /** The goal SVG URL when returned. */
          svg_url: string | null;
          /** The goal thumbnail URL when returned. */
          thumb_url: string | null;
          /** The goal update timestamp when returned. */
          updated_at: number | null;
          /** The derailment timestamp when returned. */
          losedate: number | null;
          /** The target date timestamp when returned. */
          goaldate: number | null;
          /** Datapoints included with the goal when requested. */
          datapoints: Array<Record<string, unknown>> | null;
          /** The raw object returned by Beeminder. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get Beeminder user information, including goals and optional diff-based goal details. */
    "beeminder.get_user": {
      input: {
        /**
         * The Beeminder username, or me for the authenticated user.
         * @minLength 1
         */
        username?: string;
        /** Whether to include full goal and datapoint objects instead of only goal slugs. */
        associations?: boolean;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        diff_since?: number;
        /** Whether to return slimmer goal attributes and only each goal's latest datapoint with diff_since. */
        skinny?: boolean;
        /**
         * Number of the most recently added datapoints to include for each goal.
         * @minimum 1
         */
        datapoints_count?: number;
      };
      output: {
        /** A normalized Beeminder user. */
        user: {
          /** The Beeminder username. */
          username: string;
          /** The user's timezone when returned. */
          timezone: string | null;
          /** The user's last update timestamp when returned. */
          updated_at: number | null;
          /** The user's goals, either as slugs or expanded goal objects depending on request options. */
          goals: Array<string | Record<string, unknown>>;
          /** Whether Beeminder reports failed or out-of-date payment information. */
          deadbeat: boolean | null;
          /** The user's Beeminder urgency load score. */
          urgency_load: number | null;
          /** Deleted goals returned when diff_since is used. */
          deleted_goals: Array<Record<string, unknown>> | null;
          /** The raw object returned by Beeminder. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List archived Beeminder goals for a user. */
    "beeminder.list_archived_goals": {
      input: {
        /**
         * The Beeminder username, or me for the authenticated user.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** The archived goals returned by Beeminder. */
        goals: Array<{
          /** The immutable Beeminder goal ID when returned. */
          id: string | null;
          /** The Beeminder goal slug. */
          slug: string;
          /** The goal title when returned. */
          title: string | null;
          /** The Beeminder goal type when returned. */
          goal_type: string | null;
          /** The goal graph URL when returned. */
          graph_url: string | null;
          /** The goal SVG URL when returned. */
          svg_url: string | null;
          /** The goal thumbnail URL when returned. */
          thumb_url: string | null;
          /** The goal update timestamp when returned. */
          updated_at: number | null;
          /** The derailment timestamp when returned. */
          losedate: number | null;
          /** The target date timestamp when returned. */
          goaldate: number | null;
          /** Datapoints included with the goal when requested. */
          datapoints: Array<Record<string, unknown>> | null;
          /** The raw object returned by Beeminder. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List datapoints for one Beeminder goal with optional count or page parameters. */
    "beeminder.list_datapoints": {
      input: {
        /**
         * The Beeminder username, or me for the authenticated user.
         * @minLength 1
         */
        username: string;
        /**
         * The Beeminder goal slug.
         * @minLength 1
         */
        goal_slug: string;
        /**
         * Maximum number of datapoints to return. Ignored when page is set.
         * @minimum 0
         */
        count?: number;
        /**
         * Page number for paginated datapoint results.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of datapoints per page when page is set.
         * @minimum 1
         */
        per?: number;
      };
      output: {
        /** The datapoints returned by Beeminder. */
        datapoints: Array<{
          /** The Beeminder datapoint ID when returned. */
          id: string | null;
          /** The datapoint timestamp when returned. */
          timestamp: number | null;
          /** The Beeminder daystamp when returned. */
          daystamp: string | null;
          /** The datapoint value when returned. */
          value: number | null;
          /** The datapoint comment when returned. */
          comment: string | null;
          /** The idempotency key associated with the datapoint when returned. */
          requestid: string | null;
          /** The datapoint update timestamp when returned. */
          updated_at: number | null;
          /** The raw object returned by Beeminder. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List active Beeminder goals for a user. */
    "beeminder.list_goals": {
      input: {
        /**
         * The Beeminder username, or me for the authenticated user.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** The active goals returned by Beeminder. */
        goals: Array<{
          /** The immutable Beeminder goal ID when returned. */
          id: string | null;
          /** The Beeminder goal slug. */
          slug: string;
          /** The goal title when returned. */
          title: string | null;
          /** The Beeminder goal type when returned. */
          goal_type: string | null;
          /** The goal graph URL when returned. */
          graph_url: string | null;
          /** The goal SVG URL when returned. */
          svg_url: string | null;
          /** The goal thumbnail URL when returned. */
          thumb_url: string | null;
          /** The goal update timestamp when returned. */
          updated_at: number | null;
          /** The derailment timestamp when returned. */
          losedate: number | null;
          /** The target date timestamp when returned. */
          goaldate: number | null;
          /** Datapoints included with the goal when requested. */
          datapoints: Array<Record<string, unknown>> | null;
          /** The raw object returned by Beeminder. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Update one Beeminder datapoint by ID. */
    "beeminder.update_datapoint": {
      input: {
        /**
         * The Beeminder username, or me for the authenticated user.
         * @minLength 1
         */
        username: string;
        /**
         * The Beeminder goal slug.
         * @minLength 1
         */
        goal_slug: string;
        /**
         * The Beeminder datapoint ID.
         * @minLength 1
         */
        datapoint_id: string;
        /** The updated datapoint value. */
        value?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        timestamp?: number;
        /**
         * The updated datapoint daystamp in YYYYMMDD format.
         * @minLength 1
         */
        daystamp?: string;
        /**
         * The datapoint comment.
         * @minLength 1
         */
        comment?: string;
      };
      output: {
        /** A normalized Beeminder datapoint. */
        datapoint: {
          /** The Beeminder datapoint ID when returned. */
          id: string | null;
          /** The datapoint timestamp when returned. */
          timestamp: number | null;
          /** The Beeminder daystamp when returned. */
          daystamp: string | null;
          /** The datapoint value when returned. */
          value: number | null;
          /** The datapoint comment when returned. */
          comment: string | null;
          /** The idempotency key associated with the datapoint when returned. */
          requestid: string | null;
          /** The datapoint update timestamp when returned. */
          updated_at: number | null;
          /** The raw object returned by Beeminder. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
