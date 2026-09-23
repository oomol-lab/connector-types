import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Attach an existing tag or create and attach a named tag to a Riddle. */
    "riddle_quiz_maker.add_riddle_tag": {
      input: Record<string, unknown>;
      output: {
        /** A Riddle object returned by the Riddle API. */
        riddle: Record<string, unknown>;
      };
    };
    /** Get the HTML embed code for a published Riddle. */
    "riddle_quiz_maker.get_embed_code": {
      input: {
        /**
         * The UUID of the Riddle to operate on.
         * @minLength 1
         */
        riddleUuid: string;
      };
      output: {
        /** The HTML embed code returned by Riddle. */
        embedCode: string;
      };
    };
    /** Get one Riddle project by its numeric ID. */
    "riddle_quiz_maker.get_project": {
      input: {
        /**
         * The numeric Riddle project ID.
         * @minimum 1
         */
        projectId: number;
      };
      output: {
        /** A project object returned by the Riddle API. */
        project: Record<string, unknown>;
      };
    };
    /** Get one Riddle, including its content, settings, and metadata. */
    "riddle_quiz_maker.get_riddle": {
      input: {
        /**
         * The UUID of the Riddle to operate on.
         * @minLength 1
         */
        riddleUuid: string;
      };
      output: {
        /** A Riddle object returned by the Riddle API. */
        riddle: Record<string, unknown>;
      };
    };
    /** List projects available to the authenticated Riddle user. */
    "riddle_quiz_maker.list_projects": {
      input: {
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of projects per page.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The projects returned by Riddle. */
        projects: Array<Record<string, unknown>>;
        /** Pagination metadata returned by the Riddle API. */
        pagination: {
          /** The current page number. */
          page?: number;
          /** The number of items requested per page. */
          pageSize?: number;
          /** The total number of matching items. */
          total?: number;
          /** Whether another page is available. */
          hasMore?: boolean;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List every tag attached to one Riddle. */
    "riddle_quiz_maker.list_riddle_tags": {
      input: {
        /**
         * The UUID of the Riddle to operate on.
         * @minLength 1
         */
        riddleUuid: string;
      };
      output: {
        /** The tags returned by Riddle. */
        tags: Array<Record<string, unknown>>;
      };
    };
    /** List and search Riddles with documented filters and pagination. */
    "riddle_quiz_maker.list_riddles": {
      input: {
        /**
         * The numeric Riddle project ID.
         * @minimum 1
         */
        project?: number;
        /**
         * Only return Riddles of this type, such as Quiz or Poll.
         * @minLength 1
         */
        type?: string;
        /**
         * Exclude Riddles of this type.
         * @minLength 1
         */
        notType?: string;
        /** Tag IDs that every returned Riddle must have. */
        tags?: Array<number>;
        /** Only return Riddles with this publication status. */
        status?: "published" | "modified" | "draft";
        /**
         * A search term for Riddle titles or UUIDs.
         * @minLength 1
         */
        search?: string;
        /** Only return Riddles created through this origin. */
        origin?: "api" | "manual";
        /** The Riddle field used for sorting. */
        sortBy?: "created" | "published" | "modified";
        /** The result sort direction. */
        sortOrder?: "ASC" | "DESC";
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of Riddles per page, up to 300.
         * @minimum 1
         * @maximum 300
         */
        pageSize?: number;
      };
      output: {
        /** The Riddles on this page. */
        riddles: Array<Record<string, unknown>>;
        /** Pagination metadata returned by the Riddle API. */
        pagination: {
          /** The current page number. */
          page?: number;
          /** The number of items requested per page. */
          pageSize?: number;
          /** The total number of matching items. */
          total?: number;
          /** Whether another page is available. */
          hasMore?: boolean;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List tags and their occurrence counts for a Riddle project. */
    "riddle_quiz_maker.list_tags": {
      input: {
        /**
         * The numeric Riddle project ID.
         * @minimum 1
         */
        project?: number | null;
      };
      output: {
        /** The tags returned by Riddle. */
        tags: Array<Record<string, unknown>>;
      };
    };
    /** Publish a Riddle so its public URL and embed code become available. */
    "riddle_quiz_maker.publish_riddle": {
      input: {
        /**
         * The UUID of the Riddle to operate on.
         * @minLength 1
         */
        riddleUuid: string;
      };
      output: {
        /** A Riddle object returned by the Riddle API. */
        riddle: Record<string, unknown>;
      };
    };
    /** Remove one tag from a Riddle. */
    "riddle_quiz_maker.remove_riddle_tag": {
      input: {
        /**
         * The UUID of the Riddle to operate on.
         * @minLength 1
         */
        riddleUuid: string;
        /**
         * The ID of the tag to remove from the Riddle.
         * @minimum 1
         */
        tagId: number;
      };
      output: {
        /** A Riddle object returned by the Riddle API. */
        riddle: Record<string, unknown>;
      };
    };
    /** Change the title of an existing Riddle. */
    "riddle_quiz_maker.rename_riddle": {
      input: {
        /**
         * The UUID of the Riddle to operate on.
         * @minLength 1
         */
        riddleUuid: string;
        /**
         * The new Riddle title.
         * @minLength 1
         */
        title: string;
      };
      output: {
        /** A Riddle object returned by the Riddle API. */
        riddle: Record<string, unknown>;
      };
    };
    /** Unpublish a Riddle so its public URL is no longer reachable. */
    "riddle_quiz_maker.unpublish_riddle": {
      input: {
        /**
         * The UUID of the Riddle to operate on.
         * @minLength 1
         */
        riddleUuid: string;
      };
      output: {
        /** A Riddle object returned by the Riddle API. */
        riddle: Record<string, unknown>;
      };
    };
  }
}
