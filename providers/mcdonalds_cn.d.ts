import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get McDonald's China cities that support restaurant and menu lookup. */
    "mcdonalds_cn.get_cities": {
      input: {
        /** McDonald's China flag value: 0 for no, 1 for yes. */
        getCurrent?: "0" | "1";
      };
      output: {
        /** McDonald's China trace identifier. */
        traceId?: string;
        /** Server datetime. */
        datetime?: string;
        /** Provider status code. */
        code: number;
        /** McDonald's China cities response data. */
        data: {
          /** Available cities. */
          cities?: Array<{
            /** City code. */
            code: string;
            /** City name. */
            name: string;
            /** City center latitude. */
            latitude?: number;
            /** City center longitude. */
            longitude?: number;
            [key: string]: unknown;
          }>;
          /** A McDonald's China city. */
          currentCity?: {
            /** City code. */
            code: string;
            /** City name. */
            name: string;
            /** City center latitude. */
            latitude?: number;
            /** City center longitude. */
            longitude?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the provider request succeeded. */
        success?: boolean;
        /** Provider status message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Get a McDonald's China store menu for an order type, daypart, and sales channel. */
    "mcdonalds_cn.get_menu": {
      input: {
        /**
         * Store code.
         * @minLength 1
         */
        storeCode: string;
        /**
         * Sales channel code.
         * @minLength 1
         */
        channelCode: string;
        /** Order type. */
        orderType: number;
        /** Daypart code. */
        dayPartCode: number;
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        beCode?: string;
        /**
         * Date in yyyyMMdd format. When omitted, McDonald's China defaults to the current day.
         * @pattern ^\d{8}$
         */
        date?: string;
        /**
         * Time in HH:mm format. When omitted, McDonald's China defaults to the current time.
         * @pattern ^\d{2}:\d{2}$
         */
        time?: string;
        /**
         * Group meal flag: 0 for no, 1 for yes.
         * @minimum 0
         * @maximum 1
         */
        isGroupMeal?: number;
      };
      output: {
        /** McDonald's China trace identifier. */
        traceId?: string;
        /** Server datetime. */
        datetime?: string;
        /** Provider status code. */
        code: number;
        /** McDonald's China menu response data. */
        data: {
          /** Menu categories. */
          menu?: Array<{
            /** Menu category code. */
            categoryCode?: string;
            /** Menu category name. */
            categoryName?: string;
            /**
             * Menu category image URL.
             * @format uri
             */
            image?: string;
            /** Products in this category. */
            products?: Array<{
              /** Product code. */
              productCode?: string;
              /** Product name. */
              productName?: string;
              /** Full product name. */
              productLongName?: string;
              /**
               * Product image URL.
               * @format uri
               */
              productImage?: string;
              /** Product type code. */
              productType?: number;
              /** Sale status code. */
              saleStatus?: number;
              /** Maximum purchase quantity. */
              maxPurchaseQuantity?: number;
              /** McDonald's China product price information. */
              priceInfo?: {
                /** Eat-in price text in yuan. */
                eatInPriceText?: string;
                /** Take-out price text in yuan. */
                takeOutPriceText?: string;
                /** Delivery price text in yuan. */
                deliveryPriceText?: string;
                /** Eat-in price in cents. */
                eatInPrice?: number;
                /** Take-out price in cents. */
                takeOutPrice?: number;
                /** Delivery price in cents. */
                deliveryPrice?: number;
                /** Discount price in cents. */
                discountPrice?: number;
                /** Discount price text in yuan. */
                discountPriceText?: string;
                /** Price display style. */
                priceShowStyle?: number;
                [key: string]: unknown;
              };
              /** Category codes that include this product. */
              categoryCodeList?: Array<string>;
              /** Product tags. */
              tags?: Array<Record<string, unknown>>;
              /** Products in this group or combo. */
              groupList?: Array<Record<string, unknown>>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Whether the provider request succeeded. */
        success?: boolean;
        /** Provider status message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Get detailed McDonald's China menu product information. */
    "mcdonalds_cn.get_product_detail": {
      input: {
        /**
         * Product code.
         * @minLength 1
         */
        code: string;
        /**
         * Store code.
         * @minLength 1
         */
        storeCode: string;
        /**
         * Sales channel code.
         * @minLength 1
         */
        channelCode: string;
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        daypartCode: string;
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        orderType: string;
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        beCode?: string;
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        cardId?: string | null;
        /**
         * Date in yyyyMMdd format. When omitted, McDonald's China defaults to the current day.
         * @pattern ^\d{8}$
         */
        date?: string;
        /**
         * Time in HH:mm format. When omitted, McDonald's China defaults to the current time.
         * @pattern ^\d{2}:\d{2}$
         */
        time?: string;
        /** McDonald's China flag value: 0 for no, 1 for yes. */
        isGroupMeal?: "0" | "1";
      };
      output: {
        /** McDonald's China trace identifier. */
        traceId?: string;
        /** Server datetime. */
        datetime?: string;
        /** Provider status code. */
        code: number;
        /** McDonald's China product detail response data. */
        data: {
          /** Maximum purchase quantity. */
          maxPurchaseQuantity?: number;
          /** A McDonald's China product detail object. */
          product?: {
            /**
             * Product image URL.
             * @format uri
             */
            image?: string;
            /** Product code. */
            code?: string;
            /** Product name. */
            name?: string;
            /** Full product name. */
            longName?: string;
            /** Product description. */
            desc?: string;
            /** Product price in cents. */
            price?: number;
            /** Product price text in yuan. */
            priceText?: string;
            /** Product type code. */
            type?: number;
            /** Customization mode. */
            customizationMode?: number;
            /** Product spec groups. */
            specTypes?: Array<Record<string, unknown>>;
            /** Product choices. */
            choices?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the provider request succeeded. */
        success?: boolean;
        /** Provider status message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Get one McDonald's China store by store code. */
    "mcdonalds_cn.get_store": {
      input: {
        /**
         * Store code.
         * @minLength 1
         */
        storeCode: string;
      };
      output: {
        /** McDonald's China trace identifier. */
        traceId?: string;
        /** Server datetime. */
        datetime?: string;
        /** Provider status code. */
        code: number;
        /** A McDonald's China store. */
        data: {
          /** Store code. */
          code?: string;
          /** Store name. */
          name?: string;
          /** Store short name. */
          shortName?: string;
          /** Store business entity code. */
          beCode?: string;
          /** Store business entity type. */
          beType?: number;
          /** City code. */
          cityCode?: string;
          /** City name. */
          cityName?: string;
          /** Store address. */
          address?: string;
          /** Store latitude. */
          latitude?: number;
          /** Store longitude. */
          longitude?: number;
          /** Business status code. */
          businessStatus?: number;
          /** Store phone number. */
          telephone?: string;
          /** Distance in meters. */
          distance?: number;
          /** Human-readable distance. */
          distanceText?: string;
          /** Available dayparts. */
          dayparts?: Array<{
            /** Daypart code. */
            daypartCode?: number;
            /** Whether this is the default daypart. */
            daypartFlag?: boolean;
            /** Daypart name. */
            daypartName?: string;
            /** Daypart start time. */
            startTime?: string;
            /** Daypart end time. */
            endTime?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Whether the provider request succeeded. */
        success?: boolean;
        /** Provider status message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Get McDonald's China business details for a store business entity code. */
    "mcdonalds_cn.get_store_business": {
      input: {
        /**
         * Store business entity code.
         * @minLength 1
         */
        beCode: string;
        /**
         * Date in yyyyMMdd format. When omitted, McDonald's China defaults to the current day.
         * @pattern ^\d{8}$
         */
        date?: string;
        /** McDonald's China flag value: 0 for no, 1 for yes. */
        isGroupMeal?: "0" | "1";
        /**
         * Time in HH:mm format. When omitted, McDonald's China defaults to the current time.
         * @pattern ^\d{2}:\d{2}$
         */
        time?: string;
      };
      output: {
        /** McDonald's China trace identifier. */
        traceId?: string;
        /** Server datetime. */
        datetime?: string;
        /** Provider status code. */
        code: number;
        /** A McDonald's China store. */
        data: {
          /** Store code. */
          code?: string;
          /** Store name. */
          name?: string;
          /** Store short name. */
          shortName?: string;
          /** Store business entity code. */
          beCode?: string;
          /** Store business entity type. */
          beType?: number;
          /** City code. */
          cityCode?: string;
          /** City name. */
          cityName?: string;
          /** Store address. */
          address?: string;
          /** Store latitude. */
          latitude?: number;
          /** Store longitude. */
          longitude?: number;
          /** Business status code. */
          businessStatus?: number;
          /** Store phone number. */
          telephone?: string;
          /** Distance in meters. */
          distance?: number;
          /** Human-readable distance. */
          distanceText?: string;
          /** Available dayparts. */
          dayparts?: Array<{
            /** Daypart code. */
            daypartCode?: number;
            /** Whether this is the default daypart. */
            daypartFlag?: boolean;
            /** Daypart name. */
            daypartName?: string;
            /** Daypart start time. */
            startTime?: string;
            /** Daypart end time. */
            endTime?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Whether the provider request succeeded. */
        success?: boolean;
        /** Provider status message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Search McDonald's China menu products for one store, daypart, and order type. */
    "mcdonalds_cn.search_products": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Store code.
         * @minLength 1
         */
        storeCode: string;
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        daypartCode: string;
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        orderType: string;
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        beCode?: string;
        /**
         * Date in yyyyMMdd format. When omitted, McDonald's China defaults to the current day.
         * @pattern ^\d{8}$
         */
        date?: string;
        /**
         * Time in HH:mm format. When omitted, McDonald's China defaults to the current time.
         * @pattern ^\d{2}:\d{2}$
         */
        time?: string;
        /** McDonald's China flag value: 0 for no, 1 for yes. */
        isGroupMeal?: "0" | "1";
      };
      output: {
        /** McDonald's China trace identifier. */
        traceId?: string;
        /** Server datetime. */
        datetime?: string;
        /** Provider status code. */
        code: number;
        /** McDonald's China product search response data. */
        data: {
          /** Maximum purchase quantity. */
          maxPurchaseQuantity?: number;
          /** Products matching the search. */
          productList?: Array<{
            /** Product code. */
            productCode?: string;
            /** Product name. */
            productName?: string;
            /** Full product name. */
            productLongName?: string;
            /**
             * Product image URL.
             * @format uri
             */
            productImage?: string;
            /** Product type code. */
            productType?: number;
            /** Sale status code. */
            saleStatus?: number;
            /** Maximum purchase quantity. */
            maxPurchaseQuantity?: number;
            /** McDonald's China product price information. */
            priceInfo?: {
              /** Eat-in price text in yuan. */
              eatInPriceText?: string;
              /** Take-out price text in yuan. */
              takeOutPriceText?: string;
              /** Delivery price text in yuan. */
              deliveryPriceText?: string;
              /** Eat-in price in cents. */
              eatInPrice?: number;
              /** Take-out price in cents. */
              takeOutPrice?: number;
              /** Delivery price in cents. */
              deliveryPrice?: number;
              /** Discount price in cents. */
              discountPrice?: number;
              /** Discount price text in yuan. */
              discountPriceText?: string;
              /** Price display style. */
              priceShowStyle?: number;
              [key: string]: unknown;
            };
            /** Category codes that include this product. */
            categoryCodeList?: Array<string>;
            /** Product tags. */
            tags?: Array<Record<string, unknown>>;
            /** Products in this group or combo. */
            groupList?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Whether the provider request succeeded. */
        success?: boolean;
        /** Provider status message. */
        message?: string;
        [key: string]: unknown;
      };
    };
    /** Search McDonald's China stores by delivery address, city, location, keyword, or order filters. */
    "mcdonalds_cn.search_stores": {
      input: {
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        addressId?: string;
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        beType?: string;
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        cityCode?: string;
        /**
         * Date in yyyyMMdd format. When omitted, McDonald's China defaults to the current day.
         * @pattern ^\d{8}$
         */
        date?: string;
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        distance?: string;
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        hotTagCode?: string;
        /** McDonald's China flag value: 0 for no, 1 for yes. */
        isCityCenter?: "0" | "1";
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        keyword?: string;
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        latitude?: string;
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        longitude?: string;
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        orderType?: string;
        /**
         * A McDonald's China query parameter value.
         * @minLength 1
         */
        showType?: string;
        /**
         * Time in HH:mm format. When omitted, McDonald's China defaults to the current time.
         * @pattern ^\d{2}:\d{2}$
         */
        time?: string;
      };
      output: {
        /** McDonald's China trace identifier. */
        traceId?: string;
        /** Server datetime. */
        datetime?: string;
        /** Provider status code. */
        code: number;
        /** McDonald's China nearby store response data. */
        data: {
          /** Nearby stores. */
          stores?: Array<{
            /** Store code. */
            code?: string;
            /** Store name. */
            name?: string;
            /** Store short name. */
            shortName?: string;
            /** Store business entity code. */
            beCode?: string;
            /** Store business entity type. */
            beType?: number;
            /** City code. */
            cityCode?: string;
            /** City name. */
            cityName?: string;
            /** Store address. */
            address?: string;
            /** Store latitude. */
            latitude?: number;
            /** Store longitude. */
            longitude?: number;
            /** Business status code. */
            businessStatus?: number;
            /** Store phone number. */
            telephone?: string;
            /** Distance in meters. */
            distance?: number;
            /** Human-readable distance. */
            distanceText?: string;
            /** Available dayparts. */
            dayparts?: Array<{
              /** Daypart code. */
              daypartCode?: number;
              /** Whether this is the default daypart. */
              daypartFlag?: boolean;
              /** Daypart name. */
              daypartName?: string;
              /** Daypart start time. */
              startTime?: string;
              /** Daypart end time. */
              endTime?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** Nearby stores. */
          storeList?: Array<{
            /** Store code. */
            code?: string;
            /** Store name. */
            name?: string;
            /** Store short name. */
            shortName?: string;
            /** Store business entity code. */
            beCode?: string;
            /** Store business entity type. */
            beType?: number;
            /** City code. */
            cityCode?: string;
            /** City name. */
            cityName?: string;
            /** Store address. */
            address?: string;
            /** Store latitude. */
            latitude?: number;
            /** Store longitude. */
            longitude?: number;
            /** Business status code. */
            businessStatus?: number;
            /** Store phone number. */
            telephone?: string;
            /** Distance in meters. */
            distance?: number;
            /** Human-readable distance. */
            distanceText?: string;
            /** Available dayparts. */
            dayparts?: Array<{
              /** Daypart code. */
              daypartCode?: number;
              /** Whether this is the default daypart. */
              daypartFlag?: boolean;
              /** Daypart name. */
              daypartName?: string;
              /** Daypart start time. */
              startTime?: string;
              /** Daypart end time. */
              endTime?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** Server datetime. */
          datetime?: string;
          [key: string]: unknown;
        };
        /** Whether the provider request succeeded. */
        success?: boolean;
        /** Provider status message. */
        message?: string;
        [key: string]: unknown;
      };
    };
  }
}
