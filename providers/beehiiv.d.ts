import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch one Beehiiv post by ID with optional statistics or content expansion. */
    "beehiiv.get_post": {
      input: {
        /**
         * Beehiiv publication ID that owns the post.
         * @minLength 1
         */
        publicationId: string;
        /**
         * Beehiiv post ID to retrieve.
         * @minLength 1
         */
        postId: string;
        /** Post fields to expand in the Beehiiv response. HTML content expansions can make responses large. */
        expand?: Array<"stats" | "free_web_content" | "free_email_content" | "free_rss_content" | "premium_web_content" | "premium_email_content">;
        /** Premium tier display names used to scope expanded post content. */
        premiumTiers?: Array<string>;
      };
      output: {
        /** Beehiiv post object. */
        data: {
          /**
           * Beehiiv post ID.
           * @minLength 1
           */
          id: string;
          /** Post title. */
          title: string;
          /** Post subtitle. */
          subtitle: string | null;
          /** Post author names. */
          authors: Array<string>;
          /** Post creation time as seconds since the Unix epoch. */
          created: number;
          /** Post status. */
          status: "draft" | "confirmed" | "archived";
          /** Post publish time as seconds since the Unix epoch. */
          publish_date: number | null;
          /** Post displayed date as seconds since the Unix epoch. */
          displayed_date: number | null;
          /** Whether the post was split tested. */
          split_tested: boolean;
          /** Email subject line for the post. */
          subject_line: string | null;
          /** Email preview text for the post. */
          preview_text: string | null;
          /** Post slug. */
          slug: string | null;
          /** Post thumbnail URL. */
          thumbnail_url: string | null;
          /** Public web URL for the post. */
          web_url: string | null;
          /** Audience that can access the post. */
          audience: "free" | "premium" | "both";
          /** Platform where the post is published. */
          platform: "web" | "email" | "both";
          /** Content tags associated with the post. */
          content_tags: Array<string>;
          /** Expanded Beehiiv post HTML content. */
          content?: {
            /** Expanded content for free readers. */
            free?: {
              /** Web HTML rendered to a free reader. */
              web?: string;
              /** Email HTML rendered to a free reader. */
              email?: string;
              /** RSS HTML rendered for the post. */
              rss?: string;
              [key: string]: unknown;
            };
            /** Expanded content for premium readers. */
            premium?: {
              /** Web HTML rendered to a premium reader. */
              web?: string;
              /** Email HTML rendered to a premium reader. */
              email?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Expanded post statistics returned by Beehiiv. */
          stats?: Record<string, unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Fetch one Beehiiv publication by ID with optional statistics expansion. */
    "beehiiv.get_publication": {
      input: {
        /**
         * Beehiiv publication ID to retrieve.
         * @minLength 1
         */
        publicationId: string;
        /** Publication fields to expand in the Beehiiv response. */
        expand?: Array<"stats" | "stat_active_subscriptions" | "stat_active_premium_subscriptions" | "stat_active_free_subscriptions" | "stat_average_open_rate" | "stat_average_click_rate" | "stat_total_sent" | "stat_total_unique_opened" | "stat_total_clicked">;
      };
      output: {
        /** Beehiiv publication object. */
        data: {
          /**
           * Beehiiv publication ID.
           * @minLength 1
           */
          id: string;
          /** Publication name. */
          name: string;
          /** Organization name. */
          organization_name: string;
          /** Whether the referral program is enabled. */
          referral_program_enabled: boolean;
          /** Publication creation time as seconds since the Unix epoch. */
          created: number;
          /** Beehiiv publication statistics. */
          stats?: {
            /** Total active free and premium subscriptions. */
            active_subscriptions?: number | boolean;
            /** Total active premium subscriptions. */
            active_premium_subscriptions?: number | boolean;
            /** Total active free subscriptions. */
            active_free_subscriptions?: number | boolean;
            /** Historical average open rate. */
            average_open_rate?: number | boolean;
            /** Historical average click-through rate. */
            average_click_rate?: number | boolean;
            /** Total emails sent. */
            total_sent?: number | boolean;
            /** Total uniquely opened emails. */
            total_unique_opened?: number | boolean;
            /** Total links clicked from emails. */
            total_clicked?: number | boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Fetch one Beehiiv subscription by ID with optional expansions. */
    "beehiiv.get_subscription": {
      input: {
        /**
         * Beehiiv publication ID that owns the subscription.
         * @minLength 1
         */
        publicationId: string;
        /**
         * Beehiiv subscription ID to retrieve.
         * @minLength 1
         */
        subscriptionId: string;
        /** Subscription fields to expand in the Beehiiv response. */
        expand?: Array<"stats" | "custom_fields" | "referrals" | "tags" | "newsletter_lists">;
      };
      output: {
        /** Beehiiv subscription object. */
        data: {
          /**
           * Beehiiv subscription ID.
           * @minLength 1
           */
          id: string;
          /**
           * Subscriber email address.
           * @format email
           */
          email: string;
          /** Beehiiv subscription status. */
          status: string;
          /** Subscription creation time as seconds since the Unix epoch. */
          created: number;
          /** Current subscription tier. */
          subscription_tier: string;
          /** Premium tiers associated with the subscription. */
          subscription_premium_tiers?: Array<{
            /**
             * Beehiiv tier ID.
             * @minLength 1
             */
            id?: string;
            /** Tier name. */
            name?: string;
            /** Tier status. */
            status?: string;
            [key: string]: unknown;
          }>;
          /** Subscription UTM source. */
          utm_source?: string | null;
          /** Subscription UTM medium. */
          utm_medium?: string | null;
          /** Subscription UTM channel. */
          utm_channel?: string | null;
          /** Subscription UTM campaign. */
          utm_campaign?: string | null;
          /** Referring site captured for the subscription. */
          referring_site?: string | null;
          /** Referral code assigned to the subscription. */
          referral_code?: string | null;
          /** Stripe customer ID associated with the subscription. */
          stripe_customer_id?: string | null;
          /** Beehiiv subscription statistics. */
          stats?: {
            /** Total emails sent to the subscriber. */
            emails_received?: number;
            /** Subscriber open rate. */
            open_rate?: number;
            /** Subscriber click-through rate. */
            click_through_rate?: number;
            [key: string]: unknown;
          };
          /** Custom fields set on the subscription. */
          custom_fields?: Array<{
            /** Custom field name. */
            name?: string;
            /** Custom field value type. */
            kind?: string;
            /** Custom field value returned by Beehiiv. */
            value?: unknown;
            [key: string]: unknown;
          }>;
          /** Subscriptions referred by this subscription. */
          referrals?: Array<{
            /**
             * Referred subscription ID.
             * @minLength 1
             */
            id?: string;
            /**
             * Referred subscriber email address.
             * @format email
             */
            email?: string;
            /** Referred subscription status. */
            status?: string;
            [key: string]: unknown;
          }>;
          /** Tags set on the subscription. */
          tags?: Array<string>;
          /** Newsletter list IDs the subscription is actively subscribed to. */
          newsletter_lists?: Array<string>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Beehiiv posts for a publication with documented filters and optional expansions. */
    "beehiiv.list_posts": {
      input: {
        /**
         * Beehiiv publication ID whose posts should be listed.
         * @minLength 1
         */
        publicationId: string;
        /** Post fields to expand in the Beehiiv response. HTML content expansions can make responses large. */
        expand?: Array<"stats" | "free_web_content" | "free_email_content" | "free_rss_content" | "premium_web_content" | "premium_email_content">;
        /** Audience filter for returned posts. */
        audience?: "free" | "premium" | "all";
        /** Platform filter for returned posts. */
        platform?: "web" | "email" | "both" | "all";
        /** Status filter for returned posts. */
        status?: "draft" | "confirmed" | "archived" | "all";
        /** Content tags used to filter returned posts. */
        contentTags?: Array<string>;
        /** Post slugs used to filter returned posts. */
        slugs?: Array<string>;
        /** Author names used to filter returned posts. */
        authors?: Array<string>;
        /** Premium tier display names used to filter returned posts and expanded content. */
        premiumTiers?: Array<string>;
        /**
         * Maximum number of objects to return. Beehiiv documents a range from 1 to 100 and defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Offset-based page number for Beehiiv pagination.
         * @minimum 1
         */
        page?: number;
        /** Field used to sort Beehiiv posts. */
        orderBy?: "created" | "publish_date" | "displayed_date";
        /** Sort direction for the Beehiiv request. */
        direction?: "asc" | "desc";
        /** Filter by whether posts are hidden from the feed. */
        hiddenFromFeed?: "all" | "true" | "false";
      };
      output: {
        /** Posts returned by Beehiiv. */
        data: Array<{
          /**
           * Beehiiv post ID.
           * @minLength 1
           */
          id: string;
          /** Post title. */
          title: string;
          /** Post subtitle. */
          subtitle: string | null;
          /** Post author names. */
          authors: Array<string>;
          /** Post creation time as seconds since the Unix epoch. */
          created: number;
          /** Post status. */
          status: "draft" | "confirmed" | "archived";
          /** Post publish time as seconds since the Unix epoch. */
          publish_date: number | null;
          /** Post displayed date as seconds since the Unix epoch. */
          displayed_date: number | null;
          /** Whether the post was split tested. */
          split_tested: boolean;
          /** Email subject line for the post. */
          subject_line: string | null;
          /** Email preview text for the post. */
          preview_text: string | null;
          /** Post slug. */
          slug: string | null;
          /** Post thumbnail URL. */
          thumbnail_url: string | null;
          /** Public web URL for the post. */
          web_url: string | null;
          /** Audience that can access the post. */
          audience: "free" | "premium" | "both";
          /** Platform where the post is published. */
          platform: "web" | "email" | "both";
          /** Content tags associated with the post. */
          content_tags: Array<string>;
          /** Expanded Beehiiv post HTML content. */
          content?: {
            /** Expanded content for free readers. */
            free?: {
              /** Web HTML rendered to a free reader. */
              web?: string;
              /** Email HTML rendered to a free reader. */
              email?: string;
              /** RSS HTML rendered for the post. */
              rss?: string;
              [key: string]: unknown;
            };
            /** Expanded content for premium readers. */
            premium?: {
              /** Web HTML rendered to a premium reader. */
              web?: string;
              /** Email HTML rendered to a premium reader. */
              email?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Expanded post statistics returned by Beehiiv. */
          stats?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Number of objects requested per page. */
        limit: number;
        /** Current offset pagination page. */
        page: number;
        /** Total number of matching objects. */
        total_results: number;
        /** Total number of offset pagination pages. */
        total_pages: number;
        [key: string]: unknown;
      };
    };
    /** List Beehiiv publications associated with the API key, with optional sorting and expansion. */
    "beehiiv.list_publications": {
      input: {
        /** Publication fields to expand in the Beehiiv response. */
        expand?: Array<"stats" | "stat_active_subscriptions" | "stat_active_premium_subscriptions" | "stat_active_free_subscriptions" | "stat_average_open_rate" | "stat_average_click_rate" | "stat_total_sent" | "stat_total_unique_opened" | "stat_total_clicked">;
        /**
         * Maximum number of objects to return. Beehiiv documents a range from 1 to 100 and defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Offset-based page number for Beehiiv pagination.
         * @minimum 1
         */
        page?: number;
        /** Sort direction for the Beehiiv request. */
        direction?: "asc" | "desc";
        /** Field used to sort Beehiiv publications. */
        orderBy?: "created" | "name";
      };
      output: {
        /** Publications returned by Beehiiv. */
        data: Array<{
          /**
           * Beehiiv publication ID.
           * @minLength 1
           */
          id: string;
          /** Publication name. */
          name: string;
          /** Organization name. */
          organization_name: string;
          /** Whether the referral program is enabled. */
          referral_program_enabled: boolean;
          /** Publication creation time as seconds since the Unix epoch. */
          created: number;
          /** Beehiiv publication statistics. */
          stats?: {
            /** Total active free and premium subscriptions. */
            active_subscriptions?: number | boolean;
            /** Total active premium subscriptions. */
            active_premium_subscriptions?: number | boolean;
            /** Total active free subscriptions. */
            active_free_subscriptions?: number | boolean;
            /** Historical average open rate. */
            average_open_rate?: number | boolean;
            /** Historical average click-through rate. */
            average_click_rate?: number | boolean;
            /** Total emails sent. */
            total_sent?: number | boolean;
            /** Total uniquely opened emails. */
            total_unique_opened?: number | boolean;
            /** Total links clicked from emails. */
            total_clicked?: number | boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Number of objects requested per page. */
        limit: number;
        /** Current offset pagination page. */
        page: number;
        /** Total number of matching objects. */
        total_results: number;
        /** Total number of offset pagination pages. */
        total_pages: number;
        [key: string]: unknown;
      };
    };
    /** List Beehiiv subscriptions for a publication with cursor pagination and documented filters. */
    "beehiiv.list_subscriptions": {
      input: {
        /**
         * Beehiiv publication ID whose subscriptions should be listed.
         * @minLength 1
         */
        publicationId: string;
        /** Subscription fields to expand in the Beehiiv response. */
        expand?: Array<"stats" | "custom_fields" | "referrals" | "tags" | "newsletter_lists">;
        /** Status filter for returned subscriptions. */
        status?: "validating" | "invalid" | "pending" | "active" | "inactive" | "all";
        /** Tier filter for returned subscriptions. */
        tier?: "free" | "premium" | "all";
        /** Premium tier names used to filter returned subscriptions. */
        premiumTiers?: Array<string>;
        /** Premium tier IDs used to filter returned subscriptions. */
        premiumTierIds?: Array<string>;
        /**
         * Maximum number of objects to return. Beehiiv documents a range from 1 to 100 and defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Cursor token for cursor-based pagination.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Offset-based page number for Beehiiv pagination.
         * @minimum 1
         */
        page?: number;
        /**
         * Email address used to find a matching subscription.
         * @format email
         */
        email?: string;
        /** Field used to sort Beehiiv subscriptions. */
        orderBy?: "created";
        /** Sort direction for the Beehiiv request. */
        direction?: "asc" | "desc";
        /**
         * Creation date filter in YYYY/MM/DD format.
         * @pattern ^\d{4}/\d{2}/\d{2}$
         */
        creationDate?: string;
      };
      output: {
        /** Subscriptions returned by Beehiiv. */
        data: Array<{
          /**
           * Beehiiv subscription ID.
           * @minLength 1
           */
          id: string;
          /**
           * Subscriber email address.
           * @format email
           */
          email: string;
          /** Beehiiv subscription status. */
          status: string;
          /** Subscription creation time as seconds since the Unix epoch. */
          created: number;
          /** Current subscription tier. */
          subscription_tier: string;
          /** Premium tiers associated with the subscription. */
          subscription_premium_tiers?: Array<{
            /**
             * Beehiiv tier ID.
             * @minLength 1
             */
            id?: string;
            /** Tier name. */
            name?: string;
            /** Tier status. */
            status?: string;
            [key: string]: unknown;
          }>;
          /** Subscription UTM source. */
          utm_source?: string | null;
          /** Subscription UTM medium. */
          utm_medium?: string | null;
          /** Subscription UTM channel. */
          utm_channel?: string | null;
          /** Subscription UTM campaign. */
          utm_campaign?: string | null;
          /** Referring site captured for the subscription. */
          referring_site?: string | null;
          /** Referral code assigned to the subscription. */
          referral_code?: string | null;
          /** Stripe customer ID associated with the subscription. */
          stripe_customer_id?: string | null;
          /** Beehiiv subscription statistics. */
          stats?: {
            /** Total emails sent to the subscriber. */
            emails_received?: number;
            /** Subscriber open rate. */
            open_rate?: number;
            /** Subscriber click-through rate. */
            click_through_rate?: number;
            [key: string]: unknown;
          };
          /** Custom fields set on the subscription. */
          custom_fields?: Array<{
            /** Custom field name. */
            name?: string;
            /** Custom field value type. */
            kind?: string;
            /** Custom field value returned by Beehiiv. */
            value?: unknown;
            [key: string]: unknown;
          }>;
          /** Subscriptions referred by this subscription. */
          referrals?: Array<{
            /**
             * Referred subscription ID.
             * @minLength 1
             */
            id?: string;
            /**
             * Referred subscriber email address.
             * @format email
             */
            email?: string;
            /** Referred subscription status. */
            status?: string;
            [key: string]: unknown;
          }>;
          /** Tags set on the subscription. */
          tags?: Array<string>;
          /** Newsletter list IDs the subscription is actively subscribed to. */
          newsletter_lists?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Number of objects requested per page. */
        limit: number;
        /** Current offset pagination page when returned by Beehiiv. */
        page: number;
        /** Total number of matching objects when returned by Beehiiv. */
        total_results: number;
        /** Total number of offset pagination pages when returned by Beehiiv. */
        total_pages: number;
        /** Cursor token for the next page of results. */
        next_cursor: string | null;
        [key: string]: unknown;
      };
    };
  }
}
