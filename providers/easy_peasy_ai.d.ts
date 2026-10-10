import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate text with an Easy-Peasy.AI preset. Use get_preset first for template-specific fields and constraints; generation consumes word credits. */
    "easy_peasy_ai.generate_text": {
      input: {
        /**
         * The template slug to use for generation.
         * @minLength 1
         */
        preset: string;
        /** The main input text or topic; may be empty for templates that use other fields. */
        keywords: string;
        /** The desired tone, such as professional, friendly, or funny. */
        tone?: string;
        /** The desired output length. */
        length?: "Short" | "Medium" | "Long";
        /** Number of outputs to generate; defaults to 1. */
        outputs?: number;
        /** Output language; defaults to English. */
        language?: string;
        /** Whether to use the advanced AI model; defaults to false. */
        shouldUseGPT4?: boolean;
        /** Additional context, such as background information, key skills, or a blog introduction. */
        extra1?: string;
        /** Additional context, such as a blog title or reply sentiment. */
        extra2?: string;
        /** Additional context, such as a job title. */
        extra3?: string;
        /** Additional context, such as recommendation details. */
        extra4?: string;
        /** End section text for the Fill the Gaps template. */
        suffix?: string;
      };
      output: {
        /** The generated outputs returned by Easy-Peasy.AI. */
        outputs: Array<{
          /** The generated output ID. */
          id: number;
          /** The generated text. */
          name: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get an Easy-Peasy.AI preset's input fields and current constraints before generating text. */
    "easy_peasy_ai.get_preset": {
      input: {
        /**
         * The preset slug, such as custom-generator or paragraph-writer.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** Unique preset identifier. */
        slug: string;
        /** Human-readable preset name. */
        title: string;
        /** Short description of what the preset does. */
        description?: string;
        /** Category or categories the preset belongs to. */
        category?: string | Array<string>;
        /** Whether this preset is available on the free plan. */
        isFree?: boolean;
        /** Input fields to pass to generate_text, including template-specific constraints. */
        fields: Array<{
          /** The request body field name. */
          name: string;
          /** Human-readable field label. */
          label?: string;
          /** Input control type. */
          type?: string;
          /** Whether the preset requires this field. */
          required?: boolean;
          /** An example value or input hint. */
          placeholder?: string;
          /** Maximum text length for this field. */
          maxLength?: number;
          /** Choices for a radio input. */
          radioOptions?: Array<{
            /** The value to send. */
            value: string;
            /** Whether this choice is the default. */
            default?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Easy-Peasy.AI text generation presets, optionally filtered by category. */
    "easy_peasy_ai.list_presets": {
      input: {
        /** Filter presets by category. */
        category?: "Social Media" | "Content" | "Business" | "HR" | "Marketing" | "Resume" | "Education" | "Project Management" | "Tools" | "Other";
      };
      output: {
        /** List of available presets. */
        presets: Array<{
          /** Unique preset identifier. */
          slug: string;
          /** Human-readable preset name. */
          title: string;
          /** Short description of what the preset does. */
          description?: string;
          /** Category or categories the preset belongs to. */
          category?: string | Array<string>;
          /** Whether this preset is available on the free plan. */
          isFree?: boolean;
          [key: string]: unknown;
        }>;
        /** Total number of presets returned. */
        total: number;
        /** All available preset categories. */
        categories: Array<string>;
        [key: string]: unknown;
      };
    };
  }
}
