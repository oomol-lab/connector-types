import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve comprehensive personalized travel restrictions and document requirements for an itinerary. */
    "sherpa.get_trip_details": {
      input: {
        /**
         * Locale for returned travel requirement content, such as en-US.
         * @minLength 1
         */
        locale?: string;
        /** Currency used for visa and ETA prices. */
        currency?: "USD" | "CAD" | "GBP" | "EUR";
        /**
         * ISO 3166-1 alpha-3 codes for the traveller's passports.
         * @minItems 1
         */
        passports: Array<string>;
        /**
         * Ordered origin, transit, and destination points.
         * @minItems 2
         */
        travelNodes: Array<{
          /** Role of this point in the itinerary. */
          type: "ORIGIN" | "DESTINATION" | "TRANSIT";
          /**
           * ISO 3166-1 alpha-3 territory code, supported region code, or IATA airport code.
           * @minLength 1
           */
          locationCode: string;
          /**
           * Optional IATA airport code for this travel node.
           * @minLength 1
           */
          airportCode?: string;
          /** Arrival or departure details for one Sherpa travel node. */
          departure?: {
            /**
             * Travel date in YYYY-MM-DD format.
             * @format date
             */
            date: string;
            /** Local travel time in HH:MM format. */
            time: string;
            /**
             * Optional flight number without spaces, including the carrier code.
             * @minLength 1
             */
            flightNumber?: string;
            /** Travel mode used for this itinerary segment. */
            travelMode: "AIR";
          };
          /** Arrival or departure details for one Sherpa travel node. */
          arrival?: {
            /**
             * Travel date in YYYY-MM-DD format.
             * @format date
             */
            date: string;
            /** Local travel time in HH:MM format. */
            time: string;
            /**
             * Optional flight number without spaces, including the carrier code.
             * @minLength 1
             */
            flightNumber?: string;
            /** Travel mode used for this itinerary segment. */
            travelMode: "AIR";
          };
        }>;
      };
      output: {
        /** Personalized trip requirements and information group references. */
        data?: Record<string, unknown>;
        /** Expanded restrictions, procedures, locations, and products referenced by the trip. */
        included?: Array<Record<string, unknown>>;
        /** Sherpa response metadata. */
        meta?: Record<string, unknown>;
        /** Sherpa response links. */
        links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve a concise Markdown summary of personalized travel and visa requirements for an itinerary. */
    "sherpa.get_trip_summary": {
      input: {
        /**
         * Locale for returned travel requirement content, such as en-US.
         * @minLength 1
         */
        locale?: string;
        /** Currency used for visa and ETA prices. */
        currency?: "USD" | "CAD" | "GBP" | "EUR";
        /**
         * ISO 3166-1 alpha-3 codes for the traveller's passports.
         * @minItems 1
         */
        passports: Array<string>;
        /**
         * Ordered origin, transit, and destination points.
         * @minItems 2
         */
        travelNodes: Array<{
          /** Role of this point in the itinerary. */
          type: "ORIGIN" | "DESTINATION" | "TRANSIT";
          /**
           * ISO 3166-1 alpha-3 territory code, supported region code, or IATA airport code.
           * @minLength 1
           */
          locationCode: string;
          /**
           * Optional IATA airport code for this travel node.
           * @minLength 1
           */
          airportCode?: string;
          /** Arrival or departure details for one Sherpa travel node. */
          departure?: {
            /**
             * Travel date in YYYY-MM-DD format.
             * @format date
             */
            date: string;
            /** Local travel time in HH:MM format. */
            time: string;
            /**
             * Optional flight number without spaces, including the carrier code.
             * @minLength 1
             */
            flightNumber?: string;
            /** Travel mode used for this itinerary segment. */
            travelMode: "AIR";
          };
          /** Arrival or departure details for one Sherpa travel node. */
          arrival?: {
            /**
             * Travel date in YYYY-MM-DD format.
             * @format date
             */
            date: string;
            /** Local travel time in HH:MM format. */
            time: string;
            /**
             * Optional flight number without spaces, including the carrier code.
             * @minLength 1
             */
            flightNumber?: string;
            /** Travel mode used for this itinerary segment. */
            travelMode: "AIR";
          };
        }>;
      };
      output: {
        /** Metadata for the generated travel requirement summary. */
        meta: {
          /** ISO 8601 timestamp when Sherpa generated the summary. */
          generatedAt: string;
          /** Locale used for the summary. */
          locale: string;
          /** Model identifier reported by Sherpa. */
          LlmModel: string;
          [key: string]: unknown;
        };
        /** Sherpa's Markdown travel requirement content and confidence metadata. */
        data: {
          /** Confidence score reported for the summary content. */
          contentConfidence: number;
          /** Media type of the summary content. */
          contentType: string;
          /** Token-efficient travel requirement summary in Markdown. */
          content: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
