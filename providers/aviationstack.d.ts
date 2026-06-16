import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List or search Aviationstack aircraft types with pagination. */
    "aviationstack.list_aircraft_types": {
      input: {
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Number of leading records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Free-text search or autocomplete query supported by Aviationstack.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Aircraft types returned by Aviationstack. */
        aircraftTypes: Array<{
          /** Internal aircraft type identifier returned by Aviationstack. */
          id: string | null;
          /** Aircraft type IATA code returned by Aviationstack. */
          iataCode: string | null;
          /** Aircraft model name returned by Aviationstack. */
          aircraftName: string | null;
          /** Plane type identifier returned by Aviationstack. */
          planeTypeId: string | null;
          /** The raw aircraft type object returned by Aviationstack. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination information returned by Aviationstack. */
        pagination: {
          /** Requested page size returned by Aviationstack. */
          limit: number;
          /** Number of skipped records before the current page. */
          offset: number;
          /** Number of records returned on the current page. */
          count: number;
          /** Total number of matching records available. */
          total: number;
        };
      };
    };
    /** List or search Aviationstack airlines with pagination. */
    "aviationstack.list_airlines": {
      input: {
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Number of leading records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Free-text search or autocomplete query supported by Aviationstack.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Airlines returned by Aviationstack. */
        airlines: Array<{
          /** Internal airline identifier returned by Aviationstack. */
          id: string | null;
          /** Airline name returned by Aviationstack. */
          name: string | null;
          /** Airline IATA code returned by Aviationstack. */
          iataCode: string | null;
          /** Airline ICAO code returned by Aviationstack. */
          icaoCode: string | null;
          /** Airline callsign returned by Aviationstack. */
          callsign: string | null;
          /** Country name returned by Aviationstack. */
          countryName: string | null;
          /** Airline status returned by Aviationstack. */
          status: string | null;
          /** The raw airline object returned by Aviationstack. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination information returned by Aviationstack. */
        pagination: {
          /** Requested page size returned by Aviationstack. */
          limit: number;
          /** Number of skipped records before the current page. */
          offset: number;
          /** Number of records returned on the current page. */
          count: number;
          /** Total number of matching records available. */
          total: number;
        };
      };
    };
    /** List or search Aviationstack airplanes with pagination. */
    "aviationstack.list_airplanes": {
      input: {
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Number of leading records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Free-text search or autocomplete query supported by Aviationstack.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Airplanes returned by Aviationstack. */
        airplanes: Array<{
          /** Internal airplane identifier returned by Aviationstack. */
          id: string | null;
          /** Registration number returned by Aviationstack. */
          registrationNumber: string | null;
          /** Production line returned by Aviationstack. */
          productionLine: string | null;
          /** Model name returned by Aviationstack. */
          modelName: string | null;
          /** Model code returned by Aviationstack. */
          modelCode: string | null;
          /** Plane status returned by Aviationstack. */
          planeStatus: string | null;
          /** Associated airline IATA code returned by Aviationstack. */
          airlineIataCode: string | null;
          /** Associated airline ICAO code returned by Aviationstack. */
          airlineIcaoCode: string | null;
          /** Detailed IATA aircraft type returned by Aviationstack. */
          iataType: string | null;
          /** The raw airplane object returned by Aviationstack. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination information returned by Aviationstack. */
        pagination: {
          /** Requested page size returned by Aviationstack. */
          limit: number;
          /** Number of skipped records before the current page. */
          offset: number;
          /** Number of records returned on the current page. */
          count: number;
          /** Total number of matching records available. */
          total: number;
        };
      };
    };
    /** List or search Aviationstack airports with pagination. */
    "aviationstack.list_airports": {
      input: {
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Number of leading records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Free-text search or autocomplete query supported by Aviationstack.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Airports returned by Aviationstack. */
        airports: Array<{
          /** Internal airport identifier returned by Aviationstack. */
          id: string | null;
          /** Airport name returned by Aviationstack. */
          name: string | null;
          /** Airport IATA code returned by Aviationstack. */
          iataCode: string | null;
          /** Airport ICAO code returned by Aviationstack. */
          icaoCode: string | null;
          /** Airport latitude returned by Aviationstack. */
          latitude: number | null;
          /** Airport longitude returned by Aviationstack. */
          longitude: number | null;
          /** Airport timezone returned by Aviationstack. */
          timezone: string | null;
          /** Airport GMT offset returned by Aviationstack. */
          gmt: string | null;
          /** Country name returned by Aviationstack. */
          countryName: string | null;
          /** Country ISO2 code returned by Aviationstack. */
          countryIso2: string | null;
          /** City IATA code returned by Aviationstack. */
          cityIataCode: string | null;
          /** The raw airport object returned by Aviationstack. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination information returned by Aviationstack. */
        pagination: {
          /** Requested page size returned by Aviationstack. */
          limit: number;
          /** Number of skipped records before the current page. */
          offset: number;
          /** Number of records returned on the current page. */
          count: number;
          /** Total number of matching records available. */
          total: number;
        };
      };
    };
    /** List or search Aviationstack cities with pagination. */
    "aviationstack.list_cities": {
      input: {
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Number of leading records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Free-text search or autocomplete query supported by Aviationstack.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Cities returned by Aviationstack. */
        cities: Array<{
          /** Internal city identifier returned by Aviationstack. */
          id: string | null;
          /** City identifier returned by Aviationstack. */
          cityId: string | null;
          /** City name returned by Aviationstack. */
          name: string | null;
          /** City IATA code returned by Aviationstack. */
          iataCode: string | null;
          /** Country ISO2 code returned by Aviationstack. */
          countryIso2: string | null;
          /** City latitude returned by Aviationstack. */
          latitude: number | null;
          /** City longitude returned by Aviationstack. */
          longitude: number | null;
          /** City timezone returned by Aviationstack. */
          timezone: string | null;
          /** City GMT offset returned by Aviationstack. */
          gmt: string | null;
          /** The raw city object returned by Aviationstack. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination information returned by Aviationstack. */
        pagination: {
          /** Requested page size returned by Aviationstack. */
          limit: number;
          /** Number of skipped records before the current page. */
          offset: number;
          /** Number of records returned on the current page. */
          count: number;
          /** Total number of matching records available. */
          total: number;
        };
      };
    };
    /** List or search Aviationstack countries with pagination. */
    "aviationstack.list_countries": {
      input: {
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Number of leading records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Free-text search or autocomplete query supported by Aviationstack.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Countries returned by Aviationstack. */
        countries: Array<{
          /** Internal country identifier returned by Aviationstack. */
          id: string | null;
          /** Country identifier returned by Aviationstack. */
          countryId: string | null;
          /** Country name returned by Aviationstack. */
          name: string | null;
          /** Country ISO2 code returned by Aviationstack. */
          iso2: string | null;
          /** Country ISO3 code returned by Aviationstack. */
          iso3: string | null;
          /** Continent returned by Aviationstack. */
          continent: string | null;
          /** Capital city returned by Aviationstack. */
          capital: string | null;
          /** Currency code returned by Aviationstack. */
          currencyCode: string | null;
          /** Currency name returned by Aviationstack. */
          currencyName: string | null;
          /** Phone prefix returned by Aviationstack. */
          phonePrefix: string | null;
          /** Population returned by Aviationstack. */
          population: string | null;
          /** The raw country object returned by Aviationstack. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination information returned by Aviationstack. */
        pagination: {
          /** Requested page size returned by Aviationstack. */
          limit: number;
          /** Number of skipped records before the current page. */
          offset: number;
          /** Number of records returned on the current page. */
          count: number;
          /** Total number of matching records available. */
          total: number;
        };
      };
    };
    /** List or search Aviationstack aviation taxes with pagination. */
    "aviationstack.list_taxes": {
      input: {
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Number of leading records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Free-text search or autocomplete query supported by Aviationstack.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Taxes returned by Aviationstack. */
        taxes: Array<{
          /** Internal tax identifier returned by Aviationstack. */
          id: string | null;
          /** Tax identifier returned by Aviationstack. */
          taxId: string | null;
          /** Tax name returned by Aviationstack. */
          taxName: string | null;
          /** Associated airport IATA code returned by Aviationstack. */
          iataCode: string | null;
          /** The raw tax object returned by Aviationstack. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination information returned by Aviationstack. */
        pagination: {
          /** Requested page size returned by Aviationstack. */
          limit: number;
          /** Number of skipped records before the current page. */
          offset: number;
          /** Number of records returned on the current page. */
          count: number;
          /** Total number of matching records available. */
          total: number;
        };
      };
    };
    /** Search real-time or recent historical Aviationstack flights with optional filters. */
    "aviationstack.search_flights": {
      input: {
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Number of leading records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Historical flight date in YYYY-MM-DD format.
         * @format date
         */
        flightDate?: string;
        /** Flight status used to filter Aviationstack flights. */
        flightStatus?: "scheduled" | "active" | "landed" | "cancelled" | "incident" | "diverted";
        /**
         * Departure airport IATA code such as SFO.
         * @minLength 1
         */
        depIata?: string;
        /**
         * Arrival airport IATA code such as DFW.
         * @minLength 1
         */
        arrIata?: string;
        /**
         * Departure airport ICAO code such as KSFO.
         * @minLength 1
         */
        depIcao?: string;
        /**
         * Arrival airport ICAO code such as KDFW.
         * @minLength 1
         */
        arrIcao?: string;
        /**
         * Airline name used to filter flights.
         * @minLength 1
         */
        airlineName?: string;
        /**
         * Airline IATA code used to filter flights.
         * @minLength 1
         */
        airlineIata?: string;
        /**
         * Airline ICAO code used to filter flights.
         * @minLength 1
         */
        airlineIcao?: string;
        /**
         * Flight number used to filter flights.
         * @minLength 1
         */
        flightNumber?: string;
        /**
         * Flight IATA identifier used to filter flights.
         * @minLength 1
         */
        flightIata?: string;
        /**
         * Flight ICAO identifier used to filter flights.
         * @minLength 1
         */
        flightIcao?: string;
        /**
         * Minimum departure delay in minutes.
         * @minimum 0
         */
        minDelayDep?: number;
        /**
         * Minimum arrival delay in minutes.
         * @minimum 0
         */
        minDelayArr?: number;
        /**
         * Maximum departure delay in minutes.
         * @minimum 0
         */
        maxDelayDep?: number;
        /**
         * Maximum arrival delay in minutes.
         * @minimum 0
         */
        maxDelayArr?: number;
      };
      output: {
        /** Flights returned by Aviationstack. */
        flights: Array<{
          /** Flight date returned by Aviationstack. */
          flightDate: string | null;
          /** Flight status returned by Aviationstack. */
          flightStatus: string | null;
          /** Normalized airport timing details returned by Aviationstack. */
          departure: {
            /** Airport name returned by Aviationstack. */
            airport: string | null;
            /** Airport timezone returned by Aviationstack. */
            timezone: string | null;
            /** Airport IATA code returned by Aviationstack. */
            iata: string | null;
            /** Airport ICAO code returned by Aviationstack. */
            icao: string | null;
            /** Terminal returned by Aviationstack. */
            terminal: string | null;
            /** Gate returned by Aviationstack. */
            gate: string | null;
            /** Baggage claim or belt returned by Aviationstack. */
            baggage: string | null;
            /** Delay in minutes returned by Aviationstack. */
            delay: number | null;
            /** Scheduled timestamp returned by Aviationstack. */
            scheduled: string | null;
            /** Estimated timestamp returned by Aviationstack. */
            estimated: string | null;
            /** Actual timestamp returned by Aviationstack. */
            actual: string | null;
            /** Estimated runway timestamp returned by Aviationstack. */
            estimatedRunway: string | null;
            /** Actual runway timestamp returned by Aviationstack. */
            actualRunway: string | null;
          };
          /** Normalized airport timing details returned by Aviationstack. */
          arrival: {
            /** Airport name returned by Aviationstack. */
            airport: string | null;
            /** Airport timezone returned by Aviationstack. */
            timezone: string | null;
            /** Airport IATA code returned by Aviationstack. */
            iata: string | null;
            /** Airport ICAO code returned by Aviationstack. */
            icao: string | null;
            /** Terminal returned by Aviationstack. */
            terminal: string | null;
            /** Gate returned by Aviationstack. */
            gate: string | null;
            /** Baggage claim or belt returned by Aviationstack. */
            baggage: string | null;
            /** Delay in minutes returned by Aviationstack. */
            delay: number | null;
            /** Scheduled timestamp returned by Aviationstack. */
            scheduled: string | null;
            /** Estimated timestamp returned by Aviationstack. */
            estimated: string | null;
            /** Actual timestamp returned by Aviationstack. */
            actual: string | null;
            /** Estimated runway timestamp returned by Aviationstack. */
            estimatedRunway: string | null;
            /** Actual runway timestamp returned by Aviationstack. */
            actualRunway: string | null;
          };
          /** Normalized airline summary returned inside a flight. */
          airline: {
            /** Airline name returned by Aviationstack. */
            name: string | null;
            /** Airline IATA code returned by Aviationstack. */
            iata: string | null;
            /** Airline ICAO code returned by Aviationstack. */
            icao: string | null;
          };
          /** Normalized flight number details returned by Aviationstack. */
          flight: {
            /** Flight number returned by Aviationstack. */
            number: string | null;
            /** Flight IATA identifier returned by Aviationstack. */
            iata: string | null;
            /** Flight ICAO identifier returned by Aviationstack. */
            icao: string | null;
            /** Codeshare information returned by Aviationstack when present. */
            codeshared: Record<string, unknown> | null;
          };
          /** Normalized aircraft details returned inside a flight. */
          aircraft: {
            /** Aircraft registration returned by Aviationstack. */
            registration: string | null;
            /** Aircraft IATA type code returned by Aviationstack. */
            iata: string | null;
            /** Aircraft ICAO type code returned by Aviationstack. */
            icao: string | null;
            /** Aircraft ICAO24 hex code returned by Aviationstack. */
            icao24: string | null;
          } | null;
          /** Normalized live aircraft position returned by Aviationstack. */
          live: {
            /** Last updated timestamp returned by Aviationstack. */
            updated: string | null;
            /** Latitude coordinate returned by Aviationstack. */
            latitude: number | null;
            /** Longitude coordinate returned by Aviationstack. */
            longitude: number | null;
            /** Altitude returned by Aviationstack. */
            altitude: number | null;
            /** Heading direction returned by Aviationstack. */
            direction: number | null;
            /** Horizontal speed returned by Aviationstack. */
            speedHorizontal: number | null;
            /** Vertical speed returned by Aviationstack. */
            speedVertical: number | null;
            /** Whether Aviationstack reports the aircraft is on the ground. */
            isGround: boolean | null;
          } | null;
          /** The raw flight object returned by Aviationstack. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination information returned by Aviationstack. */
        pagination: {
          /** Requested page size returned by Aviationstack. */
          limit: number;
          /** Number of skipped records before the current page. */
          offset: number;
          /** Number of records returned on the current page. */
          count: number;
          /** Total number of matching records available. */
          total: number;
        };
      };
    };
    /** Search Aviationstack airline routes with airport, airline, flight, and pagination filters. */
    "aviationstack.search_routes": {
      input: {
        /**
         * Maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Number of leading records to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Departure airport IATA code such as SFO.
         * @minLength 1
         */
        depIata?: string;
        /**
         * Arrival airport IATA code such as DFW.
         * @minLength 1
         */
        arrIata?: string;
        /**
         * Departure airport ICAO code such as KSFO.
         * @minLength 1
         */
        depIcao?: string;
        /**
         * Arrival airport ICAO code such as KDFW.
         * @minLength 1
         */
        arrIcao?: string;
        /**
         * Airline IATA code used to filter routes.
         * @minLength 1
         */
        airlineIata?: string;
        /**
         * Airline ICAO code used to filter routes.
         * @minLength 1
         */
        airlineIcao?: string;
        /**
         * Flight number used to filter routes.
         * @minLength 1
         */
        flightNumber?: string;
      };
      output: {
        /** Routes returned by Aviationstack. */
        routes: Array<{
          /** Departure airport name returned by Aviationstack. */
          departureAirport: string | null;
          /** Departure airport IATA code returned by Aviationstack. */
          departureIata: string | null;
          /** Departure airport ICAO code returned by Aviationstack. */
          departureIcao: string | null;
          /** Arrival airport name returned by Aviationstack. */
          arrivalAirport: string | null;
          /** Arrival airport IATA code returned by Aviationstack. */
          arrivalIata: string | null;
          /** Arrival airport ICAO code returned by Aviationstack. */
          arrivalIcao: string | null;
          /** Airline name returned by Aviationstack. */
          airlineName: string | null;
          /** Airline IATA code returned by Aviationstack. */
          airlineIata: string | null;
          /** Airline ICAO code returned by Aviationstack. */
          airlineIcao: string | null;
          /** Flight number returned by Aviationstack. */
          flightNumber: string | null;
          /** The raw route object returned by Aviationstack. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination information returned by Aviationstack. */
        pagination: {
          /** Requested page size returned by Aviationstack. */
          limit: number;
          /** Number of skipped records before the current page. */
          offset: number;
          /** Number of records returned on the current page. */
          count: number;
          /** Total number of matching records available. */
          total: number;
        };
      };
    };
  }
}
