import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a tagged and optionally shortened link in a Terminus project. */
    "terminus_app.create_link": {
      input: {
        /**
         * The Terminus project ID, starting with prj_.
         * @minLength 5
         * @pattern ^prj_
         */
        projectId: string;
        /**
         * The destination URL.
         * @format uri
         */
        url: string;
        /** A convention and the values for its fields. */
        convention?: {
          /** The convention ID. */
          id: number;
          /**
           * Values for the convention fields.
           * @minItems 1
           */
          inputFields: Array<{
            /** The convention field ID. */
            fieldId: number;
            /** The input value for the convention field. */
            inputValue: string;
          }>;
        };
        /** UTM values not supplied by a convention. */
        utm?: {
          /** A UTM parameter value. */
          campaign?: {
            /** The UTM parameter value. */
            tag: string;
          };
          /** A UTM parameter value. */
          medium?: {
            /** The UTM parameter value. */
            tag: string;
          };
          /** A UTM parameter value. */
          source?: {
            /** The UTM parameter value. */
            tag: string;
          };
          /** A UTM parameter value. */
          content?: {
            /** The UTM parameter value. */
            tag: string;
          };
          /** A UTM parameter value. */
          term?: {
            /** The UTM parameter value. */
            tag: string;
          };
        };
        /** Values keyed by the configured Terminus field or custom parameter name. */
        custom?: Record<string, {
            /** The UTM parameter value. */
            tag: string;
          }>;
        /** Values keyed by the configured Terminus field or custom parameter name. */
        info?: Record<string, {
            /** The UTM parameter value. */
            tag: string;
          }>;
        /** Labels to apply to the link. */
        labelNames?: Array<string>;
        /** A description for the link. */
        description?: string;
        /** Whether to skip URL monitoring. */
        skipMonitoring?: boolean;
        /** A custom short URL key. */
        shortUrlKey?: string;
        /** Whether to skip destination URL validation. */
        skipUrlValidation?: boolean;
      };
      output: {
        /** A tracked Terminus link. */
        link: {
          /** The link ID. */
          id?: number;
          /** The destination URL. */
          url?: string;
          /** The destination URL with generated tracking parameters. */
          long_url?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Terminus convention and its field definitions. */
    "terminus_app.get_convention": {
      input: {
        /**
         * The Terminus project ID, starting with prj_.
         * @minLength 5
         * @pattern ^prj_
         */
        projectId: string;
        /** The convention ID. */
        conventionId: number;
      };
      output: {
        /** A Terminus convention and its field definitions. */
        convention: {
          /** The convention ID. */
          id?: number;
          /** The convention name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List tracking conventions configured for a Terminus project. */
    "terminus_app.list_conventions": {
      input: {
        /**
         * The Terminus project ID, starting with prj_.
         * @minLength 5
         * @pattern ^prj_
         */
        projectId: string;
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page.
         * @minimum 1
         * @maximum 100
         */
        items?: number;
      };
      output: {
        /** Conventions returned by Terminus. */
        conventions: Array<{
          /** The convention ID. */
          id?: number;
          /** The convention name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Terminus. */
        meta: {
          /** The current page number. */
          page?: number;
          /** Whether another page is available. */
          has_more?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** List tracked links in a Terminus project. */
    "terminus_app.list_links": {
      input: {
        /**
         * The Terminus project ID, starting with prj_.
         * @minLength 5
         * @pattern ^prj_
         */
        projectId: string;
        /**
         * Return links created after this Unix timestamp.
         * @minimum 0
         */
        createdAfter?: number;
        /**
         * Return links updated after this Unix timestamp.
         * @minimum 0
         */
        updatedAfter?: number;
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page.
         * @minimum 1
         * @maximum 100
         */
        items?: number;
      };
      output: {
        /** Links returned by Terminus. */
        links: Array<{
          /** The link ID. */
          id?: number;
          /** The destination URL. */
          url?: string;
          /** The destination URL with generated tracking parameters. */
          long_url?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Terminus. */
        meta: {
          /** The current page number. */
          page?: number;
          /** Whether another page is available. */
          has_more?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** List the Terminus projects available to the connected API key. */
    "terminus_app.list_projects": {
      input: {
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page.
         * @minimum 1
         * @maximum 100
         */
        items?: number;
      };
      output: {
        /** Projects returned by Terminus. */
        projects: Array<{
          /** The permanent project ID. */
          id?: string;
          /** The project name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Terminus. */
        meta: {
          /** The current page number. */
          page?: number;
          /** Whether another page is available. */
          has_more?: boolean;
          [key: string]: unknown;
        };
      };
    };
  }
}
