import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a prospect to a Sendspark dynamic video campaign. */
    "sendspark.add_prospect": {
      input: {
        /**
         * The Sendspark workspace identifier.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The Sendspark dynamic video campaign identifier.
         * @minLength 1
         */
        dynamicId: string;
        /** Whether to acknowledge and authorize charges associated with processing this prospect. */
        processAndAuthorizeCharge: boolean;
        /** Prospect fields used to create a Sendspark dynamic video. */
        prospect: {
          /**
           * The full name of the prospect.
           * @minLength 1
           */
          contactName: string;
          /**
           * The email address of the prospect.
           * @format email
           */
          contactEmail: string;
          /**
           * The background image URL to use in the personalized video.
           * @format uri
           */
          backgroundUrl?: string;
          /**
           * The company name of the prospect.
           * @minLength 1
           */
          company?: string;
          /**
           * The job title of the prospect.
           * @minLength 1
           */
          jobTitle?: string;
        };
        /** Duplicate handling settings used when adding a Sendspark prospect. */
        prospectDepurationConfig?: {
          /** How Sendspark should resolve duplicate prospect payload entries. */
          payloadDepurationStrategy: "keep-first-valid" | "keep-last-valid";
          /** Whether Sendspark should create the prospect despite duplicates. */
          forceCreation?: boolean;
        };
      };
      output: {
        /** The prospect records returned by Sendspark. */
        prospects: Array<{
          /**
           * The prospect email address.
           * @format email
           */
          contactEmail?: string;
          /** The prospect full name when returned by Sendspark. */
          contactName?: string;
          /** The background image URL used for the dynamic video. */
          backgroundUrl?: string;
          /** The current prospect processing status. */
          status?: string;
          /** Whether Sendspark considers the prospect data valid. */
          valid?: boolean;
          /** The timestamp when the prospect was created. */
          createdAt?: string;
          /** The timestamp when the prospect was last updated. */
          updatedAt?: string;
          /** The prospect identifier returned by Sendspark. */
          id?: string;
          /** The internal prospect identifier returned by Sendspark. */
          _id?: string;
          /** The public share URL for the completed video. */
          shareUrl?: string;
          /** The embeddable URL for the completed video. */
          embedUrl?: string;
          /** The prospect company name. */
          company?: string;
          /** The prospect job title. */
          jobTitle?: string;
          [key: string]: unknown;
        }>;
        /** Additional upstream fields returned by Sendspark. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Sendspark dynamic video campaign in a workspace. */
    "sendspark.create_dynamic_campaign": {
      input: {
        /**
         * The Sendspark workspace identifier.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The unique campaign name within the workspace.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A Sendspark dynamic video campaign returned by the API. */
        campaign: {
          /** The unique campaign record identifier. */
          _id?: string;
          /** The dynamic video campaign name. */
          name?: string;
          /** The workspace identifier associated with the campaign. */
          workspace?: string;
          /** The campaign status returned by Sendspark. */
          status?: string;
          /** The timestamp when the campaign was created. */
          createdAt?: string;
          /** The Sendspark campaign ID when returned by the API. */
          campaign_id?: string;
          /** Processing summary counts returned for the campaign. */
          summary?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Additional upstream fields returned by Sendspark. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Sendspark dynamic video campaign by workspace and campaign ID. */
    "sendspark.get_dynamic_campaign": {
      input: {
        /**
         * The Sendspark workspace identifier.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The Sendspark dynamic video campaign identifier.
         * @minLength 1
         */
        dynamicId: string;
      };
      output: {
        /** A Sendspark dynamic video campaign returned by the API. */
        campaign: {
          /** The unique campaign record identifier. */
          _id?: string;
          /** The dynamic video campaign name. */
          name?: string;
          /** The workspace identifier associated with the campaign. */
          workspace?: string;
          /** The campaign status returned by Sendspark. */
          status?: string;
          /** The timestamp when the campaign was created. */
          createdAt?: string;
          /** The Sendspark campaign ID when returned by the API. */
          campaign_id?: string;
          /** Processing summary counts returned for the campaign. */
          summary?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Additional upstream fields returned by Sendspark. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Sendspark prospect data by email for a dynamic campaign, including generated video URLs when available. */
    "sendspark.get_prospect_by_email": {
      input: {
        /**
         * The Sendspark workspace identifier.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * The Sendspark dynamic video campaign identifier.
         * @minLength 1
         */
        dynamicId: string;
        /**
         * The prospect email address to look up.
         * @format email
         */
        email: string;
      };
      output: {
        /** A Sendspark prospect returned by the dynamic campaign API. */
        prospect: {
          /**
           * The prospect email address.
           * @format email
           */
          contactEmail?: string;
          /** The prospect full name when returned by Sendspark. */
          contactName?: string;
          /** The background image URL used for the dynamic video. */
          backgroundUrl?: string;
          /** The current prospect processing status. */
          status?: string;
          /** Whether Sendspark considers the prospect data valid. */
          valid?: boolean;
          /** The timestamp when the prospect was created. */
          createdAt?: string;
          /** The timestamp when the prospect was last updated. */
          updatedAt?: string;
          /** The prospect identifier returned by Sendspark. */
          id?: string;
          /** The internal prospect identifier returned by Sendspark. */
          _id?: string;
          /** The public share URL for the completed video. */
          shareUrl?: string;
          /** The embeddable URL for the completed video. */
          embedUrl?: string;
          /** The prospect company name. */
          company?: string;
          /** The prospect job title. */
          jobTitle?: string;
          [key: string]: unknown;
        };
        /** Additional upstream fields returned by Sendspark. */
        raw: Record<string, unknown>;
      };
    };
    /** List Sendspark dynamic video campaigns in a workspace with optional pagination and search filters. */
    "sendspark.list_dynamic_campaigns": {
      input: {
        /**
         * The Sendspark workspace identifier.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * Number of campaigns per page. Sendspark supports a maximum of 20.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /**
         * The 1-based pagination offset.
         * @minimum 1
         */
        offset?: number;
        /**
         * Search campaigns by campaign name.
         * @minLength 1
         */
        search?: string;
        /**
         * Filter campaigns by creator ID.
         * @minLength 1
         */
        filters?: string;
      };
      output: {
        /** The campaigns returned by Sendspark. */
        campaigns: Array<{
          /** The unique campaign record identifier. */
          _id?: string;
          /** The dynamic video campaign name. */
          name?: string;
          /** The workspace identifier associated with the campaign. */
          workspace?: string;
          /** The campaign status returned by Sendspark. */
          status?: string;
          /** The timestamp when the campaign was created. */
          createdAt?: string;
          /** The Sendspark campaign ID when returned by the API. */
          campaign_id?: string;
          /** Processing summary counts returned for the campaign. */
          summary?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Sendspark. */
        pagination: {
          /** The page size returned by Sendspark. */
          limit?: number | null;
          /** The page offset returned by Sendspark. */
          offset?: number | null;
          /** The total result count returned by Sendspark. */
          total?: number | null;
          /** Additional upstream fields returned by Sendspark. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Pagination links returned by Sendspark. */
        links: {
          /** The next page link or link metadata returned by Sendspark. */
          next?: unknown;
          /** The previous page link or link metadata returned by Sendspark. */
          previous?: unknown;
          [key: string]: unknown;
        };
        /** Additional upstream fields returned by Sendspark. */
        raw: Record<string, unknown>;
      };
    };
  }
}
