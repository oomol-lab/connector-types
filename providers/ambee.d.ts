import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Convert a place name or address into latitude and longitude with Ambee. */
    "ambee.geocode_by_place": {
      input: {
        /**
         * The place name or address to geocode.
         * @minLength 1
         */
        place: string;
      };
      output: {
        /** The geocoded locations returned by Ambee. */
        locations: Array<{
          /** The latitude of the matched location. */
          lat: number;
          /** The longitude of the matched location. */
          lng: number;
          /** The address details for the matched location. */
          address: {
            /** The full formatted address label. */
            label: string;
            /** The ISO country code. */
            countryCode: string;
            /** The full country name. */
            countryName: string;
            /** The city name. */
            city?: string;
            /** The state or province name. */
            state?: string;
            /** The state or province code. */
            stateCode?: string;
            /** The district or neighbourhood name. */
            district?: string;
            /** The street name. */
            street?: string;
            /** The house or building number. */
            houseNumber?: string;
            /** The postal or ZIP code. */
            postalCode?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the latest air quality station readings for one coordinate from Ambee. */
    "ambee.get_air_quality_by_lat_lng": {
      input: {
        /**
         * The latitude of the target location.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * The longitude of the target location.
         * @minimum -180
         * @maximum 180
         */
        lng: number;
      };
      output: {
        /** The Ambee status message for the current reading. */
        message?: string;
        /** The air quality station readings returned by Ambee. */
        stations: Array<{
          /** The latitude of the reading. */
          lat: number;
          /** The longitude of the reading. */
          lng: number;
          /** The US EPA Air Quality Index value. */
          AQI: number;
          /** The carbon monoxide concentration. */
          CO: number;
          /** The nitrogen dioxide concentration. */
          NO2: number;
          /** The ozone concentration. */
          OZONE: number;
          /** The PM10 concentration. */
          PM10: number;
          /** The PM2.5 concentration. */
          PM25: number;
          /** The sulphur dioxide concentration. */
          SO2: number;
          /** The timestamp when the reading was updated. */
          updatedAt: string;
          /** The dominant pollutant details for this station. */
          aqiInfo: {
            /** The dominant pollutant for this AQI reading. */
            pollutant: string;
            /** The concentration of the dominant pollutant. */
            concentration: number;
            /** The AQI category such as Good or Moderate. */
            category: string;
            [key: string]: unknown;
          };
          /** The city name. */
          city?: string;
          /** The state or province name. */
          state?: string;
          /** The administrative division or district name. */
          division?: string;
          /** The postal or ZIP code. */
          postalCode?: string;
          /** The ISO country code. */
          countryCode?: string;
          /** The specific place name when available. */
          placeName?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the air quality forecast for one coordinate from Ambee. */
    "ambee.get_air_quality_forecast_by_lat_lng": {
      input: {
        /**
         * The latitude of the target location.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * The longitude of the target location.
         * @minimum -180
         * @maximum 180
         */
        lng: number;
      };
      output: {
        /** The Ambee status message for the forecast request. */
        message?: string;
        /** The forecast air quality readings returned by Ambee. */
        forecast: Array<{
          /** The latitude of the reading. */
          lat: number;
          /** The longitude of the reading. */
          lng: number;
          /** The US EPA Air Quality Index value. */
          AQI: number;
          /** The carbon monoxide concentration. */
          CO: number;
          /** The nitrogen dioxide concentration. */
          NO2: number;
          /** The ozone concentration. */
          OZONE: number;
          /** The PM10 concentration. */
          PM10: number;
          /** The PM2.5 concentration. */
          PM25: number;
          /** The sulphur dioxide concentration. */
          SO2: number;
          /** The timestamp when the reading was updated. */
          updatedAt: string;
          /** The dominant pollutant details for this station. */
          aqiInfo: {
            /** The dominant pollutant for this AQI reading. */
            pollutant: string;
            /** The concentration of the dominant pollutant. */
            concentration: number;
            /** The AQI category such as Good or Moderate. */
            category: string;
            [key: string]: unknown;
          };
          /** The city name. */
          city?: string;
          /** The state or province name. */
          state?: string;
          /** The administrative division or district name. */
          division?: string;
          /** The postal or ZIP code. */
          postalCode?: string;
          /** The ISO country code. */
          countryCode?: string;
          /** The specific place name when available. */
          placeName?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get historical air quality readings for one coordinate from Ambee. */
    "ambee.get_air_quality_history_by_lat_lng": {
      input: {
        /**
         * The latitude used to query historical air quality.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * The longitude used to query historical air quality.
         * @minimum -180
         * @maximum 180
         */
        lng: number;
        /**
         * The inclusive history start timestamp in `YYYY-MM-DD hh:mm:ss` format.
         * @minLength 1
         */
        from: string;
        /**
         * The inclusive history end timestamp in `YYYY-MM-DD hh:mm:ss` format.
         * @minLength 1
         */
        to: string;
      };
      output: {
        /** The Ambee status message for the history request. */
        message?: string;
        /** The historical air quality readings returned by Ambee. */
        history: Array<{
          /** The latitude of the reading. */
          lat: number;
          /** The longitude of the reading. */
          lng: number;
          /** The US EPA Air Quality Index value. */
          AQI: number;
          /** The carbon monoxide concentration. */
          CO: number;
          /** The nitrogen dioxide concentration. */
          NO2: number;
          /** The ozone concentration. */
          OZONE: number;
          /** The PM10 concentration. */
          PM10: number;
          /** The PM2.5 concentration. */
          PM25: number;
          /** The sulphur dioxide concentration. */
          SO2: number;
          /** The timestamp when the historical reading was recorded. */
          createdAt: string;
          /** The dominant pollutant for the historical reading. */
          majorPollutant: string;
          /** The postal or ZIP code. */
          postalCode?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Convert latitude and longitude into location details with Ambee. */
    "ambee.reverse_geocode_by_lat_lng": {
      input: {
        /**
         * The latitude of the target location.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * The longitude of the target location.
         * @minimum -180
         * @maximum 180
         */
        lng: number;
      };
      output: {
        /** The optional Ambee status message. */
        message?: string;
        /** The reverse geocoded locations returned by Ambee. */
        locations: Array<{
          /** The latitude of the matched location. */
          lat: number;
          /** The longitude of the matched location. */
          lng: number;
          /** The address details for the matched location. */
          address: {
            /** The full formatted address label. */
            label: string;
            /** The ISO country code. */
            countryCode: string;
            /** The full country name. */
            countryName: string;
            /** The city name. */
            city?: string;
            /** The state or province name. */
            state?: string;
            /** The state or province code. */
            stateCode?: string;
            /** The district or neighbourhood name. */
            district?: string;
            /** The street name. */
            street?: string;
            /** The house or building number. */
            houseNumber?: string;
            /** The postal or ZIP code. */
            postalCode?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
  }
}
