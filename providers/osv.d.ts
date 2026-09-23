import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the complete OSV record for a vulnerability identifier. */
    "osv.get_vulnerability": {
      input: {
        /**
         * The case-sensitive OSV vulnerability identifier, such as GHSA-vp9c-fpxx-744v.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The OSV schema version used by this record. */
        schema_version?: string;
        /**
         * The vulnerability identifier.
         * @minLength 1
         */
        id: string;
        /**
         * When the record was last modified.
         * @format date-time
         */
        modified: string;
        /**
         * When the vulnerability was published.
         * @format date-time
         */
        published?: string;
        /**
         * When the vulnerability was withdrawn.
         * @format date-time
         */
        withdrawn?: string;
        /** Alternative vulnerability identifiers. */
        aliases?: Array<string>;
        /** Related vulnerability identifiers. */
        related?: Array<string>;
        /** Upstream vulnerability identifiers. */
        upstream?: Array<string>;
        /** A short vulnerability summary. */
        summary?: string;
        /** The detailed vulnerability description. */
        details?: string;
        /** Severity scores for the vulnerability. */
        severity?: Array<{
          /**
           * The scoring system, such as CVSS_V3 or CVSS_V4.
           * @minLength 1
           */
          type: string;
          /**
           * The severity score or vector encoded for the scoring system.
           * @minLength 1
           */
          score: string;
          [key: string]: unknown;
        }>;
        /** Packages affected by the vulnerability. */
        affected?: Array<{
          /** A package identified by its ecosystem and name. */
          package: {
            /**
             * The package name as used by its ecosystem.
             * @minLength 1
             */
            name: string;
            /**
             * The case-sensitive OSV ecosystem name, such as npm, PyPI, Go, or Maven.
             * @minLength 1
             */
            ecosystem: string;
            /**
             * The package URL assigned by OSV, when available.
             * @minLength 1
             */
            purl?: string;
            [key: string]: unknown;
          };
          /** Package-specific severity scores. */
          severity?: Array<{
            /**
             * The scoring system, such as CVSS_V3 or CVSS_V4.
             * @minLength 1
             */
            type: string;
            /**
             * The severity score or vector encoded for the scoring system.
             * @minLength 1
             */
            score: string;
            [key: string]: unknown;
          }>;
          /** Affected version or commit ranges. */
          ranges?: Array<{
            /**
             * The range type, such as SEMVER, ECOSYSTEM, or GIT.
             * @minLength 1
             */
            type: string;
            /**
             * The source repository for a GIT range.
             * @format uri
             */
            repo?: string;
            /** Ordered events delimiting the affected range. */
            events: Array<{
              /** The version or commit where the affected range begins. */
              introduced?: string;
              /** The version or commit where the affected range ends. */
              fixed?: string;
              /** The last known affected version or commit. */
              last_affected?: string;
              /** The first version or commit outside the affected range. */
              limit?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** Known affected versions. */
          versions?: Array<string>;
          /** Additional data defined by the package ecosystem. */
          ecosystem_specific?: unknown;
          /** Additional data defined by the source vulnerability database. */
          database_specific?: unknown;
          [key: string]: unknown;
        }>;
        /** References associated with the vulnerability. */
        references?: Array<{
          /**
           * The OSV reference type, such as ADVISORY, REPORT, or WEB.
           * @minLength 1
           */
          type: string;
          /**
           * The referenced resource URL.
           * @format uri
           */
          url: string;
          [key: string]: unknown;
        }>;
        /** Credits associated with the vulnerability. */
        credits?: Array<{
          /**
           * The credited person or organization.
           * @minLength 1
           */
          name: string;
          /** Contact identifiers for the credited party. */
          contact?: Array<string>;
          /** The credit role defined by the OSV schema. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** Additional data defined by the source vulnerability database. */
        database_specific?: unknown;
        [key: string]: unknown;
      };
    };
    /** Find known vulnerabilities associated with a package or affecting a specific package version. */
    "osv.query_vulnerabilities": {
      input: {
        /**
         * The case-sensitive OSV ecosystem name, such as npm, PyPI, Go, or Maven.
         * @minLength 1
         */
        ecosystem: string;
        /**
         * The package name as used by its ecosystem.
         * @minLength 1
         */
        package: string;
        /**
         * The package version to check. Omit it to return vulnerabilities across all versions.
         * @minLength 1
         */
        version?: string;
        /**
         * The continuation token returned by a previous query.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** Vulnerabilities affecting the package version. */
        vulnerabilities: Array<{
          /** The OSV schema version used by this record. */
          schema_version?: string;
          /**
           * The vulnerability identifier.
           * @minLength 1
           */
          id: string;
          /**
           * When the record was last modified.
           * @format date-time
           */
          modified: string;
          /**
           * When the vulnerability was published.
           * @format date-time
           */
          published?: string;
          /**
           * When the vulnerability was withdrawn.
           * @format date-time
           */
          withdrawn?: string;
          /** Alternative vulnerability identifiers. */
          aliases?: Array<string>;
          /** Related vulnerability identifiers. */
          related?: Array<string>;
          /** Upstream vulnerability identifiers. */
          upstream?: Array<string>;
          /** A short vulnerability summary. */
          summary?: string;
          /** The detailed vulnerability description. */
          details?: string;
          /** Severity scores for the vulnerability. */
          severity?: Array<{
            /**
             * The scoring system, such as CVSS_V3 or CVSS_V4.
             * @minLength 1
             */
            type: string;
            /**
             * The severity score or vector encoded for the scoring system.
             * @minLength 1
             */
            score: string;
            [key: string]: unknown;
          }>;
          /** Packages affected by the vulnerability. */
          affected?: Array<{
            /** A package identified by its ecosystem and name. */
            package: {
              /**
               * The package name as used by its ecosystem.
               * @minLength 1
               */
              name: string;
              /**
               * The case-sensitive OSV ecosystem name, such as npm, PyPI, Go, or Maven.
               * @minLength 1
               */
              ecosystem: string;
              /**
               * The package URL assigned by OSV, when available.
               * @minLength 1
               */
              purl?: string;
              [key: string]: unknown;
            };
            /** Package-specific severity scores. */
            severity?: Array<{
              /**
               * The scoring system, such as CVSS_V3 or CVSS_V4.
               * @minLength 1
               */
              type: string;
              /**
               * The severity score or vector encoded for the scoring system.
               * @minLength 1
               */
              score: string;
              [key: string]: unknown;
            }>;
            /** Affected version or commit ranges. */
            ranges?: Array<{
              /**
               * The range type, such as SEMVER, ECOSYSTEM, or GIT.
               * @minLength 1
               */
              type: string;
              /**
               * The source repository for a GIT range.
               * @format uri
               */
              repo?: string;
              /** Ordered events delimiting the affected range. */
              events: Array<{
                /** The version or commit where the affected range begins. */
                introduced?: string;
                /** The version or commit where the affected range ends. */
                fixed?: string;
                /** The last known affected version or commit. */
                last_affected?: string;
                /** The first version or commit outside the affected range. */
                limit?: string;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            }>;
            /** Known affected versions. */
            versions?: Array<string>;
            /** Additional data defined by the package ecosystem. */
            ecosystem_specific?: unknown;
            /** Additional data defined by the source vulnerability database. */
            database_specific?: unknown;
            [key: string]: unknown;
          }>;
          /** References associated with the vulnerability. */
          references?: Array<{
            /**
             * The OSV reference type, such as ADVISORY, REPORT, or WEB.
             * @minLength 1
             */
            type: string;
            /**
             * The referenced resource URL.
             * @format uri
             */
            url: string;
            [key: string]: unknown;
          }>;
          /** Credits associated with the vulnerability. */
          credits?: Array<{
            /**
             * The credited person or organization.
             * @minLength 1
             */
            name: string;
            /** Contact identifiers for the credited party. */
            contact?: Array<string>;
            /** The credit role defined by the OSV schema. */
            type?: string;
            [key: string]: unknown;
          }>;
          /** Additional data defined by the source vulnerability database. */
          database_specific?: unknown;
          [key: string]: unknown;
        }>;
        /** The continuation token when more results are available. */
        nextPageToken?: string;
      };
    };
  }
}
