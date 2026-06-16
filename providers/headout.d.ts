import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one booking by its Headout booking id. */
    "headout.get_booking": {
      input: {
        /**
         * The Headout booking identifier.
         * @minLength 1
         * @pattern \S
         */
        bookingId: string;
      };
      output: {
        /** A normalized Headout booking. */
        booking: {
          /**
           * The Headout booking identifier.
           * @minLength 1
           * @pattern \S
           */
          bookingId: string;
          /** The partner reference identifier when present. */
          partnerReferenceId: string | null;
          /** The booked variant identifier. */
          variantId: string | null;
          /** The booking start date-time. */
          startDateTime: string | null;
          /** The minimal product reference on a Headout booking. */
          product: {
            /**
             * The booked product identifier.
             * @minLength 1
             * @pattern \S
             */
            id: string;
            /** The booked product name. */
            name: string | null;
            /** The booked product variant reference. */
            variant: {
              /**
               * The booked variant identifier.
               * @minLength 1
               * @pattern \S
               */
              id: string;
              /** The booked variant name. */
              name: string | null;
            } | null;
          } | null;
          /** The customer details collected for a Headout booking. */
          customerDetails: {
            /** The number of travelers in the booking. */
            count: number | null;
            /** The normalized booking customers. */
            customers: Array<{
              /** The traveler type. */
              personType: string | null;
              /** Whether the traveler is the primary customer. */
              isPrimary: boolean | null;
              /** The customer input fields. */
              inputFields: Array<{
                /**
                 * The field identifier.
                 * @minLength 1
                 * @pattern \S
                 */
                id: string;
                /** The field display name when Headout returns one. */
                name: string | null;
                /** The submitted field value when Headout returns one. */
                value: string | null;
              }>;
            }>;
          } | null;
          /** The variant-level booking input fields. */
          variantInputFields: Array<{
            /**
             * The field identifier.
             * @minLength 1
             * @pattern \S
             */
            id: string;
            /** The field display name when Headout returns one. */
            name: string | null;
            /** The submitted field value when Headout returns one. */
            value: string | null;
          }>;
          /** A Headout monetary value. */
          price: {
            /** The monetary amount. */
            amount: number | null;
            /** The ISO 4217 currency code. */
            currencyCode: string | null;
          } | null;
          /** The Headout booking status. */
          status: string | null;
          /** The Headout voucher URL when available. */
          voucherUrl: string | null;
          /** The tickets returned for this booking. */
          tickets: Array<{
            /** The public ticket identifier. */
            publicId: string | null;
            /** The ticket download URL. */
            url: string | null;
          }>;
          /** The booking creation timestamp. */
          creationTimestamp: number | null;
          /** The raw Headout booking object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Headout product with variants and pricing. */
    "headout.get_product": {
      input: {
        /**
         * The Headout product identifier.
         * @minLength 1
         * @pattern \S
         */
        productId: string;
        /**
         * The ISO 4217 currency code for returned pricing.
         * @minLength 1
         * @pattern \S
         */
        currencyCode?: string;
        /**
         * The Headout language code.
         * @minLength 1
         * @pattern \S
         */
        language?: string;
        /** Whether to request variants from Headout. */
        fetchVariants?: boolean;
      };
      output: {
        /** A normalized Headout product. */
        product: {
          /**
           * The Headout product identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The product name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** The relative Headout product URL. */
          url: string | null;
          /** The canonical Headout product URL. */
          canonicalUrl: string | null;
          /** The product neighbourhood when available. */
          neighbourhood: string | null;
          /** The Headout city attached to the product. */
          city: {
            /**
             * The Headout city code.
             * @minLength 1
             * @pattern \S
             */
            code: string;
            /**
             * The city display name.
             * @minLength 1
             * @pattern \S
             */
            name: string;
            /** The raw Headout product city object. */
            raw: Record<string, unknown>;
          } | null;
          /** A Headout currency object. */
          currency: {
            /**
             * The ISO 4217 currency code.
             * @minLength 1
             * @pattern \S
             */
            code: string;
            /**
             * The currency display name.
             * @minLength 1
             * @pattern \S
             */
            name: string;
            /**
             * The long-form currency symbol.
             * @minLength 1
             * @pattern \S
             */
            symbol: string;
            /**
             * The local currency symbol.
             * @minLength 1
             * @pattern \S
             */
            localSymbol: string;
            /** The number of decimal places used for this currency. */
            precision: number;
          } | null;
          /** The display tags returned by Headout. */
          displayTags: Array<string>;
          /** The Headout product images. */
          images: Array<{
            /**
             * The absolute image URL.
             * @format uri
             */
            url: string;
          }>;
          /** The normalized Headout content sections. */
          content: Array<{
            /** The section title. */
            title: string | null;
            /** The Headout content type identifier. */
            type: string | null;
            /** The HTML content returned by Headout. */
            html: string | null;
          }>;
          /** A normalized Headout location object. */
          startLocation: {
            /** A Headout geolocation object. */
            geo: {
              /** The latitude. */
              latitude: number;
              /** The longitude. */
              longitude: number;
            } | null;
            /** A normalized Headout address object. */
            address: {
              /** The first address line. */
              line1: string | null;
              /** The second address line when available. */
              line2: string | null;
              /** The city name. */
              cityName: string | null;
              /** The state or region name. */
              stateName: string | null;
              /** The country name. */
              countryName: string | null;
              /** The postal code. */
              postalCode: string | null;
            } | null;
          } | null;
          /** A normalized Headout location object. */
          endLocation: {
            /** A Headout geolocation object. */
            geo: {
              /** The latitude. */
              latitude: number;
              /** The longitude. */
              longitude: number;
            } | null;
            /** A normalized Headout address object. */
            address: {
              /** The first address line. */
              line1: string | null;
              /** The second address line when available. */
              line2: string | null;
              /** The city name. */
              cityName: string | null;
              /** The state or region name. */
              stateName: string | null;
              /** The country name. */
              countryName: string | null;
              /** The postal code. */
              postalCode: string | null;
            } | null;
          } | null;
          /** The Headout product type. */
          productType: string | null;
          /** A Headout rating summary. */
          ratingCumulative: {
            /** The average rating. */
            avg: number | null;
            /** The number of ratings. */
            count: number | null;
          } | null;
          /** Whether the product supports instant confirmation. */
          hasInstantConfirmation: boolean | null;
          /** Whether the product supports mobile tickets. */
          hasMobileTicket: boolean | null;
          /** The Headout product variants. */
          variants: Array<{
            /**
             * The Headout variant identifier.
             * @minLength 1
             * @pattern \S
             */
            id: string;
            /** The variant name when available. */
            name: string | null;
            /** The variant description when available. */
            description: string | null;
            /** The Headout inventory type. */
            inventoryType: string | null;
            /** The duration in milliseconds when available. */
            duration: number | null;
            /** The Headout price type. */
            priceType: string | null;
            /** The minimum and maximum traveler counts for a Headout variant. */
            pax: {
              /** The minimum supported traveler count. */
              min: number;
              /** The maximum supported traveler count when Headout returns one. */
              max: number | null;
              /** The raw Headout pax object. */
              raw: Record<string, unknown>;
            } | null;
            /** The cashback information for a Headout variant. */
            cashback: {
              /** The cashback numeric value. */
              value: number;
              /** The Headout cashback type. */
              type: string | null;
              /** The raw Headout cashback object. */
              raw: Record<string, unknown>;
            } | null;
            /** The ticket delivery instructions in HTML when available. */
            ticketDeliveryInfoHtml: string | null;
            /** The input fields required to book this variant. */
            inputFields: Array<{
              /**
               * The field identifier.
               * @minLength 1
               * @pattern \S
               */
              id: string;
              /** The field display name when Headout returns one. */
              name: string | null;
              /** The submitted field value when Headout returns one. */
              value: string | null;
              /** The Headout data type for this field. */
              dataType: string | null;
              /** The Headout field level. */
              level: string | null;
              /** Validation rules for a Headout variant input field. */
              validation: {
                /** The regex constraint when Headout defines one. */
                regex: string | null;
                /** The minimum string length when Headout defines one. */
                minLength: number | null;
                /** The maximum string length when Headout defines one. */
                maxLength: number | null;
                /** The minimum numeric value when Headout defines one. */
                minValue: number | null;
                /** The maximum numeric value when Headout defines one. */
                maxValue: number | null;
                /** Whether the field is required. */
                required: boolean | null;
                /** The allowed enumeration values when Headout defines them. */
                values: Array<string> | null;
                /** The raw Headout validation object. */
                raw: Record<string, unknown>;
              } | null;
              /** The raw Headout input field object. */
              raw: Record<string, unknown>;
            }>;
            /** The variant tags returned by Headout. */
            tags: Array<string>;
            /** The raw Headout variant object. */
            raw: Record<string, unknown>;
          }>;
          /** A Headout product pricing summary. */
          pricing: {
            /** The Headout pricing type. */
            type: string | null;
            /** The pricing currency code. */
            currencyCode: string | null;
            /** A Headout pricing amount pair. */
            minimumPrice: {
              /** The original retail price. */
              originalPrice: number | null;
              /** The final selling price. */
              finalPrice: number | null;
              /** The raw Headout listing price object. */
              raw: Record<string, unknown>;
            } | null;
            /** The best discount percentage or absolute value. */
            bestDiscount: number | null;
            /** The raw Headout product pricing object. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Headout product object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List bookings accessible to the current Headout API key. */
    "headout.list_bookings": {
      input: {
        /**
         * The pagination offset returned by a previous Headout response.
         * @minLength 1
         * @pattern \S
         */
        offset?: string;
        /**
         * The number of items to request from Headout.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The bookings returned by Headout. */
        bookings: Array<{
          /**
           * The Headout booking identifier.
           * @minLength 1
           * @pattern \S
           */
          bookingId: string;
          /** The partner reference identifier when present. */
          partnerReferenceId: string | null;
          /** The booked variant identifier. */
          variantId: string | null;
          /** The booking start date-time. */
          startDateTime: string | null;
          /** The minimal product reference on a Headout booking. */
          product: {
            /**
             * The booked product identifier.
             * @minLength 1
             * @pattern \S
             */
            id: string;
            /** The booked product name. */
            name: string | null;
            /** The booked product variant reference. */
            variant: {
              /**
               * The booked variant identifier.
               * @minLength 1
               * @pattern \S
               */
              id: string;
              /** The booked variant name. */
              name: string | null;
            } | null;
          } | null;
          /** The customer details collected for a Headout booking. */
          customerDetails: {
            /** The number of travelers in the booking. */
            count: number | null;
            /** The normalized booking customers. */
            customers: Array<{
              /** The traveler type. */
              personType: string | null;
              /** Whether the traveler is the primary customer. */
              isPrimary: boolean | null;
              /** The customer input fields. */
              inputFields: Array<{
                /**
                 * The field identifier.
                 * @minLength 1
                 * @pattern \S
                 */
                id: string;
                /** The field display name when Headout returns one. */
                name: string | null;
                /** The submitted field value when Headout returns one. */
                value: string | null;
              }>;
            }>;
          } | null;
          /** The variant-level booking input fields. */
          variantInputFields: Array<{
            /**
             * The field identifier.
             * @minLength 1
             * @pattern \S
             */
            id: string;
            /** The field display name when Headout returns one. */
            name: string | null;
            /** The submitted field value when Headout returns one. */
            value: string | null;
          }>;
          /** A Headout monetary value. */
          price: {
            /** The monetary amount. */
            amount: number | null;
            /** The ISO 4217 currency code. */
            currencyCode: string | null;
          } | null;
          /** The Headout booking status. */
          status: string | null;
          /** The Headout voucher URL when available. */
          voucherUrl: string | null;
          /** The tickets returned for this booking. */
          tickets: Array<{
            /** The public ticket identifier. */
            publicId: string | null;
            /** The ticket download URL. */
            url: string | null;
          }>;
          /** The booking creation timestamp. */
          creationTimestamp: number | null;
          /** The raw Headout booking object. */
          raw: Record<string, unknown>;
        }>;
        /** The Headout pagination wrapper metadata. */
        pagination: {
          /** The next page URL when Headout returns one. */
          nextUrl: string | null;
          /** The previous page URL when Headout returns one. */
          prevUrl: string | null;
          /** The total number of matching Headout records. */
          total: number;
          /** The next numeric offset when Headout returns one. */
          nextOffset: number | null;
        };
      };
    };
    /** List Headout categories for a given city. */
    "headout.list_categories_by_city": {
      input: {
        /**
         * The Headout city code.
         * @minLength 1
         * @pattern \S
         */
        cityCode: string;
        /**
         * The pagination offset returned by a previous Headout response.
         * @minLength 1
         * @pattern \S
         */
        offset?: string;
        /**
         * The number of items to request from Headout.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The Headout categories in the requested city. */
        categories: Array<{
          /**
           * The Headout category identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The category display name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /**
           * The Headout city code for this category.
           * @minLength 1
           * @pattern \S
           */
          cityCode: string;
          /** A Headout image object. */
          image: {
            /**
             * The absolute image URL.
             * @format uri
             */
            url: string;
          } | null;
          /**
           * The canonical Headout category URL.
           * @format uri
           */
          canonicalUrl: string;
          /** The raw Headout category object. */
          raw: Record<string, unknown>;
        }>;
        /** The Headout pagination wrapper metadata. */
        pagination: {
          /** The next page URL when Headout returns one. */
          nextUrl: string | null;
          /** The previous page URL when Headout returns one. */
          prevUrl: string | null;
          /** The total number of matching Headout records. */
          total: number;
          /** The next numeric offset when Headout returns one. */
          nextOffset: number | null;
        };
      };
    };
    /** List active Headout cities. */
    "headout.list_cities": {
      input: {
        /**
         * The pagination offset returned by a previous Headout response.
         * @minLength 1
         * @pattern \S
         */
        offset?: string;
        /**
         * The number of items to request from Headout.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The active Headout cities. */
        cities: Array<{
          /**
           * The Headout city code.
           * @minLength 1
           * @pattern \S
           */
          code: string;
          /**
           * The display name of the city.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** A Headout image object. */
          image: {
            /**
             * The absolute image URL.
             * @format uri
             */
            url: string;
          };
          /** The raw Headout city object. */
          raw: Record<string, unknown>;
        }>;
        /** The Headout pagination wrapper metadata. */
        pagination: {
          /** The next page URL when Headout returns one. */
          nextUrl: string | null;
          /** The previous page URL when Headout returns one. */
          prevUrl: string | null;
          /** The total number of matching Headout records. */
          total: number;
          /** The next numeric offset when Headout returns one. */
          nextOffset: number | null;
        };
      };
    };
    /** List Headout inventory rows for one variant. */
    "headout.list_inventory_by_variant": {
      input: {
        /**
         * The Headout variant identifier.
         * @minLength 1
         * @pattern \S
         */
        variantId: string;
        /**
         * The lower bound start date-time in Headout local date-time format.
         * @minLength 1
         * @pattern \S
         */
        startDateTime?: string;
        /**
         * The upper bound end date-time in Headout local date-time format.
         * @minLength 1
         * @pattern \S
         */
        endDateTime?: string;
        /**
         * The ISO 4217 currency code for returned pricing.
         * @minLength 1
         * @pattern \S
         */
        currencyCode?: string;
        /**
         * The pagination offset returned by a previous Headout response.
         * @minLength 1
         * @pattern \S
         */
        offset?: string;
        /**
         * The number of items to request from Headout.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The inventory rows returned by Headout. */
        inventories: Array<{
          /**
           * The Headout inventory identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The inventory start local date-time. */
          startDateTime: string | null;
          /** The inventory end local date-time. */
          endDateTime: string | null;
          /** The Headout availability code. */
          availability: string | null;
          /** The remaining seats when Headout reports them. */
          remaining: number | null;
          /** The Headout inventory pricing object. */
          pricing: {
            /** The per-person pricing rows. */
            persons: Array<{
              /** The traveler type. */
              type: string | null;
              /** The traveler type display name. */
              name: string | null;
              /** The minimum age when Headout returns one. */
              ageFrom: number | null;
              /** The maximum age when Headout returns one. */
              ageTo: number | null;
              /** The final sale price. */
              price: number | null;
              /** The original retail price. */
              originalPrice: number | null;
            }>;
            /** The per-group pricing rows. */
            groups: Array<{
              /** The upper traveler bound for this group tier. */
              size: number | null;
              /** The final sale price. */
              price: number | null;
              /** The original retail price. */
              originalPrice: number | null;
            }>;
          } | null;
          /** The raw Headout inventory object. */
          raw: Record<string, unknown>;
        }>;
        /** The Headout pagination wrapper metadata. */
        pagination: {
          /** The next page URL when Headout returns one. */
          nextUrl: string | null;
          /** The previous page URL when Headout returns one. */
          prevUrl: string | null;
          /** The total number of matching Headout records. */
          total: number;
          /** The next numeric offset when Headout returns one. */
          nextOffset: number | null;
        };
      };
    };
    /** List Headout product listings for a category. */
    "headout.list_products_by_category": {
      input: {
        /**
         * The Headout category identifier.
         * @minLength 1
         * @pattern \S
         */
        categoryId: string;
        /**
         * The ISO 4217 currency code for returned pricing.
         * @minLength 1
         * @pattern \S
         */
        currencyCode?: string;
        /**
         * The Headout language code.
         * @minLength 1
         * @pattern \S
         */
        language?: string;
        /**
         * The pagination offset returned by a previous Headout response.
         * @minLength 1
         * @pattern \S
         */
        offset?: string;
        /**
         * The number of items to request from Headout.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The product listings returned by Headout. */
        products: Array<{
          /**
           * The Headout product identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The product name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** The relative Headout product URL. */
          url: string | null;
          /** The canonical Headout product URL. */
          canonicalUrl: string | null;
          /** A minimal Headout city object attached to a listing. */
          city: {
            /**
             * The Headout city code.
             * @minLength 1
             * @pattern \S
             */
            code: string;
            /**
             * The city display name.
             * @minLength 1
             * @pattern \S
             */
            name: string;
            /** The raw Headout city listing object. */
            raw: Record<string, unknown>;
          } | null;
          /** A Headout image object. */
          image: {
            /**
             * The absolute image URL.
             * @format uri
             */
            url: string;
          } | null;
          /** The product neighbourhood when available. */
          neighbourhood: string | null;
          /** The primary category attached to a Headout product. */
          primaryCategory: {
            /**
             * The category identifier.
             * @minLength 1
             * @pattern \S
             */
            id: string;
            /** The category display name. */
            name: string | null;
            /** The Headout city code. */
            cityCode: string | null;
            /** The relative Headout category URL. */
            url: string | null;
          } | null;
          /** A Headout geolocation object. */
          startGeolocation: {
            /** The latitude. */
            latitude: number;
            /** The longitude. */
            longitude: number;
          } | null;
          /** A Headout rating summary. */
          ratingCumulative: {
            /** The average rating. */
            avg: number | null;
            /** The number of ratings. */
            count: number | null;
          } | null;
          /** A Headout product pricing summary. */
          pricing: {
            /** The Headout pricing type. */
            type: string | null;
            /** The pricing currency code. */
            currencyCode: string | null;
            /** A Headout pricing amount pair. */
            minimumPrice: {
              /** The original retail price. */
              originalPrice: number | null;
              /** The final selling price. */
              finalPrice: number | null;
              /** The raw Headout listing price object. */
              raw: Record<string, unknown>;
            } | null;
            /** The best discount percentage or absolute value. */
            bestDiscount: number | null;
            /** The raw Headout product pricing object. */
            raw: Record<string, unknown>;
          } | null;
          /** Whether the listing can be confirmed instantly when Headout returns it. */
          hasInstantConfirmation: boolean | null;
          /** The raw Headout product listing object. */
          raw: Record<string, unknown>;
        }>;
        /** The Headout pagination wrapper metadata. */
        pagination: {
          /** The next page URL when Headout returns one. */
          nextUrl: string | null;
          /** The previous page URL when Headout returns one. */
          prevUrl: string | null;
          /** The total number of matching Headout records. */
          total: number;
          /** The next numeric offset when Headout returns one. */
          nextOffset: number | null;
        };
      };
    };
    /** List Headout product listings for a city. */
    "headout.list_products_by_city": {
      input: {
        /**
         * The Headout city code.
         * @minLength 1
         * @pattern \S
         */
        cityCode: string;
        /**
         * The ISO 4217 currency code for returned pricing.
         * @minLength 1
         * @pattern \S
         */
        currencyCode?: string;
        /**
         * The Headout language code.
         * @minLength 1
         * @pattern \S
         */
        language?: string;
        /**
         * The pagination offset returned by a previous Headout response.
         * @minLength 1
         * @pattern \S
         */
        offset?: string;
        /**
         * The number of items to request from Headout.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The product listings returned by Headout. */
        products: Array<{
          /**
           * The Headout product identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The product name.
           * @minLength 1
           * @pattern \S
           */
          name: string;
          /** The relative Headout product URL. */
          url: string | null;
          /** The canonical Headout product URL. */
          canonicalUrl: string | null;
          /** A minimal Headout city object attached to a listing. */
          city: {
            /**
             * The Headout city code.
             * @minLength 1
             * @pattern \S
             */
            code: string;
            /**
             * The city display name.
             * @minLength 1
             * @pattern \S
             */
            name: string;
            /** The raw Headout city listing object. */
            raw: Record<string, unknown>;
          } | null;
          /** A Headout image object. */
          image: {
            /**
             * The absolute image URL.
             * @format uri
             */
            url: string;
          } | null;
          /** The product neighbourhood when available. */
          neighbourhood: string | null;
          /** The primary category attached to a Headout product. */
          primaryCategory: {
            /**
             * The category identifier.
             * @minLength 1
             * @pattern \S
             */
            id: string;
            /** The category display name. */
            name: string | null;
            /** The Headout city code. */
            cityCode: string | null;
            /** The relative Headout category URL. */
            url: string | null;
          } | null;
          /** A Headout geolocation object. */
          startGeolocation: {
            /** The latitude. */
            latitude: number;
            /** The longitude. */
            longitude: number;
          } | null;
          /** A Headout rating summary. */
          ratingCumulative: {
            /** The average rating. */
            avg: number | null;
            /** The number of ratings. */
            count: number | null;
          } | null;
          /** A Headout product pricing summary. */
          pricing: {
            /** The Headout pricing type. */
            type: string | null;
            /** The pricing currency code. */
            currencyCode: string | null;
            /** A Headout pricing amount pair. */
            minimumPrice: {
              /** The original retail price. */
              originalPrice: number | null;
              /** The final selling price. */
              finalPrice: number | null;
              /** The raw Headout listing price object. */
              raw: Record<string, unknown>;
            } | null;
            /** The best discount percentage or absolute value. */
            bestDiscount: number | null;
            /** The raw Headout product pricing object. */
            raw: Record<string, unknown>;
          } | null;
          /** Whether the listing can be confirmed instantly when Headout returns it. */
          hasInstantConfirmation: boolean | null;
          /** The raw Headout product listing object. */
          raw: Record<string, unknown>;
        }>;
        /** The Headout pagination wrapper metadata. */
        pagination: {
          /** The next page URL when Headout returns one. */
          nextUrl: string | null;
          /** The previous page URL when Headout returns one. */
          prevUrl: string | null;
          /** The total number of matching Headout records. */
          total: number;
          /** The next numeric offset when Headout returns one. */
          nextOffset: number | null;
        };
      };
    };
  }
}
