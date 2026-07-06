import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Statamic site license with an optional domain or domains. */
    "statamic.create_site": {
      input: {
        /**
         * The display name of the Statamic site.
         * @minLength 1
         */
        name: string;
        /**
         * A domain to license for the Statamic site.
         * @minLength 1
         */
        domain?: string;
        /**
         * The domains to license for the Statamic site. The first domain is treated as production.
         * @minItems 1
         */
        domains?: Array<string>;
      };
      output: {
        /** A normalized Statamic site. */
        site: {
          /** The site name returned by Statamic. */
          name: string;
          /** The site key returned by Statamic. */
          key: string;
          /** The licensed domains returned by Statamic. */
          domains: Array<string>;
          /** The site creation timestamp returned by Statamic. */
          createdAt: string | null;
          /** The raw site object returned by Statamic. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete a Statamic site by site key. */
    "statamic.delete_site": {
      input: {
        /**
         * The Statamic site key.
         * @minLength 1
         */
        key: string;
      };
      output: {
        /** The deletion message returned by Statamic. */
        message: string;
      };
    };
    /** List Statamic sites available in the authenticated statamic.com account. */
    "statamic.list_sites": {
      input: Record<string, never>;
      output: {
        /** The Statamic sites returned by the API. */
        sites: Array<{
          /** The site name returned by Statamic. */
          name: string;
          /** The site key returned by Statamic. */
          key: string;
          /** The licensed domains returned by Statamic. */
          domains: Array<string>;
          /** The site creation timestamp returned by Statamic. */
          createdAt: string | null;
          /** The raw site object returned by Statamic. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Update a Statamic site name or replace its licensed domain list. */
    "statamic.update_site": {
      input: {
        /**
         * The Statamic site key.
         * @minLength 1
         */
        key: string;
        /**
         * The display name of the Statamic site.
         * @minLength 1
         */
        name?: string;
        /**
         * A domain to license for the Statamic site.
         * @minLength 1
         */
        domain?: string;
        /**
         * The domains to license for the Statamic site. The first domain is treated as production.
         * @minItems 1
         */
        domains?: Array<string>;
      };
      output: {
        /** A normalized Statamic site. */
        site: {
          /** The site name returned by Statamic. */
          name: string;
          /** The site key returned by Statamic. */
          key: string;
          /** The licensed domains returned by Statamic. */
          domains: Array<string>;
          /** The site creation timestamp returned by Statamic. */
          createdAt: string | null;
          /** The raw site object returned by Statamic. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
