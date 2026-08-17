import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current ClinicalTrials.gov API version and daily data refresh timestamp. */
    "clinicaltrials_gov.get_api_version": {
      input: Record<string, never>;
      output: {
        /** The current API semantic version. */
        apiVersion: string;
        /** The UTC timestamp of the current study data snapshot when provided. */
        dataTimestamp: string | null;
      };
    };
    /** Get value statistics for selected ClinicalTrials.gov leaf fields or field data types. */
    "clinicaltrials_gov.get_field_value_statistics": {
      input: {
        /**
         * The field data types to include.
         * @minItems 1
         */
        types?: Array<"ENUM" | "STRING" | "DATE" | "INTEGER" | "NUMBER" | "BOOLEAN">;
        /**
         * The piece names or full leaf field paths to include.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** The field value statistics. */
        statistics: Array<{
          /** An official field statistics type. */
          type: "ENUM" | "STRING" | "DATE" | "INTEGER" | "NUMBER" | "BOOLEAN";
          /** The official piece name. */
          piece: string;
          /** The full field path. */
          field: string;
          /** The number of studies missing this field value. */
          missingStudiesCount?: number;
          /** The number of unique field values. */
          uniqueValuesCount?: number;
          /** The minimum field value when applicable. */
          min?: unknown;
          /** The maximum field value when applicable. */
          max?: unknown;
          /** The average numeric value when applicable. */
          avg?: number;
          /** The most common field values. */
          topValues?: Array<{
            /** The field value. */
            value: string;
            /** The number of studies containing the value. */
            studiesCount: number;
          }>;
          /** The longest observed string value and its source study. */
          longest?: {
            /** The string length. */
            length: number;
            /** The canonical NCT identifier containing the value. */
            nctId: string;
            /** The longest observed string value. */
            value: string;
          };
          /** The date formats observed for this field. */
          formats?: Array<string>;
          /** The number of studies whose field value is true. */
          trueCount?: number;
          /** The number of studies whose field value is false. */
          falseCount?: number;
          [key: string]: unknown;
        }>;
        /** The number of field statistics returned. */
        count: number;
      };
    };
    /** Get observed list-size statistics for selected ClinicalTrials.gov array fields. */
    "clinicaltrials_gov.get_list_field_size_statistics": {
      input: {
        /**
         * The piece names or full list field paths to include.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** The list field size statistics. */
        statistics: Array<{
          /** The official piece name. */
          piece: string;
          /** The full field path. */
          field: string;
          /** The number of unique list sizes. */
          uniqueSizesCount: number;
          /** The minimum observed list size. */
          minSize?: number;
          /** The maximum observed list size. */
          maxSize?: number;
          /** The most common list sizes. */
          topSizes?: Array<{
            /** The observed list size. */
            size: number;
            /** The number of studies with this list size. */
            studiesCount: number;
          }>;
          [key: string]: unknown;
        }>;
        /** The number of list field statistics returned. */
        count: number;
      };
    };
    /** Get ClinicalTrials.gov registry counts and the distribution of study JSON record sizes. */
    "clinicaltrials_gov.get_registry_size_statistics": {
      input: Record<string, never>;
      output: {
        /** The total number of studies in the registry. */
        totalStudies: number;
        /** The average uncompressed study JSON size in bytes. */
        averageSizeBytes: number;
        /** Study JSON size percentiles keyed by percentile label. */
        percentiles: Record<string, number>;
        /** The study JSON size distribution ranges. */
        ranges: Array<{
          /** The human-readable size range. */
          sizeRange: string;
          /** The number of studies in this size range. */
          studiesCount: number;
        }>;
        /** The largest study records reported by the API. */
        largestStudies: Array<{
          /** The NCT identifier. */
          id: string;
          /** The study JSON size in bytes. */
          sizeBytes: number;
        }>;
      };
    };
    /** Get multiple ClinicalTrials.gov studies by NCT identifier and report identifiers that were not found. */
    "clinicaltrials_gov.get_studies_by_nct_ids": {
      input: {
        /**
         * The NCT identifiers to retrieve.
         * @minItems 1
         * @maxItems 1000
         */
        nctIds: Array<string>;
        /**
         * Additional official fields to return alongside the fields required for the normalized study summary.
         * @minItems 1
         */
        fields?: Array<string>;
        /** The format used for fields whose official data type is markup. */
        markupFormat?: "markdown" | "legacy";
      };
      output: {
        /** The found studies in input identifier order. */
        studies: Array<{
          /** The canonical NCT identifier. */
          nctId: string;
          /** The study brief title. */
          briefTitle: string;
          /** The study official title when provided. */
          officialTitle: string | null;
          /** The study recruitment or availability status. */
          overallStatus: string | null;
          /** The official study type when provided. */
          studyType: string | null;
          /** The official study phases. */
          phases: Array<string>;
          /** The conditions or diseases studied. */
          conditions: Array<string>;
          /** The normalized study interventions. */
          interventions: Array<{
            /** The intervention name. */
            name: string;
            /** The official intervention type when provided. */
            type: string | null;
            /** The raw JSON object returned by the ClinicalTrials.gov API. */
            raw: Record<string, unknown>;
          }>;
          /** The lead sponsor name when provided. */
          leadSponsor: string | null;
          /** Whether ClinicalTrials.gov reports posted study results. */
          hasResults: boolean;
          /**
           * The canonical public ClinicalTrials.gov study URL.
           * @format uri
           */
          studyUrl: string;
          /** The raw JSON object returned by the ClinicalTrials.gov API. */
          raw: Record<string, unknown>;
        }>;
        /** The canonical identifiers that were found. */
        foundNctIds: Array<string>;
        /** The canonical identifiers that were not found. */
        notFoundNctIds: Array<string>;
        /** The number of studies found. */
        count: number;
      };
    };
    /** Get one ClinicalTrials.gov study by NCT identifier. */
    "clinicaltrials_gov.get_study": {
      input: {
        /**
         * The ClinicalTrials.gov identifier, such as NCT04280705.
         * @pattern ^[Nn][Cc][Tt]0*[1-9][0-9]{0,7}$
         */
        nctId: string;
        /**
         * Additional official fields to return alongside the fields required for the normalized study summary.
         * @minItems 1
         */
        fields?: Array<string>;
        /** The format used for fields whose official data type is markup. */
        markupFormat?: "markdown" | "legacy";
      };
      output: {
        /** Whether the requested study was found. */
        found: boolean;
        /** The requested study when found. */
        study: {
          /** The canonical NCT identifier. */
          nctId: string;
          /** The study brief title. */
          briefTitle: string;
          /** The study official title when provided. */
          officialTitle: string | null;
          /** The study recruitment or availability status. */
          overallStatus: string | null;
          /** The official study type when provided. */
          studyType: string | null;
          /** The official study phases. */
          phases: Array<string>;
          /** The conditions or diseases studied. */
          conditions: Array<string>;
          /** The normalized study interventions. */
          interventions: Array<{
            /** The intervention name. */
            name: string;
            /** The official intervention type when provided. */
            type: string | null;
            /** The raw JSON object returned by the ClinicalTrials.gov API. */
            raw: Record<string, unknown>;
          }>;
          /** The lead sponsor name when provided. */
          leadSponsor: string | null;
          /** Whether ClinicalTrials.gov reports posted study results. */
          hasResults: boolean;
          /**
           * The canonical public ClinicalTrials.gov study URL.
           * @format uri
           */
          studyUrl: string;
          /** The raw JSON object returned by the ClinicalTrials.gov API. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** List uploaded study protocols, statistical analysis plans, and informed consent forms with their official metadata. */
    "clinicaltrials_gov.get_study_documents": {
      input: {
        /**
         * The ClinicalTrials.gov identifier, such as NCT04280705.
         * @pattern ^[Nn][Cc][Tt]0*[1-9][0-9]{0,7}$
         */
        nctId: string;
      };
      output: {
        /** Whether the requested study was found. */
        found: boolean;
        /** The canonical requested NCT identifier. */
        nctId: string;
        /** The study brief title when found. */
        briefTitle: string | null;
        /** Whether the sponsor indicated that no statistical analysis plan exists. */
        noStatisticalAnalysisPlan: boolean | null;
        /** The uploaded study documents. */
        documents: Array<{
          /** The official abbreviated document type when provided. */
          type: string | null;
          /** The document label when provided. */
          label: string | null;
          /** The document date when provided. */
          documentDate: string | null;
          /** The date and time the document was uploaded when provided. */
          uploadDate: string | null;
          /** The provider-supplied document filename when provided. */
          filename: string | null;
          /** The document size in bytes when provided. */
          sizeBytes: number | null;
          /** Whether the document includes a study protocol. */
          hasProtocol: boolean | null;
          /** Whether the document includes a statistical analysis plan. */
          hasStatisticalAnalysisPlan: boolean | null;
          /** Whether the document includes an informed consent form. */
          hasInformedConsentForm: boolean | null;
          /** The raw JSON object returned by the ClinicalTrials.gov API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Get patient-facing eligibility criteria, age and sex requirements, and study population details for one ClinicalTrials.gov study. */
    "clinicaltrials_gov.get_study_eligibility": {
      input: {
        /**
         * The ClinicalTrials.gov identifier, such as NCT04280705.
         * @pattern ^[Nn][Cc][Tt]0*[1-9][0-9]{0,7}$
         */
        nctId: string;
        /** The format used for fields whose official data type is markup. */
        markupFormat?: "markdown" | "legacy";
      };
      output: {
        /** Whether the requested study was found. */
        found: boolean;
        /** The canonical requested NCT identifier. */
        nctId: string;
        /** The study brief title when found. */
        briefTitle: string | null;
        /** The study status when found and provided. */
        overallStatus: string | null;
        /** The study eligibility module when provided. */
        eligibility: {
          /** The inclusion and exclusion criteria in the requested markup format. */
          criteria: string | null;
          /** Whether the study accepts healthy volunteers when specified. */
          healthyVolunteers: boolean | null;
          /** The official eligible sex value when specified. */
          sex: string | null;
          /** Whether eligibility is based on self-identified gender when specified. */
          genderBased: boolean | null;
          /** The gender-based eligibility description when provided. */
          genderDescription: string | null;
          /** The minimum eligible age when specified. */
          minimumAge: string | null;
          /** The maximum eligible age when specified. */
          maximumAge: string | null;
          /** The official broad age groups accepted by the study. */
          standardAges: Array<string>;
          /** The observational study population description when provided. */
          studyPopulation: string | null;
          /** The observational study sampling method when provided. */
          samplingMethod: string | null;
          /** The raw JSON object returned by the ClinicalTrials.gov API. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Get study sites, geographic coordinates, central contacts, local contacts, and study officials for one ClinicalTrials.gov study. */
    "clinicaltrials_gov.get_study_locations": {
      input: {
        /**
         * The ClinicalTrials.gov identifier, such as NCT04280705.
         * @pattern ^[Nn][Cc][Tt]0*[1-9][0-9]{0,7}$
         */
        nctId: string;
      };
      output: {
        /** Whether the requested study was found. */
        found: boolean;
        /** The canonical requested NCT identifier. */
        nctId: string;
        /** The study brief title when found. */
        briefTitle: string | null;
        /** The study status when found and provided. */
        overallStatus: string | null;
        /** The study-wide central contacts. */
        centralContacts: Array<{
          /** The contact name when provided. */
          name: string | null;
          /** The official contact role when provided. */
          role: string | null;
          /** The contact phone number when provided. */
          phone: string | null;
          /** The contact phone extension when provided. */
          phoneExtension: string | null;
          /** The contact email address when provided. */
          email: string | null;
          /** The raw JSON object returned by the ClinicalTrials.gov API. */
          raw: Record<string, unknown>;
        }>;
        /** The study officials. */
        overallOfficials: Array<{
          /** The official's name when provided. */
          name: string | null;
          /** The official's organization when provided. */
          affiliation: string | null;
          /** The official's study role when provided. */
          role: string | null;
          /** The raw JSON object returned by the ClinicalTrials.gov API. */
          raw: Record<string, unknown>;
        }>;
        /** The participating study sites. */
        locations: Array<{
          /** The study facility name when provided. */
          facility: string | null;
          /** The facility's official recruitment status when provided. */
          status: string | null;
          /** The facility city when provided. */
          city: string | null;
          /** The facility state or region when provided. */
          state: string | null;
          /** The facility postal code when provided. */
          postalCode: string | null;
          /** The facility country when provided. */
          country: string | null;
          /** The contacts for this study site. */
          contacts: Array<{
            /** The contact name when provided. */
            name: string | null;
            /** The official contact role when provided. */
            role: string | null;
            /** The contact phone number when provided. */
            phone: string | null;
            /** The contact phone extension when provided. */
            phoneExtension: string | null;
            /** The contact email address when provided. */
            email: string | null;
            /** The raw JSON object returned by the ClinicalTrials.gov API. */
            raw: Record<string, unknown>;
          }>;
          /** A study location coordinate. */
          geoPoint: {
            /** The latitude in decimal degrees. */
            latitude: number;
            /** The longitude in decimal degrees. */
            longitude: number;
          } | null;
          /** The raw JSON object returned by the ClinicalTrials.gov API. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Get the official ClinicalTrials.gov study data model and field definitions. */
    "clinicaltrials_gov.get_study_metadata": {
      input: {
        /** Whether to include fields that are indexed for search but not returned in study records. */
        includeIndexedOnly?: boolean;
        /** Whether to include fields available only in historic study data. */
        includeHistoricOnly?: boolean;
      };
      output: {
        /** The top-level field metadata nodes. */
        fields: Array<Record<string, unknown>>;
        /** The number of top-level field metadata nodes. */
        count: number;
      };
    };
    /** Get posted participant flow, baseline characteristics, outcome measures, adverse events, and result notes for one ClinicalTrials.gov study. */
    "clinicaltrials_gov.get_study_results": {
      input: {
        /**
         * The ClinicalTrials.gov identifier, such as NCT04280705.
         * @pattern ^[Nn][Cc][Tt]0*[1-9][0-9]{0,7}$
         */
        nctId: string;
        /** The format used for fields whose official data type is markup. */
        markupFormat?: "markdown" | "legacy";
      };
      output: {
        /** Whether the requested study was found. */
        found: boolean;
        /** The canonical requested NCT identifier. */
        nctId: string;
        /** The study brief title when found. */
        briefTitle: string | null;
        /** Whether ClinicalTrials.gov reports posted results for the found study. */
        hasResults: boolean | null;
        /** The raw official ResultsSection, or null when the study has no posted results. */
        results: Record<string, unknown> | null;
      };
    };
    /** List official ClinicalTrials.gov enumeration types, values, legacy values, and field usages. */
    "clinicaltrials_gov.list_enums": {
      input: Record<string, never>;
      output: {
        /** The enumeration definitions. */
        enums: Array<{
          /** The enumeration type name. */
          type: string;
          /** The pieces using this enumeration. */
          pieces: Array<string>;
          /** The allowed enumeration values. */
          values: Array<{
            /** The current API value. */
            value: string;
            /** The legacy API value. */
            legacyValue: string;
            /** Piece-specific legacy value exceptions. */
            exceptions?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
        }>;
        /** The number of enumeration definitions. */
        count: number;
      };
    };
    /** List the official ClinicalTrials.gov search documents, areas, parameters, and indexed pieces. */
    "clinicaltrials_gov.list_search_areas": {
      input: Record<string, never>;
      output: {
        /** The search area documents. */
        documents: Array<Record<string, unknown>>;
        /** The number of search area documents. */
        count: number;
      };
    };
    /** Search ClinicalTrials.gov studies with official Essie queries, filters, field selection, sorting, and cursor pagination. */
    "clinicaltrials_gov.search_studies": {
      input: {
        /**
         * A Conditions or disease query in official Essie expression syntax.
         * @minLength 1
         */
        conditionQuery?: string;
        /**
         * An Other terms query in official Essie expression syntax.
         * @minLength 1
         */
        termQuery?: string;
        /**
         * A Location terms query in official Essie expression syntax.
         * @minLength 1
         */
        locationQuery?: string;
        /**
         * A Title or acronym query in official Essie expression syntax.
         * @minLength 1
         */
        titleQuery?: string;
        /**
         * An Intervention or treatment query in official Essie expression syntax.
         * @minLength 1
         */
        interventionQuery?: string;
        /**
         * An Outcome measure query in official Essie expression syntax.
         * @minLength 1
         */
        outcomeQuery?: string;
        /**
         * A Sponsor or collaborator query in official Essie expression syntax.
         * @minLength 1
         */
        sponsorQuery?: string;
        /**
         * A LeadSponsorName query in official Essie expression syntax.
         * @minLength 1
         */
        leadSponsorQuery?: string;
        /**
         * A Study IDs query in official Essie expression syntax. Use nctIds instead when combining identifiers with filters.
         * @minLength 1
         */
        idQuery?: string;
        /**
         * A patient-friendly eligibility query using the official PatientSearch area.
         * @minLength 1
         */
        patientQuery?: string;
        /**
         * The official study statuses to include.
         * @minItems 1
         */
        overallStatuses?: Array<"ACTIVE_NOT_RECRUITING" | "COMPLETED" | "ENROLLING_BY_INVITATION" | "NOT_YET_RECRUITING" | "RECRUITING" | "SUSPENDED" | "TERMINATED" | "WITHDRAWN" | "AVAILABLE" | "NO_LONGER_AVAILABLE" | "TEMPORARILY_NOT_AVAILABLE" | "APPROVED_FOR_MARKETING" | "WITHHELD" | "UNKNOWN">;
        /**
         * The NCT identifiers to include. Large identifier lists may exceed the upstream URL limit; use get_studies_by_nct_ids for batch retrieval.
         * @minItems 1
         * @maxItems 400
         */
        nctIds?: Array<string>;
        /**
         * An advanced filter in official Essie expression syntax.
         * @minLength 1
         */
        advancedFilter?: string;
        /** A distance filter centered on one geographic coordinate. */
        geo?: {
          /**
           * The center latitude in decimal degrees.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * The center longitude in decimal degrees.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /**
           * The search radius in the selected unit.
           * @exclusiveMinimum 0
           */
          distance: number;
          /** The search radius unit. */
          unit?: "km" | "mi";
        };
        /**
         * Additional official fields to return alongside the fields required for the normalized study summary.
         * @minItems 1
         */
        fields?: Array<string>;
        /**
         * The study sort options, in priority order.
         * @minItems 1
         * @maxItems 2
         */
        sort?: Array<{
          /**
           * A sortable date or numeric piece or field name, or @relevance for query relevance.
           * @minLength 1
           * @pattern ^([a-zA-Z][a-zA-Z0-9. -]*|@relevance)$
           */
          field: string;
          /** The optional sort direction. */
          direction?: "asc" | "desc";
        }>;
        /** Whether the first page should include the total number of matching studies. */
        countTotal?: boolean;
        /**
         * The maximum number of studies to return in this page.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * The nextPageToken returned by the preceding page with otherwise identical query parameters.
         * @minLength 1
         */
        pageToken?: string;
        /** The format used for fields whose official data type is markup. */
        markupFormat?: "markdown" | "legacy";
      };
      output: {
        /** The studies returned in this page. */
        studies: Array<{
          /** The canonical NCT identifier. */
          nctId: string;
          /** The study brief title. */
          briefTitle: string;
          /** The study official title when provided. */
          officialTitle: string | null;
          /** The study recruitment or availability status. */
          overallStatus: string | null;
          /** The official study type when provided. */
          studyType: string | null;
          /** The official study phases. */
          phases: Array<string>;
          /** The conditions or diseases studied. */
          conditions: Array<string>;
          /** The normalized study interventions. */
          interventions: Array<{
            /** The intervention name. */
            name: string;
            /** The official intervention type when provided. */
            type: string | null;
            /** The raw JSON object returned by the ClinicalTrials.gov API. */
            raw: Record<string, unknown>;
          }>;
          /** The lead sponsor name when provided. */
          leadSponsor: string | null;
          /** Whether ClinicalTrials.gov reports posted study results. */
          hasResults: boolean;
          /**
           * The canonical public ClinicalTrials.gov study URL.
           * @format uri
           */
          studyUrl: string;
          /** The raw JSON object returned by the ClinicalTrials.gov API. */
          raw: Record<string, unknown>;
        }>;
        /** The number of studies returned in this page. */
        count: number;
        /** The total number of matching studies when requested on the first page. */
        totalCount: number | null;
        /** The token for the next page, or null when this is the last page. */
        nextPageToken: string | null;
      };
    };
  }
}
