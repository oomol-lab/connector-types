import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one OpenWeather weather station under the current account. */
    "openweather_api.add_weather_station": {
      input: {
        /**
         * The caller-defined external weather-station identifier.
         * @minLength 1
         */
        external_id: string;
        /**
         * The weather-station display name.
         * @minLength 1
         */
        name: string;
        /**
         * The station latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
        /**
         * The station longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /** The station altitude in metres. */
        altitude: number;
      };
      output: {
        /** The OpenWeather weather-station identifier. */
        id: string;
        /** The caller-supplied external weather-station identifier. */
        external_id?: string;
        /** The weather-station display name. */
        name: string;
        /** The station latitude in decimal degrees. */
        latitude: number;
        /** The station longitude in decimal degrees. */
        longitude: number;
        /** The station altitude in metres. */
        altitude?: number;
        /** The station rank when available. */
        rank?: number;
        /** The station creation time in ISO 8601 format. */
        created_at?: string;
        /** The station update time in ISO 8601 format. */
        updated_at?: string;
        /** The owner identifier when returned by OpenWeather. */
        user_id?: string;
        /** The internal source type value. */
        source_type?: number;
        [key: string]: unknown;
      };
    };
    /** Delete one OpenWeather weather station by identifier. */
    "openweather_api.delete_weather_station": {
      input: {
        /**
         * The weather-station identifier.
         * @minLength 1
         */
        station_id: string;
      };
      output: {
        /** The confirmation message returned by the connector. */
        message: string;
      };
    };
    /** Retrieve the OpenWeather 5-day forecast in 3-hour steps for exactly one location selector. */
    "openweather_api.get_5_day_forecast": {
      input: {
        /**
         * The city name, optionally followed by state code and country code, such as London,GB.
         * @minLength 1
         */
        q?: string;
        /**
         * The OpenWeather city identifier.
         * @minimum 0
         */
        id?: number;
        /**
         * The ZIP or postal code followed by country code, such as 94040,US.
         * @minLength 1
         */
        zip?: string;
        /**
         * The latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat?: number;
        /**
         * The longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lon?: number;
        /** The upstream response mode. Only json is supported. */
        mode?: string;
        /** The units of measurement for the response. */
        units?: "standard" | "metric" | "imperial";
        /**
         * The response language code in ISO 639-1 format.
         * @minLength 1
         */
        lang?: string;
      };
      output: {
        /** The internal response code. */
        cod: string | number;
        /** The internal message value returned by OpenWeather. */
        message: number;
        /** The number of forecast entries returned. */
        cnt: number;
        /** The ordered 3-hour forecast entries. */
        list: Array<{
          /**
           * The forecast time as a Unix UTC timestamp.
           * @minimum 0
           */
          dt: number;
          /** The forecast main weather metrics. */
          main: {
            /** The measured temperature. */
            temp: number;
            /** The human-perceived temperature. */
            feels_like: number;
            /** The minimum observed temperature. */
            temp_min: number;
            /** The maximum observed temperature. */
            temp_max: number;
            /** The atmospheric pressure in hPa. */
            pressure: number;
            /** The humidity percentage. */
            humidity: number;
            /** The sea-level pressure in hPa. */
            sea_level?: number;
            /** The ground-level pressure in hPa. */
            grnd_level?: number;
            /** The internal forecast temperature correction. */
            temp_kf?: number;
            [key: string]: unknown;
          };
          /** The forecast weather conditions. */
          weather: Array<{
            /** The weather condition identifier. */
            id: number;
            /** The group of weather parameters. */
            main: string;
            /** The localized condition description. */
            description: string;
            /** The weather icon code. */
            icon: string;
            [key: string]: unknown;
          }>;
          /** The forecast cloud coverage summary. */
          clouds: {
            /** The cloudiness percentage. */
            all: number;
            [key: string]: unknown;
          };
          /** The forecast wind metrics. */
          wind: {
            /** The wind speed. */
            speed: number;
            /** The wind direction in degrees. */
            deg?: number;
            /** The wind gust speed. */
            gust?: number;
            [key: string]: unknown;
          };
          /** The visibility distance in metres. */
          visibility?: number;
          /** The precipitation probability from 0 to 1. */
          pop?: number;
          /** The rain volume summary. */
          rain?: {
            /** The precipitation volume for the last hour. */
            "1h"?: number;
            /** The precipitation volume for the last three hours. */
            "3h"?: number;
            [key: string]: unknown;
          };
          /** The snow volume summary. */
          snow?: {
            /** The precipitation volume for the last hour. */
            "1h"?: number;
            /** The precipitation volume for the last three hours. */
            "3h"?: number;
            [key: string]: unknown;
          };
          /** The forecast system metadata. */
          sys: {
            /** The part-of-day flag returned by the forecast endpoint. */
            pod: string;
            [key: string]: unknown;
          };
          /** The forecast time in UTC text format. */
          dt_txt: string;
          [key: string]: unknown;
        }>;
        /** The city metadata for the forecast. */
        city: {
          /** The OpenWeather city identifier. */
          id: number;
          /** The city name. */
          name: string;
          /** The city coordinates. */
          coord: {
            /** The longitude in decimal degrees. */
            lon: number;
            /** The latitude in decimal degrees. */
            lat: number;
            [key: string]: unknown;
          };
          /** The ISO 3166 country code. */
          country: string;
          /** The population when available. */
          population?: number;
          /** The shift in seconds from UTC. */
          timezone: number;
          /**
           * The sunrise time as a Unix UTC timestamp.
           * @minimum 0
           */
          sunrise: number;
          /**
           * The sunset time as a Unix UTC timestamp.
           * @minimum 0
           */
          sunset: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve the current air-pollution snapshot for one latitude and longitude. */
    "openweather_api.get_air_pollution_current": {
      input: {
        /**
         * The latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * The longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lon: number;
      };
      output: {
        /** The coordinates for the requested place. */
        coord: {
          /** The longitude in decimal degrees. */
          lon: number;
          /** The latitude in decimal degrees. */
          lat: number;
          [key: string]: unknown;
        };
        /** The ordered air-pollution data points returned by OpenWeather. */
        list: Array<{
          /** The air quality index block. */
          main: {
            /** The OpenWeather Air Quality Index from 1 to 5. */
            aqi: number;
            [key: string]: unknown;
          };
          /** The pollutant concentration metrics. */
          components: {
            /** The carbon monoxide concentration in μg/m3. */
            co: number;
            /** The nitric oxide concentration in μg/m3. */
            no: number;
            /** The nitrogen dioxide concentration in μg/m3. */
            no2: number;
            /** The ozone concentration in μg/m3. */
            o3: number;
            /** The sulphur dioxide concentration in μg/m3. */
            so2: number;
            /** The PM2.5 concentration in μg/m3. */
            pm2_5: number;
            /** The PM10 concentration in μg/m3. */
            pm10: number;
            /** The ammonia concentration in μg/m3. */
            nh3: number;
            [key: string]: unknown;
          };
          /**
           * The calculation time as a Unix UTC timestamp.
           * @minimum 0
           */
          dt: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve the air-pollution forecast for one latitude and longitude. */
    "openweather_api.get_air_pollution_forecast": {
      input: {
        /**
         * The latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * The longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lon: number;
      };
      output: {
        /** The coordinates for the requested place. */
        coord: {
          /** The longitude in decimal degrees. */
          lon: number;
          /** The latitude in decimal degrees. */
          lat: number;
          [key: string]: unknown;
        };
        /** The ordered air-pollution data points returned by OpenWeather. */
        list: Array<{
          /** The air quality index block. */
          main: {
            /** The OpenWeather Air Quality Index from 1 to 5. */
            aqi: number;
            [key: string]: unknown;
          };
          /** The pollutant concentration metrics. */
          components: {
            /** The carbon monoxide concentration in μg/m3. */
            co: number;
            /** The nitric oxide concentration in μg/m3. */
            no: number;
            /** The nitrogen dioxide concentration in μg/m3. */
            no2: number;
            /** The ozone concentration in μg/m3. */
            o3: number;
            /** The sulphur dioxide concentration in μg/m3. */
            so2: number;
            /** The PM2.5 concentration in μg/m3. */
            pm2_5: number;
            /** The PM10 concentration in μg/m3. */
            pm10: number;
            /** The ammonia concentration in μg/m3. */
            nh3: number;
            [key: string]: unknown;
          };
          /**
           * The calculation time as a Unix UTC timestamp.
           * @minimum 0
           */
          dt: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve historical air-pollution data for one latitude and longitude over a time range. */
    "openweather_api.get_air_pollution_history": {
      input: {
        /**
         * The latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * The longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lon: number;
        /**
         * The start time as a Unix UTC timestamp.
         * @minimum 0
         */
        start: number;
        /**
         * The end time as a Unix UTC timestamp.
         * @minimum 0
         */
        end: number;
      };
      output: {
        /** The coordinates for the requested place. */
        coord: {
          /** The longitude in decimal degrees. */
          lon: number;
          /** The latitude in decimal degrees. */
          lat: number;
          [key: string]: unknown;
        };
        /** The ordered air-pollution data points returned by OpenWeather. */
        list: Array<{
          /** The air quality index block. */
          main: {
            /** The OpenWeather Air Quality Index from 1 to 5. */
            aqi: number;
            [key: string]: unknown;
          };
          /** The pollutant concentration metrics. */
          components: {
            /** The carbon monoxide concentration in μg/m3. */
            co: number;
            /** The nitric oxide concentration in μg/m3. */
            no: number;
            /** The nitrogen dioxide concentration in μg/m3. */
            no2: number;
            /** The ozone concentration in μg/m3. */
            o3: number;
            /** The sulphur dioxide concentration in μg/m3. */
            so2: number;
            /** The PM2.5 concentration in μg/m3. */
            pm2_5: number;
            /** The PM10 concentration in μg/m3. */
            pm10: number;
            /** The ammonia concentration in μg/m3. */
            nh3: number;
            [key: string]: unknown;
          };
          /**
           * The calculation time as a Unix UTC timestamp.
           * @minimum 0
           */
          dt: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve current weather for nearby cities around one latitude and longitude by using OpenWeather's compatibility city-search endpoint. */
    "openweather_api.get_circle_city_weather": {
      input: {
        /**
         * The latitude of the circle centre in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * The longitude of the circle centre in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lon: number;
        /**
         * The maximum number of nearby cities to return.
         * @minimum 1
         * @maximum 50
         */
        cnt?: number;
        /** The upstream response mode. Only json is supported. */
        mode?: string;
        /** The units of measurement for the response. */
        units?: "standard" | "metric" | "imperial";
        /**
         * The response language code in ISO 639-1 format.
         * @minLength 1
         */
        lang?: string;
      };
      output: {
        /** The internal response code. */
        cod: string | number;
        /** The internal message value returned by OpenWeather. */
        message: number;
        /** The number of city entries returned. */
        count: number;
        /** The current weather entries for nearby cities. */
        list: Array<{
          /** The OpenWeather city identifier. */
          id: number;
          /** The city name. */
          name: string;
          /** The city coordinates. */
          coord: {
            /** The longitude in decimal degrees. */
            lon: number;
            /** The latitude in decimal degrees. */
            lat: number;
            [key: string]: unknown;
          };
          /** The main weather metrics. */
          main: {
            /** The measured temperature. */
            temp: number;
            /** The human-perceived temperature. */
            feels_like: number;
            /** The minimum observed temperature. */
            temp_min: number;
            /** The maximum observed temperature. */
            temp_max: number;
            /** The atmospheric pressure in hPa. */
            pressure: number;
            /** The humidity percentage. */
            humidity: number;
            /** The sea-level pressure in hPa. */
            sea_level?: number;
            /** The ground-level pressure in hPa. */
            grnd_level?: number;
            /** The internal forecast temperature correction. */
            temp_kf?: number;
            [key: string]: unknown;
          };
          /**
           * The calculation time as a Unix UTC timestamp.
           * @minimum 0
           */
          dt: number;
          /** The wind metrics. */
          wind: {
            /** The wind speed. */
            speed: number;
            /** The wind direction in degrees. */
            deg?: number;
            /** The wind gust speed. */
            gust?: number;
            [key: string]: unknown;
          };
          /** The city-level system metadata. */
          sys: {
            /** The ISO 3166 country code. */
            country?: string;
            /**
             * The sunrise time as a Unix UTC timestamp.
             * @minimum 0
             */
            sunrise?: number;
            /**
             * The sunset time as a Unix UTC timestamp.
             * @minimum 0
             */
            sunset?: number;
            /** The shift in seconds from UTC. */
            timezone?: number;
            [key: string]: unknown;
          };
          /** The cloud coverage summary. */
          clouds: {
            /** The cloudiness percentage. */
            all: number;
            [key: string]: unknown;
          };
          /** The weather conditions for the city. */
          weather: Array<{
            /** The weather condition identifier. */
            id: number;
            /** The group of weather parameters. */
            main: string;
            /** The localized condition description. */
            description: string;
            /** The weather icon code. */
            icon: string;
            [key: string]: unknown;
          }>;
          /** The rain volume summary. */
          rain?: {
            /** The precipitation volume for the last hour. */
            "1h"?: number;
            /** The precipitation volume for the last three hours. */
            "3h"?: number;
            [key: string]: unknown;
          };
          /** The snow volume summary. */
          snow?: {
            /** The precipitation volume for the last hour. */
            "1h"?: number;
            /** The precipitation volume for the last three hours. */
            "3h"?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve the current weather for exactly one OpenWeather location selector. */
    "openweather_api.get_current_weather": {
      input: {
        /**
         * The city name, optionally followed by state code and country code, such as London,GB.
         * @minLength 1
         */
        q?: string;
        /**
         * The OpenWeather city identifier.
         * @minimum 0
         */
        id?: number;
        /**
         * The ZIP or postal code followed by country code, such as 94040,US.
         * @minLength 1
         */
        zip?: string;
        /**
         * The latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat?: number;
        /**
         * The longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lon?: number;
        /** The units of measurement for the response. */
        units?: "standard" | "metric" | "imperial";
        /**
         * The response language code in ISO 639-1 format.
         * @minLength 1
         */
        lang?: string;
      };
      output: {
        /** The coordinates for the requested place. */
        coord: {
          /** The longitude in decimal degrees. */
          lon: number;
          /** The latitude in decimal degrees. */
          lat: number;
          [key: string]: unknown;
        };
        /** The weather conditions for the requested place. */
        weather: Array<{
          /** The weather condition identifier. */
          id: number;
          /** The group of weather parameters. */
          main: string;
          /** The localized condition description. */
          description: string;
          /** The weather icon code. */
          icon: string;
          [key: string]: unknown;
        }>;
        /** The internal base parameter returned by OpenWeather. */
        base: string;
        /** The main weather metrics. */
        main: {
          /** The measured temperature. */
          temp: number;
          /** The human-perceived temperature. */
          feels_like: number;
          /** The minimum observed temperature. */
          temp_min: number;
          /** The maximum observed temperature. */
          temp_max: number;
          /** The atmospheric pressure in hPa. */
          pressure: number;
          /** The humidity percentage. */
          humidity: number;
          /** The sea-level pressure in hPa. */
          sea_level?: number;
          /** The ground-level pressure in hPa. */
          grnd_level?: number;
          /** The internal forecast temperature correction. */
          temp_kf?: number;
          [key: string]: unknown;
        };
        /** The visibility distance in metres. */
        visibility?: number;
        /** The wind metrics. */
        wind: {
          /** The wind speed. */
          speed: number;
          /** The wind direction in degrees. */
          deg?: number;
          /** The wind gust speed. */
          gust?: number;
          [key: string]: unknown;
        };
        /** The rain volume summary. */
        rain?: {
          /** The precipitation volume for the last hour. */
          "1h"?: number;
          /** The precipitation volume for the last three hours. */
          "3h"?: number;
          [key: string]: unknown;
        };
        /** The snow volume summary. */
        snow?: {
          /** The precipitation volume for the last hour. */
          "1h"?: number;
          /** The precipitation volume for the last three hours. */
          "3h"?: number;
          [key: string]: unknown;
        };
        /** The cloud coverage summary. */
        clouds: {
          /** The cloudiness percentage. */
          all: number;
          [key: string]: unknown;
        };
        /**
         * The calculation time as a Unix UTC timestamp.
         * @minimum 0
         */
        dt: number;
        /** The current weather system metadata. */
        sys: {
          /** The internal system type. */
          type?: number;
          /** The internal system identifier. */
          id?: number;
          /** The ISO 3166 country code. */
          country: string;
          /**
           * The sunrise time as a Unix UTC timestamp.
           * @minimum 0
           */
          sunrise: number;
          /**
           * The sunset time as a Unix UTC timestamp.
           * @minimum 0
           */
          sunset: number;
          [key: string]: unknown;
        };
        /** The shift in seconds from UTC. */
        timezone: number;
        /** The OpenWeather city identifier. */
        id: number;
        /** The place name returned by OpenWeather. */
        name: string;
        /** The internal response code returned on success. */
        cod: number;
        [key: string]: unknown;
      };
    };
    /** Resolve one ZIP or postal code into a named OpenWeather location. */
    "openweather_api.get_geocoding_by_zip": {
      input: {
        /**
         * The ZIP or postal code followed by country code, such as 94040,US.
         * @minLength 1
         */
        zip: string;
      };
      output: {
        /** The ZIP or postal-code geocoding result. */
        location: {
          /** The localized place name. */
          name: string;
          /** Localized names keyed by language code. */
          local_names?: Record<string, unknown>;
          /** The latitude in decimal degrees. */
          lat: number;
          /** The longitude in decimal degrees. */
          lon: number;
          /** The ISO 3166 country code. */
          country: string;
          /** The state or region name when available. */
          state?: string;
          /** The ZIP or postal code when available. */
          zip?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Resolve one place name into one or more OpenWeather geocoding matches. */
    "openweather_api.get_geocoding_direct": {
      input: {
        /**
         * The location name to geocode.
         * @minLength 1
         */
        q: string;
        /**
         * The maximum number of place matches to return.
         * @minimum 1
         * @maximum 5
         */
        limit?: number;
      };
      output: {
        /** The geocoding matches returned by OpenWeather. */
        locations: Array<{
          /** The localized place name. */
          name: string;
          /** Localized names keyed by language code. */
          local_names?: Record<string, unknown>;
          /** The latitude in decimal degrees. */
          lat: number;
          /** The longitude in decimal degrees. */
          lon: number;
          /** The ISO 3166 country code. */
          country: string;
          /** The state or region name when available. */
          state?: string;
          /** The ZIP or postal code when available. */
          zip?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Resolve one latitude and longitude pair into one or more named places. */
    "openweather_api.get_geocoding_reverse": {
      input: {
        /**
         * The latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * The longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lon: number;
        /**
         * The maximum number of place matches to return.
         * @minimum 1
         * @maximum 5
         */
        limit?: number;
      };
      output: {
        /** The reverse-geocoding matches returned by OpenWeather. */
        locations: Array<{
          /** The localized place name. */
          name: string;
          /** Localized names keyed by language code. */
          local_names?: Record<string, unknown>;
          /** The latitude in decimal degrees. */
          lat: number;
          /** The longitude in decimal degrees. */
          lon: number;
          /** The ISO 3166 country code. */
          country: string;
          /** The state or region name when available. */
          state?: string;
          /** The ZIP or postal code when available. */
          zip?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List aggregated historical measurements for one OpenWeather weather station. */
    "openweather_api.get_station_measurements": {
      input: {
        /**
         * The weather-station identifier.
         * @minLength 1
         */
        station_id: string;
        /** The aggregation granularity: minute, hour, or day. */
        type: "m" | "h" | "d";
        /**
         * The maximum number of aggregated records.
         * @exclusiveMinimum 0
         */
        limit: number;
        /**
         * The interval start as a Unix UTC timestamp.
         * @minimum 0
         */
        from: number;
        /**
         * The interval end as a Unix UTC timestamp.
         * @minimum 0
         */
        to: number;
      };
      output: {
        /** The aggregated station measurements returned by OpenWeather. */
        measurements: Array<{
          /**
           * The aggregated measurement time as a Unix UTC timestamp.
           * @minimum 0
           */
          date: number;
          /** The aggregation granularity returned by OpenWeather. */
          type: string;
          /** The weather-station identifier. */
          station_id: string;
          /** The aggregated temperature metrics. */
          temp?: Record<string, unknown>;
          /** The aggregated humidity metrics. */
          humidity?: Record<string, unknown>;
          /** The aggregated pressure metrics. */
          pressure?: Record<string, unknown>;
          /** The aggregated wind metrics. */
          wind?: Record<string, unknown>;
          /** The aggregated precipitation metrics. */
          precipitation?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Return the current UV index by sampling OpenWeather One Call 3.0, because the legacy UV Index API is retired. */
    "openweather_api.get_uv_index": {
      input: {
        /**
         * The latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * The longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lon: number;
        /** The units of measurement for the response. */
        units?: "standard" | "metric" | "imperial";
        /**
         * The response language code in ISO 639-1 format.
         * @minLength 1
         */
        lang?: string;
      };
      output: {
        /** The latitude used for the UV lookup. */
        lat: number;
        /** The longitude used for the UV lookup. */
        lon: number;
        /**
         * The sampled Unix UTC timestamp.
         * @minimum 0
         */
        date: number;
        /** The sampled timestamp encoded in ISO 8601 format. */
        dateIso: string;
        /** The UV index value sampled from One Call 3.0. */
        value: number;
      };
    };
    /** Return daily UV forecast points by sampling OpenWeather One Call 3.0, because the legacy UV Index API is retired. */
    "openweather_api.get_uv_index_forecast": {
      input: {
        /**
         * The latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * The longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lon: number;
        /**
         * The maximum number of daily UV forecast points to return.
         * @minimum 1
         * @maximum 8
         */
        cnt?: number;
        /** The units of measurement for the response. */
        units?: "standard" | "metric" | "imperial";
        /**
         * The response language code in ISO 639-1 format.
         * @minLength 1
         */
        lang?: string;
      };
      output: {
        /** The ordered daily UV forecast points synthesized from One Call 3.0. */
        list: Array<{
          /** The latitude used for the UV lookup. */
          lat: number;
          /** The longitude used for the UV lookup. */
          lon: number;
          /**
           * The sampled Unix UTC timestamp.
           * @minimum 0
           */
          date: number;
          /** The sampled timestamp encoded in ISO 8601 format. */
          dateIso: string;
          /** The UV index value sampled from One Call 3.0. */
          value: number;
        }>;
      };
    };
    /** Return sampled historical UV index points by querying OpenWeather One Call 3.0 timemachine once per day in the requested range, because the legacy UV Index API is retired. */
    "openweather_api.get_uv_index_history": {
      input: {
        /**
         * The latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * The longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lon: number;
        /**
         * The start time as a Unix UTC timestamp.
         * @minimum 0
         */
        start: number;
        /**
         * The end time as a Unix UTC timestamp.
         * @minimum 0
         */
        end: number;
        /** The units of measurement for the response. */
        units?: "standard" | "metric" | "imperial";
        /**
         * The response language code in ISO 639-1 format.
         * @minLength 1
         */
        lang?: string;
      };
      output: {
        /** The sampled historical UV index points synthesized from One Call 3.0. */
        list: Array<{
          /** The latitude used for the UV lookup. */
          lat: number;
          /** The longitude used for the UV lookup. */
          lon: number;
          /**
           * The sampled Unix UTC timestamp.
           * @minimum 0
           */
          date: number;
          /** The sampled timestamp encoded in ISO 8601 format. */
          dateIso: string;
          /** The UV index value sampled from One Call 3.0. */
          value: number;
        }>;
      };
    };
    /** Fetch one OpenWeather weather-map tile and return it as Base64 PNG bytes. */
    "openweather_api.get_weather_map_tile": {
      input: {
        /** The weather tile layer name. */
        layer: "clouds" | "clouds_new" | "precipitation" | "precipitation_new" | "pressure" | "pressure_new" | "wind" | "wind_new" | "temp" | "temp_new";
        /**
         * The tile zoom level.
         * @minimum 0
         */
        z: number;
        /**
         * The tile X coordinate.
         * @minimum 0
         */
        x: number;
        /**
         * The tile Y coordinate.
         * @minimum 0
         */
        y: number;
        /**
         * The custom palette string sent to the upstream tile API.
         * @minLength 1
         */
        palette?: string;
        /**
         * The tile opacity sent to the upstream tile API.
         * @minimum 0
         * @maximum 1
         */
        opacity?: number;
        /**
         * The upstream tile colour schema.
         * @minLength 1
         */
        color?: string;
        /**
         * The upstream empty-area fill colour.
         * @minLength 1
         */
        fill?: string;
        /** Whether to request upstream fill outside the data boundary. */
        fill_bound?: boolean;
        /** The upstream tile scale factor. */
        scale?: 1 | 2;
        /** The requested tile format. */
        format?: "png";
      };
      output: {
        /** The requested weather tile encoded as Base64 PNG bytes. */
        tileBase64: string;
        /** The content type returned by OpenWeather. */
        contentType: string;
      };
    };
    /** Retrieve one OpenWeather weather station by identifier. */
    "openweather_api.get_weather_station": {
      input: {
        /**
         * The weather-station identifier.
         * @minLength 1
         */
        station_id: string;
      };
      output: {
        /** The OpenWeather weather-station identifier. */
        id: string;
        /** The caller-supplied external weather-station identifier. */
        external_id?: string;
        /** The weather-station display name. */
        name: string;
        /** The station latitude in decimal degrees. */
        latitude: number;
        /** The station longitude in decimal degrees. */
        longitude: number;
        /** The station altitude in metres. */
        altitude?: number;
        /** The station rank when available. */
        rank?: number;
        /** The station creation time in ISO 8601 format. */
        created_at?: string;
        /** The station update time in ISO 8601 format. */
        updated_at?: string;
        /** The owner identifier when returned by OpenWeather. */
        user_id?: string;
        /** The internal source type value. */
        source_type?: number;
        [key: string]: unknown;
      };
    };
    /** Compatibility action for the retired OpenWeather Weather Triggers API. Execution always returns a deprecation error. */
    "openweather_api.get_weather_triggers": {
      input: {
        /**
         * The trigger definitions requested for compatibility.
         * @minItems 1
         */
        triggers: Array<{
          /**
           * The trigger type, such as temperature or wind.
           * @minLength 1
           */
          type: string;
          /** The comparison operator used by the trigger. */
          condition: ">" | "<" | "=" | "between";
          /** The numeric threshold or threshold range for the trigger. */
          value: number | Array<number>;
          /** The location monitored by the trigger. */
          location: {
            /**
             * The trigger latitude in decimal degrees.
             * @minimum -90
             * @maximum 90
             */
            lat: number;
            /**
             * The trigger longitude in decimal degrees.
             * @minimum -180
             * @maximum 180
             */
            lon: number;
          };
        }>;
      };
      output: {
        /** The trigger results returned by the compatibility action. */
        triggers: Array<{
          /** The trigger identifier. */
          id: string;
          /** The trigger status. */
          status: string;
          /** Additional trigger details. */
          details: Record<string, unknown>;
        }>;
      };
    };
    /** List all OpenWeather weather stations available to the current account. */
    "openweather_api.list_weather_stations": {
      input: Record<string, never>;
      output: {
        /** The weather stations returned by OpenWeather. */
        stations: Array<{
          /** The OpenWeather weather-station identifier. */
          id: string;
          /** The caller-supplied external weather-station identifier. */
          external_id?: string;
          /** The weather-station display name. */
          name: string;
          /** The station latitude in decimal degrees. */
          latitude: number;
          /** The station longitude in decimal degrees. */
          longitude: number;
          /** The station altitude in metres. */
          altitude?: number;
          /** The station rank when available. */
          rank?: number;
          /** The station creation time in ISO 8601 format. */
          created_at?: string;
          /** The station update time in ISO 8601 format. */
          updated_at?: string;
          /** The owner identifier when returned by OpenWeather. */
          user_id?: string;
          /** The internal source type value. */
          source_type?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Submit one or more measurements for existing OpenWeather weather stations. */
    "openweather_api.submit_station_measurements": {
      input: {
        /**
         * The list of weather-station measurements to submit.
         * @minItems 1
         */
        measurements: Array<{
          /**
           * The weather-station identifier.
           * @minLength 1
           */
          station_id: string;
          /**
           * The measurement time as a Unix UTC timestamp.
           * @minimum 0
           */
          dt: number;
          /** The air temperature in Celsius. */
          temperature?: number;
          /**
           * The humidity percentage.
           * @minimum 0
           * @maximum 100
           */
          humidity?: number;
          /** The atmospheric pressure in hPa. */
          pressure?: number;
          /** The wind speed in metres per second. */
          wind_speed?: number;
          /**
           * The wind direction in degrees.
           * @minimum 0
           * @maximum 360
           */
          wind_deg?: number;
          /** The wind gust speed in metres per second. */
          wind_gust?: number;
          /** The rainfall for the previous hour in millimetres. */
          rain_1h?: number;
          /** The rainfall for the previous six hours in millimetres. */
          rain_6h?: number;
          /** The rainfall for the previous twenty-four hours in millimetres. */
          rain_24h?: number;
          /** The snowfall for the previous hour in millimetres. */
          snow_1h?: number;
          /** The snowfall for the previous six hours in millimetres. */
          snow_6h?: number;
          /** The snowfall for the previous twenty-four hours in millimetres. */
          snow_24h?: number;
          /** The dew-point temperature in Celsius. */
          dew_point?: number;
          /** The humidex value. */
          humidex?: number;
          /** The heat index value. */
          heat_index?: number;
          /** The visibility distance in metres. */
          visibility_distance?: number;
          /**
           * The visibility prefix string.
           * @minLength 1
           */
          visibility_prefix?: string;
          /** The cloud-layer measurements. */
          clouds?: Array<Record<string, unknown>>;
          /** The observed weather phenomena. */
          weather?: Array<Record<string, unknown>>;
        }>;
      };
      output: {
        /** The confirmation message returned by the connector. */
        message: string;
        /** Whether the measurement submission succeeded. */
        success: boolean;
      };
    };
    /** Update one existing OpenWeather weather station. */
    "openweather_api.update_weather_station": {
      input: {
        /**
         * The weather-station identifier to update.
         * @minLength 1
         */
        station_id: string;
        /**
         * The updated external weather-station identifier.
         * @minLength 1
         */
        external_id?: string;
        /**
         * The updated weather-station display name.
         * @minLength 1
         */
        name?: string;
        /**
         * The updated station latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        latitude?: number;
        /**
         * The updated station longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        longitude?: number;
        /** The updated station altitude in metres. */
        altitude?: number;
      };
      output: {
        /** The OpenWeather weather-station identifier. */
        id: string;
        /** The caller-supplied external weather-station identifier. */
        external_id?: string;
        /** The weather-station display name. */
        name: string;
        /** The station latitude in decimal degrees. */
        latitude: number;
        /** The station longitude in decimal degrees. */
        longitude: number;
        /** The station altitude in metres. */
        altitude?: number;
        /** The station rank when available. */
        rank?: number;
        /** The station creation time in ISO 8601 format. */
        created_at?: string;
        /** The station update time in ISO 8601 format. */
        updated_at?: string;
        /** The owner identifier when returned by OpenWeather. */
        user_id?: string;
        /** The internal source type value. */
        source_type?: number;
        [key: string]: unknown;
      };
    };
  }
}
