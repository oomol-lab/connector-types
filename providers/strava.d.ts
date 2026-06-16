import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a manually entered Strava activity. */
    "strava.create_activity": {
      input: {
        /**
         * Activity name.
         * @minLength 1
         */
        name: string;
        /** Legacy activity type. */
        type?: string;
        /** Activity sport type. */
        sportType: string;
        /**
         * Event start time.
         * @minLength 1
         */
        startDateLocal: string;
        /**
         * The total time spent on the activity, in seconds.
         * @exclusiveMinimum 0
         */
        elapsedTime: number;
        /** Activity Description. */
        description?: string;
        /**
         * Activity distance, unit is meters.
         * @exclusiveMinimum 0
         */
        distance?: number;
        /** Whether to mark it as a trainer activity. */
        trainer?: boolean;
        /** Whether to mark as commuting. */
        commute?: boolean;
      };
      output: {
        /** Strava resource ID. */
        id: number | string;
        /** Resource status. */
        resource_state?: number;
        /** External activity ID. */
        external_id?: string | null;
        /** Upload task ID. */
        upload_id?: number | string | null;
        /** Associated athlete objects. */
        athlete?: Record<string, unknown>;
        /** Activity name. */
        name: string;
        /** Activity distance, unit is meters. */
        distance: number;
        /** Movement time in seconds. */
        moving_time: number;
        /** The total time taken, in seconds. */
        elapsed_time: number;
        /** Cumulative climb, in meters. */
        total_elevation_gain: number;
        /** Legacy activity type. */
        type?: string;
        /** Sports type. */
        sport_type: string;
        /** UTC start time. */
        start_date: string;
        /** Local start time. */
        start_date_local: string;
        /** Event time zone. */
        timezone: string;
        /** Time zone offset in seconds. */
        utc_offset?: number;
        /** Average speed in meters per second. */
        average_speed?: number;
        /** Maximum speed in meters per second. */
        max_speed?: number;
        /** Average cadence. */
        average_cadence?: number | null;
        /** average power. */
        average_watts?: number | null;
        /** Maximum power. */
        max_watts?: number | null;
        /** Average heart rate. */
        average_heartrate?: number | null;
        /** Maximum heart rate. */
        max_heartrate?: number | null;
        /** Total work, unit is kilojoules. */
        kilojoules?: number | null;
        /** Whether it is a riding platform or trainer activity. */
        trainer?: boolean;
        /** Whether it is a commuting activity. */
        commute?: boolean;
        /** Whether it is created manually. */
        manual?: boolean;
        /** Whether it is a private event. */
        private?: boolean;
        /** Whether it is marked. */
        flagged?: boolean;
        /** Equipment ID. */
        gear_id?: string | null;
        /** Track map object. */
        map?: {
          /** Map object ID. */
          id?: string;
          /** Complete trajectory polyline. */
          polyline?: string | null;
          /** Summary trajectory polyline. */
          summary_polyline?: string | null;
          /** Resource status. */
          resource_state?: number;
          [key: string]: unknown;
        };
        /** Activity Description. */
        description?: string | null;
        /** Burn calories. */
        calories?: number | null;
        /** Whether the current user has liked it. */
        has_kudoed?: boolean;
        /** Whether to hide it on the homepage. */
        hide_from_home?: boolean;
        /** Strava gear summary. */
        gear?: {
          /** Equipment ID. */
          id: string;
          /** Whether it is the main equipment. */
          primary?: boolean;
          /** Equipment name. */
          name?: string;
          /** Resource status. */
          resource_state?: number;
          /** The accumulated mileage of the equipment, in meters. */
          distance?: number;
          [key: string]: unknown;
        };
        /** List of segment results included in the activity. */
        segment_efforts?: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Road segment score name. */
          name?: string;
          /** Associated activity objects. */
          activity?: Record<string, unknown>;
          /** Associated athlete objects. */
          athlete?: Record<string, unknown>;
          /** The total time taken, in seconds. */
          elapsed_time?: number;
          /** Movement time, in seconds. */
          moving_time?: number;
          /** Start time. */
          start_date?: string | null;
          /** Local start time. */
          start_date_local?: string | null;
          /** Distance in meters. */
          distance?: number;
          /** Average cadence. */
          average_cadence?: number | null;
          /** average power. */
          average_watts?: number | null;
          /** KOM ranking. */
          kom_rank?: number | null;
          /** Personal record ranking. */
          pr_rank?: number | null;
          /** Whether to hide. */
          hidden?: boolean;
          /** Strava segment summary. */
          segment?: {
            /** Strava resource ID. */
            id: number | string;
            /** Resource status. */
            resource_state?: number;
            /** Road segment name. */
            name: string;
            /** Applicable activity types. */
            activity_type?: string | null;
            /** The length of the road segment in meters. */
            distance?: number;
            /** average slope. */
            average_grade?: number;
            /** maximum slope. */
            maximum_grade?: number;
            /** Maximum altitude, in meters. */
            elevation_high?: number;
            /** Minimum altitude, in meters. */
            elevation_low?: number;
            /**
             * Starting point coordinates.
             * @minItems 2
             * @maxItems 2
             */
            start_latlng?: Array<number> | null;
            /**
             * End point coordinates.
             * @minItems 2
             * @maxItems 2
             */
            end_latlng?: Array<number> | null;
            /** Climb classification. */
            climb_category?: number | null;
            /** City. */
            city?: string | null;
            /** state or region. */
            state?: string | null;
            /** nation. */
            country?: string | null;
            /** Whether it is a private section. */
            private?: boolean;
            /** Whether the current user has favorited this road segment. */
            starred?: boolean;
            /** Whether it is marked as risky. */
            hazardous?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Activity circle list. */
        laps?: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Circle name. */
          name?: string;
          /** Circle distance in meters. */
          distance?: number;
          /** The total time taken, in seconds. */
          elapsed_time?: number;
          /** Movement time, in seconds. */
          moving_time?: number;
          /** Start time. */
          start_date?: string | null;
          /** Local start time. */
          start_date_local?: string | null;
          /** Circle climb, in meters. */
          total_elevation_gain?: number;
          /** Average speed in meters per second. */
          average_speed?: number;
          /** Maximum speed in meters per second. */
          max_speed?: number;
          /** Segment number. */
          lap_index?: number;
          [key: string]: unknown;
        }>;
        /** List of best results from the event. */
        best_efforts?: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Road segment score name. */
          name?: string;
          /** Associated activity objects. */
          activity?: Record<string, unknown>;
          /** Associated athlete objects. */
          athlete?: Record<string, unknown>;
          /** The total time taken, in seconds. */
          elapsed_time?: number;
          /** Movement time, in seconds. */
          moving_time?: number;
          /** Start time. */
          start_date?: string | null;
          /** Local start time. */
          start_date_local?: string | null;
          /** Distance in meters. */
          distance?: number;
          /** Average cadence. */
          average_cadence?: number | null;
          /** average power. */
          average_watts?: number | null;
          /** KOM ranking. */
          kom_rank?: number | null;
          /** Personal record ranking. */
          pr_rank?: number | null;
          /** Whether to hide. */
          hidden?: boolean;
          /** Strava segment summary. */
          segment?: {
            /** Strava resource ID. */
            id: number | string;
            /** Resource status. */
            resource_state?: number;
            /** Road segment name. */
            name: string;
            /** Applicable activity types. */
            activity_type?: string | null;
            /** The length of the road segment in meters. */
            distance?: number;
            /** average slope. */
            average_grade?: number;
            /** maximum slope. */
            maximum_grade?: number;
            /** Maximum altitude, in meters. */
            elevation_high?: number;
            /** Minimum altitude, in meters. */
            elevation_low?: number;
            /**
             * Starting point coordinates.
             * @minItems 2
             * @maxItems 2
             */
            start_latlng?: Array<number> | null;
            /**
             * End point coordinates.
             * @minItems 2
             * @maxItems 2
             */
            end_latlng?: Array<number> | null;
            /** Climb classification. */
            climb_category?: number | null;
            /** City. */
            city?: string | null;
            /** state or region. */
            state?: string | null;
            /** nation. */
            country?: string | null;
            /** Whether it is a private section. */
            private?: boolean;
            /** Whether the current user has favorited this road segment. */
            starred?: boolean;
            /** Whether it is marked as risky. */
            hazardous?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Photo abstract. */
        photos?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Explore eligible Strava segments within a given bounding box. */
    "strava.explore_segments": {
      input: {
        /**
         * Bounding box coordinates, in order: south latitude, west longitude, north latitude, east longitude.
         * @minItems 4
         * @maxItems 4
         */
        bounds: Array<number>;
        /** Types of activities to explore. */
        activityType?: "running" | "riding";
        /**
         * Minimum climb classification.
         * @minimum 0
         * @maximum 5
         */
        minCat?: number;
        /**
         * Maximum climb classification.
         * @minimum 0
         * @maximum 5
         */
        maxCat?: number;
      };
      output: {
        /** List of matched road segments. */
        segments: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Road segment name. */
          name: string;
          /** Applicable activity types. */
          activity_type?: string | null;
          /** The length of the road segment in meters. */
          distance?: number;
          /** average slope. */
          average_grade?: number;
          /** maximum slope. */
          maximum_grade?: number;
          /** Maximum altitude, in meters. */
          elevation_high?: number;
          /** Minimum altitude, in meters. */
          elevation_low?: number;
          /**
           * Starting point coordinates.
           * @minItems 2
           * @maxItems 2
           */
          start_latlng?: Array<number> | null;
          /**
           * End point coordinates.
           * @minItems 2
           * @maxItems 2
           */
          end_latlng?: Array<number> | null;
          /** Climb classification. */
          climb_category?: number | null;
          /** City. */
          city?: string | null;
          /** state or region. */
          state?: string | null;
          /** nation. */
          country?: string | null;
          /** Whether it is a private section. */
          private?: boolean;
          /** Whether the current user has favorited this road segment. */
          starred?: boolean;
          /** Whether it is marked as risky. */
          hazardous?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Export the GPX content of a specified Strava route. */
    "strava.export_route_gpx": {
      input: {
        /** Route ID. */
        routeId: number | string;
      };
      output: {
        /** Strava resource ID. */
        routeId: number | string;
        /** Response content type. */
        contentType: string;
        /** GPX text content. */
        content: string;
      };
    };
    /** Export TCX content for a specified Strava route. */
    "strava.export_route_tcx": {
      input: {
        /** Route ID. */
        routeId: number | string;
      };
      output: {
        /** Strava resource ID. */
        routeId: number | string;
        /** Response content type. */
        contentType: string;
        /** TCX text content. */
        content: string;
      };
    };
    /** Get activity details for current Strava athletes by ID. */
    "strava.get_activity": {
      input: {
        /** Activity ID. */
        activityId: number | string;
        /** Whether to return all road segment scores. */
        includeAllEfforts?: boolean;
      };
      output: {
        /** Strava resource ID. */
        id: number | string;
        /** Resource status. */
        resource_state?: number;
        /** External activity ID. */
        external_id?: string | null;
        /** Upload task ID. */
        upload_id?: number | string | null;
        /** Associated athlete objects. */
        athlete?: Record<string, unknown>;
        /** Activity name. */
        name: string;
        /** Activity distance, unit is meters. */
        distance: number;
        /** Movement time in seconds. */
        moving_time: number;
        /** The total time taken, in seconds. */
        elapsed_time: number;
        /** Cumulative climb, in meters. */
        total_elevation_gain: number;
        /** Legacy activity type. */
        type?: string;
        /** Sports type. */
        sport_type: string;
        /** UTC start time. */
        start_date: string;
        /** Local start time. */
        start_date_local: string;
        /** Event time zone. */
        timezone: string;
        /** Time zone offset in seconds. */
        utc_offset?: number;
        /** Average speed in meters per second. */
        average_speed?: number;
        /** Maximum speed in meters per second. */
        max_speed?: number;
        /** Average cadence. */
        average_cadence?: number | null;
        /** average power. */
        average_watts?: number | null;
        /** Maximum power. */
        max_watts?: number | null;
        /** Average heart rate. */
        average_heartrate?: number | null;
        /** Maximum heart rate. */
        max_heartrate?: number | null;
        /** Total work, unit is kilojoules. */
        kilojoules?: number | null;
        /** Whether it is a riding platform or trainer activity. */
        trainer?: boolean;
        /** Whether it is a commuting activity. */
        commute?: boolean;
        /** Whether it is created manually. */
        manual?: boolean;
        /** Whether it is a private event. */
        private?: boolean;
        /** Whether it is marked. */
        flagged?: boolean;
        /** Equipment ID. */
        gear_id?: string | null;
        /** Track map object. */
        map?: {
          /** Map object ID. */
          id?: string;
          /** Complete trajectory polyline. */
          polyline?: string | null;
          /** Summary trajectory polyline. */
          summary_polyline?: string | null;
          /** Resource status. */
          resource_state?: number;
          [key: string]: unknown;
        };
        /** Activity Description. */
        description?: string | null;
        /** Burn calories. */
        calories?: number | null;
        /** Whether the current user has liked it. */
        has_kudoed?: boolean;
        /** Whether to hide it on the homepage. */
        hide_from_home?: boolean;
        /** Strava gear summary. */
        gear?: {
          /** Equipment ID. */
          id: string;
          /** Whether it is the main equipment. */
          primary?: boolean;
          /** Equipment name. */
          name?: string;
          /** Resource status. */
          resource_state?: number;
          /** The accumulated mileage of the equipment, in meters. */
          distance?: number;
          [key: string]: unknown;
        };
        /** List of segment results included in the activity. */
        segment_efforts?: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Road segment score name. */
          name?: string;
          /** Associated activity objects. */
          activity?: Record<string, unknown>;
          /** Associated athlete objects. */
          athlete?: Record<string, unknown>;
          /** The total time taken, in seconds. */
          elapsed_time?: number;
          /** Movement time, in seconds. */
          moving_time?: number;
          /** Start time. */
          start_date?: string | null;
          /** Local start time. */
          start_date_local?: string | null;
          /** Distance in meters. */
          distance?: number;
          /** Average cadence. */
          average_cadence?: number | null;
          /** average power. */
          average_watts?: number | null;
          /** KOM ranking. */
          kom_rank?: number | null;
          /** Personal record ranking. */
          pr_rank?: number | null;
          /** Whether to hide. */
          hidden?: boolean;
          /** Strava segment summary. */
          segment?: {
            /** Strava resource ID. */
            id: number | string;
            /** Resource status. */
            resource_state?: number;
            /** Road segment name. */
            name: string;
            /** Applicable activity types. */
            activity_type?: string | null;
            /** The length of the road segment in meters. */
            distance?: number;
            /** average slope. */
            average_grade?: number;
            /** maximum slope. */
            maximum_grade?: number;
            /** Maximum altitude, in meters. */
            elevation_high?: number;
            /** Minimum altitude, in meters. */
            elevation_low?: number;
            /**
             * Starting point coordinates.
             * @minItems 2
             * @maxItems 2
             */
            start_latlng?: Array<number> | null;
            /**
             * End point coordinates.
             * @minItems 2
             * @maxItems 2
             */
            end_latlng?: Array<number> | null;
            /** Climb classification. */
            climb_category?: number | null;
            /** City. */
            city?: string | null;
            /** state or region. */
            state?: string | null;
            /** nation. */
            country?: string | null;
            /** Whether it is a private section. */
            private?: boolean;
            /** Whether the current user has favorited this road segment. */
            starred?: boolean;
            /** Whether it is marked as risky. */
            hazardous?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Activity circle list. */
        laps?: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Circle name. */
          name?: string;
          /** Circle distance in meters. */
          distance?: number;
          /** The total time taken, in seconds. */
          elapsed_time?: number;
          /** Movement time, in seconds. */
          moving_time?: number;
          /** Start time. */
          start_date?: string | null;
          /** Local start time. */
          start_date_local?: string | null;
          /** Circle climb, in meters. */
          total_elevation_gain?: number;
          /** Average speed in meters per second. */
          average_speed?: number;
          /** Maximum speed in meters per second. */
          max_speed?: number;
          /** Segment number. */
          lap_index?: number;
          [key: string]: unknown;
        }>;
        /** List of best results from the event. */
        best_efforts?: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Road segment score name. */
          name?: string;
          /** Associated activity objects. */
          activity?: Record<string, unknown>;
          /** Associated athlete objects. */
          athlete?: Record<string, unknown>;
          /** The total time taken, in seconds. */
          elapsed_time?: number;
          /** Movement time, in seconds. */
          moving_time?: number;
          /** Start time. */
          start_date?: string | null;
          /** Local start time. */
          start_date_local?: string | null;
          /** Distance in meters. */
          distance?: number;
          /** Average cadence. */
          average_cadence?: number | null;
          /** average power. */
          average_watts?: number | null;
          /** KOM ranking. */
          kom_rank?: number | null;
          /** Personal record ranking. */
          pr_rank?: number | null;
          /** Whether to hide. */
          hidden?: boolean;
          /** Strava segment summary. */
          segment?: {
            /** Strava resource ID. */
            id: number | string;
            /** Resource status. */
            resource_state?: number;
            /** Road segment name. */
            name: string;
            /** Applicable activity types. */
            activity_type?: string | null;
            /** The length of the road segment in meters. */
            distance?: number;
            /** average slope. */
            average_grade?: number;
            /** maximum slope. */
            maximum_grade?: number;
            /** Maximum altitude, in meters. */
            elevation_high?: number;
            /** Minimum altitude, in meters. */
            elevation_low?: number;
            /**
             * Starting point coordinates.
             * @minItems 2
             * @maxItems 2
             */
            start_latlng?: Array<number> | null;
            /**
             * End point coordinates.
             * @minItems 2
             * @maxItems 2
             */
            end_latlng?: Array<number> | null;
            /** Climb classification. */
            climb_category?: number | null;
            /** City. */
            city?: string | null;
            /** state or region. */
            state?: string | null;
            /** nation. */
            country?: string | null;
            /** Whether it is a private section. */
            private?: boolean;
            /** Whether the current user has favorited this road segment. */
            starred?: boolean;
            /** Whether it is marked as risky. */
            hazardous?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Photo abstract. */
        photos?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get streaming data for the specified Strava activity. */
    "strava.get_activity_streams": {
      input: {
        /** Activity ID. */
        activityId: number | string;
        /**
         * A list of stream data types that need to be returned, such as time, distance, and heartrate.
         * @minItems 1
         */
        keys: Array<string>;
        /** Whether to return keyed objects by stream type field. */
        keyByType?: boolean;
      };
      output: {
        /** A collection of streaming data returned by Strava. */
        streams: Array<{
          /** Stream data type. */
          type: string;
          /** Streaming data content. */
          data: Array<unknown>;
          /** Streaming data sequence type. */
          series_type?: string | null;
          /** Number of raw data points. */
          original_size?: number | null;
          /** Streaming data resolution. */
          resolution?: string | null;
          [key: string]: unknown;
        }> | Record<string, {
            /** Stream data type. */
            type: string;
            /** Streaming data content. */
            data: Array<unknown>;
            /** Streaming data sequence type. */
            series_type?: string | null;
            /** Number of raw data points. */
            original_size?: number | null;
            /** Streaming data resolution. */
            resolution?: string | null;
            [key: string]: unknown;
          }>;
      };
    };
    /** Gets the training partition results for the specified Strava activity. */
    "strava.get_activity_zones": {
      input: {
        /** Activity ID. */
        activityId: number | string;
      };
      output: {
        /** List of partition information. */
        zones: Array<Record<string, unknown>>;
      };
    };
    /** Get a summary of statistics for a specified Strava athlete. */
    "strava.get_athlete_stats": {
      input: {
        /** Athlete ID. */
        athleteId: number | string;
      };
      output: {
        /** The longest riding distance, in meters. */
        biggest_ride_distance?: number;
        /** Maximum single climb, in meters. */
        biggest_climb_elevation_gain?: number;
        /** Aggregated metrics for a set of activities. */
        recent_ride_totals?: {
          /** Number of activities. */
          count?: number;
          /** Cumulative distance in meters. */
          distance?: number;
          /** Cumulative movement time, unit is seconds. */
          moving_time?: number;
          /** The total cumulative elapsed time, in seconds. */
          elapsed_time?: number;
          /** Cumulative climb, in meters. */
          elevation_gain?: number;
          /** Cumulative number of achievements. */
          achievement_count?: number;
          [key: string]: unknown;
        };
        /** Aggregated metrics for a set of activities. */
        recent_run_totals?: {
          /** Number of activities. */
          count?: number;
          /** Cumulative distance in meters. */
          distance?: number;
          /** Cumulative movement time, unit is seconds. */
          moving_time?: number;
          /** The total cumulative elapsed time, in seconds. */
          elapsed_time?: number;
          /** Cumulative climb, in meters. */
          elevation_gain?: number;
          /** Cumulative number of achievements. */
          achievement_count?: number;
          [key: string]: unknown;
        };
        /** Aggregated metrics for a set of activities. */
        recent_swim_totals?: {
          /** Number of activities. */
          count?: number;
          /** Cumulative distance in meters. */
          distance?: number;
          /** Cumulative movement time, unit is seconds. */
          moving_time?: number;
          /** The total cumulative elapsed time, in seconds. */
          elapsed_time?: number;
          /** Cumulative climb, in meters. */
          elevation_gain?: number;
          /** Cumulative number of achievements. */
          achievement_count?: number;
          [key: string]: unknown;
        };
        /** Aggregated metrics for a set of activities. */
        ytd_ride_totals?: {
          /** Number of activities. */
          count?: number;
          /** Cumulative distance in meters. */
          distance?: number;
          /** Cumulative movement time, unit is seconds. */
          moving_time?: number;
          /** The total cumulative elapsed time, in seconds. */
          elapsed_time?: number;
          /** Cumulative climb, in meters. */
          elevation_gain?: number;
          /** Cumulative number of achievements. */
          achievement_count?: number;
          [key: string]: unknown;
        };
        /** Aggregated metrics for a set of activities. */
        ytd_run_totals?: {
          /** Number of activities. */
          count?: number;
          /** Cumulative distance in meters. */
          distance?: number;
          /** Cumulative movement time, unit is seconds. */
          moving_time?: number;
          /** The total cumulative elapsed time, in seconds. */
          elapsed_time?: number;
          /** Cumulative climb, in meters. */
          elevation_gain?: number;
          /** Cumulative number of achievements. */
          achievement_count?: number;
          [key: string]: unknown;
        };
        /** Aggregated metrics for a set of activities. */
        ytd_swim_totals?: {
          /** Number of activities. */
          count?: number;
          /** Cumulative distance in meters. */
          distance?: number;
          /** Cumulative movement time, unit is seconds. */
          moving_time?: number;
          /** The total cumulative elapsed time, in seconds. */
          elapsed_time?: number;
          /** Cumulative climb, in meters. */
          elevation_gain?: number;
          /** Cumulative number of achievements. */
          achievement_count?: number;
          [key: string]: unknown;
        };
        /** Aggregated metrics for a set of activities. */
        all_ride_totals?: {
          /** Number of activities. */
          count?: number;
          /** Cumulative distance in meters. */
          distance?: number;
          /** Cumulative movement time, unit is seconds. */
          moving_time?: number;
          /** The total cumulative elapsed time, in seconds. */
          elapsed_time?: number;
          /** Cumulative climb, in meters. */
          elevation_gain?: number;
          /** Cumulative number of achievements. */
          achievement_count?: number;
          [key: string]: unknown;
        };
        /** Aggregated metrics for a set of activities. */
        all_run_totals?: {
          /** Number of activities. */
          count?: number;
          /** Cumulative distance in meters. */
          distance?: number;
          /** Cumulative movement time, unit is seconds. */
          moving_time?: number;
          /** The total cumulative elapsed time, in seconds. */
          elapsed_time?: number;
          /** Cumulative climb, in meters. */
          elevation_gain?: number;
          /** Cumulative number of achievements. */
          achievement_count?: number;
          [key: string]: unknown;
        };
        /** Aggregated metrics for a set of activities. */
        all_swim_totals?: {
          /** Number of activities. */
          count?: number;
          /** Cumulative distance in meters. */
          distance?: number;
          /** Cumulative movement time, unit is seconds. */
          moving_time?: number;
          /** The total cumulative elapsed time, in seconds. */
          elapsed_time?: number;
          /** Cumulative climb, in meters. */
          elevation_gain?: number;
          /** Cumulative number of achievements. */
          achievement_count?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get currently licensed Strava athlete profiles. */
    "strava.get_authenticated_athlete": {
      input: Record<string, never>;
      output: {
        /** Strava resource ID. */
        id: number | string;
        /** username. */
        username?: string | null;
        /** Resource status. */
        resource_state?: number;
        /** name. */
        firstname?: string | null;
        /** Surname. */
        lastname?: string | null;
        /** Profile. */
        bio?: string | null;
        /** City. */
        city?: string | null;
        /** state or region. */
        state?: string | null;
        /** nation. */
        country?: string | null;
        /** gender. */
        sex?: string | null;
        /** Whether you are a subscriber. */
        premium?: boolean;
        /** Are you a Summit user? */
        summit?: boolean;
        /** Account creation time. */
        created_at?: string | null;
        /** Data update time. */
        updated_at?: string | null;
        /** Badge type ID. */
        badge_type_id?: number | null;
        /** Medium avatar URL. */
        profile_medium?: string | null;
        /** Large avatar URL. */
        profile?: string | null;
        /** Number of followers. */
        follower_count?: number | null;
        /** Number of friends. */
        friend_count?: number | null;
        /** Pay attention to each other's numbers. */
        mutual_friend_count?: number | null;
        /** Type of athlete. */
        athlete_type?: number | null;
        /** Date format preference. */
        date_preference?: string | null;
        /** Unit preferences. */
        measurement_preference?: string | null;
        /** FTP value. */
        ftp?: number | null;
        /** Weight in kilograms. */
        weight?: number | null;
        /** List of clubs to which you belong. */
        clubs?: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Club name. */
          name: string;
          /** Club avatar URL. */
          profile_medium?: string | null;
          /** Club cover image URL. */
          cover_photo?: string | null;
          /** Club small size cover image URL. */
          cover_photo_small?: string | null;
          /** Old version of the sport type. */
          sport_type?: string | null;
          /** The types of activities that count towards the leaderboard. */
          activity_types?: Array<string>;
          /** City. */
          city?: string | null;
          /** state or region. */
          state?: string | null;
          /** nation. */
          country?: string | null;
          /** Whether it is a private club. */
          private?: boolean;
          /** Number of members. */
          member_count?: number;
          /** Is it a select club. */
          featured?: boolean;
          /** Whether it has been certified. */
          verified?: boolean;
          /** Club short link. */
          url?: string | null;
          [key: string]: unknown;
        }>;
        /** Bike List. */
        bikes?: Array<{
          /** Equipment ID. */
          id: string;
          /** Whether it is the main equipment. */
          primary?: boolean;
          /** Equipment name. */
          name?: string;
          /** Resource status. */
          resource_state?: number;
          /** The accumulated mileage of the equipment, in meters. */
          distance?: number;
          [key: string]: unknown;
        }>;
        /** Running shoe list. */
        shoes?: Array<{
          /** Equipment ID. */
          id: string;
          /** Whether it is the main equipment. */
          primary?: boolean;
          /** Equipment name. */
          name?: string;
          /** Resource status. */
          resource_state?: number;
          /** The accumulated mileage of the equipment, in meters. */
          distance?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get Strava club details by ID. */
    "strava.get_club": {
      input: {
        /** Club ID. */
        clubId: number | string;
      };
      output: {
        /** Strava resource ID. */
        id: number | string;
        /** Resource status. */
        resource_state?: number;
        /** Club name. */
        name: string;
        /** Club avatar URL. */
        profile_medium?: string | null;
        /** Club cover image URL. */
        cover_photo?: string | null;
        /** Club small size cover image URL. */
        cover_photo_small?: string | null;
        /** Old version of the sport type. */
        sport_type?: string | null;
        /** The types of activities that count towards the leaderboard. */
        activity_types?: Array<string>;
        /** City. */
        city?: string | null;
        /** state or region. */
        state?: string | null;
        /** nation. */
        country?: string | null;
        /** Whether it is a private club. */
        private?: boolean;
        /** Number of members. */
        member_count?: number;
        /** Is it a select club. */
        featured?: boolean;
        /** Whether it has been certified. */
        verified?: boolean;
        /** Club short link. */
        url?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get Strava gear details by ID. */
    "strava.get_equipment": {
      input: {
        /**
         * Equipment ID.
         * @minLength 1
         */
        gearId: string;
      };
      output: {
        /** Equipment ID. */
        id: string;
        /** Whether it is the main equipment. */
        primary?: boolean;
        /** Equipment name. */
        name: string;
        /** Resource status. */
        resource_state?: number;
        /** Cumulative distance in meters. */
        distance?: number;
        /** Brand name. */
        brand_name?: string | null;
        /** Model name. */
        model_name?: string | null;
        /** Frame type. */
        frame_type?: number | null;
        /** Equipment instructions. */
        description?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get Strava route details by ID. */
    "strava.get_route": {
      input: {
        /** Route ID. */
        routeId: number | string;
      };
      output: {
        /** Strava resource ID. */
        id: number | string;
        /** Route name. */
        name: string;
        /** Route description. */
        description?: string | null;
        /** Route distance in meters. */
        distance?: number;
        /** Route climb in meters. */
        elevation_gain?: number;
        /** Route type. */
        type?: number | null;
        /** Route subtype. */
        sub_type?: number | null;
        /** Whether it is a private route. */
        private?: boolean;
        /** Whether the current user has favorited this route. */
        starred?: boolean;
        /** Estimated moving time. */
        estimated_moving_time?: number | null;
        /** The segments included in the route. */
        segments?: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Road segment name. */
          name: string;
          /** Applicable activity types. */
          activity_type?: string | null;
          /** The length of the road segment in meters. */
          distance?: number;
          /** average slope. */
          average_grade?: number;
          /** maximum slope. */
          maximum_grade?: number;
          /** Maximum altitude, in meters. */
          elevation_high?: number;
          /** Minimum altitude, in meters. */
          elevation_low?: number;
          /**
           * Starting point coordinates.
           * @minItems 2
           * @maxItems 2
           */
          start_latlng?: Array<number> | null;
          /**
           * End point coordinates.
           * @minItems 2
           * @maxItems 2
           */
          end_latlng?: Array<number> | null;
          /** Climb classification. */
          climb_category?: number | null;
          /** City. */
          city?: string | null;
          /** state or region. */
          state?: string | null;
          /** nation. */
          country?: string | null;
          /** Whether it is a private section. */
          private?: boolean;
          /** Whether the current user has favorited this road segment. */
          starred?: boolean;
          /** Whether it is marked as risky. */
          hazardous?: boolean;
          [key: string]: unknown;
        }>;
        /** Track map object. */
        map?: {
          /** Map object ID. */
          id?: string;
          /** Complete trajectory polyline. */
          polyline?: string | null;
          /** Summary trajectory polyline. */
          summary_polyline?: string | null;
          /** Resource status. */
          resource_state?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get flow data for a specified Strava route. */
    "strava.get_route_streams": {
      input: {
        /** Route ID. */
        routeId: number | string;
      };
      output: {
        /** A collection of streaming data returned by Strava. */
        streams: Array<{
          /** Stream data type. */
          type: string;
          /** Streaming data content. */
          data: Array<unknown>;
          /** Streaming data sequence type. */
          series_type?: string | null;
          /** Number of raw data points. */
          original_size?: number | null;
          /** Streaming data resolution. */
          resolution?: string | null;
          [key: string]: unknown;
        }> | Record<string, {
            /** Stream data type. */
            type: string;
            /** Streaming data content. */
            data: Array<unknown>;
            /** Streaming data sequence type. */
            series_type?: string | null;
            /** Number of raw data points. */
            original_size?: number | null;
            /** Streaming data resolution. */
            resolution?: string | null;
            [key: string]: unknown;
          }>;
      };
    };
    /** Get Strava segment details by ID. */
    "strava.get_segment": {
      input: {
        /** Road segment ID. */
        segmentId: number | string;
      };
      output: {
        /** Strava resource ID. */
        id: number | string;
        /** Resource status. */
        resource_state?: number;
        /** Road segment name. */
        name: string;
        /** Applicable activity types. */
        activity_type?: string | null;
        /** The length of the road segment in meters. */
        distance?: number;
        /** average slope. */
        average_grade?: number;
        /** maximum slope. */
        maximum_grade?: number;
        /** Maximum altitude, in meters. */
        elevation_high?: number;
        /** Minimum altitude, in meters. */
        elevation_low?: number;
        /**
         * Starting point coordinates.
         * @minItems 2
         * @maxItems 2
         */
        start_latlng?: Array<number> | null;
        /**
         * End point coordinates.
         * @minItems 2
         * @maxItems 2
         */
        end_latlng?: Array<number> | null;
        /** Climb classification. */
        climb_category?: number | null;
        /** City. */
        city?: string | null;
        /** state or region. */
        state?: string | null;
        /** nation. */
        country?: string | null;
        /** Whether it is a private section. */
        private?: boolean;
        /** Whether the current user has favorited this road segment. */
        starred?: boolean;
        /** Whether it is marked as risky. */
        hazardous?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get Strava segment performance details by ID. */
    "strava.get_segment_effort": {
      input: {
        /** Road segment score ID. */
        segmentEffortId: number | string;
      };
      output: {
        /** Strava resource ID. */
        id: number | string;
        /** Resource status. */
        resource_state?: number;
        /** Road segment score name. */
        name?: string;
        /** Associated activity objects. */
        activity?: Record<string, unknown>;
        /** Associated athlete objects. */
        athlete?: Record<string, unknown>;
        /** The total time taken, in seconds. */
        elapsed_time?: number;
        /** Movement time, in seconds. */
        moving_time?: number;
        /** Start time. */
        start_date?: string | null;
        /** Local start time. */
        start_date_local?: string | null;
        /** Distance in meters. */
        distance?: number;
        /** Average cadence. */
        average_cadence?: number | null;
        /** average power. */
        average_watts?: number | null;
        /** KOM ranking. */
        kom_rank?: number | null;
        /** Personal record ranking. */
        pr_rank?: number | null;
        /** Whether to hide. */
        hidden?: boolean;
        /** Strava segment summary. */
        segment?: {
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Road segment name. */
          name: string;
          /** Applicable activity types. */
          activity_type?: string | null;
          /** The length of the road segment in meters. */
          distance?: number;
          /** average slope. */
          average_grade?: number;
          /** maximum slope. */
          maximum_grade?: number;
          /** Maximum altitude, in meters. */
          elevation_high?: number;
          /** Minimum altitude, in meters. */
          elevation_low?: number;
          /**
           * Starting point coordinates.
           * @minItems 2
           * @maxItems 2
           */
          start_latlng?: Array<number> | null;
          /**
           * End point coordinates.
           * @minItems 2
           * @maxItems 2
           */
          end_latlng?: Array<number> | null;
          /** Climb classification. */
          climb_category?: number | null;
          /** City. */
          city?: string | null;
          /** state or region. */
          state?: string | null;
          /** nation. */
          country?: string | null;
          /** Whether it is a private section. */
          private?: boolean;
          /** Whether the current user has favorited this road segment. */
          starred?: boolean;
          /** Whether it is marked as risky. */
          hazardous?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get streaming data for a specified Strava segment score. */
    "strava.get_segment_effort_streams": {
      input: {
        /** Road segment score ID. */
        segmentEffortId: number | string;
        /**
         * A list of stream data types that need to be returned, such as time, distance, velocity_smooth.
         * @minItems 1
         */
        keys: Array<string>;
        /** Whether to return keyed objects by stream type field. */
        keyByType?: boolean;
      };
      output: {
        /** A collection of streaming data returned by Strava. */
        streams: Array<{
          /** Stream data type. */
          type: string;
          /** Streaming data content. */
          data: Array<unknown>;
          /** Streaming data sequence type. */
          series_type?: string | null;
          /** Number of raw data points. */
          original_size?: number | null;
          /** Streaming data resolution. */
          resolution?: string | null;
          [key: string]: unknown;
        }> | Record<string, {
            /** Stream data type. */
            type: string;
            /** Streaming data content. */
            data: Array<unknown>;
            /** Streaming data sequence type. */
            series_type?: string | null;
            /** Number of raw data points. */
            original_size?: number | null;
            /** Streaming data resolution. */
            resolution?: string | null;
            [key: string]: unknown;
          }>;
      };
    };
    /** Get flow data for a specified Strava segment. */
    "strava.get_segment_streams": {
      input: {
        /** Road segment ID. */
        segmentId: number | string;
        /**
         * A list of stream data types that need to be returned, such as time, distance, altitude.
         * @minItems 1
         */
        keys: Array<string>;
        /** Whether to return keyed objects by stream type field. */
        keyByType?: boolean;
      };
      output: {
        /** A collection of streaming data returned by Strava. */
        streams: Array<{
          /** Stream data type. */
          type: string;
          /** Streaming data content. */
          data: Array<unknown>;
          /** Streaming data sequence type. */
          series_type?: string | null;
          /** Number of raw data points. */
          original_size?: number | null;
          /** Streaming data resolution. */
          resolution?: string | null;
          [key: string]: unknown;
        }> | Record<string, {
            /** Stream data type. */
            type: string;
            /** Streaming data content. */
            data: Array<unknown>;
            /** Streaming data sequence type. */
            series_type?: string | null;
            /** Number of raw data points. */
            original_size?: number | null;
            /** Streaming data resolution. */
            resolution?: string | null;
            [key: string]: unknown;
          }>;
      };
    };
    /** Query the status of Strava activity upload tasks. */
    "strava.get_upload": {
      input: {
        /** Upload task ID. */
        uploadId: number | string;
      };
      output: {
        /** Strava resource ID. */
        id?: number | string;
        /** Upload task ID as a string. */
        id_str?: string | null;
        /** External upload ID. */
        external_id?: string | null;
        /** Error message when upload fails. */
        error?: string | null;
        /** Upload status. */
        status?: string | null;
        /** Generated activity ID. */
        activity_id?: number | string | null;
        [key: string]: unknown;
      };
    };
    /** Get the current Strava athlete's training partition. */
    "strava.get_zones": {
      input: Record<string, never>;
      output: {
        /** List of partition information. */
        zones: Array<Record<string, unknown>>;
      };
    };
    /** Lists comments for the specified Strava activity. */
    "strava.list_activity_comments": {
      input: {
        /** Activity ID. */
        activityId: number | string;
        /**
         * Pagination page number, starting from 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The old paging parameter returns the number per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /**
         * Recommended number of returns per page.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
        /** Cursor for the last record on the previous page. */
        afterCursor?: string;
      };
      output: {
        /** Comments list. */
        comments: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Comment content. */
          text?: string | null;
          /** The activity ID to which it belongs. */
          activity_id?: number | string | null;
          /** Strava Athlete Summary. */
          athlete?: {
            /** Strava resource ID. */
            id: number | string;
            /** username. */
            username?: string | null;
            /** Resource status. */
            resource_state?: number;
            /** name. */
            firstname?: string | null;
            /** Surname. */
            lastname?: string | null;
            /** City. */
            city?: string | null;
            /** state or region. */
            state?: string | null;
            /** nation. */
            country?: string | null;
            /** gender. */
            sex?: string | null;
            /** Medium avatar URL. */
            profile_medium?: string | null;
            /** Large avatar URL. */
            profile?: string | null;
            [key: string]: unknown;
          };
          /** Comment creation time. */
          created_at?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List athletes who have liked the specified Strava activity. */
    "strava.list_activity_kudoers": {
      input: {
        /** Activity ID. */
        activityId: number | string;
        /**
         * Pagination page number, starting from 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Return quantity per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** List of like users. */
        athletes: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** username. */
          username?: string | null;
          /** Resource status. */
          resource_state?: number;
          /** name. */
          firstname?: string | null;
          /** Surname. */
          lastname?: string | null;
          /** City. */
          city?: string | null;
          /** state or region. */
          state?: string | null;
          /** nation. */
          country?: string | null;
          /** gender. */
          sex?: string | null;
          /** Medium avatar URL. */
          profile_medium?: string | null;
          /** Large avatar URL. */
          profile?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Lists the segments for a given Strava activity. */
    "strava.list_activity_laps": {
      input: {
        /** Activity ID. */
        activityId: number | string;
      };
      output: {
        /** Circle list. */
        laps: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Circle name. */
          name?: string;
          /** Circle distance in meters. */
          distance?: number;
          /** The total time taken, in seconds. */
          elapsed_time?: number;
          /** Movement time, in seconds. */
          moving_time?: number;
          /** Start time. */
          start_date?: string | null;
          /** Local start time. */
          start_date_local?: string | null;
          /** Circle climb, in meters. */
          total_elevation_gain?: number;
          /** Average speed in meters per second. */
          average_speed?: number;
          /** Maximum speed in meters per second. */
          max_speed?: number;
          /** Segment number. */
          lap_index?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Paginated list of current Strava athletes' activities. */
    "strava.list_athlete_activities": {
      input: {
        /** Only activities that started before this time are returned. */
        before?: number;
        /** Only activities that started after this time are returned. */
        after?: number;
        /**
         * Pagination page number, starting from 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of activities returned per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** Activity list. */
        activities: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** External activity ID. */
          external_id?: string | null;
          /** Upload task ID. */
          upload_id?: number | string | null;
          /** Associated athlete objects. */
          athlete?: Record<string, unknown>;
          /** Activity name. */
          name: string;
          /** Activity distance, unit is meters. */
          distance: number;
          /** Movement time in seconds. */
          moving_time: number;
          /** The total time taken, in seconds. */
          elapsed_time: number;
          /** Cumulative climb, in meters. */
          total_elevation_gain: number;
          /** Legacy activity type. */
          type?: string;
          /** Sports type. */
          sport_type: string;
          /** UTC start time. */
          start_date: string;
          /** Local start time. */
          start_date_local: string;
          /** Event time zone. */
          timezone: string;
          /** Time zone offset in seconds. */
          utc_offset?: number;
          /** Average speed in meters per second. */
          average_speed?: number;
          /** Maximum speed in meters per second. */
          max_speed?: number;
          /** Average cadence. */
          average_cadence?: number | null;
          /** average power. */
          average_watts?: number | null;
          /** Maximum power. */
          max_watts?: number | null;
          /** Average heart rate. */
          average_heartrate?: number | null;
          /** Maximum heart rate. */
          max_heartrate?: number | null;
          /** Total work, unit is kilojoules. */
          kilojoules?: number | null;
          /** Whether it is a riding platform or trainer activity. */
          trainer?: boolean;
          /** Whether it is a commuting activity. */
          commute?: boolean;
          /** Whether it is created manually. */
          manual?: boolean;
          /** Whether it is a private event. */
          private?: boolean;
          /** Whether it is marked. */
          flagged?: boolean;
          /** Equipment ID. */
          gear_id?: string | null;
          /** Track map object. */
          map?: {
            /** Map object ID. */
            id?: string;
            /** Complete trajectory polyline. */
            polyline?: string | null;
            /** Summary trajectory polyline. */
            summary_polyline?: string | null;
            /** Resource status. */
            resource_state?: number;
            [key: string]: unknown;
          };
          /** Activity Description. */
          description?: string | null;
          /** Burn calories. */
          calories?: number | null;
          /** Whether the current user has liked it. */
          has_kudoed?: boolean;
          /** Whether to hide it on the homepage. */
          hide_from_home?: boolean;
          /** Strava gear summary. */
          gear?: {
            /** Equipment ID. */
            id: string;
            /** Whether it is the main equipment. */
            primary?: boolean;
            /** Equipment name. */
            name?: string;
            /** Resource status. */
            resource_state?: number;
            /** The accumulated mileage of the equipment, in meters. */
            distance?: number;
            [key: string]: unknown;
          };
          /** List of segment results included in the activity. */
          segment_efforts?: Array<{
            /** Strava resource ID. */
            id: number | string;
            /** Resource status. */
            resource_state?: number;
            /** Road segment score name. */
            name?: string;
            /** Associated activity objects. */
            activity?: Record<string, unknown>;
            /** Associated athlete objects. */
            athlete?: Record<string, unknown>;
            /** The total time taken, in seconds. */
            elapsed_time?: number;
            /** Movement time, in seconds. */
            moving_time?: number;
            /** Start time. */
            start_date?: string | null;
            /** Local start time. */
            start_date_local?: string | null;
            /** Distance in meters. */
            distance?: number;
            /** Average cadence. */
            average_cadence?: number | null;
            /** average power. */
            average_watts?: number | null;
            /** KOM ranking. */
            kom_rank?: number | null;
            /** Personal record ranking. */
            pr_rank?: number | null;
            /** Whether to hide. */
            hidden?: boolean;
            /** Strava segment summary. */
            segment?: {
              /** Strava resource ID. */
              id: number | string;
              /** Resource status. */
              resource_state?: number;
              /** Road segment name. */
              name: string;
              /** Applicable activity types. */
              activity_type?: string | null;
              /** The length of the road segment in meters. */
              distance?: number;
              /** average slope. */
              average_grade?: number;
              /** maximum slope. */
              maximum_grade?: number;
              /** Maximum altitude, in meters. */
              elevation_high?: number;
              /** Minimum altitude, in meters. */
              elevation_low?: number;
              /**
               * Starting point coordinates.
               * @minItems 2
               * @maxItems 2
               */
              start_latlng?: Array<number> | null;
              /**
               * End point coordinates.
               * @minItems 2
               * @maxItems 2
               */
              end_latlng?: Array<number> | null;
              /** Climb classification. */
              climb_category?: number | null;
              /** City. */
              city?: string | null;
              /** state or region. */
              state?: string | null;
              /** nation. */
              country?: string | null;
              /** Whether it is a private section. */
              private?: boolean;
              /** Whether the current user has favorited this road segment. */
              starred?: boolean;
              /** Whether it is marked as risky. */
              hazardous?: boolean;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Activity circle list. */
          laps?: Array<{
            /** Strava resource ID. */
            id: number | string;
            /** Resource status. */
            resource_state?: number;
            /** Circle name. */
            name?: string;
            /** Circle distance in meters. */
            distance?: number;
            /** The total time taken, in seconds. */
            elapsed_time?: number;
            /** Movement time, in seconds. */
            moving_time?: number;
            /** Start time. */
            start_date?: string | null;
            /** Local start time. */
            start_date_local?: string | null;
            /** Circle climb, in meters. */
            total_elevation_gain?: number;
            /** Average speed in meters per second. */
            average_speed?: number;
            /** Maximum speed in meters per second. */
            max_speed?: number;
            /** Segment number. */
            lap_index?: number;
            [key: string]: unknown;
          }>;
          /** List of best results from the event. */
          best_efforts?: Array<{
            /** Strava resource ID. */
            id: number | string;
            /** Resource status. */
            resource_state?: number;
            /** Road segment score name. */
            name?: string;
            /** Associated activity objects. */
            activity?: Record<string, unknown>;
            /** Associated athlete objects. */
            athlete?: Record<string, unknown>;
            /** The total time taken, in seconds. */
            elapsed_time?: number;
            /** Movement time, in seconds. */
            moving_time?: number;
            /** Start time. */
            start_date?: string | null;
            /** Local start time. */
            start_date_local?: string | null;
            /** Distance in meters. */
            distance?: number;
            /** Average cadence. */
            average_cadence?: number | null;
            /** average power. */
            average_watts?: number | null;
            /** KOM ranking. */
            kom_rank?: number | null;
            /** Personal record ranking. */
            pr_rank?: number | null;
            /** Whether to hide. */
            hidden?: boolean;
            /** Strava segment summary. */
            segment?: {
              /** Strava resource ID. */
              id: number | string;
              /** Resource status. */
              resource_state?: number;
              /** Road segment name. */
              name: string;
              /** Applicable activity types. */
              activity_type?: string | null;
              /** The length of the road segment in meters. */
              distance?: number;
              /** average slope. */
              average_grade?: number;
              /** maximum slope. */
              maximum_grade?: number;
              /** Maximum altitude, in meters. */
              elevation_high?: number;
              /** Minimum altitude, in meters. */
              elevation_low?: number;
              /**
               * Starting point coordinates.
               * @minItems 2
               * @maxItems 2
               */
              start_latlng?: Array<number> | null;
              /**
               * End point coordinates.
               * @minItems 2
               * @maxItems 2
               */
              end_latlng?: Array<number> | null;
              /** Climb classification. */
              climb_category?: number | null;
              /** City. */
              city?: string | null;
              /** state or region. */
              state?: string | null;
              /** nation. */
              country?: string | null;
              /** Whether it is a private section. */
              private?: boolean;
              /** Whether the current user has favorited this road segment. */
              starred?: boolean;
              /** Whether it is marked as risky. */
              hazardous?: boolean;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Photo abstract. */
          photos?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Lists the clubs current Strava athletes belong to. */
    "strava.list_athlete_clubs": {
      input: {
        /**
         * Pagination page number, starting from 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Return quantity per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** Club List. */
        clubs: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Club name. */
          name: string;
          /** Club avatar URL. */
          profile_medium?: string | null;
          /** Club cover image URL. */
          cover_photo?: string | null;
          /** Club small size cover image URL. */
          cover_photo_small?: string | null;
          /** Old version of the sport type. */
          sport_type?: string | null;
          /** The types of activities that count towards the leaderboard. */
          activity_types?: Array<string>;
          /** City. */
          city?: string | null;
          /** state or region. */
          state?: string | null;
          /** nation. */
          country?: string | null;
          /** Whether it is a private club. */
          private?: boolean;
          /** Number of members. */
          member_count?: number;
          /** Is it a select club. */
          featured?: boolean;
          /** Whether it has been certified. */
          verified?: boolean;
          /** Club short link. */
          url?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Paginated list of routes for a given Strava athlete. */
    "strava.list_athlete_routes": {
      input: {
        /** Athlete ID. */
        athleteId: number | string;
        /**
         * Pagination page number, starting from 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Return quantity per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** Route list. */
        routes: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Route name. */
          name: string;
          /** Route description. */
          description?: string | null;
          /** Route distance in meters. */
          distance?: number;
          /** Route climb in meters. */
          elevation_gain?: number;
          /** Route type. */
          type?: number | null;
          /** Route subtype. */
          sub_type?: number | null;
          /** Whether it is a private route. */
          private?: boolean;
          /** Whether the current user has favorited this route. */
          starred?: boolean;
          /** Estimated moving time. */
          estimated_moving_time?: number | null;
          /** The segments included in the route. */
          segments?: Array<{
            /** Strava resource ID. */
            id: number | string;
            /** Resource status. */
            resource_state?: number;
            /** Road segment name. */
            name: string;
            /** Applicable activity types. */
            activity_type?: string | null;
            /** The length of the road segment in meters. */
            distance?: number;
            /** average slope. */
            average_grade?: number;
            /** maximum slope. */
            maximum_grade?: number;
            /** Maximum altitude, in meters. */
            elevation_high?: number;
            /** Minimum altitude, in meters. */
            elevation_low?: number;
            /**
             * Starting point coordinates.
             * @minItems 2
             * @maxItems 2
             */
            start_latlng?: Array<number> | null;
            /**
             * End point coordinates.
             * @minItems 2
             * @maxItems 2
             */
            end_latlng?: Array<number> | null;
            /** Climb classification. */
            climb_category?: number | null;
            /** City. */
            city?: string | null;
            /** state or region. */
            state?: string | null;
            /** nation. */
            country?: string | null;
            /** Whether it is a private section. */
            private?: boolean;
            /** Whether the current user has favorited this road segment. */
            starred?: boolean;
            /** Whether it is marked as risky. */
            hazardous?: boolean;
            [key: string]: unknown;
          }>;
          /** Track map object. */
          map?: {
            /** Map object ID. */
            id?: string;
            /** Complete trajectory polyline. */
            polyline?: string | null;
            /** Summary trajectory polyline. */
            summary_polyline?: string | null;
            /** Resource status. */
            resource_state?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Paginated list of recent activity for a given Strava club. */
    "strava.list_club_activities": {
      input: {
        /** Club ID. */
        clubId: number | string;
        /**
         * Pagination page number, starting from 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Return quantity per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** List of club activities. */
        activities: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** External activity ID. */
          external_id?: string | null;
          /** Upload task ID. */
          upload_id?: number | string | null;
          /** Associated athlete objects. */
          athlete?: Record<string, unknown>;
          /** Activity name. */
          name: string;
          /** Activity distance, unit is meters. */
          distance: number;
          /** Movement time in seconds. */
          moving_time: number;
          /** The total time taken, in seconds. */
          elapsed_time: number;
          /** Cumulative climb, in meters. */
          total_elevation_gain: number;
          /** Legacy activity type. */
          type?: string;
          /** Sports type. */
          sport_type: string;
          /** UTC start time. */
          start_date: string;
          /** Local start time. */
          start_date_local: string;
          /** Event time zone. */
          timezone: string;
          /** Time zone offset in seconds. */
          utc_offset?: number;
          /** Average speed in meters per second. */
          average_speed?: number;
          /** Maximum speed in meters per second. */
          max_speed?: number;
          /** Average cadence. */
          average_cadence?: number | null;
          /** average power. */
          average_watts?: number | null;
          /** Maximum power. */
          max_watts?: number | null;
          /** Average heart rate. */
          average_heartrate?: number | null;
          /** Maximum heart rate. */
          max_heartrate?: number | null;
          /** Total work, unit is kilojoules. */
          kilojoules?: number | null;
          /** Whether it is a riding platform or trainer activity. */
          trainer?: boolean;
          /** Whether it is a commuting activity. */
          commute?: boolean;
          /** Whether it is created manually. */
          manual?: boolean;
          /** Whether it is a private event. */
          private?: boolean;
          /** Whether it is marked. */
          flagged?: boolean;
          /** Equipment ID. */
          gear_id?: string | null;
          /** Track map object. */
          map?: {
            /** Map object ID. */
            id?: string;
            /** Complete trajectory polyline. */
            polyline?: string | null;
            /** Summary trajectory polyline. */
            summary_polyline?: string | null;
            /** Resource status. */
            resource_state?: number;
            [key: string]: unknown;
          };
          /** Activity Description. */
          description?: string | null;
          /** Burn calories. */
          calories?: number | null;
          /** Whether the current user has liked it. */
          has_kudoed?: boolean;
          /** Whether to hide it on the homepage. */
          hide_from_home?: boolean;
          /** Strava gear summary. */
          gear?: {
            /** Equipment ID. */
            id: string;
            /** Whether it is the main equipment. */
            primary?: boolean;
            /** Equipment name. */
            name?: string;
            /** Resource status. */
            resource_state?: number;
            /** The accumulated mileage of the equipment, in meters. */
            distance?: number;
            [key: string]: unknown;
          };
          /** List of segment results included in the activity. */
          segment_efforts?: Array<{
            /** Strava resource ID. */
            id: number | string;
            /** Resource status. */
            resource_state?: number;
            /** Road segment score name. */
            name?: string;
            /** Associated activity objects. */
            activity?: Record<string, unknown>;
            /** Associated athlete objects. */
            athlete?: Record<string, unknown>;
            /** The total time taken, in seconds. */
            elapsed_time?: number;
            /** Movement time, in seconds. */
            moving_time?: number;
            /** Start time. */
            start_date?: string | null;
            /** Local start time. */
            start_date_local?: string | null;
            /** Distance in meters. */
            distance?: number;
            /** Average cadence. */
            average_cadence?: number | null;
            /** average power. */
            average_watts?: number | null;
            /** KOM ranking. */
            kom_rank?: number | null;
            /** Personal record ranking. */
            pr_rank?: number | null;
            /** Whether to hide. */
            hidden?: boolean;
            /** Strava segment summary. */
            segment?: {
              /** Strava resource ID. */
              id: number | string;
              /** Resource status. */
              resource_state?: number;
              /** Road segment name. */
              name: string;
              /** Applicable activity types. */
              activity_type?: string | null;
              /** The length of the road segment in meters. */
              distance?: number;
              /** average slope. */
              average_grade?: number;
              /** maximum slope. */
              maximum_grade?: number;
              /** Maximum altitude, in meters. */
              elevation_high?: number;
              /** Minimum altitude, in meters. */
              elevation_low?: number;
              /**
               * Starting point coordinates.
               * @minItems 2
               * @maxItems 2
               */
              start_latlng?: Array<number> | null;
              /**
               * End point coordinates.
               * @minItems 2
               * @maxItems 2
               */
              end_latlng?: Array<number> | null;
              /** Climb classification. */
              climb_category?: number | null;
              /** City. */
              city?: string | null;
              /** state or region. */
              state?: string | null;
              /** nation. */
              country?: string | null;
              /** Whether it is a private section. */
              private?: boolean;
              /** Whether the current user has favorited this road segment. */
              starred?: boolean;
              /** Whether it is marked as risky. */
              hazardous?: boolean;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Activity circle list. */
          laps?: Array<{
            /** Strava resource ID. */
            id: number | string;
            /** Resource status. */
            resource_state?: number;
            /** Circle name. */
            name?: string;
            /** Circle distance in meters. */
            distance?: number;
            /** The total time taken, in seconds. */
            elapsed_time?: number;
            /** Movement time, in seconds. */
            moving_time?: number;
            /** Start time. */
            start_date?: string | null;
            /** Local start time. */
            start_date_local?: string | null;
            /** Circle climb, in meters. */
            total_elevation_gain?: number;
            /** Average speed in meters per second. */
            average_speed?: number;
            /** Maximum speed in meters per second. */
            max_speed?: number;
            /** Segment number. */
            lap_index?: number;
            [key: string]: unknown;
          }>;
          /** List of best results from the event. */
          best_efforts?: Array<{
            /** Strava resource ID. */
            id: number | string;
            /** Resource status. */
            resource_state?: number;
            /** Road segment score name. */
            name?: string;
            /** Associated activity objects. */
            activity?: Record<string, unknown>;
            /** Associated athlete objects. */
            athlete?: Record<string, unknown>;
            /** The total time taken, in seconds. */
            elapsed_time?: number;
            /** Movement time, in seconds. */
            moving_time?: number;
            /** Start time. */
            start_date?: string | null;
            /** Local start time. */
            start_date_local?: string | null;
            /** Distance in meters. */
            distance?: number;
            /** Average cadence. */
            average_cadence?: number | null;
            /** average power. */
            average_watts?: number | null;
            /** KOM ranking. */
            kom_rank?: number | null;
            /** Personal record ranking. */
            pr_rank?: number | null;
            /** Whether to hide. */
            hidden?: boolean;
            /** Strava segment summary. */
            segment?: {
              /** Strava resource ID. */
              id: number | string;
              /** Resource status. */
              resource_state?: number;
              /** Road segment name. */
              name: string;
              /** Applicable activity types. */
              activity_type?: string | null;
              /** The length of the road segment in meters. */
              distance?: number;
              /** average slope. */
              average_grade?: number;
              /** maximum slope. */
              maximum_grade?: number;
              /** Maximum altitude, in meters. */
              elevation_high?: number;
              /** Minimum altitude, in meters. */
              elevation_low?: number;
              /**
               * Starting point coordinates.
               * @minItems 2
               * @maxItems 2
               */
              start_latlng?: Array<number> | null;
              /**
               * End point coordinates.
               * @minItems 2
               * @maxItems 2
               */
              end_latlng?: Array<number> | null;
              /** Climb classification. */
              climb_category?: number | null;
              /** City. */
              city?: string | null;
              /** state or region. */
              state?: string | null;
              /** nation. */
              country?: string | null;
              /** Whether it is a private section. */
              private?: boolean;
              /** Whether the current user has favorited this road segment. */
              starred?: boolean;
              /** Whether it is marked as risky. */
              hazardous?: boolean;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Photo abstract. */
          photos?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Paginated list of Strava club admins. */
    "strava.list_club_administrators": {
      input: {
        /** Club ID. */
        clubId: number | string;
        /**
         * Pagination page number, starting from 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Return quantity per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** List of club administrators. */
        athletes: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** username. */
          username?: string | null;
          /** Resource status. */
          resource_state?: number;
          /** name. */
          firstname?: string | null;
          /** Surname. */
          lastname?: string | null;
          /** City. */
          city?: string | null;
          /** state or region. */
          state?: string | null;
          /** nation. */
          country?: string | null;
          /** gender. */
          sex?: string | null;
          /** Medium avatar URL. */
          profile_medium?: string | null;
          /** Large avatar URL. */
          profile?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Paginated list of Strava club members. */
    "strava.list_club_members": {
      input: {
        /** Club ID. */
        clubId: number | string;
        /**
         * Pagination page number, starting from 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Return quantity per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** List of club members. */
        athletes: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** username. */
          username?: string | null;
          /** Resource status. */
          resource_state?: number;
          /** name. */
          firstname?: string | null;
          /** Surname. */
          lastname?: string | null;
          /** City. */
          city?: string | null;
          /** state or region. */
          state?: string | null;
          /** nation. */
          country?: string | null;
          /** gender. */
          sex?: string | null;
          /** Medium avatar URL. */
          profile_medium?: string | null;
          /** Large avatar URL. */
          profile?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Strava segment scores by segment ID. */
    "strava.list_segment_efforts": {
      input: {
        /** Road segment ID. */
        segmentId: number | string;
        /**
         * Lower bound on local start time.
         * @minLength 1
         */
        startDateLocal?: string;
        /**
         * Upper bound on local start time.
         * @minLength 1
         */
        endDateLocal?: string;
        /**
         * Pagination page number, starting from 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Return quantity per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** Road segment score list. */
        efforts: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Road segment score name. */
          name?: string;
          /** Associated activity objects. */
          activity?: Record<string, unknown>;
          /** Associated athlete objects. */
          athlete?: Record<string, unknown>;
          /** The total time taken, in seconds. */
          elapsed_time?: number;
          /** Movement time, in seconds. */
          moving_time?: number;
          /** Start time. */
          start_date?: string | null;
          /** Local start time. */
          start_date_local?: string | null;
          /** Distance in meters. */
          distance?: number;
          /** Average cadence. */
          average_cadence?: number | null;
          /** average power. */
          average_watts?: number | null;
          /** KOM ranking. */
          kom_rank?: number | null;
          /** Personal record ranking. */
          pr_rank?: number | null;
          /** Whether to hide. */
          hidden?: boolean;
          /** Strava segment summary. */
          segment?: {
            /** Strava resource ID. */
            id: number | string;
            /** Resource status. */
            resource_state?: number;
            /** Road segment name. */
            name: string;
            /** Applicable activity types. */
            activity_type?: string | null;
            /** The length of the road segment in meters. */
            distance?: number;
            /** average slope. */
            average_grade?: number;
            /** maximum slope. */
            maximum_grade?: number;
            /** Maximum altitude, in meters. */
            elevation_high?: number;
            /** Minimum altitude, in meters. */
            elevation_low?: number;
            /**
             * Starting point coordinates.
             * @minItems 2
             * @maxItems 2
             */
            start_latlng?: Array<number> | null;
            /**
             * End point coordinates.
             * @minItems 2
             * @maxItems 2
             */
            end_latlng?: Array<number> | null;
            /** Climb classification. */
            climb_category?: number | null;
            /** City. */
            city?: string | null;
            /** state or region. */
            state?: string | null;
            /** nation. */
            country?: string | null;
            /** Whether it is a private section. */
            private?: boolean;
            /** Whether the current user has favorited this road segment. */
            starred?: boolean;
            /** Whether it is marked as risky. */
            hazardous?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Paginated list of current Strava athlete collections. */
    "strava.list_starred_segments": {
      input: {
        /**
         * Pagination page number, starting from 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Return quantity per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** List of favorite road segments. */
        segments: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Road segment name. */
          name: string;
          /** Applicable activity types. */
          activity_type?: string | null;
          /** The length of the road segment in meters. */
          distance?: number;
          /** average slope. */
          average_grade?: number;
          /** maximum slope. */
          maximum_grade?: number;
          /** Maximum altitude, in meters. */
          elevation_high?: number;
          /** Minimum altitude, in meters. */
          elevation_low?: number;
          /**
           * Starting point coordinates.
           * @minItems 2
           * @maxItems 2
           */
          start_latlng?: Array<number> | null;
          /**
           * End point coordinates.
           * @minItems 2
           * @maxItems 2
           */
          end_latlng?: Array<number> | null;
          /** Climb classification. */
          climb_category?: number | null;
          /** City. */
          city?: string | null;
          /** state or region. */
          state?: string | null;
          /** nation. */
          country?: string | null;
          /** Whether it is a private section. */
          private?: boolean;
          /** Whether the current user has favorited this road segment. */
          starred?: boolean;
          /** Whether it is marked as risky. */
          hazardous?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Favorite or unfavorite a specific Strava segment. */
    "strava.star_segment": {
      input: {
        /** Road segment ID. */
        segmentId: number | string;
        /** Whether to bookmark this section. */
        starred: boolean;
      };
      output: {
        /** Strava resource ID. */
        id: number | string;
        /** Resource status. */
        resource_state?: number;
        /** Road segment name. */
        name: string;
        /** Applicable activity types. */
        activity_type?: string | null;
        /** The length of the road segment in meters. */
        distance?: number;
        /** average slope. */
        average_grade?: number;
        /** maximum slope. */
        maximum_grade?: number;
        /** Maximum altitude, in meters. */
        elevation_high?: number;
        /** Minimum altitude, in meters. */
        elevation_low?: number;
        /**
         * Starting point coordinates.
         * @minItems 2
         * @maxItems 2
         */
        start_latlng?: Array<number> | null;
        /**
         * End point coordinates.
         * @minItems 2
         * @maxItems 2
         */
        end_latlng?: Array<number> | null;
        /** Climb classification. */
        climb_category?: number | null;
        /** City. */
        city?: string | null;
        /** state or region. */
        state?: string | null;
        /** nation. */
        country?: string | null;
        /** Whether it is a private section. */
        private?: boolean;
        /** Whether the current user has favorited this road segment. */
        starred?: boolean;
        /** Whether it is marked as risky. */
        hazardous?: boolean;
        [key: string]: unknown;
      };
    };
    /** Update activity information for current Strava athletes. */
    "strava.update_activity": {
      input: {
        /** Activity ID. */
        activityId: number | string;
        /** Updateable activity fields. */
        activity: {
          /** Whether to mark as commuting. */
          commute?: boolean;
          /** Whether to mark it as a trainer activity. */
          trainer?: boolean;
          /** Whether to hide this activity on the home page. */
          hideFromHome?: boolean;
          /** Activity Description. */
          description?: string;
          /** Activity name. */
          name?: string;
          /** Legacy activity type. */
          type?: string;
          /** Activity sport type. */
          sportType?: string;
          /** Associated equipment ID, passing none can clear the current equipment. */
          gearId?: string;
        };
      };
      output: {
        /** Strava resource ID. */
        id: number | string;
        /** Resource status. */
        resource_state?: number;
        /** External activity ID. */
        external_id?: string | null;
        /** Upload task ID. */
        upload_id?: number | string | null;
        /** Associated athlete objects. */
        athlete?: Record<string, unknown>;
        /** Activity name. */
        name: string;
        /** Activity distance, unit is meters. */
        distance: number;
        /** Movement time in seconds. */
        moving_time: number;
        /** The total time taken, in seconds. */
        elapsed_time: number;
        /** Cumulative climb, in meters. */
        total_elevation_gain: number;
        /** Legacy activity type. */
        type?: string;
        /** Sports type. */
        sport_type: string;
        /** UTC start time. */
        start_date: string;
        /** Local start time. */
        start_date_local: string;
        /** Event time zone. */
        timezone: string;
        /** Time zone offset in seconds. */
        utc_offset?: number;
        /** Average speed in meters per second. */
        average_speed?: number;
        /** Maximum speed in meters per second. */
        max_speed?: number;
        /** Average cadence. */
        average_cadence?: number | null;
        /** average power. */
        average_watts?: number | null;
        /** Maximum power. */
        max_watts?: number | null;
        /** Average heart rate. */
        average_heartrate?: number | null;
        /** Maximum heart rate. */
        max_heartrate?: number | null;
        /** Total work, unit is kilojoules. */
        kilojoules?: number | null;
        /** Whether it is a riding platform or trainer activity. */
        trainer?: boolean;
        /** Whether it is a commuting activity. */
        commute?: boolean;
        /** Whether it is created manually. */
        manual?: boolean;
        /** Whether it is a private event. */
        private?: boolean;
        /** Whether it is marked. */
        flagged?: boolean;
        /** Equipment ID. */
        gear_id?: string | null;
        /** Track map object. */
        map?: {
          /** Map object ID. */
          id?: string;
          /** Complete trajectory polyline. */
          polyline?: string | null;
          /** Summary trajectory polyline. */
          summary_polyline?: string | null;
          /** Resource status. */
          resource_state?: number;
          [key: string]: unknown;
        };
        /** Activity Description. */
        description?: string | null;
        /** Burn calories. */
        calories?: number | null;
        /** Whether the current user has liked it. */
        has_kudoed?: boolean;
        /** Whether to hide it on the homepage. */
        hide_from_home?: boolean;
        /** Strava gear summary. */
        gear?: {
          /** Equipment ID. */
          id: string;
          /** Whether it is the main equipment. */
          primary?: boolean;
          /** Equipment name. */
          name?: string;
          /** Resource status. */
          resource_state?: number;
          /** The accumulated mileage of the equipment, in meters. */
          distance?: number;
          [key: string]: unknown;
        };
        /** List of segment results included in the activity. */
        segment_efforts?: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Road segment score name. */
          name?: string;
          /** Associated activity objects. */
          activity?: Record<string, unknown>;
          /** Associated athlete objects. */
          athlete?: Record<string, unknown>;
          /** The total time taken, in seconds. */
          elapsed_time?: number;
          /** Movement time, in seconds. */
          moving_time?: number;
          /** Start time. */
          start_date?: string | null;
          /** Local start time. */
          start_date_local?: string | null;
          /** Distance in meters. */
          distance?: number;
          /** Average cadence. */
          average_cadence?: number | null;
          /** average power. */
          average_watts?: number | null;
          /** KOM ranking. */
          kom_rank?: number | null;
          /** Personal record ranking. */
          pr_rank?: number | null;
          /** Whether to hide. */
          hidden?: boolean;
          /** Strava segment summary. */
          segment?: {
            /** Strava resource ID. */
            id: number | string;
            /** Resource status. */
            resource_state?: number;
            /** Road segment name. */
            name: string;
            /** Applicable activity types. */
            activity_type?: string | null;
            /** The length of the road segment in meters. */
            distance?: number;
            /** average slope. */
            average_grade?: number;
            /** maximum slope. */
            maximum_grade?: number;
            /** Maximum altitude, in meters. */
            elevation_high?: number;
            /** Minimum altitude, in meters. */
            elevation_low?: number;
            /**
             * Starting point coordinates.
             * @minItems 2
             * @maxItems 2
             */
            start_latlng?: Array<number> | null;
            /**
             * End point coordinates.
             * @minItems 2
             * @maxItems 2
             */
            end_latlng?: Array<number> | null;
            /** Climb classification. */
            climb_category?: number | null;
            /** City. */
            city?: string | null;
            /** state or region. */
            state?: string | null;
            /** nation. */
            country?: string | null;
            /** Whether it is a private section. */
            private?: boolean;
            /** Whether the current user has favorited this road segment. */
            starred?: boolean;
            /** Whether it is marked as risky. */
            hazardous?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Activity circle list. */
        laps?: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Circle name. */
          name?: string;
          /** Circle distance in meters. */
          distance?: number;
          /** The total time taken, in seconds. */
          elapsed_time?: number;
          /** Movement time, in seconds. */
          moving_time?: number;
          /** Start time. */
          start_date?: string | null;
          /** Local start time. */
          start_date_local?: string | null;
          /** Circle climb, in meters. */
          total_elevation_gain?: number;
          /** Average speed in meters per second. */
          average_speed?: number;
          /** Maximum speed in meters per second. */
          max_speed?: number;
          /** Segment number. */
          lap_index?: number;
          [key: string]: unknown;
        }>;
        /** List of best results from the event. */
        best_efforts?: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Road segment score name. */
          name?: string;
          /** Associated activity objects. */
          activity?: Record<string, unknown>;
          /** Associated athlete objects. */
          athlete?: Record<string, unknown>;
          /** The total time taken, in seconds. */
          elapsed_time?: number;
          /** Movement time, in seconds. */
          moving_time?: number;
          /** Start time. */
          start_date?: string | null;
          /** Local start time. */
          start_date_local?: string | null;
          /** Distance in meters. */
          distance?: number;
          /** Average cadence. */
          average_cadence?: number | null;
          /** average power. */
          average_watts?: number | null;
          /** KOM ranking. */
          kom_rank?: number | null;
          /** Personal record ranking. */
          pr_rank?: number | null;
          /** Whether to hide. */
          hidden?: boolean;
          /** Strava segment summary. */
          segment?: {
            /** Strava resource ID. */
            id: number | string;
            /** Resource status. */
            resource_state?: number;
            /** Road segment name. */
            name: string;
            /** Applicable activity types. */
            activity_type?: string | null;
            /** The length of the road segment in meters. */
            distance?: number;
            /** average slope. */
            average_grade?: number;
            /** maximum slope. */
            maximum_grade?: number;
            /** Maximum altitude, in meters. */
            elevation_high?: number;
            /** Minimum altitude, in meters. */
            elevation_low?: number;
            /**
             * Starting point coordinates.
             * @minItems 2
             * @maxItems 2
             */
            start_latlng?: Array<number> | null;
            /**
             * End point coordinates.
             * @minItems 2
             * @maxItems 2
             */
            end_latlng?: Array<number> | null;
            /** Climb classification. */
            climb_category?: number | null;
            /** City. */
            city?: string | null;
            /** state or region. */
            state?: string | null;
            /** nation. */
            country?: string | null;
            /** Whether it is a private section. */
            private?: boolean;
            /** Whether the current user has favorited this road segment. */
            starred?: boolean;
            /** Whether it is marked as risky. */
            hazardous?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Photo abstract. */
        photos?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Update current Strava athlete's weight. */
    "strava.update_athlete": {
      input: {
        /**
         * Latest weight in kilograms.
         * @exclusiveMinimum 0
         */
        weight: number;
      };
      output: {
        /** Strava resource ID. */
        id: number | string;
        /** username. */
        username?: string | null;
        /** Resource status. */
        resource_state?: number;
        /** name. */
        firstname?: string | null;
        /** Surname. */
        lastname?: string | null;
        /** Profile. */
        bio?: string | null;
        /** City. */
        city?: string | null;
        /** state or region. */
        state?: string | null;
        /** nation. */
        country?: string | null;
        /** gender. */
        sex?: string | null;
        /** Whether you are a subscriber. */
        premium?: boolean;
        /** Are you a Summit user? */
        summit?: boolean;
        /** Account creation time. */
        created_at?: string | null;
        /** Data update time. */
        updated_at?: string | null;
        /** Badge type ID. */
        badge_type_id?: number | null;
        /** Medium avatar URL. */
        profile_medium?: string | null;
        /** Large avatar URL. */
        profile?: string | null;
        /** Number of followers. */
        follower_count?: number | null;
        /** Number of friends. */
        friend_count?: number | null;
        /** Pay attention to each other's numbers. */
        mutual_friend_count?: number | null;
        /** Type of athlete. */
        athlete_type?: number | null;
        /** Date format preference. */
        date_preference?: string | null;
        /** Unit preferences. */
        measurement_preference?: string | null;
        /** FTP value. */
        ftp?: number | null;
        /** Weight in kilograms. */
        weight?: number | null;
        /** List of clubs to which you belong. */
        clubs?: Array<{
          /** Strava resource ID. */
          id: number | string;
          /** Resource status. */
          resource_state?: number;
          /** Club name. */
          name: string;
          /** Club avatar URL. */
          profile_medium?: string | null;
          /** Club cover image URL. */
          cover_photo?: string | null;
          /** Club small size cover image URL. */
          cover_photo_small?: string | null;
          /** Old version of the sport type. */
          sport_type?: string | null;
          /** The types of activities that count towards the leaderboard. */
          activity_types?: Array<string>;
          /** City. */
          city?: string | null;
          /** state or region. */
          state?: string | null;
          /** nation. */
          country?: string | null;
          /** Whether it is a private club. */
          private?: boolean;
          /** Number of members. */
          member_count?: number;
          /** Is it a select club. */
          featured?: boolean;
          /** Whether it has been certified. */
          verified?: boolean;
          /** Club short link. */
          url?: string | null;
          [key: string]: unknown;
        }>;
        /** Bike List. */
        bikes?: Array<{
          /** Equipment ID. */
          id: string;
          /** Whether it is the main equipment. */
          primary?: boolean;
          /** Equipment name. */
          name?: string;
          /** Resource status. */
          resource_state?: number;
          /** The accumulated mileage of the equipment, in meters. */
          distance?: number;
          [key: string]: unknown;
        }>;
        /** Running shoe list. */
        shoes?: Array<{
          /** Equipment ID. */
          id: string;
          /** Whether it is the main equipment. */
          primary?: boolean;
          /** Equipment name. */
          name?: string;
          /** Resource status. */
          resource_state?: number;
          /** The accumulated mileage of the equipment, in meters. */
          distance?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Upload GPX, TCX or FIT files to Strava to generate events. */
    "strava.upload_activity": {
      input: {
        /** Active file upload input. */
        file: {
          /**
           * Upload file name.
           * @minLength 1
           */
          name: string;
          /** A base64 string of the file contents. */
          contentBase64?: string;
          /** File MIME type. */
          mimeType?: string;
        };
        /** Generated activity name. */
        name?: string;
        /** Generated activity description. */
        description?: string;
        /** Whether to mark it as a trainer activity. */
        trainer?: boolean;
        /** Whether to mark as commuting. */
        commute?: boolean;
        /** Upload file format. */
        dataType: "fit" | "fit.gz" | "tcx" | "tcx.gz" | "gpx" | "gpx.gz";
        /** Custom external logo. */
        externalId?: string;
      };
      output: {
        /** Strava resource ID. */
        id?: number | string;
        /** Upload task ID as a string. */
        id_str?: string | null;
        /** External upload ID. */
        external_id?: string | null;
        /** Error message when upload fails. */
        error?: string | null;
        /** Upload status. */
        status?: string | null;
        /** Generated activity ID. */
        activity_id?: number | string | null;
        [key: string]: unknown;
      };
    };
  }
}
