import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new bookmark in Linkhut without replacing an existing bookmark. */
    "linkhut.add_bookmark": {
      input: {
        /**
         * The bookmark URL.
         * @minLength 1
         */
        url: string;
        /**
         * The bookmark title or description.
         * @minLength 1
         */
        description: string;
        /** The tags string to store for the bookmark. */
        tags?: string;
        /** Whether the bookmark should be public. */
        shared?: boolean | "yes" | "no";
        /** Whether the bookmark should be marked as unread. */
        toread?: boolean | "yes" | "no";
        /** The optional extended note for the bookmark. */
        extended?: string;
      };
      output: {
        /** The result code returned by Linkhut. */
        result_code: string;
      };
    };
    /** Delete a Linkhut bookmark by URL. */
    "linkhut.delete_bookmark": {
      input: {
        /**
         * The bookmark URL to delete.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** The result code returned by Linkhut. */
        result_code: string;
      };
    };
    /** List all Linkhut tags with their bookmark counts. */
    "linkhut.get_all_tags": {
      input: Record<string, never>;
      output: {
        /** The tags returned by Linkhut. */
        tags: Array<{
          /** The tag name. */
          name: string;
          /**
           * The number of bookmarks using this tag.
           * @minimum 0
           */
          count: number;
        }>;
      };
    };
    /** List Linkhut bookmarks using the official bookmark filters. */
    "linkhut.get_bookmarks": {
      input: {
        /** The ISO 8601 UTC timestamp used to filter bookmarks by date. */
        dt?: string;
        /** The tag filter string. Multiple tags can be separated by spaces. */
        tag?: string;
        /** The exact bookmarked URL to fetch. */
        url?: string;
        /** Whether Linkhut should include metadata in the response. */
        meta?: boolean | "yes" | "no";
      };
      output: {
        /** The bookmarks returned by Linkhut. */
        bookmarks: Array<{
          /** The bookmarked URL. */
          url: string;
          /** The stable Linkhut hash for the bookmark. */
          hash: string;
          /** The bookmark title or description. */
          description: string;
          /** The extended note stored for the bookmark. */
          extended?: string;
          /** The raw space-separated tags string. */
          tags?: string;
          /** The timestamp when the bookmark was saved. */
          time: string;
          /** Whether the bookmark is public. */
          shared: boolean;
          /** Whether the bookmark is marked as unread. */
          toread: boolean;
          /** The optional metadata payload returned by Linkhut. */
          meta?: unknown;
        }>;
      };
    };
    /** Update an existing Linkhut bookmark by URL. */
    "linkhut.update_bookmark": {
      input: {
        /**
         * The bookmark URL.
         * @minLength 1
         */
        url: string;
        /**
         * The bookmark title or description.
         * @minLength 1
         */
        description: string;
        /** The tags string to store for the bookmark. */
        tags?: string;
        /** Whether the bookmark should be public. */
        shared?: boolean | "yes" | "no";
        /** Whether the bookmark should be marked as unread. */
        toread?: boolean | "yes" | "no";
        /** The optional extended note for the bookmark. */
        extended?: string;
      };
      output: {
        /** The result code returned by Linkhut. */
        result_code: string;
      };
    };
  }
}
