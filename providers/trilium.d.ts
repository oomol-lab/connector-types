import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a label or relation attribute on a Trilium note. */
    "trilium.create_attribute": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        attributeId: string;
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        noteId: string;
        /** Whether this attribute is a label or relation. */
        type: "label" | "relation";
        /**
         * The attribute name without whitespace.
         * @minLength 1
         */
        name: string;
        /** The label value or target note id for a relation. */
        value?: string;
        /** The attribute ordering position. */
        position?: number;
        /** Whether child notes inherit the attribute. */
        isInheritable?: boolean;
      };
      output: {
        /** A Trilium note attribute. */
        attribute: {
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          attributeId?: string;
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          noteId?: string;
          /** Whether this attribute is a label or relation. */
          type?: "label" | "relation";
          /** The attribute name. */
          name?: string;
          /** The label value or related note id. */
          value?: string;
          /** The attribute ordering position. */
          position?: number;
          /** Whether child notes inherit the attribute. */
          isInheritable?: boolean;
          /** The UTC modification time returned by Trilium. */
          utcDateModified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Place an existing Trilium note under another parent, or update that placement if it exists. */
    "trilium.create_branch": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        noteId: string;
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        parentNoteId: string;
        /** The note position under its parent. */
        notePosition?: number;
        /** The branch-specific title prefix. */
        prefix?: string;
        /** Whether the branch should appear expanded. */
        isExpanded?: boolean;
      };
      output: {
        /** A Trilium branch placing a note in the note tree. */
        branch: {
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          branchId?: string;
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          noteId?: string;
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          parentNoteId?: string;
          /** The branch-specific title prefix. */
          prefix?: string;
          /** The note position under its parent. */
          notePosition?: number;
          /** Whether the branch is expanded in the note tree. */
          isExpanded?: boolean;
          /** The UTC modification time returned by Trilium. */
          utcDateModified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a note and place it under a parent in the Trilium note tree. */
    "trilium.create_note": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        parentNoteId: string;
        /** The note title. */
        title: string;
        /** The Trilium note type. */
        type: "text" | "code" | "file" | "image" | "search" | "book" | "relationMap" | "render";
        /** The initial note content. */
        content: string;
        /**
         * The MIME type required for code, file, and image notes.
         * @minLength 1
         */
        mime?: string;
        /** The note position under its parent. */
        notePosition?: number;
        /** The branch-specific title prefix. */
        prefix?: string;
        /** Whether the new note should appear expanded. */
        isExpanded?: boolean;
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        noteId?: string;
        /**
         * A Trilium local timestamp overriding the creation time.
         * @minLength 1
         */
        dateCreated?: string;
        /**
         * A Trilium UTC timestamp overriding the creation time.
         * @minLength 1
         */
        utcDateCreated?: string;
      };
      output: {
        /** Trilium note metadata. */
        note: {
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          noteId?: string;
          /** The note title. */
          title?: string;
          /** The note type returned by Trilium. */
          type?: string;
          /** The note MIME type. */
          mime?: string;
          /** Whether the note is protected. */
          isProtected?: boolean;
          /** The content blob id used as a content hash. */
          blobId?: string;
          /** Attributes attached to the note. */
          attributes?: Array<{
            /**
             * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
             * @minLength 4
             * @maxLength 32
             * @pattern ^[a-zA-Z0-9_]{4,32}$
             */
            attributeId?: string;
            /**
             * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
             * @minLength 4
             * @maxLength 32
             * @pattern ^[a-zA-Z0-9_]{4,32}$
             */
            noteId?: string;
            /** Whether this attribute is a label or relation. */
            type?: "label" | "relation";
            /** The attribute name. */
            name?: string;
            /** The label value or related note id. */
            value?: string;
            /** The attribute ordering position. */
            position?: number;
            /** Whether child notes inherit the attribute. */
            isInheritable?: boolean;
            /** The UTC modification time returned by Trilium. */
            utcDateModified?: string;
            [key: string]: unknown;
          }>;
          /** Parent note ids. */
          parentNoteIds?: Array<string>;
          /** Child note ids. */
          childNoteIds?: Array<string>;
          /** Parent branch ids. */
          parentBranchIds?: Array<string>;
          /** Child branch ids. */
          childBranchIds?: Array<string>;
          /** The local note creation time. */
          dateCreated?: string;
          /** The local note modification time. */
          dateModified?: string;
          /** The UTC note creation time. */
          utcDateCreated?: string;
          /** The UTC note modification time. */
          utcDateModified?: string;
          [key: string]: unknown;
        };
        /** A Trilium branch placing a note in the note tree. */
        branch: {
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          branchId?: string;
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          noteId?: string;
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          parentNoteId?: string;
          /** The branch-specific title prefix. */
          prefix?: string;
          /** The note position under its parent. */
          notePosition?: number;
          /** Whether the branch is expanded in the note tree. */
          isExpanded?: boolean;
          /** The UTC modification time returned by Trilium. */
          utcDateModified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Trilium attachment. */
    "trilium.delete_attachment": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        attachmentId: string;
      };
      output: {
        /** Whether Trilium accepted the deletion. */
        deleted: boolean;
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        attachmentId: string;
      };
    };
    /** Delete a Trilium label or relation attribute. */
    "trilium.delete_attribute": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        attributeId: string;
      };
      output: {
        /** Whether Trilium accepted the deletion. */
        deleted: boolean;
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        attributeId: string;
      };
    };
    /** Delete a Trilium branch; deleting a note's final branch also deletes the note. */
    "trilium.delete_branch": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        branchId: string;
      };
      output: {
        /** Whether Trilium accepted the deletion. */
        deleted: boolean;
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        branchId: string;
      };
    };
    /** Delete a Trilium note and all of its placements from the note tree. */
    "trilium.delete_note": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        noteId: string;
      };
      output: {
        /** Whether Trilium accepted the deletion. */
        deleted: boolean;
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        noteId: string;
      };
    };
    /** Get Trilium attachment metadata by attachment id. */
    "trilium.get_attachment": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        attachmentId: string;
      };
      output: {
        /** Trilium attachment metadata. */
        attachment: {
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          attachmentId?: string;
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          ownerId?: string;
          /** The attachment role. */
          role?: string;
          /** The attachment MIME type. */
          mime?: string;
          /** The attachment title or filename. */
          title?: string;
          /** The attachment ordering position. */
          position?: number;
          /** The attachment blob id used as a content hash. */
          blobId?: string;
          /** The local modification time. */
          dateModified?: string;
          /** The UTC modification time. */
          utcDateModified?: string;
          /** The UTC time when erasure was scheduled. */
          utcDateScheduledForErasureSince?: string;
          /** The attachment content length in bytes. */
          contentLength?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Trilium label or relation attribute by attribute id. */
    "trilium.get_attribute": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        attributeId: string;
      };
      output: {
        /** A Trilium note attribute. */
        attribute: {
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          attributeId?: string;
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          noteId?: string;
          /** Whether this attribute is a label or relation. */
          type?: "label" | "relation";
          /** The attribute name. */
          name?: string;
          /** The label value or related note id. */
          value?: string;
          /** The attribute ordering position. */
          position?: number;
          /** Whether child notes inherit the attribute. */
          isInheritable?: boolean;
          /** The UTC modification time returned by Trilium. */
          utcDateModified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Trilium note-tree branch by branch id. */
    "trilium.get_branch": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        branchId: string;
      };
      output: {
        /** A Trilium branch placing a note in the note tree. */
        branch: {
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          branchId?: string;
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          noteId?: string;
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          parentNoteId?: string;
          /** The branch-specific title prefix. */
          prefix?: string;
          /** The note position under its parent. */
          notePosition?: number;
          /** Whether the branch is expanded in the note tree. */
          isExpanded?: boolean;
          /** The UTC modification time returned by Trilium. */
          utcDateModified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get Trilium note metadata by note id. */
    "trilium.get_note": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        noteId: string;
      };
      output: {
        /** Trilium note metadata. */
        note: {
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          noteId?: string;
          /** The note title. */
          title?: string;
          /** The note type returned by Trilium. */
          type?: string;
          /** The note MIME type. */
          mime?: string;
          /** Whether the note is protected. */
          isProtected?: boolean;
          /** The content blob id used as a content hash. */
          blobId?: string;
          /** Attributes attached to the note. */
          attributes?: Array<{
            /**
             * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
             * @minLength 4
             * @maxLength 32
             * @pattern ^[a-zA-Z0-9_]{4,32}$
             */
            attributeId?: string;
            /**
             * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
             * @minLength 4
             * @maxLength 32
             * @pattern ^[a-zA-Z0-9_]{4,32}$
             */
            noteId?: string;
            /** Whether this attribute is a label or relation. */
            type?: "label" | "relation";
            /** The attribute name. */
            name?: string;
            /** The label value or related note id. */
            value?: string;
            /** The attribute ordering position. */
            position?: number;
            /** Whether child notes inherit the attribute. */
            isInheritable?: boolean;
            /** The UTC modification time returned by Trilium. */
            utcDateModified?: string;
            [key: string]: unknown;
          }>;
          /** Parent note ids. */
          parentNoteIds?: Array<string>;
          /** Child note ids. */
          childNoteIds?: Array<string>;
          /** Parent branch ids. */
          parentBranchIds?: Array<string>;
          /** Child branch ids. */
          childBranchIds?: Array<string>;
          /** The local note creation time. */
          dateCreated?: string;
          /** The local note modification time. */
          dateModified?: string;
          /** The UTC note creation time. */
          utcDateCreated?: string;
          /** The UTC note modification time. */
          utcDateModified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Read the text content of a text-based Trilium note. */
    "trilium.get_note_content": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        noteId: string;
      };
      output: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        noteId: string;
        /** The note content decoded as UTF-8 text. */
        content: string;
        /** The MIME type returned by Trilium. */
        mimeType: string;
      };
    };
    /** List attachment metadata owned by a Trilium note. */
    "trilium.list_note_attachments": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        noteId: string;
      };
      output: {
        /** The attachment metadata returned by Trilium. */
        attachments: Array<{
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          attachmentId?: string;
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          ownerId?: string;
          /** The attachment role. */
          role?: string;
          /** The attachment MIME type. */
          mime?: string;
          /** The attachment title or filename. */
          title?: string;
          /** The attachment ordering position. */
          position?: number;
          /** The attachment blob id used as a content hash. */
          blobId?: string;
          /** The local modification time. */
          dateModified?: string;
          /** The UTC modification time. */
          utcDateModified?: string;
          /** The UTC time when erasure was scheduled. */
          utcDateScheduledForErasureSince?: string;
          /** The attachment content length in bytes. */
          contentLength?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Trilium notes using full text, labels, subtree constraints, and ordering options. */
    "trilium.search_notes": {
      input: {
        /**
         * The Trilium search query, including full-text terms and label expressions such as #book.
         * @minLength 1
         */
        search: string;
        /** Whether to skip note-content full-text matching for a faster search. */
        fastSearch?: boolean;
        /** Whether archived notes should be included. */
        includeArchivedNotes?: boolean;
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        ancestorNoteId?: string;
        /**
         * A subtree depth expression such as eq1, lt4, or gt2.
         * @minLength 1
         */
        ancestorDepth?: string;
        /**
         * The note property or label used to order results.
         * @minLength 1
         */
        orderBy?: string;
        /** The result ordering direction. */
        orderDirection?: "asc" | "desc";
        /** The maximum number of results to return. */
        limit?: number;
        /** Whether Trilium should include search parser debugging information. */
        debug?: boolean;
      };
      output: {
        /** The matching notes. */
        notes: Array<{
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          noteId?: string;
          /** The note title. */
          title?: string;
          /** The note type returned by Trilium. */
          type?: string;
          /** The note MIME type. */
          mime?: string;
          /** Whether the note is protected. */
          isProtected?: boolean;
          /** The content blob id used as a content hash. */
          blobId?: string;
          /** Attributes attached to the note. */
          attributes?: Array<{
            /**
             * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
             * @minLength 4
             * @maxLength 32
             * @pattern ^[a-zA-Z0-9_]{4,32}$
             */
            attributeId?: string;
            /**
             * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
             * @minLength 4
             * @maxLength 32
             * @pattern ^[a-zA-Z0-9_]{4,32}$
             */
            noteId?: string;
            /** Whether this attribute is a label or relation. */
            type?: "label" | "relation";
            /** The attribute name. */
            name?: string;
            /** The label value or related note id. */
            value?: string;
            /** The attribute ordering position. */
            position?: number;
            /** Whether child notes inherit the attribute. */
            isInheritable?: boolean;
            /** The UTC modification time returned by Trilium. */
            utcDateModified?: string;
            [key: string]: unknown;
          }>;
          /** Parent note ids. */
          parentNoteIds?: Array<string>;
          /** Child note ids. */
          childNoteIds?: Array<string>;
          /** Parent branch ids. */
          parentBranchIds?: Array<string>;
          /** Child branch ids. */
          childBranchIds?: Array<string>;
          /** The local note creation time. */
          dateCreated?: string;
          /** The local note modification time. */
          dateModified?: string;
          /** The UTC note creation time. */
          utcDateCreated?: string;
          /** The UTC note modification time. */
          utcDateModified?: string;
          [key: string]: unknown;
        }>;
        /** Search parser debugging information when requested. */
        debugInfo: Record<string, unknown> | null;
      };
    };
    /** Update mutable metadata on a Trilium attachment. */
    "trilium.update_attachment": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        attachmentId: string;
        /**
         * The updated attachment role.
         * @minLength 1
         */
        role?: string;
        /**
         * The updated attachment MIME type.
         * @minLength 1
         */
        mime?: string;
        /**
         * The updated attachment title or filename.
         * @minLength 1
         */
        title?: string;
        /** The updated attachment ordering position. */
        position?: number;
      };
      output: {
        /** Trilium attachment metadata. */
        attachment: {
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          attachmentId?: string;
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          ownerId?: string;
          /** The attachment role. */
          role?: string;
          /** The attachment MIME type. */
          mime?: string;
          /** The attachment title or filename. */
          title?: string;
          /** The attachment ordering position. */
          position?: number;
          /** The attachment blob id used as a content hash. */
          blobId?: string;
          /** The local modification time. */
          dateModified?: string;
          /** The UTC modification time. */
          utcDateModified?: string;
          /** The UTC time when erasure was scheduled. */
          utcDateScheduledForErasureSince?: string;
          /** The attachment content length in bytes. */
          contentLength?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Update the value or position of a Trilium label, or the position of a relation. */
    "trilium.update_attribute": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        attributeId: string;
        /** The updated label value. Relations cannot change targets through this action. */
        value?: string;
        /** The updated attribute ordering position. */
        position?: number;
      };
      output: {
        /** A Trilium note attribute. */
        attribute: {
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          attributeId?: string;
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          noteId?: string;
          /** Whether this attribute is a label or relation. */
          type?: "label" | "relation";
          /** The attribute name. */
          name?: string;
          /** The label value or related note id. */
          value?: string;
          /** The attribute ordering position. */
          position?: number;
          /** Whether child notes inherit the attribute. */
          isInheritable?: boolean;
          /** The UTC modification time returned by Trilium. */
          utcDateModified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update the position, prefix, or expanded state of a Trilium branch. */
    "trilium.update_branch": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        branchId: string;
        /** The updated note position. */
        notePosition?: number;
        /** The updated branch-specific title prefix. */
        prefix?: string;
        /** The updated expanded state. */
        isExpanded?: boolean;
      };
      output: {
        /** A Trilium branch placing a note in the note tree. */
        branch: {
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          branchId?: string;
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          noteId?: string;
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          parentNoteId?: string;
          /** The branch-specific title prefix. */
          prefix?: string;
          /** The note position under its parent. */
          notePosition?: number;
          /** Whether the branch is expanded in the note tree. */
          isExpanded?: boolean;
          /** The UTC modification time returned by Trilium. */
          utcDateModified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update mutable metadata on a Trilium note. */
    "trilium.update_note": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        noteId: string;
        /**
         * The updated note title.
         * @minLength 1
         */
        title?: string;
        /** The updated Trilium note type. */
        type?: "text" | "code" | "render" | "file" | "image" | "search" | "relationMap" | "book" | "noteMap" | "mermaid" | "webView" | "shortcut" | "doc" | "contentWidget" | "launcher";
        /**
         * The updated note MIME type.
         * @minLength 1
         */
        mime?: string;
        /**
         * The updated local creation timestamp.
         * @minLength 1
         */
        dateCreated?: string;
        /**
         * The updated UTC creation timestamp.
         * @minLength 1
         */
        utcDateCreated?: string;
      };
      output: {
        /** Trilium note metadata. */
        note: {
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          noteId?: string;
          /** The note title. */
          title?: string;
          /** The note type returned by Trilium. */
          type?: string;
          /** The note MIME type. */
          mime?: string;
          /** Whether the note is protected. */
          isProtected?: boolean;
          /** The content blob id used as a content hash. */
          blobId?: string;
          /** Attributes attached to the note. */
          attributes?: Array<{
            /**
             * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
             * @minLength 4
             * @maxLength 32
             * @pattern ^[a-zA-Z0-9_]{4,32}$
             */
            attributeId?: string;
            /**
             * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
             * @minLength 4
             * @maxLength 32
             * @pattern ^[a-zA-Z0-9_]{4,32}$
             */
            noteId?: string;
            /** Whether this attribute is a label or relation. */
            type?: "label" | "relation";
            /** The attribute name. */
            name?: string;
            /** The label value or related note id. */
            value?: string;
            /** The attribute ordering position. */
            position?: number;
            /** Whether child notes inherit the attribute. */
            isInheritable?: boolean;
            /** The UTC modification time returned by Trilium. */
            utcDateModified?: string;
            [key: string]: unknown;
          }>;
          /** Parent note ids. */
          parentNoteIds?: Array<string>;
          /** Child note ids. */
          childNoteIds?: Array<string>;
          /** Parent branch ids. */
          parentBranchIds?: Array<string>;
          /** Child branch ids. */
          childBranchIds?: Array<string>;
          /** The local note creation time. */
          dateCreated?: string;
          /** The local note modification time. */
          dateModified?: string;
          /** The UTC note creation time. */
          utcDateCreated?: string;
          /** The UTC note modification time. */
          utcDateModified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Replace the text content of a text-based Trilium note. */
    "trilium.update_note_content": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        noteId: string;
        /** The complete replacement note content. */
        content: string;
      };
      output: {
        /** Whether Trilium accepted the content update. */
        updated: boolean;
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        noteId: string;
      };
    };
    /** Download a public file URL and upload it as a Trilium note attachment. */
    "trilium.upload_attachment": {
      input: {
        /**
         * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
         * @minLength 4
         * @maxLength 32
         * @pattern ^[a-zA-Z0-9_]{4,32}$
         */
        ownerId: string;
        /**
         * The public HTTP or HTTPS URL of the file to upload.
         * @minLength 1
         */
        fileUrl: string;
        /**
         * The Trilium attachment role, such as file or image.
         * @minLength 1
         */
        role: string;
        /**
         * The attachment MIME type. When omitted, the source response type is used.
         * @minLength 1
         */
        mime?: string;
        /**
         * The attachment title or filename.
         * @minLength 1
         */
        title: string;
        /** The attachment ordering position. */
        position?: number;
      };
      output: {
        /** Trilium attachment metadata. */
        attachment: {
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          attachmentId?: string;
          /**
           * A Trilium entity id containing 4 to 32 letters, digits, or underscores.
           * @minLength 4
           * @maxLength 32
           * @pattern ^[a-zA-Z0-9_]{4,32}$
           */
          ownerId?: string;
          /** The attachment role. */
          role?: string;
          /** The attachment MIME type. */
          mime?: string;
          /** The attachment title or filename. */
          title?: string;
          /** The attachment ordering position. */
          position?: number;
          /** The attachment blob id used as a content hash. */
          blobId?: string;
          /** The local modification time. */
          dateModified?: string;
          /** The UTC modification time. */
          utcDateModified?: string;
          /** The UTC time when erasure was scheduled. */
          utcDateScheduledForErasureSince?: string;
          /** The attachment content length in bytes. */
          contentLength?: number;
          [key: string]: unknown;
        };
      };
    };
  }
}
