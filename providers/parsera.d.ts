import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Extract structured data from a webpage URL with Parsera using a prompt, attributes, or both. */
    "parsera.extract": {
      input: {
        /**
         * The webpage URL to extract structured data from.
         * @format uri
         */
        url: string;
        /**
         * Natural-language extraction instructions.
         * @minLength 1
         */
        prompt?: string;
        /**
         * The structured attributes Parsera should extract from the webpage.
         * @minItems 1
         */
        attributes?: Array<{
          /**
           * The output field name for the extracted attribute.
           * @minLength 1
           */
          name: string;
          /**
           * Natural-language guidance for extracting this attribute.
           * @minLength 1
           */
          description: string;
          /** Optional Parsera output type for this attribute. */
          type?: string;
          [key: string]: unknown;
        }>;
        /**
         * Parsera proxy country to use for the webpage request.
         * @minLength 1
         */
        proxyCountry?: string;
        /** Cookies to use while Parsera fetches the webpage. */
        cookies?: Array<{
          /**
           * The cookie name.
           * @minLength 1
           */
          name: string;
          /** The cookie value. */
          value: string;
          /** The cookie domain. */
          domain?: string;
          /** The cookie path. */
          path?: string;
          [key: string]: unknown;
        }>;
      };
      output: Record<string, unknown>;
    };
    /** Extract clean Markdown from a webpage URL with Parsera. */
    "parsera.extract_markdown": {
      input: {
        /**
         * The webpage URL to convert into clean Markdown.
         * @format uri
         */
        url: string;
        /**
         * Parsera proxy country to use for the webpage request.
         * @minLength 1
         */
        proxyCountry?: string;
        /** Cookies to use while Parsera fetches the webpage. */
        cookies?: Array<{
          /**
           * The cookie name.
           * @minLength 1
           */
          name: string;
          /** The cookie value. */
          value: string;
          /** The cookie domain. */
          domain?: string;
          /** The cookie path. */
          path?: string;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The Markdown content extracted by Parsera. */
        markdown: string | null;
        /** The original Parsera response payload. */
        raw: unknown;
      };
    };
    /** List the LLM specifications available to Parsera requests. */
    "parsera.list_llm_specs": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** List proxy countries available to Parsera extraction requests. */
    "parsera.list_proxy_countries": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Parse structured attributes from raw HTML or text content already available to the caller. */
    "parsera.parse": {
      input: {
        /**
         * Raw HTML or text content to parse.
         * @minLength 1
         */
        content: string;
        /**
         * Natural-language parsing instructions.
         * @minLength 1
         */
        prompt?: string;
        /**
         * The structured attributes Parsera should extract from the supplied content.
         * @minItems 1
         */
        attributes?: Array<{
          /**
           * The output field name for the extracted attribute.
           * @minLength 1
           */
          name: string;
          /**
           * Natural-language guidance for extracting this attribute.
           * @minLength 1
           */
          description: string;
          /** Optional Parsera output type for this attribute. */
          type?: string;
          [key: string]: unknown;
        }>;
        /**
         * Parsera extractor mode to use for parsing.
         * @minLength 1
         */
        mode?: string;
      };
      output: Record<string, unknown>;
    };
  }
}
