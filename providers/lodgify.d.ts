import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Lodgify booking by identifier. */
    "lodgify.get_booking": {
      input: {
        /**
         * The Lodgify booking identifier.
         * @exclusiveMinimum 0
         */
        bookingId: number;
      };
      output: {
        /** A normalized Lodgify booking wrapper. */
        booking: {
          /** The Lodgify booking identifier when returned. */
          id: number | null;
          /** The Lodgify booking status when returned. */
          status: string | null;
          /** The raw Lodgify object returned by the API. */
          raw: Record<string, unknown>;
        };
        /** The raw Lodgify object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Lodgify property by identifier. */
    "lodgify.get_property": {
      input: {
        /**
         * The Lodgify property identifier.
         * @exclusiveMinimum 0
         */
        propertyId: number;
      };
      output: {
        /** A normalized Lodgify property wrapper. */
        property: {
          /** The Lodgify property identifier when returned. */
          id: number | null;
          /** The Lodgify property name when returned. */
          name: string | null;
          /** The raw Lodgify object returned by the API. */
          raw: Record<string, unknown>;
        };
        /** The raw Lodgify object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Lodgify availability periods for a property over a date range. */
    "lodgify.get_property_availability": {
      input: {
        /**
         * The Lodgify property identifier.
         * @exclusiveMinimum 0
         */
        propertyId: number;
        /**
         * The start date for the Lodgify query in YYYY-MM-DD format.
         * @format date
         */
        from: string;
        /**
         * The end date for the Lodgify query in YYYY-MM-DD format.
         * @format date
         */
        to: string;
      };
      output: {
        /** Availability periods returned by Lodgify. */
        availability: Array<{
          /** The Lodgify room type identifier for this availability period. */
          roomTypeId: number | null;
          /** The availability period start date when returned. */
          start: string | null;
          /** The availability period end date when returned. */
          end: string | null;
          /** The available unit count for this period when returned. */
          available: number | null;
          /** The raw Lodgify object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Lodgify availability array. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Calculate a Lodgify quote for a property, room type, stay dates, and adults. */
    "lodgify.get_quote": {
      input: {
        /**
         * The Lodgify property identifier.
         * @exclusiveMinimum 0
         */
        propertyId: number;
        /**
         * The start date for the Lodgify query in YYYY-MM-DD format.
         * @format date
         */
        from: string;
        /**
         * The end date for the Lodgify query in YYYY-MM-DD format.
         * @format date
         */
        to: string;
        /**
         * The Lodgify room type identifier to quote.
         * @exclusiveMinimum 0
         */
        roomTypeId: number;
        /**
         * The number of adult guests to include in the quote.
         * @exclusiveMinimum 0
         */
        adults: number;
      };
      output: {
        /** A normalized Lodgify quote wrapper. */
        quote: {
          /** The quote total including VAT when returned by Lodgify. */
          totalIncludingVat: number | null;
          /** The Lodgify quote currency code when returned. */
          currencyCode: string | null;
          /** The raw Lodgify object returned by the API. */
          raw: Record<string, unknown>;
        };
        /** The raw Lodgify object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Lodgify bookings with pagination and optional stay filter. */
    "lodgify.list_bookings": {
      input: {
        /**
         * The 1-based Lodgify page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of Lodgify items to request per page.
         * @exclusiveMinimum 0
         */
        size?: number;
        /** The Lodgify stay filter for the booking list. */
        stayFilter?: "Upcoming" | "Current" | "Historic" | "All";
      };
      output: {
        /** The Lodgify booking total count when returned. */
        count: number | null;
        /** Bookings returned for the current Lodgify page. */
        bookings: Array<{
          /** The Lodgify booking identifier when returned. */
          id: number | null;
          /** The Lodgify booking status when returned. */
          status: string | null;
          /** The raw Lodgify object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Lodgify object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List Lodgify properties with optional pagination and total count. */
    "lodgify.list_properties": {
      input: {
        /**
         * The 1-based Lodgify page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of Lodgify items to request per page.
         * @exclusiveMinimum 0
         */
        size?: number;
        /** Whether Lodgify should include the total count. */
        includeCount?: boolean;
      };
      output: {
        /** The Lodgify total count when included in the response. */
        count: number | null;
        /** Properties returned for the current Lodgify page. */
        properties: Array<{
          /** The Lodgify property identifier when returned. */
          id: number | null;
          /** The Lodgify property name when returned. */
          name: string | null;
          /** The raw Lodgify object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Lodgify object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** List room types configured for a Lodgify property. */
    "lodgify.list_property_rooms": {
      input: {
        /**
         * The Lodgify property identifier.
         * @exclusiveMinimum 0
         */
        propertyId: number;
      };
      output: {
        /** Room types returned by Lodgify. */
        rooms: Array<{
          /** The Lodgify room type identifier when returned. */
          id: number | null;
          /** The Lodgify room type name when returned. */
          name: string | null;
          /** The raw Lodgify object returned by the API. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Lodgify room type array. */
        raw: Array<Record<string, unknown>>;
      };
    };
  }
}
