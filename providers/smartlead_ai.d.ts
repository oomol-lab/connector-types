import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Smartlead campaign by ID. */
    "smartlead_ai.get_campaign": {
      input: {
        /**
         * The Smartlead campaign identifier.
         * @minimum 1
         */
        campaign_id: number;
        /** Whether to include campaign tags in the campaign response. */
        include_tags?: boolean;
      };
      output: {
        /** A Smartlead campaign. */
        campaign: {
          /** The Smartlead campaign identifier. */
          id: number | null;
          /** The campaign name. */
          name: string | null;
          /** The campaign status returned by Smartlead. */
          status: string | null;
          /** The datetime when the campaign was created. */
          created_at: string | null;
          /** The datetime when the campaign was last updated. */
          updated_at: string | null;
          /** The associated client identifier when present. */
          client_id: number | null;
          /** The campaign tags when requested. */
          tags: Array<{
            /** The Smartlead tag identifier. */
            tag_id: number | null;
            /** The Smartlead tag name. */
            tag_name: string | null;
            /** The Smartlead tag color. */
            tag_color: string | null;
            [key: string]: unknown;
          }>;
          /** The raw campaign object returned by Smartlead. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The raw response returned by Smartlead. */
        raw: unknown;
      };
    };
    /** List Smartlead leads in a campaign with optional status and engagement filters. */
    "smartlead_ai.list_campaign_leads": {
      input: {
        /**
         * The Smartlead campaign identifier.
         * @minimum 1
         */
        campaign_id: number;
        /**
         * The pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The number of leads to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The Smartlead campaign lead status. */
        status?: "STARTED" | "INPROGRESS" | "COMPLETED" | "PAUSED" | "STOPPED";
        /**
         * Only return leads in this Smartlead lead category.
         * @minimum 1
         */
        lead_category_id?: number;
        /** The Smartlead lead email engagement status. */
        emailStatus?: "is_opened" | "is_clicked" | "is_replied" | "is_bounced" | "is_unsubscribed" | "is_spam" | "is_accepted" | "not_replied" | "is_sender_bounced";
        /**
         * An ISO 8601 datetime string accepted by Smartlead.
         * @format date-time
         */
        created_at_gt?: string;
        /**
         * An ISO 8601 datetime string accepted by Smartlead.
         * @format date-time
         */
        last_sent_time_gt?: string;
        /**
         * An ISO 8601 datetime string accepted by Smartlead.
         * @format date-time
         */
        event_time_gt?: string;
      };
      output: {
        /** The total number of matching leads when provided. */
        total_leads: number | null;
        /** The offset returned by Smartlead. */
        offset: number | null;
        /** The limit returned by Smartlead. */
        limit: number | null;
        /** The Smartlead campaign leads returned by the API. */
        leads: Array<{
          /** The Smartlead campaign-lead mapping identifier. */
          campaign_lead_map_id: number | null;
          /** The Smartlead lead category identifier. */
          lead_category_id: number | null;
          /** The lead status in the campaign. */
          status: string | null;
          /** The datetime when the lead was added to the campaign. */
          created_at: string | null;
          /** A Smartlead lead contact. */
          lead: {
            /** The Smartlead lead identifier. */
            id: number | null;
            /** The lead email address. */
            email: string | null;
            /** The lead first name. */
            first_name: string | null;
            /** The lead last name. */
            last_name: string | null;
            /** The lead phone number. */
            phone_number: string | null;
            /** The lead company name. */
            company_name: string | null;
            /** The lead website. */
            website: string | null;
            /** The lead location. */
            location: string | null;
            /** The lead LinkedIn profile URL. */
            linkedin_profile: string | null;
            /** The lead company URL. */
            company_url: string | null;
            /** Custom fields attached to the lead. */
            custom_fields: Record<string, unknown> | null;
            /** Whether the lead is globally unsubscribed. */
            is_unsubscribed: boolean | null;
            [key: string]: unknown;
          } | null;
          /** The raw campaign lead object returned by Smartlead. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw response returned by Smartlead. */
        raw: unknown;
      };
    };
    /** List Smartlead campaigns with optional client and tag filters. */
    "smartlead_ai.list_campaigns": {
      input: {
        /**
         * Only return campaigns for this Smartlead client identifier.
         * @minimum 1
         */
        client_id?: number;
        /** Whether to include campaign tags in each campaign. */
        include_tags?: boolean;
      };
      output: {
        /** The Smartlead campaigns returned by the API. */
        campaigns: Array<{
          /** The Smartlead campaign identifier. */
          id: number | null;
          /** The campaign name. */
          name: string | null;
          /** The campaign status returned by Smartlead. */
          status: string | null;
          /** The datetime when the campaign was created. */
          created_at: string | null;
          /** The datetime when the campaign was last updated. */
          updated_at: string | null;
          /** The associated client identifier when present. */
          client_id: number | null;
          /** The campaign tags when requested. */
          tags: Array<{
            /** The Smartlead tag identifier. */
            tag_id: number | null;
            /** The Smartlead tag name. */
            tag_name: string | null;
            /** The Smartlead tag color. */
            tag_color: string | null;
            [key: string]: unknown;
          }>;
          /** The raw campaign object returned by Smartlead. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw response returned by Smartlead. */
        raw: unknown;
      };
    };
    /** List Smartlead email accounts with optional connection and warmup filters. */
    "smartlead_ai.list_email_accounts": {
      input: {
        /**
         * The pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The number of accounts to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** A boolean query value represented as a string. */
        isInUse?: "true" | "false";
        /** The Smartlead email warmup status filter. */
        emailWarmupStatus?: "ACTIVE" | "INACTIVE";
        /** A boolean query value represented as a string. */
        isSmtpSuccess?: "true" | "false";
        /** A boolean query value represented as a string. */
        isWarmupBlocked?: "true" | "false";
        /** The Smartlead email service provider filter. */
        esp?: "GMAIL" | "OUTLOOK" | "SMTP";
        /**
         * Filter email accounts by username with partial matching.
         * @minLength 1
         */
        username?: string;
        /**
         * Only return email accounts for this Smartlead client.
         * @minimum 1
         */
        client_id?: number;
        /** A boolean query value represented as a string. */
        fetch_campaigns?: "true" | "false";
      };
      output: {
        /** The Smartlead email accounts returned by the API. */
        email_accounts: Array<{
          /** The Smartlead email account identifier. */
          id: number | null;
          /** The display name used for outgoing emails. */
          from_name: string | null;
          /** The sending email address. */
          from_email: string | null;
          /** The email account username. */
          username: string | null;
          /** The email account type returned by Smartlead. */
          type: string | null;
          /** The associated client identifier when present. */
          client_id: number | null;
          /** The number of campaigns using this account. */
          campaign_count: number | null;
          /** Whether SMTP connectivity is successful. */
          is_smtp_success: boolean | null;
          /** The warmup details returned by Smartlead. */
          warmup_details: Record<string, unknown> | null;
          /** The raw email account object returned by Smartlead. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw response returned by Smartlead. */
        raw: unknown;
      };
    };
  }
}
