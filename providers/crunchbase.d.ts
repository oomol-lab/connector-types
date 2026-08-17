import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Suggest Crunchbase entities that match a text query. */
    "crunchbase.autocomplete_entities": {
      input: {
        /**
         * Text to search for in Crunchbase identifiers.
         * @minLength 1
         */
        query: string;
        /**
         * Crunchbase collections to search. Omit to search all supported identifiers.
         * @minItems 1
         */
        collectionIds?: Array<string>;
        /**
         * Number of suggestions to return. Crunchbase defaults to 10 and allows up to 25.
         * @minimum 1
         * @maximum 25
         */
        limit?: number;
      };
      output: {
        /** Autocomplete entities returned by Crunchbase. */
        entities: Array<{
          /** A Crunchbase entity identifier. */
          identifier?: {
            /** The Crunchbase entity definition ID. */
            entity_def_id?: string;
            /** The Crunchbase entity UUID. */
            uuid?: string;
            /** The Crunchbase permalink slug. */
            permalink?: string;
            /** The display name for this Crunchbase identifier. */
            value?: string;
            /** The Crunchbase image ID when available. */
            image_id?: string;
            [key: string]: unknown;
          };
          /** The facet IDs attached to this match. */
          facet_ids?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Raw object returned by the official Crunchbase API. */
        raw: Record<string, unknown>;
      };
    };
    /** Look up one Crunchbase acquisition by UUID or permalink. */
    "crunchbase.get_acquisition": {
      input: {
        /**
         * Crunchbase acquisition UUID or permalink.
         * @minLength 1
         */
        entityId: string;
        /**
         * Acquisition field IDs to include.
         * @minItems 1
         */
        fieldIds?: Array<string>;
        /**
         * Acquisition cards to include.
         * @minItems 1
         */
        cardIds?: Array<"acquiree_organization" | "acquirer_organization" | "fields" | "press_references">;
      };
      output: {
        /** A Crunchbase acquisition entity. */
        acquisition: {
          /** Cards included on the acquisition response. */
          cards?: Record<string, unknown>;
          /** Properties included on the acquisition response. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Raw object returned by the official Crunchbase API. */
        raw: Record<string, unknown>;
      };
    };
    /** Look up one Crunchbase organization by UUID or permalink. */
    "crunchbase.get_organization": {
      input: {
        /**
         * Crunchbase organization UUID or permalink.
         * @minLength 1
         */
        entityId: string;
        /**
         * Organization field IDs to include.
         * @minItems 1
         */
        fieldIds?: Array<string>;
        /**
         * Organization card IDs to include.
         * @minItems 1
         */
        cardIds?: Array<string>;
      };
      output: {
        /** A Crunchbase organization entity. */
        organization: {
          /** Cards included on the organization response. */
          cards?: Record<string, unknown>;
          /** Properties included on the organization response. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Raw object returned by the official Crunchbase API. */
        raw: Record<string, unknown>;
      };
    };
    /** List acquisitions where a Crunchbase organization is the acquiree or acquirer. */
    "crunchbase.get_organization_acquisitions": {
      input: {
        /**
         * Crunchbase organization UUID or permalink.
         * @minLength 1
         */
        organizationId: string;
        /**
         * Fields to include for each entity in the organization card.
         * @minItems 1
         */
        cardFieldIds?: Array<string>;
        /**
         * UUID cursor for fetching the next page of card results.
         * @minLength 1
         */
        afterId?: string;
        /**
         * UUID cursor for fetching the previous page of card results.
         * @minLength 1
         */
        beforeId?: string;
        /**
         * Card field and direction used to order results, such as announced_on desc.
         * @minLength 1
         */
        order?: string;
        /**
         * Number of card results to return. Crunchbase allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The organization's role in the acquisitions. */
        relationship: "acquiree" | "acquirer";
      };
      output: {
        /** Acquisitions linked to the organization. */
        acquisitions: Array<Record<string, unknown>>;
        /** Raw object returned by the official Crunchbase API. */
        raw: Record<string, unknown>;
      };
    };
    /** List IPO records linked to a Crunchbase organization. */
    "crunchbase.get_organization_ipos": {
      input: {
        /**
         * Crunchbase organization UUID or permalink.
         * @minLength 1
         */
        organizationId: string;
        /**
         * Fields to include for each entity in the organization card.
         * @minItems 1
         */
        cardFieldIds?: Array<string>;
        /**
         * UUID cursor for fetching the next page of card results.
         * @minLength 1
         */
        afterId?: string;
        /**
         * UUID cursor for fetching the previous page of card results.
         * @minLength 1
         */
        beforeId?: string;
        /**
         * Card field and direction used to order results, such as announced_on desc.
         * @minLength 1
         */
        order?: string;
        /**
         * Number of card results to return. Crunchbase allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** IPO records linked to the organization. */
        ipos: Array<Record<string, unknown>>;
        /** Raw object returned by the official Crunchbase API. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Crunchbase acquisitions using the official Search API query structure. */
    "crunchbase.search_acquisitions": {
      input: {
        /**
         * Acquisition field IDs to include in each result.
         * @minItems 1
         */
        fieldIds: Array<string>;
        /**
         * Official Crunchbase Search API predicates to apply.
         * @minItems 1
         * @maxItems 25
         */
        query: Array<{
          /** The Crunchbase predicate type such as predicate, and, or, not, or collection. */
          type?: string;
          /** The Crunchbase field ID this predicate targets. */
          field_id?: string;
          /** The Crunchbase operator ID for this predicate. */
          operator_id?: string;
          /**
           * The values applied to this predicate.
           * @minItems 1
           */
          values?: Array<string | number | boolean | Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /**
         * Sort rules for the search response.
         * @minItems 1
         */
        order?: Array<{
          /**
           * The Crunchbase field ID to sort by.
           * @minLength 1
           */
          field_id: string;
          /** The sort direction. */
          sort: "asc" | "desc";
        }>;
        /**
         * Number of acquisitions to return. Crunchbase allows up to 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * UUID cursor from the last result in the previous page.
         * @minLength 1
         */
        afterId?: string;
        /**
         * UUID cursor from the first result in the previous page.
         * @minLength 1
         */
        beforeId?: string;
      };
      output: {
        /** Number of acquisitions returned in this response. */
        count: number;
        /** Acquisition search results returned by Crunchbase. */
        entities: Array<{
          /** The Crunchbase acquisition UUID. */
          uuid?: string;
          /** The requested acquisition fields returned by Crunchbase. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Raw object returned by the official Crunchbase API. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Crunchbase organizations using the official Search API query structure. */
    "crunchbase.search_organizations": {
      input: {
        /**
         * Organization field IDs to include in each result.
         * @minItems 1
         */
        fieldIds: Array<string>;
        /**
         * Official Crunchbase Search API predicates to apply.
         * @minItems 1
         */
        query?: Array<{
          /** The Crunchbase predicate type such as predicate, and, or, not, or collection. */
          type?: string;
          /** The Crunchbase field ID this predicate targets. */
          field_id?: string;
          /** The Crunchbase operator ID for this predicate. */
          operator_id?: string;
          /**
           * The values applied to this predicate.
           * @minItems 1
           */
          values?: Array<string | number | boolean | Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /**
         * Sort rules for the search response.
         * @minItems 1
         */
        order?: Array<{
          /**
           * The Crunchbase field ID to sort by.
           * @minLength 1
           */
          field_id: string;
          /** The sort direction. */
          sort: "asc" | "desc";
        }>;
        /**
         * Number of organizations to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Cursor ID from a previous Crunchbase search response.
         * @minLength 1
         */
        afterId?: string;
      };
      output: {
        /** Number of organizations returned in this response. */
        count: number;
        /** Organization search results returned by Crunchbase. */
        entities: Array<{
          /** The Crunchbase organization UUID. */
          uuid?: string;
          /** The requested organization fields returned by Crunchbase. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Raw object returned by the official Crunchbase API. */
        raw: Record<string, unknown>;
      };
    };
  }
}
