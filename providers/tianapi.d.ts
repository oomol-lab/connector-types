import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Query TianAPI account membership, remaining TianDou credits, and usage for an API ID. Enable the Account Information API (96) first; this request consumes its quota or TianDou credits. */
    "tianapi.get_account_usage": {
      input: {
        /** The API ID whose usage to query, shown in its documentation URL or the TianAPI console. For example, 223 is the network trending API and 96 is the account information API. */
        apiId: number;
      };
      output: {
        /** The remaining TianDou credits in the account. */
        txcoin?: number;
        /** The remaining free calls for the requested API. */
        api_give?: number;
        /** The API billing type: 0 for membership quota, 1 for per-call billing. */
        api_type?: number;
        /** The total request count for the requested API. */
        api_getnum?: number;
        /** The account membership level reported by TianAPI; 0 means invalid. */
        user_level?: number;
        /** The Unix timestamp when the account information was updated. */
        update_time?: number;
        [key: string]: unknown;
      };
    };
    /** Query the traditional Chinese almanac, including auspicious activities, taboos, lunar dates, zodiac animals, and heavenly stems. Supports Gregorian dates or Unix timestamps, and lunar dates when calendar is lunar. Omitted dates use today. Years 1970-2038. Enable TianAPI Chinese Almanac (45). */
    "tianapi.get_almanac": {
      input: {
        /**
         * The query date, or a Unix timestamp for Gregorian queries; lunar dates use YYYY-M-D.
         * @minLength 1
         */
        date?: string;
        /**
         * The input calendar, defaulting to Gregorian.
         * @default "gregorian"
         */
        calendar?: "gregorian" | "lunar";
      };
      output: {
        /** The solar term. */
        jieqi?: string;
        /** The activities considered inauspicious. */
        taboo?: string;
        /** The Peng Zu traditional taboos. */
        pengzu?: string;
        /** The Sui Sha direction. */
        suisha?: string;
        /** The lunar mansion. */
        xingsu?: string;
        /** The activities considered auspicious. */
        fitness?: string;
        /** The traditional deity directions. */
        shenwei?: string;
        /** The fetal deity location. */
        taishen?: string;
        /** The zodiac clash. */
        chongsha?: string;
        /** The Gregorian festival. */
        festival?: string;
        /** The traditional day deity. */
        jianshen?: string;
        /** The Chinese lunar day name. */
        lunarday?: string;
        /** The Western zodiac constellation. */
        xingwest?: string;
        /** The lunar date. */
        lunardate?: string;
        /** The Chinese zodiac animal. */
        shengxiao?: string;
        /** The traditional month or season name. */
        lmonthname?: string;
        /** The Chinese lunar month name, using the official field spelling. */
        lubarmonth?: string;
        /** The Jia Zi five-element value. */
        wuxingjiazi?: string;
        /** The day Na Yin five-element value. */
        wuxingnaday?: string;
        /** The day Na Yin value using the capitalization shown in the official example. */
        Wuxingnaday?: string;
        /** The year Na Yin five-element value. */
        wuxingnayear?: string;
        /** The Gregorian date. */
        gregoriandate?: string;
        /** The month Na Yin five-element value. */
        wuxingnamonth?: string;
        /** The lunar festival. */
        lunar_festival?: string;
        /** The day heavenly stems and earthly branches. */
        tiangandizhiday?: string;
        /** The year heavenly stems and earthly branches. */
        tiangandizhiyear?: string;
        /** The month heavenly stems and earthly branches. */
        tiangandizhimonth?: string;
        [key: string]: unknown;
      };
    };
    /** Query the personality interpretation for a birthday's month and day; no birth year is required. Enable TianAPI Birthday Personality (27). For entertainment only. */
    "tianapi.get_birthday_personality": {
      input: {
        /**
         * The birthday month.
         * @minimum 1
         * @maximum 12
         */
        month: number;
        /**
         * The birthday day of month, including February 29.
         * @minimum 1
         * @maximum 31
         */
        day: number;
      };
      output: {
        /** The birthday personality title. */
        title?: string;
        /** The birthday personality interpretation. */
        content?: string;
        [key: string]: unknown;
      };
    };
    /** Query a traditional ABO blood-type pairing interpretation. Enable TianAPI Blood Type Pairing (84). For entertainment only, not a medical compatibility assessment. */
    "tianapi.get_blood_type_compatibility": {
      input: {
        /** An ABO blood type. */
        bloodType: "A" | "B" | "AB" | "O";
        /** An ABO blood type. */
        otherBloodType: "A" | "B" | "AB" | "O";
      };
      output: {
        /** The blood-type pairing label. */
        pair?: string;
        /** The pairing title. */
        title?: string;
        /** The pairing interpretation. */
        content?: string;
        [key: string]: unknown;
      };
    };
    /** Query a single constellation's interpretation, a pair of constellations, or its compatibility with all constellations. Omit otherSign for the single mode or set compareWithAll for all pairings. Enable TianAPI Constellation Pairing (42). For entertainment only. */
    "tianapi.get_constellation_compatibility": {
      input: {
        /**
         * A zodiac constellation name in Chinese or English, such as 金牛座 or taurus.
         * @minLength 1
         */
        sign: string;
        /**
         * A zodiac constellation name in Chinese or English, such as 金牛座 or taurus.
         * @minLength 1
         */
        otherSign?: string;
        /** Compare the sign with all constellations; do not also pass otherSign. */
        compareWithAll?: boolean;
      };
      output: {
        /** The friendship, love, marriage, and family ratings returned by TianAPI. */
        grade?: string;
        /** The constellation or pairing title. */
        title?: string;
        /** The interpretation text returned by TianAPI. */
        content?: string;
        /** The compatibility results when comparing with all constellations. */
        list?: Array<{
          /** The friendship, love, marriage, and family ratings returned by TianAPI. */
          grade?: string;
          /** The constellation or pairing title. */
          title?: string;
          /** The interpretation text returned by TianAPI. */
          content?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Query a constellation's horoscope for a date, defaulting to today when omitted. Includes overall, love, work, wealth, health, and lucky attributes. Enable TianAPI Star Horoscope (78). For entertainment only. */
    "tianapi.get_daily_horoscope": {
      input: {
        /**
         * A zodiac constellation name in Chinese or English, such as 金牛座 or taurus.
         * @minLength 1
         */
        sign: string;
        /**
         * A Gregorian date in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
      };
      output: {
        /** The result entries in the order returned by TianAPI. */
        list: Array<{
          /** The horoscope category, such as overall, love, work, or lucky color. */
          type?: string;
          /** The horoscope text or index, preserved as returned by TianAPI. */
          content?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Query the full Chinese almanac for a Gregorian date, defaulting to today. Includes lunar dates, zodiac animals, auspicious and inauspicious gods, directions, and seasonal information. Years 1900-2100. This endpoint does not accept lunar-date input. Enable TianAPI Chinese Almanac (45). */
    "tianapi.get_full_almanac": {
      input: {
        /**
         * A Gregorian date in YYYY-MM-DD format.
         * @format date
         */
        date?: string;
      };
      output: {
        /** The lunar mansion. */
        star?: string;
        /** The Chinese weekday name. */
        week?: string;
        /** The activities considered inauspicious. */
        avoid?: string;
        /** The zodiac clash. */
        chong?: string;
        /** The day heavenly stems and earthly branches. */
        day_gz?: string;
        /** The dog days of summer information. */
        san_fu?: string;
        /** The Chinese zodiac animal. */
        zodiac?: string;
        /** The inauspicious deity names. */
        bad_god?: string;
        /** The fortune deity direction. */
        fu_shen?: string;
        /** Whether the lunar month is a leap month: 0 for no, 1 for yes. */
        is_leap?: number;
        /** The six-day traditional calendar designation. */
        liu_yao?: string;
        /** The Peng Zu traditional taboos. */
        peng_zu?: string;
        /** The nine-day winter period information. */
        shu_jiu?: string;
        /** The Sui Sha direction. */
        sui_sha?: string;
        /** The joy deity direction. */
        xi_shen?: string;
        /** The year heavenly stems and earthly branches. */
        year_gz?: string;
        /** The Yin noble deity direction. */
        yin_gui?: string;
        /** The wealth deity direction. */
        cai_shen?: string;
        /** The day empty branches. */
        day_kong?: string;
        /** The auspicious deity names. */
        good_god?: string;
        /** The twelve-day officer designation. */
        jian_chu?: string;
        /** The month heavenly stems and earthly branches. */
        month_gz?: string;
        /** The activities considered auspicious. */
        suitable?: string;
        /** The fetal deity location. */
        tai_shen?: string;
        /** The Yang noble deity direction. */
        yang_gui?: string;
        /** The day Na Yin five-element value. */
        day_nayin?: string;
        /** The numeric lunar day. */
        lunar_day?: number;
        /** The year empty branches. */
        year_kong?: string;
        /** The full Chinese lunar date. */
        lunar_date?: string;
        /** The numeric lunar year. */
        lunar_year?: number;
        /** The month empty branches. */
        month_kong?: string;
        /** The Gregorian date. */
        solar_date?: string;
        /** The solar term. */
        solar_term?: string;
        /** The year Na Yin five-element value. */
        year_nayin?: string;
        /** The seasonal phenology. */
        hou_weather?: string;
        /** The numeric lunar month. */
        lunar_month?: number;
        /** The month Na Yin five-element value. */
        month_nayin?: string;
        [key: string]: unknown;
      };
    };
    /** Query a traditional numerology interpretation for a number such as a phone, room, or vehicle number. Preserve leading zeros by passing a string. Enable TianAPI Number Fortune (105). For entertainment only. */
    "tianapi.get_number_fortune": {
      input: {
        /**
         * The number string to interpret; leading zeros are preserved.
         * @minLength 1
         */
        number: string;
      };
      output: {
        /** The number score returned as a string. */
        score?: string;
        /** The numerology value returned as a string. */
        shuli?: string;
        /** The interpretation summary. */
        gaishu?: string;
        /** The fortune label. */
        result?: string;
        /** The interpretation conclusion. */
        conclusion?: string;
        [key: string]: unknown;
      };
    };
    /** Query one of the 24 Chinese solar terms, including its meaning, customs, poetry, and foods. An optional year requests exact Gregorian and lunar date information. Enable TianAPI Solar Terms (86). */
    "tianapi.get_solar_term": {
      input: {
        /** The Chinese solar term name. */
        name: "立春" | "雨水" | "惊蛰" | "春分" | "清明" | "谷雨" | "立夏" | "小满" | "芒种" | "夏至" | "小暑" | "大暑" | "立秋" | "处暑" | "白露" | "秋分" | "寒露" | "霜降" | "立冬" | "小雪" | "大雪" | "冬至" | "小寒" | "大寒";
        /** The optional year used to return exact date information. */
        year?: number;
      };
      output: {
        /** The usual Gregorian date range. */
        day?: string;
        /** The solar term name. */
        name?: string;
        /** The traditional seasonal guidance. */
        yiji?: string;
        /** The poem associated with the solar term. */
        shiju?: string;
        /** The traditional customs. */
        xishu?: string;
        /** The traditional foods. */
        meishi?: string;
        /** The introduction to the solar term. */
        jieshao?: string;
        /** The solar term image name. */
        nameimg?: string;
        /** The origin or meaning of the name. */
        yuanyin?: string;
        /** The exact date information when a year is specified. */
        date?: {
          /** The Chinese lunar day name. */
          cnday?: string;
          /** The Chinese lunar year name. */
          cnyear?: string;
          /** The Chinese lunar month name. */
          cnmonth?: string;
          /** The Chinese zodiac animal. */
          cnzodiac?: string;
          /** The Gregorian date. */
          gregdate?: string;
          /** The lunar date. */
          lunardate?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Query compatibility interpretations for two Chinese zodiac animals, preserving the different gender combinations. Enable TianAPI Chinese Zodiac Pairing (83). For entertainment only. */
    "tianapi.get_zodiac_compatibility": {
      input: {
        /** One Chinese zodiac animal. */
        animal: "鼠" | "牛" | "虎" | "兔" | "龙" | "蛇" | "马" | "羊" | "猴" | "鸡" | "狗" | "猪";
        /** One Chinese zodiac animal. */
        otherAnimal: "鼠" | "牛" | "虎" | "兔" | "龙" | "蛇" | "马" | "羊" | "猴" | "鸡" | "狗" | "猪";
      };
      output: {
        /** The zodiac pairing title. */
        title?: string;
        /** The first female and male pairing interpretation. */
        fcontent?: string;
        /** The first male and female pairing interpretation. */
        mcontent?: string;
        /** The reversed female and male pairing interpretation. */
        fcontent1?: string;
        /** The reversed male and female pairing interpretation. */
        mcontent1?: string;
        [key: string]: unknown;
      };
    };
    /** List Baidu trending search keywords, summaries, popularity indexes, and trends through TianAPI. Enable the Baidu Trending API (68) first. */
    "tianapi.list_baidu_trending": {
      input: Record<string, never>;
      output: {
        /** The trending topics in the order returned by TianAPI. */
        list: Array<{
          /** The topic summary. */
          brief?: string;
          /** The search popularity index, returned as a string. */
          index?: string;
          /** The search trend reported by TianAPI, such as fall. */
          trend?: string;
          /** The trending search keyword. */
          keyword?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Douyin trending search topics, labels, and popularity indexes through TianAPI. Enable the Douyin Trending API (155) first. TianAPI documents a 3-minute update interval. */
    "tianapi.list_douyin_trending": {
      input: Record<string, never>;
      output: {
        /** The trending topics in the order returned by TianAPI. */
        list: Array<{
          /** The trending topic. */
          word?: string;
          /** The topic label: 1 for new, 2 for recommended, 3 for hot. */
          label?: number;
          /** The topic popularity index. */
          hotindex?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List NetEase news trending topics through TianAPI. This endpoint belongs to the Network Trending API (223), which must be enabled first. */
    "tianapi.list_netease_trending": {
      input: Record<string, never>;
      output: {
        /** The trending topics in the order returned by TianAPI. */
        list: Array<{
          /** The trending topic title. */
          title?: string;
          /** The topic summary, which may be empty. */
          digest?: string;
          /** The topic popularity index. */
          hotnum?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List aggregated trending topics across Chinese platforms with titles, summaries, and popularity indexes. Enable the Network Trending API (223) in TianAPI first. */
    "tianapi.list_network_trending": {
      input: Record<string, never>;
      output: {
        /** The trending topics in the order returned by TianAPI. */
        list: Array<{
          /** The trending topic title. */
          title?: string;
          /** The topic summary, which may be empty. */
          digest?: string;
          /** The topic popularity index. */
          hotnum?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Phoenix news trending topics through TianAPI. This endpoint belongs to the Network Trending API (223), which must be enabled first. */
    "tianapi.list_phoenix_trending": {
      input: Record<string, never>;
      output: {
        /** The trending topics in the order returned by TianAPI. */
        list: Array<{
          /** The trending topic title. */
          title?: string;
          /** The topic summary, which may be empty. */
          digest?: string;
          /** The topic popularity index. */
          hotnum?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Tencent ecosystem trending topics and ordering indexes through TianAPI. Enable the Tencent Trending API (196) first. TianAPI documents a 10-to-30-minute update interval. */
    "tianapi.list_tencent_trending": {
      input: Record<string, never>;
      output: {
        /** The trending topics in the order returned by TianAPI. */
        list: Array<{
          /** The trending topic. */
          word?: string;
          /** The ordering index reported by TianAPI, not a popularity score. */
          index?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Toutiao trending news topics and popularity indexes through TianAPI. Enable the Toutiao Trending API (244) first. TianAPI documents a 20-minute update interval. */
    "tianapi.list_toutiao_trending": {
      input: Record<string, never>;
      output: {
        /** The trending topics in the order returned by TianAPI. */
        list: Array<{
          /** The trending topic. */
          word?: string;
          /** The topic popularity index. */
          hotindex?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Weibo trending search topics, tags, and popularity indexes through TianAPI. Enable the Weibo Trending API (100) first. TianAPI documents a 30-minute update interval. */
    "tianapi.list_weibo_trending": {
      input: Record<string, never>;
      output: {
        /** The trending topics in the order returned by TianAPI. */
        list: Array<{
          /** The topic tag, such as hot or new. */
          hottag?: string;
          /** The trending search topic. */
          hotword?: string;
          /** The topic popularity index, returned as a string. */
          hotwordnum?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Compare one Chinese zodiac animal with the other 11 animals, optionally including itself. The connector makes 11 or 12 official pairing requests, consuming that many calls, with requests spaced below the ordinary-account 3 QPS limit. Enable TianAPI Chinese Zodiac Pairing (83). For entertainment only. */
    "tianapi.list_zodiac_compatibilities": {
      input: {
        /** One Chinese zodiac animal. */
        animal: "鼠" | "牛" | "虎" | "兔" | "龙" | "蛇" | "马" | "羊" | "猴" | "鸡" | "狗" | "猪";
        /** Also compare the animal with itself, making 12 calls instead of 11. */
        includeSelf?: boolean;
      };
      output: {
        /** The zodiac pairings in the traditional twelve-animal order. */
        list: Array<{
          /** One Chinese zodiac animal. */
          animal: "鼠" | "牛" | "虎" | "兔" | "龙" | "蛇" | "马" | "羊" | "猴" | "鸡" | "狗" | "猪";
          /** One Chinese zodiac animal. */
          otherAnimal: "鼠" | "牛" | "虎" | "兔" | "龙" | "蛇" | "马" | "羊" | "猴" | "鸡" | "狗" | "猪";
          /** A Chinese zodiac pairing result returned by TianAPI. */
          result: {
            /** The zodiac pairing title. */
            title?: string;
            /** The first female and male pairing interpretation. */
            fcontent?: string;
            /** The first male and female pairing interpretation. */
            mcontent?: string;
            /** The reversed female and male pairing interpretation. */
            fcontent1?: string;
            /** The reversed male and female pairing interpretation. */
            mcontent1?: string;
            [key: string]: unknown;
          };
        }>;
      };
    };
    /** Query Chinese holidays, working days, make-up working days, lunar information, and optional international festivals. Supports dates, a month, a date range, or annual official holidays. Non-annual queries contain at most 31 dates. Enable TianAPI Holidays (139). */
    "tianapi.query_holidays": {
      input: {
        /**
         * A date, comma-separated dates, YYYY for annual mode, YYYY-MM or YYYY-MM-DD for monthly mode, or start~end dates for range mode.
         * @minLength 1
         */
        date: string;
        /**
         * The date query mode, defaulting to dates.
         * @default "dates"
         */
        queryType?: "dates" | "year" | "month" | "range";
        /** Also return international festivals and commemorative days. */
        includeFestivals?: boolean;
      };
      output: {
        /** The result entries in the order returned by TianAPI. */
        list: Array<{
          /** The holiday end counter. */
          end?: number;
          /** The current holiday counter. */
          now?: number;
          /** The official holiday arrangement text. */
          tip?: string;
          /** The Gregorian date. */
          date?: string;
          /** The textual day or festival designation. */
          info?: string;
          /** The Chinese holiday name. */
          name?: string;
          /** The suggested vacation arrangement. */
          rest?: string;
          /** The holiday start counter. */
          start?: number;
          /** The English holiday name. */
          enname?: string;
          /** Whether annual official holiday data has been updated. */
          update?: boolean;
          /** The day type: 0 working day, 1 holiday, 2 weekend, 3 make-up working day. */
          daycode?: number;
          /** The festival date text. */
          holiday?: string;
          /** The weekday number. */
          weekday?: number;
          /** The Chinese lunar day name. */
          lunarday?: string;
          /** The Chinese weekday name. */
          cnweekday?: string;
          /** Whether it is a rest day: 0 for work, 1 for rest. */
          isnotwork?: number;
          /** The Chinese lunar year name. */
          lunaryear?: string;
          /** The Chinese lunar month name. */
          lunarmonth?: string;
          /** The traditional wage multiplier, or specific dates in annual mode. */
          wage?: number | string;
          /** The make-up working dates, or an empty string when absent. */
          remark?: Array<string> | string;
          /** The holiday dates, or an empty string when absent. */
          vacation?: Array<string> | string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search traditional Zhou Gong dream interpretations by keyword with pagination. Enable TianAPI Dream Interpretation (24). For entertainment only. */
    "tianapi.search_dream_interpretations": {
      input: {
        /**
         * The dream keyword to search.
         * @minLength 1
         */
        keyword: string;
        /**
         * The number of results to request, defaulting to 10.
         * @minimum 1
         * @default 10
         */
        limit?: number;
        /**
         * The page number, defaulting to 1.
         * @minimum 1
         * @default 1
         */
        page?: number;
      };
      output: {
        /** The result entries in the order returned by TianAPI. */
        list: Array<{
          /** The interpretation ID. */
          id?: number;
          /** The interpretation category. */
          type?: string;
          /** The dream title. */
          title?: string;
          /** The interpretation text, which may include HTML br line breaks. */
          result?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
