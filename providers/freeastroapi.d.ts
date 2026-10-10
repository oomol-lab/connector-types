import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Analyze traditional BaZi and TCM constitution tendencies and timing patterns; this is not medical advice, diagnosis, or treatment. */
    "freeastroapi.analyze_bazi_constitution": {
      input: {
        /**
         * A non-empty city name.
         * @minLength 1
         * @pattern \S
         */
        city: string;
        [key: string]: unknown;
      } | {
        /** Explicit latitude. */
        latitude: number;
        /** Explicit longitude. */
        longitude: number;
        [key: string]: unknown;
      };
      output: {
        /** Complete traditional constitution analysis, including the upstream disclaimer and model transparency fields. */
        analysis: Record<string, unknown>;
      };
    };
    /** Calculate a complete BaZi chart with four pillars, Day Master, Ten Gods, luck cycles, and optional professional analysis. */
    "freeastroapi.calculate_bazi": {
      input: {
        /**
         * A non-empty city name.
         * @minLength 1
         * @pattern \S
         */
        city: string;
        [key: string]: unknown;
      } | {
        /** Explicit latitude. */
        latitude: number;
        /** Explicit longitude. */
        longitude: number;
        [key: string]: unknown;
      };
      output: {
        /** Complete BaZi chart returned by FreeAstroAPI, including optional and future fields. */
        chart: Record<string, unknown>;
      };
    };
    /** Calculate annual and monthly BaZi flow pillars, interactions, and stars for one prediction year, with optional timezone and solar-time settings. */
    "freeastroapi.calculate_bazi_flow": {
      input: {
        /**
         * A non-empty city name.
         * @minLength 1
         * @pattern \S
         */
        city: string;
        [key: string]: unknown;
      } | {
        /** Explicit latitude. */
        latitude: number;
        /** Explicit longitude. */
        longitude: number;
        [key: string]: unknown;
      };
      output: {
        /** Annual and monthly flow data, including any returned x_dict mapping. */
        flow: Record<string, unknown>;
      };
    };
    /** Calculate traditional Neijing Jing, Qi, and Shen age trajectories with BaZi luck-cycle adjustments. */
    "freeastroapi.calculate_bazi_life_curve": {
      input: {
        /**
         * A non-empty city name.
         * @minLength 1
         * @pattern \S
         */
        city: string;
        [key: string]: unknown;
      } | {
        /** Explicit latitude. */
        latitude: number;
        /** Explicit longitude. */
        longitude: number;
        [key: string]: unknown;
      };
      output: {
        /** Complete traditional life curve and model metadata returned by FreeAstroAPI. */
        lifeCurve: Record<string, unknown>;
      };
    };
    /** Analyze compatibility between two BaZi charts with independent calendar and time settings. */
    "freeastroapi.calculate_bazi_synastry": {
      input: {
        /** Complete birth data and BaZi calculation options. */
        personA: {
          /**
           * A non-empty city name.
           * @minLength 1
           * @pattern \S
           */
          city: string;
          [key: string]: unknown;
        } | {
          /** Explicit latitude. */
          latitude: number;
          /** Explicit longitude. */
          longitude: number;
          [key: string]: unknown;
        };
        /** Complete birth data and BaZi calculation options. */
        personB: {
          /**
           * A non-empty city name.
           * @minLength 1
           * @pattern \S
           */
          city: string;
          [key: string]: unknown;
        } | {
          /** Explicit latitude. */
          latitude: number;
          /** Explicit longitude. */
          longitude: number;
          [key: string]: unknown;
        };
        /**
         * Response language. Defaults to en; use zh-CN for Simplified Chinese.
         * @minLength 1
         */
        language?: string;
        /**
         * Optional idempotency key. Reuse only when retrying the exact same POST request after a network failure.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Complete BaZi compatibility analysis returned by FreeAstroAPI. */
        compatibility: Record<string, unknown>;
      };
    };
    /** Calculate celestial positions at an instant or over a date range, including optional aspects, houses, angles, fixed stars, Moon void-of-course data, and table outputs. */
    "freeastroapi.calculate_ephemeris": {
      input: {
        /**
         * ISO 8601 date or datetime, with an optional UTC offset. Dates expand to offset-free midnight. The endpoint docs do not define timezone-free datetime parsing.
         * @minLength 1
         * @pattern \S
         */
        start: string;
        /**
         * Optional ISO end date or datetime. Must not precede start.
         * @minLength 1
         * @pattern \S
         */
        end?: string;
        /**
         * Positive whole minute/hour/day step such as 5m, 1h, or 1d. Defaults to 1d.
         * @minLength 1
         * @pattern \S
         */
        step?: string;
        /**
         * City or locality name for location lookup.
         * @minLength 1
         * @maxLength 200
         * @pattern \S
         */
        city?: string;
        /**
         * Latitude in degrees.
         * @minimum -90
         * @maximum 90
         */
        latitude?: number;
        /**
         * Longitude in degrees.
         * @minimum -180
         * @maximum 180
         */
        longitude?: number;
        /**
         * IANA timezone or AUTO for automatic resolution. Defaults to AUTO.
         * @minLength 1
         * @pattern \S
         */
        timezone?: string;
        /** Requested celestial bodies or points using official names. */
        bodies?: Array<string>;
        /** Response layout. Defaults to json. */
        format?: "json" | "table";
        /** Table style; grid is capped at 31 rows. */
        tableStyle?: "rows" | "columns" | "grid";
        /** Zodiac system. Defaults to tropical. */
        zodiacType?: "tropical" | "sidereal";
        /**
         * Sidereal ayanamsa when using the sidereal zodiac.
         * @minLength 1
         * @pattern \S
         */
        siderealAyanamsa?: string;
        /**
         * House system for houses and angles. Defaults to placidus.
         * @minLength 1
         * @pattern \S
         */
        houseSystem?: string;
        /** Include aspects for every snapshot. */
        includeAspects?: boolean;
        /** Include minor aspect types. */
        includeMinorAspects?: boolean;
        /** Include Moon void-of-course state and next sign ingress and applying aspect. */
        includeMoonVoidOfCourse?: boolean;
        /** Include the default fixed star set. */
        includeFixedStars?: boolean;
        /** Optional explicit fixed star names. */
        fixedStars?: Array<string>;
        /** Include houses; auto-enabled upstream when coordinates are available unless explicitly false. */
        includeHouses?: boolean;
        /** Include angles; auto-enabled upstream when coordinates are available unless explicitly false. */
        includeAngles?: boolean;
        /**
         * Optional idempotency key. Reuse only when retrying the exact same POST request after a network failure.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Complete ephemeris response, preserving snapshot, range, and table layouts. */
        ephemeris: Record<string, unknown>;
      };
    };
    /** Calculate a Pythagorean, Chaldean, Kabbalah/Gematria, or Ank Jyotish profile with method-specific name, date, transliteration, and optional interpretation settings. */
    "freeastroapi.calculate_numerology_profile": {
      input: (unknown) & (unknown);
      output: {
        /** Complete numerology profile, including resolved method policies, provenance, optional interpretations, and nonfatal warnings. */
        profile: Record<string, unknown>;
      };
    };
    /** Calculate transit-to-natal intervals for a calendar month or a long-cycle range up to 366 days, with configurable planets, points, aspects, and orbs. Requires a High plan. */
    "freeastroapi.calculate_transit_timeline": {
      input: {
        /** Natal reference chart; provide the birth city and coordinates. Supply hour when birth time is known. */
        natal: {
          /**
           * Year of birth or the date to calculate.
           * @minimum 1
           */
          year: number;
          /**
           * Month number.
           * @minimum 1
           * @maximum 12
           */
          month: number;
          /**
           * Day of month.
           * @minimum 1
           * @maximum 31
           */
          day: number;
          /**
           * Birth hour, required for angle-sensitive timelines when birth time is known.
           * @minimum 0
           * @maximum 23
           */
          hour?: number;
          /**
           * Birth minute.
           * @minimum 0
           * @maximum 59
           */
          minute?: number;
          /**
           * City or locality name for location lookup.
           * @minLength 1
           * @maxLength 200
           * @pattern \S
           */
          city: string;
          /**
           * Latitude in degrees.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * Longitude in degrees.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /** Optional display name for the chart owner. */
          name?: string;
          /** Whether birth time is known. Set false to omit angle-based calculations. */
          timeKnown?: boolean;
          /**
           * IANA timezone or AUTO for automatic resolution. Defaults to AUTO.
           * @minLength 1
           * @pattern \S
           */
          timezone?: string;
          /** Zodiac system. Defaults to tropical. */
          zodiacType?: "tropical" | "sidereal";
          /** Sidereal ayanamsa for the natal and transit calculations. */
          siderealAyanamsa?: "lahiri" | "raman" | "kp" | "fagan_bradley" | "yukteshwar";
        };
        /**
         * Range start as an ISO date or datetime. Date-only values use 00:00:00Z.
         * @minLength 1
         * @pattern \S
         */
        rangeStart: string;
        /**
         * Range end as an ISO date or datetime. Date-only values use 23:59:59Z.
         * @minLength 1
         * @pattern \S
         */
        rangeEnd: string;
        /** Timeline mode. Defaults to month; year_slow accepts medium and slow bodies across up to 366 days. */
        mode?: "month" | "year_slow";
        /** Include natal and transit house context when available. */
        includeHouses?: boolean;
        /** Transit category filter. In year_slow mode use medium, slow, or both. */
        transitCategories?: Array<"fast" | "medium" | "slow" | "all">;
        /** Official transit planet keys, including nodes, Chiron, and Lilith variants. */
        transitPlanets?: Array<string>;
        /** Official natal point keys, including nodes and angle-derived points when birth time is known. */
        natalPoints?: Array<string>;
        /** Aspect type filter. Defaults to the five major aspects. */
        aspectTypes?: Array<string>;
        /** Orb override policy. Planet overrides take precedence over category and aspect overrides. */
        orbSettings?: {
          /**
           * Conjunction orb in degrees.
           * @minimum 0
           */
          conjunction?: number;
          /**
           * Sextile orb in degrees.
           * @minimum 0
           */
          sextile?: number;
          /**
           * Square orb in degrees.
           * @minimum 0
           */
          square?: number;
          /**
           * Trine orb in degrees.
           * @minimum 0
           */
          trine?: number;
          /**
           * Opposition orb in degrees.
           * @minimum 0
           */
          opposition?: number;
          /** Aspect names mapped to orb values in degrees; default sets the fallback orb. */
          byAspect?: Record<string, number>;
          /** Category-specific orb overrides. */
          byCategory?: {
            /** Aspect names mapped to orb values in degrees; default sets the fallback orb. */
            fast?: Record<string, number>;
            /** Aspect names mapped to orb values in degrees; default sets the fallback orb. */
            medium?: Record<string, number>;
            /** Aspect names mapped to orb values in degrees; default sets the fallback orb. */
            slow?: Record<string, number>;
          };
          /** Transit planet keys mapped to orb overrides. */
          byPlanet?: Record<string, Record<string, number>>;
          [key: string]: number | Record<string, number> | {
            /** Aspect names mapped to orb values in degrees; default sets the fallback orb. */
            fast?: Record<string, number>;
            /** Aspect names mapped to orb values in degrees; default sets the fallback orb. */
            medium?: Record<string, number>;
            /** Aspect names mapped to orb values in degrees; default sets the fallback orb. */
            slow?: Record<string, number>;
          } | Record<string, Record<string, number>> | undefined;
        };
        /**
         * Optional idempotency key. Reuse only when retrying the exact same POST request after a network failure.
         * @minLength 1
         */
        idempotencyKey?: string;
      };
      output: {
        /** Complete timeline, retaining true interval boundaries and month-clipped display fields. */
        timeline: Record<string, unknown>;
      };
    };
    /** Run the V2 integrated Vedic calculation with optional divisional charts, Dasha, Yogas, Panchang, Shadbala, Ashtakavarga, and Avastha. */
    "freeastroapi.calculate_vedic_chart": {
      input: {
        /**
         * A non-empty city name.
         * @minLength 1
         * @pattern \S
         */
        city: string;
        [key: string]: unknown;
      } | {
        /** Explicit latitude. */
        latitude: number;
        /** Explicit longitude. */
        longitude: number;
        [key: string]: unknown;
      };
      output: {
        /** Complete V2 Vedic calculation with all requested component results and ruleset metadata. */
        calculation: Record<string, unknown>;
      };
    };
    /** Convert local civil time to local mean and relative or absolute true solar time. */
    "freeastroapi.correct_bazi_time": {
      input: {
        /**
         * A non-empty city name.
         * @minLength 1
         * @pattern \S
         */
        city: string;
        [key: string]: unknown;
      } | {
        /** Explicit latitude. */
        latitude: number;
        /** Explicit longitude. */
        longitude: number;
        [key: string]: unknown;
      };
      output: {
        /** Solar time correction details returned by FreeAstroAPI. */
        correction: Record<string, unknown>;
      };
    };
    /** Get the stable ID mappings for BaZi interactions and symbolic stars. */
    "freeastroapi.get_bazi_dictionary": {
      input: {
        /**
         * Response language. Defaults to en; use zh-CN for Simplified Chinese.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Complete BaZi ID dictionary returned by FreeAstroAPI. */
        dictionary: Record<string, unknown>;
      };
    };
    /** Convert a Gregorian date to the Chinese lunar calendar, zodiac, solar terms, and festivals. */
    "freeastroapi.get_chinese_calendar": {
      input: {
        /**
         * Gregorian date in YYYY-MM-DD format.
         * @format date
         */
        date: string;
        /**
         * Response language. Defaults to en; use zh-CN for Simplified Chinese.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Complete Chinese calendar conversion returned by FreeAstroAPI. */
        calendar: Record<string, unknown>;
      };
    };
    /** Get the four pillars and element balance at the current UTC instant. */
    "freeastroapi.get_current_pillars": {
      input: {
        /**
         * Response language. Defaults to en; use zh-CN for Simplified Chinese.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Current timestamp, date, pillars, Day Master, and element balance returned by FreeAstroAPI. */
        pillars: Record<string, unknown>;
      };
    };
    /** Get a complete monthly moon calendar with optional SVG visuals, eclipses, forecasts, sign intervals, and ingress events. Requires an Entry or High plan. */
    "freeastroapi.get_moon_calendar": {
      input: {
        /**
         * Four-digit calendar year.
         * @minimum 1
         * @maximum 9999
         */
        year: number;
        /**
         * Month number.
         * @minimum 1
         * @maximum 12
         */
        month: number;
        /**
         * City or locality name for location lookup.
         * @minLength 1
         * @maxLength 200
         * @pattern \S
         */
        city?: string;
        /**
         * Latitude in degrees.
         * @minimum -90
         * @maximum 90
         */
        latitude?: number;
        /**
         * Longitude in degrees.
         * @minimum -180
         * @maximum 180
         */
        longitude?: number;
        /**
         * IANA timezone or AUTO for automatic resolution. Defaults to AUTO.
         * @minLength 1
         * @pattern \S
         */
        timezone?: string;
        /** Include the Moon's tropical zodiac sign. Defaults to false. */
        includeZodiac?: boolean;
        /** Include the moon SVG and shadow ratio. Defaults to false. */
        includeVisuals?: boolean;
        /** Include special moon labels such as supermoon and harvest moon. Defaults to false. */
        includeSpecial?: boolean;
        /** Include nearby solar or lunar eclipse details and local visibility when a location is provided. Defaults to false. */
        includeEclipse?: boolean;
        /** Include next moon phases, lunar eclipse, and solar eclipse forecasts. Defaults to false. */
        includeForecast?: boolean;
        /** Include traditional North American full moon names. Defaults to false. */
        includeTraditionalMoon?: boolean;
        /**
         * Hex color for illuminated moon SVG fill. Defaults to #E0E0E0.
         * @minLength 1
         * @pattern \S
         */
        moonColor?: string;
        /**
         * Hex color for moon SVG shadow. Defaults to #1A1A1A.
         * @minLength 1
         * @pattern \S
         */
        shadowColor?: string;
        /** Include sign intervals and ingress events for the month. Defaults to false. */
        includeSignTimeline?: boolean;
      };
      output: {
        /** Complete monthly moon calendar, daily snapshots, and any sign timeline and ingress events. */
        calendar: Record<string, unknown>;
      };
    };
    /** Get moon phase, illumination, and optional zodiac, rise/set, eclipse, forecasts, interpretation, and SVG visuals for a date or the current instant. */
    "freeastroapi.get_moon_phase": {
      input: {
        /**
         * ISO date or datetime, or now. Defaults to the current instant.
         * @minLength 1
         * @pattern \S
         */
        date?: string;
        /**
         * City or locality name for location lookup.
         * @minLength 1
         * @maxLength 200
         * @pattern \S
         */
        city?: string;
        /**
         * Latitude in degrees.
         * @minimum -90
         * @maximum 90
         */
        latitude?: number;
        /**
         * Longitude in degrees.
         * @minimum -180
         * @maximum 180
         */
        longitude?: number;
        /**
         * IANA timezone or AUTO for automatic resolution. Defaults to AUTO.
         * @minLength 1
         * @pattern \S
         */
        timezone?: string;
        /** Include the Moon's tropical zodiac sign. Defaults to false. */
        includeZodiac?: boolean;
        /** Include the moon SVG and shadow ratio. Defaults to false. */
        includeVisuals?: boolean;
        /** Include special moon labels such as supermoon and harvest moon. Defaults to false. */
        includeSpecial?: boolean;
        /** Include nearby solar or lunar eclipse details and local visibility when a location is provided. Defaults to false. */
        includeEclipse?: boolean;
        /** Include next moon phases, lunar eclipse, and solar eclipse forecasts. Defaults to false. */
        includeForecast?: boolean;
        /** Include traditional North American full moon names. Defaults to false. */
        includeTraditionalMoon?: boolean;
        /**
         * Hex color for illuminated moon SVG fill. Defaults to #E0E0E0.
         * @minLength 1
         * @pattern \S
         */
        moonColor?: string;
        /**
         * Hex color for moon SVG shadow. Defaults to #1A1A1A.
         * @minLength 1
         * @pattern \S
         */
        shadowColor?: string;
        /** Include moon rise and set times; requires a city or paired coordinates. Defaults to false. */
        includeRiseSet?: boolean;
        /** Include the optional Moon sign, phase, and decan interpretation. Defaults to false. */
        includeInterpretation?: boolean;
      };
      output: {
        /** Complete moon phase data and all requested optional results. */
        moon: Record<string, unknown>;
      };
    };
    /** Get planetary ingresses, exact aspects, stations, and lunations for a local calendar date. This returns event data for downstream notifications. */
    "freeastroapi.list_sky_events": {
      input: {
        /**
         * Gregorian calendar date in YYYY-MM-DD format.
         * @format date
         */
        date: string;
        /**
         * IANA timezone defining local-day boundaries. Defaults to UTC.
         * @minLength 1
         * @pattern \S
         */
        timezone?: string;
        /** Event-volume preset. Explicit include flags override the preset. Defaults to quiet. */
        preset?: "quiet" | "daily" | "full";
        /** Include Moon sign ingress events. */
        includeMoon?: boolean;
        /** Include exact major planetary aspects. */
        includeExactHits?: boolean;
        /** Include exact Moon aspects. */
        includeMoonExactHits?: boolean;
        /** Include non-Moon planetary ingresses. */
        includeIngresses?: boolean;
        /** Include retrograde and direct stations. */
        includeRetrogrades?: boolean;
        /** Include new and full moons. */
        includeLunations?: boolean;
        /** Include deterministic notification phrases. */
        includeFormulation?: boolean;
      };
      output: {
        /** Complete sky event feed with metadata, timestamps, and optional notification phrases. */
        events: Record<string, unknown>;
      };
    };
    /** Search cities and localities, including province-qualified queries, and return coordinates and IANA timezones for subsequent chart calculations. */
    "freeastroapi.search_cities": {
      input: {
        /**
         * City-name prefix or a city and province query such as Jingzhou, Hubei. At least two characters.
         * @minLength 2
         * @maxLength 100
         */
        query: string;
        /**
         * Optional ISO 3166-1 alpha-2 country filter.
         * @pattern ^[A-Z]{2}$
         */
        country?: string;
        /**
         * Maximum number of results. Defaults to 10; queries shorter than four characters are capped upstream at five.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
      };
      output: {
        /** Matching cities in upstream result order. */
        cities: Array<{
          /** City or locality name. */
          name: string;
          /** Country code. */
          country: string;
          /** State or province when available. */
          state: string | null;
          /** Indian district when available. */
          district: string | null;
          /**
           * Latitude in degrees.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * Longitude in degrees.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /** IANA timezone when available. */
          timezone: string | null;
          /** Population used by the upstream search ranking. */
          population: number | null;
          /** Complete upstream city record, including future fields. */
          raw: Record<string, unknown>;
        }>;
        /** Number of returned city results. */
        count: number;
        /** Complete upstream search response, including future fields. */
        raw: Record<string, unknown>;
      };
    };
  }
}
