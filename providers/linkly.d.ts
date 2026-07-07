import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Linkly short link in a workspace. */
    "linkly.create_link": {
      input: {
        /**
         * The Linkly workspace ID.
         * @minLength 1
         */
        workspace_id: string;
        /**
         * The destination URL.
         * @format uri
         */
        url: string;
        /** Custom domain without a trailing slash. */
        domain?: string | null;
        /** Domain ID, used as an alternative to domain. */
        domain_id?: number;
        /** Custom slug, starting with /. */
        slug?: string | null;
        /** Nickname for the link. */
        name?: string | null;
        /** Private note about this link. */
        note?: string | null;
        /** Whether the link is active. */
        enabled?: boolean;
        /** Whether to forward query parameters to the destination. */
        forward_params?: boolean;
        /** UTM source value. */
        utm_source?: string | null;
        /** UTM medium value. */
        utm_medium?: string | null;
        /** UTM campaign value. */
        utm_campaign?: string | null;
        /** UTM term value. */
        utm_term?: string | null;
        /** UTM content value. */
        utm_content?: string | null;
        /**
         * Link expiration date and time.
         * @format date-time
         */
        expiry_datetime?: string | null;
        /**
         * Redirect URL used after expiry.
         * @format uri
         */
        expiry_destination?: string | null;
        /** Expire the link after this many clicks. */
        expiry_clicks?: number | null;
        /** Whether analytics are publicly accessible. */
        public_analytics?: boolean;
        /** Whether to block bot traffic. */
        block_bots?: boolean;
        /** Whether to hide the referrer from the destination. */
        hide_referrer?: boolean;
        /** Whether link cloaking is enabled. */
        cloaking?: boolean;
        /** Google Tag Manager ID. */
        gtm_id?: string | null;
        /** Google Analytics 4 tag ID. */
        ga4_tag_id?: string | null;
        /** Facebook Pixel ID. */
        fb_pixel_id?: string | null;
        /** TikTok Pixel ID. */
        tiktok_pixel_id?: string | null;
        /** Open Graph title. */
        og_title?: string | null;
        /** Open Graph description. */
        og_description?: string | null;
        /**
         * Open Graph image URL.
         * @format uri
         */
        og_image?: string | null;
        /** Custom HTML tags for the document head. */
        head_tags?: string | null;
        /** Custom HTML tags for the document body. */
        body_tags?: string | null;
        /** Words to linkify. */
        linkify_words?: string | null;
        /** URL parameter replacements. */
        replacements?: string | null;
        /** Redirect rules for the link. */
        rules?: Array<{
          /** The rule condition type. */
          what?: string | null;
          /** The value matched by the rule. */
          matches?: string | null;
          /**
           * The destination URL used when the rule matches.
           * @format uri
           */
          url?: string | null;
          /** The percentage assigned to this rule. */
          percentage?: number | null;
        }>;
      };
      output: {
        /** A Linkly link resource. */
        link: {
          /** Link ID. */
          id?: number | null;
          /** Workspace ID. */
          workspace_id?: number | null;
          /** Destination URL. */
          url?: string;
          /** Full shortened URL. */
          full_url?: string;
          /** Short link domain. */
          domain?: string | null;
          /** Short link slug. */
          slug?: string | null;
          /** Link nickname. */
          name?: string | null;
          /** Private note about this link. */
          note?: string | null;
          /** Whether the link is active. */
          enabled?: boolean | null;
          /** Whether the link is deleted. */
          deleted?: boolean | null;
          /** Total number of clicks. */
          clicks_total?: number;
          /** Number of clicks today. */
          clicks_today?: number;
          /** Number of clicks in the last 30 days. */
          clicks_thirty_days?: number;
          /** Recent click sparkline values. */
          sparkline?: Array<number>;
          /** UTM source value. */
          utm_source?: string | null;
          /** UTM medium value. */
          utm_medium?: string | null;
          /** UTM campaign value. */
          utm_campaign?: string | null;
          /** UTM term value. */
          utm_term?: string | null;
          /** UTM content value. */
          utm_content?: string | null;
          /** Whether query parameters are forwarded. */
          forward_params?: boolean | null;
          /** Redirect rules returned by Linkly. */
          rules?: Array<{
            /** The rule condition type. */
            what?: string | null;
            /** The value matched by the rule. */
            matches?: string | null;
            /** The destination URL used when the rule matches. */
            url?: string | null;
            /** The percentage assigned to this rule. */
            percentage?: number | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Linkly short link from a workspace. */
    "linkly.delete_link": {
      input: {
        /**
         * The Linkly workspace ID.
         * @minLength 1
         */
        workspace_id: string;
        /** The Linkly link ID. */
        id: number;
      };
      output: {
        /** Delete result message returned by Linkly. */
        message: string;
      };
    };
    /** Get a Linkly link by ID, optionally scoped to a workspace. */
    "linkly.get_link": {
      input: {
        /** The Linkly link ID. */
        id: number;
        /**
         * The Linkly workspace ID.
         * @minLength 1
         */
        workspace_id?: string;
      };
      output: {
        /** A Linkly link resource. */
        link: {
          /** Link ID. */
          id?: number | null;
          /** Workspace ID. */
          workspace_id?: number | null;
          /** Destination URL. */
          url?: string;
          /** Full shortened URL. */
          full_url?: string;
          /** Short link domain. */
          domain?: string | null;
          /** Short link slug. */
          slug?: string | null;
          /** Link nickname. */
          name?: string | null;
          /** Private note about this link. */
          note?: string | null;
          /** Whether the link is active. */
          enabled?: boolean | null;
          /** Whether the link is deleted. */
          deleted?: boolean | null;
          /** Total number of clicks. */
          clicks_total?: number;
          /** Number of clicks today. */
          clicks_today?: number;
          /** Number of clicks in the last 30 days. */
          clicks_thirty_days?: number;
          /** Recent click sparkline values. */
          sparkline?: Array<number>;
          /** UTM source value. */
          utm_source?: string | null;
          /** UTM medium value. */
          utm_medium?: string | null;
          /** UTM campaign value. */
          utm_campaign?: string | null;
          /** UTM term value. */
          utm_term?: string | null;
          /** UTM content value. */
          utm_content?: string | null;
          /** Whether query parameters are forwarded. */
          forward_params?: boolean | null;
          /** Redirect rules returned by Linkly. */
          rules?: Array<{
            /** The rule condition type. */
            what?: string | null;
            /** The value matched by the rule. */
            matches?: string | null;
            /** The destination URL used when the rule matches. */
            url?: string | null;
            /** The percentage assigned to this rule. */
            percentage?: number | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
    };
    /** List links in a Linkly workspace with optional search, filters, and pagination. */
    "linkly.list_links": {
      input: {
        /**
         * The Linkly workspace ID.
         * @minLength 1
         */
        workspace_id: string;
        /**
         * Search query.
         * @minLength 1
         */
        search?: string;
        /** Page number. */
        page?: number;
        /** Number of links to return. */
        page_size?: number;
        /**
         * Field used to sort links.
         * @minLength 1
         */
        sort_by?: string;
        /** Sort direction. */
        sort_dir?: "desc" | "asc";
        /** Exact-match filters for listing Linkly workspace links. */
        filter?: {
          /**
           * Filter links by domain.
           * @minLength 1
           */
          domain?: string;
          /**
           * Filter links by slug.
           * @minLength 1
           */
          slug?: string;
          /**
           * Filter links by UTM campaign.
           * @minLength 1
           */
          utm_campaign?: string;
          /**
           * Filter links by UTM content.
           * @minLength 1
           */
          utm_content?: string;
          /**
           * Filter links by UTM medium.
           * @minLength 1
           */
          utm_medium?: string;
          /**
           * Filter links by UTM source.
           * @minLength 1
           */
          utm_source?: string;
          /**
           * Filter links by UTM term.
           * @minLength 1
           */
          utm_term?: string;
        };
      };
      output: {
        /** Links returned by Linkly. */
        links: Array<{
          /** Link ID. */
          id?: number | null;
          /** Workspace ID. */
          workspace_id?: number | null;
          /** Destination URL. */
          url?: string;
          /** Full shortened URL. */
          full_url?: string;
          /** Short link domain. */
          domain?: string | null;
          /** Short link slug. */
          slug?: string | null;
          /** Link nickname. */
          name?: string | null;
          /** Private note about this link. */
          note?: string | null;
          /** Whether the link is active. */
          enabled?: boolean | null;
          /** Whether the link is deleted. */
          deleted?: boolean | null;
          /** Total number of clicks. */
          clicks_total?: number;
          /** Number of clicks today. */
          clicks_today?: number;
          /** Number of clicks in the last 30 days. */
          clicks_thirty_days?: number;
          /** Recent click sparkline values. */
          sparkline?: Array<number>;
          /** UTM source value. */
          utm_source?: string | null;
          /** UTM medium value. */
          utm_medium?: string | null;
          /** UTM campaign value. */
          utm_campaign?: string | null;
          /** UTM term value. */
          utm_term?: string | null;
          /** UTM content value. */
          utm_content?: string | null;
          /** Whether query parameters are forwarded. */
          forward_params?: boolean | null;
          /** Redirect rules returned by Linkly. */
          rules?: Array<{
            /** The rule condition type. */
            what?: string | null;
            /** The value matched by the rule. */
            matches?: string | null;
            /** The destination URL used when the rule matches. */
            url?: string | null;
            /** The percentage assigned to this rule. */
            percentage?: number | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page_number?: number;
        /** Current page size. */
        page_size?: number;
        /** Number of entries matching the query. */
        total_entries?: number;
        /** Total number of pages. */
        total_pages?: number;
        /** Total number of rows. */
        total_rows?: number;
        /** Total number of links in the workspace. */
        workspace_link_count?: number;
      };
    };
    /** List Linkly workspaces available to the authenticated API key. */
    "linkly.list_workspaces": {
      input: Record<string, never>;
      output: {
        /** Workspaces returned by Linkly. */
        workspaces: Array<{
          /** Workspace ID. */
          id: number;
          /** Workspace name. */
          name: string;
        }>;
      };
    };
    /** Update a Linkly short link in a workspace. */
    "linkly.update_link": {
      input: {
        /**
         * The Linkly workspace ID.
         * @minLength 1
         */
        workspace_id: string;
        /** The Linkly link ID. */
        id: number;
        /**
         * The destination URL.
         * @format uri
         */
        url?: string;
        /** Custom domain without a trailing slash. */
        domain?: string | null;
        /** Domain ID, used as an alternative to domain. */
        domain_id?: number;
        /** Custom slug, starting with /. */
        slug?: string | null;
        /** Nickname for the link. */
        name?: string | null;
        /** Private note about this link. */
        note?: string | null;
        /** Whether the link is active. */
        enabled?: boolean;
        /** Whether to forward query parameters to the destination. */
        forward_params?: boolean;
        /** UTM source value. */
        utm_source?: string | null;
        /** UTM medium value. */
        utm_medium?: string | null;
        /** UTM campaign value. */
        utm_campaign?: string | null;
        /** UTM term value. */
        utm_term?: string | null;
        /** UTM content value. */
        utm_content?: string | null;
        /**
         * Link expiration date and time.
         * @format date-time
         */
        expiry_datetime?: string | null;
        /**
         * Redirect URL used after expiry.
         * @format uri
         */
        expiry_destination?: string | null;
        /** Expire the link after this many clicks. */
        expiry_clicks?: number | null;
        /** Whether analytics are publicly accessible. */
        public_analytics?: boolean;
        /** Whether to block bot traffic. */
        block_bots?: boolean;
        /** Whether to hide the referrer from the destination. */
        hide_referrer?: boolean;
        /** Whether link cloaking is enabled. */
        cloaking?: boolean;
        /** Google Tag Manager ID. */
        gtm_id?: string | null;
        /** Google Analytics 4 tag ID. */
        ga4_tag_id?: string | null;
        /** Facebook Pixel ID. */
        fb_pixel_id?: string | null;
        /** TikTok Pixel ID. */
        tiktok_pixel_id?: string | null;
        /** Open Graph title. */
        og_title?: string | null;
        /** Open Graph description. */
        og_description?: string | null;
        /**
         * Open Graph image URL.
         * @format uri
         */
        og_image?: string | null;
        /** Custom HTML tags for the document head. */
        head_tags?: string | null;
        /** Custom HTML tags for the document body. */
        body_tags?: string | null;
        /** Words to linkify. */
        linkify_words?: string | null;
        /** URL parameter replacements. */
        replacements?: string | null;
        /** Redirect rules for the link. */
        rules?: Array<{
          /** The rule condition type. */
          what?: string | null;
          /** The value matched by the rule. */
          matches?: string | null;
          /**
           * The destination URL used when the rule matches.
           * @format uri
           */
          url?: string | null;
          /** The percentage assigned to this rule. */
          percentage?: number | null;
        }>;
      };
      output: {
        /** A Linkly link resource. */
        link: {
          /** Link ID. */
          id?: number | null;
          /** Workspace ID. */
          workspace_id?: number | null;
          /** Destination URL. */
          url?: string;
          /** Full shortened URL. */
          full_url?: string;
          /** Short link domain. */
          domain?: string | null;
          /** Short link slug. */
          slug?: string | null;
          /** Link nickname. */
          name?: string | null;
          /** Private note about this link. */
          note?: string | null;
          /** Whether the link is active. */
          enabled?: boolean | null;
          /** Whether the link is deleted. */
          deleted?: boolean | null;
          /** Total number of clicks. */
          clicks_total?: number;
          /** Number of clicks today. */
          clicks_today?: number;
          /** Number of clicks in the last 30 days. */
          clicks_thirty_days?: number;
          /** Recent click sparkline values. */
          sparkline?: Array<number>;
          /** UTM source value. */
          utm_source?: string | null;
          /** UTM medium value. */
          utm_medium?: string | null;
          /** UTM campaign value. */
          utm_campaign?: string | null;
          /** UTM term value. */
          utm_term?: string | null;
          /** UTM content value. */
          utm_content?: string | null;
          /** Whether query parameters are forwarded. */
          forward_params?: boolean | null;
          /** Redirect rules returned by Linkly. */
          rules?: Array<{
            /** The rule condition type. */
            what?: string | null;
            /** The value matched by the rule. */
            matches?: string | null;
            /** The destination URL used when the rule matches. */
            url?: string | null;
            /** The percentage assigned to this rule. */
            percentage?: number | null;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
