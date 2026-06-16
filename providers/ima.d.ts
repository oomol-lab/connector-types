import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add an existing IMA note into one IMA knowledge base. */
    "ima.add_note_to_knowledge_base": {
      input: {
        /**
         * The IMA knowledge base ID.
         * @minLength 1
         */
        knowledgeBaseId: string;
        /** The target folder ID inside the knowledge base. */
        folderId?: string;
        /**
         * The IMA note ID to add.
         * @minLength 1
         */
        noteId: string;
        /**
         * The title to use for the knowledge-base item.
         * @minLength 1
         */
        title: string;
      };
      output: {
        /** The created knowledge-base media ID. */
        mediaId: string;
      };
    };
    /** Append Markdown content to an existing IMA note. */
    "ima.append_note": {
      input: {
        /**
         * The target IMA note ID.
         * @minLength 1
         */
        noteId: string;
        /**
         * The Markdown content to append to the note.
         * @minLength 1
         */
        content: string;
      };
      output: {
        /** The target IMA note ID. */
        noteId: string;
      };
    };
    /** Check whether file names already exist in an IMA knowledge-base folder. */
    "ima.check_repeated_names": {
      input: {
        /**
         * The IMA knowledge base ID.
         * @minLength 1
         */
        knowledgeBaseId: string;
        /**
         * The target folder ID inside the knowledge base.
         * @minLength 1
         */
        folderId?: string;
        /**
         * The files to check for duplicate names.
         * @minItems 1
         * @maxItems 2000
         */
        files: Array<{
          /**
           * The file name to check.
           * @minLength 1
           */
          name: string;
          /** The IMA media type for this file. */
          mediaType: number;
        }>;
      };
      output: {
        /** The duplicate check results. */
        results: Array<{
          /** The checked file name. */
          name: string;
          /** Whether a file with this name already exists in the target folder. */
          isRepeated: boolean;
        }>;
      };
    };
    /** Create a new IMA note from Markdown content. */
    "ima.create_note": {
      input: {
        /**
         * The Markdown content to import as a new note.
         * @minLength 1
         */
        content: string;
        /** The notebook folder ID that should receive the new note. */
        folderId?: string;
        /**
         * The notebook folder name that should receive the new note.
         * @minLength 1
         */
        folderName?: string;
      };
      output: {
        /** The created IMA note ID. */
        noteId: string;
      };
    };
    /** Fetch metadata for one or more IMA knowledge bases. */
    "ima.get_knowledge_bases": {
      input: {
        /**
         * The unique IMA knowledge-base IDs to fetch.
         * @minItems 1
         * @maxItems 20
         */
        knowledgeBaseIds: Array<string>;
      };
      output: {
        /** The normalized knowledge-base metadata results. */
        knowledgeBases: Array<{
          /** The IMA knowledge base ID. */
          id: string;
          /** The knowledge base name. */
          name: string | null;
          /** The knowledge base cover image URL. */
          coverUrl: string | null;
          /** The knowledge base description. */
          description: string | null;
          /** The recommended questions configured for the knowledge base. */
          recommendedQuestions: Array<string>;
        }>;
      };
    };
    /** Fetch access information for a knowledge-base item and download URL-backed original content through file transit when available. */
    "ima.get_knowledge_item_original": {
      input: {
        /**
         * The IMA media ID.
         * @minLength 1
         */
        mediaId: string;
        /**
         * The preferred transit file name when downloading URL content.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /** The normalized IMA media information. */
        mediaInfo: {
          /** The IMA media type. */
          mediaType: number;
          /** The original media URL when IMA can provide one. */
          url: string | null;
          /** The HTTP headers required when fetching the original media URL. */
          headers: Record<string, string> | null;
          /** The linked IMA note ID when the media is a note. */
          notebookId: string | null;
          /** Whether the media can be accessed through a URL or linked note ID. */
          accessible: boolean;
        };
        /** The note content when the media item is an IMA note. */
        content: string | null;
        /** A downloaded original file stored in connector transit storage. */
        file: {
          /** The transit file name. */
          name: string;
          /** The MIME type of the downloaded original file. */
          mimetype: string;
          /** The transit URL for downloading the original file. */
          s3url: string;
        } | null;
      };
    };
    /** Get IMA knowledge-base media access information for one media item. */
    "ima.get_media_info": {
      input: {
        /**
         * The IMA media ID.
         * @minLength 1
         */
        mediaId: string;
      };
      output: {
        /** The IMA media type. */
        mediaType: number;
        /** The original media URL when IMA can provide one. */
        url: string | null;
        /** The HTTP headers required when fetching the original media URL. */
        headers: Record<string, string> | null;
        /** The linked IMA note ID when the media is a note. */
        notebookId: string | null;
        /** Whether the media can be accessed through a URL or linked note ID. */
        accessible: boolean;
      };
    };
    /** Fetch the plain-text or JSON content for one IMA note. */
    "ima.get_note_content": {
      input: {
        /**
         * The IMA note ID.
         * @minLength 1
         */
        noteId: string;
        /** The target content format returned by IMA. */
        targetContentFormat?: "plain_text" | "json";
      };
      output: {
        /** The returned note content. */
        content: string;
        /** The target content format returned by IMA. */
        targetContentFormat: "plain_text" | "json";
      };
    };
    /** Import webpages or WeChat article URLs into one IMA knowledge base. */
    "ima.import_urls": {
      input: {
        /**
         * The IMA knowledge base ID.
         * @minLength 1
         */
        knowledgeBaseId: string;
        /** The target folder ID inside the knowledge base. */
        folderId?: string;
        /**
         * The URLs to import into the knowledge base.
         * @minItems 1
         * @maxItems 10
         */
        urls: Array<string>;
      };
      output: {
        /** The per-URL import results. */
        results: Array<{
          /** The imported URL. */
          url: string;
          /** The per-URL return code reported by IMA. */
          retCode: number;
          /** The created media ID when the import succeeds. */
          mediaId: string | null;
        }>;
      };
    };
    /** List the IMA knowledge bases that accept new content. */
    "ima.list_addable_knowledge_bases": {
      input: {
        /** The addable knowledge-base pagination cursor. */
        cursor?: string;
        /**
         * The maximum number of knowledge bases to request.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The normalized addable knowledge-base results. */
        knowledgeBases: Array<{
          /** The IMA knowledge base ID. */
          id: string;
          /** The knowledge base name. */
          name: string | null;
          /** The knowledge base cover image URL. */
          coverUrl: string | null;
          /** The knowledge base description. */
          description: string | null;
          /** The recommended questions configured for the knowledge base. */
          recommendedQuestions: Array<string>;
        }>;
        /** The cursor for the next addable knowledge-base page, if any. */
        nextCursor: string | null;
        /** Whether this addable knowledge-base page is the last page. */
        isEnd: boolean;
      };
    };
    /** List files and folders inside one IMA knowledge-base folder. */
    "ima.list_knowledge_items": {
      input: {
        /**
         * The IMA knowledge base ID.
         * @minLength 1
         */
        knowledgeBaseId: string;
        /** The target folder ID inside the knowledge base. */
        folderId?: string;
        /** The knowledge-item pagination cursor. */
        cursor?: string;
        /**
         * The maximum number of files and folders to request.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The normalized files and folders. */
        items: Array<{
          /** The normalized item type. */
          itemType: "knowledge" | "folder";
          /** The knowledge media ID when the item is a file. */
          mediaId: string | null;
          /** The folder ID when the item is a folder. */
          folderId: string | null;
          /** The knowledge title when the item is a file. */
          title: string | null;
          /** The folder name when the item is a folder. */
          name: string | null;
          /** The parent folder ID. */
          parentFolderId: string | null;
          /** The number of files in the folder. */
          fileCount: number | null;
          /** The number of child folders in the folder. */
          folderCount: number | null;
          /** Whether the folder is pinned to the top. */
          isTop: boolean | null;
          /** The highlighted content fragment returned by search. */
          highlightContent: string | null;
        }>;
        /** The normalized breadcrumb folders for the current location. */
        currentPath: Array<{
          /** The normalized item type. */
          itemType: "knowledge" | "folder";
          /** The knowledge media ID when the item is a file. */
          mediaId: string | null;
          /** The folder ID when the item is a folder. */
          folderId: string | null;
          /** The knowledge title when the item is a file. */
          title: string | null;
          /** The folder name when the item is a folder. */
          name: string | null;
          /** The parent folder ID. */
          parentFolderId: string | null;
          /** The number of files in the folder. */
          fileCount: number | null;
          /** The number of child folders in the folder. */
          folderCount: number | null;
          /** Whether the folder is pinned to the top. */
          isTop: boolean | null;
          /** The highlighted content fragment returned by search. */
          highlightContent: string | null;
        }>;
        /** The cursor for the next knowledge-item page, if any. */
        nextCursor: string | null;
        /** Whether this knowledge-item page is the last page. */
        isEnd: boolean;
      };
    };
    /** List IMA note folders for the connected account. */
    "ima.list_notebooks": {
      input: {
        /** The notebook pagination cursor. */
        cursor?: string;
        /**
         * The maximum number of notebooks to request.
         * @maximum 20
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The normalized notebook results. */
        notebooks: Array<{
          /** The IMA notebook folder ID. */
          folderId: string;
          /** The notebook name. */
          name: string | null;
          /** The number of notes in the notebook. */
          noteCount: number | null;
          /** The notebook creation time as a Unix timestamp in milliseconds. */
          createTime: number | null;
          /** The notebook modification time as a Unix timestamp in milliseconds. */
          modifyTime: number | null;
          /** The parent notebook folder ID. */
          parentFolderId: string | null;
          /** The IMA notebook type. */
          folderType: "user_created" | "all_notes" | "uncategorized" | null;
        }>;
        /** The cursor for the next notebook page, if any. */
        nextCursor: string | null;
        /** Whether this notebook page is the last page. */
        isEnd: boolean;
      };
    };
    /** List notes in one IMA notebook or across all notes. */
    "ima.list_notes": {
      input: {
        /** The notebook folder ID to list. Omit it to list across all notes. */
        folderId?: string;
        /** The IMA note sorting mode. */
        sortType?: "modify_time" | "create_time" | "title" | "size";
        /** The note pagination cursor. */
        cursor?: string;
        /**
         * The maximum number of notes to request.
         * @maximum 20
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The normalized note list results. */
        notes: Array<{
          /** The IMA note ID. */
          noteId: string;
          /** The note title. */
          title: string | null;
          /** The note summary returned by IMA. */
          summary: string | null;
          /** The note creation time as a Unix timestamp in milliseconds. */
          createTime: number | null;
          /** The note modification time as a Unix timestamp in milliseconds. */
          modifyTime: number | null;
          /** The notebook ID that owns the note. */
          folderId: string | null;
          /** The notebook name that owns the note. */
          folderName: string | null;
          /** A string-to-string map returned by IMA. */
          highlightInfo: Record<string, string> | null;
        }>;
        /** The cursor for the next note page, if any. */
        nextCursor: string | null;
        /** Whether this note page is the last page. */
        isEnd: boolean;
      };
    };
    /** Search IMA knowledge bases by name, or pass an empty query to list accessible knowledge bases. */
    "ima.search_knowledge_bases": {
      input: {
        /** The knowledge-base search query. Use an empty string to list accessible bases. */
        query: string;
        /** The knowledge-base pagination cursor. */
        cursor?: string;
        /**
         * The maximum number of knowledge bases to request.
         * @maximum 20
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The normalized knowledge-base search results. */
        knowledgeBases: Array<{
          /** The IMA knowledge base ID. */
          id: string;
          /** The knowledge base name. */
          name: string | null;
          /** The knowledge base cover image URL. */
          coverUrl: string | null;
          /** The knowledge base description. */
          description: string | null;
          /** The recommended questions configured for the knowledge base. */
          recommendedQuestions: Array<string>;
        }>;
        /** The cursor for the next knowledge-base page, if any. */
        nextCursor: string | null;
        /** Whether this knowledge-base page is the last page. */
        isEnd: boolean;
      };
    };
    /** Search files and folders inside one IMA knowledge base. */
    "ima.search_knowledge_items": {
      input: {
        /**
         * The IMA knowledge base ID.
         * @minLength 1
         */
        knowledgeBaseId: string;
        /**
         * The search keyword.
         * @minLength 1
         */
        query: string;
        /** The knowledge-item search cursor. */
        cursor?: string;
      };
      output: {
        /** The normalized knowledge-item search results. */
        items: Array<{
          /** The normalized item type. */
          itemType: "knowledge" | "folder";
          /** The knowledge media ID when the item is a file. */
          mediaId: string | null;
          /** The folder ID when the item is a folder. */
          folderId: string | null;
          /** The knowledge title when the item is a file. */
          title: string | null;
          /** The folder name when the item is a folder. */
          name: string | null;
          /** The parent folder ID. */
          parentFolderId: string | null;
          /** The number of files in the folder. */
          fileCount: number | null;
          /** The number of child folders in the folder. */
          folderCount: number | null;
          /** Whether the folder is pinned to the top. */
          isTop: boolean | null;
          /** The highlighted content fragment returned by search. */
          highlightContent: string | null;
        }>;
        /** The cursor for the next knowledge-item search page, if any. */
        nextCursor: string | null;
        /** Whether this knowledge-item search page is the last page. */
        isEnd: boolean;
      };
    };
    /** Search IMA notes by title or note body text. */
    "ima.search_notes": {
      input: {
        /**
         * The search keyword.
         * @minLength 1
         */
        query: string;
        /** The IMA note search field. */
        searchType?: "title" | "content";
        /** The IMA note sorting mode. */
        sortType?: "modify_time" | "create_time" | "title" | "size";
        /**
         * The zero-based start offset for this search page.
         * @minimum 0
         */
        start?: number;
        /**
         * The maximum number of notes to request for this page.
         * @maximum 20
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The normalized note search results. */
        notes: Array<{
          /** The IMA note ID. */
          noteId: string;
          /** The note title. */
          title: string | null;
          /** The note summary returned by IMA. */
          summary: string | null;
          /** The note creation time as a Unix timestamp in milliseconds. */
          createTime: number | null;
          /** The note modification time as a Unix timestamp in milliseconds. */
          modifyTime: number | null;
          /** The notebook ID that owns the note. */
          folderId: string | null;
          /** The notebook name that owns the note. */
          folderName: string | null;
          /** A string-to-string map returned by IMA. */
          highlightInfo: Record<string, string> | null;
        }>;
        /** Whether this page is the last search page. */
        isEnd: boolean;
        /** The total number of matched notes. */
        totalHitCount: number;
        /** The next start offset to use for another page, if any. */
        nextStart: number | null;
      };
    };
    /** Upload a file from an HTTP URL into one IMA knowledge base, including duplicate checks, COS upload, and add_knowledge. */
    "ima.upload_file_to_knowledge_base": {
      input: {
        /**
         * The IMA knowledge base ID.
         * @minLength 1
         */
        knowledgeBaseId: string;
        /**
         * The target folder ID inside the knowledge base.
         * @minLength 1
         */
        folderId?: string;
        /**
         * The HTTP or HTTPS URL whose bytes should be uploaded to IMA.
         * @format uri
         */
        fileUrl: string;
        /**
         * The file name to store in IMA, including the extension.
         * @minLength 1
         */
        fileName: string;
        /**
         * The MIME type of the file. If omitted, IMA upload type is inferred from fileName.
         * @minLength 1
         */
        contentType?: string;
        /** How to handle an existing file with the same name. */
        duplicatePolicy?: "fail" | "keep_both";
      };
      output: {
        /** The created IMA media ID. */
        mediaId: string;
        /** The final uploaded file name. */
        fileName: string;
        /** The IMA media type used for upload. */
        mediaType: number;
        /** The MIME type uploaded to COS. */
        contentType: string;
        /**
         * The uploaded file size in bytes.
         * @minimum 0
         */
        fileSize: number;
        /** Whether the original file name was already repeated. */
        duplicate: boolean;
      };
    };
  }
}
