import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a topic in a ClickHelp project using HTML body content and topic metadata. */
    "clickhelp.create_topic": {
      input: {
        /**
         * The project id.
         * @minLength 1
         */
        projectId: string;
        /**
         * The new topic id.
         * @minLength 1
         */
        topicId: string;
        /**
         * The topic title.
         * @minLength 1
         */
        title?: string;
        /** The topic body as HTML. */
        body?: string;
        /**
         * The topic assignee login.
         * @minLength 1
         */
        assigneeUserName?: string;
        /**
         * The topic owner login.
         * @minLength 1
         */
        ownerUserName?: string;
        /**
         * The topic workflow status.
         * @minLength 1
         */
        statusName?: string;
        /** Whether the topic should be shown in publication tables of contents. */
        showInToc?: boolean;
        /**
         * The parent table-of-contents node id.
         * @minLength 1
         */
        parentTocNodeId?: string;
        /**
         * The custom table-of-contents caption.
         * @minLength 1
         */
        tocNodeCaption?: string;
        /** The topic position in the table of contents. */
        tocNodeOrdinalNo?: number;
        /** The topic index keywords. */
        indexKeywords?: Array<string>;
      };
      output: {
        /** A ClickHelp topic. */
        topic: {
          /** The topic assignee login. */
          assigneeUserName?: string | null;
          /** The topic body HTML when returned by the endpoint. */
          body?: string | null;
          /** The compiled topic content when requested. */
          compiledContent?: string | null;
          /** The requested compiled topic content format. */
          compiledContentType?: "html" | "md" | null;
          /** The ISO 8601 creation timestamp. */
          createdOn?: string;
          /** The highlighted full-text search snippet. */
          ftsSnippet?: string | null;
          /** The highlighted full-text search title. */
          ftsTitle?: string | null;
          /** The full topic URL. */
          fullUrl?: string;
          /** The topic identifier. */
          id?: string;
          /** The topic index keywords. */
          indexKeywords?: Array<string>;
          /** The ISO 8601 modification timestamp. */
          modifiedOn?: string;
          /** The topic owner login. */
          ownerUserName?: string | null;
          /** The containing project or publication identifier. */
          projectId?: string;
          /** The containing project or publication title. */
          projectTitle?: string;
          /** The topic workflow status. */
          statusName?: string | null;
          /** The topic title. */
          title?: string;
          /** The associated table-of-contents node identifier. */
          tocNodeId?: string;
          /** Whether the topic is generated from an API definition. */
          isAutoTopic?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Get one ClickHelp project or publication by id. */
    "clickhelp.get_project": {
      input: {
        /**
         * The project or publication id.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** A ClickHelp project or publication. */
        project: {
          /** The ISO 8601 creation timestamp. */
          createdOn?: string;
          /** The full project or publication URL. */
          fullUrl?: string;
          /** The project or publication identifier. */
          id?: string;
          /** The parent project identifier for a publication. */
          parentId?: string | null;
          /** The project or publication title. */
          title?: string;
          /** The visibility returned by ClickHelp. */
          visibility?: string;
          /** The four-letter content language code. */
          lang?: string;
          /** The base-language project identifier. */
          baseLangProjectId?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get one ClickHelp topic, optionally compiling its content as HTML or Markdown. */
    "clickhelp.get_topic": {
      input: {
        /**
         * The project or publication id.
         * @minLength 1
         */
        projectId: string;
        /**
         * The topic id.
         * @minLength 1
         */
        topicId: string;
        /** The requested compiled topic content format. */
        format?: "html" | "md";
      };
      output: {
        /** A ClickHelp topic. */
        topic: {
          /** The topic assignee login. */
          assigneeUserName?: string | null;
          /** The topic body HTML when returned by the endpoint. */
          body?: string | null;
          /** The compiled topic content when requested. */
          compiledContent?: string | null;
          /** The requested compiled topic content format. */
          compiledContentType?: "html" | "md" | null;
          /** The ISO 8601 creation timestamp. */
          createdOn?: string;
          /** The highlighted full-text search snippet. */
          ftsSnippet?: string | null;
          /** The highlighted full-text search title. */
          ftsTitle?: string | null;
          /** The full topic URL. */
          fullUrl?: string;
          /** The topic identifier. */
          id?: string;
          /** The topic index keywords. */
          indexKeywords?: Array<string>;
          /** The ISO 8601 modification timestamp. */
          modifiedOn?: string;
          /** The topic owner login. */
          ownerUserName?: string | null;
          /** The containing project or publication identifier. */
          projectId?: string;
          /** The containing project or publication title. */
          projectTitle?: string;
          /** The topic workflow status. */
          statusName?: string | null;
          /** The topic title. */
          title?: string;
          /** The associated table-of-contents node identifier. */
          tocNodeId?: string;
          /** Whether the topic is generated from an API definition. */
          isAutoTopic?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** List ClickHelp projects and publications available to the connected user. */
    "clickhelp.list_projects": {
      input: {
        /** The project entity type to return. */
        type?: "Project" | "Publication";
        /**
         * The parent project id used to filter publications.
         * @minLength 1
         */
        parentId?: string;
      };
      output: {
        /** The available projects and publications. */
        projects: Array<{
          /** The ISO 8601 creation timestamp. */
          createdOn?: string;
          /** The full project or publication URL. */
          fullUrl?: string;
          /** The project or publication identifier. */
          id?: string;
          /** The parent project identifier for a publication. */
          parentId?: string | null;
          /** The project or publication title. */
          title?: string;
          /** The visibility returned by ClickHelp. */
          visibility?: string;
          /** The four-letter content language code. */
          lang?: string;
          /** The base-language project identifier. */
          baseLangProjectId?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List or search topics within one ClickHelp project or publication. */
    "clickhelp.list_topics": {
      input: {
        /**
         * The project or publication id.
         * @minLength 1
         */
        projectId: string;
        /**
         * The optional full-text query.
         * @minLength 1
         */
        query?: string;
        /** Whether search snippets should be returned with a query. */
        returnSnippets?: boolean;
        /** The maximum number of results; a negative value returns all results. */
        count?: number;
        /** The requested compiled topic content format. */
        format?: "html" | "md";
      };
      output: {
        /** The matching ClickHelp topics. */
        topics: Array<{
          /** The topic assignee login. */
          assigneeUserName?: string | null;
          /** The topic body HTML when returned by the endpoint. */
          body?: string | null;
          /** The compiled topic content when requested. */
          compiledContent?: string | null;
          /** The requested compiled topic content format. */
          compiledContentType?: "html" | "md" | null;
          /** The ISO 8601 creation timestamp. */
          createdOn?: string;
          /** The highlighted full-text search snippet. */
          ftsSnippet?: string | null;
          /** The highlighted full-text search title. */
          ftsTitle?: string | null;
          /** The full topic URL. */
          fullUrl?: string;
          /** The topic identifier. */
          id?: string;
          /** The topic index keywords. */
          indexKeywords?: Array<string>;
          /** The ISO 8601 modification timestamp. */
          modifiedOn?: string;
          /** The topic owner login. */
          ownerUserName?: string | null;
          /** The containing project or publication identifier. */
          projectId?: string;
          /** The containing project or publication title. */
          projectTitle?: string;
          /** The topic workflow status. */
          statusName?: string | null;
          /** The topic title. */
          title?: string;
          /** The associated table-of-contents node identifier. */
          tocNodeId?: string;
          /** Whether the topic is generated from an API definition. */
          isAutoTopic?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search full text across ClickHelp projects and publications available to the user. */
    "clickhelp.search_portal": {
      input: {
        /**
         * The full-text search query, including supported search operators.
         * @minLength 1
         */
        query: string;
        /** The maximum number of results; a negative value returns all results. */
        count?: number;
        /** The project or publication ids to search. */
        projectIds?: Array<string>;
        /**
         * The four-letter language code used to filter results.
         * @minLength 1
         */
        language?: string;
        /** Whether highlighted title and content snippets should be returned. */
        returnSnippets?: boolean;
        /** The requested compiled topic content format. */
        format?: "html" | "md";
      };
      output: {
        /** The matching ClickHelp topics. */
        topics: Array<{
          /** The topic assignee login. */
          assigneeUserName?: string | null;
          /** The topic body HTML when returned by the endpoint. */
          body?: string | null;
          /** The compiled topic content when requested. */
          compiledContent?: string | null;
          /** The requested compiled topic content format. */
          compiledContentType?: "html" | "md" | null;
          /** The ISO 8601 creation timestamp. */
          createdOn?: string;
          /** The highlighted full-text search snippet. */
          ftsSnippet?: string | null;
          /** The highlighted full-text search title. */
          ftsTitle?: string | null;
          /** The full topic URL. */
          fullUrl?: string;
          /** The topic identifier. */
          id?: string;
          /** The topic index keywords. */
          indexKeywords?: Array<string>;
          /** The ISO 8601 modification timestamp. */
          modifiedOn?: string;
          /** The topic owner login. */
          ownerUserName?: string | null;
          /** The containing project or publication identifier. */
          projectId?: string;
          /** The containing project or publication title. */
          projectTitle?: string;
          /** The topic workflow status. */
          statusName?: string | null;
          /** The topic title. */
          title?: string;
          /** The associated table-of-contents node identifier. */
          tocNodeId?: string;
          /** Whether the topic is generated from an API definition. */
          isAutoTopic?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update selected content or metadata fields on a ClickHelp topic. */
    "clickhelp.update_topic": {
      input: {
        /**
         * The project id.
         * @minLength 1
         */
        projectId: string;
        /**
         * The topic id.
         * @minLength 1
         */
        topicId: string;
        /**
         * The updated topic title.
         * @minLength 1
         */
        title?: string;
        /** The updated topic body as HTML. */
        body?: string;
        /**
         * The updated topic assignee login.
         * @minLength 1
         */
        assigneeUserName?: string;
        /**
         * The updated topic owner login.
         * @minLength 1
         */
        ownerUserName?: string;
        /**
         * The updated topic workflow status.
         * @minLength 1
         */
        statusName?: string;
        /** The updated topic index keywords. */
        indexKeywords?: Array<string>;
      };
      output: {
        /** A ClickHelp topic. */
        topic: {
          /** The topic assignee login. */
          assigneeUserName?: string | null;
          /** The topic body HTML when returned by the endpoint. */
          body?: string | null;
          /** The compiled topic content when requested. */
          compiledContent?: string | null;
          /** The requested compiled topic content format. */
          compiledContentType?: "html" | "md" | null;
          /** The ISO 8601 creation timestamp. */
          createdOn?: string;
          /** The highlighted full-text search snippet. */
          ftsSnippet?: string | null;
          /** The highlighted full-text search title. */
          ftsTitle?: string | null;
          /** The full topic URL. */
          fullUrl?: string;
          /** The topic identifier. */
          id?: string;
          /** The topic index keywords. */
          indexKeywords?: Array<string>;
          /** The ISO 8601 modification timestamp. */
          modifiedOn?: string;
          /** The topic owner login. */
          ownerUserName?: string | null;
          /** The containing project or publication identifier. */
          projectId?: string;
          /** The containing project or publication title. */
          projectTitle?: string;
          /** The topic workflow status. */
          statusName?: string | null;
          /** The topic title. */
          title?: string;
          /** The associated table-of-contents node identifier. */
          tocNodeId?: string;
          /** Whether the topic is generated from an API definition. */
          isAutoTopic?: boolean;
          [key: string]: unknown;
        };
      };
    };
  }
}
