import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check a batch of Europe PMC articles or preprints for publication, version, withdrawal, removal, and retraction updates. */
    "europe_pmc.check_article_status": {
      input: {
        /**
         * The Europe PMC publications or preprints to check.
         * @minItems 1
         */
        ids: Array<{
          /** The Europe PMC source code returned with the publication identifier. */
          source: "AGR" | "CBA" | "CIT" | "CTX" | "ETH" | "HIR" | "MED" | "NBK" | "PAT" | "PMC" | "PPR";
          /**
           * The publication identifier paired with the Europe PMC source code.
           * @minLength 1
           */
          id: string;
        }>;
      };
      output: {
        /** The raw Europe PMC object. */
        metrics: Record<string, unknown>;
        /** The normalized publications with status updates. */
        updates: Array<{
          /** The Europe PMC source code. */
          source: string | null;
          /** The publication identifier within its source. */
          externalId: string | null;
          /** The publication title. */
          title: string | null;
          /** The publication's first publication date. */
          firstPublicationDate: string | null;
          /** The status changes detected by Europe PMC. */
          statusUpdates: Array<string>;
          /** The raw related publication and version links. */
          links: Array<Record<string, unknown>>;
          /** The raw Europe PMC object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw publication status update objects. */
        rawUpdates: Array<Record<string, unknown>>;
      };
    };
    /** Get text-mined entities and relationships for up to eight Europe PMC articles in one request. */
    "europe_pmc.get_annotations_by_articles": {
      input: {
        /**
         * The Europe PMC articles whose annotations should be retrieved.
         * @minItems 1
         * @maxItems 8
         */
        articles: Array<{
          /** The Europe PMC source code returned with the publication identifier. */
          source: "AGR" | "CBA" | "CIT" | "CTX" | "ETH" | "HIR" | "MED" | "NBK" | "PAT" | "PMC" | "PPR";
          /**
           * The publication identifier paired with the Europe PMC source code.
           * @minLength 1
           */
          id: string;
        }>;
        /**
         * Annotation types to include, such as Gene Proteins, Diseases, Chemicals, or Software.
         * @minItems 1
         */
        types?: Array<string>;
        /**
         * Annotation subtypes to include when supported by the provider.
         * @minItems 1
         */
        subtypes?: Array<string>;
        /**
         * Article sections to include, such as Title, Abstract, Methods, Results, or Discussion.
         * @minItems 1
         */
        sections?: Array<string>;
        /**
         * Annotation providers to include, such as Europe PMC or Open Targets.
         * @minItems 1
         */
        providers?: Array<string>;
      };
      output: {
        /** The normalized annotated articles. */
        articles: Array<{
          /** The Europe PMC source code. */
          source: string;
          /** The article identifier within its Europe PMC source. */
          externalId: string;
          /** The PubMed Central identifier when available. */
          pmcid: string | null;
          /** The Europe PMC full-text identifiers attached to this article. */
          fullTextIds: Array<string>;
          /** The text-mined annotations in this article. */
          annotations: Array<{
            /** The annotation identifier when supplied. */
            id: string | null;
            /** The annotation type. */
            type: string | null;
            /** The annotation subtype for Resources or Accession Numbers when available. */
            subtype: string | null;
            /** The annotation provider. */
            provider: string | null;
            /** The article section containing the annotation. */
            section: string | null;
            /** The supplementary file name for Supplementary material annotations when available. */
            fileName: string | null;
            /** The annotation frequency reported by Europe PMC. */
            frequency: number | null;
            /** The text immediately before the annotated span. */
            prefix: string | null;
            /** The exact annotated text span. */
            exact: string | null;
            /** The text immediately after the annotated span. */
            postfix: string | null;
            /** The semantic tags attached to this annotation. */
            tags: Array<{
              /** The normalized entity or relationship name. */
              name: string | null;
              /** The linked ontology or database URI when available. */
              uri: string | null;
            }>;
            /** The raw Europe PMC object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Europe PMC object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw annotated article objects. */
        rawArticles: Array<Record<string, unknown>>;
      };
    };
    /** Get publications that cite one Europe PMC publication. */
    "europe_pmc.get_citations": {
      input: {
        /** The Europe PMC source code for a publication with citation or data links. */
        source: "AGR" | "CBA" | "CTX" | "ETH" | "HIR" | "MED" | "PAT" | "PMC" | "PPR";
        /**
         * The publication identifier paired with the Europe PMC source code.
         * @minLength 1
         */
        id: string;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return, up to 1000.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
      };
      output: {
        /** The Europe PMC REST API version. */
        version: string | null;
        /**
         * The total number of linked publications.
         * @minimum 0
         */
        hitCount: number;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page: number;
        /**
         * The number of records to return, up to 1000.
         * @minimum 1
         * @maximum 1000
         */
        pageSize: number;
        /** The normalized linked publications in this page. */
        citations: Array<{
          /** The linked publication identifier when matched by Europe PMC. */
          id: string | null;
          /** The linked publication source code when matched by Europe PMC. */
          source: string | null;
          /** The linked record citation or publication type. */
          citationType: string | null;
          /** The linked publication title. */
          title: string | null;
          /** The formatted author list for the linked publication. */
          authorString: string | null;
          /** The abbreviated journal title when available. */
          journalAbbreviation: string | null;
          /** The linked publication year when available. */
          publicationYear: number | null;
          /** The journal volume when available. */
          volume: string | null;
          /** The journal issue when available. */
          issue: string | null;
          /** The journal page information when available. */
          pageInfo: string | null;
          /** The Europe PMC citation count when supplied. */
          citedByCount: number | null;
          /** The one-based order in the source reference list when supplied. */
          citedOrder: number | null;
          /** Whether Europe PMC matched this reference to an indexed record. */
          matched: boolean | null;
          /** The raw Europe PMC object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Europe PMC object. */
        request: Record<string, unknown>;
        /** The raw linked publication objects. */
        rawResults: Array<Record<string, unknown>>;
      };
    };
    /** Get consolidated data, text-mined, and external links associated with one Europe PMC publication. */
    "europe_pmc.get_data_links": {
      input: {
        /** The Europe PMC source code for a publication with citation or data links. */
        source: "AGR" | "CBA" | "CTX" | "ETH" | "HIR" | "MED" | "PAT" | "PMC" | "PPR";
        /**
         * The publication identifier paired with the Europe PMC source code.
         * @minLength 1
         */
        id: string;
        /**
         * The official Europe PMC link category, such as Clinical Trials or Data Citations.
         * @minLength 1
         */
        category?: string;
        /** How Europe PMC obtained the links. */
        obtainedBy?: "tm_accession" | "tm_term" | "ext_links" | "submission";
        /**
         * The earliest link update date in Europe PMC DD-MM-YYYY format.
         * @minLength 1
         */
        fromDate?: string;
        /**
         * Europe PMC link tags used to filter the response.
         * @minItems 1
         */
        tags?: Array<"related_data" | "supporting_data" | "plain_english" | "fulltext" | "other">;
        /**
         * The maximum number of links returned in each result section.
         * @exclusiveMinimum 0
         */
        sectionLimit?: number;
      };
      output: {
        /** The Europe PMC REST API version. */
        version: string | null;
        /**
         * The number of matching link groups reported by Europe PMC.
         * @minimum 0
         */
        hitCount: number;
        /** The raw Europe PMC data-link categories. */
        categories: Array<Record<string, unknown>>;
        /** The raw Europe PMC object. */
        request: Record<string, unknown>;
        /** The raw Europe PMC object. */
        raw: Record<string, unknown>;
      };
    };
    /** Get linked peer reviews and evaluations for one Europe PMC publication version. */
    "europe_pmc.get_evaluations": {
      input: {
        /** The Europe PMC source code for a publication with citation or data links. */
        source: "AGR" | "CBA" | "CTX" | "ETH" | "HIR" | "MED" | "PAT" | "PMC" | "PPR";
        /**
         * The publication identifier paired with the Europe PMC source code.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Europe PMC REST API version. */
        version: string | null;
        /** The normalized evaluations. */
        evaluations: Array<{
          /** The Europe PMC evaluation identifier. */
          id: number | null;
          /** The evaluation title. */
          title: string | null;
          /** The evaluation DOI when available. */
          doi: string | null;
          /** The evaluation URL when available. */
          url: string | null;
          /** The source from which Europe PMC obtained the evaluation. */
          dataOrigin: string | null;
          /** The review or evaluation platform. */
          platform: string | null;
          /** The evaluation type, such as referee-report. */
          type: string | null;
          /** The evaluation date reported by Europe PMC. */
          evaluationDate: string | null;
          /** The date Europe PMC last updated the evaluation. */
          dateUpdated: string | null;
          /** The raw evaluator records attached to the evaluation. */
          evaluators: Array<Record<string, unknown>>;
          /** The raw Europe PMC object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Europe PMC evaluation objects. */
        rawEvaluations: Array<Record<string, unknown>>;
      };
    };
    /** Get JATS XML full text for a PubMed Central article in the Europe PMC open-access subset. */
    "europe_pmc.get_full_text_xml": {
      input: {
        /**
         * The PubMed Central identifier, including the PMC prefix.
         * @minLength 1
         * @pattern ^PMC[0-9]+$
         */
        pmcid: string;
      };
      output: {
        /** The requested PubMed Central identifier. */
        pmcid: string;
        /** The response content type reported by Europe PMC. */
        contentType: string | null;
        /**
         * The number of characters in the returned XML.
         * @minimum 0
         */
        contentLength: number;
        /** The complete JATS XML document. */
        xml: string;
      };
    };
    /** Get one Europe PMC publication by its source code and identifier. */
    "europe_pmc.get_publication": {
      input: {
        /** The Europe PMC source code returned with the publication identifier. */
        source: "AGR" | "CBA" | "CIT" | "CTX" | "ETH" | "HIR" | "MED" | "NBK" | "PAT" | "PMC" | "PPR";
        /**
         * The publication identifier paired with the Europe PMC source code.
         * @minLength 1
         */
        id: string;
        /** The amount of publication metadata to return. */
        resultType?: "idlist" | "lite" | "core";
      };
      output: {
        /** Whether Europe PMC returned the requested publication. */
        found: boolean;
        /** The Europe PMC REST API version. */
        version: string | null;
        /** A normalized Europe PMC publication record. */
        publication: {
          /** The publication identifier within its Europe PMC source. */
          id: string;
          /** The Europe PMC source code. */
          source: string;
          /** The PubMed identifier when available. */
          pmid: string | null;
          /** The PubMed Central identifier when available. */
          pmcid: string | null;
          /** The publication DOI when available. */
          doi: string | null;
          /** The publication title. */
          title: string | null;
          /** The formatted publication author list. */
          authorString: string | null;
          /** The full journal title when available. */
          journalTitle: string | null;
          /** The abbreviated journal title when available. */
          journalAbbreviation: string | null;
          /** The publication year when available. */
          publicationYear: number | null;
          /** The earliest publication date reported by Europe PMC. */
          publicationDate: string | null;
          /** The abstract returned by Europe PMC, which may contain structural HTML tags. */
          abstractText: string | null;
          /** The number of citing publications indexed by Europe PMC. */
          citedByCount: number | null;
          /** Whether Europe PMC marks the publication as open access. */
          isOpenAccess: boolean | null;
          /** Whether the publication has full text in Europe PMC. */
          hasFullText: boolean | null;
          /** Whether Europe PMC has a reference list for the publication. */
          hasReferences: boolean | null;
          /**
           * The canonical Europe PMC publication page URL.
           * @format uri
           */
          europePmcUrl: string;
          /** The raw Europe PMC object. */
          raw: Record<string, unknown>;
        } | null;
        /** The raw Europe PMC object. */
        request: Record<string, unknown>;
      };
    };
    /** Get publications referenced by one Europe PMC publication. */
    "europe_pmc.get_references": {
      input: {
        /** The Europe PMC source code for a publication with citation or data links. */
        source: "AGR" | "CBA" | "CTX" | "ETH" | "HIR" | "MED" | "PAT" | "PMC" | "PPR";
        /**
         * The publication identifier paired with the Europe PMC source code.
         * @minLength 1
         */
        id: string;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return, up to 1000.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
      };
      output: {
        /** The Europe PMC REST API version. */
        version: string | null;
        /**
         * The total number of linked publications.
         * @minimum 0
         */
        hitCount: number;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page: number;
        /**
         * The number of records to return, up to 1000.
         * @minimum 1
         * @maximum 1000
         */
        pageSize: number;
        /** The normalized linked publications in this page. */
        references: Array<{
          /** The linked publication identifier when matched by Europe PMC. */
          id: string | null;
          /** The linked publication source code when matched by Europe PMC. */
          source: string | null;
          /** The linked record citation or publication type. */
          citationType: string | null;
          /** The linked publication title. */
          title: string | null;
          /** The formatted author list for the linked publication. */
          authorString: string | null;
          /** The abbreviated journal title when available. */
          journalAbbreviation: string | null;
          /** The linked publication year when available. */
          publicationYear: number | null;
          /** The journal volume when available. */
          volume: string | null;
          /** The journal issue when available. */
          issue: string | null;
          /** The journal page information when available. */
          pageInfo: string | null;
          /** The Europe PMC citation count when supplied. */
          citedByCount: number | null;
          /** The one-based order in the source reference list when supplied. */
          citedOrder: number | null;
          /** Whether Europe PMC matched this reference to an indexed record. */
          matched: boolean | null;
          /** The raw Europe PMC object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Europe PMC object. */
        request: Record<string, unknown>;
        /** The raw linked publication objects. */
        rawResults: Array<Record<string, unknown>>;
      };
    };
    /** Find Europe PMC articles containing annotations for a named biological entity. */
    "europe_pmc.search_annotations_by_entity": {
      input: {
        /**
         * The entity name to find in Europe PMC annotations.
         * @minLength 1
         */
        entity: string;
        /** Whether each matching article should contain only annotations that match the search filters. */
        onlyMatchingAnnotations?: boolean;
        /** The numeric cursor returned by the previous annotation page. */
        cursorMark?: number;
        /**
         * The number of annotated articles to return, from 1 to 8.
         * @minimum 1
         * @maximum 8
         */
        pageSize?: number;
      };
      output: {
        /** The cursor used for this annotation page. */
        cursorMark: number | null;
        /** The cursor to pass when requesting the next annotation page. */
        nextCursorMark: number | null;
        /** The normalized annotated articles in this page. */
        articles: Array<{
          /** The Europe PMC source code. */
          source: string;
          /** The article identifier within its Europe PMC source. */
          externalId: string;
          /** The PubMed Central identifier when available. */
          pmcid: string | null;
          /** The Europe PMC full-text identifiers attached to this article. */
          fullTextIds: Array<string>;
          /** The text-mined annotations in this article. */
          annotations: Array<{
            /** The annotation identifier when supplied. */
            id: string | null;
            /** The annotation type. */
            type: string | null;
            /** The annotation subtype for Resources or Accession Numbers when available. */
            subtype: string | null;
            /** The annotation provider. */
            provider: string | null;
            /** The article section containing the annotation. */
            section: string | null;
            /** The supplementary file name for Supplementary material annotations when available. */
            fileName: string | null;
            /** The annotation frequency reported by Europe PMC. */
            frequency: number | null;
            /** The text immediately before the annotated span. */
            prefix: string | null;
            /** The exact annotated text span. */
            exact: string | null;
            /** The text immediately after the annotated span. */
            postfix: string | null;
            /** The semantic tags attached to this annotation. */
            tags: Array<{
              /** The normalized entity or relationship name. */
              name: string | null;
              /** The linked ontology or database URI when available. */
              uri: string | null;
            }>;
            /** The raw Europe PMC object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Europe PMC object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw annotated article objects. */
        rawArticles: Array<Record<string, unknown>>;
      };
    };
    /** Find Europe PMC articles containing annotations from a named provider. */
    "europe_pmc.search_annotations_by_provider": {
      input: {
        /**
         * The official Europe PMC annotation provider name.
         * @minLength 1
         */
        provider: string;
        /** Whether each matching article should contain only annotations that match the search filters. */
        onlyMatchingAnnotations?: boolean;
        /** The numeric cursor returned by the previous annotation page. */
        cursorMark?: number;
        /**
         * The number of annotated articles to return, from 1 to 8.
         * @minimum 1
         * @maximum 8
         */
        pageSize?: number;
      };
      output: {
        /** The cursor used for this annotation page. */
        cursorMark: number | null;
        /** The cursor to pass when requesting the next annotation page. */
        nextCursorMark: number | null;
        /** The normalized annotated articles in this page. */
        articles: Array<{
          /** The Europe PMC source code. */
          source: string;
          /** The article identifier within its Europe PMC source. */
          externalId: string;
          /** The PubMed Central identifier when available. */
          pmcid: string | null;
          /** The Europe PMC full-text identifiers attached to this article. */
          fullTextIds: Array<string>;
          /** The text-mined annotations in this article. */
          annotations: Array<{
            /** The annotation identifier when supplied. */
            id: string | null;
            /** The annotation type. */
            type: string | null;
            /** The annotation subtype for Resources or Accession Numbers when available. */
            subtype: string | null;
            /** The annotation provider. */
            provider: string | null;
            /** The article section containing the annotation. */
            section: string | null;
            /** The supplementary file name for Supplementary material annotations when available. */
            fileName: string | null;
            /** The annotation frequency reported by Europe PMC. */
            frequency: number | null;
            /** The text immediately before the annotated span. */
            prefix: string | null;
            /** The exact annotated text span. */
            exact: string | null;
            /** The text immediately after the annotated span. */
            postfix: string | null;
            /** The semantic tags attached to this annotation. */
            tags: Array<{
              /** The normalized entity or relationship name. */
              name: string | null;
              /** The linked ontology or database URI when available. */
              uri: string | null;
            }>;
            /** The raw Europe PMC object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Europe PMC object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw annotated article objects. */
        rawArticles: Array<Record<string, unknown>>;
      };
    };
    /** Find Europe PMC articles containing a text-mined relationship between two named entities. */
    "europe_pmc.search_annotations_by_relationship": {
      input: {
        /**
         * The first entity in the relationship.
         * @minLength 1
         */
        firstEntity: string;
        /**
         * The second entity in the relationship.
         * @minLength 1
         */
        secondEntity: string;
        /** Whether each matching article should contain only annotations that match the search filters. */
        onlyMatchingAnnotations?: boolean;
        /** The numeric cursor returned by the previous annotation page. */
        cursorMark?: number;
        /**
         * The number of annotated articles to return, from 1 to 8.
         * @minimum 1
         * @maximum 8
         */
        pageSize?: number;
      };
      output: {
        /** The cursor used for this annotation page. */
        cursorMark: number | null;
        /** The cursor to pass when requesting the next annotation page. */
        nextCursorMark: number | null;
        /** The normalized annotated articles in this page. */
        articles: Array<{
          /** The Europe PMC source code. */
          source: string;
          /** The article identifier within its Europe PMC source. */
          externalId: string;
          /** The PubMed Central identifier when available. */
          pmcid: string | null;
          /** The Europe PMC full-text identifiers attached to this article. */
          fullTextIds: Array<string>;
          /** The text-mined annotations in this article. */
          annotations: Array<{
            /** The annotation identifier when supplied. */
            id: string | null;
            /** The annotation type. */
            type: string | null;
            /** The annotation subtype for Resources or Accession Numbers when available. */
            subtype: string | null;
            /** The annotation provider. */
            provider: string | null;
            /** The article section containing the annotation. */
            section: string | null;
            /** The supplementary file name for Supplementary material annotations when available. */
            fileName: string | null;
            /** The annotation frequency reported by Europe PMC. */
            frequency: number | null;
            /** The text immediately before the annotated span. */
            prefix: string | null;
            /** The exact annotated text span. */
            exact: string | null;
            /** The text immediately after the annotated span. */
            postfix: string | null;
            /** The semantic tags attached to this annotation. */
            tags: Array<{
              /** The normalized entity or relationship name. */
              name: string | null;
              /** The linked ontology or database URI when available. */
              uri: string | null;
            }>;
            /** The raw Europe PMC object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Europe PMC object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw annotated article objects. */
        rawArticles: Array<Record<string, unknown>>;
      };
    };
    /** Find Europe PMC articles by annotation type, article section, or both in one cursor search. */
    "europe_pmc.search_annotations_by_section_or_type": {
      input: {
        /**
         * The official Europe PMC annotation type.
         * @minLength 1
         */
        type?: string;
        /**
         * The annotation subtype for Resources or Accession Numbers searches.
         * @minLength 1
         */
        subtype?: string;
        /**
         * The official Europe PMC article section.
         * @minLength 1
         */
        section?: string;
        /** Whether each matching article should contain only annotations that match the search filters. */
        onlyMatchingAnnotations?: boolean;
        /** The numeric cursor returned by the previous annotation page. */
        cursorMark?: number;
        /**
         * The number of annotated articles to return, from 1 to 8.
         * @minimum 1
         * @maximum 8
         */
        pageSize?: number;
      };
      output: {
        /** The cursor used for this annotation page. */
        cursorMark: number | null;
        /** The cursor to pass when requesting the next annotation page. */
        nextCursorMark: number | null;
        /** The normalized annotated articles in this page. */
        articles: Array<{
          /** The Europe PMC source code. */
          source: string;
          /** The article identifier within its Europe PMC source. */
          externalId: string;
          /** The PubMed Central identifier when available. */
          pmcid: string | null;
          /** The Europe PMC full-text identifiers attached to this article. */
          fullTextIds: Array<string>;
          /** The text-mined annotations in this article. */
          annotations: Array<{
            /** The annotation identifier when supplied. */
            id: string | null;
            /** The annotation type. */
            type: string | null;
            /** The annotation subtype for Resources or Accession Numbers when available. */
            subtype: string | null;
            /** The annotation provider. */
            provider: string | null;
            /** The article section containing the annotation. */
            section: string | null;
            /** The supplementary file name for Supplementary material annotations when available. */
            fileName: string | null;
            /** The annotation frequency reported by Europe PMC. */
            frequency: number | null;
            /** The text immediately before the annotated span. */
            prefix: string | null;
            /** The exact annotated text span. */
            exact: string | null;
            /** The text immediately after the annotated span. */
            postfix: string | null;
            /** The semantic tags attached to this annotation. */
            tags: Array<{
              /** The normalized entity or relationship name. */
              name: string | null;
              /** The linked ontology or database URI when available. */
              uri: string | null;
            }>;
            /** The raw Europe PMC object. */
            raw: Record<string, unknown>;
          }>;
          /** The raw Europe PMC object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw annotated article objects. */
        rawArticles: Array<Record<string, unknown>>;
      };
    };
    /** Search Europe PMC research grants by funder, investigator, institution, topic, date, or other official GRIST fields. */
    "europe_pmc.search_grants": {
      input: {
        /**
         * The official GRIST query, such as malaria, PI:"Jane Smith", or GRANT_AGENCY:"Wellcome Trust".
         * @minLength 1
         */
        query: string;
        /** The amount of grant metadata to return. */
        resultType?: "lite" | "core";
        /**
         * The one-based grant result page number.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /**
         * The total number of matching grants.
         * @minimum 0
         */
        hitCount: number;
        /** The normalized query echoed by Europe PMC. */
        query: string | null;
        /** The result type echoed by Europe PMC. */
        resultType: string | null;
        /** The one-based result page number. */
        page: number;
        /** The normalized grants in this page. */
        grants: Array<{
          /** The funder's grant identifier. */
          id: string | null;
          /** The grant DOI when available. */
          doi: string | null;
          /** The grant title. */
          title: string | null;
          /** The scientific, lay, or translated abstracts supplied for the grant. */
          abstracts: Array<{
            /** The grant abstract text. */
            text: string;
            /** The abstract language code when supplied. */
            language: string | null;
            /** The abstract type, such as scientific or lay. */
            type: string | null;
          }>;
          /** The funding organization name. */
          funderName: string | null;
          /** The funding organization FundRef DOI URI when available. */
          funderDoi: string | null;
          /** The official grant type. */
          grantType: string | null;
          /** The official categories associated with the grant. */
          categories: Array<string>;
          /** The official funding stream. */
          stream: string | null;
          /** The grant start date. */
          startDate: string | null;
          /** The grant end date. */
          endDate: string | null;
          /** The awarded amount when available. */
          amount: number | null;
          /** The currency of the awarded amount when available. */
          currency: string | null;
          /** The principal investigators associated with the grant. */
          investigators: Array<{
            /** The investigator's given name. */
            givenName: string | null;
            /** The investigator's family name. */
            familyName: string | null;
            /** The investigator's initials. */
            initials: string | null;
            /** The investigator's title. */
            title: string | null;
            /** The investigator's ORCID when available. */
            orcid: string | null;
          }>;
          /** The recipient institutions associated with the grant. */
          institutions: Array<{
            /** The institution name supplied with the grant. */
            name: string | null;
            /** The institution ROR identifier when available. */
            rorId: string | null;
            /** The official ROR organization name when available. */
            rorOfficialName: string | null;
          }>;
          /** The raw Europe PMC object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Europe PMC grant records. */
        rawResults: Array<Record<string, unknown>>;
      };
    };
    /** Search Europe PMC literature and preprints with its official query syntax and cursor pagination. */
    "europe_pmc.search_publications": {
      input: {
        /**
         * The Europe PMC query, including optional fields and Boolean operators such as OPEN_ACCESS:Y AND TITLE:"malaria".
         * @minLength 1
         */
        query: string;
        /** The amount of publication metadata to return. */
        resultType?: "idlist" | "lite" | "core";
        /** Whether to expand search terms with Medical Subject Headings synonyms. */
        synonym?: boolean;
        /**
         * The cursor returned by the previous page, or * for the first cursor page.
         * @minLength 1
         */
        cursorMark?: string;
        /**
         * The number of records to return, up to 1000.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * An official single-valued field and direction, such as CITED desc or P_PDATE_D asc.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The Europe PMC REST API version. */
        version: string | null;
        /**
         * The total number of matching publications.
         * @minimum 0
         */
        hitCount: number;
        /** The cursor to pass when requesting the next page. */
        nextCursorMark: string | null;
        /** The normalized publications in this page. */
        publications: Array<{
          /** The publication identifier within its Europe PMC source. */
          id: string;
          /** The Europe PMC source code. */
          source: string;
          /** The PubMed identifier when available. */
          pmid: string | null;
          /** The PubMed Central identifier when available. */
          pmcid: string | null;
          /** The publication DOI when available. */
          doi: string | null;
          /** The publication title. */
          title: string | null;
          /** The formatted publication author list. */
          authorString: string | null;
          /** The full journal title when available. */
          journalTitle: string | null;
          /** The abbreviated journal title when available. */
          journalAbbreviation: string | null;
          /** The publication year when available. */
          publicationYear: number | null;
          /** The earliest publication date reported by Europe PMC. */
          publicationDate: string | null;
          /** The abstract returned by Europe PMC, which may contain structural HTML tags. */
          abstractText: string | null;
          /** The number of citing publications indexed by Europe PMC. */
          citedByCount: number | null;
          /** Whether Europe PMC marks the publication as open access. */
          isOpenAccess: boolean | null;
          /** Whether the publication has full text in Europe PMC. */
          hasFullText: boolean | null;
          /** Whether Europe PMC has a reference list for the publication. */
          hasReferences: boolean | null;
          /**
           * The canonical Europe PMC publication page URL.
           * @format uri
           */
          europePmcUrl: string;
          /** The raw Europe PMC object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Europe PMC object. */
        request: Record<string, unknown>;
        /** The raw publication objects returned by Europe PMC. */
        rawResults: Array<Record<string, unknown>>;
      };
    };
  }
}
