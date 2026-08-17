import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add tags to a mymind object. */
    "mymind.add_object_tags": {
      input: {
        /**
         * The mymind object identifier.
         * @minLength 1
         */
        objectId: string;
        /**
         * Tag names.
         * @minItems 1
         */
        tags: Array<string>;
      };
      output: {
        /** The tagged object identifier. */
        objectId: string;
        /** Whether mymind accepted the change. */
        acknowledged: boolean;
      };
    };
    /** Put a mymind object into a space. */
    "mymind.add_object_to_space": {
      input: {
        /**
         * The mymind space identifier.
         * @minLength 1
         */
        spaceId: string;
        /**
         * The mymind object identifier.
         * @minLength 1
         */
        objectId: string;
      };
      output: {
        /** The space identifier. */
        spaceId: string;
        /** Whether mymind accepted the change. */
        acknowledged: boolean;
      };
    };
    /** Link one mymind object to another. */
    "mymind.create_link": {
      input: {
        /**
         * The object the link starts from.
         * @minLength 1
         */
        sourceId: string;
        /**
         * The object the link points to.
         * @minLength 1
         */
        targetId: string;
      };
      output: {
        /** A link between two mymind objects. */
        link: {
          /** The link identifier. */
          id?: string;
          /** How the link was made, either WikiLink or Manual. */
          type?: string;
          /** The object the link starts from. */
          sourceId?: string;
          /** The object the link points to. */
          targetId?: string;
          /** Bit flags mymind sets on the link. */
          flags?: number;
          [key: string]: unknown;
        };
        /** Whether a new link was created, or false when the link already existed. */
        created: boolean;
      };
    };
    /** Create a note in a mind from markdown content. */
    "mymind.create_note": {
      input: {
        /**
         * The note body as markdown.
         * @minLength 1
         */
        content: string;
        /** The note title. */
        title?: string;
        /**
         * Tag names.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * Identifiers of spaces the object belongs to.
         * @minItems 1
         */
        spaceIds?: Array<string>;
      };
      output: {
        /** A mymind object, which is anything saved to a mind: a page, image, file, or note. */
        object: {
          /** The object identifier. */
          id?: string;
          /** The display title, set by the user or derived from the source or content. */
          title?: string;
          /** The summary mymind generated for the object. */
          summary?: string;
          /** An inline content body. */
          content?: {
            /** The content media type, either text/markdown or application/prose+json. */
            type?: string;
            /** The content body in the declared media type. */
            body?: string;
            [key: string]: unknown;
          };
          /** Where the object came from, including the original URL. */
          source?: Record<string, unknown>;
          /** The tags on the object. */
          tags?: Array<{
            /** The tag identifier. */
            id?: string;
            /** The tag name. */
            name?: string;
            /** Bit flags mymind sets on the tag. */
            flags?: number;
            [key: string]: unknown;
          }>;
          /** The spaces the object belongs to. */
          spaces?: Array<Record<string, unknown>>;
          /** The notes attached to the object. */
          notes?: Array<Record<string, unknown>>;
          /** The stored media for an uploaded file, when the object has one. */
          blob?: Record<string, unknown>;
          /** The screenshot captured when the object was saved. */
          screenshot?: Record<string, unknown>;
          /** The primary entity the object is about. */
          mainEntity?: Record<string, unknown>;
          /** When the object was created. */
          created?: string;
          /** When the object was last modified. */
          modified?: string;
          /** When the object was last bumped. */
          bumped?: string;
          /** When the object was soft-deleted; absent while the object is live. */
          deleted?: string;
          [key: string]: unknown;
        };
        /** Whether a new object was created, or false when mymind matched an existing duplicate. */
        created: boolean;
      };
    };
    /** Attach a markdown note to a mymind object. */
    "mymind.create_object_note": {
      input: {
        /**
         * The mymind object identifier.
         * @minLength 1
         */
        objectId: string;
        /**
         * The note body as markdown.
         * @minLength 1
         */
        content: string;
      };
      output: {
        /** The object the note is attached to. */
        objectId: string;
        /** The new note identifier. */
        noteId: string;
      };
    };
    /** Create a mymind space, optionally seeded with objects. */
    "mymind.create_space": {
      input: {
        /**
         * The space name.
         * @minLength 1
         */
        name: string;
        /**
         * The space colour.
         * @minLength 1
         */
        color?: string;
        /**
         * Objects to put in the new space.
         * @minItems 1
         */
        objectIds?: Array<string>;
      };
      output: {
        /** The space identifier. */
        id?: string;
        /** The space name. */
        name?: string;
        /** The space colour. */
        color?: string;
        /** When the space was created. */
        created?: string;
        /** The objects in the space, returned when a single space is read. */
        objects?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Delete a manual link. A wiki-style link cannot be deleted directly; remove the reference from the source note instead. */
    "mymind.delete_link": {
      input: {
        /**
         * The link identifier.
         * @minLength 1
         */
        linkId: string;
      };
      output: {
        /** The deleted link identifier. */
        linkId: string;
        /** Whether mymind accepted the change. */
        acknowledged: boolean;
      };
    };
    /** Soft-delete a mymind object. Use restore_object to bring it back. */
    "mymind.delete_object": {
      input: {
        /**
         * The mymind object identifier.
         * @minLength 1
         */
        objectId: string;
      };
      output: {
        /** The deleted object identifier. */
        objectId: string;
        /** Whether mymind accepted the change. */
        acknowledged: boolean;
      };
    };
    /** Delete a note attached to a mymind object. */
    "mymind.delete_object_note": {
      input: {
        /**
         * The mymind object identifier.
         * @minLength 1
         */
        objectId: string;
        /**
         * The note identifier.
         * @minLength 1
         */
        noteId: string;
      };
      output: {
        /** The deleted note identifier. */
        noteId: string;
        /** Whether mymind accepted the change. */
        acknowledged: boolean;
      };
    };
    /** Delete a mymind space. The objects it held stay in the mind. */
    "mymind.delete_space": {
      input: {
        /**
         * The mymind space identifier.
         * @minLength 1
         */
        spaceId: string;
      };
      output: {
        /** The deleted space identifier. */
        spaceId: string;
        /** Whether mymind accepted the change. */
        acknowledged: boolean;
      };
    };
    /** Get one mymind object with its title, summary, tags, spaces, notes, and source. */
    "mymind.get_object": {
      input: {
        /**
         * The mymind object identifier.
         * @minLength 1
         */
        objectId: string;
      };
      output: {
        /** The object identifier. */
        id?: string;
        /** The display title, set by the user or derived from the source or content. */
        title?: string;
        /** The summary mymind generated for the object. */
        summary?: string;
        /** An inline content body. */
        content?: {
          /** The content media type, either text/markdown or application/prose+json. */
          type?: string;
          /** The content body in the declared media type. */
          body?: string;
          [key: string]: unknown;
        };
        /** Where the object came from, including the original URL. */
        source?: Record<string, unknown>;
        /** The tags on the object. */
        tags?: Array<{
          /** The tag identifier. */
          id?: string;
          /** The tag name. */
          name?: string;
          /** Bit flags mymind sets on the tag. */
          flags?: number;
          [key: string]: unknown;
        }>;
        /** The spaces the object belongs to. */
        spaces?: Array<Record<string, unknown>>;
        /** The notes attached to the object. */
        notes?: Array<Record<string, unknown>>;
        /** The stored media for an uploaded file, when the object has one. */
        blob?: Record<string, unknown>;
        /** The screenshot captured when the object was saved. */
        screenshot?: Record<string, unknown>;
        /** The primary entity the object is about. */
        mainEntity?: Record<string, unknown>;
        /** When the object was created. */
        created?: string;
        /** When the object was last modified. */
        modified?: string;
        /** When the object was last bumped. */
        bumped?: string;
        /** When the object was soft-deleted; absent while the object is live. */
        deleted?: string;
        [key: string]: unknown;
      };
    };
    /** Get the content body of a mymind object as markdown. Many objects are saved without an inline body — a bookmark or an image is the whole object — and those come back empty rather than as an error. */
    "mymind.get_object_content": {
      input: {
        /**
         * The mymind object identifier.
         * @minLength 1
         */
        objectId: string;
      };
      output: {
        /** The object the content belongs to. */
        objectId: string;
        /** The content body as markdown, empty when the object carries no inline body. */
        markdown: string;
        /** Whether the object carries an inline content body at all. */
        hasContent: boolean;
      };
    };
    /** Get one mymind space and the objects it holds. */
    "mymind.get_space": {
      input: {
        /**
         * The mymind space identifier.
         * @minLength 1
         */
        spaceId: string;
      };
      output: {
        /** The space identifier. */
        id?: string;
        /** The space name. */
        name?: string;
        /** The space colour. */
        color?: string;
        /** When the space was created. */
        created?: string;
        /** The objects in the space, returned when a single space is read. */
        objects?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List the links between objects in a mind, both wiki-style references and manual links. */
    "mymind.list_links": {
      input: Record<string, never>;
      output: {
        /** The links. */
        links: Array<{
          /** The link identifier. */
          id?: string;
          /** How the link was made, either WikiLink or Manual. */
          type?: string;
          /** The object the link starts from. */
          sourceId?: string;
          /** The object the link points to. */
          targetId?: string;
          /** Bit flags mymind sets on the link. */
          flags?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List objects in a mind, optionally narrowed to a text query, a space, specific identifiers, or objects similar to one you already have. */
    "mymind.list_objects": {
      input: {
        /**
         * A text query to narrow the list.
         * @minLength 1
         */
        query?: string;
        /**
         * Specific object identifiers to fetch.
         * @minItems 1
         */
        objectIds?: Array<string>;
        /**
         * The mymind space identifier.
         * @minLength 1
         */
        spaceId?: string;
        /**
         * An object identifier to rank the results by similarity to.
         * @minLength 1
         */
        similarTo?: string;
        /**
         * How many objects to return.
         * @minimum 1
         * @maximum 1000
         * @default 50
         */
        limit?: number;
      };
      output: {
        /** The objects. */
        objects: Array<{
          /** The object identifier. */
          id?: string;
          /** The display title, set by the user or derived from the source or content. */
          title?: string;
          /** The summary mymind generated for the object. */
          summary?: string;
          /** An inline content body. */
          content?: {
            /** The content media type, either text/markdown or application/prose+json. */
            type?: string;
            /** The content body in the declared media type. */
            body?: string;
            [key: string]: unknown;
          };
          /** Where the object came from, including the original URL. */
          source?: Record<string, unknown>;
          /** The tags on the object. */
          tags?: Array<{
            /** The tag identifier. */
            id?: string;
            /** The tag name. */
            name?: string;
            /** Bit flags mymind sets on the tag. */
            flags?: number;
            [key: string]: unknown;
          }>;
          /** The spaces the object belongs to. */
          spaces?: Array<Record<string, unknown>>;
          /** The notes attached to the object. */
          notes?: Array<Record<string, unknown>>;
          /** The stored media for an uploaded file, when the object has one. */
          blob?: Record<string, unknown>;
          /** The screenshot captured when the object was saved. */
          screenshot?: Record<string, unknown>;
          /** The primary entity the object is about. */
          mainEntity?: Record<string, unknown>;
          /** When the object was created. */
          created?: string;
          /** When the object was last modified. */
          modified?: string;
          /** When the object was last bumped. */
          bumped?: string;
          /** When the object was soft-deleted; absent while the object is live. */
          deleted?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the spaces in a mind. The objects in each space are returned by get_space. */
    "mymind.list_spaces": {
      input: Record<string, never>;
      output: {
        /** The spaces. */
        spaces: Array<{
          /** The space identifier. */
          id?: string;
          /** The space name. */
          name?: string;
          /** The space colour. */
          color?: string;
          /** When the space was created. */
          created?: string;
          /** The objects in the space, returned when a single space is read. */
          objects?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the tags in a mind, most recently used first. */
    "mymind.list_tags": {
      input: {
        /**
         * How many tags to return.
         * @minimum 1
         * @maximum 10000
         * @default 1000
         */
        limit?: number;
      };
      output: {
        /** The tags, most recently used first. */
        tags: Array<{
          /** The tag name. */
          name?: string;
          /** How many objects carry the tag. */
          count?: number;
          /** Bit flags mymind sets on the tag. */
          flags?: number;
          /** When the tag was last used. */
          modified?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Pin a mymind object, optionally into a specific slot. */
    "mymind.pin_object": {
      input: {
        /**
         * The mymind object identifier.
         * @minLength 1
         */
        objectId: string;
        /**
         * The zero-based slot to pin the object into.
         * @minimum 0
         */
        position?: number;
      };
      output: {
        /** The pinned object identifier. */
        objectId: string;
        /** Whether mymind accepted the change. */
        acknowledged: boolean;
      };
    };
    /** Take a mymind object out of a space. The object stays in the mind. */
    "mymind.remove_object_from_space": {
      input: {
        /**
         * The mymind space identifier.
         * @minLength 1
         */
        spaceId: string;
        /**
         * The mymind object identifier.
         * @minLength 1
         */
        objectId: string;
      };
      output: {
        /** The space identifier. */
        spaceId: string;
        /** Whether mymind accepted the change. */
        acknowledged: boolean;
      };
    };
    /** Remove tags from a mymind object. */
    "mymind.remove_object_tags": {
      input: {
        /**
         * The mymind object identifier.
         * @minLength 1
         */
        objectId: string;
        /**
         * Tag names.
         * @minItems 1
         */
        tags: Array<string>;
      };
      output: {
        /** The untagged object identifier. */
        objectId: string;
        /** Whether mymind accepted the change. */
        acknowledged: boolean;
      };
    };
    /** Restore a soft-deleted mymind object. */
    "mymind.restore_object": {
      input: {
        /**
         * The mymind object identifier.
         * @minLength 1
         */
        objectId: string;
      };
      output: {
        /** The restored object identifier. */
        objectId: string;
        /** Whether mymind accepted the change. */
        acknowledged: boolean;
      };
    };
    /** Save a URL to a mind. mymind fetches the page itself and fills in the title, summary, tags, and screenshot. */
    "mymind.save_url": {
      input: {
        /**
         * The public http or https URL to save.
         * @format uri
         */
        url: string;
        /** A title to use instead of the one mymind derives from the page. */
        title?: string;
        /**
         * Tag names.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * Identifiers of spaces the object belongs to.
         * @minItems 1
         */
        spaceIds?: Array<string>;
      };
      output: {
        /** A mymind object, which is anything saved to a mind: a page, image, file, or note. */
        object: {
          /** The object identifier. */
          id?: string;
          /** The display title, set by the user or derived from the source or content. */
          title?: string;
          /** The summary mymind generated for the object. */
          summary?: string;
          /** An inline content body. */
          content?: {
            /** The content media type, either text/markdown or application/prose+json. */
            type?: string;
            /** The content body in the declared media type. */
            body?: string;
            [key: string]: unknown;
          };
          /** Where the object came from, including the original URL. */
          source?: Record<string, unknown>;
          /** The tags on the object. */
          tags?: Array<{
            /** The tag identifier. */
            id?: string;
            /** The tag name. */
            name?: string;
            /** Bit flags mymind sets on the tag. */
            flags?: number;
            [key: string]: unknown;
          }>;
          /** The spaces the object belongs to. */
          spaces?: Array<Record<string, unknown>>;
          /** The notes attached to the object. */
          notes?: Array<Record<string, unknown>>;
          /** The stored media for an uploaded file, when the object has one. */
          blob?: Record<string, unknown>;
          /** The screenshot captured when the object was saved. */
          screenshot?: Record<string, unknown>;
          /** The primary entity the object is about. */
          mainEntity?: Record<string, unknown>;
          /** When the object was created. */
          created?: string;
          /** When the object was last modified. */
          modified?: string;
          /** When the object was last bumped. */
          bumped?: string;
          /** When the object was soft-deleted; absent while the object is live. */
          deleted?: string;
          [key: string]: unknown;
        };
        /** Whether a new object was created, or false when mymind matched an existing duplicate. */
        created: boolean;
      };
    };
    /** Search a mind and return the matching objects with their relevance scores. Supports keyword syntax (quoted phrases, && || -, wildcards, and field filters such as tag:, type:, domain:, created:) and, with semantic enabled, matching by meaning rather than exact terms. */
    "mymind.search_objects": {
      input: {
        /**
         * The search query, for example `tag:reading && action:read && completed:false` or `"design systems"`.
         * @minLength 1
         */
        query: string;
        /**
         * How many matches to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit?: number;
        /**
         * Whether to match by meaning rather than exact terms.
         * @default false
         */
        semantic?: boolean;
        /** A multiplier applied to semantic relevance when scoring. */
        semanticBoost?: number;
        /**
         * An object identifier to find similar content for. Setting it turns on semantic matching.
         * @minLength 1
         */
        similarTo?: string;
        /**
         * Whether to re-score matches with a cross-encoder for precision. Turns on semantic matching and caps results at 100.
         * @default false
         */
        rerank?: boolean;
      };
      output: {
        /** The matches, most relevant first. */
        matches: Array<{
          /** The matched object identifier. */
          id?: string;
          /** The relevance score mymind assigned. */
          score?: number;
          /** The semantic relevance score, present for a semantic or reranked search. */
          semanticScore?: number;
          /** A mymind object, which is anything saved to a mind: a page, image, file, or note. */
          object?: {
            /** The object identifier. */
            id?: string;
            /** The display title, set by the user or derived from the source or content. */
            title?: string;
            /** The summary mymind generated for the object. */
            summary?: string;
            /** An inline content body. */
            content?: {
              /** The content media type, either text/markdown or application/prose+json. */
              type?: string;
              /** The content body in the declared media type. */
              body?: string;
              [key: string]: unknown;
            };
            /** Where the object came from, including the original URL. */
            source?: Record<string, unknown>;
            /** The tags on the object. */
            tags?: Array<{
              /** The tag identifier. */
              id?: string;
              /** The tag name. */
              name?: string;
              /** Bit flags mymind sets on the tag. */
              flags?: number;
              [key: string]: unknown;
            }>;
            /** The spaces the object belongs to. */
            spaces?: Array<Record<string, unknown>>;
            /** The notes attached to the object. */
            notes?: Array<Record<string, unknown>>;
            /** The stored media for an uploaded file, when the object has one. */
            blob?: Record<string, unknown>;
            /** The screenshot captured when the object was saved. */
            screenshot?: Record<string, unknown>;
            /** The primary entity the object is about. */
            mainEntity?: Record<string, unknown>;
            /** When the object was created. */
            created?: string;
            /** When the object was last modified. */
            modified?: string;
            /** When the object was last bumped. */
            bumped?: string;
            /** When the object was soft-deleted; absent while the object is live. */
            deleted?: string;
            [key: string]: unknown;
          };
        }>;
      };
    };
    /** Unpin a mymind object. */
    "mymind.unpin_object": {
      input: {
        /**
         * The mymind object identifier.
         * @minLength 1
         */
        objectId: string;
      };
      output: {
        /** The unpinned object identifier. */
        objectId: string;
        /** Whether mymind accepted the change. */
        acknowledged: boolean;
      };
    };
    /** Update the title, summary, or completed state of a mymind object. */
    "mymind.update_object": {
      input: Record<string, unknown>;
      output: {
        /** The updated object identifier. */
        objectId: string;
        /** Whether mymind accepted the change. */
        acknowledged: boolean;
      };
    };
    /** Replace the content body of a mymind object with markdown. */
    "mymind.update_object_content": {
      input: {
        /**
         * The mymind object identifier.
         * @minLength 1
         */
        objectId: string;
        /**
         * The new content body as markdown.
         * @minLength 1
         */
        content: string;
      };
      output: {
        /** The updated object identifier. */
        objectId: string;
        /** Whether mymind accepted the change. */
        acknowledged: boolean;
      };
    };
    /** Replace the body of a note attached to a mymind object. */
    "mymind.update_object_note": {
      input: {
        /**
         * The mymind object identifier.
         * @minLength 1
         */
        objectId: string;
        /**
         * The note identifier.
         * @minLength 1
         */
        noteId: string;
        /**
         * The new note body as markdown.
         * @minLength 1
         */
        content: string;
      };
      output: {
        /** The updated note identifier. */
        noteId: string;
        /** Whether mymind accepted the change. */
        acknowledged: boolean;
      };
    };
    /** Rename a mymind space or change its colour. */
    "mymind.update_space": {
      input: Record<string, unknown>;
      output: {
        /** The space identifier. */
        id?: string;
        /** The space name. */
        name?: string;
        /** The space colour. */
        color?: string;
        /** When the space was created. */
        created?: string;
        /** The objects in the space, returned when a single space is read. */
        objects?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
  }
}
