import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Export one DOI as BibTeX, RIS, CSL JSON, a formatted citation, RDF, Turtle, or UNIXREF XML. */
    "crossref.export_work_citation": {
      input: {
        /**
         * The DOI of the work, such as 10.1038/nphys1170. A doi.org URL is also accepted.
         * @minLength 1
         * @pattern \S
         */
        doi: string;
        /**
         * The citation or metadata format to export.
         * @default "bibtex"
         */
        format?: "bibtex" | "ris" | "csl_json" | "formatted" | "rdf_xml" | "turtle" | "unixref_xml" | "unixsd_xml";
        /**
         * A Crossref CSL style identifier used only with formatted output, such as apa.
         * @minLength 1
         * @pattern \S
         */
        style?: string;
        /**
         * A Crossref locale identifier used only with formatted output, such as en-US.
         * @minLength 1
         * @pattern \S
         */
        locale?: string;
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
      };
      output: {
        /** The normalized DOI used for the request. */
        doi: string;
        /** The citation or metadata format to export. */
        format: "bibtex" | "ris" | "csl_json" | "formatted" | "rdf_xml" | "turtle" | "unixref_xml" | "unixsd_xml";
        /** The response media type returned by Crossref. */
        contentType: string;
        /** The exported citation or metadata content. */
        content: string;
      };
    };
    /** Get one Crossref journal, member, funder, DOI prefix, or work type record. */
    "crossref.get_resource": {
      input: {
        /** The Crossref resource type to retrieve. */
        resourceType: "journal" | "member" | "funder" | "prefix" | "type";
        /**
         * The resource identifier, such as an ISSN, member ID, funder ID, DOI prefix, or type ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
      };
      output: {
        /** A normalized Crossref resource. */
        resource: {
          /** The resource identifier derived from the Crossref response. */
          id: string | null;
          /** The primary resource title, name, or label. */
          displayName: string | null;
          /** The resource location when Crossref returns one. */
          location: string | null;
          /** The canonical resource URI when Crossref returns one. */
          uri: string | null;
          /** The number of works associated with the resource. */
          workCount: number | null;
          /** The raw Crossref metadata object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the current Crossref metadata record for one DOI. */
    "crossref.get_work": {
      input: {
        /**
         * The DOI of the work, such as 10.1038/nphys1170. A doi.org URL is also accepted.
         * @minLength 1
         * @pattern \S
         */
        doi: string;
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
      };
      output: {
        /** A normalized Crossref work. */
        work: {
          /** The DOI of the work. */
          doi: string | null;
          /** The primary work title. */
          title: string | null;
          /** The primary work subtitle. */
          subtitle: string | null;
          /** The Crossref work type. */
          type: string | null;
          /** The work publisher. */
          publisher: string | null;
          /** The primary journal, book, or container title. */
          containerTitle: string | null;
          /** The normalized publication date at the available precision. */
          publishedAt: string | null;
          /** The canonical URL returned by Crossref. */
          url: string | null;
          /** The abstract deposited with Crossref when available. */
          abstract: string | null;
          /** The normalized work contributors. */
          authors: Array<{
            /** The contributor given name. */
            given: string | null;
            /** The contributor family name. */
            family: string | null;
            /** The contributor literal or organization name. */
            name: string | null;
            /** The contributor ORCID URL or identifier. */
            orcid: string | null;
            /** The contributor sequence value returned by Crossref. */
            sequence: string | null;
          }>;
          /** The number of references deposited for the work. */
          referenceCount: number | null;
          /** The number of Crossref citations to the work. */
          citedByCount: number | null;
          /** The relevance score returned for a search result. */
          score: number | null;
          /** The raw Crossref metadata object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the DOI registration agency reported by Crossref for one work. */
    "crossref.get_work_agency": {
      input: {
        /**
         * The DOI of the work, such as 10.1038/nphys1170. A doi.org URL is also accepted.
         * @minLength 1
         * @pattern \S
         */
        doi: string;
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
      };
      output: {
        /** The normalized DOI used for the request. */
        doi: string;
        /** The normalized DOI registration agency. */
        agency: {
          /** The registration agency identifier. */
          id: string | null;
          /** The registration agency display label. */
          label: string | null;
          /** The raw Crossref metadata object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Page through Crossref works created, updated by members, or re-indexed since a point in time. */
    "crossref.list_changed_works": {
      input: {
        /**
         * The Crossref timestamp used to detect changes.
         * @default "indexed"
         */
        changeSource?: "created" | "updated" | "indexed";
        /**
         * The inclusive lower Crossref timestamp for this bounded synchronization window.
         * @minLength 4
         * @pattern ^\d{4}(?:-\d{2}(?:-\d{2}(?:T\d{2}(?::\d{2}(?::\d{2})?)?Z?)?)?)?$
         */
        fromDate: string;
        /**
         * The inclusive upper Crossref timestamp fixed before reading the first page of this synchronization window.
         * @minLength 4
         * @pattern ^\d{4}(?:-\d{2}(?:-\d{2}(?:T\d{2}(?::\d{2}(?::\d{2})?)?Z?)?)?)?$
         */
        untilDate: string;
        /**
         * An optional Crossref work type filter, such as journal-article or book-chapter.
         * @minLength 1
         * @pattern \S
         */
        workType?: string;
        /**
         * The number of changed works to return per cursor page.
         * @minimum 1
         * @maximum 100
         * @default 100
         */
        rows?: number;
        /**
         * Use * for the first cursor page, then reuse nextCursor with the exact same action and query. The wrapped Crossref cursor expires after five minutes of inactivity.
         * @minLength 1
         * @maxLength 12000
         * @default "*"
         */
        cursor?: string;
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
      };
      output: {
        /** Normalized pagination metadata from a Crossref list response. */
        meta: {
          /** The total number of matching records. */
          totalResults: number | null;
          /** The actual number of records returned in this response page. */
          returnedCount: number;
          /** The next connector cursor for cursor-mode requests. It wraps an upstream Crossref cursor that expires after five minutes of inactivity. Its presence does not guarantee another record; stop when returnedCount is smaller than the requested rows. */
          nextCursor: string | null;
        };
        /** The normalized Crossref works. */
        works: Array<{
          /** The DOI of the work. */
          doi: string | null;
          /** The primary work title. */
          title: string | null;
          /** The primary work subtitle. */
          subtitle: string | null;
          /** The Crossref work type. */
          type: string | null;
          /** The work publisher. */
          publisher: string | null;
          /** The primary journal, book, or container title. */
          containerTitle: string | null;
          /** The normalized publication date at the available precision. */
          publishedAt: string | null;
          /** The canonical URL returned by Crossref. */
          url: string | null;
          /** The abstract deposited with Crossref when available. */
          abstract: string | null;
          /** The normalized work contributors. */
          authors: Array<{
            /** The contributor given name. */
            given: string | null;
            /** The contributor family name. */
            family: string | null;
            /** The contributor literal or organization name. */
            name: string | null;
            /** The contributor ORCID URL or identifier. */
            orcid: string | null;
            /** The contributor sequence value returned by Crossref. */
            sequence: string | null;
          }>;
          /** The number of references deposited for the work. */
          referenceCount: number | null;
          /** The number of Crossref citations to the work. */
          citedByCount: number | null;
          /** The relevance score returned for a search result. */
          score: number | null;
          /** The raw Crossref metadata object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Crossref metadata object. */
        facets: Record<string, unknown>;
      };
    };
    /** List the locale identifiers accepted for formatted Crossref citations. */
    "crossref.list_citation_locales": {
      input: {
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
      };
      output: {
        /** The total number of values returned by Crossref. */
        totalResults: number;
        /** The supported Crossref values. */
        items: Array<string>;
      };
    };
    /** List the CSL style identifiers accepted for formatted Crossref citations. */
    "crossref.list_citation_styles": {
      input: {
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
      };
      output: {
        /** The total number of values returned by Crossref. */
        totalResults: number;
        /** The supported Crossref values. */
        items: Array<string>;
      };
    };
    /** List or search Crossref journals, members, funders, work types, or licenses. */
    "crossref.list_resources": {
      input: {
        /** The Crossref resource collection to list. */
        collection: "journals" | "licenses";
        /**
         * A full-text query across the metadata fields supported by the selected endpoint.
         * @minLength 1
         */
        query?: string;
        /**
         * The number of results to return. Use 0 for counts only.
         * @minimum 0
         * @maximum 100
         */
        rows?: number;
        /**
         * The zero-based result offset. Crossref recommends cursor pagination for deep result sets.
         * @minimum 0
         * @maximum 10000
         */
        offset?: number;
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
      } | {
        /** The Crossref resource collection to list. */
        collection: "journals" | "licenses";
        /**
         * A full-text query across the metadata fields supported by the selected endpoint.
         * @minLength 1
         */
        query?: string;
        /**
         * The number of results to return in this cursor page.
         * @minimum 1
         * @maximum 100
         */
        rows?: number;
        /**
         * Use * for the first cursor page, then reuse nextCursor with the exact same action and query. The wrapped Crossref cursor expires after five minutes of inactivity.
         * @minLength 1
         * @maxLength 12000
         */
        cursor: string;
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
      } | {
        /** The Crossref resource collection to list. */
        collection: "members" | "funders";
        /**
         * A full-text query across the metadata fields supported by the selected endpoint.
         * @minLength 1
         */
        query?: string;
        /**
         * A Crossref resource filter expression supported by members and funders.
         * @minLength 1
         */
        filter?: string;
        /**
         * The number of results to return. Use 0 for counts only.
         * @minimum 0
         * @maximum 100
         */
        rows?: number;
        /**
         * The zero-based result offset. Crossref recommends cursor pagination for deep result sets.
         * @minimum 0
         * @maximum 10000
         */
        offset?: number;
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
      } | {
        /** The Crossref resource collection to list. */
        collection: "members" | "funders";
        /**
         * A full-text query across the metadata fields supported by the selected endpoint.
         * @minLength 1
         */
        query?: string;
        /**
         * A Crossref resource filter expression supported by members and funders.
         * @minLength 1
         */
        filter?: string;
        /**
         * The number of results to return in this cursor page.
         * @minimum 1
         * @maximum 100
         */
        rows?: number;
        /**
         * Use * for the first cursor page, then reuse nextCursor with the exact same action and query. The wrapped Crossref cursor expires after five minutes of inactivity.
         * @minLength 1
         * @maxLength 12000
         */
        cursor: string;
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
      } | {
        /** The Crossref work type collection. */
        collection: "types";
        /**
         * The number of results to return. Use 0 for counts only.
         * @minimum 0
         * @maximum 100
         */
        rows?: number;
        /**
         * The zero-based result offset. Crossref recommends cursor pagination for deep result sets.
         * @minimum 0
         * @maximum 10000
         */
        offset?: number;
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
      };
      output: {
        /** Normalized pagination metadata from a Crossref list response. */
        meta: {
          /** The total number of matching records. */
          totalResults: number | null;
          /** The actual number of records returned in this response page. */
          returnedCount: number;
          /** The next connector cursor for cursor-mode requests. It wraps an upstream Crossref cursor that expires after five minutes of inactivity. Its presence does not guarantee another record; stop when returnedCount is smaller than the requested rows. */
          nextCursor: string | null;
        };
        /** The normalized Crossref resources. */
        resources: Array<{
          /** The resource identifier derived from the Crossref response. */
          id: string | null;
          /** The primary resource title, name, or label. */
          displayName: string | null;
          /** The resource location when Crossref returns one. */
          location: string | null;
          /** The canonical resource URI when Crossref returns one. */
          uri: string | null;
          /** The number of works associated with the resource. */
          workCount: number | null;
          /** The raw Crossref metadata object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List works associated with one Crossref journal, member, funder, DOI prefix, or work type. */
    "crossref.list_scoped_works": {
      input: {
        /** The Crossref resource type to retrieve. */
        scope: "journal" | "member" | "funder" | "prefix" | "type";
        /**
         * The scope identifier, such as an ISSN, member ID, funder ID, DOI prefix, or work type ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /**
         * A full-text query across the metadata fields supported by the selected endpoint.
         * @minLength 1
         */
        query?: string;
        /**
         * A bibliographic query across titles, authors, ISSNs, and publication years.
         * @minLength 1
         */
        queryBibliographic?: string;
        /**
         * A query limited to work titles.
         * @minLength 1
         */
        queryTitle?: string;
        /**
         * A query limited to contributor names.
         * @minLength 1
         */
        queryAuthor?: string;
        /**
         * A query limited to journal or container titles.
         * @minLength 1
         */
        queryContainerTitle?: string;
        /**
         * A Crossref filter expression, such as from-pub-date:2024-01-01,type:journal-article.
         * @minLength 1
         */
        filter?: string;
        /** The field used to sort Crossref works. */
        sort?: "created" | "deposited" | "indexed" | "is-referenced-by-count" | "issued" | "published" | "published-online" | "published-print" | "references-count" | "relevance" | "score" | "updated";
        /** The result sort direction. */
        order?: "asc" | "desc";
        /**
         * A Crossref facet expression, such as type-name:* or published:10.
         * @minLength 1
         */
        facet?: string;
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
        /**
         * The number of results to return. Use 0 for counts only.
         * @minimum 0
         * @maximum 100
         */
        rows?: number;
        /**
         * The zero-based result offset. Crossref recommends cursor pagination for deep result sets.
         * @minimum 0
         * @maximum 10000
         */
        offset?: number;
      } | {
        /** The Crossref resource type to retrieve. */
        scope: "journal" | "member" | "funder" | "prefix" | "type";
        /**
         * The scope identifier, such as an ISSN, member ID, funder ID, DOI prefix, or work type ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /**
         * A full-text query across the metadata fields supported by the selected endpoint.
         * @minLength 1
         */
        query?: string;
        /**
         * A bibliographic query across titles, authors, ISSNs, and publication years.
         * @minLength 1
         */
        queryBibliographic?: string;
        /**
         * A query limited to work titles.
         * @minLength 1
         */
        queryTitle?: string;
        /**
         * A query limited to contributor names.
         * @minLength 1
         */
        queryAuthor?: string;
        /**
         * A query limited to journal or container titles.
         * @minLength 1
         */
        queryContainerTitle?: string;
        /**
         * A Crossref filter expression, such as from-pub-date:2024-01-01,type:journal-article.
         * @minLength 1
         */
        filter?: string;
        /** The field used to sort Crossref works. */
        sort?: "created" | "deposited" | "indexed" | "is-referenced-by-count" | "issued" | "published" | "published-online" | "published-print" | "references-count" | "relevance" | "score" | "updated";
        /** The result sort direction. */
        order?: "asc" | "desc";
        /**
         * A Crossref facet expression, such as type-name:* or published:10.
         * @minLength 1
         */
        facet?: string;
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
        /**
         * Use * for the first cursor page, then reuse nextCursor with the exact same action and query. The wrapped Crossref cursor expires after five minutes of inactivity.
         * @minLength 1
         * @maxLength 12000
         */
        cursor: string;
        /**
         * The number of results to return in this cursor page.
         * @minimum 1
         * @maximum 100
         */
        rows?: number;
      } | {
        /** The Crossref resource type to retrieve. */
        scope: "journal" | "member" | "funder" | "prefix" | "type";
        /**
         * The scope identifier, such as an ISSN, member ID, funder ID, DOI prefix, or work type ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /**
         * A full-text query across the metadata fields supported by the selected endpoint.
         * @minLength 1
         */
        query?: string;
        /**
         * A bibliographic query across titles, authors, ISSNs, and publication years.
         * @minLength 1
         */
        queryBibliographic?: string;
        /**
         * A query limited to work titles.
         * @minLength 1
         */
        queryTitle?: string;
        /**
         * A query limited to contributor names.
         * @minLength 1
         */
        queryAuthor?: string;
        /**
         * A query limited to journal or container titles.
         * @minLength 1
         */
        queryContainerTitle?: string;
        /**
         * A Crossref filter expression, such as from-pub-date:2024-01-01,type:journal-article.
         * @minLength 1
         */
        filter?: string;
        /** The field used to sort Crossref works. */
        sort?: "created" | "deposited" | "indexed" | "is-referenced-by-count" | "issued" | "published" | "published-online" | "published-print" | "references-count" | "relevance" | "score" | "updated";
        /** The result sort direction. */
        order?: "asc" | "desc";
        /**
         * A Crossref facet expression, such as type-name:* or published:10.
         * @minLength 1
         */
        facet?: string;
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
        /**
         * The number of randomly sampled works to request.
         * @minimum 1
         * @maximum 100
         */
        sample: number;
      };
      output: {
        /** Normalized pagination metadata from a Crossref list response. */
        meta: {
          /** The total number of matching records. */
          totalResults: number | null;
          /** The actual number of records returned in this response page. */
          returnedCount: number;
          /** The next connector cursor for cursor-mode requests. It wraps an upstream Crossref cursor that expires after five minutes of inactivity. Its presence does not guarantee another record; stop when returnedCount is smaller than the requested rows. */
          nextCursor: string | null;
        };
        /** The normalized Crossref works. */
        works: Array<{
          /** The DOI of the work. */
          doi: string | null;
          /** The primary work title. */
          title: string | null;
          /** The primary work subtitle. */
          subtitle: string | null;
          /** The Crossref work type. */
          type: string | null;
          /** The work publisher. */
          publisher: string | null;
          /** The primary journal, book, or container title. */
          containerTitle: string | null;
          /** The normalized publication date at the available precision. */
          publishedAt: string | null;
          /** The canonical URL returned by Crossref. */
          url: string | null;
          /** The abstract deposited with Crossref when available. */
          abstract: string | null;
          /** The normalized work contributors. */
          authors: Array<{
            /** The contributor given name. */
            given: string | null;
            /** The contributor family name. */
            family: string | null;
            /** The contributor literal or organization name. */
            name: string | null;
            /** The contributor ORCID URL or identifier. */
            orcid: string | null;
            /** The contributor sequence value returned by Crossref. */
            sequence: string | null;
          }>;
          /** The number of references deposited for the work. */
          referenceCount: number | null;
          /** The number of Crossref citations to the work. */
          citedByCount: number | null;
          /** The relevance score returned for a search result. */
          score: number | null;
          /** The raw Crossref metadata object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Crossref metadata object. */
        facets: Record<string, unknown>;
      };
    };
    /** Search, filter, sort, sample, facet, or page through works registered with Crossref. */
    "crossref.list_works": {
      input: {
        /**
         * A full-text query across the metadata fields supported by the selected endpoint.
         * @minLength 1
         */
        query?: string;
        /**
         * A bibliographic query across titles, authors, ISSNs, and publication years.
         * @minLength 1
         */
        queryBibliographic?: string;
        /**
         * A query limited to work titles.
         * @minLength 1
         */
        queryTitle?: string;
        /**
         * A query limited to contributor names.
         * @minLength 1
         */
        queryAuthor?: string;
        /**
         * A query limited to journal or container titles.
         * @minLength 1
         */
        queryContainerTitle?: string;
        /**
         * A Crossref filter expression, such as from-pub-date:2024-01-01,type:journal-article.
         * @minLength 1
         */
        filter?: string;
        /** The field used to sort Crossref works. */
        sort?: "created" | "deposited" | "indexed" | "is-referenced-by-count" | "issued" | "published" | "published-online" | "published-print" | "references-count" | "relevance" | "score" | "updated";
        /** The result sort direction. */
        order?: "asc" | "desc";
        /**
         * A Crossref facet expression, such as type-name:* or published:10.
         * @minLength 1
         */
        facet?: string;
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
        /**
         * The number of results to return. Use 0 for counts only.
         * @minimum 0
         * @maximum 100
         */
        rows?: number;
        /**
         * The zero-based result offset. Crossref recommends cursor pagination for deep result sets.
         * @minimum 0
         * @maximum 10000
         */
        offset?: number;
      } | {
        /**
         * A full-text query across the metadata fields supported by the selected endpoint.
         * @minLength 1
         */
        query?: string;
        /**
         * A bibliographic query across titles, authors, ISSNs, and publication years.
         * @minLength 1
         */
        queryBibliographic?: string;
        /**
         * A query limited to work titles.
         * @minLength 1
         */
        queryTitle?: string;
        /**
         * A query limited to contributor names.
         * @minLength 1
         */
        queryAuthor?: string;
        /**
         * A query limited to journal or container titles.
         * @minLength 1
         */
        queryContainerTitle?: string;
        /**
         * A Crossref filter expression, such as from-pub-date:2024-01-01,type:journal-article.
         * @minLength 1
         */
        filter?: string;
        /** The field used to sort Crossref works. */
        sort?: "created" | "deposited" | "indexed" | "is-referenced-by-count" | "issued" | "published" | "published-online" | "published-print" | "references-count" | "relevance" | "score" | "updated";
        /** The result sort direction. */
        order?: "asc" | "desc";
        /**
         * A Crossref facet expression, such as type-name:* or published:10.
         * @minLength 1
         */
        facet?: string;
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
        /**
         * Use * for the first cursor page, then reuse nextCursor with the exact same action and query. The wrapped Crossref cursor expires after five minutes of inactivity.
         * @minLength 1
         * @maxLength 12000
         */
        cursor: string;
        /**
         * The number of results to return in this cursor page.
         * @minimum 1
         * @maximum 100
         */
        rows?: number;
      } | {
        /**
         * A full-text query across the metadata fields supported by the selected endpoint.
         * @minLength 1
         */
        query?: string;
        /**
         * A bibliographic query across titles, authors, ISSNs, and publication years.
         * @minLength 1
         */
        queryBibliographic?: string;
        /**
         * A query limited to work titles.
         * @minLength 1
         */
        queryTitle?: string;
        /**
         * A query limited to contributor names.
         * @minLength 1
         */
        queryAuthor?: string;
        /**
         * A query limited to journal or container titles.
         * @minLength 1
         */
        queryContainerTitle?: string;
        /**
         * A Crossref filter expression, such as from-pub-date:2024-01-01,type:journal-article.
         * @minLength 1
         */
        filter?: string;
        /** The field used to sort Crossref works. */
        sort?: "created" | "deposited" | "indexed" | "is-referenced-by-count" | "issued" | "published" | "published-online" | "published-print" | "references-count" | "relevance" | "score" | "updated";
        /** The result sort direction. */
        order?: "asc" | "desc";
        /**
         * A Crossref facet expression, such as type-name:* or published:10.
         * @minLength 1
         */
        facet?: string;
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
        /**
         * The number of randomly sampled works to request.
         * @minimum 1
         * @maximum 100
         */
        sample: number;
      };
      output: {
        /** Normalized pagination metadata from a Crossref list response. */
        meta: {
          /** The total number of matching records. */
          totalResults: number | null;
          /** The actual number of records returned in this response page. */
          returnedCount: number;
          /** The next connector cursor for cursor-mode requests. It wraps an upstream Crossref cursor that expires after five minutes of inactivity. Its presence does not guarantee another record; stop when returnedCount is smaller than the requested rows. */
          nextCursor: string | null;
        };
        /** The normalized Crossref works. */
        works: Array<{
          /** The DOI of the work. */
          doi: string | null;
          /** The primary work title. */
          title: string | null;
          /** The primary work subtitle. */
          subtitle: string | null;
          /** The Crossref work type. */
          type: string | null;
          /** The work publisher. */
          publisher: string | null;
          /** The primary journal, book, or container title. */
          containerTitle: string | null;
          /** The normalized publication date at the available precision. */
          publishedAt: string | null;
          /** The canonical URL returned by Crossref. */
          url: string | null;
          /** The abstract deposited with Crossref when available. */
          abstract: string | null;
          /** The normalized work contributors. */
          authors: Array<{
            /** The contributor given name. */
            given: string | null;
            /** The contributor family name. */
            family: string | null;
            /** The contributor literal or organization name. */
            name: string | null;
            /** The contributor ORCID URL or identifier. */
            orcid: string | null;
            /** The contributor sequence value returned by Crossref. */
            sequence: string | null;
          }>;
          /** The number of references deposited for the work. */
          referenceCount: number | null;
          /** The number of Crossref citations to the work. */
          citedByCount: number | null;
          /** The relevance score returned for a search result. */
          score: number | null;
          /** The raw Crossref metadata object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Crossref metadata object. */
        facets: Record<string, unknown>;
      };
    };
    /** Find the most relevant Crossref work candidates for a formatted bibliographic reference. */
    "crossref.match_reference": {
      input: {
        /**
         * A complete bibliographic reference containing details such as title, author, year, and venue.
         * @minLength 1
         * @pattern \S
         */
        reference: string;
        /**
         * The maximum number of ranked candidate works to return.
         * @minimum 1
         * @maximum 20
         * @default 5
         */
        rows?: number;
        /**
         * An email address that identifies the caller to Crossref and enables the polite API pool.
         * @format email
         */
        mailto?: string;
      };
      output: {
        /** Normalized pagination metadata from a Crossref list response. */
        meta: {
          /** The total number of matching records. */
          totalResults: number | null;
          /** The actual number of records returned in this response page. */
          returnedCount: number;
          /** The next connector cursor for cursor-mode requests. It wraps an upstream Crossref cursor that expires after five minutes of inactivity. Its presence does not guarantee another record; stop when returnedCount is smaller than the requested rows. */
          nextCursor: string | null;
        };
        /** The normalized Crossref works. */
        works: Array<{
          /** The DOI of the work. */
          doi: string | null;
          /** The primary work title. */
          title: string | null;
          /** The primary work subtitle. */
          subtitle: string | null;
          /** The Crossref work type. */
          type: string | null;
          /** The work publisher. */
          publisher: string | null;
          /** The primary journal, book, or container title. */
          containerTitle: string | null;
          /** The normalized publication date at the available precision. */
          publishedAt: string | null;
          /** The canonical URL returned by Crossref. */
          url: string | null;
          /** The abstract deposited with Crossref when available. */
          abstract: string | null;
          /** The normalized work contributors. */
          authors: Array<{
            /** The contributor given name. */
            given: string | null;
            /** The contributor family name. */
            family: string | null;
            /** The contributor literal or organization name. */
            name: string | null;
            /** The contributor ORCID URL or identifier. */
            orcid: string | null;
            /** The contributor sequence value returned by Crossref. */
            sequence: string | null;
          }>;
          /** The number of references deposited for the work. */
          referenceCount: number | null;
          /** The number of Crossref citations to the work. */
          citedByCount: number | null;
          /** The relevance score returned for a search result. */
          score: number | null;
          /** The raw Crossref metadata object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Crossref metadata object. */
        facets: Record<string, unknown>;
      };
    };
  }
}
