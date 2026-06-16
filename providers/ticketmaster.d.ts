import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Execute a Ticketmaster Season Ticketing command and optionally poll until the command finishes. */
    "ticketmaster.execute_season_ticketing_command": {
      input: {
        /** The Season Ticketing product path segment, such as sth-customer. */
        product?: string;
        /** The request header for the command. */
        header: {
          /**
           * The Season Ticketing header version.
           * @exclusiveMinimum 0
           */
          ver?: number;
          /**
           * The upstream source system name.
           * @minLength 1
           */
          srcSysName: string;
          /**
           * The upstream source system type.
           * @exclusiveMinimum 0
           */
          srcSysType?: number;
          /**
           * The upstream Archtics version identifier.
           * @minLength 1
           */
          archticsVersion: string;
        };
        /** The command payload. */
        command: {
          /** The Season Ticketing command to execute. */
          cmd: "ping" | "customer_query" | "seats_sold" | "event_search" | "event_details" | "get_attendance";
          /**
           * The upstream Season Ticketing DSN value.
           * @minLength 1
           */
          dsn: string;
          /**
           * The upstream user identifier.
           * @minLength 1
           */
          uid: string;
          /** Additional command-specific parameters forwarded to Ticketmaster. */
          additionalParams?: Record<string, unknown>;
        };
        /** The upstream cookies used for polling an accepted command. */
        cookies?: Record<string, string>;
        /**
         * The maximum number of polling attempts when the API returns 202 Accepted.
         * @minimum 1
         * @maximum 20
         */
        maxPollAttempts?: number;
        /**
         * The delay between polling attempts in milliseconds.
         * @minimum 0
         * @maximum 10000
         */
        pollDelayMs?: number;
      };
      output: {
        /** The upstream HTTP status code. */
        statusCode: number;
        /** Whether the command is still queued upstream. */
        queued: boolean;
        /** The upstream command status string. */
        status?: string | null;
        /** The upstream message string. */
        message?: string | null;
        /** The upstream error code string. */
        errorCode?: string | null;
        /** The cookies that can be reused for another polling request. */
        cookies: Record<string, string>;
        /** The raw command result payload when present. */
        data?: Record<string, unknown> | null;
        /** The raw Ticketmaster Season Ticketing response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the details for a specific Ticketmaster attraction by ID. */
    "ticketmaster.get_attraction_details": {
      input: {
        /**
         * The Ticketmaster entity identifier.
         * @minLength 1
         */
        id: string;
        /** The locale in ISO code format, such as en-us or a comma-separated list like en-us,en,*. */
        locale?: string;
        /** The region or domain filter, such as US, CA, AU, or NZ. */
        domain?: string;
      };
      output: {
        /** The Ticketmaster attraction. */
        attraction: {
          /** The Ticketmaster attraction identifier. */
          id: string;
          /** The attraction name. */
          name?: string | null;
          /** The Ticketmaster entity type. */
          type?: string | null;
          /** The public Ticketmaster attraction URL. */
          url?: string | null;
          /** The locale of the attraction payload. */
          locale?: string | null;
          /** The attraction images. */
          images: Array<{
            /** The image URL. */
            url: string;
            /** The image ratio, such as 16_9. */
            ratio?: string | null;
            /** The image width in pixels. */
            width?: number | null;
            /** The image height in pixels. */
            height?: number | null;
            /** Whether the image is marked as a fallback asset. */
            fallback?: boolean | null;
            /** The image attribution string when present. */
            attribution?: string | null;
          }>;
          /** The raw Ticketmaster upcoming-events object. */
          upcomingEvents?: Record<string, unknown> | null;
          /** The normalized attraction classifications. */
          classifications: Array<{
            /** Whether the classification is marked as primary. */
            primary?: boolean | null;
            /** The segment reference for this classification. */
            segment?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The genre reference for this classification. */
            genre?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The sub-genre reference for this classification. */
            subGenre?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The type reference for this classification. */
            type?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The sub-type reference for this classification. */
            subType?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The raw classification object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw external-links object when provided. */
          externalLinks?: Record<string, unknown> | null;
          /** The raw Ticketmaster attraction object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Search Discovery API attractions for artists, teams, performers, and other attraction entities. */
    "ticketmaster.get_attractions": {
      input: {
        /** A comma-separated list of Ticketmaster attraction IDs. */
        attractionId?: string;
        /** A search keyword for matching attractions. */
        keyword?: string;
        /** The source filter, such as ticketmaster, universe, frontgate, or tmr. */
        source?: string;
        /**
         * The zero-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 200
         */
        size?: number;
        /** The sort expression, such as name,asc. */
        sort?: string;
        /**
         * The ISO 3166-1 alpha-2 country code to filter by.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /** The classification name to filter by. */
        classificationName?: string;
        /** A comma-separated list of segment identifiers. */
        segmentId?: string;
        /** A comma-separated list of genre identifiers. */
        genreId?: string;
        /** A comma-separated list of sub-genre identifiers. */
        subGenreId?: string;
        /** A comma-separated list of sub-segment identifiers. */
        subSegmentId?: string;
        /** The Ticketmaster entity type filter. */
        type?: string;
        /** Whether to include Ticketmaster test entities. */
        includeTest?: boolean | "yes" | "no" | "only";
      };
      output: {
        /** The attractions returned by the search. */
        attractions: Array<{
          /** The Ticketmaster attraction identifier. */
          id: string;
          /** The attraction name. */
          name?: string | null;
          /** The Ticketmaster entity type. */
          type?: string | null;
          /** The public Ticketmaster attraction URL. */
          url?: string | null;
          /** The locale of the attraction payload. */
          locale?: string | null;
          /** The attraction images. */
          images: Array<{
            /** The image URL. */
            url: string;
            /** The image ratio, such as 16_9. */
            ratio?: string | null;
            /** The image width in pixels. */
            width?: number | null;
            /** The image height in pixels. */
            height?: number | null;
            /** Whether the image is marked as a fallback asset. */
            fallback?: boolean | null;
            /** The image attribution string when present. */
            attribution?: string | null;
          }>;
          /** The raw Ticketmaster upcoming-events object. */
          upcomingEvents?: Record<string, unknown> | null;
          /** The normalized attraction classifications. */
          classifications: Array<{
            /** Whether the classification is marked as primary. */
            primary?: boolean | null;
            /** The segment reference for this classification. */
            segment?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The genre reference for this classification. */
            genre?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The sub-genre reference for this classification. */
            subGenre?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The type reference for this classification. */
            type?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The sub-type reference for this classification. */
            subType?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The raw classification object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw external-links object when provided. */
          externalLinks?: Record<string, unknown> | null;
          /** The raw Ticketmaster attraction object. */
          raw: Record<string, unknown>;
        }>;
        /** The pagination metadata. */
        page?: {
          /** The number of items returned in the current page. */
          size: number;
          /** The total number of items available. */
          totalElements: number;
          /** The total number of pages available. */
          totalPages: number;
          /** The zero-based page index. */
          number: number;
        } | null;
        /** The HATEOAS links object. */
        links?: Record<string, unknown> | null;
      };
    };
    /** Get the details for a specific Ticketmaster classification by ID. */
    "ticketmaster.get_classification_details": {
      input: {
        /**
         * The Ticketmaster entity identifier.
         * @minLength 1
         */
        id: string;
        /** The locale in ISO code format, such as en-us or a comma-separated list like en-us,en,*. */
        locale?: string;
        /** The region or domain filter, such as US, CA, AU, or NZ. */
        domain?: string;
      };
      output: {
        /** The Ticketmaster classification. */
        classification: {
          /** The Ticketmaster classification identifier. */
          id: string;
          /** The classification name. */
          name?: string | null;
          /** The locale of the classification payload. */
          locale?: string | null;
          /** Whether the classification is marked as primary. */
          primary?: boolean | null;
          /** The segment reference. */
          segment?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The genre reference. */
          genre?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The sub-genre reference. */
          subGenre?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The type reference. */
          type?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The sub-type reference. */
          subType?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The raw Ticketmaster classification object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Discovery API classifications for segments, genres, and sub-genres. */
    "ticketmaster.get_classifications": {
      input: {
        /** The Ticketmaster classification identifier. */
        classificationId?: string;
        /**
         * The ISO 3166-1 alpha-2 country code to filter by.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /** The locale in ISO code format, such as en-us or a comma-separated list like en-us,en,*. */
        locale?: string;
        /** The region or domain filter, such as US, CA, AU, or NZ. */
        domain?: string;
        /**
         * The zero-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 200
         */
        size?: number;
      };
      output: {
        /** The classifications returned by the query. */
        classifications: Array<{
          /** The Ticketmaster classification identifier. */
          id: string;
          /** The classification name. */
          name?: string | null;
          /** The locale of the classification payload. */
          locale?: string | null;
          /** Whether the classification is marked as primary. */
          primary?: boolean | null;
          /** The segment reference. */
          segment?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The genre reference. */
          genre?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The sub-genre reference. */
          subGenre?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The type reference. */
          type?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The sub-type reference. */
          subType?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The raw Ticketmaster classification object. */
          raw: Record<string, unknown>;
        }>;
        /** The pagination metadata. */
        page?: {
          /** The number of items returned in the current page. */
          size: number;
          /** The total number of items available. */
          totalElements: number;
          /** The total number of pages available. */
          totalPages: number;
          /** The zero-based page index. */
          number: number;
        } | null;
        /** The HATEOAS links object. */
        links?: Record<string, unknown> | null;
      };
    };
    /** Get the details for a specific Ticketmaster event by ID. */
    "ticketmaster.get_event_details": {
      input: {
        /**
         * The Ticketmaster entity identifier.
         * @minLength 1
         */
        id: string;
        /** The locale in ISO code format, such as en-us or a comma-separated list like en-us,en,*. */
        locale?: string;
        /** The region or domain filter, such as US, CA, AU, or NZ. */
        domain?: string;
      };
      output: {
        /** The Ticketmaster event. */
        event: {
          /** The Ticketmaster event identifier. */
          id: string;
          /** The event name. */
          name?: string | null;
          /** The Ticketmaster entity type. */
          type?: string | null;
          /** The public Ticketmaster event URL. */
          url?: string | null;
          /** The locale of the event payload. */
          locale?: string | null;
          /** The event info text. */
          info?: string | null;
          /** The event please-note text. */
          pleaseNote?: string | null;
          /** The raw Ticketmaster dates object for the event. */
          dates?: Record<string, unknown> | null;
          /** The raw Ticketmaster sales object for the event. */
          sales?: Record<string, unknown> | null;
          /** The raw Ticketmaster price ranges for the event. */
          priceRanges: Array<Record<string, unknown>>;
          /** The event images. */
          images: Array<{
            /** The image URL. */
            url: string;
            /** The image ratio, such as 16_9. */
            ratio?: string | null;
            /** The image width in pixels. */
            width?: number | null;
            /** The image height in pixels. */
            height?: number | null;
            /** Whether the image is marked as a fallback asset. */
            fallback?: boolean | null;
            /** The image attribution string when present. */
            attribution?: string | null;
          }>;
          /** The normalized event classifications. */
          classifications: Array<{
            /** Whether the classification is marked as primary. */
            primary?: boolean | null;
            /** The segment reference for this classification. */
            segment?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The genre reference for this classification. */
            genre?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The sub-genre reference for this classification. */
            subGenre?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The type reference for this classification. */
            type?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The sub-type reference for this classification. */
            subType?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The raw classification object. */
            raw: Record<string, unknown>;
          }>;
          /** The embedded venue references. */
          venues: Array<{
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          }>;
          /** The embedded attraction references. */
          attractions: Array<{
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          }>;
          /** The raw Ticketmaster event object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the image set for a specific Ticketmaster event. */
    "ticketmaster.get_event_images": {
      input: {
        /**
         * The Ticketmaster event identifier.
         * @minLength 1
         */
        id: string;
        /** The locale in ISO code format, such as en-us or a comma-separated list like en-us,en,*. */
        locale?: string;
        /** The region or domain filter, such as US, CA, AU, or NZ. */
        domain?: string;
      };
      output: {
        /** The Ticketmaster event identifier. */
        eventId: string;
        /** The event images. */
        images: Array<{
          /** The image URL. */
          url: string;
          /** The image ratio, such as 16_9. */
          ratio?: string | null;
          /** The image width in pixels. */
          width?: number | null;
          /** The image height in pixels. */
          height?: number | null;
          /** Whether the image is marked as a fallback asset. */
          fallback?: boolean | null;
          /** The image attribution string when present. */
          attribution?: string | null;
        }>;
        /** The raw Ticketmaster event-images payload. */
        raw?: Record<string, unknown> | null;
      };
    };
    /** Search Discovery API events with Ticketmaster filters for keyword, location, date, and taxonomy fields. */
    "ticketmaster.get_events": {
      input: {
        /** A comma-separated list of Ticketmaster event IDs. */
        id?: string;
        /** A search keyword for matching events. */
        keyword?: string;
        /** A comma-separated list of Ticketmaster attraction IDs. */
        attractionId?: string;
        /** A comma-separated list of Ticketmaster venue IDs. */
        venueId?: string;
        /** The postal code to search around. */
        postalCode?: string;
        /** A latitude and longitude pair in the form latitude,longitude. */
        latlong?: string;
        /** A geohash used for location-based search. */
        geoPoint?: string;
        /**
         * The search radius around the location filter.
         * @minimum 0
         */
        radius?: number;
        /** The distance unit for radius-based filters. */
        unit?: "miles" | "km";
        /** The locale in ISO code format, such as en-us or a comma-separated list like en-us,en,*. */
        locale?: string;
        /** The source filter, such as ticketmaster, universe, frontgate, or tmr. */
        source?: string;
        /**
         * The zero-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 200
         */
        size?: number;
        /** The sort expression returned by Ticketmaster, such as date,asc. */
        sort?: string;
        /** The city name to filter by. */
        city?: string;
        /** The state or province code to filter by. */
        stateCode?: string;
        /**
         * The ISO 3166-1 alpha-2 country code to filter by.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /** A comma-separated list of DMA identifiers. */
        dmaId?: string;
        /** A comma-separated list of market identifiers. */
        marketId?: string;
        /** The event start date range lower bound in ISO-8601 format. */
        startDateTime?: string;
        /** The event start date range upper bound in ISO-8601 format. */
        endDateTime?: string;
        /** The event on-sale start lower bound in ISO-8601 format. */
        onsaleStartDateTime?: string;
        /** The event on-sale end upper bound in ISO-8601 format. */
        onsaleEndDateTime?: string;
        /** A comma-separated list of segment identifiers. */
        segmentId?: string;
        /** The segment name to filter by. */
        segmentName?: string;
        /** A comma-separated list of classification identifiers. */
        classificationId?: string;
        /** The classification name to filter by. */
        classificationName?: string;
        /** A comma-separated list of genre identifiers. */
        genreId?: string;
        /** A comma-separated list of sub-genre identifiers. */
        subGenreId?: string;
        /** A comma-separated list of promoter identifiers. */
        promoterId?: string;
        /** Whether to include spellcheck suggestions in the response. */
        includeSpellcheck?: "yes" | "no";
        /** Whether to include family-friendly events. */
        includeFamily?: "yes" | "no" | "only";
        /** A comma-separated list of type identifiers. */
        typeId?: string;
        /** A comma-separated list of sub-type identifiers. */
        subTypeId?: string;
      };
      output: {
        /** The events returned by the search. */
        events: Array<{
          /** The Ticketmaster event identifier. */
          id: string;
          /** The event name. */
          name?: string | null;
          /** The Ticketmaster entity type. */
          type?: string | null;
          /** The public Ticketmaster event URL. */
          url?: string | null;
          /** The locale of the event payload. */
          locale?: string | null;
          /** The event info text. */
          info?: string | null;
          /** The event please-note text. */
          pleaseNote?: string | null;
          /** The raw Ticketmaster dates object for the event. */
          dates?: Record<string, unknown> | null;
          /** The raw Ticketmaster sales object for the event. */
          sales?: Record<string, unknown> | null;
          /** The raw Ticketmaster price ranges for the event. */
          priceRanges: Array<Record<string, unknown>>;
          /** The event images. */
          images: Array<{
            /** The image URL. */
            url: string;
            /** The image ratio, such as 16_9. */
            ratio?: string | null;
            /** The image width in pixels. */
            width?: number | null;
            /** The image height in pixels. */
            height?: number | null;
            /** Whether the image is marked as a fallback asset. */
            fallback?: boolean | null;
            /** The image attribution string when present. */
            attribution?: string | null;
          }>;
          /** The normalized event classifications. */
          classifications: Array<{
            /** Whether the classification is marked as primary. */
            primary?: boolean | null;
            /** The segment reference for this classification. */
            segment?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The genre reference for this classification. */
            genre?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The sub-genre reference for this classification. */
            subGenre?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The type reference for this classification. */
            type?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The sub-type reference for this classification. */
            subType?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The raw classification object. */
            raw: Record<string, unknown>;
          }>;
          /** The embedded venue references. */
          venues: Array<{
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          }>;
          /** The embedded attraction references. */
          attractions: Array<{
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          }>;
          /** The raw Ticketmaster event object. */
          raw: Record<string, unknown>;
        }>;
        /** The pagination metadata. */
        page?: {
          /** The number of items returned in the current page. */
          size: number;
          /** The total number of items available. */
          totalElements: number;
          /** The total number of pages available. */
          totalPages: number;
          /** The zero-based page index. */
          number: number;
        } | null;
        /** The HATEOAS links object. */
        links?: Record<string, unknown> | null;
        /** The raw spellcheck object when the API returns it. */
        spellcheck?: Record<string, unknown> | null;
      };
    };
    /** Get the details for a specific Ticketmaster genre by ID. */
    "ticketmaster.get_genre_details": {
      input: {
        /**
         * The Ticketmaster entity identifier.
         * @minLength 1
         */
        id: string;
        /** The locale in ISO code format, such as en-us or a comma-separated list like en-us,en,*. */
        locale?: string;
        /** The region or domain filter, such as US, CA, AU, or NZ. */
        domain?: string;
      };
      output: {
        /** The Ticketmaster genre. */
        genre: {
          /** The Ticketmaster classification identifier. */
          id: string;
          /** The classification name. */
          name?: string | null;
          /** The locale of the classification payload. */
          locale?: string | null;
          /** Whether the classification is marked as primary. */
          primary?: boolean | null;
          /** The segment reference. */
          segment?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The genre reference. */
          genre?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The sub-genre reference. */
          subGenre?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The type reference. */
          type?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The sub-type reference. */
          subType?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The raw Ticketmaster classification object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a section-map image for a Ticketmaster event through the Partner Availability API. */
    "ticketmaster.get_section_map_image": {
      input: {
        /**
         * The Ticketmaster event identifier used by the Availability API.
         * @minLength 1
         */
        eventId: string;
        /** The upstream system identifier required by the section-map endpoint. */
        systemId: "HOST" | "MFX";
        /** The place identifier used by the section-map endpoint. */
        placeId?: string;
        /** The section names to highlight on the map image. */
        sectionNames?: Array<string>;
        /** The required MFX domain value when systemId is MFX. */
        domain?: string;
        /**
         * The rendered image width in pixels.
         * @minimum 1
         */
        width?: number;
        /**
         * The pin width in pixels.
         * @minimum 1
         */
        pinWidth?: number;
        /** Whether to render section labels on the map image. */
        showLabels?: boolean;
      };
      output: {
        /** Whether the section-map image was returned. */
        imageAvailable: boolean;
        /** The image content type when an image is returned. */
        contentType?: string | null;
        /** The base64-encoded image payload when an image is returned. */
        imageBase64?: string | null;
      };
    };
    /** Get the details for a specific Ticketmaster segment by ID. */
    "ticketmaster.get_segment_details": {
      input: {
        /**
         * The Ticketmaster entity identifier.
         * @minLength 1
         */
        id: string;
        /** The locale in ISO code format, such as en-us or a comma-separated list like en-us,en,*. */
        locale?: string;
        /** The region or domain filter, such as US, CA, AU, or NZ. */
        domain?: string;
      };
      output: {
        /** The Ticketmaster segment. */
        segment: {
          /** The Ticketmaster classification identifier. */
          id: string;
          /** The classification name. */
          name?: string | null;
          /** The locale of the classification payload. */
          locale?: string | null;
          /** Whether the classification is marked as primary. */
          primary?: boolean | null;
          /** The segment reference. */
          segment?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The genre reference. */
          genre?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The sub-genre reference. */
          subGenre?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The type reference. */
          type?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The sub-type reference. */
          subType?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The raw Ticketmaster classification object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the details for a specific Ticketmaster sub-genre by ID. */
    "ticketmaster.get_subgenre_details": {
      input: {
        /**
         * The Ticketmaster entity identifier.
         * @minLength 1
         */
        id: string;
        /** The locale in ISO code format, such as en-us or a comma-separated list like en-us,en,*. */
        locale?: string;
        /** The region or domain filter, such as US, CA, AU, or NZ. */
        domain?: string;
      };
      output: {
        /** The Ticketmaster sub-genre. */
        subGenre: {
          /** The Ticketmaster classification identifier. */
          id: string;
          /** The classification name. */
          name?: string | null;
          /** The locale of the classification payload. */
          locale?: string | null;
          /** Whether the classification is marked as primary. */
          primary?: boolean | null;
          /** The segment reference. */
          segment?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The genre reference. */
          genre?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The sub-genre reference. */
          subGenre?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The type reference. */
          type?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The sub-type reference. */
          subType?: {
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          } | null;
          /** The raw Ticketmaster classification object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get Discovery API search suggestions across events, venues, and attractions. */
    "ticketmaster.get_suggestions": {
      input: {
        /** The partial keyword used to generate search suggestions. */
        keyword?: string;
        /** The source filter, such as ticketmaster, universe, frontgate, or tmr. */
        source?: string;
        /** The locale in ISO code format, such as en-us or a comma-separated list like en-us,en,*. */
        locale?: string;
        /**
         * The ISO 3166-1 alpha-2 country code to filter by.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /** A latitude and longitude pair in the form latitude,longitude. */
        latlong?: string;
        /** A geohash used for location-based suggestion search. */
        geoPoint?: string;
        /**
         * The search radius around the location filter.
         * @minimum 0
         */
        radius?: number;
        /** The distance unit for radius-based filters. */
        unit?: "miles" | "km";
        /**
         * The number of suggestions per entity type.
         * @minimum 1
         * @maximum 200
         */
        size?: number;
        /** A comma-separated list of segment identifiers. */
        segmentId?: string;
        /** Whether to include TBA events in the suggestion results. */
        includeTBA?: "yes" | "no" | "only";
        /** Whether to include TBD events in the suggestion results. */
        includeTBD?: "yes" | "no" | "only";
        /** Whether to enable fuzzy search matching. */
        includeFuzzy?: "yes" | "no";
        /** Whether to include spellcheck information. */
        includeSpellcheck?: "yes" | "no";
        /** The client visibility filter value. */
        clientVisibility?: string;
        /** The region or domain filter, such as US, CA, AU, or NZ. */
        domain?: string;
      };
      output: {
        /** The suggested events. */
        events: Array<{
          /** The Ticketmaster event identifier. */
          id: string;
          /** The event name. */
          name?: string | null;
          /** The Ticketmaster entity type. */
          type?: string | null;
          /** The public Ticketmaster event URL. */
          url?: string | null;
          /** The locale of the event payload. */
          locale?: string | null;
          /** The event info text. */
          info?: string | null;
          /** The event please-note text. */
          pleaseNote?: string | null;
          /** The raw Ticketmaster dates object for the event. */
          dates?: Record<string, unknown> | null;
          /** The raw Ticketmaster sales object for the event. */
          sales?: Record<string, unknown> | null;
          /** The raw Ticketmaster price ranges for the event. */
          priceRanges: Array<Record<string, unknown>>;
          /** The event images. */
          images: Array<{
            /** The image URL. */
            url: string;
            /** The image ratio, such as 16_9. */
            ratio?: string | null;
            /** The image width in pixels. */
            width?: number | null;
            /** The image height in pixels. */
            height?: number | null;
            /** Whether the image is marked as a fallback asset. */
            fallback?: boolean | null;
            /** The image attribution string when present. */
            attribution?: string | null;
          }>;
          /** The normalized event classifications. */
          classifications: Array<{
            /** Whether the classification is marked as primary. */
            primary?: boolean | null;
            /** The segment reference for this classification. */
            segment?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The genre reference for this classification. */
            genre?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The sub-genre reference for this classification. */
            subGenre?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The type reference for this classification. */
            type?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The sub-type reference for this classification. */
            subType?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The raw classification object. */
            raw: Record<string, unknown>;
          }>;
          /** The embedded venue references. */
          venues: Array<{
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          }>;
          /** The embedded attraction references. */
          attractions: Array<{
            /** The Ticketmaster entity identifier. */
            id: string;
            /** The entity display name. */
            name?: string | null;
            /** The Ticketmaster entity type. */
            type?: string | null;
          }>;
          /** The raw Ticketmaster event object. */
          raw: Record<string, unknown>;
        }>;
        /** The suggested attractions. */
        attractions: Array<{
          /** The Ticketmaster attraction identifier. */
          id: string;
          /** The attraction name. */
          name?: string | null;
          /** The Ticketmaster entity type. */
          type?: string | null;
          /** The public Ticketmaster attraction URL. */
          url?: string | null;
          /** The locale of the attraction payload. */
          locale?: string | null;
          /** The attraction images. */
          images: Array<{
            /** The image URL. */
            url: string;
            /** The image ratio, such as 16_9. */
            ratio?: string | null;
            /** The image width in pixels. */
            width?: number | null;
            /** The image height in pixels. */
            height?: number | null;
            /** Whether the image is marked as a fallback asset. */
            fallback?: boolean | null;
            /** The image attribution string when present. */
            attribution?: string | null;
          }>;
          /** The raw Ticketmaster upcoming-events object. */
          upcomingEvents?: Record<string, unknown> | null;
          /** The normalized attraction classifications. */
          classifications: Array<{
            /** Whether the classification is marked as primary. */
            primary?: boolean | null;
            /** The segment reference for this classification. */
            segment?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The genre reference for this classification. */
            genre?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The sub-genre reference for this classification. */
            subGenre?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The type reference for this classification. */
            type?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The sub-type reference for this classification. */
            subType?: {
              /** The Ticketmaster entity identifier. */
              id: string;
              /** The entity display name. */
              name?: string | null;
              /** The Ticketmaster entity type. */
              type?: string | null;
            } | null;
            /** The raw classification object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw external-links object when provided. */
          externalLinks?: Record<string, unknown> | null;
          /** The raw Ticketmaster attraction object. */
          raw: Record<string, unknown>;
        }>;
        /** The suggested venues. */
        venues: Array<{
          /** The Ticketmaster venue identifier. */
          id: string;
          /** The venue name. */
          name?: string | null;
          /** The Ticketmaster entity type. */
          type?: string | null;
          /** The public Ticketmaster venue URL. */
          url?: string | null;
          /** The locale of the venue payload. */
          locale?: string | null;
          /** The venue postal code. */
          postalCode?: string | null;
          /** The venue city name. */
          cityName?: string | null;
          /** The venue state code. */
          stateCode?: string | null;
          /** The venue country code. */
          countryCode?: string | null;
          /** The raw Ticketmaster address object. */
          address?: Record<string, unknown> | null;
          /** The raw Ticketmaster location object. */
          location?: Record<string, unknown> | null;
          /** The venue images. */
          images: Array<{
            /** The image URL. */
            url: string;
            /** The image ratio, such as 16_9. */
            ratio?: string | null;
            /** The image width in pixels. */
            width?: number | null;
            /** The image height in pixels. */
            height?: number | null;
            /** Whether the image is marked as a fallback asset. */
            fallback?: boolean | null;
            /** The image attribution string when present. */
            attribution?: string | null;
          }>;
          /** The raw Ticketmaster venue object. */
          raw: Record<string, unknown>;
        }>;
        /** The pagination metadata. */
        page?: {
          /** The number of items returned in the current page. */
          size: number;
          /** The total number of items available. */
          totalElements: number;
          /** The total number of pages available. */
          totalPages: number;
          /** The zero-based page index. */
          number: number;
        } | null;
        /** The HATEOAS links object. */
        links?: Record<string, unknown> | null;
        /** The raw spellcheck object when the API returns it. */
        spellcheck?: Record<string, unknown> | null;
        /** The raw Ticketmaster suggestions payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the details for a specific Ticketmaster venue by ID. */
    "ticketmaster.get_venue_details": {
      input: {
        /**
         * The Ticketmaster entity identifier.
         * @minLength 1
         */
        id: string;
        /** The locale in ISO code format, such as en-us or a comma-separated list like en-us,en,*. */
        locale?: string;
        /** The region or domain filter, such as US, CA, AU, or NZ. */
        domain?: string;
      };
      output: {
        /** The Ticketmaster venue. */
        venue: {
          /** The Ticketmaster venue identifier. */
          id: string;
          /** The venue name. */
          name?: string | null;
          /** The Ticketmaster entity type. */
          type?: string | null;
          /** The public Ticketmaster venue URL. */
          url?: string | null;
          /** The locale of the venue payload. */
          locale?: string | null;
          /** The venue postal code. */
          postalCode?: string | null;
          /** The venue city name. */
          cityName?: string | null;
          /** The venue state code. */
          stateCode?: string | null;
          /** The venue country code. */
          countryCode?: string | null;
          /** The raw Ticketmaster address object. */
          address?: Record<string, unknown> | null;
          /** The raw Ticketmaster location object. */
          location?: Record<string, unknown> | null;
          /** The venue images. */
          images: Array<{
            /** The image URL. */
            url: string;
            /** The image ratio, such as 16_9. */
            ratio?: string | null;
            /** The image width in pixels. */
            width?: number | null;
            /** The image height in pixels. */
            height?: number | null;
            /** Whether the image is marked as a fallback asset. */
            fallback?: boolean | null;
            /** The image attribution string when present. */
            attribution?: string | null;
          }>;
          /** The raw Ticketmaster venue object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Search Discovery API venues by ID, keyword, and location filters. */
    "ticketmaster.get_venues": {
      input: {
        /** A comma-separated list of Ticketmaster venue IDs. */
        id?: string;
        /** A search keyword for matching venues. */
        keyword?: string;
        /** The city name to filter by. */
        city?: string;
        /** The state or province code to filter by. */
        stateCode?: string;
        /**
         * The ISO 3166-1 alpha-2 country code to filter by.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /** The postal code to search around. */
        postalCode?: string;
        /** A latitude and longitude pair in the form latitude,longitude. */
        latlong?: string;
        /**
         * The search radius around the location filter.
         * @minimum 0
         */
        radius?: number;
        /**
         * The zero-based page number to retrieve.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 200
         */
        size?: number;
        /** The sort expression, such as name,asc. */
        sort?: string;
        /** A comma-separated list of DMA identifiers. */
        dmaId?: string;
      };
      output: {
        /** The venues returned by the search. */
        venues: Array<{
          /** The Ticketmaster venue identifier. */
          id: string;
          /** The venue name. */
          name?: string | null;
          /** The Ticketmaster entity type. */
          type?: string | null;
          /** The public Ticketmaster venue URL. */
          url?: string | null;
          /** The locale of the venue payload. */
          locale?: string | null;
          /** The venue postal code. */
          postalCode?: string | null;
          /** The venue city name. */
          cityName?: string | null;
          /** The venue state code. */
          stateCode?: string | null;
          /** The venue country code. */
          countryCode?: string | null;
          /** The raw Ticketmaster address object. */
          address?: Record<string, unknown> | null;
          /** The raw Ticketmaster location object. */
          location?: Record<string, unknown> | null;
          /** The venue images. */
          images: Array<{
            /** The image URL. */
            url: string;
            /** The image ratio, such as 16_9. */
            ratio?: string | null;
            /** The image width in pixels. */
            width?: number | null;
            /** The image height in pixels. */
            height?: number | null;
            /** Whether the image is marked as a fallback asset. */
            fallback?: boolean | null;
            /** The image attribution string when present. */
            attribution?: string | null;
          }>;
          /** The raw Ticketmaster venue object. */
          raw: Record<string, unknown>;
        }>;
        /** The pagination metadata. */
        page?: {
          /** The number of items returned in the current page. */
          size: number;
          /** The total number of items available. */
          totalElements: number;
          /** The total number of pages available. */
          totalPages: number;
          /** The zero-based page index. */
          number: number;
        } | null;
        /** The HATEOAS links object. */
        links?: Record<string, unknown> | null;
      };
    };
  }
}
