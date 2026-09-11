import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Mark background tasks as acknowledged (dismissed from the task list). Pass tasks with the numeric task row ids, or all true to acknowledge every visible unacknowledged task; exactly one of the two must be given. Requires the change_paperlesstask permission. */
    "paperless_ngx.acknowledge_tasks": {
      input: {
        /** Numeric task row ids (the id field, not the Celery task_id) to acknowledge. Every id must be visible to the connected user and listed once. */
        tasks?: Array<number>;
        /** When true, acknowledge every unacknowledged task visible to the connected user instead of an explicit list. Defaults to false. */
        all?: boolean;
      };
      output: {
        /**
         * Number of tasks that were newly marked as acknowledged.
         * @minimum 0
         */
        result: number;
      };
    };
    /** Add a note to a document on behalf of the connected user and return the complete note list. Also bumps the document's modified timestamp and re-indexes it. Requires the add_note permission and change access to the document. */
    "paperless_ngx.add_document_note": {
      input: {
        /**
         * Id of the document.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Text of the note.
         * @minLength 1
         */
        note: string;
      };
      output: {
        /** Every note on the document after the operation, newest first. */
        notes: Array<{
          /** The note id. */
          id?: number;
          /** The note text. */
          note?: string;
          /** ISO 8601 creation timestamp. */
          created?: string;
          /** The user who wrote the note. */
          user?: {
            /** The user id. */
            id?: number;
            /** The username. */
            username?: string;
            /** The first name. */
            first_name?: string;
            /** The last name. */
            last_name?: string;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get search term completions for a partial word from the full text index, ordered by how many of the user's documents contain each candidate. */
    "paperless_ngx.autocomplete_search": {
      input: {
        /**
         * The incomplete search term.
         * @minLength 1
         */
        term: string;
        /**
         * Maximum number of completions to return. Defaults to 10.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Completion candidates, most frequent first. */
        terms: Array<string>;
      };
    };
    /** Delete several processed mail records at once so the corresponding mails can be fetched again on the next run. Paperless-ngx checks delete permission on every record first and rejects the whole request with status 403 if any is not permitted; ids that do not exist are silently skipped. */
    "paperless_ngx.bulk_delete_processed_mail": {
      input: {
        /**
         * Ids of the processed mail records to delete, at least one.
         * @minItems 1
         */
        mail_ids: Array<number>;
      };
      output: {
        /** The upstream result marker, normally "OK". */
        result: string;
        /** The ids that were submitted for deletion, echoed back by Paperless-ngx. */
        deleted_mail_ids: Array<number>;
        [key: string]: unknown;
      };
    };
    /** Download several documents as one zip archive handed back as a temporary connector file URL. Select documents explicitly or with all plus filters; the latest version of each root document is packed. content chooses archived PDFs (falling back to the original when a document has no archive version), original files, or both, and follow_formatting names the entries after the configured filename format instead of the document title. The zip is built on the instance and may take a while; it must stay under the 500 MiB connector limit. Requires view access to every document (403 otherwise). */
    "paperless_ngx.bulk_download_documents": {
      input: {
        /** Ids of the documents to operate on. */
        documents?: Array<number>;
        /** When true, operate on every document visible to the connected user that matches filters instead of the explicit documents list. Defaults to false. */
        all?: boolean;
        /** Document list filters applied when all is true, keyed by the same query parameter names accepted by list_documents (for example tags__id__all or query). */
        filters?: Record<string, string | number | boolean>;
        /** Which files to include: archive (default) for the archived PDF of each document, originals for the uploaded files, or both. */
        content?: "archive" | "originals" | "both";
        /** Zip compression method: none (default, stored), deflated, bzip2 or lzma. */
        compression?: "none" | "deflated" | "bzip2" | "lzma";
        /** When true, name the files inside the zip using the instance's filename format (storage path template) instead of the document title. Defaults to false. */
        follow_formatting?: boolean;
      };
      output: {
        /** Temporary connector file URL holding the downloaded bytes. Fetch it directly; it is a connector file transit URL rather than a Paperless-ngx URL, and it expires. */
        fileUrl: string;
        /** File name the downloaded bytes were stored under. */
        fileName: string;
        /** MIME type reported for the downloaded bytes. */
        contentType: string;
        /** Number of bytes transferred to the connector file URL. */
        sizeBytes: number;
      };
    };
    /** Apply one metadata change to many documents at once: set the correspondent, document type or storage path, add or remove tags, add or remove custom fields, or replace owner and permissions. Select documents explicitly or with all plus filters. Metadata methods require the global change_document permission plus change access on every document; set_permissions additionally requires that the connected user owns every document (or it is unowned) unless they are a superuser. Legacy document-editing methods (delete, reprocess, rotate, merge, split, delete_pages, edit_pdf, remove_password) are still accepted but deprecated; use the dedicated actions instead. */
    "paperless_ngx.bulk_edit_documents": {
      input: {
        /** Ids of the documents to operate on. */
        documents?: Array<number>;
        /** When true, operate on every document visible to the connected user that matches filters instead of the explicit documents list. Defaults to false. */
        all?: boolean;
        /** Document list filters applied when all is true, keyed by the same query parameter names accepted by list_documents (for example tags__id__all or query). */
        filters?: Record<string, string | number | boolean>;
        /** The bulk edit method. Current methods and the keys they need in parameters: set_correspondent (correspondent: id or null), set_document_type (document_type: id or null), set_storage_path (storage_path: id or null), add_tag / remove_tag (tag: id), modify_tags (add_tags and remove_tags: arrays of tag ids, both required, may be empty), modify_custom_fields (add_custom_fields: object of custom field id to value, or an array of ids to add with empty values; remove_custom_fields: array of ids; both required), set_permissions (set_permissions: { view: { users, groups }, change: { users, groups } } required; owner: user id or null; merge: boolean, default false meaning the given owner and permissions replace the existing ones instead of being merged). Legacy methods still accepted by API v10 but deprecated (prefer the dedicated actions): delete (no parameters; use delete_documents), reprocess (remote_ocr; use reprocess_documents), rotate (degrees; use rotate_documents), merge (metadata_document_id, delete_originals, archive_fallback; use merge_documents), split (pages as a string such as "1-3,4,5-7" plus delete_originals; use edit_document_pdf with doc indexes), delete_pages (pages as an array of page numbers; use edit_document_pdf listing only the pages to keep), edit_pdf (operations, update_document, include_metadata, delete_original; use edit_document_pdf) and remove_password (password, update_document, delete_original, include_metadata; use remove_document_password). The legacy PDF methods also accept source_mode. merge, split, delete_pages, edit_pdf and remove_password reject all=true, and split, delete_pages and edit_pdf accept exactly one document. */
        method: "set_correspondent" | "set_document_type" | "set_storage_path" | "add_tag" | "remove_tag" | "modify_tags" | "modify_custom_fields" | "set_permissions" | "delete" | "reprocess" | "rotate" | "merge" | "split" | "delete_pages" | "edit_pdf" | "remove_password";
        /** Method-specific parameters keyed by the upstream parameter names listed under method. Defaults to an empty object, which is only valid for the legacy delete method. */
        parameters?: Record<string, unknown>;
      };
      output: {
        /** The upstream result marker, normally "OK". */
        result: string;
        [key: string]: unknown;
      };
    };
    /** Set the owner and permissions of, or delete, many tags, correspondents, document types or storage paths at once. Non-superusers need the change or delete model permission and must own (or the objects must be unowned) every targeted object, otherwise Paperless-ngx answers 403 Insufficient permissions. Deletion is immediate and not reversible. */
    "paperless_ngx.bulk_edit_objects": {
      input: {
        /** Type of the objects to edit: tags, correspondents, document_types or storage_paths. */
        object_type: "tags" | "correspondents" | "document_types" | "storage_paths";
        /** Operation to perform: set_permissions rewrites the owner and/or object-level permissions, delete removes the objects. */
        operation: "set_permissions" | "delete";
        /** Ids of the objects to edit. Required unless all is true; every id must exist and must not repeat. */
        objects?: Array<number>;
        /** When true, operate on every object of object_type that the connected user may change (or delete) and that matches filters, instead of the objects list; for tags this also includes the editable descendants of matched tags. Defaults to false. */
        all?: boolean;
        /** Filters narrowing the objects when all is true, keyed by the query parameter names of the matching list action, for example name__icontains, id__in (comma-separated) or is_root. */
        filters?: Record<string, string | number | boolean>;
        /** Id of the new owner, or null to make the objects unowned. Only used by set_permissions. With merge true a null owner is ignored and only currently unowned objects receive the new owner. */
        owner?: number | null;
        /** Object-level view and change permissions to apply with set_permissions, listing user and group ids. With merge false they replace the existing permissions, with merge true they are added to them. */
        permissions?: {
          /** Users and groups granted this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
          /** Users and groups granted this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
        };
        /** Whether to merge the new owner and permissions into the existing ones instead of replacing them. Defaults to false. */
        merge?: boolean;
      };
      output: {
        /** The upstream result marker, normally "OK". */
        result: string;
        [key: string]: unknown;
      };
    };
    /** Ask the Paperless-ngx AI assistant a question that is answered from your documents (retrieval-augmented generation over the LLM index). With document_id the answer is based only on that document, which must exist (400 Document not found otherwise) and be viewable by the connected user (403 otherwise); without it every document visible to the user is searched. Requires AI to be enabled in the application configuration (400 AI is required for this feature otherwise), the global view_document permission and a built LLM index. Paperless-ngx streams the reply; the connector waits for the stream to finish and returns the whole text. */
    "paperless_ngx.chat_with_documents": {
      input: {
        /**
         * The question, at most 4000 characters.
         * @minLength 1
         * @maxLength 4000
         */
        q: string;
        /**
         * Id of a single document to restrict the answer to. Omit to search all visible documents.
         * @exclusiveMinimum 0
         */
        document_id?: number;
      };
      output: {
        /** The complete answer text: the streamed UTF-8 text chunks concatenated verbatim in arrival order, exactly as the Paperless-ngx web UI displays them, without any SSE framing. */
        answer: string;
      };
    };
    /** Create a correspondent with an optional matching rule. The owner defaults to the connected user. Requires the add_correspondent permission. */
    "paperless_ngx.create_correspondent": {
      input: {
        /**
         * The correspondent name, at most 128 characters. Must be unique per owner; Paperless-ngx rejects duplicates with "Object violates owner / name unique constraint".
         * @minLength 1
         */
        name: string;
        /** Text or pattern the matching algorithm compares against document content. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). Defaults to 1 (any word); 6 relies on the trained classifier and ignores match; 4 requires match to be a valid regular expression. */
        matching_algorithm?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        /** Whether matching ignores case. Defaults to true. */
        is_insensitive?: boolean;
        /** Id of the user that owns the object, or null to make it unowned. On create it defaults to the connected user. Only the current owner or a superuser may change it. */
        owner?: number | null;
        /** Object-level permissions to write. Supplying this replaces the existing permissions of the object; only the owner or a superuser may change them. */
        set_permissions?: {
          /** Users and groups granted this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
          /** Users and groups granted this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
        };
      };
      output: {
        /** The object id. */
        id?: number;
        /** URL-safe slug derived from the name. */
        slug?: string;
        /** The object name. */
        name?: string;
        /** Text or pattern used by the matching algorithm. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
        matching_algorithm?: number;
        /** Whether matching ignores case. */
        is_insensitive?: boolean;
        /** Number of documents visible to the connected user that use this object. */
        document_count?: number;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        /** Date of the most recent document from this correspondent, when requested. */
        last_correspondence?: string | null;
        [key: string]: unknown;
      };
    };
    /** Create a custom field definition. Select fields need extra_data.select_options with at least one labelled option (ids are generated), monetary fields may set extra_data.default_currency. Requires the add_customfield permission. */
    "paperless_ngx.create_custom_field": {
      input: {
        /**
         * The custom field name, at most 128 characters and unique across the instance.
         * @minLength 1
         */
        name: string;
        /** Value type of the field: string, url, date, boolean, integer, float, monetary, documentlink, select or longtext. */
        data_type: "string" | "url" | "date" | "boolean" | "integer" | "float" | "monetary" | "documentlink" | "select" | "longtext";
        /** Type-specific settings. */
        extra_data?: {
          /**
           * Options of a select field. Required and non-empty whenever the field is (or becomes) a select field, and it must always list every option, including existing ones with their ids, because the list replaces the stored options.
           * @minItems 1
           */
          select_options?: Array<{
            /** Stable option id. Omit it or pass null for new options and Paperless-ngx generates one; keep the existing id of current options so documents referencing them keep their value. */
            id?: string | null;
            /**
             * Option label shown to users.
             * @minLength 1
             */
            label: string;
          }>;
          /** Default ISO 4217 currency code (exactly three letters, or empty) for monetary fields, or null for the instance default. */
          default_currency?: string | null;
        } | null;
      };
      output: {
        /** The custom field id. */
        id?: number;
        /** The custom field name. */
        name?: string;
        /** The value type: string, url, date, boolean, integer, float, monetary, documentlink, select or longtext. */
        data_type?: string;
        /** Type-specific settings, or null. */
        extra_data?: {
          /** Options of a select field. */
          select_options?: Array<{
            /** Stable option id referenced by document values. */
            id?: string;
            /** Option label shown to users. */
            label?: string;
            [key: string]: unknown;
          }>;
          /** Default ISO 4217 currency code for monetary fields, or null. */
          default_currency?: string | null;
          [key: string]: unknown;
        } | null;
        /** Number of documents that carry this field. */
        document_count?: number;
        [key: string]: unknown;
      };
    };
    /** Create a document type with an optional matching rule. The owner defaults to the connected user. Requires the add_documenttype permission. */
    "paperless_ngx.create_document_type": {
      input: {
        /**
         * The document type name, at most 128 characters. Must be unique per owner; Paperless-ngx rejects duplicates with "Object violates owner / name unique constraint".
         * @minLength 1
         */
        name: string;
        /** Text or pattern the matching algorithm compares against document content. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). Defaults to 1 (any word); 6 relies on the trained classifier and ignores match; 4 requires match to be a valid regular expression. */
        matching_algorithm?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        /** Whether matching ignores case. Defaults to true. */
        is_insensitive?: boolean;
        /** Id of the user that owns the object, or null to make it unowned. On create it defaults to the connected user. Only the current owner or a superuser may change it. */
        owner?: number | null;
        /** Object-level permissions to write. Supplying this replaces the existing permissions of the object; only the owner or a superuser may change them. */
        set_permissions?: {
          /** Users and groups granted this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
          /** Users and groups granted this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
        };
      };
      output: {
        /** The object id. */
        id?: number;
        /** URL-safe slug derived from the name. */
        slug?: string;
        /** The object name. */
        name?: string;
        /** Text or pattern used by the matching algorithm. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
        matching_algorithm?: number;
        /** Whether matching ignores case. */
        is_insensitive?: boolean;
        /** Number of documents visible to the connected user that use this object. */
        document_count?: number;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        [key: string]: unknown;
      };
    };
    /** Create a Paperless-ngx user group. Paperless-ngx requires the permissions list on create, so it is sent as an empty list when omitted. Requires the add_group permission. */
    "paperless_ngx.create_group": {
      input: {
        /**
         * Unique group name of at most 150 characters.
         * @minLength 1
         * @maxLength 150
         */
        name: string;
        /** Permission codenames granted to every member, for example view_document. Replaces the whole list. */
        permissions?: Array<string>;
      };
      output: {
        /** A Paperless-ngx group. */
        group: {
          /** The group id. */
          id?: number;
          /** The group name. */
          name?: string;
          /** Permission codenames granted to the group. */
          permissions?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Create an IMAP mail account that Paperless-ngx can fetch documents from. Requires the add_mailaccount permission. The account only becomes useful once a mail rule references it; use test_mail_account to verify the credentials first. */
    "paperless_ngx.create_mail_account": {
      input: {
        /**
         * Display name of the account, unique across the instance, at most 256 characters.
         * @minLength 1
         */
        name: string;
        /**
         * IMAP server host name, for example imap.example.com.
         * @minLength 1
         */
        imap_server: string;
        /**
         * IMAP server port. Usually 143 for unencrypted and STARTTLS connections and 993 for SSL.
         * @minimum 1
         * @maximum 65535
         */
        imap_port: number;
        /** IMAP connection security: 1 no encryption, 2 SSL (implicit TLS, normally port 993), 3 STARTTLS (normally port 143). Defaults to 2. */
        imap_security?: 1 | 2 | 3;
        /** IMAP login user name. */
        username: string;
        /** IMAP password, or the OAuth access token when is_token is true. It is never returned; reads show a placeholder made of asterisks. On update, sending a value consisting only of asterisks (the placeholder returned by reads) leaves the stored password unchanged. */
        password: string;
        /**
         * Character set used when talking to the mail server, such as UTF-8 or US-ASCII. Defaults to UTF-8.
         * @minLength 1
         */
        character_set?: string;
        /** Whether password holds an OAuth access token instead of a password. Defaults to false. */
        is_token?: boolean;
        /** Account type: 1 IMAP with username and password, 2 Gmail OAuth, 3 Outlook OAuth. Defaults to 1. OAuth accounts are normally created through the Paperless-ngx web UI, which obtains the token; this API can only store token values obtained elsewhere. */
        account_type?: 1 | 2 | 3;
        /** ISO 8601 timestamp when the OAuth access token expires, or null. Only meaningful for OAuth accounts. */
        expiration?: string | null;
        /** Id of the user that owns the object, or null to make it unowned. */
        owner?: number | null;
        /** Object-level permissions to write. Supplying this replaces the existing permissions of the object; only the owner or a superuser may change them. */
        set_permissions?: {
          /** Users and groups granted this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
          /** Users and groups granted this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
        };
      };
      output: {
        /** The mail account id. */
        id?: number;
        /** The account name. */
        name?: string;
        /** IMAP server host. */
        imap_server?: string;
        /** IMAP port. */
        imap_port?: number | null;
        /** IMAP security: 1 none, 2 SSL, 3 STARTTLS. */
        imap_security?: number;
        /** IMAP username. */
        username?: string;
        /** Obfuscated placeholder; the real password is never returned. */
        password?: string;
        /** Character set used to decode mail. */
        character_set?: string;
        /** Whether password holds an OAuth token. */
        is_token?: boolean;
        /** Account type: 1 IMAP, 2 Gmail OAuth, 3 Outlook OAuth. */
        account_type?: number;
        /** OAuth token expiration, or null. */
        expiration?: string | null;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        [key: string]: unknown;
      };
    };
    /** Create a mail rule that tells Paperless-ngx which mails of an account to consume and how to file the resulting documents. Requires the add_mailrule permission and change permission on the referenced account. Actions 2 (move) and 5 (tag) need action_parameter. */
    "paperless_ngx.create_mail_rule": {
      input: {
        /**
         * Rule name, unique per owner, at most 256 characters.
         * @minLength 1
         */
        name: string;
        /**
         * Id of the mail account the rule scans. The connected user needs change permission on that account.
         * @exclusiveMinimum 0
         */
        account: number;
        /**
         * IMAP folder to scan. Subfolders are separated by the server's delimiter, often a dot or a slash. Defaults to INBOX.
         * @minLength 1
         */
        folder?: string;
        /** Only process mails whose sender contains this text, or null for no filter. */
        filter_from?: string | null;
        /** Only process mails whose recipient contains this text, or null for no filter. */
        filter_to?: string | null;
        /** Only process mails whose subject contains this text, or null for no filter. */
        filter_subject?: string | null;
        /** Only process mails whose body contains this text, or null for no filter. */
        filter_body?: string | null;
        /** Only consume attachments whose filename entirely matches this pattern. Wildcards such as *.pdf or *invoice* are allowed and matching is case insensitive. Null for no filter. */
        filter_attachment_filename_include?: string | null;
        /** Skip attachments whose filename entirely matches this pattern. Wildcards such as *.pdf or *invoice* are allowed and matching is case insensitive. Null for no filter. */
        filter_attachment_filename_exclude?: string | null;
        /**
         * Only process mails received within this many days; 0 disables the age limit. Defaults to 30, at most 36500.
         * @minimum 0
         * @maximum 36500
         */
        maximum_age?: number;
        /** Action applied to a mail after its documents are consumed: 1 delete the mail, 2 move it to the folder named in action_parameter, 3 mark it as read (read mails are not processed), 4 flag it (flagged mails are not processed), 5 tag it with the tag or Gmail label named in action_parameter (tagged mails are not processed). Defaults to 3. Actions 2 and 5 require action_parameter in the same request. */
        action?: 1 | 2 | 3 | 4 | 5;
        /** Parameter for action: the target folder for action 2 (subfolders separated by dots) or the tag or Gmail label for action 5. Ignored by the other actions; null or empty when unused. */
        action_parameter?: string | null;
        /** Where consumed documents get their title from: 1 the mail subject, 2 the attachment filename, 3 do not assign a title from the rule. Defaults to 1. */
        assign_title_from?: 1 | 2 | 3;
        /** Ids of the tags assigned to every consumed document. */
        assign_tags?: Array<number>;
        /** How the correspondent is chosen: 1 do not assign a correspondent, 2 the sender mail address, 3 the sender name (falls back to the address), 4 the correspondent given in assign_correspondent. Defaults to 1. */
        assign_correspondent_from?: 1 | 2 | 3 | 4;
        /**
         * Id of the correspondent used when assign_correspondent_from is 4, or null.
         * @exclusiveMinimum 0
         */
        assign_correspondent?: number | null;
        /**
         * Id of the document type assigned to consumed documents, or null.
         * @exclusiveMinimum 0
         */
        assign_document_type?: number | null;
        /** Whether consumed documents are owned by the rule owner. Defaults to true. */
        assign_owner_from_rule?: boolean;
        /** Evaluation order among rules; lower values run first. Defaults to 0. */
        order?: number;
        /** Which attachments are consumed: 1 only real attachments, 2 every file including inline attachments such as embedded images, best combined with a filename filter. Defaults to 1. */
        attachment_type?: 1 | 2;
        /** What is consumed from a matching mail: 1 attachments only, 2 the full mail as a single .eml document with attachments embedded, 3 the full mail as .eml plus every attachment as a separate document. Defaults to 1. */
        consumption_scope?: 1 | 2 | 3;
        /** Layout used when a mail body is rendered to PDF: 0 system default, 1 text then HTML, 2 HTML then text, 3 HTML only, 4 text only. Defaults to 0. */
        pdf_layout?: 0 | 1 | 2 | 3 | 4;
        /** Whether the rule is active. Defaults to true. */
        enabled?: boolean;
        /** When true, no further rules are evaluated for a mail once this rule queues a document. Defaults to false. */
        stop_processing?: boolean;
        /** Id of the user that owns the object, or null to make it unowned. */
        owner?: number | null;
        /** Object-level permissions to write. Supplying this replaces the existing permissions of the object; only the owner or a superuser may change them. */
        set_permissions?: {
          /** Users and groups granted this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
          /** Users and groups granted this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
        };
      };
      output: {
        /** The mail rule id. */
        id?: number;
        /** The rule name. */
        name?: string;
        /** Id of the mail account the rule belongs to. */
        account?: number;
        /** Whether the rule is active. */
        enabled?: boolean;
        /** IMAP folder to scan. */
        folder?: string;
        /** Sender filter, or null. */
        filter_from?: string | null;
        /** Recipient filter, or null. */
        filter_to?: string | null;
        /** Subject filter, or null. */
        filter_subject?: string | null;
        /** Body filter, or null. */
        filter_body?: string | null;
        /** Attachment filename include pattern, or null. */
        filter_attachment_filename_include?: string | null;
        /** Attachment filename exclude pattern, or null. */
        filter_attachment_filename_exclude?: string | null;
        /** Maximum mail age in days, 0 for no limit. */
        maximum_age?: number;
        /** Post-consumption mail action: 1 delete, 2 move, 3 mark read, 4 flag, 5 tag. */
        action?: number;
        /** Folder or tag used by the action, or null. */
        action_parameter?: string | null;
        /** Title source: 1 subject, 2 attachment filename, 3 none. */
        assign_title_from?: number;
        /** Ids of tags assigned to consumed documents. */
        assign_tags?: Array<number>;
        /** Correspondent source: 1 nothing, 2 email, 3 name, 4 custom. */
        assign_correspondent_from?: number;
        /** Correspondent id used when assign_correspondent_from is 4, or null. */
        assign_correspondent?: number | null;
        /** Document type id assigned to consumed documents, or null. */
        assign_document_type?: number | null;
        /** Whether consumed documents are owned by the rule owner. */
        assign_owner_from_rule?: boolean;
        /** Evaluation order among rules. */
        order?: number;
        /** Attachment processing: 1 attachments only, 2 everything including inline. */
        attachment_type?: number;
        /** Consumption scope: 1 attachments only, 2 eml only, 3 everything. */
        consumption_scope?: number;
        /** PDF layout for mail bodies: 0 system default, 1 text then HTML, 2 HTML then text, 3 HTML only, 4 text only. */
        pdf_layout?: number;
        /** Whether later rules are skipped once this rule matches. */
        stop_processing?: boolean;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        [key: string]: unknown;
      };
    };
    /** Create a saved document view from a name and a list of filter rules, optionally with sort order, page size, display mode and display fields. Dashboard and sidebar visibility are user preferences stored through update_ui_settings, not view fields. The owner defaults to the connected user. Requires the add_savedview permission. */
    "paperless_ngx.create_saved_view": {
      input: {
        /**
         * The saved view name, at most 128 characters.
         * @minLength 1
         */
        name: string;
        /** Icon shown next to the view in the sidebar, one of the Bootstrap icon names accepted by Paperless-ngx. Defaults to funnel. */
        icon?: "archive" | "bank" | "basket" | "bell" | "bookmark" | "boxes" | "briefcase" | "building" | "calculator" | "calendar" | "camera" | "card-checklist" | "cash" | "chat-left-text" | "check-circle" | "clipboard" | "clock-history" | "credit-card" | "download" | "envelope" | "exclamation-triangle" | "file-earmark" | "file-earmark-check" | "file-earmark-lock" | "file-earmark-medical" | "file-earmark-person" | "file-earmark-spreadsheet" | "file-text" | "files" | "folder" | "funnel" | "gear" | "globe2" | "hash" | "heart" | "house" | "inbox" | "journals" | "list-task" | "newspaper" | "paperclip" | "people" | "person" | "printer" | "receipt" | "safe" | "search" | "send" | "shop" | "stack" | "stars" | "tag" | "tags" | "telephone" | "truck" | "upc-scan" | "wallet2";
        /** Document field the view sorts by, such as created, added, modified, title, correspondent__name, document_type__name, archive_serial_number, num_notes, owner, page_count or custom_field_<id>, or null for the default order. */
        sort_field?: string | null;
        /** Whether to sort in descending order. Defaults to false. */
        sort_reverse?: boolean;
        /** Filter rules that define which documents the view shows. On update the list replaces all existing rules. */
        filter_rules: Array<{
          /** Numeric filter rule type: 0 title contains, 1 content contains, 2 ASN is, 3 correspondent is, 4 document type is, 5 is in inbox, 6 has tag, 7 has any tag, 8 created before, 9 created after, 10 created year is, 11 created month is, 12 created day is, 13 added before, 14 added after, 15 modified before, 16 modified after, 17 does not have tag, 18 does not have ASN, 19 title or content contains, 20 fulltext query, 21 more like this, 22 has tags in, 23 ASN greater than, 24 ASN less than, 25 storage path is, 26 has correspondent in, 27 does not have correspondent in, 28 has document type in, 29 does not have document type in, 30 has storage path in, 31 does not have storage path in, 32 owner is, 33 has owner in, 34 does not have owner, 35 does not have owner in, 36 has custom field value, 37 is shared by me, 38 has custom fields, 39 has custom field in, 40 does not have custom field in, 41 does not have custom field, 42 custom fields query, 43 created to, 44 created from, 45 added to, 46 added from, 47 mime type is, 48 simple title search, 49 simple text search. */
          rule_type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49;
          /** Rule value as a string (an object id, a date as YYYY-MM-DD, a search term or a boolean as true/false), at most 255 characters, or null for rules that take no value. */
          value?: string | null;
        }>;
        /**
         * Documents per page when displaying the view, or null for the user's default.
         * @exclusiveMinimum 0
         */
        page_size?: number | null;
        /** Display mode: table, smallCards or largeCards; null uses the user's default. */
        display_mode?: "table" | "smallCards" | "largeCards" | null;
        /** Columns or fields shown for each document: title, created, added, tag, correspondent, documenttype, storagepath, note, owner, shared, asn, pagecount or custom_field_<id> for an existing custom field. Null (or an empty list on update) restores the default set. */
        display_fields?: Array<string> | null;
        /** Id of the user that owns the object, or null to make it unowned. On create it defaults to the connected user. Only the current owner or a superuser may change it. */
        owner?: number | null;
        /** Object-level permissions to write. Supplying this replaces the existing permissions of the object; only the owner or a superuser may change them. */
        set_permissions?: {
          /** Users and groups granted this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
          /** Users and groups granted this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
        };
      };
      output: {
        /** The saved view id. */
        id?: number;
        /** The saved view name. */
        name?: string;
        /** Icon name shown next to the view, or null. */
        icon?: string | null;
        /** Field the view sorts by. */
        sort_field?: string | null;
        /** Whether the sort is descending. */
        sort_reverse?: boolean;
        /** Filter rules that define the view. */
        filter_rules?: Array<{
          /** Numeric filter rule type. */
          rule_type?: number;
          /** Rule value, or null. */
          value?: string | null;
          [key: string]: unknown;
        }>;
        /** Page size used when displaying the view, or null. */
        page_size?: number | null;
        /** Display mode: table, smallCards or largeCards. */
        display_mode?: string | null;
        /** Fields shown in the view. */
        display_fields?: Array<string> | null;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        [key: string]: unknown;
      };
    };
    /** Create a public share link for one document. The link is owned by the connected user, who must be allowed to view the document. The response includes slug and the derived share_url; share links cannot be edited afterwards, so delete and recreate to change the expiration or file version. Requires the add_sharelink permission. */
    "paperless_ngx.create_share_link": {
      input: {
        /**
         * Id of the document to share.
         * @exclusiveMinimum 0
         */
        document: number;
        /** Which file the link serves: archive (the archived PDF, falling back to the original when none exists) or original. Defaults to archive. */
        file_version?: "archive" | "original";
        /**
         * ISO 8601 timestamp after which the link stops working, or null for no expiration. Defaults to null.
         * @format date-time
         */
        expiration?: string | null;
      };
      output: {
        /** The share link id. */
        id?: number;
        /** ISO 8601 creation timestamp. */
        created?: string;
        /** ISO 8601 expiration timestamp, or null when it never expires. */
        expiration?: string | null;
        /** Slug that forms the public URL <instance>/share/<slug>. */
        slug?: string;
        /** Id of the shared document. */
        document?: number;
        /** Which file is served: archive or original. */
        file_version?: string;
        /** Public URL of the share, derived by the connector as <instance>/share/<slug>. Anyone holding it can download the file without logging in until expiration. */
        share_url?: string;
        [key: string]: unknown;
      };
    };
    /** Create a share link bundle: one public link serving a zip archive of several documents. The connected user must be allowed to view every document and duplicate ids are rejected. The zip is built by a background task, so the bundle is returned with status pending; poll get_share_link_bundle until it is ready. Bundles cannot be edited afterwards. Requires the add_sharelinkbundle permission. */
    "paperless_ngx.create_share_link_bundle": {
      input: {
        /**
         * Ids of the documents to pack, in archive order. At least one, without duplicates.
         * @minItems 1
         */
        document_ids: Array<number>;
        /** Which file the link serves: archive (the archived PDF, falling back to the original when none exists) or original. Defaults to archive. */
        file_version?: "archive" | "original";
        /**
         * Number of days from now after which the bundle expires (at least 1), or null for no expiration. Defaults to null.
         * @minimum 1
         */
        expiration_days?: number | null;
      };
      output: {
        /** The bundle id. */
        id?: number;
        /** ISO 8601 creation timestamp. */
        created?: string;
        /** ISO 8601 expiration timestamp, or null when the bundle never expires. */
        expiration?: string | null;
        /** Slug that forms the public URL <instance>/share/<slug>. */
        slug?: string;
        /** Which file version is packed for each document: archive or original. */
        file_version?: string;
        /** Build status of the zip archive: pending (queued), processing (being built), ready (downloadable) or failed (see last_error). */
        status?: string;
        /** Size of the built zip archive in bytes, or null until built. */
        size_bytes?: number | null;
        /** Details of the last failed build, or null when the build succeeded. */
        last_error?: unknown;
        /** ISO 8601 timestamp of the last successful build, or null. */
        built_at?: string | null;
        /** Ids of the documents in the bundle. */
        documents?: Array<number>;
        /** Number of documents in the bundle. */
        document_count?: number;
        /** Public URL of the share, derived by the connector as <instance>/share/<slug>. Anyone holding it can download the file without logging in until expiration. */
        share_url?: string;
        [key: string]: unknown;
      };
    };
    /** Create a storage path from a filename template and an optional matching rule. Use test_storage_path first to preview how the template renders. The owner defaults to the connected user. Requires the add_storagepath permission. */
    "paperless_ngx.create_storage_path": {
      input: {
        /**
         * The storage path name, at most 128 characters. Must be unique per owner; Paperless-ngx rejects duplicates with "Object violates owner / name unique constraint".
         * @minLength 1
         */
        name: string;
        /**
         * Filename template rendered with Jinja placeholders such as {{ created_year }}/{{ correspondent }}/{{ title }}; legacy {created_year} format strings are converted automatically. Paperless-ngx validates the template by rendering it against sample values and rejects unknown variables. Changing it moves every document using the path in the background.
         * @minLength 1
         */
        path: string;
        /** Text or pattern the matching algorithm compares against document content. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). Defaults to 1 (any word); 6 relies on the trained classifier and ignores match; 4 requires match to be a valid regular expression. */
        matching_algorithm?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        /** Whether matching ignores case. Defaults to true. */
        is_insensitive?: boolean;
        /** Id of the user that owns the object, or null to make it unowned. On create it defaults to the connected user. Only the current owner or a superuser may change it. */
        owner?: number | null;
        /** Object-level permissions to write. Supplying this replaces the existing permissions of the object; only the owner or a superuser may change them. */
        set_permissions?: {
          /** Users and groups granted this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
          /** Users and groups granted this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
        };
      };
      output: {
        /** The object id. */
        id?: number;
        /** URL-safe slug derived from the name. */
        slug?: string;
        /** The object name. */
        name?: string;
        /** Text or pattern used by the matching algorithm. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
        matching_algorithm?: number;
        /** Whether matching ignores case. */
        is_insensitive?: boolean;
        /** Number of documents visible to the connected user that use this object. */
        document_count?: number;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        /** Filename template used to place documents under the media directory. */
        path?: string;
        [key: string]: unknown;
      };
    };
    /** Create a tag with an optional color, matching rule, inbox flag and parent tag. The owner defaults to the connected user. Requires the add_tag permission. */
    "paperless_ngx.create_tag": {
      input: {
        /**
         * The tag name, at most 128 characters. Must be unique per owner; Paperless-ngx rejects duplicates with "Object violates owner / name unique constraint".
         * @minLength 1
         */
        name: string;
        /**
         * Hex color for the tag such as #a6cee3 (a # followed by six hex digits). Defaults to #a6cee3; the contrasting text_color is derived automatically.
         * @pattern ^#[0-9a-fA-F]{6}$
         */
        color?: string;
        /** Text or pattern the matching algorithm compares against document content. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). Defaults to 1 (any word); 6 relies on the trained classifier and ignores match; 4 requires match to be a valid regular expression. */
        matching_algorithm?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        /** Whether matching ignores case. Defaults to true. */
        is_insensitive?: boolean;
        /** Whether newly consumed documents automatically receive this tag. Defaults to false. */
        is_inbox_tag?: boolean;
        /**
         * Id of the parent tag for hierarchical tags, or null for a root tag. A tag cannot be its own ancestor and nesting is limited to 5 levels. Moving a tag under a new parent also adds the new ancestor tags to documents that carry it.
         * @exclusiveMinimum 0
         */
        parent?: number | null;
        /** Id of the user that owns the object, or null to make it unowned. On create it defaults to the connected user. Only the current owner or a superuser may change it. */
        owner?: number | null;
        /** Object-level permissions to write. Supplying this replaces the existing permissions of the object; only the owner or a superuser may change them. */
        set_permissions?: {
          /** Users and groups granted this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
          /** Users and groups granted this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
        };
      };
      output: {
        /** The object id. */
        id?: number;
        /** URL-safe slug derived from the name. */
        slug?: string;
        /** The object name. */
        name?: string;
        /** Text or pattern used by the matching algorithm. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
        matching_algorithm?: number;
        /** Whether matching ignores case. */
        is_insensitive?: boolean;
        /** Number of documents visible to the connected user that use this object. */
        document_count?: number;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        /** Hex color such as #a6cee3. */
        color?: string;
        /** Black or white text color chosen for contrast against color. */
        text_color?: string;
        /** Whether new documents automatically receive this tag. */
        is_inbox_tag?: boolean;
        /** Id of the parent tag, or null for a root tag. */
        parent?: number | null;
        /** Child tags, each with the same shape as a tag. */
        children?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Create a Paperless-ngx user account. Only username is required; without a password the account cannot log in with a password until one is set. Granting is_staff or is_superuser requires the caller to be a superuser. Requires the add_user permission. */
    "paperless_ngx.create_user": {
      input: {
        /**
         * Unique username of at most 150 characters: letters, digits and @ . + - _ only.
         * @minLength 1
         * @maxLength 150
         */
        username: string;
        /** Email address; may be empty. */
        email?: string;
        /** Plain-text password, checked by the instance password validators. Paperless-ngx never returns it; get_user shows an obfuscated placeholder made of asterisks instead. An empty value or a value made only of asterisks leaves the current password unchanged. */
        password?: string;
        /**
         * First name; may be empty.
         * @maxLength 150
         */
        first_name?: string;
        /**
         * Last name; may be empty.
         * @maxLength 150
         */
        last_name?: string;
        /** Whether the user may access the Django admin site and see every task. Only a superuser may grant or change it; other callers get 403. */
        is_staff?: boolean;
        /** Whether the account may log in and use its API token. Defaults to true on create. */
        is_active?: boolean;
        /** Whether the user has every permission. Only a superuser may grant or change it, and only superusers may modify or delete other superusers. */
        is_superuser?: boolean;
        /** Ids of the groups the user belongs to. Replaces the whole list. */
        groups?: Array<number>;
        /** Permission codenames granted directly to the user, for example view_document. Replaces the whole list. */
        user_permissions?: Array<string>;
      };
      output: {
        /** A Paperless-ngx user. */
        user: {
          /** The user id. */
          id?: number;
          /** The username. */
          username?: string;
          /** The email address. */
          email?: string;
          /** Obfuscated placeholder; the real password is never returned. */
          password?: string;
          /** The first name. */
          first_name?: string;
          /** The last name. */
          last_name?: string;
          /** ISO 8601 timestamp when the user was created. */
          date_joined?: string;
          /** Whether the user may access the admin site. */
          is_staff?: boolean;
          /** Whether the account is active. */
          is_active?: boolean;
          /** Whether the user is a superuser. */
          is_superuser?: boolean;
          /** Ids of the groups the user belongs to. */
          groups?: Array<number>;
          /** Permission codenames granted directly to the user. */
          user_permissions?: Array<string>;
          /** Permission codenames inherited from groups. */
          inherited_permissions?: Array<string>;
          /** Whether TOTP multi-factor authentication is active. */
          is_mfa_enabled?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Create a workflow with its triggers and actions in one call. Nested triggers and actions without an id are created; entries with an id update that existing trigger or action in place. Remote OCR actions need a consumption started trigger and apply AI suggestions actions need a trigger of another type. Requires the add_workflow permission. */
    "paperless_ngx.create_workflow": {
      input: {
        /**
         * Workflow name, unique across workflows (max 256 characters).
         * @minLength 1
         */
        name: string;
        /** Evaluation order among workflows; lower values run first. Defaults to 0. */
        order?: number;
        /** Whether the workflow is active. Defaults to true. */
        enabled?: boolean;
        /** Triggers that start the workflow. Each entry takes the fields of create_workflow_trigger; include id to reuse an existing trigger. */
        triggers: Array<{
          /** Id of an existing object to update in place. Omit or pass null to create a new one. */
          id?: number | null;
          /** Trigger type: 1 consumption started (runs before the document is stored and requires filter_filename, filter_path or filter_mailrule), 2 document added, 3 document updated, 4 scheduled (fires relative to the date field selected by schedule_date_field). */
          type: 1 | 2 | 3 | 4;
          /** Document sources the trigger reacts to; only evaluated by consumption started (1) and document added (2) triggers. Defaults to [1, 2, 3]. */
          sources?: Array<1 | 2 | 3 | 4>;
          /** Only match documents whose consumption path matches this pattern; * wildcards are allowed and matching is case insensitive. Empty strings are stored as null. */
          filter_path?: string | null;
          /** Only match documents whose file name matches this pattern, for example *.pdf or *invoice*; matching is case insensitive. Empty strings are stored as null. */
          filter_filename?: string | null;
          /** Id of the mail rule the document must have been fetched by, or null for any source. */
          filter_mailrule?: number | null;
          /** Matching algorithm applied to the document content: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word. Defaults to 0. */
          matching_algorithm?: 0 | 1 | 2 | 3 | 4 | 5;
          /** Text or pattern compared against the document content using matching_algorithm. Defaults to an empty string. */
          match?: string;
          /** Whether content matching ignores case. Defaults to true. */
          is_insensitive?: boolean;
          /** Ids of tags; the document must carry at least one of them. */
          filter_has_tags?: Array<number>;
          /** Ids of tags; the document must carry all of them. */
          filter_has_all_tags?: Array<number>;
          /** Ids of tags; the document must not carry any of them. */
          filter_has_not_tags?: Array<number>;
          /** JSON-encoded custom field query expression using the same syntax as the custom_field_query filter of list_documents, or null. Empty strings are stored as null. */
          filter_custom_field_query?: string | null;
          /** Ids of correspondents; the document must have one of them. */
          filter_has_any_correspondents?: Array<number>;
          /** Ids of correspondents the document must not have. */
          filter_has_not_correspondents?: Array<number>;
          /** Ids of document types; the document must have one of them. */
          filter_has_any_document_types?: Array<number>;
          /** Ids of document types the document must not have. */
          filter_has_not_document_types?: Array<number>;
          /** Ids of storage paths; the document must use one of them. */
          filter_has_any_storage_paths?: Array<number>;
          /** Ids of storage paths the document must not use. */
          filter_has_not_storage_paths?: Array<number>;
          /** Id of the correspondent the document must have, or null for any. */
          filter_has_correspondent?: number | null;
          /** Id of the document type the document must have, or null for any. */
          filter_has_document_type?: number | null;
          /** Id of the storage path the document must use, or null for any. */
          filter_has_storage_path?: number | null;
          /** Number of days after the selected date field at which a scheduled (4) trigger fires; negative values fire before it. Defaults to 0. */
          schedule_offset_days?: number;
          /** Whether a scheduled (4) trigger fires again every schedule_recurring_interval_days. Defaults to false. */
          schedule_is_recurring?: boolean;
          /**
           * Number of days between recurring runs of a scheduled (4) trigger, at least 1. Defaults to 1.
           * @exclusiveMinimum 0
           */
          schedule_recurring_interval_days?: number;
          /** Date field the scheduled trigger is measured from: added, created, modified or custom_field (then schedule_date_custom_field is required). Defaults to added. */
          schedule_date_field?: "added" | "created" | "modified" | "custom_field";
          /** Id of the date custom field used when schedule_date_field is custom_field, or null. */
          schedule_date_custom_field?: number | null;
        }>;
        /** Actions performed when a trigger matches, run in array order. Each entry takes the fields of create_workflow_action; include id to reuse an existing action. */
        actions: Array<{
          /** Id of an existing object to update in place. Omit or pass null to create a new one. */
          id?: number | null;
          /** Action type: 1 assignment, 2 removal, 3 email (email is required), 4 webhook (webhook is required), 5 password removal (passwords is required), 6 move to trash, 7 remote OCR (the workflow needs a consumption started trigger), 8 apply AI suggestions (ai_suggestion_fields is required and the workflow needs a trigger other than consumption started). Defaults to 1. */
          type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
          /** Jinja2 template for the new document title, for example {{ correspondent }} - {{ created_year }}; see the workflow template documentation. Null or an empty string leaves the title unchanged. */
          assign_title?: string | null;
          /** Ids of tags to add to the document. */
          assign_tags?: Array<number> | null;
          /** Id of the correspondent to assign, or null. */
          assign_correspondent?: number | null;
          /** Id of the document type to assign, or null. */
          assign_document_type?: number | null;
          /** Id of the storage path to assign, or null. */
          assign_storage_path?: number | null;
          /** Id of the user to set as owner, or null. */
          assign_owner?: number | null;
          /** Ids of users granted view permission. */
          assign_view_users?: Array<number>;
          /** Ids of groups granted view permission. */
          assign_view_groups?: Array<number>;
          /** Ids of users granted change permission. */
          assign_change_users?: Array<number>;
          /** Ids of groups granted change permission. */
          assign_change_groups?: Array<number>;
          /** Ids of custom fields to attach to the document. */
          assign_custom_fields?: Array<number>;
          /** Values for the attached custom fields keyed by custom field id (as a string); an empty string is stored as null. Fields listed in assign_custom_fields without a value are attached empty. */
          assign_custom_fields_values?: Record<string, unknown> | null;
          /** Whether to remove every tag. Defaults to false. */
          remove_all_tags?: boolean;
          /** Ids of tags to remove. */
          remove_tags?: Array<number>;
          /** Whether to clear the correspondent. Defaults to false. */
          remove_all_correspondents?: boolean;
          /** Ids of correspondents to clear when currently assigned. */
          remove_correspondents?: Array<number>;
          /** Whether to clear the document type. Defaults to false. */
          remove_all_document_types?: boolean;
          /** Ids of document types to clear when currently assigned. */
          remove_document_types?: Array<number>;
          /** Whether to clear the storage path. Defaults to false. */
          remove_all_storage_paths?: boolean;
          /** Ids of storage paths to clear when currently assigned. */
          remove_storage_paths?: Array<number>;
          /** Ids of custom fields to detach. */
          remove_custom_fields?: Array<number>;
          /** Whether to detach every custom field. Defaults to false. */
          remove_all_custom_fields?: boolean;
          /** Whether to clear the owner. Defaults to false. */
          remove_all_owners?: boolean;
          /** Ids of users to clear as owner when they own the document. */
          remove_owners?: Array<number>;
          /** Whether to remove all object permissions. Defaults to false. */
          remove_all_permissions?: boolean;
          /** Ids of users whose view permission is removed. */
          remove_view_users?: Array<number>;
          /** Ids of groups whose view permission is removed. */
          remove_view_groups?: Array<number>;
          /** Ids of users whose change permission is removed. */
          remove_change_users?: Array<number>;
          /** Ids of groups whose change permission is removed. */
          remove_change_groups?: Array<number>;
          /** Email settings for an email (type 3) action. Paperless-ngx must have outgoing email configured. */
          email?: {
            /** Id of an existing object to update in place. Omit or pass null to create a new one. */
            id?: number | null;
            /**
             * Email subject; may contain placeholders such as {doc_title} or {correspondent} as documented for workflow templates.
             * @minLength 1
             */
            subject: string;
            /**
             * Email body; may contain the same placeholders as subject.
             * @minLength 1
             */
            body: string;
            /**
             * Comma separated recipient email addresses.
             * @minLength 1
             */
            to: string;
            /** Whether to attach the document file to the email. Defaults to false. */
            include_document?: boolean;
          } | null;
          /** Webhook settings for a webhook (type 4) action. */
          webhook?: {
            /** Id of an existing object to update in place. Omit or pass null to create a new one. */
            id?: number | null;
            /**
             * Destination URL of the webhook. Paperless-ngx validates it as an HTTP(S) URL.
             * @format uri
             */
            url: string;
            /** When true, send params as form fields (or JSON when as_json is true); when false, send body instead. Defaults to true. */
            use_params?: boolean;
            /** When true and use_params is true, send params as a JSON payload instead of form fields. Defaults to false. */
            as_json?: boolean;
            /** Parameters sent when use_params is true, keyed by name; values may contain workflow placeholders. Null sends none. */
            params?: Record<string, unknown> | null;
            /** Raw request body sent when use_params is false; may contain workflow placeholders. Null sends none. */
            body?: string | null;
            /** HTTP headers sent with the webhook request, keyed by header name, or null. They may carry secrets such as an Authorization value and are redacted from connector logs. */
            headers?: Record<string, unknown> | null;
            /** Whether to attach the document file to the webhook request. Defaults to false. */
            include_document?: boolean;
          } | null;
          /** Passwords to try when removing PDF protection; required and non-empty for password removal (type 5) actions. Redacted from connector logs. */
          passwords?: Array<string> | null;
          /** Which AI-suggested fields to apply; required and non-empty for apply AI suggestions (type 8) actions. */
          ai_suggestion_fields?: Array<"title" | "tags" | "correspondent" | "document_type" | "storage_path" | "created"> | null;
          /** Whether apply AI suggestions actions create suggested tags, correspondents, document types and storage paths that do not exist yet instead of skipping them. Defaults to false. */
          ai_create_missing?: boolean;
          /** Whether apply AI suggestions actions overwrite fields that already have a value; tags are always added, never replaced. Defaults to false. */
          ai_overwrite_existing?: boolean;
        }>;
      };
      output: {
        /** The workflow id. */
        id?: number;
        /** The workflow name. */
        name?: string;
        /** Evaluation order among workflows. */
        order?: number;
        /** Whether the workflow is active. */
        enabled?: boolean;
        /** Triggers that start the workflow. */
        triggers?: Array<{
          /** The trigger id. */
          id?: number;
          /** Trigger type: 1 consumption started (runs before the document is stored and requires filter_filename, filter_path or filter_mailrule), 2 document added, 3 document updated, 4 scheduled (fires relative to the date field selected by schedule_date_field). */
          type?: number;
          /** Document sources the trigger reacts to. */
          sources?: Array<number>;
          /** Consumption path pattern, or null. */
          filter_path?: string | null;
          /** File name pattern, or null. */
          filter_filename?: string | null;
          /** Id of the required mail rule, or null. */
          filter_mailrule?: number | null;
          /** Matching algorithm applied to the document content: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word. Defaults to 0. */
          matching_algorithm?: number;
          /** Text or pattern used by the matching algorithm. */
          match?: string;
          /** Whether content matching ignores case. */
          is_insensitive?: boolean;
          /** Ids of tags the document must carry at least one of. */
          filter_has_tags?: Array<number>;
          /** Ids of tags the document must carry all of. */
          filter_has_all_tags?: Array<number>;
          /** Ids of tags the document must not carry. */
          filter_has_not_tags?: Array<number>;
          /** JSON-encoded custom field query expression, or null. */
          filter_custom_field_query?: string | null;
          /** Ids of correspondents the document must have one of. */
          filter_has_any_correspondents?: Array<number>;
          /** Ids of correspondents the document must not have. */
          filter_has_not_correspondents?: Array<number>;
          /** Ids of document types the document must have one of. */
          filter_has_any_document_types?: Array<number>;
          /** Ids of document types the document must not have. */
          filter_has_not_document_types?: Array<number>;
          /** Ids of storage paths the document must use one of. */
          filter_has_any_storage_paths?: Array<number>;
          /** Ids of storage paths the document must not use. */
          filter_has_not_storage_paths?: Array<number>;
          /** Id of the required correspondent, or null. */
          filter_has_correspondent?: number | null;
          /** Id of the required document type, or null. */
          filter_has_document_type?: number | null;
          /** Id of the required storage path, or null. */
          filter_has_storage_path?: number | null;
          /** Day offset of a scheduled trigger from its date field. */
          schedule_offset_days?: number;
          /** Whether a scheduled trigger repeats. */
          schedule_is_recurring?: boolean;
          /** Days between recurring scheduled runs. */
          schedule_recurring_interval_days?: number;
          /** Date field the scheduled trigger is measured from: added, created, modified or custom_field (then schedule_date_custom_field is required). Defaults to added. */
          schedule_date_field?: string;
          /** Id of the date custom field used by the schedule, or null. */
          schedule_date_custom_field?: number | null;
          [key: string]: unknown;
        }>;
        /** Actions the workflow performs, in execution order. */
        actions?: Array<{
          /** The action id. */
          id?: number;
          /** Action type: 1 assignment, 2 removal, 3 email (email is required), 4 webhook (webhook is required), 5 password removal (passwords is required), 6 move to trash, 7 remote OCR (the workflow needs a consumption started trigger), 8 apply AI suggestions (ai_suggestion_fields is required and the workflow needs a trigger other than consumption started). Defaults to 1. */
          type?: number;
          /** Title template, or null. */
          assign_title?: string | null;
          /** Ids of tags added to the document. */
          assign_tags?: Array<number>;
          /** Id of the assigned correspondent, or null. */
          assign_correspondent?: number | null;
          /** Id of the assigned document type, or null. */
          assign_document_type?: number | null;
          /** Id of the assigned storage path, or null. */
          assign_storage_path?: number | null;
          /** Id of the assigned owner, or null. */
          assign_owner?: number | null;
          /** Ids of users granted view permission. */
          assign_view_users?: Array<number>;
          /** Ids of groups granted view permission. */
          assign_view_groups?: Array<number>;
          /** Ids of users granted change permission. */
          assign_change_users?: Array<number>;
          /** Ids of groups granted change permission. */
          assign_change_groups?: Array<number>;
          /** Ids of custom fields attached to the document. */
          assign_custom_fields?: Array<number>;
          /** Custom field values keyed by custom field id, or null. */
          assign_custom_fields_values?: Record<string, unknown> | null;
          /** Whether every tag is removed. */
          remove_all_tags?: boolean;
          /** Ids of tags removed. */
          remove_tags?: Array<number>;
          /** Whether the correspondent is cleared. */
          remove_all_correspondents?: boolean;
          /** Ids of correspondents cleared when assigned. */
          remove_correspondents?: Array<number>;
          /** Whether the document type is cleared. */
          remove_all_document_types?: boolean;
          /** Ids of document types cleared when assigned. */
          remove_document_types?: Array<number>;
          /** Whether the storage path is cleared. */
          remove_all_storage_paths?: boolean;
          /** Ids of storage paths cleared when assigned. */
          remove_storage_paths?: Array<number>;
          /** Ids of custom fields detached. */
          remove_custom_fields?: Array<number>;
          /** Whether every custom field is detached. */
          remove_all_custom_fields?: boolean;
          /** Whether the owner is cleared. */
          remove_all_owners?: boolean;
          /** Ids of users cleared as owner. */
          remove_owners?: Array<number>;
          /** Whether all object permissions are removed. */
          remove_all_permissions?: boolean;
          /** Ids of users whose view permission is removed. */
          remove_view_users?: Array<number>;
          /** Ids of groups whose view permission is removed. */
          remove_view_groups?: Array<number>;
          /** Ids of users whose change permission is removed. */
          remove_change_users?: Array<number>;
          /** Ids of groups whose change permission is removed. */
          remove_change_groups?: Array<number>;
          /** Email settings of an email action. */
          email?: {
            /** The email settings id. */
            id?: number;
            /** Email subject template. */
            subject?: string;
            /** Email body template. */
            body?: string;
            /** Comma separated recipient email addresses. */
            to?: string;
            /** Whether the document file is attached. */
            include_document?: boolean;
            [key: string]: unknown;
          } | null;
          /** Webhook settings of a webhook action. */
          webhook?: {
            /** The webhook settings id. */
            id?: number;
            /** Destination URL of the webhook. */
            url?: string;
            /** Whether params are sent instead of body. */
            use_params?: boolean;
            /** Whether params are sent as JSON. */
            as_json?: boolean;
            /** Parameters sent with the webhook, or null. */
            params?: Record<string, unknown> | null;
            /** Raw request body, or null. */
            body?: string | null;
            /** HTTP headers sent with the webhook request, keyed by header name, or null. They may carry secrets such as an Authorization value and are redacted from connector logs. */
            headers?: Record<string, unknown> | null;
            /** Whether the document file is attached. */
            include_document?: boolean;
            [key: string]: unknown;
          } | null;
          /** Passwords tried by password removal actions, or null. Redacted from connector logs. */
          passwords?: Array<string> | null;
          /** AI-suggested fields applied by the action, or null. */
          ai_suggestion_fields?: Array<string> | null;
          /** Whether suggested objects that do not exist are created. */
          ai_create_missing?: boolean;
          /** Whether existing field values are overwritten. */
          ai_overwrite_existing?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a standalone workflow action. Email (3), webhook (4), password removal (5) and apply AI suggestions (8) actions require their email, webhook, passwords or ai_suggestion_fields data. Objects not attached to any workflow are deleted automatically the next time any workflow is updated, so attach it promptly through update_workflow or create_workflow. Requires the add_workflowaction permission. */
    "paperless_ngx.create_workflow_action": {
      input: {
        /** Action type: 1 assignment, 2 removal, 3 email (email is required), 4 webhook (webhook is required), 5 password removal (passwords is required), 6 move to trash, 7 remote OCR (the workflow needs a consumption started trigger), 8 apply AI suggestions (ai_suggestion_fields is required and the workflow needs a trigger other than consumption started). Defaults to 1. */
        type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
        /** Jinja2 template for the new document title, for example {{ correspondent }} - {{ created_year }}; see the workflow template documentation. Null or an empty string leaves the title unchanged. */
        assign_title?: string | null;
        /** Ids of tags to add to the document. */
        assign_tags?: Array<number> | null;
        /** Id of the correspondent to assign, or null. */
        assign_correspondent?: number | null;
        /** Id of the document type to assign, or null. */
        assign_document_type?: number | null;
        /** Id of the storage path to assign, or null. */
        assign_storage_path?: number | null;
        /** Id of the user to set as owner, or null. */
        assign_owner?: number | null;
        /** Ids of users granted view permission. */
        assign_view_users?: Array<number>;
        /** Ids of groups granted view permission. */
        assign_view_groups?: Array<number>;
        /** Ids of users granted change permission. */
        assign_change_users?: Array<number>;
        /** Ids of groups granted change permission. */
        assign_change_groups?: Array<number>;
        /** Ids of custom fields to attach to the document. */
        assign_custom_fields?: Array<number>;
        /** Values for the attached custom fields keyed by custom field id (as a string); an empty string is stored as null. Fields listed in assign_custom_fields without a value are attached empty. */
        assign_custom_fields_values?: Record<string, unknown> | null;
        /** Whether to remove every tag. Defaults to false. */
        remove_all_tags?: boolean;
        /** Ids of tags to remove. */
        remove_tags?: Array<number>;
        /** Whether to clear the correspondent. Defaults to false. */
        remove_all_correspondents?: boolean;
        /** Ids of correspondents to clear when currently assigned. */
        remove_correspondents?: Array<number>;
        /** Whether to clear the document type. Defaults to false. */
        remove_all_document_types?: boolean;
        /** Ids of document types to clear when currently assigned. */
        remove_document_types?: Array<number>;
        /** Whether to clear the storage path. Defaults to false. */
        remove_all_storage_paths?: boolean;
        /** Ids of storage paths to clear when currently assigned. */
        remove_storage_paths?: Array<number>;
        /** Ids of custom fields to detach. */
        remove_custom_fields?: Array<number>;
        /** Whether to detach every custom field. Defaults to false. */
        remove_all_custom_fields?: boolean;
        /** Whether to clear the owner. Defaults to false. */
        remove_all_owners?: boolean;
        /** Ids of users to clear as owner when they own the document. */
        remove_owners?: Array<number>;
        /** Whether to remove all object permissions. Defaults to false. */
        remove_all_permissions?: boolean;
        /** Ids of users whose view permission is removed. */
        remove_view_users?: Array<number>;
        /** Ids of groups whose view permission is removed. */
        remove_view_groups?: Array<number>;
        /** Ids of users whose change permission is removed. */
        remove_change_users?: Array<number>;
        /** Ids of groups whose change permission is removed. */
        remove_change_groups?: Array<number>;
        /** Email settings for an email (type 3) action. Paperless-ngx must have outgoing email configured. */
        email?: {
          /** Id of an existing object to update in place. Omit or pass null to create a new one. */
          id?: number | null;
          /**
           * Email subject; may contain placeholders such as {doc_title} or {correspondent} as documented for workflow templates.
           * @minLength 1
           */
          subject: string;
          /**
           * Email body; may contain the same placeholders as subject.
           * @minLength 1
           */
          body: string;
          /**
           * Comma separated recipient email addresses.
           * @minLength 1
           */
          to: string;
          /** Whether to attach the document file to the email. Defaults to false. */
          include_document?: boolean;
        } | null;
        /** Webhook settings for a webhook (type 4) action. */
        webhook?: {
          /** Id of an existing object to update in place. Omit or pass null to create a new one. */
          id?: number | null;
          /**
           * Destination URL of the webhook. Paperless-ngx validates it as an HTTP(S) URL.
           * @format uri
           */
          url: string;
          /** When true, send params as form fields (or JSON when as_json is true); when false, send body instead. Defaults to true. */
          use_params?: boolean;
          /** When true and use_params is true, send params as a JSON payload instead of form fields. Defaults to false. */
          as_json?: boolean;
          /** Parameters sent when use_params is true, keyed by name; values may contain workflow placeholders. Null sends none. */
          params?: Record<string, unknown> | null;
          /** Raw request body sent when use_params is false; may contain workflow placeholders. Null sends none. */
          body?: string | null;
          /** HTTP headers sent with the webhook request, keyed by header name, or null. They may carry secrets such as an Authorization value and are redacted from connector logs. */
          headers?: Record<string, unknown> | null;
          /** Whether to attach the document file to the webhook request. Defaults to false. */
          include_document?: boolean;
        } | null;
        /** Passwords to try when removing PDF protection; required and non-empty for password removal (type 5) actions. Redacted from connector logs. */
        passwords?: Array<string> | null;
        /** Which AI-suggested fields to apply; required and non-empty for apply AI suggestions (type 8) actions. */
        ai_suggestion_fields?: Array<"title" | "tags" | "correspondent" | "document_type" | "storage_path" | "created"> | null;
        /** Whether apply AI suggestions actions create suggested tags, correspondents, document types and storage paths that do not exist yet instead of skipping them. Defaults to false. */
        ai_create_missing?: boolean;
        /** Whether apply AI suggestions actions overwrite fields that already have a value; tags are always added, never replaced. Defaults to false. */
        ai_overwrite_existing?: boolean;
      };
      output: {
        /** The action id. */
        id?: number;
        /** Action type: 1 assignment, 2 removal, 3 email (email is required), 4 webhook (webhook is required), 5 password removal (passwords is required), 6 move to trash, 7 remote OCR (the workflow needs a consumption started trigger), 8 apply AI suggestions (ai_suggestion_fields is required and the workflow needs a trigger other than consumption started). Defaults to 1. */
        type?: number;
        /** Title template, or null. */
        assign_title?: string | null;
        /** Ids of tags added to the document. */
        assign_tags?: Array<number>;
        /** Id of the assigned correspondent, or null. */
        assign_correspondent?: number | null;
        /** Id of the assigned document type, or null. */
        assign_document_type?: number | null;
        /** Id of the assigned storage path, or null. */
        assign_storage_path?: number | null;
        /** Id of the assigned owner, or null. */
        assign_owner?: number | null;
        /** Ids of users granted view permission. */
        assign_view_users?: Array<number>;
        /** Ids of groups granted view permission. */
        assign_view_groups?: Array<number>;
        /** Ids of users granted change permission. */
        assign_change_users?: Array<number>;
        /** Ids of groups granted change permission. */
        assign_change_groups?: Array<number>;
        /** Ids of custom fields attached to the document. */
        assign_custom_fields?: Array<number>;
        /** Custom field values keyed by custom field id, or null. */
        assign_custom_fields_values?: Record<string, unknown> | null;
        /** Whether every tag is removed. */
        remove_all_tags?: boolean;
        /** Ids of tags removed. */
        remove_tags?: Array<number>;
        /** Whether the correspondent is cleared. */
        remove_all_correspondents?: boolean;
        /** Ids of correspondents cleared when assigned. */
        remove_correspondents?: Array<number>;
        /** Whether the document type is cleared. */
        remove_all_document_types?: boolean;
        /** Ids of document types cleared when assigned. */
        remove_document_types?: Array<number>;
        /** Whether the storage path is cleared. */
        remove_all_storage_paths?: boolean;
        /** Ids of storage paths cleared when assigned. */
        remove_storage_paths?: Array<number>;
        /** Ids of custom fields detached. */
        remove_custom_fields?: Array<number>;
        /** Whether every custom field is detached. */
        remove_all_custom_fields?: boolean;
        /** Whether the owner is cleared. */
        remove_all_owners?: boolean;
        /** Ids of users cleared as owner. */
        remove_owners?: Array<number>;
        /** Whether all object permissions are removed. */
        remove_all_permissions?: boolean;
        /** Ids of users whose view permission is removed. */
        remove_view_users?: Array<number>;
        /** Ids of groups whose view permission is removed. */
        remove_view_groups?: Array<number>;
        /** Ids of users whose change permission is removed. */
        remove_change_users?: Array<number>;
        /** Ids of groups whose change permission is removed. */
        remove_change_groups?: Array<number>;
        /** Email settings of an email action. */
        email?: {
          /** The email settings id. */
          id?: number;
          /** Email subject template. */
          subject?: string;
          /** Email body template. */
          body?: string;
          /** Comma separated recipient email addresses. */
          to?: string;
          /** Whether the document file is attached. */
          include_document?: boolean;
          [key: string]: unknown;
        } | null;
        /** Webhook settings of a webhook action. */
        webhook?: {
          /** The webhook settings id. */
          id?: number;
          /** Destination URL of the webhook. */
          url?: string;
          /** Whether params are sent instead of body. */
          use_params?: boolean;
          /** Whether params are sent as JSON. */
          as_json?: boolean;
          /** Parameters sent with the webhook, or null. */
          params?: Record<string, unknown> | null;
          /** Raw request body, or null. */
          body?: string | null;
          /** HTTP headers sent with the webhook request, keyed by header name, or null. They may carry secrets such as an Authorization value and are redacted from connector logs. */
          headers?: Record<string, unknown> | null;
          /** Whether the document file is attached. */
          include_document?: boolean;
          [key: string]: unknown;
        } | null;
        /** Passwords tried by password removal actions, or null. Redacted from connector logs. */
        passwords?: Array<string> | null;
        /** AI-suggested fields applied by the action, or null. */
        ai_suggestion_fields?: Array<string> | null;
        /** Whether suggested objects that do not exist are created. */
        ai_create_missing?: boolean;
        /** Whether existing field values are overwritten. */
        ai_overwrite_existing?: boolean;
        [key: string]: unknown;
      };
    };
    /** Create a standalone workflow trigger. Consumption started (type 1) triggers need filter_filename, filter_path or filter_mailrule. Objects not attached to any workflow are deleted automatically the next time any workflow is updated, so attach it promptly through update_workflow or create_workflow. Requires the add_workflowtrigger permission. */
    "paperless_ngx.create_workflow_trigger": {
      input: {
        /** Trigger type: 1 consumption started (runs before the document is stored and requires filter_filename, filter_path or filter_mailrule), 2 document added, 3 document updated, 4 scheduled (fires relative to the date field selected by schedule_date_field). */
        type: 1 | 2 | 3 | 4;
        /** Document sources the trigger reacts to; only evaluated by consumption started (1) and document added (2) triggers. Defaults to [1, 2, 3]. */
        sources?: Array<1 | 2 | 3 | 4>;
        /** Only match documents whose consumption path matches this pattern; * wildcards are allowed and matching is case insensitive. Empty strings are stored as null. */
        filter_path?: string | null;
        /** Only match documents whose file name matches this pattern, for example *.pdf or *invoice*; matching is case insensitive. Empty strings are stored as null. */
        filter_filename?: string | null;
        /** Id of the mail rule the document must have been fetched by, or null for any source. */
        filter_mailrule?: number | null;
        /** Matching algorithm applied to the document content: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word. Defaults to 0. */
        matching_algorithm?: 0 | 1 | 2 | 3 | 4 | 5;
        /** Text or pattern compared against the document content using matching_algorithm. Defaults to an empty string. */
        match?: string;
        /** Whether content matching ignores case. Defaults to true. */
        is_insensitive?: boolean;
        /** Ids of tags; the document must carry at least one of them. */
        filter_has_tags?: Array<number>;
        /** Ids of tags; the document must carry all of them. */
        filter_has_all_tags?: Array<number>;
        /** Ids of tags; the document must not carry any of them. */
        filter_has_not_tags?: Array<number>;
        /** JSON-encoded custom field query expression using the same syntax as the custom_field_query filter of list_documents, or null. Empty strings are stored as null. */
        filter_custom_field_query?: string | null;
        /** Ids of correspondents; the document must have one of them. */
        filter_has_any_correspondents?: Array<number>;
        /** Ids of correspondents the document must not have. */
        filter_has_not_correspondents?: Array<number>;
        /** Ids of document types; the document must have one of them. */
        filter_has_any_document_types?: Array<number>;
        /** Ids of document types the document must not have. */
        filter_has_not_document_types?: Array<number>;
        /** Ids of storage paths; the document must use one of them. */
        filter_has_any_storage_paths?: Array<number>;
        /** Ids of storage paths the document must not use. */
        filter_has_not_storage_paths?: Array<number>;
        /** Id of the correspondent the document must have, or null for any. */
        filter_has_correspondent?: number | null;
        /** Id of the document type the document must have, or null for any. */
        filter_has_document_type?: number | null;
        /** Id of the storage path the document must use, or null for any. */
        filter_has_storage_path?: number | null;
        /** Number of days after the selected date field at which a scheduled (4) trigger fires; negative values fire before it. Defaults to 0. */
        schedule_offset_days?: number;
        /** Whether a scheduled (4) trigger fires again every schedule_recurring_interval_days. Defaults to false. */
        schedule_is_recurring?: boolean;
        /**
         * Number of days between recurring runs of a scheduled (4) trigger, at least 1. Defaults to 1.
         * @exclusiveMinimum 0
         */
        schedule_recurring_interval_days?: number;
        /** Date field the scheduled trigger is measured from: added, created, modified or custom_field (then schedule_date_custom_field is required). Defaults to added. */
        schedule_date_field?: "added" | "created" | "modified" | "custom_field";
        /** Id of the date custom field used when schedule_date_field is custom_field, or null. */
        schedule_date_custom_field?: number | null;
      };
      output: {
        /** The trigger id. */
        id?: number;
        /** Trigger type: 1 consumption started (runs before the document is stored and requires filter_filename, filter_path or filter_mailrule), 2 document added, 3 document updated, 4 scheduled (fires relative to the date field selected by schedule_date_field). */
        type?: number;
        /** Document sources the trigger reacts to. */
        sources?: Array<number>;
        /** Consumption path pattern, or null. */
        filter_path?: string | null;
        /** File name pattern, or null. */
        filter_filename?: string | null;
        /** Id of the required mail rule, or null. */
        filter_mailrule?: number | null;
        /** Matching algorithm applied to the document content: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word. Defaults to 0. */
        matching_algorithm?: number;
        /** Text or pattern used by the matching algorithm. */
        match?: string;
        /** Whether content matching ignores case. */
        is_insensitive?: boolean;
        /** Ids of tags the document must carry at least one of. */
        filter_has_tags?: Array<number>;
        /** Ids of tags the document must carry all of. */
        filter_has_all_tags?: Array<number>;
        /** Ids of tags the document must not carry. */
        filter_has_not_tags?: Array<number>;
        /** JSON-encoded custom field query expression, or null. */
        filter_custom_field_query?: string | null;
        /** Ids of correspondents the document must have one of. */
        filter_has_any_correspondents?: Array<number>;
        /** Ids of correspondents the document must not have. */
        filter_has_not_correspondents?: Array<number>;
        /** Ids of document types the document must have one of. */
        filter_has_any_document_types?: Array<number>;
        /** Ids of document types the document must not have. */
        filter_has_not_document_types?: Array<number>;
        /** Ids of storage paths the document must use one of. */
        filter_has_any_storage_paths?: Array<number>;
        /** Ids of storage paths the document must not use. */
        filter_has_not_storage_paths?: Array<number>;
        /** Id of the required correspondent, or null. */
        filter_has_correspondent?: number | null;
        /** Id of the required document type, or null. */
        filter_has_document_type?: number | null;
        /** Id of the required storage path, or null. */
        filter_has_storage_path?: number | null;
        /** Day offset of a scheduled trigger from its date field. */
        schedule_offset_days?: number;
        /** Whether a scheduled trigger repeats. */
        schedule_is_recurring?: boolean;
        /** Days between recurring scheduled runs. */
        schedule_recurring_interval_days?: number;
        /** Date field the scheduled trigger is measured from: added, created, modified or custom_field (then schedule_date_custom_field is required). Defaults to added. */
        schedule_date_field?: string;
        /** Id of the date custom field used by the schedule, or null. */
        schedule_date_custom_field?: number | null;
        [key: string]: unknown;
      };
    };
    /** Remove the TOTP multi-factor authenticator of a user so they can log in with a password only. Callers may deactivate their own TOTP; deactivating another user's requires the caller to be a superuser. Fails with 404 when the user has no TOTP authenticator. */
    "paperless_ngx.deactivate_user_totp": {
      input: {
        /**
         * Id of the user.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Paperless-ngx removed the TOTP authenticator. */
        deactivated: boolean;
      };
    };
    /** Delete a correspondent. Documents that used it keep no correspondent. Requires the delete_correspondent permission on the correspondent. */
    "paperless_ngx.delete_correspondent": {
      input: {
        /**
         * Id of the correspondent to delete.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Paperless-ngx accepted the deletion. */
        success: boolean;
        /**
         * Id of the deleted correspondent.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Delete a custom field definition together with every value stored for it on documents. Requires the delete_customfield permission. */
    "paperless_ngx.delete_custom_field": {
      input: {
        /**
         * Id of the custom field to delete.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Paperless-ngx accepted the deletion. */
        success: boolean;
        /**
         * Id of the deleted custom field.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Move a document and all of its file versions to the trash. Trashed documents stay restorable until the configured trash delay (30 days by default) expires and are removed from the search index immediately. Requires the delete_document permission and delete access to the document. */
    "paperless_ngx.delete_document": {
      input: {
        /**
         * Id of the document.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Paperless-ngx accepted the deletion. */
        success: boolean;
        /**
         * Id of the document that was moved to the trash.
         * @exclusiveMinimum 0
         */
        document_id: number;
      };
    };
    /** Delete one note from a document and return the remaining notes. Requires the delete_note permission and change access to the document; a note id that does not belong to the document yields 404. */
    "paperless_ngx.delete_document_note": {
      input: {
        /**
         * Id of the document.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Id of the note to delete, as listed by list_document_notes.
         * @exclusiveMinimum 0
         */
        note_id: number;
      };
      output: {
        /** Whether Paperless-ngx accepted the deletion. */
        success: boolean;
        /**
         * Id of the note that was deleted.
         * @exclusiveMinimum 0
         */
        note_id: number;
        /** Every note on the document after the operation, newest first. */
        notes: Array<{
          /** The note id. */
          id?: number;
          /** The note text. */
          note?: string;
          /** ISO 8601 creation timestamp. */
          created?: string;
          /** The user who wrote the note. */
          user?: {
            /** The user id. */
            id?: number;
            /** The username. */
            username?: string;
            /** The first name. */
            first_name?: string;
            /** The last name. */
            last_name?: string;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Delete a document type. Documents that used it keep no document type. Requires the delete_documenttype permission on the document type. */
    "paperless_ngx.delete_document_type": {
      input: {
        /**
         * Id of the document type to delete.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Paperless-ngx accepted the deletion. */
        success: boolean;
        /**
         * Id of the deleted document type.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Permanently delete one non-root file version of a document. The root (original) version cannot be deleted this way; delete the document instead (400 otherwise). Requires delete access to the root document. */
    "paperless_ngx.delete_document_version": {
      input: {
        /**
         * Id of the document (or of any of its versions; the root is resolved).
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Id of the file version to delete, as listed in the versions array.
         * @exclusiveMinimum 0
         */
        version_id: number;
      };
      output: {
        /** The upstream result marker, normally "OK". */
        result: string;
        /** Id of the newest remaining version after the deletion. */
        current_version_id: number;
        [key: string]: unknown;
      };
    };
    /** Move documents to the trash (soft delete). Versions of a selected root document are trashed with it. Trashed documents can be listed with list_trash and brought back with restore_trash_documents until the trash is emptied, which happens automatically after the instance's trash delay (30 days by default). Requires the global change_document permission plus change access on every selected document (403 Insufficient permissions otherwise); superusers bypass these checks. Also requires the global delete_document permission and that the connected user owns every document (or it is unowned). */
    "paperless_ngx.delete_documents": {
      input: {
        /** Ids of the documents to operate on. */
        documents?: Array<number>;
        /** When true, operate on every document visible to the connected user that matches filters instead of the explicit documents list. Defaults to false. */
        all?: boolean;
        /** Document list filters applied when all is true, keyed by the same query parameter names accepted by list_documents (for example tags__id__all or query). */
        filters?: Record<string, string | number | boolean>;
      };
      output: {
        /** The upstream result marker, normally "OK". */
        result: string;
        [key: string]: unknown;
      };
    };
    /** Permanently delete a Paperless-ngx user group. Members lose the permissions inherited from it. Requires the delete_group permission. */
    "paperless_ngx.delete_group": {
      input: {
        /**
         * Id of the group to delete.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Paperless-ngx accepted the deletion. */
        success: boolean;
        /**
         * Id of the deleted group.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Delete a mail account together with every mail rule and processed mail record that belongs to it. Requires delete permission on the account. */
    "paperless_ngx.delete_mail_account": {
      input: {
        /**
         * Id of the mail account.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Paperless-ngx accepted the deletion. */
        success: boolean;
        /**
         * Id of the deleted mail account.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Delete a mail rule together with its processed mail records. Requires delete permission on the rule. */
    "paperless_ngx.delete_mail_rule": {
      input: {
        /**
         * Id of the mail rule.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Paperless-ngx accepted the deletion. */
        success: boolean;
        /**
         * Id of the deleted mail rule.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Delete a saved view together with its filter rules. Requires the delete_savedview permission on the view. */
    "paperless_ngx.delete_saved_view": {
      input: {
        /**
         * Id of the saved view to delete.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Paperless-ngx accepted the deletion. */
        success: boolean;
        /**
         * Id of the deleted saved view.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Delete a share link so its public URL stops working. Requires the delete_sharelink permission and ownership of the link (or superuser). */
    "paperless_ngx.delete_share_link": {
      input: {
        /**
         * The share link id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Paperless-ngx accepted the deletion. */
        success: boolean;
        /**
         * Id of the deleted share link.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Delete a share link bundle and its zip archive so the public URL stops working. Requires the delete_sharelinkbundle permission and ownership of the bundle (or superuser). */
    "paperless_ngx.delete_share_link_bundle": {
      input: {
        /**
         * The share link bundle id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Paperless-ngx accepted the deletion. */
        success: boolean;
        /**
         * Id of the deleted share link bundle.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Delete a storage path. Documents that used it fall back to the default filename format and are moved in the background. Requires the delete_storagepath permission on the storage path. */
    "paperless_ngx.delete_storage_path": {
      input: {
        /**
         * Id of the storage path to delete.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Paperless-ngx accepted the deletion. */
        success: boolean;
        /**
         * Id of the deleted storage path.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Delete a tag. Documents keep their other tags; child tags are re-parented by the tree model. Requires the delete_tag permission on the tag. */
    "paperless_ngx.delete_tag": {
      input: {
        /**
         * Id of the tag to delete.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Paperless-ngx accepted the deletion. */
        success: boolean;
        /**
         * Id of the deleted tag.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Permanently delete a Paperless-ngx user account. Objects owned by the user become unowned. Deleting a superuser requires the caller to be a superuser. Requires the delete_user permission. */
    "paperless_ngx.delete_user": {
      input: {
        /**
         * Id of the user to delete.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Paperless-ngx accepted the deletion. */
        success: boolean;
        /**
         * Id of the deleted user.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Delete a workflow. Its triggers and actions are removed the next time any workflow is updated. Requires the delete_workflow permission. */
    "paperless_ngx.delete_workflow": {
      input: {
        /**
         * The workflow id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Paperless-ngx accepted the deletion. */
        success: boolean;
        /**
         * Id of the deleted workflow.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Delete a workflow action, detaching it from any workflow that used it. Requires the delete_workflowaction permission. */
    "paperless_ngx.delete_workflow_action": {
      input: {
        /**
         * The workflow action id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Paperless-ngx accepted the deletion. */
        success: boolean;
        /**
         * Id of the deleted workflow action.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Delete a workflow trigger, detaching it from any workflow that used it. Requires the delete_workflowtrigger permission. */
    "paperless_ngx.delete_workflow_trigger": {
      input: {
        /**
         * The workflow trigger id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Paperless-ngx accepted the deletion. */
        success: boolean;
        /**
         * Id of the deleted workflow trigger.
         * @exclusiveMinimum 0
         */
        id: number;
      };
    };
    /** Download the file of a document and hand it back as a temporary connector file URL. By default the archived PDF is served when it exists, otherwise the original upload; original=true always serves the original. The preview endpoint of Paperless-ngx serves exactly the same bytes with an inline disposition, so it is not exposed as a separate action. Works for trashed documents and file versions. Requires view access to the document; files above 200 MiB are rejected. */
    "paperless_ngx.download_document": {
      input: {
        /**
         * Id of the document.
         * @exclusiveMinimum 0
         */
        id: number;
        /** When true, download the original upload even when an archived PDF exists. Defaults to false, which prefers the archived PDF and falls back to the original. */
        original?: boolean;
        /**
         * Id of a specific file version of the document (see the versions array). Defaults to the latest version.
         * @exclusiveMinimum 0
         */
        version?: number;
        /** When true, name the file after the storage path template instead of the public title-based file name. Defaults to false. */
        follow_formatting?: boolean;
      };
      output: {
        /** Temporary connector file URL holding the downloaded bytes. Fetch it directly; it is a connector file transit URL rather than a Paperless-ngx URL, and it expires. */
        fileUrl: string;
        /** File name the downloaded bytes were stored under. */
        fileName: string;
        /** MIME type reported for the downloaded bytes. */
        contentType: string;
        /** Number of bytes transferred to the connector file URL. */
        sizeBytes: number;
      };
    };
    /** Rebuild the PDF of one document from a list of page operations: keep, reorder, duplicate, rotate or drop pages, and optionally split them into several output documents. By default each output is consumed in the background as a new document owned by the connected user (metadata copied when include_metadata is true), and delete_original then trashes the source afterwards, handing its archive serial number over when there is a single output. With update_document true, a single output is consumed as a new version of the same document instead. Requires the global change_document permission plus change access on every selected document (403 Insufficient permissions otherwise); superusers bypass these checks. Also requires ownership of the document (or that it is unowned), the global add_document permission unless update_document is true, and the global delete_document permission when delete_original is true. */
    "paperless_ngx.edit_document_pdf": {
      input: {
        /**
         * Exactly one document id: the document whose PDF is edited.
         * @minItems 1
         * @maxItems 1
         */
        documents: Array<number>;
        /**
         * Ordered list describing the pages of the output PDF(s). Each entry names the 1-based source page in page, may rotate it and may route it to an output document index in doc. Pages not listed are discarded and a page may be listed more than once.
         * @minItems 1
         */
        operations: Array<{
          /**
           * 1-based page number of the source document. Must not exceed the document's page count when it is known.
           * @exclusiveMinimum 0
           */
          page: number;
          /** Clockwise rotation applied to this page in degrees, a multiple of 90 such as 90, 180 or 270. Omit or use 0 for no rotation. */
          rotate?: number;
          /**
           * Zero-based index of the output document that receives this page. Defaults to 0; using several indexes splits the source into several documents. Only index 0 is allowed when update_document is true.
           * @minimum 0
           */
          doc?: number;
        }>;
        /** When true, the resulting PDF is consumed as a new version of the same document instead of as a new document. Defaults to false. */
        update_document?: boolean;
        /** When true (default), the new document or version copies the metadata of the original (correspondent, document type, tags, storage path, custom fields, permissions). When false it starts empty. */
        include_metadata?: boolean;
        /** When true and update_document is false, move the original document to the trash after the new document has been consumed. Defaults to false. Requires the global delete_document permission. */
        delete_original?: boolean;
        /** Which file of each selected document is used as the source. latest_version (default) resolves a selected root document to its newest version, while an explicitly selected version id is always used as is; explicit_selection uses exactly the selected document's own file even when newer versions exist. */
        source_mode?: "latest_version" | "explicit_selection";
      };
      output: {
        /** The upstream result marker, normally "OK". */
        result: string;
        [key: string]: unknown;
      };
    };
    /** Send one document as an email attachment through the mail server configured on the Paperless-ngx instance. The archived PDF is attached when it exists unless use_archive_version is false. Paperless-ngx routes this through its collection email endpoint with a single document id. Requires the view_document permission, view access to the document and a configured outgoing mail server (otherwise a 500 Error emailing documents). */
    "paperless_ngx.email_document": {
      input: {
        /**
         * Id of the document.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Recipient email addresses; Paperless-ngx joins them with commas.
         * @minItems 1
         */
        addresses: Array<string>;
        /**
         * Email subject.
         * @minLength 1
         */
        subject: string;
        /**
         * Email body text.
         * @minLength 1
         */
        message: string;
        /** When true, attach the archived PDF of each document when one exists, otherwise the original file. Defaults to true. */
        use_archive_version?: boolean;
      };
      output: {
        /** Upstream confirmation, normally "Email sent". */
        message: string;
        [key: string]: unknown;
      };
    };
    /** Send several documents as attachments of one email through the mail server configured on the Paperless-ngx instance. Archived PDFs are attached when they exist unless use_archive_version is false. Requires the view_document permission, view access to every document (403 otherwise) and a configured outgoing mail server (otherwise a 500 Error emailing documents). */
    "paperless_ngx.email_documents": {
      input: {
        /**
         * Ids of the documents to attach; every id must exist and appear once.
         * @minItems 1
         */
        documents: Array<number>;
        /**
         * Recipient email addresses; Paperless-ngx joins them with commas.
         * @minItems 1
         */
        addresses: Array<string>;
        /**
         * Email subject.
         * @minLength 1
         */
        subject: string;
        /**
         * Email body text.
         * @minLength 1
         */
        message: string;
        /** When true, attach the archived PDF of each document when one exists, otherwise the original file. Defaults to true. */
        use_archive_version?: boolean;
      };
      output: {
        /** Upstream confirmation, normally "Email sent". */
        message: string;
        [key: string]: unknown;
      };
    };
    /** Permanently delete trashed documents together with their files. When documents is omitted, every trashed document the connected user sees in list_trash is deleted (all of them for a superuser). This cannot be undone. The connected user needs delete permission on each affected document (403 otherwise). */
    "paperless_ngx.empty_trash": {
      input: {
        /** Ids of trashed documents to delete permanently. Every id must currently be in the trash (400 otherwise). Omit to empty the whole trash visible to the connected user. */
        documents?: Array<number>;
      };
      output: {
        /** The upstream result marker, normally "OK". */
        result: string;
        /** Ids of the documents the action was applied to. For empty_trash without documents this is the list of trashed documents Paperless-ngx selected on your behalf. */
        doc_ids: Array<number> | null;
        [key: string]: unknown;
      };
    };
    /** Get the instance-wide application configuration (OCR, archive generation, barcode, remote OCR and AI settings, app title and logo). Values set to null fall back to the corresponding environment variable. Requires the view_applicationconfiguration permission. */
    "paperless_ngx.get_application_config": {
      input: Record<string, never>;
      output: {
        /** The configuration row id. */
        id?: number;
        /** OCR output type: pdf, pdfa, pdfa-1, pdfa-2 or pdfa-3. */
        output_type?: string | null;
        /** Maximum number of pages to OCR, or null for all. */
        pages?: number | null;
        /** OCR languages, or null for the environment default. */
        language?: string | null;
        /** OCR mode: auto, force, redo or off. */
        mode?: string | null;
        /** Archive file generation: auto, always or never. */
        archive_file_generation?: string | null;
        /** Custom application title, or null. */
        app_title?: string | null;
        /** URL of the custom logo, or null. */
        app_logo?: string | null;
        /** Whether barcode scanning is enabled. */
        barcodes_enabled?: boolean | null;
        /** Whether AI features are enabled. */
        ai_enabled?: boolean | null;
        /** LLM backend: openai-like or ollama. */
        llm_backend?: string | null;
        /** LLM model name. */
        llm_model?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get one correspondent by id, including its document count and last_correspondence date. Requires the view_correspondent permission on the correspondent. */
    "paperless_ngx.get_correspondent": {
      input: {
        /**
         * Id of the correspondent.
         * @exclusiveMinimum 0
         */
        id: number;
        /** When true, return the full object permissions in the permissions field instead of only user_can_change. Defaults to false. */
        full_perms?: boolean;
      };
      output: {
        /** The object id. */
        id?: number;
        /** URL-safe slug derived from the name. */
        slug?: string;
        /** The object name. */
        name?: string;
        /** Text or pattern used by the matching algorithm. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
        matching_algorithm?: number;
        /** Whether matching ignores case. */
        is_insensitive?: boolean;
        /** Number of documents visible to the connected user that use this object. */
        document_count?: number;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        /** Date of the most recent document from this correspondent, when requested. */
        last_correspondence?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get one custom field definition by id, including its select options or default currency and the number of documents using it. Requires the view_customfield permission. */
    "paperless_ngx.get_custom_field": {
      input: {
        /**
         * Id of the custom field.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The custom field id. */
        id?: number;
        /** The custom field name. */
        name?: string;
        /** The value type: string, url, date, boolean, integer, float, monetary, documentlink, select or longtext. */
        data_type?: string;
        /** Type-specific settings, or null. */
        extra_data?: {
          /** Options of a select field. */
          select_options?: Array<{
            /** Stable option id referenced by document values. */
            id?: string;
            /** Option label shown to users. */
            label?: string;
            [key: string]: unknown;
          }>;
          /** Default ISO 4217 currency code for monetary fields, or null. */
          default_currency?: string | null;
          [key: string]: unknown;
        } | null;
        /** Number of documents that carry this field. */
        document_count?: number;
        [key: string]: unknown;
      };
    };
    /** Get one document with its metadata, tags, custom fields, notes, file versions and duplicate_documents (other documents sharing the same checksum). content holds the extracted text of the latest version unless version selects another one. Requires the view_document permission and view access to the document. */
    "paperless_ngx.get_document": {
      input: {
        /**
         * Id of the document.
         * @exclusiveMinimum 0
         */
        id: number;
        /** When true, return the full object permissions in the permissions field instead of only user_can_change. Defaults to false. */
        full_perms?: boolean;
        /** Names of the document fields to include in the response, for example id, title, content and custom_fields. Fields not listed are omitted; when not given every field is returned. */
        fields?: Array<string>;
        /**
         * Id of a specific file version of the document (see the versions array); content is then taken from that version instead of the latest one.
         * @exclusiveMinimum 0
         */
        version?: number;
      };
      output: {
        /** The document id. */
        id?: number;
        /** Correspondent id, or null. */
        correspondent?: number | null;
        /** Document type id, or null. */
        document_type?: number | null;
        /** Storage path id, or null. */
        storage_path?: number | null;
        /** The document title. */
        title?: string;
        /** Extracted text content of the latest version, possibly truncated when truncate_content is true. */
        content?: string;
        /** Ids of the tags assigned to the document. */
        tags?: Array<number>;
        /** Creation date as YYYY-MM-DD. */
        created?: string;
        /** Deprecated duplicate of created. */
        created_date?: string;
        /** ISO 8601 timestamp of the last modification. */
        modified?: string;
        /** ISO 8601 timestamp when the document was added. */
        added?: string;
        /** ISO 8601 timestamp when the document was moved to the trash, or null. */
        deleted_at?: string | null;
        /** Archive serial number (ASN), or null. */
        archive_serial_number?: number | null;
        /** File name of the original upload. */
        original_file_name?: string | null;
        /** Public file name of the archived PDF, or null when no archive version exists. */
        archived_file_name?: string | null;
        /** Other documents sharing the same checksum, only populated on single document reads. */
        duplicate_documents?: Array<{
          /** The duplicate document id. */
          id?: number;
          /** The duplicate document title. */
          title?: string;
          /** When the duplicate was trashed, or null. */
          deleted_at?: string | null;
          [key: string]: unknown;
        }>;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        /** Whether the connected user owns the document and has shared it with others. */
        is_shared_by_requester?: boolean;
        /** Notes attached to the document. */
        notes?: Array<{
          /** The note id. */
          id?: number;
          /** The note text. */
          note?: string;
          /** ISO 8601 creation timestamp. */
          created?: string;
          /** The user who wrote the note. */
          user?: {
            /** The user id. */
            id?: number;
            /** The username. */
            username?: string;
            /** The first name. */
            first_name?: string;
            /** The last name. */
            last_name?: string;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
        /** Custom field values attached to the document. */
        custom_fields?: Array<{
          /** The custom field id. */
          field?: number;
          /** The value in the field's data type: string, number, boolean, ISO date, select option id, or an array of document ids for document links. Null clears the value. */
          value?: unknown;
          [key: string]: unknown;
        }>;
        /** Number of pages, or null when unknown. */
        page_count?: number | null;
        /** MIME type of the original file. */
        mime_type?: string;
        /** Id of the root document when this entry is a version, or null. */
        root_document?: number | null;
        /** File-level versions of the document. */
        versions?: Array<{
          /** The version's document id. */
          id?: number;
          /** ISO 8601 timestamp when the version was added. */
          added?: string;
          /** Optional label for the version. */
          version_label?: string | null;
          /** MD5 checksum of the version's original file. */
          checksum?: string | null;
          /** Whether this entry is the root (original) document. */
          is_root?: boolean;
          [key: string]: unknown;
        }>;
        /** Search result details, only present on full text search results. */
        __search_hit__?: {
          /** Relevance score relative to the other results. */
          score?: number;
          /** Excerpt of the content with matching terms wrapped in span tags. */
          highlights?: string;
          /** Zero-based rank of the result. */
          rank?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Ask the configured language model for a title, tags, correspondent, document type, storage path and dates for a document. Existing objects the model picked are returned as ids, new names it proposed are returned separately. Requires AI to be enabled on the instance: otherwise Paperless-ngx answers 400 AI is required for this feature, an invalid AI configuration yields 400 and a model timeout yields 503. The call blocks while the model answers, and requires change access to the document. */
    "paperless_ngx.get_document_ai_suggestions": {
      input: {
        /**
         * Id of the document.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Title proposed by the language model, or null. */
        title?: string | null;
        /** Ids of existing tags the model picked. */
        tags?: Array<number>;
        /** Names of new tags the model proposed that match no existing tag. */
        suggested_tags?: Array<string>;
        /** Ids of existing correspondents the model picked. */
        correspondents?: Array<number>;
        /** Names of new correspondents the model proposed that match no existing correspondent. */
        suggested_correspondents?: Array<string>;
        /** Ids of existing document types the model picked. */
        document_types?: Array<number>;
        /** Names of new document types the model proposed that match no existing document type. */
        suggested_document_types?: Array<string>;
        /** Ids of existing storage paths the model picked. */
        storage_paths?: Array<number>;
        /** Names of new storage paths the model proposed that match no existing storage path. */
        suggested_storage_paths?: Array<string>;
        /** Dates the model extracted, as YYYY-MM-DD. */
        dates?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get the audit trail of a document: every logged create, update, delete and access entry for the document and its custom field values, newest first, with the changed fields and the acting user. Requires the audit log to be enabled on the instance (PAPERLESS_AUDIT_LOG_ENABLED, otherwise 400 Audit log is disabled), the auditlog.view_logentry permission, and the connected user must own the document, be a superuser, or the document must be unowned. */
    "paperless_ngx.get_document_history": {
      input: {
        /**
         * Id of the document.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Audit log entries, newest first. */
        entries: Array<{
          /** The audit log entry id. */
          id?: number;
          /** ISO 8601 timestamp of the change. */
          timestamp?: string;
          /** Action label: create, update, delete or access. */
          action?: string;
          /** Changed fields keyed by field name. Document entries map each field to a [old, new] pair; custom field entries carry a custom_fields object with type, field and value. */
          changes?: Record<string, unknown>;
          /** The user who made the change, or null for system changes. */
          actor?: {
            /** The user id. */
            id?: number;
            /** The username. */
            username?: string;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get file-level metadata of a document: checksums, sizes, MIME type, media file names, whether an archived PDF exists, parser metadata (such as PDF info and XMP fields) of the original and archived files, and the detected content language. Reads the latest version unless version is given. Requires view access to the document. */
    "paperless_ngx.get_document_metadata": {
      input: {
        /**
         * Id of the document.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Id of a specific file version of the document (see the versions array). Defaults to the latest version.
         * @exclusiveMinimum 0
         */
        version?: number;
      };
      output: {
        /** MD5 checksum of the original file. */
        original_checksum?: string;
        /** Size of the original file in bytes, or null when the file is missing on disk. */
        original_size?: number | null;
        /** MIME type of the original file. */
        original_mime_type?: string;
        /** Path of the original file relative to the media directory, or null. */
        media_filename?: string | null;
        /** Whether an archived PDF exists for this version. */
        has_archive_version?: boolean;
        /** Parser metadata entries of the original file; empty when no parser handles the type, null when the file is missing. */
        original_metadata?: Array<{
          /** Namespace URI of the entry. */
          namespace?: string;
          /** Namespace prefix of the entry. */
          prefix?: string;
          /** Metadata key. */
          key?: string;
          /** Metadata value. */
          value?: string;
          [key: string]: unknown;
        }> | null;
        /** MD5 checksum of the archived PDF, or null. */
        archive_checksum?: string | null;
        /** Path of the archived PDF relative to the media directory, or null. */
        archive_media_filename?: string | null;
        /** File name of the original upload, or null. */
        original_filename?: string | null;
        /** Size of the archived PDF in bytes, or null when there is no archive version. */
        archive_size?: number | null;
        /** Parser metadata entries of the archived PDF, or null when there is no archive version. */
        archive_metadata?: Array<{
          /** Namespace URI of the entry. */
          namespace?: string;
          /** Namespace prefix of the entry. */
          prefix?: string;
          /** Metadata key. */
          key?: string;
          /** Metadata value. */
          value?: string;
          [key: string]: unknown;
        }> | null;
        /** Language detected from the content as an ISO 639-1 code; en when detection fails. */
        lang?: string;
        [key: string]: unknown;
      };
    };
    /** Resolve the root document of any document id, including ids of file versions and trashed documents. For a root document the answer is its own id. Requires view access to the root document. */
    "paperless_ngx.get_document_root": {
      input: {
        /**
         * Id of a document or of one of its file versions.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Id of the root document. */
        root_id: number;
      };
    };
    /** Get correspondent, tag, document type, storage path and date suggestions for a document from the matching rules and the trained classifier. Results are cached until the document or classifier changes. Requires change access to the document (403 otherwise). */
    "paperless_ngx.get_document_suggestions": {
      input: {
        /**
         * Id of the document.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Ids of suggested correspondents. */
        correspondents?: Array<number>;
        /** Ids of suggested tags. */
        tags?: Array<number>;
        /** Ids of suggested document types. */
        document_types?: Array<number>;
        /** Ids of suggested storage paths. */
        storage_paths?: Array<number>;
        /** Dates found in the file name or content, as YYYY-MM-DD, limited by PAPERLESS_NUMBER_OF_SUGGESTED_DATES. */
        dates?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Download the WebP thumbnail of a document (or of one of its file versions) and hand it back as a temporary connector file URL. Requires view access to the document. */
    "paperless_ngx.get_document_thumbnail": {
      input: {
        /**
         * Id of the document.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Id of a specific file version of the document (see the versions array). Defaults to the latest version.
         * @exclusiveMinimum 0
         */
        version?: number;
      };
      output: {
        /** Temporary connector file URL holding the downloaded bytes. Fetch it directly; it is a connector file transit URL rather than a Paperless-ngx URL, and it expires. */
        fileUrl: string;
        /** File name the downloaded bytes were stored under. */
        fileName: string;
        /** MIME type reported for the downloaded bytes. */
        contentType: string;
        /** Number of bytes transferred to the connector file URL. */
        sizeBytes: number;
      };
    };
    /** Get one document type by id, including its document count. Requires the view_documenttype permission on the document type. */
    "paperless_ngx.get_document_type": {
      input: {
        /**
         * Id of the document type.
         * @exclusiveMinimum 0
         */
        id: number;
        /** When true, return the full object permissions in the permissions field instead of only user_can_change. Defaults to false. */
        full_perms?: boolean;
      };
      output: {
        /** The object id. */
        id?: number;
        /** URL-safe slug derived from the name. */
        slug?: string;
        /** The object name. */
        name?: string;
        /** Text or pattern used by the matching algorithm. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
        matching_algorithm?: number;
        /** Whether matching ignores case. */
        is_insensitive?: boolean;
        /** Number of documents visible to the connected user that use this object. */
        document_count?: number;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get one Paperless-ngx user group by id with its permission codenames. Requires the view_group permission. */
    "paperless_ngx.get_group": {
      input: {
        /**
         * The group id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A Paperless-ngx group. */
        group: {
          /** The group id. */
          id?: number;
          /** The group name. */
          name?: string;
          /** Permission codenames granted to the group. */
          permissions?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Read the lines of one Paperless-ngx log file, optionally limited to the last N entries. Requires admin (staff) access. */
    "paperless_ngx.get_log": {
      input: {
        /** Log file key: paperless, mail or celery. Only files that exist on the server are listed. */
        name: "paperless" | "mail" | "celery";
        /**
         * Return only the last N lines of the log file.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Log lines in file order. */
        lines: Array<string>;
      };
    };
    /** Get one mail account by id. Only accounts the connected user owns, that are unowned, or that were shared with the user are visible. The password is returned as an asterisk placeholder. */
    "paperless_ngx.get_mail_account": {
      input: {
        /**
         * Id of the mail account.
         * @exclusiveMinimum 0
         */
        id: number;
        /** When true, return the full object permissions in the permissions field instead of only user_can_change. Defaults to false. */
        full_perms?: boolean;
      };
      output: {
        /** The mail account id. */
        id?: number;
        /** The account name. */
        name?: string;
        /** IMAP server host. */
        imap_server?: string;
        /** IMAP port. */
        imap_port?: number | null;
        /** IMAP security: 1 none, 2 SSL, 3 STARTTLS. */
        imap_security?: number;
        /** IMAP username. */
        username?: string;
        /** Obfuscated placeholder; the real password is never returned. */
        password?: string;
        /** Character set used to decode mail. */
        character_set?: string;
        /** Whether password holds an OAuth token. */
        is_token?: boolean;
        /** Account type: 1 IMAP, 2 Gmail OAuth, 3 Outlook OAuth. */
        account_type?: number;
        /** OAuth token expiration, or null. */
        expiration?: string | null;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get one mail rule by id. Only rules the connected user owns, that are unowned, or that were shared with the user are visible. */
    "paperless_ngx.get_mail_rule": {
      input: {
        /**
         * Id of the mail rule.
         * @exclusiveMinimum 0
         */
        id: number;
        /** When true, return the full object permissions in the permissions field instead of only user_can_change. Defaults to false. */
        full_perms?: boolean;
      };
      output: {
        /** The mail rule id. */
        id?: number;
        /** The rule name. */
        name?: string;
        /** Id of the mail account the rule belongs to. */
        account?: number;
        /** Whether the rule is active. */
        enabled?: boolean;
        /** IMAP folder to scan. */
        folder?: string;
        /** Sender filter, or null. */
        filter_from?: string | null;
        /** Recipient filter, or null. */
        filter_to?: string | null;
        /** Subject filter, or null. */
        filter_subject?: string | null;
        /** Body filter, or null. */
        filter_body?: string | null;
        /** Attachment filename include pattern, or null. */
        filter_attachment_filename_include?: string | null;
        /** Attachment filename exclude pattern, or null. */
        filter_attachment_filename_exclude?: string | null;
        /** Maximum mail age in days, 0 for no limit. */
        maximum_age?: number;
        /** Post-consumption mail action: 1 delete, 2 move, 3 mark read, 4 flag, 5 tag. */
        action?: number;
        /** Folder or tag used by the action, or null. */
        action_parameter?: string | null;
        /** Title source: 1 subject, 2 attachment filename, 3 none. */
        assign_title_from?: number;
        /** Ids of tags assigned to consumed documents. */
        assign_tags?: Array<number>;
        /** Correspondent source: 1 nothing, 2 email, 3 name, 4 custom. */
        assign_correspondent_from?: number;
        /** Correspondent id used when assign_correspondent_from is 4, or null. */
        assign_correspondent?: number | null;
        /** Document type id assigned to consumed documents, or null. */
        assign_document_type?: number | null;
        /** Whether consumed documents are owned by the rule owner. */
        assign_owner_from_rule?: boolean;
        /** Evaluation order among rules. */
        order?: number;
        /** Attachment processing: 1 attachments only, 2 everything including inline. */
        attachment_type?: number;
        /** Consumption scope: 1 attachments only, 2 eml only, 3 everything. */
        consumption_scope?: number;
        /** PDF layout for mail bodies: 0 system default, 1 text then HTML, 2 HTML then text, 3 HTML only, 4 text only. */
        pdf_layout?: number;
        /** Whether later rules are skipped once this rule matches. */
        stop_processing?: boolean;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get the next free archive serial number: the highest ASN currently in use plus one, or 1 when none is assigned. Trashed documents keep their ASN reserved. */
    "paperless_ngx.get_next_asn": {
      input: Record<string, never>;
      output: {
        /** The next free archive serial number. */
        next_asn: number;
      };
    };
    /** Get one processed mail record by id. Only records the connected user owns, that are unowned, or that were shared with the user are visible. */
    "paperless_ngx.get_processed_mail": {
      input: {
        /**
         * Id of the processed mail record.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The processed mail record id. */
        id?: number;
        /** Id of the owning user, or null when unowned. */
        owner?: number | null;
        /** Id of the mail rule that processed the mail. */
        rule?: number;
        /** IMAP folder the mail was found in. */
        folder?: string;
        /** IMAP UID of the mail within its folder. */
        uid?: string;
        /** Mail subject. */
        subject?: string;
        /** ISO 8601 timestamp when the mail was received. */
        received?: string;
        /** ISO 8601 timestamp when Paperless-ngx processed the mail. */
        processed?: string;
        /** Processing outcome: SUCCESS or FAILED. */
        status?: string;
        /** Error message when processing failed, or null. */
        error?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get the profile of the user that owns the API token: name, email, linked social accounts, whether a password and MFA are set, and the API token itself (redacted from logs). */
    "paperless_ngx.get_profile": {
      input: Record<string, never>;
      output: {
        /** Email address; may be empty. */
        email?: string;
        /** Obfuscated placeholder; the real password is never returned. */
        password?: string;
        /** First name; may be empty. */
        first_name?: string;
        /** Last name; may be empty. */
        last_name?: string;
        /** The API token of the connected user, that is the credential this connection uses. Redacted from logs. */
        auth_token?: string;
        /** Social login accounts linked to the user. */
        social_accounts?: Array<{
          /** The social account id. */
          id?: number;
          /** The social login provider id. */
          provider?: string;
          /** Display name of the account at the provider, or Unknown App. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Whether the user can log in with a password (false for social-login-only accounts). */
        has_usable_password?: boolean;
        /** Whether TOTP multi-factor authentication is active. */
        is_mfa_enabled?: boolean;
        [key: string]: unknown;
      };
    };
    /** Check the latest released Paperless-ngx version on GitHub and whether it is newer than the connected instance. The instance performs the GitHub lookup and caches it for 15 minutes; when the lookup fails it reports version 0.0.0 with update_available false. */
    "paperless_ngx.get_remote_version": {
      input: Record<string, never>;
      output: {
        /** Latest release tag without the ngx- prefix, or 0.0.0 when the lookup failed. */
        version: string;
        /** Whether the latest release is newer than the running instance. */
        update_available: boolean;
        [key: string]: unknown;
      };
    };
    /** Get one saved view by id with its filter rules and display settings. Requires the view_savedview permission on the view. */
    "paperless_ngx.get_saved_view": {
      input: {
        /**
         * Id of the saved view.
         * @exclusiveMinimum 0
         */
        id: number;
        /** When true, return the full object permissions in the permissions field instead of only user_can_change. Defaults to false. */
        full_perms?: boolean;
      };
      output: {
        /** The saved view id. */
        id?: number;
        /** The saved view name. */
        name?: string;
        /** Icon name shown next to the view, or null. */
        icon?: string | null;
        /** Field the view sorts by. */
        sort_field?: string | null;
        /** Whether the sort is descending. */
        sort_reverse?: boolean;
        /** Filter rules that define the view. */
        filter_rules?: Array<{
          /** Numeric filter rule type. */
          rule_type?: number;
          /** Rule value, or null. */
          value?: string | null;
          [key: string]: unknown;
        }>;
        /** Page size used when displaying the view, or null. */
        page_size?: number | null;
        /** Display mode: table, smallCards or largeCards. */
        display_mode?: string | null;
        /** Fields shown in the view. */
        display_fields?: Array<string> | null;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        [key: string]: unknown;
      };
    };
    /** For a set of documents, count how many of them use each correspondent, tag, document type, storage path and custom field. Every object of each kind is returned, including those used by none of the documents, so a caller can tell whether an object applies to all, some or none of the selection before a bulk edit. Every document must exist (400 otherwise) and be visible to the connected user (403 otherwise). */
    "paperless_ngx.get_selection_data": {
      input: {
        /** Ids of the documents to inspect. Every id must exist and be visible to the connected user. */
        documents: Array<number>;
      };
      output: {
        /** Correspondent usage counts. */
        selected_correspondents: Array<{
          /** The object id. */
          id?: number;
          /** Number of the given documents that use this object; 0 when none of them do. */
          document_count?: number;
          [key: string]: unknown;
        }>;
        /** Tag usage counts. */
        selected_tags: Array<{
          /** The object id. */
          id?: number;
          /** Number of the given documents that use this object; 0 when none of them do. */
          document_count?: number;
          [key: string]: unknown;
        }>;
        /** Document type usage counts. */
        selected_document_types: Array<{
          /** The object id. */
          id?: number;
          /** Number of the given documents that use this object; 0 when none of them do. */
          document_count?: number;
          [key: string]: unknown;
        }>;
        /** Storage path usage counts. */
        selected_storage_paths: Array<{
          /** The object id. */
          id?: number;
          /** Number of the given documents that use this object; 0 when none of them do. */
          document_count?: number;
          [key: string]: unknown;
        }>;
        /** Custom field usage counts. */
        selected_custom_fields: Array<{
          /** The object id. */
          id?: number;
          /** Number of the given documents that use this object; 0 when none of them do. */
          document_count?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get one share link by id, including its public share_url. Requires the view_sharelink permission and access to the link. */
    "paperless_ngx.get_share_link": {
      input: {
        /**
         * The share link id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The share link id. */
        id?: number;
        /** ISO 8601 creation timestamp. */
        created?: string;
        /** ISO 8601 expiration timestamp, or null when it never expires. */
        expiration?: string | null;
        /** Slug that forms the public URL <instance>/share/<slug>. */
        slug?: string;
        /** Id of the shared document. */
        document?: number;
        /** Which file is served: archive or original. */
        file_version?: string;
        /** Public URL of the share, derived by the connector as <instance>/share/<slug>. Anyone holding it can download the file without logging in until expiration. */
        share_url?: string;
        [key: string]: unknown;
      };
    };
    /** Get one share link bundle by id, including its build status, size and public share_url. Use it to poll a bundle after create_share_link_bundle or rebuild_share_link_bundle until status is ready. Requires the view_sharelinkbundle permission. */
    "paperless_ngx.get_share_link_bundle": {
      input: {
        /**
         * The share link bundle id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The bundle id. */
        id?: number;
        /** ISO 8601 creation timestamp. */
        created?: string;
        /** ISO 8601 expiration timestamp, or null when the bundle never expires. */
        expiration?: string | null;
        /** Slug that forms the public URL <instance>/share/<slug>. */
        slug?: string;
        /** Which file version is packed for each document: archive or original. */
        file_version?: string;
        /** Build status of the zip archive: pending (queued), processing (being built), ready (downloadable) or failed (see last_error). */
        status?: string;
        /** Size of the built zip archive in bytes, or null until built. */
        size_bytes?: number | null;
        /** Details of the last failed build, or null when the build succeeded. */
        last_error?: unknown;
        /** ISO 8601 timestamp of the last successful build, or null. */
        built_at?: string | null;
        /** Ids of the documents in the bundle. */
        documents?: Array<number>;
        /** Number of documents in the bundle. */
        document_count?: number;
        /** Public URL of the share, derived by the connector as <instance>/share/<slug>. Anyone holding it can download the file without logging in until expiration. */
        share_url?: string;
        [key: string]: unknown;
      };
    };
    /** Get document statistics for the connected user: document totals, inbox counts, MIME type breakdown, character count, object counts and the current archive serial number. Users with the global statistics permission see instance-wide numbers, everyone else sees only the documents they can access. */
    "paperless_ngx.get_statistics": {
      input: Record<string, never>;
      output: {
        /** Total number of documents. */
        documents_total: number;
        /** Number of documents carrying an inbox tag, or null when no inbox tag exists. */
        documents_inbox: number | null;
        /** Id of the first inbox tag, or null. */
        inbox_tag: number | null;
        /** Ids of all inbox tags. */
        inbox_tags: Array<number> | null;
        /** Document counts per MIME type. */
        document_file_type_counts: Array<{
          /** The MIME type. */
          mime_type?: string;
          /** Number of documents with this MIME type. */
          mime_type_count?: number;
          [key: string]: unknown;
        }>;
        /** Total characters of extracted content. */
        character_count: number;
        /** Number of tags. */
        tag_count: number;
        /** Number of correspondents. */
        correspondent_count: number;
        /** Number of document types. */
        document_type_count: number;
        /** Number of storage paths. */
        storage_path_count: number;
        /** Highest archive serial number in use. */
        current_asn: number;
        [key: string]: unknown;
      };
    };
    /** Get one storage path by id, including its document count. Requires the view_storagepath permission on the storage path. */
    "paperless_ngx.get_storage_path": {
      input: {
        /**
         * Id of the storage path.
         * @exclusiveMinimum 0
         */
        id: number;
        /** When true, return the full object permissions in the permissions field instead of only user_can_change. Defaults to false. */
        full_perms?: boolean;
      };
      output: {
        /** The object id. */
        id?: number;
        /** URL-safe slug derived from the name. */
        slug?: string;
        /** The object name. */
        name?: string;
        /** Text or pattern used by the matching algorithm. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
        matching_algorithm?: number;
        /** Whether matching ignores case. */
        is_insensitive?: boolean;
        /** Number of documents visible to the connected user that use this object. */
        document_count?: number;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        /** Filename template used to place documents under the media directory. */
        path?: string;
        [key: string]: unknown;
      };
    };
    /** Get the Paperless-ngx system status: server version, install type, storage usage, database and migration state, Redis and Celery health, search index, classifier, sanity check and LLM index status plus a 30 day task summary. Requires the system status permission (superuser or a user with the view_paperlesstask permission). */
    "paperless_ngx.get_system_status": {
      input: Record<string, never>;
      output: {
        /** The Paperless-ngx server version. */
        pngx_version: string;
        /** Operating system description of the server. */
        server_os: string;
        /** Installation type: bare-metal, docker or kubernetes. */
        install_type: string;
        /** Media storage usage in bytes. */
        storage: {
          /** Total bytes of the media volume. */
          total?: number;
          /** Available bytes on the media volume. */
          available?: number;
          [key: string]: unknown;
        };
        /** Database connection status. */
        database: {
          /** Database vendor such as postgresql, sqlite or mysql. */
          type?: string;
          /** Database name or path. */
          url?: string;
          /** OK or ERROR. */
          status?: string;
          /** Connection error detail, or null. */
          error?: string | null;
          /** Migration state. */
          migration_status?: {
            /** Name of the most recently applied migration. */
            latest_migration?: string;
            /** Migrations that have not been applied yet. */
            unapplied_migrations?: Array<string>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Background service health. */
        tasks: {
          /** Redis URL without credentials. */
          redis_url?: string;
          /** OK or ERROR. */
          redis_status?: string;
          /** Redis error detail, or null. */
          redis_error?: string | null;
          /** OK, WARNING or ERROR. */
          celery_status?: string;
          /** Name of the first Celery worker that answered, or null. */
          celery_url?: string | null;
          /** Celery error detail, or null. */
          celery_error?: string | null;
          /** Search index status. */
          index_status?: string;
          /** ISO 8601 timestamp of the last index write, or null. */
          index_last_modified?: string | null;
          /** Index error detail, or null. */
          index_error?: string | null;
          /** Classifier training status. */
          classifier_status?: string;
          /** ISO 8601 timestamp of the last training, or null. */
          classifier_last_trained?: string | null;
          /** Classifier error detail, or null. */
          classifier_error?: string | null;
          /** Sanity check status. */
          sanity_check_status?: string;
          /** ISO 8601 timestamp of the last sanity check, or null. */
          sanity_check_last_run?: string | null;
          /** Sanity check error detail, or null. */
          sanity_check_error?: string | null;
          /** LLM index status, DISABLED when AI is off. */
          llmindex_status?: string;
          /** ISO 8601 timestamp of the last LLM index update, or null. */
          llmindex_last_modified?: string | null;
          /** LLM index error detail, or null. */
          llmindex_error?: string | null;
          /** Task counts over the last 30 days. */
          summary?: {
            /** Number of days aggregated. */
            days?: number;
            /** Total tasks. */
            total_count?: number;
            /** Pending tasks. */
            pending_count?: number;
            /** Successful tasks. */
            success_count?: number;
            /** Failed tasks. */
            failure_count?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get one tag by id, including its document count, parent and nested children. Requires the view_tag permission on the tag. */
    "paperless_ngx.get_tag": {
      input: {
        /**
         * Id of the tag.
         * @exclusiveMinimum 0
         */
        id: number;
        /** When true, return the full object permissions in the permissions field instead of only user_can_change. Defaults to false. */
        full_perms?: boolean;
      };
      output: {
        /** The object id. */
        id?: number;
        /** URL-safe slug derived from the name. */
        slug?: string;
        /** The object name. */
        name?: string;
        /** Text or pattern used by the matching algorithm. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
        matching_algorithm?: number;
        /** Whether matching ignores case. */
        is_insensitive?: boolean;
        /** Number of documents visible to the connected user that use this object. */
        document_count?: number;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        /** Hex color such as #a6cee3. */
        color?: string;
        /** Black or white text color chosen for contrast against color. */
        text_color?: string;
        /** Whether new documents automatically receive this tag. */
        is_inbox_tag?: boolean;
        /** Id of the parent tag, or null for a root tag. */
        parent?: number | null;
        /** Child tags, each with the same shape as a tag. */
        children?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get one background task by its Celery task UUID, the id returned by upload_document, update_document_version, run_task and other asynchronous actions. Poll it until status is success, failure or revoked; a successful consume task reports the new document id in result_data.document_id (also the first entry of related_document_ids), while a rejected duplicate reports the existing document in result_data.duplicate_of. */
    "paperless_ngx.get_task": {
      input: {
        /**
         * Celery task UUID, as returned in the task_id field of upload_document, update_document_version or run_task.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /** The task row id. */
        id?: number;
        /** The Celery task UUID. */
        task_id?: string;
        /** Task type such as consume_file or train_classifier. */
        task_type?: string;
        /** Human readable task type. */
        task_type_display?: string;
        /** What triggered the task, such as api_upload or scheduled. */
        trigger_source?: string;
        /** Human readable trigger source. */
        trigger_source_display?: string;
        /** Task status: pending, started, success, failure or revoked. */
        status?: string;
        /** Human readable status. */
        status_display?: string;
        /** ISO 8601 timestamp when the task was created. */
        date_created?: string;
        /** ISO 8601 timestamp when the task started, or null. */
        date_started?: string | null;
        /** ISO 8601 timestamp when the task finished, or null. */
        date_done?: string | null;
        /** Run time in seconds, or null while running. */
        duration_seconds?: number | null;
        /** Queue wait time in seconds, or null. */
        wait_time_seconds?: number | null;
        /** Task input such as the uploaded filename. */
        input_data?: Record<string, unknown> | null;
        /** Structured task result, or null while the task has not finished. Consume tasks report the created document in document_id, a rejected duplicate in duplicate_of and the rejection text in reason; failures carry error_message. */
        result_data?: {
          /** Id of the document created by a successful consume task. */
          document_id?: number;
          /** Id of the existing document when the consumed file was rejected as a duplicate. */
          duplicate_of?: number;
          /** Human readable reason when the file was not consumed. */
          reason?: string;
          /** Human readable result message. */
          message?: string;
          /** Error message when the task failed. */
          error_message?: string;
          [key: string]: unknown;
        } | null;
        /** Ids of documents related to the task. */
        related_document_ids?: Array<number>;
        /** Whether the task has been acknowledged (dismissed) in the UI. */
        acknowledged?: boolean;
        /** Id of the user who owns the task, or null for system tasks. */
        owner?: number | null;
        [key: string]: unknown;
      };
    };
    /** Get one background task by its numeric row id (the id field of list_tasks), as opposed to the Celery UUID used by get_task. */
    "paperless_ngx.get_task_by_id": {
      input: {
        /**
         * The numeric task row id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The task row id. */
        id?: number;
        /** The Celery task UUID. */
        task_id?: string;
        /** Task type such as consume_file or train_classifier. */
        task_type?: string;
        /** Human readable task type. */
        task_type_display?: string;
        /** What triggered the task, such as api_upload or scheduled. */
        trigger_source?: string;
        /** Human readable trigger source. */
        trigger_source_display?: string;
        /** Task status: pending, started, success, failure or revoked. */
        status?: string;
        /** Human readable status. */
        status_display?: string;
        /** ISO 8601 timestamp when the task was created. */
        date_created?: string;
        /** ISO 8601 timestamp when the task started, or null. */
        date_started?: string | null;
        /** ISO 8601 timestamp when the task finished, or null. */
        date_done?: string | null;
        /** Run time in seconds, or null while running. */
        duration_seconds?: number | null;
        /** Queue wait time in seconds, or null. */
        wait_time_seconds?: number | null;
        /** Task input such as the uploaded filename. */
        input_data?: Record<string, unknown> | null;
        /** Structured task result, or null while the task has not finished. Consume tasks report the created document in document_id, a rejected duplicate in duplicate_of and the rejection text in reason; failures carry error_message. */
        result_data?: {
          /** Id of the document created by a successful consume task. */
          document_id?: number;
          /** Id of the existing document when the consumed file was rejected as a duplicate. */
          duplicate_of?: number;
          /** Human readable reason when the file was not consumed. */
          reason?: string;
          /** Human readable result message. */
          message?: string;
          /** Error message when the task failed. */
          error_message?: string;
          [key: string]: unknown;
        } | null;
        /** Ids of documents related to the task. */
        related_document_ids?: Array<number>;
        /** Whether the task has been acknowledged (dismissed) in the UI. */
        acknowledged?: boolean;
        /** Id of the user who owns the task, or null for system tasks. */
        owner?: number | null;
        [key: string]: unknown;
      };
    };
    /** Get the number of visible background tasks in total and per status group: needs_attention (failure or revoked), in_progress (pending or started) and completed (success). Accepts the same filters as list_tasks except status and is_complete, which the counts already break down. */
    "paperless_ngx.get_task_status_counts": {
      input: {
        /**
         * Celery task UUID to filter by, as returned by upload_document or run_task. Matches at most one task.
         * @minLength 1
         */
        task_id?: string;
        /** Case-insensitive text matched against the input file name and against the human readable task type and trigger source labels. */
        name?: string;
        /** Case-insensitive text matched against result_data.reason and result_data.error_message. A numeric value also matches result_data.document_id and result_data.duplicate_of, and the word duplicate matches every task rejected as a duplicate. */
        result?: string;
        /** Task type: consume_file, train_classifier, sanity_check, index_optimize, mail_fetch, llm_index, empty_trash, check_workflows, bulk_update, reprocess_document, build_share_link, bulk_delete or apply_ai_suggestions. One value per call. */
        task_type?: "consume_file" | "train_classifier" | "sanity_check" | "index_optimize" | "mail_fetch" | "llm_index" | "empty_trash" | "check_workflows" | "bulk_update" | "reprocess_document" | "build_share_link" | "bulk_delete" | "apply_ai_suggestions";
        /** What started the task: scheduled (Celery beat), web_ui, api_upload, folder_consume, email_consume, system or manual (started through run_task). One value per call. */
        trigger_source?: "scheduled" | "web_ui" | "api_upload" | "folder_consume" | "email_consume" | "system" | "manual";
        /** When true, only tasks already acknowledged (dismissed); when false, only unacknowledged tasks. */
        acknowledged?: boolean;
        /**
         * Id of the user that owns the task. Non-staff users only ever see their own tasks and unowned system tasks; staff users see every task.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /**
         * ISO 8601 date or datetime; only tasks created at or after this instant.
         * @minLength 1
         */
        date_created_after?: string;
        /**
         * ISO 8601 date or datetime; only tasks created at or before this instant.
         * @minLength 1
         */
        date_created_before?: string;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Number of matching tasks in any status.
         * @minimum 0
         */
        all: number;
        /**
         * Number of failed or revoked tasks.
         * @minimum 0
         */
        needs_attention: number;
        /**
         * Number of pending or started tasks.
         * @minimum 0
         */
        in_progress: number;
        /**
         * Number of successful tasks.
         * @minimum 0
         */
        completed: number;
        [key: string]: unknown;
      };
    };
    /** Get aggregated background task statistics per task type over the last N days: counts by outcome, average run and wait times and the timestamps of the latest run, success and failure. Superusers, staff and users with the view_system_monitoring permission see all tasks; everyone else sees their own tasks plus unowned system tasks. */
    "paperless_ngx.get_task_summary": {
      input: {
        /**
         * Number of days to aggregate, from 1 to 365. Defaults to 30; values outside the range are rejected before the request is sent.
         * @minimum 1
         * @maximum 365
         */
        days?: number;
      };
      output: {
        /** One entry per task type that ran in the period. */
        summary: Array<{
          /** Task type: consume_file, train_classifier, sanity_check, index_optimize, mail_fetch, llm_index, empty_trash, check_workflows, bulk_update, reprocess_document, build_share_link, bulk_delete or apply_ai_suggestions. */
          task_type?: string;
          /** Number of tasks of this type in the period. */
          total_count?: number;
          /** Number of tasks still pending. */
          pending_count?: number;
          /** Number of successful tasks. */
          success_count?: number;
          /** Number of failed tasks. */
          failure_count?: number;
          /** Average run time in seconds over tasks that recorded a duration, or null. */
          avg_duration_seconds?: number | null;
          /** Average queue wait time in seconds over tasks that recorded one, or null. */
          avg_wait_time_seconds?: number | null;
          /** ISO 8601 timestamp of the most recent task of this type, or null. */
          last_run?: string | null;
          /** ISO 8601 timestamp of the most recent success, or null. */
          last_success?: string | null;
          /** ISO 8601 timestamp of the most recent failure, or null. */
          last_failure?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the UI settings, effective permissions and basic identity (id, username, staff and superuser flags, groups) of the user that owns the API token. The settings object also carries server facts such as the Paperless-ngx version, app title, trash delay, audit log, email and AI availability. */
    "paperless_ngx.get_ui_settings": {
      input: Record<string, never>;
      output: {
        /** The connected user. */
        user: {
          /** The user id. */
          id?: number;
          /** The username. */
          username?: string;
          /** Whether the user may access the admin site. */
          is_staff?: boolean;
          /** Whether the user is a superuser. */
          is_superuser?: boolean;
          /** Ids of the user's groups. */
          groups?: Array<number>;
          /** The first name, only present when set. */
          first_name?: string;
          /** The last name, only present when set. */
          last_name?: string;
          [key: string]: unknown;
        };
        /** Stored UI settings merged with server-provided values such as version, app_title, trash_delay, auditlog_enabled, email_enabled and ai_enabled. */
        settings: Record<string, unknown>;
        /** Permission codenames held by the user without the app label prefix. */
        permissions: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get one Paperless-ngx user account by id, including group memberships, direct and inherited permission codenames and whether MFA is enabled. Requires the view_user permission. */
    "paperless_ngx.get_user": {
      input: {
        /**
         * The user id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A Paperless-ngx user. */
        user: {
          /** The user id. */
          id?: number;
          /** The username. */
          username?: string;
          /** The email address. */
          email?: string;
          /** Obfuscated placeholder; the real password is never returned. */
          password?: string;
          /** The first name. */
          first_name?: string;
          /** The last name. */
          last_name?: string;
          /** ISO 8601 timestamp when the user was created. */
          date_joined?: string;
          /** Whether the user may access the admin site. */
          is_staff?: boolean;
          /** Whether the account is active. */
          is_active?: boolean;
          /** Whether the user is a superuser. */
          is_superuser?: boolean;
          /** Ids of the groups the user belongs to. */
          groups?: Array<number>;
          /** Permission codenames granted directly to the user. */
          user_permissions?: Array<string>;
          /** Permission codenames inherited from groups. */
          inherited_permissions?: Array<string>;
          /** Whether TOTP multi-factor authentication is active. */
          is_mfa_enabled?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Get one workflow by id, including its triggers and actions. Requires the view_workflow permission. */
    "paperless_ngx.get_workflow": {
      input: {
        /**
         * The workflow id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The workflow id. */
        id?: number;
        /** The workflow name. */
        name?: string;
        /** Evaluation order among workflows. */
        order?: number;
        /** Whether the workflow is active. */
        enabled?: boolean;
        /** Triggers that start the workflow. */
        triggers?: Array<{
          /** The trigger id. */
          id?: number;
          /** Trigger type: 1 consumption started (runs before the document is stored and requires filter_filename, filter_path or filter_mailrule), 2 document added, 3 document updated, 4 scheduled (fires relative to the date field selected by schedule_date_field). */
          type?: number;
          /** Document sources the trigger reacts to. */
          sources?: Array<number>;
          /** Consumption path pattern, or null. */
          filter_path?: string | null;
          /** File name pattern, or null. */
          filter_filename?: string | null;
          /** Id of the required mail rule, or null. */
          filter_mailrule?: number | null;
          /** Matching algorithm applied to the document content: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word. Defaults to 0. */
          matching_algorithm?: number;
          /** Text or pattern used by the matching algorithm. */
          match?: string;
          /** Whether content matching ignores case. */
          is_insensitive?: boolean;
          /** Ids of tags the document must carry at least one of. */
          filter_has_tags?: Array<number>;
          /** Ids of tags the document must carry all of. */
          filter_has_all_tags?: Array<number>;
          /** Ids of tags the document must not carry. */
          filter_has_not_tags?: Array<number>;
          /** JSON-encoded custom field query expression, or null. */
          filter_custom_field_query?: string | null;
          /** Ids of correspondents the document must have one of. */
          filter_has_any_correspondents?: Array<number>;
          /** Ids of correspondents the document must not have. */
          filter_has_not_correspondents?: Array<number>;
          /** Ids of document types the document must have one of. */
          filter_has_any_document_types?: Array<number>;
          /** Ids of document types the document must not have. */
          filter_has_not_document_types?: Array<number>;
          /** Ids of storage paths the document must use one of. */
          filter_has_any_storage_paths?: Array<number>;
          /** Ids of storage paths the document must not use. */
          filter_has_not_storage_paths?: Array<number>;
          /** Id of the required correspondent, or null. */
          filter_has_correspondent?: number | null;
          /** Id of the required document type, or null. */
          filter_has_document_type?: number | null;
          /** Id of the required storage path, or null. */
          filter_has_storage_path?: number | null;
          /** Day offset of a scheduled trigger from its date field. */
          schedule_offset_days?: number;
          /** Whether a scheduled trigger repeats. */
          schedule_is_recurring?: boolean;
          /** Days between recurring scheduled runs. */
          schedule_recurring_interval_days?: number;
          /** Date field the scheduled trigger is measured from: added, created, modified or custom_field (then schedule_date_custom_field is required). Defaults to added. */
          schedule_date_field?: string;
          /** Id of the date custom field used by the schedule, or null. */
          schedule_date_custom_field?: number | null;
          [key: string]: unknown;
        }>;
        /** Actions the workflow performs, in execution order. */
        actions?: Array<{
          /** The action id. */
          id?: number;
          /** Action type: 1 assignment, 2 removal, 3 email (email is required), 4 webhook (webhook is required), 5 password removal (passwords is required), 6 move to trash, 7 remote OCR (the workflow needs a consumption started trigger), 8 apply AI suggestions (ai_suggestion_fields is required and the workflow needs a trigger other than consumption started). Defaults to 1. */
          type?: number;
          /** Title template, or null. */
          assign_title?: string | null;
          /** Ids of tags added to the document. */
          assign_tags?: Array<number>;
          /** Id of the assigned correspondent, or null. */
          assign_correspondent?: number | null;
          /** Id of the assigned document type, or null. */
          assign_document_type?: number | null;
          /** Id of the assigned storage path, or null. */
          assign_storage_path?: number | null;
          /** Id of the assigned owner, or null. */
          assign_owner?: number | null;
          /** Ids of users granted view permission. */
          assign_view_users?: Array<number>;
          /** Ids of groups granted view permission. */
          assign_view_groups?: Array<number>;
          /** Ids of users granted change permission. */
          assign_change_users?: Array<number>;
          /** Ids of groups granted change permission. */
          assign_change_groups?: Array<number>;
          /** Ids of custom fields attached to the document. */
          assign_custom_fields?: Array<number>;
          /** Custom field values keyed by custom field id, or null. */
          assign_custom_fields_values?: Record<string, unknown> | null;
          /** Whether every tag is removed. */
          remove_all_tags?: boolean;
          /** Ids of tags removed. */
          remove_tags?: Array<number>;
          /** Whether the correspondent is cleared. */
          remove_all_correspondents?: boolean;
          /** Ids of correspondents cleared when assigned. */
          remove_correspondents?: Array<number>;
          /** Whether the document type is cleared. */
          remove_all_document_types?: boolean;
          /** Ids of document types cleared when assigned. */
          remove_document_types?: Array<number>;
          /** Whether the storage path is cleared. */
          remove_all_storage_paths?: boolean;
          /** Ids of storage paths cleared when assigned. */
          remove_storage_paths?: Array<number>;
          /** Ids of custom fields detached. */
          remove_custom_fields?: Array<number>;
          /** Whether every custom field is detached. */
          remove_all_custom_fields?: boolean;
          /** Whether the owner is cleared. */
          remove_all_owners?: boolean;
          /** Ids of users cleared as owner. */
          remove_owners?: Array<number>;
          /** Whether all object permissions are removed. */
          remove_all_permissions?: boolean;
          /** Ids of users whose view permission is removed. */
          remove_view_users?: Array<number>;
          /** Ids of groups whose view permission is removed. */
          remove_view_groups?: Array<number>;
          /** Ids of users whose change permission is removed. */
          remove_change_users?: Array<number>;
          /** Ids of groups whose change permission is removed. */
          remove_change_groups?: Array<number>;
          /** Email settings of an email action. */
          email?: {
            /** The email settings id. */
            id?: number;
            /** Email subject template. */
            subject?: string;
            /** Email body template. */
            body?: string;
            /** Comma separated recipient email addresses. */
            to?: string;
            /** Whether the document file is attached. */
            include_document?: boolean;
            [key: string]: unknown;
          } | null;
          /** Webhook settings of a webhook action. */
          webhook?: {
            /** The webhook settings id. */
            id?: number;
            /** Destination URL of the webhook. */
            url?: string;
            /** Whether params are sent instead of body. */
            use_params?: boolean;
            /** Whether params are sent as JSON. */
            as_json?: boolean;
            /** Parameters sent with the webhook, or null. */
            params?: Record<string, unknown> | null;
            /** Raw request body, or null. */
            body?: string | null;
            /** HTTP headers sent with the webhook request, keyed by header name, or null. They may carry secrets such as an Authorization value and are redacted from connector logs. */
            headers?: Record<string, unknown> | null;
            /** Whether the document file is attached. */
            include_document?: boolean;
            [key: string]: unknown;
          } | null;
          /** Passwords tried by password removal actions, or null. Redacted from connector logs. */
          passwords?: Array<string> | null;
          /** AI-suggested fields applied by the action, or null. */
          ai_suggestion_fields?: Array<string> | null;
          /** Whether suggested objects that do not exist are created. */
          ai_create_missing?: boolean;
          /** Whether existing field values are overwritten. */
          ai_overwrite_existing?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get one workflow action by id. Requires the view_workflowaction permission. */
    "paperless_ngx.get_workflow_action": {
      input: {
        /**
         * The workflow action id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The action id. */
        id?: number;
        /** Action type: 1 assignment, 2 removal, 3 email (email is required), 4 webhook (webhook is required), 5 password removal (passwords is required), 6 move to trash, 7 remote OCR (the workflow needs a consumption started trigger), 8 apply AI suggestions (ai_suggestion_fields is required and the workflow needs a trigger other than consumption started). Defaults to 1. */
        type?: number;
        /** Title template, or null. */
        assign_title?: string | null;
        /** Ids of tags added to the document. */
        assign_tags?: Array<number>;
        /** Id of the assigned correspondent, or null. */
        assign_correspondent?: number | null;
        /** Id of the assigned document type, or null. */
        assign_document_type?: number | null;
        /** Id of the assigned storage path, or null. */
        assign_storage_path?: number | null;
        /** Id of the assigned owner, or null. */
        assign_owner?: number | null;
        /** Ids of users granted view permission. */
        assign_view_users?: Array<number>;
        /** Ids of groups granted view permission. */
        assign_view_groups?: Array<number>;
        /** Ids of users granted change permission. */
        assign_change_users?: Array<number>;
        /** Ids of groups granted change permission. */
        assign_change_groups?: Array<number>;
        /** Ids of custom fields attached to the document. */
        assign_custom_fields?: Array<number>;
        /** Custom field values keyed by custom field id, or null. */
        assign_custom_fields_values?: Record<string, unknown> | null;
        /** Whether every tag is removed. */
        remove_all_tags?: boolean;
        /** Ids of tags removed. */
        remove_tags?: Array<number>;
        /** Whether the correspondent is cleared. */
        remove_all_correspondents?: boolean;
        /** Ids of correspondents cleared when assigned. */
        remove_correspondents?: Array<number>;
        /** Whether the document type is cleared. */
        remove_all_document_types?: boolean;
        /** Ids of document types cleared when assigned. */
        remove_document_types?: Array<number>;
        /** Whether the storage path is cleared. */
        remove_all_storage_paths?: boolean;
        /** Ids of storage paths cleared when assigned. */
        remove_storage_paths?: Array<number>;
        /** Ids of custom fields detached. */
        remove_custom_fields?: Array<number>;
        /** Whether every custom field is detached. */
        remove_all_custom_fields?: boolean;
        /** Whether the owner is cleared. */
        remove_all_owners?: boolean;
        /** Ids of users cleared as owner. */
        remove_owners?: Array<number>;
        /** Whether all object permissions are removed. */
        remove_all_permissions?: boolean;
        /** Ids of users whose view permission is removed. */
        remove_view_users?: Array<number>;
        /** Ids of groups whose view permission is removed. */
        remove_view_groups?: Array<number>;
        /** Ids of users whose change permission is removed. */
        remove_change_users?: Array<number>;
        /** Ids of groups whose change permission is removed. */
        remove_change_groups?: Array<number>;
        /** Email settings of an email action. */
        email?: {
          /** The email settings id. */
          id?: number;
          /** Email subject template. */
          subject?: string;
          /** Email body template. */
          body?: string;
          /** Comma separated recipient email addresses. */
          to?: string;
          /** Whether the document file is attached. */
          include_document?: boolean;
          [key: string]: unknown;
        } | null;
        /** Webhook settings of a webhook action. */
        webhook?: {
          /** The webhook settings id. */
          id?: number;
          /** Destination URL of the webhook. */
          url?: string;
          /** Whether params are sent instead of body. */
          use_params?: boolean;
          /** Whether params are sent as JSON. */
          as_json?: boolean;
          /** Parameters sent with the webhook, or null. */
          params?: Record<string, unknown> | null;
          /** Raw request body, or null. */
          body?: string | null;
          /** HTTP headers sent with the webhook request, keyed by header name, or null. They may carry secrets such as an Authorization value and are redacted from connector logs. */
          headers?: Record<string, unknown> | null;
          /** Whether the document file is attached. */
          include_document?: boolean;
          [key: string]: unknown;
        } | null;
        /** Passwords tried by password removal actions, or null. Redacted from connector logs. */
        passwords?: Array<string> | null;
        /** AI-suggested fields applied by the action, or null. */
        ai_suggestion_fields?: Array<string> | null;
        /** Whether suggested objects that do not exist are created. */
        ai_create_missing?: boolean;
        /** Whether existing field values are overwritten. */
        ai_overwrite_existing?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get one workflow trigger by id. Requires the view_workflowtrigger permission. */
    "paperless_ngx.get_workflow_trigger": {
      input: {
        /**
         * The workflow trigger id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The trigger id. */
        id?: number;
        /** Trigger type: 1 consumption started (runs before the document is stored and requires filter_filename, filter_path or filter_mailrule), 2 document added, 3 document updated, 4 scheduled (fires relative to the date field selected by schedule_date_field). */
        type?: number;
        /** Document sources the trigger reacts to. */
        sources?: Array<number>;
        /** Consumption path pattern, or null. */
        filter_path?: string | null;
        /** File name pattern, or null. */
        filter_filename?: string | null;
        /** Id of the required mail rule, or null. */
        filter_mailrule?: number | null;
        /** Matching algorithm applied to the document content: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word. Defaults to 0. */
        matching_algorithm?: number;
        /** Text or pattern used by the matching algorithm. */
        match?: string;
        /** Whether content matching ignores case. */
        is_insensitive?: boolean;
        /** Ids of tags the document must carry at least one of. */
        filter_has_tags?: Array<number>;
        /** Ids of tags the document must carry all of. */
        filter_has_all_tags?: Array<number>;
        /** Ids of tags the document must not carry. */
        filter_has_not_tags?: Array<number>;
        /** JSON-encoded custom field query expression, or null. */
        filter_custom_field_query?: string | null;
        /** Ids of correspondents the document must have one of. */
        filter_has_any_correspondents?: Array<number>;
        /** Ids of correspondents the document must not have. */
        filter_has_not_correspondents?: Array<number>;
        /** Ids of document types the document must have one of. */
        filter_has_any_document_types?: Array<number>;
        /** Ids of document types the document must not have. */
        filter_has_not_document_types?: Array<number>;
        /** Ids of storage paths the document must use one of. */
        filter_has_any_storage_paths?: Array<number>;
        /** Ids of storage paths the document must not use. */
        filter_has_not_storage_paths?: Array<number>;
        /** Id of the required correspondent, or null. */
        filter_has_correspondent?: number | null;
        /** Id of the required document type, or null. */
        filter_has_document_type?: number | null;
        /** Id of the required storage path, or null. */
        filter_has_storage_path?: number | null;
        /** Day offset of a scheduled trigger from its date field. */
        schedule_offset_days?: number;
        /** Whether a scheduled trigger repeats. */
        schedule_is_recurring?: boolean;
        /** Days between recurring scheduled runs. */
        schedule_recurring_interval_days?: number;
        /** Date field the scheduled trigger is measured from: added, created, modified or custom_field (then schedule_date_custom_field is required). Defaults to added. */
        schedule_date_field?: string;
        /** Id of the date custom field used by the schedule, or null. */
        schedule_date_custom_field?: number | null;
        [key: string]: unknown;
      };
    };
    /** Search across documents, saved views, tags, correspondents, document types, storage paths, users, groups, mail rules, mail accounts, workflows and custom fields by name or title, returning at most three matches per object type. Documents are matched through the full text index unless db_only is true, in which case only titles are compared. */
    "paperless_ngx.global_search": {
      input: {
        /**
         * Search text, at least three characters.
         * @minLength 3
         */
        query: string;
        /** When true, match documents by title in the database instead of the full text index. Defaults to false. */
        db_only?: boolean;
      };
      output: {
        /** Total number of matches across all object types. */
        total: number;
        /** Matching documents. */
        documents: Array<{
          /** The document id. */
          id?: number;
          /** Correspondent id, or null. */
          correspondent?: number | null;
          /** Document type id, or null. */
          document_type?: number | null;
          /** Storage path id, or null. */
          storage_path?: number | null;
          /** The document title. */
          title?: string;
          /** Extracted text content of the latest version, possibly truncated when truncate_content is true. */
          content?: string;
          /** Ids of the tags assigned to the document. */
          tags?: Array<number>;
          /** Creation date as YYYY-MM-DD. */
          created?: string;
          /** Deprecated duplicate of created. */
          created_date?: string;
          /** ISO 8601 timestamp of the last modification. */
          modified?: string;
          /** ISO 8601 timestamp when the document was added. */
          added?: string;
          /** ISO 8601 timestamp when the document was moved to the trash, or null. */
          deleted_at?: string | null;
          /** Archive serial number (ASN), or null. */
          archive_serial_number?: number | null;
          /** File name of the original upload. */
          original_file_name?: string | null;
          /** Public file name of the archived PDF, or null when no archive version exists. */
          archived_file_name?: string | null;
          /** Other documents sharing the same checksum, only populated on single document reads. */
          duplicate_documents?: Array<{
            /** The duplicate document id. */
            id?: number;
            /** The duplicate document title. */
            title?: string;
            /** When the duplicate was trashed, or null. */
            deleted_at?: string | null;
            [key: string]: unknown;
          }>;
          /** Id of the owning user, or null when the object is unowned. */
          owner?: number | null;
          /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
          permissions?: {
            /** Users and groups holding this permission. */
            view?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            /** Users and groups holding this permission. */
            change?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Whether the connected user may modify this object. */
          user_can_change?: boolean;
          /** Whether the connected user owns the document and has shared it with others. */
          is_shared_by_requester?: boolean;
          /** Notes attached to the document. */
          notes?: Array<{
            /** The note id. */
            id?: number;
            /** The note text. */
            note?: string;
            /** ISO 8601 creation timestamp. */
            created?: string;
            /** The user who wrote the note. */
            user?: {
              /** The user id. */
              id?: number;
              /** The username. */
              username?: string;
              /** The first name. */
              first_name?: string;
              /** The last name. */
              last_name?: string;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          }>;
          /** Custom field values attached to the document. */
          custom_fields?: Array<{
            /** The custom field id. */
            field?: number;
            /** The value in the field's data type: string, number, boolean, ISO date, select option id, or an array of document ids for document links. Null clears the value. */
            value?: unknown;
            [key: string]: unknown;
          }>;
          /** Number of pages, or null when unknown. */
          page_count?: number | null;
          /** MIME type of the original file. */
          mime_type?: string;
          /** Id of the root document when this entry is a version, or null. */
          root_document?: number | null;
          /** File-level versions of the document. */
          versions?: Array<{
            /** The version's document id. */
            id?: number;
            /** ISO 8601 timestamp when the version was added. */
            added?: string;
            /** Optional label for the version. */
            version_label?: string | null;
            /** MD5 checksum of the version's original file. */
            checksum?: string | null;
            /** Whether this entry is the root (original) document. */
            is_root?: boolean;
            [key: string]: unknown;
          }>;
          /** Search result details, only present on full text search results. */
          __search_hit__?: {
            /** Relevance score relative to the other results. */
            score?: number;
            /** Excerpt of the content with matching terms wrapped in span tags. */
            highlights?: string;
            /** Zero-based rank of the result. */
            rank?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Matching saved views. */
        saved_views: Array<{
          /** The saved view id. */
          id?: number;
          /** The saved view name. */
          name?: string;
          /** Icon name shown next to the view, or null. */
          icon?: string | null;
          /** Field the view sorts by. */
          sort_field?: string | null;
          /** Whether the sort is descending. */
          sort_reverse?: boolean;
          /** Filter rules that define the view. */
          filter_rules?: Array<{
            /** Numeric filter rule type. */
            rule_type?: number;
            /** Rule value, or null. */
            value?: string | null;
            [key: string]: unknown;
          }>;
          /** Page size used when displaying the view, or null. */
          page_size?: number | null;
          /** Display mode: table, smallCards or largeCards. */
          display_mode?: string | null;
          /** Fields shown in the view. */
          display_fields?: Array<string> | null;
          /** Id of the owning user, or null when the object is unowned. */
          owner?: number | null;
          /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
          permissions?: {
            /** Users and groups holding this permission. */
            view?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            /** Users and groups holding this permission. */
            change?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Whether the connected user may modify this object. */
          user_can_change?: boolean;
          [key: string]: unknown;
        }>;
        /** Matching tags. */
        tags: Array<{
          /** The object id. */
          id?: number;
          /** URL-safe slug derived from the name. */
          slug?: string;
          /** The object name. */
          name?: string;
          /** Text or pattern used by the matching algorithm. */
          match?: string;
          /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
          matching_algorithm?: number;
          /** Whether matching ignores case. */
          is_insensitive?: boolean;
          /** Number of documents visible to the connected user that use this object. */
          document_count?: number;
          /** Id of the owning user, or null when the object is unowned. */
          owner?: number | null;
          /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
          permissions?: {
            /** Users and groups holding this permission. */
            view?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            /** Users and groups holding this permission. */
            change?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Whether the connected user may modify this object. */
          user_can_change?: boolean;
          /** Hex color such as #a6cee3. */
          color?: string;
          /** Black or white text color chosen for contrast against color. */
          text_color?: string;
          /** Whether new documents automatically receive this tag. */
          is_inbox_tag?: boolean;
          /** Id of the parent tag, or null for a root tag. */
          parent?: number | null;
          /** Child tags, each with the same shape as a tag. */
          children?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Matching correspondents. */
        correspondents: Array<{
          /** The object id. */
          id?: number;
          /** URL-safe slug derived from the name. */
          slug?: string;
          /** The object name. */
          name?: string;
          /** Text or pattern used by the matching algorithm. */
          match?: string;
          /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
          matching_algorithm?: number;
          /** Whether matching ignores case. */
          is_insensitive?: boolean;
          /** Number of documents visible to the connected user that use this object. */
          document_count?: number;
          /** Id of the owning user, or null when the object is unowned. */
          owner?: number | null;
          /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
          permissions?: {
            /** Users and groups holding this permission. */
            view?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            /** Users and groups holding this permission. */
            change?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Whether the connected user may modify this object. */
          user_can_change?: boolean;
          /** Date of the most recent document from this correspondent, when requested. */
          last_correspondence?: string | null;
          [key: string]: unknown;
        }>;
        /** Matching document types. */
        document_types: Array<{
          /** The object id. */
          id?: number;
          /** URL-safe slug derived from the name. */
          slug?: string;
          /** The object name. */
          name?: string;
          /** Text or pattern used by the matching algorithm. */
          match?: string;
          /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
          matching_algorithm?: number;
          /** Whether matching ignores case. */
          is_insensitive?: boolean;
          /** Number of documents visible to the connected user that use this object. */
          document_count?: number;
          /** Id of the owning user, or null when the object is unowned. */
          owner?: number | null;
          /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
          permissions?: {
            /** Users and groups holding this permission. */
            view?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            /** Users and groups holding this permission. */
            change?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Whether the connected user may modify this object. */
          user_can_change?: boolean;
          [key: string]: unknown;
        }>;
        /** Matching storage paths. */
        storage_paths: Array<{
          /** The object id. */
          id?: number;
          /** URL-safe slug derived from the name. */
          slug?: string;
          /** The object name. */
          name?: string;
          /** Text or pattern used by the matching algorithm. */
          match?: string;
          /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
          matching_algorithm?: number;
          /** Whether matching ignores case. */
          is_insensitive?: boolean;
          /** Number of documents visible to the connected user that use this object. */
          document_count?: number;
          /** Id of the owning user, or null when the object is unowned. */
          owner?: number | null;
          /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
          permissions?: {
            /** Users and groups holding this permission. */
            view?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            /** Users and groups holding this permission. */
            change?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Whether the connected user may modify this object. */
          user_can_change?: boolean;
          /** Filename template used to place documents under the media directory. */
          path?: string;
          [key: string]: unknown;
        }>;
        /** Matching users. */
        users: Array<{
          /** The user id. */
          id?: number;
          /** The username. */
          username?: string;
          /** The email address. */
          email?: string;
          /** Obfuscated placeholder; the real password is never returned. */
          password?: string;
          /** The first name. */
          first_name?: string;
          /** The last name. */
          last_name?: string;
          /** ISO 8601 timestamp when the user was created. */
          date_joined?: string;
          /** Whether the user may access the admin site. */
          is_staff?: boolean;
          /** Whether the account is active. */
          is_active?: boolean;
          /** Whether the user is a superuser. */
          is_superuser?: boolean;
          /** Ids of the groups the user belongs to. */
          groups?: Array<number>;
          /** Permission codenames granted directly to the user. */
          user_permissions?: Array<string>;
          /** Permission codenames inherited from groups. */
          inherited_permissions?: Array<string>;
          /** Whether TOTP multi-factor authentication is active. */
          is_mfa_enabled?: boolean;
          [key: string]: unknown;
        }>;
        /** Matching groups. */
        groups: Array<{
          /** The group id. */
          id?: number;
          /** The group name. */
          name?: string;
          /** Permission codenames granted to the group. */
          permissions?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Matching mail rules. */
        mail_rules: Array<{
          /** The mail rule id. */
          id?: number;
          /** The rule name. */
          name?: string;
          /** Id of the mail account the rule belongs to. */
          account?: number;
          /** Whether the rule is active. */
          enabled?: boolean;
          /** IMAP folder to scan. */
          folder?: string;
          /** Sender filter, or null. */
          filter_from?: string | null;
          /** Recipient filter, or null. */
          filter_to?: string | null;
          /** Subject filter, or null. */
          filter_subject?: string | null;
          /** Body filter, or null. */
          filter_body?: string | null;
          /** Attachment filename include pattern, or null. */
          filter_attachment_filename_include?: string | null;
          /** Attachment filename exclude pattern, or null. */
          filter_attachment_filename_exclude?: string | null;
          /** Maximum mail age in days, 0 for no limit. */
          maximum_age?: number;
          /** Post-consumption mail action: 1 delete, 2 move, 3 mark read, 4 flag, 5 tag. */
          action?: number;
          /** Folder or tag used by the action, or null. */
          action_parameter?: string | null;
          /** Title source: 1 subject, 2 attachment filename, 3 none. */
          assign_title_from?: number;
          /** Ids of tags assigned to consumed documents. */
          assign_tags?: Array<number>;
          /** Correspondent source: 1 nothing, 2 email, 3 name, 4 custom. */
          assign_correspondent_from?: number;
          /** Correspondent id used when assign_correspondent_from is 4, or null. */
          assign_correspondent?: number | null;
          /** Document type id assigned to consumed documents, or null. */
          assign_document_type?: number | null;
          /** Whether consumed documents are owned by the rule owner. */
          assign_owner_from_rule?: boolean;
          /** Evaluation order among rules. */
          order?: number;
          /** Attachment processing: 1 attachments only, 2 everything including inline. */
          attachment_type?: number;
          /** Consumption scope: 1 attachments only, 2 eml only, 3 everything. */
          consumption_scope?: number;
          /** PDF layout for mail bodies: 0 system default, 1 text then HTML, 2 HTML then text, 3 HTML only, 4 text only. */
          pdf_layout?: number;
          /** Whether later rules are skipped once this rule matches. */
          stop_processing?: boolean;
          /** Id of the owning user, or null when the object is unowned. */
          owner?: number | null;
          /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
          permissions?: {
            /** Users and groups holding this permission. */
            view?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            /** Users and groups holding this permission. */
            change?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Whether the connected user may modify this object. */
          user_can_change?: boolean;
          [key: string]: unknown;
        }>;
        /** Matching mail accounts. */
        mail_accounts: Array<{
          /** The mail account id. */
          id?: number;
          /** The account name. */
          name?: string;
          /** IMAP server host. */
          imap_server?: string;
          /** IMAP port. */
          imap_port?: number | null;
          /** IMAP security: 1 none, 2 SSL, 3 STARTTLS. */
          imap_security?: number;
          /** IMAP username. */
          username?: string;
          /** Obfuscated placeholder; the real password is never returned. */
          password?: string;
          /** Character set used to decode mail. */
          character_set?: string;
          /** Whether password holds an OAuth token. */
          is_token?: boolean;
          /** Account type: 1 IMAP, 2 Gmail OAuth, 3 Outlook OAuth. */
          account_type?: number;
          /** OAuth token expiration, or null. */
          expiration?: string | null;
          /** Id of the owning user, or null when the object is unowned. */
          owner?: number | null;
          /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
          permissions?: {
            /** Users and groups holding this permission. */
            view?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            /** Users and groups holding this permission. */
            change?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Whether the connected user may modify this object. */
          user_can_change?: boolean;
          [key: string]: unknown;
        }>;
        /** Matching workflows. */
        workflows: Array<{
          /** The workflow id. */
          id?: number;
          /** The workflow name. */
          name?: string;
          /** Evaluation order among workflows. */
          order?: number;
          /** Whether the workflow is active. */
          enabled?: boolean;
          /** Triggers that start the workflow. */
          triggers?: Array<Record<string, unknown>>;
          /** Actions the workflow performs. */
          actions?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Matching custom fields. */
        custom_fields: Array<{
          /** The custom field id. */
          id?: number;
          /** The custom field name. */
          name?: string;
          /** The value type: string, url, date, boolean, integer, float, monetary, documentlink, select or longtext. */
          data_type?: string;
          /** Type-specific settings, such as select_options for select fields or default_currency for monetary fields. */
          extra_data?: Record<string, unknown> | null;
          /** Number of documents that carry this field. */
          document_count?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the background tasks that are currently pending or started, newest first, capped at 50 entries and not paginated. Non-staff users see their own tasks plus unowned system tasks. */
    "paperless_ngx.list_active_tasks": {
      input: Record<string, never>;
      output: {
        /** Pending and started tasks, newest first, at most 50. */
        tasks: Array<{
          /** The task row id. */
          id?: number;
          /** The Celery task UUID. */
          task_id?: string;
          /** Task type such as consume_file or train_classifier. */
          task_type?: string;
          /** Human readable task type. */
          task_type_display?: string;
          /** What triggered the task, such as api_upload or scheduled. */
          trigger_source?: string;
          /** Human readable trigger source. */
          trigger_source_display?: string;
          /** Task status: pending, started, success, failure or revoked. */
          status?: string;
          /** Human readable status. */
          status_display?: string;
          /** ISO 8601 timestamp when the task was created. */
          date_created?: string;
          /** ISO 8601 timestamp when the task started, or null. */
          date_started?: string | null;
          /** ISO 8601 timestamp when the task finished, or null. */
          date_done?: string | null;
          /** Run time in seconds, or null while running. */
          duration_seconds?: number | null;
          /** Queue wait time in seconds, or null. */
          wait_time_seconds?: number | null;
          /** Task input such as the uploaded filename. */
          input_data?: Record<string, unknown> | null;
          /** Structured task result, or null while the task has not finished. Consume tasks report the created document in document_id, a rejected duplicate in duplicate_of and the rejection text in reason; failures carry error_message. */
          result_data?: {
            /** Id of the document created by a successful consume task. */
            document_id?: number;
            /** Id of the existing document when the consumed file was rejected as a duplicate. */
            duplicate_of?: number;
            /** Human readable reason when the file was not consumed. */
            reason?: string;
            /** Human readable result message. */
            message?: string;
            /** Error message when the task failed. */
            error_message?: string;
            [key: string]: unknown;
          } | null;
          /** Ids of documents related to the task. */
          related_document_ids?: Array<number>;
          /** Whether the task has been acknowledged (dismissed) in the UI. */
          acknowledged?: boolean;
          /** Id of the user who owns the task, or null for system tasks. */
          owner?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List correspondents visible to the connected user with their document counts. Supports id and case-insensitive name filters, ordering and pagination; set last_correspondence to true to include the date of the newest document per correspondent. Requires the view_correspondent permission. */
    "paperless_ngx.list_correspondents": {
      input: {
        /**
         * Return only the object with this id.
         * @exclusiveMinimum 0
         */
        id?: number;
        /** Return only objects whose id is in this list. */
        id__in?: Array<number>;
        /** Case-insensitive substring match on the name. */
        name__icontains?: string;
        /** Case-insensitive exact match on the name. */
        name__iexact?: string;
        /** Case-insensitive prefix match on the name. */
        name__istartswith?: string;
        /** Case-insensitive suffix match on the name. */
        name__iendswith?: string;
        /** When true, annotate each correspondent with last_correspondence, the creation date of its newest visible document. Defaults to false; the field is then absent from list results. */
        last_correspondence?: boolean;
        /** When true, return the full object permissions in the permissions field instead of only user_can_change. Defaults to false. */
        full_perms?: boolean;
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /**
         * Field to order by, prefixed with - for descending order, for example -name. Accepted fields: name, matching_algorithm, match, document_count, last_correspondence.
         * @minLength 1
         */
        ordering?: string;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The object id. */
          id?: number;
          /** URL-safe slug derived from the name. */
          slug?: string;
          /** The object name. */
          name?: string;
          /** Text or pattern used by the matching algorithm. */
          match?: string;
          /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
          matching_algorithm?: number;
          /** Whether matching ignores case. */
          is_insensitive?: boolean;
          /** Number of documents visible to the connected user that use this object. */
          document_count?: number;
          /** Id of the owning user, or null when the object is unowned. */
          owner?: number | null;
          /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
          permissions?: {
            /** Users and groups holding this permission. */
            view?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            /** Users and groups holding this permission. */
            change?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Whether the connected user may modify this object. */
          user_can_change?: boolean;
          /** Date of the most recent document from this correspondent, when requested. */
          last_correspondence?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List custom field definitions with the number of documents using each one. Supports id and case-insensitive name filters, ordering and pagination. Custom fields carry no object-level permissions; requires the view_customfield permission. */
    "paperless_ngx.list_custom_fields": {
      input: {
        /**
         * Return only the object with this id.
         * @exclusiveMinimum 0
         */
        id?: number;
        /** Return only objects whose id is in this list. */
        id__in?: Array<number>;
        /** Case-insensitive substring match on the name. */
        name__icontains?: string;
        /** Case-insensitive exact match on the name. */
        name__iexact?: string;
        /** Case-insensitive prefix match on the name. */
        name__istartswith?: string;
        /** Case-insensitive suffix match on the name. */
        name__iendswith?: string;
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /**
         * Field to order by, prefixed with - for descending order, for example -name. Accepted fields: name, id, data_type, document_count.
         * @minLength 1
         */
        ordering?: string;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The custom field id. */
          id?: number;
          /** The custom field name. */
          name?: string;
          /** The value type: string, url, date, boolean, integer, float, monetary, documentlink, select or longtext. */
          data_type?: string;
          /** Type-specific settings, or null. */
          extra_data?: {
            /** Options of a select field. */
            select_options?: Array<{
              /** Stable option id referenced by document values. */
              id?: string;
              /** Option label shown to users. */
              label?: string;
              [key: string]: unknown;
            }>;
            /** Default ISO 4217 currency code for monetary fields, or null. */
            default_currency?: string | null;
            [key: string]: unknown;
          } | null;
          /** Number of documents that carry this field. */
          document_count?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the notes attached to a document, newest first, each with its author. Requires the view_note permission and view access to the document. */
    "paperless_ngx.list_document_notes": {
      input: {
        /**
         * Id of the document.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Every note on the document after the operation, newest first. */
        notes: Array<{
          /** The note id. */
          id?: number;
          /** The note text. */
          note?: string;
          /** ISO 8601 creation timestamp. */
          created?: string;
          /** The user who wrote the note. */
          user?: {
            /** The user id. */
            id?: number;
            /** The username. */
            username?: string;
            /** The first name. */
            first_name?: string;
            /** The last name. */
            last_name?: string;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the share links of a document that have not expired yet, newest first. Requires change access to the document (Paperless-ngx treats reading share links as a sharing operation). */
    "paperless_ngx.list_document_share_links": {
      input: {
        /**
         * Id of the document.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Unexpired share links, newest first. */
        share_links: Array<{
          /** The share link id. */
          id?: number;
          /** ISO 8601 creation timestamp. */
          created?: string;
          /** ISO 8601 expiration timestamp, or null when it never expires. */
          expiration?: string | null;
          /** Slug that forms the public URL <instance>/share/<slug>. */
          slug?: string;
          /** Id of the shared document. */
          document?: number;
          /** Which file is served: archive or original. */
          file_version?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List document types visible to the connected user with their document counts. Supports id and case-insensitive name filters, ordering and pagination. Requires the view_documenttype permission. */
    "paperless_ngx.list_document_types": {
      input: {
        /**
         * Return only the object with this id.
         * @exclusiveMinimum 0
         */
        id?: number;
        /** Return only objects whose id is in this list. */
        id__in?: Array<number>;
        /** Case-insensitive substring match on the name. */
        name__icontains?: string;
        /** Case-insensitive exact match on the name. */
        name__iexact?: string;
        /** Case-insensitive prefix match on the name. */
        name__istartswith?: string;
        /** Case-insensitive suffix match on the name. */
        name__iendswith?: string;
        /** When true, return the full object permissions in the permissions field instead of only user_can_change. Defaults to false. */
        full_perms?: boolean;
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /**
         * Field to order by, prefixed with - for descending order, for example -name. Accepted fields: name, matching_algorithm, match, document_count.
         * @minLength 1
         */
        ordering?: string;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The object id. */
          id?: number;
          /** URL-safe slug derived from the name. */
          slug?: string;
          /** The object name. */
          name?: string;
          /** Text or pattern used by the matching algorithm. */
          match?: string;
          /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
          matching_algorithm?: number;
          /** Whether matching ignores case. */
          is_insensitive?: boolean;
          /** Number of documents visible to the connected user that use this object. */
          document_count?: number;
          /** Id of the owning user, or null when the object is unowned. */
          owner?: number | null;
          /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
          permissions?: {
            /** Users and groups holding this permission. */
            view?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            /** Users and groups holding this permission. */
            change?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Whether the connected user may modify this object. */
          user_can_change?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List or search documents visible to the connected user, 25 per page by default. Filters mirror the Paperless-ngx query parameters: id, title, archive serial number, dates, correspondent, document type, storage path, tags, owner, custom fields, MIME type and content lookups can be combined; anything not modelled goes into additional_filters. query, text, title_search and more_like_id run a search-index query instead, returning results with __search_hit__ ordered by relevance, and only one of them may be used per call. Only root documents are listed; file versions appear inside each document's versions array. Requires the view_document permission. */
    "paperless_ngx.list_documents": {
      input: {
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /**
         * Field to order by, prefixed with - for descending order. Accepted: id, title, correspondent__name, document_type__name, storage_path__name, created, modified, added, archive_serial_number, num_notes, owner, page_count, and custom_field_<id> to sort by a custom field (for example custom_field_3). Search requests additionally accept score. Defaults to -created.
         * @minLength 1
         */
        ordering?: string;
        /** When true, content is cut to its first 550 characters to keep large pages small. Defaults to false. */
        truncate_content?: boolean;
        /** Names of the document fields to include in each result, for example id, title, created, tags and custom_fields. Fields not listed are omitted from the response; when not given every field is returned. */
        fields?: Array<string>;
        /** When true, return the full object permissions in the permissions field instead of only user_can_change. Defaults to false. */
        full_perms?: boolean;
        /** When true, the response also carries selection_data with per-object document counts (correspondents, tags, document types, storage paths and custom fields) across every matching document, not only the current page. Defaults to false. */
        include_selection_data?: boolean;
        /** Advanced full text query evaluated by the search index, for example invoice AND tag:tax or correspondent:acme created:[2024 to 2025]. Results carry __search_hit__ and come back most relevant first unless ordering is given. Only one of query, text, title_search and more_like_id may be used per request. */
        query?: string;
        /** Simple substring-style search over title and content through the search index. Results carry __search_hit__. Only one of query, text, title_search and more_like_id may be used per request. */
        text?: string;
        /** Simple substring-style search over titles only through the search index. Results carry __search_hit__. Only one of query, text, title_search and more_like_id may be used per request. */
        title_search?: string;
        /**
         * Id of a document the connected user may view; returns documents with similar content, most similar first, each carrying __search_hit__. Only one of query, text, title_search and more_like_id may be used per request.
         * @exclusiveMinimum 0
         */
        more_like_id?: number;
        /**
         * Only the document with this id.
         * @exclusiveMinimum 0
         */
        id?: number;
        /** Only documents whose id is one of these values. */
        id__in?: Array<number>;
        /** Only documents whose title starts with this text, ignoring case. */
        title__istartswith?: string;
        /** Only documents whose title ends with this text, ignoring case. */
        title__iendswith?: string;
        /** Only documents whose title contains this text, ignoring case. */
        title__icontains?: string;
        /** Only documents whose title equals this text, ignoring case. */
        title__iexact?: string;
        /**
         * Only the document with exactly this archive serial number.
         * @minimum 0
         * @maximum 4294967295
         */
        archive_serial_number?: number;
        /**
         * Only documents whose archive serial number is greater than this value.
         * @minimum 0
         * @maximum 4294967295
         */
        archive_serial_number__gt?: number;
        /**
         * Only documents whose archive serial number is greater than or equal to this value.
         * @minimum 0
         * @maximum 4294967295
         */
        archive_serial_number__gte?: number;
        /**
         * Only documents whose archive serial number is less than this value.
         * @minimum 0
         * @maximum 4294967295
         */
        archive_serial_number__lt?: number;
        /**
         * Only documents whose archive serial number is less than or equal to this value.
         * @minimum 0
         * @maximum 4294967295
         */
        archive_serial_number__lte?: number;
        /** When true, only documents without an archive serial number; when false, only documents that have one. */
        archive_serial_number__isnull?: boolean;
        /** Only documents whose creation date falls in this year, for example 2024. */
        created__year?: number;
        /**
         * Only documents whose creation date falls in this month (1-12).
         * @minimum 1
         * @maximum 12
         */
        created__month?: number;
        /**
         * Only documents whose creation date falls on this day of the month (1-31).
         * @minimum 1
         * @maximum 31
         */
        created__day?: number;
        /**
         * Only documents whose creation date is after this date (YYYY-MM-DD, exclusive).
         * @format date
         */
        created__gt?: string;
        /**
         * Only documents whose creation date is on or after this date (YYYY-MM-DD, inclusive).
         * @format date
         */
        created__gte?: string;
        /**
         * Only documents whose creation date is before this date (YYYY-MM-DD, exclusive).
         * @format date
         */
        created__lt?: string;
        /**
         * Only documents whose creation date is on or before this date (YYYY-MM-DD, inclusive).
         * @format date
         */
        created__lte?: string;
        /**
         * Alias of created__gt kept for backwards compatibility: only documents created after this date (YYYY-MM-DD, exclusive).
         * @format date
         */
        created__date__gt?: string;
        /**
         * Alias of created__gte kept for backwards compatibility: only documents created on or after this date (YYYY-MM-DD, inclusive).
         * @format date
         */
        created__date__gte?: string;
        /**
         * Alias of created__lt kept for backwards compatibility: only documents created before this date (YYYY-MM-DD, exclusive).
         * @format date
         */
        created__date__lt?: string;
        /**
         * Alias of created__lte kept for backwards compatibility: only documents created on or before this date (YYYY-MM-DD, inclusive).
         * @format date
         */
        created__date__lte?: string;
        /** Only documents added to Paperless-ngx in this year, for example 2024. */
        added__year?: number;
        /**
         * Only documents added to Paperless-ngx in this month (1-12).
         * @minimum 1
         * @maximum 12
         */
        added__month?: number;
        /**
         * Only documents added to Paperless-ngx on this day of the month (1-31).
         * @minimum 1
         * @maximum 31
         */
        added__day?: number;
        /**
         * Only documents added to Paperless-ngx after this calendar date (YYYY-MM-DD, exclusive).
         * @format date
         */
        added__date__gt?: string;
        /**
         * Only documents added to Paperless-ngx on or after this calendar date (YYYY-MM-DD, inclusive).
         * @format date
         */
        added__date__gte?: string;
        /**
         * Only documents added to Paperless-ngx before this calendar date (YYYY-MM-DD, exclusive).
         * @format date
         */
        added__date__lt?: string;
        /**
         * Only documents added to Paperless-ngx on or before this calendar date (YYYY-MM-DD, inclusive).
         * @format date
         */
        added__date__lte?: string;
        /** Only documents added to Paperless-ngx after this ISO 8601 timestamp, for example 2024-05-01T00:00:00Z (exclusive). */
        added__gt?: string;
        /** Only documents added to Paperless-ngx at or after this ISO 8601 timestamp, for example 2024-05-01T00:00:00Z (inclusive). */
        added__gte?: string;
        /** Only documents added to Paperless-ngx before this ISO 8601 timestamp, for example 2024-05-01T00:00:00Z (exclusive). */
        added__lt?: string;
        /** Only documents added to Paperless-ngx at or before this ISO 8601 timestamp, for example 2024-05-01T00:00:00Z (inclusive). */
        added__lte?: string;
        /** Only documents last modified in this year, for example 2024. */
        modified__year?: number;
        /**
         * Only documents last modified in this month (1-12).
         * @minimum 1
         * @maximum 12
         */
        modified__month?: number;
        /**
         * Only documents last modified on this day of the month (1-31).
         * @minimum 1
         * @maximum 31
         */
        modified__day?: number;
        /**
         * Only documents last modified after this calendar date (YYYY-MM-DD, exclusive).
         * @format date
         */
        modified__date__gt?: string;
        /**
         * Only documents last modified on or after this calendar date (YYYY-MM-DD, inclusive).
         * @format date
         */
        modified__date__gte?: string;
        /**
         * Only documents last modified before this calendar date (YYYY-MM-DD, exclusive).
         * @format date
         */
        modified__date__lt?: string;
        /**
         * Only documents last modified on or before this calendar date (YYYY-MM-DD, inclusive).
         * @format date
         */
        modified__date__lte?: string;
        /** Only documents last modified after this ISO 8601 timestamp, for example 2024-05-01T00:00:00Z (exclusive). */
        modified__gt?: string;
        /** Only documents last modified at or after this ISO 8601 timestamp, for example 2024-05-01T00:00:00Z (inclusive). */
        modified__gte?: string;
        /** Only documents last modified before this ISO 8601 timestamp, for example 2024-05-01T00:00:00Z (exclusive). */
        modified__lt?: string;
        /** Only documents last modified at or before this ISO 8601 timestamp, for example 2024-05-01T00:00:00Z (inclusive). */
        modified__lte?: string;
        /** Only documents whose original upload file name starts with this text, ignoring case. */
        original_filename__istartswith?: string;
        /** Only documents whose original upload file name ends with this text, ignoring case. */
        original_filename__iendswith?: string;
        /** Only documents whose original upload file name contains this text, ignoring case. */
        original_filename__icontains?: string;
        /** Only documents whose original upload file name equals this text, ignoring case. */
        original_filename__iexact?: string;
        /** Only documents whose MD5 checksum of the original file starts with this text, ignoring case. */
        checksum__istartswith?: string;
        /** Only documents whose MD5 checksum of the original file ends with this text, ignoring case. */
        checksum__iendswith?: string;
        /** Only documents whose MD5 checksum of the original file contains this text, ignoring case. */
        checksum__icontains?: string;
        /** Only documents whose MD5 checksum of the original file equals this text, ignoring case. */
        checksum__iexact?: string;
        /** When true, only documents without a correspondent; when false, only documents that have one. */
        correspondent__isnull?: boolean;
        /**
         * Only documents whose correspondent has this id.
         * @exclusiveMinimum 0
         */
        correspondent__id?: number;
        /** Only documents whose correspondent id is one of these values. */
        correspondent__id__in?: Array<number>;
        /** Exclude documents whose correspondent id is one of these values. */
        correspondent__id__none?: Array<number>;
        /** Only documents whose correspondent name starts with this text, ignoring case. */
        correspondent__name__istartswith?: string;
        /** Only documents whose correspondent name ends with this text, ignoring case. */
        correspondent__name__iendswith?: string;
        /** Only documents whose correspondent name contains this text, ignoring case. */
        correspondent__name__icontains?: string;
        /** Only documents whose correspondent name equals this text, ignoring case. */
        correspondent__name__iexact?: string;
        /**
         * Only documents carrying the tag with this id.
         * @exclusiveMinimum 0
         */
        tags__id?: number;
        /** Only documents carrying at least one of these tags. */
        tags__id__in?: Array<number>;
        /** Only documents carrying every one of these tags. */
        tags__id__all?: Array<number>;
        /** Exclude documents carrying any of these tags. */
        tags__id__none?: Array<number>;
        /** Only documents whose tag name starts with this text, ignoring case. */
        tags__name__istartswith?: string;
        /** Only documents whose tag name ends with this text, ignoring case. */
        tags__name__iendswith?: string;
        /** Only documents whose tag name contains this text, ignoring case. */
        tags__name__icontains?: string;
        /** Only documents whose tag name equals this text, ignoring case. */
        tags__name__iexact?: string;
        /** When true, only documents without a document type; when false, only documents that have one. */
        document_type__isnull?: boolean;
        /**
         * Only documents whose document type has this id.
         * @exclusiveMinimum 0
         */
        document_type__id?: number;
        /** Only documents whose document type id is one of these values. */
        document_type__id__in?: Array<number>;
        /** Exclude documents whose document type id is one of these values. */
        document_type__id__none?: Array<number>;
        /** Only documents whose document type name starts with this text, ignoring case. */
        document_type__name__istartswith?: string;
        /** Only documents whose document type name ends with this text, ignoring case. */
        document_type__name__iendswith?: string;
        /** Only documents whose document type name contains this text, ignoring case. */
        document_type__name__icontains?: string;
        /** Only documents whose document type name equals this text, ignoring case. */
        document_type__name__iexact?: string;
        /** When true, only documents without a storage path; when false, only documents that have one. */
        storage_path__isnull?: boolean;
        /**
         * Only documents whose storage path has this id.
         * @exclusiveMinimum 0
         */
        storage_path__id?: number;
        /** Only documents whose storage path id is one of these values. */
        storage_path__id__in?: Array<number>;
        /** Exclude documents whose storage path id is one of these values. */
        storage_path__id__none?: Array<number>;
        /** Only documents whose storage path name starts with this text, ignoring case. */
        storage_path__name__istartswith?: string;
        /** Only documents whose storage path name ends with this text, ignoring case. */
        storage_path__name__iendswith?: string;
        /** Only documents whose storage path name contains this text, ignoring case. */
        storage_path__name__icontains?: string;
        /** Only documents whose storage path name equals this text, ignoring case. */
        storage_path__name__iexact?: string;
        /** When true, only documents without an owner; when false, only owned documents. */
        owner__isnull?: boolean;
        /**
         * Only documents owned by the user with this id.
         * @exclusiveMinimum 0
         */
        owner__id?: number;
        /** Only documents owned by one of these users. */
        owner__id__in?: Array<number>;
        /** Exclude documents owned by any of these users. */
        owner__id__none?: Array<number>;
        /** When true, only documents with at least one tag; when false, only untagged documents. */
        is_tagged?: boolean;
        /** When true, only documents carrying an inbox tag; when false, only documents without any inbox tag. */
        is_in_inbox?: boolean;
        /** Deprecated database substring match on title or content, ignoring case. Prefer text, which uses the search index. */
        title_content?: string;
        /** Only documents whose extracted text content starts with this text, ignoring case. */
        content__istartswith?: string;
        /** Only documents whose extracted text content ends with this text, ignoring case. */
        content__iendswith?: string;
        /** Only documents whose extracted text content contains this text, ignoring case. */
        content__icontains?: string;
        /** Only documents whose extracted text content equals this text, ignoring case. */
        content__iexact?: string;
        /** Deprecated: only documents with a custom field whose name or value contains this text, ignoring case. Prefer custom_field_query. */
        custom_fields__icontains?: string;
        /** Only documents that carry every one of these custom fields. */
        custom_fields__id__all?: Array<number>;
        /** Exclude documents that carry any of these custom fields. */
        custom_fields__id__none?: Array<number>;
        /** Only documents that carry at least one of these custom fields. */
        custom_fields__id__in?: Array<number>;
        /** When true, only documents with at least one custom field value; when false, only documents without any. */
        has_custom_fields?: boolean;
        /** JSON expression filtering on custom field values, for example ["due", "range", ["2024-08-01", "2024-09-01"]], ["customer", "exact", "bob"], ["foo", "exists", false] or ["OR", [["address", "isnull", true], ["address", "exact", ""]]]. Every field type supports exact, in, isnull and exists; string, URL and monetary fields add icontains, istartswith and iendswith; integer, float and date fields add gt, gte, lt, lte and range; document link fields add contains. At most 10 nesting levels and 20 atoms. */
        custom_field_query?: string;
        /**
         * Only documents owned by the user with this id that have been shared with other users or groups.
         * @exclusiveMinimum 0
         */
        shared_by__id?: number;
        /** Only documents whose original MIME type contains this text, ignoring case, for example application/pdf or image/. */
        mime_type?: string;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The document id. */
          id?: number;
          /** Correspondent id, or null. */
          correspondent?: number | null;
          /** Document type id, or null. */
          document_type?: number | null;
          /** Storage path id, or null. */
          storage_path?: number | null;
          /** The document title. */
          title?: string;
          /** Extracted text content of the latest version, possibly truncated when truncate_content is true. */
          content?: string;
          /** Ids of the tags assigned to the document. */
          tags?: Array<number>;
          /** Creation date as YYYY-MM-DD. */
          created?: string;
          /** Deprecated duplicate of created. */
          created_date?: string;
          /** ISO 8601 timestamp of the last modification. */
          modified?: string;
          /** ISO 8601 timestamp when the document was added. */
          added?: string;
          /** ISO 8601 timestamp when the document was moved to the trash, or null. */
          deleted_at?: string | null;
          /** Archive serial number (ASN), or null. */
          archive_serial_number?: number | null;
          /** File name of the original upload. */
          original_file_name?: string | null;
          /** Public file name of the archived PDF, or null when no archive version exists. */
          archived_file_name?: string | null;
          /** Other documents sharing the same checksum, only populated on single document reads. */
          duplicate_documents?: Array<{
            /** The duplicate document id. */
            id?: number;
            /** The duplicate document title. */
            title?: string;
            /** When the duplicate was trashed, or null. */
            deleted_at?: string | null;
            [key: string]: unknown;
          }>;
          /** Id of the owning user, or null when the object is unowned. */
          owner?: number | null;
          /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
          permissions?: {
            /** Users and groups holding this permission. */
            view?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            /** Users and groups holding this permission. */
            change?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Whether the connected user may modify this object. */
          user_can_change?: boolean;
          /** Whether the connected user owns the document and has shared it with others. */
          is_shared_by_requester?: boolean;
          /** Notes attached to the document. */
          notes?: Array<{
            /** The note id. */
            id?: number;
            /** The note text. */
            note?: string;
            /** ISO 8601 creation timestamp. */
            created?: string;
            /** The user who wrote the note. */
            user?: {
              /** The user id. */
              id?: number;
              /** The username. */
              username?: string;
              /** The first name. */
              first_name?: string;
              /** The last name. */
              last_name?: string;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          }>;
          /** Custom field values attached to the document. */
          custom_fields?: Array<{
            /** The custom field id. */
            field?: number;
            /** The value in the field's data type: string, number, boolean, ISO date, select option id, or an array of document ids for document links. Null clears the value. */
            value?: unknown;
            [key: string]: unknown;
          }>;
          /** Number of pages, or null when unknown. */
          page_count?: number | null;
          /** MIME type of the original file. */
          mime_type?: string;
          /** Id of the root document when this entry is a version, or null. */
          root_document?: number | null;
          /** File-level versions of the document. */
          versions?: Array<{
            /** The version's document id. */
            id?: number;
            /** ISO 8601 timestamp when the version was added. */
            added?: string;
            /** Optional label for the version. */
            version_label?: string | null;
            /** MD5 checksum of the version's original file. */
            checksum?: string | null;
            /** Whether this entry is the root (original) document. */
            is_root?: boolean;
            [key: string]: unknown;
          }>;
          /** Search result details, only present on full text search results. */
          __search_hit__?: {
            /** Relevance score relative to the other results. */
            score?: number;
            /** Excerpt of the content with matching terms wrapped in span tags. */
            highlights?: string;
            /** Zero-based rank of the result. */
            rank?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Per-object document counts across every matching document, only present when include_selection_data is true. */
        selection_data?: {
          /** Counts per correspondent. */
          selected_correspondents?: Array<{
            /** The object id. */
            id?: number;
            /** Number of matching documents that reference the object. */
            document_count?: number;
            [key: string]: unknown;
          }>;
          /** Counts per tag. */
          selected_tags?: Array<{
            /** The object id. */
            id?: number;
            /** Number of matching documents that reference the object. */
            document_count?: number;
            [key: string]: unknown;
          }>;
          /** Counts per document type. */
          selected_document_types?: Array<{
            /** The object id. */
            id?: number;
            /** Number of matching documents that reference the object. */
            document_count?: number;
            [key: string]: unknown;
          }>;
          /** Counts per storage path. */
          selected_storage_paths?: Array<{
            /** The object id. */
            id?: number;
            /** Number of matching documents that reference the object. */
            document_count?: number;
            [key: string]: unknown;
          }>;
          /** Counts per custom field. */
          selected_custom_fields?: Array<{
            /** The object id. */
            id?: number;
            /** Number of matching documents that reference the object. */
            document_count?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** Reserved by Paperless-ngx for spelling suggestions on search requests; currently always null. */
        corrected_query?: string | null;
        [key: string]: unknown;
      };
    };
    /** List Paperless-ngx user groups with pagination and name filters, ordered by name. Requires the view_group permission. */
    "paperless_ngx.list_groups": {
      input: {
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /**
         * Field to order by, prefixed with - for descending order. Only name is accepted; defaults to name.
         * @minLength 1
         */
        ordering?: string;
        /** Case-insensitive group name prefix. */
        name__istartswith?: string;
        /** Case-insensitive group name suffix. */
        name__iendswith?: string;
        /** Case-insensitive group name substring. */
        name__icontains?: string;
        /** Case-insensitive exact group name. */
        name__iexact?: string;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The group id. */
          id?: number;
          /** The group name. */
          name?: string;
          /** Permission codenames granted to the group. */
          permissions?: Array<string>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the log files available on the Paperless-ngx server (paperless, mail and celery when present). Requires admin (staff) access. */
    "paperless_ngx.list_logs": {
      input: Record<string, never>;
      output: {
        /** Log file keys that exist on the server. */
        logs: Array<string>;
      };
    };
    /** List the mail accounts Paperless-ngx fetches documents from, ordered by id. Only accounts the connected user owns, that are unowned, or that were shared with the user are visible. Passwords are returned as an asterisk placeholder. The endpoint supports no ordering or field filters beyond paging. */
    "paperless_ngx.list_mail_accounts": {
      input: {
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /** When true, return the full object permissions in the permissions field instead of only user_can_change. Defaults to false. */
        full_perms?: boolean;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The mail account id. */
          id?: number;
          /** The account name. */
          name?: string;
          /** IMAP server host. */
          imap_server?: string;
          /** IMAP port. */
          imap_port?: number | null;
          /** IMAP security: 1 none, 2 SSL, 3 STARTTLS. */
          imap_security?: number;
          /** IMAP username. */
          username?: string;
          /** Obfuscated placeholder; the real password is never returned. */
          password?: string;
          /** Character set used to decode mail. */
          character_set?: string;
          /** Whether password holds an OAuth token. */
          is_token?: boolean;
          /** Account type: 1 IMAP, 2 Gmail OAuth, 3 Outlook OAuth. */
          account_type?: number;
          /** OAuth token expiration, or null. */
          expiration?: string | null;
          /** Id of the owning user, or null when the object is unowned. */
          owner?: number | null;
          /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
          permissions?: {
            /** Users and groups holding this permission. */
            view?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            /** Users and groups holding this permission. */
            change?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Whether the connected user may modify this object. */
          user_can_change?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List mail rules ordered by their order field. Only rules the connected user owns, that are unowned, or that were shared with the user are visible. The endpoint supports no ordering or field filters beyond paging. */
    "paperless_ngx.list_mail_rules": {
      input: {
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /** When true, return the full object permissions in the permissions field instead of only user_can_change. Defaults to false. */
        full_perms?: boolean;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The mail rule id. */
          id?: number;
          /** The rule name. */
          name?: string;
          /** Id of the mail account the rule belongs to. */
          account?: number;
          /** Whether the rule is active. */
          enabled?: boolean;
          /** IMAP folder to scan. */
          folder?: string;
          /** Sender filter, or null. */
          filter_from?: string | null;
          /** Recipient filter, or null. */
          filter_to?: string | null;
          /** Subject filter, or null. */
          filter_subject?: string | null;
          /** Body filter, or null. */
          filter_body?: string | null;
          /** Attachment filename include pattern, or null. */
          filter_attachment_filename_include?: string | null;
          /** Attachment filename exclude pattern, or null. */
          filter_attachment_filename_exclude?: string | null;
          /** Maximum mail age in days, 0 for no limit. */
          maximum_age?: number;
          /** Post-consumption mail action: 1 delete, 2 move, 3 mark read, 4 flag, 5 tag. */
          action?: number;
          /** Folder or tag used by the action, or null. */
          action_parameter?: string | null;
          /** Title source: 1 subject, 2 attachment filename, 3 none. */
          assign_title_from?: number;
          /** Ids of tags assigned to consumed documents. */
          assign_tags?: Array<number>;
          /** Correspondent source: 1 nothing, 2 email, 3 name, 4 custom. */
          assign_correspondent_from?: number;
          /** Correspondent id used when assign_correspondent_from is 4, or null. */
          assign_correspondent?: number | null;
          /** Document type id assigned to consumed documents, or null. */
          assign_document_type?: number | null;
          /** Whether consumed documents are owned by the rule owner. */
          assign_owner_from_rule?: boolean;
          /** Evaluation order among rules. */
          order?: number;
          /** Attachment processing: 1 attachments only, 2 everything including inline. */
          attachment_type?: number;
          /** Consumption scope: 1 attachments only, 2 eml only, 3 everything. */
          consumption_scope?: number;
          /** PDF layout for mail bodies: 0 system default, 1 text then HTML, 2 HTML then text, 3 HTML only, 4 text only. */
          pdf_layout?: number;
          /** Whether later rules are skipped once this rule matches. */
          stop_processing?: boolean;
          /** Id of the owning user, or null when the object is unowned. */
          owner?: number | null;
          /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
          permissions?: {
            /** Users and groups holding this permission. */
            view?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            /** Users and groups holding this permission. */
            change?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Whether the connected user may modify this object. */
          user_can_change?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the mails that mail rules have already processed, newest processed first by default, optionally filtered by rule or status. Only records the connected user owns, that are unowned, or that were shared with the user are returned. */
    "paperless_ngx.list_processed_mail": {
      input: {
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /**
         * Field to order by, prefixed with - for descending order: id, rule, folder, uid, subject, received, processed, status, error or owner. Defaults to -processed.
         * @minLength 1
         */
        ordering?: string;
        /**
         * Only return mails processed by this mail rule id.
         * @exclusiveMinimum 0
         */
        rule?: number;
        /**
         * Only return records with exactly this status, normally SUCCESS or FAILED.
         * @minLength 1
         */
        status?: string;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The processed mail record id. */
          id?: number;
          /** Id of the owning user, or null when unowned. */
          owner?: number | null;
          /** Id of the mail rule that processed the mail. */
          rule?: number;
          /** IMAP folder the mail was found in. */
          folder?: string;
          /** IMAP UID of the mail within its folder. */
          uid?: string;
          /** Mail subject. */
          subject?: string;
          /** ISO 8601 timestamp when the mail was received. */
          received?: string;
          /** ISO 8601 timestamp when Paperless-ngx processed the mail. */
          processed?: string;
          /** Processing outcome: SUCCESS or FAILED. */
          status?: string;
          /** Error message when processing failed, or null. */
          error?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List saved document views visible to the connected user with their filter rules and display settings. Only ordering by name and pagination are supported; there are no field filters. Requires the view_savedview permission. */
    "paperless_ngx.list_saved_views": {
      input: {
        /** When true, return the full object permissions in the permissions field instead of only user_can_change. Defaults to false. */
        full_perms?: boolean;
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /**
         * Field to order by, prefixed with - for descending order, for example -name. Accepted fields: name.
         * @minLength 1
         */
        ordering?: string;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The saved view id. */
          id?: number;
          /** The saved view name. */
          name?: string;
          /** Icon name shown next to the view, or null. */
          icon?: string | null;
          /** Field the view sorts by. */
          sort_field?: string | null;
          /** Whether the sort is descending. */
          sort_reverse?: boolean;
          /** Filter rules that define the view. */
          filter_rules?: Array<{
            /** Numeric filter rule type. */
            rule_type?: number;
            /** Rule value, or null. */
            value?: string | null;
            [key: string]: unknown;
          }>;
          /** Page size used when displaying the view, or null. */
          page_size?: number | null;
          /** Display mode: table, smallCards or largeCards. */
          display_mode?: string | null;
          /** Fields shown in the view. */
          display_fields?: Array<string> | null;
          /** Id of the owning user, or null when the object is unowned. */
          owner?: number | null;
          /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
          permissions?: {
            /** Users and groups holding this permission. */
            view?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            /** Users and groups holding this permission. */
            change?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Whether the connected user may modify this object. */
          user_can_change?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List share link bundles visible to the connected user, filterable by status, contained documents and creation or expiration time. Each result carries share_url and the build status. Requires the view_sharelinkbundle permission. */
    "paperless_ngx.list_share_link_bundles": {
      input: {
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /**
         * Field to order by, prefixed with - for descending order. Accepted fields: created, expiration, status.
         * @minLength 1
         */
        ordering?: string;
        /** Only bundles in this status. Build status of the zip archive: pending (queued), processing (being built), ready (downloadable) or failed (see last_error). */
        status?: "pending" | "processing" | "ready" | "failed";
        /** Only bundles containing at least one of these document ids. */
        documents?: Array<number>;
        /** Only entries whose creation time falls in this year. */
        created__year?: number;
        /**
         * Only entries whose creation time falls in this month (1-12).
         * @minimum 1
         * @maximum 12
         */
        created__month?: number;
        /**
         * Only entries whose creation time falls on this day of month (1-31).
         * @minimum 1
         * @maximum 31
         */
        created__day?: number;
        /**
         * Only entries whose creation time is after this ISO 8601 timestamp.
         * @format date-time
         */
        created__gt?: string;
        /**
         * Only entries whose creation time is at or after this ISO 8601 timestamp.
         * @format date-time
         */
        created__gte?: string;
        /**
         * Only entries whose creation time is before this ISO 8601 timestamp.
         * @format date-time
         */
        created__lt?: string;
        /**
         * Only entries whose creation time is at or before this ISO 8601 timestamp.
         * @format date-time
         */
        created__lte?: string;
        /**
         * Only entries whose creation time date is after this YYYY-MM-DD date.
         * @format date
         */
        created__date__gt?: string;
        /**
         * Only entries whose creation time date is on or after this YYYY-MM-DD date.
         * @format date
         */
        created__date__gte?: string;
        /**
         * Only entries whose creation time date is before this YYYY-MM-DD date.
         * @format date
         */
        created__date__lt?: string;
        /**
         * Only entries whose creation time date is on or before this YYYY-MM-DD date.
         * @format date
         */
        created__date__lte?: string;
        /** Only entries whose expiration time falls in this year. */
        expiration__year?: number;
        /**
         * Only entries whose expiration time falls in this month (1-12).
         * @minimum 1
         * @maximum 12
         */
        expiration__month?: number;
        /**
         * Only entries whose expiration time falls on this day of month (1-31).
         * @minimum 1
         * @maximum 31
         */
        expiration__day?: number;
        /**
         * Only entries whose expiration time is after this ISO 8601 timestamp.
         * @format date-time
         */
        expiration__gt?: string;
        /**
         * Only entries whose expiration time is at or after this ISO 8601 timestamp.
         * @format date-time
         */
        expiration__gte?: string;
        /**
         * Only entries whose expiration time is before this ISO 8601 timestamp.
         * @format date-time
         */
        expiration__lt?: string;
        /**
         * Only entries whose expiration time is at or before this ISO 8601 timestamp.
         * @format date-time
         */
        expiration__lte?: string;
        /**
         * Only entries whose expiration time date is after this YYYY-MM-DD date.
         * @format date
         */
        expiration__date__gt?: string;
        /**
         * Only entries whose expiration time date is on or after this YYYY-MM-DD date.
         * @format date
         */
        expiration__date__gte?: string;
        /**
         * Only entries whose expiration time date is before this YYYY-MM-DD date.
         * @format date
         */
        expiration__date__lt?: string;
        /**
         * Only entries whose expiration time date is on or before this YYYY-MM-DD date.
         * @format date
         */
        expiration__date__lte?: string;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The bundle id. */
          id?: number;
          /** ISO 8601 creation timestamp. */
          created?: string;
          /** ISO 8601 expiration timestamp, or null when the bundle never expires. */
          expiration?: string | null;
          /** Slug that forms the public URL <instance>/share/<slug>. */
          slug?: string;
          /** Which file version is packed for each document: archive or original. */
          file_version?: string;
          /** Build status of the zip archive: pending (queued), processing (being built), ready (downloadable) or failed (see last_error). */
          status?: string;
          /** Size of the built zip archive in bytes, or null until built. */
          size_bytes?: number | null;
          /** Details of the last failed build, or null when the build succeeded. */
          last_error?: unknown;
          /** ISO 8601 timestamp of the last successful build, or null. */
          built_at?: string | null;
          /** Ids of the documents in the bundle. */
          documents?: Array<number>;
          /** Number of documents in the bundle. */
          document_count?: number;
          /** Public URL of the share, derived by the connector as <instance>/share/<slug>. Anyone holding it can download the file without logging in until expiration. */
          share_url?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List share links visible to the connected user (own links plus links shared with them), with optional creation and expiration time filters. Each result carries share_url, the public download URL. Requires the view_sharelink permission. */
    "paperless_ngx.list_share_links": {
      input: {
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /**
         * Field to order by, prefixed with - for descending order. Accepted fields: created, expiration, document.
         * @minLength 1
         */
        ordering?: string;
        /** Only entries whose creation time falls in this year. */
        created__year?: number;
        /**
         * Only entries whose creation time falls in this month (1-12).
         * @minimum 1
         * @maximum 12
         */
        created__month?: number;
        /**
         * Only entries whose creation time falls on this day of month (1-31).
         * @minimum 1
         * @maximum 31
         */
        created__day?: number;
        /**
         * Only entries whose creation time is after this ISO 8601 timestamp.
         * @format date-time
         */
        created__gt?: string;
        /**
         * Only entries whose creation time is at or after this ISO 8601 timestamp.
         * @format date-time
         */
        created__gte?: string;
        /**
         * Only entries whose creation time is before this ISO 8601 timestamp.
         * @format date-time
         */
        created__lt?: string;
        /**
         * Only entries whose creation time is at or before this ISO 8601 timestamp.
         * @format date-time
         */
        created__lte?: string;
        /**
         * Only entries whose creation time date is after this YYYY-MM-DD date.
         * @format date
         */
        created__date__gt?: string;
        /**
         * Only entries whose creation time date is on or after this YYYY-MM-DD date.
         * @format date
         */
        created__date__gte?: string;
        /**
         * Only entries whose creation time date is before this YYYY-MM-DD date.
         * @format date
         */
        created__date__lt?: string;
        /**
         * Only entries whose creation time date is on or before this YYYY-MM-DD date.
         * @format date
         */
        created__date__lte?: string;
        /** Only entries whose expiration time falls in this year. */
        expiration__year?: number;
        /**
         * Only entries whose expiration time falls in this month (1-12).
         * @minimum 1
         * @maximum 12
         */
        expiration__month?: number;
        /**
         * Only entries whose expiration time falls on this day of month (1-31).
         * @minimum 1
         * @maximum 31
         */
        expiration__day?: number;
        /**
         * Only entries whose expiration time is after this ISO 8601 timestamp.
         * @format date-time
         */
        expiration__gt?: string;
        /**
         * Only entries whose expiration time is at or after this ISO 8601 timestamp.
         * @format date-time
         */
        expiration__gte?: string;
        /**
         * Only entries whose expiration time is before this ISO 8601 timestamp.
         * @format date-time
         */
        expiration__lt?: string;
        /**
         * Only entries whose expiration time is at or before this ISO 8601 timestamp.
         * @format date-time
         */
        expiration__lte?: string;
        /**
         * Only entries whose expiration time date is after this YYYY-MM-DD date.
         * @format date
         */
        expiration__date__gt?: string;
        /**
         * Only entries whose expiration time date is on or after this YYYY-MM-DD date.
         * @format date
         */
        expiration__date__gte?: string;
        /**
         * Only entries whose expiration time date is before this YYYY-MM-DD date.
         * @format date
         */
        expiration__date__lt?: string;
        /**
         * Only entries whose expiration time date is on or before this YYYY-MM-DD date.
         * @format date
         */
        expiration__date__lte?: string;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The share link id. */
          id?: number;
          /** ISO 8601 creation timestamp. */
          created?: string;
          /** ISO 8601 expiration timestamp, or null when it never expires. */
          expiration?: string | null;
          /** Slug that forms the public URL <instance>/share/<slug>. */
          slug?: string;
          /** Id of the shared document. */
          document?: number;
          /** Which file is served: archive or original. */
          file_version?: string;
          /** Public URL of the share, derived by the connector as <instance>/share/<slug>. Anyone holding it can download the file without logging in until expiration. */
          share_url?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List storage paths visible to the connected user with their document counts. Supports id and case-insensitive name and path filters, ordering and pagination. Requires the view_storagepath permission. */
    "paperless_ngx.list_storage_paths": {
      input: {
        /**
         * Return only the object with this id.
         * @exclusiveMinimum 0
         */
        id?: number;
        /** Return only objects whose id is in this list. */
        id__in?: Array<number>;
        /** Case-insensitive substring match on the name. */
        name__icontains?: string;
        /** Case-insensitive exact match on the name. */
        name__iexact?: string;
        /** Case-insensitive prefix match on the name. */
        name__istartswith?: string;
        /** Case-insensitive suffix match on the name. */
        name__iendswith?: string;
        /** Case-insensitive substring match on the path template. */
        path__icontains?: string;
        /** Case-insensitive exact match on the path template. */
        path__iexact?: string;
        /** Case-insensitive prefix match on the path template. */
        path__istartswith?: string;
        /** Case-insensitive suffix match on the path template. */
        path__iendswith?: string;
        /** When true, return the full object permissions in the permissions field instead of only user_can_change. Defaults to false. */
        full_perms?: boolean;
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /**
         * Field to order by, prefixed with - for descending order, for example -name. Accepted fields: name, path, matching_algorithm, match, document_count.
         * @minLength 1
         */
        ordering?: string;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The object id. */
          id?: number;
          /** URL-safe slug derived from the name. */
          slug?: string;
          /** The object name. */
          name?: string;
          /** Text or pattern used by the matching algorithm. */
          match?: string;
          /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
          matching_algorithm?: number;
          /** Whether matching ignores case. */
          is_insensitive?: boolean;
          /** Number of documents visible to the connected user that use this object. */
          document_count?: number;
          /** Id of the owning user, or null when the object is unowned. */
          owner?: number | null;
          /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
          permissions?: {
            /** Users and groups holding this permission. */
            view?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            /** Users and groups holding this permission. */
            change?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Whether the connected user may modify this object. */
          user_can_change?: boolean;
          /** Filename template used to place documents under the media directory. */
          path?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List tags visible to the connected user with their document counts and nested children. Supports id and case-insensitive name filters, the is_root flag for top-level tags only, ordering and pagination. Requires the view_tag permission. */
    "paperless_ngx.list_tags": {
      input: {
        /**
         * Return only the object with this id.
         * @exclusiveMinimum 0
         */
        id?: number;
        /** Return only objects whose id is in this list. */
        id__in?: Array<number>;
        /** Case-insensitive substring match on the name. */
        name__icontains?: string;
        /** Case-insensitive exact match on the name. */
        name__iexact?: string;
        /** Case-insensitive prefix match on the name. */
        name__istartswith?: string;
        /** Case-insensitive suffix match on the name. */
        name__iendswith?: string;
        /** When true, return only root tags without a parent; when false, only nested tags. Omit for all tags. */
        is_root?: boolean;
        /** When true, return the full object permissions in the permissions field instead of only user_can_change. Defaults to false. */
        full_perms?: boolean;
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /**
         * Field to order by, prefixed with - for descending order, for example -name. Accepted fields: name, color, matching_algorithm, match, document_count.
         * @minLength 1
         */
        ordering?: string;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The object id. */
          id?: number;
          /** URL-safe slug derived from the name. */
          slug?: string;
          /** The object name. */
          name?: string;
          /** Text or pattern used by the matching algorithm. */
          match?: string;
          /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
          matching_algorithm?: number;
          /** Whether matching ignores case. */
          is_insensitive?: boolean;
          /** Number of documents visible to the connected user that use this object. */
          document_count?: number;
          /** Id of the owning user, or null when the object is unowned. */
          owner?: number | null;
          /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
          permissions?: {
            /** Users and groups holding this permission. */
            view?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            /** Users and groups holding this permission. */
            change?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Whether the connected user may modify this object. */
          user_can_change?: boolean;
          /** Hex color such as #a6cee3. */
          color?: string;
          /** Black or white text color chosen for contrast against color. */
          text_color?: string;
          /** Whether new documents automatically receive this tag. */
          is_inbox_tag?: boolean;
          /** Id of the parent tag, or null for a root tag. */
          parent?: number | null;
          /** Child tags, each with the same shape as a tag. */
          children?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Number of tags shown when nested children are expanded, including the matched tags' descendants; equal to count when no matched tag has children. */
        display_count?: number;
        [key: string]: unknown;
      };
    };
    /** List Paperless-ngx background tasks (document consumption, classifier training, sanity checks, mail fetches and other jobs) with pagination and filters. Non-staff users see their own tasks plus unowned system tasks; staff users see every task. Requires the view_paperlesstask permission. */
    "paperless_ngx.list_tasks": {
      input: {
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /**
         * Field to order by, prefixed with - for descending order: date_created, date_done, status, task_type, duration_seconds or wait_time_seconds. Defaults to -date_created.
         * @minLength 1
         */
        ordering?: string;
        /**
         * Celery task UUID to filter by, as returned by upload_document or run_task. Matches at most one task.
         * @minLength 1
         */
        task_id?: string;
        /** Case-insensitive text matched against the input file name and against the human readable task type and trigger source labels. */
        name?: string;
        /** Case-insensitive text matched against result_data.reason and result_data.error_message. A numeric value also matches result_data.document_id and result_data.duplicate_of, and the word duplicate matches every task rejected as a duplicate. */
        result?: string;
        /** Task type: consume_file, train_classifier, sanity_check, index_optimize, mail_fetch, llm_index, empty_trash, check_workflows, bulk_update, reprocess_document, build_share_link, bulk_delete or apply_ai_suggestions. One value per call. */
        task_type?: "consume_file" | "train_classifier" | "sanity_check" | "index_optimize" | "mail_fetch" | "llm_index" | "empty_trash" | "check_workflows" | "bulk_update" | "reprocess_document" | "build_share_link" | "bulk_delete" | "apply_ai_suggestions";
        /** What started the task: scheduled (Celery beat), web_ui, api_upload, folder_consume, email_consume, system or manual (started through run_task). One value per call. */
        trigger_source?: "scheduled" | "web_ui" | "api_upload" | "folder_consume" | "email_consume" | "system" | "manual";
        /** When true, only tasks already acknowledged (dismissed); when false, only unacknowledged tasks. */
        acknowledged?: boolean;
        /**
         * Id of the user that owns the task. Non-staff users only ever see their own tasks and unowned system tasks; staff users see every task.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /**
         * ISO 8601 date or datetime; only tasks created at or after this instant.
         * @minLength 1
         */
        date_created_after?: string;
        /**
         * ISO 8601 date or datetime; only tasks created at or before this instant.
         * @minLength 1
         */
        date_created_before?: string;
        /** Task status: pending, started, success, failure or revoked. Tasks move pending -> started -> success or failure, or pending -> revoked when cancelled before starting. One value per call. */
        status?: "pending" | "started" | "success" | "failure" | "revoked";
        /** When true, only finished tasks (success, failure or revoked); when false, only pending and started tasks. */
        is_complete?: boolean;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The task row id. */
          id?: number;
          /** The Celery task UUID. */
          task_id?: string;
          /** Task type such as consume_file or train_classifier. */
          task_type?: string;
          /** Human readable task type. */
          task_type_display?: string;
          /** What triggered the task, such as api_upload or scheduled. */
          trigger_source?: string;
          /** Human readable trigger source. */
          trigger_source_display?: string;
          /** Task status: pending, started, success, failure or revoked. */
          status?: string;
          /** Human readable status. */
          status_display?: string;
          /** ISO 8601 timestamp when the task was created. */
          date_created?: string;
          /** ISO 8601 timestamp when the task started, or null. */
          date_started?: string | null;
          /** ISO 8601 timestamp when the task finished, or null. */
          date_done?: string | null;
          /** Run time in seconds, or null while running. */
          duration_seconds?: number | null;
          /** Queue wait time in seconds, or null. */
          wait_time_seconds?: number | null;
          /** Task input such as the uploaded filename. */
          input_data?: Record<string, unknown> | null;
          /** Structured task result, or null while the task has not finished. Consume tasks report the created document in document_id, a rejected duplicate in duplicate_of and the rejection text in reason; failures carry error_message. */
          result_data?: {
            /** Id of the document created by a successful consume task. */
            document_id?: number;
            /** Id of the existing document when the consumed file was rejected as a duplicate. */
            duplicate_of?: number;
            /** Human readable reason when the file was not consumed. */
            reason?: string;
            /** Human readable result message. */
            message?: string;
            /** Error message when the task failed. */
            error_message?: string;
            [key: string]: unknown;
          } | null;
          /** Ids of documents related to the task. */
          related_document_ids?: Array<number>;
          /** Whether the task has been acknowledged (dismissed) in the UI. */
          acknowledged?: boolean;
          /** Id of the user who owns the task, or null for system tasks. */
          owner?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the documents currently in the trash (soft deleted), newest created first, with the same fields as a regular document plus deleted_at. Superusers see every trashed document; other users only see trashed documents they own or that are unowned, explicit shares do not count. This endpoint supports pagination only, no filters or ordering. */
    "paperless_ngx.list_trash": {
      input: {
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /** When true, return the full object permissions in the permissions field instead of only user_can_change. Defaults to false. */
        full_perms?: boolean;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The document id. */
          id?: number;
          /** Correspondent id, or null. */
          correspondent?: number | null;
          /** Document type id, or null. */
          document_type?: number | null;
          /** Storage path id, or null. */
          storage_path?: number | null;
          /** The document title. */
          title?: string;
          /** Extracted text content of the latest version, possibly truncated when truncate_content is true. */
          content?: string;
          /** Ids of the tags assigned to the document. */
          tags?: Array<number>;
          /** Creation date as YYYY-MM-DD. */
          created?: string;
          /** Deprecated duplicate of created. */
          created_date?: string;
          /** ISO 8601 timestamp of the last modification. */
          modified?: string;
          /** ISO 8601 timestamp when the document was added. */
          added?: string;
          /** ISO 8601 timestamp when the document was moved to the trash, or null. */
          deleted_at?: string | null;
          /** Archive serial number (ASN), or null. */
          archive_serial_number?: number | null;
          /** File name of the original upload. */
          original_file_name?: string | null;
          /** Public file name of the archived PDF, or null when no archive version exists. */
          archived_file_name?: string | null;
          /** Other documents sharing the same checksum, only populated on single document reads. */
          duplicate_documents?: Array<{
            /** The duplicate document id. */
            id?: number;
            /** The duplicate document title. */
            title?: string;
            /** When the duplicate was trashed, or null. */
            deleted_at?: string | null;
            [key: string]: unknown;
          }>;
          /** Id of the owning user, or null when the object is unowned. */
          owner?: number | null;
          /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
          permissions?: {
            /** Users and groups holding this permission. */
            view?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            /** Users and groups holding this permission. */
            change?: {
              /** User ids. */
              users?: Array<number>;
              /** Group ids. */
              groups?: Array<number>;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Whether the connected user may modify this object. */
          user_can_change?: boolean;
          /** Whether the connected user owns the document and has shared it with others. */
          is_shared_by_requester?: boolean;
          /** Notes attached to the document. */
          notes?: Array<{
            /** The note id. */
            id?: number;
            /** The note text. */
            note?: string;
            /** ISO 8601 creation timestamp. */
            created?: string;
            /** The user who wrote the note. */
            user?: {
              /** The user id. */
              id?: number;
              /** The username. */
              username?: string;
              /** The first name. */
              first_name?: string;
              /** The last name. */
              last_name?: string;
              [key: string]: unknown;
            } | null;
            [key: string]: unknown;
          }>;
          /** Custom field values attached to the document. */
          custom_fields?: Array<{
            /** The custom field id. */
            field?: number;
            /** The value in the field's data type: string, number, boolean, ISO date, select option id, or an array of document ids for document links. Null clears the value. */
            value?: unknown;
            [key: string]: unknown;
          }>;
          /** Number of pages, or null when unknown. */
          page_count?: number | null;
          /** MIME type of the original file. */
          mime_type?: string;
          /** Id of the root document when this entry is a version, or null. */
          root_document?: number | null;
          /** File-level versions of the document. */
          versions?: Array<{
            /** The version's document id. */
            id?: number;
            /** ISO 8601 timestamp when the version was added. */
            added?: string;
            /** Optional label for the version. */
            version_label?: string | null;
            /** MD5 checksum of the version's original file. */
            checksum?: string | null;
            /** Whether this entry is the root (original) document. */
            is_root?: boolean;
            [key: string]: unknown;
          }>;
          /** Search result details, only present on full text search results. */
          __search_hit__?: {
            /** Relevance score relative to the other results. */
            score?: number;
            /** Excerpt of the content with matching terms wrapped in span tags. */
            highlights?: string;
            /** Zero-based rank of the result. */
            rank?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Paperless-ngx user accounts with pagination and username filters, ordered by username. The built-in consumer and AnonymousUser accounts are never listed. Requires the view_user permission. */
    "paperless_ngx.list_users": {
      input: {
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /**
         * Field to order by, prefixed with - for descending order. Only username is accepted; defaults to username.
         * @minLength 1
         */
        ordering?: string;
        /** Case-insensitive username prefix. */
        username__istartswith?: string;
        /** Case-insensitive username suffix. */
        username__iendswith?: string;
        /** Case-insensitive username substring. */
        username__icontains?: string;
        /** Case-insensitive exact username. */
        username__iexact?: string;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The user id. */
          id?: number;
          /** The username. */
          username?: string;
          /** The email address. */
          email?: string;
          /** Obfuscated placeholder; the real password is never returned. */
          password?: string;
          /** The first name. */
          first_name?: string;
          /** The last name. */
          last_name?: string;
          /** ISO 8601 timestamp when the user was created. */
          date_joined?: string;
          /** Whether the user may access the admin site. */
          is_staff?: boolean;
          /** Whether the account is active. */
          is_active?: boolean;
          /** Whether the user is a superuser. */
          is_superuser?: boolean;
          /** Ids of the groups the user belongs to. */
          groups?: Array<number>;
          /** Permission codenames granted directly to the user. */
          user_permissions?: Array<string>;
          /** Permission codenames inherited from groups. */
          inherited_permissions?: Array<string>;
          /** Whether TOTP multi-factor authentication is active. */
          is_mfa_enabled?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List workflow actions across all workflows. The endpoint supports only pagination; it has no filters or ordering options. Requires the view_workflowaction permission. */
    "paperless_ngx.list_workflow_actions": {
      input: {
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The action id. */
          id?: number;
          /** Action type: 1 assignment, 2 removal, 3 email (email is required), 4 webhook (webhook is required), 5 password removal (passwords is required), 6 move to trash, 7 remote OCR (the workflow needs a consumption started trigger), 8 apply AI suggestions (ai_suggestion_fields is required and the workflow needs a trigger other than consumption started). Defaults to 1. */
          type?: number;
          /** Title template, or null. */
          assign_title?: string | null;
          /** Ids of tags added to the document. */
          assign_tags?: Array<number>;
          /** Id of the assigned correspondent, or null. */
          assign_correspondent?: number | null;
          /** Id of the assigned document type, or null. */
          assign_document_type?: number | null;
          /** Id of the assigned storage path, or null. */
          assign_storage_path?: number | null;
          /** Id of the assigned owner, or null. */
          assign_owner?: number | null;
          /** Ids of users granted view permission. */
          assign_view_users?: Array<number>;
          /** Ids of groups granted view permission. */
          assign_view_groups?: Array<number>;
          /** Ids of users granted change permission. */
          assign_change_users?: Array<number>;
          /** Ids of groups granted change permission. */
          assign_change_groups?: Array<number>;
          /** Ids of custom fields attached to the document. */
          assign_custom_fields?: Array<number>;
          /** Custom field values keyed by custom field id, or null. */
          assign_custom_fields_values?: Record<string, unknown> | null;
          /** Whether every tag is removed. */
          remove_all_tags?: boolean;
          /** Ids of tags removed. */
          remove_tags?: Array<number>;
          /** Whether the correspondent is cleared. */
          remove_all_correspondents?: boolean;
          /** Ids of correspondents cleared when assigned. */
          remove_correspondents?: Array<number>;
          /** Whether the document type is cleared. */
          remove_all_document_types?: boolean;
          /** Ids of document types cleared when assigned. */
          remove_document_types?: Array<number>;
          /** Whether the storage path is cleared. */
          remove_all_storage_paths?: boolean;
          /** Ids of storage paths cleared when assigned. */
          remove_storage_paths?: Array<number>;
          /** Ids of custom fields detached. */
          remove_custom_fields?: Array<number>;
          /** Whether every custom field is detached. */
          remove_all_custom_fields?: boolean;
          /** Whether the owner is cleared. */
          remove_all_owners?: boolean;
          /** Ids of users cleared as owner. */
          remove_owners?: Array<number>;
          /** Whether all object permissions are removed. */
          remove_all_permissions?: boolean;
          /** Ids of users whose view permission is removed. */
          remove_view_users?: Array<number>;
          /** Ids of groups whose view permission is removed. */
          remove_view_groups?: Array<number>;
          /** Ids of users whose change permission is removed. */
          remove_change_users?: Array<number>;
          /** Ids of groups whose change permission is removed. */
          remove_change_groups?: Array<number>;
          /** Email settings of an email action. */
          email?: {
            /** The email settings id. */
            id?: number;
            /** Email subject template. */
            subject?: string;
            /** Email body template. */
            body?: string;
            /** Comma separated recipient email addresses. */
            to?: string;
            /** Whether the document file is attached. */
            include_document?: boolean;
            [key: string]: unknown;
          } | null;
          /** Webhook settings of a webhook action. */
          webhook?: {
            /** The webhook settings id. */
            id?: number;
            /** Destination URL of the webhook. */
            url?: string;
            /** Whether params are sent instead of body. */
            use_params?: boolean;
            /** Whether params are sent as JSON. */
            as_json?: boolean;
            /** Parameters sent with the webhook, or null. */
            params?: Record<string, unknown> | null;
            /** Raw request body, or null. */
            body?: string | null;
            /** HTTP headers sent with the webhook request, keyed by header name, or null. They may carry secrets such as an Authorization value and are redacted from connector logs. */
            headers?: Record<string, unknown> | null;
            /** Whether the document file is attached. */
            include_document?: boolean;
            [key: string]: unknown;
          } | null;
          /** Passwords tried by password removal actions, or null. Redacted from connector logs. */
          passwords?: Array<string> | null;
          /** AI-suggested fields applied by the action, or null. */
          ai_suggestion_fields?: Array<string> | null;
          /** Whether suggested objects that do not exist are created. */
          ai_create_missing?: boolean;
          /** Whether existing field values are overwritten. */
          ai_overwrite_existing?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List workflow triggers across all workflows. The endpoint supports only pagination; it has no filters or ordering options. Requires the view_workflowtrigger permission. */
    "paperless_ngx.list_workflow_triggers": {
      input: {
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The trigger id. */
          id?: number;
          /** Trigger type: 1 consumption started (runs before the document is stored and requires filter_filename, filter_path or filter_mailrule), 2 document added, 3 document updated, 4 scheduled (fires relative to the date field selected by schedule_date_field). */
          type?: number;
          /** Document sources the trigger reacts to. */
          sources?: Array<number>;
          /** Consumption path pattern, or null. */
          filter_path?: string | null;
          /** File name pattern, or null. */
          filter_filename?: string | null;
          /** Id of the required mail rule, or null. */
          filter_mailrule?: number | null;
          /** Matching algorithm applied to the document content: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word. Defaults to 0. */
          matching_algorithm?: number;
          /** Text or pattern used by the matching algorithm. */
          match?: string;
          /** Whether content matching ignores case. */
          is_insensitive?: boolean;
          /** Ids of tags the document must carry at least one of. */
          filter_has_tags?: Array<number>;
          /** Ids of tags the document must carry all of. */
          filter_has_all_tags?: Array<number>;
          /** Ids of tags the document must not carry. */
          filter_has_not_tags?: Array<number>;
          /** JSON-encoded custom field query expression, or null. */
          filter_custom_field_query?: string | null;
          /** Ids of correspondents the document must have one of. */
          filter_has_any_correspondents?: Array<number>;
          /** Ids of correspondents the document must not have. */
          filter_has_not_correspondents?: Array<number>;
          /** Ids of document types the document must have one of. */
          filter_has_any_document_types?: Array<number>;
          /** Ids of document types the document must not have. */
          filter_has_not_document_types?: Array<number>;
          /** Ids of storage paths the document must use one of. */
          filter_has_any_storage_paths?: Array<number>;
          /** Ids of storage paths the document must not use. */
          filter_has_not_storage_paths?: Array<number>;
          /** Id of the required correspondent, or null. */
          filter_has_correspondent?: number | null;
          /** Id of the required document type, or null. */
          filter_has_document_type?: number | null;
          /** Id of the required storage path, or null. */
          filter_has_storage_path?: number | null;
          /** Day offset of a scheduled trigger from its date field. */
          schedule_offset_days?: number;
          /** Whether a scheduled trigger repeats. */
          schedule_is_recurring?: boolean;
          /** Days between recurring scheduled runs. */
          schedule_recurring_interval_days?: number;
          /** Date field the scheduled trigger is measured from: added, created, modified or custom_field (then schedule_date_custom_field is required). Defaults to added. */
          schedule_date_field?: string;
          /** Id of the date custom field used by the schedule, or null. */
          schedule_date_custom_field?: number | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List workflows with their nested triggers and actions, ordered by order. The endpoint supports only pagination; it has no filters or ordering options. Requires the view_workflow permission. */
    "paperless_ngx.list_workflows": {
      input: {
        /**
         * One-based page number. Defaults to 1.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of results per page. Defaults to 25; the upstream maximum is 100000.
         * @minimum 1
         * @maximum 100000
         */
        page_size?: number;
        /** Additional documented query parameters to append verbatim, keyed by parameter name, for less common filters such as name__istartswith or created__year. Arrays are joined with commas and booleans are sent as true/false. */
        additional_filters?: Record<string, string | number | boolean>;
      };
      output: {
        /**
         * Total number of matching resources across all pages.
         * @minimum 0
         */
        count: number;
        /** Absolute URL of the next page, or null on the last page. */
        next: string | null;
        /** Absolute URL of the previous page, or null on the first page. */
        previous: string | null;
        /** The resources on this page. */
        results: Array<{
          /** The workflow id. */
          id?: number;
          /** The workflow name. */
          name?: string;
          /** Evaluation order among workflows. */
          order?: number;
          /** Whether the workflow is active. */
          enabled?: boolean;
          /** Triggers that start the workflow. */
          triggers?: Array<{
            /** The trigger id. */
            id?: number;
            /** Trigger type: 1 consumption started (runs before the document is stored and requires filter_filename, filter_path or filter_mailrule), 2 document added, 3 document updated, 4 scheduled (fires relative to the date field selected by schedule_date_field). */
            type?: number;
            /** Document sources the trigger reacts to. */
            sources?: Array<number>;
            /** Consumption path pattern, or null. */
            filter_path?: string | null;
            /** File name pattern, or null. */
            filter_filename?: string | null;
            /** Id of the required mail rule, or null. */
            filter_mailrule?: number | null;
            /** Matching algorithm applied to the document content: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word. Defaults to 0. */
            matching_algorithm?: number;
            /** Text or pattern used by the matching algorithm. */
            match?: string;
            /** Whether content matching ignores case. */
            is_insensitive?: boolean;
            /** Ids of tags the document must carry at least one of. */
            filter_has_tags?: Array<number>;
            /** Ids of tags the document must carry all of. */
            filter_has_all_tags?: Array<number>;
            /** Ids of tags the document must not carry. */
            filter_has_not_tags?: Array<number>;
            /** JSON-encoded custom field query expression, or null. */
            filter_custom_field_query?: string | null;
            /** Ids of correspondents the document must have one of. */
            filter_has_any_correspondents?: Array<number>;
            /** Ids of correspondents the document must not have. */
            filter_has_not_correspondents?: Array<number>;
            /** Ids of document types the document must have one of. */
            filter_has_any_document_types?: Array<number>;
            /** Ids of document types the document must not have. */
            filter_has_not_document_types?: Array<number>;
            /** Ids of storage paths the document must use one of. */
            filter_has_any_storage_paths?: Array<number>;
            /** Ids of storage paths the document must not use. */
            filter_has_not_storage_paths?: Array<number>;
            /** Id of the required correspondent, or null. */
            filter_has_correspondent?: number | null;
            /** Id of the required document type, or null. */
            filter_has_document_type?: number | null;
            /** Id of the required storage path, or null. */
            filter_has_storage_path?: number | null;
            /** Day offset of a scheduled trigger from its date field. */
            schedule_offset_days?: number;
            /** Whether a scheduled trigger repeats. */
            schedule_is_recurring?: boolean;
            /** Days between recurring scheduled runs. */
            schedule_recurring_interval_days?: number;
            /** Date field the scheduled trigger is measured from: added, created, modified or custom_field (then schedule_date_custom_field is required). Defaults to added. */
            schedule_date_field?: string;
            /** Id of the date custom field used by the schedule, or null. */
            schedule_date_custom_field?: number | null;
            [key: string]: unknown;
          }>;
          /** Actions the workflow performs, in execution order. */
          actions?: Array<{
            /** The action id. */
            id?: number;
            /** Action type: 1 assignment, 2 removal, 3 email (email is required), 4 webhook (webhook is required), 5 password removal (passwords is required), 6 move to trash, 7 remote OCR (the workflow needs a consumption started trigger), 8 apply AI suggestions (ai_suggestion_fields is required and the workflow needs a trigger other than consumption started). Defaults to 1. */
            type?: number;
            /** Title template, or null. */
            assign_title?: string | null;
            /** Ids of tags added to the document. */
            assign_tags?: Array<number>;
            /** Id of the assigned correspondent, or null. */
            assign_correspondent?: number | null;
            /** Id of the assigned document type, or null. */
            assign_document_type?: number | null;
            /** Id of the assigned storage path, or null. */
            assign_storage_path?: number | null;
            /** Id of the assigned owner, or null. */
            assign_owner?: number | null;
            /** Ids of users granted view permission. */
            assign_view_users?: Array<number>;
            /** Ids of groups granted view permission. */
            assign_view_groups?: Array<number>;
            /** Ids of users granted change permission. */
            assign_change_users?: Array<number>;
            /** Ids of groups granted change permission. */
            assign_change_groups?: Array<number>;
            /** Ids of custom fields attached to the document. */
            assign_custom_fields?: Array<number>;
            /** Custom field values keyed by custom field id, or null. */
            assign_custom_fields_values?: Record<string, unknown> | null;
            /** Whether every tag is removed. */
            remove_all_tags?: boolean;
            /** Ids of tags removed. */
            remove_tags?: Array<number>;
            /** Whether the correspondent is cleared. */
            remove_all_correspondents?: boolean;
            /** Ids of correspondents cleared when assigned. */
            remove_correspondents?: Array<number>;
            /** Whether the document type is cleared. */
            remove_all_document_types?: boolean;
            /** Ids of document types cleared when assigned. */
            remove_document_types?: Array<number>;
            /** Whether the storage path is cleared. */
            remove_all_storage_paths?: boolean;
            /** Ids of storage paths cleared when assigned. */
            remove_storage_paths?: Array<number>;
            /** Ids of custom fields detached. */
            remove_custom_fields?: Array<number>;
            /** Whether every custom field is detached. */
            remove_all_custom_fields?: boolean;
            /** Whether the owner is cleared. */
            remove_all_owners?: boolean;
            /** Ids of users cleared as owner. */
            remove_owners?: Array<number>;
            /** Whether all object permissions are removed. */
            remove_all_permissions?: boolean;
            /** Ids of users whose view permission is removed. */
            remove_view_users?: Array<number>;
            /** Ids of groups whose view permission is removed. */
            remove_view_groups?: Array<number>;
            /** Ids of users whose change permission is removed. */
            remove_change_users?: Array<number>;
            /** Ids of groups whose change permission is removed. */
            remove_change_groups?: Array<number>;
            /** Email settings of an email action. */
            email?: {
              /** The email settings id. */
              id?: number;
              /** Email subject template. */
              subject?: string;
              /** Email body template. */
              body?: string;
              /** Comma separated recipient email addresses. */
              to?: string;
              /** Whether the document file is attached. */
              include_document?: boolean;
              [key: string]: unknown;
            } | null;
            /** Webhook settings of a webhook action. */
            webhook?: {
              /** The webhook settings id. */
              id?: number;
              /** Destination URL of the webhook. */
              url?: string;
              /** Whether params are sent instead of body. */
              use_params?: boolean;
              /** Whether params are sent as JSON. */
              as_json?: boolean;
              /** Parameters sent with the webhook, or null. */
              params?: Record<string, unknown> | null;
              /** Raw request body, or null. */
              body?: string | null;
              /** HTTP headers sent with the webhook request, keyed by header name, or null. They may carry secrets such as an Authorization value and are redacted from connector logs. */
              headers?: Record<string, unknown> | null;
              /** Whether the document file is attached. */
              include_document?: boolean;
              [key: string]: unknown;
            } | null;
            /** Passwords tried by password removal actions, or null. Redacted from connector logs. */
            passwords?: Array<string> | null;
            /** AI-suggested fields applied by the action, or null. */
            ai_suggestion_fields?: Array<string> | null;
            /** Whether suggested objects that do not exist are created. */
            ai_create_missing?: boolean;
            /** Whether existing field values are overwritten. */
            ai_overwrite_existing?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Merge the PDFs of the given documents, in the given order, into a single new document that is consumed in the background and owned by the connected user. Documents whose file cannot be read as a PDF are skipped. With metadata_document_id the new document copies that document's metadata and takes its title with " (merged)" appended. Requires the global change_document permission plus change access on every selected document (403 Insufficient permissions otherwise); superusers bypass these checks. Also requires the global add_document permission; with delete_originals the global delete_document permission and ownership of every document are required as well. */
    "paperless_ngx.merge_documents": {
      input: {
        /** Ids of the documents to merge, in the order their pages should appear. Every id must exist. */
        documents: Array<number>;
        /** Id of one of the selected documents whose metadata (correspondent, document type, tags, storage path, custom fields, permissions) and title are copied to the merged document. Null or omitted starts with empty metadata. */
        metadata_document_id?: number | null;
        /** When true, move the original documents to the trash after the merged document has been consumed, handing their first archive serial number over to it. Defaults to false. */
        delete_originals?: boolean;
        /** When true, non-PDF originals contribute their archived PDF instead of being skipped. Defaults to false. */
        archive_fallback?: boolean;
        /** Which file of each selected document is used as the source. latest_version (default) resolves a selected root document to its newest version, while an explicitly selected version id is always used as is; explicit_selection uses exactly the selected document's own file even when newer versions exist. */
        source_mode?: "latest_version" | "explicit_selection";
      };
      output: {
        /** The upstream result marker, normally "OK". */
        result: string;
        [key: string]: unknown;
      };
    };
    /** Turn existing top-level documents into file versions of one root document without creating a new file. The source documents disappear from the document list, give up their archive serial numbers (the root takes the first one if it has none) and become versions of the root, effective immediately. Only top-level documents can be selected and the sources must not have versions of their own. Requires the global change_document permission plus change access on every selected document (403 Insufficient permissions otherwise); superusers bypass these checks. Also requires ownership of every document (or that it is unowned) and the global delete_document permission. */
    "paperless_ngx.merge_documents_as_versions": {
      input: {
        /** Ids of at least two top-level documents: the root document and the documents that become its versions. */
        documents: Array<number>;
        /**
         * Id of the document that remains the root. Must be one of documents.
         * @exclusiveMinimum 0
         */
        root_document_id: number;
        /**
         * Optional label for the new version, at most 64 characters. Only allowed when exactly two documents are given (one root and one source); whitespace-only labels are stored as null.
         * @maxLength 64
         */
        version_label?: string | null;
      };
      output: {
        /** The upstream result marker, normally "OK". */
        result: string;
        [key: string]: unknown;
      };
    };
    /** Queue an immediate fetch of one mail account instead of waiting for the scheduled mail check. Paperless-ngx starts a mail_fetch background task and answers OK without a task id; inspect the tasks list (task_type mail_fetch) or list_processed_mail to see the outcome. Requires view permission on the account. */
    "paperless_ngx.process_mail_account": {
      input: {
        /**
         * Id of the mail account.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The upstream result marker, normally "OK". */
        result: string;
        [key: string]: unknown;
      };
    };
    /** Discard the built zip archive of a share link bundle and queue it for rebuilding, for example after its documents changed. The bundle is returned with status pending; Paperless-ngx rejects the request with 400 while a build is still processing. Requires the change_sharelinkbundle permission. */
    "paperless_ngx.rebuild_share_link_bundle": {
      input: {
        /**
         * The share link bundle id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The bundle id. */
        id?: number;
        /** ISO 8601 creation timestamp. */
        created?: string;
        /** ISO 8601 expiration timestamp, or null when the bundle never expires. */
        expiration?: string | null;
        /** Slug that forms the public URL <instance>/share/<slug>. */
        slug?: string;
        /** Which file version is packed for each document: archive or original. */
        file_version?: string;
        /** Build status of the zip archive: pending (queued), processing (being built), ready (downloadable) or failed (see last_error). */
        status?: string;
        /** Size of the built zip archive in bytes, or null until built. */
        size_bytes?: number | null;
        /** Details of the last failed build, or null when the build succeeded. */
        last_error?: unknown;
        /** ISO 8601 timestamp of the last successful build, or null. */
        built_at?: string | null;
        /** Ids of the documents in the bundle. */
        documents?: Array<number>;
        /** Number of documents in the bundle. */
        document_count?: number;
        /** Public URL of the share, derived by the connector as <instance>/share/<slug>. Anyone holding it can download the file without logging in until expiration. */
        share_url?: string;
        [key: string]: unknown;
      };
    };
    /** Remove the password protection from encrypted PDF documents using the given password. Documents that are not encrypted are skipped. By default the unprotected PDF is consumed in the background as a new document owned by the connected user (metadata copied when include_metadata is true) and delete_original then trashes the protected original; with update_document true it becomes a new version of the same document instead. A wrong password fails the whole request with 400. Requires the global change_document permission plus change access on every selected document (403 Insufficient permissions otherwise); superusers bypass these checks. Also requires ownership of every document (or that it is unowned), the global add_document permission unless update_document is true, and the global delete_document permission when delete_original is true without update_document. */
    "paperless_ngx.remove_document_password": {
      input: {
        /** Ids of the documents to operate on. Every id must exist (400 otherwise); the all/filters selection is not supported by this endpoint. */
        documents: Array<number>;
        /**
         * The password that opens the selected PDFs.
         * @minLength 1
         */
        password: string;
        /** When true, the resulting PDF is consumed as a new version of the same document instead of as a new document. Defaults to false. */
        update_document?: boolean;
        /** When true (default), the new document or version copies the metadata of the original (correspondent, document type, tags, storage path, custom fields, permissions). When false it starts empty. */
        include_metadata?: boolean;
        /** When true and update_document is false, move the original document to the trash after the new document has been consumed. Defaults to false. Requires the global delete_document permission. */
        delete_original?: boolean;
        /** Which file of each selected document is used as the source. latest_version (default) resolves a selected root document to its newest version, while an explicitly selected version id is always used as is; explicit_selection uses exactly the selected document's own file even when newer versions exist. */
        source_mode?: "latest_version" | "explicit_selection";
      };
      output: {
        /** The upstream result marker, normally "OK". */
        result: string;
        [key: string]: unknown;
      };
    };
    /** Re-run parsing (text extraction, OCR and archive PDF generation) for documents from their original files. Each document is queued as a separate background task and its content and archive file are replaced when the task finishes; the response is OK as soon as the tasks are queued. Requires the global change_document permission plus change access on every selected document (403 Insufficient permissions otherwise); superusers bypass these checks. */
    "paperless_ngx.reprocess_documents": {
      input: {
        /** Ids of the documents to operate on. */
        documents?: Array<number>;
        /** When true, operate on every document visible to the connected user that matches filters instead of the explicit documents list. Defaults to false. */
        all?: boolean;
        /** Document list filters applied when all is true, keyed by the same query parameter names accepted by list_documents (for example tags__id__all or query). */
        filters?: Record<string, string | number | boolean>;
        /** When true, send the documents to the configured remote OCR engine instead of the local one. Defaults to false. */
        remote_ocr?: boolean;
      };
      output: {
        /** The upstream result marker, normally "OK". */
        result: string;
        [key: string]: unknown;
      };
    };
    /** Restore documents from the trash so they appear in the document list again and are re-added to the search index. Every id must be a trashed document (400 otherwise) and the connected user needs delete permission on each of them (403 otherwise). */
    "paperless_ngx.restore_trash_documents": {
      input: {
        /** Ids of trashed documents. Every id must currently be in the trash (400 otherwise). */
        documents: Array<number>;
      };
      output: {
        /** The upstream result marker, normally "OK". */
        result: string;
        /** Ids of the documents the action was applied to. For empty_trash without documents this is the list of trashed documents Paperless-ngx selected on your behalf. */
        doc_ids: Array<number> | null;
        [key: string]: unknown;
      };
    };
    /** Rotate every page of the selected PDF documents by the given number of degrees. The rotated file is consumed in the background as a new version of each root document, keeping its metadata; documents that are not PDFs are skipped with a warning while the response is still OK. Requires the global change_document permission plus change access on every selected document (403 Insufficient permissions otherwise); superusers bypass these checks. Also requires that the connected user owns every document (or it is unowned). */
    "paperless_ngx.rotate_documents": {
      input: {
        /** Ids of the documents to operate on. */
        documents?: Array<number>;
        /** When true, operate on every document visible to the connected user that matches filters instead of the explicit documents list. Defaults to false. */
        all?: boolean;
        /** Document list filters applied when all is true, keyed by the same query parameter names accepted by list_documents (for example tags__id__all or query). */
        filters?: Record<string, string | number | boolean>;
        /** Clockwise rotation in degrees, a multiple of 90 such as 90, 180, 270 or -90. Other values make the rotation fail per document. */
        degrees: number;
        /** Which file of each selected document is used as the source. latest_version (default) resolves a selected root document to its newest version, while an explicitly selected version id is always used as is; explicit_selection uses exactly the selected document's own file even when newer versions exist. */
        source_mode?: "latest_version" | "explicit_selection";
      };
      output: {
        /** The upstream result marker, normally "OK". */
        result: string;
        [key: string]: unknown;
      };
    };
    /** Manually start a maintenance task in the background: train_classifier retrains the automatic matching classifier, sanity_check verifies the document files and database, llm_index updates the AI index. Only these three task types can be dispatched, and only by a superuser. Returns the Celery task UUID to poll with get_task. */
    "paperless_ngx.run_task": {
      input: {
        /** Task type to run: train_classifier, sanity_check or llm_index. Other task types are rejected by Paperless-ngx. */
        task_type: "train_classifier" | "sanity_check" | "llm_index";
      };
      output: {
        /** Celery task UUID of the dispatched task; pass it to get_task. */
        task_id: string;
      };
    };
    /** Test whether Paperless-ngx can log in to a mailbox with the given IMAP settings without saving anything. Pass id of an existing account together with the asterisk password placeholder to test the stored credentials (including OAuth tokens, which are refreshed when expired); this requires change permission on that account, while testing new settings requires the add_mailaccount permission. A failed login is reported as an error with status 400 and the message Unable to connect to server. */
    "paperless_ngx.test_mail_account": {
      input: {
        /**
         * Id of an existing mail account. When given and password is only asterisks, the stored password, account type, refresh token and expiration of that account are used instead.
         * @exclusiveMinimum 0
         */
        id?: number;
        /**
         * IMAP server host name, for example imap.example.com.
         * @minLength 1
         */
        imap_server: string;
        /**
         * IMAP server port. Usually 143 for unencrypted and STARTTLS connections and 993 for SSL.
         * @minimum 1
         * @maximum 65535
         */
        imap_port: number;
        /** IMAP connection security: 1 no encryption, 2 SSL (implicit TLS, normally port 993), 3 STARTTLS (normally port 143). Defaults to 2. */
        imap_security?: 1 | 2 | 3;
        /** IMAP login user name. */
        username: string;
        /** IMAP password or OAuth access token to test. With id, a value consisting only of asterisks means use the stored password. */
        password: string;
        /**
         * Character set used when talking to the mail server, such as UTF-8 or US-ASCII. Defaults to UTF-8.
         * @minLength 1
         */
        character_set?: string;
        /** Whether password holds an OAuth access token instead of a password. Defaults to false. */
        is_token?: boolean;
        /** Account type: 1 IMAP with username and password, 2 Gmail OAuth, 3 Outlook OAuth. Defaults to 1. OAuth accounts are normally created through the Paperless-ngx web UI, which obtains the token; this API can only store token values obtained elsewhere. */
        account_type?: 1 | 2 | 3;
        /** ISO 8601 timestamp when the OAuth access token expires, or null. Only meaningful for OAuth accounts. */
        expiration?: string | null;
      };
      output: {
        /** True when Paperless-ngx could log in to the mailbox. */
        success: boolean;
      };
    };
    /** Render a storage path template against an existing document to preview the resulting file path, including the document's file extension, without saving anything. Only requires that the document is visible to the connected user; invalid templates are rejected with a validation error. */
    "paperless_ngx.test_storage_path": {
      input: {
        /**
         * Filename template rendered with Jinja placeholders such as {{ created_year }}/{{ correspondent }}/{{ title }}; legacy {created_year} format strings are converted automatically. Paperless-ngx validates the template by rendering it against sample values and rejects unknown variables.
         * @minLength 1
         */
        path: string;
        /**
         * Id of a document visible to the connected user to render the template with.
         * @exclusiveMinimum 0
         */
        document: number;
      };
      output: {
        /** The file path the template produces for the document, relative to the media directory and including the file extension, or null when the template renders to nothing. */
        result: string | null;
      };
    };
    /** Partially update the instance-wide application configuration. Only the fields in values are changed; pass null to reset a field to its environment default. Changing the AI embedding settings makes Paperless-ngx rebuild the LLM index in the background. Requires the change_applicationconfiguration permission. */
    "paperless_ngx.update_application_config": {
      input: {
        /**
         * Id of the configuration row. Defaults to the single existing configuration, so it can normally be omitted.
         * @exclusiveMinimum 0
         */
        id?: number;
        /** Configuration fields to change, keyed by the field names documented at https://docs.paperless-ngx.com/configuration/ and returned by get_application_config (for example output_type, language, mode, pages, app_title, barcodes_enabled, ai_enabled, llm_backend, llm_model, llm_api_key). Pass null to reset a field to the environment default. app_logo cannot be changed through this action. */
        values: Record<string, unknown>;
      };
      output: {
        /** The configuration row id. */
        id?: number;
        /** OCR output type: pdf, pdfa, pdfa-1, pdfa-2 or pdfa-3. */
        output_type?: string | null;
        /** Maximum number of pages to OCR, or null for all. */
        pages?: number | null;
        /** OCR languages, or null for the environment default. */
        language?: string | null;
        /** OCR mode: auto, force, redo or off. */
        mode?: string | null;
        /** Archive file generation: auto, always or never. */
        archive_file_generation?: string | null;
        /** Custom application title, or null. */
        app_title?: string | null;
        /** URL of the custom logo, or null. */
        app_logo?: string | null;
        /** Whether barcode scanning is enabled. */
        barcodes_enabled?: boolean | null;
        /** Whether AI features are enabled. */
        ai_enabled?: boolean | null;
        /** LLM backend: openai-like or ollama. */
        llm_backend?: string | null;
        /** LLM model name. */
        llm_model?: string | null;
        [key: string]: unknown;
      };
    };
    /** Partially update a correspondent; only the provided fields are changed. Requires the change_correspondent permission on the correspondent; changing owner or set_permissions additionally requires being the owner or a superuser. */
    "paperless_ngx.update_correspondent": {
      input: {
        /**
         * Id of the correspondent to update.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The correspondent name, at most 128 characters. Must be unique per owner; Paperless-ngx rejects duplicates with "Object violates owner / name unique constraint".
         * @minLength 1
         */
        name?: string;
        /** Text or pattern the matching algorithm compares against document content. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). Defaults to 1 (any word); 6 relies on the trained classifier and ignores match; 4 requires match to be a valid regular expression. */
        matching_algorithm?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        /** Whether matching ignores case. Defaults to true. */
        is_insensitive?: boolean;
        /** Id of the user that owns the object, or null to make it unowned. On create it defaults to the connected user. Only the current owner or a superuser may change it. */
        owner?: number | null;
        /** Object-level permissions to write. Supplying this replaces the existing permissions of the object; only the owner or a superuser may change them. */
        set_permissions?: {
          /** Users and groups granted this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
          /** Users and groups granted this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
        };
      };
      output: {
        /** The object id. */
        id?: number;
        /** URL-safe slug derived from the name. */
        slug?: string;
        /** The object name. */
        name?: string;
        /** Text or pattern used by the matching algorithm. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
        matching_algorithm?: number;
        /** Whether matching ignores case. */
        is_insensitive?: boolean;
        /** Number of documents visible to the connected user that use this object. */
        document_count?: number;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        /** Date of the most recent document from this correspondent, when requested. */
        last_correspondence?: string | null;
        [key: string]: unknown;
      };
    };
    /** Partially update a custom field definition; only the provided fields are changed. For select fields extra_data.select_options must be sent in full on every update, even when only renaming the field, keeping existing option ids so document values survive. Changing data_type of a field that already has values is not supported by the Paperless-ngx UI and can make stored values unreadable. Requires the change_customfield permission. */
    "paperless_ngx.update_custom_field": {
      input: {
        /**
         * Id of the custom field to update.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The custom field name, at most 128 characters and unique across the instance.
         * @minLength 1
         */
        name?: string;
        /** Value type of the field: string, url, date, boolean, integer, float, monetary, documentlink, select or longtext. */
        data_type?: "string" | "url" | "date" | "boolean" | "integer" | "float" | "monetary" | "documentlink" | "select" | "longtext";
        /** Type-specific settings. */
        extra_data?: {
          /**
           * Options of a select field. Required and non-empty whenever the field is (or becomes) a select field, and it must always list every option, including existing ones with their ids, because the list replaces the stored options.
           * @minItems 1
           */
          select_options?: Array<{
            /** Stable option id. Omit it or pass null for new options and Paperless-ngx generates one; keep the existing id of current options so documents referencing them keep their value. */
            id?: string | null;
            /**
             * Option label shown to users.
             * @minLength 1
             */
            label: string;
          }>;
          /** Default ISO 4217 currency code (exactly three letters, or empty) for monetary fields, or null for the instance default. */
          default_currency?: string | null;
        } | null;
      };
      output: {
        /** The custom field id. */
        id?: number;
        /** The custom field name. */
        name?: string;
        /** The value type: string, url, date, boolean, integer, float, monetary, documentlink, select or longtext. */
        data_type?: string;
        /** Type-specific settings, or null. */
        extra_data?: {
          /** Options of a select field. */
          select_options?: Array<{
            /** Stable option id referenced by document values. */
            id?: string;
            /** Option label shown to users. */
            label?: string;
            [key: string]: unknown;
          }>;
          /** Default ISO 4217 currency code for monetary fields, or null. */
          default_currency?: string | null;
          [key: string]: unknown;
        } | null;
        /** Number of documents that carry this field. */
        document_count?: number;
        [key: string]: unknown;
      };
    };
    /** Partially update a document: title, content, correspondent, document type, storage path, tags, creation date, archive serial number, custom fields, inbox tag removal, owner and object permissions. Only the provided fields are sent (PATCH); tags and custom_fields replace the whole list. Changing owner or set_permissions requires being the owner or a superuser. The response carries the full permissions object. Requires the change_document permission and change access to the document. */
    "paperless_ngx.update_document": {
      input: {
        /**
         * Id of the document.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Id of the file version whose content should receive a content update (see the versions array). Defaults to the latest version. Metadata fields always update the root document.
         * @exclusiveMinimum 0
         */
        version?: number;
        /**
         * New title, at most 128 characters.
         * @maxLength 128
         */
        title?: string;
        /** Replacement for the extracted text content of the selected (default latest) file version. Re-indexed for search immediately. */
        content?: string;
        /** Id of the correspondent to assign, or null to remove it. */
        correspondent?: number | null;
        /** Id of the document type to assign, or null to remove it. */
        document_type?: number | null;
        /** Id of the storage path to assign, or null to remove it. */
        storage_path?: number | null;
        /** Complete list of tag ids the document should carry; tags not listed are removed. Adding a child tag also adds its ancestors, and removing a parent removes its descendants. */
        tags?: Array<number>;
        /**
         * New creation date as YYYY-MM-DD. An ISO 8601 datetime is also accepted and reduced to its date.
         * @format date
         */
        created?: string;
        /**
         * New archive serial number (0 to 4294967295), or null to clear it. Must be unique, including among documents in the trash.
         * @minimum 0
         * @maximum 4294967295
         */
        archive_serial_number?: number | null;
        /** Complete list of custom field values the document should carry; fields not listed are removed from the document. */
        custom_fields?: Array<{
          /**
           * The custom field id.
           * @exclusiveMinimum 0
           */
          field: number;
          /** The value in the field's data type: string, number, boolean, ISO date, select option id, or an array of document ids for document links. Null clears the value. */
          value: unknown;
        }>;
        /** When true, every inbox tag is removed from the document as part of this update (except inbox tags being added by the tags field). Defaults to false. */
        remove_inbox_tags?: boolean;
        /** Id of the user that owns the object, or null to make it unowned. */
        owner?: number | null;
        /** Object-level permissions to write. Supplying this replaces the existing permissions of the object; only the owner or a superuser may change them. */
        set_permissions?: {
          /** Users and groups granted this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
          /** Users and groups granted this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
        };
      };
      output: {
        /** The document id. */
        id?: number;
        /** Correspondent id, or null. */
        correspondent?: number | null;
        /** Document type id, or null. */
        document_type?: number | null;
        /** Storage path id, or null. */
        storage_path?: number | null;
        /** The document title. */
        title?: string;
        /** Extracted text content of the latest version, possibly truncated when truncate_content is true. */
        content?: string;
        /** Ids of the tags assigned to the document. */
        tags?: Array<number>;
        /** Creation date as YYYY-MM-DD. */
        created?: string;
        /** Deprecated duplicate of created. */
        created_date?: string;
        /** ISO 8601 timestamp of the last modification. */
        modified?: string;
        /** ISO 8601 timestamp when the document was added. */
        added?: string;
        /** ISO 8601 timestamp when the document was moved to the trash, or null. */
        deleted_at?: string | null;
        /** Archive serial number (ASN), or null. */
        archive_serial_number?: number | null;
        /** File name of the original upload. */
        original_file_name?: string | null;
        /** Public file name of the archived PDF, or null when no archive version exists. */
        archived_file_name?: string | null;
        /** Other documents sharing the same checksum, only populated on single document reads. */
        duplicate_documents?: Array<{
          /** The duplicate document id. */
          id?: number;
          /** The duplicate document title. */
          title?: string;
          /** When the duplicate was trashed, or null. */
          deleted_at?: string | null;
          [key: string]: unknown;
        }>;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        /** Whether the connected user owns the document and has shared it with others. */
        is_shared_by_requester?: boolean;
        /** Notes attached to the document. */
        notes?: Array<{
          /** The note id. */
          id?: number;
          /** The note text. */
          note?: string;
          /** ISO 8601 creation timestamp. */
          created?: string;
          /** The user who wrote the note. */
          user?: {
            /** The user id. */
            id?: number;
            /** The username. */
            username?: string;
            /** The first name. */
            first_name?: string;
            /** The last name. */
            last_name?: string;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
        /** Custom field values attached to the document. */
        custom_fields?: Array<{
          /** The custom field id. */
          field?: number;
          /** The value in the field's data type: string, number, boolean, ISO date, select option id, or an array of document ids for document links. Null clears the value. */
          value?: unknown;
          [key: string]: unknown;
        }>;
        /** Number of pages, or null when unknown. */
        page_count?: number | null;
        /** MIME type of the original file. */
        mime_type?: string;
        /** Id of the root document when this entry is a version, or null. */
        root_document?: number | null;
        /** File-level versions of the document. */
        versions?: Array<{
          /** The version's document id. */
          id?: number;
          /** ISO 8601 timestamp when the version was added. */
          added?: string;
          /** Optional label for the version. */
          version_label?: string | null;
          /** MD5 checksum of the version's original file. */
          checksum?: string | null;
          /** Whether this entry is the root (original) document. */
          is_root?: boolean;
          [key: string]: unknown;
        }>;
        /** Search result details, only present on full text search results. */
        __search_hit__?: {
          /** Relevance score relative to the other results. */
          score?: number;
          /** Excerpt of the content with matching terms wrapped in span tags. */
          highlights?: string;
          /** Zero-based rank of the result. */
          rank?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Partially update a document type; only the provided fields are changed. Requires the change_documenttype permission on the document type; changing owner or set_permissions additionally requires being the owner or a superuser. */
    "paperless_ngx.update_document_type": {
      input: {
        /**
         * Id of the document type to update.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The document type name, at most 128 characters. Must be unique per owner; Paperless-ngx rejects duplicates with "Object violates owner / name unique constraint".
         * @minLength 1
         */
        name?: string;
        /** Text or pattern the matching algorithm compares against document content. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). Defaults to 1 (any word); 6 relies on the trained classifier and ignores match; 4 requires match to be a valid regular expression. */
        matching_algorithm?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        /** Whether matching ignores case. Defaults to true. */
        is_insensitive?: boolean;
        /** Id of the user that owns the object, or null to make it unowned. On create it defaults to the connected user. Only the current owner or a superuser may change it. */
        owner?: number | null;
        /** Object-level permissions to write. Supplying this replaces the existing permissions of the object; only the owner or a superuser may change them. */
        set_permissions?: {
          /** Users and groups granted this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
          /** Users and groups granted this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
        };
      };
      output: {
        /** The object id. */
        id?: number;
        /** URL-safe slug derived from the name. */
        slug?: string;
        /** The object name. */
        name?: string;
        /** Text or pattern used by the matching algorithm. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
        matching_algorithm?: number;
        /** Whether matching ignores case. */
        is_insensitive?: boolean;
        /** Number of documents visible to the connected user that use this object. */
        document_count?: number;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        [key: string]: unknown;
      };
    };
    /** Upload a new file version for a document. The connector downloads fileUrl server side and posts it as multipart form field document; Paperless-ngx consumes it in the background as a new version of the root document, keeping title, tags and other metadata shared. Returns the Celery task id to poll with get_task. Requires the change_document permission and change access to the root document; unsupported file types are rejected with 400. */
    "paperless_ngx.update_document_version": {
      input: {
        /**
         * Id of the document.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Public HTTP or HTTPS URL of the file to upload. The connector downloads it server side and forwards the bytes to Paperless-ngx as the multipart form field document, so it must be reachable from the connector and no larger than 100 MiB.
         * @format uri
         */
        fileUrl: string;
        /**
         * File name to submit with the upload. Defaults to the last path segment of fileUrl, or document when the URL has none. Paperless-ngx sanitizes it and uses the extension to pick a parser, so keep the real extension.
         * @minLength 1
         */
        fileName?: string;
        /**
         * Short label for the version, at most 64 characters. Empty or null clears the label.
         * @maxLength 64
         */
        version_label?: string | null;
      };
      output: {
        /** Celery task UUID. Poll get_task with it until status is success or failure; on success result_data.document_id holds the id of the resulting document. */
        task_id: string;
      };
    };
    /** Set or clear the label of one file version of a document, including the root version. Requires change access to the root document. */
    "paperless_ngx.update_document_version_label": {
      input: {
        /**
         * Id of the document (or of any of its versions; the root is resolved).
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Id of the file version to relabel, as listed in the versions array.
         * @exclusiveMinimum 0
         */
        version_id: number;
        /**
         * Short label for the version, at most 64 characters. Empty or null clears the label.
         * @maxLength 64
         */
        version_label: string | null;
      };
      output: {
        /** The version's document id. */
        id?: number;
        /** ISO 8601 timestamp when the version was added. */
        added?: string;
        /** Optional label for the version. */
        version_label?: string | null;
        /** MD5 checksum of the version's original file. */
        checksum?: string | null;
        /** Whether this entry is the root (original) document. */
        is_root?: boolean;
        [key: string]: unknown;
      };
    };
    /** Partially update a Paperless-ngx user group; only the provided fields change and permissions replaces the whole list. Requires the change_group permission. */
    "paperless_ngx.update_group": {
      input: {
        /**
         * Id of the group to update.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Unique group name of at most 150 characters.
         * @minLength 1
         * @maxLength 150
         */
        name?: string;
        /** Permission codenames granted to every member, for example view_document. Replaces the whole list. */
        permissions?: Array<string>;
      };
      output: {
        /** A Paperless-ngx group. */
        group: {
          /** The group id. */
          id?: number;
          /** The group name. */
          name?: string;
          /** Permission codenames granted to the group. */
          permissions?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Partially update a mail account. Only the provided fields are sent; pass null to clear nullable fields. A password consisting only of asterisks (the placeholder returned by reads) is ignored and leaves the stored password unchanged. Requires change permission on the account. */
    "paperless_ngx.update_mail_account": {
      input: {
        /**
         * Id of the mail account.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Display name of the account, unique across the instance, at most 256 characters.
         * @minLength 1
         */
        name?: string;
        /**
         * IMAP server host name, for example imap.example.com.
         * @minLength 1
         */
        imap_server?: string;
        /**
         * IMAP server port. Usually 143 for unencrypted and STARTTLS connections and 993 for SSL.
         * @minimum 1
         * @maximum 65535
         */
        imap_port?: number;
        /** IMAP connection security: 1 no encryption, 2 SSL (implicit TLS, normally port 993), 3 STARTTLS (normally port 143). Defaults to 2. */
        imap_security?: 1 | 2 | 3;
        /** IMAP login user name. */
        username?: string;
        /** IMAP password, or the OAuth access token when is_token is true. It is never returned; reads show a placeholder made of asterisks. On update, sending a value consisting only of asterisks (the placeholder returned by reads) leaves the stored password unchanged. */
        password?: string;
        /**
         * Character set used when talking to the mail server, such as UTF-8 or US-ASCII. Defaults to UTF-8.
         * @minLength 1
         */
        character_set?: string;
        /** Whether password holds an OAuth access token instead of a password. Defaults to false. */
        is_token?: boolean;
        /** Account type: 1 IMAP with username and password, 2 Gmail OAuth, 3 Outlook OAuth. Defaults to 1. OAuth accounts are normally created through the Paperless-ngx web UI, which obtains the token; this API can only store token values obtained elsewhere. */
        account_type?: 1 | 2 | 3;
        /** ISO 8601 timestamp when the OAuth access token expires, or null. Only meaningful for OAuth accounts. */
        expiration?: string | null;
        /** Id of the user that owns the object, or null to make it unowned. */
        owner?: number | null;
        /** Object-level permissions to write. Supplying this replaces the existing permissions of the object; only the owner or a superuser may change them. */
        set_permissions?: {
          /** Users and groups granted this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
          /** Users and groups granted this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
        };
      };
      output: {
        /** The mail account id. */
        id?: number;
        /** The account name. */
        name?: string;
        /** IMAP server host. */
        imap_server?: string;
        /** IMAP port. */
        imap_port?: number | null;
        /** IMAP security: 1 none, 2 SSL, 3 STARTTLS. */
        imap_security?: number;
        /** IMAP username. */
        username?: string;
        /** Obfuscated placeholder; the real password is never returned. */
        password?: string;
        /** Character set used to decode mail. */
        character_set?: string;
        /** Whether password holds an OAuth token. */
        is_token?: boolean;
        /** Account type: 1 IMAP, 2 Gmail OAuth, 3 Outlook OAuth. */
        account_type?: number;
        /** OAuth token expiration, or null. */
        expiration?: string | null;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        [key: string]: unknown;
      };
    };
    /** Partially update a mail rule. Only the provided fields are sent; pass null to clear nullable fields. When changing action to 2 (move) or 5 (tag), send action_parameter in the same request because Paperless-ngx validates the pair together. Requires change permission on the rule. */
    "paperless_ngx.update_mail_rule": {
      input: {
        /**
         * Id of the mail rule.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Rule name, unique per owner, at most 256 characters.
         * @minLength 1
         */
        name?: string;
        /**
         * Id of the mail account the rule scans. The connected user needs change permission on that account.
         * @exclusiveMinimum 0
         */
        account?: number;
        /**
         * IMAP folder to scan. Subfolders are separated by the server's delimiter, often a dot or a slash. Defaults to INBOX.
         * @minLength 1
         */
        folder?: string;
        /** Only process mails whose sender contains this text, or null for no filter. */
        filter_from?: string | null;
        /** Only process mails whose recipient contains this text, or null for no filter. */
        filter_to?: string | null;
        /** Only process mails whose subject contains this text, or null for no filter. */
        filter_subject?: string | null;
        /** Only process mails whose body contains this text, or null for no filter. */
        filter_body?: string | null;
        /** Only consume attachments whose filename entirely matches this pattern. Wildcards such as *.pdf or *invoice* are allowed and matching is case insensitive. Null for no filter. */
        filter_attachment_filename_include?: string | null;
        /** Skip attachments whose filename entirely matches this pattern. Wildcards such as *.pdf or *invoice* are allowed and matching is case insensitive. Null for no filter. */
        filter_attachment_filename_exclude?: string | null;
        /**
         * Only process mails received within this many days; 0 disables the age limit. Defaults to 30, at most 36500.
         * @minimum 0
         * @maximum 36500
         */
        maximum_age?: number;
        /** Action applied to a mail after its documents are consumed: 1 delete the mail, 2 move it to the folder named in action_parameter, 3 mark it as read (read mails are not processed), 4 flag it (flagged mails are not processed), 5 tag it with the tag or Gmail label named in action_parameter (tagged mails are not processed). Defaults to 3. Actions 2 and 5 require action_parameter in the same request. */
        action?: 1 | 2 | 3 | 4 | 5;
        /** Parameter for action: the target folder for action 2 (subfolders separated by dots) or the tag or Gmail label for action 5. Ignored by the other actions; null or empty when unused. */
        action_parameter?: string | null;
        /** Where consumed documents get their title from: 1 the mail subject, 2 the attachment filename, 3 do not assign a title from the rule. Defaults to 1. */
        assign_title_from?: 1 | 2 | 3;
        /** Ids of the tags assigned to every consumed document. */
        assign_tags?: Array<number>;
        /** How the correspondent is chosen: 1 do not assign a correspondent, 2 the sender mail address, 3 the sender name (falls back to the address), 4 the correspondent given in assign_correspondent. Defaults to 1. */
        assign_correspondent_from?: 1 | 2 | 3 | 4;
        /**
         * Id of the correspondent used when assign_correspondent_from is 4, or null.
         * @exclusiveMinimum 0
         */
        assign_correspondent?: number | null;
        /**
         * Id of the document type assigned to consumed documents, or null.
         * @exclusiveMinimum 0
         */
        assign_document_type?: number | null;
        /** Whether consumed documents are owned by the rule owner. Defaults to true. */
        assign_owner_from_rule?: boolean;
        /** Evaluation order among rules; lower values run first. Defaults to 0. */
        order?: number;
        /** Which attachments are consumed: 1 only real attachments, 2 every file including inline attachments such as embedded images, best combined with a filename filter. Defaults to 1. */
        attachment_type?: 1 | 2;
        /** What is consumed from a matching mail: 1 attachments only, 2 the full mail as a single .eml document with attachments embedded, 3 the full mail as .eml plus every attachment as a separate document. Defaults to 1. */
        consumption_scope?: 1 | 2 | 3;
        /** Layout used when a mail body is rendered to PDF: 0 system default, 1 text then HTML, 2 HTML then text, 3 HTML only, 4 text only. Defaults to 0. */
        pdf_layout?: 0 | 1 | 2 | 3 | 4;
        /** Whether the rule is active. Defaults to true. */
        enabled?: boolean;
        /** When true, no further rules are evaluated for a mail once this rule queues a document. Defaults to false. */
        stop_processing?: boolean;
        /** Id of the user that owns the object, or null to make it unowned. */
        owner?: number | null;
        /** Object-level permissions to write. Supplying this replaces the existing permissions of the object; only the owner or a superuser may change them. */
        set_permissions?: {
          /** Users and groups granted this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
          /** Users and groups granted this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
        };
      };
      output: {
        /** The mail rule id. */
        id?: number;
        /** The rule name. */
        name?: string;
        /** Id of the mail account the rule belongs to. */
        account?: number;
        /** Whether the rule is active. */
        enabled?: boolean;
        /** IMAP folder to scan. */
        folder?: string;
        /** Sender filter, or null. */
        filter_from?: string | null;
        /** Recipient filter, or null. */
        filter_to?: string | null;
        /** Subject filter, or null. */
        filter_subject?: string | null;
        /** Body filter, or null. */
        filter_body?: string | null;
        /** Attachment filename include pattern, or null. */
        filter_attachment_filename_include?: string | null;
        /** Attachment filename exclude pattern, or null. */
        filter_attachment_filename_exclude?: string | null;
        /** Maximum mail age in days, 0 for no limit. */
        maximum_age?: number;
        /** Post-consumption mail action: 1 delete, 2 move, 3 mark read, 4 flag, 5 tag. */
        action?: number;
        /** Folder or tag used by the action, or null. */
        action_parameter?: string | null;
        /** Title source: 1 subject, 2 attachment filename, 3 none. */
        assign_title_from?: number;
        /** Ids of tags assigned to consumed documents. */
        assign_tags?: Array<number>;
        /** Correspondent source: 1 nothing, 2 email, 3 name, 4 custom. */
        assign_correspondent_from?: number;
        /** Correspondent id used when assign_correspondent_from is 4, or null. */
        assign_correspondent?: number | null;
        /** Document type id assigned to consumed documents, or null. */
        assign_document_type?: number | null;
        /** Whether consumed documents are owned by the rule owner. */
        assign_owner_from_rule?: boolean;
        /** Evaluation order among rules. */
        order?: number;
        /** Attachment processing: 1 attachments only, 2 everything including inline. */
        attachment_type?: number;
        /** Consumption scope: 1 attachments only, 2 eml only, 3 everything. */
        consumption_scope?: number;
        /** PDF layout for mail bodies: 0 system default, 1 text then HTML, 2 HTML then text, 3 HTML only, 4 text only. */
        pdf_layout?: number;
        /** Whether later rules are skipped once this rule matches. */
        stop_processing?: boolean;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        [key: string]: unknown;
      };
    };
    /** Update the name, email or password of the user that owns the API token. Only the provided fields change; a password made only of asterisks is ignored. Returns the updated profile including the API token (redacted from logs). */
    "paperless_ngx.update_profile": {
      input: {
        /** New email address; an empty string clears it. */
        email?: string;
        /** Plain-text password, checked by the instance password validators. Paperless-ngx never returns it; get_user shows an obfuscated placeholder made of asterisks instead. An empty value or a value made only of asterisks leaves the current password unchanged. */
        password?: string;
        /**
         * New first name; may be empty.
         * @maxLength 150
         */
        first_name?: string;
        /**
         * New last name; may be empty.
         * @maxLength 150
         */
        last_name?: string;
      };
      output: {
        /** Email address; may be empty. */
        email?: string;
        /** Obfuscated placeholder; the real password is never returned. */
        password?: string;
        /** First name; may be empty. */
        first_name?: string;
        /** Last name; may be empty. */
        last_name?: string;
        /** The API token of the connected user, that is the credential this connection uses. Redacted from logs. */
        auth_token?: string;
        /** Social login accounts linked to the user. */
        social_accounts?: Array<{
          /** The social account id. */
          id?: number;
          /** The social login provider id. */
          provider?: string;
          /** Display name of the account at the provider, or Unknown App. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Whether the user can log in with a password (false for social-login-only accounts). */
        has_usable_password?: boolean;
        /** Whether TOTP multi-factor authentication is active. */
        is_mfa_enabled?: boolean;
        [key: string]: unknown;
      };
    };
    /** Partially update a saved view; only the provided fields are changed and filter_rules, when given, replaces the whole rule list. Requires the change_savedview permission on the view; changing owner or set_permissions additionally requires being the owner or a superuser. */
    "paperless_ngx.update_saved_view": {
      input: {
        /**
         * Id of the saved view to update.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The saved view name, at most 128 characters.
         * @minLength 1
         */
        name?: string;
        /** Icon shown next to the view in the sidebar, one of the Bootstrap icon names accepted by Paperless-ngx. Defaults to funnel. */
        icon?: "archive" | "bank" | "basket" | "bell" | "bookmark" | "boxes" | "briefcase" | "building" | "calculator" | "calendar" | "camera" | "card-checklist" | "cash" | "chat-left-text" | "check-circle" | "clipboard" | "clock-history" | "credit-card" | "download" | "envelope" | "exclamation-triangle" | "file-earmark" | "file-earmark-check" | "file-earmark-lock" | "file-earmark-medical" | "file-earmark-person" | "file-earmark-spreadsheet" | "file-text" | "files" | "folder" | "funnel" | "gear" | "globe2" | "hash" | "heart" | "house" | "inbox" | "journals" | "list-task" | "newspaper" | "paperclip" | "people" | "person" | "printer" | "receipt" | "safe" | "search" | "send" | "shop" | "stack" | "stars" | "tag" | "tags" | "telephone" | "truck" | "upc-scan" | "wallet2";
        /** Document field the view sorts by, such as created, added, modified, title, correspondent__name, document_type__name, archive_serial_number, num_notes, owner, page_count or custom_field_<id>, or null for the default order. */
        sort_field?: string | null;
        /** Whether to sort in descending order. Defaults to false. */
        sort_reverse?: boolean;
        /** Filter rules that define which documents the view shows. On update the list replaces all existing rules. */
        filter_rules?: Array<{
          /** Numeric filter rule type: 0 title contains, 1 content contains, 2 ASN is, 3 correspondent is, 4 document type is, 5 is in inbox, 6 has tag, 7 has any tag, 8 created before, 9 created after, 10 created year is, 11 created month is, 12 created day is, 13 added before, 14 added after, 15 modified before, 16 modified after, 17 does not have tag, 18 does not have ASN, 19 title or content contains, 20 fulltext query, 21 more like this, 22 has tags in, 23 ASN greater than, 24 ASN less than, 25 storage path is, 26 has correspondent in, 27 does not have correspondent in, 28 has document type in, 29 does not have document type in, 30 has storage path in, 31 does not have storage path in, 32 owner is, 33 has owner in, 34 does not have owner, 35 does not have owner in, 36 has custom field value, 37 is shared by me, 38 has custom fields, 39 has custom field in, 40 does not have custom field in, 41 does not have custom field, 42 custom fields query, 43 created to, 44 created from, 45 added to, 46 added from, 47 mime type is, 48 simple title search, 49 simple text search. */
          rule_type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49;
          /** Rule value as a string (an object id, a date as YYYY-MM-DD, a search term or a boolean as true/false), at most 255 characters, or null for rules that take no value. */
          value?: string | null;
        }>;
        /**
         * Documents per page when displaying the view, or null for the user's default.
         * @exclusiveMinimum 0
         */
        page_size?: number | null;
        /** Display mode: table, smallCards or largeCards; null uses the user's default. */
        display_mode?: "table" | "smallCards" | "largeCards" | null;
        /** Columns or fields shown for each document: title, created, added, tag, correspondent, documenttype, storagepath, note, owner, shared, asn, pagecount or custom_field_<id> for an existing custom field. Null (or an empty list on update) restores the default set. */
        display_fields?: Array<string> | null;
        /** Id of the user that owns the object, or null to make it unowned. On create it defaults to the connected user. Only the current owner or a superuser may change it. */
        owner?: number | null;
        /** Object-level permissions to write. Supplying this replaces the existing permissions of the object; only the owner or a superuser may change them. */
        set_permissions?: {
          /** Users and groups granted this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
          /** Users and groups granted this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
        };
      };
      output: {
        /** The saved view id. */
        id?: number;
        /** The saved view name. */
        name?: string;
        /** Icon name shown next to the view, or null. */
        icon?: string | null;
        /** Field the view sorts by. */
        sort_field?: string | null;
        /** Whether the sort is descending. */
        sort_reverse?: boolean;
        /** Filter rules that define the view. */
        filter_rules?: Array<{
          /** Numeric filter rule type. */
          rule_type?: number;
          /** Rule value, or null. */
          value?: string | null;
          [key: string]: unknown;
        }>;
        /** Page size used when displaying the view, or null. */
        page_size?: number | null;
        /** Display mode: table, smallCards or largeCards. */
        display_mode?: string | null;
        /** Fields shown in the view. */
        display_fields?: Array<string> | null;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        [key: string]: unknown;
      };
    };
    /** Partially update a storage path; only the provided fields are changed. Changing path schedules a background task that renames and moves every document using the storage path. Requires the change_storagepath permission on the storage path; changing owner or set_permissions additionally requires being the owner or a superuser. */
    "paperless_ngx.update_storage_path": {
      input: {
        /**
         * Id of the storage path to update.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The storage path name, at most 128 characters. Must be unique per owner; Paperless-ngx rejects duplicates with "Object violates owner / name unique constraint".
         * @minLength 1
         */
        name?: string;
        /**
         * Filename template rendered with Jinja placeholders such as {{ created_year }}/{{ correspondent }}/{{ title }}; legacy {created_year} format strings are converted automatically. Paperless-ngx validates the template by rendering it against sample values and rejects unknown variables. Changing it moves every document using the path in the background.
         * @minLength 1
         */
        path?: string;
        /** Text or pattern the matching algorithm compares against document content. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). Defaults to 1 (any word); 6 relies on the trained classifier and ignores match; 4 requires match to be a valid regular expression. */
        matching_algorithm?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        /** Whether matching ignores case. Defaults to true. */
        is_insensitive?: boolean;
        /** Id of the user that owns the object, or null to make it unowned. On create it defaults to the connected user. Only the current owner or a superuser may change it. */
        owner?: number | null;
        /** Object-level permissions to write. Supplying this replaces the existing permissions of the object; only the owner or a superuser may change them. */
        set_permissions?: {
          /** Users and groups granted this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
          /** Users and groups granted this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
        };
      };
      output: {
        /** The object id. */
        id?: number;
        /** URL-safe slug derived from the name. */
        slug?: string;
        /** The object name. */
        name?: string;
        /** Text or pattern used by the matching algorithm. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
        matching_algorithm?: number;
        /** Whether matching ignores case. */
        is_insensitive?: boolean;
        /** Number of documents visible to the connected user that use this object. */
        document_count?: number;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        /** Filename template used to place documents under the media directory. */
        path?: string;
        [key: string]: unknown;
      };
    };
    /** Partially update a tag; only the provided fields are changed and null clears nullable fields such as parent. Requires the change_tag permission on the tag; changing owner or set_permissions additionally requires being the owner or a superuser. */
    "paperless_ngx.update_tag": {
      input: {
        /**
         * Id of the tag to update.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The tag name, at most 128 characters. Must be unique per owner; Paperless-ngx rejects duplicates with "Object violates owner / name unique constraint".
         * @minLength 1
         */
        name?: string;
        /**
         * Hex color for the tag such as #a6cee3 (a # followed by six hex digits). Defaults to #a6cee3; the contrasting text_color is derived automatically.
         * @pattern ^#[0-9a-fA-F]{6}$
         */
        color?: string;
        /** Text or pattern the matching algorithm compares against document content. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). Defaults to 1 (any word); 6 relies on the trained classifier and ignores match; 4 requires match to be a valid regular expression. */
        matching_algorithm?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        /** Whether matching ignores case. Defaults to true. */
        is_insensitive?: boolean;
        /** Whether newly consumed documents automatically receive this tag. Defaults to false. */
        is_inbox_tag?: boolean;
        /**
         * Id of the parent tag for hierarchical tags, or null for a root tag. A tag cannot be its own ancestor and nesting is limited to 5 levels. Moving a tag under a new parent also adds the new ancestor tags to documents that carry it.
         * @exclusiveMinimum 0
         */
        parent?: number | null;
        /** Id of the user that owns the object, or null to make it unowned. On create it defaults to the connected user. Only the current owner or a superuser may change it. */
        owner?: number | null;
        /** Object-level permissions to write. Supplying this replaces the existing permissions of the object; only the owner or a superuser may change them. */
        set_permissions?: {
          /** Users and groups granted this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
          /** Users and groups granted this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
          };
        };
      };
      output: {
        /** The object id. */
        id?: number;
        /** URL-safe slug derived from the name. */
        slug?: string;
        /** The object name. */
        name?: string;
        /** Text or pattern used by the matching algorithm. */
        match?: string;
        /** Matching algorithm: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word, 6 automatic (classifier). */
        matching_algorithm?: number;
        /** Whether matching ignores case. */
        is_insensitive?: boolean;
        /** Number of documents visible to the connected user that use this object. */
        document_count?: number;
        /** Id of the owning user, or null when the object is unowned. */
        owner?: number | null;
        /** Object-level permissions. Only populated in full when full_perms is true; otherwise Paperless-ngx returns a truncated form. */
        permissions?: {
          /** Users and groups holding this permission. */
          view?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          /** Users and groups holding this permission. */
          change?: {
            /** User ids. */
            users?: Array<number>;
            /** Group ids. */
            groups?: Array<number>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Whether the connected user may modify this object. */
        user_can_change?: boolean;
        /** Hex color such as #a6cee3. */
        color?: string;
        /** Black or white text color chosen for contrast against color. */
        text_color?: string;
        /** Whether new documents automatically receive this tag. */
        is_inbox_tag?: boolean;
        /** Id of the parent tag, or null for a root tag. */
        parent?: number | null;
        /** Child tags, each with the same shape as a tag. */
        children?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Replace the stored UI settings of the connected user with the given settings object. Paperless-ngx overwrites the whole settings document, so send the complete object as returned by get_ui_settings with your changes applied; the update_checking.backend_setting value is never stored. */
    "paperless_ngx.update_ui_settings": {
      input: {
        /** The complete UI settings document to store for the connected user. */
        settings: Record<string, unknown>;
      };
      output: {
        /** Whether Paperless-ngx stored the settings. */
        success: boolean;
      };
    };
    /** Partially update a Paperless-ngx user account; only the provided fields change and groups or user_permissions replace the whole list. Changing is_staff or is_superuser, or modifying a superuser at all, requires the caller to be a superuser. Requires the change_user permission. */
    "paperless_ngx.update_user": {
      input: {
        /**
         * Id of the user to update.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Unique username of at most 150 characters: letters, digits and @ . + - _ only.
         * @minLength 1
         * @maxLength 150
         */
        username?: string;
        /** Email address; may be empty. */
        email?: string;
        /** Plain-text password, checked by the instance password validators. Paperless-ngx never returns it; get_user shows an obfuscated placeholder made of asterisks instead. An empty value or a value made only of asterisks leaves the current password unchanged. */
        password?: string;
        /**
         * First name; may be empty.
         * @maxLength 150
         */
        first_name?: string;
        /**
         * Last name; may be empty.
         * @maxLength 150
         */
        last_name?: string;
        /** Whether the user may access the Django admin site and see every task. Only a superuser may grant or change it; other callers get 403. */
        is_staff?: boolean;
        /** Whether the account may log in and use its API token. Defaults to true on create. */
        is_active?: boolean;
        /** Whether the user has every permission. Only a superuser may grant or change it, and only superusers may modify or delete other superusers. */
        is_superuser?: boolean;
        /** Ids of the groups the user belongs to. Replaces the whole list. */
        groups?: Array<number>;
        /** Permission codenames granted directly to the user, for example view_document. Replaces the whole list. */
        user_permissions?: Array<string>;
      };
      output: {
        /** A Paperless-ngx user. */
        user: {
          /** The user id. */
          id?: number;
          /** The username. */
          username?: string;
          /** The email address. */
          email?: string;
          /** Obfuscated placeholder; the real password is never returned. */
          password?: string;
          /** The first name. */
          first_name?: string;
          /** The last name. */
          last_name?: string;
          /** ISO 8601 timestamp when the user was created. */
          date_joined?: string;
          /** Whether the user may access the admin site. */
          is_staff?: boolean;
          /** Whether the account is active. */
          is_active?: boolean;
          /** Whether the user is a superuser. */
          is_superuser?: boolean;
          /** Ids of the groups the user belongs to. */
          groups?: Array<number>;
          /** Permission codenames granted directly to the user. */
          user_permissions?: Array<string>;
          /** Permission codenames inherited from groups. */
          inherited_permissions?: Array<string>;
          /** Whether TOTP multi-factor authentication is active. */
          is_mfa_enabled?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Partially update a workflow. Only the provided fields are sent. When triggers or actions is provided it replaces the whole set: entries with an id are updated in place, entries without an id are created, and triggers or actions left out are detached and deleted. Requires the change_workflow permission. */
    "paperless_ngx.update_workflow": {
      input: {
        /**
         * The workflow id.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * Workflow name, unique across workflows (max 256 characters).
         * @minLength 1
         */
        name?: string;
        /** Evaluation order among workflows; lower values run first. Defaults to 0. */
        order?: number;
        /** Whether the workflow is active. Defaults to true. */
        enabled?: boolean;
        /** Triggers that start the workflow. Each entry takes the fields of create_workflow_trigger; include id to reuse an existing trigger. */
        triggers?: Array<{
          /** Id of an existing object to update in place. Omit or pass null to create a new one. */
          id?: number | null;
          /** Trigger type: 1 consumption started (runs before the document is stored and requires filter_filename, filter_path or filter_mailrule), 2 document added, 3 document updated, 4 scheduled (fires relative to the date field selected by schedule_date_field). */
          type: 1 | 2 | 3 | 4;
          /** Document sources the trigger reacts to; only evaluated by consumption started (1) and document added (2) triggers. Defaults to [1, 2, 3]. */
          sources?: Array<1 | 2 | 3 | 4>;
          /** Only match documents whose consumption path matches this pattern; * wildcards are allowed and matching is case insensitive. Empty strings are stored as null. */
          filter_path?: string | null;
          /** Only match documents whose file name matches this pattern, for example *.pdf or *invoice*; matching is case insensitive. Empty strings are stored as null. */
          filter_filename?: string | null;
          /** Id of the mail rule the document must have been fetched by, or null for any source. */
          filter_mailrule?: number | null;
          /** Matching algorithm applied to the document content: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word. Defaults to 0. */
          matching_algorithm?: 0 | 1 | 2 | 3 | 4 | 5;
          /** Text or pattern compared against the document content using matching_algorithm. Defaults to an empty string. */
          match?: string;
          /** Whether content matching ignores case. Defaults to true. */
          is_insensitive?: boolean;
          /** Ids of tags; the document must carry at least one of them. */
          filter_has_tags?: Array<number>;
          /** Ids of tags; the document must carry all of them. */
          filter_has_all_tags?: Array<number>;
          /** Ids of tags; the document must not carry any of them. */
          filter_has_not_tags?: Array<number>;
          /** JSON-encoded custom field query expression using the same syntax as the custom_field_query filter of list_documents, or null. Empty strings are stored as null. */
          filter_custom_field_query?: string | null;
          /** Ids of correspondents; the document must have one of them. */
          filter_has_any_correspondents?: Array<number>;
          /** Ids of correspondents the document must not have. */
          filter_has_not_correspondents?: Array<number>;
          /** Ids of document types; the document must have one of them. */
          filter_has_any_document_types?: Array<number>;
          /** Ids of document types the document must not have. */
          filter_has_not_document_types?: Array<number>;
          /** Ids of storage paths; the document must use one of them. */
          filter_has_any_storage_paths?: Array<number>;
          /** Ids of storage paths the document must not use. */
          filter_has_not_storage_paths?: Array<number>;
          /** Id of the correspondent the document must have, or null for any. */
          filter_has_correspondent?: number | null;
          /** Id of the document type the document must have, or null for any. */
          filter_has_document_type?: number | null;
          /** Id of the storage path the document must use, or null for any. */
          filter_has_storage_path?: number | null;
          /** Number of days after the selected date field at which a scheduled (4) trigger fires; negative values fire before it. Defaults to 0. */
          schedule_offset_days?: number;
          /** Whether a scheduled (4) trigger fires again every schedule_recurring_interval_days. Defaults to false. */
          schedule_is_recurring?: boolean;
          /**
           * Number of days between recurring runs of a scheduled (4) trigger, at least 1. Defaults to 1.
           * @exclusiveMinimum 0
           */
          schedule_recurring_interval_days?: number;
          /** Date field the scheduled trigger is measured from: added, created, modified or custom_field (then schedule_date_custom_field is required). Defaults to added. */
          schedule_date_field?: "added" | "created" | "modified" | "custom_field";
          /** Id of the date custom field used when schedule_date_field is custom_field, or null. */
          schedule_date_custom_field?: number | null;
        }>;
        /** Actions performed when a trigger matches, run in array order. Each entry takes the fields of create_workflow_action; include id to reuse an existing action. */
        actions?: Array<{
          /** Id of an existing object to update in place. Omit or pass null to create a new one. */
          id?: number | null;
          /** Action type: 1 assignment, 2 removal, 3 email (email is required), 4 webhook (webhook is required), 5 password removal (passwords is required), 6 move to trash, 7 remote OCR (the workflow needs a consumption started trigger), 8 apply AI suggestions (ai_suggestion_fields is required and the workflow needs a trigger other than consumption started). Defaults to 1. */
          type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
          /** Jinja2 template for the new document title, for example {{ correspondent }} - {{ created_year }}; see the workflow template documentation. Null or an empty string leaves the title unchanged. */
          assign_title?: string | null;
          /** Ids of tags to add to the document. */
          assign_tags?: Array<number> | null;
          /** Id of the correspondent to assign, or null. */
          assign_correspondent?: number | null;
          /** Id of the document type to assign, or null. */
          assign_document_type?: number | null;
          /** Id of the storage path to assign, or null. */
          assign_storage_path?: number | null;
          /** Id of the user to set as owner, or null. */
          assign_owner?: number | null;
          /** Ids of users granted view permission. */
          assign_view_users?: Array<number>;
          /** Ids of groups granted view permission. */
          assign_view_groups?: Array<number>;
          /** Ids of users granted change permission. */
          assign_change_users?: Array<number>;
          /** Ids of groups granted change permission. */
          assign_change_groups?: Array<number>;
          /** Ids of custom fields to attach to the document. */
          assign_custom_fields?: Array<number>;
          /** Values for the attached custom fields keyed by custom field id (as a string); an empty string is stored as null. Fields listed in assign_custom_fields without a value are attached empty. */
          assign_custom_fields_values?: Record<string, unknown> | null;
          /** Whether to remove every tag. Defaults to false. */
          remove_all_tags?: boolean;
          /** Ids of tags to remove. */
          remove_tags?: Array<number>;
          /** Whether to clear the correspondent. Defaults to false. */
          remove_all_correspondents?: boolean;
          /** Ids of correspondents to clear when currently assigned. */
          remove_correspondents?: Array<number>;
          /** Whether to clear the document type. Defaults to false. */
          remove_all_document_types?: boolean;
          /** Ids of document types to clear when currently assigned. */
          remove_document_types?: Array<number>;
          /** Whether to clear the storage path. Defaults to false. */
          remove_all_storage_paths?: boolean;
          /** Ids of storage paths to clear when currently assigned. */
          remove_storage_paths?: Array<number>;
          /** Ids of custom fields to detach. */
          remove_custom_fields?: Array<number>;
          /** Whether to detach every custom field. Defaults to false. */
          remove_all_custom_fields?: boolean;
          /** Whether to clear the owner. Defaults to false. */
          remove_all_owners?: boolean;
          /** Ids of users to clear as owner when they own the document. */
          remove_owners?: Array<number>;
          /** Whether to remove all object permissions. Defaults to false. */
          remove_all_permissions?: boolean;
          /** Ids of users whose view permission is removed. */
          remove_view_users?: Array<number>;
          /** Ids of groups whose view permission is removed. */
          remove_view_groups?: Array<number>;
          /** Ids of users whose change permission is removed. */
          remove_change_users?: Array<number>;
          /** Ids of groups whose change permission is removed. */
          remove_change_groups?: Array<number>;
          /** Email settings for an email (type 3) action. Paperless-ngx must have outgoing email configured. */
          email?: {
            /** Id of an existing object to update in place. Omit or pass null to create a new one. */
            id?: number | null;
            /**
             * Email subject; may contain placeholders such as {doc_title} or {correspondent} as documented for workflow templates.
             * @minLength 1
             */
            subject: string;
            /**
             * Email body; may contain the same placeholders as subject.
             * @minLength 1
             */
            body: string;
            /**
             * Comma separated recipient email addresses.
             * @minLength 1
             */
            to: string;
            /** Whether to attach the document file to the email. Defaults to false. */
            include_document?: boolean;
          } | null;
          /** Webhook settings for a webhook (type 4) action. */
          webhook?: {
            /** Id of an existing object to update in place. Omit or pass null to create a new one. */
            id?: number | null;
            /**
             * Destination URL of the webhook. Paperless-ngx validates it as an HTTP(S) URL.
             * @format uri
             */
            url: string;
            /** When true, send params as form fields (or JSON when as_json is true); when false, send body instead. Defaults to true. */
            use_params?: boolean;
            /** When true and use_params is true, send params as a JSON payload instead of form fields. Defaults to false. */
            as_json?: boolean;
            /** Parameters sent when use_params is true, keyed by name; values may contain workflow placeholders. Null sends none. */
            params?: Record<string, unknown> | null;
            /** Raw request body sent when use_params is false; may contain workflow placeholders. Null sends none. */
            body?: string | null;
            /** HTTP headers sent with the webhook request, keyed by header name, or null. They may carry secrets such as an Authorization value and are redacted from connector logs. */
            headers?: Record<string, unknown> | null;
            /** Whether to attach the document file to the webhook request. Defaults to false. */
            include_document?: boolean;
          } | null;
          /** Passwords to try when removing PDF protection; required and non-empty for password removal (type 5) actions. Redacted from connector logs. */
          passwords?: Array<string> | null;
          /** Which AI-suggested fields to apply; required and non-empty for apply AI suggestions (type 8) actions. */
          ai_suggestion_fields?: Array<"title" | "tags" | "correspondent" | "document_type" | "storage_path" | "created"> | null;
          /** Whether apply AI suggestions actions create suggested tags, correspondents, document types and storage paths that do not exist yet instead of skipping them. Defaults to false. */
          ai_create_missing?: boolean;
          /** Whether apply AI suggestions actions overwrite fields that already have a value; tags are always added, never replaced. Defaults to false. */
          ai_overwrite_existing?: boolean;
        }>;
      };
      output: {
        /** The workflow id. */
        id?: number;
        /** The workflow name. */
        name?: string;
        /** Evaluation order among workflows. */
        order?: number;
        /** Whether the workflow is active. */
        enabled?: boolean;
        /** Triggers that start the workflow. */
        triggers?: Array<{
          /** The trigger id. */
          id?: number;
          /** Trigger type: 1 consumption started (runs before the document is stored and requires filter_filename, filter_path or filter_mailrule), 2 document added, 3 document updated, 4 scheduled (fires relative to the date field selected by schedule_date_field). */
          type?: number;
          /** Document sources the trigger reacts to. */
          sources?: Array<number>;
          /** Consumption path pattern, or null. */
          filter_path?: string | null;
          /** File name pattern, or null. */
          filter_filename?: string | null;
          /** Id of the required mail rule, or null. */
          filter_mailrule?: number | null;
          /** Matching algorithm applied to the document content: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word. Defaults to 0. */
          matching_algorithm?: number;
          /** Text or pattern used by the matching algorithm. */
          match?: string;
          /** Whether content matching ignores case. */
          is_insensitive?: boolean;
          /** Ids of tags the document must carry at least one of. */
          filter_has_tags?: Array<number>;
          /** Ids of tags the document must carry all of. */
          filter_has_all_tags?: Array<number>;
          /** Ids of tags the document must not carry. */
          filter_has_not_tags?: Array<number>;
          /** JSON-encoded custom field query expression, or null. */
          filter_custom_field_query?: string | null;
          /** Ids of correspondents the document must have one of. */
          filter_has_any_correspondents?: Array<number>;
          /** Ids of correspondents the document must not have. */
          filter_has_not_correspondents?: Array<number>;
          /** Ids of document types the document must have one of. */
          filter_has_any_document_types?: Array<number>;
          /** Ids of document types the document must not have. */
          filter_has_not_document_types?: Array<number>;
          /** Ids of storage paths the document must use one of. */
          filter_has_any_storage_paths?: Array<number>;
          /** Ids of storage paths the document must not use. */
          filter_has_not_storage_paths?: Array<number>;
          /** Id of the required correspondent, or null. */
          filter_has_correspondent?: number | null;
          /** Id of the required document type, or null. */
          filter_has_document_type?: number | null;
          /** Id of the required storage path, or null. */
          filter_has_storage_path?: number | null;
          /** Day offset of a scheduled trigger from its date field. */
          schedule_offset_days?: number;
          /** Whether a scheduled trigger repeats. */
          schedule_is_recurring?: boolean;
          /** Days between recurring scheduled runs. */
          schedule_recurring_interval_days?: number;
          /** Date field the scheduled trigger is measured from: added, created, modified or custom_field (then schedule_date_custom_field is required). Defaults to added. */
          schedule_date_field?: string;
          /** Id of the date custom field used by the schedule, or null. */
          schedule_date_custom_field?: number | null;
          [key: string]: unknown;
        }>;
        /** Actions the workflow performs, in execution order. */
        actions?: Array<{
          /** The action id. */
          id?: number;
          /** Action type: 1 assignment, 2 removal, 3 email (email is required), 4 webhook (webhook is required), 5 password removal (passwords is required), 6 move to trash, 7 remote OCR (the workflow needs a consumption started trigger), 8 apply AI suggestions (ai_suggestion_fields is required and the workflow needs a trigger other than consumption started). Defaults to 1. */
          type?: number;
          /** Title template, or null. */
          assign_title?: string | null;
          /** Ids of tags added to the document. */
          assign_tags?: Array<number>;
          /** Id of the assigned correspondent, or null. */
          assign_correspondent?: number | null;
          /** Id of the assigned document type, or null. */
          assign_document_type?: number | null;
          /** Id of the assigned storage path, or null. */
          assign_storage_path?: number | null;
          /** Id of the assigned owner, or null. */
          assign_owner?: number | null;
          /** Ids of users granted view permission. */
          assign_view_users?: Array<number>;
          /** Ids of groups granted view permission. */
          assign_view_groups?: Array<number>;
          /** Ids of users granted change permission. */
          assign_change_users?: Array<number>;
          /** Ids of groups granted change permission. */
          assign_change_groups?: Array<number>;
          /** Ids of custom fields attached to the document. */
          assign_custom_fields?: Array<number>;
          /** Custom field values keyed by custom field id, or null. */
          assign_custom_fields_values?: Record<string, unknown> | null;
          /** Whether every tag is removed. */
          remove_all_tags?: boolean;
          /** Ids of tags removed. */
          remove_tags?: Array<number>;
          /** Whether the correspondent is cleared. */
          remove_all_correspondents?: boolean;
          /** Ids of correspondents cleared when assigned. */
          remove_correspondents?: Array<number>;
          /** Whether the document type is cleared. */
          remove_all_document_types?: boolean;
          /** Ids of document types cleared when assigned. */
          remove_document_types?: Array<number>;
          /** Whether the storage path is cleared. */
          remove_all_storage_paths?: boolean;
          /** Ids of storage paths cleared when assigned. */
          remove_storage_paths?: Array<number>;
          /** Ids of custom fields detached. */
          remove_custom_fields?: Array<number>;
          /** Whether every custom field is detached. */
          remove_all_custom_fields?: boolean;
          /** Whether the owner is cleared. */
          remove_all_owners?: boolean;
          /** Ids of users cleared as owner. */
          remove_owners?: Array<number>;
          /** Whether all object permissions are removed. */
          remove_all_permissions?: boolean;
          /** Ids of users whose view permission is removed. */
          remove_view_users?: Array<number>;
          /** Ids of groups whose view permission is removed. */
          remove_view_groups?: Array<number>;
          /** Ids of users whose change permission is removed. */
          remove_change_users?: Array<number>;
          /** Ids of groups whose change permission is removed. */
          remove_change_groups?: Array<number>;
          /** Email settings of an email action. */
          email?: {
            /** The email settings id. */
            id?: number;
            /** Email subject template. */
            subject?: string;
            /** Email body template. */
            body?: string;
            /** Comma separated recipient email addresses. */
            to?: string;
            /** Whether the document file is attached. */
            include_document?: boolean;
            [key: string]: unknown;
          } | null;
          /** Webhook settings of a webhook action. */
          webhook?: {
            /** The webhook settings id. */
            id?: number;
            /** Destination URL of the webhook. */
            url?: string;
            /** Whether params are sent instead of body. */
            use_params?: boolean;
            /** Whether params are sent as JSON. */
            as_json?: boolean;
            /** Parameters sent with the webhook, or null. */
            params?: Record<string, unknown> | null;
            /** Raw request body, or null. */
            body?: string | null;
            /** HTTP headers sent with the webhook request, keyed by header name, or null. They may carry secrets such as an Authorization value and are redacted from connector logs. */
            headers?: Record<string, unknown> | null;
            /** Whether the document file is attached. */
            include_document?: boolean;
            [key: string]: unknown;
          } | null;
          /** Passwords tried by password removal actions, or null. Redacted from connector logs. */
          passwords?: Array<string> | null;
          /** AI-suggested fields applied by the action, or null. */
          ai_suggestion_fields?: Array<string> | null;
          /** Whether suggested objects that do not exist are created. */
          ai_create_missing?: boolean;
          /** Whether existing field values are overwritten. */
          ai_overwrite_existing?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Partially update a workflow action. Only the provided fields are sent; nested email and webhook objects replace the stored settings. Requires the change_workflowaction permission. */
    "paperless_ngx.update_workflow_action": {
      input: {
        /**
         * The workflow action id.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Action type: 1 assignment, 2 removal, 3 email (email is required), 4 webhook (webhook is required), 5 password removal (passwords is required), 6 move to trash, 7 remote OCR (the workflow needs a consumption started trigger), 8 apply AI suggestions (ai_suggestion_fields is required and the workflow needs a trigger other than consumption started). Defaults to 1. */
        type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
        /** Jinja2 template for the new document title, for example {{ correspondent }} - {{ created_year }}; see the workflow template documentation. Null or an empty string leaves the title unchanged. */
        assign_title?: string | null;
        /** Ids of tags to add to the document. */
        assign_tags?: Array<number> | null;
        /** Id of the correspondent to assign, or null. */
        assign_correspondent?: number | null;
        /** Id of the document type to assign, or null. */
        assign_document_type?: number | null;
        /** Id of the storage path to assign, or null. */
        assign_storage_path?: number | null;
        /** Id of the user to set as owner, or null. */
        assign_owner?: number | null;
        /** Ids of users granted view permission. */
        assign_view_users?: Array<number>;
        /** Ids of groups granted view permission. */
        assign_view_groups?: Array<number>;
        /** Ids of users granted change permission. */
        assign_change_users?: Array<number>;
        /** Ids of groups granted change permission. */
        assign_change_groups?: Array<number>;
        /** Ids of custom fields to attach to the document. */
        assign_custom_fields?: Array<number>;
        /** Values for the attached custom fields keyed by custom field id (as a string); an empty string is stored as null. Fields listed in assign_custom_fields without a value are attached empty. */
        assign_custom_fields_values?: Record<string, unknown> | null;
        /** Whether to remove every tag. Defaults to false. */
        remove_all_tags?: boolean;
        /** Ids of tags to remove. */
        remove_tags?: Array<number>;
        /** Whether to clear the correspondent. Defaults to false. */
        remove_all_correspondents?: boolean;
        /** Ids of correspondents to clear when currently assigned. */
        remove_correspondents?: Array<number>;
        /** Whether to clear the document type. Defaults to false. */
        remove_all_document_types?: boolean;
        /** Ids of document types to clear when currently assigned. */
        remove_document_types?: Array<number>;
        /** Whether to clear the storage path. Defaults to false. */
        remove_all_storage_paths?: boolean;
        /** Ids of storage paths to clear when currently assigned. */
        remove_storage_paths?: Array<number>;
        /** Ids of custom fields to detach. */
        remove_custom_fields?: Array<number>;
        /** Whether to detach every custom field. Defaults to false. */
        remove_all_custom_fields?: boolean;
        /** Whether to clear the owner. Defaults to false. */
        remove_all_owners?: boolean;
        /** Ids of users to clear as owner when they own the document. */
        remove_owners?: Array<number>;
        /** Whether to remove all object permissions. Defaults to false. */
        remove_all_permissions?: boolean;
        /** Ids of users whose view permission is removed. */
        remove_view_users?: Array<number>;
        /** Ids of groups whose view permission is removed. */
        remove_view_groups?: Array<number>;
        /** Ids of users whose change permission is removed. */
        remove_change_users?: Array<number>;
        /** Ids of groups whose change permission is removed. */
        remove_change_groups?: Array<number>;
        /** Email settings for an email (type 3) action. Paperless-ngx must have outgoing email configured. */
        email?: {
          /** Id of an existing object to update in place. Omit or pass null to create a new one. */
          id?: number | null;
          /**
           * Email subject; may contain placeholders such as {doc_title} or {correspondent} as documented for workflow templates.
           * @minLength 1
           */
          subject: string;
          /**
           * Email body; may contain the same placeholders as subject.
           * @minLength 1
           */
          body: string;
          /**
           * Comma separated recipient email addresses.
           * @minLength 1
           */
          to: string;
          /** Whether to attach the document file to the email. Defaults to false. */
          include_document?: boolean;
        } | null;
        /** Webhook settings for a webhook (type 4) action. */
        webhook?: {
          /** Id of an existing object to update in place. Omit or pass null to create a new one. */
          id?: number | null;
          /**
           * Destination URL of the webhook. Paperless-ngx validates it as an HTTP(S) URL.
           * @format uri
           */
          url: string;
          /** When true, send params as form fields (or JSON when as_json is true); when false, send body instead. Defaults to true. */
          use_params?: boolean;
          /** When true and use_params is true, send params as a JSON payload instead of form fields. Defaults to false. */
          as_json?: boolean;
          /** Parameters sent when use_params is true, keyed by name; values may contain workflow placeholders. Null sends none. */
          params?: Record<string, unknown> | null;
          /** Raw request body sent when use_params is false; may contain workflow placeholders. Null sends none. */
          body?: string | null;
          /** HTTP headers sent with the webhook request, keyed by header name, or null. They may carry secrets such as an Authorization value and are redacted from connector logs. */
          headers?: Record<string, unknown> | null;
          /** Whether to attach the document file to the webhook request. Defaults to false. */
          include_document?: boolean;
        } | null;
        /** Passwords to try when removing PDF protection; required and non-empty for password removal (type 5) actions. Redacted from connector logs. */
        passwords?: Array<string> | null;
        /** Which AI-suggested fields to apply; required and non-empty for apply AI suggestions (type 8) actions. */
        ai_suggestion_fields?: Array<"title" | "tags" | "correspondent" | "document_type" | "storage_path" | "created"> | null;
        /** Whether apply AI suggestions actions create suggested tags, correspondents, document types and storage paths that do not exist yet instead of skipping them. Defaults to false. */
        ai_create_missing?: boolean;
        /** Whether apply AI suggestions actions overwrite fields that already have a value; tags are always added, never replaced. Defaults to false. */
        ai_overwrite_existing?: boolean;
      };
      output: {
        /** The action id. */
        id?: number;
        /** Action type: 1 assignment, 2 removal, 3 email (email is required), 4 webhook (webhook is required), 5 password removal (passwords is required), 6 move to trash, 7 remote OCR (the workflow needs a consumption started trigger), 8 apply AI suggestions (ai_suggestion_fields is required and the workflow needs a trigger other than consumption started). Defaults to 1. */
        type?: number;
        /** Title template, or null. */
        assign_title?: string | null;
        /** Ids of tags added to the document. */
        assign_tags?: Array<number>;
        /** Id of the assigned correspondent, or null. */
        assign_correspondent?: number | null;
        /** Id of the assigned document type, or null. */
        assign_document_type?: number | null;
        /** Id of the assigned storage path, or null. */
        assign_storage_path?: number | null;
        /** Id of the assigned owner, or null. */
        assign_owner?: number | null;
        /** Ids of users granted view permission. */
        assign_view_users?: Array<number>;
        /** Ids of groups granted view permission. */
        assign_view_groups?: Array<number>;
        /** Ids of users granted change permission. */
        assign_change_users?: Array<number>;
        /** Ids of groups granted change permission. */
        assign_change_groups?: Array<number>;
        /** Ids of custom fields attached to the document. */
        assign_custom_fields?: Array<number>;
        /** Custom field values keyed by custom field id, or null. */
        assign_custom_fields_values?: Record<string, unknown> | null;
        /** Whether every tag is removed. */
        remove_all_tags?: boolean;
        /** Ids of tags removed. */
        remove_tags?: Array<number>;
        /** Whether the correspondent is cleared. */
        remove_all_correspondents?: boolean;
        /** Ids of correspondents cleared when assigned. */
        remove_correspondents?: Array<number>;
        /** Whether the document type is cleared. */
        remove_all_document_types?: boolean;
        /** Ids of document types cleared when assigned. */
        remove_document_types?: Array<number>;
        /** Whether the storage path is cleared. */
        remove_all_storage_paths?: boolean;
        /** Ids of storage paths cleared when assigned. */
        remove_storage_paths?: Array<number>;
        /** Ids of custom fields detached. */
        remove_custom_fields?: Array<number>;
        /** Whether every custom field is detached. */
        remove_all_custom_fields?: boolean;
        /** Whether the owner is cleared. */
        remove_all_owners?: boolean;
        /** Ids of users cleared as owner. */
        remove_owners?: Array<number>;
        /** Whether all object permissions are removed. */
        remove_all_permissions?: boolean;
        /** Ids of users whose view permission is removed. */
        remove_view_users?: Array<number>;
        /** Ids of groups whose view permission is removed. */
        remove_view_groups?: Array<number>;
        /** Ids of users whose change permission is removed. */
        remove_change_users?: Array<number>;
        /** Ids of groups whose change permission is removed. */
        remove_change_groups?: Array<number>;
        /** Email settings of an email action. */
        email?: {
          /** The email settings id. */
          id?: number;
          /** Email subject template. */
          subject?: string;
          /** Email body template. */
          body?: string;
          /** Comma separated recipient email addresses. */
          to?: string;
          /** Whether the document file is attached. */
          include_document?: boolean;
          [key: string]: unknown;
        } | null;
        /** Webhook settings of a webhook action. */
        webhook?: {
          /** The webhook settings id. */
          id?: number;
          /** Destination URL of the webhook. */
          url?: string;
          /** Whether params are sent instead of body. */
          use_params?: boolean;
          /** Whether params are sent as JSON. */
          as_json?: boolean;
          /** Parameters sent with the webhook, or null. */
          params?: Record<string, unknown> | null;
          /** Raw request body, or null. */
          body?: string | null;
          /** HTTP headers sent with the webhook request, keyed by header name, or null. They may carry secrets such as an Authorization value and are redacted from connector logs. */
          headers?: Record<string, unknown> | null;
          /** Whether the document file is attached. */
          include_document?: boolean;
          [key: string]: unknown;
        } | null;
        /** Passwords tried by password removal actions, or null. Redacted from connector logs. */
        passwords?: Array<string> | null;
        /** AI-suggested fields applied by the action, or null. */
        ai_suggestion_fields?: Array<string> | null;
        /** Whether suggested objects that do not exist are created. */
        ai_create_missing?: boolean;
        /** Whether existing field values are overwritten. */
        ai_overwrite_existing?: boolean;
        [key: string]: unknown;
      };
    };
    /** Partially update a workflow trigger. Only the provided fields are sent. When the trigger is (or becomes) a consumption started trigger, Paperless-ngx requires filter_filename, filter_path or filter_mailrule in the same request even if unchanged. Requires the change_workflowtrigger permission. */
    "paperless_ngx.update_workflow_trigger": {
      input: {
        /**
         * The workflow trigger id.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Trigger type: 1 consumption started (runs before the document is stored and requires filter_filename, filter_path or filter_mailrule), 2 document added, 3 document updated, 4 scheduled (fires relative to the date field selected by schedule_date_field). */
        type?: 1 | 2 | 3 | 4;
        /** Document sources the trigger reacts to; only evaluated by consumption started (1) and document added (2) triggers. Defaults to [1, 2, 3]. */
        sources?: Array<1 | 2 | 3 | 4>;
        /** Only match documents whose consumption path matches this pattern; * wildcards are allowed and matching is case insensitive. Empty strings are stored as null. */
        filter_path?: string | null;
        /** Only match documents whose file name matches this pattern, for example *.pdf or *invoice*; matching is case insensitive. Empty strings are stored as null. */
        filter_filename?: string | null;
        /** Id of the mail rule the document must have been fetched by, or null for any source. */
        filter_mailrule?: number | null;
        /** Matching algorithm applied to the document content: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word. Defaults to 0. */
        matching_algorithm?: 0 | 1 | 2 | 3 | 4 | 5;
        /** Text or pattern compared against the document content using matching_algorithm. Defaults to an empty string. */
        match?: string;
        /** Whether content matching ignores case. Defaults to true. */
        is_insensitive?: boolean;
        /** Ids of tags; the document must carry at least one of them. */
        filter_has_tags?: Array<number>;
        /** Ids of tags; the document must carry all of them. */
        filter_has_all_tags?: Array<number>;
        /** Ids of tags; the document must not carry any of them. */
        filter_has_not_tags?: Array<number>;
        /** JSON-encoded custom field query expression using the same syntax as the custom_field_query filter of list_documents, or null. Empty strings are stored as null. */
        filter_custom_field_query?: string | null;
        /** Ids of correspondents; the document must have one of them. */
        filter_has_any_correspondents?: Array<number>;
        /** Ids of correspondents the document must not have. */
        filter_has_not_correspondents?: Array<number>;
        /** Ids of document types; the document must have one of them. */
        filter_has_any_document_types?: Array<number>;
        /** Ids of document types the document must not have. */
        filter_has_not_document_types?: Array<number>;
        /** Ids of storage paths; the document must use one of them. */
        filter_has_any_storage_paths?: Array<number>;
        /** Ids of storage paths the document must not use. */
        filter_has_not_storage_paths?: Array<number>;
        /** Id of the correspondent the document must have, or null for any. */
        filter_has_correspondent?: number | null;
        /** Id of the document type the document must have, or null for any. */
        filter_has_document_type?: number | null;
        /** Id of the storage path the document must use, or null for any. */
        filter_has_storage_path?: number | null;
        /** Number of days after the selected date field at which a scheduled (4) trigger fires; negative values fire before it. Defaults to 0. */
        schedule_offset_days?: number;
        /** Whether a scheduled (4) trigger fires again every schedule_recurring_interval_days. Defaults to false. */
        schedule_is_recurring?: boolean;
        /**
         * Number of days between recurring runs of a scheduled (4) trigger, at least 1. Defaults to 1.
         * @exclusiveMinimum 0
         */
        schedule_recurring_interval_days?: number;
        /** Date field the scheduled trigger is measured from: added, created, modified or custom_field (then schedule_date_custom_field is required). Defaults to added. */
        schedule_date_field?: "added" | "created" | "modified" | "custom_field";
        /** Id of the date custom field used when schedule_date_field is custom_field, or null. */
        schedule_date_custom_field?: number | null;
      };
      output: {
        /** The trigger id. */
        id?: number;
        /** Trigger type: 1 consumption started (runs before the document is stored and requires filter_filename, filter_path or filter_mailrule), 2 document added, 3 document updated, 4 scheduled (fires relative to the date field selected by schedule_date_field). */
        type?: number;
        /** Document sources the trigger reacts to. */
        sources?: Array<number>;
        /** Consumption path pattern, or null. */
        filter_path?: string | null;
        /** File name pattern, or null. */
        filter_filename?: string | null;
        /** Id of the required mail rule, or null. */
        filter_mailrule?: number | null;
        /** Matching algorithm applied to the document content: 0 none, 1 any word, 2 all words, 3 exact match, 4 regular expression, 5 fuzzy word. Defaults to 0. */
        matching_algorithm?: number;
        /** Text or pattern used by the matching algorithm. */
        match?: string;
        /** Whether content matching ignores case. */
        is_insensitive?: boolean;
        /** Ids of tags the document must carry at least one of. */
        filter_has_tags?: Array<number>;
        /** Ids of tags the document must carry all of. */
        filter_has_all_tags?: Array<number>;
        /** Ids of tags the document must not carry. */
        filter_has_not_tags?: Array<number>;
        /** JSON-encoded custom field query expression, or null. */
        filter_custom_field_query?: string | null;
        /** Ids of correspondents the document must have one of. */
        filter_has_any_correspondents?: Array<number>;
        /** Ids of correspondents the document must not have. */
        filter_has_not_correspondents?: Array<number>;
        /** Ids of document types the document must have one of. */
        filter_has_any_document_types?: Array<number>;
        /** Ids of document types the document must not have. */
        filter_has_not_document_types?: Array<number>;
        /** Ids of storage paths the document must use one of. */
        filter_has_any_storage_paths?: Array<number>;
        /** Ids of storage paths the document must not use. */
        filter_has_not_storage_paths?: Array<number>;
        /** Id of the required correspondent, or null. */
        filter_has_correspondent?: number | null;
        /** Id of the required document type, or null. */
        filter_has_document_type?: number | null;
        /** Id of the required storage path, or null. */
        filter_has_storage_path?: number | null;
        /** Day offset of a scheduled trigger from its date field. */
        schedule_offset_days?: number;
        /** Whether a scheduled trigger repeats. */
        schedule_is_recurring?: boolean;
        /** Days between recurring scheduled runs. */
        schedule_recurring_interval_days?: number;
        /** Date field the scheduled trigger is measured from: added, created, modified or custom_field (then schedule_date_custom_field is required). Defaults to added. */
        schedule_date_field?: string;
        /** Id of the date custom field used by the schedule, or null. */
        schedule_date_custom_field?: number | null;
        [key: string]: unknown;
      };
    };
    /** Upload a file for consumption as a new document. The connector downloads fileUrl server side (at most 100 MiB) and posts it as multipart form field document together with the optional title, creation date, correspondent, document type, storage path, tags, archive serial number and custom field values. Paperless-ngx sniffs the file type from the bytes and rejects unsupported types with 400; consumption (OCR, matching, workflows) runs in the background, so the action returns the Celery task id to poll with get_task, whose result_data.document_id identifies the new document once it succeeded. The connected user becomes the owner. Requires the add_document permission. */
    "paperless_ngx.upload_document": {
      input: {
        /**
         * Public HTTP or HTTPS URL of the file to upload. The connector downloads it server side and forwards the bytes to Paperless-ngx as the multipart form field document, so it must be reachable from the connector and no larger than 100 MiB.
         * @format uri
         */
        fileUrl: string;
        /**
         * File name to submit with the upload. Defaults to the last path segment of fileUrl, or document when the URL has none. Paperless-ngx sanitizes it and uses the extension to pick a parser, so keep the real extension.
         * @minLength 1
         */
        fileName?: string;
        /**
         * Title for the new document, at most 128 characters. Defaults to the file name without its extension.
         * @maxLength 128
         */
        title?: string;
        /** Creation date to record, as YYYY-MM-DD or an ISO 8601 datetime such as 2016-04-19T06:15:00+02:00; only the date part is kept. Defaults to a date found in the document, or the consumption time. */
        created?: string;
        /**
         * Id of the correspondent to assign.
         * @exclusiveMinimum 0
         */
        correspondent?: number;
        /**
         * Id of the document type to assign.
         * @exclusiveMinimum 0
         */
        document_type?: number;
        /**
         * Id of the storage path to assign.
         * @exclusiveMinimum 0
         */
        storage_path?: number;
        /** Ids of the tags to assign. */
        tags?: Array<number>;
        /**
         * Archive serial number to assign (0 to 4294967295). Must not be in use, including by documents in the trash.
         * @minimum 0
         * @maximum 4294967295
         */
        archive_serial_number?: number;
        /** Custom field values to attach; pass null as the value to attach a field without a value. Sent to Paperless-ngx as its field id to value mapping. */
        custom_fields?: Array<{
          /**
           * The custom field id.
           * @exclusiveMinimum 0
           */
          field: number;
          /** The value in the field's data type: string, number, boolean, ISO date, select option id, or an array of document ids for document links. Null clears the value. */
          value: unknown;
        }>;
      };
      output: {
        /** Celery task UUID. Poll get_task with it until status is success or failure; on success result_data.document_id holds the id of the resulting document. */
        task_id: string;
      };
    };
  }
}
