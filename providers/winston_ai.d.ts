import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check text, a public document URL, or a public website URL for plagiarism with Winston AI. */
    "winston_ai.check_plagiarism": {
      input: {
        /** The text to scan. Winston AI documents a minimum length for reliable results. */
        text?: string;
        /**
         * A publicly accessible PDF, DOC, or DOCX URL for Winston AI to scan.
         * @format uri
         */
        fileUrl?: string;
        /**
         * A publicly accessible website URL for Winston AI to scan.
         * @format uri
         */
        websiteUrl?: string;
        /** Domains or URLs to exclude from the plagiarism score. */
        excluded_sources?: Array<string>;
        /** A two-letter language code supported by the endpoint, or auto to let Winston AI detect it. */
        language?: string;
        /** The country code of the country where the text was written. */
        country?: string;
      };
      output: {
        /** The HTTP status code reported by Winston AI. */
        status?: number;
        /** Basic metadata about a Winston AI plagiarism scan. */
        scanInformation?: {
          /** The Winston AI service name used for the request. */
          service?: string;
          /** The timestamp when the scan was conducted. */
          scanTime?: string;
          /** The input type scanned by Winston AI, such as text, file, or website. */
          inputType?: string;
          /** The language detected for the scanned text. */
          language?: string;
          [key: string]: unknown;
        };
        /** Summary scores from a Winston AI plagiarism scan. */
        result?: {
          /** The percentage of plagiarized content in the scanned text. */
          score?: number;
          /** The number of sources containing matching content. */
          sourceCounts?: number;
          /** The total number of words in the scanned text. */
          textWordCounts?: number;
          /** The total number of words identified as plagiarized. */
          totalPlagiarismWords?: number;
          /** The number of plagiarized words identical to source content. */
          identicalWordCounts?: number;
          /** The number of plagiarized words similar to source content. */
          similarWordCounts?: number;
          [key: string]: unknown;
        };
        /** Sources matched during the plagiarism scan. */
        sources?: Array<{
          /** The plagiarism percentage for this source. */
          score?: number;
          /** Whether Winston AI could access the source content. */
          canAccess?: boolean;
          /** The URL of the matched source. */
          url?: string;
          /** The title of the matched source. */
          title?: string;
          /** The number of input words plagiarized from this source. */
          plagiarismWords?: number;
          /** The number of identical words matched to this source. */
          identicalWordCounts?: number;
          /** The number of similar words matched to this source. */
          similarWordCounts?: number;
          /** The total number of words in the input text. */
          totalNumberOfWords?: number;
          /** The author of the source document. */
          author?: string | null;
          /** A description or summary of the source content. */
          description?: string | null;
          /** The source publication timestamp. */
          publishedDate?: number | null;
          /** The source or publication name. */
          source?: string | null;
          /** Whether the source is cited in the input text. */
          citation?: boolean;
          /** Plagiarized sequences found from this source. */
          plagiarismFound?: Array<{
            /** The starting index of the plagiarized sequence. */
            startIndex?: number;
            /** The ending index of the plagiarized sequence. */
            endIndex?: number;
            /** The plagiarized text sequence. */
            sequence?: string | null;
            [key: string]: unknown;
          }>;
          /** Whether this source was excluded from final results. */
          is_excluded?: boolean;
          [key: string]: unknown;
        }>;
        /** Signals for zero-width space or homoglyph attacks detected in scanned text. */
        attackDetected?: {
          /** Whether zero-width spaces were detected. */
          zero_width_space?: boolean;
          /** Whether homoglyph attacks were detected. */
          homoglyph_attack?: boolean;
        };
        /** The input text used for the plagiarism scan. */
        text?: string;
        /** Similar words found in the input text. */
        similarWords?: Array<{
          /** The starting index of the similar word. */
          index?: number;
          /** The similar word. */
          word?: string;
          [key: string]: unknown;
        }>;
        /** Sources cited in the provided text. */
        citations?: Array<string>;
        /** Plagiarism sequences found in the input text. */
        indexes?: Array<{
          /** The starting index of the plagiarized sequence. */
          startIndex?: number;
          /** The ending index of the plagiarized sequence. */
          endIndex?: number;
          /** The plagiarized text sequence. */
          sequence?: string | null;
          [key: string]: unknown;
        }>;
        /** The number of Winston AI credits used by the request. */
        credits_used?: number;
        /** The number of Winston AI credits remaining after the request. */
        credits_remaining?: number;
        [key: string]: unknown;
      };
    };
    /** Compare two texts and return similarity signals from Winston AI. */
    "winston_ai.compare_texts": {
      input: {
        /**
         * The first text to compare.
         * @maxLength 120000
         */
        first_text: string;
        /**
         * The second text to compare against the first text.
         * @maxLength 120000
         */
        second_text: string;
      };
      output: {
        /** The HTTP status code reported by Winston AI. */
        status?: number;
        /** Overall similarity score from 0 to 100 between the two texts. */
        similarity_score?: number;
        /** Similarity details for one compared text. */
        first_text?: {
          /** The total number of words in this text. */
          total_word_count?: number;
          /** The number of words that match the other text. */
          matching_word_count?: number;
          /** The percentage of matching content in this text. */
          similarity_percentage?: number;
          /** Matching segments in this text. */
          items?: Array<{
            /** The type of match, such as identical or similar. */
            type?: string;
            /** The number of words in this segment. */
            word_count?: number;
            /** The starting index of the segment in the text. */
            index_start?: number;
            /** The segment length in characters. */
            length?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Similarity details for one compared text. */
        second_text?: {
          /** The total number of words in this text. */
          total_word_count?: number;
          /** The number of words that match the other text. */
          matching_word_count?: number;
          /** The percentage of matching content in this text. */
          similarity_percentage?: number;
          /** Matching segments in this text. */
          items?: Array<{
            /** The type of match, such as identical or similar. */
            type?: string;
            /** The number of words in this segment. */
            word_count?: number;
            /** The starting index of the segment in the text. */
            index_start?: number;
            /** The segment length in characters. */
            length?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The number of Winston AI credits used by the request. */
        credits_used?: number;
        /** The number of Winston AI credits remaining after the request. */
        credits_remaining?: number;
        [key: string]: unknown;
      };
    };
    /** Detect whether text, a public document URL, or a public website URL was likely generated by AI with Winston AI. */
    "winston_ai.detect_ai_text": {
      input: {
        /** The text to scan. Winston AI documents a minimum length for reliable results. */
        text?: string;
        /**
         * A publicly accessible PDF, DOC, or DOCX URL for Winston AI to scan.
         * @format uri
         */
        fileUrl?: string;
        /**
         * A publicly accessible website URL for Winston AI to scan.
         * @format uri
         */
        websiteUrl?: string;
        /** The Winston AI model version to use, such as 4.14 or latest. */
        version?: string;
        /** Whether Winston AI should include sentence-level scores. */
        sentences?: boolean;
        /** A two-letter language code supported by the endpoint, or auto to let Winston AI detect it. */
        language?: string;
      };
      output: {
        /** The HTTP status code reported by Winston AI. */
        status?: number;
        /** Human score from 0 to 100. Lower values indicate AI-like text and higher values indicate human-like text. */
        score?: number;
        /** Sentence-level score details returned by Winston AI. */
        sentences?: unknown;
        /** The input type scanned by Winston AI, such as text, file, or website. */
        input?: string;
        /** Signals for zero-width space or homoglyph attacks detected in scanned text. */
        attack_detected?: {
          /** Whether zero-width spaces were detected. */
          zero_width_space?: boolean;
          /** Whether homoglyph attacks were detected. */
          homoglyph_attack?: boolean;
        };
        /** Readability score from 0 to 100. */
        readability_score?: number;
        /** The number of Winston AI credits used by the request. */
        credits_used?: number;
        /** The number of Winston AI credits remaining after the request. */
        credits_remaining?: number;
        /** The Winston AI model version used for the prediction. */
        version?: string;
        /** The detected or specified language code. */
        language?: string;
        [key: string]: unknown;
      };
    };
    /** Verify claims in text, a public document URL, or a public website URL with Winston AI. */
    "winston_ai.fact_check": {
      input: {
        /** The text to scan. Winston AI documents a minimum length for reliable results. */
        text?: string;
        /**
         * A publicly accessible PDF, DOC, or DOCX URL for Winston AI to scan.
         * @format uri
         */
        fileUrl?: string;
        /**
         * A publicly accessible website URL for Winston AI to scan.
         * @format uri
         */
        websiteUrl?: string;
        /** A two-letter language code supported by the endpoint, or auto to let Winston AI detect it. */
        language?: string;
      };
      output: {
        /** The HTTP status code reported by Winston AI. */
        status?: number;
        /** Claims detected in the text with fact-checking results. */
        claims?: Array<{
          /** The unique identifier of the input sentence. */
          id?: number;
          /** The exact input sentence from which the claim was extracted. */
          sentence?: string;
          /** The distinct claim checked by Winston AI. */
          claim?: string;
          /** The fact-checking verdict for the claim. */
          verdict?: string;
          /** The confidence score from 0 to 100 for the verdict. */
          score?: number;
          /** The explanation for the verdict. */
          explanation?: string;
          /** Sources supporting the claim result. */
          links?: Array<{
            /** The URL of the supporting reference. */
            url?: string;
            /** The title or domain of the referenced article. */
            title?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Overall confidence score from 0 to 100 that the provided text is accurate. */
        score?: number;
        /** The number of claims extracted from the text. */
        claimsCount?: number;
        /** The full original text that was analyzed. */
        text?: string;
        /** Sentences from the analyzed text. */
        sentences?: Array<{
          /** The unique identifier of the sentence. */
          id?: number;
          /** The sentence text. */
          text?: string;
          [key: string]: unknown;
        }>;
        /** The input type scanned by Winston AI, such as text, file, or website. */
        input?: string;
        /** The detected or specified input language. */
        language?: string;
        /** The number of credits used to process the request. */
        creditsUsed?: number;
        /** The number of credits remaining for the account. */
        creditsRemaining?: number;
        /** The word count of the input text. */
        wordCount?: number;
        [key: string]: unknown;
      };
    };
  }
}
