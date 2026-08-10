import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Download one book file from Z-Library and upload it to connector transit storage. */
    "zlibrary.download_book_to_file": {
      input: {
        /**
         * The Z-Library book identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The book hash used to build the metadata URL.
         * @minLength 1
         */
        hash: string;
      };
      output: {
        /** The downloaded book stored in connector transit storage. */
        file: {
          /** The file name, sanitized to a safe basename. */
          name: string;
          /** The file MIME type. */
          mimeType: string;
          /** The downloaded file size in bytes. */
          sizeBytes: number | null;
          /**
           * The transit URL where the downloaded file was stored.
           * @format uri
           */
          transitUrl: string;
        };
      };
    };
    /** Retrieve the full metadata record for one Z-Library book by id and hash. */
    "zlibrary.get_book_metadata": {
      input: {
        /**
         * The Z-Library book identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The book hash used to build the metadata URL.
         * @minLength 1
         */
        hash: string;
      };
      output: {
        /** One book record returned by the Z-Library EAPI, normalized to stable field names. */
        book: {
          /** The Z-Library book identifier. */
          id: string;
          /** The book title. */
          title: string;
          /** The primary author name. */
          author: string;
          /** The publication year as reported by Z-Library. */
          year?: string;
          /** The book language code. */
          language?: string;
          /** The file extension, e.g. pdf, epub, mobi. */
          extension?: string;
          /** The file size as reported by Z-Library. */
          size?: string;
          /** The user rating value. */
          rating?: string;
          /** The quality score reported by Z-Library. */
          quality?: string;
          /** The book hash used to build download and metadata URLs. */
          hash: string;
          /** The page count. */
          pages?: string;
          /** The ISBN when available. */
          isbn?: string;
          /** The publisher when available. */
          publisher?: string;
          /** The Z-Library book page URL. */
          url?: string;
          /** The cover image URL. */
          cover?: string;
        };
      };
    };
    /** Retrieve the daily download quota for the authenticated Z-Library account. */
    "zlibrary.get_download_limits": {
      input: Record<string, never>;
      output: {
        /** Daily download limits reported by the EAPI profile. */
        limits: {
          /** Downloads already used today. */
          daily_amount: number;
          /** Total downloads allowed per day. */
          daily_allowed: number;
          /** Downloads remaining today. */
          daily_remaining: number;
        };
      };
    };
    /** List the most recently added books on Z-Library. */
    "zlibrary.get_recent_books": {
      input: Record<string, never>;
      output: {
        /** The recent books. */
        books: Array<{
          /** The Z-Library book identifier. */
          id: string;
          /** The book title. */
          title: string;
          /** The primary author name. */
          author: string;
          /** The publication year as reported by Z-Library. */
          year?: string;
          /** The book language code. */
          language?: string;
          /** The file extension, e.g. pdf, epub, mobi. */
          extension?: string;
          /** The file size as reported by Z-Library. */
          size?: string;
          /** The user rating value. */
          rating?: string;
          /** The quality score reported by Z-Library. */
          quality?: string;
          /** The book hash used to build download and metadata URLs. */
          hash: string;
          /** The page count. */
          pages?: string;
          /** The ISBN when available. */
          isbn?: string;
          /** The publisher when available. */
          publisher?: string;
          /** The Z-Library book page URL. */
          url?: string;
          /** The cover image URL. */
          cover?: string;
        }>;
      };
    };
    /** Search books on Z-Library by keyword with optional year, language, format, and sort filters. */
    "zlibrary.search_books": {
      input: {
        /**
         * The search query, e.g. a title or author name.
         * @minLength 1
         */
        message: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The result page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /** Only books published in this year or later. */
        yearFrom?: number;
        /** Only books published in this year or earlier. */
        yearTo?: number;
        /** Only books in these languages. */
        languages?: Array<string>;
        /** Only books in these file formats. */
        extensions?: Array<string>;
        /** Require exact phrase matching for the query. */
        exact?: boolean;
        /** Sort order for the results. */
        order?: "popular" | "date_created" | "date_updated";
      };
      output: {
        /** The matching books. */
        books: Array<{
          /** The Z-Library book identifier. */
          id: string;
          /** The book title. */
          title: string;
          /** The primary author name. */
          author: string;
          /** The publication year as reported by Z-Library. */
          year?: string;
          /** The book language code. */
          language?: string;
          /** The file extension, e.g. pdf, epub, mobi. */
          extension?: string;
          /** The file size as reported by Z-Library. */
          size?: string;
          /** The user rating value. */
          rating?: string;
          /** The quality score reported by Z-Library. */
          quality?: string;
          /** The book hash used to build download and metadata URLs. */
          hash: string;
          /** The page count. */
          pages?: string;
          /** The ISBN when available. */
          isbn?: string;
          /** The publisher when available. */
          publisher?: string;
          /** The Z-Library book page URL. */
          url?: string;
          /** The cover image URL. */
          cover?: string;
        }>;
        /** The total number of matching books reported by Z-Library. */
        total: number;
      };
    };
  }
}
