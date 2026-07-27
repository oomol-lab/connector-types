import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Enrich a company profile with FullContact by domain. */
    "full_contact.enrich_company": {
      input: {
        /**
         * The company domain to enrich, such as fullcontact.com.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** Whether FullContact queued the lookup instead of returning profile data immediately. */
        queued: boolean;
        /** The FullContact request ID when the lookup is queued. */
        requestId: string | null;
        /** The FullContact queue or status message when provided. */
        message: string | null;
        /** The enriched company name. */
        name: string | null;
        /** The enriched company location string. */
        location: string | null;
        /** The enriched company Twitter profile URL. */
        twitter: string | null;
        /** The enriched company LinkedIn profile URL. */
        linkedin: string | null;
        /** The enriched company Facebook profile URL. */
        facebook: string | null;
        /** The enriched company biography string. */
        bio: string | null;
        /** The enriched company logo URL. */
        logo: string | null;
        /** The enriched company website URL. */
        website: string | null;
        /** The company founding year when returned. */
        founded: number | null;
        /** The company employee count when returned. */
        employees: number | null;
        /** The company locale returned by FullContact. */
        locale: string | null;
        /** The company category returned by FullContact. */
        category: string | null;
        /** The detailed FullContact company profile object. */
        details: Record<string, unknown> | null;
        /** The raw FullContact response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Enrich a person profile with FullContact by sending one or more known identifiers. */
    "full_contact.enrich_person": {
      input: {
        /**
         * A single email address to match.
         * @format email
         */
        email?: string;
        /**
         * Email addresses to match.
         * @minItems 1
         */
        emails?: Array<string>;
        /**
         * A single phone number to match.
         * @minLength 1
         */
        phone?: string;
        /**
         * Phone numbers to match.
         * @minItems 1
         */
        phones?: Array<string>;
        /** A FullContact location identifier for a person query. */
        location?: {
          /**
           * The first line of the street address.
           * @minLength 1
           */
          addressLine1?: string;
          /**
           * The second line of the street address.
           * @minLength 1
           */
          addressLine2?: string;
          /**
           * The city for the address.
           * @minLength 1
           */
          city?: string;
          /**
           * The state, province, or region name.
           * @minLength 1
           */
          region?: string;
          /**
           * The state, province, or region code.
           * @minLength 1
           */
          regionCode?: string;
          /**
           * The postal code for the address.
           * @minLength 1
           */
          postalCode?: string;
        };
        /** A FullContact person name identifier. */
        name?: {
          /**
           * The full person name.
           * @minLength 1
           */
          full?: string;
          /**
           * The given or first name.
           * @minLength 1
           */
          given?: string;
          /**
           * The family or last name.
           * @minLength 1
           */
          family?: string;
        };
        /**
         * Social profiles to match.
         * @minItems 1
         */
        profiles?: Array<{
          /**
           * The profile service name, such as twitter or linkedin.
           * @minLength 1
           */
          service?: string;
          /**
           * The username on the profile service.
           * @minLength 1
           */
          username?: string;
          /**
           * The user ID on the profile service.
           * @minLength 1
           */
          userid?: string;
          /**
           * The profile URL.
           * @format uri
           */
          url?: string;
        }>;
        /**
         * Mobile advertising IDs to match.
         * @minItems 1
         */
        maids?: Array<string>;
        /**
         * A Placekey identifier to match.
         * @minLength 1
         */
        placekey?: string;
        /**
         * A customer record ID already known to FullContact.
         * @minLength 1
         */
        recordId?: string;
        /**
         * A FullContact person ID to match.
         * @minLength 1
         */
        personId?: string;
        /**
         * A partner identifier to match.
         * @minLength 1
         */
        partnerId?: string;
        /**
         * A LiveIntent non-ID to match.
         * @minLength 1
         */
        liNonId?: string;
        /**
         * A Panorama ID to match.
         * @minLength 1
         */
        panoramaId?: string;
        /**
         * Optional FullContact confidence threshold.
         * @minLength 1
         */
        confidence?: string;
        /**
         * Optional FullContact data filters.
         * @minItems 1
         */
        dataFilter?: Array<string>;
        /** Whether FullContact should infer additional identifiers when supported. */
        infer?: boolean;
        /**
         * The maximum number of mobile advertising IDs to return.
         * @exclusiveMinimum 0
         */
        maxMaids?: number;
      };
      output: {
        /** Whether FullContact queued the lookup instead of returning profile data immediately. */
        queued: boolean;
        /** The FullContact request ID when the lookup is queued. */
        requestId: string | null;
        /** The FullContact queue or status message when provided. */
        message: string | null;
        /** The enriched full name. */
        fullName: string | null;
        /** The enriched age range. */
        ageRange: string | null;
        /** The enriched gender. */
        gender: string | null;
        /** The enriched location string. */
        location: string | null;
        /** The enriched job title. */
        title: string | null;
        /** The enriched organization name. */
        organization: string | null;
        /** The enriched Twitter profile URL. */
        twitter: string | null;
        /** The enriched LinkedIn profile URL. */
        linkedin: string | null;
        /** The enriched Facebook profile URL. */
        facebook: string | null;
        /** The enriched biography string. */
        bio: string | null;
        /** The enriched avatar URL. */
        avatar: string | null;
        /** The enriched website URL. */
        website: string | null;
        /** The detailed FullContact person profile object. */
        details: Record<string, unknown> | null;
        /** The raw FullContact response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Return FullContact activity scores for matched person identifiers. */
    "full_contact.verify_activity": {
      input: {
        /**
         * A single email address to match.
         * @format email
         */
        email?: string;
        /**
         * Email addresses to match.
         * @minItems 1
         */
        emails?: Array<string>;
        /**
         * A single phone number to match.
         * @minLength 1
         */
        phone?: string;
        /**
         * Phone numbers to match.
         * @minItems 1
         */
        phones?: Array<string>;
        /** A FullContact location identifier for a person query. */
        location?: {
          /**
           * The first line of the street address.
           * @minLength 1
           */
          addressLine1?: string;
          /**
           * The second line of the street address.
           * @minLength 1
           */
          addressLine2?: string;
          /**
           * The city for the address.
           * @minLength 1
           */
          city?: string;
          /**
           * The state, province, or region name.
           * @minLength 1
           */
          region?: string;
          /**
           * The state, province, or region code.
           * @minLength 1
           */
          regionCode?: string;
          /**
           * The postal code for the address.
           * @minLength 1
           */
          postalCode?: string;
        };
        /** A FullContact person name identifier. */
        name?: {
          /**
           * The full person name.
           * @minLength 1
           */
          full?: string;
          /**
           * The given or first name.
           * @minLength 1
           */
          given?: string;
          /**
           * The family or last name.
           * @minLength 1
           */
          family?: string;
        };
        /**
         * Social profiles to match.
         * @minItems 1
         */
        profiles?: Array<{
          /**
           * The profile service name, such as twitter or linkedin.
           * @minLength 1
           */
          service?: string;
          /**
           * The username on the profile service.
           * @minLength 1
           */
          username?: string;
          /**
           * The user ID on the profile service.
           * @minLength 1
           */
          userid?: string;
          /**
           * The profile URL.
           * @format uri
           */
          url?: string;
        }>;
        /**
         * Mobile advertising IDs to match.
         * @minItems 1
         */
        maids?: Array<string>;
        /**
         * A Placekey identifier to match.
         * @minLength 1
         */
        placekey?: string;
        /**
         * A customer record ID already known to FullContact.
         * @minLength 1
         */
        recordId?: string;
        /**
         * A FullContact person ID to match.
         * @minLength 1
         */
        personId?: string;
        /**
         * A partner identifier to match.
         * @minLength 1
         */
        partnerId?: string;
        /**
         * A LiveIntent non-ID to match.
         * @minLength 1
         */
        liNonId?: string;
        /**
         * A Panorama ID to match.
         * @minLength 1
         */
        panoramaId?: string;
      };
      output: {
        /** The email activity score returned by FullContact. */
        emails: number | null;
        /** The raw FullContact response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Compare person identifiers with FullContact and return field-level match flags. */
    "full_contact.verify_match": {
      input: {
        /**
         * A single email address to match.
         * @format email
         */
        email?: string;
        /**
         * Email addresses to match.
         * @minItems 1
         */
        emails?: Array<string>;
        /**
         * A single phone number to match.
         * @minLength 1
         */
        phone?: string;
        /**
         * Phone numbers to match.
         * @minItems 1
         */
        phones?: Array<string>;
        /** A FullContact location identifier for a person query. */
        location?: {
          /**
           * The first line of the street address.
           * @minLength 1
           */
          addressLine1?: string;
          /**
           * The second line of the street address.
           * @minLength 1
           */
          addressLine2?: string;
          /**
           * The city for the address.
           * @minLength 1
           */
          city?: string;
          /**
           * The state, province, or region name.
           * @minLength 1
           */
          region?: string;
          /**
           * The state, province, or region code.
           * @minLength 1
           */
          regionCode?: string;
          /**
           * The postal code for the address.
           * @minLength 1
           */
          postalCode?: string;
        };
        /** A FullContact person name identifier. */
        name?: {
          /**
           * The full person name.
           * @minLength 1
           */
          full?: string;
          /**
           * The given or first name.
           * @minLength 1
           */
          given?: string;
          /**
           * The family or last name.
           * @minLength 1
           */
          family?: string;
        };
        /**
         * Social profiles to match.
         * @minItems 1
         */
        profiles?: Array<{
          /**
           * The profile service name, such as twitter or linkedin.
           * @minLength 1
           */
          service?: string;
          /**
           * The username on the profile service.
           * @minLength 1
           */
          username?: string;
          /**
           * The user ID on the profile service.
           * @minLength 1
           */
          userid?: string;
          /**
           * The profile URL.
           * @format uri
           */
          url?: string;
        }>;
        /**
         * Mobile advertising IDs to match.
         * @minItems 1
         */
        maids?: Array<string>;
        /**
         * A Placekey identifier to match.
         * @minLength 1
         */
        placekey?: string;
        /**
         * A customer record ID already known to FullContact.
         * @minLength 1
         */
        recordId?: string;
        /**
         * A FullContact person ID to match.
         * @minLength 1
         */
        personId?: string;
        /**
         * A partner identifier to match.
         * @minLength 1
         */
        partnerId?: string;
        /**
         * A LiveIntent non-ID to match.
         * @minLength 1
         */
        liNonId?: string;
        /**
         * A Panorama ID to match.
         * @minLength 1
         */
        panoramaId?: string;
      };
      output: {
        /** Whether the city matched. */
        city: boolean | null;
        /** Whether the region matched. */
        region: boolean | null;
        /** Whether the country matched. */
        country: boolean | null;
        /** Whether the continent matched. */
        continent: boolean | null;
        /** Whether the postal code matched. */
        postalCode: boolean | null;
        /** Whether the family name matched. */
        familyName: boolean | null;
        /** Whether the given name matched. */
        givenName: boolean | null;
        /** Whether the phone matched. */
        phone: boolean | null;
        /** Whether the email matched. */
        email: boolean | null;
        /** Whether a social profile matched. */
        social: boolean | null;
        /** Whether a mobile advertising ID matched. */
        maid: boolean | null;
        /** Whether a non-ID matched. */
        nonId: boolean | null;
        /** The raw FullContact response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Resolve person identifiers with FullContact and return identity signal details. */
    "full_contact.verify_signals": {
      input: {
        /**
         * A single email address to match.
         * @format email
         */
        email?: string;
        /**
         * Email addresses to match.
         * @minItems 1
         */
        emails?: Array<string>;
        /**
         * A single phone number to match.
         * @minLength 1
         */
        phone?: string;
        /**
         * Phone numbers to match.
         * @minItems 1
         */
        phones?: Array<string>;
        /** A FullContact location identifier for a person query. */
        location?: {
          /**
           * The first line of the street address.
           * @minLength 1
           */
          addressLine1?: string;
          /**
           * The second line of the street address.
           * @minLength 1
           */
          addressLine2?: string;
          /**
           * The city for the address.
           * @minLength 1
           */
          city?: string;
          /**
           * The state, province, or region name.
           * @minLength 1
           */
          region?: string;
          /**
           * The state, province, or region code.
           * @minLength 1
           */
          regionCode?: string;
          /**
           * The postal code for the address.
           * @minLength 1
           */
          postalCode?: string;
        };
        /** A FullContact person name identifier. */
        name?: {
          /**
           * The full person name.
           * @minLength 1
           */
          full?: string;
          /**
           * The given or first name.
           * @minLength 1
           */
          given?: string;
          /**
           * The family or last name.
           * @minLength 1
           */
          family?: string;
        };
        /**
         * Social profiles to match.
         * @minItems 1
         */
        profiles?: Array<{
          /**
           * The profile service name, such as twitter or linkedin.
           * @minLength 1
           */
          service?: string;
          /**
           * The username on the profile service.
           * @minLength 1
           */
          username?: string;
          /**
           * The user ID on the profile service.
           * @minLength 1
           */
          userid?: string;
          /**
           * The profile URL.
           * @format uri
           */
          url?: string;
        }>;
        /**
         * Mobile advertising IDs to match.
         * @minItems 1
         */
        maids?: Array<string>;
        /**
         * A Placekey identifier to match.
         * @minLength 1
         */
        placekey?: string;
        /**
         * A customer record ID already known to FullContact.
         * @minLength 1
         */
        recordId?: string;
        /**
         * A FullContact person ID to match.
         * @minLength 1
         */
        personId?: string;
        /**
         * A partner identifier to match.
         * @minLength 1
         */
        partnerId?: string;
        /**
         * A LiveIntent non-ID to match.
         * @minLength 1
         */
        liNonId?: string;
        /**
         * A Panorama ID to match.
         * @minLength 1
         */
        panoramaId?: string;
      };
      output: {
        /** Email signal records returned by FullContact. */
        emails: Array<Record<string, unknown>> | null;
        /** FullContact person IDs returned by the signal lookup. */
        personIds: Array<string> | null;
        /** The FullContact name signal object. */
        name: Record<string, unknown> | null;
        /** The FullContact social profile signal object. */
        socialProfiles: Record<string, unknown> | null;
        /** The FullContact demographic signal object. */
        demographics: Record<string, unknown> | null;
        /** The FullContact employment signal object. */
        employment: Record<string, unknown> | null;
        /** Location signal records returned by FullContact. */
        locations: Array<Record<string, unknown>> | null;
        /** The raw FullContact response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
