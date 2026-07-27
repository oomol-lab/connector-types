import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add or replace a Pinboard bookmark. */
    "pinboard.add_bookmark": {
      input: {
        /**
         * The URL to bookmark.
         * @format uri
         */
        url: string;
        /**
         * The bookmark title. Pinboard calls this field description.
         * @minLength 1
         * @maxLength 255
         */
        title: string;
        /**
         * The optional bookmark description or extended text.
         * @maxLength 65536
         */
        description?: string;
        /**
         * Pinboard tags to match or attach. Multiple tags are joined with spaces for the upstream API.
         * @minItems 1
         * @maxItems 100
         */
        tags?: Array<string>;
        /**
         * The bookmark creation time in UTC.
         * @format date-time
         */
        createdAt?: string;
        /** Whether to replace an existing bookmark for the same URL. */
        replace?: boolean;
        /** Whether to make the bookmark public. */
        shared?: boolean;
        /** Whether to mark the bookmark as unread. */
        toRead?: boolean;
      };
      output: {
        /** The result code returned by Pinboard. */
        resultCode: string;
      };
    };
    /** Delete a Pinboard bookmark by URL. */
    "pinboard.delete_bookmark": {
      input: {
        /**
         * The bookmarked URL to delete.
         * @format uri
         */
        url: string;
      };
      output: {
        /** The result code returned by Pinboard. */
        resultCode: string;
      };
    };
    /** Get Pinboard bookmarks for a URL, date, or up to three tags using the posts/get endpoint. */
    "pinboard.get_bookmarks": {
      input: {
        /**
         * Return the bookmark for this exact URL.
         * @format uri
         */
        url?: string;
        /**
         * Up to three tags to filter by. Pinboard treats multiple tags as a combined tag filter.
         * @minItems 1
         * @maxItems 3
         */
        tags?: Array<string>;
        /**
         * Return bookmarks created on this UTC date.
         * @format date
         */
        date?: string;
        /** Whether to include Pinboard change detection signatures. */
        includeMeta?: boolean;
      };
      output: {
        /** The Pinboard bookmarks returned by the endpoint. */
        bookmarks: Array<{
          /**
           * The bookmarked URL.
           * @format uri
           */
          url: string;
          /** The bookmark title. */
          title: string;
          /** The optional bookmark description or extended text. */
          description?: string;
          /** The bookmark tags. */
          tags: Array<string>;
          /**
           * The bookmark creation time returned by Pinboard.
           * @format date-time
           */
          createdAt?: string;
          /** The Pinboard bookmark hash. */
          hash?: string;
          /** The optional Pinboard change detection signature. */
          meta?: string;
          /** Whether the bookmark is public. */
          shared?: boolean;
          /** Whether the bookmark is marked as unread. */
          toRead?: boolean;
          /** The number of other Pinboard users who saved the same URL. */
          others?: number;
        }>;
        /** The Pinboard response date or timestamp for this list. */
        date?: string;
        /** The Pinboard username associated with the response. */
        user?: string;
      };
    };
    /** Get the most recent time a Pinboard bookmark was added, updated, or deleted. */
    "pinboard.get_last_update": {
      input: Record<string, never>;
      output: {
        /**
         * The most recent bookmark update time returned by Pinboard.
         * @format date-time
         */
        updateTime: string;
      };
    };
    /** List the user's most recent Pinboard bookmarks, optionally filtered by one tag. */
    "pinboard.list_recent_bookmarks": {
      input: {
        /**
         * A tag to filter by.
         * @minLength 1
         * @maxLength 255
         */
        tag?: string;
        /**
         * The number of bookmarks to return. Pinboard allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
      };
      output: {
        /** The Pinboard bookmarks returned by the endpoint. */
        bookmarks: Array<{
          /**
           * The bookmarked URL.
           * @format uri
           */
          url: string;
          /** The bookmark title. */
          title: string;
          /** The optional bookmark description or extended text. */
          description?: string;
          /** The bookmark tags. */
          tags: Array<string>;
          /**
           * The bookmark creation time returned by Pinboard.
           * @format date-time
           */
          createdAt?: string;
          /** The Pinboard bookmark hash. */
          hash?: string;
          /** The optional Pinboard change detection signature. */
          meta?: string;
          /** Whether the bookmark is public. */
          shared?: boolean;
          /** Whether the bookmark is marked as unread. */
          toRead?: boolean;
          /** The number of other Pinboard users who saved the same URL. */
          others?: number;
        }>;
        /** The Pinboard response date or timestamp for this list. */
        date?: string;
        /** The Pinboard username associated with the response. */
        user?: string;
      };
    };
    /** List the user's Pinboard tags and bookmark counts. */
    "pinboard.list_tags": {
      input: Record<string, never>;
      output: {
        /** The Pinboard tags returned by the account. */
        tags: Array<{
          /**
           * A Pinboard tag. Tags may not contain commas or whitespace.
           * @minLength 1
           * @maxLength 255
           */
          tag: string;
          /**
           * The number of bookmarks using this tag.
           * @minimum 0
           */
          count: number;
        }>;
      };
    };
  }
}
