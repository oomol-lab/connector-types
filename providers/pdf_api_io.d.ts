import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one PDF-API.io template by template ID, including team and variable details. */
    "pdf_api_io.get_template": {
      input: {
        /**
         * The template identifier to retrieve.
         * @minLength 1
         */
        templateId: string;
      };
      output: {
        /** The requested PDF-API.io template. */
        template: {
          /**
           * The template identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The template display name.
           * @minLength 1
           */
          name: string;
          /**
           * The upstream template type such as editor or html.
           * @minLength 1
           */
          type: string;
          /**
           * The ISO 8601 timestamp when the template was created.
           * @minLength 1
           */
          createdAt: string;
          /** Template metadata returned by PDF-API.io when available. */
          meta: Record<string, unknown> | null;
          /** The variables that can be substituted when rendering the template. */
          variables: Array<{
            /**
             * The placeholder or variable name used in the template.
             * @minLength 1
             */
            name: string;
            /**
             * The upstream variable type reported by PDF-API.io.
             * @minLength 1
             */
            type: string;
          }>;
          /**
           * The team name that owns the template.
           * @minLength 1
           */
          teamName: string;
          /**
           * The team identifier that owns the template.
           * @minLength 1
           */
          teamId: string;
        };
      };
    };
    /** List the PDF-API.io templates accessible to the provided API token. */
    "pdf_api_io.list_templates": {
      input: Record<string, never>;
      output: {
        /** The templates returned by PDF-API.io for the current account. */
        templates: Array<{
          /**
           * The template identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The template display name.
           * @minLength 1
           */
          name: string;
          /**
           * The upstream template type such as editor or html.
           * @minLength 1
           */
          type: string;
          /**
           * The ISO 8601 timestamp when the template was created.
           * @minLength 1
           */
          createdAt: string;
          /** Template metadata returned by PDF-API.io when available. */
          meta: Record<string, unknown> | null;
          /** The variables that can be substituted when rendering the template. */
          variables: Array<{
            /**
             * The placeholder or variable name used in the template.
             * @minLength 1
             */
            name: string;
            /**
             * The upstream variable type reported by PDF-API.io.
             * @minLength 1
             */
            type: string;
          }>;
        }>;
      };
    };
    /** Render one PDF-API.io template with JSON data and return the temporary hosted PDF URL. */
    "pdf_api_io.render_pdf": {
      input: {
        /**
         * The template identifier used to generate the PDF.
         * @minLength 1
         */
        templateId: string;
        /** The key-value payload used to replace placeholders in the template. */
        data: Record<string, unknown>;
      };
      output: {
        /**
         * The temporary PDF download URL returned by PDF-API.io.
         * @minLength 1
         */
        fileUrl: string;
      };
    };
  }
}
