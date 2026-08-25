import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search Consensus for relevance-ranked academic papers with publication, study, and quality filters. */
    "consensus.search_papers": {
      input: {
        /**
         * The research question or topic to search for.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /** Exclude papers published before this year. */
        year_min?: number;
        /** Exclude papers published after this year. */
        year_max?: number;
        /**
         * A month number used to limit the publication window.
         * @minimum 1
         * @maximum 12
         */
        month_min?: number;
        /**
         * A month number used to limit the publication window.
         * @minimum 1
         * @maximum 12
         */
        month_max?: number;
        /**
         * A list of documented Consensus filter values.
         * @minItems 1
         */
        study_types?: Array<string>;
        /** Whether to include only studies involving humans. */
        human?: boolean;
        /** Whether to include only controlled studies. */
        controlled?: boolean;
        /**
         * Exclude studies with a smaller sample size.
         * @minimum 1
         */
        sample_size_min?: number;
        /**
         * An SJR journal quartile where 1 is the highest-quality quartile and 4 is the lowest.
         * @minimum 1
         * @maximum 4
         */
        sjr_min?: number;
        /**
         * An SJR journal quartile where 1 is the highest-quality quartile and 4 is the lowest.
         * @minimum 1
         * @maximum 4
         */
        sjr_max?: number;
        /**
         * Exclude papers with fewer citations.
         * @minimum 0
         */
        citation_min?: number;
        /**
         * The minimum study duration in days.
         * @minimum 0
         */
        duration_min?: number;
        /**
         * The maximum study duration in days.
         * @minimum 0
         */
        duration_max?: number;
        /** Whether to exclude preprints. */
        exclude_preprints?: boolean;
        /** Whether to include only open-access papers. */
        open_access?: boolean;
        /**
         * A list of documented Consensus filter values.
         * @minItems 1
         */
        publisher_name?: Array<string>;
        /**
         * A list of documented Consensus filter values.
         * @minItems 1
         */
        domain?: Array<string>;
        /**
         * A list of documented Consensus filter values.
         * @minItems 1
         */
        country?: Array<string>;
        /**
         * A preferred journal name used to rank matching journals higher.
         * @minLength 1
         * @pattern \S
         */
        journal_name?: string;
        /** Whether to include only clinical guidelines. */
        clinical_guideline?: boolean;
        /** Whether to focus the search on top medical journals and clinical guidelines. */
        medical_mode?: boolean;
        /** Whether to include Consensus semantic relevance scores in results. */
        include_semantic_score?: boolean;
        /** Whether to include query-relevant licensed full-text excerpts when the plan supports them. */
        include_full_text_chunks?: boolean;
        /**
         * The zero-indexed result page, up to page 49.
         * @minimum 0
         * @maximum 49
         */
        page?: number;
        /**
         * The requested number of papers; Consensus caps it to the current plan maximum.
         * @minimum 1
         */
        page_size?: number;
      };
      output: {
        /** The relevance-ranked papers returned for the query. */
        results: Array<{
          /** The paper title. */
          title?: string;
          /** The paper authors. */
          authors?: Array<string>;
          /** The publication year. */
          publish_year?: number;
          /** The paper DOI when available. */
          doi?: string | null;
          /** The journal name when available. */
          journal_name?: string | null;
          /** The number of citations reported by Consensus. */
          citation_count?: number;
          /** The detected study design when available. */
          study_type?: string | null;
          /** The study sample size when available. */
          sample_size?: number | null;
          /** The best SJR quartile reported for the journal when available. */
          sjr_best_quartile?: number | null;
          /** The plain-language key takeaway when available. */
          takeaway?: string | null;
          /** The paper abstract when available. */
          abstract?: string | null;
          /** The Consensus URL for the paper. */
          url?: string;
          [key: string]: unknown;
        }>;
        /** The zero-indexed page returned by Consensus. */
        page: number;
        /** The result count limit applied by Consensus. */
        page_size: number;
        /** Whether this is the final page of results. */
        is_end: boolean;
        /** The next page number, or null at the end. */
        next_page: number | null;
      };
    };
  }
}
