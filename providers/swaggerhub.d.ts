import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch a SwaggerHub API definition in JSON or YAML format, with optional resolved and flattened output. */
    "swaggerhub.get_api_definition": {
      input: {
        /**
         * The SwaggerHub owner name.
         * @minLength 1
         */
        owner: string;
        /**
         * The case-sensitive SwaggerHub API name.
         * @minLength 1
         */
        apiName: string;
        /**
         * The SwaggerHub version identifier.
         * @minLength 1
         */
        version: string;
        /**
         * The definition format to request from SwaggerHub.
         * @default "json"
         */
        format: "json" | "yaml";
        /**
         * Whether SwaggerHub should resolve external references in the returned API definition.
         * @default false
         */
        resolved: boolean;
        /**
         * Whether SwaggerHub should flatten inline schemas in the returned definition when supported.
         * @default false
         */
        flatten: boolean;
      };
      output: {
        /** The definition format returned by SwaggerHub. */
        format: "json" | "yaml";
        /** The HTTP content type returned by SwaggerHub for the definition response. */
        contentType: string | null;
        /** The definition payload returned by SwaggerHub. */
        definition: string | Record<string, unknown>;
      };
    };
    /** Fetch a SwaggerHub domain definition in JSON or YAML format. */
    "swaggerhub.get_domain_definition": {
      input: {
        /**
         * The SwaggerHub owner name.
         * @minLength 1
         */
        owner: string;
        /**
         * The case-sensitive SwaggerHub domain name.
         * @minLength 1
         */
        domainName: string;
        /**
         * The SwaggerHub version identifier.
         * @minLength 1
         */
        version: string;
        /**
         * The definition format to request from SwaggerHub.
         * @default "json"
         */
        format: "json" | "yaml";
      };
      output: {
        /** The definition format returned by SwaggerHub. */
        format: "json" | "yaml";
        /** The HTTP content type returned by SwaggerHub for the definition response. */
        contentType: string | null;
        /** The definition payload returned by SwaggerHub. */
        definition: string | Record<string, unknown>;
      };
    };
    /** Fetch a single SwaggerHub project by owner and project identifier. */
    "swaggerhub.get_project": {
      input: {
        /**
         * The SwaggerHub owner name.
         * @minLength 1
         */
        owner: string;
        /**
         * The SwaggerHub project identifier.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** The SwaggerHub project returned by the API. */
        project: {
          /** The SwaggerHub project name. */
          name?: string;
          /** The SwaggerHub project description returned by the API. */
          description?: string;
          /** The API names included in the project. */
          apis?: Array<string>;
          /** The domain names included in the project. */
          domains?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch a SwaggerHub template definition in JSON or YAML format, with optional flattening. */
    "swaggerhub.get_template_definition": {
      input: {
        /**
         * The SwaggerHub owner name.
         * @minLength 1
         */
        owner: string;
        /**
         * The SwaggerHub template identifier.
         * @minLength 1
         */
        templateId: string;
        /**
         * The SwaggerHub version identifier.
         * @minLength 1
         */
        version: string;
        /**
         * The definition format to request from SwaggerHub.
         * @default "json"
         */
        format: "json" | "yaml";
        /**
         * Whether SwaggerHub should flatten inline schemas in the returned definition when supported.
         * @default false
         */
        flatten: boolean;
      };
      output: {
        /** The definition format returned by SwaggerHub. */
        format: "json" | "yaml";
        /** The HTTP content type returned by SwaggerHub for the definition response. */
        contentType: string | null;
        /** The definition payload returned by SwaggerHub. */
        definition: string | Record<string, unknown>;
      };
    };
    /** List the versions available for a specific SwaggerHub API. */
    "swaggerhub.list_api_versions": {
      input: {
        /**
         * The SwaggerHub owner name.
         * @minLength 1
         */
        owner: string;
        /**
         * The case-sensitive SwaggerHub API name.
         * @minLength 1
         */
        apiName: string;
      };
      output: {
        /** The raw registry listing returned by SwaggerHub. */
        listing: {
          /** The listing name returned by SwaggerHub. */
          name?: string;
          /** The listing description returned by SwaggerHub. */
          description?: string | null;
          /** The listing URL returned by SwaggerHub. */
          url?: string;
          /** The zero-based result offset. */
          offset?: number;
          /** The total number of matching registry items. */
          totalCount?: number;
          /** The registry items returned by SwaggerHub in APIs.json format. */
          apis?: Array<{
            /** The SwaggerHub registry item name. */
            name?: string;
            /** The description returned for the registry item. */
            description?: string | null;
            /** The tags returned by SwaggerHub for the registry item. */
            tags?: Array<string>;
            /** The property list returned by SwaggerHub for the registry item. */
            properties?: Array<{
              /** The property type returned by SwaggerHub. */
              type?: string;
              /** The URL associated with the property, when present. */
              url?: string;
              /** The scalar property value returned by SwaggerHub. */
              value?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The registry items extracted from listing.apis. */
        items: Array<{
          /** The SwaggerHub registry item name. */
          name?: string;
          /** The description returned for the registry item. */
          description?: string | null;
          /** The tags returned by SwaggerHub for the registry item. */
          tags?: Array<string>;
          /** The property list returned by SwaggerHub for the registry item. */
          properties?: Array<{
            /** The property type returned by SwaggerHub. */
            type?: string;
            /** The URL associated with the property, when present. */
            url?: string;
            /** The scalar property value returned by SwaggerHub. */
            value?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the versions available for a specific SwaggerHub domain. */
    "swaggerhub.list_domain_versions": {
      input: {
        /**
         * The SwaggerHub owner name.
         * @minLength 1
         */
        owner: string;
        /**
         * The case-sensitive SwaggerHub domain name.
         * @minLength 1
         */
        domainName: string;
      };
      output: {
        /** The raw registry listing returned by SwaggerHub. */
        listing: {
          /** The listing name returned by SwaggerHub. */
          name?: string;
          /** The listing description returned by SwaggerHub. */
          description?: string | null;
          /** The listing URL returned by SwaggerHub. */
          url?: string;
          /** The zero-based result offset. */
          offset?: number;
          /** The total number of matching registry items. */
          totalCount?: number;
          /** The registry items returned by SwaggerHub in APIs.json format. */
          apis?: Array<{
            /** The SwaggerHub registry item name. */
            name?: string;
            /** The description returned for the registry item. */
            description?: string | null;
            /** The tags returned by SwaggerHub for the registry item. */
            tags?: Array<string>;
            /** The property list returned by SwaggerHub for the registry item. */
            properties?: Array<{
              /** The property type returned by SwaggerHub. */
              type?: string;
              /** The URL associated with the property, when present. */
              url?: string;
              /** The scalar property value returned by SwaggerHub. */
              value?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The registry items extracted from listing.apis. */
        items: Array<{
          /** The SwaggerHub registry item name. */
          name?: string;
          /** The description returned for the registry item. */
          description?: string | null;
          /** The tags returned by SwaggerHub for the registry item. */
          tags?: Array<string>;
          /** The property list returned by SwaggerHub for the registry item. */
          properties?: Array<{
            /** The property type returned by SwaggerHub. */
            type?: string;
            /** The URL associated with the property, when present. */
            url?: string;
            /** The scalar property value returned by SwaggerHub. */
            value?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List SwaggerHub APIs that belong to a specific owner. */
    "swaggerhub.list_owner_apis": {
      input: {
        /**
         * The SwaggerHub owner name.
         * @minLength 1
         */
        owner: string;
        /**
         * The zero-based page number to request.
         * @minimum 0
         * @default 0
         */
        page: number;
        /**
         * The maximum number of results to return per page.
         * @minimum 1
         * @maximum 100
         * @default 10
         */
        limit: number;
        /**
         * The sort field used by SwaggerHub registry search endpoints.
         * @default "NAME"
         */
        sort: "NAME" | "UPDATED" | "CREATED" | "OWNER" | "BEST_MATCH" | "TITLE";
        /**
         * The sort order used by SwaggerHub list endpoints.
         * @default "ASC"
         */
        order: "ASC" | "DESC";
      };
      output: {
        /** The raw registry listing returned by SwaggerHub. */
        listing: {
          /** The listing name returned by SwaggerHub. */
          name?: string;
          /** The listing description returned by SwaggerHub. */
          description?: string | null;
          /** The listing URL returned by SwaggerHub. */
          url?: string;
          /** The zero-based result offset. */
          offset?: number;
          /** The total number of matching registry items. */
          totalCount?: number;
          /** The registry items returned by SwaggerHub in APIs.json format. */
          apis?: Array<{
            /** The SwaggerHub registry item name. */
            name?: string;
            /** The description returned for the registry item. */
            description?: string | null;
            /** The tags returned by SwaggerHub for the registry item. */
            tags?: Array<string>;
            /** The property list returned by SwaggerHub for the registry item. */
            properties?: Array<{
              /** The property type returned by SwaggerHub. */
              type?: string;
              /** The URL associated with the property, when present. */
              url?: string;
              /** The scalar property value returned by SwaggerHub. */
              value?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The registry items extracted from listing.apis. */
        items: Array<{
          /** The SwaggerHub registry item name. */
          name?: string;
          /** The description returned for the registry item. */
          description?: string | null;
          /** The tags returned by SwaggerHub for the registry item. */
          tags?: Array<string>;
          /** The property list returned by SwaggerHub for the registry item. */
          properties?: Array<{
            /** The property type returned by SwaggerHub. */
            type?: string;
            /** The URL associated with the property, when present. */
            url?: string;
            /** The scalar property value returned by SwaggerHub. */
            value?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List SwaggerHub domains that belong to a specific owner. */
    "swaggerhub.list_owner_domains": {
      input: {
        /**
         * The SwaggerHub owner name.
         * @minLength 1
         */
        owner: string;
        /**
         * The zero-based page number to request.
         * @minimum 0
         * @default 0
         */
        page: number;
        /**
         * The maximum number of results to return per page.
         * @minimum 1
         * @maximum 100
         * @default 10
         */
        limit: number;
        /**
         * The sort field used by SwaggerHub registry search endpoints.
         * @default "NAME"
         */
        sort: "NAME" | "UPDATED" | "CREATED" | "OWNER" | "BEST_MATCH" | "TITLE";
        /**
         * The sort order used by SwaggerHub list endpoints.
         * @default "ASC"
         */
        order: "ASC" | "DESC";
      };
      output: {
        /** The raw registry listing returned by SwaggerHub. */
        listing: {
          /** The listing name returned by SwaggerHub. */
          name?: string;
          /** The listing description returned by SwaggerHub. */
          description?: string | null;
          /** The listing URL returned by SwaggerHub. */
          url?: string;
          /** The zero-based result offset. */
          offset?: number;
          /** The total number of matching registry items. */
          totalCount?: number;
          /** The registry items returned by SwaggerHub in APIs.json format. */
          apis?: Array<{
            /** The SwaggerHub registry item name. */
            name?: string;
            /** The description returned for the registry item. */
            description?: string | null;
            /** The tags returned by SwaggerHub for the registry item. */
            tags?: Array<string>;
            /** The property list returned by SwaggerHub for the registry item. */
            properties?: Array<{
              /** The property type returned by SwaggerHub. */
              type?: string;
              /** The URL associated with the property, when present. */
              url?: string;
              /** The scalar property value returned by SwaggerHub. */
              value?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The registry items extracted from listing.apis. */
        items: Array<{
          /** The SwaggerHub registry item name. */
          name?: string;
          /** The description returned for the registry item. */
          description?: string | null;
          /** The tags returned by SwaggerHub for the registry item. */
          tags?: Array<string>;
          /** The property list returned by SwaggerHub for the registry item. */
          properties?: Array<{
            /** The property type returned by SwaggerHub. */
            type?: string;
            /** The URL associated with the property, when present. */
            url?: string;
            /** The scalar property value returned by SwaggerHub. */
            value?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List SwaggerHub projects for a specific owner. */
    "swaggerhub.list_projects": {
      input: {
        /**
         * The SwaggerHub owner name.
         * @minLength 1
         */
        owner: string;
        /**
         * Whether SwaggerHub should omit the APIs and domains arrays from the project listing.
         * @default false
         */
        nameOnly: boolean;
        /**
         * The zero-based page number to request.
         * @minimum 0
         * @default 0
         */
        page: number;
        /**
         * The maximum number of results to return per page.
         * @minimum 1
         * @maximum 100
         * @default 10
         */
        limit: number;
        /**
         * The sort order used by SwaggerHub list endpoints.
         * @default "ASC"
         */
        order: "ASC" | "DESC";
      };
      output: {
        /** The raw project listing returned by SwaggerHub. */
        listing: {
          /** The zero-based result offset. */
          offset?: number;
          /** The total number of matching projects. */
          totalCount?: number;
          /** The projects returned by SwaggerHub for the requested owner. */
          projects?: Array<{
            /** The SwaggerHub project name. */
            name?: string;
            /** The SwaggerHub project description returned by the API. */
            description?: string;
            /** The API names included in the project. */
            apis?: Array<string>;
            /** The domain names included in the project. */
            domains?: Array<string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The projects extracted from listing.projects. */
        projects: Array<{
          /** The SwaggerHub project name. */
          name?: string;
          /** The SwaggerHub project description returned by the API. */
          description?: string;
          /** The API names included in the project. */
          apis?: Array<string>;
          /** The domain names included in the project. */
          domains?: Array<string>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the versions available for a specific SwaggerHub template. */
    "swaggerhub.list_template_versions": {
      input: {
        /**
         * The SwaggerHub owner name.
         * @minLength 1
         */
        owner: string;
        /**
         * The SwaggerHub template identifier.
         * @minLength 1
         */
        templateId: string;
      };
      output: {
        /** The raw registry listing returned by SwaggerHub. */
        listing: {
          /** The listing name returned by SwaggerHub. */
          name?: string;
          /** The listing description returned by SwaggerHub. */
          description?: string | null;
          /** The listing URL returned by SwaggerHub. */
          url?: string;
          /** The zero-based result offset. */
          offset?: number;
          /** The total number of matching registry items. */
          totalCount?: number;
          /** The registry items returned by SwaggerHub in APIs.json format. */
          apis?: Array<{
            /** The SwaggerHub registry item name. */
            name?: string;
            /** The description returned for the registry item. */
            description?: string | null;
            /** The tags returned by SwaggerHub for the registry item. */
            tags?: Array<string>;
            /** The property list returned by SwaggerHub for the registry item. */
            properties?: Array<{
              /** The property type returned by SwaggerHub. */
              type?: string;
              /** The URL associated with the property, when present. */
              url?: string;
              /** The scalar property value returned by SwaggerHub. */
              value?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The registry items extracted from listing.apis. */
        items: Array<{
          /** The SwaggerHub registry item name. */
          name?: string;
          /** The description returned for the registry item. */
          description?: string | null;
          /** The tags returned by SwaggerHub for the registry item. */
          tags?: Array<string>;
          /** The property list returned by SwaggerHub for the registry item. */
          properties?: Array<{
            /** The property type returned by SwaggerHub. */
            type?: string;
            /** The URL associated with the property, when present. */
            url?: string;
            /** The scalar property value returned by SwaggerHub. */
            value?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List SwaggerHub templates, optionally filtered by owner. */
    "swaggerhub.list_templates": {
      input: {
        /**
         * The owner name used to filter templates.
         * @minLength 1
         */
        owner?: string;
      };
      output: {
        /** Template summaries extracted from the SwaggerHub response. */
        templates: Array<{
          /** The SwaggerHub template identifier. */
          id?: string;
          /** The title returned for the template. */
          title?: string;
          /** The specification family returned for the template. */
          specification?: string;
          /** Whether the template is built in. */
          builtIn?: boolean;
          /** The default version returned for the template. */
          defaultVersion?: string;
          [key: string]: unknown;
        }>;
        /** The raw template listing payload returned by SwaggerHub. */
        raw: unknown;
      };
    };
    /** Search SwaggerHub APIs using the registry search endpoint. */
    "swaggerhub.search_apis": {
      input: {
        /**
         * The free-text query string used by SwaggerHub search.
         * @minLength 1
         */
        query?: string;
        /**
         * The published-state filter used by SwaggerHub search endpoints.
         * @default "ALL"
         */
        state: "ALL" | "PUBLISHED" | "UNPUBLISHED";
        /**
         * The zero-based page number to request.
         * @minimum 0
         * @default 0
         */
        page: number;
        /**
         * The maximum number of results to return per page.
         * @minimum 1
         * @maximum 100
         * @default 10
         */
        limit: number;
        /**
         * The sort field used by SwaggerHub registry search endpoints.
         * @default "NAME"
         */
        sort: "NAME" | "UPDATED" | "CREATED" | "OWNER" | "BEST_MATCH" | "TITLE";
        /**
         * The sort order used by SwaggerHub list endpoints.
         * @default "ASC"
         */
        order: "ASC" | "DESC";
      };
      output: {
        /** The raw registry listing returned by SwaggerHub. */
        listing: {
          /** The listing name returned by SwaggerHub. */
          name?: string;
          /** The listing description returned by SwaggerHub. */
          description?: string | null;
          /** The listing URL returned by SwaggerHub. */
          url?: string;
          /** The zero-based result offset. */
          offset?: number;
          /** The total number of matching registry items. */
          totalCount?: number;
          /** The registry items returned by SwaggerHub in APIs.json format. */
          apis?: Array<{
            /** The SwaggerHub registry item name. */
            name?: string;
            /** The description returned for the registry item. */
            description?: string | null;
            /** The tags returned by SwaggerHub for the registry item. */
            tags?: Array<string>;
            /** The property list returned by SwaggerHub for the registry item. */
            properties?: Array<{
              /** The property type returned by SwaggerHub. */
              type?: string;
              /** The URL associated with the property, when present. */
              url?: string;
              /** The scalar property value returned by SwaggerHub. */
              value?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The registry items extracted from listing.apis. */
        items: Array<{
          /** The SwaggerHub registry item name. */
          name?: string;
          /** The description returned for the registry item. */
          description?: string | null;
          /** The tags returned by SwaggerHub for the registry item. */
          tags?: Array<string>;
          /** The property list returned by SwaggerHub for the registry item. */
          properties?: Array<{
            /** The property type returned by SwaggerHub. */
            type?: string;
            /** The URL associated with the property, when present. */
            url?: string;
            /** The scalar property value returned by SwaggerHub. */
            value?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search SwaggerHub domains using the registry search endpoint. */
    "swaggerhub.search_domains": {
      input: {
        /**
         * The free-text query string used by SwaggerHub search.
         * @minLength 1
         */
        query?: string;
        /**
         * The published-state filter used by SwaggerHub search endpoints.
         * @default "ALL"
         */
        state: "ALL" | "PUBLISHED" | "UNPUBLISHED";
        /**
         * The zero-based page number to request.
         * @minimum 0
         * @default 0
         */
        page: number;
        /**
         * The maximum number of results to return per page.
         * @minimum 1
         * @maximum 100
         * @default 10
         */
        limit: number;
        /**
         * The sort field used by SwaggerHub registry search endpoints.
         * @default "NAME"
         */
        sort: "NAME" | "UPDATED" | "CREATED" | "OWNER" | "BEST_MATCH" | "TITLE";
        /**
         * The sort order used by SwaggerHub list endpoints.
         * @default "ASC"
         */
        order: "ASC" | "DESC";
      };
      output: {
        /** The raw registry listing returned by SwaggerHub. */
        listing: {
          /** The listing name returned by SwaggerHub. */
          name?: string;
          /** The listing description returned by SwaggerHub. */
          description?: string | null;
          /** The listing URL returned by SwaggerHub. */
          url?: string;
          /** The zero-based result offset. */
          offset?: number;
          /** The total number of matching registry items. */
          totalCount?: number;
          /** The registry items returned by SwaggerHub in APIs.json format. */
          apis?: Array<{
            /** The SwaggerHub registry item name. */
            name?: string;
            /** The description returned for the registry item. */
            description?: string | null;
            /** The tags returned by SwaggerHub for the registry item. */
            tags?: Array<string>;
            /** The property list returned by SwaggerHub for the registry item. */
            properties?: Array<{
              /** The property type returned by SwaggerHub. */
              type?: string;
              /** The URL associated with the property, when present. */
              url?: string;
              /** The scalar property value returned by SwaggerHub. */
              value?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The registry items extracted from listing.apis. */
        items: Array<{
          /** The SwaggerHub registry item name. */
          name?: string;
          /** The description returned for the registry item. */
          description?: string | null;
          /** The tags returned by SwaggerHub for the registry item. */
          tags?: Array<string>;
          /** The property list returned by SwaggerHub for the registry item. */
          properties?: Array<{
            /** The property type returned by SwaggerHub. */
            type?: string;
            /** The URL associated with the property, when present. */
            url?: string;
            /** The scalar property value returned by SwaggerHub. */
            value?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search SwaggerHub registry items across APIs, domains, and templates using the unified /specs listing. */
    "swaggerhub.search_registry_specs": {
      input: {
        /**
         * The free-text query string used by SwaggerHub search.
         * @minLength 1
         */
        query?: string;
        /**
         * The published-state filter used by SwaggerHub search endpoints.
         * @default "ALL"
         */
        state: "ALL" | "PUBLISHED" | "UNPUBLISHED";
        /**
         * The zero-based page number to request.
         * @minimum 0
         * @default 0
         */
        page: number;
        /**
         * The maximum number of results to return per page.
         * @minimum 1
         * @maximum 100
         * @default 10
         */
        limit: number;
        /**
         * The sort field used by SwaggerHub registry search endpoints.
         * @default "NAME"
         */
        sort: "NAME" | "UPDATED" | "CREATED" | "OWNER" | "BEST_MATCH" | "TITLE";
        /**
         * The sort order used by SwaggerHub list endpoints.
         * @default "ASC"
         */
        order: "ASC" | "DESC";
      };
      output: {
        /** The raw registry listing returned by SwaggerHub. */
        listing: {
          /** The listing name returned by SwaggerHub. */
          name?: string;
          /** The listing description returned by SwaggerHub. */
          description?: string | null;
          /** The listing URL returned by SwaggerHub. */
          url?: string;
          /** The zero-based result offset. */
          offset?: number;
          /** The total number of matching registry items. */
          totalCount?: number;
          /** The registry items returned by SwaggerHub in APIs.json format. */
          apis?: Array<{
            /** The SwaggerHub registry item name. */
            name?: string;
            /** The description returned for the registry item. */
            description?: string | null;
            /** The tags returned by SwaggerHub for the registry item. */
            tags?: Array<string>;
            /** The property list returned by SwaggerHub for the registry item. */
            properties?: Array<{
              /** The property type returned by SwaggerHub. */
              type?: string;
              /** The URL associated with the property, when present. */
              url?: string;
              /** The scalar property value returned by SwaggerHub. */
              value?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The registry items extracted from listing.apis. */
        items: Array<{
          /** The SwaggerHub registry item name. */
          name?: string;
          /** The description returned for the registry item. */
          description?: string | null;
          /** The tags returned by SwaggerHub for the registry item. */
          tags?: Array<string>;
          /** The property list returned by SwaggerHub for the registry item. */
          properties?: Array<{
            /** The property type returned by SwaggerHub. */
            type?: string;
            /** The URL associated with the property, when present. */
            url?: string;
            /** The scalar property value returned by SwaggerHub. */
            value?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
