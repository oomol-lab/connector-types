import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch Braze metadata and message details for one campaign. */
    "braze.get_campaign_details": {
      input: {
        /**
         * The Braze campaign API identifier.
         * @minLength 1
         */
        campaignId: string;
        /** Whether Braze should return the post-launch draft version when one exists. */
        postLaunchDraftVersion?: boolean;
        /** Whether Braze should include has_translatable_content fields for messages. */
        includeHasTranslatableContent?: boolean;
      };
      output: {
        /** The Braze response status message. */
        message?: string;
        /** The normalized Braze campaign details response. */
        campaign: {
          /**
           * The Braze campaign API identifier requested by the caller.
           * @minLength 1
           */
          id: string;
          /** The Braze campaign name. */
          name?: string;
          /** The Braze campaign description. */
          description?: string | null;
          /** The timestamp when the campaign was created. */
          createdAt?: string;
          /** The timestamp when the campaign was last updated. */
          updatedAt?: string;
          /** Whether the campaign is archived. */
          archived?: boolean;
          /** Whether the campaign is a draft. */
          draft?: boolean;
          /** Whether the campaign is active. */
          enabled?: boolean;
          /** Whether the campaign has a post-launch draft. */
          hasPostLaunchDraft?: boolean;
          /** The campaign schedule type. */
          scheduleType?: string;
          /** Channels used by the campaign. */
          channels?: Array<string>;
          /** The campaign's first sent timestamp. */
          firstSent?: string | null;
          /** The campaign's last sent timestamp. */
          lastSent?: string | null;
          /** Tag names associated with the campaign. */
          tags?: Array<string>;
          /** Team names associated with the campaign. */
          teams?: Array<string>;
          /** Raw campaign messages keyed by Braze message variation ID. */
          messages?: Record<string, unknown>;
          /** Raw campaign conversion behavior objects. */
          conversionBehaviors?: Array<Record<string, unknown>>;
          /** The raw Braze campaign details response. */
          raw: Record<string, unknown>;
        };
        /** The raw Braze campaign details response. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch Braze metadata, variants, steps, and message details for one Canvas. */
    "braze.get_canvas_details": {
      input: {
        /**
         * The Braze Canvas API identifier.
         * @minLength 1
         */
        canvasId: string;
        /** Whether Braze should return the post-launch draft version when one exists. */
        postLaunchDraftVersion?: boolean;
        /** Whether Braze should include has_translatable_content fields for messages. */
        includeHasTranslatableContent?: boolean;
      };
      output: {
        /** The Braze response status message. */
        message?: string;
        /** The normalized Braze Canvas details response. */
        canvas: {
          /**
           * The Braze Canvas API identifier requested by the caller.
           * @minLength 1
           */
          id: string;
          /** The Braze Canvas name. */
          name?: string;
          /** The Braze Canvas description. */
          description?: string | null;
          /** The timestamp when the Canvas was created. */
          createdAt?: string;
          /** The timestamp when the Canvas was last updated. */
          updatedAt?: string;
          /** Whether the Canvas is archived. */
          archived?: boolean;
          /** Whether the Canvas is a draft. */
          draft?: boolean;
          /** Whether the Canvas is active. */
          enabled?: boolean;
          /** Whether the Canvas has a post-launch draft. */
          hasPostLaunchDraft?: boolean;
          /** The Canvas schedule type. */
          scheduleType?: string;
          /** The Canvas first-entry timestamp. */
          firstEntry?: string | null;
          /** The Canvas last-entry timestamp. */
          lastEntry?: string | null;
          /** Channels used by the Canvas. */
          channels?: Array<string>;
          /** Raw Canvas variant objects. */
          variants?: Array<Record<string, unknown>>;
          /** Tag names associated with the Canvas. */
          tags?: Array<string>;
          /** Team names associated with the Canvas. */
          teams?: Array<string>;
          /** Raw Canvas step objects. */
          steps?: Array<Record<string, unknown>>;
          /** The raw Braze Canvas details response. */
          raw: Record<string, unknown>;
        };
        /** The raw Braze Canvas details response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Braze campaigns with optional archived, sort, page, and last-edited filters. */
    "braze.list_campaigns": {
      input: {
        /**
         * The zero-based Braze page number to return.
         * @minimum 0
         */
        page?: number;
        /** Whether archived campaigns or Canvases should be included. */
        includeArchived?: boolean;
        /** The creation-time sort direction to send to Braze. */
        sortDirection?: "asc" | "desc";
        /**
         * Only return items edited after this time, mapped to Braze last_edit.time[gt]. Use Braze's yyyy-MM-DDTHH:mm:ss-compatible timestamp format.
         * @minLength 1
         */
        lastEditedAfter?: string;
      };
      output: {
        /** The Braze response status message. */
        message?: string;
        /** The campaigns returned by Braze. */
        campaigns: Array<{
          /**
           * The Braze campaign API identifier.
           * @minLength 1
           */
          id: string;
          /** The Braze campaign name. */
          name?: string;
          /** The last edited timestamp returned by Braze. */
          lastEdited?: string;
          /** Whether the campaign is an API campaign. */
          isApiCampaign?: boolean;
          /** Tag names associated with the campaign. */
          tags?: Array<string>;
          /** The raw Braze campaign list item. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Braze campaign list response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Braze Canvases with optional archived, sort, page, and last-edited filters. */
    "braze.list_canvases": {
      input: {
        /**
         * The zero-based Braze page number to return.
         * @minimum 0
         */
        page?: number;
        /** Whether archived campaigns or Canvases should be included. */
        includeArchived?: boolean;
        /** The creation-time sort direction to send to Braze. */
        sortDirection?: "asc" | "desc";
        /**
         * Only return items edited after this time, mapped to Braze last_edit.time[gt]. Use Braze's yyyy-MM-DDTHH:mm:ss-compatible timestamp format.
         * @minLength 1
         */
        lastEditedAfter?: string;
      };
      output: {
        /** The Braze response status message. */
        message?: string;
        /** The Canvases returned by Braze. */
        canvases: Array<{
          /**
           * The Braze Canvas API identifier.
           * @minLength 1
           */
          id: string;
          /** The Braze Canvas name. */
          name?: string;
          /** The last edited timestamp returned by Braze. */
          lastEdited?: string;
          /** Tag names associated with the Canvas. */
          tags?: Array<string>;
          /** The raw Braze Canvas list item. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Braze Canvas list response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
