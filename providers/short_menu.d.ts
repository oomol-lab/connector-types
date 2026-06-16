import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Short Menu short link. */
    "short_menu.create_link": {
      input: {
        /**
         * Destination URL to shorten.
         * @format uri
         */
        destinationUrl: string;
        /**
         * Domain name to use for the short link.
         * @minLength 1
         */
        domain: string;
        /** Custom slug to assign to the short link. Pass an empty string to let Short Menu generate a random slug. */
        slug?: string;
        /** Tags to attach when creating the short link. */
        tags: Array<{
          /** Short Menu tag identifier, when available. */
          id?: string;
          /**
           * Tag name assigned to the short link.
           * @minLength 1
           */
          name: string;
        }>;
      };
      output: {
        /**
         * Short Menu short link identifier.
         * @minLength 1
         */
        id: string;
        /** Timestamp when the short link was created. */
        createdAt: string;
        /**
         * Destination URL that the short link redirects to.
         * @minLength 1
         */
        destinationUrl: string;
        /** Resolved title returned by Short Menu, when available. */
        title?: string;
        /**
         * Path slug used by the short link.
         * @minLength 1
         */
        slug: string;
        /** Short Menu domain object. */
        domain: {
          /**
           * Short Menu domain identifier.
           * @minLength 1
           */
          id: string;
          /**
           * Domain name used for the short link.
           * @minLength 1
           */
          name: string;
        };
        /**
         * Full short URL returned by Short Menu.
         * @minLength 1
         */
        shortUrl: string;
        /** Click count returned by Short Menu, when available. */
        clickCount?: number;
        /** Tags assigned to the short link. */
        tags: Array<{
          /** Short Menu tag identifier, when available. */
          id?: string;
          /**
           * Tag name assigned to the short link.
           * @minLength 1
           */
          name: string;
        }>;
      };
    };
    /** Delete an existing Short Menu short link. */
    "short_menu.delete_link": {
      input: {
        /**
         * Identifier of the short link to delete.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /**
         * Identifier of the short link that was deleted.
         * @minLength 1
         */
        id: string;
        /** Whether the short link was deleted successfully. */
        deleted: boolean;
      };
    };
    /** Update an existing Short Menu short link. */
    "short_menu.update_link": {
      input: {
        /**
         * Identifier of the short link to update.
         * @minLength 1
         */
        id: string;
        /**
         * Updated destination URL for the short link.
         * @format uri
         */
        destinationUrl?: string;
        /** Replacement tag list for the short link. */
        tags?: Array<{
          /** Short Menu tag identifier, when available. */
          id?: string;
          /**
           * Tag name assigned to the short link.
           * @minLength 1
           */
          name: string;
        }>;
      };
      output: {
        /**
         * Short Menu short link identifier.
         * @minLength 1
         */
        id: string;
        /** Timestamp when the short link was created. */
        createdAt: string;
        /**
         * Destination URL that the short link redirects to.
         * @minLength 1
         */
        destinationUrl: string;
        /** Resolved title returned by Short Menu, when available. */
        title?: string;
        /**
         * Path slug used by the short link.
         * @minLength 1
         */
        slug: string;
        /** Short Menu domain object. */
        domain: {
          /**
           * Short Menu domain identifier.
           * @minLength 1
           */
          id: string;
          /**
           * Domain name used for the short link.
           * @minLength 1
           */
          name: string;
        };
        /**
         * Full short URL returned by Short Menu.
         * @minLength 1
         */
        shortUrl: string;
        /** Click count returned by Short Menu, when available. */
        clickCount?: number;
        /** Tags assigned to the short link. */
        tags: Array<{
          /** Short Menu tag identifier, when available. */
          id?: string;
          /**
           * Tag name assigned to the short link.
           * @minLength 1
           */
          name: string;
        }>;
      };
    };
  }
}
