import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Analyze two people's Bazi charts for relationship or marriage entertainment using the official matching interface selected by the caller. Marriage uses firstPerson as the male partner and secondPerson as the female partner. Each lunar date in 1900-2100 adds a conversion call; other non-leap lunar dates use native input. */
    "yuanfenju.analyze_bazi_compatibility": {
      input: {
        /**
         * The matching scenario: relationship for general matching or marriage for the traditional male/female marriage interface. Defaults to relationship.
         * @default "relationship"
         */
        scenario?: "relationship" | "marriage";
        /** The first person's birth details; in the marriage scenario this is the male partner. */
        firstPerson: (unknown);
        /** The second person's birth details; in the marriage scenario this is the female partner. */
        secondPerson: (unknown);
        /**
         * The scoring mode: traditional binary scoring or graded flexible scoring (recommended and the connector default).
         * @default "graded"
         */
        scoringMode?: "traditional" | "graded";
        /** The result language: simplified Chinese, traditional Chinese or English. */
        language?: "zh-cn" | "zh-tw" | "en-us";
      };
      output: {
        /** The complete matching scores, two charts and interpretations returned for the selected scenario. */
        analysis: {
          /** The provider's first-person chart, under its native male field. */
          male?: Record<string, unknown>;
          /** The provider's second-person chart, under its native female field. */
          female?: Record<string, unknown>;
          /** The overall matching score returned by the provider. */
          all_score?: number;
          /** The provider's combined evaluation and entertainment interpretation. */
          master_evaluation?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The provider's cultural research and entertainment notice. */
        notice: string | null;
      };
    };
    /** Convert Gregorian and Chinese lunar dates in either direction, including negative lunar month numbers for leap months. */
    "yuanfenju.convert_calendar": {
      input: (unknown);
      output: {
        /** The converted lunar and Gregorian date/time fields. Negative lunar_month values indicate leap months. */
        date: {
          /** The lunar year returned by the provider. */
          lunar_year?: number;
          /** The lunar month returned by the provider. */
          lunar_month?: number;
          /** The lunar day returned by the provider. */
          lunar_day?: number;
          /** The lunar hour returned by the provider. */
          lunar_hour?: number;
          /** The lunar minute returned by the provider. */
          lunar_minute?: number;
          /** The lunar second returned by the provider. */
          lunar_second?: number;
          /** The solar year returned by the provider. */
          solar_year?: number;
          /** The solar month returned by the provider. */
          solar_month?: number;
          /** The solar day returned by the provider. */
          solar_day?: number;
          /** The solar hour returned by the provider. */
          solar_hour?: number;
          /** The solar minute returned by the provider. */
          solar_minute?: number;
          /** The solar second returned by the provider. */
          solar_second?: number;
          [key: string]: unknown;
        };
        /** The provider's cultural research and entertainment notice. */
        notice: string | null;
      };
    };
    /** Find dates marked suitable for a selected traditional activity within the next 7 days, half month, month or three months, for cultural research and entertainment. Use get_almanac for a selected date's hourly details. */
    "yuanfenju.find_auspicious_dates": {
      input: {
        /**
         * The official activity ID: 0 moving, 1 renovation, 2 entering a home, 3 engagement/marriage, 4 wedding/registration, 5 seeking children/childbirth, 6 receiving wealth, 7 opening a business, 8 trading, 9 property purchase, 10 earthwork, 11 travel, 12 burial, 13 ancestor rites, 14 prayer, 15 bathing, 16 alliance, 17 son-in-law marriage, 18 grave repair, 19 ground breaking, 20 burial, 21 monument erection, 22 living-person grave construction, 23 coffin preparation, 24 encoffining, 25 coffin transfer, 26 logging, 27 well digging, 28 plaque hanging, 29 planting, 30 school admission, 31 haircut, 32 meeting relatives/friends, 33 taking office, 34 seeking medical care, 35 treatment.
         * @minimum 0
         * @maximum 35
         */
        activityId: number;
        /**
         * The future search period: seven_days (default), half_month, one_month or three_months.
         * @default "seven_days"
         */
        period?: "seven_days" | "half_month" | "one_month" | "three_months";
        /** The result language: simplified or traditional Chinese. */
        language?: "zh-cn" | "zh-tw";
      };
      output: {
        /** The full date selection result returned by Yuanfenju. */
        selection: {
          /** The dates matching the selected traditional activity. */
          detail_info?: Array<{
            /** The Gregorian date. */
            yangli?: string;
            /** The lunar date display text. */
            yinli?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The provider's cultural research and entertainment notice. */
        notice: string | null;
      };
    };
    /** Get the connected Yuanfenju account's membership, expiry and applicable remaining quota. This query does not consume call credits. */
    "yuanfenju.get_account": {
      input: Record<string, never>;
      output: {
        /** The account information returned by Yuanfenju. */
        account: {
          /** The account membership type. */
          merchant_type?: string;
          /** The account registration email. */
          merchant_email?: string;
          /** The account nickname. */
          merchant_nickname?: string;
          /** The account registration time. */
          merchant_register_time?: string;
          /** The annual plan expiration time, or -- when not applicable. */
          merchant_expire_time?: string;
          /** The remaining calls for usage-based and free accounts; annual accounts return --. */
          merchant_remaining_call_times?: string;
          [key: string]: unknown;
        };
        /** The provider's cultural research and entertainment notice. */
        notice: string | null;
      };
    };
    /** Get the Chinese almanac for a Gregorian date within 90 days before or after today, for cultural research and entertainment. */
    "yuanfenju.get_almanac": {
      input: {
        /**
         * The Gregorian date in YYYY-MM-DD format, within the provider's rolling 90-day window.
         * @format date
         */
        date: string;
        /** The result language: simplified or traditional Chinese. */
        language?: "zh-cn" | "zh-tw";
      };
      output: {
        /** The full Chinese almanac, including lunar date, stems/branches, activities and hourly details. */
        almanac: {
          /** The Gregorian date. */
          yangli?: string;
          /** The lunar date display text. */
          yinli?: string;
          /** The traditional activities marked suitable. */
          yi?: string;
          /** The traditional activities marked unsuitable. */
          ji?: string;
          /** The year, month, day and time heavenly stems and earthly branches. */
          ganzhi?: Record<string, unknown>;
          /** The twelve traditional hourly period details. */
          detail_info?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** The provider's cultural research and entertainment notice. */
        notice: string | null;
      };
    };
    /** Get the current 24-hour cycle's used call count and reset timing for a Yuanfenju annual-plan account. This free query is only available to annual members. */
    "yuanfenju.get_annual_usage": {
      input: Record<string, never>;
      output: {
        /** The annual-plan call count and reset information returned by Yuanfenju. */
        usage: {
          /** The calls already used in the current 24-hour cycle. */
          call_times?: string | number;
          /** The seconds remaining until the cycle resets. The countdown starts on the first API call. */
          expire_time?: number;
          /** The human-readable remaining-time message. */
          expire_time_message?: string;
          /** The estimated quota reset timestamp. */
          reset_time?: string;
          /** The human-readable quota reset message. */
          reset_time_message?: string;
          [key: string]: unknown;
        };
        /** The provider's cultural research and entertainment notice. */
        notice: string | null;
      };
    };
    /** Calculate a standard Bazi chart with four pillars, five elements and luck cycles for cultural research and entertainment. Lunar dates in 1900-2100 are converted first, including leap months, using an additional API call. Other non-leap lunar dates use native lunar input. */
    "yuanfenju.get_bazi_chart": {
      input: (unknown) & (unknown) & (unknown);
      output: {
        /** The complete standard Bazi chart, including all provider-defined fields. */
        chart: {
          /** The birth details, chart classification and five-element analysis. */
          base_info?: Record<string, unknown>;
          /** The four pillars, childhood period and major/yearly luck cycles. */
          detail_info?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The provider's cultural research and entertainment notice. */
        notice: string | null;
      };
    };
    /** Calculate a Western astrology natal chart from the original Gregorian local birth time for cultural research and entertainment. Returns celestial data, official interpretations and the SVG chart when provided. The provider handles timezone/DST and transport compression; no true solar time correction is applied. */
    "yuanfenju.get_natal_chart": {
      input: (unknown);
      output: {
        /** The full natal chart returned by Yuanfenju. */
        chart: {
          /** The natal chart's birth details and calculation settings. */
          base_info?: Record<string, unknown>;
          /** The celestial data, official interpretations and SVG chart. */
          detail_info?: {
            /** The houses, celestial objects, aspects, statistics and chart patterns. */
            chart_data?: Record<string, unknown>;
            /** The official natal chart interpretations in the requested language. */
            chart_description?: Record<string, unknown>;
            /** The SVG chart source returned by the provider. */
            chart_svg?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The provider's cultural research and entertainment notice. */
        notice: string | null;
      };
    };
    /** Get the year's 12 seasonal nodes or all 24 solar terms with Gregorian and lunar timestamps for the supplied date. */
    "yuanfenju.get_solar_terms": {
      input: {
        /**
         * The input calendar. Defaults to solar (Gregorian).
         * @default "solar"
         */
        calendarType?: "solar" | "lunar";
        /** The input year. */
        year: number;
        /**
         * The input month, 1 to 12.
         * @minimum 1
         * @maximum 12
         */
        month: number;
        /**
         * The input day of month.
         * @minimum 1
         * @maximum 31
         */
        day: number;
        /**
         * Whether to return all 24 solar terms. Defaults to false, returning 12 seasonal nodes.
         * @default false
         */
        includeAllTerms?: boolean;
      };
      output: {
        /** The year's solar terms returned by Yuanfenju. */
        terms: Array<{
          /** The solar term name. */
          jieqi_name?: string;
          /** The Gregorian date of the solar term. */
          jieqi_simple_time?: string;
          /** The Gregorian date and precise time. */
          jieqi_detail_time?: string;
          /** Whether the lunar date is in a leap month: 1 yes, 0 no. */
          jieqi_lunar_time_isleap?: string;
          /** The lunar date of the solar term. */
          jieqi_simple_lunar_time?: string;
          /** The lunar date and precise time. */
          jieqi_detail_lunar_time?: string;
          [key: string]: unknown;
        }>;
        /** The provider's cultural research and entertainment notice. */
        notice: string | null;
      };
    };
    /** Calculate a Ziwei Doushu chart with twelve palaces and star placements for cultural research and entertainment. Lunar dates in 1900-2100 are converted first using an additional call; other non-leap lunar dates use native input. */
    "yuanfenju.get_ziwei_chart": {
      input: (unknown) & (unknown) & (unknown);
      output: {
        /** The complete Ziwei chart, preserving all provider-defined chart and interpretation fields. */
        chart: {
          /** The Ziwei birth details and basic chart information. */
          base_info?: Record<string, unknown>;
          /** The twelve palaces in the provider's original order (indices 0 to 11). */
          gong_pan?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** The provider's cultural research and entertainment notice. */
        notice: string | null;
      };
    };
    /** Get Yuanfenju's official Bazi interpretation for cultural research and entertainment, including five-element, relationship, wealth and life interpretation text. Lunar dates in 1900-2100 are converted first using an additional call; other non-leap lunar dates use native input. */
    "yuanfenju.interpret_bazi": {
      input: (unknown) & (unknown) & (unknown);
      output: {
        /** The full official Bazi interpretation, including all provider-defined sections. */
        reading: {
          /** The interpreted chart's birth details and basic information. */
          base_info?: Record<string, unknown>;
          /** The four-pillar chart information accompanying the interpretation. */
          bazi_info?: Record<string, unknown>;
          /** The official five-element interpretation. */
          wuxing?: Record<string, unknown>;
          /** The official relationship interpretation for entertainment. */
          yinyuan?: Record<string, unknown>;
          /** The official wealth interpretation for entertainment. */
          caiyun?: Record<string, unknown>;
          /** The official life interpretation for entertainment. */
          mingyun?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The provider's cultural research and entertainment notice. */
        notice: string | null;
      };
    };
    /** Draw and interpret a full-deck tarot spread for entertainment using the current Yuanfenju interface. Drawing is automatic; paid membership is required. */
    "yuanfenju.interpret_tarot": {
      input: {
        /**
         * The spread: 1 single card, 2 choice, 3 holy triangle, 4 time arrow, 5 four elements, 6 lover pyramid, 7 five elements, 8 lovers, 9 cross, 10 hexagram, 11 compound, 12 seven planets, 13 nine-grid, 14 deep relationship, 15 Celtic cross, 16 tree of life, 17 annual cycle.
         * @minimum 1
         * @maximum 17
         */
        spreadId: number;
        /**
         * The topic: 1 love/marriage, 2 work/study, 3 relationships/wealth, 4 health/lifestyle, 5 general.
         * @minimum 1
         * @maximum 5
         */
        topicId: number;
        /** The tarot result language: simplified Chinese, traditional Chinese or English. */
        language?: "zh-cn" | "zh-tw" | "en-us";
      };
      output: {
        /** The complete tarot reading returned by Yuanfenju. */
        reading: {
          /** The automatically drawn tarot cards. */
          cards?: Array<{
            /** The card position index, starting at 1. */
            positions_index?: number;
            /** The card position name. */
            positions_name?: string;
            /** The meaning of this position in the spread. */
            positions_desc?: string;
            /** The card orientation: 1 upright or 0 reversed. */
            orientation_code?: number;
            /** The card orientation display text. */
            orientation_text?: string;
            /** The tarot card number, from 1 to 78. */
            card_no?: number;
            /** The tarot card name. */
            card_name?: string;
            /** The card keywords. */
            card_keywords?: string;
            /** The card's astrological association. */
            card_astrology?: string;
            /** The card's elemental association. */
            card_element?: string;
            /** The card illustration description. */
            card_description?: string;
            /** The card's general meaning, topic interpretation and advice. */
            card_interpretation?: {
              /** The general card interpretation. */
              general?: string;
              /** The interpretation for the selected topic. */
              topic?: string;
              /** The entertainment interpretation advice. */
              advice?: string;
              [key: string]: unknown;
            };
            /** The card image resource index. */
            image_id?: number;
            /** The card image URL. */
            image_url?: string;
            [key: string]: unknown;
          }>;
          /** The combined reading and oracle message. */
          overall_interpretation?: Record<string, unknown>;
          /** The calculation time and associated cultural context. */
          environment?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The provider's cultural research and entertainment notice. */
        notice: string | null;
      };
    };
  }
}
