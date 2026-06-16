import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the total WakaTime coding time logged since the account was created. */
    "wakatime.get_all_time_since_today": {
      input: {
        /**
         * The WakaTime project name.
         * @minLength 1
         */
        project?: string;
      };
      output: {
        /** The all-time WakaTime coding total. */
        total: {
          /** The human-readable total coding time. */
          text: string;
          /** The range used to calculate the total. */
          range: {
            /**
             * The calendar date returned by WakaTime.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
             * @format date
             */
            date?: string;
            /** The human-readable date range text. */
            text?: string;
            /** The start timestamp of the range. */
            start?: string;
            /** The end timestamp of the range. */
            end?: string;
            /**
             * The timezone used for the range.
             * @minLength 1
             */
            timezone?: string;
            /**
             * The start date of the range.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
             * @format date
             */
            start_date?: string;
            /**
             * The end date of the range.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
             * @format date
             */
            end_date?: string;
            /** The human-readable start text. */
            start_text?: string;
            /** The human-readable end text. */
            end_text?: string;
            [key: string]: unknown;
          };
          /** The decimal representation of the total coding time. */
          decimal: string;
          /** The digital clock representation of the total coding time. */
          digital: string;
          /** The keystroke timeout used for this result. */
          timeout: number;
          /** The average daily coding time in seconds. */
          daily_average: number;
          /** Whether today's coding time has been fully calculated. */
          is_up_to_date: boolean;
          /** The total coding time in seconds. */
          total_seconds: number;
          /** The percentage of today's coding time currently included. */
          percent_calculated: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get the currently authenticated WakaTime user. */
    "wakatime.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current WakaTime user. */
        user: {
          /** The WakaTime user ID. */
          id: string;
          /** The user's email address, when returned. */
          email?: string;
          /** The WakaTime plan name. */
          plan: string;
          /** The user's profile photo URL. */
          photo: string;
          /** The user's website URL. */
          website?: string;
          /**
           * The user's configured timezone.
           * @minLength 1
           */
          timezone: string;
          /** The user's public username. */
          username?: string;
          /** The user's full name. */
          full_name?: string;
          /** The user's public email address. */
          public_email?: string | null;
          /** The display name returned by WakaTime. */
          display_name: string;
          /** When the WakaTime account was created. */
          created_at: string;
          /** When the WakaTime profile was last modified. */
          modified_at?: string;
          /** The last project coded in. */
          last_project?: string;
          /** The last branch coded in. */
          last_branch?: string;
          /** The last plugin user agent used. */
          last_plugin?: string;
          /** The last editor name used. */
          last_plugin_name?: string;
          /** When WakaTime last received a heartbeat for this user. */
          last_heartbeat_at?: string;
          /** Whether the user currently has premium features enabled. */
          has_premium_features: boolean;
          /** Whether the user's email address is confirmed. */
          is_email_confirmed?: boolean;
          /** Whether the user's email is public. */
          is_email_public: boolean;
          /** Whether the user's photo is public. */
          is_photo_public: boolean;
          /** Whether the user's logged time is public. */
          logged_time_public: boolean;
          /** Whether the user's languages usage is public. */
          languages_used_public: boolean;
          /** Whether the user's editor usage is public. */
          editors_used_public: boolean;
          /** Whether the user's category usage is public. */
          categories_used_public: boolean;
          /** Whether the user's operating systems are public. */
          os_used_public: boolean;
          /** Whether the user is marked as hireable. */
          is_hireable: boolean;
          /** The user's GitHub username. */
          github_username?: string;
          /** The user's Twitter username. */
          twitter_username?: string;
          /** The user's LinkedIn username. */
          linkedin_username?: string;
          /** The user's Wonderful.dev username. */
          wonderfuldev_username?: string;
          /** The user's website without the protocol prefix. */
          human_readable_website?: string;
          /** The city metadata returned by WakaTime. */
          city?: {
            /** The ISO country code for the city. */
            country_code?: string;
            /** The city name. */
            name?: string;
            /** The state or region name. */
            state?: string;
            /** The human-readable city title. */
            title?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get WakaTime coding stats for the authenticated user. */
    "wakatime.get_stats": {
      input: {
        /**
         * The WakaTime stats range, such as last_7_days, last_30_days, last_6_months, last_year, all_time, YYYY, or YYYY-MM.
         * @minLength 1
         */
        range?: string;
        /**
         * The keystroke timeout override in minutes.
         * @minimum 0
         */
        timeout?: number;
        /** Whether to count only file write activity instead of all coding activity. */
        writes_only?: boolean;
      };
      output: {
        /** The WakaTime stats returned for the requested range. */
        stats: {
          /** The stats range returned by WakaTime. */
          range?: string;
          /** The stats calculation status. */
          status?: string;
          /** The start timestamp of the stats range. */
          start?: string;
          /** The end timestamp of the stats range. */
          end?: string;
          /**
           * The timezone used for the stats range.
           * @minLength 1
           */
          timezone?: string;
          /** The WakaTime user ID for these stats. */
          user_id?: string;
          /** The keystroke timeout used for these stats. */
          timeout?: number;
          /** Whether the stats were calculated in writes-only mode. */
          writes_only?: boolean;
          /** The average daily coding time in seconds. */
          daily_average?: number;
          /** The best coding day in the requested range. */
          best_day?: {
            /**
             * The date of the best coding day.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
             * @format date
             */
            date?: string;
            /** The human-readable best day label. */
            text?: string;
            /** The total coding time for the best day. */
            total_seconds?: number;
            [key: string]: unknown;
          };
          /** The number of holidays in the range. */
          holidays?: number;
          /** Whether WakaTime marked the stats calculation as stuck. */
          is_stuck?: boolean;
          /** Whether the stats are fully up to date. */
          is_up_to_date?: boolean;
          /** Whether the stats range includes today. */
          is_including_today?: boolean;
          /** The human-readable range label returned by WakaTime. */
          human_readable_range?: string;
          /** The total coding time in seconds. */
          total_seconds?: number;
          /** The total coding time including the Other language bucket. */
          total_seconds_including_other_language?: number;
          /** The average daily coding time including the Other language bucket. */
          daily_average_including_other_language?: number;
          /** The human-readable total coding time. */
          human_readable_total?: string;
          /** The human-readable daily average. */
          human_readable_daily_average?: string;
          /** The human-readable total coding time including the Other language bucket. */
          human_readable_total_including_other_language?: string;
          /** The human-readable daily average including the Other language bucket. */
          human_readable_daily_average_including_other_language?: string;
          /** The number of days in the range including holidays. */
          days_including_holidays?: number;
          /** The number of days in the range excluding holidays. */
          days_minus_holidays?: number;
          /** The categories breakdown returned by WakaTime. */
          categories?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The dependencies breakdown returned by WakaTime. */
          dependencies?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The editors breakdown returned by WakaTime. */
          editors?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The languages breakdown returned by WakaTime. */
          languages?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The machines breakdown returned by WakaTime. */
          machines?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The operating systems breakdown returned by WakaTime. */
          operating_systems?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The projects breakdown returned by WakaTime. */
          projects?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get today's cached WakaTime status bar summary for the authenticated user. */
    "wakatime.get_status_bar_today": {
      input: {
        /**
         * The WakaTime project name.
         * @minLength 1
         */
        project?: string;
        /**
         * A comma-separated list of branch names used to filter activity.
         * @minLength 1
         */
        branches?: string;
        /**
         * The keystroke timeout override in minutes.
         * @minimum 0
         */
        timeout?: number;
        /** Whether to count only file write activity instead of all coding activity. */
        writes_only?: boolean;
        /**
         * An Olson timezone string such as America/Los_Angeles.
         * @minLength 1
         */
        timezone?: string;
      };
      output: {
        /** The WakaTime status bar summary for today. */
        status_bar: {
          /** The date range for the summary row. */
          range?: {
            /**
             * The calendar date returned by WakaTime.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
             * @format date
             */
            date?: string;
            /** The human-readable date range text. */
            text?: string;
            /** The start timestamp of the range. */
            start?: string;
            /** The end timestamp of the range. */
            end?: string;
            /**
             * The timezone used for the range.
             * @minLength 1
             */
            timezone?: string;
            /**
             * The start date of the range.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
             * @format date
             */
            start_date?: string;
            /**
             * The end date of the range.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
             * @format date
             */
            end_date?: string;
            /** The human-readable start text. */
            start_text?: string;
            /** The human-readable end text. */
            end_text?: string;
            [key: string]: unknown;
          };
          /** The total coding time for the summary row. */
          grand_total?: {
            /** The human-readable duration returned by WakaTime. */
            text?: string;
            /** The decimal duration string returned by WakaTime, when present. */
            decimal?: string;
            /** The digital duration string returned by WakaTime. */
            digital?: string;
            /** The hours component of the duration. */
            hours?: number;
            /** The minutes component of the duration. */
            minutes?: number;
            /** The seconds component of the duration. */
            seconds?: number;
            /** The total number of seconds represented by the duration. */
            total_seconds?: number;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          };
          /** The categories breakdown returned by WakaTime. */
          categories?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The dependencies breakdown returned by WakaTime. */
          dependencies?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The editors breakdown returned by WakaTime. */
          editors?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The languages breakdown returned by WakaTime. */
          languages?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The machines breakdown returned by WakaTime. */
          machines?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The operating systems breakdown returned by WakaTime. */
          operating_systems?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The projects breakdown returned by WakaTime. */
          projects?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The branches breakdown returned by WakaTime. */
          branches?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The entities breakdown returned by WakaTime. */
          entities?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** When WakaTime calculated and cached this status bar response. */
        cached_at?: string;
        /** Whether the user has access to WakaTime team features. */
        has_team_features?: boolean;
      };
    };
    /** Get WakaTime daily summaries for the authenticated user. */
    "wakatime.get_summaries": {
      input: {
        /** A predefined WakaTime summaries date range. */
        range?: "Today" | "Yesterday" | "Last 7 Days" | "Last 7 Days from Yesterday" | "Last 14 Days" | "Last 30 Days" | "This Week" | "Last Week" | "This Month" | "Last Month";
        /**
         * A calendar date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        start?: string;
        /**
         * A calendar date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        end?: string;
        /**
         * The WakaTime project name.
         * @minLength 1
         */
        project?: string;
        /**
         * A comma-separated list of branch names used to filter activity.
         * @minLength 1
         */
        branches?: string;
        /**
         * The keystroke timeout override in minutes.
         * @minimum 0
         */
        timeout?: number;
        /** Whether to count only file write activity instead of all coding activity. */
        writes_only?: boolean;
        /**
         * An Olson timezone string such as America/Los_Angeles.
         * @minLength 1
         */
        timezone?: string;
      };
      output: {
        /** The daily summaries returned by WakaTime. */
        summaries: Array<{
          /** The date range for the summary row. */
          range?: {
            /**
             * The calendar date returned by WakaTime.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
             * @format date
             */
            date?: string;
            /** The human-readable date range text. */
            text?: string;
            /** The start timestamp of the range. */
            start?: string;
            /** The end timestamp of the range. */
            end?: string;
            /**
             * The timezone used for the range.
             * @minLength 1
             */
            timezone?: string;
            /**
             * The start date of the range.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
             * @format date
             */
            start_date?: string;
            /**
             * The end date of the range.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
             * @format date
             */
            end_date?: string;
            /** The human-readable start text. */
            start_text?: string;
            /** The human-readable end text. */
            end_text?: string;
            [key: string]: unknown;
          };
          /** The total coding time for the summary row. */
          grand_total?: {
            /** The human-readable duration returned by WakaTime. */
            text?: string;
            /** The decimal duration string returned by WakaTime, when present. */
            decimal?: string;
            /** The digital duration string returned by WakaTime. */
            digital?: string;
            /** The hours component of the duration. */
            hours?: number;
            /** The minutes component of the duration. */
            minutes?: number;
            /** The seconds component of the duration. */
            seconds?: number;
            /** The total number of seconds represented by the duration. */
            total_seconds?: number;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          };
          /** The categories breakdown returned by WakaTime. */
          categories?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The dependencies breakdown returned by WakaTime. */
          dependencies?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The editors breakdown returned by WakaTime. */
          editors?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The languages breakdown returned by WakaTime. */
          languages?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The machines breakdown returned by WakaTime. */
          machines?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The operating systems breakdown returned by WakaTime. */
          operating_systems?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The projects breakdown returned by WakaTime. */
          projects?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The branches breakdown returned by WakaTime. */
          branches?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          /** The entities breakdown returned by WakaTime. */
          entities?: Array<{
            /** The item name returned by WakaTime. */
            name?: string;
            /** The human-readable duration for this item. */
            text?: string;
            /** The decimal duration string for this item, when present. */
            decimal?: string;
            /** The digital duration string for this item. */
            digital?: string;
            /** The hours component for this item. */
            hours?: number;
            /** The minutes component for this item. */
            minutes?: number;
            /** The seconds component for this item. */
            seconds?: number;
            /** The percentage of total time for this item. */
            percent?: number;
            /** The total number of seconds tracked for this item. */
            total_seconds?: number;
            /** The WakaTime machine identifier, when the item represents a machine. */
            machine_name_id?: string;
            /** The project color returned by WakaTime, when present. */
            color?: string | null;
            /** The percentage of data calculated for this item, when present. */
            percent_calculated?: number;
            /** A compact hours and minutes display returned by WakaTime, when present. */
            hours_minutes?: string;
            /** The avatar URL returned by WakaTime, when present. */
            avatar_url?: string;
            /** The number of AI-generated added lines returned by WakaTime. */
            ai_additions?: number;
            /** The number of AI-generated deleted lines returned by WakaTime. */
            ai_deletions?: number;
            /** The number of manually typed added lines returned by WakaTime. */
            human_additions?: number;
            /** The number of manually typed deleted lines returned by WakaTime. */
            human_deletions?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The cumulative total returned for the summaries range. */
        cumulative_total?: {
          /** The human-readable cumulative duration. */
          text?: string;
          /** The decimal cumulative duration string. */
          decimal?: string;
          /** The digital cumulative duration string. */
          digital?: string;
          /** The cumulative duration in seconds. */
          seconds?: number;
          [key: string]: unknown;
        };
        /** The daily average returned for the summaries range. */
        daily_average?: {
          /** The number of holidays in the range. */
          holidays?: number;
          /** The number of days in the range including holidays. */
          days_including_holidays?: number;
          /** The number of days in the range excluding holidays. */
          days_minus_holidays?: number;
          /** The daily average coding time in seconds. */
          seconds?: number;
          /** The human-readable daily average. */
          text?: string;
          /** The daily average coding time in seconds including the Other language bucket. */
          seconds_including_other_language?: number;
          /** The human-readable daily average including the Other language bucket. */
          text_including_other_language?: string;
          [key: string]: unknown;
        };
        /** The start timestamp returned for the summaries range. */
        start?: string;
        /** The end timestamp returned for the summaries range. */
        end?: string;
      };
    };
    /** List WakaTime projects for the authenticated user. */
    "wakatime.list_projects": {
      input: {
        /**
         * A search term used to filter project names.
         * @minLength 1
         */
        q?: string;
        /**
         * The 1-based page number to request.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The projects returned by WakaTime. */
        projects: Array<{
          /** The WakaTime project ID. */
          id: string;
          /** The relative WakaTime URL for the project. */
          url?: string;
          /** The project name. */
          name: string;
          /** The project badge URL, when enabled. */
          badge?: string;
          /** The project color returned by WakaTime. */
          color?: string | null;
          /** The client tools associated with the project. */
          clients?: Array<string>;
          /** When WakaTime created the project record. */
          created_at?: string;
          /** The repository metadata returned for this project. */
          repository?: {
            /** The repository identifier. */
            id?: string;
            /** The repository URL. */
            url?: string;
            /** The repository name. */
            name?: string;
            /** The repository provider. */
            provider?: string;
            /** The full repository name. */
            full_name?: string;
            /** The HTML repository URL. */
            html_url?: string;
            /** The repository homepage URL. */
            homepage?: string;
            /** The repository description. */
            description?: string;
            /** The repository default branch. */
            default_branch?: string;
            /** Whether the repository is a fork. */
            is_fork?: boolean;
            /** Whether the repository is private. */
            is_private?: boolean;
            /** The repository fork count. */
            fork_count?: number;
            /** The repository star count. */
            star_count?: number;
            /** The repository watcher count. */
            watch_count?: number;
            /** When WakaTime last synced the repository metadata. */
            last_synced_at?: string;
            [key: string]: unknown;
          };
          /** Whether the project has a public share URL enabled. */
          has_public_url: boolean;
          /** The URL-encoded project name. */
          urlencoded_name?: string;
          /** When WakaTime last received a heartbeat for this project. */
          last_heartbeat_at?: string;
          /** When WakaTime first received a heartbeat for this project. */
          first_heartbeat_at?: string;
          /** The human-readable last heartbeat time. */
          human_readable_last_heartbeat_at?: string;
          /** The human-readable first heartbeat time. */
          human_readable_first_heartbeat_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
