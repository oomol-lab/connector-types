import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search Tongcheng Chengxin for attractions, scenic areas, and admission products. */
    "chengxin.search_attractions": {
      input: {
        /**
         * The destination city.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        destination: string;
        /**
         * Additional travel requirements such as dates, time preferences, budget, service class, or traveler needs.
         * @minLength 1
         * @maxLength 1000
         * @pattern \S
         */
        extra?: string;
      };
      output: {
        /** The natural-language answer returned by Tongcheng Chengxin. */
        answer: string | null;
        /** The attractions and scenic areas returned by Tongcheng Chengxin. */
        attractions: Array<{
          /** The provider description for the result group. */
          groupDescription: string | null;
          /** The Tongcheng attraction resource ID. */
          id: string | null;
          /** The attraction or scenic area name. */
          name: string | null;
          /** The destination city. */
          city: string | null;
          /** The attraction rating or grade. */
          star: string | null;
          /** The attraction review score. */
          score: string | null;
          /** The number of attraction reviews. */
          reviewCount: string | null;
          /** The current admission price. */
          price: string | null;
          /** A short attraction description. */
          description: string | null;
          /** The attraction address. */
          address: string | null;
          /** The attraction theme or category. */
          theme: string | null;
          /** The attraction opening hours. */
          openTime: string | null;
          /** The recommended visit duration. */
          bestPlayTime: string | null;
          /** The provider ranking title when reported. */
          rankTitle: string | null;
          /** The attraction facilities reported by Tongcheng Chengxin. */
          facilities: Array<string>;
          /** The attraction image URL. */
          imageUrl: string | null;
          /** The Tongcheng URL for viewing or booking the attraction. */
          bookingUrl: string | null;
        }>;
      };
    };
    /** Search Tongcheng Chengxin for long-distance bus services by cities or stations. */
    "chengxin.search_buses": {
      input: {
        /**
         * The departure city.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        departure?: string;
        /**
         * The destination city.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        destination?: string;
        /**
         * The exact departure bus station.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        departureStation?: string;
        /**
         * The exact arrival bus station.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        arrivalStation?: string;
        /**
         * Additional travel requirements such as dates, time preferences, budget, service class, or traveler needs.
         * @minLength 1
         * @maxLength 1000
         * @pattern \S
         */
        extra?: string;
      };
      output: {
        /** The natural-language answer returned by Tongcheng Chengxin. */
        answer: string | null;
        /** The bus services returned by Tongcheng Chengxin. */
        buses: Array<{
          /** The provider description for the result group. */
          groupDescription: string | null;
          /** The coach or bus service number. */
          coachNumber: string | null;
          /** The coach or bus type. */
          coachType: string | null;
          /** The departure city. */
          departureCity: string | null;
          /** The arrival city. */
          arrivalCity: string | null;
          /** The departure bus station. */
          departureStation: string | null;
          /** The arrival bus station. */
          arrivalStation: string | null;
          /** The departure date. */
          departureDate: string | null;
          /** The departure time. */
          departureTime: string | null;
          /** The arrival date. */
          arrivalDate: string | null;
          /** The arrival time. */
          arrivalTime: string | null;
          /** The journey duration in minutes when reported. */
          durationMinutes: number | null;
          /** The human-readable journey duration. */
          duration: string | null;
          /** The bus ticket price. */
          price: string | null;
          /** The remaining bus ticket availability when reported. */
          remainingTickets: string | null;
          /** Whether the itinerary is direct or a transfer itinerary. */
          tripType: string | null;
          /** The segments in a transfer itinerary. */
          segments: Array<{
            /** The segment transport type, such as TRAIN, FLIGHT, AIR, or BUS. */
            type: string | null;
            /** The train, flight, or bus service number. */
            number: string | null;
            /** The departure station or airport name. */
            departureStation: string | null;
            /** The departure airport terminal when applicable. */
            departureTerminal: string | null;
            /** The arrival station or airport name. */
            arrivalStation: string | null;
            /** The arrival airport terminal when applicable. */
            arrivalTerminal: string | null;
            /** The segment departure date. */
            departureDate: string | null;
            /** The segment departure time. */
            departureTime: string | null;
            /** The segment arrival date. */
            arrivalDate: string | null;
            /** The segment arrival time. */
            arrivalTime: string | null;
            /** The segment duration in minutes when reported. */
            durationMinutes: number | null;
            /** The seat or cabin name. */
            seat: string | null;
            /** The segment price. */
            price: string | null;
          }>;
          /** The waits between transfer itinerary segments. */
          transfers: Array<{
            /** The transfer city. */
            city: string | null;
            /** The human-readable transfer wait duration. */
            waitDuration: string | null;
          }>;
          /** The Tongcheng URL for viewing or booking the bus service. */
          bookingUrl: string | null;
        }>;
      };
    };
    /** Search Tongcheng Chengxin for flights by route, flight number, or low-price preference. */
    "chengxin.search_flights": {
      input: {
        /**
         * The departure city.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        departure?: string;
        /**
         * The destination city.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        destination?: string;
        /**
         * The exact flight number, such as CA1234.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        flightNumber?: string;
        /** Whether to search low-price flights; a destination may be omitted for destination recommendations. */
        lowPrice?: boolean;
        /**
         * Additional travel requirements such as dates, time preferences, budget, service class, or traveler needs.
         * @minLength 1
         * @maxLength 1000
         * @pattern \S
         */
        extra?: string;
      };
      output: {
        /** The natural-language answer returned by Tongcheng Chengxin. */
        answer: string | null;
        /** The flights returned by Tongcheng Chengxin. */
        flights: Array<{
          /**
           * The zero-based flight result group index.
           * @minimum 0
           */
          groupIndex: number;
          /** The provider description for the result group, such as cheapest, fastest, or recommended. */
          groupDescription: string | null;
          /** The flight number. */
          flightNumber: string | null;
          /** The departure city or location, especially for low-price destination recommendations. */
          departureName: string | null;
          /** The arrival city or location, especially for low-price destination recommendations. */
          arrivalName: string | null;
          /** The weekday description returned for low-price recommendations. */
          week: string | null;
          /** The airline name. */
          airline: string | null;
          /** The departure airport name. */
          departureAirport: string | null;
          /** The departure terminal. */
          departureTerminal: string | null;
          /** The arrival airport name. */
          arrivalAirport: string | null;
          /** The arrival terminal. */
          arrivalTerminal: string | null;
          /** The departure date. */
          departureDate: string | null;
          /** The departure time. */
          departureTime: string | null;
          /** The arrival date. */
          arrivalDate: string | null;
          /** The arrival time. */
          arrivalTime: string | null;
          /** The flight duration. */
          duration: string | null;
          /** The current flight price. */
          price: string | null;
          /** The current discount when reported. */
          discount: string | null;
          /** The original flight price when reported. */
          originalPrice: string | null;
          /** Whether the itinerary is direct or a transfer itinerary. */
          tripType: string | null;
          /** The segments in a transfer itinerary. */
          segments: Array<{
            /** The segment transport type, such as TRAIN, FLIGHT, AIR, or BUS. */
            type: string | null;
            /** The train, flight, or bus service number. */
            number: string | null;
            /** The departure station or airport name. */
            departureStation: string | null;
            /** The departure airport terminal when applicable. */
            departureTerminal: string | null;
            /** The arrival station or airport name. */
            arrivalStation: string | null;
            /** The arrival airport terminal when applicable. */
            arrivalTerminal: string | null;
            /** The segment departure date. */
            departureDate: string | null;
            /** The segment departure time. */
            departureTime: string | null;
            /** The segment arrival date. */
            arrivalDate: string | null;
            /** The segment arrival time. */
            arrivalTime: string | null;
            /** The segment duration in minutes when reported. */
            durationMinutes: number | null;
            /** The seat or cabin name. */
            seat: string | null;
            /** The segment price. */
            price: string | null;
          }>;
          /** The waits between transfer itinerary segments. */
          transfers: Array<{
            /** The transfer city. */
            city: string | null;
            /** The human-readable transfer wait duration. */
            waitDuration: string | null;
          }>;
          /** The Tongcheng URL for viewing or booking the flight. */
          bookingUrl: string | null;
        }>;
        /** The ground transport segments suggested for air-rail or air-bus connections. */
        supplementalTransport: Array<{
          /**
           * The zero-based flight result group index.
           * @minimum 0
           */
          groupIndex: number;
          /** The provider description for the owning flight group. */
          groupDescription: string | null;
          /** How the supplemental segment connects with the flight. */
          direction: "to_departure_airport" | "from_arrival_airport" | null;
          /** The supplemental transport type, such as TRAIN or BUS. */
          type: string | null;
          /** The train or bus service number. */
          number: string | null;
          /** The departure station name. */
          departureStation: string | null;
          /** The arrival station name. */
          arrivalStation: string | null;
          /** The departure date. */
          departureDate: string | null;
          /** The departure time. */
          departureTime: string | null;
          /** The arrival date. */
          arrivalDate: string | null;
          /** The arrival time. */
          arrivalTime: string | null;
          /** The supplemental journey duration. */
          duration: string | null;
          /** The lowest reported supplemental transport price. */
          price: string | null;
          /** The available supplemental transport ticket options. */
          tickets: Array<{
            /** The seat, cabin, or ticket type. */
            type: string | null;
            /** The ticket price as reported by Tongcheng Chengxin. */
            price: string | null;
            /** The remaining ticket availability when reported. */
            remaining: string | null;
          }>;
          /** The Tongcheng URL for viewing or booking the supplemental transport segment. */
          bookingUrl: string | null;
        }>;
      };
    };
    /** Search Tongcheng Chengxin for hotels using a destination and optional natural-language preferences. */
    "chengxin.search_hotels": {
      input: {
        /**
         * The destination city.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        destination: string;
        /**
         * Additional travel requirements such as dates, time preferences, budget, service class, or traveler needs.
         * @minLength 1
         * @maxLength 1000
         * @pattern \S
         */
        extra?: string;
      };
      output: {
        /** The natural-language answer returned by Tongcheng Chengxin. */
        answer: string | null;
        /** The hotels returned by Tongcheng Chengxin. */
        hotels: Array<{
          /** The provider description for the result group. */
          groupDescription: string | null;
          /** The Tongcheng hotel resource ID. */
          id: string | null;
          /** The hotel name. */
          name: string | null;
          /** The current hotel price. */
          price: string | null;
          /** The hotel category or star description. */
          star: string | null;
          /** The numeric hotel star level when reported. */
          starLevel: string | null;
          /** The hotel review score. */
          score: string | null;
          /** The number of hotel reviews. */
          reviewCount: string | null;
          /** A short hotel description. */
          description: string | null;
          /** The hotel address. */
          address: string | null;
          /** The hotel city. */
          city: string | null;
          /** The hotel district or county. */
          district: string | null;
          /** The hotel business district. */
          businessDistrict: string | null;
          /** The hotel image URL. */
          imageUrl: string | null;
          /** The Tongcheng URL for viewing or booking the hotel. */
          bookingUrl: string | null;
        }>;
      };
    };
    /** Search Tongcheng Chengxin for train services by cities, stations, or train number. */
    "chengxin.search_trains": {
      input: {
        /**
         * The departure city.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        departure?: string;
        /**
         * The destination city.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        destination?: string;
        /**
         * The exact departure station.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        departureStation?: string;
        /**
         * The exact arrival station.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        arrivalStation?: string;
        /**
         * The exact train number, such as G1234.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        trainNumber?: string;
        /**
         * Additional travel requirements such as dates, time preferences, budget, service class, or traveler needs.
         * @minLength 1
         * @maxLength 1000
         * @pattern \S
         */
        extra?: string;
      };
      output: {
        /** The natural-language answer returned by Tongcheng Chengxin. */
        answer: string | null;
        /** The trains returned by Tongcheng Chengxin. */
        trains: Array<{
          /** The provider description for the result group. */
          groupDescription: string | null;
          /** The train number. */
          trainNumber: string | null;
          /** The train type. */
          trainType: string | null;
          /** The departure station name. */
          departureStation: string | null;
          /** The arrival station name. */
          arrivalStation: string | null;
          /** The departure date. */
          departureDate: string | null;
          /** The departure time. */
          departureTime: string | null;
          /** The arrival date. */
          arrivalDate: string | null;
          /** The arrival time. */
          arrivalTime: string | null;
          /** The train journey duration. */
          duration: string | null;
          /** The lowest reported train ticket price. */
          price: string | null;
          /** The available train ticket options. */
          tickets: Array<{
            /** The seat, cabin, or ticket type. */
            type: string | null;
            /** The ticket price as reported by Tongcheng Chengxin. */
            price: string | null;
            /** The remaining ticket availability when reported. */
            remaining: string | null;
          }>;
          /** Whether the itinerary is direct or a transfer itinerary. */
          tripType: string | null;
          /** The segments in a transfer itinerary. */
          segments: Array<{
            /** The segment transport type, such as TRAIN, FLIGHT, AIR, or BUS. */
            type: string | null;
            /** The train, flight, or bus service number. */
            number: string | null;
            /** The departure station or airport name. */
            departureStation: string | null;
            /** The departure airport terminal when applicable. */
            departureTerminal: string | null;
            /** The arrival station or airport name. */
            arrivalStation: string | null;
            /** The arrival airport terminal when applicable. */
            arrivalTerminal: string | null;
            /** The segment departure date. */
            departureDate: string | null;
            /** The segment departure time. */
            departureTime: string | null;
            /** The segment arrival date. */
            arrivalDate: string | null;
            /** The segment arrival time. */
            arrivalTime: string | null;
            /** The segment duration in minutes when reported. */
            durationMinutes: number | null;
            /** The seat or cabin name. */
            seat: string | null;
            /** The segment price. */
            price: string | null;
          }>;
          /** The waits between transfer itinerary segments. */
          transfers: Array<{
            /** The transfer city. */
            city: string | null;
            /** The human-readable transfer wait duration. */
            waitDuration: string | null;
          }>;
          /** The Tongcheng URL for viewing or booking the train. */
          bookingUrl: string | null;
        }>;
      };
    };
    /** Search Tongcheng Chengxin for multimodal transport when the traveler has not selected a transport type. */
    "chengxin.search_transport": {
      input: {
        /**
         * The departure city.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        departure: string;
        /**
         * The destination city.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        destination: string;
        /**
         * Additional travel requirements such as dates, time preferences, budget, service class, or traveler needs.
         * @minLength 1
         * @maxLength 1000
         * @pattern \S
         */
        extra?: string;
      };
      output: {
        /** The natural-language answer returned by Tongcheng Chengxin. */
        answer: string | null;
        /** The recommended flights. */
        flights: Array<{
          /**
           * The zero-based flight result group index.
           * @minimum 0
           */
          groupIndex: number;
          /** The provider description for the result group, such as cheapest, fastest, or recommended. */
          groupDescription: string | null;
          /** The flight number. */
          flightNumber: string | null;
          /** The departure city or location, especially for low-price destination recommendations. */
          departureName: string | null;
          /** The arrival city or location, especially for low-price destination recommendations. */
          arrivalName: string | null;
          /** The weekday description returned for low-price recommendations. */
          week: string | null;
          /** The airline name. */
          airline: string | null;
          /** The departure airport name. */
          departureAirport: string | null;
          /** The departure terminal. */
          departureTerminal: string | null;
          /** The arrival airport name. */
          arrivalAirport: string | null;
          /** The arrival terminal. */
          arrivalTerminal: string | null;
          /** The departure date. */
          departureDate: string | null;
          /** The departure time. */
          departureTime: string | null;
          /** The arrival date. */
          arrivalDate: string | null;
          /** The arrival time. */
          arrivalTime: string | null;
          /** The flight duration. */
          duration: string | null;
          /** The current flight price. */
          price: string | null;
          /** The current discount when reported. */
          discount: string | null;
          /** The original flight price when reported. */
          originalPrice: string | null;
          /** Whether the itinerary is direct or a transfer itinerary. */
          tripType: string | null;
          /** The segments in a transfer itinerary. */
          segments: Array<{
            /** The segment transport type, such as TRAIN, FLIGHT, AIR, or BUS. */
            type: string | null;
            /** The train, flight, or bus service number. */
            number: string | null;
            /** The departure station or airport name. */
            departureStation: string | null;
            /** The departure airport terminal when applicable. */
            departureTerminal: string | null;
            /** The arrival station or airport name. */
            arrivalStation: string | null;
            /** The arrival airport terminal when applicable. */
            arrivalTerminal: string | null;
            /** The segment departure date. */
            departureDate: string | null;
            /** The segment departure time. */
            departureTime: string | null;
            /** The segment arrival date. */
            arrivalDate: string | null;
            /** The segment arrival time. */
            arrivalTime: string | null;
            /** The segment duration in minutes when reported. */
            durationMinutes: number | null;
            /** The seat or cabin name. */
            seat: string | null;
            /** The segment price. */
            price: string | null;
          }>;
          /** The waits between transfer itinerary segments. */
          transfers: Array<{
            /** The transfer city. */
            city: string | null;
            /** The human-readable transfer wait duration. */
            waitDuration: string | null;
          }>;
          /** The Tongcheng URL for viewing or booking the flight. */
          bookingUrl: string | null;
        }>;
        /** The recommended trains. */
        trains: Array<{
          /** The provider description for the result group. */
          groupDescription: string | null;
          /** The train number. */
          trainNumber: string | null;
          /** The train type. */
          trainType: string | null;
          /** The departure station name. */
          departureStation: string | null;
          /** The arrival station name. */
          arrivalStation: string | null;
          /** The departure date. */
          departureDate: string | null;
          /** The departure time. */
          departureTime: string | null;
          /** The arrival date. */
          arrivalDate: string | null;
          /** The arrival time. */
          arrivalTime: string | null;
          /** The train journey duration. */
          duration: string | null;
          /** The lowest reported train ticket price. */
          price: string | null;
          /** The available train ticket options. */
          tickets: Array<{
            /** The seat, cabin, or ticket type. */
            type: string | null;
            /** The ticket price as reported by Tongcheng Chengxin. */
            price: string | null;
            /** The remaining ticket availability when reported. */
            remaining: string | null;
          }>;
          /** Whether the itinerary is direct or a transfer itinerary. */
          tripType: string | null;
          /** The segments in a transfer itinerary. */
          segments: Array<{
            /** The segment transport type, such as TRAIN, FLIGHT, AIR, or BUS. */
            type: string | null;
            /** The train, flight, or bus service number. */
            number: string | null;
            /** The departure station or airport name. */
            departureStation: string | null;
            /** The departure airport terminal when applicable. */
            departureTerminal: string | null;
            /** The arrival station or airport name. */
            arrivalStation: string | null;
            /** The arrival airport terminal when applicable. */
            arrivalTerminal: string | null;
            /** The segment departure date. */
            departureDate: string | null;
            /** The segment departure time. */
            departureTime: string | null;
            /** The segment arrival date. */
            arrivalDate: string | null;
            /** The segment arrival time. */
            arrivalTime: string | null;
            /** The segment duration in minutes when reported. */
            durationMinutes: number | null;
            /** The seat or cabin name. */
            seat: string | null;
            /** The segment price. */
            price: string | null;
          }>;
          /** The waits between transfer itinerary segments. */
          transfers: Array<{
            /** The transfer city. */
            city: string | null;
            /** The human-readable transfer wait duration. */
            waitDuration: string | null;
          }>;
          /** The Tongcheng URL for viewing or booking the train. */
          bookingUrl: string | null;
        }>;
        /** The recommended bus services. */
        buses: Array<{
          /** The provider description for the result group. */
          groupDescription: string | null;
          /** The coach or bus service number. */
          coachNumber: string | null;
          /** The coach or bus type. */
          coachType: string | null;
          /** The departure city. */
          departureCity: string | null;
          /** The arrival city. */
          arrivalCity: string | null;
          /** The departure bus station. */
          departureStation: string | null;
          /** The arrival bus station. */
          arrivalStation: string | null;
          /** The departure date. */
          departureDate: string | null;
          /** The departure time. */
          departureTime: string | null;
          /** The arrival date. */
          arrivalDate: string | null;
          /** The arrival time. */
          arrivalTime: string | null;
          /** The journey duration in minutes when reported. */
          durationMinutes: number | null;
          /** The human-readable journey duration. */
          duration: string | null;
          /** The bus ticket price. */
          price: string | null;
          /** The remaining bus ticket availability when reported. */
          remainingTickets: string | null;
          /** Whether the itinerary is direct or a transfer itinerary. */
          tripType: string | null;
          /** The segments in a transfer itinerary. */
          segments: Array<{
            /** The segment transport type, such as TRAIN, FLIGHT, AIR, or BUS. */
            type: string | null;
            /** The train, flight, or bus service number. */
            number: string | null;
            /** The departure station or airport name. */
            departureStation: string | null;
            /** The departure airport terminal when applicable. */
            departureTerminal: string | null;
            /** The arrival station or airport name. */
            arrivalStation: string | null;
            /** The arrival airport terminal when applicable. */
            arrivalTerminal: string | null;
            /** The segment departure date. */
            departureDate: string | null;
            /** The segment departure time. */
            departureTime: string | null;
            /** The segment arrival date. */
            arrivalDate: string | null;
            /** The segment arrival time. */
            arrivalTime: string | null;
            /** The segment duration in minutes when reported. */
            durationMinutes: number | null;
            /** The seat or cabin name. */
            seat: string | null;
            /** The segment price. */
            price: string | null;
          }>;
          /** The waits between transfer itinerary segments. */
          transfers: Array<{
            /** The transfer city. */
            city: string | null;
            /** The human-readable transfer wait duration. */
            waitDuration: string | null;
          }>;
          /** The Tongcheng URL for viewing or booking the bus service. */
          bookingUrl: string | null;
        }>;
        /** The ground transport segments suggested for air-rail or air-bus connections. */
        supplementalTransport: Array<{
          /**
           * The zero-based flight result group index.
           * @minimum 0
           */
          groupIndex: number;
          /** The provider description for the owning flight group. */
          groupDescription: string | null;
          /** How the supplemental segment connects with the flight. */
          direction: "to_departure_airport" | "from_arrival_airport" | null;
          /** The supplemental transport type, such as TRAIN or BUS. */
          type: string | null;
          /** The train or bus service number. */
          number: string | null;
          /** The departure station name. */
          departureStation: string | null;
          /** The arrival station name. */
          arrivalStation: string | null;
          /** The departure date. */
          departureDate: string | null;
          /** The departure time. */
          departureTime: string | null;
          /** The arrival date. */
          arrivalDate: string | null;
          /** The arrival time. */
          arrivalTime: string | null;
          /** The supplemental journey duration. */
          duration: string | null;
          /** The lowest reported supplemental transport price. */
          price: string | null;
          /** The available supplemental transport ticket options. */
          tickets: Array<{
            /** The seat, cabin, or ticket type. */
            type: string | null;
            /** The ticket price as reported by Tongcheng Chengxin. */
            price: string | null;
            /** The remaining ticket availability when reported. */
            remaining: string | null;
          }>;
          /** The Tongcheng URL for viewing or booking the supplemental transport segment. */
          bookingUrl: string | null;
        }>;
        /** The public transit routes returned for local ground transportation. */
        transitRoutes: Array<{
          /** The route departure name. */
          departure: string | null;
          /** The route destination name. */
          destination: string | null;
          /** The estimated arrival time when reported. */
          arrivalTime: string | null;
          /** The total route duration in seconds. */
          durationSeconds: number | null;
          /** The total route distance in meters. */
          distanceMeters: number | null;
          /** The total public transit price, with negative values omitted. */
          price: number | null;
          /** The ordered public transit steps. */
          steps: Array<{
            /** The step type, such as bus, subway, train, or walk. */
            type: string | null;
            /** The human-readable instructions for the step. */
            instructions: string | null;
            /** The step distance in meters. */
            distanceMeters: number | null;
            /** The step duration in seconds. */
            durationSeconds: number | null;
            /** The Tongcheng vehicle type code. */
            vehicleType: number | null;
            /** The public transit line name. */
            lineName: string | null;
            /** The service direction text. */
            direction: string | null;
            /** The boarding station. */
            departureStation: string | null;
            /** The alighting station. */
            arrivalStation: string | null;
            /** The number of stops. */
            stopCount: number | null;
            /** The first service time when reported. */
            firstDepartureTime: string | null;
            /** The last service time when reported. */
            lastDepartureTime: string | null;
          }>;
        }>;
      };
    };
    /** Search Tongcheng Chengxin for vacation products, travel plans, hotels, attractions, and transport recommendations. */
    "chengxin.search_travel": {
      input: {
        /**
         * The optional departure city.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        departure?: string;
        /**
         * The destination city or region.
         * @minLength 1
         * @maxLength 500
         * @pattern \S
         */
        destination: string;
        /**
         * Additional travel requirements such as dates, time preferences, budget, service class, or traveler needs.
         * @minLength 1
         * @maxLength 1000
         * @pattern \S
         */
        extra?: string;
      };
      output: {
        /** The natural-language answer returned by Tongcheng Chengxin. */
        answer: string | null;
        /** The recommended flights. */
        flights: Array<{
          /**
           * The zero-based flight result group index.
           * @minimum 0
           */
          groupIndex: number;
          /** The provider description for the result group, such as cheapest, fastest, or recommended. */
          groupDescription: string | null;
          /** The flight number. */
          flightNumber: string | null;
          /** The departure city or location, especially for low-price destination recommendations. */
          departureName: string | null;
          /** The arrival city or location, especially for low-price destination recommendations. */
          arrivalName: string | null;
          /** The weekday description returned for low-price recommendations. */
          week: string | null;
          /** The airline name. */
          airline: string | null;
          /** The departure airport name. */
          departureAirport: string | null;
          /** The departure terminal. */
          departureTerminal: string | null;
          /** The arrival airport name. */
          arrivalAirport: string | null;
          /** The arrival terminal. */
          arrivalTerminal: string | null;
          /** The departure date. */
          departureDate: string | null;
          /** The departure time. */
          departureTime: string | null;
          /** The arrival date. */
          arrivalDate: string | null;
          /** The arrival time. */
          arrivalTime: string | null;
          /** The flight duration. */
          duration: string | null;
          /** The current flight price. */
          price: string | null;
          /** The current discount when reported. */
          discount: string | null;
          /** The original flight price when reported. */
          originalPrice: string | null;
          /** Whether the itinerary is direct or a transfer itinerary. */
          tripType: string | null;
          /** The segments in a transfer itinerary. */
          segments: Array<{
            /** The segment transport type, such as TRAIN, FLIGHT, AIR, or BUS. */
            type: string | null;
            /** The train, flight, or bus service number. */
            number: string | null;
            /** The departure station or airport name. */
            departureStation: string | null;
            /** The departure airport terminal when applicable. */
            departureTerminal: string | null;
            /** The arrival station or airport name. */
            arrivalStation: string | null;
            /** The arrival airport terminal when applicable. */
            arrivalTerminal: string | null;
            /** The segment departure date. */
            departureDate: string | null;
            /** The segment departure time. */
            departureTime: string | null;
            /** The segment arrival date. */
            arrivalDate: string | null;
            /** The segment arrival time. */
            arrivalTime: string | null;
            /** The segment duration in minutes when reported. */
            durationMinutes: number | null;
            /** The seat or cabin name. */
            seat: string | null;
            /** The segment price. */
            price: string | null;
          }>;
          /** The waits between transfer itinerary segments. */
          transfers: Array<{
            /** The transfer city. */
            city: string | null;
            /** The human-readable transfer wait duration. */
            waitDuration: string | null;
          }>;
          /** The Tongcheng URL for viewing or booking the flight. */
          bookingUrl: string | null;
        }>;
        /** The recommended trains. */
        trains: Array<{
          /** The provider description for the result group. */
          groupDescription: string | null;
          /** The train number. */
          trainNumber: string | null;
          /** The train type. */
          trainType: string | null;
          /** The departure station name. */
          departureStation: string | null;
          /** The arrival station name. */
          arrivalStation: string | null;
          /** The departure date. */
          departureDate: string | null;
          /** The departure time. */
          departureTime: string | null;
          /** The arrival date. */
          arrivalDate: string | null;
          /** The arrival time. */
          arrivalTime: string | null;
          /** The train journey duration. */
          duration: string | null;
          /** The lowest reported train ticket price. */
          price: string | null;
          /** The available train ticket options. */
          tickets: Array<{
            /** The seat, cabin, or ticket type. */
            type: string | null;
            /** The ticket price as reported by Tongcheng Chengxin. */
            price: string | null;
            /** The remaining ticket availability when reported. */
            remaining: string | null;
          }>;
          /** Whether the itinerary is direct or a transfer itinerary. */
          tripType: string | null;
          /** The segments in a transfer itinerary. */
          segments: Array<{
            /** The segment transport type, such as TRAIN, FLIGHT, AIR, or BUS. */
            type: string | null;
            /** The train, flight, or bus service number. */
            number: string | null;
            /** The departure station or airport name. */
            departureStation: string | null;
            /** The departure airport terminal when applicable. */
            departureTerminal: string | null;
            /** The arrival station or airport name. */
            arrivalStation: string | null;
            /** The arrival airport terminal when applicable. */
            arrivalTerminal: string | null;
            /** The segment departure date. */
            departureDate: string | null;
            /** The segment departure time. */
            departureTime: string | null;
            /** The segment arrival date. */
            arrivalDate: string | null;
            /** The segment arrival time. */
            arrivalTime: string | null;
            /** The segment duration in minutes when reported. */
            durationMinutes: number | null;
            /** The seat or cabin name. */
            seat: string | null;
            /** The segment price. */
            price: string | null;
          }>;
          /** The waits between transfer itinerary segments. */
          transfers: Array<{
            /** The transfer city. */
            city: string | null;
            /** The human-readable transfer wait duration. */
            waitDuration: string | null;
          }>;
          /** The Tongcheng URL for viewing or booking the train. */
          bookingUrl: string | null;
        }>;
        /** The recommended bus services. */
        buses: Array<{
          /** The provider description for the result group. */
          groupDescription: string | null;
          /** The coach or bus service number. */
          coachNumber: string | null;
          /** The coach or bus type. */
          coachType: string | null;
          /** The departure city. */
          departureCity: string | null;
          /** The arrival city. */
          arrivalCity: string | null;
          /** The departure bus station. */
          departureStation: string | null;
          /** The arrival bus station. */
          arrivalStation: string | null;
          /** The departure date. */
          departureDate: string | null;
          /** The departure time. */
          departureTime: string | null;
          /** The arrival date. */
          arrivalDate: string | null;
          /** The arrival time. */
          arrivalTime: string | null;
          /** The journey duration in minutes when reported. */
          durationMinutes: number | null;
          /** The human-readable journey duration. */
          duration: string | null;
          /** The bus ticket price. */
          price: string | null;
          /** The remaining bus ticket availability when reported. */
          remainingTickets: string | null;
          /** Whether the itinerary is direct or a transfer itinerary. */
          tripType: string | null;
          /** The segments in a transfer itinerary. */
          segments: Array<{
            /** The segment transport type, such as TRAIN, FLIGHT, AIR, or BUS. */
            type: string | null;
            /** The train, flight, or bus service number. */
            number: string | null;
            /** The departure station or airport name. */
            departureStation: string | null;
            /** The departure airport terminal when applicable. */
            departureTerminal: string | null;
            /** The arrival station or airport name. */
            arrivalStation: string | null;
            /** The arrival airport terminal when applicable. */
            arrivalTerminal: string | null;
            /** The segment departure date. */
            departureDate: string | null;
            /** The segment departure time. */
            departureTime: string | null;
            /** The segment arrival date. */
            arrivalDate: string | null;
            /** The segment arrival time. */
            arrivalTime: string | null;
            /** The segment duration in minutes when reported. */
            durationMinutes: number | null;
            /** The seat or cabin name. */
            seat: string | null;
            /** The segment price. */
            price: string | null;
          }>;
          /** The waits between transfer itinerary segments. */
          transfers: Array<{
            /** The transfer city. */
            city: string | null;
            /** The human-readable transfer wait duration. */
            waitDuration: string | null;
          }>;
          /** The Tongcheng URL for viewing or booking the bus service. */
          bookingUrl: string | null;
        }>;
        /** The ground transport segments suggested for air-rail or air-bus connections. */
        supplementalTransport: Array<{
          /**
           * The zero-based flight result group index.
           * @minimum 0
           */
          groupIndex: number;
          /** The provider description for the owning flight group. */
          groupDescription: string | null;
          /** How the supplemental segment connects with the flight. */
          direction: "to_departure_airport" | "from_arrival_airport" | null;
          /** The supplemental transport type, such as TRAIN or BUS. */
          type: string | null;
          /** The train or bus service number. */
          number: string | null;
          /** The departure station name. */
          departureStation: string | null;
          /** The arrival station name. */
          arrivalStation: string | null;
          /** The departure date. */
          departureDate: string | null;
          /** The departure time. */
          departureTime: string | null;
          /** The arrival date. */
          arrivalDate: string | null;
          /** The arrival time. */
          arrivalTime: string | null;
          /** The supplemental journey duration. */
          duration: string | null;
          /** The lowest reported supplemental transport price. */
          price: string | null;
          /** The available supplemental transport ticket options. */
          tickets: Array<{
            /** The seat, cabin, or ticket type. */
            type: string | null;
            /** The ticket price as reported by Tongcheng Chengxin. */
            price: string | null;
            /** The remaining ticket availability when reported. */
            remaining: string | null;
          }>;
          /** The Tongcheng URL for viewing or booking the supplemental transport segment. */
          bookingUrl: string | null;
        }>;
        /** The recommended hotels. */
        hotels: Array<{
          /** The provider description for the result group. */
          groupDescription: string | null;
          /** The Tongcheng hotel resource ID. */
          id: string | null;
          /** The hotel name. */
          name: string | null;
          /** The current hotel price. */
          price: string | null;
          /** The hotel category or star description. */
          star: string | null;
          /** The numeric hotel star level when reported. */
          starLevel: string | null;
          /** The hotel review score. */
          score: string | null;
          /** The number of hotel reviews. */
          reviewCount: string | null;
          /** A short hotel description. */
          description: string | null;
          /** The hotel address. */
          address: string | null;
          /** The hotel city. */
          city: string | null;
          /** The hotel district or county. */
          district: string | null;
          /** The hotel business district. */
          businessDistrict: string | null;
          /** The hotel image URL. */
          imageUrl: string | null;
          /** The Tongcheng URL for viewing or booking the hotel. */
          bookingUrl: string | null;
        }>;
        /** The recommended attractions and scenic areas. */
        attractions: Array<{
          /** The provider description for the result group. */
          groupDescription: string | null;
          /** The Tongcheng attraction resource ID. */
          id: string | null;
          /** The attraction or scenic area name. */
          name: string | null;
          /** The destination city. */
          city: string | null;
          /** The attraction rating or grade. */
          star: string | null;
          /** The attraction review score. */
          score: string | null;
          /** The number of attraction reviews. */
          reviewCount: string | null;
          /** The current admission price. */
          price: string | null;
          /** A short attraction description. */
          description: string | null;
          /** The attraction address. */
          address: string | null;
          /** The attraction theme or category. */
          theme: string | null;
          /** The attraction opening hours. */
          openTime: string | null;
          /** The recommended visit duration. */
          bestPlayTime: string | null;
          /** The provider ranking title when reported. */
          rankTitle: string | null;
          /** The attraction facilities reported by Tongcheng Chengxin. */
          facilities: Array<string>;
          /** The attraction image URL. */
          imageUrl: string | null;
          /** The Tongcheng URL for viewing or booking the attraction. */
          bookingUrl: string | null;
        }>;
        /** The recommended vacation and travel products. */
        products: Array<{
          /** The provider description for the result group. */
          groupDescription: string | null;
          /** The Tongcheng travel product resource ID. */
          id: string | null;
          /** The travel product name. */
          name: string | null;
          /** The current travel product price. */
          price: string | null;
          /** The travel product review score. */
          score: string | null;
          /** The number of travel product reviews. */
          reviewCount: string | null;
          /** The labels attached to the travel product. */
          labels: Array<string>;
          /** The destinations covered by the travel product. */
          destinations: Array<string>;
          /** The travel product image URL. */
          imageUrl: string | null;
          /** The Tongcheng URL for viewing or booking the travel product. */
          bookingUrl: string | null;
        }>;
        /** The provider-defined itinerary plans returned by Tongcheng Chengxin. */
        plans: Array<Record<string, unknown>>;
        /** The travel guide articles returned by Tongcheng Chengxin. */
        articles: Array<{
          /** The guide article title. */
          name: string | null;
          /** The guide article author or nickname. */
          author: string | null;
          /** The Tongcheng URL for opening the guide article. */
          url: string | null;
        }>;
      };
    };
  }
}
