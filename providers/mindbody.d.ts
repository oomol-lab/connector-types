import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List businesses from the Mindbody Consumer API Business Directory, optionally filtered by business IDs. */
    "mindbody.list_businesses": {
      input: {
        /**
         * The Mindbody Business Directory page number to request. Mindbody defaults this to 1.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * Mindbody business IDs to restrict results to.
         * @minItems 1
         */
        businessIds?: Array<string>;
      };
      output: {
        /** The total number of result pages returned by Mindbody. */
        pageCount: number | null;
        /** The businesses returned by Mindbody. */
        businesses: Array<{
          /** The ID of the business. */
          id?: unknown;
          /** The name of the business. */
          name?: string | null;
          /** The website URL of the business. */
          websiteUrl?: string | null;
          /** The locations of the business. */
          locations?: Array<{
            /** The ID of the business location. */
            id?: unknown;
            /** The name of the business location. */
            name?: string | null;
            /** The first line of the business location's street address. */
            addressLine1?: string | null;
            /** The second line of the business location's street address, if returned. */
            addressLine2?: string | null;
            /** The business location's city. */
            city?: string | null;
            /** The business location's state or province code. */
            stateProvCode?: string | null;
            /** The business location's postal code. */
            postalCode?: string | null;
            /** The business location's country code. */
            countryCode?: string | null;
            /** The booking URL for the business location. */
            bookingUrl?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
