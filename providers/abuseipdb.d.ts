import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read the structured AbuseIPDB blacklist feed in JSON format. */
    "abuseipdb.blacklist": {
      input: {
        /**
         * Maximum number of blacklist entries to return.
         * @minimum 1
         */
        limit?: number;
        /** Optional IP version filter for blacklist results. */
        ipVersion?: number;
        /**
         * Minimum abuse confidence score required for returned entries.
         * @minimum 1
         * @maximum 100
         */
        confidenceMinimum?: number;
        /** Optional allowlist of countries to include in the blacklist response. */
        onlyCountries?: Array<string>;
        /** Optional denylist of countries to exclude from the blacklist response. */
        exceptCountries?: Array<string>;
      };
      output: {
        /** Structured blacklist entries returned by AbuseIPDB. */
        entries: Array<Record<string, unknown>>;
        /** Timestamp when the blacklist feed was generated. */
        generatedAt: string;
      };
    };
    /** Inspect a CIDR block for reported addresses with AbuseIPDB. */
    "abuseipdb.check_block": {
      input: {
        /** CIDR network to inspect with the AbuseIPDB block endpoint. */
        network: string;
        /**
         * Look-back window in days for AbuseIPDB report matching.
         * @minimum 1
         * @maximum 365
         */
        maxAgeInDays?: number;
      };
      output: {
        /** Normalized AbuseIPDB network block summary. */
        block: {
          /** Network address returned for the block. */
          networkAddress: string;
          /** Netmask returned for the block. */
          netmask: string;
          /** Minimum IP address within the block. */
          minAddress: string;
          /** Maximum IP address within the block. */
          maxAddress: string;
          /** Number of possible hosts contained in the block. */
          numPossibleHosts: number;
          /** Address space description returned by AbuseIPDB. */
          addressSpaceDesc: string;
        };
        /** Reported addresses returned for the requested network block. */
        reportedAddresses: Array<{
          /** Reported IP address inside the requested network block. */
          ipAddress: string;
          /** Number of reports recorded for the reported address. */
          numReports: number;
          /** Timestamp of the most recent report for the reported address. */
          mostRecentReport: string | null;
          /** Abuse confidence score for the reported address. */
          abuseConfidenceScore: number;
          /** Country code associated with the reported address when available. */
          countryCode: string | null;
        }>;
      };
    };
    /** Check the abuse reputation of a single IP address with AbuseIPDB. */
    "abuseipdb.check_ip": {
      input: {
        /** IPv4 or IPv6 address to inspect. */
        ipAddress: string;
        /**
         * Look-back window in days for AbuseIPDB report matching.
         * @minimum 1
         * @maximum 365
         */
        maxAgeInDays?: number;
        /** Whether to include detailed abuse reports in the response. */
        verbose?: boolean;
      };
      output: {
        /** Normalized AbuseIPDB IP summary. */
        ip: {
          /** IP address returned by AbuseIPDB. */
          ipAddress: string;
          /** Whether AbuseIPDB considers the IP publicly routable. */
          isPublic: boolean;
          /** IP protocol version reported by AbuseIPDB. */
          ipVersion: number;
          /** Abuse confidence score returned by AbuseIPDB. */
          abuseConfidenceScore: number;
          /** Total number of reports recorded for the IP. */
          totalReports: number;
          /** Number of distinct reporters that submitted reports for the IP. */
          numDistinctUsers: number;
          /** Country code associated with the IP when available. */
          countryCode: string | null;
          /** Usage classification associated with the IP when available. */
          usageType: string | null;
          /** Internet service provider associated with the IP. */
          isp: string | null;
          /** Domain associated with the IP when available. */
          domain: string | null;
          /** Hostnames associated with the IP. */
          hostnames: Array<string>;
          /** Timestamp of the most recent abuse report when available. */
          lastReportedAt: string | null;
        };
        /** Detailed abuse reports when verbose mode is enabled. */
        reports: Array<{
          /** Timestamp when the abuse report was submitted. */
          reportedAt: string;
          /** Reporter-supplied comment for the abuse report. */
          comment: string;
          /** Abuse category identifiers associated with the report. */
          categories: Array<number>;
          /** Reporter identifier assigned by AbuseIPDB. */
          reporterId: number;
          /** Reporter country code when AbuseIPDB includes it. */
          reporterCountryCode: string | null;
          /** Reporter country name when AbuseIPDB includes it. */
          reporterCountryName: string | null;
        }> | null;
      };
    };
    /** List detailed AbuseIPDB reports for a single IP address. */
    "abuseipdb.get_reports": {
      input: {
        /** IPv4 or IPv6 address to inspect. */
        ipAddress: string;
        /**
         * Look-back window in days for AbuseIPDB report matching.
         * @minimum 1
         * @maximum 365
         */
        maxAgeInDays?: number;
        /**
         * Page number to request from the AbuseIPDB reports endpoint.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of reports to request per page from AbuseIPDB.
         * @minimum 1
         */
        perPage?: number;
      };
      output: {
        /** Detailed reports returned by AbuseIPDB. */
        reports: Array<{
          /** Timestamp when the abuse report was submitted. */
          reportedAt: string;
          /** Reporter-supplied comment for the abuse report. */
          comment: string;
          /** Abuse category identifiers associated with the report. */
          categories: Array<number>;
          /** Reporter identifier assigned by AbuseIPDB. */
          reporterId: number;
          /** Reporter country code when AbuseIPDB includes it. */
          reporterCountryCode: string | null;
          /** Reporter country name when AbuseIPDB includes it. */
          reporterCountryName: string | null;
        }>;
        /** Pagination metadata returned by the AbuseIPDB reports endpoint. */
        pagination: {
          /** Total number of reports matching the request. */
          total: number;
          /** Current report page number. */
          page: number;
          /** Number of reports returned in the current page. */
          count: number;
          /** Requested page size for the report list. */
          perPage: number;
          /** Last available page number for the report list. */
          lastPage: number;
          /** Next page URL returned by AbuseIPDB when available. */
          nextPageUrl: string | null;
          /** Previous page URL returned by AbuseIPDB when available. */
          previousPageUrl: string | null;
        };
      };
    };
  }
}
