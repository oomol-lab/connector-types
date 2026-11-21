import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve insight metrics for the connected Instagram professional account. */
    "instagram.get_account_insights": {
      input: {
        /**
         * The Instagram insight metric names to request.
         * @minItems 1
         * @maxItems 50
         */
        metrics: Array<string>;
        /** The aggregation period requested for the account metrics. */
        period?: "day" | "week" | "days_28" | "month" | "lifetime" | "total_over_range";
        /**
         * The optional Instagram-compatible start time or date for the insight range.
         * @minLength 1
         * @maxLength 64
         */
        since?: string;
        /**
         * The optional Instagram-compatible end time or date for the insight range.
         * @minLength 1
         * @maxLength 64
         */
        until?: string;
      };
      output: {
        /** The account insight metrics returned by Instagram. */
        insights: Array<{
          /** The Graph API insight metric identifier. */
          id: string | null;
          /**
           * The insight metric name.
           * @minLength 1
           */
          name: string;
          /** The aggregation period returned by Instagram. */
          period: string | null;
          /** The human-readable insight metric title. */
          title: string | null;
          /** The human-readable insight metric description. */
          description: string | null;
          /** The time-series or lifetime values returned for this metric. */
          values: Array<Record<string, unknown>>;
          /** The total-value payload when the metric uses total-value aggregation. */
          totalValue: Record<string, unknown> | null;
          /** The raw Instagram insight metric returned by the Graph API. */
          raw: Record<string, unknown>;
        }>;
        /** Normalized Instagram Graph API cursor pagination metadata. */
        paging: {
          /** The cursor for the previous page, or null. */
          before: string | null;
          /** The cursor for the next page, or null. */
          after: string | null;
          /**
           * The next page URL returned by Instagram, or null.
           * @format uri
           */
          next: string | null;
          /**
           * The previous page URL returned by Instagram, or null.
           * @format uri
           */
          previous: string | null;
        };
      };
    };
    /** Retrieve the connected Instagram professional account and its profile metadata. */
    "instagram.get_current_account": {
      input: Record<string, never>;
      output: {
        /** A normalized Instagram professional account. */
        account: {
          /**
           * An Instagram Graph API object identifier.
           * @minLength 1
           * @maxLength 128
           */
          id: string;
          /** The Instagram user ID when returned separately from the object ID. */
          userId: string | null;
          /** The Instagram username. */
          username: string | null;
          /** The Instagram profile display name. */
          name: string | null;
          /** The Instagram professional account type. */
          accountType: string | null;
          /**
           * The Instagram profile picture URL when one is available.
           * @format uri
           */
          profilePictureUrl: string | null;
          /** The number of accounts following this account. */
          followersCount: number | null;
          /** The number of accounts this account follows. */
          followsCount: number | null;
          /** The number of media objects published by this account. */
          mediaCount: number | null;
          /** The raw Instagram account object returned by the Graph API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one media object owned by the connected Instagram professional account. */
    "instagram.get_media": {
      input: {
        /**
         * An Instagram Graph API object identifier.
         * @minLength 1
         * @maxLength 128
         */
        mediaId: string;
      };
      output: {
        /** A normalized Instagram media object. */
        media: {
          /**
           * An Instagram Graph API object identifier.
           * @minLength 1
           * @maxLength 128
           */
          id: string;
          /** The media caption. */
          caption: string | null;
          /** The media type, such as IMAGE, VIDEO, or CAROUSEL_ALBUM. */
          mediaType: string | null;
          /**
           * The temporary media CDN URL when returned by Instagram.
           * @format uri
           */
          mediaUrl: string | null;
          /**
           * The permanent Instagram post URL when returned.
           * @format uri
           */
          permalink: string | null;
          /**
           * The video thumbnail URL when returned.
           * @format uri
           */
          thumbnailUrl: string | null;
          /** The media publication timestamp. */
          timestamp: string | null;
          /** The username that owns the media object. */
          username: string | null;
          /** The raw Instagram media object returned by the Graph API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve insight metrics for one Instagram media object. */
    "instagram.get_media_insights": {
      input: {
        /**
         * An Instagram Graph API object identifier.
         * @minLength 1
         * @maxLength 128
         */
        mediaId: string;
        /**
         * The Instagram insight metric names to request.
         * @minItems 1
         * @maxItems 50
         */
        metrics: Array<string>;
      };
      output: {
        /** The media insight metrics returned by Instagram. */
        insights: Array<{
          /** The Graph API insight metric identifier. */
          id: string | null;
          /**
           * The insight metric name.
           * @minLength 1
           */
          name: string;
          /** The aggregation period returned by Instagram. */
          period: string | null;
          /** The human-readable insight metric title. */
          title: string | null;
          /** The human-readable insight metric description. */
          description: string | null;
          /** The time-series or lifetime values returned for this metric. */
          values: Array<Record<string, unknown>>;
          /** The total-value payload when the metric uses total-value aggregation. */
          totalValue: Record<string, unknown> | null;
          /** The raw Instagram insight metric returned by the Graph API. */
          raw: Record<string, unknown>;
        }>;
        /** Normalized Instagram Graph API cursor pagination metadata. */
        paging: {
          /** The cursor for the previous page, or null. */
          before: string | null;
          /** The cursor for the next page, or null. */
          after: string | null;
          /**
           * The next page URL returned by Instagram, or null.
           * @format uri
           */
          next: string | null;
          /**
           * The previous page URL returned by Instagram, or null.
           * @format uri
           */
          previous: string | null;
        };
      };
    };
    /** List media published by the connected Instagram professional account. */
    "instagram.list_media": {
      input: {
        /**
         * The maximum number of media objects to return on this page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The cursor returned by Instagram for the next page.
         * @minLength 1
         * @maxLength 2048
         */
        after?: string;
        /**
         * The cursor returned by Instagram for the previous page.
         * @minLength 1
         * @maxLength 2048
         */
        before?: string;
      };
      output: {
        /** The Instagram media objects on this page. */
        media: Array<{
          /**
           * An Instagram Graph API object identifier.
           * @minLength 1
           * @maxLength 128
           */
          id: string;
          /** The media caption. */
          caption: string | null;
          /** The media type, such as IMAGE, VIDEO, or CAROUSEL_ALBUM. */
          mediaType: string | null;
          /**
           * The temporary media CDN URL when returned by Instagram.
           * @format uri
           */
          mediaUrl: string | null;
          /**
           * The permanent Instagram post URL when returned.
           * @format uri
           */
          permalink: string | null;
          /**
           * The video thumbnail URL when returned.
           * @format uri
           */
          thumbnailUrl: string | null;
          /** The media publication timestamp. */
          timestamp: string | null;
          /** The username that owns the media object. */
          username: string | null;
          /** The raw Instagram media object returned by the Graph API. */
          raw: Record<string, unknown>;
        }>;
        /** Normalized Instagram Graph API cursor pagination metadata. */
        paging: {
          /** The cursor for the previous page, or null. */
          before: string | null;
          /** The cursor for the next page, or null. */
          after: string | null;
          /**
           * The next page URL returned by Instagram, or null.
           * @format uri
           */
          next: string | null;
          /**
           * The previous page URL returned by Instagram, or null.
           * @format uri
           */
          previous: string | null;
        };
      };
    };
  }
}
