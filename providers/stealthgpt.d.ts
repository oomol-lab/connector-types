import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Score how likely text is to be flagged as AI-generated with StealthGPT. */
    "stealthgpt.detect_ai_text": {
      input: {
        /**
         * Text to analyze, up to 3,000 words.
         * @minLength 1
         */
        text: string;
      };
      output: {
        /**
         * Score from 0 to 100 where a higher value means the text is more likely to be flagged as AI-generated.
         * @minimum 0
         * @maximum 100
         */
        howLikelyToBeDetected: number;
        /** Words charged for this detection request. */
        wordsSpent: number;
        /** Prepaid word balance remaining after this request. */
        remainingCredits: number;
        /** Billing source used for this request. */
        billingMode: "prepaid" | "payg";
        /** Words added to metered usage, or zero when prepaid words were used. */
        meteredChargedCredits: number;
        [key: string]: unknown;
      };
    };
    /** Generate text from instructions with StealthGPT and return usage details. */
    "stealthgpt.generate_text": {
      input: {
        /**
         * Instructions or topic for the content to generate.
         * @minLength 1
         */
        prompt: string;
        /** StealthGPT model used to process the text. */
        model: "super" | "standard" | "lite";
        /** How StealthGPT structures generated content. */
        writingMode?: "default" | "essay";
        /** Writing complexity used when writingMode is essay. */
        tone?: "Standard" | "HighSchool" | "College" | "PhD";
        /** Whether StealthGPT prioritizes rewrite quality or speed. */
        qualityMode?: "quality" | "fast";
        /** Whether non-English input should produce output in the original language. */
        isMultilingual?: boolean;
        /** Format of the generated or humanized result. */
        outputFormat?: "text" | "markdown";
      };
      output: {
        /** The generated or humanized content. */
        result: string;
        /**
         * Historical StealthGPT score where a higher value means the content reads as more human.
         * @minimum 0
         * @maximum 100
         */
        howLikelyToBeDetected: number;
        /** Words charged for this request. */
        wordsSpent: number;
        /** Prepaid word balance remaining after this request. */
        remainingCredits: number;
        /** Billing source used for this request. */
        billingMode: "prepaid" | "payg";
        /** Words added to metered usage, or zero when prepaid words were used. */
        meteredChargedCredits: number;
        [key: string]: unknown;
      };
    };
    /** Get the current StealthGPT prepaid and pay-as-you-go word balance. */
    "stealthgpt.get_balance": {
      input: Record<string, never>;
      output: {
        /** Prepaid words available in the account. */
        credits: number;
        /** StealthGPT pay-as-you-go billing status. */
        payg: {
          /** Current pay-as-you-go billing state. */
          mode: "metered_active" | "metered_past_due" | "metered_setup_required";
          /** Words accumulated for metered billing but not yet reported. */
          unbilledCredits: number;
          /**
           * Timestamp when metered usage was last reported, when available.
           * @format date-time
           */
          lastUsageReportAt: string | null;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Humanize existing text with StealthGPT and return usage details. */
    "stealthgpt.humanize_text": {
      input: {
        /**
         * Source text to humanize without instruction wrappers, up to 3,000 words.
         * @minLength 1
         */
        text: string;
        /** StealthGPT model used to process the text. */
        model: "super" | "standard" | "lite";
        /** Whether StealthGPT prioritizes rewrite quality or speed. */
        qualityMode?: "quality" | "fast";
        /** Whether non-English source text should remain in its original language. */
        isMultilingual?: boolean;
        /** Format of the generated or humanized result. */
        outputFormat?: "text" | "markdown";
      };
      output: {
        /** The generated or humanized content. */
        result: string;
        /**
         * Historical StealthGPT score where a higher value means the content reads as more human.
         * @minimum 0
         * @maximum 100
         */
        howLikelyToBeDetected: number;
        /** Words charged for this request. */
        wordsSpent: number;
        /** Prepaid word balance remaining after this request. */
        remainingCredits: number;
        /** Billing source used for this request. */
        billingMode: "prepaid" | "payg";
        /** Words added to metered usage, or zero when prepaid words were used. */
        meteredChargedCredits: number;
        [key: string]: unknown;
      };
    };
  }
}
