import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add existing GenPage leads to an audience. */
    "genpage.add_audience_leads": {
      input: {
        /** The GenPage workspace ID. */
        workspace_id: number;
        /** The GenPage audience ID. */
        audience_id: number;
        /**
         * The GenPage lead IDs.
         * @minItems 1
         */
        lead_ids: Array<number>;
      };
      output: {
        /** The object returned by GenPage. */
        result: Record<string, unknown>;
      };
    };
    /** Create a named audience in a GenPage workspace. */
    "genpage.create_audience": {
      input: {
        /** The GenPage workspace ID. */
        workspace_id: number;
        /**
         * The audience name.
         * @minLength 1
         */
        name: string;
        /** An optional note describing the audience. */
        description?: string;
        /** An optional dashboard color in hexadecimal notation. */
        color?: string;
        /**
         * The GenPage lead IDs.
         * @minItems 1
         */
        lead_ids?: Array<number>;
      };
      output: {
        /** The object returned by GenPage. */
        result: Record<string, unknown>;
      };
    };
    /** Create an empty GenPage campaign for a workspace. */
    "genpage.create_campaign": {
      input: {
        /** The GenPage workspace ID. */
        workspace_id: number;
        /**
         * The campaign name.
         * @minLength 1
         */
        name?: string;
        /** The branding ID to apply from the GenPage dashboard. */
        branding_id?: number;
        /**
         * The prompt used to generate a name when name is omitted.
         * @minLength 1
         */
        prompt?: string;
      };
      output: {
        /** The object returned by GenPage. */
        result: Record<string, unknown>;
      };
    };
    /** Delete a GenPage audience while keeping all leads in the workspace. */
    "genpage.delete_audience": {
      input: {
        /** The GenPage workspace ID. */
        workspace_id: number;
        /** The GenPage audience ID. */
        audience_id: number;
      };
      output: {
        /** The object returned by GenPage. */
        result: Record<string, unknown>;
      };
    };
    /** Get visit and click performance metrics for GenPage campaigns. */
    "genpage.get_campaign_analytics": {
      input: {
        /** The GenPage workspace ID. */
        workspace_id: number;
        /**
         * The campaign IDs to include, or omit to include every campaign.
         * @minItems 1
         */
        campaign_ids?: Array<number>;
      };
      output: {
        /** The object returned by GenPage. */
        result: Record<string, unknown>;
      };
    };
    /** Get the account credit balance and usage for a GenPage workspace. */
    "genpage.get_credit_balance": {
      input: {
        /** The GenPage workspace ID. */
        workspace_id: number;
      };
      output: {
        /** The object returned by GenPage. */
        result: Record<string, unknown>;
      };
    };
    /** Link a GenPage audience to a campaign so its leads receive campaign pages. */
    "genpage.link_audience_to_campaign": {
      input: {
        /** The GenPage workspace ID. */
        workspace_id: number;
        /** The GenPage audience ID. */
        audience_id: number;
        /** The GenPage campaign ID. */
        campaign_id: number;
      };
      output: {
        /** The object returned by GenPage. */
        result: Record<string, unknown>;
      };
    };
    /** List audiences in a GenPage workspace. */
    "genpage.list_audiences": {
      input: {
        /** The GenPage workspace ID. */
        workspace_id: number;
      };
      output: {
        /** The GenPage audiences. */
        audiences: Array<Record<string, unknown>>;
      };
    };
    /** List campaigns in a GenPage workspace. */
    "genpage.list_campaigns": {
      input: {
        /** The GenPage workspace ID. */
        workspace_id: number;
      };
      output: {
        /** The GenPage campaigns. */
        campaigns: Array<Record<string, unknown>>;
      };
    };
    /** List the default and custom lead variables in a GenPage workspace. */
    "genpage.list_workspace_variables": {
      input: {
        /** The GenPage workspace ID. */
        workspace_id: number;
      };
      output: {
        /** The workspace lead variables. */
        variables: Array<Record<string, unknown>>;
      };
    };
    /** List the GenPage workspaces accessible to the API token. */
    "genpage.list_workspaces": {
      input: Record<string, never>;
      output: {
        /** The accessible GenPage workspaces. */
        workspaces: Array<Record<string, unknown>>;
      };
    };
    /** Remove leads from a GenPage audience without deleting the leads. */
    "genpage.remove_audience_leads": {
      input: {
        /** The GenPage workspace ID. */
        workspace_id: number;
        /** The GenPage audience ID. */
        audience_id: number;
        /**
         * The GenPage lead IDs.
         * @minItems 1
         */
        lead_ids: Array<number>;
      };
      output: {
        /** The object returned by GenPage. */
        result: Record<string, unknown>;
      };
    };
    /** Unlink a GenPage audience from a campaign without deleting leads or pages. */
    "genpage.unlink_audience_from_campaign": {
      input: {
        /** The GenPage workspace ID. */
        workspace_id: number;
        /** The GenPage audience ID. */
        audience_id: number;
        /** The GenPage campaign ID. */
        campaign_id: number;
      };
      output: {
        /** The object returned by GenPage. */
        result: Record<string, unknown>;
      };
    };
  }
}
