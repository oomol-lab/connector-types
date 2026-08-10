import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve all available details for one Woot offer ID. */
    "woot.get_offer": {
      input: {
        /**
         * A Woot offer identifier obtained from a feed response.
         * @format uuid
         */
        offerId: string;
      };
      output: {
        /** A normalized detailed Woot offer. */
        offer: {
          /** The Woot offer identifier, or null when unavailable. */
          id: string | null;
          /** The Woot event identifier, or null when unavailable. */
          eventId: string | null;
          /** The offer title, or null when unavailable. */
          title: string | null;
          /** The full offer title, or null when unavailable. */
          fullTitle: string | null;
          /** The offer subtitle, or null when unavailable. */
          subtitle: string | null;
          /** The offer teaser, or null when unavailable. */
          teaser: string | null;
          /** The offer URL slug, or null when unavailable. */
          slug: string | null;
          /** The public offer URL, or null when unavailable. */
          url: string | null;
          /** The Woot item number, or null when unavailable. */
          win: string | null;
          /** The offer features markup or text, or null when unavailable. */
          features: string | null;
          /** The offer specifications markup or text, or null when unavailable. */
          specs: string | null;
          /** The offer snippet, or null when unavailable. */
          snippet: string | null;
          /** The offer write-up introduction, or null when unavailable. */
          writeUpIntro: string | null;
          /** The offer write-up body, or null when unavailable. */
          writeUpBody: string | null;
          /** The extended warranty information, or null when unavailable. */
          extendedWarranty: string | null;
          /** The per-customer purchase limit, or null when unavailable. */
          purchaseLimit: number | null;
          /** The available quantity limit, or null when unavailable. */
          quantityLimit: number | null;
          /** The approximate remaining inventory percentage, or null when unavailable. */
          percentageRemainingBlurred: number | null;
          /** Whether the offer is sold out, or null when unspecified. */
          isSoldOut: boolean | null;
          /** Whether the offer is part of a Woot-Off, or null when unspecified. */
          isWootOff: boolean | null;
          /** The normalized purchasable items in the offer. */
          items: Array<{
            /** The Woot item identifier, or null when unavailable. */
            id: string | null;
            /** The Amazon Standard Identification Number, or null when unavailable. */
            asin: string | null;
            /** The item title, or null when unavailable. */
            title: string | null;
            /** The Woot item number, or null when unavailable. */
            win: string | null;
            /** The item list price, or null when unavailable. */
            listPrice: number | null;
            /** The item sale price, or null when unavailable. */
            salePrice: number | null;
            /** The normalized item attributes. */
            attributes: Array<{
              /** The attribute name, or null when unavailable. */
              key: string | null;
              /** The attribute value, or null when unavailable. */
              value: string | null;
              /** The raw attribute object returned by Woot. */
              raw: Record<string, unknown>;
              [key: string]: unknown;
            }>;
            /** The normalized item photos. */
            photos: Array<{
              /** The photo URL, or null when unavailable. */
              url: string | null;
              /** The photo caption, or null when unavailable. */
              caption: string | null;
              /** The tags assigned to the photo. */
              tags: Array<string>;
              /** The image height in pixels, or null when unavailable. */
              height: number | null;
              /** The image width in pixels, or null when unavailable. */
              width: number | null;
              /** The raw photo object returned by Woot. */
              raw: Record<string, unknown>;
              [key: string]: unknown;
            }>;
            /** The raw item object returned by Woot. */
            raw: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The normalized offer photos. */
          photos: Array<{
            /** The photo URL, or null when unavailable. */
            url: string | null;
            /** The photo caption, or null when unavailable. */
            caption: string | null;
            /** The tags assigned to the photo. */
            tags: Array<string>;
            /** The image height in pixels, or null when unavailable. */
            height: number | null;
            /** The image width in pixels, or null when unavailable. */
            width: number | null;
            /** The raw photo object returned by Woot. */
            raw: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The normalized shipping methods for the offer. */
          shippingMethods: Array<{
            /** The shipping method name, or null when unavailable. */
            name: string | null;
            /** Whether the shipping method excludes post office boxes, or null when unspecified. */
            excludePOBox: boolean | null;
            /** The state or territory codes excluded from this method. */
            excludedStates: Array<string>;
            /** The postal codes excluded from this method. */
            excludedPostalCodes: Array<string>;
            /** The raw shipping method object returned by Woot. */
            raw: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The raw detailed offer object returned by Woot. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve detailed Woot offers for up to 25 unique offer IDs. */
    "woot.get_offers": {
      input: {
        /**
         * The unique Woot offer identifiers to retrieve.
         * @minItems 1
         * @maxItems 25
         */
        offerIds: Array<string>;
      };
      output: {
        /** The normalized detailed offers. */
        offers: Array<{
          /** The Woot offer identifier, or null when unavailable. */
          id: string | null;
          /** The Woot event identifier, or null when unavailable. */
          eventId: string | null;
          /** The offer title, or null when unavailable. */
          title: string | null;
          /** The full offer title, or null when unavailable. */
          fullTitle: string | null;
          /** The offer subtitle, or null when unavailable. */
          subtitle: string | null;
          /** The offer teaser, or null when unavailable. */
          teaser: string | null;
          /** The offer URL slug, or null when unavailable. */
          slug: string | null;
          /** The public offer URL, or null when unavailable. */
          url: string | null;
          /** The Woot item number, or null when unavailable. */
          win: string | null;
          /** The offer features markup or text, or null when unavailable. */
          features: string | null;
          /** The offer specifications markup or text, or null when unavailable. */
          specs: string | null;
          /** The offer snippet, or null when unavailable. */
          snippet: string | null;
          /** The offer write-up introduction, or null when unavailable. */
          writeUpIntro: string | null;
          /** The offer write-up body, or null when unavailable. */
          writeUpBody: string | null;
          /** The extended warranty information, or null when unavailable. */
          extendedWarranty: string | null;
          /** The per-customer purchase limit, or null when unavailable. */
          purchaseLimit: number | null;
          /** The available quantity limit, or null when unavailable. */
          quantityLimit: number | null;
          /** The approximate remaining inventory percentage, or null when unavailable. */
          percentageRemainingBlurred: number | null;
          /** Whether the offer is sold out, or null when unspecified. */
          isSoldOut: boolean | null;
          /** Whether the offer is part of a Woot-Off, or null when unspecified. */
          isWootOff: boolean | null;
          /** The normalized purchasable items in the offer. */
          items: Array<{
            /** The Woot item identifier, or null when unavailable. */
            id: string | null;
            /** The Amazon Standard Identification Number, or null when unavailable. */
            asin: string | null;
            /** The item title, or null when unavailable. */
            title: string | null;
            /** The Woot item number, or null when unavailable. */
            win: string | null;
            /** The item list price, or null when unavailable. */
            listPrice: number | null;
            /** The item sale price, or null when unavailable. */
            salePrice: number | null;
            /** The normalized item attributes. */
            attributes: Array<{
              /** The attribute name, or null when unavailable. */
              key: string | null;
              /** The attribute value, or null when unavailable. */
              value: string | null;
              /** The raw attribute object returned by Woot. */
              raw: Record<string, unknown>;
              [key: string]: unknown;
            }>;
            /** The normalized item photos. */
            photos: Array<{
              /** The photo URL, or null when unavailable. */
              url: string | null;
              /** The photo caption, or null when unavailable. */
              caption: string | null;
              /** The tags assigned to the photo. */
              tags: Array<string>;
              /** The image height in pixels, or null when unavailable. */
              height: number | null;
              /** The image width in pixels, or null when unavailable. */
              width: number | null;
              /** The raw photo object returned by Woot. */
              raw: Record<string, unknown>;
              [key: string]: unknown;
            }>;
            /** The raw item object returned by Woot. */
            raw: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The normalized offer photos. */
          photos: Array<{
            /** The photo URL, or null when unavailable. */
            url: string | null;
            /** The photo caption, or null when unavailable. */
            caption: string | null;
            /** The tags assigned to the photo. */
            tags: Array<string>;
            /** The image height in pixels, or null when unavailable. */
            height: number | null;
            /** The image width in pixels, or null when unavailable. */
            width: number | null;
            /** The raw photo object returned by Woot. */
            raw: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The normalized shipping methods for the offer. */
          shippingMethods: Array<{
            /** The shipping method name, or null when unavailable. */
            name: string | null;
            /** Whether the shipping method excludes post office boxes, or null when unspecified. */
            excludePOBox: boolean | null;
            /** The state or territory codes excluded from this method. */
            excludedStates: Array<string>;
            /** The postal codes excluded from this method. */
            excludedPostalCodes: Array<string>;
            /** The raw shipping method object returned by Woot. */
            raw: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The raw detailed offer object returned by Woot. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List live, minified Woot offers from a supported category feed, optionally by page. */
    "woot.list_feed": {
      input: {
        /** The Woot category feed to retrieve. */
        feedName: "All" | "Clearance" | "Computers" | "Electronics" | "Featured" | "Home" | "Gourmet" | "Shirts" | "Sports" | "Tools" | "Wootoff";
        /**
         * The one-based result page. Woot returns up to 100 offers per page.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The normalized offers in the requested feed. */
        items: Array<{
          /** The Woot offer identifier, or null when unavailable. */
          offerId: string | null;
          /** The offer title, or null when unavailable. */
          title: string | null;
          /** The offer subtitle, or null when unavailable. */
          subtitle: string | null;
          /** The offer condition, or null when unavailable. */
          condition: string | null;
          /** The Woot categories assigned to the offer. */
          categories: Array<string>;
          /** The primary offer photo URL, or null when unavailable. */
          photo: string | null;
          /** The public offer URL, or null when unavailable. */
          url: string | null;
          /** The Woot forum URL for the offer, or null when unavailable. */
          forumUrl: string | null;
          /** The offer start date and time, or null when unavailable. */
          startDate: string | null;
          /** The offer end date and time, or null when unavailable. */
          endDate: string | null;
          /** A minimum and maximum price range returned by Woot. */
          listPrice: {
            /** The minimum price in the range, or null when unavailable. */
            minimum: number | null;
            /** The maximum price in the range, or null when unavailable. */
            maximum: number | null;
          } | null;
          /** A minimum and maximum price range returned by Woot. */
          salePrice: {
            /** The minimum price in the range, or null when unavailable. */
            minimum: number | null;
            /** The maximum price in the range, or null when unavailable. */
            maximum: number | null;
          } | null;
          /** Whether the offer is sold out, or null when unspecified. */
          isSoldOut: boolean | null;
          /** Whether the offer is part of a Woot-Off, or null when unspecified. */
          isWootOff: boolean | null;
          /** Whether the offer is featured, or null when unspecified. */
          isFeatured: boolean | null;
          /** Whether Amazon fulfills the offer, or null when unspecified. */
          isFulfilledByAmazon: boolean | null;
          /** Whether the offer is available only in the Woot mobile app, or null when unspecified. */
          isAvailableOnMobileAppOnly: boolean | null;
          /** The raw feed item object returned by Woot. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The feed marketing name, or null when unavailable. */
        marketingName: string | null;
        /** The total number of result pages, or null when unavailable. */
        totalPages: number | null;
      };
    };
  }
}
