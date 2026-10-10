import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Career spread, 7 cards. */
    "roxyapi.cast_career_tarot": {
      input: {
        /** Optional querent question to focus the career spread. It is echoed back on the reading and gives the seven career positions their context */
        question?: string;
        /** Optional seed for reproducible results. The same seed always draws the same seven cards into the same career positions, which is what lets a reading be shared or re-rendered. Omit for a random draw. */
        seed?: string;
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Name of the tarot spread used (e.g. Three-Card, Celtic Cross, Career, Love). */
        spread: string;
        /** The querent question, if one was provided. */
        question?: string;
        /** Seed used for this reading, if one was provided. Same seed reproduces identical results. */
        seed?: string;
        /** Array of 7 career spread positions using SWOT framework, each with a drawn card and position-specific interpretation. */
        positions: Array<Record<string, unknown>>;
        /** Narrative summary that connects the cards drawn across the spread positions into one cohesive reading. */
        summary?: string;
        [key: string]: unknown;
      };
    };
    /** Celtic Cross spread, 10 cards. */
    "roxyapi.cast_celtic_cross_tarot": {
      input: {
        /** Optional querent question to focus the Celtic Cross. It is echoed back on the reading and gives the ten positions their context */
        question?: string;
        /** Optional seed for reproducible results. The same seed always draws the same ten cards into the same Celtic Cross positions, which is what lets a reading be shared or re-rendered. Omit for a random draw. */
        seed?: string;
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Name of the tarot spread used (e.g. Three-Card, Celtic Cross, Career, Love). */
        spread: string;
        /** The querent question, if one was provided. */
        question?: string;
        /** Seed used for this reading, if one was provided. Same seed reproduces identical results. */
        seed?: string;
        /** Array of 10 spread positions forming the complete Celtic Cross layout, each with a drawn card and position-specific interpretation. */
        positions: Array<Record<string, unknown>>;
        /** Narrative summary that connects the cards drawn across the spread positions into one cohesive reading. */
        summary?: string;
        [key: string]: unknown;
      };
    };
    /** Custom spread builder. */
    "roxyapi.cast_custom_tarot": {
      input: {
        /** Optional name for your custom tarot spread layout. Used as the spread identifier in the response. */
        spreadName?: string;
        /**
         * Array of 1-10 custom position definitions for your tarot spread. Each position gets one drawn card with a position-specific interpretation.
         * @minItems 1
         * @maxItems 10
         */
        positions: Array<{
          /** Name for this position in the spread (e.g. Core Issue, Hidden Factor, Best Action) */
          name: string;
          /** Description of what this position reveals in the reading. Guides the tarot interpretation for the card drawn in this slot. */
          interpretation: string;
        }>;
        /** Optional querent question to focus the custom tarot reading. Provides context for position-specific interpretations. */
        question?: string;
        /** Optional seed for reproducible results. Same seed with the same positions produces identical card draws for consistent divination. */
        seed?: string;
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Name of the tarot spread used (e.g. Three-Card, Celtic Cross, Career, Love). */
        spread: string;
        /** The querent question, if one was provided. */
        question?: string;
        /** Seed used for this reading, if one was provided. Same seed reproduces identical results. */
        seed?: string;
        /** Array of custom spread positions matching your defined layout, each with a drawn card and position-specific interpretation. */
        positions: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Cast an I-Ching reading. */
    "roxyapi.cast_iching": {
      input: {
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
        /** Optional seed for reproducible castings. Same seed = same casting every time. Pass any unique identifier (userId, session token, question hash). Omit for random casting. */
        seed?: string;
      };
      output: {
        /** The seed used for this casting (if provided) */
        seed?: string;
        /** Primary hexagram from the casting */
        hexagram?: Record<string, unknown>;
        /** Line values (6-9) from bottom to top. 6=old yin (changing), 7=young yang, 8=young yin, 9=old yang (changing) */
        lines: Array<number>;
        /** Positions of changing lines (1-6, bottom to top) */
        changingLinePositions: Array<number>;
        /** Hexagram the primary transforms into after changing lines (present only if there are changing lines) */
        resultingHexagram?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Love spread, 5 cards. */
    "roxyapi.cast_love_tarot": {
      input: {
        /** Optional querent question to focus the love spread. It is echoed back on the reading and gives the five relationship positions their context */
        question?: string;
        /** Optional seed for reproducible results. The same seed always draws the same five cards into the same love positions, which is what lets a reading be shared or re-rendered. Omit for a random draw. */
        seed?: string;
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Name of the tarot spread used (e.g. Three-Card, Celtic Cross, Career, Love). */
        spread: string;
        /** The querent question, if one was provided. */
        question?: string;
        /** Seed used for this reading, if one was provided. Same seed reproduces identical results. */
        seed?: string;
        /** Array of 5 love spread positions exploring relationship dynamics, each with a drawn card and position-specific interpretation. */
        positions: Array<Record<string, unknown>>;
        /** Narrative summary that connects the cards drawn across the spread positions into one cohesive reading. */
        summary?: string;
        [key: string]: unknown;
      };
    };
    /** Three card spread, past present future. */
    "roxyapi.cast_three_card_tarot": {
      input: {
        /** Optional specific question to focus the reading. Examples: "What should I know about my relationship?", "How can I improve my finances?", "What is blocking my creative growth?" Leave empty for general guidance. */
        question?: string;
        /** Optional seed for reproducible results. Same seed = same 3 cards in same positions. Useful for sharing readings, testing, or ensuring users get consistent results. Omit for random draws. */
        seed?: string;
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Name of the tarot spread used (e.g. Three-Card, Celtic Cross, Career, Love). */
        spread: string;
        /** The querent question, if one was provided. */
        question?: string;
        /** Seed used for this reading, if one was provided. Same seed reproduces identical results. */
        seed?: string;
        /** Array of spread positions, each containing a drawn card with position-specific tarot interpretation. */
        positions: Array<Record<string, unknown>>;
        /** Narrative summary that connects the cards drawn across the spread positions into one cohesive reading. */
        summary?: string;
        [key: string]: unknown;
      };
    };
    /** Yes or no answer. */
    "roxyapi.cast_yes_no_tarot": {
      input: {
        /** Your specific yes/no question. Be clear and focused */
        question?: string;
        /** Optional seed for reproducible results. Same seed + same question = same answer. Useful for testing, sharing readings, or ensuring consistency. Omit for random draws each time. */
        seed?: string;
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** The querent question that was asked, if one was provided. */
        question?: string;
        /** The seed used for this draw, echoed back when one was supplied. Present only if the request carried a seed. Makes a cached or forwarded response self describing, so a reading can be reproduced or shared without the original request beside it. */
        seed?: string;
        /** Tarot-derived answer. Yes = upright card supports a positive outcome */
        answer: "Yes" | "No" | "Maybe";
        /** Answer in the requested language, for display only. Present only when lang is set to a language other than English, since in English it would repeat its canonical partner field exactly */
        answerLocalized?: string;
        /** Confidence level of the answer. Strong = Major Arcana card drawn (powerful, definitive cosmic energy) */
        strength: "Strong" | "Qualified";
        /** Answer strength in the requested language, for display only. Present only when lang is set to a language other than English, since in English it would repeat its canonical partner field exactly */
        strengthLocalized?: string;
        /** card returned by RoxyAPI. */
        card: Record<string, unknown>;
        /** Contextual narrative explaining why this card answers the question with this result. Connects card meaning, orientation, and arcana strength into actionable guidance. */
        interpretation: string;
        [key: string]: unknown;
      };
    };
    /** Convert a Gregorian date OR a complete lunar date. Omit both for today in UTC. The calendar uses the UTC+8 reference meridian; isLeapMonth selects the repeated lunar month. */
    "roxyapi.convert_lunar_date": {
      input: Record<string, unknown> | unknown;
      output: {
        /** The Gregorian date, echoed when one was sent and computed when the lunar fields were. Echoes the request, or the current UTC date when neither side was supplied. */
        gregorianDate: string;
        /** The lunar value. */
        lunar: {
          /** Lunisolar year. It advances on the first day of month 1, not at Li Chun, so it can lag the Gregorian year by up to seven weeks. */
          year: number;
          /** Lunar month, 1 to 12. A leap month repeats the number of the month it follows. */
          month: number;
          /** Day of the lunar month, 1 to 30. A lunar month never has 31 days. */
          day: number;
          /** True when this is the leap repetition of the month number rather than the first pass through it. */
          isLeapMonth: boolean;
          /** Days in this lunar month, 29 for a short month or 30 for a long one. It is the interval between two new moons, so it varies month to month. */
          monthLength: number;
          /** The Gregorian date this lunar day covers, evaluated at the reference meridian. */
          date: string;
          [key: string]: unknown;
        };
        /** The month this lunisolar year repeats, when it has thirteen months. Absent in a twelve month year, so a caller can branch on presence rather than on a sentinel. */
        leapMonthOfYear?: number;
        /** Decimal UTC offset the calendar was evaluated at. Fixed at 8, which is what makes a Chinese lunar date a world constant. */
        referenceOffset: number;
        [key: string]: unknown;
      };
    };
    /** Draw tarot cards. */
    "roxyapi.draw_tarot_cards": {
      input: {
        /**
         * Number of cards to draw (1-78). Common values: 1 for daily card, 3 for past-present-future, 5 for relationship spread, 10 for Celtic Cross
         * @minimum 1
         * @maximum 78
         */
        count: number;
        /** Optional seed for reproducible results. Same seed = same cards in same order. Use format like "userId-date" for daily consistency, or "readingId" for shareable readings. Omit for true randomness. */
        seed?: string;
        /** Whether cards can appear reversed (upside down). Reversed cards have different meanings */
        allowReversals?: boolean;
        /** Whether same card can be drawn multiple times. Set false for traditional deck behavior (each card drawn only once) */
        allowDuplicates?: boolean;
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Seed used for this reading, if one was provided. Same seed reproduces identical draw results for consistent tarot readings. */
        seed?: string;
        /** Array of drawn tarot cards in draw order, each with orientation, keywords, and full meaning for divination. */
        cards: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Find days favored for an activity within a date range of at most 93 days, optionally excluding dates clashing with a zodiac animal. */
    "roxyapi.find_auspicious_days": {
      input: {
        /** Activity to choose a date for. One of wedding, travel, moving-house, opening-business, signing-contracts, construction, groundbreaking, burial, medical-treatment, praying. Matching folds case and punctuation, so moving-house and MOVING_HOUSE both resolve. */
        activity: "wedding" | "travel" | "moving-house" | "opening-business" | "signing-contracts" | "construction" | "groundbreaking" | "burial" | "medical-treatment" | "praying";
        /**
         * First date of the range to search, inclusive.
         * @format date
         */
        startDate: string;
        /**
         * Last date of the range to search, inclusive. The range may not exceed 93 days.
         * @format date
         */
        endDate: string;
        /** Zodiac animal to protect. Days that clash with this animal are dropped from the results, which is how a date is chosen around the people attending rather than in the abstract. One of rat, ox, tiger, rabbit, dragon, snake, horse, goat, monkey, rooster, dog, pig. */
        avoidAnimal?: "rat" | "ox" | "tiger" | "rabbit" | "dragon" | "snake" | "horse" | "goat" | "monkey" | "rooster" | "dog" | "pig";
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Echo of the activity searched for, folded to its canonical identifier. */
        activity: string;
        /** Display label for the activity in the requested language. */
        activityLabel: string;
        /** Echo of the first date of the range. */
        startDate: string;
        /** Echo of the last date of the range. */
        endDate: string;
        /** Number of days in the range, counting both ends. */
        daysSearched: number;
        /** Echo of the animal protected. Absent when none was sent, rather than null. */
        avoidAnimal?: string;
        /** Display name of the protected animal in the requested language, beside the avoidAnimal identifier. Absent when no animal was sent and absent when lang is en, so an English response is unchanged. */
        avoidAnimalLocalized?: string;
        /** Number of favoured days found. This is the count after the clash filter, not the number of days searched. */
        total: number;
        /** The favoured days, in date order. */
        days: Array<{
          /** The Gregorian date of the day, at the reference meridian. */
          date: string;
          /** The lunar value. */
          lunar: {
            /** Lunisolar year. It advances on the first day of month 1, not at Li Chun, so it can lag the Gregorian year by up to seven weeks. */
            year: number;
            /** Lunar month, 1 to 12. A leap month repeats the number of the month it follows. */
            month: number;
            /** Day of the lunar month, 1 to 30. A lunar month never has 31 days. */
            day: number;
            /** True when this is the leap repetition of the month number rather than the first pass through it. */
            isLeapMonth: boolean;
            /** Days in this lunar month, 29 for a short month or 30 for a long one. It is the interval between two new moons, so it varies month to month. */
            monthLength: number;
            /** The Gregorian date this lunar day covers, evaluated at the reference meridian. */
            date: string;
            [key: string]: unknown;
          };
          /** Sexagenary year pillar of the day. Attributed by whole days, so the day Li Chun falls on belongs to the new year for its whole length. A BaZi chart built from a birth TIME uses the term instant instead, so a birth in the hours before the term on that same day carries the previous year pillar. */
          yearPillar: Record<string, unknown>;
          /** Sexagenary month pillar of the day, and the pillar the day officer is counted from. Attributed by whole days like the year pillar, so the day a minor solar term falls on belongs to the new month even when the term arrives late in the evening. This is what an almanac prints, and it is not the same as the month pillar of a birth moment inside that day. */
          monthPillar: Record<string, unknown>;
          /** The dayPillar value. */
          dayPillar: Record<string, unknown>;
          /** The dayOfficer value. */
          dayOfficer: Record<string, unknown>;
          /** The mansion value. */
          mansion: Record<string, unknown>;
          /** The zodiac animal the day clashes with, which is the animal six branches away from the day branch. Anyone born in that animal year traditionally avoids the day for anything important. */
          clashAnimal: string;
          /** Display name of the clashing animal in the requested language. Absent when lang is en, so an English response is unchanged. */
          clashAnimalLocalized?: string;
          /** Activity identifiers, always English kebab case so they stay safe to compare against in code. Use the /calendar/auspicious-days endpoint to search a date range for one of them. */
          favours: Array<string>;
          /** Activity identifiers, always English kebab case so they stay safe to compare against in code. Use the /calendar/auspicious-days endpoint to search a date range for one of them. */
          avoids: Array<string>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get the Chinese almanac for a date in years 1900 through 2100, with lunar date, pillars, day officer, mansion, favored and avoided activities. */
    "roxyapi.get_almanac_day": {
      input: {
        /**
         * Gregorian date in YYYY-MM-DD format, evaluated at the reference meridian. Years 1900 to 2100.
         * @format date
         */
        date: string;
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** The Gregorian date of the day, at the reference meridian. */
        date: string;
        /** The lunar value. */
        lunar: {
          /** Lunisolar year. It advances on the first day of month 1, not at Li Chun, so it can lag the Gregorian year by up to seven weeks. */
          year: number;
          /** Lunar month, 1 to 12. A leap month repeats the number of the month it follows. */
          month: number;
          /** Day of the lunar month, 1 to 30. A lunar month never has 31 days. */
          day: number;
          /** True when this is the leap repetition of the month number rather than the first pass through it. */
          isLeapMonth: boolean;
          /** Days in this lunar month, 29 for a short month or 30 for a long one. It is the interval between two new moons, so it varies month to month. */
          monthLength: number;
          /** The Gregorian date this lunar day covers, evaluated at the reference meridian. */
          date: string;
          [key: string]: unknown;
        };
        /** Sexagenary year pillar of the day. Attributed by whole days, so the day Li Chun falls on belongs to the new year for its whole length. A BaZi chart built from a birth TIME uses the term instant instead, so a birth in the hours before the term on that same day carries the previous year pillar. */
        yearPillar: Record<string, unknown>;
        /** Sexagenary month pillar of the day, and the pillar the day officer is counted from. Attributed by whole days like the year pillar, so the day a minor solar term falls on belongs to the new month even when the term arrives late in the evening. This is what an almanac prints, and it is not the same as the month pillar of a birth moment inside that day. */
        monthPillar: Record<string, unknown>;
        /** The dayPillar value. */
        dayPillar: Record<string, unknown>;
        /** The dayOfficer value. */
        dayOfficer: Record<string, unknown>;
        /** The mansion value. */
        mansion: Record<string, unknown>;
        /** The zodiac animal the day clashes with, which is the animal six branches away from the day branch. Anyone born in that animal year traditionally avoids the day for anything important. */
        clashAnimal: string;
        /** Display name of the clashing animal in the requested language. Absent when lang is en, so an English response is unchanged. */
        clashAnimalLocalized?: string;
        /** Activity identifiers, always English kebab case so they stay safe to compare against in code. Use the /calendar/auspicious-days endpoint to search a date range for one of them. */
        favours: Array<string>;
        /** Activity identifiers, always English kebab case so they stay safe to compare against in code. Use the /calendar/auspicious-days endpoint to search a date range for one of them. */
        avoids: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Read a Gregorian year against a natal BaZi chart, including Ten Gods and pillar interactions. */
    "roxyapi.get_bazi_annual_forecast": {
      input: {
        /**
         * Birth date in YYYY-MM-DD format. Sets the year, month and day pillars
         * @format date
         */
        date: string;
        /**
         * Birth time in 24-hour HH:MM:SS format. Sets the hour pillar, which is one of the four and carries the whole picture of later life and offspring
         * @pattern ^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$
         */
        time: string;
        /** IANA name (e.g. "America/New_York", "Europe/London", "UTC"), decimal hours (e.g. -5 for EST, 1 for CET), or a fixed UTC offset (e.g. "-05:00", "+01:00"). Prefer the IANA name: it is resolved to the offset in force at the birth date and time, historical daylight-saving rules included, while a fixed offset or decimal is taken literally and will be wrong if it does not match the daylight-saving state at that moment. On a transition day a time in the repeated hour is read as its first occurrence and a time in the skipped hour is moved forward past the gap. Invalid timezones return 400 with a validation error. */
        timezone: number | string;
        /**
         * Birth latitude in decimal degrees. Accepted for consistency with the other birth-data endpoints and does not affect any part of a BaZi chart
         * @minimum -90
         * @maximum 90
         */
        latitude?: number;
        /**
         * Birth longitude in decimal degrees. Positive is East, negative is West
         * @minimum -180
         * @maximum 180
         */
        longitude?: number;
        /** Which instant starts the sexagenary DAY, which only matters for a birth between 23:00 and 23:59. "midnight" is the classical position of the Ming compendium San Ming Tong Hui: the day turns at 00:00 and 23:00 to 23:59 is the late zi hour of the day that is ending, so the hour stem is taken from that day. "early-zi" turns the whole day at 23:00, the practice in Hong Kong, Taiwan and much of South East Asia. "split-zi" is the compromise most software implements and the default here: the day still turns at 00:00, but the hour stem is taken from the next day. The three give three different answers for a late-evening birth and identical answers for every other birth. */
        dayBoundary?: "split-zi" | "midnight" | "early-zi";
        /** Which instant starts the sexagenary YEAR. "li-chun" is Beginning of Spring, around 4 February, and is the classical rule every BaZi text uses, so it is the default on this endpoint. "lunar-new-year" is the folk rule people mean when they say which animal they are, and it falls between late January and late February. The two disagree for any birth in the weeks between them: 14 February 2026 is a Wood Snake year under lunar-new-year and a Fire Horse year under li-chun. */
        yearBoundary?: "li-chun" | "lunar-new-year";
        /** Which clock the day boundary and the hour branch are read from, so a correction that carries a birth across midnight moves the day pillar with the hour. "clock" is civil time exactly as a birth certificate records it, which is what most calculators use and the default here. "local-mean" shifts to the mean sun over the birth longitude, a correction of up to 59 minutes at the edge of a wide time zone. "solar" adds the equation of time on top of that, up to a further 16 minutes. Both non-civil options need "longitude" in the request and return 400 without it. */
        hourClock?: "clock" | "local-mean" | "solar";
        /**
         * Gregorian year to read against the natal chart. The annual pillar for that year is resolved under the same year boundary the request selected, so a li-chun reading and a lunar-new-year reading of the same calendar year can differ.
         * @minimum 1551
         * @maximum 2649
         */
        year: number;
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Echo of the birth moment the chart was computed from. */
        birthData: Record<string, unknown>;
        /** The three school conventions this result was computed under. Returned on every BaZi response so a chart is self-describing: two calculators can produce different pillars for one birth and both be correct, and this object says which reading you are holding. */
        conventions: Record<string, unknown>;
        /** Echo of the year requested, which the annual pillar below was resolved for. */
        year: number;
        /** The sexagenary pillar of the year being read. */
        annualPillar: Record<string, unknown>;
        /** Zodiac animal of the year branch. Always English, whatever the lang parameter says. Use animalLocalized for anything a reader sees. */
        animal: string;
        /** Display copy of the animal name in the requested language. Absent for English, so an English response is unchanged. */
        animalLocalized?: string;
        /** Relation the ANNUAL STEM holds to the natal Day Master. This is the single most useful line of an annual reading: it says what the year asks of the chart. */
        tenGod: Record<string, unknown>;
        /** Relation the principal hidden stem of the annual branch holds to the natal Day Master, the slower half of the same reading. */
        branchTenGod: Record<string, unknown>;
        /** How the annual branch stands to the NATAL YEAR branch. same is the twelve-yearly return of the birth animal, the year commonly called ben ming nian. clash, harm and punishment are the three breaking relations, and none means the two branches form no structural relation at all. Always English, whatever the lang parameter says. */
        yearBranchRelation: string;
        /** True when the year returns the birth animal, which is exactly the case where yearBranchRelation is same. Surfaced as its own boolean because it is the one relation most consumers render on its own. */
        benMingNian: boolean;
        /** What this relation between the annual branch and the natal year branch means. */
        yearBranchRelationMeaning: string;
        /** Every combination, clash, harm and punishment the annual pillar forms with each of the four natal pillars. Positions are named natal.year through natal.hour against annual. */
        interactions: Array<Record<string, unknown>>;
        /** One-paragraph reading of what the year asks of this chart. */
        summary: string;
        [key: string]: unknown;
      };
    };
    /** Generate BaZi chart. Resolve ambiguous places with search_cities first; prefer an IANA timezone for historical daylight saving. */
    "roxyapi.get_bazi_chart": {
      input: {
        /**
         * Birth date in YYYY-MM-DD format. Sets the year, month and day pillars
         * @format date
         */
        date: string;
        /**
         * Birth time in 24-hour HH:MM:SS format. Sets the hour pillar, which is one of the four and carries the whole picture of later life and offspring
         * @pattern ^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$
         */
        time: string;
        /** IANA name (e.g. "America/New_York", "Europe/London", "UTC"), decimal hours (e.g. -5 for EST, 1 for CET), or a fixed UTC offset (e.g. "-05:00", "+01:00"). Prefer the IANA name: it is resolved to the offset in force at the birth date and time, historical daylight-saving rules included, while a fixed offset or decimal is taken literally and will be wrong if it does not match the daylight-saving state at that moment. On a transition day a time in the repeated hour is read as its first occurrence and a time in the skipped hour is moved forward past the gap. Invalid timezones return 400 with a validation error. */
        timezone: number | string;
        /**
         * Birth latitude in decimal degrees. Accepted for consistency with the other birth-data endpoints and does not affect any part of a BaZi chart
         * @minimum -90
         * @maximum 90
         */
        latitude?: number;
        /**
         * Birth longitude in decimal degrees. Positive is East, negative is West
         * @minimum -180
         * @maximum 180
         */
        longitude?: number;
        /** Which instant starts the sexagenary DAY, which only matters for a birth between 23:00 and 23:59. "midnight" is the classical position of the Ming compendium San Ming Tong Hui: the day turns at 00:00 and 23:00 to 23:59 is the late zi hour of the day that is ending, so the hour stem is taken from that day. "early-zi" turns the whole day at 23:00, the practice in Hong Kong, Taiwan and much of South East Asia. "split-zi" is the compromise most software implements and the default here: the day still turns at 00:00, but the hour stem is taken from the next day. The three give three different answers for a late-evening birth and identical answers for every other birth. */
        dayBoundary?: "split-zi" | "midnight" | "early-zi";
        /** Which instant starts the sexagenary YEAR. "li-chun" is Beginning of Spring, around 4 February, and is the classical rule every BaZi text uses, so it is the default on this endpoint. "lunar-new-year" is the folk rule people mean when they say which animal they are, and it falls between late January and late February. The two disagree for any birth in the weeks between them: 14 February 2026 is a Wood Snake year under lunar-new-year and a Fire Horse year under li-chun. */
        yearBoundary?: "li-chun" | "lunar-new-year";
        /** Which clock the day boundary and the hour branch are read from, so a correction that carries a birth across midnight moves the day pillar with the hour. "clock" is civil time exactly as a birth certificate records it, which is what most calculators use and the default here. "local-mean" shifts to the mean sun over the birth longitude, a correction of up to 59 minutes at the edge of a wide time zone. "solar" adds the equation of time on top of that, up to a further 16 minutes. Both non-civil options need "longitude" in the request and return 400 without it. */
        hourClock?: "clock" | "local-mean" | "solar";
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Echo of the birth moment the chart was computed from. */
        birthData: Record<string, unknown>;
        /** The three school conventions this result was computed under. Returned on every BaZi response so a chart is self-describing: two calculators can produce different pillars for one birth and both be correct, and this object says which reading you are holding. */
        conventions: Record<string, unknown>;
        /** The four pillars, year first. Each carries its stem, its branch, the hidden stems stored in the branch, the Ten God relation to the Day Master, and the Na Yin sound element of the pair. */
        pillars: Array<Record<string, unknown>>;
        /** The day stem, which is the subject of the whole chart. Everything else in the response is named by what it does to this one. */
        dayMaster: Record<string, unknown>;
        /** Zodiac animal of the year branch, under the year boundary this request applied. Always English, whatever the lang parameter says */
        zodiacAnimal: string;
        /** Zodiac animal name in the requested language, for display only. Present only when lang is set to a language other than English, since in English it would repeat its canonical partner field exactly */
        zodiacAnimalLocalized?: string;
        /** Element balance across the eight chart characters, one entry per phase, with the reading for how represented each one is. */
        fiveElements: Array<Record<string, unknown>>;
        /** Combinations, clashes, harms and punishments running between the four pillars. An empty array means the four pillars stand independently of each other, which is common and is not a defect. */
        interactions: Array<Record<string, unknown>>;
        /** One-paragraph reading composed from the Day Master nature and the seasonal state of its element in the birth month. The narrative entry point for a chart, for a consumer that renders one block before the detail. */
        summary: string;
        [key: string]: unknown;
      };
    };
    /** Calculate BaZi compatibility. Resolve ambiguous places with search_cities first; prefer an IANA timezone for historical daylight saving. */
    "roxyapi.get_bazi_compatibility": {
      input: {
        /** Birth moment of the first person. Each subject carries its own school switches, so two charts built under different conventions can still be compared. */
        personA: {
          /**
           * Birth date in YYYY-MM-DD format. Sets the year, month and day pillars
           * @format date
           */
          date: string;
          /**
           * Birth time in 24-hour HH:MM:SS format. Sets the hour pillar, which is one of the four and carries the whole picture of later life and offspring
           * @pattern ^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$
           */
          time: string;
          /** IANA name (e.g. "America/New_York", "Europe/London", "UTC"), decimal hours (e.g. -5 for EST, 1 for CET), or a fixed UTC offset (e.g. "-05:00", "+01:00"). Prefer the IANA name: it is resolved to the offset in force at the birth date and time, historical daylight-saving rules included, while a fixed offset or decimal is taken literally and will be wrong if it does not match the daylight-saving state at that moment. On a transition day a time in the repeated hour is read as its first occurrence and a time in the skipped hour is moved forward past the gap. Invalid timezones return 400 with a validation error. */
          timezone: number | string;
          /**
           * Birth latitude in decimal degrees. Accepted for consistency with the other birth-data endpoints and does not affect any part of a BaZi chart
           * @minimum -90
           * @maximum 90
           */
          latitude?: number;
          /**
           * Birth longitude in decimal degrees. Positive is East, negative is West
           * @minimum -180
           * @maximum 180
           */
          longitude?: number;
          /** Which instant starts the sexagenary DAY, which only matters for a birth between 23:00 and 23:59. "midnight" is the classical position of the Ming compendium San Ming Tong Hui: the day turns at 00:00 and 23:00 to 23:59 is the late zi hour of the day that is ending, so the hour stem is taken from that day. "early-zi" turns the whole day at 23:00, the practice in Hong Kong, Taiwan and much of South East Asia. "split-zi" is the compromise most software implements and the default here: the day still turns at 00:00, but the hour stem is taken from the next day. The three give three different answers for a late-evening birth and identical answers for every other birth. */
          dayBoundary?: "split-zi" | "midnight" | "early-zi";
          /** Which instant starts the sexagenary YEAR. "li-chun" is Beginning of Spring, around 4 February, and is the classical rule every BaZi text uses, so it is the default on this endpoint. "lunar-new-year" is the folk rule people mean when they say which animal they are, and it falls between late January and late February. The two disagree for any birth in the weeks between them: 14 February 2026 is a Wood Snake year under lunar-new-year and a Fire Horse year under li-chun. */
          yearBoundary?: "li-chun" | "lunar-new-year";
          /** Which clock the day boundary and the hour branch are read from, so a correction that carries a birth across midnight moves the day pillar with the hour. "clock" is civil time exactly as a birth certificate records it, which is what most calculators use and the default here. "local-mean" shifts to the mean sun over the birth longitude, a correction of up to 59 minutes at the edge of a wide time zone. "solar" adds the equation of time on top of that, up to a further 16 minutes. Both non-civil options need "longitude" in the request and return 400 without it. */
          hourClock?: "clock" | "local-mean" | "solar";
        };
        /** Birth moment of the first person. Each subject carries its own school switches, so two charts built under different conventions can still be compared. */
        personB: {
          /**
           * Birth date in YYYY-MM-DD format. Sets the year, month and day pillars
           * @format date
           */
          date: string;
          /**
           * Birth time in 24-hour HH:MM:SS format. Sets the hour pillar, which is one of the four and carries the whole picture of later life and offspring
           * @pattern ^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$
           */
          time: string;
          /** IANA name (e.g. "America/New_York", "Europe/London", "UTC"), decimal hours (e.g. -5 for EST, 1 for CET), or a fixed UTC offset (e.g. "-05:00", "+01:00"). Prefer the IANA name: it is resolved to the offset in force at the birth date and time, historical daylight-saving rules included, while a fixed offset or decimal is taken literally and will be wrong if it does not match the daylight-saving state at that moment. On a transition day a time in the repeated hour is read as its first occurrence and a time in the skipped hour is moved forward past the gap. Invalid timezones return 400 with a validation error. */
          timezone: number | string;
          /**
           * Birth latitude in decimal degrees. Accepted for consistency with the other birth-data endpoints and does not affect any part of a BaZi chart
           * @minimum -90
           * @maximum 90
           */
          latitude?: number;
          /**
           * Birth longitude in decimal degrees. Positive is East, negative is West
           * @minimum -180
           * @maximum 180
           */
          longitude?: number;
          /** Which instant starts the sexagenary DAY, which only matters for a birth between 23:00 and 23:59. "midnight" is the classical position of the Ming compendium San Ming Tong Hui: the day turns at 00:00 and 23:00 to 23:59 is the late zi hour of the day that is ending, so the hour stem is taken from that day. "early-zi" turns the whole day at 23:00, the practice in Hong Kong, Taiwan and much of South East Asia. "split-zi" is the compromise most software implements and the default here: the day still turns at 00:00, but the hour stem is taken from the next day. The three give three different answers for a late-evening birth and identical answers for every other birth. */
          dayBoundary?: "split-zi" | "midnight" | "early-zi";
          /** Which instant starts the sexagenary YEAR. "li-chun" is Beginning of Spring, around 4 February, and is the classical rule every BaZi text uses, so it is the default on this endpoint. "lunar-new-year" is the folk rule people mean when they say which animal they are, and it falls between late January and late February. The two disagree for any birth in the weeks between them: 14 February 2026 is a Wood Snake year under lunar-new-year and a Fire Horse year under li-chun. */
          yearBoundary?: "li-chun" | "lunar-new-year";
          /** Which clock the day boundary and the hour branch are read from, so a correction that carries a birth across midnight moves the day pillar with the hour. "clock" is civil time exactly as a birth certificate records it, which is what most calculators use and the default here. "local-mean" shifts to the mean sun over the birth longitude, a correction of up to 59 minutes at the edge of a wide time zone. "solar" adds the equation of time on top of that, up to a further 16 minutes. Both non-civil options need "longitude" in the request and return 400 without it. */
          hourClock?: "clock" | "local-mean" | "solar";
        };
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Resolved chart of the first person. */
        personA: Record<string, unknown>;
        /** Resolved chart of the second person. */
        personB: Record<string, unknown>;
        /** How the two Day Masters stand to each other by the five-phase cycle, read from person A. peer means the same element, output means A generates B, wealth means A controls B, influence means B controls A, resource means B generates A */
        dayMasterRelation: string;
        /** Every combination, clash, harm and punishment that crosses between the two charts, with each position prefixed by its subject. Only cross-chart pairs are searched: a three-branch formation assembled from two different people is not a formation either chart holds, so trines are not reported here. */
        interactions: Array<Record<string, unknown>>;
        /** Compatibility score from 0 to 100. A RoxyAPI tally over the interactions listed above rather than a figure from any classical text: it starts at a neutral 50, adds for each binding interaction and subtracts for each breaking one */
        score: number;
        /** How many of the interactions bind the two charts together. */
        harmoniousCount: number;
        /** How many of the interactions break between them. */
        challengingCount: number;
        /** One-paragraph reading of the balance between binding and breaking interactions. */
        summary: string;
        [key: string]: unknown;
      };
    };
    /** Assess BaZi Day Master strength with factor scores and favorable and unfavorable elements. */
    "roxyapi.get_bazi_day_master_strength": {
      input: {
        /**
         * Birth date in YYYY-MM-DD format. Sets the year, month and day pillars
         * @format date
         */
        date: string;
        /**
         * Birth time in 24-hour HH:MM:SS format. Sets the hour pillar, which is one of the four and carries the whole picture of later life and offspring
         * @pattern ^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$
         */
        time: string;
        /** IANA name (e.g. "America/New_York", "Europe/London", "UTC"), decimal hours (e.g. -5 for EST, 1 for CET), or a fixed UTC offset (e.g. "-05:00", "+01:00"). Prefer the IANA name: it is resolved to the offset in force at the birth date and time, historical daylight-saving rules included, while a fixed offset or decimal is taken literally and will be wrong if it does not match the daylight-saving state at that moment. On a transition day a time in the repeated hour is read as its first occurrence and a time in the skipped hour is moved forward past the gap. Invalid timezones return 400 with a validation error. */
        timezone: number | string;
        /**
         * Birth latitude in decimal degrees. Accepted for consistency with the other birth-data endpoints and does not affect any part of a BaZi chart
         * @minimum -90
         * @maximum 90
         */
        latitude?: number;
        /**
         * Birth longitude in decimal degrees. Positive is East, negative is West
         * @minimum -180
         * @maximum 180
         */
        longitude?: number;
        /** Which instant starts the sexagenary DAY, which only matters for a birth between 23:00 and 23:59. "midnight" is the classical position of the Ming compendium San Ming Tong Hui: the day turns at 00:00 and 23:00 to 23:59 is the late zi hour of the day that is ending, so the hour stem is taken from that day. "early-zi" turns the whole day at 23:00, the practice in Hong Kong, Taiwan and much of South East Asia. "split-zi" is the compromise most software implements and the default here: the day still turns at 00:00, but the hour stem is taken from the next day. The three give three different answers for a late-evening birth and identical answers for every other birth. */
        dayBoundary?: "split-zi" | "midnight" | "early-zi";
        /** Which instant starts the sexagenary YEAR. "li-chun" is Beginning of Spring, around 4 February, and is the classical rule every BaZi text uses, so it is the default on this endpoint. "lunar-new-year" is the folk rule people mean when they say which animal they are, and it falls between late January and late February. The two disagree for any birth in the weeks between them: 14 February 2026 is a Wood Snake year under lunar-new-year and a Fire Horse year under li-chun. */
        yearBoundary?: "li-chun" | "lunar-new-year";
        /** Which clock the day boundary and the hour branch are read from, so a correction that carries a birth across midnight moves the day pillar with the hour. "clock" is civil time exactly as a birth certificate records it, which is what most calculators use and the default here. "local-mean" shifts to the mean sun over the birth longitude, a correction of up to 59 minutes at the edge of a wide time zone. "solar" adds the equation of time on top of that, up to a further 16 minutes. Both non-civil options need "longitude" in the request and return 400 without it. */
        hourClock?: "clock" | "local-mean" | "solar";
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Echo of the birth moment the chart was computed from. */
        birthData: Record<string, unknown>;
        /** The three school conventions this result was computed under. Returned on every BaZi response so a chart is self-describing: two calculators can produce different pillars for one birth and both be correct, and this object says which reading you are holding. */
        conventions: Record<string, unknown>;
        /** The day stem whose strength is being assessed. */
        dayMaster: Record<string, unknown>;
        /** Strength verdict. One of very-weak, weak, balanced, strong, very-strong, banded on the composite score below: under -3 is very-weak, -3 to under -1 is weak, -1 to under 1 is balanced, 1 to under 3 is strong, 3 and above is very-strong. Always English, whatever the lang parameter says. */
        verdict: string;
        /** Composite support score, negative for an under-supported Day Master and positive for a well-supported one. A RoxyAPI weighting of the three classical factors rather than a figure from any text, published so the verdict can be audited: the three factor contributions sum to exactly this number. */
        score: number;
        /** State of the Day Master element in the birth month, the strongest single input. One of prosperous, supported, resting, imprisoned, dead, which render the classical five wang xiang xiu qiu si. Always English, whatever the lang parameter says; the translated reading is seasonalStateMeaning. */
        seasonalState: string;
        /** The seasonal state in hanzi. Identical under every lang. */
        seasonalStateChinese: string;
        /** What this seasonal state means for the chart. */
        seasonalStateMeaning: string;
        /** How many of the four branches store a stem of the Day Master element. Zero means the day stem is rootless, which is the single most decisive finding a strength reading can return. */
        rootCount: number;
        /** The three classical factors behind the verdict, each with what it found and what it contributed. These are the citable part of the reading; the score is our arithmetic over them. */
        factors: Array<Record<string, unknown>>;
        /** Elements that help this chart. A weak Day Master wants its own element and the one that generates it; a strong one wants the three that drain, spend, or restrain it. Empty when the verdict is balanced, because a centred chart has no categorically favourable element and the incoming luck pillar decides. Always English, whatever the lang parameter says. */
        favorableElements: Array<string>;
        /** Elements that burden this chart, the complement of favorableElements. Also empty when the verdict is balanced. */
        unfavorableElements: Array<string>;
        /** Element headcount across the eight characters, the plain distribution behind the weighted verdict. */
        fiveElements: Array<Record<string, unknown>>;
        /** One-paragraph reading composed from the verdict, the seasonal state, and the rooting finding. */
        summary: string;
        [key: string]: unknown;
      };
    };
    /** Calculate BaZi ten-year luck pillars and the start age, with optional annual overlays. */
    "roxyapi.get_bazi_luck_pillars": {
      input: {
        /**
         * Birth date in YYYY-MM-DD format. Sets the year, month and day pillars
         * @format date
         */
        date: string;
        /**
         * Birth time in 24-hour HH:MM:SS format. Sets the hour pillar, which is one of the four and carries the whole picture of later life and offspring
         * @pattern ^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$
         */
        time: string;
        /** IANA name (e.g. "America/New_York", "Europe/London", "UTC"), decimal hours (e.g. -5 for EST, 1 for CET), or a fixed UTC offset (e.g. "-05:00", "+01:00"). Prefer the IANA name: it is resolved to the offset in force at the birth date and time, historical daylight-saving rules included, while a fixed offset or decimal is taken literally and will be wrong if it does not match the daylight-saving state at that moment. On a transition day a time in the repeated hour is read as its first occurrence and a time in the skipped hour is moved forward past the gap. Invalid timezones return 400 with a validation error. */
        timezone: number | string;
        /**
         * Birth latitude in decimal degrees. Accepted for consistency with the other birth-data endpoints and does not affect any part of a BaZi chart
         * @minimum -90
         * @maximum 90
         */
        latitude?: number;
        /**
         * Birth longitude in decimal degrees. Positive is East, negative is West
         * @minimum -180
         * @maximum 180
         */
        longitude?: number;
        /** Which instant starts the sexagenary DAY, which only matters for a birth between 23:00 and 23:59. "midnight" is the classical position of the Ming compendium San Ming Tong Hui: the day turns at 00:00 and 23:00 to 23:59 is the late zi hour of the day that is ending, so the hour stem is taken from that day. "early-zi" turns the whole day at 23:00, the practice in Hong Kong, Taiwan and much of South East Asia. "split-zi" is the compromise most software implements and the default here: the day still turns at 00:00, but the hour stem is taken from the next day. The three give three different answers for a late-evening birth and identical answers for every other birth. */
        dayBoundary?: "split-zi" | "midnight" | "early-zi";
        /** Which instant starts the sexagenary YEAR. "li-chun" is Beginning of Spring, around 4 February, and is the classical rule every BaZi text uses, so it is the default on this endpoint. "lunar-new-year" is the folk rule people mean when they say which animal they are, and it falls between late January and late February. The two disagree for any birth in the weeks between them: 14 February 2026 is a Wood Snake year under lunar-new-year and a Fire Horse year under li-chun. */
        yearBoundary?: "li-chun" | "lunar-new-year";
        /** Which clock the day boundary and the hour branch are read from, so a correction that carries a birth across midnight moves the day pillar with the hour. "clock" is civil time exactly as a birth certificate records it, which is what most calculators use and the default here. "local-mean" shifts to the mean sun over the birth longitude, a correction of up to 59 minutes at the edge of a wide time zone. "solar" adds the equation of time on top of that, up to a further 16 minutes. Both non-civil options need "longitude" in the request and return 400 without it. */
        hourClock?: "clock" | "local-mean" | "solar";
        /** Subject sex, used only to pick the luck-pillar direction: a male born in a yang-stem year and a female born in a yin-stem year run forward through the sexagenary cycle, and the other two combinations run backward. It affects nothing else in the response. */
        gender: "male" | "female";
        /**
         * How many ten-year luck pillars to return, 1 to 12, default 8. Eight covers eighty years from the start age, which reaches past a normal lifetime for most start ages.
         * @minimum 1
         * @maximum 12
         */
        count?: number;
        /**
         * First Gregorian year of the annual pillar overlay. Omit it to leave annualPillars out of the response entirely. The annual pillar is the year the chart is currently walking through, read against the ten-year luck pillar underneath it.
         * @minimum 1551
         * @maximum 2649
         */
        annualFromYear?: number;
        /**
         * How many consecutive years the annual overlay covers, 1 to 20, default 10. Ignored unless annualFromYear is present.
         * @minimum 1
         * @maximum 20
         */
        annualYears?: number;
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Echo of the birth moment the chart was computed from. */
        birthData: Record<string, unknown>;
        /** The three school conventions this result was computed under. Returned on every BaZi response so a chart is self-describing: two calculators can produce different pillars for one birth and both be correct, and this object says which reading you are holding. */
        conventions: Record<string, unknown>;
        /** Echo of the sex sent, which is what selected the direction below. */
        gender: string;
        /** Which way the sequence walks the sexagenary cycle. A male born in a yang-stem year and a female born in a yin-stem year run forward, and the other two combinations run backward. Always English, whatever the lang parameter says. */
        direction: string;
        /** Age in whole years at which the first luck pillar begins. Counted from the birth instant to the adjacent minor solar term at three days to the year, forward for a forward direction and backward for a reverse one. */
        startAge: number;
        /** Additional months past startAge, 0 to 11, from the remainder of the same count at one day to four months. Calculators that round the whole count to the nearest year will differ from this by up to six months. */
        startAgeMonths: number;
        /** Days from the birth instant to the minor solar term the count ran to, before conversion. Published so the start age can be checked rather than taken on trust. */
        daysToTerm: number;
        /** The minor solar term the count ran to. One of the twelve that also move the month pillar. Always the pinyin identifier, whatever the lang parameter says. */
        boundaryTerm: string;
        /** Display name of that same term, in the requested language. Always present, and English when lang is en. Several English renderings of a term are in circulation, so treat this as the label and boundaryTerm as the value. */
        boundaryTermName: string;
        /** The ten-year periods in order, each with the relation its stem holds to the natal Day Master. */
        luckPillars: Array<Record<string, unknown>>;
        /** Year-by-year overlay, present only when annualFromYear was sent. Each year names the luck pillar it falls inside. */
        annualPillars?: Array<Record<string, unknown>>;
        /** One-paragraph reading of the sequence direction and its start. */
        summary: string;
        [key: string]: unknown;
      };
    };
    /** Generate full Human Design bodygraph. Resolve ambiguous places with search_cities first; prefer an IANA timezone for historical daylight saving. */
    "roxyapi.get_bodygraph": {
      input: {
        /**
         * Birth date in YYYY-MM-DD format. The anchor for both the Personality activations at birth and the Design activations 88 degrees of solar arc earlier.
         * @format date
         */
        date: string;
        /**
         * Birth time in 24-hour HH:MM:SS format. Precision matters: the profile lines and gate boundaries shift with the exact minute of birth.
         * @pattern ^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$
         */
        time: string;
        /** IANA name (e.g. "America/New_York", "Europe/London", "UTC"), decimal hours (e.g. -5 for EST, 1 for CET), or a fixed UTC offset (e.g. "-05:00", "+01:00"). Prefer the IANA name: it is resolved to the offset in force at the birth date and time, historical daylight-saving rules included, while a fixed offset or decimal is taken literally and will be wrong if it does not match the daylight-saving state at that moment. On a transition day a time in the repeated hour is read as its first occurrence and a time in the skipped hour is moved forward past the gap. Invalid timezones return 400 with a validation error. */
        timezone: number | string;
        /**
         * Birth latitude in decimal degrees. Optional and does not affect the bodygraph, which depends only on ecliptic longitudes
         * @minimum -90
         * @maximum 90
         */
        latitude?: number;
        /**
         * Birth longitude in decimal degrees. Optional and does not affect the bodygraph
         * @minimum -180
         * @maximum 180
         */
        longitude?: number;
        /** Lunar node convention. "mean" is the smoothed average node, which always moves retrograde; "true" is the osculating node, which tracks the real perturbed node, oscillates up to about 1.5 degrees either side of the mean on a 173-day cycle, and can briefly turn direct */
        nodeType?: "mean" | "true";
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Human Design energy type. One of Manifestor, Generator, Manifesting Generator, Projector, Reflector */
        type: string;
        /** Energy type name in the requested language, for display only. Present only when lang is set to a language other than English, since in English it would repeat its canonical partner field exactly */
        typeLocalized?: string;
        /** What the aura of this type does and how it is designed to engage life. The grounding text for the type label, so a consuming agent does not have to supply the meaning itself. */
        typeDescription: string;
        /** The aura mechanic of the type: how the energy field itself operates, for example open and enveloping, or closed and repelling. */
        aura: string;
        /** The aura strategy for engaging life correctly for this type. Always English, whatever the lang parameter says */
        strategy: string;
        /** Strategy name in the requested language, for display only. Present only when lang is set to a language other than English, since in English it would repeat its canonical partner field exactly */
        strategyLocalized?: string;
        /** How to actually apply the strategy. The strategy field alone is a bare label such as Respond or Inform; this is the operating instruction behind it. */
        strategyDescription: string;
        /** Inner authority for decision making. One of Emotional, Sacral, Splenic, Ego, Self-Projected, Mental, Lunar */
        authority: string;
        /** Inner authority name in the requested language, for display only. Present only when lang is set to a language other than English, since in English it would repeat its canonical partner field exactly */
        authorityLocalized?: string;
        /** How the decision is made, the timing it requires, and the characteristic trap. Inner authority is the most actionable output of a Human Design chart, so this is the field to lean on when grounding a reading. */
        authorityDescription: string;
        /** The signature feeling of living in alignment with the type. Always English, whatever the lang parameter says */
        signature: string;
        /** Signature theme name in the requested language, for display only. Present only when lang is set to a language other than English, since in English it would repeat its canonical partner field exactly */
        signatureLocalized?: string;
        /** The not-self theme, the recurring feeling that signals being out of alignment. Always English, whatever the lang parameter says */
        notSelf: string;
        /** Not-self theme name in the requested language, for display only. Present only when lang is set to a language other than English, since in English it would repeat its canonical partner field exactly */
        notSelfLocalized?: string;
        /** Profile in conscious/unconscious form from the Personality Sun line over the Design Sun line. */
        profile: string;
        /** The two line keynotes the profile is built from, conscious over unconscious, so the profile is readable without a separate lookup. */
        profileKeynotes: Record<string, unknown>;
        /** Meaning of the combined profile. A profile is not the sum of its two lines: 6/2 has its own meaning that neither the line 6 nor the line 2 keynote carries alone. */
        profileDescription: string;
        /** Definition type from the number of connected components among defined centers. One of None, Single, Split, Triple Split, Quadruple Split */
        definition: string;
        /** Definition type name in the requested language, for display only. Present only when lang is set to a language other than English, since in English it would repeat its canonical partner field exactly */
        definitionLocalized?: string;
        /** How energy flows through the defined centers in this configuration, and what the configuration needs. For a split, this is where the bridging gates of other people matter. */
        definitionDescription: string;
        /** What the two chart sides are: personality is the conscious mind side, design is the unconscious body side computed 88 degrees of solar arc before birth. Returned once at the top level rather than repeated across all 26 activations. */
        sides: Record<string, unknown>;
        /** The Design moment as an ISO 8601 UTC instant: the exact time the Sun stood 88 degrees of solar arc before its natal longitude, and the instant every Design activation was computed at. Compare it with the Design date a reference tool prints to validate the chart on the moment itself. */
        designInstantUtc: string;
        /** The incarnation cross built from the four cardinal gates and the profile angle. */
        incarnationCross: Record<string, unknown>;
        /** All nine centers with their defined state and active gates. */
        centers: Array<Record<string, unknown>>;
        /** The defined channels where both gates are activated. */
        channels: Array<Record<string, unknown>>;
        /** All 26 activations, 13 Personality and 13 Design. */
        gates: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Daily horoscope by zodiac sign. */
    "roxyapi.get_daily_horoscope": {
      input: {
        /** Zodiac sign. Case-insensitive input is normalized to lowercase. */
        sign: "aries" | "taurus" | "gemini" | "cancer" | "leo" | "virgo" | "libra" | "scorpio" | "sagittarius" | "capricorn" | "aquarius" | "pisces";
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
        /**
         * Forecast date in YYYY-MM-DD format. Past and future dates are both supported, for editorial scheduling and backfill
         * @format date
         */
        date?: string;
        /** Selects which period counts as current when date is omitted. Defaults to UTC, so the forecast rolls over at 00:00 UTC on each day. Pass the timezone of the end user to roll over on their local clock instead. Ignored when date is set. Accepts an IANA name (e.g. "America/New_York"), decimal hours (e.g. 5.5 for IST), or a fixed UTC offset (e.g. "-05:00"). */
        timezone?: string;
      };
      output: {
        /** Zodiac sign for this horoscope. */
        sign: string;
        /** Date of this daily horoscope (YYYY-MM-DD). */
        date: string;
        /** The single most relevant event of the period, whichever life area it touches, read into the whole-sign houses of this sign. The same event that leads column, at lede length rather than developed into a full movement, and checkable against the events array */
        overview: string;
        /** Love and relationship forecast, read into the whole-sign houses of this sign. The same ranked events that drive column, filtered to romance and partnership, plus the standing placements that reach it */
        love: string;
        /** Career and professional outlook, read into the whole-sign houses of this sign. The same ranked events that drive column, filtered to career, work and reputation, plus the standing placements that reach it */
        career: string;
        /** Health, energy, and wellness guidance, read into the whole-sign houses of this sign. The same ranked events that drive column, filtered to health, plus the standing placements that reach it */
        health: string;
        /** Financial outlook and money-related guidance, read into the whole-sign houses of this sign. The same ranked events that drive column, filtered to finance, plus the standing placements that reach it */
        finance: string;
        /** The single actionable takeaway from the leading event of the period, read into the whole-sign houses of this sign and checkable against the events array. Drawn from the same event as overview, kept to a short, actionable pair of sentences rather than grown to match the other sections */
        advice: string;
        /** The full column for this period, ready to run as one piece, with paragraphs separated by a blank line. Names the events driving it and the dates they fall on, read into the whole-sign houses of this sign */
        column: string;
        /** The dated astronomical events this reading is built on, earliest first. Every field in every row can be checked against an independent authority, so a column can be fact-checked before it is published */
        events: Array<Record<string, unknown>>;
        /** Lucky number for the day, 1 to 9, from the traditional planetary number correspondence applied to the planet that governs this sign today. Not a random draw and not a function of the date. */
        luckyNumber: number;
        /** Lucky color for the day, drawn from the three colors of the sign element and selected by the planet governing the reading. */
        luckyColor: string;
        /** Most compatible zodiac signs for this sign. Trine partners (same element) followed by a sextile partner (complementary element) */
        compatibleSigns: Array<string>;
        /** Active planetary transits affecting this sign today, with house activations. Each transit shows the planet, its current sign, and which house it activates for the queried sign */
        activeTransits: Array<string>;
        /** Current Moon sign. Changes every 2-3 days, sets the emotional tone for all signs. */
        moonSign: string;
        /** Display name of the current lunar phase, one of the eight standard phases from New Moon through Waning Crescent. Translates in place with the lang parameter, like the moonSign beside it, so render it directly. */
        moonPhase: string;
        /**
         * Overall energy for this sign today (1-10). Derived from how many aspects are in force between the planets, how tight they are, whether they are harmonious or challenging, and which houses they fall in for this sign, so a busy day rates higher than a quiet one and a harmonious day higher than a hostile one of the same weight
         * @minimum 1
         * @maximum 10
         */
        energyRating: number;
        [key: string]: unknown;
      };
    };
    /** Daily tarot card. */
    "roxyapi.get_daily_tarot": {
      input: {
        /** Optional seed for reproducible readings. Same seed + same date = same card every time. Pass any unique identifier (userId, email hash, session token). Omit for anonymous daily readings. */
        seed?: string;
        /**
         * Date for the reading in YYYY-MM-DD format. Defaults to today (UTC)
         * @format date
         */
        date?: string;
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Date of the daily tarot reading in YYYY-MM-DD format (UTC). Determines which card is drawn for seeded readings. */
        date: string;
        /** Seed used for this daily reading. Same seed on the same date always produces the identical card for reproducible daily divination. */
        seed: string;
        /** card returned by RoxyAPI. */
        card: Record<string, unknown>;
        /** Concise daily tarot message summarizing the card, its orientation, key themes, and brief guidance for the day. */
        dailyMessage: string;
        [key: string]: unknown;
      };
    };
    /** Summarize personal forecast events into the next 24 hours, 7 days, 30 days, and 90 days. Preserve explicit domains, weights, and per-window top-event count. */
    "roxyapi.get_forecast_digest": {
      input: {
        /** Birth details for the single forecast subject. Prefer an IANA timezone for historical daylight saving; latitude and longitude are optional. */
        birthData: {
          /**
           * Birth date in YYYY-MM-DD format. Anchors the natal chart and the Vimshottari dasha sequence.
           * @format date
           */
          date: string;
          /**
           * Birth time in 24-hour HH:MM:SS format. Precision matters for the natal positions the transit aspects are measured against.
           * @pattern ^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$
           */
          time: string;
          /** IANA name (e.g. "America/New_York", "Europe/London", "UTC"), decimal hours (e.g. -5 for EST, 1 for CET), or a fixed UTC offset (e.g. "-05:00", "+01:00"). Prefer the IANA name: it is resolved to the offset in force at the birth date and time, historical daylight-saving rules included, while a fixed offset or decimal is taken literally and will be wrong if it does not match the daylight-saving state at that moment. On a transition day a time in the repeated hour is read as its first occurrence and a time in the skipped hour is moved forward past the gap. Invalid timezones return 400 with a validation error. */
          timezone: number | string;
          /**
           * Birth latitude in decimal degrees. Optional and does not affect the timeline. Defaults to 0.
           * @minimum -90
           * @maximum 90
           */
          latitude?: number;
          /**
           * Birth longitude in decimal degrees. Optional and does not affect the timeline. Defaults to 0.
           * @minimum -180
           * @maximum 180
           */
          longitude?: number;
        };
        /**
         * Start anchor for every window in YYYY-MM-DD format. The next 24h, 7d, 30d, and 90d windows are measured forward from this date at 00:00:00 UTC. Defaults to today in UTC.
         * @format date
         */
        startDate?: string;
        /** Which forecast domains to include before rolling up the windows. Defaults to all three. */
        domains?: Array<"western" | "vedic" | "biorhythm">;
        /**
         * Drop events scoring below this significance threshold from 0 to 100 before the rollup. Defaults to 0.
         * @minimum 0
         * @maximum 100
         */
        minSignificance?: number;
        /** Per-domain significance multipliers applied before the significance floor and event cap. Bias which domains survive filtering and the cap. Omitted domains default to a weight of 1. Valid keys are western, vedic, and biorhythm. */
        domainWeights?: {
          /**
           * Multiplier for this domain significance. 1 leaves it unchanged, above 1 promotes the domain, below 1 demotes it.
           * @minimum 0
           * @maximum 100
           */
          western?: number;
          /**
           * Multiplier for this domain significance. 1 leaves it unchanged, above 1 promotes the domain, below 1 demotes it.
           * @minimum 0
           * @maximum 100
           */
          vedic?: number;
          /**
           * Multiplier for this domain significance. 1 leaves it unchanged, above 1 promotes the domain, below 1 demotes it.
           * @minimum 0
           * @maximum 100
           */
          biorhythm?: number;
        };
        /**
         * Number of highest-significance events to surface per window. Defaults to 3, capped at 20.
         * @minimum 0
         * @maximum 20
         */
        top?: number;
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Echo of the birth subject this digest was built for. */
        birthData: Record<string, unknown>;
        /** Start anchor every window is measured from. */
        startDate: string;
        /** Last day of the resolved 90 day horizon the timeline was built over before slicing. */
        endDate: string;
        /** The four rollups in ascending window length: next 24h, 7d, 30d, and 90d from the start anchor. */
        windows: Array<{
          /** Length of this window in days forward from the start anchor. One of 1, 7, 30, 90. */
          days: number;
          /** Inclusive lower bound of the window as an ISO-8601 UTC datetime, the start anchor. */
          from: string;
          /** Exclusive upper bound of the window as an ISO-8601 UTC datetime, the start anchor plus the window length. */
          to: string;
          /** Number of events whose datetime falls inside this window. */
          count: number;
          /** Count of events in this window broken down by domain. Only domains with at least one event in the window are present. The values sum to count. */
          byDomain: Record<string, unknown>;
          /** Count of events in this window broken down by event type. Only types with at least one event in the window are present. The values sum to count. */
          byType: Record<string, unknown>;
          /** The highest-significance events in this window, most significant first, up to the requested top count. The same TimelineEvent shape as the timeline endpoints. */
          top: Array<{
            /** Calendar date of the event in YYYY-MM-DD (UTC). */
            date: string;
            /** Exact instant of the event as an ISO-8601 UTC datetime, to the nearest second. Astronomical events are refined to this instant by search, not reported at a daily sample point; a dasha-change is the period boundary itself, counted from the birth instant. */
            datetime: string;
            /** Forecast domain. western covers transit aspects, sign ingresses, retrograde stations, eclipses, and new and full moons. vedic covers Vimshottari mahadasha, antardasha, and pratyantardasha boundaries. biorhythm covers critical days. A stable machine value, never localized, so consumers can branch on it under any language. */
            domain: string;
            /** Event kind. transit-aspect, sign-ingress, retrograde-station, eclipse, and lunar-phase are western, dasha-change is vedic Vimshottari, critical-day is biorhythm. A stable machine value, never localized, so consumers can branch on it under any language. */
            type: string;
            /** Primary subject of the event. A transiting planet for western events, Sun for a solar eclipse, Moon for a lunar eclipse or a new or full moon, or the critical cycle for biorhythm days. For a dasha-change, the Vimshottari lords outermost first, joined by a hyphen, then one space and the level: Saturn Mahadasha, Saturn-Mercury Antardasha, Saturn-Mercury-Ketu Pratyantardasha. Lords are always one of Ketu, Venus, Sun, Moon, Mars, Rahu, Jupiter, Saturn, Mercury. Never localized. */
            body: string;
            /** For a transit-aspect, the natal body the transit aspects. For a sign-ingress, the zodiac sign entered, and for a lunar-phase, the zodiac sign of the New or Full Moon. Absent for other event types. */
            target?: string;
            /** For a transit-aspect, the angular relationship. One of conjunction, sextile, square, trine, opposition. Absent for other event types. */
            aspect?: string;
            /** For a transit-aspect, the separation in degrees from the exact aspect at the reported instant, rounded to three decimals. The instant is the moment the aspect perfects, so this reads 0. Absent for other event types. */
            orb?: number;
            /** For a retrograde-station, whether the planet turns retrograde or direct. A stable machine value, never localized. Absent for other event types. */
            station?: string;
            /** For an eclipse, its classification. total and penumbral apply to lunar eclipses, partial applies to both, annular and total apply to solar eclipses. A stable machine value, never localized. Absent for other event types. */
            kind?: string;
            /** For a lunar eclipse, the peak fraction from 0 to 1 of the Moon disc covered by Earth umbra. 1 for a total lunar eclipse, between 0 and 1 for a partial, 0 for a penumbral. Absent for solar eclipses and other event types. */
            obscuration?: number;
            /** For a lunar-phase event, which syzygy it is: new-moon (Sun-Moon conjunction) or full-moon (Sun-Moon opposition). The intermediate quarters are not emitted. A stable machine value, never localized. Absent for other event types. */
            phase?: string;
            /** Plain-language summary of the event, suitable for direct display. The only localized field: when lang is set this sentence, and the body, target, and aspect names within it, render in the requested language while the structured fields stay English. */
            description: string;
            /** Importance score from 0 to 100. Outer-planet exact transit aspects and mahadasha changes score highest; fast Moon events and biorhythm critical days score lower. When domainWeights is supplied this is the weighted score, rounded and clamped to 0 to 100, which is the same value the significance floor and the event cap acted on. */
            significance: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Build a personal, cross-domain forecast timeline. The provider clamps the window to at most 90 days and caps events at 200; use returned startDate and endDate as the resolved window. */
    "roxyapi.get_forecast_timeline": {
      input: {
        /** Birth details for the single forecast subject. Prefer an IANA timezone for historical daylight saving; latitude and longitude are optional. */
        birthData: {
          /**
           * Birth date in YYYY-MM-DD format. Anchors the natal chart and the Vimshottari dasha sequence.
           * @format date
           */
          date: string;
          /**
           * Birth time in 24-hour HH:MM:SS format. Precision matters for the natal positions the transit aspects are measured against.
           * @pattern ^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$
           */
          time: string;
          /** IANA name (e.g. "America/New_York", "Europe/London", "UTC"), decimal hours (e.g. -5 for EST, 1 for CET), or a fixed UTC offset (e.g. "-05:00", "+01:00"). Prefer the IANA name: it is resolved to the offset in force at the birth date and time, historical daylight-saving rules included, while a fixed offset or decimal is taken literally and will be wrong if it does not match the daylight-saving state at that moment. On a transition day a time in the repeated hour is read as its first occurrence and a time in the skipped hour is moved forward past the gap. Invalid timezones return 400 with a validation error. */
          timezone: number | string;
          /**
           * Birth latitude in decimal degrees. Optional and does not affect the timeline. Defaults to 0.
           * @minimum -90
           * @maximum 90
           */
          latitude?: number;
          /**
           * Birth longitude in decimal degrees. Optional and does not affect the timeline. Defaults to 0.
           * @minimum -180
           * @maximum 180
           */
          longitude?: number;
        };
        /**
         * First day of the forecast window in YYYY-MM-DD format. Defaults to today in UTC.
         * @format date
         */
        startDate?: string;
        /**
         * Last day of the forecast window in YYYY-MM-DD format. Defaults to startDate plus 30 days. The window is clamped to a maximum of 90 days from startDate.
         * @format date
         */
        endDate?: string;
        /** Which forecast domains to include. Defaults to all three. Pass a subset to scope the timeline to one or two engines. */
        domains?: Array<"western" | "vedic" | "biorhythm">;
        /**
         * Drop events scoring below this significance threshold from 0 to 100. Defaults to 0, keeping all events.
         * @minimum 0
         * @maximum 100
         */
        minSignificance?: number;
        /** Per-domain significance multipliers applied before the significance floor and event cap. Bias which domains survive filtering and the cap. Omitted domains default to a weight of 1. Valid keys are western, vedic, and biorhythm. */
        domainWeights?: {
          /**
           * Multiplier for this domain significance. 1 leaves it unchanged, above 1 promotes the domain, below 1 demotes it.
           * @minimum 0
           * @maximum 100
           */
          western?: number;
          /**
           * Multiplier for this domain significance. 1 leaves it unchanged, above 1 promotes the domain, below 1 demotes it.
           * @minimum 0
           * @maximum 100
           */
          vedic?: number;
          /**
           * Multiplier for this domain significance. 1 leaves it unchanged, above 1 promotes the domain, below 1 demotes it.
           * @minimum 0
           * @maximum 100
           */
          biorhythm?: number;
        };
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Echo of the birth subject this forecast was built for. */
        birthData: Record<string, unknown>;
        /** First day of the resolved forecast window. */
        startDate: string;
        /** Last day of the resolved forecast window after the horizon clamp. */
        endDate: string;
        /** Number of events in the timeline after deduplication, filtering, and the event cap. */
        count: number;
        /** The merged, time-ordered forecast events across the requested domains. */
        events: Array<{
          /** Calendar date of the event in YYYY-MM-DD (UTC). */
          date: string;
          /** Exact instant of the event as an ISO-8601 UTC datetime, to the nearest second. Astronomical events are refined to this instant by search, not reported at a daily sample point; a dasha-change is the period boundary itself, counted from the birth instant. */
          datetime: string;
          /** Forecast domain. western covers transit aspects, sign ingresses, retrograde stations, eclipses, and new and full moons. vedic covers Vimshottari mahadasha, antardasha, and pratyantardasha boundaries. biorhythm covers critical days. A stable machine value, never localized, so consumers can branch on it under any language. */
          domain: string;
          /** Event kind. transit-aspect, sign-ingress, retrograde-station, eclipse, and lunar-phase are western, dasha-change is vedic Vimshottari, critical-day is biorhythm. A stable machine value, never localized, so consumers can branch on it under any language. */
          type: string;
          /** Primary subject of the event. A transiting planet for western events, Sun for a solar eclipse, Moon for a lunar eclipse or a new or full moon, or the critical cycle for biorhythm days. For a dasha-change, the Vimshottari lords outermost first, joined by a hyphen, then one space and the level: Saturn Mahadasha, Saturn-Mercury Antardasha, Saturn-Mercury-Ketu Pratyantardasha. Lords are always one of Ketu, Venus, Sun, Moon, Mars, Rahu, Jupiter, Saturn, Mercury. Never localized. */
          body: string;
          /** For a transit-aspect, the natal body the transit aspects. For a sign-ingress, the zodiac sign entered, and for a lunar-phase, the zodiac sign of the New or Full Moon. Absent for other event types. */
          target?: string;
          /** For a transit-aspect, the angular relationship. One of conjunction, sextile, square, trine, opposition. Absent for other event types. */
          aspect?: string;
          /** For a transit-aspect, the separation in degrees from the exact aspect at the reported instant, rounded to three decimals. The instant is the moment the aspect perfects, so this reads 0. Absent for other event types. */
          orb?: number;
          /** For a retrograde-station, whether the planet turns retrograde or direct. A stable machine value, never localized. Absent for other event types. */
          station?: string;
          /** For an eclipse, its classification. total and penumbral apply to lunar eclipses, partial applies to both, annular and total apply to solar eclipses. A stable machine value, never localized. Absent for other event types. */
          kind?: string;
          /** For a lunar eclipse, the peak fraction from 0 to 1 of the Moon disc covered by Earth umbra. 1 for a total lunar eclipse, between 0 and 1 for a partial, 0 for a penumbral. Absent for solar eclipses and other event types. */
          obscuration?: number;
          /** For a lunar-phase event, which syzygy it is: new-moon (Sun-Moon conjunction) or full-moon (Sun-Moon opposition). The intermediate quarters are not emitted. A stable machine value, never localized. Absent for other event types. */
          phase?: string;
          /** Plain-language summary of the event, suitable for direct display. The only localized field: when lang is set this sentence, and the body, target, and aspect names within it, render in the requested language while the structured fields stay English. */
          description: string;
          /** Importance score from 0 to 100. Outer-planet exact transit aspects and mahadasha changes score highest; fast Moon events and biorhythm critical days score lower. When domainWeights is supplied this is the weighted score, rounded and clamped to 0 to 100, which is the same value the significance floor and the event cap acted on. */
          significance: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Calculate Human Design connection chart. Resolve ambiguous places with search_cities first; prefer an IANA timezone for historical daylight saving. */
    "roxyapi.get_human_design_connection": {
      input: {
        /** Birth moment of the first person in the connection. */
        personA: {
          /**
           * Birth date in YYYY-MM-DD format. The anchor for both the Personality activations at birth and the Design activations 88 degrees of solar arc earlier.
           * @format date
           */
          date: string;
          /**
           * Birth time in 24-hour HH:MM:SS format. Precision matters: the profile lines and gate boundaries shift with the exact minute of birth.
           * @pattern ^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$
           */
          time: string;
          /** IANA name (e.g. "America/New_York", "Europe/London", "UTC"), decimal hours (e.g. -5 for EST, 1 for CET), or a fixed UTC offset (e.g. "-05:00", "+01:00"). Prefer the IANA name: it is resolved to the offset in force at the birth date and time, historical daylight-saving rules included, while a fixed offset or decimal is taken literally and will be wrong if it does not match the daylight-saving state at that moment. On a transition day a time in the repeated hour is read as its first occurrence and a time in the skipped hour is moved forward past the gap. Invalid timezones return 400 with a validation error. */
          timezone: number | string;
          /**
           * Birth latitude in decimal degrees. Optional and does not affect the bodygraph, which depends only on ecliptic longitudes
           * @minimum -90
           * @maximum 90
           */
          latitude?: number;
          /**
           * Birth longitude in decimal degrees. Optional and does not affect the bodygraph
           * @minimum -180
           * @maximum 180
           */
          longitude?: number;
          /** Lunar node convention. "mean" is the smoothed average node, which always moves retrograde; "true" is the osculating node, which tracks the real perturbed node, oscillates up to about 1.5 degrees either side of the mean on a 173-day cycle, and can briefly turn direct */
          nodeType?: "mean" | "true";
        };
        /** Birth moment of the first person in the connection. */
        personB: {
          /**
           * Birth date in YYYY-MM-DD format. The anchor for both the Personality activations at birth and the Design activations 88 degrees of solar arc earlier.
           * @format date
           */
          date: string;
          /**
           * Birth time in 24-hour HH:MM:SS format. Precision matters: the profile lines and gate boundaries shift with the exact minute of birth.
           * @pattern ^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$
           */
          time: string;
          /** IANA name (e.g. "America/New_York", "Europe/London", "UTC"), decimal hours (e.g. -5 for EST, 1 for CET), or a fixed UTC offset (e.g. "-05:00", "+01:00"). Prefer the IANA name: it is resolved to the offset in force at the birth date and time, historical daylight-saving rules included, while a fixed offset or decimal is taken literally and will be wrong if it does not match the daylight-saving state at that moment. On a transition day a time in the repeated hour is read as its first occurrence and a time in the skipped hour is moved forward past the gap. Invalid timezones return 400 with a validation error. */
          timezone: number | string;
          /**
           * Birth latitude in decimal degrees. Optional and does not affect the bodygraph, which depends only on ecliptic longitudes
           * @minimum -90
           * @maximum 90
           */
          latitude?: number;
          /**
           * Birth longitude in decimal degrees. Optional and does not affect the bodygraph
           * @minimum -180
           * @maximum 180
           */
          longitude?: number;
          /** Lunar node convention. "mean" is the smoothed average node, which always moves retrograde; "true" is the osculating node, which tracks the real perturbed node, oscillates up to about 1.5 degrees either side of the mean on a 173-day cycle, and can briefly turn direct */
          nodeType?: "mean" | "true";
        };
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Total number of connected channels between the two people. Equals the length of channels and the sum of the summary counts. */
        totalChannels: number;
        /** Every connected channel between the two people with its dynamic. A channel is connected when the two people together hold both of its gates. */
        channels: Array<Record<string, unknown>>;
        /** All nine centers with their defined state in the combined connection bodygraph and which person defines each. */
        centers: Array<Record<string, unknown>>;
        /** Definition of the combined connection bodygraph from connected components among its defined centers. One of None, Single, Split, Triple Split, Quadruple Split */
        combinedDefinition: string;
        /** Combined definition name in the requested language, for display only. Present only when lang is set to a language other than English, since in English it would repeat its canonical partner field exactly */
        combinedDefinitionLocalized?: string;
        /** Count of each connection dynamic across all connected channels. */
        summary: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Monthly horoscope by zodiac sign. */
    "roxyapi.get_monthly_horoscope": {
      input: {
        /** Zodiac sign. Case-insensitive input is normalized to lowercase. */
        sign: "aries" | "taurus" | "gemini" | "cancer" | "leo" | "virgo" | "libra" | "scorpio" | "sagittarius" | "capricorn" | "aquarius" | "pisces";
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
        /**
         * Any date inside the target month, in YYYY-MM-DD format. The forecast covers the whole calendar month containing it
         * @format date
         */
        date?: string;
        /** Selects which period counts as current when date is omitted. Defaults to UTC, so the forecast rolls over at 00:00 UTC on the 1st. Pass the timezone of the end user to roll over on their local clock instead. Ignored when date is set. Accepts an IANA name (e.g. "America/New_York"), decimal hours (e.g. 5.5 for IST), or a fixed UTC offset (e.g. "-05:00"). */
        timezone?: string;
      };
      output: {
        /** Zodiac sign for this horoscope. */
        sign: string;
        /** Month of this forecast (YYYY-MM). */
        month: string;
        /** The single most relevant event of the period, whichever life area it touches, read into the whole-sign houses of this sign. The same event that leads column, at lede length rather than developed into a full movement, and checkable against the events array */
        overview: string;
        /** Monthly love and relationship forecast, read into the whole-sign houses of this sign. The same ranked events that drive column, filtered to romance and partnership, plus the standing placements that reach it */
        love: string;
        /** Monthly career and professional outlook, read into the whole-sign houses of this sign. The same ranked events that drive column, filtered to career, work and reputation, plus the standing placements that reach it */
        career: string;
        /** Monthly health and wellness guidance, read into the whole-sign houses of this sign. The same ranked events that drive column, filtered to health, plus the standing placements that reach it */
        health: string;
        /** Monthly financial outlook and guidance, read into the whole-sign houses of this sign. The same ranked events that drive column, filtered to finance, plus the standing placements that reach it */
        finance: string;
        /** The single actionable takeaway from the leading event of the period, read into the whole-sign houses of this sign and checkable against the events array. Drawn from the same event as overview, kept to a short, actionable pair of sentences rather than grown to match the other sections */
        advice: string;
        /** The full column for this period, ready to run as one piece, with paragraphs separated by a blank line. Names the events driving it and the dates they fall on, read into the whole-sign houses of this sign */
        column: string;
        /** The dated astronomical events this reading is built on, earliest first. Every field in every row can be checked against an independent authority, so a column can be fact-checked before it is published */
        events: Array<Record<string, unknown>>;
        /** The month read one calendar week at a time, off the same ranked events as column and events[]: the life area each week turns on, and the one thing that area asks for. Two weeks may land in the same area, because two events of a month often do; the sentence beside it is always different */
        weekByWeek: Array<Record<string, unknown>>;
        /** The dates to circle this month, earliest first: every lunation and eclipse of the month, plus the headline movements the reading is built on, which are the sign changes of the slower planets and every station with the direction it turns. Each is placed in the whole-sign house it reaches for this sign */
        keyDates: Array<Record<string, unknown>>;
        /** Four lucky numbers for the month, each 1 to 9 and all distinct, from the traditional planetary number correspondence applied to the four planets that govern this sign this month. */
        luckyNumbers: Array<number>;
        /** Lucky color for the month, drawn from the three colors of the sign element and selected by the planet governing the reading. */
        luckyColor: string;
        /** Most compatible zodiac signs for this sign. Trine partners (same element) followed by a sextile partner (complementary element). */
        compatibleSigns: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Generate natal chart. Resolve ambiguous places with search_cities first; prefer an IANA timezone for historical daylight saving. */
    "roxyapi.get_natal_chart": {
      input: {
        /**
         * Birth date in YYYY-MM-DD format. Determines planetary positions for the specific calendar day.
         * @format date
         */
        date: string;
        /**
         * Birth time in 24-hour HH:MM:SS format. Determines the Ascendant (rising sign) and house cusps
         * @pattern ^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$
         */
        time: string;
        /**
         * Birth location latitude in decimal degrees (-90 to 90). Positive = North, negative = South.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
        /**
         * Birth location longitude in decimal degrees (-180 to 180). Positive = East, negative = West.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /** Timezone: an IANA name (e.g. "America/New_York", "Europe/London", or `cities[0].timezone` from /location/search) or decimal hours from UTC (e.g. -5 for EST, 5.5 for IST). An IANA name is resolved to the offset in force at the given date and time. */
        timezone: number | string;
        /** Lunar node convention. "mean" is the smoothed average node, which always moves retrograde; "true" is the osculating node, which tracks the real perturbed node, oscillates up to about 1.5 degrees either side of the mean on a 173-day cycle, and can briefly turn direct */
        nodeType?: "mean" | "true";
        /** House system for dividing the chart into 12 houses. Placidus (default) is most popular in Western astrology and time-sensitive */
        houseSystem?: "placidus" | "whole-sign" | "equal" | "koch";
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Birth details echoed back from the request. Confirms the input used for this chart calculation. */
        birthDetails: Record<string, unknown>;
        /** All 14 celestial bodies (10 classical planets, lunar nodes, Chiron, Black Moon Lilith) with zodiac signs, house placements, and interpretations. */
        planets: Array<Record<string, unknown>>;
        /** All 12 house cusps with zodiac positions. House cusps divide the chart into life areas. */
        houses: Array<Record<string, unknown>>;
        /** House system used for this chart (placidus, whole-sign, equal, or koch). */
        houseSystem: string;
        /** All planetary aspects found in this chart with orbs, strength, and interpretation. */
        aspects: Array<Record<string, unknown>>;
        /** Detected multi-planet aspect configurations (Grand Trine, Kite, T-Square, Grand Cross, Yod, Mystic Rectangle, Stellium). Grand Cross suppresses contained T-Squares, Kite suppresses underlying Grand Trine. */
        patterns?: Array<Record<string, unknown>>;
        /** Aspect pattern analysis showing the balance of harmonious vs challenging energies in the chart. */
        aspectsInterpretation: Record<string, unknown>;
        /** Ascendant (rising sign). The eastern horizon at birth, defining outward personality and physical appearance. */
        ascendant: Record<string, unknown>;
        /** Midheaven (MC). The highest point of the ecliptic at birth, representing career direction and public image. */
        midheaven: Record<string, unknown>;
        /** Part of Fortune (Lot of Fortune). A point derived from the Ascendant and the two luminaries that marks an area of ease, vitality, and material wellbeing in the chart. */
        partOfFortune: Record<string, unknown>;
        /** Vertex. The western intersection of the prime vertical with the ecliptic, often read as a point of fated encounters and turning-point relationships */
        vertex: Record<string, unknown>;
        /** Chart summary with dominant element, modality, retrograde planets, and distribution analysis. */
        summary: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Generate numerology chart. */
    "roxyapi.get_numerology_chart": {
      input: {
        /**
         * Full birth name as it appears on the birth certificate. Used for every letter-based number in the chart: Expression, Soul Urge, Personality, Karmic Lessons, Hidden Passion, Subconscious Self and the special letters
         * @minLength 1
         * @maxLength 200
         */
        fullName: string;
        /**
         * Birth year between 100 and 2100. Supports historical figures like Einstein (1879) and Shakespeare (1564).
         * @minimum 100
         * @maximum 2100
         */
        year: number;
        /**
         * Birth month (1-12)
         * @minimum 1
         * @maximum 12
         */
        month: number;
        /**
         * Birth day (1-31)
         * @minimum 1
         * @maximum 31
         */
        day: number;
        /**
         * Calendar year for the Personal Year, defaults to the current UTC year. It moves the Personal Year only: the nested personalMonth and maturityStatus.currentAge always read the current UTC date.
         * @minimum 100
         * @maximum 2100
         */
        currentYear?: number;
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Input profile data used to generate the chart. */
        profile: Record<string, unknown>;
        /** Six core numerology numbers with full interpretations. The foundation of any complete numerology reading. */
        coreNumbers: Record<string, unknown>;
        /** Additional numerology insights: karmic analysis, yearly/monthly forecasts, pinnacles, challenges, hidden passion, subconscious self, and name letter analysis. */
        additionalInsights: Record<string, unknown>;
        /** Birth Day profile with day-specific meaning (1-31). Unlike the core Birth Day number, this provides unique interpretation per calendar day. */
        birthDayProfile?: Record<string, unknown>;
        /** Maturity number activation status based on current age. */
        maturityStatus: Record<string, unknown>;
        /** Lucky associations based on Life Path number: colors, gemstones, day, element, planet, and compatibility. */
        luckyAssociations?: Record<string, unknown>;
        /** AI-ready holistic summary weaving all core numbers, karmic insights, and yearly forecast into a cohesive narrative. Ideal for generating personalized reports, chatbot responses, or one-page numerology overviews. */
        summary: string;
        [key: string]: unknown;
      };
    };
    /** Calculate numerology compatibility. */
    "roxyapi.get_numerology_compatibility": {
      input: {
        /** Details for the first person. */
        person1: {
          /**
           * Full birth name to calculate Expression and Soul Urge numbers automatically. Use instead of passing expression and soulUrge directly.
           * @minLength 1
           * @maxLength 200
           */
          fullName?: string;
          /**
           * Birth year to calculate Life Path automatically. Use with month and day instead of passing lifePath directly.
           * @minimum 100
           * @maximum 2100
           */
          year?: number;
          /**
           * Birth month (1-12). Required with year and day for automatic Life Path calculation.
           * @minimum 1
           * @maximum 12
           */
          month?: number;
          /**
           * Birth day (1-31). Required with year and month for automatic Life Path calculation.
           * @minimum 1
           * @maximum 31
           */
          day?: number;
          /**
           * Person 1 Life Path number (1-9, 11, 22, 33). Optional if year, month, day are provided.
           * @minimum 1
           * @maximum 33
           */
          lifePath?: number;
          /**
           * Person 1 Expression number (1-9, 11, 22, 33). Optional if fullName is provided.
           * @minimum 1
           * @maximum 33
           */
          expression?: number;
          /**
           * Person 1 Soul Urge number (1-9, 11, 22, 33). Optional if fullName is provided.
           * @minimum 1
           * @maximum 33
           */
          soulUrge?: number;
        };
        /** Details for the first person. */
        person2: {
          /**
           * Full birth name to calculate Expression and Soul Urge numbers automatically. Use instead of passing expression and soulUrge directly.
           * @minLength 1
           * @maxLength 200
           */
          fullName?: string;
          /**
           * Birth year to calculate Life Path automatically. Use with month and day instead of passing lifePath directly.
           * @minimum 100
           * @maximum 2100
           */
          year?: number;
          /**
           * Birth month (1-12). Required with year and day for automatic Life Path calculation.
           * @minimum 1
           * @maximum 12
           */
          month?: number;
          /**
           * Birth day (1-31). Required with year and month for automatic Life Path calculation.
           * @minimum 1
           * @maximum 31
           */
          day?: number;
          /**
           * Person 1 Life Path number (1-9, 11, 22, 33). Optional if year, month, day are provided.
           * @minimum 1
           * @maximum 33
           */
          lifePath?: number;
          /**
           * Person 1 Expression number (1-9, 11, 22, 33). Optional if fullName is provided.
           * @minimum 1
           * @maximum 33
           */
          expression?: number;
          /**
           * Person 1 Soul Urge number (1-9, 11, 22, 33). Optional if fullName is provided.
           * @minimum 1
           * @maximum 33
           */
          soulUrge?: number;
        };
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Overall compatibility score: 50% Life Path, 30% Expression and 20% Soul Urge pair scores, rounded. Every pair score runs 50 to 100, so the overall score does too. */
        overallScore: number;
        /** Compatibility rating from overallScore: Highly Compatible (90 and up), Very Compatible (75 to 89), Compatible (60 to 74) or Moderately Compatible (50 to 59). The scale also names Challenging below 45, which no pair of core numbers reaches. */
        rating: string;
        /** lifePath returned by RoxyAPI. */
        lifePath: Record<string, unknown>;
        /** expression returned by RoxyAPI. */
        expression: Record<string, unknown>;
        /** soulUrge returned by RoxyAPI. */
        soulUrge: Record<string, unknown>;
        /** Key relationship strengths */
        strengths: Array<string>;
        /** Potential relationship challenges */
        challenges: Array<string>;
        /** Practical relationship advice */
        advice: string;
        [key: string]: unknown;
      };
    };
    /** Calculate synastry. Resolve ambiguous places with search_cities first; prefer an IANA timezone for historical daylight saving. */
    "roxyapi.get_synastry": {
      input: {
        /** Details for the first person. */
        person1: {
          /**
           * Birth date in YYYY-MM-DD format. Determines planetary positions for the specific calendar day.
           * @format date
           */
          date: string;
          /**
           * Birth time in 24-hour HH:MM:SS format. Determines the Ascendant (rising sign) and house cusps
           * @pattern ^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$
           */
          time: string;
          /**
           * Birth location latitude in decimal degrees (-90 to 90). Positive = North, negative = South.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * Birth location longitude in decimal degrees (-180 to 180). Positive = East, negative = West.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /** Timezone: an IANA name (e.g. "America/New_York", "Europe/London", or `cities[0].timezone` from /location/search) or decimal hours from UTC (e.g. -5 for EST, 5.5 for IST). An IANA name is resolved to the offset in force at the given date and time. */
          timezone: number | string;
          /** Lunar node convention. "mean" is the smoothed average node, which always moves retrograde; "true" is the osculating node, which tracks the real perturbed node, oscillates up to about 1.5 degrees either side of the mean on a 173-day cycle, and can briefly turn direct */
          nodeType?: "mean" | "true";
          /** Optional display name for this person. Included in the response for easy identification. */
          name?: string;
        };
        /** Details for the first person. */
        person2: {
          /**
           * Birth date in YYYY-MM-DD format. Determines planetary positions for the specific calendar day.
           * @format date
           */
          date: string;
          /**
           * Birth time in 24-hour HH:MM:SS format. Determines the Ascendant (rising sign) and house cusps
           * @pattern ^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$
           */
          time: string;
          /**
           * Birth location latitude in decimal degrees (-90 to 90). Positive = North, negative = South.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * Birth location longitude in decimal degrees (-180 to 180). Positive = East, negative = West.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /** Timezone: an IANA name (e.g. "America/New_York", "Europe/London", or `cities[0].timezone` from /location/search) or decimal hours from UTC (e.g. -5 for EST, 5.5 for IST). An IANA name is resolved to the offset in force at the given date and time. */
          timezone: number | string;
          /** Lunar node convention. "mean" is the smoothed average node, which always moves retrograde; "true" is the osculating node, which tracks the real perturbed node, oscillates up to about 1.5 degrees either side of the mean on a 173-day cycle, and can briefly turn direct */
          nodeType?: "mean" | "true";
          /** Optional display name for this person. Included in the response for easy identification. */
          name?: string;
        };
        /** House system for both natal charts. Placidus (default), Whole Sign, Equal, or Koch. */
        houseSystem?: "placidus" | "whole-sign" | "equal" | "koch";
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Person 1 chart highlights: Ascendant, Sun sign, Moon sign, and plotting positions. */
        person1: Record<string, unknown>;
        /** Person 2 chart highlights: Ascendant, Sun sign, Moon sign, and plotting positions. */
        person2: Record<string, unknown>;
        /** Overall compatibility score (0-100). Calculated from the balance of harmonious vs challenging inter-chart aspects weighted by planet importance. */
        compatibilityScore: number;
        /** All inter-chart (synastry) aspects between person 1 and person 2 planets. Each aspect reveals a specific dynamic in the relationship. */
        interAspects: Array<Record<string, unknown>>;
        /** Synastry aspect summary showing the balance of harmonious vs challenging inter-chart connections. */
        summary: Record<string, unknown>;
        /** Relationship analysis with strengths, challenges, and overall assessment. */
        analysis: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get tarot card by id. */
    "roxyapi.get_tarot_card": {
      input: {
        /** Card identifier. Major arcana: "fool", "magician", "death" */
        id: string;
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
      };
      output: {
        /** Unique card identifier in kebab-case, with no leading article on Major Arcana (e.g. fool, star, ace-of-cups, queen-of-swords) */
        id: string;
        /** Display name of the tarot card as it appears in the Rider-Waite-Smith tradition. */
        name: string;
        /** Whether this card belongs to the Major Arcana (22 trump cards representing major life themes) or Minor Arcana (56 suit cards for daily situations). */
        arcana: "major" | "minor";
        /** Suit of the card (Minor Arcana only). Cups=emotions, Wands=creativity, Swords=intellect, Pentacles=material */
        suit?: "cups" | "wands" | "swords" | "pentacles";
        /** Card number within its arcana. Major Arcana: 0 (Fool) through 21 (World) */
        number: number;
        /** Keywords for both upright and reversed orientations of this tarot card, useful for quick divination reference. */
        keywords: Record<string, unknown>;
        /** Complete upright interpretation including description, keywords, and guidance across love, career, finances, health, and spirituality domains. */
        upright: Record<string, unknown>;
        /** Complete reversed (inverted) interpretation including description, keywords, and guidance across love, career, finances, health, and spirituality domains. Reversed cards carry modified or blocked energy. */
        reversed: Record<string, unknown>;
        /** URL to the tarot card artwork image in the Rider-Waite-Smith style. */
        imageUrl: string;
        [key: string]: unknown;
      };
    };
    /** Get API usage statistics. */
    "roxyapi.get_usage": {
      input: Record<string, never>;
      output: {
        /** Name of the subscription plan the API key belongs to. One flat plan covers every domain and the Remote MCP servers, so this is a quota tier, never a per product entitlement. */
        plan: string;
        /** Billable requests counted against the current calendar month. The quota window is the UTC calendar month and resets on the 1st at 12:00 AM UTC, never on your renewal date, so an annual plan refills every month and a plan bought mid month still refills on the 1st */
        usedThisMonth: number;
        /** Monthly request allowance for the plan. One request, API or MCP, equals one unit: there is no credit weighting and no per domain fee. */
        requestsPerMonth: number;
        /** Requests left before the monthly allowance is exhausted, floored at zero. Equal to requestsPerMonth minus usedThisMonth */
        remainingThisMonth: number;
        /**
         * Billing email the subscription is registered under.
         * @format email
         */
        email: string;
        /** Subscription lifecycle state. Values: active, cancelled (no longer renewing but usable until endDate), suspended (payment failed, usable until endDate), expired (past endDate), pending (checkout started, payment not captured). */
        status: string;
        /**
         * ISO 8601 timestamp when the current billing period ends. A renewal extends this date in place
         * @format date-time
         */
        endDate: string;
        [key: string]: unknown;
      };
    };
    /** Weekly horoscope by zodiac sign. */
    "roxyapi.get_weekly_horoscope": {
      input: {
        /** Zodiac sign. Case-insensitive input is normalized to lowercase. */
        sign: "aries" | "taurus" | "gemini" | "cancer" | "leo" | "virgo" | "libra" | "scorpio" | "sagittarius" | "capricorn" | "aquarius" | "pisces";
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
        /**
         * Any date inside the target week, in YYYY-MM-DD format. The forecast covers the Monday to Sunday week containing it
         * @format date
         */
        date?: string;
        /** Selects which period counts as current when date is omitted. Defaults to UTC, so the forecast rolls over at 00:00 UTC on each Monday. Pass the timezone of the end user to roll over on their local clock instead. Ignored when date is set. Accepts an IANA name (e.g. "America/New_York"), decimal hours (e.g. 5.5 for IST), or a fixed UTC offset (e.g. "-05:00"). */
        timezone?: string;
      };
      output: {
        /** Zodiac sign for this horoscope. */
        sign: string;
        /** Start date of the forecast week (Monday). */
        week: string;
        /** The single most relevant event of the period, whichever life area it touches, read into the whole-sign houses of this sign. The same event that leads column, at lede length rather than developed into a full movement, and checkable against the events array */
        overview: string;
        /** Weekly love and relationship forecast, read into the whole-sign houses of this sign. The same ranked events that drive column, filtered to romance and partnership, plus the standing placements that reach it */
        love: string;
        /** Weekly career and professional outlook, read into the whole-sign houses of this sign. The same ranked events that drive column, filtered to career, work and reputation, plus the standing placements that reach it */
        career: string;
        /** Weekly health, energy, and wellness guidance, read into the whole-sign houses of this sign. The same ranked events that drive column, filtered to health, plus the standing placements that reach it */
        health: string;
        /** Weekly financial outlook, read into the whole-sign houses of this sign. The same ranked events that drive column, filtered to finance, plus the standing placements that reach it */
        finance: string;
        /** The single actionable takeaway from the leading event of the period, read into the whole-sign houses of this sign and checkable against the events array. Drawn from the same event as overview, kept to a short, actionable pair of sentences rather than grown to match the other sections */
        advice: string;
        /** The full column for this period, ready to run as one piece, with paragraphs separated by a blank line. Names the events driving it and the dates they fall on, read into the whole-sign houses of this sign */
        column: string;
        /** The dated astronomical events this reading is built on, earliest first. Every field in every row can be checked against an independent authority, so a column can be fact-checked before it is published */
        events: Array<Record<string, unknown>>;
        /** The three most favorable days this week, from the planetary rulers of the seven weekdays, ranked by how strongly each of those planets stands for this sign. */
        luckyDays: Array<string>;
        /** Three lucky numbers for the week, each 1 to 9 and all distinct, from the traditional planetary number correspondence applied to the three planets that govern this sign this week. */
        luckyNumbers: Array<number>;
        /** Most compatible zodiac signs for this sign. Trine partners (same element) followed by a sextile partner (complementary element). */
        compatibleSigns: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Yearly horoscope by zodiac sign. */
    "roxyapi.get_yearly_horoscope": {
      input: {
        /** Zodiac sign. Case-insensitive input is normalized to lowercase. */
        sign: "aries" | "taurus" | "gemini" | "cancer" | "leo" | "virgo" | "libra" | "scorpio" | "sagittarius" | "capricorn" | "aquarius" | "pisces";
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
        /**
         * Calendar year to forecast, 1900 to 2100. Defaults to the current year in the timezone parameter.
         * @minimum 1900
         * @maximum 2100
         */
        year?: number;
        /** Selects which year counts as current when year is omitted. Defaults to UTC, so the forecast rolls over at 00:00 UTC on January 1. Pass the timezone of the end user to roll over on their local clock instead. Ignored when year is set. Accepts an IANA name (e.g. "America/New_York"), decimal hours (e.g. 5.5 for IST), or a fixed UTC offset (e.g. "-05:00"). */
        timezone?: string;
      };
      output: {
        /** Zodiac sign for this horoscope. */
        sign: string;
        /** Calendar year this forecast covers. Echoes the year requested, or the current year when it was omitted. */
        year: number;
        /** The single most relevant event of the period, whichever life area it touches, read into the whole-sign houses of this sign. The same event that leads column, at lede length rather than developed into a full movement, and checkable against the events array */
        overview: string;
        /** Yearly love and relationship outlook, read into the whole-sign houses of this sign. The same ranked events that drive column, filtered to romance and partnership, plus the standing placements that reach it */
        love: string;
        /** Yearly career and professional outlook, read into the whole-sign houses of this sign. The same ranked events that drive column, filtered to career, work and reputation, plus the standing placements that reach it */
        career: string;
        /** Yearly health, energy, and wellness outlook, read into the whole-sign houses of this sign. The same ranked events that drive column, filtered to health, plus the standing placements that reach it */
        health: string;
        /** Yearly financial outlook, read into the whole-sign houses of this sign. The same ranked events that drive column, filtered to finance, plus the standing placements that reach it */
        finance: string;
        /** The single actionable takeaway from the leading event of the period, read into the whole-sign houses of this sign and checkable against the events array. Drawn from the same event as overview, kept to a short, actionable pair of sentences rather than grown to match the other sections */
        advice: string;
        /** The full column for this period, ready to run as one piece, with paragraphs separated by a blank line. Names the events driving it and the dates they fall on, read into the whole-sign houses of this sign */
        column: string;
        /** The dated astronomical events this reading is built on, earliest first. Every field in every row can be checked against an independent authority, so a column can be fact-checked before it is published */
        events: Array<Record<string, unknown>>;
        /** The backdrop of the year: which whole-sign house each slow-moving body occupies for this sign, Jupiter first and Pluto last. One row per unbroken stretch, so a body that stays put is a single row spanning the year and a body that changes sign is two rows with the exact date between them */
        themes: Array<Record<string, unknown>>;
        /** Every solar and lunar eclipse of the year, with the house each one falls in for this sign. Usually four to six, and the dates match the published eclipse canon. */
        eclipses: Array<Record<string, unknown>>;
        /** Every retrograde and direct station of the year, in order, with the house each falls in for this sign. Drives review windows and the not-yet warnings a yearly column is bought for. */
        retrogrades: Array<Record<string, unknown>>;
        /** The year as a calendar of life areas: for each whole-sign house, the single dated stretch that most strongly activates it, ordered by start date. Twelve rows in a full year, one per house, so every life area gets a date range and none is named twice */
        keyPeriods: Array<Record<string, unknown>>;
        /** The easiest month of the year for each of the four topic sections, by how many exact harmonious aspects (sextiles and trines) fall in that month and land in the houses that govern the area for this sign. An area is omitted only in the rare year that carries no harmonious aspect for it at all, so treat each key as optional */
        bestPeriods: Record<string, unknown>;
        /** Four lucky numbers for the year, each 1 to 9 and all distinct, from the traditional planetary number correspondence applied to the four planets that govern this sign this year. */
        luckyNumbers: Array<number>;
        /** Lucky color for the year, drawn from the three colors of the sign element and selected by the planet governing the reading. */
        luckyColor: string;
        /** Most compatible zodiac signs for this sign. Trine partners (same element) followed by a sextile partner (complementary element). */
        compatibleSigns: Array<string>;
        [key: string]: unknown;
      };
    };
    /** List all 78 tarot cards. */
    "roxyapi.list_tarot_cards": {
      input: {
        /** Response language (BCP 47). Defaults to en; untranslated fields fall back to English. Supported: en, tr, de, es, hi, pt, fr, ru, zh-Hans, zh-Hant. */
        lang?: "en" | "tr" | "de" | "es" | "hi" | "pt" | "fr" | "ru" | "zh-Hans" | "zh-Hant";
        /**
         * Maximum items to return per page. Range: 1-100, default 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of items to skip for pagination. Default 0.
         * @minimum 0
         */
        offset?: number;
        /** Filter by arcana type. Major arcana (0-21) represents life lessons and spiritual themes */
        arcana?: "major" | "minor";
        /** Filter minor arcana by suit. Cups=emotions/relationships, Wands=creativity/passion, Swords=intellect/conflict, Pentacles=material/finances */
        suit?: "cups" | "wands" | "swords" | "pentacles";
        /**
         * Filter by card number. Major Arcana: 0 (The Fool) through 21 (The World)
         * @minimum 0
         * @maximum 21
         */
        number?: number;
      };
      output: {
        /** Total number of tarot cards matching the applied filters. 78 for the full deck, 22 for Major Arcana, 56 for Minor Arcana, 14 per suit. */
        total: number;
        /** Maximum items returned per page. */
        limit: number;
        /** Number of items skipped from the start of the result set. */
        offset: number;
        /** Array of tarot cards with basic metadata. Use GET /cards/{id} for full upright and reversed interpretations. */
        cards: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Search cities worldwide. Confirm province and country when multiple cities match; use timezone rather than today's utcOffset for birth charts. */
    "roxyapi.search_cities": {
      input: {
        /**
         * Place to search for, written the way a person would. Accepts a bare city (berlin), a city plus country (berlin germany), a comma-qualified place (richfield, utah), a fully qualified place (richfield, utah, united states), or a historic name (bombay, peking, constantinople)
         * @minLength 1
         * @maxLength 100
         */
        q: string;
        /**
         * Maximum items to return per page. Range: 1-50, default 10.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Number of items to skip for pagination. Default 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Number of places matching the query across all pages, not the number returned in this response. Greater than 1 means the name is ambiguous, so show province and country and let the user confirm before using the result for a chart. */
        total: number;
        /** Page size used for this response. */
        limit: number;
        /** Number of places skipped. Use with limit to page through results. */
        offset: number;
        /** Matching places for the current page, best match first. Ordered by match quality, then population within equal quality: an exact name beats a qualified name such as richfield, utah, which beats a name merely starting with the query, which beats an incidental match on state or country */
        cities: Array<{
          /** City name as commonly used. Matches the local or internationally recognized name for the location. */
          city: string;
          /** State, province, canton, or administrative region. Show it whenever more than one result comes back: it is what separates Richfield, Utah from Richfield, Minnesota, and the six US Springfields from each other */
          province: string;
          /** Full country name in English. */
          country: string;
          /** ISO 3166-1 alpha-2 country code. Use for filtering cities by country or building country-specific location pickers. */
          iso2: string;
          /** Geographic latitude in decimal degrees (-90 to 90). Pass directly to birth chart, natal chart, horoscope, synastry, transit, kundli, and panchang API endpoints as the latitude parameter. */
          latitude: number;
          /** Geographic longitude in decimal degrees (-180 to 180). Pass directly to astrology, horoscope, and panchang API endpoints alongside latitude. */
          longitude: number;
          /** IANA timezone identifier following the tz database standard (e.g. Europe/Berlin, America/New_York, Asia/Tokyo). Always present. Pass THIS, not the numeric offset, into any chart or panchang request for a past date: the calculation endpoints resolve it to the offset that was actually in force on that date, including historical daylight saving. Also works directly with JavaScript Date, Luxon, day.js, or any date library. */
          timezone: string;
          /** UTC offset in decimal hours for TODAY at this place, already adjusted for daylight saving. Convenient for displaying local time now */
          utcOffset: number;
          /** Population estimate for the place. Breaks ties between results of equal match quality, so among several places matching equally well the largest leads */
          population: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
