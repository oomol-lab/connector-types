import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one activity in full: summary measurements such as heart rate, pace, power, swim strokes and training effect, plus device metadata and split summaries. */
    "garmin_connect.get_activity": {
      input: {
        /**
         * The Garmin activity identifier, from list_activities.
         * @exclusiveMinimum 0
         */
        activityId: number;
      };
      output: {
        /** The activity detail. The summaryDTO fields depend on the sport and device. */
        activity?: {
          /** The Garmin activity identifier. */
          activityId?: number;
          /** The activity name shown in Garmin Connect. */
          activityName?: string | null;
          /** The activity type. */
          activityTypeDTO?: unknown;
          /** The activity measurements. */
          summaryDTO?: unknown;
          /** Device, file and upload metadata. */
          metadataDTO?: unknown;
          [key: string]: unknown;
        };
      };
    };
    /** Get the latest Garmin fitness age calculated on or before a date: the fitness age, the best fitness age within reach, the user's age when it was calculated, and the inputs it is based on (vigorous activity, resting heart rate, and BMI or body fat), each with its current value and, where Garmin sets one, a target. */
    "garmin_connect.get_fitness_age": {
      input: {
        /**
         * The calendar date in YYYY-MM-DD, on the user's local calendar.
         * @format date
         */
        date: string;
      };
      output: {
        /** The latest fitness age Garmin holds as of the requested date. Without one, Garmin returns only chronologicalAge, components and lastUpdated, or only invalidReason. */
        fitnessAge: {
          /** The fitness age in years. Absent when Garmin holds no fitness age as of the date. */
          fitnessAge?: number | null;
          /** The user's age in years on the lastUpdated date. */
          chronologicalAge?: number | null;
          /** The best fitness age the user can reach, as Garmin estimates it. */
          achievableFitnessAge?: number | null;
          /** The fitness age before the latest update. */
          previousFitnessAge?: number | null;
          /** The inputs the fitness age is based on, keyed by name, such as vigorousDaysAvg, vigorousMinutesAvg, rhr (resting heart rate) and bmi. */
          components?: Record<string, {
              /** The user's current value. Absent when the input is stale. */
              value?: number | null;
              /** The value that would give the best possible fitness age. */
              targetValue?: number | null;
              /** The difference between the current value and the target. */
              improvementValue?: number | null;
              /** The fitness age the user would have on reaching the target for this input. */
              potentialAge?: number | null;
              /** The relative priority Garmin gives this input. */
              priority?: number | null;
              /** Whether the input is out of date and may not reflect the user's current state. */
              stale?: boolean | null;
              /** The measurements that are out of date, such as RHR or WEIGHT. Present only when the input is stale. */
              staleInputs?: Array<string>;
              /** The last date the input was measured, when Garmin reports it. */
              lastMeasurementDate?: string | null;
              /** The number of weeks of intensity minutes behind a vigorous activity input. */
              numOfWeeksForIm?: number | null;
              [key: string]: unknown;
            }>;
          /** When Garmin last calculated the fitness age, such as 2026-11-09T00:00:00.0; the requested date when there is no fitness age. */
          lastUpdated?: string | null;
          /** Why Garmin cannot give the user a fitness age, such as USER_UNDER_AGE or USER_EMPTY_AGE. Present only then. */
          invalidReason?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get one day of heart rate: resting, minimum and maximum heart rate and the readings through the day. */
    "garmin_connect.get_heart_rate": {
      input: {
        /**
         * The calendar date in YYYY-MM-DD, on the user's local calendar.
         * @format date
         */
        date: string;
      };
      output: {
        /** One day of heart rate. */
        heartRate?: {
          /**
           * The calendar date of the day.
           * @format date
           */
          calendarDate?: string;
          /** The resting heart rate in beats per minute. */
          restingHeartRate?: number | null;
          /** The lowest heart rate of the day in beats per minute. */
          minHeartRate?: number | null;
          /** The highest heart rate of the day in beats per minute. */
          maxHeartRate?: number | null;
          /** The seven-day resting heart rate average. */
          lastSevenDaysAvgRestingHeartRate?: number | null;
          /** Readings as [timestamp, beats per minute] pairs; the timestamp is in epoch milliseconds. */
          heartRateValues?: Array<Array<number | null>> | null;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Get the user's heart rate zones: the default zones and any sport-specific zones, with the method and the resting, maximum and threshold heart rates they are built on. */
    "garmin_connect.get_heart_rate_zones": {
      input: Record<string, never>;
      output: {
        /** One zone set per sport. */
        zones?: Array<{
          /** The sport the zones apply to; DEFAULT applies to every sport without zones of its own. */
          sport?: string;
          /** How the zones are set, such as HR_MAX for percentages of the maximum heart rate. */
          trainingMethod?: string;
          /** The lowest heart rate of zone 1. */
          zone1Floor?: number;
          /** The lowest heart rate of zone 2. */
          zone2Floor?: number;
          /** The lowest heart rate of zone 3. */
          zone3Floor?: number;
          /** The lowest heart rate of zone 4. */
          zone4Floor?: number;
          /** The lowest heart rate of zone 5. */
          zone5Floor?: number;
          /** The maximum heart rate the zones are built on. */
          maxHeartRateUsed?: number;
          /** The resting heart rate the zones are built on. */
          restingHeartRateUsed?: number | null;
          /** The lactate threshold heart rate the zones are built on. */
          lactateThresholdHeartRateUsed?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get one night of sleep in detail: duration, sleep stages, sleep scores, overnight SpO2, respiration and stress, and Garmin's sleep need estimate. */
    "garmin_connect.get_sleep": {
      input: {
        /**
         * The calendar date in YYYY-MM-DD, on the user's local calendar.
         * @format date
         */
        date: string;
      };
      output: {
        /** One night of sleep. The measurements are null when the device recorded no sleep that night. */
        sleep?: {
          /** The calendar date the sleep belongs to, in YYYY-MM-DD. */
          calendarDate?: string | null;
          /** Total sleep in seconds. */
          sleepTimeSeconds?: number | null;
          /** Deep sleep in seconds. */
          deepSleepSeconds?: number | null;
          /** Light sleep in seconds. */
          lightSleepSeconds?: number | null;
          /** REM sleep in seconds. */
          remSleepSeconds?: number | null;
          /** Time awake during the sleep window, in seconds. */
          awakeSleepSeconds?: number | null;
          /** The sleep start, in epoch milliseconds. */
          sleepStartTimestampGMT?: number | null;
          /** The sleep end, in epoch milliseconds. */
          sleepEndTimestampGMT?: number | null;
          /** Sleep scores overall and per component, when the device computes them. */
          sleepScores?: unknown;
          /** Garmin's estimate of the sleep needed and what adjusted it. */
          sleepNeed?: unknown;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Get the Garmin Connect display name, time zone, locale and measurement units of the user. Use the time zone to read the local times that other actions return. */
    "garmin_connect.get_user_settings": {
      input: Record<string, never>;
      output: {
        /** The Garmin Connect user settings. */
        settings?: {
          /** The Garmin Connect display name. */
          displayName?: string;
          /** The IANA time zone of the user, such as Europe/London. */
          timeZone?: string;
          /** The preferred unit system, such as metric. */
          measurementSystem?: string;
          /** The preferred locale, such as en. */
          preferredLocale?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List the user's recorded activities, newest first by default, with optional date, type and text filters. Each item is a summary; use get_activity for the full detail of one activity. */
    "garmin_connect.list_activities": {
      input: {
        /**
         * Only activities that started on or after this local date, in YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * Only activities that started on or before this local date, in YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /** A top-level activity type key, such as running or cycling. See list_activity_types. */
        activityType?: string;
        /** An activity type key with a parent, such as trail_running. When activityType is also set, it must be that key's parent. */
        activitySubType?: string;
        /** An event type key, such as race, training, recreation or uncategorized. */
        eventType?: string;
        /** Text to look for in activity names and descriptions. */
        search?: string;
        /**
         * The sort direction by start time.
         * @default "desc"
         */
        sortOrder?: "desc" | "asc";
        /**
         * The zero-based offset of the first activity to return.
         * @minimum 0
         * @default 0
         */
        start?: number;
        /**
         * The maximum number of activities to return.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** The activities on this page. */
        activities?: Array<{
          /** The Garmin activity identifier. Pass it to get_activity for the full detail. */
          activityId?: number;
          /** The activity name shown in Garmin Connect. */
          activityName?: string | null;
          /** The start time on the user's local clock, as YYYY-MM-DD HH:mm:ss. */
          startTimeLocal?: string;
          /** The start time in GMT, as YYYY-MM-DD HH:mm:ss. */
          startTimeGMT?: string;
          /** The activity type Garmin assigned to the activity. */
          activityType?: {
            /** The numeric activity type identifier. */
            typeId?: number;
            /** The activity type key, such as running or lap_swimming. */
            typeKey?: string;
            /** The numeric identifier of the parent activity type. */
            parentTypeId?: number;
            [key: string]: unknown;
          };
          /** The distance in meters. */
          distance?: number | null;
          /** The timer duration in seconds. */
          duration?: number | null;
          /** The elapsed duration in seconds, including pauses. */
          elapsedDuration?: number | null;
          /** The active calories burned. */
          calories?: number | null;
          /** The average heart rate in beats per minute. */
          averageHR?: number | null;
          /** The training load Garmin assigned to the activity. */
          activityTrainingLoad?: number | null;
          [key: string]: unknown;
        }>;
        /** The start offset of the next page, or null when this page held fewer activities than the limit. */
        nextStart?: number | null;
      };
    };
    /** List the activity type keys Garmin Connect uses. Keys without a parent can filter list_activities by activityType; keys with a parent filter it by activitySubType. */
    "garmin_connect.list_activity_types": {
      input: Record<string, never>;
      output: {
        /** The activity types. */
        activityTypes?: Array<{
          /** The activity type key, such as running or trail_running. */
          key?: string;
          /** The parent activity type key. Absent for top-level types. */
          parent?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Body Battery for a range of days: the energy charged and drained and the readings through each day. The range may span at most 31 days. */
    "garmin_connect.list_body_battery": {
      input: {
        /**
         * The first calendar date to include, in YYYY-MM-DD, on the user's local calendar.
         * @format date
         */
        startDate: string;
        /**
         * The last calendar date to include, in YYYY-MM-DD. It must not be before startDate. The range may span at most 31 days, both ends included.
         * @format date
         */
        endDate: string;
        /**
         * Split each day into this many intervals and return the lowest and highest level of each, instead of every reading.
         * @exclusiveMinimum 0
         */
        chunks?: number;
      };
      output: {
        /** One report per day. */
        days?: Array<{
          /**
           * The calendar date of the report.
           * @format date
           */
          date?: string;
          /** Body Battery charged during the day. */
          charged?: number | null;
          /** Body Battery drained during the day. */
          drained?: number | null;
          /** Readings as [timestamp, level] pairs; with chunks, the lowest and highest level of each interval instead. */
          bodyBatteryValuesArray?: Array<Array<unknown>>;
          /** Describes the position of each value inside a reading. Null on days without readings. */
          bodyBatteryValueDescriptorDTOList?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List all-day wellness summaries for a range of days: steps, calories, heart rate, intensity minutes, stress, Body Battery, respiration and pulse oximetry. The range may span at most 366 days. */
    "garmin_connect.list_daily_summaries": {
      input: {
        /**
         * The first calendar date to include, in YYYY-MM-DD, on the user's local calendar.
         * @format date
         */
        startDate: string;
        /**
         * The last calendar date to include, in YYYY-MM-DD. It must not be before startDate. The range may span at most 366 days, both ends included.
         * @format date
         */
        endDate: string;
      };
      output: {
        /** One summary per day that holds data. */
        summaries?: Array<{
          /**
           * The calendar date of the summary.
           * @format date
           */
          calendarDate?: string;
          /** Whether the day holds all-day wellness data. */
          includesWellnessData?: boolean;
          /** Whether the day holds recorded activities. */
          includesActivityData?: boolean;
          /** Steps, wheelchair pushes, and floors climbed and descended. */
          movement?: unknown;
          /** Active, resting and total calories. */
          calories?: unknown;
          /** Resting, minimum and maximum heart rate. */
          heartRate?: unknown;
          /** Moderate and vigorous intensity minutes and the weekly goal. */
          intensityMinutes?: unknown;
          /** Stress averages and time spent at each stress level. */
          stress?: unknown;
          /** Body Battery levels, charge and drain. */
          bodyBattery?: unknown;
          /** Respiration rate averages. */
          respiration?: unknown;
          /** Pulse oximetry averages. */
          pulseOx?: unknown;
          [key: string]: unknown;
        }>;
      };
    };
    /** List overnight heart rate variability for a range of nights: the nightly average, the seven-day average, the personal baseline and the HRV status. Garmin lists only nights it holds an HRV record for, and the averages can still be null on such a night. */
    "garmin_connect.list_hrv_summaries": {
      input: {
        /**
         * The first calendar date to include, in YYYY-MM-DD, on the user's local calendar.
         * @format date
         */
        startDate: string;
        /**
         * The last calendar date to include, in YYYY-MM-DD. It must not be before startDate.
         * @format date
         */
        endDate: string;
      };
      output: {
        /** One summary per night with HRV data. */
        summaries?: Array<{
          /**
           * The calendar date of the night.
           * @format date
           */
          calendarDate?: string;
          /** The average overnight HRV, in milliseconds. */
          lastNightAvg?: number | null;
          /** The highest five-minute HRV average of the night, in milliseconds. */
          lastNight5MinHigh?: number | null;
          /** The seven-day HRV average, in milliseconds. */
          weeklyAvg?: number | null;
          /** The personal baseline range, once Garmin has enough nights to set it. */
          baseline?: unknown;
          /** The HRV status, such as BALANCED; NONE until Garmin has enough nights to set a baseline. */
          status?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List sleep summaries for a range of nights: duration, sleep stages and sleep need. The range may span at most 31 days; use get_sleep for the sleep scores of one night. */
    "garmin_connect.list_sleep_summaries": {
      input: {
        /**
         * The first calendar date to include, in YYYY-MM-DD, on the user's local calendar.
         * @format date
         */
        startDate: string;
        /**
         * The last calendar date to include, in YYYY-MM-DD. It must not be before startDate. The range may span at most 31 days, both ends included.
         * @format date
         */
        endDate: string;
      };
      output: {
        /** One summary per night. */
        summaries?: Array<{
          /** The calendar date the sleep belongs to, in YYYY-MM-DD. */
          calendarDate?: string | null;
          /** Total sleep in seconds. */
          sleepTimeSeconds?: number | null;
          /** Deep sleep in seconds. */
          deepSleepSeconds?: number | null;
          /** Light sleep in seconds. */
          lightSleepSeconds?: number | null;
          /** REM sleep in seconds. */
          remSleepSeconds?: number | null;
          /** Time awake during the sleep window, in seconds. */
          awakeSleepSeconds?: number | null;
          /** The sleep start, in epoch milliseconds. */
          sleepStartTimestampGMT?: number | null;
          /** The sleep end, in epoch milliseconds. */
          sleepEndTimestampGMT?: number | null;
          /** Sleep scores overall and per component, when the device computes them. */
          sleepScores?: unknown;
          /** Garmin's estimate of the sleep needed and what adjusted it. */
          sleepNeed?: unknown;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the user's VO2 max estimates for a range of days: the general estimate and the cycling and rowing estimates, each with the sport of the activity it came from. Garmin lists only days that have an estimate. The range may span at most 366 days. */
    "garmin_connect.list_vo2_max": {
      input: {
        /**
         * The first calendar date to include, in YYYY-MM-DD, on the user's local calendar.
         * @format date
         */
        startDate: string;
        /**
         * The last calendar date to include, in YYYY-MM-DD. It must not be before startDate. The range may span at most 366 days, both ends included.
         * @format date
         */
        endDate: string;
        /** Filter estimates by one or more Garmin FIT SDK sports. */
        sport?: string | Array<string>;
      };
      output: {
        /** One entry per day that has an estimate; each estimate carries its calendarDate. */
        days: Array<{
          /** The general VO2 max estimate. Null when Garmin has none for the day. */
          generic?: {
            /**
             * The calendar date of the estimate.
             * @format date
             */
            calendarDate?: string;
            /** VO2 max in mL/kg/min, rounded to a whole number as Garmin Connect shows it. */
            vo2MaxValue?: number | null;
            /** VO2 max in mL/kg/min before rounding. */
            vo2MaxPreciseValue?: number | null;
            /** The sport of the activity the estimate came from, such as RUNNING or CYCLING. */
            sport?: string | null;
            /** The sub-sport of that activity, such as GENERIC or INDOOR_CYCLING. */
            subSport?: string | null;
            [key: string]: unknown;
          } | null;
          /** The cycling VO2 max estimate. Null when Garmin has none for the day. */
          cycling?: {
            /**
             * The calendar date of the estimate.
             * @format date
             */
            calendarDate?: string;
            /** VO2 max in mL/kg/min, rounded to a whole number as Garmin Connect shows it. */
            vo2MaxValue?: number | null;
            /** VO2 max in mL/kg/min before rounding. */
            vo2MaxPreciseValue?: number | null;
            /** The sport of the activity the estimate came from, such as RUNNING or CYCLING. */
            sport?: string | null;
            /** The sub-sport of that activity, such as GENERIC or INDOOR_CYCLING. */
            subSport?: string | null;
            [key: string]: unknown;
          } | null;
          /** The rowing VO2 max estimate. Null or absent when Garmin has none for the day. */
          rowing?: {
            /**
             * The calendar date of the estimate.
             * @format date
             */
            calendarDate?: string;
            /** VO2 max in mL/kg/min, rounded to a whole number as Garmin Connect shows it. */
            vo2MaxValue?: number | null;
            /** VO2 max in mL/kg/min before rounding. */
            vo2MaxPreciseValue?: number | null;
            /** The sport of the activity the estimate came from, such as RUNNING or CYCLING. */
            sport?: string | null;
            /** The sub-sport of that activity, such as GENERIC or INDOOR_CYCLING. */
            subSport?: string | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List weigh-ins for a range of days with body composition from a smart scale, the range average, and the nearest weigh-ins before and after the range. Weights are in grams. */
    "garmin_connect.list_weight": {
      input: {
        /**
         * The first calendar date to include, in YYYY-MM-DD, on the user's local calendar.
         * @format date
         */
        startDate: string;
        /**
         * The last calendar date to include, in YYYY-MM-DD. It must not be before startDate.
         * @format date
         */
        endDate: string;
      };
      output: {
        /** The weight data for the range. */
        weight?: {
          /** One entry per day with a weigh-in, newest first. allWeightMetrics lists every weigh-in of the day. */
          dailyWeightSummaries?: Array<Record<string, unknown>>;
          /** Averages over the range; weight in grams. */
          totalAverage?: unknown;
          /** The latest weigh-in before the range, or null. */
          previousDateWeight?: unknown;
          /** The earliest weigh-in after the range, or null. */
          nextDateWeight?: unknown;
          [key: string]: unknown;
        };
      };
    };
    /** List the user's wellness activities for a range of days, such as Health Snapshot sessions, with a summary of each measurement taken (heart rate, stress, respiration, heart rate variability and, when recorded, pulse oximetry) and the time spent in each heart rate zone. */
    "garmin_connect.list_wellness_activities": {
      input: {
        /**
         * The first calendar date to include, in YYYY-MM-DD, on the user's local calendar.
         * @format date
         */
        startDate: string;
        /**
         * The last calendar date to include, in YYYY-MM-DD. It must not be before startDate.
         * @format date
         */
        endDate: string;
      };
      output: {
        /** One entry per wellness activity. */
        activities?: Array<{
          /** The identifier of the wellness activity. */
          activityUuid?: {
            /**
             * The wellness activity UUID.
             * @format uuid
             */
            uuid?: string;
            [key: string]: unknown;
          };
          /**
           * The calendar date of the wellness activity.
           * @format date
           */
          calendarDate?: string;
          /** The name Garmin gave the activity, such as Health Snapshot - Evening. */
          activityName?: string | null;
          /** The type of wellness activity: HEALTH_MONITORING or UNKNOWN. */
          wellnessActivityType?: string | null;
          /** Notes the user added to the activity. */
          notes?: string | null;
          /** The start time in GMT, without an offset, such as 2026-03-15T16:59:23.0. */
          startTimestampGMT?: string;
          /** The end time in GMT, without an offset, such as 2026-03-15T17:01:23.145. */
          endTimestampGMT?: string;
          /** The start time on the user's local clock, without an offset. */
          startTimestampLocal?: string;
          /** The end time on the user's local clock, without an offset. */
          endTimestampLocal?: string;
          /** One summary per measurement taken: the lowest, highest and average value, or only the average for heart rate variability. */
          summaryTypeDataList?: Array<{
            /** The measurement: HEART_RATE, WRIST_HEART_RATE, STRESS, RESPIRATION, SPO2, or RMSSD_HRV and SDRR_HRV for heart rate variability. */
            summaryType?: string;
            /** The lowest value. Absent for the heart rate variability measurements. */
            minValue?: number | null;
            /** The highest value. Absent for the heart rate variability measurements. */
            maxValue?: number | null;
            /** The average value. */
            avgValue?: number | null;
            [key: string]: unknown;
          }>;
          /** The time spent in each heart rate zone during the activity. */
          timeInZoneList?: Array<{
            /** The zone number; zone 0 is below zone 1. */
            zoneNumber?: number;
            /** The time spent in the zone, in milliseconds. */
            millisInZone?: number;
            /** The lowest heart rate of the zone, in beats per minute. */
            zoneLowBoundary?: number;
            [key: string]: unknown;
          }>;
          /** The device that recorded the activity. */
          deviceMetaData?: unknown;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
