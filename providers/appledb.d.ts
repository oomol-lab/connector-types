import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get an Apple device record by its case-sensitive AppleDB key, such as iPhone17,1. */
    "appledb.get_device": {
      input: {
        /**
         * Case-sensitive AppleDB device key, usually a hardware identifier.
         * @minLength 1
         * @pattern \S
         */
        key: string;
      };
      output: {
        /** Case-sensitive AppleDB device key used for exact lookup. */
        key: string;
        /** Human-readable device name. */
        name: string;
        /** AppleDB device category, such as iPhone, iPad Pro, Apple Watch, or MacBook Pro. */
        type: string;
        /** One or more identifiers recorded by AppleDB. */
        identifier?: string | Array<string>;
        /** Alternative device names. */
        alias?: Array<string>;
        /** One or more identifiers recorded by AppleDB. */
        model?: string | Array<string>;
        /** One or more identifiers recorded by AppleDB. */
        board?: string | Array<string>;
        /** One or more identifiers recorded by AppleDB. */
        soc?: string | Array<string>;
        /** Processor architecture. */
        arch?: string;
        /** Release date, or one date per variant, as YYYY, YYYY-MM, or YYYY-MM-DD. */
        released?: string | Array<string>;
        /** Release date, or one date per variant, as YYYY, YYYY-MM, or YYYY-MM-DD. */
        discontinued?: string | Array<string>;
        /** Known device colors. */
        colors?: Array<{
          /** Color name. */
          name: string;
          /** Color value as hexadecimal RGB without a leading hash, or one value per tone. */
          hex?: string | Array<string>;
          /** A full or partial release date supplied by AppleDB. */
          released?: string;
          /** A full or partial release date supplied by AppleDB. */
          discontinued?: string;
          /** AppleDB color key. */
          key?: string;
          [key: string]: unknown;
        }>;
        /** Whether AppleDB marks this as an internal device. */
        internal?: boolean;
        /** Whether this record represents a device group. */
        group?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get an Apple operating system build record by its AppleDB operating system name and build key. */
    "appledb.get_os_build": {
      input: {
        /**
         * Case-sensitive AppleDB operating system name (osStr), such as iOS, iPadOS, macOS, or Mac OS X.
         * @minLength 1
         * @pattern \S
         */
        os: string;
        /**
         * AppleDB build key: usually the Apple build identifier, such as 22A3354, but simulator, RC, and SDK variants carry suffixes such as 22A3351-sim or 22H355-RC, and accessory firmware uses its version. Pass the build returned by search_os_builds verbatim; use search_os_builds when a plain build identifier is not found.
         * @minLength 1
         * @pattern \S
         */
        build: string;
        /**
         * Include firmware and software download sources; false keeps the result compact.
         * @default false
         */
        include_sources?: boolean;
      };
      output: {
        /** Case-sensitive AppleDB operating system build key. */
        key?: string;
        /** Marketing name of the operating system. */
        osStr: string;
        /** Stable AppleDB operating system type. */
        osType?: string;
        /** Human-readable operating system version. */
        version: string;
        /** Apple build identifier; omitted or null for accessory and app firmware that has no build. */
        build?: string | null;
        /** AppleDB build key that distinguishes simulator, RC, SDK, and shared builds; the build half of key. */
        uniqueBuild?: string;
        /** A full or partial release date supplied by AppleDB. */
        released?: string;
        /** Whether this is a beta build. */
        beta?: boolean;
        /** Whether this is a release candidate. */
        rc?: boolean;
        /** Whether this is a Background Security Improvement build. */
        bsi?: boolean;
        /** Whether this is a Rapid Security Response build. */
        rsr?: boolean;
        /** Whether AppleDB marks this as an internal build. */
        internal?: boolean;
        /** true when signed for every device, or the device identifiers still being signed. */
        signed?: boolean | Array<string>;
        /** Device identifiers supported by this build. */
        deviceMap?: Array<string>;
        /** Operating systems represented by this build. */
        osMap?: Array<string>;
        /** Additional AppleDB notes. */
        notes?: string;
        /** Notes URL, or a link object when AppleDB tracks whether it is still active. */
        releaseNotes?: string | {
          /**
           * Firmware or release resource URL.
           * @format uri
           */
          url: string;
          /** Whether AppleDB currently considers the URL active. */
          active: boolean;
          /** Decryption key when the source requires one. */
          decryptionKey?: string;
          /** Apple software catalog associated with the URL. */
          catalog?: string;
          [key: string]: unknown;
        };
        /** Notes URL, or a link object when AppleDB tracks whether it is still active. */
        enterpriseNotes?: string | {
          /**
           * Firmware or release resource URL.
           * @format uri
           */
          url: string;
          /** Whether AppleDB currently considers the URL active. */
          active: boolean;
          /** Decryption key when the source requires one. */
          decryptionKey?: string;
          /** Apple software catalog associated with the URL. */
          catalog?: string;
          [key: string]: unknown;
        };
        /** Notes URL, or a link object when AppleDB tracks whether it is still active. */
        securityNotes?: string | {
          /**
           * Firmware or release resource URL.
           * @format uri
           */
          url: string;
          /** Whether AppleDB currently considers the URL active. */
          active: boolean;
          /** Decryption key when the source requires one. */
          decryptionKey?: string;
          /** Apple software catalog associated with the URL. */
          catalog?: string;
          [key: string]: unknown;
        } | null;
        /** Firmware and software sources, included only when include_sources is true. */
        sources?: Array<{
          /** Firmware source type, such as ipsw, ota, recovery, pkg, or dmg. */
          type: string;
          /** Device identifiers supported by this source. */
          deviceMap?: Array<string>;
          /** Board identifiers supported by this source. */
          boardMap?: Array<string>;
          /** Operating systems supported by this source. */
          osMap?: Array<string>;
          /**
           * Source size in bytes when known.
           * @minimum 0
           */
          size?: number;
          /** Download links for this source. */
          links: Array<{
            /**
             * Firmware or release resource URL.
             * @format uri
             */
            url: string;
            /** Whether AppleDB currently considers the URL active. */
            active: boolean;
            /** Decryption key when the source requires one. */
            decryptionKey?: string;
            /** Apple software catalog associated with the URL. */
            catalog?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search AppleDB devices by name, key, identifier, model, board, or processor. */
    "appledb.search_devices": {
      input: {
        /**
         * Device search text, such as iPhone 16 Pro, iPhone17,1, or A3293.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * Optional case-insensitive AppleDB device category filter, matched exactly; examples: iPhone, iPad Pro, Apple Watch, MacBook Pro, Mac mini, AirPods.
         * @minLength 1
         * @pattern \S
         */
        type?: string;
        /**
         * Maximum number of matches to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** Matching AppleDB devices. */
        devices: Array<{
          /** AppleDB device key for get_device. */
          key: string;
          /** Human-readable device name. */
          name: string;
          /** AppleDB device category. */
          type: string;
          /** One or more identifiers recorded by AppleDB. */
          identifier?: string | Array<string>;
          /** One or more identifiers recorded by AppleDB. */
          model?: string | Array<string>;
          /** One or more identifiers recorded by AppleDB. */
          soc?: string | Array<string>;
          /** Release date, or one date per variant, as YYYY, YYYY-MM, or YYYY-MM-DD. */
          released?: string | Array<string>;
          /** Release date, or one date per variant, as YYYY, YYYY-MM, or YYYY-MM-DD. */
          discontinued?: string | Array<string>;
        }>;
        /**
         * Number of matches returned.
         * @minimum 0
         */
        count: number;
        /**
         * Number of matches before applying the result limit.
         * @minimum 0
         */
        total_matches: number;
        /** Whether additional matches were omitted by the result limit. */
        truncated: boolean;
      };
    };
    /** Search an AppleDB firmware calendar by version, build, device identifier, or release text; results are newest first. */
    "appledb.search_os_builds": {
      input: {
        /**
         * Case-sensitive AppleDB OS type that names the calendar, such as iOS, macOS, watchOS, tvOS, visionOS, bridgeOS, or HomePod Software. iPadOS builds live in the iOS calendar and audioOS builds in the HomePod Software calendar; each result carries its own os for get_os_build.
         * @minLength 1
         * @pattern \S
         */
        os_type: string;
        /**
         * Search text, such as 18.0, 22A3354, or iPhone17,1.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * Maximum number of matches to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** Matching AppleDB builds. */
        builds: Array<{
          /** AppleDB build key for get_os_build. */
          key: string;
          /** AppleDB operating system name (osStr) for get_os_build; the iOS calendar also reports iPadOS, iPhone OS, and iPhone Software builds. */
          os: string;
          /** Version text from the calendar summary, such as 18.0, 18.1 beta 2, or 15.0 RC. */
          version: string;
          /** AppleDB build key for get_os_build; may carry a variant suffix such as -sim, -RC, or -SDK. */
          build: string;
          /** Release date in YYYY-MM-DD form. */
          released: string;
          /** AppleDB calendar event summary. */
          summary: string;
          /**
           * AppleDB page for this build.
           * @format uri
           */
          url?: string;
        }>;
        /**
         * Number of matches returned.
         * @minimum 0
         */
        count: number;
        /**
         * Number of matches before applying the result limit.
         * @minimum 0
         */
        total_matches: number;
        /** Whether additional matches were omitted by the result limit. */
        truncated: boolean;
      };
    };
  }
}
