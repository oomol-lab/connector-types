import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Enrich a domain name with LeadBoxer organization and firmographic data. */
    "leadboxer.lookup_domain": {
      input: {
        /**
         * The clean domain name to enrich, without a protocol or www prefix.
         * @minLength 1
         */
        domain: string;
        /**
         * The LeadBoxer dataset ID whose credits should be charged for the lookup.
         * @minLength 1
         */
        datasetId?: string;
      };
      output: {
        /** The organization's display name. */
        organizationName?: string;
        /** The organization's company type. */
        organizationType?: string;
        /** The organization's operating status. */
        organizationStatus?: string;
        /** The organization's primary domain. */
        organizationDomain?: string;
        /** The organization's known domain aliases. */
        organizationDomainAliases?: Array<string>;
        /** The organization's industry code. */
        organizationIndustryCode?: string;
        /** The organization's broad industry group. */
        organizationIndustryGroup?: string;
        /** The organization's industry name. */
        organizationIndustryName?: string;
        /** The code for the organization's employee-count range. */
        organizationEmployeeCountRangeCode?: string;
        /** The label for the organization's employee-count range. */
        organizationEmployeeCountRangeName?: string;
        /** The source used for the organization enrichment. */
        organizationSource?: string;
        /** The date of the organization enrichment report. */
        organizationReportDate?: string;
        /** The organization's full description. */
        organizationDescription?: string;
        /** The organization's short description. */
        organizationDescriptionShort?: string;
        /** The organization's reported specialties. */
        organizationSpecialties?: Array<string>;
        /** The organization address returned by LeadBoxer. */
        organizationAddress?: {
          /** The organization's street address. */
          organizationStreetName?: string;
          /** The organization's city. */
          organizationCity?: string;
          /** The organization's state or administrative region. */
          organizationState?: string;
          /** The organization's postal code. */
          organizationPostalCode?: string;
          /** The organization's country name. */
          organizationCountry?: string;
          /** The organization's country code. */
          organizationCountryCode?: string;
          /** The organization's phone number. */
          organizationPhone?: string;
          [key: string]: unknown;
        };
        /** The organization social links returned by LeadBoxer. */
        organizationSocialLinks?: {
          /** The organization's LinkedIn profile URL. */
          organizationLinkedinUrl?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Enrich an IPv4 or IPv6 address with LeadBoxer organization, network, and geolocation data. */
    "leadboxer.lookup_ip": {
      input: {
        /**
         * The IPv4 or IPv6 address to enrich.
         * @minLength 1
         */
        ip: string;
        /**
         * The LeadBoxer dataset ID whose credits should be charged for the lookup.
         * @minLength 1
         */
        datasetId?: string;
      };
      output: {
        /** The CIDR range that contains the searched IP address. */
        ipRange?: string;
        /** The ISO 3166-1 alpha-2 country code associated with the IP address. */
        ipCountryCode?: string;
        /** The full country name associated with the IP address. */
        ipCountryName?: string;
        /** The sub-continent or geographic region associated with the IP address. */
        ipSubContinent?: string;
        /** The administrative region or state associated with the IP address. */
        ipRegionName?: string;
        /** The city associated with the IP address. */
        ipCity?: string;
        /** The latitude coordinate returned for the IP address. */
        ipLatitude?: string;
        /** The longitude coordinate returned for the IP address. */
        ipLongitude?: string;
        /** The timezone associated with the IP address. */
        ipTimezone?: string;
        /** The internet service provider associated with the IP address. */
        ipIsp?: string;
        /** The registered organization associated with the IP address. */
        ipOrganization?: string;
        /** The primary domain associated with the IP address. */
        ipDomain?: string;
        /** The LeadBoxer usage classification for the IP address. */
        ipUsageType?: string;
        /** The normalized IP address used for the lookup. */
        searchIp?: string;
        /** The lookup response time in milliseconds. */
        searchResponseTimeMs?: number;
        [key: string]: unknown;
      };
    };
  }
}
