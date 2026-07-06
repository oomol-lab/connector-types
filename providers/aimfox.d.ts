import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add one LinkedIn profile URL to an Aimfox campaign audience. */
    "aimfox.add_profile_to_campaign": {
      input: {
        /**
         * The Aimfox campaign ID.
         * @minLength 1
         */
        campaign_id: string;
        /**
         * The LinkedIn profile URL to add to the campaign audience.
         * @format uri
         */
        profile_url: string;
      };
      output: {
        /** The status returned by Aimfox. */
        status: string | null;
      };
    };
    /** Fetch one Aimfox campaign by campaign ID. */
    "aimfox.get_campaign": {
      input: {
        /**
         * The Aimfox campaign ID.
         * @minLength 1
         */
        campaign_id: string;
      };
      output: {
        /** The status returned by Aimfox. */
        status: string | null;
        /** A raw object returned by Aimfox. */
        campaign: Record<string, unknown>;
      };
    };
    /** Fetch interaction metrics for one Aimfox campaign. */
    "aimfox.get_campaign_metrics": {
      input: {
        /**
         * The Aimfox campaign ID.
         * @minLength 1
         */
        campaign_id: string;
      };
      output: {
        /** The status returned by Aimfox. */
        status: string | null;
        /** A raw object returned by Aimfox. */
        metrics: Record<string, unknown>;
      };
    };
    /** Fetch one Aimfox lead by lead ID. */
    "aimfox.get_lead": {
      input: {
        /**
         * The Aimfox lead ID.
         * @minLength 1
         */
        lead_id: string;
      };
      output: {
        /** The status returned by Aimfox. */
        status: string | null;
        /** A raw object returned by Aimfox. */
        lead: Record<string, unknown>;
      };
    };
    /** Count Aimfox leads that match the documented lead search filters. */
    "aimfox.get_total_leads_count": {
      input: {
        /** Keywords to search for in Aimfox leads. */
        keywords?: string;
        /** Filter values for an Aimfox lead search facet. */
        current_companies?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        past_companies?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        education?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        interests?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        labels?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        languages?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        locations?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        origins?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        skills?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        lead_of?: Array<string>;
        /** Whether Aimfox should optimize the lead search. */
        optimize?: boolean;
      };
      output: {
        /** The status returned by Aimfox. */
        status: string | null;
        /**
         * The number of matching Aimfox leads.
         * @minimum 0
         */
        total_leads: number;
        /** Whether Aimfox reports the count as synchronized. */
        sync: boolean;
        /** Per-account synchronization flags returned by Aimfox. */
        accounts_sync: Record<string, unknown>;
      };
    };
    /** List Aimfox campaigns, optionally filtering by outreach type or profile inserts. */
    "aimfox.list_campaigns": {
      input: {
        /** The outreach type to filter campaigns by. */
        outreach_type?: "inbound" | "outbound";
        /** Whether to return only campaigns that accept profile inserts. */
        accepts_profiles?: boolean;
      };
      output: {
        /** The status returned by Aimfox. */
        status: string | null;
        /** Raw objects returned by Aimfox. */
        campaigns: Array<Record<string, unknown>>;
      };
    };
    /** List Aimfox interaction buckets for a timestamp range. */
    "aimfox.list_interactions": {
      input: {
        /** The interval used to group interaction metrics. */
        bucket: "1 hour" | "1 day";
        /**
         * The range start timestamp in milliseconds.
         * @minimum 0
         */
        from: number;
        /**
         * The range end timestamp in milliseconds.
         * @minimum 0
         */
        to: number;
        /** Aimfox account IDs to filter interactions by. */
        account_ids?: Array<string>;
        /**
         * The Aimfox campaign ID to filter interactions by.
         * @minLength 1
         */
        campaign_id?: string;
      };
      output: {
        /** The status returned by Aimfox. */
        status: string | null;
        /**
         * The number of interaction buckets returned by Aimfox.
         * @minimum 0
         */
        count: number;
        /** Raw objects returned by Aimfox. */
        buckets: Array<Record<string, unknown>>;
      };
    };
    /** List recent Aimfox lead transition events for the workspace. */
    "aimfox.list_recent_leads": {
      input: Record<string, never>;
      output: {
        /** The status returned by Aimfox. */
        status: string | null;
        /** Raw objects returned by Aimfox. */
        leads: Array<Record<string, unknown>>;
      };
    };
    /** List labels configured in the Aimfox workspace. */
    "aimfox.list_workspace_labels": {
      input: Record<string, never>;
      output: {
        /** The status returned by Aimfox. */
        status: string | null;
        /** Raw objects returned by Aimfox. */
        labels: Array<Record<string, unknown>>;
      };
    };
    /** Remove one LinkedIn profile from an Aimfox campaign audience by URN or public ID. */
    "aimfox.remove_profile_from_campaign": {
      input: {
        /**
         * The Aimfox campaign ID.
         * @minLength 1
         */
        campaign_id: string;
        /**
         * The LinkedIn profile URN or public identifier to remove.
         * @minLength 1
         */
        urn: string;
      };
      output: {
        /** The status returned by Aimfox. */
        status: string | null;
      };
    };
    /** Search Aimfox leads with documented facet filters and offset pagination. */
    "aimfox.search_leads": {
      input: {
        /** Keywords to search for in Aimfox leads. */
        keywords?: string;
        /** Filter values for an Aimfox lead search facet. */
        current_companies?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        past_companies?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        education?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        interests?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        labels?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        languages?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        locations?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        origins?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        skills?: Array<string>;
        /** Filter values for an Aimfox lead search facet. */
        lead_of?: Array<string>;
        /** Whether Aimfox should optimize the lead search. */
        optimize?: boolean;
        /**
         * The zero-based offset for the lead search results.
         * @minimum 0
         */
        start?: number;
        /**
         * The number of lead search results to return.
         * @exclusiveMinimum 0
         */
        count?: number;
      };
      output: {
        /** The status returned by Aimfox. */
        status: string | null;
        /** Raw objects returned by Aimfox. */
        leads: Array<Record<string, unknown>>;
      };
    };
  }
}
