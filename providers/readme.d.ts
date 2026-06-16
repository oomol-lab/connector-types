import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Ask ReadMe Owlbot a non-streaming question and return its answer with sources. */
    "readme.ask_owlbot": {
      input: {
        /**
         * The question to ask Owlbot.
         * @minLength 1
         */
        question: string;
      };
      output: {
        /** The generated answer returned by Owlbot. */
        answer?: string;
        /** The sources returned for the Owlbot answer. */
        sources?: Array<Record<string, unknown>>;
        /** The raw Owlbot response returned by ReadMe. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a ReadMe guide or reference category. */
    "readme.create_category": {
      input: {
        /** The optional ReadMe project version to send with the x-readme-version header, for example v3.0. */
        version?: string;
        /**
         * A short title for the category.
         * @minLength 1
         */
        title: string;
        /** The ReadMe category type. */
        type?: "reference" | "guide";
      };
      output: {
        /** The ReadMe category returned by the API. */
        category: Record<string, unknown>;
      };
    };
    /** Create a ReadMe changelog entry. */
    "readme.create_changelog": {
      input: {
        /**
         * The title of the ReadMe changelog entry.
         * @minLength 1
         */
        title: string;
        /** The ReadMe changelog entry type. */
        type?: "" | "added" | "fixed" | "improved" | "deprecated" | "removed";
        /**
         * The body content of the ReadMe changelog entry.
         * @minLength 1
         */
        body: string;
        /** Whether the changelog entry is hidden. */
        hidden?: boolean;
      };
      output: {
        /** The ReadMe changelog returned by the API. */
        changelog: Record<string, unknown>;
      };
    };
    /** Create a ReadMe custom page. */
    "readme.create_custom_page": {
      input: {
        /**
         * The title of the ReadMe custom page.
         * @minLength 1
         */
        title: string;
        /** The Markdown body content for the custom page. */
        body?: string;
        /** The HTML body content for the custom page. */
        html?: string;
        /** Whether ReadMe should display html instead of body. */
        htmlmode?: boolean;
        /** Whether the custom page is hidden. */
        hidden?: boolean;
      };
      output: {
        /** The ReadMe custom page returned by the API. */
        customPage: Record<string, unknown>;
      };
    };
    /** Create a ReadMe doc page using a category ID or category slug. */
    "readme.create_doc": {
      input: {
        /** The optional ReadMe project version to send with the x-readme-version header, for example v3.0. */
        version?: string;
        /**
         * The title of the ReadMe doc.
         * @minLength 1
         */
        title?: string;
        /** The ReadMe doc page type. */
        type?: "basic" | "error" | "link";
        /** The ReadMe-flavored Markdown body content for the page. */
        body?: string;
        /** The ReadMe category ID for the page. */
        category?: string;
        /** The ReadMe category slug for the page. */
        categorySlug?: string;
        /** Whether the doc is hidden. */
        hidden?: boolean;
        /** The position of the doc in the project sidebar. */
        order?: number;
        /** The parent doc ID if the page is a subpage. */
        parentDoc?: string;
        /** The parent doc slug if the page is a subpage. */
        parentDocSlug?: string;
        /** Deprecated error-page metadata for ReadMe docs. */
        error?: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: {
        /** The ReadMe doc returned by the API. */
        doc: Record<string, unknown>;
      };
    };
    /** Create a new ReadMe project version from an existing base version. */
    "readme.create_version": {
      input: {
        /**
         * The semantic version identifier for the ReadMe project version.
         * @minLength 1
         */
        version: string;
        /** The codename for the ReadMe project version. */
        codename?: string;
        /**
         * The semantic version to use as the base fork.
         * @minLength 1
         */
        from: string;
        /** Whether this version should be the main stable version. */
        is_stable?: boolean;
        /** Whether this version is beta. */
        is_beta?: boolean;
        /** Whether this version is hidden. */
        is_hidden?: boolean;
        /** Whether this version is deprecated. */
        is_deprecated?: boolean;
        /** The PDF generation status for the version. */
        pdfStatus?: string;
      };
      output: {
        /** The ReadMe version returned by the API. */
        version: Record<string, unknown>;
      };
    };
    /** Delete one ReadMe API specification by ID. */
    "readme.delete_api_specification": {
      input: {
        /**
         * The API specification ID to delete.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the ReadMe resource was deleted. */
        deleted: boolean;
      };
    };
    /** Delete one ReadMe category by slug. */
    "readme.delete_category": {
      input: {
        /**
         * The URL-safe ReadMe slug to request.
         * @minLength 1
         */
        slug: string;
        /** The optional ReadMe project version to send with the x-readme-version header, for example v3.0. */
        version?: string;
      };
      output: {
        /** Whether the ReadMe resource was deleted. */
        deleted: boolean;
      };
    };
    /** Delete one ReadMe changelog entry by slug. */
    "readme.delete_changelog": {
      input: {
        /**
         * The URL-safe ReadMe changelog slug to delete.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** Whether the ReadMe resource was deleted. */
        deleted: boolean;
      };
    };
    /** Delete one ReadMe custom page by slug. */
    "readme.delete_custom_page": {
      input: {
        /**
         * The URL-safe ReadMe custom page slug to delete.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** Whether the ReadMe resource was deleted. */
        deleted: boolean;
      };
    };
    /** Delete one ReadMe doc page by slug. */
    "readme.delete_doc": {
      input: {
        /**
         * The URL-safe ReadMe slug to request.
         * @minLength 1
         */
        slug: string;
        /** The optional ReadMe project version to send with the x-readme-version header, for example v3.0. */
        version?: string;
      };
      output: {
        /** Whether the ReadMe resource was deleted. */
        deleted: boolean;
      };
    };
    /** Delete one ReadMe project version by semver identifier. */
    "readme.delete_version": {
      input: {
        /**
         * The semver identifier for the project version, preferably the version_clean value from list_versions.
         * @minLength 1
         */
        versionId: string;
      };
      output: {
        /** Whether the ReadMe resource was deleted. */
        deleted: boolean;
      };
    };
    /** Retrieve one ReadMe API Registry entry by UUID. */
    "readme.get_api_registry": {
      input: {
        /**
         * The API Registry UUID to retrieve from ReadMe.
         * @minLength 1
         */
        uuid: string;
      };
      output: {
        /** The ReadMe API Registry entry returned by the API. */
        registry: Record<string, unknown>;
      };
    };
    /** Get one ReadMe category by slug. */
    "readme.get_category": {
      input: {
        /**
         * The URL-safe ReadMe slug to request.
         * @minLength 1
         */
        slug: string;
        /** The optional ReadMe project version to send with the x-readme-version header, for example v3.0. */
        version?: string;
      };
      output: {
        /** The ReadMe category returned by the API. */
        category: Record<string, unknown>;
      };
    };
    /** Get one ReadMe changelog entry by slug. */
    "readme.get_changelog": {
      input: {
        /**
         * The URL-safe ReadMe changelog slug to request.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** The ReadMe changelog returned by the API. */
        changelog: Record<string, unknown>;
      };
    };
    /** Get one ReadMe custom page by slug. */
    "readme.get_custom_page": {
      input: {
        /**
         * The URL-safe ReadMe custom page slug to request.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** The ReadMe custom page returned by the API. */
        customPage: Record<string, unknown>;
      };
    };
    /** Get one ReadMe doc by slug, optionally requesting the production doc version. */
    "readme.get_doc": {
      input: {
        /**
         * The URL-safe ReadMe doc slug to request.
         * @minLength 1
         */
        slug: string;
        /** Whether to request the production version of the doc. */
        production?: boolean;
        /** The optional ReadMe project version to send with the x-readme-version header, for example v3.0. */
        version?: string;
      };
      output: {
        /** The ReadMe doc returned by the API. */
        doc: Record<string, unknown>;
      };
    };
    /** Get the OpenAPI definition for the ReadMe project. */
    "readme.get_openapi_schema": {
      input: Record<string, never>;
      output: {
        /** The OpenAPI definition returned by ReadMe. */
        schema: Record<string, unknown>;
      };
    };
    /** Get metadata for the ReadMe project associated with the API key. */
    "readme.get_project": {
      input: Record<string, never>;
      output: {
        /** ReadMe project metadata returned for the API key. */
        project: {
          /** The ReadMe project name. */
          name?: string;
          /** The ReadMe project subdomain. */
          subdomain?: string;
          /** The public base URL for the ReadMe project. */
          baseUrl?: string;
          /** The ReadMe project plan when returned. */
          plan?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one ReadMe project version by semver identifier. */
    "readme.get_version": {
      input: {
        /**
         * The semver identifier for the project version, preferably the version_clean value from list_versions.
         * @minLength 1
         */
        versionId: string;
      };
      output: {
        /** The ReadMe version returned by the API. */
        version: Record<string, unknown>;
      };
    };
    /** List ReadMe API specification metadata with optional version and pagination. */
    "readme.list_api_specifications": {
      input: {
        /** The optional ReadMe project version to send with the x-readme-version header, for example v3.0. */
        version?: string;
        /**
         * The number of items to include per page. ReadMe accepts values up to 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The one-based page number to request.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The ReadMe API specification metadata records returned by the API. */
        apiSpecifications: Array<unknown>;
        /** The raw ReadMe API specification metadata payload. */
        raw: unknown;
        /** The raw Link response header returned by ReadMe when present. */
        link?: string;
        /** The x-total-count response header returned by ReadMe when present. */
        totalCount?: number;
      };
    };
    /** List ReadMe guide and reference categories with optional version and pagination. */
    "readme.list_categories": {
      input: {
        /** The optional ReadMe project version to send with the x-readme-version header, for example v3.0. */
        version?: string;
        /**
         * The number of items to include per page. ReadMe accepts values up to 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The one-based page number to request.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The ReadMe categories returned by the API. */
        categories: Array<unknown>;
        /** The raw Link response header returned by ReadMe when present. */
        link?: string;
        /** The x-total-count response header returned by ReadMe when present. */
        totalCount?: number;
      };
    };
    /** List the ReadMe docs that belong to a category slug. */
    "readme.list_category_docs": {
      input: {
        /**
         * The URL-safe ReadMe slug to request.
         * @minLength 1
         */
        slug: string;
        /** The optional ReadMe project version to send with the x-readme-version header, for example v3.0. */
        version?: string;
      };
      output: {
        /** The ReadMe docs returned for the category. */
        docs: Array<unknown>;
        /** The raw ReadMe category docs payload. */
        raw: unknown;
      };
    };
    /** List ReadMe changelog entries with optional pagination. */
    "readme.list_changelogs": {
      input: {
        /**
         * The number of items to include per page. ReadMe accepts values up to 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The one-based page number to request.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The ReadMe changelogs returned by the API. */
        changelogs: Array<unknown>;
        /** The raw Link response header returned by ReadMe when present. */
        link?: string;
        /** The x-total-count response header returned by ReadMe when present. */
        totalCount?: number;
      };
    };
    /** List ReadMe custom pages with optional pagination. */
    "readme.list_custom_pages": {
      input: {
        /**
         * The number of items to include per page. ReadMe accepts values up to 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * The one-based page number to request.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The ReadMe custom pages returned by the API. */
        customPages: Array<unknown>;
        /** The raw Link response header returned by ReadMe when present. */
        link?: string;
        /** The x-total-count response header returned by ReadMe when present. */
        totalCount?: number;
      };
    };
    /** List ReadMe outbound IP addresses used for webhook and Try It proxy requests. */
    "readme.list_outbound_ips": {
      input: Record<string, never>;
      output: {
        /** The outbound IP address entries returned by ReadMe. */
        outboundIps: Array<Record<string, unknown>>;
      };
    };
    /** List the versions configured for the ReadMe project. */
    "readme.list_versions": {
      input: Record<string, never>;
      output: {
        /** The ReadMe versions returned by the API. */
        versions: Array<unknown>;
        /** The raw ReadMe versions payload. */
        raw: unknown;
      };
    };
    /** Search ReadMe docs by text query. */
    "readme.search_docs": {
      input: {
        /**
         * The search text to look for in ReadMe docs.
         * @minLength 1
         */
        search: string;
        /** The optional ReadMe project version to send with the x-readme-version header, for example v3.0. */
        version?: string;
      };
      output: {
        /** The ReadMe docs returned by search. */
        results: Array<unknown>;
        /** The raw ReadMe search payload. */
        raw: unknown;
      };
    };
    /** Update one ReadMe category by slug. */
    "readme.update_category": {
      input: {
        /**
         * The URL-safe ReadMe category slug to update.
         * @minLength 1
         */
        slug: string;
        /** The optional ReadMe project version to send with the x-readme-version header, for example v3.0. */
        version?: string;
        /**
         * A short title for the category.
         * @minLength 1
         */
        title?: string;
        /** The ReadMe category type. */
        type?: "reference" | "guide";
      };
      output: {
        /** The ReadMe category returned by the API. */
        category: Record<string, unknown>;
      };
    };
    /** Update one ReadMe changelog entry by slug. */
    "readme.update_changelog": {
      input: {
        /**
         * The URL-safe ReadMe changelog slug to update.
         * @minLength 1
         */
        slug: string;
        /**
         * The title of the ReadMe changelog entry.
         * @minLength 1
         */
        title?: string;
        /** The ReadMe changelog entry type. */
        type?: "" | "added" | "fixed" | "improved" | "deprecated" | "removed";
        /**
         * The body content of the ReadMe changelog entry.
         * @minLength 1
         */
        body?: string;
        /** Whether the changelog entry is hidden. */
        hidden?: boolean;
      };
      output: {
        /** The ReadMe changelog returned by the API. */
        changelog: Record<string, unknown>;
      };
    };
    /** Update one ReadMe custom page by slug. */
    "readme.update_custom_page": {
      input: {
        /**
         * The URL-safe ReadMe custom page slug to update.
         * @minLength 1
         */
        slug: string;
        /**
         * The title of the ReadMe custom page.
         * @minLength 1
         */
        title?: string;
        /** The Markdown body content for the custom page. */
        body?: string;
        /** The HTML body content for the custom page. */
        html?: string;
        /** Whether ReadMe should display html instead of body. */
        htmlmode?: boolean;
        /** Whether the custom page is hidden. */
        hidden?: boolean;
      };
      output: {
        /** The ReadMe custom page returned by the API. */
        customPage: Record<string, unknown>;
      };
    };
    /** Update one ReadMe doc page by slug. */
    "readme.update_doc": {
      input: {
        /**
         * The URL-safe ReadMe doc slug to update.
         * @minLength 1
         */
        slug?: string;
        /** The optional ReadMe project version to send with the x-readme-version header, for example v3.0. */
        version?: string;
        /**
         * The title of the ReadMe doc.
         * @minLength 1
         */
        title?: string;
        /** The ReadMe doc page type. */
        type?: "basic" | "error" | "link";
        /** The ReadMe-flavored Markdown body content for the page. */
        body?: string;
        /** The ReadMe category ID for the page. */
        category?: string;
        /** The ReadMe category slug for the page. */
        categorySlug?: string;
        /** Whether the doc is hidden. */
        hidden?: boolean;
        /** The position of the doc in the project sidebar. */
        order?: number;
        /** The parent doc ID if the page is a subpage. */
        parentDoc?: string;
        /** The parent doc slug if the page is a subpage. */
        parentDocSlug?: string;
        /** Deprecated error-page metadata for ReadMe docs. */
        error?: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: {
        /** The ReadMe doc returned by the API. */
        doc: Record<string, unknown>;
      };
    };
    /** Update one ReadMe project version by semver identifier. */
    "readme.update_version": {
      input: {
        /**
         * The semver identifier for the ReadMe project version to update.
         * @minLength 1
         */
        versionId: string;
        /**
         * The semantic version identifier for the ReadMe project version.
         * @minLength 1
         */
        version?: string;
        /** The codename for the ReadMe project version. */
        codename?: string;
        /**
         * The semantic version to use as the base fork.
         * @minLength 1
         */
        from?: string;
        /** Whether this version should be the main stable version. */
        is_stable?: boolean;
        /** Whether this version is beta. */
        is_beta?: boolean;
        /** Whether this version is hidden. */
        is_hidden?: boolean;
        /** Whether this version is deprecated. */
        is_deprecated?: boolean;
        /** The PDF generation status for the version. */
        pdfStatus?: string;
      };
      output: {
        /** The ReadMe version returned by the API. */
        version: Record<string, unknown>;
      };
    };
  }
}
