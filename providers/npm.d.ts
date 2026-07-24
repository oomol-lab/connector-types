import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get npm security advisories for requested exact package versions. */
    "npm.audit_package_versions": {
      input: {
        /** Package names mapped to exact published versions to audit. */
        packages: Record<string, Array<string>>;
      };
      output: {
        /** Aggregate advisory counts for the audit request. */
        summary: {
          /**
           * The number of packages checked.
           * @minimum 0
           */
          packageCount: number;
          /**
           * The number of packages with advisories.
           * @minimum 0
           */
          affectedPackageCount: number;
          /**
           * The total number of returned advisories.
           * @minimum 0
           */
          advisoryCount: number;
        };
        /** Audit results in the requested package order. */
        packages: Array<{
          /**
           * The npm package name, including its scope when present.
           * @minLength 1
           */
          packageName: string;
          /** The exact published versions supplied for this package. */
          requestedVersions: Array<string>;
          /** Security advisories returned for this package. */
          advisories: Array<{
            /**
             * The numeric npm advisory identifier.
             * @minimum 0
             */
            id: number;
            /**
             * The canonical advisory URL.
             * @format uri
             */
            url: string;
            /**
             * The advisory title.
             * @minLength 1
             */
            title: string;
            /**
             * The severity reported by npm.
             * @minLength 1
             */
            severity: string;
            /**
             * The affected version range reported by npm.
             * @minLength 1
             */
            vulnerableVersions: string;
            /** CWE identifiers associated with the advisory. */
            cwe: Array<string>;
            /** CVSS data reported by the npm advisory service. */
            cvss: {
              /** The advisory CVSS score. */
              score: number;
              /** The advisory CVSS vector string, or null when npm has not assigned one. */
              vectorString: string | null;
            };
          }>;
        }>;
      };
    };
    /** Get the npm username associated with the connected access token. */
    "npm.get_current_user": {
      input: Record<string, never>;
      output: {
        /**
         * The npm username associated with the access token.
         * @minLength 1
         */
        username: string;
      };
    };
    /** Get a compact summary and version list for an npm package. */
    "npm.get_package": {
      input: {
        /**
         * The npm package name, including its scope when present.
         * @minLength 1
         */
        packageName: string;
      };
      output: {
        /**
         * The package name returned by npm.
         * @minLength 1
         */
        name: string;
        /** npm distribution tags mapped to package versions. */
        distTags: Record<string, string>;
        /**
         * The version assigned to the latest distribution tag.
         * @minLength 1
         */
        latestVersion: string;
        /**
         * The package modification timestamp returned by npm.
         * @format date-time
         */
        modified: string;
        /** All version names published for the package. */
        versionNames: Array<string>;
        /**
         * The number of published package versions.
         * @minimum 0
         */
        versionCount: number;
      };
    };
    /** Get download totals for up to 128 npm packages over an inclusive period. */
    "npm.get_package_download_counts": {
      input: {
        /**
         * The npm package names to compare. Scoped packages are supported.
         * @minItems 1
         * @maxItems 128
         */
        packageNames: Array<string>;
        /** A preset npm download period or an inclusive custom date range. */
        period: "last-day" | "last-week" | "last-month" | "last-year" | {
          /**
           * The inclusive start date in YYYY-MM-DD format.
           * @format date
           */
          startDate: string;
          /**
           * The inclusive end date in YYYY-MM-DD format.
           * @format date
           */
          endDate: string;
        };
      };
      output: {
        /**
         * The inclusive first day represented by the counts.
         * @format date
         */
        start: string;
        /**
         * The inclusive last day represented by the counts.
         * @format date
         */
        end: string;
        /** Download totals in the requested package order. */
        packages: Array<{
          /**
           * The npm package name, including its scope when present.
           * @minLength 1
           */
          packageName: string;
          /**
           * The number of package downloads in the period.
           * @minimum 0
           */
          downloads: number;
        }>;
      };
    };
    /** Get daily download counts for one npm package over an inclusive period. */
    "npm.get_package_download_trend": {
      input: {
        /**
         * The npm package name, including its scope when present.
         * @minLength 1
         */
        packageName: string;
        /** A preset npm download period or an inclusive custom date range. */
        period: "last-day" | "last-week" | "last-month" | "last-year" | {
          /**
           * The inclusive start date in YYYY-MM-DD format.
           * @format date
           */
          startDate: string;
          /**
           * The inclusive end date in YYYY-MM-DD format.
           * @format date
           */
          endDate: string;
        };
      };
      output: {
        /**
         * The npm package name, including its scope when present.
         * @minLength 1
         */
        packageName: string;
        /**
         * The inclusive first day represented by the trend.
         * @format date
         */
        start: string;
        /**
         * The inclusive last day represented by the trend.
         * @format date
         */
        end: string;
        /**
         * The sum of all daily downloads in the response.
         * @minimum 0
         */
        totalDownloads: number;
        /** Daily download counts in upstream order. */
        dailyDownloads: Array<{
          /**
           * The UTC calendar day in YYYY-MM-DD format.
           * @format date
           */
          day: string;
          /**
           * The number of package downloads on this day.
           * @minimum 0
           */
          downloads: number;
        }>;
      };
    };
    /** Get the manifest for a specific npm package version or distribution tag. */
    "npm.get_package_version": {
      input: {
        /**
         * The npm package name, including its scope when present.
         * @minLength 1
         */
        packageName: string;
        /**
         * The package version or distribution tag. Defaults to latest.
         * @minLength 1
         */
        version?: string;
      };
      output: {
        /**
         * The package name.
         * @minLength 1
         */
        name: string;
        /**
         * The resolved package version.
         * @minLength 1
         */
        version: string;
        /** The package version description. */
        description?: string;
        /** The package license value. */
        license?: unknown;
        /** Keywords for this package version. */
        keywords?: Array<string>;
        /** The package homepage. */
        homepage?: string;
        /** The package repository string or object. */
        repository?: unknown;
        /** The package author string or object. */
        author?: unknown;
        /** Maintainers for this package version. */
        maintainers?: Array<{
          /**
           * The npm username.
           * @minLength 1
           */
          username?: string;
          /** The npm user-provided email value. */
          email?: string;
          [key: string]: unknown;
        }>;
        /** The package main entry point. */
        main?: string;
        /** The package TypeScript declaration entry point. */
        types?: string;
        /** Runtime dependencies keyed by package name. */
        dependencies?: Record<string, string>;
        /** Development dependencies keyed by package name. */
        devDependencies?: Record<string, string>;
        /** Peer dependencies keyed by package name. */
        peerDependencies?: Record<string, string>;
        /** Distribution metadata for this package version. */
        dist: {
          /** The package tarball integrity value. */
          integrity?: string;
          /** The package tarball SHA-1 checksum. */
          shasum: string;
          /**
           * The package tarball URL.
           * @format uri
           */
          tarball: string;
          /**
           * The number of files in the package tarball.
           * @minimum 0
           */
          fileCount?: number;
          /**
           * The unpacked package size in bytes.
           * @minimum 0
           */
          unpackedSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get npm downloads grouped by package version for the last seven days. */
    "npm.get_version_download_counts": {
      input: {
        /**
         * The npm package name, including its scope when present.
         * @minLength 1
         */
        packageName: string;
      };
      output: {
        /**
         * The npm package name, including its scope when present.
         * @minLength 1
         */
        packageName: string;
        /** The fixed period supported by npm for version download counts. */
        period: "last-week";
        /**
         * The sum of downloads across returned versions.
         * @minimum 0
         */
        totalDownloads: number;
        /** Version download counts sorted from most to least downloaded. */
        versions: Array<{
          /**
           * The published package version.
           * @minLength 1
           */
          version: string;
          /**
           * Downloads for this version during the last seven days.
           * @minimum 0
           */
          downloads: number;
        }>;
      };
    };
    /** Search the npm registry for packages with offset pagination. */
    "npm.search_packages": {
      input: {
        /**
         * The npm full-text package search query.
         * @minLength 2
         * @maxLength 64
         */
        text: string;
        /**
         * The number of results to return, from 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        size?: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        from?: number;
      };
      output: {
        /** Packages matching the search query. */
        objects: Array<{
          /** An npm package returned by registry search, with stable fields described explicitly. */
          package: {
            /**
             * The package name, including its scope when present.
             * @minLength 1
             */
            name: string;
            /**
             * The latest package version returned by npm search.
             * @minLength 1
             */
            version: string;
            /** The package description. */
            description?: string;
            /** Keywords associated with the package. */
            keywords?: Array<string>;
            /**
             * The package name normalized by npm search.
             * @minLength 1
             */
            sanitized_name?: string;
            /** An npm user identity with provider-defined fields. */
            publisher?: {
              /**
               * The npm username.
               * @minLength 1
               */
              username?: string;
              /** The npm user-provided email value. */
              email?: string;
              [key: string]: unknown;
            };
            /** Maintainers returned by npm search. */
            maintainers?: Array<{
              /**
               * The npm username.
               * @minLength 1
               */
              username?: string;
              /** The npm user-provided email value. */
              email?: string;
              [key: string]: unknown;
            }>;
            /** The package license expression. */
            license?: string;
            /** The package update timestamp returned by npm search. */
            date?: string;
            /** Links associated with the package, keyed by link type. */
            links?: Record<string, string>;
            [key: string]: unknown;
          };
          /** npm search ranking information. */
          score: {
            /** The final npm search score. */
            final?: number;
            /** Individual npm search score components. */
            detail?: {
              /** The quality score component. */
              quality?: number;
              /** The popularity score component. */
              popularity?: number;
              /** The maintenance score component. */
              maintenance?: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Recent download counts for the package. */
          downloads?: {
            /**
             * Monthly package downloads.
             * @minimum 0
             */
            monthly?: number;
            /**
             * Weekly package downloads.
             * @minimum 0
             */
            weekly?: number;
            [key: string]: unknown;
          };
          /** The dependent count returned by npm, as a number or numeric string. */
          dependents?: number | string;
          /** The timestamp when npm refreshed this search result. */
          updated?: string;
          /** The top-level npm search score. */
          searchScore?: number;
          /** npm search flags for the package. */
          flags?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /**
         * The total number of matching packages.
         * @minimum 0
         */
        total: number;
        /** The npm search response timestamp or timing value. */
        time: string;
      };
    };
  }
}
