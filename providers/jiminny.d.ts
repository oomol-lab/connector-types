import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve generated action items for a Jiminny activity. */
    "jiminny.get_action_items": {
      input: {
        /**
         * The Jiminny activity UUID to retrieve reporting data for.
         * @format uuid
         */
        activityId: string;
      };
      output: {
        /** The action items payload returned by Jiminny. */
        actionItems: {
          /** Action item text entries returned by Jiminny. */
          content?: Array<string>;
          [key: string]: unknown;
        } | null;
        /** Whether Jiminny returned action items, has no action items, or is still generating it. */
        actionItemsStatus: "available" | "not_available" | "generating";
      };
    };
    /** Retrieve one Jiminny activity by activity UUID. */
    "jiminny.get_activity": {
      input: {
        /**
         * The Jiminny activity UUID to retrieve reporting data for.
         * @format uuid
         */
        activityId: string;
      };
      output: {
        /** The activity payload returned by Jiminny. */
        activity: Record<string, unknown>;
      };
    };
    /** Retrieve AI scorecard results for a Jiminny activity. */
    "jiminny.get_ai_scorecard": {
      input: {
        /**
         * The Jiminny activity UUID to retrieve reporting data for.
         * @format uuid
         */
        activityId: string;
      };
      output: {
        /** The AI scorecard result returned by Jiminny. */
        aiScorecard: Record<string, unknown> | null;
      };
    };
    /** Return the current authenticated Jiminny organization. */
    "jiminny.get_current_organization": {
      input: Record<string, never>;
      output: {
        /** The organization payload returned by Jiminny. */
        organization: Record<string, unknown>;
      };
    };
    /** Retrieve the generated summary for a Jiminny activity. */
    "jiminny.get_summary": {
      input: {
        /**
         * The Jiminny activity UUID to retrieve reporting data for.
         * @format uuid
         */
        activityId: string;
      };
      output: {
        /** The summary payload returned by Jiminny, including content when available. */
        summary: {
          /** The generated summary content. */
          content?: string;
          [key: string]: unknown;
        } | null;
        /** Whether Jiminny returned a summary, has no a summary, or is still generating it. */
        summaryStatus: "available" | "not_available" | "generating";
      };
    };
    /** Retrieve transcription segments for a Jiminny activity. */
    "jiminny.get_transcription": {
      input: {
        /**
         * The Jiminny activity UUID to retrieve reporting data for.
         * @format uuid
         */
        activityId: string;
      };
      output: {
        /** Transcription segments returned by Jiminny. */
        segments: Array<Record<string, unknown>>;
      };
    };
    /** List completed and processed Jiminny activities with date and CRM filters. */
    "jiminny.list_activities": {
      input: {
        /**
         * Filter activities that happened on or after this UTC date-time. Use with toDate.
         * @minLength 1
         */
        fromDate?: string;
        /**
         * Filter activities that happened on or before this UTC date-time. Use with fromDate.
         * @minLength 1
         */
        toDate?: string;
        /**
         * Filter activities updated on or after this UTC date-time. Use with updatedTo when available.
         * @minLength 1
         */
        updatedFrom?: string;
        /**
         * Filter activities updated on or before this UTC date-time. Jiminny defaults it when omitted.
         * @minLength 1
         */
        updatedTo?: string;
        /** Filter activities by Jiminny processing status. */
        status?: "received" | "sent" | "delivered" | "in-progress" | "completed";
        /**
         * Page number to retrieve. Jiminny pages start at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Filter activities by the external CRM account ID scoped to the Jiminny organization.
         * @minLength 1
         */
        accountId?: string;
        /**
         * Filter activities by the external CRM opportunity or deal ID scoped to the Jiminny organization.
         * @minLength 1
         */
        opportunityId?: string;
      };
      output: {
        /** Activities returned by Jiminny. */
        activities: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Jiminny, including page, pageSize, maxPage, and nextPage when available. */
        metadata?: Record<string, unknown>;
        /** Upstream record IDs that Jiminny could not build for the current page. */
        failed?: Array<string>;
      };
    };
    /** List Jiminny AI scorecard results completed within a date range. */
    "jiminny.list_ai_scorecards": {
      input: {
        /**
         * Start of the UTC date-time range accepted by Jiminny.
         * @minLength 1
         */
        fromDate: string;
        /**
         * End of the UTC date-time range accepted by Jiminny.
         * @minLength 1
         */
        toDate: string;
        /**
         * Page number to retrieve. Jiminny pages start at 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** AI scorecard results returned by Jiminny. */
        scorecardResults: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Jiminny, including page, pageSize, maxPage, and nextPage when available. */
        metadata?: Record<string, unknown>;
      };
    };
    /** List Jiminny automated call scoring records with optional filters. */
    "jiminny.list_automated_call_scoring": {
      input: {
        /**
         * Filter results by Jiminny user UUID.
         * @format uuid
         */
        userId?: string;
        /**
         * Start of the UTC date-time range accepted by Jiminny.
         * @minLength 1
         */
        fromDate?: string;
        /**
         * End of the UTC date-time range accepted by Jiminny.
         * @minLength 1
         */
        toDate?: string;
      };
      output: {
        /** Automated call scoring records returned by Jiminny. */
        scoringResults: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Jiminny, including page, pageSize, maxPage, and nextPage when available. */
        metadata?: Record<string, unknown>;
        /** Upstream record IDs that Jiminny could not build for the current page. */
        failed?: Array<string>;
      };
    };
    /** List Jiminny coaching feedback records for a required date range. */
    "jiminny.list_coaching_feedback": {
      input: {
        /**
         * Start of the UTC date-time range accepted by Jiminny.
         * @minLength 1
         */
        fromDate: string;
        /**
         * End of the UTC date-time range accepted by Jiminny.
         * @minLength 1
         */
        toDate: string;
        /**
         * Filter coaching feedback by Jiminny coach user UUID.
         * @format uuid
         */
        coachId?: string;
        /**
         * Filter coaching feedback by Jiminny coachee user UUID.
         * @format uuid
         */
        coacheeId?: string;
      };
      output: {
        /** Coaching feedback records returned by Jiminny. */
        coachingFeedback: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Jiminny, including page, pageSize, maxPage, and nextPage when available. */
        metadata?: Record<string, unknown>;
        /** Upstream record IDs that Jiminny could not build for the current page. */
        failed?: Array<string>;
      };
    };
    /** List Jiminny activity comments with optional user and date filters. */
    "jiminny.list_comments": {
      input: {
        /**
         * Filter results by Jiminny user UUID.
         * @format uuid
         */
        userId?: string;
        /**
         * Start of the UTC date-time range accepted by Jiminny.
         * @minLength 1
         */
        fromDate?: string;
        /**
         * End of the UTC date-time range accepted by Jiminny.
         * @minLength 1
         */
        toDate?: string;
      };
      output: {
        /** Comment records returned by Jiminny. */
        comments: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Jiminny, including page, pageSize, maxPage, and nextPage when available. */
        metadata?: Record<string, unknown>;
        /** Upstream record IDs that Jiminny could not build for the current page. */
        failed?: Array<string>;
      };
    };
    /** List listened activity data for a Jiminny date range. */
    "jiminny.list_listens": {
      input: {
        /**
         * Start of the UTC date-time range accepted by Jiminny.
         * @minLength 1
         */
        fromDate: string;
        /**
         * End of the UTC date-time range accepted by Jiminny.
         * @minLength 1
         */
        toDate: string;
        /**
         * Filter listened activity data by Jiminny user UUID.
         * @format uuid
         */
        userId?: string;
      };
      output: {
        /** Listened activity records returned by Jiminny. */
        listens: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Jiminny, including page, pageSize, maxPage, and nextPage when available. */
        metadata?: Record<string, unknown>;
        /** Upstream record IDs that Jiminny could not build for the current page. */
        failed?: Array<string>;
      };
    };
    /** List topic trigger matches for a Jiminny activity. */
    "jiminny.list_matched_topic_triggers": {
      input: {
        /**
         * The Jiminny activity UUID to retrieve reporting data for.
         * @format uuid
         */
        activityId: string;
      };
      output: {
        /** Topic trigger matches returned by Jiminny for the activity. */
        matchedTopicTriggers: Array<Record<string, unknown>>;
      };
    };
    /** List playback questions detected in a Jiminny activity. */
    "jiminny.list_questions": {
      input: {
        /**
         * The Jiminny activity UUID to retrieve reporting data for.
         * @format uuid
         */
        activityId: string;
      };
      output: {
        /** Playback questions returned by Jiminny. */
        questions: Array<Record<string, unknown>>;
      };
    };
    /** List Jiminny topic trigger definitions for the authenticated organization. */
    "jiminny.list_topic_triggers": {
      input: Record<string, never>;
      output: {
        /** Topic trigger definitions returned by Jiminny. */
        topicTriggers: Array<Record<string, unknown>>;
      };
    };
    /** List Jiminny users for the authenticated organization. */
    "jiminny.list_users": {
      input: Record<string, never>;
      output: {
        /** Users returned by Jiminny. */
        users: Array<Record<string, unknown>>;
        /** Navigation links returned by Jiminny for the users response. */
        links?: Record<string, unknown>;
      };
    };
  }
}
