import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Find and enrich company data by domain, profile URL, or company name. */
    "leadmagic.enrich_company": {
      input: {
        /**
         * The company website domain to enrich, such as example.com.
         * @minLength 1
         */
        companyDomain?: string;
        /**
         * The professional company profile URL or slug.
         * @minLength 1
         */
        profileUrl?: string;
        /**
         * The company name to enrich.
         * @minLength 1
         */
        companyName?: string;
      };
      output: {
        /** The official company name returned by LeadMagic. */
        companyName: string | null;
        /** The LeadMagic company identifier. */
        companyId: number | null;
        /** The company's primary industry. */
        industry: string | null;
        /** The exact employee count when returned by LeadMagic. */
        employeeCount: number | null;
        /** The employee count range returned by LeadMagic. */
        employeeRange: string | null;
        /** The company's founding year. */
        founded: number | null;
        /** The company headquarters location object. */
        headquarters: Record<string, unknown> | null;
        /** The company's annual revenue range. */
        revenue: string | null;
        /** The company's total funding value. */
        funding: string | null;
        /** The company's social follower count. */
        followerCount: number | null;
        /** The company's Twitter or X profile URL. */
        twitterUrl: string | null;
        /** The company's Facebook page URL. */
        facebookUrl: string | null;
        /** The company's professional profile URL. */
        b2bProfileUrl: string | null;
        /** The company's logo URL. */
        logoUrl: string | null;
        /** The company description. */
        description: string | null;
        /** The company specialties returned by LeadMagic. */
        specialties: Array<string>;
        /** The competitor names returned by LeadMagic. */
        competitors: Array<string>;
        /** The raw LeadMagic company enrichment payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve professional profile data from a profile URL or username. */
    "leadmagic.enrich_profile": {
      input: {
        /**
         * The professional profile URL or username to enrich.
         * @minLength 1
         */
        profileUrl: string;
        /** Whether to include extended profile fields such as image URL. */
        extendedResponse?: boolean;
      };
      output: {
        /** The professional profile URL returned by LeadMagic. */
        profileUrl: string | null;
        /** The person's first name. */
        firstName: string | null;
        /** The person's last name. */
        lastName: string | null;
        /** The person's full name. */
        fullName: string | null;
        /** The person's current professional title. */
        professionalTitle: string | null;
        /** The person's profile summary. */
        bio: string | null;
        /** The person's geographic location. */
        location: string | null;
        /** The person's country. */
        country: string | null;
        /** The person's social follower range. */
        followersRange: string | null;
        /** The person's current company name. */
        companyName: string | null;
        /** The person's current company industry. */
        companyIndustry: string | null;
        /** The person's current company website. */
        companyWebsite: string | null;
        /** The person's total career tenure in years. */
        totalTenureYears: string | null;
        /** The person's total career tenure in months. */
        totalTenureMonths: string | null;
        /** The work history entries returned by LeadMagic. */
        workExperience: Array<Record<string, unknown>>;
        /** The education entries returned by LeadMagic. */
        education: Array<Record<string, unknown>>;
        /** The certification entries returned by LeadMagic. */
        certifications: Array<Record<string, unknown>>;
        /** The raw LeadMagic profile enrichment payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Find a mobile phone number from a profile URL or email identifier. */
    "leadmagic.find_mobile": {
      input: {
        /**
         * The professional profile URL or username to look up.
         * @minLength 1
         */
        profileUrl?: string;
        /**
         * The professional email address to improve matching.
         * @format email
         */
        workEmail?: string;
        /**
         * The personal email address to use as an alternative identifier.
         * @format email
         */
        personalEmail?: string;
      };
      output: {
        /** The profile URL used for the mobile lookup. */
        profileUrl: string | null;
        /** The email address used for the mobile lookup. */
        email: string | null;
        /** The mobile phone number found, or null when none was found. */
        mobileNumber: string | null;
        /** The credits consumed by this lookup. */
        creditsConsumed: number | null;
        /** The human-readable LeadMagic result message. */
        message: string | null;
        /** The raw LeadMagic mobile finder payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Find a professional email address from a person's name and company. */
    "leadmagic.find_work_email": {
      input: {
        /**
         * The person's first name. Required if fullName is not provided.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The person's last name. Required if fullName is not provided.
         * @minLength 1
         */
        lastName?: string;
        /**
         * The person's full name as an alternative to firstName and lastName.
         * @minLength 1
         */
        fullName?: string;
        /**
         * The company website domain, such as example.com.
         * @minLength 1
         */
        domain?: string;
        /**
         * The company name when a domain is not available.
         * @minLength 1
         */
        companyName?: string;
      };
      output: {
        /** The found professional email address, or null when none was found. */
        email: string | null;
        /** The LeadMagic result status, such as valid or null. */
        status: string | null;
        /** The credits consumed by this lookup. */
        creditsConsumed: number | null;
        /** The human-readable LeadMagic result message. */
        message: string | null;
        /** Whether employment at the company was verified. */
        employmentVerified: boolean | null;
        /** The primary MX record for the company domain. */
        mxRecord: string | null;
        /** The email provider detected from MX records. */
        mxProvider: string | null;
        /** Whether the company domain has MX records. */
        hasMx: boolean | null;
        /** Company enrichment fields returned with the email finder result. */
        company: Record<string, unknown>;
        /** The raw LeadMagic work email finder payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the current LeadMagic credit balance for the API key. */
    "leadmagic.get_credits": {
      input: Record<string, never>;
      output: {
        /** The current LeadMagic credit balance. */
        credits: number;
        /** The raw LeadMagic credit balance payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Validate an email address for deliverability and domain intelligence. */
    "leadmagic.validate_email": {
      input: {
        /**
         * The email address to validate.
         * @format email
         */
        email: string;
      };
      output: {
        /** The normalized email address returned by LeadMagic. */
        email: string | null;
        /** The validation status, such as valid, invalid, or unknown. */
        emailStatus: string | null;
        /** Whether LeadMagic detected an accept-all domain. */
        isDomainCatchAll: boolean | null;
        /** The credits consumed by this validation request. */
        creditsConsumed: number | null;
        /** The human-readable LeadMagic validation message. */
        message: string | null;
        /** The primary MX record for the email domain. */
        mxRecord: string | null;
        /** The email provider detected from MX records. */
        mxProvider: string | null;
        /** The MX security gateway vendor when available. */
        mxGateway: string | null;
        /** The MX security gateway type when available. */
        mxGatewayType: string | null;
        /** Whether a security gateway is present. */
        mxSecurityGateway: boolean | null;
        /** Company enrichment fields returned with the validation result. */
        company: Record<string, unknown>;
        /** The raw LeadMagic email validation payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
