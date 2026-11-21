import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one activity in full: every summary measurement Intervals.icu holds for it, the list of recorded streams, and optionally its intervals (laps and efforts). */
    "intervals_icu.get_activity": {
      input: {
        /**
         * The activity identifier, such as i55751783, from list_activities.
         * @minLength 1
         */
        activityId: string;
        /**
         * Also return the activity's intervals and interval groups.
         * @default false
         */
        includeIntervals?: boolean;
      };
      output: {
        /** The activity detail. The measurements depend on the sport and the recording device. */
        activity?: {
          /** The activity identifier. */
          id?: string;
          /** The activity name. */
          name?: string | null;
          /** The sport, such as Ride, Run or Swim. */
          type?: string | null;
          /** The start time on the athlete's local clock, as YYYY-MM-DDTHH:mm:ss. */
          start_date_local?: string | null;
          /** The streams recorded for this activity. Pass any of them to get_activity_streams. */
          stream_types?: Array<string> | null;
          /** The intervals of the activity, present when includeIntervals is true. */
          icu_intervals?: unknown;
          /** Present instead of the activity data when Intervals.icu cannot share the activity through its API, such as an activity synced from Strava. */
          _note?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the recorded data series of one activity, such as heart rate or power, sample by sample. Ask only for the streams you need: a long activity holds thousands of samples per stream. */
    "intervals_icu.get_activity_streams": {
      input: {
        /**
         * The activity identifier, such as i55751783, from list_activities.
         * @minLength 1
         */
        activityId: string;
        /**
         * The streams to return, named as in the stream_types list of get_activity.
         * @minItems 1
         */
        types: Array<string>;
      };
      output: {
        /** One entry per stream. */
        streams?: Array<{
          /** The stream type. */
          type?: string;
          /** A readable name for the stream. */
          name?: string | null;
          /** The values, one per sample. */
          data?: unknown;
          /** A second value per sample, for streams that carry two. */
          data2?: unknown;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the Intervals.icu athlete profile of the API key: id, name, time zone and location. Use the time zone to read the local dates and times that other actions return. */
    "intervals_icu.get_athlete": {
      input: Record<string, never>;
      output: {
        /** The athlete. */
        athlete?: {
          /** The athlete identifier, such as i12345. */
          id?: string;
          /** The athlete's name. */
          name?: string | null;
          /** The IANA time zone of the athlete, such as Europe/London. */
          timezone?: string | null;
          /** The athlete's city. */
          city?: string | null;
          /** The athlete's country. */
          country?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get one calendar entry in full. For a planned workout this includes its structured steps with their durations and targets. */
    "intervals_icu.get_event": {
      input: {
        /**
         * The event identifier, from list_events.
         * @exclusiveMinimum 0
         */
        eventId: number;
      };
      output: {
        /** The calendar entry. */
        event?: {
          /** The event identifier. */
          id?: number;
          /** The kind of entry, such as WORKOUT, RACE_A or NOTE. */
          category?: string;
          /** The entry name. */
          name?: string | null;
          /** The local start date and time, as YYYY-MM-DDTHH:mm:ss. */
          start_date_local?: string | null;
          /** The structured steps of a planned workout, with durations and targets. */
          workout_doc?: unknown;
          [key: string]: unknown;
        };
      };
    };
    /** List the athlete's completed activities between two local dates, newest first, with distance, time, heart rate and training load. It returns at most limit activities (30 by default); when the list is full, call again with newest set to the start_date_local of the oldest activity returned and skip the activities already seen. Intervals.icu does not share data synced from Strava through its API. */
    "intervals_icu.list_activities": {
      input: {
        /**
         * The earliest local date to include, as YYYY-MM-DD, or a local date and time as YYYY-MM-DDTHH:mm:ss.
         * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2})?$
         */
        oldest: string;
        /**
         * The latest local date to include, as YYYY-MM-DD, or a local date and time as YYYY-MM-DDTHH:mm:ss. Defaults to now.
         * @pattern ^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2})?$
         */
        newest?: string;
        /**
         * The maximum number of activities to return, newest first.
         * @exclusiveMinimum 0
         * @default 30
         */
        limit?: number;
        /** Only return these activity fields, to keep the response small. Intervals.icu then also leaves out fields whose value is null. */
        fields?: Array<string>;
      };
      output: {
        /** The activities, newest first. */
        activities?: Array<{
          /** The Intervals.icu activity identifier, such as i55751783. Pass it to get_activity. */
          id?: string;
          /** The activity name. */
          name?: string | null;
          /** The sport, such as Ride, Run or Swim. */
          type?: string | null;
          /** The start time on the athlete's local clock, as YYYY-MM-DDTHH:mm:ss. */
          start_date_local?: string | null;
          /** The start time in UTC, as an ISO-8601 timestamp. */
          start_date?: string | null;
          /** The distance in meters. */
          distance?: number | null;
          /** The moving time in seconds. */
          moving_time?: number | null;
          /** The elapsed time in seconds, including pauses. */
          elapsed_time?: number | null;
          /** The elevation gained, in meters. */
          total_elevation_gain?: number | null;
          /** The average heart rate in beats per minute. */
          average_heartrate?: number | null;
          /** The highest heart rate in beats per minute. */
          max_heartrate?: number | null;
          /** The training load Intervals.icu calculated for the activity. */
          icu_training_load?: number | null;
          /** Where the activity came from, such as UPLOAD, GARMIN_CONNECT or STRAVA. */
          source?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the athlete's calendar between two local dates: planned workouts, races, notes and other entries. Without dates it lists today and the next six days in the athlete's time zone. */
    "intervals_icu.list_events": {
      input: {
        /**
         * The first local date to include, in YYYY-MM-DD. Defaults to today.
         * @format date
         */
        oldest?: string;
        /**
         * The last local date to include, in YYYY-MM-DD. Defaults to six days after oldest. When both dates are set, it must not be before oldest.
         * @format date
         */
        newest?: string;
        /** Only return entries of these kinds. */
        categories?: Array<"WORKOUT" | "RACE_A" | "RACE_B" | "RACE_C" | "NOTE" | "PLAN" | "HOLIDAY" | "SICK" | "INJURED" | "SET_EFTP" | "FITNESS_DAYS" | "SEASON_START" | "TARGET" | "SET_FITNESS">;
        /**
         * The maximum number of entries to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The calendar entries. */
        events?: Array<{
          /** The event identifier. Pass it to get_event. */
          id?: number;
          /** The kind of entry, such as WORKOUT, RACE_A or NOTE. */
          category?: string;
          /** The local start date and time, as YYYY-MM-DDTHH:mm:ss. */
          start_date_local?: string | null;
          /** The local end date and time of entries that span several days. */
          end_date_local?: string | null;
          /** The entry name. */
          name?: string | null;
          /** The description; for a planned workout, its steps as text. */
          description?: string | null;
          /** The sport of a planned workout, such as Ride or Run. */
          type?: string | null;
          /** The planned duration in seconds. */
          moving_time?: number | null;
          /** The planned training load. */
          icu_training_load?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the athlete's settings for each group of sports: the FTP, threshold and maximum heart rate, and the power and heart rate zones Intervals.icu uses for training load. */
    "intervals_icu.list_sport_settings": {
      input: Record<string, never>;
      output: {
        /** One entry per group of sports. */
        sportSettings?: Array<{
          /** The settings identifier. */
          id?: number;
          /** The sports these settings apply to, such as Ride and VirtualRide. */
          types?: Array<string>;
          /** The functional threshold power in watts. */
          ftp?: number | null;
          /** The indoor functional threshold power in watts, when it differs. */
          indoor_ftp?: number | null;
          /** The lactate threshold heart rate in beats per minute. */
          lthr?: number | null;
          /** The maximum heart rate in beats per minute. */
          max_hr?: number | null;
          /** The top of each heart rate zone in beats per minute; the last one is the maximum heart rate. */
          hr_zones?: Array<number> | null;
          /** The top of each power zone as a percentage of FTP; the last zone is open-ended. */
          power_zones?: Array<number> | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List daily wellness records between two local dates: fitness (ctl), fatigue (atl) and ramp rate, plus weight, resting heart rate, HRV, sleep, readiness and the athlete's notes where recorded. */
    "intervals_icu.list_wellness": {
      input: {
        /**
         * The first local date to include, in YYYY-MM-DD.
         * @format date
         */
        oldest: string;
        /**
         * The last local date to include, in YYYY-MM-DD. It must not be before oldest.
         * @format date
         */
        newest: string;
        /** Only return these wellness fields, to keep the response small. Intervals.icu then also leaves out fields whose value is null. */
        fields?: Array<string>;
      };
      output: {
        /** One record per day. */
        records?: Array<{
          /** The local date of the record, in YYYY-MM-DD. */
          id?: string;
          /** Fitness: the chronic training load at the end of the day. */
          ctl?: number | null;
          /** Fatigue: the acute training load at the end of the day. */
          atl?: number | null;
          /** How fast fitness is changing. */
          rampRate?: number | null;
          /** The body weight in kilograms. */
          weight?: number | null;
          /** The resting heart rate in beats per minute. */
          restingHR?: number | null;
          /** The heart rate variability (rMSSD) in milliseconds. */
          hrv?: number | null;
          /** The time asleep in seconds. */
          sleepSecs?: number | null;
          /** The sleep score from the device that recorded the night. */
          sleepScore?: number | null;
          /** The readiness score from the connected device. */
          readiness?: number | null;
          /** The step count. */
          steps?: number | null;
          /** The athlete's notes for the day. */
          comments?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Find the athlete's activities by name, or by tag when the query starts with #. Returns short summaries; use get_activity for the detail of one activity. */
    "intervals_icu.search_activities": {
      input: {
        /**
         * Text to look for in activity names, ignoring case, or an exact tag such as #race when it starts with #.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of activities to return.
         * @exclusiveMinimum 0
         * @default 30
         */
        limit?: number;
      };
      output: {
        /** The matching activities. */
        activities?: Array<{
          /** The Intervals.icu activity identifier. Pass it to get_activity. */
          id?: string;
          /** The activity name. */
          name?: string | null;
          /** The sport, such as Ride, Run or Swim. */
          type?: string | null;
          /** The start time on the athlete's local clock, as YYYY-MM-DDTHH:mm:ss. */
          start_date_local?: string | null;
          /** The distance in meters. */
          distance?: number | null;
          /** The moving time in seconds. */
          moving_time?: number | null;
          /** Whether the activity is marked as a race. */
          race?: boolean | null;
          /** The tags on the activity. */
          tags?: Array<string> | null;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
