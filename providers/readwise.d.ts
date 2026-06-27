import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one or more highlights in Readwise. */
    "readwise.create_highlights": {
      input: {
        /**
         * The highlights to create.
         * @minItems 1
         */
        highlights: Array<{
          /**
           * The highlighted text to save in Readwise.
           * @minLength 1
           */
          text: string;
          /**
           * The title of the source document or book.
           * @minLength 1
           */
          title: string;
          /**
           * The author of the source document or book.
           * @minLength 1
           */
          author?: string;
          /** The Readwise highlight category such as books, articles, tweets, podcasts, or supplemental. */
          category?: "books" | "articles" | "tweets" | "podcasts" | "supplemental";
          /**
           * The source type associated with the highlight, such as kindle, pocket, instapaper, or api.
           * @minLength 1
           */
          source_type?: string;
          /** An optional note attached to the highlight. */
          note?: string;
          /**
           * The highlight location in the source when available.
           * @minimum 1
           */
          location?: number;
          /**
           * The Readwise location type, such as page or order.
           * @minLength 1
           */
          location_type?: string;
          /**
           * An ISO 8601 datetime string accepted by Readwise.
           * @minLength 1
           */
          highlighted_at?: string;
          /**
           * The URL of the highlighted source when available.
           * @minLength 1
           * @format uri
           */
          url?: string;
        }>;
      };
      output: {
        /** The books, articles, or podcasts created or updated by Readwise. */
        books: Array<{
          /** The Readwise book identifier. */
          id: number | null;
          /** The source title. */
          title: string | null;
          /** The source author. */
          author: string | null;
          /** The Readwise source category. */
          category: string | null;
          /** The source integration or origin returned by Readwise. */
          source: string | null;
          /** The number of highlights in the source. */
          numHighlights: number | null;
          /** The datetime when the source was last updated. */
          updatedAt: string | null;
          /** Highlights included with this source. */
          highlights: Array<{
            /** The Readwise highlight identifier. */
            id: number | null;
            /** The highlighted text. */
            text: string;
            /** The source title when Readwise returns it. */
            title: string | null;
            /** The source author when Readwise returns it. */
            author: string | null;
            /** The note attached to the highlight when present. */
            note: string | null;
            /** The source URL when present. */
            url: string | null;
            /** The datetime when the text was highlighted. */
            highlightedAt: string | null;
            /** The datetime when the highlight was last updated. */
            updatedAt: string | null;
            /** The raw highlight object returned by Readwise. */
            raw: Record<string, unknown>;
          }>;
          /** The raw source object returned by Readwise. */
          raw: Record<string, unknown>;
        }>;
        /** The raw list of books, articles, or podcasts returned by Readwise. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Export Readwise books and highlights updated after an optional date cursor. */
    "readwise.export_highlights": {
      input: {
        /**
         * An ISO 8601 datetime string accepted by Readwise.
         * @minLength 1
         */
        updatedAfter?: string;
        /**
         * The pagination cursor returned by a previous export response.
         * @minLength 1
         */
        pageCursor?: string;
      };
      output: {
        /** The total number of matching source records when provided. */
        count: number | null;
        /** The cursor to pass as pageCursor on the next request, or null when there are no more pages. */
        nextPageCursor: string | null;
        /** The exported books or sources. */
        books: Array<{
          /** The Readwise book identifier. */
          id: number | null;
          /** The source title. */
          title: string | null;
          /** The source author. */
          author: string | null;
          /** The Readwise source category. */
          category: string | null;
          /** The source integration or origin returned by Readwise. */
          source: string | null;
          /** The number of highlights in the source. */
          numHighlights: number | null;
          /** The datetime when the source was last updated. */
          updatedAt: string | null;
          /** Highlights included with this source. */
          highlights: Array<{
            /** The Readwise highlight identifier. */
            id: number | null;
            /** The highlighted text. */
            text: string;
            /** The source title when Readwise returns it. */
            title: string | null;
            /** The source author when Readwise returns it. */
            author: string | null;
            /** The note attached to the highlight when present. */
            note: string | null;
            /** The source URL when present. */
            url: string | null;
            /** The datetime when the text was highlighted. */
            highlightedAt: string | null;
            /** The datetime when the highlight was last updated. */
            updatedAt: string | null;
            /** The raw highlight object returned by Readwise. */
            raw: Record<string, unknown>;
          }>;
          /** The raw source object returned by Readwise. */
          raw: Record<string, unknown>;
        }>;
        /** The raw export response returned by Readwise. */
        raw: Record<string, unknown>;
      };
    };
    /** List Readwise books or sources with optional category and update filters. */
    "readwise.list_books": {
      input: {
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of books to return per page.
         * @minimum 1
         */
        pageSize?: number;
        /** The Readwise highlight category such as books, articles, tweets, podcasts, or supplemental. */
        category?: "books" | "articles" | "tweets" | "podcasts" | "supplemental";
        /**
         * An ISO 8601 datetime string accepted by Readwise.
         * @minLength 1
         */
        updatedAfter?: string;
        /**
         * An ISO 8601 datetime string accepted by Readwise.
         * @minLength 1
         */
        updatedBefore?: string;
      };
      output: {
        /** The total number of matching books when provided. */
        count: number | null;
        /** The URL for the next page, or null when there is no next page. */
        next: string | null;
        /** The URL for the previous page, or null when there is no previous page. */
        previous: string | null;
        /** The books returned by Readwise. */
        books: Array<{
          /** The Readwise book identifier. */
          id: number | null;
          /** The source title. */
          title: string | null;
          /** The source author. */
          author: string | null;
          /** The Readwise source category. */
          category: string | null;
          /** The source integration or origin returned by Readwise. */
          source: string | null;
          /** The number of highlights in the source. */
          numHighlights: number | null;
          /** The datetime when the source was last updated. */
          updatedAt: string | null;
          /** Highlights included with this source. */
          highlights: Array<{
            /** The Readwise highlight identifier. */
            id: number | null;
            /** The highlighted text. */
            text: string;
            /** The source title when Readwise returns it. */
            title: string | null;
            /** The source author when Readwise returns it. */
            author: string | null;
            /** The note attached to the highlight when present. */
            note: string | null;
            /** The source URL when present. */
            url: string | null;
            /** The datetime when the text was highlighted. */
            highlightedAt: string | null;
            /** The datetime when the highlight was last updated. */
            updatedAt: string | null;
            /** The raw highlight object returned by Readwise. */
            raw: Record<string, unknown>;
          }>;
          /** The raw source object returned by Readwise. */
          raw: Record<string, unknown>;
        }>;
        /** The raw books response returned by Readwise. */
        raw: Record<string, unknown>;
      };
    };
    /** List Readwise Reader documents with optional filters and pagination. */
    "readwise.list_documents": {
      input: {
        /**
         * The pagination cursor returned by a previous list response.
         * @minLength 1
         */
        pageCursor?: string;
        /**
         * An ISO 8601 datetime string accepted by Readwise.
         * @minLength 1
         */
        updatedAfter?: string;
        /** The Reader location filter such as new, later, shortlist, archive, or feed. */
        location?: "new" | "later" | "shortlist" | "archive" | "feed";
        /**
         * The Reader category filter such as article, email, rss, or pdf.
         * @minLength 1
         */
        category?: string;
        /**
         * Only return documents with this tag.
         * @minLength 1
         */
        tag?: string;
      };
      output: {
        /** The total number of matching documents when provided. */
        count: number | null;
        /** The cursor to pass as pageCursor on the next request, or null when there are no more pages. */
        nextPageCursor: string | null;
        /** The Reader documents returned by Readwise. */
        documents: Array<{
          /** The Readwise Reader document identifier. */
          id: string | null;
          /** The document URL. */
          url: string | null;
          /** The original source URL when Readwise returns it. */
          sourceUrl: string | null;
          /** The document title. */
          title: string | null;
          /** The document author. */
          author: string | null;
          /** The Reader category. */
          category: string | null;
          /** The Reader location such as new, later, shortlist, archive, or feed. */
          location: string | null;
          /** The document tags returned by Readwise. */
          tags: Array<string>;
          /** The datetime when the document was created. */
          createdAt: string | null;
          /** The datetime when the document was last updated. */
          updatedAt: string | null;
          /** The raw document object returned by Readwise. */
          raw: Record<string, unknown>;
        }>;
        /** The raw list response returned by Readwise. */
        raw: Record<string, unknown>;
      };
    };
    /** Save a URL into Readwise Reader with optional metadata. */
    "readwise.save_document": {
      input: {
        /**
         * The URL to save into Readwise Reader.
         * @minLength 1
         * @format uri
         */
        url: string;
        /**
         * An optional document title.
         * @minLength 1
         */
        title?: string;
        /**
         * An optional document author.
         * @minLength 1
         */
        author?: string;
        /**
         * An optional document summary.
         * @minLength 1
         */
        summary?: string;
        /** Whether Readwise should clean the saved document HTML. */
        shouldCleanHtml?: boolean;
        /**
         * A label describing the app or workflow that saved the document.
         * @minLength 1
         */
        savedUsing?: string;
        /**
         * Tags to attach to the saved document.
         * @minItems 1
         */
        tags?: Array<string>;
      };
      output: {
        /** A normalized Readwise Reader document. */
        document: {
          /** The Readwise Reader document identifier. */
          id: string | null;
          /** The document URL. */
          url: string | null;
          /** The original source URL when Readwise returns it. */
          sourceUrl: string | null;
          /** The document title. */
          title: string | null;
          /** The document author. */
          author: string | null;
          /** The Reader category. */
          category: string | null;
          /** The Reader location such as new, later, shortlist, archive, or feed. */
          location: string | null;
          /** The document tags returned by Readwise. */
          tags: Array<string>;
          /** The datetime when the document was created. */
          createdAt: string | null;
          /** The datetime when the document was last updated. */
          updatedAt: string | null;
          /** The raw document object returned by Readwise. */
          raw: Record<string, unknown>;
        };
        /** The raw save response returned by Readwise. */
        raw: Record<string, unknown>;
      };
    };
    /** Update the location, tags, or metadata for a Readwise Reader document. */
    "readwise.update_document": {
      input: {
        /**
         * The Readwise Reader document identifier.
         * @minLength 1
         */
        documentId: string;
        /** The Reader location to apply to the document. */
        location?: "new" | "later" | "shortlist" | "archive" | "feed";
        /**
         * The updated document title.
         * @minLength 1
         */
        title?: string;
        /**
         * The updated document author.
         * @minLength 1
         */
        author?: string;
        /**
         * The updated document summary.
         * @minLength 1
         */
        summary?: string;
        /**
         * The complete tag list to set on the document.
         * @minItems 1
         */
        tags?: Array<string>;
      };
      output: {
        /** A normalized Readwise Reader document. */
        document: {
          /** The Readwise Reader document identifier. */
          id: string | null;
          /** The document URL. */
          url: string | null;
          /** The original source URL when Readwise returns it. */
          sourceUrl: string | null;
          /** The document title. */
          title: string | null;
          /** The document author. */
          author: string | null;
          /** The Reader category. */
          category: string | null;
          /** The Reader location such as new, later, shortlist, archive, or feed. */
          location: string | null;
          /** The document tags returned by Readwise. */
          tags: Array<string>;
          /** The datetime when the document was created. */
          createdAt: string | null;
          /** The datetime when the document was last updated. */
          updatedAt: string | null;
          /** The raw document object returned by Readwise. */
          raw: Record<string, unknown>;
        };
        /** The raw update response returned by Readwise. */
        raw: Record<string, unknown>;
      };
    };
  }
}
