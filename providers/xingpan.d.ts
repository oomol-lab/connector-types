import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Calculate a comparison chart for two people, including both planetary sets and their relationship to the houses. */
    "xingpan.calculate_comparison_chart": {
      input: {
        /**
         * The two people's birth details in the requested order; their order affects comparison charts.
         * @minItems 2
         * @maxItems 2
         */
        people: Array<{
          /**
           * Local birth date and time in YYYY-MM-DD HH:mm or YYYY-MM-DD HH:mm:ss format.
           * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(:\d{2})?$
           */
          birthday: string;
          /**
           * Birthplace longitude in degrees, positive east and negative west.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /**
           * Birthplace latitude in degrees, positive north and negative south.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * UTC offset in hours at this local date and time, including historical daylight saving time. Omit to look it up from Xingpan; an explicit value, including 0, is preserved.
           * @minimum -14
           * @maximum 14
           */
          timezone?: number;
        }>;
        /**
         * Planet IDs from get_chart_config; defaults to the Sun, Moon, and eight other major planets (0 through 9).
         * @minItems 1
         * @default ["0","1","2","3","4","5","6","7","8","9"]
         */
        planets?: Array<string>;
        /** Additional asteroid IDs from get_chart_config, such as xs433 for Eros. */
        asteroids?: Array<string>;
        /** Virtual point IDs from get_chart_config, such as 10 for the Ascendant. */
        virtualPoints?: Array<string>;
        /**
         * House system code; defaults to K (Koch). Other systems include P (Placidus) and W (Whole sign).
         * @minLength 1
         * @default "K"
         */
        houseSystem?: string;
        /**
         * SVG chart style. Defaults to none for data-only output; basic or advanced includes the chart SVG.
         * @default "none"
         */
        chartStyle?: "none" | "basic" | "advanced";
        /** Aspect angle to allowed orb in degrees, for example {"90":2}. Omit to use upstream defaults. */
        aspectOrbs?: Record<string, number>;
      };
      output: {
        /** Complete upstream chart data with access tokens removed. Native fields include planet, house, sign, attribute, optional svg, and planet_second for comparison or transit charts; return charts may include return_time or user.turn_date. */
        chart: Record<string, unknown>;
      };
    };
    /** Calculate a composite midpoint relationship chart for two people. */
    "xingpan.calculate_composite_chart": {
      input: {
        /**
         * The two people's birth details in the requested order; their order affects comparison charts.
         * @minItems 2
         * @maxItems 2
         */
        people: Array<{
          /**
           * Local birth date and time in YYYY-MM-DD HH:mm or YYYY-MM-DD HH:mm:ss format.
           * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(:\d{2})?$
           */
          birthday: string;
          /**
           * Birthplace longitude in degrees, positive east and negative west.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /**
           * Birthplace latitude in degrees, positive north and negative south.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * UTC offset in hours at this local date and time, including historical daylight saving time. Omit to look it up from Xingpan; an explicit value, including 0, is preserved.
           * @minimum -14
           * @maximum 14
           */
          timezone?: number;
        }>;
        /**
         * Planet IDs from get_chart_config; defaults to the Sun, Moon, and eight other major planets (0 through 9).
         * @minItems 1
         * @default ["0","1","2","3","4","5","6","7","8","9"]
         */
        planets?: Array<string>;
        /** Additional asteroid IDs from get_chart_config, such as xs433 for Eros. */
        asteroids?: Array<string>;
        /** Virtual point IDs from get_chart_config, such as 10 for the Ascendant. */
        virtualPoints?: Array<string>;
        /**
         * House system code; defaults to K (Koch). Other systems include P (Placidus) and W (Whole sign).
         * @minLength 1
         * @default "K"
         */
        houseSystem?: string;
        /**
         * SVG chart style. Defaults to none for data-only output; basic or advanced includes the chart SVG.
         * @default "none"
         */
        chartStyle?: "none" | "basic" | "advanced";
        /** Aspect angle to allowed orb in degrees, for example {"90":2}. Omit to use upstream defaults. */
        aspectOrbs?: Record<string, number>;
      };
      output: {
        /** Complete upstream chart data with access tokens removed. Native fields include planet, house, sign, attribute, optional svg, and planet_second for comparison or transit charts; return charts may include return_time or user.turn_date. */
        chart: Record<string, unknown>;
      };
    };
    /** Calculate a lunar return chart from birth details and a reference date, time, and return location. */
    "xingpan.calculate_lunar_return_chart": {
      input: {
        /** Birth details in local civil time at the birthplace. */
        birth: {
          /**
           * Local birth date and time in YYYY-MM-DD HH:mm or YYYY-MM-DD HH:mm:ss format.
           * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(:\d{2})?$
           */
          birthday: string;
          /**
           * Birthplace longitude in degrees, positive east and negative west.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /**
           * Birthplace latitude in degrees, positive north and negative south.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * UTC offset in hours at this local date and time, including historical daylight saving time. Omit to look it up from Xingpan; an explicit value, including 0, is preserved.
           * @minimum -14
           * @maximum 14
           */
          timezone?: number;
        };
        /** Reference time and location for the return calculation; distinct from the birth details. */
        returnReference: {
          /**
           * Local reference date and time used by Xingpan to select the return calculation, in YYYY-MM-DD HH:mm or YYYY-MM-DD HH:mm:ss format. The actual return instant is computed upstream.
           * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(:\d{2})?$
           */
          dateTime: string;
          /**
           * Return location longitude in degrees, positive east and negative west.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /**
           * Return location latitude in degrees, positive north and negative south.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * UTC offset in hours at this local date and time, including historical daylight saving time. Omit to look it up from Xingpan; an explicit value, including 0, is preserved.
           * @minimum -14
           * @maximum 14
           */
          timezone?: number;
        };
        /**
         * Planet IDs from get_chart_config; defaults to the Sun, Moon, and eight other major planets (0 through 9).
         * @minItems 1
         * @default ["0","1","2","3","4","5","6","7","8","9"]
         */
        planets?: Array<string>;
        /** Additional asteroid IDs from get_chart_config, such as xs433 for Eros. */
        asteroids?: Array<string>;
        /** Virtual point IDs from get_chart_config, such as 10 for the Ascendant. */
        virtualPoints?: Array<string>;
        /**
         * House system code; defaults to K (Koch). Other systems include P (Placidus) and W (Whole sign).
         * @minLength 1
         * @default "K"
         */
        houseSystem?: string;
        /**
         * SVG chart style. Defaults to none for data-only output; basic or advanced includes the chart SVG.
         * @default "none"
         */
        chartStyle?: "none" | "basic" | "advanced";
        /** Aspect angle to allowed orb in degrees, for example {"90":2}. Omit to use upstream defaults. */
        aspectOrbs?: Record<string, number>;
      };
      output: {
        /** Complete upstream chart data with access tokens removed. Native fields include planet, house, sign, attribute, optional svg, and planet_second for comparison or transit charts; return charts may include return_time or user.turn_date. */
        chart: Record<string, unknown>;
      };
    };
    /** Calculate a personal natal chart from birth time and location, with optional SVG, interpretation corpus, and aspect patterns. */
    "xingpan.calculate_natal_chart": {
      input: {
        /** Birth details in local civil time at the birthplace. */
        birth: {
          /**
           * Local birth date and time in YYYY-MM-DD HH:mm or YYYY-MM-DD HH:mm:ss format.
           * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(:\d{2})?$
           */
          birthday: string;
          /**
           * Birthplace longitude in degrees, positive east and negative west.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /**
           * Birthplace latitude in degrees, positive north and negative south.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * UTC offset in hours at this local date and time, including historical daylight saving time. Omit to look it up from Xingpan; an explicit value, including 0, is preserved.
           * @minimum -14
           * @maximum 14
           */
          timezone?: number;
        };
        /**
         * Planet IDs from get_chart_config; defaults to the Sun, Moon, and eight other major planets (0 through 9).
         * @minItems 1
         * @default ["0","1","2","3","4","5","6","7","8","9"]
         */
        planets?: Array<string>;
        /** Additional asteroid IDs from get_chart_config, such as xs433 for Eros. */
        asteroids?: Array<string>;
        /** Virtual point IDs from get_chart_config, such as 10 for the Ascendant. */
        virtualPoints?: Array<string>;
        /**
         * House system code; defaults to K (Koch). Other systems include P (Placidus) and W (Whole sign).
         * @minLength 1
         * @default "K"
         */
        houseSystem?: string;
        /**
         * SVG chart style. Defaults to none for data-only output; basic or advanced includes the chart SVG.
         * @default "none"
         */
        chartStyle?: "none" | "basic" | "advanced";
        /** Aspect angle to allowed orb in degrees, for example {"90":2}. Omit to use upstream defaults. */
        aspectOrbs?: Record<string, number>;
        /** Fixed star names from get_chart_config, such as Regulus or Spica. */
        fixedStars?: Array<string>;
        /**
         * Whether to request the upstream chart interpretation corpus.
         * @default false
         */
        includeCorpus?: boolean;
        /**
         * Whether to calculate geometric aspect patterns such as Grand Trine and T-Square.
         * @default false
         */
        includeAspectPatterns?: boolean;
      };
      output: {
        /** Complete upstream chart data with access tokens removed. Native fields include planet, house, sign, attribute, optional svg, and planet_second for comparison or transit charts; return charts may include return_time or user.turn_date. */
        chart: Record<string, unknown>;
      };
    };
    /** Calculate a solar return chart from birth details and a reference date, time, and location. In verified upstream probes, changing the reference location did not change the birth-location houses; relocated solar returns remain unverified. */
    "xingpan.calculate_solar_return_chart": {
      input: {
        /** Birth details in local civil time at the birthplace. */
        birth: {
          /**
           * Local birth date and time in YYYY-MM-DD HH:mm or YYYY-MM-DD HH:mm:ss format.
           * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(:\d{2})?$
           */
          birthday: string;
          /**
           * Birthplace longitude in degrees, positive east and negative west.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /**
           * Birthplace latitude in degrees, positive north and negative south.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * UTC offset in hours at this local date and time, including historical daylight saving time. Omit to look it up from Xingpan; an explicit value, including 0, is preserved.
           * @minimum -14
           * @maximum 14
           */
          timezone?: number;
        };
        /** Reference time and location for the return calculation; distinct from the birth details. */
        returnReference: {
          /**
           * Local reference date and time used by Xingpan to select the return calculation, in YYYY-MM-DD HH:mm or YYYY-MM-DD HH:mm:ss format. The actual return instant is computed upstream.
           * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(:\d{2})?$
           */
          dateTime: string;
          /**
           * Return location longitude in degrees, positive east and negative west.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /**
           * Return location latitude in degrees, positive north and negative south.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * UTC offset in hours at this local date and time, including historical daylight saving time. Omit to look it up from Xingpan; an explicit value, including 0, is preserved.
           * @minimum -14
           * @maximum 14
           */
          timezone?: number;
        };
        /**
         * Planet IDs from get_chart_config; defaults to the Sun, Moon, and eight other major planets (0 through 9).
         * @minItems 1
         * @default ["0","1","2","3","4","5","6","7","8","9"]
         */
        planets?: Array<string>;
        /** Additional asteroid IDs from get_chart_config, such as xs433 for Eros. */
        asteroids?: Array<string>;
        /** Virtual point IDs from get_chart_config, such as 10 for the Ascendant. */
        virtualPoints?: Array<string>;
        /**
         * House system code; defaults to K (Koch). Other systems include P (Placidus) and W (Whole sign).
         * @minLength 1
         * @default "K"
         */
        houseSystem?: string;
        /**
         * SVG chart style. Defaults to none for data-only output; basic or advanced includes the chart SVG.
         * @default "none"
         */
        chartStyle?: "none" | "basic" | "advanced";
        /** Aspect angle to allowed orb in degrees, for example {"90":2}. Omit to use upstream defaults. */
        aspectOrbs?: Record<string, number>;
      };
      output: {
        /** Complete upstream chart data with access tokens removed. Native fields include planet, house, sign, attribute, optional svg, and planet_second for comparison or transit charts; return charts may include return_time or user.turn_date. */
        chart: Record<string, unknown>;
      };
    };
    /** Calculate Xingpan's pairing (synastry) chart for two people. */
    "xingpan.calculate_synastry_chart": {
      input: {
        /**
         * The two people's birth details in the requested order; their order affects comparison charts.
         * @minItems 2
         * @maxItems 2
         */
        people: Array<{
          /**
           * Local birth date and time in YYYY-MM-DD HH:mm or YYYY-MM-DD HH:mm:ss format.
           * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(:\d{2})?$
           */
          birthday: string;
          /**
           * Birthplace longitude in degrees, positive east and negative west.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /**
           * Birthplace latitude in degrees, positive north and negative south.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * UTC offset in hours at this local date and time, including historical daylight saving time. Omit to look it up from Xingpan; an explicit value, including 0, is preserved.
           * @minimum -14
           * @maximum 14
           */
          timezone?: number;
        }>;
        /**
         * Planet IDs from get_chart_config; defaults to the Sun, Moon, and eight other major planets (0 through 9).
         * @minItems 1
         * @default ["0","1","2","3","4","5","6","7","8","9"]
         */
        planets?: Array<string>;
        /** Additional asteroid IDs from get_chart_config, such as xs433 for Eros. */
        asteroids?: Array<string>;
        /** Virtual point IDs from get_chart_config, such as 10 for the Ascendant. */
        virtualPoints?: Array<string>;
        /**
         * House system code; defaults to K (Koch). Other systems include P (Placidus) and W (Whole sign).
         * @minLength 1
         * @default "K"
         */
        houseSystem?: string;
        /**
         * SVG chart style. Defaults to none for data-only output; basic or advanced includes the chart SVG.
         * @default "none"
         */
        chartStyle?: "none" | "basic" | "advanced";
        /** Aspect angle to allowed orb in degrees, for example {"90":2}. Omit to use upstream defaults. */
        aspectOrbs?: Record<string, number>;
      };
      output: {
        /** Complete upstream chart data with access tokens removed. Native fields include planet, house, sign, attribute, optional svg, and planet_second for comparison or transit charts; return charts may include return_time or user.turn_date. */
        chart: Record<string, unknown>;
      };
    };
    /** Calculate a transit chart against a natal chart for a specified local date and time at the birthplace, accounting for date-specific UTC offsets. */
    "xingpan.calculate_transit_chart": {
      input: {
        /** Birth details in local civil time at the birthplace. */
        birth: {
          /**
           * Local birth date and time in YYYY-MM-DD HH:mm or YYYY-MM-DD HH:mm:ss format.
           * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(:\d{2})?$
           */
          birthday: string;
          /**
           * Birthplace longitude in degrees, positive east and negative west.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /**
           * Birthplace latitude in degrees, positive north and negative south.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * UTC offset in hours at this local date and time, including historical daylight saving time. Omit to look it up from Xingpan; an explicit value, including 0, is preserved.
           * @minimum -14
           * @maximum 14
           */
          timezone?: number;
        };
        /**
         * Transit date and time in the birthplace's local civil time, in YYYY-MM-DD HH:mm or YYYY-MM-DD HH:mm:ss format.
         * @pattern ^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(:\d{2})?$
         */
        transitDateTime: string;
        /**
         * UTC offset in hours at the transit date and time. Omit for an independent historical timezone lookup; this need not equal the birth timezone.
         * @minimum -14
         * @maximum 14
         */
        transitTimezone?: number;
        /**
         * Planet IDs from get_chart_config; defaults to the Sun, Moon, and eight other major planets (0 through 9).
         * @minItems 1
         * @default ["0","1","2","3","4","5","6","7","8","9"]
         */
        planets?: Array<string>;
        /** Additional asteroid IDs from get_chart_config, such as xs433 for Eros. */
        asteroids?: Array<string>;
        /** Virtual point IDs from get_chart_config, such as 10 for the Ascendant. */
        virtualPoints?: Array<string>;
        /**
         * House system code; defaults to K (Koch). Other systems include P (Placidus) and W (Whole sign).
         * @minLength 1
         * @default "K"
         */
        houseSystem?: string;
        /**
         * SVG chart style. Defaults to none for data-only output; basic or advanced includes the chart SVG.
         * @default "none"
         */
        chartStyle?: "none" | "basic" | "advanced";
        /** Aspect angle to allowed orb in degrees, for example {"90":2}. Omit to use upstream defaults. */
        aspectOrbs?: Record<string, number>;
      };
      output: {
        /** Complete upstream chart data with access tokens removed. Native fields include planet, house, sign, attribute, optional svg, and planet_second for comparison or transit charts; return charts may include return_time or user.turn_date. */
        chart: Record<string, unknown>;
      };
    };
    /** Get Xingpan planet, asteroid, fixed star, virtual point, zodiac, and house configuration. */
    "xingpan.get_chart_config": {
      input: Record<string, never>;
      output: {
        /** Upstream configuration maps and lists, including planets, virtual, planet_xs, planet_xf, planetEnglish, planetChinese, and zodiac names. */
        config: Record<string, unknown>;
      };
    };
    /** Get daily zodiac horoscopes for one sign or all twelve signs, including overall, love, career, health, scores, and lucky items. */
    "xingpan.get_daily_horoscope": {
      input: {
        /**
         * Requested date in YYYY-MM-DD format. Omit to use the provider's current day.
         * @format date
         */
        date?: string;
        /** Zodiac sign to query. Omit to return all twelve signs. */
        sign?: "aries" | "taurus" | "gemini" | "cancer" | "leo" | "virgo" | "libra" | "scorpio" | "sagittarius" | "capricorn" | "aquarius" | "pisces";
      };
      output: {
        /** The requested zodiac horoscopes. */
        horoscopes: Array<Record<string, unknown>>;
      };
    };
  }
}
