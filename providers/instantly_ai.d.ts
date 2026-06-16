import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a lead in an Instantly campaign or lead list. */
    "instantly_ai.create_lead": {
      input: {
        /**
         * Campaign ID associated with the lead.
         * @format uuid
         */
        campaign?: string | null;
        /**
         * Lead list ID associated with the lead.
         * @format uuid
         */
        list_id?: string | null;
        /** Email address of the lead. */
        email?: string | null;
        /** Personalization text for the lead. */
        personalization?: string | null;
        /** Website of the lead. */
        website?: string | null;
        /** Last name of the lead. */
        last_name?: string | null;
        /** First name of the lead. */
        first_name?: string | null;
        /** Company name of the lead. */
        company_name?: string | null;
        /** Job title of the lead. */
        job_title?: string | null;
        /** Phone number of the lead. */
        phone?: string | null;
        /** Lead interest status enum value. */
        lt_interest_status?: number;
        /** Potential value of the lead. */
        pl_value_lead?: string | null;
        /**
         * ID of the user assigned to the lead.
         * @format uuid
         */
        assigned_to?: string | null;
        /** Whether to skip creation if the lead is already in the workspace. */
        skip_if_in_workspace?: boolean;
        /** Whether to skip creation if the lead is already in the campaign. */
        skip_if_in_campaign?: boolean;
        /** Whether to skip creation if the lead is already in the list. */
        skip_if_in_list?: boolean;
        /**
         * The blocklist ID to check for the lead.
         * @format uuid
         */
        blocklist_id?: string;
        /** Whether to verify the lead for lead finder. */
        verify_leads_for_lead_finder?: boolean;
        /** Whether to verify the lead on import. */
        verify_leads_on_import?: boolean;
        /** Custom variables for an Instantly lead. Values must be strings, numbers, booleans, or null. */
        custom_variables?: Record<string, string | number | boolean | null>;
      };
      output: {
        /**
         * Unique identifier for the lead.
         * @format uuid
         */
        id: string;
        /**
         * An ISO 8601 timestamp returned by Instantly.
         * @format date-time
         */
        timestamp_created: string;
        /**
         * An ISO 8601 timestamp returned by Instantly.
         * @format date-time
         */
        timestamp_updated: string;
        /**
         * Organization ID associated with the lead.
         * @format uuid
         */
        organization: string;
        /**
         * Campaign ID associated with the lead.
         * @format uuid
         */
        campaign?: string | null;
        /**
         * Lead list ID associated with the lead.
         * @format uuid
         */
        list_id?: string | null;
        /** Lead status enum value returned by Instantly. */
        status: number;
        /** Email address of the lead. */
        email?: string | null;
        /** First name of the lead. */
        first_name?: string | null;
        /** Last name of the lead. */
        last_name?: string | null;
        /** Company name of the lead. */
        company_name?: string | null;
        /** Job title of the lead. */
        job_title?: string | null;
        /** Website of the lead. */
        website?: string | null;
        /** Phone number of the lead. */
        phone?: string | null;
        /** Personalization text for the lead. */
        personalization?: string | null;
        /** Number of times the lead opened campaign emails. */
        email_open_count: number;
        /** Number of times the lead replied to campaign emails. */
        email_reply_count: number;
        /** Number of times the lead clicked campaign links. */
        email_click_count: number;
        /** Company domain of the lead. */
        company_domain: string;
        /** Custom variables returned in the lead payload. */
        payload?: Record<string, unknown> | null;
        /** Lead interest status enum value returned by Instantly. */
        lt_interest_status?: number;
        /** Lead verification status enum value returned by Instantly. */
        verification_status?: number;
        /** Lead enrichment status enum value returned by Instantly. */
        enrichment_status?: number;
        /**
         * ID of the user assigned to the lead.
         * @format uuid
         */
        assigned_to?: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Instantly campaign by ID. */
    "instantly_ai.get_campaign": {
      input: {
        /**
         * The Instantly campaign ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /**
         * Unique identifier for the campaign.
         * @format uuid
         */
        id: string;
        /** Name of the campaign. */
        name: string;
        /** Campaign status enum value returned by Instantly. */
        status: number;
        /**
         * An ISO 8601 timestamp returned by Instantly.
         * @format date-time
         */
        timestamp_created: string;
        /**
         * An ISO 8601 timestamp returned by Instantly.
         * @format date-time
         */
        timestamp_updated: string;
        /** Value of every positive lead. */
        pl_value?: number | null;
        /** Whether the campaign is evergreen. */
        is_evergreen?: boolean | null;
        /** The campaign daily sending limit. */
        daily_limit?: number | null;
        /**
         * The daily maximum number of new leads to contact.
         * @minimum 0
         */
        daily_max_leads?: number | null;
        /** Whether the campaign stops when a lead replies. */
        stop_on_reply?: boolean | null;
        /** Whether the campaign tracks email opens. */
        open_tracking?: boolean;
        /** Whether the campaign tracks link clicks. */
        link_tracking?: boolean | null;
        [key: string]: unknown;
      };
    };
    /** List Instantly campaigns with optional search, tag, and status filters. */
    "instantly_ai.list_campaigns": {
      input: {
        /**
         * The number of campaigns to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination cursor returned by Instantly.
         * @minLength 1
         */
        starting_after?: string;
        /**
         * Search campaigns by name.
         * @minLength 1
         */
        search?: string;
        /**
         * Campaign tag IDs to filter by. Instantly receives these as a comma-separated query value.
         * @minItems 1
         */
        tag_ids?: Array<string>;
        /**
         * Filter campaigns by AI Sales Agent ID.
         * @format uuid
         */
        ai_sales_agent_id?: string;
        /** Filter campaigns by Instantly campaign status enum value. */
        status?: number;
      };
      output: {
        /** Campaigns returned for the requested page. */
        items: Array<{
          /**
           * Unique identifier for the campaign.
           * @format uuid
           */
          id: string;
          /** Name of the campaign. */
          name: string;
          /** Campaign status enum value returned by Instantly. */
          status: number;
          /**
           * An ISO 8601 timestamp returned by Instantly.
           * @format date-time
           */
          timestamp_created: string;
          /**
           * An ISO 8601 timestamp returned by Instantly.
           * @format date-time
           */
          timestamp_updated: string;
          /** Value of every positive lead. */
          pl_value?: number | null;
          /** Whether the campaign is evergreen. */
          is_evergreen?: boolean | null;
          /** The campaign daily sending limit. */
          daily_limit?: number | null;
          /**
           * The daily maximum number of new leads to contact.
           * @minimum 0
           */
          daily_max_leads?: number | null;
          /** Whether the campaign stops when a lead replies. */
          stop_on_reply?: boolean | null;
          /** Whether the campaign tracks email opens. */
          open_tracking?: boolean;
          /** Whether the campaign tracks link clicks. */
          link_tracking?: boolean | null;
          [key: string]: unknown;
        }>;
        /**
         * The pagination cursor returned by Instantly.
         * @minLength 1
         */
        next_starting_after?: string;
      };
    };
    /** List Instantly leads using JSON filters and cursor pagination. */
    "instantly_ai.list_leads": {
      input: {
        /**
         * Search leads by first name, last name, or email.
         * @minLength 1
         */
        search?: string;
        /**
         * Instantly lead filter value, such as FILTER_VAL_CONTACTED.
         * @minLength 1
         */
        filter?: string;
        /**
         * Campaign ID to filter leads.
         * @format uuid
         */
        campaign?: string;
        /**
         * Lead list ID to filter leads.
         * @format uuid
         */
        list_id?: string;
        /** Whether to return leads that are in a campaign. */
        in_campaign?: boolean;
        /** Whether to return leads that are in a lead list. */
        in_list?: boolean;
        /**
         * Lead IDs to include.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * Lead IDs to exclude.
         * @minItems 1
         */
        excluded_ids?: Array<string>;
        /**
         * Lead email addresses to include.
         * @minItems 1
         */
        contacts?: Array<string>;
        /**
         * The number of leads to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination cursor returned by Instantly.
         * @minLength 1
         */
        starting_after?: string;
        /**
         * Organization user IDs to filter leads.
         * @minItems 1
         */
        organization_user_ids?: Array<string>;
        /**
         * Smart view ID to filter leads.
         * @format uuid
         */
        smart_view_id?: string;
        /** Whether to return website visitor leads. */
        is_website_visitor?: boolean;
        /** Whether to return distinct contacts. */
        distinct_contacts?: boolean;
        /** Enrichment status enum value to filter leads. */
        enrichment_status?: number;
        /** ESG code to filter leads. */
        esg_code?: "0" | "1" | "2" | "3" | "4" | "all" | "none";
      };
      output: {
        /** Leads returned for the requested page. */
        items: Array<{
          /**
           * Unique identifier for the lead.
           * @format uuid
           */
          id: string;
          /**
           * An ISO 8601 timestamp returned by Instantly.
           * @format date-time
           */
          timestamp_created: string;
          /**
           * An ISO 8601 timestamp returned by Instantly.
           * @format date-time
           */
          timestamp_updated: string;
          /**
           * Organization ID associated with the lead.
           * @format uuid
           */
          organization: string;
          /**
           * Campaign ID associated with the lead.
           * @format uuid
           */
          campaign?: string | null;
          /**
           * Lead list ID associated with the lead.
           * @format uuid
           */
          list_id?: string | null;
          /** Lead status enum value returned by Instantly. */
          status: number;
          /** Email address of the lead. */
          email?: string | null;
          /** First name of the lead. */
          first_name?: string | null;
          /** Last name of the lead. */
          last_name?: string | null;
          /** Company name of the lead. */
          company_name?: string | null;
          /** Job title of the lead. */
          job_title?: string | null;
          /** Website of the lead. */
          website?: string | null;
          /** Phone number of the lead. */
          phone?: string | null;
          /** Personalization text for the lead. */
          personalization?: string | null;
          /** Number of times the lead opened campaign emails. */
          email_open_count: number;
          /** Number of times the lead replied to campaign emails. */
          email_reply_count: number;
          /** Number of times the lead clicked campaign links. */
          email_click_count: number;
          /** Company domain of the lead. */
          company_domain: string;
          /** Custom variables returned in the lead payload. */
          payload?: Record<string, unknown> | null;
          /** Lead interest status enum value returned by Instantly. */
          lt_interest_status?: number;
          /** Lead verification status enum value returned by Instantly. */
          verification_status?: number;
          /** Lead enrichment status enum value returned by Instantly. */
          enrichment_status?: number;
          /**
           * ID of the user assigned to the lead.
           * @format uuid
           */
          assigned_to?: string | null;
          [key: string]: unknown;
        }>;
        /**
         * The pagination cursor returned by Instantly.
         * @minLength 1
         */
        next_starting_after?: string;
      };
    };
  }
}
