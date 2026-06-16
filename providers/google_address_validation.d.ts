import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send the final outcome of a completed Google address validation sequence using the first responseId from that sequence. */
    "google_address_validation.provide_validation_feedback": {
      input: {
        /**
         * The first responseId from the validation sequence.
         * @minLength 1
         */
        responseId: string;
        /** Outcome of the completed address validation sequence. */
        conclusion: "VALIDATED_VERSION_USED" | "USER_VERSION_USED" | "UNVALIDATED_VERSION_USED" | "UNUSED";
      };
      output: Record<string, never>;
    };
    /** Validate and standardize a postal address with Google Address Validation and return verdict, parsed address, and geocode details. */
    "google_address_validation.validate_address": {
      input: {
        /** The address to validate. */
        address: {
          /**
           * CLDR region code of the country or region, such as US.
           * @minLength 1
           */
          regionCode: string;
          /**
           * Unstructured address lines describing the lower levels of the address.
           * @minItems 1
           */
          addressLines: Array<string>;
          /**
           * Highest administrative subdivision, such as a state or province.
           * @minLength 1
           */
          administrativeArea?: string;
          /**
           * City or town portion of the address.
           * @minLength 1
           */
          locality?: string;
          /**
           * Postal or ZIP code.
           * @minLength 1
           */
          postalCode?: string;
          /**
           * Neighborhood, borough, or district.
           * @minLength 1
           */
          sublocality?: string;
          /**
           * Country-specific sorting code when applicable.
           * @minLength 1
           */
          sortingCode?: string;
          /**
           * Optional BCP-47 language code of the address contents.
           * @minLength 1
           */
          languageCode?: string;
          /**
           * Optional organization name included in the input address.
           * @minLength 1
           */
          organization?: string;
          /**
           * Optional recipient lines included in the input address.
           * @minItems 1
           */
          recipients?: Array<string>;
          /** PostalAddress schema revision. Only 0 is valid. */
          revision?: 0;
        };
        /**
         * The first responseId from the validation sequence for follow-up requests.
         * @minLength 1
         */
        previousResponseId?: string;
        /**
         * Optional Places Autocomplete session token for billing and workflow linking.
         * @minLength 1
         * @maxLength 36
         */
        sessionToken?: string;
        /** Whether to enable USPS CASS mode for US and PR addresses. */
        enableUspsCass?: boolean;
        /** Optional response language options. */
        languageOptions?: {
          /** Whether to request the preview englishLatinAddress output field. */
          returnEnglishLatinAddress?: boolean;
        };
      };
      output: {
        /** Response ID that identifies the validation sequence for future follow-up requests. */
        responseId: string;
        /** Validation result returned by Google. */
        result: {
          /** Overall verdict flags. */
          verdict?: {
            /** Granularity of the parsed input address. */
            inputGranularity?: "GRANULARITY_UNSPECIFIED" | "SUB_PREMISE" | "PREMISE" | "PREMISE_PROXIMITY" | "BLOCK" | "ROUTE" | "OTHER";
            /** Granularity Google could fully validate. */
            validationGranularity?: "GRANULARITY_UNSPECIFIED" | "SUB_PREMISE" | "PREMISE" | "PREMISE_PROXIMITY" | "BLOCK" | "ROUTE" | "OTHER";
            /** Granularity of the geocoded location. */
            geocodeGranularity?: "GRANULARITY_UNSPECIFIED" | "SUB_PREMISE" | "PREMISE" | "PREMISE_PROXIMITY" | "BLOCK" | "ROUTE" | "OTHER";
            /** Whether the post-processed address is considered complete. */
            addressComplete?: boolean;
            /** Whether Google inferred one or more address components. */
            hasInferredComponents?: boolean;
            /** Whether Google replaced one or more address components. */
            hasReplacedComponents?: boolean;
            /** Whether Google spell-corrected one or more address components. */
            hasSpellCorrectedComponents?: boolean;
            /** Whether Google could not fully confirm one or more components. */
            hasUnconfirmedComponents?: boolean;
            /** Interpretive suggestion for what the caller may want to do next. */
            possibleNextAction?: "POSSIBLE_NEXT_ACTION_UNSPECIFIED" | "FIX" | "CONFIRM_ADD_SUBPREMISES" | "CONFIRM" | "ACCEPT";
            [key: string]: unknown;
          };
          /** Validated address details. */
          address?: {
            /** The post-processed address formatted as a single-line address. */
            formattedAddress?: string;
            /** The post-processed address represented as a postal address. */
            postalAddress?: {
              /** CLDR region code of the country or region. */
              regionCode?: string;
              /** Unstructured address lines in envelope order. */
              addressLines?: Array<string>;
              /** Highest administrative subdivision, such as a state or province. */
              administrativeArea?: string;
              /** City or town portion of the address. */
              locality?: string;
              /** Postal or ZIP code. */
              postalCode?: string;
              /** Neighborhood, borough, or district. */
              sublocality?: string;
              /** Country-specific sorting code when applicable. */
              sortingCode?: string;
              /** BCP-47 language code of the address contents. */
              languageCode?: string;
              /** PostalAddress schema revision. */
              revision?: number;
              [key: string]: unknown;
            };
            /** Validated address components returned by Google. */
            addressComponents?: Array<{
              /** The component name payload returned by Google. */
              componentName?: {
                /** The display text for the address component. */
                text: string;
                /** BCP-47 language code for the component text when Google returns one. */
                languageCode?: string;
                [key: string]: unknown;
              };
              /** The address component type returned by Google. */
              componentType?: string;
              /** How confidently Google validated the component. */
              confirmationLevel?: "CONFIRMATION_LEVEL_UNSPECIFIED" | "CONFIRMED" | "UNCONFIRMED_BUT_PLAUSIBLE" | "UNCONFIRMED_AND_SUSPICIOUS";
              /** Whether Google inferred the component instead of receiving it in the input. */
              inferred?: boolean;
              /** Whether Google replaced the input component with a different value. */
              replaced?: boolean;
              /** Whether Google spell-corrected the component. */
              spellCorrected?: boolean;
              /** Whether the component is unexpected in a postal address for the region. */
              unexpected?: boolean;
              [key: string]: unknown;
            }>;
            /** Address component types that were expected but missing. */
            missingComponentTypes?: Array<string>;
            /** Input tokens that Google could not resolve. */
            unresolvedTokens?: Array<string>;
            /** Component types that Google could not fully confirm. */
            unconfirmedComponentTypes?: Array<string>;
            [key: string]: unknown;
          };
          /** Preview english-latin address details when requested. */
          englishLatinAddress?: {
            /** The post-processed address formatted as a single-line address. */
            formattedAddress?: string;
            /** The post-processed address represented as a postal address. */
            postalAddress?: {
              /** CLDR region code of the country or region. */
              regionCode?: string;
              /** Unstructured address lines in envelope order. */
              addressLines?: Array<string>;
              /** Highest administrative subdivision, such as a state or province. */
              administrativeArea?: string;
              /** City or town portion of the address. */
              locality?: string;
              /** Postal or ZIP code. */
              postalCode?: string;
              /** Neighborhood, borough, or district. */
              sublocality?: string;
              /** Country-specific sorting code when applicable. */
              sortingCode?: string;
              /** BCP-47 language code of the address contents. */
              languageCode?: string;
              /** PostalAddress schema revision. */
              revision?: number;
              [key: string]: unknown;
            };
            /** Validated address components returned by Google. */
            addressComponents?: Array<{
              /** The component name payload returned by Google. */
              componentName?: {
                /** The display text for the address component. */
                text: string;
                /** BCP-47 language code for the component text when Google returns one. */
                languageCode?: string;
                [key: string]: unknown;
              };
              /** The address component type returned by Google. */
              componentType?: string;
              /** How confidently Google validated the component. */
              confirmationLevel?: "CONFIRMATION_LEVEL_UNSPECIFIED" | "CONFIRMED" | "UNCONFIRMED_BUT_PLAUSIBLE" | "UNCONFIRMED_AND_SUSPICIOUS";
              /** Whether Google inferred the component instead of receiving it in the input. */
              inferred?: boolean;
              /** Whether Google replaced the input component with a different value. */
              replaced?: boolean;
              /** Whether Google spell-corrected the component. */
              spellCorrected?: boolean;
              /** Whether the component is unexpected in a postal address for the region. */
              unexpected?: boolean;
              [key: string]: unknown;
            }>;
            /** Address component types that were expected but missing. */
            missingComponentTypes?: Array<string>;
            /** Input tokens that Google could not resolve. */
            unresolvedTokens?: Array<string>;
            /** Component types that Google could not fully confirm. */
            unconfirmedComponentTypes?: Array<string>;
            [key: string]: unknown;
          };
          /** Address metadata. */
          metadata?: {
            /** Whether the address is known to be a business. */
            business?: boolean;
            /** Whether the address is known to be a residence. */
            residential?: boolean;
            /** Whether the address is a PO box. */
            poBox?: boolean;
            [key: string]: unknown;
          };
          /** Geocoding information. */
          geocode?: {
            /** Geocoded location coordinates. */
            location?: {
              /** Latitude in degrees. */
              latitude: number;
              /** Longitude in degrees. */
              longitude: number;
            };
            /** Bounding viewport of the geocoded place. */
            bounds?: {
              /** Low corner of the viewport. */
              low: {
                /** Latitude in degrees. */
                latitude: number;
                /** Longitude in degrees. */
                longitude: number;
              };
              /** High corner of the viewport. */
              high: {
                /** Latitude in degrees. */
                latitude: number;
                /** Longitude in degrees. */
                longitude: number;
              };
            };
            /** Place ID of the geocoded place. */
            placeId?: string;
            /** Approximate size of the feature in meters. */
            featureSizeMeters?: number;
            /** Place types associated with the geocoded place. */
            placeTypes?: Array<string>;
            /** Plus code information for the geocoded place. */
            plusCode?: {
              /** Global plus code for the place. */
              globalCode?: string;
              /** Compound plus code for the place. */
              compoundCode?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** USPS-specific deliverability data. */
          uspsData?: {
            /** Whether Google processed the request with USPS CASS. */
            cassProcessed?: boolean;
            /** USPS standardized address when Google returns it. */
            standardizedAddress?: {
              /** USPS city name. */
              city?: string;
              /** USPS state abbreviation. */
              state?: string;
              /** USPS first address line. */
              firstAddressLine?: string;
              /** USPS second address line. */
              secondAddressLine?: string;
              /** USPS urbanization for Puerto Rico when present. */
              urbanization?: string;
              /** USPS ZIP code. */
              zipCode?: string;
              /** USPS ZIP+4 extension. */
              zipCodeExtension?: string;
              [key: string]: unknown;
            };
            /** USPS delivery point code. */
            deliveryPointCode?: string;
            /** USPS delivery point check digit. */
            deliveryPointCheckDigit?: string;
            /** USPS carrier route code. */
            carrierRoute?: string;
            /** Delivery Point Validation confirmation result. */
            dpvConfirmation?: string;
            /** Delivery Point Validation footnotes. */
            dpvFootnote?: string;
            /** Whether the address is a CMRA according to USPS. */
            dpvCmra?: string;
            /** Whether USPS reports the address as vacant. */
            dpvVacant?: string;
            /** USPS processing error message when Google exposes one. */
            errorMessage?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
  }
}
