import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Look up a BigPicture company profile by domain name. */
    "bigpicture_io.find_company_by_domain": {
      input: {
        /**
         * The company domain to look up, such as `example.com`, without a URL scheme.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** A BigPicture company profile. */
        company: {
          /** The BigPicture company identifier. */
          id?: string | null;
          /** The company's primary domain. */
          domain?: string | null;
          /** The company display name. */
          name?: string | null;
          /** The company's legal name. */
          legalName?: string | null;
          /** The URL for the company logo. */
          logo?: string | null;
          /** The company website URL. */
          url?: string | null;
          /** The descriptive tags assigned to the company. */
          tags?: Array<string> | null;
          /** The best description BigPicture has for the company. */
          description?: string | null;
          /** The company category returned by BigPicture. */
          category?: string | null;
          /** The company type returned by BigPicture. */
          type?: string | null;
          /** The public stock ticker when available. */
          ticker?: string | null;
          /** The public stock exchange when available. */
          exchange?: string | null;
          /** The employee count or employee range value returned by BigPicture. */
          employees?: unknown;
          /** The year the company was founded. */
          foundedYear?: unknown;
          /** The timestamp when BigPicture indexed the company profile. */
          indexedAt?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Look up the company associated with an IPv4 or IPv6 address using BigPicture. */
    "bigpicture_io.find_company_by_ip": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
      };
      output: {
        /** The IP address that was requested. */
        ip?: string;
        /** The result type, such as business, ISP, or hosting. */
        type?: string | null;
        /** Whether the company match is fuzzy. */
        fuzzy?: boolean | null;
        /** The confidence score of the matched company on a scale from 0 to 1. */
        confidence?: number | null;
        /** Geographic details BigPicture associates with the IP address. */
        geo?: {
          /** The city where the IP address is located. */
          city?: string | null;
          /** The state or region where the IP address is located. */
          state?: string | null;
          /** The state or region code for the IP address. */
          stateCode?: string | null;
          /** The country where the IP address is located. */
          country?: string | null;
          /** The country code for the IP address. */
          countryCode?: string | null;
          /** The continent where the IP address is located. */
          continent?: string | null;
          /** The continent code for the IP address. */
          continentCode?: string | null;
          /** Whether the IP address is located in the European Union. */
          isEU?: boolean | null;
          [key: string]: unknown;
        };
        /** A BigPicture company profile. */
        company?: {
          /** The BigPicture company identifier. */
          id?: string | null;
          /** The company's primary domain. */
          domain?: string | null;
          /** The company display name. */
          name?: string | null;
          /** The company's legal name. */
          legalName?: string | null;
          /** The URL for the company logo. */
          logo?: string | null;
          /** The company website URL. */
          url?: string | null;
          /** The descriptive tags assigned to the company. */
          tags?: Array<string> | null;
          /** The best description BigPicture has for the company. */
          description?: string | null;
          /** The company category returned by BigPicture. */
          category?: string | null;
          /** The company type returned by BigPicture. */
          type?: string | null;
          /** The public stock ticker when available. */
          ticker?: string | null;
          /** The public stock exchange when available. */
          exchange?: string | null;
          /** The employee count or employee range value returned by BigPicture. */
          employees?: unknown;
          /** The year the company was founded. */
          foundedYear?: unknown;
          /** The timestamp when BigPicture indexed the company profile. */
          indexedAt?: string | null;
          [key: string]: unknown;
        };
        /** WHOIS ownership details BigPicture associates with the IP. */
        whois?: {
          /** The domain associated with the WHOIS record. */
          domain?: string | null;
          /** The organization name associated with the WHOIS record. */
          name?: string | null;
          [key: string]: unknown;
        };
        /** ASN details BigPicture associates with the IP. */
        asn?: {
          /** The autonomous system number. */
          asn?: string | null;
          /** The organization name associated with the ASN record. */
          name?: string | null;
          /** The subnet route for the ASN record. */
          route?: string | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
