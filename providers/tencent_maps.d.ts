import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Compute a Tencent Maps distance matrix for multiple origins and destinations. */
    "tencent_maps.distance_matrix": {
      input: {
        /** The Tencent Maps matrix mode. */
        mode: "driving" | "walking" | "bicycling";
        /** The origin coordinates formatted as latitude,longitude pairs separated by semicolons. */
        from: string;
        /** The destination coordinates formatted as latitude,longitude pairs separated by semicolons. */
        to: string;
      };
      output: {
        /** The Tencent Maps matrix rows. */
        rows: Array<{
          /** The matrix elements for one origin row. */
          elements: Array<{
            /** The route distance in meters. */
            distance: number;
            /** The route duration in seconds. */
            duration?: number;
            /** The per-element status code. */
            status?: number;
          }>;
        }>;
      };
    };
    /** List, search, or fetch child Tencent Maps administrative districts. */
    "tencent_maps.district_search": {
      input: {
        /** The Tencent Maps district endpoint variant. */
        mode: "list" | "children" | "search";
        /**
         * Whether to request the nested district structure for list mode.
         * @minimum 1
         * @maximum 1
         */
        structType?: number;
        /** The parent district adcode used by children mode. */
        id?: string;
        /** The district keyword or adcode used by search mode. */
        keyword?: string;
        /**
         * The Tencent Maps district polygon mode.
         * @minimum 0
         * @maximum 3
         */
        getPolygon?: number;
        /**
         * The district polygon simplification precision in meters.
         * @exclusiveMinimum 0
         */
        maxOffset?: number;
      };
      output: {
        /** The Tencent Maps district data version. */
        dataVersion?: number;
        /** The district results. */
        result: Array<unknown>;
      };
    };
    /** Convert an address into Tencent Maps coordinates and structured address parts. */
    "tencent_maps.geocode": {
      input: {
        /** The address to geocode. */
        address: string;
        /**
         * The Tencent Maps geocoding policy.
         * @minimum 0
         * @maximum 1
         */
        policy?: number;
      };
      output: {
        /** The geocoding results. */
        geocodes: Array<{
          /** The title returned by Tencent Maps. */
          title?: string;
          /** The coordinate string formatted as latitude,longitude. */
          location?: string;
          /** The province name. */
          province?: string;
          /** The city name. */
          city?: string;
          /** The district name. */
          district?: string;
          /** The street name. */
          street?: string;
          /** The street number. */
          streetNumber?: string;
          /** The administrative code. */
          adcode?: string;
          /** The address match level. */
          adLevel?: number;
        }>;
      };
    };
    /** Fetch Tencent Maps place details by place id. */
    "tencent_maps.get_place_detail": {
      input: {
        /** The Tencent Maps place identifier. */
        id: string;
        /** Whether to include sub-POIs. */
        getSubPois?: boolean;
        /** The Tencent Maps added_fields value. */
        addedFields?: string;
      };
      output: {
        /** The normalized place detail results. */
        pois: Array<{
          /** The point of interest identifier. */
          id?: string;
          /** The point of interest name. */
          name?: string;
          /** The formatted address. */
          address?: string;
          /** The point of interest category. */
          category?: string;
          /** The point of interest category code. */
          categoryCode?: number;
          /** The point of interest type code. */
          type?: number;
          /** The administrative code. */
          adcode?: string;
          /** The coordinate string formatted as latitude,longitude. */
          location?: string;
          /** The distance from the query origin in meters. */
          distance?: number;
          /** The province name. */
          province?: string;
          /** The city name. */
          city?: string;
          /** The district name. */
          district?: string;
        }>;
      };
    };
    /** Fetch Tencent Maps place suggestion tips for a partial keyword. */
    "tencent_maps.input_tips": {
      input: {
        /** The keyword used to fetch input tips. */
        keywords: string;
        /** The optional region name or adcode filter. */
        region?: string;
        /** Whether to strictly limit results to the region. */
        regionFix?: boolean;
        /** The optional coordinate bias formatted as latitude,longitude. */
        location?: string;
        /** Whether to include sub-POIs. */
        getSubPois?: boolean;
        /** Whether to include administrative area results. */
        getAd?: boolean;
        /** The suggestion ranking policy. */
        policy?: number;
        /** The Tencent Maps filter expression. */
        filter?: string;
        /** The Tencent Maps added_fields value. */
        addedFields?: string;
        /** The address formatting mode. */
        addressFormat?: "short";
      };
      output: {
        /** The total number of tips returned. */
        count?: number;
        /** The suggestion results. */
        tips: Array<{
          /** The point of interest identifier. */
          id?: string;
          /** The point of interest name. */
          name?: string;
          /** The formatted address. */
          address?: string;
          /** The point of interest category. */
          category?: string;
          /** The point of interest category code. */
          categoryCode?: number;
          /** The point of interest type code. */
          type?: number;
          /** The administrative code. */
          adcode?: string;
          /** The coordinate string formatted as latitude,longitude. */
          location?: string;
          /** The distance from the query origin in meters. */
          distance?: number;
          /** The province name. */
          province?: string;
          /** The city name. */
          city?: string;
          /** The district name. */
          district?: string;
        }>;
      };
    };
    /** Locate an IP address with Tencent Maps IP geolocation. */
    "tencent_maps.ip_locate": {
      input: {
        /** The IP address to locate. */
        ip?: string;
      };
      output: {
        /** The IP address used by Tencent Maps. */
        ip?: string;
        /** The coordinate string formatted as latitude,longitude. */
        location?: string;
        /** The administrative info payload. */
        adInfo?: Record<string, unknown>;
      };
    };
    /** Convert Tencent Maps coordinates into an address and nearby place context. */
    "tencent_maps.reverse_geocode": {
      input: {
        /** The coordinate string formatted as latitude,longitude. */
        location: string;
        /** The administrative boundary absorb radius in meters. */
        radius?: number;
        /** Whether to return nearby points of interest. */
        getPoi?: boolean;
        /** The Tencent Maps poi_options value. */
        poiOptions?: string;
      };
      output: {
        /** The formatted address. */
        formattedAddress?: string;
        /** The descriptive formatted address variants. */
        formattedAddresses?: Record<string, unknown>;
        /** The parsed address component payload. */
        addressComponent?: Record<string, unknown>;
        /** The administrative info payload. */
        adInfo?: Record<string, unknown>;
        /** The nearby points of interest. */
        pois: Array<{
          /** The point of interest identifier. */
          id?: string;
          /** The point of interest name. */
          name?: string;
          /** The formatted address. */
          address?: string;
          /** The point of interest category. */
          category?: string;
          /** The point of interest category code. */
          categoryCode?: number;
          /** The point of interest type code. */
          type?: number;
          /** The administrative code. */
          adcode?: string;
          /** The coordinate string formatted as latitude,longitude. */
          location?: string;
          /** The distance from the query origin in meters. */
          distance?: number;
          /** The province name. */
          province?: string;
          /** The city name. */
          city?: string;
          /** The district name. */
          district?: string;
        }>;
      };
    };
    /** Plan a Tencent Maps bicycling route. */
    "tencent_maps.route_bicycling": {
      input: {
        /** The origin coordinate formatted as latitude,longitude. */
        from: string;
        /** The destination coordinate formatted as latitude,longitude. */
        to: string;
        /** The optional destination place id. */
        toPoi?: string;
        /** The Tencent Maps added_fields value. */
        addedFields?: string;
      };
      output: {
        /** The Tencent Maps request id. */
        requestId?: string;
        /** The route options returned by Tencent Maps. */
        routes: Array<{
          /** The route mode returned by Tencent Maps. */
          mode?: string;
          /** The route distance in meters. */
          distance?: number;
          /** The route duration in minutes. */
          duration?: number;
          /** The route direction summary. */
          direction?: string;
          /** The traffic light count. */
          trafficLightCount?: number;
          /** The toll estimate in CNY. */
          toll?: number;
          /** The route bounds string. */
          bounds?: string;
          /** The route tags. */
          tags?: Array<string>;
          /** The route restriction info. */
          restriction?: Record<string, unknown>;
          /** The compressed route polyline. */
          polyline?: Array<number>;
          /** The route steps returned by Tencent Maps. */
          steps: Array<Record<string, unknown>>;
        }>;
      };
    };
    /** Plan a Tencent Maps driving route. */
    "tencent_maps.route_driving": {
      input: {
        /** The origin coordinate formatted as latitude,longitude. */
        from: string;
        /** The optional origin place id. */
        fromPoi?: string;
        /** The destination coordinate formatted as latitude,longitude. */
        to: string;
        /** The optional destination place id. */
        toPoi?: string;
        /** The optional destination place name. */
        toPoiName?: string;
        /** The optional waypoint list formatted as latitude,longitude pairs. */
        waypoints?: string;
        /** Whether Tencent Maps should reorder waypoints. */
        waypointOrder?: boolean;
        /** Whether waypoint reordering should consider the destination. */
        withDest?: boolean;
        /** The future departure time as a Unix timestamp. */
        departureTime?: number;
        /** The optional vehicle plate number. */
        plateNumber?: string;
        /**
         * The vehicle type used for restriction avoidance.
         * @minimum 0
         * @maximum 1
         */
        carType?: number;
        /** The Tencent Maps driving policy string. */
        policy?: string;
        /** The avoid polygon definition. */
        avoidPolygons?: string;
        /** Whether to request multiple route options. */
        getMultipleRoutes?: boolean;
        /** Whether to include speed data. */
        getSpeed?: boolean;
        /** The Tencent Maps added_fields value. */
        addedFields?: string;
        /** Whether to omit step-by-step instructions. */
        noStep?: boolean;
        /**
         * The Tencent Maps service level.
         * @minimum 0
         * @maximum 1
         */
        serviceLevel?: number;
      };
      output: {
        /** The Tencent Maps request id. */
        requestId?: string;
        /** The route options returned by Tencent Maps. */
        routes: Array<{
          /** The route mode returned by Tencent Maps. */
          mode?: string;
          /** The route distance in meters. */
          distance?: number;
          /** The route duration in minutes. */
          duration?: number;
          /** The route direction summary. */
          direction?: string;
          /** The traffic light count. */
          trafficLightCount?: number;
          /** The toll estimate in CNY. */
          toll?: number;
          /** The route bounds string. */
          bounds?: string;
          /** The route tags. */
          tags?: Array<string>;
          /** The route restriction info. */
          restriction?: Record<string, unknown>;
          /** The compressed route polyline. */
          polyline?: Array<number>;
          /** The route steps returned by Tencent Maps. */
          steps: Array<Record<string, unknown>>;
        }>;
      };
    };
    /** Plan a Tencent Maps transit route. */
    "tencent_maps.route_transit": {
      input: {
        /** The origin coordinate formatted as latitude,longitude. */
        from: string;
        /** The optional origin place id. */
        fromPoi?: string;
        /** The destination coordinate formatted as latitude,longitude. */
        to: string;
        /** The optional destination place id. */
        toPoi?: string;
        /** The departure time as a Unix timestamp. */
        departureTime?: number;
        /** The Tencent Maps transit policy string. */
        policy?: string;
        /** The Tencent Maps added_fields value. */
        addedFields?: string;
      };
      output: {
        /** The Tencent Maps request id. */
        requestId?: string;
        /** The route options returned by Tencent Maps. */
        routes: Array<{
          /** The route mode returned by Tencent Maps. */
          mode?: string;
          /** The route distance in meters. */
          distance?: number;
          /** The route duration in minutes. */
          duration?: number;
          /** The route direction summary. */
          direction?: string;
          /** The traffic light count. */
          trafficLightCount?: number;
          /** The toll estimate in CNY. */
          toll?: number;
          /** The route bounds string. */
          bounds?: string;
          /** The route tags. */
          tags?: Array<string>;
          /** The route restriction info. */
          restriction?: Record<string, unknown>;
          /** The compressed route polyline. */
          polyline?: Array<number>;
          /** The route steps returned by Tencent Maps. */
          steps: Array<Record<string, unknown>>;
        }>;
      };
    };
    /** Plan a Tencent Maps walking route. */
    "tencent_maps.route_walking": {
      input: {
        /** The origin coordinate formatted as latitude,longitude. */
        from: string;
        /** The destination coordinate formatted as latitude,longitude. */
        to: string;
        /** The optional destination place id. */
        toPoi?: string;
      };
      output: {
        /** The Tencent Maps request id. */
        requestId?: string;
        /** The route options returned by Tencent Maps. */
        routes: Array<{
          /** The route mode returned by Tencent Maps. */
          mode?: string;
          /** The route distance in meters. */
          distance?: number;
          /** The route duration in minutes. */
          duration?: number;
          /** The route direction summary. */
          direction?: string;
          /** The traffic light count. */
          trafficLightCount?: number;
          /** The toll estimate in CNY. */
          toll?: number;
          /** The route bounds string. */
          bounds?: string;
          /** The route tags. */
          tags?: Array<string>;
          /** The route restriction info. */
          restriction?: Record<string, unknown>;
          /** The compressed route polyline. */
          polyline?: Array<number>;
          /** The route steps returned by Tencent Maps. */
          steps: Array<Record<string, unknown>>;
        }>;
      };
    };
    /** Search Tencent Maps places within a region boundary. */
    "tencent_maps.search_places": {
      input: {
        /** The keyword used to search places. */
        keywords: string;
        /** The region name or adcode used for region search. */
        region: string;
        /**
         * The Tencent Maps region auto extend mode.
         * @minimum 0
         * @maximum 2
         */
        autoExtend?: number;
        /** The optional coordinate bias formatted as latitude,longitude. */
        locationBias?: string;
        /** Whether to include sub-POIs. */
        getSubPois?: boolean;
        /** The Tencent Maps filter expression. */
        filter?: string;
        /** The Tencent Maps added_fields value. */
        addedFields?: string;
        /**
         * The one-based page index.
         * @exclusiveMinimum 0
         */
        pageIndex?: number;
        /**
         * The page size, capped at 20 by Tencent Maps.
         * @maximum 20
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The total number of matching places. */
        count?: number;
        /** The matching places. */
        pois: Array<{
          /** The point of interest identifier. */
          id?: string;
          /** The point of interest name. */
          name?: string;
          /** The formatted address. */
          address?: string;
          /** The point of interest category. */
          category?: string;
          /** The point of interest category code. */
          categoryCode?: number;
          /** The point of interest type code. */
          type?: number;
          /** The administrative code. */
          adcode?: string;
          /** The coordinate string formatted as latitude,longitude. */
          location?: string;
          /** The distance from the query origin in meters. */
          distance?: number;
          /** The province name. */
          province?: string;
          /** The city name. */
          city?: string;
          /** The district name. */
          district?: string;
        }>;
        /** The optional region cluster summary. */
        clusters?: Array<Record<string, unknown>>;
      };
    };
    /** Search Tencent Maps places around a nearby center point. */
    "tencent_maps.search_places_around": {
      input: {
        /** The search center formatted as latitude,longitude. */
        location: string;
        /** The keyword used to search places. */
        keywords: string;
        /**
         * The search radius in meters.
         * @minimum 10
         * @maximum 1000
         */
        radius?: number;
        /** Whether Tencent Maps may expand the nearby radius. */
        autoExtend?: boolean;
        /** Whether to include sub-POIs. */
        getSubPois?: boolean;
        /** The Tencent Maps filter expression. */
        filter?: string;
        /** The Tencent Maps added_fields value. */
        addedFields?: string;
        /** The nearby sort mode. */
        orderBy?: "_distance";
        /**
         * The one-based page index.
         * @exclusiveMinimum 0
         */
        pageIndex?: number;
        /**
         * The page size, capped at 20 by Tencent Maps.
         * @maximum 20
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The total number of matching places. */
        count?: number;
        /** The matching places. */
        pois: Array<{
          /** The point of interest identifier. */
          id?: string;
          /** The point of interest name. */
          name?: string;
          /** The formatted address. */
          address?: string;
          /** The point of interest category. */
          category?: string;
          /** The point of interest category code. */
          categoryCode?: number;
          /** The point of interest type code. */
          type?: number;
          /** The administrative code. */
          adcode?: string;
          /** The coordinate string formatted as latitude,longitude. */
          location?: string;
          /** The distance from the query origin in meters. */
          distance?: number;
          /** The province name. */
          province?: string;
          /** The city name. */
          city?: string;
          /** The district name. */
          district?: string;
        }>;
        /** The optional region cluster summary. */
        clusters?: Array<Record<string, unknown>>;
      };
    };
    /** Search Tencent Maps places inside a polygon boundary. */
    "tencent_maps.search_places_polygon": {
      input: {
        /** The polygon boundary string formatted as latitude,longitude pairs separated by semicolons. */
        polygon: string;
        /** The keyword used to search places. */
        keywords: string;
        /** The Tencent Maps filter expression. */
        filter?: string;
        /** The Tencent Maps added_fields value. */
        addedFields?: string;
        /**
         * The one-based page index.
         * @exclusiveMinimum 0
         */
        pageIndex?: number;
        /**
         * The page size, capped at 20 by Tencent Maps.
         * @maximum 20
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The total number of matching places. */
        count?: number;
        /** The matching places. */
        pois: Array<{
          /** The point of interest identifier. */
          id?: string;
          /** The point of interest name. */
          name?: string;
          /** The formatted address. */
          address?: string;
          /** The point of interest category. */
          category?: string;
          /** The point of interest category code. */
          categoryCode?: number;
          /** The point of interest type code. */
          type?: number;
          /** The administrative code. */
          adcode?: string;
          /** The coordinate string formatted as latitude,longitude. */
          location?: string;
          /** The distance from the query origin in meters. */
          distance?: number;
          /** The province name. */
          province?: string;
          /** The city name. */
          city?: string;
          /** The district name. */
          district?: string;
        }>;
        /** The optional region cluster summary. */
        clusters?: Array<Record<string, unknown>>;
      };
    };
    /** Fetch Tencent Maps realtime or forecast weather for an adcode or coordinate. */
    "tencent_maps.weather": {
      input: {
        /** The administrative code used for weather lookup. */
        adcode?: string;
        /** The coordinate string formatted as latitude,longitude. */
        location?: string;
        /** The weather response type. */
        type?: "now" | "future" | "hours";
        /** Whether to extend future weather to more days. */
        getMd?: boolean;
        /** The Tencent Maps added_fields value. */
        addedFields?: string;
      };
      output: {
        /** The realtime weather records. */
        realtime?: Array<Record<string, unknown>>;
        /** The daily forecast weather records. */
        forecast?: Array<Record<string, unknown>>;
        /** The hourly forecast weather records. */
        forecastHours?: Array<Record<string, unknown>>;
      };
    };
  }
}
