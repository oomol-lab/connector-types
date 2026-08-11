import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Appcircle Build profiles for the connected organization. */
    "appcircle.list_build_profiles": {
      input: {
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of profiles to request per page.
         * @minimum 1
         */
        size?: number;
        /** A profile name search term. */
        search?: string;
      };
      output: {
        /** The Appcircle profiles returned by the module. */
        profiles: Array<Record<string, unknown>>;
        /** The current result page when supplied by Appcircle. */
        page: number | null;
        /** The result page size when supplied by Appcircle. */
        size: number | null;
        /** The total matching profile count when supplied by Appcircle. */
        totalCount: number | null;
      };
    };
    /** List Appcircle Testing Distribution profiles for the connected organization. */
    "appcircle.list_distribution_profiles": {
      input: {
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of profiles to request per page.
         * @minimum 1
         */
        size?: number;
        /** A profile name search term. */
        search?: string;
      };
      output: {
        /** The Appcircle profiles returned by the module. */
        profiles: Array<Record<string, unknown>>;
        /** The current result page when supplied by Appcircle. */
        page: number | null;
        /** The result page size when supplied by Appcircle. */
        size: number | null;
        /** The total matching profile count when supplied by Appcircle. */
        totalCount: number | null;
      };
    };
    /** List Appcircle Enterprise App Store profiles for the connected organization. */
    "appcircle.list_enterprise_store_profiles": {
      input: {
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of profiles to request per page.
         * @minimum 1
         */
        size?: number;
        /** A profile name search term. */
        search?: string;
      };
      output: {
        /** The Appcircle profiles returned by the module. */
        profiles: Array<Record<string, unknown>>;
        /** The current result page when supplied by Appcircle. */
        page: number | null;
        /** The result page size when supplied by Appcircle. */
        size: number | null;
        /** The total matching profile count when supplied by Appcircle. */
        totalCount: number | null;
      };
    };
    /** List Appcircle organizations available to the connected API key. */
    "appcircle.list_organizations": {
      input: {
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of organizations to request per page.
         * @minimum 1
         */
        perPage?: number;
        /** An organization name search term. */
        search?: string;
      };
      output: {
        /** The organizations available to the connected API key. */
        organizations: Array<{
          /** The unique organization identifier when supplied by Appcircle. */
          id?: string;
          /** The organization name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** The current result page when supplied by Appcircle. */
        page: number | null;
        /** The number of organizations per page when supplied by Appcircle. */
        perPage: number | null;
        /** The total matching organization count when supplied by Appcircle. */
        total: number | null;
      };
    };
  }
}
