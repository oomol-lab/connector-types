import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check a positive length on the Lu Ban ruler and get nearest auspicious ranges when the length is inauspicious. */
    "fengshui.check_lucky_dimension": {
      input: {
        /**
         * Positive length to check.
         * @exclusiveMinimum 0
         */
        length: number;
        /**
         * Measurement unit: millimeters, centimeters or inches.
         * @default "mm"
         */
        unit?: "mm" | "cm" | "in";
      };
      output: {
        /** Requested length. */
        length: number;
        /** Requested measurement unit. */
        unit: "mm" | "cm" | "in";
        /** Length converted to millimeters. */
        lengthMm: number;
        /** Whether the length is traditionally auspicious. */
        auspicious: boolean;
        /** Lu Ban ruler cycle. */
        ruler: {
          /** Ruler name. */
          name?: string;
          /** Cycle length in millimeters. */
          cycleMm?: number;
          /** Section length in millimeters. */
          sectionMm?: number;
          [key: string]: unknown;
        };
        /** Traditional ruler section containing the length. */
        section: {
          /** Section number within the cycle. */
          index?: number;
          /** Traditional name in pinyin. */
          pinyin?: string;
          /** Traditional name in Chinese characters. */
          hanzi?: string;
          /** Traditional meaning of the ruler section. */
          meaning?: string;
          /** Whether the section is traditionally auspicious. */
          auspicious?: boolean;
          [key: string]: unknown;
        };
        /** Position within the ruler cycle in millimeters. */
        positionInCycleMm: number;
        /** Nearest auspicious ranges when the requested length is inauspicious. */
        alternatives?: {
          /** Nearest auspicious length range in millimeters. */
          shorter?: {
            /** Inclusive start of the range in millimeters. */
            fromMm?: number;
            /** Exclusive end of the range in millimeters. */
            toMm?: number;
            [key: string]: unknown;
          };
          /** Nearest auspicious length range in millimeters. */
          longer?: {
            /** Inclusive start of the range in millimeters. */
            fromMm?: number;
            /** Exclusive end of the range in millimeters. */
            toMm?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Score traditional love or business compatibility from 1 (challenging) to 4 (excellent), using birth dates or zodiac animals. */
    "fengshui.get_compatibility": {
      input: (Record<string, unknown>) & (Record<string, unknown>);
      output: {
        /** Compatibility context. */
        type: "love" | "business";
        /**
         * Calendar convention: lunar starts years at Chinese New Year; solar starts years at Li Chun and months at the twelve jie solar terms (Ba Zi convention). Input dates are always Gregorian.
         * @default "lunar"
         */
        calendar: "lunar" | "solar";
        /** Zodiac sign and optional birth-date basis. */
        first: {
          /**
           * Gregorian date in YYYY-MM-DD format, from 1700-01-01 through 2300-12-31. Dates and calendar calculations use China Standard Time (UTC+8).
           * @format date
           */
          date?: string;
          /**
           * Calendar convention: lunar starts years at Chinese New Year; solar starts years at Li Chun and months at the twelve jie solar terms (Ba Zi convention). Input dates are always Gregorian.
           * @default "lunar"
           */
          calendar?: "lunar" | "solar";
          /** Chinese zodiac animal; names are case-insensitive. */
          animal: "Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig";
          [key: string]: unknown;
        };
        /** Zodiac sign and optional birth-date basis. */
        second: {
          /**
           * Gregorian date in YYYY-MM-DD format, from 1700-01-01 through 2300-12-31. Dates and calendar calculations use China Standard Time (UTC+8).
           * @format date
           */
          date?: string;
          /**
           * Calendar convention: lunar starts years at Chinese New Year; solar starts years at Li Chun and months at the twelve jie solar terms (Ba Zi convention). Input dates are always Gregorian.
           * @default "lunar"
           */
          calendar?: "lunar" | "solar";
          /** Chinese zodiac animal; names are case-insensitive. */
          animal: "Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig";
          [key: string]: unknown;
        };
        /**
         * Compatibility score from 1 to 4.
         * @minimum 1
         * @maximum 4
         */
        score: number;
        /** Maximum compatibility score. */
        maxScore: number;
        /** Traditional compatibility rating. */
        rating: "challenging" | "average" | "good" | "excellent";
        [key: string]: unknown;
      };
    };
    /** Calculate the house trigram and traditional Eight Mansions stars for the eight compass sectors. */
    "fengshui.get_eight_mansions": {
      input: {
        /** Facing of the building as a compass bearing or one of eight directions. */
        facing: number | "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";
      };
      output: {
        /** Building facing direction. */
        facing: {
          /** Compass direction. */
          direction: "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";
          /**
           * Compass bearing in degrees, from 0 inclusive to 360 exclusive.
           * @minimum 0
           * @exclusiveMaximum 360
           */
          degrees?: number;
          [key: string]: unknown;
        };
        /** Compass direction. */
        sitting: "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";
        /** Eight Mansions trigram. */
        house: {
          /** Trigram name in pinyin. */
          name: string;
          /** Traditional name in Chinese characters. */
          hanzi: string;
          /** Five-element association. */
          element: "Wood" | "Fire" | "Earth" | "Metal" | "Water";
          /** East or West group. */
          group: "East" | "West";
          [key: string]: unknown;
        };
        /** Star of each compass sector, keyed N, NE, E, SE, S, SW, W and NW. */
        sectors: Record<string, {
            /** Compass direction. */
            direction?: "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";
            /** Traditional star name in pinyin. */
            star: string;
            /** Traditional name in Chinese characters. */
            hanzi: string;
            /** Whether this star is traditionally auspicious. */
            auspicious?: boolean;
            /** Traditional meaning of this star. */
            meaning: string;
            [key: string]: unknown;
          }>;
        [key: string]: unknown;
      };
    };
    /** Calculate the natal Flying Star chart for the nine palaces using the building facing and construction year or period. Replacement (Ti Gua) charts are not computed. */
    "fengshui.get_flying_star": {
      input: Record<string, unknown>;
      output: {
        /** Twenty-year construction period. */
        period: number;
        /** Gregorian years covered by the period. */
        periodYears: {
          /** First year of the period. */
          from?: number;
          /** Last year of the period. */
          to?: number;
          [key: string]: unknown;
        };
        /** Requested construction year, when supplied. */
        constructionYear?: number;
        /** Facing or sitting mountain of the twenty-four mountains. */
        facing: {
          /** Mountain code such as N1 or NW3. */
          code: string;
          /** Traditional name in pinyin. */
          pinyin: string;
          /** Traditional name in Chinese characters. */
          hanzi: string;
          /** Compass direction. */
          palace: "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";
          /** Start bearing of the mountain sector. */
          fromDegrees: number;
          /** End bearing of the mountain sector. */
          toDegrees: number;
          /** Requested compass bearing when supplied. */
          degrees?: number;
          /** Whether the bearing is within three degrees of a mountain boundary, where a replacement chart may apply. */
          nearMountainBoundary?: boolean;
          [key: string]: unknown;
        };
        /** Facing or sitting mountain of the twenty-four mountains. */
        sitting: {
          /** Mountain code such as N1 or NW3. */
          code: string;
          /** Traditional name in pinyin. */
          pinyin: string;
          /** Traditional name in Chinese characters. */
          hanzi: string;
          /** Compass direction. */
          palace: "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";
          /** Start bearing of the mountain sector. */
          fromDegrees: number;
          /** End bearing of the mountain sector. */
          toDegrees: number;
          /** Requested compass bearing when supplied. */
          degrees?: number;
          /** Whether the bearing is within three degrees of a mountain boundary, where a replacement chart may apply. */
          nearMountainBoundary?: boolean;
          [key: string]: unknown;
        };
        /** Base, mountain and water stars, keyed NW, N, NE, W, C, E, SW, S and SE. */
        chart: Record<string, {
            /** Base star number. */
            base: number;
            /** Mountain star number. */
            mountain: number;
            /** Water star number. */
            water: number;
            [key: string]: unknown;
          }>;
        /** Mountain-star flight direction. */
        mountainFlight: "forward" | "backward";
        /** Water-star flight direction. */
        waterFlight: "forward" | "backward";
        /** Classical Flying Star chart type. */
        chartType: {
          /** Classical chart type name. */
          name?: string;
          /** Meaning of the classical chart type. */
          description?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the current API key status and hourly request quota without accessing personal data. */
    "fengshui.get_key_status": {
      input: Record<string, never>;
      output: {
        /** Non-secret prefix identifying the current API key. */
        apiKeyPrefix: string;
        /**
         * Time the current API key was issued.
         * @format date-time
         */
        apiKeyIssuedAt: string;
        /** Current hourly quota. */
        rateLimit: {
          /** Maximum requests per quota window. */
          limit?: number;
          /** Requests remaining in the current window. */
          remaining?: number;
          /** Quota window length in seconds. */
          windowSeconds?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Calculate the personal Kua number, East or West group, and traditional favorable and unfavorable directions. */
    "fengshui.get_kua": {
      input: {
        /**
         * Gregorian date in YYYY-MM-DD format, from 1700-01-01 through 2300-12-31. Dates and calendar calculations use China Standard Time (UTC+8).
         * @format date
         */
        date: string;
        /** Gender used by the traditional Kua formula. */
        gender: "male" | "female";
        /**
         * Calendar convention: lunar starts years at Chinese New Year; solar starts years at Li Chun and months at the twelve jie solar terms (Ba Zi convention). Input dates are always Gregorian.
         * @default "lunar"
         */
        calendar?: "lunar" | "solar";
      };
      output: {
        /**
         * Gregorian date in YYYY-MM-DD format, from 1700-01-01 through 2300-12-31. Dates and calendar calculations use China Standard Time (UTC+8).
         * @format date
         */
        date: string;
        /** Gender used by the traditional Kua formula. */
        gender: "male" | "female";
        /**
         * Calendar convention: lunar starts years at Chinese New Year; solar starts years at Li Chun and months at the twelve jie solar terms (Ba Zi convention). Input dates are always Gregorian.
         * @default "lunar"
         */
        calendar: "lunar" | "solar";
        /** Chinese birth year under the chosen calendar convention. */
        chineseYear: number;
        /** Personal Kua number after remapping a Luo Shu number of 5. */
        kua: number;
        /** Luo Shu number before remapping. */
        luoShuNumber: number;
        /** East or West group. */
        group: "East" | "West";
        /** Eight Mansions trigram. */
        trigram: {
          /** Trigram name in pinyin. */
          name: string;
          /** Traditional name in Chinese characters. */
          hanzi: string;
          /** Five-element association. */
          element: "Wood" | "Fire" | "Earth" | "Metal" | "Water";
          /** East or West group. */
          group: "East" | "West";
          [key: string]: unknown;
        };
        /** Four traditionally favorable directions. */
        favorableDirections: Array<{
          /** Compass direction. */
          direction?: "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";
          /** Traditional star name in pinyin. */
          star: string;
          /** Traditional name in Chinese characters. */
          hanzi: string;
          /** Whether this star is traditionally auspicious. */
          auspicious?: boolean;
          /** Traditional meaning of this star. */
          meaning: string;
          [key: string]: unknown;
        }>;
        /** Four traditionally unfavorable directions. */
        unfavorableDirections: Array<{
          /** Compass direction. */
          direction?: "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";
          /** Traditional star name in pinyin. */
          star: string;
          /** Traditional name in Chinese characters. */
          hanzi: string;
          /** Whether this star is traditionally auspicious. */
          auspicious?: boolean;
          /** Traditional meaning of this star. */
          meaning: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get the two zodiac animals forming the traditional three-harmony group with a sign. */
    "fengshui.get_zodiac_allies": {
      input: Record<string, unknown>;
      output: {
        /**
         * Gregorian date in YYYY-MM-DD format, from 1700-01-01 through 2300-12-31. Dates and calendar calculations use China Standard Time (UTC+8).
         * @format date
         */
        date?: string;
        /**
         * Calendar convention: lunar starts years at Chinese New Year; solar starts years at Li Chun and months at the twelve jie solar terms (Ba Zi convention). Input dates are always Gregorian.
         * @default "lunar"
         */
        calendar?: "lunar" | "solar";
        /** Chinese zodiac animal; names are case-insensitive. */
        animal: "Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig";
        /** The two allied zodiac animals. */
        allies: Array<"Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig">;
        [key: string]: unknown;
      };
    };
    /** Get the day zodiac animal and stem-branch pillar for a date. */
    "fengshui.get_zodiac_day": {
      input: {
        /**
         * Gregorian date in YYYY-MM-DD format, from 1700-01-01 through 2300-12-31. Dates and calendar calculations use China Standard Time (UTC+8).
         * @format date
         */
        date: string;
      };
      output: {
        /**
         * Gregorian date in YYYY-MM-DD format, from 1700-01-01 through 2300-12-31. Dates and calendar calculations use China Standard Time (UTC+8).
         * @format date
         */
        date: string;
        /** Chinese zodiac animal; names are case-insensitive. */
        animal: "Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig";
        /** Five-element association. */
        element: "Wood" | "Fire" | "Earth" | "Metal" | "Water";
        /** Stem-branch pillar. */
        pillar: {
          /** Combined stem-branch name in pinyin. */
          name: string;
          /** Traditional name in Chinese characters. */
          hanzi: string;
          /** Heavenly stem. */
          stem: {
            /** Traditional name in pinyin. */
            pinyin: string;
            /** Traditional name in Chinese characters. */
            hanzi: string;
            /** Five-element association. */
            element: "Wood" | "Fire" | "Earth" | "Metal" | "Water";
            /** Yin or Yang polarity. */
            polarity: "Yin" | "Yang";
            [key: string]: unknown;
          };
          /** Earthly branch. */
          branch: {
            /** Traditional name in pinyin. */
            pinyin: string;
            /** Traditional name in Chinese characters. */
            hanzi: string;
            /** Chinese zodiac animal; names are case-insensitive. */
            animal: "Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig";
            /** Five-element association. */
            element: "Wood" | "Fire" | "Earth" | "Metal" | "Water";
            /** Yin or Yang polarity. */
            polarity: "Yin" | "Yang";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the opposite, traditionally clashing zodiac animal for a sign. */
    "fengshui.get_zodiac_enemy": {
      input: Record<string, unknown>;
      output: {
        /**
         * Gregorian date in YYYY-MM-DD format, from 1700-01-01 through 2300-12-31. Dates and calendar calculations use China Standard Time (UTC+8).
         * @format date
         */
        date?: string;
        /**
         * Calendar convention: lunar starts years at Chinese New Year; solar starts years at Li Chun and months at the twelve jie solar terms (Ba Zi convention). Input dates are always Gregorian.
         * @default "lunar"
         */
        calendar?: "lunar" | "solar";
        /** Chinese zodiac animal; names are case-insensitive. */
        animal: "Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig";
        /** Chinese zodiac animal; names are case-insensitive. */
        enemy: "Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig";
        [key: string]: unknown;
      };
    };
    /** Get the zodiac animal and earthly branch for a local two-hour period; this does not calculate a full hour pillar. */
    "fengshui.get_zodiac_hour": {
      input: {
        /**
         * Local time in 24-hour HH:MM format.
         * @pattern ^([01]\d|2[0-3]):[0-5]\d$
         */
        time: string;
      };
      output: {
        /** Requested local time. */
        time: string;
        /** Chinese zodiac animal; names are case-insensitive. */
        animal: "Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig";
        /** Earthly branch. */
        branch: {
          /** Traditional name in pinyin. */
          pinyin: string;
          /** Traditional name in Chinese characters. */
          hanzi: string;
          /** Chinese zodiac animal; names are case-insensitive. */
          animal: "Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig";
          /** Five-element association. */
          element: "Wood" | "Fire" | "Earth" | "Metal" | "Water";
          /** Yin or Yang polarity. */
          polarity: "Yin" | "Yang";
          [key: string]: unknown;
        };
        /** Start of the two-hour period in HH:MM format. */
        startsAt: string;
        /** End of the two-hour period in HH:MM format. */
        endsAt: string;
        [key: string]: unknown;
      };
    };
    /** Get the lunar month or solar-term month zodiac and pillar for a date. */
    "fengshui.get_zodiac_month": {
      input: {
        /**
         * Gregorian date in YYYY-MM-DD format, from 1700-01-01 through 2300-12-31. Dates and calendar calculations use China Standard Time (UTC+8).
         * @format date
         */
        date: string;
        /**
         * Calendar convention: lunar starts years at Chinese New Year; solar starts years at Li Chun and months at the twelve jie solar terms (Ba Zi convention). Input dates are always Gregorian.
         * @default "lunar"
         */
        calendar?: "lunar" | "solar";
      };
      output: {
        /**
         * Gregorian date in YYYY-MM-DD format, from 1700-01-01 through 2300-12-31. Dates and calendar calculations use China Standard Time (UTC+8).
         * @format date
         */
        date: string;
        /**
         * Calendar convention: lunar starts years at Chinese New Year; solar starts years at Li Chun and months at the twelve jie solar terms (Ba Zi convention). Input dates are always Gregorian.
         * @default "lunar"
         */
        calendar: "lunar" | "solar";
        /**
         * First Gregorian date included in this calendar period.
         * @format date
         */
        startsOn: string;
        /**
         * Last Gregorian date included in this calendar period.
         * @format date
         */
        endsOn: string;
        /** Chinese zodiac animal; names are case-insensitive. */
        animal: "Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig";
        /** Stem-branch pillar. */
        pillar: {
          /** Combined stem-branch name in pinyin. */
          name: string;
          /** Traditional name in Chinese characters. */
          hanzi: string;
          /** Heavenly stem. */
          stem: {
            /** Traditional name in pinyin. */
            pinyin: string;
            /** Traditional name in Chinese characters. */
            hanzi: string;
            /** Five-element association. */
            element: "Wood" | "Fire" | "Earth" | "Metal" | "Water";
            /** Yin or Yang polarity. */
            polarity: "Yin" | "Yang";
            [key: string]: unknown;
          };
          /** Earthly branch. */
          branch: {
            /** Traditional name in pinyin. */
            pinyin: string;
            /** Traditional name in Chinese characters. */
            hanzi: string;
            /** Chinese zodiac animal; names are case-insensitive. */
            animal: "Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig";
            /** Five-element association. */
            element: "Wood" | "Fire" | "Earth" | "Metal" | "Water";
            /** Yin or Yang polarity. */
            polarity: "Yin" | "Yang";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /**
         * Lunar month number, present for the lunar calendar.
         * @minimum 1
         * @maximum 12
         */
        month?: number;
        /** Whether this is a leap lunar month. */
        leap?: boolean;
        /** Solar term opening the month, present for the solar calendar. */
        term?: {
          /** Traditional name in pinyin. */
          pinyin?: string;
          /** Traditional name in Chinese characters. */
          hanzi?: string;
          /** English name of the solar term. */
          english?: string;
          /** Apparent solar longitude in degrees. */
          longitude?: number;
          /**
           * Astronomical instant of the solar term.
           * @format date-time
           */
          occursAt?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the traditional Peach Blossom zodiac animal and compass direction for a sign. */
    "fengshui.get_zodiac_peach_blossom": {
      input: Record<string, unknown>;
      output: {
        /**
         * Gregorian date in YYYY-MM-DD format, from 1700-01-01 through 2300-12-31. Dates and calendar calculations use China Standard Time (UTC+8).
         * @format date
         */
        date?: string;
        /**
         * Calendar convention: lunar starts years at Chinese New Year; solar starts years at Li Chun and months at the twelve jie solar terms (Ba Zi convention). Input dates are always Gregorian.
         * @default "lunar"
         */
        calendar?: "lunar" | "solar";
        /** Chinese zodiac animal; names are case-insensitive. */
        animal: "Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig";
        /** Peach Blossom animal and direction. */
        peachBlossom: {
          /** Chinese zodiac animal; names are case-insensitive. */
          animal: "Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig";
          /** Compass direction. */
          direction: "N" | "NE" | "E" | "SE" | "S" | "SW" | "W" | "NW";
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the zodiac animal forming a traditional six-harmony pair with a sign. */
    "fengshui.get_zodiac_secret_friend": {
      input: Record<string, unknown>;
      output: {
        /**
         * Gregorian date in YYYY-MM-DD format, from 1700-01-01 through 2300-12-31. Dates and calendar calculations use China Standard Time (UTC+8).
         * @format date
         */
        date?: string;
        /**
         * Calendar convention: lunar starts years at Chinese New Year; solar starts years at Li Chun and months at the twelve jie solar terms (Ba Zi convention). Input dates are always Gregorian.
         * @default "lunar"
         */
        calendar?: "lunar" | "solar";
        /** Chinese zodiac animal; names are case-insensitive. */
        animal: "Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig";
        /** Chinese zodiac animal; names are case-insensitive. */
        secretFriend: "Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig";
        [key: string]: unknown;
      };
    };
    /** Get the Chinese year zodiac animal, element and stem-branch pillar for a date. */
    "fengshui.get_zodiac_year": {
      input: {
        /**
         * Gregorian date in YYYY-MM-DD format, from 1700-01-01 through 2300-12-31. Dates and calendar calculations use China Standard Time (UTC+8).
         * @format date
         */
        date: string;
        /**
         * Calendar convention: lunar starts years at Chinese New Year; solar starts years at Li Chun and months at the twelve jie solar terms (Ba Zi convention). Input dates are always Gregorian.
         * @default "lunar"
         */
        calendar?: "lunar" | "solar";
      };
      output: {
        /**
         * Gregorian date in YYYY-MM-DD format, from 1700-01-01 through 2300-12-31. Dates and calendar calculations use China Standard Time (UTC+8).
         * @format date
         */
        date: string;
        /**
         * Calendar convention: lunar starts years at Chinese New Year; solar starts years at Li Chun and months at the twelve jie solar terms (Ba Zi convention). Input dates are always Gregorian.
         * @default "lunar"
         */
        calendar: "lunar" | "solar";
        /** Gregorian year in which the Chinese year began. */
        year: number;
        /**
         * First Gregorian date included in this calendar period.
         * @format date
         */
        startsOn: string;
        /**
         * Last Gregorian date included in this calendar period.
         * @format date
         */
        endsOn: string;
        /** Chinese zodiac animal; names are case-insensitive. */
        animal: "Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig";
        /** Five-element association. */
        element: "Wood" | "Fire" | "Earth" | "Metal" | "Water";
        /** Yin or Yang polarity. */
        polarity: "Yin" | "Yang";
        /** Stem-branch pillar. */
        pillar: {
          /** Combined stem-branch name in pinyin. */
          name: string;
          /** Traditional name in Chinese characters. */
          hanzi: string;
          /** Heavenly stem. */
          stem: {
            /** Traditional name in pinyin. */
            pinyin: string;
            /** Traditional name in Chinese characters. */
            hanzi: string;
            /** Five-element association. */
            element: "Wood" | "Fire" | "Earth" | "Metal" | "Water";
            /** Yin or Yang polarity. */
            polarity: "Yin" | "Yang";
            [key: string]: unknown;
          };
          /** Earthly branch. */
          branch: {
            /** Traditional name in pinyin. */
            pinyin: string;
            /** Traditional name in Chinese characters. */
            hanzi: string;
            /** Chinese zodiac animal; names are case-insensitive. */
            animal: "Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" | "Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig";
            /** Five-element association. */
            element: "Wood" | "Fire" | "Earth" | "Metal" | "Water";
            /** Yin or Yang polarity. */
            polarity: "Yin" | "Yang";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
