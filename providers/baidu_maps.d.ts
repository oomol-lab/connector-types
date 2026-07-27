import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Query the Baidu Maps administrative division API (api_region_search). */
    "baidu_maps.district_search": {
      input: {
        /**
         * The district name or administrative code (adcode) to look up.
         * @minLength 1
         */
        keyword: string;
        /** Number of subordinate levels to return (0-3, default 0). */
        sub_admin?: number;
        /** 1 to also return standard administrative codes (default 0). */
        extensions_code?: number;
        /** 1 to return boundary coordinates (default 0). */
        boundary?: number;
      };
      output: {
        /** The Baidu Maps status code (0 means success). */
        status: number;
        /** The status message. */
        message: string;
        /** The number of matched administrative divisions. */
        result_size: number;
        /** One administrative division (code, name, level, nested districts, ...). */
        districts: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Geocode an address with Baidu Maps. */
    "baidu_maps.geocode": {
      input: {
        /**
         * The address to geocode.
         * @minLength 1
         */
        address: string;
        /**
         * Restrict results to a city, for example '北京市'.
         * @minLength 1
         */
        city?: string;
      };
      output: {
        /** The Baidu Maps status code (0 means success). */
        status: number;
        /** The geocoded coordinate string formatted as latitude,longitude. */
        location: string;
        /** Whether the result is precise (1) or fuzzy (0). */
        precise: number;
        /** The confidence score from 0 to 100. */
        confidence: number;
        /** Whether the address was understood as a comprehension query. */
        comprehension: number;
        /** A raw object returned by Baidu Maps. */
        result: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Look up a Baidu Maps place by its uid. */
    "baidu_maps.get_place_detail": {
      input: {
        /**
         * The Baidu Maps place identifier (uid).
         * @minLength 1
         */
        uid: string;
        /** The detail scope. Baidu accepts either the string or the integer form. */
        scope?: "1" | "2" | 1 | 2;
        /** The coordinate system of returned locations. */
        coord_type?: string;
      };
      output: {
        /** The Baidu Maps status code (0 means success). */
        status: number;
        /** The status message. */
        message: string;
        /** A raw object returned by Baidu Maps. */
        result: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Fetch Baidu Maps input suggestions (keywordsuggestion). */
    "baidu_maps.input_tips": {
      input: {
        /**
         * The keyword to suggest completions for.
         * @minLength 1
         */
        query: string;
        /**
         * Restrict suggestions to a region (e.g. '北京').
         * @minLength 1
         */
        region?: string;
        /** Whether to restrict suggestions to the supplied region. */
        city_limit?: number;
        /**
         * The center coordinate used for location bias.
         * @minLength 1
         */
        location?: string;
        /** The coordinate system of the input location. */
        coord_type?: string;
      };
      output: {
        /** The Baidu Maps status code (0 means success). */
        status: number;
        /** The status message. */
        message: string;
        /** One suggestion (name, location, uid, ...). */
        result: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Locate an IP address with Baidu Maps. */
    "baidu_maps.ip_locate": {
      input: {
        /** The IP address to locate. Omit to locate the caller. */
        ip?: string;
        /** The coordinate system of the returned location. */
        coor?: string;
      };
      output: {
        /** The Baidu Maps status code (0 means success). */
        status: number;
        /** The status message. */
        message: string;
        /** The formatted address. */
        address: string;
        /** The structured IP location content. */
        content: {
          /** The formatted address. */
          address: string;
          /** The coordinate object. */
          point: {
            /** The longitude. */
            x: number;
            /** The latitude. */
            y: number;
            [key: string]: unknown;
          };
          /** The structured address detail. */
          address_detail: {
            /** The city. */
            city: string;
            /** The numeric city code. */
            city_code: number;
            /** The province. */
            province: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Reverse geocode coordinates with Baidu Maps. */
    "baidu_maps.reverse_geocode": {
      input: {
        /**
         * The coordinate string formatted as latitude,longitude (bd09ll by default).
         * @minLength 1
         */
        location: string;
        /** The coordinate system of the input location. */
        coordtype?: string;
        /**
         * The radius in meters to include nearby points of interest.
         * @minimum 0
         */
        radius?: number;
        /** 0 to only return the address (default), 1 to also return nearby POIs. */
        extensions_poi?: number;
        /** Comma separated extensions_poi types filter (when extensions_poi=1). */
        poi_types?: string;
        /** The language of the result. */
        language?: "en" | "zh-CN" | "zh-HK" | "zh-TW" | "ja" | "ko" | "fr" | "th" | "es" | "pt" | "ru" | "de" | "it" | "vi" | "ar" | "hi";
        /** Whether to return the latest administrative division (1) or the historical one (0, default). */
        latest_admin?: number;
      };
      output: {
        /** The Baidu Maps status code (0 means success). */
        status: number;
        /** The formatted address. */
        formatted_address: string;
        /** The structured address component. */
        addressComponent: {
          /** The country. */
          country: string;
          /** The numeric country code. */
          country_code: number;
          /** The ISO country code. */
          country_code_iso: string;
          /** The province. */
          province: string;
          /** The city. */
          city: string;
          /** Whether the city field is filled (0/1). */
          city_level: number;
          /** The district. */
          district: string;
          /** Whether the district field is filled (0/1). */
          district_level: number;
          /** The town. */
          town: string;
          /** Whether the town field is filled (0/1). */
          town_level: number;
          /** The administrative code. */
          adcode: string;
          /** The street. */
          street: string;
          /** The street number. */
          street_number: string;
          /** The facing direction relative to the coordinate. */
          direction: string;
          /** The signed distance to the nearest road. */
          distance: string;
          [key: string]: unknown;
        };
        /** A Baidu Maps point of interest record. Fields are passed through from Baidu and vary by endpoint. */
        pois: Array<{
          /** The Baidu Maps point of interest identifier. */
          uid?: string;
          /** The point of interest name. */
          name?: string;
          /** The formatted address. */
          address?: string;
          /** The coordinate; Baidu returns a { lng, lat } object for place search. */
          location?: unknown;
          /** The province. */
          province?: string;
          /** The city. */
          city?: string;
          /** The district (Baidu field 'area'). */
          district?: string;
          /** The point of interest category (when scope=2). */
          category?: string;
          /** The detail level flag returned by Baidu Maps. */
          detail?: number;
          /** The distance from the search center in meters (circular search only). */
          distance?: number;
          [key: string]: unknown;
        }>;
        /** The nearby roads as returned by Baidu Maps. */
        roads: unknown;
        /** The POI region breakdown as returned by Baidu Maps. */
        poiRegions: unknown;
        /** A sematic description returned by Baidu Maps. */
        sematic_description: string;
        /** The numeric city code. */
        cityCode: number;
        [key: string]: unknown;
      };
    };
    /** Plan a Baidu Maps bicycling route. */
    "baidu_maps.route_bicycling": {
      input: {
        /**
         * The origin coordinate formatted as latitude,longitude.
         * @minLength 1
         */
        origin: string;
        /**
         * The destination coordinate formatted as latitude,longitude.
         * @minLength 1
         */
        destination: string;
        /** The coordinate system of origin/destination. */
        coord_type?: string;
      };
      output: {
        /** The Baidu Maps status code (0 means success). */
        status: number;
        /** The status message. */
        message: string;
        /** The bicycling route result. */
        result: {
          /** The origin as a { lng, lat } object. */
          origin: Record<string, unknown>;
          /** The destination as a { lng, lat } object. */
          destination: Record<string, unknown>;
          /** One bicycling route alternative. */
          routes: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Plan a Baidu Maps driving route. */
    "baidu_maps.route_driving": {
      input: {
        /**
         * The origin coordinate formatted as latitude,longitude.
         * @minLength 1
         */
        origin: string;
        /**
         * The destination coordinate formatted as latitude,longitude.
         * @minLength 1
         */
        destination: string;
        /** Optional origin POI uid. */
        origin_uid?: string;
        /** Optional destination POI uid. */
        destination_uid?: string;
        /** Comma separated intermediate waypoints. */
        waypoints?: string;
        /** The routing preference (0 default, 1 toll free, 2 distance first, 3 expressway first, 4 highway avoid, ...). */
        tactics?: number;
        /** Urban routing preference (0 default, 1 main road first, 2 time first, 3 distance first, 4 avoid congestion). */
        tactics_in_city?: number;
        /** 0 to return only the best route; 3 to return up to 3 alternatives. */
        alternatives?: number;
        /** Departure time in ISO 8601 (used only with future-traffic tactics). */
        departure_time?: string;
        /** License plate for restriction-aware routing. */
        plate_number?: string;
        /** Real-time traffic policy. */
        traffic_policy?: number;
        /** The coordinate system of origin/destination. */
        coord_type?: string;
      };
      output: {
        /** The Baidu Maps status code (0 means success). */
        status: number;
        /** The status message. */
        message: string;
        /** The driving route result. */
        result: {
          /** The origin as a { lng, lat } object. */
          origin: Record<string, unknown>;
          /** The destination as a { lng, lat } object. */
          destination: Record<string, unknown>;
          /** One driving route alternative. */
          routes: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Plan a Baidu Maps transit route. */
    "baidu_maps.route_transit": {
      input: {
        /**
         * The origin coordinate formatted as latitude,longitude.
         * @minLength 1
         */
        origin: string;
        /**
         * The destination coordinate formatted as latitude,longitude.
         * @minLength 1
         */
        destination: string;
        /** Optional ISO 8601 departure time, default now. */
        departure_time?: string;
        /** Transit tactic when origin/destination are inside the same city. */
        tactics_in_city?: number;
        /** Transit tactic when traveling between cities. */
        tactics_inter_city?: number;
        /** The coordinate system of origin/destination. */
        coord_type?: string;
      };
      output: {
        /** The Baidu Maps status code (0 means success). */
        status: number;
        /** The status message. */
        message: string;
        /** The transit route result. */
        result: {
          /** The origin as a { lng, lat } object. */
          origin: Record<string, unknown>;
          /** The destination as a { lng, lat } object. */
          destination: Record<string, unknown>;
          /** One transit route alternative. */
          routes: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Plan a Baidu Maps walking route. */
    "baidu_maps.route_walking": {
      input: {
        /**
         * The origin coordinate formatted as latitude,longitude.
         * @minLength 1
         */
        origin: string;
        /**
         * The destination coordinate formatted as latitude,longitude.
         * @minLength 1
         */
        destination: string;
        /** The coordinate system of origin/destination. */
        coord_type?: string;
      };
      output: {
        /** The Baidu Maps status code (0 means success). */
        status: number;
        /** The status message. */
        message: string;
        /** The walking route result. */
        result: {
          /** The origin as a { lng, lat } object. */
          origin: Record<string, unknown>;
          /** The destination as a { lng, lat } object. */
          destination: Record<string, unknown>;
          /** One walking route alternative. */
          routes: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search Baidu Maps places in a region or city. */
    "baidu_maps.search_places": {
      input: {
        /**
         * The keyword used to search places.
         * @minLength 1
         */
        query: string;
        /**
         * The region name to scope the search, for example '北京'.
         * @minLength 1
         */
        region?: string;
        /** Whether to restrict results to the supplied region (1) or extend to nearby regions (0). */
        city_limit?: number;
        /** The result scope. Baidu accepts either the string or the integer form. */
        scope?: "1" | "2" | 1 | 2;
        /** Pipe separated industry filtering tags. */
        filter?: string;
        /** The coordinate system of returned locations. */
        coord_type?: string;
        /** Alias for coord_type used by some Baidu endpoints. */
        ret_coordtype?: string;
        /**
         * The page size, 0 to 20.
         * @minimum 0
         */
        page_size?: number;
        /**
         * The zero-based page index.
         * @minimum 0
         */
        page_num?: number;
      };
      output: {
        /** The Baidu Maps status code (0 means success). */
        status: number;
        /** The status message. */
        message: string;
        /** The total number of matching places. */
        total: number;
        /** A Baidu Maps point of interest record. Fields are passed through from Baidu and vary by endpoint. */
        results: Array<{
          /** The Baidu Maps point of interest identifier. */
          uid?: string;
          /** The point of interest name. */
          name?: string;
          /** The formatted address. */
          address?: string;
          /** The coordinate; Baidu returns a { lng, lat } object for place search. */
          location?: unknown;
          /** The province. */
          province?: string;
          /** The city. */
          city?: string;
          /** The district (Baidu field 'area'). */
          district?: string;
          /** The point of interest category (when scope=2). */
          category?: string;
          /** The detail level flag returned by Baidu Maps. */
          detail?: number;
          /** The distance from the search center in meters (circular search only). */
          distance?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search Baidu Maps places within a radius around a coordinate. */
    "baidu_maps.search_places_around": {
      input: {
        /**
         * The keyword used to search places.
         * @minLength 1
         */
        query: string;
        /**
         * The search center formatted as latitude,longitude.
         * @minLength 1
         */
        location: string;
        /**
         * The search radius in meters (default 1000, max 50000).
         * @minimum 0
         */
        radius?: number;
        /** Whether to strictly observe the radius (1) or relax it (0). */
        radius_limit?: number;
        /** Pipe separated industry filtering tags. */
        filter?: string;
        /** The coordinate system of returned locations. */
        coord_type?: string;
        /** Alias for coord_type used by some Baidu endpoints. */
        ret_coordtype?: string;
        /**
         * The page size, 0 to 20.
         * @minimum 0
         */
        page_size?: number;
        /**
         * The zero-based page index.
         * @minimum 0
         */
        page_num?: number;
      };
      output: {
        /** The Baidu Maps status code (0 means success). */
        status: number;
        /** The status message. */
        message: string;
        /** The total number of matching places. */
        total: number;
        /** A Baidu Maps point of interest record. Fields are passed through from Baidu and vary by endpoint. */
        results: Array<{
          /** The Baidu Maps point of interest identifier. */
          uid?: string;
          /** The point of interest name. */
          name?: string;
          /** The formatted address. */
          address?: string;
          /** The coordinate; Baidu returns a { lng, lat } object for place search. */
          location?: unknown;
          /** The province. */
          province?: string;
          /** The city. */
          city?: string;
          /** The district (Baidu field 'area'). */
          district?: string;
          /** The point of interest category (when scope=2). */
          category?: string;
          /** The detail level flag returned by Baidu Maps. */
          detail?: number;
          /** The distance from the search center in meters (circular search only). */
          distance?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search Baidu Maps places inside a polygon (rectangle). */
    "baidu_maps.search_places_polygon": {
      input: {
        /**
         * The keyword used to search places.
         * @minLength 1
         */
        query: string;
        /**
         * Rectangle bounds 'bottomLeftLat,bottomLeftLng,topRightLat,topRightLng' — latitude first, all comma separated (e.g. '39.915,116.404,39.975,116.414'). When supplied, region is ignored.
         * @minLength 1
         */
        bounds: string;
        /** Pipe separated industry filtering tags. */
        filter?: string;
        /** The coordinate system of returned locations. */
        coord_type?: string;
        /** Alias for coord_type used by some Baidu endpoints. */
        ret_coordtype?: string;
        /**
         * The page size, 0 to 20.
         * @minimum 0
         */
        page_size?: number;
        /**
         * The zero-based page index.
         * @minimum 0
         */
        page_num?: number;
      };
      output: {
        /** The Baidu Maps status code (0 means success). */
        status: number;
        /** The status message. */
        message: string;
        /** The total number of matching places. */
        total: number;
        /** A Baidu Maps point of interest record. Fields are passed through from Baidu and vary by endpoint. */
        results: Array<{
          /** The Baidu Maps point of interest identifier. */
          uid?: string;
          /** The point of interest name. */
          name?: string;
          /** The formatted address. */
          address?: string;
          /** The coordinate; Baidu returns a { lng, lat } object for place search. */
          location?: unknown;
          /** The province. */
          province?: string;
          /** The city. */
          city?: string;
          /** The district (Baidu field 'area'). */
          district?: string;
          /** The point of interest category (when scope=2). */
          category?: string;
          /** The detail level flag returned by Baidu Maps. */
          detail?: number;
          /** The distance from the search center in meters (circular search only). */
          distance?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Fetch weather observations and forecasts for a coordinate. */
    "baidu_maps.weather": {
      input: {
        /** The data sections to include (default 'all'). */
        data_type?: "now" | "fc" | "index" | "alert" | "fc_hour" | "all";
        /** The coordinate system of the input location (weather uses 'coordtype', default wgs84). */
        coordtype?: string;
        /**
         * The coordinate as longitude,latitude — NOTE weather is lng,lat (opposite of other endpoints). Provide this or district_id.
         * @minLength 1
         */
        location?: string;
        /** The administrative division code (adcode). Provide this or location; takes priority. */
        district_id?: string;
      };
      output: {
        /** The Baidu Maps status code (0 means success). */
        status: number;
        /** The status message. */
        message: string;
        /** The structured weather result. */
        result: {
          /** The resolved location. */
          location: {
            /** The country. */
            country: string;
            /** The province. */
            province: string;
            /** The city. */
            city: string;
            /** The region name. */
            name: string;
            /** The region code. */
            id: string;
            [key: string]: unknown;
          };
          /** The current weather observation (data_type includes 'now' or 'all'). */
          now?: unknown;
          /** One day of the daily forecast (data_type includes 'fc' or 'all'). */
          forecasts?: Array<Record<string, unknown>>;
          /** One hour of the hourly forecast (data_type includes 'fc_hour' or 'all'). */
          forecast_hours?: Array<Record<string, unknown>>;
          /** One weather alert/warning (request data_type 'alert' or 'all'; response key is 'alerts'). */
          alerts?: Array<Record<string, unknown>>;
          /** One life index (data_type includes 'index' or 'all'). */
          indexes?: Array<Record<string, unknown>>;
        };
        [key: string]: unknown;
      };
    };
  }
}
