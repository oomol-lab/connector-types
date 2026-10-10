import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Common Ninja widget. Choose draft or published explicitly. Omit data to use the type defaults, or obtain its configuration schema with get_widget_type_schema. */
    "commonninja.create_widget": {
      input: {
        /**
         * The widget type ID.
         * @minLength 1
         * @pattern \S
         */
        type: string;
        /**
         * The widget name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** The publication status. */
        status: "draft" | "published";
        /** Widget configuration matching the widget type schema. */
        data?: Record<string, unknown>;
        /** The widget description. */
        description?: string;
        /**
         * The associated project ID.
         * @minLength 1
         * @pattern \S
         */
        projectId?: string;
        /** The widget data model version; omitted uses the latest version. */
        modelVersion?: number;
      };
      output: {
        /** The widget ID. */
        id?: string;
        /** The widget name. */
        name?: string;
        /** The widget description. */
        description?: string;
        /** The widget type ID. */
        type?: string;
        /** The associated project ID. */
        projectId?: string;
        /** The publication status. */
        status?: string;
        /** The widget data model version. */
        modelVersion?: number;
        /** The preview image URL. */
        previewImage?: string;
        /** The creation timestamp. */
        created?: string;
        /** The last update timestamp. */
        updated?: string;
        /** Widget configuration matching the widget type schema. */
        data?: Record<string, unknown>;
        /** HTML and script for embedding the widget. */
        embedCode?: {
          /** Widget container HTML. */
          html?: string;
          /** SDK script tag; include once per page. */
          script?: string;
          [key: string]: unknown;
        };
        /** The widget editor URL. */
        editorUrl?: string;
        [key: string]: unknown;
      };
    };
    /** Delete a Common Ninja widget. Set permanent to true only when it must be irrecoverably removed. */
    "commonninja.delete_widget": {
      input: {
        /**
         * The resource ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /** Permanently delete the widget; the API defaults to false. */
        permanent?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Get a Common Ninja project by ID. */
    "commonninja.get_project": {
      input: {
        /**
         * The resource ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** The project ID. */
        projectId?: string;
        /** The project owner ID. */
        userId?: string;
        /** The project name. */
        name?: string;
        /** The project slug. */
        slug?: string;
        /** Associated domains. */
        domains?: Array<string>;
        /** The project description. */
        description?: string;
        /** The project thumbnail URL. */
        thumbnail?: string;
        /** The creation timestamp. */
        created?: string;
        /** The last update timestamp. */
        updated?: string;
        [key: string]: unknown;
      };
    };
    /** Get the authenticated Common Ninja account profile. */
    "commonninja.get_user": {
      input: Record<string, never>;
      output: {
        /** The account ID. */
        id?: string;
        /** The account name. */
        name?: string;
        /** The account email address. */
        email?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Common Ninja widget, including its type-specific configuration. */
    "commonninja.get_widget": {
      input: {
        /**
         * The resource ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** The widget ID. */
        id?: string;
        /** The widget name. */
        name?: string;
        /** The widget description. */
        description?: string;
        /** The widget type ID. */
        type?: string;
        /** The associated project ID. */
        projectId?: string;
        /** The publication status. */
        status?: string;
        /** The widget data model version. */
        modelVersion?: number;
        /** The preview image URL. */
        previewImage?: string;
        /** The creation timestamp. */
        created?: string;
        /** The last update timestamp. */
        updated?: string;
        /** Widget configuration matching the widget type schema. */
        data?: Record<string, unknown>;
        /** HTML and script for embedding the widget. */
        embedCode?: {
          /** Widget container HTML. */
          html?: string;
          /** SDK script tag; include once per page. */
          script?: string;
          [key: string]: unknown;
        };
        /** The widget editor URL. */
        editorUrl?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Common Ninja widget editor URL, which can be embedded in an iframe. */
    "commonninja.get_widget_editor_url": {
      input: {
        /**
         * The resource ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** The widget editor URL. */
        url?: string;
        [key: string]: unknown;
      };
    };
    /** Get the HTML container and SDK script for embedding a Common Ninja widget. */
    "commonninja.get_widget_embed_code": {
      input: {
        /**
         * The resource ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** Widget container HTML. */
        html?: string;
        /** SDK script tag; include once per page. */
        script?: string;
        [key: string]: unknown;
      };
    };
    /** Get metadata for a Common Ninja widget type. */
    "commonninja.get_widget_type": {
      input: {
        /**
         * The resource ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** The widget type ID. */
        id?: string;
        /** The widget type name. */
        name?: string;
        /** The widget type slug. */
        slug?: string;
        /** The creation button label. */
        buttonText?: string;
        /** A short widget type description. */
        teaser?: string;
        /** The widget type logo URL. */
        logo?: string;
        /** The promotional image URL. */
        promotionImage?: string;
        /** Widget type categories. */
        categories?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get the JSON Schema for a Common Ninja widget type before supplying widget configuration. */
    "commonninja.get_widget_type_schema": {
      input: {
        /**
         * The resource ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** The schema identifier. */
        $id?: string;
        /** The JSON Schema dialect URI. */
        $schema?: string;
        /** Schema properties. */
        properties?: Record<string, unknown>;
        /** Reusable schema definitions. */
        definitions?: Record<string, unknown>;
        /** Schemas combined by intersection. */
        allOf?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** List Common Ninja projects. Only the documented limit is supported; automatic pagination is not available. */
    "commonninja.list_projects": {
      input: {
        /**
         * Maximum number of results; the API defaults to 10.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** Returned resources. */
        docs?: Array<{
          /** The project ID. */
          projectId?: string;
          /** The project owner ID. */
          userId?: string;
          /** The project name. */
          name?: string;
          /** The project slug. */
          slug?: string;
          /** Associated domains. */
          domains?: Array<string>;
          /** The project description. */
          description?: string;
          /** The project thumbnail URL. */
          thumbnail?: string;
          /** The creation timestamp. */
          created?: string;
          /** The last update timestamp. */
          updated?: string;
          [key: string]: unknown;
        }>;
        /** Total matching resources. */
        total?: number;
        /** The result limit. */
        limit?: number;
        /** The result offset. */
        offset?: number;
        /** The current page. */
        page?: number;
        /** The total page count. */
        pages?: number;
        [key: string]: unknown;
      };
    };
    /** List Common Ninja widget types. Only documented limit and field selection are supported; automatic pagination is not available. */
    "commonninja.list_widget_types": {
      input: {
        /**
         * Maximum number of results; the API defaults to 10.
         * @minimum 1
         */
        limit?: number;
        /** Comma-separated response fields to include. */
        fields?: string;
      };
      output: {
        /** Returned resources. */
        docs?: Array<{
          /** The widget type ID. */
          id?: string;
          /** The widget type name. */
          name?: string;
          /** The widget type slug. */
          slug?: string;
          /** The creation button label. */
          buttonText?: string;
          /** A short widget type description. */
          teaser?: string;
          /** The widget type logo URL. */
          logo?: string;
          /** The promotional image URL. */
          promotionImage?: string;
          /** Widget type categories. */
          categories?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Total matching resources. */
        total?: number;
        /** The result limit. */
        limit?: number;
        /** The result offset. */
        offset?: number;
        /** The current page. */
        page?: number;
        /** The total page count. */
        pages?: number;
        [key: string]: unknown;
      };
    };
    /** List Common Ninja widgets with optional filters. Results exclude widget configuration; use get_widget to read it. Only documented list filters are supported; automatic pagination is not available. */
    "commonninja.list_widgets": {
      input: {
        /**
         * Maximum number of results; the API defaults to 10.
         * @minimum 1
         */
        limit?: number;
        /** Comma-separated response fields to include. */
        fields?: string;
        /** Filter by project ID. */
        projectId?: string;
        /** Filter by widget search query. */
        search?: string;
        /** Filter by widget type ID. */
        type?: string;
      };
      output: {
        /** Returned resources. */
        docs?: Array<{
          /** The widget ID. */
          id?: string;
          /** The widget name. */
          name?: string;
          /** The widget description. */
          description?: string;
          /** The widget type ID. */
          type?: string;
          /** The associated project ID. */
          projectId?: string;
          /** The publication status. */
          status?: string;
          /** The widget data model version. */
          modelVersion?: number;
          /** The preview image URL. */
          previewImage?: string;
          /** The creation timestamp. */
          created?: string;
          /** The last update timestamp. */
          updated?: string;
          /** Widget configuration matching the widget type schema. */
          data?: Record<string, unknown>;
          /** HTML and script for embedding the widget. */
          embedCode?: {
            /** Widget container HTML. */
            html?: string;
            /** SDK script tag; include once per page. */
            script?: string;
            [key: string]: unknown;
          };
          /** The widget editor URL. */
          editorUrl?: string;
          [key: string]: unknown;
        }>;
        /** Total matching resources. */
        total?: number;
        /** The result limit. */
        limit?: number;
        /** The result offset. */
        offset?: number;
        /** The current page. */
        page?: number;
        /** The total page count. */
        pages?: number;
        [key: string]: unknown;
      };
    };
    /** Update selected Common Ninja widget fields. Omitted fields remain unchanged; configuration must match the widget type schema. */
    "commonninja.update_widget": {
      input: {
        /**
         * The resource ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /** The widget name. */
        name?: string;
        /** The widget description. */
        description?: string;
        /** The publication status. */
        status?: "draft" | "published";
        /** Widget configuration matching the widget type schema. */
        data?: Record<string, unknown>;
      };
      output: {
        /** The widget ID. */
        id?: string;
        /** The widget name. */
        name?: string;
        /** The widget description. */
        description?: string;
        /** The widget type ID. */
        type?: string;
        /** The associated project ID. */
        projectId?: string;
        /** The publication status. */
        status?: string;
        /** The widget data model version. */
        modelVersion?: number;
        /** The preview image URL. */
        previewImage?: string;
        /** The creation timestamp. */
        created?: string;
        /** The last update timestamp. */
        updated?: string;
        /** Widget configuration matching the widget type schema. */
        data?: Record<string, unknown>;
        /** HTML and script for embedding the widget. */
        embedCode?: {
          /** Widget container HTML. */
          html?: string;
          /** SDK script tag; include once per page. */
          script?: string;
          [key: string]: unknown;
        };
        /** The widget editor URL. */
        editorUrl?: string;
        [key: string]: unknown;
      };
    };
  }
}
