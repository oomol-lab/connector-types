import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a ShowDoc catalog under the project root or a parent catalog. */
    "showdoc.create_catalog": {
      input: {
        /**
         * The new catalog name.
         * @minLength 1
         */
        cat_name: string;
        /**
         * The parent catalog ID; omit or use zero for the project root.
         * @minimum 0
         */
        parent_cat_id?: number;
        /** The display order; ShowDoc defaults to 99 when omitted. */
        s_number?: number;
      };
      output: {
        /** The catalog ID returned by ShowDoc. */
        cat_id: number | string;
        /** The catalog name returned by ShowDoc. */
        cat_name?: string;
        /** The parent catalog ID; zero denotes the project root. */
        parent_cat_id?: number | string;
        /** The catalog display order. */
        s_number?: number | string;
        [key: string]: unknown;
      };
    };
    /** Delete an uploaded ShowDoc attachment by file ID, access signature, or attachment URL. */
    "showdoc.delete_attachment": {
      input: Record<string, unknown>;
      output: {
        /** The deleted attachment ID. */
        file_id: number | string;
        [key: string]: unknown;
      };
    };
    /** Delete a ShowDoc catalog and all its subcatalogs, moving their pages to the recycle bin. */
    "showdoc.delete_catalog": {
      input: {
        /**
         * The catalog ID.
         * @minimum 1
         */
        cat_id: number;
      };
      output: {
        /** The deleted catalog ID. */
        cat_id: number | string;
        [key: string]: unknown;
      };
    };
    /** Move a ShowDoc page to the recycle bin. */
    "showdoc.delete_page": {
      input: {
        /**
         * The page ID.
         * @minimum 1
         */
        page_id: number;
      };
      output: {
        /** The deleted page ID. */
        page_id: number | string;
        [key: string]: unknown;
      };
    };
    /** Read the complete ShowDoc project catalog and page tree. */
    "showdoc.get_catalog_tree": {
      input: Record<string, never>;
      output: {
        /** Pages at the project root. */
        pages: Array<Record<string, unknown>>;
        /** Catalogs with their nested pages and subcatalogs. */
        catalogs: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Read a ShowDoc page by ID or title and decode one layer of HTML escaping in its content. Prefer ID when titles repeat across catalogs. */
    "showdoc.get_page": {
      input: Record<string, unknown>;
      output: {
        /** The page ID returned by ShowDoc. */
        page_id: number | string;
        /** The page title returned by ShowDoc. */
        page_title?: string;
        /** The page content with one layer of ShowDoc HTML escaping decoded. */
        page_content?: string;
        [key: string]: unknown;
      };
    };
    /** Change a ShowDoc catalog name or display order. */
    "showdoc.update_catalog": {
      input: Record<string, unknown>;
      output: {
        /** The catalog ID returned by ShowDoc. */
        cat_id: number | string;
        /** The catalog name returned by ShowDoc. */
        cat_name?: string;
        /** The parent catalog ID; zero denotes the project root. */
        parent_cat_id?: number | string;
        /** The catalog display order. */
        s_number?: number | string;
        [key: string]: unknown;
      };
    };
    /** Create or update a ShowDoc page by its title within a catalog, automatically creating the catalog path when needed. */
    "showdoc.update_page": {
      input: {
        /**
         * The page title, unique within its catalog.
         * @minLength 1
         */
        page_title: string;
        /** The complete Markdown or HTML page content to write. */
        page_content: string;
        /** The catalog path, such as Guides/Setup; omit for the project root. */
        cat_name?: string;
        /** The display order; ShowDoc defaults to 99 when omitted. */
        s_number?: number;
      };
      output: {
        /** The page ID returned by ShowDoc. */
        page_id: number | string;
        /** The page title returned by ShowDoc. */
        page_title?: string;
        /** The page content with one layer of ShowDoc HTML escaping decoded. */
        page_content?: string;
        [key: string]: unknown;
      };
    };
    /** Download a file from a public URL and upload it to ShowDoc, optionally associating it with a page. */
    "showdoc.upload_attachment": {
      input: {
        /**
         * A public HTTP or HTTPS URL for the file to download.
         * @format uri
         */
        fileUrl: string;
        /**
         * The upload filename including its extension; defaults to the URL basename or attachment.bin.
         * @minLength 1
         */
        fileName?: string;
        /**
         * The page ID.
         * @minimum 1
         */
        page_id?: number;
      };
      output: {
        /** The attachment download URL. */
        url: string;
        /** The attachment ID, when returned. */
        file_id?: number | string;
        /** The attachment access signature, when returned. */
        sign?: string;
        [key: string]: unknown;
      };
    };
  }
}
