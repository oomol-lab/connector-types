import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Shorten.REST alias for one or more destination URLs. */
    "shorten_rest.create_alias": {
      input: {
        /**
         * The domain name without http://, https://, or a trailing slash.
         * @minLength 1
         */
        domainName?: string;
        /**
         * The alias value without a leading slash.
         * @minLength 1
         */
        aliasName?: string;
        /**
         * The destination URLs for the alias. At least one destination is required when creating an alias.
         * @minItems 1
         */
        destinations: Array<{
          /**
           * The destination URL where the alias redirects.
           * @format uri
           */
          url: string;
          /**
           * The ISO alpha-2 country code for this destination.
           * @minLength 1
           */
          country?: string;
          /**
           * The operating system selector for this destination.
           * @minLength 1
           */
          os?: string;
        }>;
        /** The metatag overrides for the alias. */
        metatags?: Array<{
          /**
           * The metatag name.
           * @minLength 1
           */
          name: string;
          /**
           * The metatag content.
           * @minLength 1
           */
          content: string;
        }>;
        /** The tracking snippet overrides for the alias. */
        snippets?: Array<{
          /**
           * The snippet identifier.
           * @minLength 1
           */
          id: string;
          /** The snippet parameters as string key-value pairs. */
          parameters?: Record<string, string>;
        }>;
      };
      output: {
        /** The generated or requested alias name. */
        aliasName: string;
        /** The domain name for the short URL. */
        domainName: string;
        /**
         * The complete short URL.
         * @format uri
         */
        shortUrl: string;
      };
    };
    /** Delete one Shorten.REST alias by alias name and optional domain. */
    "shorten_rest.delete_alias": {
      input: {
        /**
         * The domain name without http://, https://, or a trailing slash.
         * @minLength 1
         */
        domainName?: string;
        /**
         * The alias value without a leading slash.
         * @minLength 1
         */
        aliasName: string;
      };
      output: {
        /** Whether Shorten.REST accepted the deletion. */
        success: boolean;
      };
    };
    /** Get detailed information for one Shorten.REST alias. */
    "shorten_rest.get_alias": {
      input: {
        /**
         * The domain name without http://, https://, or a trailing slash.
         * @minLength 1
         */
        domainName?: string;
        /**
         * The alias value without a leading slash.
         * @minLength 1
         */
        aliasName: string;
      };
      output: {
        /** A Shorten.REST alias returned by the API. */
        alias: {
          /** The alias name. */
          name: string;
          /** The domain name for the alias. */
          domainName?: string;
          /** The alias creation timestamp in Unix milliseconds. */
          createdAt?: number;
          /** The alias update timestamp in Unix milliseconds. */
          updatedAt?: number;
          /** The destination URLs configured on the alias. */
          destinations?: Array<{
            /**
             * The destination URL where the alias redirects.
             * @format uri
             */
            url: string;
            /**
             * The ISO alpha-2 country code for this destination.
             * @minLength 1
             */
            country?: string;
            /**
             * The operating system selector for this destination.
             * @minLength 1
             */
            os?: string;
          }>;
          /** The metatag overrides configured on the alias. */
          metatags?: Array<{
            /**
             * The metatag name.
             * @minLength 1
             */
            name: string;
            /**
             * The metatag content.
             * @minLength 1
             */
            content: string;
          }>;
          /** The tracking snippet overrides configured on the alias. */
          snippets?: Array<{
            /**
             * The snippet identifier.
             * @minLength 1
             */
            id: string;
            /** The snippet parameters as string key-value pairs. */
            parameters?: Record<string, string>;
          }>;
        } | null;
      };
    };
    /** List Shorten.REST alias names for a domain with official pagination. */
    "shorten_rest.list_aliases": {
      input: {
        /**
         * The domain name without http://, https://, or a trailing slash.
         * @minLength 1
         */
        domainName?: string;
        /**
         * The previous response lastId value used to fetch the next page.
         * @minLength 1
         */
        continueFrom?: string;
        /**
         * The maximum number of records to return, from 1 to 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The alias names returned for the selected domain. */
        aliases: Array<string>;
        /** The last alias ID for fetching the next page. */
        lastId?: string;
      };
    };
    /** List raw Shorten.REST click records with official pagination. */
    "shorten_rest.list_clicks": {
      input: {
        /**
         * The previous response lastId value used to fetch the next page.
         * @minLength 1
         */
        continueFrom?: string;
        /**
         * The maximum number of records to return, from 1 to 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The click records returned by Shorten.REST. */
        clicks: Array<{
          /** The visitor country code. */
          country?: string;
          /** The visitor operating system. */
          os?: string;
          /** The click creation timestamp in Unix milliseconds. */
          createdAt?: number;
          /** The clicked domain. */
          domain?: string;
          /** The internal alias identifier. */
          aliasId?: string;
          /** The clicked alias name. */
          alias?: string;
          /** The resolved destination URL. */
          destination?: string;
          /** The visitor user agent. */
          userAgent?: string;
          /** The visitor browser. */
          browser?: string;
          /** The referrer URL. */
          referrer?: string;
        }>;
        /** The last click ID for fetching the next page. */
        lastId?: string;
      };
    };
    /** Update destinations, metatags, or snippets on an existing Shorten.REST alias. */
    "shorten_rest.update_alias": {
      input: {
        /**
         * The domain name without http://, https://, or a trailing slash.
         * @minLength 1
         */
        domainName?: string;
        /**
         * The alias value without a leading slash.
         * @minLength 1
         */
        aliasName: string;
        /**
         * The destination URLs for the alias. At least one destination is required when creating an alias.
         * @minItems 1
         */
        destinations?: Array<{
          /**
           * The destination URL where the alias redirects.
           * @format uri
           */
          url: string;
          /**
           * The ISO alpha-2 country code for this destination.
           * @minLength 1
           */
          country?: string;
          /**
           * The operating system selector for this destination.
           * @minLength 1
           */
          os?: string;
        }>;
        /** The metatag overrides for the alias. */
        metatags?: Array<{
          /**
           * The metatag name.
           * @minLength 1
           */
          name: string;
          /**
           * The metatag content.
           * @minLength 1
           */
          content: string;
        }>;
        /** The tracking snippet overrides for the alias. */
        snippets?: Array<{
          /**
           * The snippet identifier.
           * @minLength 1
           */
          id: string;
          /** The snippet parameters as string key-value pairs. */
          parameters?: Record<string, string>;
        }>;
      };
      output: {
        /** Whether Shorten.REST accepted the update. */
        success: boolean;
      };
    };
  }
}
