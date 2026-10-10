import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get overview lead statistics for a KickoffLabs campaign. */
    "kickofflabs.get_campaign_stats": {
      input: {
        /**
         * The KickoffLabs campaign ID returned by list_campaigns.
         * @minimum 1
         */
        campaignId: number;
      };
      output: {
        /** The campaign lead counts. */
        leads?: {
          /** The total number of leads. */
          total?: number;
          /** The total number of leads including jump-start settings. */
          total_with_jumpstart?: number;
          /** The number of leads removed from the waitlist. */
          removed_from_waitlist?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List the scoring action definitions configured for a KickoffLabs campaign. */
    "kickofflabs.list_campaign_actions": {
      input: {
        /**
         * The KickoffLabs campaign ID returned by list_campaigns.
         * @minimum 1
         */
        campaignId: number;
      };
      output: {
        /** The configured scoring actions. */
        actions: Array<{
          /** The campaign action ID, used as laid when marking a lead action complete. */
          id?: number;
          /** The action label. */
          text?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the KickoffLabs campaigns available to the connected API key. */
    "kickofflabs.list_campaigns": {
      input: Record<string, never>;
      output: {
        /** The available campaigns. */
        campaigns: Array<{
          /** The campaign ID. */
          id?: number;
          /** The campaign name. */
          name?: string;
          /** The lead count including jump-start settings. */
          lead_count?: number;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
