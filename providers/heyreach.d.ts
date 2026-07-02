import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an empty HeyReach lead or company list. */
    "heyreach.create_empty_list": {
      input: {
        /**
         * The list name.
         * @minLength 1
         */
        name: string;
        /** The HeyReach list type. */
        type?: "USER_LIST" | "COMPANY_LIST";
      };
      output: {
        /** The raw object returned by HeyReach. */
        list: Record<string, unknown>;
      };
    };
    /** Retrieve one HeyReach campaign by ID. */
    "heyreach.get_campaign": {
      input: {
        /**
         * The HeyReach campaign ID.
         * @minimum 1
         */
        campaignId: number;
      };
      output: {
        /** The raw object returned by HeyReach. */
        campaign: Record<string, unknown>;
      };
    };
    /** Retrieve HeyReach lead details by LinkedIn profile URL. */
    "heyreach.get_lead": {
      input: {
        /**
         * The LinkedIn profile URL for the lead.
         * @format uri
         */
        profileUrl: string;
      };
      output: {
        /** The raw object returned by HeyReach. */
        lead: Record<string, unknown>;
      };
    };
    /** Retrieve tags for a HeyReach lead by LinkedIn profile URL. */
    "heyreach.get_lead_tags": {
      input: {
        /**
         * The LinkedIn profile URL for the lead.
         * @format uri
         */
        profileUrl: string;
      };
      output: {
        /** The tags returned by HeyReach. */
        tags: Array<string>;
        /** The raw object returned by HeyReach. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve aggregated HeyReach outreach stats for optional account and campaign filters. */
    "heyreach.get_overall_stats": {
      input: {
        /** LinkedIn sender account IDs to include. Omit or pass an empty array to include all senders. */
        accountIds?: Array<number>;
        /** HeyReach campaign IDs to include. Omit or pass an empty array to include all campaigns. */
        campaignIds?: Array<number>;
        /**
         * The start of the stats time range.
         * @format date-time
         */
        startDate?: string;
        /**
         * The end of the stats time range.
         * @format date-time
         */
        endDate?: string;
      };
      output: {
        /** The raw object returned by HeyReach. */
        stats: Record<string, unknown>;
      };
    };
    /** Retrieve HeyReach outreach stats grouped by campaign. */
    "heyreach.get_overall_stats_by_campaign": {
      input: {
        /** LinkedIn sender account IDs to include. Omit or pass an empty array to include all senders. */
        accountIds?: Array<number>;
        /** HeyReach campaign IDs to include. Omit or pass an empty array to include all campaigns. */
        campaignIds?: Array<number>;
        /**
         * The start of the stats time range.
         * @format date-time
         */
        startDate?: string;
        /**
         * The end of the stats time range.
         * @format date-time
         */
        endDate?: string;
      };
      output: {
        /** The raw object returned by HeyReach. */
        stats: Record<string, unknown>;
      };
    };
    /** List HeyReach campaigns with optional filters and pagination. */
    "heyreach.list_campaigns": {
      input: {
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * A keyword used to filter campaigns by name.
         * @minLength 1
         */
        keyword?: string;
        /**
         * Campaign statuses to include.
         * @minItems 1
         */
        statuses?: Array<"DRAFT" | "IN_PROGRESS" | "PAUSED" | "FINISHED" | "CANCELED" | "FAILED" | "STARTING" | "SCHEDULED">;
        /**
         * LinkedIn sender account IDs used to filter campaigns.
         * @minItems 1
         */
        accountIds?: Array<number>;
      };
      output: {
        /** The total number of matching records when provided. */
        totalCount: number | null;
        /** The campaigns returned by HeyReach. */
        campaigns: Array<{
          /** The HeyReach campaign ID. */
          id?: number;
          /** The campaign name. */
          name?: string;
          /** The campaign status. */
          status?: string;
          /** The campaign creation timestamp. */
          creationTime?: string;
          [key: string]: unknown;
        }>;
        /** The raw object returned by HeyReach. */
        raw: Record<string, unknown>;
      };
    };
    /** List leads from a HeyReach list with optional filters and pagination. */
    "heyreach.list_leads": {
      input: {
        /**
         * The HeyReach list ID.
         * @minimum 1
         */
        listId: number;
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * A keyword used to filter leads.
         * @minLength 1
         */
        keyword?: string;
        /**
         * The earliest lead creation timestamp to include.
         * @format date-time
         */
        createdFrom?: string;
        /**
         * The latest lead creation timestamp to include.
         * @format date-time
         */
        createdTo?: string;
        /**
         * A LinkedIn member ID used to filter leads.
         * @minLength 1
         */
        leadLinkedInId?: string;
        /**
         * A LinkedIn profile URL used to filter leads.
         * @format uri
         */
        leadProfileUrl?: string;
      };
      output: {
        /** The total number of matching records when provided. */
        totalCount: number | null;
        /** The leads returned by HeyReach. */
        leads: Array<{
          /** The LinkedIn profile URL for the lead. */
          profileUrl?: string;
          /** The lead first name. */
          firstName?: string;
          /** The lead last name. */
          lastName?: string;
          /** The lead email address when available. */
          emailAddress?: string;
          /** The lead company name when available. */
          companyName?: string;
          [key: string]: unknown;
        }>;
        /** The raw object returned by HeyReach. */
        raw: Record<string, unknown>;
      };
    };
    /** List HeyReach LinkedIn sender accounts with pagination. */
    "heyreach.list_linkedin_accounts": {
      input: {
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The total number of matching records when provided. */
        totalCount: number | null;
        /** The LinkedIn sender accounts returned by HeyReach. */
        accounts: Array<{
          /** The LinkedIn sender account ID. */
          id?: number;
          /** The sender account email address. */
          emailAddress?: string;
          /** The sender first name. */
          firstName?: string;
          /** The sender last name. */
          lastName?: string;
          [key: string]: unknown;
        }>;
        /** The raw object returned by HeyReach. */
        raw: Record<string, unknown>;
      };
    };
    /** List HeyReach lead and company lists with pagination. */
    "heyreach.list_lists": {
      input: {
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The total number of matching records when provided. */
        totalCount: number | null;
        /** The lists returned by HeyReach. */
        lists: Array<{
          /** The HeyReach list ID. */
          id?: number;
          /** The list name. */
          name?: string;
          /** The list type. */
          listType?: string;
          /** The number of items in the list. */
          totalItemsCount?: number;
          /** The list creation timestamp. */
          creationTime?: string;
          [key: string]: unknown;
        }>;
        /** The raw object returned by HeyReach. */
        raw: Record<string, unknown>;
      };
    };
  }
}
