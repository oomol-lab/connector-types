import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one DataCite DOI metadata record, including non-public states when the connected API key permits access. */
    "datacite.get_doi": {
      input: {
        /**
         * The DOI name, such as 10.14454/qdd3-ps68. A doi.org URL is also accepted.
         * @minLength 1
         */
        doi: string;
        /** Whether to include detailed affiliation identifier information. */
        affiliation?: boolean;
        /** Whether to include detailed publisher identifier information. */
        publisher?: boolean;
      };
      output: {
        /** A DataCite DOI resource. */
        data: {
          /** The normalized DOI name. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The DOI metadata attributes returned by DataCite. */
          attributes: Record<string, unknown>;
          /** The JSON:API relationships returned for the DOI when present. */
          relationships?: Record<string, unknown>;
        };
      };
    };
    /** Search, filter, sort, and page through DataCite DOI metadata records with public or authenticated access. */
    "datacite.list_dois": {
      input: {
        /**
         * An OpenSearch query string over DOI metadata fields, such as titles.title:climate.
         * @minLength 1
         */
        query?: string;
        /**
         * One DOI prefix or a comma-separated list of prefixes, such as 10.5438.
         * @minLength 1
         */
        prefix?: string;
        /**
         * One repository ID or a comma-separated list of repository IDs.
         * @minLength 1
         */
        clientId?: string;
        /**
         * One member or consortium organization ID, or a comma-separated list of IDs.
         * @minLength 1
         */
        providerId?: string;
        /**
         * The DataCite consortium ID to filter by.
         * @minLength 1
         */
        consortiumId?: string;
        /**
         * The DataCite resourceTypeGeneral values to include.
         * @minItems 1
         */
        resourceTypeIds?: Array<"audiovisual" | "award" | "book" | "book-chapter" | "collection" | "computational-notebook" | "conference-paper" | "conference-proceeding" | "data-paper" | "dataset" | "dissertation" | "event" | "image" | "instrument" | "interactive-resource" | "journal" | "journal-article" | "model" | "output-management-plan" | "peer-review" | "physical-object" | "poster" | "preprint" | "presentation" | "project" | "report" | "service" | "software" | "sound" | "standard" | "study-registration" | "text" | "workflow" | "other">;
        /**
         * A free-text subject used to filter DOI metadata.
         * @minLength 1
         */
        subject?: string;
        /**
         * An ORCID iD used to match creator identifiers.
         * @minLength 1
         */
        userId?: string;
        /**
         * A ROR ID used to match creator affiliations.
         * @minLength 1
         */
        affiliationId?: string;
        /**
         * A Crossref Funder ID used to match funding references.
         * @minLength 1
         */
        funderId?: string;
        /**
         * A publication year or comma-separated publication years in YYYY format.
         * @minLength 1
         */
        published?: string;
        /**
         * A creation year or comma-separated creation years in YYYY format.
         * @minLength 1
         */
        created?: string;
        /**
         * A registration year or comma-separated registration years in YYYY format.
         * @minLength 1
         */
        registered?: string;
        /**
         * The DOI states to include. Draft and Registered records require API key authentication.
         * @minItems 1
         */
        states?: Array<"draft" | "registered" | "findable">;
        /**
         * The minimum citation count to include.
         * @minimum 0
         */
        hasCitations?: number;
        /**
         * The minimum reference count to include.
         * @minimum 0
         */
        hasReferences?: number;
        /** The ordering applied to matching DOI records. */
        sort?: "relevance" | "name" | "-name" | "created" | "-created" | "updated" | "-updated" | "published" | "-published" | "view-count" | "-view-count" | "download-count" | "-download-count" | "citation-count" | "-citation-count" | "title" | "-title";
        /** Whether to include extended DOI metadata and relationships. */
        detail?: boolean;
        /** Whether to include detailed affiliation identifier information. */
        affiliation?: boolean;
        /** Whether to include detailed publisher identifier information. */
        publisher?: boolean;
        /**
         * The page number for numbered pagination.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * The number of DOI records to return, from 0 through 1,000.
         * @minimum 0
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * The cursor returned by DataCite for cursor-based pagination.
         * @minLength 1
         */
        pageCursor?: string;
      };
      output: {
        /** The matching DOI resources. */
        data: Array<{
          /** The normalized DOI name. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The DOI metadata attributes returned by DataCite. */
          attributes: Record<string, unknown>;
          /** The JSON:API relationships returned for the DOI when present. */
          relationships?: Record<string, unknown>;
        }>;
        /** The raw object returned by the DataCite JSON:API. */
        meta: Record<string, unknown>;
        /** The raw object returned by the DataCite JSON:API. */
        links: Record<string, unknown>;
      };
    };
  }
}
