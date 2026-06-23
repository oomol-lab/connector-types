import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add one or more tags to a Getnote note. */
    "getnote.add_note_tags": {
      input: {
        /**
         * Getnote note ID. Treat this as a string because upstream IDs are int64.
         * @minLength 1
         */
        noteId: string;
        /**
         * Tag names to add.
         * @minItems 1
         */
        tags: Array<string>;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** Add up to 20 notes to one Getnote knowledge base. Subscribed knowledge bases are read-only unless the user is an admin. */
    "getnote.add_notes_to_knowledge_base": {
      input: {
        /**
         * Getnote knowledge base topic ID.
         * @minLength 1
         */
        topicId: string;
        /**
         * Note IDs to add.
         * @minItems 1
         * @maxItems 20
         */
        noteIds: Array<string>;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Getnote knowledge base. Upstream limits creation to 50 per day. */
    "getnote.create_knowledge_base": {
      input: {
        /**
         * Knowledge base name.
         * @minLength 1
         */
        name: string;
        /** Knowledge base description. */
        description?: string;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Raw upstream object returned by Getnote. */
        topic: Record<string, unknown>;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** Move a Getnote note to trash. */
    "getnote.delete_note": {
      input: {
        /**
         * Getnote note ID. Treat this as a string because upstream IDs are int64.
         * @minLength 1
         */
        noteId: string;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** Subscribe a Dedao live channel link into one Getnote knowledge base. Upstream currently supports Dedao App live links. */
    "getnote.follow_live": {
      input: {
        /**
         * Getnote knowledge base topic ID.
         * @minLength 1
         */
        topicId: string;
        /**
         * Dedao live link to subscribe.
         * @format uri
         */
        link: string;
        /** Optional upstream platform value. */
        platform?: string;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Raw upstream object returned by Getnote. */
        item: Record<string, unknown>;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Getnote blogger content detail, including original text when returned. */
    "getnote.get_blogger_content": {
      input: {
        /**
         * Getnote knowledge base topic ID.
         * @minLength 1
         */
        topicId: string;
        /**
         * Blogger post ID alias returned by list_blogger_contents.
         * @minLength 1
         */
        postId: string;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Raw upstream object returned by Getnote. */
        item: Record<string, unknown>;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Getnote live detail, including AI summary and transcript when returned. */
    "getnote.get_live_detail": {
      input: {
        /**
         * Getnote knowledge base topic ID.
         * @minLength 1
         */
        topicId: string;
        /**
         * Live ID returned by list_knowledge_base_lives.
         * @minLength 1
         */
        liveId: string;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Raw upstream object returned by Getnote. */
        item: Record<string, unknown>;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Getnote note detail, including fields that are not present in lists. */
    "getnote.get_note": {
      input: {
        /**
         * Getnote note ID. Treat this as a string because upstream IDs are int64.
         * @minLength 1
         */
        noteId: string;
        /** Set to `original` to request original image links. */
        imageQuality?: "original";
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Detailed note object returned by Getnote. */
        note: {
          /**
           * Getnote note ID. Treat this as a string because upstream IDs are int64.
           * @minLength 1
           */
          noteId?: string;
          /** String value returned by Getnote. */
          title?: string | null;
          /** String value returned by Getnote. */
          content?: string | null;
          /** String value returned by Getnote. */
          noteType?: string | null;
          /** Raw upstream object returned by Getnote. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** Check the progress of an asynchronous Getnote link or image save task. */
    "getnote.get_save_task": {
      input: {
        /**
         * Getnote asynchronous save task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Task status returned by Getnote. */
        status: string;
        /** String value returned by Getnote. */
        noteId: string | null;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** List content items for a subscribed blogger in a Getnote knowledge base. */
    "getnote.list_blogger_contents": {
      input: {
        /**
         * Getnote knowledge base topic ID.
         * @minLength 1
         */
        topicId: string;
        /**
         * Blogger follow ID returned by list_knowledge_base_bloggers.
         * @minLength 1
         */
        followId: string;
        /**
         * Page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Items returned by Getnote. */
        items: Array<Record<string, unknown>>;
        /** Boolean value returned by Getnote. */
        hasMore: boolean | null;
        /** Number value returned by Getnote. */
        page: number | null;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** List bloggers subscribed in one Getnote knowledge base. */
    "getnote.list_knowledge_base_bloggers": {
      input: {
        /**
         * Getnote knowledge base topic ID.
         * @minLength 1
         */
        topicId: string;
        /**
         * Page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Items returned by Getnote. */
        items: Array<Record<string, unknown>>;
        /** Boolean value returned by Getnote. */
        hasMore: boolean | null;
        /** Number value returned by Getnote. */
        page: number | null;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** List completed live sessions in one Getnote knowledge base. */
    "getnote.list_knowledge_base_lives": {
      input: {
        /**
         * Getnote knowledge base topic ID.
         * @minLength 1
         */
        topicId: string;
        /**
         * Page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Items returned by Getnote. */
        items: Array<Record<string, unknown>>;
        /** Boolean value returned by Getnote. */
        hasMore: boolean | null;
        /** Number value returned by Getnote. */
        page: number | null;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** List notes in one Getnote knowledge base. */
    "getnote.list_knowledge_base_notes": {
      input: {
        /**
         * Getnote knowledge base topic ID.
         * @minLength 1
         */
        topicId: string;
        /**
         * Page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Notes in the knowledge base. */
        notes: Array<{
          /**
           * Getnote note ID. Treat this as a string because upstream IDs are int64.
           * @minLength 1
           */
          noteId: string;
          /** String value returned by Getnote. */
          title: string | null;
          /** String value returned by Getnote. */
          content: string | null;
          /** String value returned by Getnote. */
          noteType: string | null;
          /** Tags returned for the note. */
          tags: Array<Record<string, unknown>>;
          /** Knowledge base topics returned for the note. */
          topics: Array<Record<string, unknown>>;
          /** String value returned by Getnote. */
          createdAt: string | null;
          /** String value returned by Getnote. */
          updatedAt: string | null;
          /** Raw upstream object returned by Getnote. */
          raw: Record<string, unknown>;
        }>;
        /** Boolean value returned by Getnote. */
        hasMore: boolean | null;
        /** Number value returned by Getnote. */
        page: number | null;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** List knowledge bases owned by the authenticated Getnote account. */
    "getnote.list_knowledge_bases": {
      input: {
        /**
         * Page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Knowledge bases returned by Getnote. */
        topics: Array<{
          /** String value returned by Getnote. */
          topicId: string | null;
          /** String value returned by Getnote. */
          name: string | null;
          /** String value returned by Getnote. */
          description: string | null;
          /** Number value returned by Getnote. */
          noteCount: number | null;
          /** String value returned by Getnote. */
          createdAt: string | null;
          /** Raw upstream object returned by Getnote. */
          raw: Record<string, unknown>;
        }>;
        /** Number value returned by Getnote. */
        total: number | null;
        /** Boolean value returned by Getnote. */
        hasMore: boolean | null;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** List tags attached to one Getnote note. */
    "getnote.list_note_tags": {
      input: {
        /**
         * Getnote note ID. Treat this as a string because upstream IDs are int64.
         * @minLength 1
         */
        noteId: string;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** String value returned by Getnote. */
        noteId: string | null;
        /** Tags attached to the note. */
        tags: Array<{
          /** String value returned by Getnote. */
          id: string | null;
          /** String value returned by Getnote. */
          name: string | null;
          /** String value returned by Getnote. */
          type: string | null;
          /** Raw upstream object returned by Getnote. */
          raw: Record<string, unknown>;
        }>;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** List recent Getnote notes using the official cursor pagination endpoint. */
    "getnote.list_notes": {
      input: {
        /** Pagination cursor returned by the previous page. */
        cursor?: string;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Notes returned by Getnote. */
        notes: Array<{
          /**
           * Getnote note ID. Treat this as a string because upstream IDs are int64.
           * @minLength 1
           */
          noteId: string;
          /** String value returned by Getnote. */
          title: string | null;
          /** String value returned by Getnote. */
          content: string | null;
          /** String value returned by Getnote. */
          noteType: string | null;
          /** Tags returned for the note. */
          tags: Array<Record<string, unknown>>;
          /** Knowledge base topics returned for the note. */
          topics: Array<Record<string, unknown>>;
          /** String value returned by Getnote. */
          createdAt: string | null;
          /** String value returned by Getnote. */
          updatedAt: string | null;
          /** Raw upstream object returned by Getnote. */
          raw: Record<string, unknown>;
        }>;
        /** Whether another page is available. */
        hasMore: boolean;
        /** String value returned by Getnote. */
        cursor: string | null;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** List knowledge bases subscribed by the authenticated Getnote account. These are read-only unless the user is an admin. */
    "getnote.list_subscribed_knowledge_bases": {
      input: {
        /**
         * Page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Knowledge bases returned by Getnote. */
        topics: Array<{
          /** String value returned by Getnote. */
          topicId: string | null;
          /** String value returned by Getnote. */
          name: string | null;
          /** String value returned by Getnote. */
          description: string | null;
          /** Number value returned by Getnote. */
          noteCount: number | null;
          /** String value returned by Getnote. */
          createdAt: string | null;
          /** Raw upstream object returned by Getnote. */
          raw: Record<string, unknown>;
        }>;
        /** Number value returned by Getnote. */
        total: number | null;
        /** Boolean value returned by Getnote. */
        hasMore: boolean | null;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** Remove one Getnote tag by tag ID. System tags cannot be deleted upstream. */
    "getnote.remove_note_tag": {
      input: {
        /**
         * Getnote note ID. Treat this as a string because upstream IDs are int64.
         * @minLength 1
         */
        noteId: string;
        /**
         * Tag ID to remove, as returned by list_note_tags or note detail.
         * @minLength 1
         */
        tagId: string;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** Remove notes from one Getnote knowledge base. */
    "getnote.remove_notes_from_knowledge_base": {
      input: {
        /**
         * Getnote knowledge base topic ID.
         * @minLength 1
         */
        topicId: string;
        /**
         * Note IDs to remove.
         * @minItems 1
         */
        noteIds: Array<string>;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** Save a plain-text, link, or image-URL note to Getnote. Plain text and Getnote share links are synchronous; regular links and image notes may return tasks. */
    "getnote.save_note": {
      input: {
        /** The note type to save. */
        noteType?: "plain_text" | "link" | "img_text";
        /** Optional note title. */
        title?: string;
        /** Markdown content or image note description. */
        content?: string;
        /** Tag names to attach to the note. */
        tags?: Array<string>;
        /** Parent note ID. Treat this as a string because upstream IDs are int64. */
        parentId?: string;
        /**
         * URL to save when noteType is `link`.
         * @format uri
         */
        linkUrl?: string;
        /**
         * Image URLs to save when noteType is `img_text`; use URLs from Getnote upload tokens or other accessible image URLs.
         * @minItems 1
         * @maxItems 9
         */
        imageUrls?: Array<string>;
        /** Knowledge base topic ID to save the note into. */
        topicId?: string;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** String value returned by Getnote. */
        noteId: string | null;
        /** String value returned by Getnote. */
        title: string | null;
        /** String value returned by Getnote. */
        createdAt: string | null;
        /** String value returned by Getnote. */
        updatedAt: string | null;
        /** Asynchronous save tasks returned by Getnote. */
        tasks: Array<{
          /**
           * Getnote asynchronous save task ID.
           * @minLength 1
           */
          taskId: string;
          /** String value returned by Getnote. */
          url: string | null;
          /** String value returned by Getnote. */
          status: string | null;
          /** Raw upstream object returned by Getnote. */
          raw: Record<string, unknown>;
        }>;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** Run Getnote semantic search globally, or within one knowledge base when topicId is provided. */
    "getnote.search_notes": {
      input: {
        /**
         * Natural language search query.
         * @minLength 1
         */
        query: string;
        /** Knowledge base topic ID for scoped search. */
        topicId?: string;
        /**
         * Maximum number of results to return. Getnote allows up to 10.
         * @maximum 10
         * @exclusiveMinimum 0
         */
        topK?: number;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Search results returned by Getnote. */
        results: Array<{
          /** String value returned by Getnote. */
          noteId: string | null;
          /** String value returned by Getnote. */
          noteType: string | null;
          /** String value returned by Getnote. */
          title: string | null;
          /** String value returned by Getnote. */
          content: string | null;
          /** Number value returned by Getnote. */
          score: number | null;
          /** String value returned by Getnote. */
          createdAt: string | null;
          /** Raw upstream object returned by Getnote. */
          raw: Record<string, unknown>;
        }>;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** Generate or retrieve the idempotent public share link for a Getnote note. */
    "getnote.share_note": {
      input: {
        /**
         * Getnote note ID. Treat this as a string because upstream IDs are int64.
         * @minLength 1
         */
        noteId: string;
        /** Whether to exclude audio from the public share. */
        excludeAudio?: boolean;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** String value returned by Getnote. */
        noteId: string | null;
        /** String value returned by Getnote. */
        shareId: string | null;
        /** String value returned by Getnote. */
        shareUrl: string | null;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a Getnote note title, plain-text content, or tags. Tags replace the existing tag list. */
    "getnote.update_note": {
      input: {
        /**
         * Getnote note ID. Treat this as a string because upstream IDs are int64.
         * @minLength 1
         */
        noteId: string;
        /** New note title. */
        title?: string;
        /** New note content. Upstream only supports this for plain-text notes. */
        content?: string;
        /** Replacement tag names. */
        tags?: Array<string>;
      };
      output: {
        /** Whether Getnote reported success. */
        success: boolean;
        /** Raw upstream object returned by Getnote. */
        raw: Record<string, unknown>;
      };
    };
  }
}
