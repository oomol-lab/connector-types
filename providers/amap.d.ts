import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search administrative districts. */
    "amap.district_search": {
      input: {
        /** The district search keywords. */
        keywords: string;
        /** The subdistrict depth. */
        subDistrict?: number;
        /** The requested response detail level. */
        extensions?: string;
        /** The page number to fetch. */
        page?: number;
        /** The result offset. */
        offset?: number;
        /** The optional filter expression. */
        filter?: string;
      };
      output: {
        /** The total number of matching districts. */
        count?: string;
        /** The matching districts. */
        districts: Array<Record<string, unknown>>;
      };
    };
    /** Convert an address to coordinates. */
    "amap.geocode": {
      input: {
        /** The address to geocode. */
        address: string;
        /** The city used to narrow the geocode lookup. */
        city?: string;
      };
      output: {
        /** The list of geocoding results. */
        geocodes: Array<{
          /** The formatted address. */
          formattedAddress?: string;
          /** The country name. */
          country?: string;
          /** The province or state name. */
          province?: string;
          /** The city name or names. */
          city?: string | Array<string>;
          /** The district or county name. */
          district?: string;
          /** The administrative code. */
          adcode?: string;
          /** The coordinate string. */
          location?: string;
        }>;
      };
    };
    /** Get place details by id. */
    "amap.get_place_detail": {
      input: {
        /** The place identifier. */
        id: string;
        /** The requested output fields. */
        showFields?: string;
      };
      output: {
        /** The place detail records. */
        pois: Array<{
          /** The point of interest identifier. */
          id?: string;
          /** The point of interest name. */
          name?: string;
          /** The point of interest type. */
          type?: string;
          /** The type code. */
          typecode?: string;
          /** The formatted address. */
          address?: string;
          /** The coordinate string. */
          location?: string;
          /** The province name. */
          pname?: string;
          /** The city name. */
          cityname?: string;
          /** The district or area name. */
          adname?: string;
        }>;
      };
    };
    /** Get input tips by keywords. */
    "amap.input_tips": {
      input: {
        /** The keywords used to search tips. */
        keywords: string;
        /** The optional category filter. */
        type?: string;
        /** The optional location bias. */
        location?: string;
        /** The optional city filter. */
        city?: string;
        /** Whether to limit results to the specified city. */
        cityLimit?: boolean;
        /** The optional data type filter. */
        dataType?: string;
      };
      output: {
        /** The returned tip records. */
        tips: Array<Record<string, unknown>>;
      };
    };
    /** Locate by IP address. */
    "amap.ip_locate": {
      input: {
        /** The IP address to locate. */
        ip?: string;
      };
      output: {
        /** The province or state name. */
        province?: string;
        /** The city name. */
        city?: string;
        /** The administrative code. */
        adcode?: string;
        /** The bounding rectangle string. */
        rectangle?: string;
      };
    };
    /** Convert coordinates to an address. */
    "amap.reverse_geocode": {
      input: {
        /** The coordinates to reverse geocode. */
        location: string;
        /** The search radius in meters. */
        radius?: number;
        /** The requested response detail level. */
        extensions?: "base" | "all";
        /** The road level filter. */
        roadLevel?: number;
      };
      output: {
        /** The formatted address. */
        formattedAddress?: string;
        /** The parsed address component details. */
        addressComponent?: Record<string, unknown>;
        /** The nearby points of interest. */
        pois: Array<Record<string, unknown>>;
        /** The nearby roads. */
        roads: Array<Record<string, unknown>>;
        /** The nearby road intersections. */
        roadinters: Array<Record<string, unknown>>;
        /** The nearby areas of interest. */
        aois: Array<Record<string, unknown>>;
      };
    };
    /** Plan a bicycling route. */
    "amap.route_bicycling": {
      input: {
        /** The route origin. */
        origin: string;
        /** The route destination. */
        destination: string;
        /** The optional alternative route mode. */
        alternativeRoute?: string;
        /** The requested output fields. */
        showFields?: string;
      };
      output: {
        /** The route summary returned by the API. */
        route: {
          /** The route origin. */
          origin?: string;
          /** The route destination. */
          destination?: string;
          /** The available route paths. */
          paths: Array<{
            /** The route distance. */
            distance?: string;
            /** The route steps. */
            steps: Array<Record<string, unknown>>;
            /** The cost summary for the route path. */
            cost?: {
              /** The estimated duration. */
              duration?: string;
            };
          }>;
        };
      };
    };
    /** Plan a driving route. */
    "amap.route_driving": {
      input: {
        /** The route origin. */
        origin: string;
        /** The route destination. */
        destination: string;
        /** The optional waypoint list. */
        waypoints?: string;
        /** The optional routing strategy. */
        strategy?: string;
        /** The optional license plate. */
        plate?: string;
        /** The optional car type. */
        carType?: string;
        /** The optional avoid polygon list. */
        avoidPolygons?: string;
        /** The requested output fields. */
        showFields?: string;
      };
      output: {
        /** The route summary returned by the driving route API. */
        route: {
          /** The route origin. */
          origin?: string;
          /** The route destination. */
          destination?: string;
          /** The estimated taxi cost. */
          taxi_cost?: string;
          /** The available driving paths. */
          paths: Array<{
            /** The path distance. */
            distance?: string;
            /** Any path restriction. */
            restriction?: string;
            /** The path steps. */
            steps: Array<Record<string, unknown>>;
            /** The cost summary for the path. */
            cost?: {
              /** The estimated duration. */
              duration?: string;
              /** The estimated toll cost. */
              tolls?: string;
            };
          }>;
        };
      };
    };
    /** Plan an electric bike route. */
    "amap.route_electrobike": {
      input: {
        /** The route origin. */
        origin: string;
        /** The route destination. */
        destination: string;
        /** The requested output fields. */
        showFields?: string;
      };
      output: {
        /** The route summary returned by the API. */
        route: {
          /** The route origin. */
          origin?: string;
          /** The route destination. */
          destination?: string;
          /** The available route paths. */
          paths: Array<{
            /** The route distance. */
            distance?: string;
            /** The route steps. */
            steps: Array<Record<string, unknown>>;
            /** The cost summary for the route path. */
            cost?: {
              /** The estimated duration. */
              duration?: string;
            };
          }>;
        };
      };
    };
    /** Plan a transit route. */
    "amap.route_transit": {
      input: {
        /** The route origin. */
        origin: string;
        /** The route destination. */
        destination: string;
        /** The origin city. */
        originCity: string;
        /** The destination city. */
        destinationCity: string;
        /** The optional routing strategy. */
        strategy?: string;
        /** The optional night transit flag. */
        nightFlag?: string;
        /** The requested output fields. */
        showFields?: string;
      };
      output: {
        /** The route summary returned by the transit route API. */
        route: {
          /** The route origin. */
          origin?: string;
          /** The route destination. */
          destination?: string;
          /** The cost summary for the transit route. */
          cost?: {
            /** The estimated taxi fee. */
            taxi_fee?: string;
          };
          /** The available transit options. */
          transits: Array<{
            /** The transit distance. */
            distance?: string;
            /** Whether the transit is a night service. */
            nightflag?: string;
            /** The route segments. */
            segments: Array<Record<string, unknown>>;
            /** The cost summary for the transit leg. */
            cost?: {
              /** The estimated duration. */
              duration?: string;
            };
          }>;
        };
      };
    };
    /** Plan a walking route. */
    "amap.route_walking": {
      input: {
        /** The route origin. */
        origin: string;
        /** The route destination. */
        destination: string;
        /** The requested output fields. */
        showFields?: string;
      };
      output: {
        /** The route summary returned by the API. */
        route: {
          /** The route origin. */
          origin?: string;
          /** The route destination. */
          destination?: string;
          /** The available route paths. */
          paths: Array<{
            /** The route distance. */
            distance?: string;
            /** The route steps. */
            steps: Array<Record<string, unknown>>;
            /** The cost summary for the route path. */
            cost?: {
              /** The estimated duration. */
              duration?: string;
            };
          }>;
        };
      };
    };
    /** Search places by keyword. */
    "amap.search_places": {
      input: {
        /** The keywords used to search places. */
        keywords: string;
        /** The optional region filter. */
        region?: string;
        /** Whether to limit results to the region. */
        cityLimit?: boolean;
        /** The optional place type filter. */
        types?: string;
        /** The page number to fetch. */
        pageNum?: number;
        /** The page size to fetch. */
        pageSize?: number;
        /** The requested output fields. */
        showFields?: string;
      };
      output: {
        /** The total number of matching points of interest. */
        count?: string;
        /** The matching points of interest. */
        pois: Array<{
          /** The point of interest identifier. */
          id?: string;
          /** The point of interest name. */
          name?: string;
          /** The point of interest type. */
          type?: string;
          /** The type code. */
          typecode?: string;
          /** The formatted address. */
          address?: string;
          /** The coordinate string. */
          location?: string;
          /** The province name. */
          pname?: string;
          /** The city name. */
          cityname?: string;
          /** The district or area name. */
          adname?: string;
        }>;
      };
    };
    /** Search places around a location. */
    "amap.search_places_around": {
      input: {
        /** The center coordinate for the search. */
        location: string;
        /** The search radius in meters. */
        radius?: number;
        /** The optional keyword filter. */
        keywords?: string;
        /** The optional place type filter. */
        types?: string;
        /** The optional sort rule. */
        sortRule?: string;
        /** The page number to fetch. */
        pageNum?: number;
        /** The page size to fetch. */
        pageSize?: number;
        /** The requested output fields. */
        showFields?: string;
      };
      output: {
        /** The total number of matching points of interest. */
        count?: string;
        /** The matching points of interest. */
        pois: Array<{
          /** The point of interest identifier. */
          id?: string;
          /** The point of interest name. */
          name?: string;
          /** The point of interest type. */
          type?: string;
          /** The type code. */
          typecode?: string;
          /** The formatted address. */
          address?: string;
          /** The coordinate string. */
          location?: string;
          /** The province name. */
          pname?: string;
          /** The city name. */
          cityname?: string;
          /** The district or area name. */
          adname?: string;
        }>;
      };
    };
    /** Search places inside a polygon. */
    "amap.search_places_polygon": {
      input: {
        /** The polygon used to bound the search. */
        polygon: string;
        /** The optional keyword filter. */
        keywords?: string;
        /** The optional place type filter. */
        types?: string;
        /** The page number to fetch. */
        pageNum?: number;
        /** The page size to fetch. */
        pageSize?: number;
        /** The requested output fields. */
        showFields?: string;
      };
      output: {
        /** The total number of matching points of interest. */
        count?: string;
        /** The matching points of interest. */
        pois: Array<{
          /** The point of interest identifier. */
          id?: string;
          /** The point of interest name. */
          name?: string;
          /** The point of interest type. */
          type?: string;
          /** The type code. */
          typecode?: string;
          /** The formatted address. */
          address?: string;
          /** The coordinate string. */
          location?: string;
          /** The province name. */
          pname?: string;
          /** The city name. */
          cityname?: string;
          /** The district or area name. */
          adname?: string;
        }>;
      };
    };
    /** Get weather information. */
    "amap.weather": {
      input: {
        /** The city to query. */
        city: string;
        /** The requested response detail level. */
        extensions?: "base" | "all";
      };
      output: {
        /** The current weather records. */
        lives?: Array<Record<string, unknown>>;
        /** The forecast weather records. */
        forecasts?: Array<Record<string, unknown>>;
      };
    };
  }
}
