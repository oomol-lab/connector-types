import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Yuque document. Omitted visibility inherits the repository setting. */
    "yuque.create_document": {
      input: {
        /** Repository ID or owner/repository namespace, such as team/handbook. */
        repo: number | string;
        /** Document slug. */
        slug?: string;
        /** Document title. */
        title?: string;
        /** Visibility: 0 private, 1 public, 2 within the enterprise. */
        public?: 0 | 1 | 2;
        /** Body format. Omitted values use the upstream default (Markdown). */
        format?: "markdown" | "html" | "lake";
        /** Document body in the selected format. */
        body: string;
      };
      output: {
        /** Yuque document with upstream fields. */
        data: {
          /** Resource ID. */
          id?: number;
          /** Resource name. */
          name?: string;
          /** Resource title. */
          title?: string;
          /** Resource slug. */
          slug?: string;
          /** Account login. */
          login?: string;
          /** Repository ID. */
          book_id?: number;
          /** Returned body format. */
          format?: string;
          /** Original document body. */
          body?: string;
          /** Draft document body. */
          body_draft?: string;
          /** Document body as HTML. */
          body_html?: string;
          /** Document body in Lake format. */
          body_lake?: string;
          /** Sheet content encoded as a JSON string. */
          body_sheet?: string;
          /** Table content and pagination encoded as a JSON string. */
          body_table?: string;
          /** Latest published version ID. */
          latest_version_id?: number;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a Yuque repository for a user or group. */
    "yuque.create_repository": {
      input: {
        /**
         * User or group login or ID.
         * @minLength 1
         */
        owner: string;
        /** Whether the repository owner is a user or a group. */
        ownerType: "users" | "groups";
        /** Repository name. */
        name: string;
        /** Repository slug. */
        slug: string;
        /** Repository description. */
        description?: string;
        /** Visibility: 0 private, 1 public, 2 within the enterprise. */
        public?: 0 | 1 | 2;
        /** Deny access to group members other than group administrators. */
        enhancedPrivacy?: boolean;
      };
      output: {
        /** Yuque repository with upstream fields. */
        data: {
          /** Resource ID. */
          id?: number;
          /** Resource name. */
          name?: string;
          /** Resource title. */
          title?: string;
          /** Resource slug. */
          slug?: string;
          /** Account login. */
          login?: string;
          /** Full owner/repository namespace. */
          namespace?: string;
          /** Visibility: 0 private, 1 public, 2 within the enterprise. */
          public?: 0 | 1 | 2;
          /** Repository table of contents. */
          toc_yml?: string;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Delete a document from a Yuque repository. */
    "yuque.delete_document": {
      input: {
        /** Repository ID or owner/repository namespace, such as team/handbook. */
        repo: number | string;
        /**
         * Document ID or slug.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Yuque document with upstream fields. */
        data: {
          /** Resource ID. */
          id?: number;
          /** Resource name. */
          name?: string;
          /** Resource title. */
          title?: string;
          /** Resource slug. */
          slug?: string;
          /** Account login. */
          login?: string;
          /** Repository ID. */
          book_id?: number;
          /** Returned body format. */
          format?: string;
          /** Original document body. */
          body?: string;
          /** Draft document body. */
          body_draft?: string;
          /** Document body as HTML. */
          body_html?: string;
          /** Document body in Lake format. */
          body_lake?: string;
          /** Sheet content encoded as a JSON string. */
          body_sheet?: string;
          /** Table content and pagination encoded as a JSON string. */
          body_table?: string;
          /** Latest published version ID. */
          latest_version_id?: number;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Delete a Yuque repository. */
    "yuque.delete_repository": {
      input: {
        /** Repository ID or owner/repository namespace, such as team/handbook. */
        repo: number | string;
      };
      output: {
        /** Yuque repository with upstream fields. */
        data: {
          /** Resource ID. */
          id?: number;
          /** Resource name. */
          name?: string;
          /** Resource title. */
          title?: string;
          /** Resource slug. */
          slug?: string;
          /** Account login. */
          login?: string;
          /** Full owner/repository namespace. */
          namespace?: string;
          /** Visibility: 0 private, 1 public, 2 within the enterprise. */
          public?: 0 | 1 | 2;
          /** Repository table of contents. */
          toc_yml?: string;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the user associated with the Yuque token. */
    "yuque.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Yuque resource with upstream fields. */
        data: {
          /** Resource ID. */
          id?: number;
          /** Resource name. */
          name?: string;
          /** Resource title. */
          title?: string;
          /** Resource slug. */
          slug?: string;
          /** Account login. */
          login?: string;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read a Yuque document. Omit repo to use the direct document route; page and page_size paginate Table content. */
    "yuque.get_document": {
      input: {
        /** Repository ID or owner/repository namespace, such as team/handbook. */
        repo?: number | string;
        /**
         * Document ID or slug.
         * @minLength 1
         */
        id: string;
        /**
         * Table page size, from 1 to 200.
         * @minimum 1
         * @maximum 200
         */
        page_size?: number;
        /**
         * Table page number, starting at 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Yuque document with upstream fields. */
        data: {
          /** Resource ID. */
          id?: number;
          /** Resource name. */
          name?: string;
          /** Resource title. */
          title?: string;
          /** Resource slug. */
          slug?: string;
          /** Account login. */
          login?: string;
          /** Repository ID. */
          book_id?: number;
          /** Returned body format. */
          format?: string;
          /** Original document body. */
          body?: string;
          /** Draft document body. */
          body_draft?: string;
          /** Document body as HTML. */
          body_html?: string;
          /** Document body in Lake format. */
          body_lake?: string;
          /** Sheet content encoded as a JSON string. */
          body_sheet?: string;
          /** Table content and pagination encoded as a JSON string. */
          body_table?: string;
          /** Latest published version ID. */
          latest_version_id?: number;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read a historical Yuque document version and its body. */
    "yuque.get_document_version": {
      input: {
        /** Version ID. */
        id: number;
      };
      output: {
        /** Yuque document version with upstream fields. */
        data: {
          /** Resource ID. */
          id?: number;
          /** Resource name. */
          name?: string;
          /** Resource title. */
          title?: string;
          /** Resource slug. */
          slug?: string;
          /** Account login. */
          login?: string;
          /** Document ID. */
          doc_id?: number;
          /** Original version body. */
          body?: string;
          /** Version body as HTML. */
          body_html?: string;
          /** Version body as Markdown. */
          body_md?: string;
          /** Version body in Lake format. */
          body_asl?: string;
          /** Version diff. */
          diff?: string;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read a Yuque repository by ID or owner/repository namespace. */
    "yuque.get_repository": {
      input: {
        /** Repository ID or owner/repository namespace, such as team/handbook. */
        repo: number | string;
      };
      output: {
        /** Yuque repository with upstream fields. */
        data: {
          /** Resource ID. */
          id?: number;
          /** Resource name. */
          name?: string;
          /** Resource title. */
          title?: string;
          /** Resource slug. */
          slug?: string;
          /** Account login. */
          login?: string;
          /** Full owner/repository namespace. */
          namespace?: string;
          /** Visibility: 0 private, 1 public, 2 within the enterprise. */
          public?: 0 | 1 | 2;
          /** Repository table of contents. */
          toc_yml?: string;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read the nodes and relationships in a Yuque repository's table of contents. */
    "yuque.get_table_of_contents": {
      input: {
        /** Repository ID or owner/repository namespace, such as team/handbook. */
        repo: number | string;
      };
      output: {
        /** Table of contents nodes. */
        data: Array<{
          /** Node UUID. */
          uuid?: string;
          /** Node type: DOC, LINK or TITLE. */
          type?: string;
          /** Node title. */
          title?: string;
          /** Node URL. */
          url?: string;
          /** Linked document ID. */
          doc_id?: number;
          /** Parent node UUID. */
          parent_uuid?: string;
          /** First child node UUID. */
          child_uuid?: string;
          /** Next sibling node UUID. */
          sibling_uuid?: string;
          /** Previous sibling node UUID. */
          prev_uuid?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List the published history of a Yuque document. */
    "yuque.list_document_versions": {
      input: {
        /** Document ID. */
        doc_id: number;
      };
      output: {
        /** Document versions. */
        data: Array<{
          /** Resource ID. */
          id?: number;
          /** Resource name. */
          name?: string;
          /** Resource title. */
          title?: string;
          /** Resource slug. */
          slug?: string;
          /** Account login. */
          login?: string;
          /** Document ID. */
          doc_id?: number;
          /** Original version body. */
          body?: string;
          /** Version body as HTML. */
          body_html?: string;
          /** Version body as Markdown. */
          body_md?: string;
          /** Version body in Lake format. */
          body_asl?: string;
          /** Version diff. */
          diff?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List documents in a Yuque repository, including optional deleted-document and changed-since filters. */
    "yuque.list_documents": {
      input: {
        /** Repository ID or owner/repository namespace, such as team/handbook. */
        repo: number | string;
        /** Result offset. */
        offset?: number;
        /**
         * Page size, up to 100.
         * @maximum 100
         */
        limit?: number;
        /** Whether to list deleted documents. */
        deleted?: boolean;
        /**
         * Lower bound for modification time, in ISO 8601 format.
         * @format date-time
         */
        changed_at_gte?: string;
        /** Comma-separated extra fields: hits, tags, latest_version_id. */
        optional_properties?: string;
      };
      output: {
        /** Documents. */
        data: Array<{
          /** Resource ID. */
          id?: number;
          /** Resource name. */
          name?: string;
          /** Resource title. */
          title?: string;
          /** Resource slug. */
          slug?: string;
          /** Account login. */
          login?: string;
          /** Repository ID. */
          book_id?: number;
          /** Returned body format. */
          format?: string;
          /** Original document body. */
          body?: string;
          /** Draft document body. */
          body_draft?: string;
          /** Document body as HTML. */
          body_html?: string;
          /** Document body in Lake format. */
          body_lake?: string;
          /** Sheet content encoded as a JSON string. */
          body_sheet?: string;
          /** Table content and pagination encoded as a JSON string. */
          body_table?: string;
          /** Latest published version ID. */
          latest_version_id?: number;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List members of a Yuque group. */
    "yuque.list_group_members": {
      input: {
        /**
         * User or group login or ID.
         * @minLength 1
         */
        group: string;
        /** Membership role: 0 administrator, 1 member, 2 read-only member. */
        role?: 0 | 1 | 2;
        /** Result offset. */
        offset?: number;
      };
      output: {
        /** Group members. */
        data: Array<{
          /** Resource ID. */
          id?: number;
          /** Resource name. */
          name?: string;
          /** Resource title. */
          title?: string;
          /** Resource slug. */
          slug?: string;
          /** Account login. */
          login?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List repositories owned by a Yuque user or group. */
    "yuque.list_repositories": {
      input: {
        /**
         * User or group login or ID.
         * @minLength 1
         */
        owner: string;
        /** Whether the repository owner is a user or a group. */
        ownerType: "users" | "groups";
        /** Result offset. */
        offset?: number;
        /**
         * Page size, up to 100.
         * @maximum 100
         */
        limit?: number;
        /** Repository type filter: Book for documents, Design for boards. */
        type?: "Book" | "Design";
        /** Set create_doc to return only repositories where documents can be created. */
        filterByAbility?: string;
      };
      output: {
        /** Repositories. */
        data: Array<{
          /** Resource ID. */
          id?: number;
          /** Resource name. */
          name?: string;
          /** Resource title. */
          title?: string;
          /** Resource slug. */
          slug?: string;
          /** Account login. */
          login?: string;
          /** Full owner/repository namespace. */
          namespace?: string;
          /** Visibility: 0 private, 1 public, 2 within the enterprise. */
          public?: 0 | 1 | 2;
          /** Repository table of contents. */
          toc_yml?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List a user's Yuque groups with optional role and offset filters. */
    "yuque.list_user_groups": {
      input: {
        /**
         * User or group login or ID.
         * @minLength 1
         */
        user: string;
        /** Membership role: 0 administrator, 1 member. */
        role?: 0 | 1;
        /** Result offset. */
        offset?: number;
      };
      output: {
        /** User groups. The official specification describes an object; array responses are also preserved. */
        data: {
          /** Resource ID. */
          id?: number;
          /** Resource name. */
          name?: string;
          /** Resource title. */
          title?: string;
          /** Resource slug. */
          slug?: string;
          /** Account login. */
          login?: string;
          [key: string]: unknown;
        } | Array<{
          /** Resource ID. */
          id?: number;
          /** Resource name. */
          name?: string;
          /** Resource title. */
          title?: string;
          /** Resource slug. */
          slug?: string;
          /** Account login. */
          login?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search Yuque documents or repositories. Each page contains up to 20 results. */
    "yuque.search": {
      input: {
        /**
         * Search keywords.
         * @maxLength 200
         */
        q: string;
        /** Search documents or repositories. */
        type: "doc" | "repo";
        /**
         * Group login or owner/repository namespace. Omit to search the current user/group.
         * @maxLength 400
         */
        scope?: string;
        /**
         * Page number, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        /** Filter by the author's login. */
        creator?: string;
        /** Filter by author ID (deprecated upstream; use creator when the login is known). */
        creatorId?: number;
      };
      output: {
        /** Search results. */
        data: Array<{
          /** Resource ID. */
          id?: number;
          /** Result type: doc or repo. */
          type?: string;
          /** Title with matched text marked by em tags. */
          title?: string;
          /** Summary with matched text marked by em tags. */
          summary?: string;
          /** Resource URL. */
          url?: string;
          /** Yuque resource with upstream fields. */
          target?: {
            /** Resource ID. */
            id?: number;
            /** Resource name. */
            name?: string;
            /** Resource title. */
            title?: string;
            /** Resource slug. */
            slug?: string;
            /** Account login. */
            login?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update a Yuque document's title, slug, visibility or body. Only supplied fields are sent. */
    "yuque.update_document": {
      input: {
        /** Repository ID or owner/repository namespace, such as team/handbook. */
        repo: number | string;
        /**
         * Document ID or slug.
         * @minLength 1
         */
        id: string;
        /** Document slug. */
        slug?: string;
        /** Document title. */
        title?: string;
        /** Visibility: 0 private, 1 public, 2 within the enterprise. */
        public?: 0 | 1 | 2;
        /** Body format. Omitted values use the upstream default (Markdown). */
        format?: "markdown" | "html" | "lake";
        /** Document body in the selected format. */
        body?: string;
      };
      output: {
        /** Yuque document with upstream fields. */
        data: {
          /** Resource ID. */
          id?: number;
          /** Resource name. */
          name?: string;
          /** Resource title. */
          title?: string;
          /** Resource slug. */
          slug?: string;
          /** Account login. */
          login?: string;
          /** Repository ID. */
          book_id?: number;
          /** Returned body format. */
          format?: string;
          /** Original document body. */
          body?: string;
          /** Draft document body. */
          body_draft?: string;
          /** Document body as HTML. */
          body_html?: string;
          /** Document body in Lake format. */
          body_lake?: string;
          /** Sheet content encoded as a JSON string. */
          body_sheet?: string;
          /** Table content and pagination encoded as a JSON string. */
          body_table?: string;
          /** Latest published version ID. */
          latest_version_id?: number;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update a Yuque repository, optionally replacing its Markdown table of contents. */
    "yuque.update_repository": {
      input: {
        /** Repository ID or owner/repository namespace, such as team/handbook. */
        repo: number | string;
        /** Repository name. */
        name?: string;
        /** Repository slug. */
        slug?: string;
        /** Repository description. */
        description?: string;
        /** Visibility: 0 private, 1 public, 2 within the enterprise. */
        public?: 0 | 1 | 2;
        /** Markdown table of contents, using nested list links such as - [Title](document-slug). */
        toc?: string;
      };
      output: {
        /** Yuque repository with upstream fields. */
        data: {
          /** Resource ID. */
          id?: number;
          /** Resource name. */
          name?: string;
          /** Resource title. */
          title?: string;
          /** Resource slug. */
          slug?: string;
          /** Account login. */
          login?: string;
          /** Full owner/repository namespace. */
          namespace?: string;
          /** Visibility: 0 private, 1 public, 2 within the enterprise. */
          public?: 0 | 1 | 2;
          /** Repository table of contents. */
          toc_yml?: string;
          [key: string]: unknown;
        };
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create, move, edit or remove Yuque table of contents nodes. Removing a node does not delete its linked document. */
    "yuque.update_table_of_contents": {
      input: (unknown) & (unknown) & (unknown);
      output: {
        /** Table of contents nodes. */
        data: Array<{
          /** Node UUID. */
          uuid?: string;
          /** Node type: DOC, LINK or TITLE. */
          type?: string;
          /** Node title. */
          title?: string;
          /** Node URL. */
          url?: string;
          /** Linked document ID. */
          doc_id?: number;
          /** Parent node UUID. */
          parent_uuid?: string;
          /** First child node UUID. */
          child_uuid?: string;
          /** Next sibling node UUID. */
          sibling_uuid?: string;
          /** Previous sibling node UUID. */
          prev_uuid?: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Yuque. */
        meta?: {
          /** Total result count. */
          total?: number;
          /** Current page number. */
          pageNo?: number;
          /** Page size. */
          pageSize?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
