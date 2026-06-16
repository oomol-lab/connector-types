import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a single BoxHero inventory item by item identifier. */
    "boxhero.get_item": {
      input: {
        /**
         * The BoxHero item identifier.
         * @minimum 0
         */
        item_id: number;
        /**
         * The location identifiers used to calculate quantity.
         * @minItems 1
         */
        location_ids?: Array<number>;
      };
      output: {
        /** A BoxHero item summary. */
        item: {
          /**
           * The unique identifier of the BoxHero item.
           * @minimum 0
           */
          id: number;
          /** The BoxHero item name. */
          name: string;
          /** The BoxHero item SKU. */
          sku: string;
          /** The barcode assigned to the BoxHero item. */
          barcode: string;
          /** The URL of the BoxHero item photo. */
          photo_url: string | null;
          /** The attributes assigned to the BoxHero item. */
          attrs?: Array<{
            /**
             * The unique identifier of the item attribute specification.
             * @minimum 0
             */
            id: number;
            /** The BoxHero attribute type assigned to the item attribute. */
            type: "text" | "date" | "number" | "barcode";
            /** The BoxHero item attribute name. */
            name: string;
            /** The item attribute value. */
            value: string | number;
          }>;
          /** The BoxHero item purchase cost. */
          cost?: string;
          /** The BoxHero item sale price. */
          price?: string;
          /** The total BoxHero item quantity. */
          quantity: number;
          /** The BoxHero item quantity for each requested location. */
          quantities?: Array<{
            /**
             * The unique identifier of the location.
             * @minimum 0
             */
            location_id: number;
            /** The item quantity for the specified location. */
            quantity: number;
          }>;
        };
      };
    };
    /** Get the linked BoxHero team information and team mode. */
    "boxhero.get_team_info": {
      input: Record<string, never>;
      output: {
        /** The linked BoxHero team. */
        item: {
          /**
           * The unique identifier of the BoxHero team.
           * @minimum 0
           */
          id: number;
          /** The BoxHero team name. */
          name: string;
          /** The linked BoxHero team mode. */
          mode: 0 | 1 | 2;
          /** The currency symbol configured for the team. */
          currency_symbol: string | null;
          /** The notes stored for the team. */
          memo: string | null;
        };
      };
    };
    /** List BoxHero inventory items with optional location filters and cursor pagination. */
    "boxhero.list_items": {
      input: {
        /**
         * The item identifiers to filter by.
         * @minItems 1
         */
        item_ids?: Array<number>;
        /**
         * The location identifiers used to calculate quantity.
         * @minItems 1
         */
        location_ids?: Array<number>;
        /**
         * The cursor returned by a previous BoxHero list_items response.
         * @minimum 0
         */
        cursor?: number;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The BoxHero items returned for the current page. */
        items: Array<{
          /**
           * The unique identifier of the BoxHero item.
           * @minimum 0
           */
          id: number;
          /** The BoxHero item name. */
          name: string;
          /** The BoxHero item SKU. */
          sku: string;
          /** The barcode assigned to the BoxHero item. */
          barcode: string;
          /** The URL of the BoxHero item photo. */
          photo_url: string | null;
          /** The attributes assigned to the BoxHero item. */
          attrs?: Array<{
            /**
             * The unique identifier of the item attribute specification.
             * @minimum 0
             */
            id: number;
            /** The BoxHero attribute type assigned to the item attribute. */
            type: "text" | "date" | "number" | "barcode";
            /** The BoxHero item attribute name. */
            name: string;
            /** The item attribute value. */
            value: string | number;
          }>;
          /** The BoxHero item purchase cost. */
          cost?: string;
          /** The BoxHero item sale price. */
          price?: string;
          /** The total BoxHero item quantity. */
          quantity: number;
          /** The BoxHero item quantity for each requested location. */
          quantities?: Array<{
            /**
             * The unique identifier of the location.
             * @minimum 0
             */
            location_id: number;
            /** The item quantity for the specified location. */
            quantity: number;
          }>;
        }>;
        /** The number of BoxHero items in the current response. */
        count: number;
        /** The page size returned by BoxHero. */
        limit?: number;
        /**
         * The cursor for the next page of BoxHero items.
         * @minimum 0
         */
        cursor: number | null;
        /** Whether BoxHero has more items after the current page. */
        has_more: boolean;
      };
    };
    /** List BoxHero locations available to the linked team. */
    "boxhero.list_locations": {
      input: Record<string, never>;
      output: {
        /** The BoxHero locations returned by the request. */
        items: Array<{
          /**
           * The unique identifier of the BoxHero location.
           * @minimum 0
           */
          id: number;
          /** The BoxHero location name. */
          name: string;
          /** The total quantity currently stored at the BoxHero location. */
          quantity: number;
          /** The notes stored for the BoxHero location. */
          memo: string;
        }>;
        /** The number of BoxHero locations in the response. */
        count: number;
      };
    };
  }
}
