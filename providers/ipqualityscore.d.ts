import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check an IP address for proxy, VPN, Tor, bot, and abuse risk signals. */
    "ipqualityscore.check_ip_reputation": {
      input: {
        /**
         * The IPv4 or IPv6 address to inspect.
         * @minLength 1
         */
        ipAddress: string;
        /**
         * How strict IPQS should be when scoring the lookup. Higher values may increase false positives.
         * @minimum 0
         * @maximum 3
         */
        strictness?: number;
        /** Whether to reduce risk flags for public access points such as schools or libraries. */
        allowPublicAccessPoints?: boolean;
        /**
         * The user agent associated with the IP lookup.
         * @minLength 1
         */
        userAgent?: string;
        /**
         * The browser language associated with the IP lookup.
         * @minLength 1
         */
        userLanguage?: string;
      };
      output: {
        /** Whether IPQS completed the IP reputation lookup successfully. */
        success: boolean;
        /** Human-readable status message returned by IPQS. */
        message: string;
        /**
         * The risk score returned by IPQS from 0 to 100.
         * @minimum 0
         * @maximum 100
         */
        fraud_score: number;
        /** The two-letter country code associated with the IP. */
        country_code?: string | null;
        /** The region associated with the IP. */
        region?: string | null;
        /** The city associated with the IP. */
        city?: string | null;
        /** The internet service provider associated with the IP. */
        ISP?: string | null;
        /** The autonomous system number associated with the IP. */
        ASN?: number | null;
        /** The organization associated with the IP. */
        organization?: string | null;
        /** Whether IPQS identified the IP as a crawler. */
        is_crawler?: boolean;
        /** The timezone associated with the IP. */
        timezone?: string | null;
        /** Whether the IP appears to belong to a mobile connection. */
        mobile?: boolean;
        /** The host associated with the IP. */
        host?: string | null;
        /** Whether IPQS identified the IP as a proxy. */
        proxy?: boolean;
        /** Whether IPQS identified the IP as a VPN. */
        vpn?: boolean;
        /** Whether IPQS identified the IP as Tor. */
        tor?: boolean;
        /** Whether IPQS identified an active VPN connection. */
        active_vpn?: boolean;
        /** Whether IPQS identified an active Tor connection. */
        active_tor?: boolean;
        /** Whether IPQS has seen recent abuse from the IP. */
        recent_abuse?: boolean;
        /** Whether IPQS identified bot behavior for the IP. */
        bot_status?: boolean;
        /** The connection type associated with the IP. */
        connection_type?: string | null;
        /** The recent abuse velocity associated with the IP. */
        abuse_velocity?: string | null;
        /** The IPQS request identifier for support and tracing. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Scan a URL or domain and return malware, phishing, and domain risk signals. */
    "ipqualityscore.scan_url": {
      input: {
        /**
         * The URL or domain to scan.
         * @minLength 1
         */
        url: string;
        /**
         * How strict IPQS should be when scanning the URL. Higher values may increase false positives.
         * @minimum 0
         * @maximum 2
         */
        strictness?: number;
      };
      output: {
        /** Whether IPQS completed the URL scan successfully. */
        success: boolean;
        /** Human-readable status message returned by IPQS. */
        message: string;
        /** Whether IPQS considers the URL unsafe. */
        unsafe: boolean;
        /** The domain parsed from the submitted URL. */
        domain?: string | null;
        /** The root domain parsed from the submitted URL. */
        root_domain?: string | null;
        /** The IP address associated with the domain. */
        ip_address?: string | null;
        /** The server header or hosting stack returned by IPQS. */
        server?: string | null;
        /** The content type returned by IPQS. */
        content_type?: string | null;
        /** The HTTP status code returned by IPQS. */
        status_code?: number | null;
        /** The page size returned by IPQS. */
        page_size?: number | null;
        /** The domain rank returned by IPQS. */
        domain_rank?: number | null;
        /** Whether DNS records for the domain are valid. */
        dns_valid?: boolean;
        /** Whether IPQS considers the domain parked. */
        parking?: boolean;
        /** Whether IPQS associates the URL with spam. */
        spamming?: boolean;
        /** Whether IPQS associates the URL with malware. */
        malware?: boolean;
        /** Whether IPQS associates the URL with phishing. */
        phishing?: boolean;
        /** Whether IPQS considers the URL suspicious. */
        suspicious?: boolean;
        /** Whether IPQS classifies the URL as adult content. */
        adult?: boolean;
        /**
         * The risk score returned by IPQS from 0 to 100.
         * @minimum 0
         * @maximum 100
         */
        risk_score?: number;
        /** Domain age details returned by IPQualityScore. */
        domain_age?: {
          /** Human-readable domain age returned by IPQS. */
          human?: string | null;
          /** Domain creation timestamp returned by IPQS. */
          timestamp?: number | null;
          /** Domain creation date returned by IPQS. */
          iso?: string | null;
          [key: string]: unknown;
        };
        /** The content category returned by IPQS. */
        category?: string | null;
        /** The domain trust classification returned by IPQS. */
        domain_trust?: string | null;
        /** The IPQS request identifier for support and tracing. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Validate an email address and return deliverability and abuse risk signals. */
    "ipqualityscore.validate_email": {
      input: {
        /**
         * The email address to validate.
         * @format email
         */
        email: string;
        /**
         * Maximum number of seconds IPQS should spend on mail service provider checks.
         * @minimum 1
         * @maximum 60
         */
        timeout?: number;
        /**
         * How strict IPQS should be when scoring the lookup. Higher values may increase false positives.
         * @minimum 0
         * @maximum 3
         */
        abuseStrictness?: number;
      };
      output: {
        /** Whether IPQS completed the email validation lookup successfully. */
        success: boolean;
        /** Human-readable status message returned by IPQS. */
        message: string;
        /** Whether IPQS considers the email address valid. */
        valid: boolean;
        /** Whether the email address belongs to a disposable email provider. */
        disposable?: boolean;
        /** The SMTP deliverability score returned by IPQS. */
        smtp_score?: number | null;
        /** The overall email quality score returned by IPQS. */
        overall_score?: number | null;
        /** The first name inferred by IPQS, when available. */
        first_name?: string | null;
        /** Whether IPQS considers the email address generic. */
        generic?: boolean;
        /** Whether the email address is commonly used. */
        common?: boolean;
        /** Whether DNS records for the email domain are valid. */
        dns_valid?: boolean;
        /** Whether IPQS identified the email as a honeypot. */
        honeypot?: boolean;
        /** The deliverability classification returned by IPQS. */
        deliverability?: string | null;
        /** Whether the email is associated with frequent complaints. */
        frequent_complainer?: boolean;
        /** The spam trap score returned by IPQS. */
        spam_trap_score?: string | null;
        /** Whether the email domain accepts all mailbox names. */
        catch_all?: boolean;
        /** Whether IPQS timed out during provider checks. */
        timed_out?: boolean;
        /** Whether IPQS considers the email suspicious. */
        suspect?: boolean;
        /** Whether IPQS has seen recent abuse for the email. */
        recent_abuse?: boolean;
        /**
         * The risk score returned by IPQS from 0 to 100.
         * @minimum 0
         * @maximum 100
         */
        fraud_score?: number;
        /** Suggested corrected domain for possible typos. */
        suggested_domain?: string | null;
        /** Whether IPQS found the email in leaked data. */
        leaked?: boolean;
        /**
         * The normalized email address returned by IPQS.
         * @format email
         */
        sanitized_email?: string;
        /** The IPQS request identifier for support and tracing. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Validate a phone number and return carrier, activity, and risk signals. */
    "ipqualityscore.validate_phone": {
      input: {
        /**
         * The phone number to validate.
         * @minLength 1
         */
        phone: string;
        /**
         * Optional ISO 3166-1 alpha-2 countries to use when interpreting local numbers.
         * @minItems 1
         */
        country?: Array<string>;
        /**
         * How strict IPQS should be when scoring the lookup. Higher values may increase false positives.
         * @minimum 0
         * @maximum 3
         */
        strictness?: number;
      };
      output: {
        /** Whether IPQS completed the phone validation lookup successfully. */
        success: boolean;
        /** Human-readable status message returned by IPQS. */
        message: string;
        /** The formatted phone number returned by IPQS. */
        formatted?: string | null;
        /** The local phone number format returned by IPQS. */
        local_format?: string | null;
        /** Whether IPQS considers the phone number valid. */
        valid: boolean;
        /**
         * The risk score returned by IPQS from 0 to 100.
         * @minimum 0
         * @maximum 100
         */
        fraud_score?: number;
        /** Whether IPQS has seen recent abuse for the phone number. */
        recent_abuse?: boolean;
        /** Whether the phone number appears to be a VoIP number. */
        VOIP?: boolean;
        /** Whether the phone number appears to be prepaid. */
        prepaid?: boolean;
        /** Whether IPQS considers the phone number risky. */
        risky?: boolean;
        /** Whether IPQS considers the phone number active. */
        active?: boolean;
        /** The phone owner name returned by IPQS, when available. */
        name?: string | null;
        /** The carrier associated with the phone number. */
        carrier?: string | null;
        /** The line type associated with the phone number. */
        line_type?: string | null;
        /** The country associated with the phone number. */
        country?: string | null;
        /** The city associated with the phone number. */
        city?: string | null;
        /** The postal code associated with the phone number. */
        zip_code?: string | null;
        /** The region associated with the phone number. */
        region?: string | null;
        /** The international dialing code associated with the phone number. */
        dialing_code?: number | null;
        /** SMS pumping risk details returned by IPQS. */
        sms_pumping?: {
          /**
           * The risk score returned by IPQS from 0 to 100.
           * @minimum 0
           * @maximum 100
           */
          risk_score?: number;
          /** Human-readable SMS pumping risk message returned by IPQS. */
          message?: string;
          /** SMS pumping velocity classification returned by IPQS. */
          velocity?: string;
          [key: string]: unknown;
        };
        /** The IPQS request identifier for support and tracing. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
  }
}
