import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Calculate age details from a date of birth using APIVerve Age Calculator. */
    "apiverve.calculate_age": {
      input: {
        /**
         * The date of birth to calculate from in YYYY-MM-DD format.
         * @format date
         */
        dob: string;
      };
      output: {
        /** The date of birth returned by APIVerve. */
        dob: string;
        /** The age breakdown returned by APIVerve. */
        ageBreakdown: {
          /** The number of years returned by APIVerve. */
          years: number;
          /** The number of months returned by APIVerve. */
          months: number;
          /** The number of weeks returned by APIVerve. */
          weeks: number;
          /** The number of days returned by APIVerve. */
          days: number;
          /** The number of hours returned by APIVerve. */
          hours: number;
          /** The number of minutes returned by APIVerve. */
          minutes: number;
          /** The number of seconds returned by APIVerve. */
          seconds: number;
        };
        /** Age wording returned by APIVerve. */
        ageWords: {
          /** The age in words returned by APIVerve. */
          years: string;
          /** The ordinal age in words returned by APIVerve. */
          ordinal: string;
          /** The full age phrase returned by APIVerve. */
          full: string;
          /** The locale used by APIVerve for age words. */
          locale: string;
        };
        /** The timezone used by APIVerve. */
        timezone: string;
        /** The locale used by APIVerve. */
        locale: string;
        /** The time remaining until the next birthday returned by APIVerve. */
        nextBirthday: {
          /** The number of months until the next birthday. */
          months: number;
          /** The number of weeks until the next birthday. */
          weeks: number;
          /** The number of days until the next birthday. */
          days: number;
          /** The number of hours until the next birthday. */
          hours: number;
          /** The number of minutes until the next birthday. */
          minutes: number;
          /** The number of seconds until the next birthday. */
          seconds: number;
        };
        /** Age insight fields returned by APIVerve. */
        insights: {
          /** The generation returned by APIVerve. */
          generation: string | null;
          /** The zodiac sign returned by APIVerve. */
          zodiacSign: string | null;
          /** The Chinese zodiac sign returned by APIVerve. */
          chineseZodiac: string | null;
          /** The birthstone returned by APIVerve. */
          birthstone: string | null;
          /** The day of week born returned by APIVerve. */
          dayOfWeekBorn: string | null;
          /** Whether the birth year is a leap year according to APIVerve. */
          isLeapYearBirth: boolean | null;
          /** Age milestone flags returned by APIVerve. */
          milestones: {
            /** Whether the age can vote in the US. */
            canVoteUS: boolean | null;
            /** Whether the age can drink in the US. */
            canDrinkUS: boolean | null;
            /** Whether the age can rent a car in the US. */
            canRentCarUS: boolean | null;
            /** Whether the age qualifies for senior discounts. */
            seniorDiscount: boolean | null;
          };
        };
      };
    };
    /** Convert an amount between currencies using APIVerve Currency Converter. */
    "apiverve.convert_currency": {
      input: {
        /**
         * The amount to convert.
         * @minimum 0
         */
        value: number;
        /** The ISO 4217 currency code to convert from. */
        from: string;
        /** The ISO 4217 currency code to convert to. */
        to: string;
      };
      output: {
        /** The source currency code returned by APIVerve. */
        from: string;
        /** The destination currency code returned by APIVerve. */
        to: string;
        /** The source amount returned by APIVerve. */
        value: number;
        /** The converted amount returned by APIVerve. */
        convertedValue: number;
        /** The exchange rate returned by APIVerve. */
        rate: number;
        /** The 24-hour rate change returned by APIVerve. */
        change24h: number | null;
        /** The 24-hour percentage rate change returned by APIVerve. */
        change24hPct: number | null;
        /** The 24-hour change direction returned by APIVerve. */
        changeDirection: string | null;
        /** The 24-hour high rate returned by APIVerve. */
        high24h: number | null;
        /** The 24-hour low rate returned by APIVerve. */
        low24h: number | null;
      };
    };
    /** Find antonyms for a word using APIVerve Antonym Finder. */
    "apiverve.find_antonyms": {
      input: {
        /**
         * The word to get antonyms for.
         * @minLength 1
         */
        word: string;
      };
      output: {
        /** The queried word returned by APIVerve. */
        word: string;
        /** The language code returned by APIVerve. */
        language: string | null;
        /** The antonyms returned by APIVerve. */
        antonyms: Array<string>;
      };
    };
    /** Generate a random piece of advice using APIVerve Advice Generator. */
    "apiverve.generate_advice": {
      input: Record<string, never>;
      output: {
        /** The APIVerve advice identifier. */
        id: string;
        /** The advice text returned by APIVerve. */
        advice: string;
        /** The language code of the advice. */
        lang: string;
      };
    };
    /** Get current air quality by city or ZIP code using APIVerve Air Quality. */
    "apiverve.get_air_quality": {
      input: {
        /**
         * The city name for which you want to get air quality data.
         * @minLength 1
         */
        city?: string;
        /**
         * The ZIP code for which you want to get air quality data.
         * @minLength 1
         */
        zip?: string;
      };
      output: {
        /** PM2.5 value returned by APIVerve. */
        pm25: number;
        /** PM10 value returned by APIVerve. */
        pm10: number;
        /** Carbon monoxide value returned by APIVerve. */
        carbonMonoxide: number;
        /** Ozone value returned by APIVerve. */
        ozone: number;
        /** Nitrogen dioxide value returned by APIVerve. */
        nitrogenDioxide: number;
        /** Sulfur dioxide value returned by APIVerve. */
        sulfurDioxide: number;
        /** US EPA air quality index returned by APIVerve. */
        usEpaIndex: number;
        /** GB DEFRA air quality index returned by APIVerve. */
        gbDefraIndex: number;
        /** Health recommendation returned by APIVerve. */
        recommendation: string;
        /** City name returned by APIVerve when present. */
        city: string | null;
      };
    };
    /** Get distance and flight estimates between two airports using IATA codes. */
    "apiverve.get_airport_distance": {
      input: {
        /** The IATA code of the first airport. */
        iata1: string;
        /** The IATA code of the second airport. */
        iata2: string;
      };
      output: {
        /** Distance in miles returned by APIVerve. */
        distanceMiles: number;
        /** Distance in kilometers returned by APIVerve. */
        distanceKm: number;
        /** Distance in nautical miles returned by APIVerve. */
        distanceNauticalMiles: number;
        /** Estimated flight time returned by APIVerve. */
        estimatedFlightTime: string;
        /** Timezone difference in hours returned by APIVerve. */
        timezoneDiffHours: number | null;
        /** Bearing in degrees returned by APIVerve. */
        bearing: number | null;
        /** Compass direction returned by APIVerve. */
        direction: string | null;
        /** Whether APIVerve marks the route as international. */
        isInternational: boolean | null;
        /** Estimated carbon emissions in kilograms returned by APIVerve. */
        carbonEstimateKg: number | null;
        /** The first airport returned by APIVerve. */
        airport1: {
          /** Airport name returned by APIVerve. */
          name: string;
          /** Airport IATA code returned by APIVerve. */
          iata: string;
          /** Airport ICAO code returned by APIVerve. */
          icao: string;
          /** Airport city returned by APIVerve. */
          city: string;
          /** Airport state or region returned by APIVerve. */
          state: string | null;
          /** Airport country code returned by APIVerve. */
          country: string;
          /** Airport elevation returned by APIVerve. */
          elevation: number | null;
          /** Airport latitude returned by APIVerve. */
          latitude: number;
          /** Airport longitude returned by APIVerve. */
          longitude: number;
          /** Airport timezone returned by APIVerve. */
          timezone: string | null;
        };
        /** The second airport returned by APIVerve. */
        airport2: {
          /** Airport name returned by APIVerve. */
          name: string;
          /** Airport IATA code returned by APIVerve. */
          iata: string;
          /** Airport ICAO code returned by APIVerve. */
          icao: string;
          /** Airport city returned by APIVerve. */
          city: string;
          /** Airport state or region returned by APIVerve. */
          state: string | null;
          /** Airport country code returned by APIVerve. */
          country: string;
          /** Airport elevation returned by APIVerve. */
          elevation: number | null;
          /** Airport latitude returned by APIVerve. */
          latitude: number;
          /** Airport longitude returned by APIVerve. */
          longitude: number;
          /** Airport timezone returned by APIVerve. */
          timezone: string | null;
        };
      };
    };
    /** Get definitions for a word using APIVerve Dictionary. */
    "apiverve.get_word_definition": {
      input: {
        /**
         * The word for which you want to get the definition.
         * @minLength 1
         */
        word: string;
      };
      output: {
        /** The word that was defined. */
        word: string;
        /** The number of definitions returned. */
        definitionCount: number;
        /** The definitions returned by APIVerve. */
        definitions: Array<string>;
      };
    };
    /** Look up airlines by name or IATA code using APIVerve Airline Lookup. */
    "apiverve.lookup_airlines": {
      input: {
        /**
         * The airline name to search for.
         * @minLength 1
         */
        name?: string;
        /** The IATA code of the airline to look up. */
        iata?: string;
      };
      output: {
        /** The airlines returned by APIVerve. */
        airlines: Array<{
          /** Airline name returned by APIVerve. */
          name: string;
          /** Airline alias returned by APIVerve when present. */
          alias: string | null;
          /** Airline IATA code returned by APIVerve. */
          iata: string | null;
          /** Airline ICAO code returned by APIVerve. */
          icao: string | null;
          /** Airline callsign returned by APIVerve. */
          callsign: string | null;
          /** Airline country returned by APIVerve. */
          country: string | null;
          /** Airline identifier returned by APIVerve. */
          id: string | null;
          /** Whether APIVerve marks the airline as low cost. */
          isLowCost: boolean | null;
          /** Airline logo URL returned by APIVerve when present. */
          logoUrl: string | null;
          /** The raw airline object returned by APIVerve. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Look up airport information by IATA code using APIVerve Airports Lookup. */
    "apiverve.lookup_airport": {
      input: {
        /** The IATA code of the airport to look up. */
        iata: string;
      };
      output: {
        /** Airport ICAO code returned by APIVerve. */
        icao: string;
        /** Airport IATA code returned by APIVerve. */
        iata: string;
        /** Airport name returned by APIVerve. */
        name: string;
        /** Airport city returned by APIVerve. */
        city: string;
        /** Airport state or region returned by APIVerve. */
        state: string | null;
        /** Airport country code returned by APIVerve. */
        country: string;
        /** Airport elevation returned by APIVerve. */
        elevation: number | null;
        /** Airport latitude returned by APIVerve. */
        latitude: number;
        /** Airport longitude returned by APIVerve. */
        longitude: number;
        /** Airport timezone returned by APIVerve. */
        timezone: string | null;
        /** City metadata returned by APIVerve when present. */
        cityInfo: {
          /** City name returned by APIVerve. */
          name: string;
          /** Alternative city name returned by APIVerve. */
          altName: string | null;
          /** City country code returned by APIVerve. */
          country: string;
        } | null;
        /** The raw airport object returned by APIVerve. */
        raw: Record<string, unknown>;
      };
    };
  }
}
