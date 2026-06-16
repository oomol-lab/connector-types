import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Count unread Beamer posts for one end-user context. */
    "beamer.count_unread_posts": {
      input: {
        /**
         * The end-user identifier used together with filterByUserId.
         * @minLength 1
         */
        userId?: string;
        /** Whether to include single-user posts that match the provided userId. */
        filterByUserId?: boolean;
      };
      output: {
        /** The number of unread posts. */
        count: number;
      };
    };
    /** Create a new Beamer changelog post with one or more translations. */
    "beamer.create_post": {
      input: {
        /**
         * The translated post titles in Beamer order.
         * @minItems 1
         */
        title: Array<string>;
        /**
         * The translated post content values in the same order as the titles.
         * @minItems 1
         */
        content: Array<string>;
        /**
         * The category to assign to the new post.
         * @minLength 1
         */
        category?: string;
        /** Whether to publish the post immediately. */
        publish?: boolean;
        /** Whether the post should start archived. */
        archive?: boolean;
        /** Whether the post should be pinned to the top of the feed. */
        pinned?: boolean;
        /** Whether the post should appear in the embedded widget. */
        showInWidget?: boolean;
        /** Whether the post should appear in the standalone feed. */
        showInStandalone?: boolean;
        /** The boosted announcement treatment to apply to the post. */
        boostedAnnouncement?: "top-bar" | "popup" | "snippet" | "tooltip";
        /** The translated CTA URLs in Beamer order. */
        linkUrl?: Array<string>;
        /** The translated CTA labels in Beamer order. */
        linkText?: Array<string>;
        /** Whether links should open in a new tab or window. */
        linksInNewWindow?: boolean;
        /**
         * An ISO-8601 date-time string accepted by the Beamer API.
         * @minLength 1
         * @format date-time
         */
        date?: string;
        /**
         * An ISO-8601 date-time string accepted by the Beamer API.
         * @minLength 1
         * @format date-time
         */
        dueDate?: string;
        /** The translated language codes in Beamer order. */
        language?: Array<string>;
        /**
         * The segmentation filter string for this post.
         * @minLength 1
         */
        filter?: string;
        /**
         * The single-user filter identifier or semicolon-separated identifiers for this post.
         * @minLength 1
         */
        filterUserId?: string;
        /**
         * The URL targeting filter string for this post.
         * @minLength 1
         */
        filterUrl?: string;
        /** Whether feedback should be enabled for the post. */
        enableFeedback?: boolean;
        /** Whether reactions should be enabled for the post. */
        enableReactions?: boolean;
        /** Whether social sharing should be enabled for the post. */
        enableSocialShare?: boolean;
        /** Whether the Beamer sidebar should auto-open for recipients. */
        autoOpen?: boolean;
        /** Whether a web push notification should be sent for the post. */
        sendPushNotification?: boolean;
        /**
         * The email of the Beamer account user creating this post.
         * @minLength 1
         */
        userEmail?: string;
        /** Whether a boosted top-bar announcement should stay fixed on screen. */
        fixedBoostedAnnouncement?: boolean;
      };
      output: {
        /** One Beamer changelog post returned by the API. */
        post: {
          /** The Beamer post identifier. */
          id: string;
          /** The post publication date in ISO-8601 format. */
          date?: string;
          /** The post expiration date in ISO-8601 format. */
          dueDate?: string;
          /** Whether the post is published. */
          published?: boolean;
          /** Whether the post is pinned. */
          pinned?: boolean;
          /** Whether the post appears in the embedded widget. */
          showInWidget?: boolean;
          /** Whether the post appears in the standalone feed. */
          showInStandalone?: boolean;
          /** The post category identifier. */
          category?: string;
          /** The boosted announcement treatment applied to the post. */
          boostedAnnouncement?: string;
          /** The translated content blocks available for this post. */
          translations?: Array<{
            /** The translated post title. */
            title?: string;
            /** The translated post content in plain text. */
            content?: string;
            /** The translated post content in HTML format. */
            contentHtml?: string;
            /** The language code for this translation. */
            language?: string;
            /** The translated category label when one exists. */
            category?: string;
            /** The CTA URL for this translation when one exists. */
            linkUrl?: string;
            /** The CTA label for this translation when one exists. */
            linkText?: string;
            /** The image URLs embedded in this translation. */
            images?: Array<string>;
          }>;
          /** The segmentation filter string applied to the post. */
          filter?: string;
          /** The URL targeting filter applied to the post. */
          filterUrl?: string;
          /** Whether the post auto-opens the sidebar for recipients. */
          autoOpen?: boolean;
          /** The last edition date in ISO-8601 format. */
          editionDate?: string;
          /** Whether feedback is enabled for the post. */
          feedbackEnabled?: boolean;
          /** Whether reactions are enabled for the post. */
          reactionsEnabled?: boolean;
          /** The total view count for the post. */
          views?: number;
          /** The unique view count for the post. */
          uniqueViews?: number;
          /** The tracked click count for the post. */
          clicks?: number;
          /** The feedback count for the post. */
          feedbacks?: number;
          /** The positive reaction count for the post. */
          positiveReactions?: number;
          /** The neutral reaction count for the post. */
          neutralReactions?: number;
          /** The negative reaction count for the post. */
          negativeReactions?: number;
        };
      };
    };
    /** Retrieve the standalone Beamer feed URL with optional language and segmentation filters. */
    "beamer.get_feed_url": {
      input: {
        /**
         * A two-letter ISO-639 language code used by Beamer for feed localization.
         * @minLength 2
         * @maxLength 2
         */
        language?: string;
        /** Whether URL segmentation should be applied to the feed URL. */
        filterByUrl?: boolean;
        /**
         * An optional segmentation filter string to apply.
         * @minLength 1
         */
        filter?: string;
      };
      output: {
        /** The standalone Beamer feed URL. */
        feedUrl: string;
      };
    };
    /** List existing Beamer posts with optional changelog, audience, and analytics filters. */
    "beamer.list_posts": {
      input: {
        /**
         * Retrieve posts with a matching segmentation filter.
         * @minLength 1
         */
        filter?: string;
        /**
         * Only retrieve posts that match this segmentation filter.
         * @minLength 1
         */
        forceFilter?: string;
        /**
         * Retrieve posts with a matching segmentation URL.
         * @minLength 1
         */
        filterUrl?: string;
        /**
         * An ISO-8601 date-time string accepted by the Beamer API.
         * @minLength 1
         * @format date-time
         */
        dateFrom?: string;
        /**
         * An ISO-8601 date-time string accepted by the Beamer API.
         * @minLength 1
         * @format date-time
         */
        dateTo?: string;
        /**
         * A two-letter ISO-639 language code used by Beamer for localized content.
         * @minLength 2
         * @maxLength 2
         */
        language?: string;
        /**
         * Retrieve posts for a specific category.
         * @minLength 1
         */
        category?: string;
        /** Whether to retrieve only published or only draft posts. */
        published?: boolean;
        /** Whether to retrieve only archived or only non-archived posts. */
        archived?: boolean;
        /** Whether to retrieve only expired or only non-expired posts. */
        expired?: boolean;
        /** Whether to include single-user posts that match the provided userId. */
        filterByUserId?: boolean;
        /**
         * The end user's first name used for analytics attribution.
         * @minLength 1
         */
        userFirstName?: string;
        /**
         * The end user's last name used for analytics attribution.
         * @minLength 1
         */
        userLastName?: string;
        /**
         * The end user's email used for analytics attribution.
         * @minLength 1
         */
        userEmail?: string;
        /**
         * The end-user identifier used for analytics attribution.
         * @minLength 1
         */
        userId?: string;
        /** Whether Beamer should rewrite links into tracked URLs. */
        traceableLinks?: boolean;
        /** Whether backend request IP, browser, OS, and geolocation details should be ignored. */
        ignoreRequestDetails?: boolean;
        /** Whether fetching these posts should save views in Beamer analytics. */
        saveViews?: boolean;
        /**
         * The maximum number of posts to return.
         * @minimum 1
         * @maximum 10
         */
        maxResults?: number;
        /**
         * The results page to retrieve.
         * @minimum 1
         */
        page?: number;
        /** Whether Beamer should ignore segmentation filters when returning posts. */
        ignoreFilters?: boolean;
      };
      output: {
        /** The Beamer posts that matched the request. */
        posts: Array<{
          /** The Beamer post identifier. */
          id: string;
          /** The post publication date in ISO-8601 format. */
          date?: string;
          /** The post expiration date in ISO-8601 format. */
          dueDate?: string;
          /** Whether the post is published. */
          published?: boolean;
          /** Whether the post is pinned. */
          pinned?: boolean;
          /** Whether the post appears in the embedded widget. */
          showInWidget?: boolean;
          /** Whether the post appears in the standalone feed. */
          showInStandalone?: boolean;
          /** The post category identifier. */
          category?: string;
          /** The boosted announcement treatment applied to the post. */
          boostedAnnouncement?: string;
          /** The translated content blocks available for this post. */
          translations?: Array<{
            /** The translated post title. */
            title?: string;
            /** The translated post content in plain text. */
            content?: string;
            /** The translated post content in HTML format. */
            contentHtml?: string;
            /** The language code for this translation. */
            language?: string;
            /** The translated category label when one exists. */
            category?: string;
            /** The CTA URL for this translation when one exists. */
            linkUrl?: string;
            /** The CTA label for this translation when one exists. */
            linkText?: string;
            /** The image URLs embedded in this translation. */
            images?: Array<string>;
          }>;
          /** The segmentation filter string applied to the post. */
          filter?: string;
          /** The URL targeting filter applied to the post. */
          filterUrl?: string;
          /** Whether the post auto-opens the sidebar for recipients. */
          autoOpen?: boolean;
          /** The last edition date in ISO-8601 format. */
          editionDate?: string;
          /** Whether feedback is enabled for the post. */
          feedbackEnabled?: boolean;
          /** Whether reactions are enabled for the post. */
          reactionsEnabled?: boolean;
          /** The total view count for the post. */
          views?: number;
          /** The unique view count for the post. */
          uniqueViews?: number;
          /** The tracked click count for the post. */
          clicks?: number;
          /** The feedback count for the post. */
          feedbacks?: number;
          /** The positive reaction count for the post. */
          positiveReactions?: number;
          /** The neutral reaction count for the post. */
          neutralReactions?: number;
          /** The negative reaction count for the post. */
          negativeReactions?: number;
        }>;
      };
    };
  }
}
