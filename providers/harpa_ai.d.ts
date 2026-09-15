import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Run a built-in or custom HARPA AI command in a connected browser node and return its result. */
    "harpa_ai.run_ai_command": {
      input: {
        /**
         * The complete web page URL to open in the HARPA browser node.
         * @format uri
         */
        url?: string;
        /** The built-in or custom HARPA command name to execute. */
        name?: string;
        /** Values supplied to successive user-input steps in the HARPA command. */
        inputs?: Array<string>;
        /** The HARPA parameter to return, using dot notation when needed; defaults to the last message. */
        resultParam?: string;
        /** The HARPA browser nodes to use. */
        node?: string | number;
        /**
         * The synchronous execution timeout in milliseconds.
         * @minimum 1
         * @maximum 300000
         */
        timeout?: number;
        /** The title or ID of the HARPA AI connection to use; the default connection is used when omitted or not found. */
        connection?: string;
      };
      output: {
        /** The JSON result returned by HARPA GRID; its shape depends on the selected nodes and action. */
        result: unknown;
      };
    };
    /** Run an AI prompt, optionally with a web page as context, in a connected HARPA browser node. */
    "harpa_ai.run_ai_prompt": {
      input: {
        /**
         * The AI prompt to execute.
         * @minLength 1
         */
        prompt: string;
        /**
         * The complete web page URL to open in the HARPA browser node.
         * @format uri
         */
        url?: string;
        /** The HARPA browser nodes to use. */
        node?: string | number;
        /**
         * The synchronous execution timeout in milliseconds.
         * @minimum 1
         * @maximum 300000
         */
        timeout?: number;
        /** The title or ID of the HARPA AI connection to use; the default connection is used when omitted or not found. */
        connection?: string;
      };
      output: {
        /** The JSON result returned by HARPA GRID; its shape depends on the selected nodes and action. */
        result: unknown;
      };
    };
    /** Scrape a web page as Markdown or extract selected elements through a connected HARPA browser node. */
    "harpa_ai.scrape_web_page": {
      input: {
        /**
         * The complete web page URL to open in the HARPA browser node.
         * @format uri
         */
        url: string;
        /** The page elements to extract; omit this field to return page Markdown. */
        grab?: Array<{
          /**
           * A CSS, XPath, or text selector for the target element.
           * @minLength 1
           */
          selector: string;
          /** How HARPA should interpret selector. */
          selectorType?: "auto" | "css" | "xpath" | "text";
          /** Which matching element or elements to capture. */
          at?: "all" | "first" | "last" | number;
          /** The element property, attribute, or style value to extract. */
          take?: string;
          /** The key to use for this extracted value in the result. */
          label?: string;
        }>;
        /** The HARPA browser nodes to use. */
        node?: string | number;
        /**
         * The synchronous execution timeout in milliseconds.
         * @minimum 1
         * @maximum 300000
         */
        timeout?: number;
      };
      output: {
        /** The JSON result returned by HARPA GRID; its shape depends on the selected nodes and action. */
        result: unknown;
      };
    };
    /** Search the web through a connected HARPA browser node. */
    "harpa_ai.search_web": {
      input: {
        /**
         * The search query, including optional operators such as site:example.com or intitle:keyword.
         * @minLength 1
         */
        query: string;
        /** The HARPA browser nodes to use. */
        node?: string | number;
        /**
         * The synchronous execution timeout in milliseconds.
         * @minimum 1
         * @maximum 300000
         */
        timeout?: number;
      };
      output: {
        /** The JSON result returned by HARPA GRID; its shape depends on the selected nodes and action. */
        result: unknown;
      };
    };
  }
}
