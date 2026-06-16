import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get sunrise, sunset, moonrise, moonset, and moon phase data for a location. */
    "ipgeolocation_io.get_astronomy": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up.
         * @minLength 1
         * @pattern \S
         */
        ip?: string;
        /**
         * The latitude coordinate.
         * @minimum -90
         * @maximum 90
         */
        lat?: number;
        /**
         * The longitude coordinate.
         * @minimum -180
         * @maximum 180
         */
        long?: number;
        /**
         * The location string accepted by IPGeolocation.io.
         * @minLength 1
         * @pattern \S
         */
        location?: string;
        /**
         * The date to use for astronomy data in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
      };
      output: {
        /** The normalized IPGeolocation.io astronomy result. */
        astronomy: {
          /** The raw object returned by IPGeolocation.io. */
          location: Record<string, unknown> | null;
          /** The date used for the astronomy result. */
          date: string | null;
          /** The current local time returned by IPGeolocation.io. */
          currentTime: string | null;
          /** The sunrise time. */
          sunrise: string | null;
          /** The sunset time. */
          sunset: string | null;
          /** The current sun status when returned. */
          sunStatus: string | null;
          /** The solar noon time. */
          solarNoon: string | null;
          /** The day length. */
          dayLength: string | null;
          /** The moonrise time. */
          moonrise: string | null;
          /** The moonset time. */
          moonset: string | null;
          /** The current moon status when returned. */
          moonStatus: string | null;
          /** The moon phase name. */
          moonPhase: string | null;
          /** The moon illumination percentage when returned. */
          moonIlluminationPercentage: number | null;
          /** The moon angle when returned. */
          moonAngle: number | null;
          /** The raw object returned by IPGeolocation.io. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get time zone information by IP address, coordinates, location, or time zone name. */
    "ipgeolocation_io.get_timezone": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up.
         * @minLength 1
         * @pattern \S
         */
        ip?: string;
        /**
         * The latitude coordinate.
         * @minimum -90
         * @maximum 90
         */
        lat?: number;
        /**
         * The longitude coordinate.
         * @minimum -180
         * @maximum 180
         */
        long?: number;
        /**
         * The location string accepted by IPGeolocation.io.
         * @minLength 1
         * @pattern \S
         */
        location?: string;
        /**
         * The IANA time zone name.
         * @minLength 1
         * @pattern \S
         */
        timeZone?: string;
      };
      output: {
        /** The normalized IPGeolocation.io time zone result. */
        timeZone: {
          /** The IANA time zone name. */
          timeZone: string | null;
          /** The date returned by IPGeolocation.io. */
          date: string | null;
          /** The local date and time string. */
          dateTime: string | null;
          /** The formatted local date and time text. */
          dateTimeTxt: string | null;
          /** The local date and time with time zone information. */
          dateTimeWti: string | null;
          /** The local date in YYYY-MM-DD format. */
          dateTimeYmd: string | null;
          /** The local date and time as a Unix timestamp when returned. */
          dateTimeUnix: number | null;
          /** The 24-hour local time string. */
          time24: string | null;
          /** The 12-hour local time string. */
          time12: string | null;
          /** The week number. */
          week: number | null;
          /** The month number. */
          month: number | null;
          /** The year. */
          year: number | null;
          /** The abbreviated year. */
          yearAbbr: string | null;
          /** Whether daylight saving time is active. */
          isDst: boolean | null;
          /** The daylight saving time offset in seconds. */
          dstSavings: number | null;
          /** The raw object returned by IPGeolocation.io. */
          geo: Record<string, unknown> | null;
          /** The raw object returned by IPGeolocation.io. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Look up IP geolocation data with optional field controls. */
    "ipgeolocation_io.lookup_ip": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up.
         * @minLength 1
         * @pattern \S
         */
        ip?: string;
        /**
         * Specific response fields to request from IPGeolocation.io.
         * @minItems 1
         */
        fields?: Array<string>;
        /**
         * Specific response fields to exclude from the IPGeolocation.io response.
         * @minItems 1
         */
        excludes?: Array<string>;
        /** Whether to include hostname data in the geolocation response. */
        includeHostname?: boolean;
        /** Whether to include geo accuracy fields in the geolocation response. */
        includeGeoAccuracy?: boolean;
        /** Whether to include DMA code fields in the geolocation response. */
        includeDmaCode?: boolean;
        /** Whether to include security threat intelligence fields. */
        includeSecurity?: boolean;
        /** Whether to include abuse contact fields. */
        includeAbuse?: boolean;
        /** Whether to include user-agent derived fields when supported. */
        includeUserAgent?: boolean;
      };
      output: {
        /** The normalized IP geolocation result. */
        geolocation: {
          /** The queried IP address. */
          ip: string | null;
          /** The hostname associated with the IP address when returned. */
          hostname: string | null;
          /** The continent code. */
          continentCode: string | null;
          /** The continent name. */
          continentName: string | null;
          /** The ISO 3166-1 alpha-2 country code. */
          countryCode2: string | null;
          /** The ISO 3166-1 alpha-3 country code. */
          countryCode3: string | null;
          /** The country name. */
          countryName: string | null;
          /** The state or province name. */
          stateProvince: string | null;
          /** The district name. */
          district: string | null;
          /** The city name. */
          city: string | null;
          /** The postal code. */
          zipcode: string | null;
          /** The latitude returned by IPGeolocation.io. */
          latitude: number | null;
          /** The longitude returned by IPGeolocation.io. */
          longitude: number | null;
          /** The international calling code. */
          callingCode: string | null;
          /** The country flag URL or emoji field returned by IPGeolocation.io. */
          countryFlag: string | null;
          /** The raw object returned by IPGeolocation.io. */
          countryMetadata: Record<string, unknown> | null;
          /** The raw object returned by IPGeolocation.io. */
          network: Record<string, unknown> | null;
          /** The raw object returned by IPGeolocation.io. */
          asn: Record<string, unknown> | null;
          /** The raw object returned by IPGeolocation.io. */
          company: Record<string, unknown> | null;
          /** The raw object returned by IPGeolocation.io. */
          timeZone: Record<string, unknown> | null;
          /** The raw object returned by IPGeolocation.io. */
          currency: Record<string, unknown> | null;
          /** The raw object returned by IPGeolocation.io. */
          security: Record<string, unknown> | null;
          /** The raw object returned by IPGeolocation.io. */
          abuse: Record<string, unknown> | null;
          /** The raw object returned by IPGeolocation.io. */
          userAgent: Record<string, unknown> | null;
          /** The raw object returned by IPGeolocation.io. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
