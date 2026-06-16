import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Return OpenAlex autocomplete suggestions for a search string. */
    "openalex.autocomplete": {
      input: {
        /**
         * A full-text search string sent with OpenAlex search.
         * @minLength 1
         */
        search: string;
        /** The OpenAlex entity collection to query. */
        entity?: "works" | "authors" | "sources" | "institutions" | "topics" | "publishers" | "funders";
        /**
         * The number of records to return per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
      };
      output: {
        /** The OpenAlex response metadata. */
        meta: {
          /** The total number of records matching the query. */
          count: number | null;
          /** The upstream database response time in milliseconds. */
          dbResponseTimeMs: number | null;
          /** The current page number when page pagination is used. */
          page: number | null;
          /** The number of records returned per page. */
          perPage: number | null;
          /** The next cursor value for cursor pagination. */
          nextCursor: string | null;
          /** The total group count when grouping is used. */
          groupsCount: number | null;
          /** The raw OpenAlex object. */
          raw: Record<string, unknown>;
        };
        /** The normalized OpenAlex autocomplete results. */
        results: Array<{
          /** The OpenAlex entity URL identifier. */
          id: string | null;
          /** The short OpenAlex identifier extracted from the URL. */
          openalexId: string | null;
          /** The autocomplete display name. */
          displayName: string | null;
          /** The OpenAlex hint text for the result. */
          hint: string | null;
          /** The OpenAlex entity type returned for the result. */
          entityType: string | null;
          /** The citation count returned for the result. */
          citedByCount: number | null;
          /** The works count returned for the result. */
          worksCount: number | null;
          /** An external identifier returned by OpenAlex when present. */
          externalId: string | null;
          /** The raw OpenAlex object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw OpenAlex autocomplete results. */
        rawResults: Array<Record<string, unknown>>;
      };
    };
    /** Get one OpenAlex entity by identifier from a supported collection. */
    "openalex.get_entity": {
      input: {
        /** The OpenAlex entity collection to query. */
        entity: "works" | "authors" | "sources" | "institutions" | "topics" | "publishers" | "funders";
        /**
         * The OpenAlex entity identifier, such as W2741809807, A5023888391, or an OpenAlex URL.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized OpenAlex entity summary. */
        entity: {
          /** The OpenAlex entity URL identifier. */
          id: string | null;
          /** The short OpenAlex identifier extracted from the entity URL. */
          openalexId: string | null;
          /** The entity display name or title. */
          displayName: string | null;
          /** The number of works associated with the entity. */
          worksCount: number | null;
          /** The number of citations associated with the entity. */
          citedByCount: number | null;
          /** The homepage URL returned by OpenAlex when present. */
          homepageUrl: string | null;
          /** The raw OpenAlex object. */
          raw: Record<string, unknown>;
        };
        /** The raw OpenAlex object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one OpenAlex work by identifier. */
    "openalex.get_work": {
      input: {
        /**
         * The OpenAlex entity identifier, such as W2741809807, A5023888391, or an OpenAlex URL.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized OpenAlex work summary. */
        work: {
          /** The OpenAlex work URL identifier. */
          id: string | null;
          /** The short OpenAlex work identifier extracted from the URL. */
          openalexId: string | null;
          /** The DOI returned by OpenAlex when present. */
          doi: string | null;
          /** The work title. */
          title: string | null;
          /** The work publication year. */
          publicationYear: number | null;
          /** The work publication date. */
          publicationDate: string | null;
          /** The OpenAlex work type. */
          type: string | null;
          /** The number of citations for the work. */
          citedByCount: number | null;
          /** The best open access URL returned by OpenAlex. */
          openAccessUrl: string | null;
          /** The landing page URL from the primary location. */
          primaryLocationUrl: string | null;
          /** The raw OpenAlex object. */
          raw: Record<string, unknown>;
        };
        /** The raw OpenAlex object. */
        raw: Record<string, unknown>;
      };
    };
    /** List, search, filter, page, or group OpenAlex entities from the supported collections. */
    "openalex.list_entities": {
      input: {
        /** The OpenAlex entity collection to query. */
        entity: "works" | "authors" | "sources" | "institutions" | "topics" | "publishers" | "funders";
        /**
         * A full-text search string sent with OpenAlex search.
         * @minLength 1
         */
        search?: string;
        /**
         * An OpenAlex filter expression, such as publication_year:2024 or cited_by_count:>100.
         * @minLength 1
         */
        filter?: string;
        /**
         * An OpenAlex sort expression, such as cited_by_count:desc or publication_year:desc.
         * @minLength 1
         */
        sort?: string;
        /**
         * The OpenAlex cursor value for cursor pagination. Use * for the first cursor page.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The OpenAlex page number for basic paging.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /**
         * Specific OpenAlex fields to return.
         * @minItems 1
         */
        select?: Array<string>;
        /**
         * An OpenAlex field to group by, such as publication_year or institutions.country_code.
         * @minLength 1
         */
        groupBy?: string;
        /**
         * The number of random records to sample.
         * @minimum 1
         * @maximum 200
         */
        sample?: number;
        /** The seed used with OpenAlex random sampling. */
        seed?: number;
      };
      output: {
        /** The OpenAlex response metadata. */
        meta: {
          /** The total number of records matching the query. */
          count: number | null;
          /** The upstream database response time in milliseconds. */
          dbResponseTimeMs: number | null;
          /** The current page number when page pagination is used. */
          page: number | null;
          /** The number of records returned per page. */
          perPage: number | null;
          /** The next cursor value for cursor pagination. */
          nextCursor: string | null;
          /** The total group count when grouping is used. */
          groupsCount: number | null;
          /** The raw OpenAlex object. */
          raw: Record<string, unknown>;
        };
        /** The normalized OpenAlex entity results. */
        results: Array<{
          /** The OpenAlex entity URL identifier. */
          id: string | null;
          /** The short OpenAlex identifier extracted from the entity URL. */
          openalexId: string | null;
          /** The entity display name or title. */
          displayName: string | null;
          /** The number of works associated with the entity. */
          worksCount: number | null;
          /** The number of citations associated with the entity. */
          citedByCount: number | null;
          /** The homepage URL returned by OpenAlex when present. */
          homepageUrl: string | null;
          /** The raw OpenAlex object. */
          raw: Record<string, unknown>;
        }>;
        /** The normalized OpenAlex group results when groupBy is used. */
        groups: Array<{
          /** The OpenAlex group key. */
          key: string | null;
          /** The display name for the group key. */
          keyDisplayName: string | null;
          /** The number of records in this group. */
          count: number | null;
          /** The raw OpenAlex object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw OpenAlex results. */
        rawResults: Array<Record<string, unknown>>;
      };
    };
    /** List, search, filter, page, or group OpenAlex works with work-focused normalized fields. */
    "openalex.list_works": {
      input: {
        /**
         * A full-text search string sent with OpenAlex search.
         * @minLength 1
         */
        search?: string;
        /**
         * An OpenAlex filter expression, such as publication_year:2024 or cited_by_count:>100.
         * @minLength 1
         */
        filter?: string;
        /**
         * An OpenAlex sort expression, such as cited_by_count:desc or publication_year:desc.
         * @minLength 1
         */
        sort?: string;
        /**
         * The OpenAlex cursor value for cursor pagination. Use * for the first cursor page.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The OpenAlex page number for basic paging.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /**
         * Specific OpenAlex fields to return.
         * @minItems 1
         */
        select?: Array<string>;
        /**
         * An OpenAlex field to group by, such as publication_year or institutions.country_code.
         * @minLength 1
         */
        groupBy?: string;
        /**
         * The number of random records to sample.
         * @minimum 1
         * @maximum 200
         */
        sample?: number;
        /** The seed used with OpenAlex random sampling. */
        seed?: number;
      };
      output: {
        /** The OpenAlex response metadata. */
        meta: {
          /** The total number of records matching the query. */
          count: number | null;
          /** The upstream database response time in milliseconds. */
          dbResponseTimeMs: number | null;
          /** The current page number when page pagination is used. */
          page: number | null;
          /** The number of records returned per page. */
          perPage: number | null;
          /** The next cursor value for cursor pagination. */
          nextCursor: string | null;
          /** The total group count when grouping is used. */
          groupsCount: number | null;
          /** The raw OpenAlex object. */
          raw: Record<string, unknown>;
        };
        /** The normalized OpenAlex works. */
        works: Array<{
          /** The OpenAlex work URL identifier. */
          id: string | null;
          /** The short OpenAlex work identifier extracted from the URL. */
          openalexId: string | null;
          /** The DOI returned by OpenAlex when present. */
          doi: string | null;
          /** The work title. */
          title: string | null;
          /** The work publication year. */
          publicationYear: number | null;
          /** The work publication date. */
          publicationDate: string | null;
          /** The OpenAlex work type. */
          type: string | null;
          /** The number of citations for the work. */
          citedByCount: number | null;
          /** The best open access URL returned by OpenAlex. */
          openAccessUrl: string | null;
          /** The landing page URL from the primary location. */
          primaryLocationUrl: string | null;
          /** The raw OpenAlex object. */
          raw: Record<string, unknown>;
        }>;
        /** The normalized OpenAlex group results when groupBy is used. */
        groups: Array<{
          /** The OpenAlex group key. */
          key: string | null;
          /** The display name for the group key. */
          keyDisplayName: string | null;
          /** The number of records in this group. */
          count: number | null;
          /** The raw OpenAlex object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw OpenAlex work results. */
        rawResults: Array<Record<string, unknown>>;
      };
    };
  }
}
