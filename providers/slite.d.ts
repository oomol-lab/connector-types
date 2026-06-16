import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Slite note with markdown or HTML content and optional collection attributes. */
    "slite.create_note": {
      input: {
        /**
         * The title of the note to create.
         * @minLength 1
         */
        title: string;
        /**
         * Optional parent note identifier. When omitted, Slite creates the note in the personal channel.
         * @minLength 1
         */
        parentNoteId?: string;
        /**
         * Optional Slite template identifier to apply to the new note.
         * @minLength 1
         */
        templateId?: string;
        /**
         * Optional Markdown content used to populate the new note.
         * @minLength 1
         */
        markdown?: string;
        /**
         * Optional HTML content used to populate the new note.
         * @minLength 1
         */
        html?: string;
        /** Optional collection attribute values ordered by the parent collection columns. */
        attributes?: Array<string | null>;
      };
      output: {
        /**
         * The Slite note identifier.
         * @minLength 1
         */
        id: string;
        /** The Slite note title. */
        title: string;
        /**
         * The absolute Slite URL for the note.
         * @minLength 1
         */
        url: string;
        /**
         * The ISO timestamp when the note was created.
         * @format date-time
         */
        createdAt: string;
        /**
         * The ISO timestamp when the note metadata was last updated.
         * @format date-time
         */
        updatedAt: string;
        /**
         * The ISO timestamp when the note content was last edited.
         * @format date-time
         */
        lastEditedAt: string;
        /** The parent note identifier, or null when the note is at the root level. */
        parentNoteId: string | null;
        /**
         * The ISO timestamp when the note was archived, or null when it is active.
         * @format date-time
         */
        archivedAt: string | null;
        /** The collection attribute values attached to the note when Slite returns them. */
        attributes: Array<string> | null;
        /** The collection column names attached to the note when Slite returns them. */
        columns: Array<string> | null;
        /** The optional icon color returned by Slite. */
        iconColor: string | null;
        /** The optional icon identifier returned by Slite. */
        iconShape: string | null;
        /** The review owner metadata attached to a note when Slite returns it. */
        owner: {
          /** The user owner identifier when the note is owned by a user. */
          userId?: string | null;
          /** The group owner identifier when the note is owned by a group. */
          groupId?: string | null;
        } | null;
        /** The Slite review state filter. */
        reviewState: "Verified" | "Outdated" | "VerificationRequested" | "VerificationExpired" | null;
      };
    };
    /** Delete a Slite note and its children by note identifier. */
    "slite.delete_note": {
      input: {
        /**
         * The Slite note identifier to delete.
         * @minLength 1
         */
        noteId: string;
      };
      output: {
        /** Whether the note deletion request completed successfully. */
        success: boolean;
      };
    };
    /** Read one Slite group by identifier. */
    "slite.get_group": {
      input: {
        /**
         * The Slite group identifier to fetch.
         * @minLength 1
         */
        groupId: string;
      };
      output: {
        /**
         * The Slite group identifier.
         * @minLength 1
         */
        id: string;
        /** The Slite group name. */
        name: string;
        /** The Slite group description. */
        description: string;
      };
    };
    /** Read one Slite note and return its content in Markdown, HTML, or SliteML. */
    "slite.get_note": {
      input: {
        /**
         * The Slite note identifier to fetch.
         * @minLength 1
         */
        noteId: string;
        /** The content format Slite should return. */
        format?: "md" | "html" | "sliteml";
      };
      output: {
        /**
         * The Slite note identifier.
         * @minLength 1
         */
        id: string;
        /** The Slite note title. */
        title: string;
        /**
         * The absolute Slite URL for the note.
         * @minLength 1
         */
        url: string;
        /**
         * The ISO timestamp when the note was created.
         * @format date-time
         */
        createdAt: string;
        /**
         * The ISO timestamp when the note metadata was last updated.
         * @format date-time
         */
        updatedAt: string;
        /**
         * The ISO timestamp when the note content was last edited.
         * @format date-time
         */
        lastEditedAt: string;
        /** The parent note identifier, or null when the note is at the root level. */
        parentNoteId: string | null;
        /**
         * The ISO timestamp when the note was archived, or null when it is active.
         * @format date-time
         */
        archivedAt: string | null;
        /** The collection attribute values attached to the note when Slite returns them. */
        attributes: Array<string> | null;
        /** The collection column names attached to the note when Slite returns them. */
        columns: Array<string> | null;
        /** The optional icon color returned by Slite. */
        iconColor: string | null;
        /** The optional icon identifier returned by Slite. */
        iconShape: string | null;
        /** The review owner metadata attached to a note when Slite returns it. */
        owner: {
          /** The user owner identifier when the note is owned by a user. */
          userId?: string | null;
          /** The group owner identifier when the note is owned by a group. */
          groupId?: string | null;
        } | null;
        /** The Slite review state filter. */
        reviewState: "Verified" | "Outdated" | "VerificationRequested" | "VerificationExpired" | null;
        /** The note content returned in the requested Slite format. */
        content: string;
      };
    };
    /** List Slite notes with optional owner, parent, ordering, and pagination filters. */
    "slite.list_notes": {
      input: {
        /**
         * Optional Slite user identifier used to filter notes by owner.
         * @minLength 1
         */
        ownerId?: string;
        /**
         * Optional Slite parent note identifier used to list direct child notes.
         * @minLength 1
         */
        parentNoteId?: string;
        /** The ordering applied to the returned notes. */
        orderBy?: "lastEditedAt_DESC" | "lastEditedAt_ASC" | "listPosition_DESC" | "listPosition_ASC";
        /**
         * Optional pagination cursor returned by a previous list_notes call.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Whether Slite has another page of notes to fetch. */
        hasNextPage: boolean;
        /** The cursor for the next page, or null when finished. */
        nextCursor: string | null;
        /** The total number of notes matching the query. */
        total: number;
        /** The note summaries returned by Slite. */
        notes: Array<{
          /**
           * The Slite note identifier.
           * @minLength 1
           */
          id: string;
          /** The Slite note title. */
          title: string;
          /**
           * The absolute Slite URL for the note.
           * @minLength 1
           */
          url: string;
          /**
           * The ISO timestamp when the note was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * The ISO timestamp when the note metadata was last updated.
           * @format date-time
           */
          updatedAt: string;
          /**
           * The ISO timestamp when the note content was last edited.
           * @format date-time
           */
          lastEditedAt: string;
          /** The parent note identifier, or null when the note is at the root level. */
          parentNoteId: string | null;
          /**
           * The ISO timestamp when the note was archived, or null when it is active.
           * @format date-time
           */
          archivedAt: string | null;
          /** The collection attribute values attached to the note when Slite returns them. */
          attributes: Array<string> | null;
          /** The collection column names attached to the note when Slite returns them. */
          columns: Array<string> | null;
          /** The optional icon color returned by Slite. */
          iconColor: string | null;
          /** The optional icon identifier returned by Slite. */
          iconShape: string | null;
          /** The review owner metadata attached to a note when Slite returns it. */
          owner: {
            /** The user owner identifier when the note is owned by a user. */
            userId?: string | null;
            /** The group owner identifier when the note is owned by a group. */
            groupId?: string | null;
          } | null;
          /** The Slite review state filter. */
          reviewState: "Verified" | "Outdated" | "VerificationRequested" | "VerificationExpired" | null;
        }>;
      };
    };
    /** Search Slite groups by name and return cursor-based pagination metadata. */
    "slite.search_groups": {
      input: {
        /**
         * The group name query string to match.
         * @minLength 1
         */
        query: string;
        /**
         * Optional pagination cursor returned by Slite group search.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The groups returned by Slite for the current query. */
        groups: Array<{
          /**
           * The Slite group identifier.
           * @minLength 1
           */
          id: string;
          /** The Slite group name. */
          name: string;
          /** The Slite group description. */
          description: string;
        }>;
        /** The total number of matching Slite groups. */
        total: number;
        /** Whether Slite has another page of groups to fetch. */
        hasNextPage: boolean;
        /** The cursor for the next group page, or null when finished. */
        nextCursor: string | null;
      };
    };
    /** Search Slite notes by query string and optional review, depth, archive, and date filters. */
    "slite.search_notes": {
      input: {
        /** The free-text query used to search notes. */
        query?: string;
        /**
         * Optional parent note identifier used to restrict search to a subtree.
         * @minLength 1
         */
        parentNoteId?: string;
        /**
         * Optional note depth filter applied by Slite.
         * @minimum 0
         */
        depth?: number;
        /** The Slite review state filter. */
        reviewState?: "Verified" | "Outdated" | "VerificationRequested" | "VerificationExpired";
        /**
         * The zero-based results page to request from Slite.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of hits to request per page.
         * @minimum 1
         * @maximum 100
         */
        hitsPerPage?: number;
        /** Optional HTML tag inserted before highlighted matches. */
        highlightPreTag?: string;
        /** Optional HTML tag inserted after highlighted matches. */
        highlightPostTag?: string;
        /**
         * Optional ISO timestamp used to restrict results to notes edited after this moment.
         * @format date-time
         */
        lastEditedAfter?: string;
        /**
         * Optional ISO timestamp used to restrict results to notes updated after this moment.
         * @format date-time
         */
        lastUpdatedAfter?: string;
        /** Whether Slite should include archived notes in the search results. */
        includeArchived?: boolean;
      };
      output: {
        /** The total number of pages returned by Slite for the current search. */
        nbPages: number;
        /** The current results page returned by Slite. */
        page: number;
        /** The matching note hits returned by Slite. */
        hits: Array<{
          /**
           * The Slite note identifier.
           * @minLength 1
           */
          id: string;
          /** The Slite note title. */
          title: string;
          /** The Slite note type returned by search. */
          type: "rich_text" | "collection" | "discussion";
          /** The excerpt that matched the search query. */
          highlight: string;
          /**
           * The ISO timestamp when the note metadata was last updated.
           * @format date-time
           */
          updatedAt: string;
          /**
           * The ISO timestamp when the note content was last edited.
           * @format date-time
           */
          lastEditedAt: string;
          /**
           * The ISO timestamp when the note was archived, or null when it is active.
           * @format date-time
           */
          archivedAt: string | null;
          /** The optional icon color returned by Slite. */
          iconColor: string | null;
          /** The optional icon identifier returned by Slite. */
          iconShape: string | null;
          /** The parent note breadcrumb trail returned by Slite search. */
          parentNotes: Array<{
            /**
             * The parent note identifier.
             * @minLength 1
             */
            id: string;
            /** The parent note title. */
            title: string;
          }>;
          /** The Slite review state filter. */
          reviewState: "Verified" | "Outdated" | "VerificationRequested" | "VerificationExpired" | null;
        }>;
      };
    };
    /** Update a Slite note title, body content, or collection attributes. */
    "slite.update_note": {
      input: {
        /**
         * The Slite note identifier to update.
         * @minLength 1
         */
        noteId: string;
        /**
         * The new title for the note.
         * @minLength 1
         */
        title?: string;
        /**
         * The new Markdown content for the note.
         * @minLength 1
         */
        markdown?: string;
        /**
         * The new HTML content for the note.
         * @minLength 1
         */
        html?: string;
        /** The replacement collection attribute values ordered by the parent collection columns. */
        attributes?: Array<string | null>;
      };
      output: {
        /**
         * The Slite note identifier.
         * @minLength 1
         */
        id: string;
        /** The Slite note title. */
        title: string;
        /**
         * The absolute Slite URL for the note.
         * @minLength 1
         */
        url: string;
        /**
         * The ISO timestamp when the note was created.
         * @format date-time
         */
        createdAt: string;
        /**
         * The ISO timestamp when the note metadata was last updated.
         * @format date-time
         */
        updatedAt: string;
        /**
         * The ISO timestamp when the note content was last edited.
         * @format date-time
         */
        lastEditedAt: string;
        /** The parent note identifier, or null when the note is at the root level. */
        parentNoteId: string | null;
        /**
         * The ISO timestamp when the note was archived, or null when it is active.
         * @format date-time
         */
        archivedAt: string | null;
        /** The collection attribute values attached to the note when Slite returns them. */
        attributes: Array<string> | null;
        /** The collection column names attached to the note when Slite returns them. */
        columns: Array<string> | null;
        /** The optional icon color returned by Slite. */
        iconColor: string | null;
        /** The optional icon identifier returned by Slite. */
        iconShape: string | null;
        /** The review owner metadata attached to a note when Slite returns it. */
        owner: {
          /** The user owner identifier when the note is owned by a user. */
          userId?: string | null;
          /** The group owner identifier when the note is owned by a group. */
          groupId?: string | null;
        } | null;
        /** The Slite review state filter. */
        reviewState: "Verified" | "Outdated" | "VerificationRequested" | "VerificationExpired" | null;
      };
    };
  }
}
