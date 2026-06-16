import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Categorize a website URL with Klazify and return the aggregated domain enrichment overview. */
    "klazify.categorize_url": {
      input: {
        /**
         * The website URL or email address to enrich with Klazify.
         * @minLength 1
         * @pattern \S
         */
        url: string;
      };
      output: {
        /** Whether the Klazify request succeeded. */
        success: boolean;
        /** Normalized Klazify domain overview data. */
        domain: {
          /** The normalized domain URL returned by Klazify. */
          domainUrl?: string | null;
          /** The hosted logo URL when available. */
          logoUrl?: string | null;
          /** The categories returned by Klazify. */
          categories?: Array<{
            /** The category path returned by Klazify. */
            name: string;
            /** The confidence score between 0 and 1 when provided. */
            confidence: number | null;
            /** The IAB category identifier or label when provided. */
            iabCategory: string | null;
            /** The raw category payload returned by Klazify. */
            raw: Record<string, unknown>;
          }>;
          /** Normalized social media links returned by Klazify. */
          socialMedia?: {
            /** The Facebook profile URL when available. */
            facebookUrl?: string | null;
            /** The Twitter or X profile URL when available. */
            twitterUrl?: string | null;
            /** The Instagram profile URL when available. */
            instagramUrl?: string | null;
            /** The YouTube channel URL when available. */
            youtubeUrl?: string | null;
            /** The LinkedIn profile URL when available. */
            linkedinUrl?: string | null;
            /** The GitHub profile URL when available. */
            githubUrl?: string | null;
            /** The Pinterest profile URL when available. */
            pinterestUrl?: string | null;
            /** The Medium profile URL when available. */
            mediumUrl?: string | null;
            /** The raw social media payload returned by Klazify. */
            raw?: Record<string, unknown>;
          } | null;
          /** The raw domain payload returned by Klazify. */
          raw?: Record<string, unknown>;
        };
        /** Normalized company profile data returned by Klazify. */
        company?: {
          /** The company name when available. */
          name?: string | null;
          /** The company city when available. */
          city?: string | null;
          /** The company state or region code when available. */
          stateCode?: string | null;
          /** The company country code when available. */
          countryCode?: string | null;
          /** The employee range when available. */
          employeesRange?: string | null;
          /** The company revenue value when available. */
          revenue?: string | number | null;
          /** The total funding amount when available. */
          raised?: string | number | null;
          /** The company tags returned by Klazify. */
          tags?: Array<string>;
          /** The company technologies returned by Klazify. */
          tech?: Array<string>;
          /** The raw company payload returned by Klazify. */
          raw?: Record<string, unknown>;
        } | null;
        /** Normalized domain registration metadata returned by Klazify. */
        domainRegistrationData?: {
          /** The registration date when available. */
          domainAgeDate?: string | null;
          /** The number of days since registration when available. */
          domainAgeDaysAgo?: number | null;
          /** The expiration date when available. */
          domainExpirationDate?: string | null;
          /** The number of days remaining until expiration when available. */
          domainExpirationDaysLeft?: number | null;
          /** The raw domain registration payload returned by Klazify. */
          raw?: Record<string, unknown>;
        } | null;
        /** The similar domains returned by Klazify when available. */
        similarDomains?: Array<string>;
        /** The raw Klazify response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Return company profile data for one website URL with Klazify. */
    "klazify.get_company_data": {
      input: {
        /**
         * The website URL or email address to enrich with Klazify.
         * @minLength 1
         * @pattern \S
         */
        url: string;
        /** Whether Klazify should fetch fresh live data when supported. */
        refresh?: boolean;
      };
      output: {
        /** Whether the Klazify request succeeded. */
        success: boolean;
        /** Normalized Klazify domain overview data. */
        domain: {
          /** The normalized domain URL returned by Klazify. */
          domainUrl?: string | null;
          /** The hosted logo URL when available. */
          logoUrl?: string | null;
          /** The categories returned by Klazify. */
          categories?: Array<{
            /** The category path returned by Klazify. */
            name: string;
            /** The confidence score between 0 and 1 when provided. */
            confidence: number | null;
            /** The IAB category identifier or label when provided. */
            iabCategory: string | null;
            /** The raw category payload returned by Klazify. */
            raw: Record<string, unknown>;
          }>;
          /** Normalized social media links returned by Klazify. */
          socialMedia?: {
            /** The Facebook profile URL when available. */
            facebookUrl?: string | null;
            /** The Twitter or X profile URL when available. */
            twitterUrl?: string | null;
            /** The Instagram profile URL when available. */
            instagramUrl?: string | null;
            /** The YouTube channel URL when available. */
            youtubeUrl?: string | null;
            /** The LinkedIn profile URL when available. */
            linkedinUrl?: string | null;
            /** The GitHub profile URL when available. */
            githubUrl?: string | null;
            /** The Pinterest profile URL when available. */
            pinterestUrl?: string | null;
            /** The Medium profile URL when available. */
            mediumUrl?: string | null;
            /** The raw social media payload returned by Klazify. */
            raw?: Record<string, unknown>;
          } | null;
          /** The raw domain payload returned by Klazify. */
          raw?: Record<string, unknown>;
        };
        /** Normalized company profile data returned by Klazify. */
        company: {
          /** The company name when available. */
          name?: string | null;
          /** The company city when available. */
          city?: string | null;
          /** The company state or region code when available. */
          stateCode?: string | null;
          /** The company country code when available. */
          countryCode?: string | null;
          /** The employee range when available. */
          employeesRange?: string | null;
          /** The company revenue value when available. */
          revenue?: string | number | null;
          /** The total funding amount when available. */
          raised?: string | number | null;
          /** The company tags returned by Klazify. */
          tags?: Array<string>;
          /** The company technologies returned by Klazify. */
          tech?: Array<string>;
          /** The raw company payload returned by Klazify. */
          raw?: Record<string, unknown>;
        } | null;
        /** The raw Klazify response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Return the registration and expiration details for one website URL with Klazify. */
    "klazify.get_domain_expiration": {
      input: {
        /**
         * The website URL or email address to enrich with Klazify.
         * @minLength 1
         * @pattern \S
         */
        url: string;
        /** Whether Klazify should fetch fresh live data when supported. */
        refresh?: boolean;
      };
      output: {
        /** Whether the Klazify request succeeded. */
        success: boolean;
        /** Normalized Klazify domain overview data. */
        domain: {
          /** The normalized domain URL returned by Klazify. */
          domainUrl?: string | null;
          /** The hosted logo URL when available. */
          logoUrl?: string | null;
          /** The categories returned by Klazify. */
          categories?: Array<{
            /** The category path returned by Klazify. */
            name: string;
            /** The confidence score between 0 and 1 when provided. */
            confidence: number | null;
            /** The IAB category identifier or label when provided. */
            iabCategory: string | null;
            /** The raw category payload returned by Klazify. */
            raw: Record<string, unknown>;
          }>;
          /** Normalized social media links returned by Klazify. */
          socialMedia?: {
            /** The Facebook profile URL when available. */
            facebookUrl?: string | null;
            /** The Twitter or X profile URL when available. */
            twitterUrl?: string | null;
            /** The Instagram profile URL when available. */
            instagramUrl?: string | null;
            /** The YouTube channel URL when available. */
            youtubeUrl?: string | null;
            /** The LinkedIn profile URL when available. */
            linkedinUrl?: string | null;
            /** The GitHub profile URL when available. */
            githubUrl?: string | null;
            /** The Pinterest profile URL when available. */
            pinterestUrl?: string | null;
            /** The Medium profile URL when available. */
            mediumUrl?: string | null;
            /** The raw social media payload returned by Klazify. */
            raw?: Record<string, unknown>;
          } | null;
          /** The raw domain payload returned by Klazify. */
          raw?: Record<string, unknown>;
        };
        /** Normalized domain registration metadata returned by Klazify. */
        domainRegistrationData: {
          /** The registration date when available. */
          domainAgeDate?: string | null;
          /** The number of days since registration when available. */
          domainAgeDaysAgo?: number | null;
          /** The expiration date when available. */
          domainExpirationDate?: string | null;
          /** The number of days remaining until expiration when available. */
          domainExpirationDaysLeft?: number | null;
          /** The raw domain registration payload returned by Klazify. */
          raw?: Record<string, unknown>;
        } | null;
        /** The raw Klazify response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Return the hosted logo URL for one website URL with Klazify. */
    "klazify.get_domain_logo": {
      input: {
        /**
         * The website URL or email address to enrich with Klazify.
         * @minLength 1
         * @pattern \S
         */
        url: string;
        /** Whether Klazify should fetch fresh live data when supported. */
        refresh?: boolean;
      };
      output: {
        /** Whether the Klazify request succeeded. */
        success: boolean;
        /** Normalized Klazify domain overview data. */
        domain: {
          /** The normalized domain URL returned by Klazify. */
          domainUrl?: string | null;
          /** The hosted logo URL when available. */
          logoUrl?: string | null;
          /** The categories returned by Klazify. */
          categories?: Array<{
            /** The category path returned by Klazify. */
            name: string;
            /** The confidence score between 0 and 1 when provided. */
            confidence: number | null;
            /** The IAB category identifier or label when provided. */
            iabCategory: string | null;
            /** The raw category payload returned by Klazify. */
            raw: Record<string, unknown>;
          }>;
          /** Normalized social media links returned by Klazify. */
          socialMedia?: {
            /** The Facebook profile URL when available. */
            facebookUrl?: string | null;
            /** The Twitter or X profile URL when available. */
            twitterUrl?: string | null;
            /** The Instagram profile URL when available. */
            instagramUrl?: string | null;
            /** The YouTube channel URL when available. */
            youtubeUrl?: string | null;
            /** The LinkedIn profile URL when available. */
            linkedinUrl?: string | null;
            /** The GitHub profile URL when available. */
            githubUrl?: string | null;
            /** The Pinterest profile URL when available. */
            pinterestUrl?: string | null;
            /** The Medium profile URL when available. */
            mediumUrl?: string | null;
            /** The raw social media payload returned by Klazify. */
            raw?: Record<string, unknown>;
          } | null;
          /** The raw domain payload returned by Klazify. */
          raw?: Record<string, unknown>;
        };
        /** The raw Klazify response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Return the IAB category classification for one website URL with Klazify. */
    "klazify.get_iab_categories": {
      input: {
        /**
         * The website URL or email address to enrich with Klazify.
         * @minLength 1
         * @pattern \S
         */
        url: string;
        /** Whether Klazify should fetch fresh live data when supported. */
        refresh?: boolean;
      };
      output: {
        /** Whether the Klazify request succeeded. */
        success: boolean;
        /** Normalized Klazify domain overview data. */
        domain: {
          /** The normalized domain URL returned by Klazify. */
          domainUrl?: string | null;
          /** The hosted logo URL when available. */
          logoUrl?: string | null;
          /** The categories returned by Klazify. */
          categories?: Array<{
            /** The category path returned by Klazify. */
            name: string;
            /** The confidence score between 0 and 1 when provided. */
            confidence: number | null;
            /** The IAB category identifier or label when provided. */
            iabCategory: string | null;
            /** The raw category payload returned by Klazify. */
            raw: Record<string, unknown>;
          }>;
          /** Normalized social media links returned by Klazify. */
          socialMedia?: {
            /** The Facebook profile URL when available. */
            facebookUrl?: string | null;
            /** The Twitter or X profile URL when available. */
            twitterUrl?: string | null;
            /** The Instagram profile URL when available. */
            instagramUrl?: string | null;
            /** The YouTube channel URL when available. */
            youtubeUrl?: string | null;
            /** The LinkedIn profile URL when available. */
            linkedinUrl?: string | null;
            /** The GitHub profile URL when available. */
            githubUrl?: string | null;
            /** The Pinterest profile URL when available. */
            pinterestUrl?: string | null;
            /** The Medium profile URL when available. */
            mediumUrl?: string | null;
            /** The raw social media payload returned by Klazify. */
            raw?: Record<string, unknown>;
          } | null;
          /** The raw domain payload returned by Klazify. */
          raw?: Record<string, unknown>;
        };
        /** The raw Klazify response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Return similar or competitor domains for one website URL with Klazify. */
    "klazify.get_similar_domains": {
      input: {
        /**
         * The website URL or email address to enrich with Klazify.
         * @minLength 1
         * @pattern \S
         */
        url: string;
        /** Whether Klazify should fetch fresh live data when supported. */
        refresh?: boolean;
      };
      output: {
        /** Normalized Klazify domain overview data. */
        domain: {
          /** The normalized domain URL returned by Klazify. */
          domainUrl?: string | null;
          /** The hosted logo URL when available. */
          logoUrl?: string | null;
          /** The categories returned by Klazify. */
          categories?: Array<{
            /** The category path returned by Klazify. */
            name: string;
            /** The confidence score between 0 and 1 when provided. */
            confidence: number | null;
            /** The IAB category identifier or label when provided. */
            iabCategory: string | null;
            /** The raw category payload returned by Klazify. */
            raw: Record<string, unknown>;
          }>;
          /** Normalized social media links returned by Klazify. */
          socialMedia?: {
            /** The Facebook profile URL when available. */
            facebookUrl?: string | null;
            /** The Twitter or X profile URL when available. */
            twitterUrl?: string | null;
            /** The Instagram profile URL when available. */
            instagramUrl?: string | null;
            /** The YouTube channel URL when available. */
            youtubeUrl?: string | null;
            /** The LinkedIn profile URL when available. */
            linkedinUrl?: string | null;
            /** The GitHub profile URL when available. */
            githubUrl?: string | null;
            /** The Pinterest profile URL when available. */
            pinterestUrl?: string | null;
            /** The Medium profile URL when available. */
            mediumUrl?: string | null;
            /** The raw social media payload returned by Klazify. */
            raw?: Record<string, unknown>;
          } | null;
          /** The raw domain payload returned by Klazify. */
          raw?: Record<string, unknown>;
        };
        /** The similar domains returned by Klazify. */
        similarDomains: Array<string>;
        /** Klazify API usage counters when the endpoint returns them. */
        apiUsage?: {
          /** The remaining API calls when available. */
          remainingApiCalls?: number | null;
          /** The API calls used this month when available. */
          thisMonthApiCalls?: number | null;
          /** The raw API usage payload returned by Klazify. */
          raw?: Record<string, unknown>;
        } | null;
        /** Whether the Klazify request succeeded. */
        success: boolean;
        /** The raw similar-domain response returned by Klazify. */
        raw?: Record<string, unknown>;
      };
    };
    /** Return the social media profile URLs for one website URL with Klazify. */
    "klazify.get_social_media_links": {
      input: {
        /**
         * The website URL or email address to enrich with Klazify.
         * @minLength 1
         * @pattern \S
         */
        url: string;
        /** Whether Klazify should fetch fresh live data when supported. */
        refresh?: boolean;
      };
      output: {
        /** Whether the Klazify request succeeded. */
        success: boolean;
        /** Normalized Klazify domain overview data. */
        domain: {
          /** The normalized domain URL returned by Klazify. */
          domainUrl?: string | null;
          /** The hosted logo URL when available. */
          logoUrl?: string | null;
          /** The categories returned by Klazify. */
          categories?: Array<{
            /** The category path returned by Klazify. */
            name: string;
            /** The confidence score between 0 and 1 when provided. */
            confidence: number | null;
            /** The IAB category identifier or label when provided. */
            iabCategory: string | null;
            /** The raw category payload returned by Klazify. */
            raw: Record<string, unknown>;
          }>;
          /** Normalized social media links returned by Klazify. */
          socialMedia?: {
            /** The Facebook profile URL when available. */
            facebookUrl?: string | null;
            /** The Twitter or X profile URL when available. */
            twitterUrl?: string | null;
            /** The Instagram profile URL when available. */
            instagramUrl?: string | null;
            /** The YouTube channel URL when available. */
            youtubeUrl?: string | null;
            /** The LinkedIn profile URL when available. */
            linkedinUrl?: string | null;
            /** The GitHub profile URL when available. */
            githubUrl?: string | null;
            /** The Pinterest profile URL when available. */
            pinterestUrl?: string | null;
            /** The Medium profile URL when available. */
            mediumUrl?: string | null;
            /** The raw social media payload returned by Klazify. */
            raw?: Record<string, unknown>;
          } | null;
          /** The raw domain payload returned by Klazify. */
          raw?: Record<string, unknown>;
        };
        /** Normalized social media links returned by Klazify. */
        socialMedia: {
          /** The Facebook profile URL when available. */
          facebookUrl?: string | null;
          /** The Twitter or X profile URL when available. */
          twitterUrl?: string | null;
          /** The Instagram profile URL when available. */
          instagramUrl?: string | null;
          /** The YouTube channel URL when available. */
          youtubeUrl?: string | null;
          /** The LinkedIn profile URL when available. */
          linkedinUrl?: string | null;
          /** The GitHub profile URL when available. */
          githubUrl?: string | null;
          /** The Pinterest profile URL when available. */
          pinterestUrl?: string | null;
          /** The Medium profile URL when available. */
          mediumUrl?: string | null;
          /** The raw social media payload returned by Klazify. */
          raw?: Record<string, unknown>;
        } | null;
        /** The raw Klazify response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Return the detected technology stack for one website URL with Klazify. */
    "klazify.get_tech_stack": {
      input: {
        /**
         * The website URL or email address to enrich with Klazify.
         * @minLength 1
         * @pattern \S
         */
        url: string;
        /** Whether Klazify should fetch fresh live data when supported. */
        refresh?: boolean;
      };
      output: {
        /** Whether the Klazify request succeeded. */
        success: boolean;
        /** Normalized Klazify domain overview data. */
        domain: {
          /** The normalized domain URL returned by Klazify. */
          domainUrl?: string | null;
          /** The hosted logo URL when available. */
          logoUrl?: string | null;
          /** The categories returned by Klazify. */
          categories?: Array<{
            /** The category path returned by Klazify. */
            name: string;
            /** The confidence score between 0 and 1 when provided. */
            confidence: number | null;
            /** The IAB category identifier or label when provided. */
            iabCategory: string | null;
            /** The raw category payload returned by Klazify. */
            raw: Record<string, unknown>;
          }>;
          /** Normalized social media links returned by Klazify. */
          socialMedia?: {
            /** The Facebook profile URL when available. */
            facebookUrl?: string | null;
            /** The Twitter or X profile URL when available. */
            twitterUrl?: string | null;
            /** The Instagram profile URL when available. */
            instagramUrl?: string | null;
            /** The YouTube channel URL when available. */
            youtubeUrl?: string | null;
            /** The LinkedIn profile URL when available. */
            linkedinUrl?: string | null;
            /** The GitHub profile URL when available. */
            githubUrl?: string | null;
            /** The Pinterest profile URL when available. */
            pinterestUrl?: string | null;
            /** The Medium profile URL when available. */
            mediumUrl?: string | null;
            /** The raw social media payload returned by Klazify. */
            raw?: Record<string, unknown>;
          } | null;
          /** The raw domain payload returned by Klazify. */
          raw?: Record<string, unknown>;
        };
        /** Normalized company profile data returned by Klazify. */
        company: {
          /** The company name when available. */
          name?: string | null;
          /** The company city when available. */
          city?: string | null;
          /** The company state or region code when available. */
          stateCode?: string | null;
          /** The company country code when available. */
          countryCode?: string | null;
          /** The employee range when available. */
          employeesRange?: string | null;
          /** The company revenue value when available. */
          revenue?: string | number | null;
          /** The total funding amount when available. */
          raised?: string | number | null;
          /** The company tags returned by Klazify. */
          tags?: Array<string>;
          /** The company technologies returned by Klazify. */
          tech?: Array<string>;
          /** The raw company payload returned by Klazify. */
          raw?: Record<string, unknown>;
        } | null;
        /** The normalized technology identifiers returned by Klazify. */
        technologies: Array<string>;
        /** The raw Klazify response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
