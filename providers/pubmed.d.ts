import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Convert PMID, PMCID, DOI, or author manuscript identifiers with the PMC ID Converter. Complete mappings are available only for articles represented in PubMed Central. */
    "pubmed.convert_article_ids": {
      input: {
        /**
         * The article identifiers to convert. Every identifier must have the same idType.
         * @minItems 1
         * @maxItems 200
         */
        ids: Array<string>;
        /** The type shared by every input article identifier. */
        idType: "pmid" | "pmcid" | "doi" | "mid";
      };
      output: {
        /** One conversion result for each identifier returned by PMC. */
        records: Array<{
          /** The original identifier from the request. */
          requestedId: string;
          /** The PubMed identifier when the article has one. */
          pmid: string | null;
          /** The PubMed Central identifier when the article is represented in PMC. */
          pmcid: string | null;
          /** The DOI when PMC reports one. */
          doi: string | null;
          /** The author manuscript identifier when PMC reports one. */
          mid: string | null;
          /** The PMC ID Converter error when the requested identifier could not be resolved. */
          error: string | null;
        }>;
      };
    };
    /** Find normalized PubMed articles related to one source PMID. */
    "pubmed.find_related_articles": {
      input: {
        /**
         * The numeric PubMed identifier (PMID).
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        pmid: string;
        /**
         * The maximum number of articles to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
      };
      output: {
        /**
         * The numeric PubMed identifier (PMID).
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        sourcePmid: string;
        /** The normalized related PubMed articles. */
        articles: Array<{
          /**
           * The numeric PubMed identifier (PMID).
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          pmid: string;
          /** The article title. */
          title: string;
          /** The structured or unstructured abstract sections. */
          abstract: Array<{
            /** The structured abstract section label when present. */
            label: string | null;
            /** The normalized abstract section text. */
            text: string;
          }>;
          /** The article authors. */
          authors: Array<{
            /** The author or collective author name. */
            name: string;
            /** The author's ORCID when present. */
            orcid: string | null;
            /** The author's affiliations. */
            affiliations: Array<string>;
          }>;
          /** The journal information attached to a PubMed record. */
          journal: {
            /** The full journal title. */
            title: string | null;
            /** The NLM journal abbreviation. */
            abbreviation: string | null;
            /** The journal ISSN returned by PubMed. */
            issn: string | null;
            /** The journal volume. */
            volume: string | null;
            /** The journal issue. */
            issue: string | null;
          };
          /** The publication date or source Medline date. */
          publicationDate: string | null;
          /** The PubMed publication types. */
          publicationTypes: Array<string>;
          /** The assigned Medical Subject Headings. */
          meshTerms: Array<string>;
          /** The keywords attached to the PubMed record. */
          keywords: Array<string>;
          /** The article language codes returned by PubMed. */
          languages: Array<string>;
          /** The article DOI when present. */
          doi: string | null;
          /** The PubMed Central identifier when present. */
          pmcid: string | null;
          /**
           * The canonical PubMed record URL.
           * @format uri
           */
          pubmedUrl: string;
          /**
           * The PubMed Central article URL when available.
           * @format uri
           */
          pmcUrl: string | null;
        }>;
      };
    };
    /** Get one normalized PubMed article by PMID. */
    "pubmed.get_article": {
      input: {
        /**
         * The numeric PubMed identifier (PMID).
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        pmid: string;
      };
      output: {
        /** Whether PubMed returned the requested record. */
        found: boolean;
        /** A normalized PubMed article record. */
        article: {
          /**
           * The numeric PubMed identifier (PMID).
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          pmid: string;
          /** The article title. */
          title: string;
          /** The structured or unstructured abstract sections. */
          abstract: Array<{
            /** The structured abstract section label when present. */
            label: string | null;
            /** The normalized abstract section text. */
            text: string;
          }>;
          /** The article authors. */
          authors: Array<{
            /** The author or collective author name. */
            name: string;
            /** The author's ORCID when present. */
            orcid: string | null;
            /** The author's affiliations. */
            affiliations: Array<string>;
          }>;
          /** The journal information attached to a PubMed record. */
          journal: {
            /** The full journal title. */
            title: string | null;
            /** The NLM journal abbreviation. */
            abbreviation: string | null;
            /** The journal ISSN returned by PubMed. */
            issn: string | null;
            /** The journal volume. */
            volume: string | null;
            /** The journal issue. */
            issue: string | null;
          };
          /** The publication date or source Medline date. */
          publicationDate: string | null;
          /** The PubMed publication types. */
          publicationTypes: Array<string>;
          /** The assigned Medical Subject Headings. */
          meshTerms: Array<string>;
          /** The keywords attached to the PubMed record. */
          keywords: Array<string>;
          /** The article language codes returned by PubMed. */
          languages: Array<string>;
          /** The article DOI when present. */
          doi: string | null;
          /** The PubMed Central identifier when present. */
          pmcid: string | null;
          /**
           * The canonical PubMed record URL.
           * @format uri
           */
          pubmedUrl: string;
          /**
           * The PubMed Central article URL when available.
           * @format uri
           */
          pmcUrl: string | null;
        } | null;
      };
    };
    /** Get normalized PubMed references for one source PMID. References are available only when supplied by publishers or recoverable from PMC data. */
    "pubmed.get_article_references": {
      input: {
        /**
         * The numeric PubMed identifier (PMID).
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        pmid: string;
        /**
         * The maximum number of articles to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
      };
      output: {
        /**
         * The numeric PubMed identifier (PMID).
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        sourcePmid: string;
        /** The normalized PubMed articles referenced by the source record. */
        articles: Array<{
          /**
           * The numeric PubMed identifier (PMID).
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          pmid: string;
          /** The article title. */
          title: string;
          /** The structured or unstructured abstract sections. */
          abstract: Array<{
            /** The structured abstract section label when present. */
            label: string | null;
            /** The normalized abstract section text. */
            text: string;
          }>;
          /** The article authors. */
          authors: Array<{
            /** The author or collective author name. */
            name: string;
            /** The author's ORCID when present. */
            orcid: string | null;
            /** The author's affiliations. */
            affiliations: Array<string>;
          }>;
          /** The journal information attached to a PubMed record. */
          journal: {
            /** The full journal title. */
            title: string | null;
            /** The NLM journal abbreviation. */
            abbreviation: string | null;
            /** The journal ISSN returned by PubMed. */
            issn: string | null;
            /** The journal volume. */
            volume: string | null;
            /** The journal issue. */
            issue: string | null;
          };
          /** The publication date or source Medline date. */
          publicationDate: string | null;
          /** The PubMed publication types. */
          publicationTypes: Array<string>;
          /** The assigned Medical Subject Headings. */
          meshTerms: Array<string>;
          /** The keywords attached to the PubMed record. */
          keywords: Array<string>;
          /** The article language codes returned by PubMed. */
          languages: Array<string>;
          /** The article DOI when present. */
          doi: string | null;
          /** The PubMed Central identifier when present. */
          pmcid: string | null;
          /**
           * The canonical PubMed record URL.
           * @format uri
           */
          pubmedUrl: string;
          /**
           * The PubMed Central article URL when available.
           * @format uri
           */
          pmcUrl: string | null;
        }>;
      };
    };
    /** Get multiple normalized PubMed articles by PMID in one request. */
    "pubmed.get_articles": {
      input: {
        /**
         * The PubMed identifiers to retrieve.
         * @minItems 1
         * @maxItems 50
         */
        pmids: Array<string>;
      };
      output: {
        /** The PubMed records that were found. */
        articles: Array<{
          /**
           * The numeric PubMed identifier (PMID).
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          pmid: string;
          /** The article title. */
          title: string;
          /** The structured or unstructured abstract sections. */
          abstract: Array<{
            /** The structured abstract section label when present. */
            label: string | null;
            /** The normalized abstract section text. */
            text: string;
          }>;
          /** The article authors. */
          authors: Array<{
            /** The author or collective author name. */
            name: string;
            /** The author's ORCID when present. */
            orcid: string | null;
            /** The author's affiliations. */
            affiliations: Array<string>;
          }>;
          /** The journal information attached to a PubMed record. */
          journal: {
            /** The full journal title. */
            title: string | null;
            /** The NLM journal abbreviation. */
            abbreviation: string | null;
            /** The journal ISSN returned by PubMed. */
            issn: string | null;
            /** The journal volume. */
            volume: string | null;
            /** The journal issue. */
            issue: string | null;
          };
          /** The publication date or source Medline date. */
          publicationDate: string | null;
          /** The PubMed publication types. */
          publicationTypes: Array<string>;
          /** The assigned Medical Subject Headings. */
          meshTerms: Array<string>;
          /** The keywords attached to the PubMed record. */
          keywords: Array<string>;
          /** The article language codes returned by PubMed. */
          languages: Array<string>;
          /** The article DOI when present. */
          doi: string | null;
          /** The PubMed Central identifier when present. */
          pmcid: string | null;
          /**
           * The canonical PubMed record URL.
           * @format uri
           */
          pubmedUrl: string;
          /**
           * The PubMed Central article URL when available.
           * @format uri
           */
          pmcUrl: string | null;
        }>;
        /** The requested PMIDs that PubMed did not return. */
        notFoundPmids: Array<string>;
      };
    };
    /** Get normalized PubMed articles known to cite one source PMID. PubMed citation coverage depends on data supplied by publishers and NCBI sources and may be incomplete. */
    "pubmed.get_citing_articles": {
      input: {
        /**
         * The numeric PubMed identifier (PMID).
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        pmid: string;
        /**
         * The maximum number of articles to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
      };
      output: {
        /**
         * The numeric PubMed identifier (PMID).
         * @minLength 1
         * @pattern ^[0-9]+$
         */
        sourcePmid: string;
        /** The normalized articles known to cite the source record. */
        articles: Array<{
          /**
           * The numeric PubMed identifier (PMID).
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          pmid: string;
          /** The article title. */
          title: string;
          /** The structured or unstructured abstract sections. */
          abstract: Array<{
            /** The structured abstract section label when present. */
            label: string | null;
            /** The normalized abstract section text. */
            text: string;
          }>;
          /** The article authors. */
          authors: Array<{
            /** The author or collective author name. */
            name: string;
            /** The author's ORCID when present. */
            orcid: string | null;
            /** The author's affiliations. */
            affiliations: Array<string>;
          }>;
          /** The journal information attached to a PubMed record. */
          journal: {
            /** The full journal title. */
            title: string | null;
            /** The NLM journal abbreviation. */
            abbreviation: string | null;
            /** The journal ISSN returned by PubMed. */
            issn: string | null;
            /** The journal volume. */
            volume: string | null;
            /** The journal issue. */
            issue: string | null;
          };
          /** The publication date or source Medline date. */
          publicationDate: string | null;
          /** The PubMed publication types. */
          publicationTypes: Array<string>;
          /** The assigned Medical Subject Headings. */
          meshTerms: Array<string>;
          /** The keywords attached to the PubMed record. */
          keywords: Array<string>;
          /** The article language codes returned by PubMed. */
          languages: Array<string>;
          /** The article DOI when present. */
          doi: string | null;
          /** The PubMed Central identifier when present. */
          pmcid: string | null;
          /**
           * The canonical PubMed record URL.
           * @format uri
           */
          pubmedUrl: string;
          /**
           * The PubMed Central article URL when available.
           * @format uri
           */
          pmcUrl: string | null;
        }>;
      };
    };
    /** Match one raw biomedical citation to PubMed and return normalized candidate articles. */
    "pubmed.match_citation": {
      input: {
        /**
         * The citation text to match, such as an article title followed by its journal, year, volume, and pages.
         * @minLength 1
         */
        citation: string;
      };
      output: {
        /** Whether PubMed returned at least one candidate article. */
        matched: boolean;
        /** The normalized candidate articles returned by PubMed. */
        articles: Array<{
          /**
           * The numeric PubMed identifier (PMID).
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          pmid: string;
          /** The article title. */
          title: string;
          /** The structured or unstructured abstract sections. */
          abstract: Array<{
            /** The structured abstract section label when present. */
            label: string | null;
            /** The normalized abstract section text. */
            text: string;
          }>;
          /** The article authors. */
          authors: Array<{
            /** The author or collective author name. */
            name: string;
            /** The author's ORCID when present. */
            orcid: string | null;
            /** The author's affiliations. */
            affiliations: Array<string>;
          }>;
          /** The journal information attached to a PubMed record. */
          journal: {
            /** The full journal title. */
            title: string | null;
            /** The NLM journal abbreviation. */
            abbreviation: string | null;
            /** The journal ISSN returned by PubMed. */
            issn: string | null;
            /** The journal volume. */
            volume: string | null;
            /** The journal issue. */
            issue: string | null;
          };
          /** The publication date or source Medline date. */
          publicationDate: string | null;
          /** The PubMed publication types. */
          publicationTypes: Array<string>;
          /** The assigned Medical Subject Headings. */
          meshTerms: Array<string>;
          /** The keywords attached to the PubMed record. */
          keywords: Array<string>;
          /** The article language codes returned by PubMed. */
          languages: Array<string>;
          /** The article DOI when present. */
          doi: string | null;
          /** The PubMed Central identifier when present. */
          pmcid: string | null;
          /**
           * The canonical PubMed record URL.
           * @format uri
           */
          pubmedUrl: string;
          /**
           * The PubMed Central article URL when available.
           * @format uri
           */
          pmcUrl: string | null;
        }>;
      };
    };
    /** Search PubMed with the official query syntax and return normalized article records. */
    "pubmed.search_articles": {
      input: {
        /**
         * The PubMed query, including optional official field tags and Boolean operators such as cancer[Title] AND 2025[pdat].
         * @minLength 1
         */
        query: string;
        /**
         * The zero-based search result offset.
         * @minimum 0
         * @maximum 9999
         */
        offset?: number;
        /**
         * The maximum number of articles to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /** The PubMed result sort order. */
        sort?: "relevance" | "publication_date" | "first_author" | "journal";
        /** An inclusive PubMed publication date range. */
        publicationDateRange?: {
          /**
           * The earliest publication date to include.
           * @format date
           */
          from: string;
          /**
           * The latest publication date to include.
           * @format date
           */
          to: string;
        };
      };
      output: {
        /**
         * The total number of matching PubMed records.
         * @minimum 0
         */
        total: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset: number;
        /**
         * The requested page size.
         * @exclusiveMinimum 0
         */
        limit: number;
        /** The query translation reported by PubMed. */
        queryTranslation: string | null;
        /** The normalized articles in this page. */
        articles: Array<{
          /**
           * The numeric PubMed identifier (PMID).
           * @minLength 1
           * @pattern ^[0-9]+$
           */
          pmid: string;
          /** The article title. */
          title: string;
          /** The structured or unstructured abstract sections. */
          abstract: Array<{
            /** The structured abstract section label when present. */
            label: string | null;
            /** The normalized abstract section text. */
            text: string;
          }>;
          /** The article authors. */
          authors: Array<{
            /** The author or collective author name. */
            name: string;
            /** The author's ORCID when present. */
            orcid: string | null;
            /** The author's affiliations. */
            affiliations: Array<string>;
          }>;
          /** The journal information attached to a PubMed record. */
          journal: {
            /** The full journal title. */
            title: string | null;
            /** The NLM journal abbreviation. */
            abbreviation: string | null;
            /** The journal ISSN returned by PubMed. */
            issn: string | null;
            /** The journal volume. */
            volume: string | null;
            /** The journal issue. */
            issue: string | null;
          };
          /** The publication date or source Medline date. */
          publicationDate: string | null;
          /** The PubMed publication types. */
          publicationTypes: Array<string>;
          /** The assigned Medical Subject Headings. */
          meshTerms: Array<string>;
          /** The keywords attached to the PubMed record. */
          keywords: Array<string>;
          /** The article language codes returned by PubMed. */
          languages: Array<string>;
          /** The article DOI when present. */
          doi: string | null;
          /** The PubMed Central identifier when present. */
          pmcid: string | null;
          /**
           * The canonical PubMed record URL.
           * @format uri
           */
          pubmedUrl: string;
          /**
           * The PubMed Central article URL when available.
           * @format uri
           */
          pmcUrl: string | null;
        }>;
      };
    };
  }
}
