import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve an Agility CMS content item by content ID for a locale. */
    "agility.get_content_item": {
      input: {
        /**
         * The Agility CMS instance GUID from the API Keys section.
         * @minLength 1
         */
        guid: string;
        /** The Agility Content Fetch API type to query. */
        apiType: "fetch" | "preview";
        /**
         * The locale code to retrieve content for.
         * @minLength 1
         */
        locale: string;
        /**
         * The Agility CMS content ID of the requested item.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The maximum level to expand linked content.
         * @minimum 0
         * @maximum 5
         */
        contentLinkDepth?: number;
        /** Whether to expand entire linked content references, including lists and grid-linked items. */
        expandAllContentLinks?: boolean;
      };
      output: {
        /** Raw Agility CMS response payload. */
        item: unknown;
        /** Raw Agility CMS response payload. */
        raw: unknown;
      };
    };
    /** Retrieve an Agility CMS content list by reference name with optional pagination, filtering, sorting, and linked-content expansion. */
    "agility.get_content_list": {
      input: {
        /**
         * The Agility CMS instance GUID from the API Keys section.
         * @minLength 1
         */
        guid: string;
        /** The Agility Content Fetch API type to query. */
        apiType: "fetch" | "preview";
        /**
         * The locale code to retrieve content for.
         * @minLength 1
         */
        locale: string;
        /**
         * The unique reference name of the content list to retrieve in the current locale.
         * @minLength 1
         */
        referenceName: string;
        /**
         * The maximum level to expand linked content.
         * @minimum 0
         * @maximum 5
         */
        contentLinkDepth?: number;
        /** Whether to expand entire linked content references, including lists and grid-linked items. */
        expandAllContentLinks?: boolean;
        /**
         * A comma-separated list of fields to return.
         * @minLength 1
         */
        fields?: string;
        /**
         * The maximum number of items to retrieve. Agility CMS allows up to 250.
         * @minimum 1
         * @maximum 250
         */
        take?: number;
        /**
         * The number of items to skip for pagination.
         * @minimum 0
         */
        skip?: number;
        /**
         * The Agility CMS list filter expression to apply.
         * @minLength 1
         */
        filter?: string;
        /**
         * The field path to sort results by, such as fields.title or properties.created.
         * @minLength 1
         */
        sort?: string;
        /** The direction to sort list results by. */
        direction?: "asc" | "desc";
      };
      output: {
        /** Raw Agility CMS response payload. */
        list: unknown;
        /** Raw Agility CMS response payload. */
        raw: unknown;
      };
    };
    /** Retrieve an Agility CMS flat sitemap keyed by page path for a channel. */
    "agility.get_flat_sitemap": {
      input: {
        /**
         * The Agility CMS instance GUID from the API Keys section.
         * @minLength 1
         */
        guid: string;
        /** The Agility Content Fetch API type to query. */
        apiType: "fetch" | "preview";
        /**
         * The locale code to retrieve content for.
         * @minLength 1
         */
        locale: string;
        /**
         * The reference name of the digital channel, such as website.
         * @minLength 1
         */
        channelName: string;
      };
      output: {
        /** Flat sitemap keyed by page path. */
        sitemap: Record<string, unknown>;
        /** Raw Agility CMS response payload. */
        raw: unknown;
      };
    };
    /** Retrieve an Agility CMS nested sitemap for generating menus or navigation. */
    "agility.get_nested_sitemap": {
      input: {
        /**
         * The Agility CMS instance GUID from the API Keys section.
         * @minLength 1
         */
        guid: string;
        /** The Agility Content Fetch API type to query. */
        apiType: "fetch" | "preview";
        /**
         * The locale code to retrieve content for.
         * @minLength 1
         */
        locale: string;
        /**
         * The reference name of the digital channel, such as website.
         * @minLength 1
         */
        channelName: string;
      };
      output: {
        /** Nested sitemap entries returned by Agility CMS. */
        sitemap: Array<unknown>;
        /** Raw Agility CMS response payload. */
        raw: unknown;
      };
    };
    /** Retrieve an Agility CMS page by page ID for a locale. */
    "agility.get_page": {
      input: {
        /**
         * The Agility CMS instance GUID from the API Keys section.
         * @minLength 1
         */
        guid: string;
        /** The Agility Content Fetch API type to query. */
        apiType: "fetch" | "preview";
        /**
         * The locale code to retrieve content for.
         * @minLength 1
         */
        locale: string;
        /**
         * The unique Agility CMS page ID to retrieve.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The maximum level to expand linked content.
         * @minimum 0
         * @maximum 5
         */
        contentLinkDepth?: number;
        /** Whether to expand entire linked content references, including lists and grid-linked items. */
        expandAllContentLinks?: boolean;
      };
      output: {
        /** Raw Agility CMS response payload. */
        page: unknown;
        /** Raw Agility CMS response payload. */
        raw: unknown;
      };
    };
    /** List content models for an Agility CMS instance using the Content Fetch API. */
    "agility.list_content_models": {
      input: {
        /**
         * The Agility CMS instance GUID from the API Keys section.
         * @minLength 1
         */
        guid: string;
        /** The Agility Content Fetch API type to query. */
        apiType: "fetch" | "preview";
        /**
         * Only return model updates after this last modified date and time.
         * @format date-time
         */
        lastModifiedDate?: string;
      };
      output: {
        /** Content models returned by Agility CMS. */
        models: Array<unknown>;
        /** Raw Agility CMS response payload. */
        raw: unknown;
      };
    };
  }
}
