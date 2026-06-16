import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Browse NASA's near-Earth object catalog with pagination support. */
    "nasa.browse_neo": {
      input: {
        /**
         * The zero-based page number to browse.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of near-Earth objects to return per page.
         * @exclusiveMinimum 0
         */
        size?: number;
      };
      output: {
        /** Pagination links for the browse response. */
        links: {
          /** The link for the current NASA response. */
          self: string;
          /** The link for the next page of results. */
          next?: string;
          /** The link for the previous page of results. */
          previous?: string;
          /** The link for the previous page of results. */
          prev?: string;
        };
        /** Pagination metadata for the browse response. */
        page: {
          /** The page size returned by NASA. */
          size: number;
          /** The total number of near-Earth objects. */
          totalElements: number;
          /** The total number of pages in the catalog. */
          totalPages: number;
          /** The current zero-based page number. */
          number: number;
        };
        /** The near-Earth objects returned for the requested browse page. */
        nearEarthObjects: Array<{
          /** The NASA asteroid identifier. */
          id: string;
          /** The NASA near-Earth object reference identifier. */
          neoReferenceId: string;
          /** The official NASA asteroid name. */
          name: string;
          /** The shortened asteroid name when NASA provides one. */
          nameLimited?: string;
          /** The asteroid designation reported by NASA. */
          designation?: string;
          /** The NASA JPL reference URL for the asteroid. */
          nasaJplUrl: string;
          /** The asteroid absolute magnitude. */
          absoluteMagnitudeH: number;
          /** Estimated diameter ranges for the asteroid. */
          estimatedDiameter: {
            /** Estimated diameter range in kilometers. */
            kilometers: {
              /** The minimum estimated diameter for the unit. */
              estimatedDiameterMin: number;
              /** The maximum estimated diameter for the unit. */
              estimatedDiameterMax: number;
            };
            /** Estimated diameter range in meters. */
            meters: {
              /** The minimum estimated diameter for the unit. */
              estimatedDiameterMin: number;
              /** The maximum estimated diameter for the unit. */
              estimatedDiameterMax: number;
            };
            /** Estimated diameter range in miles. */
            miles: {
              /** The minimum estimated diameter for the unit. */
              estimatedDiameterMin: number;
              /** The maximum estimated diameter for the unit. */
              estimatedDiameterMax: number;
            };
            /** Estimated diameter range in feet. */
            feet: {
              /** The minimum estimated diameter for the unit. */
              estimatedDiameterMin: number;
              /** The maximum estimated diameter for the unit. */
              estimatedDiameterMax: number;
            };
          };
          /** Whether NASA marks the asteroid as potentially hazardous. */
          isPotentiallyHazardousAsteroid: boolean;
          /** The asteroid close approach history returned by NASA. */
          closeApproachData: Array<{
            /** The close approach date in YYYY-MM-DD format. */
            closeApproachDate: string;
            /** The close approach timestamp in NASA's detailed string format. */
            closeApproachDateFull?: string;
            /** The close approach timestamp as Unix time in milliseconds. */
            epochDateCloseApproach?: number;
            /** Relative velocity metrics for the close approach. */
            relativeVelocity?: {
              /** Relative velocity in kilometers per second. */
              kilometersPerSecond: string;
              /** Relative velocity in kilometers per hour. */
              kilometersPerHour: string;
              /** Relative velocity in miles per hour. */
              milesPerHour: string;
            };
            /** Miss distance metrics for the close approach. */
            missDistance?: {
              /** The miss distance in astronomical units. */
              astronomical: string;
              /** The miss distance in lunar distances. */
              lunar: string;
              /** The miss distance in kilometers. */
              kilometers: string;
              /** The miss distance in miles. */
              miles: string;
            };
            /** The body the asteroid is approaching. */
            orbitingBody: string;
          }>;
          /** The orbital data block returned by NASA for the asteroid. */
          orbitalData?: Record<string, unknown>;
          /** The object-specific NASA links. */
          links?: {
            /** The link for the current NASA response. */
            self: string;
            /** The link for the next page of results. */
            next?: string;
            /** The link for the previous page of results. */
            previous?: string;
            /** The link for the previous page of results. */
            prev?: string;
          };
          /** Whether the asteroid is present in NASA's Sentry risk table. */
          isSentryObject?: boolean;
          /** The NASA Sentry URL for the asteroid. */
          sentryDataUrl?: string;
        }>;
      };
    };
    /** Retrieve NASA's Astronomy Picture of the Day metadata for a specific date or the current day. */
    "nasa.get_apod": {
      input: {
        /**
         * The APOD date to retrieve in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        date?: string;
        /** Whether to request the high-resolution APOD image URL when NASA provides one. */
        hd?: boolean;
        /** Whether to request a video thumbnail URL when the APOD entry is a video. */
        thumbs?: boolean;
      };
      output: {
        /** The APOD entry date in YYYY-MM-DD format. */
        date: string;
        /** The title of the astronomy picture or video. */
        title: string;
        /** The explanatory text describing the APOD entry. */
        explanation: string;
        /** The URL of the APOD image or video. */
        url: string;
        /** The media type returned by the APOD API. */
        mediaType: "image" | "video";
        /** The APOD API service version reported by NASA. */
        serviceVersion: string;
        /** The high-resolution image URL when NASA provides one. */
        hdUrl?: string;
        /** The thumbnail URL returned for video APOD entries when thumbs=true. */
        thumbnailUrl?: string;
        /** The copyright notice when the APOD entry is not in the public domain. */
        copyright?: string;
        /** The optional APOD concept tags payload when the API returns one. */
        concepts?: Record<string, unknown>;
      };
    };
    /** Retrieve DONKI coronal mass ejection events for a date range. */
    "nasa.get_donki_cme": {
      input: {
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** The DONKI coronal mass ejection events returned by NASA. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve DONKI coronal mass ejection analysis entries with optional accuracy and catalog filters. */
    "nasa.get_donki_cme_analysis": {
      input: {
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        endDate?: string;
        /** Whether to return only the most accurate CME analysis entries. */
        mostAccurateOnly?: boolean;
        /** Whether to return only complete CME analysis entries when NASA supports the filter. */
        completeEntryOnly?: boolean;
        /**
         * The minimum CME speed in kilometers per second.
         * @minimum 0
         */
        speed?: number;
        /**
         * The minimum CME half-angle in degrees.
         * @minimum 0
         * @maximum 180
         */
        halfAngle?: number;
        /** The DONKI CME analysis catalog filter. */
        catalog?: "ALL" | "SWRC_CATALOG" | "JANG_ET_AL_CATALOG";
        /**
         * The optional DONKI keyword filter for CME analysis.
         * @minLength 1
         */
        keyword?: string;
      };
      output: {
        /** The DONKI CME analysis entries returned by NASA. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve DONKI geomagnetic storm events for a date range. */
    "nasa.get_donki_gst": {
      input: {
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** The DONKI geomagnetic storm events returned by NASA. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve DONKI high-speed solar wind stream events for a date range. */
    "nasa.get_donki_hss": {
      input: {
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** The DONKI high-speed stream events returned by NASA. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve DONKI interplanetary shock events with optional location and catalog filters. */
    "nasa.get_donki_ips": {
      input: {
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        endDate?: string;
        /** The DONKI IPS location filter. */
        location?: "ALL" | "Earth" | "MESSENGER" | "STEREO A" | "STEREO B";
        /** The DONKI IPS catalog filter. */
        catalog?: "ALL" | "SWRC_CATALOG" | "WINSLOW_MESSENGER_ICME_CATALOG";
      };
      output: {
        /** The DONKI interplanetary shock events returned by NASA. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve DONKI magnetopause crossing events for a date range. */
    "nasa.get_donki_mpc": {
      input: {
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** The DONKI magnetopause crossing events returned by NASA. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve DONKI space weather notifications with optional type filtering. */
    "nasa.get_donki_notifications": {
      input: {
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        endDate?: string;
        /** The DONKI notification type filter. */
        type?: "all" | "FLR" | "SEP" | "CME" | "IPS" | "MPC" | "GST" | "RBE" | "report";
      };
      output: {
        /** The DONKI space weather notifications returned by NASA. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve DONKI radiation belt enhancement events for a date range. */
    "nasa.get_donki_rbe": {
      input: {
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** The DONKI radiation belt enhancement events returned by NASA. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve DONKI solar energetic particle events for a date range. */
    "nasa.get_donki_sep": {
      input: {
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** The DONKI solar energetic particle events returned by NASA. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve DONKI solar flare events for a date range. */
    "nasa.get_donki_solar_flares": {
      input: {
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** The DONKI solar flare events returned by NASA. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve DONKI WSA-Enlil simulation runs for a date range. */
    "nasa.get_donki_wsa_enlil": {
      input: {
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** The DONKI WSA-Enlil simulation entries returned by NASA. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve the most recent EPIC aerosol imagery metadata. */
    "nasa.get_epic_aerosol": {
      input: Record<string, never>;
      output: {
        /** The EPIC images returned by NASA. */
        images: Array<{
          /** The EPIC image identifier. */
          identifier: string;
          /** The caption for the EPIC image. */
          caption: string;
          /** The EPIC image filename stem. */
          image: string;
          /** The EPIC product version. */
          version?: string;
          /** The EPIC image capture timestamp. */
          date: string;
          /** The direct PNG archive URL constructed from the EPIC metadata. */
          archiveUrl: string;
          /** The centroid coordinates for the EPIC image. */
          centroidCoordinates?: {
            /** The latitude of the EPIC image centroid. */
            lat: number;
            /** The longitude of the EPIC image centroid. */
            lon: number;
          };
          /** The DSCOVR spacecraft position for the EPIC image. */
          dscovrJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The lunar position for the EPIC image. */
          lunarJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The solar position for the EPIC image. */
          sunJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The spacecraft attitude quaternions for the EPIC image. */
          attitudeQuaternions?: {
            /** The q0 attitude quaternion component. */
            q0: number;
            /** The q1 attitude quaternion component. */
            q1: number;
            /** The q2 attitude quaternion component. */
            q2: number;
            /** The q3 attitude quaternion component. */
            q3: number;
          };
          /** The nested EPIC coordinates block. */
          coords?: {
            /** The centroid coordinates inside the nested coords block. */
            centroidCoordinates?: {
              /** The latitude of the EPIC image centroid. */
              lat: number;
              /** The longitude of the EPIC image centroid. */
              lon: number;
            };
            /** The DSCOVR position inside the nested coords block. */
            dscovrJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The lunar position inside the nested coords block. */
            lunarJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The solar position inside the nested coords block. */
            sunJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The attitude quaternions inside the nested coords block. */
            attitudeQuaternions?: {
              /** The q0 attitude quaternion component. */
              q0: number;
              /** The q1 attitude quaternion component. */
              q1: number;
              /** The q2 attitude quaternion component. */
              q2: number;
              /** The q3 attitude quaternion component. */
              q3: number;
            };
          };
        }>;
      };
    };
    /** Retrieve EPIC aerosol imagery metadata for a specific date. */
    "nasa.get_epic_aerosol_date": {
      input: {
        /**
         * The EPIC imagery date to retrieve in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        date: string;
      };
      output: {
        /** The EPIC images returned by NASA. */
        images: Array<{
          /** The EPIC image identifier. */
          identifier: string;
          /** The caption for the EPIC image. */
          caption: string;
          /** The EPIC image filename stem. */
          image: string;
          /** The EPIC product version. */
          version?: string;
          /** The EPIC image capture timestamp. */
          date: string;
          /** The direct PNG archive URL constructed from the EPIC metadata. */
          archiveUrl: string;
          /** The centroid coordinates for the EPIC image. */
          centroidCoordinates?: {
            /** The latitude of the EPIC image centroid. */
            lat: number;
            /** The longitude of the EPIC image centroid. */
            lon: number;
          };
          /** The DSCOVR spacecraft position for the EPIC image. */
          dscovrJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The lunar position for the EPIC image. */
          lunarJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The solar position for the EPIC image. */
          sunJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The spacecraft attitude quaternions for the EPIC image. */
          attitudeQuaternions?: {
            /** The q0 attitude quaternion component. */
            q0: number;
            /** The q1 attitude quaternion component. */
            q1: number;
            /** The q2 attitude quaternion component. */
            q2: number;
            /** The q3 attitude quaternion component. */
            q3: number;
          };
          /** The nested EPIC coordinates block. */
          coords?: {
            /** The centroid coordinates inside the nested coords block. */
            centroidCoordinates?: {
              /** The latitude of the EPIC image centroid. */
              lat: number;
              /** The longitude of the EPIC image centroid. */
              lon: number;
            };
            /** The DSCOVR position inside the nested coords block. */
            dscovrJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The lunar position inside the nested coords block. */
            lunarJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The solar position inside the nested coords block. */
            sunJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The attitude quaternions inside the nested coords block. */
            attitudeQuaternions?: {
              /** The q0 attitude quaternion component. */
              q0: number;
              /** The q1 attitude quaternion component. */
              q1: number;
              /** The q2 attitude quaternion component. */
              q2: number;
              /** The q3 attitude quaternion component. */
              q3: number;
            };
          };
        }>;
      };
    };
    /** Retrieve the most recent EPIC cloud fraction imagery metadata. */
    "nasa.get_epic_cloud": {
      input: Record<string, never>;
      output: {
        /** The EPIC images returned by NASA. */
        images: Array<{
          /** The EPIC image identifier. */
          identifier: string;
          /** The caption for the EPIC image. */
          caption: string;
          /** The EPIC image filename stem. */
          image: string;
          /** The EPIC product version. */
          version?: string;
          /** The EPIC image capture timestamp. */
          date: string;
          /** The direct PNG archive URL constructed from the EPIC metadata. */
          archiveUrl: string;
          /** The centroid coordinates for the EPIC image. */
          centroidCoordinates?: {
            /** The latitude of the EPIC image centroid. */
            lat: number;
            /** The longitude of the EPIC image centroid. */
            lon: number;
          };
          /** The DSCOVR spacecraft position for the EPIC image. */
          dscovrJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The lunar position for the EPIC image. */
          lunarJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The solar position for the EPIC image. */
          sunJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The spacecraft attitude quaternions for the EPIC image. */
          attitudeQuaternions?: {
            /** The q0 attitude quaternion component. */
            q0: number;
            /** The q1 attitude quaternion component. */
            q1: number;
            /** The q2 attitude quaternion component. */
            q2: number;
            /** The q3 attitude quaternion component. */
            q3: number;
          };
          /** The nested EPIC coordinates block. */
          coords?: {
            /** The centroid coordinates inside the nested coords block. */
            centroidCoordinates?: {
              /** The latitude of the EPIC image centroid. */
              lat: number;
              /** The longitude of the EPIC image centroid. */
              lon: number;
            };
            /** The DSCOVR position inside the nested coords block. */
            dscovrJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The lunar position inside the nested coords block. */
            lunarJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The solar position inside the nested coords block. */
            sunJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The attitude quaternions inside the nested coords block. */
            attitudeQuaternions?: {
              /** The q0 attitude quaternion component. */
              q0: number;
              /** The q1 attitude quaternion component. */
              q1: number;
              /** The q2 attitude quaternion component. */
              q2: number;
              /** The q3 attitude quaternion component. */
              q3: number;
            };
          };
        }>;
      };
    };
    /** Retrieve EPIC cloud fraction imagery metadata for a specific date. */
    "nasa.get_epic_cloud_date": {
      input: {
        /**
         * The EPIC imagery date to retrieve in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        date: string;
      };
      output: {
        /** The EPIC images returned by NASA. */
        images: Array<{
          /** The EPIC image identifier. */
          identifier: string;
          /** The caption for the EPIC image. */
          caption: string;
          /** The EPIC image filename stem. */
          image: string;
          /** The EPIC product version. */
          version?: string;
          /** The EPIC image capture timestamp. */
          date: string;
          /** The direct PNG archive URL constructed from the EPIC metadata. */
          archiveUrl: string;
          /** The centroid coordinates for the EPIC image. */
          centroidCoordinates?: {
            /** The latitude of the EPIC image centroid. */
            lat: number;
            /** The longitude of the EPIC image centroid. */
            lon: number;
          };
          /** The DSCOVR spacecraft position for the EPIC image. */
          dscovrJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The lunar position for the EPIC image. */
          lunarJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The solar position for the EPIC image. */
          sunJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The spacecraft attitude quaternions for the EPIC image. */
          attitudeQuaternions?: {
            /** The q0 attitude quaternion component. */
            q0: number;
            /** The q1 attitude quaternion component. */
            q1: number;
            /** The q2 attitude quaternion component. */
            q2: number;
            /** The q3 attitude quaternion component. */
            q3: number;
          };
          /** The nested EPIC coordinates block. */
          coords?: {
            /** The centroid coordinates inside the nested coords block. */
            centroidCoordinates?: {
              /** The latitude of the EPIC image centroid. */
              lat: number;
              /** The longitude of the EPIC image centroid. */
              lon: number;
            };
            /** The DSCOVR position inside the nested coords block. */
            dscovrJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The lunar position inside the nested coords block. */
            lunarJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The solar position inside the nested coords block. */
            sunJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The attitude quaternions inside the nested coords block. */
            attitudeQuaternions?: {
              /** The q0 attitude quaternion component. */
              q0: number;
              /** The q1 attitude quaternion component. */
              q1: number;
              /** The q2 attitude quaternion component. */
              q2: number;
              /** The q3 attitude quaternion component. */
              q3: number;
            };
          };
        }>;
      };
    };
    /** Retrieve the most recent EPIC enhanced color image metadata. */
    "nasa.get_epic_enhanced": {
      input: Record<string, never>;
      output: {
        /** The EPIC images returned by NASA. */
        images: Array<{
          /** The EPIC image identifier. */
          identifier: string;
          /** The caption for the EPIC image. */
          caption: string;
          /** The EPIC image filename stem. */
          image: string;
          /** The EPIC product version. */
          version?: string;
          /** The EPIC image capture timestamp. */
          date: string;
          /** The direct PNG archive URL constructed from the EPIC metadata. */
          archiveUrl: string;
          /** The centroid coordinates for the EPIC image. */
          centroidCoordinates?: {
            /** The latitude of the EPIC image centroid. */
            lat: number;
            /** The longitude of the EPIC image centroid. */
            lon: number;
          };
          /** The DSCOVR spacecraft position for the EPIC image. */
          dscovrJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The lunar position for the EPIC image. */
          lunarJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The solar position for the EPIC image. */
          sunJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The spacecraft attitude quaternions for the EPIC image. */
          attitudeQuaternions?: {
            /** The q0 attitude quaternion component. */
            q0: number;
            /** The q1 attitude quaternion component. */
            q1: number;
            /** The q2 attitude quaternion component. */
            q2: number;
            /** The q3 attitude quaternion component. */
            q3: number;
          };
          /** The nested EPIC coordinates block. */
          coords?: {
            /** The centroid coordinates inside the nested coords block. */
            centroidCoordinates?: {
              /** The latitude of the EPIC image centroid. */
              lat: number;
              /** The longitude of the EPIC image centroid. */
              lon: number;
            };
            /** The DSCOVR position inside the nested coords block. */
            dscovrJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The lunar position inside the nested coords block. */
            lunarJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The solar position inside the nested coords block. */
            sunJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The attitude quaternions inside the nested coords block. */
            attitudeQuaternions?: {
              /** The q0 attitude quaternion component. */
              q0: number;
              /** The q1 attitude quaternion component. */
              q1: number;
              /** The q2 attitude quaternion component. */
              q2: number;
              /** The q3 attitude quaternion component. */
              q3: number;
            };
          };
        }>;
      };
    };
    /** Retrieve EPIC enhanced color image metadata for a specific date. */
    "nasa.get_epic_enhanced_date": {
      input: {
        /**
         * The EPIC imagery date to retrieve in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        date: string;
      };
      output: {
        /** The EPIC images returned by NASA. */
        images: Array<{
          /** The EPIC image identifier. */
          identifier: string;
          /** The caption for the EPIC image. */
          caption: string;
          /** The EPIC image filename stem. */
          image: string;
          /** The EPIC product version. */
          version?: string;
          /** The EPIC image capture timestamp. */
          date: string;
          /** The direct PNG archive URL constructed from the EPIC metadata. */
          archiveUrl: string;
          /** The centroid coordinates for the EPIC image. */
          centroidCoordinates?: {
            /** The latitude of the EPIC image centroid. */
            lat: number;
            /** The longitude of the EPIC image centroid. */
            lon: number;
          };
          /** The DSCOVR spacecraft position for the EPIC image. */
          dscovrJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The lunar position for the EPIC image. */
          lunarJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The solar position for the EPIC image. */
          sunJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The spacecraft attitude quaternions for the EPIC image. */
          attitudeQuaternions?: {
            /** The q0 attitude quaternion component. */
            q0: number;
            /** The q1 attitude quaternion component. */
            q1: number;
            /** The q2 attitude quaternion component. */
            q2: number;
            /** The q3 attitude quaternion component. */
            q3: number;
          };
          /** The nested EPIC coordinates block. */
          coords?: {
            /** The centroid coordinates inside the nested coords block. */
            centroidCoordinates?: {
              /** The latitude of the EPIC image centroid. */
              lat: number;
              /** The longitude of the EPIC image centroid. */
              lon: number;
            };
            /** The DSCOVR position inside the nested coords block. */
            dscovrJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The lunar position inside the nested coords block. */
            lunarJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The solar position inside the nested coords block. */
            sunJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The attitude quaternions inside the nested coords block. */
            attitudeQuaternions?: {
              /** The q0 attitude quaternion component. */
              q0: number;
              /** The q1 attitude quaternion component. */
              q1: number;
              /** The q2 attitude quaternion component. */
              q2: number;
              /** The q3 attitude quaternion component. */
              q3: number;
            };
          };
        }>;
      };
    };
    /** Retrieve the most recent EPIC natural color image metadata. */
    "nasa.get_epic_natural": {
      input: Record<string, never>;
      output: {
        /** The EPIC images returned by NASA. */
        images: Array<{
          /** The EPIC image identifier. */
          identifier: string;
          /** The caption for the EPIC image. */
          caption: string;
          /** The EPIC image filename stem. */
          image: string;
          /** The EPIC product version. */
          version?: string;
          /** The EPIC image capture timestamp. */
          date: string;
          /** The direct PNG archive URL constructed from the EPIC metadata. */
          archiveUrl: string;
          /** The centroid coordinates for the EPIC image. */
          centroidCoordinates?: {
            /** The latitude of the EPIC image centroid. */
            lat: number;
            /** The longitude of the EPIC image centroid. */
            lon: number;
          };
          /** The DSCOVR spacecraft position for the EPIC image. */
          dscovrJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The lunar position for the EPIC image. */
          lunarJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The solar position for the EPIC image. */
          sunJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The spacecraft attitude quaternions for the EPIC image. */
          attitudeQuaternions?: {
            /** The q0 attitude quaternion component. */
            q0: number;
            /** The q1 attitude quaternion component. */
            q1: number;
            /** The q2 attitude quaternion component. */
            q2: number;
            /** The q3 attitude quaternion component. */
            q3: number;
          };
          /** The nested EPIC coordinates block. */
          coords?: {
            /** The centroid coordinates inside the nested coords block. */
            centroidCoordinates?: {
              /** The latitude of the EPIC image centroid. */
              lat: number;
              /** The longitude of the EPIC image centroid. */
              lon: number;
            };
            /** The DSCOVR position inside the nested coords block. */
            dscovrJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The lunar position inside the nested coords block. */
            lunarJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The solar position inside the nested coords block. */
            sunJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The attitude quaternions inside the nested coords block. */
            attitudeQuaternions?: {
              /** The q0 attitude quaternion component. */
              q0: number;
              /** The q1 attitude quaternion component. */
              q1: number;
              /** The q2 attitude quaternion component. */
              q2: number;
              /** The q3 attitude quaternion component. */
              q3: number;
            };
          };
        }>;
      };
    };
    /** Retrieve EPIC natural color image metadata for a specific date. */
    "nasa.get_epic_natural_date": {
      input: {
        /**
         * The EPIC imagery date to retrieve in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        date: string;
      };
      output: {
        /** The EPIC images returned by NASA. */
        images: Array<{
          /** The EPIC image identifier. */
          identifier: string;
          /** The caption for the EPIC image. */
          caption: string;
          /** The EPIC image filename stem. */
          image: string;
          /** The EPIC product version. */
          version?: string;
          /** The EPIC image capture timestamp. */
          date: string;
          /** The direct PNG archive URL constructed from the EPIC metadata. */
          archiveUrl: string;
          /** The centroid coordinates for the EPIC image. */
          centroidCoordinates?: {
            /** The latitude of the EPIC image centroid. */
            lat: number;
            /** The longitude of the EPIC image centroid. */
            lon: number;
          };
          /** The DSCOVR spacecraft position for the EPIC image. */
          dscovrJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The lunar position for the EPIC image. */
          lunarJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The solar position for the EPIC image. */
          sunJ2000Position?: {
            /** The X coordinate in the J2000 reference frame. */
            x: number;
            /** The Y coordinate in the J2000 reference frame. */
            y: number;
            /** The Z coordinate in the J2000 reference frame. */
            z: number;
          };
          /** The spacecraft attitude quaternions for the EPIC image. */
          attitudeQuaternions?: {
            /** The q0 attitude quaternion component. */
            q0: number;
            /** The q1 attitude quaternion component. */
            q1: number;
            /** The q2 attitude quaternion component. */
            q2: number;
            /** The q3 attitude quaternion component. */
            q3: number;
          };
          /** The nested EPIC coordinates block. */
          coords?: {
            /** The centroid coordinates inside the nested coords block. */
            centroidCoordinates?: {
              /** The latitude of the EPIC image centroid. */
              lat: number;
              /** The longitude of the EPIC image centroid. */
              lon: number;
            };
            /** The DSCOVR position inside the nested coords block. */
            dscovrJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The lunar position inside the nested coords block. */
            lunarJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The solar position inside the nested coords block. */
            sunJ2000Position?: {
              /** The X coordinate in the J2000 reference frame. */
              x: number;
              /** The Y coordinate in the J2000 reference frame. */
              y: number;
              /** The Z coordinate in the J2000 reference frame. */
              z: number;
            };
            /** The attitude quaternions inside the nested coords block. */
            attitudeQuaternions?: {
              /** The q0 attitude quaternion component. */
              q0: number;
              /** The q1 attitude quaternion component. */
              q1: number;
              /** The q2 attitude quaternion component. */
              q2: number;
              /** The q3 attitude quaternion component. */
              q3: number;
            };
          };
        }>;
      };
    };
    /** Lookup a specific NASA near-Earth object by asteroid id. */
    "nasa.get_neo_lookup": {
      input: {
        /**
         * The NASA JPL SPK-ID of the asteroid to look up.
         * @minLength 1
         */
        asteroidId: string;
      };
      output: {
        /** The requested near-Earth object. */
        nearEarthObject: {
          /** The NASA asteroid identifier. */
          id: string;
          /** The NASA near-Earth object reference identifier. */
          neoReferenceId: string;
          /** The official NASA asteroid name. */
          name: string;
          /** The shortened asteroid name when NASA provides one. */
          nameLimited?: string;
          /** The asteroid designation reported by NASA. */
          designation?: string;
          /** The NASA JPL reference URL for the asteroid. */
          nasaJplUrl: string;
          /** The asteroid absolute magnitude. */
          absoluteMagnitudeH: number;
          /** Estimated diameter ranges for the asteroid. */
          estimatedDiameter: {
            /** Estimated diameter range in kilometers. */
            kilometers: {
              /** The minimum estimated diameter for the unit. */
              estimatedDiameterMin: number;
              /** The maximum estimated diameter for the unit. */
              estimatedDiameterMax: number;
            };
            /** Estimated diameter range in meters. */
            meters: {
              /** The minimum estimated diameter for the unit. */
              estimatedDiameterMin: number;
              /** The maximum estimated diameter for the unit. */
              estimatedDiameterMax: number;
            };
            /** Estimated diameter range in miles. */
            miles: {
              /** The minimum estimated diameter for the unit. */
              estimatedDiameterMin: number;
              /** The maximum estimated diameter for the unit. */
              estimatedDiameterMax: number;
            };
            /** Estimated diameter range in feet. */
            feet: {
              /** The minimum estimated diameter for the unit. */
              estimatedDiameterMin: number;
              /** The maximum estimated diameter for the unit. */
              estimatedDiameterMax: number;
            };
          };
          /** Whether NASA marks the asteroid as potentially hazardous. */
          isPotentiallyHazardousAsteroid: boolean;
          /** The asteroid close approach history returned by NASA. */
          closeApproachData: Array<{
            /** The close approach date in YYYY-MM-DD format. */
            closeApproachDate: string;
            /** The close approach timestamp in NASA's detailed string format. */
            closeApproachDateFull?: string;
            /** The close approach timestamp as Unix time in milliseconds. */
            epochDateCloseApproach?: number;
            /** Relative velocity metrics for the close approach. */
            relativeVelocity?: {
              /** Relative velocity in kilometers per second. */
              kilometersPerSecond: string;
              /** Relative velocity in kilometers per hour. */
              kilometersPerHour: string;
              /** Relative velocity in miles per hour. */
              milesPerHour: string;
            };
            /** Miss distance metrics for the close approach. */
            missDistance?: {
              /** The miss distance in astronomical units. */
              astronomical: string;
              /** The miss distance in lunar distances. */
              lunar: string;
              /** The miss distance in kilometers. */
              kilometers: string;
              /** The miss distance in miles. */
              miles: string;
            };
            /** The body the asteroid is approaching. */
            orbitingBody: string;
          }>;
          /** The orbital data block returned by NASA for the asteroid. */
          orbitalData?: Record<string, unknown>;
          /** The object-specific NASA links. */
          links?: {
            /** The link for the current NASA response. */
            self: string;
            /** The link for the next page of results. */
            next?: string;
            /** The link for the previous page of results. */
            previous?: string;
            /** The link for the previous page of results. */
            prev?: string;
          };
          /** Whether the asteroid is present in NASA's Sentry risk table. */
          isSentryObject?: boolean;
          /** The NASA Sentry URL for the asteroid. */
          sentryDataUrl?: string;
        };
      };
    };
    /** List the dates with available EPIC aerosol imagery. */
    "nasa.list_epic_aerosol_dates": {
      input: Record<string, never>;
      output: {
        /** The dates with available EPIC imagery. */
        dates: Array<string>;
      };
    };
    /** List the dates with available EPIC cloud fraction imagery. */
    "nasa.list_epic_cloud_dates": {
      input: Record<string, never>;
      output: {
        /** The dates with available EPIC imagery. */
        dates: Array<string>;
      };
    };
    /** List the dates with available EPIC enhanced color imagery. */
    "nasa.list_epic_enhanced_dates": {
      input: Record<string, never>;
      output: {
        /** The dates with available EPIC imagery. */
        dates: Array<string>;
      };
    };
    /** List the dates with available EPIC natural color imagery. */
    "nasa.list_epic_natural_dates": {
      input: Record<string, never>;
      output: {
        /** The dates with available EPIC imagery. */
        dates: Array<string>;
      };
    };
    /** Search NASA near-Earth objects by closest approach date within a maximum 7-day window. */
    "nasa.search_near_earth_objects": {
      input: {
        /**
         * The start date for the close approach search in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        startDate: string;
        /**
         * The end date for the close approach search in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** Pagination links for the feed response. */
        links: {
          /** The link for the current NASA response. */
          self: string;
          /** The link for the next page of results. */
          next?: string;
          /** The link for the previous page of results. */
          previous?: string;
          /** The link for the previous page of results. */
          prev?: string;
        };
        /** The total number of asteroid close approaches returned. */
        elementCount: number;
        /** Near-Earth objects grouped by close approach date. */
        nearEarthObjectsByDate: Record<string, Array<{
            /** The NASA asteroid identifier. */
            id: string;
            /** The NASA near-Earth object reference identifier. */
            neoReferenceId: string;
            /** The official NASA asteroid name. */
            name: string;
            /** The shortened asteroid name when NASA provides one. */
            nameLimited?: string;
            /** The asteroid designation reported by NASA. */
            designation?: string;
            /** The NASA JPL reference URL for the asteroid. */
            nasaJplUrl: string;
            /** The asteroid absolute magnitude. */
            absoluteMagnitudeH: number;
            /** Estimated diameter ranges for the asteroid. */
            estimatedDiameter: {
              /** Estimated diameter range in kilometers. */
              kilometers: {
                /** The minimum estimated diameter for the unit. */
                estimatedDiameterMin: number;
                /** The maximum estimated diameter for the unit. */
                estimatedDiameterMax: number;
              };
              /** Estimated diameter range in meters. */
              meters: {
                /** The minimum estimated diameter for the unit. */
                estimatedDiameterMin: number;
                /** The maximum estimated diameter for the unit. */
                estimatedDiameterMax: number;
              };
              /** Estimated diameter range in miles. */
              miles: {
                /** The minimum estimated diameter for the unit. */
                estimatedDiameterMin: number;
                /** The maximum estimated diameter for the unit. */
                estimatedDiameterMax: number;
              };
              /** Estimated diameter range in feet. */
              feet: {
                /** The minimum estimated diameter for the unit. */
                estimatedDiameterMin: number;
                /** The maximum estimated diameter for the unit. */
                estimatedDiameterMax: number;
              };
            };
            /** Whether NASA marks the asteroid as potentially hazardous. */
            isPotentiallyHazardousAsteroid: boolean;
            /** The asteroid close approach history returned by NASA. */
            closeApproachData: Array<{
              /** The close approach date in YYYY-MM-DD format. */
              closeApproachDate: string;
              /** The close approach timestamp in NASA's detailed string format. */
              closeApproachDateFull?: string;
              /** The close approach timestamp as Unix time in milliseconds. */
              epochDateCloseApproach?: number;
              /** Relative velocity metrics for the close approach. */
              relativeVelocity?: {
                /** Relative velocity in kilometers per second. */
                kilometersPerSecond: string;
                /** Relative velocity in kilometers per hour. */
                kilometersPerHour: string;
                /** Relative velocity in miles per hour. */
                milesPerHour: string;
              };
              /** Miss distance metrics for the close approach. */
              missDistance?: {
                /** The miss distance in astronomical units. */
                astronomical: string;
                /** The miss distance in lunar distances. */
                lunar: string;
                /** The miss distance in kilometers. */
                kilometers: string;
                /** The miss distance in miles. */
                miles: string;
              };
              /** The body the asteroid is approaching. */
              orbitingBody: string;
            }>;
            /** The orbital data block returned by NASA for the asteroid. */
            orbitalData?: Record<string, unknown>;
            /** The object-specific NASA links. */
            links?: {
              /** The link for the current NASA response. */
              self: string;
              /** The link for the next page of results. */
              next?: string;
              /** The link for the previous page of results. */
              previous?: string;
              /** The link for the previous page of results. */
              prev?: string;
            };
            /** Whether the asteroid is present in NASA's Sentry risk table. */
            isSentryObject?: boolean;
            /** The NASA Sentry URL for the asteroid. */
            sentryDataUrl?: string;
          }>>;
      };
    };
  }
}
