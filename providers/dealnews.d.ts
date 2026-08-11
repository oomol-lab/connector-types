import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get blog posts from the official DealNews RSS feed. Keep the returned content and referral-coded links unchanged, attribute public displays to DealNews, and do not use the feed in a publicly available browser extension. */
    "dealnews.list_blog_posts": {
      input: Record<string, never>;
      output: {
        /** The attribution required when displaying this content publicly. */
        attribution: string;
        /** The official DealNews RSS URL that was requested. */
        feedUrl: string;
        /** The DealNews RSS channel metadata. */
        feed: {
          /** The original RSS channel title. */
          title?: string;
          /** The original RSS channel link. */
          link?: string;
          /** The original RSS channel description. */
          description?: string;
          /** The original RSS channel language. */
          language?: string;
          /** The original RSS channel copyright notice. */
          copyright?: string;
          /** The original RSS channel publication date. */
          pubDate?: string;
          /** An image from the DealNews RSS feed. */
          image?: {
            /** The original image URL from the feed. */
            url?: string;
            /** The original image title from the feed. */
            title?: string;
            /** The original image link from the feed. */
            link?: string;
            /** The original image height value from the feed. */
            height?: string;
            /** The original image width value from the feed. */
            width?: string;
            /** The original image description from the feed. */
            description?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The original RSS items parsed into JSON objects. */
        items: Array<{
          /** The original item title. */
          title?: string;
          /** The original DealNews link, including its referral code. */
          link?: string;
          /** The original HTML description from the RSS item. */
          description?: string;
          /** The original RSS item GUID. */
          guid?: string;
          /** The original RSS item publication date. */
          pubDate?: string;
          /** The original DealNews retailer value. */
          "dealnews:retailer"?: string;
          /** The original DealNews expiration value. */
          "dealnews:expires"?: string;
          /** The original DealNews deal type. */
          "dealnews:dealType"?: string;
          /** The original DealNews category value. */
          "dealnews:category"?: string;
          /** The original DealNews staff-pick value. */
          "dealnews:staffPick"?: string;
          /** The original DealNews price element. */
          "dealnews:price"?: {
            /** The original price value from the feed. */
            value?: string;
            /** The original price currency from the feed. */
            currency?: string;
            [key: string]: unknown;
          };
          /** The original DealNews media element. */
          "media:content"?: {
            /** The original media URL from the feed. */
            url?: string;
            /** The original media type from the feed. */
            medium?: string;
            /** The original media height value from the feed. */
            height?: string;
            /** The original media width value from the feed. */
            width?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The number of RSS items returned. */
        count: number;
      };
    };
    /** Get deals from an official DealNews category RSS feed. Keep the returned content and referral-coded links unchanged, attribute public displays to DealNews, and do not use the feed in a publicly available browser extension. */
    "dealnews.list_category_deals": {
      input: {
        /**
         * The numeric category ID in a DealNews category URL, such as 142 in /c142/Electronics/.
         * @exclusiveMinimum 0
         */
        categoryId: number;
      };
      output: {
        /** The attribution required when displaying this content publicly. */
        attribution: string;
        /** The official DealNews RSS URL that was requested. */
        feedUrl: string;
        /** The DealNews RSS channel metadata. */
        feed: {
          /** The original RSS channel title. */
          title?: string;
          /** The original RSS channel link. */
          link?: string;
          /** The original RSS channel description. */
          description?: string;
          /** The original RSS channel language. */
          language?: string;
          /** The original RSS channel copyright notice. */
          copyright?: string;
          /** The original RSS channel publication date. */
          pubDate?: string;
          /** An image from the DealNews RSS feed. */
          image?: {
            /** The original image URL from the feed. */
            url?: string;
            /** The original image title from the feed. */
            title?: string;
            /** The original image link from the feed. */
            link?: string;
            /** The original image height value from the feed. */
            height?: string;
            /** The original image width value from the feed. */
            width?: string;
            /** The original image description from the feed. */
            description?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The original RSS items parsed into JSON objects. */
        items: Array<{
          /** The original item title. */
          title?: string;
          /** The original DealNews link, including its referral code. */
          link?: string;
          /** The original HTML description from the RSS item. */
          description?: string;
          /** The original RSS item GUID. */
          guid?: string;
          /** The original RSS item publication date. */
          pubDate?: string;
          /** The original DealNews retailer value. */
          "dealnews:retailer"?: string;
          /** The original DealNews expiration value. */
          "dealnews:expires"?: string;
          /** The original DealNews deal type. */
          "dealnews:dealType"?: string;
          /** The original DealNews category value. */
          "dealnews:category"?: string;
          /** The original DealNews staff-pick value. */
          "dealnews:staffPick"?: string;
          /** The original DealNews price element. */
          "dealnews:price"?: {
            /** The original price value from the feed. */
            value?: string;
            /** The original price currency from the feed. */
            currency?: string;
            [key: string]: unknown;
          };
          /** The original DealNews media element. */
          "media:content"?: {
            /** The original media URL from the feed. */
            url?: string;
            /** The original media type from the feed. */
            medium?: string;
            /** The original media height value from the feed. */
            height?: string;
            /** The original media width value from the feed. */
            width?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The number of RSS items returned. */
        count: number;
      };
    };
    /** Get Editors' Choice deals from the official DealNews RSS feed. Keep the returned content and referral-coded links unchanged, attribute public displays to DealNews, and do not use the feed in a publicly available browser extension. */
    "dealnews.list_editors_choice_deals": {
      input: Record<string, never>;
      output: {
        /** The attribution required when displaying this content publicly. */
        attribution: string;
        /** The official DealNews RSS URL that was requested. */
        feedUrl: string;
        /** The DealNews RSS channel metadata. */
        feed: {
          /** The original RSS channel title. */
          title?: string;
          /** The original RSS channel link. */
          link?: string;
          /** The original RSS channel description. */
          description?: string;
          /** The original RSS channel language. */
          language?: string;
          /** The original RSS channel copyright notice. */
          copyright?: string;
          /** The original RSS channel publication date. */
          pubDate?: string;
          /** An image from the DealNews RSS feed. */
          image?: {
            /** The original image URL from the feed. */
            url?: string;
            /** The original image title from the feed. */
            title?: string;
            /** The original image link from the feed. */
            link?: string;
            /** The original image height value from the feed. */
            height?: string;
            /** The original image width value from the feed. */
            width?: string;
            /** The original image description from the feed. */
            description?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The original RSS items parsed into JSON objects. */
        items: Array<{
          /** The original item title. */
          title?: string;
          /** The original DealNews link, including its referral code. */
          link?: string;
          /** The original HTML description from the RSS item. */
          description?: string;
          /** The original RSS item GUID. */
          guid?: string;
          /** The original RSS item publication date. */
          pubDate?: string;
          /** The original DealNews retailer value. */
          "dealnews:retailer"?: string;
          /** The original DealNews expiration value. */
          "dealnews:expires"?: string;
          /** The original DealNews deal type. */
          "dealnews:dealType"?: string;
          /** The original DealNews category value. */
          "dealnews:category"?: string;
          /** The original DealNews staff-pick value. */
          "dealnews:staffPick"?: string;
          /** The original DealNews price element. */
          "dealnews:price"?: {
            /** The original price value from the feed. */
            value?: string;
            /** The original price currency from the feed. */
            currency?: string;
            [key: string]: unknown;
          };
          /** The original DealNews media element. */
          "media:content"?: {
            /** The original media URL from the feed. */
            url?: string;
            /** The original media type from the feed. */
            medium?: string;
            /** The original media height value from the feed. */
            height?: string;
            /** The original media width value from the feed. */
            width?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The number of RSS items returned. */
        count: number;
      };
    };
    /** Get the most recent deals from the official DealNews RSS feed. Keep the returned content and referral-coded links unchanged, attribute public displays to DealNews, and do not use the feed in a publicly available browser extension. */
    "dealnews.list_latest_deals": {
      input: Record<string, never>;
      output: {
        /** The attribution required when displaying this content publicly. */
        attribution: string;
        /** The official DealNews RSS URL that was requested. */
        feedUrl: string;
        /** The DealNews RSS channel metadata. */
        feed: {
          /** The original RSS channel title. */
          title?: string;
          /** The original RSS channel link. */
          link?: string;
          /** The original RSS channel description. */
          description?: string;
          /** The original RSS channel language. */
          language?: string;
          /** The original RSS channel copyright notice. */
          copyright?: string;
          /** The original RSS channel publication date. */
          pubDate?: string;
          /** An image from the DealNews RSS feed. */
          image?: {
            /** The original image URL from the feed. */
            url?: string;
            /** The original image title from the feed. */
            title?: string;
            /** The original image link from the feed. */
            link?: string;
            /** The original image height value from the feed. */
            height?: string;
            /** The original image width value from the feed. */
            width?: string;
            /** The original image description from the feed. */
            description?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The original RSS items parsed into JSON objects. */
        items: Array<{
          /** The original item title. */
          title?: string;
          /** The original DealNews link, including its referral code. */
          link?: string;
          /** The original HTML description from the RSS item. */
          description?: string;
          /** The original RSS item GUID. */
          guid?: string;
          /** The original RSS item publication date. */
          pubDate?: string;
          /** The original DealNews retailer value. */
          "dealnews:retailer"?: string;
          /** The original DealNews expiration value. */
          "dealnews:expires"?: string;
          /** The original DealNews deal type. */
          "dealnews:dealType"?: string;
          /** The original DealNews category value. */
          "dealnews:category"?: string;
          /** The original DealNews staff-pick value. */
          "dealnews:staffPick"?: string;
          /** The original DealNews price element. */
          "dealnews:price"?: {
            /** The original price value from the feed. */
            value?: string;
            /** The original price currency from the feed. */
            currency?: string;
            [key: string]: unknown;
          };
          /** The original DealNews media element. */
          "media:content"?: {
            /** The original media URL from the feed. */
            url?: string;
            /** The original media type from the feed. */
            medium?: string;
            /** The original media height value from the feed. */
            height?: string;
            /** The original media width value from the feed. */
            width?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The number of RSS items returned. */
        count: number;
      };
    };
    /** Get the most popular deals from the official DealNews RSS feed. Keep the returned content and referral-coded links unchanged, attribute public displays to DealNews, and do not use the feed in a publicly available browser extension. */
    "dealnews.list_popular_deals": {
      input: Record<string, never>;
      output: {
        /** The attribution required when displaying this content publicly. */
        attribution: string;
        /** The official DealNews RSS URL that was requested. */
        feedUrl: string;
        /** The DealNews RSS channel metadata. */
        feed: {
          /** The original RSS channel title. */
          title?: string;
          /** The original RSS channel link. */
          link?: string;
          /** The original RSS channel description. */
          description?: string;
          /** The original RSS channel language. */
          language?: string;
          /** The original RSS channel copyright notice. */
          copyright?: string;
          /** The original RSS channel publication date. */
          pubDate?: string;
          /** An image from the DealNews RSS feed. */
          image?: {
            /** The original image URL from the feed. */
            url?: string;
            /** The original image title from the feed. */
            title?: string;
            /** The original image link from the feed. */
            link?: string;
            /** The original image height value from the feed. */
            height?: string;
            /** The original image width value from the feed. */
            width?: string;
            /** The original image description from the feed. */
            description?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The original RSS items parsed into JSON objects. */
        items: Array<{
          /** The original item title. */
          title?: string;
          /** The original DealNews link, including its referral code. */
          link?: string;
          /** The original HTML description from the RSS item. */
          description?: string;
          /** The original RSS item GUID. */
          guid?: string;
          /** The original RSS item publication date. */
          pubDate?: string;
          /** The original DealNews retailer value. */
          "dealnews:retailer"?: string;
          /** The original DealNews expiration value. */
          "dealnews:expires"?: string;
          /** The original DealNews deal type. */
          "dealnews:dealType"?: string;
          /** The original DealNews category value. */
          "dealnews:category"?: string;
          /** The original DealNews staff-pick value. */
          "dealnews:staffPick"?: string;
          /** The original DealNews price element. */
          "dealnews:price"?: {
            /** The original price value from the feed. */
            value?: string;
            /** The original price currency from the feed. */
            currency?: string;
            [key: string]: unknown;
          };
          /** The original DealNews media element. */
          "media:content"?: {
            /** The original media URL from the feed. */
            url?: string;
            /** The original media type from the feed. */
            medium?: string;
            /** The original media height value from the feed. */
            height?: string;
            /** The original media width value from the feed. */
            width?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The number of RSS items returned. */
        count: number;
      };
    };
  }
}
