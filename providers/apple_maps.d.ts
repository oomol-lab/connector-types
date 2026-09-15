import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get autocomplete suggestions for partial search text, such as a place name or address a user is still typing, with the same category, country, result type and location filters as search_places. Each suggestion carries display lines and, when available, a coordinate and structured address. Its completionUrl is a relative /v1/search URL that can be requested through the generic proxy to fetch the full place details. */
    "apple_maps.autocomplete_search": {
      input: {
        /**
         * The partial text to complete, such as eiffel.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * Point of interest categories to include in the results, such as Restaurant and Cafe.
         * @minItems 1
         */
        includePoiCategories?: Array<"Airport" | "AirportGate" | "AirportTerminal" | "AmusementPark" | "AnimalService" | "Aquarium" | "ATM" | "AutomotiveRepair" | "Bakery" | "Bank" | "Baseball" | "Basketball" | "Beach" | "Beauty" | "Bowling" | "Brewery" | "Cafe" | "Campground" | "CarRental" | "Castle" | "ConventionCenter" | "Distillery" | "EVCharger" | "Fairground" | "FireStation" | "Fishing" | "FitnessCenter" | "FoodMarket" | "Fortress" | "GasStation" | "GoKart" | "Golf" | "Hiking" | "Hospital" | "Hotel" | "Kayaking" | "Landmark" | "Laundry" | "Library" | "Mailbox" | "Marina" | "MiniGolf" | "MovieTheater" | "Museum" | "MusicVenue" | "NationalMonument" | "NationalPark" | "Nightlife" | "Park" | "Parking" | "Pharmacy" | "Planetarium" | "Playground" | "Police" | "PostOffice" | "PublicTransport" | "ReligiousSite" | "Restaurant" | "Restroom" | "RockClimbing" | "RVPark" | "School" | "SkatePark" | "Skating" | "Skiing" | "Soccer" | "Spa" | "Stadium" | "Store" | "Surfing" | "Swimming" | "Tennis" | "Theater" | "University" | "Volleyball" | "Winery" | "Zoo">;
        /**
         * Point of interest categories to leave out of the results, such as Restaurant and Cafe.
         * @minItems 1
         */
        excludePoiCategories?: Array<"Airport" | "AirportGate" | "AirportTerminal" | "AmusementPark" | "AnimalService" | "Aquarium" | "ATM" | "AutomotiveRepair" | "Bakery" | "Bank" | "Baseball" | "Basketball" | "Beach" | "Beauty" | "Bowling" | "Brewery" | "Cafe" | "Campground" | "CarRental" | "Castle" | "ConventionCenter" | "Distillery" | "EVCharger" | "Fairground" | "FireStation" | "Fishing" | "FitnessCenter" | "FoodMarket" | "Fortress" | "GasStation" | "GoKart" | "Golf" | "Hiking" | "Hospital" | "Hotel" | "Kayaking" | "Landmark" | "Laundry" | "Library" | "Mailbox" | "Marina" | "MiniGolf" | "MovieTheater" | "Museum" | "MusicVenue" | "NationalMonument" | "NationalPark" | "Nightlife" | "Park" | "Parking" | "Pharmacy" | "Planetarium" | "Playground" | "Police" | "PostOffice" | "PublicTransport" | "ReligiousSite" | "Restaurant" | "Restroom" | "RockClimbing" | "RVPark" | "School" | "SkatePark" | "Skating" | "Skiing" | "Soccer" | "Spa" | "Stadium" | "Store" | "Surfing" | "Swimming" | "Tennis" | "Theater" | "University" | "Volleyball" | "Winery" | "Zoo">;
        /**
         * Two-letter ISO 3166-1 country codes that limit the results, such as US and CA. With two or more countries Apple returns the best available results for some or all of them rather than everything related to the query in each.
         * @minItems 1
         */
        limitToCountries?: Array<string>;
        /**
         * The kinds of suggestions to include; query returns suggested search strings. List address here when includeAddressCategories or excludeAddressCategories is set.
         * @minItems 1
         */
        resultTypeFilter?: Array<"poi" | "address" | "physicalFeature" | "pointOfInterest" | "query">;
        /**
         * Address categories to include in the results, such as SubLocality and PostalCode. Apple requires address in resultTypeFilter when this is set.
         * @minItems 1
         */
        includeAddressCategories?: Array<"Country" | "AdministrativeArea" | "SubAdministrativeArea" | "Locality" | "SubLocality" | "PostalCode">;
        /**
         * Address categories to leave out of the results, such as Country and AdministrativeArea. Apple requires address in resultTypeFilter when this is set.
         * @minItems 1
         */
        excludeAddressCategories?: Array<"Country" | "AdministrativeArea" | "SubAdministrativeArea" | "Locality" | "SubLocality" | "PostalCode">;
        /**
         * The BCP 47 language code Apple uses for the response, such as en-US. Apple defaults to en-US.
         * @minLength 1
         * @pattern \S
         */
        lang?: string;
        /** A location Apple uses as a hint for the query. When it is not given, Apple falls back to userLocation and searchRegion. */
        searchLocation?: {
          /**
           * Latitude in decimal degrees, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * Longitude in decimal degrees, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
        };
        /** A region Apple uses as a hint for the query. */
        searchRegion?: {
          /**
           * The north latitude of the region, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          northLatitude: number;
          /**
           * The east longitude of the region, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          eastLongitude: number;
          /**
           * The south latitude of the region, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          southLatitude: number;
          /**
           * The west longitude of the region, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          westLongitude: number;
        };
        /** The location of the user. Apple may use it as a fallback hint when searchLocation is not given. */
        userLocation?: {
          /**
           * Latitude in decimal degrees, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * Longitude in decimal degrees, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
        };
        /** How important searchRegion is to the results. Apple documents the values default and required. */
        searchRegionPriority?: "default" | "required";
      };
      output: {
        /** The suggestions Apple returned. */
        results: Array<{
          /** A relative URL on the /v1/search endpoint that fetches the full result for this suggestion. Request it through the generic proxy, adding lang if the result is needed in a specific language. */
          completionUrl?: string;
          /** Lines of text to display for the suggestion. */
          displayLines?: Array<string>;
          /** The coordinate of the suggestion. Apple documents latitude and longitude keys but has been observed returning lat and lng. */
          location?: Record<string, unknown>;
          /** The address of the suggestion broken into components. Apple omits components it has no value for. */
          structuredAddress?: {
            /** The state or province. */
            administrativeArea?: string;
            /** The short code for the state or area. */
            administrativeAreaCode?: string;
            /** The secondary administrative division, such as a county. */
            subAdministrativeArea?: string;
            /** The city. */
            locality?: string;
            /** The name of the area within the locality. */
            subLocality?: string;
            /** The postal code. */
            postCode?: string;
            /** The street name. */
            thoroughfare?: string;
            /** The number on the street. */
            subThoroughfare?: string;
            /** A combination of thoroughfare and subThoroughfare. */
            fullThoroughfare?: string;
            /** Common names of the area in which the place resides. */
            areasOfInterest?: Array<string>;
            /** Common names for the local area or neighborhood. */
            dependentLocalities?: Array<string>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Convert an address into coordinates with Apple Maps. Returns the places Apple matched to the address with their coordinate, map region and structured address. Pass limitToCountries, searchLocation, searchRegion or userLocation to steer an ambiguous address toward the right area. */
    "apple_maps.geocode_address": {
      input: {
        /**
         * The address to geocode, such as 1 Apple Park Way, Cupertino, CA.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * Two-letter ISO 3166-1 country codes that limit the results, such as US and CA. With two or more countries Apple returns the best available results for some or all of them rather than everything related to the query in each.
         * @minItems 1
         */
        limitToCountries?: Array<string>;
        /**
         * The BCP 47 language code Apple uses for the response, such as en-US. Apple defaults to en-US.
         * @minLength 1
         * @pattern \S
         */
        lang?: string;
        /** A location Apple uses as a hint for the address. */
        searchLocation?: {
          /**
           * Latitude in decimal degrees, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * Longitude in decimal degrees, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
        };
        /** A region Apple uses as a hint for the address. */
        searchRegion?: {
          /**
           * The north latitude of the region, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          northLatitude: number;
          /**
           * The east longitude of the region, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          eastLongitude: number;
          /**
           * The south latitude of the region, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          southLatitude: number;
          /**
           * The west longitude of the region, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          westLongitude: number;
        };
        /** The location of the user. Apple may use it as a fallback hint when searchLocation is not given. */
        userLocation?: {
          /**
           * Latitude in decimal degrees, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * Longitude in decimal degrees, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
        };
      };
      output: {
        /** The places Apple matched to the address. */
        results: Array<{
          /** An opaque Place ID that identifies the place. */
          id?: string;
          /** Other Place IDs for the same place. */
          alternateIds?: Array<string>;
          /** A place name for display. */
          name?: string;
          /** The latitude and longitude of the place. */
          coordinate?: {
            /** Latitude in decimal degrees. */
            latitude?: number;
            /** Longitude in decimal degrees. */
            longitude?: number;
            [key: string]: unknown;
          };
          /** The map region associated with the place. */
          displayMapRegion?: {
            /** The north latitude of the region. */
            northLatitude?: number;
            /** The east longitude of the region. */
            eastLongitude?: number;
            /** The south latitude of the region. */
            southLatitude?: number;
            /** The west longitude of the region. */
            westLongitude?: number;
            [key: string]: unknown;
          };
          /** The address of the place, formatted by the conventions of its country or region. */
          formattedAddressLines?: Array<string>;
          /** The address of the place broken into components. Apple omits components it has no value for. */
          structuredAddress?: {
            /** The state or province. */
            administrativeArea?: string;
            /** The short code for the state or area. */
            administrativeAreaCode?: string;
            /** The secondary administrative division, such as a county. */
            subAdministrativeArea?: string;
            /** The city. */
            locality?: string;
            /** The name of the area within the locality. */
            subLocality?: string;
            /** The postal code. */
            postCode?: string;
            /** The street name. */
            thoroughfare?: string;
            /** The number on the street. */
            subThoroughfare?: string;
            /** A combination of thoroughfare and subThoroughfare. */
            fullThoroughfare?: string;
            /** Common names of the area in which the place resides. */
            areasOfInterest?: Array<string>;
            /** Common names for the local area or neighborhood. */
            dependentLocalities?: Array<string>;
            [key: string]: unknown;
          };
          /** The country or region of the place. */
          country?: string;
          /** The two-letter country code of the place. */
          countryCode?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the alternate Place IDs of one or more Apple Maps Place IDs. IDs Apple cannot resolve are listed in errors instead of failing the whole call. */
    "apple_maps.get_alternate_place_ids": {
      input: {
        /**
         * The Place IDs to look up.
         * @minItems 1
         */
        placeIds: Array<string>;
      };
      output: {
        /** The alternate IDs of each Place ID Apple resolved. */
        results: Array<{
          /** The Place ID that was looked up. */
          id?: string;
          /** Other Place IDs for the same place. */
          alternateIds?: Array<string>;
          [key: string]: unknown;
        }>;
        /** The Place IDs Apple could not resolve, each with an error code. Empty when every ID resolved. */
        errors: Array<{
          /** The Place ID that failed. */
          id?: string;
          /** Why the lookup failed. Apple documents FAILED_INVALID_ID for a malformed ID, FAILED_NOT_FOUND for an ID it does not know and FAILED_INTERNAL_ERROR for any other failure. */
          errorCode?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get driving, walking or cycling directions between two places with Apple Maps. Returns the routes with their distance, duration and toll information, and the steps they reference by index. Step paths, the polyline of every step, can be large, so they are only returned when includeStepPaths is true. */
    "apple_maps.get_directions": {
      input: {
        /**
         * The starting point, as an address or as latitude,longitude such as 37.7857,-122.4011.
         * @minLength 1
         * @pattern \S
         */
        origin: string;
        /**
         * The destination, as an address such as San Francisco City Hall, CA, or as latitude,longitude.
         * @minLength 1
         * @pattern \S
         */
        destination: string;
        /**
         * When to arrive at the destination, as an ISO 8601 date-time in UTC such as 2023-04-15T16:42:00Z. Cannot be combined with departureDate. A time zone offset is converted to UTC and fractional seconds are dropped before the request, because Apple expects UTC.
         * @format date-time
         */
        arrivalDate?: string;
        /**
         * When to leave the origin, as an ISO 8601 date-time in UTC such as 2023-04-15T16:42:00Z. Cannot be combined with arrivalDate. Apple departs now when neither is set. A time zone offset is converted to UTC and fractional seconds are dropped before the request, because Apple expects UTC.
         * @format date-time
         */
        departureDate?: string;
        /**
         * Features to avoid. Routes without them rank higher, but Apple can still return a route with tolls when no reasonable toll-free route exists, so check hasTolls on each route.
         * @minItems 1
         */
        avoid?: Array<"Tolls">;
        /**
         * The BCP 47 language code Apple uses for the response, such as en-US. Apple defaults to en-US.
         * @minLength 1
         * @pattern \S
         */
        lang?: string;
        /** Set to true to get additional routes when available. Apple defaults to false. */
        requestsAlternateRoutes?: boolean;
        /** A location Apple uses as a hint when resolving an address given as origin or destination. */
        searchLocation?: {
          /**
           * Latitude in decimal degrees, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * Longitude in decimal degrees, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
        };
        /** A region Apple uses as a hint when resolving an address given as origin or destination. */
        searchRegion?: {
          /**
           * The north latitude of the region, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          northLatitude: number;
          /**
           * The east longitude of the region, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          eastLongitude: number;
          /**
           * The south latitude of the region, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          southLatitude: number;
          /**
           * The west longitude of the region, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          westLongitude: number;
        };
        /** The location of the user. Apple may use it as a fallback hint when searchLocation is not given. */
        userLocation?: {
          /**
           * Latitude in decimal degrees, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * Longitude in decimal degrees, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
        };
        /** The mode of transportation. Apple defaults to Automobile. */
        transportType?: "Automobile" | "Walking" | "Cycling";
        /**
         * Set to true to include stepPaths, the polyline of every step. Defaults to false, which returns stepPaths as null because the polylines can be large.
         * @default false
         */
        includeStepPaths?: boolean;
      };
      output: {
        /** The place Apple resolved the origin to, or null when Apple returns none. */
        origin: {
          /** An opaque Place ID that identifies the place. */
          id?: string;
          /** Other Place IDs for the same place. */
          alternateIds?: Array<string>;
          /** A place name for display. */
          name?: string;
          /** The latitude and longitude of the place. */
          coordinate?: {
            /** Latitude in decimal degrees. */
            latitude?: number;
            /** Longitude in decimal degrees. */
            longitude?: number;
            [key: string]: unknown;
          };
          /** The map region associated with the place. */
          displayMapRegion?: {
            /** The north latitude of the region. */
            northLatitude?: number;
            /** The east longitude of the region. */
            eastLongitude?: number;
            /** The south latitude of the region. */
            southLatitude?: number;
            /** The west longitude of the region. */
            westLongitude?: number;
            [key: string]: unknown;
          };
          /** The address of the place, formatted by the conventions of its country or region. */
          formattedAddressLines?: Array<string>;
          /** The address of the place broken into components. Apple omits components it has no value for. */
          structuredAddress?: {
            /** The state or province. */
            administrativeArea?: string;
            /** The short code for the state or area. */
            administrativeAreaCode?: string;
            /** The secondary administrative division, such as a county. */
            subAdministrativeArea?: string;
            /** The city. */
            locality?: string;
            /** The name of the area within the locality. */
            subLocality?: string;
            /** The postal code. */
            postCode?: string;
            /** The street name. */
            thoroughfare?: string;
            /** The number on the street. */
            subThoroughfare?: string;
            /** A combination of thoroughfare and subThoroughfare. */
            fullThoroughfare?: string;
            /** Common names of the area in which the place resides. */
            areasOfInterest?: Array<string>;
            /** Common names for the local area or neighborhood. */
            dependentLocalities?: Array<string>;
            [key: string]: unknown;
          };
          /** The country or region of the place. */
          country?: string;
          /** The two-letter country code of the place. */
          countryCode?: string;
          /** The coordinate of the place. Apple has been observed returning it here instead of in coordinate. */
          center?: {
            /** Latitude in decimal degrees. */
            latitude?: number;
            /** Longitude in decimal degrees. */
            longitude?: number;
            [key: string]: unknown;
          };
          /** The telephone number of the place. */
          telephone?: string;
          /** Web pages of the place. */
          urls?: Array<string>;
          [key: string]: unknown;
        } | null;
        /** The place Apple resolved the destination to, or null when Apple returns none. */
        destination: {
          /** An opaque Place ID that identifies the place. */
          id?: string;
          /** Other Place IDs for the same place. */
          alternateIds?: Array<string>;
          /** A place name for display. */
          name?: string;
          /** The latitude and longitude of the place. */
          coordinate?: {
            /** Latitude in decimal degrees. */
            latitude?: number;
            /** Longitude in decimal degrees. */
            longitude?: number;
            [key: string]: unknown;
          };
          /** The map region associated with the place. */
          displayMapRegion?: {
            /** The north latitude of the region. */
            northLatitude?: number;
            /** The east longitude of the region. */
            eastLongitude?: number;
            /** The south latitude of the region. */
            southLatitude?: number;
            /** The west longitude of the region. */
            westLongitude?: number;
            [key: string]: unknown;
          };
          /** The address of the place, formatted by the conventions of its country or region. */
          formattedAddressLines?: Array<string>;
          /** The address of the place broken into components. Apple omits components it has no value for. */
          structuredAddress?: {
            /** The state or province. */
            administrativeArea?: string;
            /** The short code for the state or area. */
            administrativeAreaCode?: string;
            /** The secondary administrative division, such as a county. */
            subAdministrativeArea?: string;
            /** The city. */
            locality?: string;
            /** The name of the area within the locality. */
            subLocality?: string;
            /** The postal code. */
            postCode?: string;
            /** The street name. */
            thoroughfare?: string;
            /** The number on the street. */
            subThoroughfare?: string;
            /** A combination of thoroughfare and subThoroughfare. */
            fullThoroughfare?: string;
            /** Common names of the area in which the place resides. */
            areasOfInterest?: Array<string>;
            /** Common names for the local area or neighborhood. */
            dependentLocalities?: Array<string>;
            [key: string]: unknown;
          };
          /** The country or region of the place. */
          country?: string;
          /** The two-letter country code of the place. */
          countryCode?: string;
          /** The coordinate of the place. Apple has been observed returning it here instead of in coordinate. */
          center?: {
            /** Latitude in decimal degrees. */
            latitude?: number;
            /** Longitude in decimal degrees. */
            longitude?: number;
            [key: string]: unknown;
          };
          /** The telephone number of the place. */
          telephone?: string;
          /** Web pages of the place. */
          urls?: Array<string>;
          [key: string]: unknown;
        } | null;
        /** The routes from the origin to the destination. Each route lists its steps as indexes into steps. */
        routes: Array<{
          /** A route name for display. */
          name?: string;
          /** The total distance of the route in meters. */
          distanceMeters?: number;
          /** The estimated time to travel the route in seconds, including traffic at the requested departure or arrival time, or current traffic when neither was given. */
          durationSeconds?: number;
          /** The mode of transportation of the route. Apple has been observed returning it in upper case, such as AUTOMOBILE. */
          transportType?: string;
          /** The steps of this route, as indexes into steps. */
          stepIndexes?: Array<number>;
          /** Whether the route has tolls. When Apple omits it, the route may or may not have tolls. */
          hasTolls?: boolean;
          [key: string]: unknown;
        }>;
        /** All steps across all routes. Each step references its polyline as an index into stepPaths. */
        steps: Array<{
          /** The path of this step, as an index into stepPaths. */
          stepPathIndex?: number;
          /** The distance of the step in meters. */
          distanceMeters?: number;
          /** The estimated time to travel the step in seconds. */
          durationSeconds?: number;
          /** The localized instruction for the step, in the language set by lang. */
          instructions?: string;
          /** The mode of transportation of this step, present when it differs from the route. */
          transportType?: string;
          [key: string]: unknown;
        }>;
        /** The polyline of every step, referenced by stepPathIndex, when includeStepPaths is true; otherwise null. The last point of one step path is the first point of the next. */
        stepPaths: Array<Array<{
          /** Latitude in decimal degrees. */
          latitude?: number;
          /** Longitude in decimal degrees. */
          longitude?: number;
          [key: string]: unknown;
        }>> | null;
      };
    };
    /** Estimate the travel time and distance from one origin to up to 10 destinations with Apple Maps, by car, public transit, on foot or by bicycle. */
    "apple_maps.get_etas": {
      input: {
        /** The starting point. */
        origin: {
          /**
           * Latitude in decimal degrees, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * Longitude in decimal degrees, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
        };
        /**
         * The destinations to estimate, from 1 to 10.
         * @minItems 1
         * @maxItems 10
         */
        destinations: Array<{
          /**
           * Latitude in decimal degrees, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * Longitude in decimal degrees, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
        }>;
        /** The mode of transportation. Apple defaults to Automobile. */
        transportType?: "Automobile" | "Transit" | "Walking" | "Cycling";
        /**
         * When to leave the origin, as an ISO 8601 date-time in UTC such as 2020-09-15T16:42:00Z. Apple uses the current time when it is not set. A time zone offset is converted to UTC and fractional seconds are dropped before the request, because Apple expects UTC.
         * @format date-time
         */
        departureDate?: string;
        /**
         * The intended arrival time, as an ISO 8601 date-time in UTC such as 2020-09-15T16:42:00Z. A time zone offset is converted to UTC and fractional seconds are dropped before the request, because Apple expects UTC.
         * @format date-time
         */
        arrivalDate?: string;
      };
      output: {
        /** One estimate per destination. */
        etas: Array<{
          /** The destination this estimate is for. */
          destination?: {
            /** Latitude in decimal degrees. */
            latitude?: number;
            /** Longitude in decimal degrees. */
            longitude?: number;
            [key: string]: unknown;
          };
          /** The mode of transportation Apple estimated for. Apple has been observed returning it in upper case, such as AUTOMOBILE. */
          transportType?: string;
          /** The distance to the destination in meters. */
          distanceMeters?: number;
          /** The estimated travel time in seconds, including delays due to traffic. */
          expectedTravelTimeSeconds?: number;
          /** The expected travel time in seconds without traffic. */
          staticTravelTimeSeconds?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get one place by its Apple Maps Place ID. */
    "apple_maps.get_place": {
      input: {
        /**
         * An Apple Maps Place ID, such as the id of a place returned by another Apple Maps action.
         * @minLength 1
         * @pattern \S
         */
        placeId: string;
        /**
         * The BCP 47 language code Apple uses for the response, such as en-US. Apple defaults to en-US.
         * @minLength 1
         * @pattern \S
         */
        lang?: string;
      };
      output: {
        /** The place with that Place ID. Apple omits fields it has no value for. */
        place: {
          /** An opaque Place ID that identifies the place. */
          id?: string;
          /** Other Place IDs for the same place. */
          alternateIds?: Array<string>;
          /** A place name for display. */
          name?: string;
          /** The latitude and longitude of the place. */
          coordinate?: {
            /** Latitude in decimal degrees. */
            latitude?: number;
            /** Longitude in decimal degrees. */
            longitude?: number;
            [key: string]: unknown;
          };
          /** The map region associated with the place. */
          displayMapRegion?: {
            /** The north latitude of the region. */
            northLatitude?: number;
            /** The east longitude of the region. */
            eastLongitude?: number;
            /** The south latitude of the region. */
            southLatitude?: number;
            /** The west longitude of the region. */
            westLongitude?: number;
            [key: string]: unknown;
          };
          /** The address of the place, formatted by the conventions of its country or region. */
          formattedAddressLines?: Array<string>;
          /** The address of the place broken into components. Apple omits components it has no value for. */
          structuredAddress?: {
            /** The state or province. */
            administrativeArea?: string;
            /** The short code for the state or area. */
            administrativeAreaCode?: string;
            /** The secondary administrative division, such as a county. */
            subAdministrativeArea?: string;
            /** The city. */
            locality?: string;
            /** The name of the area within the locality. */
            subLocality?: string;
            /** The postal code. */
            postCode?: string;
            /** The street name. */
            thoroughfare?: string;
            /** The number on the street. */
            subThoroughfare?: string;
            /** A combination of thoroughfare and subThoroughfare. */
            fullThoroughfare?: string;
            /** Common names of the area in which the place resides. */
            areasOfInterest?: Array<string>;
            /** Common names for the local area or neighborhood. */
            dependentLocalities?: Array<string>;
            [key: string]: unknown;
          };
          /** The country or region of the place. */
          country?: string;
          /** The two-letter country code of the place. */
          countryCode?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get several places at once by their Apple Maps Place IDs. IDs Apple cannot resolve are listed in errors instead of failing the whole call. */
    "apple_maps.get_places": {
      input: {
        /**
         * The Place IDs to look up.
         * @minItems 1
         */
        placeIds: Array<string>;
        /**
         * The BCP 47 language code Apple uses for the response, such as en-US. Apple defaults to en-US.
         * @minLength 1
         * @pattern \S
         */
        lang?: string;
      };
      output: {
        /** The places Apple resolved. */
        results: Array<{
          /** An opaque Place ID that identifies the place. */
          id?: string;
          /** Other Place IDs for the same place. */
          alternateIds?: Array<string>;
          /** A place name for display. */
          name?: string;
          /** The latitude and longitude of the place. */
          coordinate?: {
            /** Latitude in decimal degrees. */
            latitude?: number;
            /** Longitude in decimal degrees. */
            longitude?: number;
            [key: string]: unknown;
          };
          /** The map region associated with the place. */
          displayMapRegion?: {
            /** The north latitude of the region. */
            northLatitude?: number;
            /** The east longitude of the region. */
            eastLongitude?: number;
            /** The south latitude of the region. */
            southLatitude?: number;
            /** The west longitude of the region. */
            westLongitude?: number;
            [key: string]: unknown;
          };
          /** The address of the place, formatted by the conventions of its country or region. */
          formattedAddressLines?: Array<string>;
          /** The address of the place broken into components. Apple omits components it has no value for. */
          structuredAddress?: {
            /** The state or province. */
            administrativeArea?: string;
            /** The short code for the state or area. */
            administrativeAreaCode?: string;
            /** The secondary administrative division, such as a county. */
            subAdministrativeArea?: string;
            /** The city. */
            locality?: string;
            /** The name of the area within the locality. */
            subLocality?: string;
            /** The postal code. */
            postCode?: string;
            /** The street name. */
            thoroughfare?: string;
            /** The number on the street. */
            subThoroughfare?: string;
            /** A combination of thoroughfare and subThoroughfare. */
            fullThoroughfare?: string;
            /** Common names of the area in which the place resides. */
            areasOfInterest?: Array<string>;
            /** Common names for the local area or neighborhood. */
            dependentLocalities?: Array<string>;
            [key: string]: unknown;
          };
          /** The country or region of the place. */
          country?: string;
          /** The two-letter country code of the place. */
          countryCode?: string;
          [key: string]: unknown;
        }>;
        /** The Place IDs Apple could not resolve, each with an error code. Empty when every ID resolved. */
        errors: Array<{
          /** The Place ID that failed. */
          id?: string;
          /** Why the lookup failed. Apple documents FAILED_INVALID_ID for a malformed ID, FAILED_NOT_FOUND for an ID it does not know and FAILED_INTERNAL_ERROR for any other failure. */
          errorCode?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Convert a latitude and longitude into the addresses at that point with Apple Maps. */
    "apple_maps.reverse_geocode": {
      input: {
        /** The coordinate to reverse geocode. */
        location: {
          /**
           * Latitude in decimal degrees, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * Longitude in decimal degrees, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
        };
        /**
         * The BCP 47 language code Apple uses for the response, such as en-US. Apple defaults to en-US.
         * @minLength 1
         * @pattern \S
         */
        lang?: string;
      };
      output: {
        /** The places Apple found at the coordinate. */
        results: Array<{
          /** An opaque Place ID that identifies the place. */
          id?: string;
          /** Other Place IDs for the same place. */
          alternateIds?: Array<string>;
          /** A place name for display. */
          name?: string;
          /** The latitude and longitude of the place. */
          coordinate?: {
            /** Latitude in decimal degrees. */
            latitude?: number;
            /** Longitude in decimal degrees. */
            longitude?: number;
            [key: string]: unknown;
          };
          /** The map region associated with the place. */
          displayMapRegion?: {
            /** The north latitude of the region. */
            northLatitude?: number;
            /** The east longitude of the region. */
            eastLongitude?: number;
            /** The south latitude of the region. */
            southLatitude?: number;
            /** The west longitude of the region. */
            westLongitude?: number;
            [key: string]: unknown;
          };
          /** The address of the place, formatted by the conventions of its country or region. */
          formattedAddressLines?: Array<string>;
          /** The address of the place broken into components. Apple omits components it has no value for. */
          structuredAddress?: {
            /** The state or province. */
            administrativeArea?: string;
            /** The short code for the state or area. */
            administrativeAreaCode?: string;
            /** The secondary administrative division, such as a county. */
            subAdministrativeArea?: string;
            /** The city. */
            locality?: string;
            /** The name of the area within the locality. */
            subLocality?: string;
            /** The postal code. */
            postCode?: string;
            /** The street name. */
            thoroughfare?: string;
            /** The number on the street. */
            subThoroughfare?: string;
            /** A combination of thoroughfare and subThoroughfare. */
            fullThoroughfare?: string;
            /** Common names of the area in which the place resides. */
            areasOfInterest?: Array<string>;
            /** Common names for the local area or neighborhood. */
            dependentLocalities?: Array<string>;
            [key: string]: unknown;
          };
          /** The country or region of the place. */
          country?: string;
          /** The two-letter country code of the place. */
          countryCode?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Apple Maps for places and points of interest by name, address or category. Filter by point of interest category, address category, result type and country, bias the search with a location or region, and page through large result sets with enablePagination and pageToken. */
    "apple_maps.search_places": {
      input: {
        /**
         * What to search for, such as eiffel tower or coffee.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * Point of interest categories to include in the results, such as Restaurant and Cafe.
         * @minItems 1
         */
        includePoiCategories?: Array<"Airport" | "AirportGate" | "AirportTerminal" | "AmusementPark" | "AnimalService" | "Aquarium" | "ATM" | "AutomotiveRepair" | "Bakery" | "Bank" | "Baseball" | "Basketball" | "Beach" | "Beauty" | "Bowling" | "Brewery" | "Cafe" | "Campground" | "CarRental" | "Castle" | "ConventionCenter" | "Distillery" | "EVCharger" | "Fairground" | "FireStation" | "Fishing" | "FitnessCenter" | "FoodMarket" | "Fortress" | "GasStation" | "GoKart" | "Golf" | "Hiking" | "Hospital" | "Hotel" | "Kayaking" | "Landmark" | "Laundry" | "Library" | "Mailbox" | "Marina" | "MiniGolf" | "MovieTheater" | "Museum" | "MusicVenue" | "NationalMonument" | "NationalPark" | "Nightlife" | "Park" | "Parking" | "Pharmacy" | "Planetarium" | "Playground" | "Police" | "PostOffice" | "PublicTransport" | "ReligiousSite" | "Restaurant" | "Restroom" | "RockClimbing" | "RVPark" | "School" | "SkatePark" | "Skating" | "Skiing" | "Soccer" | "Spa" | "Stadium" | "Store" | "Surfing" | "Swimming" | "Tennis" | "Theater" | "University" | "Volleyball" | "Winery" | "Zoo">;
        /**
         * Point of interest categories to leave out of the results, such as Restaurant and Cafe.
         * @minItems 1
         */
        excludePoiCategories?: Array<"Airport" | "AirportGate" | "AirportTerminal" | "AmusementPark" | "AnimalService" | "Aquarium" | "ATM" | "AutomotiveRepair" | "Bakery" | "Bank" | "Baseball" | "Basketball" | "Beach" | "Beauty" | "Bowling" | "Brewery" | "Cafe" | "Campground" | "CarRental" | "Castle" | "ConventionCenter" | "Distillery" | "EVCharger" | "Fairground" | "FireStation" | "Fishing" | "FitnessCenter" | "FoodMarket" | "Fortress" | "GasStation" | "GoKart" | "Golf" | "Hiking" | "Hospital" | "Hotel" | "Kayaking" | "Landmark" | "Laundry" | "Library" | "Mailbox" | "Marina" | "MiniGolf" | "MovieTheater" | "Museum" | "MusicVenue" | "NationalMonument" | "NationalPark" | "Nightlife" | "Park" | "Parking" | "Pharmacy" | "Planetarium" | "Playground" | "Police" | "PostOffice" | "PublicTransport" | "ReligiousSite" | "Restaurant" | "Restroom" | "RockClimbing" | "RVPark" | "School" | "SkatePark" | "Skating" | "Skiing" | "Soccer" | "Spa" | "Stadium" | "Store" | "Surfing" | "Swimming" | "Tennis" | "Theater" | "University" | "Volleyball" | "Winery" | "Zoo">;
        /**
         * Two-letter ISO 3166-1 country codes that limit the results, such as US and CA. With two or more countries Apple returns the best available results for some or all of them rather than everything related to the query in each.
         * @minItems 1
         */
        limitToCountries?: Array<string>;
        /**
         * The kinds of results to include. List address here when includeAddressCategories or excludeAddressCategories is set.
         * @minItems 1
         */
        resultTypeFilter?: Array<"poi" | "address" | "physicalFeature" | "pointOfInterest">;
        /**
         * Address categories to include in the results, such as SubLocality and PostalCode. Apple requires address in resultTypeFilter when this is set.
         * @minItems 1
         */
        includeAddressCategories?: Array<"Country" | "AdministrativeArea" | "SubAdministrativeArea" | "Locality" | "SubLocality" | "PostalCode">;
        /**
         * Address categories to leave out of the results, such as Country and AdministrativeArea. Apple requires address in resultTypeFilter when this is set.
         * @minItems 1
         */
        excludeAddressCategories?: Array<"Country" | "AdministrativeArea" | "SubAdministrativeArea" | "Locality" | "SubLocality" | "PostalCode">;
        /**
         * The BCP 47 language code Apple uses for the response, such as en-US. Apple defaults to en-US.
         * @minLength 1
         * @pattern \S
         */
        lang?: string;
        /** A location Apple uses as a hint for the query. When it is not given, Apple falls back to userLocation and searchRegion. */
        searchLocation?: {
          /**
           * Latitude in decimal degrees, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * Longitude in decimal degrees, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
        };
        /** A region Apple uses as a hint for the query. */
        searchRegion?: {
          /**
           * The north latitude of the region, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          northLatitude: number;
          /**
           * The east longitude of the region, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          eastLongitude: number;
          /**
           * The south latitude of the region, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          southLatitude: number;
          /**
           * The west longitude of the region, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          westLongitude: number;
        };
        /** The location of the user. Apple may use it as a fallback hint when searchLocation is not given. */
        userLocation?: {
          /**
           * Latitude in decimal degrees, from -90 to 90.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * Longitude in decimal degrees, from -180 to 180.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
        };
        /** How important searchRegion is to the results. Apple documents the values default and required. */
        searchRegionPriority?: "default" | "required";
        /** Set to true to ask Apple for paginated results; the response then carries paginationInfo with the tokens for other pages. Apple defaults to false. */
        enablePagination?: boolean;
        /**
         * The page to return, taken from nextPageToken or prevPageToken in the paginationInfo of an earlier search_places call.
         * @minLength 1
         * @pattern \S
         */
        pageToken?: string;
      };
      output: {
        /** The places that match the search. */
        results: Array<{
          /** An opaque Place ID that identifies the place. */
          id?: string;
          /** Other Place IDs for the same place. */
          alternateIds?: Array<string>;
          /** A place name for display. */
          name?: string;
          /** The latitude and longitude of the place. */
          coordinate?: {
            /** Latitude in decimal degrees. */
            latitude?: number;
            /** Longitude in decimal degrees. */
            longitude?: number;
            [key: string]: unknown;
          };
          /** The map region associated with the place. */
          displayMapRegion?: {
            /** The north latitude of the region. */
            northLatitude?: number;
            /** The east longitude of the region. */
            eastLongitude?: number;
            /** The south latitude of the region. */
            southLatitude?: number;
            /** The west longitude of the region. */
            westLongitude?: number;
            [key: string]: unknown;
          };
          /** The address of the place, formatted by the conventions of its country or region. */
          formattedAddressLines?: Array<string>;
          /** The address of the place broken into components. Apple omits components it has no value for. */
          structuredAddress?: {
            /** The state or province. */
            administrativeArea?: string;
            /** The short code for the state or area. */
            administrativeAreaCode?: string;
            /** The secondary administrative division, such as a county. */
            subAdministrativeArea?: string;
            /** The city. */
            locality?: string;
            /** The name of the area within the locality. */
            subLocality?: string;
            /** The postal code. */
            postCode?: string;
            /** The street name. */
            thoroughfare?: string;
            /** The number on the street. */
            subThoroughfare?: string;
            /** A combination of thoroughfare and subThoroughfare. */
            fullThoroughfare?: string;
            /** Common names of the area in which the place resides. */
            areasOfInterest?: Array<string>;
            /** Common names for the local area or neighborhood. */
            dependentLocalities?: Array<string>;
            [key: string]: unknown;
          };
          /** The country or region of the place. */
          country?: string;
          /** The two-letter country code of the place. */
          countryCode?: string;
          /** The point of interest category of the place, such as Cafe. */
          poiCategory?: string;
          [key: string]: unknown;
        }>;
        /** A region that encloses the results, or null when Apple returns none. */
        displayMapRegion: {
          /** The north latitude of the region. */
          northLatitude?: number;
          /** The east longitude of the region. */
          eastLongitude?: number;
          /** The south latitude of the region. */
          southLatitude?: number;
          /** The west longitude of the region. */
          westLongitude?: number;
          [key: string]: unknown;
        } | null;
        /** Tokens and totals for paginated results, or null when Apple returns none. */
        paginationInfo: {
          /** Pass it as pageToken to get the next page. */
          nextPageToken?: string;
          /** Pass it as pageToken to get the previous page. */
          prevPageToken?: string;
          /** The total number of pages. */
          totalPageCount?: number;
          /** The total number of results. */
          totalResults?: number;
          [key: string]: unknown;
        } | null;
      };
    };
  }
}
